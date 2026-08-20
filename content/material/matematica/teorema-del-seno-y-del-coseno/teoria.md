# Matemática — Teorema del seno y del coseno (teoría)

> Tema del MAPA: `TRIG2` (Tronco 3.b — Geometría analítica, trigonometría
> y vectores). Depende de `../razones-trigonometricas/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — dos teoremas distintos, cada uno con su propio uso,
mejor separados en diapositivas.

---

## El problema: triángulos sin ángulo recto

`../teorema-de-pitagoras/` y `../razones-trigonometricas/` funcionan muy
bien, pero sólo para **triángulos rectángulos**. La mayoría de los
triángulos reales (un terreno irregular, una triangulación topográfica)
no tienen ningún ángulo de 90° — son **triángulos oblicuos**. Para esos
casos hacen falta dos herramientas nuevas.

## El teorema del seno

En cualquier triángulo (con lados `a`, `b`, `c`, y sus ángulos opuestos
`A`, `B`, `C` respectivamente):

```
a / sen(A) = b / sen(B) = c / sen(C)
```

Cada lado es proporcional al seno de su ángulo opuesto, y esa razón es
**la misma** para los tres pares lado-ángulo del triángulo. Sirve
cuando se conoce un lado y su ángulo opuesto (para fijar la razón
constante), más otro ángulo o lado — el caso típico es conocer dos
ángulos y un lado (ALA o AAL).

## El teorema del coseno

```
c² = a² + b² − 2ab·cos(C)
```

(con `C` el ángulo comprendido entre los lados `a` y `b`, y `c` el lado
opuesto a `C`). Sirve cuando se conocen **dos lados y el ángulo entre
ellos** (LAL), o los **tres lados** (LLL, para despejar un ángulo).

## El teorema del coseno generaliza a Pitágoras

Si `C = 90°`, entonces `cos(90°) = 0`, y el último término desaparece:

```
c² = a² + b² − 2ab×0 = a² + b²
```

Que es exactamente el teorema de Pitágoras. Pitágoras es, entonces, el
**caso particular** del teorema del coseno cuando el triángulo sí tiene
un ángulo recto.

## Cuándo usar cada uno

- **Teorema del seno**: cuando se conoce un ángulo y su lado opuesto
  (para armar la razón), más un dato más (otro ángulo, u otro lado con
  su ángulo opuesto también desconocido).
- **Teorema del coseno**: cuando se conocen dos lados y el ángulo
  comprendido entre ellos, o los tres lados sin ningún ángulo.

Ambos funcionan para **cualquier** triángulo, incluidos los rectángulos
— pero ahí ya alcanza con Pitágoras y las razones trigonométricas
simples, más rápidas de aplicar.

## Para qué sirve

Estos dos teoremas son la herramienta real detrás de la **triangulación**:
calcular distancias o alturas inaccesibles (un cerro, un edificio desde
un ángulo incómodo, la distancia entre dos puntos separados por un
obstáculo) midiendo sólo algunos ángulos y una distancia de referencia,
sin necesidad de que el triángulo formado tenga un ángulo recto.
