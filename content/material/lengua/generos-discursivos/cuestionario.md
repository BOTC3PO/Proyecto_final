# Lengua — generos discursivos (cuestionario, 41 preguntas VBLang)

> Tema: `lengua/generos-discursivos`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["generos_primarios", "identificacion"]

variables:
  genero: uno_de(["conversacion telefonica", "chiste entre amigos", "orden simple"])

respuesta: genero
tipo: input

enunciado: "¿Cuál de los siguientes es un ejemplo de género discursivo PRIMARIO, surgido espontáneamente en la interacción cotidiana?"

explicacion: |
  Los géneros primarios son intercambios básicos de la vida diaria, como conversaciones telefónicas, chistes entre amigos o órdenes simples, que surgen de manera espontánea y no están mediadas por instituciones complejas.
```

### 2 — pregunta 2

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["generos_secundarios", "caracteristicas"]

variables:
  caracteristica: uno_de(["estructura flexible", "interacción inmediata", "sistematización compleja"])

respuesta: caracteristica
tipo: input

enunciado: "Los géneros discursivos secundarios se caracterizan por ser más complejos y desarrollarse en ámbitos organizados. ¿Cuál es una característica clave de estos géneros?"

explicacion: |
  A diferencia de los primarios, los géneros secundarios se construyen sobre bases primarias pero las transforman y sistematizan, requiriendo normas estrictas y planificación cuidadosa (ej. informes, ensayos).
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["funcion_social", "comunicacion"]

variables:
  funcion: uno_de(["guia social", "categoria rigida", "modelo literario"])

respuesta: funcion
tipo: input

enunciado: "Los géneros discursivos actúan como '{funcion}' que nos ayudan a navegar situaciones de la vida cotidiana y profesional."

explicacion: |
  Los géneros discursivos no son categorías rígidas, sino modelos compartidos que funcionan como guías sociales para asegurar que el texto sea comprendido y tenga el impacto deseado en cada contexto.
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["registro", "aplicacion"]

variables:
  situacion: uno_de(["trabajo academico", "anecdota con amigos"])
  registro: "formal"
  registro_inverso: "coloquial"

respuesta: registro
tipo: input

enunciado: "Si intentamos escribir un '{situacion}' utilizando el lenguaje coloquial de un mensaje de WhatsApp, el mensaje puede perderse. ¿Qué tipo de registro sería más adecuado para un trabajo académico?"

explicacion: |
  Para un trabajo académico, se requiere un registro formal. Usar un registro coloquial (como en WhatsApp) en contextos formales puede llevar a malentendidos o falta de seriedad percibida.
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["generos_secundarios", "ejemplos"]

variables:
  genero: uno_de(["noticia de prensa", "conversacion telefonica", "discusion familiar"])

respuesta: genero
tipo: input

enunciado: "¿Cuál de los siguientes es un ejemplo claro de género discursivo SECUNDARIO, desarrollado en ámbitos organizados?"

explicacion: |
  La noticia de prensa es un género secundario porque toma elementos de la interacción primaria pero los organiza bajo normas estrictas de objetividad y estructura, a diferencia de la conversación telefónica o la discusión familiar que son primarios.
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["generos_primarios", "estructura"]

variables:
  tipo_estructura: uno_de(["flexible", "estricta", "piramidal"])

respuesta: tipo_estructura
tipo: input

enunciado: "La estructura de los géneros discursivos primarios suele ser '{tipo_estructura}' y su propósito es la interacción inmediata."

explicacion: |
  Los géneros primarios, al surgir de la interacción cotidiana espontánea, tienen una estructura flexible, a diferencia de los secundarios que suelen tener estructuras más definidas y rígidas.
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["relacion_generos", "construccion"]

variables:
  relacion: uno_de(["se construyen sobre la base de los primarios", "son independientes de los primarios", "reemplazan totalmente a los primarios"])

respuesta: relacion
tipo: input

enunciado: "Los géneros secundarios '{relacion}', pero los transforman y sistematizan."

explicacion: |
  Los géneros secundarios no surgen de la nada; se desarrollan sobre la base de los géneros primarios (interacciones básicas) pero les añaden complejidad, normas y sistematización.
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["estructura", "tono"]

variables:
  elemento: uno_de(["vocabulario", "tono", "estructura"])

respuesta: elemento
tipo: input

enunciado: "Cada género discursivo tiene una estructura, un '{elemento}' y un tono propios que nos indican cómo debemos comunicarnos en cada situación."

explicacion: |
  Cada género define no solo la estructura, sino también el vocabulario específico y el tono adecuado (formal, informal, técnico, etc.) para su uso correcto.
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["generos_primarios", "proposito"]

variables:
  proposito: uno_de(["interaccion inmediata", "sistematizacion", "verificacion de datos"])

respuesta: proposito
tipo: input

enunciado: "El propósito principal de los géneros discursivos primarios es la '{proposito}'."

explicacion: |
  Los géneros primarios están diseñados para la interacción directa y cotidiana, sin la necesidad de una planificación extensa o normas estrictas.
```

