### 1 — ¿Qué define al sistema?
```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["ingenieria_software", "requisitos"]

respuesta: "funcionales"
tipo: completar
respuestas_validas: ["funcionales"]

enunciado: "Los requisitos que describen las tareas específicas, servicios o funciones que el sistema debe ejecutar para satisfacer las necesidades del usuario se denominan requisitos ___________."

explicacion: |
  Los requisitos funcionales definen el "qué" hace el sistema (ej: "el sistema debe permitir registrar usuarios"), mientras que los no funcionales definen el "cómo" lo hace (rendimiento, seguridad, etc.).
```

### 2 — Clasificación de atributos
```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["requisitos", "clasificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El sistema debe procesar un pago en menos de 2 segundos.", "no_funcional"],
    ["El sistema debe permitir la recuperación de contraseña por email.", "funcional"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["funcional", "no_funcional"]

enunciado: "Analiza el siguiente requerimiento: '{escenarios[escenario_idx][0]}'. ¿A qué categoría pertenece?"

explicacion: |
  Si el requerimiento describe una acción o proceso del sistema, es funcional. Si describe una restricción de calidad (tiempo, seguridad, disponibilidad), es no funcional.
```

### 3 — Verdad o Falso: El rendimiento
```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["requisitos", "rendimiento"]

respuesta: falso
tipo: vf

enunciado: "Un requisito que establece que 'la interfaz de usuario debe ser intuitiva y fácil de usar para personas mayores' es un requisito funcional."

explicacion: |
  Falso. La usabilidad es un atributo de calidad, por lo tanto, es un requisito NO funcional.
```

### 4 — El error de la ambigüedad
```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "intermedio"
  tags: ["calidad_requisitos", "no_funcionales"]

respuesta: "no_funcional"
tipo: mc
opciones_explicitas: ["funcional", "no_funcional"]

enunciado: "Un cliente solicita: 'El sistema debe ser muy rápido'. Este enunciado es un mal ejemplo de un requisito ___________ porque es ambiguo y no es medible."

explicacion: |
  Los requisitos no funcionales (como el rendimiento) deben ser cuantificables (ej: 'el tiempo de respuesta debe ser < 500ms') para poder ser validados.
```

### 5 — Jerarquía de definición
```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "intermedio"
  tags: ["proceso_ingenieria"]

respuesta: ["identificar necesidades", "definir requisitos funcionales", "establecer restricciones no funcionales", "validar sistema"]
tipo: ordenar
opciones_explicitas: ["identificar necesidades", "definir requisitos funcionales", "establecer restricciones no funcionales", "validar sistema"]

enunciado: "Ordena lógicamente las etapas del ciclo de vida de ingeniería de requisitos para un nuevo software:"

explicacion: |
  Primero se entienden las necesidades del negocio, luego se definen las funciones (funcionales), se aplican las restricciones de calidad (no funcionales) y finalmente se verifica que todo cumpla lo solicitado.
```