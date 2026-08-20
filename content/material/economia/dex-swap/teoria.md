# Economía — Intercambio descentralizado (DEX) y swap (teoria)

> Tema del MAPA: `E31` (Tronco 1 — Numérico). Depende de
> `../contratos-inteligentes/` y `../interes-compuesto/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — cambiar una cripto por otra sin que ninguna
empresa custodie tu plata en el medio.

---

## Cómo funciona un exchange tradicional (centralizado)

Un exchange tradicional de criptomonedas (un **CEX**, exchange
centralizado) funciona parecido a un banco o una casa de cambio: la
empresa **custodia** el dinero de sus usuarios en sus propias cuentas,
lleva un libro de órdenes (quién quiere comprar, quién quiere vender,
a qué precio) y hace de intermediario en cada operación. Para operar,
hay que confiarle tus fondos a esa empresa.

## Qué es un DEX

Un **DEX** (exchange descentralizado) es un conjunto de
[contratos inteligentes](../contratos-inteligentes/teoria.md) que
permite intercambiar criptomonedas **directamente desde la propia
wallet** de cada persona, sin que ninguna empresa custodie los fondos
en ningún momento. El código del contrato hace el intercambio; nadie
más tiene el control de esos fondos mientras están en camino.

## Qué es un swap

**Swap** es el nombre de la operación puntual de intercambiar un
token por otro dentro de un DEX ("hacer swap de Token A por Token B").
No es un concepto distinto del DEX: es, literalmente, **la acción que
un DEX ejecuta** — el DEX es la plataforma, el swap es la operación que
se hace en ella.

## Sin custodio, pero sin contraparte fija tampoco

En un exchange tradicional, una compra se empareja con la venta de
otra persona específica (libro de órdenes). En un DEX, un swap no
busca a otra persona: intercambia directamente contra un
**[pool de liquidez](../pools-liquidez-amm/teoria.md)** — un fondo
compartido de tokens aportado por muchos usuarios a la vez, que
funciona como contraparte automática de cualquier swap. Cómo se fija
el precio dentro de ese pool es el tema siguiente (`E32`).

## Ventaja y riesgo, la misma moneda

- **Ventaja**: nadie más controla tus fondos en ningún momento salvo
  el instante exacto del intercambio, ejecutado por código público y
  verificable — no hace falta confiar en una empresa.
- **Riesgo**: si el código del contrato tiene un error, o si operás
  mal (por ejemplo, aprobás una operación mirando mal la pantalla), no
  hay una empresa a la que reclamarle ni un soporte técnico que
  revierta la operación — la misma inmutabilidad que da la ventaja
  quita la posibilidad de deshacer un error.

## Dónde aparece en la vida real

- "Voy a hacer swap de esta moneda por otra" es la forma cotidiana de
  describir usar un DEX.
- Un usuario que prefiere no dejar sus fondos en un exchange
  tradicional ("not your keys, not your coins", la misma idea ya vista
  en la teoría de wallets) suele operar directamente en un DEX.
- Comparar el precio de un mismo par de tokens entre distintos DEX
  antes de operar es una práctica habitual, porque cada pool puede
  tener un precio levemente distinto en un momento dado.
