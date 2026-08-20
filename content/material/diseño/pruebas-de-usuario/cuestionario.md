# Diseño — Pruebas de usuario (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de prueba de usuario

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["usabilidad", "investigacion"]

respuesta: "observar"
tipo: "completar"
respuestas_validas:
  - "observar"

enunciado: "En una prueba de usabilidad, el objetivo principal es ___ a usuarios reales mientras interactúan con un diseño para identificar problemas de uso."

explicacion: |
  La observación directa permite capturar comportamientos, frustraciones y flujos de trabajo que el usuario no siempre puede verbalizar en una encuesta.
```

### 2 — El rol del moderador

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["roles", "metodologia"]

opciones_explicitas: ["Interferir en cada paso del usuario", "Guiar la sesión sin sesgar las respuestas", "Corregir al usuario cuando comete un error", "Evaluar la estética del diseño"]
respuesta: "Guiar la sesión sin sesgar las respuestas"
tipo: "mc"

enunciado: "Durante una prueba de usuario, ¿cuál es la función principal del moderador?"

explicacion: |
  El moderador debe guiar la sesión y asegurar que se completen las tareas, pero nunca debe dar pistas o corregir al usuario, ya que esto invalidaría los resultados de usabilidad.
```

### 3 — Verdadero o Falso: Sesgo de observación

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["sesgo", "metodologia"]

respuesta: falso
tipo: "vf"

enunciado: "Es verdadero que el investigador debe intervenir inmediatamente cuando el usuario se siente confundido para asegurar que la prueba sea eficiente."

explicacion: |
  Es falso. Si el investigador interviene para ayudar, no está midiendo la usabilidad real del diseño, sino la capacidad del investigador para resolver dudas.
```

### 4 — Fases de una prueba de usuario

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["proceso", "metodologia"]

opciones_explicitas: ["Preparación", "Ejecución", "Análisis"]
respuesta_orden: ["Preparación", "Ejecución", "Análisis"]
tipo: "ordenar"

enunciado: "Ordena las fases cronológicas de un proceso de prueba de usuario:"

explicacion: |
  Primero se debe definir el escenario y las tareas (Preparación), luego se realiza la sesión con el usuario (Ejecución) y finalmente se procesan los datos hallados (Análisis).
```

### 5 — Identificación de problemas

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["usabilidad", "hallazgos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El usuario no encuentra el botón de 'Finalizar compra' tras 30 segundos.", "problema"], ["El usuario completa la tarea rápidamente sin dudas.", "exito"]]

respuesta: datos[escenario_idx][1]
tipo: "mc"

opciones_explicitas: ["problema", "exito"]

enunciado: "Si en la prueba se observa que {datos[escenario_idx][0]}, estamos ante un: ___"

explicacion: |
  Detectar un 'problema' de usabilidad es el objetivo de la prueba: identificar fricciones para poder iterar el diseño y resolverlas en la siguiente versión.
```

### 6 — El objetivo de la observación

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["usabilidad", "observacion"]

respuesta: "identificar problemas de usabilidad"
tipo: completar
respuestas_validas:
  - "identificar problemas de usabilidad"
  - "validar la estética del producto"
  - "medir la velocidad de internet"

enunciado: "El objetivo principal de realizar pruebas de usuario mediante la observación directa es ___."

explicacion: |
  La observación permite ver cómo interactúa el usuario real con el diseño, permitiendo detectar fricciones, errores de navegación y confusiones que el diseñador no pudo prever.
```

