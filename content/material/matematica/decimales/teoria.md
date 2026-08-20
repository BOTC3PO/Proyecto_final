# Matemática — Decimales (teoría)

> Tema del MAPA: `N8` (mitad) — separado de "Redondeo", que tiene su
> propia teoría y cuestionario en `../redondeo/`. Depende de
> `../operaciones-fracciones/` y `../valor-posicional/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas, mejor separadas en
diapositivas.

---

## Qué es un número decimal

Un número decimal es una fracción con denominador potencia de 10 (10, 100,
1.000...), escrita con una coma en vez de como fracción. 0,3 es lo mismo
que 3/10; 0,25 es lo mismo que 25/100.

## Relación con el valor posicional

Ya visto en `../valor-posicional/teoria.md`: la primera cifra después de
la coma son los **décimos** (÷10), la segunda los **centésimos** (÷100), la
tercera los **milésimos** (÷1.000). La cantidad de cifras después de la
coma dice, directamente, qué potencia de 10 tiene como denominador la
fracción equivalente.

## Convertir entre fracción y decimal

- **De fracción a decimal**: si el denominador ya es una potencia de 10,
  se escribe directo (7/100 = 0,07). Si no lo es, se divide el numerador
  por el denominador (3/4 = 3 ÷ 4 = 0,75).
- **De decimal a fracción**: el número sin la coma va de numerador, y el
  denominador es la potencia de 10 que corresponde a la cantidad de cifras
  decimales (0,75 = 75/100, que simplificado es 3/4).

## Comparar decimales

Se alinean las comas (como alinear el valor posicional) y se compara cifra
por cifra de izquierda a derecha, igual que con los enteros. Ojo con la
cantidad de cifras: 0,5 es igual a 0,50 (agregar un cero al final de un
decimal no cambia su valor), y 0,45 es MAYOR que 0,5 sólo si se comparan
mal las cifras — en realidad 0,5 (=0,50) es mayor que 0,45.

## Sumar y restar decimales

Se alinean las comas en columna (igual que alinear el valor posicional en
enteros) y se suma o resta como siempre, cifra por cifra. Si hace falta,
se completan con ceros a la derecha para que las dos cantidades tengan la
misma cantidad de cifras decimales.

## Multiplicar decimales

Se multiplica como si fueran enteros (ignorando la coma), y al resultado
se le pone una coma contando, de derecha a izquierda, tantas cifras
decimales como sumen las dos cantidades originales. Ejemplo: 1,2 × 0,3 →
12 × 3 = 36 → entre las dos hay 2 cifras decimales en total → 0,36.
