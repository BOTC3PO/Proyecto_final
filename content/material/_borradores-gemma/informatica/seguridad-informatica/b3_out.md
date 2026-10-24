### 1 — El engaño del Phishing
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

### 2 — Malware: Ransomware
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

### 3 — Pasos ante un correo sospechoso
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

### 4 — La trampa de la URL
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

### 5 — Contraseñas seguras
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