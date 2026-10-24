# Matemática — Divisibilidad por 7 (opcional, sólo teoría)

> No es un tema del MAPA con nodo propio, ni tiene dependencias ni ramas
> que cuelguen de él (ver la nota en `../../dependencias.md`). Contenido
> opcional/enriquecimiento, a pedido de Javier — se enseña en algunas
> escuelas pero no es currícula obligatoria como el resto de módulos en
> `../`. Por eso **no lleva `cuestionario.md`**: es un módulo de teoría
> solo.

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** alcanza — es una única idea (un algoritmo de varios pasos), no
varias secciones como el resto de la carpeta, así que no hace falta
`Presentación` acá.

---

## Por qué el 7 no tiene una regla tan simple

Las reglas de 2, 3, 4, 5, 6, 8, 9 y 10 funcionan mirando sólo la última
cifra, la suma de cifras, o las últimas 2-3 cifras — algo directo. El 7 no
tiene ese atajo tan corto porque 10 no deja un resto "cómodo" al dividirlo
por 7 (10 = 7×1+3): por eso su regla es un algoritmo con varios pasos, no
una sola mirada rápida.

## El algoritmo

1. Separar la última cifra del número.
2. Duplicarla (multiplicarla por 2).
3. Restar ese valor al número que queda sin la última cifra.
4. Repetir el proceso con el resultado, hasta llegar a un número chico y
   fácil de reconocer.
5. Si el resultado final es 0 o un múltiplo de 7, el número original
   también lo es.

**Ejemplo**: ¿931 es divisible por 7?
- Última cifra: 1. El resto es 93. Duplicar el 1 → 2. 93 − 2 = 91.
- Última cifra de 91: 1. El resto es 9. Duplicar el 1 → 2. 9 − 2 = 7.
- 7 es múltiplo de 7 → 931 es divisible por 7 (931 ÷ 7 = 133).

## Por qué no entró como tema con cuestionario

El algoritmo tiene varios pasos y usa resta y duplicación repetidas — es
más una aplicación combinada de restar y multiplicar por 2 en cadena que
una regla nueva de reconocimiento directo. Como ninguna otra parte del
mapa depende de saber esto (a diferencia de 2, 3, 5 y 10, que sí
reaparecen constantemente en fracciones, MCD/MCM y porcentajes), queda
como contenido de repaso/curiosidad, no como escalón obligatorio.
