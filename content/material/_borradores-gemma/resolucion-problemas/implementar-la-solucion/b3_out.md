### 1 — El salto del diseño a la implementación
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["planificacion", "errores"]

respuesta: falso
tipo: vf

enunciado: "Es recomendable pasar directamente de la fase de diseño de la solución a la implementación técnica sin realizar una validación previa de la lógica del plan."

explicacion: |
  Saltar la validación del diseño aumenta el riesgo de implementar una solución que es técnicamente correcta pero que no resuelve el problema original.
```

### 2 — La trampa de la implementación prematura
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["errores", "gestion"]

variables:
  escenario: uno_de([
    ["un desarrollador escribe código sin haber definido los requisitos", "falta de definición"],
    ["un equipo construye una herramienta antes de probar el prototipo", "falta de prototipado"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["falta de definición", "falta de prototipado", "exceso de documentación", "falta de recursos"]

enunciado: "Si un equipo comienza la construcción de una herramienta compleja sin haber validado la funcionalidad mediante un modelo simplificado, ¿qué error de implementación está cometiendo?"

explicacion: |
  La implementación prematura sin prototipado suele derivar en un alto costo de corrección de errores estructurales.
```

### 3 — El proceso de implementación correcto
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

respuesta: ["Definir recursos", "Ejecutar la solución", "Monitorear resultados", "Evaluar efectividad"]
tipo: ordenar

opciones_explicitas: ["Definir recursos", "Ejecutar la solución", "Monitorear resultados", "Evaluar efectividad", "Analizar el problema", "Elegir la solución"]

enunciado: "Ordene las etapas lógicas de la fase de implementación, desde la preparación hasta la evaluación final."

explicacion: |
  La implementación no termina con la ejecución; requiere un monitoreo constante y una evaluación para asegurar que el objetivo se cumplió.
```

### 4 — El error de la solución incompleta
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "avanzado"
  tags: ["calidad", "errores"]

variables:
  caso: uno_de([
    ["El sistema funciona para el caso ideal pero falla con datos atípicos", "error de robustez"],
    ["La solución resuelve el problema pero es demasiado costosa para el presupuesto", "error de viabilidad"]
  ])

respuesta: caso[0]
tipo: completar
respuestas_validas: ["error de robustez", "error de viabilidad"]

enunciado: "En un escenario donde ___ se presenta, la implementación ha fallado en cubrir la totalidad de los casos de uso previstos."

explicacion: |
  Una implementación exitosa debe ser robusta, es decir, capaz de manejar variaciones y casos borde, no solo el camino feliz.
```

### 5 — Documentación en la implementación
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["documentacion", "mantenimiento"]

respuesta: "Documentación técnica"
tipo: completar
respuestas_validas: ["Documentación técnica", "Manual de usuario", "Código fuente"]

enunciado: "Para asegurar que la solución implementada pueda ser mantenida o replicada en el futuro, es indispensable generar la ___."

explicacion: |
  Sin documentación, la implementación queda aislada y se vuelve extremadamente difícil de escalar o reparar por otros miembros del equipo.
```