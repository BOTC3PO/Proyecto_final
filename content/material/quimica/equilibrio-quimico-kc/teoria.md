# Química — Equilibrio químico y Kc (teoria)

> Tema del MAPA: `QP`. Depende de `../balanceo-ecuaciones/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — 3 secciones (equilibrio dinámico, la constante Kc,
principio de Le Chatelier).

---

## 1. Equilibrio dinámico (no es que la reacción "se para")

Muchas reacciones son **reversibles**: los productos pueden reaccionar
entre sí y volver a formar los reactivos. El **equilibrio** se alcanza
cuando la velocidad de la reacción **directa** (reactivos→productos) se
iguala a la velocidad de la reacción **inversa**
(productos→reactivos) — en ese punto, las concentraciones ya no
cambian, pero la reacción **sigue ocurriendo en ambos sentidos** (por
eso es "dinámico", no que se detuvo).

## 2. La constante de equilibrio Kc

Para una reacción genérica `aA + bB ⇌ cC + dD`:

```
Kc = [C]^c × [D]^d / ([A]^a × [B]^b)
```

- `[X]` = concentración molar de `X` **en el equilibrio** (no la
  inicial).
- Los exponentes son los **coeficientes** de la ecuación balanceada
  (mismo dato que ya se usa en `../balanceo-ecuaciones/`).
- Sólidos puros y líquidos puros **no se incluyen** en la expresión de
  Kc (su "concentración" no cambia, es constante — se considera 1).

## 3. Interpretación del valor de Kc

- `Kc >> 1`: en el equilibrio predominan los **productos** (la reacción
  "va casi hasta el final").
- `Kc << 1`: en el equilibrio predominan los **reactivos** (la reacción
  "casi no avanza").
- `Kc ≈ 1`: cantidades comparables de reactivos y productos.

Kc depende sólo de la **temperatura** — no cambia si se agrega más
reactivo o producto (eso cambia las concentraciones, pero el sistema se
reacomoda hasta que el cociente vuelve a dar el mismo Kc).

## 4. Principio de Le Chatelier

Si se perturba un sistema en equilibrio (agregando/quitando sustancia,
cambiando presión o temperatura), el equilibrio se **desplaza** en la
dirección que **contrarresta** la perturbación:

- Agregar más reactivo → el equilibrio se desplaza hacia los
  **productos** (para consumir el exceso).
- Quitar producto → se desplaza hacia los **productos** (para
  reponerlo).
- Aumentar la temperatura en una reacción exotérmica → se desplaza
  hacia los **reactivos** (el sistema "trata de enfriarse" absorbiendo
  ese calor extra, ver `../termoquimica/`).
- Aumentar la presión (en gases) → se desplaza hacia el lado con
  **menos moles de gas** (para achicar el volumen que ocupan).
