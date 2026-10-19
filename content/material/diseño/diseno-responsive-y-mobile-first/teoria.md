# UX y diseño — Diseño responsive y mobile first (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `diseño/diseno-responsive-y-mobile-first`. Depende de `../prototipado-wireframe-mockup-prototipo-interactivo/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo hacer que una misma interfaz funcione bien en pantallas de distintos tamaños.

---

## 1. Una interfaz, muchas pantallas

La gente usa el mismo producto desde un celular, una tableta, una notebook o un monitor grande. El **diseño responsive** (o adaptable) es el enfoque en que la interfaz se ajusta a cada tamaño de pantalla en lugar de tener una versión distinta para cada dispositivo. El término fue propuesto por Ethan Marcotte en 2010 y combina tres ideas: grillas fluidas, imágenes flexibles y reglas según el ancho de pantalla.

## 2. Grillas fluidas y puntos de quiebre

En lugar de anchos fijos en píxeles, una **grilla fluida** expresa el ancho de las columnas en proporciones del espacio disponible. La interfaz se estira y se encoge de manera continua. Pero en algún momento el diseño deja de funcionar: tres columnas en una pantalla angosta quedan ilegibles. Ahí se definen **puntos de quiebre** (breakpoints): anchos de pantalla en los que el diseño cambia de forma, por ejemplo pasando de tres columnas a una sola. Los puntos de quiebre deberían elegirse según el contenido, no según modelos de dispositivos puntuales, porque los dispositivos cambian cada año.

## 3. Mobile first

**Mobile first** significa empezar a diseñar por la pantalla más chica y agregar complejidad a medida que hay más espacio. Tiene ventajas:

- Obliga a decidir qué es realmente importante, porque en una pantalla chica no entra todo.
- El resultado base es más liviano y rápido.
- Es más fácil ampliar un diseño simple que recortar uno complejo.

El enfoque contrario, *desktop first*, tiende a dejar versiones móviles con partes recortadas o ocultas sin criterio.

## 4. Pantalla táctil

Los dedos son menos precisos que un cursor. Los elementos tocables necesitan un tamaño suficiente y separación entre sí. Las pautas WCAG 2.2 piden en el nivel AA un tamaño mínimo de objetivo de 24 por 24 píxeles CSS (con algunas excepciones), y recomiendan tamaños mayores, del orden de 44 por 44 en el nivel AAA y en guías de plataformas. Además, las acciones frecuentes deben quedar al alcance del pulgar, y no hay "hover": cualquier información que aparezca solo al pasar el cursor no existe en una pantalla táctil.

## 5. Prioridad de contenido

En pantalla chica hay que decidir qué va primero. Se prioriza lo que la persona vino a hacer, se pasa a una sola columna, se ocultan detrás de menús las opciones secundarias (sin esconder lo esencial) y se evita el desplazamiento horizontal. El texto debe seguir siendo legible sin hacer zoom, y el zoom no debe estar bloqueado.

## 6. Cómo probarlo

Redimensionando la ventana del navegador, con las herramientas de simulación de dispositivos y, sobre todo, con dispositivos reales, porque la velocidad de la conexión, el tamaño real de los dedos y el sol en la pantalla no se simulan bien.

## N. Conexión con lo que sigue

Los componentes responsive son parte de `sistemas-de-diseno-y-componentes/`. La necesidad de adaptarse a distintas condiciones se conecta con `niveles-wcag-a-aa-aaa-y-navegacion-por-teclado/` (reflujo y zoom).
