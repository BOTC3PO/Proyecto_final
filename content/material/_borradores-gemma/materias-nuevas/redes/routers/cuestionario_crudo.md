### 1 — Comando de visualización de tabla de enrutamiento
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["show", "ip", "route"]
enunciado:
  Uno de:
    - "Para visualizar la tabla de enrutamiento en un router Cisco IOS, ¿qué comando global se utiliza?"
    - "En la CLI de un dispositivo Cisco, necesitas ver las rutas instaladas en el router. Escribe el comando correcto."
respuesta: "show ip route"
tipo: "completar"
respuestas_validas:
  - "show ip route"
  - "Show ip route"
  - "SHOW IP ROUTE"
pasos:
  - "Acceder al modo de privilegio del router."
  - "Escribir el comando para listar la tabla de enrutamiento IPv4."
explicacion: "El comando 'show ip route' es el estándar en Cisco IOS para mostrar la tabla de enrutamiento, incluyendo rutas directamente conectadas, estáticas y aprendidas por protocolos de enrutamiento."
```

### 2 — Verdad/Falsa: Default Gateway
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["default-gateway", "ip-routing"]
enunciado:
  "Un router actúa como puerta de enlace predeterminada (default gateway) para una red local si tiene una interfaz configurada con una ruta por defecto hacia el exterior."
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Analizar la función de un router en la capa 3."
  - "Verificar si la configuración de una ruta por defecto (0.0.0.0/0) permite el tráfico hacia redes externas."
explicacion: "Un router utiliza una ruta por defecto (default route) para enviar paquetes cuyo destino no coincide con ninguna otra entrada en su tabla de enrutamiento, actuando efectivamente como la puerta de enlace hacia otras redes o Internet."
```

### 3 — Configuración de IP en interfaz
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["interface", "ip-address", "no-shutdown"]
enunciado:
  "Estás configurando la interfaz GigabitEthernet0/0 con la IP 192.168.1.1/24. Después de asignar la IP, la interfaz aparece en estado 'administratively down'. ¿Qué comando adicional es obligatorio para activarla?"
respuesta: "no shutdown"
tipo: "completar"
respuestas_validas:
  - "no shutdown"
  - "no shut"
  - "No shutdown"
  - "NO SHUTDOWN"
pasos:
  - "Entrar en el modo de configuración de la interfaz."
  - "Asignar la dirección IP y máscara."
  - "Habilitar la interfaz explícitamente."
explicacion: "En Cisco IOS, las interfaces de capa 3 están desactivadas por defecto (administratively down). El comando 'no shutdown' es necesario para cambiar el estado operativo a 'up'."
```

### 4 — Máscara de subred por defecto /24
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["subnet-mask", "cidr"]
enunciado:
  "¿Cuál es la representación en notación decimal de la máscara de subred correspondiente a la notación CIDR /24?"
opciones_explicitas:
  - "255.0.0.0"
  - "255.255.0.0"
  - "255.255.255.0"
  - "255.255.255.255"
respuesta: "255.255.255.0"
tipo: "mc"
pasos:
  - "Identificar que /24 significa 24 bits de red."
  - "Convertir los 24 bits de red a octetos."
explicacion: "Una máscara /24 tiene los primeros 24 bits en 1 y los últimos 8 en 0. En decimal, esto es 255.255.255.0."
```

### 5 — Ruta estática por defecto
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["static-route", "default-route"]
enunciado:
  "Para configurar una ruta estática por defecto en un router Cisco que apunta a la puerta de enlace del proveedor de internet en 203.0.113.1, ¿cuál es la sintaxis correcta del comando?"
respuesta: "ip route 0.0.0.0 0.0.0.0 203.0.113.1"
tipo: "completar"
respuestas_validas:
  - "ip route 0.0.0.0 0.0.0.0 203.0.113.1"
  - "ip route 0.0.0.0/0 203.0.113.1"
  - "ip route 0.0.0.0 0.0.0.0 next-hop 203.0.113.1"
pasos:
  - "Usar el comando 'ip route'."
  - "Especificar destino 0.0.0.0 y máscara 0.0.0.0."
  - "Especificar el siguiente salto (next-hop)."
explicacion: "La ruta por defecto se representa como 0.0.0.0 con máscara 0.0.0.0. El comando completo indica al router enviar todo el tráfico desconocido hacia el siguiente salto especificado."
```

### 6 — Verdad/Falsa: NAT
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["nat", "private-ip", "public-ip"]
enunciado:
  "La función principal de NAT (Network Address Translation) en un router de borde es traducir direcciones IP privadas de una red local a una dirección IP pública para permitir el acceso a Internet."
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Definir NAT."
  - "Verificar su uso común en redes domésticas o corporativas."
explicacion: "NAT permite que múltiples dispositivos con direcciones IP privadas (no enruteables en Internet) compartan una o pocas direcciones IP públicas para comunicarse con redes externas."
```

