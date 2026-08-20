# Matemática — Demostración matemática: inducción (teoría)

> Tema del MAPA: `DEM1d` (Tronco 2 — Algebraico). Depende de
> `../ecuacion-primer-grado/` (ver `../dependencias.md`) — y
> conceptualmente de "Validez de un razonamiento" (Filosofía, `FI2`), un
> tema que todavía no tiene carpeta en este repo.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es, los dos pasos,
la analogía del dominó, ejemplo clásico, errores comunes).

---

## Qué es la inducción matemática

La **inducción matemática** es una técnica para demostrar que una
propiedad P(n) vale para **todos** los números naturales n (a partir de
algún punto de partida, casi siempre n=1). A pesar del nombre, es una
técnica completamente **deductiva** y rigurosa — no tiene nada que ver
con "generalizar a partir de unos pocos ejemplos" (eso, como ya se vio en
`../demostracion-deduccion/`, NO es una demostración válida).

## Los dos pasos

1. **Caso base**: demostrar que la propiedad vale para el primer valor
   (por ejemplo, n = 1).
2. **Paso inductivo**: demostrar que **SI** la propiedad vale para un k
   cualquiera (la **hipótesis inductiva**: "supongamos que P(k) es
   verdadero"), **ENTONCES** también vale para k+1.

Si se prueban los dos pasos, la propiedad queda demostrada para **todos**
los números naturales a partir del caso base — no hace falta (ni se
puede) probarla uno por uno para cada n.

## La analogía del dominó

Pensar en una fila infinita de fichas de dominó:
- El **caso base** es empujar la primera ficha (cae).
- El **paso inductivo** es la garantía de que, si una ficha cualquiera
  cae, tira la siguiente.

Con esas dos cosas garantizadas, TODAS las fichas caen — sin necesidad de
empujarlas una por una.

## Ejemplo clásico: suma de los primeros n números

**Demostrar que 1 + 2 + 3 + ... + n = n(n+1)/2, para todo n ≥ 1.**

1. **Caso base** (n=1): la suma es 1, y la fórmula da 1×2/2 = 1. Coincide. ✓
2. **Paso inductivo**: suponer que vale para k (hipótesis inductiva):
   1 + 2 + ... + k = k(k+1)/2.
   Demostrar que entonces vale para k+1:
   1 + 2 + ... + k + (k+1) = [k(k+1)/2] + (k+1)
   = (k+1)×[k/2 + 1] = (k+1)(k+2)/2
   Que es exactamente la fórmula original evaluada en n = k+1. ✓
3. Por inducción, la fórmula vale para todo n ≥ 1.

El paso clave: en el paso inductivo se **usa** la hipótesis inductiva
(la suma hasta k) para construir la suma hasta k+1 — no se prueba desde
cero cada vez.

## Otro ejemplo: suma de los primeros n impares

1 = 1², 1+3 = 4 = 2², 1+3+5 = 9 = 3², 1+3+5+7 = 16 = 4²... la propiedad
"la suma de los primeros n números impares es n²" se demuestra con el
mismo esquema de dos pasos.

## Por qué NO es lo mismo que "generalizar de ejemplos"

Comprobar la fórmula para n=1, 2, 3 y 4 (como en el ejemplo de arriba) no
demuestra nada por sí solo — son sólo casos puntuales. Lo que realmente
demuestra la propiedad para **todo** n es el paso inductivo: la garantía
general de que, si vale para cualquier k, vale para k+1 también.

## Errores comunes

- Olvidarse de probar el caso base (sin él, el "efecto dominó" no tiene
  de dónde arrancar).
- En el paso inductivo, no usar realmente la hipótesis inductiva —
  demostrar P(k+1) desde cero es otra cosa, no un paso inductivo válido.
- Asumir directamente lo que se quiere probar (P(k+1)) como si fuera un
  dato, en vez de deducirlo a partir de P(k).
- Confundir la inducción matemática (rigurosa, dos pasos) con la
  "inducción" en el sentido cotidiano/científico de generalizar
  observaciones — son cosas distintas, aunque compartan el nombre.
