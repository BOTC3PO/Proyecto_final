# Ciberseguridad — Hardening básico (cuestionario, 30 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Hardening

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Reducir la superficie de ataque quitando o configurando lo innecesario o inseguro", "Agregar más programas", "Acelerar el equipo", "Cambiar el diseño"]
respuesta: "Reducir la superficie de ataque quitando o configurando lo innecesario o inseguro"

enunciado: "¿Qué es el hardening?"

explicacion: |
  Cada función extra es una posible puerta.
```

### 2 — Superficie

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["superficie"]

tipo: mc
opciones_explicitas: ["El conjunto de puntos por los que se puede atacar", "La pantalla", "El tamaño del disco", "Un tipo de virus"]
respuesta: "El conjunto de puntos por los que se puede atacar"

enunciado: "¿Qué es la superficie de ataque?"

explicacion: |
  Se reduce quitando lo innecesario.
```

### 3 — Mínimo

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["privilegio"]

tipo: mc
opciones_explicitas: ["Dar solo los permisos necesarios", "Dar todos los permisos", "No dar permisos", "Dar permisos a todos"]
respuesta: "Dar solo los permisos necesarios"

enunciado: "¿Qué significa el mínimo privilegio?"

explicacion: |
  Reduce el daño ante un error o un ataque.
```

### 4 — Por defecto

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["defecto"]

tipo: mc
opciones_explicitas: ["Se cambian", "Se dejan", "Se publican", "Se comparten"]
respuesta: "Se cambian"

enunciado: "¿Qué se hace con las claves y configuraciones de fábrica?"

explicacion: |
  Las de fábrica son conocidas.
```

### 5 — Actualizaciones

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["actualizaciones"]

tipo: mc
opciones_explicitas: ["Porque se corrigen fallas ya conocidas que los atacantes explotan", "Por moda", "Por el diseño", "Por costumbre"]
respuesta: "Porque se corrigen fallas ya conocidas que los atacantes explotan"

enunciado: "¿Por qué se actualiza el software?"

explicacion: |
  Los equipos sin parches son un blanco fácil.
```

### 6 — Sin soporte

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["soporte"]

tipo: mc
opciones_explicitas: ["Ya no recibe parches de seguridad", "Es más rápido", "Es más seguro", "Ninguno"]
respuesta: "Ya no recibe parches de seguridad"

enunciado: "¿Qué riesgo tiene un sistema operativo sin soporte?"

explicacion: |
  Se reemplaza.
```

### 7 — Firmware

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["firmware"]

tipo: mc
opciones_explicitas: ["El firmware de routers, cámaras y otros dispositivos", "Nada", "El monitor", "Las fotos"]
respuesta: "El firmware de routers, cámaras y otros dispositivos"

enunciado: "¿Qué más se actualiza además del sistema y las aplicaciones?"

explicacion: |
  Muchas veces se olvida.
```

### 8 — Fuentes

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["fuentes"]

tipo: mc
opciones_explicitas: ["De fuentes oficiales", "De cualquier sitio", "De correos", "De foros"]
respuesta: "De fuentes oficiales"

enunciado: "¿De dónde conviene descargar software?"

explicacion: |
  Y verificar su integridad.
```

### 9 — Cuentas

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["cuentas"]

tipo: mc
opciones_explicitas: ["Una sin privilegios de administrador", "La de administrador", "Una compartida", "Una sin clave"]
respuesta: "Una sin privilegios de administrador"

enunciado: "¿Qué cuenta se usa para el trabajo diario?"

explicacion: |
  Se eleva solo cuando hace falta.
```

### 10 — Invitado

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["cuentas"]

tipo: mc
opciones_explicitas: ["Se eliminan o desactivan", "Se dejan", "Se comparten", "Se publican"]
respuesta: "Se eliminan o desactivan"

enunciado: "¿Qué se hace con las cuentas sin uso?"

explicacion: |
  Son puertas olvidadas.
```

