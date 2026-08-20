# Informatica — Tcp ip capas enrutamiento (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Capas del modelo TCP/IP

```
metadata:
  materia: "informatica"
  tema: "modelo_tcp_ip"
  nivel: "basico"
  tags: ["redes", "protocolos"]

tipo: mc
opciones_explicitas: ["Aplicación", "Transporte", "Internet", "Acceso a la red"]

enunciado: "En el modelo TCP/IP, la capa encargada de la determinación de la ruta de los paquetes a través de la red se denomina capa de ________."

respuesta: "Internet"

explicacion: |
  La capa de Internet se encarga del direccionamiento lógico y el enrutamiento de paquetes (como en el protocolo IP).
```

### 2 — Encapsulamiento de datos

```
metadata:
  materia: "informatica"
  tema: "encapsulamiento"
  nivel: "basico"
  tags: ["datos", "capas"]

tipo: vf
respuesta: falso

enunciado: "¿Es correcto afirmar que un segmento de la capa de transporte se convierte en un datagrama al descender hacia la capa de Internet?"

explicacion: |
  Falso. Un segmento (Transporte) se encapsula en un datagrama (Internet). El término "segmento" se usa para la capa de Transporte.
```

### 3 — Orden de las capas

```
metadata:
  materia: "informatica"
  tema: "modelo_tcp_ip"
  nivel: "basico"
  tags: ["orden", "capas"]

tipo: ordenar
opciones_explicitas: ["Aplicación", "Transporte", "Internet", "Acceso a la red"]

enunciado: "Ordene las capas del modelo TCP/IP desde la capa superior (la más cercana al usuario) hasta la capa inferior (la más cercana al hardware)."

respuesta_orden: ["Aplicación", "Transporte", "Internet", "Acceso a la red"]

explicacion: |
  El orden jerárquico estándar es: Aplicación -> Transporte -> Internet -> Acceso a la red.
```

### 4 — Unidades de medida (PDU)

```
metadata:
  materia: "informatica"
  tema: "pdu_capas"
  nivel: "intermedio"
  tags: ["terminologia"]

variables:
  escenario: uno_de([["Paquete", "Internet"], ["Trama", "Acceso a la red"], ["Segmento", "Transporte"]])

tipo: completar
respuestas_validas:
  - "Paquete"
  - "Trama"
  - "Segmento"

enunciado: "En la capa de {escenario[0]}, la unidad de datos de protocolo (PDU) se denomina ________."

respuesta: escenario[1]

explicacion: |
  Cada capa tiene su propia PDU: Segmento (Transporte), Paquete (Internet) y Trama (Acceso a la red).
```

### 5 — Función de la capa de Transporte

```
metadata:
  materia: "informatica"
  tema: "capa_transporte"
  nivel: "basico"
  tags: ["protocolos", "tcp_udp"]

tipo: mc
opciones_explicitas: ["Control de flujo y error", "Direccionamiento físico", "Enrutamiento de paquetes", "Conversión de señales"]

enunciado: "¿Cuál es una de las funciones principales de la capa de Transporte?"

respuesta: "Control de flujo y error"

explicacion: |
  La capa de transporte (como TCP) se encarga de la comunicación extremo a extremo, controlando el flujo de datos y asegurando la integridad mediante la detección de errores.
```

### 6 — Capas del modelo TCP/IP

```
metadata:
  materia: "informatica"
  tema: "modelo_capas_red"
  nivel: "basico"
  tags: ["tcp_ip", "teoria"]

tipo: mc
opciones_explicitas: ["Aplicación", "Transporte", "Internet", "Acceso a Red"]

enunciado: "En el modelo TCP/IP, la capa encargada de la determinación de la ruta (enrutamiento) y el direccionamiento lógico es la capa de ___."

respuesta: "Internet"

explicacion: |
  La capa de Internet se encarga de mover paquetes desde el origen al destino a través de redes interconectadas, utilizando protocolos como IP.
```

### 7 — El proceso de encapsulamiento

```
metadata:
  materia: "informatica"
  tema: "encapsulamiento_datos"
  nivel: "intermedio"
  tags: ["encapsulamiento", "sdp"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [["Datos de aplicación", "Segmento", "Paquete"], ["Segmento de transporte", "Paquete", "Trama"], ["Paquete IP", "Trama", "Bit"]]

tipo: completar
respuestas_validas:
  - ["Segmento", "Paquete", "Trama"]
  - ["Paquete", "Trama", "Bit"]
  - ["Trama", "Bit", "Frame"]

enunciado: "Si estamos en la capa de Transporte y añadimos la cabecera correspondiente, el resultado es un {escenario[idx][0]}. Al pasar a la capa de Internet, este se convierte en un {escenario[idx][1]}, y finalmente en la capa de Acceso a Red se transforma en una {escenario[idx][2]}."

respuesta: escenario[idx][2]

explicacion: |
  El proceso de encapsulamiento añade información de control (cabeceras) a medida que los datos descienden por las capas del modelo.
```

