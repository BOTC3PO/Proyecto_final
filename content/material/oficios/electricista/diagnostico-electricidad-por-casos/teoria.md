# Oficios — Electricista — Diagnóstico de instalaciones por casos (teoria)

> Tema del MAPA: `OF1.diagnostico-electricidad-por-casos`
> (`troncos.md`). Depende de `../tecnicas-electricista/` (ver
> `../dependencias.md`). Cierre del oficio: acá se concentra la
> evaluación (`cuestionario.md`), a diferencia de las lecciones
> anteriores, que son informativas.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Por qué el diagnóstico es el corazón del oficio

Saber los nombres de las magnitudes eléctricas o cómo se arma un
tablero no alcanza si, frente a una falla real, no se sabe por dónde
empezar a buscar. El diagnóstico eléctrico es un proceso de
eliminación: se parte de un síntoma visible (una luz que no prende, un
disyuntor que salta) y se van descartando causas posibles con
mediciones concretas, nunca "a ojo" ni cambiando piezas al azar hasta
que algo funcione.

## Caso 1: el disyuntor salta apenas se restablece

Cuando el disyuntor diferencial salta de forma inmediata al
restablecerlo, sin que haya ningún artefacto conectado o en uso, la
causa casi siempre es una **fuga a tierra** real en la instalación
fija (un cable pelado en contacto con una caja metálica, humedad en
una conexión) — no un problema de un electrodoméstico en particular.
El método correcto es desconectar todos los circuitos del tablero uno
por uno y volver a restablecer el disyuntor después de cada
desconexión: el circuito que, al desconectarlo, permite que el
disyuntor quede arriba sin saltar, es el que tiene la fuga.

## Caso 2: el disyuntor salta solo cuando se usa un artefacto

Si el disyuntor funciona bien en general pero salta específicamente al
encender un electrodoméstico puntual, la fuga suele estar en ese
artefacto (un cable interno dañado, humedad en el motor de un
electrodoméstico), no en la instalación fija. Conviene probar el
mismo artefacto en otro tomacorriente de otro circuito: si vuelve a
hacer saltar el disyuntor ahí también, confirma que la falla está en
el artefacto, no en la instalación.

## Caso 3: la térmica salta con varios artefactos juntos

Cuando la protección termomagnética (no la diferencial) salta al usar
varios artefactos de alto consumo al mismo tiempo, generalmente no hay
ninguna falla real: la corriente demandada supera la capacidad
calibrada de esa protección, o la sección del cable fue dimensionada
para una carga menor a la real. La solución no es "poner una térmica
más grande" sin verificar antes que el cable soporte esa corriente
mayor — eso convierte un disparo seguro en un riesgo de
recalentamiento silencioso.

## Caso 4: una zona de la casa se queda sin luz, el resto funciona

Si se corta la luz sólo en una parte de la instalación (por ejemplo,
un dormitorio) mientras el resto de la casa sigue funcionando con
normalidad, el problema está acotado a ese circuito específico: puede
ser la protección de ese circuito disparada, un empalme flojo en una
caja de paso de ese tramo, o una lámpara/interruptor con una falla
puntual. No tiene sentido revisar el tablero general si el resto de
los circuitos funciona bien.

## Caso 5: un tomacorriente no tiene tensión, pero el circuito "está bien"

Cuando un tomacorriente puntual no da tensión pero la protección de su
circuito no saltó y otros tomacorrientes del mismo circuito sí
funcionan, la causa suele ser un empalme flojo o cortado específicamente
en el tramo que alimenta a ese tomacorriente — no un problema del
circuito en general. Medir con el multímetro punto por punto, desde el
tablero hacia el tomacorriente, permite ubicar exactamente en qué tramo
se corta la continuidad.

## El método, resumido

En los cinco casos se repite la misma lógica: primero, identificar si
el problema es general (todo el tablero, todo un circuito) o puntual
(un artefacto, un tomacorriente); segundo, medir antes de suponer
—tensión, continuidad, aislación, según corresponda—; tercero, aislar
la variable, probando el mismo elemento en otro punto de la
instalación cuando sea posible. Cambiar piezas sin medir es la forma
más cara y menos confiable de "solucionar" una falla eléctrica.
