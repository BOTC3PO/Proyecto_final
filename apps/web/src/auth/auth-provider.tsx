import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Role } from './roles';
import { AuthContext, type User } from './AuthContex';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (nextUser: User) => {
    setUser(nextUser);
  };

  const loginAs = (role: Role) => {
    setUser({ id: '1', name: 'Demo', role });
  };

  const logout = () => setUser(null);

  const value = useMemo(() => ({ user, login, loginAs, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
