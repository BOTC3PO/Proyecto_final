# Informatica — comunicacion entre procesos (cuestionario, 20 preguntas VBLang)

> Tema: `informatica/comunicacion-entre-procesos`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["procesos", "aislamiento"]

respuesta: verdadero
tipo: vf

enunciado: "Los procesos en un sistema operativo moderno funcionan de manera completamente integrada y comparten su espacio de memoria por defecto."

explicacion: |
  Falso. Los procesos se gestionan de manera aislada por seguridad y estabilidad. Si uno falla, no necesariamente se cae el resto gracias a este aislamiento.
```

### 2 — pregunta 2

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["estabilidad", "seguridad"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "¿Cuál es una razón clave para que el sistema operativo gestione los procesos de forma aislada?"

explicacion: |
  El aislamiento mejora la estabilidad y la seguridad. Si un proceso falla, no corrompe la memoria de otros procesos ni cae todo el sistema.
```

### 3 — pregunta 3

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["ejemplo", "portapapeles"]

respuesta: 2
tipo: mc
opciones: 4

enunciado: "Cuando copias texto de un editor y lo pegas en otro, ¿qué mecanismo está involucrado indirectamente?"

explicacion: |
  El portapapeles es una forma de IPC. El editor A escribe en una región de memoria compartida (o envía un mensaje al gestor de portapapeles) y el editor B lee de ahí.
```

### 4 — pregunta 4

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "avanzado"
  tags: ["seguridad", "comparacion"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "¿Qué mecanismo es generalmente más seguro por defecto al no requerir conocimiento de los detalles internos del otro proceso?"

explicacion: |
  El intercambio de mensajes es más seguro porque los procesos no compiten por el mismo espacio de memoria, reduciendo riesgos de corrupción accidental.
```

### 5 — pregunta 5

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["lenguaje", "sintaxis"]

respuesta: verdadero
tipo: vf

enunciado: "En el lenguaje de descripción de ejercicios, los booleanos se escriben como 'true' o 'false'."

explicacion: |
  Falso. En este DSL, los booleanos literales son 'verdadero' y 'falso', sin comillas.
```

### 6 — pregunta 6

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["diseño", "ventajas"]

respuesta: 3
tipo: mc
opciones: 4

enunciado: "¿Cuál NO es una ventaja directa de usar IPC sobre un monolito gigante?"

explicacion: |
  La complejidad de implementación es una DESVENTAJA. Las ventajas son modularidad, seguridad, estabilidad y reutilización. La opción de "menor complejidad de código" es falsa.
```

