# Matemática — Combinaciones (teoría)

> Tema del MAPA: `CJ7` (Tronco 4.a). Depende de
> `../principio-multiplicativo-de-conteo/` (ver `../dependencias.md`).
> Hermano de `../permutaciones/` y `../variaciones/` (los tres dependen
> de `CJ4`, no unos de otros). Puerta directa hacia Probabilidad
> compuesta (Tronco 4.b, `D9P`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola idea central (elegir una parte, el orden NO
importa), no necesita separarse en varias diapositivas.

---

## Elegir una parte, sin importar el orden

Una **combinación** es cada una de las formas distintas de elegir `k`
elementos de un conjunto de `n` elementos (con `k ≤ n`), sin repetir
ninguno, donde el **orden no importa**: elegir A y luego B es
exactamente lo mismo que elegir B y luego A — es la misma elección.

**Ejemplo**: con las letras A, B, C, D, las combinaciones de a 2
letras son `AB`, `AC`, `AD`, `BC`, `BD`, `CD` — sólo 6 (comparado con
las 12 variaciones de a 2 del módulo anterior, porque acá `AB` y `BA`
cuentan como una sola).

## La fórmula

Se parte de la variación (`../variaciones/`) y se **divide por las
formas de ordenar** esos mismos `k` elementos (`k!`), porque cada
combinación se estaba contando una vez por cada orden posible:

```
C(n, k) = V(n, k) / k! = n! / (k! × (n−k)!)
```

Con el ejemplo anterior: `C(4, 2) = 4!/(2!×2!) = 24/(2×2) = 6`.

## Por qué se divide por k!

Cada combinación de `k` elementos corresponde a exactamente `k!`
variaciones distintas (todas las formas de ordenar esos mismos `k`
elementos). Por eso, para pasar de "cuántas variaciones hay" a
"cuántas combinaciones hay", hay que dividir por esa cantidad de
órdenes repetidos.

## Propiedad simétrica

```
C(n, k) = C(n, n−k)
```

Elegir `k` elementos para incluir es exactamente lo mismo que elegir
`n−k` elementos para **dejar afuera** — son la misma partición del
conjunto, vista desde dos lados.

## Para qué sirve

Es la herramienta detrás de cualquier "elegir un grupo de personas sin
que importen los roles" (un comité de 3 personas entre 10 candidatos,
sin distinguir cargos), de las combinaciones de lotería, y —el puente
más importante de este tronco— de la **probabilidad compuesta**
(Tronco 4.b): calcular la probabilidad de eventos como "extraer 2
cartas de un mismo color" o probabilidades genéticas complejas
(Biología) se resuelve contando combinaciones de casos favorables
sobre combinaciones de casos totales.