### 11 — UAC

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["uac"]

tipo: mc
opciones_explicitas: ["Piden confirmación para acciones privilegiadas", "Cifran", "Hacen copias", "Borran virus"]
respuesta: "Piden confirmación para acciones privilegiadas"

enunciado: "¿Qué hacen UAC y `sudo`?"

explicacion: |
  No se deshabilitan.
```

### 12 — Servicios

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["servicios"]

tipo: mc
opciones_explicitas: ["Se desactivan o desinstalan", "Se dejan activos", "Se exponen", "Se duplican"]
respuesta: "Se desactivan o desinstalan"

enunciado: "¿Qué se hace con los servicios que no se usan?"

explicacion: |
  Menos servicios, menos riesgo.
```

### 13 — Cifrados

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["protocolos"]

tipo: mc
opciones_explicitas: ["SSH", "FTP", "HTTP", "SMTP"]
respuesta: "SSH"

enunciado: "¿Qué protocolo reemplaza al inseguro Telnet?"

explicacion: |
  Cifra la conexión.
```

### 14 — RDP

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "intermedio"
  tags: ["rdp"]

tipo: mc
opciones_explicitas: ["Sin exponerlo directamente a internet; con VPN y MFA", "Abierto a internet", "Sin clave", "Con clave simple"]
respuesta: "Sin exponerlo directamente a internet; con VPN y MFA"

enunciado: "¿Cómo conviene usar el escritorio remoto (RDP)?"

explicacion: |
  Es un objetivo frecuente de ataques.
```

### 15 — Firewall

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["firewall"]

tipo: mc
opciones_explicitas: ["Denegar por defecto", "Permitir todo", "Desactivarlo", "Permitir por defecto"]
respuesta: "Denegar por defecto"

enunciado: "¿Qué política de firewall es la más segura?"

explicacion: |
  Solo se permite lo necesario.
```

### 16 — Router

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["router"]

tipo: mc
opciones_explicitas: ["WPS y la administración remota", "El Wi-Fi", "El firewall", "El DHCP"]
respuesta: "WPS y la administración remota"

enunciado: "¿Qué se desactiva en un router doméstico?"

explicacion: |
  Si no hacen falta.
```

### 17 — Wi-Fi

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["wifi"]

tipo: mc
opciones_explicitas: ["WPA2 o WPA3, con clave larga", "WEP", "Abierta", "Sin clave"]
respuesta: "WPA2 o WPA3, con clave larga"

enunciado: "¿Qué seguridad conviene en el Wi-Fi?"

explicacion: |
  WEP es débil.
```

### 18 — Invitados

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["invitados"]

tipo: mc
opciones_explicitas: ["Para aislar a las visitas y dispositivos poco confiables", "Para cobrar", "Para acelerar", "Para ocultar"]
respuesta: "Para aislar a las visitas y dispositivos poco confiables"

enunciado: "¿Para qué sirve una red de invitados?"

explicacion: |
  Limita el acceso a equipos importantes.
```

### 19 — VPN

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["vpn"]

tipo: mc
opciones_explicitas: ["Al conectarse desde redes públicas", "Nunca", "Solo en casa", "Solo en el trabajo"]
respuesta: "Al conectarse desde redes públicas"

enunciado: "¿Cuándo conviene usar una VPN?"

explicacion: |
  Cifra el tráfico.
```

### 20 — Cifrado

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["cifrado"]

tipo: mc
opciones_explicitas: ["Para que los datos sigan protegidos si se pierde o roba el equipo", "Para acelerar", "Para ahorrar espacio", "Para limpiar virus"]
respuesta: "Para que los datos sigan protegidos si se pierde o roba el equipo"

enunciado: "¿Para qué sirve el cifrado de disco?"

explicacion: |
  BitLocker, FileVault, LUKS.
```

### 21 — 3-2-1

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["backup"]