### 10 — pregunta 10

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["generos_secundarios", "proposito"]

variables:
  proposito: uno_de(["comunicacion informal", "planificacion cuidadosa", "interaccion espontanea"])

respuesta: proposito
tipo: input

enunciado: "Los géneros secundarios requieren un '{proposito}' que va más allá del intercambio espontáneo."

explicacion: |
  Los géneros secundarios, al ser más complejos y estar ligados a ámbitos institucionales, requieren una planificación cuidadosa y un conocimiento especializado.
```

### 11 — pregunta 11

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["definicion", "completar"]

variables:
  palabra1: "tipos"
  palabra2: "textos"
  palabra3: "funcion"
  palabra4: "social"

respuesta: palabra1
tipo: completar

enunciado: "Los géneros discursivos son los {palabra1} de textos que utilizamos habitualmente para cumplir con una {palabra4} específica."

explicacion: |
  Los géneros discursivos son los *tipos* de textos que usamos para cumplir funciones sociales. No son categorías literarias rígidas, sino modelos de uso común.
```

### 12 — pregunta 12

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["ejemplo", "transformacion"]

variables:
  genero1: "conversacion"
  genero2: "noticia"

respuesta: genero2
tipo: completar

enunciado: "Una '{genero2}' de prensa toma elementos de una '{genero1}' o un reporte informal, pero los organiza bajo normas de objetividad."

explicacion: |
  La *noticia* de prensa es un género secundario que transforma elementos de la *conversación* o reporte informal primario mediante la aplicación de normas estrictas.
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["registro", "completar"]

variables:
  palabra1: "perderse"
  palabra2: "malinterpretado"

respuesta: palabra1
tipo: completar

enunciado: "Si usamos lenguaje coloquial en un contexto formal, el mensaje puede {palabra1} o ser {palabra2}."

explicacion: |
  El uso inadecuado del registro puede hacer que el mensaje se *pierda* o sea *malinterpretado*, ya que no se ajusta a las expectativas del género discursivo esperado.
```

### 14 — pregunta 14

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["comparacion", "primario_secundario"]

respuesta: falso
tipo: vf

enunciado: "Los géneros primarios y secundarios tienen la misma estructura rígida y formal."

explicacion: |
  Falso. Los géneros primarios suelen tener una estructura flexible y surgen de la interacción espontánea, mientras que los secundarios son más complejos y sistematizados.
```

### 15 — pregunta 15

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["vocabulario", "especializado"]

respuesta: falso
tipo: vf

enunciado: "Todos los géneros discursivos utilizan el mismo vocabulario estándar sin variaciones."

explicacion: |
  Falso. Cada género tiene un vocabulario propio que depende del contexto y la comunidad, como el lenguaje técnico en informes o el coloquial en chats.
```

### 16 — pregunta 16

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "avanzado"
  tags: ["naturaleza", "dinamica"]

respuesta: falso
tipo: vf

enunciado: "Los géneros discursivos son categorías rígidas e inmutables que no cambian con el tiempo."

explicacion: |
  Falso. Los géneros son modelos que se construyen y comparten a lo largo del tiempo, adaptándose a las necesidades de la comunidad.
```

