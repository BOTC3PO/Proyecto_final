### 1 — Tipos de rocas fundamentales
```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["geologia", "rocas_igneas"]

respuesta: "ígnea"
tipo: mc
opciones_explicitas: ["sedimentaria", "metamórfica", "ígnea"]

enunciado: "Las rocas que se forman a partir de la solidificación del magma o la lava se denominan rocas _______."

explicacion: |
  Las rocas ígneas se forman cuando el material fundido (magma o lava) se enfría y se solidifica.
```

### 2 — El proceso de sedimentación
```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["geologia", "sedimentacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["sedimentaria", "sedimentos"], ["metamórfica", "presión"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas: ["sedimentos", "presión"]

enunciado: "El proceso de litificación ocurre cuando los _______ se compactan y cementan para formar nuevas rocas."

explicacion: |
  La acumulación y compactación de sedimentos es el proceso fundamental para la formación de rocas sedimentarias.
```

### 3 — Transformación por calor y presión
```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["geologia", "metamorfismo"]

respuesta: "metamórfica"
tipo: mc
opciones_explicitas: ["ígnea", "sedimentaria", "metamórfica"]

enunciado: "Cuando una roca preexistente es sometida a altas temperaturas y presiones sin llegar a fundirse, se transforma en una roca:"

explicacion: |
  El metamorfismo es el proceso de transformación de rocas en estado sólido debido a cambios en las condiciones de presión y temperatura.
```

### 4 — Secuencia del ciclo geológico
```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "avanzado"
  tags: ["geologia", "procesos"]

respuesta: ["magma", "roca ígnea", "sedimentos", "roca sedimentaria", "roca metamórfica"]
tipo: ordenar
opciones_explicitas: ["magma", "roca ígnea", "sedimentos", "roca sedimentaria", "roca metamórfica"]

enunciado: "Ordena la secuencia lógica de procesos que describe la transformación desde el material fundido hasta la formación de rocas metamórficas:"

pasos:
  - "Solidificación del magma"
  - "Erosión y depósito"
  - "Litificación"
  - "Metamorfismo"

explicacion: |
  El ciclo es un proceso continuo: el magma se solidifica (ígnea), se erosiona (sedimentos), se compacta (sedimentaria) y se transforma por presión/calor (metamórfica).
```

### 5 — El destino del magma
```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["geologia", "fusión"]

respuesta: "fusión"
tipo: completar
respuestas_validas: ["fusión", "erosión"]

enunciado: "Para que una roca metamórfica o sedimentaria vuelva a convertirse en magma, debe experimentar un proceso de _______."

explicacion: |
  La fusión es el proceso por el cual la roca sólida se funde debido a temperaturas extremadamente altas, reiniciando el ciclo desde el magma.
```