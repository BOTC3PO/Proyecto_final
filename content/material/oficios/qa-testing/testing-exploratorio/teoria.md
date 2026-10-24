# QA y Testing — Testing exploratorio (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../casos-negativos/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/qa-testing/testing-exploratorio/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es

En el **testing exploratorio**, la persona **diseña, ejecuta y aprende a la vez**: no sigue un guion fijo, sino que usa lo que va descubriendo para decidir qué probar después. No es "probar sin pensar": tiene un **objetivo**, un **tiempo** y un **registro**.

Se complementa con las pruebas guionadas (casos escritos de antemano): los guiones aseguran que **no se olvide lo conocido**; la exploración busca lo **imprevisto**.

---

## 2. Cuándo conviene

- Un producto o una función **nueva**, con pocos casos escritos.
- Poco tiempo, o requisitos incompletos.
- Para buscar errores que las pruebas guionadas no detectan: combinaciones raras, recorridos inesperados, problemas de usabilidad.
- Después de una corrección, para ver si apareció algo cerca.

---

## 3. Sesiones con carta (charter)

Se trabaja en **sesiones de tiempo acotado** (por ejemplo, 60 a 90 minutos) con una **carta** (*charter*) que dice qué explorar:

> **Explorar** el formulario de pago **con** datos de tarjeta inválidos **para descubrir** cómo se manejan los errores.

Durante la sesión se anotan: qué se probó, qué se **encontró** (defectos, dudas), y qué **quedó pendiente**. Al final hay un breve resumen (*debrief*).

---

## 4. Ideas para explorar (heurísticas)

- **Variar** el orden de los pasos, saltear pasos, volver atrás, recargar la página.
- **Probar con datos extremos**: vacío, enorme, caracteres raros (`../caso-feliz-y-casos-borde/`).
- **Seguir los datos**: lo que se ingresa en un lugar, ¿cómo se ve en los demás?
- **Interrumpir**: cerrar, cortar la conexión, cambiar de pestaña.
- **Cambiar de rol**: usuario novato, usuario experto, administrador, usuario malintencionado.
- **Preguntarse "¿qué pasaría si...?"** cada vez que algo parezca raro.
- **Mirar lo sutil**: textos, alineaciones, tiempos de espera, consistencia con el resto del sistema.

---

## 5. Cómo registrar

Una libreta con **hora, qué se hizo, qué se vio**; capturas o grabación de pantalla cuando aparece un problema; y la lista de preguntas pendientes. Cuando se encuentra un defecto, se reporta (`../reporte-de-bugs/`) con pasos para repetirlo.

> **Cuidado:** un testing exploratorio sin registro no se puede repetir ni auditar. Es la diferencia entre "explorar" y "andar clickeando".
