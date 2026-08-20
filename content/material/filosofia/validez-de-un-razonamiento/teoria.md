# Filosofía — Validez de un razonamiento (teoria)

> Tema del MAPA: `FI2` (Tronco 5, `Filosofía`). Depende de
> `../logica-proposicional/` (ver `../dependencias.md`). Mismo nodo
> `FI2` alimenta también `Deducción`/`Contraejemplo`/`Reducción al
> absurdo`/`Inducción matemática` en Matemática (`troncos.md:277-280`)
> — no se reconstruye acá esa aplicación, sólo se deja la base.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — validez, formas válidas comunes y la diferencia
con la verdad de las premisas son secciones separables.

---

## Qué es un razonamiento válido

Un **razonamiento** (o argumento, en sentido lógico) tiene
**premisas** (lo que se asume como punto de partida) y una
**conclusión** (lo que se sigue de ellas). Es **válido** cuando la
conclusión se sigue **necesariamente** de las premisas — es decir, si
las premisas son verdaderas, la conclusión **tiene que ser**
verdadera. La validez es una propiedad de la **estructura** del
razonamiento, no de si sus premisas son ciertas en el mundo real.

## Validez ≠ verdad de las premisas

Este es el punto que más confunde al empezar: un razonamiento puede
ser **válido** aunque sus premisas sean **falsas** (la estructura
lógica funciona igual), y puede ser **inválido** aunque su conclusión
sea **verdadera** (llegó bien por casualidad, no por la estructura del
razonamiento).

"Todos los gatos vuelan. Firulais es un gato. Por lo tanto, Firulais
vuela." — Es **válido** (la conclusión se sigue necesariamente de las
premisas), aunque la primera premisa sea **falsa**.

## Modus ponens: la forma válida más básica

Formaliza directamente el condicional visto en
`../logica-proposicional/`:

- Premisa 1: p → q ("si p entonces q")
- Premisa 2: p ("p es verdadero")
- Conclusión: q ("por lo tanto, q")

"Si estudio, apruebo. Estudié. Por lo tanto, apruebo." — es la forma
válida más común y más intuitiva.

## Modus tollens: la forma que se apoya en negar el consecuente

- Premisa 1: p → q
- Premisa 2: ¬q ("q es falso")
- Conclusión: ¬p ("por lo tanto, p es falso")

"Si estudio, apruebo. No aprobé. Por lo tanto, no estudié." — también
válido, aunque menos intuitivo que el modus ponens al principio.

## Falacias formales comunes (razonamientos INválidos con forma parecida)

- **Afirmación del consecuente** (inválida): "Si p entonces q. q es
  verdadero. Por lo tanto, p." — "Si llueve, la calle está mojada. La
  calle está mojada. Por lo tanto, llueve" (podría estar mojada por
  otra razón, un camión regando la calle, por ejemplo).
- **Negación del antecedente** (inválida): "Si p entonces q. p es
  falso. Por lo tanto, ¬q." — "Si llueve, la calle está mojada. No
  llueve. Por lo tanto, la calle no está mojada" (mismo problema: hay
  otras causas posibles).

## Cómo verificar la validez con tablas de verdad

Un razonamiento es válido si **no existe ninguna combinación** de
valores de verdad donde las premisas sean todas verdaderas y la
conclusión sea falsa — se puede chequear construyendo la tabla de
verdad completa (`../logica-proposicional/`) y revisando esa fila
específica.

## Para qué sirve

Validez de un razonamiento es el puente directo a **álgebra
booleana** (Informática, tema siguiente): los mismos conectores y la
misma noción de "combinación que hace verdadero/falso el resultado" se
aplican ahí a circuitos y código, reemplazando verdadero/falso por 1/0.
También es la misma base lógica que reutiliza Matemática para
deducción, contraejemplo, reducción al absurdo e inducción matemática.
