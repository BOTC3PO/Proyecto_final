# UX y diseño — Análisis de datos de uso y métricas UX (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `diseño/analisis-de-datos-de-uso-y-metricas-ux`. Depende de `../pruebas-de-usuario/` y `../../matematica/media-mediana-y-moda/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Qué medir en las pruebas y en el uso real, y cómo convertir números en decisiones.

---

## 1. De la observación a los números

`pruebas-de-usuario/` anunciaba este tema: los datos de las pruebas se analizan y se priorizan. Hay datos **cualitativos** (qué dijo y qué hizo la persona, dónde dudó) y **cuantitativos** (cuántas personas lo lograron, cuánto tardaron). Se complementan: las cifras muestran cuánto y dónde; las observaciones explican por qué.

## 2. Métricas básicas de una prueba

- **Tasa de éxito**: porcentaje de participantes que completan una tarea. Es el indicador más básico. Si 7 de 10 personas completan la tarea, la tasa es 70 %.
- **Tiempo en tarea**: cuánto tarda en completarla. Como unos pocos casos muy lentos distorsionan el promedio, suele usarse la **mediana** (el valor central). Es el mismo razonamiento de `matematica/media-mediana-y-moda/`.
- **Errores**: cuántos y de qué tipo se cometieron.
- **Satisfacción percibida**: cuestionarios breves después de la tarea o de la sesión.

## 3. El cuestionario SUS

La **System Usability Scale (SUS)** es un cuestionario de diez afirmaciones con respuestas de 1 a 5 (de "totalmente en desacuerdo" a "totalmente de acuerdo"), alternando afirmaciones positivas y negativas. Se calcula así: en las afirmaciones impares se resta 1 a la respuesta; en las pares se resta la respuesta a 5; se suman los diez valores y se multiplica por 2,5. El resultado va de 0 a 100. No es un porcentaje: el promedio de muchos estudios ronda los 68 puntos, y se interpreta comparando con ese valor y con versiones previas del propio producto.

## 4. Datos de uso real

Una vez lanzado el producto, se miden **tasa de conversión** (qué proporción completa una acción deseada), **abandono** en cada paso de un flujo, **tiempo hasta completar**, páginas más visitadas y búsquedas internas. Sirven para detectar dónde se pierde gente, pero no explican por qué: hay que acompañarlos con investigación.

## 5. Pruebas A/B

Una **prueba A/B** muestra a dos grupos de usuarios, elegidos al azar, versiones distintas (A y B) y compara una métrica. Para sacar conclusiones fiables: cambiar una cosa a la vez, tener suficientes participantes, dejar correr la prueba el tiempo necesario y no frenarla apenas una versión parece ganar, porque eso genera falsas conclusiones. Mide qué versión rinde más, pero no explica por qué.

## 6. Convertir datos en decisiones

Se juntan los hallazgos, se priorizan por gravedad y frecuencia, y se formulan acciones concretas. Una buena práctica es definir antes qué métrica debería mejorar con un cambio: sin esa hipótesis, cualquier resultado parece una confirmación.

## N. Conexión con lo que sigue

Cierra el ciclo de `diseno-centrado-en-el-usuario-flujo-de-trabajo/`: investigar, diseñar, probar, medir y volver a empezar.
