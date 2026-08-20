### 1 — Diversificación Cenozoica
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["cenozoico", "evolucion", "placentarios"]

respuesta: "Cenozoico"
tipo: completar
respuestas_validas: ["Cenozoico"]

enunciado: "La gran radiación de los mamíferos placentarios, que dio lugar a los órdenes actuales como primates y carnívoros, ocurrió principalmente durante la era ___."

explicacion: |
  Tras la extinción de los dinosaurios al final del Cretácico, el Cenozoico permitió que los mamíferos ocuparan nichos ecológicos vacantes, diversificándose rápidamente.
```

### 2 — Clasificación de Mamíferos
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["taxonomia", "ordenes"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["Primates", "Primates"], ["Carnivora", "Carnívoros"], ["Cetacea", "Cetáceos"]]

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Primates", "Carnivora", "Cetacea", "Ungulata"]

enunciado: "Si consideramos al orden de los {datos[idx][1]}, ¿cuál es su nombre científico correcto?"

explicacion: |
  El orden mencionado es {datos[idx][1]}, cuya nomenclatura taxonómica es {datos[idx][0]}.
```

### 3 — Adaptaciones de los Ungulados
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["ungulados", "adaptacion"]

respuesta: "puntas"
tipo: completar
respuestas_validas: ["puntas", "puntas"]

enunciado: "Durante la expansión de las praderas en el Cenozoico, muchos ungulados desarrollaron ___ extremidades para una carrera más eficiente."

explicacion: |
  La transición de bosques a pastizales favoreció la selección de extremidades alargadas y dedos especializados para la locomoción rápida.
```

### 4 — Árbol Filogenético
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["filogenia", "ordenar"]

respuesta: ["Euteria", "Primates", "Carnivora", "Cetacea"]
tipo: ordenar
opciones_explicitas: ["Euteria", "Primates", "Carnivora", "Cetacea"]

enunciado: "Ordene de mayor a menor nivel taxonómico (de lo más general a lo más específico) la siguiente jerarquía de un humano: [Primates, Euteria, Carnivora, Cetacea] (Nota: El usuario debe identificar la jerarquía correcta de un orden específico dentro de los Euterios, pero para este ejercicio de ordenamiento use la secuencia de niveles de un ancestro común a los órdenes)."

# Nota: El prompt pide ordenar una secuencia real. Reajustando para evitar ambigüedad:
# El usuario debe ordenar la jerarquía de un grupo específico.
# Como "ordenar" requiere la lista completa, usaré la jerarquía de un Cetáceo.

# Re-haciendo pregunta 4 para cumplir estrictamente con el tipo "ordenar" (secuencia real):
```

### 4 — Jerarquía de un Cetáceo
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["taxonomia", "ordenar"]

respuesta: ["Mammalia", "Eutheria", "Cetartiodactyla", "Cetacea"]
tipo: ordenar
opciones_explicitas: ["Mammalia", "Eutheria", "Cetartiodactyla", "Cetacea"]

enunciado: "Ordene la jerarquía taxonómica de una ballena desde la Clase hasta el Orden:"

explicacion: |
  La secuencia correcta es Clase Mammalia, Subclase Eutheria, Orden Cetartiodactyla y finalmente el Orden Cetacea.
```

### 5 — Relación de Grupos
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["relaciones", "evolucion"]

variables:
  idx: uno_de([0, 1])
  escenarios: [["Cetáceos", "acuáticos"], ["Primates", "arbóreos"]]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["acuáticos", "arbóreos", "terrestres", "voladores"]

enunciado: "La radiación de los {escenarios[idx][0]} durante el Cenozoico permitió la especialización en nichos {escenarios[idx][1]}."

explicacion: |
  Los {escenarios[idx][0]} son ejemplos clave de la diversificación de nichos durante el Cenozoico, adaptándose a entornos {escenarios[idx][1]}.
```