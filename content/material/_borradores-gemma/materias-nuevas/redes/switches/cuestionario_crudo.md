### 1 — Función principal de un switch
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["funcion", "capa2"]
tipo: vf
enunciado: |
  La función principal de un switch de capa 2 es enrutar paquetes entre diferentes redes IP basándose en la tabla de enrutamiento.
respuesta: falso
pasos:
  - "Identificar la capa del modelo OSI que opera el switch básico."
  - "Distinguir entre encaminamiento (routing) y conmutación (switching)."
  - "Confirmar que el switch usa direcciones MAC paraforwarding, no IP."
explicacion: "Los switches de capa 2 operan en la capa de Enlace de Datos y utilizan direcciones MAC para dirigir el tráfico dentro de una misma red LAN. El enrutamiento entre redes diferentes es función de un router (capa 3)."
```

### 2 — Dirección de destino en Ethernet
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["direccionamiento", "mac"]
tipo: completar
enunciado: |
  Cuando un switch recibe un cuadro Ethernet y necesita enviarlo a un dispositivo específico, utiliza la dirección de {{responder}} de destino para consultarlo en su tabla CAM.
respuesta: |
  mac
respuestas_validas:
  - mac
  - MAC
  - direccion mac
  - direccion de mac
pasos:
  - "Entender que Ethernet utiliza direccionamiento físico."
  - "Identificar el nombre técnico de esa dirección."
  - "Relacionar la tabla CAM con el tipo de dirección indexada."
explicacion: "La tabla CAM (Content-Addressable Memory) de un switch indexa las direcciones MAC de origen para aprender la ubicación del puerto y usa la dirección MAC de destino para determinar a dónde enviar el cuadro."
```

### 3 — Aprendizaje de direcciones MAC
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["aprendizaje", "cam"]
tipo: completar
enunciado: |
  Un switch aprende las direcciones MAC de origen de los dispositivos conectados a sus puertos analizando el campo {{responder}} de los cuadros entrantes.
respuesta: |
  fuente
respuestas_validas:
  - fuente
  - origen
  - source
  - mac de origen
  - direccion de origen
pasos:
  - "Analizar la estructura de un cuadro Ethernet."
  - "Identificar qué campo contiene la identidad del remitente."
  - "Comprender el proceso de auto-aprendizaje del switch."
explicacion: "El switch examina el campo 'Source MAC Address' de cada cuadro recibido. Si la MAC no está en su tabla, la agrega asociada al puerto de entrada. No usa la dirección de destino para aprender, sino para reenviar."
```

### 4 — Diferencia con Hub
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["comparacion", "hub"]
tipo: mc
enunciado: |
  ¿Cuál es la ventaja principal de usar un switch sobre un hub (repetidor multipuerto) en una red LAN?
opciones_explicitas:
  - "El switch puede enrutar tráfico entre VLANs sin configuración adicional."
  - "El switch envía los cuadros solo al puerto de destino, reduciendo colisiones."
  - "El switch opera en la capa 3 del modelo OSI de forma nativa."
  - "El switch no necesita alimentación eléctrica para funcionar."
respuesta: "El switch envía los cuadros solo al puerto de destino, reduciendo colisiones."
pasos:
  - "Comparar el comportamiento de broadcast del hub vs el forwarding selectivo del switch."
  - "Evaluar el impacto en la eficiencia del ancho de banda."
  - "Descartar opciones que confunden capas OSI o requisitos físicos."
explicacion: "Los hubs replican el señal a todos los puertos (dominio de colisión único), mientras que los switches crean dominios de colisión independientes por puerto y envían datos solo al destino correcto (unicast), mejorando el rendimiento."
```

### 5 — Tabla de conmutación
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["cam", "tabla"]
tipo: completar
enunciado: |
  La tabla que almacena la correspondencia entre direcciones MAC y puertos físicos en un switch se llama tabla {{responder}}.
respuesta: |
  cam
respuestas_validas:
  - cam
  - mac address table
  - tabla mac
  - forwarding table
  - switch forwarding table
pasos:
  - "Recordar el acrónimo inglés de la memoria usada para el forwarding."
  - "Identificar el tipo de tabla lógica interna del hardware del switch."
  - "Verificar la terminología estándar de la industria."
