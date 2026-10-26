# Informatica — Direccionamiento ip dns (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de dirección IP

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["redes", "ip", "conceptos"]

respuesta: "identificador"
tipo: completar
respuestas_validas:
  - "identificador"
  - "dirección"
  - "etiqueta"

enunciado: "En una red de computadoras, la dirección IP funciona como un ___ único que permite identificar un dispositivo en la red."

explicacion: |
  La dirección IP (Internet Protocol) es la etiqueta numérica que identifica de manera lógica a un dispositivo dentro de una red, permitiendo que los datos lleguen al destino correcto.
```

### 2 — Función del DNS

```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "basico"
  tags: ["dns", "redes", "internet"]

opciones_explicitas: ["Traducir nombres de dominio a direcciones IP", "Asignar direcciones IP dinámicas", "Cifrar el tráfico de la red", "Almacenar páginas web"]

respuesta: "Traducir nombres de dominio a direcciones IP"
tipo: mc

enunciado: "Si escribes 'google.com' en tu navegador, ¿qué tarea realiza principalmente el sistema DNS?"

explicacion: |
  El DNS (Domain Name System) actúa como una 'agenda telefónica' que traduce los nombres de dominio legibles para humanos (como google.com) en direcciones IP legibles para las máquinas.
```

### 3 — Verdad o Falso: IPv4 vs IPv6

```
metadata:
  materia: "informatica"
  tema: "protocolos_ip"
  nivel: "basico"
  tags: ["ipv4", "ipv6", "protocolos"]

respuesta: verdadero
tipo: vf

enunciado: "La principal diferencia entre IPv4 e IPv6 es que IPv6 utiliza direcciones de 128 bits, mientras que IPv4 utiliza 32 bits."

explicacion: |
  Verdadero. IPv4 usa direcciones de 32 bits (unos 4.3 mil millones posibles), mientras que IPv6 usa direcciones de 128 bits, lo que ofrece un espacio prácticamente ilimitado.
```

### 4 — Verdad o Falso: Capa de aplicación

```
metadata:
  materia: "informatica"
  tema: "protocolos_ip"
  nivel: "basico"
  tags: ["ipv4", "ipv6", "protocolos"]

respuesta: verdadero
tipo: vf

enunciado: "El protocolo IPv4 es una versión más antigua que IPv6 y ofrece un espacio de direcciones mucho más limitado."

explicacion: |
  Es verdadero. IPv4 utiliza 32 bits (aprox. 4.3 mil millones de direcciones), mientras que IPv6 utiliza 128 bits, proporcionando un número prácticamente infinito de direcciones.
```

### 5 — El proceso de resolución DNS

```
metadata:
  materia: "informatica"
  tema: "dns_flujo"
  nivel: "intermedio"
  tags: ["dns", "redes", "orden"]

opciones_explicitas: ["Consulta al servidor DNS", "Traducción de nombre a IP", "Conexión al servidor web"]

respuesta_orden: ["Consulta al servidor DNS", "Traducción de nombre a IP", "Conexión al servidor web"]
tipo: ordenar

enunciado: "Ordena los pasos que ocurren desde que escribes una URL hasta que ves la página en tu pantalla:"

explicacion: |
  Primero el cliente pregunta al DNS, el DNS devuelve la IP, y finalmente el cliente usa esa IP para establecer la conexión con el servidor web.
```

### 6 — Identificación de componentes

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip", "redes"]

variables:
  idx: uno_de([0, 1])
  datos: [["192.168.1.1", "Dirección IP"], ["google.com", "Nombre de dominio"]]

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["Dirección IP", "Nombre de dominio"]

enunciado: "Si tenemos el valor {datos[idx][0]}, este representa un/a ___."

explicacion: |
  Dependiendo del valor sorteado, se identifica si es una dirección numérica (IP) o un nombre alfanumérico (Dominio).
```

### 7 — ¿Qué es una dirección IP?

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

### 8 — El proceso de resolución DNS

```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "basico"
  tags: ["dns", "internet"]

variables:
  escenario: uno_de([["www.google.com", "142.250.190.46"], ["www.wikipedia.org", "103.102.166.224"]])

tipo: completar
respuestas_validas:
  - "142.250.190.46"
  - "103.102.166.224"
respuesta: escenario[1]

enunciado: "Cuando escribes un nombre de dominio en tu navegador, el sistema DNS realiza una traducción. Si el dominio es {escenario[0]}, el servidor DNS te devolverá la dirección IP correspondiente, que es ___."

explicacion: |
  El DNS (Domain Name System) funciona como una agenda telefónica: tú buscas el nombre (dominio) y el DNS te devuelve el número (dirección IP) necesario para establecer la conexión.
```

### 9 — ¿El DNS traduce IPs a nombres?

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

### 10 — Pasos para acceder a una web

