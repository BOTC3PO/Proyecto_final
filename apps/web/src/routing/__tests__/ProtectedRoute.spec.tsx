import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AuthContext, type AuthContextValue, type User } from '../../auth/AuthContex';
import { ProtectedRoute } from '../ProtectedRoute';
import { homePathForRole } from '../homePath';

const Ubicacion = ({ nombre }: { nombre: string }) => {
  const l = useLocation();
  return <p data-testid="aqui">{nombre}:{l.pathname}{l.search}</p>;
};

const renderEn = (ruta: string, user: User | null) => {
  const ctx = { user, loginAs: () => {}, login: () => {}, logout: () => {}, cambiarEscuela: async () => {} } as AuthContextValue;
  return render(
    <AuthContext.Provider value={ctx}>
      <MemoryRouter initialEntries={[ruta]}>
        <Routes>
          <Route path="/login" element={<Ubicacion nombre="login" />} />
          <Route path="/profesor/*" element={<ProtectedRoute allow={['TEACHER']}><Ubicacion nombre="profesor" /></ProtectedRoute>} />
          <Route path="/menualumno" element={<Ubicacion nombre="alumno" />} />
          <Route path="/" element={<Ubicacion nombre="inicio" />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );
};

const alumno: User = { id: 'u1', name: 'Ana', role: 'USER' };
const docente: User = { id: 'u2', name: 'Doc', role: 'TEACHER' };

describe('ProtectedRoute (C4)', () => {
  it('sin sesión va al login y guarda a dónde iba', () => {
    renderEn('/profesor/aula/5?tab=notas', null);
    expect(screen.getByTestId('aqui').textContent).toBe(
      `login:/login?returnTo=${encodeURIComponent('/profesor/aula/5?tab=notas')}`
    );
  });

  it('con sesión pero sin el rol NO cae en el login: va a su propia página de inicio', () => {
    renderEn('/profesor/aula/5', alumno);
    expect(screen.getByTestId('aqui').textContent).toBe('alumno:/menualumno');
  });

  it('con el rol pedido, muestra la página', () => {
    renderEn('/profesor/aula/5', docente);
    expect(screen.getByTestId('aqui').textContent).toBe('profesor:/profesor/aula/5');
  });

  it('un usuario con varios roles pasa si alguno alcanza', () => {
    renderEn('/profesor', { ...alumno, roles: ['USER', 'TEACHER'] });
    expect(screen.getByTestId('aqui').textContent).toBe('profesor:/profesor');
  });
});

describe('homePathForRole', () => {
  it('cada rol tiene su inicio y un rol desconocido cae en la portada', () => {
    expect(homePathForRole('ADMIN')).toBe('/admin');
    expect(homePathForRole('TEACHER')).toBe('/profesor');
    expect(homePathForRole('DIRECTIVO')).toBe('/enterprise');
    expect(homePathForRole('PARENT')).toBe('/menualumno');
    expect(homePathForRole('ADMIN_ESCUELA')).toBe('/');
    expect(homePathForRole(undefined)).toBe('/');
  });
});
