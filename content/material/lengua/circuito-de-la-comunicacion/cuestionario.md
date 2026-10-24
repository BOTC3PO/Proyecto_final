# Lengua — circuito de la comunicacion (cuestionario, 24 preguntas VBLang)

> Tema: `lengua/circuito-de-la-comunicacion`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["feedback", "respuesta"]

variables:
  correcta: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "El feedback es la respuesta que el receptor envía al emisor para confirmar que ha recibido y entendido el mensaje."

explicacion: |
  Verdadero. El feedback (o retroalimentación) es esencial para verificar la eficacia de la comunicación y permite ajustar el mensaje si fue malinterpretado.
```

### 2 — pregunta 2

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["receptor", "interpretacion"]

variables:
  correcta: "falso"

respuesta: falso
tipo: vf

enunciado: "El receptor es un elemento pasivo que solo recibe información sin influir en el proceso."

explicacion: |
  Falso. El receptor es activo; su contexto, conocimientos previos y estado emocional influyen directamente en cómo interpreta el mensaje.
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["codigo", "compartido"]

variables:
  correcta: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Para que la comunicación sea posible, emisor y receptor deben dominar el mismo código."

explicacion: |
  Verdadero. Si no comparten el código (idioma, lenguaje técnico, etc.), el mensaje no puede ser decodificado correctamente por el receptor.
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["roles", "intercambio"]

variables:
  correcta: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "En una conversación, los roles de emisor y receptor pueden intercambiarse."

explicacion: |
  Verdadero. En la comunicación interpersonal dinámica, los participantes alternan entre emitir mensajes y recibirlos.
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["codigo", "matematico"]

variables:
  correcta: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "El lenguaje matemático es un tipo de código utilizado en la comunicación."

explicacion: |
  Verdadero. El lenguaje matemático es un código formal con reglas y signos específicos para comunicar ideas precisas.
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "avanzado"
  tags: ["receptor", "teoria"]

variables:
  correcta: "falso"

respuesta: falso
tipo: vf

enunciado: "En los modelos modernos del circuito de comunicación, el receptor se considera completamente pasivo."

explicacion: |
  Falso. Los modelos modernos enfatizan la actividad del receptor, quien construye sentido activamente basado en su contexto y conocimientos.
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["emisor", "elementos_basicos"]

variables:
  nombre_emisor: uno_de(["María", "Juan", "La profesora", "El director"])
  accion: uno_de(["envía", "redacta", "dicta", "graba"])

respuesta: "emisor"
tipo: input

enunciado: "En la frase '{nombre_emisor} {accion} una carta a su amigo', ¿quién cumple la función de emisor?"

explicacion: |
  El emisor es quien origina el mensaje. En este caso, {nombre_emisor} es quien realiza la acción de generar la información.
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal", "medio"]

variables:
  medio: uno_de(["el aire", "el teléfono", "internet", "el papel"])
  situacion: uno_de(["conversación cara a cara", "llamada telefónica", "correo electrónico", "carta escrita"])

respuesta: "canal"
tipo: input

enunciado: "Para que el mensaje viaje a través de '{medio}' en una situación de '{situacion}', ¿qué elemento del circuito se está utilizando?"

explicacion: |
  El canal es el medio físico o técnico por el cual se transmite el mensaje del emisor al receptor.
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["receptor", "interpretacion"]

variables:
  accion_receptor: uno_de(["interpreta", "recibe", "decodifica", "entiende"])

respuesta: "receptor"
tipo: input

enunciado: "La persona que {accion_receptor} el mensaje enviado por el emisor se denomina:"

explicacion: |
  El receptor es quien recibe e interpreta el mensaje. Su contexto y conocimientos previos influyen en la interpretación.
```

### 10 — pregunta 10

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["contexto", "situacion"]

variables:
  lugar: uno_de(["una fiesta ruidosa", "una biblioteca silenciosa", "un estadio de fútbol", "una sala de espera"])
  efecto: uno_de(["ruido ambiental", "silencio", "multitud", "tranquilidad"])

respuesta: "contexto"
tipo: input

enunciado: "En '{lugar}', el '{efecto}' puede actuar como ruido que interfiere con la transmisión del mensaje. ¿Qué elemento del circuito abarca esta situación?"

explicacion: |
  El contexto incluye la situación física y social donde ocurre la comunicación, incluyendo posibles interferencias o ruidos.
```

### 11 — pregunta 11

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["codigo", "verbal"]

variables:
  ejemplo: uno_de(["el idioma español", "el lenguaje de señas", "las señales de tránsito", "el código Morse"])

respuesta: "codigo"
tipo: input

enunciado: "'{ejemplo}' es un ejemplo de:"

explicacion: |
  El código es el sistema de signos y reglas compartido. El idioma español es un código verbal.
```

### 12 — pregunta 12

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "avanzado"
  tags: ["elementos", "analisis"]

variables:
  escenario: uno_de(["un mensaje de texto sin respuesta", "una charla de café", "un libro leído", "una película vista"])
  elemento_falta: "feedback"

respuesta: "feedback"
tipo: input

enunciado: "En un '{escenario}' unidireccional donde no hay respuesta inmediata del receptor, ¿qué elemento del circuito está ausente o es mínimo?"

explicacion: |
  En la comunicación unidireccional (como leer un libro), el feedback inmediato del emisor al receptor es ausente o muy limitado.
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["codigo", "no_verbal"]

