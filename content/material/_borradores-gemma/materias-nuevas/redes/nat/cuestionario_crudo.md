### 1 — Definición de NAT estático
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["nat-estatico", "traduccion-1-a-1"]
tipo: "completar"
enunciado: "En un escenario de NAT estático donde el servidor interno 192.168.1.10 debe ser accesible desde Internet como 203.0.113.5, ¿qué comando en Cisco IOS se utiliza para definir esta asignación fija?"
respuesta: "ip nat inside source static"
respuestas_validas:
  - "ip nat inside source static"
  - "ip nat inside source static"
uno_de:
  - "En el router de borde..."
  - "Configurando el gateway..."
pasos:
  - "Identificar que se requiere una traducción 1 a 1 permanente."
  - "Recordar la sintaxis base para mapeos estáticos en Cisco."
  - "Verificar que el comando especifique la dirección interna y externa."
explicacion: "El comando `ip nat inside source static` asigna una dirección IP privada interna a una dirección IP pública externa de forma permanente. Es fundamental para servidores que deben ser accesibles desde el exterior."
```

### 2 — Verificación de tabla NAT
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["debug", "show-commands"]
tipo: "vf"
enunciado: "El comando `show ip nat translations` muestra únicamente las entradas dinámicas creadas por NAT overload, excluyendo las entradas estáticas."
respuesta: falso
uno_de:
  - "Al verificar la configuración..."
  - "Al revisar la tabla de traducción..."
pasos:
  - "Analizar la funcionalidad del comando de visualización."
  - "Confirmar si el comando filtra por tipo de NAT."
  - "Determinar si muestra todas las entradas activas."
explicacion: "El comando `show ip nat translations` muestra TODAS las entradas de la tabla NAT, tanto las estáticas (mapeos fijos) como las dinámicas (traducción por puerto/overload). No filtra por tipo."
```

### 3 — Identificación de interfaces NAT
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["interface-config", "inside-outside"]
tipo: "completar"
enunciado: "Para habilitar NAT en un router Cisco, es crucial marcar la interfaz conectada a la red privada como `____` y la conectada a Internet como `____`."
respuesta: "inside / outside"
respuestas_validas:
  - "inside / outside"
  - "inside/outside"
  - "inside, outside"
uno_de:
  - "Durante la configuración de interfaces..."
  - "Definiendo el alcance del NAT..."
pasos:
  - "Reconocer la necesidad de definir el contexto de la interfaz."
  - "Identificar los dos roles estándar en NAT: interior (privado) y exterior (público)."
  - "Escribir los términos técnicos correctos."
explicacion: "Las interfaces deben configurarse con `ip nat inside` (para la red local) e `ip nat outside` (para la WAN). Esto define la dirección de origen y destino para la traducción."
```

### 4 — NAT Overload (PAT)
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["pat", "overload", "pool"]
tipo: "completar"
enunciado: "Cuando se utiliza una lista de acceso extendida para restringir qué tráfico se traduce y se aplica a un pool de direcciones con el parámetro `____`, se habilita la traducción por puerto (PAT)."
respuesta: "overload"
respuestas_validas:
  - "overload"
  - "overload"
uno_de:
  - "Al definir el pool de direcciones..."
  - "Aplicando la política de traducción..."
pasos:
  - "Identificar el parámetro clave que permite múltiples mapeos a una misma IP."
  - "Recordar que PAT multiplexa conexiones usando números de puerto."
  - "Confirmar que el comando es `ip nat inside source list ... overload`."
explicacion: "La palabra clave `overload` indica al router que debe usar el mismo conjunto de direcciones IP públicas para múltiples hosts internos, diferenciándolos por el número de puerto de origen."
```

### 5 — Dirección de salida en NAT dinámico
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["dynamic-nat", "pool-config"]
tipo: "mc"
enunciado: "En una configuración de NAT dinámico simple (sin overload), si el pool de direcciones públicas tiene 10 direcciones pero hay 15 usuarios internos solicitando acceso simultáneo, ¿qué sucede con los usuarios 11-15?"
opciones_explicitas:
  - "Se les asigna una dirección temporal del pool y se les niega el acceso si el pool se llena."
  - "Se les asigna automáticamente la última dirección del pool sin importar si está en uso."
  - "El router crea una nueva dirección pública virtual al vuelo."
  - "Se les asigna una dirección del pool solo si la conexión es TCP."
