# UX y diseño — Evaluación heurística y métodos sin usuarios (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `diseño/evaluacion-heuristica-y-metodos-sin-usuarios`. Depende de `../heuristicas-de-nielsen-las-diez-completas/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo inspeccionar una interfaz sin reunir usuarios y cómo priorizar los problemas encontrados.

---

## 1. Inspeccionar en lugar de probar

Reunir usuarios cuesta tiempo y dinero. Los **métodos de inspección** permiten que especialistas revisen una interfaz y detecten problemas sin participantes. No reemplazan las pruebas con usuarios, pero encuentran muchos defectos temprano y a bajo costo. Los dos más difundidos son la evaluación heurística y el recorrido cognitivo.

## 2. Evaluación heurística: pasos

1. **Definir el alcance**: qué pantallas o flujos se revisan y para qué perfil de usuario.
2. **Elegir evaluadores**: Nielsen recomienda varios (de tres a cinco), porque cada uno encuentra problemas distintos y uno solo detecta una parte pequeña.
3. **Evaluar por separado**: cada persona recorre la interfaz dos veces, una para entender el flujo y otra para revisar cada elemento contra las diez heurísticas. Trabajar individualmente evita que las opiniones se contagien.
4. **Registrar los hallazgos**: pantalla, problema, heurística violada y una captura.
5. **Consolidar**: se juntan las listas, se eliminan duplicados y se discuten desacuerdos.
6. **Priorizar** por gravedad y proponer soluciones.

## 3. Gravedad de los problemas

No todos los problemas valen lo mismo. Se suele puntuar la gravedad con una escala de 0 a 4 combinando tres factores: **frecuencia** (cuánta gente lo sufre), **impacto** (cuánto cuesta superarlo) y **persistencia** (si es un obstáculo único que se aprende a evitar o molesta siempre).

- 0: no es un problema de usabilidad.
- 1: cosmético; se arregla si hay tiempo.
- 2: menor; baja prioridad.
- 3: mayor; importante de arreglar.
- 4: catastrófico; hay que corregirlo antes de lanzar.

Un botón mal alineado es 1; un proceso de pago que falla en un navegador común es 4.

## 4. Recorrido cognitivo

El **recorrido cognitivo** se concentra en lo fácil que es aprender el producto con el uso. Para cada paso de una tarea, el evaluador se pregunta, desde el lugar de una persona nueva: ¿sabrá qué hacer en este paso? ¿verá que existe la acción correcta? ¿entenderá que esa acción lleva a su objetivo? ¿verá la respuesta del sistema y sabrá que avanzó? Cada "no" marca un problema.

## 5. Otros métodos sin usuarios

- **Análisis de competidores**: se revisa cómo resuelven lo mismo otros productos.
- **Revisión de accesibilidad**: se verifica con las pautas WCAG y con herramientas automáticas.
- **Revisión de estándares y guías** de la plataforma o del sistema de diseño.

## 6. Límites

Los evaluadores no son los usuarios: pueden marcar como problema algo que a las personas no les afecta y pasar por alto otro que sí. Hay falsos positivos y puntos ciegos. Por eso estos métodos se combinan con pruebas de usuario: primero se limpian los problemas evidentes y después se prueba con personas.

## N. Conexión con lo que sigue

Los problemas priorizados pasan a `pruebas-de-usuario/` para comprobarlos y a `analisis-de-datos-de-uso-y-metricas-ux/` para medir si las mejoras funcionan.
