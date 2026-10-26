# Geografía — Coordenadas geográficas (teoria)

> Tema del MAPA: `G4` (`G3 --> G4`). Depende de `../mapa-plano-escala/`
> y `../../coordenadas-y-husos-horarios/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — leer la grilla de un mapa, ubicar un punto dado y
usos prácticos son 3+ secciones separables.

---

## La grilla del mapa

Todo mapa que muestra el mundo (o una porción grande de él) trae
dibujada una **grilla** de líneas: los **meridianos** (verticales, de
polo a polo) y los **paralelos** (horizontales, paralelos al ecuador).
Esa grilla es la representación gráfica del sistema angular de latitud
y longitud que ya se explicó en `../../coordenadas-y-husos-horarios/`
— acá no se repite el cálculo de esos ángulos, se usa esa grilla para
**leer un mapa real**.

## Ubicar un punto con (latitud, longitud)

Dado un par de coordenadas, por ejemplo (34° S, 58° O), ubicarlo en el
mapa es:

1. Buscar el paralelo de 34° S (contando desde el ecuador hacia el
   sur).
2. Buscar el meridiano de 58° O (contando desde Greenwich hacia el
   oeste).
3. El punto está en la intersección de esos dos.

Es el mismo procedimiento que ubicar un punto en un plano cartesiano
(eje X, eje Y) — la diferencia es que acá los "ejes" son círculos sobre
una esfera, no líneas rectas infinitas.

## Para qué sirve en la práctica

- **Localizar sin nombre de calle**: en el medio del océano, el
  desierto o una zona rural sin nomenclatura, la única forma de decir
  "acá" sin ambigüedad es dar una coordenada.
- **GPS**: un receptor GPS calcula su posición como un par (o terna, si
  suma altitud) de coordenadas, y el mapa digital sólo tiene que
  dibujar ese punto sobre la grilla que ya conoce.
- **Cartografía y organismos internacionales**: fronteras marítimas,
  rutas aéreas y tratados internacionales se definen con coordenadas
  exactas, no con descripciones ambiguas del terreno.

## Precisión: de grados a algo más chico

Para ubicar un punto con precisión de metros (no de kilómetros) hacen
falta minutos y segundos de arco (1° = 60′, 1′ = 60″) o notación
decimal con varios decimales (34,6037° en vez de 34°). Cuantos más
decimales, más preciso el punto — cada decimal adicional reduce el
margen de error a una fracción del anterior.
