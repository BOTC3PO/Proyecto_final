# Accesibilidad de editores — estado (Fase 5.4)

> 5.4 aplica "solo si la Fase D migró los editores a componentes nuevos".
> Estado al cierre de Fase D + 5.

## Migrados al sistema de diseño D.2

- **Editor VBLang** (`components/vblang/*`, `pages/PlantillaEditor.tsx`) — Fase D.3.1.
  - Tabs Código/Formulario con patrón ARIA (roving tabindex, flechas) vía `Tabs` de D.2.
  - Foco visible (`focus-visible:ring`) en todos los botones (D.2 `Button`).
  - Estado de guardado y "Sin errores · N líneas" con `aria-live`.
  - **Navegación por teclado: completa.** ✓

## Con a11y propia (no migrados a D.2 — "omitir hasta D")

Estos editores no se reescribieron sobre los componentes D.2, pero ya traían
patrones de a11y de fases previas; se mantienen:

- **Editor de mapa** (`MapaEditorFull.tsx`): toolbar con `aria-pressed` por
  herramienta + atajos `kbd`; capas con `aria-pressed` en los toggles de
  visibilidad; inspector con `role="tablist"`; readout lat/lon con `aria-live`.
- **Editor de libro** (`bookEditor/`): controles de Papel/Tipografía/Tamaño/
  Interlineado (accesibilidad de lectura) con labels; navegación por teclado.
- **Slides** (`TheorySlideEditor.tsx`) y **motor gráfico** (`blocks/v2/`):
  conservan su UI previa. Migrarlos a D.2 (D.3.4/D.3.5) queda pendiente; al
  hacerlo, revisar `aria-pressed` en toggles y `role`/labels en paneles.

## Pendiente

Cuando se migren slides y motor gráfico a D.2 (D.3.4/D.3.5), repetir el chequeo
de teclado y `aria-pressed`/labels usando los componentes de `components/ui/`.
