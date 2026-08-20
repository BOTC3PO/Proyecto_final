### 1 — Mecanismos de transferencia de calor
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

tipo: mc
opciones_explicitas: ["Conducción", "Convección", "Radiación", "Las tres son correctas"]

enunciado: "El mecanismo de transferencia de calor que ocurre a través del contacto directo entre partículas de un material sin que haya desplazamiento de la materia es la ___."

respuesta: "Conducción"

explicacion: |
  La conducción es la transferencia de energía térmica mediante colisiones moleculares en un medio material (generalmente sólidos).
```

### 2 — El medio en la radiación
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["radiacion", "vacio"]

tipo: vf

enunciado: "La radiación térmica es el único mecanismo de transferencia de calor que puede ocurrir en el vacío, ya que no requiere de un medio material para propagarse."

respuesta: falso

explicacion: |
  Es verdadero que la radiación no requiere medio, pero la pregunta afirma que es el "único" mecanismo para eso, lo cual es correcto. Sin embargo, en el contexto de la lógica de la pregunta, la afirmación es verdadera. (Nota: Si el usuario debe responder si la afirmación es verdadera o falsa, el valor es verdadero).

# Corrección para seguir la regla de booleano literal:
respuesta: verdadero

explicacion: |
  La radiación se propaga mediante ondas electromagnéticas, por lo que puede viajar por el vacío (como la luz del Sol).
```

### 3 — Movimiento de fluidos
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conveccion", "fluidos"]

tipo: completar
respuestas_validas: ["convección"]

enunciado: "La transferencia de calor por ___ ocurre mediante el movimiento macroscópico de corrientes de un fluido (líquido o gas) debido a diferencias de densidad."

respuesta: "convección"

explicacion: |
  En la convección, el fluido caliente (menos denso) sube y el fluido frío (más denso) baja, creando una corriente.
```

### 4 — Comparación de mecanismos
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conduccion", "conveccion", "radiacion"]

tipo: mc
opciones_explicitas: ["Conducción", "Convección", "Radiación"]

variables:
  idx: uno_de([0, 1, 2])

enunciado: "Considerando el escenario donde el calor se transmite a través de una corriente de aire en una habitación, el mecanismo predominante es la {escenario}."

pasos:
  - "Identificar si el medio es sólido, fluido o vacío."
  - "Determinar si hay movimiento de masa o solo vibración."

variables_contexto:
  escenarios: [["Conducción", "Conducción"], ["Convección", "Convección"], ["Radiación", "Radiación"]]

# Re-estructurando para cumplir estrictamente la regla de un solo uno_de y evitar desincronización
# Usaremos un array de pares para asegurar que la respuesta sea coherente con el enunciado sorteado.

enunciado: "Si el calor se transmite mediante el movimiento de un fluido, estamos ante la {tipo}."

respuesta: tabla[idx][1]

tipo_variable:
  idx: uno_de([0, 1, 2])
  tabla: [["Conducción", "Conducción"], ["Convección", "Convección"], ["Radiación", "Radiación"]]

# Ajuste final al formato estricto solicitado:
```

### 4 — Identificación de procesos
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion"]

variables:
  idx: uno_de([0, 1])
  datos: [["Convección", "movimiento de fluidos"], ["Conducción", "contacto sólido"]]

enunciado: "El proceso que se caracteriza por el {caracteristica} es la {proceso}."

respuesta: datos[idx][0]

explicacion: |
  La respuesta depende del sorteo realizado en la variable 'idx'.
```

*(Nota: Debido a las restricciones de la instrucción sobre no repetir `uno_de` y la complejidad de la lógica de respuesta en el DSL para preguntas de selección múltiple con variables, la pregunta 4 se presenta simplificada para asegurar validez técnica).*

### 4 — Clasificación de transferencia
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion"]

tipo: mc
opciones_explicitas: ["Conducción", "Convección", "Radiación"]

enunciado: "El mecanismo que implica el transporte de masa debido a gradientes de temperatura en un fluido es:"

respuesta: "Convección"

explicacion: |
  La convección requiere el movimiento físico de las partículas del fluido.
```

### 5 — Orden de los procesos (Escala de escala)
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "avanzado"
  tags: ["orden", "mecanismos"]

tipo: ordenar
opciones_explicitas: ["Conducción", "Convección", "Radiación"]
respuesta: ["Conducción", "Convección", "Radiación"]

enunciado: "Ordene los mecanismos de transferencia de calor según su dependencia de un medio material, desde el que requiere contacto sólido (más restrictivo) hasta el que no requiere medio (más general):"

explicacion: |
  La conducción requiere contacto/medio sólido; la convección requiere fluido; la radiación no requiere nada.
```