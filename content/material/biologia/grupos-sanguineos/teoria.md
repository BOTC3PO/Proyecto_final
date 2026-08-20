# Biología — Grupos sanguíneos (teoria)

> Tema del MAPA: `B3` (Tronco 4.b → Biología). Depende de
> `../../matematica/probabilidad-condicional/` (ver `../dependencias.md`).
> Mitad 2 de 2 — la otra mitad es `../herencia-ligada-al-sexo/` (split
> de Claude, ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — el sistema ABO (con codominancia) y el factor Rh
(dominancia simple) son dos mecanismos distintos, mejor separados.

---

## El sistema ABO: tres alelos, no dos

`../genetica-mendeliana-punnett/` trabajó siempre con **dos** alelos
posibles por gen (`A`/`a`). El grupo sanguíneo ABO es un ejemplo real
de **alelos múltiples**: hay **tres** versiones posibles del gen
(`Iᴬ`, `Iᴮ`, `i`), aunque cada persona sólo tenga **dos** de esas tres
(una de cada progenitor, como siempre).

- `Iᴬ` e `Iᴮ` son ambos **dominantes** sobre `i`.
- `Iᴬ` e `Iᴮ` son **codominantes entre sí**: si una persona tiene
  ambos, **los dos se expresan a la vez** — no "gana" ninguno.

## Codominancia vs. dominancia simple

En dominancia simple (`Aa`), la copia dominante tapa por completo a la
recesiva — el heterocigota se ve igual que el homocigota dominante.
En **codominancia** (`IᴬIᴮ`), ninguno de los dos alelos tapa al otro:
**ambos se manifiestan**, dando un fenotipo nuevo (el tipo AB).

| Genotipo | Fenotipo (grupo sanguíneo) |
|---|---|
| `IᴬIᴬ` o `Iᴬi` | A |
| `IᴮIᴮ` o `Iᴮi` | B |
| `IᴬIᴮ` | AB (codominancia: ambos se expresan) |
| `ii` | O |

## Ejemplo cruzado: por qué importa el genotipo, no sólo el fenotipo

Padre tipo AB (`IᴬIᴮ`) × madre tipo O (`ii`): el padre aporta `Iᴬ` o
`Iᴮ` (50/50); la madre sólo puede aportar `i` (es lo único que tiene).
Resultado: la mitad de los hijos son tipo A (`Iᴬi`) y la otra mitad
tipo B (`Iᴮi`) — **ningún hijo puede ser AB ni O**, aunque uno de los
padres sea AB y el otro O.

Este resultado depende de **conocer el genotipo exacto** de cada
padre, no sólo su fenotipo — dos personas tipo A pueden tener genotipo
`IᴬIᴬ` o `Iᴬi`, y el resultado posible de sus hijos cambia según cuál
sea. Calcular la probabilidad de cada genotipo posible del hijo, dado
lo que se sabe (o no) del genotipo de los padres, es otra aplicación
de `../../matematica/probabilidad-condicional/`.

## El factor Rh (aparte del sistema ABO)

El **factor Rh** es un gen **distinto** del ABO, con herencia mucho
más simple: dominancia clásica de dos alelos, `Rh+` (dominante) sobre
`Rh−` (recesivo) — una persona es Rh+ con genotipo `Rh+Rh+` o
`Rh+Rh−`, y Rh− sólo con `Rh−Rh−`. El grupo sanguíneo completo de una
persona combina ambos sistemas (por ejemplo, "A+" = tipo A del sistema
ABO, Rh positivo).

## Para qué sirve

Es la base de la compatibilidad en transfusiones de sangre (una
persona tipo O es "donante universal" porque no tiene ni `Iᴬ` ni `Iᴮ`
que puedan generar rechazo) y de cálculos de probabilidad en
determinación de paternidad: si un hijo es tipo O, ninguno de sus
padres biológicos puede ser tipo AB puro sin que haya otra explicación
— el genotipo de los hijos acota, con certeza matemática en algunos
casos, qué genotipos eran posibles en los padres.
