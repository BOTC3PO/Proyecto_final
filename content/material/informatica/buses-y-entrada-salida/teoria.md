# Informática — Buses y entrada/salida (teoría)

> Tema del MAPA: `informatica/buses-y-entrada-salida`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría

**Presentación** — Explicación de los buses como canales de comunicación entre componentes y su rol en las operaciones de entrada/salida.

---

## 1. ¿Qué es un bus?

Un **bus** es una estructura física o lógica que permite la transferencia de datos, direcciones o señales de control entre distintos elementos del computador. No es un componente único, sino un conjunto de conexiones que actúan como vías para el intercambio de información. Por ejemplo, cuando el procesador debe enviar datos a una memoria o a un periférico (como una impresora), lo hace mediante estos canales.

Los buses pueden ser **paralelos** (múltiples líneas) o **seriales** (una línea que transmite secuencialmente). En los sistemas modernos, se usan principalmente buses seriales para reducir el tamaño y el consumo de energía, aunque algunos componentes aún dependen de buses paralelos.

---

## 2. Tipos de buses según su función

Existen tres tipos principales de buses en un sistema computacional:

### a) Bus de datos  
Transfiere **información real** (como números o caracteres) entre el procesador, la memoria y los periféricos. Su ancho (medido en bits) determina cuántos datos se pueden enviar al mismo tiempo.

### b) Bus de direcciones  
Indica a dónde va o desde dónde proviene la información. Por ejemplo, cuando el procesador quiere leer un dato de una ubicación específica en la memoria, envía la dirección por este bus.

### c) Bus de control  
Envía señales que coordinan las operaciones: indica si se está leyendo o escribiendo datos, cuándo un dispositivo está listo para recibir información, etc. Son como las "instrucciones" que mantienen sincronizado el sistema.

[IMAGEN: Diagrama comparando los tres tipos de buses con ejemplos de flujo de datos]

---

## 3. El ciclo de entrada/salida

La **comunicación entre el procesador y un periférico** (como un teclado o una impresora) sigue un proceso llamado *ciclo de E/S*. Este ciclo implica varios pasos:

1. **Solicitud**: El procesador envía una señal al dispositivo para indicar que quiere enviar o recibir datos.
2. **Preparación**: El periférico responde confirmando que está listo (por ejemplo, un teclado puede estar esperando a que se presione una tecla).
3. **Transferencia de datos**: A través del bus de datos, el procesador envía información al dispositivo o recibe datos de él.
4. **Finalización**: El proceso termina cuando la operación está completa, y el sistema vuelve a un estado de espera.

En operaciones de salida (como imprimir un documento), el procesador **envía** los datos al periférico. En entradas (como escribir en un teclado), el dispositivo **envía** la información al procesador.

---

## 4. Interrupciones y eficiencia

Cuando un dispositivo externo necesita atención inmediata (por ejemplo, un mouse que detecta movimiento), emite una **interrupción**, que detiene temporalmente lo que está haciendo el procesador para atender la solicitud. Esto evita que se pierda información crítica.

Para mejorar la eficiencia, algunos sistemas usan **DMA** (*Direct Memory Access*): permite que un periférico transfiera datos directamente a la memoria principal sin pasar por el procesador, liberando así su capacidad para otras tareas.

---

## 5. Conexión con lo que sigue

Este tema prepara para entender cómo los dispositivos externos interactúan con el sistema operativo y las aplicaciones, como se explica en sistema operativo y dispositivos.