# Examen jefe — Guardián de los Datos

> Logro #180. Protegiste la información mediante firewalls, cifrado y sistemas de archivos seguros. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **120 preguntas totales** en 5/5 secciones.

---

## Sección: seguridad-de-red-firewall-vpn-cifrado (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "basico"
  tags: ["firewall", "redes", "seguridad"]

respuesta: "filtrar"
tipo: completar
respuestas_validas: ["filtrar", "controlar", "bloquear"]

enunciado: "La función principal de un firewall es ___ el tráfico de red basándose en un conjunto de reglas de seguridad establecidas."

explicacion: |
  Un firewall actúa como una barrera entre una red confiable y una no confiable, permitiendo o denegando paquetes según criterios predefinidos.
```

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

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "intermedio"
  tags: ["protocolos", "seguridad", "ordenar"]

opciones_explicitas: ["Cifrado", "Encapsulamiento", "Autenticación"]
respuesta: ["Autenticación", "Encapsulamiento", "Cifrado"]
tipo: ordenar

enunciado: "Ordene los procesos lógicos que ocurren típicamente en la construcción de un túnel VPN seguro, desde la validación de identidad hasta la protección del contenido:"

explicacion: |
  Primero se autentica al usuario, luego se encapsula el paquete dentro de otro protocolo y finalmente se cifra el contenido para garantizar la privacidad.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall_vpn_cifrado"
  nivel: "avanzado"
  tags: ["cifrado", "hash", "seguridad"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1
tipo: mc
opciones_explicitas: ["El cifrado es reversible con una clave, el hashing es una función de una sola vía", "El cifrado es de una vía, el hashing es reversible", "Ambos son lo mismo", "El cifrado es para archivos y el hashing para redes"]

enunciado: "Considerando las propiedades de los algoritmos de seguridad, ¿cuál es la diferencia fundamental entre el cifrado y el hashing?"

explicacion: |
  El cifrado está diseñado para ser revertido (descifrado) mediante una clave, mientras que el hashing es una función unidireccional que no permite recuperar el dato original.

tabla: [
  ["El cifrado es reversible con una clave, el hashing es una función de una sola vía", "El cifrado es reversible con una clave, el hashing es una función de una sola vía"],
  ["El cifrado es de una vía, el hashing es reversible", "El cifrado es de una vía, el hashing es reversible"]
]
```

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

```
metadata:
  materia: "informatica"
  tema: "vpn_cifrado"
  nivel: "intermedio"
  tags: ["vpn", "cifrado", "tunel"]

variables:
  protocolo: uno_de(["IPsec", "HTTP", "FTP"])
  es_seguro: protocolo == "IPsec"

enunciado: "Para establecer un túnel seguro en una VPN, se utiliza comúnmente el protocolo {protocolo}. ¿Es este protocolo un estándar utilizado para asegurar la comunicación en una VPN?"

respuesta: es_seguro
tipo: completar
explicacion: |
  IPsec (Internet Protocol Security) es un conjunto de protocolos para asegurar las comunicaciones IP mediante la autenticación y el cifrado de cada paquete en una comunicación IP.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_handshake"
  nivel: "avanzado"
  tags: ["handshake", "protocolo", "seguridad"]

enunciado: "En un proceso de negociación de seguridad (como el handshake de TLS), el orden correcto de las fases es el siguiente:"

opciones_explicitas:
  - "Negociación de parámetros, Intercambio de claves, Verificación de certificados, Cifrado de datos"
  - "Cifrado de datos, Verificación de certificados, Intercambio de claves, Negociación de parámetros"
  - "Intercambio de claves, Cifrado de datos, Negociación de parámetros, Verificación de certificados"

respuesta: ["Negociación de parámetros", "Intercambio de claves", "Verificación de certificados", "Cifrado de datos"]
tipo: ordenar

explicacion: |
  Primero se acuerdan los algoritmos (negociación), luego se intercambian las claves para el cifrado, se validan las identidades mediante certificados y finalmente se establece el canal cifrado para los datos.
```

```
metadata:
  materia: "informatica"
  tema: "cifrado_datos_en_transito"
  nivel: "basico"
  tags: ["protocolos", "cifrado", "web"]

variables:
  protocolo_web: uno_de(["HTTPS", "HTTP"])
  es_seguro: protocolo_web == "HTTPS"

enunciado: "Un usuario navega por una web utilizando el protocolo {protocolo_web}. Si el usuario desea que sus datos (como contraseñas) viajen cifrados en tránsito, el protocolo utilizado debe ser ___."

respuestas_validas:
  - "HTTPS"

respuesta: "HTTPS"
tipo: completar

explicacion: |
  HTTPS utiliza TLS/SSL para cifrar la comunicación entre el cliente y el servidor, garantizando la confidencialidad e integridad de los datos en tránsito.
```

```
metadata:
  materia: "informatica"
  tema: "integridad_datos"
  nivel: "intermedio"
  tags: ["hash", "integridad", "seguridad"]

variables:
  mensaje: uno_de(["Hola", "Mundo", "Seguro"])
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

```
metadata:
  materia: "informatica"
  tema: "cifrado_datos_transito"
  nivel: "intermedio"
  tags: ["cifrado", "seguridad"]

variables:
  datos: [["HTTPS", "seguro"], ["HTTP", "inseguro"]]
  idx: uno_de([0,1])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Si un usuario navega utilizando el protocolo {datos[idx][0]}, la información que transita por la red se considera {datos[idx][1]}."

explicacion: |
  El protocolo HTTPS utiliza TLS/SSL para cifrar la comunicación, protegiendo los datos contra la interceptación (sniffing). El protocolo HTTP envía los datos en texto plano.
```

```
metadata:
  materia: "informatica"
  tema: "vpn_conceptos"
  nivel: "intermedio"
  tags: ["vpn", "tunel"]

respuesta: "túnel"
tipo: completar
respuestas_validas: ["túnel", "puente", "cable"]

enunciado: "Una VPN (Virtual Private Network) crea un ___ cifrado sobre una red pública para permitir el transporte seguro de datos."

explicacion: |
  La VPN establece un 'túnel' lógico que encapsula y cifra los paquetes de datos, permitiendo que la información viaje de forma privada a través de internet.
```

```
metadata:
  materia: "informatica"
  tema: "handshake_tls"
  nivel: "avanzado"
  tags: ["tls", "handshake", "seguridad"]

respuesta: ["Negociación de versión", "Intercambio de certificados", "Intercambio de claves", "Cifrado de datos"]
tipo: ordenar
opciones_explicitas: ["Negociación de versión", "Intercambio de certificados", "Intercambio de claves", "Cifrado de datos"]

