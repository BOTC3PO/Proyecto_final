### 1 — El rastro de tus redes
```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "basico"
  tags: ["privacidad", "huella_digital"]

variables:
  escenario_idx: uno_de([0,1,2])
  escenarios: [["publicar una foto en una red social abierta", "huella digital pública"], ["eliminar un comentario de un foro antiguo", "huella digital persistente"], ["usar una contraseña débil en un sitio web", "riesgo de seguridad"]]

enunciado: "Si realizas la acción de {escenarios[escenario_idx][0]}, estás generando {escenarios[escenario_idx][1]}."

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["huella digital pública", "huella digital persistente", "riesgo de seguridad", "identidad digital segura"]

explicacion: |
  Cada acción que realizamos en internet (likes, posts, búsquedas) deja un rastro que conforma nuestra huella digital.
```

### 2 — ¿Es privado lo que comparto?
```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "basico"
  tags: ["privacidad", "verdadero_falso"]

enunciado: "Aunque borres una publicación de tu perfil, es posible que la información ya haya sido capturada por otros usuarios o buscadores, por lo que la huella digital es difícil de borrar por completo."

respuesta: verdadero
tipo: vf

explicacion: |
  La persistencia es una característica clave de la huella digital. Una vez que algo está en la red, perdemos el control total sobre su propagación.
```

### 3 — Configuración de privacidad
```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "intermedio"
  tags: ["privacidad", "configuracion"]

variables:
  caso_idx: uno_de([0,1])
  casos: [["un perfil de Instagram configurado como 'Público'", "poca privacidad"], ["un perfil de Instagram configurado como 'Privado'", "mayor privacidad"]]

enunciado: "En el caso de {casos[caso_idx][0]}, el usuario tiene {___}."

respuesta: casos[caso_idx][1]
tipo: completar
respuestas_validas: ["poca privacidad", "mayor privacidad"]

explicacion: |
  La configuración de privacidad determina quién puede acceder a tu información y cómo se construye tu huella digital frente a terceros.
```

### 4 — Pasos para proteger tu identidad
```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "intermedio"
  tags: ["seguridad", "ordenar"]

enunciado: "Ordena los siguientes pasos para minimizar el impacto de tu huella digital de forma proactiva, desde la acción más preventiva hasta la de reacción ante un problema."

opciones_explicitas: ["Configurar privacidad en redes", "Usar autenticación de dos pasos", "Revisar términos de servicio", "Eliminar cuentas inactivas"]
respuesta: ["Configurar privacidad en redes", "Usar autenticación de dos pasos", "Revisar términos de servicio", "Eliminar cuentas inactivas"]
tipo: ordenar

explicacion: |
  La gestión de la privacidad debe ser un proceso constante: desde la configuración inicial hasta la limpieza de cuentas que ya no usamos.
```

### 5 — El impacto de la huella digital
```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "avanzado"
  tags: ["consecuencias", "reputacion"]

variables:
  impacto_idx: uno_de([0,1])
  impactos: [["un reclutador laboral ve una foto inapropiada tuya en una red social", "daño a la reputación digital"], ["un banco analiza tus hábitos de consumo para darte un crédito", "perfilamiento de datos"]]

enunciado: "Si ocurre que {impactos[impacto_idx][0]}, esto puede resultar en {___}."

respuesta: impactos[impacto_idx][1]
tipo: completar
respuestas_validas: ["daño a la reputación digital", "perfilamiento de datos"]

explicacion: |
  La huella digital no solo afecta la privacidad, sino que tiene consecuencias tangibles en la vida real, como la reputación profesional o el perfilamiento comercial.
```