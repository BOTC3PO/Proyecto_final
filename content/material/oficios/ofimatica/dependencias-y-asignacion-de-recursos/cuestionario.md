# Ofimática — Dependencias y asignación de recursos (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Dependencia

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Una relación que dice cuándo puede empezar o terminar una tarea según otra", "Una fórmula", "Un color", "Un error"]
respuesta: "Una relación que dice cuándo puede empezar o terminar una tarea según otra"

enunciado: "¿Qué es una dependencia entre tareas?"

explicacion: |
  Se dibuja con flechas en el diagrama.
```

### 2 — FS

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "basico"
  tags: ["fs"]

tipo: mc
opciones_explicitas: ["La tarea B empieza cuando termina A", "B termina cuando termina A", "B empieza cuando empieza A", "B no depende de A"]
respuesta: "La tarea B empieza cuando termina A"

enunciado: "¿Qué significa \"fin a inicio\"?"

explicacion: |
  Es el tipo más común.
```

### 3 — Ejemplo

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "basico"
  tags: ["fs"]

tipo: mc
opciones_explicitas: ["Fin a inicio", "Inicio a inicio", "Fin a fin", "Ninguna"]
respuesta: "Fin a inicio"

enunciado: "Pintar una pared solo después de que se seque el revoque. ¿Qué dependencia es?"

explicacion: |
  La pintura empieza al terminar el secado.
```

### 4 — SS

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["ss"]

tipo: mc
opciones_explicitas: ["B empieza cuando empieza A", "B empieza cuando termina A", "B termina cuando termina A", "B no empieza nunca"]
respuesta: "B empieza cuando empieza A"

enunciado: "¿Qué significa \"inicio a inicio\"?"

explicacion: |
  Permite trabajar en paralelo.
```

### 5 — FF

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["ff"]

tipo: mc
opciones_explicitas: ["B termina cuando termina A", "B empieza cuando termina A", "B empieza cuando empieza A", "No existe"]
respuesta: "B termina cuando termina A"

enunciado: "¿Qué significa \"fin a fin\"?"

explicacion: |
  Dos tareas que cierran juntas.
```

### 6 — Lag

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["lag"]

tipo: mc
opciones_explicitas: ["Una espera obligatoria entre tareas", "Un adelanto", "Un error", "Una persona"]
respuesta: "Una espera obligatoria entre tareas"

enunciado: "¿Qué es una demora (lag)?"

explicacion: |
  Por ejemplo, el curado de 7 días del hormigón.
```

### 7 — Lead

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "avanzado"
  tags: ["lead"]

tipo: mc
opciones_explicitas: ["Empezar una tarea antes de que termine la anterior", "Esperar más", "Cancelar la tarea", "Cambiar el responsable"]
respuesta: "Empezar una tarea antes de que termine la anterior"

enunciado: "¿Qué permite un adelanto (lead)?"

explicacion: |
  Es el opuesto de una demora.
```

### 8 — Atraso

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "basico"
  tags: ["atraso"]

tipo: mc
opciones_explicitas: ["También se atrasan", "Se adelantan", "Nada", "Se cancelan"]
respuesta: "También se atrasan"

enunciado: "Si una tarea A se atrasa, ¿qué pasa con las tareas que dependen de ella?"

explicacion: |
  El atraso se propaga.
```

### 9 — Paralelo

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "basico"
  tags: ["paralelo"]

tipo: mc
opciones_explicitas: ["Las que no dependen entre sí", "Las que dependen una de otra", "Ninguna", "Todas siempre"]
respuesta: "Las que no dependen entre sí"

enunciado: "¿Qué tareas se pueden hacer en paralelo?"

explicacion: |
  Eso acorta el proyecto.
```

### 10 — Circular

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["circular"]

tipo: mc
opciones_explicitas: ["Porque ninguna tarea puede empezar primero", "Porque son caras", "Porque son rápidas", "Porque no se dibujan"]
respuesta: "Porque ninguna tarea puede empezar primero"

enunciado: "¿Por qué las dependencias circulares son un problema?"

explicacion: |
  A depende de B y B de A.
```

### 11 — Recurso

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "basico"
  tags: ["recursos"]

tipo: mc
opciones_explicitas: ["Lo necesario para hacer una tarea: personas, equipos, materiales, dinero", "Solo las personas", "Solo el dinero", "Solo el tiempo"]
respuesta: "Lo necesario para hacer una tarea: personas, equipos, materiales, dinero"

enunciado: "¿Qué es un recurso en un proyecto?"

