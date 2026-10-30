# Evaluación de impacto en la protección de datos (L12)

Versión 1 — 29 de octubre de 2026. Basada en la «Guía para la evaluación de impacto en la protección de
datos» de la AAIP y en la Ley 25.326. Se revisa cada año o ante un cambio importante.

## 1. Responsable y contacto

- **Responsable de la base de datos:** Javier Ernesto Pérez (persona humana; todavía sin razón social), CUIT [A COMPLETAR].
  El mismo dato está en `apps/web/src/legal/responsable.ts`, que usan la política de privacidad y los Términos.
- **Responsable de protección de datos (contacto):** [NOMBRE Y CORREO A COMPLETAR]. Recibe los pedidos de
  acceso, rectificación y supresión, y coordina el procedimiento ante incidentes.
- **Inscripción en el Registro Nacional de Bases de Datos (AAIP):** pendiente (L9).

## 2. Por qué hace falta

La plataforma trata datos de **menores de edad** en gran escala, y datos de su desempeño escolar, su
asistencia y los pagos de sus familias. Es el caso típico en que la guía de la AAIP recomienda una
evaluación de impacto.

## 3. Qué datos se tratan y para qué

| Datos | De quién | Para qué | Base |
|---|---|---|---|
| Nombre, usuario, correo, fecha de nacimiento | Todos | Cuenta y acceso | Consentimiento al registrarse; la escuela en el caso de alumnos |
| Aulas, progreso, intentos, notas, tareas, asistencia | Alumnos | Enseñanza y seguimiento escolar | Relación escuela–familia |
| Vínculo padre/madre–hijo | Familias | Que la familia siga a su hijo | Código que entrega la escuela |
| Cuotas y pagos (montos, estado) | Familias | Cobros de la escuela | Relación escuela–familia |
| Mensajes | Todos | Comunicación dentro de la escuela | Uso del servicio |
| Registro de auditoría | Personal | Seguridad y control de cambios de dinero | Interés legítimo |

No se tratan datos sensibles del art. 2 de la ley (salud, religión, etc.). No se usan los datos para
publicidad ni se ceden a terceros con fines comerciales.

## 4. Quién más interviene

- **Mercado Pago** (cuando se activa): procesa los pagos con la cuenta de la propia escuela.
- **Expo / Google** (notificaciones de la app): reciben solo un aviso genérico, sin datos personales.
- **Proveedor de correo** (recuperación de contraseña): recibe el correo y el enlace.

## 5. Riesgos y medidas

| Riesgo | Medidas que hoy existen | Pendiente |
|---|---|---|
| Acceso de alguien de otra escuela a datos ajenos | Alcance por escuela y por aula en cada ruta; pruebas automáticas de aislamiento | — |
| Robo de una contraseña | Hash con sal, contraseñas débiles rechazadas, límite de intentos, verificación en dos pasos (recomendada para administración y dirección) | Hacerla obligatoria para administradores |
| Sesión robada | Tokens de corta duración, rotación y revocación de refresh tokens | — |
| Datos de más o por demasiado tiempo | Plazos de conservación (mensajes 8 años, datos técnicos 30 días, cuentas borradas anonimizadas a los 30 días; publicaciones, eventos, tareas sin entregas y elementos de economía sin uso se borran definitivamente a los 4 años de marcados como borrados); baja y descarga por autoservicio. Las cuentas inactivas no se borran: son registro educativo | — |
| Exposición de menores | Nombre del alumno visible solo para su aula y su escuela; los alumnos no pueden escribir a familias de otros alumnos | — |
| Pérdida de datos | Respaldo diario verificado, 14 copias | Copia fuera del servidor (F2); retención mensual (L17) |
| Filtración | Procedimiento ante incidentes (procedimiento-incidentes.md) | Ensayarlo una vez por año |
| Pagos | Split de Mercado Pago con la cuenta de la escuela; webhooks firmados; montos verificados | Prueba real de punta a punta (E2) |

## 6. Conclusión

Con las medidas actuales el riesgo residual es aceptable para seguir operando con escuelas, siempre que se
completen antes de abrir al público los pendientes P0: inscripción en la AAIP (L9) y datos del responsable
en la política de privacidad (L10).
