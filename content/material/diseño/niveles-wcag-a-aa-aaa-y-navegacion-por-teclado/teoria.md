# UX y diseño — Niveles WCAG (A, AA, AAA) y navegación por teclado (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `diseño/niveles-wcag-a-aa-aaa-y-navegacion-por-teclado`. Depende de `../accesibilidad-wcag-contraste-lectores-de-pantalla/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo está organizado el estándar WCAG y qué exige para quienes navegan solo con teclado.

---

## 1. Cómo está armado WCAG

`accesibilidad-wcag-contraste-lectores-de-pantalla/` presentó las pautas WCAG (Web Content Accessibility Guidelines) del consorcio W3C. Su estructura tiene tres capas. Arriba hay cuatro **principios**, que se recuerdan con la sigla POUR: el contenido debe ser **perceptible**, **operable**, **comprensible** y **robusto**. Debajo hay **pautas** (objetivos generales) y, más abajo, **criterios de éxito**: afirmaciones concretas que se pueden comprobar como cumplidas o no.

La versión 2.2 es una Recomendación del W3C publicada en octubre de 2023. Mantiene los criterios de las versiones anteriores y agrega nuevos, de modo que cumplir una versión más nueva implica cumplir lo esencial de las anteriores.

## 2. Los tres niveles de conformidad

Cada criterio de éxito tiene un nivel:

- **Nivel A**: lo mínimo. Si no se cumple, algunas personas directamente no pueden usar el contenido.
- **Nivel AA**: el objetivo habitual de la mayoría de las normativas. Incluye todo lo de A y suma requisitos como el contraste mínimo de 4,5 a 1 para texto normal.
- **Nivel AAA**: el más exigente. No suele pedirse como política general de todo un sitio porque algunos criterios no se pueden cumplir para cualquier contenido.

Los niveles son acumulativos: para declarar conformidad AA hay que cumplir todos los criterios A y AA. En la Argentina, la Ley 26.653 de accesibilidad de la información en las páginas web obliga a organismos públicos, entre otros. Las pautas oficiales las fija la ONTI: la Disposición 6/2019 adoptó las WCAG 2.0 y fijó una exigencia gradual de criterios. Como esa disposición puede actualizarse, conviene consultar el texto vigente para saber qué versión y nivel se exigen.

## 3. Teclado: una vía de acceso para muchas personas

Muchas personas no usan mouse: quienes tienen discapacidades motoras, quienes usan lectores de pantalla y quienes simplemente prefieren el teclado. Por eso todo lo que se pueda hacer con el mouse debe poder hacerse con el teclado. Los requisitos principales:

- **Orden de tabulación lógico**: al presionar la tecla Tab, el foco recorre los elementos en un orden que sigue el sentido visual (de arriba hacia abajo y de izquierda a derecha en idiomas como el español).
- **Foco visible**: siempre se debe ver cuál es el elemento activo. Quitar el contorno del foco sin reemplazarlo es un error común. El criterio de foco visible es de nivel AA.
- **Sin trampas de teclado**: nadie debe quedar atrapado en un componente del que no pueda salir con el teclado.
- **Enlaces de salto**: un enlace "Saltar al contenido" al comienzo de la página evita tener que pasar por todo el menú en cada página.
- **Elementos nativos**: usar botones y enlaces reales de HTML trae el comportamiento de teclado gratis; un `div` con aspecto de botón requiere trabajo extra.

## 4. Alternativas de texto y otros criterios frecuentes

- Toda imagen que transmita información necesita una **alternativa de texto** que diga lo que comunica (nivel A). Las imágenes decorativas se marcan para que el lector las ignore.
- Los videos necesitan **subtítulos**, y el audio, transcripción.
- Los formularios necesitan **etiquetas** asociadas a cada campo y mensajes de error que se puedan entender sin ver el color.
- El contenido debe **adaptarse** al hacer zoom sin perder información ni obligar a desplazarse en dos direcciones.

## 5. Cómo se comprueba

Combina herramientas automáticas, que detectan solo una parte de los problemas (por ejemplo, falta de texto alternativo o contraste insuficiente), con una revisión manual. En la revisión manual se recorre la página solo con el teclado, se la prueba con un lector de pantalla y se revisa con zoom. Ninguna herramienta automática garantiza por sí sola la accesibilidad.

## N. Conexión con lo que sigue

Estos criterios se aplican a la hora de diseñar formularios (`formularios-y-microinteracciones/`) y de adaptar la interfaz a distintas pantallas (`diseno-responsive-y-mobile-first/`).
