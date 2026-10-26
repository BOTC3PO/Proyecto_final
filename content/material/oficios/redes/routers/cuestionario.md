# Redes — Routers (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué hace

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Conecta redes distintas y decide por dónde enviar los paquetes IP", "Conecta equipos de una misma red", "Cifra el correo", "Almacena archivos"]
respuesta: "Conecta redes distintas y decide por dónde enviar los paquetes IP"

enunciado: "¿Qué hace un router?"

explicacion: |
  Trabaja en la capa 3.
```

### 2 — Capa

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["capa"]

tipo: mc
opciones_explicitas: ["Capa 3 (red), con direcciones IP", "Capa 1", "Capa 2 solamente", "Capa 7"]
respuesta: "Capa 3 (red), con direcciones IP"

enunciado: "¿En qué capa trabaja un router?"

explicacion: |
  El switch trabaja con MAC en la capa 2.
```

### 3 — Gateway

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["gateway"]

tipo: mc
opciones_explicitas: ["La dirección del router en su red, por donde sale el tráfico hacia otras redes", "El servidor web", "El DNS", "La máscara"]
respuesta: "La dirección del router en su red, por donde sale el tráfico hacia otras redes"

enunciado: "¿Qué es el gateway de un equipo?"

explicacion: |
  Es la salida de la red local.
```

### 4 — Broadcast

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "intermedio"
  tags: ["broadcast"]

tipo: mc
opciones_explicitas: ["No los reenvía", "Los reenvía a todos", "Los cifra", "Los cuenta"]
respuesta: "No los reenvía"

enunciado: "¿Qué pasa con los broadcast al llegar a un router?"

explicacion: |
  Por eso separa los dominios de difusión.
```

### 5 — Aparato casero

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["casa"]

tipo: mc
opciones_explicitas: ["Varios aparatos en uno: router, switch, Wi-Fi, DHCP, NAT y firewall básico", "Solo un cable", "Solo un switch", "Solo una antena"]
respuesta: "Varios aparatos en uno: router, switch, Wi-Fi, DHCP, NAT y firewall básico"

enunciado: "El \"router\" que da el proveedor de internet en una casa, ¿qué suele ser?"

explicacion: |
  Cumple muchas funciones a la vez.
```

### 6 — Tabla

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["tabla"]

tipo: mc
opciones_explicitas: ["Rutas: a qué red enviar por qué interfaz o siguiente salto", "Contraseñas", "Páginas visitadas", "Fotos"]
respuesta: "Rutas: a qué red enviar por qué interfaz o siguiente salto"

enunciado: "¿Qué contiene la tabla de enrutamiento?"

explicacion: |
  El router la consulta con cada paquete.
```

### 7 — Ruta por defecto

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "intermedio"
  tags: ["ruta por defecto"]

tipo: mc
opciones_explicitas: ["Lo que no se sabe adónde va se envía por ahí", "Bloquear todo", "Enviar a la propia red", "Borrar el paquete"]
respuesta: "Lo que no se sabe adónde va se envía por ahí"

enunciado: "¿Qué significa la ruta por defecto `0.0.0.0/0`?"

explicacion: |
  Normalmente apunta hacia el proveedor de internet.
```

### 8 — Estática

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["estatica"]

tipo: mc
opciones_explicitas: ["Una ruta escrita a mano por el administrador", "Una ruta aprendida automáticamente", "Una ruta que cambia sola", "Un cable fijo"]
respuesta: "Una ruta escrita a mano por el administrador"

enunciado: "¿Qué es una ruta estática?"

explicacion: |
  Las dinámicas se aprenden con protocolos.
```

### 9 — Más específica

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "avanzado"
  tags: ["prefijo"]

tipo: mc
opciones_explicitas: ["La `/24`, por ser más específica", "La `/16`", "La primera que se escribió", "Ninguna"]
respuesta: "La `/24`, por ser más específica"

enunciado: "Si hay rutas `/24` y `/16` para la misma dirección, ¿cuál se usa?"

explicacion: |
  Se elige el prefijo más largo.
```

### 10 — Destino local

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "intermedio"
  tags: ["envio"]

tipo: mc
opciones_explicitas: ["Lo envía directamente, sin pasar por el router", "Lo envía siempre al router", "Lo descarta", "Lo envía a internet"]
respuesta: "Lo envía directamente, sin pasar por el router"

enunciado: "Un equipo quiere enviar un paquete a otro de su misma red. ¿Qué hace?"

explicacion: |
  Compara el destino con su propia red usando la máscara.
```

### 11 — Destino remoto

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["envio"]

tipo: mc
opciones_explicitas: ["Al gateway", "Al DNS", "A cualquier equipo", "A la impresora"]
respuesta: "Al gateway"

