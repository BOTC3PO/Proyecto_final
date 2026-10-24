### 1 — El rol del DNS
```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "basico"
  tags: ["redes", "dns"]

variables:
  escenario: uno_de([["google.com", "142.250.190.46"], ["wikipedia.org", "103.102.166.224"], ["github.com", "140.82.121.4"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["142.250.190.46", "103.102.166.224", "140.82.121.4"]

enunciado: "Un usuario escribe en su navegador el nombre de dominio {escenario[idx][0]}. Para poder conectar con el servidor, el sistema DNS debe traducir ese nombre a la dirección IP: ___"

explicacion: |
  El DNS (Domain Name System) actúa como una 'agenda telefónica' de Internet, traduciendo nombres legibles para humanos en direcciones IP numéricas que las máquinas pueden entender.
```

### 2 — Identificación de IP
```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip", "redes"]

respuesta: verdadero
tipo: vf

enunciado: "La dirección IP 192.168.1.1 es una dirección lógica que identifica a un dispositivo en una red, a diferencia de la dirección MAC que es física."

explicacion: |
  Correcto. La dirección IP es una dirección lógica asignada por software (capa de red), mientras que la MAC es la dirección física grabada en el hardware (capa de enlace).
```

### 3 — Protocolo de resolución
```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "intermedio"
  tags: ["dns", "protocolos"]

respuesta: "DNS"
tipo: mc
opciones_explicitas: ["DNS", "DHCP", "HTTP", "FTP"]

enunciado: "Si un ordenador conoce el nombre de un servidor pero no sabe su dirección IP para establecer la comunicación, ¿qué servicio debe consultar?"

explicacion: |
  El servicio DNS es el encargado de la resolución de nombres a direcciones IP.
```

### 4 — Orden de resolución de nombres
```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "intermedio"
  tags: ["dns", "proceso"]

respuesta: ["Consulta caché local", "Consulta servidor DNS recursivo", "Consulta servidor DNS raíz", "Obtención de la IP final"]
tipo: ordenar
opciones_explicitas: ["Consulta caché local", "Consulta servidor DNS recursivo", "Consulta servidor DNS raíz", "Obtención de la IP final"]

enunciado: "Ordena los pasos lógicos que sigue un sistema operativo para resolver un nombre de dominio cuando no lo tiene en memoria:"

explicacion: |
  El proceso comienza buscando en la caché local; si no está, consulta al resolver (recursivo), quien a su vez consulta a los servidores raíz y otros niveles hasta encontrar la IP.
```

### 5 — Escenario de conectividad
```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "avanzado"
  tags: ["ip", "redes"]

variables:
  caso: uno_de([[["192.168.1.5", "192.168.1.255"], ["10.0.0.1", "10.0.0.255"], ["172.16.0.10", "172.16.0.255"]]])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["192.168.1.255", "10.0.0.255", "172.16.0.255"]

enunciado: "En una red con máscara de subred que identifica la dirección de broadcast como {caso[idx][1]}, ¿cuál es la dirección de broadcast para el host {caso[idx][0]}?"

explicacion: |
  La dirección de broadcast es la dirección que se utiliza para enviar paquetes a todos los hosts de una red específica; es la última dirección de ese rango de red.
```