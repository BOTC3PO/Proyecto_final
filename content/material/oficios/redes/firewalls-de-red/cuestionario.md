# Redes — Firewalls de red (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué es

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Permite o bloquea el tráfico según reglas", "Acelera la conexión", "Reemplaza al antivirus", "Asigna direcciones IP"]
respuesta: "Permite o bloquea el tráfico según reglas"

enunciado: "¿Qué hace un firewall?"

explicacion: |
  Se coloca entre redes de distinta confianza.
```

### 2 — Dónde

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "basico"
  tags: ["ubicacion"]

tipo: mc
opciones_explicitas: ["Entre internet y la red interna, o entre zonas internas", "Dentro de un cable", "Solo en un teléfono", "En el monitor"]
respuesta: "Entre internet y la red interna, o entre zonas internas"

enunciado: "¿Dónde se coloca típicamente un firewall?"

explicacion: |
  Separa zonas con distinta confianza.
```

### 3 — Formas

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "basico"
  tags: ["formas"]

tipo: mc
opciones_explicitas: ["El firewall del sistema operativo", "Un cable", "Un teclado", "Un monitor"]
respuesta: "El firewall del sistema operativo"

enunciado: "¿Cuál de estas es una forma de firewall?"

explicacion: |
  También hay aparatos dedicados.
```

### 4 — Sin estado

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "intermedio"
  tags: ["sin estado"]

tipo: mc
opciones_explicitas: ["Las cabeceras de cada paquete por separado (IP, protocolo, puerto)", "El contenido completo", "Las conexiones", "Los archivos"]
respuesta: "Las cabeceras de cada paquete por separado (IP, protocolo, puerto)"

enunciado: "¿Qué mira un firewall de filtrado de paquetes sin estado?"

explicacion: |
  No recuerda conexiones anteriores.
```

### 5 — Con estado

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "intermedio"
  tags: ["stateful"]

tipo: mc
opciones_explicitas: ["Recuerda las conexiones y deja pasar las respuestas a lo que se inició desde adentro", "Cifra todo", "Bloquea todo", "Borra paquetes"]
respuesta: "Recuerda las conexiones y deja pasar las respuestas a lo que se inició desde adentro"

enunciado: "¿Qué agrega un firewall con estado (stateful)?"

explicacion: |
  Es más práctico y seguro.
```

### 6 — Proxy

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "intermedio"
  tags: ["aplicacion"]

tipo: mc
opciones_explicitas: ["Entiende el protocolo (por ejemplo, HTTP) y puede filtrar por contenido", "Solo mira puertos", "Solo mira MAC", "No filtra"]
respuesta: "Entiende el protocolo (por ejemplo, HTTP) y puede filtrar por contenido"

enunciado: "¿Qué hace un firewall de aplicación?"

explicacion: |
  Opera sobre la capa de aplicación.
```

### 7 — Reglas

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "basico"
  tags: ["reglas"]

tipo: mc
opciones_explicitas: ["Origen, destino, protocolo/puerto y acción", "Solo un nombre", "Solo una IP", "Solo una hora"]
respuesta: "Origen, destino, protocolo/puerto y acción"

enunciado: "¿Qué datos tiene una regla de firewall?"

explicacion: |
  La acción puede ser permitir o denegar.
```

### 8 — Orden

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "intermedio"
  tags: ["orden"]

tipo: mc
opciones_explicitas: ["En orden, aplicando la primera que coincide", "Al azar", "Aplicando todas a la vez", "Solo la última"]
respuesta: "En orden, aplicando la primera que coincide"

enunciado: "¿Cómo evalúa las reglas un firewall típico?"

explicacion: |
  Por eso el orden importa.
```

### 9 — Denegar

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "basico"
  tags: ["politica"]

tipo: mc
opciones_explicitas: ["Lo que no está permitido explícitamente, está prohibido", "Todo está permitido", "Nada se prohíbe", "Solo se bloquea el correo"]
respuesta: "Lo que no está permitido explícitamente, está prohibido"

enunciado: "¿Qué es la denegación por defecto?"

explicacion: |
  Es la política más segura.
```

### 10 — Mínimo

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "basico"
  tags: ["minimo privilegio"]

tipo: mc
opciones_explicitas: ["Permitir solo lo estrictamente necesario", "Permitir todo", "Permitir a todos", "Permitir nada nunca"]
respuesta: "Permitir solo lo estrictamente necesario"

enunciado: "¿Qué significa aplicar el mínimo privilegio?"

explicacion: |
  Reduce la superficie de ataque.
```

