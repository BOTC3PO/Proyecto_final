### 1 — Phishing vs. Smishing
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

### 2 — Ransomware vs. Virus
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

### 3 — Autenticación vs. Autorización
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

### 4 — Pasos para una respuesta ante incidentes
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

### 5 — Malware: Troyano vs. Gusano
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