### 7 — Comando para ping
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["ping", "connectivity", "debugging"]
enunciado:
  "Desde el modo de ejecución de comandos (user EXEC mode) de un router Cisco, ¿qué comando se utiliza para probar la conectividad hacia el host 8.8.8.8?"
respuesta: "ping 8.8.8.8"
tipo: "completar"
respuestas_validas:
  - "ping 8.8.8.8"
  - "Ping 8.8.8.8"
  - "PING 8.8.8.8"
pasos:
  - "Estar en modo usuario."
  - "Ejecutar la utilidad de diagnóstico ICMP."
explicacion: "El comando 'ping' envía paquetes ICMP Echo Request al destino especificado para verificar la conectividad de capa 3 y la latencia."
```

### 8 — Tabla ARP
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["arp", "mac-address", "resolution"]
enunciado:
  "¿Qué comando se utiliza en un router Cisco para ver la tabla de resolución de direcciones (MAC a IP) en su caché ARP?"
opciones_explicitas:
  - "show ip arp"
  - "show mac-address-table"
  - "display arp"
  - "show ipv6 neighbors"
respuesta: "show ip arp"
tipo: "mc"
pasos:
  - "Identificar la necesidad de ver la correspondencia IP-MAC."
  - "Seleccionar el comando de visualización específico para ARP IPv4."
explicacion: "'Show ip arp' muestra la tabla ARP, que contiene las traducciones dinámicas de direcciones IP a direcciones MAC de los vecinos directamente conectados."
```

### 9 — Verdad/Falsa: Enrutamiento Dinámico
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["dynamic-routing", "static", "protocols"]
enunciado:
  "El enrutamiento estático requiere que el administrador configure manualmente cada ruta, mientras que el enrutamiento dinámico permite que los routers intercambien información automáticamente para aprender rutas."
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Comparar la definición de enrutamiento estático."
  - "Comparar la definición de enrutamiento dinámico."
explicacion: "El enrutamiento estático es manual y no se adapta a cambios en la topología sin intervención humana. El dinámico usa protocolos (como OSPF, EIGRP) para descubrir y actualizar rutas automáticamente."
```

### 10 — Modo de configuración global
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["cli", "modes", "configuration"]
enunciado:
  "Estás en el modo de ejecución de privilegios (enable mode) de un router Cisco. ¿Qué comando debes escribir para entrar al modo de configuración global?"
respuesta: "configure terminal"
tipo: "completar"
respuestas_validas:
  - "configure terminal"
  - "conf t"
  - "Configure terminal"
  - "CONF T"
pasos:
  - "Identificar el modo actual (Privileged EXEC)."
  - "Seleccionar el comando para entrar en el modo de configuración global."
explicacion: "El comando 'configure terminal' (o 'conf t') cambia la CLI al modo de configuración global, donde se pueden aplicar cambios a la configuración del sistema."
```

### 11 — Protocolo de enrutamiento interior
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["ospf", "routing-protocols", "interior"]
enunciado:
  "¿Cuál de los siguientes es un protocolo de enrutamiento dinámico de tipo Interior Gateway Protocol (IGP) de estado de enlace?"
opciones_explicitas:
  - "OSPF"
  - "BGP"
  - "RIP"
  - "ATM"
respuesta: "OSPF"
tipo: "mc"
pasos:
  - "Identificar protocolos IGP."
  - "Filtrar por tipo 'estado de enlace' (Link-State)."
explicacion: "OSPF (Open Shortest Path First) es un protocolo IGP de estado de enlace. BGP es EGP, RIP es de vector de distancia, y ATM es un tipo de red, no un protocolo de enrutamiento."
```

### 12 — Verdad/Falsa: MTU
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["mtu", "fragmentation", "ethernet"]
enunciado:
  "El valor estándar de MTU (Maximum Transmission Unit) para una interfaz Ethernet convencional es 1500 bytes."
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Recordar la especificación IEEE 802.3 para Ethernet."
  - "Verificar el tamaño máximo del cuadro de datos."
explicacion: "El tamaño estándar de la trama Ethernet II, excluyendo la cabecera y el FCS, es de 1500 bytes. Esto limita el tamaño máximo del paquete IP que puede viajar sin fragmentación."
```

