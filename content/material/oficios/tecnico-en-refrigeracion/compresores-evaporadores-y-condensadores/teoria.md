# Oficios — Técnico en refrigeración — Compresores, evaporadores y condensadores (teoria)

> Tema del MAPA: nodo propuesto en `../../../_plan-faltantes/oficios-b.md` (sin ID en `troncos.md` todavía). Depende de
> `fundamentos-termodinamicos-refrigeracion/` (ver `../../dependencias.md`). Lección informativa — la
> evaluación del oficio se concentra en `diagnostico-refrigeracion-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Los cuatro componentes del ciclo

Un circuito frigorífico básico por compresión de vapor tiene cuatro elementos: el **compresor**, el **condensador**, el **dispositivo de expansión** y el **evaporador**. El refrigerante circula en un circuito cerrado cambiando de estado: absorbe calor al evaporarse a baja presión y lo cede al condensarse a alta presión. Esta lección explica los tres componentes más grandes y las variantes que el técnico encuentra en la práctica.

## El compresor

Es el "corazón" del sistema: aspira el vapor de baja presión y lo comprime a alta presión y temperatura. Los tipos principales son:

El **reciprocante** o de pistón, que usa un pistón y válvulas; es robusto y muy difundido. El **rotativo**, de paleta rodante, compacto y silencioso, común en equipos pequeños. El **scroll** (espiral), con dos espirales una dentro de otra, de funcionamiento suave y buen rendimiento, muy usado en acondicionadores y equipos medianos. El **de tornillo**, para grandes potencias. Los compresores pueden ser **herméticos** (motor y compresor sellados en una carcasa de acero soldada, sin acceso interno), **semiherméticos** (con tapas atornilladas) o **abiertos** (con el motor afuera). El **compresor inverter** varía la velocidad del motor y entrega solo la potencia necesaria, con menor consumo y arranques suaves. El compresor lleva **aceite lubricante** que circula con el refrigerante, por lo que el aceite debe ser compatible con el gas.

Fallas típicas: arranque con líquido (golpe de líquido, que rompe válvulas), falta de lubricación, sobrecalentamiento por falta de refrigerante o de ventilación, y quemado del bobinado por humedad o por falta de protección eléctrica.

## El evaporador

Es el intercambiador donde el refrigerante líquido a baja presión absorbe calor del aire o del agua que se quiere enfriar y se evapora. Hay evaporadores de **expansión directa**, donde el refrigerante se evapora completamente adentro de los tubos, y **inundados**, con exceso de líquido, comunes en instalaciones grandes. En los evaporadores por aire, un ventilador fuerza el paso del aire por una serpentina con aletas. Si la superficie baja de 0 °C se forma **escarcha** que reduce el intercambio, por lo que hay ciclos de **desescarche**. La suciedad en las aletas, el filtro tapado o la falta de caudal de aire hacen que el evaporador se congele.

El **recalentamiento** (sobrecalentamiento) es la diferencia entre la temperatura del vapor a la salida del evaporador y su temperatura de evaporación; asegura que al compresor llegue solo vapor. Es la variable que regula la válvula de expansión.

## El condensador

Recibe el vapor caliente y a alta presión del compresor y le saca calor hasta que condensa. Puede enfriarse con **aire** (con ventilador), con **agua** (con torres de enfriamiento) o de manera **evaporativa**. Un condensador sucio, con el ventilador defectuoso o con poca circulación de aire eleva la presión de condensación, sube el consumo y recalienta el compresor. El **subenfriamiento** es el enfriamiento del líquido por debajo de su temperatura de condensación; un valor correcto asegura que a la válvula de expansión llegue solo líquido.

## El dispositivo de expansión

Reduce la presión del líquido y alimenta al evaporador. Puede ser un **tubo capilar** (simple, fijo, en heladeras y equipos pequeños), una **válvula de expansión termostática** (que regula el caudal según el recalentamiento) o una **válvula de expansión electrónica**, más precisa, con equipos inverter. Un dispositivo obstruido o mal regulado genera diagnósticos engañosos: baja presión, escarcha en el punto de la obstrucción, falta de enfriamiento.

## Accesorios y mantenimiento

El **filtro secador** retiene humedad e impurezas, y se cambia siempre que se abre el circuito. El visor de líquido permite ver burbujas. Los presostatos protegen contra altas y bajas presiones. El mantenimiento preventivo básico es limpiar condensador y evaporador, controlar la tensión y la corriente del compresor, revisar el drenaje y buscar fugas. Un técnico que entiende cómo se relacionan presiones, temperaturas, recalentamiento y subenfriamiento puede diagnosticar con sus instrumentos antes de tocar el circuito.
