# Vida Cotidiana / Vial — Distancia de frenado (teoría)

> Tema del MAPA: `V1` (puente Álgebra → Vida Cotidiana/Vial). Depende de
> `../../matematica/ecuacion-cuadratica/` y `../../fisica/mruv/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (distancia de reacción,
distancia de frenado, distancia total, por qué crece con el cuadrado,
errores comunes).

---

## Dos distancias, no una

Cuando un conductor frena, el auto no se detiene instantáneamente. Hay
que sumar dos tramos distintos:

1. **Distancia de reacción**: lo que el auto avanza, a velocidad
   constante, durante el tiempo que tarda el conductor en darse cuenta
   del peligro y pisar el freno (típicamente ~1 segundo). Es un MRU
   simple: d_reacción = v·t_reacción.
2. **Distancia de frenado**: lo que el auto avanza desde que se empieza
   a frenar hasta detenerse por completo. Es un MRUV que termina en
   v=0 (ver `../../fisica/mruv/`): d_frenado = v²/(2a), donde a es la
   desaceleración que puede generar el sistema de frenos.

```
distancia total de detención = d_reacción + d_frenado
```

## Por qué la distancia de frenado crece con el CUADRADO de la velocidad

En d_frenado = v²/(2a), la velocidad está **elevada al cuadrado** — no
es una relación lineal. Esto tiene una consecuencia muy poco intuitiva:
duplicar la velocidad no duplica la distancia de frenado, la
**cuadruplica** (2²=4).

**El caso clásico**: ir a 120 km/h en vez de 100 km/h no es "20% más
rápido, 20% más peligroso" — es 20% más rápido, pero **44% más
distancia de frenado** (porque 1.2² = 1.44).

## Ejemplo resuelto

**Un auto va a 20 m/s. Tiempo de reacción 1 s. Desaceleración de frenado
5 m/s². ¿Cuál es la distancia total de detención?**

1. d_reacción = 20×1 = 20 m.
2. d_frenado = 20²/(2×5) = 400/10 = 40 m.
3. Total = 20+40 = 60 m.

**Si la velocidad fuera 30 m/s (50% más rápido) en vez de 20 m/s**, con
el mismo tiempo de reacción y desaceleración:

1. d_reacción = 30×1 = 30 m.
2. d_frenado = 30²/(2×5) = 900/10 = 90 m.
3. Total = 30+90 = 120 m — el doble, aunque la velocidad sólo aumentó
   un 50%.

## Errores comunes

- Pensar que la distancia de frenado crece en la misma proporción que
  la velocidad (relación lineal) — crece con el cuadrado.
- Olvidarse de sumar la distancia de reacción, y calcular sólo la
  distancia de frenado como si fuera la distancia total.
- No convertir unidades: si la velocidad está en km/h, hay que pasarla
  a m/s antes de aplicar las fórmulas (que están en el sistema SI).
- Suponer que la desaceleración de frenado es siempre la misma — en
  realidad depende del estado de los frenos, los neumáticos, y si el
  piso está mojado o seco (un piso mojado da una desaceleración menor,
  y por lo tanto mayor distancia de frenado).
