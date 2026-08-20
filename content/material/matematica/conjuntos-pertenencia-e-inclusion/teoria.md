# Matemática — Conjuntos: pertenencia e inclusión (teoría)

> Tema del MAPA: `CJ1` (Tronco 4.a — Conjuntos y combinatoria). Nodo
> raíz de este tronco, sin dependencia previa dentro de `matematica/`
> (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas de vocabulario encadenadas (conjunto,
elemento, pertenencia, subconjunto) mejor separadas en diapositivas.

---

## Qué es un conjunto

Un **conjunto** es una colección de objetos bien definida, sin
importar el orden y sin repetir elementos. Cada objeto de la colección
es un **elemento** del conjunto. Un conjunto se nombra con una letra
mayúscula (`A`, `B`, `C`...) y se puede escribir de dos formas:

- **Por extensión**: listando todos sus elementos entre llaves.
  `A = {2, 4, 6, 8}`.
- **Por comprensión**: describiendo la propiedad que cumplen sus
  elementos. `A = {x : x es par y 0 < x < 10}`.

## Pertenencia

Si un objeto es parte de un conjunto, se dice que le **pertenece**,
con el símbolo `∈`. Si no, se usa `∉`.

```
3 ∈ {1, 2, 3, 4}     (3 pertenece)
5 ∉ {1, 2, 3, 4}     (5 no pertenece)
```

## El conjunto vacío

El **conjunto vacío**, `∅` o `{}`, es el conjunto que no tiene ningún
elemento. No es "nada" — es un conjunto válido, con cardinalidad 0.

## Cardinalidad

La **cardinalidad** de un conjunto es la cantidad de elementos que
tiene, se escribe `|A|` o `n(A)`. `|{2, 4, 6, 8}| = 4`.

## Inclusión: subconjuntos

Un conjunto `B` es **subconjunto** de `A` (se escribe `B ⊆ A`) cuando
**todos** los elementos de `B` también son elementos de `A`. Si además
`A` tiene al menos un elemento que `B` no tiene, se dice que `B` es un
**subconjunto propio** de `A` (`B ⊂ A`).

```
B = {2, 4}, A = {2, 4, 6, 8}  →  B ⊆ A (y además B ⊂ A, propio)
A ⊆ A siempre (todo conjunto es subconjunto de sí mismo, no propio)
∅ ⊆ A siempre (el conjunto vacío es subconjunto de cualquier conjunto)
```

## El conjunto universal

El **conjunto universal** (`U`) es el conjunto de referencia que
contiene a todos los elementos posibles en el contexto de un problema
(por ejemplo, si se habla de días de la semana, `U` son los 7 días).
Todo conjunto que se mencione en ese contexto es subconjunto de `U`.

## Para qué sirve

Es el vocabulario de base sin el cual "unión", "intersección" y
"diagrama de Venn" (los próximos módulos) serían sólo dibujos con
círculos que se solapan, sin ninguna operación formal detrás. También
es la base de la lógica proposicional (Filosofía) y del álgebra
relacional de bases de datos (Informática) — la misma idea de
pertenencia e inclusión, aplicada a filas de una tabla o a
proposiciones lógicas.
