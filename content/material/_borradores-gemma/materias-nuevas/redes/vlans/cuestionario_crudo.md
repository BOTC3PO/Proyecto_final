### 1 — Asignación de VLAN nativa en trunk
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["trunk", "native-vlan", "switchport"]
respuesta: "switchport trunk native vlan 99"
tipo: "completar"
enunciado: "Para asegurar la segmentación en un enlace troncal y evitar ataques de VLAN hopping, el administrador cambia la VLAN nativa predeterminada (VLAN 1) a la VLAN 99. Escribe el comando completo en modo de configuración de interfaz para asignar esta VLAN nativa."
pasos:
  - "Entrar en modo de configuración de interfaz: interface GigabitEthernet0/1"
  - "Configurar el enlace como troncal: switchport mode trunk"
  - "Asignar la VLAN nativa segura: switchport trunk native vlan 99"
explicacion: "La VLAN nativa es la que no lleva etiqueta 802.1Q. Cambiarla de la VLAN 1 por defecto a otra VLAN no utilizada (como la 99) es una práctica de seguridad estándar para mitigar riesgos."
```

### 2 — Propagación de VLANs con VTP
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["vtp", "domain", "server"]
respuesta: "vtp mode server"
tipo: "completar"
enunciado: "En una red corporativa grande, se utiliza el protocolo VTP (VLAN Trunking Protocol) para sincronizar la base de datos de VLANs entre switches. Si un switch debe actuar como la fuente principal de información y permitir la creación/modificación de VLANs que se propagarán al dominio, ¿qué modo debe configurarse?"
pasos:
  - "Configurar el dominio VTP: vtp domain CORP"
  - "Establecer la contraseña de seguridad: vtp password secret123"
  - "Definir el rol del switch: vtp mode server"
explicacion: "El modo 'server' permite crear, modificar y eliminar VLANs, y estas actualizaciones se propagan a otros switches en el mismo dominio VTP que estén en modo server o client."
```

### 3 — Verificación de puertos accesores
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["show", "interfaces", "switchport"]
respuesta: "verdadero"
tipo: "vf"
enunciado: "El comando `show interfaces switchport` en un switch Cisco muestra el estado operativo de la VLAN asignada a un puerto de acceso en la línea 'Access Mode VLAN'."
pasos:
  - "Ejecutar el comando en privilegiado: enable"
  - "Ejecutar la visualización: show interfaces GigabitEthernet0/5 switchport"
  - "Buscar la línea: Access Mode VLAN: 10"
explicacion: "El comando `show interfaces switchport` proporciona detalles detallados sobre la configuración lógica del puerto, incluyendo la VLAN de acceso asignada, independientemente de si el puerto está físicamente activo o no."
```

### 4 — Configuración de EtherChannel con VLANs
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["etherchannel", "lacp", "trunk"]
respuesta: "channel-group 1 mode active"
tipo: "completar"
enunciado: "Se desea crear un enlace agregado (EtherChannel) entre dos switches utilizando el protocolo LACP para aumentar el ancho de banda y redundancia. El enlace debe transportar múltiples VLANs. Escribe el comando de configuración en la interfaz física para iniciar la negociación LACP activamente."
pasos:
  - "Entrar en modo de interfaz: interface range GigabitEthernet0/1-2"
  - "Configurar el enlace como troncal: switchport mode trunk"
  - "Activar LACP: channel-group 1 mode active"
explicacion: "El modo 'active' de LACP inicia activamente la negociación del enlace agregado. Si el par responde con 'active' o 'passive', se forma el canal. Esto permite que el EtherChannel funcione como un troncal único."
```

### 5 — Spanning Tree y VLANs (PVST+)
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["stp", "pvst", "root"]
respuesta: "spanning-tree vlan 10 root primary"
tipo: "completar"
enunciado: "En una red con PVST+ (Per-VLAN Spanning Tree Plus), se necesita asegurar que el Switch A sea siempre el nodo raíz para la VLAN 10 para optimizar el tráfico. Escribe el comando global para forzar este rol."
pasos:
  - "Entrar en modo global: enable"
  - "Ejecutar el comando de configuración: spanning-tree vlan 10 root primary"
