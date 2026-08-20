### 1 — Definición de proceso
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos", "conceptos_basicos"]

respuesta: "proceso"
tipo: completar
respuestas_validas: ["proceso"]

enunciado: "Un programa es una entidad pasiva que reside en el disco, mientras que un ___ es una entidad activa que se encuentra en ejecución en la memoria."

explicacion: |
  Un programa es simplemente un conjunto de instrucciones almacenadas (archivo), mientras que un proceso es la instancia de ese programa en ejecución, con su propio estado, contador de programa y recursos asignados.
```

### 2 — Diferencia fundamental
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["El archivo 'navegador.exe' guardado en el disco", "programa"],
    ["La ventana del navegador abierta y consumiendo RAM", "proceso"]
  ]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["programa", "proceso"]

enunciado: "Identifica la naturaleza del siguiente elemento: {datos[escenario_idx][0]}"

explicacion: |
  {datos[escenario_idx][0]} se clasifica como {datos[escenario_idx][1]} porque la distinción principal radica en si la entidad está estática en almacenamiento o activa en la CPU/Memoria.
```

### 3 — Componentes de un proceso
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["gestion_de_procesos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que un proceso incluye no solo el código del programa, sino también el estado de los registros de la CPU y la memoria asignada?"

explicacion: |
  Verdadero. A diferencia del programa (que es solo código), el proceso es un paquete completo que incluye el contexto de ejecución (registros, pila, contador de programa, etc.).
```

### 4 — Ciclo de vida (Orden)
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["gestion_de_procesos"]

respuesta: ["Programa en disco", "Carga en memoria", "Ejecución en CPU", "Terminación"]
tipo: ordenar
opciones_explicitas: ["Programa en disco", "Carga en memoria", "Ejecución en CPU", "Terminación"]

enunciado: "Ordena cronológicamente las etapas desde que un usuario hace doble clic en un ejecutable hasta que este finaliza:"

explicacion: |
  El flujo lógico comienza con el archivo estático en el almacenamiento secundario, pasa a la memoria principal (RAM) mediante el cargador, se asigna tiempo de CPU para su ejecución y finalmente se liberan los recursos al terminar.
```

### 5 — Relación de cardinalidad
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Si un usuario abre tres instancias diferentes de un mismo editor de texto (por ejemplo, tres notas distintas), ¿cuántos procesos habrá corriendo en el sistema operativo?"

pasos:
  - "Identificar si las instancias son entidades independientes en ejecución."
  - "Relacionar cada instancia con un proceso distinto."

explicacion: |
  Cada vez que se inicia una instancia de un programa, el sistema operativo crea un proceso nuevo con su propio espacio de memoria y estado, aunque el código base (el programa) sea el mismo. Por lo tanto, hay 2 procesos (en este ejemplo hipotético de 2 instancias, pero el usuario preguntó por 3, corregimos lógica: el usuario preguntó por 3, la respuesta debe ser 3). 

# Corrigiendo para que la lógica sea coherente con la pregunta:
# Si la pregunta dice "tres instancias", la respuesta debe ser 3.
```

*(Nota: He corregido mentalmente la lógica de la 5 para el output final)*

### 5 — Relación de cardinalidad
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "Si un usuario abre tres instancias diferentes de un mismo editor de texto (por ejemplo, tres notas distintas), ¿cuántos procesos habrá corriendo en el sistema operativo?"

explicacion: |
  Cada vez que se inicia una instancia de un programa, el sistema operativo crea un proceso nuevo con su propio espacio de memoria y estado. Por lo tanto, hay 3 procesos.
```