tipo: mc
opciones_explicitas: ["3 copias, 2 tipos de soporte, 1 fuera del lugar", "1 copia en 3 lugares", "2 copias en 1 disco", "3 copias en un disco"]
respuesta: "3 copias, 2 tipos de soporte, 1 fuera del lugar"

enunciado: "¿Qué propone la regla de copias 3-2-1?"

explicacion: |
  Y probar la restauración.
```

### 22 — Probar

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["backup"]

tipo: mc
opciones_explicitas: ["Probar la restauración", "Nada", "Borrarlas", "Cifrarlas sin clave"]
respuesta: "Probar la restauración"

enunciado: "¿Qué se debe hacer con las copias de seguridad?"

explicacion: |
  Una copia que no se restaura no sirve.
```

### 23 — Borrado

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["borrado"]

tipo: mc
opciones_explicitas: ["Borrado seguro de los datos", "Nada", "Formatear rápido", "Dejarlo"]
respuesta: "Borrado seguro de los datos"

enunciado: "¿Qué conviene antes de vender o desechar un equipo?"

explicacion: |
  El borrado común puede recuperarse.
```

### 24 — Antivirus

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["antivirus"]

tipo: mc
opciones_explicitas: ["Mantenerlo activo y actualizado", "Desactivarlo", "Ignorarlo", "Compartirlo"]
respuesta: "Mantenerlo activo y actualizado"

enunciado: "¿Qué debe hacer con el antivirus?"

explicacion: |
  No reemplaza el criterio.
```

### 25 — Adjuntos

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["malware"]

tipo: mc
opciones_explicitas: ["No abrirlos", "Abrirlos siempre", "Reenviarlos", "Guardarlos"]
respuesta: "No abrirlos"

enunciado: "¿Qué hacer con adjuntos y enlaces de origen desconocido?"

explicacion: |
  Son un vector frecuente de malware.
```

### 26 — Pendrives

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["usb"]

tipo: mc
opciones_explicitas: ["No conectarlo", "Probarlo", "Conectarlo sin mirar", "Prestarlo"]
respuesta: "No conectarlo"

enunciado: "¿Qué hacer con un pendrive desconocido?"

explicacion: |
  Puede traer malware.
```

### 27 — Registros

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["logs"]

tipo: mc
opciones_explicitas: ["Para detectar y analizar problemas e intentos de ataque", "Para gastar espacio", "Para ver videos", "Para cifrar"]
respuesta: "Para detectar y analizar problemas e intentos de ataque"

enunciado: "¿Para qué se activan los registros (logs)?"

explicacion: |
  Se revisan periódicamente.
```

### 28 — Hora

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "intermedio"
  tags: ["ntp"]

tipo: mc
opciones_explicitas: ["Para poder correlacionar eventos entre sistemas", "Por estética", "Por costumbre", "Para acelerar"]
respuesta: "Para poder correlacionar eventos entre sistemas"

enunciado: "¿Por qué se sincroniza la hora (NTP)?"

explicacion: |
  Los registros necesitan la hora correcta.
```

### 29 — CIS

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "intermedio"
  tags: ["cis"]

tipo: mc
opciones_explicitas: ["Guías de configuración segura paso a paso", "Un antivirus", "Un virus", "Un lenguaje"]
respuesta: "Guías de configuración segura paso a paso"

enunciado: "¿Qué son los CIS Benchmarks?"

explicacion: |
  Hay una por sistema.
```

### 30 — Equilibrio

```
metadata:
  materia: "ciberseguridad"
  tema: "hardening_basico"
  nivel: "basico"
  tags: ["equilibrio"]

tipo: mc
opciones_explicitas: ["Hace al sistema menos seguro", "Lo hace más seguro", "Nada", "Lo acelera"]
respuesta: "Hace al sistema menos seguro"

enunciado: "¿Qué ocurre con una medida tan molesta que la gente la evade?"

explicacion: |
  Hay que equilibrar seguridad y comodidad.
```