explicacion: "El comando `spanning-tree vlan <id> root primary` ajusta automáticamente el costo de los puertos hacia el puente raíz para que el switch actual se convierta en el raíz para esa VLAN específica, siempre que su prioridad sea suficiente."
```

### 6 — Inter-VLAN Routing con Router-on-a-Stick
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["router-on-stick", "subinterface", "encapsulation"]
respuesta: "encapsulation dot1q 10"
tipo: "completar"
enunciado: "Para permitir el enrutamiento entre VLANs utilizando un router conectado a un switch troncal (Router-on-a-Stick), se crea una subinterfaz lógica en la interfaz física del router. Escribe el comando de encapsulación IEEE 802.1Q para la subinterfaz GigabitEthernet0/0.1 correspondiente a la VLAN 10."
pasos:
  - "Crear la subinterfaz: interface GigabitEthernet0/0.1"
  - "Asignar encapsulación 802.1Q: encapsulation dot1q 10"
  - "Asignar IP: ip address 192.168.10.1 255.255.255.0"
explicacion: "La encapsulación `dot1q` indica al router que las tramas en esta subinterfaz deben tener una etiqueta VLAN 10. Esto es esencial para que el router sepa a qué VLAN pertenece el tráfico entrante."
```

### 7 — DTP y modo Dynamic Auto
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["dtp", "dynamic", "negotiation"]
respuesta: "switchport nonegotiate"
tipo: "completar"
enunciado: "Para desactivar el protocolo DTP (Dynamic Trunking Protocol) y evitar la negociación automática de troncal, asegurando que el enlace sea un troncal estático sin enviar marcos de negociación, ¿qué comando se añade tras configurar el modo trunk?"
pasos:
  - "Configurar modo trunk: switchport mode trunk"
  - "Desactivar negociación: switchport nonegotiate"
explicacion: "El comando `switchport nonegotiate` impide que el switch envíe marcos DTP. Esto es recomendable por seguridad para evitar que un atacante pueda negociar la formación de un troncal."
```

### 8 — VLANs de Datos y de Gestión
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["management", "svi", "ip address"]
respuesta: "ip default-gateway 192.168.99.1"
tipo: "completar"
enunciado: "Se ha creado una VLAN de gestión (VLAN 99) y se ha configurado una SVI (Switch Virtual Interface) con IP 192.168.99.10/24. El switch necesita enviar tráfico de gestión (SSH/SNMP) fuera de su VLAN local. Escribe el comando global para definir la puerta de enlace predeterminada."
pasos:
  - "Crear la SVI: interface Vlan99"
  - "Asignar IP: ip address 192.168.99.10 255.255.255.0"
  - "Definir puerta de enlace: ip default-gateway 192.168.99.1"
explicacion: "En switches de Capa 2, el comando `ip default-gateway` especifica la IP del router para el tráfico de gestión fuera de la red local. No es una ruta IP estática normal, sino una directiva de host."
```

### 9 — VLANs Privadas (Private VLANs)
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["private-vlan", "isolated", "promiscuous"]
respuesta: "private-vlan isolated"
tipo: "completar"
enunciado: "En un hotel, cada habitación tiene su propio puerto de switch. Se desea que los puertos de las habitaciones (VLAN primaria) no puedan comunicarse entre sí, pero sí con el router (puerto promiscuo). Escribe el comando para configurar un puerto como 'isolated' dentro de una VLAN privada."
pasos:
  - "Configurar el puerto: interface GigabitEthernet0/10"
  - "Definir tipo de puerto: switchport private-vlan host"
  - "Asociar VLAN aislada: switchport private-vlan association 200,201"
  - "Especificar el tipo: switchport private-vlan isolated"
