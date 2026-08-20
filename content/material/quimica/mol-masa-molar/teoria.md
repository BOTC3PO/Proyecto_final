# Química — Mol y masa molar (teoria)

> Tema del MAPA: `QJ`. Depende de `./nomenclatura-compuestos/` y
> `../balanceo-ecuaciones/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Texto** — un concepto central (el mol) y una fórmula de conversión;
se apoya en fórmulas químicas ya sabidas leer.

---

## 1. El problema que resuelve el mol

Los átomos son demasiado chicos y demasiado numerosos para contarlos de
a uno en un laboratorio. El **mol** es una unidad de **cantidad** (como
"una docena" = 12, pero mucho más grande) que permite trabajar con
cantidades de laboratorio (gramos) en vez de contar átomo por átomo.

## 2. El número de Avogadro

```
1 mol = 6,022 × 10²³ partículas (átomos, moléculas, iones...)
```

Esta constante (`N_A`, ya precargada en VBLang) es el "tamaño de la
docena" para química — no cambia con la sustancia: 1 mol de cualquier
cosa siempre son 6,022×10²³ unidades de esa cosa.

## 3. Masa molar

La **masa molar (M)** es la masa de 1 mol de una sustancia, en
**gramos por mol (g/mol)**. Numéricamente coincide con la masa atómica
(o molecular) de la tabla periódica, sólo que cambiando de unidad
(uma → g/mol).

- Masa molar de un **elemento** = su masa atómica de la tabla periódica.
  Ej.: Na → 23 g/mol.
- Masa molar de un **compuesto** = suma de las masas atómicas de todos
  los átomos de su fórmula.

**Ejemplo — H₂O:**
```
2×(masa de H) + 1×(masa de O) = 2×1 + 16 = 18 g/mol
```

## 4. La fórmula que conecta todo

```
n = m / M        (moles = masa en gramos / masa molar)
m = n × M        (masa = moles × masa molar)
N = n × N_A       (número de partículas = moles × número de Avogadro)
```

Con `n` en moles, `m` en gramos, `M` en g/mol, `N` en partículas.

## 5. Ejemplo resuelto

¿Cuántos moles hay en 36 g de agua (M = 18 g/mol)?

```
n = m / M = 36 / 18 = 2 mol
```

¿Y cuántas moléculas de agua son esas?

```
N = n × N_A = 2 × 6,022×10²³ = 1,2044×10²⁴ moléculas
```
