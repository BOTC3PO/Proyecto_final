### 1 — Huella digital vs. Privacidad
```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "basico"
  tags: ["privacidad", "huella_digital"]

respuesta: "huella digital"
tipo: completar
respuestas_validas: ["huella digital"]

enunciado: "Mientras que la privacidad se refiere al derecho a controlar nuestra información personal, el rastro de datos que dejamos al navegar por internet se conoce como ___."
```

### 2 — Actividad pasiva vs. Activa
```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "intermedio"
  tags: ["huella_digital", "datos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Publicar una foto en Instagram", "dejar un rastro de huella digital activa"],
    ["Navegar por una web y que se guarden tus cookies", "dejar un rastro de huella digital pasiva"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["dejar un rastro de huella digital activa", "dejar un rastro de huella digital pasiva", "no dejar rastro de huella digital", "borrar la huella digital"]

enunciado: "Si realizas la siguiente acción: {escenarios[escenario_idx][0]}, ¿qué tipo de huella digital estás generando?"

explicacion: |
  La huella digital activa es aquella que creas deliberadamente (posts, correos), mientras que la pasiva es la que se recolecta sin que te des cuenta (IP, cookies, historial de navegación).
```

### 3 — Verdad de la huella digital
```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "basico"
  tags: ["huella_digital", "permanencia"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de una conversación presencial que puede ser olvidada, la huella digital suele ser persistente y difícil de eliminar por completo de la red."
```

### 4 — El proceso de recolección de datos
```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "intermedio"
  tags: ["huella_digital", "datos"]

respuesta: ["Navegar por un sitio web", "Recolección de cookies", "Creación de un perfil publicitario", "Segmentación de anuncios"]
tipo: ordenar

opciones_explicitas: ["Navegar por un sitio web", "Recolección de cookies", "Creación de un perfil publicitario", "Segmentación de anuncios"]

enunciado: "Ordena cronológicamente cómo la actividad de un usuario se convierte en publicidad dirigida:"

explicacion: |
  Primero navegas, luego el sitio recolecta datos (cookies), con esos datos las empresas crean un perfil de tus gustos y finalmente te muestran anuncios basados en ese perfil.
```

### 5 — Privacidad vs. Anonimato
```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "avanzado"
  tags: ["privacidad", "anonimato"]

respuesta: "anonimato"
tipo: completar
respuestas_validas: ["anonimato"]

enunciado: "La privacidad busca proteger nuestra identidad y datos, mientras que el ___ busca permitir que un usuario actúe en la red sin que se le pueda identificar directamente."
```