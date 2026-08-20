# Vida Cotidiana — Temperaturas bajo cero (teoria)

> Tema del MAPA: `V4` (Tronco 1 — Numérico). Depende de
> `../../matematica/operaciones-enteros/` (ver `../dependencias.md`).
> Aplicación cotidiana de operaciones con enteros negativos.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — comparar, sumar y restar temperaturas negativas,
con el error más común: el cruce por cero.

---

## El 0°C como punto de referencia

En la escala Celsius, **0°C** es la temperatura a la que el agua se
congela (a presión atmosférica normal). Las temperaturas **bajo cero**
son, simplemente, números **negativos** en esa misma escala: -5°C, -10°C,
-20°C.

## Comparar temperaturas negativas: al revés que los positivos

Con números negativos, la comparación se invierte respecto a lo que
podría parecer a simple vista: **-10°C es MÁS FRÍO que -5°C**, aunque 10
sea un número más grande que 5. Cuanto más negativo el número, menor es
la temperatura real. Es el mismo comportamiento de cualquier número
negativo en la recta numérica: -10 está más a la izquierda (es menor)
que -5.

## Calcular la diferencia entre dos temperaturas

```
diferencia = temperatura_final - temperatura_inicial
```

El resultado positivo significa que subió la temperatura; negativo,
que bajó.

## El error más común: el cruce por cero

Si la temperatura pasa de un valor negativo a uno positivo (o al
revés), es fácil calcular mal la diferencia "a ojo". El truco es
siempre aplicar la resta completa, con los signos correctos:

**Ejemplo**: la temperatura sube de -5°C a 3°C. La diferencia **no** es
"3 grados" (mirando sólo el número final) ni "8" porque "se ve a ojo":
es exactamente `3 - (-5) = 3 + 5 = 8` grados de suba — el termómetro
tuvo que subir los 5 grados hasta llegar a 0, y después 3 grados más
hasta llegar a 3.

## Dónde aparece en la vida real

- **Leer un pronóstico del tiempo** con temperatura mínima y máxima, y
  calcular la amplitud térmica del día (`máxima - mínima`).
- **Comparar el frío de dos días distintos**: saber que un día de -8°C
  es más frío que uno de -2°C, no al revés.
- **Un freezer o una heladera industrial**: calcular cuánto tiene que
  bajar (o subir) la temperatura para llegar a la consigna deseada.
- **Climas polares o de montaña**: interpretar temperaturas muy
  negativas y entender cuánto más frío es un lugar que otro.