### 11 — Orden mal

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "avanzado"
  tags: ["orden"]

tipo: mc
opciones_explicitas: ["La específica no se aplica, porque la general coincide primero", "Se aplica la específica", "Se aplican las dos", "Da error"]
respuesta: "La específica no se aplica, porque la general coincide primero"

enunciado: "¿Qué pasa si una regla general \"permitir todo\" está antes que una específica \"denegar el puerto 3389\"?"

explicacion: |
  El orden de las reglas es crítico.
```

### 12 — HTTPS

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "basico"
  tags: ["puertos"]

tipo: mc
opciones_explicitas: ["443", "80", "22", "25"]
respuesta: "443"

enunciado: "¿Qué puerto usa HTTPS?"

explicacion: |
  HTTP usa el 80.
```

### 13 — SSH

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "basico"
  tags: ["puertos"]

tipo: mc
opciones_explicitas: ["22", "80", "3389", "53"]
respuesta: "22"

enunciado: "¿Qué puerto usa SSH?"

explicacion: |
  Es el acceso remoto seguro por consola.
```

### 14 — DNS

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "basico"
  tags: ["puertos"]

tipo: mc
opciones_explicitas: ["53", "22", "443", "3389"]
respuesta: "53"

enunciado: "¿Qué puerto usa DNS?"

explicacion: |
  Resuelve nombres a direcciones IP.
```

### 15 — RDP

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "intermedio"
  tags: ["puertos"]

tipo: mc
opciones_explicitas: ["3389", "22", "80", "53"]
respuesta: "3389"

enunciado: "¿Qué puerto usa el Escritorio remoto de Windows (RDP)?"

explicacion: |
  Dejarlo abierto a internet es riesgoso.
```

### 16 — DMZ

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "basico"
  tags: ["dmz"]

tipo: mc
opciones_explicitas: ["Una red intermedia para servidores que reciben conexiones desde internet", "Una red sin cables", "Un tipo de VPN", "Un cable"]
respuesta: "Una red intermedia para servidores que reciben conexiones desde internet"

enunciado: "¿Qué es una DMZ?"

explicacion: |
  Si se compromete un servidor, no se llega a la red interna.
```

### 17 — Segmentar

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "basico"
  tags: ["segmentacion"]

tipo: mc
opciones_explicitas: ["Limita el daño si un equipo se compromete", "Aumenta la velocidad del Wi-Fi", "Evita el DHCP", "Elimina las contraseñas"]
respuesta: "Limita el daño si un equipo se compromete"

enunciado: "¿Qué beneficio da separar la red en zonas?"

explicacion: |
  Se controla qué zona puede hablar con cuál.
```

### 18 — Alcance

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "basico"
  tags: ["limites"]

tipo: mc
opciones_explicitas: ["No: son medidas complementarias", "Sí, por completo", "Solo en empresas", "Solo con DMZ"]
respuesta: "No: son medidas complementarias"

enunciado: "¿Reemplaza un firewall a las actualizaciones y a las claves fuertes?"

explicacion: |
  La seguridad se compone de varias capas.
```

### 19 — Cifrado

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "intermedio"
  tags: ["cifrado"]

tipo: mc
opciones_explicitas: ["No, salvo con inspección especial", "Sí siempre", "Solo en el hogar", "Solo con NAT"]
respuesta: "No, salvo con inspección especial"

enunciado: "¿Puede un firewall común ver el contenido de tráfico cifrado (HTTPS)?"

explicacion: |
  Ve direcciones y puertos, no el contenido.
```

### 20 — Revisión

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "basico"
  tags: ["mantenimiento"]

tipo: mc
opciones_explicitas: ["Porque las reglas viejas sobran, se olvidan y dejan huecos", "Para ocupar espacio", "Para pagar licencias", "No conviene"]
respuesta: "Porque las reglas viejas sobran, se olvidan y dejan huecos"

enunciado: "¿Por qué conviene revisar y documentar las reglas?"

explicacion: |
  Una regla desconocida es un riesgo.
```

### 21 — Logs

```
metadata:
  materia: "redes"
  tema: "firewalls_de_red"
  nivel: "basico"
  tags: ["logs"]

tipo: mc
opciones_explicitas: ["Para analizar intentos de acceso y diagnosticar problemas", "Para gastar disco", "Para enviar publicidad", "Para nada"]
respuesta: "Para analizar intentos de acceso y diagnosticar problemas"

enunciado: "¿Para qué se registran los bloqueos?"

explicacion: |
  Los registros ayudan a ver qué se bloquea.
```

