# Informática — Redes locales: LAN, Wi-Fi y topologías (cuestionario, 24 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una LAN

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "basico"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Qué es una LAN?"
opciones_explicitas:
  - "Una red que conecta dispositivos en un espacio limitado, como una casa o una escuela"
  - "Una red que cubre todo un país"
  - "Un tipo de cable de fibra óptica"
  - "Un programa para navegar"
respuesta: "Una red que conecta dispositivos en un espacio limitado, como una casa o una escuela"

explicacion: |
  LAN significa Local Area Network, red de área local.
```

### 2 — Internet

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "basico"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Cómo se describe a Internet?"
opciones_explicitas:
  - "Como una red de redes"
  - "Como una LAN gigante"
  - "Como un único servidor"
  - "Como un tipo de router"
respuesta: "Como una red de redes"

explicacion: |
  Conecta muchas redes (WAN) entre sí.
```

### 3 — Topología estrella

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "basico"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "En una topología en estrella, ¿qué ocurre si falla el dispositivo central?"
opciones_explicitas:
  - "Cae toda la red"
  - "Solo se desconecta un equipo"
  - "No pasa nada"
  - "La red pasa a ser un bus"
respuesta: "Cae toda la red"

explicacion: |
  Si falla un equipo, los demás siguen funcionando.
```

### 4 — Topología bus

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Qué ocurre en una topología de bus si falla el cable compartido?"
opciones_explicitas:
  - "Toda la red deja de funcionar"
  - "Solo falla un equipo"
  - "La red se repara sola"
  - "Se convierte en malla"
respuesta: "Toda la red deja de funcionar"

explicacion: |
  En el bus todos comparten un único cable.
```

### 5 — Topología más usada

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Qué topología es la más usada hoy en las redes locales?"
opciones_explicitas:
  - "Estrella"
  - "Bus"
  - "Anillo"
  - "Punto a punto"
respuesta: "Estrella"

explicacion: |
  Los equipos se conectan a un switch o a un punto de acceso.
```

### 6 — Switch

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Cómo decide un switch a qué equipo enviar cada mensaje?"
opciones_explicitas:
  - "Mirando la dirección MAC de destino"
  - "Mirando el color del cable"
  - "Enviándolo a todos los equipos"
  - "Usando el nombre de la red Wi-Fi"
respuesta: "Mirando la dirección MAC de destino"

explicacion: |
  Un hub, en cambio, repite todo a todos.
```

### 7 — Router

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Cuál es la función principal de un router?"
opciones_explicitas:
  - "Unir redes distintas y decidir por dónde enviar los paquetes"
  - "Amplificar la señal eléctrica"
  - "Guardar archivos"
  - "Convertir texto en voz"
respuesta: "Unir redes distintas y decidir por dónde enviar los paquetes"

explicacion: |
  El router de casa une la LAN con Internet.
```

### 8 — Dirección MAC

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Cuántos bits tiene una dirección MAC?"
opciones_explicitas:
  - "48"
  - "32"
  - "16"
  - "128"
respuesta: "48"

explicacion: |
  Es la dirección física de la placa de red.
```

### 9 — Wi-Fi estándar

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "basico"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Qué familia de estándares IEEE corresponde al Wi-Fi?"
opciones_explicitas:
  - "802.11"
  - "802.3"
  - "802.5"
  - "802.16"
respuesta: "802.11"

explicacion: |
  802.3 es Ethernet, la red por cable.
```

### 10 — 2,4 GHz

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Qué ventaja tiene la banda de 2,4 GHz frente a la de 5 GHz?"
opciones_explicitas:
  - "Mayor alcance y mejor paso por paredes"
  - "Mayor velocidad"
  - "Menos dispositivos usándola"
  - "Mayor seguridad"
respuesta: "Mayor alcance y mejor paso por paredes"

explicacion: |
  La de 5 GHz es más rápida pero llega menos lejos.
```

### 11 — SSID

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "basico"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Qué es el SSID de una red Wi-Fi?"
opciones_explicitas:
  - "El nombre con que se identifica la red"
  - "La contraseña de la red"
  - "La velocidad de la red"
  - "La dirección MAC del router"
respuesta: "El nombre con que se identifica la red"

explicacion: |
  Es lo que aparece al buscar redes.