### 7 — pregunta 7

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["ipc", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "La comunicación entre procesos (IPC) es el conjunto de mecanismos que permiten que procesos independientes intercambien información o modifiquen su comportamiento."

explicacion: |
  Correcto. La IPC es fundamental para que aplicaciones aisladas colaboren, como cuando copiar y pegar texto involucra comunicación entre el editor y el sistema de almacenamiento temporal.
```

### 8 — pregunta 8

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["seguridad", "mensajes"]

respuesta: verdadero
tipo: vf

enunciado: "El intercambio de mensajes es considerado más seguro que la memoria compartida porque los procesos no necesitan conocer los detalles internos del otro."

explicacion: |
  Correcto. Al usar canales definidos por el SO, los procesos mantienen su aislamiento interno, reduciendo riesgos de corrupción accidental de memoria.
```

### 9 — pregunta 9

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["proceso", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "Cada aplicación que abres en tu computadora, como un navegador o un reproductor de música, es considerada un proceso separado."

explicacion: |
  Correcto. El sistema operativo trata a cada aplicación ejecutándose como un proceso independiente con su propio espacio de memoria.
```

### 10 — pregunta 10

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["eficiencia", "diseno"]

respuesta: verdadero
tipo: vf

enunciado: "Dividir tareas complejas en procesos pequeños que se comunican mejora la eficiencia, seguridad y mantenimiento del software."

explicacion: |
  Correcto. La modularidad mediante IPC permite crear sistemas más robustos, fáciles de actualizar y menos propensos a fallos catastróficos.
```

### 11 — pregunta 11

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["errores", "memoria_compartida"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos procesos intentan escribir en el mismo lugar de memoria compartida al mismo tiempo sin sincronización, pueden ocurrir errores."

explicacion: |
  Correcto. La condición de carrera puede llevar a corrupción de datos, por lo que se requieren mecanismos de exclusión mutua o semáforos.
```

### 12 — pregunta 12

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["ejemplo", "portapapeles"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando copias y pegas texto, hay comunicación constante entre el editor de texto y el sistema de almacenamiento temporal."

explicacion: |
  Correcto. El portapapeles es un ejemplo cotidiano de IPC, donde un proceso escribe datos y otro los lee desde una zona compartida o canal del SO.
```

### 13 — pregunta 13

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["estabilidad", "aislamiento"]

respuesta: verdadero
tipo: vf

enunciado: "Debido al aislamiento, si un proceso falla, no necesariamente se cae el resto del sistema."

explicacion: |
  Correcto. El aislamiento de memoria previene que un error en un proceso afecte la integridad de otros procesos o del kernel.
```

### 14 — pregunta 14

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "avanzado"
  tags: ["aplicaciones", "rendimiento"]

respuesta: verdadero
tipo: vf

enunciado: "Para aplicaciones gráficas, la memoria compartida es preferible por su eficiencia en grandes volúmenes de datos."

explicacion: |
  Correcto. Los gráficos requieren transferir grandes cantidades de píxeles o vectores rápidamente, lo que la memoria compartida facilita mejor que los mensajes.
```

### 15 — pregunta 15

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["mensajes", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "En el intercambio de mensajes, los datos viajan a través de un canal definido por el sistema operativo."

explicacion: |
  Correcto. El SO proporciona la infraestructura (colas de mensajes, pipes, etc.) que actúa como el canal de comunicación.
```

### 16 — pregunta 16

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["diseno", "beneficios"]

respuesta: verdadero
tipo: vf

enunciado: "El uso de IPC mejora la capacidad de mantenimiento del software al permitir dividir tareas en partes manejables."

explicacion: |
  Correcto. Los módulos pueden desarrollarse, probarse y actualizarse independientemente, facilitando el mantenimiento a largo plazo.
```

### 17 — pregunta 17

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["mensajes", "costo"]

respuesta: verdadero
tipo: vf

enunciado: "El intercambio de mensajes implica copiar datos de un espacio de memoria a otro, lo que puede ser lento."

explicacion: |
  Correcto. La sobrecarga de copiar datos entre espacios de usuario y kernel (o entre procesos) es el principal costo del modelo de mensajes.
```

### 18 — pregunta 18

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "avanzado"
  tags: ["memoria_compartida", "control"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria compartida requiere mecanismos de sincronización para evitar que procesos escriban simultáneamente en el mismo lugar."

explicacion: |
  Correcto. Sin sincronización (mutex, semáforos), la escritura concurrente lleva a condiciones de carrera y corrupción de datos.
```

### 19 — pregunta 19

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["ejemplo", "portapapeles"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema de almacenamiento temporal (portapapeles) participa en la comunicación cuando copias texto."

explicacion: |
  Correcto. El portapapeles es un servicio del SO que actúa como intermediario de datos entre el proceso que copia y el que pega.
```

### 20 — pregunta 20

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["sincronizacion", "riesgos"]

respuesta: falso
tipo: vf

enunciado: "La memoria compartida elimina por completo la necesidad de mecanismos de sincronización entre procesos, ya que el sistema operativo gestiona automáticamente la integridad de los datos sin intervención del desarrollador."

explicacion: |
  Falso. La memoria compartida introduce el desafío de la sincronización. Si dos procesos escriben simultáneamente, pueden ocurrir condiciones de carrera o corrupción de datos, requiriendo semáforos o mutex.
```