### 7 — Escenario de navegación en App de Delivery

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["metodologia", "usabilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El usuario intenta aplicar un cupón de descuento pero no encuentra el campo de texto.", "No encuentra el campo de texto"], ["El usuario intenta finalizar la compra pero el botón de 'Pagar' está oculto tras el teclado.", "El botón está oculto"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["No encuentra el campo de texto", "El botón está oculto", "El color de la fuente es muy claro", "La aplicación se cierra sola"]

enunciado: "Durante una prueba de usuario en una app de delivery, se observa el siguiente problema: {escenarios[escenario_idx][0]}"

explicacion: |
  En el escenario observado, el problema detectado es: {escenarios[escenario_idx][1]}. Esto es un error de usabilidad que debe corregirse en el diseño de la interfaz.
```

### 8 — Veracidad de la observación pasiva

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

### 9 — Pasos para ejecutar una prueba de usuario

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

respuesta_orden: ["Definir objetivos", "Reclutar usuarios", "Ejecutar la prueba", "Analizar resultados"]
tipo: ordenar
opciones_explicitas: ["Definir objetivos", "Reclutar usuarios", "Ejecutar la prueba", "Analizar resultados"]

enunciado: "Ordena cronológicamente las etapas necesarias para llevar a cabo un proceso de pruebas de usuario efectivo:"

explicacion: |
  Primero se definen qué queremos aprender (objetivos), luego se busca a las personas adecuadas (reclutar), se realiza la interacción (ejecutar) y finalmente se procesa la información (analizar).
```

### 10 — Cálculo de tasa de éxito

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
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si durante una prueba de usabilidad con {total_usuarios} usuarios, se observa que solo {tareas_completadas} logran completar la tarea principal sin ayuda, ¿cuál es la tasa de éxito (en formato decimal)?"

pasos:
  - "Identificar el número de usuarios que completaron la tarea con éxito: {tareas_completadas}"
  - "Dividir el éxito entre el total de usuarios: {tareas_completadas} / {total_usuarios}"

explicacion: |
  La tasa de éxito se calcula como: (Tareas completadas con éxito) / (Total de intentos) = {tareas_completadas} / {total_usuarios} = 0.7.
```

### 11 — El objetivo de la observación

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["usabilidad", "metodologia"]

respuesta: "detectar problemas de usabilidad"
tipo: completar
respuestas_validas:
  - "detectar problemas de usabilidad"
  - "mejorar la estética"
  - "validar la identidad visual"

enunciado: "El propósito principal de observar a usuarios reales interactuando con un diseño es ___."

explicacion: |
  La observación en pruebas de usabilidad busca identificar fricciones, errores o confusiones que el usuario experimenta, permitiendo iterar el diseño para resolver problemas reales de uso.
```

### 12 — Sesgo del observador

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["sesgo", "metodologia"]

variables:
  es_sesgado: verdadero

respuesta: es_sesgado
tipo: completar
enunciado: "Si el facilitador de la prueba comienza a dar pistas o sugerencias sobre cómo usar la interfaz para que el usuario no se frustre, ¿está induciendo un sesgo en la prueba?"

explicacion: |
  Verdadero. Al intervenir o dar pistas, se altera el comportamiento natural del usuario, invalidando la observación de cómo interactuaría realmente con el sistema sin ayuda.
```

### 13 — El rol del facilitador

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["roles", "metodologia"]

tipo: mc
opciones_explicitas: ["El facilitador interrumpe constantemente al usuario para explicar funciones.", "El facilitador observa en silencio, tomando notas de las acciones del usuario.", "El facilitador corrige al usuario cuando comete un error."]

respuesta: "El facilitador observa en silencio, tomando notas de las acciones del usuario."

enunciado: "En una prueba de usabilidad observacional, ¿cuál es la actitud más adecuada del facilitador?"

explicacion: |
  El facilitador debe ser un observador pasivo. Interrumpir o corregir el comportamiento del usuario impide ver los problemas de diseño que el usuario está intentando resolver por su cuenta.
```

### 14 — Preparación de la prueba

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["planificacion", "metodologia"]

respuesta_orden: ["Definir objetivos", "Reclutar usuarios", "Preparar el escenario/tareas", "Ejecutar la prueba", "Analizar resultados"]
tipo: ordenar

opciones_explicitas: ["Definir objetivos", "Reclutar usuarios", "Preparar el escenario/tareas", "Ejecutar la prueba", "Analizar resultados"]

enunciado: "Ordena cronológicamente las etapas de un proceso de pruebas de usuario:"

explicacion: |
  No se puede reclutar sin saber qué se quiere medir (objetivos), ni ejecutar sin tener las tareas preparadas. El análisis es siempre la etapa final tras la recolección de datos.
```

### 15 — Errores de interpretación

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "avanzado"
  tags: ["analisis", "errores"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["El usuario dice 'Me gusta este color', pero tarda 10 segundos en encontrar el botón de compra.", "error_interpretacion"], ["El usuario logra completar la tarea rápidamente y sin dudas.", "uso_exitoso"]]

respuesta: casos[caso_idx][0]
tipo: mc
opciones_explicitas: ["El usuario dice 'Me gusta este color', pero tarda 10 segundos en encontrar el botón de compra.", "El usuario logra completar la tarea rápidamente y sin dudas.", "El usuario pide ayuda constantemente al facilitador."]

enunciado: "Identifica cuál de estos comportamientos es un ejemplo de un error de interpretación común (confundir la opinión verbal con la usabilidad real): {casos[caso_idx][0]}"

explicacion: |
  Un error común es confiar en lo que el usuario *dice* ("me gusta", "es fácil") en lugar de observar lo que el usuario *hace* (tiempo de ejecución, errores de clic, frustración gestual). La acción suele ser más honesta que la palabra.
```

### 16 — Diferencia clave: Observación vs. Encuesta

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["metodologia", "usabilidad"]

respuesta: "observar el comportamiento real"
tipo: completar
respuestas_validas:
  - "observar el comportamiento real"
  - "ver cómo interactúan"

enunciado: "A diferencia de una encuesta, donde el usuario reporta lo que cree que hizo, una prueba de usuario se basa en ___."

explicacion: |
  Las encuestas dependen de la memoria y la percepción subjetiva del usuario, mientras que la observación directa permite detectar problemas de usabilidad que el usuario no es capaz de verbalizar.
```

### 17 — Objetivo principal de la prueba

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["objetivo", "usabilidad"]

tipo: mc
opciones_explicitas: ["validar estética visual", "confirmar si el flujo de compra es intuitivo", "medir la velocidad de carga", "evaluar la preferencia de marca"]

respuesta: "confirmar si el flujo de compra es intuitivo"

enunciado: "En un contexto de pruebas de usabilidad con usuarios reales, ¿cuál es el objetivo principal?"

explicacion: |
  Las pruebas de usuario buscan identificar problemas de interacción y flujo, no cuestiones puramente estéticas o de rendimiento técnico.
```

### 18 — Verdad o Falso: Sesgo del observador

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["sesgo", "metodologia"]

respuesta: falso

tipo: vf

enunciado: "¿Es correcto afirmar que, en una prueba de usuario, el facilitador debe guiar activamente al usuario para que complete la tarea sin errores para asegurar el éxito del diseño?"

explicacion: |
  Falso. Si el facilitador guía demasiado, se induce el error y se pierde la oportunidad de detectar problemas de usabilidad. El usuario debe intentar realizar la tarea de forma natural.
```

### 19 — Fases de una prueba de usuario

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

respuesta_orden: ["preparación de tareas", "ejecución de la prueba", "análisis de resultados"]
tipo: ordenar
opciones_explicitas: ["preparación de tareas", "ejecución de la prueba", "análisis de resultados"]

enunciado: "Ordene cronológicamente las etapas de un ciclo de prueba de usuario:"

explicacion: |
  Primero se definen los escenarios y tareas, luego se observa al usuario interactuando, y finalmente se procesan los datos para encontrar patrones de error.
```

### 20 — Test de guerrilla vs. Test de laboratorio

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "avanzado"
  tags: ["contexto", "metodologia"]

tipo: mc
opciones_explicitas: ["El test de guerrilla es más controlado que el de laboratorio", "El test de guerrilla se realiza en entornos naturales de forma rápida", "El test de laboratorio es siempre más barato", "No hay diferencia entre ambos"]

respuesta: "El test de guerrilla se realiza en entornos naturales de forma rápida"

enunciado: "Considerando la diferencia de contexto entre el test de guerrilla y el test de laboratorio, ¿cuál de las siguientes afirmaciones es correcta?"

explicacion: |
  El test de guerrilla busca rapidez y realismo en el entorno del usuario, mientras que el laboratorio busca control para aislar variables específicas.
```

### 21 — Observación de flujo de compra

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["usabilidad", "observacion"]

variables:
  escenario: uno_de([["El usuario intenta comprar un libro pero el botón 'Pagar' está oculto tras el teclado en móviles.", "error_boton_oculto"], ["El usuario busca el carrito de compras pero el icono es una estrella en lugar de un carrito.", "error_iconografia"], ["El usuario intenta aplicar un cupón pero el campo de texto no permite escribir números.", "error_input_restriccion"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["error_boton_oculto", "error_iconografia", "error_input_restriccion"]

enunciado: "Durante una prueba de usabilidad, se observa que {escenario[0]}. ¿Qué tipo de problema de usabilidad se ha detectado?"

explicacion: |
  La observación directa permite identificar fallos de diseño que el usuario experimenta en tiempo real, como problemas de visibilidad, de lenguaje visual o de restricciones de entrada.
```

### 22 — Veracidad de la observación

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["metodologia", "verdad"]

respuesta: verdadero
tipo: vf

enunciado: "En una prueba de usuario de observación, el investigador debe intervenir y corregir al usuario inmediatamente cuando este comete un error para no frustrarlo."

explicacion: |
  Falso. El objetivo de la observación es ver cómo el usuario interactúa con el diseño de forma natural. Intervenir altera el comportamiento natural y el resultado de la prueba.
```

### 23 — Identificación de problemas

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["analisis", "completar"]

variables:
  caso: uno_de([["El usuario no encuentra el botón de 'Cerrar sesión' en el menú principal.", "navegacion"], ["El usuario no entiende qué significa el icono de un engranaje en la barra lateral.", "significado"], ["El usuario hace clic en un elemento que no es un botón porque parece uno.", "affordance"]])

respuesta: caso[1]
tipo: completar
respuestas_validas:
  - "navegacion"
  - "significado"
  - "affordance"

enunciado: "Al observar que {caso[0]}, el problema detectado se clasifica como: ___."

explicacion: |
  Cada error observado permite categorizar el problema (navegación, semántica/significado o affordance) para priorizar las mejoras en el diseño.
```

### 24 — Pasos de una prueba de usuario

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "avanzado"
  tags: ["metodologia", "proceso"]

respuesta_orden: ["Definir objetivos", "Reclutar participantes", "Ejecutar la sesión", "Analizar resultados"]
tipo: ordenar

opciones_explicitas: ["Definir objetivos", "Reclutar participantes", "Ejecutar la sesión", "Analizar resultados"]

enunciado: "Ordena cronológicamente las etapas de un proceso de pruebas de usuario:"

explicacion: |
  Primero se define qué se quiere medir, luego se busca al usuario ideal, se realiza la prueba y finalmente se extraen conclusiones de lo observado.
```

### 25 — El rol del observador

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["etica", "rol"]

tipo: mc
opciones_explicitas: ["neutral", "guia"]

respuesta: "neutral"

enunciado: "En una prueba de usuario de observación, el rol principal del investigador debe ser: ___."

explicacion: |
  El investigador debe mantener la neutralidad para evitar el sesgo de confirmación y permitir que el usuario actúe de forma espontánea.
```
