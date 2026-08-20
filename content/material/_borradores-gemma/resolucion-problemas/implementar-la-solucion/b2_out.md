### 1 — El paso crítico de la implementación
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

enunciado: "Una vez que se ha diseñado una solución teórica para un problema de logística, el siguiente paso fundamental para llevarla a la práctica es la ___."

pasos:
  - "Comparar el diseño con los recursos disponibles"
  - "Ejecutar la solución en el entorno real"

respuestas_validas: ["ejecución", "implementación"]
tipo: completar

explicacion: |
  La implementación es la fase donde la solución diseñada se pone en marcha para transformar la situación actual en la situación deseada.
```

### 2 — Recursos para la implementación
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["recursos", "planificacion"]

variables:
  caso_idx: uno_de([0, 1])
  escenario: uno_de([["software", "desarrollo de código"], ["manual", "guía de procedimientos"]])

enunciado: "En un proyecto de optimización de tiempos, si la solución elegida es de tipo {escenario[caso_idx]}, el recurso principal necesario es el ___."

respuestas_validas: ["programador", "escritor de procesos"]
tipo: completar

explicacion: |
  Cada tipo de solución requiere un perfil de ejecutor distinto: talento técnico para software o documentación para procesos manuales.
```

### 3 — Verificación de la solución
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["evaluacion", "control"]

enunciado: "Durante la implementación de un nuevo protocolo de seguridad en una fábrica, se observa que el tiempo de respuesta es mayor al previsto en el diseño. ¿Cuál es la acción correcta según la metodología de resolución de problemas?"

opciones_explicitas: ["Ignorar la desviación si la solución funciona", "Ajustar la solución al entorno real", "Volver al paso de identificación del problema", "Descartar la solución por completo"]
tipo: mc

explicacion: |
  La implementación no es un proceso estático; requiere ajustes iterativos basados en la retroalimentación del entorno real.
```

### 4 — Secuencia de implementación
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "avanzado"
  tags: ["secuencia", "logica"]

enunciado: "Ordene los pasos lógicos para implementar una nueva política de reciclaje en una empresa:"

opciones_explicitas: ["Comunicar la nueva política a los empleados", "Instalar los contenedores de reciclaje", "Capacitar al personal sobre la separación de residuos", "Monitorear la efectividad del sistema"]
tipo: ordenar

respuesta: ["Comunicar la nueva política a los empleados", "Instalar los contenedores de reciclaje", "Capacitar al personal sobre la separación de residuos", "Monitorear la efectividad del sistema"]

explicacion: |
  Primero se informa (comunicación), luego se provee la infraestructura (instalación), se enseña a usarla (capacitación) y finalmente se controla (monitoreo).
```

### 5 — Factibilidad de la solución
```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["viabilidad", "logica"]

enunciado: "Si una solución propuesta requiere un presupuesto de $10.000 pero la empresa solo dispone de $5.000, ¿es la implementación de esa solución viable en este momento?"

opciones_explicitas: [falso, verdadero]
tipo: mc

explicacion: |
  La viabilidad económica es un factor crítico; si los recursos son insuficientes, la implementación no puede llevarse a cabo según el plan original.
```