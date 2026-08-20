# Economía — Pools de liquidez y creador de mercado automático (AMM) (teoria)

> Tema del MAPA: `E32` (Tronco 1 — Numérico). Depende de
> `../dex-swap/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — cómo un [DEX](../dex-swap/teoria.md) fija un
precio sin que ninguna persona lo decida, usando sólo una fórmula.

---

## Qué es un pool de liquidez

Un **pool de liquidez** es un fondo compartido de dos tokens (por
ejemplo, Token A y Token B), guardado en un contrato inteligente, que
sirve de contraparte automática para cualquier
[swap](../dex-swap/teoria.md). Lo arma gente común, llamada
**proveedores de liquidez (LP)**, que deposita ambos tokens en el pool
a cambio de ganar una comisión de cada swap que use ese pool.

## Qué es un AMM (creador de mercado automático)

En una casa de cambio tradicional, una persona (el "market maker")
decide a qué precio compra y a qué precio vende. Un **AMM** (Automated
Market Maker) reemplaza a esa persona por una **fórmula matemática**
que fija el precio automáticamente, en base a cuánto hay de cada token
adentro del pool en ese momento — sin que nadie lo decida a mano.

## La fórmula del producto constante

El AMM más usado se basa en mantener **siempre constante** el
producto entre las dos reservas del pool:

```
reserva_A × reserva_B = k   (k se mantiene constante)
```

Cuando alguien hace un swap (por ejemplo, deposita Token A para
llevarse Token B), la reserva de A **sube** y la reserva de B
**baja** — pero la fórmula obliga a que el producto de las dos
reservas siga dando el mismo número `k` de antes. El **precio** de un
token, en cualquier momento, es simplemente la relación entre las dos
reservas (cuánto B hay por cada A).

## Por qué las operaciones grandes mueven más el precio

Como el precio depende de la RELACIÓN entre las dos reservas, un swap
grande cambia esa relación de forma más brusca que uno chico —
haciendo que el precio final que recibe quien hace el swap sea peor
cuanto más grande es la operación. Esto se llama **slippage**
(deslizamiento): la diferencia entre el precio esperado al empezar la
operación y el precio real obtenido al terminarla.

## El riesgo de ser proveedor de liquidez: pérdida impermanente

Si el precio de mercado de los dos tokens de un pool cambia mucho
entre sí (por fuera del pool, en el resto del mercado), la
composición del pool se reacomoda para seguir cumpliendo `x × y = k`
— y eso puede dejar al proveedor de liquidez con una combinación de
tokens que vale, en conjunto, **menos** de lo que hubiera valido si
simplemente se hubiera quedado con los tokens originales sin
depositarlos. A esto se lo llama **pérdida impermanente**: "impermanente"
porque sólo se vuelve una pérdida real si el proveedor retira sus
fondos del pool en ese momento — si los precios vuelven a acercarse,
la pérdida se reduce o desaparece.

## Dónde aparece en la vida real

- Cuando una app de DeFi muestra "APY estimado" por dar liquidez a un
  pool, está mostrando la comisión esperada de los swaps, sin incluir
  necesariamente el riesgo de pérdida impermanente.
- Un swap muy grande en un pool chico puede mover el precio bastante:
  por eso conviene dividir una operación grande en varias más chicas,
  o buscar un pool con más reservas.
- Comparar la profundidad (cuánto hay de reserva) de distintos pools
  del mismo par de tokens ayuda a estimar cuánto slippage va a tener
  una operación antes de hacerla.