### 17 — pregunta 17

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["efectividad", "comunicacion"]

respuesta: verdadero
tipo: vf

enunciado: "Usar el género discursivo adecuado aumenta la efectividad y precisión del mensaje."

explicacion: |
  Verdadero. Entender y usar el género correcto asegura que el texto sea comprendido y tenga el impacto deseado en la situación dada.
```

### 18 — pregunta 18

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["tono", "situacion"]

respuesta: falso
tipo: vf

enunciado: "El tono de un género discursivo es siempre el mismo, independientemente de la situación."

explicacion: |
  Falso. El tono varía según la situación y el género; lo que es apropiado en una conversación familiar puede ser inapropiado en un informe legal.
```

### 19 — pregunta 19

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["adaptacion", "registro"]

respuesta: verdadero
tipo: vf

enunciado: "Debemos adaptar nuestro lenguaje al género discursivo adecuado para evitar malentendidos."

explicacion: |
  Verdadero. Usar el género incorrecto (ej. coloquial en un trabajo académico) puede llevar a que el mensaje se pierda o sea malinterpretado.
```

### 20 — pregunta 20

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["generos_primarios", "identificacion"]

variables:
  genero: uno_de(["conversacion_familiar", "orden_de_trabajo", "chiste_entre_amigos"])

respuesta: genero
tipo: input

enunciado: "¿Cuál de los siguientes es un ejemplo clásico de género discursivo PRIMARIO?"

explicacion: |
  Los géneros primarios surgen espontáneamente en la interacción cotidiana directa. La conversación familiar, la orden de trabajo o el chiste entre amigos cumplen con esta definición, a diferencia de textos más complejos como noticias o ensayos.
```

