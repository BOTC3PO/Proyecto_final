### 1 — El recurso de apelación
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["recurso", "sentencia", "segunda_instancia"]

variables:
  caso_idx: uno_de([0, 1])
  escenario: uno_de([["El demandante perdió el juicio", "El demandante"], ["El juez dictó una sentencia injusta", "El demandante"]])

respuesta: escenario[caso_idx][1]
tipo: mc
opciones_explicitas: ["El demandante", "El demandado", "El juez", "El fiscal"]

enunciado: "En un proceso civil, si {escenario[caso_idx][0]}, la parte afectada puede interponer un recurso de apelación para que un tribunal superior revise la resolución. ¿Quién es el sujeto que tiene legitimación para apelar en este caso?"

explicacion: |
  El recurso de apelación es un medio de impugnación que permite a la parte que se siente agraviada por una resolución judicial solicitar que un tribunal de jerarquía superior la revise, modifique o anule.
```

### 2 — Requisitos de la apelación
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["requisitos", "agravio", "proceso"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es obligatorio que el apelante manifieste expresamente los agravios (los errores que considera que cometió el juez) para que el recurso de apelación sea admitido?"

explicacion: |
  Para que la apelación sea válida, no basta con la disconformidad; es indispensable la fundamentación del agravio, es decir, explicar por qué la sentencia es errónea en su aplicación de la ley o en la valoración de los hechos.
```

### 3 — El proceso de revisión
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["secuencia", "proceso_judicial"]

opciones_explicitas: ["Dictado de la sentencia de primera instancia", "Interposición del recurso de apelación", "Expresión de agravios", "Resolución de la Cámara/Tribal Superior"]

respuesta: ["Dictado de la sentencia de primera instancia", "Interposición del recurso de apelación", "Expresión de agravios", "Resolución de la Cámara/Tribal Superior"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas de un proceso judicial que incluye la revisión por una segunda instancia:"

explicacion: |
  El proceso comienza con la resolución del juez de grado, seguido por la voluntad de la parte de apelar, la fundamentación técnica de sus quejas y, finalmente, el fallo del tribunal superior.
```

### 4 — Efectos de la apelación
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "avanzado"
  tags: ["efectos", "suspension", "ejecucion"]

variables:
  tipo_efecto: uno_de([0, 1])
  efecto_desc: ["suspende la ejecución de la sentencia", "no suspende la ejecución de la sentencia"]
  efecto_val: ["suspensivo", "devolutivo"]

respuesta: efecto_val[tipo_efecto]
tipo: mc
opciones_explicitas: ["suspensivo", "devolutivo"]

enunciado: "Si un recurso de apelación se admite con efecto {efecto_desc[tipo_efecto]}, la ejecución de la sentencia queda paralizada hasta que el superior resuelva. ¿Cómo se denomina técnicamente a este efecto?"

explicacion: |
  El efecto suspensivo detiene la ejecución de la resolución recurrida, mientras que el efecto devolutivo permite que la sentencia se cumpla a pesar de la apelación.
```

### 5 — La resolución de segunda instancia
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["sentencia", "terminacion"]

respuesta: "confirmar"
tipo: completar
respuestas_validas: ["confirmar", "revocar", "anular"]

enunciado: "Si el tribunal de alzada (segunda instancia) coincide con el criterio del juez de primera instancia y considera que la sentencia es correcta, su decisión será ___ la sentencia original."

explicacion: |
  Cuando el tribunal superior ratifica la decisión del inferior, se dice que la sentencia ha sido 'confirmada'. Si la cambia, la 'revoca'; si la deja sin efecto por errores de forma, la 'anula'.
```