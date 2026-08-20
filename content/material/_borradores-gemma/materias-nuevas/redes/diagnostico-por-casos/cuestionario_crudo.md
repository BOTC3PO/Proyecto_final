### 1 — Diagnóstico de enlace físico caído
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["cableado", "capa-fisica", "ethtool"]
enunciado:
  "Un administrador nota que una interfaz de servidor ha caído. Al ejecutar `ethtool eth0`, la salida muestra `Link detected: no`. ¿Qué indica este estado específico sobre la capa física?"
tipo: vf
respuesta: verdadero
pasos:
  - "Analizar la salida del comando ethtool."
  - "Interpretar `Link detected: no` como ausencia de señal eléctrica/física."
  - "Descartar problemas de configuración IP o ARP."
explicacion: "El estado `Link detected: no` indica exclusivamente un fallo en la capa física (cable dañado, puerto apagado en el switch, incompatibilidad de media). No tiene relación directa con la configuración lógica (IP/Máscara)."
```

### 2 — Resolución de nombres fallida (DNS)
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["dns", "nslookup", "timeout"]
enunciado:
  "Al intentar `nslookup internal-app.corp`, la consola devuelve `;; connection timed out; no servers could be reached`. ¿Cuál es la causa técnica más probable si el ping a la IP del gateway funciona?"
tipo: mc
opciones_explicitas:
  - "El servidor DNS está bloqueando por ICMP."
  - "El puerto UDP/TCP 53 del servidor DNS no es accesible o no responde."
  - "La tabla ARP del cliente está vacía."
  - "El archivo /etc/hosts tiene un error de sintaxis."
respuesta: "El servidor DNS está bloqueando por ICMP."
pasos:
  - "Descartar problemas de capa 2 (ping al gateway funciona)."
  - "Identificar que el error es de tiempo de espera (timeout) en la consulta DNS."
  - "Concluir que el paquete no llega o no recibe respuesta en el puerto 53."
explicacion: "Un timeout en nslookup indica que los paquetes UDP/TCP al puerto 53 no tienen respuesta. Si el ping al gateway funciona, la capa 2/3 básica está operativa. El bloqueo por firewall o caída del servicio DNS son las causas primarias."
```

### 3 — Ruteo estático incorrecto
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["ruteo", "ip-route", "next-hop"]
enunciado:
  "Se configura `ip route add 192.168.10.0/24 via 10.0.0.1`. El ping a cualquier host en 192.168.10.x falla, pero el ping a 10.0.0.1 succeede. ¿Qué verificación crítica se debe hacer en el siguiente salto?"
tipo: completar
respuesta: "arp"
respuestas_validas:
  - "arp"
  - "ARP"
  - "tabla arp"
  - "cache arp"
pasos:
  - "Verificar conectividad directa al next-hop (10.0.0.1)."
  - "Si el next-hop es accesible, el problema no es de ruteo local."
  - "Verificar si el next-hop tiene una ruta de retorno o resolución ARP correcta para la red destino."
explicacion: "Si el next-hop es reachable, el problema suele ser que el siguiente router no sabe cómo llegar a la red destino (ruta faltante) o no puede resolver la dirección MAC del siguiente hop intermedio (problema ARP)."
```

### 4 — Duplicidad de IP (ARP Conflict)
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["arp", "conflicto", "linux"]
enunciado:
  "En los logs de kern del sistema aparece: `arp: 192.168.1.50 on eth0: not responding to probe`. ¿Qué conflicto de red se está produciendo?"
tipo: mc
opciones_explicitas:
  - "El servidor DNS está saturado."
  - "Dos dispositivos tienen la misma dirección IP asignada."
  - "La máscara de subred es incorrecta."
  - "El cable Ethernet está intermitente."
respuesta: "Dos dispositivos tienen la misma dirección IP asignada."
pasos:
  - "Identificar el mensaje de kernel `arp: ... not responding to probe`."
  - "Relacionar este mensaje con la detección de duplicidad de IP por el stack de red."
  - "Confirmar que otro host está respondiendo al ARP probe por esa IP."
explicacion: "Cuando Linux detecta que otra máquina responde al ARP probe por una IP que él mismo pretende usar, asume un conflicto de dirección IP (IP conflict) y alerta al usuario."
```

