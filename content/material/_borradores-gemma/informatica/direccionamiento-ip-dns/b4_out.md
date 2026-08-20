### 1 — Diferencia entre IP y MAC
```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["redes", "ip", "mac"]

respuesta: "capa_red"
tipo: completar
respuestas_validas: ["capa_red", "capa_enlace"]

enunciado: "Mientras que la dirección MAC se utiliza para la comunicación en la capa de enlace, la dirección IP se utiliza para el direccionamiento en la ___."

explicacion: |
  La dirección MAC es una dirección física única grabada en el hardware (Capa 2), mientras que la IP es una dirección lógica que permite el enrutamiento entre redes distintas (Capa 3).
```

### 2 — Función principal del DNS
```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "basico"
  tags: ["dns", "internet"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["google.com", "142.250.190.46"], ["wikipedia.org", "103.102.166.224"]]

respuesta: uno_de(datos)[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Traducir nombres de dominio a direcciones IP", "Asignar una dirección MAC a un dispositivo", "Encriptar el tráfico de la web", "Almacenar archivos de sitios web"]

enunciado: "Si un usuario intenta acceder a {uno_de(datos)[escenario_idx][0]}, el sistema DNS se encarga de realizar la siguiente tarea: ___"

explicacion: |
  El DNS (Domain Name System) actúa como una 'agenda telefónica' que traduce nombres legibles para humanos a direcciones IP legibles para las máquinas.
```

### 3 — IPv4 vs IPv6
```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "intermedio"
  tags: ["ipv4", "ipv6"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la principal diferencia entre IPv4 e IPv6 es que IPv6 utiliza direcciones de 128 bits para ofrecer un espacio de direccionamiento mucho mayor que los 32 bits de IPv4?"

explicacion: |
  Verdadero. El agotamiento de direcciones IPv4 fue el motor principal para la transición hacia IPv6, que permite un número prácticamente infinito de direcciones.
```

### 4 — El proceso de resolución DNS
```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "intermedio"
  tags: ["dns", "proceso"]

respuesta: ["Consulta al Resolver", "Consulta al Root Server", "Consulta al TLD Server", "Consulta al Authoritative Server"]
tipo: ordenar
opciones_explicitas: ["Consulta al Resolver", "Consulta al Root Server", "Consulta al TLD Server", "Consulta al Authoritative Server"]

enunciado: "Ordena los pasos lógicos que sigue un cliente cuando busca resolver un nombre de dominio que no está en la caché local:"

explicacion: |
  El proceso comienza con el Resolver (usualmente tu ISP), que pregunta a los Root Servers, estos derivan a los servidores TLD (como .com) y finalmente al servidor autoritativo que tiene la IP real.
```

### 5 — IP Estática vs IP Dinámica
```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip_estatica", "ip_dinamica"]

variables:
  tipo_ip_idx: uno_de([0, 1])
  config: [["estatica", "servidor web"], ["dinamica", "computadora de hogar"]]

respuesta: uno_de(config)[tipo_ip_idx][1]

tipo: mc
opciones_explicitas: ["servidor web", "computadora de hogar", "router principal", "switch de capa 2"]

enunciado: "Para el tipo de dirección IP {uno_de(config)[tipo_ip_idx][0]}, es más común utilizar una dirección de tipo ___."

explicacion: |
  Los servidores necesitan una IP estática para que siempre sean localizables en la misma dirección. Los dispositivos finales suelen usar IPs dinámicas asignadas por DHCP para optimizar el uso de direcciones.
```