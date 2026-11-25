# Química — Cinética de reacción (teoria)

> Tema del MAPA: `QQ`. Depende de `./equilibrio-quimico-kc/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — 3 secciones (velocidad de reacción, energía de
activación, factores que la modifican).

---

## 1. Qué mide la cinética

La **termoquímica** (ver `../termoquimica/`) dice si una reacción libera
o absorbe energía, y el **equilibrio** dice hasta dónde llega — pero
ninguna de las dos dice **qué tan rápido** pasa. Eso es lo que estudia
la cinética: la **velocidad de reacción**, medida como el cambio de
concentración de reactivo o producto por unidad de tiempo.

```
velocidad = Δ[concentración] / Δt
```

## 2. Energía de activación (Ea)

Para que una reacción ocurra, las partículas que chocan necesitan una
energía mínima — la **energía de activación** — para romper enlaces
viejos antes de formar los nuevos. Es la "joroba" del diagrama de
energía (mencionada pero no desarrollada en `../termoquimica/`, es tema
de acá):

- Reacciones con **Ea alta**: pocas partículas tienen suficiente
  energía en un choque dado → reacción **lenta**.
- Reacciones con **Ea baja**: la mayoría de los choques alcanzan, → 
  reacción **rápida**.

Importante: la Ea **no depende** de si la reacción es endotérmica o
exotérmica — son cosas distintas. Una reacción muy exotérmica puede
igual ser lenta si su Ea es alta (ej.: la combustión del papel no
arranca sola a temperatura ambiente, aunque libere mucha energía,
porque hace falta el fósforo para superar esa barrera inicial).

## 3. Factores que aumentan la velocidad de reacción

| Factor | Por qué acelera |
|---|---|
| **Temperatura** ↑ | Más partículas alcanzan la Ea (más energía cinética promedio) |
| **Concentración** ↑ | Más partículas por volumen → más choques por segundo |
| **Superficie de contacto** ↑ (sólido molido vs. entero) | Más partículas expuestas a la vez |
| **Catalizador** | Baja la Ea abriendo un camino alternativo (no se consume en la reacción) |

## 4. Catalizadores: no cambian el resultado, cambian el camino

Un catalizador **no** cambia si la reacción es espontánea, ni cambia el
`ΔH`, ni cambia el `Kc` final — sólo hace que se llegue **más rápido**
al mismo equilibrio, bajando la energía de activación por un camino
alternativo. Al final de la reacción, el catalizador queda intacto (no
se consume, aunque participe del mecanismo).

## 5. Ejemplos resueltos

**Velocidad media de una reacción.** En una reacción, la concentración de un reactivo baja de 0,80 M a 0,20 M en
30 segundos.

```
velocidad = Δ[concentración] / Δt = (0,80 − 0,20) / 30 = 0,60 / 30 = 0,02 M/s
```

Cada segundo desaparecen, en promedio, 0,02 moles por litro de ese reactivo.

**Regla práctica de la temperatura.** Para muchas reacciones, subir 10 °C la temperatura duplica más o menos la
velocidad. De 20 °C a 40 °C (dos saltos de 10 °C), la reacción va unas 2 × 2 = 4 veces más rápido. Por eso la comida
dura más en la heladera: a 5 °C en vez de 25 °C, las reacciones que la echan a perder van unas 4 veces más lento.

