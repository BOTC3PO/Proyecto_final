# Oficios — Técnico en Automatización y Robótica — Cinemática y dinámica (teoria)

> Tema del MAPA: `OF16.cinematica-y-dinamica-robotica` (`troncos.md`).
> Depende de `../actuadores-y-sensores-robotica/` (ver
> `../dependencias.md`). Lección informativa — la evaluación del
> oficio se concentra en `diagnostico-robotica-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Cinemática directa

La **cinemática directa** responde: dados los ángulos de cada
articulación de un brazo robótico, ¿dónde queda exactamente el efector
final (la "mano" del robot) en el espacio? Es un cálculo directo:
conociendo los ángulos, se puede determinar la posición con certeza,
combinando las transformaciones (matrices) de cada articulación en
sucesión.

## Cinemática inversa

La **cinemática inversa** responde la pregunta opuesta, y mucho más
difícil: dada la posición deseada del efector final, ¿qué ángulos debe
tener cada articulación para llegar exactamente ahí? A diferencia de
la cinemática directa, puede no tener una única solución (varias
combinaciones de ángulos pueden llegar al mismo punto), tener
infinitas soluciones, o no tener ninguna (si el punto está fuera del
alcance físico del brazo).

## Matrices homogéneas

Las **matrices homogéneas** son la herramienta matemática estándar
para representar, en una sola operación, tanto una rotación como un
desplazamiento entre dos sistemas de coordenadas — permiten encadenar
las transformaciones de cada articulación de un brazo robótico en un
único cálculo consistente, en vez de manejar rotación y desplazamiento
por separado en cada paso.

## Dinámica de manipuladores

Mientras la cinemática describe posición y movimiento sin importar la
causa, la **dinámica** estudia las fuerzas y torques necesarios para
producir ese movimiento —cuánta fuerza debe aplicar cada motor para
mover el brazo a una velocidad y aceleración determinadas, teniendo en
cuenta el peso de cada eslabón y de la carga que sostiene. Un cálculo
de dinámica incorrecto puede hacer que un brazo se mueva más lento de
lo esperado (motor subdimensionado) o consuma más energía de la
necesaria.

## Control de trayectoria

Ya con la cinemática y la dinámica resueltas, el **control de
trayectoria** decide el camino específico que sigue el efector final
entre un punto de partida y uno de llegada —no sólo el destino final,
sino la velocidad y la forma del recorrido en cada instante, relevante
por ejemplo cuando el robot debe evitar un obstáculo en el medio del
camino o mantener una velocidad constante durante una tarea de
soldadura.
