# Ed. Física — Deportes: medidas de cancha y comparación de superficies (teoria)

> Tema del MAPA: `EF6`. Depende de `../../matematica/perimetro-y-area/`
> (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — medidas reales + cálculo de superficie aplicado.

---

## 1. Medidas oficiales de canchas (reglamentarias)

| Deporte | Medidas de cancha | Perímetro | Área aproximada |
|---|---|---|---|
| Fútbol (FIFA, rango típico) | 105 m × 68 m | 346 m | 7.140 m² |
| Básquet (FIBA) | 28 m × 15 m | 86 m | 420 m² |
| Tenis (individual) | 23,77 m × 8,23 m | 64 m | ~195,6 m² |
| Vóley | 18 m × 9 m | 54 m | 162 m² |
| Handball | 40 m × 20 m | 120 m | 800 m² |

## 2. Perímetro y área: la misma fórmula, distinto contexto

Todas estas canchas son rectángulos — se aplica directamente lo ya
construido en `../../matematica/perimetro-y-area/`:

```
Perímetro = 2 × (largo + ancho)
Área = largo × ancho
```

Ejemplo con la cancha de básquet FIBA (28 m × 15 m):

```
Perímetro = 2 × (28 + 15) = 2 × 43 = 86 m
Área = 28 × 15 = 420 m²
```

## 3. Comparar superficies entre deportes

Comparar el área de distintas canchas da una idea concreta de escala:
una cancha de fútbol (7.140 m²) es más de 17 veces más grande que una
cancha de básquet (420 m²) — mucho más que la diferencia "a ojo" que
parece al mirar fotos de ambas, porque el área crece con el **producto**
de ambas dimensiones, no con la suma.

## 4. Por qué las medidas no son arbitrarias

Las medidas reglamentarias de cada cancha están pensadas para el tipo
de juego: un deporte con muchos jugadores corriendo simultáneamente
(fútbol) necesita mucho espacio; un deporte de reacción rápida en
espacios cortos (vóley) usa una cancha chica dividida por una red.

## 5. Conexión con lo que sigue

Una vez conocida la cancha (el "tablero" donde se juega), tiene
sentido preguntarse quién la ocupa y cómo — jugadores, posiciones y
sistema de puntaje, el tema de
`../deportes-jugadores-posiciones-puntaje/`.
