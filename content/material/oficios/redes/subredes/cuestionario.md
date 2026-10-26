# Redes — Subredes (cuestionario, 22 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Bits

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "basico"
  tags: ["ipv4"]

tipo: mc
opciones_explicitas: ["32", "16", "64", "128"]
respuesta: "32"

enunciado: "¿Cuántos bits tiene una dirección IPv4?"

explicacion: |
  Se escriben en cuatro bytes separados por puntos.
```

### 2 — Máscara

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "basico"
  tags: ["mascara"]

tipo: mc
opciones_explicitas: ["Para indicar qué parte de la dirección es la red y cuál es el host", "Para cifrar la dirección", "Para ocultar el equipo", "Para acelerar internet"]
respuesta: "Para indicar qué parte de la dirección es la red y cuál es el host"

enunciado: "¿Para qué sirve la máscara de subred?"

explicacion: |
  Marca el límite entre red y host.
```

### 3 — CIDR

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "basico"
  tags: ["cidr"]

tipo: mc
opciones_explicitas: ["Que los primeros 24 bits son la parte de red", "24 equipos", "24 subredes", "24 megas"]
respuesta: "Que los primeros 24 bits son la parte de red"

enunciado: "¿Qué significa `/24`?"

explicacion: |
  Equivale a la máscara 255.255.255.0.
```

### 4 — Equivalencia

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "basico"
  tags: ["cidr"]

tipo: mc
opciones_explicitas: ["255.255.255.0", "255.255.0.0", "255.255.255.128", "255.0.0.0"]
respuesta: "255.255.255.0"

enunciado: "¿Qué máscara equivale a `/24`?"

explicacion: |
  Tres bytes completos de red.
```

### 5 — Bits de host

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["host"]

tipo: mc
opciones_explicitas: ["6", "26", "8", "2"]
respuesta: "6"

enunciado: "¿Cuántos bits de host tiene una red `/26`?"

explicacion: |
  32 − 26 = 6.
```

### 6 — Cantidad

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["cantidad"]

tipo: mc
opciones_explicitas: ["64", "26", "62", "32"]
respuesta: "64"

enunciado: "¿Cuántas direcciones tiene una red `/26`?"

explicacion: |
  2^6 = 64 direcciones.
```

### 7 — Equipos útiles

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["cantidad"]

tipo: mc
opciones_explicitas: ["62", "64", "60", "30"]
respuesta: "62"

enunciado: "¿Cuántos equipos pueden tener dirección en una red `/26`?"

explicacion: |
  64 − 2 (red y broadcast) = 62.
```

### 8 — Dos reservadas

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "basico"
  tags: ["reservadas"]

tipo: mc
opciones_explicitas: ["La de red (la primera) y la de difusión o broadcast (la última)", "La primera y la segunda", "La del medio", "Ninguna"]
respuesta: "La de red (la primera) y la de difusión o broadcast (la última)"

enunciado: "¿Cuáles dos direcciones de una subred no se asignan a equipos?"

explicacion: |
  Por eso los equipos útiles son 2^h − 2.
```

### 9 — Red /24

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "basico"
  tags: ["cantidad"]

tipo: mc
opciones_explicitas: ["254", "256", "255", "253"]
respuesta: "254"

enunciado: "¿Cuántos equipos útiles tiene una red `/24`?"

explicacion: |
  256 − 2.
```

### 10 — Enlace

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["cantidad"]

tipo: mc
opciones_explicitas: ["2", "4", "1", "30"]
respuesta: "2"

enunciado: "¿Cuántos equipos útiles hay en una red `/30`?"

explicacion: |
  4 − 2. Es típico de enlaces punto a punto entre dos routers.
```

### 11 — Misma red

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "basico"
  tags: ["misma red"]

tipo: mc
opciones_explicitas: ["192.168.1.10 y 192.168.1.200", "192.168.1.10 y 192.168.2.10", "10.0.0.1 y 192.168.1.1", "172.16.0.1 y 192.168.0.1"]
respuesta: "192.168.1.10 y 192.168.1.200"

enunciado: "Con máscara /24, ¿cuáles dos equipos están en la misma red?"

explicacion: |
  Tienen igual la parte `192.168.1`.