### 5 — MTU mismatch y fragmentación
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["mtu", "ping", "df-bit"]
enunciado:
  "El ping a `8.8.8.8` funciona, pero `ping -s 1472 -M do 8.8.8.8` devuelve `Message too long`. ¿Qué indica esto sobre la ruta?"
tipo: completar
respuesta: "mtu"
respuestas_validas:
  - "mtu"
  - "MTU"
  - "unidad de transmisión máxima"
  - "max transmission unit"
pasos:
  - "Analizar el uso de la bandera `-M do` (Don't Fragment)."
  - "Observar que el paquete de 1472 bytes + 28 bytes de cabecera ICMP supera el límite."
  - "Concluir que algún enlace en la ruta tiene un MTU menor al esperado (ej. 1500 vs 1472)."
explicacion: "El error 'Message too long' con la bandera DF (Don't Fragment) indica que el paquete supera el MTU mínimo requerido por algún enlace en el camino y no puede ser fragmentado."
```

### 6 — Puerta de enlace inalcanzable
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["icmp", "unreachable", "traceroute"]
enunciado:
  "Al ejecutar `traceroute`, la primera saltación devuelve `host 192.168.1.1 unreachable`. ¿Qué tipo de mensaje ICMP está enviando el router de salida?"
tipo: mc
opciones_explicitas:
  - "Time Exceeded."
  - "Destination Unreachable."
  - "Echo Request."
  - "Redirect."
respuesta: "Destination Unreachable."
pasos:
  - "Identificar la respuesta 'unreachable' en la primera saltación."
  - "Asociar esto con el código ICMP Type 3 (Destination Unreachable)."
  - "Distinguirlo de 'Time Exceeded' (Type 11) que ocurre en saltos intermedios."
explicacion: "Cuando un router no encuentra una ruta para el destino y no tiene una ruta por defecto (default route), envía un ICMP Type 3 Code 1 (Host Unreachable)."
```

### 7 — Bind a dirección específica
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["netstat", "ss", "escuchar"]
enunciado:
  "Una aplicación web falla al iniciar. `ss -tlnp` muestra que el puerto 80 está escuchando solo en `127.0.0.1:80`. ¿Qué problema de acceso remoto causa esto?"
tipo: completar
respuesta: "localhost"
respuestas_validas:
  - "localhost"
  - "loopback"
  - "127.0.0.1"
  - "dirección local"
pasos:
  - "Observar la dirección `127.0.0.1` en la salida de ss/netstat."
  - "Entender que esto limita la escucha al bucle local."
  - "Concluir que conexiones externas son rechazadas por el firewall o por no estar abiertas."
explicacion: "Escuchar en `127.0.0.1` (loopback) significa que el servicio solo es accesible desde la propia máquina. Para acceso remoto, debe escucharse en `0.0.0.0` o la IP específica de la interfaz externa."
```

### 8 — Latencia alta por colisión
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["switch", "duplex", "colision"]
enunciado:
  "En un switch antiguo, se observa un alto número de `collisions` y `late collisions` en el puerto. El cable es UTP Cat5e correcto. ¿Qué configuración desajustada entre switch y NIC es la causa típica?"
tipo: mc
opciones_explicitas:
  - "Diferencia en la velocidad de enlace (Speed)."
  - "Diferencia en el modo de duplex (Half vs Full)."
  - "Diferencia en la VLAN asignada."
  - "Diferencia en el tipo de cable (Straight vs Crossover)."
respuesta: "Diferencia en el modo de duplex (Half vs Full)."
pasos:
  - "Identificar `late collisions` como síntoma clásico de duplex mismatch."
  - "Explicar que un lado habla Half y otro Full causa colisiones al final del frame."
  - "Descartar velocidad por ser menos común causar *late* collisions específicas."
explicacion: "El duplex mismatch (ej. Switch en Full Duplex y NIC en Half Duplex) provoca que un lado transmita mientras el otro escucha, generando colisiones tardías (late collisions) y pérdida de paquetes."
```

### 9 — DNS Resolver local
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["dns", "resolv.conf", "nsswitch"]
enunciado:
  "Los nombres de dominio no se resuelven, pero las IPs funcionan. `cat /etc/resolv.conf` muestra `nameserver 127.0.0.1`. ¿Qué servicio local debe estar activo para que esto funcione?"
