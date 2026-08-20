# Hardening Básico: Fundamentos de la Postura de Seguridad

El *hardening* (o endurecimiento) de sistemas no es un producto que se compra, sino un proceso continuo de reducción de la superficie de ataque. Consiste en desactivar, desinstalar o restringir todo aquello que no sea estrictamente necesario para el funcionamiento del servicio, minimizando así los vectores de explotación posibles. En el nivel avanzado, el hardening deja de ser una lista de chequeo genérica para convertirse en una aplicación rigurosa de principios de "mínimo privilegio" y "defensa en profundidad", adaptados a la arquitectura específica de la infraestructura.

## Principios Centrales y Ejecución Técnica

El núcleo del hardening avanzado reside en la eliminación de la complejidad innecesaria y la gestión estricta de la configuración. No se trata solo de poner una contraseña fuerte, sino de asegurar que el sistema operativo, los servicios y las aplicaciones communique solo lo necesario y con los permisos justos.

### 1. Minimización de la Superficie de Ataque
Cada puerto abierto, cada servicio corriendo y cada cuenta de usuario es un potencial punto de entrada.
*   **Desactivación de servicios innecesarios:** En un servidor web Linux, no tiene sentido que `ssh` esté escuchando en todas las interfaces si solo se accede vía VPN, o que `ftp` esté activo si se usa `sftp`. Comandos como `systemctl disable --now <servicio>` son el primer paso.
*   **Gestión de puertos:** Utilizar herramientas como `ss` o `netstat` para auditar qué procesos están expuestos. Un firewall (como `iptables`, `nftables` o `ufw`) debe estar configurado por defecto para denegar (`DROP` o `REJECT`) todo el tráfico entrante y solo permitir el explícitamente requerido.

### 2. Gestión de Usuarios y Privilegios
El error más común es operar como `root` o usar cuentas con privilegios de administrador para tareas cotidianas.
*   **Uso de `sudo` con restricciones:** Configurar `/etc/sudoers` para permitir que un usuario ejecute *solo* comandos específicos sin necesidad de contraseña, o con validación de contraseña. Nunca compartir la cuenta `root` entre usuarios.
*   **Cuentas de servicio:** Los demonios deben correr bajo usuarios de sistema dedicados (`www-data`, `postgres`, etc.) con permisos mínimos sobre sus propios directorios de trabajo, no sobre `/` o `/home`.

### 3. Parcheo y Actualización Automatizada
La vulnerabilidad de día cero (0-day) o la explotación de fallos conocidos (CVEs) es la amenaza más inmediata.
*   **Automatización:** En entornos críticos, las actualizaciones de seguridad deben aplicarse automáticamente tras su aprobación en entornos de prueba. Herramientas como `unattended-upgrades` en Debian/Ubuntu o `dnf-automatic` en RHEL/Fedora son esenciales.
*   **Auditoría de versiones:** Verificar que no se ejecuten versiones de software fuera de soporte (EOL), ya que dejarán de recibir parches de seguridad.

## Errores Comunes en el Hardening

1.  **Confundir hardening con cifrado:** El cifrado protege la confidencialidad en tránsito o en reposo, pero no impide que un atacante explote una vulnerabilidad de ejecución remota (RCE) o un error de configuración. El hardening previene la entrada; el cifrado protege lo que queda.
2.  **Sobrecarga de reglas de firewall:** Crear reglas demasiado permisivas ("permitir desde 0.0.0.0/0") bajo la excusa de la conveniencia, anulando el propósito del firewall.
3.  **Ignorar los logs:** Hardening sin monitorización es ciego. Si no se auditan los intentos de acceso fallido o los cambios en archivos críticos (`/etc/passwd`, `/etc/shadow`), no hay forma de detectar una intrusión en curso.

## Cuándo Usarlo y Trade-offs

El hardening debe aplicarse a **todo** el ciclo de vida del desarrollo y despliegue (DevSecOps), no solo al final. Sin embargo, existe un trade-off real entre **seguridad** y **usabilidad/rendimiento**.
*   **Cuándo NO usarlo en exceso:** Un hardening demasiado agresivo puede romper funcionalidades legítimas o hacer que el sistema sea ingobernable. Por ejemplo, deshabilitar la ejecución de scripts en un servidor de desarrollo puede impedir el flujo de trabajo. La clave es basar las restricciones en un análisis de riesgo: ¿qué valor tiene el activo? ¿cuál es la probabilidad de ataque?
*   **Contexto de uso:** Es crítico en servidores expuestos a Internet (DMZ), bases de datos con información sensible y sistemas que procesan datos personales (GDPR/Habeas Corpus). En entornos aislados o de desarrollo local, el nivel de hardening puede ser menor, pero nunca nulo.

## Ejemplo Extendido: Hardening de un Servidor Web Nginx

Imaginemos un servidor que aloja una aplicación web crítica. El proceso de hardening avanzado incluye:

1.  **Instalación limpia:** Se inicia con un sistema operativo mínimo, sin herramientas de desarrollo (`gcc`, `make`) ni utilidades innecesarias (`telnet`, `ftp`).
2.  **Configuración de Nginx:**
    *   Se oculta la versión del servidor modificando `server_tokens off;` en `nginx.conf` para evitar que un atacante conozca la versión exacta y busque exploits específicos.
    *   Se implementan cabeceras de seguridad HTTP: `X-Frame-Options`, `X-Content-Type-Options`, `Strict-Transport-Security` (HSTS) para forzar HTTPS.
3.  **Aislamiento de procesos:** El proceso de Nginx (`worker processes`) se ejecuta bajo el usuario `www-data`, que no tiene shell interactivo (`/usr/sbin/nologin`) y permisos de lectura solo sobre los archivos de la aplicación y logs.
4.  **Firewall y Red:**
    *   `ufw` se configura para permitir tráfico solo en los puertos 80 (HTTP) y 443 (HTTPS) desde cualquier IP, y el puerto 22 (SSH) solo desde la dirección IP del administrador.
    *   Se deshabilita el reenvío de paquetes (`sysctl net.ipv4.ip_forward=0`) ya que el servidor no actúa como router.
5.  **Auditoría Continua:** Se configura `fail2ban` para bloquear IPs que realicen múltiples intentos fallidos de login SSH o accesos a rutas sensibles. Se activan logs detallados de acceso y error de Nginx, rotados semanalmente, y se envían a un servidor central de SIEM para análisis.

Este enfoque no garantiza la invulnerabilidad, pero eleva significativamente el costo y la complejidad para un atacante, cumpliendo con el objetivo fundamental de la ciberseguridad defensiva.