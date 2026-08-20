# Matemática — Independencia de eventos y diagrama de árbol (teoría)

> Tema del MAPA: `D9B` (Tronco 4.b). Depende de `../combinaciones/`
> (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — dos ideas relacionadas (independencia y diagrama
de árbol) mejor separadas en diapositivas.

---

## Eventos independientes vs. dependientes

Dos eventos son **independientes** cuando el resultado de uno **no
cambia** la probabilidad del otro. Son **dependientes** cuando el
resultado de uno sí afecta la probabilidad del otro.

**Ejemplo independiente**: tirar una moneda dos veces. Que la primera
salga cara no cambia en nada la probabilidad de la segunda tirada —
sigue siendo 50/50.

**Ejemplo dependiente**: sacar dos cartas de un mazo, **sin devolver**
la primera. Si la primera carta sacada era un as, quedan menos ases
disponibles para la segunda extracción — la probabilidad de la
segunda cambió por el resultado de la primera.

## Con reposición vs. sin reposición

Es el criterio práctico más común para distinguir ambos casos:

- **Con reposición** (se devuelve lo extraído antes de la siguiente
  extracción): los eventos son **independientes**, la probabilidad no
  cambia entre extracciones.
- **Sin reposición** (no se devuelve): los eventos son
  **dependientes**, la cantidad total y de casos favorables cambia
  para la siguiente extracción.

## El diagrama de árbol

Un **diagrama de árbol** representa visualmente todos los resultados
posibles de un experimento de varios pasos, como ramas que se van
abriendo: cada paso agrega una nueva "generación" de ramas, una por
cada resultado posible de ese paso, con su probabilidad anotada sobre
la rama.

```
                    ┌─ Cara (0,5)
        Moneda 1 ──┤
                    └─ Ceca (0,5)
```

La cantidad total de "caminos" completos del árbol (de la raíz a cada
hoja final) es exactamente el principio multiplicativo de
`../principio-multiplicativo-de-conteo/`, dibujado rama por rama: si
el primer paso tiene `n₁` ramas y el segundo `n₂`, hay `n₁ × n₂`
caminos completos.

## Multiplicar a lo largo de una rama

La probabilidad de llegar a una hoja específica del árbol (una
secuencia completa de resultados) es el **producto** de las
probabilidades de cada rama que se recorre en el camino — sea el caso
independiente o dependiente (la única diferencia es si esas
probabilidades cambian de un paso al siguiente o no).

## Para qué sirve

Es el prerrequisito real de `../probabilidad-compuesta/` (calcular la
probabilidad de varios eventos a la vez): sin saber si los eventos son
independientes o no, y sin poder organizar visualmente los caminos
posibles con un árbol, calcular esa probabilidad compuesta se vuelve
un cálculo a ciegas.
