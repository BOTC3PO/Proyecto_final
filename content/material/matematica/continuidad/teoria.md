# Matemática — Continuidad: función continua vs. discontinua (teoría)

> Tema del MAPA: `A12B` (Tronco 2 — Algebraico). Depende de
> `../limite/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (definición de
continuidad, tipos de discontinuidad, discontinuidad evitable, errores
comunes).

---

## Qué significa que una función sea continua

f es **continua** en x=a si se cumplen, a la vez, las tres condiciones:

1. **f(a) está definida** (existe un valor de la función en a).
2. **El límite de f cuando x→a existe** (ver `../limite/`).
3. **El límite es igual a f(a)** — el valor al que se acerca la función
   coincide con el valor que realmente tiene ahí.

Si falla **cualquiera** de las tres, f es **discontinua** en a.
Intuitivamente: una función continua se puede dibujar sin levantar el
lápiz del papel; una discontinuidad es un punto donde hay que levantarlo.

## Discontinuidad evitable (o removible)

Pasa cuando el límite **sí existe**, pero no coincide con f(a) — o f(a)
directamente no está definida. Se llama "evitable" porque alcanzaría con
**redefinir** el valor de f en ese único punto (igualándolo al límite)
para que la función quede continua ahí.

Ejemplo: f(x) = (x²−a²)/(x−a) no está definida en x=a (denominador 0),
pero su límite ahí existe y vale 2a (ver `../limite/teoria.md`). Es una
discontinuidad evitable — "arreglable" definiendo f(a) = 2a.

## Discontinuidad no evitable (esencial)

Pasa cuando el límite **no existe** en ese punto (por ejemplo, los
límites laterales no coinciden, o la función se dispara al infinito).
Ahí no hay ningún valor que se le pueda asignar a f(a) para "tapar el
agujero" — el quiebre es estructural.

## Continuidad en un intervalo

Una función es continua **en un intervalo** cuando es continua en **cada
uno** de los puntos de ese intervalo. Todos los polinomios son continuos
en todos los reales — nunca tienen ningún tipo de discontinuidad.

## Ejemplo resuelto

**¿Es continua f(x) = (x²−9)/(x−3) en x=3?**
1. f(3): el denominador se anula → no está definida.
2. lim(x→3) f(x) = lim(x→3) (x+3) = 6 (factoreando y cancelando).
3. Como f(3) no está definida, aunque el límite exista, f NO es
   continua en x=3 — es una discontinuidad evitable (se arreglaría
   definiendo f(3)=6).

## Errores comunes

- Confundir "tiene límite en a" con "es continua en a" — falta comparar
  ese límite con f(a).
- Pensar que cualquier función con una fracción es discontinua en TODOS
  lados — sólo lo es en los puntos donde el denominador se anula.
- Llamar "evitable" a una discontinuidad donde el límite no existe (eso
  es no evitable, por definición).
- Olvidar que los polinomios nunca tienen discontinuidades — no hace
  falta verificar nada si la función es un polinomio.
