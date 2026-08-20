# Matemática — Expresiones equivalentes (teoría)

> Tema del MAPA: `A2` (Tronco 2 — Algebraico). Depende de
> `../../lengua/je-algebraico/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es equivalencia,
términos semejantes, propiedad distributiva, cómo verificar, errores
comunes).

---

## Qué significa "equivalente"

Dos expresiones algebraicas son **equivalentes** cuando dan el mismo
resultado sin importar qué número se ponga en lugar de la variable. No es
que "se parezcan" — es que son la misma receta escrita de dos formas
distintas. Por ejemplo, 3x + 5x y 8x son equivalentes: probá con x = 2
(3·2 + 5·2 = 16, y 8·2 = 16), con x = 10 (3·10+5·10 = 80, y 8·10 = 80) —
siempre coinciden, para cualquier valor.

Que coincidan para UN valor no alcanza para asegurar que son equivalentes
(podría ser casualidad de ese número puntual); pero si se puede demostrar
que coinciden para cualquier valor —simplificando ambas al mismo
resultado—, ya están garantizadas.

## Términos semejantes

Un **término** es cada pedazo de una expresión separado por + o −: en
2x + 5y − 3, los términos son 2x, 5y y −3. Dos términos son
**semejantes** cuando tienen exactamente la misma parte literal (la misma
variable, elevada al mismo exponente): 3x y 5x son semejantes; 3x y 5y no
(distinta letra); 3x y 5x² tampoco (distinto exponente).

Sólo se pueden sumar o restar directamente términos semejantes, sumando
sus coeficientes (el número que acompaña a la variable):

- 3x + 5x = 8x (se suman los coeficientes: 3+5=8)
- 10x − 4x = 6x
- 2x + 3y **no se puede simplificar más** — no son semejantes, quedan
  como están.

## La propiedad distributiva

a(b + c) = ab + ac: un número que multiplica a una suma (o resta) entre
paréntesis, multiplica a **cada** término de adentro, no sólo al primero.

- 2(x + 5) = 2x + 10 (no 2x + 5 — el error más común: distribuir sólo a
  la x y olvidarse del 5)
- 5(x − 2) = 5x − 10
- Un signo menos afuera del paréntesis distribuye cambiando el signo de
  **todos** los términos de adentro: −(x − 3) = −x + 3 (no −x − 3).

La propiedad distributiva es, en cierto sentido, lo opuesto de sacar
factor común: 2x + 10 = 2(x + 5) es la misma igualdad leída al revés.

## Cómo verificar si dos expresiones son equivalentes

1. Simplificar cada una (combinar términos semejantes, aplicar
   distributiva) hasta que no se pueda simplificar más.
2. Si las dos formas simplificadas quedan **idénticas**, son
   equivalentes.
3. Como atajo rápido (no una demostración, pero sirve para descartar):
   probar con un valor concreto de la variable. Si NO coinciden para ese
   valor, seguro no son equivalentes. Si coinciden, probablemente sí —
   pero conviene simplificar para estar seguro.

## Ejemplos resueltos

**¿2x + 3x − x es equivalente a 4x?**
1. Combinar términos semejantes: 2x + 3x − x = (2+3−1)x = 4x
2. Sí, son equivalentes.

**¿3(x + 2) es equivalente a 3x + 2?**
1. Distribuir: 3(x + 2) = 3x + 6
2. 3x + 6 ≠ 3x + 2 (6 no es 2)
3. No son equivalentes — error clásico: olvidarse de distribuir el 3 al
   segundo término.

**¿−(2x − 5) es equivalente a −2x + 5?**
1. Distribuir el signo negativo: −(2x − 5) = −2x + 5
2. Sí, son equivalentes.

## Errores comunes

- Sumar términos que no son semejantes: 3x + 5 no es 8x (x y el número
  suelto no se combinan).
- Distribuir sólo al primer término: 2(x + 3) = 2x + 3 está mal, falta
  multiplicar el 3.
- Perder el signo al distribuir un negativo: −(x − 3) = −x − 3 está mal,
  el signo del segundo término también cambia (−x + 3).
- Confundir "sumar x varias veces" con "elevar x a una potencia": x + x
  es 2x, no x². Sumar repite el mismo valor; elevar a una potencia lo
  multiplica por sí mismo.
