# Matemática — Unión, intersección y diferencia (teoría)

> Tema del MAPA: `CJ2` (Tronco 4.a). Depende de
> `../conjuntos-pertenencia-e-inclusion/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — tres operaciones distintas (unión, intersección,
diferencia) mejor separadas en diapositivas, aunque se enseñen en el
mismo bloque.

---

## Tres formas de combinar conjuntos

Dados dos conjuntos `A` y `B`, hay tres operaciones básicas para
combinarlos:

### Unión (A ∪ B)

Todos los elementos que están en `A`, en `B`, o en **ambos** (sin
repetir ninguno, porque un conjunto nunca repite elementos).

```
A = {1, 2, 3, 4}, B = {3, 4, 5, 6}
A ∪ B = {1, 2, 3, 4, 5, 6}
```

### Intersección (A ∩ B)

Sólo los elementos que están **en ambos** conjuntos a la vez.

```
A ∩ B = {3, 4}
```

### Diferencia (A − B)

Los elementos de `A` que **no** están en `B`. A diferencia de la unión
y la intersección, la diferencia **no es conmutativa**: `A − B` no es
lo mismo que `B − A`.

```
A − B = {1, 2}       (lo de A que no está en B)
B − A = {5, 6}       (lo de B que no está en A)
```

## La fórmula de cardinalidad de la unión

Para saber cuántos elementos tiene `A ∪ B` sin necesitar listar los
conjuntos completos, alcanza con sus cardinalidades y la de la
intersección:

```
|A ∪ B| = |A| + |B| − |A ∩ B|
```

**Por qué se resta la intersección**: si se suma `|A| + |B|` sin
ajustar, los elementos que están en ambos conjuntos se cuentan **dos
veces** — una al contar `A` y otra al contar `B`. Restar `|A ∩ B|` una
vez corrige ese doble conteo.

De esta fórmula se pueden despejar las otras cantidades:

```
|A ∩ B| = |A| + |B| − |A ∪ B|
```

## Propiedades

- **Unión e intersección son conmutativas**: `A ∪ B = B ∪ A`, y
  `A ∩ B = B ∩ A` — el orden no cambia el resultado.
- **La diferencia NO es conmutativa**: `A − B ≠ B − A` en general.
- Si `A` y `B` no tienen ningún elemento en común (**disjuntos**),
  `A ∩ B = ∅` y `|A ∪ B| = |A| + |B|` (no hace falta restar nada).

## Para qué sirve

Es exactamente la operación que hace una consulta de base de datos con
`Y`/`O` (Informática): pedir filas que cumplan una condición **y**
otra a la vez es intersección; pedir filas que cumplan **cualquiera**
de dos condiciones es unión. También es la base para clasificar un
espacio muestral en probabilidad, y para leer correctamente un
diagrama de Venn (próximo módulo).
