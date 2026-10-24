# UX y diseño — Sistemas de diseño y componentes (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `diseño/sistemas-de-diseno-y-componentes`. Depende de `../prototipado-wireframe-mockup-prototipo-interactivo/`, `../color-en-interfaces/` y `../tipografia-en-interfaces/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo reunir decisiones de diseño en una biblioteca reutilizable que mantiene la consistencia entre pantallas y equipos.

---

## 1. El problema que resuelve

Un producto crece: decenas de pantallas, varias personas diseñando y programando. Sin acuerdos, cada pantalla termina con un azul distinto, botones de diferente tamaño y menús que se comportan de otro modo. Eso rompe la consistencia (`usabilidad-heuristicas-de-nielsen/`) y hace perder tiempo rehaciendo lo que ya existe. Un **sistema de diseño** es el conjunto de decisiones, componentes y reglas compartidas que evita esa deriva.

## 2. De qué se compone

- **Principios**: la filosofía del producto ("claro antes que ingenioso").
- **Tokens de diseño**: valores con nombre que guardan decisiones básicas: colores, tamaños de texto, espacios, bordes, sombras. En lugar de usar `#1A73E8` en cien lugares, se define un token como `color-accion-primaria`. Si la marca cambia, se modifica en un solo sitio. Los tokens nombran por función (`color-error`) y no por aspecto (`rojo-claro`).
- **Componentes**: piezas reutilizables como botones, campos, tarjetas, menús y alertas. Cada uno define sus variantes y sus estados (normal, foco, desactivado, error).
- **Patrones**: combinaciones de componentes para resolver situaciones comunes (formulario de inicio de sesión, tabla con filtros).
- **Documentación**: cuándo usar cada pieza, cuándo no, ejemplos y reglas de accesibilidad.

## 3. Atomic Design

Brad Frost propuso pensar la interfaz como una construcción por niveles. Los **átomos** son un botón, una etiqueta, un campo. Las **moléculas** son un campo con su etiqueta y mensaje de ayuda. Los **organismos** son un encabezado con logotipo, menú y buscador. Después vienen las **plantillas** y las **páginas**. No es una regla rígida sino una forma de ordenar lo simple y lo compuesto.

## 4. Beneficios y costos

Beneficios: consistencia, velocidad (no se rediseña lo que existe), mejor comunicación entre diseño y desarrollo, accesibilidad incorporada una vez y heredada por todos, y calidad más pareja.

Costos y riesgos: requiere inversión inicial y mantenimiento permanente; si no se actualiza, se vuelve un museo que nadie usa; si es demasiado rígido, frena la innovación. Un sistema de diseño necesita responsables y un proceso para proponer cambios.

## 5. Ejemplos públicos

Muchas organizaciones publican sus sistemas, como Material Design (Google), Carbon (IBM) o los sistemas de diseño de gobiernos. Sirven para estudiar cómo se documentan los componentes. Hay que tener presente que cada uno responde a las necesidades de su producto, y copiarlo tal cual rara vez es lo adecuado.

## N. Conexión con lo que sigue

El sistema de diseño es el lugar donde se aplican las decisiones de `tipografia-en-interfaces/`, `color-en-interfaces/` y `diseno-responsive-y-mobile-first/`, y el insumo de trabajo de los equipos que siguen el `diseno-centrado-en-el-usuario-flujo-de-trabajo/`.
