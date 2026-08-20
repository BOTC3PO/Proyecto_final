### 1 — El rol del Firewall en una red local
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

### 2 — El proceso de cifrado en una VPN
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
tipo: vf

explicacion: |
  IPsec (Internet Protocol Security) es un conjunto de protocolos para asegurar las comunicaciones IP mediante la autenticación y el cifrado de cada paquete en una comunicación IP.
```

### 3 — Pasos para el establecimiento de una conexión segura
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

### 4 — Identificación de protocolos vulnerables
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

### 5 — Cálculo de la integridad mediante Hash
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