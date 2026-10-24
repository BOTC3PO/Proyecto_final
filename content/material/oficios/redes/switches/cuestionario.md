# Redes — Switches (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué hace

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Conecta equipos de una red local y reenvía las tramas solo al puerto de destino", "Conecta la red con internet", "Asigna direcciones IP", "Cifra el tráfico"]
respuesta: "Conecta equipos de una red local y reenvía las tramas solo al puerto de destino"

enunciado: "¿Qué hace un switch?"

explicacion: |
  Trabaja en la capa 2 (enlace de datos).
```

### 2 — Hub

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["hub"]

tipo: mc
opciones_explicitas: ["El hub repite todo a todos los puertos; el switch envía solo al puerto de destino", "Ninguna", "El hub es más rápido", "El switch repite todo"]
respuesta: "El hub repite todo a todos los puertos; el switch envía solo al puerto de destino"

enunciado: "¿Qué diferencia hay entre un hub y un switch?"

explicacion: |
  El hub es un dispositivo antiguo.
```

### 3 — Dirección

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["mac"]

tipo: mc
opciones_explicitas: ["La MAC", "La IP", "El DNS", "El puerto TCP"]
respuesta: "La MAC"

enunciado: "¿Con qué dirección trabaja un switch?"

explicacion: |
  Una MAC identifica a la interfaz en la red local.
```

### 4 — MAC

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["mac"]

tipo: mc
opciones_explicitas: ["El identificador de una tarjeta de red, de 48 bits", "La dirección de internet de la casa", "Un número de teléfono", "La clave del Wi-Fi"]
respuesta: "El identificador de una tarjeta de red, de 48 bits"

enunciado: "¿Qué es una dirección MAC?"

explicacion: |
  Se escribe como `3C:52:82:AB:12:09`.
```

### 5 — Tabla

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["tabla"]

tipo: mc
opciones_explicitas: ["Qué MAC se vio en cada puerto", "Las contraseñas", "Las IP públicas", "Las páginas visitadas"]
respuesta: "Qué MAC se vio en cada puerto"

enunciado: "¿Qué guarda la tabla de direcciones de un switch?"

explicacion: |
  Se llena aprendiendo de las tramas que pasan.
```

### 6 — Aprendizaje

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "intermedio"
  tags: ["aprendizaje"]

tipo: mc
opciones_explicitas: ["Anota la MAC de origen de cada trama que recibe", "Se lo pregunta al usuario", "Lee la IP", "Pregunta al router"]
respuesta: "Anota la MAC de origen de cada trama que recibe"

enunciado: "¿Cómo aprende el switch en qué puerto está un equipo?"

explicacion: |
  Asocia esa MAC con el puerto por el que llegó.
```

### 7 — Destino conocido

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["unicast"]

tipo: mc
opciones_explicitas: ["La envía solo por el puerto asociado", "La envía por todos los puertos", "La descarta", "La envía al router"]
respuesta: "La envía solo por el puerto asociado"

enunciado: "Si el switch conoce la MAC de destino, ¿qué hace?"

explicacion: |
  Es un reenvío unicast.
```

### 8 — Destino desconocido

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "intermedio"
  tags: ["flooding"]

tipo: mc
opciones_explicitas: ["La envía por todos los puertos excepto por el que llegó (inundación)", "La descarta", "Pide permiso", "La envía solo al primer puerto"]
respuesta: "La envía por todos los puertos excepto por el que llegó (inundación)"

enunciado: "Si el switch no conoce la MAC de destino, ¿qué hace?"

explicacion: |
  Cuando el destino responda, el switch aprenderá su puerto.
```

### 9 — Broadcast

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "intermedio"
  tags: ["broadcast"]

tipo: mc
opciones_explicitas: ["A todos los puertos", "Solo a uno", "A ninguno", "Solo al router"]
respuesta: "A todos los puertos"

enunciado: "¿A quiénes llega un broadcast en un switch sin VLAN?"

explicacion: |
  El destino es `FF:FF:FF:FF:FF:FF`.
```

### 10 — Caducidad

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "avanzado"
  tags: ["tabla"]

tipo: mc
opciones_explicitas: ["Caduca y se borra después de un tiempo", "Queda para siempre", "Se envía al router", "Se bloquea el puerto"]
respuesta: "Caduca y se borra después de un tiempo"

enunciado: "¿Qué pasa con una entrada de la tabla que no se vuelve a ver?"

explicacion: |
  Así la tabla se mantiene actualizada.
```

