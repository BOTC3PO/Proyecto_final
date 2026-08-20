# Matemática — Producto escalar (teoría)

> Tema del MAPA: `M10` (Tronco 3.b — Geometría analítica, trigonometría y
> vectores). Depende de `../suma-de-vectores-y-descomposicion/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (definición, fórmula con
ángulo, perpendicularidad, signo) mejor separadas en diapositivas.

---

## Qué es el producto escalar

El **producto escalar** (también llamado producto punto) es una
operación entre dos vectores que da como resultado un **número**, no
otro vector — de ahí el nombre "escalar". Se calcula multiplicando las
componentes correspondientes y sumando:

```
v · w = (vₓ × wₓ) + (v_y × w_y)
```

## La fórmula con el ángulo entre vectores

Existe una segunda forma de calcular el mismo resultado, usando los
módulos de ambos vectores y el ángulo `θ` entre ellos:

```
v · w = |v| × |w| × cos(θ)
```

Ambas fórmulas dan siempre el mismo número — la primera es más directa
para calcular a partir de componentes; la segunda conecta el producto
escalar con el ángulo entre los vectores.

## Producto escalar y perpendicularidad

De la segunda fórmula sale una propiedad clave: si `v · w = 0`, y
ninguno de los dos vectores es el vector nulo, entonces necesariamente
`cos(θ) = 0`, lo que significa `θ = 90°` — los vectores son
**perpendiculares** (u **ortogonales**). Es la misma idea del criterio
de perpendicularidad de pendientes
(`../rectas-paralelas-y-perpendiculares/`), ahora expresada con
vectores.

## El signo del producto escalar

El signo de `v · w` depende del ángulo entre los vectores:

- **Positivo**: si el ángulo entre ellos es **agudo** (menor a 90°) —
  `cos(θ)` es positivo.
- **Cero**: si son **perpendiculares** (90°).
- **Negativo**: si el ángulo entre ellos es **obtuso** (mayor a 90°) —
  `cos(θ)` es negativo.

## Es conmutativo

```
v · w = w · v
```

No importa el orden en que se multipliquen los dos vectores — a
diferencia de otras operaciones vectoriales (como el producto vectorial,
fuera del alcance de este módulo), el producto escalar da siempre el
mismo resultado sin importar el orden.

## El producto de un vector consigo mismo

```
v · v = |v|²
```

Tiene sentido con la fórmula de componentes: `vₓ×vₓ + v_y×v_y` es
exactamente lo que va dentro de la raíz cuadrada de la fórmula del
módulo — por eso el producto de un vector consigo mismo da el cuadrado
de su propio módulo.

## Para qué sirve

El producto escalar aparece en el cálculo del **trabajo** de una fuerza
en Física (`W = F × d × cos(θ)`, con `F` la fuerza, `d` el
desplazamiento, y `θ` el ángulo entre ambos): una fuerza que empuja
perpendicular al movimiento no hace ningún trabajo, aunque tenga
magnitud — y el producto escalar es exactamente la herramienta que
explica por qué.