explicacion: "El tipo 'isolated' permite al puerto comunicarse solo con el puerto 'promiscuous' (generalmente el router o gateway). Los puertos 'community' sí pueden comunicarse entre sí en su grupo."
```

### 10 — Consultar VLANs activas en un Trunk
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["show", "trunk", "allowed"]
respuesta: "show interfaces trunk"
tipo: "completar"
enunciado: "Un administrador necesita verificar rápidamente qué VLANs están permitidas y activas en un enlace troncal específico. Escribe el comando de visualización que muestra la lista de VLANs permitidas y las que se están transmitiendo efectivamente."
pasos:
  - "Ejecutar el comando: show interfaces GigabitEthernet0/1 trunk"
  - "Analizar la columna 'Vlans allowed and active in management domain'"
explicacion: "Este comando muestra el resumen de todos los troncales, incluyendo las VLANs permitidas, las VLANs activas y la VLAN nativa, permitiendo detectar discrepancias entre la configuración y el estado real."
```

### 11 — Eliminación de VLAN de la base de datos
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["vlan database", "delete"]
respuesta: "no vlan 100"
tipo: "completar"
enunciado: "Se necesita eliminar la VLAN 100 de la base de datos del switch para desasignarla de todos los puertos y eliminar su configuración. Escribe el comando en modo de configuración global para borrar esta VLAN."
pasos:
  - "Entrar en modo global: enable"
  - "Borrar la VLAN: no vlan 100"
explicacion: "El comando `no vlan <id>` elimina la VLAN de la base de datos del switch. Los puertos que tenían esta VLAN como acceso se volverán inactivos hasta que se les asigne una VLAN válida."
```

### 12 — VLANs Extendidas y VTP
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["vtp", "extended", "range"]
respuesta: "vtp version 3"
tipo: "completar"
enunciado: "Las VLANs con ID superior a 1005 (VLANs extendidas) no son soportadas por VTP versión 1 y 2. Para propagar VLANs extendidas en un dominio VTP, ¿qué versión de VTP es necesaria?"
pasos:
  - "Configurar dominio: vtp domain CORP"
  - "Cambiar versión: vtp version 3"
explicacion: "VTP versión 3 soporta VLANs extendidas (1006-4094) y características avanzadas como Backbone Fast y UplinkFast, además de una base de datos más robusta."
```

### 13 — Asignación dinámica de VLANs con VMPS
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["vmps", "dynamic", "policy"]
respuesta: "vmps"
tipo: "completar"
enunciado: "Para asignar VLANs a los puertos de switch dinámicamente basándose en la dirección MAC del dispositivo conectado, se utiliza un servidor VMPS (VLAN Membership Policy Server). Escribe el comando de configuración en el switch cliente para especificar la IP del servidor VMPS."
pasos:
  - "Configurar el servidor: vmps server <ip-address>"
  - "Configurar el archivo de políticas: vmps config file tftp://server/vmps.cfg"
explicacion: "El comando `vmps server` apunta al switch a un servidor TFTP/FTP que contiene la tabla de mapeo MAC-VLAN. El switch consulta al servidor cada vez que un dispositivo se conecta."
```

### 14 — VLANs Voice y Datos
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["voice", "cisco-iphone", "auxiliary"]
respuesta: "switchport voice vlan 20"
tipo: "completar"
enunciado: "Un puerto de switch conecta a un PC y a un teléfono IP Cisco. El PC usa la VLAN 10 (datos) y el teléfono usa la VLAN 20 (voz). Escribe el comando para asignar la VLAN de voz al puerto, permitiendo que el teléfono etiquete sus tramas con la VLAN 20 mientras el PC envía sin etiqueta."
pasos:
  - "Configurar VLAN de datos: switchport access vlan 10"
  - "Configurar VLAN de voz: switchport voice vlan 20"
explicacion: "El comando `switchport voice vlan` permite al puerto de acceso transportar tráfico etiquetado (voz) y no etiquetado (datos) simultáneamente, optimizando el uso de puertos."
```

### 15 — QoS y CoS en VLANs
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["qos", "cos", "trust"]
respuesta: "switchport voice vlan 20"
tipo: "completar"
enunciado: "Para garantizar la calidad de servicio (QoS) del tráfico de voz IP, el switch debe confiar en el campo CoS (Class of Service) de la etiqueta 802.1Q enviado por el teléfono. Escribe el comando global para activar la confianza en el puerto conectado al teléfono."
pasos:
  - "Entrar en modo de interfaz: interface GigabitEthernet0/1"
  - "Activar confianza en el puerto: mls qos trust cos"
