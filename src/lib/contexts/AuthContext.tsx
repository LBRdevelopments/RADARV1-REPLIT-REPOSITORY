
"use client";

import React, { createContext, useEffect, useState } from "react";
import { User } from '@supabase/supabase-js';
import { supabase } from "../supabase/supabase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const signOutUser = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut: signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
