### 1 — El motor del transporte
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["transporte", "comercio"]

enunciado: "La caída drástica en los costos de transporte marítimo durante el siglo XX fue impulsada principalmente por la estandarización de los contenedores. ¿Qué tipo de transporte permitió esta revolución?"

opciones_explicitas: ["Aéreo", "Marítimo", "Ferroviario", "Terrestre"]
respuesta: "Marítimo"
tipo: "mc"

explicacion: |
  La contenedorización permitió cargar y descargar barcos de forma masiva y rápida, reduciendo costos y tiempos de espera, lo que fue clave para la globalización.
```

### 2 — La era de la información
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["telecomunicaciones", "internet"]

variables:
  tecnologia_clave: uno_de(["Internet", "Radio", "Telégrafo"])

enunciado: "La globalización en la era digital se vio potenciada por el desarrollo de {tecnologia_clave}, que permitió la transferencia de datos instantánea entre continentes."

respuesta: "Internet"
tipo: "completar"
respuestas_validas: ["Internet"]

explicacion: |
  Mientras que el telégrafo fue el precursor, fue la llegada de Internet lo que permitió la globalización de los servicios y la economía digital actual.
```

### 3 — Integración económica
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["tratados", "politica"]

enunciado: "Los tratados de libre comercio buscan la eliminación de barreras para el intercambio de bienes. ¿Cuál es el objetivo principal de un tratado de este tipo?"

opciones_explicitas: ["Aumentar aranceles", "Eliminar aranceles", "Cerrar fronteras", "Controlar precios"]
respuesta: "Eliminar aranceles"
tipo: "mc"

explicacion: |
  Los tratados de libre comercio (TLC) buscan reducir o eliminar impuestos (aranceles) a la importación/exportación para facilitar el flujo comercial.
```

### 4 — Secuencia de la globalización
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["procesos", "historia"]

enunciado: "Ordene cronológicamente estos hitos que impulsaron la integración global:"

opciones_explicitas: ["Revolución Industrial (vapor)", "Expansión del Telégrafo", "Revolución Digital (Internet)"]
respuesta: ["Revolución Industrial (vapor)", "Expansión del Telégrafo", "Revolución Digital (Internet)"]
tipo: "ordenar"

explicacion: |
  La globalización ha sido un proceso acumulativo: primero la máquina de vapor, luego la velocidad de la información con el telégrafo y finalmente la interconectividad digital.
```

### 5 — Impacto de la digitalización
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["economia", "digital"]

variables:
  escenario: uno_de([0, 1])

enunciado: "En un mundo altamente globalizado digitalmente, el costo de enviar información tiende a ser ___."

pasos:
  - "Considerar la digitalización de bits vs el transporte físico de papel."

respuesta: tabla[escenario][1]
tipo: "completar"
respuestas_validas: ["nulo", "muy alto"]

variables_contexto:
  tabla: [["muy alto", "muy alto"], ["nulo", "nulo"]]

explicacion: |
  La digitalización permite que el costo marginal de transmitir información sea prácticamente cero, acelerando el comercio global.
```