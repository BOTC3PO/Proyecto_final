# Matemática — Sucesiones y series (teoría)

> Tema del MAPA: `N19` (Tronco 1 — Numérico). Depende de
> `../sucesiones-aritmeticas/` (ver `../dependencias.md`, con la nota de
> por qué no se separó en dos módulos).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** alcanza.

---

## Qué es una serie

Una **serie** es la suma de los términos de una sucesión. Si la sucesión
es 3, 7, 11, 15, la serie de esos 4 términos es 3+7+11+15 = 36.

## La fórmula de la suma de una serie aritmética

Para sumar los primeros n términos de una sucesión aritmética (ver
`../sucesiones-aritmeticas/teoria.md`), hay una fórmula directa, sin tener
que sumar término por término:

**Sₙ = n × (a₁ + aₙ) ÷ 2**

Es, literalmente, el **promedio** del primer y el último término,
multiplicado por la cantidad de términos.

**Ejemplo**: sumar los primeros 10 términos de la sucesión con a₁ = 3 y d
= 4. Primero se calcula a₁₀ = 3 + 9×4 = 39. Después, S₁₀ = 10 × (3+39) ÷ 2
= 10 × 42 ÷ 2 = 210.

## Por qué funciona (el truco de Gauss)

Cuentan que Gauss, de chico, sumó los números del 1 al 100 en segundos:
emparejó el primero con el último (1+100=101), el segundo con el
anteúltimo (2+99=101)... cada par suma siempre lo mismo (101), y hay 50
pares → 50×101 = 5.050. Esa es, exactamente, la fórmula de arriba aplicada
a a₁=1, d=1, n=100.

## Caso especial: suma de los primeros N números naturales

Con a₁ = 1 y d = 1, la fórmula se simplifica a **Sₙ = n × (n+1) ÷ 2** — la
suma de los primeros n números naturales. Es la misma fórmula que ya
apareció al calcular sumas de múltiplos (ver
`../divisibilidad/multiplos/teoria.md`).
