### 1 — Estructura de directorios de usuario
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["permisos", "directorios", "home"]
tipo: completar
enunciado: "Al configurar un nuevo entorno Linux hardenizado, se debe asegurar que el directorio home del usuario tenga permisos estrictos para evitar que otros usuarios accedan a sus archivos privados. ¿Cuál es el permiso octal estándar recomendado para el directorio home (/home/usuario)?"
respuesta: "0700"
respuestas_validas:
  - "0700"
  - "700"
pasos:
  - "Identificar el riesgo de acceso no autorizado a datos personales."
  - "Recordar que el bit de permiso para el propietario debe ser rwx (7)."
  - "Recordar que los grupos y otros deben tener permiso cero (0)."
  - "Combinar los valores: 0700."
explicacion: "Los permisos 0700 (o 700) garantizan que solo el propietario pueda leer, escribir y ejecutar en su directorio home, bloqueando el acceso a grupo y otros, lo cual es fundamental en hardening de estaciones de trabajo."
```

### 2 — Blindaje de SSH
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["ssh", "daemon", "configuracion"]
tipo: completar
enunciado: "En el archivo `/etc/ssh/sshd_config`, ¿qué directiva se debe establecer explícitamente a `no` para deshabilitar el inicio de sesión de la cuenta raíz (root) directamente a través de SSH, forzando el uso de `sudo`?"
respuesta: "PermitRootLogin"
respuestas_validas:
  - "PermitRootLogin"
  - "permitrootlogin"
pasos:
  - "Analizar la configuración del daemon SSH."
  - "Identificar la directiva que controla el acceso del usuario root."
  - "Confirmar que el valor debe ser 'no'."
  - "Escribir el nombre exacto de la directiva."
explicacion: "La directiva `PermitRootLogin no` es un pilar del hardening de servidores Linux, ya que elimina el vector de ataque de fuerza bruta contra la cuenta root y audita mejor las acciones mediante sudo."
```

### 3 — Gestión de firewalls iptables
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["firewall", "iptables", "red"]
tipo: completar
enunciado: "Para implementar una política de firewall 'deny by default' en la cadena INPUT de iptables, ¿qué comando se ejecuta para cambiar la política predeterminada a DROP?"
respuesta: "iptables -P INPUT DROP"
respuestas_validas:
  - "iptables -P INPUT DROP"
  - "iptables --policy INPUT DROP"
pasos:
  - "Determinar la necesidad de cerrar puertos no autorizados."
  - "Seleccionar la cadena INPUT para filtrar tráfico entrante."
  - "Elegir la acción DROP para descartar paquetes sin respuesta."
  - "Formular el comando correcto con la bandera -P (policy)."
explicacion: "Establecer la política predeterminada de la cadena INPUT a DROP asegura que cualquier tráfico que no coincida explícitamente con una regla permitida sea descartado, minimizando la superficie de ataque."
```

### 4 — Actualización de kernel
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["kernel", "actualizacion", "vulnerabilidades"]
tipo: vf
enunciado: "En un entorno Linux hardenizado, aplicar las actualizaciones del kernel es la única manera efectiva de parchear vulnerabilidades de tipo 'kernel panic' o escalada de privilegios de nivel 0 (ring 0)."
respuesta: verdadero
pasos:
  - "Analizar el alcance de las vulnerabilidades de kernel."
  - "Verificar si existen parches de usuario-space que las mitiguen."
  - "Concluir que la corrección raíz requiere un nuevo kernel."
  - "Determinar si la afirmación es técnicamente correcta."
explicacion: "Las vulnerabilidades del espacio del kernel requieren una actualización del núcleo (kernel) para ser parcheadas, ya que ocurren en un nivel de privilegio más alto que el espacio de usuario."
```

### 5 — Bloqueo de puertos de depuración
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["puertos", "depuracion", "netcat"]
tipo: completar
enunciado: "El servicio `netcat` (nc) a menudo se usa para pruebas, pero en producción puede ser un vector de ataque. Si se usa `iptables` para bloquear el tráfico entrante en el puerto 4444 (comúnmente asociado a reverse shells), ¿cuál es la regla completa para rechazar explícitamente (REJECT) el tráfico TCP en ese puerto?"
respuesta: "iptables -A INPUT -p tcp --dport 4444 -j REJECT"
respuestas_validas:
  - "iptables -A INPUT -p tcp --dport 4444 -j REJECT"
  - "iptables --append INPUT -p tcp --destination-port 4444 -j REJECT"
