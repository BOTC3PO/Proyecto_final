# Informática — Comunicación entre procesos (teoria)

> Tema del MAPA: `SO1C` (`troncos.md`). Depende de del nodo `SO1` de `troncos.md` (sin carpeta propia todavía) (ver `../dependencias.md`). Generado con qwen/qwen3.6-35b-a3b, revisión pendiente antes de considerarse final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## ¿Qué es la comunicación entre procesos?

En el funcionamiento interno de una computadora, rara vez un solo programa hace todo el trabajo en soledad. La comunicación entre procesos, a menudo abreviada como IPC (*Inter-Process Communication*), es el conjunto de mecanismos que permiten que dos o más procesos independientes intercambien información o modifiquen el comportamiento del otro. Para entenderlo, imagina que cada aplicación que abres en tu computadora (el navegador, el reproductor de música, el editor de texto) es un proceso separado. Aunque parecen funcionar al mismo tiempo, el sistema operativo los gestiona de manera aislada por seguridad y estabilidad; si uno falla, no necesariamente se cae el resto. Sin embargo, para que funcionen como un sistema integrado, necesitan "hablarse".

Esta comunicación es fundamental porque permite dividir tareas complejas en partes más pequeñas y manejables. En lugar de escribir un único programa gigante que haga todo, los desarrolladores crean varios procesos pequeños que se comunican entre sí. Esto mejora la eficiencia, la seguridad y la capacidad de mantenimiento del software. Por ejemplo, cuando copias un texto en un documento y lo pegas en otro, hay una comunicación constante entre el proceso del editor de texto y el sistema de almacenamiento temporal (portapapeles) para transferir esos datos correctamente.

## Mecanismos de intercambio: Mensajes y Memoria Compartida

Existen principalmente dos formas en las que los procesos se comunican: a través del envío de mensajes o mediante el uso de memoria compartida. La primera opción, el intercambio de mensajes, es como enviar cartas: un proceso envía un paquete de datos a otro a través de un canal definido por el sistema operativo. Este método es más seguro porque los procesos no necesitan conocer los detalles internos del otro, pero puede ser más lento debido a la sobrecarga de copiar los datos de un espacio de memoria a otro. Es ideal para sistemas distribuidos o cuando la seguridad es prioritaria.

Por otro lado, la memoria compartida funciona como una mesa de trabajo común. El sistema operativo asigna una región de memoria que es accesible por varios procesos simultáneamente. Cuando un proceso escribe datos en esa zona, otro puede leerlos casi instantáneamente sin necesidad de copias adicionales. Esto hace que sea mucho más rápido y eficiente para grandes volúmenes de datos, como en aplicaciones gráficas o bases de datos. Sin embargo, introduce un desafío importante: la sincronización. Si dos procesos intentan escribir en el mismo lugar al mismo tiempo, pueden ocurrir errores o corrupción de datos, por lo que se necesitan mecanismos de control estrictos.

## Sincronización y ejemplos en el entorno cotidiano

Para que la comunicación sea efectiva, los procesos deben coordinarse. Si uno intenta leer datos antes de que el otro haya terminado de escribirlos, el resultado será erróneo. Por eso, la IPC va de la mano con conceptos de sincronización, como semáforos o mutex, que actúan como guardias que aseguran que solo un proceso acceda a un recurso crítico a la vez.

Un ejemplo claro de esto en la vida diaria argentina es el uso de un servidor web local para desarrollar páginas web. Imagina que estás programando un sitio para una escuela secundaria en Buenos Aires. Tu código HTML, las hojas de estilo y el servidor que ejecuta el backend (como Apache o Nginx) son procesos distintos. El navegador que usás para ver la página se comunica con el servidor mediante peticiones HTTP. El servidor procesa la solicitud, accede a la base de datos (otro proceso) y devuelve la información. Todo este flujo depende de una IPC robusta y sincronizada para que, cuando cargues la página, los datos se muestren correctamente y sin conflictos.
