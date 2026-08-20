# Matemática — Resta (teoría)

> Tema del MAPA: `N2` (Tronco 1 — Numérico), mitad "Resta" — separado de
> "Suma", que tiene su propia teoría y cuestionario en `../suma/`. Ver
> `../../lista-temas-plana.md`, `../../troncos.md` y
> `../dependencias.md` (Resta depende de Conteo, Valor posicional y Suma).

## Tipo de teoría (si esto se carga al sistema)

Mismos selectores reales que en `../suma/teoria.md`: `TheoryItem.type` —
Texto, Presentación, Enlace, Libro, Documento, Video, Herramienta
interactiva, Herramienta standalone, TuesdayJS (legacy). Ninguna de las 4
Herramienta standalone (Tabla periódica, Escalador de recetas, Línea de
tiempo, Mapa histórico/geográfico) aplica acá tampoco.

**Actualizado**: mejor `Presentación` que `Texto`, mismo criterio que
`../suma/`, `../conteo/` y `../valor-posicional/` — con 6 secciones (qué
es, por qué no conmutativa/asociativa, prueba de la resta, algoritmo en
columna, estimar, el límite con los naturales) conviene dividirlo en
diapositivas. El algoritmo en columna con el "préstamo" tachado y
reescrito sigue siendo candidato a un bloque **LaTeX** dentro de
Herramienta interactiva, incrustado en su diapositiva — no hace falta para
arrancar.

---

## Qué es la resta

Restar es quitarle una cantidad a otra para ver cuánto queda. Es la
operación **inversa** de la suma (ver `../suma/teoria.md`): si a + b = c,
entonces c − b = a y c − a = b. El primer número se llama **minuendo**, el
que se resta es el **sustraendo**, y el resultado es la **diferencia** (o
"resto").

## Por qué NO es conmutativa ni asociativa

A diferencia de la suma, en la resta **el orden importa**: a − b casi
nunca da lo mismo que b − a (siquiera el signo cambia). Tampoco es
asociativa: (a − b) − c no da lo mismo que a − (b − c) — restar de a dos
en una cadena de restas hay que hacerlo siempre de izquierda a derecha, en
el orden en que aparecen, sin poder reagrupar como en la suma.

## La prueba de la resta

Como la resta es la inversa de la suma, se puede verificar un resultado
sumando: si a − b = c, entonces c + b tiene que dar exactamente a de
nuevo. Esta verificación ("la prueba de la resta") es la misma idea que
"hallar el sumando que falta" de la teoría de Suma, mirada al revés.

## El algoritmo en columna: restar "pidiendo prestado"

Igual que en la suma se alinean los números por su valor posicional y se
opera columna por columna, de derecha a izquierda. Si en una columna la
cifra de arriba (del minuendo) es más chica que la de abajo (del
sustraendo), no se puede restar directamente: se le **pide prestada** una
unidad a la columna de al lado (que baja su cifra en 1 y le presta 10 a la
columna actual). Es el espejo exacto de la "llevada" de la suma: ahí se
empuja un sobrante hacia la izquierda; acá se pide un préstamo desde la
izquierda. Ejemplo: 52 − 27 → unidades: 2 es menor que 7, se pide prestado
a las decenas (que bajan de 5 a 4) y queda 12 − 7 = 5; decenas: 4 − 2 = 2 →
resultado 25.

## Estimar antes de restar

Igual que con la suma, redondear minuendo y sustraendo antes de restar da
un resultado aproximado para controlar que la cuenta exacta no tenga un
error grosero.

## Un límite importante (por ahora)

Dentro de los números naturales, el minuendo siempre tiene que ser mayor o
igual que el sustraendo — "no se le puede quitar a algo más de lo que
tiene". Cuando eso no alcanza (el sustraendo es mayor), la resta sigue
teniendo sentido, pero el resultado ya no es un natural: es un número
negativo, tema de `N`úmeros enteros (ver el próximo tema del Tronco 1
después de Multiplicación y división, en `../dependencias.md`).
