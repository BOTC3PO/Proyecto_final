# Química — Gases ideales: PV = nRT (teoria)

> Tema del MAPA: `QZ1`. Depende de `./mol-masa-molar/` y
> `../estados-y-cambios/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — 3 secciones (las leyes previas, la ecuación
combinada, condiciones estándar).

---

## 1. Las leyes de los gases (por separado, antes de combinarlas)

Todas describen cómo se relacionan presión (P), volumen (V) y
temperatura (T) de un gas cuando se mantiene fija una de las 3 variables:

| Ley | Se mantiene fijo | Relación |
|---|---|---|
| Boyle | Temperatura | P y V son **inversamente** proporcionales (P₁V₁ = P₂V₂) |
| Charles | Presión | V y T son **directamente** proporcionales (V₁/T₁ = V₂/T₂) |
| Gay-Lussac | Volumen | P y T son **directamente** proporcionales (P₁/T₁ = P₂/T₂) |

## 2. La ecuación combinada: gas ideal

```
P × V = n × R × T
```

- `P`: presión (atm)
- `V`: volumen (L)
- `n`: moles (ver `../mol-masa-molar/`)
- `R`: constante de los gases — **ya precargada en VBLang** como `R`
  (0,0821 L·atm/(mol·K) en estas unidades)
- `T`: temperatura, **siempre en Kelvin** (no en Celsius — ver más abajo)

## 3. La trampa más común: Celsius vs. Kelvin

`T` en esta fórmula tiene que estar en **Kelvin**, siempre:

```
K = °C + 273
```

Si el dato viene en °C, hay que convertirlo antes de usar la fórmula —
usar 25°C directo en vez de 298 K da un resultado completamente
incorrecto (no es un error chico, cambia el resultado en un factor
grande).

## 4. Condiciones normales (CNPT / STP)

"Condiciones normales" es un punto de referencia estándar para poder
comparar gases entre sí:

```
P = 1 atm
T = 273 K (0°C)
```

En estas condiciones, **1 mol de cualquier gas ideal ocupa 22,4 L**
(volumen molar) — es un atajo útil: si el problema dice "en condiciones
normales", no hace falta despejar la fórmula completa, `V = n × 22,4`.

## 5. Despejando cada variable

```
P = nRT / V
V = nRT / P
n = PV / RT
T = PV / (nR)
```
