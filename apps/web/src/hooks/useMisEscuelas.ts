/**
 * PLAN-multirol Fase 2 — escuelas a las que la sesión puede cambiarse.
 *
 * Vive en un hook (y no dentro del componente de sidebar) porque el
 * selector tiene que existir en los DOS shells: el de staff y el de
 * alumno. Sin él en el de alumno, alguien que es profesor en una escuela
 * y alumno en otra, parado en la segunda, no tendría forma de volver.
 */
import { useEffect, useState } from 'react';
import { useAuth } from '../auth/use-auth';
import { fetchMisEscuelas, type EscuelaDisponible } from '../services/mis-escuelas';

export type UseMisEscuelas = {
  escuelas: EscuelaDisponible[];
  /** true sólo si hay más de una: el selector se oculta en el caso normal. */
  tieneVarias: boolean;
  activa: EscuelaDisponible | undefined;
  cambiando: string | null;
  error: boolean;
  seleccionar: (escuelaId: string, onDone?: () => void) => Promise<void>;
};

export function useMisEscuelas(): UseMisEscuelas {
  const { user, cambiarEscuela } = useAuth();
  const [escuelas, setEscuelas] = useState<EscuelaDisponible[]>([]);
  const [cambiando, setCambiando] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let vivo = true;
    if (!user) {
      setEscuelas([]);
      return undefined;
    }
    fetchMisEscuelas()
      .then((res) => { if (vivo) setEscuelas(res.items ?? []); })
      // Silencioso a propósito: no poder listar las escuelas no debe romper
      // el shell. Sin lista, el selector simplemente no aparece.
      .catch(() => { if (vivo) setEscuelas([]); });
    return () => { vivo = false; };
  }, [user]);

  const seleccionar = async (escuelaId: string, onDone?: () => void) => {
    if (escuelaId === user?.schoolId) { onDone?.(); return; }
    setCambiando(escuelaId);
    setError(false);
    try {
      await cambiarEscuela(escuelaId);
      onDone?.();
      // El rol efectivo cambió (los roles del JWT son los de la escuela
      // activa), y el menú, las rutas y los permisos del shell se arman al
      // montar a partir del rol. Remontar todo es más honesto —  y mucho
      // más barato — que re-derivar media UI en caliente.
      window.location.reload();
    } catch {
      setError(true);
      setCambiando(null);
    }
  };

  return {
    escuelas,
    tieneVarias: escuelas.length > 1,
    activa: escuelas.find((e) => e.escuelaId === user?.schoolId),
    cambiando,
    error,
    seleccionar,
  };
}

/** Claves de rol ya presentes en los 12 catálogos (mismo mapa que
 *  `menu-alumno.tsx`) — evita agregar un set nuevo de traducciones. */
export const ROLE_LABEL_KEY: Record<string, string> = {
  TEACHER: 'perfil.docente',
  DIRECTIVO: 'comun.directivo',
  ADMIN: 'perfil.administrador',
  USER: 'matrizProgreso.alumno',
  PARENT: 'register.rolPadre',
};
