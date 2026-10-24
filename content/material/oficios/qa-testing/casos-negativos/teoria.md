# QA y Testing — Casos negativos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../caso-feliz-y-casos-borde/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/qa-testing/casos-negativos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es una prueba negativa

Una **prueba negativa** verifica que el sistema **se comporta bien ante lo que NO debería ocurrir**: datos inválidos, acciones no permitidas, fallas del entorno. El resultado esperado **no es que "funcione"**, sino que **rechace o maneje el problema de forma segura y clara**: un mensaje comprensible, sin romper, sin perder datos y sin exponer información interna.

Ejemplo: en un login, el caso feliz es usuario y clave correctos. Los negativos:

| Entrada | Esperado |
|:--|:--|
| clave incorrecta | rechazo con mensaje genérico ("usuario o clave incorrectos") |
| usuario inexistente | **el mismo** mensaje (no revelar si el usuario existe) |
| campos vacíos | aviso de campo obligatorio |
| 10 intentos fallidos seguidos | bloqueo temporal o demora |
| texto con comillas o código (`' OR '1'='1`) | tratado como texto, sin errores ni acceso |

---

## 2. Qué buscar

- **Validación de entradas:** vacío, tipo equivocado (letras donde van números), fuera de rango, formato inválido (correo sin `@`), demasiado largo.
- **Permisos:** un usuario sin permiso intenta entrar a una página, o modificar algo de otra persona (cambiando un número en la URL).
- **Estado inválido:** pagar un pedido ya pagado, cancelar uno ya cancelado, volver atrás tras cerrar sesión.
- **Fallas del entorno:** sin internet, servidor que no responde, disco lleno, archivo corrupto, tiempo agotado.
- **Repetición:** enviar dos veces el mismo formulario (¿se cobra dos veces?).

---

## 3. Qué es un buen manejo del error

Un buen manejo del error:

1. **Avisa** qué pasó, en lenguaje claro y sin tecnicismos.
2. **Orienta** a qué hacer ("revisá el formato del correo").
3. **No rompe** ni deja el sistema a medias; no pierde lo que el usuario ya escribió.
4. **No expone** datos internos (trazas, rutas, consultas SQL, versiones).
5. **Registra** el detalle técnico en un log para el equipo.

Un mal manejo: pantalla en blanco, "Error 500" sin explicación, un mensaje que muestra la consulta, o aceptar el dato inválido.

---

## 4. Pruebas negativas y seguridad

Muchas fallas de seguridad son fallas de validación: inyección SQL, scripts en campos de texto (XSS), subida de archivos peligrosos, acceso a recursos ajenos. Las pruebas negativas son una primera línea de defensa, aunque **no reemplazan** una revisión de seguridad especializada. Probar la seguridad de sistemas **ajenos** sin autorización es ilegal: se prueba solo en entornos propios o autorizados.
