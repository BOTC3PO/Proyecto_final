### 1 — Diferencia clave: Observación vs. Encuesta
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["metodologia", "usabilidad"]

respuesta: "observar el comportamiento real"
tipo: completar
respuestas_validas: ["observar el comportamiento real", "ver cómo interactúan"]

enunciado: "A diferencia de una encuesta, donde el usuario reporta lo que cree que hizo, una prueba de usuario se basa en ___."

explicacion: |
  Las encuestas dependen de la memoria y la percepción subjetiva del usuario, mientras que la observación directa permite detectar problemas de usabilidad que el usuario no es capaz de verbalizar.
```

### 2 — Objetivo principal de la prueba
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["objetivo", "usabilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["validar si el flujo de compra es intuitivo", "detectar fricciones en la navegación"],
    ["confirmar si el color es agradable", "identificar errores en la arquitectura de información"]
  ]

respuesta: uno_de(escenarios[escenario_idx])
tipo: mc
opciones_explicitas: ["validar estética visual", "confirmar si el flujo de compra es intuitivo", "medir la velocidad de carga", "evaluar la preferencia de marca"]

enunciado: "En un contexto de pruebas de usabilidad con usuarios reales, el objetivo principal es {escenarios[escenario_idx]}."

explicacion: |
  Las pruebas de usuario buscan identificar problemas de interacción y flujo, no cuestiones puramente estéticas o de rendimiento técnico.
```

### 3 — Verdad o Falso: Sesgo del observador
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

### 4 — Fases de una prueba de usuario
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

respuesta: ["preparación de tareas", "ejecución de la prueba", "análisis de resultados"]
tipo: ordenar
opciones_explicitas: ["preparación de tareas", "ejecución de la prueba", "análisis de resultados"]

enunciado: "Ordene cronológicamente las etapas de un ciclo de prueba de usuario:"

explicacion: |
  Primero se definen los escenarios y tareas, luego se observa al usuario interactuando, y finalmente se procesan los datos para encontrar patrones de error.
```

### 5 — Test de guerrilla vs. Test de laboratorio
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "avanzado"
  tags: ["contexto", "metodologia"]

variables:
  tipo_test_idx: uno_de([0, 1])
  test_datos: [
    ["el test de guerrilla se realiza en entornos naturales de forma rápida", "el test de laboratorio ofrece un entorno controlado y detallado"],
    ["el test de guerrilla requiere un setup complejo", "el test de laboratorio es ideal para capturar micro-interacciones"]
  ]

respuesta: uno_de(test_datos[tipo_test_idx])
tipo: mc
opciones_explicitas: ["El test de guerrilla es más controlado que el de laboratorio", "El test de guerrilla se realiza en entornos naturales de forma rápida", "El test de laboratorio es siempre más barato", "No hay diferencia entre ambos"]

enunciado: "Considerando la diferencia de contexto, {test_datos[tipo_test_idx]}."

explicacion: |
  El test de guerrilla busca rapidez y realismo en el entorno del usuario, mientras que el laboratorio busca control para aislar variables específicas.
```