### 8 — Verdad o Falso: Direccionamiento

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip", "verdadero_falso"]

tipo: vf

enunciado: "La dirección MAC (Media Access Control) opera en la capa de Internet del modelo TCP/IP para permitir el enrutamiento entre redes distintas."

respuesta: falso

explicacion: |
  Falso. La dirección MAC opera en la capa de Acceso a Red (Capa 2 del modelo OSI). El enrutamiento entre redes distintas se realiza mediante direcciones IP en la capa de Internet.
```

### 9 — Orden lógico de encapsulamiento

```
metadata:
  materia: "informatica"
  tema: "flujo_datos"
  nivel: "intermedio"
  tags: ["encapsulamiento", "orden"]

tipo: ordenar
opciones_explicitas: ["Datos", "Segmento", "Paquete", "Trama"]

enunciado: "Ordena los elementos según el proceso de encapsulamiento, desde la capa más alta (Aplicación) hasta la más baja (Acceso a Red):"

respuesta_orden: ["Datos", "Segmento", "Paquete", "Trama"]

explicacion: |
  El flujo de datos (descendente) sigue este orden: Datos (Aplicación) -> Segmento (Transporte) -> Paquete (Internet) -> Trama (Acceso a Red).
```

### 10 — Cálculo de máscara de subred

```
metadata:
  materia: "informatica"
  tema: "subredes_ip"
  nivel: "avanzado"
  tags: ["ip", "calculo"]

variables:
  idx: uno_de([0, 1])
  datos: [["255.255.255.0", 256], ["255.255.255.128", 128]]

tipo: completar
tolerancia_abs: 0

enunciado: "Si una red tiene una máscara de subred de {datos[idx][0]}, el número total de direcciones IP posibles (incluyendo la de red y de broadcast) es de ___."

respuesta: datos[idx][1]

pasos:
  - "Identificar la máscara de subred."
  - "Calcular el número de bits disponibles para hosts."
  - "Calcular 2 elevado a la potencia de esos bits."

explicacion: |
  Para una máscara /24 (255.255.255.0), quedan 8 bits para hosts. 2^8 = 256. Para una máscara /25 (255.255.255.128), quedan 7 bits para hosts. 2^7 = 128.
```

### 11 — Capa de Red vs Capa de Enlace

```
metadata:
  materia: "informatica"
  tema: "modelo_tcp_ip"
  nivel: "basico"
  tags: ["redes", "capas", "modelo_tcp_ip"]

respuesta: "Capa de Red"
tipo: completar
respuestas_validas:
  - "Capa de Red"
  - "Capa de Enlace"
  - "Capa de Internet"
  - "Capa de Aplicación"

enunciado: "En el modelo TCP/IP, la función de determinar la mejor ruta para un paquete de datos a través de múltiples redes es responsabilidad de la ___."

explicacion: |
  La Capa de Red (o de Internet en el modelo TCP/IP) se encarga del direccionamiento lógico (IP) y el enrutamiento. La Capa de Enlace se encarga del direccionamiento físico (MAC) en un mismo segmento de red.
```

### 12 — El rol del Router

```
metadata:
  materia: "informatica"
  tema: "enrutamiento"
  nivel: "intermedio"
  tags: ["router", "enrutamiento", "paquetes"]

variables:
  escenario: uno_de([["IP de destino: 192.168.1.5, MAC de destino: AA:BB:CC:DD:EE:FF", "router_actua"], ["IP de destino: 10.0.0.1, MAC de destino: FF:FF:FF:FF:FF:FF", "router_actua"]])

respuesta: "router_actua"
tipo: mc
opciones_explicitas: ["router_actua", "router_no_interviene"]

enunciado: "Un router recibe un paquete donde la dirección IP de destino es distinta a la de la interfaz local, pero la dirección MAC de destino corresponde a su propia interfaz. ¿Qué acción realiza el dispositivo según el escenario {escenario[0]}?"

explicacion: |
  El router recibe el frame, ve que la MAC es suya, descarta la capa de enlace, analiza la IP de destino en la capa de red y consulta su tabla de enrutamiento para decidir el siguiente salto.
