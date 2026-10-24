# Historia — Dimensión ética (cuestionario, 20 preguntas VBLang)

> Tema: `T10`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué pregunta la dimensión ética

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "basico"
  tags: ["dimension_etica", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La dimensión ética pregunta qué le debemos, hoy, a la memoria de lo ocurrido, no sólo qué pasó en el pasado."

pasos:
  - "Es una pregunta sobre la responsabilidad del presente, no sobre el pasado en sí."

explicacion: |
  Verdadero: es la definición central de dimensión ética en historia.
```

### 2 — Diferencia con los conceptos anteriores del Big Six

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["dimension_etica", "big_six", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de causa/consecuencia, cambio/continuidad y multicausalidad, que responden preguntas de hecho (qué pasó, por qué), la dimensión ética responde una pregunta distinta: qué debemos hoy frente a eso."

pasos:
  - "Ver `../causa-y-consecuencia/`, `../cambio-y-continuidad/`, `../multicausalidad/`: son los conceptos de hecho ya estudiados."

explicacion: |
  Verdadero: es la distinción central entre este tema y los
  conceptos anteriores de la cadena.
```

### 3 — Por qué no es "trivia" para memorizar

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["proposito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sin esta habilidad enseñada explícitamente, un tema histórico grave puede quedar reducido a una fecha para memorizar, en vez de ser una herramienta de juicio que ayuda a evitar repetir el error."

pasos:
  - "Es la razón central por la que este concepto se incluyó explícitamente en el mapa."

explicacion: |
  Verdadero: es el propósito central de este tema, mencionado en la
  teoría.
```

### 4 — Quién tiene derecho a contar la historia

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["preguntas_centrales", "quien_cuenta"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las víctimas, los perpetradores, el Estado y los historiadores académicos pueden tener versiones legítimas pero parciales de un mismo hecho, y ninguna reemplaza del todo a las demás."

pasos:
  - "Es una de las preguntas centrales de la dimensión ética mencionadas en la teoría."

explicacion: |
  Verdadero: es una de las preguntas centrales de este tema.
```

### 5 — Qué le debemos a las víctimas

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["preguntas_centrales", "victimas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Distintas sociedades han respondido de formas distintas qué le deben a las víctimas de un hecho histórico grave: reconocimiento, verdad, justicia, reparación."

pasos:
  - "Juicios penales, comisiones de la verdad, monumentos y educación obligatoria son ejemplos de respuestas concretas mencionadas en la teoría."

explicacion: |
  Verdadero: es otra de las preguntas centrales de este tema.
```

### 6 — Herramientas concretas de respuesta a las víctimas

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["preguntas_centrales", "practica"]

variables:
  herramientas: ["juicios penales", "comisiones de la verdad", "monumentos"]
  idx: uno_de([0, 1, 2])

respuesta: verdadero
tipo: vf

enunciado: "\"{herramientas[idx]}\" es un ejemplo mencionado en la teoría de cómo una sociedad puede responder a la pregunta de qué le debe a las víctimas de un hecho histórico grave."

pasos:
  - "Son ejemplos concretos de las distintas formas en que las sociedades intentan responder esa pregunta."

explicacion: |
  Verdadero: son ejemplos de mecanismos reales que distintas
  sociedades han usado para responder esta pregunta ética.
```

### 7 — Cómo se evita repetir el error

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["preguntas_centrales", "prevencion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Entender las condiciones que hicieron posible un hecho grave es parte de la responsabilidad de estudiarlo, no sólo narrar los hechos en sí."

pasos:
  - "Es otra de las preguntas centrales de la dimensión ética mencionadas en la teoría."

explicacion: |
  Verdadero: es otra de las preguntas centrales de este tema.
```

### 8 — Qué se olvida y qué se recuerda

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["preguntas_centrales", "memoria_selectiva"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Qué monumentos se erigen, qué fechas se conmemoran y qué se enseña en la escuela son decisiones que reflejan valores del presente, no sólo hechos del pasado."

pasos:
  - "Es otra de las preguntas centrales de la dimensión ética mencionadas en la teoría, sobre la memoria selectiva."

explicacion: |
  Verdadero: es otra de las preguntas centrales de este tema.
```

### 9 — La memoria histórica es selectiva

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["memoria_selectiva"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La memoria histórica es selectiva: no todo lo ocurrido se conmemora o enseña de la misma manera, y esas decisiones son parte de lo que estudia la dimensión ética."

pasos:
  - "Es la conclusión central sobre el carácter selectivo de la memoria colectiva."

explicacion: |
  Verdadero: es un concepto central de este tema.
```

### 10 — Diferencia entre juicio histórico y juicio ético

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["juicio_historico", "juicio_etico", "diferenciacion"]

variables:
  afirmaciones: ["el hecho X ocurrió por razones económicas y políticas combinadas", "el hecho X fue incorrecto y genera una responsabilidad hoy"]
  tipos: ["juicio histórico", "juicio ético"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["juicio histórico", "juicio ético"]

enunciado: "\"{afirmaciones[idx]}\" es un ejemplo de..."

pasos:
  - "Analizar por qué ocurrió algo es un juicio histórico; evaluar si fue correcto/incorrecto y qué responsabilidad genera es un juicio ético."

explicacion: |
  Distinguir juicio histórico de juicio ético es la aplicación
  central de este tema.
```

### 11 — Ambos juicios son necesarios pero distintos

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["juicio_historico", "juicio_etico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El juicio histórico (por qué ocurrió algo) y el juicio ético (si fue correcto y qué responsabilidad genera hoy) son ambos necesarios para entender un hecho grave del pasado, pero son preguntas distintas."

pasos:
  - "Ver `../../filosofia/etica-como-rama-propia/`: es la misma distinción entre descripción y evaluación, aplicada ahora al pasado histórico."

explicacion: |
  Verdadero: es la distinción central de este tema entre analizar y
  evaluar un hecho histórico.
```

### 12 — No toda dimensión ética es igual de consensuada

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["consenso_variable"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Algunos juicios éticos sobre el pasado tienen amplio consenso; otros (como la forma exacta de reparar un daño histórico) son objeto de debate legítimo."

pasos:
  - "Reconocer esa diferencia es parte de manejar esta dimensión con rigor, no con simplificación."

explicacion: |
  Verdadero: es un matiz importante sobre la variedad de consenso
  posible en juicios éticos históricos.
```

### 13 — Juzgar a personas del pasado con estándares actuales

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["consenso_variable", "anacronismo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Hasta qué punto juzgar a personas del pasado con estándares éticos actuales es uno de los temas de debate legítimo mencionados en la teoría, sin una respuesta única y cerrada."

pasos:
  - "Es un ejemplo concreto de la variedad de consenso posible dentro de la dimensión ética."

explicacion: |
  Verdadero: es un ejemplo específico mencionado del tipo de debate
  legítimo dentro de esta dimensión.
```

### 14 — Dimensión ética depende de cambio y continuidad

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Juzgar qué le debemos a la memoria de lo ocurrido presupone ya poder distinguir qué de ese pasado cambió y qué sigue vigente hoy (deudas no saldadas, patrones que persisten)."

pasos:
  - "Ver `../cambio-y-continuidad/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito.
```

### 15 — Dimensión ética cierra el marco Big Six

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["big_six", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dimensión ética es el sexto y último concepto del marco Big Six de pensamiento histórico, cerrando el conjunto completo de esta cadena."

pasos:
  - "Ver `../causa-y-consecuencia/`, `../cambio-y-continuidad/`, `../significancia-historica/`, `../evidencia/`: son los otros 5 conceptos del marco ya cubiertos."

explicacion: |
  Verdadero: es el sexto concepto del marco Big Six, completando el
  conjunto de herramientas de pensamiento histórico.
```

### 16 — Las decisiones sobre qué recordar reflejan el presente

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["memoria_selectiva", "presente"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que un país decida hoy erigir (o retirar) un monumento a una figura histórica es una decisión que dice tanto sobre los valores actuales de esa sociedad como sobre el hecho histórico en sí."

pasos:
  - "Es la aplicación práctica de que la memoria histórica refleja valores del presente."

explicacion: |
  Verdadero: es un ejemplo concreto de cómo las decisiones de memoria
  colectiva combinan pasado y presente.
```

### 17 — La dimensión ética no reemplaza el análisis histórico riguroso

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["dimension_etica", "rigor"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La dimensión ética permite reemplazar el análisis histórico riguroso (causas, evidencia) por un juicio moral directo sobre los hechos, sin necesitar evidencia ni análisis causal."

pasos:
  - "Ambos tipos de juicio (histórico y ético) son necesarios; uno no sustituye al otro."

explicacion: |
  Falso: el juicio ético se construye SOBRE el análisis histórico
  riguroso, no lo reemplaza.
```

### 18 — Ordenar el proceso para abordar la dimensión ética de un hecho

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["dimension_etica", "metodo"]

enunciado: "Ordená los pasos para abordar la dimensión ética de un hecho histórico grave, después de ya analizarlo históricamente (causas, evidencia)."
tipo: ordenar
opciones_explicitas:
  - "Identificar quiénes tienen versiones legítimas pero parciales del hecho (víctimas, perpetradores, historiadores)"
  - "Preguntarse qué le debe la sociedad actual a las víctimas del hecho"
  - "Analizar las condiciones que hicieron posible el hecho, para pensar cómo evitar repetirlo"
  - "Revisar qué se recuerda y qué se olvida hoy sobre ese hecho, y por qué"
respuesta_orden: ["Identificar quiénes tienen versiones legítimas pero parciales del hecho (víctimas, perpetradores, historiadores)", "Preguntarse qué le debe la sociedad actual a las víctimas del hecho", "Analizar las condiciones que hicieron posible el hecho, para pensar cómo evitar repetirlo", "Revisar qué se recuerda y qué se olvida hoy sobre ese hecho, y por qué"]
explicacion: |
  El proceso recorre las cuatro preguntas centrales de la dimensión
  ética descritas en la teoría, en un orden lógico de análisis.
```

### 19 — La dimensión ética conecta pasado y presente

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["dimension_etica", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La dimensión ética es lo que conecta el estudio del pasado con la responsabilidad del presente, la razón última por la que estudiar historia importa más allá de acumular información."

pasos:
  - "Es la síntesis central de por qué este tema cierra el marco Big Six de esta manera."

explicacion: |
  Verdadero: es la conclusión central sobre el propósito de este
  tema dentro de toda la cadena de pensamiento histórico.
```

### 20 — Aplicación: estudiar un hecho histórico grave con dimensión ética

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["dimension_etica", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al estudiar un hecho histórico grave (una dictadura, un genocidio, una injusticia masiva), conviene complementar el análisis de causas y evidencia con las preguntas de la dimensión ética: qué le debemos a las víctimas y cómo se evita repetir el error."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al estudio
  responsable de hechos históricos graves.
```
