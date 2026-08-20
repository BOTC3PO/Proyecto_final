# Resolucion Problemas — Mejorar o iterar (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El concepto de iteración

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["definicion", "iteracion"]

respuesta: "iterar"
tipo: completar
respuestas_validas:
  - "iterar"
  - "iteración"

enunciado: "Cuando una solución inicial no es óptima y decidimos realizar un nuevo ciclo de evaluación y ajuste para acercarnos al objetivo, estamos realizando un proceso de ___."

explicacion: |
  La iteración es el acto de repetir un proceso de evaluación y ajuste para refinar una solución hasta que cumpla con los criterios de éxito.
```

### 2 — Evaluación de la solución

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["evaluacion", "feedback"]

respuesta: falso
tipo: vf

enunciado: "En el proceso de mejora continua, si una solución cumple con el objetivo mínimo pero presenta errores secundarios, se debe considerar que el problema ha sido resuelto definitivamente y no se requiere más análisis."

explicacion: |
  Falso. El concepto de iterar implica que, aunque se alcance un umbral, la evaluación de la calidad puede disparar un nuevo ciclo de mejora para optimizar el resultado.
```

### 3 — Componentes del ciclo de mejora

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["ciclo", "feedback"]

variables:
  idx: uno_de([0, 1])
  escenario: [["Analizar el error", "Ajustar la solución"], ["Implementar cambio", "Verificar resultado"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Analizar el error", "Ajustar la solución", "Implementar cambio", "Verificar resultado"]

enunciado: "Supongamos que estamos en la fase de {escenario[idx][0]}. El siguiente paso lógico dentro de un ciclo de iteración es ___."

explicacion: |
  El ciclo de mejora sigue una lógica de: Evaluar -> Analizar -> Ajustar -> Implementar -> Verificar. Después de analizar el error, el siguiente paso es el ajuste.
```

### 4 — El rol del feedback

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["feedback", "informacion"]

respuesta: "información de retroalimentación"
tipo: completar
respuestas_validas:
  - "información de retroalimentación"
  - "feedback"
  - "retroalimentación"

enunciado: "Para poder iterar con éxito, es indispensable contar con ___ que nos indique la brecha entre el estado actual de la solución y el estado deseado."

explicacion: |
  Sin feedback o retroalimentación (datos sobre el desempeño de la solución), es imposible saber qué aspectos deben ser ajustados en la siguiente iteración.
```

### 5 — El proceso de refinamiento

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["orden", "proceso"]

respuesta_orden: ["Evaluar", "Identificar brechas", "Proponer ajustes", "Implementar cambios"]
tipo: ordenar
opciones_explicitas: ["Evaluar", "Identificar brechas", "Proponer ajustes", "Implementar cambios"]

enunciado: "Ordena los pasos lógicos para realizar una iteración de mejora sobre una solución existente:"

pasos:
  - "Observar el resultado obtenido"
  - "Detectar qué falta para llegar al ideal"
  - "Decidir qué cambios hacer"
  - "Aplicar las modificaciones"

explicacion: |
  El proceso iterativo requiere primero la evaluación, luego el diagnóstico de la brecha, la planificación del ajuste y finalmente la ejecución del cambio.
```

### 6 — El ciclo de la mejora continua

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["metodologia", "iteracion"]

tipo: vf
respuesta: verdadero

enunciado: "Cuando una solución inicial no cumple con todos los criterios de éxito tras una evaluación, el proceso correcto es iterar la solución en lugar de descartarla por completo."

explicacion: |
  La iteración es el proceso de repetir un ciclo de mejora. Si la solución no es óptima, evaluamos los fallos y volvemos a empezar el proceso de ajuste, no significa que el trabajo esté perdido, sino que estamos en una fase de refinamiento.
```

### 7 — Evaluación de un prototipo

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["evaluacion", "ajuste"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El prototipo de una silla es estable pero muy incómoda.", "ajustar el acolchado"], ["La aplicación de gestión es rápida pero confusa para el usuario.", "simplificar la interfaz"]]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["cambiar de proyecto", "abandonar el diseño", "ajustar el acolchado", "simplificar la interfaz"]

enunciado: "Se evalúa un proyecto y se detecta el siguiente problema: {escenarios[escenario_idx][0]}. ¿Cuál es la acción de mejora más adecuada?"

pasos:
  - "Identificar la brecha entre el resultado actual y el objetivo."
  - "Seleccionar el componente específico que requiere ajuste."
  - "Aplicar la modificación y volver a evaluar."

explicacion: |
  La evaluación nos indica exactamente qué parte de la solución falló. En lugar de cambiar de proyecto, aplicamos un ajuste específico basado en el feedback recibido.
```

### 8 — Secuencia de la iteración

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

respuesta_orden: ["Diseñar", "Implementar", "Evaluar", "Ajustar"]
tipo: "ordenar"
opciones_explicitas: ["Diseñar", "Implementar", "Evaluar", "Ajustar"]

enunciado: "Ordena los pasos lógicos de un ciclo de mejora iterativa, comenzando desde la concepción de la idea hasta el refinamiento final."

explicacion: |
  Un ciclo iterativo no es lineal, sino circular. El paso de 'Ajustar' (basado en la evaluación) es lo que permite volver a 'Diseñar' una versión mejorada de la solución.
```

### 9 — El error de la solución terminada

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["mentalidad", "evaluacion"]

respuesta: falso
tipo: "vf"

enunciado: "Si una solución resuelve el problema principal pero presenta detalles secundarios que podrían optimizarse, la solución debe considerarse como 'terminada' y no debe ser objeto de más iteraciones."

explicacion: |
  Asumir que una solución está terminada solo porque cumple lo mínimo impide la optimización. La mejora continua sugiere que siempre es posible iterar para elevar la calidad o eficiencia.
```

### 10 — Análisis de brecha

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "avanzado"
  tags: ["analisis", "datos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Eficiencia actual: 60%, Objetivo: 90%", "30%"], ["Tiempo de respuesta: 10s, Objetivo: 2s", "8s"]]

respuesta: casos[caso_idx][1]

tipo: "completar"
respuestas_validas:
  - "30%"
  - "8s"

enunciado: "Para iterar con éxito, primero debemos cuantificar la brecha. En el caso planteado, la diferencia entre el estado actual y el objetivo es de ___."

pasos:
  - "Identificar el valor actual."
  - "Identificar el valor objetivo."
  - "Calcular la diferencia (Brecha)."

explicacion: |
  La iteración requiere metas claras. Si no sabemos cuánto nos falta para alcanzar el objetivo (la brecha), no podemos diseñar una acción de mejora que sea proporcional al problema.
```

### 11 — El error de la solución estática

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["metodologia", "evaluacion"]

respuesta: falso
tipo: vf

enunciado: "Si una solución cumple con los requisitos iniciales del problema, ¿es correcto asumir que el proceso de resolución ha finalizado sin necesidad de evaluar su eficiencia o aplicabilidad en contextos reales?"

explicacion: |
  Una solución puede ser funcional pero ineficiente o incompleta. La iteración permite optimizar la solución mediante la evaluación continua, asegurando que no solo sea correcta, sino también la mejor opción posible.
```

### 12 — El ciclo de mejora

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["ciclo_iterativo", "optimizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Diseño de un motor de búsqueda", "Se ha implementado, pero la velocidad de respuesta es lenta"], ["Construcción de un puente", "Se ha construido, pero el material es más costoso de lo previsto"]]

enunciado: "En el escenario de '{escenarios[escenario_idx][0]}', el problema detectado es: '{escenarios[escenario_idx][1]}'. ¿Cuál es la acción correcta según el proceso de mejora?"

opciones_explicitas: ["Aceptar la solución como definitiva", "Reiniciar el problema desde cero", "Iterar para ajustar la solución actual"]

respuesta: "Iterar para ajustar la solución actual"
tipo: mc

explicacion: |
  Detectar una deficiencia (como lentitud o costo) tras haber implementado una solución no implica necesariamente volver al inicio, sino iterar sobre la solución existente para optimizarla.
```

### 13 — Componentes de la iteración

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["pasos", "evaluacion"]

respuesta_orden: ["Evaluar", "Identificar", "Ajustar", "Implementar"]
tipo: ordenar

opciones_explicitas: ["Implementar", "Evaluar", "Ajustar", "Identificar"]

enunciado: "Para mejorar una solución que no ha alcanzado el rendimiento esperado, se debe seguir este orden lógico de pasos:"

explicacion: |
  El ciclo de mejora requiere primero implementar una idea, luego evaluar su desempeño, identificar la brecha entre el resultado y el objetivo, y finalmente ajustar la solución para iterar.
```

### 14 — La confusión del "Terminado"

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: "optimización"
tipo: completar

enunciado: "Cuando una solución ya resuelve el problema pero se busca mejorar su rendimiento, velocidad o costo, estamos pasando de la fase de resolución a la fase de ___________."

respuestas_validas:
  - "optimización"

explicacion: |
  La resolución busca la viabilidad (que funcione), mientras que la optimización (parte del proceso iterativo) busca la excelencia o eficiencia de dicha solución.
```

### 15 — Evaluación vs. Error

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "avanzado"
  tags: ["evaluacion", "iteracion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["La solución no cumple con el objetivo principal", "Falla de diseño"], ["La solución cumple el objetivo pero es muy costosa", "Falla de eficiencia"]]

enunciado: "Analizamos el siguiente caso: '{casos[caso_idx][0]}'. Esto se clasifica como una: '{casos[caso_idx][1]}'."

opciones_explicitas: ["Falla de diseño", "Falla de eficiencia"]

respuesta: "Falla de diseño"
tipo: mc

explicacion: |
  Es crucial distinguir si el problema es que la solución no funciona (diseño/lógica) o si simplemente no es la mejor versión posible (eficiencia). Ambos requieren iteración, pero el enfoque del ajuste es distinto.
```

### 16 — Iteración vs. Solución Final

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["iteracion", "mejora_continua"]

respuesta: "mejorar"
tipo: completar
respuestas_validas:
  - "mejorar"
  - "optimizar"

enunciado: "Cuando el proceso de resolución de un problema requiere ajustar la solución tras evaluar su desempeño, estamos en una fase de ________, en lugar de considerar la tarea como una solución final."

explicacion: |
  La iteración implica volver a pasar por ciclos de diseño y evaluación para perfeccionar el resultado. No es un error, es parte del proceso de mejora.
```

### 17 — El propósito de la evaluación

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["evaluacion", "iteracion"]

opciones_explicitas: ["Confirmar que la solución es perfecta", "Identificar brechas para realizar ajustes", "Finalizar el proyecto inmediatamente", "Cambiar el problema original"]
respuesta: "Identificar brechas para realizar ajustes"
tipo: mc

enunciado: "En un proceso iterativo, ¿cuál es la función principal de la fase de evaluación en contraste con una resolución lineal?"

explicacion: |
  En un modelo lineal, la evaluación busca validar el éxito. En un modelo iterativo, la evaluación busca detectar áreas de mejora para volver a iterar.
```

### 18 — Ciclo de mejora continua

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["ciclo", "iteracion"]

variables:
  etapas: [["Planificar", "Ejecutar", "Evaluar", "Ajustar"], ["Analizar", "Diseñar", "Probar", "Refinar"], ["Definir", "Idear", "Implementar", "Corregir"]]
  idx: uno_de([0, 1, 2])

opciones_explicitas: etapas[idx]
respuesta_orden: etapas[idx]
tipo: ordenar

enunciado: "Ordena correctamente las etapas de un ciclo de iteración para la mejora de una solución:"

explicacion: |
  El ciclo iterativo sigue una secuencia lógica de acción, verificación y ajuste para asegurar que la solución evolucione hacia la excelencia.
```

### 19 — Verdad o Falso: La iteración es redundancia

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["conceptos", "mitos"]

respuesta: falso
tipo: vf

enunciado: "Si una solución ya funciona, realizar una iteración adicional se considera un desperdicio de recursos (redundancia) y no parte de un proceso de optimización."

explicacion: |
  Falso. La iteración busca la optimización. Una solución que "funciona" puede ser mejorada para ser más eficiente, económica o robusta.
```

### 20 — Diferencia entre Corregir y Iterar

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "avanzado"
  tags: ["correccion", "optimizacion"]

variables:
  escenarios: [["Corregir un error crítico", "Optimizar el rendimiento"]]
  tipo_accion: ["reparar", "mejorar"]
  idx: uno_de([0, 1])

respuesta: tipo_accion[idx]
tipo: completar
respuestas_validas:
  - "reparar"
  - "mejorar"

enunciado: "Si el objetivo es eliminar un fallo que impide el funcionamiento, estamos en una fase de ________; si el objetivo es elevar la calidad de una solución que ya funciona, estamos en una fase de ________."

explicacion: |
  La corrección es reactiva (arreglar lo que está mal), mientras que la iteración para mejora es proactiva (elevar lo que ya está bien).
```

### 21 — El Ciclo de Mejora en un Algoritmo

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["iteracion", "evaluacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El algoritmo tarda 10s", "optimizar_tiempo"], ["El algoritmo usa 2GB de RAM", "optimizar_memoria"]]
  solucion: datos[escenario_idx][1]

respuesta: solucion
tipo: mc
opciones_explicitas: ["optimizar_memoria", "optimizar_tiempo", "finalizar_proyecto", "cambiar_lenguaje"]

enunciado: "Tras evaluar el desempeño, observamos que {datos[escenario_idx][0]}. ¿Cuál es la acción de iteración más adecuada?"

explicacion: |
  Cuando una solución cumple el objetivo pero presenta un cuello de botella específico, la iteración debe enfocarse en corregir ese punto particular en lugar de descartar todo el proceso.
```

### 22 — ¿Solución Terminada?

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["evaluacion", "criterios"]

respuesta: falso
tipo: vf

enunciado: "Si una solución resuelve el problema pero no cumple con los criterios de eficiencia o usabilidad definidos en la fase de evaluación, ¿se debe considerar la solución como terminada?"

explicacion: |
  No. Una solución que no cumple con todos los criterios de calidad debe entrar en un ciclo de iteración para ajustar los aspectos deficientes.
```

### 23 — Pasos para la Iteración Efectiva

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

opciones_explicitas: ["Evaluar resultados", "Implementar solución", "Definir problema", "Ajustar solución"]

respuesta_orden: ["Definir problema", "Implementar solución", "Evaluar resultados", "Ajustar solución"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para mejorar una solución que ha sido evaluada y requiere ajustes."

explicacion: |
  El proceso cíclico implica: 1. Definir, 2. Implementar, 3. Evaluar y, si hay brechas, 4. Ajustar (iterar).
```

### 24 — Identificación de la Brecha

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "avanzado"
  tags: ["analisis", "brecha"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Requerimiento: 5s | Real: 8s", "reducir_latencia"], ["Requerimiento: 100% uso | Real: 85% uso", "aumentar_rendimiento"]]
  objetivo: casos[caso_idx][1]

respuesta: objetivo
tipo: completar
respuestas_validas:
  - "reducir_latencia"
  - "aumentar_rendimiento"

enunciado: "Al comparar el desempeño real con el esperado en el caso '{casos[caso_idx][0]}', la acción de iteración necesaria es: ___"

explicacion: |
  La iteración se basa en la brecha (gap) detectada entre el estado actual y el estado deseado.
```

### 25 — Evaluación de la Calidad

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["feedback", "iteracion"]

respuesta: 1
tipo: mc
opciones_explicitas: [0, 1]

enunciado: "Si tras una iteración el error de la solución disminuye de 0.5 a 0.1, ¿se ha cumplido el objetivo de la fase de mejora? (1 para sí, 0 para no)"

explicacion: |
  Una reducción en la magnitud del error indica que la iteración fue efectiva y se acerca al estándar de calidad deseado.
```
