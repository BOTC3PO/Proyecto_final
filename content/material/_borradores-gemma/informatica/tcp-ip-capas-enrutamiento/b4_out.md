### 1 — Capa de Red vs Capa de Enlace
```
metadata:
  materia: "informatica"
  tema: "modelo_capas_red"
  nivel: "basico"
  tags: ["tcp_ip", "capas", "enrutamiento"]

respuesta: "capa_de_red"
tipo: completar
respuestas_validas: ["capa_de_red", "capa_de_enlace"]

enunciado: "Mientras que la capa de enlace se encarga de la transferencia de datos entre nodos adyacentes en una misma red local, la ___ se encarga de determinar la ruta de extremo a extremo a través de múltiples redes interconectadas."

explicacion: |
  La capa de red (IP) es responsable del enrutamiento de paquetes entre redes distintas, mientras que la capa de enlace (Ethernet, Wi-Fi) gestiona la comunicación dentro de un mismo segmento de red.
```

### 2 — Diferencia entre IP y MAC
```
metadata:
  materia: "informatica"
  tema: "direccionamiento"
  nivel: "basico"
  tags: ["ip", "mac", "direccionamiento"]

variables:
  tipo_direccion: uno_de(["logica", "fisica"])

respuesta: uno_de(["logica", "fisica"])
tipo: mc
opciones_explicitas: ["logica", "fisica"]

enunciado: "En el modelo TCP/IP, la dirección MAC se considera una dirección de tipo {tipo_direccion}, mientras que la dirección IP es una dirección de tipo {tipo_direccion_opuesta} (Nota: la variable para el usuario es {tipo_direccion})."
# Nota: Como el DSL no permite crear variables dependientes en el mismo bloque de forma dinámica sin riesgo de desincronización, se reescribe para ser una pregunta de opción múltiple estándar sobre la naturaleza de la IP.

# Re-estructuración para cumplir reglas estrictas de variables únicas:
```
metadata:
  materia: "informatica"
  tema: "direccionamiento"
  nivel: "basico"
  tags: ["ip", "mac"]

respuesta: "logica"
tipo: mc
opciones_explicitas: ["logica", "fisica"]

enunciado: "Si la dirección MAC identifica de forma única el hardware en una red local, la dirección IP se distingue por ser una dirección de carácter ___."

explicacion: |
  La dirección MAC es física (quemada en el hardware), mientras que la IP es lógica (asignada por software y puede cambiar según la red).
```

### 3 — El rol del Router
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

### 4 — Proceso de encapsulación
```
metadata:
  materia: "informatica"
  tema: "encapsulacion"
  nivel: "intermedio"
  tags: ["encapsulacion", "datos"]

respuesta: ["datos", "segmento", "paquete", "trama"]
tipo: ordenar

opciones_explicitas: ["datos", "segmento", "paquete", "trama"]

enunciado: "Ordena los elementos de mayor a menor nivel de encapsulamiento (desde la información original hasta la unidad de la capa física):"

explicacion: |
  El proceso de encapsulamiento añade encabezados en cada capa: Datos (Aplicación) -> Segmento (Transporte) -> Paquete (Red) -> Trama (Enlace).
```

### 5 — Diferencia entre TCP y UDP
```
metadata:
  materia: "informatica"
  tema: "protocolos_transporte"
  nivel: "intermedio"
  tags: ["tcp", "udp", "transporte"]

variables:
  protocolo_tipo: uno_de([0, 1])

respuesta: tabla_protocolo[idx][1]
tipo: mc
opciones_explicitas: ["orientado_a_conexion", "no_orientado_a_conexion"]

# Para cumplir la regla de que la respuesta debe ser el valor de la opción y no una expresión compleja en la respuesta:
# Usaremos una tabla de pares para mapear el sorteo a la respuesta correcta.

# Nota: El DSL requiere que la respuesta sea el valor exacto de las opciones.
# Definimos la tabla en variables (aunque el DSL dice que la respuesta debe ser del mismo tipo, 
# para MC la respuesta es el string de la opción).

# Re-diseño para cumplir estrictamente:
```
metadata:
  materia: "informatica"
  tema: "protocolos_transporte"
  nivel: "intermedio"
  tags: ["tcp", "udp"]

variables:
  idx: uno_de([0, 1])
  opciones: ["orientado_a_conexion", "no_orientado_a_conexion"]
  respuestas: ["orientado_a_conexion", "no_orientado_a_conexion"]

respuesta: respuestas[idx]
tipo: mc
opciones_explicitas: ["orientado_a_conexion", "no_orientado_a_conexion"]

enunciado: "Si un protocolo garantiza la entrega de datos mediante un saludo (handshake) y confirmaciones de recepción, se distingue de UDP por ser ___."

explicacion: |
  TCP es un protocolo orientado a la conexión (establece una sesión), mientras que UDP es no orientado a la conexión (envía datos sin verificar recepción).
```