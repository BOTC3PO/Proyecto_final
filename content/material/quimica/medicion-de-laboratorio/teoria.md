# Química — Toda medición de laboratorio (teoría)

> Tema del MAPA: `Q4` (Tronco 3.a — Geometría: de la forma a la medida,
> cruce con Química). Depende de
> `../../matematica/cifras-significativas-y-error/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias técnicas distintas (menisco, paralaje, tara,
calibración, réplicas) mejor separadas en diapositivas.

---

## No es un cálculo nuevo, es una aplicación

`../../matematica/cifras-significativas-y-error/` ya explicó qué son las
cifras significativas y por qué toda medición tiene un margen de error;
`../../matematica/error-sistematico-vs-aleatorio/` ya distinguió las dos
causas de ese error. Este módulo no repite esas fórmulas: aplica esas
ideas a los instrumentos reales de un laboratorio, y a las técnicas para
minimizar el error al usarlos.

## La apreciación del instrumento, en instrumentos de laboratorio

La **apreciación** de un instrumento (la mitad de su división más chica,
ver `../../matematica/cifras-significativas-y-error/`) se aplica igual a
una probeta, una bureta o una balanza. Una probeta graduada cada 1 mL
tiene una apreciación de 0,5 mL: cualquier lectura debe reportarse con
esa incertidumbre. Cuanto más fina la graduación del instrumento (una
bureta, graduada cada 0,1 mL, frente a una probeta graduada cada 1 mL),
menor el error posible.

## Leer el menisco

Al medir un líquido en un recipiente graduado (probeta, bureta, pipeta),
la superficie del líquido no queda perfectamente plana: forma una curva
llamada **menisco**. En el agua y la mayoría de las soluciones acuosas,
el menisco es **cóncavo** (se curva hacia abajo en el centro, porque el
líquido "moja" el vidrio). La lectura correcta se toma en la parte
**inferior** de esa curva, con el ojo a la misma altura que el menisco —
nunca desde arriba, mirando hacia abajo.

## Error de paralaje

El **error de paralaje** aparece cuando se lee una escala desde un
ángulo, en vez de mirarla de frente y a la misma altura de la marca — el
ángulo hace que la lectura parezca corrida hacia un lado. Es un error
evitable con la técnica correcta (poner el ojo a la altura exacta de la
marca), no un límite físico del instrumento como la apreciación.

## Tarar la balanza

**Tarar** es poner la balanza en cero con el recipiente vacío puesto
encima, antes de agregar la sustancia a pesar — así el resultado muestra
sólo la masa de la sustancia, sin sumarle el peso del recipiente. Olvidar
tarar es una fuente típica de **error sistemático**: todas las
mediciones hechas con ese recipiente van a estar corridas en la misma
dirección (de más), por la misma cantidad constante.

## Calibrar antes de medir

Verificar que un instrumento marca el valor correcto en un punto
conocido (una balanza que marca 0 sin nada encima, un termómetro que
marca 0°C en agua con hielo) es **calibrar**. Es la forma de detectar y
corregir un error sistemático antes de empezar a medir, en vez de
descubrirlo después analizando resultados raros.

## Réplicas y promedio

Repetir una medición varias veces (**réplicas**) y promediar los
resultados reduce el **error aleatorio** — las variaciones impredecibles
de cada lectura tienden a cancelarse en el promedio. Pero, como ya se vio
en `../../matematica/error-sistematico-vs-aleatorio/`, repetir la
medición **no** corrige un error sistemático (una balanza sin tarar
sigue de más, se la repita las veces que se la repita).

## Para qué sirve

Estas técnicas son lo que separa una medición de laboratorio confiable
de una llena de errores evitables — la base de cualquier práctica
experimental real, desde preparar una solución con la concentración
exacta (ver `../concentracion-de-una-solucion/`) hasta un experimento que
otro laboratorio pueda reproducir con el mismo resultado.
