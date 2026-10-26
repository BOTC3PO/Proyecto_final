# UX y diseño — Formularios y microinteracciones (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `diseño/formularios-y-microinteracciones`. Depende de `../usabilidad-heuristicas-de-nielsen/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo diseñar formularios que no frustren y cómo usar pequeñas respuestas de la interfaz para guiar.

---

## 1. El formulario es donde se pierde gente

Registrarse, pagar, pedir un turno: casi toda acción importante pasa por un formulario, y es donde mucha gente abandona. Un formulario es una conversación; cada campo es una pregunta, y cada pregunta de más cuesta atención. La regla de base es pedir solo lo necesario.

## 2. Reglas de diseño

- **Etiquetas visibles y claras** arriba o al lado de cada campo. Un texto de ayuda dentro del campo (placeholder) desaparece al escribir y no reemplaza a la etiqueta.
- **Un campo por idea** y una sola columna: se completa más rápido y con menos errores.
- **Campos del tipo correcto**: un teclado numérico para el teléfono, un selector de fecha donde convenga, autocompletado cuando el navegador puede ayudar.
- **Indicar con claridad qué es obligatorio** y qué es opcional.
- **Agrupar** campos relacionados (datos personales, dirección, pago), con títulos de sección.
- **Botón principal claro**, con un verbo que diga qué hace ("Crear cuenta"), y distinto de las acciones secundarias.
- **Formularios largos en pasos**, con indicador de progreso, de modo que cada paso sea manejable.

## 3. Validación y mensajes de error

La validación comprueba que lo ingresado sea correcto. Puede hacerse **en línea** (al salir de cada campo) o al enviar. La validación en línea ayuda a corregir enseguida, pero no conviene marcar un error mientras la persona todavía está escribiendo. Un buen mensaje de error:

- aparece **junto al campo** que falló;
- dice **qué pasó y cómo arreglarlo** ("La contraseña necesita al menos 8 caracteres", no "Entrada inválida");
- **no depende solo del color**: suma texto o ícono;
- **conserva lo que la persona ya escribió**.

Además, se previenen errores aceptando formatos variados (con o sin guiones en un teléfono) en lugar de rechazarlos, y mostrando ejemplos.

## 4. Microinteracciones

Una **microinteracción** es una respuesta pequeña de la interfaz a una acción: el botón que cambia al presionarlo, el corazón que se llena al marcar un favorito, el indicador de "escribiendo". Cumplen funciones concretas: confirmar que la acción se registró (visibilidad del estado), guiar, y dar una sensación de calidad. Su efecto debe ser breve y útil. Una animación larga o decorativa que hace esperar es un defecto, no una virtud. También hay que respetar a quienes configuraron su sistema para reducir el movimiento.

## 5. Estados que hay que diseñar

Una pantalla no tiene un solo aspecto. Cada componente debería tener definidos: estado normal, al pasar el cursor, con foco, activo, desactivado, **cargando** (con un indicador), **vacío** (una lista sin datos debería explicar qué hacer, no quedar en blanco), **error** y **éxito**. Olvidar estos estados es una fuente típica de pantallas confusas.

## N. Conexión con lo que sigue

Estos patrones se reúnen como componentes reutilizables en `sistemas-de-diseno-y-componentes/` y se evalúan con `pruebas-de-usuario/`.
