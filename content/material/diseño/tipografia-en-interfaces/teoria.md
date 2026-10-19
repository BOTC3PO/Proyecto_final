# UX y diseño — Tipografía en interfaces (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `diseño/tipografia-en-interfaces`. Depende de `../jerarquia-visual-e-informacion/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo elegir y combinar tipografías para que el texto sea legible y organice la información.

---

## 1. El texto es la interfaz

Gran parte de una interfaz es texto: títulos, etiquetas, botones, mensajes. Por eso la tipografía no es un adorno: define si algo se lee con comodidad, qué se percibe como importante y qué tono transmite el producto. `jerarquia-visual-e-informacion/` anunciaba este tema porque el tamaño y el estilo de las fuentes son una de las herramientas principales para crear jerarquía.

## 2. Familias y estilos

Una **familia tipográfica** es un conjunto de variantes de un mismo diseño de letra (normal, cursiva, negrita, distintos pesos). Las grandes categorías son las **serif** (con remates o serifas en los extremos de los trazos), las **sans serif** (sin remates) y las **monoespaciadas** (todos los caracteres ocupan el mismo ancho, típicas del código). En pantalla se usan mucho las sans serif por su claridad en tamaños chicos, pero no hay una regla absoluta: importan el diseño concreto, el tamaño y la resolución.

Conviene usar pocas familias, normalmente una o dos, y variar el peso y el tamaño dentro de ellas. Demasiadas fuentes generan ruido y vuelven inconsistente la interfaz.

## 3. Tamaño y escala tipográfica

El texto de cuerpo debe ser cómodo de leer. En la web, lo habitual es partir de 16 píxeles como tamaño base. Para los demás niveles (títulos, subtítulos, notas) se usa una **escala tipográfica**: una serie de tamaños con una relación proporcional entre sí, de modo que los saltos sean claros y consistentes. Por ejemplo, partir de 16 y multiplicar por 1,25 en cada nivel. Una escala evita decidir tamaños al azar y crea jerarquía.

## 4. Interlineado, largo de línea y alineación

- **Interlineado** (la distancia entre líneas): un valor cercano a 1,4 a 1,6 veces el tamaño suele leerse bien en párrafos. Muy apretado cansa; muy abierto rompe el ritmo.
- **Largo de línea**: las líneas demasiado largas hacen perder el renglón al volver al comienzo. Como referencia, se suele recomendar entre unos 45 y 75 caracteres por línea.
- **Alineación**: el texto alineado a la izquierda es el más fácil de leer en idiomas que se escriben de izquierda a derecha. El texto justificado puede crear espacios irregulares, y el centrado funciona solo para textos cortos.

## 5. Legibilidad y accesibilidad

La legibilidad depende además del contraste con el fondo (`accesibilidad-wcag-contraste-lectores-de-pantalla/`), del peso (los pesos muy finos se pierden), de evitar texto todo en mayúsculas en párrafos y de no usar la cursiva en bloques largos. Las personas deben poder agrandar el texto: las unidades relativas respetan la configuración de cada usuario, mientras que las fijas la ignoran. Conviene no incrustar texto en imágenes, porque no escala y los lectores de pantalla no lo leen.

## N. Conexión con lo que sigue

Junto con `color-en-interfaces/`, la tipografía es la base de `sistemas-de-diseno-y-componentes/`, donde los estilos se vuelven reglas reutilizables.
