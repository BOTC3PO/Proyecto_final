# Química — Balanceo de ecuaciones (teoría, nivel 2)

> Continúa `teoria.md` (nivel 1, nodo `Q1`, foco método algebraico
> puente Álgebra→Química). Este nivel 2 corresponde a la profundidad
> de `QI` dentro del Tronco 7 completo — casos con 3+ elementos que
> necesitan mínimo común múltiplo, y la distinción ecuación
> molecular/iónica.

## Tipo de teoría (si esto se carga al sistema)

**Texto** — profundiza el mismo método ya construido en nivel 1, no
repite lo básico.

---

## 1. Casos con 3 o más elementos: usar el MCM

Cuando el tanteo simple no alcanza (ecuaciones con varios elementos que
aparecen en más de una fórmula), conviene fijarse en el elemento que
aparece en **menos** fórmulas primero, y usar el **mínimo común
múltiplo** de sus subíndices como punto de partida.

**Ejemplo**: `C₃H₈ + O₂ → CO₂ + H₂O` (combustión del propano)

1. Balancear C primero (aparece en 2 fórmulas: C₃H₈ y CO₂): 3 átomos de
   C en el reactivo → poner 3 delante del CO₂.
2. Balancear H (aparece en C₃H₈ y H₂O): 8 átomos de H → poner 4 delante
   del H₂O (4×2=8).
3. Contar O en productos: 3 CO₂ (6 O) + 4 H₂O (4 O) = 10 O. Como el O₂
   viene de a pares, poner 5 delante de O₂ (5×2=10).

**Ecuación balanceada: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O**

El oxígeno se deja para el final porque aparece en más de un producto —
conviene balancear primero los elementos "más restringidos".

## 2. Ecuación molecular vs. ecuación iónica

- **Ecuación molecular**: escribe las fórmulas completas, como si nada
  se disociara (`AgNO₃ + NaCl → AgCl + NaNO₃`).
- **Ecuación iónica completa**: separa en iones todo lo que es soluble
  y se disocia en agua (`Ag⁺ + NO₃⁻ + Na⁺ + Cl⁻ → AgCl(s) + Na⁺ + NO₃⁻`).
- **Ecuación iónica neta**: elimina los **iones espectadores** (los que
  aparecen igual de los dos lados, sin participar realmente) —
  `Ag⁺ + Cl⁻ → AgCl(s)`.

Los iones espectadores (`Na⁺` y `NO₃⁻` en el ejemplo) están ahí, pero no
hacen nada — el balanceo de coeficientes se aplica igual en cualquiera
de las 3 versiones, sólo cambia qué tan "desglosada" está la ecuación.

## 3. Conexión con tipos de reacción

Reconocer el **tipo** de reacción (ver `../tipos-reacciones-quimicas/`)
antes de balancear ayuda a anticipar la forma de la ecuación: una
síntesis siempre da 1 producto, una descomposición siempre parte de 1
reactivo — eso ya reduce las formas posibles de la ecuación balanceada
antes de tantear coeficientes a ciegas.
