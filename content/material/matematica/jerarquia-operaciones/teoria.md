# Matemática — Jerarquía de operaciones: PEMDAS (teoría)

> Tema del MAPA: `N3B` (Tronco 1 — Numérico) — no es un nodo combinado como
> los anteriores, es un solo tema. Ver `../../lista-temas-plana.md`,
> `../../troncos.md` y `../dependencias.md` (depende de Suma, Resta,
> Multiplicación y División).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**, mismo criterio que los 6 temas anteriores: varias
secciones (por qué hace falta una regla, el orden, paréntesis, ejemplos
resueltos, errores comunes) se siguen mejor divididas. Acá además hay un
candidato fuerte a bloque **Función f(x)** o **LaTeX** (Herramienta
interactiva) para mostrar una expresión con cada paso resaltado en el
orden en que se resuelve — más claro que describirlo en prosa.

---

## Por qué hace falta una regla

Una expresión como 2 + 3 × 4 es ambigua sin una regla que diga en qué orden
resolverla: sumar primero da (2+3)×4 = 20; multiplicar primero da
2+(3×4) = 14. Sin un acuerdo universal sobre el orden, cada persona podría
leer la misma cuenta y llegar a un resultado distinto. PEMDAS es esa regla:
un orden fijo, el mismo en todo el mundo, que hace que 2 + 3 × 4 siempre
signifique 14.

## El orden (de mayor a menor prioridad)

1. **Paréntesis** — lo que está entre paréntesis se resuelve primero,
   siempre, sin importar qué operación sea.
2. **Potencias y raíces** — antes que multiplicar/dividir o sumar/restar.
3. **Multiplicación y División** — tienen la **misma** prioridad entre sí:
   se resuelven en el orden en que aparecen, de izquierda a derecha (no
   "primero toda la multiplicación y después toda la división").
4. **Suma y Resta** — también tienen la **misma** prioridad entre sí, y
   también se resuelven de izquierda a derecha.

Es el error más común: creer que la multiplicación siempre va antes que la
división, o la suma siempre antes que la resta. No es así — dentro del
mismo nivel, gana el que aparece primero leyendo de izquierda a derecha.
Ejemplo: 20 ÷ 4 × 5 no es 20 ÷ (4×5) = 1; es (20÷4)×5 = 25, porque la
división aparece primero.

## Los paréntesis cambian el resultado

Poner (o sacar) un paréntesis puede cambiar completamente el resultado de
una expresión, porque fuerza a resolver esa parte antes que el resto:
(2+3)×4 = 20 es un número distinto de 2+3×4 = 14, con exactamente los
mismos números y las mismas operaciones — sólo cambia el paréntesis.

## Ejemplo resuelto paso a paso

**8 + 2 × (6 − 3)²** →
1. Paréntesis: 6 − 3 = 3 → queda 8 + 2 × 3²
2. Potencia: 3² = 9 → queda 8 + 2 × 9
3. Multiplicación: 2 × 9 = 18 → queda 8 + 18
4. Suma: 8 + 18 = 26

## Errores comunes

- Resolver de izquierda a derecha ignorando la jerarquía (leer 2+3×4 como
  "sumo 2 y 3, después multiplico por 4" = 20, en vez de 14).
- Creer que la multiplicación siempre va antes que la división (o la suma
  antes que la resta), en vez de mirar cuál aparece primero.
- Olvidarse de aplicar una potencia al resultado completo de un paréntesis
  (ej.: (a+b)² no es a² + b² — hay que resolver el paréntesis primero, o
  usar la propiedad distributiva correcta del cuadrado de un binomio, que
  es tema de Álgebra más adelante).
