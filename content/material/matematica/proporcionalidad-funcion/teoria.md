# Matemática — Proporcionalidad como función (teoría)

> Tema del MAPA: `A10` (Tronco 2 — Algebraico). Depende de
> `../funcion-lineal-pendiente/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (proporcionalidad directa
como función lineal, proporcionalidad inversa, cómo distinguirlas,
errores comunes).

---

## Retomando razón y proporción, ahora como función

En Tronco 1 (`../proporcion/`, `../regla-de-tres-directa/`,
`../regla-de-tres-inversa/`) ya se vio la proporcionalidad como una
técnica de cálculo. Ahora que existe el concepto de función, se puede ver
la misma idea de otra forma: la proporcionalidad **es** una función.

## Proporcionalidad directa: y = kx

Es el caso particular de una función lineal (`../funcion-lineal-pendiente/`)
con **ordenada al origen 0**: y = kx. La constante k es, al mismo tiempo,
la **constante de proporcionalidad** y la **pendiente** de la recta.

**Cómo reconocerla**: el cociente y/x es siempre el mismo número (k),
para cualquier par de valores.

Su gráfico es una recta que **siempre pasa por el origen** (0,0) — si
x=0, entonces y=k×0=0.

## Proporcionalidad inversa: y = k/x

Acá y **NO** es una función lineal. Cuando x aumenta, y disminuye (y al
revés), de forma que el **producto** x×y se mantiene constante:

```
x × y = k   (siempre el mismo valor)
```

**Cómo reconocerla**: el producto x×y es siempre el mismo número (k),
para cualquier par de valores — a diferencia de la directa, donde lo
constante es el cociente.

Su gráfico es una curva (una **hipérbola**), no una recta.

## Comparación rápida

| | Directa (y=kx) | Inversa (y=k/x) |
|---|---|---|
| Qué es constante | y/x | x×y |
| Al crecer x | y crece | y decrece |
| Gráfico | Recta por el origen | Hipérbola |
| Dominio | Todos los reales | Todos los reales excepto 0 |

## Ejemplo resuelto: directa

Si 3 kg de manzanas cuestan $1200, ¿cuánto cuestan 5 kg?
k = 1200/3 = 400 (precio por kg). y = 400x → con x=5, y=2000.

## Ejemplo resuelto: inversa

Si 4 obreros tardan 12 días en construir un muro, ¿cuánto tardarían 6
obreros (trabajando al mismo ritmo cada uno)?
k = 4×12 = 48 (el "trabajo total", constante). Con x=6 obreros:
y = 48/6 = 8 días.

## Errores comunes

- Tratar una relación de proporcionalidad inversa como si fuera lineal
  (usar y=kx en vez de y=k/x).
- Calcular k dividiendo cuando corresponde multiplicar (o al revés):
  en la directa, k=y/x; en la inversa, k=x×y.
- Olvidar que en la proporcionalidad inversa, x=0 no tiene sentido (no
  se puede dividir por 0) — el dominio excluye ese valor.
- Pensar que las dos pasan por el origen: sólo la directa pasa por
  (0,0); la inversa ni siquiera está definida en x=0.
