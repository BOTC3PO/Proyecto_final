### 1 — Diferencia entre Benchmarking y Reingeniería
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodologia", "benchmarking"]

variables:
  concepto_clave: "benchmarking"

enunciado: "El proceso de comparar procesos o productos propios con los de los líderes del mercado para identificar mejoras se denomina {concepto_clave}, mientras que la reingeniería implica un cambio radical de la estructura existente."

opciones_explicitas: ["benchmarking", "reingeniería", "prototipado", "iteración"]
respuesta: "benchmarking"
tipo: "mc"

explicacion: |
  El benchmarking busca mejorar mediante la comparación con estándares de excelencia, sin destruir el proceso actual, a diferencia de la reingeniería que propone un rediseño total desde cero.
```

### 2 — El concepto de "Reinventar la rueda"
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["eficiencia", "precedentes"]

variables:
  es_eficiente: falso

enunciado: "Si un ingeniero decide diseñar desde cero un mecanismo de engranajes que ya ha sido optimizado y documentado ampliamente por la industria, ¿está aplicando una práctica de eficiencia en el diseño?"

respuesta: es_eficiente
tipo: "vf"

explicacion: |
  No es eficiente. Ignorar soluciones existentes y "reinventar la rueda" consume recursos, tiempo y aumenta el riesgo de errores que ya han sido resueltos en precedentes técnicos.
```

### 3 — Etapas de la investigación de soluciones
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: ["Identificar necesidades", "Analizar soluciones existentes", "Evaluar precedentes", "Seleccionar arquitectura"]
respuesta: ["Identificar necesidades", "Analizar soluciones existentes", "Evaluar precedentes", "Seleccionar arquitectura"]
tipo: "ordenar"

explicacion: |
  Antes de diseñar, se debe entender qué se necesita, buscar qué se ha hecho antes (análisis), entender por qué funcionó o falló (evaluar) y finalmente elegir el camino a seguir.
```

### 4 — Estado del Arte vs. Prototipo
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "avanzado"
  tags: ["investigacion", "diseño"]

variables:
  idx: uno_de([0, 1])
  terminos: [["Estado del Arte", "Prototipo"], ["Revisión de literatura", "Modelo físico experimental"]]

enunciado: "La investigación de soluciones existentes se basa principalmente en el {terminos[idx][0]}, mientras que la validación de una nueva idea propia se realiza mediante un {terminos[idx][1]}."

respuesta: [terminos[idx][0], terminos[idx][1]]
tipo: "completar"
respuestas_validas: [terminos[idx][0], terminos[idx][1]]

explicacion: |
  El Estado del Arte es el conocimiento actual acumulado en la disciplina, mientras que el prototipo es la materialización física o digital de la nueva propuesta del ingeniero.
```

### 5 — El riesgo de la falta de precedentes
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["riesgo", "diseño"]

variables:
  riesgo_alto: verdadero

enunciado: "Si un ingeniero omite la fase de investigación de soluciones existentes, el riesgo de cometer errores de diseño ya superados por la industria es ___."

respuesta: "alto"
tipo: "completar"
respuestas_validas: ["alto", "muy alto"]

explicacion: |
  La falta de estudio de precedentes incrementa exponencialmente la probabilidad de repetir fallos técnicos o de gestión que ya fueron resueltos en proyectos anteriores.
```