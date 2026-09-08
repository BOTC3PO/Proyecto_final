# Informatica — Seguridad de red firewall vpn cifrado (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El rol del Firewall

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "basico"
  tags: ["firewall", "redes", "seguridad"]

respuesta: "filtrar"
tipo: completar
respuestas_validas:
  - "filtrar"
  - "controlar"
  - "bloquear"

enunciado: "La función principal de un firewall es ___ el tráfico de red basándose en un conjunto de reglas de seguridad establecidas."

explicacion: |
  Un firewall actúa como una barrera entre una red confiable y una no confiable, permitiendo o denegando paquetes según criterios predefinidos.
```

### 2 — Concepto de VPN

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "basico"
  tags: ["vpn", "tunel", "redes"]

opciones_explicitas: ["Un túnel cifrado", "Un cable físico", "Un servidor de archivos", "Un sistema de backup"]
respuesta: "Un túnel cifrado"
tipo: mc

enunciado: "Una Red Privada Virtual (VPN) crea esencialmente ___ sobre una infraestructura de red pública como Internet."

explicacion: |
  La VPN utiliza protocolos de encapsulamiento y cifrado para crear un "túnel" lógico que protege la privacidad de los datos.
```

### 3 — Cifrado en tránsito

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "intermedio"
  tags: ["cifrado", "datos_en_transito", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "¿El cifrado de datos en tránsito asegura que, si un atacante intercepta los paquetes, no pueda leer su contenido original?"

explicacion: |
  Exacto. El cifrado transforma la información en un formato ilegible para cualquiera que no posea la clave de descifrado, protegiendo la confidencialidad durante el movimiento de los datos.
```

### 4 — Componentes de una conexión segura

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "intermedio"
  tags: ["protocolos", "seguridad", "ordenar"]

opciones_explicitas: ["Cifrado", "Encapsulamiento", "Autenticación"]
respuesta_orden: ["Autenticación", "Encapsulamiento", "Cifrado"]
tipo: ordenar

enunciado: "Ordene los procesos lógicos que ocurren típicamente en la construcción de un túnel VPN seguro, desde la validación de identidad hasta la protección del contenido:"

explicacion: |
  Primero se autentica al usuario, luego se encapsula el paquete dentro de otro protocolo y finalmente se cifra el contenido para garantizar la privacidad.
```

### 5 — Diferencia entre cifrado y hashing

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "avanzado"
  tags: ["cifrado", "hash", "seguridad"]

respuesta: "El cifrado es reversible con una clave, el hashing es una función de una sola vía"
tipo: mc
opciones_explicitas: ["El cifrado es reversible con una clave, el hashing es una función de una sola vía", "El cifrado es de una vía, el hashing es reversible", "Ambos son lo mismo", "El cifrado es para archivos y el hashing para redes"]

enunciado: "Considerando las propiedades de los algoritmos de seguridad, ¿cuál es la diferencia fundamental entre el cifrado y el hashing?"

explicacion: |
  El cifrado está diseñado para ser revertido (descifrado) mediante una clave, mientras que el hashing es una función unidireccional que no permite recuperar el dato original.
```

### 6 — El rol del Firewall en una red local

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall"
  nivel: "basico"
  tags: ["firewall", "seguridad", "redes"]

variables:
  puerto_bloqueado: uno_de([21, 22, 23, 80])

enunciado: "Un administrador de red configura un firewall para proteger un servidor web. Si el puerto {puerto_bloqueado} está en la lista de reglas de 'Denegar' (Deny), ¿qué acción tomará el firewall ante un paquete que intenta entrar por ese puerto?"

opciones_explicitas:
  - "Permitir el tráfico"
  - "Bloquear el tráfico"
  - "Redirigir el tráfico"

respuesta: "Bloquear el tráfico"
tipo: mc

explicacion: |
  El firewall actúa como un filtro basado en reglas. Si una regla de 'Denegar' coincide con el puerto de origen/destino, el paquete es descartado o bloqueado para proteger el sistema.
```

### 7 — El proceso de cifrado en una VPN

```
metadata:
  materia: "informatica"
  tema: "vpn_cifrado"
  nivel: "intermedio"
  tags: ["vpn", "cifrado", "tunel"]

enunciado: "Para establecer un túnel seguro en una VPN, se utiliza comúnmente el protocolo IPsec. ¿Es este protocolo un estándar utilizado para asegurar la comunicación en una VPN?"

respuesta: verdadero
tipo: vf
explicacion: |
  IPsec (Internet Protocol Security) es un conjunto de protocolos para asegurar las comunicaciones IP mediante la autenticación y el cifrado de cada paquete en una comunicación IP.
```

### 8 — Pasos para el establecimiento de una conexión segura

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_handshake"
  nivel: "avanzado"
  tags: ["handshake", "protocolo", "seguridad"]

enunciado: "En un proceso de negociación de seguridad (como el handshake de TLS), el orden correcto de las fases es el siguiente:"

opciones_explicitas:
  - "Negociación de parámetros"
  - "Intercambio de claves"
  - "Verificación de certificados"
  - "Cifrado de datos"

respuesta_orden: ["Negociación de parámetros", "Intercambio de claves", "Verificación de certificados", "Cifrado de datos"]
tipo: ordenar

explicacion: |
  Primero se acuerdan los algoritmos (negociación), luego se intercambian las claves para el cifrado, se validan las identidades mediante certificados y finalmente se establece el canal cifrado para los datos.
```

### 9 — Identificación de protocolos vulnerables

```
metadata:
  materia: "informatica"
  tema: "cifrado_datos_en_transito"
  nivel: "basico"
  tags: ["protocolos", "cifrado", "web"]

enunciado: "Un usuario navega por una web. Si el usuario desea que sus datos (como contraseñas) viajen cifrados en tránsito, el protocolo utilizado debe ser ___."

respuestas_validas:
  - "HTTPS"

respuesta: "HTTPS"
tipo: completar

explicacion: |
  HTTPS utiliza TLS/SSL para cifrar la comunicación entre el cliente y el servidor, garantizando la confidencialidad e integridad de los datos en tránsito.
```

### 10 — Cálculo de la integridad mediante Hash

```
metadata:
  materia: "informatica"
  tema: "integridad_datos"
  nivel: "intermedio"
  tags: ["hash", "integridad", "seguridad"]

variables:
  hash_original: "a1b2c3d4"
  hash_recibido: "a1b2c3d4"

enunciado: "Se envía un archivo con un valor Hash original de {hash_original}. Al recibirlo, el receptor calcula el Hash del archivo y obtiene {hash_recibido}. ¿El mensaje ha sido alterado en el camino?"

opciones_explicitas:
  - "Sí, el hash cambió"
  - "No, el hash es idéntico"

respuesta: "No, el hash es idéntico"
tipo: mc

explicacion: |
  La función Hash es determinista. Si el mensaje no ha sido alterado (ni un solo bit), el valor del Hash calculado por el receptor debe ser exactamente igual al enviado por el emisor.
```

### 11 — ¿Firewall o Antivirus?

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

### 12 — El propósito de una VPN

```
metadata:
  materia: "informatica"
  tema: "vpn_cifrado"
  nivel: "intermedio"
  tags: ["vpn", "privacidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Navegar en una red Wi-Fi pública de una cafetería", "proteger la privacidad de la conexión"], ["Aumentar la velocidad de descarga de Internet", "proteger la privacidad de la conexión"]]

