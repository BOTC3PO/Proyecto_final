# Ciudadanía digital — Contraseñas y autenticación (teoría)

> Tema del MAPA: propuesto en `../../_plan-faltantes/academicas.md` (sin ID en `troncos.md`). Depende de `../ciudadania-digital-privacidad-huella-digital/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo se protege una cuenta: contraseñas largas y únicas, gestores de contraseñas, verificación en dos pasos y qué hacer si una cuenta se compromete.

---

## 1. Por qué importa

Una cuenta (correo, redes, banco, juegos) es la puerta a datos personales, dinero e identidad. Si alguien entra, puede leer mensajes, hacerse pasar por vos, pedir dinero a tus contactos o recuperar otras cuentas desde tu correo. El tema `../ciudadania-digital-privacidad-huella-digital/` ya mostró cuánto rastro dejamos; acá vemos cómo cerrar la puerta.

## 2. Qué hace fuerte a una contraseña

Una contraseña es más segura cuando es **larga**, **única** e **impredecible**.

- **Largura antes que rareza**: una frase de varias palabras sin relación entre sí (una *frase de contraseña*) suele ser más fuerte y más fácil de recordar que una palabra corta con símbolos. Las recomendaciones actuales, como las del instituto de estándares de Estados Unidos (NIST), priorizan la longitud.
- **Única**: no repetir la misma contraseña en varios servicios. Si un sitio sufre una filtración, los atacantes prueban esa combinación de correo y contraseña en otros lugares (ataque de *relleno de credenciales*).
- **Impredecible**: evitar fechas de cumpleaños, nombres de mascotas, equipos o secuencias como `123456`, que están en las listas que usan los atacantes.

## 3. Gestores de contraseñas

Recordar decenas de contraseñas largas y únicas es imposible; por eso se usan **gestores de contraseñas**: programas que las guardan cifradas y las generan. Solo hace falta recordar una clave maestra fuerte. Es mejor un gestor que anotar en papeles visibles, repetir claves o guardarlas en un archivo sin protección.

## 4. Verificación en dos pasos (2FA)

La **autenticación de dos factores** pide, además de la contraseña, algo más: un código, una confirmación en el celular o una llave física. Así, aunque alguien robe la contraseña, no alcanza.

- Los códigos enviados por **SMS** son mejores que nada, pero pueden interceptarse o desviarse.
- Las **aplicaciones de autenticación** generan códigos temporales y son más seguras.
- Las **llaves de seguridad** físicas y las **passkeys** (claves de acceso basadas en tu dispositivo) resisten mejor el *phishing*.

**Nunca compartas un código de verificación**, ni siquiera con alguien que diga ser de un banco o de la empresa: el código es la llave.

## 5. Mantener las cuentas a salvo

- Activá la verificación en dos pasos al menos en el correo, el banco y las redes.
- El **correo** es la cuenta más importante: permite restablecer las demás.
- Cuidado con las redes Wi-Fi públicas para operaciones sensibles.
- Mantené el sistema y las aplicaciones actualizados.
- Cerrá sesión en dispositivos ajenos.
- Revisá si tu correo apareció en filtraciones con servicios de consulta reconocidos, y cambiá la clave si es así.

## 6. Si una cuenta se compromete

Cambiá la contraseña (desde un dispositivo de confianza), cerrá las sesiones abiertas, activá la verificación en dos pasos, avisá a tus contactos y revisá si usaste esa clave en otros sitios. Si es una cuenta bancaria o hay dinero involucrado, avisá al banco de inmediato.

## N. Conexión con lo que sigue

Este tema conecta con `../phishing-y-estafas-en-linea/`, donde se ve cómo los estafadores intentan conseguir tus claves y códigos con engaños.
