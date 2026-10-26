# Informática — Redes locales: LAN, Wi-Fi y topologías (teoría)

> Tema propuesto en `../../_plan-faltantes/HUECOS-POR-TITULOS.md` (sin ID en `troncos.md`). Depende de `../direccionamiento-ip-dns/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — los tipos de red, las topologías, los dispositivos y el Wi-Fi son secciones separables.

---

## 1. Qué es una red local

Una **LAN** (*Local Area Network*, red de área local) conecta dispositivos en un espacio limitado: una casa, una escuela, una oficina. Una **WAN** (*Wide Area Network*) conecta redes lejanas entre sí; **Internet** es la WAN más grande, una red de redes. Tu casa tiene una LAN: la computadora, el celular y la televisión se conectan al mismo router, y el router los conecta con Internet.

## 2. Topologías: cómo se conectan los equipos

La **topología** es la forma en que se organizan los enlaces de una red.

- **Bus**: todos comparten un único cable. Es barata, pero si el cable falla cae toda la red.
- **Anillo**: cada equipo se conecta con dos vecinos, formando un círculo.
- **Estrella**: todos se conectan a un dispositivo central (un switch o un punto de acceso). Es la más usada hoy: si falla un equipo, los demás siguen funcionando; si falla el centro, cae la red.
- **Malla**: hay varios caminos entre los equipos; es más cara pero muy tolerante a fallas. Internet se parece a una malla.
- **Árbol**: varias estrellas conectadas entre sí de forma jerárquica.

## 3. Dispositivos de una red local

- **Placa de red (NIC)**: la que conecta cada equipo; tiene una dirección física única, la **dirección MAC**, de 48 bits.
- **Switch**: conecta equipos por cable y envía cada mensaje solo al destinatario, mirando su dirección MAC. Un **hub**, más antiguo, repite todo a todos.
- **Router**: une redes distintas, por ejemplo tu LAN con Internet, y decide por dónde enviar los paquetes (ver `../tcp-ip-capas-enrutamiento/`). El router de casa suele incluir además switch y punto de acceso.
- **Punto de acceso (AP)**: permite conectarse sin cables.
- **Cableado**: lo habitual es el **cable de par trenzado UTP** con conector RJ45 (categorías como Cat5e o Cat6); Ethernet por par trenzado llega hasta unos 100 metros por tramo. La **fibra óptica** usa luz y se usa en tramos largos.

## 4. Ethernet y Wi-Fi

**Ethernet** (estándar IEEE 802.3) es la tecnología de las redes por cable. **Wi-Fi** es el nombre comercial de las redes inalámbricas basadas en la familia **IEEE 802.11**. Las versiones se identifican con letras (802.11n, ac, ax) y también con nombres simples como Wi-Fi 4, Wi-Fi 5 y Wi-Fi 6. Funcionan en bandas de **2,4 GHz y 5 GHz** (Wi-Fi 6E agrega 6 GHz):

- 2,4 GHz: mayor alcance y atraviesa mejor las paredes, pero es más lenta y está más saturada.
- 5 GHz: más velocidad y menos interferencia, pero menor alcance.

Una red Wi-Fi se identifica con su **SSID**, el nombre que ves al buscar redes.

## 5. Direcciones en la LAN

Cada equipo recibe una dirección IP (ver `../direccionamiento-ip-dns/`). En una LAN se usan **direcciones IP privadas**, que no se enrutan en Internet: los rangos 10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16. El servicio **DHCP** del router asigna esas direcciones automáticamente, y el router usa **NAT** para que muchos equipos con IP privada salgan a Internet compartiendo una sola IP pública. Cada red tiene una **puerta de enlace** (*gateway*), el router al que se envía el tráfico que sale de la LAN.

## 6. Seguridad básica del Wi-Fi

Una red inalámbrica se escucha desde afuera, por eso se cifra. Los protocolos actuales son **WPA2** y **WPA3**; **WEP** es obsoleto e inseguro. Conviene usar una contraseña larga y cambiar la clave de administración del router. Si hay invitados, muchos routers permiten una red separada (ver `../seguridad-de-red-firewall-vpn-cifrado/`).

## 7. Problemas frecuentes

- **Sin Internet pero con red local**: puede fallar el router o el proveedor, no la LAN.
- **Wi-Fi lento**: distancia, paredes, interferencia, demasiados equipos o canal saturado.
- **Conflicto de IP**: dos equipos con la misma dirección; DHCP lo evita.

## Conexión con lo que sigue

Conocer la LAN permite entender luego los servidores y los servicios que viven en ella (`../protocolo-http-peticion-respuesta/`) y cómo se protegen (`../seguridad-de-red-firewall-vpn-cifrado/`).
