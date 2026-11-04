# Procedimiento ante incidentes de seguridad con datos personales (L11)

Versión 1 — 29 de octubre de 2026. Responsable: el responsable de la base de datos de Virtual Book
(ver «Evaluación de impacto», sección 1).

Marco: Ley 25.326 de Protección de Datos Personales (art. 9: el responsable debe adoptar las medidas
técnicas y organizativas para garantizar la seguridad y confidencialidad de los datos) y las medidas de
seguridad recomendadas por la Agencia de Acceso a la Información Pública (AAIP, Resolución 47/2018). La ley
argentina no fija hoy un plazo de aviso; tomamos como referencia las 72 horas del Reglamento General de
Protección de Datos europeo (arts. 33 y 34), por ser la práctica más exigente.

## 1. Qué es un incidente

Cualquier hecho que comprometa la confidencialidad, integridad o disponibilidad de datos personales. Por
ejemplo:

- acceso de alguien sin permiso a datos de una escuela, de alumnos o de familias;
- pérdida o robo de un respaldo, de una clave (`db.env`, `JWT_SECRET`, claves de pasarelas) o de un equipo;
- un error del sistema que muestre datos de una escuela a otra;
- borrado o alteración de datos sin autorización;
- caída prolongada que impida a las escuelas acceder a sus datos.

## 2. Pasos y plazos

| Paso | Qué se hace | Plazo |
|---|---|---|
| 1. Detectar y registrar | Anotar qué se vio, cuándo y quién lo informó. Abrir un registro del incidente (sección 4). | En el momento |
| 2. Contener | Cortar el acceso: revocar sesiones (`refresh_tokens`), rotar las claves expuestas, bloquear la cuenta o la ruta afectada, apagar el servicio si hace falta. | Primeras horas |
| 3. Evaluar | Qué datos, de cuántas personas y de qué escuelas; si hay menores; si los datos estaban cifrados; qué riesgo hay para las personas. Revisar `audit_logs` y los registros del servidor. | Primeras 24 horas |
| 4. Avisar a la AAIP | Si hay riesgo para las personas: qué pasó, qué datos, cuántas personas, qué se hizo y a quién contactar. | Dentro de las 72 horas |
| 5. Avisar a las escuelas | A la dirección de cada escuela afectada, con lo mismo que a la AAIP y lo que conviene comunicar a las familias. | Dentro de las 72 horas |
| 6. Avisar a las personas | Si el riesgo es alto (por ejemplo, datos de menores expuestos o contraseñas comprometidas): por correo y con aviso dentro de la plataforma, en lenguaje claro y con qué hacer (por ejemplo, cambiar la contraseña). | Sin demora indebida |
| 7. Corregir y revisar | Arreglar la causa, probarlo, y anotar qué se aprende y qué se cambia. | Al cerrar el incidente |

Si no se tiene toda la información a las 72 horas, se avisa con lo que se sabe y se completa después.

## 3. Herramientas que ya existen

- **Cerrar todas las sesiones de una cuenta:** revocar sus `refresh_tokens` (lo hacen el cambio de
  contraseña, la baja y el reinicio de la verificación en dos pasos).
- **Suspender una cuenta:** moderación → suspender (`/api/moderacion/usuarios/:id/ban`).
- **Rotar `JWT_SECRET`:** invalida todos los tokens de acceso; obliga a reconfigurar la verificación en dos
  pasos si no se definió `TOTP_ENCRYPTION_KEY`.
- **Registro de auditoría:** `audit_logs` (cambios de dinero, roles, bajas, verificación en dos pasos).
- **Respaldos:** `monolitico/config/respaldo-db.sh` (verificados al crearlos).

## 4. Registro de incidentes

Por cada incidente, aunque no se avise a nadie: fecha y hora de detección, descripción, datos y personas
afectadas, escuelas, medidas tomadas, avisos dados (a quién y cuándo) y lecciones. Se conserva 10 años.
