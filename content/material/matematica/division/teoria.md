# Matemática — División (teoría)

> Tema del MAPA: `N3` (Tronco 1 — Numérico), mitad "División" — separado de
> "Multiplicación", que tiene su propia teoría y cuestionario en
> `../multiplicacion/`. Ver `../../lista-temas-plana.md`, `../../troncos.md`
> y `../dependencias.md` (División depende de Conteo, Valor posicional,
> Suma, Resta y Multiplicación).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** (`TheoryItem.type`), mismo criterio que los 5 temas
anteriores: varias secciones (qué es, división entera, relación con la
multiplicación, propiedades, algoritmo, estimar) se siguen mejor en
diapositivas que en un bloque de prosa corrido. El algoritmo de la
división larga es, de los seis temas hechos hasta ahora, el que más se
beneficiaría de un bloque **LaTeX** o incluso un **Video** corto (Herramienta
interactiva / TheoryItem.type) mostrando el procedimiento paso a paso — es
el algoritmo más largo de explicar sólo con texto.

---

## Qué es la división

Dividir es repartir una cantidad en partes iguales, o ver cuántas veces
"entra" un número dentro de otro. El número que se reparte es el
**dividendo**; el número de partes (o el tamaño de cada parte) es el
**divisor**; el resultado es el **cociente**.

## División entera: cociente y resto

Dentro de los números naturales, no siempre el dividendo se reparte en
partes exactas. La **división entera** separa el resultado en dos partes:
dividendo = divisor × cociente + resto, con la condición de que el resto
sea siempre menor que el divisor (0 ≤ resto < divisor). Si el resto da 0,
la división es **exacta**. Ejemplo: 17 ÷ 5 → cociente 3, resto 2, porque
5 × 3 + 2 = 17 y 2 < 5.

## Relación con la multiplicación

La división es la operación **inversa** de la multiplicación (ver
`../multiplicacion/teoria.md`), igual que la resta lo es de la suma: si
a × b = c, entonces c ÷ b = a y c ÷ a = b. Esto permite verificar una
división (la "prueba de la división"): cociente × divisor + resto tiene
que dar exactamente el dividendo original.

## Por qué NO es conmutativa ni asociativa, y el caso de dividir por 0

Igual que la resta, en la división el orden importa: a ÷ b casi nunca da
lo mismo que b ÷ a. Tampoco es asociativa. Y hay un caso que no tiene
resultado posible: **dividir por 0 no está definido** — no existe ningún
número que, multiplicado por 0, dé un resultado distinto de 0, así que no
hay cociente posible salvo que el dividendo también sea 0 (y ni así hay un
único resultado).

## El algoritmo de la división larga

Se toman las cifras del dividendo de a una (o de a varias, hasta que el
número formado sea mayor o igual que el divisor), se busca cuántas veces
entra el divisor ahí (esa es la cifra del cociente), se multiplica esa
cifra por el divisor y se resta al número tomado — el resultado de esa
resta es lo que "baja" a juntarse con la próxima cifra del dividendo, y se
repite. Es, en el fondo, restar el divisor repetidas veces, organizado por
columnas para no tener que hacerlo una por una.

## Estimar antes de dividir

Redondear el dividendo (y a veces el divisor) antes de dividir da una idea
aproximada del cociente, útil para saber cuántas cifras va a tener el
resultado antes de resolver la cuenta completa.
