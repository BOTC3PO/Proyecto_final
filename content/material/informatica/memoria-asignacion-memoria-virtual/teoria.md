# Informática — Memoria asignación memoria virtual (teoría)

> Tema del MAPA: `informatica/memoria-asignacion-memoria-virtual`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación de cómo los sistemas operativos gestionan la memoria mediante técnicas como la paginación y el uso del disco para ampliar la capacidad disponible.

---

## 1. ¿Qué es la memoria virtual?

La **memoria virtual** es un mecanismo que permite a los programas usar más espacio de almacenamiento de lo que hay en la RAM física. Para lograrlo, el sistema operativo combina parte de la memoria principal (RAM) con espacio en el disco duro o SSD. Esto se hace mediante un proceso llamado **paginación**, donde se divide la memoria en bloques pequeños (llamados páginas) que pueden moverse entre RAM y almacenamiento secundario según sea necesario.

Cuando un programa requiere más memoria de lo que hay disponible, el sistema operativo libera páginas no usadas de la RAM y las almacena temporalmente en el disco. Cuando esas páginas se necesitan nuevamente, se cargan de vuelta a la RAM, permitiendo así ejecutar tareas que exceden la capacidad física del equipo.

---

## 2. La MMU: puente entre direcciones lógicas y físicas

La **Unidad de Gestión de Memoria (MMU)** es un componente clave en este proceso. Su función principal es traducir las **direcciones lógicas** generadas por la CPU (que el programa ve como si fueran continuas) a **direcciones físicas** que corresponden a ubicaciones reales en la RAM o en el disco.

Esta traducción se hace mediante una estructura llamada **tabla de páginas**, donde cada entrada indica dónde está almacenada cada página en memoria física. Si una página no está presente en RAM, se genera un fallo de página y la MMU solicita que se cargue desde el disco.

---

## 3. Paginación vs segmentación

La **paginación** divide la memoria en bloques fijos de tamaño igual (normalmente 4KB o 8KB), lo cual simplifica la gestión del espacio. En cambio, la **segmentación** organiza los datos según su lógica: por ejemplo, una sección para el código, otra para las variables globales y otra para la pila de ejecución.

Aunque ambos métodos permiten manejar memoria virtual, la paginación es más común en sistemas modernos porque facilita la reubicación de programas sin alterar su estructura. La segmentación, por otro lado, se usa en combinación con paginación para ofrecer mayor flexibilidad a los desarrolladores.

---

## 4. El rol del disco y el intercambio (swap)

La memoria virtual depende en gran medida del **almacenamiento secundario** (como el disco duro). Cuando la RAM está llena, el sistema operativo usa un área específica del disco llamada **espacio de intercambio (swap)** para almacenar páginas temporales. Este proceso se llama **intercambio**, y aunque es más lento que usar solo RAM, permite mantener la ejecución de múltiples programas al mismo tiempo.

El uso excesivo del swap puede ralentizar el sistema, por lo que los diseñadores de hardware suelen incluir una cantidad suficiente de RAM para minimizar este impacto. Además, algunos sistemas usan **memoria flash** (como SSD) en lugar de discos tradicionales para mejorar la velocidad de acceso a las páginas.

---

## 5. Beneficios y desafíos

La memoria virtual tiene varios ventajas: permite ejecutar programas más grandes que la RAM disponible, mejora la multitarea al liberar espacio ocupado por procesos inactivos, y simplifica la gestión del hardware al ocultar las limitaciones físicas de la memoria. Sin embargo, también presenta desafíos técnicos como los **fallos de página**, que pueden generar retrasos si no se manejan eficientemente.

Además, el diseño de algoritmos para decidir qué páginas intercambiar entre RAM y disco es crucial para optimizar el rendimiento del sistema. Estos algoritmos forman parte del núcleo de los sistemas operativos modernos.

---

## N. Conexión con lo que sigue

Este tema sirve como base para entender cómo se gestiona la memoria en sistemas operativos, algo que se profundiza en gestion de memoria en sistemas operativos.