# Matemática — Función lineal: pendiente y ordenada (teoría)

> Tema del MAPA: `A9` (Tronco 2 — Algebraico). Depende de
> `../ecuacion-primer-grado/`, `../funcion-dominio/` y
> `../funcion-imagen/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (forma general, cómo
calcular la pendiente, ecuación punto-pendiente, paralelas y
perpendiculares, errores comunes).

---

## Forma general

Una función lineal tiene la forma f(x) = mx + b. Su gráfico es siempre
una **recta**. Los dos números que la definen:

- **m (pendiente)**: cuánto sube o baja y por cada unidad que avanza x.
- **b (ordenada al origen)**: el valor de f(0), donde la recta cruza el
  eje y.

## Calcular la pendiente a partir de dos puntos

Si se conocen dos puntos (x₁, y₁) y (x₂, y₂) de la recta:

```
m = (y₂ − y₁) / (x₂ − x₁)
```

**El orden importa, pero de forma consistente**: mientras se reste en el
mismo orden arriba y abajo (y₂ antes que y₁, y x₂ antes que x₁), el
resultado es el mismo sin importar cuál punto se llame "1" y cuál "2".

## El signo de la pendiente

- **m > 0**: la función es **creciente** (sube de izquierda a derecha).
- **m < 0**: la función es **decreciente** (baja de izquierda a
  derecha).
- **m = 0**: la función es **constante** (una recta horizontal).

## Ecuación punto-pendiente

Si se conoce un punto (x₁, y₁) de la recta y su pendiente m, la ecuación
de la recta es:

```
y − y₁ = m(x − x₁)
```

Que se puede reordenar a la forma y = mx + b despejando y.

## Rectas paralelas y perpendiculares

- **Paralelas**: tienen exactamente la **misma pendiente** (m₁ = m₂).
- **Perpendiculares**: el producto de sus pendientes es −1
  (m₁ × m₂ = −1) — la pendiente de una es la inversa y opuesta de la
  otra.

## Ejemplo resuelto

**Hallar la ecuación de la recta que pasa por (1, 5) y (3, 11).**

1. Pendiente: m = (11−5)/(3−1) = 6/2 = 3.
2. Punto-pendiente con (1,5): y − 5 = 3(x − 1).
3. Despejando: y = 3x − 3 + 5 = 3x + 2.

Verificación: en x=1, y=3(1)+2=5 ✓. En x=3, y=3(3)+2=11 ✓.

## Errores comunes

- Restar x₂−x₁ arriba y y₁−y₂ abajo (invertir el orden en uno de los dos,
  no en los dos).
- Confundir la pendiente con la ordenada al origen.
- En la ecuación punto-pendiente, olvidarse de distribuir el m al
  despejar y.
- Pensar que dos rectas son perpendiculares por tener pendientes
  opuestas en signo (m y −m) sin que además sean recíprocas.
