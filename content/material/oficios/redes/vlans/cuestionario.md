# Redes — VLAN (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué es

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Una división lógica de un switch en varias redes separadas", "Una red inalámbrica", "Un tipo de cable", "Un servidor"]
respuesta: "Una división lógica de un switch en varias redes separadas"

enunciado: "¿Qué es una VLAN?"

explicacion: |
  Los equipos de una VLAN no ven el tráfico de otra.
```

### 2 — Para qué

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "basico"
  tags: ["uso"]

tipo: mc
opciones_explicitas: ["Separar áreas (administración, invitados, servidores) y reducir los broadcasts", "Acelerar el teclado", "Aumentar el Wi-Fi", "Cifrar los archivos"]
respuesta: "Separar áreas (administración, invitados, servidores) y reducir los broadcasts"

enunciado: "¿Cuál es una utilidad de las VLAN?"

explicacion: |
  Mejoran el orden y la seguridad.
```

### 3 — VLAN ID

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "basico"
  tags: ["id"]

tipo: mc
opciones_explicitas: ["El número que identifica a la VLAN", "Su contraseña", "Su velocidad", "La IP del router"]
respuesta: "El número que identifica a la VLAN"

enunciado: "¿Qué es el VLAN ID?"

explicacion: |
  Va de 1 a 4094.
```

### 4 — Subred

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "basico"
  tags: ["subred"]

tipo: mc
opciones_explicitas: ["Su propia subred IP", "La misma que a las demás", "Ninguna", "Una dirección MAC"]
respuesta: "Su propia subred IP"

enunciado: "¿Qué se suele asignar a cada VLAN?"

explicacion: |
  Cada VLAN es una red distinta.
```

### 5 — Acceso

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "basico"
  tags: ["access"]

tipo: mc
opciones_explicitas: ["A un equipo final, que pertenece a una sola VLAN", "Solo a otro switch", "A varios routers", "A la fibra"]
respuesta: "A un equipo final, que pertenece a una sola VLAN"

enunciado: "¿A qué se conecta un puerto de acceso?"

explicacion: |
  Las tramas salen sin etiqueta.
```

### 6 — Troncal

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "basico"
  tags: ["trunk"]

tipo: mc
opciones_explicitas: ["Varias VLAN por el mismo cable", "Una sola VLAN", "Solo internet", "Solo broadcast"]
respuesta: "Varias VLAN por el mismo cable"

enunciado: "¿Qué lleva un puerto troncal?"

explicacion: |
  Se usa entre switches o hacia un router.
```

### 7 — Etiqueta

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["802.1q"]

tipo: mc
opciones_explicitas: ["El ID de la VLAN a la que pertenece", "La contraseña", "La IP de destino", "La fecha"]
respuesta: "El ID de la VLAN a la que pertenece"

enunciado: "¿Qué agrega la etiqueta 802.1Q a una trama?"

explicacion: |
  Permite diferenciar las VLAN en un troncal.
```

### 8 — Entre VLAN

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "basico"
  tags: ["intervlan"]

tipo: mc
opciones_explicitas: ["Un router o un switch de capa 3", "Un hub", "Otra VLAN", "Nada"]
respuesta: "Un router o un switch de capa 3"

enunciado: "¿Qué hace falta para comunicar dos VLAN?"

explicacion: |
  Son redes distintas.
```

### 9 — Router on a stick

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "avanzado"
  tags: ["router"]

tipo: mc
opciones_explicitas: ["Un router con una sola interfaz troncal y subinterfaces por VLAN", "Un router sin cable", "Un router con Wi-Fi", "Un router de oficina"]
respuesta: "Un router con una sola interfaz troncal y subinterfaces por VLAN"

enunciado: "¿Qué es \"router on a stick\"?"

explicacion: |
  Es una forma económica de enrutar entre VLAN.
```

### 10 — Reglas

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["acl"]

tipo: mc
opciones_explicitas: ["En las reglas (ACL o firewall) del dispositivo de capa 3", "En el cable", "En el DNS", "En el teclado"]
respuesta: "En las reglas (ACL o firewall) del dispositivo de capa 3"

enunciado: "¿Dónde se limita qué tráfico puede pasar entre VLAN?"

explicacion: |
  Por ejemplo, invitados solo a internet.
```

### 11 — Sin red

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "basico"
  tags: ["fallas"]

