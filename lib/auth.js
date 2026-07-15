// Authentication backed by Supabase Auth when configured
// (NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY). When those
// env vars are absent, it transparently falls back to a localStorage demo
// so the UI keeps working in environments without Supabase credentials.

import { getSupabaseBrowserClient, isSupabaseConfigured } from './supabaseClient';

const USERS_KEY = 'gorgona-users';
const SESSION_KEY = 'gorgona-session';
const SIMULATED_DELAY_MS = 500;

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toSession(user) {
  if (!user) return null;
  return {
    id: user.id,
    email: user.email,
    name: user.user_metadata?.name || user.email?.split('@')[0] || ''
  };
}

function validateSignUp({ name, email, password, confirmPassword }, t) {
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
}

// ---------- Supabase-backed implementation ----------

async function supabaseSignUp({ name, email, password, confirmPassword }, t) {
  validateSignUp({ name, email, password, confirmPassword }, t);
  const supabase = getSupabaseBrowserClient();
  const { data, error } = await supabase.auth.signUp({
    email: email.trim(),
    password,
    options: { data: { name: name.trim() } }
  });
  if (error) {
    throw new Error(error.message);
  }
  const session = data.session ? toSession(data.user) : null;
  return { session, needsEmailConfirmation: !data.session };
}

async function supabaseSignIn({ email, password }, t) {
  if (!email?.trim() || !password) {
    throw new Error(t.errorRequired);
  }
  if (!isValidEmail(email)) {
    throw new Error(t.errorEmail);
  }
  const supabase = getSupabaseBrowserClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password
  });
  if (error) {
    throw new Error(t.errorInvalidCredentials);
  }
  return { session: toSession(data.user) };
}

async function supabaseGetSession() {
  const supabase = getSupabaseBrowserClient();
  const { data } = await supabase.auth.getSession();
  return toSession(data.session?.user);
}

async function supabaseSignOut() {
  const supabase = getSupabaseBrowserClient();
  await supabase.auth.signOut();
}

function supabaseOnAuthChange(callback) {
  const supabase = getSupabaseBrowserClient();
  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(toSession(session?.user));
  });
  return () => data.subscription.unsubscribe();
}

// ---------- localStorage demo fallback ----------

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

async function demoSignUp({ name, email, password, confirmPassword }, t) {
  validateSignUp({ name, email, password, confirmPassword }, t);
  await delay();
  const users = readUsers();
  if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    throw new Error(t.errorEmailInUse);
  }
  const user = { name: name.trim(), email: email.trim(), password };
  writeUsers([...users, user]);
  const session = { name: user.name, email: user.email };
  setDemoSession(session);
  return { session, needsEmailConfirmation: false };
}

async function demoSignIn({ email, password }, t) {
  if (!email?.trim() || !password) {
    throw new Error(t.errorRequired);
  }
  if (!isValidEmail(email)) {
    throw new Error(t.errorEmail);
  }
  await delay();
  const users = readUsers();
  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (!user) {
    throw new Error(t.errorInvalidCredentials);
  }
  const session = { name: user.name, email: user.email };
  setDemoSession(session);
  return { session };
}

function demoGetSession() {
  if (typeof window === 'undefined') return null;
  try {
    return JSON.parse(window.localStorage.getItem(SESSION_KEY) || 'null');
  } catch {
    return null;
  }
}

function demoSignOut() {
  window.localStorage.removeItem(SESSION_KEY);
}

// ---------- public interface ----------

export async function signUp(form, t) {
  return isSupabaseConfigured() ? supabaseSignUp(form, t) : demoSignUp(form, t);
}

export async function signIn(form, t) {
  return isSupabaseConfigured() ? supabaseSignIn(form, t) : demoSignIn(form, t);
}

export async function getSession() {
  return isSupabaseConfigured() ? supabaseGetSession() : demoGetSession();
}

export async function signOut() {
  return isSupabaseConfigured() ? supabaseSignOut() : demoSignOut();
}

export function onAuthChange(callback) {
  if (isSupabaseConfigured()) {
    return supabaseOnAuthChange(callback);
  }
  return () => {};
}
