# Oficios — Electricista — Tableros eléctricos (teoria)

> Tema del MAPA: `OF1.tableros-electricos` (`OF1 §9` de la planificación; hoy es un apartado de `lectura-de-planos-electricos/`, propuesto como lección propia en `../../_plan-faltantes/oficios-b.md`; sin ID propio en `troncos.md`). Depende de `tecnicas-electricista/` (ver `../dependencias.md`). Lección informativa — la evaluación del oficio se concentra en `diagnostico-electricidad-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## El tablero: el corazón de la instalación

El **tablero eléctrico** es la caja donde llega la energía de la red y desde la cual se distribuye a todos los circuitos del inmueble. Concentra las **protecciones**: si hay una falla, el tablero es el lugar donde se corta la corriente para evitar daños. Por eso es la parte de la instalación donde más importa la prolijidad, la identificación y la correcta selección de los elementos.

## Qué lleva un tablero domiciliario

- **Gabinete**: caja de material aislante o metálica (con puesta a tierra si es metálica), con tapa y **grado de protección IP** adecuado al lugar de instalación (no es lo mismo un tablero interior seco que uno a la intemperie).
- **Riel DIN**: soporte normalizado sobre el cual se fijan los dispositivos.
- **Interruptor general** (seccionador o termomagnético) para cortar todo el tablero.
- **Interruptor diferencial**: protege a las personas contra descargas por contacto indirecto y detecta fugas de corriente a tierra.
- **Interruptores termomagnéticos**: protegen cada circuito contra sobrecargas y cortocircuitos.
- **Barras o peines de distribución** y **bornera** para el neutro y la tierra.
- **Cableado ordenado**, con terminales y secciones correctas, y **rótulos** que identifican cada circuito.

## Cómo se organiza

Los circuitos se agrupan por función (iluminación, tomacorrientes, aire acondicionado, cocina, bomba, etc.), cada uno con su protección. Un **esquema unifilar** muestra de manera simplificada cómo se conectan las protecciones y los circuitos; el **esquema multifilar** muestra todos los conductores. Antes de intervenir un tablero se debe tener (o relevar) su esquema.

## Fallas típicas que se encuentran en tableros

Los tableros mal hechos o envejecidos son una causa frecuente de incendios. Las fallas más comunes son:

- **Bornes flojos** que generan calentamiento, olor a quemado o decoloración de plásticos.
- **Conductores sin terminal** o mal ajustados, o con aislación dañada por el calor.
- **Secciones insuficientes** respecto de la protección que se colocó.
- **Protecciones sobredimensionadas** (un termomagnético mayor que lo que el cable soporta), que no dispara cuando debería.
- **Diferencial sin puesta a tierra efectiva** o puenteado "porque saltaba".
- **Mezcla de neutro y tierra** en los bornes, o neutros compartidos entre circuitos.
- **Falta de identificación**, que obliga a adivinar y causa accidentes.
- **Gabinete sin tapa**, con perforaciones abiertas o con polvo y humedad.
- **Cableado desordenado** que impide ver y revisar.

## Cómo leer y encontrar errores

Una buena práctica es recorrer el tablero con una lista de control: ¿está identificado cada circuito? ¿La protección corresponde a la sección del cable? ¿Hay diferencial y funciona con su botón de prueba? ¿Hay puesta a tierra continua? ¿Los bornes están firmes y sin signos de calentamiento? ¿Los conductores tienen el color y el calibre correctos? Este tipo de revisión visual, hecha **con el tablero sin tensión**, detecta una gran parte de los problemas.

## Seguridad en el trabajo con tableros

Los tableros contienen partes **que pueden estar energizadas aun con el interruptor general abierto** (por ejemplo, los bornes de entrada, o circuitos de mando alimentados por otra fuente). Antes de abrir y tocar se **corta la alimentación aguas arriba**, se **señaliza y bloquea** y se **verifica la ausencia de tensión con instrumento** (ver `seguridad-electricista/`). Para intervenir tableros se usan herramientas aisladas y elementos de protección personal. Un tablero nunca se deja abierto ni se "cierra con cinta" para salir del paso.

**Sobre este material**: es informativo y no habilita a intervenir tableros sin la habilitación correspondiente. Las exigencias detalladas de construcción de tableros están en la reglamentación vigente (ver `normativa-electrica-aea-iram/`).
