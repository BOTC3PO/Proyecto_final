# Biología — Cruce dihíbrido (teoria)

> Tema del MAPA: `BDIHIB`. Depende de
> `../genetica-mendeliana-punnett/` (nivel 2, ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Texto** — extensión directa del cuadro de Punnett de 1 gen a 2 genes.

---

## 1. De 1 gen a 2 genes a la vez

El cruce **monohíbrido** (nivel 1) sigue **un solo gen** (ej.: color de
semilla). El cruce **dihíbrido** sigue **dos genes distintos** al mismo
tiempo (ej.: color de semilla Y forma de semilla), y pregunta cómo se
combinan sus herencias.

## 2. Ley de la segregación independiente

Mendel encontró que, si los dos genes están en cromosomas distintos (o
muy separados en el mismo cromosoma), **se heredan de forma
independiente** uno del otro — que un descendiente reciba el alelo
dominante del gen 1 no influye en qué alelo recibe del gen 2. Esto
permite tratar cada gen como un sorteo aparte y **combinar** las
probabilidades.

## 3. Cuadro de Punnett dihíbrido: 4×4

Para un cruce `AaBb × AaBb`, cada progenitor produce **4 tipos de
gametos** posibles (combinando los 2 alelos de cada gen):
`AB, Ab, aB, ab`. El cuadro tiene **16 casillas** (4×4).

## 4. La proporción clásica 9:3:3:1

Para dos genes con dominancia simple, cruzando dos dobles
heterocigotas (`AaBb × AaBb`), la proporción fenotípica en la
descendencia es siempre:

```
9 : 3 : 3 : 1
```

- **9/16**: dominante en ambos genes (ej.: semilla lisa Y amarilla)
- **3/16**: dominante en el gen 1, recesivo en el gen 2
- **3/16**: recesivo en el gen 1, dominante en el gen 2
- **1/16**: recesivo en ambos genes

## 5. Atajo: multiplicar en vez de armar el cuadro completo

Como los genes son independientes, no hace falta armar las 16
casillas — se puede resolver cada gen por separado con el cruce
monohíbrido (3:1 cada uno) y **multiplicar** las probabilidades:

```
P(fenotipo dominante en gen 1) × P(fenotipo dominante en gen 2)
= 3/4 × 3/4 = 9/16
```

Este atajo (multiplicar probabilidades de eventos independientes) es
la misma idea de `../../matematica/probabilidad-compuesta/`, ya vista
en `../genetica-mendeliana-punnett/` (nivel 1) para el caso de 1 gen.
