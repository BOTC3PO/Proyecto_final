# Economía — Interés simple (teoria)

> Tema del MAPA: `E3` (Tronco 1 — Numérico). Depende de
> `../../matematica/porcentaje/` (ver `../dependencias.md`). Es la base
> de `Interés compuesto` (siguiente nodo del tronco), que no se cubre
> acá — sólo se menciona como contraste al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — fórmula + varios ejemplos y comparaciones.

---

## Qué es el interés

Cuando alguien presta plata (un banco, una persona, el Estado), el que la
recibe paga un extra por usarla durante un tiempo: ese extra es el
**interés**. El **capital** es la plata original prestada o invertida; el
**monto** (o valor final) es el capital más el interés generado.

## Interés simple: el interés se calcula siempre sobre el capital original

En el interés simple, el interés de cada período se calcula **siempre
sobre el mismo capital inicial** — no sobre el capital más los intereses
ya generados en períodos anteriores. Por eso crece de forma **lineal**:
cada período agrega la misma cantidad de plata en concepto de interés.

## La fórmula

```
I = C × r × t
M = C + I = C × (1 + r × t)
```

- **C** = capital inicial.
- **r** = tasa de interés, expresada en forma **decimal** (una tasa del
  8% se usa como `0,08`, no como `8`).
- **t** = tiempo, en la **misma unidad** que la tasa (si la tasa es
  anual, `t` va en años; si es mensual, `t` va en meses).
- **I** = interés generado.
- **M** = monto final (lo que hay que devolver, o lo que queda después
  de invertir).

**Ejemplo**: un capital de $100.000 a una tasa del 5% anual, durante 3
años: `I = 100.000 × 0,05 × 3 = $15.000`. El monto final es
`M = 100.000 + 15.000 = $115.000`.

## Ojo con las unidades de tiempo

Si la tasa es anual pero el plazo está en meses, hay que convertir los
meses a años (dividir por 12) antes de aplicar la fórmula — o convertir
la tasa anual a mensual (dividir por 12), da lo mismo. Mezclar una tasa
anual con un tiempo en meses sin convertir es el error más común al
calcular interés simple.

## Interés simple vs. interés compuesto (sólo como contraste)

El interés simple siempre se calcula sobre el capital original: crece
linealmente. El interés compuesto (próximo tema) reinvierte el interés
generado, así que los períodos siguientes generan interés también sobre
el interés anterior: crece de forma exponencial. Para `t = 1` período dan
exactamente lo mismo; a partir de ahí, el compuesto siempre da más.

## Dónde aparece en la vida real

- **Plazo fijo tradicional en Argentina**: dentro de un mismo período de
  imposición (el plazo pactado, ej. 30 días), el banco no capitaliza —
  aplica la tasa nominal anual (TNA) proporcional a los días del plazo
  sobre el capital depositado, sin interés sobre interés durante ese
  plazo. Es interés simple aplicado a un plazo corto. (La mecánica es
  estable; la TNA vigente en cada momento no — no se hardcodea acá.)
- **Préstamos informales entre personas**: cuando se pacta "te devuelvo
  el capital más un X% por mes", sin capitalizar mes a mes, es interés
  simple.
- **Intereses punitorios o moratorios simples**: algunos recargos por
  pago atrasado se calculan como un porcentaje fijo sobre la deuda
  original por cada período de atraso, sin acumular sobre sí mismos.
