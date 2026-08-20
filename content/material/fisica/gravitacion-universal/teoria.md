# Física — Gravitación universal: Newton y Kepler (teoría)

> Tema del MAPA: `F11` (Tronco 3.b). Depende de
> `../dinamica-fuerzas-concurrentes/` y
> `../../matematica/distancia-entre-dos-puntos/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — dos bloques históricamente distintos (lo que
Kepler observó, lo que Newton explicó) mejor separados en diapositivas.

---

## Primero la observación: las leyes de Kepler

Antes de que existiera una explicación física de por qué los planetas
orbitan como orbitan, Johannes Kepler encontró **tres patrones**
puramente observacionales (a partir de datos astronómicos, sin ninguna
fórmula de fuerza detrás):

1. **Ley de las órbitas**: los planetas se mueven en órbitas
   **elípticas**, no circulares, con el Sol en uno de los dos focos de
   la elipse.
2. **Ley de las áreas**: el segmento que une al Sol con un planeta
   barre **áreas iguales en tiempos iguales**. Consecuencia directa: un
   planeta se mueve **más rápido** cuando está más cerca del Sol
   (**perihelio**) y **más lento** cuando está más lejos (**afelio**).
3. **Ley de los períodos** (o ley armónica): el cuadrado del período
   orbital `T` es proporcional al cubo del semieje mayor `a` de la
   órbita: `T² ∝ a³` (la misma constante de proporcionalidad para
   todos los planetas que orbitan el mismo Sol).

Kepler nunca explicó **por qué** valen estas tres leyes — sólo las
describió a partir de lo que se observaba.

## Después la causa: la ley de gravitación de Newton

Isaac Newton, décadas después, propuso que **cualquier** par de masas
se atrae con una fuerza:

```
F = G × m₁ × m₂ / r²
```

- `m₁`, `m₂`: las dos masas.
- `r`: la distancia entre sus centros.
- `G`: la **constante de gravitación universal**, `G ≈ 6,674×10⁻¹¹
  N·m²/kg²` — un número extremadamente chico, la razón por la que la
  atracción gravitatoria entre objetos cotidianos (dos personas, una
  silla y una mesa) es imperceptible: sólo se vuelve significativa
  cuando al menos una de las masas es enorme (un planeta, una
  estrella).

Esta única fórmula, combinada con lo que ya se sabe de fuerza
centrípeta (necesaria para mantener una órbita), **deriva
matemáticamente** las tres leyes de Kepler — la elipse, la ley de las
áreas y la proporción `T² ∝ a³` dejan de ser sólo un patrón observado y
pasan a ser una consecuencia necesaria de esta fuerza.

## El peso, un caso particular

El peso de un objeto en la superficie de un planeta es la misma
fórmula, con `m₁` = masa del planeta y `r` = su radio:

```
peso = G × M_planeta × m / R_planeta²
```

Por eso `g` (9,8 m/s² en la Tierra) no es una constante universal como
`G` — depende de la masa y el radio de cada planeta, y por eso el peso
de un mismo objeto es distinto en la Luna o en Marte.

## Para qué sirve

Es la misma ley que explica por qué la Luna orbita la Tierra, por qué
los planetas orbitan el Sol, por qué un satélite artificial se mantiene
en órbita, y le da mecanismo real a por qué el sistema solar tiene la
forma que tiene — sin ella, las leyes de Kepler serían sólo una
coincidencia observada, no algo necesario.
