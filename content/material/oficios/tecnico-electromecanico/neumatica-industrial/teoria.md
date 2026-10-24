# Oficios — Electromecánico — Neumática industrial (teoria)

> Tema del MAPA: nodo propuesto en `../../../_plan-faltantes/oficios-b.md` (sin ID en `troncos.md` todavía). Depende de
> `elementos-de-maquinas-y-fluidos/` (ver `../../dependencias.md`). Lección informativa — la
> evaluación del oficio se concentra en `diagnostico-electromecanico-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## El aire como fuente de energía

La **neumática** usa aire comprimido para generar movimiento y fuerza. Es limpia, rápida, simple y segura frente a chispas, por lo que se usa en líneas de envasado, herramientas portátiles, sujeción de piezas, puertas automáticas y maquinaria industrial. A diferencia de la hidráulica, el aire es compresible: no entrega fuerzas tan grandes ni posiciones tan rígidas, pero es más veloz y barato.

## La producción de aire comprimido

Un **compresor** toma aire del ambiente y lo comprime, y lo envía a un **tanque** (acumulador) que amortigua las variaciones y permite que el compresor descanse. Al comprimirse, el aire se calienta y arrastra humedad: por eso hay **secadores** y **purgas**. La presión de trabajo habitual en la industria ronda los 6 bar. De allí sale una red de cañerías con derivaciones hacia los puntos de consumo. Las pérdidas por fugas en esa red son una causa muy común de gasto de energía: un compresor trabaja mucho tiempo solo para compensar escapes.

## La unidad de mantenimiento

Antes de cada máquina se coloca una **unidad de mantenimiento FRL**: un **filtro** que retiene agua y partículas, un **regulador** que fija la presión de trabajo y, a veces, un **lubricador** que agrega una neblina de aceite. El filtro se drena y se limpia, y el regulador se ajusta según el equipo. Una máquina sin esta unidad se deteriora rápido.

## Actuadores y válvulas

Los **cilindros** neumáticos transforman el aire en movimiento lineal. Los de **simple efecto** tienen un resorte de retorno; los de **doble efecto** reciben aire por ambos lados. La fuerza teórica es la presión por el área del émbolo, menos las pérdidas por rozamiento. Hay también motores neumáticos y pinzas. Las **válvulas direccionales** se nombran con dos números: **3/2** (tres vías, dos posiciones) para cilindros de simple efecto, y **5/2** (cinco vías, dos posiciones) para los de doble efecto. Pueden accionarse a mano, con rodillo, con aire (pilotaje) o con un **solenoide eléctrico** gobernado por un PLC. Las **válvulas reguladoras de caudal** controlan la velocidad del cilindro, y las **antirretorno** y de escape rápido completan los circuitos.

## Un circuito básico

Para comandar un cilindro de doble efecto con una válvula 5/2 de accionamiento por solenoide: la presión llega a la válvula; en una posición, el aire entra por un lado del cilindro y sale por el otro, y el vástago avanza; al cambiar la posición, se invierte y el vástago retrocede. Los **finales de carrera** o sensores magnéticos informan que el cilindro llegó al extremo, y esa señal permite encadenar secuencias. Los esquemas se dibujan con la simbología normalizada, igual que en hidráulica.

## Fallas frecuentes

Cilindros lentos o sin fuerza: baja presión, fugas internas, falta de lubricación o filtro tapado. Movimientos bruscos o golpes: falta de amortiguación o regulación. Agua en el circuito: purgas que no se hacen. Válvulas que no cambian de posición: solenoide quemado, suciedad o pilotaje obstruido. Las fugas se detectan por el sonido y, mejor, con agua jabonosa en las uniones.

## Seguridad

El aire comprimido almacena energía. Una manguera que se suelta puede latiguear con violencia; las uniones se aseguran. Nunca se apunta aire comprimido hacia una persona ni se usa para limpiarse la ropa o la piel, porque puede penetrar y causar lesiones graves. Los recipientes a presión (tanques) tienen válvula de seguridad y manómetro, y requieren controles periódicos según la normativa. Antes de intervenir una máquina, se corta el aire, se **descarga la presión residual** y se bloquea la energía. Se usa protección auditiva cerca de los escapes.
