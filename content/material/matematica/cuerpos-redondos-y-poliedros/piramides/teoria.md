# Matemática — Pirámides (teoría)

> Tema del MAPA: `M4Bb` (Tronco 3.a — Geometría: de la forma a la medida,
> dentro de "Cuerpos redondos y poliedros"). Depende de
> `../../volumen-y-capacidad/` (ver `../../dependencias.md`), en paralelo
> a `../prismas/` (el MAPA no marca dependencia entre pirámides y
> prismas).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (qué es, elementos, fórmula,
relación con el prisma) mejor separadas en diapositivas.

---

## Qué es una pirámide

Una **pirámide** es un poliedro formado por **una sola base** poligonal y
tantas caras laterales **triangulares** como lados tiene la base, todas
las cuales se juntan en un único punto llamado **vértice** o **ápice**. A
diferencia del prisma (que tiene dos bases), la pirámide sólo tiene una:
por eso "se achica" hasta terminar en una punta, en vez de mantener la
misma sección de punta a punta.

## Elementos de una pirámide

- **Base**: el polígono de abajo (puede ser cualquier forma: triángulo,
  cuadrado, pentágono...).
- **Caras laterales**: triángulos que conectan cada lado de la base con
  el vértice.
- **Vértice (o ápice)**: el punto donde se juntan todas las caras
  laterales.
- **Altura**: la distancia perpendicular desde el vértice hasta el plano
  de la base (no es lo mismo que la altura de una cara lateral, llamada
  "apotema de la pirámide" o altura lateral).

## Cómo se nombra una pirámide

Igual que el prisma: según la forma de su base. **Pirámide triangular**
(también llamada tetraedro, si además es regular), **pirámide cuadrangular**
(base cuadrada — las pirámides de Egipto son de este tipo), **pirámide
pentagonal**, etc.

## Fórmula del volumen

**V = (Área de la base × altura) ÷ 3**

Es exactamente **un tercio** del volumen de un prisma con la misma base y
la misma altura (ver `../prismas/`). Esta relación (1/3) es válida para
CUALQUIER forma de base, no sólo para bases simples — es uno de esos
resultados que conviene memorizar como dato, aunque la demostración
completa (con cálculo integral) queda para más adelante en la currícula.

## Ejemplo aplicado

Un prisma y una pirámide con la misma base cuadrada de 6 cm de lado y la
misma altura de 9 cm tienen: prisma → 6×6×9 = 324 cm³; pirámide →
324 ÷ 3 = 108 cm³. La pirámide "ocupa" un tercio del espacio del prisma
que la contendría.

## Cantidad de caras, aristas y vértices

Para una pirámide cuya base tiene **n** lados:

- Caras: n caras laterales + 1 base = **n + 1**
- Vértices: n vértices de la base + 1 vértice superior = **n + 1**
- Aristas: n aristas de la base + n aristas laterales = **2n**

También cumplen la fórmula de Euler: (n+1) − 2n + (n+1) = 2.
