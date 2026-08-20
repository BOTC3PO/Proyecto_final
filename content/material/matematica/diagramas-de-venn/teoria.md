# Matemática — Diagramas de Venn (teoría)

> Tema del MAPA: `CJ3` (Tronco 4.a). Depende de
> `../union-interseccion-y-diferencia/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola idea central (leer y usar el diagrama), no
necesita separarse en varias diapositivas.

---

## Qué es un diagrama de Venn

Un **diagrama de Venn** es la representación visual de conjuntos y sus
operaciones: cada conjunto se dibuja como un círculo (o una figura
cerrada), y el **conjunto universal** `U` como un rectángulo que
contiene a todos los círculos. Cuando dos círculos se superponen, la
zona de superposición representa la **intersección** de esos
conjuntos.

## Leer las regiones del diagrama

Con dos conjuntos `A` y `B` dentro de `U`, el diagrama queda dividido
en **cuatro regiones**:

- La parte de `A` que **no** se superpone con `B`: son los elementos
  de `A − B`.
- La parte de `B` que **no** se superpone con `A`: son los elementos
  de `B − A`.
- La zona donde se superponen: son los elementos de `A ∩ B`.
- La zona fuera de ambos círculos (pero dentro de `U`): son los
  elementos que no están ni en `A` ni en `B`.

La **unión** `A ∪ B` es todo lo que está dentro de cualquiera de los
dos círculos (las tres primeras regiones juntas).

## Sin las operaciones, es sólo un dibujo

Un diagrama de Venn **no reemplaza** las operaciones de
`../union-interseccion-y-diferencia/` — es la forma visual de esas
mismas operaciones. Sin saber qué es la unión y la intersección de
antemano, el diagrama es sólo dos círculos que se tocan, sin ningún
significado matemático.

## Contar elementos con el diagrama

Cuando un problema da las cantidades de cada región (en vez de listar
los elementos), conviene completar el diagrama región por región,
empezando siempre por la **intersección** (el centro), porque las
otras regiones se calculan restando esa cantidad de los totales:

```
región sólo-A = |A| − |A∩B|
región sólo-B = |B| − |A∩B|
```

## Para qué sirve

Aparece en probabilidad simple (clasificar un espacio muestral en
casos que cumplen una condición, otra, o ninguna) y en cualquier
disciplina que necesite mostrar visualmente relaciones de inclusión y
superposición entre categorías (Biología: clasificación de especies;
Informática: relaciones entre conjuntos de datos).
