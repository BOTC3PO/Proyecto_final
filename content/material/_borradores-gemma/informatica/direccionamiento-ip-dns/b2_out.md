### 1 — ¿Qué es una dirección IP?
```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["redes", "ip"]

tipo: mc
opciones_explicitas: ["La dirección física de la tarjeta de red", "La etiqueta lógica que identifica un dispositivo en una red", "El nombre asignado por el usuario al equipo", "La velocidad de conexión a internet"]

respuesta: "La etiqueta lógica que identifica un dispositivo en una red"

enunciado: "En una red local, cada dispositivo necesita una identidad única para que los datos lleguen al destino correcto. Esta identidad se conoce como dirección IP. ¿Cuál es su función principal?"

explicacion: |
  La dirección IP (Internet Protocol) actúa como una etiqueta lógica que permite identificar un dispositivo (como tu móvil o tu router) dentro de una red, permitiendo que la información sepa exactamente a dónde dirigirse.
```

### 2 — El proceso de resolución DNS
```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "basico"
  tags: ["dns", "internet"]

variables:
  escenario: uno_de([["www.google.com", "142.250.190.46"], ["www.wikipedia.org", "103.102.166.224"]])

tipo: completar
respuestas_validas: ["142.250.190.46", "103.102.166.224"]
respuesta: escenario[0]

enunciado: "Cuando escribes un nombre de dominio en tu navegador, el sistema DNS realiza una traducción. Si el dominio es {escenario[0]}, el servidor DNS te devolverá la dirección IP correspondiente, que es ___."

explicacion: |
  El DNS (Domain Name System) funciona como una agenda telefónica: tú buscas el nombre (dominio) y el DNS te devuelve el número (dirección IP) necesario para establecer la conexión.
```

### 3 — ¿El DNS traduce IPs a nombres?
```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "basico"
  tags: ["dns", "verdadero_falso"]

tipo: vf

enunciado: "¿Es correcto afirmar que la función principal del DNS es traducir nombres de dominio (como google.com) en direcciones IP (como 142.250.190.46) para que las computadoras puedan comunicarse?"

respuesta: verdadero

explicacion: |
  Verdadero. Las computadoras se comunican mediante números (IPs), pero los humanos preferimos usar nombres (dominios). El DNS es el traductor que permite esta interoperabilidad.
```

### 4 — Pasos para acceder a una web
```
metadata:
  materia: "informatica"
  tema: "flujo_dns"
  nivel: "intermedio"
  tags: ["dns", "redes"]

tipo: ordenar
opciones_explicitas: ["El navegador solicita la IP al servidor DNS", "El servidor DNS responde con la dirección IP", "El navegador se conecta a la dirección IP obtenida", "Se carga el contenido de la página web"]

respuesta: ["El navegador solicita la IP al servidor DNS", "El servidor DNS responde con la dirección IP", "El navegador se conecta a la dirección IP obtenida", "Se carga el contenido de la página web"]

enunciado: "Ordena cronológicamente los pasos que ocurren desde que presionas 'Enter' en tu navegador hasta que ves una página web:"

explicacion: |
  Primero se consulta al DNS para obtener la IP, luego se usa esa IP para establecer la conexión con el servidor de destino y finalmente se descarga el contenido.
```

### 5 — Cálculo de subredes simple
```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "avanzado"
  tags: ["ip", "calculo"]

variables:
  ip_base: "192.168.1.0"
  mascara: "255.255.255.0"
  total_hosts: 254

tipo: input
tolerancia_abs: 0

enunciado: "Si tenemos una red con máscara de subred {mascara}, y el rango de direcciones utilizables comienza en {ip_base} (excluyendo la red) y termina en 192.168.1.255 (excluyendo el broadcast), ¿cuántos dispositivos distintos pueden tener una IP válida en este segmento?"

pasos:
  - "Identificar el número total de direcciones en el bloque (256)"
  - "Restar la dirección de red (.0) y la dirección de broadcast (.255)"
  - "Resultado: 256 - 2 = 254"

respuesta: 254

explicacion: |
  En una red con máscara /24 (255.255.255.0), hay 256 direcciones totales. Se deben restar siempre dos: la dirección de red (la primera) y la de broadcast (la última), dejando 254 direcciones para hosts.
```