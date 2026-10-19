# Oficios — Electromecánico — PLC y automatismos (teoria)

> Tema del MAPA: nodo propuesto en `../../../_plan-faltantes/oficios-b.md` (sin ID en `troncos.md` todavía). Depende de
> `control-y-automatizacion/` (ver `../../dependencias.md`). Lección informativa — la
> evaluación del oficio se concentra en `diagnostico-electromecanico-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Qué es un PLC

Un **PLC** (controlador lógico programable) es una computadora industrial robusta que lee señales de sensores, ejecuta un programa y comanda actuadores como contactores, electroválvulas y variadores. Reemplazó a los complejos tableros de relés cableados: modificar la lógica pasa a ser cuestión de cambiar el programa, no de recablear. Esta lección es compartida con el oficio de Automatización y robótica; el control PID se desarrolla en la lección de control en lazo cerrado de ese oficio.

## Cómo trabaja: el ciclo de scan

El PLC repite constantemente un ciclo: **lee las entradas** y las guarda en una imagen de memoria; **ejecuta el programa** de principio a fin con esos valores; **escribe las salidas**; y atiende comunicaciones y diagnósticos. Cada vuelta tarda unos milisegundos. Entender este ciclo evita errores: un pulso más corto que el tiempo de scan puede perderse, y el resultado de una línea de programa no es instantáneo.

## Entradas y salidas

Las **entradas digitales** reciben señales de todo o nada: pulsadores, finales de carrera, sensores de proximidad. Las **salidas digitales** accionan bobinas de contactores, lámparas y válvulas, por relé o por transistor. Las **entradas analógicas** miden magnitudes continuas, como temperatura, presión o nivel, con señales normalizadas de **4 a 20 mA** o **0 a 10 V**. La señal de 4-20 mA tiene la ventaja de que 4 mA indica "cero" y un valor de 0 mA señala un cable cortado. Las **salidas analógicas** comandan, por ejemplo, la velocidad de un variador. Se respetan siempre las tensiones y la polaridad del módulo, y se protege con fusibles.

## Lenguajes de programación

La norma **IEC 61131-3** define los lenguajes de los PLC. El más difundido en la industria es el **diagrama de contactos (ladder, LD)**, que imita el esquema eléctrico: contactos normalmente abiertos y cerrados y bobinas entre dos rieles. También están el **diagrama de bloques funcionales (FBD)**, el **texto estructurado (ST)**, parecido a un lenguaje de programación, y el **diagrama de funciones secuenciales (SFC)** para procesos por etapas.

## La lógica básica en ladder

Un contacto en serie con otro es una **Y** (AND); en paralelo, una **O** (OR). Una bobina se energiza cuando existe un camino de contactos cerrados. El circuito típico de **marcha y parada con autorretención**: un pulsador de marcha en paralelo con un contacto auxiliar de la propia bobina (el "sello"), todo en serie con el pulsador de parada, que es de contacto normalmente cerrado. Al presionar marcha la bobina se energiza y su contacto la mantiene; al presionar parada o si se corta un cable, se desenergiza. Esa lógica "a falta de señal, se detiene" es una práctica de seguridad. Los **temporizadores** (retardo a la conexión TON, a la desconexión TOF, pulso TP) y los **contadores** completan las herramientas básicas.

## HMI y SCADA

La **HMI** (interfaz hombre-máquina) es una pantalla donde el operador ve el estado del proceso, da órdenes y recibe alarmas. Un sistema **SCADA** reúne y supervisa muchos PLC en una planta o en instalaciones distribuidas, registra datos históricos y gestiona alarmas. Ambos se comunican con el PLC por redes y protocolos industriales.

## Buenas prácticas

Documentar los programas: nombres claros para entradas y salidas, comentarios, esquemas eléctricos actualizados. Hacer **copia de seguridad** del programa antes de modificarlo. Probar en vacío antes de conectar actuadores. Separar los circuitos de **seguridad** (paradas de emergencia, enclavamientos) para que no dependan solo del software: se cablean con relés o módulos de seguridad.

## Diagnóstico

Cuando una máquina no arranca: se revisan las luces de entradas y salidas del PLC, se comprueba si el sensor llega a la entrada, si el programa activa la salida, y si la salida llega al actuador. Se recorre la cadena señal por señal. Ver también el control en lazo cerrado en `../../tecnico-en-automatizacion-y-robotica/control-lazo-cerrado-y-pid-en-robotica/` y los motores y la trifásica en el oficio de Electricista.
