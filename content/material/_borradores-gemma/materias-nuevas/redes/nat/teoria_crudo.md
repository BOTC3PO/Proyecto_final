# NAT (Network Address Translation): Puente entre el mundo privado y el público

En el ecosistema actual de redes, la escasez de direcciones IPv4 públicas ha convertido al NAT (Traducción de Direcciones de Red) en una pieza fundamental de la infraestructura de Internet. Desde el router doméstico de tu casa hasta los centros de datos masivos, el NAT actúa como un intermediario que traduce direcciones IP privadas (inconfigurables desde el exterior) en direcciones IP públicas (ruteables en Internet) y viceversa.

## ¿Cómo funciona y por qué es indispensable?

El NAT resuelve dos problemas críticos: la expansión de Internet sin agotar el espacio de direcciones IPv4 y la seguridad perimetral básica. Cuando un dispositivo dentro de una red local (por ejemplo, `192.168.1.10`) quiere acceder a un servidor en Internet, su tráfico no sale con esa dirección privada. El router, actuando como gateway, intercepta el paquete, reemplaza la dirección IP origen por la suya propia (la IP pública, ej. `203.0.113.5`) y registra esa traducción en su tabla de estado. Cuando la respuesta llega, el router consulta la tabla, invierte la traducción y entrega el paquete al dispositivo correcto.

Existen principalmente dos modalidades:

1.  **NAT Dinámico (PAT o NAT de Sobrecarga):** Es el más común en entornos domésticos y pymes. Múltiples dispositivos internos comparten **una sola** IP pública. El router distingue las sesiones utilizando números de puerto diferentes.
    *   *Ejemplo de sintaxis (Cisco IOS):*
        ```bash
        interface GigabitEthernet0/0
         ip nat outside
        interface GigabitEthernet0/1
         ip nat inside
        ip nat inside source list 1 interface GigabitEthernet0/0 overload
        ```
2.  **NAT Estático:** Mapea una IP privada específica a una IP pública específica de forma permanente. Se usa típicamente para servidores (web, mail) que deben ser accesibles desde el exterior.
    *   *Ejemplo:*
        ```bash
        ip nat inside source static 192.168.1.100 203.0.113.5
        ```

## Errores comunes en la implementación

Quienes se inician en la configuración de redes suelen cometer fallos recurrentes:

*   **Confundir las interfaces:** Asignar `ip nat inside` a la interfaz que mira hacia Internet o viceversa. Esto provoca que el router no sepa cuándo traducir y cuándo no.
*   **Olvidar la ACL (Lista de Control de Acceso):** En el NAT dinámico, es obligatorio definir qué tráfico interno merece ser traducido. Si no hay una ACL referenciada en el comando `ip nat inside source`, el tráfico no saldrá.
*   **Conflictos de puertos:** En PAT, si dos conexiones internas intentan usar el mismo puerto origen hacia el mismo destino, el router debe gestionar la colisión. Aunque los algoritmos modernos son robustos, en entornos con miles de conexiones simultáneas, el agotamiento de puertos efímeros puede causar caídas de conexión.

## Cuándo usar NAT y cuándo evitarlo

**Úsalo cuando:**
*   Necesitas conectar una red privada a Internet con menos IPs públicas que dispositivos internos.
*   Deseas ocultar la topología interna de la red para reducir la superficie de ataque (aunque no sustituye a un firewall stateful).
*   Estás migrando una red a un nuevo proveedor de servicios (ISP) sin cambiar la infraestructura interna.

**No lo uses (o replantea su uso) cuando:**
*   Estás diseñando una arquitectura moderna basada en IPv6. En IPv6, la abundancia de direcciones hace innecesario el NAT; se prefiere la transparencia de extremo a extremo para simplificar la depuración y el rendimiento.
*   Necesitas monitoreo detallado de origen. El NAT "enmascara" la IP real del cliente detrás de la IP del gateway, lo que complica los logs de seguridad si no se implementan mecanismos adicionales como syslog o NetFlow.
*   Estás configurando protocolos que incrustan direcciones IP en el payload (como FTP o SIP). Estos requieren ALG (Application Layer Gateway), que añade complejidad y puede romper la conexión si no está bien configurado.

## Ejemplo extendido: Configuración de un servidor web interno

Imagina que tu empresa tiene un servidor web interno en `192.168.10.50` que debe ser accesible desde Internet bajo la IP pública `203.0.113.10`. Aquí no usamos PAT, sino NAT Estático (también llamado Port Forwarding en algunos contextos, aunque técnicamente es un mapeo 1:1).

1.  **Definir zonas:**
    ```bash
    interface FastEthernet0/0
     ip address 203.0.113.1 255.255.255.0
     ip nat outside
    interface FastEthernet0/1
     ip address 192.168.10.1 255.255.255.0
     ip nat inside
    ```
    *Nota: Es crucial asignar correctamente `inside` y `outside`.*

2.  **Crear el mapeo estático:**
    ```bash
    ip nat inside source static tcp 192.168.10.50 80 203.0.113.10 80
    ```
    Esta instrucción le dice al router: "Cualquier paquete que llegue a la IP pública `203.0.113.10` en el puerto 80, redirígelo a `192.168.10.50` en el puerto 80".

3.  **Verificación:**
    Al ejecutar `show ip nat translations`, deberías ver una entrada estática permanente. Si intentas acceder al servidor desde fuera y no funciona, verifica primero las reglas del firewall (ACLs) en la interfaz `outside`, ya que el NAT solo traduce la IP, pero el firewall puede bloquear el tráfico antes de que el NAT lo procese.

El NAT es un mecanismo de conveniencia y supervivencia en la era IPv4, pero su uso debe ser consciente, entendiendo que introduce complejidad en la trazabilidad de la red.