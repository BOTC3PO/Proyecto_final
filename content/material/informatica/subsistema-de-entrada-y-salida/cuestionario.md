# Informática — Subsistema de entrada y salida (cuestionario, 22 preguntas VBLang)

> Tema: `informatica/subsistema-de-entrada-y-salida`. Ver `teoria.md` en esta misma carpeta. Escrito a mano (Claude), cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "interactuar con el mundo exterior, recibiendo y enviando datos"
tipo: mc
opciones_explicitas: ["interactuar con el mundo exterior, recibiendo y enviando datos", "almacenar datos permanentemente sin procesarlos", "generar electricidad para la computadora"]

enunciado: "El subsistema de entrada y salida (E/S) permite que la computadora..."

explicacion: |
  Es el conjunto de componentes y protocolos que conecta a la
  computadora con el mundo exterior, recibiendo datos y enviando
  resultados.
```

### 2 — pregunta 2

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["entrada"]

variables:
  dispositivo: uno_de(["un teclado", "un mouse", "un micrófono"])

respuesta: "entrada"
tipo: mc
opciones_explicitas: ["entrada", "salida"]

enunciado: "\"{dispositivo}\" es un dispositivo de..."

explicacion: |
  Estos dispositivos ingresan datos al sistema para ser procesados: son
  dispositivos de entrada.
```

### 3 — pregunta 3

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["salida"]

variables:
  dispositivo: uno_de(["la pantalla", "los parlantes", "una impresora"])

respuesta: "salida"
tipo: mc
opciones_explicitas: ["entrada", "salida"]

enunciado: "\"{dispositivo}\" es un dispositivo de..."

explicacion: |
  Estos dispositivos muestran o entregan la información ya procesada
  por el sistema: son dispositivos de salida.
```

### 4 — pregunta 4

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "intermedio"
  tags: ["rendimiento"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La velocidad y eficiencia del subsistema de E/S determinan en gran medida el rendimiento general de la computadora."

explicacion: |
  A menudo el procesador es tan rápido que debe esperar a que los
  dispositivos de E/S envíen o reciban datos, afectando el rendimiento
  percibido.
```

### 5 — pregunta 5

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "intermedio"
  tags: ["controlador"]

variables:
  n: uno_de([1, 1])

respuesta: "controlador de E/S (chipset)"
tipo: mc
opciones_explicitas: ["controlador de E/S (chipset)", "el disco duro", "el mouse"]

enunciado: "El componente que actúa como traductor entre la CPU y los dispositivos externos se llama..."

explicacion: |
  El controlador de E/S o chipset asegura que los datos del hardware se
  entiendan correctamente por el sistema operativo, y viceversa.
```

### 6 — pregunta 6

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["conexion actual"]

variables:
  protocolo: uno_de(["USB", "Bluetooth"])

respuesta: verdadero
tipo: vf

enunciado: "\"{protocolo}\" es uno de los protocolos que predominan hoy en día para conectar dispositivos de E/S."

explicacion: |
  USB (Interfaz Serial Universal) y Bluetooth reemplazaron en gran
  medida a los puertos paralelo y serial históricos.
```

### 7 — pregunta 7

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["conexion historica"]

variables:
  puerto: uno_de(["el puerto paralelo", "el puerto serial"])

respuesta: verdadero
tipo: vf

enunciado: "\"{puerto}\" fue uno de los puertos usados históricamente antes de que predominaran los buses universales como USB."

explicacion: |
  Antes de USB y Bluetooth, las conexiones se hacían mediante puertos
  específicos como el paralelo o el serial.
```

### 8 — pregunta 8

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "avanzado"
  tags: ["mapeo de memoria"]

variables:
  n: uno_de([1, 1])

respuesta: "comunicarse con dispositivos de E/S como si fueran parte de la memoria principal"
tipo: mc
opciones_explicitas: ["comunicarse con dispositivos de E/S como si fueran parte de la memoria principal", "borrar la memoria RAM automáticamente", "duplicar los datos del disco duro"]

enunciado: "El \"mapeo de memoria\" permite a la CPU..."

explicacion: |
  Simplifica la programación: el procesador accede a direcciones de
  memoria reservadas para el hardware sin instrucciones especiales.
```