enunciado: "Ordene los pasos lógicos de un apretón de manos (handshake) TLS para establecer una conexión segura:"

explicacion: |
  Primero se acuerda la versión del protocolo, luego se verifica la identidad mediante certificados, se intercambian claves para la sesión y finalmente se inicia el flujo de datos cifrados.
```

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

## Sección: seguridad-informatica (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["phishing", "amenazas"]

tipo: mc
opciones_explicitas: ["Un software diseñado para dañar el hardware", "Una técnica de engaño para obtener datos sensibles", "Un método para acelerar la conexión a internet", "Un tipo de antivirus de última generación"]

respuesta: "Una técnica de engaño para obtener datos sensibles"

enunciado: "El phishing es una técnica de ingeniería social que consiste en ___ para obtener información confidencial como contraseñas o datos bancarios."

explicacion: |
  El phishing busca engañar al usuario mediante correos o sitios web falsos que suplantan la identidad de entidades legítimas.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["malware", "conceptos"]

tipo: vf

respuesta: falso

enunciado: "El término 'malware' se refiere exclusivamente a los virus que eliminan archivos del disco duro de forma inmediata."

explicacion: |
  Falso. Malware es un término genérico que incluye virus, troyanos, ransomware, spyware y muchos otros tipos de software malicioso con diferentes objetivos.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["ransomware", "amenazas"]

variables:
  escenario: uno_de([["cifrado", "secuestro"], ["borrado", "destrucción"]])

respuesta: tabla_respuestas[idx][1
tabla_respuestas: [["cifrado", "secuestro"], ["borrado", "destrucción"]]

tipo: completar
respuestas_validas: ["secuestro", "destrucción"]

enunciado: "El ransomware es un tipo de malware que realiza un ___ de los archivos del usuario para luego exigir un pago a cambio de la clave de descifrado."

explicacion: |
  El ransomware bloquea el acceso a tus datos (usualmente mediante cifrado) para extorsionar a la víctima.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["buenas_practicas", "reaccion"]

tipo: ordenar
opciones_explicitas: ["Desconfiar de correos con enlaces sospechosos", "No hacer clic en ningún enlace ni descargar archivos", "Reportar el correo al departamento de seguridad", "Cambiar las contraseñas de las cuentas afectadas"]

respuesta: ["Desconfiar de correos con enlaces sospechosos", "No hacer clic en ningún enlace ni descargar archivos", "Reportar el correo al departamento de seguridad", "Cambiar las contraseñas de las cuentas afectadas"]

enunciado: "Ordena los pasos lógicos que debe seguir un usuario al detectar un posible intento de phishing:"

explicacion: |
  Primero se identifica la sospecha, luego se evita la interacción con el elemento malicioso, se notifica a los expertos y finalmente se asegura la cuenta.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["buenas_practicas", "contraseñas"]

tipo: mc
opciones_explicitas: ["Usar la misma contraseña para todo", "Usar contraseñas largas con caracteres especiales y MFA", "Compartir la contraseña con familiares para facilitar el acceso", "Anotar las contraseñas en un papel pegado al monitor"]

respuesta: "Usar contraseñas largas con caracteres especiales y MFA"

enunciado: "Para fortalecer la seguridad de las cuentas personales, la mejor práctica es:"

explicacion: |
  El uso de contraseñas robustas combinadas con la Autenticación de Doble Factor (MFA) añade una capa crítica de protección.
```

```
metadata:
  materia: "informatica"
  tema: "phishing"
  nivel: "basico"
  tags: ["seguridad", "phishing", "ingenieria_social"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [
    ["Recibes un correo de tu banco diciendo que tu cuenta ha sido bloqueada y debes hacer clic en un enlace para 'verificar' tus datos.", "phishing"],
    ["Recibes un mensaje de un amigo por redes sociales con un enlace extraño que dice ser un video gracioso, pero el remitente no es él.", "phishing"]
  ]

respuesta: escenarios[caso_idx][1
tipo: mc
opciones_explicitas: ["malware", "phishing", "ransomware", "spyware"]

enunciado: "Un usuario recibe un mensaje urgente de una entidad conocida solicitando información sensible a través de un enlace sospechoso. ¿A qué tipo de amenaza estamos ante?"

explicacion: |
  El caso descrito es un ejemplo de phishing, una técnica de ingeniería social donde el atacante se hace pasar por una entidad de confianza para engañar a la víctima y obtener datos confidenciales.
```

```
metadata:
  materia: "informatica"
  tema: "malware"
  nivel: "basico"
  tags: ["malware", "virus", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que un 'Ransomware' es un tipo de malware que cifra los archivos del usuario y exige un pago para recuperarlos?"

explicacion: |
  Correcto. El ransomware es una amenaza que secuestra la información mediante cifrado, exigiendo un rescate (generalmente en criptomonedas) para desbloquearla.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "intermedio"
  tags: ["seguridad", "protocolo", "reaccion"]

variables:
  pasos_orden: [
    ["Detectar el comportamiento sospechoso en el sistema.", "paso1"],
    ["Desconectar el equipo de la red (Wi-Fi o cable).", "paso2"],
    ["Informar al responsable de seguridad o soporte técnico.", "paso3"],
    ["Realizar un escaneo completo con el antivirus.", "paso4"]
  ]

respuesta: ["paso1", "paso2", "paso3", "paso4"]
tipo: ordenar

opciones_explicitas: [
  "Detectar el comportamiento sospechoso en el sistema.",
  "Desconectar el equipo de la red (Wi-Fi o cable).",
  "Informar al responsable de seguridad o soporte técnico.",
  "Realizar un escaneo completo con el antivirus."
]

enunciado: "Si sospechas que tu computadora ha sido infectada, ordena los pasos lógicos para mitigar el impacto del incidente:"

explicacion: |
  Lo primero es la detección, seguido de la contención (desconectar la red para evitar la propagación), la comunicación del incidente y finalmente la limpieza/escaneo.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["contraseñas", "seguridad"]

respuesta: "complejo"
tipo: completar
respuestas_validas: ["complejo"]

enunciado: "Para asegurar una cuenta, una contraseña debe ser ___ (que incluya mayúsculas, minúsculas, números y símbolos) en lugar de ser una palabra simple."

explicacion: |
  Las contraseñas complejas aumentan significativamente el tiempo y la dificultad que requiere un atacante para realizar un ataque de fuerza bruta.
```

