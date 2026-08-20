# Matemática — Logaritmos (teoría)

> Tema del MAPA: `N15` (Tronco 1 — Numérico). Depende de `../potencias/`
> (ver `../dependencias.md`). Último tema de la rama de Potencias
> (`../notacion-cientifica/` y `../raices/` son las otras dos ramas).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas, mejor en diapositivas.

---

## Qué es un logaritmo

El logaritmo en base b de un número x (se escribe log_b x) es el
exponente al que hay que elevar b para obtener x:

**log_b x = y ⟺ bʸ = x**

Es la operación inversa de la potenciación, mirada desde el ángulo
contrario que la raíz (ver `../raices/teoria.md`): la raíz despeja la
**base** cuando se conoce el exponente; el logaritmo despeja el
**exponente** cuando se conoce la base.

**Ejemplo**: log₁₀ 100 = 2, porque 10² = 100.

## Logaritmo en base 10 (el más común)

Cuando no se escribe la base, "log x" casi siempre significa logaritmo en
base 10 (también llamado logaritmo decimal o común): log 1.000 = 3, porque
10³ = 1.000. Va de la mano con la notación científica (ver
`../notacion-cientifica/teoria.md`): el logaritmo en base 10 de un número
dice, aproximadamente, cuántas cifras tiene.

## Casos especiales

- **log_b 1 = 0**, para cualquier base b (porque b⁰ = 1).
- **log_b b = 1**, para cualquier base b (porque b¹ = b).

## Propiedades

- **Logaritmo de un producto**: log(a × b) = log(a) + log(b).
- **Logaritmo de un cociente**: log(a ÷ b) = log(a) − log(b).
- **Logaritmo de una potencia**: log(aⁿ) = n × log(a).

Estas propiedades son el espejo exacto de las propiedades de las
potencias (ver `../potencias/teoria.md`): donde las potencias
multiplican/dividen exponentes al multiplicar/dividir bases, los
logaritmos SUMAN/RESTAN al multiplicar/dividir — porque el logaritmo,
justamente, "extrae" el exponente.
