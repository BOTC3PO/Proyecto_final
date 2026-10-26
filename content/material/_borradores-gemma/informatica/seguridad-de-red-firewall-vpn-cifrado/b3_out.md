### 1 — ¿Firewall o Antivirus?
```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red"
  nivel: "basico"
  tags: ["firewall", "seguridad"]

tipo: mc
opciones_explicitas: ["Filtrar tráfico de red según reglas", "Eliminar archivos infectados del disco", "Cifrar el contenido de los correos", "Gestionar las contraseñas de usuario"]

enunciado: "Un error común es pensar que un firewall sustituye al antivirus. La función principal de un firewall es ___."

respuesta: "Filtrar tráfico de red según reglas"

explicacion: |
  El firewall actúa como una barrera que controla el flujo de datos (paquetes) que entran o salen de una red basándose en reglas, mientras que el antivirus busca código malicioso en archivos o procesos del sistema.
```

### 2 — El propósito de una VPN
```
metadata:
  materia: "informatica"
  tema: "vpn_cifrado"
  nivel: "intermedio"
  tags: ["vpn", "privacidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Navegar en una red Wi-Fi pública de una cafetería", "proteger la privacidad de la conexión"],
    ["Aumentar la velocidad de descarga de Internet", "proteger la privacidad de la conexión"]
  ]

tipo: mc
opciones_explicitas: ["Aumentar la velocidad de descarga de Internet", "proteger la privacidad de la conexión", "Eliminar la necesidad de usar contraseñas", "Evitar que el hardware se sobrecaliente"]

enunciado: "Un usuario piensa que usar una VPN sirve para {escenarios[escenario_idx][0]}. Sin embargo, el objetivo principal es {escenarios[escenario_idx][1]}."

respuesta: "proteger la privacidad de la conexión"

explicacion: |
  Una VPN crea un túnel cifrado para tus datos, pero no mejora la velocidad de tu proveedor de internet; de hecho, debido al proceso de cifrado, puede aumentar ligeramente la latencia.
```

### 3 — Cifrado en tránsito vs. en reposo
```
metadata:
  materia: "informatica"
  tema: "cifrado_datos"
  nivel: "intermedio"
  tags: ["cifrado", "seguridad_datos"]

tipo: vf

enunciado: "Si un archivo está cifrado en el disco duro de un servidor (en reposo), esto garantiza automáticamente que el archivo no pueda ser interceptado mientras se envía por una red sin protección (en tránsito)."

respuesta: falso

explicacion: |
  El cifrado en reposo protege los datos si el soporte físico es robado. El cifrado en tránsito (como TLS/SSL) es necesario para proteger los datos mientras viajan por la red.
```

### 4 — Protocolos de comunicación seguros
```
metadata:
  materia: "informatica"
  tema: "protocolos_seguridad"
  nivel: "basico"
  tags: ["http", "https", "seguridad"]

tipo: completar
respuestas_validas: ["HTTPS"]

enunciado: "Para asegurar que la comunicación entre un navegador y un servidor web esté cifrada, se debe utilizar el protocolo ___ en lugar de HTTP."

respuesta: "HTTPS"

explicacion: |
  HTTPS utiliza protocolos de cifrado (como TLS) para asegurar que la información enviada entre el cliente y el servidor no pueda ser leída por terceros.
```

### 5 — El proceso de una conexión VPN
```
metadata:
  materia: "informatica"
  tema: "vpn_handshake"
  nivel: "avanzado"
  tags: ["vpn", "seguridad", "proceso"]

tipo: ordenar
opciones_explicitas: ["Establecer túnel de comunicación", "Autenticar al usuario", "Negociar algoritmos de cifrado", "Intercambiar claves de cifrado"]

enunciado: "Para establecer una conexión VPN segura, los pasos lógicos suelen seguir este orden de negociación y autenticación:"

respuesta: ["Negociar algoritmos de cifrado", "Intercambiar claves de cifrado", "Autenticar al usuario", "Establecer túnel de comunicación"]

explicacion: |
  Primero el cliente y el servidor acuerdan qué algoritmos usarán, luego intercambian las llaves necesarias, después el servidor verifica la identidad del usuario y, finalmente, se establece el túnel de datos.
```