# Redes — Diagnóstico de redes por casos (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Método

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Por capas, de abajo hacia arriba, descartando de a una cosa", "Cambiando todo", "Reiniciando todo siempre", "Culpando al proveedor"]
respuesta: "Por capas, de abajo hacia arriba, descartando de a una cosa"

enunciado: "¿Cómo se diagnostica un problema de red?"

explicacion: |
  Primero lo físico, luego IP, DNS y aplicación.
```

### 2 — Primero

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["fisico"]

tipo: mc
opciones_explicitas: ["Lo físico: cable, luces, Wi-Fi", "El DNS", "El firewall", "La aplicación"]
respuesta: "Lo físico: cable, luces, Wi-Fi"

enunciado: "¿Qué se revisa primero?"

explicacion: |
  Un cable desconectado explica muchos problemas.
```

### 3 — Ipconfig

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["ipconfig"]

tipo: mc
opciones_explicitas: ["IP, máscara, gateway y DNS del equipo", "Los virus", "La velocidad", "Las contraseñas"]
respuesta: "IP, máscara, gateway y DNS del equipo"

enunciado: "¿Qué muestra `ipconfig /all`?"

explicacion: |
  En Linux, `ip a`.
```

### 4 — Loopback

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["ping"]

tipo: mc
opciones_explicitas: ["Que funciona la pila de red del propio equipo", "Que hay internet", "Que el router anda", "Que el DNS responde"]
respuesta: "Que funciona la pila de red del propio equipo"

enunciado: "¿Qué comprueba `ping 127.0.0.1`?"

explicacion: |
  No sale a la red.
```

### 5 — Gateway

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["ping"]

tipo: mc
opciones_explicitas: ["Que el equipo llega al router de su red", "Que hay internet", "Que el DNS funciona", "Que el servidor web anda"]
respuesta: "Que el equipo llega al router de su red"

enunciado: "¿Qué comprueba `ping` al gateway?"

explicacion: |
  Si falla, el problema está en la red local.
```

### 6 — 8.8.8.8

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["ping"]

tipo: mc
opciones_explicitas: ["Que hay salida a internet por IP, sin depender del DNS", "El DNS", "El Wi-Fi", "La VLAN"]
respuesta: "Que hay salida a internet por IP, sin depender del DNS"

enunciado: "¿Qué comprueba `ping 8.8.8.8`?"

explicacion: |
  Es una dirección pública conocida.
```

### 7 — Ping por nombre

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["dns"]

tipo: mc
opciones_explicitas: ["El DNS", "El cable", "El gateway", "La máscara"]
respuesta: "El DNS"

enunciado: "Funciona `ping 8.8.8.8` pero no `ping www.ejemplo.com`. ¿Qué falla?"

explicacion: |
  Hay salida por IP, pero no se resuelven nombres.
```

### 8 — 169.254

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["dhcp"]

tipo: mc
opciones_explicitas: ["Que no respondió el servidor DHCP", "Que está en internet", "Que es el servidor", "Que hay un virus"]
respuesta: "Que no respondió el servidor DHCP"

enunciado: "Un equipo tiene IP `169.254.x.x`. ¿Qué indica?"

explicacion: |
  Es una dirección autoasignada.
```

### 9 — No llega al gateway

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["gateway"]

tipo: mc
opciones_explicitas: ["Máscara y gateway, VLAN del puerto, cable y filtros", "El DNS", "El navegador", "La caché"]
respuesta: "Máscara y gateway, VLAN del puerto, cable y filtros"

enunciado: "Tiene IP pero no llega a su gateway. ¿Qué se revisa?"

explicacion: |
  Es un problema de la red local.
```

### 10 — No sale

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["router"]

tipo: mc
opciones_explicitas: ["En el router, el proveedor o la ruta por defecto", "En el cable del equipo", "En el teclado", "En el DNS"]
respuesta: "En el router, el proveedor o la ruta por defecto"

enunciado: "Llega al gateway pero no a `8.8.8.8`. ¿Dónde está el problema?"

explicacion: |
  El tramo local funciona.
```

### 11 — Tracert

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["tracert"]

tipo: mc
opciones_explicitas: ["Que el problema está a partir de ese punto", "Que el equipo está roto", "Que el DNS falla", "Que hay un virus"]
respuesta: "Que el problema está a partir de ese punto"

enunciado: "¿Qué indica `tracert` cuando se corta en el salto 3?"

explicacion: |
  Muestra hasta dónde llegan los paquetes.
