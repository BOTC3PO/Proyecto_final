# Matemática — Suma (teoría)

> Tema del MAPA: `N2` (Tronco 1 — Numérico), mitad "Suma" — separado de
> "Resta", que tiene su propia teoría y cuestionario en `../resta/`. Ver
> `../../lista-temas-plana.md` y `../../troncos.md`.

## Tipo de teoría (si esto se carga al sistema)

Selectores reales de la UI (`TheoryItem.type` en el editor de un Módulo):
**Texto**, **Presentación**, **Enlace**, **Libro**, **Documento**, **Video**,
**Herramienta interactiva**, **Herramienta standalone**, **TuesdayJS**
(legacy). "Herramienta standalone" sólo tiene 4 opciones ya construidas:
Tabla periódica, Escalador de recetas, Línea de tiempo, Mapa
histórico/geográfico — ninguna aplica a Suma. "Herramienta interactiva" es
el editor de bloques, con 12 tipos de bloque: Texto, LaTeX, Tabla, Gráfico,
Flujo, Función f(x), Formas, Imagen, Audio, Video, PDF, Enlace, Fórmula.

**Actualizado**: mejor `Presentación` que `Texto` — con 5 secciones (qué es,
propiedades, algoritmo en columna, estimar) el bloque de prosa corrido
queda largo; en diapositivas se sigue mejor. El algoritmo de la cuenta con
las "llevadas" alineadas en columna sigue siendo candidato a un bloque
**LaTeX** dentro de Herramienta interactiva más adelante, incrustado en la
diapositiva que corresponda — no hace falta para arrancar.

---

## Qué es la suma

Sumar es juntar dos o más cantidades en una sola. Si a tiene m elementos y b
tiene n elementos y no se superponen, a + b tiene m + n elementos. Los
números que se suman se llaman **sumandos**; el resultado, **suma** o
**total**.

## Propiedades

- **Conmutativa**: a + b = b + a — el orden de los sumandos no cambia el
  resultado (3 + 5 da lo mismo que 5 + 3).
- **Asociativa**: (a + b) + c = a + (b + c) — al sumar más de dos números,
  no importa qué par se sume primero.
- **Elemento neutro**: a + 0 = a — sumar 0 no cambia nada.

Estas dos primeras propiedades son las que permiten reordenar y agrupar los
sumandos para sumar más fácil (ej.: 8 + 7 = 8 + 2 + 5 = 10 + 5 = 15, "completar
la decena" primero).

## El algoritmo en columna: sumar con "llevada"

Para sumar números de más de una cifra, se alinean por su valor posicional
(unidades debajo de unidades, decenas debajo de decenas...) y se suma
columna por columna, de derecha a izquierda. Si el resultado de una columna
es 10 o más, se escribe sólo la cifra de las unidades de ese resultado y se
**lleva 1** a la columna siguiente (porque esas diez unidades son, en
realidad, una decena de la columna de al lado). Ejemplo: 27 + 15 → unidades:
7+5=12, se escribe 2 y se lleva 1; decenas: 2+1+1(la llevada)=4 → resultado
42.

## Estimar antes de sumar

Redondear los sumandos a la decena o centena más cercana (ver
`../valor-posicional/teoria.md`) antes de sumar da un resultado aproximado
que sirve para controlar que la cuenta exacta no tenga un error grosero —
si el estimado da "cerca de 40" y la cuenta exacta dio 420, algo salió mal
en el cálculo.
