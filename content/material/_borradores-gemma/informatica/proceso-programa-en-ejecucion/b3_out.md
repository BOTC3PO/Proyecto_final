### 1 — Programa vs Proceso
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["conceptos_basicos", "sistemas_operativos"]

respuesta: "proceso"
tipo: mc
opciones_explicitas: ["archivo", "proceso", "compilador", "kernel"]

enunciado: "Un programa es una entidad pasiva que reside en el disco, mientras que un ___ es una entidad activa que posee recursos del sistema (CPU, memoria, etc.)."

explicacion: |
  El programa es el código estático (un archivo en el disco), mientras que el proceso es la instancia de ese programa en ejecución, con su propio estado y recursos.
```

### 2 — Recursos de un proceso
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["recursos", "memoria"]

respuesta: falso
tipo: vf

enunciado: "Si ejecutas dos veces el mismo archivo 'navegador.exe', tendrás un único proceso con dos ventanas abiertas."

explicacion: |
  Falso. Cada vez que ejecutas un programa, el sistema operativo crea un proceso distinto con su propio espacio de direcciones y recursos, aunque el código de origen sea el mismo.
```

### 3 — Componentes del proceso
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["estructura", "memoria"]

variables:
  escenario: uno_de([[0, "Contador de instrucciones"], [1, "Espacio de direcciones"], [2, "Estado del proceso"]])

respuesta: tabla_respuestas[escenario][1]
tipo: completar
respuestas_validas: ["Contador de instrucciones", "Espacio de direcciones", "Estado del proceso"]

tabla_respuestas: [
  ["Contador de instrucciones", "Contador de instrucciones"],
  ["Espacio de direcciones", "Espacio de direcciones"],
  ["Estado del proceso", "Estado del proceso"]
]

enunciado: "Un proceso requiere de un ___ para saber cuál es la próxima instrucción que debe ejecutar la CPU."

explicacion: |
  El Program Counter (PC) o Contador de Instrucciones es un registro que indica la dirección de la próxima instrucción a ejecutar.
```

### 4 — Ciclo de vida de un proceso
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["estados", "ciclo_de_vida"]

respuesta: ["Nuevo", "Listo", "Ejecución", "Bloqueado", "Terminado"]
tipo: ordenar
opciones_explicitas: ["Nuevo", "Listo", "Ejecución", "Bloqueado", "Terminado"]

enunciado: "Ordena los estados típicos por los que pasa un proceso en un sistema operativo, desde su creación hasta su finalización:"

explicacion: |
  El ciclo de vida estándar implica la creación (Nuevo), la espera en cola (Listo), el uso de CPU (Ejecución), la espera por E/S (Bloqueado) y el cierre (Terminado).
```

### 5 — Diferencia fundamental
```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "avanzado"
  tags: ["memoria", "ejecucion"]

variables:
  caso: uno_de([[0, "estático"], [1, "dinámico"]])

respuesta: tabla_respuestas[caso][1]
tipo: completar
respuestas_validas: ["estático", "dinámico"]

tabla_respuestas: [
  ["estático", "estático"],
  ["dinámico", "dinámico"]
]

enunciado: "Mientras que el programa se considera un ente ___ almacenado en soporte persistente, el proceso es un ente ___ que reside principalmente en la memoria RAM."

explicacion: |
  El programa es una secuencia de instrucciones en un archivo (estático), mientras que el proceso es la entidad viva que gestiona memoria y registros (dinámico).
```