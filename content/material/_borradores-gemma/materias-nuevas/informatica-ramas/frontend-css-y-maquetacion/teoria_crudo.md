# Maquetación Avanzada con CSS: De la Teoría a la Práctica Moderna

El frontend ha evolucionado significativamente. Ya no basta con saber posicionar elementos con `float` o `absolute`. La maquetación moderna se basa en la flexibilidad, la responsividad y la mantenibilidad del código. En este nivel avanzado, nos enfocamos en cómo construir interfaces robustas utilizando las herramientas nativas del navegador sin depender de frameworks pesados, garantizando rendimiento y accesibilidad.

## Flexbox y Grid: El corazón del layout

La clave está en elegir la herramienta correcta para la estructura bidimensional o unidimensional del diseño.

### Flexbox: Para componentes unidimensionales

Flexbox es ideal cuando necesitas distribuir espacio entre elementos en una sola dirección (fila o columna). Es perfecto para navegación, tarjetas alineadas o centrado vertical/horizontal.

```css
.container {
  display: flex;
  justify-content: space-between; /* Distribuye el espacio entre items */
  align-items: center; /* Centra verticalmente */
  gap: 1rem; /* Espacio moderno entre elementos */
}
```

**Punto clave:** Usa `gap` en lugar de márgenes negativos o `margin: auto` para espaciado consistente. Evita el uso de `float` para maquetación; es una técnica obsoleta que causa problemas de flujo de documento.

### CSS Grid: Para layouts bidimensionales complejos

Grid es superior cuando defines tanto filas como columnas simultáneamente. Es ideal para estructuras de página, galerías de imágenes o dashboards.

```css
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto 1fr auto;
  gap: 2rem;
  min-height: 100vh;
}

/* Áreas nombradas para mayor claridad semántica */
.grid-template-areas: 
  "header header"
  "sidebar main"
  "footer footer";
```

**Punto clave:** `repeat(auto-fit, minmax(250px, 1fr))` crea un grid responsivo sin media queries. Si el contenedor se achica, las columnas se reorganizan automáticamente.

## Unidades relativas y Contextos de Formato

El uso incorrecto de unidades fijas (`px`) es la causa principal de diseños que se rompen en distintos dispositivos.

*   **`rem`**: Basado en la fuente raíz (`html { font-size: 100%; }`). Úsalo para tipografía y espaciado para mantener la escalabilidad accesible.
*   **`em`**: Basado en la fuente del padre. Úsalo con precaución, ya que puede causar efectos de cascada de tamaño.
*   **`vw` / `vh`**: Relativos al viewport. Útiles para hero sections, pero evita usarlos para tipografía legible, ya que puede hacer el texto ilegible en pantallas muy anchas o altas.
*   **`clamp()`**: La función moderna para tipografía fluida.
    ```css
    font-size: clamp(1rem, 2.5vw, 2rem);
    ```
    Esto asegura que el texto nunca sea menor a `1rem` ni mayor a `2rem`, escalando suavemente entre ambos valores.

## Errores comunes en maquetación avanzada

1.  **Anchos fijos en contenedores flexibles**: Definir `width: 1000px` en un contenedor principal rompe la responsividad. Usa `max-width` con `margin: 0 auto` para centrar contenido y permitir que el resto del espacio sea flexible.
2.  **Ignorar el `box-sizing`**: Por defecto, `width` no incluye `padding` ni `border`. Siempre inicializa con `*, *::before, *::after { box-sizing: border-box; }`.
3.  **Anidamiento excesivo de Grid/Flex**: Combinar Grid para la estructura macro y Flex para componentes micro es la mejor práctica. Evitar anidar Grid dentro de Grid innecesariamente.
4.  **Olvidar la accesibilidad**: Un layout visualmente perfecto puede ser inaccesible si se usa `position: absolute` para esconder elementos visuales en lugar de técnicas como `clip-path` o `aria-hidden` con `display: none` para contenido no relevante.

## Cuándo usar y cuándo no usar

*   **Usa Grid cuando**: Necesitas control preciso sobre la posición de elementos en dos dimensiones (ej. un blog con sidebar, header y footer definidos).
*   **Usa Flexbox cuando**: Estás alineando elementos de un mismo tipo (ej. botones, ítems de una lista, tarjetas de producto) y la dirección es principalmente lineal.
*   **No uses Grid para**: Componentes pequeños o dinámicos que cambian de frecuencia (ej. una lista de comentarios que crece indefinidamente). Flexbox o `display: inline-block` (con cuidado) suelen ser más eficientes para flujos unidimensionales variables.
*   **No uses `float` para maquetación**: Solo úsalo para texto que fluya alrededor de imágenes (wrap), nunca para crear columnas de layout.

## Ejemplo extendido: Tarjeta de producto responsiva

Imagina una galería de productos. Usaremos Grid para la galería y Flexbox para la tarjeta individual.

```css
/* Contenedor de la galería: Grid responsivo */
.product-gallery {
  display: grid;
  /* Columnas que se ajustan automáticamente */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

/* Tarjeta individual: Flexbox para alinear contenido interno */
.product-card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden; /* Para que la imagen respete los bordes redondeados */
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: translateY(-4px);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover; /* Evita que la imagen se deforme */
}

.product-info {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex-grow: 1; /* Empuja el botón hacia abajo si el texto es corto */
}

.product-price {
  margin-top: auto; /* Empuja el precio al final del espacio disponible */
  font-size: 1.25rem;
  font-weight: bold;
}

.cta-button {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

En este ejemplo, `auto-fill` asegura que las tarjetas se acomoden al ancho de la pantalla. `flex-grow: 1` en `.product-info` y `margin-top: auto` en el precio garantizan que, independientemente de la longitud del título del producto, el botón de compra siempre esté alineado al fondo de la tarjeta. Esto crea una experiencia visual limpia y consistente sin necesidad de alturas fijas.