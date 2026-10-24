# DBA — Administración de usuarios y permisos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../../sql/insert-update-delete/`, `../../../informatica/permisos-y-usuarios/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/dba/administracion-de-usuarios-y-permisos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué hace un DBA

Un **DBA** (administrador de bases de datos) se ocupa de que las bases estén **disponibles**, **seguras**, **rápidas** y **respaldadas**. Una de sus tareas centrales es **decidir quién puede hacer qué** con los datos.

Los ejemplos usan **PostgreSQL**; otros motores (MySQL, SQL Server, Oracle) tienen **ideas iguales con sintaxis distinta**.

---

## 2. Principios

- **Mínimo privilegio:** cada persona o aplicación recibe **solo lo necesario**.
- **Separación de funciones:** administrar, desarrollar y consultar son **roles distintos**.
- **Cuentas individuales:** **nada de cuentas compartidas** (no se sabe quién hizo qué).
- **Cuentas de servicio** para las aplicaciones, **sin acceso de administrador**.
- **Auditoría:** poder **saber** quién hizo qué y cuándo.
- **Revisión periódica** de permisos.

---

## 3. Roles y usuarios

En PostgreSQL, **usuarios y grupos** son **roles**.

```sql
CREATE ROLE lectura NOLOGIN;                      -- un rol "grupo", sin inicio de sesión
CREATE ROLE ana LOGIN PASSWORD '********';        -- una persona
GRANT lectura TO ana;                             -- ana pertenece al grupo
```

- **`LOGIN`**: puede **conectarse**.
- **Roles de grupo** (`NOLOGIN`): agrupan **permisos** y se **asignan** a personas. Así, **cambiar un permiso** se hace **una vez**.
- **Superusuario** (`SUPERUSER`): **puede todo**. **Usarlo lo menos posible** y **nunca** en una aplicación.
- Las **contraseñas** son **fuertes**, **no** van en el código, y se prefiere **autenticación** por **certificados** o el sistema central de la organización.

---

## 4. Permisos (privilegios)

```sql
GRANT CONNECT ON DATABASE escuela TO lectura;
GRANT USAGE ON SCHEMA publico TO lectura;
GRANT SELECT ON ALL TABLES IN SCHEMA publico TO lectura;

GRANT SELECT, INSERT, UPDATE ON alumnos TO secretaria;
REVOKE UPDATE ON alumnos FROM secretaria;
```

- **`GRANT`** otorga y **`REVOKE`** quita.
- Privilegios principales: **`SELECT`**, **`INSERT`**, **`UPDATE`**, **`DELETE`**, **`TRUNCATE`**, **`REFERENCES`**, **`EXECUTE`** (funciones), **`USAGE`** (esquemas y secuencias), **`CREATE`**, **`CONNECT`**.
- Se pueden dar por **objeto** (**tabla**, **esquema**, **base de datos**) y **por columna** (`GRANT SELECT (nombre) ON alumnos TO ...`).
- Un permiso **sobre la tabla** no basta si **no hay acceso al esquema** (`USAGE`).
- **`WITH GRANT OPTION`** permite **dar permisos a otros**: **usarlo con cuidado**.
- Los **privilegios por defecto** (`ALTER DEFAULT PRIVILEGES`) aplican a **objetos futuros**.
- El **dueño** de un objeto tiene **todos** los permisos sobre él.

---

## 5. Cómo organizar

Un esquema típico de roles:

| Rol | Hace | Permisos |
|:--|:--|:--|
| `admin_bd` | administración | amplios (pocas personas) |
| `desarrollo` | crea y modifica estructuras en **desarrollo** | `CREATE` en entornos **no productivos** |
| `app_escritura` | la aplicación | `SELECT, INSERT, UPDATE, DELETE` sobre **sus tablas** |
| `app_lectura` / `reportes` | consultas | solo `SELECT` |
| `auditoria` | revisión | `SELECT` sobre registros |

Principios: **producción** con **menos personas** con acceso; **los cambios de estructura** pasan por **migraciones revisadas**, no por **cuentas personales**.

---

## 6. Seguridad en filas y datos sensibles

- **Seguridad a nivel de fila** (*Row Level Security*): políticas que **limitan qué filas** ve cada rol (cada docente ve **solo sus cursos**).
- **Vistas**: exponer **solo columnas y filas necesarias** (sin el DNI).
- **Enmascarar** datos sensibles en entornos de **prueba**; **no usar datos reales** en desarrollo.
- **Cifrar**: conexiones (**TLS**), **discos** y **copias**.
- **Datos personales**: cumplir las **leyes** (en Argentina, la **Ley 25.326**).

---

## 7. Auditoría y mantenimiento

- **Registrar** conexiones, cambios de estructura y **accesos a datos sensibles**.
- **Revisar** quién tiene **permisos de más** (`\du`, `\dp` en `psql`).
- **Dar de baja** cuentas de personas que **se van** o **cambian de rol**.
- **Rotar** contraseñas de las cuentas de servicio.
- **Limitar** el acceso por **red** (solo desde servidores autorizados) con el **firewall** y la configuración (`pg_hba.conf`).
- **Inyección SQL**: la aplicación usa **consultas parametrizadas**; además, un **usuario con pocos permisos** **limita el daño**.

---

## 8. Errores comunes

- **Usar el superusuario** para la aplicación.
- **Cuentas compartidas.**
- **Permisos por defecto** demasiado amplios (`PUBLIC`).
- **No revocar** accesos al cambiar de rol.
- **Contraseñas en el código.**
- **Datos reales** en entornos de prueba.
- **No auditar.**
