# Oficios — Mecánico — Vehículo eléctrico: fundamentos y seguridad de alta tensión (teoria)

> Tema del MAPA: nodo propuesto en `../../../_plan-faltantes/oficios-b.md` (sin ID en `troncos.md` todavía). Depende de
> `sistemas-electricos-vehiculo/, frenos-y-suspension/` (ver `../../dependencias.md`). Lección informativa — la
> evaluación del oficio se concentra en `diagnostico-automotor-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Qué cambia respecto de un auto de combustión

Un vehículo eléctrico reemplaza el motor de combustión, el tanque, el escape y la caja de cambios por tres componentes principales: una **batería de alta tensión**, un **inversor** y uno o más **motores eléctricos**. No tiene embrague ni caja de varias marchas: la mayoría usa una **reductora de una sola relación**, porque un motor eléctrico entrega par desde cero revoluciones y trabaja en un rango de régimen muy amplio. Por eso el auto eléctrico tiene muchas menos piezas móviles en el tren motriz. Eso no significa que no requiera mantenimiento: siguen existiendo frenos, suspensión, dirección, neumáticos, climatización y un sistema eléctrico de baja tensión.

## Los componentes principales

La **batería de tracción** almacena la energía. Casi todas son de iones de litio, armadas en celdas que se agrupan en módulos y en un paquete protegido, con un sistema de gestión (BMS) que vigila tensión, temperatura y estado de cada grupo de celdas, y corta la conexión si algo sale de rango. El **inversor** convierte la corriente continua de la batería en corriente alterna trifásica para el motor y controla la velocidad y el par variando la frecuencia y la tensión. El **motor** suele ser de imanes permanentes o de inducción. Un **cargador a bordo** convierte la corriente alterna de la red en continua para cargar la batería; en la carga rápida en corriente continua, esa conversión se hace afuera del auto. Un **convertidor CC-CC** baja la alta tensión a los 12 V que alimentan luces, computadoras, bocina y accesorios: el auto eléctrico conserva su batería auxiliar de 12 V y, si se descarga, puede quedar inmovilizado.

## Frenado regenerativo

Cuando el conductor suelta el acelerador o frena suavemente, el motor trabaja como **generador**: la energía cinética del auto se convierte en electricidad y recarga parcialmente la batería. Esto se llama frenado regenerativo y reduce el uso de pastillas y discos, que duran mucho más que en un auto de combustión. Pero los frenos de fricción siguen siendo indispensables: para frenadas fuertes, para cuando la batería está llena y no puede aceptar más carga, y para la seguridad en general. Un freno que casi no se usa puede acumular óxido en los discos y las guías; por eso conviene revisarlos igual en cada servicio. El auto combina ambos sistemas de manera automática y el pedal puede sentirse distinto al de un auto convencional.

## Por qué la alta tensión exige un trato especial

Las baterías de tracción trabajan con tensiones de cientos de voltios en corriente continua, y los sistemas de más de **60 V en continua** se consideran de alta tensión en las clasificaciones usuales de la industria automotriz. A esos niveles una descarga puede ser mortal. Los cables de alta tensión se identifican con **color naranja** y están aislados, blindados y sin conexión a la masa del chasis: es un sistema flotante con monitoreo de aislación, que detecta fugas hacia la carrocería.

## Reglas básicas de seguridad

Solo debe intervenir en el sistema de alta tensión personal **capacitado y habilitado por el fabricante o por una institución reconocida**. Los pasos generales son: apagar el vehículo y retirar la llave o el dispositivo de acceso; desconectar la batería auxiliar de 12 V si lo indica el manual; abrir el **seccionador de servicio** (service disconnect) que corta el circuito de alta tensión; esperar el tiempo que indique el fabricante para que se descarguen los capacitores del inversor; **verificar la ausencia de tensión** con un instrumento adecuado a la categoría de medición; y usar guantes aislantes con su inspección al día, calzado dieléctrico y herramientas aisladas. Se señaliza el vehículo con un cartel de que está en intervención, y nunca se trabaja a solas.

Una batería dañada por un golpe, sumergida o con deformaciones puede entrar en **fuga térmica**: una reacción en cadena que genera calor, gases y fuego, y que puede reiniciarse horas o días después de apagado el incendio. Un auto eléctrico accidentado se trata como un riesgo hasta que lo evalúe personal capacitado.

## Lo que sí puede hacer un mecánico sin alta tensión

Aun sin tocar el sistema de alta tensión, hay mucho trabajo: frenos, suspensión, dirección, neumáticos, líquido refrigerante de la batería y del inversor, climatización, batería de 12 V y diagnóstico con escáner. Reconocer los límites de la propia habilitación es parte del oficio: saber **qué se puede hacer y qué hay que derivar**.
