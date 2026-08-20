# Informática — Seguridad de red: firewall, VPN y cifrado (teoría)

> Tema del MAPA: `informatica/seguridad-de-red-firewall-vpn-cifrado`. Depende de fundamentos de redes (ver `../dependencias.md`).

## Tipo de teoría

**Presentación** — Explicación de cómo se protegen las redes mediante firewalls, conexiones seguras y encriptación.

---

## 1. ¿Qué es un firewall?

Un **firewall** es una herramienta que actúa como una barrera entre una red confiable (como la de una empresa o hogar) y otra no confiable (como Internet). Su función principal es **filtrar el tráfico de datos**, permitiendo solo lo que cumple con reglas predefinidas. Por ejemplo, puede bloquear accesos a ciertos sitios web o restringir comunicaciones desde dispositivos no autorizados. Trabaja inspeccionando cada paquete de datos que entra o sale de la red y decidiendo si debe ser permitido o denegado basándose en criterios como el origen, destino, puerto o tipo de tráfico.

[IMAGEN: Diagrama de un firewall filtrando tráfico entre Internet y una red interna]

---

## 2. ¿Cómo funciona una VPN?

Una **Red Privada Virtual (VPN)** crea un **túnel cifrado** sobre una infraestructura pública como Internet, lo que permite enviar datos de manera segura sin que terceros puedan interceptarlos o leerlos. Este túnel actúa como un "conducto seguro" que encripta toda la información que pasa por él. La VPN es comúnmente usada para acceder a recursos de una red remota (como el trabajo) desde cualquier lugar, protegiendo la identidad del usuario y los datos transmitidos.

[IMAGEN: Esquema de un túnel de conexión segura mediante una VPN]

---

## 3. ¿Por qué es importante el cifrado?

El **cifrado en tránsito** garantiza que, aunque alguien intercepte un paquete de datos mientras viaja por la red (como Internet), no pueda leer su contenido original. Esto se logra mediante algoritmos matemáticos complejos que transforman los datos en un formato ilegible para cualquier persona sin la clave de descifrado. Es esencial en transacciones sensibles, como compras online o acceso a cuentas privadas.

---

## 4. Componentes clave de una conexión segura

Una red protegida combina **múltiples capas** de seguridad:  
- **Firewall**: Controla qué tráfico entra y sale.  
- **Cifrado**: Protege los datos durante su transmisión.  
- **Autenticación**: Verifica la identidad del usuario o dispositivo antes de permitir el acceso.  
- **Protocolos seguros**: Como TLS (usado en HTTPS) o OpenVPN, que aseguran la integridad y confidencialidad del túnel.

Estos elementos trabajan juntos para prevenir accesos no autorizados, ataques externos y pérdida de información crítica.

---

## 5. Conexión con lo que sigue

Este tema se relaciona directamente con ataques ciberneticos, donde se explicarán los métodos utilizados por hackers para vulnerar redes, y con implementacion de sistemas, donde se detallará cómo configurar estas herramientas en entornos reales.