# Matemática — Demostración matemática: deducción (teoría)

> Tema del MAPA: `DEM1a` (Tronco 2 — Algebraico). Depende de
> `../ecuacion-primer-grado/` (ver `../dependencias.md`) — y
> conceptualmente de "Validez de un razonamiento" (Filosofía, `FI2`), un
> tema que todavía no tiene carpeta en este repo.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es demostrar, la
estructura deductiva, ejemplo resuelto, errores comunes).

---

## Qué significa "demostrar" en matemática

Una **demostración** es una cadena de afirmaciones donde cada paso se
sigue **necesariamente** del anterior (por una definición, una propiedad
ya probada, o una regla lógica), empezando de la hipótesis y llegando a
la tesis (lo que se quiere probar). No alcanza con que algo "parezca"
cierto, ni con haberlo comprobado en varios casos — hace falta que la
conclusión sea **inevitable** a partir de lo que ya se sabe.

## Deducción: de lo general a lo particular, necesariamente

La **deducción** es el tipo de razonamiento donde, si las premisas son
verdaderas, la conclusión **tiene que ser** verdadera — no hay forma de
que las premisas sean ciertas y la conclusión falsa. La forma más básica
se llama **modus ponens**:

```
Si P, entonces Q.   (premisa 1)
P.                  (premisa 2)
Por lo tanto, Q.    (conclusión)
```

Ejemplo: "Si un número es par, se puede escribir como 2k" (P → Q). "8 es
par" (P). Por lo tanto, "8 se puede escribir como 2k" (Q) — y en efecto,
8 = 2×4.

## Estructura de una demostración deductiva

1. **Hipótesis**: lo que se da por conocido/asumido.
2. **Pasos justificados**: cada afirmación nueva se apoya en una
   definición, una propiedad ya demostrada, o una regla lógica —
   nunca "porque sí" o "porque se ve que sí".
3. **Tesis**: la conclusión final, que quedó probada de forma necesaria.

## Ejemplo resuelto

**Demostrar que la suma de dos números pares es par.**

1. Sea a un número par. Por definición, a = 2m para algún entero m.
2. Sea b otro número par. Por definición, b = 2n para algún entero n.
3. Entonces a + b = 2m + 2n = 2(m + n).
4. Como (m + n) es un entero, a + b tiene la forma 2×(entero) — que es
   exactamente la definición de número par.
5. Por lo tanto, a + b es par. ∎

Cada paso se apoya en el anterior y en una definición (qué es "par") —
nada quedó sin justificar.

## Por qué un ejemplo NO alcanza

Comprobar que 4+6=10 es par, o que 2+8=10 también, **no demuestra** que
la suma de dos pares siempre sea par — sólo muestra que funciona en esos
casos puntuales. La demostración de arriba prueba el caso **general**
(cualquier a y b pares, no números concretos), que es lo que realmente
hace falta. (Un solo caso que **falle** sí alcanza para refutar una
afirmación general — eso es un contraejemplo, tema de
`../demostracion-contraejemplo/`.)

## Errores comunes

- **Petición de principio** (razonamiento circular): usar como paso
  intermedio, disfrazado, lo mismo que se quiere demostrar.
- Saltar un paso sin decir en qué definición o propiedad se apoya.
- Confundir "lo comprobé en varios casos" con "lo demostré" — verificar
  ejemplos da confianza, pero no es una demostración deductiva.
- Usar una propiedad que en realidad no está probada todavía (asumir algo
  que hace falta demostrar antes).
