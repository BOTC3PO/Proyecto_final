### 1 — ¿Qué es el Phishing?
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

### 2 — Verdadero o Falso: Malware
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

### 3 — Completar: El Ransomware
```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["ransomware", "amenazas"]

variables:
  escenario: uno_de([["cifrado", "secuestro"], ["borrado", "destrucción"]])

respuesta: tabla_respuestas[idx][1]
tabla_respuestas: [["cifrado", "secuestro"], ["borrado", "destrucción"]]

tipo: completar
respuestas_validas: ["secuestro", "destrucción"]

enunciado: "El ransomware es un tipo de malware que realiza un ___ de los archivos del usuario para luego exigir un pago a cambio de la clave de descifrado."

explicacion: |
  El ransomware bloquea el acceso a tus datos (usualmente mediante cifrado) para extorsionar a la víctima.
```

### 4 — Ordenar: Pasos ante un ataque de Phishing
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

### 5 — ¿Cuál es la mejor práctica de seguridad?
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