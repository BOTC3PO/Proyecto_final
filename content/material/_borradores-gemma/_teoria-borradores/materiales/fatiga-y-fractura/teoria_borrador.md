# Materiales — Fatiga y fractura (teoría)

> Tema del MAPA: `fatiga_y_fractura`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Fenómeno de ruptura de materiales bajo esfuerzos repetitivos, incluso por debajo del límite de resistencia.

---

## 1. ¿Qué es la fatiga?

La fatiga es un proceso de deterioro interno en un material que ocurre cuando se somete a cargas cíclicas o fluctuantes, aunque el valor máximo de estas cargas sea menor al límite de rotura del material. A diferencia de una fractura causada por un impacto único, la fatiga se desarrolla lentamente: microgrietas aparecen en la superficie o cerca de zonas con concentradores de tensión (como bordes, soldaduras o inclusiones), y con el tiempo estas grietas crecen hasta que el material no puede soportar más carga. Este fenómeno es común en estructuras metálicas, piezas mecánicas y componentes eléctricos sometidos a uso continuo.

[IMAGEN: Diagrama de un material bajo fatiga con etapas de grieta inicial, propagación y fractura]

---

## 2. Etapas del proceso de falla por fatiga

El colapso por fatiga no ocurre en un instante, sino que se divide en tres fases claras:

1. **Iniciación de la grieta**: Comienza en zonas con defectos microscópicos o puntos de estrés concentrado. La carga repetida genera deslizamientos atómicos que forman una pequeña grieta invisible a simple vista.

2. **Propagación de la grieta**: A medida que la grieta crece, el material se debilita progresivamente. Esta etapa es la más crítica, ya que el daño se acumula sin generar síntomas evidentes hasta que la grieta alcanza un tamaño crítico.

3. **Fractura final**: Cuando la sección restante del material no puede soportar la carga aplicada, ocurre una rotura súbita y generalmente catastrófica. En muchos casos, esta fractura deja un patrón característico en la superficie (bandas de fatiga) que permite identificar el tipo de falla.

---

## 3. Factores que influyen en la vida útil por fatiga

La resistencia a la fatiga depende de múltiples variables. Entre las más importantes se destacan:

- **Tipo de material**: Los metales aleados, especialmente aquellos con tratamientos térmicos o superficiales (como endurecimiento por deformación), suelen mostrar mayor resistencia a la fatiga.

- **Condiciones ambientales**: La presencia de corrosión acelera la formación y propagación de grietas. En ambientes húmedos, salinos o con agentes químicos, la vida útil disminuye drásticamente.

- **Frecuencia e intensidad de las cargas**: Cargas de alta frecuencia (como vibraciones constantes) son más peligrosas que cargas menos frecuentes. Además, si las variaciones de esfuerzo son muy bruscas, el daño se acumula más rápido.

- **Diseño del componente**: Zonas con cambios bruscos de forma, agujeros o uniones mal realizadas generan concentradores de tensión donde la fatiga comienza más fácilmente.

---

## 4. Medición y prevención

Para prevenir fallas por fatiga, es fundamental conocer el **límite de fatiga** del material: el valor máximo de carga cíclica que puede soportar durante un número definido de ciclos sin romperse. Este dato se determina mediante ensayos específicos (como el ensayo de fatiga rotatoria), donde se mide la resistencia bajo diferentes condiciones.

En aplicaciones críticas, como aeronáutica o estructuras civiles, se usan materiales con alta tenacidad y se diseñan piezas para evitar concentradores de tensión. También se recurre al **tratamiento superficial** (como el revenido o la nitruración) para mejorar la resistencia a grietas iniciales.

---

## 5. Conexión con lo que sigue

Este tema está vinculado con los métodos de ensayo de materiales (ver `../ensayos_de_materiales/`) y con el análisis de fallas en estructuras metálicas (ver `../análisis_de_fallas/`).