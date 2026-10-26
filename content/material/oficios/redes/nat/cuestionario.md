# Redes — NAT (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Para qué

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Traducir direcciones privadas a una pública para salir a internet", "Cifrar el tráfico", "Acelerar la conexión", "Bloquear sitios"]
respuesta: "Traducir direcciones privadas a una pública para salir a internet"

enunciado: "¿Para qué sirve el NAT?"

explicacion: |
  Permite que muchos equipos compartan una IP pública.
```

### 2 — Privadas

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "basico"
  tags: ["privadas"]

tipo: mc
opciones_explicitas: ["No se enruta: no recibiría respuesta", "Funciona igual", "Se cifra", "Se convierte en pública sola"]
respuesta: "No se enruta: no recibiría respuesta"

enunciado: "¿Qué pasa si una IP privada llega a internet sin NAT?"

explicacion: |
  Las IP privadas no son válidas en internet.
```

### 3 — Escasez

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "basico"
  tags: ["ipv4"]

tipo: mc
opciones_explicitas: ["Porque las direcciones IPv4 públicas no alcanzan para todos los dispositivos", "Porque son caras", "Porque son ilegales", "Por velocidad"]
respuesta: "Porque las direcciones IPv4 públicas no alcanzan para todos los dispositivos"

enunciado: "¿Por qué existe el NAT?"

explicacion: |
  Hay unos 4300 millones de direcciones IPv4.
```

### 4 — PAT

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["pat"]

tipo: mc
opciones_explicitas: ["Por el número de puerto", "Por el color del cable", "Por el nombre", "Por la MAC solamente"]
respuesta: "Por el número de puerto"

enunciado: "¿Cómo se distinguen en el NAT con sobrecarga (PAT) los distintos equipos que comparten una IP pública?"

explicacion: |
  Cada conexión usa un puerto distinto.
```

### 5 — Tabla

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["tabla"]

tipo: mc
opciones_explicitas: ["Una tabla de traducciones", "Una lista de contraseñas", "Un historial", "Un archivo"]
respuesta: "Una tabla de traducciones"

enunciado: "¿Qué guarda el router para devolver las respuestas al equipo correcto?"

explicacion: |
  Relaciona IP y puerto internos con externos.
```

### 6 — Estático

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["estatico"]

tipo: mc
opciones_explicitas: ["Una IP privada asignada siempre a una IP pública fija", "Muchas IP privadas a una pública", "NAT sin reglas", "NAT sin IP"]
respuesta: "Una IP privada asignada siempre a una IP pública fija"

enunciado: "¿Qué es el NAT estático?"

explicacion: |
  Es una relación uno a uno.
```

### 7 — Hogar

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "basico"
  tags: ["hogar"]

tipo: mc
opciones_explicitas: ["PAT: muchos equipos con una IP pública", "Estático", "Sin NAT", "Dinámico con 100 IP"]
respuesta: "PAT: muchos equipos con una IP pública"

enunciado: "¿Qué tipo de NAT usa el router de una casa?"

explicacion: |
  Es el más común.
```

### 8 — Entrantes

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "basico"
  tags: ["entrantes"]

tipo: mc
opciones_explicitas: ["Porque el router no sabe a quién entregar una conexión que nadie inició", "Porque está apagado", "Porque tiene Wi-Fi", "Porque tiene MAC"]
respuesta: "Porque el router no sabe a quién entregar una conexión que nadie inició"

enunciado: "¿Por qué un equipo interno no es accesible desde internet por defecto?"

explicacion: |
  Es una protección incidental, no un firewall.
```

### 9 — Port forwarding

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "basico"
  tags: ["port forwarding"]

tipo: mc
opciones_explicitas: ["Una regla que envía lo que llega a un puerto público hacia un equipo interno", "Cerrar todos los puertos", "Cambiar de proveedor", "Cifrar el puerto"]
respuesta: "Una regla que envía lo que llega a un puerto público hacia un equipo interno"

enunciado: "¿Qué es la redirección de puertos?"

explicacion: |
  Sirve para publicar servicios.
```

### 10 — Ejemplo

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["port forwarding"]

tipo: mc
opciones_explicitas: ["Al equipo 192.168.1.50, puerto 80", "A internet", "Al router", "A ningún lado"]
respuesta: "Al equipo 192.168.1.50, puerto 80"

enunciado: "La regla \"puerto 8080 público → 192.168.1.50:80\" envía las conexiones..."

explicacion: |
  El puerto externo puede diferir del interno.
```

