### 1 — El objetivo de la observación
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["usabilidad", "observacion"]

respuesta: "identificar problemas de usabilidad"
tipo: completar
respuestas_validas: ["identificar problemas de usabilidad", "validar la estética del producto", "medir la velocidad de internet"]

enunciado: "El objetivo principal de realizar pruebas de usuario mediante la observación directa es ___."

explicacion: |
  La observación permite ver cómo interactúa el usuario real con el diseño, permitiendo detectar fricciones, errores de navegación y confusiones que el diseñador no pudo prever.
```

### 2 — Escenario de navegación en App de Delivery
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["metodologia", "usabilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El usuario intenta aplicar un cupón de descuento pero no encuentra el campo de texto.", "No encuentra el campo de texto"],
    ["El usuario intenta finalizar la compra pero el botón de 'Pagar' está oculto tras el teclado.", "El botón está oculto"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["No encuentra el campo de texto", "El botón está oculto", "El color de la fuente es muy claro", "La aplicación se cierra sola"]

enunciado: "Durante una prueba de usuario en una app de delivery, se observa el siguiente problema: {escenarios[escenario_idx][0]}"

explicacion: |
  En el escenario observado, el problema detectado es: {escenarios[escenario_idx][1]}. Esto es un error de usabilidad que debe corregirse en el diseño de la interfaz.
```

### 3 — Veracidad de la observación pasiva
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["metodologia", "teoria"]

respuesta: falso
tipo: vf

enunciado: "En una prueba de usuario de observación pura, el moderador debe intervenir y corregir al usuario cada vez que este cometa un error para no perder tiempo."

explicacion: |
  Falso. Si el moderador interviene, altera el comportamiento natural del usuario y no obtiene datos reales sobre la usabilidad del diseño original. Se debe observar el error para entender la causa.
```

### 4 — Pasos para ejecutar una prueba de usuario
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

respuesta: ["Definir objetivos", "Reclutar usuarios", "Ejecutar la prueba", "Analizar resultados"]
tipo: ordenar
opciones_explicitas: ["Definir objetivos", "Reclutar usuarios", "Ejecutar la prueba", "Analizar resultados"]

enunciado: "Ordena cronológicamente las etapas necesarias para llevar a cabo un proceso de pruebas de usuario efectivo:"

explicacion: |
  Primero se definen qué queremos aprender (objetivos), luego se busca a las personas adecuadas (reclutar), se realiza la interacción (ejecutar) y finalmente se procesa la información (analizar).
```

### 5 — Cálculo de tasa de éxito
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "avanzado"
  tags: ["metricas", "analisis"]

variables:
  total_usuarios: 10
  tareas_completadas: 7

respuesta: 0.7
tipo: input
tolerancia_abs: 0.01

enunciado: "Si durante una prueba de usabilidad con {total_usuarios} usuarios, se observa que solo {tareas_completadas} logran completar la tarea principal sin ayuda, ¿cuál es la tasa de éxito (en formato decimal)?"

pasos:
  - "Identificar el número de usuarios que completaron la tarea con éxito: {tareas_completadas}"
  - "Dividir el éxito entre el total de usuarios: {tareas_completadas} / {total_usuarios}"

explicacion: |
  La tasa de éxito se calcula como: (Tareas completadas con éxito) / (Total de intentos) = {tareas_completadas} / {total_usuarios} = 0.7.
```