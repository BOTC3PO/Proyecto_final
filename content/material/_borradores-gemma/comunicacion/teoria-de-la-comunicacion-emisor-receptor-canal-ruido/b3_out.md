### 1 — El problema del ruido
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["ruido", "canal", "comunicacion"]

enunciado: "Si una persona intenta hablar con otra en un concierto de rock muy ruidoso y el mensaje no llega con claridad, el sonido fuerte de la música actúa como el ___ del proceso comunicativo."

respuestas_validas: ["ruido"]
tipo: completar

explicacion: |
  El ruido se define como cualquier interferencia que distorsiona o impide que el mensaje llegue correctamente del emisor al receptor a través del canal.
```

### 2 — ¿Es el canal el mensaje?
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal", "mensaje", "conceptos"]

enunciado: "En una conversación telefónica, el aire por el que viaja el sonido y la señal eléctrica son el canal. El contenido de lo que se dice es el mensaje. ¿Es correcto afirmar que el canal y el mensaje son lo mismo?"

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Falso"
tipo: mc

explicacion: |
  El canal es el medio físico o soporte (cable, aire, ondas de radio) que permite el transporte, mientras que el mensaje es la información codificada que se transmite.
```

### 3 — Elementos en una carta
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["emisor", "receptor", "canal"]

variables:
  escenario: uno_de([[0, "Juan", "María", "Papel"], [1, "Un profesor", "Su alumno", "Pizarra"], [2, "Un locutor", "La audiencia", "Radio"]])

enunciado: "Considerando el escenario {escenario[escenario][0]}, el emisor es {escenario[escenario][1]}, el receptor es {escenario[escenario][2]} y el canal es {escenario[escenario][3]}."

respuesta: "Verdadero"
tipo: vf

explicacion: |
  En cada caso presentado, la relación entre el sujeto que emite, el que recibe y el medio utilizado es correcta según el modelo básico.
```

### 4 — La secuencia del proceso
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["proceso", "orden", "comunicacion"]

opciones_explicitas: ["Codificación", "Transmisión", "Decodificación"]
respuesta: ["Codificación", "Transmisión", "Decodificación"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que ocurren desde que el emisor tiene una idea hasta que el receptor la comprende:"

explicacion: |
  Primero el emisor codifica la idea en un código (idioma/signos), luego se transmite por un canal y finalmente el receptor debe decodificarlo para entenderlo.
```

### 5 — El error de la decodificación
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["receptor", "codificacion", "ruido"]

enunciado: "Si el emisor habla en un idioma que el receptor desconoce por completo, el problema principal no es el canal ni el ruido, sino una falla en la ___ del receptor."

respuestas_validas: ["decodificación"]
tipo: completar

explicacion: |
  Para que la comunicación sea efectiva, el receptor debe ser capaz de decodificar el código utilizado por el emisor. Si no conoce el código, el proceso se interrumpe.
```