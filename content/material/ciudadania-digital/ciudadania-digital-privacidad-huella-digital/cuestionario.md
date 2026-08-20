# Ciudadania Digital — Ciudadania digital privacidad huella digital (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — ¿Qué es la huella digital?

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania-digital-privacidad-huella-digital"
  nivel: "basico"
  tags: ["privacidad", "huella-digital"]

tipo: mc
opciones_explicitas: ["El rastro de datos que dejamos al navegar por internet", "La contraseña que usamos para entrar a redes sociales", "El historial de búsqueda que se borra automáticamente", "Un virus que roba información personal"]

respuesta: "El rastro de datos que dejamos al navegar por internet"

enunciado: "La ___ es el rastro de datos que dejamos al navegar por internet, ya sea de forma activa (publicaciones) o pasiva (cookies)."

explicacion: |
  La huella digital es el conjunto de datos que dejan rastro de nuestras actividades en línea. Cada vez que buscas algo, haces un post o visitas una web, estás dejando una marca.
```

### 2 — Verdad o Falso: Privacidad Online

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania-digital-privacidad-huella-digital"
  nivel: "basico"
  tags: ["privacidad", "verdadero-falso"]

tipo: vf

respuesta: falso

enunciado: "Usar el modo incógnito en el navegador garantiza que nuestra huella digital sea totalmente invisible para los sitios web que visitamos."

explicacion: |
  Falso. El modo incógnito solo evita que el historial se guarde localmente en tu dispositivo, pero los sitios web, tu proveedor de internet y los administradores de red aún pueden rastrear tu actividad.
```

### 3 — Elementos de la Huella Digital

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania-digital-privacidad-huella-digital"
  nivel: "intermedio"
  tags: ["huella-digital", "vocabulario"]

respuesta: "Datos de navegación"
tipo: mc
opciones_explicitas: ["Datos de navegación", "Datos de identidad", "Datos de ubicación", "Datos de contacto"]

enunciado: "La huella digital se puede dividir en dos tipos: la huella activa, donde nosotros decidimos compartir información, y la huella pasiva, que se compone principalmente de ___."

pasos:
  - "Identificar la diferencia entre acción voluntaria y rastreo automático."

explicacion: |
  La huella pasiva se genera sin que el usuario sea plenamente consciente, como la dirección IP o los metadatos de una foto.
```

### 4 — Completar vocabulario clave

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania-digital-privacidad-huella-digital"
  nivel: "basico"
  tags: ["privacidad", "datos"]

tipo: completar
respuestas_validas:
  - "cookies"

respuesta: "cookies"

enunciado: "Para proteger nuestra privacidad en la red, es fundamental configurar los permisos de las ___ que aceptamos en los sitios web."

pasos:
  - "Pensar en el derecho a proteger la información personal."
  - "Pensar en los archivos que rastrean la actividad en la web."

explicacion: |
  La privacidad se refiere al control sobre nuestra información, y las cookies son una de las herramientas principales que usan los sitios para rastrear nuestra actividad.
```

### 5 — Ciclo de gestión de datos

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania-digital-privacidad-huella-digital"
  nivel: "intermedio"
  tags: ["ordenar", "seguridad"]

tipo: ordenar
opciones_explicitas: ["Crear una cuenta", "Navegar y generar datos", "Dejar una huella digital", "Ser rastreado por algoritmos"]

respuesta_orden: ["Crear una cuenta", "Navegar y generar datos", "Dejar una huella digital", "Ser rastreado por algoritmos"]

enunciado: "Ordena cronológicamente el proceso mediante el cual se construye nuestra identidad digital en la red:"

explicacion: |
  Primero creamos una cuenta (acción inicial), luego navegamos (acción constante), lo que genera una huella (resultado de la acción) que finalmente es procesada por algoritmos (consecuencia técnica).