pasos:
  - "Identificar el puerto objetivo de la amenaza (4444)."
  - "Seleccionar el protocolo TCP."
  - "Elegir la acción REJECT para notificar al emisor del cierre."
  - "Construir la sintaxis de iptables."
explicacion: "Usar REJECT (en lugar de DROP) para puertos específicos de servicios no deseados puede ayudar en la fase de diagnóstico, pero lo crítico es bloquear el acceso. La sintaxis debe ser precisa para aplicar la regla."
```

### 6 — Prevención de inyección SQL
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["sql", "inyeccion", "aplicaciones"]
tipo: mc
enunciado: "¿Cuál es la técnica de programación más efectiva para prevenir inyecciones SQL en aplicaciones web modernas?"
opciones_explicitas:
  - "Escapar caracteres especiales con backslashes manualmente."
  - "Usar consultas preparadas (prepared statements) con parámetros tipados."
  - "Filtrar la entrada del usuario con expresiones regulares complejas."
  - "Ocultar el código fuente de la base de datos."
respuesta: "Usar consultas preparadas (prepared statements) con parámetros tipados."
pasos:
  - "Evaluar los métodos de sanitización de datos."
  - "Analizar por qué el escaping manual es propenso a errores."
  - "Identificar cómo las consultas preparadas separan lógica de datos."
  - "Seleccionar la opción que garantiza la integridad del esquema SQL."
explicacion: "Las consultas preparadas aseguran que el código SQL y los datos se envíen por separado, impidiendo que el motor de la base de datos interprete datos maliciosos como comandos ejecutables."
```

### 7 — Autenticación multifactor (MFA)
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["mfa", "autenticacion", "pam"]
tipo: completar
enunciado: "En sistemas Linux que utilizan PAM (Pluggable Authentication Modules), ¿qué módulo se configura típicamente para requerir un código TOTP (Time-based One-Time Password) generado por una app móvil antes de permitir el acceso SSH?"
respuesta: "pam_google_authenticator"
respuestas_validas:
  - "pam_google_authenticator"
  - "pam_oath"
pasos:
  - "Identificar la necesidad de añadir una segunda capa de autenticación."
  - "Revisar los módulos PAM disponibles para TOTP."
  - "Seleccionar el módulo estándar de facto para Google Authenticator."
  - "Escribir el nombre exacto del módulo."
explicacion: "El módulo `pam_google_authenticator` (o variantes compatibles como `pam_oath`) permite integrar TOTP con PAM, asegurando que la contraseña sola no sea suficiente para el acceso."
```

### 8 — Hardening de archivos de contraseñas
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["passwd", "shadow", "permisos"]
tipo: completar
enunciado: "Los hashes de contraseñas se almacenan en `/etc/shadow`. ¿Qué permisos de archivo (octal) son estrictamente necesarios para que solo el usuario root pueda leer este archivo y nadie más?"
respuesta: "0640"
respuestas_validas:
  - "0640"
  - "640"
pasos:
  - "Determinar los usuarios que necesitan acceso: root (lectura) y grupo shadow (lectura)."
  - "Definir permisos para otros: ninguno."
  - "Calcular: r-- (4) + w-- (2) = 6 para root."
  - "Calcular: r-- (4) para grupo."
  - "Calcular: --- (0) para otros."
explicacion: "El archivo `/etc/shadow` debe tener permisos 640 (rw-r-----) para permitir que el sistema lea las contraseñas (root) y que los usuarios del grupo `shadow` las procesen, pero bloqueando el acceso a otros usuarios."
```

### 9 — Desactivación de servicios innecesarios
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["systemd", "servicios", "inventario"]
tipo: completar
enunciado: "Para eliminar servicios que no se utilizan en una estación de trabajo Linux hardenizada, se debe detener y deshabilitar el servicio. ¿Cuál es el comando correcto de systemd para deshabilitar el servicio `cups` (impresión) para que no inicie en el boot?"
respuesta: "systemctl disable cups"
respuestas_validas:
  - "systemctl disable cups"
  - "systemctl disable --now cups"