```

### 13 — Encapsulamiento de datos

```
metadata:
  materia: "informatica"
  tema: "encapsulamiento"
  nivel: "intermedio"
  tags: ["encapsulamiento", "PDU", "datos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que un segmento TCP contiene dentro de su cuerpo (payload) un datagrama IP?"

explicacion: |
  Falso. El proceso es inverso: el datagrama IP encapsula al segmento TCP. El datagrama IP es la unidad de la capa de red que contiene la información de la capa de transporte.
```

### 14 — Secuencia de encapsulamiento

```
metadata:
  materia: "informatica"
  tema: "encapsulamiento"
  nivel: "intermedio"
  tags: ["orden", "encapsulamiento"]

respuesta_orden: ["Datos", "Segmento", "Paquete", "Trama"]
tipo: ordenar
opciones_explicitas: ["Datos", "Segmento", "Paquete", "Trama"]

enunciado: "Ordene las Unidades de Datos de Protocolo (PDU) según el proceso de encapsulamiento desde la capa de Aplicación hasta la capa de Enlace:"

explicacion: |
  1. Datos (Aplicación) -> 2. Segmento (Transporte) -> 3. Paquete (Red) -> 4. Trama (Enlace).
```

### 15 — Diferencia entre IP y MAC

```
metadata:
  materia: "informatica"
  tema: "direccionamiento"
  nivel: "basico"
  tags: ["ip", "mac", "direccionamiento"]

variables:
  caso: uno_de([["192.168.1.1", "IP"], ["00:0A:95:9D:68:16", "MAC"]])

respuesta: "IP"
tipo: mc
opciones_explicitas: ["IP", "MAC"]

enunciado: "Si estamos analizando la dirección {caso[0]} para determinar la ruta lógica entre dos redes distintas, estamos trabajando con una dirección de tipo {caso[1]}."

explicacion: |
  Las direcciones IP son lógicas y permiten el enrutamiento entre redes. Las direcciones MAC son físicas y solo sirven para la comunicación dentro del mismo segmento de red local.
```

### 16 — Capa de Red vs Capa de Enlace

```
metadata:
  materia: "informatica"
  tema: "modelo_capas_red"
  nivel: "basico"
  tags: ["tcp_ip", "capas", "enrutamiento"]

respuesta: "capa_de_red"
tipo: completar
respuestas_validas:
  - "capa_de_red"
  - "capa_de_enlace"

enunciado: "Mientras que la capa de enlace se encarga de la transferencia de datos entre nodos adyacentes en una misma red local, la ___ se encarga de determinar la ruta de extremo a extremo a través de múltiples redes interconectadas."

explicacion: |
  La capa de red (IP) es responsable del enrutamiento de paquetes entre redes distintas, mientras que la capa de enlace (Ethernet, Wi-Fi) gestiona la comunicación dentro de un mismo segmento de red.
```

### 17 — Diferencia entre IP y MAC

```
metadata:
  materia: "informatica"
  tema: "direccionamiento"
  nivel: "basico"
  tags: ["ip", "mac", "direccionamiento"]

variables:
  respuesta_correcta: "logica"

respuesta: "logica"
tipo: mc
opciones_explicitas: ["logica", "fisica"]

enunciado: "En el modelo TCP/IP, la dirección IP se considera una dirección de tipo:"

explicacion: "La dirección IP es una dirección lógica (lógica), mientras que la dirección MAC es una dirección física."
```

### 18 — El rol del Router

```
metadata:
  materia: "informatica"
  tema: "enrutamiento"
  nivel: "intermedio"
  tags: ["router", "capa_red"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es el router un dispositivo que opera principalmente en la capa de red para decidir el mejor camino para un paquete de datos?"

explicacion: |
  Correcto. El router analiza las direcciones IP de destino en la capa de red para consultar sus tablas de enrutamiento y enviar el paquete al siguiente salto.
```

### 19 — Proceso de encapsulación

```
metadata:
  materia: "informatica"
  tema: "encapsulacion"
  nivel: "intermedio"
  tags: ["encapsulacion", "datos"]

respuesta_orden: ["datos", "segmento", "paquete", "trama"]
tipo: ordenar

opciones_explicitas: ["datos", "segmento", "paquete", "trama"]

enunciado: "Ordena los elementos de mayor a menor nivel de encapsulamiento (desde la información original hasta la unidad de la capa física):"

explicacion: |
  El proceso de encapsulamiento añade encabezados en cada capa: Datos (Aplicación) -> Segmento (Transporte) -> Paquete (Red) -> Trama (Enlace).
```

### 20 — Diferencia entre TCP y UDP

```
metadata:
  materia: "informatica"
  tema: "protocolos_transporte"
  nivel: "intermedio"
  tags: ["tcp", "udp", "transporte"]

variables:
  idx: uno_de([0, 1])
  tabla_protocolo: [["tcp", "orientado_a_conexion"], ["udp", "no_orientado_a_conexion"]]

respuesta: tabla_protocolo[idx][1]
tipo: mc
opciones_explicitas: ["orientado_a_conexion", "no_orientado_a_conexion"]
enunciado: "¿Qué tipo de conexión tiene el protocolo {tabla_protocolo[idx][0]}?"
explicacion: "El protocolo sorteado determina la respuesta correcta entre orientado a conexión y no orientado a conexión."
```

### 21 — Capa de Red y Enrutamiento

```
metadata:
  materia: "informatica"
  tema: "modelo_capas_red"
  nivel: "intermedio"
  tags: ["tcp_ip", "enrutamiento", "capa_red"]

variables:
  ip_origen: "192.168.1.5"

tipo: mc
respuesta: "Capa de Red"
opciones_explicitas: ["Capa de Aplicación", "Capa de Transporte", "Capa de Red", "Capa de Enlace"]

enunciado: "Un paquete con la IP de origen {ip_origen} debe viajar hacia 8.8.8.8. ¿En qué capa del modelo TCP/IP se toman las decisiones de enrutamiento para determinar la mejor ruta?"

explicacion: |
  La capa de Red (Internet Layer) es la encargada de gestionar el direccionamiento lógico (IP) y el enrutamiento de los paquetes a través de diferentes redes.
```

### 22 — Encapsulamiento de Datos

```
metadata:
  materia: "informatica"
  tema: "encapsulamiento"
  nivel: "basico"
  tags: ["encapsulamiento", "datos", "capas"]

tipo: completar
respuestas_validas:
  - "Segmento"
  - "Paquete"
  - "Trama"

enunciado: "Cuando los datos de la capa de aplicación bajan a la capa de transporte, se les añade una cabecera de transporte y la unidad de datos resultante se denomina ___."

explicacion: |
  En la capa de transporte, la unidad de datos se denomina Segmento (en TCP) o Datagrama (en UDP).
```

### 23 — Veracidad del Modelo TCP/IP

```
metadata:
  materia: "informatica"
  tema: "modelo_capas_red"
  nivel: "basico"
  tags: ["teoria", "verdadero_falso"]

tipo: vf

enunciado: "En el modelo TCP/IP, la capa de Enlace de Datos y la capa Física del modelo OSI se combinan funcionalmente en la capa de Acceso a Red."

respuesta: verdadero

explicacion: |
  Es correcto. El modelo TCP/IP original agrupa las funciones de la capa física y de enlace de datos de OSI en la capa de Acceso a Red (Network Access).
```

### 24 — Proceso de Encapsulamiento

```
metadata:
  materia: "informatica"
  tema: "encapsulamiento"
  nivel: "intermedio"
  tags: ["ordenar", "encapsulamiento"]

tipo: ordenar
opciones_explicitas: ["Datos", "Segmento", "Paquete", "Trama"]

enunciado: "Ordene correctamente las unidades de datos (PDUs) según el proceso de encapsulamiento desde la capa de Aplicación hasta la de Acceso a Red:"

explicacion: |
  El proceso es descendente: Datos (Aplicación) -> Segmento (Transporte) -> Paquete (Red) -> Trama (Enlace).
respuesta_orden: ["Datos", "Segmento", "Paquete", "Trama"]
```

### 25 — Análisis de Direccionamiento

```
metadata:
  materia: "informatica"
  tema: "enrutamiento_ip"
  nivel: "avanzado"
  tags: ["ip", "enrutamiento", "subred"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [[19216810, "2552552550"], [100000, "25500000"]]
  red: escenario[escenario_idx][0]
  mascara: escenario[escenario_idx][1]
  red_decimal: uno_de([3232235776, 167772160])

tipo: completar
tolerancia_abs: 0

enunciado: "Si un host tiene la dirección IP {red} y la máscara de subred {mascara}, ¿cuál es el valor decimal de la dirección de red (Network ID)?"

pasos:
  - "Identificar la máscara de red."
  - "Realizar la operación AND bit a bit entre la IP y la máscara."

explicacion: |
  La dirección de red se obtiene aplicando una operación AND lógica entre la dirección IP del host y su máscara de subred.

respuesta: red_decimal
```