```

### 12 — Nslookup

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["nslookup"]

tipo: mc
opciones_explicitas: ["Para consultar el DNS y ver a qué IP corresponde un nombre", "Para ver la velocidad", "Para cambiar la IP", "Para cifrar"]
respuesta: "Para consultar el DNS y ver a qué IP corresponde un nombre"

enunciado: "¿Para qué sirve `nslookup`?"

explicacion: |
  En Linux también `dig`.
```

### 13 — Puertos

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["netstat"]

tipo: mc
opciones_explicitas: ["`netstat -an` o `ss -tulpn`", "`ping`", "`ipconfig`", "`tracert`"]
respuesta: "`netstat -an` o `ss -tulpn`"

enunciado: "¿Qué herramienta muestra los puertos abiertos y conexiones del equipo?"

explicacion: |
  Sirve para ver si un servicio está escuchando.
```

### 14 — Conflicto

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["ip"]

tipo: mc
opciones_explicitas: ["Una IP fija igual a otra asignada por DHCP", "Un cable largo", "Un DNS caído", "Un firewall"]
respuesta: "Una IP fija igual a otra asignada por DHCP"

enunciado: "\"Conflicto de IP\". ¿Cuál es una causa frecuente?"

explicacion: |
  Las IP fijas deben estar fuera del rango del DHCP.
```

### 15 — Servicio publicado

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["port forwarding"]

tipo: mc
opciones_explicitas: ["Redirección de puertos, firewall, CGNAT y que el servicio esté activo", "El color del router", "La hora", "El teclado"]
respuesta: "Redirección de puertos, firewall, CGNAT y que el servicio esté activo"

enunciado: "Un servicio publicado en casa no responde desde afuera. ¿Qué se revisa?"

explicacion: |
  Con CGNAT no se pueden abrir puertos.
```

### 16 — Otra VLAN

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["vlan"]

tipo: mc
opciones_explicitas: ["El enrutamiento entre VLAN y las reglas", "El Wi-Fi", "El teclado", "El monitor"]
respuesta: "El enrutamiento entre VLAN y las reglas"

enunciado: "Un equipo de otra VLAN no responde. ¿Qué se revisa?"

explicacion: |
  Son redes distintas y necesitan capa 3.
```

### 17 — Wi-Fi

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["wifi"]

tipo: mc
opciones_explicitas: ["Señal débil, interferencias y canal saturado", "La contraseña del correo", "El teclado", "El DNS"]
respuesta: "Señal débil, interferencias y canal saturado"

enunciado: "El Wi-Fi cae a ratos. ¿Qué se revisa?"

explicacion: |
  Se prueba acercándose o cambiando de canal.
```

### 18 — Lento

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["lento"]

tipo: mc
opciones_explicitas: ["Saturación, mala señal o un equipo que consume todo el ancho de banda", "Un archivo con nombre largo", "El color del cable", "El reloj"]
respuesta: "Saturación, mala señal o un equipo que consume todo el ancho de banda"

enunciado: "La conexión está lenta. ¿Qué causa es posible?"

explicacion: |
  Se mide y se comparan equipos.
```

### 19 — Ping bloqueado

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["ping"]

tipo: mc
opciones_explicitas: ["No necesariamente: puede bloquear el ping", "Sí siempre", "Solo en Windows", "Solo con VPN"]
respuesta: "No necesariamente: puede bloquear el ping"

enunciado: "Un servidor no responde al `ping`. ¿Significa que está caído?"

explicacion: |
  Hay que probar el servicio con otra herramienta (`curl`, por ejemplo).
```

### 20 — Qué cambió

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["¿Qué cambió desde la última vez que funcionó?", "¿De qué color es?", "¿Cuánto cuesta?", "¿Quién lo compró?"]
respuesta: "¿Qué cambió desde la última vez que funcionó?"

enunciado: "¿Qué pregunta es útil al diagnosticar?"

explicacion: |
  Muchas fallas coinciden con un cambio reciente.
```

### 21 — Documentar

```
metadata:
  materia: "redes"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["documentacion"]

tipo: mc
opciones_explicitas: ["Porque agiliza el diagnóstico y evita errores", "Para llenar espacio", "Para decorar", "No conviene"]
respuesta: "Porque agiliza el diagnóstico y evita errores"

enunciado: "¿Por qué conviene documentar el esquema de la red?"

explicacion: |
  Direcciones, VLAN, equipos y reglas deben estar anotados.
```

