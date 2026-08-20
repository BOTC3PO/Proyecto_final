# Matemática — Función: dominio (teoría)

> Tema del MAPA: `FUNC1a` (Tronco 2 — Algebraico). Depende de
> `../ecuacion-primer-grado/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es una función,
restricciones típicas de dominio, notación, ejemplos, errores comunes).

---

## Qué es una función

Una **función** f es una regla que asocia a cada valor de entrada x (de
un conjunto de partida) **exactamente un** valor de salida y = f(x) (de
un conjunto de llegada). "Exactamente uno" es la parte clave: si un mismo
x pudiera dar dos resultados distintos, no sería una función.

## Qué es el dominio

El **dominio** de f es el conjunto de todos los valores de x para los que
la función **está definida** — para los que existe un resultado real.
Algunas expresiones no tienen sentido para ciertos valores de x, y esos
valores quedan afuera del dominio.

## Las tres restricciones típicas

- **Denominador**: no se puede dividir por 0. Si f(x) tiene una x en el
  denominador, hay que excluir del dominio cualquier valor que haga que
  ese denominador dé 0.
  Ejemplo: f(x) = 1/(x − 3) → el dominio es todo x, **excepto** x = 3.
- **Raíz de índice par** (cuadrada, cuarta...): el radicando (lo de
  adentro) no puede ser negativo. Si f(x) tiene una raíz cuadrada de una
  expresión con x, esa expresión tiene que ser ≥ 0.
  Ejemplo: f(x) = √(x − 2) → el dominio es x ≥ 2.
  (Una raíz de índice **impar**, como la cúbica, no tiene esta
  restricción: se puede sacar raíz cúbica de un número negativo sin
  problema.)
- **Logaritmo**: el argumento (lo de adentro) tiene que ser
  **estrictamente positivo** (mayor que 0, no puede ser 0).
  Ejemplo: f(x) = log(x + 1) → el dominio es x > −1.

## Notación de intervalos

El dominio se puede escribir como una desigualdad (x ≥ 2) o como un
intervalo: [2, +∞) — el corchete "[" indica que el 2 SÍ está incluido; si
fuera estrictamente mayor (x > 2), se usaría paréntesis: (2, +∞).

## Ejemplos resueltos

**f(x) = 1/(x − 5)**: el denominador se anula en x = 5 → dominio: todos
los reales excepto 5 (se escribe x ≠ 5).

**f(x) = √(x + 3)**: el radicando tiene que ser ≥ 0 → x + 3 ≥ 0 → x ≥ −3.

**f(x) = log(2x − 6)**: el argumento tiene que ser > 0 → 2x − 6 > 0 →
x > 3.

## Errores comunes

- Escribir "x ≥" cuando la restricción real es estricta (log necesita
  **mayor** estricto, no mayor o igual) — confundir la raíz (≥, incluye
  el borde) con el logaritmo (>, no incluye el borde).
- Olvidarse de resolver la desigualdad completa cuando el radicando o el
  argumento no es sólo "x", sino una expresión con x (como 2x − 6 > 0, no
  simplemente x > 0).
- Excluir el valor equivocado en un denominador con coeficiente (buscar
  dónde se anula ax + b, no simplemente x = b).
- Aplicar la restricción de raíz par a una raíz de índice impar (cúbica,
  quinta...), que no tiene ninguna restricción de signo.
