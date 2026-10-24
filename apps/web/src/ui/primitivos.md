# ui/ — Set de primitivos (átomos) del rediseño

Catálogo e inventario de los átomos de `apps/web/src/ui/`. La **regla de
oro**, las escalas y el patrón de uso de tokens viven en `tokens.md`; acá
documentamos el set de componentes + las **convenciones de accesibilidad**.

Importá siempre desde la carpeta:

```ts
import { Button, Field, Input, Modal } from "@/ui";
```

> Convive con `components/ui/` (viejo) hasta que cada división lo migre.
> **Estos átomos todavía no reemplazan nada** — se *usan* en la reconstrucción
> del editor (División 2) y siguientes. El set es extensible: si falta un
> átomo, se agrega siguiendo el molde (ver abajo).

---

## Inventario

### División 0 — fundación + demostradores

| Archivo         | Default    | Ref                    | Notas                                  |
| --------------- | ---------- | ---------------------- | -------------------------------------- |
| `tokens.css`    | —          | —                      | `--space-*`, `--text-*`, `--fw-*`, `--lh-*`, `--shadow-sm/md/lg` + `::placeholder` (vía `--c-hint`). |
| `Button.tsx`    | `Button`   | `HTMLButtonElement`    | Variantes `primary/ghost/danger/icon`; `icon` exige `aria-label` por tipos. |
| `Card.tsx`      | `Card`     | `HTMLDivElement`       | Variantes `flat/raised/elevated/pop`.  |

### División 1 — formulario

| Archivo            | Default       | Ref                    | Variantes / props clave                                                      |
| ------------------ | ------------- | ---------------------- | ---------------------------------------------------------------------------- |
| `Label.tsx`        | `Label`       | `HTMLLabelElement`     | `required` (asterisco visual `aria-hidden`).                                 |
| `Input.tsx`        | `Input`       | `HTMLInputElement`     | `size: sm\|md`, `invalid` (borde `--c-danger`).                              |
| `Textarea.tsx`     | `Textarea`    | `HTMLTextAreaElement`  | `size`, `invalid`, `rows`, `resize: vertical`.                              |
| `Select.tsx`       | `Select`      | `HTMLSelectElement`    | Flecha nativa (máx a11y + multi-tema); `size`, `invalid`.                    |
| `Checkbox.tsx`     | `Checkbox`    | `HTMLInputElement`     | Nativo + `accent-color: --c-primary`. `label` envuelve en `<label>`.         |
| `Radio.tsx`        | `Radio`       | `HTMLInputElement`     | Nativo + `accent-color`. Se conecta a `RadioGroup` vía contexto.             |
| `RadioGroup.tsx`   | `RadioGroup`  | `HTMLDivElement`       | `role="radiogroup"`, `value`/`onValueChange`, `name` autogenerado.          |
| `Switch.tsx`       | `Switch`      | `HTMLButtonElement`    | `role="switch"` + `aria-checked`; controlado (`checked`/`onCheckedChange`).  |
| `Field.tsx`        | `Field`       | `HTMLDivElement`       | **Átomo crítico de a11y de formularios** (ver abajo).                        |

### División 1 — feedback / display

| Archivo        | Default     | Ref                       | Variantes                                                                     |
| -------------- | ----------- | ------------------------- | ----------------------------------------------------------------------------- |
| `Badge.tsx`    | `Badge`     | `HTMLSpanElement`         | `neutral/primary/accent/success/warning/danger/info`; `pill`.                 |
| `Alert.tsx`    | `Alert`     | `HTMLDivElement`          | `info/success/warning/danger` vía `--c-*-soft`; `role` implícito por variante. Alias `Callout`. |
| `Spinner.tsx`  | `Spinner`   | `SVGSVGElement`           | SVG + SMIL (`animateTransform`); `label={null}` → decorativo.                 |
| `Divider.tsx`  | `Divider`   | `HTMLHRElement` \| span   | `horizontal` (`<hr>`) / `vertical` (`role="separator"`).                      |

### División 1 — overlay

| Archivo       | Default    | Ref                  | Notas                                                                              |
| ------------- | ---------- | -------------------- | ---------------------------------------------------------------------------------- |
| `Modal.tsx`   | `Modal`    | `HTMLDivElement`     | `createPortal`; focus trap, ESC, `aria-modal`, retorno de foco, lock de scroll. Alias `Dialog`. |
| `Tooltip.tsx` | `Tooltip`  | `HTMLSpanElement`    | Hover **y foco**; ESC cierra; `aria-describedby` + `role="tooltip"`.               |
| `Menu.tsx`    | `Menu`     | —                    | Popover de menú: `role="menu"`, `aria-haspopup/expanded/controls`, click-afuera + **ESC** (retorno de foco), teclado ▲/▼/Home/End. `trigger` y `children` como render-props (`children` recibe `close`). |

