# Química — Presiones parciales: Ley de Dalton (teoria)

> Tema del MAPA: `QDALTON`. Depende de `../gases-ideales/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Texto** — una idea central y una fórmula, aplicación directa de
`PV=nRT` a mezclas.

---

## 1. La idea central

En una mezcla de gases (como el aire: N₂, O₂, CO₂...), cada gas se
comporta como si estuviera **solo** ocupando todo el volumen del
recipiente, a la misma temperatura. La **presión parcial** de un gas es
la presión que ejercería ese gas si estuviera solo.

## 2. La ley de Dalton

```
P_total = P₁ + P₂ + P₃ + ...
```

La presión total de una mezcla de gases es la **suma** de las
presiones parciales de cada componente.

## 3. Presión parcial y fracción molar

Cada presión parcial es proporcional a cuántos moles de ese gas hay
respecto al total:

```
P_i = X_i × P_total
```

donde `X_i` es la **fracción molar** del gas `i`:

```
X_i = n_i / n_total
```

(`n_i` = moles del gas `i`, `n_total` = moles totales de la mezcla).
La suma de todas las fracciones molares de una mezcla siempre da 1.

## 4. Cada gas "no sabe" que hay otros

Cada componente de la mezcla sigue su propia ecuación de gas ideal
(`P_i × V = n_i × R × T`, con el mismo V y T que la mezcla) —
independiente de los demás gases presentes. Por eso se puede calcular
la presión parcial de un gas conociendo sólo sus propios moles, sin
necesidad de saber nada de los otros componentes (salvo para la presión
*total*, que sí es la suma de todos).

## 5. Ejemplo resuelto

En un recipiente hay 2 mol de N₂ y 1 mol de O₂, con presión total de 3
atm. ¿Cuál es la presión parcial de cada uno?

```
n_total = 2 + 1 = 3 mol
X_N2 = 2/3        →  P_N2 = (2/3) × 3 = 2 atm
X_O2 = 1/3        →  P_O2 = (1/3) × 3 = 1 atm
```

Verificación: 2 + 1 = 3 atm = P_total ✓.
