# Informática — Complejidad asintótica (teoría)

> Tema del MAPA: `I1` (puente Álgebra → Informática). Depende de
> `../../matematica/familias-exponencial-logaritmica/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué mide, notación Big
O, jerarquía de crecimiento, ejemplos de algoritmos reales, errores
comunes).

---

## Qué mide la complejidad algorítmica

La **complejidad** de un algoritmo describe cómo crece el **tiempo**
(o la memoria) que necesita a medida que crece el tamaño de la entrada,
n. No mide segundos de reloj (eso depende de la computadora) — mide
cómo **escala** el trabajo cuando n se hace más grande.

## Notación Big O

Se escribe O(f(n)), y describe el **orden de crecimiento**. Los casos
más comunes, de menor a mayor:

| Notación | Nombre | Ejemplo típico |
|---|---|---|
| O(1) | Constante | Acceder a un elemento de un array por índice |
| O(log n) | Logarítmica | Búsqueda binaria en una lista ordenada |
| O(n) | Lineal | Recorrer una lista una vez |
| O(n log n) | Cuasilineal | Buenos algoritmos de ordenamiento (mergesort) |
| O(n²) | Cuadrática | Ordenamiento simple (burbuja), comparar todos los pares |
| O(2ⁿ) | Exponencial | Probar todos los subconjuntos posibles |

## Se ignoran constantes y términos de menor orden

Big O describe el comportamiento para n **grande**, así que se
simplifica: O(3n+5) se escribe O(n) (la constante 3 y el +5 no cambian
el orden de crecimiento); O(n²+n) se escribe O(n²) (el término n² domina
sobre n cuando n crece mucho).

## Por qué importa el orden y no el valor puntual

Para un n chico, un algoritmo O(n²) con constantes pequeñas puede ser
más rápido en la práctica que uno O(n log n) con constantes grandes. Big
O describe qué pasa **a la larga** (n muy grande) — es la misma idea ya
vista en `../../matematica/familias-exponencial-logaritmica/teoria.md`:
"a la larga, cualquier exponencial con base>1 termina superando a
cualquier función lineal", ahora aplicada a comparar algoritmos.

## La jerarquía de crecimiento

```
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)
```

Cada uno, eventualmente (para n suficientemente grande), termina siendo
más lento que el que está a su derecha en esa lista.

## Ejemplo resuelto

**Comparar un algoritmo O(n) con uno O(n²), para n=10 y n=1000.**

- n=10: n=10 operaciones vs. n²=100 — la diferencia es chica.
- n=1000: n=1000 vs. n²=1.000.000 — la diferencia es enorme.

A medida que n crece, la brecha entre ambos se agranda cada vez más
rápido — es el mismo fenómeno de crecimiento no lineal ya visto en
`../../matematica/`.

## Errores comunes

- Pensar que O(n²) siempre es más lento que O(n) para **cualquier** n —
  para n chico, las constantes ocultas pueden invertir esa relación en
  la práctica.
- Confundir el "peor caso" (lo que suele describir Big O) con "lo que
  siempre pasa" — un algoritmo puede tener mejor comportamiento en casos
  promedio o favorables.
- Olvidar simplificar: dejar O(3n²+5n+2) sin reducir a O(n²).
- Comparar algoritmos usando el tiempo de ejecución real en una
  computadora puntual, en vez de mirar cómo escala matemáticamente con
  n — el hardware específico no es lo que describe la complejidad
  asintótica.