respuesta: "Se les asigna una dirección temporal del pool y se les niega el acceso si el pool se llena."
uno_de:
  - "Analizando el comportamiento del pool..."
  - "Evaluando la capacidad del NAT..."
pasos:
  - "Entender la limitación de recursos en NAT dinámico puro."
  - "Distinguir entre NAT dinámico y PAT (Overload)."
  - "Concluir que sin overload, no hay multiplexación de puertos."
explicacion: "En NAT dinámico simple, cada usuario interno necesita una IP pública única. Si el pool se agota, las nuevas sesiones se descartan hasta que se libera una IP. El PAT soluciona esto reutilizando IPs."
```

### 6 — Comando de limpieza de tabla NAT
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["debug", "clear-commands"]
tipo: "completar"
enunciado: "Para forzar la eliminación de todas las entradas dinámicas de la tabla de traducción NAT en un router Cisco, se ejecuta el comando `____ ip nat translations *`."
respuesta: "clear"
respuestas_validas:
  - "clear"
  - "Clear"
uno_de:
  - "Al realizar mantenimiento..."
  - "Al reiniciar la sesión de NAT..."
pasos:
  - "Recordar el comando de deshabilitación/limpieza en IOS."
  - "Identificar que `clear` es el verbo estándar para resetear estados."
  - "Verificar que el comodín `*` elimina todas las entradas."
explicacion: "El comando `clear ip nat translations *` borra el caché de traducciones dinámicas. Las entradas estáticas permanecen porque son configuraciones permanentes, no entradas de caché."
```

### 7 — NAT y DNS
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["dns-nat", "helpful"]
tipo: "vf"
enunciado: "El comando `ip nat inside source list` activa automáticamente la traducción DNS para que los clientes internos resuelvan nombres de hosts públicos a sus direcciones privadas traducidas."
respuesta: falso
uno_de:
  - "Al configurar la integración con DNS..."
  - "Verificando la resolución de nombres..."
pasos:
  - "Analizar si el comando de NAT estándar gestiona DNS."
  - "Determinar si se requiere un comando adicional para la traducción inversa de DNS."
  - "Confirmar que el manejo de DNS requiere `ip nat dns`."
explicacion: "El comando `ip nat inside source list` solo traduce direcciones IP en los paquetes. Para traducir nombres de dominio (DNS), se debe configurar explícitamente `ip nat dns` en interfaces específicas."
```

### 8 — Interfaz de destino en PAT
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["pat", "interface-reference"]
tipo: "mc"
enunciado: "En un router Cisco, al configurar PAT usando la interfaz de salida en lugar de un pool de direcciones, ¿qué comando se utiliza en la interfaz WAN?"
opciones_explicitas:
  - "ip nat outside"
  - "ip nat source overload"
  - "ip nat inside source list [ACL] interface [InterfaceName] overload"
  - "ip nat outside source overload"
respuesta: "ip nat inside source list [ACL] interface [InterfaceName] overload"
uno_de:
  - "Definiendo la fuente de traducción..."
  - "Configurando la interfaz de salida..."
pasos:
  - "Identificar la sintaxis para usar la IP de la interfaz como origen."
  - "Distinguir entre configurar la interfaz como 'outside' y usarla como 'source'."
  - "Seleccionar la línea de comando completa que aplica la ACL y el overload."
explicacion: "Para usar la IP asignada a la interfaz WAN como dirección de salida para PAT, se usa `ip nat inside source list [ACL] interface [InterfaceName] overload` en la configuración global, no solo en la interfaz."
```

### 9 — NAT y protocolos no IP
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["limitations", "non-ip"]
tipo: "vf"
enunciado: "NAT estándar (Layer 3) es transparente y no requiere configuración especial para protocolos que no usan direcciones IP, como IPX o AppleTalk, siempre que estén habilitados en el router."
respuesta: falso
uno_de:
  - "Al evaluar la compatibilidad de protocolos..."
  - "Verificando el soporte de NAT..."
pasos:
  - "Analizar la dependencia de NAT en la cabecera IP."
  - "Determinar si NAT funciona sin direcciones IP."
  - "Confirmar que NAT es específico para IP."
