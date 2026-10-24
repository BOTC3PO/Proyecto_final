### 1 — El engaño del correo electrónico
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

respuesta: escenarios[caso_idx][1]
tipo: mc
opciones_explicitas: ["malware", "phishing", "ransomware", "spyware"]

enunciado: "Un usuario recibe un mensaje urgente de una entidad conocida solicitando información sensible a través de un enlace sospechoso. ¿A qué tipo de amenaza estamos ante?"

explicacion: |
  El caso descrito es un ejemplo de phishing, una técnica de ingeniería social donde el atacante se hace pasar por una entidad de confianza para engañar a la víctima y obtener datos confidenciales.
```

### 2 — Identificación de malware
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

### 3 — Protocolo de respuesta ante incidentes
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

### 4 — Fortalecimiento de contraseñas
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

### 5 — El origen de la amenaza
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