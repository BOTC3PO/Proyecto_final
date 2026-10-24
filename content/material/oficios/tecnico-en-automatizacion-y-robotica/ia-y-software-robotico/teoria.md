# Oficios — Técnico en Automatización y Robótica — IA y software robótico (teoria)

> Tema del MAPA: `OF16.ia-y-software-robotico` (`troncos.md`).
> Depende de `../robotica-industrial-y-vision/` (ver
> `../dependencias.md`). Lección informativa — la evaluación del
> oficio se concentra en `diagnostico-robotica-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Inteligencia artificial aplicada a robótica

El **machine learning** (aprendizaje automático) permite que un
sistema mejore su desempeño en una tarea a partir de datos, en vez de
seguir únicamente reglas escritas explícitamente de antemano — útil,
por ejemplo, cuando reconocer un objeto en la imagen de una cámara es
demasiado variable para programar cada caso a mano. Las **redes
neuronales** son un modelo específico de machine learning, inspirado
de forma simplificada en el funcionamiento de las neuronas
biológicas, particularmente efectivo para tareas de visión artificial.
El **aprendizaje por refuerzo** es un enfoque distinto: el sistema
aprende probando acciones y recibiendo una recompensa o penalización
según el resultado, útil para que un robot aprenda una tarea de
control por prueba y error en vez de una regla explícita.

## ROS: el software que coordina un robot real

**ROS** (Robot Operating System, a pesar del nombre no es un sistema
operativo completo sino un conjunto de herramientas de software) es el
estándar más usado para organizar el software de un robot complejo.
Cada función del robot (un sensor, un actuador, un algoritmo de
navegación) se organiza como un **nodo** independiente, y los nodos se
comunican entre sí publicando y recibiendo información a través de
**tópicos** — permitiendo que distintas partes del sistema se
desarrollen y prueben por separado sin que un error en un nodo
tumbe todo el sistema completo.

## Navegación autónoma

Un robot móvil que necesita desplazarse por un espacio desconocido o
cambiante usa **SLAM** (localización y mapeo simultáneos, por su sigla
en inglés) para construir un mapa del entorno mientras, al mismo
tiempo, determina su propia posición dentro de ese mapa —usando datos
de sensores como el LIDAR ya presentado. Una vez que existe un mapa,
la **planificación de trayectoria** calcula el camino más adecuado
entre la posición actual del robot y un destino, evitando los
obstáculos detectados.

## Por qué esta lección cierra el bloque técnico

IA, ROS y navegación son las capas de software más altas del sistema:
se apoyan en todo lo anterior (microcontroladores, sensores,
actuadores, cinemática) para producir un comportamiento autónomo o
semiautónomo — sin esas capas de base funcionando correctamente,
ningún algoritmo de IA o de navegación puede compensar un problema de
hardware o de control mal resuelto.
