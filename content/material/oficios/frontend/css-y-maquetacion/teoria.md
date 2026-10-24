# Frontend — CSS y maquetación (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../html-semantico/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/frontend/css-y-maquetacion/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es CSS

**CSS** (*Cascading Style Sheets*) define **el aspecto** de una página: colores, tipografías, tamaños, espacios y **disposición**. Se escribe en **reglas** con un **selector** y **declaraciones** (propiedad: valor):

```css
h1 {
  color: #1a4d8f;
  font-size: 2rem;
}
```

**Formas de incluir CSS:** un **archivo externo** (`<link rel="stylesheet" href="estilos.css">`, la recomendada), una etiqueta **`<style>`** o el atributo **`style`** (evitar).

---

## 2. Selectores

| Selector | Qué elige |
|:--|:--|
| `p` | todos los `<p>` |
| `.aviso` | los elementos con `class="aviso"` |
| `#cabecera` | el elemento con `id="cabecera"` (único) |
| `nav a` | los `<a>` dentro de un `<nav>` |
| `a:hover` | el enlace con el mouse encima |
| `li:first-child` | el primer `<li>` |
| `input[type="email"]` | los inputs con ese atributo |

Se prefieren **clases** para dar estilo. **No** se debe abusar de `#id` ni de `!important`.

---

## 3. Cascada, herencia y especificidad

- **Cascada:** si varias reglas afectan al mismo elemento, **gana** la de mayor **especificidad**; si empatan, **la última** escrita.
- **Especificidad:** `id` > `clase`/atributo/pseudoclase > elemento.
- **Herencia:** algunas propiedades (color, fuente) **pasan a los hijos**; otras (margen, borde) **no**.
- El **orden** y la **especificidad baja** facilitan mantener el CSS.

---

## 4. El modelo de caja

Todo elemento es una **caja** con (de adentro hacia afuera): **contenido**, **padding** (relleno), **border** (borde) y **margin** (margen).

```css
* { box-sizing: border-box; }
```

Con **`box-sizing: border-box`**, el ancho declarado **incluye** el padding y el borde (más fácil de calcular). Los **márgenes verticales** adyacentes pueden **colapsar**.

---

## 5. Unidades

- **Absolutas:** `px`.
- **Relativas:** `rem` (relativa al tamaño de la fuente de la raíz), `em` (del elemento), `%`, `vw`/`vh` (ancho y alto de la ventana).
- Para **textos** y espacios se prefieren **`rem`** (respetan las preferencias de tamaño del usuario).

---

## 6. Maquetación moderna

**Flexbox** (en **una dimensión**: una fila o una columna):

```css
.barra {
  display: flex;
  justify-content: space-between;   /* eje principal */
  align-items: center;              /* eje transversal */
  gap: 1rem;
}
```

**Grid** (en **dos dimensiones**: filas y columnas):

```css
.galeria {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

Regla práctica: **Flexbox** para **alinear elementos en una línea** (barras, tarjetas); **Grid** para **diseños de página** y cuadrículas.

**Posicionamiento:** `static` (normal), `relative`, `absolute` (respecto del ancestro posicionado), `fixed` (respecto de la ventana), `sticky`.

---

## 7. Diseño adaptable (responsive)

- `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- Diseñar **primero para móvil** (*mobile first*) y agregar reglas para pantallas más grandes con **media queries**:

```css
@media (min-width: 768px) {
  .galeria { grid-template-columns: repeat(3, 1fr); }
}
```

- **Unidades relativas**, **imágenes** con `max-width: 100%`, **textos legibles**.
- **Probar** en pantallas distintas.

---

## 8. Buenas prácticas

- **Variables CSS** (`--color-principal`) para colores y tamaños.
- **Nombres** de clases que expliquen el **propósito**, no el aspecto (`.aviso`, no `.rojo`).
- **Contraste** adecuado y **foco visible** (no quitar `outline` sin reemplazarlo).
- **Evitar** valores fijos que rompan en pantallas chicas.
- **Organizar** el CSS (reinicio, base, componentes).
