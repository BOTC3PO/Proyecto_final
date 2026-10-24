# Electrónica — Prototipado: protoboard, soldadura y seguridad (teoría)

> Tema del MAPA: `electronica/prototipado-protoboard-soldadura-y-seguridad` (nodo propuesto, ver `../dependencias.md`). Depende de `../instrumentos-de-medicion-multimetro-y-osciloscopio/`. Para la seguridad en instalaciones de la red eléctrica, ver `../../oficios/electricista/seguridad-electricista/`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo armar un circuito de prueba en una protoboard, cómo pasarlo a una soldadura permanente y qué cuidados tener.

---

## 1. Del esquema al circuito real

Un esquema es un dibujo; para que funcione hay que construirlo. El proceso habitual tiene tres etapas. Primero se arma una versión de prueba (prototipo) en una protoboard, donde los componentes se conectan sin soldar y se pueden cambiar. Después se verifica con instrumentos que funcione como se calculó. Recién entonces se pasa a una versión definitiva, soldada sobre una placa perforada o sobre una placa de circuito impreso.

## 2. La protoboard

La protoboard, o placa de pruebas, es una placa de plástico con agujeros pequeños, debajo de los cuales hay tiras metálicas que conectan los agujeros entre sí. En la zona central, las filas de cinco agujeros alineados verticalmente están conectadas entre sí. Las dos mitades, separadas por un canal central, no tienen conexión entre sí. Ese canal está pensado para insertar circuitos integrados con las patas a cada lado. En los bordes hay dos líneas largas, los rieles de alimentación, conectadas a lo largo de toda la placa y que se usan para llevar el positivo y la masa a todo el circuito. Algunas protoboards tienen estos rieles interrumpidos a la mitad, lo que conviene verificar con el multímetro.

Para armar con orden, conviene seguir el esquema por etapas, usar cables de colores (rojo para positivo, negro para masa), conectar la alimentación al final, y mantener los cables cortos. Los contactos de la protoboard no son aptos para corrientes elevadas ni para altas frecuencias, y los falsos contactos son una causa común de fallas.

## 3. Soldar

Soldar es unir dos piezas metálicas con una aleación fundida, el estaño, que al enfriarse queda como una unión eléctrica y mecánica. Se usa un soldador de punta caliente, soldadura en alambre con un núcleo de fundente (que limpia las superficies y ayuda a que el estaño fluya) y un soporte para el soldador. El procedimiento correcto consiste en calentar al mismo tiempo el terminal del componente y la isla de cobre de la placa. Luego se acerca el estaño a la unión, no a la punta del soldador, hasta que fluya y la cubra con forma de pequeño cono brillante. Después se retira el estaño y por último el soldador, y se deja enfriar sin mover.

Una soldadura fría es una unión que quedó opaca, granulosa o con forma de bolita, porque no se calentó bien; puede parecer conectada pero falla con el tiempo. Se repara volviendo a calentar y agregando un poco de estaño o fundente. Hoy gran parte de la soldadura comercial es libre de plomo, por normas ambientales; la que contiene plomo requiere más cuidado al manipularla.

## 4. Descarga electrostática

Los circuitos integrados y algunos transistores se dañan con las descargas de electricidad estática que acumula el cuerpo humano, aunque la persona no las sienta. Para evitarlo se usan una pulsera antiestática conectada a masa y una superficie de trabajo antiestática, y se guardan los componentes sensibles en bolsas especiales. Es una precaución clave, más aún en ambientes secos.

## 5. Seguridad

Con tensiones bajas, los riesgos son sobre todo los de la herramienta. El soldador alcanza temperaturas muy altas, por lo que siempre debe apoyarse en su soporte y nunca hay que tocar su punta. Conviene no inhalar el humo del fundente, por lo que hay que trabajar en un lugar ventilado. Además, hay que protegerse los ojos de las salpicaduras. Las pilas y baterías pueden producir cortocircuitos y calentarse, y los capacitores grandes retienen carga después de apagar. Con tensión de la red, el riesgo es mucho mayor y no debe experimentarse sin formación: los circuitos de prueba se alimentan con fuentes de baja tensión y aisladas de la red.

## 6. Buenas prácticas

Antes de energizar un circuito, conviene revisar la polaridad de los componentes que la tienen (diodos, LED, capacitores electrolíticos y circuitos integrados). También hay que comprobar con el multímetro que no haya cortocircuitos entre alimentación y masa, y empezar con una fuente limitada en corriente. Cuando algo no anda, se revisa de forma ordenada: alimentación, conexiones, componentes y señales, de la entrada hacia la salida.

## N. Conexión con lo que sigue

Este tema cierra la secuencia práctica de Electrónica y prepara el trabajo de los oficios técnicos de `../../oficios/tecnico-electromecanico/` y `../../oficios/tecnico-en-automatizacion-y-robotica/`.
