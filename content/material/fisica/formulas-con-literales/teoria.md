# Física — Toda fórmula de Física con literales (teoría)

> Tema del MAPA: `F1` (puente Álgebra → Física). Depende de
> `../../matematica/despejar-formula/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (catálogo de fórmulas,
mismo procedimiento de siempre, encadenar fórmulas, errores comunes).

---

## El mismo procedimiento, un catálogo más grande

En `../../matematica/despejar-formula/` ya se vio el procedimiento
general para despejar cualquier letra de una fórmula con varias
variables (deshacer operaciones en orden inverso, con cuidado especial
cuando la letra buscada divide). Acá se aplica exactamente ese mismo
procedimiento a las fórmulas más comunes de Física de primer año — lo
nuevo no es la técnica, es reconocer **qué fórmula usar** para cada
magnitud.

## Catálogo de fórmulas

| Fórmula | Qué relaciona |
|---|---|
| v = d/t | Velocidad, distancia y tiempo |
| a = Δv/Δt | Aceleración y cambio de velocidad en el tiempo |
| F = m·a | Fuerza, masa y aceleración (2ª ley de Newton) |
| W = F·d | Trabajo, fuerza y distancia |
| Ec = ½mv² | Energía cinética, masa y velocidad |
| Ep = m·g·h | Energía potencial gravitatoria (g ≈ 10 m/s² en cálculos simples) |
| Pot = W/t | Potencia, trabajo y tiempo |
| P = F/A | Presión, fuerza y área |
| δ = m/V | Densidad, masa y volumen (ya visto en `../../matematica/despejar-formula/`) |

## Encadenar dos fórmulas

Muchos problemas reales no dan directamente todos los datos de UNA
fórmula — hay que usar una fórmula para encontrar un dato intermedio, y
ese resultado se usa en una segunda fórmula.

**Ejemplo**: "Un auto de 800 kg recorre 100 m en 5 s, partiendo del
reposo con aceleración constante. ¿Cuánta energía cinética tiene al
final?"

1. Con d, t y partiendo del reposo: la velocidad final se puede obtener
   con v = 2d/t (fórmula de MRUV con velocidad inicial 0) → v = 40 m/s.
2. Con esa v y la masa: Ec = ½×800×40² = 640.000 J.

## Ejemplo resuelto: despejar la masa de F=ma

**Una fuerza de 50 N acelera un objeto a 2 m/s². ¿Cuál es su masa?**

F = m·a → m = F/a = 50/2 = 25 kg.

## Errores comunes

- Confundir qué fórmula corresponde a la magnitud pedida (usar F=ma
  cuando el problema pide trabajo, por ejemplo).
- Mezclar unidades sin convertir primero (mezclar km/h con segundos, o
  gramos con metros cúbicos) — el álgebra da igual, pero el número final
  queda mal si las unidades no son consistentes.
- El mismo error de siempre al despejar: no pasar multiplicando primero
  cuando la letra buscada divide (ver
  `../../matematica/despejar-formula/teoria.md`).
- En Ec=½mv², olvidarse de elevar v al cuadrado antes de multiplicar por
  ½m, o despejar mal la v (hay que dividir y después sacar raíz
  cuadrada, no al revés).

## Nota sobre unidades

Este módulo trabaja con los NÚMEROS ya en unidades consistentes (SI) —
convertir unidades (por ejemplo, km/h a m/s) es una habilidad aparte que
no se cubre en detalle acá; los enunciados ya vienen con las unidades
ajustadas para que el cálculo dé directo.