pasos:
  - "Identificar el servicio no esencial (cups)."
  - "Seleccionar la herramienta de gestión de servicios (systemctl)."
  - "Elegir la acción 'disable' para evitar el inicio automático."
  - "Formular el comando."
explicacion: "Deshabilitar servicios innecesarios como CUPS, Bluetooth o Avahi reduce la superficie de ataque al cerrar puertos y procesos que no son requeridos por la función principal del equipo."
```

### 10 — Configuración de umask
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["umask", "permisos", "archivos"]
tipo: completar
enunciado: "Para asegurar que los archivos nuevos creados por un usuario no sean legibles por otros grupos o usuarios por defecto, ¿qué valor de `umask` se debe establecer comúnmente para eliminar permisos de lectura/grupo/otros de archivos nuevos?"
respuesta: "027"
respuestas_validas:
  - "027"
  - "0027"
  - "27"
pasos:
  - "Entender que umask resta permisos al valor base (usualmente 666 para archivos)."
  - "Determinar que se quiere eliminar lectura/grupo/otros (7)."
  - "Calcular la máscara: 027 (elimina grupo/otros, mantiene propietario)."
  - "Verificar que los archivos resultantes sean 640 (rw-r-----)."
explicacion: "Un umask de 027 asegura que los archivos creados tengan permisos 640, bloqueando el acceso a grupo y otros, lo cual es un estándar de hardening para la privacidad de datos."
```

### 11 — Protección contra fuerza bruta SSH (fail2ban)
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["fail2ban", "monitoreo", "automatizacion"]
tipo: completar
enunciado: "Para bloquear automáticamente las direcciones IP que intentan adivinar contraseñas de SSH, se instala `fail2ban`. ¿Qué filtro (filter) específico se configura en el archivo de jail para monitorear los logs de auth.log?"
respuesta: "sshd"
respuestas_validas:
  - "sshd"
  - "sshd-ddos"
pasos:
  - "Identificar el servicio objetivo (SSH)."
  - "Buscar el filtro predefinido en fail2ban que coincide con los logs de sshd."
  - "Seleccionar el nombre del filtro estándar."
  - "Confirmar que el filtro detecta intentos de login fallidos."
explicacion: "El filtro `sshd` en fail2ban analiza `/var/log/auth.log` o `/var/log/secure` para detectar patrones de autenticación fallida y banea la IP origen mediante iptables o nftables."
```

### 12 — Firmado de paquetes (GPG)
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["gpg", "firmas", "integridad"]
tipo: completar
enunciado: "Al descargar un kernel o un paquete crítico de una fuente de terceros, ¿qué comando se usa para verificar la firma GPG del paquete `package.deb` contra la clave pública `key.gpg`?"
respuesta: "gpg --verify package.deb.sig package.deb"
respuestas_validas:
  - "gpg --verify package.deb.sig package.deb"
  - "gpg --verify package.deb.sig"
pasos:
  - "Identificar la necesidad de verificar integridad y origen."
  - "Seleccionar la herramienta criptográfica (gpg)."
  - "Elegir la opción `--verify`."
  - "Especificar el archivo de firma y el archivo de datos."
explicacion: "El comando `gpg --verify` comprueba que el paquete no ha sido alterado y que proviene de la entidad que posee la clave privada correspondiente a la clave pública verificada."
```

### 13 — Hardening de DNS (DoH/DoT)
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["dns", "encriptacion", "resolutor"]
tipo: completar
enunciado: "Para evitar la espionaje de las consultas DNS por parte de ISPs o atacantes en la red local, se debe configurar el resolutor para usar DNS sobre HTTPS (DoH). ¿Qué cliente de DNS moderno en Linux soporta nativamente la configuración de DoH mediante la directiva `DNS=` en `/etc/systemd/resolved.conf`?"
respuesta: "systemd-resolved"
respuestas_validas:
  - "systemd-resolved"
  - "systemd"
pasos:
  - "Identificar el servicio de resolución de nombres en sistemas modernos."
  - "Verificar si soporta DoH nativamente."
  - "Confirmar que `systemd-resolved` es el componente clave."
  - "Escribir el nombre del servicio."
