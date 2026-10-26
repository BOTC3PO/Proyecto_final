### 1 — ¿Es un libro de historia siempre una fuente primaria?
```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente-primaria-vs-secundaria"
  nivel: "basico"
  tags: ["fuentes", "investigacion"]

respuesta: falso
tipo: vf

enunciado: "Un libro de texto escrito por un historiador en el año 2020 que analiza la Revolución Francesa se considera una fuente primaria."

explicacion: |
  Falso. El libro es una fuente secundaria porque interpreta y analiza eventos ocurridos en el pasado a partir de otras fuentes. Una fuente primaria sería un diario escrito por alguien que vivió la Revolución Francesa.
```

### 2 — Identificación de la naturaleza de una fuente
```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente-primaria-vs-secundaria"
  nivel: "intermedio"
  tags: ["clasificacion", "evidencia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [[
    ["Entrevista grabada a un sobreviviente de un terremoto", "primaria"],
    ["Artículo de Wikipedia sobre la historia de la ciudad", "secundaria"]
  ], [
    ["Fotografía original de la llegada del hombre a la Luna", "primaria"],
    ["Documental de Netflix sobre la carrera espacial", "secundaria"]
  ]]

enunciado: "Si analizamos el siguiente elemento: {escenario[escenario_idx][0]}, ¿qué tipo de fuente estamos consultando?"

opciones_explicitas: ["primaria", "secundaria"]
respuesta: escenario[escenario_idx][1]
tipo: mc

explicacion: |
  Las fuentes primarias son testimonios directos o evidencias originales del evento. Las secundarias son interpretaciones, resúmenes o análisis realizados posteriormente por terceros.
```

### 3 — El error de la interpretación
```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente-primaria-vs-secundaria"
  nivel: "intermedio"
  tags: ["analisis", "confusion"]

respuesta: "interpretación"
tipo: completar
respuestas_validas: ["interpretación", "comentario", "análisis"]

enunciado: "Una fuente secundaria se diferencia de una primaria porque su función principal no es presentar el hecho original, sino realizar una ___ del mismo."

explicacion: |
  Exacto. La fuente secundaria añade una capa de análisis, crítica o síntesis sobre la información original (fuente primaria).
```

### 4 — ¿Cuándo una fuente cambia de categoría?
```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente-primaria-vs-secundaria"
  nivel: "avanzado"
  tags: ["contexto", "metodologia"]

respuesta: verdadero
tipo: vf

enunciado: "Un artículo de un periódico escrito en 1920 sobre un evento ocurrido el mismo día puede ser una fuente primaria para un historiador actual, pero un libro de texto de 2024 que cita ese periódico es una fuente secundaria."

explicacion: |
  Correcto. La clasificación depende del uso y la relación con el evento. El periódico es testimonio directo del momento; el libro es una interpretación posterior.
```

### 5 — Proceso de construcción de conocimiento
```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente-primaria-vs-secundaria"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

opciones_explicitas: ["Recolección de evidencia directa", "Análisis de datos primarios", "Redacción de una conclusión o síntesis"]
respuesta: ["Recolección de evidencia directa", "Análisis de datos primarios", "Redacción de una conclusión o síntesis"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para que un investigador pase de trabajar con fuentes primarias a producir una fuente secundaria:"

explicacion: |
  Para crear una fuente secundaria, primero se debe obtener la evidencia original (primaria), luego procesar y analizar esa información, y finalmente redactar un nuevo documento que explique o sintetice lo hallado.
```