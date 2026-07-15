"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { getSession, signOut as authSignOut, onAuthChange } from '../../lib/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSessionState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getSession()
      .then((current) => {
        if (active) setSessionState(current);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    const unsubscribe = onAuthChange((next) => {
      if (active) setSessionState(next);
    });

    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  async function refresh() {
    setSessionState(await getSession());
  }

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
