# Química — Estequiometría (teoría)

> Tema del MAPA: `QKP` (Tronco 3.a — Geometría: de la forma a la medida,
> cruce con Química). Depende de
> `../../matematica/analisis-dimensional/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (mol, masa molar, relación
mol a mol, la cadena completa de conversión) mejor separadas en
diapositivas.

---

## Qué es la estequiometría

La **estequiometría** calcula las cantidades exactas de reactivos y
productos que participan en una reacción química, usando la ecuación
balanceada (ver `../balanceo-ecuaciones/`) como una "receta de cocina":
si la receta dice 2 tazas de harina por cada torta, la ecuación
balanceada dice cuántas moléculas de cada sustancia hacen falta o se
producen.

## El mol

El **mol** es la unidad con la que se cuenta la "cantidad de sustancia"
en química, de la misma forma que una "docena" cuenta 12 unidades: 1 mol
son siempre 6,022 × 10²³ partículas (átomos, moléculas, iones — el
**número de Avogadro**), sin importar de qué sustancia se trate.

## Masa molar

La **masa molar** de una sustancia es la masa de un mol de esa sustancia,
en gramos por mol (g/mol). Se calcula sumando las masas atómicas de todos
los átomos que forman la fórmula (los mismos valores de la tabla
periódica, en unidades de masa atómica, que numéricamente coinciden con
los g/mol). Ejemplo: la masa molar del agua (H₂O), con H ≈ 1 y O ≈ 16, es
2×1 + 16 = 18 g/mol.

## La fórmula clave: moles a partir de la masa

```
moles = masa (g) / masa molar (g/mol)
```

Es **análisis dimensional puro** (ver
`../../matematica/analisis-dimensional/`): dividir gramos por (gramos por
mol) da como resultado mol — las unidades "cierran" solas, confirmando
que la fórmula tiene sentido. De ahí se despeja también la masa:
`masa = moles × masa molar`.

## Relación mol a mol: los coeficientes de la ecuación balanceada

Los **coeficientes** de una ecuación ya balanceada (2, 1, 2 en
`2H₂ + O₂ → 2H₂O`) indican la proporción de **moles**, no de gramos, en
la que reaccionan las sustancias: por cada 2 moles de H₂ que reaccionan,
hace falta 1 mol de O₂, y se producen 2 moles de H₂O. Esa razón es la
misma sin importar cuánta cantidad real se use — es lo que permite
"escalar" la receta hacia arriba o hacia abajo.

## La cadena completa de conversión

El cálculo estequiométrico típico encadena varias conversiones, cada una
con su propio factor, exactamente como el análisis dimensional enseña a
encadenar unidades:

```
masa de A → moles de A → moles de B → masa de B
      (÷ masa molar A)  (× razón de coeficientes)  (× masa molar B)
```

**Nunca se pasa directo de masa de A a masa de B** sin pasar por moles:
los coeficientes de la ecuación relacionan partículas (moles), no gramos.

## El reactivo limitante

Cuando se mezclan dos reactivos y no están en la proporción exacta que
pide la ecuación balanceada, uno de los dos se termina primero: ese es el
**reactivo limitante**, y es el que determina la máxima cantidad de
producto que se puede formar — el otro reactivo queda sobrante ("en
exceso"), sin importar cuánto sobre.

## Para qué sirve

La estequiometría es lo que permite calcular, antes de hacer el
experimento, cuánto reactivo comprar o preparar para obtener una
cantidad determinada de producto — desde una reacción de laboratorio
hasta la producción industrial de un medicamento o un fertilizante.
