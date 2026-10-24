# Ciberseguridad — Gestión de contraseñas (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../criptografia-basica/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/ciberseguridad/gestion-de-contrasenas/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

> **Alcance:** tema **defensivo**. Se explica **cómo proteger** cuentas, no cómo entrar en las ajenas.

## 1. Por qué importan

Las contraseñas son **la primera barrera** de casi todas las cuentas. Las **filtraciones** de datos son frecuentes, y los atacantes **prueban** las claves robadas **en otros sitios**. Una contraseña **débil o repetida** pone en riesgo **todas** las cuentas.

---

## 2. Cómo se las ataca (para entender la defensa)

| Ataque | Cómo funciona | Defensa |
|:--|:--|:--|
| **Fuerza bruta** | probar **todas las combinaciones** | **longitud**, límite de intentos |
| **Diccionario** | probar **palabras y variantes comunes** (`123456`, `contraseña`, nombres) | **no usar palabras ni datos personales** |
| **Relleno de credenciales** (*credential stuffing*) | probar **usuarios y claves filtrados** en otros sitios | **una clave distinta por cuenta**, MFA |
| **Phishing** | **engañar** a la persona para que la entregue | **desconfiar**, verificar la dirección, **llaves físicas** |
| **Keylogger / malware** | **registrar** lo que se escribe | **antivirus**, actualizaciones, **MFA** |
| **Adivinar por datos personales** | fecha de nacimiento, mascota, equipo | **no usar información personal** |
| **Ingeniería social** | pedir la clave por teléfono o mensaje | **nunca compartirla** |
| **Preguntas de seguridad** | respuestas **públicas** (ciudad natal) | **respuestas inventadas** guardadas en el gestor |

---

## 3. Qué hace fuerte a una contraseña

- **Longitud** antes que complicación: **cada carácter agregado multiplica** las combinaciones. **12 caracteres como mínimo**; **más es mejor**.
- **Frases de paso** (*passphrase*): **varias palabras al azar**, fáciles de recordar y largas (por ejemplo, 4 o 5 palabras sin relación). Pueden ser más fuertes que una "complicada" corta.
- **Única** para cada cuenta.
- **Aleatoria** (la que genera un gestor), **no basada en patrones** (`Contraseña1!`, `Qwerty123`, sustituir letras por números).
- **No** contiene **datos personales**, **palabras comunes** ni secuencias.
- **No** se **reutiliza** ni **se modifica** apenas (`clave1`, `clave2`).
- **Se cambia** si hubo una **filtración** o **sospecha**, no por calendario sin motivo.

**Entropía:** una medida de **cuán impredecible** es. Una clave de **8 caracteres aleatorios** es **mucho más débil** que una de **5 palabras al azar**.

---

## 4. Gestores de contraseñas

Un **gestor** **genera**, **guarda** y **completa** contraseñas **únicas y fuertes**, y las protege con **una sola clave maestra**.

- Se **recuerda una** (la maestra, **larga y única**) y el gestor **recuerda el resto**.
- **Cifran** la base de datos.
- Sirven para detectar **claves repetidas** o **filtradas**.
- **Reconocen el sitio**: **no completan** una clave en una página **falsa**, lo que ayuda contra el **phishing**.
- **Opciones:** **KeePassXC** (local y libre), **Bitwarden**, 1Password, los del **navegador** o el **sistema** (útiles, pero con menos funciones).
- **Proteger la cuenta del gestor** con **MFA** y **respaldar** la clave maestra y el **código de recuperación**.
- **No** guardar contraseñas en **notas del celular**, **hojas de cálculo**, **papeles pegados** ni **mensajes**.

---

## 5. Autenticación de varios factores (MFA)

**Un segundo factor** impide entrar **aunque se robe la contraseña**. Orden de **fortaleza** (de más a menos):

1. **Llave de seguridad física** (FIDO2 / passkeys): **resistente al phishing**.
2. **Aplicación autenticadora** (códigos temporales, **TOTP**).
3. **Notificación push** (aprobar en el celular; cuidado con **aprobaciones por cansancio**).
4. **SMS** (**más débil**: se puede **desviar** el número, pero **mejor que nada**).

**Activarlo** en **correo, banca, redes y gestor**, empezando por **el correo** (con él se **restablecen** las demás cuentas).

**Passkeys:** reemplazan la contraseña con **un par de claves** guardado en el dispositivo y **desbloqueado** con huella, rostro o PIN. **No se pueden robar por phishing** y **no se reutilizan**.

---

## 6. Cuando algo sale mal

- **Servicios de aviso de filtraciones** (como **Have I Been Pwned**) indican si **un correo apareció** en una filtración.
- **Si se filtró una clave:** **cambiarla** en ese sitio y **en cualquier otro** donde se **repitió**.
- **Cerrar sesiones** abiertas y **revisar** actividad sospechosa.
- **Recuperación de cuentas:** mantener **actualizados** el **teléfono y el correo alternativo**.
- **Reportar** el incidente si es una cuenta de **trabajo o escuela**.

---

## 7. Del lado de quien desarrolla

- **Nunca** guardar contraseñas en **texto plano**: usar un **hash lento con sal** (**Argon2**, **bcrypt**, **scrypt**).
- **No imponer** reglas absurdas (cambios obligatorios frecuentes, símbolos obligatorios): priorizar **longitud** y **comprobar** contra listas de claves **filtradas**.
- **Permitir pegar** y **gestores**.
- **Limitar** los intentos.
- **Ofrecer MFA** y **passkeys**.
- **Mensajes de error** genéricos.
- **Recuperación segura** (enlaces **de un solo uso** y **con vencimiento**).

---

## 8. Hábitos

1. **Gestor** de contraseñas y **MFA** en lo importante.
2. **Una clave por cuenta**, **larga**.
3. **No compartir claves**, **ni por mensaje ni por teléfono**: **nadie legítimo las pide**.
4. **Cerrar sesión** en equipos **ajenos** o **compartidos**.
5. **Actualizar** los dispositivos.
6. **Desconfiar** de pedidos urgentes.
7. **Revisar** las cuentas **vinculadas** y los **permisos** de aplicaciones.
