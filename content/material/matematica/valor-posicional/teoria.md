# Matemática — Valor posicional (teoría)

> Tema del MAPA: `N1` (Tronco 1 — Numérico), mitad "Valor posicional" —
> separado de "Conteo", que tiene su propia teoría y cuestionario en
> `../conteo/`. Ver `../../lista-temas-plana.md` y `../../troncos.md`.

## Tipo de teoría (si esto se carga al sistema)

El sistema no tiene un único tipo "teoría": hay varios, y conviene elegir el
que corresponda en vez de meter todo como texto plano. Los tipos reales que
existen hoy en el código (no una lista inventada):

- **`TheoryItem.type`** (selector real de la UI, editor de un Módulo):
  Texto, Presentación, Enlace, Libro, Documento, Video, Herramienta
  interactiva, Herramienta standalone, TuesdayJS (legacy).
- **`Material.tipo`** (`api/prisma/schema.prisma`), un contenido guardado y
  versionado aparte (no ligado a un módulo puntual) — valores: `mapa`,
  `timeline`, `interactivo` (editor de bloques: Texto, LaTeX, Tabla,
  Gráfico, Flujo, Función f(x), Formas, Imagen, Audio, Video, PDF, Enlace,
  Fórmula), `presentacion`.
- **Herramienta standalone**: sólo 4 ya construidas — Tabla periódica,
  Escalador de recetas, Línea de tiempo, Mapa histórico/geográfico.
  Ninguna aplica acá.

**Actualizado**: mejor `Presentación` que `Texto`/`Artículo` — con 6
secciones (qué es, descomposición, comparar, redondeo, decimales) el bloque
de prosa corrido queda largo; en diapositivas se sigue mejor, una idea por
diapositiva. Sigue siendo válido el candidato a subir de nivel más
adelante a `Material.tipo: interactivo` con un **bloque de tabla** para la
tabla de valor posicional en sí (centenas/decenas/unidades con las cifras
cayendo en su columna) — eso se entiende mejor viéndolo que en diapositivas
de texto, pero no hace falta para arrancar.

---

Contar dice *cuántos* hay. El valor posicional dice *cuánto vale* cada cifra
de un número según el lugar que ocupa — la otra mitad de entender un número
escrito.

## Qué es el valor posicional

En el sistema decimal (base 10), cada cifra de un número vale distinto según
su posición: la de más a la derecha son las **unidades**, la siguiente hacia
la izquierda son las **decenas** (vale ×10), la siguiente las **centenas**
(×100), después las **unidades de mil** (×1.000), **decenas de mil**
(×10.000), **centenas de mil** (×100.000), y así siempre multiplicando por
10 al moverse un lugar más a la izquierda. La misma cifra "3" vale 3, 30,
300 o 3.000 según dónde esté parada — por eso importa el *lugar*, no sólo
qué dígito es.

## Descomposición polinómica

Cualquier número se puede reescribir como la suma de los valores de cada una
de sus cifras. Ejemplo: 4.257 = 4×1.000 + 2×100 + 5×10 + 7×1. Descomponer un
número así (y, al revés, reconstruirlo a partir de esa suma) es la prueba de
que se entendió el valor posicional, más allá de poder leerlo o escribirlo
de memoria.

## Comparar números por valor posicional

Para comparar dos números: primero se compara la **cantidad de cifras** — el
que tiene más cifras es mayor (1.024 > 987, aunque el "9" parezca más
grande que el "1"). Si tienen la misma cantidad de cifras, se compara cifra
por cifra de izquierda a derecha (de la posición de mayor valor a la
menor), y la primera cifra donde difieren decide cuál es mayor.

## Redondeo usando valor posicional

Redondear un número entero a la decena, centena o millar más cercano es
mirar la cifra que está *un lugar a la derecha* de la posición a la que se
redondea: si esa cifra es 5 o más, la cifra de la posición objetivo sube en
1 (y todo lo que queda a la derecha se vuelve cero); si es menor a 5, queda
igual. Ejemplo: redondear 683 a la centena más cercana — se mira la cifra de
las decenas (8, que es ≥5) — el resultado es 700. Es la misma regla del
redondeo de decimales (Tronco 1, "Decimales y redondeo"), aplicada a las
cifras enteras.

## Valor posicional con decimales

La misma lógica de las potencias de 10 sigue del otro lado de la coma: la
primera cifra después de la coma son los **décimos** (÷10), la siguiente los
**centésimos** (÷100), la siguiente los **milésimos** (÷1.000). En 12,34 el
"3" vale 3 décimos (0,3) y el "4" vale 4 centésimos (0,04).
