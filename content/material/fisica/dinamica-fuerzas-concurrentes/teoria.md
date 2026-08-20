# Física — Dinámica: fuerzas concurrentes (teoría)

> Tema del MAPA: `F5` (Tronco 3.b — puente Geometría
> analítica/vectores → Física). Depende de
> `../leyes-de-newton/tercera-accion-reaccion/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (qué son, diagrama de
cuerpo libre, resolver el sistema, ejemplo de la lámpara) mejor
separadas en diapositivas.

---

## Qué son las fuerzas concurrentes

Las **fuerzas concurrentes** son dos o más fuerzas cuyas líneas de
acción se cruzan en un mismo punto — en la práctica, varias fuerzas
actuando **sobre un mismo objeto** al mismo tiempo, cada una en su
propia dirección. Es el caso más común en problemas reales: rara vez
actúa una sola fuerza sobre algo.

## El diagrama de cuerpo libre

Un **diagrama de cuerpo libre** es un dibujo simplificado del objeto
(reducido a un punto) con **todas** las fuerzas que actúan sobre él
dibujadas como vectores que salen de ese punto — sin dibujar los objetos
que las ejercen (la cuerda, el piso, el aire), sólo las fuerzas en sí.
Es la herramienta central para resolver cualquier problema de dinámica:
si falta una fuerza en el diagrama, el resultado va a estar mal.

## Cómo resolver un sistema de fuerzas concurrentes

El procedimiento reusa directo lo ya visto en
`../../matematica/suma-de-vectores-y-descomposicion/`:

1. Dibujar el diagrama de cuerpo libre, con todas las fuerzas.
2. **Descomponer** cada fuerza en sus componentes horizontal y vertical.
3. **Sumar** todas las componentes horizontales entre sí, y todas las
   verticales entre sí, por separado.
4. El resultado `(Fx_total, Fy_total)` es la **fuerza neta**. Su módulo
   se calcula con Pitágoras, como cualquier vector.

## Dos resultados posibles

- Si la **fuerza neta es cero**: el objeto está en **equilibrio** (ver
  `../leyes-de-newton/primera-inercia/`) — permanece en reposo o a
  velocidad constante.
- Si la **fuerza neta no es cero**: el objeto **acelera** en la
  dirección de esa fuerza neta, según `F = m·a` (ver
  `../leyes-de-newton/segunda-fma/`).

## La tensión: una fuerza muy común en estos problemas

La **tensión** es la fuerza que ejerce una cuerda, cable o cadena
tirando de un objeto, siempre a lo largo de la propia cuerda. Aparece en
casi todos los problemas clásicos de fuerzas concurrentes.

## Ejemplo clásico: la lámpara colgada de dos cables

Una lámpara cuelga de dos cables que forman ángulos distintos con el
techo. Sobre la lámpara actúan tres fuerzas: su **peso** (hacia abajo) y
la **tensión** de cada uno de los dos cables (hacia arriba, en la
dirección de cada cable). Para que la lámpara esté en equilibrio (no
caiga ni suba), la suma de las componentes verticales de ambas
tensiones tiene que ser exactamente igual al peso, y la suma de las
componentes horizontales tiene que dar cero (los dos cables se
"empujan" horizontalmente uno contra el otro).

## Para qué sirve

Resolver fuerzas concurrentes es el paso que conecta la teoría de las
leyes de Newton con problemas reales: calcular la tensión de un cable
que sostiene algo, verificar si una estructura aguanta el peso que
carga, o predecir el movimiento de un objeto empujado desde varias
direcciones a la vez.
