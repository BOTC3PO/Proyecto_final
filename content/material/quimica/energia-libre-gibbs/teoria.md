# Química — Energía libre de Gibbs: por qué una reacción es espontánea (teoria)

> Tema del MAPA: `QGIBBS`. Depende de `./termoquimica/` y
> `./equilibrio-quimico-kc/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — 3 secciones (entropía, la ecuación de Gibbs,
relación con Kc).

---

## 1. El otro factor: entropía (S)

`ΔH` (¿libera o absorbe calor?) no alcanza para predecir si una
reacción ocurre sola (**espontánea**) — hace falta un segundo factor:
la **entropía** (`S`), una medida del **desorden** o la dispersión de
la energía de un sistema.

- `ΔS > 0`: el sistema se desordena más (ej.: un sólido que se
  disuelve, un gas que se expande, más moles de gas en los productos
  que en los reactivos).
- `ΔS < 0`: el sistema se ordena más (menos moles de gas en productos,
  un gas que se condensa).

El universo, en conjunto, **tiende siempre a aumentar su entropía**
(segunda ley de la termodinámica) — pero eso no significa que cada
reacción individual tenga que aumentar la suya.

## 2. La ecuación de Gibbs: combina ambos factores

```
ΔG = ΔH − T × ΔS
```

(`T` en Kelvin, como siempre — ver `../gases-ideales/`). `ΔG` es la
**energía libre de Gibbs**, y su signo dice si la reacción es
espontánea:

- `ΔG < 0`: reacción **espontánea** (ocurre sola, sin ayuda externa).
- `ΔG > 0`: reacción **no espontánea** (necesita energía externa para
  ocurrir — la reacción inversa sí sería espontánea).
- `ΔG = 0`: sistema en **equilibrio** (ni avanza ni retrocede).

## 3. Las 4 combinaciones posibles de signo

| ΔH | ΔS | ΔG | ¿Espontánea? |
|---|---|---|---|
| − (libera calor) | + (más desorden) | siempre − | **Sí, siempre** |
| + (absorbe calor) | − (más orden) | siempre + | **No, nunca** |
| − | − | depende de T | Sí a **baja** T |
| + | + | depende de T | Sí a **alta** T |

**Idea clave**: cuando `ΔH` y `ΔS` "compiten" (mismo signo), quien gana
depende de la temperatura — a temperaturas altas, el término `T×ΔS`
pesa más; a temperaturas bajas, pesa menos y domina `ΔH`.

## 4. Relación con el equilibrio (Kc)

`ΔG` y `Kc` describen la misma cosa desde ángulos distintos: cuanto más
negativo es `ΔG°` (en condiciones estándar), mayor es `Kc` (la reacción
avanza más hacia los productos antes de llegar al equilibrio). En el
equilibrio mismo, `ΔG = 0` — es el punto de "no hay más fuerza neta
empujando en ninguna dirección", coherente con lo ya visto en
`../equilibrio-quimico-kc/`.
