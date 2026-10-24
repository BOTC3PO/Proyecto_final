### 1 — Capa de Red y Enrutamiento
```
metadata:
  materia: "informatica"
  tema: "modelo_capas_red"
  nivel: "intermedio"
  tags: ["tcp_ip", "enrutamiento", "capa_red"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[192.168.1.5, "Red Local"], [10.0.0.1, "Red Externa"]]
  ip_origen: datos[escenario_idx][0]
  ip_destino: "8.8.8.8"

tipo: mc
opciones_explicitas: ["Capa de Aplicación", "Capa de Transporte", "Capa de Red", "Capa de Enlace"]

enunciado: "Un paquete con la IP de origen {ip_origen} debe viajar hacia {ip_destino}. ¿En qué capa del modelo TCP/IP se toman las decisiones de enrutamiento para determinar la mejor ruta?"

explicacion: |
  La capa de Red (Internet Layer) es la encargada de gestionar el direccionamiento lógico (IP) y el enrutamiento de los paquetes a través de diferentes redes.
```

### 2 — Encapsulamiento de Datos
```
metadata:
  materia: "informatica"
  tema: "encapsulamiento"
  nivel: "basico"
  tags: ["encapsulamiento", "datos", "capas"]

tipo: completar
respuestas_validas: ["Segmento", "Paquete", "Trama"]

enunciado: "Cuando los datos de la capa de aplicación bajan a la capa de transporte, se les añade una cabecera de transporte y la unidad de datos resultante se denomina ___."

explicacion: |
  En la capa de transporte, la unidad de datos se denomina Segmento (en TCP) o Datagrama (en UDP).
```

### 3 — Veracidad del Modelo TCP/IP
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

### 4 — Proceso de Encapsulamiento
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
```

### 5 — Análisis de Direccionamiento
```
metadata:
  materia: "informatica"
  tema: "enrutamiento_ip"
  nivel: "avanzado"
  tags: ["ip", "enrutamiento", "subred"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [[192.168.1.0, "255.255.255.0"], [10.0.0.0, "255.0.0.0"]]
  red: escenario[escenario_idx][0]
  mascara: escenario[escenario_idx][1]

tipo: input
tolerancia_abs: 0

enunciado: "Si un host tiene la dirección IP {red} y la máscara de subred {mascara}, ¿cuál es el valor decimal de la dirección de red (Network ID)?"

pasos:
  - "Identificar la máscara de red."
  - "Realizar la operación AND bit a bit entre la IP y la máscara."

explicacion: |
  La dirección de red se obtiene aplicando una operación AND lógica entre la dirección IP del host y su máscara de subred.
```