explicacion: "NAT opera en la capa de red (Layer 3) específicamente sobre el protocolo IP. No traduce direcciones en protocolos no IP como IPX o AppleTalk nativamente sin mecanismos específicos de traducción de protocolos que no son el 'NAT' clásico."
```

### 10 — Debug de NAT
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["debug", "troubleshooting"]
tipo: "completar"
enunciado: "Para ver en tiempo real cómo el router traduce las direcciones de origen y destino de los paquetes que pasan por el NAT, se utiliza el comando `____ ip nat translations`."
respuesta: "debug"
respuestas_validas:
  - "debug"
  - "Debug"
uno_de:
  - "Al iniciar el monitoreo..."
  - "Al habilitar el registro de eventos..."
pasos:
  - "Identificar la herramienta de diagnóstico en IOS."
  - "Recordar que `debug` muestra eventos en tiempo real."
  - "Confirmar que `debug ip nat` es el comando estándar."
explicacion: "El comando `debug ip nat` muestra cada traducción en tiempo real, indicando el cambio de dirección de origen/destino y el puerto. Es útil para diagnóstico pero consume muchos recursos del CPU."
```

### 11 — NAT estático inverso
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["nat-reverse", "static"]
tipo: "mc"
enunciado: "¿Cuál es el propósito principal de configurar un NAT estático 'inverso' (o nat static reverse) en un router de borde?"
opciones_explicitas:
  - "Permitir que hosts internos accedan a servidores externos usando la IP pública del servidor."
  - "Traducir una dirección IP pública única a múltiples direcciones internas para servidores web."
  - "Ocultar la topología interna de redes externas específicas que tienen acceso directo."
  - "Asignar una IP pública fija a un cliente doméstico dinámico."
respuesta: "Permitir que hosts internos accedan a servidores externos usando la IP pública del servidor."
uno_de:
  - "Analizando la seguridad de acceso..."
  - "Configurando accesos internos..."
pasos:
  - "Definir qué es un NAT inverso."
  - "Evaluar los escenarios de uso común."
  - "Identificar que facilita el acceso interno a recursos externos con la misma dirección que vería el exterior."
explicacion: "El NAT estático inverso permite que los hosts de la red interna accedan a un servidor externo usando la dirección IP pública de ese servidor, en lugar de su dirección privada. Esto es útil para firewalls que permiten solo ciertos IPs."
```

### 12 — Tiempo de expiración de NAT dinámico
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["timeout", "dynamic-table"]
tipo: "completar"
enunciado: "En un router Cisco, el tiempo por defecto que una entrada dinámica de NAT permanece en la tabla sin tráfico asociado antes de ser eliminada es de ____ segundos para UDP."
respuesta: "300"
respuestas_validas:
  - "300"
  - "300 segundos"
uno_de:
  - "Al verificar los tiempos de espera..."
  - "Configurando la retención de entradas..."
pasos:
  - "Recordar los tiempos de expiración por defecto en IOS."
  - "Distinguir entre TCP (más largo) y UDP (más corto)."
  - "Identificar el valor estándar para UDP."
explicacion: "Por defecto, las entradas de NAT dinámico para UDP expiran después de 300 segundos (5 minutos) de inactividad. Para TCP, el tiempo por defecto es de 24 horas (86400 segundos), coincidiendo con el tiempo de vida de una conexión TCP típica."
```

### 13 — ACL y NAT
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["acl", "access-list"]
tipo: "mc"
enunciado: "Al definir una ACL para NAT dinámico, ¿qué tipo de dirección debe especificar la ACL para identificar el tráfico que será traducido?"
opciones_explicitas:
  - "La dirección IP de destino final en Internet."
  - "La dirección IP de origen interna (privada) que se va a traducir."
  - "La dirección IP de destino interna del servidor."
  - "La dirección IP de origen externa de la red WAN."
respuesta: "La dirección IP de origen interna (privada) que se va a traducir."
uno_de:
  - "Al definir el alcance de la ACL..."
  - "Configurando el filtro de traducción..."
pasos:
  - "Entender que NAT traduce la dirección de origen."
  - "Determinar que la ACL debe seleccionar los paquetes de origen internos."
  - "Confirmar que la ACL actúa sobre la dirección source."
explicacion: "La ACL utilizada en el comando `ip nat inside source list` debe coincidir con las direcciones IP de origen de los paquetes que salen de la red interna (inside). El router traducirá el origen de estos paquetes a la dirección del pool o interfaz."
```

### 14 — NAT y DHCP
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["dhcp", "integration"]
tipo: "vf"
enunciado: "Si se configura un pool de NAT dinámico con un rango de direcciones IP, es obligatorio que el servidor DHCP del router asigne direcciones de ese mismo pool a los clientes internos para que el NAT funcione."
respuesta: falso
uno_de:
  - "Al integrar DHCP y NAT..."
  - "Configurando la asignación de IPs..."
pasos:
  - "Analizar la independencia entre DHCP y NAT."
  - "Determinar si el NAT depende de quién asigna la IP interna."
  - "Confirmar que NAT traduce cualquier IP interna que cumpla con la ACL."
explicacion: "NAT y DHCP son independientes. NAT traduce cualquier tráfico interno que coincida con la ACL definida, independientemente de si la IP interna fue asignada por DHCP estático, DHCP dinámico o configuración manual. El pool de NAT es para las IPs DE SALIDA, no de entrada."
```