### 21 — pregunta 21

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["definicion", "flexibilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Los géneros discursivos son categorías rígidas e inmutables que no cambian con el tiempo ni con la comunidad."

explicacion: |
  Falso. Los géneros discursivos son modelos que se construyen y comparten dentro de una comunidad a lo largo del tiempo, adaptándose a las necesidades comunicativas de cada contexto.
```

### 22 — pregunta 22

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["primarios", "secundarios", "comparacion"]

variables:
  correcta: uno_de(["interaccion_cotidiana", "sistematizacion_institucional"])
  distractor1: "rigidez_formal"
  distractor2: "ausencia_de_estructura"

respuesta: correcta
tipo: mc
opciones_explicitas: [distractor1, distractor2, correcta, distractor1]

enunciado: "La diferencia fundamental entre géneros primarios y secundarios radica en:"

explicacion: |
  Los primarios se basan en la interacción cotidiana y espontánea, mientras que los secundarios están sistematizados por instituciones complejas como la escuela, la ciencia o la administración.
```

### 23 — pregunta 23

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["secundarios", "ejemplos"]

variables:
  correcta: uno_de(["noticia", "ensayo_cientifico", "informe_legal"])
  distractor1: "conversacion_telefonica"
  distractor2: "chiste"

respuesta: correcta
tipo: mc
opciones_explicitas: [distractor1, distractor2, correcta, distractor2]

enunciado: "¿Cuál de los siguientes es un ejemplo de género discursivo SECUNDARIO?"

explicacion: |
  La noticia, el ensayo científico y el informe legal son géneros secundarios porque se desarrollan en ámbitos organizados y requieren normas estrictas. La conversación y el chiste son primarios.
```

### 24 — pregunta 24

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["registro", "efectividad"]

variables:
  genero_formal: uno_de(["informe_escolar", "carta_de_presentacion"])
  genero_informal: uno_de(["mensaje_whatsapp", "chiste"])
  contexto: uno_de(["academico", "profesional"])
  registro: uno_de(["formal", "coloquial"])

respuesta: registro
tipo: input

enunciado: "Si debes escribir un {genero_formal} en un contexto {contexto}, ¿qué registro debes evitar?"

explicacion: |
  Debes evitar el registro coloquial o informal, ya que el género formal requiere precisión y adecuación al contexto institucional o académico.
```

### 25 — pregunta 25

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["estructura", "primarios"]

respuesta: verdadero
tipo: vf

enunciado: "Los géneros discursivos primarios suelen tener una estructura flexible y un propósito de interacción inmediata."

explicacion: |
  Verdadero. Al ser espontáneos y cotidianos, no están sujetos a las normas rígidas de los géneros secundarios, permitiendo mayor flexibilidad estructural.
```

### 26 — pregunta 26

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["construccion", "relacion"]

variables:
  correcta: "generos_primarios"
  distractor1: "normas_lingüisticas"
  distractor2: "diccionarios"

respuesta: correcta
tipo: mc
opciones_explicitas: [distractor1, distractor2, correcta, distractor1]

enunciado: "Los géneros secundarios se construyen sobre la base de:"

explicacion: |
  Los géneros secundarios toman elementos de los géneros primarios (como la conversación o el reporte informal) y los transforman mediante la sistematización institucional.
```

### 27 — pregunta 27

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["identificacion", "secundarios"]

variables:
  genero: uno_de(["noticia_prensa", "novela", "ensayo"])
  caracteristica: uno_de(["objetividad", "ficción_narrativa", "argumentacion"])

respuesta: genero
tipo: input

enunciado: "Si un texto se caracteriza por la {caracteristica} y la verificación de datos en un ámbito organizado, ¿qué género secundario es más probable?"

explicacion: |
  La noticia de prensa se caracteriza por la objetividad y la verificación de datos. La novela implica ficción y el ensayo argumentación, pero la descripción encaja mejor con la noticia en este contexto de "verificación".
```

### 28 — pregunta 28

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["errores", "registro"]

respuesta: falso
tipo: vf

enunciado: "Es aceptable escribir un trabajo académico utilizando el lenguaje coloquial de un mensaje de WhatsApp para ser más cercano al lector."

explicacion: |
  Falso. El trabajo académico requiere un registro formal y preciso. Usar lenguaje coloquial puede hacer que el mensaje se pierda o sea malinterpretado por no cumplir con las expectativas del género.
```

### 29 — pregunta 29

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["primarios", "ejemplos"]

variables:
  correcta: uno_de(["discusion_familiar", "conversacion_telefonica"])
  distractor1: "informe_legal"
  distractor2: "receta_cocina"

respuesta: correcta
tipo: mc
opciones_explicitas: [distractor1, distractor2, correcta, distractor1]

enunciado: "¿Cuál de los siguientes es un ejemplo de género discursivo PRIMARIO?"

explicacion: |
  La discusión familiar y la conversación telefónica son interacciones cotidianas directas. La receta y el informe son géneros secundarios o estructurados institucionalmente.
```

### 30 — pregunta 30

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["instituciones", "secundarios"]

variables:
  institucion: uno_de(["escuela", "ciencia", "politica"])
  genero: uno_de(["informe_escolar", "articulo_cientifico", "discurso_politico"])

respuesta: genero
tipo: input

enunciado: "En el ámbito de la {institucion}, ¿qué tipo de género discursivo se desarrollaría típicamente?"

explicacion: |
  Cada institución desarrolla sus propios géneros secundarios. La escuela genera informes, la ciencia artículos, y la política discursos, todos sistematizados.
```

### 31 — pregunta 31

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["secundarios", "complejidad"]

respuesta: verdadero
tipo: vf

enunciado: "Los géneros secundarios como la literatura o el ensayo científico requieren un conocimiento especializado y una planificación cuidadosa."

explicacion: |
  Verdadero. A diferencia de los géneros primarios, los secundarios exigen una planificación previa y dominio de normas específicas del campo disciplinar o institucional.
```

### 32 — pregunta 32

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["metforas", "explicacion"]

variables:
  correcta: uno_de(["recetas", "mapas"])
  distractor1: "leyes"
  distractor2: "reglas_de_juego"

respuesta: correcta
tipo: mc
opciones_explicitas: [distractor1, distractor2, correcta, distractor1]

enunciado: "En la teoría, los géneros discursivos se comparan a menudo con:"

explicacion: |
  Se usan las metáforas de "guías" o "recetas" sociales para explicar cómo nos indican los pasos a seguir en la comunicación.
```

### 33 — pregunta 33

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["contexto", "identificacion"]

variables:
  contexto: uno_de(["trabajo", "amigos", "familia"])
  genero: uno_de(["orden_de_trabajo", "chiste", "conversacion_familiar"])

respuesta: genero
tipo: input

enunciado: "En un contexto de {contexto}, ¿cuál sería un género discursivo primario típico?"

explicacion: |
  Dependiendo del contexto, la orden de trabajo, el chiste o la conversación familiar son ejemplos de interacciones primarias espontáneas.
```

### 34 — pregunta 34

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["primarios", "propósito"]

respuesta: verdadero
tipo: vf

enunciado: "El propósito principal de los géneros discursivos primarios es la interacción inmediata."

explicacion: |
  Verdadero. Estos géneros surgen para resolver necesidades comunicativas urgentes y cotidianas en el momento de la interacción.
```

### 35 — pregunta 35

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["transformacion", "secundarios"]

variables:
  correcta: "sistematizan"
  distractor1: "eliminan"
  distractor2: "ignoran"

respuesta: correcta
tipo: mc
opciones_explicitas: [distractor1, distractor2, correcta, distractor1]

enunciado: "Los géneros secundarios toman elementos de los primarios y los:"

explicacion: |
  Los géneros secundarios transforman y sistematizan los elementos de los primarios, organizándolos bajo normas estrictas.
```

### 36 — pregunta 36

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["primarios", "definicion"]

variables:
  genero: uno_de(["conversacion_telefonica", "orden_simple", "chiste"])

respuesta: genero
tipo: input

enunciado: "¿Cuál de estos es un género discursivo primario que no está mediado por instituciones complejas?"

explicacion: |
  La conversación telefónica, la orden simple o el chiste son interacciones directas y cotidianas, sin mediación institucional compleja.
```

### 37 — pregunta 37

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["estructura", "primarios"]

respuesta: falso
tipo: vf

enunciado: "Los géneros discursivos primarios tienen una estructura rígida y estricta que no permite variaciones."

explicacion: |
  Falso. Los géneros primarios suelen tener una estructura flexible, adaptándose a la espontaneidad de la interacción diaria.
```

### 38 — pregunta 38

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["secundarios", "complejidad"]

variables:
  correcta: uno_de(["informe_legal", "novela", "ensayo"])
  distractor1: "conversacion"
  distractor2: "chiste"

respuesta: correcta
tipo: mc
opciones_explicitas: [distractor1, distractor2, correcta, distractor1]

enunciado: "¿Cuál de los siguientes es un ejemplo de género discursivo secundario complejo?"

explicacion: |
  El informe legal, la novela y el ensayo son géneros secundarios que requieren planificación y conocimiento especializado, a diferencia de los primarios.
```

### 39 — pregunta 39

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["primarios", "interaccion"]

variables:
  interaccion: uno_de(["telefonica", "familiar", "laboral"])
  genero: uno_de(["conversacion", "discusion", "orden"])

respuesta: genero
tipo: input

enunciado: "En una interacción {interaccion}, ¿qué género primario sería más probable?"

explicacion: |
  La conversación, la discusión o la orden son géneros primarios típicos de interacciones cotidianas.
```

### 40 — pregunta 40

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["instinto", "adquisicion"]

respuesta: verdadero
tipo: vf

enunciado: "Sabemos casi instintivamente cómo escribir o hablar dependiendo de la situación gracias a los géneros discursivos."

explicacion: |
  Verdadero. La internalización de los géneros nos permite navegar la comunicación social de manera fluida y casi automática.
```

### 41 — pregunta 41

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["guia", "funcion"]

variables:
  correcta: "generos_discursivos"
  distractor1: "gramatica"
  distractor2: "ortografia"

respuesta: correcta
tipo: mc
opciones_explicitas: [distractor1, distractor2, correcta, distractor1]

enunciado: "¿Qué actúa como 'guía' o 'receta' social para navegar situaciones de la vida cotidiana?"

explicacion: |
  Los géneros discursivos son las guías que nos indican el comportamiento textual adecuado, más allá de las reglas gramaticales o ortográficas aisladas.
```