```

### 6 — El rastro de tus redes

```
metadata:
  materia: "ciudadania-digital"
  tema: "privacidad_huella_digital"
  nivel: "basico"
  tags: ["huella_digital", "privacidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["publicar una foto de un viaje", "comentar en un post de un amigo"], ["dejar un comentario en un video", "dar 'like' a una publicidad"]]

enunciado: "Si realizas la acción de {escenarios[escenario_idx][0]}, estás generando parte de tu huella digital."

respuesta: verdadero
tipo: vf

explicacion: |
  Cada interacción en internet, ya sea una publicación, un comentario o un 'like', deja un rastro de datos que conforma tu huella digital.
```

### 7 — Gestión de la privacidad en perfiles

```
metadata:
  materia: "ciudadania-digital"
  tema: "privacidad_huella_digital"
  nivel: "intermedio"
  tags: ["privacidad", "configuracion"]

variables:
  perfil_tipo: uno_de([0, 1])
  perfiles: [["público", "privado"], ["público", "privado"]]

enunciado: "Si configuras el perfil de una red social como {perfiles[perfil_tipo][1]}, los usuarios que no sean tus amigos no podrán ver tu contenido directamente. Esto es una medida de: ___"

respuestas_validas:
  - "privacidad"
  - "seguridad"
  - "identidad"
respuesta: "privacidad"
tipo: completar

explicacion: |
  Configurar perfiles como 'privados' es una acción fundamental para controlar quién tiene acceso a tu información personal, protegiendo tu privacidad.
```

### 8 — Consecuencias de la huella digital

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

### 9 — Pasos para una navegación segura

```
metadata:
  materia: "ciudadania-digital"
  tema: "privacidad_huella_digital"
  nivel: "basico"
  tags: ["seguridad", "pasos"]

opciones_explicitas: ["Crear una cuenta con datos reales", "Revisar la configuración de privacidad", "Activar la autenticación en dos pasos"]

enunciado: "Para reducir el rastro de datos innecesarios y proteger tu privacidad, ¿cuál es el orden correcto de acciones para asegurar una cuenta nueva?"

respuesta_orden: ["Crear una cuenta con datos reales", "Revisar la configuración de privacidad", "Activar la autenticación en dos pasos"]
tipo: ordenar

explicacion: |
  La gestión de la privacidad comienza con la configuración consciente de las herramientas que usamos, limitando la exposición de datos sensibles.
```

### 10 — El rastro de la navegación

```
metadata:
  materia: "ciudadania-digital"
  tema: "privacidad_huella_digital"
  nivel: "avanzado"
  tags: ["cookies", "rastreo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["un sitio web de noticias", "una tienda online"], ["un sitio web de noticias", "una tienda online"]]

enunciado: "Al visitar {casos[caso_idx][0]}, el sitio utiliza 'cookies' para recordar tus preferencias. ¿Es cierto que estas cookies forman parte de tu huella digital?"

respuesta: verdadero
tipo: vf

explicacion: |
  Las cookies son archivos que los sitios web guardan en tu navegador. Al registrar tus hábitos de navegación, son un componente clave de tu huella digital pasiva.
```

### 11 — ¿Qué es la huella digital?

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "basico"
  tags: ["privacidad", "huella_digital"]

tipo: mc
opciones_explicitas: ["El rastro de datos que dejamos al navegar por internet", "La contraseña que usamos para iniciar sesión", "Un virus que borra nuestra información personal"]

respuesta: "El rastro de datos que dejamos al navegar por internet"

enunciado: "La huella digital se define como ___."

explicacion: |
  La huella digital es el rastro de datos que creamos al usar internet (comentarios, likes, historial de navegación, compras, etc.). Es permanente y constituye nuestra identidad digital.
```

### 12 — ¿Es posible borrar totalmente nuestra huella digital?

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "basico"
  tags: ["privacidad", "huella_digital"]

tipo: vf

respuesta: falso

enunciado: "¿Es posible borrar absolutamente todo rastro de nuestra actividad digital una vez que ha sido publicada en la red?"

explicacion: |
  Falso. Aunque podemos borrar cuentas o publicaciones, es muy difícil eliminar la información que otros hayan capturado (capturas de pantalla) o que haya sido almacenada en servidores de terceros o copias de seguridad.
```

### 13 — Elementos que componen la huella digital

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "intermedio"
  tags: ["privacidad", "huella_digital"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["comentarios en redes sociales", "historial de búsqueda", "ubicación GPS en fotos"], ["compras realizadas en tiendas online", "likes en publicaciones", "registros de navegación web"]]

tipo: ordenar
opciones_explicitas: ["comentarios en redes sociales", "historial de búsqueda", "ubicación GPS en fotos", "compras realizadas en tiendas online", "likes en publicaciones", "registros de navegación web"]

respuesta_orden: ["comentarios en redes sociales", "historial de búsqueda", "ubicación GPS en fotos", "compras realizadas en tiendas online", "likes en publicaciones", "registros de navegación web"]

enunciado: "Ordena estos elementos de mayor a menor impacto en la creación de tu perfil de datos personales (según la importancia de la privacidad):"

explicacion: |
  Todos los elementos listados contribuyen a tu huella digital. La huella digital se alimenta de la suma de nuestras acciones conscientes (comentarios, compras) e inconscientes (historial, ubicación).
```

### 14 — El mito de la navegación privada

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "intermedio"
  tags: ["privacidad", "navegacion_incognito"]

tipo: mc
opciones_explicitas: ["El modo incógnito oculta tu actividad de tu proveedor de internet y de las páginas que visitas", "El modo incógnito solo evita que se guarde el historial en tu computadora local", "El modo incógnito cifra toda tu conexión para que nadie pueda rastrearte"]

respuesta: "El modo incógnito solo evita que se guarde el historial en tu computadora local"

enunciado: "Un error común es creer que el modo incógnito nos hace invisibles. ¿Cuál es la realidad?"

explicacion: |
  El modo incógnito solo evita que el navegador guarde el historial, las cookies y la información de formularios en el dispositivo local. Sin embargo, tu proveedor de internet (ISP), tu empleador o los sitios web visitados aún pueden rastrear tu actividad.
```

### 15 — Completar la definición de privacidad

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "avanzado"
  tags: ["privacidad", "datos_personales"]

tipo: completar
respuestas_validas:
  - "privacidad"
  - "protección"

respuesta: "privacidad"

enunciado: "La ___ digital es el derecho de los usuarios a decidir qué información personal se comparte, con quién y con qué fin en el entorno online."

explicacion: |
  La privacidad digital implica tener control sobre nuestra información personal y entender que cada acción en la red deja un rastro que puede ser utilizado para crear perfiles comerciales o de vigilancia.
```

### 16 — Huella digital vs. Privacidad

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "basico"
  tags: ["privacidad", "huella_digital"]

respuesta: "huella digital"
tipo: completar
respuestas_validas:
  - "huella digital"

enunciado: "Mientras que la privacidad se refiere al derecho a controlar nuestra información personal, el rastro de datos que dejamos al navegar por internet se conoce como ___."
```

### 17 — Actividad pasiva vs. Activa

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "intermedio"
  tags: ["huella_digital", "datos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Publicar una foto en Instagram", "dejar un rastro de huella digital activa"], ["Navegar por una web y que se guarden tus cookies", "dejar un rastro de huella digital pasiva"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["dejar un rastro de huella digital activa", "dejar un rastro de huella digital pasiva", "no dejar rastro de huella digital", "borrar la huella digital"]

enunciado: "Si realizas la siguiente acción: {escenarios[escenario_idx][0]}, ¿qué tipo de huella digital estás generando?"

explicacion: |
  La huella digital activa es aquella que creas deliberadamente (posts, correos), mientras que la pasiva es la que se recolecta sin que te des cuenta (IP, cookies, historial de navegación).
```

### 18 — Verdad de la huella digital

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

### 19 — El proceso de recolección de datos

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "intermedio"
  tags: ["huella_digital", "datos"]

respuesta_orden: ["Navegar por un sitio web", "Recolección de cookies", "Creación de un perfil publicitario", "Segmentación de anuncios"]
tipo: ordenar

opciones_explicitas: ["Navegar por un sitio web", "Recolección de cookies", "Creación de un perfil publicitario", "Segmentación de anuncios"]

enunciado: "Ordena cronológicamente cómo la actividad de un usuario se convierte en publicidad dirigida:"

explicacion: |
  Primero navegas, luego el sitio recolecta datos (cookies), con esos datos las empresas crean un perfil de tus gustos y finalmente te muestran anuncios basados en ese perfil.
```

### 20 — Privacidad vs. Anonimato

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "avanzado"
  tags: ["privacidad", "anonimato"]

respuesta: "anonimato"
tipo: completar
respuestas_validas:
  - "anonimato"

enunciado: "La privacidad busca proteger nuestra identidad y datos, mientras que el ___ busca permitir que un usuario actúe en la red sin que se le pueda identificar directamente."
```

### 21 — El rastro de tus redes

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

### 22 — ¿Es privado lo que comparto?

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

### 23 — Configuración de privacidad

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "intermedio"
  tags: ["privacidad", "configuracion"]

variables:
  caso_idx: uno_de([0,1])
  casos: [["un perfil de Instagram configurado como 'Público'", "poca privacidad"], ["un perfil de Instagram configurado como 'Privado'", "mayor privacidad"]]

enunciado: "En el caso de {casos[caso_idx][0]}, el usuario tiene ___."

respuesta: casos[caso_idx][1]
tipo: completar
respuestas_validas:
  - "poca privacidad"
  - "mayor privacidad"

explicacion: |
  La configuración de privacidad determina quién puede acceder a tu información y cómo se construye tu huella digital frente a terceros.
```

### 24 — Pasos para proteger tu identidad

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "intermedio"
  tags: ["seguridad", "ordenar"]

enunciado: "Ordena los siguientes pasos para minimizar el impacto de tu huella digital de forma proactiva, desde la acción más preventiva hasta la de reacción ante un problema."

opciones_explicitas: ["Configurar privacidad en redes", "Usar autenticación de dos pasos", "Revisar términos de servicio", "Eliminar cuentas inactivas"]
respuesta_orden: ["Configurar privacidad en redes", "Usar autenticación de dos pasos", "Revisar términos de servicio", "Eliminar cuentas inactivas"]
tipo: ordenar

explicacion: |
  La gestión de la privacidad debe ser un proceso constante: desde la configuración inicial hasta la limpieza de cuentas que ya no usamos.
```

### 25 — El impacto de la huella digital

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "avanzado"
  tags: ["consecuencias", "reputacion"]

variables:
  impacto_idx: uno_de([0,1])
  impactos: [["un reclutador laboral ve una foto inapropiada tuya en una red social", "daño a la reputación digital"], ["un banco analiza tus hábitos de consumo para darte un crédito", "perfilamiento de datos"]]

enunciado: "Si ocurre que {impactos[impacto_idx][0]}, esto puede resultar en ___."

respuesta: impactos[impacto_idx][1]
tipo: completar
respuestas_validas:
  - "daño a la reputación digital"
  - "perfilamiento de datos"

explicacion: |
  La huella digital no solo afecta la privacidad, sino que tiene consecuencias tangibles en la vida real, como la reputación profesional o el perfilamiento comercial.
```
