# Backend — Diagnóstico de backend por casos (teoria)

> Tema de los finales de ruta de `oficios-orientacion-vocacional-PLANIFICACION.md`. Depende de `../autenticacion-y-autorizacion/` y de los temas anteriores de la rama (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. El método: síntoma, hipótesis, verificación

Diagnosticar un problema de backend no es probar cambios al azar. Es un método: primero se describe el síntoma con precisión, después se plantean hipótesis posibles, luego se verifica cada una con evidencia y recién al final se corrige. La evidencia sale de los registros, las métricas y la reproducción del problema. Cambiar algo sin entender la causa puede esconder el síntoma y dejar el problema latente.

Un buen punto de partida son tres preguntas: qué pasó exactamente, desde cuándo y qué cambió. Casi todos los problemas de producción empiezan después de un cambio: una versión nueva, una configuración, un aumento de tráfico, un servicio externo que se degradó.

## 2. Caso 1: un error 500 intermitente

Síntoma: algunas peticiones al mismo endpoint devuelven 500 y otras funcionan. Lo intermitente sugiere una causa que depende de las condiciones: una conexión a la base que se agota con mucho tráfico, una de varias instancias con una configuración distinta, un servicio externo que a veces falla, o un dato particular que rompe el código.

Verificación: buscar en los registros el identificador de las peticiones fallidas y ver qué tienen en común, como la instancia, el usuario, los datos enviados o la hora. Comparar con las que funcionaron. Si los errores aparecen en momentos de pico y mencionan el pool de conexiones, la hipótesis es el agotamiento del pool. Si siempre fallan con cierto dato, el problema está en la validación o en el manejo de ese caso.

## 3. Caso 2: un endpoint lento

Síntoma: una ruta que antes respondía rápido ahora tarda varios segundos. Las hipótesis típicas son una consulta que ya no usa un índice porque la tabla creció, el problema de las N+1 consultas, una llamada a un servicio externo lento, o un recurso saturado.

Verificación: medir dónde se va el tiempo. Los registros con duración por etapa o una herramienta de trazas muestran si la demora está en la base, en una llamada externa o en el procesamiento propio. Si es la base, se examina el plan de la consulta y los índices. Si es una llamada externa, se evalúa un tiempo máximo de espera y, cuando corresponde, pasar el trabajo a segundo plano.

## 4. Caso 3: un token que expira mal

Síntoma: las personas usuarias son desconectadas antes de lo previsto, o siguen entrando después de que su sesión debería haber vencido. Las hipótesis incluyen una diferencia de hora entre servidores, una duración de token mal configurada, un reloj desfasado, la zona horaria o un error al renovar el token.

Verificación: comparar la hora de emisión y de vencimiento del token con la hora del servidor, revisar la configuración de duración en cada entorno y confirmar cómo se renueva. Recordar que un token firmado solo vence cuando se cumple su plazo: si hace falta revocarlo antes, el sistema necesita una lista de bloqueo o sesiones del lado del servidor.

## 5. Caso 4: tareas que no se procesan

Síntoma: los correos de confirmación dejaron de salir, pero la aplicación parece funcionar. Hipótesis: los workers están caídos, la cola está llena, las tareas fallan siempre por el mismo motivo y terminaron en la cola de tareas muertas, o el servicio de correo cambió una credencial.

Verificación: mirar el tamaño de la cola y su tendencia, el estado de los workers y los errores recientes. Si la cola crece y los workers están vivos, revisar los errores de las tareas. Una vez corregido el motivo, las tareas guardadas pueden reprocesarse, siempre que sean idempotentes para no enviar duplicados.

## 6. Después de resolver

Resolver el incidente no es el final. Se documenta qué ocurrió, cuál fue la causa raíz, cómo se detectó y qué se hará para que no se repita: una alerta nueva, una validación, un índice, una prueba automatizada. Este tipo de revisión se hace sin buscar culpables sino aprendizajes. Es el cierre natural de la ruta de Backend: APIs, arquitectura, autenticación, datos, errores, registros y colas se juntan cuando algo falla y hay que entender por qué.
