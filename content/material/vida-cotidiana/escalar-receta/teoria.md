# Vida Cotidiana — Escalar una receta (teoria)

> Tema del MAPA: `E8` (Tronco 1 — Numérico). Depende de
> `../../matematica/regla-de-tres-directa/` (ver `../dependencias.md`).
> Cabecera de una familia grande de nodos de Vida Cotidiana
> (`E8B`-`E8H`), que no se construyen en este módulo.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — regla de proporción + matices reales de cocina.

---

## Escalar una receta: ajustar cantidades sin cambiar el resultado

Escalar una receta es ajustar las cantidades de todos sus ingredientes
para hacer más o menos porciones que las que indica la receta original,
manteniendo el mismo sabor y la misma textura. Es una aplicación directa
de la **regla de tres directa**: si se necesita el doble de porciones,
se necesita el doble de cada ingrediente — la cantidad de ingrediente y
la cantidad de porciones son directamente proporcionales.

## La fórmula

```
factor_escala = porciones_deseadas / porciones_original

nueva_cantidad = cantidad_original × factor_escala
```

**Ejemplo**: una receta para 4 porciones usa 200 g de harina. Para hacerla
para 10 porciones, el factor de escala es `10 / 4 = 2,5`, y la nueva
cantidad de harina es `200 × 2,5 = 500 g`.

## La proporción entre ingredientes no cambia

Aunque las cantidades absolutas de cada ingrediente cambian al escalar,
la **proporción entre dos ingredientes de la misma receta** se mantiene
igual — si en la receta original había el doble de harina que de azúcar,
esa relación 2:1 sigue siendo así en la receta escalada, sin importar el
factor de escala aplicado.

## No todo escala perfectamente lineal

La regla de tres directa es el punto de partida, pero en la cocina real
hay excepciones importantes que conviene conocer:

- **Condimentos y especias fuertes** (sal, ajo, picante, especias en
  general): no conviene escalarlas de forma estrictamente proporcional.
  La intensidad percibida no crece al mismo ritmo que la cantidad —
  mejor agregar gradualmente y probar, en vez de multiplicar directo por
  el factor de escala.
- **Leudantes** (levadura, polvo de hornear, bicarbonato de sodio): en
  recetas muy grandes o muy chicas, tampoco escalan siempre 1:1 — su
  efecto químico no es perfectamente lineal fuera de cierto rango de
  cantidades.
- **Tiempo de cocción**: es la excepción más importante, y la que más se
  ignora. El tiempo de cocción **NO** escala proporcional a la cantidad
  de comida. Duplicar la masa de un pan no duplica el tiempo que tarda
  en hornearse — depende de cómo se transfiere el calor hacia el centro
  (relacionado con el volumen y la superficie de contacto, no con una
  simple regla de tres). Para saber si algo está listo, conviene mirar
  la temperatura interna o señales visuales/de textura, no calcular el
  tiempo con una regla de tres.

## El redondeo práctico

A veces el resultado exacto de la regla de tres no es un número
práctico en la cocina (por ejemplo, "1,33 huevos"). En esos casos, se
puede redondear la cantidad a algo manejable, o ajustar el número de
porciones objetivo para que el resultado dé una cantidad más práctica de
cada ingrediente (por ejemplo, elegir hacer para 8 porciones en vez de
10, si eso hace que todas las cantidades den números más cómodos).

## Dónde aparece en la vida real

- **Cocinar para más o menos comensales** que los que indica una receta
  encontrada en un libro o internet.
- **Adaptar una receta casera a una cantidad más grande**, para un
  evento o para congelar porciones.
- **Achicar una receta** para probarla antes de hacerla en cantidad
  grande.
