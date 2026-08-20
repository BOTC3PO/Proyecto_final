# Informatica — interrupciones (cuestionario, 24 preguntas VBLang)

> Tema: `informatica/interrupciones`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["definicion", "concepto"]

respuesta: "una señal que detiene la ejecución actual"
tipo: completar

enunciado: "Una interrupción es, básicamente, ___ que detiene momentáneamente la ejecución actual del procesador para atender una prioridad más urgente."

explicacion: |
  Las interrupciones son señales (de hardware o software) que permiten al procesador responder a eventos externos o internos de manera prioritaria, pausando temporalmente la tarea en curso.
```

### 2 — pregunta 2

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["procesador", "ejecucion"]

variables:
  instruccion_actual: random(1, 100)

respuesta: "terminar"
tipo: completar

enunciado: "Cuando un dispositivo envía una señal de interrupción, el procesador ___ de ejecutar la instrucción actual por seguridad antes de atender la solicitud."

explicacion: |
  Por razones de seguridad y consistencia del estado, el procesador completa la instrucción en curso antes de cambiar el flujo de control hacia el vector de interrupción.
```

### 3 — pregunta 3

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["vector", "memoria", "hardware"]

variables:
  tipo_vector: uno_de(["dirección", "registro", "puerto"])

respuesta: "dirección"
tipo: completar

enunciado: "El procesador busca una ___ de memoria especial llamada Vector de Interrupción, la cual apunta al Controlador de Interrupción."

explicacion: |
  El Vector de Interrupción es una tabla en la memoria que mapea cada tipo de interrupción a la dirección de memoria de su respectivo manejador (ISR).
```

### 4 — pregunta 4

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["isr", "software", "hardware"]

respuesta: "Controlador de Interrupción"
tipo: completar

enunciado: "La dirección del Vector de Interrupción apunta a un pequeño programa específico conocido como el ___ (o ISR)."

explicacion: |
  El Controlador de Interrupción (Interrupt Service Routine) es el código que se ejecuta para manejar el evento de interrupción específico.
```

### 5 — pregunta 5

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["hardware", "ejemplos"]

variables:
  dispositivo: uno_de(["teclado", "mouse", "disco duro"])

respuesta: "hardware"
tipo: completar

enunciado: "La señal generada por el clic de un botón del mouse o el ingreso de datos por un ___ es un ejemplo clásico de interrupción de hardware."

explicacion: |
  Las interrupciones de hardware son generadas por dispositivos físicos externos para informar al procesador de que necesitan atención.
```

### 6 — pregunta 6

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["software", "excepciones"]

variables:
  error: uno_de(["dividir por cero", "acceso ilegal", "memoria llena"])

respuesta: "software"
tipo: completar

enunciado: "Las interrupciones generadas por el propio programa o sistema operativo para reportar errores como dividir por cero se llaman interrupciones de ___."

explicacion: |
  Estas se denominan interrupciones de software, traps o excepciones, y surgen de la ejecución del código o del OS, no de un dispositivo físico externo.
```

### 7 — pregunta 7

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["estado", "pila", "registros"]

variables:
  componente: uno_de(["registros", "memoria cache", "disco"])

respuesta: "registros"
tipo: completar

enunciado: "El controlador de interrupción guarda el estado actual del procesador, como los valores de los ___, en la pila de memoria."

explicacion: |
  Guardar el estado de los registros es crucial para que el programa principal pueda reanudarse sin notar la pausa, restaurando los valores exactos previos.
```

### 8 — pregunta 8

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["comparacion", "clasificacion"]

variables:
  origen_hw: "dispositivo fisico"
  origen_sw: "programa o OS"

respuesta: "dispositivo fisico"
tipo: completar

enunciado: "Las interrupciones de hardware son generadas por ___, mientras que las de software son generadas por el propio programa o el sistema operativo."

explicacion: |
  La distinción clave es el origen: hardware proviene de señales eléctricas externas; software proviene de instrucciones ejecutadas o condiciones del sistema.
```

### 9 — pregunta 9

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["ejemplos", "software"]

variables:
  accion: uno_de(["solicitar servicio del sistema", "leer teclado", "enviar datos a red"])

respuesta: "solicitar servicio del sistema"
tipo: completar

enunciado: "Un ejemplo común de interrupción de software es cuando un programa necesita ___ del sistema operativo."

explicacion: |
  Las llamadas al sistema (syscalls) a menudo se implementan mediante interrupciones de software para pasar el control al kernel de manera segura.
```

### 10 — pregunta 10

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["vector", "estructura"]

variables:
  funcion: uno_de(["identificar", "ejecutar", "borrar"])

respuesta: "identificar"
tipo: completar

enunciado: "El Vector de Interrupción ayuda al procesador a ___ qué dispositivo solicitó la atención mediante la dirección correspondiente."

explicacion: |
  Cada entrada en la tabla de vectores apunta a la rutina específica para manejar ese tipo de interrupción, facilitando su identificación y procesamiento.
```

### 11 — pregunta 11

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["hardware", "redes"]

variables:
  evento: uno_de(["llegada de datos", "pérdida de energía", "actualización de driver"])

respuesta: "llegada de datos"
tipo: completar

enunciado: "La ___ por una tarjeta de red es un evento que genera una interrupción de hardware."

explicacion: |
  Cuando la NIC (Network Interface Card) recibe paquetes, envía una señal de interrupción al CPU para procesar la información sin esperar polling.
