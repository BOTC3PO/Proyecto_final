# Economía — Jubilación: sistema previsional y aporte (teoria)

> Tema del MAPA: `E25D` (Tronco 1 — Numérico). Depende de
> `../interes-compuesto/` (ver `../dependencias.md`). Amplía a
> `../descuentos-obligatorios/jubilacion/`, que ya explica el sistema de
> reparto argentino, los requisitos y ANSES — acá no se repite eso, se
> agregan los otros modelos posibles y la cuenta de qué genera aportar
> con el tiempo. Investigado con búsqueda web en agosto 2026 (UDESA,
> Wikipedia ES).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — panorama de sistemas + historia real + una cuenta
concreta de interés compuesto aplicado al ahorro previsional.

---

## No hay un único modelo de sistema previsional en el mundo

En [descuentos obligatorios: el sistema jubilatorio](../descuentos-obligatorios/jubilacion/teoria.md)
ya se vio cómo funciona el sistema argentino actual. Pero no es el único
modelo posible: existen, en términos generales, tres formas de organizar
un sistema previsional.

## Los tres modelos

- **Público / de reparto**: lo que aportan los trabajadores activos HOY
  financia las jubilaciones que se pagan HOY — no hay una cuenta
  individual, es un pacto entre generaciones. Es el modelo del sistema
  argentino actual (ver el módulo anterior para el detalle).
- **Privado / de capitalización individual**: cada trabajador aporta a
  una **cuenta propia**, administrada por una empresa privada, que
  invierte esa plata en el mercado financiero. El haber jubilatorio de
  cada persona depende de cuánto se acumuló específicamente en SU
  cuenta, no de un fondo común.
- **Híbrido / mixto**: combina los dos — una parte del aporte va a un
  sistema de reparto público (que suele garantizar un piso mínimo) y
  otra parte va a una cuenta de capitalización individual (que varía
  según lo que rindió esa inversión).

Ningún modelo es intrínsecamente "el correcto": cada uno reparte el
riesgo de forma distinta (el de reparto depende de que haya suficientes
trabajadores activos financiando a los pasivos; el de capitalización
depende de cómo rinda la inversión de cada cuenta individual).

## La historia real en Argentina: de las AFJP al SIPA

Argentina pasó por los tres modelos, en momentos distintos:

- **1994**: se creó un sistema mixto, con una parte de capitalización
  individual administrada por empresas privadas llamadas **AFJP**
  (Administradoras de Fondos de Jubilaciones y Pensiones).
- **2008**: mediante la **Ley 26.425**, el Estado nacionalizó (estatizó)
  los fondos que administraban las AFJP y eliminó el régimen de
  capitalización individual, creando el **SIPA** (Sistema Integrado
  Previsional Argentino) — un sistema de reparto administrado por
  **ANSES**, el que rige hoy. El argumento oficial para el cambio fue que
  las AFJP retenían comisiones (alrededor del 2,5% de los aportes) que
  reducían lo que efectivamente se acumulaba para cada trabajador.

Es el mismo sistema de reparto ya explicado en el módulo anterior — acá
se agrega el contexto de que Argentina probó antes un modelo distinto, y
por qué se dejó de usar.

## Otros países, otros modelos

La variedad de modelos no es exclusiva de Argentina: distintos países
usan sistemas de reparto, de capitalización individual, o híbridos, con
sus propias reglas y montos (que cambian con el tiempo y no se detallan
acá, para no citar cifras que quedan desactualizadas).

---

## El "aporte": qué genera ahorrar con el tiempo

Más allá de qué modelo use un país, vale la pena entender qué hace el
interés compuesto con una serie de aportes periódicos (no un solo
capital de una vez, sino un monto fijo aportado, por ejemplo, cada mes o
cada año, durante mucho tiempo).

```
VF = aporte × ((1 + r)^n - 1) / r
```

- **aporte** = el monto fijo que se destina en cada período.
- **r** = la tasa de rendimiento por período, en forma decimal.
- **n** = la cantidad de períodos que se estuvo aportando.
- **VF** = el valor futuro acumulado, sumando todos los aportes ya
  capitalizados por interés compuesto.

Es la misma familia de fórmula que la cuota de un crédito (ver
`../cuota-credito-frances/teoria.md`), aplicada al revés: en vez de
calcular cuánto hay que pagar para cancelar una deuda, calcula cuánto se
acumula aportando un monto fijo período a período.

## Por qué importa empezar antes, no sólo aportar más

Por el efecto del interés compuesto, el TIEMPO que un aporte estuvo
invertido pesa muchísimo: empezar a ahorrar antes (aunque sea con montos
chicos) suele generar un valor futuro mayor que empezar tarde con montos
más altos, porque los aportes más viejos tuvieron muchos más períodos
para capitalizar.

## Esta cuenta aplica sobre todo a la capitalización individual

Calcular el "valor futuro" de los aportes tiene sentido claro en un
sistema de capitalización individual (donde cada aporte va a una cuenta
propia que efectivamente se invierte y crece). En un sistema de reparto
puro, el aporte de hoy no se acumula en una cuenta personal — se usa de
inmediato para pagar la jubilación de alguien más — así que ese cálculo
de valor futuro no describe cómo funciona el sistema de reparto en sí,
aunque sirve igual para entender la lógica de cualquier ahorro personal
adicional.

## Por qué se habla de ahorro previsional propio, además del aporte obligatorio

Un sistema de reparto depende de que haya suficientes trabajadores
activos aportando por cada persona jubilada. Con una población que, en
general, vive más años y tiene menos hijos que antes (una tendencia
demográfica, no una opinión política), esa relación activos/pasivos
tiende a ajustarse con el tiempo en cualquier país con este modelo — por
eso muchos especialistas en finanzas personales recomiendan armar,
además del aporte obligatorio, un ahorro previsional propio (por
ejemplo, con los conceptos ya vistos de interés compuesto y
diversificación).

## Dónde aparece en la vida real

- **Elegir cuánto ahorrar aparte del sistema obligatorio**: aplicar la
  fórmula del valor futuro de aportes periódicos para estimar cuánto se
  puede acumular empezando a distintas edades.
- **Entender un debate público real**: las reformas previsionales
  (como la de 1994 o la de 2008 en Argentina) son un tema recurrente de
  discusión económica y política — entender los tres modelos posibles
  ayuda a entender de qué se está discutiendo, más allá de estar a favor
  o en contra de una reforma puntual.
