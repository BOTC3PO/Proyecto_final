# Backend — Asincronía y colas de trabajo (teoria)

> Tema de los finales de ruta de `oficios-orientacion-vocacional-PLANIFICACION.md`. Depende de `../arquitectura-de-servidores/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Por qué no hacerlo todo dentro de la petición

Cuando alguien envía una petición, espera la respuesta. Si el servidor tiene que hacer algo lento, como enviar un correo, generar un informe, redimensionar una imagen o llamar a un servicio externo, la persona queda mirando una pantalla de carga. Peor aún, si la tarea falla a mitad de camino, la petición entera falla y el trabajo se pierde.

La solución es separar lo que hay que responder ya de lo que se puede hacer después. El servidor responde enseguida que recibió el pedido y deja la tarea lenta para hacerla en segundo plano. Esa forma de trabajar se llama asincronía: la persona que pide no espera a que el trabajo termine.

## 2. Colas de trabajo

Una cola de trabajo es una lista ordenada de tareas pendientes. Un productor, normalmente el servidor web, agrega una tarea a la cola con los datos necesarios. Uno o varios trabajadores (workers), que son procesos independientes, toman las tareas de a una y las ejecutan. Si hay muchas tareas, se agregan más trabajadores; si hay pocas, se reducen.

La cola funciona como amortiguador. Si de golpe llegan miles de pedidos, el servidor web no se satura: las tareas se acumulan en la cola y se van procesando a su ritmo. También desacopla las partes del sistema: el servidor web puede estar disponible aunque el servicio de correo esté caído, porque las tareas esperan en la cola hasta que se pueda enviarlas.

## 3. Reintentos

Las tareas fallan por motivos pasajeros: un servicio externo no responde, la red se corta, la base está ocupada. Por eso las colas permiten reintentar. Pero reintentar inmediatamente y sin límite puede empeorar las cosas, porque se golpea otra vez a un servicio que ya estaba con problemas.

La práctica habitual es el reintento con espera creciente, llamado backoff exponencial: se espera un poco antes del segundo intento, más antes del tercero y así. Se fija un máximo de intentos. Si una tarea sigue fallando, se envía a una cola de tareas muertas (dead letter queue), donde queda guardada para que una persona la revise, en lugar de reintentarse para siempre.

## 4. Idempotencia: poder repetir sin dañar

Como las tareas se pueden reintentar, o incluso entregarse dos veces, es fundamental que ejecutarlas más de una vez no cause daños. Una operación es idempotente si repetirla produce el mismo resultado que hacerla una sola vez. Establecer el estado de un pedido como pagado es idempotente; sumar 100 al saldo de una cuenta no lo es: si se repite, se suma dos veces.

Para volver idempotente una operación se usa una clave de idempotencia, un identificador único de la operación. Antes de ejecutar, el sistema comprueba si ya procesó esa clave; si es así, no hace nada. Es la defensa contra cobrar dos veces un pago o enviar dos veces el mismo correo.

## 5. Cuándo conviene y qué se complica

Conviene usar tareas en segundo plano para envío de correos y notificaciones, procesamiento de archivos, informes pesados, sincronización con otros sistemas y todo lo que no necesita respuesta inmediata. No conviene para lo que el cliente necesita saber ya, como si una contraseña es correcta.

La asincronía agrega complejidad: hay que saber qué pasó con la tarea. Por eso se ofrece una forma de consultar el estado, por ejemplo un identificador de tarea con estados como pendiente, en proceso, terminada o fallida. Y hay que monitorear la cola: si crece sin parar, los trabajadores no dan abasto o están fallando.
