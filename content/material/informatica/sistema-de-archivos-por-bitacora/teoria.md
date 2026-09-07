# Informática — Sistema de archivos por bitácora (journaling) (teoria)

> Tema del MAPA: `SO4B` (`troncos.md`). Depende de del nodo `SO4` de `troncos.md` (sin carpeta propia todavía) (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## ¿Qué es el sistema de archivos por bitácora?

Para entender la bitácora, primero debemos imaginar cómo guarda información un disco duro o un SSD. Tradicionalmente, un sistema de archivos divide el espacio en dos partes principales: una para guardar los datos reales (como tu foto de perfil o el trabajo de historia) y otra para guardar la "tabla de contenidos", que indica dónde está cada cosa. Esta tabla de contenidos se llama metadatos. El problema de los sistemas antiguos era que actualizaban los datos y la tabla de contenidos de forma independiente. Si se iba la luz justo cuando se actualizaba la tabla, pero antes de terminar de escribir los datos, el sistema quedaba en un estado confuso: los datos estaban ahí, pero la tabla decía que no existían, o viceversa. Esto generaba errores graves y pérdida de información.

El sistema de archivos por bitácora, o *journaling*, nace para solucionar este problema específico. Imaginá que la bitácora es como un cuaderno de apuntes que lleva un asistente antes de ejecutar una tarea. Antes de hacer cualquier cambio importante en la estructura del disco (los metadatos), el sistema escribe primero en la bitácora qué va a hacer. Solo después de confirmar que ese "plan" quedó grabado de forma segura, procede a realizar el cambio real en el disco. Si ocurre un fallo repentino, el sistema no se queda perdido. Al encenderse nuevamente, simplemente lee la bitácora: ve qué tareas estaban pendientes y las completa o las deshace de manera ordenada. Es, en esencia, un mecanismo de seguridad y consistencia.

## ¿Por qué es importante esta tecnología?

La importancia del *journaling* radica en la fiabilidad y la velocidad de recuperación ante fallos. En la informática moderna, donde trabajamos con archivos pesados y múltiples procesos al mismo tiempo, los cortes de energía o cierres bruscos de programas son una realidad. Sin bitácora, cada vez que el sistema volvía a arrancar después de un corte, debía escanear todo el disco duro buscando errores (un proceso llamado *fsck* o *chkdsk*), lo cual podía tomar horas en discos grandes. Con el *journaling*, ese proceso de verificación es casi instantáneo porque el sistema ya sabe exactamente qué parte del disco está "sucio" o incompleta.

Además, esta tecnología permite que el sistema de archivos mantenga la integridad lógica. Esto significa que la estructura de carpetas y archivos siempre será coherente. Para el usuario común, esto se traduce en una computadora más estable y menos propensa a corrupción de datos. Aunque hoy en día la mayoría de los sistemas operativos modernos lo incluyen por defecto, entender su funcionamiento ayuda a comprender por qué es crucial realizar respaldos periódicos: la bitácora protege la estructura, pero no evita la pérdida accidental de archivos personales si se borran por error.

## Ejemplos prácticos en tu computadora

Para aplicar este concepto a tu vida diaria, fijate en los sistemas operativos que usás. En Linux, sistemas como ext4 (el más común hoy en día) y btrfs utilizan el *journaling* de forma nativa y agresiva para garantizar que no pierdas tus trabajos. En Windows, el sistema NTFS también emplea esta técnica; de hecho, si alguna vez ves un mensaje diciendo "Reparando disco" al iniciar, es porque el sistema está leyendo la bitácora para asegurar que todo esté en orden.

En el ámbito de macOS, Apple utiliza APFS (Apple File System), que también cuenta con características de registro para manejar la integridad de los datos, especialmente importante en dispositivos con SSD. Cuando guardás un documento en Word o Google Docs y ves la barra de progreso, el sistema está trabajando con los metadatos y los datos reales. Si apagas la computadora en ese preciso instante, el *journaling* se encarga de que, al volver a prenderla, no tengas que reconstruir toda la estructura de carpetas desde cero, sino solo completar la última acción pendiente. Esto hace que la experiencia de uso sea fluida y confiable, permitiendo que te concentres en aprender y crear sin preocuparte constantemente por la salud de tu disco.
