# Oficios — Electricista — Instalaciones especiales: motores y bombas (teoria)

> Tema del MAPA: `OF1.instalaciones-especiales-motores-y-bombas` (`OF1 §12` de la planificación, propuesto en `../../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`). Depende de `tecnicas-electricista/` (ver `../dependencias.md`). Lección informativa — la evaluación del oficio se concentra en `diagnostico-electricidad-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## El motor eléctrico: un consumo diferente

Una lámpara o un calefactor consumen una corriente estable. Un **motor eléctrico**, en cambio, tiene un comportamiento especial: al arrancar, antes de empezar a girar, absorbe una corriente **mucho mayor** que la que consume una vez en régimen (a menudo varias veces la corriente nominal) y la mantiene unos instantes. Si la instalación no está preparada para ese pico, saltan las protecciones o se calientan los cables. Y si el motor se traba o trabaja sobrecargado, la corriente sube y se recalienta el bobinado hasta quemarse.

Por eso la instalación de motores exige elegir bien **protecciones, conductores y elementos de maniobra**, y no se resuelve poniendo "un enchufe y un cable".

## Cómo leer la placa del motor

Todo motor trae una **placa de características** que es la fuente de información para instalarlo: **potencia** (en kW o HP), **tensión** de alimentación, **corriente nominal**, **frecuencia**, **velocidad** (revoluciones por minuto), **factor de potencia** y **grado de protección IP**. La corriente nominal de la placa es el dato central para dimensionar el cable y la protección, y la tensión indica si el motor es **monofásico** (220 V) o **trifásico** (ver `electricidad-trifasica-y-baja-tension-industrial/`).

## Motores monofásicos

Los motores monofásicos son los más comunes en viviendas y talleres pequeños: heladeras, ventiladores, bombas domésticas, máquinas de taller. Muchos necesitan un **capacitor** (condensador) de **arranque** o de **marcha** para generar el campo giratorio que los hace arrancar. Un capacitor en mal estado es una falla muy frecuente: el motor zumba pero no gira, o arranca con dificultad. Los capacitores almacenan carga y pueden dar descarga aun con el motor desconectado; se descargan antes de tocarlos.

## Elementos de maniobra y protección

Un circuito de motor suele llevar tres funciones:

- **Maniobra**: un **contactor**, que es un interruptor accionado por una bobina y permite arrancar y detener el motor, local o remotamente, con pulsadores.
- **Protección contra cortocircuito**: un interruptor termomagnético o fusibles.
- **Protección contra sobrecarga**: un **relé térmico** (o un guardamotor, que combina ambas funciones), que corta el circuito si el motor consume más corriente de la prevista durante cierto tiempo.

Estos elementos se conectan en el **circuito de potencia** (por donde circula la corriente del motor) y se comandan desde un **circuito de mando** (con pulsadores, selectores, flotantes o presostatos), normalmente a menor tensión o con corriente mucho menor. Distinguir ambos circuitos es una base para leer cualquier esquema de automatismos.

## Bombas

Las **bombas de agua** son motores acoplados a una turbina o un pistón. Las hay de **superficie**, **sumergibles** (pozo), **presurizadoras** y **centrífugas** de uso industrial. Su control se completa con elementos como un **flotante** (corta o arranca la bomba según el nivel del tanque), un **presostato** (actúa según la presión) o un **controlador** electrónico. El agua y la electricidad son una mala combinación, por lo que estas instalaciones deben contar siempre con **puesta a tierra efectiva**, **interruptor diferencial** y un buen sellado de las conexiones. Una bomba nunca debe funcionar "en seco" si no está diseñada para eso, porque se recalienta.

## Variadores de frecuencia

Un **variador de frecuencia** es un equipo electrónico que permite regular la velocidad de un motor alterno variando la frecuencia con que se lo alimenta, lo que ahorra energía y evita arranques bruscos. Su instalación requiere cables y protecciones específicos, atención a la compatibilidad con el motor y precauciones por las interferencias electromagnéticas que puede generar.

## Seguridad y buenas prácticas

- Verificar que la **tensión** de la placa coincida con la de la red.
- **Dimensionar** cables y protecciones con la corriente nominal de la placa y según la reglamentación (ver `normativa-electrica-aea-iram/`).
- Comprobar el **sentido de giro** antes de acoplar la carga (en trifásicos se corrige intercambiando dos fases).
- Respetar la **puesta a tierra** de la carcasa del motor.
- **Cortar y bloquear** la alimentación (y verificar ausencia de tensión) antes de intervenir en un motor.
- No operar nunca un motor con las protecciones puenteadas.

**Sobre este material**: es informativo y no habilita a intervenir instalaciones eléctricas sin la habilitación correspondiente.
