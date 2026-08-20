### 1 — Capa de Red vs Capa de Enlace
```
metadata:
  materia: "informatica"
  tema: "modelo_tcp_ip"
  nivel: "basico"
  tags: ["redes", "capas", "modelo_tcp_ip"]

respuesta: "Capa de Red"
tipo: completar
respuestas_validas: ["Capa de Red", "Capa de Enlace", "Capa de Internet", "Capa de Aplicación"]

enunciado: "En el modelo TCP/IP, la función de determinar la mejor ruta para un paquete de datos a través de múltiples redes es responsabilidad de la ___."

explicacion: |
  La Capa de Red (o de Internet en el modelo TCP/IP) se encarga del direccionamiento lógico (IP) y el enrutamiento. La Capa de Enlace se encarga del direccionamiento físico (MAC) en un mismo segmento de red.
```

### 2 — El rol del Router
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

### 3 — Encapsulamiento de datos
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

### 4 — Secuencia de encapsulamiento
```
metadata:
  materia: "informatica"
  tema: "encapsulamiento"
  nivel: "intermedio"
  tags: ["orden", "encapsulamiento"]

respuesta: ["Datos", "Segmento", "Paquete", "Trama"]
tipo: ordenar
opciones_explicitas: ["Datos", "Segmento", "Paquete", "Trama"]

enunciado: "Ordene las Unidades de Datos de Protocolo (PDU) según el proceso de encapsulamiento desde la capa de Aplicación hasta la capa de Enlace:"

explicacion: |
  1. Datos (Aplicación) -> 2. Segmento (Transporte) -> 3. Paquete (Red) -> 4. Trama (Enlace).
```

### 5 — Diferencia entre IP y MAC
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