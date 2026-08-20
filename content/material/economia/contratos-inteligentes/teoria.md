# Economía — Contratos inteligentes: reglas si-entonces autoejecutables (teoria)

> Tema del MAPA: `E30` (Tronco 1 — Numérico). Depende de
> `../blockchain-claves-wallet/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — un contrato que se cumple solo, porque está escrito
en código en vez de en papel.

---

## Un contrato tradicional necesita que alguien lo haga cumplir

Un contrato en papel dice qué debe pasar si se cumple una condición
("si el inquilino no paga, el propietario puede iniciar un desalojo"),
pero **hacer que se cumpla** depende de un tercero: un juez, un
abogado, un tribunal. Si una parte no cumple, la otra tiene que
reclamar activamente.

## Un contrato inteligente se cumple solo

Un **contrato inteligente** (smart contract) es un programa que corre
sobre una [blockchain](../blockchain-claves-wallet/teoria.md): una
regla del tipo **"si pasa X, entonces hacé Y"**, escrita en código, que
se ejecuta **automáticamente** en cuanto se cumple la condición — sin
que ninguna de las partes tenga que reclamarle nada a nadie.

```
si (condición se cumple) → entonces (acción ocurre automáticamente)
```

## Por qué es la misma idea que un condicional de programación

No hay ninguna magia nueva acá: es el mismo `si-entonces` (condicional)
que existe en cualquier lenguaje de programación, sólo que en vez de
correr en el servidor de una empresa, corre distribuido en la red de
la blockchain — heredando la misma propiedad de no depender de una
autoridad central que ya tenía [E29](../blockchain-claves-wallet/teoria.md).

## Ejemplo: un depósito en garantía (escrow) automático

Un comprador y un vendedor acuerdan: "el comprador deposita el dinero
en el contrato; el contrato libera ese dinero al vendedor recién
cuando el comprador confirma que recibió el producto". Ni el comprador
ni el vendedor tienen el control de soltar el dinero antes de tiempo:
el código del contrato es el único que puede liberarlo, y sólo cuando
se cumple la condición programada.

## El límite real: los oráculos

Un contrato inteligente, por su cuenta, **sólo puede ver información
que ya está dentro de la blockchain** — no sabe, por ejemplo, si un
vuelo se retrasó en el mundo real. Para que un contrato pueda
reaccionar a un hecho del mundo real (el resultado de un partido, el
precio de una acción, si un vuelo llegó tarde) hace falta un
**oráculo**: un servicio externo que trae ese dato de afuera y lo
"inyecta" en la blockchain para que el contrato lo pueda usar. El
oráculo es, en la práctica, el punto más débil del sistema: si el
oráculo informa mal un dato, el contrato ejecuta la acción igual,
aunque el dato real haya sido otro.

## La inmutabilidad es una ventaja... y un riesgo

Una vez publicado en la blockchain, el código de un contrato
inteligente **generalmente no se puede modificar** — es lo que
garantiza que ninguna de las partes lo pueda alterar a su favor
después de acordado. Pero esa misma propiedad es un riesgo: si el
código tiene un error de programación, ese error también queda fijo
para siempre, y se ejecuta igual que si fuera la regla correcta.

## Dónde aparece en la vida real

- Un seguro de vuelo automático que paga sin que el pasajero reclame
  nada, en cuanto un oráculo confirma que el vuelo se retrasó más de
  X horas.
- Un alquiler donde el pago mensual se libera automáticamente al
  propietario, en cuanto se confirma el depósito del inquilino.
- Un token que se libera de a poco con el paso del tiempo (vesting),
  sin que nadie tenga que apretar un botón cada mes.
