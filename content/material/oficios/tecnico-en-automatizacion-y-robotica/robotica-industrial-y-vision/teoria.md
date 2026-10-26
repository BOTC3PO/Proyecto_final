# Oficios — Técnico en Automatización y Robótica — Robótica industrial y visión (teoria)

> Tema del MAPA: `OF16.robotica-industrial-y-vision` (`troncos.md`).
> Depende de `../cinematica-y-dinamica-robotica/` (ver
> `../dependencias.md`). Lección informativa — la evaluación del
> oficio se concentra en `diagnostico-robotica-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Tipos de robots industriales

Distintas tareas industriales usan configuraciones de robot distintas.
El robot **SCARA** se mueve principalmente en un plano horizontal con
cierta libertad vertical, ideal para tareas rápidas y repetitivas como
ensamblar o "pick and place" (tomar una pieza y colocarla en otro
lugar). El robot **delta** cuelga de varios brazos paralelos que
convergen en un único punto, priorizando velocidad extrema en
movimientos livianos, común en líneas de empaque. Un **cobot**
(robot colaborativo) está diseñado específicamente para trabajar junto
a personas de forma segura, con sensores y límites de fuerza que lo
detienen ante un contacto inesperado, a diferencia de un robot
industrial tradicional que opera aislado detrás de una barrera de
seguridad.

## Visión artificial: procesamiento de imagen

El **procesamiento de imagen básico** transforma una imagen capturada
por una cámara en información útil para el robot: ajustar contraste,
detectar bordes, aislar un color específico — pasos previos necesarios
antes de que el sistema pueda "entender" qué hay en la imagen.

## Visión artificial: detección de objetos

La **detección de objetos** va un paso más allá del procesamiento
básico: identifica qué es y dónde está cada objeto relevante dentro de
una imagen (por ejemplo, localizar una pieza específica sobre una
cinta transportadora para que el brazo la tome). Es la conexión
directa entre la percepción visual y la cinemática inversa ya vista:
saber dónde está el objeto en la imagen permite calcular a qué
posición del espacio debe moverse el efector final para alcanzarlo.

## Por qué esta combinación es "robótica industrial"

Un robot SCARA o un cobot que además usa visión artificial para
localizar piezas en posiciones variables (en vez de siempre en el
mismo lugar exacto) es mucho más flexible que uno programado con
posiciones fijas — es la diferencia entre automatizar una tarea muy
rígida y automatizar una tarea que tolera variación en cómo llegan las
piezas.
