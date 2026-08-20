# Vida Cotidiana — Pintura y cerámicas para un ambiente (teoria)

> Tema del MAPA: `V2` (Tronco 3.a — Geometría: de la forma a la medida,
> cruce con Vida Cotidiana). Depende de
> `../../matematica/perimetro-y-area/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — dos cálculos distintos (pintura y cerámicos) que
comparten la misma base de área, mejor separados en diapositivas.

---

## El área es la base de todo

Calcular cuánta pintura o cuántos cerámicos hacen falta para un ambiente
no necesita ninguna fórmula geométrica nueva: es aplicar directo el área
ya vista en `../../matematica/perimetro-y-area/` a una superficie real
(paredes o piso), y después dividirla por lo que rinde cada producto.

## Cuánta pintura hace falta

**Paso 1 — área a pintar**: el área de las paredes es el perímetro del
ambiente por la altura, **menos** el área de puertas y ventanas (esas
superficies no se pintan) — la misma lógica de figuras compuestas con
resta ya vista en `../../matematica/area-poligonos-regulares-y-compuestas/`.

**Paso 2 — rendimiento del producto**: cada lata de pintura indica cuánto
cubre por litro. Como referencia típica, una pintura látex de interior
sobre una pared lisa rinde entre 10 y 12 m² por litro **por mano** — pero
ese número varía según la marca, la textura de la pared (una pared con
textura o un revoque nuevo consume bastante más) y el color, así que
siempre conviene revisar el rendimiento declarado en el envase concreto
que se va a usar.

**Paso 3 — cantidad de manos**: para lograr un color parejo casi siempre
hacen falta **2 manos**, no una sola — eso duplica la cantidad de
litros necesarios.

```
Litros necesarios = (área a pintar / rendimiento por litro) × cantidad de manos
```

**Paso 4 — redondear hacia arriba**: la pintura se vende en envases de
tamaño fijo (1 L, 4 L, 10 L, 20 L...), así que el resultado del cálculo
se redondea siempre **hacia arriba** al envase disponible más
conveniente — no se puede comprar "2,3 litros".

## Cuántos cerámicos hacen falta

**Paso 1 — área a revestir**: el área del piso o la pared a cubrir con
cerámicos (otra aplicación directa de `../../matematica/perimetro-y-area/`).

**Paso 2 — sumar el desperdicio**: al cortar cerámicos para ajustarlos a
los bordes, esquinas o instalaciones con diagonales, una parte del
material se pierde. Por eso se compra de más: como referencia típica, se
agrega un **10% adicional** en instalaciones simples (ambientes
rectangulares, sin diagonales), y hasta un **15%** cuando el diseño tiene
muchos cortes o piezas en diagonal.

```
Área a comprar = área a revestir × (1 + porcentaje de desperdicio)
```

**Paso 3 — redondear a cajas completas**: los cerámicos se venden en
cajas que cubren una cantidad fija de m² cada una (según el modelo). El
resultado se redondea siempre **hacia arriba** a la cantidad de cajas
completas necesarias — no se puede comprar media caja.

## Para qué sirve

Subestimar la cantidad necesaria obliga a volver a comprar (con el
riesgo de que ya no quede el mismo lote de color o de partida del
cerámico, que puede variar levemente entre lotes); sobrestimar mucho es
gastar de más. Calcular bien el área, el rendimiento real del producto y
el desperdicio esperado es lo que evita ambos problemas.
