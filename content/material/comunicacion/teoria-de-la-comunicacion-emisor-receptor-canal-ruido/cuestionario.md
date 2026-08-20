# Comunicacion — Teoria de la comunicacion emisor receptor canal ruido (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El emisor y el mensaje

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["elementos", "emisor", "mensaje"]

respuesta: "emisor"
tipo: completar
respuestas_validas:
  - "emisor"
  - "emisor"
  - "emisor"

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

respuesta_orden: ["Emisor", "Mensaje", "Canal", "Receptor"]
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

tipo: mc
opciones_explicitas: ["El código", "El ruido", "El canal", "El referente"]

respuesta: "El código"

enunciado: "Si el receptor no logra entender el mensaje porque no conoce el idioma en que fue emitido, el problema reside en el ___."

pasos:
  - "Identificar el elemento que contiene el sistema de signos (idioma)."
  - "Determinar si el fallo es en la transmisión o en la comprensión del sistema de signos."

explicacion: |
  El código es el conjunto de signos y reglas compartidos por emisor y receptor. Si no se comparten, la comunicación falla.
```

### 6 — Identificación del canal

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal", "emisor", "receptor"]

enunciado: "Un locutor de radio transmite una noticia a través de las ondas electromagnéticas para que los oyentes la escuchen en sus autos. En este escenario, el medio físico que transporta el mensaje se denomina ________."

respuestas_validas:
  - "canal"
tipo: completar

explicacion: |
  El canal es el medio físico a través del cual viaja el mensaje desde el emisor al receptor. En este caso, las ondas de radio son el canal.
```

### 7 — El ruido en la comunicación

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["ruido", "interferencia"]

enunciado: "Durante una videollamada, la conexión a internet es inestable y la imagen se congela, impidiendo que el receptor comprenda el mensaje del emisor. ¿Qué elemento del modelo de comunicación está fallando?"

opciones_explicitas: ["Emisor", "Mensaje", "Canal", "Ruido"]
respuesta: "Ruido"
tipo: mc

explicacion: |
  El ruido es cualquier interferencia que distorsiona o interrumpe la transmisión del mensaje. La inestabilidad de la conexión actúa como ruido técnico.
```

### 8 — Verdad o Falso: El rol del receptor

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["receptor", "decodificacion"]

enunciado: "En el proceso de comunicación, el receptor es el encargado de codificar el mensaje para que el emisor pueda entenderlo."

respuesta: falso
tipo: vf

explicacion: |
  Falso. El receptor es quien realiza la **decodificación** (interpreta el mensaje). La **codificación** es la tarea del emisor.
```

### 9 — Secuencia del proceso comunicativo

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

enunciado: "Ordena los pasos que ocurren desde que una persona decide comunicar una idea hasta que el mensaje es comprendido:"

opciones_explicitas: ["Codificación del mensaje", "Transmisión por el canal", "Decodificación por el receptor", "Comprensión del mensaje"]
respuesta_orden: ["Codificación del mensaje", "Transmisión por el canal", "Decodificación por el receptor", "Comprensión del mensaje"]
tipo: ordenar

explicacion: |
  El proceso lógico es: 1. El emisor codifica la idea, 2. El mensaje viaja por el canal, 3. El receptor decodifica el código y 4. Se produce la comprensión.
```

### 10 — Caso práctico: Análisis de elementos

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["caso_practico", "emisor", "receptor"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un profesor dicta una lección a sus alumnos en un aula", "profesor", "alumnos"], ["Un periodista escribe un artículo para un periódico impreso", "periodista", "lectores"]]

enunciado: "Analizamos el siguiente caso: {escenarios[escenario_idx][0]}. En este ejemplo, el {escenarios[escenario_idx][1]} actúa como el emisor."

respuesta: "profesor"
tipo: mc
opciones_explicitas: ["profesor", "alumnos", "periodista", "lectores"]
# Nota: La respuesta se deriva de la lógica del escenario sorteado. 
# Para cumplir estrictamente con la regla de que la respuesta sea el mismo valor que la opción:
# Re-estructuramos para que la respuesta sea el valor exacto del elemento en la variable.

# Corrección de lógica para cumplir la regla de "respuesta debe ser del mismo tipo/valor que las opciones"
# Usaremos una estructura donde la respuesta es el texto exacto.

# (Re-definición de la pregunta 5 para asegurar compatibilidad total con el DSL)
```

### 11 — Caso práctico: Análisis de elementos (Versión Corregida)

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["caso_practico", "emisor", "receptor"]

variables:
  idx: uno_de([0, 1])
  datos: [["Un profesor dicta una lección a sus alumnos en un aula", "profesor"], ["Un periodista escribe un artículo para un periódico impreso", "periodista"]]

enunciado: "Analizamos el siguiente caso: {datos[idx][0]}. ¿Quién es el emisor en este escenario?"

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["profesor", "alumnos", "periodista", "lectores"]

explicacion: |
  El emisor es quien inicia el proceso de comunicación enviando el mensaje.
```

### 12 — El problema del ruido

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["ruido", "canal", "comunicacion"]

enunciado: "Si una persona intenta hablar con otra en un concierto de rock muy ruidoso y el mensaje no llega con claridad, el sonido fuerte de la música actúa como el ___ del proceso comunicativo."

respuestas_validas:
  - "ruido"
tipo: completar

explicacion: |
  El ruido se define como cualquier interferencia que distorsiona o impide que el mensaje llegue correctamente del emisor al receptor a través del canal.
```

### 13 — ¿Es el canal el mensaje?

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

### 14 — Elementos en una carta

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["emisor", "receptor", "canal"]

variables:
  escenario: uno_de([[0, "Juan", "María", "Papel"], [1, "Un profesor", "Su alumno", "Pizarra"], [2, "Un locutor", "La audiencia", "Radio"]])