### 11 — Dominio de difusión

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "intermedio"
  tags: ["dominio"]

tipo: mc
opciones_explicitas: ["Un router o las VLAN", "Un switch común", "Un hub", "Un cable"]
respuesta: "Un router o las VLAN"

enunciado: "¿Qué separa los dominios de difusión?"

explicacion: |
  Un switch sin VLAN mantiene todo en el mismo dominio.
```

### 12 — Administrable

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["Configurar VLAN, seguridad y monitoreo", "Cobrar menos", "Usar solo fibra", "Funcionar sin electricidad"]
respuesta: "Configurar VLAN, seguridad y monitoreo"

enunciado: "¿Qué permite un switch administrable que uno no administrable no tiene?"

explicacion: |
  Los no administrables funcionan solos, sin configuración.
```

### 13 — PoE

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["poe"]

tipo: mc
opciones_explicitas: ["Alimentación eléctrica por el cable de red", "Más puertos", "Internet", "Una IP fija"]
respuesta: "Alimentación eléctrica por el cable de red"

enunciado: "¿Qué agrega un switch PoE?"

explicacion: |
  Alimenta cámaras IP, teléfonos IP y puntos de acceso.
```

### 14 — Capa 3

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "avanzado"
  tags: ["capa 3"]

tipo: mc
opciones_explicitas: ["Enrutar entre VLAN", "Cifrar todo", "Reemplazar el módem", "Nada más"]
respuesta: "Enrutar entre VLAN"

enunciado: "¿Qué puede hacer además un switch de capa 3?"

explicacion: |
  Combina conmutación y enrutamiento.
```

### 15 — Anillo

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "intermedio"
  tags: ["bucles"]

tipo: mc
opciones_explicitas: ["Tormentas de difusión que colapsan la red", "Nada", "La red se vuelve más rápida", "Se pierde la IP"]
respuesta: "Tormentas de difusión que colapsan la red"

enunciado: "¿Qué problema aparece si se conectan switches formando un anillo sin protección?"

explicacion: |
  Los broadcasts circulan indefinidamente.
```

### 16 — STP

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "intermedio"
  tags: ["stp"]

tipo: mc
opciones_explicitas: ["Para evitar bucles bloqueando algunos enlaces redundantes", "Para cifrar", "Para asignar IP", "Para medir la velocidad"]
respuesta: "Para evitar bucles bloqueando algunos enlaces redundantes"

enunciado: "¿Para qué sirve STP?"

explicacion: |
  Reactiva los enlaces bloqueados si otro falla.
```

### 17 — Distancia

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["cableado"]

tipo: mc
opciones_explicitas: ["100 metros", "10 metros", "1 kilómetro", "1 metro"]
respuesta: "100 metros"

enunciado: "¿Cuál es la distancia máxima habitual de un tramo de cable de par trenzado?"

explicacion: |
  Para más distancia se usa fibra o un equipo intermedio.
```

### 18 — Conector

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["rj45"]

tipo: mc
opciones_explicitas: ["RJ45", "USB", "HDMI", "VGA"]
respuesta: "RJ45"

enunciado: "¿Qué conector se usa en un cable de red de par trenzado?"

explicacion: |
  Es el conector de las placas Ethernet.
```

### 19 — Fibra

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "basico"
  tags: ["fibra"]

tipo: mc
opciones_explicitas: ["Mayores distancias y velocidades, e inmunidad a interferencias eléctricas", "Es más barata siempre", "Se instala sin herramientas", "Funciona con corriente"]
respuesta: "Mayores distancias y velocidades, e inmunidad a interferencias eléctricas"

enunciado: "¿Qué ventaja tiene la fibra óptica?"

explicacion: |
  Se usa en enlaces largos y troncales.
```

### 20 — Negociación

```
metadata:
  materia: "redes"
  tema: "switches"
  nivel: "intermedio"
  tags: ["velocidad"]

tipo: mc
opciones_explicitas: ["Negocian la mejor velocidad que ambos admiten", "Eligen la más lenta siempre", "Se bloquean", "Piden una clave"]
respuesta: "Negocian la mejor velocidad que ambos admiten"

enunciado: "¿Qué hacen los dos extremos de un cable Ethernet al conectarse?"

explicacion: |
  Por ejemplo, 100 Mbps o 1 Gbps.
```

