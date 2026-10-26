### 1 — ¿Qué regula el Derecho Civil?
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["civil", "regulacion"]

tipo: mc
opciones_explicitas: ["Las relaciones de trabajo entre empleador y empleado", "Las relaciones de familia, contratos y propiedad entre particulares", "Los delitos y las penas impuestas por el Estado", "Los conflictos entre el Estado y los ciudadanos"]

respuesta: "Las relaciones de familia, contratos y propiedad entre particulares"

enunciado: "Un error común es confundir el Derecho Civil con el Derecho Laboral. Mientras el segundo regula el trabajo, el Derecho Civil regula ___."

explicacion: |
  El Derecho Civil es el tronco común que regula las relaciones privadas entre personas (familia, contratos, sucesiones, propiedad), a diferencia del Laboral que es una rama especializada para el trabajo.
```

### 2 — ¿Verdadero o Falso: El Derecho Administrativo regula contratos entre empresas?
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["administrativo", "confusion"]

tipo: vf

respuesta: falso

enunciado: "Es un error pensar que el Derecho Administrativo regula los contratos entre dos empresas privadas; su función es regular la organización y el funcionamiento de la administración pública."

explicacion: |
  Falso. El Derecho Administrativo regula la actividad del Estado y sus relaciones con los particulares cuando el Estado actúa como poder público. Los contratos entre empresas privadas son materia del Derecho Comercial/Civil.
```

### 3 — Completar la rama del derecho
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["penal", "delitos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["robo", "delito"], ["incumplimiento de contrato", "civil"]]

respuesta: "penal"
tipo: completar
respuestas_validas: ["penal"]

enunciado: "Si una persona comete un ___, el Estado interviene para imponer una sanción punitiva; esta materia es regulada por el Derecho ___."

explicacion: |
  El Derecho Penal se encarga de las conductas que son consideradas delitos y las sanciones que el Estado impone. No debe confundirse con el Derecho Civil, que busca la reparación de daños pero no la pena criminal.
```

### 4 — Clasificación de conflictos
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["comercial", "civil"]

tipo: mc
opciones_explicitas: ["Derecho Comercial", "Derecho Civil", "Derecho Administrativo", "Derecho Penal"]

respuesta: "Derecho Comercial"

enunciado: "Un comerciante tiene un conflicto por una transacción de mercaderías con un proveedor. Aunque el Derecho Civil es la base, la regulación específica de los actos de comercio corresponde al ___."

explicacion: |
  El Derecho Comercial es una rama especializada que regula los actos de comercio y a los sujetos que se dedican a ellos, desprendiéndose del marco general del Derecho Civil.
```

### 5 — Ordenar la jerarquía de aplicación en un caso de despido
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["laboral", "procedimiento"]

tipo: ordenar
opciones_explicitas: ["Identificar el vínculo laboral", "Determinar la normativa aplicable (Derecho Laboral)", "Calificar la sanción o indemnización"]

respuesta: ["Identificar el vínculo laboral", "Determinar la normativa aplicable (Derecho Laboral)", "Calificar la sanción o indemnización"]

enunciado: "Ante un conflicto por un despido, el abogado debe seguir este orden lógico para aplicar correctamente el Derecho Laboral:"

explicacion: |
  Primero se debe verificar si existe una relación de dependencia (vínculo), luego aplicar las leyes específicas de trabajo (Laboral) y finalmente determinar la consecuencia jurídica (indemnización).
```