explicacion: "CAM significa Content-Addressable Memory. Aunque a veces se le llama 'MAC Table' o 'Forwarding Table', el término técnico preciso para el hardware de búsqueda es CAM."
```

### 6 — Broadcast Unknown Unicast
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["broadcast", "flooding"]
tipo: completar
enunciado: |
  Si un switch recibe un cuadro con una dirección MAC de destino que NO está en su tabla CAM, realizará un {{responder}} en todos los puertos del VLAN activo excepto en el de origen.
respuesta: |
  flood
respuestas_validas:
  - flood
  - flooding
  - inundacion
  - broadcast
  - reenvio broadcast
pasos:
  - "Definir el comportamiento de un switch ante una MAC desconocida (Unknown Unicast)."
  - "Identificar el término técnico para enviar a todos los puertos."
  - "Distinguir entre broadcast conocido y flood de unknown unicast."
explicacion: "Este proceso se llama 'flooding'. El switch envía el cuadro por todos los puertos del VLAN (excepto el origen) esperando que el dispositivo destinatario responda, lo que le permitirá aprender su ubicación."
```

### 7 — Dominio de colisión
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["colisiones", "dominio"]
tipo: vf
enunciado: |
  Cada puerto de un switch moderno crea su propio dominio de colisión independiente para los dispositivos conectados a él.
respuesta: verdadero
pasos:
  - "Analizar la arquitectura de conmutación de circuitos espaciales."
  - "Comparar con los hubs que comparten un solo dominio."
  - "Confirmar que el full-duplex elimina colisiones en enlaces punto a punto."
explicacion: "Correcto. Al permitir comunicación full-dúplex y tener buffers independientes por puerto, cada enlace de switch es un dominio de colisión separado (o sin colisiones si es full-dúplex), a diferencia de un hub que es un solo dominio grande."
```

### 8 — Dirección de broadcast
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["broadcast", "direccion"]
tipo: completar
enunciado: |
  La dirección MAC de broadcast estándar en una red Ethernet es {{responder}}.
respuesta: |
  ff:ff:ff:ff:ff:ff
respuestas_validas:
  - ff:ff:ff:ff:ff:ff
  - ffff.ffff.ffff
  - ff-ff-ff-ff-ff-ff
  - ff:ff:ff:ffff:ff
  - ffff.ffffffff
pasos:
  - "Recordar la notación hexadecimal de la dirección de broadcast."
  - "Verificar la consistencia de los separadores (dos puntos, puntos, guiones)."
  - "Confirmar que son 6 octetos todos en FF."
explicacion: "La dirección MAC de broadcast es 6 octetos de 0xFF. Las notaciones válidas incluyen separadores de dos puntos, puntos (formato Cisco) o guiones, siempre manteniendo los 12 dígitos hexadecimales F."
```

### 9 -- Protocolo STP
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["stp", "bucles"]
tipo: completar
enunciado: |
  El protocolo utilizado por los switches para prevenir bucles de enlace en topologías redundantes se llama {{responder}}.
respuesta: |
  stp
respuestas_validas:
  - stp
  - spanning tree
  - spanning-tree
  - arbol de expansion
  - protocolo de arbol de expansion
pasos:
  - "Identificar el protocolo estándar IEEE para evitar loops de capa 2."
  - "Reconocer sus siglas comunes y su nombre completo."
  - "Entender su propósito principal en redes con múltiples caminos."
explicacion: "STP (Spanning Tree Protocol) bloquea lógicamente ciertos puertos redundantes para crear un árbol sin bucles, evitando que los cuadros circulen infinitamente y causen broadcast storms."
```

### 10 -- Puerto bloqueado por STP
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["stp", "estados"]
tipo: mc
enunciado: |
  En el estado inicial de un puerto STP, antes de aprender direcciones MAC, el puerto se encuentra típicamente en el estado:
opciones_explicitas:
  - "Forwarding"
  - "Listening"
  - "Blocking"
  - "Disabled"
respuesta: "Blocking"
pasos:
  - "Repasar los estados de puerto de STP (Disabled, Blocking, Listening, Learning, Forwarding)."
  - "Identificar el estado inicial después de que el puerto se activa físicamente."
  - "Descartar estados intermedios o finales."
explicacion: "El puerto comienza en estado Blocking. Luego pasa a Listening (aprende BPDU), luego Learning (aprende MACs) y finalmente Forwarding. No envía tráfico de usuario en Blocking."
```