```
metadata:
  materia: "informatica"
  tema: "malware"
  nivel: "basico"
  tags: ["malware", "spyware"]

respuesta: "espionaje"
tipo: mc
opciones_explicitas: ["espionaje", "destrucción", "publicidad", "minería"]

enunciado: "El principal objetivo de un 'Spyware' es el ___ de la actividad del usuario, como capturar pulsaciones de teclas (keylogging) o historial de navegación."

explicacion: |
  El spyware se caracteriza por su naturaleza sigilosa, diseñada para recopilar información sobre una persona o dispositivo sin su consentimiento.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["phishing", "ingenieria_social"]

tipo: mc
opciones_explicitas: ["Un correo de un banco pidiendo tu contraseña", "Un software que mejora la velocidad del PC", "Un mensaje de un amigo con un link de un video", "Un antivirus que detecta un virus"]

enunciado: "El phishing es una técnica de ingeniería social que se basa en el engaño. Un ejemplo típico de este ataque es:"

explicacion: |
  El phishing busca engañar al usuario para que entregue información sensible (contraseñas, datos bancarios) suplantando la identidad de una entidad de confianza.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["malware", "ransomware"]

variables:
  es_secuestro: verdadero

tipo: vf

enunciado: "El Ransomware es un tipo de malware que cifra los archivos del usuario y exige un pago para recuperarlos. ¿Es esto verdadero o falso?"

explicacion: |
  Efectivamente, el ransomware 'secuestra' la información mediante cifrado y solicita un rescate, generalmente en criptomonedas.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["buenas_practicas", "protocolo"]

tipo: ordenar
opciones_explicitas: ["Recibir correo con link extraño", "No hacer clic en el enlace ni descargar archivos", "Borrar el correo o reportarlo como spam", "Notificar al equipo de soporte técnico"]

enunciado: "Ordena los pasos correctos que debes seguir cuando recibes un correo electrónico sospechoso que parece ser un intento de estafa:"

explicacion: |
  La regla de oro es la prevención: nunca interactuar con el contenido sospechoso y seguir los protocolos de reporte de la organización.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["phishing", "url"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["google.com", "g00gle.com"], ["microsoft.com", "micros0ft.com"]]

tipo: completar
respuestas_validas: ["g00gle.com", "micros0ft.com"]

enunciado: "En un ataque de phishing, el atacante suele usar dominios visualmente similares al real (typosquatting). Si el sitio legítimo es {escenarios[escenario_idx][0]}, el atacante podría usar ___ para engañarte."

explicacion: |
  Los atacantes cambian caracteres (como un cero por una 'o') para que la URL parezca legítima a simple vista, pero el dominio es distinto.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["contraseñas", "buenas_practicas"]

tipo: mc
opciones_explicitas: ["123456", "MiNombre2024", "P@ssw0rd_2024!_Xy", "password"]

enunciado: "De la siguiente lista, ¿cuál es la opción que presenta una mayor resistencia ante un ataque de fuerza bruta debido a su complejidad?"

explicacion: |
  Una contraseña segura debe combinar mayúsculas, minúsculas, números, caracteres especiales y tener una longitud considerable para aumentar el tiempo necesario para descifrarla.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["malware", "phishing"]

variables:
  canal: uno_de(["email", "sms"])

enunciado: "Si un ataque de ingeniería social se realiza a través de un mensaje de texto (SMS) en lugar de un {canal}, el término técnico correcto para este tipo de phishing es smishing."

respuesta: "smishing"
tipo: completar
respuestas_validas: ["smishing"]

explicacion: |
  El phishing es el término general, pero se diferencia según el canal: phishing (email), smishing (SMS) y vishing (voz/llamadas).
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["malware", "ransomware"]

opciones_explicitas: ["El ransomware cifra archivos para pedir un rescate, mientras que un virus se replica infectando otros archivos.", "Un virus siempre cifra archivos, mientras que el ransomware solo se propaga por redes.", "El ransomware es un tipo de virus que no requiere de un archivo anfitrión para ejecutarse."]

respuesta: uno_de(["El ransomware cifra archivos para pedir un rescate, mientras que un virus se replica infectando otros archivos.", "El ransomware es un tipo de virus que no requiere de un archivo anfitrión para ejecutarse."])
tipo: mc

explicacion: |
  La distinción principal es el objetivo: el ransomware busca extorsión mediante el secuestro de datos (cifrado), mientras que un virus es un concepto de propagación que infecta archivos existentes.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["gestion_de_accesos"]

respuesta: verdadero
tipo: vf

enunciado: "La autenticación es el proceso de verificar la identidad de un usuario, mientras que la autorización es el proceso de determinar qué permisos tiene ese usuario sobre un recurso."

explicacion: |
  Es un error común confundirlos. Autenticación responde "¿Quién eres?", y la autorización responde "¿Qué puedes hacer?".
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "avanzado"
  tags: ["protocolos"]

opciones_explicitas: ["Detección", "Contención", "Erradicación", "Recuperación"]

respuesta: ["Detección", "Contención", "Erradicación", "Recuperación"]
tipo: ordenar

explicacion: |
  Ante un incidente, primero se debe detectar la anomalía, luego contener el daño para que no se propague, erradicar la causa raíz y finalmente recuperar los sistemas a su estado normal.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["malware", "gusano"]

variables:
  tipo_ataque: uno_de(["necesita_interaccion", "autonomo"])

enunciado: "A diferencia de un gusano (worm), que se propaga de forma autónoma a través de la red, un troyano requiere que el usuario ___ para infectar el sistema."

respuesta: "interacción del usuario"
tipo: completar
respuestas_validas: ["interacción del usuario"]

explicacion: |
  El gusano es capaz de replicarse sin intervención humana aprovechando vulnerabilidades de red, mientras que el troyano se disfraza de software legítimo y depende de que el usuario lo ejecute.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["phishing", "seguridad"]

variables:
  datos: [["Recibiste un mail de tu banco pidiendo tu clave urgency", "phishing"], ["Un amigo te envía un link de un video que no abre", "posible_virus"], ["Un aviso de actualización de Windows en la barra de tareas", "sistema"]]
  idx: uno_de([0,1,2])

enunciado: "Analiza el siguiente caso: {datos[idx][0]}. ¿Qué tipo de amenaza o situación representa?"

opciones_explicitas: ["phishing", "posible_virus", "sistema"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El caso {datos[idx][0]} se clasifica como {datos[idx][1]}. Recuerda nunca entregar credenciales por correo electrónico.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["malware", "virus"]

variables:
  datos: [["Un programa que se oculta y registra tus pulsaciones de teclado", "spyware"], ["Un programa que cifra tus archivos y pide dinero", "ransomware"], ["Un programa que se duplica y se propaga por la red", "virus"]]
  idx: uno_de([0,1,2])

enunciado: "Se detecta en el sistema: {datos[idx][0]}. ¿Cuál es el nombre de este malware?"

opciones_explicitas: ["spyware", "ransomware", "virus"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El software descrito es {datos[idx][1]}. Es fundamental contar con un antivirus actualizado.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["buenas_practicas", "passwords"]

enunciado: "¿Es una buena práctica de seguridad utilizar la misma contraseña para todas tus cuentas personales para no olvidarlas?"

respuesta: falso
tipo: vf

explicacion: |
  Falso. Si un atacante obtiene una de tus contraseñas, tendrá acceso a todas tus cuentas. Se recomienda usar un gestor de contraseñas.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["reaccion", "incidente"]

enunciado: "Has detectado que tu computadora está actuando de forma errática y aparecen ventanas emergentes constantes. Ordena los pasos lógicos para mitigar el riesgo:"

opciones_explicitas: ["Desconectar el equipo de la red", "Realizar un escaneo con antivirus", "Cambiar contraseñas desde otro dispositivo seguro"]
respuesta: ["Desconectar el equipo de la red", "Realizar un escaneo con antivirus", "Cambiar contraseñas desde otro dispositivo seguro"]
tipo: ordenar

explicacion: |
  Primero se aísla el equipo (desconectar red) para evitar la propagación, luego se limpia el sistema y finalmente se asegura la identidad desde un equipo limpio.
```

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["phishing", "ingenieria_social"]

