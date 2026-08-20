# HTML Semántico Avanzado: Más allá de la estructura básica

### Introducción
En el desarrollo web moderno, el HTML semántico no es solo una buena práctica de estilo; es un pilar fundamental para la accesibilidad, el SEO (Search Engine Optimization) y la mantenibilidad del código. Mientras que los principiantes suelen abusar de elementos genéricos como `<div>` y `<span>` para maquetar, el desarrollador avanzado entiende que cada etiqueta debe tener un propósito claro que describa el **significado** del contenido, no solo su apariencia visual. El HTML semántico comunica la intención del documento a los navegadores, motores de búsqueda y tecnologías de asistencia (como lectores de pantalla).

### Explicación Central y Sintaxis Correcta
El HTML5 introdujo una serie de elementos de sección y contenido que reemplazan a las antiguas estructuras basadas en IDs o clases descriptivas sobre `<div>`. Estos elementos definen regiones lógicas dentro de un documento.

Es crucial distinguir entre elementos de **sección** (que agrupan contenido temático) y elementos de **contenido** (que representan información independiente).

*   **`<article>`**: Representa una composición autosuficiente, como un post de blog, un comentario, o un widget interactivo. El contenido tiene sentido por sí mismo, incluso si se extrae del contexto principal.
*   **`<section>`**: Representa una agrupación temática genérica. A diferencia de `<article>`, una sección no es autosuficiente; suele tener un encabezado (`<h1>`-`<h6>`) y está vinculada al contexto más amplio de la página.
*   **`<nav>`**: Contiene los enlaces de navegación principales. No todos los grupos de enlaces deben ir aquí (por ejemplo, los enlaces del pie de página van en `<footer>`).
*   **`<aside>`**: Para contenido tangencialmente relacionado, como barras laterales, citas o publicidad.

**Ejemplo de sintaxis correcta:**

```html
<!-- Estructura semántica correcta -->
<article class="post">
  <header>
    <h1>Título del Artículo</h1>
    <time datetime="2023-10-27">27 de octubre de 2023</time>
  </header>
  
  <p>Contenido principal del artículo...</p>
  
  <!-- Sección interna temática -->
  <section id="comentarios">
    <h2>Comentarios</h2>
    <article class="comment">
      <p>Este es un comentario individual.</p>
    </article>
  </section>
</article>
```

Nota importante: El elemento `<header>` no es exclusivo del `<body>`; puede anidarse dentro de `<article>` o `<section>` para representar el encabezado de esa sección específica. Lo mismo aplica para `<footer>`.

### Errores Comunes
1.  **Confundir `<section>` con `<div>`**: Usar `<section>` para cualquier agrupación visual es un error. Si no hay un encabezado temático claro y el contenido no forma una unidad lógica distinta, usa `<div>`. El abuso de `<section>` infla el DOM innecesariamente y confunde a los lectores de pantalla.
2.  **Anidación incorrecta de `<article>`**: No se debe anidar un `<article>` dentro de otro `<article>` a menos que el artículo interno tenga una conexión temática directa y sea independiente del externo (por ejemplo, un artículo principal que contiene comentarios, donde cada comentario es un `<article>`).
3.  **Ignorar la jerarquía de encabezados**: Los elementos semánticos como `<section>` no deben tener un `<h1>` como primer hijo si ya hay un `<h1>` en el `<body>`. Se debe respetar la jerarquía: después de un `<h1>`, el siguiente nivel lógico es un `<h2>`, y así sucesivamente. Saltar niveles (de `<h1>` a `<h4>`) rompe la accesibilidad.
4.  **Usar `<nav>` para todo**: Los enlaces de paginación, menús de contexto o enlaces sociales en el pie de página no son navegación principal y no deben ir en `<nav>`.

### Cuándo usarlo / Cuándo NO usarlo
*   **Usar HTML semántico cuando**:
    *   El contenido es independiente y reutilizable (usa `<article>`).
    *   Necesitas definir una región temática con un encabezado claro (usa `<section>`).
    *   Quieres mejorar el SEO y la accesibilidad para lectores de pantalla.
    *   Estás maquetando la estructura principal de la página (usa `<header>`, `<main>`, `<footer>`).

*   **NO usar HTML semántico cuando**:
    *   El elemento es puramente presentacional (usa `<div>`).
    *   No hay un encabezado temático claro para una sección (usa `<div>`).
    *   El contenido no es autosuficiente ni tiene un significado propio fuera del contexto (evita `<article>`).

### Ejemplo Extendido en Contexto
Imagina que estás desarrollando una página de noticias con una barra lateral. Una estructura errónea usaría `<div class="sidebar">` y `<div class="post">`. La estructura semántica avanzada sería:

```html
<body>
  <header>
    <nav aria-label="Navegación principal">
      <!-- Enlaces del menú -->
    </nav>
  </header>

  <main>
    <article>
      <h1>Avances en IA Generativa</h1>
      <p>Introducción al tema...</p>
      
      <section>
        <h2>Impacto en la Industria</h2>
        <p>Detalles técnicos...</p>
      </section>
    </article>
  </main>

  <aside>
    <h2>Noticias Relacionadas</h2>
    <ul>
      <li><a href="#">Artículo 1</a></li>
      <li><a href="#">Artículo 2</a></li>
    </ul>
  </aside>

  <footer>
    <p>&copy; 2023 Mi Sitio de Noticias</p>
    <nav aria-label="Enlaces legales">
      <!-- Enlaces de privacidad, términos, etc. -->
    </nav>
  </footer>
</body>
```
En este ejemplo, `<main>` encapsula el contenido primario, `<aside>` separa el contenido tangencial, y cada `<article>` y `<section>` tiene un propósito claro, permitiendo que los motores de búsqueda y los lectores de pantalla entiendan la jerarquía y relevancia de la información.