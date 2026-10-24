# Química — Estequiometría (teoría, nivel 2)

> Continúa `teoria.md` (nivel 1, nodo `QKP`, foco análisis dimensional
> puro/factor-label). Este nivel 2 corresponde a la profundidad de `QK`
> dentro del Tronco 7 completo — relaciones mol-mol/mol-masa/masa-masa
> leídas directo de la ecuación balanceada, como puente hacia
> `../reactivo-limitante-rendimiento/`.

## Tipo de teoría (si esto se carga al sistema)

**Texto** — aplica el análisis dimensional del nivel 1 al caso
específico de una ecuación química balanceada.

---

## 1. Los coeficientes son la "receta" en moles

En una ecuación balanceada, los coeficientes dicen la proporción exacta
en moles en la que reaccionan las sustancias — es literalmente una
receta de cocina, pero con moles en vez de tazas:

```
2 H₂ + O₂ → 2 H₂O
```

Esto dice: "2 moles de H₂ reaccionan con 1 mol de O₂ para dar 2 moles de
H₂O" — nunca en otra proporción (si sobra algo, es porque no estaba en
esa proporción exacta, ver `../reactivo-limitante-rendimiento/`).

## 2. Relación mol-mol

Para pasar de moles de una sustancia a moles de otra, se usa la razón
entre sus coeficientes como factor de conversión:

```
moles de B = moles de A × (coeficiente de B / coeficiente de A)
```

**Ejemplo**: ¿cuántos moles de H₂O se forman con 5 moles de H₂?
`5 mol H₂ × (2 mol H₂O / 2 mol H₂) = 5 mol H₂O`.

## 3. Relación mol-masa y masa-masa (cadena completa)

El camino típico para ir de gramos de una sustancia a gramos de otra
encadena 3 pasos (cada uno ya visto por separado):

```
gramos de A  →(÷ masa molar de A)→  moles de A  →(× razón de coeficientes)→  moles de B  →(× masa molar de B)→  gramos de B
```

**Ejemplo**: ¿cuántos gramos de H₂O se forman a partir de 10 g de H₂
(masa molar H₂=2, H₂O=18)?

1. `10 g / 2 g/mol = 5 mol de H₂`
2. `5 mol H₂ × (2/2) = 5 mol de H₂O`
3. `5 mol × 18 g/mol = 90 g de H₂O`

## 4. Por qué siempre hay que pasar por moles

Los gramos no se pueden convertir entre sustancias directo (1 gramo de
H₂ no "vale" lo mismo que 1 gramo de H₂O — son cosas distintas) — la
única unidad común entre dos sustancias distintas en una ecuación
balanceada son los **moles**, porque los coeficientes están en moles.
Por eso toda conversión masa→masa pasa obligatoriamente por moles en el
medio, nunca directo de gramo a gramo.