### División 10 — notificaciones

| Archivo       | Default    | Ref                  | Notas                                                                              |
| ------------- | ---------- | -------------------- | ---------------------------------------------------------------------------------- |
| `Toast.tsx`   | `Toast`    | `HTMLDivElement`     | Notificación no-bloqueante. `role="status"` + `aria-live="polite"` (info/success) o `role="alert"` + `aria-live="assertive"` (warning/danger). Posición fija bottom-right, z-index 1100. Acento visual por variante vía border-left. Auto-close con `durationMs`. |

### División 9 — datos

| Archivo      | Default                                                         | Ref                          | Notas                                                                                                        |
| ------------ | --------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `Table.tsx`  | `Table` + `TableCaption`, `TableHead`, `TableBody`, `TableRow`, `TableTh`, `TableTd` | `HTMLTableElement` y sub-elementos | Variantes `default\|compact` (padding); `striped` en root, `even` en `TableRow` para zebra. Semántico: `<table>/<caption>/<thead>/<tbody>/<th>/<td>`. |

### División 8 — indicadores

| Archivo        | Default     | Ref                | Notas                                                                                              |
| -------------- | ----------- | ------------------ | -------------------------------------------------------------------------------------------------- |
| `Progress.tsx` | `Progress`  | `HTMLDivElement`   | Barra de progreso con `role="progressbar"`. `value`/`max`, variantes `primary/success/warning/danger`, `label` opcional. |

### División 6 — navegación

| Archivo        | Default     | Ref                | Notas                                                                                              |
| -------------- | ----------- | ------------------ | -------------------------------------------------------------------------------------------------- |
| `Avatar.tsx`   | `Avatar`    | `HTMLDivElement`   | Círculo con iniciales (o `children`); `size: sm\|md`, `tone: primary\|neutral`. Radio estructural 50%. |
| `NavItem.tsx`  | `NavItem`   | —                  | Ítem de nav con estado activo. **Envuelve `NavLink` de react-router** (ver nota abajo): reusa su matching y su `aria-current="page"`. `orientation: horizontal` (píldora) \| `sidebar` (barra-acento). Hover por estado (estilos inline token-puros). |

> **Nota de acoplamiento (`NavItem`):** la navegación es, por naturaleza,
> router-aware. `NavItem` es el único átomo que importa de `react-router-dom`
> (a propósito): así NO se reimplementa el routing — se centraliza sólo el
> *chrome* (activo/hover/foco) y se hereda `aria-current` automático. `Menu` y
> `Avatar`, en cambio, son router-agnósticos.

### Cierre

| Archivo         | Rol                                                        |
| --------------- | ---------------------------------------------------------- |
| `index.ts`      | Barrel: exporta todos los primitivos + sus tipos.          |
| `RadioGroupContext.ts` | Contexto compartido de `RadioGroup` (fuera de `Radio.tsx` para react-refresh y evitar import circular). |

---

## Convenciones de accesibilidad

Todas se cumplen por construcción en los átomos; la app hereda el foco
accesible global desde `index.css` (`:focus-visible` con `--c-focus-ring`
sobre `button/input/select/textarea/a/[tabindex]` y roles comunes).

1. **Foco visible (`:focus-visible` + `--c-focus-ring`).**
   - Controles nativos (`input/select/textarea/button`) y `Switch` (`<button>`)
     lo reciben de la regla global de `index.css`.
   - **No** se reemplaza por un `:focus` de mouse — el outline sólo aparece
     con teclado. Los átomos **no** definen su propio `:focus-visible` para no
     duplicar/pelear con el global.

2. **Asociación label ↔ control.**
   - Manual: `Label` con `htmlFor` + control con `id`.
   - Automática: usar **`Field`** (genera `id` con `useId`, asocia, y cablea
     `aria-invalid` + `aria-describedby`). Es la forma recomendada.

3. **Errores de formulario.**
   - `Field` inyecta `aria-invalid` en el control y `aria-describedby` apuntando
     al mensaje de error (con `role="alert"`, anunciado por AT al aparecer).
   - El control pinta el borde en `--c-danger` vía `invalid` (lo setea `Field`
     automáticamente cuando hay `error`).