variables:
  tabla: [["ingeniería social", "phishing"], ["software malicioso", "malware"]]
  idx: uno_de([0,1])

enunciado: "El uso de técnicas psicológicas para engañar a las personas y obtener información confidencial se conoce como ___."

respuestas_validas: ["ingeniería social", "malware"]
respuesta: tabla[idx][0
tipo: completar

explicacion: |
  La técnica utilizada es la {tabla[idx][0]}. El eslabón más débil en la seguridad suele ser el usuario debido a la manipulación psicológica.
```

## Sección: sistema-de-archivos (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["conceptos", "so"]

respuesta: "software"
tipo: completar
respuestas_validas: ["software", "sistema"]

enunciado: "El sistema de archivos es el ___ que permite al sistema operativo gestionar la organización, almacenamiento y recuperación de datos en un dispositivo de almacenamiento."

explicacion: |
  El sistema de archivos es una parte del software del sistema operativo que controla cómo se almacenan y se recuperan los datos en un disco o unidad de almacenamiento.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["jerarquia", "directorios"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Estructura lineal", "Estructura jerárquica", "Estructura aleatoria", "Estructura plana"]

enunciado: "La mayoría de los sistemas operativos modernos utilizan una estructura de archivos de tipo {datos[idx][0]} para organizar la información."

datos:
  - ["Estructura lineal", "Estructura jerárquica"]
  - ["Estructura plana", "Estructura jerárquica"]

explicacion: |
  Una estructura jerárquica permite organizar archivos en directorios y subdirectorios, creando una "rama" o árbol de información.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["metadatos", "atributos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Los metadatos de un archivo incluyen información como la fecha de creación, el tamaño y los permisos de acceso?"

explicacion: |
  Correcto. Los metadatos son 'datos sobre los datos' que describen las propiedades del archivo pero no su contenido real.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["componentes", "estructura"]

respuesta: ["Extensión", "Nombre", "Ruta", "Metadatos"]
tipo: ordenar

opciones_explicitas: ["Extensión", "Nombre", "Ruta", "Metadatos"]

enunciado: "Ordena los elementos que componen la identificación completa y la ubicación de un archivo en un sistema operativo, desde lo más específico a lo más general (considerando la ruta completa):"

explicacion: |
  La ruta indica la ubicación, el nombre identifica el archivo, la extensión indica el formato y los metadatos describen sus propiedades.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["sectores", "clúster"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Sector", "Clúster", "Pista", "Cilindro"]

enunciado: "En un sistema de archivos, la unidad lógica mínima de asignación de espacio en el disco, que puede estar compuesta por varios sectores físicos, se denomina {datos[idx][0]}."

datos:
  - ["Sector", "Clúster"]
  - ["Clúster", "Clúster"]

explicacion: |
  Un clúster es la unidad de asignación de espacio que utiliza el sistema de archivos para gestionar bloques de datos en el disco.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["linux", "unix", "inode"]

respuesta: "metadatos"
tipo: completar
respuestas_validas: ["metadatos", "metadato"]

enunciado: "En sistemas de archivos tipo Unix/Linux, la estructura que contiene la información sobre el tamaño, permisos y ubicación de los bloques de datos de un archivo, pero no su nombre, se denomina ___."

explicacion: |
  El inodo (index node) es una estructura de datos que contiene la información descriptiva del archivo (metadatos). El nombre del archivo se almacena en el directorio, no en el inodo.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["almacenamiento", "fragmentacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["archivo_A", "40KB", "fragmentado"], ["archivo_B", "12KB", "contiguo"]]
  opcion_correcta: ["fragmentado", "contiguo"]

respuesta: datos[escenario_idx][2
tipo: mc
opciones_explicitas: ["fragmentado", "contiguo"]

enunciado: "Un archivo de {datos[escenario_idx][0]} tiene un tamaño de {datos[escenario_idx][1]}. Si el sistema de archivos debe guardar este archivo en bloques no adyacentes debido a que el espacio libre está disperso, el archivo se encuentra ___."

explicacion: |
  Cuando un archivo no se puede almacenar en bloques contiguos y debe repartirse por diferentes partes del disco, se produce la fragmentación.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["gestion", "orden"]

respuesta: ["Crear", "Escribir", "Cerrar", "Eliminar"]
tipo: ordenar
opciones_explicitas: ["Crear", "Escribir", "Cerrar", "Eliminar"]

enunciado: "Ordena los pasos lógicos que sigue el sistema operativo para gestionar un archivo desde que se inicia su uso hasta que se libera el espacio en disco:"

explicacion: |
  El flujo estándar implica la asignación de inodos/bloques (Crear), la escritura de datos (Escribir), el cierre del descriptor para asegurar la integridad (Cerrar) y la liberación de recursos (Eliminar).
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["calculo", "capacidad"]

variables:
  tamaño_archivo: 1024
  tamaño_bloque: 4096
  bloques_necesarios: ceil(1024 / 4096)

respuesta: 1
tipo: completar
tolerancia_abs: 0

enunciado: "Si un sistema de archivos utiliza bloques de {tamaño_bloque} bytes y queremos guardar un archivo de {tamaño_archivo} bytes, ¿cuántos bloques físicos se deben asignar como mínimo para este archivo?"

pasos:
  - "Dividir el tamaño del archivo por el tamaño del bloque."
  - "Redondear hacia arriba (ceil) ya que un bloque no puede usarse parcialmente para otro archivo."

explicacion: |
  Aunque el archivo sea pequeño, el sistema operativo asigna bloques completos. En este caso, 1024/4096 = 0.25, lo que requiere 1 bloque completo.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["estructura", "jerarquia"]

respuesta: falso
tipo: vf

enunciado: "En un sistema de archivos jerárquico, un directorio es una estructura especial que contiene una lista de nombres de archivos y sus correspondientes punteros a inodos o direcciones de inicio. ¿Es esto verdadero o falso?"

explicacion: |
  Es verdadero. Un directorio actúa como un mapa que vincula un nombre legible para el usuario con la ubicación física o lógica (inodo) de los datos en el disco.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["conceptos", "directorios"]

respuesta: "una lista de archivos"
tipo: completar
respuestas_validas: ["una lista de archivos", "una estructura que contiene archivos"]

enunciado: "En un sistema de archivos, un directorio es ___ que permite organizar y localizar archivos en el disco."

explicacion: |
  Un directorio no es un archivo en sí mismo que contiene datos de usuario, sino una estructura de datos que contiene nombres de archivos y sus direcciones físicas en el disco.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["conceptos", "nombres_archivos"]

respuesta: falso
tipo: vf

enunciado: "El nombre de un archivo determina directamente la posición física de los sectores en el disco duro donde se almacenan sus datos."

explicacion: |
  Falso. El nombre es una etiqueta lógica. El sistema de archivos utiliza una tabla (como FAT o MFT) para traducir ese nombre a direcciones lógicas y físicas en el hardware.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["borrado", "espacio_disco"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [[ "el sistema marca el espacio como disponible", "el sistema sobreescribe los datos inmediatamente"], ["solo se borra el puntero en el directorio", "se limpian todos los bits del sector"]]

respuesta: escenarios[caso_idx][0
tipo: mc
opciones_explicitas: ["el sistema marca el espacio como disponible", "el sistema sobreescribe los datos inmediatamente", "solo se borra el puntero en el directorio", "se limpian todos los bits del sector"]

enunciado: "Cuando un usuario elimina un archivo de gran tamaño en un sistema de archivos estándar, {escenarios[caso_idx][0]}."

explicacion: |
  En la mayoría de los sistemas de archivos modernos, borrar un archivo no borra los datos reales del disco, sino que marca los clusters/sectores como "libres" en la tabla de asignación para que el SO pueda escribir nuevos datos allí en el futuro.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["proceso", "creacion"]

respuesta: ["Solicitud de creación", "Asignación de metadatos", "Asignación de bloques de datos", "Actualización del directorio"]
tipo: ordenar
opciones_explicitas: ["Solicitud de creación", "Asignación de metadatos", "Asignación de bloques de datos", "Actualización del directorio"]

enunciado: "Ordena los pasos lógicos que realiza el sistema operativo desde que una aplicación solicita crear un archivo hasta que este es visible en el explorador de archivos."

pasos:
  - "El usuario/app pide crear un archivo."
  - "El SO reserva espacio en la tabla de archivos (nombre, permisos, fecha)."
  - "El SO busca sectores libres en el disco para el contenido."
  - "El SO vincula el nombre con la dirección de los sectores en el directorio."

explicacion: |
  Primero se procesa la intención, luego se preparan los metadatos, se reserva el espacio físico y finalmente se actualiza la estructura de navegación (directorio) para que el usuario lo vea.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["nombres", "directorios"]

respuesta: verdadero
tipo: vf

enunciado: "En un mismo sistema de archivos, es posible tener dos archivos con el mismo nombre siempre y cuando se encuentren en directorios diferentes."

explicacion: |
  Verdadero. El nombre es único dentro de un directorio específico, pero cada directorio es un contenedor independiente. Por lo tanto, 'foto.jpg' puede existir en 'Carpeta_A' y 'Carpeta_B' sin conflicto.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["conceptos_basicos", "organizacion"]

respuesta: "directorio"
tipo: completar
respuestas_validas: ["directorio", "carpeta"]

enunciado: "Mientras que un archivo es una colección de datos almacenados bajo un nombre, un ___ es una estructura que permite organizar y agrupar dichos archivos."

explicacion: |
  Un archivo contiene la información propiamente dicha, mientras que el directorio (o carpeta) actúa como un contenedor lógico para organizar los archivos en una jerarquía.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["formatos", "comparacion"]

variables:
  escenario: uno_de([["FAT32", "No permite archivos mayores a 4GB"], ["NTFS", "Permite archivos de gran tamaño y seguridad"]])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["FAT32", "NTFS", "ext4"]

enunciado: "Si comparamos un sistema de archivos moderno como NTFS con uno antiguo como {escenario[0]}, ¿cuál es la limitación principal de este último en cuanto al tamaño de archivos individuales?"

explicacion: |
  El sistema FAT32 tiene una limitación técnica en el tamaño de los clusters que impide almacenar archivos individuales que superen los 4GB.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["metadatos", "atributos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que los metadatos de un archivo (como fecha de creación o tamaño) forman parte del contenido de datos del archivo mismo?"

explicacion: |
  Falso. Los metadatos son información sobre el archivo que es gestionada por el sistema de archivos (como en la tabla de asignación de archivos o el MFT), pero no son parte del contenido de datos que el usuario escribe.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["operaciones", "secuencia"]

respuesta: ["Solicitud de espacio", "Asignación de metadatos", "Escritura de datos", "Actualización de tabla de archivos"]
tipo: ordenar
opciones_explicitas: ["Solicitud de espacio", "Asignación de metadatos", "Escritura de datos", "Actualización de tabla de archivos"]

enunciado: "Ordena los pasos lógicos que sigue el sistema operativo desde que una aplicación solicita guardar un nuevo archivo hasta que este queda disponible:"

explicacion: |
  Primero el SO busca bloques libres (espacio), asigna la entrada en la estructura de metadatos, escribe la información y finalmente marca el archivo como disponible en la tabla del sistema de archivos.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "avanzado"
  tags: ["rendimiento", "fragmentacion"]

variables:
  caso: uno_de([[100, "fragmentado"], [100, "contiguo"]])

respuesta: caso[1
tipo: mc
opciones_explicitas: ["fragmentado", "contiguo"]

enunciado: "En un disco duro, si un archivo se almacena en bloques de datos que están físicamente separados en diferentes sectores del plato, el archivo se encuentra en un estado {caso[1]}. Si los bloques estuvieran en sectores adyacentes, se diría que es..."

explicacion: |
  La fragmentación ocurre cuando el sistema de archivos no puede asignar bloques contiguos, lo que obliga al cabezal del disco a moverse más, reduciendo el rendimiento.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["directorios", "jerarquia"]

variables:
  datos: [["Documentos/Proyectos/final.pdf", "final.pdf"], ["Fotos/Vacaciones/playa.jpg", "playa.jpg"], ["Musica/Rock/cancion.mp3", "cancion.mp3"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: [datos[idx][1]]

enunciado: "Si tenemos la ruta absoluta {datos[idx][0]}, el nombre del archivo es ___."

explicacion: |
  En un sistema de archivos jerárquico, la ruta indica la posición desde la raíz. El último elemento después de la última barra es el nombre del archivo.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["metadatos", "atributos"]

variables:
  datos: [["config.sys", "solo_lectura"], ["data.db", "oculto"], ["script.sh", "ejecutable"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["solo_lectura", "oculto", "ejecutable"]

enunciado: "Un archivo con el atributo {datos[idx][0]} tiene la propiedad de: ___"

explicacion: |
  Los metadatos o atributos definen permisos y propiedades del archivo (lectura, oculto, ejecución, etc.).
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "avanzado"
  tags: ["fragmentacion", "rendimiento"]

variables:
  datos: [[verdadero, "fragmentado"], [falso, "contiguo"]]
  idx: uno_de([0,1])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Si un archivo se almacena en sectores no contiguos debido a que el espacio libre está disperso, el disco está ___."

explicacion: |
  La fragmentación ocurre cuando los archivos no se almacenan en bloques contiguos, lo que puede afectar el rendimiento de lectura.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["flujo_archivo", "operaciones"]

respuesta: ["Crear entrada en tabla", "Asignar bloques de datos", "Actualizar metadatos", "Actualizar tabla de directorios"]
tipo: ordenar
opciones_explicitas: ["Crear entrada en tabla", "Asignar bloques de datos", "Actualizar metadatos", "Actualizar tabla de directorios"]

enunciado: "Ordena los pasos lógicos que realiza el sistema de archivos al guardar un archivo nuevo en el disco:"

explicacion: |
  El SO primero reserva espacio en la estructura de control, asigna los bloques físicos, marca los metadatos y finalmente lo hace visible en el directorio.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["capacidad", "unidades"]

variables:
  datos: [[1024, "1 KB"], [1048576, "1 MB"], [1073741824, "1 GB"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1 KB", "1 MB", "1 GB"]

enunciado: "Si el sistema reporta un tamaño de {datos[idx][0]} bytes, esto equivale a: ___"

explicacion: |
  En informática, las unidades suelen basarse en potencias de 2 (binarias): 1024 bytes = 1 KB, 1024^2 = 1 MB, etc.
```

## Sección: sistema-de-archivos-por-bitacora (21 preguntas)

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["journaling", "definicion", "consistencia"]

respuesta: verdadero
tipo: vf

enunciado: "La bitácora (journal) es un registro que almacena información sobre los cambios pendientes en los metadatos antes de aplicarlos al sistema de archivos."

explicacion: |
  Correcto. El propósito principal de la bitácora es registrar las intenciones de cambio en los metadatos para garantizar la consistencia del sistema ante fallos.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["recuperacion", "consistencia", "reinicio"]

respuesta: verdadero
tipo: vf

enunciado: "Al reiniciar después de un fallo, el sistema lee la bitácora para determinar qué operaciones de metadatos estaban pendientes y las completa o revierte."

explicacion: |
  Correcto. La bitácora actúa como un plan de trabajo. Si hay operaciones incompletas, el sistema las procesa para restaurar la integridad lógica del sistema de archivos.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["rendimiento", "fsck", "tiempo"]

variables:
  tiempo_fsck: random(30, 120)
  tiempo_journal: random(1, 5)

respuesta: "{tiempo_journal}"
tipo: input

enunciado: "Si un sistema sin journaling tarda {tiempo_fsck} segundos en escanear errores (fsck), ¿cuántos segundos tarda aproximadamente uno con journaling en recuperar la consistencia? (Redondea a entero)."

explicacion: |
  Con journaling, la recuperación es casi instantánea (segundos) porque solo se revisa la bitácora, a diferencia del escaneo completo del disco que toma minutos u horas.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["concepto", "analogia", "planificacion"]

respuesta: verdadero
tipo: vf

enunciado: "La bitácora funciona como un 'cuaderno de apuntes' donde se escribe el plan antes de ejecutar la tarea física en el disco."

explicacion: |
  Correcto. Esta analogía ilustra cómo el sistema escribe la intención de cambio primero, garantizando que si falla, pueda saber qué había planeado hacer.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["integridad", "estructura", "coherencia"]

respuesta: verdadero
tipo: vf

enunciado: "El journaling garantiza la integridad lógica, asegurando que la estructura de carpetas y archivos siempre sea coherente."

explicacion: |
  Correcto. La integridad lógica se refiere a que la estructura del sistema de archivos no queda rota o inconsistente tras un fallo.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["fsck", "comparacion", "rendimiento"]

respuesta: falso
tipo: vf

enunciado: "Los sistemas con journaling requieren ejecutar fsck completo cada vez que se apaga la computadora para verificar la integridad."

explicacion: |
  Falso. Con journaling, el fsck es muy rápido porque solo verifica la bitácora. El fsck completo solo es necesario en sistemas sin journaling o si hay errores graves no resueltos por la bitácora.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["estado", "bitacora", "fallos"]

respuesta: verdadero
tipo: vf

enunciado: "Un sistema de archivos se marca como 'sucio' (dirty) si hubo un fallo durante una operación que involucra la bitácora."

explicacion: |
  Correcto. El estado 'sucio' indica que hay operaciones en la bitácora que deben ser procesadas al reiniciar para completar o deshacer cambios.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["rendimiento", "comparacion", "tiempo"]

variables:
  tiempo_sin_journal: random(10, 60)
  tiempo_con_journal: random(1, 5)

respuesta: "{tiempo_con_journal}"
tipo: input

enunciado: "Si un disco sin journaling tarda {tiempo_sin_journal} segundos en repararse, ¿cuántos segundos tarda uno con journaling? (Redondea a entero)."

explicacion: |
  La recuperación con journaling es mucho más rápida (segundos) porque solo se procesan las entradas pendientes de la bitácora.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["consistencia", "estructura", "integridad"]

respuesta: verdadero
tipo: vf

enunciado: "La bitácora asegura que la estructura del sistema de archivos (directorios, bloques) sea consistente, aunque los datos de usuario estén intactos."

explicacion: |
  Correcto. El objetivo principal es la consistencia de la estructura (metadatos), permitiendo que el sistema acceda correctamente a los archivos.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["fallos", "recuperacion", "bitacora"]

respuesta: verdadero
tipo: vf

enunciado: "Ante un fallo repentino, la bitácora permite al sistema saber qué tareas estaban pendientes al momento del corte."

explicacion: |
  Correcto. La bitácora contiene el registro de las operaciones incompletas, permitiendo una recuperación ordenada.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["concepto", "diferencia", "backup"]

respuesta: falso
tipo: vf

enunciado: "La bitácora es un mecanismo de respaldo (backup) que copia los archivos de usuario a otro disco."

explicacion: |
  Falso. La bitácora no es un backup. Es un mecanismo de consistencia interna del sistema de archivos que registra cambios en metadatos, no una copia de seguridad de datos.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["estabilidad", "usuario", "beneficio"]

respuesta: verdadero
tipo: vf

enunciado: "El uso de journaling contribuye a una computadora más estable y menos propensa a corrupción de datos."

explicacion: |
  Correcto. Al prevenir inconsistencias en la estructura del sistema de archivos, se reduce la probabilidad de errores y corrupción de datos.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["verificacion", "fsck", "recuperacion"]

respuesta: verdadero
tipo: vf

enunciado: "El proceso de verificación tras un fallo con journaling es casi instantáneo porque el sistema ya sabe qué parte del disco está incompleta."

explicacion: |
  Correcto. La bitácora indica exactamente qué operaciones fallaron, evitando escanear todo el disco.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["analogia", "funcionamiento", "bitacora"]

respuesta: verdadero
tipo: vf

enunciado: "La bitácora es como un asistente que escribe el plan antes de ejecutar la tarea, para saber qué hacer si se interrumpe el trabajo."

explicacion: |
  Correcto. Esta analogía ayuda a entender el rol de la bitácora como registro de intenciones de cambio.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["integridad", "carpetas", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "El journaling asegura que la estructura de carpetas sea coherente, evitando que apunten a directorios inexistentes."

explicacion: |
  Correcto. La integridad de la estructura de directorios es clave para que el sistema pueda navegar y acceder a los archivos.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["rendimiento", "tiempo", "comparacion"]

variables:
  tiempo_sin_journal: random(20, 90)
  tiempo_con_journal: random(1, 5)

respuesta: "{tiempo_con_journal}"
tipo: input

enunciado: "Si un disco sin journaling tarda {tiempo_sin_journal} segundos en repararse, ¿cuántos segundos tarda uno con journaling? (Redondea a entero)."

explicacion: |
  La recuperación con journaling es rápida (segundos) porque solo se procesan las entradas pendientes de la bitácora.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "basico"
  tags: ["fallos", "luz", "recuperacion"]

respuesta: verdadero
tipo: vf

enunciado: "Ante un corte de luz, el journaling permite al sistema recuperar la consistencia de los metadatos al reiniciar."

explicacion: |
  Correcto. El journaling es crucial para manejar fallos de energía, asegurando que los cambios en metadatos se completen o se deshagan.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["registro", "intencion", "bitacora"]

respuesta: verdadero
tipo: vf

enunciado: "La bitácora es un registro de las intenciones de cambio en los metadatos antes de que se apliquen."

explicacion: |
  Correcto. El registro de intenciones permite al sistema saber qué hacer si la operación se interrumpe.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["consistencia", "logica", "integridad"]

respuesta: verdadero
tipo: vf

enunciado: "El journaling garantiza la consistencia lógica, asegurando que la estructura del sistema de archivos sea coherente."

explicacion: |
  Correcto. La consistencia lógica es el objetivo principal del journaling, evitando estructuras rotas.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["fsck", "rendimiento", "comparacion"]

respuesta: falso
tipo: vf

enunciado: "Los sistemas con journaling requieren fsck completo cada vez que se apagan para verificar la integridad."

explicacion: |
  Falso. Con journaling, el fsck es rápido y solo verifica la bitácora. El fsck completo es innecesario en la mayoría de los casos.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos_por_bitacora"
  nivel: "intermedio"
  tags: ["estado", "sucio", "bitacora"]

respuesta: verdadero
tipo: vf

enunciado: "Un sistema se marca como 'sucio' si hubo un fallo durante una operación que involucra la bitácora."

explicacion: |
  Correcto. El estado 'sucio' indica que hay operaciones pendientes en la bitácora que deben procesarse al reiniciar.
```

## Sección: sistemas-numeracion (24 preguntas)

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "vocabulario"]

enunciado: "¿Qué caracteriza a un sistema de numeración posicional?"
tipo: mc
opciones_explicitas:
  - "El valor de cada dígito depende de la posición en la que está escrito, según una potencia de la base"
  - "Cada dígito vale siempre lo mismo, sin importar dónde esté escrito"
  - "Sólo existe en el sistema decimal"
respuesta: "El valor de cada dígito depende de la posición en la que está escrito, según una potencia de la base"

explicacion: |
  El decimal es sólo uno de los tantos sistemas posicionales posibles.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el sistema decimal, cada posición de un número vale una potencia de 10."

explicacion: |
  Por eso se llama \"base 10\": decenas, centenas, etc. son potencias de
  10.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el sistema binario, cada posición de un número vale una potencia de 2."

explicacion: |
  Es la base que usan internamente las computadoras.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el sistema hexadecimal, cada posición de un número vale una potencia de 16."

explicacion: |
  \"Hexa\" (seis) + \"decimal\" (diez) = dieciséis, la base de este
  sistema.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "vocabulario"]

enunciado: "¿Cuántos dígitos posibles usa el sistema binario?"
tipo: mc
opciones_explicitas:
  - "2 (0 y 1)"
  - "10 (0 al 9)"
  - "16 (0 al 9 y A a F)"
respuesta: "2 (0 y 1)"

explicacion: |
  Corresponde a los dos estados naturales de un componente electrónico.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "vocabulario"]

enunciado: "¿Cuántos dígitos posibles usa el sistema hexadecimal?"
tipo: mc
opciones_explicitas:
  - "16 (0 al 9 y A a F)"
  - "2 (0 y 1)"
  - "10 (0 al 9)"
respuesta: "16 (0 al 9 y A a F)"

explicacion: |
  Los 10 dígitos decimales más 6 letras para los valores 10 a 15.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "vocabulario"]

enunciado: "En hexadecimal, ¿qué valor decimal representa la letra A?"
tipo: mc
opciones_explicitas:
  - "10"
  - "1"
  - "11"
respuesta: "10"

explicacion: |
  Las letras A a F representan los valores 10 a 15, en orden.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "vocabulario"]

enunciado: "En hexadecimal, ¿qué valor decimal representa la letra F?"
tipo: mc
opciones_explicitas:
  - "15"
  - "6"
  - "16"
respuesta: "15"

explicacion: |
  F es la última letra usada, y representa el valor más alto de un solo
  dígito hexadecimal.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "calculo"]

variables:
  b3: uno_de([0, 1])
  b2: uno_de([0, 1])
  b1: uno_de([0, 1])
  b0: uno_de([0, 1])

respuesta: b3 * 8 + b2 * 4 + b1 * 2 + b0 * 1
tipo: input
tolerancia_abs: 0

enunciado: "El número binario {b3}{b2}{b1}{b0}, ¿a qué valor decimal equivale?"

pasos:
  - "{b3}×8 + {b2}×4 + {b1}×2 + {b0}×1"

explicacion: |
  Se suma el valor posicional de cada bit que esté en 1.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "calculo"]

variables:
  b3: uno_de([0, 1])
  b2: uno_de([0, 1])
  b1: uno_de([0, 1])
  b0: uno_de([0, 1])

respuesta: b3 * 8 + b2 * 4 + b1 * 2 + b0 * 1
tipo: input
tolerancia_abs: 0

enunciado: "El número binario {b3}{b2}{b1}{b0}, ¿a qué valor decimal equivale?"

explicacion: |
  Mismo procedimiento: sumar 8, 4, 2 o 1 según qué bits estén en 1.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Con 4 bits (1111 en binario), el valor máximo representable es 15 en decimal."

explicacion: |
  1111 = 8+4+2+1 = 15, y coincide con el dígito hexadecimal más alto (F).
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las computadoras usan binario internamente porque sus componentes electrónicos trabajan naturalmente con dos estados (encendido/apagado)."

explicacion: |
  Representar de forma confiable más de dos estados sería mucho más
  complejo electrónicamente.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada dígito hexadecimal representa exactamente 4 bits, porque 16 es 2 elevado a la 4."

explicacion: |
  Es la razón matemática de por qué el hexadecimal es tan práctico para
  representar binario de forma compacta.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Dos dígitos hexadecimales representan exactamente 1 byte (8 bits)."

explicacion: |
  Cada dígito hex son 4 bits, así que dos dígitos son 4+4 = 8 bits.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "avanzado"
  tags: ["sistemas_numeracion", "problema"]

enunciado: "El grupo de 4 bits \"1010\", ¿a qué dígito hexadecimal corresponde?"
tipo: mc
opciones_explicitas:
  - "A"
  - "8"
  - "5"
respuesta: "A"

explicacion: |
  1010 en binario es 8+0+2+0 = 10 en decimal, que en hexadecimal es la
  letra A.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "avanzado"
  tags: ["sistemas_numeracion", "problema"]

enunciado: "El grupo de 4 bits \"0110\", ¿a qué dígito hexadecimal corresponde?"
tipo: mc
opciones_explicitas:
  - "6"
  - "B"
  - "9"
respuesta: "6"

explicacion: |
  0110 en binario es 0+4+2+0 = 6 en decimal, que en hexadecimal se
  escribe igual (6), porque es menor a 10.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "avanzado"
  tags: ["sistemas_numeracion", "calculo"]

variables:
  digito_alto: random(1, 9)
  digito_bajo: random(0, 9)

respuesta: digito_alto * 16 + digito_bajo
tipo: input
tolerancia_abs: 0

enunciado: "Un número hexadecimal de dos dígitos es \"{digito_alto}{digito_bajo}\" (los dos dígitos son números, sin letras). ¿A qué valor decimal equivale?"

pasos:
  - "{digito_alto} × 16 + {digito_bajo}"

explicacion: |
  El dígito de la izquierda vale por la posición de las \"dieciseises\";
  el de la derecha, por las unidades.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "avanzado"
  tags: ["sistemas_numeracion", "calculo"]

variables:
  digito_alto: random(1, 9)
  digito_bajo: random(0, 9)
  valor_decimal: digito_alto * 16 + digito_bajo

respuesta: digito_alto
tipo: input
tolerancia_abs: 0.1

enunciado: "Un número hexadecimal de dos dígitos (ambos sin letras) vale {valor_decimal} en decimal, y su dígito de la derecha es {digito_bajo}. ¿Cuál es su dígito de la izquierda?"

explicacion: |
  Se despeja restando el dígito de la derecha y dividiendo por 16.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El hexadecimal es, en la práctica, una forma compacta de escribir binario: cada dígito hex corresponde exactamente a un grupo de 4 bits, sin ninguna conversión aproximada de por medio."

explicacion: |
  Por eso pasar de binario a hexadecimal (y viceversa) es directo,
  agrupando de a 4 bits.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "avanzado"
  tags: ["sistemas_numeracion", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "Con la misma cantidad de dígitos (dos), el sistema hexadecimal puede representar muchos más valores distintos que el sistema binario."

explicacion: |
  Dos dígitos hex representan hasta 256 valores (16×16); dos dígitos
  binarios sólo representan hasta 4 (2×2).
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "orden"]

tipo: ordenar
enunciado: "Ordená estos sistemas de numeración de menor a mayor cantidad de valores distintos que puede representar un solo dígito."
opciones_explicitas:
  - "Decimal"
  - "Binario"
  - "Hexadecimal"
respuesta_orden: ["Binario", "Decimal", "Hexadecimal"]

explicacion: |
  Binario tiene 2 dígitos posibles, decimal 10, hexadecimal 16.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "verificacion"]

variables:
  b3: uno_de([0, 1])
  b2: uno_de([0, 1])
  b1: uno_de([0, 1])
  b0: uno_de([0, 1])
  correcto: b3 * 8 + b2 * 4 + b1 * 2 + b0 * 1
  error: uno_de([0, 0, 0, 3, -3])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? Binario {b3}{b2}{b1}{b0}, valor decimal informado: {mostrado}."

explicacion: |
  Se vuelve a sumar el valor posicional de cada bit y se compara.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion"]

variables:
  b3: uno_de([0, 1])
  b2: uno_de([0, 1])
  b1: uno_de([0, 1])
  b0: uno_de([0, 1])
  decimal: b3 * 8 + b2 * 4 + b1 * 2 + b0 * 1

tipo: completar
enunciado: "El binario {b3}{b2}{b1}{b0} vale {decimal} en decimal. Completá: ___ (el bit más a la izquierda) = {b3}."
respuestas_validas:
  - b3

explicacion: |
  Es sólo identificar el bit ya dado en el enunciado.
```

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El binario (base 2) es el sistema que usan las computadoras internamente; el hexadecimal (base 16) es una forma compacta de escribir ese mismo binario, agrupando de a 4 bits por cada dígito."

explicacion: |
  Es la idea central de todo el tema.
```
