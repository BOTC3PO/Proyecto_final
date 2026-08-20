### 1 — Flujo de calor espontáneo
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "calor", "entropia"]

tipo: mc
opciones_explicitas: ["El calor fluye de un cuerpo frío a uno caliente de forma espontánea.", "El calor fluye de un cuerpo caliente a uno frío de forma espontánea.", "El calor no fluye entre cuerpos con la misma temperatura.", "El calor fluye en ambas direcciones con la misma probabilidad."]

enunciado: "En un sistema aislado, según la segunda ley de la termodinamica, el flujo espontáneo de calor ocurre siempre desde un cuerpo con mayor ___ hacia uno con menor ___."

explicacion: |
  La segunda ley de la termodinámica establece que el calor fluye espontáneamente de los cuerpos con mayor temperatura a los de menor temperatura, aumentando la entropía total del universo.
```

### 2 — El concepto de desorden
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["entropia", "desorden", "probabilidad"]

tipo: vf
respuesta: falso

enunciado: "La entropía se puede definir estrictamente como una medida del 'desorden' visual de las partículas en un sistema."

explicacion: |
  Aunque coloquialmente se usa la palabra 'desorden', la entropía es una medida de la cantidad de estados microscópicos (microestados) compatibles con un estado macroscópico dado. El término 'desorden' es una analogía útil pero físicamente imprecisa.
```

### 3 — Variación de la entropía en sistemas abiertos
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "avanzado"
  tags: ["entropia", "sistemas_abiertos", "orden"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10, "aumenta"], [20, "disminuye"]]

tipo: completar
respuestas_validas: ["aumenta", "disminuye"]
respuesta: datos[escenario_idx][1]

enunciado: "Si un sistema abierto (como un ser vivo) crea orden interno reduciendo su entropía local, la entropía total del universo ___ debido a la energía disipada en forma de calor."

explicacion: |
  Para que un sistema local disminuya su entropía (cree orden), debe realizar un trabajo o intercambiar energía con el entorno, lo que inevitablemente genera más entropía en el entorno de la que se reduce en el sistema.
```

### 4 — Ciclos termodinámicos ideales
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["ciclos", "entropia", "termodinamica"]

tipo: mc
opciones_explicitas: ["La entropía total del universo siempre disminuye en un ciclo ideal.", "La entropía total del universo aumenta en un ciclo real debido a la irreversibilidad.", "La entropía de un sistema cerrado se mantiene constante en cualquier proceso.", "La entropía de un sistema aumenta si el proceso es reversible."]

enunciado: "En un motor real (irreversible), la variación de la entropía total del universo es siempre:"

explicacion: |
  Debido a la irreversibilidad (fricción, turbulencias, transferencias de calor finitas), la entropía total del universo siempre aumenta en procesos reales.
```

### 5 — Orden de procesos termodinámicos
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["entropia", "procesos", "termodinamica"]

tipo: ordenar
opciones_explicitas: ["Un gas se expande espontáneamente ocupando todo el recipiente.", "Un gas se comprime espontáneamente ocupando solo una esquina del recipiente.", "Un gas se expande espontáneamente ocupando solo una esquina del recipiente.", "Un gas se comprime espontáneamente ocupando todo el recipiente."]

respuesta: ["Un gas se expande espontáneamente ocupando todo el recipiente.", "Un gas se comprime espontáneamente ocupando solo una esquina del recipiente."]

enunciado: "Ordena los siguientes eventos según la probabilidad estadística y la tendencia natural hacia el aumento de la entropía (de lo más probable/natural a lo menos probable/natural):"

explicacion: |
  La termodinámica se basa en la probabilidad: es extremadamente probable que las partículas ocupen todo el volumen disponible (mayor número de microestados) y extremadamente improbable que se concentren en un solo punto sin intervención externa.
```