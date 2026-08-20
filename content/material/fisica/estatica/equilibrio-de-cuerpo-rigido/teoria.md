# Física — Estática: equilibrio de cuerpo rígido (teoría)

> Tema del MAPA: `EST1c` (Tronco 3.b). Depende de
> `../momento-de-una-fuerza/` y `../centro-de-gravedad/` (ver
> `../../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — combina lo ya visto en los dos módulos anteriores en una
sola idea (las dos condiciones de equilibrio), no necesita separarse
en varias diapositivas.

---

## Dos condiciones, no una sola

Un cuerpo rígido está en **equilibrio completo** cuando se cumplen
**a la vez** dos condiciones — ninguna de las dos alcanza por sí sola:

1. **Equilibrio traslacional**: la fuerza neta es cero.
   ```
   ΣF = 0
   ```
   (el mismo caso ya visto en `../../dinamica-fuerzas-concurrentes/`
   para el equilibrio de fuerzas concurrentes).
2. **Equilibrio rotacional**: el momento neto (respecto de **cualquier**
   punto elegido como referencia) es cero.
   ```
   ΣM = 0
   ```

**Por qué hacen falta las dos**: un cuerpo puede tener fuerza neta cero
y sin embargo estar girando cada vez más rápido, si el momento neto no
es cero — es el caso de un **par de fuerzas** (dos fuerzas de igual
magnitud, sentido opuesto, aplicadas en puntos distintos): se cancelan
como fuerza, pero generan un momento neto que no es cero. Al revés,
un cuerpo puede no estar girando (momento neto cero respecto de su
centro de gravedad) y sin embargo estar acelerando en línea recta, si
la fuerza neta no es cero.

## Cualquier punto sirve como referencia para el momento

La condición `ΣM = 0` vale para el momento calculado respecto de
**cualquier** punto — no hace falta que sea el centro de gravedad.
Conviene elegir como referencia un punto donde actúa una fuerza
**desconocida**: al calcular el momento respecto de ese punto, esa
fuerza desconocida queda multiplicada por brazo de palanca cero y
desaparece de la ecuación, dejando una sola incógnita para despejar.

## El caso clásico: la balanza (sube y baja)

Dos masas a los lados de un punto de apoyo están en equilibrio cuando
sus momentos (respecto del apoyo) se cancelan:

```
m₁ × d₁ = m₂ × d₂
```

(la aceleración de la gravedad `g` es común a ambos lados y se
cancela, así que alcanza con comparar masa × distancia).

## Un caso más completo: una viga apoyada en dos puntos

Una viga de longitud `L`, con su peso `W` actuando en su centro de
gravedad (a una distancia `x_cg` de un extremo), apoyada en sus dos
extremos, tiene dos reacciones de apoyo `R₁` y `R₂` (una en cada
extremo) que hay que encontrar:

- Por `ΣF = 0`: `R₁ + R₂ = W` (las dos reacciones sostienen entre las
  dos todo el peso).
- Por `ΣM = 0` (tomando momentos respecto de uno de los extremos, para
  que la reacción de ese lado no aparezca en la ecuación):
  `R₂ = W × x_cg / L`, y de ahí `R₁ = W − R₂`.

## Para qué sirve

Es el marco que explica por qué una escalera apoyada contra una pared
no se cae (mientras se cumplan las dos condiciones), por qué un puente
sostiene su propio peso repartido entre sus apoyos, y — el puente
directo hacia `../../maquinas-simples/` — por qué una palanca en
equilibrio relaciona la fuerza aplicada y la carga exactamente a través
de `ΣM=0`.