```

### 12 — DHCP

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Qué hace el servicio DHCP del router?"
opciones_explicitas:
  - "Asigna direcciones IP automáticamente"
  - "Cifra el tráfico"
  - "Descarga páginas web"
  - "Mide la velocidad de Internet"
respuesta: "Asigna direcciones IP automáticamente"

explicacion: |
  Evita conflictos de dirección entre equipos.
```

### 13 — Seguridad Wi-Fi

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Qué protocolo de seguridad Wi-Fi es obsoleto e inseguro?"
opciones_explicitas:
  - "WEP"
  - "WPA2"
  - "WPA3"
  - "Ninguno"
respuesta: "WEP"

explicacion: |
  Hoy se usan WPA2 y WPA3.
```

### 14 — IP privadas

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "avanzado"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Cuál de estas es una dirección IP privada?"
opciones_explicitas:
  - "192.168.1.20"
  - "8.8.8.8"
  - "200.45.10.3"
  - "1.1.1.1"
respuesta: "192.168.1.20"

explicacion: |
  Los rangos privados son 10.x.x.x, 172.16 a 172.31 y 192.168.x.x.
```

### 15 — NAT

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "avanzado"
  tags: ["redes", "lan"]

tipo: mc
enunciado: "¿Para qué sirve NAT en el router de una casa?"
opciones_explicitas:
  - "Para que varios equipos con IP privada salgan a Internet con una sola IP pública"
  - "Para cifrar el Wi-Fi"
  - "Para asignar nombres de dominio"
  - "Para amplificar la señal"
respuesta: "Para que varios equipos con IP privada salgan a Internet con una sola IP pública"

explicacion: |
  NAT traduce direcciones entre la red privada y la pública.
```

### 16 — Hub y switch

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: vf
respuesta: falso

enunciado: "Un hub envía cada mensaje solo al equipo destinatario."

explicacion: |
  El hub repite todo a todos; el switch envía al destinatario.
```

### 17 — WAN

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "basico"
  tags: ["redes", "lan"]

tipo: vf
respuesta: verdadero

enunciado: "Una WAN conecta redes ubicadas a gran distancia."

explicacion: |
  Internet es la WAN más grande.
```

### 18 — Cable UTP

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: vf
respuesta: verdadero

enunciado: "El cable UTP con conector RJ45 es muy usado en las redes Ethernet."

explicacion: |
  Se usan categorías como Cat5e o Cat6.
```

### 19 — Malla

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: vf
respuesta: verdadero

enunciado: "En una topología de malla hay varios caminos posibles entre los equipos."

explicacion: |
  Es más cara pero tolera mejor las fallas.
```

### 20 — Wi-Fi sin cifrar

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "avanzado"
  tags: ["redes", "lan"]

tipo: vf
respuesta: falso

enunciado: "Una red Wi-Fi no necesita cifrado porque la señal no sale de la casa."

explicacion: |
  La señal inalámbrica se puede escuchar desde afuera, por eso se cifra.
```

### 21 — Gateway

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "avanzado"
  tags: ["redes", "lan"]

tipo: vf
respuesta: verdadero

enunciado: "La puerta de enlace es el router al que se envía el tráfico que sale de la LAN."

explicacion: |
  Suele ser el router de la casa.
```

### 22 — Siglas LAN

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "basico"
  tags: ["redes", "lan"]

tipo: completar
enunciado: "LAN significa Local ___ Network."
respuestas_validas:
  - "Area"
  - "area"

explicacion: |
  Local Area Network.
```

### 23 — Dispositivo central

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "basico"
  tags: ["redes", "lan"]

tipo: completar
enunciado: "En la topología en estrella, los equipos se conectan a un dispositivo central, como un ___."
respuestas_validas:
  - "switch"
  - "Switch"
  - "punto de acceso"
  - "router"

explicacion: |
  También puede ser un punto de acceso.
```

### 24 — Banda rápida

```
metadata:
  materia: "informatica"
  tema: "redes_locales_lan_wifi_y_topologias"
  nivel: "intermedio"
  tags: ["redes", "lan"]

tipo: completar
enunciado: "La banda de ___ GHz del Wi-Fi ofrece más velocidad pero menos alcance."
respuestas_validas:
  - "5"

explicacion: |
  La de 2,4 GHz tiene más alcance.
```
