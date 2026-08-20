# Física — Máquinas simples: ventaja mecánica (teoría)

> Tema del MAPA: `F14` (Tronco 3.b). Depende de
> `../estatica/equilibrio-de-cuerpo-rigido/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varios tipos de máquina simple, cada uno con su
propia fórmula de ventaja mecánica, mejor separados en diapositivas.

---

## Qué es la ventaja mecánica

Una **máquina simple** es un dispositivo que cambia la relación entre
la fuerza que se aplica (el **esfuerzo**) y la fuerza que hay que
superar (la **carga** o resistencia). La **ventaja mecánica (VM)** mide
esa relación:

```
VM = carga / esfuerzo
```

Una `VM > 1` significa que se necesita **menos** fuerza que la carga
para moverla (el caso más común: levantar algo pesado con poco
esfuerzo). Una `VM < 1` es el caso opuesto: se aplica más esfuerzo del
que "sale", a cambio de más velocidad o distancia (por ejemplo, una caña
de pescar).

**Punto clave**: ninguna máquina simple **crea** energía. Por
conservación del trabajo (`../trabajo-de-una-fuerza/`), si se reduce
la fuerza necesaria, aumenta proporcionalmente la distancia que hay
que recorrer aplicando esa fuerza — el trabajo total (F×d) no cambia
(en el caso ideal, sin rozamiento).

## La palanca: tres clases, un mismo principio

Ya vista en `../estatica/equilibrio-de-cuerpo-rigido/`: la condición de
equilibrio de una palanca es exactamente `ΣM=0` respecto del punto de
apoyo (pivote):

```
F_esfuerzo × d_esfuerzo = F_carga × d_carga
VM = d_esfuerzo / d_carga
```

Según dónde esté el pivote respecto del esfuerzo y la carga, hay tres
clases:

1. **Primera clase**: el pivote está **entre** el esfuerzo y la carga
   (una balanza, unas tijeras). La VM depende de qué brazo sea más
   largo — puede ser mayor o menor que 1.
2. **Segunda clase**: la carga está **entre** el pivote y el esfuerzo
   (una carretilla). Siempre `VM > 1` — el brazo del esfuerzo siempre
   es más largo que el de la carga.
3. **Tercera clase**: el esfuerzo está **entre** el pivote y la carga
   (unas pinzas, una caña de pescar). Siempre `VM < 1` — se sacrifica
   fuerza a cambio de más velocidad/distancia en el extremo de la
   carga.

## Otras máquinas simples

- **Polea fija** (cambia sólo la dirección de la fuerza, no reduce el
  esfuerzo): `VM = 1`.
- **Polea móvil** (se mueve junto con la carga): `VM = 2`.
- **Sistema de poleas** (combinando fijas y móviles): la VM ideal es
  igual a la cantidad de tramos de cuerda que sostienen directamente la
  carga.
- **Plano inclinado** (ya visto en `../plano-inclinado-y-rozamiento/`
  desde el ángulo de descomponer fuerzas — acá se mira como máquina):
  `VM = longitud del plano / altura que se sube`. Un plano más largo
  (para la misma altura) reduce la fuerza necesaria.
- **Rueda y eje** (un volante de dirección, una manivela): `VM = R/r`,
  el radio de la rueda dividido el radio del eje.

## El rozamiento reduce la VM real

Todas estas fórmulas son la **VM ideal** (geometría pura, sin
rozamiento). En la práctica, el rozamiento (`../plano-inclinado-y-rozamiento/`)
siempre reduce la ventaja mecánica real por debajo de la ideal — parte
del esfuerzo se "pierde" venciendo la fricción en vez de mover la carga.

## Para qué sirve

Es el puente real entre la Física y los oficios: un carpintero
haciendo palanca con una barra, un mecánico usando una llave larga, un
albañil subiendo materiales por una rampa en vez de levantarlos
derecho, todos usan ventaja mecánica todos los días sin nombrarla así.
