### 1 — El titular sensacionalista
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["clickbait", "identificacion"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [["¡Increíble! Un alimento común cura todas las enfermedades según un video viral sin fuentes.", "clickbait"], ["Científicos de la NASA confirman el descubrimiento de agua líquida en Marte.", "informativo"]]
  respuesta_correcta: datos[escenario_idx][1]

tipo: mc

opciones_explicitas: ["clickbait", "informativo"]

enunciado: "Lees un post en redes sociales que dice: {datos[escenario_idx][0]}. ¿Qué tipo de contenido es?"

explicacion: |
  El contenido es {datos[escenario_idx][1]} porque utiliza lenguaje exagerado y promesas sin sustento científico para captar la atención.
```

### 2 — Verificación de fuentes
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["fuentes", "verificacion"]

variables:
  caso_idx: uno_de([0,1,2])
  casos: [
    ["Un sitio web llamado 'noticias-reales-ya.xyz' publica una noticia bomba.", "sitio_no_confiable"],
    ["Un hilo de Twitter de un periodista reconocido con trayectoria.", "fuente_confiable"],
    ["Un mensaje de WhatsApp reenviado muchas veces sin autor claro.", "fuente_no_confiable"]
  ]
  respuesta_correcta: casos[caso_idx][1]

tipo: mc

opciones_explicitas: ["sitio_no_confiable", "fuente_confiable", "fuente_no_confiable"]

enunciado: "Se presenta el siguiente escenario: {casos[caso_idx][0]}. ¿Cuál es la categoría de la fuente?"

explicacion: |
  Identificar la procedencia es clave. El caso analizado es una {casos[caso_idx][1]}.
```

### 3 — La fecha de la noticia
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["contexto", "temporalidad"]

variables:
  contexto_idx: uno_de([0,1])
  contextos: [
    ["Una noticia sobre un desastre natural que ocurrió en 2015 se comparte como si fuera de hoy.", "descontextualizado"],
    ["Una noticia sobre un evento actual publicada hace 2 horas.", "actual"]
  ]
  respuesta_correcta: contextos[caso_idx][1]

tipo: completar

respuestas_validas: ["descontextualizado", "actual"]

enunciado: "Si una noticia antigua se presenta como actual para generar alarma, decimos que el contenido está ___."

explicacion: |
  El contenido está {contextos[contexto_idx][1]} porque se le ha quitado su marco temporal original.
```

### 4 — Pasos para verificar
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["metodologia", "verificacion"]

tipo: ordenar

opciones_explicitas: ["Leer el titular", "Buscar la noticia en buscadores", "Contrastar con medios oficiales", "Decidir si es real"]

respuesta: ["Leer el titular", "Buscar la noticia en buscadores", "Contrastar con medios oficiales", "Decidir si es real"]

enunciado: "Ordena los pasos lógicos para verificar si una noticia de redes sociales es verdadera:"

explicacion: |
  La verificación requiere un proceso crítico: primero captar la información, luego investigar su origen y finalmente contrastar antes de concluir.
```

### 5 — El sesgo de confirmación
```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "avanzado"
  tags: ["sesgo", "psicologia"]

variables:
  sesgo_idx: uno_de([0,1])
  escenarios: [
    ["Solo compartes noticias que apoyan tu opinión política, aunque no sean ciertas.", "sesgo_confirmacion"],
    ["Compartes una noticia porque es de un medio que siempre te da la razón.", "sesgo_confirmacion"]
  ]
  respuesta_correcta: escenarios[sesgo_idx][1]

tipo: input

enunciado: "Cuando una persona tiende a aceptar como verdaderas solo las informaciones que refuerzan sus propias creencias, está siendo víctima del ___."

explicacion: |
  El fenómeno se llama {escenarios[sesgo_idx][1]}. Es un error cognitivo que facilita la propagación de la desinformación.
```