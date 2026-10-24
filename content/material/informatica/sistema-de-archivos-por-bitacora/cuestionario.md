# Informatica — sistema de archivos por bitacora (cuestionario, 21 preguntas VBLang)

> Tema: `informatica/sistema-de-archivos-por-bitacora`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["journaling", "definicion", "consistencia"]

respuesta: verdadero
tipo: vf

enunciado: "La bitácora (journal) es un registro que almacena información sobre los cambios pendientes en los metadatos antes de aplicarlos al sistema de archivos."

explicacion: |
  Correcto. El propósito principal de la bitácora es registrar las intenciones de cambio en los metadatos para garantizar la consistencia del sistema ante fallos.
```

### 2 — pregunta 2

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["recuperacion", "consistencia", "reinicio"]

respuesta: verdadero
tipo: vf

enunciado: "Al reiniciar después de un fallo, el sistema lee la bitácora para determinar qué operaciones de metadatos estaban pendientes y las completa o revierte."

explicacion: |
  Correcto. La bitácora actúa como un plan de trabajo. Si hay operaciones incompletas, el sistema las procesa para restaurar la integridad lógica del sistema de archivos.
```

### 3 — pregunta 3

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["rendimiento", "fsck", "tiempo"]

variables:
  tiempo_fsck: random(30, 120)
  tiempo_journal: random(1, 5)

respuesta: tiempo_journal
tipo: input

enunciado: "Si un sistema sin journaling tarda {tiempo_fsck} segundos en escanear errores (fsck), ¿cuántos segundos tarda aproximadamente uno con journaling en recuperar la consistencia? (Redondea a entero)."

explicacion: |
  Con journaling, la recuperación es casi instantánea (segundos) porque solo se revisa la bitácora, a diferencia del escaneo completo del disco que toma minutos u horas.
```

### 4 — pregunta 4

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["concepto", "analogia", "planificacion"]

respuesta: verdadero
tipo: vf

enunciado: "La bitácora funciona como un 'cuaderno de apuntes' donde se escribe el plan antes de ejecutar la tarea física en el disco."

explicacion: |
  Correcto. Esta analogía ilustra cómo el sistema escribe la intención de cambio primero, garantizando que si falla, pueda saber qué había planeado hacer.
```

### 5 — pregunta 5

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["integridad", "estructura", "coherencia"]

respuesta: verdadero
tipo: vf

enunciado: "El journaling garantiza la integridad lógica, asegurando que la estructura de carpetas y archivos siempre sea coherente."

explicacion: |
  Correcto. La integridad lógica se refiere a que la estructura del sistema de archivos no queda rota o inconsistente tras un fallo.
```

### 6 — pregunta 6

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["fsck", "comparacion", "rendimiento"]

respuesta: falso
tipo: vf

enunciado: "Los sistemas con journaling requieren ejecutar fsck completo cada vez que se apaga la computadora para verificar la integridad."

explicacion: |
  Falso. Con journaling, el fsck es muy rápido porque solo verifica la bitácora. El fsck completo solo es necesario en sistemas sin journaling o si hay errores graves no resueltos por la bitácora.
```

### 7 — pregunta 7

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["estado", "bitacora", "fallos"]

respuesta: verdadero
tipo: vf

enunciado: "Un sistema de archivos se marca como 'sucio' (dirty) si hubo un fallo durante una operación que involucra la bitácora."

explicacion: |
  Correcto. El estado 'sucio' indica que hay operaciones en la bitácora que deben ser procesadas al reiniciar para completar o deshacer cambios.
```

### 8 — pregunta 8

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["rendimiento", "comparacion", "tiempo"]

variables:
  tiempo_sin_journal: random(10, 60)
  tiempo_con_journal: random(1, 5)

respuesta: tiempo_con_journal
tipo: input

enunciado: "Si un disco sin journaling tarda {tiempo_sin_journal} segundos en repararse, ¿cuántos segundos tarda uno con journaling? (Redondea a entero)."

explicacion: |
  La recuperación con journaling es mucho más rápida (segundos) porque solo se procesan las entradas pendientes de la bitácora.
```

### 9 — pregunta 9

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["consistencia", "estructura", "integridad"]

respuesta: verdadero
tipo: vf

enunciado: "La bitácora asegura que la estructura del sistema de archivos (directorios, bloques) sea consistente, aunque los datos de usuario estén intactos."

explicacion: |
  Correcto. El objetivo principal es la consistencia de la estructura (metadatos), permitiendo que el sistema acceda correctamente a los archivos.
