# Física — MRU: v = d/t (teoría)

> Tema del MAPA: `F2` (puente Álgebra → Física). Depende de
> `../../matematica/funcion-lineal-pendiente/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (posición como función
lineal, gráficos x-t y v-t, área bajo v-t, encuentro de dos móviles,
errores comunes).

---

## MRU: velocidad constante

El **movimiento rectilíneo uniforme** (MRU) es el caso más simple: un
objeto se mueve en línea recta a **velocidad constante**. Ya se vio la
fórmula v=d/t en `../formulas-con-literales/`; acá se mira la misma idea
como una **función**.

## La posición como función lineal del tiempo

Si un objeto parte de una posición inicial x₀ y se mueve a velocidad
constante v, su posición en el instante t es:

```
x(t) = x₀ + v·t
```

Es exactamente una función lineal (ver
`../../matematica/funcion-lineal-pendiente/`): la **pendiente** es la
velocidad v, y la **ordenada al origen** es la posición inicial x₀.

## Gráficos

- **Gráfico x-t** (posición vs. tiempo): una recta. La pendiente de esa
  recta ES la velocidad — cuanto más inclinada, más rápido se mueve el
  objeto.
- **Gráfico v-t** (velocidad vs. tiempo): una recta **horizontal**,
  porque v no cambia con el tiempo en un MRU.

## El área bajo el gráfico v-t es la distancia recorrida

En el gráfico v-t, el área entre la recta y el eje t (entre dos
instantes) es exactamente la distancia recorrida en ese intervalo. Para
velocidad constante, esa área es un rectángulo: base (tiempo) por altura
(velocidad) — la misma fórmula d=v·t, vista geométricamente. (Es un
adelanto de `../../matematica/integral/`: el área bajo una función de
velocidad siempre da la distancia, sea constante o no.)

## Encuentro de dos móviles

Cuando dos objetos se mueven al mismo tiempo (uno detrás del otro, o en
sentidos opuestos), sus posiciones son dos funciones lineales del
tiempo — encontrar cuándo (y dónde) se encuentran es resolver el sistema
de esas dos ecuaciones (ver
`../../matematica/sistemas-dos-ecuaciones/`).

## Ejemplo resuelto

**Un auto sale de x₀=10 km con v=80 km/h. ¿Dónde está a las 2.5 horas?**

x(2.5) = 10 + 80×2.5 = 10 + 200 = 210 km.

**Dos autos**: A sale del km 0 a 100 km/h; B sale del km 50 a 80 km/h, en
el mismo sentido, al mismo tiempo. ¿Cuándo se encuentran?

100t = 50 + 80t → 20t = 50 → t = 2.5 h.

## Errores comunes

- Confundir la velocidad (pendiente) con la posición inicial (ordenada
  al origen) al leer un gráfico x-t.
- Olvidar sumar x₀ y calcular sólo v·t, cuando el objeto no parte del
  origen.
- En problemas de encuentro, plantear mal el sistema (por ejemplo, no
  usar la misma variable t para los dos móviles, que se mueven al mismo
  tiempo).
- Confundir el gráfico x-t con el v-t — tienen forma distinta incluso
  para el mismo movimiento (uno es una recta inclinada, el otro
  horizontal).
