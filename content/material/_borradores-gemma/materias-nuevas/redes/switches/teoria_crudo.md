# Switches de Capa 2: El corazón de la red local moderna

En el ecosistema de las redes de computadoras, el switch (o conmutador) es el dispositivo fundamental que permite la comunicación eficiente dentro de una misma red local (LAN). A diferencia de los antiguos hubs, que enviaban datos a todos los puertos indiscriminadamente, un switch actúa como un intermediario inteligente que dirige el tráfico solo hacia el dispositivo destinatario correcto. Entender cómo operan los switches es el primer paso para diseñar redes escalables, seguras y de alto rendimiento.

### Cómo funciona: Direcciones MAC y la tabla de aprendizaje

El principio básico de operación de un switch estándar es la conmutación de marcos (frames) en la Capa 2 del modelo OSI. Para lograr esto, el switch utiliza direcciones MAC (Media Access Control) de 48 bits, que son identificadores únicos grabados en la tarjeta de red (NIC) de cada dispositivo.

Cuando un switch se enciende, su tabla de mapeo (Forwarding Information Base o FIB) está vacía. El proceso de aprendizaje ocurre de la siguiente manera:

1.  **Aprendizaje:** Cuando un dispositivo envía un frame, el switch lee la dirección MAC de origen y la asocia con el puerto físico por donde entró la señal.
2.  **Conmutación (Forwarding):** Si el switch ya conoce la dirección MAC de destino en su tabla, envía el frame exclusivamente a ese puerto. Esto reduce drásticamente las colisiones y mejora el ancho de banda disponible.
3.  **Difusión (Flooding):** Si la dirección de destino es desconocida o es una dirección de broadcast (como `FF:FF:FF:FF:FF:FF`), el switch envía el frame a todos los puertos activos excepto al de origen.

### Sintaxis y configuración básica en switches gestionables

Aunque la mayoría de los switches de oficina funcionan con configuración por defecto ("plug and play"), los switches gestionables (como los de marcas Cisco, Huawei o MikroTik) permiten ajustes finos. Aquí hay ejemplos reales de comandos comunes en entornos Cisco IOS:

Para verificar el estado de los puertos y la tabla MAC:
```bash
Switch# show mac address-table
Switch# show interfaces status
```

Para asignar un puerto a una VLAN específica (ejemplo: VLAN 10 para departamentos de ventas):
```bash
Switch(config)# interface gigabitEthernet 0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
```

Para desactivar un puerto que no se está usando (medida de seguridad básica):
```bash
Switch(config)# interface gigabitEthernet 0/24
Switch(config-if)# shutdown
```

### Errores comunes en la configuración inicial

Quienes se inician en la administración de switches suelen caer en errores recurrentes que pueden comprometer la estabilidad de la red:

*   **Olvido de la VLAN de administración:** Configurar una VLAN nueva para la gestión y olvidar agregar el puerto de uplink o el puerto de acceso a esa VLAN, quedando el switch inaccesible remotamente.
*   **Ignorar el dominio de broadcast:** Conectar todos los dispositivos en la VLAN 1 (por defecto) en redes grandes. Esto genera "broadcast storms" y saturación innecesaria, ya que cada dispositivo recibe tráfico que no le corresponde.
*   **Desactivar STP (Spanning Tree Protocol) sin saberlo:** En redes con redundancia física, desactivar STP puede causar bucles de capa 2 que colapsan toda la red. A menos que se sepa exactamente lo que se está haciendo, STP debe permanecer activo.

### Cuándo usar un switch y cuándo no

**Usa un switch de capa 2 cuando:**
*   Necesitas segmentar el tráfico dentro de una misma subred IP.
*   Buscas reducir el dominio de colisiones y aumentar el ancho de banda efectivo por puerto.
*   Tu red es pequeña o mediana y no requiere filtrado complejo de paquetes.

**No uses un switch estándar como solución principal cuando:**
*   Necesitas enrutar tráfico entre diferentes subredes (para eso se requiere un router o un switch de capa 3).
*   Intentas conectar directamente dos switches sin definir un trunk (enlace troncal) si usas múltiples VLANs; los puertos deben estar configurados como `trunk` para transportar etiquetas VLAN.
*   Buscas aislamiento de seguridad estricto entre usuarios; para eso necesitas ACLs (Listas de Control de Acceso) o firewalls, no solo conmutación básica.

### Ejemplo extendido: Implementación de una red corporativa básica

Imagina que una pequeña empresa de 20 empleados necesita una red funcional. Tienen un departamento de Finanzas que maneja datos sensibles y uno de Desarrollo.

1.  **Fase 1:** Se instala un switch gestionable de 24 puertos.
2.  **Fase 2:** Se crean dos VLANs: `VLAN 10` para Finanzas y `VLAN 20` para Desarrollo.
3.  **Fase 3:** Se conectan las PC de Finanzas a los puertos 1-10 y se asignan a `VLAN 10`. Las PC de Desarrollo van a los puertos 11-20 y se asignan a `VLAN 20`.
4.  **Resultado:** Aunque todos están conectados al mismo switch físico, el tráfico de Finanzas nunca llega a Desarrollo y viceversa, a menos que se configure un router para permitirlo. Esto mejora la seguridad y el rendimiento, ya que el dominio de broadcast se divide en dos segmentos más pequeños.

Este enfoque demuestra que el switch no solo conecta cables, sino que organiza lógicamente el flujo de información, sentando las bases para futuras expansiones o integración con redes inalámbricas.