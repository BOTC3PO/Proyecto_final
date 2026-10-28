import { useIsStaff } from '../auth/use-roles';
import StaffLayout from './StaffLayout';
import AlumnoLayout from './AlumnoLayout';

export default function RoleLayout() {
  // MULTIROL-02: usar helper centralizado en vez de chequear
  // `user.role` suelto. Acepta multi-rol: un TEACHER+USER es staff.
  const isStaff = useIsStaff();

  // Personal: el mismo layout que sus otras páginas (barra superior con título y modo). Antes Datasets,
  // Plantillas, Módulos y Configuración no tenían barra superior.
  if (isStaff) return <StaffLayout />;

  // Alumno y padre: el mismo layout que el resto de sus páginas (barra de alumno y fondo del tema). Antes
  // Mensajes, Perfil y Módulos usaban otra barra, con el menú hamburguesa visible también en escritorio.
  return <AlumnoLayout />;
}
