# Cívica — Impuestos: quién cobra qué y qué se financia con eso (teoria)

> Tema del MAPA: `C14` (`C6 --> C14`). Depende de
> `../division-de-poderes/` (ver `../dependencias.md`). Distinto de
> `../../matematica/iva/` (Tronco 1, `E2`): ese calcula cuánto IVA paga
> alguien en una compra puntual; éste es la pregunta cívica de fondo.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — 3 niveles de gobierno con sus impuestos propios,
secciones separables.

---

## Investigado con WebSearch (agosto 2026)

Argentina organiza su sistema tributario en **3 niveles**, cada uno con
potestad para cobrar impuestos propios y financiar servicios distintos.
Esta estructura es estable (no cambia año a año); las alícuotas
puntuales sí cambian seguido, por eso no se hardcodean acá.

## Nivel nacional

- **IVA (Impuesto al Valor Agregado)**: grava el valor agregado en cada
  etapa de la cadena de producción y venta de bienes/servicios; lo paga,
  en la práctica, el consumidor final. Es uno de los impuestos de mayor
  recaudación del país.
- **Impuesto a las Ganancias**: grava la renta de personas y empresas —
  cuanto más se gana, mayor la alícuota (impuesto progresivo).
- Junto con el impuesto al cheque y los derechos de exportación,
  **Ganancias e IVA** explican la mayor parte de la recaudación
  nacional. Financia: gasto público nacional (educación, salud,
  seguridad social, obras públicas de alcance federal, etc. — se
  distribuye después entre Nación y provincias por el régimen de
  **coparticipación federal**, que excede el alcance de este módulo).

## Nivel provincial

- **Ingresos Brutos**: impuesto provincial que cobra un porcentaje sobre
  los ingresos de cualquier actividad económica (venta de bienes o
  servicios) realizada en el territorio de esa provincia. Cada provincia
  (y la Ciudad de Buenos Aires) tiene su propio código fiscal y sus
  propias alícuotas. Es, con amplia diferencia, el impuesto que más
  recauda a nivel provincial (representa la gran mayoría de los ingresos
  tributarios propios de las provincias). Financia: gasto provincial —
  típicamente salud pública provincial, educación provincial (sueldos
  docentes en gran parte) y seguridad provincial.
- **Impuesto Inmobiliario**: sobre la propiedad de inmuebles (más
  relacionado con la valuación fiscal del terreno/edificio), también
  provincial.

## Nivel municipal

- **ABL (Alumbrado, Barrido y Limpieza)** — llamado distinto según la
  ciudad (en CABA es "ABL" coloquial aunque la tasa real tiene otro
  nombre técnico): financia el mantenimiento urbano — alumbrado
  público, recolección de residuos, limpieza de espacios públicos.
- **Patentes (impuesto automotor)**: sobre la titularidad de un
  vehículo; financia en parte el sistema de tránsito y transporte
  municipal.

## El patrón para leer cualquier impuesto

Frente a cualquier impuesto nuevo que aparezca en una noticia, conviene
hacerse 2 preguntas: **¿qué nivel de gobierno lo cobra?** (nacional,
provincial o municipal) y **¿qué servicio público específico ayuda a
financiar?** — sin esas 2 respuestas, "pagar impuestos" es un concepto
abstracto sin conexión con los servicios que un ciudadano recibe a
cambio.

## Nota importante

Este módulo no da porcentajes ni montos concretos (cambian con
frecuencia, hay reformas tributarias periódicas) — la estructura de 3
niveles y qué impuesto corresponde a cuál es lo estable y lo que vale
la pena fijar.

Fuentes consultadas: Chequeado (explicador de Ingresos Brutos),
Argentina.gob.ar, Buenos Aires Ciudad (Ganancias e IVA), Zonaprop (ABL).
