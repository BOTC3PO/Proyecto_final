# Física — Decibeles y escala Richter (teoria)

> Tema del MAPA: `E14` (Tronco 1 — Numérico), tag `(Física / Geografía)`.
> Depende de `../../matematica/logaritmos/` (ver `../dependencias.md`).
> Misma familia de idea que [pH y pOH](../../quimica/ph-poh/teoria.md):
> escalas logarítmicas para comprimir rangos enormes de valores.
> Investigado con búsqueda web en agosto 2026 (Wikipedia ES, LibreTexts,
> Concepto.de).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — dos escalas logarítmicas reales, con la misma
lógica matemática que el pH.

---

## Por qué existen escalas logarítmicas

El sonido más flojo que el oído humano detecta y el sonido de un avión
despegando difieren en intensidad física por un factor de **billones**.
La energía de un temblor apenas perceptible y la de un terremoto
devastador difieren por un factor todavía más grande. Escribir esos
números tal cual sería impracticable — por eso se usan escalas
**logarítmicas**: comprimen un rango enorme de valores físicos en una
escala de números chicos y manejables (decibeles de 0 a 140 y pico;
magnitud Richter de 1 a 9 y pico).

## Decibeles: la escala del sonido

```
dB = 10 × log₁₀(I / I₀)
```

- **I** = intensidad del sonido que se está midiendo.
- **I₀** = una intensidad de referencia fija (el umbral de audición
  humana).

**Cada 10 dB de aumento representan 10 veces más intensidad física**
del sonido. Curiosamente, el oído humano no lo percibe así: un aumento
de 10 dB se percibe, aproximadamente, como **el doble de fuerte** —
aunque la intensidad física se haya multiplicado por 10, la
**percepción** de sonoridad sigue su propia escala (también
logarítmica, pero con otra base de comparación). Un aumento de apenas
**3 dB** ya representa, aproximadamente, el **doble** de intensidad
física.

## Escala Richter: la magnitud de un terremoto

También es una escala logarítmica, pensada para cuantificar la energía
liberada por un terremoto:

- **Cada punto entero de magnitud representa una amplitud de onda
  sísmica 10 veces mayor.**
- **Cada punto entero de magnitud representa, aproximadamente, 31,6
  veces más energía liberada** (ese número es `10^1,5`).

**Ejemplo**: un terremoto de magnitud 6 no es "un poco más fuerte" que
uno de magnitud 5 — libera, aproximadamente, **31,6 veces más energía**.
Uno de magnitud 7, comparado con uno de magnitud 5 (dos puntos de
diferencia), libera aproximadamente `31,6 × 31,6 ≈ 1.000` veces más
energía.

## La fórmula de energía (Gutenberg-Richter)

```
log₁₀(E) = 4,8 + 1,5 × M
```

(con **E** en joules y **M** la magnitud) — es la fórmula de la que sale
el factor de "31,6 veces por punto" (`10^1,5 ≈ 31,6`).

## El mismo principio que el pH

Decibeles, escala Richter y pH comparten exactamente la misma lógica
matemática: un **logaritmo de una razón** respecto a un valor de
referencia. Cambia el fenómeno físico que describen (sonido, energía
sísmica, concentración de iones), pero la herramienta matemática detrás
es la misma.

## Dónde aparece en la vida real

- **Entender por qué "10 dB más" en un aviso de ruido molesto no es un
  cambio chico**: es 10 veces más intensidad física.
- **Leer una noticia sobre un terremoto**: la diferencia entre magnitud
  5 y magnitud 7 es enorme, no proporcional a la diferencia de "2" en el
  número.
- **Elegir protección auditiva** en un ambiente de trabajo ruidoso,
  sabiendo que unos pocos dB de diferencia importan mucho más de lo que
  el número sugiere a simple vista.
