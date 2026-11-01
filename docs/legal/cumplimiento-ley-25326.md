# Cumplimiento de la Ley 25.326 de Protección de Datos Personales

Revisión del 1 de noviembre de 2026, sobre el código de la rama de lanzamiento. Se revisó qué datos guarda la
plataforma, cómo los obtiene, quién los ve, a quién se los pasa y cuánto tiempo los conserva, contra cada
obligación de la ley, su decreto reglamentario (1558/2001) y las disposiciones de la autoridad de control (AAIP).

Este documento no reemplaza el asesoramiento de un abogado. Sirve para saber qué está resuelto en el sistema y
qué depende de trámites o decisiones fuera del código.

## Resumen

| Estado | Cantidad |
|---|---|
| Cumple | 9 |
| Cumple después de los cambios de esta revisión | 4 |
| Falta un trámite, un dato del responsable o un acuerdo con las escuelas | 3 |
| Falta configuración del servidor | 2 |

**Para abrir al público faltan:** la inscripción de la base en el Registro Nacional (art. 21), el CUIT y el
domicilio del responsable en `apps/web/src/legal/responsable.ts`, el cifrado del disco y de las copias de
seguridad (art. 9), y una copia de seguridad fuera del servidor.

## Artículo por artículo

| Artículo | Qué exige | Cómo está | Estado |
|---|---|---|---|
| 3 | Bases de datos con fines lícitos | Uso educativo y de cobro de cuotas; no hay publicidad ni venta de datos. | Cumple |
| 4.1 | Datos ciertos, adecuados y no excesivos | Se piden nombre, usuario, correo, contraseña, fecha de nacimiento y rol. No se piden DNI, domicilio ni teléfono de alumnos. El documento solo se pide a quien quiere que se verifique su rol docente sin escuela. | Cumple |
| 4.4 | Datos exactos y actualizados | El usuario edita su perfil; la escuela corrige altas. | Cumple |
| 4.7 | Destruir los datos cuando dejan de ser necesarios | Mensajes a los 8 años; sesiones y enlaces a los 30 días; cuentas dadas de baja se anonimizan a los 30 días; registros sin confirmar el correo se anonimizan a los 30 días; lo marcado como borrado se purga a los 4 años. Las cuentas inactivas se conservan: las notas y la asistencia son registro educativo. | Cumple |
| 5 | Consentimiento libre, expreso e informado | **Antes:** el tilde de privacidad solo decía quién ve el nombre, y el servidor aceptaba registros sin consentimiento. **Ahora:** el tilde dice qué se acepta y enlaza la política, y el servidor rechaza el registro sin los dos consentimientos. Las altas que hace la escuela se apoyan en la relación escuela–familia (art. 5.2.d). | Cumple (cambio) |
| 6 | Informar finalidad, destinatarios, responsable y domicilio, carácter obligatorio de los datos y derechos | **Antes:** la política no decía qué datos son obligatorios, ni nombraba a los terceros, ni el domicilio. **Ahora:** lo dice. Falta completar el domicilio y el CUIT del responsable. | Falta el dato |
| 7 | Datos sensibles | No se piden. La política indica que las observaciones de los docentes (por ejemplo, de asistencia) no deben incluir datos de salud. | Cumple |
| 9 | Seguridad | Contraseñas con PBKDF2 (600.000 iteraciones), HTTPS, acceso por rol y por escuela con pruebas automáticas, verificación en dos pasos para directivos y administradores, bloqueo de intentos, copia diaria y procedimiento de incidentes. **Falta:** cifrado del disco y de las copias, copia fuera del servidor (F2), cabeceras de seguridad en Nginx (B1). | Falta configuración |
| 10 | Deber de confidencialidad | Los mensajes privados solo los ven sus participantes; la familia solo ve a sus hijos. Quien administre el servidor debe firmar un compromiso de confidencialidad si se suma personal. | Cumple |
| 11 | Cesión de datos | No se ceden datos. MercadoPago recibe lo necesario para cobrar. | Cumple |
| 12 | Transferencia internacional | **Antes:** la web pedía la tipografía a Google en cada visita y la política no mencionaba a Expo ni al proveedor de correo. **Ahora:** la tipografía se sirve desde el propio servidor y la política informa y pide consentimiento para Expo (EE. UU., avisos sin contenido), el correo, Cryptomus y los videos de YouTube. | Cumple (cambio) |
| 13 | Derecho de información | La política está publicada y se avisa cuando cambia. | Cumple |
| 14 | Acceso gratuito | Descarga de los datos en JSON desde el perfil. Leyenda de la Disposición 10/2008 agregada en el registro y en la política. | Cumple (cambio) |
| 16 | Rectificación y supresión (5 días hábiles) | Baja desde el perfil (anonimiza); rectificación por contacto o por la escuela. | Cumple |
| 21 | Inscripción en el Registro Nacional de Bases de Datos | No hecha (tarea L9). Es un trámite en línea en la AAIP. | Falta el trámite |
| 26 | Prestación de servicios a terceros (escuelas) | Cada escuela es responsable de los datos de sus alumnos y la plataforma los trata por cuenta de ella. Conviene un acuerdo de tratamiento de datos dentro del alta de la escuela. | Falta el acuerdo |
| Disp. 10/2008 | Leyenda obligatoria donde se recogen datos | Agregada en el formulario de registro y en la política. | Cumple (cambio) |
| Res. AAIP 47/2018 | Medidas de seguridad recomendadas | Control de acceso, registro de auditoría, copias y gestión de incidentes, sí. Cifrado en reposo, no. | Falta configuración |

## Menores de edad

La mayoría de las cuentas son de menores. Para ellos la ley se lee junto con el Código Civil y Comercial
(art. 26) y la Ley 26.061.

- **Menores de 13 años:** antes podían registrarse solos y sin fecha de nacimiento. Ahora el registro propio
  exige la fecha y, por debajo de 13 años, responde que la cuenta la crea la escuela.
- **De 13 a 17:** se registran con conocimiento de la familia (aviso en el formulario).
- **Exposición:** se quitó la página de perfil público (`/u/:usuario`), que además estaba rota. En la reventa de
  tickets, los compañeros se ven con nombre e inicial del apellido.
- **Avisos al celular:** no llevan nombres, montos ni el texto de los mensajes.
- **Mensajería:** el soporte es un chat grupal (nunca un menor a solas con alguien ajeno a su escuela) y los
  mensajes se pueden denunciar.

## Pendientes fuera del código

1. Inscribir la base en el Registro Nacional de Bases de Datos de la AAIP (art. 21).
2. Completar CUIT y domicilio del responsable en `apps/web/src/legal/responsable.ts`.
3. Cifrar el disco del servidor (o al menos la carpeta de la base y de las copias) y llevar una copia cifrada
   fuera del servidor.
4. Instalar las cabeceras de seguridad de Nginx (B1). Al instalarlas, sacar `fonts.googleapis.com` y
   `fonts.gstatic.com` de la CSP propuesta: ya no hacen falta.
5. Elegir el proveedor de correo (SMTP) y nombrarlo en la política si está en el exterior.
6. Sumar al alta de la escuela un acuerdo de tratamiento de datos (art. 25 y 26): la escuela es responsable de
   los datos de sus alumnos y la plataforma los trata por su cuenta.
