### 1 — El objetivo de la observación
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["usabilidad", "metodologia"]

respuesta: "detectar problemas de usabilidad"
tipo: completar
respuestas_validas: ["detectar problemas de usabilidad", "mejorar la estética", "validar la identidad visual"]

enunciado: "El propósito principal de observar a usuarios reales interactuando con un diseño es ___."

explicacion: |
  La observación en pruebas de usabilidad busca identificar fricciones, errores o confusiones que el usuario experimenta, permitiendo iterar el diseño para resolver problemas reales de uso.
```

### 2 — Sesgo del observador
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["sesgo", "metodologia"]

variables:
  es_sesgado: verdadero

respuesta: es_sesgado
tipo: vf

enunciado: "Si el facilitador de la prueba comienza a dar pistas o sugerencias sobre cómo usar la interfaz para que el usuario no se frustre, ¿está induciendo un sesgo en la prueba?"

explicacion: |
  Verdadero. Al intervenir o dar pistas, se altera el comportamiento natural del usuario, invalidando la observación de cómo interactuaría realmente con el sistema sin ayuda.
```

### 3 — El rol del facilitador
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["roles", "metodologia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El facilitador interrumpe constantemente al usuario para explicar funciones.", "incorrecto"],
    ["El facilitador observa en silencio, tomando notas de las acciones del usuario.", "correcto"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["El facilitador interrumpe constantemente al usuario para explicar funciones.", "El facilitador observa en silencio, tomando notas de las acciones del usuario.", "El facilitador corrige al usuario cuando comete un error."]

enunciado: "En una prueba de usabilidad observacional, la actitud más adecuada del facilitador es: {escenarios[escenario_idx][0]}"

explicacion: |
  El facilitador debe ser un observador pasivo. Interrumpir o corregir el comportamiento del usuario impide ver los problemas de diseño que el usuario está intentando resolver por su cuenta.
```

### 4 — Preparación de la prueba
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["planificacion", "metodologia"]

respuesta: ["Definir objetivos", "Reclutar usuarios", "Preparar el escenario/tareas", "Ejecutar la prueba", "Analizar resultados"]
tipo: ordenar

opciones_explicitas: ["Definir objetivos", "Reclutar usuarios", "Preparar el escenario/tareas", "Ejecutar la prueba", "Analizar resultados"]

enunciado: "Ordena cronológicamente las etapas de un proceso de pruebas de usuario:"

explicacion: |
  No se puede reclutar sin saber qué se quiere medir (objetivos), ni ejecutar sin tener las tareas preparadas. El análisis es siempre la etapa final tras la recolección de datos.
```

### 5 — Errores de interpretación
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "avanzado"
  tags: ["analisis", "errores"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["El usuario dice 'Me gusta este color', pero tarda 10 segundos en encontrar el botón de compra.", "error_interpretacion"],
    ["El usuario logra completar la tarea rápidamente y sin dudas.", "uso_exitoso"]
  ]

respuesta: casos[caso_idx][0]
tipo: mc
opciones_explicitas: ["El usuario dice 'Me gusta este color', pero tarda 10 segundos en encontrar el botón de compra.", "El usuario logra completar la tarea rápidamente y sin dudas.", "El usuario pide ayuda constantemente al facilitador."]

enunciado: "Identifica cuál de estos comportamientos es un ejemplo de un error de interpretación común (confundir la opinión verbal con la usabilidad real): {casos[caso_idx][0]}"

explicacion: |
  Un error común es confiar en lo que el usuario *dice* ("me gusta", "es fácil") en lugar de observar lo que el usuario *hace* (tiempo de ejecución, errores de clic, frustración gestual). La acción suele ser más honesta que la palabra.
```