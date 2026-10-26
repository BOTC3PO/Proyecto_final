# Oficios — Automatización y robótica — Encoders, sensores inerciales y cámaras (teoria)

> Tema del MAPA: nodo propuesto en `../../../_plan-faltantes/oficios-b.md` (sin ID en `troncos.md` todavía). Depende de
> `actuadores-y-sensores-robotica/` (ver `../../dependencias.md`). Lección informativa — la
> evaluación del oficio se concentra en `diagnostico-robotica-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Que el robot sepa dónde está

Un robot necesita información sobre sí mismo y sobre el entorno. Los sensores que miden el propio estado (posición de ejes, velocidad, orientación) se llaman **propioceptivos**; los que miran el exterior (distancia a obstáculos, imágenes) se llaman **exteroceptivos**. Esta lección repasa tres familias fundamentales.

## Encoders

Un **encoder** mide la posición o el giro de un eje. El **incremental** genera pulsos al girar: un disco con ranuras interrumpe un haz de luz. Tiene dos canales, **A** y **B**, desfasados 90° (señales en cuadratura), que permiten saber el **sentido** de giro además de contar, y muchas veces un canal **Z** que da una referencia una vez por vuelta. Su resolución se expresa en pulsos por vuelta; con la lectura de los flancos de A y B se puede multiplicar por cuatro. Tiene una limitación: al encender, **no sabe dónde está**; hay que buscar una referencia (homing) con un sensor de cero. El encoder **absoluto** entrega un código distinto para cada posición, y conserva la posición aunque se apague; los hay de una vuelta y multivuelta. Se usan en los ejes de los robots, donde perder la referencia sería inaceptable.

## Sensores inerciales (IMU)

Una **IMU** combina un **acelerómetro** (mide aceleración, incluida la gravedad), un **giróscopo** (mide velocidad angular) y a menudo un **magnetómetro** (campo magnético terrestre, como brújula). Con ellos se estima la **orientación** de un robot, un dron o un vehículo. Cada sensor tiene defectos: el acelerómetro es ruidoso ante vibraciones; el giróscopo **deriva** (acumula error) al integrar; el magnetómetro se perturba con metales e imanes cercanos. Por eso se **fusionan** las medidas con filtros, como el filtro complementario o el filtro de Kalman, que combinan la estabilidad de largo plazo de unos sensores con la respuesta rápida de otros. Una IMU requiere calibración y montaje firme, sin holguras ni vibraciones.

## Sensores de distancia

Los sensores **ultrasónicos** miden el tiempo de ida y vuelta del sonido; son económicos pero tienen un cono amplio y fallan con superficies que absorben el sonido. Los **infrarrojos** miden distancias cortas. El **LiDAR** (láser) mide distancias con alta precisión y puede barrer un plano o un volumen para armar mapas; los sensores de tiempo de vuelo (ToF) hacen algo similar en pequeño. Cada tecnología tiene problemas con vidrios, superficies muy oscuras o espejadas y luz solar intensa.

## Cámaras y visión

Una **cámara** entrega una imagen con mucha información, pero requiere procesamiento. Las cámaras **RGB** capturan color; las **estéreo** usan dos lentes para estimar profundidad por triangulación; las de **profundidad** (ToF o luz estructurada) entregan una distancia por píxel; las **industriales** ofrecen disparo sincronizado y buena calidad óptica. En la práctica, la visión necesita **iluminación controlada**: una buena luz resuelve más problemas que un algoritmo complejo. Las tareas típicas son leer códigos, detectar piezas, medir dimensiones, guiar al robot para agarrar objetos y verificar calidad.

## Calibración

Los sensores solo son útiles si se conoce su relación con el robot. En una cámara, la **calibración intrínseca** corrige la distorsión del lente y estima parámetros como la distancia focal; la **calibración mano-ojo** determina dónde está la cámara respecto del brazo para que un punto visto en la imagen se traduzca a una posición del robot. Un error de calibración se manifiesta como un robot que "casi" agarra la pieza.

## Ruido, filtrado y redundancia

Todas las mediciones tienen ruido. Se aplican filtros (promedios, medianas, filtros de paso bajo) para suavizarlas, a costa de agregar retardo. Para funciones críticas se usan sensores **redundantes** y se comparan: si discrepan, el sistema se detiene.

## Selección

Se elige el sensor según la magnitud, el rango, la precisión, la velocidad de respuesta, el ambiente (polvo, humedad, vibración, luz) y el costo. No existe el sensor perfecto: se combinan.
