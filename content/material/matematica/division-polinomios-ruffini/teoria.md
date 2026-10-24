# Matemática — División de polinomios: Teorema del resto y Ruffini (teoría)

> Tema del MAPA: `A6B` (Tronco 2 — Algebraico). Depende de
> `../polinomios-factoreo/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (dividir polinomios, regla
de Ruffini paso a paso, teorema del resto, teorema del factor, errores
comunes).

---

## Dividir un polinomio por otro

Igual que con números, dividir polinomios significa encontrar un
**cociente** y un **resto** tales que:

```
dividendo = divisor × cociente + resto
```

Hay un algoritmo general (división larga de polinomios), pero cuando el
divisor es de la forma **(x − a)** — un binomio simple —, hay un método
mucho más rápido: la **regla de Ruffini**.

## Regla de Ruffini

Para dividir un polinomio por (x − a):

1. Escribir sólo los **coeficientes** del polinomio (en orden, del grado
   más alto al más bajo, completando con 0 los grados que falten).
2. **Bajar** el primer coeficiente tal cual.
3. Multiplicarlo por **a**, sumar ese resultado al siguiente coeficiente.
4. Repetir el paso 3 con cada coeficiente que sigue.
5. El **último número obtenido es el resto**; los anteriores son los
   coeficientes del cociente (un grado menos que el original).

## Ejemplo resuelto

**Dividir x³ + 2x² − 5x − 6 por (x − 2)** (a = 2)

Coeficientes: 1, 2, −5, −6

| Bajar | ×2 y sumar | ×2 y sumar | ×2 y sumar (resto) |
|---|---|---|---|
| 1 | 2 + (1×2) = 4 | −5 + (4×2) = 3 | −6 + (3×2) = 0 |

Cociente: x² + 4x + 3 (coeficientes 1, 4, 3). Resto: 0.

## Teorema del resto

**El resto de dividir P(x) por (x − a) es exactamente P(a)** — el valor
que da el polinomio al evaluarlo en x = a. No hace falta hacer toda la
división para saber el resto: alcanza con reemplazar x por a en el
polinomio original.

Verificación con el ejemplo de arriba: P(x) = x³+2x²−5x−6, P(2) =
8+8−10−6 = 0 — coincide exactamente con el resto que dio Ruffini.

## Teorema del factor

Como consecuencia directa: **si P(a) = 0, entonces (x − a) es un factor
de P(x)** (y al revés: si (x−a) es factor, P(a) = 0). Es la conexión con
`../polinomios-factoreo/`: el teorema del resto da una forma rápida de
**probar** valores candidatos para factorear un polinomio de grado alto,
sin tener que adivinar a ojo.

## Errores comunes

- Usar el signo equivocado de a: para dividir por (x − 3), el valor que
  se usa en Ruffini es a = 3 (no −3); para dividir por (x + 3), es
  a = −3.
- Olvidarse de completar con 0 los coeficientes de un grado que no
  aparece en el polinomio (por ejemplo, x³ − 1 tiene coeficientes
  1, 0, 0, −1, no sólo 1, −1).
- Confundir el resto (el último número) con el último coeficiente del
  cociente (el anteúltimo).
- Aplicar Ruffini con un divisor que no es de la forma (x − a) — sólo
  funciona para binomios simples de grado 1 con coeficiente 1 en x.
