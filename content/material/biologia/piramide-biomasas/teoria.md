# Biología — Pirámide de biomasas: energía disponible por nivel trófico (teoria)

> Tema del MAPA: `BH2`. Depende de `../cadenas-redes-troficas/` y
> `../../matematica/porcentaje/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Texto** — visualización directa de la regla del 10% ya vista, con
cálculo de porcentaje.

---

## 1. Qué es la biomasa

La **biomasa** es la masa total de materia viva en un nivel trófico
(ver `../cadenas-redes-troficas/`) en un momento dado — por ejemplo,
el peso combinado de todas las plantas de una pradera.

## 2. La forma de pirámide (no es casualidad)

Al dibujar la biomasa de cada nivel trófico como una barra horizontal
apilada, la figura siempre da una **pirámide** — ancha en la base
(productores) y angosta en la punta (últimos consumidores):

```
        /\        ← consumidores terciarios (poca biomasa)
       /  \       ← consumidores secundarios
      /    \      ← consumidores primarios
     /______\     ← productores (mucha biomasa)
```

Esto **no es casualidad**: es la consecuencia directa de la regla del
10% (ver `../flujo-materia-energia/`) — si sólo ~10% de la energía pasa
a cada nivel siguiente, sólo se puede sostener ~10% de la biomasa del
nivel anterior.

## 3. Cálculo con porcentaje

Si un nivel tiene una biomasa `B`, el siguiente nivel puede sostener
aproximadamente:

```
B_siguiente = B × 10%  =  B × 0,10
```

**Ejemplo**: 10.000 kg de pasto (productores) sostienen
aproximadamente 1.000 kg de conejos (consumidores primarios), que
sostienen aproximadamente 100 kg de zorros (consumidores secundarios).

## 4. Por qué casi nunca hay más de 4-5 niveles

Como cada nivel pierde el 90% de la energía/biomasa del anterior, después
de 4 o 5 niveles la cantidad disponible es tan chica que ya no alcanza
para sostener una población viable — por eso las pirámides tróficas
reales rara vez tienen más de 4-5 niveles (a diferencia de la materia,
que se recicla indefinidamente, la energía se agota rápido subiendo
niveles).

## 5. Diferencia con otros tipos de pirámide ecológica

Existen también pirámides de **números** (cantidad de individuos por
nivel) y de **energía** — la de biomasa es la más común porque es más
fácil de medir (pesar) que contar individuos o medir energía
directamente, y casi siempre da la forma piramidal clásica (a
diferencia de la de números, que a veces se "invierte": un solo árbol
grande puede sostener miles de insectos herbívoros).
