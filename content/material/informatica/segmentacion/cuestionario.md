# Informatica — segmentacion (cuestionario, 23 preguntas VBLang)

> Tema: `informatica/segmentacion`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["analogia", "comprension"]

respuesta: falso
tipo: vf

enunciado: "La segmentación es como enviar una caja enorme por correo en un solo paquete para ahorrar tiempo."

explicacion: |
  Falso. La analogía correcta es abrir la caja y enviar los objetos en sobres más chicos. Enviar una caja enorme puede saturar la conexión o causar pérdidas. La segmentación divide los datos para que viajen de manera eficiente y controlada.
```

### 2 — pregunta 2

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["mtu", "limite", "capacidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si los datos a enviar superan el MTU (Maximum Transmission Unit), el protocolo TCP los divide en segmentos más pequeños."

explicacion: |
  Verdadero. El MTU define el tamaño máximo de datos que puede transmitir una unidad de red. Si el dato es mayor, TCP lo segmenta para que cada segmento quepa dentro de ese límite sin perder información.
```

### 3 — pregunta 3

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["eficiencia", "red", "flujo"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación permite que diferentes tipos de información compartan el mismo cable sin interferirse mutuamente."

explicacion: |
  Verdadero. Al dividir los datos en paquetes pequeños, se facilita el multiplexado y el flujo de información. Esto permite que tráfico de video, voz y texto coexistan en la misma infraestructura física de manera eficiente.
```

### 4 — pregunta 4

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["reconstruccion", "integridad", "paquetes"]

respuesta: verdadero
tipo: vf

enunciado: "Los segmentos pueden llegar en desorden a la destino, pero el sistema receptor los reordena correctamente gracias al número de secuencia."

explicacion: |
  Verdadero. La segmentación no garantiza que los paquetes lleguen en el mismo orden que fueron enviados. El receptor utiliza los números de secuencia para reordenar los segmentos y reconstruir el archivo original intacto.
```

### 5 — pregunta 5

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["cabecera", "ip", "informacion"]

respuesta: verdadero
tipo: vf

enunciado: "Cada segmento recibe una etiqueta que incluye la dirección IP de origen y destino, además del número de secuencia."

explicacion: |
  Verdadero. La cabecera del segmento (en TCP) o del paquete (en IP) contiene la información de direccionamiento (IPs) y el control de flujo/orden (número de secuencia), esencial para la entrega correcta.
```

### 6 — pregunta 6

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["udp", "segmentacion", "protocolo"]

respuesta: verdadero
tipo: vf

enunciado: "El protocolo UDP también realiza segmentación de datos para adaptarse al MTU de la red."

explicacion: |
  Verdadero. Aunque UDP no ofrece la misma garantía de orden que TCP, la segmentación es una función necesaria en la capa de transporte para ambos protocolos si los datos exceden el tamaño máximo que puede encapsular el paquete IP subyacente.
```

### 7 — pregunta 7

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["analogia", "rompecabezas", "orden"]

respuesta: verdadero
tipo: vf

enunciado: "La reconstrucción de los datos en el receptor es similar a armar un rompecabezas donde cada pieza tiene un número que indica su posición."

explicacion: |
  Verdadero. Esta es la analogía clave. Cada segmento tiene un número de secuencia que actúa como la 'posición' del rompecabezas, permitiendo al receptor ensamblar la información correcta aunque las piezas lleguen desordenadas.
```

### 8 — pregunta 8

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["tamaño", "mtu", "optimizacion"]

respuesta: verdadero
tipo: vf

enunciado: "Los segmentos son más pequeños que el archivo original para facilitar su transmisión por la red."

explicacion: |
  Verdadero. La segmentación reduce el tamaño de cada unidad de datos para que se ajuste a las capacidades de la red (MTU), haciendo la transmisión más rápida, robusta y capaz de recuperarse de errores.
```

### 9 — pregunta 9

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["orden", "integridad", "secuencia"]

respuesta: verdadero
tipo: vf

enunciado: "Es fundamental que los segmentos lleguen en el orden correcto para que el archivo original se reconstruya sin errores."

explicacion: |
  Verdadero. Aunque la red puede entregar los paquetes desordenados, el protocolo de transporte (como TCP) debe garantizar que el receptor los reordene correctamente. Si el orden se pierde o los segmentos faltan, el archivo resultante estará corrupto.
```

### 10 — pregunta 10

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["aplicacion", "video", "streaming"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación permite la transmisión eficiente de archivos grandes como películas o documentos en internet."

explicacion: |
  Verdadero. Sin segmentación, transmitir video o archivos grandes sería inviable debido a los límites de tamaño de los paquetes de red y la inestabilidad de las conexiones. La segmentación hace posible el streaming y las descargas.
```

### 11 — pregunta 11

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["ip", "direccionamiento", "origen", "destino"]

respuesta: verdadero
tipo: vf

enunciado: "La dirección IP de origen y destino es parte de la información vital que permite que los segmentos lleguen al lugar correcto."

explicacion: |
  Verdadero. Aunque la segmentación ocurre en la capa de transporte, la información de direccionamiento IP (capa de red) es esencial para que cada segmento sepa a dónde ir. La segmentación y el direccionamiento trabajan juntos.
```

### 12 — pregunta 12

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["control", "flujo", "tcp"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación ayuda a controlar mejor el flujo de información entre emisor y receptor."

explicacion: |
  Verdadero. Al dividir los datos en segmentos, el protocolo puede gestionar el flujo, evitando que el emisor sature al receptor y permitiendo la retransmisión de segmentos perdidos, mejorando la eficiencia y confiabilidad.
```

### 13 — pregunta 13

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["capa", "red", "ip", "fragmentacion"]

respuesta: falso
tipo: vf

enunciado: "La segmentación es un proceso exclusivo de la capa de red (IP)."

explicacion: |
  Falso. La segmentación ocurre en la capa de transporte (TCP/UDP). La capa de red realiza una función similar llamada 'fragmentación' si los paquetes IP son demasiado grandes para la ruta, pero la segmentación inicial del flujo de datos es tarea de la capa de transporte.
```

### 14 — pregunta 14

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["errores", "retransmision", "confiabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación facilita la recuperación de errores al permitir retransmitir solo los segmentos perdidos."

explicacion: |
  Verdadero. Si un segmento se pierde, no es necesario reenviar todo el archivo. Solo se retransmite el segmento específico que falta, lo que hace el proceso de recuperación de errores mucho más eficiente.
```

### 15 — pregunta 15

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["secuencia", "identificador", "orden"]

respuesta: verdadero
tipo: vf

enunciado: "El número de secuencia es un identificador único dentro del flujo de datos que indica la posición del segmento."

explicacion: |
  Verdadero. El número de secuencia permite al receptor identificar qué segmento es cuál y en qué orden deben unirse. Es la clave para la reconstrucción correcta del mensaje original.
```

### 16 — pregunta 16

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["aplicacion", "pequeno", "grande"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación se aplica independientemente del tamaño del archivo, siempre que el flujo de datos deba transmitirse por la red."

explicacion: |
  Verdadero. Aunque es más crítica para archivos grandes, el proceso de segmentación (o encapsulación en paquetes) ocurre en la transmisión de datos. Para archivos pequeños, puede que no se requiera división adicional si caben en un solo paquete, pero el concepto de dividir el flujo sigue siendo la base.
```

### 17 — pregunta 17

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["mtu", "limite", "capacidad"]

respuesta: verdadero
tipo: vf

enunciado: "El MTU actúa como un límite máximo que los segmentos no deben superar para ser transmitidos correctamente."

explicacion: |
  Verdadero. El MTU (Maximum Transmission Unit) es el tamaño máximo de datos que una unidad de red puede transmitir en un solo paquete. Los segmentos deben respetar este límite para evitar la fragmentación en capas inferiores o la pérdida de paquetes.
```

### 18 — pregunta 18

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["multiplexado", "compartir", "red"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación permite que múltiples comunicaciones compartan el mismo medio físico de manera eficiente."

explicacion: |
  Verdadero. Al dividir los datos en paquetes pequeños, la red puede intercalar (multiplexar) paquetes de diferentes usuarios o aplicaciones en el mismo cable, optimizando el uso del ancho de banda.
```

### 19 — pregunta 19

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["emisor", "receptor", "proceso"]

respuesta: falso
tipo: vf

enunciado: "La reconstrucción de los segmentos en el archivo original ocurre en el emisor."

explicacion: |
  Falso. La reconstrucción ocurre en el **receptor**. El emisor es quien divide y envía los segmentos; el receptor los recibe, los reordena y los une para formar el archivo original.
```

### 20 — pregunta 20

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["latencia", "rendimiento", "eficiencia"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación puede reducir la latencia percibida al permitir que los primeros segmentos lleguen antes que el archivo completo."

explicacion: |
  Verdadero. Al enviar segmentos pequeños, el receptor puede comenzar a procesar o mostrar la información (como el inicio de un video) mientras llegan los segmentos restantes, mejorando la experiencia de usuario y la eficiencia de la red.
```

### 21 — pregunta 21

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["seguridad", "intercepcion", "privacidad"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación por sí sola no garantiza la seguridad de los datos, pero es un paso previo a la cifrado en muchas capas."

explicacion: |
  Verdadero. La segmentación divide los datos, pero no los protege. Para seguridad, se requiere cifrado (ej. TLS/SSL). Sin embargo, la segmentación es un paso fundamental en el proceso de encapsulación que permite aplicar medidas de seguridad a cada unidad de datos.
```

### 22 — pregunta 22

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["tcp", "udp", "diferencias"]

respuesta: verdadero
tipo: vf

enunciado: "Tanto TCP como UDP pueden segmentar datos, pero TCP garantiza el orden y la entrega, mientras que UDP no."

explicacion: |
  Verdadero. Ambos protocolos realizan la división de datos (segmentación) en la capa de transporte. Sin embargo, TCP añade mecanismos de control de flujo y retransmisión para asegurar la integridad y el orden, mientras que UDP entrega los segmentos tal como llegan sin garantías.
```

### 23 — pregunta 23

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["aplicacion", "grande", "necesidad"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación es esencial para transmitir archivos de varios gigabytes a través de internet."

explicacion: |
  Verdadero. Los archivos grandes exceden ampliamente el MTU de la red. Sin segmentación, no sería posible transmitirlos, ya que los paquetes serían demasiado grandes para ser manejados por los routers y enlaces de la red.
```
