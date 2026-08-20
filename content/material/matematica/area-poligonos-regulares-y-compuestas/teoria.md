# Matemática — Área de polígonos regulares y figuras compuestas (teoría)

> Tema del MAPA: `GO7` (Tronco 3.a — Geometría: de la forma a la medida).
> Depende de `../poligonos/` y `../perimetro-y-area/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — dos ideas bien distintas (área de un polígono
regular vía apotema, y área de figuras compuestas vía descomposición)
mejor separadas en diapositivas.

---

## Área de un polígono regular: el apotema

`../perimetro-y-area/` ya dio la fórmula de área para triángulo,
cuadrado, rectángulo, etc. — pero un pentágono o un hexágono regular no
tienen una fórmula tan directa. Para eso se usa el **apotema**: la
distancia perpendicular desde el centro del polígono hasta el punto medio
de cualquier lado (es, en el fondo, el "radio" de la circunferencia
inscripta en el polígono).

Cualquier polígono regular se puede dividir en `n` triángulos iguales
(uno por cada lado), trazando segmentos desde el centro hasta cada
vértice. Cada uno de esos triángulos tiene como base un lado del polígono
y como altura el apotema. Sumando el área de los `n` triángulos:

```
Área = (Perímetro × Apotema) / 2
```

Donde `Perímetro = n × lado`. Esta fórmula funciona para **cualquier**
polígono regular (pentágono, hexágono, octógono...), no sólo para las
figuras con fórmula propia ya vistas.

## Área de figuras compuestas

Una **figura compuesta** es una que combina dos o más figuras simples
(las de `../perimetro-y-area/`: cuadrados, rectángulos, triángulos,
trapecios, círculos o medios círculos...) — por ejemplo, un living con
forma de "L", una ventana rectangular con un semicírculo arriba, o un
patio cuadrado con una fuente circular en el medio.

Para calcular su área **no hace falta una fórmula nueva**: alcanza con:

1. **Descomponer** la figura compuesta en figuras simples ya conocidas.
2. Calcular el área de cada una por separado, con las fórmulas ya
   vistas.
3. **Sumar** las áreas si las figuras simples se agregan (como la "L", o
   la ventana con el semicírculo), o **restar** si una figura queda
   "recortada" dentro de otra (como el patio con la fuente en el medio,
   donde el área útil es el cuadrado MENOS el círculo).

La clave está en identificar bien qué figuras simples forman la
compuesta y si corresponde sumar o restar cada una — el cálculo en sí ya
está resuelto en `../perimetro-y-area/`.

## Para qué sirve

El apotema aparece en cualquier diseño con simetría radial (mosaicos,
rosetones, tuercas hexagonales, señales de tránsito con forma de
octógono). Descomponer figuras compuestas es la habilidad real detrás de
calcular cuánto piso, pintura o material hace falta para un espacio con
forma irregular — nadie mide una habitación en forma de "L" con una sola
fórmula, la separa en dos rectángulos.
