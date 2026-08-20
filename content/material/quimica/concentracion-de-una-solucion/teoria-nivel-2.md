# Química — Concentración de una solución (teoría, nivel 2)

> Continúa `teoria.md` (nivel 1, nodo `Q3`, foco "cantidad por unidad de
> volumen" como aplicación de volumen y capacidad). Este nivel 2
> corresponde a la profundidad de `QM` dentro del Tronco 7 completo —
> molaridad/molalidad/normalidad con mol, y preparación de soluciones a
> partir de soluto sólido.

## Tipo de teoría (si esto se carga al sistema)

**Texto** — 3 unidades de concentración y un procedimiento, se apoya en
`../mol-masa-molar/`.

---

## 1. Molaridad (M) — la más usada

```
M = moles de soluto / litros de solución
```

Ojo: es litros de **solución** (soluto + solvente juntos), no litros de
solvente puro agregado.

## 2. Molalidad (m) — no depende del volumen

```
m = moles de soluto / kilogramos de solvente
```

Se usa cuando el volumen puede cambiar con la temperatura (dilatación)
y hace falta una medida que no varíe: la masa del solvente no cambia
con la temperatura, el volumen sí. Por eso las propiedades coligativas
(ver `../propiedades-coligativas/`) suelen usar molalidad, no molaridad.

## 3. Normalidad (N) — equivalentes, no moles

```
N = equivalentes de soluto / litros de solución
```

Un **equivalente** depende de cuántas "unidades reactivas" aporta cada
mol (ej.: en ácido-base, cuántos H⁺ u OH⁻ por mol; en redox, cuántos
electrones transferidos). Para un ácido monoprótico como HCl,
`N = M` (1 equivalente por mol); para uno diprótico como H₂SO₄, `N =
2×M` (2 equivalentes por mol).

## 4. Preparar una solución de molaridad conocida (procedimiento)

Dado que se quiere preparar `V` litros de una solución `M` molar de un
soluto sólido con masa molar `Mm`:

1. Calcular los moles necesarios: `n = M × V`
2. Calcular la masa de soluto sólido: `m = n × Mm` (ver
   `../mol-masa-molar/`)
3. Pesar esa masa de soluto sólido.
4. Disolverlo en **menos** agua que el volumen final (nunca agregar el
   volumen total de agua de una — el soluto ocupa lugar).
5. Completar con agua hasta el volumen final `V` (en un matraz aforado,
   hasta la marca de calibración).

**Error común**: agregar `V` litros de agua al soluto, en vez de
disolver y luego completar hasta `V` — eso da un volumen final mayor a
`V`, y la concentración real queda más diluida de lo pedido.
