### 1 — Insertar tarea en Gantt
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "tareas", "insercion"]
respuesta: verdadero
tipo: vf
enunciado: En Microsoft Project, al insertar una nueva tarea en la vista Diagrama de Gantt, esta se posiciona automáticamente como hija de la tarea seleccionada actualmente en la jerarquía.
uno_de([
  "La tarea se inserta antes de la seleccionada.",
  "La tarea se inserta después de la seleccionada."
])
pasos:
  - "Seleccionar una tarea en la vista Gantt."
  - "Utilizar la opción de insertar tarea desde la pestaña Tarea."
  - "Observar la posición de la nueva tarea respecto a la seleccionada."
explicacion: Al insertar una tarea, esta se coloca inmediatamente DESPUÉS (inferior) de la tarea seleccionada. Para hacerla hija, se debe usar la opción 'Indentar' (avanzar) después de insertarla, no automáticamente al insertar.
```

### 2 — Identificar dependencia
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["dependencias", "ms-project", "fs"]
respuesta: "FS"
tipo: completar
enunciado: En Microsoft Project, si la Tarea B no puede comenzar hasta que la Tarea A haya finalizado completamente, ¿qué tipo de dependencia se configura entre ellas?
respuestas_validas:
  - "FS"
  - "Finish-to-Start"
  - "finish-to-start"
  - "finish to start"
pasos:
  - "Abrir la ficha Recursos o Tareas."
  - "Verificar la pestaña Dependencias."
  - "Identificar que 'Finalizar-Inicio' es el estándar para secuencias lógicas."
explicacion: La dependencia Finish-to-Start (FS) significa que la tarea sucesora (B) solo puede empezar cuando la tarea predecesora (A) ha terminado. Es el tipo de enlace más común en la gestión de proyectos.
```

### 3 — Formato de fecha
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["excel", "fechas", "formato"]
respuesta: "dd/mm/aaaa"
tipo: completar
enunciado: En Excel, para mostrar una fecha en un formato día/mes/año de cuatro dígitos en una celda, ¿cuál es el código de formato personalizado más común que se debe aplicar en 'Celdas' > 'Personalizado'?
respuestas_validas:
  - "dd/mm/aaaa"
  - "dd/mm/yyyy"
  - "dd-mm-yyyy"
  - "dd-mm-aaaa"
pasos:
  - "Seleccionar la celda con la fecha."
  - "Presionar Ctrl+1 para abrir Formato de Celdas."
  - "Escribir el código en el campo Tipo."
explicacion: El código 'dd/mm/aaaa' o 'dd/mm/yyyy' fuerza a Excel a mostrar el día de dos dígitos, mes de dos dígitos y año de cuatro dígitos, independientemente de la configuración regional del sistema.
```

### 4 — Barra de Gantt en Excel
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["excel", "gráficos", "barras"]
respuesta: "Dispersión con barras"
tipo: completar
enunciado: ¿Qué tipo de gráfico en Excel se utiliza tradicionalmente para crear un Diagrama de Gantt personalizado combinando datos de fechas de inicio y duración?
respuestas_validas:
  - "Dispersión con barras"
  - "XY (Dispersión) con barras"
  - "Scatter with bars"
  - "Dispersión con líneas y marcadores"
pasos:
  - "Seleccionar los datos de inicio y duración."
  - "Insertar gráfico de dispersión."
  - "Modificar la serie de inicio para que no tenga marcadores y tenga relleno."
explicacion: El gráfico de Dispersión (XY) permite representar ejes numéricos (fechas convertidas a número serial). Al superponer una serie de barras (para la duración) sobre otra (para el inicio), se simula el Gantt.
```

### 5 — Hito (Milestone)
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "hitos", "duración"]
respuesta: "0"
tipo: completar
enunciado: En Microsoft Project, ¿qué valor de duración se debe asignar a una tarea para convertirla visualmente en un Hito (rombo) en el Diagrama de Gantt?
respuestas_validas:
  - "0"
  - "0 dias"
  - "0 días"
  - "cero"
