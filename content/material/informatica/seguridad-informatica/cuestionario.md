# Informatica — Seguridad informatica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

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
  respuesta_correcta: escenario[1]

tipo: completar
respuestas_validas:
  - "secuestro"
  - "destrucción"

enunciado: "El ransomware es un tipo de malware que realiza un {escenario[0]} de los archivos del usuario para luego exigir un pago a cambio de la clave de descifrado."

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

respuesta_orden: ["Desconfiar de correos con enlaces sospechosos", "No hacer clic en ningún enlace ni descargar archivos", "Reportar el correo al departamento de seguridad", "Cambiar las contraseñas de las cuentas afectadas"]

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

### 6 — El engaño del correo electrónico

```
metadata:
  materia: "informatica"
  tema: "phishing"
  nivel: "basico"
  tags: ["seguridad", "phishing", "ingenieria_social"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["Recibes un correo de tu banco diciendo que tu cuenta ha sido bloqueada y debes hacer clic en un enlace para 'verificar' tus datos.", "phishing"], ["Recibes un mensaje de un amigo por redes sociales con un enlace extraño que dice ser un video gracioso, pero el remitente no es él.", "phishing"]]

respuesta: escenarios[caso_idx][1]
tipo: mc
opciones_explicitas: ["malware", "phishing", "ransomware", "spyware"]

enunciado: "Un usuario recibe un mensaje urgente de una entidad conocida solicitando información sensible a través de un enlace sospechoso. ¿A qué tipo de amenaza estamos ante?"

explicacion: |
  El caso descrito es un ejemplo de phishing, una técnica de ingeniería social donde el atacante se hace pasar por una entidad de confianza para engañar a la víctima y obtener datos confidenciales.
```

### 7 — Identificación de malware

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

### 8 — Protocolo de respuesta ante incidentes

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "intermedio"
  tags: ["seguridad", "protocolo", "reaccion"]

tipo: ordenar

opciones_explicitas: ["Detectar el comportamiento sospechoso en el sistema.", "Desconectar el equipo de la red (Wi-Fi o cable).", "Informar al responsable de seguridad o soporte técnico.", "Realizar un escaneo completo con el antivirus."]

respuesta_orden: ["Detectar el comportamiento sospechoso en el sistema.", "Desconectar el equipo de la red (Wi-Fi o cable).", "Informar al responsable de seguridad o soporte técnico.", "Realizar un escaneo completo con el antivirus."]

enunciado: "Si sospechas que tu computadora ha sido infectada, ordena los pasos lógicos para mitigar el impacto del incidente:"

explicacion: |
  Lo primero es la detección, seguido de la contención (desconectar la red para evitar la propagación), la comunicación del incidente y finalmente la limpieza/escaneo.
```

### 9 — Fortalecimiento de contraseñas

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["contraseñas", "seguridad"]

respuesta: "complejo"
tipo: completar
respuestas_validas:
  - "complejo"

enunciado: "Para asegurar una cuenta, una contraseña debe ser ___ (que incluya mayúsculas, minúsculas, números y símbolos) en lugar de ser una palabra simple."

explicacion: |
  Las contraseñas complejas aumentan significativamente el tiempo y la dificultad que requiere un atacante para realizar un ataque de fuerza bruta.
```

### 10 — El origen de la amenaza

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

### 11 — El engaño del Phishing

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["phishing", "ingenieria_social"]

tipo: mc
opciones_explicitas: ["Un correo de un banco pidiendo tu contraseña", "Un software que mejora la velocidad del PC", "Un mensaje de un amigo con un link de un video", "Un antivirus que detecta un virus"]
respuesta: "Un correo de un banco pidiendo tu contraseña"

enunciado: "El phishing es una técnica de ingeniería social que se basa en el engaño. Un ejemplo típico de este ataque es:"

explicacion: |
  El phishing busca engañar al usuario para que entregue información sensible (contraseñas, datos bancarios) suplantando la identidad de una entidad de confianza.
```

### 12 — Malware: Ransomware

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["malware", "ransomware"]

variables:
  es_secuestro: verdadero

tipo: vf

respuesta: verdadero

enunciado: "El Ransomware es un tipo de malware que cifra los archivos del usuario y exige un pago para recuperarlos. ¿Es esto verdadero o falso?"

explicacion: |
  Efectivamente, el ransomware 'secuestra' la información mediante cifrado y solicita un rescate, generalmente en criptomonedas.
```

