### 1 — El acto administrativo
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["acto_administrativo", "estado"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["La Municipalidad otorga una licencia de construcción a un ciudadano.", "licencia"],
    ["El Ministerio de Salud dicta una resolución de clausura para un restaurante.", "clausura"]
  ]

enunciado: "Considerando que {escenarios[escenario_idx][0]}, estamos ante un acto administrativo que regula la actividad del Estado frente a un particular."

respuesta: "{escenarios[escenario_idx][1]}"
tipo: completar
respuestas_validas: ["licencia", "clausura"]

explicacion: |
  El acto administrativo es una declaración de voluntad del Estado que produce efectos jurídicos directos sobre los administrados.
```

### 2 — Relación Estado-Ciudadano
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["sujeto", "estado"]

enunciado: "En un proceso de licitación pública, el Estado actúa como un ente regulador y organizador. ¿Es el ciudadano un sujeto pasivo de la actividad administrativa en este contexto?"

respuesta: verdadero
tipo: vf

explicacion: |
  El Derecho Administrativo regula la relación entre el Estado (sujeto activo) y los ciudadanos (sujetos pasivos/administrados).
```

### 3 — Elementos del Acto Administrativo
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["elementos", "validez"]

enunciado: "Para que un acto administrativo sea válido, debe cumplir con ciertos requisitos. Si una autoridad dicta una norma sin tener la competencia legal para ello, el elemento afectado es:"

respuesta: "Competencia"
tipo: mc
opciones_explicitas: ["Objeto", "Sujeto", "Competencia", "Motivación"]

explicacion: |
  La competencia es la atribución legal que tiene un órgano del Estado para actuar. Actuar sin ella invalida el acto.
```

### 4 — Procedimiento Administrativo
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["procedimiento", "pasos"]

variables:
  pasos_ordenados: ["Inicio del trámite", "Instrucción/Prueba", "Resolución", "Notificación"]

enunciado: "Ordene la secuencia lógica de un procedimiento administrativo estándar para la resolución de un reclamo ciudadano:"

respuesta: ["Inicio del trámite", "Instrucción/Prueba", "Resolución", "Notificación"]
tipo: ordenar
opciones_explicitas: ["Inicio del trámite", "Instrucción/Prueba", "Resolución", "Notificación"]

explicacion: |
  El procedimiento administrativo es la serie de pasos sucesivos que garantizan el debido proceso antes de la decisión final.
```

### 5 — Control de Legalidad
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "avanzado"
  tags: ["control", "recurso"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Un ciudadano considera que una multa de tránsito es ilegal.", "impugnar"],
    ["Una empresa cree que una concesión fue otorgada arbitrariamente.", "impugnar"]
  ]

enunciado: "Ante un acto administrativo que el administrado considera lesivo a sus derechos, el paso siguiente es ___ el acto mediante un recurso administrativo."

respuesta: "impugnar"
tipo: completar
respuestas_validas: ["impugnar"]

explicacion: |
  La impugnación es el derecho de los ciudadanos de cuestionar la legalidad de los actos del Estado para que sean revisados.
```