```

### 12 — pregunta 12

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

variables:
  paso1: "pausa"
  paso2: "atender"
  paso3: "reanudar"

respuesta: "pausa"
tipo: completar

enunciado: "El proceso sigue esta secuencia: 1. La interrupción ___ la tarea actual. 2. Se atiende la prioridad. 3. Se reanuda la tarea original."

explicacion: |
  La secuencia lógica es siempre: interrupción (pausa), servicio (atención) y retorno (reanudación).
```

### 13 — pregunta 13

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["hardware", "dispositivos"]

respuesta: "dispositivo físico externo"
tipo: completar

enunciado: "El clic del mouse es generado por un ___."

explicacion: |
  El mouse es un periférico externo que envía señales eléctricas al controlador de interrupciones del sistema.
```

### 14 — pregunta 14

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["software", "errores"]

respuesta: "el propio programa o el sistema operativo"
tipo: completar

enunciado: "Una división por cero es generada por ___."

explicacion: |
  Es un error de ejecución detectado por la CPU o el OS, clasificándose como interrupción de software (trap).
```

### 15 — pregunta 15

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["memoria", "direccion"]

variables:
  tipo_memoria: uno_de(["especial", "común", "virtual"])

respuesta: "especial"
tipo: completar

enunciado: "El procesador busca una dirección de memoria ___ llamada Vector de Interrupción."

explicacion: |
  Esta dirección es parte de una tabla reservada y especial en la memoria, no memoria de usuario común.
```

### 16 — pregunta 16

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["hardware", "almacenamiento"]

variables:
  evento: uno_de(["fin de lectura", "inicio de formateo", "cambio de nombre"])

respuesta: "fin de lectura"
tipo: completar

enunciado: "El ___ por un disco duro es un evento que genera una interrupción de hardware."

explicacion: |
  Cuando el disco termina de leer/escribir datos, envía una interrupción al CPU para informar que está listo para la siguiente operación.
```

### 17 — pregunta 17

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["estado", "registros"]

variables:
  dato: uno_de(["valores de los registros", "código del programa", "datos del usuario"])

respuesta: "valores de los registros"
tipo: completar

enunciado: "El controlador de interrupción guarda en la pila los ___ del procesador."

explicacion: |
  Los registros contienen el estado de ejecución (PC, flags, datos temporales) y deben preservarse para la reanudación.
```

### 18 — pregunta 18

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["definicion", "señal"]

respuesta: "señal"
tipo: completar

enunciado: "Una interrupción es una ___ de hardware o software."

explicacion: |
  Es una señal eléctrica (hardware) o una instrucción especial (software) que notifica al CPU.
```

### 19 — pregunta 19

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["comparacion", "origen"]

variables:
  origen_hw: "externo"
  origen_sw: "interno"

respuesta: "externo"
tipo: completar

enunciado: "Las interrupciones de hardware tienen un origen ___, mientras que las de software son internas."

explicacion: |
  Hardware: externo (periféricos). Software: interno (CPU/OS).
```

### 20 — pregunta 20

```
metadata:
  materia: "informática"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["analogia", "comprension"]

variables:
  situacion: uno_de(["leer un libro", "cocinar", "conducir"])

respuesta: verdadero

tipo: vf

enunciado: "La analogía de dejar de leer un libro para contestar el teléfono y luego retomar la lectura ilustra correctamente el concepto de pausa y recuperación de estado en las interrupciones."

explicacion: |
  La analogía es precisa: la tarea principal (leer) se pausa, se atiende la prioridad (teléfono) y luego se restaura el estado (continuar leyendo desde donde se quedó).
```

### 21 — pregunta 21

```
metadata:
  materia: "informática"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["espera_pasiva", "concepto"]

respuesta: falso

tipo: vf

enunciado: "Sin interrupciones, el procesador actuaría de manera activa, ejecutando tareas paralelas sin detenerse."

explicacion: |
  Falso. Sin interrupciones, el procesador tendría que esperar pasivamente o hacer polling (preguntar constantemente), lo cual es ineficiente y no es "actividad paralela" en el sentido moderno.
```

### 22 — pregunta 22

```
metadata:
  materia: "informática"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["vector", "memoria"]

respuesta: verdadero

tipo: vf

enunciado: "El Vector de Interrupción apunta a la dirección de memoria donde comienza el código del Controlador de Interrupción."

explicacion: |
  Verdadero. Es la tabla que mapea cada tipo de interrupción a su rutina de servicio correspondiente.
```

### 23 — pregunta 23

```
metadata:
  materia: "informática"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["polling", "comparacion"]

respuesta: verdadero

tipo: vf

enunciado: "El método de 'preguntar constantemente' a los dispositivos si tienen datos se conoce como polling y es menos eficiente que el uso de interrupciones."

explicacion: |
  Verdadero. El polling consume ciclos de CPU innecesariamente, mientras que las interrupciones son eventos asíncronos que despiertan al CPU solo cuando es necesario.
```

### 24 — pregunta 24

```
metadata:
  materia: "informática"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["transparencia", "recuperacion"]

respuesta: verdadero

tipo: vf

enunciado: "El objetivo de guardar y restaurar el estado es que el programa principal no note que hubo una pausa."

explicacion: |
  Verdadero. La interrupción debe ser transparente para el programa en ejecución, devolviéndolo a un estado idéntico al previo.
```
