# Informática — Direccionamiento IP y DNS (teoría)

> Tema del MAPA: `direccionamiento_ip_dns`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación de cómo las direcciones IP y el DNS permiten la comunicación en internet.

---

## 1. ¿Qué es una dirección IP?

Una **dirección IP** es un identificador numérico único que permite localizar un dispositivo dentro de una red, ya sea local (como una oficina) o global (internet). Su función principal es garantizar que los datos enviados desde un equipo lleguen al lugar correcto.  

Por ejemplo, cuando te conectas a internet, tu computadora recibe una dirección IP temporal asignada por el router de tu hogar o empresa. Esta dirección tiene un formato específico: en **IPv4**, se compone de cuatro números separados por puntos (como `192.168.1.5`), mientras que en **IPv6** se usan combinaciones de letras y números más largas (`2001:db8::1`). La diferencia entre ambas versiones radica en la cantidad de direcciones posibles: IPv4 tiene límites para satisfacer el crecimiento actual de dispositivos conectados, por lo que se adoptó IPv6.  

[IMAGEN: Comparación visual de una dirección IPv4 y una IPv6]

---

## 2. ¿Para qué sirve el DNS?

El **DNS (Domain Name System)** es un servicio que actúa como traductor entre nombres de dominios legibles por humanos (como `google.com`) y direcciones IP usadas por las computadoras. Sin él, los usuarios tendrían que memorizar secuencias numéricas complejas para acceder a sitios web.  

Cuando escribes un nombre de dominio en el navegador, se envía una consulta al servidor DNS más cercano. Este revisa su base de datos o pregunta a otros servidores hasta encontrar la dirección IP asociada al dominio. Luego, esa IP se usa para establecer la conexión con el servidor que aloja el sitio web.  

[IMAGEN: Diagrama del proceso de resolución de DNS]

---

## 3. IPv4 vs. IPv6: ¿En qué difieren?

La principal diferencia entre **IPv4** e **IPv6** no está solo en el tamaño de las direcciones (32 bits vs. 128 bits), sino en su capacidad para acomodar más dispositivos conectados. Mientras que IPv4 permite aproximadamente 4.3 mil millones de direcciones, IPv6 ofrece un espacio prácticamente ilimitado, esencial para la era de Internet de las Cosas (IoT).  

Además, IPv6 incluye mejoras técnicas: elimina la necesidad de encabezados complejos en los paquetes de datos y mejora la seguridad mediante soporte integrado de criptografía. Aunque IPv4 aún se usa ampliamente, su reemplazo por IPv6 es inevitable a largo plazo.

---

## 4. ¿Por qué son importantes estos conceptos?

Entender el direccionamiento IP y el DNS es clave para comprender cómo funciona internet desde el punto de vista técnico. Sin estas herramientas, no sería posible navegar en la web ni comunicarse entre dispositivos en redes globales. Además, su estudio forma la base para temas avanzados como la seguridad de redes, la configuración de servidores o el diseño de infraestructuras digitales.

---

## N. Conexión con lo que sigue

Este tema es fundamental para comprender cómo se estructuran las redes en `../redes_comunicacion/` y cómo se gestionan los accesos en `../seguridad_redes/`.