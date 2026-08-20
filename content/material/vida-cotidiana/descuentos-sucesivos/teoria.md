# Vida Cotidiana — Descuentos sucesivos (teoria)

> Tema del MAPA: mitad de "Descuentos y recargos sucesivos (Vida
> Cotidiana)". Depende de `../../matematica/porcentaje/` (ver
> `../dependencias.md`). Separado de `../recargos-sucesivos/` — misma
> fórmula matemática, contextos reales distintos.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas + ejemplos reales, mejor en
diapositivas.

---

## Repaso: por qué los descuentos sucesivos no se suman

Ya visto en `../../matematica/porcentaje/teoria.md`: aplicar dos
descuentos uno atrás del otro NO equivale a sumar los porcentajes. Cada
descuento se aplica sobre el precio que quedó DESPUÉS del descuento
anterior, no sobre el precio original. Un 20% y después un 15% no da 35%
de descuento total — da menos: 0,80 × 0,85 = 0,68, un 32% de descuento
total, no 35%.

## Descuentos bancarios por día de la semana (ejemplo real, investigado)

En Argentina es habitual que bancos y billeteras virtuales ofrezcan
descuentos distintos según el día de la semana, en supermercados
puntuales — por ejemplo (esquema real de principios de 2026, que cambia
mes a mes): Cuenta DNI (Banco Provincia) los martes, Carrefour los
miércoles, Changomás los jueves, Vea y Jumbo los sábados. Casi todos estos
descuentos tienen, además, un **tope de reintegro** (un monto máximo de
descuento por día y por persona/tarjeta) — importante, porque el
porcentaje anunciado sólo se aplica hasta ese tope: comprar más allá del
tope no sigue descontando al mismo ritmo.

## Combinar un descuento bancario con otro descuento

Si un comercio ya tiene una oferta propia (por ejemplo, 10% por pagar en
efectivo) y encima se paga un día con descuento bancario (por ejemplo,
15% los martes con una tarjeta puntual), los dos descuentos se aplican
en cadena, uno sobre el resultado del otro — la misma fórmula de
descuentos sucesivos, aplicada a un caso real de todos los días.

## Descuentos para jubilados

Algunos supermercados y programas (vinculados a ANSES) ofrecen
descuentos o reintegros específicos para jubilados y pensionados, sobre
determinados días o rubros — otro ejemplo real de descuento que se puede
combinar con otras promociones vigentes, según las condiciones de cada
programa.

## El tope de reintegro cambia el cálculo real

Un descuento del 30% "suena" igual sin importar cuánto se compre, pero
si tiene un tope de $15.000 de reintegro, una compra de $100.000 no
descuenta $30.000: descuenta, como máximo, $15.000 — el 30% deja de
aplicar en la práctica a partir de cierto monto. Es un matiz real que la
fórmula sola (precio × (1 − p/100)) no captura, y que conviene tener en
cuenta al leer una promoción.