```

### 10 — pregunta 10

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["fallos", "recuperacion", "bitacora"]

respuesta: verdadero
tipo: vf

enunciado: "Ante un fallo repentino, la bitácora permite al sistema saber qué tareas estaban pendientes al momento del corte."

explicacion: |
  Correcto. La bitácora contiene el registro de las operaciones incompletas, permitiendo una recuperación ordenada.
```

### 11 — pregunta 11

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["concepto", "diferencia", "backup"]

respuesta: falso
tipo: vf

enunciado: "La bitácora es un mecanismo de respaldo (backup) que copia los archivos de usuario a otro disco."

explicacion: |
  Falso. La bitácora no es un backup. Es un mecanismo de consistencia interna del sistema de archivos que registra cambios en metadatos, no una copia de seguridad de datos.
```

### 12 — pregunta 12

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["estabilidad", "usuario", "beneficio"]

respuesta: verdadero
tipo: vf

enunciado: "El uso de journaling contribuye a una computadora más estable y menos propensa a corrupción de datos."

explicacion: |
  Correcto. Al prevenir inconsistencias en la estructura del sistema de archivos, se reduce la probabilidad de errores y corrupción de datos.
```

### 13 — pregunta 13

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["verificacion", "fsck", "recuperacion"]

respuesta: verdadero
tipo: vf

enunciado: "El proceso de verificación tras un fallo con journaling es casi instantáneo porque el sistema ya sabe qué parte del disco está incompleta."

explicacion: |
  Correcto. La bitácora indica exactamente qué operaciones fallaron, evitando escanear todo el disco.
```

### 14 — pregunta 14

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["analogia", "funcionamiento", "bitacora"]

respuesta: verdadero
tipo: vf

enunciado: "La bitácora es como un asistente que escribe el plan antes de ejecutar la tarea, para saber qué hacer si se interrumpe el trabajo."

explicacion: |
  Correcto. Esta analogía ayuda a entender el rol de la bitácora como registro de intenciones de cambio.
```

### 15 — pregunta 15

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["integridad", "carpetas", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "El journaling asegura que la estructura de carpetas sea coherente, evitando que apunten a directorios inexistentes."

explicacion: |
  Correcto. La integridad de la estructura de directorios es clave para que el sistema pueda navegar y acceder a los archivos.
```

### 16 — pregunta 16

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["rendimiento", "tiempo", "comparacion"]

variables:
  tiempo_sin_journal: random(20, 90)
  tiempo_con_journal: random(1, 5)

respuesta: tiempo_con_journal
tipo: input

enunciado: "Si un disco sin journaling tarda {tiempo_sin_journal} segundos en repararse, ¿cuántos segundos tarda uno con journaling? (Redondea a entero)."

explicacion: |
  La recuperación con journaling es rápida (segundos) porque solo se procesan las entradas pendientes de la bitácora.
```

### 17 — pregunta 17

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["fallos", "luz", "recuperacion"]

respuesta: verdadero
tipo: vf

enunciado: "Ante un corte de luz, el journaling permite al sistema recuperar la consistencia de los metadatos al reiniciar."

explicacion: |
  Correcto. El journaling es crucial para manejar fallos de energía, asegurando que los cambios en metadatos se completen o se deshagan.
```

### 18 — pregunta 18

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["registro", "intencion", "bitacora"]

respuesta: verdadero
tipo: vf

enunciado: "La bitácora es un registro de las intenciones de cambio en los metadatos antes de que se apliquen."

explicacion: |
  Correcto. El registro de intenciones permite al sistema saber qué hacer si la operación se interrumpe.
```

### 19 — pregunta 19

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["consistencia", "logica", "integridad"]

respuesta: verdadero
tipo: vf

enunciado: "El journaling garantiza la consistencia lógica, asegurando que la estructura del sistema de archivos sea coherente."

explicacion: |
  Correcto. La consistencia lógica es el objetivo principal del journaling, evitando estructuras rotas.
```

### 20 — pregunta 20

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["fsck", "rendimiento", "comparacion"]

respuesta: falso
tipo: vf

enunciado: "Los sistemas con journaling requieren fsck completo cada vez que se apagan para verificar la integridad."

explicacion: |
  Falso. Con journaling, el fsck es rápido y solo verifica la bitácora. El fsck completo es innecesario en la mayoría de los casos.
```

### 21 — pregunta 21

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["estado", "sucio", "bitacora"]

respuesta: verdadero
tipo: vf

enunciado: "Un sistema se marca como 'sucio' si hubo un fallo durante una operación que involucra la bitácora."

explicacion: |
  Correcto. El estado 'sucio' indica que hay operaciones pendientes en la bitácora que deben procesarse al reiniciar.
```
