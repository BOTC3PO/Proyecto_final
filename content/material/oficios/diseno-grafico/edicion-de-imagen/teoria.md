# Diseño gráfico — Edición de imagen (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../../../informatica/unidades-almacenamiento/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/diseno-grafico/edicion-de-imagen/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. La imagen digital

Una **imagen de mapa de bits** (*raster*) es una **cuadrícula de píxeles**, cada uno con un color. Su calidad depende de la **resolución** (cuántos píxeles tiene). Al **ampliarla** mucho, se ve **pixelada**.

- **Resolución en píxeles:** ancho × alto (por ejemplo, 1920 × 1080).
- **Densidad:** **ppp / ppi** (píxeles por pulgada). Para **pantalla** alcanza con poca; para **imprimir** se usan unos **300 ppp** al tamaño final.
- **Modos de color:** **RGB** (rojo, verde, azul; para **pantallas**) y **CMYK** (cian, magenta, amarillo, negro; para **impresión**). **Escala de grises** y **color indexado** son otros modos.

**Formatos más comunes:**

| Formato | Característica | Para qué |
|:--|:--|:--|
| **JPEG** | compresión **con pérdida**, sin transparencia | fotos |
| **PNG** | sin pérdida, **con transparencia** | gráficos, capturas, logotipos |
| **WebP / AVIF** | modernos, livianos | web |
| **GIF** | pocos colores, animación simple | animaciones cortas |
| **TIFF** | sin pérdida, pesado | impresión, archivo |
| **RAW** | datos sin procesar del sensor | fotografía profesional |

Cada vez que se **guarda como JPEG** se pierde algo de calidad: se conserva un **original** y se **exporta** la copia.

---

## 2. Edición no destructiva

Editar **sin dañar el original**, para poder **volver atrás** o cambiar de idea:

- **Capas:** hojas superpuestas; cada elemento (fondo, texto, retoque) está en **su** capa.
- **Capas de ajuste** (niveles, curvas, brillo/contraste, tono/saturación): cambian el color **sin alterar los píxeles** y se pueden **editar o borrar** después.
- **Máscaras de capa:** **ocultan o muestran** partes de una capa con **blanco** (se ve) y **negro** (se oculta), sin borrar.
- **Objetos inteligentes** (*smart objects*): conservan el original al escalar o aplicar filtros.
- **Duplicar** la capa antes de un cambio fuerte.
- **Guardar el proyecto** en el formato del programa (PSD, XCF) y exportar copias.

---

## 3. Herramientas básicas

- **Recortar** y **enderezar** (regla del tercio para componer).
- **Selección** (rectangular, lazo, varita mágica, selección por color).
- **Pincel**, **borrador**, **clonar** y **corrección** (retoque de manchas).
- **Texto** y **formas**.
- **Transformar:** escalar (manteniendo la proporción con **Shift**), rotar, distorsionar.
- **Filtros:** desenfoque, nitidez, ruido.

Programas: **GIMP**, **Krita** (gratuitos y libres), **Photoshop**, **Affinity Photo**, y editores en línea.

---

## 4. Corrección de color y luz

1. **Exposición:** ajustar la luminosidad general.
2. **Contraste:** diferencia entre claros y oscuros.
3. **Balance de blancos:** que el blanco se vea blanco (sin dominante amarilla o azul).
4. **Saturación y vibrance:** intensidad de los colores, **sin exagerar**.
5. **Nitidez:** al final, y **con moderación**.

El **histograma** muestra la distribución de las luces: **sombras** a la izquierda y **luces** a la derecha. Un histograma **pegado a un extremo** indica **luces quemadas** o **sombras tapadas** (se pierde detalle).

---

## 5. Buenas prácticas

- **Trabajar con la mayor resolución** posible y **reducir al final**.
- **Respetar la proporción** al escalar (no deformar).
- **Nombrar las capas.**
- **Revisar** el resultado **al 100 %** y en distintos dispositivos.
- **Respetar los derechos:** usar imágenes **propias, con licencia o con permiso**; **no** manipular fotos de personas para engañar ni sin su consentimiento.
- **Optimizar** el peso para la web.
