### 1 — El emisor y el mensaje
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["elementos", "emisor", "mensaje"]

respuesta: "emisor"
tipo: completar
respuestas_validas: ["emisor", "emisor", "emisor"]

enunciado: "El sujeto que codifica y transmite la información en el proceso comunicativo se denomina ___."

explicacion: |
  El emisor es el agente que inicia el proceso de comunicación al codificar un mensaje y enviarlo a través de un canal.
```

### 2 — El canal de comunicación
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal", "medio"]

opciones_explicitas: ["El código", "El canal", "El ruido", "El referente"]

respuesta: "El canal"
tipo: mc

enunciado: "El medio físico a través del cual se transmite el mensaje desde el emisor al receptor se conoce como:"

explicacion: |
  El canal es el soporte material (aire, papel, cable de fibra óptica, etc.) que permite el flujo de la información.
```

### 3 — Presencia de ruido
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["ruido", "interferencia"]

respuesta: verdadero
tipo: vf

enunciado: "El 'ruido' en la comunicación se define como cualquier interferencia que distorsiona el mensaje durante su transmisión."

explicacion: |
  Correcto. El ruido puede ser físico (estática), semántico (desconocimiento del código) o psicológico (prejuicios).
```

### 4 — Elementos en el proceso
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["orden", "proceso"]

opciones_explicitas: ["Emisor", "Mensaje", "Canal", "Receptor"]

respuesta: ["Emisor", "Mensaje", "Canal", "Receptor"]
tipo: ordenar

enunciado: "Ordena los elementos según el flujo lógico de la comunicación: el sujeto que inicia, la información enviada, el medio de transporte y quien recibe."

explicacion: |
  El flujo estándar es: Emisor -> Mensaje -> Canal -> Receptor.
```

### 5 — El código y la decodificación
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["codigo", "receptor", "decodificacion"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["El código", "El ruido", "El canal", "El referente"]

enunciado: "Si el receptor no logra entender el mensaje porque no conoce el idioma en que fue emitido, el problema reside en el ___."

pasos:
  - "Identificar el elemento que contiene el sistema de signos (idioma)."
  - "Determinar si el fallo es en la transmisión o en la comprensión del sistema de signos."

explicacion: |
  El código es el conjunto de signos y reglas compartidos por emisor y receptor. Si no se comparten, la comunicación falla.

tabla:
  - ["El código", "El código"]
  - ["El ruido", "El canal"]
```