enunciado: "Considerando el escenario {escenario[0]}, el emisor es {escenario[1]}, el receptor es {escenario[2]} y el canal es {escenario[3]}."

respuesta: verdadero
tipo: vf
explicacion: |
  En cada caso presentado, la relación entre el sujeto que emite, el que recibe y el medio utilizado es correcta según el modelo básico.
```

### 15 — La secuencia del proceso

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["proceso", "orden", "comunicacion"]

opciones_explicitas: ["Codificación", "Transmisión", "Decodificación"]
respuesta_orden: ["Codificación", "Transmisión", "Decodificación"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que ocurren desde que el emisor tiene una idea hasta que el receptor la comprende:"

explicacion: |
  Primero el emisor codifica la idea en un código (idioma/signos), luego se transmite por un canal y finalmente el receptor debe decodificarlo para entenderlo.
```

### 16 — El error de la decodificación

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["receptor", "codificacion", "ruido"]

enunciado: "Si el emisor habla en un idioma que el receptor desconoce por completo, el problema principal no es el canal ni el ruido, sino una falla en la ___ del receptor."

respuestas_validas:
  - "decodificación"
tipo: completar

explicacion: |
  Para que la comunicación sea efectiva, el receptor debe ser capaz de decodificar el código utilizado por el emisor. Si no conoce el código, el proceso se interrumpe.
```

### 17 — El componente del canal

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal", "emisor", "receptor"]

enunciado: "A diferencia del mensaje, que es el contenido de la información, el ___ es el medio físico o soporte a través del cual se transmite dicho mensaje."

respuestas_validas:
  - "canal"

respuesta: "canal"
tipo: completar

explicacion: |
  El canal es el soporte físico (aire, cable, papel, ondas electromagnéticas) que permite que el mensaje viaje desde el emisor al receptor.
```

### 18 — Distinción entre Ruido y Mensaje

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

### 19 — El rol del Receptor

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

### 20 — Elementos de la comunicación en secuencia

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

enunciado: "Para que la comunicación sea efectiva, se debe seguir un orden lógico en el proceso de transmisión. Ordena los siguientes elementos según el flujo de la información:"

opciones_explicitas: ["Emisor", "Mensaje", "Canal", "Receptor"]

respuesta_orden: ["Emisor", "Mensaje", "Canal", "Receptor"]
tipo: ordenar

explicacion: |
  El flujo comienza con la producción del mensaje por el emisor, la transmisión a través de un canal y la recepción por parte del destinatario.
```

### 21 — El impacto del ruido en el sistema

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["ruido", "canal"]

variables:
  escenarios: [["El ruido es una señal que ayuda a entender mejor el mensaje", "falso"], ["El ruido es la interferencia que altera el canal", "verdadero"], ["El ruido es el mismo que el mensaje", "falso"]]
  idx: uno_de([0,1,2])

enunciado: "Considerando la naturaleza del ruido en la comunicación, según el escenario planteado: {escenarios[idx][0]}"

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

explicacion: |
  El ruido se define como cualquier elemento externo o interno que interfiere en el canal y dificulta la llegada fiel del mensaje al receptor.
```

### 22 — El mensaje en la radio

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["emisor", "receptor", "canal"]

variables:
  datos: [["Un locutor de radio transmite una noticia", "locutor"], ["Un profesor dicta una clase por Zoom", "profesor"], ["Un presentador de TV lee el clima", "presentador"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["locutor", "profesor", "presentador"]

enunciado: "En el escenario donde '{datos[idx][0]}', la persona que codifica y envía el mensaje es el: ___"

explicacion: |
  En el modelo de comunicación, el emisor es el sujeto que produce y transmite el mensaje a través de un canal.
```

### 23 — Interferencia en la llamada

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["ruido", "canal"]

variables:
  datos: [["estática en la línea telefónica", "ruido"], ["una mancha de café en la carta", "ruido"], ["un sonido de construcción de fondo", "ruido"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ruido", "canal", "mensaje"]

enunciado: "Si durante la comunicación ocurre '{datos[idx][0]}', estamos ante un ejemplo de: ___"

explicacion: |
  El ruido es cualquier perturbación que interfiere en la transmisión del mensaje entre el emisor y el receptor.
```

### 24 — El medio físico

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal"]

respuesta: "aire"
tipo: completar
enunciado: "¿El aire es el canal físico utilizado en una conversación cara a cara? ___"

explicacion: |
  Verdadero. El canal es el medio físico a través del cual viaja el mensaje (en este caso, ondas sonoras en el aire).
```

### 25 — Elementos del proceso

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["proceso", "orden"]

respuesta_orden: ["Emisor", "Mensaje", "Canal", "Receptor"]
tipo: ordenar
opciones_explicitas: ["Emisor", "Mensaje", "Canal", "Receptor"]

enunciado: "Ordena los elementos según el flujo lógico del proceso de comunicación:"

explicacion: |
  El proceso comienza con el emisor que codifica un mensaje, el cual viaja por un canal hasta llegar al receptor.
```

### 26 — El receptor pasivo

```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["receptor", "decodificacion"]

variables:
  datos: [["el receptor no entiende el idioma", "fallo"], ["el receptor está distraído", "fallo"], ["el receptor recibe el mensaje pero no lo procesa", "fallo"]]
  idx: uno_de([0, 1, 2])

respuesta: "fallo"
tipo: completar
respuestas_validas:
  - "fallo"

enunciado: "Si en la situación '{datos[idx][0]}', el proceso de comunicación se ve interrumpido porque el receptor no logra decodificar el mensaje, esto se considera un: ___"

explicacion: |
  Para que la comunicación sea efectiva, el receptor debe ser capaz de decodificar el mensaje correctamente.
```
