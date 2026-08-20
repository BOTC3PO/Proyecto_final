# Matemática — Demostración matemática: reducción al absurdo (teoría)

> Tema del MAPA: `DEM1c` (Tronco 2 — Algebraico). Depende de
> `../ecuacion-primer-grado/` (ver `../dependencias.md`) — y
> conceptualmente de "Validez de un razonamiento" (Filosofía, `FI2`), un
> tema que todavía no tiene carpeta en este repo.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es, estructura,
ejemplo clásico (√2 irracional), diferencia con contraejemplo, errores
comunes).

---

## Qué es la reducción al absurdo

La **reducción al absurdo** es una técnica de demostración que prueba una
afirmación P de una forma indirecta: en vez de argumentar directamente a
favor de P, se **supone que P es falsa**, y a partir de esa suposición se
llega a una **contradicción** (algo lógicamente imposible). Como suponer
"P es falsa" lleva a algo imposible, esa suposición tiene que estar mal
— así que P tiene que ser **verdadera**.

## Estructura

1. Se quiere demostrar P.
2. Se supone lo contrario: ¬P (que P es falsa).
3. A partir de ¬P, se deducen consecuencias lógicas válidas, paso a paso
   (igual que en `../demostracion-deduccion/`).
4. En algún punto, esas consecuencias llevan a algo **imposible**: una
   contradicción con un hecho ya conocido, o dos afirmaciones que se
   contradicen entre sí.
5. Como ¬P lleva a lo imposible, ¬P tiene que ser falsa — y por lo tanto
   P es verdadera.

## Ejemplo clásico: √2 es irracional

**Se quiere demostrar**: √2 no se puede escribir como una fracción a/b
(con a y b enteros).

1. **Suponer lo contrario**: √2 SÍ es racional, o sea, √2 = a/b, con a y
   b enteros y la fracción ya simplificada al máximo (sin factores
   comunes entre a y b).
2. Elevando al cuadrado: 2 = a²/b² → a² = 2b².
3. Entonces a² es par (es 2 veces algo). Si a² es par, a también tiene
   que ser par (el cuadrado de un impar es impar, ver
   `../demostracion-deduccion/teoria.md`). Entonces a = 2k para algún
   entero k.
4. Reemplazando: (2k)² = 2b² → 4k² = 2b² → b² = 2k². Por el mismo
   argumento, b también es par.
5. **Contradicción**: a y b son los dos pares, pero se había supuesto que
   la fracción a/b ya estaba simplificada al máximo (sin factores
   comunes) — si los dos son pares, comparten el factor 2, así que NO
   estaba simplificada. Contradicción.
6. Como suponer "√2 es racional" lleva a una contradicción, esa suposición
   es falsa: **√2 es irracional**.

## Otro ejemplo: no existe el mayor número entero

1. Suponer que SÍ existe: sea N el mayor entero posible.
2. Pero N + 1 también es un entero, y N + 1 > N.
3. Contradicción: N no era el mayor, porque N+1 es más grande.
4. Por lo tanto, no existe el mayor entero.

## Diferencia con contraejemplo

No hay que confundirlos: un **contraejemplo** (ver
`../demostracion-contraejemplo/`) refuta una afirmación general
mostrando UN caso concreto que falla. La **reducción al absurdo**
**prueba** una afirmación (no la refuta), usando un argumento lógico
general — no un caso numérico puntual.

## Errores comunes

- Llegar a algo simplemente "raro" o "inesperado", sin que sea una
  contradicción lógica real (dos afirmaciones que no pueden ser ciertas
  al mismo tiempo).
- Negar mal la afirmación original: la negación de "todo x cumple A" es
  "existe al menos un x que NO cumple A" — no es "ningún x cumple A".
- Perder el hilo de qué se supuso al principio, y terminar
  "demostrando" otra cosa distinta de la contradicción esperada.
- Aplicar reducción al absurdo cuando una demostración directa (deducción
  simple) ya alcanza — no hace falta complicar con una suposición
  contraria si el camino directo es corto.