tipo: mc
opciones_explicitas:
  - "DHCP Client."
  - "nscd o systemd-resolved."
  - "Apache Web Server."
  - "SSH Daemon."
respuesta: "nscd o systemd-resolved."
pasos:
  - "Analizar que el nameserver apunta al localhost."
  - "Identificar que se requiere un caché o proxy DNS local."
  - "Nombrar los servicios comunes que manejan esta función en Linux moderno."
explicacion: "Si `/etc/resolv.conf` apunta a 127.0.0.1, el sistema depende de un daemon local (como systemd-resolved o nscd) para realizar las consultas reales al DNS externo. Si este daemon falla, no hay resolución."
```

### 10 — ARP Poisoning sospechoso
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["arp", "seguridad", "man-in-the-middle"]
enunciado:
  "Se ejecuta `arp -a` y se nota que la MAC del gateway (192.168.1.1) cambia aleatoriamente entre dos direcciones diferentes en sucesivos pings. ¿Qué ataque se está sospechando?"
tipo: completar
respuesta: "arp spoofing"
respuestas_validas:
  - "arp spoofing"
  - "arp poisoning"
  - "envenenamiento arp"
  - "suplantacion arp"
pasos:
  - "Observar la inestabilidad de la dirección MAC para una IP fija."
  - "Detectar que el gateway legítimo tiene una MAC única."
  - "Concluir que otro host está enviando ARP replies falsos."
explicacion: "Si la MAC del gateway cambia inesperadamente, es un indicador fuerte de ARP Spoofing/Poisoning, donde un atacante intercepta el tráfico enviando respuestas ARP falsas."
```

### 11 — Puerta de enlace por defecto
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["default-gateway", "ip-route"]
enunciado:
  "La máquina no tiene acceso a internet, pero puede comunicarse con otras de la LAN. `ip route show` no muestra `default via`. ¿Qué comando se debe usar para corregirlo?"
tipo: completar
respuesta: "ip route add default"
respuestas_validas:
  - "ip route add default"
  - "route add default"
  - "ip route add default via"
  - "ip route set default"
pasos:
  - "Verificar la ausencia de la ruta por defecto (0.0.0.0/0)."
  - "Determinar que se necesita agregar una puerta de enlace."
  - "Elegir el comando sintácticamente correcto para añadir la ruta."
explicacion: "Sin una ruta `default` (0.0.0.0/0), el sistema no sabe a dónde enviar paquetes destinados a redes externas, limitando la conectividad a la subred local."
```

### 12 — Conexión TCP State: TIME_WAIT
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["tcp", "state", "ss"]
enunciado:
  "Un servicio web rechaza nuevas conexiones con `Address already in use` en el puerto local, aunque no hay procesos escuchando. `ss -antp` muestra muchas conexiones en estado `TIME_WAIT`. ¿Qué causa esto?"
tipo: mc
opciones_explicitas:
  - "El servidor está bajo ataque DDoS."
  - "El kernel está esperando a que los puertos cerrados se liberen completamente."
  - "Hay un loop de enrutamiento."
  - "El buffer de TCP está lleno."
respuesta: "El kernel está esperando a que los puertos cerrados se liberen completamente."
pasos:
  - "Identificar el estado `TIME_WAIT` en las conexiones activas/cerradas."
  - "Entender que este estado previene la reutilización inmediata del puerto para evitar paquetes rezagados."
  - "Concluir que el agotamiento de puertos efímeros es la causa."
explicacion: "El estado `TIME_WAIT` mantiene el puerto ocupado durante 60 segundos (por defecto) tras el cierre para asegurar que los ACKs finales lleguen y evitar conflictos con nuevas conexiones idénticas."
```

### 13 — DNS Reverse Lookup
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["dns", "ptr", "dig"]
enunciado:
  "Se necesita verificar si la IP `10.0.0.5` tiene un registro PTR configurado correctamente. ¿Qué comando de consulta DNS se debe usar?"
tipo: completar
respuesta: "dig -x"
respuestas_validas:
  - "dig -x"
  - "dig -x 10.0.0.5"
  - "nslookup -type=ptr"
  - "host 10.0.0.5"
