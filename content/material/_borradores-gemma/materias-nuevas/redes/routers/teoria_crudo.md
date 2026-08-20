# Routers: El cerebro de la red

En el mundo de la conectividad, el **router** (o enrutador) es el dispositivo fundamental que permite que la información viaje desde un origen hasta un destino a través de distintas redes. Si pensamos en una red doméstica o empresarial como un sistema de correos, las redes son las ciudades y los routers son las oficinas centrales de clasificación donde se decide, por la ruta más eficiente, a dónde enviar cada paquete de datos.

A diferencia de un switch, que conecta dispositivos dentro de la misma red local (LAN) utilizando direcciones MAC, el router opera en la **Capa 3 (Capa de Red)** del modelo OSI. Su función principal es interconectar redes diferentes (por ejemplo, tu red Wi-Fi doméstica con Internet) y tomar decisiones de enrutamiento basándose en direcciones IP.

## Cómo funciona y sintaxis básica

El router lee la dirección IP de destino de un paquete y consulta su **tabla de enrutamiento** para determinar la siguiente "salida" (gateway) por donde debe enviar el dato. En redes más complejas o en dispositivos de nivel empresarial, esta configuración no es automática.

Por ejemplo, en un router Cisco o en un sistema Linux configurado manualmente, se utilizan comandos para definir rutas estáticas. Una ruta estática es una instrucción manual que dice: "Todo lo que vaya hacia la red X, envíalo por el siguiente salto Y".

En un entorno de línea de comandos (CLI) típico de un router Cisco IOS, la sintaxis sería:

```bash
Router(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2
```

Desglose de la sintaxis:
*   `ip route`: Comando para añadir una ruta IPv4.
*   `192.168.2.0`: La red de destino (a dónde queremos llegar).
*   `255.255.255.0`: La máscara de subred (qué parte de la IP define la red).
*   `10.0.0.2`: La dirección IP del siguiente salto (el router vecino por donde debe pasar el dato).

En routers domésticos modernos, esta lógica se aplica automáticamente mediante protocolos dinámicos como **DHCP** (para asignar IPs) y **NAT** (Traducción de Direcciones de Red), que permite que múltiples dispositivos compartan una única IP pública de Internet.

## Errores comunes en principiantes

1.  **Confundir Router con Switch o Access Point:** Muchos usuarios compran un router y lo configuran como un simple switch, o viceversa, intentando conectar dos redes distintas que no se comunican porque falta la capa de enrutamiento. Recuerda: el switch expande la red local; el router conecta redes distintas.
2.  **Ignorar la máscara de subred:** Al configurar manualmente, asumir que una IP es "toda la red" sin definir la máscara correcta provoca que el router no sepa qué direcciones pertenecen a la red local y cuáles deben ser reenviadas a Internet.
3.  **Problemas de NAT y Puertos:** Al intentar acceder remotamente a un dispositivo dentro de la red (como una cámara de seguridad), olvidar que el router oculta las IPs internas bajo una sola IP pública. Sin la configuración adecuada de *Port Forwarding* (reenvío de puertos), el router descartará la conexión entrante.

## Cuándo usarlo y cuándo no

**Usa un router cuando:**
*   Necesitas conectar dos redes con topologías o rangos de IP diferentes (ej. LAN y WAN/Internet).
*   Requieres seguridad perimetral básica (firewall) y filtrado de tráfico entre segmentos.
*   Necesitas asignar direcciones IP automáticamente a muchos dispositivos (función DHCP integrada).

**No lo uses (o no lo uses solo) cuando:**
*   Solo necesitas ampliar la señal Wi-Fi: Usa un *Access Point* o un repetidor. Un router aquí crearía una "doble NAT", complicando la comunicación entre dispositivos y causando problemas con juegos online o impresoras compartidas.
*   El tráfico es puramente local entre dos PCs: Un switch es más eficiente y barato, ya que no necesita procesar decisiones de enrutamiento complejas para datos que ya están en el mismo segmento.

## Ejemplo extendido: Configuración de un hogar inteligente

Imagina que tienes una PC fija (192.168.1.10) y una cámara IP (192.168.1.50) en tu casa. Quieres ver la cámara desde tu trabajo.

1.  **Sin configuración extra:** Tu router tiene la regla predeterminada de que el tráfico entrante desde Internet es bloqueado por seguridad. Aunque tengas la IP pública de tu casa, no sabe hacia dónde enviar los datos de la cámara porque esta está "oculta" detrás del NAT.
2.  **Solución práctica:** Entras a la interfaz web del router (usualmente 192.168.1.1) y configuras un **reenvío de puertos**. Le dices al router: "Cuando llegue un dato al puerto 8080 desde Internet, envíalo a la IP 192.168.1.50".
3.  **Resultado:** El router actúa como puerta de entrada, traduce la dirección pública a la privada de la cámara y permite la conexión. Sin el router gestionando esta tabla de traducción, la comunicación entre tu red local y el mundo exterior sería imposible.