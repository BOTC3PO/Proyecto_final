# Economía — Plazo fijo vs. inflación: rendimiento real (teoria)

> Tema del MAPA: `E7` (Tronco 1 — Numérico). Depende de
> `../interes-compuesto/` (ver `../dependencias.md`). Es "la lectura
> personal" de la inflación — cuánto rinde de verdad una inversión —
> distinta de la macroeconomía de inflación/PBI (no cubierta acá).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — concepto + fórmula de Fisher + por qué importa en
un contexto de inflación alta.

---

## Ganar pesos no es lo mismo que ganar poder de compra

Un plazo fijo (o cualquier inversión) paga una **tasa de interés
nominal**: la cantidad de pesos de más que da, sin ajustar por nada más.
Pero si en ese mismo tiempo los precios subieron (hubo **inflación**),
esos pesos de más compran menos cosas que antes. El **rendimiento real**
es lo que realmente importa: cuánto creció (o no) el **poder
adquisitivo** del dinero, una vez descontado el efecto de la inflación.

## La ecuación de Fisher

```
(1 + rendimiento_real) = (1 + tasa_nominal) / (1 + inflación)

rendimiento_real = (1 + tasa_nominal) / (1 + inflación) - 1
```

- **tasa_nominal** = la tasa que paga la inversión (TNA, TEA, la que
  informa el banco), en forma decimal.
- **inflación** = la inflación del mismo período, en forma decimal.
- **rendimiento_real** = lo que realmente ganó (o perdió) el poder
  adquisitivo del dinero.

**Ejemplo**: un plazo fijo pagó una tasa nominal anual del 80%, en un año
en que la inflación fue del 90%: `rendimiento_real = (1,80 / 1,90) - 1 ≈
-0,0526`, es decir, un rendimiento real de **aproximadamente -5,3%** —
aunque el dinero creció un 80% en pesos, compró un 5,3% MENOS de lo que
podía comprar el capital original. Ganar pesos, en este caso, no evitó
perder poder de compra.

## La aproximación simple, y por qué falla con inflación alta

Es común escuchar la aproximación: `rendimiento_real ≈ tasa_nominal -
inflación`. Es una simplificación válida (Fisher lo demostró) sólo
cuando ambas tasas son **chicas**. Con tasas grandes — como las que suele
tener Argentina, con inflación e interés nominal de decenas o más del
100% anual — esa resta simple se aleja bastante del resultado exacto de
la fórmula de Fisher, porque ignora el término `× (1 + inflación)` que
divide todo. Para un cálculo confiable, conviene usar siempre la fórmula
completa, no la resta.

## Rendimiento real negativo: se puede "ganar" y perder al mismo tiempo

El caso más importante para entender: si la inflación es **mayor** que
la tasa nominal, el rendimiento real es **negativo**, aunque el saldo en
pesos de la cuenta haya crecido. Es la trampa más común al evaluar una
inversión: mirar sólo cuántos pesos de más hay al final, sin comparar
contra cuánto subieron los precios en el mismo tiempo.

## Cuándo el rendimiento real es exactamente cero

Por la fórmula de Fisher, el rendimiento real da exactamente 0% sólo
cuando la tasa nominal es **igual** a la inflación del período — ni un
punto más, ni un punto menos.

## Dónde aparece en la vida real

- **Elegir dónde poner los ahorros**: comparar la tasa nominal de un
  plazo fijo contra la inflación esperada, no sólo mirar qué banco paga
  el número más alto.
- **Negociar un sueldo o un contrato de alquiler**: un aumento nominal
  del salario que queda por debajo de la inflación del período es, en
  términos reales, una pérdida de poder adquisitivo, aunque el número en
  el recibo de sueldo sea más alto que antes.
