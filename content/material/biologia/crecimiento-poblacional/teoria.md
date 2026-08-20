# Biología — Crecimiento poblacional (teoría)

> Tema del MAPA: `B1` (puente Álgebra → Biología). Depende de
> `../../matematica/familias-exponencial-logaritmica/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (modelo exponencial,
tasa de crecimiento, capacidad de carga, crecimiento logístico, errores
comunes).

---

## El modelo exponencial de crecimiento poblacional

Una población (bacterias, animales, personas) que crece a una tasa
constante por período sigue el mismo modelo ya visto en
`../../matematica/familias-exponencial-logaritmica/`:

```
P(t) = P₀ · r^t
```

- **P₀**: población inicial.
- **r**: factor de crecimiento por período (si crece 5% por período,
  r=1.05; si se duplica cada período, r=2).
- **t**: cantidad de períodos transcurridos.

## Tasa de crecimiento vs. cantidad de individuos

Es un error común confundir la **tasa** (un porcentaje, o un factor
multiplicativo) con la **cantidad** de individuos que se suman. Una
población de 1.000.000 que crece 2% suma 20.000 individuos; una de 100
que crece el mismo 2% suma sólo 2 — la tasa es la misma, la cantidad
añadida no.

## De dónde sale la tasa de crecimiento

La tasa neta de crecimiento resulta de combinar:

```
tasa de crecimiento = tasa de natalidad − tasa de mortalidad (± migración)
```

Si nacen más individuos de los que mueren (y no hay migración neta), la
población crece; si mueren más de los que nacen, decrece.

## El límite real: capacidad de carga

El modelo exponencial simple **no tiene techo** — predice un
crecimiento sin límite, algo que no pasa en la naturaleza. En la
realidad, los recursos (alimento, espacio, agua) son limitados, y la
población tiende a estabilizarse cerca de la **capacidad de carga** del
ambiente (K): la cantidad máxima de individuos que ese ambiente puede
sostener de forma estable.

## Crecimiento logístico (la versión más realista)

Cuando la población se acerca a K, la tasa de crecimiento se frena — la
curva deja de ser una exponencial pura y se aplana, formando una "S"
(curva logística). Lejos de K, el crecimiento se parece mucho al
modelo exponencial; cerca de K, casi no crece más. (El desarrollo
matemático completo del modelo logístico queda fuera de este módulo —
acá alcanza con entender el concepto y por qué hace falta.)

## Factores limitantes

Lo que frena el crecimiento cerca de la capacidad de carga: escasez de
alimento o espacio, acumulación de desechos, aumento de depredadores o
enfermedades, competencia dentro de la misma especie.

## Ejemplo resuelto

**Un cultivo de bacterias empieza con 500 y se duplica cada hora.
¿Cuántas hay después de 4 horas?**

P(4) = 500×2⁴ = 500×16 = 8.000 bacterias.

**¿Podría este crecimiento seguir así para siempre?** No — en algún
momento el cultivo se queda sin nutrientes o espacio, y la curva se
aplana (capacidad de carga del recipiente).

## Errores comunes

- Confundir la tasa de crecimiento (un porcentaje) con la cantidad de
  individuos que se suman cada período.
- Asumir que el modelo exponencial simple es válido indefinidamente —
  sirve como aproximación de corto plazo, no como predicción a largo
  plazo.
- Pensar que la capacidad de carga es un número fijo universal — depende
  del ambiente específico y puede cambiar (por ejemplo, si cambian los
  recursos disponibles).
- Olvidar que la tasa neta de crecimiento resulta de RESTAR mortalidad a
  natalidad, no sólo mirar la natalidad sola.
