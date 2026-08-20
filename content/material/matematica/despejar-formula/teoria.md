# Matemática — Despejar una variable de una fórmula (teoría)

> Tema del MAPA: `A4` (Tronco 2 — Algebraico). Depende de
> `../ecuacion-primer-grado/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué cambia respecto a
resolver una ecuación, fórmulas de ejemplo, el caso de la letra en el
denominador, errores comunes).

---

## Lo mismo que resolver una ecuación, con letras en vez de números

Una fórmula como P = 2(b + h) es, en el fondo, una ecuación con varias
letras en lugar de una sola incógnita. "Despejar b" significa exactamente
lo mismo que "resolver la ecuación para b": dejarla sola de un lado,
usando las mismas reglas de la balanza ya vistas en
`../ecuacion-primer-grado/teoria.md` — lo único que cambia es que del otro
lado, en vez de quedar un número, queda una **expresión con las demás
letras**.

Por ejemplo, despejar b de P = 2(b + h):
1. Dividir los dos lados por 2: P/2 = b + h
2. Restar h a los dos lados: **b = P/2 − h**

El resultado no es un número — es una receta para calcular b cualquiera
sea el valor de P y de h.

## Fórmulas de referencia (varias áreas, mismo procedimiento)

| Fórmula | Qué relaciona |
|---|---|
| P = 2(b + h) | Perímetro de un rectángulo |
| A = b · h | Área de un rectángulo |
| A = (b · h) / 2 | Área de un triángulo |
| A = ((B + b) · h) / 2 | Área de un trapecio |
| v = d / t | Velocidad, distancia y tiempo |
| d = m / V | Densidad, masa y volumen |
| I = C · i · t | Interés simple: capital, tasa y tiempo |

Todas se despejan con el mismo procedimiento: identificar qué operaciones
se le aplican a la letra que se quiere despejar, y deshacerlas en orden
inverso.

## El caso especial: la letra a despejar está dividiendo

Cuando la variable a despejar aparece en el **denominador** (v = d/t,
despejar t), no se puede "invertir" directamente — hay que pasarla
multiplicando primero, y recién después despejarla:

v = d/t
→ (multiplicar los dos lados por t) → v · t = d
→ (dividir los dos lados por v) → **t = d / v**

Es un error común "leer" la fórmula y escribir directamente t = v/d sin
pasar por este paso intermedio — da vuelta el resultado.

## Ejemplo resuelto: interés simple

**Despejar i de I = C · i · t**
1. C y t multiplican a i; dividir los dos lados por (C · t):
   I / (C · t) = i
2. **i = I / (C · t)**

## Ejemplo resuelto: trapecio

**Despejar B (base mayor) de A = ((B + b) · h) / 2**
1. Multiplicar los dos lados por 2: 2A = (B + b) · h
2. Dividir por h: 2A / h = B + b
3. Restar b: **B = 2A/h − b**

## Errores comunes

- Invertir directamente una letra que divide sin el paso intermedio
  (escribir t = v/d en vez de t = d/v al despejar de v = d/t).
- Olvidar distribuir cuando la letra a despejar queda sola dentro de un
  paréntesis con otro término (2A/h − b, no 2A/(h − b), al despejar B del
  trapecio).
- Cuando hay tres letras multiplicando del mismo lado (C · i · t), dividir
  sólo por una de las otras dos y dejar la tercera pegada al resultado.
- Mezclar el orden: aplicar primero la operación que "está más lejos" de
  la variable en vez de la más cercana (deshacer siempre de afuera hacia
  adentro, en el orden inverso al que se construyó la fórmula).