tipo: mc
opciones_explicitas: ["No obtiene red o accede donde no debería", "Funciona más rápido", "Se apaga", "Cambia de nombre"]
respuesta: "No obtiene red o accede donde no debería"

enunciado: "Un equipo conectado al puerto de la VLAN equivocada, ¿qué síntoma suele tener?"

explicacion: |
  Es la falla más común de configuración.
```

### 12 — Troncal incompleto

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["fallas"]

tipo: mc
opciones_explicitas: ["El troncal no permite esa VLAN", "El cable es corto", "La IP es larga", "El switch es nuevo"]
respuesta: "El troncal no permite esa VLAN"

enunciado: "Una VLAN no llega a otro switch aunque está configurada. ¿Qué causa es frecuente?"

explicacion: |
  Hay que permitir la VLAN en el troncal.
```

### 13 — Misma subred

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "intermedio"
  tags: ["subred"]

tipo: mc
opciones_explicitas: ["No, deben ser subredes distintas", "Sí siempre", "Solo con troncal", "Solo con DHCP"]
respuesta: "No, deben ser subredes distintas"

enunciado: "¿Pueden dos VLAN distintas usar la misma subred?"

explicacion: |
  Se superpondrían las direcciones.
```

### 14 — Cifrado

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["No: separa lógicamente, pero no cifra", "Sí, por completo", "Solo en troncal", "Solo con WPA"]
respuesta: "No: separa lógicamente, pero no cifra"

enunciado: "¿Una VLAN cifra el tráfico?"

explicacion: |
  No sustituye la seguridad adicional.
```

### 15 — Nativa

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "avanzado"
  tags: ["nativa"]

tipo: mc
opciones_explicitas: ["La que viaja sin etiqueta", "La más rápida", "La de invitados siempre", "La primera que se crea"]
respuesta: "La que viaja sin etiqueta"

enunciado: "¿Qué es la VLAN nativa de un troncal?"

explicacion: |
  Conviene que sea una VLAN sin uso.
```

### 16 — Agrupar

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "basico"
  tags: ["flexibilidad"]

tipo: mc
opciones_explicitas: ["Porque se agrupan equipos por función sin importar la ubicación física", "Porque duran más", "Porque son gratis", "Porque evitan cables"]
respuesta: "Porque se agrupan equipos por función sin importar la ubicación física"

enunciado: "¿Por qué se dice que las VLAN dan flexibilidad?"

explicacion: |
  Dos equipos de pisos distintos pueden estar en la misma VLAN.
```

### 17 — Broadcast

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "basico"
  tags: ["broadcast"]

tipo: mc
opciones_explicitas: ["Los limitan a la propia VLAN", "Los multiplican", "Los cifran", "No tienen efecto"]
respuesta: "Los limitan a la propia VLAN"

enunciado: "¿Qué efecto tienen las VLAN sobre los broadcasts?"

explicacion: |
  Cada VLAN es un dominio de difusión.
```

### 18 — Invitados

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "basico"
  tags: ["invitados"]

tipo: mc
opciones_explicitas: ["Para que solo accedan a internet y no a los equipos internos", "Para que tengan más velocidad", "Para cobrarles", "Para evitar el Wi-Fi"]
respuesta: "Para que solo accedan a internet y no a los equipos internos"

enunciado: "¿Por qué conviene poner a los invitados en una VLAN aparte?"

explicacion: |
  Se controla con reglas entre VLAN.
```

### 19 — Capa 3

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "basico"
  tags: ["capa 3"]

tipo: mc
opciones_explicitas: ["Puede enrutar entre VLAN", "Más puertos", "Menos consumo", "Cable más largo"]
respuesta: "Puede enrutar entre VLAN"

enunciado: "¿Qué ofrece un switch de capa 3 frente a uno de capa 2?"

explicacion: |
  Evita usar un router externo.
```

### 20 — Ejemplo

```
metadata:
  materia: "redes"
  tema: "vlans"
  nivel: "basico"
  tags: ["ejemplo"]

tipo: mc
opciones_explicitas: ["Troncal hacia el router", "Acceso a VLAN 10", "Acceso a invitados", "Puerto sin uso"]
respuesta: "Troncal hacia el router"

enunciado: "En el ejemplo, ¿qué función cumple el puerto 24?"

explicacion: |
  Lleva todas las VLAN al router.
```

