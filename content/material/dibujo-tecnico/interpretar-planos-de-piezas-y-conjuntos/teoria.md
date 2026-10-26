# Dibujo técnico — Interpretar planos de piezas y conjuntos (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `dibujo-tecnico/interpretar-planos-de-piezas-y-conjuntos`. Depende de `../acotacion-normalizada/` y `../cortes-y-secciones/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo leer un plano: de las vistas a la pieza, y del despiece al conjunto.

---

## 1. Leer un plano es reconstruir un objeto

Hasta ahora el foco fue **dibujar**. Pero la mayor parte del tiempo, quien trabaja con planos los **lee**: un tornero que fabrica una pieza, un montador que arma un equipo, un inspector que controla. Leer un plano consiste en reconstruir mentalmente el objeto tridimensional a partir de sus representaciones planas.

## 2. Método de lectura de una pieza

1. **Mirar el rótulo**: qué es, a qué escala está, de qué material, en qué unidades y con qué sistema de proyección.
2. **Identificar las vistas**: cuál es frontal, cuál superior y cuál lateral, y si hay cortes, secciones o detalles.
3. **Reconocer las formas simples**: casi toda pieza es una combinación de prismas, cilindros, conos y esferas, a las que se les suman o restan otros. Se descompone mentalmente.
4. **Relacionar las vistas**: lo que se ve como un círculo en una vista suele ser un cilindro o un agujero en la otra. Las líneas de trazos indican lo oculto; el rayado, el material cortado.
5. **Leer las cotas**: ubican cada forma y dan su tamaño. Hay cotas de tamaño (diámetros, anchos) y cotas de posición (dónde está un agujero).
6. **Armar la pieza mental**: imaginar su aspecto en perspectiva, y hacer un croquis isométrico (`perspectivas-isometrica-y-caballera/`) ayuda a comprobarlo.

Comprobación final: ¿se pueden explicar todas las líneas del dibujo? Si queda alguna sin interpretar, la lectura está incompleta.

## 3. Plano de conjunto

Un **plano de conjunto** muestra varias piezas ensambladas, en su posición de trabajo, para entender cómo funciona el mecanismo. Se acompaña de la **lista de piezas** (`tipos-de-linea-formatos-y-rotulo/`), con cada componente numerado, y de globos con números que conectan el dibujo con la lista.

En los cortes de conjunto, el rayado de cada pieza cambia de dirección o separación para poder distinguirlas, y ejes, tornillos y pernos no se cortan (`cortes-y-secciones/`).

## 4. Despiece

Un **plano de despiece** muestra las piezas separadas (a veces con una vista explosionada), para ver cómo se arman. El despiece también sirve para ordenar la fabricación: cada pieza tiene su propio **plano de taller**, completo y acotado, que es el que se entrega a quien la fabrica.

## 5. Lectura funcional

Además de ver formas, se lee **cómo funciona**: qué piezas se mueven, cuáles son fijas, dónde hay ajustes con juego o a presión (`tolerancias-y-ajustes/`), qué uniones son desmontables (tornillos) y cuáles permanentes (soldadura). Pregunta clave: ¿qué pasa si se retira esta pieza?

## 6. Errores frecuentes

Confundir una línea de trazos con un borde visible, tomar medidas con una regla sobre el plano en vez de leer las cotas, ignorar la escala del rótulo o pasar por alto una nota. La regla es **no medir sobre el plano**: se usan las cotas, porque el papel puede haberse deformado o reproducido en otra escala.

## N. Conexión con lo que sigue

Esta lectura se aplica a `simbolos-de-soldadura-y-uniones/`, a `dibujo-arquitectonico-plantas-cortes-y-fachadas/` y, en el nivel oficio, a las unidades de lectura de planos de los oficios técnicos.