explicacion: "El comando `mls qos trust cos` (en switches Catalyst) o `trust cos` indica al switch que utilice el valor CoS de la trama entrante para determinar la cola de prioridad, en lugar de basarse en la IP o puerto."
```

### 16 — VLANs y ACLs (Access Control Lists)
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["acl", "vlan", "filter"]
respuesta: "ip access-list standard 10"
tipo: "completar"
enunciado: "Se desea filtrar el tráfico entre VLANs usando una ACL estándar aplicada a una interfaz virtual (SVI). Escribe el comando para crear una ACL estándar numerada con el ID 10."
pasos:
  - "Crear la ACL: ip access-list standard 10"
  - "Añadir reglas: permit 192.168.1.0 0.0.0.255"
explicacion: "Las ACLs estándar se identifican por números 1-99 o 1300-1999. Se aplican a interfaces físicas o SVIs para filtrar tráfico basado en la dirección IP origen."
```

### 17 — VLANs y DHCP Snooping
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["dhcp-snooping", "trust", "untrust"]
respuesta: "ip dhcp snooping trust"
tipo: "completar"
enunciado: "Para proteger la red contra ataques DHCP Rogue, se activa DHCP Snooping. La interfaz conectada al servidor DHCP legítimo debe ser marcada como de confianza. Escribe el comando en modo de interfaz para configurar el puerto como 'trust'."
pasos:
  - "Activar globalmente: ip dhcp snooping"
  - "Activar por VLAN: ip dhcp snooping vlan 10,20"
  - "Configurar interfaz: interface GigabitEthernet0/1"
  - "Marcar como trust: ip dhcp snooping trust"
explicacion: "El comando `ip dhcp snooping trust` permite que la interfaz reciba respuestas DHCP (DHCPOFFER, DHCPACK). Los puertos no marcados como trust descartarán estas respuestas, protegiendo contra servidores falsos."
```

### 18 — VLANs y ARP Inspection
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["arp-inspection", "dynamic-binding", "database"]
respuesta: "ip arp inspection vlan 10"
tipo: "completar"
enunciado: "Para prevenir ataques de envenenamiento ARP (ARP Spoofing), se activa Dynamic ARP Inspection (DAI). Escribe el comando global para habilitar la inspección ARP para la VLAN 10."
pasos:
  - "Activar DAI globalmente: ip arp inspection vlan 10"
  - "Configurar puertos trust: interface GigabitEthernet0/1"
  - "Marcar trust: ip arp inspection trust"
explicacion: "DAI valida las tramas ARP basándose en la base de datos DHCP Snooping Binding. Las tramas ARP no válidas son descartadas, protegiendo la integridad de la tabla ARP del switch."
```

### 19 — VLANs y Multicast (IGMP Snooping)
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["igmp-snooping", "multicast", "optimization"]
respuesta: "ip igmp snooping vlan 10"
tipo: "completar"
enunciado: "Para optimizar el tráfico de multicast en la VLAN 10 y evitar que se difunda a todos los puertos innecesariamente, se activa IGMP Snooping. Escribe el comando global para habilitar esta función para la VLAN 10."
pasos:
  - "Activar globalmente: ip igmp snooping"
  - "Activar por VLAN: ip igmp snooping vlan 10"
explicacion: "IGMP Snooping permite al switch escuchar los mensajes IGMP de los hosts y construir una tabla de reenvío de multicast basada en las solicitudes de suscripción, reduciendo el tráfico de difusión."
```

### 20 — VLANs y EtherType
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["etherframe", "802.1q", "tag"]
respuesta: "verdadero"
tipo: "vf"
enunciado: "Una trama Ethernet con etiqueta 802.1Q tiene un EtherType de 0x8100 insertado antes del campo de VLAN ID."
pasos:
  - "Analizar la estructura de trama IEEE 802.1Q"
  - "Verificar el campo EtherType: 0x8100"
explicacion: "El EtherType 0x8100 indica específicamente que la trama contiene una etiqueta 802.1Q. Esto permite a los dispositivos distinguir entre tramas etiquetadas y no etiquetadas."
```

