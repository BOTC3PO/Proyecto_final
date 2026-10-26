### 1 — El rol del DNS
```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "basico"
  tags: ["redes", "internet", "dns"]

respuesta: "traducción"
tipo: "completar"
respuestas_validas: ["traducción", "traducir", "resolver"]

enunciado: "El sistema DNS tiene la función principal de realizar la ___ de nombres de dominio a direcciones IP."

explicacion: |
  El DNS (Domain Name System) actúa como una 'agenda telefónica' de Internet, transformando nombres fáciles de recordar (como google.com) en direcciones IP numéricas que las máquinas pueden entender.
```

### 2 — IP vs Nombre de Dominio
```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip", "dns", "conceptos"]

variables:
  escenario: uno_de([
    ["192.168.1.1", "google.com"],
    ["8.8.8.8", "facebook.com"],
    ["10.0.0.5", "wikipedia.org"]
  ])

respuesta: "mc"
tipo: "mc"
opciones_explicitas: ["La IP es el nombre y el dominio es la dirección", "El dominio es el nombre y la IP es la dirección", "Ambos son lo mismo", "El DNS convierte IPs en dominios"]

enunciado: "Si intentas acceder a {escenario[1]}, tu navegador primero buscará la dirección IP correspondiente a ese nombre. En este contexto, {escenario[1]} es el ___ y {escenario[0]} es la ___."

explicacion: |
  El nombre de dominio es la etiqueta legible para humanos, mientras que la dirección IP es la identificación numérica única de un dispositivo en la red.
```

### 3 — El proceso de resolución DNS
```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "intermedio"
  tags: ["dns", "pasos", "redes"]

respuesta: ["Consulta al servidor DNS", "El DNS devuelve la IP", "El navegador se conecta a la IP"]
tipo: "ordenar"
opciones_explicitas: ["Consulta al servidor DNS", "El DNS devuelve la IP", "El navegador se conecta a la IP"]

enunciado: "Ordena los pasos lógicos que ocurren cuando escribes una URL en tu navegador y el nombre no está en caché:"

explicacion: |
  El proceso sigue un orden jerárquico: primero se pregunta al servidor DNS, este responde con la IP y finalmente el cliente puede establecer la conexión con el servidor de destino.
```

### 4 — ¿Es la IP una dirección física?
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

### 5 — El problema de la caché DNS
```
metadata:
  materia: "informatica"
  tema: "dns_cache"
  nivel: "intermedio"
  tags: ["dns", "troubleshooting"]

variables:
  caso: uno_de([
    ["un sitio web cambió de servidor y la IP vieja sigue cargando", "el servidor DNS tiene datos desactualizados"],
    ["un sitio web no carga pero la IP funciona", "hay un problema de resolución de nombres"]
  ])

respuesta: "mc"
tipo: "mc"
opciones_explicitas: ["La IP es incorrecta", "El DNS tiene datos desactualizados", "El cable de red está desconectado", "El dominio expiró"]

enunciado: "Si un usuario intenta entrar a una web y recibe un error de 'no se encuentra el servidor', pero al usar la IP directamente la web carga, ¿cuál es la causa más probable? {caso[0]}."

explicacion: |
  Esto ocurre cuando el sistema operativo o el servidor DNS mantienen en caché una información antigua (la IP vieja) que ya no apunta al servidor actual del sitio web.
```