explicacion: |
  Cada uno tiene disponibilidad y costo.
```

### 12 — Asignar

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "basico"
  tags: ["asignar"]

tipo: mc
opciones_explicitas: ["Decidir quién o qué realiza cada tarea y con qué dedicación", "Comprarlo", "Borrarlo", "Pintarlo"]
respuesta: "Decidir quién o qué realiza cada tarea y con qué dedicación"

enunciado: "¿Qué es asignar un recurso?"

explicacion: |
  Se indica porcentaje u horas.
```

### 13 — Duración

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "basico"
  tags: ["calculo"]

tipo: mc
opciones_explicitas: ["5 días", "8 días", "40 días", "1 día"]
respuesta: "5 días"

enunciado: "Una tarea de 40 horas la hace una persona a 8 horas por día. ¿Cuánto dura?"

explicacion: |
  40 / 8 = 5.
```

### 14 — Dos personas

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["calculo"]

tipo: mc
opciones_explicitas: ["2,5 días", "5 días", "10 días", "1 día"]
respuesta: "2,5 días"

enunciado: "La misma tarea de 40 horas, con dos personas a 8 horas por día, dura aproximadamente..."

explicacion: |
  Dos personas aportan 16 horas por día: 40 / 16 = 2,5, siempre que la tarea se pueda dividir.
```

### 15 — Más gente

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["recursos"]

tipo: mc
opciones_explicitas: ["No: hay tareas indivisibles y se suma el costo de coordinarse", "Sí siempre", "Solo con más dinero", "Solo en la oficina"]
respuesta: "No: hay tareas indivisibles y se suma el costo de coordinarse"

enunciado: "¿Agregar más gente siempre acorta el tiempo?"

explicacion: |
  El trabajo no siempre se reparte.
```

### 16 — Sobreasignación

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "basico"
  tags: ["sobreasignacion"]

tipo: mc
opciones_explicitas: ["Un recurso con más trabajo que su disponibilidad", "Un recurso sin trabajo", "Un recurso caro", "Un recurso nuevo"]
respuesta: "Un recurso con más trabajo que su disponibilidad"

enunciado: "¿Qué es una sobreasignación?"

explicacion: |
  Por ejemplo, 12 horas en un día para quien tiene 8.
```

### 17 — Nivelar

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["nivelacion"]

tipo: mc
opciones_explicitas: ["Ajustar el plan para eliminar las sobreasignaciones", "Cambiar de programa", "Borrar tareas", "Aumentar los costos"]
respuesta: "Ajustar el plan para eliminar las sobreasignaciones"

enunciado: "¿Qué es la nivelación de recursos?"

explicacion: |
  Se redistribuye, se mueve o se extiende.
```

### 18 — Cómo resolver

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["nivelacion"]

tipo: mc
opciones_explicitas: ["Mover una tarea con holgura o redistribuirla a otra persona", "Ignorarla", "Pedir más horas por día sin límite", "Borrar el proyecto"]
respuesta: "Mover una tarea con holgura o redistribuirla a otra persona"

enunciado: "¿Cuál es una forma de resolver una sobreasignación?"

explicacion: |
  Mover tareas críticas afecta la fecha final.
```

### 19 — Costo

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "basico"
  tags: ["costos"]

tipo: mc
opciones_explicitas: ["Horas × tarifa, más materiales y equipos", "Solo las horas", "Solo la tarifa", "Solo los materiales"]
respuesta: "Horas × tarifa, más materiales y equipos"

enunciado: "¿Cómo se calcula el costo de una tarea hecha por una persona?"

explicacion: |
  El presupuesto suma las tareas más un margen.
```

### 20 — Contingencia

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "basico"
  tags: ["presupuesto"]

tipo: mc
opciones_explicitas: ["Para cubrir imprevistos", "Para ganar más", "Para pagar impuestos", "No hace falta"]
respuesta: "Para cubrir imprevistos"

enunciado: "¿Para qué se agrega un margen de contingencia al presupuesto?"

explicacion: |
  Los imprevistos son habituales.
```

### 21 — Planilla

```
metadata:
  materia: "ofimatica"
  tema: "dependencias_y_asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["formulas"]

tipo: mc
opciones_explicitas: ["`SUMAR.SI`", "`HOY`", "`REDONDEAR`", "`IZQUIERDA`"]
respuesta: "`SUMAR.SI`"

enunciado: "¿Qué fórmula sirve para sumar las horas de una persona?"

explicacion: |
  Suma las horas de las filas donde el responsable coincide.
```