pasos:
  - "Determinar que se busca la resolución inversa (IP a nombre)."
  - "Seleccionar la herramienta estándar `dig` con la bandera `-x` para reverse lookup."
  - "Alternativa válida: `nslookup` o `host` con modo inverso."
explicacion: "El comando `dig -x <ip>` es la forma estándar y precisa de consultar un registro PTR (Pointer) para obtener el nombre de dominio asociado a una dirección IP."
```

### 14 — Firewall DROP vs REJECT
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["firewall", "iptables", "netfilter"]
enunciado:
  "Un cliente intenta conectar a un puerto cerrado en el servidor. Con `iptables -j DROP`, el cliente espera indefinidamente. Con `iptables -j REJECT`, el cliente recibe un error inmediato. ¿Qué diferencia técnica explica esto?"
tipo: mc
opciones_explicitas:
  - "DROP envía un ICMP Unreachable, REJECT no envía nada."
  - "DROP silencia el paquete, REJECT envía un TCP RST o ICMP Unreachable."
  - "DROP cierra el puerto, REJECT lo abre temporalmente."
  - "DROP es más rápido que REJECT."
respuesta: "DROP silencia el paquete, REJECT envía un TCP RST o ICMP Unreachable."
pasos:
  - "Analizar el comportamiento de DROP: el paquete se descarta sin respuesta."
  - "Analizar el comportamiento de REJECT: se genera una respuesta de error."
  - "Distinguir la experiencia del cliente (timeout vs error inmediato)."
explicacion: "DROP hace que el cliente espere un timeout (silencio). REJECT envía explícitamente un TCP RST (para TCP) o ICMP Port Unreachable (para UDP/ICMP), informando al cliente que el puerto está cerrado."
```

### 15 — VLAN Tagging 802.1Q
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["vlan", "802.1q", "interface"]
enunciado:
  "Un servidor tiene dos interfaces virtuales `eth0.10` y `eth0.20`. ¿Qué protocolo de encapsulamiento se está utilizando para separar el tráfico?"
tipo: completar
respuesta: "802.1q"
respuestas_validas:
  - "802.1q"
  - "802.1Q"
  - "dot1q"
  - "vlan tagging"
pasos:
  - "Identificar la sintaxis `interface.subinterface` típica de VLANs en Linux."
  - "Asociar esto con el estándar IEEE 802.1Q."
  - "Confirmar que este estándar define el etiquetado de VLAN."
explicacion: "El estándar IEEE 802.1Q es el protocolo utilizado para el etiquetado de VLANs (Virtual LANs) en redes Ethernet, permitiendo múltiples redes lógicas sobre un mismo enlace físico."
```

### 16 — Enrutamiento IP Forwarding
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["ip-forward", "kernel", "nat"]
enunciado:
  "Un servidor actúa como router y gateway NAT. El ping desde la LAN a Internet falla, pero el ping desde Internet a la LAN interna (si se mapea) funciona. `sysctl net.ipv4.ip_forward` devuelve `0`. ¿Qué comando activa el reenvío?"
tipo: completar
respuesta: "sysctl net.ipv4.ip_forward=1"
respuestas_validas:
  - "sysctl net.ipv4.ip_forward=1"
  - "sysctl -w net.ipv4.ip_forward=1"
  - "echo 1 > /proc/sys/net/ipv4/ip_forward"
  - "net.ipv4.ip_forward=1"
pasos:
  - "Verificar que el kernel tiene el reenvío de paquetes desactivado."
  - "Identificar la variable de control `net.ipv4.ip_forward`."
  - "Establecer su valor a `1` para habilitar el reenvío IPv4."
explicacion: "Por defecto, Linux no reenvía paquetes entre interfaces. Para que un host actúe como router, se debe habilitar `net.ipv4.ip_forward=1` en el kernel."
```

### 17 — TCP Keepalive
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["tcp", "keepalive", "timeout"]
enunciado:
  "Una conexión TCP se cierra inesperadamente después de 2 horas de inactividad a través de un firewall. ¿Qué mecanismo, por defecto en Linux, tiene un tiempo de espera demasiado largo (7200s) para detectar esto?"
tipo: mc
opciones_explicitas:
  - "TCP SYN Retransmission."
  - "TCP Keepalive."
  - "ICMP Echo Request."
  - "HTTP Header Ping."