pasos:
  - "Crear una nueva tarea."
  - "Ingresar la duración en la columna Duración."
  - "Observar el símbolo en la barra del Gantt."
explicacion: Una duración de 0 días indica que la tarea es un evento instantáneo, representado gráficamente como un rombo (milestone) en lugar de una barra continua.
```

### 6 — Calcular costos
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "costos", "recursos"]
respuesta: "Costo estandar"
tipo: completar
enunciado: En la lista de recursos de Microsoft Project, si el recurso es una persona y se cobra por hora de trabajo, ¿qué tipo de costo debe seleccionarse en la ficha 'Información del recurso'?
respuestas_validas:
  - "Costo estandar"
  - "Costo estándar"
  - "Standard Cost"
  - "Estándar"
pasos:
  - "Abrir la Vista Hoja de Recursos."
  - "Seleccionar el recurso de trabajo."
  - "Verificar la columna 'Costo estandar'."
explicacion: El 'Costo estándar' se utiliza para recursos de trabajo que se facturan por hora o por día. El 'Costo por uso' se usa para materiales o equipos que se cobran por uso/fija, no por tiempo.
```

### 7 — Nivelación de recursos
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "nivelación", "solapamiento"]
respuesta: "Solapar tareas"
tipo: vf
enunciado: La función 'Nivelar recursos' en Microsoft Project tiene como objetivo principal reducir el tiempo total del proyecto acortando las duraciones de las tareas críticas.
uno_de([
  "La función extiende la duración para eliminar sobresaturaciones.",
  "La función mueve tareas a fechas posteriores para equilibrar la carga."
])
pasos:
  - "Identificar recursos sobreasignados (rojos)."
  - "Aplicar nivelación."
  - "Verificar el nuevo cronograma."
explicacion: FALSO. La nivelación de recursos resuelve sobresaturaciones moviendo tareas o extendiendo la duración del proyecto. No acorta el tiempo; a menudo lo alarga para cumplir con la disponibilidad real.
```

### 8 — Enlace de tareas
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "enlaces", "teclado"]
respuesta: "Ctrl+F2"
tipo: completar
enunciado: En Microsoft Project, ¿cuál es la combinación de teclas predeterminada para abrir el cuadro de diálogo 'Información de la tarea' desde la vista Diagrama de Gantt?
respuestas_validas:
  - "Ctrl+F2"
  - "Control F2"
  - "Ctrl + F2"
pasos:
  - "Seleccionar una tarea en la barra de Gantt."
  - "Presionar la combinación de teclas."
  - "Verificar que se abre la ficha General."
explicacion: 'Ctrl+F2' abre directamente la ficha 'Información de la tarea' de la tarea seleccionada, permitiendo editar dependencias, recursos y restricciones rápidamente.
```

### 9 — Vista Hoja de Tareas
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "vistas", "estructura"]
respuesta: "WBS"
tipo: completar
enunciado: En la vista Hoja de Tareas de Microsoft Project, la columna que muestra la jerarquía numérica de la estructura de desglose del proyecto (ej. 1, 1.1, 1.1.1) se llama:
respuestas_validas:
  - "WBS"
  - "código wbs"
  - "código de estructura de desglose"
  - "estructura de desglose"
pasos:
  - "Cambiar a la vista Hoja de Tareas."
  - "Insertar la columna correspondiente desde 'Insertar' > 'Columna'."
  - "Seleccionar 'WBS'."
explicacion: La columna WBS (Work Breakdown Structure) representa el código de estructura de desglose, que define la jerarquía y agrupación lógica de las tareas del proyecto.
```

### 10 — Fecha de inicio forzada
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "restricciones", "debe empezar"]
respuesta: "Debe empezar en"
tipo: completar
enunciado: En Microsoft Project, si necesitas que una tarea comience obligatoriamente en una fecha específica, independientemente de sus predecesoras, ¿qué restricción debes aplicar en la ficha 'Avanzada'?
respuestas_validas:
  - "Debe empezar en"
  - "Must Start On"
  - "Debe comenzar en"
  - "Inicio fijo"
pasos:
  - "Ir a la ficha 'Avanzada' de la información de la tarea."
  - "Buscar el campo 'Restricción'."
  - "Seleccionar la opción de fecha obligatoria."
explicacion: La restricción 'Debe empezar en' (Must Start On) fuerza la fecha de inicio a un día específico, lo que puede romper la lógica de enlace si la predecesora no ha terminado a tiempo.
```

