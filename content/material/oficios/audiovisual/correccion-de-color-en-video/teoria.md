# Audiovisual — Corrección de color en video (teoria)

> Tema de los finales de ruta de `oficios-orientacion-vocacional-PLANIFICACION.md`. Depende de `../edicion-de-video/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Corregir no es lo mismo que estilizar

La corrección de color es el trabajo técnico de dejar la imagen en un punto de partida correcto: que el blanco se vea blanco, que no esté ni demasiado oscura ni quemada y que los planos de una misma escena parezcan tomados bajo la misma luz. La gradación o grading, en cambio, es la etapa creativa: dar una atmósfera cálida, fría, desaturada o contrastada para contar la historia. Primero se corrige y después se estiliza; si se invierte el orden, el estilo se apoya sobre errores.

Conviene trabajar con una pantalla razonablemente calibrada y en un ambiente de luz controlada, porque el ojo se adapta enseguida y las decisiones de color tomadas con una pantalla muy brillante o con un tinte fuerte se ven distintas en otros equipos.

## 2. Leer la imagen con las herramientas de medición

No hay que fiarse solo del ojo. Los editores ofrecen instrumentos que miden la imagen. El histograma muestra cuántos píxeles hay en cada nivel de brillo, de las sombras a las luces. El monitor de forma de onda (waveform) muestra el brillo a lo ancho del cuadro, y permite ver si hay zonas que tocan el máximo y pierden detalle, lo que se llama luces quemadas, o el mínimo y pierden detalle en las sombras. El vectorscopio muestra los matices y la saturación, y ayuda a detectar dominantes de color.

Con estos instrumentos se decide con datos: si la forma de onda se apila contra el techo, hay sobreexposición; si todo el contenido está comprimido en el medio, la imagen se ve plana y le falta contraste.

## 3. Exposición, contraste y balance de blancos

El primer ajuste suele ser la exposición, es decir la luminosidad general. Luego se ajusta el contraste y se definen los puntos de negro y de blanco, de modo que las sombras más oscuras lleguen cerca del mínimo y las luces más brillantes cerca del máximo sin recortarse. Una imagen sin un negro verdadero se ve lavada.

El balance de blancos corrige la temperatura de color y el tinte. La luz del día, la de una lámpara incandescente o la de un tubo fluorescente tienen colores distintos, y la cámara puede no haberlos compensado. Si algo que debería ser blanco o gris neutro se ve anaranjado o azulado, se toma una referencia neutra con el cuentagotas del editor o se corrige a mano el eje de temperatura y el de tinte. Los tonos de piel son otra referencia útil: deben verse naturales.

## 4. Curvas, ruedas de color y LUT

Las curvas permiten un control fino: se levanta o baja una parte de la gama tonal sin tocar el resto. Una curva en forma de S aumenta el contraste. Las ruedas de color (sombras, medios tonos y luces) permiten empujar cada zona hacia un color. Las herramientas de saturación modifican la intensidad de los colores sin cambiar su matiz.

Una LUT (tabla de consulta de color) es un archivo que transforma los colores de una manera predefinida. Se usa para convertir material grabado en perfiles logarítmicos, que parecen grises y planos pero conservan más información, a un aspecto normal, o para aplicar un estilo. Una LUT no corrige por sí sola un problema de exposición: se aplica sobre una base ya corregida, y suele regularse su intensidad.

## 5. Coherencia entre planos

En una escena con varios planos, aunque se hayan grabado con la misma cámara, pueden variar la exposición y el balance de blancos por cambios de luz o de ajustes. Si los planos saltan de color entre un corte y otro, la escena se siente rota. El trabajo consiste en igualarlos: se elige un plano de referencia y se ajustan los demás para que coincidan en brillo, temperatura y saturación, comparando con el vectorscopio y la forma de onda.

Por último, antes de exportar conviene revisar el resultado en distintos dispositivos y con las luces reales de uso. Un video corregido con criterio se ve bien en un celular, en una computadora y en un televisor, no solo en el monitor del editor.
