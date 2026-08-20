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

respuesta: ["Aplicación", "Transporte", "Internet", "Acceso a la red"]

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
  escenario: uno_de([
    ["Paquete", "Internet"],
    ["Trama", "Acceso a la red"],
    ["Segmento", "Transporte"]
  ])

tipo: completar
respuestas_validas: ["Paquete", "Trama", "Segmento"]

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