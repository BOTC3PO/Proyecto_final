# Dibujo Técnico — Sistemas de Proyección (teoría)

> Tema del MAPA: `SIST-01`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación de los métodos para representar objetos tridimensionales en un plano bidimensional.

---

## 1. ¿Qué es un sistema de proyección?

Un sistema de proyección es un método que permite representar figuras o cuerpos en tres dimensiones sobre una superficie plana, como el papel o una pantalla. Esto se logra mediante la emisión de rayos visuales (también llamados proyectantes) desde un punto o conjunto de puntos hacia el plano donde se dibuja. La elección del sistema determina cómo se deforman las medidas y ángulos del objeto original, y es clave para comunicar ideas técnicas con precisión.

Los sistemas más usados en dibujo técnico son la proyección ortogonal, la axonométrica y la oblicua. Cada uno tiene reglas específicas sobre cómo se trazan los rayos proyectantes y qué características conserva del objeto real.

---

## 2. Proyección Ortogonal

En este sistema, los rayos proyectantes son siempre **paralelos entre sí** y perpendiculares al plano de proyección. Esto significa que no se cruzan ni convergen en un punto (como ocurre en la perspectiva), lo cual garantiza que las medidas de longitud, ángulos y proporciones del objeto se mantengan exactas en cada vista.

La proyección ortogonal es la base para dibujos técnicos industriales y arquitectónicos. Se usan varias vistas (como alzado, planta y perfil) para mostrar el objeto desde diferentes direcciones sin distorsionar ninguna dimensión. Por ejemplo, si un cubo se dibuja en proyección ortogonal, sus lados aparecerán como rectángulos perfectos, no como rombos o figuras inclinadas.

[IMAGEN: Esquema de una caja mostrando tres vistas ortogonales: alzado, planta y perfil]

---

## 3. Proyección Axonométrica

La proyección axonométrica es un tipo de dibujo en el que se representa un objeto tridimensional en dos dimensiones manteniendo las proporciones entre sus ejes principales (ancho, alto y profundidad). A diferencia de la ortogonal, aquí se permite una visión en perspectiva sin distorsionar las medidas.

La variante más común es la **isométrica**, donde los tres ejes principales forman ángulos iguales entre sí (generalmente 120°) y están a la misma escala. Esto da al dibujo una apariencia equilibrada, ideal para ilustraciones técnicas que requieren claridad visual sin perder precisión métrica.

Otras versiones incluyen la **dimétrica** (dos ejes con la misma escala y el tercero distinto) y la **trimétrica** (todos los ejes a escalas diferentes). La elección depende de lo que se quiere destacar del objeto: por ejemplo, en piezas mecánicas complejas suele usarse la trimétrica para mostrar detalles en múltiples direcciones.

[IMAGEN: Comparación entre proyección isométrica y ortogonal de un cilindro]

---

## 4. Proyección Oblicua

En este sistema, los rayos proyectantes no son perpendiculares al plano de proyección, sino que se inclinan en un ángulo específico (generalmente 45°). Esto permite representar objetos con una cara frontal sin deformación, ya que el plano está paralelo a ella. Sin embargo, las otras caras del objeto aparecen distorsionadas debido al ángulo de proyección.

La ventaja de la oblicua es su simplicidad: se dibuja primero la vista frontal en escala real y luego se añaden las profundidades con líneas inclinadas. Es útil para representar objetos como herramientas o piezas mecánicas donde la claridad del frente es prioritaria.

Un detalle importante: aunque la cara frontal no se deforma, los demás elementos sí lo hacen. Por ejemplo, un cubo dibujado en proyección oblicua tendrá su cara lateral inclinada y sus lados laterales con medidas reducidas comparadas con el sistema ortogonal.

[IMAGEN: Ejemplo de un prisma hexagonal en proyección oblicua]

---

## 5. ¿Para qué se usan estos sistemas?

Cada sistema tiene aplicaciones específicas según lo que se quiere comunicar:

- **Ortogonal**: Para planos técnicos donde la exactitud es fundamental (planos arquitectónicos, dibujos de ingeniería).
- **Axonométrica** (especialmente isométrica): Para ilustraciones técnicas o diagramas que necesitan mostrar volumen sin perder proporciones.
- **Oblicua**: En dibujos didácticos o representaciones donde se prioriza la claridad de una cara principal.

La elección depende del objetivo: si se busca precisión métrica, ortogonal es el mejor; si se quiere un equilibrio entre realismo y exactitud, axonométrica; y si lo que importa es simplificar la vista frontal, oblicua.

---

## N. Conexión con lo que sigue

Este tema sirve como base para entender cómo se elaboran planos técnicos y vistas en dibujo industrial, que se desarrollarán en `../vistas-ortogonales/` y `../dibujos-técnicos-industriales/`.