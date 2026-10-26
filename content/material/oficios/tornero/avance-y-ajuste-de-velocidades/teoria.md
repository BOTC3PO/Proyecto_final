# Oficios — Tornero — Avance y ajuste de velocidades (teoria)

> Tema propuesto en `../../../_plan-faltantes/oficios-a.md` (PLAN, avance-del-torno y ajuste-de-velocidades); sin ID en `troncos.md` todavía. Depende de `calculo-torneria/` (ver `../../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Tres parámetros que se eligen juntos

Para tornear hay que decidir tres cosas: a qué velocidad pasa el material frente al filo, cuánto avanza la herramienta por cada vuelta de la pieza, y cuánto material saca en cada pasada. A estos parámetros se los llama velocidad de corte, avance y profundidad de pasada. Juntos determinan la duración de la herramienta, el acabado, la potencia necesaria y el tiempo de trabajo.

## Velocidad de corte y revoluciones

La velocidad de corte es la velocidad lineal con la que el material pasa frente al filo, medida en metros por minuto. No depende del torno sino del material de la pieza y de la herramienta. Los materiales blandos admiten velocidades altas y los duros requieren velocidades bajas, y una herramienta de metal duro permite velocidades mayores que una de acero rápido. Los fabricantes de herramientas publican tablas con valores orientativos.

Lo que se regula en el torno son las revoluciones por minuto. Se las calcula a partir de la velocidad de corte y del diámetro de la pieza, con la relación que se vio en `calculo-torneria/`: las revoluciones son proporcionales a la velocidad de corte e inversamente proporcionales al diámetro. Por eso, para una misma velocidad de corte, una pieza chica gira mucho más rápido que una grande. Como el torno solo ofrece ciertas velocidades fijas, se elige la más cercana por debajo del valor calculado.

## Avance

El avance es el desplazamiento de la herramienta por cada vuelta de la pieza, en milímetros por vuelta. Un avance grande saca más material por unidad de tiempo pero deja un acabado rugoso, porque cada pasada deja un surco en forma de hélice cuya altura crece con el avance y disminuye con el radio de punta de la herramienta. Un avance chico mejora el acabado pero tarda más y puede hacer que el filo roce en lugar de cortar, lo que gasta la herramienta. Es habitual usar un avance grande para desbastar y uno chico para terminar.

## Profundidad de pasada

Es el espesor de material que se saca en una pasada. En el desbaste se usa la mayor profundidad que permitan la potencia de la máquina, la rigidez de la pieza y la herramienta. En el acabado se usa una profundidad pequeña y constante para no dejar marcas.

## Relación con el tiempo y la vida de la herramienta

Subir la velocidad de corte acorta mucho la vida de la herramienta, más que subir el avance. Por eso, para producir más sin desgastar de más el filo, se suele aumentar el avance antes que la velocidad. El tiempo de una pasada es la longitud a recorrer dividida por el avance por vuelta y por las revoluciones.

## Cómo ajustar sobre la marcha

La máquina da señales. Un chirrido agudo suele indicar velocidad excesiva o vibración. Una viruta azulada y quemada indica calor excesivo, y una viruta en forma de pequeñas virutas cortas y rotas indica que el material es frágil o que el avance es adecuado. Una viruta larga y continua, aunque sea cómoda de ver, es peligrosa y requiere un rompevirutas en la herramienta o un cambio de avance.

## Seguridad

Los cambios de velocidad se hacen siempre con la máquina detenida, salvo que el torno tenga variador continuo y lo indique el fabricante. No se supera nunca la velocidad máxima de giro del plato indicada por el fabricante.