tipo: mc
opciones_explicitas: ["Aumentar la velocidad de descarga de Internet", "proteger la privacidad de la conexión", "Eliminar la necesidad de usar contraseñas", "Evitar que el hardware se sobrecaliente"]

enunciado: "Un usuario piensa que usar una VPN sirve para {escenarios[escenario_idx][0]}. Sin embargo, el objetivo principal es {escenarios[escenario_idx][1]}."

respuesta: "proteger la privacidad de la conexión"

explicacion: |
  Una VPN crea un túnel cifrado para tus datos, pero no mejora la velocidad de tu proveedor de internet; de hecho, debido al proceso de cifrado, puede aumentar ligeramente la latencia.
```

### 13 — Cifrado en tránsito vs. en reposo

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

### 14 — Protocolos de comunicación seguros

```
metadata:
  materia: "informatica"
  tema: "protocolos_seguridad"
  nivel: "basico"
  tags: ["http", "https", "seguridad"]

tipo: completar
respuestas_validas:
  - "HTTPS"

enunciado: "Para asegurar que la comunicación entre un navegador y un servidor web esté cifrada, se debe utilizar el protocolo ___ en lugar de HTTP."

respuesta: "HTTPS"

explicacion: |
  HTTPS utiliza protocolos de cifrado (como TLS) para asegurar que la información enviada entre el cliente y el servidor no pueda ser leída por terceros.
