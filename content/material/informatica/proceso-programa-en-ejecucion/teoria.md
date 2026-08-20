# Informática — Proceso programa en ejecución (teoría)

> Tema del MAPA: `informatica/proceso-programa-en-ejecucion`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explica la diferencia entre un programa y un proceso, y cómo los sistemas operativos gestionan la ejecución.

---

## 1. ¿Qué es un proceso?

Un **proceso** es una instancia activa de un programa en ejecución dentro del ordenador. Mientras que un programa es simplemente un conjunto de instrucciones almacenadas en el disco (como un archivo `.exe` o `.py`), el proceso es lo que ocurre cuando ese programa se carga en la memoria RAM y comienza a ser ejecutado por la CPU.

Para entenderlo, piensa en un libro: es un objeto estático. Pero si estás leyéndolo ahora mismo, esa acción de leer (el acto de abrir el libro, darle vuelta a las páginas, etc.) sería el equivalente al proceso. El programa es lo que se escribe; el proceso es lo que ocurre cuando se pone en marcha.

## 2. La diferencia clave entre programa y proceso

La principal distinción radica en su **estado de actividad**. Un programa es pasivo: vive en el disco, sin consumir recursos del sistema mientras no se ejecuta. En cambio, un proceso consume recursos como memoria RAM, tiempo de CPU y espacio en disco temporal (swap), y tiene un estado dinámico que cambia conforme avanza su ejecución.

Por ejemplo:
- El archivo `navegador.exe` guardado en el disco es un **programa**.
- La ventana del navegador abierta, con todas sus pestañas y extensiones activas, es un **proceso**.

El proceso incluye no solo las instrucciones del programa, sino también su contexto: qué datos están siendo procesados, en qué punto de la ejecución se encuentra (contador de programa), y cuántos recursos está usando.

## 3. ¿Qué componentes tiene un proceso?

Un proceso no es solo el código del programa. Contiene varios elementos que le dan vida a la ejecución:
- **Código del programa**: Las instrucciones que definen qué debe hacer.
- **Estado de los registros de la CPU**: Datos como el contador de programa, punteros de pila y registros temporales que guardan el progreso actual.
- **Memoria asignada**: El espacio en RAM donde se carga el programa durante su ejecución, incluyendo variables, parámetros y datos temporales.
- **Recursos externos**: Accesos a archivos, dispositivos (como teclado o mouse) o conexiones de red que el proceso necesita.

Estos componentes permiten al sistema operativo gestionar múltiples procesos simultáneamente, sin que se interfieran entre sí. Por ejemplo, si abres varias aplicaciones en tu computadora, cada una tiene su propio espacio de memoria y contexto de ejecución.

## 4. ¿Cómo lo gestiona el sistema operativo?

El sistema operativo es responsable de crear, controlar y finalizar procesos. Cuando un usuario abre un programa (como Word o Spotify), el SO carga ese programa en la memoria como un proceso, asigna recursos y lo pone en cola para que la CPU lo ejecute.

Para manejar múltiples tareas, el SO utiliza un mecanismo llamado **planificación de procesos**, donde decide cuándo darle turnos a cada proceso. Esto implica pausar un proceso (guardando su estado) y reanudarlo más tarde (recuperando ese estado), algo que se llama "context switch".

Además, el SO supervisa los recursos: si un proceso consume demasiada memoria o no responde, puede detenerlo para evitar que afecte al sistema.

## 5. Ejemplos de procesos en la vida real

Imagina que estás trabajando con una computadora:
- Cuando abres tu navegador, se crea un proceso para él.
- Si abres tres pestañas del mismo navegador, cada una puede ser un subproceso (o parte de un solo proceso).
- Si ejecutas una aplicación de edición de video y un juego al mismo tiempo, están corriendo como procesos independientes.

Estos procesos compiten por recursos, pero el sistema operativo los organiza para que todo funcione de forma ordenada. Si uno se bloquea o falla, no afecta necesariamente a los demás.

---

## N. Conexión con lo que sigue

Este tema es la base para entender cómo los sistemas operativos manejan tareas en segundo plano y priorizan procesos, temas desarrollados en gestion de procesos.