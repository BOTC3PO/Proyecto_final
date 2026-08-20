# VLANs (Redes): Aislamiento Lógico y Segmentación en Capa 2

## Introducción: ¿Qué son y por qué importan?

Las **VLANs** (Virtual Local Area Networks) son una tecnología fundamental en las redes modernas que permite dividir un único switch físico en múltiples dominios de broadcast lógicamente independientes. En términos prácticos, imagina que tienes un gran edificio de oficinas (la red física) y necesitas que los departamentos de Contabilidad, Ingeniería y Recursos Humanos no se "escuchen" entre sí, aunque todos estén conectados a la misma centralita telefónica. Las VLANs logran este aislamiento sin necesidad de comprar hardware adicional para cada departamento.

El beneficio principal es la **seguridad** y la **gestión del tráfico**. Al limitar el dominio de broadcast, se reduce el ruido de red (paquetes dirigidos a todos los dispositivos) y se previene que un dispositivo comprometido en una VLAN pueda escanear o atacar directamente a otro segmento, a menos que exista una ruta explícita.

## Explicación Central: Troncales (Trunk) y Acceso

Para que las VLANs funcionen, debemos entender cómo los switches identifican a qué "grupo" pertenece un frame. Esto se logra mediante el etiquetado **802.1Q**.

### 1. Puertas de Acceso (Access Ports)
Son los puertos donde se conectan los dispositivos finales (PCs, impresoras, APs). Estos puertos pertenecen a **una sola VLAN** y no envían etiquetas 802.1Q. Cuando el switch recibe un frame por un puerto de acceso, lo marca internamente con el ID de esa VLAN. Al enviarlo hacia el dispositivo final, elimina la etiqueta.

```bash
# Ejemplo en Cisco IOS
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
```

### 2. Puertas Troncales (Trunk Ports)
Son los enlaces entre switches o entre un switch y un router. Estos puertos transportan tráfico de **múltiples VLANs** simultáneamente. Para distinguir qué VLAN pertenece cada frame, el switch inserta una etiqueta de 4 bytes dentro del encabezado del frame Ethernet original. Esta es la base de la interoperabilidad entre equipos de diferentes fabricantes.

```bash
# Ejemplo en Cisco IOS
Switch(config)# interface GigabitEthernet0/24
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20,30
```

### 3. Native VLAN
En un enlace troncal, hay una VLAN especial llamada **Native VLAN** (por defecto, VLAN 1). Los frames que pertenecen a esta VLAN se envían **sin etiqueta**. Esto es crucial para la compatibilidad con dispositivos antiguos, pero representa un riesgo de seguridad si la Native VLAN no se cambia o se gestiona correctamente (ataques de VLAN hopping).

## Errores Comunes de Principiantes

1.  **Aislar por VLAN no significa enrutamiento automático:** Si creas la VLAN 10 y la VLAN 20, los dispositivos en ambas **no se comunicarán** entre sí por defecto. Necesitas un router (Router-on-a-Stick) o un switch de capa 3 (L3 Switch) con interfaces de puerto virtuales (SVI) para permitir el tráfico inter-VLAN.
2.  **Ignorar la Native VLAN mismatch:** Si un switch tiene la Native VLAN 1 y el otro tiene la Native VLAN 99 en un enlace troncal, el switch receptor descartará los frames sin etiqueta del otro lado, rompiendo la conectividad de gestión (como CDP o DTP) y generando errores en los logs.
3.  **Confundir broadcast con multicast:** Las VLANs segmentan dominios de broadcast, pero el tráfico multicast (como videoconferencias o descubrimiento de servicios) debe ser manejado cuidadosamente, ya que puede cruzar VLANs si no se configura correctamente el protocolo PIM o IGMP Snooping.

## Cuándo usar VLANs / Cuándo NO usarlas

**Usa VLANs cuando:**
*   Necesites segmentar usuarios por función (ej. VoIP en una VLAN separada para priorizar tráfico de voz).
*   Debais cumplir con normativas de seguridad que requieran aislamiento lógico entre departamentos.
*   Quieras reducir el tamaño de los dominios de broadcast para mejorar el rendimiento en redes grandes.

**No uses VLANs (o repénsalo) cuando:**
*   Tienes una red muy pequeña (menos de 50 dispositivos). La complejidad de gestión no justifica el beneficio.
*   Buscas una solución escalable a gran escala (miles de switches). En ese caso, tecnologías como **VXLAN** (Virtual Extensible LAN) o SDN (Network Definition Software) suelen ser más adecuadas para abstrayer la red física de la lógica.
*   Intentas usar VLANs como única barrera de seguridad perimetral. Las VLANs son de Capa 2; para seguridad real, necesitas ACLs (Listas de Control de Acceso) o firewalls entre las VLANs.

## Ejemplo Extendido: Implementación de una Red Corporativa Simple

Imaginemos una oficina pequeña con 3 departamentos: **Ventas (VLAN 10)**, **Soporte (VLAN 20)** y **Servidores (VLAN 30)**.

1.  **Diseño:** Se crea el switch de capa 3 (L3) como gateway por defecto. Se configuran las SVIs (Switch Virtual Interfaces) para cada VLAN:
    ```bash
    Switch(config)# interface Vlan10
    Switch(config-if)# ip address 192.168.10.1 255.255.255.0
    Switch(config)# interface Vlan20
    Switch(config-if)# ip address 192.168.20.1 255.255.255.0
    Switch(config)# interface Vlan30
    Switch(config-if)# ip address 192.168.30.1 255.255.255.0
    ```
2.  **Acceso:** Los PCs de Ventas se conectan a puertos asignados a la VLAN 10. El servidor de archivos se conecta a un puerto de la VLAN 30.
3.  **Comunicación:**
    *   Un PC de Ventas puede pinguear al Gateway (192.168.10.1).
    *   Para que Ventas acceda a los Servidores, se debe permitir explícitamente en el switch L3 o en un firewall downstream. Por defecto, el tráfico entre VLANs está denegado por seguridad.
    *   Si se desea que los PCs de Soporte accedan a internet, se configura una ruta por defecto (`ip default-gateway`) hacia el router de borde.

Este enfoque garantiza que, aunque todos estén en el mismo edificio y switch, los datos de Ventas nunca "vean" los datos de Soporte, manteniendo la integridad y el rendimiento de la red.