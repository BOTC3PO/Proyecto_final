### 1 — Mecanismos de transferencia térmica
```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

tipo: mc
opciones_explicitas: ["La conducción requiere un medio material para transferir energía", "La radiación depende de la densidad del medio para ocurrir", "La convección es la transferencia de energía mediante contacto directo", "La radiación requiere contacto físico entre cuerpos"]

enunciado: "La principal diferencia entre la radiación y los otros dos mecanismos de transferencia de calor es que..."

explicacion: |
  La conducción y la convección requieren un medio material (sólido, líquido o gas) para propagar el calor. La radiación, en cambio, se produce mediante ondas electromagnéticas y puede ocurrir en el vacío.
```

### 2 — El proceso de conducción
```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "basico"
  tags: ["conduccion", "mecanismos"]

tipo: completar
respuestas_validas: ["vibraciones", "colisiones"]

enunciado: "En un sólido, la conducción térmica ocurre principalmente debido a las ___ de las partículas y las colisiones entre electrones libres."

explicacion: |
  La conducción en sólidos se debe al movimiento de los electrones libres y a las vibraciones de la red cristalina (fonones) que transmiten la energía cinética de las zonas calientes a las frías.
```

### 3 — Convección en fluidos
```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "intermedio"
  tags: ["conveccion", "fluidos"]

variables:
  escenario: uno_de([
    ["agua hirviendo en una olla", "convección"],
    ["aire caliente subiendo en una habitación", "convección"],
    ["el movimiento de magma en el manto terrestre", "convección"]
  ])

tipo: mc
opciones_explicitas: ["conduccion", "conveccion", "radiacion"]

enunciado: "El fenómeno descrito en el escenario de {escenario[0]} es un ejemplo de..."

explicacion: |
  La convección es la transferencia de calor en fluidos (líquidos o gases) causada por la diferencia de densidad en las corrientes de fluido provocadas por cambios de temperatura.
```

### 4 — Verdad o Falso: Radiación en el vacío
```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "basico"
  tags: ["radiacion", "vacio"]

tipo: vf

enunciado: "La transferencia de calor por radiación puede ocurrir en el vacío absoluto, como ocurre con la energía que llega del Sol a la Tierra."

respuesta: verdadero

explicacion: |
  A diferencia de la conducción y la convección, la radiación no necesita un medio material, ya que se transporta mediante ondas electromagnéticas.
```

### 5 — Orden de los mecanismos según el medio
```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "intermedio"
  tags: ["ordenar", "mecanismos"]

tipo: ordenar
opciones_explicitas: ["Radiación", "Convección", "Conducción"]

enunciado: "Ordene los mecanismos de transferencia de calor de mayor a menor dependencia de la presencia de un medio material (desde el que no requiere medio hasta el que requiere contacto directo):"

respuesta: ["Radiación", "Convección", "Conducción"]

explicacion: |
  1. Radiación: No requiere medio (puede ser en vacío).
  2. Convección: Requiere un fluido (líquido o gas).
  3. Conducción: Es el mecanismo predominante en sólidos (contacto directo entre partículas).
```