// Real Supabase-backed authentication (signup, login, logout, password
// reset, email verification). Falls back to a localStorage demo mode when
// Supabase env vars are not configured yet, so the UI keeps working before
// a real project is provisioned - see getSupabaseClient().
import { getSupabaseClient, isSupabaseConfigured } from './supabaseClient';

const USERS_KEY = 'gorgona-users';
const SESSION_KEY = 'gorgona-session';
const SIMULATED_DELAY_MS = 400;

function readUsers() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(window.localStorage.getItem(USERS_KEY) || '[]');
  } catch {
    return [];
  }
}

function writeUsers(users) {
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function setDemoSession(session) {
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function delay() {
  return new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function getSession() {
  const supabase = getSupabaseClient();
  if (!supabase) {
    if (typeof window === 'undefined') return null;
    try {
      return JSON.parse(window.localStorage.getItem(SESSION_KEY) || 'null');
    } catch {
      return null;
    }
  }
  const { data } = await supabase.auth.getSession();
  const user = data?.session?.user;
  if (!user) return null;
  let role = 'customer';
  try {
    const { data: profile } = await supabase.from('users').select('role,name').eq('id', user.id).maybeSingle();
    if (profile) role = profile.role || role;
    return { id: user.id, email: user.email, name: profile?.name || user.user_metadata?.name || user.email, role, emailVerified: Boolean(user.email_confirmed_at) };
  } catch {
    return { id: user.id, email: user.email, name: user.user_metadata?.name || user.email, role, emailVerified: Boolean(user.email_confirmed_at) };
  }
}

export function onAuthStateChange(callback) {
  const supabase = getSupabaseClient();
  if (!supabase) return () => {};
  const { data } = supabase.auth.onAuthStateChange(() => callback());
  return () => data?.subscription?.unsubscribe();
}

export async function signUp({ name, email, password, confirmPassword, role }, t) {
  if (!name?.trim() || !email?.trim() || !password || !confirmPassword) {
    throw new Error(t.errorRequired);
  }
  if (!isValidEmail(email)) {
    throw new Error(t.errorEmail);
  }
  if (password.length < 6) {
    throw new Error(t.errorPasswordLength);
  }
  if (password !== confirmPassword) {
    throw new Error(t.errorPasswordMatch);
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    await delay();
    const users = readUsers();
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error(t.errorEmailInUse);
    }
    const user = { name: name.trim(), email: email.trim(), password, role: role || 'customer' };
    writeUsers([...users, user]);
    const session = { name: user.name, email: user.email, role: user.role, emailVerified: true };
    setDemoSession(session);
    return session;
  }

  const { data, error } = await supabase.auth.signUp({
    email: email.trim(),
    password,
    options: {
      data: { name: name.trim(), role: role || 'customer' },
      emailRedirectTo: typeof window !== 'undefined' ? `${window.location.origin}/auth/callback` : undefined
    }
  });
  if (error) {
    if (/already registered/i.test(error.message)) throw new Error(t.errorEmailInUse);
    throw new Error(error.message);
  }
  if (data?.user) {
    await supabase.from('users').upsert({ id: data.user.id, email: data.user.email, name: name.trim(), role: role || 'customer' });
  }
  return { name: name.trim(), email: email.trim(), role: role || 'customer', emailVerified: false, pendingVerification: true };
}

export async function signIn({ email, password }, t) {
  if (!email?.trim() || !password) {
    throw new Error(t.errorRequired);
  }
  if (!isValidEmail(email)) {
    throw new Error(t.errorEmail);
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    await delay();
    const users = readUsers();
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!user) {
      throw new Error(t.errorInvalidCredentials);
    }
    const session = { name: user.name, email: user.email, role: user.role || 'customer', emailVerified: true };
    setDemoSession(session);
    return session;
  }

  const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
  if (error) {
    throw new Error(t.errorInvalidCredentials);
  }
  const user = data.user;
  const { data: profile } = await supabase.from('users').select('role,name').eq('id', user.id).maybeSingle();
  return { id: user.id, name: profile?.name || user.user_metadata?.name || user.email, email: user.email, role: profile?.role || 'customer', emailVerified: Boolean(user.email_confirmed_at) };
}

export async function signOut() {
  const supabase = getSupabaseClient();
  if (!supabase) {
    window.localStorage.removeItem(SESSION_KEY);
    return;
  }
  await supabase.auth.signOut();
}

export async function requestPasswordReset(email, t) {
  if (!isValidEmail(email)) throw new Error(t.errorEmail);
  const supabase = getSupabaseClient();
  if (!supabase) {
    await delay();
    return true;
  }
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: typeof window !== 'undefined' ? `${window.location.origin}/reset-password` : undefined
  });
  if (error) throw new Error(error.message);
  return true;
}

export async function updatePassword(newPassword, t) {
  if (!newPassword || newPassword.length < 6) throw new Error(t.errorPasswordLength);
  const supabase = getSupabaseClient();
  if (!supabase) {
    await delay();
    return true;
  }
  const { error } = await supabase.auth.updateUser({ password: newPassword });
  if (error) throw new Error(error.message);
  return true;
}

export async function resendVerificationEmail(email) {
  const supabase = getSupabaseClient();
  if (!supabase) return true;
  const { error } = await supabase.auth.resend({ type: 'signup', email });
  if (error) throw new Error(error.message);
  return true;
}

export { isSupabaseConfigured };
