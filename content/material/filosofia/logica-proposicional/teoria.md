# Filosofía — Lógica proposicional (teoria)

> Tema del MAPA: `FI1` (Tronco 5, `Filosofía`). Depende de
> `../../lengua/detectar-falacias/` (ver `../dependencias.md`).
> Segundo eslabón del "cruce inesperado" `Detectar falacias → Lógica
> proposicional → Álgebra booleana` señalado en `troncos.md` (v2.6).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — proposiciones, conectores lógicos y tablas de
verdad son secciones separables.

---

## De las falacias en lenguaje natural a la lógica formal

`../../lengua/detectar-falacias/` mostró errores de razonamiento en
lenguaje cotidiano ("todo el mundo lo hace, así que está bien"). La
**lógica proposicional** da un sistema formal para analizar
razonamientos con precisión, sin depender de la ambigüedad del
lenguaje natural.

## Qué es una proposición

Una **proposición** es un enunciado que puede ser **verdadero o
falso**, sin ambigüedad (a diferencia de una pregunta, una orden o una
exclamación, que no tienen valor de verdad). "Llueve" es una
proposición; "¿Llueve?" no lo es.

Se representan con letras: **p**, **q**, **r**...

## Conectores lógicos

- **Negación** (¬p, "no p"): invierte el valor de verdad. Si p es
  verdadero, ¬p es falso.
- **Conjunción** (p ∧ q, "p y q"): verdadera sólo si **ambas** son
  verdaderas.
- **Disyunción** (p ∨ q, "p o q"): verdadera si **al menos una** es
  verdadera (disyunción inclusiva, la más común en lógica).
- **Condicional** (p → q, "si p, entonces q"): falsa **sólo** cuando p
  es verdadera y q es falsa — en cualquier otro caso, es verdadera
  (esto sorprende al principio: un condicional con antecedente falso
  es siempre verdadero, sin importar el consecuente).
- **Bicondicional** (p ↔ q, "p si y sólo si q"): verdadera cuando
  **ambas tienen el mismo valor** de verdad (las dos verdaderas o las
  dos falsas).

## Tablas de verdad

Una **tabla de verdad** muestra el resultado de un conector lógico
para **todas** las combinaciones posibles de verdad/falsedad de sus
proposiciones. Con 2 proposiciones hay 4 combinaciones (2²); con 3,
hay 8 (2³).

Tabla de verdad de la conjunción (p ∧ q):

| p | q | p ∧ q |
|---|---|---|
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | F |

Tabla de verdad del condicional (p → q) — la que más sorprende:

| p | q | p → q |
|---|---|---|
| V | V | V |
| V | F | F |
| F | V | V |
| F | F | V |

## Relación con las falacias ya vistas

El condicional formaliza justamente el tipo de relación que fallaba
en la falacia de **pendiente resbaladiza**
(`../../lengua/detectar-falacias/`): afirmar "si p entonces q" sin
justificar por qué p realmente lleva a q es tratar al condicional como
verdadero sin evidencia — la lógica proposicional da el marco para
exigir esa justificación.

## Para qué sirve

La lógica proposicional es el prerrequisito directo de **validez de
un razonamiento** (tema siguiente): antes de evaluar si una cadena de
proposiciones conectadas lógicamente es válida, hace falta dominar
qué significa cada conector y cómo se comporta en una tabla de
verdad.
