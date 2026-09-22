# Examen jefe — [PENDIENTE #820]

> Logro #820. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **127 preguntas totales** en 5/5 secciones.

---

## Sección: arranque-de-la-computadora-boot (26 preguntas)

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["boot", "sequencia", "hardware"]

variables:
  paso1: "POST"
  paso2: "BIOS"
  paso3: "SO"

respuesta: "POST, BIOS, SO"
tipo: completar

enunciado: "Ordená las etapas principales del arranque: primero se ejecuta la {paso1}, luego interviene la {paso2} y finalmente carga el {paso3}."

explicacion: |
  El proceso sigue un orden estricto: primero la autoprueba (POST), luego el firmware (BIOS/UEFI) y finalmente el sistema operativo.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["post", "diagnostico", "prueba"]

variables:
  acrónimo: "POST"

respuesta: "Power-On Self-Test"
tipo: completar

enunciado: "El acrónimo POST significa: {acrónimo}."

explicacion: |
  POST significa Power-On Self-Test (Autoprueba al encender). Verifica que el hardware responda.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["hardware", "ubicacion", "chip"]

variables:
  componente: "placa madre"

respuesta: "placa madre"
tipo: completar

enunciado: "La BIOS se encuentra grabada en un chip de la {componente}."

explicacion: |
  La BIOS es un firmware almacenado en un chip de memoria flash en la placa madre.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["linux", "grub", "gestor"]

variables:
  gestor: "GRUB"

respuesta: "GRUB"
tipo: input

enunciado: "¿Cuál es el nombre común del gestor de arranque utilizado en sistemas Linux?"

explicacion: |
  GRUB (GRand Unified Bootloader) es el estándar para cargar el kernel de Linux.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["windows", "bootmgr", "gestor"]

variables:
  gestor: "Windows Boot Manager"

respuesta: "Windows Boot Manager"
tipo: input

enunciado: "¿Qué gestor de arranque utiliza típicamente Windows moderno?"

explicacion: |
  Windows utiliza el Windows Boot Manager (bootmgr) para cargar el sistema.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["disco", "ssd", "almacenamiento"]

variables:
  dispositivo: "disco duro"

respuesta: "disco duro"
tipo: input

enunciado: "¿Dónde reside el sector de arranque? En el {dispositivo} o SSD."

explicacion: |
  El código de arranque se guarda en el disco de almacenamiento (HDD o SSD).
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["sector", "boot", "carga"]

variables:
  entidad: "sector de arranque"

respuesta: "sector de arranque"
tipo: input

enunciado: "La BIOS busca un {entidad} válido para iniciar la carga del SO."

explicacion: |
  El sector de arranque contiene el código inicial que permite cargar el gestor de arranque.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["uefi", "modernizacion", "firmware"]

variables:
  sucesor: "UEFI"

respuesta: "UEFI"
tipo: input

enunciado: "¿Cuál es el sucesor moderno de la BIOS?"

explicacion: |
  UEFI (Unified Extensible Firmware Interface) es la evolución de la BIOS.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["diagnostico", "pitidos", "error"]

variables:
  senal: "pitidos"

respuesta: "pitidos"
tipo: input

enunciado: "Si la POST falla, la placa madre suele emitir {senal} de error."

explicacion: |
  Los códigos de pitidos indican qué componente específico falló en la autoprueba.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["drivers", "perifericos", "controladores"]

variables:
  elemento: "controladores"

respuesta: "controladores"
tipo: input

enunciado: "El SO carga los {elemento} de los dispositivos periféricos durante el arranque."

explicacion: |
  Los drivers permiten que el sistema operativo comunique con el hardware.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["GUI", "interfaz", "escritorio"]

variables:
  elemento: "interfaz gráfica"

respuesta: "interfaz gráfica"
tipo: input

enunciado: "El arranque finaliza cuando se muestra la {elemento} al usuario."

explicacion: |
  La GUI es la señal visual de que el sistema está listo para usar.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["ram", "memoria", "carga"]

variables:
  memoria: "RAM"

respuesta: "RAM"
tipo: input

enunciado: "El kernel del SO se carga en la {memoria} para su ejecución rápida."

explicacion: |
  El núcleo debe residir en memoria principal (RAM) para ser procesado por la CPU.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["POST", "verificacion", "hardware"]

variables:
  accion: "verificar"

respuesta: "verificar"
tipo: input

enunciado: "La POST tiene como fin {accion} que el hardware funcione correctamente."

explicacion: |
  Sin esta verificación, cargar un SO en hardware defectuoso sería inútil.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["kernel", "nucleo", "so"]

variables:
  componente: "nucleo"

respuesta: "nucleo"
tipo: input

enunciado: "El gestor de arranque carga el {componente} del sistema operativo."

explicacion: |
  El kernel es el corazón del SO y debe cargarse antes que cualquier aplicación.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["energia", "inicio", "hardware"]

variables:
  estado: "inerte"

respuesta: "inerte"
tipo: input

enunciado: "Sin el proceso de arranque, el hardware sería un conjunto de componentes {estado}."

explicacion: |
  El hardware necesita el software de bajo nivel para cobrar vida funcional.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "avanzado"
  tags: ["uefi", "particion", "efi"]

variables:
  particion: "ESP"

respuesta: "ESP"
tipo: input

enunciado: "En sistemas UEFI, el gestor de arranque suele residir en la partición {particion}."

explicacion: |
  La EFI System Partition (ESP) contiene los archivos de arranque para UEFI.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "avanzado"
  tags: ["bios", "mbr", "particion"]

variables:
  tabla: "MBR"

respuesta: "MBR"
tipo: input

enunciado: "La BIOS tradicional utiliza la tabla de particiones {tabla} para encontrar el arranque."

explicacion: |
  MBR (Master Boot Record) es el estándar antiguo para el arranque con BIOS.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["diagnostico", "pitidos", "solucion"]

variables:
  diagnostico: "diagnostico"

respuesta: "diagnostico"
tipo: input

enunciado: "Los códigos de pitidos sirven para realizar un {diagnostico} rápido del fallo."

explicacion: |
  Cada patrón de pitidos corresponde a un error específico de hardware.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["perifericos", "inicializacion", "so"]

variables:
  dispositivo: "periféricos"

respuesta: "periféricos"
tipo: input

enunciado: "El SO inicializa los {dispositivo} como teclado y mouse tras cargar el kernel."

explicacion: |
  Sin los drivers de periféricos, el usuario no podría interactuar con la máquina.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["concepto", "puente", "definicion"]

variables:
  rol: "puente"

respuesta: "puente"
tipo: input

enunciado: "El proceso de boot es el {rol} entre la energía eléctrica y la funcionalidad digital."

explicacion: |
  Sin boot, no hay conexión entre la electricidad y el software.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["secuencia", "orden", "protocolo"]

variables:
  requisito: "estricto"

respuesta: "estricto"
tipo: input

enunciado: "El arranque sigue un protocolo {requisito} de inicialización."

explicacion: |
  El orden no puede alterarse: hardware -> firmware -> SO.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["firmware", "comparacion", "bios"]

variables:
  nombre: "BIOS"

respuesta: "BIOS"
tipo: input

enunciado: "¿Qué sistema firmware es el antecesor de UEFI?"

explicacion: |
  BIOS (Basic Input/Output System) fue el estándar por décadas.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["sector", "validez", "boot"]

variables:
  atributo: "válido"

respuesta: "válido"
tipo: input

enunciado: "La BIOS busca un sector de arranque {atributo} en el disco."

explicacion: |
  Si el sector no es válido, el sistema no sabrá cómo iniciar.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "intermedio"
  tags: ["gestor", "bootloader", "funcion"]

variables:
  responsable: "responsable"

respuesta: "responsable"
tipo: input

enunciado: "El gestor de arranque es el {responsable} de cargar el kernel."

explicacion: |
  El bootloader es el intermediario entre el firmware y el sistema operativo.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["finalizacion", "escritorio", "listo"]

variables:
  estado: "listo"

respuesta: "listo"
tipo: input

enunciado: "Cuando aparece el escritorio, la computadora está {estado} para uso cotidiano."

explicacion: |
  El arranque se considera completo cuando la interfaz de usuario es accesible.
```

```
metadata:
  materia: "informatica"
  tema: "arranque_de_la_computadora_boot"
  nivel: "basico"
  tags: ["hardware", "inerte", "componentes"]

variables:
  descripcion: "inertes"

respuesta: "inertes"
tipo: input

enunciado: "Sin boot, los componentes serían simplemente {descripcion}."

explicacion: |
  El hardware por sí solo no ejecuta lógica ni gestiona datos.
