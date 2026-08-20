# Matemática — Sistema métrico y conversiones (teoría)

> Tema del MAPA: `M2` (Tronco 3.a — Geometría: de la forma a la medida).
> Depende de `../magnitud-unidad-instrumento/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (prefijos, tabla de
equivalencias, método de conversión) mejor separadas en diapositivas.

---

## El sistema métrico decimal

El **sistema métrico decimal** organiza las unidades de una magnitud en
múltiplos y submúltiplos de 10 de una unidad base, usando siempre los
mismos prefijos:

| Prefijo | Significa | Factor |
|---|---|---|
| kilo- (k) | mil veces | × 1000 |
| hecto- (h) | cien veces | × 100 |
| deca- (da) | diez veces | × 10 |
| (unidad base) | — | × 1 |
| deci- (d) | un décimo | ÷ 10 |
| centi- (c) | un centésimo | ÷ 100 |
| mili- (m) | un milésimo | ÷ 1000 |

La unidad base de longitud es el **metro (m)**: kilómetro (km) = 1000 m,
centímetro (cm) = 1/100 m, milímetro (mm) = 1/1000 m. La unidad base de
masa es el **gramo (g)** (aunque en la vida diaria se usa más el kilogramo,
1000 g). La unidad base de capacidad es el **litro (l)**.

## Cómo convertir entre unidades

Convertir es multiplicar o dividir por la potencia de 10 que separa a las
dos unidades:

- De una unidad **más grande a una más chica** (ej. km a m): se
  **multiplica** por el factor (1 km = 1000 m → 3 km = 3 × 1000 = 3000 m).
- De una unidad **más chica a una más grande** (ej. m a km): se **divide**
  por el factor (3000 m = 3000 ÷ 1000 = 3 km).

Un atajo práctico: contar cuántos "escalones" hay entre las dos unidades
en la tabla de prefijos, y correr la coma decimal esa cantidad de lugares
(a la derecha si se va de más grande a más chica, a la izquierda al
revés). De km a cm hay 5 escalones (km→hm→dam→m→dm→cm), así que
1 km = 100 000 cm.

## Equivalencias más usadas

- **Longitud**: 1 km = 1000 m; 1 m = 100 cm; 1 m = 1000 mm; 1 cm = 10 mm.
- **Masa**: 1 kg = 1000 g; 1 g = 1000 mg; 1 tonelada = 1000 kg.
- **Capacidad**: 1 l = 1000 ml; 1 kl = 1000 l.
- **Relación capacidad-volumen**: 1 litro ocupa exactamente el mismo
  espacio que 1 decímetro cúbico (1 l = 1 dm³), y 1 ml = 1 cm³. Esta
  relación conecta el sistema métrico con el volumen, que se retoma en
  `../volumen-y-capacidad/`.

## Por qué importa tener un sistema único

Antes de que existiera el sistema métrico, cada región usaba sus propias
unidades (pies, leguas, varas), lo que hacía casi imposible comparar
medidas de un lugar a otro. El sistema métrico decimal es hoy el estándar
en casi todo el mundo (con la notable excepción de Estados Unidos, que usa
pulgadas, libras, millas) precisamente porque, al basarse siempre en
potencias de 10, convertir es tan simple como correr la coma — no hace
falta memorizar factores raros como "1 milla = 5280 pies".
