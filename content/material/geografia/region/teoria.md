# Geografía — Región: cómo se agrupan territorios por rasgos compartidos (teoria)

> Tema del MAPA: `G5B` (Tronco 6, `G5 --> G5B`, agregado v2.4). Depende
> de `../division-politica/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — el quinto de los 5 Temas de la Geografía (NCGE/AAG):
Región, el único que no tenía nodo propio antes de este agregado.

---

## Qué es una región

Una **región** es un área agrupada por compartir uno o varios rasgos —
no necesariamente por tener un límite político oficial. A diferencia de
la división política (`../division-politica/`), donde el límite es una
línea formal reconocida internacionalmente, una región puede tener
bordes difusos, superponerse con otras regiones, o directamente no
tener ningún límite oficial trazado en absoluto.

## Tipos de región según qué comparten

- **Región física / natural**: territorio agrupado por un rasgo del
  medio natural — un bioma (la región amazónica), una cuenca
  hidrográfica (la región del Río de la Plata), una cordillera. No
  respeta fronteras políticas: la selva amazónica se extiende por
  Brasil, Perú, Colombia, Bolivia, Ecuador, Venezuela, Guyana y
  Surinam.
- **Región cultural**: territorio agrupado por idioma, religión,
  tradiciones o historia compartida — "el mundo hispanohablante",
  "los Balcanes", "el Cono Sur". Tampoco respeta límites políticos
  exactos, y sus bordes suelen ser más difusos que los de una región
  física.
- **Región funcional (o nodal)**: territorio organizado alrededor de un
  centro con el que se relaciona funcionalmente — el "área
  metropolitana" de una ciudad grande (el Gran Buenos Aires: la Ciudad
  Autónoma más los partidos del conurbano que funcionan como una sola
  unidad económica y de transporte, aunque sean jurisdicciones
  políticas distintas).
- **Región formal (o administrativa)**: la única que sí coincide con
  límites políticos oficiales — una provincia, un país. Es el punto
  donde región y división política se solapan.

## Por qué "División política se le acerca pero es más estrecho"

La división política es, en rigor, un CASO PARTICULAR de región (la
región formal/administrativa) — pero reducir "región" sólo a eso deja
afuera todas las formas de agrupar territorio que no siguen ningún
límite oficial: biomas, cuencas, áreas culturales, áreas metropolitanas
funcionales. Antes de este nodo, el mapa cubría 4 de los 5 Temas de la
Geografía clásicos (Ubicación, Lugar, Interacción Humano-Ambiental,
Movimiento) pero le faltaba justamente este quinto: Región.

## Ejemplo que conecta con el próximo tema

Un bioma (selva, desierto, pastizal — ver `../relieve-clima-biomas/`) es,
en la práctica, el ejemplo más claro de región física: agrupa
territorio por un rasgo natural compartido (clima y vegetación), sin
que ese agrupamiento respete ningún límite político. Es el motivo por
el que `region/` es el prerrequisito directo de `relieve-clima-biomas/`
en la cadena de dependencias.
