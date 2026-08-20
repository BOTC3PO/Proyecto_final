# Economía — Fondo de emergencia y diversificación (teoria)

> Tema del MAPA: `E25C` (Tronco 1 — Numérico). Depende de
> `../valor-esperado-riesgo/` (ver `../dependencias.md`). Rama hermana
> de `Seguros` — ambas cuelgan de valor esperado y riesgo, ninguna
> depende de la otra. *Decisión de Claude*: no se separó en dos módulos
> pese al "y" del título (ver `../dependencias.md`) — se leen como el
> mismo cierre de "qué hacer con los ahorros" que arranca en plazo fijo.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — dos ideas de finanzas personales, relacionadas pero
distintas: cuánto guardar líquido, y cómo repartir el resto.

---

## Fondo de emergencia: una reserva para lo inesperado

Un **fondo de emergencia** es una suma de plata guardada aparte,
pensada exclusivamente para gastos imprevistos (perder el trabajo, una
urgencia médica, un arreglo urgente) — no para gastos planeados ni para
hacer crecer el capital.

Dos reglas lo definen:

- **Prioriza liquidez, no rendimiento**: tiene que estar en algo de
  donde se pueda sacar la plata rápido y sin pérdida (una caja de
  ahorro, un plazo fijo de plazo muy corto), no en algo riesgoso o
  difícil de vender. Ganar un poco menos de interés es el costo
  aceptado a cambio de tenerlo disponible cuando haga falta.
- **Un tamaño típico**: se suele recomendar entre 3 y 6 meses de gastos
  esenciales, aunque el número exacto depende de cada situación (estabilidad
  laboral, personas a cargo, otros ingresos disponibles).

## Por qué hace falta, aunque ya se tengan otras inversiones

Sin un fondo de emergencia, un gasto imprevisto obliga a elegir entre
dos opciones malas: pedir un préstamo (a menudo con una tasa de interés
alta, como una tarjeta de crédito) o vender una inversión en el peor
momento posible (si esa inversión bajó de precio justo cuando hace
falta la plata, hay que vender igual, con pérdida). El fondo de
emergencia evita las dos cosas: es la plata que ya estaba separada, sin
tener que endeudarse ni malvender nada.

---

## Diversificación: no repartir todo el riesgo en un solo lugar

Como se vio en [valor esperado y riesgo](../valor-esperado-riesgo/teoria.md),
**diversificar** significa repartir el dinero entre varias inversiones
distintas, en vez de poner todo en una sola — resumido en la frase "no
poner todos los huevos en la misma canasta".

## Por qué funciona: activos que no se mueven siempre igual

La diversificación reduce el riesgo total sin necesariamente bajar el
valor esperado, y funciona mejor cuanto menos se mueven juntos los
activos elegidos.

**Ejemplo clásico**: una heladería gana mucho en los días soleados y
poco en los días de lluvia; una fábrica de paraguas gana poco en los
días soleados y mucho en los días de lluvia. Invertir todo en una sola
de las dos deja el resultado muy atado al clima. Invertir la mitad en
cada una da, en promedio, el mismo valor esperado que el promedio de las
dos por separado — pero con mucha menos variación: cuando el clima le va
mal a una, le va bien a la otra, y el resultado combinado queda más
estable que cualquiera de las dos por separado.

## El valor esperado de un portafolio diversificado

```
E(portafolio) = peso1 × E(activo1) + peso2 × E(activo2) + ...
```

Los pesos son la proporción del dinero invertida en cada activo, y
siempre suman 1 (o 100%). El valor esperado del portafolio combinado es,
simplemente, el promedio ponderado de los valores esperados individuales
— eso **no** cambia por diversificar. Lo que sí cambia, y baja, es el
**riesgo** (el desvío estándar) del resultado combinado, cuando los
activos elegidos no reaccionan siempre igual a los mismos eventos.

## Dónde aparece en la vida real

- **Un fondo común de inversión diversificado**: en vez de comprar
  acciones de una sola empresa, reparte la plata entre muchas empresas
  distintas (y a veces distintos países y tipos de activo).
- **No tener todos los ahorros en una sola moneda o un solo banco**:
  también es una forma de diversificación.
- **El fondo de emergencia y la diversificación no compiten entre sí**:
  el fondo de emergencia es la parte líquida y de bajo riesgo que cubre
  lo imprevisto; el resto de los ahorros, pensado para crecer a más
  largo plazo, es donde tiene sentido diversificar.
