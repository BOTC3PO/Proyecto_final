# Subnetting: El arte de segmentar redes IP

## Introducción: ¿Por qué dividir es mejor que unificar?

En el mundo de las redes, un **bloque de direcciones IP continuo** (una red grande) rara vez es la solución más eficiente. Imaginá una oficina con 500 empleados, un servidor de archivos, una red para invitados Wi-Fi y una zona de seguridad para cámaras de vigilancia. Si todos comparten la misma subred, el tráfico de las cámaras podría saturar la línea del servidor, o un dispositivo infectado en la red de invitados podría escanear los servidores críticos.

El **subnetting** (o particionamiento de subredes) es la técnica de tomar una red grande (una "superrred" o *network class*) y dividirla en redes más pequeñas y manejables llamadas **subredes**. Esto no solo mejora el rendimiento al reducir el tráfico de difusión (*broadcast*), sino que es fundamental para la seguridad, la administración y la optimización del espacio de direcciones IP.

## Explicación central: Bits de red vs. Bits de host

Para entender cómo funciona, debemos mirar la **máscara de subred**. Una máscara (como `255.255.255.0`) le dice al router qué parte de la dirección IP corresponde a la **red** y qué parte corresponde al **host** (el dispositivo específico).

Cuando hacemos subnetting, estamos "robando" bits de la parte del host para usarlos como bits de red adicionales. Esto cambia la máscara de subred.

### Ejemplo práctico: De /24 a /26

Supongamos que tenemos la red `192.168.1.0/24`.
*   **Máscara:** `255.255.255.0` (8 bits para host).
*   **Total de hosts:** $2^8 - 2 = 254$ hosts utilizables.

Queremos dividir esta red en 4 subredes más pequeñas. Para obtener 4 subredes, necesitamos $\log_2(4) = 2$ bits adicionales.

1.  Tomamos 2 bits de la parte del host.
2.  La nueva máscara es `/26` (24 originales + 2 nuevos).
3.  En notación decimal, `255.255.255.0` se convierte en `255.255.255.192` (los primeros 2 bits del último octeto son 1: `11000000` = 128 + 64 = 192).

**Resultado:**
Ahora tenemos 4 subredes. Cada una tiene $2^6 - 2 = 62$ hosts utilizables (quedan 6 bits para hosts porque originally teníamos 8 y tomamos 2).

*   Subred 1: `192.168.1.0/26` (Hosts: .1 a .62)
*   Subred 2: `192.168.1.64/26` (Hosts: .65 a .126)
*   Subred 3: `192.168.1.128/26` (Hosts: .129 a .190)
*   Subred 4: `192.168.1.192/26` (Hosts: .193 a .254)

> **Nota técnica:** En IPv4 moderno (CIDR), el uso de la subred `0` y la de broadcast final ya no está prohibido, pero siempre debes calcular el rango correcto para evitar conflictos.

## Errores comunes de quien recién aprende

1.  **Olvidar restar 2 hosts:** Siempre recuerda que en cada subred, la **dirección de red** (todas las bits de host a 0) y la **dirección de broadcast** (todas las bits de host a 1) no son asignables a dispositivos. Si calculas $2^n$ sin restar 2, tendrás una dirección "fantasma".
2.  **Confundir la máscara con el número de subredes:** Tener una máscara `/27` no significa que tienes 27 subredes. Significa que 27 bits definen la red. El número de subredes depende de cuántos bits *adicionales* tomaste de la clase base.
3.  **Errores en el "bloqueo" (block size):** Calcular mal el incremento entre subredes. En un `/26`, el incremento es 64 (0, 64, 128, 192). Si usas `/28`, el incremento es 16. Usar el incremento incorrecto hace que las subredes se solapen o dejen huecos inutilizables.

## Cuándo usarlo / Cuándo NO usarlo

**Usa subnetting cuando:**
*   Necesitas aislar tráfico de broadcast para mejorar el rendimiento (una red con miles de hosts sufre mucho por broadcasts).
*   Quieres aplicar políticas de seguridad diferentes (ej. VLANs separadas para VoIP y datos).
*   Tu espacio de direcciones IP es limitado y necesitas reutilizarlo eficientemente (VLSM - *Variable Length Subnet Masking*).

**No fuerces el subnetting excesivo cuando:**
*   La red es pequeña (menos de 30 dispositivos). Añadir complejidad de enrutamiento y configuración de VLANs solo para "cumplir la norma" puede generar errores de configuración innecesarios y dificultar el soporte técnico.
*   No tienes routers o switches de capa 3 configurados correctamente. El subnetting requiere enrutamiento entre subredes; si no hay router, las subredes están aisladas y no se comunican.

## Ejemplo extendido: Diseño de red para una PYME

Imaginá que estás diseñando la red para una empresa pequeña con 3 departamentos: **Ventas** (25 PCs), **Soporte** (10 PCs) y **Servidores** (5 servidores). Además, necesitas una red para **Invitados** (Wi-Fi).

Si usas una sola subred `/24` (`192.168.1.0/24`), todos están en el mismo dominio de broadcast. Si alguien en Ventas hace un broadcast masivo, el servidor de Soporte lo recibe innecesariamente.

**Solución con Subnetting (VLSM):**

1.  **Ventas (25 hosts):** Necesitamos al menos 32 direcciones. El bloque `/27` ($2^5=32$) es perfecto.
    *   Red: `192.168.1.0/27`
    *   Rango: `.1` a `.30`
    *   Broadcast: `.31`

2.  **Soporte (10 hosts):** Necesitamos al menos 16 direcciones. El bloque `/28` ($2^4=16$) es ideal.
    *   Red: `192.168.1.32/28`
    *   Rango: `.33` a `.46`
    *   Broadcast: `.47`

3.  **Servidores (5 hosts):** Necesitamos 8 direcciones. El bloque `/29` ($2^3=8$) es eficiente.
    *   Red: `192.168.1.48/29`
    *   Rango: `.49` a `.54`
    *   Broadcast: `.55`

4.  **Invitados (Ampliable):** Asignamos el resto, digamos `/24` para dar mucho espacio.
    *   Red: `192.168.2.0/24`

**Resultado:** Has ahorrado direcciones IP (no gastaste un `/24` completo para los 5 servidores) y has segmentado el tráfico. Ahora, un firewall puede permitir que Solo y Soporte accedan a Internet, pero bloquear el acceso directo entre Invitados y Servidores, mejorando drásticamente la seguridad y la estabilidad de la red.