4. **Checkbox / Radio / Switch operables por teclado.**
   - `Checkbox`/`Radio`: nativos → Space activa, flechas mueven entre radios.
   - `Switch`: `<button role="switch">` → Space/Enter conmutan.

5. **Controles solo-ícono exigen nombre accesible.**
   - `Button` variante `icon` lo fuerza por tipos (`aria-label` obligatorio).
   - `Tooltip` sirve para dar nombre accesible visual + `aria-describedby`.
   - `Modal`/`Switch` reciben nombre vía `aria-label`/`aria-labelledby`
     (típicamente provistos por `Field` o por el consumidor).

6. **Modal.**
   - `role="dialog"` + `aria-modal="true"` + `aria-labelledby` (título) o
     `aria-label`.
   - Focus trap al abrir (foca el primer focuseable o el panel), Tab/Shift-Tab
     no sale, **ESC** cierra, y al cerrar **devuelve el foco al disparador**.
   - Bloqueo de scroll del `body` mientras está abierto.

7. **Spinner.** Por defecto `role="img"` + `aria-label="Cargando…"`. Si el
   contexto ya muestra un texto de carga, pasar `label={null}` para marcarlo
   `aria-hidden` y no duplicar anuncio.

8. **Toast.** `role="status"` + `aria-live="polite"` para info/success;
   `role="alert"` + `aria-live="assertive"` para warning/danger. Auto-close
   con `durationMs`; acciones opcionales (`ToastAction[]`) disparan callback y
   cierran. El consumidor maneja cola/montaje; el átomo sólo renderiza.

---

## Cómo agregar un átomo nuevo (el molde)

1. **Un archivo por átomo** en `ui/`, default-export del componente.
2. **Solo tokens.** Estilos como objetos `CSSProperties`; color siempre
   `var(--c-*)`, espaciado `var(--space-*)`, tipografía `var(--text-*)` /
   `--fw-*` / `--lh-*`, radios `var(--r-*)`, sombras `var(--shadow-*)`,
   fuentes `var(--font-*)`. El único literal permitido: `1px` de borde
   (y `borderWidth: "var(--space-0)"` para resetear).
3. **`forwardRef`** al elemento host correcto.
4. **Variantes/tamaños** como uniones discriminadas de TS + tablas `Record`.
5. **A11y por tipos** cuando aplique (ej. variantes solo-ícono exigen
   `aria-label`).
6. **Foco accesible** vía la regla global (no lo reimventes).
7. **`import type`** para los tipos (el proyecto usa `verbatimModuleSyntax`).
8. Exportar el default + los **tipos** en `ui/index.ts`.
9. Si el átomo introduce un **contexto**, ponelo en su propio `.ts` (para
   `react-refresh` y evitar import circular) — ver `RadioGroupContext.ts`.

Plantilla mínima:

```tsx
import { forwardRef, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";

export type AtomVariant = "a" | "b";
export type AtomProps = HTMLAttributes<HTMLDivElement> & {
  variant?: AtomVariant;
  children?: ReactNode;
};

const VARIANT: Record<AtomVariant, CSSProperties> = {
  a: { background: "var(--c-surface)", borderColor: "var(--c-border)" },
  b: { background: "var(--c-primary)", borderColor: "var(--c-primary)" },
};

const Atom = forwardRef<HTMLDivElement, AtomProps>(function Atom(
  { variant = "a", className, style, children, ...rest },
  ref,
) {
  const base: CSSProperties = {
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "var(--r-md)",
    padding: "var(--space-3)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-base)",
    color: "var(--c-text)",
    ...VARIANT[variant],
  };
  return (
    <div ref={ref} className={className} style={{ ...base, ...style }} {...rest}>
      {children}
    </div>
  );
});

export default Atom;
```

---

## Multi-tema

Los átomos **no** conocen el tema: leen `--c-*` y heredan el recoloreo de
`[data-theme="…"]` en `index.css`. Cambiar de tema no requiere tocar ningún
átomo. Las escalas de espaciado/tipografía/elevación son theme-agnósticas.

---

## Verificación

- `tsc -b` (o `npx tsc -p` sobre `src/ui`) sin errores en `ui/`.
- `npx eslint src/ui` sin errores/warnings.
- Cero hardcodeo de color/espaciado; multi-tema intacto.
- Nada de código viejo modificado (sólo `tokens.css` recibió una regla
  aditiva `::placeholder` para mantener inputs token-puros).
