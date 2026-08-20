# Matemática — Forma polar: módulo y argumento (teoría)

> Tema del MAPA: `A15B` (Tronco 2 — Algebraico). Depende de
> `../numeros-complejos/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (módulo, argumento, forma
polar completa, multiplicar y dividir en polar, errores comunes).

---

## Otra forma de escribir el mismo número

Un número complejo a + bi se puede pensar como un punto (a, b) en un
plano (el "plano complejo": eje horizontal para la parte real, eje
vertical para la parte imaginaria). La **forma binómica** (a+bi) usa las
coordenadas de ese punto; la **forma polar** usa, en cambio, la
**distancia al origen** y el **ángulo** — las mismas dos formas que
existen para ubicar cualquier punto del plano.

## Módulo: la distancia al origen

El **módulo** de a+bi (se escribe |z|) es la distancia del punto (a,b) al
origen (0,0) — se calcula con el teorema de Pitágoras:

```
|z| = √(a² + b²)
```

Ejemplo: el módulo de 3 + 4i es √(9+16) = √25 = 5.

## Argumento: el ángulo

El **argumento** de a+bi (se escribe arg(z), o θ) es el ángulo que forma
el segmento desde el origen hasta (a,b), medido desde el eje real
positivo (el mismo sentido que un ángulo en trigonometría). Se calcula
con arctan(b/a), con cuidado de ajustar según en qué cuadrante cae el
punto (arctan por sí solo no distingue todos los cuadrantes).

**Casos especiales fáciles de recordar** (sobre los ejes, sin necesidad
de calcular ningún arcotangente):

| Número | Módulo | Argumento |
|---|---|---|
| Un real positivo (a>0, b=0) | a | 0° |
| Un imaginario positivo puro (a=0, b>0) | b | 90° |
| Un real negativo (a<0, b=0) | \|a\| | 180° |
| Un imaginario negativo puro (a=0, b<0) | \|b\| | 270° |

## Forma polar completa

Con el módulo r y el argumento θ, el número complejo se escribe:

```
z = r (cos θ + i sen θ)
```

## Multiplicar y dividir en forma polar

La gran ventaja de la forma polar: multiplicar y dividir se vuelve mucho
más simple que en forma binómica.

- **Multiplicar**: se multiplican los módulos, y se **suman** los
  argumentos: |z₁×z₂| = |z₁|×|z₂|, arg(z₁×z₂) = arg(z₁) + arg(z₂).
- **Dividir**: se dividen los módulos, y se **restan** los argumentos:
  |z₁/z₂| = |z₁|/|z₂|, arg(z₁/z₂) = arg(z₁) − arg(z₂).

En forma binómica, multiplicar complejos necesita distribuir y usar
i²=−1 (ver `../numeros-complejos/`); en forma polar, es sólo una
multiplicación y una suma.

## Ejemplo resuelto

**Módulo y argumento de −4 (un real negativo)**: módulo = 4, argumento =
180° (está sobre el eje real negativo).

**Multiplicar dos complejos en forma polar**: z₁ tiene módulo 3 y
argumento 40°; z₂ tiene módulo 2 y argumento 25°. z₁×z₂ tiene módulo
3×2=6 y argumento 40°+25°=65°.

## Errores comunes

- Calcular el argumento con arctan(b/a) sin fijarse en qué cuadrante cae
  el punto — arctan por sí solo sólo cubre medio plano.
- Confundir el módulo con la parte real o con la parte imaginaria por
  separado — el módulo combina las dos, con Pitágoras.
- Al multiplicar en forma polar, multiplicar los argumentos en vez de
  sumarlos (o sumar los módulos en vez de multiplicarlos) — cada
  operación tiene su propia regla, no se mezclan.
