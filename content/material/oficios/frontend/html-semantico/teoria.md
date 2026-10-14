# Frontend — HTML semántico (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../../informatica/protocolo-http-peticion-respuesta/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/frontend/html-semantico/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es HTML

**HTML** (*HyperText Markup Language*) es el lenguaje que describe la **estructura y el significado** del contenido de una página web. No es un lenguaje de programación: es un **lenguaje de marcado**. El navegador lo lee y construye la página. El **aspecto** lo da **CSS** y el **comportamiento**, **JavaScript**.

---

## 2. Estructura de un documento

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Mi página</title>
  </head>
  <body>
    <h1>Título principal</h1>
    <p>Un párrafo.</p>
  </body>
</html>
```

- **`<!DOCTYPE html>`**: indica que es HTML5.
- **`lang="es"`**: el idioma (lo usan los lectores de pantalla y los buscadores).
- **`<head>`**: información **sobre** la página (codificación, título, estilos).
- **`<body>`**: lo que **se ve**.
- Un **elemento** tiene **etiqueta de apertura**, **contenido** y **etiqueta de cierre**: `<p>texto</p>`. Algunos son **vacíos**: `<img>`, `<br>`.
- Los **atributos** dan datos extra: `<a href="https://ejemplo.com">`.

---

## 3. Qué significa "semántico"

Un elemento **semántico** dice **qué es** su contenido, no solo cómo se ve. Se prefiere:

| Para... | Se usa | En vez de |
|:--|:--|:--|
| encabezado de la página o sección | `<header>` | `<div class="encabezado">` |
| navegación principal | `<nav>` | `<div class="menu">` |
| contenido principal (uno por página) | `<main>` | `<div id="contenido">` |
| tema independiente | `<section>`, `<article>` | `<div>` |
| contenido lateral | `<aside>` | `<div class="lateral">` |
| pie | `<footer>` | `<div class="pie">` |
| figura con epígrafe | `<figure>` y `<figcaption>` | `<div>` |
| énfasis / importancia | `<em>` / `<strong>` | `<i>` / `<b>` (solo estilo) |

`<div>` y `<span>` **no tienen significado**: se usan **solo cuando no hay** un elemento más adecuado.

**Ventajas:** **accesibilidad** (los lectores de pantalla navegan por regiones), **SEO** (los buscadores entienden mejor), **mantenimiento** y código **legible**.

---

## 4. Títulos, textos y listas

- **`<h1>` a `<h6>`**: jerarquía de títulos. **Un `<h1>` por página** y **sin saltar niveles** (no pasar de `<h2>` a `<h4>`). **No se usan** para dar tamaño: eso es CSS.
- **`<p>`**: párrafo. **`<br>`**: salto de línea (no para separar párrafos).
- **Listas:** `<ul>` (con viñetas), `<ol>` (numerada) y `<li>` (cada ítem); `<dl>`, `<dt>`, `<dd>` (definiciones).
- **Tablas:** `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>` (encabezado), `<td>` (celda). **Solo para datos**, **no para maquetar**.
- **Citas:** `<blockquote>`, `<q>`, `<cite>`; **código:** `<code>`, `<pre>`; **fechas:** `<time datetime="2026-10-14">`.

---

## 5. Enlaces e imágenes

```html
<a href="/contacto">Contacto</a>
<img src="foto.jpg" alt="Estudiantes armando un circuito" width="600" height="400">
```

- **Texto del enlace descriptivo**: "Leer el informe", no "hacé clic acá".
- **`alt`**: **texto alternativo** de la imagen: lo leen los lectores de pantalla y se ve si la imagen **no carga**. Describe el **contenido o la función**. Si la imagen es **solo decorativa**, `alt=""` (vacío).
- **`width` y `height`** evitan que la página "salte" al cargar.
- Formatos modernos y `loading="lazy"` para cargar al desplazarse.

---

## 6. Formularios

```html
<form action="/enviar" method="post">
  <label for="correo">Correo electrónico</label>
  <input type="email" id="correo" name="correo" required>
  <button type="submit">Enviar</button>
</form>
```

- **Toda entrada lleva su `<label>`** asociada (con `for` e `id`): mejora la accesibilidad y agranda el área clicable.
- **Tipos de `input`**: `text`, `email`, `password`, `number`, `date`, `checkbox`, `radio`, `file`.
- **Validación nativa**: `required`, `min`, `max`, `pattern`. **Se valida también en el servidor**: la del navegador **se puede saltear**.
- `<fieldset>` y `<legend>` agrupan campos relacionados.
- **`<button>`** para acciones; **`<a>`** para navegar.

---

## 7. Accesibilidad básica

- **Estructura lógica** de títulos y regiones.
- **Texto alternativo** en las imágenes.
- **Etiquetas** en los formularios.
- **Se puede navegar con el teclado** (Tab) y se **ve** el foco.
- **Contraste** suficiente.
- **No depender solo del color.**
- **Validar** el HTML (el validador de la W3C).
