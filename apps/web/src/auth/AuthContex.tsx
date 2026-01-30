import { createContext } from 'react';
import type { Role } from './roles';

export type User = {
  id: string;
  name: string;
  role: Role;
  schoolId?: string | null;
};

export type AuthContextValue = {
  user: User | null;
  loginAs: (role: Role, options?: { remember?: boolean; schoolId?: string | null }) => void;
  login: (user: User, options?: { remember?: boolean }) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
