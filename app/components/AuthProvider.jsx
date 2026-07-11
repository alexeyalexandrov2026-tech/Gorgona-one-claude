"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { getSession, signOut as authSignOut } from '../../lib/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSessionState] = useState(null);

  useEffect(() => {
    setSessionState(getSession());
  }, []);

  function refresh() {
    setSessionState(getSession());
  }

  function signOut() {
    authSignOut();
    setSessionState(null);
  }

  return (
    <AuthContext.Provider value={{ session, refresh, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