### 15 — NAT y DNS inverso (DNS Proxy)
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["dns-proxy", "dns-helper"]
tipo: "completar"
enunciado: "Para que un router actúe como proxy DNS y traduzca los nombres de dominio de hosts internos a sus direcciones IP privadas cuando se consultan desde el exterior, se debe habilitar `ip nat dns` en la interfaz ____."
respuesta: "outside"
respuestas_validas:
  - "outside"
  - "Outside"
uno_de:
  - "Al configurar la interfaz WAN..."
  - "Definiendo el ámbito del DNS proxy..."
pasos:
  - "Identificar dónde debe escucharse la consulta DNS inversa."
  - "Recordar que la interfaz de salida (WAN) es la que recibe las consultas del exterior."
  - "Confirmar que `ip nat dns` se aplica en la interfaz outside."
explicacion: "El comando `ip nat dns` se configura en la interfaz `outside` (WAN). Esto permite al router interceptar consultas DNS desde el exterior que buscan la IP pública de un servidor interno y responder con la IP privada correspondiente."
```

### 16 — NAT y múltiples interfaces de salida
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["multiple-interfaces", "policy-based"]
tipo: "mc"
enunciado: "Si un router tiene dos interfaces de salida a Internet (ISP1 y ISP2) y se desea que el tráfico de la red 192.168.1.0/24 use NAT a través de ISP1, mientras que 192.168.2.0/24 use ISP2, ¿qué técnica es necesaria?"
opciones_explicitas:
  - "NAT estático para cada red."
  - "NAT dinámico con dos pools separados y ACLs diferenciadas."
  - "NAT overload en ambas interfaces simultáneamente sin ACLs."
  - "No es posible hacer NAT sobre múltiples interfaces de salida."
respuesta: "NAT dinámico con dos pools separados y ACLs diferenciadas."
uno_de:
  - "Al planificar la redundancia de ISP..."
  - "Configurando el balanceo de carga..."
pasos:
  - "Analizar la necesidad de separar el tráfico por origen."
  - "Determinar que se requieren reglas distintas para cada grupo de hosts."
  - "Concluir que se necesitan ACLs y pools distintos vinculados por ruta o política."
explicacion: "Para usar diferentes IPs de salida para diferentes redes internas, se deben definir dos ACLs (una para cada red) y dos pools de NAT (o interfaces de salida diferentes), vinculados en el comando `ip nat inside source list` correspondiente."
```

### 17 — NAT y fragmentación de paquetes
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["fragmentation", "mtu"]
tipo: "vf"
enunciado: "NAT puede causar problemas de fragmentación en paquetes ICMP 'Destination Unreachable' si la MTU de la interfaz de salida es menor que la del paquete original traducido."
respuesta: verdadero
uno_de:
  - "Al analizar la integridad de paquetes..."
  - "Verificando la compatibilidad de MTU..."
pasos:
  - "Evaluar cómo NAT afecta el tamaño del paquete."
  - "Considerar los paquetes de control ICMP generados por el router."
  - "Confirmar que el cambio de dirección puede alterar la lógica de fragmentación si no se maneja el MTU."
explicacion: "Aunque NAT no cambia el tamaño del payload, los routers pueden generar ICMP errors. Si el MTU de salida es pequeño, los paquetes grandes deben fragmentarse. NAT debe ser consciente de esto para no generar errores de 'Fragmentation Needed' incorrectos o bloquear tráfico. Es un problema conocido en ciertos escenarios de MTU mismatch."
```

### 18 — Comando de verificación de pool
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["show-commands", "pool-status"]
tipo: "completar"
enunciado: "Para verificar cuántas direcciones del pool de NAT están actualmente en uso y cuáles están disponibles, se utiliza el comando `show ip nat ____`."
respuesta: "statistics"
respuestas_validas:
  - "statistics"
  - "Statistics"
uno_de:
  - "Al revisar el uso de recursos..."
  - "Monitoreando la actividad del pool..."
pasos:
  - "Identificar el comando que muestra métricas de rendimiento."
  - "Distinguir entre `translations` (contenido) y `statistics` (conteo)."
  - "Confirmar que `statistics` muestra hits/misses y uso del pool."
explicacion: "El comando `show ip nat statistics` proporciona información sobre el número de entradas en la tabla, el número de direcciones en el pool, cuántas están en uso y cuántas fallas de traducción han ocurrido."
```

