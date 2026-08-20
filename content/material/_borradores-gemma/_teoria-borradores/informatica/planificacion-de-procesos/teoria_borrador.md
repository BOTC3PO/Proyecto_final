# Informática — Planificación de procesos (teoría)

> Tema del MAPA: `planificacion_de_procesos`. Depende de `../ciclo_de_vida_de_un_proceso/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación de cómo los sistemas operativos organizan la ejecución de tareas en una computadora.

---

## 1. ¿Qué es el planificador?

El planificador, también llamado **scheduler**, es un componente fundamental del sistema operativo que decide cuál proceso debe usar la CPU en cada momento. Su función principal es optimizar el uso de los recursos del procesador para garantizar que todas las tareas se ejecuten de manera eficiente y sin interrupciones innecesarias. Por ejemplo, cuando varios programas están abiertos al mismo tiempo, el planificador determina cuál debe tener prioridad para evitar que la computadora se congele o responda lentamente.

[IMAGEN: Diagrama simplificado de un sistema operativo mostrando el scheduler como un módulo que recibe procesos en estado "Listo" y los envía a la CPU]

## 2. Tipos de planificación

La planificación puede ser **preemptiva** o **no preemptiva**, según cómo se maneje la interrupción de un proceso que ya está usando la CPU:

- En la **planificación no preemptiva**, una vez que un proceso comienza a ejecutarse, no puede ser interrumpido hasta que finalice su tarea o se bloquee por una operación como leer datos de disco. Esto es común en sistemas donde la latencia de respuesta no es crítica.
  
- En la **planificación preemptiva**, el planificador puede detener un proceso en ejecución para asignarle la CPU a otro, incluso si el primero aún no terminó su trabajo. Este tipo se usa en entornos que requieren alta interactividad, como sistemas operativos modernos donde el usuario espera respuestas inmediatas.

La elección entre uno u otro depende del balance entre eficiencia y responsividad del sistema.

## 3. Estados de los procesos

Un proceso no está siempre en ejecución: pasa por varios estados durante su vida útil, que son gestionados por el planificador:

- **Listo (Ready):** El proceso tiene todos los recursos necesarios para ejecutarse, pero espera a que el planificador le asigne la CPU.
  
- **Ejecución (Running):** El proceso está usando la CPU en ese momento.

- **Espera (Waiting):** El proceso no puede avanzar porque necesita un recurso externo, como una entrada de teclado o datos de un disco. Solo se reanuda cuando ese recurso esté disponible.

El planificador se encarga de mover procesos entre estos estados según las reglas definidas por el algoritmo de planificación activo.

## 4. Algoritmos de planificación

Los algoritmos determinan cómo el planificador prioriza los procesos. Algunos ejemplos comunes incluyen:

- **Round-Robin:** Cada proceso recibe un tiempo fijo (tiempo cuántum) para usar la CPU, luego se intercambia con otro. Ideal para sistemas multitarjeta donde todos los usuarios deben tener respuesta similar.

- **Prioridad por nivel:** Los procesos con mayor prioridad (como aquellos que manejan tareas críticas) tienen preferencia sobre otros. Puede ser estática o dinámica, según si la prioridad cambia durante la ejecución.

La elección del algoritmo afecta directamente el rendimiento del sistema: algunos buscan minimizar el tiempo de espera, otros maximizar la eficiencia del procesador.

## 5. Impacto en el rendimiento

Una planificación ineficiente puede causar problemas como:

- **Fragmentación de tiempos:** Si los procesos se interrumpen muy seguido, la CPU gasta más tiempo en cambiar de tarea que en ejecutarla.
  
- **Injusticia en recursos:** Un proceso importante podría quedar bloqueado si el planificador no asigna prioridad adecuada.

Por eso, los sistemas operativos modernos combinan varios métodos y permiten ajustarlos según las necesidades del hardware y la carga de trabajo.

---

## N. Conexión con lo que sigue

Este tema es base para entender cómo se gestiona el **uso de recursos en entornos multihilo** (`../concorrencia_y_sincronizacion/`) y cómo los sistemas operativos modernos optimizan la experiencia del usuario.