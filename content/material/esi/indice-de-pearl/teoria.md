# ESI — Eficacia de un método anticonceptivo: índice de Pearl (teoria)

> Tema del MAPA: `ES1` (Tronco 4.b). Depende de
> `../../matematica/probabilidad-simple/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola fórmula (una tasa de fallo) con la distinción
uso perfecto/típico, no necesita varias diapositivas.

---

## Qué mide el índice de Pearl

El **índice de Pearl** mide qué tan efectivo es un método
anticonceptivo, contando la cantidad de **embarazos no planificados**
que ocurren por cada **100 mujeres que usan ese método durante 1 año**
("100 mujeres-año" de uso):

```
Índice de Pearl = (embarazos no planificados / meses totales de uso) × 1200
```

(el `×1200` convierte meses de exposición a la unidad estándar de
"100 mujeres-año"). **Cuanto más BAJO el índice, más eficaz el
método** — un índice de Pearl de 1 significa, aproximadamente, que 1
de cada 100 mujeres que usan ese método durante un año queda
embarazada sin planearlo.

## Uso perfecto vs. uso típico

Casi todos los métodos anticonceptivos reportan **dos** índices de
Pearl distintos:

- **Uso perfecto**: el método se usa exactamente como indica el
  fabricante o profesional de salud, sin ningún error — el índice más
  bajo posible para ese método.
- **Uso típico**: el índice real observado en la población, que
  incluye los errores humanos normales (olvidos, uso incorrecto,
  interrupciones) — casi siempre **más alto** que el de uso perfecto.

La diferencia entre ambos números es, en sí misma, información
valiosa: un método con una brecha grande entre uso perfecto y típico
depende mucho de que la persona lo use sin ningún error, mientras que
uno con poca diferencia es más "a prueba de errores" (por ejemplo, los
métodos que no dependen de recordar tomar o colocar algo todos los
días suelen tener una brecha más chica).

*Nota*: este módulo no documenta el índice de Pearl de ningún método
anticonceptivo en particular — esos números cambian según el estudio,
la población y el año, y consultarlos con una fuente médica
actualizada es lo correcto antes de una decisión real. Lo que importa
acá es entender **la estructura del cálculo** y **cómo comparar** dos
índices entre sí.

## Relación con probabilidad simple

El índice de Pearl es, en el fondo, una probabilidad expresada como
tasa por 100: dividiendo por 100, `../../matematica/probabilidad-simple/`
da directo la probabilidad aproximada de embarazo en un año de uso:

```
P(embarazo en 1 año) ≈ índice de Pearl / 100
P(NO embarazo en 1 año) ≈ 1 − (índice de Pearl / 100)
```

## Para qué sirve

Permite comparar objetivamente la eficacia de distintos métodos
anticonceptivos con un mismo número estandarizado, y entender que
"eficacia" en la práctica real (uso típico) casi siempre es más baja
que la eficacia teórica (uso perfecto) — la brecha entre ambas es,
justamente, el margen de error humano que cualquier decisión de salud
reproductiva debería tener en cuenta.
