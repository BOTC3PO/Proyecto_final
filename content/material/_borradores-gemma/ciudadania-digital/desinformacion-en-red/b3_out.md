### 1 — El motor de la viralidad
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["algoritmos", "viralidad"]

tipo: mc
opciones_explicitas: ["La veracidad de la información", "El compromiso (engagement) y la emoción", "La calidad técnica del contenido", "El rigor periodístico"]

enunciado: "Los algoritmos de las redes sociales están diseñados principalmente para maximizar el tiempo de permanencia del usuario. Por ello, suelen priorizar contenido que genera un alto nivel de ___."

explicacion: |
  Los algoritmos de recomendación priorizan contenidos que provocan reacciones fuertes (ira, sorpresa, miedo) porque esto genera más 'engagement' (likes, compartidos, comentarios), permitiendo que la desinformación se propague más rápido que los hechos neutrales.
```

### 2 — El fenómeno de la cámara de eco
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["camaras_de_eco", "sesgo_confirmacion"]

variables:
  escenario: uno_de([
    ["un usuario que solo ve noticias que refuerzan sus prejuicios", "cámaras de eco"],
    ["un periodista que verifica cada dato antes de publicar", "periodismo tradicional"],
    ["un sistema de moderación de contenidos automático", "moderación algorítmica"]
  ])

tipo: completar
respuestas_validas: ["cámaras de eco", "periodismo tradicional", "moderación algorítmica"]

enunciado: "Cuando los algoritmos nos muestran únicamente información que coincide con nuestras creencias previas, creando un entorno donde nuestras opiniones se ven constantemente reforzadas y aisladas de opiniones contrarias, estamos ante el fenómeno de las {escenario[0]}."

explicacion: |
  Las cámaras de eco ocurren cuando los filtros de personalización nos encierran en burbujas informativas, impidiéndonos ver la diversidad de perspectivas y facilitando que la desinformación que confirma nuestros sesgos se acepte sin cuestionar.
```

### 3 — Verificación vs. Inmediatez
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["verificacion", "editorial"]

tipo: mc
opciones_explicitas: ["Falta de verificación editorial", "Exceso de regulación estatal", "Aumento de la alfabetización digital", "Uso de fuentes primarias"]

enunciado: "A diferencia de los medios de comunicación tradicionales, donde un editor revisa la información antes de su publicación, en las redes sociales la ausencia de ___ permite que noticias falsas se difundan de forma masiva e inmediata."

explicacion: |
  En las redes sociales, cualquier usuario puede publicar contenido sin pasar por un proceso de edición, contrastación de fuentes o verificación de hechos, lo que permite que la desinformación viaje a la misma velocidad que la información real.
```

### 4 — El impacto emocional
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["emociones", "psicologia"]

tipo: mc
opciones_explicitas: ["Neutralidad", "Indiferencia", "Alta carga emocional", "Aburrimiento"]

enunciado: "La desinformación suele ser diseñada para apelar a las emociones del usuario. ¿Qué tipo de contenido suele tener mayor probabilidad de volverse viral debido a su carga emocional?"

explicacion: |
  El contenido que genera indignación o miedo es el que más rápido se comparte. La carga emocional actúa como un combustible para la propagación algorítmica, haciendo que la desinformación sea mucho más "contagiosa" que la información factual.
```

### 5 — El ciclo de la desinformación
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "avanzado"
  tags: ["proceso", "secuencia"]

tipo: ordenar
opciones_explicitas: ["Creación de noticia falsa con carga emocional", "Difusión masiva por algoritmos de engagement", "Formación de cámaras de eco en usuarios", "Refuerzo de sesgos y polarización social"]

enunciado: "Ordena la secuencia lógica de cómo la desinformación escala desde su creación hasta su impacto en la sociedad:"

explicacion: |
  El proceso comienza con la creación de un mensaje diseñado para impactar emocionalmente; el algoritmo lo detecta y lo impulsa para ganar engagement; esto crea burbujas donde solo se escucha lo mismo (cámaras de eco), culminando en una sociedad polarizada que acepta la mentira como verdad.
```