# Química — pH y pOH (teoría, nivel 2)

> Continúa `teoria.md` (nivel 1, nodo `E13`, foco fórmulas y escala
> 0-14 vía logaritmos). Este nivel 2 corresponde a la profundidad de
> `QN` dentro del Tronco 7 completo — ácidos/bases fuertes vs. débiles,
> y la relación directa con la concentración molar de H⁺.

## Tipo de teoría (si esto se carga al sistema)

**Texto** — profundiza el mismo cálculo de pH/pOH del nivel 1 con el
concepto de fuerza de un ácido/base.

---

## 1. La fórmula de fondo (repaso rápido del nivel 1)

```
pH = -log10([H⁺])       pOH = -log10([OH⁻])       pH + pOH = 14
```

## 2. Ácidos y bases FUERTES: se disocian 100%

Un ácido o base **fuerte** se disocia **completamente** en agua — toda
la concentración inicial pasa a ser `[H⁺]` (o `[OH⁻]`) directo:

```
HCl (ácido fuerte) → H⁺ + Cl⁻     (100% disociado)
```

Si la concentración inicial de HCl es 0,01 M, entonces `[H⁺] = 0,01 M`
directo — no hace falta ningún cálculo de equilibrio.

**Ácidos fuertes comunes**: HCl, HNO₃, H₂SO₄ (en su primera disociación).
**Bases fuertes comunes**: NaOH, KOH.

## 3. Ácidos y bases DÉBILES: se disocian parcialmente

Un ácido o base **débil** sólo se disocia **una fracción** de lo que
hay disuelto — el resto queda como molécula sin disociar, en un
equilibrio (con su propia constante `Ka`, fuera del alcance de este
nivel):

```
CH₃COOH (ácido acético, débil) ⇌ CH₃COO⁻ + H⁺     (disociación parcial)
```

Por eso, dos soluciones de la **misma concentración inicial** pero un
ácido fuerte y otro débil, tienen **pH distinto**: la fuerte tiene más
`[H⁺]` real disuelto, así que su pH es más bajo (más ácido) que el de
la débil, aunque arrancaron con la misma concentración de partida.

**Ácidos débiles comunes**: ácido acético (vinagre), ácido cítrico.
**Bases débiles comunes**: amoníaco (NH₃).

## 4. Relación directa concentración molar de H⁺ ↔ pH

Ya que `pH = -log10([H⁺])`, despejando:

```
[H⁺] = 10^(-pH)
```

Esto permite ir en cualquier dirección: de concentración a pH, o de pH
a concentración — siempre que se trate de un **ácido fuerte** (para uno
débil, la concentración inicial NO es directamente `[H⁺]`, por la
disociación parcial).
