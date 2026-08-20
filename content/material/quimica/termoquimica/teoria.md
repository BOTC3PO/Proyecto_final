# Química — Termoquímica (teoria)

> Tema del MAPA: `QO`. Depende de `../balanceo-ecuaciones/` y
> `./gases-ideales/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — 3 secciones (endotérmicas/exotérmicas, entalpía,
ley de Hess).

---

## 1. Reacciones endotérmicas y exotérmicas

- **Exotérmica**: libera calor al entorno (el sistema pierde energía).
  `ΔH < 0`. Ej.: combustión, la mayoría de las reacciones de neutralización.
- **Endotérmica**: absorbe calor del entorno (el sistema gana energía).
  `ΔH > 0`. Ej.: fotosíntesis, disolución de algunas sales (el vaso se
  siente frío).

`ΔH` (variación de entalpía) es la cantidad de calor intercambiado a
presión constante — el signo indica la **dirección** (si el sistema
libera o absorbe), no si "hay mucho o poco calor".

## 2. Entalpía de reacción

```
ΔH_reacción = ΔH_productos − ΔH_reactivos
```

Se puede calcular sumando las **entalpías de formación** (`ΔH_f`, la
energía para formar 1 mol de un compuesto desde sus elementos) de cada
sustancia, multiplicadas por su coeficiente en la ecuación balanceada:

```
ΔH_reacción = Σ(coef × ΔH_f de productos) − Σ(coef × ΔH_f de reactivos)
```

**Regla**: la entalpía de formación de un elemento en su estado más
estable (ej.: O₂ gas, C sólido/grafito) es **0** por definición — es el
"punto de referencia".

## 3. Ley de Hess

Si una reacción se puede escribir como la suma de 2 o más reacciones
intermedias, el `ΔH` total es la **suma** de los `ΔH` de esas
reacciones intermedias — no importa el camino, sólo el estado inicial y
el final (`ΔH` es una función de estado).

```
Reacción A→B→C  es igual a  ΔH(A→B) + ΔH(B→C)
```

Esto permite calcular el `ΔH` de una reacción que es difícil de medir
directamente, combinando reacciones más simples que sí se pueden medir.

## 4. Diagrama de energía

En una reacción **exotérmica**, los productos quedan en un nivel de
energía **más bajo** que los reactivos (la diferencia se liberó como
calor). En una **endotérmica**, los productos quedan **más arriba**
(absorbieron energía para llegar ahí). En ambos casos puede haber una
"joroba" intermedia (energía de activación) — pero esa parte es tema de
`../cinetica-reaccion/`, no de termoquímica.
