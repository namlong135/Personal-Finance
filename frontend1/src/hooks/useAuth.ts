import { useState, useEffect } from 'react';

export interface AuthState {
  user: null | { id: string; name: string };
}

export function useAuth() {
  const [auth, setAuth] = useState<AuthState>({ user: null });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setAuth({ user: JSON.parse(storedUser) });
    }
  }, []);

  return auth;
}
