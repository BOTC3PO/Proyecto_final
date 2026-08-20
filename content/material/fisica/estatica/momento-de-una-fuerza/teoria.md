# Física — Estática: momento de una fuerza (teoría)

> Tema del MAPA: `EST1a` (Tronco 3.b). Depende de
> `../../../matematica/suma-de-vectores-y-descomposicion/` (ver
> `../../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola idea central (la fórmula del momento y su
brazo de palanca), no necesita separarse en varias diapositivas.

---

## Girar, no sólo desplazar

Hasta ahora (`../../dinamica-fuerzas-concurrentes/`) las fuerzas se
sumaban para ver si un objeto se desplazaba o quedaba quieto. Pero una
fuerza también puede hacer **girar** un cuerpo alrededor de un punto o
eje — eso es lo que mide el **momento de una fuerza** (también llamado
**torque**).

## La fórmula

```
M = F × d
```

- `F`: la magnitud de la fuerza aplicada.
- `d`: el **brazo de palanca** — la distancia **perpendicular** desde
  el eje (o punto) de giro hasta la línea de acción de la fuerza (no
  la distancia hasta el punto donde se aplica la fuerza, sino hasta la
  recta imaginaria que la fuerza recorrería).
- `M`: el momento resultante, en Newton-metro (N·m).

Si la fuerza no es perpendicular al brazo, sólo la componente
perpendicular genera momento: `M = F × d × sen(θ)`, con `θ` el ángulo
entre la fuerza y el brazo. En la mayoría de los casos de introducción
se trabaja directamente con fuerzas perpendiculares (`θ=90°`,
`sen(90°)=1`), donde la fórmula simple `M=F×d` ya alcanza.

## El brazo de palanca importa tanto como la fuerza

Con la misma fuerza, un brazo de palanca más largo produce **más**
momento. Es la razón física de por qué:

- Abrir una puerta empujando cerca de la bisagra cuesta mucho más
  esfuerzo que empujar en el borde, lejos de la bisagra (mismo giro,
  fuerza necesaria distinta).
- Una llave de tuercas con mango largo afloja un tornillo con menos
  fuerza que una con mango corto.
- Si la fuerza se aplica **exactamente sobre** el eje de giro (`d=0`),
  no genera ningún momento, sin importar cuán grande sea esa fuerza.

## El sentido de giro

Un momento puede hacer girar en sentido **horario** o
**antihorario**. Por convención habitual, el sentido antihorario se
toma como positivo y el horario como negativo — así, para saber el
efecto neto de varias fuerzas girando un mismo cuerpo, se suman sus
momentos con signo (los que giran en sentidos opuestos se restan).

## El momento depende del punto de referencia

El mismo par fuerza-brazo puede dar momentos distintos según qué punto
se elija como eje de giro — el momento **siempre se calcula respecto
de un punto**, no es una propiedad de la fuerza sola.

## Para qué sirve

Es la base de `../equilibrio-de-cuerpo-rigido/` (que combina momento
neto cero con fuerza neta cero) y de `../../maquinas-simples/` (una
palanca funciona exactamente por este principio: cambiar la relación
entre fuerza aplicada y brazo de palanca).