```

### 15 — El proceso de una conexión VPN

```
metadata:
  materia: "informatica"
  tema: "vpn_handshake"
  nivel: "avanzado"
  tags: ["vpn", "seguridad", "proceso"]

tipo: ordenar
opciones_explicitas: ["Establecer túnel de comunicación", "Autenticar al usuario", "Negociar algoritmos de cifrado", "Intercambiar claves de cifrado"]

enunciado: "Para establecer una conexión VPN segura, los pasos lógicos suelen seguir este orden de negociación y autenticación:"

respuesta_orden: ["Negociar algoritmos de cifrado", "Intercambiar claves de cifrado", "Autenticar al usuario", "Establecer túnel de comunicación"]

explicacion: |
  Primero el cliente y el servidor acuerdan qué algoritmos usarán, luego intercambian las llaves necesarias, después el servidor verifica la identidad del usuario y, finalmente, se establece el túnel de datos.
```

### 16 — Diferencia entre Firewall y Antivirus

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "basico"
  tags: ["firewall", "seguridad"]

tipo: mc
opciones_explicitas: ["El firewall analiza el tráfico de red y puertos, mientras que el antivirus analiza archivos y procesos en el host.", "El firewall detecta virus en archivos descargados, mientras que el antivirus bloquea conexiones no autorizadas.", "Son conceptos idénticos aplicados a diferentes capas del sistema operativo.", "El firewall cifra los datos y el antivirus los descifra."]

enunciado: "En una estrategia de defensa en profundidad, ¿cuál es la distinción fundamental entre un firewall y un antivirus?"

respuesta: "El firewall analiza el tráfico de red y puertos, mientras que el antivirus analiza archivos y procesos en el host."

explicacion: |
  El firewall actúa como una barrera en el perímetro de la red o el sistema, controlando el flujo de datos basado en reglas de puertos y protocolos. El antivirus se enfoca en identificar y eliminar software malicioso (malware) dentro del sistema de archivos o la memoria.
```

### 17 — El propósito del cifrado en tránsito

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "intermedio"
  tags: ["cifrado", "seguridad_datos"]

tipo: completar
respuestas_validas:
  - "confidencialidad"
  - "integridad"
  - "disponibilidad"

enunciado: "Mientras que un mecanismo de checksum asegura la ___ de los datos, el cifrado de datos en tránsito tiene como objetivo principal garantizar la ___."

explicacion: |
  El checksum o hash detecta si los datos han sido alterados (integridad), pero el cifrado asegura que, aunque sean interceptados, no puedan ser leídos por terceros (confidencialidad).
```

### 18 — VPN vs. Cifrado Punto a Punto

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "avanzado"
  tags: ["vpn", "cifrado"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["VPN de Acceso Remoto", "crea un túnel virtual sobre una red pública"], ["Cifrado de extremo a extremo (E2EE)", "asegura que solo los nodos finales puedan leer el mensaje"]]

tipo: mc
opciones_explicitas: ["La VPN cifra todo el tráfico de la interfaz de red, mientras que el cifrado E2EE solo cifra la aplicación específica.", "La VPN es un protocolo de capa 2 y el cifrado E2EE es de capa 7.", "La VPN requiere un servidor central y el cifrado E2EE no requiere infraestructura.", "No hay diferencia, ambos términos son sinónimos en redes modernas."]

enunciado: "Considerando el escenario de {escenarios[escenario_idx][0]}, ¿cuál es la diferencia clave respecto al {escenarios[1 - escenario_idx][0]}?"

respuesta: "La VPN cifra todo el tráfico de la interfaz de red, mientras que el cifrado E2EE solo cifra la aplicación específica."

explicacion: |
  Una VPN establece un túnel que encapsula todo el tráfico de un dispositivo a través de una red (como Internet), mientras que el cifrado E2EE (End-to-End) se asegura de que el contenido sea ilegible para cualquier intermediario, incluso para el proveedor del servicio, centrándose en la aplicación.
```

