# Informática — Arranque de la computadora (boot) (teoria)

> Tema del MAPA: `SO1B` (`troncos.md`). Depende de `../historia-y-evolucion-de-los-sistemas-operativos/` (ver `../dependencias.md`). Generado con qwen/qwen3.6-35b-a3b, revisión pendiente antes de considerarse final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## ¿Qué es el arranque y por qué es fundamental?

El proceso de arranque, conocido técnicamente como *boot*, es la secuencia de pasos que realiza una computadora desde el momento en que la encendemos hasta que el sistema operativo está listo para recibir instrucciones del usuario. Sin este mecanismo, el hardware sería simplemente un conjunto de componentes electrónicos inertes, incapaces de ejecutar programas o gestionar datos. Es el puente crítico entre la energía eléctrica y la funcionalidad digital.

Este proceso no ocurre al azar; sigue un protocolo estricto diseñado para garantizar que los componentes se inicialicen en el orden correcto y que el software esencial se cargue en la memoria antes que cualquier aplicación. Entender el arranque es clave para comprender cómo funciona la computadora por dentro, más allá de la pantalla que vemos. Nos permite diagnosticar problemas comunes, como cuando la máquina no enciende o muestra errores de disco, y apreciar la complejidad oculta detrás de un simple clic en el botón de encendido.

## Las etapas del proceso: de la BIOS al Sistema Operativo

Cuando presionamos el botón de encendido, lo primero que entra en acción es la BIOS (Basic Input/Output System) o su sucesora moderna, UEFI. Estos son pequeños programas grabados en un chip de la placa madre que tienen una tarea específica: verificar que el hardware básico (como la memoria RAM y el disco duro) funcione correctamente. Esta prueba se conoce como POST (*Power-On Self-Test*). Si algo falla en esta etapa, la computadora suele emitir pitidos o mostrar códigos de error, indicando qué componente no responde.

Una vez superada la verificación inicial, el firmware busca un dispositivo de almacenamiento (como un disco duro o SSD) que contenga un sector de arranque válido. Este sector contiene la información necesaria para cargar el gestor de arranque, como GRUB en Linux o el cargador de Windows. El gestor de arranque es el responsable de mostrar el menú de selección de sistemas operativos si tenemos más de uno instalado, o de proceder directamente a cargar el núcleo del sistema operativo en la memoria RAM.

Finalmente, el sistema operativo toma el control total, inicializa los controladores de los dispositivos periféricos (teclado, mouse, impresora) y carga la interfaz gráfica. Solo hasta este punto, cuando vemos el escritorio y el cursor se mueve, podemos decir que la computadora ha "arrancado" completamente y está lista para su uso cotidiano.

## Aplicación práctica: diagnóstico y ejemplos cotidianos

Comprender el arranque nos da herramientas valiosas para resolver problemas técnicos básicos. Por ejemplo, si al encender tu computadora escuchas una serie de pitidos largos y cortos, no es un virus ni un fallo del sistema operativo, sino un mensaje de la BIOS indicando que la memoria RAM no está bien conectada. Saber esto te permite actuar rápidamente sin necesidad de llamar a soporte técnico inmediatamente.

Otro ejemplo común es cuando cambiamos el disco duro por uno nuevo. Si la computadora no arranca, a menudo se debe a que la BIOS no está configurada para "arrancar desde el nuevo disco". En este caso, entrar al menú de configuración de la BIOS (usualmente presionando F2 o Supr al encender) y ajustar el orden de arranque resuelve el problema.

En el contexto argentino, es útil recordar que muchas escuelas y hogares utilizan equipos con varios años de antigüedad. En estos casos, el proceso de arranque puede ser más lento debido a la tecnología de discos duros mecánicos (HDD) frente a los modernos SSD. Además, en entornos educativos donde se usan sistemas operativos como Linux (muy común en instituciones públicas por su costo cero), el gestor GRUB permite elegir entre diferentes versiones del sistema, facilitando la recuperación si una actualización falla. Conocer estos detalles empodera al usuario para gestionar sus propios recursos tecnológicos de manera más eficiente y crítica.
