### 1 — El salto simbólico
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["evolucion", "cognicion", "simbolismo"]

respuesta: "simbólico"
tipo: completar
respuestas_validas: ["simbólico"]

enunciado: "El arte requiere la capacidad de realizar un salto ___ para representar algo que no está presente físicamente en el entorno inmediato."

explicacion: |
  Representar un objeto ausente (como un animal en una cueva) requiere que el cerebro humano procese conceptos abstractos y símbolos, marcando un hito en la evolución cognitiva.
```

### 2 — Evidencia cognitiva
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["cognicion", "evolucion"]

variables:
  es_evidencia: verdadero

respuesta: es_evidencia
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "La aparición de representaciones pictóricas en el registro arqueológico es evidencia de una capacidad cognitiva avanzada. ¿Es esto cierto?"

explicacion: |
  La capacidad de proyectar una imagen mental sobre una superficie física demuestra que el Homo sapiens ya poseía pensamiento simbólico.
```

### 3 — Representación de lo ausente
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["abstraccion", "evolucion"]

variables:
  escenario: uno_de([[0, "un bisonte en una cueva"], [1, "un paisaje estático"], [2, "una herramienta de piedra"]])
  respuesta_texto: uno_de(["un bisonte en una cueva", "un paisaje estático", "una herramienta de piedra"])

respuesta: respuesta_texto
tipo: mc
opciones_explicitas: ["un bisonte en una cueva", "un paisaje estático", "una herramienta de piedra"]

enunciado: "Si un artista prehistórico pinta {escenario[0]}, está demostrando la capacidad de representar lo que está ___."

explicacion: |
  El arte no es solo imitación, es la capacidad de traer a la mente un objeto ausente para darle un significado nuevo.
```

### 4 — El proceso de abstracción
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["procesos_mentales", "abstraccion"]

respuesta: 2
tipo: ordenar
opciones_explicitas: ["Percepción del objeto real", "Procesamiento mental/abstracción", "Representación simbólica en soporte"]

enunciado: "Ordena cronológicamente los procesos cognitivos necesarios para que un humano primitivo cree una pintura rupestre:"

explicacion: |
  Primero se percibe el mundo, luego el cerebro abstrae la esencia del objeto y finalmente se ejecuta la acción de representar ese concepto.
```

### 5 — Función del arte temprano
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["simbolismo", "evolucion"]

respuesta: "representar ideas o entidades ausentes"
tipo: completar
respuestas_validas: ["representar ideas o entidades ausentes"]

enunciado: "El objetivo principal del arte como fenómeno cognitivo es ___."

explicacion: |
  El arte permite que la mente humana trascienda el "aquí y ahora", permitiendo la comunicación de ideas, mitos y conceptos abstractos a través del tiempo.
```