explicacion: "El daemon `systemd-resolved` permite configurar servidores DNS seguros (DoH o DoT) directamente en su configuración, cifrando las consultas de DNS por defecto."
```

### 14 — Bloqueo de USB Storage
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["usb", "dispositivos", "políticas"]
tipo: completar
enunciado: "En un servidor Linux para prevenir la exfiltración de datos mediante memorias USB, se puede bloquear el módulo del kernel `usb_storage`. ¿Qué comando se ejecuta para cargar este módulo con el parámetro `disable=1` o deshabilitarlo completamente?"
respuesta: "modprobe usb_storage disable=1"
respuestas_validas:
  - "modprobe usb_storage disable=1"
  - "modprobe -r usb_storage"
pasos:
  - "Identificar el módulo responsable del montaje de USBs masivos."
  - "Determinar si se puede deshabilitar mediante parámetro o descarga."
  - "Seleccionar la forma de bloquear la funcionalidad al cargar."
  - "Formular el comando modprobe."
explicacion: "Cargar `usb_storage` con `disable=1` impide que el kernel monte dispositivos de almacenamiento USB, mitigando riesgos de robo de datos o introducción de malware."
```

### 15 — Auditoría de logs (auditd)
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["auditd", "logs", "monitoreo"]
tipo: completar
enunciado: "Para monitorear cambios en el archivo de configuración de usuarios `/etc/passwd`, se añade una regla a `auditd`. ¿Qué comando de línea de comandos se usa para añadir esta regla de monitoreo en tiempo real sin editar el archivo de configuración manualmente?"
respuesta: "auditctl -w /etc/passwd -p wa -k passwd_changes"
respuestas_validas:
  - "auditctl -w /etc/passwd -p wa -k passwd_changes"
  - "auditctl -w /etc/passwd -p w -k passwd_changes"
pasos:
  - "Seleccionar la herramienta de auditoría del kernel (auditctl)."
  - "Especificar la ruta del archivo (`-w`)."
  - "Definir los permisos a monitorear (write y attribute) (`-p wa`)."
  - "Asignar una clave de búsqueda (`-k`)."
explicacion: "La regla de `auditd` monitorea escrituras y cambios de atributos en `/etc/passwd`, generando entradas en el log de auditoría para detectar intentos de modificación de usuarios."
```

### 16 — Configuración de contraseñas complejas
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["pam", "password-quality", "criptografia"]
tipo: completar
enunciado: "Para exigir que las nuevas contraseñas en Linux tengan al menos 12 caracteres, no sean diccionario y contengan caracteres de 4 clases (mayúsculas, minúsculas, números, símbolos), ¿qué módulo PAM se integra comúnmente con `libpwquality`?"
respuesta: "pam_pwquality.so"
respuestas_validas:
  - "pam_pwquality.so"
  - "pam_cracklib.so"
pasos:
  - "Identificar la necesidad de validación de fuerza de contraseña."
  - "Buscar el módulo PAM asociado a `libpwquality`."
  - "Confirmar el nombre del archivo del módulo."
  - "Escribir la ruta relativa del módulo."
explicacion: "El módulo `pam_pwquality.so` aplica políticas de complejidad de contraseñas, impidiendo contraseñas débiles o basadas en diccionario durante el cambio de contraseña."
```

### 17 — Prevención de sobrescritura de MBR
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["bootloader", "grub", "proteccion"]
tipo: completar
enunciado: "Para proteger el cargador de arranque GRUB de ser modificado por un atacante con acceso físico o privilegios de usuario, se debe establecer una contraseña de superusuario en el archivo `/etc/grub.d/00_header` o `/etc/grub.d/40_custom`. ¿Qué comando se usa para generar el hash de la contraseña PBKDF2 para GRUB?"
respuesta: "grub-mkpasswd-pbkdf2"
respuestas_validas:
  - "grub-mkpasswd-pbkdf2"
  - "grub2-mkpasswd-pbkdf2"
pasos:
  - "Identificar la necesidad de proteger el menú de GRUB."
  - "Buscar la herramienta oficial de GRUB para generar hashes."
  - "Seleccionar el comando que usa PBKDF2 (estándar actual)."
  - "Escribir el nombre del comando."
