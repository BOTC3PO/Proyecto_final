### 1 — Sesgo de confirmación
```
metadata:
  materia: "ciudadania_digital"
  tema: "sesgo_en_la_informacion"
  nivel: "basico"
  tags: ["sesgo", "desinformacion", "pensamiento_critico"]

respuesta: "sesgo de confirmación"
tipo: completar
respuestas_validas: ["sesgo de confirmación"]

enunciado: "Cuando una persona tiende a buscar, interpretar y recordar únicamente la información que apoya sus creencias previas, ignorando las evidencias que las contradicen, está experimentando el ___."

explicacion: |
  El sesgo de confirmación es un error cognitivo que nos hace ver solo lo que queremos ver, reforzando nuestras ideas previas y dificultando el pensamiento crítico.
```

### 2 — Identificación de Deepfakes
```
metadata:
  materia: "ciudadania_digital"
  tema: "deepfakes"
  nivel: "intermedio"
  tags: ["ia", "deepfake", "video"]

variables:
  es_falso: uno_de([verdadero, falso])

respuesta: es_falso
tipo: vf

enunciado: "Si un video muestra a un líder político diciendo palabras que nunca pronunció, utilizando una técnica de IA para superponer su rostro y voz en otro cuerpo, ¿es este contenido un deepfake? {es_falso}"

explicacion: |
  Los deepfakes son contenidos audiovisuales generados o manipulados mediante inteligencia artificial para crear representaciones realistas de personas diciendo o haciendo cosas que nunca ocurrieron.
```

### 3 — El error de la "evidencia visual"
```
metadata:
  materia: "ciudadania_digital"
  tema: "deepfakes"
  nivel: "avanzado"
  tags: ["evidencia", "ia", "verificacion"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Ante la existencia de los deepfakes, la premisa 'ver para creer' (asumir que un video es real solo por ser una imagen en movimiento) sigue siendo una regla de verificación confiable en la era de la IA."

explicacion: |
  En la era de la IA generativa, la evidencia visual ya no es garantía de verdad. Los deepfakes pueden replicar gestos, voces y expresiones con un realismo asombroso.
```

### 4 — Pasos para verificar una noticia
```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_datos"
  nivel: "intermedio"
  tags: ["metodologia", "verificacion", "pasos"]

respuesta: ["buscar la fuente original", "contrastar con otros medios", "analizar posibles sesgos"]
tipo: ordenar
opciones_explicitas: ["buscar la fuente original", "contrastar con otros medios", "analizar posibles sesgos"]

enunciado: "Para verificar si una noticia es real o contiene un sesgo de presentación, se debe seguir este orden lógico de análisis:"

explicacion: |
  Primero se debe encontrar el origen (fuente), luego ver si otros medios serios lo reportan y finalmente analizar si el lenguaje usado intenta manipular la opinión del lector.
```

### 5 — Sesgo de presentación
```
metadata:
  materia: "ciudadania_digital"
  tema: "sesgo_en_la_informacion"
  nivel: "basico"
  tags: ["lenguaje", "manipulacion", "sesgo"]

respuesta: "manipulación"
tipo: completar
respuestas_validas: ["manipulación"]

enunciado: "Cuando un medio de comunicación utiliza adjetivos cargados de juicio o selecciona solo los datos que favorecen una postura para influir en la opinión pública, está realizando una ___ de la información."

explicacion: |
  La manipulación mediante el sesgo de presentación no siempre es una mentira directa, sino una selección parcial de la realidad para guiar la percepción del receptor.
```