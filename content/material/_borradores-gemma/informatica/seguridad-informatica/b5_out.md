### 1 — El correo sospechoso
```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["phishing", "seguridad"]

variables:
  escenario: uno_de([["Recibiste un mail de tu banco pidiendo tu clave urgency", "phishing"], ["Un amigo te envía un link de un video que no abre", "posible_virus"], ["Un aviso de actualización de Windows en la barra de tareas", "sistema"]])
  idx: uno_de([0,1,2])

enunciado: "Analiza el siguiente caso: {escenario[idx][0]}. ¿Qué tipo de amenaza o situación representa?"

opciones_explicitas: ["phishing", "posible_virus", "sistema"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  El caso {escenario[idx][0]} se clasifica como {escenario[idx][1]}. Recuerda nunca entregar credenciales por correo electrónico.
```

### 2 — Identificando Malware
```
metadata:
  materia: "informatica"
  tema: "seguridad_informatica"
  nivel: "basico"
  tags: ["malware", "virus"]

variables:
  caso: uno_de([["Un programa que se oculta y registra tus pulsaciones de teclado", "spyware"], ["Un programa que cifra tus archivos y pide dinero", "ransomware"], ["Un programa que se duplica y se propaga por la red", "virus"]])
  idx: uno_de([0,1,2])

enunciado: "Se detecta en el sistema: {caso[idx][0]}. ¿Cuál es el nombre de este malware?"

opciones_explicitas: ["spyware", "ransomware", "virus"]
respuesta: caso[idx][1]
tipo: mc

explicacion: |
  El software descrito es {caso[idx][1]}. Es fundamental contar con un antivirus actualizado.
```

### 3 — Verdad o Falso: Contraseñas
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

### 4 — Pasos ante un incidente
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

### 5 — Completar: El factor humano
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
respuesta: tabla[idx][0]
tipo: completar

explicacion: |
  La técnica utilizada es la {tabla[idx][0]}. El eslabón más débil en la seguridad suele ser el usuario debido a la manipulación psicológica.
```