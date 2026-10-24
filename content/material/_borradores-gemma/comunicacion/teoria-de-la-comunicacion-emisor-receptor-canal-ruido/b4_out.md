### 1 — El componente del canal
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal", "emisor", "receptor"]

enunciado: "A diferencia del mensaje, que es el contenido de la información, el ___ es el medio físico o soporte a través del cual se transmite dicho mensaje."

respuestas_validas: ["canal"]

respuesta: "canal"
tipo: completar

explicacion: |
  El canal es el soporte físico (aire, cable, papel, ondas electromagnéticas) que permite que el mensaje viaje desde el emisor al receptor.
```

### 2 — Distinción entre Ruido y Mensaje
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["ruido", "mensaje"]

enunciado: "En un proceso comunicativo, el ruido se distingue del mensaje porque el primero representa una interferencia que distorsiona la señal, mientras que el segundo es el objeto de la comunicación."

respuesta: falso
tipo: vf

explicacion: |
  Es verdadero. El ruido es cualquier perturbación que interfiere en la transmisión, mientras que el mensaje es la información propiamente dicha.
```

### 3 — El rol del Receptor
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["emisor", "receptor"]

enunciado: "Si comparamos los roles en el modelo básico, el emisor es quien codifica el mensaje, mientras que el receptor es quien lo ___."

opciones_explicitas: ["decodifica", "transmite", "distorsiona", "crea"]

respuesta: "decodifica"
tipo: mc

explicacion: |
  El receptor tiene la función de decodificar (interpretar) los signos y símbolos enviados por el emisor para comprender el mensaje.
```

### 4 — Elementos de la comunicación en secuencia
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

enunciado: "Para que la comunicación sea efectiva, se debe seguir un orden lógico en el proceso de transmisión. Ordena los siguientes elementos según el flujo de la información:"

opciones_explicitas: ["Emisor", "Mensaje", "Canal", "Receptor"]

respuesta: ["Emisor", "Mensaje", "Canal", "Receptor"]
tipo: ordenar

explicacion: |
  El flujo comienza con la producción del mensaje por el emisor, la transmisión a través de un canal y la recepción por parte del destinatario.
```

### 5 — El impacto del ruido en el sistema
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["ruido", "canal"]

variables:
  escenarios: [
    ["El ruido es una señal que ayuda a entender mejor el mensaje", "falso"],
    ["El ruido es la interferencia que altera el canal", "verdadero"],
    ["El ruido es el mismo que el mensaje", "falso"]
  ]
  idx: uno_de([0,1,2])

enunciado: "Considerando la naturaleza del ruido en la comunicación, según el escenario planteado: {escenarios[idx][0]}"

respuesta: {escenarios[idx][1]}
tipo: mc

explicacion: |
  El ruido se define como cualquier elemento externo o interno que interfiere en el canal y dificulta la llegada fiel del mensaje al receptor.
```