```
metadata:
  materia: "informatica"
  tema: "flujo_dns"
  nivel: "intermedio"
  tags: ["dns", "redes"]

tipo: ordenar
opciones_explicitas: ["El navegador solicita la IP al servidor DNS", "El servidor DNS responde con la dirección IP", "El navegador se conecta a la dirección IP obtenida", "Se carga el contenido de la página web"]

respuesta_orden: ["El navegador solicita la IP al servidor DNS", "El servidor DNS responde con la dirección IP", "El navegador se conecta a la dirección IP obtenida", "Se carga el contenido de la página web"]

enunciado: "Ordena cronológicamente los pasos que ocurren desde que presionas 'Enter' en tu navegador hasta que ves una página web:"

explicacion: |
  Primero se consulta al DNS para obtener la IP, luego se usa esa IP para establecer la conexión con el servidor de destino y finalmente se descarga el contenido.
```

### 11 — Cálculo de subredes simple

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

tipo: completar
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

### 12 — El rol del DNS

```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "basico"
  tags: ["redes", "internet", "dns"]

respuesta: "traducción"
tipo: "completar"
respuestas_validas:
  - "traducción"
  - "traducir"
  - "resolver"

enunciado: "El sistema DNS tiene la función principal de realizar la ___ de nombres de dominio a direcciones IP."

explicacion: |
  El DNS (Domain Name System) actúa como una 'agenda telefónica' de Internet, transformando nombres fáciles de recordar (como google.com) en direcciones IP numéricas que las máquinas pueden entender.
```

### 13 — IP vs Nombre de Dominio

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip", "dns", "conceptos"]

variables:
  escenario: uno_de([["192.168.1.1", "google.com"], ["8.8.8.8", "facebook.com"], ["10.0.0.5", "wikipedia.org"]])

respuesta: "El dominio es el nombre y la IP es la dirección"
tipo: mc
opciones_explicitas: ["La IP es el nombre y el dominio es la dirección", "El dominio es el nombre y la IP es la dirección", "Ambos son lo mismo", "El DNS convierte IPs en dominios"]

enunciado: "Si intentas acceder a {escenario[1]}, tu navegador primero buscará la dirección IP correspondiente a ese nombre. En este contexto, {escenario[1]} es el dominio y {escenario[0]} es la IP."

explicacion: |
  El nombre de dominio es la etiqueta legible para humanos, mientras que la dirección IP es la identificación numérica única de un dispositivo en la red.
```

### 14 — El proceso de resolución DNS

```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "intermedio"
  tags: ["dns", "pasos", "redes"]

respuesta_orden: ["Consulta al servidor DNS", "El DNS devuelve la IP", "El navegador se conecta a la IP"]
tipo: "ordenar"
opciones_explicitas: ["Consulta al servidor DNS", "El DNS devuelve la IP", "El navegador se conecta a la IP"]

enunciado: "Ordena los pasos lógicos que ocurren cuando escribes una URL en tu navegador y el nombre no está en caché:"

explicacion: |
  El proceso sigue un orden jerárquico: primero se pregunta al servidor DNS, este responde con la IP y finalmente el cliente puede establecer la conexión con el servidor de destino.
```

### 15 — ¿Es la IP una dirección física?

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip", "capas_modelo_osi"]

respuesta: falso

tipo: "vf"

enunciado: "La dirección IP es una dirección física única grabada en el hardware de la tarjeta de red (MAC Address)."

explicacion: |
  Falso. La dirección IP es una dirección lógica asignada por la red para el direccionamiento en la capa de red, mientras que la dirección MAC es la dirección física grabada en el hardware.
```

### 16 — El problema de la caché DNS

```
metadata:
  materia: "informatica"
  tema: "dns_cache"
  nivel: "intermedio"
  tags: ["dns", "troubleshooting"]

variables:
  caso: uno_de([["un sitio web cambió de servidor y la IP vieja sigue cargando", "el servidor DNS tiene datos desactualizados"], ["un sitio web no carga pero la IP funciona", "hay un problema de resolución de nombres"]])

respuesta: "El DNS tiene datos desactualizados"
tipo: "mc"
opciones_explicitas: ["La IP es incorrecta", "El DNS tiene datos desactualizados", "El cable de red está desconectado", "El dominio expiró"]

enunciado: "Si un usuario intenta entrar a una web y recibe un error de 'no se encuentra el servidor', pero al usar la IP directamente la web carga, ¿cuál es la causa más probable? {caso[0]}."

explicacion: |
  Esto ocurre cuando el sistema operativo o el servidor DNS mantienen en caché una información antigua (la IP vieja) que ya no apunta al servidor actual del sitio web.
```

### 17 — Diferencia entre IP y MAC

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["redes", "ip", "mac"]

respuesta: "capa de red"
tipo: completar
respuestas_validas:
  - "capa de red"
  - "capa red"

enunciado: "Mientras que la dirección MAC se utiliza para la comunicación en la capa de enlace, la dirección IP se utiliza para el direccionamiento en la ___."

