# Matemática — Teorema de Pitágoras (teoría)

> Tema del MAPA: `M6` (Tronco 3.a — Geometría: de la forma a la medida).
> Depende de `../perimetro-y-area/`, `../triangulos/` y
> `../congruencia-de-triangulos/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (enunciado, demostración por
área, cálculo de lados, recíproco, aplicaciones) mejor separadas en
diapositivas.

---

## El teorema

En todo **triángulo rectángulo** (el que tiene un ángulo de 90°, ver
`../triangulos/`), los dos lados que forman el ángulo recto se llaman
**catetos**, y el lado opuesto al ángulo recto (el más largo de los tres,
siempre) se llama **hipotenusa**. El teorema de Pitágoras dice:

```
cateto₁² + cateto₂² = hipotenusa²
```

Es decir: la suma de los cuadrados de los catetos es igual al cuadrado de
la hipotenusa. Suele escribirse `a² + b² = c²`, con `c` reservada siempre
para la hipotenusa.

## Por qué es cierto: la demostración por área

Una forma clásica de verlo (hay decenas de demostraciones distintas): si
se dibuja un cuadrado sobre cada uno de los tres lados de un triángulo
rectángulo, el **área** del cuadrado construido sobre la hipotenusa es
exactamente igual a la suma de las áreas de los cuadrados construidos
sobre los dos catetos — de ahí que la relación use cuadrados (potencias
al cuadrado) y no los lados directamente. Esto conecta el teorema con
`../perimetro-y-area/`: literalmente compara áreas de cuadrados.

## Despejar cada lado

De la fórmula general se despeja cualquiera de los tres lados:

```
Hipotenusa:  c = √(a² + b²)
Cateto:      a = √(c² − b²)   (o  b = √(c² − a²))
```

Para hallar la hipotenusa, se suman los cuadrados de los catetos y se
saca raíz cuadrada. Para hallar un cateto, se **resta** el cuadrado del
otro cateto al cuadrado de la hipotenusa (nunca al revés, porque la
hipotenusa es siempre el lado más largo) y también se saca raíz cuadrada.

## Ternas pitagóricas

Algunos tríos de números enteros cumplen la relación exacta, sin
decimales: **3-4-5**, **5-12-13**, **8-15-17**, **7-24-25**, **20-21-29**,
**9-40-41**. Cualquier múltiplo de una terna también es una terna válida
(6-8-10, 9-12-15, 15-20-25, todos múltiplos de 3-4-5) — son casos
convenientes para practicar sin raíces "feas", pero la mayoría de los
triángulos rectángulos reales dan una hipotenusa o un cateto irracional,
que se redondea.

## El recíproco del teorema

El teorema también funciona **al revés**: si en un triángulo cualquiera
(sin saber de antemano si es rectángulo) se cumple que `a² + b² = c²`
(con `c` el lado más largo), entonces ese triángulo **es** rectángulo.
Esta es la única forma de "detectar" un ángulo recto sabiendo sólo las
longitudes de los tres lados, sin medir ningún ángulo — es lo que usan
albañiles y carpinteros con la regla práctica del "3-4-5" para asegurar
una escuadra perfecta sin transportador.

## Aplicaciones

El teorema aparece en cualquier situación donde hace falta la distancia
"en diagonal" conociendo dos distancias perpendiculares entre sí: la
longitud mínima de una escalera apoyada contra una pared (conociendo la
altura y la distancia de la base a la pared), la diagonal de una
pantalla o de un terreno rectangular, o la distancia más corta entre dos
puntos ubicados en una cuadrícula (la base de la geometría analítica que
viene después, en el Tronco 3.b).
