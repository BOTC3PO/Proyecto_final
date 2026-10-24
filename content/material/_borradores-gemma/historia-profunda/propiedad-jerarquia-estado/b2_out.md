### 1 — Origen de la desigualdad
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["excedente", "jerarquia", "sociedad"]

respuesta: "excedente"
tipo: "completar"
respuestas_validas: ["excedente"]

enunciado: "La transición de economías de subsistencia a sociedades complejas fue impulsada por la acumulación de ___ , lo que permitió que ciertos grupos controlaran recursos para sostener a otros."

explicacion: |
  Cuando una sociedad produce más de lo que consume inmediatamente (excedente), ese sobrante puede ser almacenado y controlado, permitiendo la aparición de élites que gestionan dicho recurso.
```

### 2 — Dinámicas de poder
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["excedente", "poder", "clases_sociales"]

variables:
  escenario: uno_de([["el control de la tierra", "el control de la fuerza"], ["el control de la tierra", "el control de la religión"], ["el control de la tierra", "el control de la tecnología"]])
  respuesta_correcta: ["el control de la tierra", "el control de la fuerza", "el control de la tierra", "el control de la religión", "el control de la tierra", "el control de la tecnología"]

opciones_explicitas: ["el control de la tierra", "el control de la fuerza", "el control de la religión", "el control de la tecnología"]

respuesta: escenario[1]
tipo: "mc"

enunciado: "En las primeras sociedades con excedente agrícola, la jerarquía social se consolidó principalmente a través de ___."

explicacion: |
  La propiedad de la tierra (medio de producción) permitió a unas familias acumular riqueza, mientras que la capacidad de ejercer fuerza o autoridad religiosa legitimaba ese control sobre el resto de la población.
```

### 3 — El proceso de estratificación
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["proceso", "estratificacion", "jerarquia"]

opciones_explicitas: ["Producción de excedente", "Acumulación de propiedad", "Estratificación social", "Formación del Estado"]

respuesta: ["Producción de excedente", "Acumulación de propiedad", "Estratificación social", "Formación del Estado"]
tipo: "ordenar"

enunciado: "Ordene cronológicamente los procesos que explican la aparición de las jerarquías estatales:"

explicacion: |
  Primero se genera el excedente, luego ese excedente se convierte en propiedad privada/acumulada, lo que crea divisiones de clase (estratificación) y finalmente requiere un aparato institucional (Estado) para regular la propiedad y la fuerza.
```

### 4 — Consecuencia de la propiedad privada
```
metadata:
  materia: "historia_profucha"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["propiedad", "desigualdad"]

variables:
  caso: uno_de([["A", "B"], ["C", "D"]])
  datos: [["Familia A posee tierras y herramientas", "Familia B posee solo su fuerza de trabajo"], ["Familia C posee excedentes almacenados", "Familia D posee tierras comunales"]]
  respuestas: [["dominante", "subordinada"], ["dominante", "subordinada"]]

enunciado: "Considerando el caso de la {caso[0]}, la relación social resultante es de carácter ___."

respuesta: caso[1]
tipo: "mc"

opciones_explicitas: ["dominante", "subordinada"]

explicacion: |
  La posesión de los medios de producción (tierra, herramientas, excedente) establece una relación asimétrica de poder entre quienes poseen y quienes solo pueden ofrecer su trabajo.
```

### 5 — El papel del Estado
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["estado", "legitimacion", "jerarquia"]

respuesta: "protección"
tipo: "completar"
respuestas_validas: ["protección", "legitimación"]

enunciado: "El Estado temprano surge para garantizar la ___ de la propiedad acumulada y la gestión del excedente mediante la institucionalización de la fuerza."

explicacion: |
  El Estado actúa como el garante de las reglas de propiedad, asegurando que el excedente acumulado por las élites sea respetado y gestionado de manera centralizada.
```