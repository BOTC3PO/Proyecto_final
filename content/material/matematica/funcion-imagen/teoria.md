# Matemática — Función: imagen (teoría)

> Tema del MAPA: `FUNC1b` (Tronco 2 — Algebraico). Depende de
> `../ecuacion-primer-grado/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es la imagen, casos
por tipo de función, cómo hallarla, errores comunes).

---

## Qué es la imagen

Si el dominio (`../funcion-dominio/teoria.md`) es el conjunto de valores
que se le pueden **dar** a una función, la **imagen** (o recorrido) es el
conjunto de valores que la función **efectivamente devuelve** — todos los
y = f(x) posibles, recorriendo todo el dominio.

No es lo mismo que el "conjunto de llegada" declarado (que puede incluir
valores que la función nunca toca): la imagen es sólo lo que
**realmente** se alcanza.

## Imagen según el tipo de función

- **Función lineal no constante** (f(x) = mx + b, con m ≠ 0): la imagen
  son **todos los reales** — para cualquier y que se quiera, siempre hay
  algún x que lo produce.
- **Función constante** (f(x) = k): la imagen es **un solo valor**, {k}
  — no importa qué x se use, siempre da lo mismo.
- **Función cuadrática** en forma de vértice, f(x) = (x − h)² + k: el
  punto (h, k) es el **vértice**, el valor extremo de la función.
  - Si abre hacia **arriba** (coeficiente principal positivo): la imagen
    es y ≥ k (k es el mínimo, nunca baja de ahí).
  - Si abre hacia **abajo** (coeficiente principal negativo): la imagen
    es y ≤ k (k es el máximo, nunca sube de ahí).
- **Valor absoluto**, f(x) = |x − h| + k: la imagen siempre es y ≥ k — el
  valor absoluto nunca da negativo, así que el mínimo posible es k.

## Cómo hallar la imagen de una cuadrática general

Para f(x) = ax² + bx + c (sin estar ya en forma de vértice), el vértice
está en x = −b/(2a); reemplazando ese x en f se obtiene el valor k del
vértice, y el signo de a dice si abre para arriba o para abajo.

## Ejemplos resueltos

**f(x) = (x − 3)² + 5** (abre hacia arriba): vértice (3, 5) → imagen:
y ≥ 5.

**f(x) = −(x + 2)² + 7** (abre hacia abajo, signo negativo adelante):
vértice (−2, 7) → imagen: y ≤ 7.

**f(x) = |x − 4| − 1**: vértice (4, −1) → imagen: y ≥ −1.

## Errores comunes

- Confundir dominio con imagen: el dominio restringe qué x se pueden
  usar; la imagen describe qué y se obtienen — son preguntas distintas,
  sobre ejes distintos.
- Con una parábola que abre hacia abajo, seguir escribiendo "y ≥ k" en
  vez de dar vuelta la desigualdad a "y ≤ k".
- Pensar que la imagen de una función lineal tiene algún límite, cuando
  en realidad cubre todos los reales (salvo el caso especial de una
  función constante, que no es realmente "lineal creciente/decreciente").
- Olvidar que el valor absoluto nunca es negativo, y proponer una imagen
  con valores por debajo del vértice.