```

## Sección: mantenimiento-y-deuda-tecnica (26 preguntas)

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["conceptos", "deuda_tecnica"]

respuesta: "deuda_tecnica"
tipo: completar
respuestas_validas:
  - "deuda_tecnica"

enunciado: "El concepto que describe el coste adicional de realizar cambios en el software debido a decisiones de diseño rápidas o deficientes se conoce como ___."

explicacion: |
  La deuda técnica es una metáfora que compara las decisiones de desarrollo apresuradas con la deuda financiera: si no se "paga" (refactorizando), los "intereses" (dificultad de mantenimiento) aumentan.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["mantenimiento", "tipos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["corregir un error que causa un cierre inesperado", "correctivo"], ["añadir una nueva funcionalidad solicitada por el cliente", "evolutivo"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["correctivo", "adaptativo", "evolutivo", "preventivo"]

enunciado: "Se debe realizar un mantenimiento tipo ___ cuando el objetivo es {escenarios[escenario_idx][0]}."

explicacion: |
  El mantenimiento correctivo busca arreglar fallos; el adaptativo ajusta el software a nuevos entornos; el evolutivo añade funciones y el preventivo busca evitar fallos futuros.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["impacto", "calidad"]

respuesta: falso
tipo: vf

enunciado: "La presencia de deuda técnica en un proyecto de software siempre implica que el código es de mala calidad y no tiene utilidad."

explicacion: |
  Falso. A veces se toma deuda técnica de forma estratégica para cumplir con una fecha de lanzamiento crítica, con el plan de pagarla (refactorizar) más adelante.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta_orden: ["Detección del problema", "Análisis de la causa", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]
tipo: ordenar
opciones_explicitas: ["Detección del problema", "Análisis de la causa", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]

enunciado: "Ordena las etapas típicas de un proceso de mantenimiento correctivo:"

explicacion: |
  Un ciclo de mantenimiento debe seguir un orden lógico: primero se identifica el error, se entiende por qué ocurre, se planea el arreglo, se aplica y finalmente se verifica que no se haya roto nada más.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "avanzado"
  tags: ["refactorizacion", "calidad"]

variables:
  valor_refactor: uno_de([0, 1])
  datos: [["Cambiar la estructura interna del código sin alterar su comportamiento externo", "refactorizar"], ["Añadir un nuevo módulo de seguridad al sistema", "extender"]]

respuesta: datos[valor_refactor][1]
tipo: mc
opciones_explicitas: ["refactorizar", "extender", "optimizar", "reparar"]

enunciado: "La acción de {datos[valor_refactor][0]} se define como ___."

explicacion: |
  La refactorización es la técnica principal para reducir la deuda técnica, mejorando la legibilidad y la estructura sin cambiar lo que el código hace para el usuario.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["deuda_tecnica", "mantenimiento"]

respuesta: verdadero
tipo: vf
enunciado: "Si un equipo de desarrollo decide no refactorizar un módulo complejo para cumplir con una fecha de entrega, está acumulando deuda técnica. Esta acción, si no se paga pronto, aumenta el costo de mantenimiento futuro. ¿Es el refactorizado una forma de mantenimiento preventivo?"

explicacion: |
  El refactorizado busca mejorar la estructura interna del código sin cambiar su comportamiento externo, lo cual es una actividad de mantenimiento preventivo para evitar la acumulación de deuda técnica.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["deuda_tecnica", "conceptos"]

opciones_explicitas: ["Código mal documentado", "Cambio de requerimientos", "Nueva funcionalidad", "Actualización de dependencias"]

respuesta: "Código mal documentado"
tipo: mc

enunciado: "Un desarrollador nota que el sistema funciona correctamente, pero la lógica de negocio está dispersa y no hay comentarios en las funciones críticas, lo que dificultará cambios futuros. ¿Cuál de estos es un ejemplo claro de deuda técnica?"

explicacion: |
  La falta de documentación y la mala estructura del código (código espagueti) son formas de deuda técnica que incrementan el esfuerzo necesario para realizar mantenimientos correctivos o evolutivos.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenimiento", "tipos"]

tipo: ordenar
opciones_explicitas: ["Detectar error", "Corregir error", "Optimizar rendimiento", "Implementar nueva función", "Documentar sistema"]
respuesta_orden: ["Detectar error", "Corregir error", "Optimizar rendimiento", "Implementar nueva función", "Documentar sistema"]

enunciado: "Ordena las siguientes etapas típicas del ciclo de mantenimiento de un sistema de software, desde la detección de un problema hasta la documentación final."

explicacion: |
  El mantenimiento correctivo (detectar y corregir errores) suele preceder a las mejoras de rendimiento y a las nuevas funcionalidades; documentar los cambios es siempre el último paso.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenimiento", "tipos"]

respuesta: "perfectivo"
tipo: completar

enunciado: "Si el objetivo es mejorar la velocidad de una consulta SQL que tarda 10 segundos, estamos realizando un mantenimiento de tipo ___."

pasos:
  - "Identificar el cuello-de-bote en la base de datos."
  - "Aplicar índices o reescribir la consulta."

opciones_explicitas: ["correctivo", "evolutivo", "adaptativo", "perfectivo"]
respuestas_validas:
  - "perfectivo"

explicacion: |
  El mantenimiento perfectivo se encarga de mejorar el rendimiento o la eficiencia de un software que ya funciona correctamente.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "avanzado"
  tags: ["deuda_tecnica", "costos"]

tipo: completar

enunciado: "Un equipo decide ignorar las pruebas unitarias para lanzar una versión hoy. Esto genera una deuda técnica que se traduce en ___."

respuestas_validas:
  - "intereses"

explicacion: |
  La deuda técnica funciona como un préstamo financiero: el 'principal' es el tiempo ahorrado hoy, y los 'intereses' es el tiempo extra que se perderá mañana arreglando errores o lidiando con código complejo.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["mantenimiento", "adaptativo"]

opciones_explicitas: ["Cambio de Sistema Operativo", "Arreglar un crash", "Añadir un botón", "Cambiar el color de la interfaz"]

respuesta: "Cambio de Sistema Operativo"
tipo: mc

enunciado: "Una aplicación de escritorio debe actualizarse para ser compatible con la nueva versión de Windows que salió este mes. ¿Qué tipo de mantenimiento es este?"

explicacion: |
  El mantenimiento adaptativo ocurre cuando el software debe ajustarse a cambios en su entorno (sistema operativo, hardware, bases de datos o leyes externas) para seguir siendo funcional.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["deuda_tecnica", "costo_software"]

variables:
  escenario: uno_de([["reparar_bug", "reparar un error crítico", "reparar un error crítico"], ["agregar_feature", "implementar una nueva funcionalidad", "implementar una nueva funcionalidad"], ["refactorizar", "refactorizar un módulo heredado", "refactorizar un módulo heredado"]])
  tipo_accion: escenario[0]
  descripcion_accion: escenario[1]
  respuesta_correcta: escenario[2]

tipo: mc
opciones_explicitas: ["reparar un error crítico", "implementar una nueva funcionalidad", "refactorizar un módulo heredado"]
respuesta: respuesta_correcta

enunciado: "Cuando la deuda técnica es muy alta, el tiempo dedicado a {descripcion_accion} suele aumentar drásticamente debido a la complejidad del código existente."

explicacion: |
  La deuda técnica actúa como un interés compuesto: cuanta más deuda se acumula, más tiempo y esfuerzo requiere cada nueva tarea (ya sea corregir errores o añadir funciones) debido a la fragilidad del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["conceptos", "gestion_de_proyectos"]

respuesta: falso
tipo: vf

enunciado: "La deuda técnica es siempre un error de programación que debe evitarse a toda costa desde el primer día del proyecto."

explicacion: |
  Falso. La deuda técnica puede ser una decisión estratégica (deuda consciente) para acelerar el lanzamiento al mercado (Time-to-Market), siempre que se planifique su posterior pago.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenimiento_software"]

respuesta: "correctivo"
tipo: completar
respuestas_validas:
  - "correctivo"
  - "adaptativo"
  - "perfectivo"
  - "preventivo"

enunciado: "El tipo de mantenimiento que se realiza exclusivamente para corregir fallos detectados en el software ya en producción se denomina mantenimiento ___."

explicacion: |
  El mantenimiento correctivo se enfoca en solucionar errores (bugs) que impiden el funcionamiento correcto del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "avanzado"
  tags: ["ciclo_vida", "deuda_tecnica"]

respuesta_orden: ["Implementación rápida", "Acumulación de deuda", "Aumento de complejidad", "Refactorización necesaria"]
tipo: ordenar
opciones_explicitas: ["Implementación rápida", "Acumulación de deuda", "Aumento de complejidad", "Refactorización necesaria"]

enunciado: "Ordene cronológicamente los eventos que describen el proceso de degradación de la calidad de software por deuda técnica no gestionada:"

explicacion: |
  El proceso comienza con una decisión de velocidad, lo que genera deuda; esto aumenta la complejidad del código y finalmente obliga a realizar refactorizaciones costosas para recuperar la mantenibilidad.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenibilidad", "calidad_software"]

respuesta: "alto"
tipo: mc
opciones_explicitas: ["bajo", "medio", "alto"]

enunciado: "Si un módulo tiene una alta complejidad ciclomática y falta de documentación, el esfuerzo requerido para realizar mantenimiento sobre él será ___."

explicacion: |
  La falta de estándares y la complejidad excesiva aumentan la carga cognitiva de los desarrolladores, elevando el esfuerzo de mantenimiento.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["conceptos", "ciclo_de_vida"]

respuesta: "evolución"
tipo: "completar"
respuestas_validas:
  - "evolución"
  - "evolucion"

enunciado: "Mientras que el mantenimiento correctivo se enfoca en reparar errores, el proceso de añadir nuevas funcionalidades o adaptar el software a nuevos entornos se denomina ___."

explicacion: |
  El mantenimiento correctivo busca solucionar fallos existentes, mientras que la evolución (o mantenimiento evolutivo) busca expandir las capacidades del sistema para satisfacer nuevas necesidades del usuario.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["deuda_tecnica", "calidad"]

variables:
  datos: [["decidir tomar un atajo en el diseño para cumplir con una fecha de entrega inmediata", "Aumento de la velocidad de entrega inicial"], ["ignorar las pruebas unitarias para acelerar el despliegue", "Aumento de la velocidad de entrega inicial"]]
  escenario_idx: uno_de([0, 1])

respuesta: datos[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["Aumento de la velocidad de entrega inicial", "Reducción del costo de mantenimiento", "Mejora de la legibilidad del código", "Reducción de la complejidad ciclomática"]

enunciado: "En el escenario de {datos[escenario_idx][0]}, la principal consecuencia a largo plazo es:"

explicacion: |
  La deuda técnica suele ser una decisión consciente (o no) para ganar velocidad de entrega a corto plazo, pero genera un "interés" en forma de mayor dificultad para realizar cambios en el futuro.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["mantenimiento", "tipos"]

respuesta: "preventivo"
tipo: "mc"
opciones_explicitas: ["correctivo", "evolutivo", "preventivo", "adaptativo"]

enunciado: "Si un equipo de desarrollo realiza una refactorización para mejorar la estructura interna del código sin cambiar su comportamiento externo, está realizando mantenimiento ___."

explicacion: |
  El mantenimiento preventivo busca mejorar la estructura del software para evitar problemas futuros (como la degradación por deuda técnica), sin alterar la funcionalidad actual.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["deuda_tecnica", "costo"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es correcto afirmar que la deuda técnica se diferencia de la mala calidad de software en que la deuda suele ser una decisión estratégica para acelerar el desarrollo?"

explicacion: |
  Exacto. La mala calidad es un error o descuido, mientras que la deuda técnica es a menudo una decisión deliberada de "pedir prestado" tiempo de diseño para ganar tiempo de mercado.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "avanzado"
  tags: ["refactorizacion", "deuda_tecnica"]

tipo: ordenar

opciones_explicitas: ["Identificar deuda técnica", "Escribir pruebas unitarias", "Ejecutar refactorización", "Verificar integridad"]

respuesta_orden: ["Identificar deuda técnica", "Escribir pruebas unitarias", "Ejecutar refactorización", "Verificar integridad"]

enunciado: "Ordena los pasos lógicos para abordar una deuda técnica mediante refactorización de forma segura:"

explicacion: |
  Para refactorizar sin introducir nuevos errores, primero se debe identificar el problema, asegurar la existencia de pruebas (test suite) para garantizar el comportamiento actual, realizar el cambio y finalmente verificar que todo siga funcionando.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["refactorizacion", "deuda_tecnica"]

variables:
  escenario: uno_de([["El equipo decide ignorar la implementación de pruebas unitarias para cumplir con la fecha de entrega.", "deuda_tecnica"], ["El equipo decide reescribir un módulo complejo para mejorar su legibilidad sin cambiar su comportamiento.", "refactorizacion"], ["El equipo decide parchar un error crítico con un código temporal que no sigue los estándares.", "deuda_tecnica"]])

enunciado: "En el escenario descrito: '{escenario[0]}', la acción realizada se clasifica como: ___"

respuestas_validas:
  - "deuda_tecnica"
  - "refactorizacion"
respuesta: escenario[1]
tipo: completar

explicacion: |
  La deuda técnica surge cuando se toman caminos de desarrollo rápidos o de baja calidad que facilitan la entrega inmediata pero aumentan el costo de mantenimiento futuro. La refactorización, en cambio, es una práctica deliberada para mejorar la estructura interna sin alterar la funcionalidad.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["mantenimiento_correctivo", "mantenimiento_evolutivo"]

variables:
  caso: uno_de([["Corregir un error que causa que la aplicación se cierre inesperadamente.", "correctivo"], ["Añadir una nueva funcionalidad de exportación a PDF que el cliente solicitó.", "evolutivo"], ["Optimizar el uso de memoria de una función existente para que sea más rápida.", "perfectivo"]])

enunciado: "Si el objetivo es '{caso[0]}', estamos realizando un mantenimiento de tipo: ___"

respuestas_validas:
  - "correctivo"
  - "evolutivo"
  - "perfectivo"
respuesta: caso[1]
tipo: completar

explicacion: |
  El mantenimiento correctivo soluciona fallos; el evolutivo añade nuevas capacidades; y el perfectivo mejora aspectos no funcionales como el rendimiento o la eficiencia.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["costo", "deuda_tecnica"]

enunciado: "A medida que la deuda técnica en un proyecto de software aumenta, el costo de implementar nuevos cambios tiende a ___."

opciones_explicitas: ["Aumentar", "Disminuir"]
respuesta: "Aumentar"
tipo: mc

explicacion: |
  La deuda técnica actúa como un interés compuesto: cuanto más se acumula, más difícil y costoso es trabajar sobre el código, ya que las dependencias y la complejidad no gestionada frenan el desarrollo.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["ciclo_de_vida"]

variables:
  orden: ["Detección del problema", "Análisis de la causa raíz", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]

enunciado: "Ordene los pasos típicos de un proceso de mantenimiento correctivo, desde el inicio hasta la verificación final."

opciones_explicitas: ["Detección del problema", "Análisis de la causa raíz", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]
respuesta_orden: ["Detección del problema", "Análisis de la causa raíz", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]
tipo: ordenar

explicacion: |
  Un proceso de mantenimiento estructurado requiere primero identificar el fallo, entender por qué sucede, planear la solución, aplicarla y, crucialmente, verificar que el cambio no haya roto otras partes del sistema (regresión).
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["calidad", "mantenimiento"]

enunciado: "Si un software tiene un alto nivel de deuda técnica, es ___ que su código sea fácil de mantener a largo plazo."

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: completar
explicacion: |
  La mantenibilidad es la facilidad con la que un sistema puede ser modificado. Una alta deuda técnica degrada la calidad del código, haciendo que la mantenibilidad sea baja.
```

