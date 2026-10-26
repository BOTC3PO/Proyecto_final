# Matemática — Optimización: máximos y mínimos (teoría)

> Tema del MAPA: `A13B` (Tronco 2 — Algebraico). Depende de
> `../derivada/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (punto crítico, criterio
de la derivada segunda, procedimiento completo, problemas en contexto,
errores comunes).

---

## Por qué la derivada encuentra máximos y mínimos

En un máximo o un mínimo, la recta tangente al gráfico es **horizontal**
(pendiente 0) — justo antes del punto la función venía subiendo (o
bajando), y justo después hace lo contrario. Ese cambio de dirección pasa
exactamente por un instante de pendiente 0.

## Punto crítico

Un **punto crítico** de f es un valor x donde f'(x) = 0 (o donde la
derivada no existe, aunque para los polinomios de este curso siempre
existe). Es un **candidato** a máximo o mínimo — todavía hace falta
clasificarlo.

## Clasificar con la derivada segunda

Se deriva f' de nuevo, obteniendo f'' (la derivada segunda). En un punto
crítico x₀:

- **f''(x₀) > 0**: la función tiene un **mínimo** local ahí (la curva
  "abre hacia arriba" cerca de x₀).
- **f''(x₀) < 0**: la función tiene un **máximo** local ahí (la curva
  "abre hacia abajo").
- **f''(x₀) = 0**: el criterio no alcanza para decidir, hace falta otro
  análisis (fuera del alcance de este módulo).

## El caso de la función cuadrática

Para f(x) = ax² + bx + c: f'(x) = 2ax + b, que se anula en x = −b/(2a) —
exactamente el vértice ya visto en `../funcion-cuadratica-parabola/`.
La derivada segunda es f''(x) = 2a (constante, no depende de x):

- Si a > 0: f''=2a>0 → mínimo (la parábola abre hacia arriba).
- Si a < 0: f''=2a<0 → máximo (la parábola abre hacia abajo).

Es la misma conclusión sobre concavidad de siempre, ahora **derivada**
formalmente en vez de sólo observada.

## Procedimiento general

1. Derivar f para obtener f'(x).
2. Resolver f'(x) = 0 para encontrar los puntos críticos.
3. Calcular f''(x) y evaluarla en cada punto crítico para clasificarlo.
4. (En problemas de contexto) Verificar que el resultado tenga sentido
   físico — una cantidad, longitud o tiempo no puede ser negativo.

## Ejemplo resuelto: área máxima con perímetro fijo

**Un rectángulo tiene perímetro 40. ¿Qué dimensiones maximizan el área?**

1. Si un lado es x, el otro es (20−x) (porque 2x+2(20−x)=40).
2. Área: A(x) = x(20−x) = 20x − x².
3. A'(x) = 20 − 2x = 0 → x = 10.
4. A''(x) = −2 < 0 → es un máximo.
5. Con x=10, el otro lado también es 10 — el rectángulo óptimo es un
   **cuadrado** de lado 10, área 100.

## Errores comunes

- Encontrar el punto crítico y quedarse ahí, sin clasificarlo (¿es
  máximo, mínimo, o ninguno de los dos?).
- En problemas de contexto, no verificar que la solución tenga sentido
  (una longitud negativa no sirve, aunque sea matemáticamente una
  solución de la ecuación).
- Confundir "dónde la derivada se anula" con "dónde la función se
  anula" — son preguntas completamente distintas (raíces vs. puntos
  críticos).
- Olvidar plantear correctamente la función a optimizar antes de
  derivar (el paso más difícil suele ser armar la fórmula, no derivarla).
