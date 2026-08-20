# Matemática — Límite (teoría)

> Tema del MAPA: `A12` (Tronco 2 — Algebraico). Depende de
> `../familias-exponencial-logaritmica/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es un límite,
límites de funciones continuas, indeterminación 0/0, límites laterales,
errores comunes).

---

## Qué es un límite

El **límite** de f(x) cuando x se acerca a un valor a (se escribe
lim(x→a) f(x)) es el valor al que se **acerca** f(x) a medida que x se
acerca a a — sin que haga falta que f esté siquiera definida
exactamente en a. Es una pregunta sobre el **comportamiento cercano**, no
sobre el valor puntual.

## Límite de una función continua: simplemente evaluar

Para un polinomio (o cualquier función sin denominadores, raíces ni
logaritmos problemáticos en ese punto), el límite coincide con evaluar la
función directamente:

```
lim(x→a) P(x) = P(a)
```

Ejemplo: lim(x→3) (x² + 2x) = 9 + 6 = 15.

## Indeterminación 0/0: factorear y simplificar

Cuando reemplazar directo da 0/0 (una expresión sin sentido, no "el
límite es 0"), hay que **factorear** antes de evaluar — el factor
problemático se cancela, y lo que queda sí se puede evaluar.

```
lim(x→2) (x² − 4)/(x − 2)
```

Reemplazar directo da (4−4)/(2−2) = 0/0 — indeterminado. Pero
factoreando (diferencia de cuadrados, ver `../polinomios-factoreo/`):

```
(x² − 4)/(x − 2) = (x+2)(x−2)/(x−2) = x + 2   (para x ≠ 2)
```

Y ahora sí se puede evaluar: lim(x→2) (x+2) = 4.

**Importante**: el límite da 4, aunque la función original no esté
definida en x=2 (division por 0 ahí) — el límite describe el
comportamiento **alrededor** de 2, no en 2.

## Límites laterales

El límite **por la izquierda** (x se acerca desde valores menores) y
**por la derecha** (desde valores mayores) pueden ser distintos. El
límite completo **existe** sólo si los dos límites laterales coinciden.

## Ejemplo resuelto

**lim(x→5) (x² − 25)/(x − 5)**
1. Reemplazar directo: (25−25)/(5−5) = 0/0, indeterminado.
2. Factorear: (x−5)(x+5)/(x−5) = x+5 (para x≠5).
3. Evaluar: lim(x→5) (x+5) = 10.

## Errores comunes

- Reemplazar directo cuando da 0/0 y concluir (mal) que "el límite es 0"
  — 0/0 no es un número, hay que simplificar primero.
- Confundir "la función no está definida en a" con "el límite no
  existe" — pueden ser cosas distintas (el ejemplo de arriba tiene
  límite 10 en x=5, aunque la función original no esté definida ahí).
- Dar por hecho que el límite existe sin comprobar que los límites
  laterales coincidan.
- Simplificar mal el factoreo, dejando el factor problemático sin
  cancelar.
