### 1 — Capas del modelo TCP/IP
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

### 2 — El proceso de encapsulamiento
```
metadata:
  materia: "informatica"
  tema: "encapsulamiento_datos"
  nivel: "intermedio"
  tags: ["encapsulamiento", "sdp"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [
    ["Datos de aplicación", "Segmento", "Paquete"],
    ["Segmento de transporte", "Paquete", "Trama"],
    ["Paquete IP", "Trama", "Bit"]
  ]

tipo: completar
respuestas_validas: [
    ["Segmento", "Paquete", "Trama"],
    ["Paquete", "Trama", "Bit"],
    ["Trama", "Bit", "Frame"]
  ]

enunciado: "Si estamos en la capa de Transporte y añadimos la cabecera correspondiente, el resultado es un {escenario[idx][0]}. Al pasar a la capa de Internet, este se convierte en un {escenario[idx][1]}, y finalmente en la capa de Acceso a Red se transforma en una {escenario[idx][2]}."

respuesta: escenario[idx][2]

explicacion: |
  El proceso de encapsulamiento añade información de control (cabeceras) a medida que los datos descienden por las capas del modelo.
```

### 3 — Verdad o Falso: Direccionamiento
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

### 4 — Orden lógico de encapsulamiento
```
metadata:
  materia: "informatica"
  tema: "flujo_datos"
  nivel: "intermedio"
  tags: ["encapsulamiento", "orden"]

tipo: ordenar
opciones_explicitas: ["Datos", "Segmento", "Paquete", "Trama"]

enunciado: "Ordena los elementos según el proceso de encapsulamiento, desde la capa más alta (Aplicación) hasta la más baja (Acceso a Red):"

respuesta: ["Datos", "Segmento", "Paquete", "Trama"]

explicacion: |
  El flujo de datos (descendente) sigue este orden: Datos (Aplicación) -> Segmento (Transporte) -> Paquete (Internet) -> Trama (Acceso a Red).
```

### 5 — Cálculo de máscara de subred
```
metadata:
  materia: "informatica"
  tema: "subredes_ip"
  nivel: "avanzado"
  tags: ["ip", "calculo"]

variables:
  idx: uno_de([0, 1])
  datos: [
    ["255.255.255.0", 256],
    ["255.255.255.128", 128]
  ]

tipo: input
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