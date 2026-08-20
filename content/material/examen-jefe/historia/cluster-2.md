# Examen jefe — Maestro del Tiempo y la Ética

> Logro #122. Completaste el parcial dominando las escalas temporales, las economías tempranas y la metodología de los Annales. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **104 preguntas totales** en 5/5 secciones.

---

## Sección: decada-siglo-milenio (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["decada"]

variables:
  n: uno_de([1, 1])

respuesta: "10"
tipo: completar

enunciado: "Una década tiene cuántos años?"

pasos:
  - "Es la unidad de agrupación temporal más chica de las tres estudiadas."

explicacion: |
  Una década equivale a 10 años.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["siglo"]

variables:
  n: uno_de([1, 1])

respuesta: "100"
tipo: completar

enunciado: "Un siglo tiene cuántos años?"

pasos:
  - "Equivale a 10 décadas."

explicacion: |
  Un siglo equivale a 100 años.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["milenio"]

variables:
  n: uno_de([1, 1])

respuesta: "1000"
tipo: completar

enunciado: "Un milenio tiene cuántos años?"

pasos:
  - "Equivale a 10 siglos."

explicacion: |
  Un milenio equivale a 1000 años.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["calculo_de_siglo"]

variables:
  n: uno_de([1, 1])

respuesta: "XIX"
tipo: mc
opciones_explicitas: ["XVIII", "XIX", "XX"]

enunciado: "El año 1850 pertenece al siglo..."

pasos:
  - "1850/100 = 18,5 → se redondea hacia arriba → siglo 19."

explicacion: |
  El año 1850, al dividir por 100 y redondear hacia arriba, cae en el
  siglo XIX, no en el XVIII como intuitivamente podría pensarse.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["calculo_de_siglo", "caso_limite"]

variables:
  n: uno_de([1, 1])

respuesta: "XIX"
tipo: mc
opciones_explicitas: ["XIX", "XX"]

enunciado: "El año 1900 (exactamente 19×100) pertenece al siglo..."

pasos:
  - "Un año que termina exactamente en 00 pertenece al siglo anterior, no al siguiente."

explicacion: |
  1900 pertenece al siglo XIX; el siglo XX recién empieza en 1901.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["calculo_de_siglo", "caso_limite"]

variables:
  n: uno_de([1, 1])

respuesta: "XX"
tipo: mc
opciones_explicitas: ["XX", "XXI"]

enunciado: "El año 2000 (exactamente 20×100) pertenece al siglo..."

pasos:
  - "Mismo caso que 1900: un año que termina exactamente en 00 pertenece al siglo anterior."

explicacion: |
  2000 pertenece al siglo XX; el siglo XXI recién empieza en 2001.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["calculo_de_siglo"]

variables:
  n: uno_de([1, 1])

respuesta: "XXI"
tipo: mc
opciones_explicitas: ["XX", "XXI"]

enunciado: "El año 2001 pertenece al siglo..."

pasos:
  - "El nuevo siglo/milenio empieza en el año que termina en 1, no en 00."

