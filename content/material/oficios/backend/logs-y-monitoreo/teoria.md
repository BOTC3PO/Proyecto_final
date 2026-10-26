# Backend — Logs y monitoreo (teoria)

> Tema de los finales de ruta de `oficios-orientacion-vocacional-PLANIFICACION.md`. Depende de `../arquitectura-de-servidores/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Por qué registrar lo que pasa

Un servidor en producción trabaja sin que nadie lo mire. Cuando algo falla, la única forma de saber qué pasó es haber dejado rastros. Los registros, o logs, son líneas de texto que el programa escribe a medida que trabaja: una petición que llegó, un error que ocurrió, una operación que tardó demasiado. Sin ellos, investigar una falla es adivinar.

El monitoreo va un paso más allá: en lugar de esperar a que alguien se queje, mide continuamente la salud del sistema y avisa cuando algo se sale de lo normal. Los logs cuentan qué pasó en un hecho puntual; las métricas cuentan cómo está el sistema en conjunto a lo largo del tiempo.

## 2. Niveles de log

Para no mezclar lo importante con lo anecdótico, cada mensaje tiene un nivel. De menor a mayor gravedad suelen ser: debug, para detalles útiles solo mientras se desarrolla; info, para eventos normales como el arranque del servidor; warn, para situaciones raras que todavía no son un error; y error, para fallas que impiden completar una operación. Algunos sistemas agregan un nivel crítico para fallas que comprometen todo el servicio.

En producción se configura un nivel mínimo, por ejemplo info, y los mensajes de debug no se escriben. Así se evita llenar el disco y encontrar lo importante resulta más fácil. Cuando hace falta investigar un problema puntual, se puede subir temporalmente el detalle.

## 3. Qué registrar y qué no

Un buen registro responde: cuándo, qué, dónde y quién. Incluye la fecha y hora con zona horaria, el nivel, un mensaje claro, un identificador de la petición para seguir su recorrido y datos de contexto como la ruta, el código de respuesta y el tiempo que tardó. Se prefiere el formato estructurado, por ejemplo JSON, porque las herramientas pueden filtrarlo y contarlo sin adivinar el texto.

Lo que nunca debe registrarse son datos sensibles: contraseñas, tokens, números de tarjeta, claves de acceso ni datos personales innecesarios. Un registro filtrado equivale a una filtración de datos. Tampoco conviene registrar sin criterio: cada línea cuesta almacenamiento y atención, y un exceso de mensajes oculta los importantes.

## 4. Métricas y las señales básicas

Las métricas son números medidos a lo largo del tiempo. Para un servicio web, las más útiles son la tasa de peticiones, la tasa de errores, la latencia, es decir cuánto tarda en responder, y la saturación, que indica qué parte de los recursos, como procesador, memoria, disco o conexiones a la base, está en uso. Con esas señales se ve rápido si el servicio funciona bien.

La latencia no se resume con un promedio, que esconde los casos lentos. Se miran percentiles: el p95 o el p99 indican el tiempo por debajo del cual responde el 95 o el 99 por ciento de las peticiones. Un promedio aceptable puede esconder que una parte de los usuarios espera mucho.

## 5. Alertas y chequeos de salud

Una alerta es un aviso automático cuando una métrica cruza un umbral, por ejemplo cuando los errores superan un porcentaje durante varios minutos. Las alertas útiles son accionables: quien las recibe sabe qué hacer. Demasiadas alertas producen fatiga y terminan ignoradas, por eso se alerta por los síntomas que afectan a las personas y no por cada variación pequeña.

Un chequeo de salud (health check) es una ruta simple, por ejemplo una que responde que el servicio está vivo y que puede llegar a la base de datos. Los balanceadores y las herramientas de despliegue la consultan para decidir si mandar tráfico a una instancia o reemplazarla. Este tema conecta con la rama DevOps, que se ocupa de automatizar el despliegue y la operación.
