# Historia — Antes y después de Cristo: cálculo de intervalos (teoria)

> Tema del MAPA: `T3` (Tronco 6). Depende de
> `../decada-siglo-milenio/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — un concepto puntual (calcular intervalos que cruzan el
año 0), sin necesitar secciones separadas propias.

---

## No existe el año 0

El calendario que se usa habitualmente (calendario gregoriano, basado
en el nacimiento de Cristo como punto de referencia) tiene una
particularidad importante: **no existe el año 0**. Se pasa
directamente del año 1 a.C. (antes de Cristo) al año 1 d.C. (después
de Cristo) — este detalle es la fuente de casi todos los errores al
calcular intervalos que cruzan ese punto.

## Los años antes de Cristo cuentan "al revés"

Después de Cristo (d.C.), los años **aumentan** con el tiempo: 100
d.C. es anterior a 200 d.C. Antes de Cristo (a.C.), es **al revés**:
los años **disminuyen** con el tiempo hacia el presente. El año 100
a.C. es **posterior** (más cercano al presente) que el año 200 a.C.
— cuanto más grande el número en a.C., más lejano en el pasado.

## Fórmula para calcular un intervalo que cruza el año 0

Para calcular cuántos años pasaron entre un año X a.C. y un año Y
d.C., **se suman** los dos números (no se restan) — porque no hay
año 0 que se pueda "cancelar" entre ambos.

**Intervalo = X (a.C.) + Y (d.C.)**

Ejemplo: de 300 a.C. a 200 d.C. → 300 + 200 = **500 años**.

## Por qué se suman y no se restan

Pensarlo como una recta numérica ayuda: el a.C. equivale a números
negativos y el d.C. a números positivos, pero **sin el cero** entre
medio. Ir de -300 a +200 en una recta numérica normal (con cero) sería
restar (-300 - 200 = -500, en valor absoluto 500) — el resultado
numérico coincide con sumar los valores absolutos porque, aunque no
haya año 0 real, el efecto práctico de "saltar" del -1 al +1
directamente no cambia la distancia total recorrida.

## Calcular intervalos completamente dentro de a.C. o d.C.

Si ambos años están en el mismo lado (los dos a.C., o los dos d.C.),
se **resta normalmente**, con cuidado de que en a.C. "más grande"
significa "más antiguo":

- Dos años d.C.: 500 d.C. a 800 d.C. → 800 - 500 = 300 años.
- Dos años a.C.: 500 a.C. a 300 a.C. → 500 - 300 = 200 años (300 a.C.
  es más reciente que 500 a.C., aunque el número sea menor).

## Para qué sirve

Calcular estos intervalos con precisión es el prerrequisito directo
de `../periodizacion-historica/` (tema siguiente): dividir la
historia en períodos requiere poder calcular con exactitud cuánto
duró cada uno, incluidos los períodos que cruzan del a.C. al d.C.
(como la transición del mundo antiguo mediterráneo hacia la era
cristiana).
