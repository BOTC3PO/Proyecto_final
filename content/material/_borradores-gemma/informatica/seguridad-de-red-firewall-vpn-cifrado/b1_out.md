### 1 — El rol del Firewall
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
respuesta: ["Autenticación", "Encapsulamiento", "Cifrado"]
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

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1]
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