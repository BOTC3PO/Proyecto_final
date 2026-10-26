### 1 — El impacto de la conectividad
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["internet", "economia"]

tipo: mc
opciones_explicitas: ["Descentralización de la información", "Aumento de la burocracia física", "Reducción de la velocidad de comunicación", "Eliminación del comercio electrónico"]

enunciado: "La combinación de la revolución informática y el internet ha permitido la ________ de la información, permitiendo el acceso global a datos en tiempo real."

explicacion: |
  La digitalización ha democratizado el acceso a la información, rompiendo las barreras geográficas y temporales que existían antes de la era de internet.
```

### 2 — Modelos de negocio digitales
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["economia_digital", "e-commerce"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["comercio_electronico", "servicios_streaming"], ["ventas_retail_fisico", "suscripciones_digitales"]]

tipo: completar
respuestas_validas: ["comercio_electronico", "servicios_streaming"]
respuesta: escenarios[escenario_idx][1]

enunciado: "Un ejemplo clave de la transformación económica es el paso de modelos basados en el ________ hacia modelos basados en las ________."

explicacion: |
  La economía ha migrado de la propiedad física y el comercio en locales hacia el consumo de servicios bajo demanda y plataformas digitales.
```

### 3 — La velocidad de la información
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["comunicacion", "impacto_social"]

tipo: input
tolerancia_abs: 0

enunciado: "Si en la era industrial la comunicación se basaba en el telégrafo y el correo físico, en la era informática la comunicación es instantánea. Si comparamos la velocidad de un mensaje de texto con un correo físico que tarda 3 días, y el mensaje tarda 0 segundos, ¿cuántos segundos de ahorro representa el mensaje digital frente al correo?"

pasos:
  - "Convertir 3 días a segundos: 3 * 24 * 60 * 60 = 259200"
  - "Restar el tiempo del mensaje digital (0) al tiempo del correo (259200)"

respuesta: 259200

explicacion: |
  La inmediatez es una de las características fundamentales de la revolución informática, permitiendo la globalización de los mercados en tiempo real.
```

### 4 — Evolución de la computación
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["hardware", "historia"]

tipo: ordenar
opciones_explicitas: ["Mainframes gigantescos", "Computadoras personales (PC)", "Dispositivos móviles y smartphones"]

enunciado: "Ordena cronológicamente los hitos tecnológicos que permitieron la integración de la informática en la vida cotidiana:"

respuesta: ["Mainframes gigantescos", "Computadoras personales (PC)", "Dispositivos móviles y smartphones"]

explicacion: |
  La computación comenzó en grandes centros de datos corporativos, pasó a los escritorios de los hogares con la PC y finalmente se volvió ubicua con los smartphones.
```

### 5 — El impacto en el empleo
```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "avanzado"
  tags: ["trabajo", "automatizacion"]

tipo: mc
opciones_explicitas: ["Automatización de tareas repetitivas", "Desaparición total del trabajo humano", "Aumento de la necesidad de archivos físicos", "Reducción de la conectividad global"]

enunciado: "Un efecto crítico de la revolución informática en la economía laboral es la ________, lo que obliga a la fuerza de trabajo a especializarse en tareas de mayor valor cognitivo."

explicacion: |
  La automatización impulsada por software y algoritmos ha transformado la estructura del empleo, eliminando tareas mecánicas pero creando nuevas demandas tecnológicas.
```