### 13 — Configuración de nombre de host
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["hostname", "configuration"]
enunciado:
  "Para cambiar el nombre del router de 'Router1' a 'CoreRouter01' en modo de configuración global, ¿cuál es el comando correcto?"
respuesta: "hostname CoreRouter01"
tipo: "completar"
respuestas_validas:
  - "hostname CoreRouter01"
  - "Hostname CoreRouter01"
  - "HOSTNAME COREROUTER01"
pasos:
  - "Entrar en modo de configuración global."
  - "Usar el comando 'hostname' seguido del nuevo nombre."
explicacion: "El comando 'hostname' establece el nombre del dispositivo, que aparece en el prompt de la CLI y se usa en certificados o logs para identificar el equipo."
```

### 14 — Verdad/Falsa: ACL
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["acl", "access-list", "security"]
enunciado:
  "Una Access Control List (ACL) estándar solo puede filtrar tráfico basándose en la dirección IP de origen."
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Diferenciar entre ACLs estándar y extendidas."
  - "Verificar los criterios de filtrado de las ACLs estándar (números 1-99)."
explicacion: "Las ACLs estándar (números 1-99) solo consideran la dirección IP de origen. Las ACLs extendidas (números 100-199) pueden filtrar por origen, destino, puerto y protocolo."
```

### 15 — Comando de guardado de configuración
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["startup-config", "running-config", "save"]
enunciado:
  "Has realizado cambios en la configuración en ejecución (running-config) de un router Cisco. ¿Qué comando guarda esta configuración en la memoria no volátil (startup-config) para que sobreviva a un reinicio?"
respuesta: "copy running-config startup-config"
tipo: "completar"
respuestas_validas:
  - "copy running-config startup-config"
  - "copy run start"
  - "Copy running-config startup-config"
  - "COPY RUNNING-CONFIG STARTUP-CONFIG"
pasos:
  - "Identificar la necesidad de persistir la configuración."
  - "Seleccionar el comando de copia de memoria RAM a NVRAM."
explicacion: "El comando 'copy running-config startup-config' (o 'copy run start') copia la configuración activa en la RAM al archivo de inicio en la NVRAM, asegurando que los cambios persistan tras el reinicio."
```

### 16 — Verdad/Falsa: DHCP
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["dhcp", "ip-assignment", "server"]
enunciado:
  "Un router puede funcionar como un servidor DHCP para asignar direcciones IP automáticamente a los clientes de la red local."
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Analizar las capacidades de un router moderno."
  - "Verificar si la función de servidor DHCP es nativa o requiere dispositivo externo."
explicacion: "Muchos routers domésticos y empresariales incluyen un servidor DHCP integrado que puede asignar IPs, máscara, puerta de enlace y DNS a los clientes de la red."
```

### 17 — Interfaz de loopback
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["loopback", "virtual-interface", "stability"]
enunciado:
  "¿Cuál es la principal ventaja de usar una interfaz Loopback (ej. Loopback0) en un router para propósitos de gestión o ID de router en OSPF?"
opciones_explicitas:
  - "Es una interfaz virtual que siempre está en estado 'up' si existe, independientemente del estado físico de las otras interfaces."
  - "Aumenta el ancho de banda total del router."
  - "Permite conectar cables de fibra óptica."
  - "Evita el bucle de enrutamiento."
respuesta: "Es una interfaz virtual que siempre está en estado 'up' si existe, independientemente del estado físico de las otras interfaces."
tipo: "mc"
pasos:
  - "Definir qué es una interfaz Loopback."
  - "Evaluar su estado lógico vs físico."
explicacion: "Una interfaz Loopback es lógica y no depende de hardware físico. Siempre está activa (up) mientras esté configurada, lo que la hace ideal para ID de router estables en protocolos de enrutamiento."
```

### 18 — Verdad/Falsa: Switching vs Routing
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["layer-2", "layer-3", "difference"]
enunciado:
  "Un router opera en la Capa 2 (Enlace de Datos) de la OSI y conmuta tramas basándose en direcciones MAC."
respuesta: "falso"
tipo: "vf"
pasos:
  - "Identificar la capa OSI donde opera el router."
  - "Identificar el protocolo de direccionamiento usado."
explicacion: "Los routers operan en la Capa 3 (Red) y enrutan paquetes basándose en direcciones IP. Los switches (capa 2) conmutan tramas basándose en MAC."
```

### 19 — Comando de visualización de configuración actual
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["show", "running-config", "verification"]
enunciado:
  "Para ver la configuración actual que está aplicándose al router en la memoria RAM, ¿qué comando se usa?"
