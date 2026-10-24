# Ofimática — Cronogramas y diagrama de Gantt (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Cronograma

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Qué tareas hay, cuándo empiezan y cuánto duran", "Cuánto cuesta una cosa", "Quién es el jefe", "Qué color tiene"]
respuesta: "Qué tareas hay, cuándo empiezan y cuánto duran"

enunciado: "¿Qué responde un cronograma?"

explicacion: |
  Es un plan en el tiempo.
```

### 2 — Alcance

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "basico"
  tags: ["alcance"]

tipo: mc
opciones_explicitas: ["Lo que entra y lo que no entra en el proyecto", "La fecha de cumpleaños", "El precio de los insumos", "El color"]
respuesta: "Lo que entra y lo que no entra en el proyecto"

enunciado: "¿Qué define el alcance de un proyecto?"

explicacion: |
  Evita que el trabajo crezca sin control.
```

### 3 — EDT

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "intermedio"
  tags: ["edt"]

tipo: mc
opciones_explicitas: ["La división de lo grande en tareas manejables", "Un tipo de gráfico", "Un archivo", "Una fórmula"]
respuesta: "La división de lo grande en tareas manejables"

enunciado: "¿Qué es la estructura de desglose del trabajo (EDT)?"

explicacion: |
  Es el primer paso para estimar.
```

### 4 — Tarea

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "basico"
  tags: ["tareas"]

tipo: mc
opciones_explicitas: ["Con un resultado claro y una duración razonable", "Sin resultado", "Sin responsable", "Sin fecha"]
respuesta: "Con un resultado claro y una duración razonable"

enunciado: "¿Cómo debe ser una buena tarea?"

explicacion: |
  Por ejemplo, de horas a pocas semanas.
```

### 5 — Hito

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "basico"
  tags: ["hito"]

tipo: mc
opciones_explicitas: ["Un punto importante del proyecto sin duración, como una entrega", "Una tarea larga", "Un error", "Un material"]
respuesta: "Un punto importante del proyecto sin duración, como una entrega"

enunciado: "¿Qué es un hito?"

explicacion: |
  Se suele marcar con un rombo.
```

### 6 — Estimar

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "basico"
  tags: ["estimar"]

tipo: mc
opciones_explicitas: ["Con experiencia previa y consultando a quien la hace, con margen", "Al azar", "Con una fórmula mágica", "Preguntando al cliente"]
respuesta: "Con experiencia previa y consultando a quien la hace, con margen"

enunciado: "¿Cómo se estima la duración de una tarea?"

explicacion: |
  Quien hace el trabajo sabe cuánto tarda.
```

### 7 — Gantt

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "basico"
  tags: ["gantt"]

tipo: mc
opciones_explicitas: ["Un gráfico de barras horizontales con tareas y tiempo", "Un gráfico circular", "Una tabla de datos", "Un mapa"]
respuesta: "Un gráfico de barras horizontales con tareas y tiempo"

enunciado: "¿Qué es un diagrama de Gantt?"

explicacion: |
  Las barras muestran inicio y duración.
```

### 8 — Ejes

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "basico"
  tags: ["ejes"]

tipo: mc
opciones_explicitas: ["El tiempo", "Las tareas", "Los costos", "Las personas"]
respuesta: "El tiempo"

enunciado: "En un diagrama de Gantt, ¿qué va en el eje horizontal?"

explicacion: |
  Las tareas van en el eje vertical.
```

### 9 — Barra

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "basico"
  tags: ["barras"]

tipo: mc
opciones_explicitas: ["La duración de la tarea", "El costo", "La prioridad", "El responsable"]
respuesta: "La duración de la tarea"

enunciado: "¿Qué representa el largo de una barra de Gantt?"

explicacion: |
  Empieza en la fecha de inicio.
```

### 10 — Rombo

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "intermedio"
  tags: ["hito"]

tipo: mc
opciones_explicitas: ["Un hito", "Una tarea", "Una persona", "Un error"]
respuesta: "Un hito"

enunciado: "¿Qué se marca con un rombo en un Gantt?"

explicacion: |
  Un hito no tiene duración.
```

### 11 — Se ve

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "basico"
  tags: ["gantt"]

tipo: mc
opciones_explicitas: ["Superposiciones, dependencias y avance", "Los sueldos", "Los errores de ortografía", "Los colores de la empresa"]
respuesta: "Superposiciones, dependencias y avance"

