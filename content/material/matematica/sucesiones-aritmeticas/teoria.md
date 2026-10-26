# Matemática — Sucesiones aritméticas: término general (teoría)

> Tema del MAPA: `N19B` (Tronco 1 — Numérico). Depende de `../suma/` (ver
> `../dependencias.md`). Le sigue "Sucesiones y series" (`N19`), carpeta
> aparte.

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** alcanza.

---

## Qué es una sucesión

Una sucesión es una lista ordenada de números que sigue una regla fija.
Cada número de la lista se llama **término**, y se identifica por su
posición: a₁ (primer término), a₂ (segundo término), aₙ (término
n-ésimo, en la posición n).

## Sucesión aritmética

Es una sucesión donde cada término se obtiene sumando siempre la misma
cantidad al anterior — esa cantidad fija se llama **diferencia común**
(d). Ejemplo: 3, 7, 11, 15, 19... es aritmética con d = 4 (siempre se suma
4).

Si d es positivo, la sucesión es creciente; si d es negativo, es
decreciente (ver `../numeros-enteros/teoria.md`). Ejemplo decreciente: 20,
15, 10, 5, 0, -5... con d = -5.

## El término general

En vez de sumar la diferencia una y otra vez para llegar a un término
lejano, hay una fórmula directa:

**aₙ = a₁ + (n − 1) × d**

**Ejemplo**: con a₁ = 3 y d = 4, ¿cuál es el término 10? a₁₀ = 3 +
(10−1)×4 = 3 + 36 = 39.

## Hallar la diferencia

Si se conocen dos términos consecutivos, la diferencia es, directamente,
el segundo menos el primero: d = aₙ − aₙ₋₁. Si se conocen dos términos no
consecutivos (por ejemplo a₁ y a₅), se puede despejar d de la fórmula del
término general.

## Reconocer si una sucesión es aritmética

Se resta cada término con el anterior: si esa diferencia da siempre el
mismo número, la sucesión es aritmética. Si la diferencia cambia de un
par de términos a otro, no lo es.
