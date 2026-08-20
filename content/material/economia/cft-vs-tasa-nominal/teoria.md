# Economía — CFT vs. tasa nominal (teoria)

> Tema del MAPA: `E5` (Tronco 1 — Numérico). Depende de
> `../interes-compuesto/`, `../iva/` y `../../matematica/raices/` (ver
> `../dependencias.md`). Investigado con búsqueda web en agosto 2026
> (BBVA Argentina, Fiscal.com.ar, Naranja X).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — tres conceptos relacionados + fórmula + ejemplos.

---

## Tres números para el mismo préstamo, y no son el mismo número

Cuando un banco o una fintech ofrece un préstamo o una tarjeta de
crédito, suele mostrar varias tasas distintas. Son tres conceptos
relacionados, pero no intercambiables:

- **TNA (Tasa Nominal Anual)**: la tasa de interés anual "de lista", sin
  tener en cuenta cómo capitaliza durante el año. Es sólo interés simple
  anualizado.
- **TEA (Tasa Efectiva Anual)**: el costo anual real de la tasa,
  considerando el efecto de la capitalización (interés compuesto) — ver
  `../interes-compuesto/teoria.md`. Con capitalización más frecuente que
  una vez al año, la TEA siempre es mayor que la TNA.
- **CFT (Costo Financiero Total)**: el costo final y real del préstamo.
  Además de la TEA, suma todos los demás costos asociados: comisiones
  administrativas, gastos de otorgamiento, seguros obligatorios, y el
  IVA que se cobra sobre los intereses (ver `../iva/teoria.md`). En
  Argentina, el **BCRA (Banco Central de la República Argentina) obliga**
  a las entidades financieras a publicar el CFT en toda oferta de
  crédito, justamente para que se pueda comparar el costo real entre
  distintas ofertas.

## De TNA a TEA: la fórmula

```
TEA = (1 + TNA/n)^n - 1
```

- **TNA** en forma decimal (una TNA del 60% se usa como `0,60`).
- **n** = cantidad de veces que capitaliza en el año (12 si es mensual,
  4 si es trimestral, 2 si es semestral, 1 si es anual).

**Ejemplo**: una TNA del 60%, capitalizada mes a mes (`n = 12`):
`TEA = (1 + 0,60/12)^12 - 1 ≈ 0,796`, es decir, una TEA de
aproximadamente **79,6%** — bastante más alta que el 60% nominal. Cuanto
más seguido capitaliza, mayor es la brecha entre TNA y TEA.

**Caso especial**: si la capitalización es una sola vez al año (`n = 1`),
TNA y TEA dan exactamente el mismo número — recién con `n > 1` aparece la
diferencia (el mismo patrón que interés simple vs. compuesto en `t = 1`).

## Del CFT hacia atrás: no hay una fórmula única

El cálculo real del CFT que usan las entidades financieras es más
complejo que sumar un par de números: técnicamente es la tasa interna de
retorno (TIR) de todo el flujo de pagos del crédito (cuotas, seguros,
comisiones, IVA, en cada fecha en que se cobran), anualizada. No hay una
fórmula cerrada simple porque depende de qué costos cobra cada producto
y cuándo.

**Simplificación para este tema** (no es la fórmula oficial del BCRA,
sólo un modelo pedagógico para practicar la relación entre los números):
pensar el CFT como la TEA más un puñado de puntos porcentuales
adicionales por los costos extra (seguros, comisiones, IVA sobre
intereses):

```
CFT ≈ TEA + costos adicionales (en puntos porcentuales)
```

Esta aproximación alcanza para entender **por qué el CFT siempre es
mayor o igual a la TEA**, y por qué dos préstamos con la misma TNA pueden
terminar costando distinto: no es la cuenta exacta que usa un banco.

## Por qué importa comparar por CFT y no por TNA

La TNA es el número más bajo de los tres, y por eso es el que más se
destaca en la publicidad — aunque el dato que el BCRA exige publicar
para comparar ofertas de crédito es el CFT. Dos préstamos con la misma
TNA pueden tener un CFT muy distinto si uno cobra más comisiones o
seguros que el otro: comparar sólo por la TNA puede llevar a elegir el
crédito más caro sin darse cuenta.

## Dónde aparece en la vida real

- **Publicidad de préstamos y tarjetas**: suele resaltar la TNA (el
  número más chico) en letra grande, y el CFT (el número real) en letra
  más chica — aunque por regulación tiene que estar.
- **Comparar dos ofertas de crédito**: el criterio correcto es comparar
  el CFT de cada una, no la TNA.
- **Plazo fijo**: los bancos también publican la TNA y la TEA de sus
  plazos fijos, para que se pueda comparar el rendimiento real entre
  bancos.
