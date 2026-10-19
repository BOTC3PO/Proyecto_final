# Oficios — Automatización y robótica — Seguridad en robótica industrial (teoria)

> Tema del MAPA: nodo propuesto en `../../../_plan-faltantes/oficios-b.md` (sin ID en `troncos.md` todavía). Depende de
> `robotica-industrial-y-vision/` (ver `../../dependencias.md`). Lección informativa — la
> evaluación del oficio se concentra en `diagnostico-robotica-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Un robot no sabe quién está cerca

Un brazo robótico industrial se mueve con fuerza y velocidad suficientes para aplastar o golpear gravemente a una persona, y no distingue entre una pieza y una mano. Toda la seguridad de una celda robotizada se apoya en una idea: **el robot nunca debe poder dañar a una persona**, por diseño y por procedimiento, y no por confianza en que "nadie se va a acercar".

## Normas de referencia

La seguridad de robots industriales se regula internacionalmente con la familia **ISO 10218**: la parte 1 se ocupa de los requisitos del robot y la parte 2 de la integración de sistemas y celdas. Las versiones de 2011 se revisaron en profundidad en 2025, y el contenido de la especificación técnica **ISO/TS 15066**, dedicada a los robots colaborativos, se incorporó a la nueva ISO 10218-2. Se complementan con la norma de apreciación de riesgos (**ISO 12100**), la que clasifica la fiabilidad de las funciones de seguridad en niveles de desempeño (**ISO 13849**) y la de seguridad eléctrica de máquinas (IEC 60204-1). Conviene consultar las ediciones vigentes antes de un proyecto.

## Apreciación de riesgos

Todo proyecto empieza identificando los peligros de la celda: aplastamiento, golpe, atrapamiento, proyección de piezas, riesgos de la herramienta (pinza, soldadura, láser). Para cada uno se estima la gravedad, la frecuencia de exposición y la posibilidad de evitarlo, y se decide qué medida tomar. Se aplica un orden: primero eliminar o reducir el riesgo por **diseño**; luego, **protecciones** y dispositivos de seguridad; y por último **información** y capacitación. Los carteles y los manuales nunca reemplazan una protección física.

## Protecciones y dispositivos

Una celda convencional se encierra con un **cerco perimetral** con puertas de acceso con **enclavamiento**: al abrir la puerta, el robot se detiene. Las **cortinas de luz** y los **escáneres láser de área** detectan la presencia de una persona y detienen o reducen la velocidad. Las **alfombras sensibles** detectan pisadas. Los **pulsadores de parada de emergencia** de color rojo sobre fondo amarillo, de tipo enclavado, están al alcance en el tablero, el pendant de programación y puntos de acceso. Un **dispositivo de habilitación** de tres posiciones (hombre muerto) en el pendant permite mover el robot solo mientras se lo sostiene en la posición intermedia; si se suelta o se aprieta a fondo por pánico, el robot se detiene.

## Paradas

Las paradas se clasifican en categorías según la norma de seguridad eléctrica de las máquinas: la **categoría 0** corta la energía de inmediato, y el robot se detiene por inercia y por freno; la **categoría 1** detiene al robot de forma controlada y luego corta la energía; la **categoría 2** lo detiene de forma controlada pero mantiene la alimentación. La parada de emergencia debe ser de categoría 0 o 1. Pulsar la parada de emergencia no es un "apagado normal": después hay que investigar la causa antes de rearmar.

## Modos de operación

Un robot tiene un modo **automático** y un modo **manual**. En el modo manual, para programación y puesta a punto, la velocidad se limita a un valor bajo (un valor de referencia de la norma es de 250 mm/s en la brida de la herramienta), porque la persona está dentro de la zona. Para entrar al área protegida se aplica el procedimiento de **bloqueo y etiquetado**: se corta y se bloquea la energía con candado personal.

## Robots colaborativos

Los **cobots** comparten el espacio de trabajo con personas, sin cerco. La norma describe cuatro formas de colaboración: **parada supervisada de seguridad**, en la que el robot se detiene cuando una persona entra y retoma cuando sale; **guiado manual**, donde la persona mueve el robot con la mano; **control de velocidad y separación**, que reduce la velocidad según la distancia a la persona; y **limitación de potencia y fuerza**, que limita la energía del contacto. En el último caso se miden las fuerzas de contacto permitidas para cada parte del cuerpo. "Colaborativo" no significa "seguro por sí solo": la **aplicación completa** debe evaluarse. Un cobot que sostiene un cuchillo o una herramienta caliente sigue siendo peligroso.

## Responsabilidad del técnico

Antes de entrar a una celda: parar, bloquear, verificar. No se puentean dispositivos de seguridad ni se anulan enclavamientos para ahorrar tiempo. Ante cualquier modificación de la celda, se repite la apreciación de riesgos. La capacitación específica y la autorización de acceso son condiciones del trabajo, no un trámite.