## Sección: memoria-asignacion-memoria-virtual (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["conceptos", "gestion_de_memoria"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria virtual es una técnica que permite a un proceso utilizar una cantidad de memoria que excede la capacidad de la memoria física (RAM) disponible, utilizando parte del almacenamiento secundario como extensión."

explicacion: |
  Correcto. La memoria virtual permite que el sistema operativo gestione la memoria de forma abstracta, permitiendo ejecutar programas más grandes que la RAM física mediante el uso de paginación o segmentación en el disco.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["hardware", "direccionamiento"]

respuesta: "dirección lógica"
tipo: mc

opciones_explicitas: ["dirección lógica", "dirección física", "dirección de disco", "dirección de caché"]

enunciado: "En un sistema con memoria virtual, la unidad de gestión de memoria (MMU) es el componente de hardware encargado de traducir la ___ en una dirección física."

explicacion: |
  La MMU (Memory Management Unit) es el componente encargado de la traducción de direcciones lógicas (generadas por la CPU) a direcciones físicas (ubicadas en la RAM).
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["terminologia", "paginacion"]

respuesta_orden: ["Paginación", "Segmentación", "Direccionamiento"]
tipo: ordenar

opciones_explicitas: ["Paginación", "Segmentación", "Direccionamiento"]

enunciado: "Ordena los conceptos de mayor a menor nivel de abstracción en la gestión de memoria (desde la división de memoria en bloques de tamaño fijo hasta la traducción de direcciones):"

explicacion: |
  La paginación divide la memoria en trozos fijos, la segmentación divide la memoria en unidades lógicas de tamaño variable, y el direccionamiento es el proceso final de localización.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["paginacion", "errores"]

respuesta: "page fault"
tipo: completar

respuestas_validas:
  - "page fault"
  - "error de paginación"
  - "fallo de página"

enunciado: "Cuando un proceso intenta acceder a una página que no se encuentra actualmente en la memoria física, se produce un evento conocido como ___."

explicacion: |
  Un 'page fault' (fallo de página) es una interrupción generada por el hardware que indica que la página requerida debe ser cargada desde el disco a la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  datos: uno_de([[16, 128], [32, 256], [64, 512]])