explicacion: |
  2001 es el primer año del siglo XXI.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["calculo_de_siglo", "regla"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para saber a qué siglo pertenece un año, hay que dividirlo por 100 y sumar 1, salvo que el año termine exactamente en 00 (que pertenece al siglo indicado por esa división, sin sumar)."

pasos:
  - "Es la regla general descrita en la teoría, con su excepción para años terminados en 00."

explicacion: |
  Verdadero: es la regla completa para calcular el siglo a partir de
  cualquier año.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["notacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Por convención, los siglos se escriben en números romanos: siglo XV, siglo XX, siglo XXI."

pasos:
  - "Es la notación estándar en libros de historia."

explicacion: |
  Verdadero: es la convención de notación descrita en la teoría.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["decada", "nomenclatura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una década suele nombrarse por su primer año: \"los años 80\" se refiere a la década de 1980 a 1989."

pasos:
  - "Es la convención de nomenclatura de décadas descrita en la teoría."

explicacion: |
  Verdadero: es la convención habitual para nombrar décadas.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["escalas_de_tiempo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para analizar hechos puntuales conviene usar el año; para procesos, la década o el siglo; para grandes etapas de la humanidad, el milenio."

pasos:
  - "Es el principio de \"escala apropiada\" descrito en la teoría."

explicacion: |
  Verdadero: elegir la unidad de tiempo adecuada según lo que se
  analiza es una habilidad central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["siglo", "decada"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un siglo equivale exactamente a 10 décadas."

pasos:
  - "100 años / 10 años por década = 10 décadas."

explicacion: |
  Verdadero: es la relación numérica entre estas dos unidades.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["milenio", "siglo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un milenio equivale exactamente a 10 siglos."

pasos:
  - "1000 años / 100 años por siglo = 10 siglos."

explicacion: |
  Verdadero: es la relación numérica entre estas dos unidades.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["calculo_de_siglo", "practica"]

variables:
  anios: [1750, 1215, 1969]
  siglos: ["XVIII", "XIII", "XX"]
  idx: uno_de([0, 1, 2])

respuesta: siglos[idx]
tipo: mc
opciones_explicitas: ["XII", "XIII", "XVII", "XVIII", "XIX", "XX"]

enunciado: "El año {anios[idx]} pertenece al siglo..."

pasos:
  - "Dividir el año por 100 y redondear hacia arriba (salvo terminación exacta en 00)."

explicacion: |
  Aplicar la regla de cálculo de siglo a distintos años concretos es
  la práctica central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["milenio", "siglo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un milenio y un siglo son la misma unidad de tiempo, sólo con nombres distintos."

pasos:
  - "Un milenio (1000 años) es diez veces más largo que un siglo (100 años)."

explicacion: |
  Falso: son unidades de magnitud muy distinta, un milenio equivale a
  10 siglos.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["decada", "ambiguedad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Existe cierta ambigüedad técnica sobre si \"los años 80\" empiezan en 1980 o en 1981 (mismo problema que el cálculo de siglos), pero en el uso cotidiano se acepta la convención más simple de 1980-1989."

pasos:
  - "Es el mismo tipo de discusión técnica que la del inicio exacto de un siglo, mencionada como matiz en la teoría."

explicacion: |
  Verdadero: es un matiz técnico mencionado, aunque el uso cotidiano
  simplifica esta ambigüedad.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["utilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Hablar de \"la Revolución Industrial, siglo XVIII-XIX\" es mucho más manejable mentalmente que enumerar cada año del proceso."

pasos:
  - "Es la razón central de por qué existen estas unidades de agrupación temporal."

explicacion: |
  Verdadero: es la utilidad práctica central de década/siglo/milenio
  como unidades de agrupación.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["calculo_de_siglo", "metodo"]

enunciado: "Ordená los pasos para calcular a qué siglo pertenece un año dado."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el año termina exactamente en 00"
  - "Si termina en 00, dividir por 100 sin sumar nada más"
  - "Si no termina en 00, dividir por 100 y redondear hacia arriba (sumar 1 al resultado entero)"
  - "Expresar el resultado en números romanos, según la convención estándar"
respuesta_orden:
  - "Revisar si el año termina exactamente en 00"
  - "Si termina en 00, dividir por 100 sin sumar nada más"
  - "Si no termina en 00, dividir por 100 y redondear hacia arriba (sumar 1 al resultado entero)"
  - "Expresar el resultado en números romanos, según la convención estándar"

explicacion: |
  El proceso distingue el caso especial de años terminados en 00 del
  caso general, y cierra con la notación romana estándar.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dominar década, siglo y milenio es el prerrequisito directo de calcular intervalos que cruzan el año 0 (antes y después de Cristo)."

pasos:
  - "Ver `../antes-y-despues-de-cristo/`: antes de agregar la dificultad extra de la numeración que decrece hacia atrás, hace falta manejar bien estas unidades."

explicacion: |
  Verdadero: por eso este tema es prerrequisito directo del
  siguiente en la cadena.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["calculo_de_siglo", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al leer que un evento ocurrió \"a mediados del siglo XIX\", conviene poder traducir eso mentalmente a un rango aproximado de años (alrededor de 1850), en vez de sólo memorizar el número del siglo sin poder ubicarlo en años concretos."

pasos:
  - "Es la aplicación práctica de poder ir y venir entre años y siglos con soltura."

explicacion: |
  Verdadero: es la aplicación concreta de este tema para leer e
  interpretar textos históricos con fluidez.
```

## Sección: dimension-etica (20 preguntas)

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
respuesta_orden:
  - "Identificar quiénes tienen versiones legítimas pero parciales del hecho (víctimas, perpetradores, historiadores)"
  - "Preguntarse qué le debe la sociedad actual a las víctimas del hecho"
  - "Analizar las condiciones que hicieron posible el hecho, para pensar cómo evitar repetirlo"
  - "Revisar qué se recuerda y qué se olvida hoy sobre ese hecho, y por qué"

explicacion: |
  El proceso recorre las cuatro preguntas centrales de la dimensión
  ética descritas en la teoría, en un orden lógico de análisis.
```

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

## Sección: economias-regionales-tempranas (24 preguntas)

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["ley_aduanas", "urquiza", "proteccionismo"]

variables:
  anio: 1854

respuesta: "proteger la producción local"
tipo: completar

enunciado: "La Ley de Aduanas promulgada en {anio} por el gobierno de Justo José de Urquiza tenía como objetivo principal:"

explicacion: |
  La ley buscaba proteger la industria naciente y la producción local frente a la competencia extranjera, especialmente la británica.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["comercio_exterior", "britanicos"]

variables:
  pais: "británica"

respuesta: "británica"
tipo: completar

enunciado: "La Ley de Aduanas de 1854 buscaba proteger la producción local frente a la competencia de la industria {pais}."

explicacion: |
  La industria británica era la principal competidora en el mercado argentino de la época.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["litoral", "entre_rios", "corrientes"]

variables:
  regiones: "Entre Ríos y Corrientes"

respuesta: "Entre Ríos y Corrientes"
tipo: completar

enunciado: "Las provincias que más resistieron la Ley de Aduanas por considerar que amenazaba su autonomía económica fueron:"

explicacion: |
  Las provincias del Litoral, especialmente Entre Ríos y Corrientes, dependían más del comercio internacional y menos de la protección arancelaria.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["economia_litoral", "comercio"]

variables:
  caracteristica: "abierta"

respuesta: "abierta"
tipo: completar

enunciado: "La economía de las provincias del Litoral se caracterizaba por ser más {caracteristica} al comercio internacional."

explicacion: |
  A diferencia del centro del país, el Litoral tenía una economía más integrada y dependiente del comercio exterior.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["conflicto_armado", "causas"]

variables:
  causa: "Ley de Aduanas"

respuesta: "Ley de Aduanas"
tipo: completar

enunciado: "La resistencia a la {causa} se convirtió en el detonante de una nueva guerra civil entre la Confederación y el Litoral."

explicacion: |
  La aplicación estricta de la ley por Urquiza provocó la reacción armada de los caudillos litorales.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["lopez_jordan", "lideres"]

variables:
  lider: "Ricardo López Jordán"

respuesta: "Ricardo López Jordán"
tipo: completar

enunciado: "El gobernador entrerriano que lideró la resistencia contra la Ley de Aduanas fue:"

explicacion: |
  Ricardo López Jordán fue el principal líder de la oposición en Entre Ríos.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "avanzado"
  tags: ["ideologia", "descentralizacion"]

variables:
  vision: "descentralizada"

respuesta: "descentralizada"
tipo: completar

enunciado: "Los rebeldes del Litoral defendían una visión política más {vision}, donde las provincias tendrían mayor control sobre sus recursos."

explicacion: |
  Los caudillos litorales argumentaban a favor de una mayor autonomía provincial frente al centralismo confederado.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["exportaciones", "carne"]

variables:
  productos: "carne salada y cueros"

respuesta: "carne salada y cueros"
tipo: completar

enunciado: "En la década de 1850, las exportaciones de {productos} seguían siendo vitales para la economía argentina."

explicacion: |
  Aunque la industria nacía, la ganadería y sus derivados seguían siendo la base de las exportaciones.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["fiscalidad", "estado"]

variables:
  fin: "asegurar ingresos"

respuesta: "asegurar ingresos"
tipo: completar

enunciado: "Además de proteger la industria, la Ley de Aduanas buscaba {fin} para el Estado nacional."

explicacion: |
  El Estado nacional necesitaba recursos fiscales para estructurarse tras la caída de Rosas.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "avanzado"
  tags: ["soberania", "comercio"]

variables:
  objetivo_confederacion: "soberanía sobre el comercio exterior"

respuesta: "soberanía sobre el comercio exterior"
tipo: completar

enunciado: "Mientras la Confederación buscaba consolidar la {objetivo_confederacion}, los rebeldes defendían la autonomía provincial."

explicacion: |
  El conflicto fue también una disputa sobre quién controlaba las tarifas y el comercio exterior.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["confederacion", "estructuracion"]

variables:
  estado: "recién comenzaba a estructurarse"

respuesta: "recién comenzaba a estructurarse"
tipo: completar

enunciado: "La Ley de Aduanas se promulgó cuando el Estado nacional {estado} tras la caída de Rosas."

explicacion: |
  El nuevo orden constitucional estaba frágil y necesitaba consolidar su autoridad fiscal.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["percepcion", "amenaza"]

variables:
  percepcion: "amenaza directa"

respuesta: "amenaza directa"
tipo: completar

enunciado: "Los caudillos litorales percibieron la Ley de Aduanas como una {percepcion} a su autonomía y prosperidad."

explicacion: |
  La ley fue vista no como una medida técnica, sino como un ataque político y económico.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "avanzado"
  tags: ["consecuencias", "guerra"]

variables:
  resultado: "no se resolvió con una victoria clara inmediata"

respuesta: "no se resolvió con una victoria clara inmediata"
tipo: completar

enunciado: "La guerra entre la Confederación y el Litoral {resultado}, dejando un legado de desconfianza."

explicacion: |
  El conflicto prolongado debilitó la legitimidad del gobierno de Urquiza sin definir una supremacía clara de inmediato.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["acuerdos", "federalismo"]

variables:
  argumento: "violaba los acuerdos federales"

respuesta: "violaba los acuerdos federales"
tipo: completar

enunciado: "Los rebeldes argumentaban que la ley {argumento} y perjudicaba sus economías locales."

explicacion: |
  La imposición unilateral de tarifas fue vista como una violación de los pactos federativos.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["diplomacia", "conflicto"]

variables:
  evento: "rompimiento de relaciones"

respuesta: "rompimiento de relaciones"
tipo: completar

enunciado: "La situación escaló rápidamente, llevando al {evento} diplomáticas entre el gobierno nacional y el Litoral."

explicacion: |
  La tensión económica derivó en una crisis política y diplomática abierta.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["rosas", "urquiza", "control"]

variables:
  control_rosas: "control absoluto"

respuesta: "control absoluto"
tipo: completar

enunciado: "La tensión se generó aunque la capital ya no tuviera el {control_rosas} que había tenido bajo Rosas."

explicacion: |
  Urquiza intentaba centralizar el poder que Rosas había ejercido desde Buenos Aires, pero con menos fuerza coercitiva inicial.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "avanzado"
  tags: ["constitucion", "fragilidad"]

variables:
  problema: "fragilidad del nuevo orden constitucional"

respuesta: "fragilidad del nuevo orden constitucional"
tipo: completar

enunciado: "El conflicto puso de manifiesto la {problema} y la dificultad de integrar intereses dispares."

explicacion: |
  La incapacidad de resolver el conflicto fiscal mostró los límites del nuevo marco legal.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "avanzado"
  tags: ["integracion", "economia"]

variables:
  desafio: "integrar intereses económicos tan dispares"

respuesta: "integrar intereses económicos tan dispares"
tipo: completar

enunciado: "El gran desafío del momento era {desafio} bajo un mismo marco legal."

explicacion: |
  Los intereses de Buenos Aires/Confederación y los del Litoral eran económicamente antagónicos en términos arancelarios.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["tarifas", "proteccionismo"]

variables:
  politica: "tarifas altas"

respuesta: "tarifas altas"
tipo: completar

enunciado: "La Ley de Aduanas imponía {politica} a las importaciones para proteger la industria local."

explicacion: |
  El proteccionismo se lograba mediante barreras arancelarias elevadas.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["regulacion", "comercio_exterior"]

variables:
  accion: "regular el comercio exterior"

respuesta: "regular el comercio exterior"
tipo: completar

enunciado: "Además de las tarifas, la ley buscaba {accion} bajo el control del Estado nacional."

explicacion: |
  La centralización del comercio exterior era clave para la soberanía nacional.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["litoral", "economia"]

variables:
  valor: "falso"

respuesta: falso
tipo: vf

enunciado: "Las provincias del Litoral dependían más de la protección arancelaria que el centro del país."

explicacion: |
  Falso. El Litoral tenía una economía más abierta y dependía menos de la protección que el centro.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["guerra", "resultado"]

variables:
  valor: "falso"

respuesta: falso
tipo: vf

enunciado: "La guerra entre la Confederación y el Litoral se resolvió con una victoria clara inmediata."

explicacion: |
  Falso. El conflicto dejó un legado de desconfianza y no tuvo un ganador claro de inmediato.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["urquiza", "aplicacion"]

variables:
  valor: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Justo José de Urquiza intentó aplicar la Ley de Aduanas de manera estricta."

explicacion: |
  Verdadero. Su estricta aplicación fue el detonante de la rebelión litoraleña.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["industria", "proteccion"]

variables:
  valor: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "La Ley de Aduanas buscaba fomentar la industria naciente argentina."

explicacion: |
  Verdadero. El proteccionismo arancelario tenía como fin desarrollar la manufactura local.
```

## Sección: escuela-de-los-annales (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "basico"
  tags: ["escuela_de_los_annales", "criterio_central"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Escuela de los Annales propone mirar la historia a través de estructuras de larga duración: clima, geografía, demografía, economía."

pasos:
  - "En vez de centrarse en sucesos puntuales de reyes y batallas."

explicacion: |
  Verdadero: es el criterio central de esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["contexto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Escuela de los Annales se llama así por la revista académica Annales donde publicaban sus fundadores, en Francia, durante el siglo XX."

pasos:
  - "Es el origen del nombre de esta corriente historiográfica."

explicacion: |
  Verdadero: es el origen del nombre de esta escuela.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["marc_bloch"]

variables:
  n: uno_de([1, 1])

respuesta: "Bloch"
tipo: completar

enunciado: "Uno de los fundadores de la Escuela de los Annales, autor de \"Apología para la historia\", se apellida..."

pasos:
  - "Marc Bloch es uno de los referentes centrales de esta corriente."

explicacion: |
  Bloch es autor central de esta corriente historiográfica.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["marc_bloch", "contexto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Apología para la historia\" de Marc Bloch se publicó póstumamente en 1949, después de que Bloch fuera fusilado por la resistencia francesa contra la ocupación nazi."

pasos:
  - "Es un dato histórico sobre las circunstancias de publicación de esta obra clásica."

explicacion: |
  Verdadero: es el contexto histórico de la publicación de esta obra
  fundamental de la corriente.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["fernand_braudel"]

variables:
  n: uno_de([1, 1])

respuesta: "Braudel"
tipo: completar

enunciado: "El historiador de la Escuela de los Annales que propuso distinguir tres ritmos distintos de cambio histórico se apellida..."

pasos:
  - "Fernand Braudel es otro referente central de esta corriente."

explicacion: |
  Braudel es autor central de esta corriente, referente de los tres
  niveles de tiempo histórico.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["larga_duracion"]

variables:
  n: uno_de([1, 1])

respuesta: "larga duración"
tipo: mc
opciones_explicitas: ["larga duración", "coyunturas", "acontecimientos"]

enunciado: "El nivel de tiempo histórico que abarca estructuras casi inmóviles (geografía, clima) que cambian en siglos o milenios se llama..."

pasos:
  - "Es el nivel más lento de los tres propuestos por Braudel."

explicacion: |
  La larga duración es el nivel de cambio más lento de los tres
  ritmos propuestos por Braudel.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["coyunturas"]

variables:
  n: uno_de([1, 1])

respuesta: "coyunturas"
tipo: mc
opciones_explicitas: ["larga duración", "coyunturas", "acontecimientos"]

enunciado: "El nivel de tiempo histórico que abarca ciclos económicos y sociales de mediano plazo (décadas) se llama..."

pasos:
  - "Es el nivel intermedio de los tres propuestos por Braudel."

explicacion: |
  Las coyunturas son el nivel intermedio de cambio, de duración
  media (décadas).
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["acontecimientos"]

variables:
  n: uno_de([1, 1])

respuesta: "acontecimientos"
tipo: mc
opciones_explicitas: ["larga duración", "coyunturas", "acontecimientos"]

enunciado: "El nivel de tiempo histórico que abarca los hechos puntuales (batallas, tratados), llamado por Braudel la \"espuma\" de la historia, se llama..."

pasos:
  - "Es el nivel más rápido y visible, pero según Braudel menos determinante."

explicacion: |
  Los acontecimientos son el nivel más rápido y visible, pero para
  Braudel el menos determinante de los tres.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["acontecimientos", "metafora"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Braudel describió a los acontecimientos como la \"espuma\" superficial de la historia: la parte más visible pero menos determinante."

pasos:
  - "Es la metáfora central usada por Braudel para describir la relación entre los tres niveles de tiempo."

explicacion: |
  Verdadero: es la metáfora central que usa Braudel para jerarquizar
  los tres niveles de tiempo histórico.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["niveles_de_tiempo", "orden"]

enunciado: "Ordená los tres niveles de tiempo histórico de Braudel, del más lento al más rápido."
tipo: ordenar
opciones_explicitas:
  - "Larga duración"
  - "Coyunturas"
  - "Acontecimientos"
respuesta_orden:
  - "Larga duración"
  - "Coyunturas"
  - "Acontecimientos"

explicacion: |
  El orden va de las estructuras casi inmóviles (siglos/milenios) a
  los ciclos de mediano plazo (décadas) y finalmente a los hechos
  puntuales (días/años).
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["estructuras"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según la Escuela de los Annales, el clima, la geografía y la demografía de una región condicionan durante siglos qué es posible o probable en esa sociedad, más allá de qué rey gobierne en un momento dado."

pasos:
  - "Es la justificación central de por qué esta corriente prioriza las estructuras de larga duración."

explicacion: |
  Verdadero: es la razón central por la que esta corriente considera
  más determinantes las estructuras que los sucesos puntuales.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["materialismo_historico", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El materialismo histórico prioriza específicamente relaciones de clase y producción; la Escuela de los Annales incluye también factores geográficos y climáticos, no ligados directamente al conflicto de clases."

pasos:
  - "Ver `../materialismo-historico/`: es la diferencia de foco entre estas dos corrientes que ambas miran \"estructuras\"."

explicacion: |
  Verdadero: aunque ambas corrientes miran estructuras en vez de
  grandes figuras, difieren en qué tipo de estructuras priorizan.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["materialismo_historico", "positivismo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Tanto el materialismo histórico como la Escuela de los Annales se apartan del foco en grandes figuras y hechos puntuales, propio del positivismo."

pasos:
  - "Ver `../positivismo/`: es el contraste común de ambas corrientes con la primera de la subrama."

explicacion: |
  Verdadero: ambas corrientes comparten esa distancia respecto del
  enfoque positivista, aunque prioricen estructuras distintas.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["niveles_de_tiempo", "practica"]

variables:
  ejemplos: ["la firma de un tratado de paz en un año específico", "el clima de una región que condicionó su agricultura durante siglos"]
  niveles: ["acontecimientos", "larga duración"]
  idx: uno_de([0, 1])

respuesta: niveles[idx]
tipo: mc
opciones_explicitas: ["larga duración", "coyunturas", "acontecimientos"]

enunciado: "\"{ejemplos[idx]}\" corresponde al nivel de tiempo histórico de..."

pasos:
  - "Un hecho puntual es acontecimiento; un factor que cambia en siglos es larga duración."

explicacion: |
  Clasificar un ejemplo según su ritmo de cambio (siglos, décadas o
  puntual) es la aplicación central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["acontecimientos", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Escuela de los Annales no ignora por completo los acontecimientos puntuales, sino que los considera menos determinantes que las estructuras de fondo, sin eliminarlos del análisis."

pasos:
  - "Es un matiz importante: la jerarquía entre los tres niveles no significa descartar por completo el nivel de los acontecimientos."

explicacion: |
  Verdadero: es un matiz importante sobre la relación entre los tres
  niveles de tiempo propuestos por Braudel.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada corriente historiográfica es un modelo distinto de qué causas priorizar al explicar un hecho histórico — por eso este tema depende de multicausalidad en el MAPA."

pasos:
  - "Ver `../multicausalidad/`: es el prerrequisito directo de este tema y sus tres hermanos."

explicacion: |
  Verdadero: es la misma conexión conceptual ya vista en las
  corrientes anteriores de esta subrama.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["larga_duracion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que un pueblo se haya desarrollado alrededor de un río navegable durante siglos, condicionando su comercio y su forma de organización social, es un ejemplo de análisis desde la larga duración de los Annales."

pasos:
  - "Es la aplicación práctica del foco en geografía como estructura de larga duración."

explicacion: |
  Verdadero: es un ejemplo concreto de análisis desde la perspectiva
  de la larga duración de esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["escuela_de_los_annales", "metodo"]

enunciado: "Ordená los pasos para reconocer si un texto histórico sigue el enfoque de la Escuela de los Annales."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el foco está en estructuras de larga duración (clima, geografía, demografía)"
  - "Identificar si se distinguen distintos ritmos de cambio (larga duración, coyunturas, acontecimientos)"
  - "Revisar si los sucesos puntuales se tratan como menos determinantes que las estructuras de fondo"
  - "Concluir si el texto corresponde al enfoque de la Escuela de los Annales"
respuesta_orden:
  - "Revisar si el foco está en estructuras de larga duración (clima, geografía, demografía)"
  - "Identificar si se distinguen distintos ritmos de cambio (larga duración, coyunturas, acontecimientos)"
  - "Revisar si los sucesos puntuales se tratan como menos determinantes que las estructuras de fondo"
  - "Concluir si el texto corresponde al enfoque de la Escuela de los Annales"

explicacion: |
  El análisis va del foco temático a la jerarquía de niveles de
  tiempo, para concluir si corresponde a esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Escuela de los Annales es la tercera de las cuatro corrientes historiográficas de esta subrama, hermana de positivismo, materialismo histórico e historia cultural."

pasos:
  - "Ver `../positivismo/`, `../materialismo-historico/` y `../historia-cultural/`: los cuatro nodos hermanos dependen de `../multicausalidad/`."

explicacion: |
  Verdadero: es la relación entre este tema y los otros tres de la
  subrama.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["escuela_de_los_annales", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al leer un libro de historia centrado en cómo el clima y la geografía de una región condicionaron su desarrollo económico y social a lo largo de siglos, conviene reconocer que está aplicando un enfoque cercano a la Escuela de los Annales."

pasos:
  - "Es la aplicación práctica directa de este tema al leer críticamente un texto histórico real."

explicacion: |
  Verdadero: es la aplicación concreta de este tema para reconocer el
  enfoque historiográfico de un texto real.
```

## Sección: evidencia (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "basico"
  tags: ["evidencia", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Toda afirmación histórica debe apoyarse en evidencia (fuentes que la respalden); sin evidencia, es sólo una opinión o especulación."

pasos:
  - "No importa qué tan razonable suene una afirmación, sin evidencia no es un aporte histórico riguroso."

explicacion: |
  Verdadero: es el punto de partida central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["alcance"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este tema no repite qué es fuente primaria vs. secundaria, ya visto en interpretar una fuente histórica; profundiza específicamente en criterios de confiabilidad."

pasos:
  - "Ver `../interpretar-una-fuente-historica/`: es la aclaración de alcance central de este tema."

explicacion: |
  Verdadero: es la delimitación de alcance explícita entre estos dos
  temas relacionados.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["criterios_de_confiabilidad", "cercania_a_hechos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En general, una fuente primaria contemporánea a los hechos es más confiable para reconstruir detalles concretos que una fuente muy posterior basada en memoria o tradición oral distante."

pasos:
  - "Es uno de los criterios de confiabilidad mencionados en la teoría, aunque no es una regla absoluta."

explicacion: |
  Verdadero: es el criterio de cercanía a los hechos, con el matiz de
  que \"en general\" no es una regla sin excepciones.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["criterios_de_confiabilidad", "independencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si varias fuentes independientes entre sí (que no se copiaron unas a otras) coinciden en un dato, ese dato es más confiable que si viene de una sola fuente aislada."

pasos:
  - "Es otro de los criterios de confiabilidad mencionados en la teoría."

explicacion: |
  Verdadero: la coincidencia entre fuentes independientes es un
  criterio central de confiabilidad.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["criterios_de_confiabilidad", "consistencia_interna"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una fuente que se contradice a sí misma es menos confiable que una internamente coherente."

pasos:
  - "Es otro de los criterios de confiabilidad mencionados en la teoría."

explicacion: |
  Verdadero: la consistencia interna es un criterio básico para
  evaluar la confiabilidad de una fuente.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["criterios_de_confiabilidad", "conflicto_de_interes"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una fuente producida por alguien con un interés directo en cómo se cuentan los hechos (un gobierno hablando de su propio desempeño) necesita contrastarse con más cuidado que una fuente sin ese interés directo."

pasos:
  - "Es otro de los criterios de confiabilidad mencionados en la teoría."

explicacion: |
  Verdadero: el conflicto de interés es un factor central a
  considerar al evaluar la confiabilidad de una fuente.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["criterios_de_confiabilidad", "corroboracion_material"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La evidencia material (restos arqueológicos, registros no narrativos como censos o recibos), cuando existe, puede confirmar o contradecir lo que dicen las fuentes narrativas."

pasos:
  - "Es otro de los criterios de confiabilidad mencionados en la teoría."

explicacion: |
  Verdadero: la corroboración con evidencia material es un criterio
  adicional de confiabilidad, distinto de las fuentes narrativas.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["confiabilidad_gradual"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La confiabilidad de una fuente no es binaria (confiable/no confiable), sino una cuestión de grado que varía según para qué se usa la fuente."

pasos:
  - "Una fuente muy sesgada puede seguir siendo confiable para reconstruir hechos puntuales verificables, aunque no para reconstruir motivaciones."

explicacion: |
  Verdadero: es un matiz central sobre la naturaleza gradual de la
  confiabilidad.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["confiabilidad_gradual", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una carta muy sesgada políticamente puede seguir siendo confiable para confirmar una fecha o un nombre concreto, aunque no lo sea para reconstruir las motivaciones políticas de quien la escribió."

pasos:
  - "Es la aplicación práctica de que la confiabilidad varía según para qué se usa la fuente."

explicacion: |
  Verdadero: es un ejemplo concreto de por qué la confiabilidad no es
  un juicio único sobre toda la fuente en bloque.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["triangulacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La triangulación consiste en cruzar información de varias fuentes de tipo distinto (documentos, testimonios, evidencia material) para ver si coinciden."

pasos:
  - "Es la estrategia central para evaluar evidencia descrita en la teoría."

explicacion: |
  Verdadero: es la definición central de triangulación en este tema.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["triangulacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuantas más fuentes independientes coincidan en un dato, más confiable es esa reconstrucción del pasado."

pasos:
  - "Es la conclusión central de por qué la triangulación es la estrategia más sólida."

explicacion: |
  Verdadero: es el principio central de la triangulación como
  estrategia de evaluación de evidencia.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["criterios_de_confiabilidad", "practica"]

variables:
  situaciones: ["tres cronistas de distintos países, sin contacto entre sí, describen la misma batalla con detalles coincidentes", "una carta que primero dice que el rey estaba en la capital y más adelante dice que estaba de viaje ese mismo día"]
  criterios: ["independencia de la fuente", "consistencia interna (ausente)"]
  idx: uno_de([0, 1])

respuesta: criterios[idx]
tipo: mc
opciones_explicitas: ["independencia de la fuente", "consistencia interna (ausente)", "conflicto de interés", "corroboración material"]

enunciado: "\"{situaciones[idx]}\" es un ejemplo relacionado con el criterio de..."

pasos:
  - "Fuentes distintas que coinciden sin contacto entre sí: independencia. Una fuente que se contradice: falta de consistencia interna."

explicacion: |
  Reconocer qué criterio de confiabilidad aplica a un caso concreto
  es la práctica central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Evaluar la confiabilidad de una fuente reusa el mismo tipo de escrutinio que exige establecer una relación causal con evidencia real, no sólo cercanía temporal."

pasos:
  - "Ver `../causa-y-consecuencia/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["big_six"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Evidencia es uno de los 6 conceptos del marco \"Big Six\" de pensamiento histórico, junto a causa/consecuencia y significancia histórica."

pasos:
  - "Ver `../causa-y-consecuencia/` y `../significancia-historica/`: son otros conceptos de ese mismo marco."

explicacion: |
  Verdadero: es el mismo marco teórico ya mencionado en varios temas
  de esta cadena.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["confiabilidad_gradual"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Incluso una fuente muy sesgada o parcial suele aportar algún tipo de información confiable, aunque haya que contrastarla con cuidado."

pasos:
  - "Es coherente con la idea de que la confiabilidad es una cuestión de grado, no un juicio absoluto."

explicacion: |
  Verdadero: es la aplicación práctica de que ninguna fuente es
  completamente confiable ni completamente inútil.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["cercania_a_hechos", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Una fuente contemporánea a los hechos es SIEMPRE más confiable que una fuente posterior, sin ninguna excepción."

pasos:
  - "La teoría marca explícitamente \"en general, no siempre\": una fuente contemporánea puede estar igualmente sesgada o incluso más comprometida con los hechos que una posterior con perspectiva."

explicacion: |
  Falso: es una tendencia general, no una regla absoluta sin
  excepciones.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["corroboracion_material", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si una crónica narrativa afirma que una ciudad tenía cierta cantidad de habitantes, y los restos arqueológicos disponibles contradicen esa cifra, la evidencia material puede llevar a reconsiderar la confiabilidad de la crónica en ese punto."

pasos:
  - "Es la aplicación práctica de por qué la corroboración material es un criterio útil de confiabilidad."

explicacion: |
  Verdadero: es un ejemplo concreto de cómo la evidencia material
  puede confirmar o contradecir fuentes narrativas.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["evidencia", "metodo"]

enunciado: "Ordená los pasos para evaluar la confiabilidad de una fuente histórica, después de ya clasificarla como primaria o secundaria."
tipo: ordenar
opciones_explicitas:
  - "Revisar si la fuente es internamente consistente, sin contradecirse"
  - "Revisar si hay un conflicto de interés evidente en quien la produjo"
  - "Buscar otras fuentes independientes que confirmen o contradigan el mismo dato"
  - "Contrastar, si existe, con evidencia material disponible"
respuesta_orden:
  - "Revisar si la fuente es internamente consistente, sin contradecirse"
  - "Revisar si hay un conflicto de interés evidente en quien la produjo"
  - "Buscar otras fuentes independientes que confirmen o contradigan el mismo dato"
  - "Contrastar, si existe, con evidencia material disponible"

explicacion: |
  El proceso aplica sucesivamente los criterios de confiabilidad
  descritos en la teoría, terminando con la triangulación completa.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["evidencia", "significancia_historica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Evidencia (qué tan confiable es una fuente) y significancia histórica (qué del pasado vale la pena estudiar) son dos conceptos hermanos del marco Big Six, complementarios pero distintos entre sí."

pasos:
  - "Ver `../significancia-historica/`: ambos cuelgan de puntos distintos de la misma cadena de pensamiento histórico."

explicacion: |
  Verdadero: son dos preguntas distintas (qué estudiar vs. cómo saber
  si es confiable lo que se encuentra) que se complementan en la
  investigación histórica.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["evidencia", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al leer una fuente histórica sobre un tema controvertido, conviene aplicar la triangulación: buscar otras fuentes independientes que confirmen o contradigan la información, en vez de aceptar una sola fuente como suficiente."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al analizar
  cualquier fuente histórica real, especialmente sobre temas
  controvertidos.
```
