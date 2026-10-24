### 1 — Diferencia entre Firewall y Antivirus
```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "basico"
  tags: ["firewall", "seguridad"]

tipo: mc
opciones_explicitas: ["El firewall analiza el tráfico de red y puertos, mientras que el antivirus analiza archivos y procesos en el host.", "El firewall detecta virus en archivos descargados, mientras que el antivirus bloquea conexiones no autorizadas.", "Son conceptos idénticos aplicados a diferentes capas del sistema operativo.", "El firewall cifra los datos y el antivirus los descifra."]

enunciado: "En una estrategia de defensa en profundidad, ¿cuál es la distinción fundamental entre un firewall y un antivirus?"

explicacion: |
  El firewall actúa como una barrera en el perímetro de la red o el sistema, controlando el flujo de datos basado en reglas de puertos y protocolos. El antivirus se enfoca en identificar y eliminar software malicioso (malware) dentro del sistema de archivos o la memoria.
```

### 2 — El propósito del cifrado en tránsito
```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "intermedio"
  tags: ["cifrado", "seguridad_datos"]

tipo: completar
respuestas_validas: ["confidencialidad", "integridad", "disponibilidad"]

enunciado: "Mientras que un mecanismo de checksum asegura la ___ de los datos, el cifrado de datos en tránsito tiene como objetivo principal garantizar la ___."

explicacion: |
  El checksum o hash detecta si los datos han sido alterados (integridad), pero el cifrado asegura que, aunque sean interceptados, no puedan ser leídos por terceros (confidencialidad).
```

### 3 — VPN vs. Cifrado Punto a Punto
```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "avanzado"
  tags: ["vpn", "cifrado"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["VPN de Acceso Remoto", "crea un túnel virtual sobre una red pública"],
    ["Cifrado de extremo a extremo (E2EE)", "asegura que solo los nodos finales puedan leer el mensaje"]
  ]

tipo: mc
opciones_explicitas: ["La VPN cifra todo el tráfico de la interfaz de red, mientras que el cifrado E2EE solo cifra la aplicación específica.", "La VPN es un protocolo de capa 2 y el cifrado E2EE es de capa 7.", "La VPN requiere un servidor central y el cifrado E2EE no requiere infraestructura.", "No hay diferencia, ambos términos son sinónimos en redes modernas."]

enunciado: "Considerando el escenario de {escenarios[escenario_idx][0]}, ¿cuál es la diferencia clave respecto al {escenarios[1 - escenario_idx][0]}?"

explicacion: |
  Una VPN establece un túnel que encapsula todo el tráfico de un dispositivo a través de una red (como Internet), mientras que el cifrado E2EE (End-to-End) se asegura de que el contenido sea ilegible para cualquier intermediario, incluso para el proveedor del servicio, centrándose en la aplicación.
```

### 4 — Verdad o Falso: Firewall de Aplicación (WAF)
```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "intermedio"
  tags: ["waf", "firewall"]

tipo: vf

enunciado: "Un Firewall de Aplicaciones Web (WAF) se distingue de un firewall de red tradicional porque opera principalmente en la capa de aplicación (Capa 7) del modelo OSI, permitiendo inspeccionar contenido HTTP/HTTPS, a diferencia del firewall de red que se centra en capas inferiores como IP y TCP."

respuesta: verdadero

explicacion: |
  Es correcto. El firewall de red tradicional filtra por IP y puerto, mientras que el WAF inspecciona el contenido de las peticiones web para prevenir ataques como SQL Injection o Cross-Site Scripting (XSS).
```

### 5 — Proceso de establecimiento de una conexión segura
```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "intermedio"
  tags: ["handshake", "seguridad"]

tipo: ordenar
opciones_explicitas: ["Negociación de parámetros de cifrado", "Intercambio de claves públicas/privadas", "Autenticación de las partes", "Establecimiento del canal de datos cifrado"]
respuesta: ["Negociación de parámetros de cifrado", "Intercambio de claves públicas/privadas", "Autenticación de las partes", "Establecimiento del canal de datos cifrado"]

enunciado: "Ordene los pasos lógicos de un protocolo de negociación de seguridad (como TLS) para establecer una conexión segura:"

explicacion: |
  Primero se acuerda qué algoritmos usar (Cipher Suite), luego se intercambian las claves para el cifrado asimétrico, se verifica la identidad de los participantes y, finalmente, se empieza a transmitir la información protegida.
```