enunciado: "¿Qué se ve de un vistazo en un Gantt?"

explicacion: |
  Es su ventaja principal.
```

### 12 — Fin

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "intermedio"
  tags: ["formulas"]

tipo: mc
opciones_explicitas: ["`=Inicio + Duración - 1`, es decir, el día 5", "`=Inicio + Duración`, el día 6", "`=Duración`, el día 5 siempre", "No se puede"]
respuesta: "`=Inicio + Duración - 1`, es decir, el día 5"

enunciado: "En una planilla, ¿cómo se calcula el fin de una tarea que dura 5 días y empieza el 1?"

explicacion: |
  Si empieza el día 1 y dura 5 días, ocupa los días 1 a 5.
```

### 13 — Días hábiles

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "avanzado"
  tags: ["dia.lab"]

tipo: mc
opciones_explicitas: ["`DIA.LAB` (`WORKDAY`)", "`HOY`", "`SUMA`", "`SI`"]
respuesta: "`DIA.LAB` (`WORKDAY`)"

enunciado: "¿Qué función cuenta solo días hábiles?"

explicacion: |
  Permite excluir fines de semana y feriados.
```

### 14 — Formato condicional

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "intermedio"
  tags: ["condicional"]

tipo: mc
opciones_explicitas: ["Para pintar las celdas del calendario entre el inicio y el fin", "Para cifrar", "Para borrar", "Para sumar"]
respuesta: "Para pintar las celdas del calendario entre el inicio y el fin"

enunciado: "¿Para qué se usa el formato condicional en un Gantt de planilla?"

explicacion: |
  Dibuja las barras automáticamente.
```

### 15 — Camino crítico

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "intermedio"
  tags: ["camino critico"]

tipo: mc
opciones_explicitas: ["La cadena de tareas dependientes que determina la duración total", "La tarea más difícil", "El camino más corto", "El presupuesto"]
respuesta: "La cadena de tareas dependientes que determina la duración total"

enunciado: "¿Qué es el camino crítico?"

explicacion: |
  Si se atrasa una tarea crítica, se atrasa todo.
```

### 16 — Holgura

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "avanzado"
  tags: ["holgura"]

tipo: mc
opciones_explicitas: ["El tiempo que puede retrasarse sin afectar la fecha final", "El costo", "La cantidad de personas", "Un error"]
respuesta: "El tiempo que puede retrasarse sin afectar la fecha final"

enunciado: "¿Qué es la holgura de una tarea?"

explicacion: |
  Las tareas del camino crítico no tienen.
```

### 17 — Margen

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "basico"
  tags: ["margen"]

tipo: mc
opciones_explicitas: ["Porque los tiempos casi siempre se subestiman", "Por costumbre", "Porque queda bien", "Porque es obligatorio"]
respuesta: "Porque los tiempos casi siempre se subestiman"

enunciado: "¿Por qué se deja margen en un cronograma?"

explicacion: |
  Los imprevistos ocurren.
```

### 18 — Feriados

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "basico"
  tags: ["calendario"]

tipo: mc
opciones_explicitas: ["Días hábiles, feriados y vacaciones", "Solo los fines de semana", "Solo los lunes", "Nada"]
respuesta: "Días hábiles, feriados y vacaciones"

enunciado: "¿Qué se considera al fijar fechas?"

explicacion: |
  Si no se cuentan, el plan es irreal.
```

### 19 — Revisión

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "basico"
  tags: ["seguimiento"]

tipo: mc
opciones_explicitas: ["Periódicamente, comparando lo previsto con lo real", "Una vez al final", "Nunca", "Solo si hay problemas graves"]
respuesta: "Periódicamente, comparando lo previsto con lo real"

enunciado: "¿Cada cuánto conviene revisar el plan?"

explicacion: |
  Detecta atrasos a tiempo.
```

### 20 — Comunicar

```
metadata:
  materia: "ofimatica"
  tema: "cronogramas_y_diagrama_de_gantt"
  nivel: "basico"
  tags: ["comunicacion"]

tipo: mc
opciones_explicitas: ["Comunicarlos al equipo", "Ocultarlos", "Esperar a que se enteren", "Borrarlos"]
respuesta: "Comunicarlos al equipo"

enunciado: "¿Qué se hace con los cambios al plan?"

explicacion: |
  Todos deben trabajar con el mismo plan.
```

