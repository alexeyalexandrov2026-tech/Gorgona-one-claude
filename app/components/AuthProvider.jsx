"use client";

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { getSession, signOut as authSignOut, onAuthStateChange } from '../../lib/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSessionState] = useState(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    const next = await getSession();
    setSessionState(next);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
    const unsubscribe = onAuthStateChange(refresh);
    return unsubscribe;
  }, [refresh]);

  async function signOut() {
    await authSignOut();
    setSessionState(null);
  }

  return (
    <AuthContext.Provider value={{ session, loading, refresh, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
