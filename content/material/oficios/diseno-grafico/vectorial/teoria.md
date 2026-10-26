# Diseño gráfico — Gráficos vectoriales (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../edicion-de-imagen/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/diseno-grafico/vectorial/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es un gráfico vectorial

Un **gráfico vectorial** no guarda píxeles: guarda **fórmulas matemáticas** que describen **formas** (puntos, líneas, curvas, rellenos). Por eso se puede **ampliar sin perder calidad**: el programa **vuelve a calcular** el dibujo en cualquier tamaño. Un logotipo para un botón de 20 píxeles puede imprimirse en un cartel de 10 metros con **bordes siempre nítidos**.

| | Mapa de bits (raster) | Vectorial |
|:--|:--|:--|
| Formado por | píxeles | trazados y formas |
| Al ampliar | se **pixela** | **no** pierde calidad |
| Ideal para | **fotos** | **logos, íconos, ilustraciones, tipografías** |
| Peso | crece con la resolución | suele ser **liviano** (con pocas formas) |
| Formatos | JPG, PNG, WebP | **SVG**, AI, EPS, PDF |

Programas: **Inkscape** (libre), **Illustrator**, **Affinity Designer**, **Figma** (también vectorial).

---

## 2. Trazados, nodos y curvas

Un **trazado** (*path*) es una línea formada por **nodos** (*puntos de ancla*) unidos por **segmentos** (rectos o curvos). Las curvas son **curvas de Bézier**: cada nodo tiene **manijas** (*handles*) que controlan **la dirección y la curvatura**.

- **Herramienta pluma** (*pen*): hace clic para nodos rectos; **hacer clic y arrastrar** para crear una curva.
- **Selección directa:** mover nodos y manijas.
- **Menos nodos = curvas más suaves** y archivo más liviano. Se coloca un nodo en los **extremos** y en los **cambios de dirección**.
- Un trazado puede ser **abierto** (una línea) o **cerrado** (una forma).

---

## 3. Relleno, trazo y color

- **Relleno** (*fill*): el color del interior (sólido, degradado o patrón).
- **Trazo** (*stroke*): el contorno, con **grosor**, **extremos** (redondeados o planos), **esquinas** y **guiones**.
- **Degradados:** lineales y radiales.
- **Transparencia** (opacidad).

---

## 4. Formas y combinaciones

Con **formas básicas** (rectángulo, elipse, polígono, estrella) y **operaciones booleanas** se construyen dibujos complejos:

| Operación | Resultado |
|:--|:--|
| **Unión** | una sola forma que cubre ambas |
| **Resta (diferencia)** | quita la forma de arriba a la de abajo |
| **Intersección** | solo la parte en común |
| **Exclusión** | todo menos la parte en común |

También se puede **alinear** y **distribuir** objetos, **agrupar**, **ordenar** (adelante/atrás) y **duplicar con transformación**.

---

## 5. Texto

Las **fuentes** son vectores. Para **enviar un logotipo** a una imprenta, el texto se **convierte a curvas** (o **contornos**): así no depende de que la otra computadora tenga la **misma tipografía**. Después de convertirlo, **ya no se puede editar** como texto: se conserva una **copia editable**.

---

## 6. Vectorizar una imagen

**Vectorizar** (*trazar mapa de bits*) convierte una imagen de píxeles en trazados. Funciona **bien** con dibujos simples de pocos colores y **mal** con fotos. Casi siempre **hay que limpiar** el resultado (quitar nodos de más).

---

## 7. Un buen logotipo

- **Simple** y **legible** a **tamaño chico**.
- **Pocos colores** y que funcione en **blanco y negro**.
- Versiones: **horizontal**, **vertical**, **ícono**, **positivo** y **negativo**.
- **Espacio de protección** alrededor.
- **Original** (no copiar el de otra marca).
- Se entrega en **SVG/PDF/EPS** y en **PNG** de varios tamaños.

---

## 8. Exportación

- **SVG** para la **web** (se puede **editar** con código y animar).
- **PDF/EPS** para impresión.
- **PNG** con **transparencia** para usos varios.
- Al exportar, **comprobar** que se vea igual y **optimizar** (borrar objetos ocultos y nodos de más).
