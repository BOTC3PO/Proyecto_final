### 1 — El rastro de tus redes
```
metadata:
  materia: "ciudadania-digital"
  tema: "privacidad_huella_digital"
  nivel: "basico"
  tags: ["huella_digital", "privacidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["publicar una foto de un viaje", "comentar en un post de un amigo"],
    ["dejar un comentario en un video", "dar 'like' a una publicidad"]
  ]

enunciado: "Si realizas la acción de {escenarios[escenario_idx][0]}, estás generando parte de tu huella digital."

respuesta: verdadero
tipo: vf

explicacion: |
  Cada interacción en internet, ya sea una publicación, un comentario o un 'like', deja un rastro de datos que conforma tu huella digital.
```

### 2 — Gestión de la privacidad en perfiles
```
metadata:
  materia: "ciudadania-digital"
  tema: "privacidad_huella_digital"
  nivel: "intermedio"
  tags: ["privacidad", "configuracion"]

variables:
  perfil_tipo: uno_de([0, 1])
  perfiles: [
    ["público", "privado"],
    ["público", "privado"]
  ]

enunciado: "Si configuras el perfil de una red social como {perfiles[perfil_tipo][1]}, los usuarios que no sean tus amigos no podrán ver tu contenido directamente. Esto es una medida de: ___"

respuestas_validas: ["privacidad", "seguridad", "identidad"]
respuesta: "privacidad"
tipo: completar

explicacion: |
  Configurar perfiles como 'privados' es una acción fundamental para controlar quién tiene acceso a tu información personal, protegiendo tu privacidad.
```

### 3 — Consecuencias de la huella digital
```
metadata:
  materia: "ciudadania-digital"
  tema: "privacidad_huella_digital"
  nivel: "intermedio"
  tags: ["consecuencias", "reputacion"]

opciones_explicitas: ["La huella digital es temporal y se borra al cerrar sesión", "La huella digital es permanente y puede afectar tu reputación futura", "La huella digital solo la ven las empresas de publicidad"]

enunciado: "Analiza el siguiente caso: Un reclutador busca el nombre de un candidato en internet y encuentra comentarios ofensivos que el candidato hizo hace 5 años. ¿Cuál es la lección principal sobre la huella digital?"

respuesta: "La huella digital es permanente y puede afectar tu reputación futura"
tipo: mc

explicacion: |
  Incluso si borras un contenido, es posible que haya sido capturado (screenshots) o archivado. La huella digital es una construcción persistente de nuestra identidad online.
```

### 4 — Pasos para una navegación segura
```
metadata:
  materia: "ciudadania-digital"
  tema: "privacidad_huella_digital"
  nivel: "basico"
  tags: ["seguridad", "pasos"]

opciones_explicitas: ["Revisar la configuración de privacidad", "Publicar información personal", "Navegar sin protección"]

enunciado: "Para reducir el rastro de datos innecesarios y proteger tu privacidad, ¿cuál es el orden correcto de acciones para asegurar una cuenta nueva?"

pasos:
  - "Crear una cuenta con datos reales"
  - "Revisar la configuración de privacidad"
  - "Activar la autenticación en dos pasos"

respuesta: ["Crear una cuenta con datos reales", "Revisar la configuración de privacidad", "Activar la autenticación en dos pasos"]
tipo: ordenar

explicacion: |
  La gestión de la privacidad comienza con la configuración consciente de las herramientas que usamos, limitando la exposición de datos sensibles.
```

### 5 — El rastro de la navegación
```
metadata:
  materia: "ciudadania-digital"
  tema: "privacidad_huella_digital"
  nivel: "avanzado"
  tags: ["cookies", "rastreo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["un sitio web de noticias", "una tienda online"],
    ["un sitio web de noticias", "una tienda online"]
  ]

enunciado: "Al visitar {casos[caso_idx][0]}, el sitio utiliza 'cookies' para recordar tus preferencias. ¿Es cierto que estas cookies forman parte de tu huella digital?"

respuesta: verdadero
tipo: vf

explicacion: |
  Las cookies son archivos que los sitios web guardan en tu navegador. Al registrar tus hábitos de navegación, son un componente clave de tu huella digital pasiva.
```