# Geografía — Mapa, plano y escala (teoria)

> Tema del MAPA: `G3` (Tronco 6, `G2 --> G3`). Depende de
> `../orientacion-puntos-cardinales/` y de `../../matematica/regla-de-tres-directa/`
> (ver `../dependencias.md`). **Nota de alcance**: el cálculo numérico de
> escala (regla de tres entre distancia real y distancia en el mapa) ya
> está resuelto en `../escala-de-mapa/` (nodo `E9`) — acá no se repite esa
> cuenta, se construye el concepto más amplio alrededor de ella (qué es
> un mapa, tipos de mapa, escala como forma de representación).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias secciones separables: plano vs. mapa, tipos
de mapa según su función, y escala gráfica vs. numérica como concepto.

---

## Plano vs. mapa

Ambos son representaciones reducidas de un espacio real, pero a escalas
muy distintas:

- **Plano**: representa un espacio chico (una casa, un barrio, una
  ciudad) con el nivel de detalle suficiente para ver calles, edificios
  individuales o habitaciones. Al ser un área chica, se suele considerar
  la superficie terrestre como plana (la curvatura no se nota a esa
  escala).
- **Mapa**: representa un espacio grande (un país, un continente, el
  mundo) donde la curvatura real de la Tierra sí importa y hay que
  "proyectarla" sobre una superficie plana (ver más abajo, distorsión).

## Tipos de mapa según su función

Un mismo territorio puede representarse de formas muy distintas según
qué información se quiera mostrar:

- **Mapa político**: muestra límites entre países, provincias o
  ciudades, y sus capitales — la división administrativa del espacio.
- **Mapa físico**: muestra el relieve (montañas, llanuras, ríos,
  costas) — la forma natural del terreno.
- **Mapa temático**: muestra un dato específico distribuido en el
  espacio (densidad de población, climas, rutas comerciales, resultado
  electoral por región) — cualquier variable que se pueda "pintar"
  sobre un territorio.

Ningún mapa muestra todo a la vez: cada tipo elige qué información
representar y descarta el resto para no saturar la lectura.

## Escala: por qué toda representación reduce la realidad

Un mapa o plano nunca es del tamaño real del territorio que representa
— tiene que reducirlo para que entre en una hoja o una pantalla. La
**escala** es la relación entre el tamaño representado y el tamaño real,
y existe en dos formas:

- **Escala numérica**: una razón como `1:100.000`, que indica que 1
  unidad en el mapa equivale a 100.000 de esas mismas unidades en la
  realidad. Es la que se usa para el cálculo de regla de tres (ver
  `../escala-de-mapa/`).
- **Escala gráfica**: una barra dibujada directamente en el mapa, con
  marcas que indican distancias reales (ej.: una barra de 3 cm marcada
  "0 — 50 — 100 km"). Su ventaja sobre la numérica: si el mapa se
  agranda o achica (una fotocopia, un zoom en pantalla), la barra
  gráfica se agranda o achica junto con el mapa y sigue siendo
  correcta — la escala numérica, en cambio, deja de ser válida apenas
  el mapa cambia de tamaño.

## Toda proyección distorsiona algo

Representar la superficie curva de una esfera (la Tierra) sobre una
hoja plana es matemáticamente imposible sin distorsionar algo — no
existe una proyección perfecta. Según qué se prioriza mantener, se
distorsiona otra cosa:

- Mantener las **formas** correctas (útil para navegación) distorsiona
  el **tamaño relativo** de las áreas — la proyección Mercator, muy
  usada históricamente, agranda mucho los países cercanos a los polos
  (Groenlandia se ve casi tan grande como África, cuando en realidad
  África es unas 14 veces más grande).
- Mantener el **tamaño relativo** correcto (útil para comparar
  superficies) distorsiona las **formas**.

No hay una proyección "correcta" en términos absolutos: cada una es un
compromiso distinto entre qué preservar y qué sacrificar.

## Por qué esto va antes de coordenadas y división política

Saber qué tipo de mapa se está leyendo y a qué escala está dibujado es
el prerrequisito para cualquier lectura posterior: antes de ubicar una
coordenada o distinguir un límite político hay que entender que el
papel (o la pantalla) que se tiene enfrente es una representación
reducida y con un propósito específico, no el territorio mismo.
