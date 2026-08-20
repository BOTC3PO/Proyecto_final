# Economía — Cuota de un crédito, sistema francés (teoria)

> Tema del MAPA: `E6` (Tronco 1 — Numérico). Depende de
> `../interes-compuesto/` (ver `../dependencias.md`). Rama hermana de
> `CFT vs. tasa nominal` — ambas cuelgan directo de interés compuesto,
> no una de la otra.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — fórmula + cómo se compone la cuota + comparación
con otros sistemas.

---

## El sistema francés: cuota fija

El **sistema francés** es el sistema de amortización de préstamos más
usado en Argentina (préstamos personales, créditos hipotecarios, planes
de cuotas). Su característica central: **la cuota es siempre la misma**
en pesos durante todo el préstamo (asumiendo tasa fija, sin ajuste por
inflación ni UVA).

## La fórmula

```
Cuota = C × i × (1 + i)^n / ((1 + i)^n - 1)
```

- **C** = capital prestado (el monto original del préstamo).
- **i** = tasa de interés **por período**, en forma decimal (si las
  cuotas son mensuales, es la tasa mensual).
- **n** = cantidad total de cuotas.
- **Cuota** = el pago fijo que se paga en cada período.

**Ejemplo**: un préstamo de $1.000.000 a una tasa mensual del 5%, en 12
cuotas: `Cuota = 1.000.000 × 0,05 × (1,05)^12 / ((1,05)^12 - 1) ≈
$113.000` por mes, aproximadamente — el mismo monto los 12 meses.

## La cuota es fija, pero lo que hay adentro cambia

Aunque el número de la cuota no cambia, cada cuota se compone de dos
partes que sí cambian mes a mes:

- **Interés**: se calcula sobre el saldo de deuda que todavía queda.
- **Amortización de capital**: lo que efectivamente reduce la deuda.

Al principio del préstamo, el saldo adeudado es alto, así que la mayor
parte de la cuota es interés y una parte chica amortiza capital. A
medida que avanzan los pagos, el saldo baja, el interés de cada cuota es
cada vez menor, y la parte que amortiza capital es cada vez mayor —
aunque la cuota total siga siendo la misma en pesos.

## Cuánto interés se termina pagando en total

```
Total pagado = Cuota × n
Interés total = Total pagado - C
```

A igual capital y tasa, **más cuotas (n) significa una cuota mensual más
baja, pero más interés total pagado** a lo largo del préstamo — se paga
menos por mes, pero durante más tiempo, y cada mes de más es interés
adicional sobre el saldo que todavía no se amortizó.

## No es el único sistema que existe

El sistema francés es el más famoso en Argentina, pero no es el único
sistema de amortización que usan los bancos. Este módulo se centra en el
francés porque es el que corresponde al MAPA, pero vale la pena conocer
que existen otros, con una lógica distinta:

- **Sistema alemán**: la **amortización de capital** es la que se
  mantiene constante en cada cuota (no la cuota total). Como el interés
  se calcula sobre un saldo que baja siempre en la misma cantidad, el
  interés de cada cuota decrece mes a mes — y como consecuencia, **la
  cuota total es decreciente**: arranca más alta que en el sistema
  francés y termina más baja.
- **Sistema americano**: durante todo el préstamo sólo se pagan los
  **intereses** en cada cuota; el **capital completo se devuelve de una
  sola vez al vencimiento** (o se acumula aparte, en un fondo de
  amortización). Es el **menos común** de los tres en el uso cotidiano de
  préstamos personales — algunos bonos y ciertos instrumentos financieros
  sí lo usan, pero un banco rara vez se lo ofrece a una persona para un
  préstamo personal.

Los tres sistemas parten del mismo capital y la misma tasa, pero
reparten los pagos de forma distinta en el tiempo — no son
intercambiables ni dan la misma cuota mes a mes.
