# Contraste de temas de diapositiva — auditoría WCAG AA (Fase D.4-bis)

Auditoría de los temas de slide "Crema/Marino" del `THEMES` de
`apps/web/src/components/modulos/TheorySlideEditor.tsx`.

- **Crema** = tema `warm` (label "Cálido"), fondo `bg-amber-50` (#fffbeb).
- **Marino** = tema `ocean` (label "Océano"), fondo `bg-sky-950` (#082f49).

Umbrales WCAG 2.1 AA: **4.5:1** texto normal · **3:1** texto grande / componentes UI.
Ratios calculados con luminancia relativa (sRGB) sobre los hexes reales de Tailwind.

## Tema `warm` (Crema) — fondo amber-50 (L≈0.963)

| Elemento | Color texto | Fondo | Ratio | Umbral | Pasa |
|---|---|---|---|---|---|
| slide / heading | stone-900 `#1c1917` | amber-50 | **16.9:1** | 4.5 | ✓ |
| subtitle (text-xl) | amber-700 `#b45309` | amber-50 | **4.84:1** | 4.5 | ✓ |
| body | stone-700 `#44403c` | amber-50 | **9.9:1** | 4.5 | ✓ |
| code | stone-800 `#292524` | stone-100 `#f5f5f4` | **13.9:1** | 4.5 | ✓ |
| navButton | stone-800 | amber-200 `#fde68a` | **12.2:1** | 3 | ✓ |

## Tema `ocean` (Marino) — fondo sky-950 (L≈0.026)

| Elemento | Color texto | Fondo | Ratio | Umbral | Pasa |
|---|---|---|---|---|---|
| slide / heading | sky-50 `#f0f9ff` | sky-950 | **13.0:1** | 4.5 | ✓ |
| subtitle (text-xl) | sky-300 `#7dd3fc` | sky-950 | **8.3:1** | 4.5 | ✓ |
| body | sky-100 `#e0f2fe` | sky-950 | **12.1:1** | 4.5 | ✓ |
| code | emerald-400 `#34d399` | sky-900 `#0c4a6e` | **4.92:1** | 4.5 | ✓ |
| navButton | sky-50 | sky-800 `#075985` | **7.1:1** | 3 | ✓ |

## Indicadores de diapositiva (dots)

Los dots de navegación usan color **+ tamaño** (`scale-125` en el activo) para
señalar el estado, así que el estado no depende solo del color (WCAG 1.4.1).

| Tema | Dot activo vs fondo | Dot inactivo vs fondo |
|---|---|---|
| warm | stone-700 / amber-50 → **9.9:1** ✓ | amber-300 / amber-50 → 1.4:1 |
| ocean | sky-200 / sky-950 → **10.5:1** ✓ | sky-700 / sky-950 → 2.3:1 |

Los dots **inactivos** quedan por debajo de 3:1 de forma intencional (mismo
patrón en los 5 temas, incluidos minimal/dark), pero el indicador relevante —el
dot **activo**— pasa con holgura y el estado también se distingue por tamaño.
No se modifican para no alterar la identidad visual ni romper la consistencia
entre temas.

## Conclusión

**Todo el texto de `warm` y `ocean` cumple WCAG AA.** Los dos casos más justos
(`warm.subtitle` 4.84:1 y `ocean.code` 4.92:1) están por encima de 4.5:1.
**No se requieren cambios de color.**
