### 1 — El origen de la red
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["arpanet", "historia"]

variables:
  escenario: uno_de([["ARPANET", "1969"], ["TCP/IP", "1983"], ["WWW", "1989"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["1969", "1983", "1989"]

enunciado: "El hito tecnológico representado por {escenario[idx][0]} ocurrió en el año ___."

explicacion: |
  El año de {escenario[idx][0]} marcó un punto de inflexión en la historia de las telecomunicaciones.
```

### 2 — Protocolos fundamentales
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["protocolos", "tcp_ip"]

variables:
  datos: [["TCP/IP", "estandarizar la comunicación"], ["HTTP", "navegar por la web"], ["DNS", "resolver nombres"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["estandarizar la comunicación", "navegar por la web", "resolver nombres"]

enunciado: "La implementación de {datos[idx][0]} tuvo como objetivo principal ___."

explicacion: |
  {datos[idx][0]} fue fundamental para el funcionamiento de la red tal como la conocemos.
```

### 3 — Evolución de la Web
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "basico"
  tags: ["web", "tim_berners_lee"]

variables:
  hito: uno_de([["La creación de la World Wide Web", "Tim Berners-Lee"], ["La llegada de Google", "Larry Page"]])
  idx: uno_de([0, 1])

respuesta: hito[idx][1]
tipo: mc
opciones_explicitas: ["Tim Berners-Lee", "Larry Page"]

enunciado: "¿Quién es el autor de {hito[idx][0]}?"

explicacion: |
  {hito[idx][0]} fue impulsada por {hito[idx][1]}.
```

### 4 — Cronología de la era digital
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["ordenar", "historia"]

variables:
  secuencia: [["ARPANET", "TCP/IP", "WWW", "Redes Sociales"]]

respuesta: secuencia
tipo: ordenar
opciones_explicitas: ["ARPANET", "TCP/IP", "WWW", "Redes Sociales"]

enunciado: "Ordena cronológicamente los siguientes hitos de la era digital:"

pasos:
  - "Identifica el primer paquete de datos enviado."
  - "Ubica la estandarización de protocolos."
  - "Ubica la creación de la web."
  - "Ubica el auge de la interacción social."

explicacion: |
  El orden correcto refleja la evolución desde la infraestructura militar hasta la cultura social.
```

### 5 — El impacto de la banda ancha
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["tecnologia", "acceso"]

variables:
  caso: uno_de([["Dial-up", "lenta"], ["Banda Ancha", "rápida"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["lenta", "rápida"]

enunciado: "La conexión de tipo {caso[idx][0]} se caracterizaba por ser ___."

explicacion: |
  La transición hacia la {caso[idx][0]} transformó el consumo de contenido global.
```