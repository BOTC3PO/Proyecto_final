# Física — Segunda ley de Newton: F = m·a (teoría)

> Tema del MAPA: `NEWTON1b` (Tronco 3.b — puente Geometría
> analítica/vectores → Física). Depende de `../primera-inercia/` (ver
> `../../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (enunciado, unidad Newton,
proporcionalidad, el peso como aplicación) mejor separadas en
diapositivas.

---

## No es sólo una fórmula para despejar

`../../formulas-con-literales/` ya mostró cómo despejar cualquier letra
de `F = m·a` (por ejemplo, `m = F/a`). Este módulo **no repite** esa
técnica algebraica — se enfoca en **qué significa** la segunda ley
físicamente, y en aplicarla a situaciones reales.

## El enunciado

> La aceleración de un objeto es directamente proporcional a la fuerza
> neta aplicada sobre él, e inversamente proporcional a su masa.

```
F_neta = m × a         (o, despejada: a = F_neta / m)
```

Con `F_neta` la fuerza neta (la suma de todas las fuerzas, ver
`../primera-inercia/`), `m` la masa, y `a` la aceleración resultante.

## Proporcionalidad directa e inversa, a la vez

- A **igual masa**, más fuerza neta produce más aceleración (relación
  **directa**): empujar más fuerte acelera más rápido.
- A **igual fuerza**, más masa produce menos aceleración (relación
  **inversa**): el mismo empujón acelera mucho menos a un camión que a
  una bicicleta — es la misma idea de inercia de
  `../primera-inercia/`, ahora cuantificada.

## La unidad Newton

La unidad de fuerza, el **Newton (N)**, se define directamente a partir
de esta ley: es la fuerza necesaria para darle una aceleración de
1 m/s² a una masa de 1 kg.

```
1 N = 1 kg × 1 m/s²
```

## El peso: la aplicación más directa de F = m·a

El **peso** de un objeto es la fuerza con la que la gravedad lo atrae —
y es, literalmente, un caso particular de la segunda ley, con la
aceleración de la gravedad (`g`, aproximadamente 10 m/s² en cálculos
simples) en el lugar de `a`:

```
Peso = m × g
```

Un objeto de 5 kg pesa `5 × 10 = 50 N` en la superficie terrestre.

## Cuando la fuerza neta es cero

Si `F_neta = 0`, entonces `a = 0`: no hay aceleración, la velocidad no
cambia — que es exactamente la primera ley (`../primera-inercia/`). La
primera ley es, en el fondo, el caso particular de la segunda ley cuando
la fuerza neta es cero.

## Para qué sirve

La segunda ley es la fórmula central de la dinámica: permite predecir
cómo se va a mover un objeto (cuánto va a acelerar) con sólo conocer la
fuerza neta que actúa sobre él y su masa — la base de
`../tercera-accion-reaccion/` y de todo el bloque de dinámica que sigue.
