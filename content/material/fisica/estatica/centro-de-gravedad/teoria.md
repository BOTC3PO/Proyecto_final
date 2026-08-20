# Física — Estática: centro de gravedad (teoría)

> Tema del MAPA: `EST1b` (Tronco 3.b). Depende de
> `../../../matematica/suma-de-vectores-y-descomposicion/` (ver
> `../../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola idea central (qué es y cómo se calcula), no
necesita separarse en varias diapositivas.

---

## Un solo punto que representa todo el peso

Un cuerpo real tiene su masa repartida en todo su volumen, no
concentrada en un punto. Pero para calcular momentos y equilibrio (ver
`../equilibrio-de-cuerpo-rigido/`), conviene poder tratar el peso total
como si actuara en **un solo punto**: el **centro de gravedad**.

## Cuerpos simples: coincide con el centro geométrico

Si un cuerpo es **uniforme y simétrico** (una esfera maciza, un cubo,
una regla homogénea), el centro de gravedad coincide exactamente con
el centro geométrico de la figura.

## Cuerpos compuestos: un promedio ponderado por masa

Si un cuerpo está formado por varias partes (o hay varias masas
puntuales conectadas), el centro de gravedad es un **promedio
ponderado** de las posiciones de cada parte, usando la masa de cada
una como "peso" del promedio:

```
x_cg = (m₁×x₁ + m₂×x₂) / (m₁ + m₂)
```

(y lo mismo para el eje `y` si el problema es en dos dimensiones). Si
las masas son iguales, el centro de gravedad queda exactamente en el
punto medio; si una masa es mayor, el centro de gravedad se corre hacia
esa masa.

## No siempre está "dentro" del material

El centro de gravedad es un punto matemático, no necesita estar sobre
material sólido. El ejemplo clásico: una rosquilla (o una dona):
su centro de gravedad está en el agujero del medio, en el aire —
porque es el promedio de toda la masa distribuida alrededor, no un
punto que tenga que "tocar" el objeto.

## Cómo se encuentra experimentalmente

Se puede hallar el centro de gravedad de un objeto irregular
suspendiéndolo libremente (colgado) desde un punto cualquiera de su
borde y trazando la vertical hacia abajo (la que marca la plomada);
repitiendo desde un segundo punto distinto, la segunda vertical se
cruza con la primera exactamente en el centro de gravedad.

## Para qué sirve: estabilidad

Un cuerpo apoyado se **vuelca** cuando su centro de gravedad queda
fuera de la base de apoyo (la zona delimitada por los puntos de
contacto con el suelo). Por eso:

- Cuanto más **baja** esté el centro de gravedad, más estable es el
  objeto (los autos de carrera son bajos a propósito).
- Cuanto más **ancha** la base de apoyo, más margen hay antes de que
  el centro de gravedad se salga de ella (por qué una grúa usa
  contrapesos, o por qué es más fácil hacer pie en una postura con las
  piernas separadas).

Nota aparte, para quien siga leyendo sobre el tema: en un campo
gravitatorio perfectamente uniforme (como el que se asume siempre en
la superficie de la Tierra, para objetos de tamaño cotidiano), el
centro de gravedad y el **centro de masa** son el mismo punto — la
distinción sólo importa en campos gravitatorios no uniformes (objetos
astronómicos enormes), fuera del alcance de este módulo.
