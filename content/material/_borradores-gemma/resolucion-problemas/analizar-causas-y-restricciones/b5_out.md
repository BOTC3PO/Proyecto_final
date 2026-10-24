### 1 — Identificación de la causa raíz
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["causa-raiz", "analisis"]

variables:
  escenario: uno_de([["El servidor se cae cada vez que hay un pico de tráfico", "Falta de escalabilidad de hardware"], ["La máquina tiene fugas de aceite", "Desgaste de sellos de goma"], ["El cliente no compra el producto", "Precio superior al de la competencia"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Falta de escalabilidad de hardware", "Desgaste de sellos de goma", "Precio superior al de la competencia"]

enunciado: "En el siguiente caso: '{escenario[idx][0]}', ¿cuál es la causa raíz más probable que debe abordarse para solucionar el problema?"

explicacion: |
  Para resolver un problema, es vital distinguir entre el síntoma (lo que se ve) y la causa raíz (lo que lo genera). En este caso, el síntoma es la caída del servidor, pero la causa es la falta de capacidad de escalado.
```

### 2 — Restricciones de presupuesto
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["restricciones", "presupuesto"]

variables:
  datos: [[1500, "Presupuesto excedido"], [500, "Presupuesto suficiente"], [2000, "Presupuesto insuficiente"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["Presupuesto excedido", "Presupuesto suficiente", "Presupuesto insuficiente"]

enunciado: "Se tiene un proyecto con un costo estimado de {datos[idx][0]} USD. Si el límite máximo de gasto permitido es de 1000 USD, la restricción principal es: ___"

explicacion: |
  Las restricciones financieras son límites que condicionan la solución. Si el costo estimado supera el límite, la restricción es el presupuesto.
```

### 3 — Verificación de viabilidad técnica
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["viabilidad", "logica"]

variables:
  caso: [[false, "No es viable"], [true, "Es viable"]]
  idx: uno_de([0, 1])

respuesta: caso[idx][0]
tipo: vf

enunciado: "Si un problema requiere una solución que debe funcionar en un entorno sin conexión a internet, pero la solución propuesta depende exclusivamente de la nube, ¿es técnicamente viable? ___"

explicacion: |
  Una solución que depende de un recurso inexistente en el entorno de aplicación no es viable debido a la restricción de conectividad.
```

### 4 — Secuencia de análisis de problemas
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "avanzado"
  tags: ["metodologia", "orden"]

respuesta: ["Identificar el síntoma", "Analizar las causas", "Definir restricciones", "Evaluar soluciones"]
tipo: ordenar
opciones_explicitas: ["Identificar el síntoma", "Analizar las causas", "Definir restricciones", "Evaluar soluciones"]

enunciado: "Ordene los pasos lógicos para el análisis de un problema antes de proponer una solución final:"

explicacion: |
  El proceso lógico comienza con la observación del síntoma, sigue con la búsqueda de la causa, la delimitación de qué podemos y no podemos hacer (restricciones) y finalmente la evaluación de alternativas.
```

### 5 — Impacto de las restricciones de tiempo
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["tiempo", "plazos"]

variables:
  escenario: [["Entrega en 2 días", "Tiempo insuficiente"], ["Entrega en 2 meses", "Tiempo suficiente"]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Tiempo insuficiente", "Tiempo suficiente"]

enunciado: "Si la tarea requiere 5 días de trabajo pero el plazo de entrega es de '{escenario[idx][0]}', la restricción temporal se traduce en: ___"

explicacion: |
  Cuando la duración necesaria de la solución es mayor al tiempo disponible, la restricción de tiempo actúa como un limitador crítico que impide la ejecución de la solución ideal.
```