### 19 — NAT y protocolos con puertos embebidos
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["application-layer-gateway", "ftp"]
tipo: "mc"
enunciado: "¿Por qué el NAT estándar a menudo falla con protocolos como FTP o SIP sin una ALG (Application Layer Gateway) habilitada?"
opciones_explicitas:
  - "Porque estos protocolos usan cifrado que oculta los puertos."
  - "Porque la información de dirección y puerto se transmite dentro del cuerpo del mensaje (payload) y no solo en la cabecera IP/TCP."
  - "Porque estos protocolos no usan puertos TCP o UDP."
  - "Porque NAT no puede traducir paquetes que superan los 1500 bytes."
respuesta: "Porque la información de dirección y puerto se transmite dentro del cuerpo del mensaje (payload) y no solo en la cabecera IP/TCP."
uno_de:
  - "Analizando la compatibilidad de protocolos..."
  - "Diagnosticking fallos de FTP..."
pasos:
  - "Entender que NAT modifica cabeceras."
  - "Analizar cómo FTP/SIP llevan datos de conexión en el payload."
  - "Concluir que el payload debe ser inspeccionado y modificado también."
explicacion: "Protocolos como FTP abren canales de datos adicionales en puertos aleatorios. La dirección de ese puerto se envía dentro del payload TCP. NAT estándar solo ve la cabecera y no modifica el payload, causando que el cliente externo intenté conectarse a la IP privada incorrecta."
```

### 20 — NAT y direcciones APIPA
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["apiPA", "169.254.0.0"]
tipo: "vf"
enunciado: "Si un cliente interno obtiene una dirección IP en el rango 169.254.0.0/16 (APIPA) debido a un fallo de DHCP, el NAT funcionará correctamente para ese cliente sin configuración adicional."
respuesta: falso
uno_de:
  - "Al evaluar la conectividad de clientes..."
  - "Verificando la asignación de IPs..."
pasos:
  - "Analizar la naturaleza de las direcciones APIPA."
  - "Determinar si el router considera estas direcciones como 'inside' válidas."
  - "Confirmar que las direcciones APIPA son locales al enlace y no enrutables, por lo que NAT no las traducirá a Internet."
explicacion: "Las direcciones APIPA (169.254.x.x) son autoconfiguradas y no enrutables. No forman parte de una red privada configurada intencionalmente para NAT. El router no tendrá una ruta válida para enviar tráfico de vuelta a esa dirección si se traduce, y la ACL de NAT probablemente no la incluirá si se define por subredes privadas estándar (RFC 1918)."
```

### 21 — NAT y ICMP
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["icmp", "ping"]
tipo: "completar"
enunciado: "NAT traduce correctamente los paquetes ICMP (como Ping) intercambiando la dirección de origen y destino, pero debe recalcular el campo `____` del encabezado ICMP para que la suma de comprobación sea válida."
respuesta: "checksum"
respuestas_validas:
  - "checksum"
  - "Checksum"
  - "suma de comprobación"
uno_de:
  - "Al analizar la integridad de ICMP..."
  - "Verificando la corrección de cabeceras..."
pasos:
  - "Recordar que ICMP tiene su propia suma de comprobación."
  - "Distinguir entre la suma de comprobación de IP y la de ICMP."
  - "Confirmar que el cambio de IP invalida el checksum de ICMP."
