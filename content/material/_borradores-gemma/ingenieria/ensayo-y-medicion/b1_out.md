### 1 — Concepto de Ensayo
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["definicion", "prototipo"]

respuesta: "ensayo"
tipo: completar
respuestas_validas: ["ensayo", "ensayo de desempeño"]

enunciado: "El proceso de someter un prototipo a condiciones controladas para evaluar su comportamiento se denomina ___."

explicacion: |
  El ensayo es la acción de probar un objeto o sistema bajo condiciones específicas para observar su respuesta.
```

### 2 — Variables de Control
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["medicion", "variables"]

opciones_explicitas: ["Variables dependientes", "Variables independientes", "Variables de ruido", "Variables de error"]
respuesta: "Variables independientes"
tipo: mc

enunciado: "En un ensayo controlado, las condiciones que el experimentador manipula deliberadamente para observar un efecto se conocen como ___."

explicacion: |
  Las variables independientes son aquellas que se modifican para medir cómo afectan a la variable dependiente (el resultado).
```

### 3 — Veracidad de la Medición
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["precision", "veracidad"]

respuesta: verdadero
tipo: vf

enunciado: "La precisión se refiere a qué tan cerca está un valor medido del valor real o verdadero de la magnitud."

explicacion: |
  Falso. La cercanía al valor real es la 'exactitud'. La 'precisión' se refiere a la repetibilidad o concordancia entre mediciones sucesivas.
```

### 4 — Fases del Ensayo
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

opciones_explicitas: ["Preparación del entorno", "Ejecución de la prueba", "Análisis de resultados", "Documentación de hallazgos"]
respuesta: ["Preparación del entorno", "Ejecución de la prueba", "Análisis de resultados", "Documentación de hallazgos"]
tipo: ordenar

enunciado: "Ordene lógicamente las etapas de un protocolo de ensayo de prototipo:"

explicacion: |
  Un proceso de ingeniería requiere primero preparar las condiciones, luego ejecutar, analizar los datos obtenidos y finalmente documentar el proceso.
```

### 5 — Incertidumbre en la Medición
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["error", "medicion"]

variables:
  escenario: uno_de([[10.5, 0.1], [25.2, 0.5], [100.0, 2.0]])

respuesta: "10.5"
tipo: completar
respuestas_validas: ["10.5", "25.2", "100.0"]

enunciado: "Si se realiza una medición de un componente y el valor obtenido es {escenario[0]}, pero existe una incertidumbre asociada de {escenario[1]}, el valor reportado es ___."

pasos:
  - "Identificar el valor nominal medido."
  - "Asociar la incertidumbre al valor obtenido."

explicacion: |
  En metrología, el valor medido es el punto de partida para reportar la magnitud con su respectiva tolerancia o incertidumbre.
```