### 11 -- VLAN por defecto
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["vlan", "default"]
tipo: completar
enunciado: |
  En la mayoría de los switches Cisco, todos los puertos pertenecen inicialmente a la VLAN número {{responder}}.
respuesta: |
  1
respuestas_validas:
  - 1
  - vlan 1
  - vlan uno
  - uno
pasos:
  - "Recordar la configuración por defecto de fábrica de los switches Cisco."
  - "Identificar el ID numérico de la VLAN nativa por defecto."
  - "Saber que esta VLAN no se puede eliminar."
explicacion: "La VLAN 1 es la VLAN nativa por defecto en Cisco IOS. Todos los puertos de acceso comienzan aquí. Por seguridad, se recomienda mover los puertos a una VLAN de usuario diferente y no usar la VLAN 1 para tráfico de gestión."
```

### 12 -- Trunking
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["trunk", "vlan"]
tipo: completar
enunciado: |
  Para transportar tráfico de múltiples VLANs entre dos switches, se debe configurar el enlace como un {{responder}}.
respuesta: |
  trunk
respuestas_validas:
  - trunk
  - enlace troncal
  - trunking
  - puerto troncal
  - modo trunk
pasos:
  - "Definir el tipo de enlace que multiplexa VLANs."
  - "Identificar el término inglés estandarizado en la configuración."
  - "Distinguir entre puerto de acceso y puerto de trunk."
explicacion: "Un enlace Trunk (o troncal) utiliza etiquetado (como 802.1Q) para llevar múltiples VLANs simultáneamente a través de un solo cable físico entre switches o entre switch y router."
```

### 13 -- Etiquetado 802.1Q
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["vlan", "estandar"]
tipo: completar
enunciado: |
  El estándar IEEE que define cómo se etiqueta un cuadro Ethernet con información de VLAN es {{responder}}.
respuesta: |
  802.1q
respuestas_validas:
  - 802.1q
  - 802.1Q
  - ieee 802.1q
  - estandar 802.1q
  - protocolo 802.1q
pasos:
  - "Identificar el estándar de red LAN que trata con VLANs."
  - "Recordar la notación correcta del número de estándar."
  - "Confirmar que es el método de etiquetado nativo en Ethernet."
explicacion: "IEEE 802.1Q es el estándar que inserta un tag de 4 bytes en el cuadro Ethernet para identificar a qué VLAN pertenece, permitiendo la multiplexación en enlaces troncales."
```

### 14 -- Puerto de acceso
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["vlan", "acceso"]
tipo: mc
enunciado: |
  Un puerto configurado como 'access' en un switch:
opciones_explicitas:
  - "Transmite cuadros etiquetados con VLAN a los dispositivos finales."
  - "Pertenece a una sola VLAN y envía/recibe cuadros sin etiqueta (untagged)."
  - "Es capaz de llevar tráfico de 4096 VLANs simultáneamente."
  - "Siempre actúa como puerto troncal por defecto."
respuesta: "Pertenece a una sola VLAN y envía/recibe cuadros sin etiqueta (untagged)."
pasos:
  - "Definir el comportamiento de un puerto de acceso."
  - "Analizar si envía tags o no a los dispositivos finales (PCs, impresoras)."
  - "Descartar funciones de trunk o múltiples VLANs."
explicacion: "Los puertos de acceso pertenecen a una única VLAN y comunican con dispositivos finales (que no entienden tags 802.1Q) enviando y recibiendo cuadros 'untagged'. El switch añade/quita el tag internamente."
```

### 15 -- Native VLAN
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["vlan", "native"]
tipo: completar
enunciado: |
  En un enlace trunk 802.1Q, la VLAN que se transmite sin etiqueta se denomina VLAN {{responder}}.
respuesta: |
  nativa
respuestas_validas:
  - nativa
  - native
  - vlan nativa
  - vlan native
  - default
pasos:
  - "Identificar la VLAN especial en enlaces troncales."
  - "Recordar que esta VLAN no se etiqueta en el cable."
  - "Saber que debe coincidir en ambos extremos del trunk."
