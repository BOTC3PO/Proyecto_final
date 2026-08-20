# Vida Cotidiana — Consumo de agua y gas (teoria)

> Tema del MAPA: `V3` (Tronco 3.a — Geometría: de la forma a la medida,
> cruce con Vida Cotidiana). Depende de
> `../../matematica/volumen-y-capacidad/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (lectura de medidor,
consumo por diferencia, promedio, detección de pérdidas) mejor separadas
en diapositivas.

---

## Qué mide un medidor

Tanto el medidor de agua como el de gas miden un **volumen acumulado**:
un número que sólo crece con el tiempo, a medida que se consume más agua
o más gas. Los dos se expresan típicamente en **metros cúbicos (m³)**, la
misma unidad de volumen ya vista en
`../../matematica/volumen-y-capacidad/` — no hace falta ninguna unidad
nueva para entenderlos.

## El consumo se calcula por diferencia

El medidor no muestra "cuánto se consumió este mes": muestra el
**acumulado total** desde que se instaló. Para saber el consumo de un
período, hay que restar dos lecturas:

```
Consumo del período = lectura actual − lectura anterior
```

Es el mismo principio que un odómetro de auto: no dice cuántos km se
manejó hoy, dice el total acumulado — para saber lo de hoy, hay que
restar la lectura de ayer.

## Convertir entre m³ y litros

Como ya se vio en `../../matematica/volumen-y-capacidad/`:

```
1 m³ = 1000 litros
```

Un consumo de agua de, por ejemplo, 12 m³ en un mes equivale a 12 000
litros.

## Consumo promedio

Para comparar el ritmo de consumo entre períodos de distinta duración
(un mes de 28 días contra uno de 31, por ejemplo), conviene calcular el
**promedio diario**:

```
Consumo promedio diario = consumo total del período / cantidad de días del período
```

## Detectar una pérdida (fuga)

Un aumento brusco e inexplicado en el consumo de agua, sin que haya
cambiado la cantidad de personas en la casa ni los hábitos de uso, es una
señal típica de una **pérdida** (una canilla o cañería que gotea o
pierde, muchas veces sin verse). Un chequeo práctico real: cerrar todas
las canillas de la casa y ver si el medidor de agua sigue girando o
avanzando — si lo hace, hay una pérdida en algún punto de la instalación.

## Agua de red y gas de red vs. garrafa

El agua y el gas que llegan por red (cañería) se miden y facturan por
**volumen** (m³), leyendo el medidor. El gas envasado en **garrafa**, en
cambio, se vende y se mide por **masa** (kilogramos), no por volumen —
una garrafa "de 10 kg" es una unidad de masa de gas licuado, sin medidor
que leer.

## Para qué sirve

Entender esta mecánica permite leer la propia factura de servicios con
sentido crítico (verificar que el consumo facturado coincide con la
diferencia real de lecturas), comparar el consumo propio entre meses o
contra el de otro hogar, y detectar a tiempo un problema como una
pérdida de agua, que de otra forma sólo se nota cuando ya generó un
gasto grande.