enunciado: "Si el destino está en otra red, ¿a dónde envía el equipo el paquete?"

explicacion: |
  El router continúa el trayecto.
```

### 12 — Qué cambia

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "avanzado"
  tags: ["saltos"]

tipo: mc
opciones_explicitas: ["Las MAC (las IP de origen y destino se mantienen, salvo NAT)", "Las IP de origen y destino", "Nada", "Todo"]
respuesta: "Las MAC (las IP de origen y destino se mantienen, salvo NAT)"

enunciado: "En cada salto, ¿qué direcciones cambian?"

explicacion: |
  Cada tramo de la red tiene sus propias MAC.
```

### 13 — TTL

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "intermedio"
  tags: ["ttl"]

tipo: mc
opciones_explicitas: ["Para evitar que circule indefinidamente: baja uno en cada router y se descarta al llegar a 0", "Para cifrar", "Para medir el ancho de banda", "Para elegir la ruta"]
respuesta: "Para evitar que circule indefinidamente: baja uno en cada router y se descarta al llegar a 0"

enunciado: "¿Para qué sirve el TTL de un paquete IP?"

explicacion: |
  Evita bucles de enrutamiento.
```

### 14 — Traceroute

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["traceroute"]

tipo: mc
opciones_explicitas: ["Los routers (saltos) por los que pasa un paquete hasta su destino", "La velocidad de internet", "La clave Wi-Fi", "Los virus"]
respuesta: "Los routers (saltos) por los que pasa un paquete hasta su destino"

enunciado: "¿Qué muestra `traceroute` (`tracert` en Windows)?"

explicacion: |
  Es una herramienta de diagnóstico.
```

### 15 — Configuración

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["config"]

tipo: mc
opciones_explicitas: ["IP, máscara, gateway y DNS", "Solo IP", "Solo DNS", "Solo gateway"]
respuesta: "IP, máscara, gateway y DNS"

enunciado: "¿Qué necesita un equipo para funcionar en una red con acceso a internet?"

explicacion: |
  Normalmente los entrega el DHCP.
```

### 16 — DHCP

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["dhcp"]

tipo: mc
opciones_explicitas: ["Entrega automáticamente la configuración de red a los equipos", "Cifra el Wi-Fi", "Traduce nombres", "Bloquea sitios"]
respuesta: "Entrega automáticamente la configuración de red a los equipos"

enunciado: "¿Qué hace el DHCP?"

explicacion: |
  Evita configurar a mano cada equipo.
```

### 17 — IP fija

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "intermedio"
  tags: ["ip fija"]

tipo: mc
opciones_explicitas: ["En servidores e impresoras, fuera del rango que reparte el DHCP", "En todos los celulares", "En ningún equipo", "Dentro del rango del DHCP, sin reservar"]
respuesta: "En servidores e impresoras, fuera del rango que reparte el DHCP"

enunciado: "¿Dónde conviene poner una IP fija (estática)?"

explicacion: |
  Evita duplicar direcciones.
```

### 18 — Contraseña

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Se cambia la que viene de fábrica", "Se deja igual", "Se publica", "Se borra"]
respuesta: "Se cambia la que viene de fábrica"

enunciado: "¿Qué se hace con la contraseña de administración de un router nuevo?"

explicacion: |
  Las claves de fábrica son conocidas.
```

### 19 — Wi-Fi

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["wifi"]

tipo: mc
opciones_explicitas: ["WPA2 o WPA3, con una clave larga", "WEP", "Red abierta", "Sin clave"]
respuesta: "WPA2 o WPA3, con una clave larga"

enunciado: "¿Qué seguridad conviene en el Wi-Fi?"

explicacion: |
  WEP es débil y se rompe fácilmente.
```

### 20 — Invitados

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "intermedio"
  tags: ["invitados"]

tipo: mc
opciones_explicitas: ["Para separar las visitas y los dispositivos poco confiables de la red principal", "Para cobrar", "Para cortar internet", "Para acelerar"]
respuesta: "Para separar las visitas y los dispositivos poco confiables de la red principal"

enunciado: "¿Para qué sirve una red de invitados?"

explicacion: |
  Limita el acceso a los equipos importantes.
```

### 21 — Firmware

```
metadata:
  materia: "redes"
  tema: "routers"
  nivel: "basico"
  tags: ["firmware"]

tipo: mc
opciones_explicitas: ["Para corregir fallas de seguridad conocidas", "Para cambiar el color", "Para acelerar el teclado", "No conviene"]
respuesta: "Para corregir fallas de seguridad conocidas"

enunciado: "¿Por qué conviene actualizar el firmware del router?"

explicacion: |
  Los fabricantes publican correcciones.
```

