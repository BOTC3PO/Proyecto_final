# Informática — Álgebra booleana (teoria)

> Tema del MAPA: `I2` (Tronco 5, cruza a Informática). Depende de
> `../../filosofia/validez-de-un-razonamiento/` (ver
> `../dependencias.md`). Cierre del "cruce inesperado" `Detectar
> falacias (Lengua) → Lógica proposicional (Filosofía) → Álgebra
> booleana (Informática)` señalado en `troncos.md` (v2.6).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — compuertas lógicas, tablas de verdad binarias y
su uso en programación son secciones separables.

---

## De verdadero/falso a 1/0

`../../filosofia/logica-proposicional/` usó verdadero/falso para
analizar proposiciones. El **álgebra booleana** es la misma lógica,
aplicada a **valores binarios**: **1** (verdadero/encendido) y **0**
(falso/apagado) — la base de cómo una computadora representa y opera
con información a nivel de circuitos y de código.

## Las mismas operaciones, ahora como compuertas

- **AND** (∧, equivalente a la conjunción): resultado 1 sólo si
  **ambas** entradas son 1.
- **OR** (∨, equivalente a la disyunción): resultado 1 si **al menos
  una** entrada es 1.
- **NOT** (¬, equivalente a la negación): invierte el valor (1→0,
  0→1).
- **XOR** (or exclusivo, "o uno u otro pero no ambos"): resultado 1
  sólo si las entradas son **distintas** entre sí (una es 1 y la otra
  0) — no tiene equivalente directo entre los conectores lógicos
  básicos ya vistos, es una combinación derivada.

## Tabla de verdad de AND (idéntica a la conjunción, en binario)

| A | B | A AND B |
|---|---|---|
| 1 | 1 | 1 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| 0 | 0 | 0 |

## Tabla de verdad de XOR

| A | B | A XOR B |
|---|---|---|
| 1 | 1 | 0 |
| 1 | 0 | 1 |
| 0 | 1 | 1 |
| 0 | 0 | 0 |

## En circuitos: las compuertas lógicas físicas

Cada operación booleana corresponde a una **compuerta lógica**, un
componente físico real de un circuito electrónico (dentro de un chip)
que recibe señales eléctricas de entrada (1 = hay corriente, 0 = no
hay) y produce una salida según la tabla de verdad correspondiente.
Millones de estas compuertas combinadas forman el procesador de
cualquier computadora.

## En código: los mismos operadores lógicos

En casi cualquier lenguaje de programación, `&&` (AND), `||` (OR) y
`!` (NOT) son los operadores lógicos que se usan en condicionales
(`if`) — exactamente la misma álgebra booleana, ahora escrita en
código en vez de en un circuito o en una tabla de verdad filosófica.

```
si (edad >= 18) AND (tiene_permiso):
    permitir_entrada()
```

## Para qué sirve

Álgebra booleana cierra el cruce Lengua→Filosofía→Informática: la
misma estructura lógica que empezó como error de razonamiento en
lenguaje cotidiano (falacias) y se formalizó con proposiciones
(lógica proposicional, validez) termina siendo la base física y de
código de cómo funciona una computadora — desde el circuito más
pequeño hasta la condición de un programa.