respuesta: "show running-config"
tipo: "completar"
respuestas_validas:
  - "show running-config"
  - "show run"
  - "Show running-config"
  - "SHOW RUNNING-CONFIG"
pasos:
  - "Determinar qué memoria contiene la configuración activa."
  - "Seleccionar el comando de visualización correspondiente."
explicacion: "'Show running-config' (o 'show run') muestra la configuración activa en la RAM. Es la configuración que el router está utilizando actualmente."
```

### 20 — Verdad/Falsa: DNS en Router
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["dns", "name-resolution", "configuration"]
enunciado:
  "Para que un router pueda resolver nombres de dominio (ej. ping google.com) desde su CLI, debe tener configurado un servidor DNS y la función de resolución de nombres habilitada."
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Analizar cómo el router resuelve nombres."
  - "Verificar si es una función por defecto o requiere configuración."
explicacion: "Por defecto, los routers no resuelven nombres. Se debe configurar 'ip name-server' y habilitar 'ip domain-lookup' para permitir la resolución de nombres desde la CLI."
```

### 21 — Puerto de acceso SSH
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["ssh", "security", "port"]
enunciado:
  "¿Cuál es el puerto TCP estándar por defecto que utiliza el protocolo SSH para conexiones remotas seguras a un router?"
opciones_explicitas:
  - "22"
  - "80"
  - "443"
  - "23"
respuesta: "22"
tipo: "mc"
pasos:
  - "Identificar el protocolo de acceso seguro."
  - "Recordar el puerto asignado por IANA para SSH."
explicacion: "SSH utiliza el puerto TCP 22. Telnet usa el puerto 23 (no seguro), HTTP 80 y HTTPS 443."
```

### 22 — Verdad/Falsa: NAT Overload
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["nat", "pat", "overload"]
enunciado:
  "La técnica NAT Overload (también conocida como PAT - Port Address Translation) permite que múltiples direcciones IP privadas compartan una única dirección IP pública utilizando diferentes números de puerto."
respuesta: "verdadero"
tipo: "vf"
pasos:
  - "Definir PAT/NAT Overload."
  - "Verificar el mecanismo de distinción de sesiones."
explicacion: "PAT mapea múltiples IPs privadas a una IP pública distinguiendo las sesiones por el número de puerto de origen, permitiendo el ahorro de direcciones IP públicas."
```

### 23 — Comando para verificar conectividad a puerta de enlace
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["ping", "next-hop", "troubleshooting"]
enunciado:
  "Un usuario reporta que no puede acceder a Internet. El router tiene IP y máscara correctas en su interfaz. Para verificar si el router puede comunicarse con su siguiente salto (next-hop), ¿qué comando se ejecuta?"
respuesta: "ping <next-hop-ip>"
tipo: "completar"
respuestas_validas:
  - "ping 192.168.1.1"
  - "ping next-hop"
  - "Ping <next-hop-ip>"
  - "PING 192.168.1.1"
pasos:
  - "Identificar la necesidad de probar la conectividad local."
  - "Seleccionar el comando de diagnóstico."
explicacion: "El comando 'ping' seguido de la IP del siguiente salto verifica si la capa 2 y la ruta inmediata están funcionando. Si falla, el problema es local a la red."
```

### 24 — Verdad/Falsa: Default Configuration
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["default", "initial", "security"]
enunciado:
  "Por defecto, la configuración de fábrica de un router Cisco tiene habilitado el servicio de SSH y deshabilitado el acceso Telnet."
respuesta: "falso"
tipo: "vf"
pasos:
  - "Analizar la seguridad por defecto de Cisco IOS."
  - "Verificar qué servicios están activos en un dispositivo recién configurado."
explicacion: "Por defecto, los routers Cisco NO tienen SSH habilitado (requiere configuración manual de clave y dominio) y Telnet suele estar disponible pero sin autenticación fuerte configurada, lo que lo hace inseguro."
```

### 25 — Comando de visualización de interfaces
```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["show", "interfaces", "status"]
enunciado:
  "¿Qué comando muestra el estado físico (up/down) y lógico de todas las interfaces del router, incluyendo contadores de errores?"
respuesta: "show interfaces"
tipo: "completar"
respuestas_validas:
  - "show interfaces"
  - "show interface"
  - "Show interfaces"
  - "SHOW INTERFACES"
pasos:
  - "Identificar la necesidad de diagnosticar interfaces."
  - "Seleccionar el comando de visualización de estado de interfaces."
explicacion: "'Show interfaces' proporciona un resumen detallado de todas las interfaces, incluyendo estado, dirección MAC, MTU, errores de entrada/salida y colisiones."
```