### 19 — Verdad o Falso: Firewall de Aplicación (WAF)

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

### 20 — Proceso de establecimiento de una conexión segura

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "intermedio"
  tags: ["handshake", "seguridad"]

tipo: ordenar
opciones_explicitas: ["Negociación de parámetros de cifrado", "Intercambio de claves públicas/privadas", "Autenticación de las partes", "Establecimiento del canal de datos cifrado"]
respuesta_orden: ["Negociación de parámetros de cifrado", "Intercambio de claves públicas/privadas", "Autenticación de las partes", "Establecimiento del canal de datos cifrado"]

enunciado: "Ordene los pasos lógicos de un protocolo de negociación de seguridad (como TLS) para establecer una conexión segura:"

explicacion: |
  Primero se acuerda qué algoritmos usar (Cipher Suite), luego se intercambian las claves para el cifrado asimétrico, se verifica la identidad de los participantes y, finalmente, se empieza a transmitir la información protegida.
```

### 21 — El rol del Firewall

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall"
  nivel: "basico"
  tags: ["firewall", "redes"]

variables:
  datos: [["bloquear tráfico no deseado", "bloquear"], ["permitir todo el tráfico", "permitir"], ["analizar virus", "analizar"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["bloquear", "permitir", "analizar"]

enunciado: "Un firewall actúa como una barrera de seguridad cuya función principal es {datos[idx][0]}."

explicacion: |
  El firewall inspecciona los paquetes de red y decide si permitirlos o bloquearlos basándose en un conjunto de reglas de seguridad predefinidas.
```

### 22 — Cifrado en tránsito

```
metadata:
  materia: "informatica"
  tema: "cifrado_datos_transito"
  nivel: "intermedio"
  tags: ["cifrado", "seguridad"]

variables:
  datos: [["HTTPS", "seguro"], ["HTTP", "inseguro"]]
  idx: uno_de([0,1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Si un usuario navega utilizando el protocolo {datos[idx][0]}, la información que transita por la red se considera {datos[idx][1]}."

explicacion: |
  El protocolo HTTPS utiliza TLS/SSL para cifrar la comunicación, protegiendo los datos contra la interceptación (sniffing). El protocolo HTTP envía los datos en texto plano.
```

### 23 — Componentes de una VPN

```
metadata:
  materia: "informatica"
  tema: "vpn_conceptos"
  nivel: "intermedio"
  tags: ["vpn", "tunel"]

respuesta: "túnel"
tipo: completar
respuestas_validas:
  - "túnel"

enunciado: "Una VPN (Virtual Private Network) crea un ___ cifrado sobre una red pública para permitir el transporte seguro de datos."

explicacion: |
  La VPN establece un 'túnel' lógico que encapsula y cifra los paquetes de datos, permitiendo que la información viaje de forma privada a través de internet.
```

### 24 — Orden de establecimiento de conexión segura

```
metadata:
  materia: "informatica"
  tema: "handshake_tls"
  nivel: "avanzado"
  tags: ["tls", "handshake", "seguridad"]

respuesta_orden: ["Negociación de versión", "Intercambio de certificados", "Intercambio de claves", "Cifrado de datos"]
tipo: ordenar
opciones_explicitas: ["Negociación de versión", "Intercambio de certificados", "Intercambio de claves", "Cifrado de datos"]

enunciado: "Ordene los pasos lógicos de un apretón de manos (handshake) TLS para establecer una conexión segura:"

explicacion: |
  Primero se acuerda la versión del protocolo, luego se verifica la identidad mediante certificados, se intercambian claves para la sesión y finalmente se inicia el flujo de datos cifrados.
```

### 25 — El impacto del cifrado simétrico

```
metadata:
  materia: "informatica"
  tema: "cifrado_simetrico"
  nivel: "avanzado"
  tags: ["cifrado", "simetrico", "clave"]

variables:
  datos: [["una sola clave para cifrar y descifrar", "simétrico"], ["dos claves distintas", "asimétrico"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["simétrico", "asimétrico"]

enunciado: "Si el sistema utiliza {datos[idx][0]}, estamos ante un algoritmo de cifrado {datos[idx][1]}."

explicacion: |
  En el cifrado simétrico se utiliza la misma clave para las operaciones de cifrado y descifrado. En el asimétrico se utiliza un par de claves (pública y privada).
```
