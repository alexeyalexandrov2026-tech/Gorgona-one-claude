// Lightweight demo-mode authentication. There is no backend on this branch
// (a Supabase-backed auth migration exists on a separate, divergent branch),
// so this simulates real sign-up/sign-in/sign-out state transitions -
// validation, persisted accounts, and a persisted session - entirely in
// localStorage, giving the UI genuine working flows instead of dead buttons.

const USERS_KEY = 'gorgona-users';
const SESSION_KEY = 'gorgona-session';
const SIMULATED_DELAY_MS = 500;

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

export function getSession() {
  if (typeof window === 'undefined') return null;
  try {
    return JSON.parse(window.localStorage.getItem(SESSION_KEY) || 'null');
  } catch {
    return null;
  }
}

function setSession(session) {
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function delay() {
  return new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));
}

export async function signUp({ name, email, password, confirmPassword }, t) {
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
  await delay();
  const users = readUsers();
  if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    throw new Error(t.errorEmailInUse);
  }
  const user = { name: name.trim(), email: email.trim(), password };
  writeUsers([...users, user]);
  const session = { name: user.name, email: user.email };
  setSession(session);
  return session;
}

export async function signIn({ email, password }, t) {
  if (!email?.trim() || !password) {
    throw new Error(t.errorRequired);
  }
  if (!isValidEmail(email)) {
    throw new Error(t.errorEmail);
  }
  await delay();
  const users = readUsers();
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
  if (!user) {
    throw new Error(t.errorInvalidCredentials);
  }
  const session = { name: user.name, email: user.email };
  setSession(session);
  return session;
}

export function signOut() {
  window.localStorage.removeItem(SESSION_KEY);
}