explicacion: |
  La dirección MAC es una dirección física única grabada en el hardware (Capa 2), mientras que la IP es una dirección lógica que permite el enrutamiento entre redes distintas (Capa 3).
```

### 18 — Función principal del DNS

```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "basico"
  tags: ["dns", "internet"]

variables:
  datos: [["google.com", "142.250.190.46"], ["wikipedia.org", "103.102.166.224"]]
  escenario: uno_de(datos)

respuesta: "Traducir nombres de dominio a direcciones IP"
tipo: mc
opciones_explicitas: ["Traducir nombres de dominio a direcciones IP", "Asignar una dirección MAC a un dispositivo", "Encriptar el tráfico de la web", "Almacenar archivos de sitios web"]

enunciado: "Si un usuario intenta acceder a {escenario[0]}, el sistema DNS se encarga de realizar la siguiente tarea: ___"

explicacion: |
  El DNS (Domain Name System) actúa como una 'agenda telefónica' que traduce nombres legibles para humanos a direcciones IP legibles para las máquinas.
```

### 19 — IPv4 vs IPv6

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

### 20 — El proceso de resolución DNS

```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "intermedio"
  tags: ["dns", "proceso"]

respuesta_orden: ["Consulta al Resolver", "Consulta al Root Server", "Consulta al TLD Server", "Consulta al Authoritative Server"]
tipo: ordenar
opciones_explicitas: ["Consulta al Resolver", "Consulta al Root Server", "Consulta al TLD Server", "Consulta al Authoritative Server"]

enunciado: "Ordena los pasos lógicos que sigue un cliente cuando busca resolver un nombre de dominio que no está en la caché local:"

explicacion: |
  El proceso comienza con el Resolver (usualmente tu ISP), que pregunta a los Root Servers, estos derivan a los servidores TLD (como .com) y finalmente al servidor autoritativo que tiene la IP real.
```

### 21 — IP Estática vs IP Dinámica

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip_estatica", "ip_dinamica"]

variables:
  config: [["estatica", "servidor web"], ["dinamica", "computadora de hogar"]]
  tipo_ip_idx: uno_de([0, 1])
  tipo_seleccionado: config[tipo_ip_idx][0]
  respuesta_correcta: config[tipo_ip_idx][1]

respuesta: respuesta_correcta

tipo: mc
opciones_explicitas: ["servidor web", "computadora de hogar", "router principal", "switch de capa 2"]

enunciado: "Para el tipo de dirección IP {tipo_seleccionado}, es más común utilizar una dirección de tipo ___."

explicacion: |
  Los servidores necesitan una IP estática para que siempre sean localizables en la misma dirección. Los dispositivos finales suelen usar IPs dinámicas asignadas por DHCP para optimizar el uso de direcciones.
```

### 22 — El rol del DNS

```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "basico"
  tags: ["redes", "dns"]

variables:
  datos: [["google.com", "142.250.190.46"], ["wikipedia.org", "103.102.166.224"], ["github.com", "140.82.121.4"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "142.250.190.46"
  - "103.102.166.224"
  - "140.82.121.4"

enunciado: "Un usuario escribe en su navegador el nombre de dominio {datos[idx][0]}. Para poder conectar con el servidor, el sistema DNS debe traducir ese nombre a la dirección IP: ___"

explicacion: |
  El DNS (Domain Name System) actúa como una 'agenda telefónica' de Internet, traduciendo nombres legibles para humanos en direcciones IP numéricas que las máquinas pueden entender.
```

### 23 — Identificación de IP

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

### 24 — Protocolo de resolución

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

### 25 — Orden de resolución de nombres

```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "intermedio"
  tags: ["dns", "proceso"]

respuesta_orden: ["Consulta caché local", "Consulta servidor DNS recursivo", "Consulta servidor DNS raíz", "Obtención de la IP final"]
tipo: ordenar
opciones_explicitas: ["Consulta caché local", "Consulta servidor DNS recursivo", "Consulta servidor DNS raíz", "Obtención de la IP final"]

enunciado: "Ordena los pasos lógicos que sigue un sistema operativo para resolver un nombre de dominio cuando no lo tiene en memoria:"

explicacion: |
  El proceso comienza buscando en la caché local; si no está, consulta al resolver (recursivo), quien a su vez consulta a los servidores raíz y otros niveles hasta encontrar la IP.
```

### 26 — Escenario de conectividad

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "avanzado"
  tags: ["ip", "redes"]

variables:
  datos: [["192.168.1.5", "192.168.1.255"], ["10.0.0.1", "10.0.0.255"], ["172.16.0.10", "172.16.0.255"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["192.168.1.255", "10.0.0.255", "172.16.0.255"]

enunciado: "Si un host tiene la dirección IP {datos[idx][0]} en una red con máscara /24 (255.255.255.0), ¿cuál es la dirección de broadcast de esa red?"

explicacion: |
  La dirección de broadcast es la dirección que se utiliza para enviar paquetes a todos los hosts de una red específica; es la última dirección de ese rango de red.
```
