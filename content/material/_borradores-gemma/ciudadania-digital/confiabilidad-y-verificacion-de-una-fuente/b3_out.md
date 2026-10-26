### 1 — El sesgo de confirmación
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["sesgo", "verificacion", "pensamiento_critico"]

respuesta: verdadero
tipo: vf

enunciado: "El sesgo de confirmación ocurre cuando tendemos a buscar, interpretar y recordar información que confirma nuestras creencias previas, ignorando la evidencia que las contradice."

explicacion: |
  Efectivamente. El sesgo de confirmación es uno de los mayores obstáculos para la verificación de fuentes, ya que nos hace aceptar información falsa solo porque "encaja" con lo que ya pensamos.
```

### 2 — El mito de la apariencia profesional
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["fuentes", "diseño", "desinformacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[
    ["Un sitio web con diseño moderno, tipografía elegante y sin anuncios molestos.", "Es una fuente confiable solo por su estética."],
    ["Un blog de opinión con diseño simple, pero que cita fuentes académicas y autores expertos.", "Su diseño simple no determina su falta de confiabilidad."]
  ]]

opciones_explicitas: ["Es una fuente confiable solo por su estética.", "Su diseño simple no determina su falta de confiabilidad.", "La apariencia visual es el único indicador de veracidad."]

respuesta: escenarios[escenario_idx][1]
tipo: mc

enunciado: "Si analizamos el siguiente caso: {escenarios[escenario_idx][0]} ¿Cuál es la conclusión correcta sobre su confiabilidad?"

explicacion: |
  La estética de un sitio web (colores, logos, diseño) es fácilmente replicable y no garantiza que la información sea verídica. La confiabilidad se basa en la evidencia, las fuentes y la autoría, no en el diseño gráfico.
```

### 3 — Pasos para la verificación
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["metodologia", "verificacion", "pasos"]

opciones_explicitas: ["Verificar la autoría y sus credenciales", "Compartir inmediatamente para avisar a otros", "Buscar la misma noticia en otras fuentes", "Analizar la fecha de publicación para evitar noticias viejas"]

respuesta: ["Verificar la autoría y sus credenciales", "Buscar la misma noticia en otras fuentes", "Analizar la fecha de publicación para evitar noticias viejas"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para verificar la veracidad de una noticia sospechosa antes de compartirla:"

explicacion: |
  El proceso correcto implica: 1. Ver quién lo dice (autoría), 2. Ver si otros lo confirman (triangulación) y 3. Ver si la información es actual (temporalidad). Compartir sin verificar es parte del problema de la desinformación.
```

### 4 — El uso de la fecha en la desinformación
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["contexto", "temporalidad", "fake_news"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [[
    ["Una noticia real de hace 5 años sobre un desastre natural.", "falsa"],
    ["Una noticia real de ayer sobre un desastre natural.", "verdadera"]
  ]]

respuesta: casos[caso_idx][1]
tipo: completar

pasos:
  - "Identifica el contenido de la noticia."
  - "Observa la fecha de publicación."

enunciado: "Si una noticia describe un evento que ocurrió hace 5 años, pero se está difundiendo hoy como si fuera actual, la información es considerada ___ para el contexto presente."

respuestas_validas: ["falsa", "verdadera"]

explicacion: |
  La descontextualización temporal es una técnica común de desinformación. Una noticia puede ser real en su momento, pero si se presenta como actual para manipular la opinión, pierde su veracidad contextual.
```

### 5 — La trampa de los titulares sensacionalistas
```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["clickbait", "titulares", "verificacion"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [[
    ["'¡Increíble! Científicos descubren la cura definitiva para todo con solo un limón.'", "Clickbait"],
    ["'Estudio de la Universidad de Oxford analiza el impacto del consumo de cítricos en la salud.'", "Informativo"]
  ]]

opciones_explicitas: ["Clickbait", "Informativo"]

respuesta: ejemplos[ejemplo_idx][1]
tipo: mc

enunciado: "Analiza el siguiente titular: {ejemplos[ejemplo_idx][0]}. ¿Qué tipo de contenido representa principalmente?"

explicacion: |
  Los titulares que usan lenguaje hiperbólico, exclamaciones o promesas de soluciones mágicas suelen ser 'clickbait'. Su objetivo es generar clics mediante la emoción, no informar con precisión.
```