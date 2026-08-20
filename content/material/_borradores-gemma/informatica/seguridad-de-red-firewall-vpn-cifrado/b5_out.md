### 1 — El rol del Firewall
```
metadata:
  materia: "informatica"
  tema: "seguridad_de_red_firewall"
  nivel: "basico"
  tags: ["firewall", "redes"]

variables:
  escenario: uno_de([["bloquear tráfico no deseado", "bloquear"], ["permitir todo el tráfico", "permitir"], ["analizar virus", "analizar"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["bloquear", "permitir", "analizar"]

enunciado: "Un firewall actúa como una barrera de seguridad cuya función principal es {escenario[idx][0]}."

explicacion: |
  El firewall inspecciona los paquetes de red y decide si permitirlos o bloquearlos basándose en un conjunto de reglas de seguridad predefinidas.
```

### 2 — Cifrado en tránsito
```
metadata:
  materia: "informatica"
  tema: "cifrado_datos_transito"
  nivel: "intermedio"
  tags: ["cifrado", "seguridad"]

variables:
  protocolo: uno_de([["HTTPS", "seguro"], ["HTTP", "inseguro"]])
  idx: uno_de([0,1])

respuesta: protocolo[idx][1]
tipo: vf

enunciado: "Si un usuario navega utilizando el protocolo {protocolo[idx]}, la información que transita por la red se considera {protocolo[idx][1]}."

explicacion: |
  El protocolo HTTPS utiliza TLS/SSL para cifrar la comunicación, protegiendo los datos contra la interceptación (sniffing). El protocolo HTTP envía los datos en texto plano.
```

### 3 — Componentes de una VPN
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

### 4 — Orden de establecimiento de conexión segura
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

### 5 — El impacto del cifrado simétrico
```
metadata:
  materia: "informatica"
  tema: "cifrado_simetrico"
  nivel: "avanzado"
  tags: ["cifrado", "simetrico", "clave"]

variables:
  caso: uno_de([["una sola clave para cifrar y descifrar", "simétrico"], ["dos claves distintas", "asimétrico"]])
  idx: uno_de([0,1])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["simétrico", "asimétrico"]

enunciado: "Si el sistema utiliza {caso[idx][0]}, estamos ante un algoritmo de cifrado {caso[idx][1]}."

explicacion: |
  En el cifrado simétrico se utiliza la misma clave para las operaciones de cifrado y descifrado. En el asimétrico se utiliza un par de claves (pública y privada).
```