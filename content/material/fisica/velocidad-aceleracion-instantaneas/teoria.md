# Física — Velocidad y aceleración instantáneas (teoría)

> Tema del MAPA: `F4` (puente Álgebra → Física). Depende de
> `../../matematica/derivada/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (la cadena
posición→velocidad→aceleración, más allá de MRU/MRUV, velocidad media
vs. instantánea, errores comunes).

---

## La cadena de derivadas

Ya se vieron velocidad y aceleración en `../mru/` y `../mruv/`, siempre
con aceleración **constante** (o cero). Ahora, con
`../../matematica/derivada/` ya construida, se puede definir
formalmente:

```
v(t) = x'(t)     (la velocidad es la derivada de la posición)
a(t) = v'(t) = x''(t)     (la aceleración es la derivada de la velocidad)
```

Esto vale para **cualquier** función de posición, no sólo las
lineales o cuadráticas de MRU/MRUV — incluidas posiciones más complejas
donde la aceleración misma cambia con el tiempo.

## Más allá de MRU y MRUV

En MRU, a(t)=0 siempre. En MRUV, a(t) es una constante distinta de 0.
Pero si x(t) es un polinomio de grado 3 o más, a(t) ya **no** es
constante — cambia con el tiempo, y hace falta evaluarla en cada
instante por separado.

## Velocidad media vs. velocidad instantánea

- **Velocidad media** en un intervalo [t₁,t₂]: (x(t₂)−x(t₁))/(t₂−t₁) —
  un cociente incremental, la misma idea de pendiente de secante.
- **Velocidad instantánea** en un instante t: x'(t) — el límite de esa
  velocidad media cuando el intervalo se achica a un solo punto (la
  definición misma de derivada, ver `../../matematica/derivada/`).

Son la misma pregunta ("¿qué tan rápido cambia x?"), pero una mide un
promedio en un tramo, la otra mide el valor exacto en un punto.

## Ejemplo resuelto

**x(t) = t³ − 6t² + 9t (metros, t en segundos)**

1. v(t) = x'(t) = 3t² − 12t + 9
2. a(t) = v'(t) = 6t − 12
3. v(1) = 3−12+9 = 0 — el objeto está momentáneamente detenido en t=1
   (cambia de dirección).
4. a(1) = 6−12 = −6 m/s² — en ese mismo instante, la aceleración NO es
   0: el objeto está frenando y a punto de invertir su marcha.

## Errores comunes

- Confundir velocidad media con velocidad instantánea — son cálculos
  distintos (cociente incremental vs. derivada exacta en un punto).
- Asumir que si v(t)=0, entonces también a(t)=0 en ese instante — sólo
  es cierto en casos particulares (como el reposo total en MRU); en
  general son valores independientes.
- Derivar sólo una vez cuando se pide la aceleración (hace falta derivar
  DOS veces desde la posición: primero a velocidad, después a
  aceleración).
- Olvidar que, para movimientos más complejos que MRUV, la aceleración
  también depende del tiempo — no se puede asumir constante sin
  verificarlo.