### 21 — VLANs y MTU en Trunks
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["mtu", "jumbo", "overhead"]
respuesta: "interface GigabitEthernet0/1"
tipo: "completar"
enunciado: "Al configurar enlaces troncales que transportan múltiples VLANs, el overhead de la etiqueta 802.1Q (4 bytes) aumenta el tamaño de la trama. Si se usan jumbo frames, se debe ajustar el MTU. Escribe el comando de interfaz para establecer el MTU a 9000 bytes."
pasos:
  - "Entrar en modo de interfaz: interface GigabitEthernet0/1"
  - "Establecer MTU: mtu 9000"
explicacion: "El MTU debe ser lo suficientemente grande para acomodar el payload más la etiqueta 802.1Q. Si el MTU es 1500, la carga útil máxima es 1496 bytes. Para jumbo frames de 9000, se requiere soporte hardware específico."
```

### 22 — VLANs y STP PortFast
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["portfast", "stp", "edge"]
respuesta: "spanning-tree portfast"
tipo: "completar"
enunciado: "Para reducir el tiempo de convergencia en puertos conectados a hosts finales (PCs, servidores) y evitar que estén en estado de escucha/aprendizaje durante 30 segundos, se activa PortFast. Escribe el comando en modo de interfaz para habilitarlo."
pasos:
  - "Entrar en modo de interfaz: interface GigabitEthernet0/5"
  - "Activar PortFast: spanning-tree portfast"
explicacion: "PortFast permite que el puerto pase inmediatamente al estado de forwarding sin pasar por los estados de listening y learning, siempre que no reciba BPDU. Es seguro solo en puertos de borde (edge)."
```

### 23 — VLANs y BPDU Guard
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["bpduguard", "errdisable", "security"]
respuesta: "spanning-tree bpduguard enable"
tipo: "completar"
enunciado: "Para proteger los puertos con PortFast de configuraciones incorrectas o ataques donde un usuario conecta un switch que envía BPDU, se activa BPDU Guard. Si se recibe un BPDU, el puerto se pone en errdisable. Escribe el comando en modo de interfaz."
pasos:
  - "Entrar en modo de interfaz: interface GigabitEthernet0/5"
  - "Activar BPDU Guard: spanning-tree bpduguard enable"
explicacion: "BPDU Guard desactiva (errdisable) un puerto con PortFast si recibe un BPDU. Esto previene la creación accidental de bucles de spanning tree en los bordes de la red."
```

### 24 — VLANs y Loop Guard
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["loopguard", "root", "blocking"]
respuesta: "spanning-tree loopguard default"
tipo: "completar"
enunciado: "Para prevenir bucles cuando un puerto bloqueado (en estado de blocking) deja de recibir BPDU del puente raíz (por ejemplo, por fallo de enlace unidireccional), se activa Loop Guard. Escribe el comando global para habilitar Loop Guard por defecto en todos los puertos."
pasos:
  - "Entrar en modo global: enable"
  - "Activar Loop Guard: spanning-tree loopguard default"
explicacion: "Loop Guard mantiene el puerto en estado de discarding (bloqueado) si deja de recibir BPDU, en lugar de transicionar a listening/learning y causar un bucle. Es más seguro que BPDU Guard para puertos troncales."
```

### 25 — VLANs y VLAN Mapping (Q-in-Q)
```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["q-in-q", "vlan-mapping", "provider"]
respuesta: "vlan mapping 100 200"
tipo: "completar"
enunciado: "En un escenario de proveedor (Service Provider), se necesita encapsular una VLAN de cliente (100) dentro de una VLAN de servicio (200) para transportarla a través de la red del proveedor. Escribe el comando de interfaz para realizar este mapeo de VLAN (Q-in-Q)."
pasos:
  - "Entrar en modo de interfaz: interface GigabitEthernet0/1"
  - "Configurar mapeo: vlan mapping 100 map-all 200"
explicacion: "El comando `vlan mapping` permite añadir una etiqueta externa (service tag) a las tramas entrantes con una etiqueta interna (customer tag). Esto permite al proveedor transportar múltiples VLANs de clientes dentro de una sola VLAN de servicio."
```