```

### 12 — Subnetting

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "basico"
  tags: ["subnetting"]

tipo: mc
opciones_explicitas: ["Tomar bits del host para formar varias redes más chicas", "Sumar redes", "Cifrar la red", "Cambiar la IP de todos"]
respuesta: "Tomar bits del host para formar varias redes más chicas"

enunciado: "¿Qué es el subnetting?"

explicacion: |
  Cada bit prestado duplica las subredes.
```

### 13 — Duplicar

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["subnetting"]

tipo: mc
opciones_explicitas: ["2", "4", "1", "8"]
respuesta: "2"

enunciado: "Al pasar de `/24` a `/25`, ¿cuántas subredes se obtienen?"

explicacion: |
  Un bit prestado duplica la cantidad de subredes.
```

### 14 — Dividir /24

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["subnetting"]

tipo: mc
opciones_explicitas: ["/26", "/25", "/27", "/28"]
respuesta: "/26"

enunciado: "Para dividir `192.168.1.0/24` en 4 subredes iguales, ¿qué prefijo se usa?"

explicacion: |
  Se prestan 2 bits: 2^2 = 4 subredes de 64 direcciones.
```

### 15 — Inicio

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["subnetting"]

tipo: mc
opciones_explicitas: ["192.168.1.64/26", "192.168.1.26/26", "192.168.1.100/26", "192.168.1.32/26"]
respuesta: "192.168.1.64/26"

enunciado: "¿Cuál es la segunda subred de `192.168.1.0/26`?"

explicacion: |
  Los bloques de 64 empiezan en 0, 64, 128 y 192.
```

### 16 — Broadcast

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "avanzado"
  tags: ["broadcast"]

tipo: mc
opciones_explicitas: ["192.168.1.63", "192.168.1.64", "192.168.1.255", "192.168.1.62"]
respuesta: "192.168.1.63"

enunciado: "¿Cuál es el broadcast de `192.168.1.0/26`?"

explicacion: |
  Es la última dirección del bloque 0-63.
```

### 17 — Privadas

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "basico"
  tags: ["privadas"]

tipo: mc
opciones_explicitas: ["192.168.1.10", "8.8.8.8", "200.45.12.1", "1.1.1.1"]
respuesta: "192.168.1.10"

enunciado: "¿Cuál de estas es una dirección privada?"

explicacion: |
  Los rangos privados son 10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16.
```

### 18 — 172

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "avanzado"
  tags: ["privadas"]

tipo: mc
opciones_explicitas: ["172.20.5.5", "172.40.5.5", "172.15.0.1", "172.32.1.1"]
respuesta: "172.20.5.5"

enunciado: "¿Cuál de estas es privada?"

explicacion: |
  El rango privado va de 172.16.0.0 a 172.31.255.255.
```

### 19 — Loopback

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "basico"
  tags: ["loopback"]

tipo: mc
opciones_explicitas: ["La propia máquina (loopback)", "El router", "Internet", "El servidor DNS"]
respuesta: "La propia máquina (loopback)"

enunciado: "¿Qué es `127.0.0.1`?"

explicacion: |
  Sirve para probar servicios locales.
```

### 20 — 169.254

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "intermedio"
  tags: ["apipa"]

tipo: mc
opciones_explicitas: ["Que no pudo obtener dirección por DHCP", "Que está en internet", "Que está conectado por VPN", "Que es el servidor"]
respuesta: "Que no pudo obtener dirección por DHCP"

enunciado: "Un equipo tiene una IP `169.254.x.x`. ¿Qué suele indicar?"

explicacion: |
  Es una dirección autoasignada.
```

### 21 — Entre subredes

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "basico"
  tags: ["router"]

tipo: mc
opciones_explicitas: ["Un router", "Un cable más largo", "Un switch", "Nada"]
respuesta: "Un router"

enunciado: "¿Qué hace falta para que equipos de subredes distintas se comuniquen?"

explicacion: |
  El router une redes diferentes.
```

### 22 — Gateway

```
metadata:
  materia: "redes"
  tema: "subredes"
  nivel: "basico"
  tags: ["gateway"]

tipo: mc
opciones_explicitas: ["La dirección del router dentro de esa subred", "El servidor DNS", "El primer equipo", "El broadcast"]
respuesta: "La dirección del router dentro de esa subred"

enunciado: "¿Qué es la puerta de enlace (gateway) de una subred?"

explicacion: |
  Hacia ahí se envía el tráfico que sale de la subred.
```

