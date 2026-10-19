# Dibujo técnico — Tipos de línea, formatos y rótulo (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `dibujo-tecnico/tipos-de-linea-formatos-y-rotulo`. Depende de `../instrumentos-de-dibujo-y-trazos-basicos/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — El idioma de las líneas, los tamaños de papel y la información que lleva todo plano.

---

## 1. Normalizar para entenderse

Un plano lo interpretan personas que no lo dibujaron. Para que todos lean lo mismo, el dibujo técnico usa convenciones normalizadas: qué significa cada tipo de línea, qué tamaños de papel se emplean y qué datos lleva el rótulo. En la Argentina estas convenciones las fijan las normas IRAM (por ejemplo IRAM 4502 para las líneas, IRAM 4504 para los formatos y su plegado, e IRAM 4508 para el rótulo y la lista de materiales, según figuran en los programas de las cátedras de ingeniería); a nivel internacional las armoniza la ISO. Los números exactos y sus versiones deben consultarse en la edición vigente.

## 2. Tipos de línea

Cada línea tiene un trazo (forma) y un grosor (espesor) que le dan significado:

- **Continua gruesa**: contornos y aristas visibles de la pieza.
- **Continua fina**: líneas de cota, líneas auxiliares de cota, rayado de cortes y líneas de referencia.
- **De trazos (discontinua) fina o media**: contornos y aristas ocultos, es decir, lo que no se ve desde esa vista.
- **De trazo y punto (mixta) fina**: ejes de simetría y centros de circunferencias y agujeros.
- **De trazo y punto, gruesa en los extremos**: planos de corte.
- **Continua fina ondulada o en zigzag**: interrupciones, para cortar una pieza larga en el dibujo.

La regla de oro es la jerarquía: lo visible destaca (línea gruesa) y lo auxiliar queda en un segundo plano (línea fina). Una proporción habitual entre línea gruesa y fina es de 2 a 1.

## 3. Formatos de papel

El sistema internacional de formatos serie A parte del **A0**, una hoja de 1 m² de superficie con lados en proporción 1 : √2 (aproximadamente 841 × 1189 mm). Cada formato siguiente se obtiene cortando el anterior por la mitad del lado largo: A1 mide 594 × 841 mm, A2 420 × 594, A3 297 × 420 y **A4 210 × 297 mm**. La relación 1 : √2 se mantiene al doblar, de modo que todos los formatos son semejantes entre sí y se pueden reducir o ampliar sin deformar.

Cada hoja tiene un **margen** y, en general, un recuadro que delimita la zona de dibujo. Los planos grandes se **pliegan** hasta el tamaño A4 para archivarlos, de modo que el rótulo quede visible.

## 4. El rótulo (cajetín)

El rótulo es el recuadro, normalmente en la esquina inferior derecha, que identifica el plano. Suele incluir: título del plano, nombre o número de pieza, quién lo dibujó y revisó, fechas, escala, material, unidades, sistema de proyección usado, número de plano y de hoja, y la empresa o institución. Datos incompletos son una causa común de errores en fabricación.

## 5. Lista de piezas

En los planos de conjunto (`interpretar-planos-de-piezas-y-conjuntos/`) se agrega una **lista de piezas** (o de materiales): una tabla que numera cada componente y consigna su nombre, cantidad, material y a veces la norma o el plano de detalle. Cada pieza del dibujo lleva un número que remite a esa lista.

## 6. Letras y números

El rotulado también se normaliza (IRAM 4503): letras y cifras de trazo uniforme, altura proporcionada y claridad. Una letra desprolija puede confundirse (un 1 con un 7).

## N. Conexión con lo que sigue

Estas convenciones se usan en todos los temas siguientes: `cortes-y-secciones/`, `dibujo-arquitectonico-plantas-cortes-y-fachadas/` y `dibujo-electrico-y-esquemas-de-instalaciones/`.
