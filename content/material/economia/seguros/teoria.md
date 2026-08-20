# Economía — Seguros: prima, cobertura y gestión del riesgo (teoria)

> Tema del MAPA: `E25B` (Tronco 1 — Numérico). Depende de
> `../valor-esperado-riesgo/` (ver `../dependencias.md`). Investigado
> con búsqueda web en agosto 2026 (Superintendencia de Seguros de la
> Nación / Argentina.gob.ar).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — vocabulario del seguro + relación con valor
esperado + las 4 estrategias de gestión del riesgo.

---

## Un seguro es transferir el riesgo, no eliminarlo

Como se vio en [valor esperado y riesgo](../valor-esperado-riesgo/teoria.md),
contratar un seguro es la lectura inversa del valor esperado: quien se
asegura paga un monto fijo y chico (la prima) para transferirle a otro
(la aseguradora) el riesgo de una pérdida grande y poco probable. El
seguro no hace que el riesgo desaparezca — lo traslada.

## Vocabulario del seguro

- **Prima**: el pago periódico (mensual, anual) que el asegurado le paga
  a la aseguradora para mantener la cobertura activa.
- **Póliza**: el documento del contrato entre la aseguradora y el
  asegurado — ahí figura qué está cubierto, cuánto cuesta la prima, y
  bajo qué condiciones.
- **Cobertura**: qué situaciones (y hasta qué monto) paga la
  aseguradora. Ningún seguro cubre absolutamente todo — la póliza
  siempre lista también las **exclusiones** (lo que no está cubierto).
- **Siniestro**: el evento cubierto que efectivamente ocurre (un choque,
  un robo, un incendio) y que dispara el derecho a reclamarle el pago a
  la aseguradora.
- **Franquicia** (o deducible): un monto o porcentaje fijado en la
  póliza que el asegurado paga de su bolsillo en cada siniestro, antes
  de que la aseguradora se haga cargo del resto. Si el costo del
  siniestro es menor a la franquicia, la aseguradora no paga nada.

## Por qué existe la franquicia

La franquicia cumple dos funciones: **baja el costo de la prima** (la
aseguradora asume menos riesgo, así que cobra menos por asegurar), y
**evita que se reclamen siniestros chiquitos** — sin franquicia,
cualquier daño menor terminaría generando trámites de reclamo que
cuestan más administrarlos que lo que valen.

## Cómo calcula la prima una aseguradora (idea general)

La aseguradora no fija la prima al azar: la calcula, para un grupo
grande de asegurados similares, en base al **valor esperado del costo
de los siniestros** (probabilidad de que ocurra un siniestro, multiplicado
por su costo promedio), más un margen que cubre sus gastos administrativos
y su ganancia. Por eso, en promedio, la prima que se paga suele ser
**mayor** que el valor esperado puro de lo que costaría el siniestro —
la aseguradora necesita cobrar de más para poder cubrir los siniestros
grandes y seguir funcionando.

## ¿Entonces conviene asegurarse?

En términos de **valor esperado puro** (sólo mirando el promedio de
plata), no contratar un seguro suele dar, en promedio, un resultado
mejor que contratarlo — justamente porque la prima incluye ese margen.
Pero la mayoría de las personas igual eligen asegurarse, y tiene
sentido: el valor esperado no captura lo que pasa si el peor escenario
ocurre (perder la casa en un incendio, un accidente grave). El seguro no
se contrata para "ganar en promedio" — se contrata para no quedar
expuesto a una pérdida que la persona no podría afrontar. Eso se llama
**aversión al riesgo**: preferir un costo chico y seguro (la prima) antes
que una probabilidad chica de una pérdida enorme.

## Gestión del riesgo: 4 estrategias, el seguro es sólo una

Contratar un seguro es una de varias formas de manejar un riesgo, no la
única:

- **Evitar**: no realizar la actividad riesgosa (no practicar un deporte
  extremo, no invertir en algo muy volátil).
- **Reducir**: tomar medidas para que el riesgo sea menos probable o
  menos grave (instalar una alarma, usar casco, mantener el auto al día).
- **Retener**: asumir el riesgo uno mismo, sin transferirlo a nadie —
  tiene sentido cuando el riesgo es chico y afrontable (por ejemplo, no
  asegurar un objeto de bajo valor).
- **Transferir**: pasarle el riesgo a otro a cambio de un pago — es,
  justamente, lo que hace un seguro.

Lo habitual es combinar varias: reducir el riesgo (manejar con
precaución) y además transferir lo que quede (tener seguro del auto).

## Dónde aparece en la vida real

- **Seguro de auto, hogar, salud, vida**: cada uno cubre un tipo
  distinto de riesgo, con su propia lógica de prima, cobertura y
  franquicia.
- **Elegir la franquicia de una póliza**: una franquicia más alta baja
  la prima mensual, a cambio de asumir más costo de bolsillo si ocurre
  un siniestro — es una decisión personal sobre cuánto riesgo retener y
  cuánto transferir.
- **Regulación en Argentina**: la **Superintendencia de Seguros de la
  Nación (SSN)** es el organismo que regula y supervisa a las
  aseguradoras del país.
