### 1 — Verificación de autoría
```
metadata:
  materia: "ciudadania-digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["autoría", "fuentes", "verificación"]

variables:
  escenario: uno_de([["Un post de un influencer sin biografía en un blog personal", "falso"], ["Un artículo de una revista científica con autores académicos", "verdadero"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: vf

enunciado: "Analiza el siguiente escenario: {escenario[idx][0]}. ¿Es esta una fuente de información confiable para un trabajo académico?"

explicacion: |
  Para que una fuente sea confiable, debe tener un autor identificable, respaldo institucional o académico y una trayectoria comprobable en el tema.
```

### 2 — El método de triangulación
```
metadata:
  materia: "ciudadania-digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["triangulación", "verificación"]

variables:
  caso: uno_de([["Encuentras una noticia impactante en una red social que nadie más reporta", "falso"], ["Encuentras la misma noticia en tres medios de comunicación con prestigio y diferentes perspectivas", "verdadero"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: mc

opciones_explicitas: ["falso", "verdadero"]

enunciado: "Si te encuentras en la siguiente situación: {caso[idx][0]}. ¿Se está cumpliendo el principio de triangulación de información para verificar la veracidad?"

explicacion: |
  La triangulación consiste en contrastar una información con múltiples fuentes independientes y confiables para confirmar su veracidad.
```

### 3 — Pasos para evaluar una web
```
metadata:
  materia: "ciudadania-digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["metodología", "evaluación"]

respuesta: ["Revisar la fecha de publicación", "Verificar la autoría y sus credenciales", "Contrastar la información con otras fuentes"]
tipo: ordenar

opciones_explicitas: ["Revisar la fecha de publicación", "Verificar la autoría y sus credenciales", "Contrastar la información con otras fuentes"]

enunciado: "Ordena los pasos lógicos para evaluar la confiabilidad de un artículo digital antes de compartirlo:"

explicacion: |
  Primero se mira la actualidad (fecha), luego quién lo dice (autor) y finalmente si otros lo confirman (contraste).
```

### 4 — Identificación de sesgos
```
metadata:
  materia: "ciudadania-digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "avanzado"
  tags: ["sesgo", "objetividad"]

variables:
  ejemplo: uno_de([["Un sitio web de noticias que usa solo adjetivos de opinión extrema y no cita fuentes", "sesgado"], ["Un reporte técnico que presenta datos estadísticos y cita estudios previos", "objetivo"]])
  idx: uno_de([0, 1])

respuesta: ejemplo[idx][1]
tipo: completar

respuestas_validas: ["sesgado", "objetivo"]

enunciado: "Observa el siguiente ejemplo: {ejemplo[idx][0]}. La información presentada es de carácter _______."

explicacion: |
  La presencia de lenguaje cargado emocionalmente o la falta de evidencia externa son indicadores claros de sesgo informativo.
```

### 5 — El dominio de la URL
```
metadata:
  materia: "ciudadania-digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["url", "seguridad"]

variables:
  url_tipo: uno_de([["Un sitio que termina en .edu.ar o .gov.ar", "confiable"], ["Un sitio que imita a un diario famoso pero termina en .xyz", "no confiable"]])
  idx: uno_de([0, 1])

respuesta: url_tipo[idx][1]
tipo: mc

opciones_explicitas: ["confiable", "no confiable"]

enunciado: "Si accedes a un sitio web con la siguiente característica: {url_tipo[idx][0]}. ¿Qué nivel de confianza inicial le otorgas al dominio?"

explicacion: |
  Los dominios institucionales (.edu, .gov) suelen tener mayor rigor y control de contenido que dominios genéricos o de bajo costo (.xyz, .info).
```