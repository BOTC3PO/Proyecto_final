# Biología — Herencia ligada al sexo (teoria)

> Tema del MAPA: `B3` (Tronco 4.b → Biología). Depende de
> `../../matematica/probabilidad-condicional/` (ver `../dependencias.md`).
> Mitad 1 de 2 — la otra mitad es `../grupos-sanguineos/` (split de
> Claude, ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — el mecanismo cromosómico y el ejemplo cruzado
completo conviene mostrarlos en pasos separados.

---

## Por qué el sexo cambia la herencia de estos genes

En humanos, las mujeres tienen dos cromosomas X (`XX`) y los varones
tienen uno X y uno Y (`XY`). Algunos genes están ubicados **sólo en el
cromosoma X** — y eso cambia por completo cómo se hereda un alelo
recesivo ahí ubicado:

- Una **mujer** necesita **las dos copias** recesivas (`XᵃXᵃ`) para
  expresar el rasgo — igual que cualquier gen autosómico ya visto en
  `../genetica-mendeliana-punnett/`.
- Un **varón** tiene **un solo cromosoma X** — si ese único X trae el
  alelo recesivo (`XᵃY`), el rasgo se expresa directo, sin ningún
  segundo X que pueda "taparlo" con una copia dominante.

Por eso los rasgos recesivos ligados al X (hemofilia, daltonismo) son
**mucho más comunes en varones** que en mujeres.

## Mujer "portadora"

Una mujer heterocigota (`XᴬXᵃ`) tiene una copia recesiva, pero como
también tiene la dominante, **no expresa** el rasgo — es
**portadora**: no está afectada, pero puede transmitir el alelo
recesivo a su descendencia.

## Ejemplo cruzado completo

Padre **no afectado** (`XᴬY`) × madre **portadora** (`XᴬXᵃ`). El padre
aporta `Xᴬ` o `Y` (50/50); la madre aporta `Xᴬ` o `Xᵃ` (50/50) — 4
combinaciones igual de probables:

| | Xᴬ (madre) | Xᵃ (madre) |
|---|---|---|
| **Xᴬ (padre)** | XᴬXᴬ (hija no afectada) | XᴬXᵃ (hija portadora) |
| **Y (padre)** | XᴬY (hijo no afectado) | XᵃY (**hijo afectado**) |

**El resultado es asimétrico entre sexos**: ninguna hija puede salir
afectada (siempre reciben el `Xᴬ` del padre), mientras que la mitad de
los hijos varones sale afectada. Es decir:

```
P(afectado | hijo varón) = 1/2
P(afectado | hija mujer) = 0
```

## La conexión con probabilidad condicional

Este resultado es, exactamente, `../../matematica/probabilidad-condicional/`
en acción: la probabilidad de expresar el rasgo **cambia según una
condición conocida** (el sexo del hijo) — `P(afectado|varón)` y
`P(afectado|mujer)` son dos probabilidades condicionales distintas
sobre el mismo cruce, y ninguna de las dos es simplemente "la
probabilidad de estar afectado" sin más contexto.

## Otro caso: madre afectada

Si la **madre** está afectada (`XᵃXᵃ`) y el padre no (`XᴬY`): el padre
sólo aporta `Xᴬ` o `Y`, la madre sólo puede aportar `Xᵃ` (es lo único
que tiene). Resultado: **todas** las hijas son portadoras (`XᴬXᵃ`, no
afectadas) y **todos** los hijos varones están afectados (`XᵃY`) — un
patrón clásico de la herencia ligada al X (una madre afectada
"transmite" el rasgo a todos sus hijos varones).

## Para qué sirve

Explica por qué ciertas enfermedades genéticas (hemofilia, daltonismo,
distrofia muscular de Duchenne) afectan de forma muy desigual a
varones y mujeres, y es la base del asesoramiento genético para
calcular el riesgo real de un hijo, según su sexo, en familias con
antecedentes de estas condiciones.
