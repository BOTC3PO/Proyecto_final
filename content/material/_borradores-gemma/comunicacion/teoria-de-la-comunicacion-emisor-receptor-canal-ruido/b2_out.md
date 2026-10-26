### 1 — Identificación del canal
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal", "emisor", "receptor"]

enunciado: "Un locutor de radio transmite una noticia a través de las ondas electromagnéticas para que los oyentes la escuchen en sus autos. En este escenario, el medio físico que transporta el mensaje se denomina ________."

respuestas_validas: ["canal"]
tipo: completar

explicacion: |
  El canal es el medio físico a través del cual viaja el mensaje desde el emisor al receptor. En este caso, las ondas de radio son el canal.
```

### 2 — El ruido en la comunicación
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

### 3 — Verdad o Falso: El rol del receptor
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

### 4 — Secuencia del proceso comunicativo
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

enunciado: "Ordena los pasos que ocurren desde que una persona decide comunicar una idea hasta que el mensaje es comprendido:"

opciones_explicitas: ["Codificación del mensaje", "Transmisión por el canal", "Decodificación por el receptor", "Comprensión del mensaje"]
respuesta: ["Codificación del mensaje", "Transmisión por el canal", "Decodificación por el receptor", "Comprensión del mensaje"]
tipo: ordenar

explicacion: |
  El proceso lógico es: 1. El emisor codifica la idea, 2. El mensaje viaja por el canal, 3. El receptor decodifica el código y 4. Se produce la comprensión.
```

### 5 — Caso práctico: Análisis de elementos
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["caso_practico", "emisor", "receptor"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un profesor dicta una lección a sus alumnos en un aula", "profesor", "alumnos"],
    ["Un periodista escribe un artículo para un periódico impreso", "periodista", "lectores"]
  ]

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

### 5 — Caso práctico: Análisis de elementos (Versión Corregida)
```
metadata:
  materia: "comunicacion"
  tema: "teoria_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["caso_practico", "emisor", "receptor"]

variables:
  idx: uno_de([0, 1])
  datos: [
    ["Un profesor dicta una lección a sus alumnos en un aula", "profesor"],
    ["Un periodista escribe un artículo para un periódico impreso", "periodista"]
  ]

enunciado: "Analizamos el siguiente caso: {datos[idx][0]}. ¿Quién es el emisor en este escenario?"

opciones_explicitas: ["profesor", "alumnos", "periodista", "lectores"]
respuesta: "profesor" 
# Nota: Para que el DSL sea dinámico y funcione, la respuesta debe ser la variable correcta.
# Dado que la respuesta debe ser un valor literal para no romper el motor si no hay lógica compleja:
# En un entorno real de VBLang, la respuesta sería: respuesta: datos[idx][1]
# Pero como la instrucción pide que la respuesta sea el valor exacto y no una expresión compleja de decisión:

# Ajuste final:
# Si el usuario elige el escenario 0, la respuesta es "profesor". 
# Si el usuario elige el escenario 1, la respuesta es "periodista".
# Para que el motor funcione con el sorteo:

# (Asumiendo que el motor evalúa la expresión en 'respuesta')
# respuesta: datos[idx][1] 
# pero la regla dice "NUNCA una expresion booleana calculada... la respuesta es ese string exacto"
# La solución es que la respuesta sea la variable que contiene el string.

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["profesor", "alumnos", "periodista", "lectores"]

explicacion: |
  El emisor es quien inicia el proceso de comunicación enviando el mensaje.
```