explicacion: "La VLAN Native (por defecto la 1) se envía sin etiqueta 802.1Q en un trunk. Si los extremos no coinciden, se generan errores y se pierde conectividad para esa VLAN específica."
```

### 16 -- Broadcast Storm
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["problemas", "bucles"]
tipo: completar
enunciado: |
  Un bucle de capa 2 sin STP puede causar una {{responder}} donde el ancho de banda se agota por cuadros replicados infinitamente.
respuesta: |
  tormenta
respuestas_validas:
  - tormenta
  - storm
  - broadcast storm
  - inundacion masiva
  - loop broadcast
pasos:
  - "Describir el efecto catastrófico de un bucle en la red."
  - "Identificar el término técnico para la saturación por broadcast."
  - "Relacionar la falta de STP con este fenómeno."
explicacion: "Una Broadcast Storm (Tormenta de Broadcast) ocurre cuando los cuadros de broadcast se reenvían eternamente en un bucle, saturando la CPU de los switches y el ancho de banda de la red."
```

### 17 -- MAC Address Table Overflow
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["seguridad", "cam"]
tipo: completar
enunciado: |
  Si un atacante envía miles de direcciones MAC de origen falsas, puede saturar la tabla CAM del switch, forzándolo a entrar en modo {{responder}}.
respuesta: |
  failopen
respuestas_validas:
  - failopen
  - flooding
  - flood mode
  - modo inundacion
  - modo broadcast
pasos:
  - "Analizar el comportamiento del switch cuando se llena la tabla MAC."
  - "Identificar el modo de seguridad/fallo por defecto en hardware limitado."
  - "Entender que 'fail-open' significa tratar todo como broadcast."
explicacion: "Cuando la tabla CAM se llena, muchos switches entran en modo 'fail-open' o 'flooding mode', enviando todo el tráfico por broadcast (como si no supiera el destino), lo que facilita el sniffing de red."
```

### 18 -- Puerto Seguro (Port Security)
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["seguridad", "port-security"]
tipo: completar
enunciado: |
  La característica de seguridad que limita el número de direcciones MAC que pueden aprenderse en un puerto se llama {{responder}}.
respuesta: |
  port security
respuestas_validas:
  - port security
  - seguridad de puerto
  - puerto seguro
  - port-security
  - mac port security
pasos:
  - "Identificar la función de control de acceso a nivel de puerto."
  - "Recordar el nombre del comando/feature en Cisco IOS."
  - "Entender que previene la suplantación o inundación de MACs."
explicacion: "Port Security permite configurar un límite máximo de MAC addresses por puerto. Si se excede, el switch puede cerrar el puerto (shutdown), bloquear tráfico adicional o generar alertas."
```

### 19 -- Spanning Tree Root Bridge
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["stp", "root"]
tipo: mc
enunciado: |
  El switch que se convierte en el 'Root Bridge' en una instancia STP es aquel que:
opciones_explicitas:
  - Tiene la dirección MAC más baja en toda la red.
  - Tiene el Bridge ID más bajo (prioridad + MAC).
  - Está conectado físicamente al router de la red.
  - Fue el primero en encenderse.
respuesta: "Tiene el Bridge ID más bajo (prioridad + MAC)."
pasos:
  - "Definir el criterio de elección del Root Bridge."
  - "Analizar los componentes del Bridge ID (Prioridad + MAC)."
  - "Descartar criterios físicos o de encendido que no son estándar."
explicacion: "El Root Bridge se elige por tener el Bridge ID más bajo. El Bridge ID se compone de la prioridad (configurable) y la dirección MAC base. Si las prioridades son iguales, gana la MAC más baja."
```

### 20 -- Costo del Enlace
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["stp", "costo"]
tipo: completar
enunciado: |
  En STP, el camino hacia el Root Bridge se selecciona basándose en el {{responder}} acumulado desde cada switch.
respuesta: |
  costo
respuestas_validas:
  - costo
  - cost
  - path cost
  - costo del camino
  - metrica
pasos:
  - "Identificar la métrica usada por STP para elegir rutas."
  - "Saber que se suma a lo largo de los saltos hacia el Root."
  - "Relacionar el costo con el ancho de banda del enlace."
explicacion: "STP calcula el 'costo del camino' (path cost) hacia el Root Bridge. El costo se invierte (inversamente proporcional al ancho de banda) y se suma a lo largo de los enlaces. El camino con el costo total más bajo se activa."
```

