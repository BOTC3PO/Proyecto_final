# Materiales — Defectos cristalinos y dislocaciones (teoría)

> Tema del MAPA: `materiales/defectos-cristalinos-y-dislocaciones`. Depende de `estructuras-cristalinas-y-celdas-unitarias/` y `plasticidad-y-punto-de-fluencia/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Qué defectos tienen los cristales reales y por qué explican la deformación y el endurecimiento de los metales.

---

## 1. Ningún cristal es perfecto

Los cristales reales tienen defectos: lugares donde la red no es perfecta. Lejos de ser un problema menor, los defectos **explican** las propiedades más importantes de los metales. Un cristal perfecto sería mucho más resistente que uno real, pero también casi imposible de fabricar; y los defectos son justamente los que permiten que un metal se deforme sin romperse y que se lo pueda endurecer.

## 2. Defectos puntuales

Afectan a uno o pocos átomos:

- **Vacancia**: un lugar de la red sin átomo. Siempre existen, y su número aumenta con la temperatura. Facilitan la difusión, es decir, el movimiento de átomos dentro del sólido.
- **Átomo intersticial**: un átomo extra ubicado en un hueco entre los átomos de la red. El carbono en el hierro es un caso típico.
- **Átomo sustitucional**: un átomo de otro elemento que ocupa el lugar de uno del material base, como el níquel o el cromo en el hierro.

Las impurezas y los elementos de aleación introducen estos defectos, y distorsionan la red.

## 3. Dislocaciones: defectos lineales

Una **dislocación** es una línea a lo largo de la cual la red está desacomodada, por ejemplo por un semiplano extra de átomos que termina en el interior del cristal (dislocación de borde). También hay dislocaciones de tornillo, y las reales suelen ser mixtas.

Su importancia es enorme. Si se quisiera deslizar un plano completo de átomos sobre otro, haría falta romper todos los enlaces a la vez, y la tensión necesaria sería enormemente más alta que la que se mide en un metal real. Con una dislocación, en cambio, el deslizamiento ocurre moviendo una fila de átomos por vez, como correr una alfombra arrugando una arruga en lugar de arrastrarla entera. Por eso los metales fluyen con tensiones relativamente bajas.

La **deformación plástica** de un metal es, en el fondo, el movimiento de muchas dislocaciones. Y la densidad de dislocaciones aumenta con la deformación.

## 4. Defectos superficiales y volumétricos

- **Borde de grano**: la superficie que separa dos cristales (granos) con distinta orientación dentro de un metal policristalino. Es una región de desorden.
- **Superficie externa** del material.
- **Defectos volumétricos**: poros, grietas e inclusiones de otras fases.

## 5. Endurecer es obstaculizar dislocaciones

Si deformar un metal es mover dislocaciones, endurecerlo consiste en **ponerles obstáculos**. Los mecanismos clásicos son:

- **Reducir el tamaño de grano**: los bordes frenan a las dislocaciones. Cuanto más chicos los granos, más bordes y más resistencia. La relación de Hall-Petch dice que el límite elástico aumenta con la inversa de la raíz cuadrada del tamaño de grano: σy = σ0 + k / √d.
- **Endurecimiento por solución sólida**: los átomos extra distorsionan la red y dificultan el movimiento. Las aleaciones son más resistentes que los metales puros.
- **Endurecimiento por deformación** (acritud): al deformar en frío aumenta la cantidad de dislocaciones, que se estorban entre sí.
- **Endurecimiento por precipitación**: partículas finas de otra fase que bloquean las dislocaciones, como en algunas aleaciones de aluminio.

Todos pagan un precio: al endurecer un metal suele disminuir su ductilidad.

## 6. Cómo se ve en la curva de tensión-deformación

El punto de fluencia es la tensión a la que las dislocaciones empiezan a moverse masivamente. Por eso todo lo que las obstruye sube el límite de fluencia. Esta es la conexión con lo ya estudiado en `plasticidad-y-punto-de-fluencia`.

## 7. Defectos que perjudican

No todos los defectos son útiles. Poros e inclusiones concentran tensiones y son puntos de inicio de grietas, como se vio en fatiga y fractura. En una pieza crítica, los controles de calidad buscan detectar esos defectos (por ensayos no destructivos) para evitar que lleven a una falla.
