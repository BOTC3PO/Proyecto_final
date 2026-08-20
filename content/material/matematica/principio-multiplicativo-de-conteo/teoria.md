# Matemática — Principio multiplicativo de conteo (teoría)

> Tema del MAPA: `CJ4` (Tronco 4.a). Depende de
> `../diagramas-de-venn/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola idea central (multiplicar en vez de enumerar),
no necesita separarse en varias diapositivas.

---

## Contar sin enumerar

Hasta ahora, para saber cuántas combinaciones posibles hay, se podía
enumerar (listar) todas una por una. El **principio multiplicativo de
conteo** permite contar **sin enumerar**, cuando una elección se
compone de varias decisiones independientes, una tras otra.

## La regla

Si una decisión se toma en **varios pasos independientes**, y el
paso 1 tiene `n₁` opciones posibles, el paso 2 tiene `n₂` opciones, el
paso 3 tiene `n₃` opciones (y así con cuantos pasos haya), la cantidad
total de combinaciones posibles es el **producto** de todas esas
opciones:

```
Total = n₁ × n₂ × n₃ × ...
```

**Ejemplo clásico**: un menú tiene 3 entradas, 4 platos principales y
2 postres. Para armar un menú completo (una entrada, un plato, un
postre), hay:

```
3 × 4 × 2 = 24 combinaciones distintas
```

Enumerar las 24 combinaciones una por una funciona, pero para números
grandes (una clave de 6 dígitos tiene 1.000.000 de combinaciones)
enumerar es imposible — multiplicar sigue funcionando igual.

## Por qué funciona: cada paso es independiente

La clave es que la elección de un paso **no cambia** cuántas opciones
hay en los otros pasos. Si eligiendo una entrada distinta cambiara la
cantidad de postres disponibles, la regla de multiplicar directo ya no
aplicaría tan simple (haría falta sumar casos por separado).

## El puente hacia lo que sigue

El principio multiplicativo es la base de las tres formas de contar
que vienen después, cada una con una restricción distinta sobre las
elecciones:

- **Permutaciones**: usar **todos** los elementos de un conjunto, en
  algún orden.
- **Variaciones**: usar sólo **una parte**, importa el orden.
- **Combinaciones**: usar sólo una parte, **sin** importar el orden.

Las tres se resuelven, en el fondo, aplicando el principio
multiplicativo con distintas restricciones sobre qué se puede repetir
y qué cuenta como "distinto".

## Para qué sirve

Explica por qué una clave de 4 dígitos tiene 10.000 combinaciones
posibles (10×10×10×10), por qué una patente de auto con 3 letras y 3
números tiene miles de combinaciones, y por qué elegir un outfit con
varias prendas se multiplica en vez de sumarse.
