# Informática — Segmentación (teoria)

> Tema del MAPA: `SO2b` (`troncos.md`). Depende de del nodo `SO2` de `troncos.md` (sin carpeta propia todavía) (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## ¿Qué es la segmentación y por qué es fundamental?

En el ámbito de los sistemas operativos, la **segmentación** es una técnica de gestión de memoria alternativa (y complementaria) a la paginación. Mientras que la paginación divide la memoria en bloques de **tamaño fijo** sin relación con la estructura lógica del programa, la segmentación divide el programa en bloques de **tamaño variable** que sí corresponden a unidades lógicas reales: el segmento de código, el segmento de datos, el segmento de pila (stack), las bibliotecas compartidas, etc. Cada segmento representa una parte con sentido propio del programa, no un trozo arbitrario.

Esta distinción importa porque refleja cómo un programador realmente organiza un programa: el código no crece ni se reduce igual que los datos, y la pila crece de manera dinámica según las llamadas a función activas en cada momento. La segmentación le permite al sistema operativo tratar a cada una de estas partes por separado, con sus propios permisos (por ejemplo, el segmento de código suele ser de solo lectura y ejecución, mientras que el de datos permite lectura y escritura pero no ejecución) — una protección que la paginación pura, al no conocer el significado de cada bloque, no ofrece de la misma manera.

## Cómo funciona el direccionamiento por segmentos

En un sistema con segmentación, una dirección de memoria no es un único número, sino un par: **(segmento, desplazamiento)**. El "segmento" identifica de qué parte lógica del programa se trata (código, datos, pila), y el "desplazamiento" indica la posición dentro de ese segmento. El sistema operativo mantiene una **tabla de segmentos** por cada proceso, que registra dónde empieza cada segmento en la memoria física y cuál es su tamaño (a diferencia de la paginación, donde todos los marcos tienen el mismo tamaño fijo).

Cuando un programa intenta acceder a una dirección, la unidad de gestión de memoria (MMU) verifica primero que el desplazamiento solicitado no supere el tamaño del segmento correspondiente — si lo hace, se genera un error de "violación de segmento" (el famoso *segmentation fault* que ven los programadores cuando su código intenta leer o escribir fuera de los límites permitidos). Esto es, de hecho, una ventaja de seguridad: la segmentación detecta accesos indebidos de una manera que la paginación pura no detecta tan naturalmente, porque cada segmento "sabe" cuál es su tamaño lógico real.

## Segmentación vs. paginación, y el esquema combinado

La segmentación pura tiene una desventaja frente a la paginación: como los segmentos son de tamaño variable, la memoria libre se va fragmentando en huecos de distintos tamaños (fragmentación externa) que a veces no alcanzan para el próximo segmento que hay que cargar, aunque la suma total de espacio libre sea suficiente. La paginación, en cambio, al usar bloques de tamaño fijo, no sufre ese problema (aunque tiene su propio costo menor, la fragmentación interna).

Por eso, la mayoría de los sistemas operativos modernos (como Linux o Windows) usan un esquema **combinado**: segmentación a nivel lógico (para separar código, datos y pila con sus permisos correspondientes) y paginación dentro de cada segmento (para asignar la memoria física de manera flexible y sin fragmentación externa). Esto se conoce como **segmentación paginada**, y es lo que efectivamente corre en la mayoría del hardware x86 moderno.

## Aplicación práctica: el segmentation fault

Cualquiera que haya programado en C o C++ conoce el temido mensaje "Segmentation fault (core dumped)". Este error ocurre, justamente, cuando un programa intenta acceder a una dirección de memoria fuera de los límites de su segmento asignado — por ejemplo, escribiendo más allá del final de un array, o siguiendo un puntero que apunta a una dirección inválida (un puntero nulo, o uno que nunca fue inicializado correctamente).

Cuando esto pasa, la MMU detecta la violación de segmento, interrumpe el proceso inmediatamente y notifica al sistema operativo, que a su vez termina el programa antes de que pueda dañar la memoria de otro proceso o del propio sistema operativo. Este mecanismo es una de las razones por las que un programa mal escrito puede fallar de forma controlada (un "crash" visible) en vez de corromper silenciosamente datos de otras aplicaciones que están corriendo al mismo tiempo en la computadora.