explicacion: "El comando `grub-mkpasswd-pbkdf2` genera un hash seguro que se inserta en la configuración de GRUB, requiriendo una contraseña para editar entradas o cambiar al modo de rescate."
```

### 18 — Deshabilitación de IPv6 (si no se usa)
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["ipv6", "red", "minimizacion"]
tipo: completar
enunciado: "En un servidor que solo opera con IPv4 para reducir la superficie de ataque, ¿qué parámetro del kernel se debe establecer en `/etc/sysctl.conf` para deshabilitar completamente el protocolo IPv6?"
respuesta: "net.ipv6.conf.all.disable_ipv6=1"
respuestas_validas:
  - "net.ipv6.conf.all.disable_ipv6=1"
  - "net.ipv6.conf.default.disable_ipv6=1"
pasos:
  - "Identificar la necesidad de eliminar protocolos no usados."
  - "Buscar la variable de sysctl correspondiente a la deshabilitación global."
  - "Seleccionar la clave correcta para todas las interfaces."
  - "Escribir la sintaxis sysctl."
explicacion: "Deshabilitar IPv6 (`net.ipv6.conf.all.disable_ipv6=1`) elimina la necesidad de configurar firewalls para este protocolo y reduce los vectores de ataque asociados a su implementación."
```

### 19 — Hardening de NTP
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["ntp", "tiempo", "amonicion"]
tipo: completar
enunciado: "Para prevenir ataques de amonición (amplification) y manipulación del tiempo en un servidor NTP, se debe configurar `ntpd` para que ignore las consultas de modo broadcast. ¿Qué línea se añade al archivo `/etc/ntp.conf` para restringir el acceso solo a la red local y denegar todo lo demás?"
respuesta: "restrict default nomodify notrap nopeer noquery"
respuestas_validas:
  - "restrict default nomodify notrap nopeer noquery"
  - "restrict default ignore"
pasos:
  - "Identificar el riesgo de usar el servidor NTP como amplificador de ataque."
  - "Buscar la directiva `restrict` en `ntp.conf`."
  - "Seleccionar los flags para denegar modificaciones, traps, peers y consultas."
  - "Escribir la directiva completa."
explicacion: "La directiva `restrict default nomodify notrap nopeer noquery` asegura que el servidor NTP no sea utilizado para ataques de amplificación y solo responda a consultas legítimas si se configuran excepciones específicas."
```

### 20 — Protección de memoria (ASLR)
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["memoria", "aslr", "explotacion"]
tipo: completar
enunciado: "Para mitigar ataques de explotación de memoria que dependen de direcciones fijas (como ROP gadgets), ¿qué valor se debe establecer en `/proc/sys/kernel/randomize_va_space` para habilitar el ASLR completo (Full ASLR) en Linux?"
respuesta: "2"
respuestas_validas:
  - "2"
  - "full"
pasos:
  - "Identificar la necesidad de aleatorizar direcciones de memoria."
  - "Conocer los niveles de ASLR en Linux: 0 (off), 1 (conservative), 2 (full)."
  - "Seleccionar el nivel máximo de protección."
  - "Escribir el valor numérico."
explicacion: "Un valor de 2 en `randomize_va_space` habilita Full ASLR, aleatorizando la ubicación de la pila, el mapeo de memoria compartida y el heap, dificultando enormemente la explotación de vulnerabilidades."
```

### 21 - Eliminación segura de datos
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["disposicion", "datos", "shred"]
tipo: completar
enunciado: "Al dar de baja un disco duro con datos sensibles, el borrado lógico simple no es suficiente. ¿Qué comando se utiliza para sobrescribir el dispositivo `/dev/sdb` con patrones aleatorios múltiples veces para asegurar la recuperación imposible?"
respuesta: "shred -vz -n 3 /dev/sdb"
respuestas_validas:
  - "shred -vz -n 3 /dev/sdb"
  - "shred --verbose --zero --iterations=3 /dev/sdb"
pasos:
  - "Identificar la necesidad de sobrescritura física lógica."
  - "Seleccionar la herramienta `shred`."
  - "Elegir la opción de iteraciones (`-n`) y verificación final (`-z`)."
  - "Formular el comando apuntando al dispositivo."
