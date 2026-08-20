# Matemática — Test de hipótesis (teoria)

> Tema del MAPA: `D14` (Tronco 4.b). Depende de
> `../intervalo-de-confianza/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varios conceptos nuevos encadenados (hipótesis,
p-valor, regla de decisión, tipos de error) que conviene mostrar paso
a paso.

---

## Las dos hipótesis

Un **test de hipótesis** es un procedimiento para decidir, a partir de
una muestra, si hay evidencia suficiente para descartar una afirmación
de partida. Empieza planteando dos hipótesis contrapuestas:

- **Hipótesis nula (H₀)**: la afirmación conservadora, "no pasa nada
  raro" — por ejemplo, "esta moneda es justa (50/50)", "este
  medicamento no tiene ningún efecto".
- **Hipótesis alternativa (H₁)**: lo que se sospecha o se quiere
  demostrar, lo contrario de H₀ — "esta moneda está cargada", "este
  medicamento sí tiene efecto".

El test **nunca demuestra que H₀ es verdadera** — como mucho, reúne
evidencia suficiente para **rechazarla**, o no encuentra evidencia
suficiente y H₀ queda en pie (sin que eso la confirme).

## El p-valor y el nivel de significancia

El **p-valor** es la probabilidad de observar un resultado tan extremo
(o más) que el obtenido en la muestra, **asumiendo que H₀ fuera
cierta**. Un p-valor chico dice: "si de verdad no pasara nada raro,
sería muy improbable ver un resultado como este".

El **nivel de significancia (α)** es el umbral que se fija de
antemano para decidir qué tan improbable tiene que ser el resultado
antes de rechazar H₀ — el valor más usado es `α = 0,05` (5%).

**Regla de decisión**:

```
si p-valor < α  →  se rechaza H₀ (resultado "estadísticamente significativo")
si p-valor ≥ α  →  no se rechaza H₀ (no hay evidencia suficiente)
```

**Ejemplo**: se tira una moneda 10 veces y salen 8 caras. Si la moneda
fuera justa (H₀), un resultado así de extremo (8 o más caras en 10
tiros) tiene una probabilidad de aproximadamente 0,055 (5,5%). Con
`α = 0,05`, como `0,055 > 0,05`, **no se rechaza H₀** — el resultado
es llamativo, pero no lo suficiente como para concluir que la moneda
está cargada.

## Los dos tipos de error

Ningún test es infalible — puede fallar en dos direcciones distintas:

- **Error de Tipo I** (falso positivo): rechazar H₀ cuando en
  realidad **era cierta** (concluir que la moneda está cargada cuando
  en realidad era justa, y sólo tocó un resultado raro por azar). Su
  probabilidad es, justamente, α.
- **Error de Tipo II** (falso negativo): NO rechazar H₀ cuando en
  realidad **era falsa** (no detectar que la moneda estaba cargada,
  aunque de verdad lo estuviera).

## Relación con el intervalo de confianza

Un test de hipótesis usa exactamente el mismo aparato matemático que
`../intervalo-de-confianza/` (error estándar, valores z) — la
diferencia es la pregunta que responde cada uno: el intervalo estima
**un rango** de valores plausibles; el test decide **sí o no** sobre
una afirmación puntual, comparando qué tan lejos cae el resultado
observado de lo que H₀ predeciría.

## Significancia estadística no es lo mismo que importancia práctica

Un resultado "estadísticamente significativo" (p-valor bajo) sólo dice
que es poco probable que haya salido por puro azar — **no dice que el
efecto sea grande o importante en la práctica**. Con una muestra
enorme, hasta una diferencia mínima y sin relevancia real puede dar un
p-valor muy bajo.

## Para qué sirve

Es la herramienta detrás de ensayos clínicos ("¿este medicamento
funciona mejor que un placebo?"), control de calidad ("¿esta máquina
cambió su producción?") y prácticamente cualquier estudio científico
que necesite decidir, con datos limitados, si un patrón observado es
real o producto del azar.
