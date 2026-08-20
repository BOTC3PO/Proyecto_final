# Economía — Valor esperado de una inversión y riesgo (teoria)

> Tema del MAPA: `E25` (Tronco 1 — Numérico). Depende de
> `../plazo-fijo-vs-inflacion/` (ver `../dependencias.md`). El MAPA
> también marca como prerrequisito `Esperanza matemática` (nodo `D17`
> del tronco de Probabilidad/Estadística), que **todavía no existe**
> como carpeta de Matemática — por eso la fórmula del valor esperado se
> explica acá de cero, en vez de asumirla ya vista. Es la base de
> `Seguros` y `Fondo de emergencia y diversificación`, que no se cubren
> acá.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — concepto de valor esperado + riesgo + comparación
entre inversiones.

---

## Toda inversión tiene resultados posibles, no un único resultado

Un plazo fijo a tasa fija tiene un solo resultado posible (salvo que el
banco quiebre): se sabe de antemano cuánto va a pagar. La mayoría de las
demás inversiones (acciones, un negocio propio, un bono con riesgo de
default) no funcionan así: tienen **varios resultados posibles**, cada
uno con una **probabilidad** distinta de ocurrir.

## Valor esperado: el promedio ponderado por probabilidad

El **valor esperado** (E(X)) resume todos los resultados posibles en un
solo número: no es un promedio simple de los resultados, sino un
promedio **ponderado por probabilidad** — cada resultado pesa según qué
tan probable es que ocurra.

```
E(X) = p1 × resultado1 + p2 × resultado2 + ... + pn × resultadon
```

Las probabilidades de todos los escenarios posibles siempre suman 1 (o
100%).

**Ejemplo**: una inversión tiene 70% de probabilidad de ganar $50.000, y
30% de probabilidad de perder $20.000. El valor esperado es:
`E(X) = 0,70 × 50.000 + 0,30 × (-20.000) = 35.000 - 6.000 = $29.000`.

## El riesgo: qué tan lejos pueden estar los resultados reales del valor esperado

El valor esperado dice cuál es el promedio, pero no dice nada sobre qué
tan **dispersos** están los resultados posibles alrededor de ese
promedio. Dos inversiones pueden tener exactamente el mismo valor
esperado y, aun así, ser muy distintas en cuánto podés ganar o perder en
un caso puntual — eso es el **riesgo**.

**Ejemplo clásico**: Inversión A paga siempre $10.000, garantizado (100%
de probabilidad). Inversión B tiene 50% de probabilidad de pagar
$20.000 y 50% de probabilidad de pagar $0. Las dos tienen el mismo valor
esperado (`E(X) = $10.000` en ambas), pero B es mucho más riesgosa: el
resultado real puede terminar siendo el doble o la mitad del esperado, en
vez de siempre ser exactamente ese número.

## Medir el riesgo: la dispersión de los resultados

Una forma más precisa de medir el riesgo (además de "mirar qué tan lejos
está el peor caso") es la **varianza** y su raíz cuadrada, el **desvío
estándar**: promedian, ponderados por probabilidad, qué tan lejos está
cada resultado posible del valor esperado.

```
Varianza = p1 × (resultado1 - E(X))² + p2 × (resultado2 - E(X))² + ...
Desvío estándar = √Varianza
```

Cuanto más alto el desvío estándar, más dispersos están los resultados
posibles alrededor del valor esperado — más riesgosa es la inversión.
Una inversión sin riesgo (como el plazo fijo garantizado) tiene desvío
estándar igual a 0.

## La relación riesgo-retorno

En general, las inversiones con mayor riesgo (desvío estándar más alto)
suelen ofrecer, en promedio, un valor esperado más alto — nadie asumiría
un riesgo mayor sin la posibilidad de una recompensa mayor. Es la
relación conocida como **riesgo-retorno**: un plazo fijo es de bajo
riesgo y bajo rendimiento esperado; una acción o un negocio propio puede
tener un valor esperado más alto, pero con más dispersión de resultados
posibles (incluida la posibilidad real de pérdida).

## Dónde aparece en la vida real

- **Elegir entre plazo fijo y otras inversiones**: no sólo comparar
  cuánto rinde en promedio, sino cuánta variación de resultados está
  dispuesto a tolerar quien invierte.
- **Un seguro**: es, en el fondo, la lectura inversa del valor esperado
  — quien contrata un seguro acepta un valor esperado ligeramente
  negativo (lo que paga de prima, en promedio, es un poco más de lo que
  espera cobrar) a cambio de reducir su riesgo (evitar la posibilidad de
  una pérdida grande e inesperada).
- **Diversificar** (repartir el dinero en varias inversiones en vez de
  una sola) es una forma de reducir el riesgo total sin necesariamente
  reducir el valor esperado.
