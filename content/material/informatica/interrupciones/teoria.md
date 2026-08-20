# Informática — Interrupciones (teoria)

> Tema del MAPA: `SO3B` (`troncos.md`). Depende de del nodo `SO3` de `troncos.md` (sin carpeta propia todavía) (ver `../dependencias.md`). Generado con qwen/qwen3.6-35b-a3b, revisión pendiente antes de considerarse final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## ¿Qué son las interrupciones?

En el corazón de cualquier computadora, el procesador (o CPU) actúa como el cerebro que ejecuta instrucciones una tras otra. Sin embargo, si el procesador tuviera que esperar pasivamente a que cada dispositivo externo —como un teclado, un mouse o un disco duro— esté listo para enviar datos, el tiempo se desperdiciaría enormemente. Aquí es donde entran en juego las **interrupciones**. Una interrupción es, básicamente, una señal de hardware o software que detiene momentáneamente la ejecución actual del procesador para atender una prioridad más urgente.

Imagina que estás leyendo un libro y de repente suena tu teléfono. Dejas de leer, contestas la llamada (que es la prioridad inmediata) y luego vuelves a leer exactamente donde te quedaste. Eso es lo que hace una interrupción: pausa la tarea actual, atiende la solicitud del dispositivo y luego retoma el flujo original. Sin este mecanismo, las computadoras serían extremadamente lentas e ineficientes, ya que tendrían que estar "preguntando" constantemente a los dispositivos si tienen algo que decir.

## El proceso de atención a la interrupción

Para que todo funcione sin errores, el sistema operativo y el hardware deben coordinarse mediante un protocolo estricto. Cuando un dispositivo envía una señal de interrupción, el procesador termina de ejecutar la instrucción actual por seguridad y luego busca una dirección de memoria especial llamada **Vector de Interrupción**. Esta dirección apunta a un pequeño programa específico conocido como **Controlador de Interrupción** (o *ISR*, por sus siglas en inglés).

El controlador de interrupción es responsable de identificar qué dispositivo solicitó la atención y guardar el estado actual del procesador (como los valores de los registros) en la pila de memoria. Esto es crucial para garantizar que, cuando se termine de atender la interrupción, el programa principal no note que hubo una pausa y continúe como si nada hubiera pasado. Una vez que el controlador termina su trabajo, indica al procesador que puede restaurar el estado guardado y volver a la tarea interrumpida.

## Tipos y relevancia en la informática moderna

Existen principalmente dos tipos de interrupciones: las de **hardware** y las de **software**. Las primeras son generadas por dispositivos físicos externos, como el clic de un botón del mouse o la llegada de datos por una red. Las segundas, a menudo llamadas *traps* o excepciones, son generadas por el propio programa o por el sistema operativo, generalmente para reportar errores (como dividir por cero) o solicitar servicios del sistema.

La importancia de este tema radica en la eficiencia. Gracias a las interrupciones, tu computadora puede responder al movimiento del mouse mientras descarga un archivo grande desde internet y reproduce música al mismo tiempo. Sin ellas, tendrías que esperar a que una tarea termine completamente para que la computadora reaccione a la siguiente acción, haciendo imposible el uso multitarea fluido que damos por sentado hoy en día.

## Ejemplo práctico: Escribir en un documento

Para visualizarlo mejor, pensemos en cuando escribís un trabajo en Google Docs o Word. Cada vez que presionás una tecla, el teclado envía una interrupión al procesador. El sistema operativo recibe esa señal, detiene brevemente lo que estaba haciendo el procesador, lee el carácter presionado y lo envía al programa de texto.

En el contexto argentino, esto es vital para el uso de herramientas educativas en la nube. Cuando un estudiante en una escuela pública de Buenos Aires o Córdoba está cargando una tarea pesada en la plataforma de su institución, el sistema no congela la pantalla. Las interrupciones permiten que el teclado siga respondiendo, el cursor siga moviéndose y otros procesos del fondo se ejecuten, garantizando una experiencia de usuario fluida incluso con recursos limitados.
