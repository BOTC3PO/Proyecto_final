# Economía — Interés compuesto (teoria)

> Tema del MAPA: `E4` (Tronco 1 — Numérico). Depende de
> `../interes-simple/` y de `../../matematica/potencias/` (ver
> `../dependencias.md`). Es la base de `CFT vs. tasa nominal`, `Cuota de
> un crédito` y `Plazo fijo vs. inflación`, que no se cubren acá.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — fórmula + varios ejemplos y comparaciones.

---

## La diferencia con el interés simple: el interés genera interés

En el [interés simple](../interes-simple/teoria.md), cada período calcula
el interés siempre sobre el mismo capital original. En el **interés
compuesto**, el interés generado en cada período se **suma al capital**,
y el período siguiente calcula su interés sobre ese nuevo total (capital
+ interés acumulado) — no sobre el capital original. Por eso crece de
forma **exponencial**, no lineal: cada período genera un poco más de
interés que el anterior.

## La fórmula

```
M = C × (1 + r)^t
I = M - C
```

- **C** = capital inicial.
- **r** = tasa de interés por período, en forma **decimal**.
- **t** = cantidad de períodos (debe estar en la misma unidad que la
  tasa: si `r` es anual, `t` son años).
- **M** = monto final, después de `t` períodos capitalizando.
- **I** = interés total generado (la diferencia entre el monto final y
  el capital).

**Ejemplo**: un capital de $100.000 a una tasa del 5% anual, durante 3
años, a interés compuesto: `M = 100.000 × (1,05)^3 = 100.000 × 1,157625
= $115.762,50`. El interés total es `I = 115.762,50 - 100.000 =
$15.762,50` — un poco más que los $15.000 que daría el interés simple
con los mismos números.

## Por qué "el interés genera interés" importa

El salto conceptual central es que un porcentaje se puede aplicar sobre
un resultado que **ya tenía** un porcentaje aplicado antes. Es el mismo
mecanismo que explica por qué "+20% y después −20%" no vuelve al valor
original, y es lo que hace que la deuda de una tarjeta de crédito no
pagada crezca cada vez más rápido: cada mes se cobra interés sobre el
saldo anterior, que ya incluye el interés del mes pasado.

## Comparación con el interés simple

Para un solo período (`t = 1`), interés simple y compuesto dan
**exactamente el mismo resultado** — la diferencia todavía no tuvo
oportunidad de aparecer. A partir del segundo período (`t > 1`), el
compuesto siempre da un monto mayor que el simple, con la misma tasa y
capital, y la diferencia se agranda cuanto más períodos pasan.

## Períodos de capitalización: la tasa tiene que coincidir con el período

Igual que en interés simple, si la tasa es anual pero se quiere calcular
la capitalización mensual, hay que convertir la tasa anual a mensual (o
el tiempo a la unidad de la tasa) antes de aplicar la fórmula. Cuando la
capitalización es más frecuente que el período de la tasa nominal (por
ejemplo, una tasa anual que capitaliza mes a mes), el monto final termina
siendo mayor que si capitalizara una sola vez al año con esa misma tasa
nominal — la diferencia entre "tasa nominal" y "tasa efectiva" es,
justamente, el tema del próximo módulo (`CFT vs. tasa nominal`).

## Dónde aparece en la vida real

- **Plazo fijo renovado varias veces**: si se retira el capital más el
  interés al vencimiento y se vuelve a depositar todo junto (capital +
  interés) en un nuevo plazo fijo, el segundo período ya está generando
  interés sobre interés — aunque cada plazo individual, por sí solo, se
  calculó con interés simple.
- **Deuda de tarjeta de crédito no pagada**: los intereses de un saldo no
  cancelado se capitalizan período a período, por eso una deuda chica sin
  pagar puede crecer rápido con el tiempo.
- **Inversiones a largo plazo**: fondos, acciones o cualquier inversión
  que reinvierte sus ganancias en vez de retirarlas crece de forma
  compuesta.
