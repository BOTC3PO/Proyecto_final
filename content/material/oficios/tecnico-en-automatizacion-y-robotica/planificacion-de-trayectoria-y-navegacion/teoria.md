# Oficios — Automatización y robótica — Planificación de trayectoria y navegación (teoria)

> Tema del MAPA: nodo propuesto en `../../../_plan-faltantes/oficios-b.md` (sin ID en `troncos.md` todavía). Depende de
> `cinematica-y-dinamica-robotica/` (ver `../../dependencias.md`). Lección informativa — la
> evaluación del oficio se concentra en `diagnostico-robotica-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Dos preguntas distintas

Mover un robot requiere resolver dos problemas: **por dónde** ir (la ruta o el camino geométrico) y **cómo** recorrerlo en el tiempo (la trayectoria, con sus velocidades y aceleraciones). Un camino es una línea en el espacio; una trayectoria es ese camino más el tiempo.

## Trayectorias de un brazo robótico

Un brazo se puede mover de dos maneras básicas. En un movimiento **punto a punto (en el espacio de las articulaciones)**, cada eje va de su valor inicial al final de forma sincronizada; es el más rápido y simple, pero la herramienta describe una curva impredecible en el espacio. En un movimiento **lineal (cartesiano)**, la herramienta sigue una recta en el espacio, lo que exige resolver la cinemática inversa a lo largo de todo el recorrido; se usa para soldar, pegar o cortar. Para pasar por varios puntos sin detenerse, se usan **movimientos con redondeo** o curvas.

## Perfiles de velocidad

No se puede pasar de cero a la velocidad máxima de golpe: eso exigiría una aceleración infinita y causaría vibraciones y desgaste. Se usan **perfiles suaves**: el **trapezoidal** acelera con aceleración constante, mantiene una velocidad y desacelera; el perfil de **curva S** suaviza además la variación de la aceleración (el "tirón"), lo que reduce vibraciones. Las limitaciones reales son los límites de velocidad y de aceleración de cada eje, el par de los motores y la carga.

## Evitar obstáculos: espacio de configuraciones

Para planificar con obstáculos, se piensa en el **espacio de configuraciones**, donde cada punto es una posición posible de todo el robot, y los obstáculos son regiones prohibidas. El problema es hallar un camino libre. Entre los métodos, la planificación en **grafos** (por ejemplo **A\*** y **Dijkstra**) busca el camino más corto en una grilla o mapa; los métodos basados en **muestreo** (**RRT**, **PRM**) generan puntos al azar y los conectan, y sirven en espacios de muchas dimensiones, como los brazos de seis ejes; los **campos de potencial** hacen que el objetivo atraiga y los obstáculos repelan, aunque pueden atascarse en mínimos locales.

## Navegación de un robot móvil

Un robot móvil necesita responder tres preguntas: ¿dónde estoy? (**localización**), ¿cómo es el entorno? (**mapa**) y ¿por dónde voy? (**planificación**). La **odometría** estima la posición contando las vueltas de las ruedas con encoders, pero acumula error por deslizamiento. Se corrige combinando la odometría con la IMU y con sensores del entorno como el LiDAR o la cámara. **SLAM** (localización y mapeo simultáneos) construye un mapa mientras el robot se localiza dentro de él. En un **mapa de ocupación**, el entorno se divide en celdas que se marcan como libres, ocupadas o desconocidas.

## Planificación global y local

La planificación **global** calcula una ruta desde el origen hasta la meta usando el mapa conocido. La planificación **local** ajusta el movimiento en tiempo real para esquivar obstáculos imprevistos, como una persona que cruza, usando los sensores. Métodos como la **ventana dinámica** (DWA) evalúan velocidades posibles y eligen la que sigue la ruta sin chocar. Un buen sistema combina ambas, y respeta los límites cinemáticos del robot: un robot con ruedas diferenciales no puede moverse de costado.

## Seguridad y robustez

Un robot debe tener una conducta segura cuando falla su percepción: si pierde el mapa o no ve el entorno, se detiene. Las zonas con personas se tratan con velocidades reducidas y distancias de seguridad. Las pruebas se hacen primero en simulación y luego en un área controlada.

## Herramientas

En robótica, ROS ofrece paquetes de navegación y simulación que facilitan estos problemas. Pero las herramientas no reemplazan la comprensión: conviene saber qué hace cada parámetro y qué ocurre cuando se cambia.