### 11 — Calcular cronograma
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "cálculo", "recalcular"]
respuesta: "F9"
tipo: completar
enunciado: En Microsoft Project, si has modificado manualmente fechas o duraciones y el diagrama no se actualiza automáticamente, ¿qué tecla se presiona para forzar el recálculo del cronograma?
respuestas_validas:
  - "F9"
  - "Función 9"
  - "Fn + F9"
pasos:
  - "Realizar cambios en las duraciones o fechas."
  - "Presionar la tecla de función."
  - "Verificar que las fechas finales se actualizan."
explicacion: La tecla 'F9' fuerza a Microsoft Project a recalcular todo el cronograma desde la fecha de inicio hasta la fecha de fin, aplicando las reglas de dependencia y duración.
```

### 12 — Ruta Crítica
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "ruta crítica", "holgura"]
respuesta: "Cero"
tipo: completar
enunciado: En un diagrama de Gantt, las tareas que pertenecen a la Ruta Crítica tienen una holgura (float) total de:
respuestas_validas:
  - "0"
  - "cero"
  - "0 días"
  - "zero"
pasos:
  - "Insertar la columna 'Holgura total'."
  - "Filtrar por tareas críticas."
  - "Verificar el valor numérico."
explicacion: La Ruta Crítica consiste en la secuencia de tareas con holgura total igual a cero. Cualquier retraso en estas tareas retrasa directamente la fecha de fin del proyecto.
```

### 13 — Formato de barra
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "formato", "apariencia"]
respuesta: "Formato"
tipo: completar
enunciado: En Microsoft Project, ¿en qué pestaña de la cinta de opciones se encuentra el grupo 'Formato de barra' para cambiar colores, formas o patrones de las barras en el Diagrama de Gantt?
respuestas_validas:
  - "Formato"
  - "Barra"
  - "Gantt"
  - "Appearance"
pasos:
  - "Seleccionar una barra en el Gantt."
  - "Buscar la pestaña contextual que aparece."
  - "Acceder a las opciones de estilo."
explicacion: Al seleccionar una barra de tarea o hito, aparece la pestaña contextual 'Formato' (o 'Barra'), que permite personalizar la apariencia visual de las barras para mejorar la lectura del cronograma.
```

### 14 — Fecha de fin
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "fecha fin", "cálculo"]
respuesta: "Fecha de fin"
tipo: completar
enunciado: En Microsoft Project, la columna que muestra el último día en que puede terminar una tarea sin retrasar la fecha final del proyecto se denomina:
respuestas_validas:
  - "Fecha de fin"
  - "Fin flexible"
  - "Latest Finish"
  - "Límite de fin"
pasos:
  - "Insertar columnas en la vista Hoja de Tareas."
  - "Seleccionar la columna de fechas tardías."
  - "Identificar la columna de fin máximo."
explicacion: La 'Fecha de fin' (Latest Finish) es la fecha más tardía posible para terminar una tarea sin afectar la fecha de fin del proyecto, calculada mediante el análisis de la ruta crítica hacia atrás.
```

### 15 — Recursos materiales
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "recursos", "materiales"]
respuesta: "Material"
tipo: completar
enunciado: En la lista de recursos de Microsoft Project, si asignas un recurso que se consume completamente (ej. cemento, litros de combustible) y no se mide por horas, ¿qué tipo de unidad de medida se suele usar?
respuestas_validas:
  - "Material"
  - "Unidades de material"
  - "Material Unit"
  - "Litros"
pasos:
  - "Crear un nuevo recurso."
  - "Seleccionar el tipo de recurso."
  - "Definir la unidad de medida."
