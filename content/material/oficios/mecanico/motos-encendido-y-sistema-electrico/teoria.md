# Oficios — Mecánico — Motos: encendido y sistema eléctrico (teoria)

> Tema del MAPA: nodo propuesto en `../../../_plan-faltantes/oficios-b.md` (sin ID en `troncos.md` todavía). Depende de
> `motos-motor-2-y-4-tiempos/, sistemas-electricos-vehiculo/` (ver `../../dependencias.md`). Lección informativa — la
> evaluación del oficio se concentra en `diagnostico-automotor-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## La chispa en una moto

Para que la mezcla se encienda hace falta una chispa de alta tensión en el momento correcto. Una moto genera esa chispa con un **sistema de encendido** propio, distinto al de un auto con distribuidor. El más común en las motos de baja y mediana cilindrada es el encendido **CDI** (descarga por capacitor), y en las más modernas el control lo toma la computadora del motor.

## Cómo funciona el encendido CDI

Una bobina de carga, ubicada en el estator del volante magnético, produce una tensión alterna cuando el imán del volante gira. Esa energía carga un **capacitor** dentro del módulo CDI. Un sensor llamado **captor o pick-up** detecta una marca del volante e indica en qué posición está el pistón. En el instante preciso, el módulo descarga el capacitor sobre el primario de la **bobina de encendido**, que eleva la tensión a varios miles de voltios y la lleva a la bujía a través del **cable de bujía y la pipeta**. El módulo también adelanta o retrasa el momento de la chispa según el régimen: este **avance** hace que la combustión sea eficiente.

## El volante magnético y la carga

El volante, fijado al cigüeñal, tiene imanes que giran frente al estator con bobinas. Una parte del bobinado alimenta el encendido, y otra genera corriente para luces y batería. Como esa corriente es alterna e irregular, un **regulador-rectificador** la convierte en continua y limita la tensión a un valor seguro de unos 13 a 14,5 V. Si el regulador falla, puede sobrecargar y hervir la batería o quemar lámparas, o dejar de cargar y descargarla. Algunas motos pequeñas no tienen batería y funcionan con corriente alterna directa.

## La batería y el arranque

La batería, generalmente de 12 V, alimenta el **motor de arranque eléctrico** a través de un relé o solenoide de arranque, y el sistema de luces y accesorios. El motor de arranque consume una corriente elevada, por lo que los cables de la batería deben estar firmes y limpios. Una moto con arranque a patada puede encender sin batería, si el sistema de encendido no depende de ella. Los fusibles protegen el circuito; si se quema repetidamente, hay un cortocircuito y no se debe poner un fusible de mayor capacidad.

## Diagnóstico

Si la moto no arranca, el primer paso es comprobar si hay chispa: se saca la bujía, se apoya su cuerpo a masa y se acciona el arranque. Una chispa azulada y nítida es buena; una chispa débil, naranja o ausente indica falla de bobina, de cable, de CDI, de captor o del interruptor de corte. Se mide la resistencia de la bobina y del captor con un multímetro y se la compara con las especificaciones del manual. Se revisan la masa del motor y los conectores. Muchas fallas son un cable roto adentro de su aislante o un terminal sulfatado.

## Medir la carga

Con la moto en marcha, se mide la tensión en los bornes de la batería. Un valor de entre 13 y 14,5 V a regímenes medios indica que el sistema carga bien. Con el motor apagado, una batería sana marca alrededor de 12,6 V. Un valor muy superior en marcha indica falla del regulador; un valor igual al de la batería sola indica que no hay carga.

## Instalaciones y seguridad

Los accesorios agregados, como alarmas, luces auxiliares o cargadores, deben tener su propio fusible y su relé, y no empalmarse con cinta. Una moto con un cable pelado cerca del escape puede incendiarse. Antes de intervenir se desconecta el borne negativo. Las bobinas de encendido producen una descarga fuerte: no se tocan con el motor en marcha.
