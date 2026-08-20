# Matemática — Teorema de Bayes (teoria)

> Tema del MAPA: `D11` (Tronco 4.b). Depende de
> `../probabilidad-condicional/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — la fórmula y el ejemplo médico completo (con su
resultado contraintuitivo) conviene mostrarlos en pasos separados.

---

## Invertir la condicional

`../probabilidad-condicional/` terminó señalando que `P(A|B)` y
`P(B|A)` **no son lo mismo** en general. El **teorema de Bayes** es la
fórmula exacta para pasar de uno al otro — para "invertir" una
probabilidad condicional conocida y obtener la contraria:

```
P(A|B) = P(B|A) × P(A) / P(B)
```

## Los tres términos, con nombre propio

- **P(A)**: la probabilidad **a priori** de A — lo que se sabía
  **antes** de tener la evidencia B.
- **P(B|A)**: la **verosimilitud** — qué tan probable es la evidencia
  B, si A fuera cierto.
- **P(A|B)**: la probabilidad **a posteriori** — la probabilidad
  actualizada de A, **después** de incorporar la evidencia B.

Bayes describe, en el fondo, cómo actualizar una creencia (`P(A)`)
cuando aparece evidencia nueva (`B`), para llegar a una creencia
actualizada (`P(A|B)`).

## El ejemplo clásico: un test médico

Una enfermedad es rara: la tiene el **1%** de la población
(`P(enfermo) = 0,01`). Un test para detectarla es bastante bueno: da
positivo en el **99%** de los enfermos (`P(positivo|enfermo) = 0,99`,
la sensibilidad) y da negativo en el **95%** de los sanos
(`P(negativo|sano) = 0,95`, la especificidad — así que
`P(positivo|sano) = 0,05`).

**Pregunta**: si a una persona le da positivo el test, ¿cuál es la
probabilidad real de que esté enferma, `P(enfermo|positivo)`?

Antes de aplicar Bayes hace falta `P(positivo)`, la probabilidad total
de dar positivo (venga de un enfermo real o de un falso positivo en un
sano):

```
P(positivo) = P(positivo|enfermo)×P(enfermo) + P(positivo|sano)×P(sano)
            = 0,99×0,01 + 0,05×0,99 = 0,0099 + 0,0495 = 0,0594
```

Y ahora sí, Bayes:

```
P(enfermo|positivo) = P(positivo|enfermo) × P(enfermo) / P(positivo)
                     = 0,99 × 0,01 / 0,0594 ≈ 0,167
```

**El resultado sorprende**: aunque el test parece muy confiable (99%
de sensibilidad), la probabilidad real de estar enfermo dado un
resultado positivo es de sólo ≈ **16,7%**, no 99%. La razón es que la
enfermedad es tan rara que, aunque el test casi nunca falle con un
enfermo real, la enorme cantidad de sanos hace que los falsos
positivos (5% de una población gigante de sanos) superen ampliamente
a los verdaderos positivos (99% de una población chica de enfermos).

## Por qué importa la probabilidad a priori

Este resultado contraintuitivo es la razón por la que la probabilidad
**a priori** (acá, qué tan común es la enfermedad) es tan importante:
ignorarla y quedarse sólo con la sensibilidad del test lleva a
sobreestimar mucho la probabilidad real. Es un error tan común que
tiene nombre propio: la **falacia de la tasa base** (base rate
fallacy).

## Para qué sirve

Es la base matemática de los filtros de spam (actualizar la
probabilidad de que un mail sea spam, dado que contiene ciertas
palabras), de diagnósticos médicos bien interpretados, y de cualquier
sistema que necesite actualizar una creencia a medida que llega
evidencia nueva, en vez de tratar cada observación como si fuera
información completa por sí sola.