### 9 — pregunta 9

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "intermedio"
  tags: ["estandarizacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Gracias a protocolos estandarizados como USB, un mouse comprado en cualquier parte del mundo puede funcionar sin drivers complicados si el sistema operativo lo soporta."

explicacion: |
  La estandarización de los buses universales facilita la
  compatibilidad entre dispositivos de distintos fabricantes y países.
```

### 10 — pregunta 10

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["ejemplo whatsapp"]

variables:
  n: uno_de([1, 1])

respuesta: "el controlador de E/S"
tipo: mc
opciones_explicitas: ["el controlador de E/S", "la impresora", "el pendrive"]

enunciado: "Cuando presionás una tecla al escribir en WhatsApp Web, el teclado envía una señal eléctrica que primero traduce..."

explicacion: |
  El controlador de E/S traduce la señal del teclado antes de que la
  información llegue a la memoria RAM y al sistema operativo.
```

### 11 — pregunta 11

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "intermedio"
  tags: ["ejemplo whatsapp"]

variables:
  n: uno_de([1, 1])

respuesta: "la tarjeta gráfica"
tipo: mc
opciones_explicitas: ["la tarjeta gráfica", "el micrófono", "el mouse"]

enunciado: "Para que veas en pantalla la letra que escribiste, el dispositivo de salida que envía señales al monitor por HDMI o DisplayPort es..."

explicacion: |
  La tarjeta gráfica lee la información de la memoria y envía las
  señales que finalmente encienden los píxeles correspondientes.
```

### 12 — pregunta 12

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "intermedio"
  tags: ["ejemplo pendrive"]

variables:
  n: uno_de([1, 1])

respuesta: "salida"
tipo: mc
opciones_explicitas: ["entrada", "salida"]

enunciado: "Copiar un archivo desde tu disco duro hacia un pendrive USB es una operación de..."

explicacion: |
  Estás escribiendo datos en el pendrive: desde el punto de vista del
  sistema, es una operación de salida hacia ese dispositivo.
```

### 13 — pregunta 13

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "intermedio"
  tags: ["ejemplo pendrive"]

variables:
  n: uno_de([1, 1])

respuesta: "entrada"
tipo: mc
opciones_explicitas: ["entrada", "salida"]

enunciado: "Conectar un pendrive a otra computadora y abrir fotos guardadas en él es una operación de..."

explicacion: |
  Estás leyendo datos desde el pendrive hacia el sistema: es una
  operación de entrada.
```

### 14 — pregunta 14

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["metafora"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La teoría compara a la computadora con una cocina, donde el procesador es el chef y el subsistema de E/S es lo que permite recibir órdenes y entregar el plato terminado."

explicacion: |
  Es la metáfora usada para explicar por qué la computadora necesita
  E/S además de procesamiento y memoria.
```

### 15 — pregunta 15

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["sin es"]

variables:
  n: uno_de([1, 1])

respuesta: "una caja negra incapaz de comunicarse con el usuario"
tipo: mc
opciones_explicitas: ["una caja negra incapaz de comunicarse con el usuario", "más rápida al no tener que esperar dispositivos", "idéntica a un mainframe"]

enunciado: "Sin el subsistema de E/S, según la teoría, la computadora sería..."

explicacion: |
  Quedaría aislada y sin propósito práctico, sin poder recibir datos ni
  mostrar resultados.
```

### 16 — pregunta 16

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "intermedio"
  tags: ["diagnostico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Comprender el flujo bidireccional de E/S ayuda a diagnosticar problemas como un error de \"dispositivo no reconocido\" (cable, puerto o controladores)."

explicacion: |
  Saber cómo fluye la información entre hardware y software es útil
  para ubicar en qué parte de la cadena está fallando la conexión.
```

### 17 — pregunta 17

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["sigla usb"]

variables:
  n: uno_de([1, 1])

respuesta: "Interfaz Serial Universal"
tipo: completar

enunciado: "La sigla USB significa ___."

respuestas_validas:
  - "Interfaz Serial Universal"

explicacion: |
  USB (Interfaz Serial Universal) es el bus estándar más usado hoy para
  conectar dispositivos de E/S.
```

### 18 — pregunta 18

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "avanzado"
  tags: ["velocidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El procesador es a menudo tan rápido que debe esperar a que los dispositivos de entrada o salida envíen o reciban datos."

explicacion: |
  Esta espera explica por qué, aunque la CPU sea potente, un equipo
  puede sentirse lento si el subsistema de E/S es el cuello de botella.
```

### 19 — pregunta 19

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["entrada"]

variables:
  n: uno_de([1, 1])

respuesta: "un archivo descargado de internet"
tipo: mc
opciones_explicitas: ["un archivo descargado de internet", "el sonido de los parlantes", "el texto que se ve en pantalla"]

enunciado: "Según la teoría, ¿cuál de estos es un ejemplo de entrada al sistema?"

explicacion: |
  La entrada incluye cualquier dato que ingresa al sistema, incluido un
  archivo descargado, no sólo teclado o mouse.
```

### 20 — pregunta 20

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "intermedio"
  tags: ["cpu y dispositivos"]

variables:
  n: uno_de([1, 1])

respuesta: "operan a velocidades y con lenguajes muy diferentes"
tipo: mc
opciones_explicitas: ["operan a velocidades y con lenguajes muy diferentes", "son siempre idénticos entre sí", "no necesitan ningún tipo de traducción"]

enunciado: "La comunicación entre la CPU y los dispositivos externos no es directa ni sencilla porque..."

explicacion: |
  Por eso existe el controlador de E/S: para traducir entre lenguajes y
  velocidades distintas.
```

### 21 — pregunta 21

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "basico"
  tags: ["definicion cpu"]

variables:
  n: uno_de([1, 1])

respuesta: "unidad central de procesamiento"
tipo: completar

enunciado: "La sigla CPU significa ___."

respuestas_validas:
  - "unidad central de procesamiento"

explicacion: |
  CPU (unidad central de procesamiento) es el componente que se
  comunica con los dispositivos de E/S a través del controlador
  correspondiente.
```

### 22 — pregunta 22

```
metadata:
  materia: "informatica"
  tema: "subsistema_de_entrada_y_salida"
  nivel: "avanzado"
  tags: ["mapeo de memoria"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Gracias al mapeo de memoria, el procesador no necesita instrucciones especiales para leer o escribir datos en un disco duro o una tarjeta gráfica."

explicacion: |
  El mapeo de memoria simplifica la programación al tratar a los
  dispositivos de E/S como direcciones de memoria más.
```

