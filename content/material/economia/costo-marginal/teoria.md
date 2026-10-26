# Economía — Costo marginal (teoría)

> Tema del MAPA: `E16` (puente Álgebra → Economía). Depende de
> `../../matematica/derivada/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es, costos fijos vs
variables, forma creciente/decreciente, costo marginal vs promedio,
errores comunes).

---

## Qué es el costo marginal

El **costo marginal** es cuánto le cuesta a una empresa producir **una
unidad más**. Formalmente, es la derivada de la función de costo total
respecto a la cantidad producida:

```
Cmg(q) = C'(q)
```

Donde C(q) es el costo total de producir q unidades.

## Costos fijos y variables

El costo total suele tener dos partes: C(q) = costos fijos + costos
variables(q). Los costos fijos (alquiler, sueldos administrativos) **no
cambian** con la cantidad producida — su derivada es 0. Por eso el
costo marginal **sólo** refleja los costos variables: producir una
unidad más no cambia el alquiler, sólo los insumos/materiales/trabajo
extra que hacen falta para esa unidad adicional.

## Ejemplo resuelto

**C(q) = 2q² + 10q + 500** (500 es el costo fijo)

Cmg(q) = C'(q) = 4q + 10

Con q=20: Cmg(20) = 4×20+10 = 90 — producir la unidad 21 cuesta,
aproximadamente, 90 (el costo fijo de 500 no aparece en este cálculo).

## Costo marginal creciente o decreciente

Según la forma de C(q), el costo marginal puede subir o bajar a medida
que se produce más:

- Si Cmg crece con q: cada unidad adicional cuesta más que la anterior
  (rendimientos decrecientes — típico cuando la capacidad instalada se
  empieza a saturar).
- Si Cmg decrece con q: cada unidad adicional cuesta menos (economías de
  escala).

## Costo marginal vs. costo promedio

El **costo promedio** es Cme(q) = C(q)/q (cuánto cuesta, en promedio,
cada unidad). Son conceptos relacionados pero distintos: el costo
marginal mira la **próxima** unidad; el promedio mira **todas** las
unidades ya producidas repartidas entre sí. (La relación exacta entre
ambos — que se cruzan en el mínimo del costo promedio — es contenido de
microeconomía más avanzada, fuera del alcance de este módulo.)

## Costo marginal exacto vs. aproximado

Cmg(q)=C'(q) es una **aproximación instantánea** de "cuánto cuesta la
próxima unidad". El costo REAL y exacto de pasar de q a q+1 unidades es
C(q+1)−C(q) — para funciones suaves y valores de q grandes, la derivada
y esta diferencia dan resultados muy parecidos, pero no son
matemáticamente el mismo número.

## Errores comunes

- Confundir el costo marginal con el costo promedio (Cme=C/q) — son
  cálculos distintos.
- Pensar que el costo marginal incluye los costos fijos — no, se anulan
  al derivar.
- Tratar Cmg(q) como si fuera exactamente C(q+1)−C(q), en vez de una
  aproximación (derivada, límite de ese cociente).
- Olvidar que el costo marginal puede cambiar con q — no es
  necesariamente el mismo número para cualquier nivel de producción.