respuesta: "TCP Keepalive."
pasos:
  - "Identificar que la conexión se cae por inactividad."
  - "Saber que el TCP Keepalive por defecto en Linux tarda 2 horas (7200s) en enviar su primer probe."
  - "Concluir que es demasiado lento para detectar caídas de enlace rápidas."
explicacion: "El TCP Keepalive de Linux tiene un tiempo de espera (keepalive_time) de 7200 segundos por defecto. Si un firewall cierra conexiones inactivas antes de ese tiempo (ej. 30 min), la conexión se rompe sin aviso al cliente."
```

### 18 — DNS CNAME Chain
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["dns", "cname", "dig"]
enunciado:
  "Al consultar `dig example.com`, se obtiene un CNAME que apunta a `alias.example.com`, el cual a su vez apunta a `target.example.com`. ¿Qué problema puede causar una cadena CNAME muy larga?"
tipo: completar
respuesta: "timeout"
respuestas_validas:
  - "timeout"
  - "tiempo de espera"
  - "exceso de saltos"
  - "muy profundo"
pasos:
  - "Analizar la resolución de nombres con múltiples saltos de CNAME."
  - "Considerar el impacto en el tiempo de respuesta y la profundidad máxima permitida (generalmente 10-16)."
  - "Identificar que la latencia acumulada puede causar timeouts."
explicacion: "Cadenas largas de CNAME aumentan la latencia de resolución y pueden exceder la profundidad máxima permitida por los servidores DNS o el cliente, causando fallos de resolución o timeouts."
```

### 19 — Netmask /24 vs /32
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["subnet", "mascara", "routing"]
enunciado:
  "Se asigna la IP `10.0.0.5/32` a una interfaz. ¿Qué efecto tiene esto en la conectividad con la red `10.0.0.0/24` adyacente?"
tipo: vf
respuesta: verdadero
pasos:
  - "Interpretar `/32` como una máscara de 255.255.255.255."
  - "Determinar que la IP se considera 'host-only' o de loopback local en muchos contextos."
  - "Verificar si el sistema intentará enviar tráfico a la subred adyacente correctamente."
explicacion: "Una máscara `/32` indica que la IP es única y no pertenece a una subred compartida. El sistema puede no enviar tráfico a la red `10.0.0.0/24` correctamente o tratarla como destino remoto en lugar de local, rompiendo la conectividad directa sin rutas estáticas explícitas."
```

### 20 — Wireshark Capture Filter
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["wireshark", "tcpdump", "filtro"]
enunciado:
  "Se quiere capturar solo tráfico HTTP (puerto 80) y HTTPS (puerto 443) en una interfaz saturada. ¿Qué expresión de filtro de captura (capture filter) se debe usar?"
tipo: completar
respuesta: "port 80 or port 443"
respuestas_validas:
  - "port 80 or port 443"
  - "tcp port 80 or tcp port 443"
  - "port 80 || port 443"
  - "tcp port 80 or tcp port 443"
pasos:
  - "Identificar los puertos de protocolo: 80 (HTTP) y 443 (HTTPS)."
  - "Usar la sintaxis de filtro de captura (BPF) para seleccionar puertos."
  - "Unir las condiciones con el operador `or`."
explicacion: "El filtro de captura `port 80 or port 443` (o especificando tcp) permite reducir el volumen de datos capturados seleccionando solo el tráfico relevante para el diagnóstico web."
```

### 21 — ARP Cache Entry Type
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["arp", "cache", "permanent"]
enunciado:
  "Al ejecutar `arp -a`, una entrada del gateway aparece con tipo `PERM`. ¿Qué implica esto sobre la persistencia de esta entrada?"
tipo: completar
respuesta: "permanent"
respuestas_validas:
  - "permanent"
  - "permanente"
  - "static"
  - "estática"
pasos:
  - "Observar el tipo `PERM` en la tabla ARP."
  - "Interpretar PERM como 'Permanent'."
  - "Concluir que la entrada no expirará ni será sobrescrita automáticamente."
