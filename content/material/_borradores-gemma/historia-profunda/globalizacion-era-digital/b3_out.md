### 1 — El motor de la comunicación instantánea
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["internet", "comunicacion", "globalizacion"]

respuesta: "instantánea"
tipo: completar
respuestas_validas: ["instantánea", "inmediata"]

enunciado: "La llegada de internet transformó la escala de los intercambios humanos, permitiendo que la comunicación entre personas en distintos continentes sea de carácter ___."

explicacion: |
  La digitalización eliminó las barreras temporales y geográficas, permitiendo el flujo de información en tiempo real, un pilar fundamental de la globalización moderna.
```

### 2 — Impacto en el comercio global
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["comercio", "e-commerce", "economia"]

variables:
  escenario: uno_de([
    ["comercio electrónico", "comercio electrónico"],
    ["transacciones bancarias", "transacciones bancarias"],
    ["servicios en la nube", "servicios en la nube"]
  ])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["comercio electrónico", "transacciones bancarias", "servicios en la nube", "todos los anteriores"]

enunciado: "La era digital ha facilitado la expansión del {escenario[0]} a nivel mundial, permitiendo que pequeñas empresas accedan a mercados globales sin necesidad de presencia física."

explicacion: |
  El e-commerce es uno de los motores más visibles de la globalización digital, permitiendo la integración de mercados de consumo de manera global y directa.
```

### 3 — Desafíos de la interconexión
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["brecha_digital", "desigualdad", "sociedad"]

respuesta: "brecha digital"
tipo: completar
respuestas_validas: ["brecha digital", "desigualdad tecnológica"]

enunciado: "A pesar de la conectividad global, la distribución desigual de la infraestructura tecnológica ha generado una ___ que separa a las naciones desarrolladas de las que están en vías de desarrollo."

explicacion: |
  La brecha digital es un fenómeno crítico donde la falta de acceso a internet y tecnologías de la información profundiza las desigualdades económicas y sociales preexistentes.
```

### 4 — Secuencia de la revolución digital
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["historia", "tecnologia", "evolucion"]

respuesta: ["telegrafía", "computación personal", "internet de banda ancha", "redes móviles 5G"]
tipo: ordenar
opciones_explicitas: ["telegrafía", "computación personal", "internet de banda ancha", "redes móviles 5G"]

enunciado: "Ordene cronológicamente los hitos tecnológicos que han acelerado la integración global:"

explicacion: |
  La globalización ha sido un proceso de aceleración constante: desde la transmisión de señales eléctricas (telegrafía) hasta la hiperconectividad móvil actual.
```

### 5 — El concepto de "Aldea Global"
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["teoria", "sociedad", "cultura"]

respuesta: "Marsall McLuhan"
tipo: input
tolerancia_abs: 0

enunciado: "El concepto de 'Aldea Global', que describe cómo la tecnología digital ha encogido el mundo, fue acuñado por el teórico de la comunicación ___."

explicacion: |
  McLuhan predijo que los medios de comunicación electrónicos transformarían el mundo en una unidad interconectada donde todos estaríamos presentes en la vida de los demás.
```