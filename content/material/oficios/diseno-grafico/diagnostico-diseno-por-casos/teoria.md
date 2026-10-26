# Diseño gráfico — Diagnóstico de diseño por casos (teoria)

> Tema de los finales de ruta de `oficios-orientacion-vocacional-PLANIFICACION.md`. Depende de los temas anteriores de la rama (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. El método de diagnóstico

Un problema de diseño casi siempre tiene una causa que se puede encontrar. En lugar de cambiar colores y tamaños al azar, el método es: describir el síntoma con precisión, ubicar en qué etapa pudo originarse (concepto, tipografía, color, composición, producción), comprobar con una prueba sencilla y recién entonces corregir. Muchos defectos se detectan mirando la pieza en las condiciones reales de uso y no en el entorno cómodo del diseñador.

Cada caso que sigue presenta un síntoma típico, las causas más probables, cómo verificarlas y qué hacer.

## 2. Caso 1: el logo no escala

Síntoma: el logo se ve bien en grande pero en un ícono pequeño o en una etiqueta se vuelve una mancha ilegible. Causas probables: tiene demasiados detalles, líneas muy finas, textos muy pequeños o degradados que no resisten la reducción. Otra causa es que se haya diseñado como imagen de píxeles y no como vector, de modo que al agrandarlo se pixela.

Verificación: reducir el logo al tamaño mínimo de uso y verlo en blanco y negro. Solución: simplificar el trazo, engrosar líneas finas, preparar una versión reducida sin el texto secundario y entregar los archivos en formato vectorial. Se documenta el tamaño mínimo en el manual de marca.

## 3. Caso 2: el texto es ilegible

Síntoma: los clientes se quejan de que no se lee un cartel o una pantalla. Causas probables: contraste insuficiente entre el texto y el fondo, tamaño demasiado chico para la distancia de lectura, una tipografía decorativa en un texto largo, líneas muy largas o interlineado ajustado, o texto sobre una imagen con zonas claras y oscuras.

Verificación: medir la razón de contraste con una herramienta, imprimir o mostrar la pieza al tamaño real y probar a la distancia de uso. Solución: aumentar el contraste, oscurecer o aplicar una capa sobre la imagen para sostener el texto, subir el tamaño, simplificar la tipografía y ajustar el ancho de la línea y el interlineado.

## 4. Caso 3: lo impreso sale con otros colores

Síntoma: el color impreso difiere mucho del que se veía en pantalla, o dos piezas de la misma marca salen con tonos distintos. Causas probables: diseño en RGB convertido sin revisión a CMYK, colores fuera de la gama imprimible, monitor sin calibrar, papeles distintos, o falta de una prueba de color. Un color de marca que debe ser exacto quizás requería una tinta plana.

Verificación: convertir a CMYK con el perfil indicado y comparar, revisar los valores de cada color y consultar con la imprenta qué papel e impresión usan. Solución: definir los colores de marca directamente en CMYK o como tinta plana, pedir prueba antes de imprimir tirajes grandes y registrar los valores en el manual.

## 5. Caso 4: bordes blancos, imágenes pixeladas y textos cortados

Síntoma: en la pieza impresa aparece un filo blanco en el borde, una imagen se ve borrosa o un texto quedó cortado. Causas: falta de sangrado, imágenes de baja resolución o ampliadas, y textos colocados fuera del margen de seguridad. Verificación: abrir el PDF final y comprobar el sangrado, la resolución efectiva de las imágenes y la posición de los textos con respecto al corte.

Solución: extender los fondos hasta el sangrado, reemplazar las imágenes por versiones de 300 ppp al tamaño final o usar vectores, y mover los textos hacia adentro. Y se hace un preflight antes de enviar. Es el tipo de error que se evita con una lista de control.

## 6. Caso 5: el producto digital se ve desprolijo

Síntoma: las pantallas de una aplicación tienen botones con distintos tamaños, colores parecidos pero no iguales y espacios irregulares. Causas probables: no hay un sistema de diseño, cada persona diseña desde cero, o los componentes se copian y se modifican a mano. Verificación: listar todas las variantes de botón y de color que existen y contarlas.

Solución: definir tokens de color, tipografía y espaciado, convertir los elementos repetidos en componentes con variantes y estados, documentar su uso y revisar las pantallas existentes para reemplazar las piezas sueltas. El cierre de la ruta es entender que los problemas de diseño son sistemáticos: se resuelven con criterios, mediciones y sistemas, no con retoques de gusto.