variables:
  gesto: uno_de(["un saludo con la mano", "una señal de stop", "una mirada de enfado", "un guiño"])

respuesta: "codigo"
tipo: input

enunciado: "'{gesto}' forma parte del código:"

explicacion: |
  Los gestos y señales son parte del código no verbal, que también es un sistema de signos compartido para comunicar.
```

### 14 — pregunta 14

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["canal", "clasificacion"]

variables:
  medio: uno_de(["las ondas de radio", "la fibra óptica", "el aire", "el correo postal"])
  categoria: uno_de(["canal técnico", "canal natural"])

respuesta: "canal"
tipo: input

enunciado: "'{medio}' es un ejemplo de:"

explicacion: |
  El canal es el medio de transmisión. Las ondas de radio y la fibra óptica son canales técnicos; el aire es natural. La pregunta pide identificar el elemento general.
```

### 15 — pregunta 15

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["receptor", "interpretacion"]

variables:
  factor: uno_de(["sus conocimientos previos", "su estado emocional", "su cultura", "su atención"])
  influencia: "la interpretación"

respuesta: "receptor"
tipo: input

enunciado: "El factor '{factor}' del {influencia} del mensaje depende principalmente de:"

explicacion: |
  La interpretación del mensaje la realiza el receptor, influenciado por sus propios factores internos y externos.
```

### 16 — pregunta 16

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["emisor", "intencion"]

variables:
  accion: uno_de(["quiero avisarte", "necesito ayuda", "felicitaciones", "adiós"])
  elemento: "emisor"

respuesta: "emisor"
tipo: input

enunciado: "La intención de '{accion}' define quién es el:"

explicacion: |
  El emisor es quien tiene la intención de comunicar algo, originando el mensaje.
```

### 17 — pregunta 17

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["codigo", "fallos"]

variables:
  idioma_emisor: "inglés"
  idioma_receptor: "español"
  resultado: "imposible"

respuesta: "imposible"
tipo: input

enunciado: "Si el emisor usa '{idioma_emisor}' y el receptor solo entiende '{idioma_receptor}', la comunicación es:"

explicacion: |
  Sin un código compartido, la comunicación es imposible, independientemente del canal o contexto.
```

### 18 — pregunta 18

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal", "audio"]

variables:
  medio: uno_de(["el aire", "las ondas sonoras", "los altavoces", "los micrófonos"])
  elemento: "canal"

respuesta: "canal"
tipo: input

enunciado: "Para que tu voz llegue a alguien en una conversación presencial, el '{medio}' actúa como:"

explicacion: |
  El canal es el medio físico. En una conversación cara a cara, el aire (u ondas sonoras) es el canal.
```

### 19 — pregunta 19

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "avanzado"
  tags: ["contexto", "cultural"]

variables:
  situacion: uno_de(["un saludo formal en Japón", "un abrazo en Latinoamérica", "un apretón de manos en Europa"])
  elemento: "contexto"

respuesta: "contexto"
tipo: input

enunciado: "Las normas de saludo varían según la cultura. Esto es parte del:"

explicacion: |
  El contexto incluye las relaciones sociales, culturales y situacionales que afectan la interpretación del mensaje.
```

### 20 — pregunta 20

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["elementos", "esenciales"]

variables:
  lista: uno_de(["emisor", "receptor", "canal", "código", "mensaje", "contexto"])
  pregunta: "¿Cuál de estos es un elemento esencial del circuito de la comunicación?"

respuesta: "mensaje"
tipo: input

enunciado: "Sin '{lista}', no hay comunicación. ¿Qué elemento falta en la lista anterior para que sea completa?"

explicacion: |
  El mensaje es la información que se transmite. Sin mensaje, no hay comunicación. Todos los otros elementos listados también son esenciales.
```

### 21 — pregunta 21

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["receptor", "decodificacion"]

variables:
  accion: uno_de(["traduce", "interpreta", "descifra", "comprende"])
  elemento: "receptor"

respuesta: "receptor"
tipo: input

enunciado: "La acción de '{accion}' el mensaje según el código compartido es realizada por:"

explicacion: |
  El receptor decodifica el mensaje, es decir, lo traduce de los signos del código a un significado comprensible.
```

### 22 — pregunta 22

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal", "papel"]

variables:
  ejemplo: uno_de(["una carta", "un fax", "un telegrama", "un periódico"])
  elemento: "canal"

respuesta: "canal"
tipo: input

enunciado: "En una '{ejemplo}', el papel actúa como:"

explicacion: |
  El papel es el soporte físico que funciona como canal para el mensaje escrito.
```

### 23 — pregunta 23

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["contexto", "temporal"]

variables:
  tiempo: uno_de(["hace 100 años", "en el presente", "en el futuro"])
  elemento: "contexto"

respuesta: "contexto"
tipo: input

enunciado: "La época en que se produce la comunicación afecta su significado. Esto es parte del:"

explicacion: |
  El contexto temporal es un factor clave que influye en la interpretación del mensaje.
```

### 24 — pregunta 24

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "avanzado"
  tags: ["sintesis", "modelo"]

variables:
  modelo: "circuito de la comunicación"
  funcion: "entender el intercambio de información"

respuesta: "circuito de la comunicación"
tipo: input

enunciado: "El modelo que nos permite entender cómo se produce el intercambio de información entre personas se llama:"

explicacion: |
  El circuito de la comunicación es el modelo teórico que describe los elementos y procesos de la comunicación.
```
