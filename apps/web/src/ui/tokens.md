# ui/ — Fundación de tokens del rediseño

Carpeta nueva. Estrategia *strangler*: convive con `components/ui/` (viejo)
hasta que cada división siguiente lo migre. No se reescribe nada de golpe.

---

## La regla de oro

> **Nunca un valor hardcodeado en CSS / inline-style. Siempre un token.**

- Color → `var(--c-*)` (theme-driven; cambia con `data-theme`).
- Espaciado → `var(--space-*)` (esta carpeta).
- Tamaño de texto → `var(--text-*)` (esta carpeta).
- Peso de texto → `var(--fw-*)` (esta carpeta).
- Interlineado → `var(--lh-*)` (esta carpeta).
- Radio de borde → `var(--r-*)` (existentes en `index.css`).
- Sombra → `var(--shadow-sm|md|lg|pop)`.
- Familia de fuente → `var(--font-sans|serif|mono)` (existentes).

Si necesitás un valor que no tiene token, **agregalo a `tokens.css`** con
un nombre semántico. No metas un `#3b82f6` ni un `padding: 14px` en un
componente.

---

## Escalas

### Espaciado (base 4px, ritmo 8)

| Token         | Valor      | px  | Uso típico                          |
| ------------- | ---------- | --- | ----------------------------------- |
| `--space-0`   | `0`        | 0   | reset                               |
| `--space-1`   | `0.25rem`  | 4   | nudges, separadores finos           |
| `--space-2`   | `0.5rem`   | 8   | gap chico entre texto/ícono         |
| `--space-3`   | `0.75rem`  | 12  | padding interno de controles chicos  |
| `--space-4`   | `1rem`     | 16  | padding estándar, gap base          |
| `--space-5`   | `1.5rem`   | 24  | separación entre bloques            |
| `--space-6`   | `2rem`     | 32  | secciones medianas                  |
| `--space-7`   | `3rem`     | 48  | secciones grandes                   |
| `--space-8`   | `4rem`     | 64  | hero, separación vertical amplia    |

### Tipografía (ratio 1.25, base 16px)

| Token         | Valor         | px aprox.  | Uso típico              |
| ------------- | ------------- | ---------- | ----------------------- |
| `--text-xs`   | `0.8rem`      | 12.8       | captions, hints         |
| `--text-sm`   | `0.875rem`    | 14         | meta, etiquetas         |
| `--text-base` | `1rem`        | 16         | cuerpo por defecto      |
| `--text-lg`   | `1.25rem`     | 20         | lead, destacado         |
| `--text-xl`   | `1.5625rem`   | 25         | h3                      |
| `--text-2xl`  | `1.953rem`    | 31.25      | h2                      |
| `--text-3xl`  | `2.441rem`    | 39.06      | h1                      |

| Token             | Valor | Uso                         |
| ----------------- | ----- | --------------------------- |
| `--fw-regular`    | `400` | cuerpo                      |
| `--fw-medium`     | `500` | énfasis suave, controles    |
| `--fw-semibold`   | `600` | subtítulos                  |
| `--fw-bold`       | `700` | títulos                     |
| `--lh-tight`      | `1.2` | títulos, encabezados        |
| `--lh-normal`     | `1.5` | cuerpo default              |
| `--lh-relaxed`    | `1.65`| lectura larga               |

### Elevación

| Token            | Uso                                                |
| ---------------- | -------------------------------------------------- |
| `--shadow-sm`    | borde inferior sutil, tarjetas apoyadas            |
| `--shadow-md`    | tarjetas elevadas, popovers                        |
| `--shadow-lg`    | modales, drawers, menús flotantes                  |
| `--shadow-pop`   | climax visual (toast, highlight de CTA, ya existía) |

---

## Patrón de uso en componentes

```tsx
// ✅ Correcto: solo tokens.
<button
  style={{
    padding: "var(--space-3) var(--space-4)",
    fontSize: "var(--text-sm)",
    fontWeight: "var(--fw-medium)",
    background: "var(--c-primary)",
    color: "var(--c-text-on-dark)",
    borderRadius: "var(--r-md)",
    boxShadow: "var(--shadow-sm)",
  }}
/>
```

```tsx
// ❌ Incorrecto: valores literales.
<button
  style={{
    padding: "12px 16px",   // no
    fontSize: "14px",       // no
    fontWeight: 500,        // mejor el token
    background: "#2563eb",  // no, mata el multi-tema
    borderRadius: "10px",   // no
  }}
/>
```

---

## Multi-tema

Las escalas de **espaciado, tipografía y elevación son theme-agnósticas**:
no cambian con `data-theme`. Solo los `--c-*` (color) son theme-driven.

El switcher de tema en `theme/ThemeContext.tsx` sigue funcionando tal
cual: pisa los `--c-*` en `:root` o `[data-theme="…"]` y nuestros
componentes heredan los nuevos colores sin tocar nada.
