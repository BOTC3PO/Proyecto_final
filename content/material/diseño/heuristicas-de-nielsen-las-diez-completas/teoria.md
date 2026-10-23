# UX y diseño — Las diez heurísticas de Nielsen completas (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `diseño/heuristicas-de-nielsen-las-diez-completas`. Depende de `../usabilidad-heuristicas-de-nielsen/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Completa la lista de las diez heurísticas de usabilidad y muestra cómo se usan para evaluar una pantalla concreta.

---

## 1. La lista completa

`usabilidad-heuristicas-de-nielsen/` presentó cuatro ideas: visibilidad del estado, prevención y recuperación de errores, y consistencia. La lista completa de Jakob Nielsen tiene diez heurísticas, y son las que el Nielsen Norman Group sigue publicando con esos nombres. Surgieron del trabajo de Rolf Molich y Jakob Nielsen en 1990 y se refinaron en 1994 con un análisis de cientos de problemas de usabilidad reales. Desde entonces el listado casi no cambió, lo que muestra que describen comportamientos humanos y no modas tecnológicas.

Las diez son: visibilidad del estado del sistema; correspondencia entre el sistema y el mundo real; control y libertad del usuario; consistencia y estándares; prevención de errores. Siguen: reconocer en lugar de recordar; flexibilidad y eficiencia de uso; diseño estético y minimalista; ayudar a reconocer, diagnosticar y recuperarse de los errores; y ayuda y documentación.

## 2. Las seis que faltaban

**Correspondencia con el mundo real.** La interfaz habla el idioma de la persona usuaria, con palabras y metáforas conocidas, y no con jerga interna. Un botón "Enviar pedido" se entiende; "Ejecutar transacción" no tanto. Los íconos de carpeta o papelera funcionan porque remiten a objetos físicos.

**Control y libertad del usuario.** Las personas se equivocan y necesitan una "salida de emergencia" clara: deshacer, rehacer, cancelar, volver. Un asistente de compra que no deja retroceder un paso viola esta heurística.

**Reconocer en lugar de recordar.** Es más fácil elegir de una lista visible que acordarse de un comando. Por eso los menús muestran opciones y los formularios recuerdan lo que ya se ingresó. Reduce la carga de memoria.

**Flexibilidad y eficiencia de uso.** Una buena interfaz sirve al principiante y al experto: atajos de teclado, acciones frecuentes a mano, posibilidad de personalizar. Lo importante es que los atajos no estorben a quien no los conoce.

**Diseño estético y minimalista.** No significa "lindo" sino sin ruido: cada elemento extra compite con lo importante y le resta visibilidad. Se muestra solo lo que se necesita en ese momento.

**Ayuda y documentación.** Lo ideal es que no haga falta, pero cuando hace falta debe ser fácil de encontrar, centrada en la tarea y breve.

## 3. Cómo se usa como herramienta de evaluación

Una evaluación heurística consiste en recorrer la interfaz con la lista en la mano y anotar cada punto donde una heurística se incumple. Conviene que la hagan varias personas por separado y después junten los resultados, porque cada evaluador detecta problemas distintos. Cada hallazgo se describe con la pantalla, la heurística violada y una frase concreta del tipo "no hay forma de cancelar la subida de un archivo".

Ejemplo: una app de turnos médicos que muestra el mensaje "Error 403" viola la heurística de ayudar a recuperarse de los errores, porque no explica qué pasó ni cómo seguir. También viola la de correspondencia con el mundo real, porque usa un código técnico.

## 4. Límites

Las heurísticas son orientaciones, no leyes: dos evaluadores pueden discrepar, y a veces dos heurísticas chocan (la flexibilidad puede agregar elementos que perjudican el minimalismo). Detectan problemas probables, pero no reemplazan las pruebas con usuarios reales, que muestran problemas que el equipo no imagina.

## N. Conexión con lo que sigue

Este tema es la base de `evaluacion-heuristica-y-metodos-sin-usuarios/`, donde se aprende a puntuar la gravedad de cada hallazgo.