explicacion: "Una entrada ARP con tipo `PERM` (permanent) es estática y no será eliminada por el timeout de expiración ni actualizada por ARP replies posteriores, a menos que se borre manualmente."
```

### 22 — ICMP Rate Limiting
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["icmp", "rate-limit", "iptables"]
enunciado:
  "Un escaneo de red masivo contra un servidor no devuelve respuestas ICMP 'Destination Unreachable' para las IPs no ruteables, pero sí para las primeras. ¿Qué mecanismo del kernel está limitando estas respuestas?"
tipo: completar
respuesta: "rate limit"
respuestas_validas:
  - "rate limit"
  - "límite de tasa"
  - "icmp rate limit"
  - "net.ipv4.icmp_ratelimit"
pasos:
  - "Notar la ausencia selectiva de respuestas ICMP."
  - "Recordar que Linux limita la tasa de generación de mensajes ICMP por defecto."
  - "Identificar que esto afecta la visibilidad del escaneo."
explicacion: "El kernel Linux aplica un `rate limit` (límite de tasa) a los mensajes ICMP para prevenir ataques de inundación (flood). Si se generan más mensajes de los permitidos, se silencian."
```

### 23 — DNS Recursion vs Iteration
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["dns", "recursion", "iteracion"]
enunciado:
  "Un cliente envía una consulta a un servidor DNS con el bit RD (Recursion Desired) en 1. El servidor responde con un error `REFUSED`. ¿Qué indica esto sobre la configuración del servidor?"
tipo: mc
opciones_explicitas:
  - "El servidor no tiene acceso a internet."
  - "El servidor no está configurado para autorizar recursión para ese cliente."
  - "El dominio no existe en la zona global."
  - "El puerto 53 UDP está bloqueado."
respuesta: "El servidor no está configurado para autorizar recursión para ese cliente."
pasos:
  - "Analizar el bit RD (Recursion Desired) en la consulta."
  - "Interpretar `REFUSED` como rechazo explícito de la operación solicitada."
  - "Concluir que el ACL del servidor DNS bloquea la recursión para la IP origen."
explicacion: "Un servidor DNS puede permitir solo recursión para clientes locales (trusted). Si un cliente externo solicita recursión (RD=1) y no está en la lista blanca, el servidor responde con REFUSED."
```

### 24 — TCP Window Scaling
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["tcp", "window", "throughput"]
enunciado:
  "En una conexión de alta velocidad (10Gbps) con alta latencia (WAN), el throughput es muy bajo. `ss -ti` muestra `wscale:0,0`. ¿Qué opción TCP está deshabilitada y causando esto?"
tipo: completar
respuesta: "window scaling"
respuestas_validas:
  - "window scaling"
  - "escalado de ventana"
  - "tcp window scaling"
  - "wscale"
pasos:
  - "Observar `wscale:0,0` en la información de TCP."
  - "Identificar que esto significa que el TCP Window Scaling no se negoció."
  - "Concluir que la ventana de recepción está limitada a 64KB, estrangulando el throughput."
explicacion: "Sin TCP Window Scaling (RFC 1323), la ventana de recepción TCP está limitada a 65535 bytes. En enlaces de alta velocidad y latencia (High-Bandwidth Delay Product), esto causa un estrangulamiento severo del rendimiento."
```

### 25 — NAT Masquerade Source
```yaml
metadata:
  materia: "redes"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["nat", "iptables", "masquerade"]
enunciado:
  "Se configura `iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE`. ¿Qué dirección IP utiliza el kernel como origen para los paquetes salientes si la IP de eth0 es dinámica (DHCP)?"
tipo: mc
opciones_explicitas:
  - "Siempre la IP de la primera interfaz."
  - "La IP actual asignada a eth0 en el momento del envío."
  - "La IP del gateway por defecto."
  - "Una IP aleatoria del rango privado."
respuesta: "La IP actual asignada a eth0 en el momento del envío."
pasos:
  - "Analizar el objetivo `MASQUERADE`."
  - "Distinguirlo de `SNAT` que requiere una IP fija."
  - "Confirmar que Masquerade resuelve la IP del interfaz de salida en tiempo real."
explicacion: "El objetivo `MASQUERADE` es dinámico. Evalúa la dirección IP del interfaz de salida (`eth0`) en el momento exacto en que se envía cada paquete, lo que lo hace ideal para conexiones con IPs dinámicas (DHCP/PPPoE)."
```