explicacion: "El comando `shred` sobrescribe el archivo o dispositivo repetidamente, haciendo que los datos originales sean irrecuperables mediante técnicas forenses estándar, a diferencia de un `rm` simple."
```

### 22 - Hardening de NFS
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["nfs", "compartir", "acceso"]
tipo: completar
enunciado: "Al configurar un servidor NFS para compartir directorios sensibles, ¿qué opción de montaje (`mount` o `/etc/exports`) se debe usar para restringir el acceso a la carpeta compartida solo a clientes específicos por IP, en lugar de permitir `*`?"
respuesta: "192.168.1.0/24(rw,sync)"
respuestas_validas:
  - "192.168.1.0/24(rw,sync)"
  - "client_ip(rw,sync)"
pasos:
  - "Identificar la necesidad de restringir el acceso a NFS."
  - "Evitar el uso de `*` (todos)."
  - "Especificar la subred o IP del cliente confiable."
  - "Incluir las opciones de seguridad (rw, sync)."
explicacion: "Especificar la red o IP del cliente en `/etc/exports` garantiza que solo los hosts autorizados puedan montar el sistema de archivos, previniendo accesos no autorizados a datos compartidos."
```

### 23 - Protección contra ataques de tiempo (Timing Attacks)
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["criptografia", "timing", "comparacion"]
tipo: vf
enunciado: "En la comparación de hashes de contraseñas en aplicaciones web, usar el operador de igualdad estándar `==` en lugar de una función de comparación de tiempo constante (como `hash_equals`) puede exponer al sistema a ataques de timing."
respuesta: verdadero
pasos:
  - "Analizar cómo opera el operador `==` en lenguajes como PHP."
  - "Determinar si `==` devuelve el resultado al primer carácter diferente."
  - "Evaluar si esto permite medir el tiempo de respuesta."
  - "Concluir si el riesgo de timing attack es real."
explicacion: "El operador `==` a menudo falla rápido al encontrar una diferencia, permitiendo a un atacante adivinar el hash byte por byte midiendo el tiempo de respuesta. Las funciones de tiempo constante evitan esto."
```

### 24 - Deshabilitación de puertos serial
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["serial", "tty", "acceso-fisico"]
tipo: completar
enunciado: "Para prevenir el acceso físico no autorizado a la consola de un servidor mediante cables seriales o adaptadores USB-Serial, ¿qué línea se debe añadir al archivo `/etc/securetty` para negar el acceso a la terminal `ttyS0`?"
respuesta: "!ttyS0"
respuestas_validas:
  - "!ttyS0"
  - "deny ttyS0"
pasos:
  - "Identificar el archivo que controla los ttys permitidos para root."
  - "Buscar la sintaxis para denegar un tty específico."
  - "Utilizar el prefijo `!` para negación en `securetty`."
  - "Escribir la línea correspondiente."
explicacion: "Añadir `!ttyS0` (o el tty correspondiente) a `/etc/securetty` impide que el usuario root inicie sesión directamente en esa consola, bloqueando un vector de acceso físico directo."
```

### 25 - Actualización de certificados CA
```
metadata:
  materia: "informatica"
  tema: "ciberseguridad-hardening-basico"
  nivel: "avanzado"
  tags: ["tls", "certificados", "confianza"]
tipo: completar
enunciado: "Para asegurar que un servidor Linux confíe solo en autoridades de certificación (CA) actuales y revocadas correctamente, ¿qué paquete de sistema operativo se debe mantener actualizado regularmente para contener la lista de certificados raíz confiables?"
respuesta: "ca-certificates"
respuestas_validas:
  - "ca-certificates"
  - "ca-certificates.crt"
pasos:
  - "Identificar dónde se almacenan las CA de confianza en Linux."
  - "Determinar el paquete que gestiona estos certificados."
  - "Seleccionar el nombre del paquete estándar en distribuciones Debian/Ubuntu y similares."
  - "Escribir el nombre del paquete."
explicacion: "El paquete `ca-certificates` contiene los certificados raíz de confianza. Mantenerlo actualizado es crucial para evitar la confianza en CA comprometidas o revocadas, asegurando la validación TLS correcta."
```