### 13 — Pasos ante un correo sospechoso

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
respuesta_orden: ["Recibir correo con link extraño", "No hacer clic en el enlace ni descargar archivos", "Borrar el correo o reportarlo como spam", "Notificar al equipo de soporte técnico"]
```

### 14 — La trampa de la URL

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
respuestas_validas:
  - "g00gle.com"
  - "micros0ft.com"

enunciado: "En un ataque de phishing, el atacante suele usar dominios visualmente similares al real (typosquatting). Si el sitio legítimo es {escenarios[escenario_idx][0]}, el atacante podría usar ___ para engañarte."

explicacion: |
  Los atacantes cambian caracteres (como un cero por una 'o') para que la URL parezca legítima a simple vista, pero el dominio es distinto.
```

### 15 — Contraseñas seguras

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["contraseñas", "buenas_practicas"]

tipo: mc
opciones_explicitas: ["123456", "MiNombre2024", "P@ssw0rd_2024!_Xy", "password"]
respuesta: "P@ssw0rd_2024!_Xy"

enunciado: "De la siguiente lista, ¿cuál es la opción que presenta una mayor resistencia ante un ataque de fuerza bruta debido a su complejidad?"

explicacion: |
  Una contraseña segura debe combinar mayúsculas, minúsculas, números, caracteres especiales y tener una longitud considerable para aumentar el tiempo necesario para descifrarla.
```

### 16 — Phishing vs. Smishing

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
respuestas_validas:
  - "smishing"

explicacion: |
  El phishing es el término general, pero se diferencia según el canal: phishing (email), smishing (SMS) y vishing (voz/llamadas).
```

### 17 — Ransomware vs. Virus

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["malware", "ransomware"]

opciones_explicitas: ["El ransomware cifra archivos para pedir un rescate, mientras que un virus se replica infectando otros archivos.", "Un virus siempre cifra archivos, mientras que el ransomware solo se propaga por redes.", "El ransomware es un tipo de virus que no requiere de un archivo anfitrión para ejecutarse."]

respuesta: "El ransomware cifra archivos para pedir un rescate, mientras que un virus se replica infectando otros archivos."
tipo: mc
enunciado: "¿Cuál es la distinción principal entre ransomware y virus?"

explicacion: |
  La distinción principal es el objetivo: el ransomware busca extorsión mediante el secuestro de datos (cifrado), mientras que un virus es un concepto de propagación que infecta archivos existentes.
```

### 18 — Autenticación vs. Autorización

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

### 19 — Pasos para una respuesta ante incidentes

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "avanzado"
  tags: ["protocolos"]

opciones_explicitas: ["Detección", "Contención", "Erradicación", "Recuperación"]

respuesta_orden: ["Detección", "Contención", "Erradicación", "Recuperación"]
tipo: ordenar

enunciado: "Ordena las siguientes fases de la respuesta a un incidente de seguridad informática, desde la primera hasta la última:"

explicacion: |
  Ante un incidente, primero se debe detectar la anomalía, luego contener el daño para que no se propague, erradicar la causa raíz y finalmente recuperar los sistemas a su estado normal.
```

### 20 — Malware: Troyano vs. Gusano

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
respuestas_validas:
  - "interacción del usuario"

explicacion: |
  El gusano es capaz de replicarse sin intervención humana aprovechando vulnerabilidades de red, mientras que el troyano se disfraza de software legítimo y depende de que el usuario lo ejecute.
```

### 21 — El correo sospechoso

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

### 22 — Identificando Malware

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

### 23 — Verdad o Falso: Contraseñas

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

### 24 — Pasos ante un incidente

```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "intermedio"
  tags: ["reaccion", "incidente"]

enunciado: "Has detectado que tu computadora está actuando de forma errática y aparecen ventanas emergentes constantes. Ordena los pasos lógicos para mitigar el riesgo:"

opciones_explicitas: ["Desconectar el equipo de la red", "Realizar un escaneo con antivirus", "Cambiar contraseñas desde otro dispositivo seguro"]
respuesta_orden: ["Desconectar el equipo de la red", "Realizar un escaneo con antivirus", "Cambiar contraseñas desde otro dispositivo seguro"]
tipo: ordenar

explicacion: |
  Primero se aísla el equipo (desconectar red) para evitar la propagación, luego se limpia el sistema y finalmente se asegura la identidad desde un equipo limpio.
```

### 25 — Completar: El factor humano

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

respuestas_validas:
  - "ingeniería social"
  - "malware"
respuesta: tabla[idx][0]
tipo: completar

explicacion: |
  La técnica utilizada es la {tabla[idx][0]}. El eslabón más débil en la seguridad suele ser el usuario debido a la manipulación psicológica.
```