explicacion: El tipo 'Material' se utiliza para recursos no laborales. La unidad de medida (como litros, toneladas, metros) define cómo se consume la cantidad asignada a la tarea.
```

### 16 — Vista Calendario
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "vistas", "calendario"]
respuesta: "Calendario"
tipo: completar
enunciado: ¿Qué vista de Microsoft Project muestra el cronograma en formato de cuadrícula mensual (similar a un calendario de pared) para visualizar mejor los fines de semana y días festivos?
respuestas_validas:
  - "Calendario"
  - "Vista Calendario"
  - "Calendar"
  - "Calendario Mensual"
pasos:
  - "Ir a la pestaña Vista."
  - "Seleccionar la vista de calendario."
  - "Navegar por los meses."
explicacion: La vista 'Calendario' permite ver las tareas distribuidas en un formato mensual, facilitando la identificación visual de solapamientos con fines de semana y días no laborables.
```

### 17 — Asignar recurso
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "asignación", "recursos"]
respuesta: "Asignar recursos"
tipo: completar
enunciado: En Microsoft Project, ¿cuál es el nombre del comando en la pestaña 'Recursos' utilizado para vincular trabajadores, materiales o costos a una tarea específica?
respuestas_validas:
  - "Asignar recursos"
  - "Asignar"
  - "Assign Resources"
  - "Asignar Recurso"
pasos:
  - "Seleccionar la tarea en la Hoja de Tareas."
  - "Ir a la pestaña Recursos."
  - "Hacer clic en el botón de asignación."
explicacion: El comando 'Asignar recursos' abre un cuadro de diálogo donde se seleccionan los recursos (personas, equipos, materiales) que trabajarán en la tarea seleccionada y la cantidad de unidades.
```

### 18 — Días laborables
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "calendario", "días festivos"]
respuesta: "Días festivos"
tipo: completar
enunciado: En Microsoft Project, para marcar un día específico (ej. Navidad) como no laborable para todo el proyecto, se debe editar el Calendario del Proyecto y agregar ese día a la sección de:
respuestas_validas:
  - "Días festivos"
  - "Excepciones de calendario"
  - "Días no laborables"
  - "Festivos"
pasos:
  - "Ir a 'Proyecto' > 'Cambiar calendario de trabajo'."
  - "Seleccionar el calendario del proyecto."
  - "Añadir la fecha a la sección de excepciones."
explicacion: Los 'Días festivos' (o excepciones de calendario) en el Calendario del Proyecto marcan días que no cuentan como tiempo de trabajo, evitando que el cronograma avance en esos días.
```

### 19 — Duración vs Trabajo
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "duración", "trabajo"]
respuesta: "Trabajo"
tipo: completar
enunciado: En Microsoft Project, la cantidad total de horas de esfuerzo requeridas para completar una tarea (ej. 2 personas x 5 días = 80 horas) se denomina:
respuestas_validas:
  - "Trabajo"
  - "Work"
  - "Esfuerzo"
  - "Horas de trabajo"
pasos:
  - "Asignar recursos a una tarea."
  - "Observar la columna de horas totales."
  - "Diferenciarla de la duración en días."
explicacion: El 'Trabajo' (Work) es la medida de esfuerzo (horas), mientras que la 'Duración' es el tiempo transcurrido (días). La relación depende de las unidades de los recursos asignados.
```

### 20 — Fecha de inicio tardía
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "cálculo", "holgura"]
respuesta: "Fecha de inicio tardía"
tipo: completar
enunciado: En Microsoft Project, la columna que indica el último día en que una tarea puede comenzar sin retrasar la fecha final del proyecto se llama:
respuestas_validas:
  - "Fecha de inicio tardía"
  - "Inicio flexible"
  - "Latest Start"
  - "LS"
pasos:
  - "Insertar la columna correspondiente."
  - "Verificar el cálculo basado en la ruta crítica."
  - "Comparar con la fecha de inicio temprana."
explicacion: La 'Fecha de inicio tardía' (Latest Start) es la fecha más tardía para comenzar una tarea sin afectar la fecha de fin del proyecto, calculada restando la duración a la 'Fecha de fin tardía'.
```