respuesta: datos[1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si un sistema tiene una memoria RAM física de {datos[0]} GB y se implementa memoria virtual, la capacidad de direccionamiento lógico total para un proceso puede llegar a ser de hasta {datos[1]} GB."

pasos:
  - "Identificar la capacidad de la RAM física."
  - "Asociar la capacidad de direccionamiento virtual como un valor superior a la física."

explicacion: |
  La memoria virtual permite que el espacio de direcciones lógicas sea significativamente mayor que la memoria física instalada.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["conceptos", "gestion_de_memoria"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria virtual permite que un proceso utilice una cantidad de memoria que excede la capacidad física de la memoria RAM disponible, utilizando el almacenamiento secundario como extensión."

explicacion: |
  La memoria virtual es una técnica de gestión de memoria que utiliza el espacio en el disco duro para simular memoria RAM adicional, permitiendo ejecutar procesos más grandes que la RAM física.
```

```
metadata:
  materia: "informatica"
  tema: "asignacion_de_memoria"
  nivel: "intermedio"
  tags: ["calculo", "paginacion"]

variables:
  escenario: uno_de([["4096", "4096", "1024", "4"], ["8192", "8192", "4096", "2"], ["1024", "1024", "512", "2"]])

respuesta: escenario[3]
tipo: mc
opciones_explicitas: ["1", "2", "4", "8"]

enunciado: "Un proceso requiere un bloque de memoria de {escenario[0]} bytes. Si el sistema utiliza páginas de tamaño fijo de {escenario[2]} bytes, ¿cuántas páginas se deben asignar para cubrir el requerimiento total del proceso?"

pasos:
  - "Dividir el tamaño total del proceso por el tamaño de la página: {escenario[0]} / {escenario[2]}"
  - "Si el resultado no es entero, redondear hacia arriba (ceil) para asegurar que el proceso quepa."

explicacion: |
  Para calcular el número de páginas: 
  {escenario[0]} / {escenario[2]} = {escenario[3]}. 
  Se requiere asignar exactamente esa cantidad de páginas.
```

```
metadata:
  materia: "informatica"
  tema: "fragmentacion"
  nivel: "intermedio"
  tags: ["paginacion", "fragmentacion_interna"]

variables:
  datos: uno_de([["15000", "4096", "1384"], ["18000", "4096", "2480"], ["10000", "4096", "2288"]])

respuesta: datos[2]
tipo: completar
respuestas_validas:
  - "1384"
  - "2480"
  - "2288"

enunciado: "En un sistema con paginación de {datos[1]} bytes, se asigna un proceso de {datos[0]} bytes. La fragmentación interna (espacio desperdiciado en la última página) es de ___ bytes."

explicacion: |
  1. Calculamos cuántas páginas completas se necesitan: ceil({datos[0]} / {datos[1]}) páginas.
  2. Espacio total asignado: número de páginas * {datos[1]}.
  3. Fragmentación: espacio total asignado - {datos[0]} = {datos[2]}.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "avanzado"
  tags: ["swapping", "gestion_procesos"]

respuesta_orden: ["Petición de memoria", "Fallo de página (Page Fault)", "Intercambio (Swap-in/out)", "Actualización de tabla de páginas"]
tipo: ordenar

enunciado: "Ordene los pasos que ocurren cuando un proceso intenta acceder a una página que no se encuentra actualmente en la memoria RAM (Page Fault):"

opciones_explicitas: ["Petición de memoria", "Fallo de página (Page Fault)", "Intercambio (Swap-in/out)", "Actualización de tabla de páginas"]

explicacion: |
  El flujo lógico es:
  1. El proceso solicita una dirección de memoria.
  2. La MMU detecta que la página no está en RAM (Page Fault).
  3. El SO busca la página en el disco y la carga en RAM (Swap-in).
  4. Se actualiza la tabla de páginas para marcar la página como presente.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_virtual"
  nivel: "avanzado"
  tags: ["direccionamiento", "paginacion"]

variables:
  direccion: uno_de([["0x0045", "0x0005"], ["0x01A2", "0x0002"], ["0x03FF", "0x000F"]])

respuesta: direccion[1]
tipo: mc
opciones_explicitas: ["0x0000", "0x0005", "0x0002", "0x000F"]

enunciado: "Si el tamaño de página es de 16 bytes (0x10 en hex) y una dirección virtual es {direccion[0]}, ¿cuál es el desplazamiento (offset) dentro de la página?"

pasos:
  - "El desplazamiento se obtiene calculando el residuo de la dirección dividido por el tamaño de la página."
  - "En hexadecimal: {direccion[0]} MOD 0x10 = {direccion[1]}."

explicacion: |
  El desplazamiento (offset) identifica la posición exacta dentro de una página. Se calcula mediante la operación módulo: {direccion[0]} % 16 = {direccion[1]}.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["memoria_virtual", "conceptos_base"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria virtual permite que un proceso acceda a una cantidad de memoria que excede la capacidad de la memoria RAM física instalada en el sistema."

explicacion: |
  Verdadero. La memoria virtual utiliza espacio en el disco (archivo de paginación/swap) para simular memoria adicional, permitiendo que el sistema operativo gestione procesos que requieren más espacio del que la RAM física puede ofrecer de forma inmediata.
```

```
metadata:
  materia: "informatica"
  tema: "asignacion_de_memoria"
  nivel: "intermedio"
  tags: ["fragmentacion", "gestion_memoria"]

variables:
  escenario: uno_de([["fragmentacion_externa", "la memoria tiene huecos libres pero no contiguos"], ["fragmentacion_interna", "la memoria tiene espacio sobrante dentro de un bloque asignado"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["la memoria tiene huecos libres pero no contiguos", "la memoria tiene espacio sobrante dentro de un bloque asignado", "el procesador no puede acceder a la RAM"]

enunciado: "Un sistema operativo utiliza particiones fijas para la asignación de memoria. Si un proceso requiere 15KB y se le asigna un bloque de 20KB, el espacio sobrante de 5KB dentro de ese bloque se conoce como: {escenario[1]}"

explicacion: |
  La fragmentación interna ocurre cuando se asigna un bloque de memoria a un proceso que es mayor que el tamaño requerido por este, dejando un residuo inutilizable dentro de la partición asignada.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["paginacion", "direccionamiento"]

respuesta_orden: ["Dirección lógica", "MMU", "Dirección física"]
tipo: ordenar

opciones_explicitas: ["Dirección lógica", "MMU", "Dirección física"]

enunciado: "Ordena el flujo de resolución de una dirección de memoria cuando un proceso intenta acceder a un dato en un sistema con paginación:"

explicacion: |
  El proceso comienza con la dirección lógica generada por la CPU, la cual es interceptada por la Unidad de Gestión de Memoria (MMU) para ser traducida mediante tablas de páginas, resultando finalmente en una dirección física en la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "avanzado"
  tags: ["page_fault", "rendimiento"]

respuesta: "page_fault"
tipo: completar
respuestas_validas:
  - "page_fault"

enunciado: "Cuando un proceso intenta acceder a una página de memoria que no se encuentra actualmente cargada en la memoria RAM, se produce una excepción llamada ___."

explicacion: |
  El 'page fault' (falta de página) no es un error fatal del programa, sino una interrupción que le indica al sistema operativo que debe buscar la página necesaria en el disco para cargarla en la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento"
  nivel: "intermedio"
  tags: ["bus_direcciones", "arquitectura"]

variables:
  pares: [[32, 4294967296], [64, 18446744073709551616]]
  idx: uno_de([0, 1])
  bits: pares[idx][0]
  max_direccion: pares[idx][1]

respuesta: max_direccion

tipo: completar
tolerancia_abs: 0

enunciado: "Si un procesador tiene un bus de direcciones de {bits} bits, el número total de direcciones de memoria únicas que puede direccionar es:"

explicacion: |
  El número de direcciones posibles es igual a 2 elevado a la potencia del número de bits del bus de direcciones. Para 32 bits es 2^32, y para 64 bits es 2^64.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["memoria", "sistema_operativo", "abstraccion"]

respuesta: "abstraccion"
tipo: mc
opciones_explicitas: ["abstraccion", "hardware", "almacenamiento", "registro"]

enunciado: "A diferencia de la memoria RAM (memoria física), la memoria virtual actúa como una ___ que permite a los procesos manejar un espacio de direcciones mayor al tamaño de la memoria física disponible."

explicacion: |
  La memoria virtual es una técnica de gestión de memoria que proporciona una abstracción de la memoria física, permitiendo que cada proceso crea que tiene un espacio de direccionamiento continuo y extenso.
```

```
metadata:
  materia: "informatica"
  tema: "gestion_de_memoria"
  nivel: "avanzado"
  tags: ["paginacion", "segmentacion", "fragmentacion"]

respuesta: "externa"
tipo: mc
opciones_explicitas: ["interna", "externa"]

enunciado: "La paginación divide la memoria en bloques de tamaño fijo, lo que puede causar fragmentación interna. Por el contrario, la segmentación, al usar tamaños variables, suele provocar fragmentación ___."

explicacion: |
  La paginación causa fragmentación interna (espacio sobrante dentro de una página), mientras que la segmentación causa fragmentación externa (huecos entre segmentos que no son lo suficientemente grandes para nuevos procesos).
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["conceptos_clave", "hardware"]

respuesta: falso
tipo: vf

enunciado: "La memoria virtual es una extensión física de la memoria RAM mediante la adición de módulos de memoria adicionales."

explicacion: |
  Falso. La memoria virtual es una técnica de gestión lógica/de software que utiliza espacio en el disco (almacenamiento secundario) para simular memoria adicional, no es un componente físico extra.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["paginacion", "swap", "paged_fault"]

respuesta_orden: ["Page Fault", "Swap In", "Update Page Table", "Resume Execution"]
tipo: ordenar

opciones_explicitas: ["Page Fault", "Swap In", "Update Page Table", "Resume Execution"]

enunciado: "Cuando un proceso intenta acceder a una página que no está en la RAM, ocurre un 'Page Fault'. Ordena los pasos lógicos que el Sistema Operativo debe seguir para resolver esta interrupción:"

explicacion: |
  1. Se detecta el Page Fault (interrupción).
  2. Se busca la página en el disco y se carga en RAM (Swap In).
  3. Se actualiza la tabla de páginas para marcarla como presente.
  4. Se reanuda la ejecución de la instrucción original.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["direcciones", "logico", "fisico"]

respuesta: "lógico"
tipo: completar
respuestas_validas:
  - "lógico"
  - "virtual"

enunciado: "Mientras que la memoria física se refiere a las direcciones reales en los chips de RAM, el espacio de direcciones que ve un proceso es un espacio ___."

explicacion: |
  El espacio de direcciones lógico (o virtual) es la vista que el procesador y el software tienen de la memoria, la cual es mapeada a direcciones físicas mediante la MMU (Memory Management Unit).
```

```
metadata:
  materia: "informatica"
  tema: "asignacion_memoria_procesos"
  nivel: "intermedio"
  tags: ["memoria", "segmentacion", "procesos"]

variables:
  datos: [["segmento_codigo", "0x0040"], ["segmento_datos", "0x0080"], ["segmento_stack", "0x0120"]]
  resultados: ["1040", "1080", "1120"]
  idx: uno_de([0, 1, 2])

enunciado: "Un sistema operativo utiliza segmentación para gestionar la memoria de un proceso. Si el proceso requiere cargar el {datos[idx][0]} en una dirección base específica, la dirección física final será el resultado de sumar la base más el offset. Si la base es 0x1000 y el offset es {datos[idx][1]}, ¿cuál es la dirección física resultante en hexadecimal (sin el prefijo 0x)?"

pasos:
  - "Convertir el offset hexadecimal a decimal."
  - "Sumar el valor de la base (4096) al offset."
  - "Convertir el resultado de nuevo a hexadecimal."

respuestas_validas:
  - "1040"
  - "1080"
  - "1120"
respuesta: resultados[idx]
tipo: completar
tolerancia_abs: 0

explicacion: |
  La dirección física se calcula sumando la dirección base del segmento al offset relativo.
  Para el caso de {datos[idx][0]}, la suma es 0x1000 + {datos[idx][1]} = 0x{resultados[idx]}.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["memoria_virtual", "conceptos"]

enunciado: "La memoria virtual permite que un proceso utilice una cantidad de memoria que es mayor a la capacidad de la memoria RAM física disponible, utilizando el almacenamiento secundario (disco) como extensión. ¿Es esta afirmación verdadera o falsa?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La memoria virtual abstrae la memoria física, permitiendo que los programas se ejecuten incluso si la RAM es insuficiente, mediante el uso de paginación o segmentación y el intercambio (swapping) con el disco.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["mmu", "direccionamiento"]

enunciado: "Cuando un proceso intenta acceder a una dirección de memoria virtual, un componente de hardware especializado debe traducir esa dirección a una dirección física real. ¿Cómo se llama este componente?"

opciones_explicitas: ["MMU (Memory Management Unit)", "CPU (Central Processing Unit)", "ALU (Arithmetic Logic Unit)", "Controlador de Interrupciones"]
respuesta: "MMU (Memory Management Unit)"
tipo: mc

explicacion: |
  La MMU es la unidad de hardware encargada de la traducción de direcciones virtuales a físicas en tiempo real durante la ejecución de las instrucciones.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "avanzado"
  tags: ["paginacion", "paginas", "frames"]

variables:
  datos: [["pagina_virtual_2", "frame_fisico_5"], ["pagina_virtual_3", "frame_fisico_8"], ["pagina_virtual_5", "frame_fisico_12"]]
  resultados: [20480, 32768, 49152]
  idx: uno_de([0, 1, 2])

enunciado: "En un sistema de paginación, la tabla de páginas mapea la {datos[idx][0]} hacia el {datos[idx][1]}. Si el tamaño de página es de 4KB, ¿en qué dirección física comienza el {datos[idx][1]}?"

pasos:
  - "Identificar el número de frame físico: {datos[idx][1]}."
  - "Multiplicar el número de frame por el tamaño de página (4096)."
  - "El resultado es la dirección base del frame."

respuesta: resultados[idx]
tipo: completar
tolerancia_abs: 0

explicacion: |
  Si el frame físico es el {datos[idx][1]} (índice 5, 8 o 12), la dirección base se calcula como:
  Frame * 4096. Por ejemplo, si es el frame 5: 5 * 4096 = 20480.
```

```
metadata:
  materia: "informatica"
  tema: "asignacion_memoria_procesos"
  nivel: "intermedio"
  tags: ["gestion", "orden"]

enunciado: "Ordena los pasos que sigue el Sistema Operativo desde que un proceso solicita memoria hasta que esta es liberada:"

opciones_explicitas: ["El SO asigna un bloque de memoria (física o virtual)", "El proceso solicita memoria mediante una llamada al sistema", "El proceso finaliza y el SO libera la memoria", "El proceso utiliza la memoria para sus datos"]
respuesta_orden: ["El proceso solicita memoria mediante una llamada al sistema", "El SO asigna un bloque de memoria (física o virtual)", "El proceso utiliza la memoria para sus datos", "El proceso finaliza y el SO libera la memoria"]
tipo: ordenar

explicacion: |
  El flujo lógico es: 1. Solicitud (System Call), 2. Asignación (Gestión de memoria), 3. Uso (Ejecución), 4. Liberación (Cleanup).
```

## Sección: memoria-ram-cache-jerarquia (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["arquitectura", "memoria"]

tipo: mc
opciones_explicitas: ["Mayor velocidad, menor capacidad", "Menor velocidad, mayor capacidad", "Igual velocidad, mayor costo", "Mayor velocidad, mayor costo"]

enunciado: "En una jerarquía de memoria típica, a medida que nos movemos desde la CPU hacia el almacenamiento secundario (disco), la memoria se vuelve..."

respuesta: "Menor velocidad, mayor capacidad"

explicacion: |
  La jerarquía busca equilibrar costo y rendimiento. Los niveles superiores (Caché) son muy rápidos pero caros y pequeños; los niveles inferiores (Disco) son lentos pero económicos y masivos.
```

```
metadata:
  materia: "informatica"
  tema: "ram_caracteristicas"
  nivel: "basico"
  tags: ["ram", "volatilidad"]

tipo: vf

enunciado: "La memoria RAM es considerada una memoria volátil porque pierde su contenido al interrumpirse el suministro eléctrico."

respuesta: verdadero

explicacion: |
  La RAM es volátil por definición. Si no hay energía, los datos almacenados en sus capacitores se pierden.
```

```
metadata:
  materia: "informatica"
  tema: "cache_funcionamiento"
  nivel: "intermedio"
  tags: ["cache", "latencia"]

tipo: completar
respuestas_validas:
  - "L1"
  - "L2"
  - "L3"

enunciado: "En una arquitectura con múltiples niveles de caché, la caché que se encuentra físicamente más cerca del núcleo del procesador es la caché ___."

pasos:
  - "Identificar la posición de la caché en la jerarquía respecto al procesador."
  - "Determinar cuál tiene la menor latencia de acceso."

respuesta: "L1"

explicacion: |
  La caché L1 (Level 1) es la más rápida y cercana al núcleo, seguida de la L2 y finalmente la L3.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["orden", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Registros", "Caché", "Memoria RAM", "Disco Duro"]

enunciado: "Ordena los siguientes elementos de memoria de mayor a menor velocidad de acceso (del más rápido al más lento):"

respuesta_orden: ["Registros", "Caché", "Memoria RAM", "Disco Duro"]

explicacion: |
  Los registros están dentro de la CPU y son instantáneos. La caché es la siguiente, luego la RAM (memoria principal) y finalmente el almacenamiento masivo (disco).
```

```
metadata:
  materia: "informatica"
  tema: "cache_principio_localidad"
  nivel: "avanzado"
  tags: ["localidad", "cache"]

tipo: mc
opciones_explicitas: ["Localidad Espacial", "Localidad Temporal", "Localidad de Datos", "Localidad de Instrucciones"]

enunciado: "Cuando un sistema carga un bloque de memoria porque se ha accedido a una dirección específica, asumiendo que las direcciones contiguas serán accedidas pronto, está aprovechando la ___."

respuesta: "Localidad Espacial"

explicacion: |
  La localidad espacial se refiere al uso de datos cercanos en direcciones de memoria. La localidad temporal se refiere al reuso de un mismo dato en un corto periodo de tiempo.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["hardware", "memoria", "cache"]

enunciado: "En una jerarquía de memoria típica, si comparamos la memoria caché L1 con la memoria RAM, la caché L1 es más ___ que la RAM, pero tiene una capacidad menor."

opciones_explicitas: ["rápida", "lenta", "pequeña", "grande"]

respuesta: "rápida"

tipo: mc

explicacion: |
  La jerarquía de memoria busca equilibrar costo, capacidad y velocidad. La caché (L1, L2, L3) es mucho más rápida que la RAM porque está más cerca del procesador y usa tecnología más costosa, lo que obliga a que su capacidad sea mucho menor.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["cache", "localidad", "performance"]

enunciado: "Un procesador accede a una lista de elementos en orden consecutivo (0, 1, 2, 3...). Este tipo de comportamiento favorece la eficiencia de la caché debido a la localidad de referencia, la cual es de tipo ___."

opciones_explicitas: ["espacial", "temporal", "aleatoria"]

respuesta: "espacial"

tipo: mc

explicacion: |
  La localidad espacial ocurre cuando se accede a una posición de memoria y se accede rápidamente a posiciones cercanas. Esto permite que la caché cargue bloques enteros (cache lines) prediciendo que los datos contiguos serán necesarios pronto.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["cache", "hit", "miss"]

enunciado: "El procesador solicita el dato en la dirección 0x4F. La unidad de control busca en la caché L1 y el dato no se encuentra allí. A este evento se le denomina ___ y el sistema deberá buscar el dato en la siguiente capa de la jerarquía."

respuestas_validas:
  - "miss"

respuesta: "miss"

tipo: completar

explicacion: |
  Un 'Cache Miss' ocurre cuando el dato requerido no está en la caché, obligando al sistema a buscar en un nivel más lento (como la RAM), lo que aumenta la latencia de la operación.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["jerarquia", "orden"]

opciones_explicitas: ["Registros", "Caché L1", "Memoria RAM", "Disco Rígido"]

respuesta_orden: ["Registros", "Caché L1", "Memoria RAM", "Disco Rígido"]

tipo: ordenar

enunciado: "Ordena los siguientes elementos de memoria de mayor a menor velocidad (del más rápido al más lento):"

explicacion: |
  La jerarquía se organiza por velocidad: los Registros son parte del CPU y son instantáneos; la Caché es muy rápida; la RAM es el almacenamiento principal de trabajo; y el Disco Rígido (almacenamiento masivo) es el más lento de la cadena.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["costo", "capacidad"]

enunciado: "La memoria RAM tiene un costo por gigabyte significativamente mayor que un disco duro (HDD/SSD)."

respuesta: verdadero

tipo: vf
explicacion: |
  Es verdadero. Debido a que la RAM utiliza tecnología semiconductoras mucho más rápida y compleja para mantener los datos, su costo por unidad de capacidad es mucho más elevado que el de los medios de almacenamiento masivo.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["memoria", "costo", "velocidad"]

enunciado: "En una arquitectura de memoria jerárquica, si comparamos la memoria caché, la memoria RAM y el disco duro, ¿cuál de ellas tiene el mayor costo por byte?"

opciones_explicitas: ["Disco duro", "Memoria RAM", "Memoria caché"]
respuesta: "Memoria caché"
tipo: mc

explicacion: |
  La jerarquía de memoria busca un equilibrio entre costo y rendimiento. Las memorias más rápidas (como la caché) utilizan tecnología más cara (SRAM) y tienen menos capacidad, mientras que las más lentas (como el disco duro) son mucho más económicas por cada GB almacenado.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_ram"
  nivel: "intermedio"
  tags: ["latencia", "velocidad", "confucion"]

enunciado: "Un error común es pensar que tener más capacidad de RAM (ej. 64GB vs 16GB) aumenta automáticamente la velocidad de procesamiento de una tarea que ya cabe en 16GB. ¿Es esto verdadero o falso?"

respuesta: falso
tipo: vf
explicacion: |
  La capacidad de la RAM determina cuánta información puede estar disponible para la CPU. Si el software ya cabe en la memoria disponible, aumentar la capacidad no acelera la ejecución; lo que acelera la ejecución es la velocidad de acceso (frecuencia) y la latencia, no el tamaño total.
```

```
metadata:
  materia: "informatica"
  tema: "cache_procesador"
  nivel: "intermedio"
  tags: ["cache", "cpu", "acceso"]

variables:
  datos: [["L1", "muy rápida"], ["L2", "rápida"], ["L3", "moderada"]]
  idx: uno_de([0,1,2])

enunciado: "Considerando la jerarquía de la caché del procesador, la caché de nivel {datos[idx][0]} tiene una latencia de acceso descrita como {datos[idx][1]}."

respuesta: datos[idx][0]
tipo: completar
respuestas_validas:
  - "L1"
  - "L2"
  - "L3"

explicacion: |
  La caché L1 es la más cercana al núcleo del procesador, integrada directamente en él, lo que la hace extremadamente rápida pero de muy pequeña capacidad.
```

```
metadata:
  materia: "informatica"
  tema: "principio_localidad"
  nivel: "avanzado"
  tags: ["localidad_temporal", "localidad_espacial"]

enunciado: "La eficiencia de la memoria caché se basa en dos principios: la localidad temporal (reutilizar datos usados recientemente) y la localidad ___ (usar datos que están en direcciones de memoria cercanas)."

pasos:
  - "Identificar el tipo de localidad que complementa a la temporal."

respuesta: "espacial"
tipo: completar
respuestas_validas:
  - "espacial"
  - "secuencial"
  - "distante"

explicacion: |
  La localidad espacial implica que si se accede a una posición de memoria, es muy probable que pronto se acceda a las posiciones adyacentes. La caché aprovecha esto cargando bloques enteros (cache lines) en lugar de bytes individuales.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["orden", "velocidad", "jerarquia"]

enunciado: "Ordena los siguientes componentes de memoria de mayor a menor velocidad de acceso (el más rápido primero):"

opciones_explicitas: ["Caché L1", "Memoria RAM", "Disco SSD", "Disco HDD"]
respuesta_orden: ["Caché L1", "Memoria RAM", "Disco SSD", "Disco HDD"]
tipo: ordenar

explicacion: |
  La jerarquía sigue un orden lógico: a medida que nos alejamos del núcleo de la CPU, la velocidad de acceso disminuye drásticamente, pero la capacidad y la economía mejoran.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["memoria", "ram", "cache"]

respuesta: "cache"
tipo: completar
respuestas_validas:
  - "cache"
  - "caché"

enunciado: "En la jerarquía de memoria, la ___ es un tipo de memoria de acceso muy rápido situada entre el procesador y la memoria RAM para reducir el tiempo de espera."

explicacion: |
  La memoria caché es mucho más rápida que la RAM pero tiene mucha menos capacidad. Su función es almacenar copias de los datos que el procesador utiliza con más frecuencia para evitar tener que ir a la RAM (que es más lenta).
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "intermedio"
  tags: ["costo", "capacidad", "jerarquia"]

respuesta: "Mayor capacidad y menor costo por bit"
tipo: mc
opciones_explicitas: ["Mayor capacidad y menor costo por bit", "Menor capacidad y mayor costo por bit"]

enunciado: "Si comparamos la memoria RAM con la memoria Caché, la RAM se caracteriza por tener una ___."

explicacion: |
  En la jerarquía de memoria, cuanto más cerca está la memoria del núcleo del procesador (como la caché L1), más cara es y menos capacidad tiene. La RAM es más barata y permite almacenar mucha más información, pero es más lenta.
```

```
metadata:
  materia: "informatica"
  tema: "propiedades_memoria"
  nivel: "basico"
  tags: ["volatilidad", "ram", "almacenamiento"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria RAM es una memoria volátil, lo que significa que pierde toda la información almacenada cuando se corta el suministro eléctrico."

explicacion: |
  Correcto. A diferencia del disco duro (almacenamiento secundario), la RAM necesita energía para mantener los datos. Si apagas la computadora, los datos en la RAM se borran.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "intermedio"
  tags: ["orden", "velocidad", "jerarquia"]

respuesta_orden: ["Registros", "Caché L1", "RAM", "Disco Duro"]
tipo: ordenar
opciones_explicitas: ["Registros", "Caché L1", "RAM", "Disco Duro"]

enunciado: "Ordena los siguientes elementos de mayor a menor velocidad de acceso (del más rápido al más lento):"

explicacion: |
  La jerarquía se organiza por velocidad: los Registros están dentro de la CPU (ultra rápidos), seguidos por la Caché (L1, L2, L3), luego la RAM y finalmente el almacenamiento masivo como el Disco Duro (HDD/SSD), que es mucho más lento pero permite guardar datos permanentemente.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "avanzado"
  tags: ["eficiencia", "costo", "arquitectura"]

respuesta: "Maximizar la velocidad de acceso a los datos con un costo equilibrado"
tipo: mc
opciones_explicitas: ["Maximizar la velocidad de acceso a los datos con un costo equilibrado", "Aumentar la capacidad total de almacenamiento del sistema"]

enunciado: "El objetivo principal de implementar una jerarquía de memoria con distintos niveles es ___."

explicacion: |
  No es posible tener toda la memoria del sistema a la velocidad de la CPU porque sería extremadamente cara. La jerarquía permite que el sistema se comporte como si tuviera una memoria muy grande y muy rápida, equilibrando rendimiento y costo.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["arquitectura", "hardware"]

variables:
  escenario_idx: uno_de([0,1,2])
  datos: [["La memoria con mayor velocidad pero menor capacidad es la ___.", "Caché"], ["La memoria que es más lenta que la caché pero más rápida que el disco es la ___.", "RAM"], ["La memoria de mayor capacidad y menor costo por bit es el ___.", "Disco"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "Caché"
  - "RAM"
  - "Disco"

enunciado: "Analizando la jerarquía de memoria, se observa que: {datos[escenario_idx][0]}"

explicacion: |
  En una jerarquía de memoria, cuanto más cerca está del procesador, más rápida y cara es (Caché), y cuanto más lejos, más lenta y económica es (Disco).
```

```
metadata:
  materia: "informatica"
  tema: "memoria_ram"
  nivel: "basico"
  tags: ["volatilidad", "hardware"]

respuesta: falso
tipo: vf

enunciado: "La memoria RAM es una memoria de tipo no volátil, lo que significa que la información se mantiene grabada incluso si se apaga el ordenador."

explicacion: |
  Falso. La RAM es memoria volátil; requiere energía para mantener los datos almacenados. Al apagar el equipo, los datos se pierden.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["latencia", "rendimiento"]

variables:
  opcion_idx: uno_de([0,1])
  comparativa: [["La caché L1 tiene una latencia ___ que la memoria RAM.", "menor"], ["La memoria RAM tiene una latencia ___ que la memoria caché L1.", "mayor"]]

respuesta: comparativa[opcion_idx][1]
tipo: mc
opciones_explicitas: ["menor", "mayor"]

enunciado: "Considerando el acceso a datos en un sistema computacional: {comparativa[opcion_idx][0]}"

explicacion: |
  La latencia es el tiempo de espera. La caché, al estar integrada en el procesador, responde mucho más rápido (menor latencia) que la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["orden", "arquitectura"]

respuesta_orden: ["Registros", "Caché L1", "Memoria RAM", "Disco Duro"]
tipo: ordenar
opciones_explicitas: ["Registros", "Caché L1", "Memoria RAM", "Disco Duro"]

enunciado: "Ordena los siguientes elementos de memoria de mayor a menor velocidad (del más rápido al más lento):"

explicacion: |
  La jerarquía correcta de velocidad es: Registros del CPU > Caché (L1, L2, L3) > Memoria RAM > Almacenamiento secundario (Disco).
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "avanzado"
  tags: ["costo", "capacidad"]

variables:
  item_idx: uno_de([0,1])
  comparacion: [["Si comparamos la Caché con la RAM, la caché tiene un costo por GB ___ que la RAM.", "mayor"], ["Si comparamos la RAM con el Disco Duro, la RAM tiene un costo por GB ___ que el disco.", "mayor"]]

respuesta: comparacion[item_idx][1]
tipo: mc
opciones_explicitas: ["mayor", "menor"]

enunciado: "En términos de arquitectura de computadores: {comparacion[item_idx][0]}"

explicacion: |
  Existe una relación inversa: a mayor velocidad de acceso, mayor es el costo por unidad de capacidad (GB/TB). Por eso las memorias rápidas son pequeñas y las lentas son masivas.
```

## Sección: modelo-relacional-tabla-registro-clave-primaria (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_conceptos_basicos"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

tipo: mc
opciones_explicitas: ["Registro", "Atributo", "Relación", "Tupla"]

enunciado: "En el modelo relacional, una fila de una tabla que contiene un conjunto de datos relacionados se denomina:"

respuesta: "Registro"

explicacion: |
  En el modelo relacional, una tabla se compone de filas (registros o tuplas) y columnas (atributos).
```

```
metadata:
  materia: "informatica"
  tema: "clave_primaria"
  nivel: "basico"
  tags: ["clave_primaria", "identificador"]

tipo: vf

enunciado: "Una clave primaria (Primary Key) tiene la propiedad de permitir valores nulos (NULL) para asegurar la unicidad de los registros."

respuesta: falso

explicacion: |
  Una clave primaria debe ser única y, por definición, no puede contener valores nulos, ya que su función es identificar de forma inequívoca cada registro.
```

```
metadata:
  materia: "informatica"
  tema: "estructura_tabla"
  nivel: "basico"
  tags: ["tabla", "columna"]

tipo: completar
respuestas_validas:
  - "columna"
  - "atributo"

enunciado: "En una base de datos relacional, el conjunto de datos que define la estructura de una tabla (como el nombre y el tipo de dato) se conoce como ___."

respuesta: "columna"

explicacion: |
  Cada ___ representa una propiedad o característica de la entidad que estamos almacenando.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_relacional"
  nivel: "basico"
  tags: ["orden", "estructura"]

tipo: ordenar
opciones_explicitas: ["Base de datos", "Tabla", "Registro", "Campo"]

respuesta_orden: ["Base de datos", "Tabla", "Registro", "Campo"]

enunciado: "Ordene los siguientes elementos de mayor a menor nivel de jerarquía de datos:"

explicacion: |
  La jerarquía parte desde el contenedor global (Base de datos), contiene conjuntos de datos (Tablas), que contienen filas (Registros), las cuales se dividen en unidades mínimas de información (Campos).
```

```
metadata:
  materia: "informatica"
  tema: "clave_primaria_propiedades"
  nivel: "intermedio"
  tags: ["clave_primaria", "unicidad"]

variables:
  escenario: uno_de([[1, "ID_Usuario"], [2, "DNI"], [3, "Codigo_Producto"]])
  campo_id: escenario[1]

tipo: mc
opciones_explicitas: ["Puede repetirse en diferentes filas", "Debe ser única en toda la tabla", "Puede ser nula", "No tiene importancia para la integridad"]

enunciado: "Si definimos {campo_id} como la clave primaria de una tabla, esta debe cumplir con la propiedad de ser:"

respuesta: "Debe ser única en toda la tabla"

explicacion: |
  La función principal de la clave primaria es garantizar que no existan dos filas idénticas, permitiendo la identificación única de cada registro mediante el valor de {campo_id}.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "conceptos"]

respuesta: "registro"
tipo: "completar"
respuestas_validas:
  - "registro"
  - "fila"

enunciado: "En el modelo relacional, una estructura que contiene una colección de datos organizados en columnas y filas se denomina tabla, mientras que cada una de las filas individuales que representan una entidad única se denomina ___."

explicacion: |
  Una tabla es la estructura completa, mientras que el registro (o fila) es la unidad mínima de información que representa un objeto o entidad específica dentro de esa tabla.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "basico"
  tags: ["base_de_datos", "clave_primaria"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["DNI", "Nombre", "Apellido"], ["ID_Producto", "Nombre_Prod", "Precio"]]
  respuestas: ["DNI", "ID_Producto"]

respuesta: datos[escenario_idx][0]
tipo: "mc"
opciones_explicitas: ["DNI", "Nombre", "Apellido", "ID_Producto", "Precio", "Nombre_Prod"]

enunciado: "Considerando la tabla con el esquema {datos[escenario_idx]}, ¿cuál de los siguientes campos es el candidato ideal para actuar como clave primaria para asegurar que cada registro sea único?"

explicacion: |
  La clave primaria debe ser un atributo que no se repita entre los registros. En el escenario {datos[escenario_idx][0]}, ese campo es {datos[escenario_idx][0]}.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "intermedio"
  tags: ["base_de_datos", "reglas"]

respuesta: falso
tipo: "vf"

enunciado: "En un modelo relacional, una clave primaria puede contener valores nulos (NULL) para permitir que ciertos registros no tengan un identificador único asignado."

explicacion: |
  Falso. Una de las reglas de integridad de la clave primaria es la 'Integridad de Entidad', que prohíbe estrictamente que los campos que forman la clave primaria sean nulos.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "intermedio"
  tags: ["base_de_datos", "ordenar"]

tipo: ordenar
opciones_explicitas: ["Identificar la entidad", "Definir los atributos", "Asignar la clave primaria"]
respuesta_orden: ["Identificar la entidad", "Definir los atributos", "Asignar la clave primaria"]

enunciado: "Para diseñar correctamente una tabla en un modelo relacional, se debe seguir un orden lógico de diseño. Ordena los siguientes pasos:"

explicacion: |
  Primero se identifica la entidad (ej. Usuario), luego sus atributos (ej. Nombre, Email) y finalmente se establece la clave primaria (ej. ID_Usuario).
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "avanzado"
  tags: ["base_de_datos", "logica"]

variables:
  escenario_idx: uno_de([0, 1])
  valores_max: [100, 50]

respuesta: valores_max[escenario_idx]
tipo: completar
tolerancia_abs: 0

enunciado: "Si una tabla de 'Clientes' tiene una clave primaria que solo permite valores numéricos del 1 al {valores_max[escenario_idx]}, ¿cuántos registros distintos se pueden almacenar como máximo sin violar la restricción de clave primaria?"

explicacion: |
  La clave primaria debe ser única. Si el rango de valores disponibles es de 1 a {valores_max[escenario_idx]}, el número máximo de registros es {valores_max[escenario_idx]}.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_conceptos_basicos"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

respuesta: "fila"
tipo: completar
respuestas_validas:
  - "fila"
  - "registro"

enunciado: "En el modelo relacional, una estructura de datos bidimensional se compone de columnas (atributos) y ___ (tuplas)."

explicacion: |
  En el modelo relacional, una tabla se compone de filas (también llamadas tuplas o registros) y columnas (atributos).
```

```
metadata:
  materia: "informatica"
  tema: "clave_primaria_caracteristicas"
  nivel: "intermedio"
  tags: ["base_de_datos", "clave_primaria"]

respuesta: falso
tipo: vf
enunciado: "Si una tabla tiene una columna llamada 'Edad', ¿puede esta ser designada como la clave primaria de la tabla si existen múltiples personas con la misma edad?"

explicacion: |
  La clave primaria debe ser única para cada registro. Si dos filas tienen el mismo valor en la columna clave, el sistema no podría distinguirlas, violando el principio de integridad de entidad.
```

```
metadata:
  materia: "informatica"
  tema: "estructura_tabla"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

respuesta: "columnas"
tipo: mc
opciones_explicitas: ["filas", "columnas", "celdas", "bases"]

enunciado: "Si un registro representa una entidad completa (como un usuario), las ___ representan las propiedades o características de esa entidad."

explicacion: |
  Las columnas definen la estructura y el tipo de datos de los atributos, mientras que las filas contienen los datos específicos de cada instancia.
```

```
metadata:
  materia: "informatica"
  tema: "integridad_entidad"
  nivel: "intermedio"
  tags: ["base_de_datos", "clave_primaria"]

respuesta: "ID_Estudiante"
tipo: completar
respuestas_validas:
  - "ID_Estudiante"
  - "codigo_estudiante"
  - "estudiante_id"

enunciado: |
  Dada la siguiente tabla de 'Estudiantes':
  | Nombre | Apellido | DNI |
  |--------|----------|-----|
  | Juan   | Perez    | 123 |
  | Ana    | Lopez    | 456 |

  Si queremos garantizar que no haya duplicados, la mejor opción para una clave primaria sería ___.

explicacion: |
  Aunque el DNI suele ser único, en el diseño de bases de datos se prefiere usar una clave artificial (como un ID) que sea inmutable y garantice la unicidad técnica sin depender de datos externos que podrían cambiar o repetirse por error.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_relacional"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

respuesta_orden: ["Base de Datos", "Tabla", "Registro", "Atributo"]
tipo: ordenar
opciones_explicitas: ["Base de Datos", "Tabla", "Registro", "Atributo"]

enunciado: "Ordena los elementos de mayor a menor jerarquía en un modelo relacional (desde el contenedor global hasta el dato mínimo):"

explicacion: |
  La jerarquía lógica es: La Base de Datos contiene múltiples Tablas; cada Tabla contiene múltiples Registros; y cada Registro está compuesto por Atributos (valores).
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tabla_registro"
  nivel: "basico"
  tags: ["base_de_datos", "conceptos_basicos"]

tipo: mc
opciones_explicitas: ["La tabla es una unidad de datos y el registro es un conjunto de tablas", "La tabla es la estructura que contiene datos y el registro es una fila de dicha estructura", "La tabla es un dato individual y el registro es la base de datos completa", "No hay diferencia, son sinónimos"]

respuesta: "La tabla es la estructura que contiene datos y el registro es una fila de dicha estructura"

enunciado: "En el modelo relacional, ¿qué distingue fundamentalmente a una tabla de un registro?"

explicacion: |
  Una tabla (o relación) es la entidad completa que define la estructura y el conjunto de datos, mientras que un registro (o tupla) es una única entrada o fila que representa un elemento específico dentro de esa tabla.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "basico"
  tags: ["base_de_datos", "clave_primaria"]

tipo: completar
respuestas_validas:
  - "identificar"
  - "diferenciar"
  - "única"

respuesta: "única"

enunciado: "A diferencia de un campo común, la clave primaria debe garantizar que cada registro sea ___."

explicacion: |
  La clave primaria (Primary Key) tiene la propiedad de unicidad, lo que significa que no puede haber dos filas con el mismo valor en ese campo, permitiendo identificar de forma inequívoca cada registro.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tabla_registro"
  nivel: "intermedio"
  tags: ["base_de_datos", "atributos"]

tipo: vf

respuesta: falso

enunciado: "¿Es correcto afirmar que un registro es la colección de todos los atributos (columnas) de una tabla?"

explicacion: |
  Falso. Un registro es una instancia de datos (una fila). La colección de todos los registros es la tabla. Los atributos son las columnas que definen la estructura de la tabla.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_estructura"
  nivel: "basico"
  tags: ["base_de_datos", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Base de datos", "Tabla", "Registro", "Campo"]

respuesta_orden: ["Base de datos", "Tabla", "Registro", "Campo"]

enunciado: "Ordena los siguientes elementos de mayor a menor jerarquía de abstracción en un modelo relacional:"

explicacion: |
  La jerarquía lógica va desde el contenedor global (Base de datos), que contiene estructuras (Tablas), que contienen instancias de datos (Registros), que a su vez se componen de unidades mínimas de información (Campos/Atributos).
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "intermedio"
  tags: ["base_de_datos", "integridad"]

respuesta: "Debe ser única y no nula"

tipo: mc
opciones_explicitas: ["Puede contener valores nulos", "Debe ser única y no nula"]

enunciado: "Considerando la integridad de entidad, ¿cuál es la distinción principal de una clave primaria respecto a un campo de texto normal?"

pasos:
  - "Identificar la propiedad de unicidad"
  - "Verificar la restricción de nulidad"

explicacion: |
  La clave primaria tiene dos restricciones críticas que un campo normal no tiene: debe ser única en toda la tabla y no puede contener valores nulos (NOT NULL).
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "clave_primaria"]

variables:
  escenario: uno_de([["ID_Usuario, Nombre, Email", "ID_Usuario"], ["DNI, Apellido, Dirección", "DNI"], ["Codigo_Producto, Descripcion, Precio", "Codigo_Producto"], ["Matricula, Estudiante, Curso", "Matricula"]])

enunciado: "En una base de datos de una tienda, se tiene la siguiente estructura de tabla: {escenario[0]}. El campo que actúa como clave primaria es ___."

respuestas_validas:
  - escenario[1]
respuesta: escenario[1]

tipo: completar

explicacion: |
  La clave primaria es el campo que identifica de forma única e irrepetible a cada registro en una tabla.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "registro"]

enunciado: "¿Un registro en una base de datos relacional es equivalente a una fila que contiene datos de un objeto o entidad específica?"

tipo: vf
respuesta: verdadero

explicacion: |
  En el modelo relacional, un registro (o tupla) es la colección de atributos que describen una única instancia de la entidad.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "columnas"]

variables:
  caso: uno_de([["ID, Fecha, Monto", "ID"], ["Codigo_Cliente, Nombre, Telefono", "Codigo_Cliente"], ["Legajo, Empleado, Puesto", "Legajo"]])

enunciado: "Si tenemos la tabla con las columnas {caso[0]}, ¿cuál de ellas es la más adecuada para ser la clave primaria?"

opciones_explicitas: ["ID", "Codigo_Cliente", "Legajo", "Ninguna de las anteriores"]

tipo: mc

respuesta: caso[1]

explicacion: |
  La clave primaria debe ser un atributo que no se repita entre distintos registros.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "intermedio"
  tags: ["base_de_datos", "integridad"]

variables:
  propiedad: uno_de(["Un valor de clave primaria puede ser nulo (NULL)", "Dos registros pueden tener la misma clave primaria", "La clave primaria puede ser un número repetido"])

enunciado: "Analizando las reglas de integridad de entidad: {propiedad}. ¿Es esto verdadero o falso?"

tipo: vf
respuesta: falso

explicacion: |
  La integridad de entidad establece que ninguna parte de una clave primaria puede ser nula y que debe ser única.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "estructura"]

variables:
  orden_estructural: ["Nombre de la tabla", "Definición de columnas (esquema)", "Inserción de registros (datos)"]

enunciado: "Ordena los pasos lógicos para la creación y uso de una tabla en una base de datos:"

opciones_explicitas: ["Nombre de la tabla", "Definición de columnas (esquema)", "Inserción de registros (datos)"]

tipo: ordenar

respuesta_orden: ["Nombre de la tabla", "Definición de columnas (esquema)", "Inserción de registros (datos)"]

explicacion: |
  Primero se define la identidad (nombre), luego la estructura (columnas/esquema) y finalmente se puebla con información (registros).
```