explicacion: "Cuando NAT cambia las direcciones IP en un paquete ICMP, la suma de comprobación (checksum) del encabezado ICMP ya no es válida. El router debe recalcular este checksum para que el destino acepte el paquete."
```

### 22 — NAT y enrutamiento dinámico
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["routing", "ospf", "bgp"]
tipo: "mc"
enunciado: "¿Cuál es el efecto principal de aplicar NAT en una interfaz que participa en un protocolo de enrutamiento dinámico como OSPF?"
opciones_explicitas:
  - "OSPF dejará de funcionar porque las direcciones de los paquetes cambian."
  - "Las rutas aprendidas por OSPF seguirán siendo válidas, pero el tráfico de retorno debe ser traducido correctamente."
  - "OSPF anunciará automáticamente las traducciones de NAT a los vecinos."
  - "OSPF bloqueará el tráfico NAT hasta que se configure manualmente."
respuesta: "Las rutas aprendidas por OSPF seguirán siendo válidas, pero el tráfico de retorno debe ser traducido correctamente."
uno_de:
  - "Al integrar enrutamiento y NAT..."
  - "Configurando la convergencia de red..."
pasos:
  - "Analizar la independencia de OSPF y NAT."
  - "Determinar que OSPF opera sobre las direcciones reales de los routers."
  - "Confirmar que NAT afecta el tráfico de usuario, no el protocolo de enrutamiento en sí, siempre que las rutas sean correctas."
explicacion: "OSPF opera con las direcciones IP reales de las interfaces de los routers. NAT no afecta la propagación de rutas OSPF. Sin embargo, si OSPF anuncia una ruta hacia una red interna que está detrás de NAT, el tráfico de retorno debe pasar por el router NAT para ser traducido de nuevo a la IP interna correcta."
```

### 23 — NAT y UDP inactivo
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["udp", "timeout"]
tipo: "completar"
enunciado: "A diferencia de TCP, que tiene un estado de conexión, las entradas de NAT para UDP se eliminan después de un período de inactividad. Si este período es de 300 segundos, ¿qué sucede con una aplicación UDP que envía paquetes cada 10 minutos?"
respuesta: "la conexión se pierde"
respuestas_validas:
  - "la conexión se pierde"
  - "se pierde la conexión"
  - "la traducción expira"
uno_de:
  - "Al evaluar la persistencia de UDP..."
  - "Diagnosticking timeouts de UDP..."
pasos:
  - "Analizar el intervalo de envío (600s) vs el timeout (300s)."
  - "Determinar si la entrada de NAT sobrevive al silencio."
  - "Concluir que la entrada expira antes del siguiente paquete."
explicacion: "Si una aplicación UDP envía paquetes con un intervalo mayor que el timeout de NAT (300s por defecto), la entrada de traducción se eliminará. El siguiente paquete será tratado como nuevo, posiblemente con un nuevo mapeo de puerto, rompiendo la 'conexión' lógica si la aplicación no lo maneja."
```

### 24 — NAT y direcciones globales
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["global-address", "pool"]
tipo: "mc"
enunciado: "En la configuración de un pool de NAT, ¿qué comando se utiliza para definir un rango de direcciones IP que serán usadas como direcciones de salida (globales)?"
opciones_explicitas:
  - "ip nat inside source list"
  - "ip nat pool [nombre] [inicio] [fin] netmask [mascara]"
  - "ip nat outside source pool"
  - "ip address pool [nombre] [inicio] [fin]"
respuesta: "ip nat pool [nombre] [inicio] [fin] netmask [mascara]"
uno_de:
  - "Al definir el recurso de direcciones..."
  - "Configurando el pool de salida..."
pasos:
  - "Identificar el comando de creación de pool."
  - "Distinguir entre el comando de lista (ACL) y el de pool (recursos)."
  - "Confirmar la sintaxis `ip nat pool`."
explicacion: "El comando `ip nat pool` crea un conjunto de direcciones IP públicas disponibles para la traducción dinámica. Se especifica el nombre, el rango de IPs y la máscara de subred."
```

### 25 — NAT y seguridad
```yaml
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["security", "hide"]
tipo: "vf"
enunciado: "NAT actúa como una capa de seguridad básica porque oculta las direcciones IP privadas de la red interna de la internet pública, impidiendo que los hosts externos inicien conexiones directamente hacia esas IPs sin una regla de NAT estático."
respuesta: verdadero
uno_de:
  - "Al evaluar la postura de seguridad..."
  - "Verificando la protección perimetral..."
pasos:
  - "Analizar el efecto de ocultación de NAT."
  - "Determinar si el tráfico no solicitado es bloqueado implícitamente."
  - "Confirmar que sin una traducción estática, el router no sabe a dónde enviar el paquete entrante."
explicacion: "NAT proporciona un firewall implícito. Los hosts externos no pueden iniciar una conexión hacia una IP privada interna porque no conocen la IP privada y el router no tiene una entrada en la tabla de traducción para dirigir el tráfico entrante. Solo se permiten conexiones iniciadas desde el interior (o con NAT estático)."
```