### 21 — Imprimir Gantt
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "impresión", "diseño de página"]
respuesta: "Diseño de página"
tipo: completar
enunciado: En Microsoft Project, ¿en qué vista se deben realizar ajustes de escala de tiempo, márgenes y orientación antes de imprimir el Diagrama de Gantt para asegurar que quepa en una hoja?
respuestas_validas:
  - "Diseño de página"
  - "Configurar página"
  - "Page Setup"
  - "Vista Diseño"
pasos:
  - "Ir a la pestaña 'Vista'."
  - "Seleccionar 'Diseño de página'."
  - "Ajustar la escala de tiempo."
explicacion: La vista 'Diseño de página' permite configurar cómo se imprimirá el Gantt, incluyendo la escala de tiempo (días, semanas, meses) y los márgenes, para optimizar la presentación impresa.
```

### 22 — Escala de tiempo
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "formato", "escala"]
respuesta: "Escala de tiempo"
tipo: completar
enunciado: En Microsoft Project, para cambiar la cabecera superior del Diagrama de Gantt de mostrar 'Semanas' a mostrar 'Meses', se debe modificar:
respuestas_validas:
  - "Escala de tiempo"
  - "Tiempo"
  - "Time Scale"
  - "Encabezado"
pasos:
  - "Hacer doble clic en la cabecera superior del Gantt."
  - "Seleccionar el nivel de tiempo deseado."
  - "Aplicar el cambio."
explicacion: La 'Escala de tiempo' define los intervalos (días, semanas, meses, años) mostrados en la parte superior del Gantt. Se puede personalizar por niveles para mayor detalle.
```

### 23 — Recurso sobreasignado
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "recursos", "alerta"]
respuesta: "Rojo"
tipo: completar
enunciado: En la vista Hoja de Recursos de Microsoft Project, ¿qué color indica visualmente que un recurso tiene más trabajo asignado que su capacidad disponible (sobreasignación)?
respuestas_validas:
  - "Rojo"
  - "Rojo oscuro"
  - "Red"
  - "Color de alerta"
pasos:
  - "Abrir la Vista Hoja de Recursos."
  - "Observar la columna de unidades o trabajo."
  - "Identificar el color de advertencia."
explicacion: Las celdas o recursos con sobreasignación se resaltan en color ROJO para alertar al gestor de que la carga de trabajo excede el máximo disponible del recurso.
```

### 24 — Fecha de fin del proyecto
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "fecha fin", "proyecto"]
respuesta: "Fecha de fin"
tipo: completar
enunciado: En Microsoft Project, la columna que muestra la fecha en que se prevé que terminará todo el proyecto (basada en la tarea sucesora final) se llama:
respuestas_validas:
  - "Fecha de fin"
  - "Fin del proyecto"
  - "Project Finish"
  - "Fecha límite"
pasos:
  - "Insertar columnas en la vista Hoja de Tareas."
  - "Seleccionar la columna de fecha de fin del proyecto."
  - "Verificar que coincide con la última tarea de la ruta crítica."
explicacion: La 'Fecha de fin' (Project Finish) es la fecha calculada para la finalización del proyecto, determinada por la tarea más tardía en la ruta crítica.
```

### 25 — Guardar como PDF
```yaml
metadata:
  materia: "ofimatica"
  tema: "cronogramas-y-diagrama-de-gantt"
  nivel: "intermedio"
  tags: ["ms-project", "exportar", "pdf"]
respuesta: "Guardar como"
tipo: completar
enunciado: En Microsoft Project, para exportar el Diagrama de Gantt actual a un archivo portátil que se pueda enviar por correo sin modificar el formato original, se debe usar la opción:
respuestas_validas:
  - "Guardar como"
  - "Exportar"
  - "Save As"
  - "Enviar como PDF"
pasos:
  - "Ir a la pestaña 'Archivo'."
  - "Seleccionar 'Guardar como'."
  - "Elegir el formato PDF."
explicacion: La opción 'Guardar como' permite exportar el archivo a diversos formatos, siendo PDF el estándar para compartir documentos gráficos e informes de Gantt preservando el diseño.
```