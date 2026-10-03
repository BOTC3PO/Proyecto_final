# Examen jefe — [PENDIENTE #822]

> Logro #822. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **122 preguntas totales** en 5/5 secciones.

---

## Sección: direccionamiento-ip-dns (26 preguntas)

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

## Sección: proceso-programa-en-ejecucion (26 preguntas)

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos", "conceptos_basicos"]

respuesta: "proceso"
tipo: completar
respuestas_validas:
  - "proceso"

enunciado: "Un programa es una entidad pasiva que reside en el disco, mientras que un ___ es una entidad activa que se encuentra en ejecución en la memoria."

explicacion: |
  Un programa es simplemente un conjunto de instrucciones almacenadas (archivo), mientras que un proceso es la instancia de ese programa en ejecución, con su propio estado, contador de programa y recursos asignados.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El archivo 'navegador.exe' guardado en el disco", "programa"], ["La ventana del navegador abierta y consumiendo RAM", "proceso"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["programa", "proceso"]

enunciado: "Identifica la naturaleza del siguiente elemento: {datos[escenario_idx][0]}"

explicacion: |
  {datos[escenario_idx][0]} se clasifica como {datos[escenario_idx][1]} porque la distinción principal radica en si la entidad está estática en almacenamiento o activa en la CPU/Memoria.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["gestion_de_procesos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que un proceso incluye no solo el código del programa, sino también el estado de los registros de la CPU y la memoria asignada?"

explicacion: |
  Verdadero. A diferencia del programa (que es solo código), el proceso es un paquete completo que incluye el contexto de ejecución (registros, pila, contador de programa, etc.).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["gestion_de_procesos"]

respuesta_orden: ["Programa en disco", "Carga en memoria", "Ejecución en CPU", "Terminación"]
tipo: ordenar
opciones_explicitas: ["Programa en disco", "Carga en memoria", "Ejecución en CPU", "Terminación"]

enunciado: "Ordena cronológicamente las etapas desde que un usuario hace doble clic en un ejecutable hasta que este finaliza:"

explicacion: |
  El flujo lógico comienza con el archivo estático en el almacenamiento secundario, pasa a la memoria principal (RAM) mediante el cargador, se asigna tiempo de CPU para su ejecución y finalmente se liberan los recursos al terminar.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos"]

respuesta: 3
tipo: completar
tolerancia_abs: 0

enunciado: "Si un usuario abre tres instancias diferentes de un mismo editor de texto (por ejemplo, tres notas distintas), ¿cuántos procesos habrá corriendo en el sistema operativo?"

pasos:
  - "Identificar si las instancias son entidades independientes en ejecución."
  - "Relacionar cada instancia con un proceso distinto."

explicacion: |
  Cada vez que se inicia una instancia de un programa, el sistema operativo crea un proceso nuevo con su propio espacio de memoria y estado, aunque el código base (el programa) sea el mismo. Por lo tanto, con tres instancias hay 3 procesos.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos"]

respuesta: 3
tipo: completar
tolerancia_abs: 0

enunciado: "Si un usuario abre tres instancias diferentes de un mismo editor de texto (por ejemplo, tres notas distintas), ¿cuántos procesos habrá corriendo en el sistema operativo?"

explicacion: |
  Cada vez que se inicia una instancia de un programa, el sistema operativo crea un proceso nuevo con su propio espacio de memoria y estado. Por lo tanto, hay 3 procesos.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["conceptos_basicos", "sistema_operativo"]

respuesta: "proceso"
tipo: "mc"
opciones_explicitas: ["archivo_en_disco", "proceso", "instruccion_suelta", "hardware"]

enunciado: "Un programa es una entidad pasiva que reside en el almacenamiento secundario; cuando este programa se carga en la memoria y se inicia su ejecución, se convierte en un ___."

explicacion: |
  Un programa es un conjunto de instrucciones estáticas (un archivo en el disco), mientras que un proceso es la entidad dinámica que representa la ejecución de dichas instrucciones en la memoria RAM y con recursos asignados.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["diferencias"]

respuesta: verdadero
tipo: "vf"

enunciado: "Si abro dos instancias diferentes del mismo navegador web (por ejemplo, dos ventanas independientes), estoy ejecutando dos procesos distintos que comparten el mismo código de programa original."

explicacion: |
  Es verdadero. El programa (el ejecutable en disco) es el mismo, pero cada ventana es un proceso independiente con su propio espacio de memoria, contador de programa y estado de ejecución.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["memoria", "estructura"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["recursos_asignados", "estado_de_ejecucion"], ["memoria_y_registros", "contexto_del_cpu"]]

respuesta: datos[escenario_idx][1]
tipo: "completar"
respuestas_validas:
  - "recursos_asignados"
  - "estado_de_ejecucion"
  - "memoria_y_registros"
  - "contexto_del_cpu"

enunciado: "Al pasar de un programa a un proceso, el sistema operativo debe asignar {datos[escenario_idx][0]} para que este pueda operar."

explicacion: |
  Un proceso no es solo el código; requiere recursos como memoria (stack, heap), archivos abiertos y el estado de los registros del procesador para poder ejecutarse.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["estados_proceso"]

tipo: "ordenar"
opciones_explicitas: ["creado", "listo", "ejecutando", "terminado"]
respuesta_orden: ["creado", "listo", "ejecutando", "terminado"]

enunciado: "Ordena las etapas lógicas por las que pasa un proceso desde que se solicita su creación hasta que finaliza su tarea:"

explicacion: |
  El flujo estándar es: 1. Creado (se solicita), 2. Listo (esperando CPU), 3. Ejecutando (usando CPU), 4. Terminado (finaliza).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "avanzado"
  tags: ["gestion_recursos"]

respuesta: "controlar_ejecucion"
tipo: "mc"
opciones_explicitas: ["gestionar_recursos", "controlar_ejecucion", "modificar_el_codigo", "eliminar_el_archivo"]

enunciado: "Cuando un programa se convierte en proceso, el Sistema Operativo asume la tarea de gestionar_recursos para asegurar que el proceso pueda realizar su función sin interferir con otros. Además, ¿qué otra tarea clave realiza el SO sobre el proceso?"

explicacion: |
  El SO actúa como un administrador que asigna tiempo de CPU y memoria (gestiona recursos) y decide cuándo un proceso puede estar en la CPU (controla la ejecución).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["conceptos_basicos", "sistemas_operativos"]

respuesta: "proceso"
tipo: mc
opciones_explicitas: ["archivo", "proceso", "compilador", "kernel"]

enunciado: "Un programa es una entidad pasiva que reside en el disco, mientras que un ___ es una entidad activa que posee recursos del sistema (CPU, memoria, etc.)."

explicacion: |
  El programa es el código estático (un archivo en el disco), mientras que el proceso es la instancia de ese programa en ejecución, con su propio estado y recursos.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["recursos", "memoria"]

respuesta: falso
tipo: vf

enunciado: "Si ejecutas dos veces el mismo archivo 'navegador.exe', tendrás un único proceso con dos ventanas abiertas."

explicacion: |
  Falso. Cada vez que ejecutas un programa, el sistema operativo crea un proceso distinto con su propio espacio de direcciones y recursos, aunque el código de origen sea el mismo.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["estructura", "memoria"]

tipo: completar
respuesta: "Contador de instrucciones"

enunciado: "Un proceso requiere de un ___ para saber cuál es la próxima instrucción que debe ejecutar la CPU."

explicacion: |
  El Program Counter (PC) o Contador de Instrucciones es un registro que indica la dirección de la próxima instrucción a ejecutar.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["estados", "ciclo_de_vida"]

respuesta_orden: ["Nuevo", "Listo", "Ejecución", "Bloqueado", "Terminado"]
tipo: ordenar
opciones_explicitas: ["Nuevo", "Listo", "Ejecución", "Bloqueado", "Terminado"]

enunciado: "Ordena los estados típicos por los que pasa un proceso en un sistema operativo, desde su creación hasta su finalización:"

explicacion: |
  El ciclo de vida estándar implica la creación (Nuevo), la espera en cola (Listo), el uso de CPU (Ejecución), la espera por E/S (Bloqueado) y el cierre (Terminado).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "avanzado"
  tags: ["memoria", "ejecucion"]

tipo: completar
respuesta: "dinámico"
respuestas_validas:
  - "dinámico"

enunciado: "Mientras que el programa se considera un ente estático almacenado en soporte persistente, el proceso es un ente ___ que reside principalmente en la memoria RAM."

explicacion: |
  El programa es una secuencia de instrucciones en un archivo (estático), mientras que el proceso es la entidad viva que gestiona memoria y registros (dinámico).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_vs_programa"
  nivel: "basico"
  tags: ["sistemas_operativos", "conceptos_basicos"]

tipo: mc
opciones_explicitas: ["Un archivo estático en el disco", "Una instancia activa en memoria", "Una instrucción de CPU", "Un lenguaje de programación"]

enunciado: "La diferencia fundamental es que un programa es una entidad pasiva almacenada en el disco, mientras que un proceso es..."

respuesta: "Una instancia activa en memoria"

explicacion: |
  Un programa es el conjunto de instrucciones estáticas (el archivo .exe, por ejemplo), mientras que un proceso es la ejecución real de ese programa, con su propio estado, memoria y recursos asignados por el sistema operativo.
```

```
metadata:
  materia: "informatica"
  tema: "estados_del_proceso"
  nivel: "intermedio"
  tags: ["gestion_procesos", "so"]

tipo: vf

enunciado: "¿Es correcto afirmar que un programa puede estar en estado 'listo' (ready) o 'bloqueado' (blocked)?"

respuesta: falso

explicacion: |
  Los estados (listo, bloqueado, ejecución, etc.) son atributos de un PROCESO, no de un programa. Un programa es solo el código en disco y no tiene estados de ejecución hasta que el sistema operativo crea un proceso a partir de él.
```

```
metadata:
  materia: "informatica"
  tema: "estructura_proceso"
  nivel: "avanzado"
  tags: ["memoria", "so"]

variables:
  datos: [["Contador de instrucciones", "Contexto de CPU"], ["Contenido de memoria", "Estado de E/S"], ["Identificador de proceso (PID)", "Puntero de pila"]]
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas:
  - "Contador de instrucciones"
  - "Contenido de memoria"
  - "Identificador de proceso (PID)"

enunciado: "Un proceso contiene información dinámica que un programa no posee, como por ejemplo el {datos[idx][0]}."

respuesta: datos[idx][0]

explicacion: |
  Mientras que el programa contiene el código, el proceso contiene el contexto de ejecución: el contador de programa (PC), los registros de la CPU, la pila (stack) y el estado de los recursos de entrada/salida.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_vida"
  nivel: "intermedio"
  tags: ["planificacion", "so"]

tipo: ordenar
opciones_explicitas: ["Creación", "Listo", "Ejecución", "Terminación"]

enunciado: "Ordene correctamente las etapas típicas por las que pasa un proceso desde que se carga hasta que finaliza su tarea:"

respuesta_orden: ["Creación", "Listo", "Ejecución", "Terminación"]

explicacion: |
  El ciclo de vida estándar implica: 1. Creación (el SO asigna recursos), 2. Listo (esperando CPU), 3. Ejecución (usando la CPU) y 4. Terminación (liberación de recursos).
```

```
metadata:
  materia: "informatica"
  tema: "identificacion_procesos"
  nivel: "basico"
  tags: ["pid", "so"]

tipo: completar

enunciado: "Si un usuario abre dos veces el mismo navegador (ej. Chrome), el sistema operativo crea dos procesos distintos. ¿Cómo se denomina el identificador único numérico que el SO asigna a cada uno de estos procesos para distinguirlos?"

respuesta: "PID"
respuestas_validas:
  - "PID"
  - "pid"
  - "Process Identifier"
  - "identificador de proceso"

explicacion: |
  Aunque el código sea el mismo, cada instancia en ejecución es un proceso distinto y posee un identificador único llamado PID (Process Identifier), asignado por el sistema operativo.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["conceptos_basicos", "sistema_operativo"]

variables:
  datos: [["El archivo 'editor.exe' está guardado en el disco duro", "falso"], ["El proceso 'editor.exe' está usando 500MB de RAM", "verdadero"]]
  idx: uno_de([0, 1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Analice el siguiente escenario: {datos[idx][0]}. ¿Es esto una descripción de un proceso en ejecución?"

explicacion: |
  Un programa es una entidad pasiva (un archivo en disco), mientras que un proceso es una entidad activa (un programa en ejecución con recursos asignados como RAM y CPU).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["diferencias"]

respuesta: "proceso"
tipo: completar
respuestas_validas:
  - "proceso"

enunciado: "Un programa es una secuencia de instrucciones almacenadas en un medio no volátil, mientras que un ___ es la instancia de esa secuencia siendo ejecutada por la CPU."

explicacion: |
  La diferencia clave es el estado de actividad: el programa es el código estático y el proceso es la ejecución dinámica.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["recursos", "gestion_memoria"]

respuesta: "Un proceso requiere: [Memoria, CPU, Registradores]"
tipo: mc
opciones_explicitas: ["Un proceso requiere: [Memoria, CPU, Registradores]", "El programa en disco requiere: [Almacenamiento, Instrucciones, Nombre de archivo]"]

enunciado: "¿Cuál de las siguientes opciones describe correctamente los recursos que gestiona un proceso en ejecución, a diferencia de un programa almacenado en disco?"

explicacion: |
  Un proceso necesita recursos volátiles y de procesamiento (RAM, CPU, registros) para poder operar.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["ciclo_vida", "ordenar"]

respuesta_orden: ["Cargar programa", "Asignar memoria", "Ejecutar instrucciones", "Liberar recursos"]
tipo: ordenar
opciones_explicitas: ["Cargar programa", "Asignar memoria", "Ejecutar instrucciones", "Liberar recursos"]

enunciado: "Ordene los pasos lógicos que ocurren desde que un usuario hace doble clic en un ejecutable hasta que el proceso finaliza:"

explicacion: |
  El sistema operativo primero carga el código del disco a la RAM, asigna memoria y recursos, la CPU ejecuta las instrucciones y, finalmente, el proceso se cierra liberando los recursos.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "avanzado"
  tags: ["instancias", "pids"]

variables:
  datos: [["Se abren dos ventanas independientes del navegador Chrome", "Dos procesos distintos"], ["Se abre un solo archivo de texto", "Un solo proceso"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Dos procesos distintos", "Un solo proceso"]

enunciado: "Analice el escenario: {datos[idx][0]}. ¿Qué sucede a nivel de sistema operativo?"

explicacion: |
  Cada vez que se inicia una instancia de un programa, el sistema operativo crea un proceso nuevo con su propio espacio de memoria y un PID (Process Identifier) único, incluso si el código fuente es el mismo.
```

## Sección: protocolo-http-peticion-respuesta (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "redes", "web"]

tipo: vf

enunciado: "En el modelo de comunicación de la web, el dispositivo que inicia una comunicación solicitando un recurso (como una página HTML) se denomina cliente."

respuesta: verdadero
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "peticion", "metodo"]

tipo: mc

opciones_explicitas: ["URL", "Método HTTP", "Código de estado", "Cuerpo de la respuesta"]

enunciado: "En una petición HTTP, el verbo que indica la acción a realizar (como GET o POST) se conoce como:"

respuesta: "Método HTTP"

explicacion: |
  El método HTTP (GET, POST, PUT, DELETE, etc.) define la naturaleza de la operación que el cliente desea realizar sobre el recurso.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "secuencia"]

tipo: ordenar

opciones_explicitas: ["El cliente envía una petición HTTP", "El servidor procesa la solicitud", "El servidor envía una respuesta HTTP", "El cliente recibe el contenido"]

enunciado: "Ordena los pasos que describen el flujo básico de una interacción HTTP:"

respuesta_orden: ["El cliente envía una petición HTTP", "El servidor procesa la solicitud", "El servidor envía una respuesta HTTP", "El cliente recibe el contenido"]

explicacion: |
  La comunicación HTTP es un protocolo de tipo petición-respuesta: el cliente siempre debe iniciar la comunicación para que el servidor pueda responder.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "status_code"]

tipo: completar

respuestas_validas:
  - "404"

enunciado: "Si un cliente solicita una página que no existe en el servidor, el servidor responderá con un código de estado HTTP de tipo ___."

respuesta: "404"

explicacion: |
  El código 404 indica que el servidor no pudo encontrar el recurso solicitado. El código 200 indica que la petición fue exitosa.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "cabeceras"]

tipo: mc

opciones_explicitas: ["Cabeceras (Headers)", "Cuerpo (Body)", "Línea de estado", "Todas las anteriores"]

enunciado: "Una respuesta HTTP estándar está compuesta por varias partes. ¿Cuál de las siguientes opciones describe los elementos que contienen metadatos sobre el contenido (como el tipo de archivo o la fecha)?"

respuesta: "Cabeceras (Headers)"

explicacion: |
  Las cabeceras (Headers) contienen información adicional sobre la respuesta, mientras que el cuerpo (Body) contiene el recurso solicitado propiamente dicho.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "web", "cliente_servidor"]

respuesta: "GET"
tipo: completar
respuestas_validas:
  - "GET"

enunciado: "Cuando un usuario escribe una URL en su navegador y presiona Enter, el navegador actúa como cliente y envía una petición de tipo ___ al servidor para solicitar el recurso."

explicacion: |
  En el protocolo HTTP, el método GET se utiliza para solicitar y recibir una representación de un recurso (como un archivo HTML) del servidor.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "status_code"]

variables:
  idx: uno_de([0, 1])
  datos: [["200 OK", "El recurso se encontró y se envió correctamente."], ["404 Not Found", "El servidor no pudo encontrar el recurso solicitado."]]

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["200 OK", "404 Not Found", "500 Internal Server Error", "301 Moved Permanently"]

enunciado: "Si el servidor responde con el código de estado {datos[idx][1]}, ¿cuál es el mensaje de estado que acompaña a la respuesta?"

explicacion: |
  El código de estado indica el resultado de la petición. El código 200 indica éxito, mientras que el 404 indica que la URL no existe en el servidor.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "estado"]

respuesta: falso
tipo: vf

enunciado: "El protocolo HTTP es un protocolo 'stateful', lo que significa que el servidor recuerda automáticamente quién es el cliente entre una petición y otra sin ayuda de cookies o tokens."

explicacion: |
  Falso. HTTP es un protocolo 'stateless' (sin estado). Cada petición es independiente; para mantener el estado (como un carrito de compras), se usan mecanismos adicionales como Cookies o sesiones.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "flujo"]

respuesta_orden: ["Petición del cliente", "Procesamiento en el servidor", "Respuesta del servidor", "Renderizado en el navegador"]
tipo: ordenar
opciones_explicitas: ["Petición del cliente", "Procesamiento en el servidor", "Respuesta del servidor", "Renderizado en el navegador"]

enunciado: "Ordena cronológicamente los pasos que ocurren desde que un usuario hace clic en un enlace hasta que ve la página en su pantalla:"

explicacion: |
  El flujo comienza con el cliente enviando la petición, el servidor la procesa, envía la respuesta y finalmente el navegador interpreta (renderiza) el contenido.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "error_server"]

respuesta: 500
tipo: completar
tolerancia_abs: 0

enunciado: "Si un servidor web experimenta un error inesperado en su código interno (por ejemplo, un error de sintaxis en un script de backend) al intentar procesar una petición, el servidor responderá con un código de estado de la familia 5xx. ¿Cuál es el código específico para 'Internal Server Error'?"

pasos:
  - "Identificar la familia de errores (4xx para cliente, 5xx para servidor)."
  - "Localizar el código estándar para errores genéricos del servidor."

explicacion: |
  El código 500 indica que el servidor encontró una condición inesperada que le impidió completar la petición, generalmente debido a un error en el software del lado del servidor.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "cliente_servidor"]

respuesta: "cliente"
tipo: completar
respuestas_validas:
  - "cliente"

enunciado: "En el modelo de comunicación HTTP, el dispositivo o software que inicia una comunicación solicitando un recurso es el ___."

explicacion: |
  El modelo cliente-servidor se basa en que el cliente inicia la interacción mediante una petición (request), y el servidor espera estas peticiones para responder (response).
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["estado", "stateless"]

respuesta: falso
tipo: vf

enunciado: "El protocolo HTTP es considerado un protocolo 'stateful' (con estado), lo que significa que el servidor recuerda automáticamente todas las peticiones anteriores de un mismo cliente."

explicacion: |
  Falso. HTTP es un protocolo 'stateless' (sin estado). Cada petición es independiente y el servidor no guarda información de sesiones previas por defecto, por eso se usan cookies o tokens para mantener el estado.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["estructura_respuesta", "status_code"]

respuesta: "404"
tipo: mc
opciones_explicitas: ["404", "200", "500", "301"]

enunciado: "Si un cliente solicita una página que no existe en el servidor, el servidor responderá con un código de estado de la serie 4xx. En este caso específico, el código será ___."

explicacion: |
  Los códigos de la serie 4xx indican errores del cliente (Client Error), como el 404 cuando el recurso no se encuentra.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["flujo_comunicacion"]

respuesta_orden: ["Petición del cliente", "Procesamiento en servidor", "Respuesta del servidor"]
tipo: ordenar
opciones_explicitas: ["Petición del cliente", "Procesamiento en servidor", "Respuesta del servidor"]

enunciado: "Ordena cronológicamente los pasos de una interacción estándar de HTTP:"

explicacion: |
  Primero el cliente envía la petición, luego el servidor la procesa y finalmente envía la respuesta con el contenido solicitado.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["metodos_http", "verbos"]

respuesta: "GET"
tipo: mc
opciones_explicitas: ["GET", "POST", "PUT", "DELETE"]

enunciado: "Si un cliente desea simplemente recuperar (leer) la información de un recurso sin modificar nada en el servidor, el método HTTP más apropiado es ___."

explicacion: |
  El método GET se utiliza para solicitar la representación de un recurso específico, mientras que POST, PUT y DELETE se utilizan para crear, actualizar o eliminar datos.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["redes", "protocolos", "modelo_cliente_servidor"]

respuesta: "capa_aplicacion"
tipo: completar
respuestas_validas:
  - "capa_aplicacion"
  - "capa_aplicacion"

enunciado: "Mientras que TCP opera en la capa de transporte para garantizar la entrega de datos, el protocolo HTTP opera en la ___."

explicacion: |
  HTTP es un protocolo de la capa de aplicación que define cómo se estructuran los mensajes, mientras que TCP se encarga de la conexión y fiabilidad del transporte de esos mensajes.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["protocolos", "web"]

respuesta: verdadero
tipo: vf
enunciado: "A diferencia de FTP, que está diseñado principalmente para la transferencia de archivos, HTTP es un protocolo orientado a la transferencia de hipermedios (páginas web, imágenes, etc.). ¿Es correcto afirmar que HTTP es un protocolo sin estado (stateless) por diseño?"

explicacion: |
  HTTP es stateless porque cada petición es independiente; el servidor no guarda memoria de peticiones anteriores por defecto (para eso se usan cookies o sesiones).
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["metodos", "http"]

respuesta: "POST"
tipo: mc
opciones_explicitas: ["GET", "POST", "PUT", "DELETE"]

enunciado: "En el modelo petición-respuesta, ¿qué método se distingue por enviar los datos del cuerpo en el cuerpo del mensaje y no en la URL, siendo ideal para enviar información sensible?"

explicacion: |
  El método GET envía los parámetros en la URL (query string), lo que los hace visibles en el historial y logs. El método POST envía la información en el cuerpo (body) de la petición.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["flujo", "modelo_cliente_servidor"]

respuesta_orden: ["Petición del cliente", "Procesamiento del servidor", "Respuesta del servidor"]
tipo: ordenar
opciones_explicitas: ["Petición del cliente", "Procesamiento del servidor", "Respuesta del servidor"]

enunciado: "Ordena cronológicamente los pasos que ocurren en un ciclo estándar de comunicación HTTP:"

explicacion: |
  El cliente inicia la comunicación con una petición (Request), el servidor procesa dicha petición y finalmente devuelve una respuesta (Response) al cliente.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["codigos_estado", "http"]

respuesta: "Error del cliente"
tipo: mc
opciones_explicitas: ["Éxito del servidor", "Redirección", "Error del cliente", "Error del servidor"]

enunciado: "Un código de estado HTTP de la serie 400 (como el 404) se distingue de un código de la serie 500 porque el primero indica un ___."

explicacion: |
  Los códigos 4xx indican que el problema reside en la petición del cliente (ej. recurso no encontrado), mientras que los 5xx indican que el servidor falló al procesar una petición válida.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "cliente_servidor", "web"]

variables:
  datos: [["El navegador solicita la página principal de un sitio", "GET"], ["El navegador envía un formulario de registro", "POST"], ["El navegador solicita un archivo de estilo CSS", "GET"]]
  idx: uno_de([0, 1, 2])

enunciado: "En el modelo cliente-servidor, cuando {datos[idx][0]}, el método HTTP utilizado es ___."

respuestas_validas:
  - "GET"
  - "POST"
  - "PUT"
  - "DELETE"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El método HTTP indica la acción que el cliente desea realizar. 'GET' se usa para solicitar datos y 'POST' para enviar datos al servidor.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "status_code", "headers"]

variables:
  datos: [["404", "Not Found"], ["200", "OK"], ["500", "Internal Server Error"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si el servidor responde con el código de estado {datos[idx][0]}, el significado de la respuesta es ___."

opciones_explicitas: ["Not Found", "OK", "Internal Server Error", "Bad Request"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Los códigos de estado HTTP informan sobre el resultado de la petición: 2xx son éxitos, 4xx errores del cliente y 5xx errores del servidor.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["conceptos", "modelo_cliente_servidor"]

enunciado: "En el protocolo HTTP, el servidor es el encargado de iniciar la comunicación enviando una petición al cliente para que este pueda mostrar contenido."

respuesta: falso
tipo: vf

explicacion: |
  Es falso. En el modelo petición-respuesta de HTTP, el cliente (como un navegador) siempre inicia la comunicación mediante una petición, y el servidor responde a dicha petición.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["flujo", "protocolo"]

enunciado: "Ordena los pasos que ocurren durante una navegación web estándar:"

opciones_explicitas: ["El cliente envía una petición HTTP", "El servidor procesa la petición", "El servidor envía una respuesta HTTP", "El cliente recibe y renderiza el contenido"]
respuesta_orden: ["El cliente envía una petición HTTP", "El servidor procesa la petición", "El servidor envía una respuesta HTTP", "El cliente recibe y renderiza el contenido"]
tipo: ordenar

explicacion: |
  El flujo lógico es: Petición (Cliente) -> Procesamiento (Servidor) -> Respuesta (Servidor) -> Renderizado (Cliente).
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["metodos", "http"]

variables:
  datos: [["actualizar un recurso existente", "PUT"], ["eliminar un recurso", "DELETE"], ["enviar datos para crear un nuevo usuario", "POST"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si el objetivo de la operación es {datos[idx][0]}, el método HTTP más adecuado es ___."

opciones_explicitas: ["GET", "POST", "PUT", "DELETE"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Cada método tiene una semántica definida: GET para lectura, POST para creación, PUT para actualización y DELETE para eliminación.
```

## Sección: comunicacion-entre-procesos (20 preguntas)

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["procesos", "aislamiento"]

respuesta: verdadero
tipo: vf

enunciado: "Los procesos en un sistema operativo moderno funcionan de manera completamente integrada y comparten su espacio de memoria por defecto."

explicacion: |
  Falso. Los procesos se gestionan de manera aislada por seguridad y estabilidad. Si uno falla, no necesariamente se cae el resto gracias a este aislamiento.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["estabilidad", "seguridad"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "¿Cuál es una razón clave para que el sistema operativo gestione los procesos de forma aislada?"

explicacion: |
  El aislamiento mejora la estabilidad y la seguridad. Si un proceso falla, no corrompe la memoria de otros procesos ni cae todo el sistema.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["ejemplo", "portapapeles"]

respuesta: 2
tipo: mc
opciones: 4

enunciado: "Cuando copias texto de un editor y lo pegas en otro, ¿qué mecanismo está involucrado indirectamente?"

explicacion: |
  El portapapeles es una forma de IPC. El editor A escribe en una región de memoria compartida (o envía un mensaje al gestor de portapapeles) y el editor B lee de ahí.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "avanzado"
  tags: ["seguridad", "comparacion"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "¿Qué mecanismo es generalmente más seguro por defecto al no requerir conocimiento de los detalles internos del otro proceso?"

explicacion: |
  El intercambio de mensajes es más seguro porque los procesos no compiten por el mismo espacio de memoria, reduciendo riesgos de corrupción accidental.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["lenguaje", "sintaxis"]

respuesta: verdadero
tipo: vf

enunciado: "En el lenguaje de descripción de ejercicios, los booleanos se escriben como 'true' o 'false'."

explicacion: |
  Falso. En este DSL, los booleanos literales son 'verdadero' y 'falso', sin comillas.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["diseño", "ventajas"]

respuesta: 3
tipo: mc
opciones: 4

enunciado: "¿Cuál NO es una ventaja directa de usar IPC sobre un monolito gigante?"

explicacion: |
  La complejidad de implementación es una DESVENTAJA. Las ventajas son modularidad, seguridad, estabilidad y reutilización. La opción de "menor complejidad de código" es falsa.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["ipc", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "La comunicación entre procesos (IPC) es el conjunto de mecanismos que permiten que procesos independientes intercambien información o modifiquen su comportamiento."

explicacion: |
  Correcto. La IPC es fundamental para que aplicaciones aisladas colaboren, como cuando copiar y pegar texto involucra comunicación entre el editor y el sistema de almacenamiento temporal.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["seguridad", "mensajes"]

respuesta: verdadero
tipo: vf

enunciado: "El intercambio de mensajes es considerado más seguro que la memoria compartida porque los procesos no necesitan conocer los detalles internos del otro."

explicacion: |
  Correcto. Al usar canales definidos por el SO, los procesos mantienen su aislamiento interno, reduciendo riesgos de corrupción accidental de memoria.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["proceso", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "Cada aplicación que abres en tu computadora, como un navegador o un reproductor de música, es considerada un proceso separado."

explicacion: |
  Correcto. El sistema operativo trata a cada aplicación ejecutándose como un proceso independiente con su propio espacio de memoria.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["eficiencia", "diseno"]

respuesta: verdadero
tipo: vf

enunciado: "Dividir tareas complejas en procesos pequeños que se comunican mejora la eficiencia, seguridad y mantenimiento del software."

explicacion: |
  Correcto. La modularidad mediante IPC permite crear sistemas más robustos, fáciles de actualizar y menos propensos a fallos catastróficos.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["errores", "memoria_compartida"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos procesos intentan escribir en el mismo lugar de memoria compartida al mismo tiempo sin sincronización, pueden ocurrir errores."

explicacion: |
  Correcto. La condición de carrera puede llevar a corrupción de datos, por lo que se requieren mecanismos de exclusión mutua o semáforos.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["ejemplo", "portapapeles"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando copias y pegas texto, hay comunicación constante entre el editor de texto y el sistema de almacenamiento temporal."

explicacion: |
  Correcto. El portapapeles es un ejemplo cotidiano de IPC, donde un proceso escribe datos y otro los lee desde una zona compartida o canal del SO.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["estabilidad", "aislamiento"]

respuesta: verdadero
tipo: vf

enunciado: "Debido al aislamiento, si un proceso falla, no necesariamente se cae el resto del sistema."

explicacion: |
  Correcto. El aislamiento de memoria previene que un error en un proceso afecte la integridad de otros procesos o del kernel.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "avanzado"
  tags: ["aplicaciones", "rendimiento"]

respuesta: verdadero
tipo: vf

enunciado: "Para aplicaciones gráficas, la memoria compartida es preferible por su eficiencia en grandes volúmenes de datos."

explicacion: |
  Correcto. Los gráficos requieren transferir grandes cantidades de píxeles o vectores rápidamente, lo que la memoria compartida facilita mejor que los mensajes.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["mensajes", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "En el intercambio de mensajes, los datos viajan a través de un canal definido por el sistema operativo."

explicacion: |
  Correcto. El SO proporciona la infraestructura (colas de mensajes, pipes, etc.) que actúa como el canal de comunicación.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["diseno", "beneficios"]

respuesta: verdadero
tipo: vf

enunciado: "El uso de IPC mejora la capacidad de mantenimiento del software al permitir dividir tareas en partes manejables."

explicacion: |
  Correcto. Los módulos pueden desarrollarse, probarse y actualizarse independientemente, facilitando el mantenimiento a largo plazo.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["mensajes", "costo"]

respuesta: verdadero
tipo: vf

enunciado: "El intercambio de mensajes implica copiar datos de un espacio de memoria a otro, lo que puede ser lento."

explicacion: |
  Correcto. La sobrecarga de copiar datos entre espacios de usuario y kernel (o entre procesos) es el principal costo del modelo de mensajes.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "avanzado"
  tags: ["memoria_compartida", "control"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria compartida requiere mecanismos de sincronización para evitar que procesos escriban simultáneamente en el mismo lugar."

explicacion: |
  Correcto. Sin sincronización (mutex, semáforos), la escritura concurrente lleva a condiciones de carrera y corrupción de datos.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["ejemplo", "portapapeles"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema de almacenamiento temporal (portapapeles) participa en la comunicación cuando copias texto."

explicacion: |
  Correcto. El portapapeles es un servicio del SO que actúa como intermediario de datos entre el proceso que copia y el que pega.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["sincronizacion", "riesgos"]

respuesta: falso
tipo: vf

enunciado: "La memoria compartida elimina por completo la necesidad de mecanismos de sincronización entre procesos, ya que el sistema operativo gestiona automáticamente la integridad de los datos sin intervención del desarrollador."

explicacion: |
  Falso. La memoria compartida introduce el desafío de la sincronización. Si dos procesos escriben simultáneamente, pueden ocurrir condiciones de carrera o corrupción de datos, requiriendo semáforos o mutex.
```

## Sección: memoria-asignacion-memoria-virtual (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["conceptos", "gestion_de_memoria"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria virtual es una técnica que permite a un proceso utilizar una cantidad de memoria que excede la capacidad de la memoria física (RAM) disponible, utilizando parte del almacenamiento secundario como extensión."

explicacion: |
  Correcto. La memoria virtual permite que el sistema operativo gestione la memoria de forma abstracta, permitiendo ejecutar programas más grandes que la RAM física mediante el uso de paginación o segmentación en el disco.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["hardware", "direccionamiento"]

respuesta: "dirección lógica"
tipo: mc

opciones_explicitas: ["dirección lógica", "dirección física", "dirección de disco", "dirección de caché"]

enunciado: "En un sistema con memoria virtual, la unidad de gestión de memoria (MMU) es el componente de hardware encargado de traducir la ___ en una dirección física."

explicacion: |
  La MMU (Memory Management Unit) es el componente encargado de la traducción de direcciones lógicas (generadas por la CPU) a direcciones físicas (ubicadas en la RAM).
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["terminologia", "paginacion"]

respuesta_orden: ["Paginación", "Segmentación", "Direccionamiento"]
tipo: ordenar

opciones_explicitas: ["Paginación", "Segmentación", "Direccionamiento"]

enunciado: "Ordena los conceptos de mayor a menor nivel de abstracción en la gestión de memoria (desde la división de memoria en bloques de tamaño fijo hasta la traducción de direcciones):"

explicacion: |
  La paginación divide la memoria en trozos fijos, la segmentación divide la memoria en unidades lógicas de tamaño variable, y el direccionamiento es el proceso final de localización.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["paginacion", "errores"]

respuesta: "page fault"
tipo: completar

respuestas_validas:
  - "page fault"
  - "error de paginación"
  - "fallo de página"

enunciado: "Cuando un proceso intenta acceder a una página que no se encuentra actualmente en la memoria física, se produce un evento conocido como ___."

explicacion: |
  Un 'page fault' (fallo de página) es una interrupción generada por el hardware que indica que la página requerida debe ser cargada desde el disco a la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  datos: uno_de([[16, 128], [32, 256], [64, 512]])

respuesta: datos[1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si un sistema tiene una memoria RAM física de {datos[0]} GB y se implementa memoria virtual, la capacidad de direccionamiento lógico total para un proceso puede llegar a ser de hasta {datos[1]} GB."

pasos:
  - "Identificar la capacidad de la RAM física."
  - "Asociar la capacidad de direccionamiento virtual como un valor superior a la física."

explicacion: |
  La memoria virtual permite que el espacio de direcciones lógicas sea significativamente mayor que la memoria física instalada.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["conceptos", "gestion_de_memoria"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria virtual permite que un proceso utilice una cantidad de memoria que excede la capacidad física de la memoria RAM disponible, utilizando el almacenamiento secundario como extensión."

explicacion: |
  La memoria virtual es una técnica de gestión de memoria que utiliza el espacio en el disco duro para simular memoria RAM adicional, permitiendo ejecutar procesos más grandes que la RAM física.
```

```
metadata:
  materia: "informatica"
  tema: "asignacion_de_memoria"
  nivel: "intermedio"
  tags: ["calculo", "paginacion"]

variables:
  escenario: uno_de([["4096", "4096", "1024", "4"], ["8192", "8192", "4096", "2"], ["1024", "1024", "512", "2"]])

respuesta: escenario[3]
tipo: mc
opciones_explicitas: ["1", "2", "4", "8"]

enunciado: "Un proceso requiere un bloque de memoria de {escenario[0]} bytes. Si el sistema utiliza páginas de tamaño fijo de {escenario[2]} bytes, ¿cuántas páginas se deben asignar para cubrir el requerimiento total del proceso?"

pasos:
  - "Dividir el tamaño total del proceso por el tamaño de la página: {escenario[0]} / {escenario[2]}"
  - "Si el resultado no es entero, redondear hacia arriba (ceil) para asegurar que el proceso quepa."

explicacion: |
  Para calcular el número de páginas: 
  {escenario[0]} / {escenario[2]} = {escenario[3]}. 
  Se requiere asignar exactamente esa cantidad de páginas.
```

```
metadata:
  materia: "informatica"
  tema: "fragmentacion"
  nivel: "intermedio"
  tags: ["paginacion", "fragmentacion_interna"]

variables:
  datos: uno_de([["15000", "4096", "1384"], ["18000", "4096", "2480"], ["10000", "4096", "2288"]])

respuesta: datos[2]
tipo: completar
respuestas_validas:
  - "1384"
  - "2480"
  - "2288"

enunciado: "En un sistema con paginación de {datos[1]} bytes, se asigna un proceso de {datos[0]} bytes. La fragmentación interna (espacio desperdiciado en la última página) es de ___ bytes."

explicacion: |
  1. Calculamos cuántas páginas completas se necesitan: ceil({datos[0]} / {datos[1]}) páginas.
  2. Espacio total asignado: número de páginas * {datos[1]}.
  3. Fragmentación: espacio total asignado - {datos[0]} = {datos[2]}.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "avanzado"
  tags: ["swapping", "gestion_procesos"]

respuesta_orden: ["Petición de memoria", "Fallo de página (Page Fault)", "Intercambio (Swap-in/out)", "Actualización de tabla de páginas"]
tipo: ordenar

enunciado: "Ordene los pasos que ocurren cuando un proceso intenta acceder a una página que no se encuentra actualmente en la memoria RAM (Page Fault):"

opciones_explicitas: ["Petición de memoria", "Fallo de página (Page Fault)", "Intercambio (Swap-in/out)", "Actualización de tabla de páginas"]

explicacion: |
  El flujo lógico es:
  1. El proceso solicita una dirección de memoria.
  2. La MMU detecta que la página no está en RAM (Page Fault).
  3. El SO busca la página en el disco y la carga en RAM (Swap-in).
  4. Se actualiza la tabla de páginas para marcar la página como presente.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_virtual"
  nivel: "avanzado"
  tags: ["direccionamiento", "paginacion"]

variables:
  direccion: uno_de([["0x0045", "0x0005"], ["0x01A2", "0x0002"], ["0x03FF", "0x000F"]])

respuesta: direccion[1]
tipo: mc
opciones_explicitas: ["0x0000", "0x0005", "0x0002", "0x000F"]

enunciado: "Si el tamaño de página es de 16 bytes (0x10 en hex) y una dirección virtual es {direccion[0]}, ¿cuál es el desplazamiento (offset) dentro de la página?"

pasos:
  - "El desplazamiento se obtiene calculando el residuo de la dirección dividido por el tamaño de la página."
  - "En hexadecimal: {direccion[0]} MOD 0x10 = {direccion[1]}."

explicacion: |
  El desplazamiento (offset) identifica la posición exacta dentro de una página. Se calcula mediante la operación módulo: {direccion[0]} % 16 = {direccion[1]}.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["memoria_virtual", "conceptos_base"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria virtual permite que un proceso acceda a una cantidad de memoria que excede la capacidad de la memoria RAM física instalada en el sistema."

explicacion: |
  Verdadero. La memoria virtual utiliza espacio en el disco (archivo de paginación/swap) para simular memoria adicional, permitiendo que el sistema operativo gestione procesos que requieren más espacio del que la RAM física puede ofrecer de forma inmediata.
```

```
metadata:
  materia: "informatica"
  tema: "asignacion_de_memoria"
  nivel: "intermedio"
  tags: ["fragmentacion", "gestion_memoria"]

variables:
  escenario: uno_de([["fragmentacion_externa", "la memoria tiene huecos libres pero no contiguos"], ["fragmentacion_interna", "la memoria tiene espacio sobrante dentro de un bloque asignado"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["la memoria tiene huecos libres pero no contiguos", "la memoria tiene espacio sobrante dentro de un bloque asignado", "el procesador no puede acceder a la RAM"]

enunciado: "Un sistema operativo utiliza particiones fijas para la asignación de memoria. Si un proceso requiere 15KB y se le asigna un bloque de 20KB, el espacio sobrante de 5KB dentro de ese bloque se conoce como: {escenario[1]}"

explicacion: |
  La fragmentación interna ocurre cuando se asigna un bloque de memoria a un proceso que es mayor que el tamaño requerido por este, dejando un residuo inutilizable dentro de la partición asignada.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["paginacion", "direccionamiento"]

respuesta_orden: ["Dirección lógica", "MMU", "Dirección física"]
tipo: ordenar

opciones_explicitas: ["Dirección lógica", "MMU", "Dirección física"]

enunciado: "Ordena el flujo de resolución de una dirección de memoria cuando un proceso intenta acceder a un dato en un sistema con paginación:"

explicacion: |
  El proceso comienza con la dirección lógica generada por la CPU, la cual es interceptada por la Unidad de Gestión de Memoria (MMU) para ser traducida mediante tablas de páginas, resultando finalmente en una dirección física en la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "avanzado"
  tags: ["page_fault", "rendimiento"]

respuesta: "page_fault"
tipo: completar
respuestas_validas:
  - "page_fault"

enunciado: "Cuando un proceso intenta acceder a una página de memoria que no se encuentra actualmente cargada en la memoria RAM, se produce una excepción llamada ___."

explicacion: |
  El 'page fault' (falta de página) no es un error fatal del programa, sino una interrupción que le indica al sistema operativo que debe buscar la página necesaria en el disco para cargarla en la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento"
  nivel: "intermedio"
  tags: ["bus_direcciones", "arquitectura"]

variables:
  pares: [[32, 4294967296], [64, 18446744073709551616]]
  idx: uno_de([0, 1])
  bits: pares[idx][0]
  max_direccion: pares[idx][1]

respuesta: max_direccion

tipo: completar
tolerancia_abs: 0

enunciado: "Si un procesador tiene un bus de direcciones de {bits} bits, el número total de direcciones de memoria únicas que puede direccionar es:"

explicacion: |
  El número de direcciones posibles es igual a 2 elevado a la potencia del número de bits del bus de direcciones. Para 32 bits es 2^32, y para 64 bits es 2^64.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["memoria", "sistema_operativo", "abstraccion"]

respuesta: "abstraccion"
tipo: mc
opciones_explicitas: ["abstraccion", "hardware", "almacenamiento", "registro"]

enunciado: "A diferencia de la memoria RAM (memoria física), la memoria virtual actúa como una ___ que permite a los procesos manejar un espacio de direcciones mayor al tamaño de la memoria física disponible."

explicacion: |
  La memoria virtual es una técnica de gestión de memoria que proporciona una abstracción de la memoria física, permitiendo que cada proceso crea que tiene un espacio de direccionamiento continuo y extenso.
```

```
metadata:
  materia: "informatica"
  tema: "gestion_de_memoria"
  nivel: "avanzado"
  tags: ["paginacion", "segmentacion", "fragmentacion"]

respuesta: "externa"
tipo: mc
opciones_explicitas: ["interna", "externa"]

enunciado: "La paginación divide la memoria en bloques de tamaño fijo, lo que puede causar fragmentación interna. Por el contrario, la segmentación, al usar tamaños variables, suele provocar fragmentación ___."

explicacion: |
  La paginación causa fragmentación interna (espacio sobrante dentro de una página), mientras que la segmentación causa fragmentación externa (huecos entre segmentos que no son lo suficientemente grandes para nuevos procesos).
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["conceptos_clave", "hardware"]

respuesta: falso
tipo: vf

enunciado: "La memoria virtual es una extensión física de la memoria RAM mediante la adición de módulos de memoria adicionales."

explicacion: |
  Falso. La memoria virtual es una técnica de gestión lógica/de software que utiliza espacio en el disco (almacenamiento secundario) para simular memoria adicional, no es un componente físico extra.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["paginacion", "swap", "paged_fault"]

respuesta_orden: ["Page Fault", "Swap In", "Update Page Table", "Resume Execution"]
tipo: ordenar

opciones_explicitas: ["Page Fault", "Swap In", "Update Page Table", "Resume Execution"]

enunciado: "Cuando un proceso intenta acceder a una página que no está en la RAM, ocurre un 'Page Fault'. Ordena los pasos lógicos que el Sistema Operativo debe seguir para resolver esta interrupción:"

explicacion: |
  1. Se detecta el Page Fault (interrupción).
  2. Se busca la página en el disco y se carga en RAM (Swap In).
  3. Se actualiza la tabla de páginas para marcarla como presente.
  4. Se reanuda la ejecución de la instrucción original.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["direcciones", "logico", "fisico"]

respuesta: "lógico"
tipo: completar
respuestas_validas:
  - "lógico"
  - "virtual"

enunciado: "Mientras que la memoria física se refiere a las direcciones reales en los chips de RAM, el espacio de direcciones que ve un proceso es un espacio ___."

explicacion: |
  El espacio de direcciones lógico (o virtual) es la vista que el procesador y el software tienen de la memoria, la cual es mapeada a direcciones físicas mediante la MMU (Memory Management Unit).
```

```
metadata:
  materia: "informatica"
  tema: "asignacion_memoria_procesos"
  nivel: "intermedio"
  tags: ["memoria", "segmentacion", "procesos"]

variables:
  datos: [["segmento_codigo", "0x0040"], ["segmento_datos", "0x0080"], ["segmento_stack", "0x0120"]]
  resultados: ["1040", "1080", "1120"]
  idx: uno_de([0, 1, 2])

enunciado: "Un sistema operativo utiliza segmentación para gestionar la memoria de un proceso. Si el proceso requiere cargar el {datos[idx][0]} en una dirección base específica, la dirección física final será el resultado de sumar la base más el offset. Si la base es 0x1000 y el offset es {datos[idx][1]}, ¿cuál es la dirección física resultante en hexadecimal (sin el prefijo 0x)?"

pasos:
  - "Convertir el offset hexadecimal a decimal."
  - "Sumar el valor de la base (4096) al offset."
  - "Convertir el resultado de nuevo a hexadecimal."

respuestas_validas:
  - "1040"
  - "1080"
  - "1120"
respuesta: resultados[idx]
tipo: completar
tolerancia_abs: 0

explicacion: |
  La dirección física se calcula sumando la dirección base del segmento al offset relativo.
  Para el caso de {datos[idx][0]}, la suma es 0x1000 + {datos[idx][1]} = 0x{resultados[idx]}.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["memoria_virtual", "conceptos"]

enunciado: "La memoria virtual permite que un proceso utilice una cantidad de memoria que es mayor a la capacidad de la memoria RAM física disponible, utilizando el almacenamiento secundario (disco) como extensión. ¿Es esta afirmación verdadera o falsa?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La memoria virtual abstrae la memoria física, permitiendo que los programas se ejecuten incluso si la RAM es insuficiente, mediante el uso de paginación o segmentación y el intercambio (swapping) con el disco.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["mmu", "direccionamiento"]

enunciado: "Cuando un proceso intenta acceder a una dirección de memoria virtual, un componente de hardware especializado debe traducir esa dirección a una dirección física real. ¿Cómo se llama este componente?"

opciones_explicitas: ["MMU (Memory Management Unit)", "CPU (Central Processing Unit)", "ALU (Arithmetic Logic Unit)", "Controlador de Interrupciones"]
respuesta: "MMU (Memory Management Unit)"
tipo: mc

explicacion: |
  La MMU es la unidad de hardware encargada de la traducción de direcciones virtuales a físicas en tiempo real durante la ejecución de las instrucciones.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "avanzado"
  tags: ["paginacion", "paginas", "frames"]

variables:
  datos: [["pagina_virtual_2", "frame_fisico_5"], ["pagina_virtual_3", "frame_fisico_8"], ["pagina_virtual_5", "frame_fisico_12"]]
  resultados: [20480, 32768, 49152]
  idx: uno_de([0, 1, 2])

enunciado: "En un sistema de paginación, la tabla de páginas mapea la {datos[idx][0]} hacia el {datos[idx][1]}. Si el tamaño de página es de 4KB, ¿en qué dirección física comienza el {datos[idx][1]}?"

pasos:
  - "Identificar el número de frame físico: {datos[idx][1]}."
  - "Multiplicar el número de frame por el tamaño de página (4096)."
  - "El resultado es la dirección base del frame."

respuesta: resultados[idx]
tipo: completar
tolerancia_abs: 0

explicacion: |
  Si el frame físico es el {datos[idx][1]} (índice 5, 8 o 12), la dirección base se calcula como:
  Frame * 4096. Por ejemplo, si es el frame 5: 5 * 4096 = 20480.
```

```
metadata:
  materia: "informatica"
  tema: "asignacion_memoria_procesos"
  nivel: "intermedio"
  tags: ["gestion", "orden"]

enunciado: "Ordena los pasos que sigue el Sistema Operativo desde que un proceso solicita memoria hasta que esta es liberada:"

opciones_explicitas: ["El SO asigna un bloque de memoria (física o virtual)", "El proceso solicita memoria mediante una llamada al sistema", "El proceso finaliza y el SO libera la memoria", "El proceso utiliza la memoria para sus datos"]
respuesta_orden: ["El proceso solicita memoria mediante una llamada al sistema", "El SO asigna un bloque de memoria (física o virtual)", "El proceso utiliza la memoria para sus datos", "El proceso finaliza y el SO libera la memoria"]
tipo: ordenar

explicacion: |
  El flujo lógico es: 1. Solicitud (System Call), 2. Asignación (Gestión de memoria), 3. Uso (Ejecución), 4. Liberación (Cleanup).
```

