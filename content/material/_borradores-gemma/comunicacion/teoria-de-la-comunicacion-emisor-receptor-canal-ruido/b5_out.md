### 1 — El mensaje en la radio
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["emisor", "receptor", "canal"]

variables:
  escenario: uno_de([["Un locutor de radio transmite una noticia", "locutor"], ["Un profesor dicta una clase por Zoom", "profesor"], ["Un presentador de TV lee el clima", "presentador"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["locutor", "profesor", "presentador"]

enunciado: "En el escenario donde '{escenario[idx][0]}', la persona que codifica y envía el mensaje es el: ___"

explicacion: |
  En el modelo de comunicación, el emisor es el sujeto que produce y transmite el mensaje a través de un canal.
```

### 2 — Interferencia en la llamada
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["ruido", "canal"]

variables:
  caso: uno_de([["estática en la línea telefónica", "ruido"], ["una mancha de café en la carta", "ruido"], ["un sonido de construcción de fondo", "ruido"]])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["ruido", "canal", "mensaje"]

enunciado: "Si durante la comunicación ocurre '{caso[idx][0]}', estamos ante un ejemplo de: ___"

explicacion: |
  El ruido es cualquier perturbación que interfiere en la transmisión del mensaje entre el emisor y el receptor.
```

### 3 — El medio físico
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal"]

respuesta: "aire"
tipo: vf

enunciado: "¿El aire es el canal físico utilizado en una conversación cara a cara? ___"

explicacion: |
  Verdadero. El canal es el medio físico a través del cual viaja el mensaje (en este caso, ondas sonoras en el aire).
```

### 4 — Elementos del proceso
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["proceso", "orden"]

respuesta: ["Emisor", "Mensaje", "Canal", "Receptor"]
tipo: ordenar
opciones_explicitas: ["Emisor", "Mensaje", "Canal", "Receptor"]

enunciado: "Ordena los elementos según el flujo lógico del proceso de comunicación:"

explicacion: |
  El proceso comienza con el emisor que codifica un mensaje, el cual viaja por un canal hasta llegar al receptor.
```

### 5 — El receptor pasivo
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["receptor", "decodificacion"]

variables:
  situacion: uno_de([["el receptor no entiende el idioma", "fallo"], ["el receptor está distraído", "fallo"], ["el receptor recibe el mensaje pero no lo procesa", "fallo"]])
  idx: uno_de([0, 1, 2])

respuesta: "fallo"
tipo: completar
respuestas_validas: ["fallo"]

enunciado: "Si en la situación '{situacion[idx][0]}', el proceso de comunicación se ve interrumpido porque el receptor no logra decodificar el mensaje, esto se considera un: ___"

explicacion: |
  Para que la comunicación sea efectiva, el receptor debe ser capaz de decodificar el mensaje correctamente.
```