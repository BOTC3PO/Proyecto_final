# Filosofía — Lógica de predicados: cuantificadores (∀, ∃) y deducción formal (teoria)

> Tema del MAPA: `FI2B` (Tronco 5, `Filosofía`). Depende de
> `../validez-de-un-razonamiento/` (ver `../dependencias.md`).
> Agregado v2.6.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — predicados, cuantificadores y reglas de
deducción son secciones separables.

---

## De proposiciones fijas a predicados con variable

`../logica-proposicional/` trabajó con proposiciones **completas y
fijas** ("llueve", "Sócrates es mortal"). La **lógica de predicados**
da un paso más: separa un **predicado** (una propiedad, "... es
mortal") de un **sujeto variable** (x) que puede reemplazarse por
distintos elementos. "P(x)" se lee "x cumple la propiedad P".

## Cuantificador universal (∀)

**∀x P(x)** se lee "**para todo** x, se cumple P(x)" — la propiedad
vale para **todos** los elementos del conjunto considerado.

"∀x (x es humano → x es mortal)" = "Todo humano es mortal."

## Cuantificador existencial (∃)

**∃x P(x)** se lee "**existe** un x tal que se cumple P(x)" — la
propiedad vale para **al menos uno** de los elementos, no
necesariamente todos.

"∃x (x es humano ∧ x es filósofo)" = "Existe (al menos) un humano que
es filósofo."

## Negar un cuantificador invierte el otro

Regla clave: negar "para todo" equivale a "existe al menos uno que
no" — y viceversa.

- ¬(∀x P(x)) equivale a ∃x ¬P(x): "no todos cumplen P" = "existe
  alguno que no cumple P".
- ¬(∃x P(x)) equivale a ∀x ¬P(x): "no existe ninguno que cumpla P" =
  "todos no cumplen P" (ninguno cumple).

## Deducción formal: el silogismo clásico

La deducción formal encadena premisas cuantificadas para llegar a una
conclusión sobre un caso particular — el ejemplo más clásico de la
historia de la lógica:

- Premisa 1: ∀x (x es humano → x es mortal) — "Todo humano es mortal."
- Premisa 2: Sócrates es humano.
- Conclusión: Sócrates es mortal.

Esto formaliza el **modus ponens** de `../validez-de-un-razonamiento/`,
pero ahora aplicado a un caso particular (Sócrates) que "encaja" en la
propiedad general cuantificada con ∀.

## Por qué esto es más potente que la lógica proposicional

La lógica proposicional no puede representar "todo humano es mortal"
más que como una proposición fija sin estructura interna (una simple
letra "p"). La lógica de predicados **sí** puede analizar la
estructura interna de esa afirmación (que habla de TODOS los
elementos de un conjunto), permitiendo deducciones sobre casos
particulares que la proposicional no puede formalizar.

## Para qué sirve

Este tema cierra, del lado de Filosofía, el mismo salto de nivel que
`../../informatica/algebra-booleana/` deja pendiente del lado de
Informática (booleana opera con proposiciones fijas; predicados,
con proposiciones que dependen de una variable) — es la base formal
de cómo funcionan las demostraciones matemáticas rigurosas y ciertos
lenguajes de programación lógica.