### 21 -- EtherChannel
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["agregacion", "etherchannel"]
tipo: completar
enunciado: |
  La tecnología que combina múltiples enlaces físicos Ethernet en un único enlace lógico para aumentar el ancho de banda se llama {{responder}}.
respuesta: |
  etherchannel
respuestas_validas:
  - etherchannel
  - ether channel
  - agregacion de enlaces
  - link aggregation
  - port channel
pasos:
  - "Identificar la solución de agregación de enlaces en Cisco."
  - "Reconocer que agrupa puertos físicamente separados."
  - "Entender que mejora el throughput y la redundancia."
explicacion: "EtherChannel (o Link Aggregation) agrupa hasta 8 puertos físicos en un único canal lógico. Esto aumenta el ancho de banda disponible y proporciona redundancia si un enlace falla."
```

### 22 -- Protocolo LACP
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["etherchannel", "estandar"]
tipo: completar
enunciado: |
  El protocolo estándar IEEE para negociar automáticamente la formación de EtherChannel es {{responder}}.
respuesta: |
  lacp
respuestas_validas:
  - lacp
  - 802.3ad
  - ieee 802.3ad
  - link aggregation control protocol
  - protocolo de control de agregacion
pasos:
  - "Identificar el protocolo de negociación de enlaces agregados."
  - "Distinguirlo de los protocolos propietarios (como PAgP de Cisco)."
  - "Recordar su estándar IEEE."
explicacion: "LACP (Link Aggregation Control Protocol) es el estándar IEEE 802.3ad (ahora parte de 802.1AX). Permite que dos switches negocien y formen automáticamente un EtherChannel, a diferencia del modo manual 'on'."
```

### 23 -- Puerto Duplicado (Loop)
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["debug", "loop"]
tipo: vf
enunciado: |
  Si un switch detecta que una dirección MAC aprendida en un puerto ya estaba aprendida en otro puerto diferente en la misma VLAN, se ha producido un bucle físico.
respuesta: falso
pasos:
  - "Analizar el comportamiento normal de aprendizaje de MACs."
  - "Distinguir entre movilidad de MAC (movimiento de dispositivo) y bucle."
  - "Confirmar que el switch simplemente actualiza la tabla CAM sin error."
explicacion: "No es necesariamente un bucle. Si un dispositivo se mueve de un puerto a otro, o si hay un hub en medio, el switch actualiza la entrada de la MAC a la nueva ubicación. Un bucle se detecta por BPDU o por saturación, no solo por MAC duplicada."
```

### 24 -- Puerto Shutdown
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["seguridad", "accion"]
tipo: completar
enunciado: |
  Si se configura 'port-security' con la acción 'shutdown', el puerto entrará en estado {{responder}} al violar la política.
respuesta: |
  errdisable
respuestas_validas:
  - errdisable
  - error disable
  - err-disabled
  - deshabilitado por error
  - estado errdisable
pasos:
  - "Identificar el estado específico de error en Cisco IOS."
  - "Saber que el puerto deja de funcionar activamente."
  - "Reconocer que requiere intervención manual o auto-recovery."
explicacion: "El estado 'errdisable' desactiva el puerto lógicamente para proteger la red. El administrador debe ejecutar 'shutdown' seguido de 'no shutdown' para restaurarlo, o configurar 'errdisable recovery' automático."
```

### 25 -- CDP
```yaml
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["protocolo", "descubrimiento"]
tipo: mc
enunciado: |
  El protocolo Cisco propietaria que permite a los switches descubrir información sobre los dispositivos vecinos directamente conectados es:
opciones_explicitas:
  - "LLDP (Link Layer Discovery Protocol)"
  - "CDP (Cisco Discovery Protocol)"
  - "ARP (Address Resolution Protocol)"
  - "DTP (Dynamic Trunking Protocol)"
respuesta: "CDP (Cisco Discovery Protocol)"
pasos:
  - "Distinguir entre protocolos de descubrimiento vecinos."
  - "Identificar cuál es propietario de Cisco."
  - "Descartar ARP (resolución IP) y LLDP (estándar abierto)."
explicacion: "CDP es un protocolo de capa 2 propietario de Cisco que intercambia información (modelo, IP, versión de IOS) entre dispositivos Cisco adyacentes. LLDP es el estándar abierto equivalente (IEEE 802.1AB)."
```