### 11 — Cuidado

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Abrir solo lo necesario, hacia un equipo actualizado y con claves fuertes", "Abrir todo", "Usar claves simples", "Evitar actualizar"]
respuesta: "Abrir solo lo necesario, hacia un equipo actualizado y con claves fuertes"

enunciado: "¿Qué conviene al abrir un puerto?"

explicacion: |
  Un puerto abierto se escanea enseguida.
```

### 12 — Escaneo

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Otros lo escanean y prueban en poco tiempo", "Nadie lo ve", "Solo el proveedor lo ve", "Se cierra solo"]
respuesta: "Otros lo escanean y prueban en poco tiempo"

enunciado: "¿Qué ocurre con un puerto abierto a internet?"

explicacion: |
  Hay escáneres automáticos permanentes.
```

### 13 — VPN

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["vpn"]

tipo: mc
opciones_explicitas: ["Una VPN", "Un cable más largo", "Un hub", "Nada"]
respuesta: "Una VPN"

enunciado: "¿Qué alternativa es más segura que abrir puertos para acceder a la red de casa?"

explicacion: |
  Cifra el acceso y limita lo expuesto.
```

### 14 — No es firewall

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "basico"
  tags: ["firewall"]

tipo: mc
opciones_explicitas: ["No: traduce direcciones, no decide qué tráfico es seguro", "Sí", "Solo en routers caros", "Solo con VLAN"]
respuesta: "No: traduce direcciones, no decide qué tráfico es seguro"

enunciado: "¿Es el NAT un firewall?"

explicacion: |
  El firewall inspecciona y filtra.
```

### 15 — CGNAT

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "avanzado"
  tags: ["cgnat"]

tipo: mc
opciones_explicitas: ["Que el proveedor comparte una misma IP pública entre varios clientes", "Un cable especial", "Un tipo de VPN", "Una IP fija"]
respuesta: "Que el proveedor comparte una misma IP pública entre varios clientes"

enunciado: "¿Qué es el CGNAT?"

explicacion: |
  Con CGNAT no se pueden abrir puertos hacia adentro.
```

### 16 — IPv6

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["ipv6"]

tipo: mc
opciones_explicitas: ["No, porque tiene direcciones de sobra", "Sí, igual que IPv4", "Solo en el hogar", "Solo con VLAN"]
respuesta: "No, porque tiene direcciones de sobra"

enunciado: "¿Necesita NAT IPv6?"

explicacion: |
  Cada dispositivo puede tener una dirección pública.
```

### 17 — Ver IP

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "basico"
  tags: ["ipconfig"]

tipo: mc
opciones_explicitas: ["Con `ipconfig`", "Con `ping`", "Con `cat`", "Con `nslookup` solamente"]
respuesta: "Con `ipconfig`"

enunciado: "¿Cómo se ve la IP privada de un equipo en Windows?"

explicacion: |
  En Linux, `ip a`.
```

### 18 — Doble NAT

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "avanzado"
  tags: ["doble nat"]

tipo: mc
opciones_explicitas: ["Un doble NAT o CGNAT", "Que todo está bien", "Un virus", "Un cable roto"]
respuesta: "Un doble NAT o CGNAT"

enunciado: "La IP pública que ven los sitios es distinta de la WAN del router. ¿Qué indica?"

explicacion: |
  Hay otro equipo que traduce antes de internet.
```

### 19 — Aplicaciones

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "intermedio"
  tags: ["limites"]

tipo: mc
opciones_explicitas: ["Aplicaciones que necesitan conexiones entrantes, como juegos y videollamadas P2P", "Los correos", "La lectura de páginas", "El reloj"]
respuesta: "Aplicaciones que necesitan conexiones entrantes, como juegos y videollamadas P2P"

enunciado: "¿Qué puede complicar el NAT?"

explicacion: |
  Se resuelve con redirección o técnicas de traversal.
```

### 20 — Cifra

```
metadata:
  materia: "redes"
  tema: "nat"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "El NAT cifra el tráfico entre la red interna e internet."

explicacion: |
  Traduce direcciones; no cifra.
```

