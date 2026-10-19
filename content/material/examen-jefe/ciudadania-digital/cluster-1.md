# Examen jefe — Ciudadano Digital Crítico

> Logro #957. Dominaste la privacidad y la huella digital, la fuente primaria y secundaria, la confiabilidad de una fuente, la desinformación en red, el sesgo y los deepfakes, la publicidad engañosa y la verificación de una noticia. Pool agregado de los `cuestionario.md` ya validados de sus 7 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **165 preguntas totales** en 7/7 secciones.

---

## Sección: ciudadania-digital-privacidad-huella-digital (25 preguntas)

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

```
metadata:
  materia: "ciudadania-digital"
  tema: "privacidad_huella_digital"
  nivel: "intermedio"
  tags: ["privacidad", "configuracion"]

enunciado: "Si configuras el perfil de una red social como privado, los usuarios que no sean tus amigos no podrán ver tu contenido directamente. Esto es una medida de: ___"

respuestas_validas:
  - "privacidad"
respuesta: "privacidad"
tipo: completar

explicacion: |
  Configurar perfiles como 'privados' es una acción fundamental para controlar quién tiene acceso a tu información personal, protegiendo tu privacidad.
```

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

```
metadata:
  materia: "ciudadania-digital"
  tema: "privacidad_huella_digital"
  nivel: "avanzado"
  tags: ["cookies", "rastreo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: ["un sitio web de noticias", "una tienda online"]

enunciado: "Al visitar {casos[caso_idx]}, el sitio utiliza 'cookies' para recordar tus preferencias. ¿Es cierto que estas cookies forman parte de tu huella digital?"

respuesta: verdadero
tipo: vf

explicacion: |
  Las cookies son archivos que los sitios web guardan en tu navegador. Al registrar tus hábitos de navegación, son un componente clave de tu huella digital pasiva.
```

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

explicacion: |
  La privacidad es el derecho a decidir qué información se comparte; la huella digital es el conjunto de rastros (activos y pasivos) que dejamos al navegar, independientemente de si controlamos su difusión.
```

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

```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "basico"
  tags: ["huella_digital", "permanencia"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de una conversación presencial que puede ser olvidada, la huella digital suele ser persistente y difícil de eliminar por completo de la red."

explicacion: |
  Verdadero. Una vez que un contenido se publica en la red, puede ser copiado, capturado o archivado por terceros, lo que hace casi imposible eliminarlo por completo.
```

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

explicacion: |
  El anonimato busca que un usuario no pueda ser identificado en absoluto, mientras que la privacidad se enfoca en controlar quién accede a la información ya identificada de una persona.
```

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
  - casos[caso_idx][1]

explicacion: |
  La configuración de privacidad determina quién puede acceder a tu información y cómo se construye tu huella digital frente a terceros.
```

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
  - impactos[impacto_idx][1]

explicacion: |
  La huella digital no solo afecta la privacidad, sino que tiene consecuencias tangibles en la vida real, como la reputación profesional o el perfilamiento comercial.
```

## Sección: confiabilidad-y-verificacion-de-una-fuente (25 preguntas)

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["fuente", "verificacion", "informacion"]

tipo: mc
opciones_explicitas: ["Una fuente que presenta información sesgada o sin sustento", "Una fuente que permite verificar la autoría y la actualidad de los datos", "Una fuente que solo publica opiniones personales sin referencias", "Una fuente que utiliza lenguaje excesivamente emocional para convencer"]

respuesta: "Una fuente que permite verificar la autoría y la actualidad de los datos"

enunciado: "En el contexto de la alfabetización mediática, una fuente de información se considera confiable cuando..."

explicacion: |
  La confiabilidad se basa en la capacidad de rastrear el origen de la información (autoría), verificar que los datos sean actuales y que existan evidencias que los respalden.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["verificacion", "pasos"]

tipo: ordenar
opciones_explicitas: ["Identificar la fuente original", "Contrastar la información con otros medios", "Verificar la fecha de publicación", "Evaluar la reputación del autor"]

respuesta_orden: ["Identificar la fuente original", "Contrastar la información con otros medios", "Verificar la fecha de publicación", "Evaluar la reputación del autor"]

enunciado: "Ordena los pasos lógicos para verificar la veracidad de una noticia antes de compartirla:"

explicacion: |
  Para una verificación efectiva, primero debemos saber de dónde viene la información, luego ver si otros medios la confirman, chequear que no sea noticia vieja y finalmente analizar quién es el autor.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["sesgo", "neutralidad"]

tipo: vf

respuesta: falso

enunciado: "Si un sitio web de noticias utiliza exclusivamente adjetivos cargados de emoción y solo presenta un punto de vista sin mencionar contraargumentos, se dice que la fuente es neutral y altamente confiable."

explicacion: |
  El uso de lenguaje emocional y la falta de pluralidad de perspectivas son indicadores claros de sesgo informativo, lo cual resta confiabilidad a la fuente.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["vocabulario", "autoría"]

tipo: completar
respuestas_validas:
  - "autoría"

respuesta: "autoría"

enunciado: "El proceso de verificar la ___________ consiste en investigar quién es el responsable de la creación del contenido para determinar su credibilidad."

explicacion: |
  La autoría es un pilar fundamental; saber si el autor es un experto en la materia o una organización reconocida es clave para la validación.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["fake_news", "desinformacion"]

tipo: mc
opciones_explicitas: ["Desinformación", "Error periodístico", "Opinión editorial", "Satirismo"]

respuesta: "Desinformación"

enunciado: "Cuando se crea y difunde información falsa con el objetivo deliberado de causar daño o manipular la opinión pública, estamos ante un caso de:"

explicacion: |
  La desinformación se diferencia del error periodístico en la intención: la desinformación busca engañar activamente.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["autoría", "verificación", "fuentes"]

respuesta: "anónimo"
tipo: mc
opciones_explicitas: ["experto en la materia", "anónimo", "un usuario de redes sociales", "un bot de noticias"]

enunciado: "Estás leyendo un artículo sobre un nuevo descubrimiento médico. El texto no indica quién lo escribió, no tiene firma ni biografía del autor, y el sitio web es un blog personal sin referencias. Según los criterios de confiabilidad, este contenido es de autoría ___."

explicacion: |
  Para que una fuente sea confiable, debe permitir la identificación clara del autor o la institución responsable. Si el autor es anónimo o no está acreditado, no podemos verificar su experiencia o posibles sesgos.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["actualidad", "temporalidad"]

variables:
  escenario: uno_de([["Un artículo sobre el clima de 2015", "2015"], ["Una noticia sobre la pandemia de 2020", "2020"], ["Un reporte sobre una ley de 2023", "2023"]])

respuesta: escenario[1]
tipo: completar
respuestas_validas:
  - escenario[1]

enunciado: "Si estás investigando la situación climática actual para un trabajo escolar, pero encuentras un artículo que fue publicado en el año {escenario[1]}, la información podría estar desactualizada."

pasos:
  - "Identificar la fecha de publicación en el encabezado del artículo."
  - "Comparar la fecha con el tema de investigación (actualidad vs. pasado)."
  - "Evaluar si los datos presentados siguen siendo vigentes."

explicacion: |
  La temporalidad es clave. Una fuente puede ser confiable en su momento, pero estar obsoleta para temas que cambian rápidamente, como medicina, tecnología o política.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["sesgo", "objetividad"]

respuesta: falso
tipo: vf

enunciado: "Si un sitio web de noticias solo presenta información que favorece a un único partido político y utiliza adjetivos muy emocionales para atacar a otros, se considera una fuente objetiva y neutral."

explicacion: |
  La objetividad implica presentar hechos y contrastar diferentes puntos de vista. El uso de lenguaje cargado emocionalmente y la falta de pluralidad son señales de sesgo informativo.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["metodología", "verificación"]

respuesta_orden: ["Buscar la fuente original", "Contrastar con otros medios", "Verificar la fecha y el autor"]
tipo: ordenar
opciones_explicitas: ["Buscar la fuente original", "Contrastar con otros medios", "Verificar la fecha y el autor"]

enunciado: "Has recibido un mensaje de WhatsApp con una noticia impactante. ¿Cuál es el orden lógico para verificar si es real antes de compartirla?"

explicacion: |
  El proceso ideal comienza identificando de dónde salió la información (fuente original), luego comprobando si otros medios serios lo reportan (contraste) y finalmente revisando la vigencia y autoría (contexto).
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "avanzado"
  tags: ["referencias", "evidencia"]

respuesta: "falso"

tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "En un informe sobre el cambio climático, el texto afirma que 'un grupo de científicos internacionales asegura que el hielo se está derritiendo', pero no proporciona nombres, instituciones ni enlaces a los estudios mencionados. ¿Es esta una evidencia sólida?"

explicacion: |
  Una fuente confiable debe permitir la trazabilidad. Si una noticia menciona "expertos" o "estudios" de forma genérica sin dar datos específicos para que el lector pueda comprobarlos, es una señal de alerta de desinformación.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["sesgo", "verificacion", "pensamiento_critico"]

respuesta: verdadero
tipo: vf

enunciado: "El sesgo de confirmación ocurre cuando tendemos a buscar, interpretar y recordar información que confirma nuestras creencias previas, ignorando la evidencia que las contradice."

explicacion: |
  Efectivamente. El sesgo de confirmación es uno de los mayores obstáculos para la verificación de fuentes, ya que nos hace aceptar información falsa solo porque "encaja" con lo que ya pensamos.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["fuentes", "diseño", "desinformacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un sitio web con diseño moderno, tipografía elegante y sin anuncios molestos.", "Es una fuente confiable solo por su estética."], ["Un blog de opinión con diseño simple, pero que cita fuentes académicas y autores expertos.", "Su diseño simple no determina su falta de confiabilidad."]]

opciones_explicitas: ["Es una fuente confiable solo por su estética.", "Su diseño simple no determina su falta de confiabilidad.", "La apariencia visual es el único indicador de veracidad."]

respuesta: escenarios[escenario_idx][1]
tipo: mc

enunciado: "Si analizamos el siguiente caso: {escenarios[escenario_idx][0]} ¿Cuál es la conclusión correcta sobre su confiabilidad?"

explicacion: |
  La estética de un sitio web (colores, logos, diseño) es fácilmente replicable y no garantiza que la información sea verídica. La confiabilidad se basa en la evidencia, las fuentes y la autoría, no en el diseño gráfico.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["metodologia", "verificacion", "pasos"]

opciones_explicitas: ["Verificar la autoría y sus credenciales", "Buscar la misma noticia en otras fuentes", "Analizar la fecha de publicación para evitar noticias viejas"]

respuesta_orden: ["Verificar la autoría y sus credenciales", "Buscar la misma noticia en otras fuentes", "Analizar la fecha de publicación para evitar noticias viejas"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para verificar la veracidad de una noticia sospechosa antes de compartirla:"

explicacion: |
  El proceso correcto implica: 1. Ver quién lo dice (autoría), 2. Ver si otros lo confirman (triangulación) y 3. Ver si la información es actual (temporalidad). Compartir sin verificar es parte del problema de la desinformación.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["contexto", "temporalidad", "fake_news"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Una noticia real de hace 5 años sobre un desastre natural.", "falsa"], ["Una noticia real de ayer sobre un desastre natural.", "verdadera"]]

respuesta: casos[caso_idx][1]
tipo: completar

pasos:
  - "Identifica el contenido de la noticia."
  - "Observa la fecha de publicación."

enunciado: "{casos[caso_idx][0]} Si se está difundiendo hoy como si describiera algo actual, la información es considerada ___ para el contexto presente."

respuestas_validas:
  - casos[caso_idx][1]

explicacion: |
  La descontextualización temporal es una técnica común de desinformación. Una noticia puede ser real en su momento, pero si se presenta como actual para manipular la opinión, pierde su veracidad contextual.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["clickbait", "titulares", "verificacion"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["'¡Increíble! Científicos descubren la cura definitiva para todo con solo un limón.'", "Clickbait"], ["'Estudio de la Universidad de Oxford analiza el impacto del consumo de cítricos en la salud.'", "Informativo"]]

opciones_explicitas: ["Clickbait", "Informativo"]

respuesta: ejemplos[ejemplo_idx][1]
tipo: mc

enunciado: "Analiza el siguiente titular: {ejemplos[ejemplo_idx][0]}. ¿Qué tipo de contenido representa principalmente?"

explicacion: |
  Los titulares que usan lenguaje hiperbólico, exclamaciones o promesas de soluciones mágicas suelen ser 'clickbait'. Su objetivo es generar clics mediante la emoción, no informar con precisión.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["verificacion", "fuentes"]

tipo: mc
opciones_explicitas: ["Una fuente confiable presenta datos verificables y evidencia, mientras que una opinión es una visión subjetiva sin necesidad de pruebas.", "Una fuente confiable es siempre un libro, mientras que una opinión es siempre un comentario en redes sociales.", "No hay diferencia, ambas deben ser tomadas como verdades absolutas.", "Una fuente confiable solo la tiene un experto, la opinión es de cualquier persona."]

respuesta: "Una fuente confiable presenta datos verificables y evidencia, mientras que una opinión es una visión subjetiva sin necesidad de pruebas."

enunciado: "Al evaluar la calidad de la información, ¿cuál es la principal distinción entre una fuente confiable y una simple opinión?"

explicacion: |
  La confiabilidad se basa en la evidencia, el método y la capacidad de ser contrastada, mientras que la opinión refleja un punto de vista personal que no necesariamente requiere sustento empírico.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["conceptos", "verificacion"]

tipo: vf
respuesta: falso

enunciado: "Si un sitio web tiene una apariencia profesional y un diseño impecable, ¿podemos afirmar que su información es necesariamente verdadera?"

explicacion: |
  No. La apariencia (credibilidad visual) no garantiza la veracidad de los contenidos. La veracidad requiere verificar los datos y las fuentes citadas.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["desinformacion", "fake_news"]

tipo: completar
respuestas_validas:
  - "desinformación"

enunciado: "A diferencia de la información errónea (que puede ser un error involuntario), la ___ es información falsa creada deliberadamente para engañar o manipular."

explicacion: |
  La desinformación tiene una intención maliciosa de causar daño o manipular la opinión pública, mientras que el error es una equivocación sin dolo.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "avanzado"
  tags: ["metodologia", "verificacion"]

tipo: ordenar
opciones_explicitas: ["Identificar la fuente y el autor", "Contrastar la información con otros medios", "Verificar la fecha de publicación", "Analizar la intención del mensaje"]

respuesta_orden: ["Identificar la fuente y el autor", "Contrastar la información con otros medios", "Verificar la fecha de publicación", "Analizar la intención del mensaje"]

enunciado: "Ordena los pasos lógicos para realizar un proceso de verificación de una noticia antes de compartirla:"

explicacion: |
  Un proceso de verificación efectivo comienza por saber quién lo dice, luego ver si otros lo confirman, revisar la actualidad del dato y finalmente entender por qué se publica.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["tipos_de_fuente", "investigacion"]

tipo: mc
opciones_explicitas: ["La fuente primaria es el testimonio directo del hecho, mientras que la secundaria es una interpretación o análisis de ese hecho.", "La fuente primaria siempre es digital y la secundaria es siempre en papel.", "La fuente primaria es la que tiene más seguidores en redes sociales.", "La fuente secundaria es siempre más confiable que la primaria."]

respuesta: "La fuente primaria es el testimonio directo del hecho, mientras que la secundaria es una interpretación o análisis de ese hecho."

enunciado: "¿Qué distingue fundamentalmente a una fuente primaria de una fuente secundaria en un proceso de investigación?"

explicacion: |
  La fuente primaria es el objeto o testimonio original (un video del evento, un documento oficial), mientras que la secundaria es el contenido que habla sobre esa fuente (una noticia que analiza el video).
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["autoría", "fuentes", "verificación"]

variables:
  datos: [["Un post de un influencer sin biografía en un blog personal", "falso"], ["Un artículo de una revista científica con autores académicos", "verdadero"]]
  idx: uno_de([0, 1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Analiza el siguiente escenario: {datos[idx][0]}. ¿Es esta una fuente de información confiable para un trabajo académico?"

explicacion: |
  Para que una fuente sea confiable, debe tener un autor identificable, respaldo institucional o académico y una trayectoria comprobable en el tema.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["triangulación", "verificación"]

variables:
  datos: [["Encuentras una noticia impactante en una red social que nadie más reporta", "falso"], ["Encuentras la misma noticia en tres medios de comunicación con prestigio y diferentes perspectivas", "verdadero"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["falso", "verdadero"]

enunciado: "Si te encuentras en la siguiente situación: {datos[idx][0]}. ¿Se está cumpliendo el principio de triangulación de información para verificar la veracidad?"

explicacion: |
  La triangulación consiste en contrastar una información con múltiples fuentes independientes y confiables para confirmar su veracidad.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "intermedio"
  tags: ["metodología", "evaluación"]

respuesta_orden: ["Revisar la fecha de publicación", "Verificar la autoría y sus credenciales", "Contrastar la información con otras fuentes"]
tipo: ordenar

opciones_explicitas: ["Revisar la fecha de publicación", "Verificar la autoría y sus credenciales", "Contrastar la información con otras fuentes"]

enunciado: "Ordena los pasos lógicos para evaluar la confiabilidad de un artículo digital antes de compartirlo:"

explicacion: |
  Primero se mira la actualidad (fecha), luego quién lo dice (autor) y finalmente si otros lo confirman (contraste).
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "avanzado"
  tags: ["sesgo", "objetividad"]

variables:
  datos: [["Un sitio web de noticias que usa solo adjetivos de opinión extrema y no cita fuentes", "sesgado"], ["Un reporte técnico que presenta datos estadísticos y cita estudios previos", "objetivo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar

respuestas_validas:
  - "sesgado"
  - "objetivo"

enunciado: "Observa el siguiente ejemplo: {datos[idx][0]}. La información presentada es de carácter _______."

explicacion: |
  La presencia de lenguaje cargado emocionalmente o la falta de evidencia externa son indicadores claros de sesgo informativo.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "confiabilidad_y_verificacion_de_una_fuente"
  nivel: "basico"
  tags: ["url", "seguridad"]

variables:
  datos: [["Un sitio que termina en .edu.ar o .gov.ar", "confiable"], ["Un sitio que imita a un diario famoso pero termina en .xyz", "no confiable"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["confiable", "no confiable"]

enunciado: "Si accedes a un sitio web con la siguiente característica: {datos[idx][0]}. ¿Qué nivel de confianza inicial le otorgas al dominio?"

explicacion: |
  Los dominios institucionales (.edu, .gov) suelen tener mayor rigor y control de contenido que dominios genéricos o de bajo costo (.xyz, .info).
```

## Sección: desinformacion-en-red (25 preguntas)

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

tipo: mc
opciones_explicitas: ["Información verídica compartida con buena intención", "Información falsa o engañosa difundida deliberadamente", "Información técnica de difícil comprensión", "Opiniones personales en foros de debate"]

respuesta: "Información falsa o engañosa difundida deliberadamente"

enunciado: "La desinformación se define principalmente como:"

explicacion: |
  La desinformación es información falsa o engañosa que se difunde, muchas veces con la intención de engañar o manipular, a diferencia de la información errónea (misinformation) que puede ser un error sin mala intención.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["intencionalidad", "caracteristicas"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un error involuntario al compartir un dato", "Error involuntario"], ["un video editado para cambiar el sentido de un discurso", "Desinformación"]]

tipo: mc
opciones_explicitas: ["Error involuntario", "Desinformación", "Noticia real", "Sátira"]

respuesta: escenarios[escenario_idx][1]

enunciado: "Si una persona comparte un dato falso sin saber que lo es, según el escenario: {escenarios[escenario_idx][0]}, se trata de un caso de:"

explicacion: |
  Cuando no hay intención de engañar, se considera error o desinformación involuntaria. La desinformación propiamente dicha requiere la intención de manipular.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["componentes", "verificacion"]

tipo: completar
respuesta: "titulares"
respuestas_validas:
  - "titulares"

enunciado: "Para detectar desinformación, es vital revisar los ___ exagerados (junto con el uso de sensacionalismo para captar atención y la falta de fuentes confiables)."

explicacion: |
  Las noticias falsas suelen usar titulares impactantes, lenguaje emocional o sensacionalista y carecen de fuentes verificables o expertos que respalden la información.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["difusion", "redes_sociales"]

tipo: ordenar
opciones_explicitas: ["Creación del contenido falso", "Difusión viral en redes sociales", "Impacto en la opinión pública", "Reacción de los usuarios (compartir/comentar)"]

enunciado: "Ordena cronológicamente el proceso típico de propagación de una campaña de desinformación:"

explicacion: |
  El ciclo comienza con la creación del engaño, seguido de su viralización masiva, lo que genera una reacción en cadena de usuarios que lo comparten, terminando en un impacto social real.
respuesta_orden: ["Creación del contenido falso", "Difusión viral en redes sociales", "Impacto en la opinión pública", "Reacción de los usuarios (compartir/comentar)"]
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "avanzado"
  tags: ["fact_checking", "herramientas"]

tipo: mc
opciones_explicitas: ["Buscar la noticia en sitios oficiales", "Verificar en sitios de fact-checking", "Revisar la fecha de publicación", "Analizar la fuente original"]

respuesta: "Verificar en sitios de fact-checking"

enunciado: "Ante una noticia sospechosa, ¿cuál de las siguientes es una de las acciones más efectivas para verificarla?"

explicacion: |
  El uso de herramientas de fact-checking (verificación de hechos) es una de las defensas más robustas contra la desinformación en la era digital.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["conceptos_clave", "veracidad"]

tipo: mc
opciones_explicitas: ["Desinformación", "Mala información (Error honesto)", "Noticia real"]

enunciado: "Si una persona comparte una noticia falsa con la intención deliberada de engañar a la audiencia y causar daño, estamos ante un caso de:"

respuesta: "Desinformación"

explicacion: |
  La desinformación implica intención de engaño. Si no hay intención de engañar, sino un error involuntario, se considera mala información o error honesto.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["intencionalidad", "analisis"]

variables:
  caso: uno_de([["Un usuario comparte un meme con datos falsos porque cree que es verdad.", "Error honesto"], ["Un bot difunde una noticia falsa para manipular una elección.", "Desinformación"], ["Un periodista comete un error tipográfico en un número sin querer.", "Error honesto"]])

tipo: mc
opciones_explicitas: ["Desinformación", "Error honesto"]

enunciado: "Analiza el siguiente escenario: {caso[0]}. ¿Qué tipo de contenido es?"

respuesta: caso[1]

explicacion: |
  En el caso de {caso[0]}, la clave es que el usuario cree que es verdad, por lo tanto, carece de la intención de engañar, clasificándose como error honesto.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["caracteristicas"]

tipo: completar
respuestas_validas:
  - "intencionalidad"

enunciado: "La diferencia fundamental entre la desinformación y el error honesto radica en la _______, ya que el error honesto carece de intención de engañar."

respuesta: "intencionalidad"

explicacion: |
  La desinformación se define por la voluntad de engañar (intencionalidad), mientras que el error honesto es accidental.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "avanzado"
  tags: ["clasificacion", "escenarios"]

variables:
  escenario: uno_de([["Un sitio web crea una noticia falsa para ganar dinero con publicidad.", "Desinformación"], ["Un familiar reenvía un mensaje de WhatsApp que leyó sin verificar.", "Error honesto"]])

tipo: mc
opciones_explicitas: ["Desinformación", "Error honesto"]

enunciado: "Escenario: {escenario[0]}. Clasifica este comportamiento:"

respuesta: escenario[1]

explicacion: |
  Si el objetivo es el lucro mediante el engaño, existe una intención clara de manipular, lo que constituye desinformación.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["prevencion", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Dudar de la fuente", "Contrastar con medios oficiales", "Verificar la fecha de publicación", "No compartir hasta confirmar"]

respuesta_orden: ["Dudar de la fuente", "Contrastar con medios oficiales", "Verificar la fecha de publicación", "No compartir hasta confirmar"]

enunciado: "Para evitar propagar desinformación o errores, sigue este orden lógico de verificación de una noticia sospechosa:"

explicacion: |
  El proceso ideal comienza con la duda crítica, sigue con la contrastación de fuentes, la revisión de metadatos (como la fecha) y culmina con la acción de no difundir hasta la certeza.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["algoritmos", "viralidad"]

tipo: mc
opciones_explicitas: ["La veracidad de la información", "El compromiso (engagement) y la emoción", "La calidad técnica del contenido", "El rigor periodístico"]

respuesta: "El compromiso (engagement) y la emoción"

enunciado: "Los algoritmos de las redes sociales están diseñados principalmente para maximizar el tiempo de permanencia del usuario. Por ello, suelen priorizar contenido que genera un alto nivel de ___."

explicacion: |
  Los algoritmos de recomendación priorizan contenidos que provocan reacciones fuertes (ira, sorpresa, miedo) porque esto genera más 'engagement' (likes, compartidos, comentarios), permitiendo que la desinformación se propague más rápido que los hechos neutrales.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["camaras_de_eco", "sesgo_confirmacion"]

variables:
  escenario: uno_de([["un usuario que solo ve noticias que refuerzan sus prejuicios", "cámaras de eco"], ["un periodista que verifica cada dato antes de publicar", "periodismo tradicional"], ["un sistema de moderación de contenidos automático", "moderación algorítmica"]])

tipo: completar
respuestas_validas:
  - "cámaras de eco"
  - "periodismo tradicional"
  - "moderación algorítmica"

enunciado: "Cuando los algoritmos nos muestran únicamente información que coincide con nuestras creencias previas, creando un entorno donde nuestras opiniones se ven constantemente reforzadas y aisladas de opiniones contrarias, estamos ante el fenómeno de las {escenario[0]}."

explicacion: |
  Las cámaras de eco ocurren cuando los filtros de personalización nos encierran en burbujas informativas, impidiéndonos ver la diversidad de perspectivas y facilitando que la desinformación que confirma nuestros sesgos se acepte sin cuestionar.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["verificacion", "editorial"]

tipo: mc
opciones_explicitas: ["Falta de verificación editorial", "Exceso de regulación estatal", "Aumento de la alfabetización digital", "Uso de fuentes primarias"]

respuesta: "Falta de verificación editorial"

enunciado: "A diferencia de los medios de comunicación tradicionales, donde un editor revisa la información antes de su publicación, en las redes sociales la ausencia de ___ permite que noticias falsas se difundan de forma masiva e inmediata."

explicacion: |
  En las redes sociales, cualquier usuario puede publicar contenido sin pasar por un proceso de edición, contrastación de fuentes o verificación de hechos, lo que permite que la desinformación viaje a la misma velocidad que la información real.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["emociones", "psicologia"]

tipo: mc
opciones_explicitas: ["Neutralidad", "Indiferencia", "Alta carga emocional", "Aburrimiento"]

respuesta: "Alta carga emocional"

enunciado: "La desinformación suele ser diseñada para apelar a las emociones del usuario. ¿Qué tipo de contenido suele tener mayor probabilidad de volverse viral debido a su carga emocional?"

explicacion: |
  El contenido que genera indignación o miedo es el que más rápido se comparte. La carga emocional actúa como un combustible para la propagación algorítmica, haciendo que la desinformación sea mucho más "contagiosa" que la información factual.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "avanzado"
  tags: ["proceso", "secuencia"]

tipo: ordenar
opciones_explicitas: ["Creación de noticia falsa con carga emocional", "Difusión masiva por algoritmos de engagement", "Formación de cámaras de eco en usuarios", "Refuerzo de sesgos y polarización social"]

enunciado: "Ordena la secuencia lógica de cómo la desinformación escala desde su creación hasta su impacto en la sociedad:"

explicacion: |
  El proceso comienza con la creación de un mensaje diseñado para impactar emocionalmente; el algoritmo lo detecta y lo impulsa para ganar engagement; esto crea burbujas donde solo se escucha lo mismo (cámaras de eco), culminando en una sociedad polarizada que acepta la mentira como verdad.
respuesta_orden: ["Creación de noticia falsa con carga emocional", "Difusión masiva por algoritmos de engagement", "Formación de cámaras de eco en usuarios", "Refuerzo de sesgos y polarización social"]
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["titulares", "emocionalidad"]

tipo: mc
opciones_explicitas: ["Un titular que usa mayúsculas excesivas y signos de exclamación para generar miedo", "Un titular que resume la noticia de forma neutra y objetiva", "Un titular que cita una fuente oficial de noticias"]

respuesta: "Un titular que usa mayúsculas excesivas y signos de exclamación para generar miedo"

enunciado: "Al navegar por redes sociales, ¿cuál de los siguientes tipos de titulares suele ser una señal de alerta de posible desinformación?"

explicacion: |
  Los titulares diseñados para provocar una respuesta emocional fuerte (miedo, ira o sorpresa) suelen ser herramientas de 'clickbait' para propagar noticias falsas o desinformación.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["fuente", "verificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un mensaje de WhatsApp que dice 'Científicos de una universidad desconocida descubren la cura de todo'", "fuente_falsa"], ["Un artículo en el sitio web oficial de la ONU sobre cambio climático", "fuente_confiable"]]

tipo: mc
opciones_explicitas: ["Verificar si la fuente es una institución reconocida o un sitio oficial", "Compartir la información inmediatamente para que otros la vean", "Creer la noticia solo porque tiene muchos 'likes'"]

respuesta: "Verificar si la fuente es una institución reconocida o un sitio oficial"

enunciado: "Si recibes la siguiente información: {escenarios[escenario_idx][0]}, ¿cuál es la primera acción recomendada para verificar su veracidad?"

explicacion: |
  La verificación de la fuente es el primer paso fundamental. Si la fuente es anónima o no tiene reputación, la probabilidad de que sea desinformación es muy alta.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["triangulacion", "medios"]

tipo: completar
respuestas_validas:
  - "otros medios confiables"

enunciado: "Para confirmar si una noticia es real, una estrategia efectiva es buscar si ___ reportan la misma información."

explicacion: |
  La triangulación de la información mediante el uso de múltiples medios de comunicación con estándares periodísticos probados ayuda a descartar noticias falsas que solo circulan en redes sociales.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

tipo: ordenar
opciones_explicitas: ["Leer el contenido completo de la noticia", "Verificar la fecha de publicación de la información", "Contrastar la noticia en buscadores y medios oficiales"]

enunciado: "Ordena los pasos lógicos para realizar un chequeo de veracidad de una noticia que te parece sospechosa:"

explicacion: |
  Primero se debe analizar el contenido (no quedarse solo con el título), luego verificar si es actual (muchas noticias falsas son viejas) y finalmente contrastar con fuentes externas.
respuesta_orden: ["Leer el contenido completo de la noticia", "Verificar la fecha de publicación de la información", "Contrastar la noticia en buscadores y medios oficiales"]
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "avanzado"
  tags: ["sesgo", "emocion"]

tipo: completar
respuestas_validas:
  - "emocional"

enunciado: "Si una noticia utiliza un lenguaje altamente cargado de adjetivos negativos o positivos para influir en tu opinión, estás ante un contenido con sesgo ___."

explicacion: |
  El lenguaje emocional y cargado de adjetivos es una técnica para anular el pensamiento crítico del lector y dirigirlo hacia una postura específica, característica de la desinformación.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["clickbait", "identificacion"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [["¡Increíble! Un alimento común cura todas las enfermedades según un video viral sin fuentes.", "clickbait"], ["Científicos de la NASA confirman el descubrimiento de agua líquida en Marte.", "informativo"]]

tipo: mc

opciones_explicitas: ["clickbait", "informativo"]

respuesta: datos[escenario_idx][1]

enunciado: "Lees un post en redes sociales que dice: {datos[escenario_idx][0]}. ¿Qué tipo de contenido es?"

explicacion: |
  El contenido es {datos[escenario_idx][1]} porque utiliza lenguaje exagerado y promesas sin sustento científico para captar la atención.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["fuentes", "verificacion"]

variables:
  caso_idx: uno_de([0,1,2])
  casos: [["Un sitio web llamado 'noticias-reales-ya.xyz' publica una noticia bomba.", "sitio_no_confiable"], ["Un hilo de Twitter de un periodista reconocido con trayectoria.", "fuente_confiable"], ["Un mensaje de WhatsApp reenviado muchas veces sin autor claro.", "fuente_no_confiable"]]

tipo: mc

opciones_explicitas: ["sitio_no_confiable", "fuente_confiable", "fuente_no_confiable"]

respuesta: casos[caso_idx][1]

enunciado: "Se presenta el siguiente escenario: {casos[caso_idx][0]}. ¿Cuál es la categoría de la fuente?"

explicacion: |
  Identificar la procedencia es clave. El caso analizado es una {casos[caso_idx][1]}.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "basico"
  tags: ["contexto", "temporalidad"]

tipo: completar

respuestas_validas:
  - "descontextualizado"

enunciado: "Si una noticia antigua se presenta como actual para generar alarma, decimos que el contenido está ___."

explicacion: |
  El contenido está descontextualizado porque se le ha quitado su marco temporal original.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "intermedio"
  tags: ["metodologia", "verificacion"]

tipo: ordenar

opciones_explicitas: ["Leer el titular", "Buscar la noticia en buscadores", "Contrastar con medios oficiales", "Decidir si es real"]

respuesta_orden: ["Leer el titular", "Buscar la noticia en buscadores", "Contrastar con medios oficiales", "Decidir si es real"]

enunciado: "Ordena los pasos lógicos para verificar si una noticia de redes sociales es verdadera:"

explicacion: |
  La verificación requiere un proceso crítico: primero captar la información, luego investigar su origen y finalmente contrastar antes de concluir.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "desinformacion_en_red"
  nivel: "avanzado"
  tags: ["sesgo", "psicologia"]

tipo: completar

respuestas_validas:
  - "sesgo de confirmación"

enunciado: "Cuando una persona tiende a aceptar como verdaderas solo las informaciones que refuerzan sus propias creencias, está siendo víctima del ___."

explicacion: |
  El fenómeno se llama sesgo de confirmación. Es un error cognitivo que facilita la propagación de la desinformación.
```

## Sección: detectar-desinformacion-sesgo-deepfakes (25 preguntas)

```
metadata:
  materia: "ciudadania-digital"
  tema: "detectar_desinformacion_deepfakes"
  nivel: "basico"
  tags: ["ia", "deepfake", "desinformacion"]

respuesta: "deepfake"
tipo: completar
respuestas_validas:
  - "deepfake"

enunciado: "El término ___ se refiere a contenido audiovisual (video o audio) falsificado mediante inteligencia artificial para suplantar la identidad de una persona."

explicacion: |
  Un deepfake utiliza técnicas de aprendizaje profundo (deep learning) para crear contenido altamente realista que muestra a personas diciendo o haciendo cosas que nunca ocurrieron.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "detectar_desinformacion_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "informacion", "critica"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un titular dice: 'Científicos confirman que el chocolate cura el acné'", "Científicos confirman que el chocolate cura el acné"], ["Un titular dice: 'El 90% de los expertos afirma que el chocolate es malo'", "El 90% de los expertos afirma que el chocolate es malo"]]

tipo: mc
opciones_explicitas: ["Presentación objetiva (datos neutrales)", "Sesgo de confirmación o manipulación"]

respuesta: "Sesgo de confirmación o manipulación"

enunciado: "Analiza el siguiente titular: '{escenarios[escenario_idx][0]}'. ¿Qué tipo de sesgo o manipulación presenta?"

explicacion: |
  El sesgo en la presentación ocurre cuando se seleccionan datos o se redactan titulares de forma que se induce al lector hacia una conclusión específica, omitiendo el contexto o exagerando hechos.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "detectar_desinformacion_deepfakes"
  nivel: "basico"
  tags: ["ia", "verdad", "falsedad"]

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que un video de un político diciendo algo polémico es siempre una prueba irrefutable de la verdad debido a la tecnología actual?"

explicacion: |
  Falso. Debido al avance de la IA generativa, los deepfakes pueden crear videos extremadamente realistas, por lo que siempre se debe verificar la fuente original.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "detectar_desinformacion_sesgo"
  nivel: "intermedio"
  tags: ["verificacion", "metodo", "ordenar"]

respuesta_orden: ["Identificar la fuente", "Contrastar con otros medios", "Analizar el contenido y sesgos"]
tipo: ordenar
opciones_explicitas: ["Identificar la fuente", "Contrastar con otros medios", "Analizar el contenido y sesgos"]

enunciado: "Ordena los pasos lógicos para verificar si una noticia es desinformación:"

pasos:
  - "Verificar quién publica la información."
  - "Buscar la misma noticia en medios de comunicación confiables."
  - "Evaluar si el lenguaje es emocional o manipulador."

explicacion: |
  La verificación requiere un método sistemático: primero saber de dónde viene, luego ver si otros lo confirman y finalmente analizar la calidad del mensaje.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "detectar_desinformacion_deepfakes"
  nivel: "basico"
  tags: ["ia", "tecnologia", "audio"]

respuesta: "audio"
tipo: mc
opciones_explicitas: ["audio", "texto", "impresión"]

enunciado: "Además de la imagen, ¿qué otro elemento puede ser falsificado mediante IA para crear un deepfake convincente?"

explicacion: |
  Los deepfakes pueden manipular tanto la imagen (video) como la voz (audio), permitiendo que una persona parezca decir algo que nunca dijo.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo"
  nivel: "basico"
  tags: ["sesgo", "titulares", "critica"]

enunciado: "Un portal de noticias publica el siguiente titular: 'El polémico candidato X propone medidas que podrían destruir la economía nacional'. Este titular presenta un ___ evidente, ya que utiliza adjetivos con carga emocional para influir en la opinión del lector."

respuestas_validas:
  - "sesgo de presentación"
respuesta: "sesgo de presentación"
tipo: completar

explicacion: |
  El titular utiliza palabras con fuerte carga negativa ('polémico', 'destruir') para guiar la interpretación del lector hacia una conclusión específica, lo cual es un ejemplo de sesgo en la presentación de la información.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "deepfakes"
  nivel: "intermedio"
  tags: ["ia", "video", "falsificacion"]

enunciado: "Se observa un video de un líder político diciendo algo extremadamente inusual. Al analizarlo con cuidado, se nota que el parpadeo es irregular y los movimientos de la boca no coinciden perfectamente con el audio. ¿Es este video un Deepfake?"

respuesta: verdadero
tipo: vf

explicacion: |
  Los deepfakes son contenidos audiovisuales creados o manipulados mediante inteligencia artificial para que parezca que alguien dice o hace algo que nunca ocurrió. Las inconsistencias en el parpadeo o la sincronización labial son señales comunes de manipulación.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion"
  nivel: "intermedio"
  tags: ["metodologia", "verificacion"]

enunciado: "Ordena los pasos lógicos para verificar si una noticia viral en redes sociales es real o desinformación:"

opciones_explicitas: ["1. Buscar la noticia en fuentes oficiales o medios de prestigio", "2. Analizar el origen y la fecha de la publicación", "3. Verificar si la imagen o video tiene marcas de manipulación", "4. Contrastar la información con otros medios independientes"]
respuesta_orden: ["1. Buscar la noticia en fuentes oficiales o medios de prestigio", "2. Analizar el origen y la fecha de la publicación", "3. Verificar si la imagen o video tiene marcas de manipulación", "4. Contrastar la información con otros medios independientes"]
tipo: ordenar

explicacion: |
  Para combatir la desinformación, es fundamental seguir un proceso de triangulación: verificar la fuente, el contexto temporal, la integridad del contenido multimedia y la concordancia con otras fuentes confiables.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "sesgo_confirmacion"
  nivel: "avanzado"
  tags: ["algoritmos", "burbujas_filtro"]

enunciado: "Un usuario que recibe solo noticias que refuerzan su opinión política está atrapado en una 'burbuja de filtro' que alimenta su ___."

respuesta: "sesgo de confirmación"
tipo: completar

explicacion: |
  Los algoritmos de las redes sociales tienden a mostrarnos contenido similar a lo que ya nos gusta, creando una cámara de eco que refuerza nuestros prejuicios y nos impide ver otros puntos de vista.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "deepfakes"
  nivel: "basico"
  tags: ["ia", "tecnologia"]

enunciado: "La tecnología de Deepfake requiere obligatoriamente que una persona real haya grabado el video original para luego ser manipulada por IA."

respuesta: falso
tipo: vf
explicacion: |
  Falso. Si bien la mayoría de los deepfakes conocidos se basan en la técnica de 'face-swapping' (intercambio de rostros) sobre un video de una persona real, también existen modelos capaces de generar rostros y voces completamente sintéticos desde cero, sin partir de una grabación real.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "sesgo_en_la_informacion"
  nivel: "basico"
  tags: ["sesgo", "desinformacion", "pensamiento_critico"]

respuesta: "sesgo de confirmación"
tipo: completar
respuestas_validas:
  - "sesgo de confirmación"

enunciado: "Cuando una persona tiende a buscar, interpretar y recordar únicamente la información que apoya sus creencias previas, ignorando las evidencias que las contradicen, está experimentando el ___."

explicacion: |
  El sesgo de confirmación es un error cognitivo que nos hace ver solo lo que queremos ver, reforzando nuestras ideas previas y dificultando el pensamiento crítico.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "deepfakes"
  nivel: "intermedio"
  tags: ["ia", "deepfake", "video"]

respuesta: verdadero
tipo: vf
enunciado: "Si un video muestra a un líder político diciendo palabras que nunca pronunció, utilizando una técnica de IA para superponer su rostro y voz en otro cuerpo, ¿es este contenido un deepfake?"

explicacion: |
  Los deepfakes son contenidos audiovisuales generados o manipulados mediante inteligencia artificial para crear representaciones realistas de personas diciendo o haciendo cosas que nunca ocurrieron.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "deepfakes"
  nivel: "avanzado"
  tags: ["evidencia", "ia", "verificacion"]

respuesta: falso
tipo: vf

enunciado: "Ante la existencia de los deepfakes, la premisa 'ver para creer' (asumir que un video es real solo por ser una imagen en movimiento) sigue siendo una regla de verificación confiable en la era de la IA."

explicacion: |
  En la era de la IA generativa, la evidencia visual ya no es garantía de verdad. Los deepfakes pueden replicar gestos, voces y expresiones con un realismo asombroso.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_datos"
  nivel: "intermedio"
  tags: ["metodologia", "verificacion", "pasos"]

respuesta_orden: ["buscar la fuente original", "contrastar con otros medios", "analizar posibles sesgos"]
tipo: ordenar
opciones_explicitas: ["buscar la fuente original", "contrastar con otros medios", "analizar posibles sesgos"]

enunciado: "Para verificar si una noticia es real o contiene un sesgo de presentación, se debe seguir este orden lógico de análisis:"

explicacion: |
  Primero se debe encontrar el origen (fuente), luego ver si otros medios serios lo reportan y finalmente analizar si el lenguaje usado intenta manipular la opinión del lector.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "sesgo_en_la_informacion"
  nivel: "basico"
  tags: ["lenguaje", "manipulacion", "sesgo"]

respuesta: "manipulación"
tipo: completar
respuestas_validas:
  - "manipulación"

enunciado: "Cuando un medio de comunicación utiliza adjetivos cargados de juicio o selecciona solo los datos que favorecen una postura para influir en la opinión pública, está realizando una ___ de la información."

explicacion: |
  La manipulación mediante el sesgo de presentación no siempre es una mentira directa, sino una selección parcial de la realidad para guiar la percepción del receptor.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo_deepfakes"
  nivel: "basico"
  tags: ["sesgo", "desinformacion"]

tipo: mc
opciones_explicitas: ["La desinformación es el error involuntario de una persona, mientras que el sesgo es la manipulación deliberada de datos.", "El sesgo de confirmación es la tendencia a aceptar información que refuerza nuestras creencias, mientras que la desinformación es información falsa creada para engañar.", "El sesgo es siempre una mentira absoluta, mientras que la desinformación es solo una opinión subjetiva.", "No hay diferencia, ambos términos se refieren a noticias falsas en redes sociales."]

respuesta: "El sesgo de confirmación es la tendencia a aceptar información que refuerza nuestras creencias, mientras que la desinformación es información falsa creada para engañar."

enunciado: "¿Cuál es la distinción principal entre el sesgo de confirmación y la desinformación?"

explicacion: |
  El sesgo de confirmación es un proceso cognitivo donde filtramos la realidad según lo que ya creemos. La desinformación es un acto externo de crear contenido falso con el fin de manipular.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo_deepfakes"
  nivel: "intermedio"
  tags: ["deepfakes", "ia"]

tipo: vf
respuesta: falso

enunciado: "¿Un deepfake se distingue de una edición de video tradicional (como un montaje de cine) principalmente porque el contenido es creado por un humano con herramientas de software sin intervención de algoritmos de aprendizaje profundo?"

explicacion: |
  Falso. Lo que define a un deepfake es precisamente el uso de Inteligencia Artificial (redes neuronales generativas) para crear o manipular contenido de forma hiperrealista.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo_deepfakes"
  nivel: "intermedio"
  tags: ["analisis", "noticias"]

tipo: completar
respuestas_validas:
  - "fuente"
respuesta: "fuente"

enunciado: "Para detectar sesgos en la presentación de una noticia, debemos verificar el titular (que no sea sensacionalista), el contexto (que la información sea verídica) y la ___ (que sea un medio confiable)."

explicacion: |
  Analizar el titular, el contexto y la fuente es el método básico para identificar si una noticia intenta manipular emocionalmente al lector.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo_deepfakes"
  nivel: "avanzado"
  tags: ["ia", "proceso"]

tipo: ordenar
opciones_explicitas: ["Recolección de datos (imágenes/audio)", "Entrenamiento del modelo de IA", "Generación del contenido sintético", "Difusión del contenido"]

enunciado: "Ordena los pasos lógicos para la creación y propagación de un deepfake:"

explicacion: |
  Primero se necesitan los datos de entrenamiento, luego la IA aprende esos patrones, después se genera el video y finalmente se distribuye en la red.
respuesta_orden: ["Recolección de datos (imágenes/audio)", "Entrenamiento del modelo de IA", "Generación del contenido sintético", "Difusión del contenido"]
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo_deepfakes"
  nivel: "intermedio"
  tags: ["sesgo", "veracidad"]

tipo: mc
opciones_explicitas: ["El sesgo de presentación altera la percepción de un hecho real sin necesidad de inventar datos falsos.", "El sesgo de presentación siempre implica que la información es 100% mentira.", "La diferencia es que el sesgo solo ocurre en medios escritos y la desinformación en video.", "No existe diferencia entre presentar un hecho con carga emocional y mentir."]

respuesta: "El sesgo de presentación altera la percepción de un hecho real sin necesidad de inventar datos falsos."

enunciado: "En el caso de un medio que utiliza adjetivos altamente subjetivos para describir un evento real, ¿qué está ocurriendo?"

explicacion: |
  Se está aplicando un sesgo de presentación. La información puede ser real (el hecho ocurrió), pero la forma de comunicarla está diseñada para inclinar la opinión del receptor.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "noticias", "critica"]

variables:
  datos: [["Un titular dice: 'Científicos confirman que el café es la cura de todo'", "Sesgo de generalización"], ["Un titular dice: 'El 90% de la gente odia esta nueva ley'", "Sesgo de generalización"], ["Un titular dice: 'Solo los que saben de política entenderán esto'", "Sesgo de exclusión"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Sesgo de generalización", "Sesgo de exclusión", "Sesgo de confirmación", "Sesgo de autoridad"]

enunciado: "Analiza el siguiente titular: '{datos[idx][0]}'. ¿Qué tipo de sesgo presenta?"

explicacion: |
  El titular utiliza una afirmación extrema o excluyente para manipular la percepción del lector, lo cual es una característica del sesgo informativo.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_deepfakes"
  nivel: "basico"
  tags: ["ia", "deepfakes", "video"]

respuesta: verdadero
tipo: vf

enunciado: "Un 'deepfake' es un contenido audiovisual (video o audio) creado o manipulado mediante inteligencia artificial para que parezca que una persona dice o hace algo que nunca ocurrió."

explicacion: |
  Correcto. Los deepfakes utilizan redes neuronales para sustituir rostros o clonar voces de manera altamente realista.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_deepfakes"
  nivel: "avanzado"
  tags: ["verificacion", "ia", "pistas"]

variables:
  pista_falsa: uno_de(["parpadeo poco natural", "sombras inconsistentes", "bordes difusos en el cuello"])

respuesta: pista_falsa
tipo: completar
respuestas_validas:
  - "parpadeo poco natural"
  - "sombras inconsistentes"
  - "bordes difusos en el cuello"

enunciado: "Al verificar un video sospechoso de ser un deepfake, un detalle técnico común que delata la manipulación es el ___."

explicacion: |
  {pista_falsa} es una de las inconsistencias visuales más comunes producidas por algoritmos de generación de video actuales.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_proceso"
  nivel: "intermedio"
  tags: ["verificacion", "metodo", "pasos"]

respuesta_orden: ["Buscar la fuente original", "Contrastar con otros medios", "Verificar la fecha y el autor", "Analizar si el contenido apela a emociones extremas"]
tipo: ordenar
opciones_explicitas: ["Buscar la fuente original", "Contrastar con otros medios", "Verificar la fecha y el autor", "Analizar si el contenido apela a emociones extremas"]

enunciado: "Ordena los pasos lógicos para verificar la veracidad de una noticia viral en redes sociales:"

explicacion: |
  La verificación efectiva requiere ir desde la fuente primaria hacia el análisis crítico del tono y la actualidad de la información.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_deepfakes"
  nivel: "intermedio"
  tags: ["ia", "audio", "clonacion"]

variables:
  datos: [["Un audio de un político diciendo algo escandaloso", "audio"], ["Un video de un famoso recomendando una estafa", "video"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["audio", "video", "texto", "imagen"]

enunciado: "Si se utiliza IA para clonar la voz de un líder mundial con el fin de desinformar, estamos ante un deepfake de tipo {datos[idx][1]}."

explicacion: |
  El término deepfake se aplica tanto a la manipulación de imagen (video) como de la voz (audio).
```

## Sección: fuente-primaria-vs-secundaria (25 preguntas)

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["definicion", "fuentes"]

respuesta: verdadero
tipo: vf

enunciado: "Una fuente primaria es un documento o testimonio original que fue creado en el momento exacto en que ocurrió el evento estudiado."

explicacion: |
  Las fuentes primarias son registros directos (diarios, fotos, entrevistas, documentos oficiales) sin interpretaciones externas.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Carta de un soldado en la guerra", "Un libro de historia escrito en 2023"], ["Video de un discurso presidencial", "Un artículo de opinión sobre el discurso"]]

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: [escenarios[escenario_idx][0], escenarios[escenario_idx][1]]

enunciado: "Analiza estos dos elementos: '{escenarios[escenario_idx][0]}' y '{escenarios[escenario_idx][1]}'. ¿Cuál de los dos actúa como una fuente primaria?"

explicacion: |
  La fuente primaria es el objeto original (la carta o el video), mientras que el libro o el artículo son fuentes secundarias porque interpretan el original.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["secundaria"]

respuesta: "interpretar o analizar"
tipo: completar
respuestas_validas:
  - "interpretar o analizar"

enunciado: "A diferencia de la fuente primaria, una fuente secundaria tiene como función principal ___ la información de la fuente original."

explicacion: |
  Las fuentes secundarias (enciclopedias, libros de texto, críticas) se basan en fuentes primarias para ofrecer una interpretación o resumen.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "intermedio"
  tags: ["relacion"]

tipo: ordenar
opciones_explicitas: ["Evento original", "Fuente primaria", "Fuente secundaria"]
respuesta_orden: ["Evento original", "Fuente primaria", "Fuente secundaria"]

enunciado: "Ordena la cadena de producción de la información, desde el hecho hasta el análisis interpretativo:"

pasos:
  - "El suceso ocurre"
  - "Se crea un documento directo"
  - "Se escribe un libro sobre el suceso"

explicacion: |
  El orden lógico es: 1. El evento, 2. El registro directo (primaria), 3. El análisis posterior (secundaria).
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["dependencia"]

respuesta: falso

tipo: vf

enunciado: "¿Es posible que una fuente secundaria exista sin que exista una fuente primaria previa que la haya originado?"

explicacion: |
  Falso. La fuente secundaria siempre requiere de una fuente primaria (o un conjunto de ellas) para poder realizar su labor de interpretación o análisis.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["fuentes", "investigacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Diario El País, edición de hoy", "Un libro de historia escrito en 2023", "Un video de un testigo presencial", "Un podcast que analiza una noticia"], ["Un diario de un soldado en la guerra", "Un documental que explica la guerra", "Una carta escrita en 1945", "Un libro de texto escolar"]]

enunciado: "Si estamos investigando un evento histórico ocurrido hace 50 años, ¿cuál de los siguientes ejemplos sería una fuente primaria?"

opciones_explicitas: [datos[escenario_idx][0], datos[escenario_idx][1], datos[escenario_idx][2], datos[escenario_idx][3]]

respuesta: datos[escenario_idx][2]
tipo: mc

explicacion: |
  Una fuente primaria es un testimonio directo o un objeto creado en el momento del evento. En este caso, el video del testigo es un registro de primera mano.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["analisis", "interpretacion"]

enunciado: "Un historiador lee un diario íntimo de una persona que vivió la Revolución Francesa para escribir un libro sobre ese periodo. El diario es una fuente primaria, mientras que el libro del historiador es una fuente ________."

respuesta: "secundaria"
respuestas_validas:
  - "secundaria"
tipo: completar

explicacion: |
  El libro es una fuente secundaria porque el historiador interpreta, analiza y comenta la información contenida en la fuente primaria (el diario).
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "intermedio"
  tags: ["verificacion", "fake_news"]

enunciado: "Si un artículo de Wikipedia explica qué fue la Revolución Industrial basándose en varios libros de texto, ¿es la Wikipedia una fuente primaria?"

respuesta: falso
tipo: vf

explicacion: |
  Falso. Wikipedia es una fuente secundaria (o terciaria) porque recopila y sintetiza información que ya ha sido procesada por otros autores.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

enunciado: "Para realizar una investigación académica rigurosa sobre un descubrimiento científico reciente, ordena los pasos lógicos de recolección de información:"

opciones_explicitas: ["Analizar el experimento original (fuente primaria)", "Leer artículos de divulgación científica (fuente secundaria)", "Comparar las conclusiones de los expertos (fuente secundaria)"]

respuesta_orden: ["Analizar el experimento original (fuente primaria)", "Leer artículos de divulgación científica (fuente secundaria)", "Comparar las conclusiones de los expertos (fuente secundaria)"]
tipo: ordenar

explicacion: |
  El método científico ideal comienza con la observación o análisis del fenómeno directo (primaria) para luego contrastarlo con la interpretación de otros (secundaria).
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "avanzado"
  tags: ["clasificacion", "evidencia"]

variables:
  item_idx: uno_de([0, 1])
  ejemplos: [["Fotografía de un accidente", "Noticia en un periódico sobre el accidente"], ["Entrevista a un sobreviviente", "Biografía del sobreviviente"]]

enunciado: "Analiza el par de elementos: {ejemplos[item_idx][0]} y {ejemplos[item_idx][1]}. ¿Cuál de los dos elementos es la fuente secundaria?"

opciones_explicitas: [ejemplos[item_idx][0], ejemplos[item_idx][1]]

respuesta: ejemplos[item_idx][1]
tipo: mc

explicacion: |
  La segunda opción es la secundaria porque es una obra que trata sobre la vida de otra persona (la fuente primaria es la entrevista o la vida misma del sujeto).
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente-primaria-vs-secundaria"
  nivel: "basico"
  tags: ["fuentes", "investigacion"]

respuesta: falso
tipo: vf

enunciado: "Un libro de texto escrito por un historiador en el año 2020 que analiza la Revolución Francesa se considera una fuente primaria."

explicacion: |
  Falso. El libro es una fuente secundaria porque interpreta y analiza eventos ocurridos en el pasado a partir de otras fuentes. Una fuente primaria sería un diario escrito por alguien que vivió la Revolución Francesa.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente-primaria-vs-secundaria"
  nivel: "intermedio"
  tags: ["clasificacion", "evidencia"]

variables:
  escenario_idx: uno_de([0, 1])
  opcion_idx: uno_de([0, 1])
  escenario: [[["Entrevista grabada a un sobreviviente de un terremoto", "primaria"], ["Artículo de Wikipedia sobre la historia de la ciudad", "secundaria"]], [["Fotografía original de la llegada del hombre a la Luna", "primaria"], ["Documental de Netflix sobre la carrera espacial", "secundaria"]]]

enunciado: "Si analizamos el siguiente elemento: {escenario[escenario_idx][opcion_idx][0]}, ¿qué tipo de fuente estamos consultando?"

opciones_explicitas: ["primaria", "secundaria"]
respuesta: escenario[escenario_idx][opcion_idx][1]
tipo: mc

explicacion: |
  Las fuentes primarias son testimonios directos o evidencias originales del evento. Las secundarias son interpretaciones, resúmenes o análisis realizados posteriormente por terceros.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente-primaria-vs-secundaria"
  nivel: "intermedio"
  tags: ["analisis", "confusion"]

respuesta: "interpretación"
tipo: completar
respuestas_validas:
  - "interpretación"
  - "comentario"
  - "análisis"

enunciado: "Una fuente secundaria se diferencia de una primaria porque su función principal no es presentar el hecho original, sino realizar una ___ del mismo."

explicacion: |
  Exacto. La fuente secundaria añade una capa de análisis, crítica o síntesis sobre la información original (fuente primaria).
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente-primaria-vs-secundaria"
  nivel: "avanzado"
  tags: ["contexto", "metodologia"]

respuesta: verdadero
tipo: vf

enunciado: "Un artículo de un periódico escrito en 1920 sobre un evento ocurrido el mismo día puede ser una fuente primaria para un historiador actual, pero un libro de texto de 2024 que cita ese periódico es una fuente secundaria."

explicacion: |
  Correcto. La clasificación depende del uso y la relación con el evento. El periódico es testimonio directo del momento; el libro es una interpretación posterior.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente-primaria-vs-secundaria"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

opciones_explicitas: ["Recolección de evidencia directa", "Análisis de datos primarios", "Redacción de una conclusión o síntesis"]
respuesta_orden: ["Recolección de evidencia directa", "Análisis de datos primarios", "Redacción de una conclusión o síntesis"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para que un investigador pase de trabajar con fuentes primarias a producir una fuente secundaria:"

explicacion: |
  Para crear una fuente secundaria, primero se debe obtener la evidencia original (primaria), luego procesar y analizar esa información, y finalmente redactar un nuevo documento que explique o sintetice lo hallado.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["fuentes", "investigacion"]

opciones_explicitas: ["Un diario escrito por un testigo presencial de un evento", "Un libro de texto que explica la Revolución Francesa", "Un documental que analiza la historia de la música", "Un artículo de Wikipedia sobre la fotosíntesis"]

respuesta: "Un diario escrito por un testigo presencial de un evento"
tipo: mc

enunciado: "Si estás realizando una investigación histórica, ¿cuál de los siguientes ejemplos constituye una fuente primaria?"

explicacion: |
  Una fuente primaria es un registro original creado en el momento del evento o por un testigo directo, sin interpretaciones previas de terceros.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Una fuente secundaria se caracteriza por ser un documento original que no ha sido interpretado ni analizado por otros autores."

explicacion: |
  Falso. Precisamente, la fuente secundaria es aquella que interpreta, analiza o sintetiza información proveniente de fuentes primarias.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "intermedio"
  tags: ["metodologia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: ["Entrevista a un sobreviviente", "una carta antigua"]

respuesta: "secundaria"
tipo: completar
respuestas_validas:
  - "secundaria"

enunciado: "Si el objeto de estudio es {datos[escenario_idx]}, el documento que la analiza se clasifica como una fuente ___."

pasos:
  - "Identificar el origen del documento base."
  - "Determinar si el documento analiza o solo relata el hecho."

explicacion: |
  Como el documento es un análisis o resumen de un evento/registro previo, se convierte en una fuente secundaria.
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "intermedio"
  tags: ["jerarquia"]

opciones_explicitas: ["Fotografía del momento del hecho", "Reportaje periodístico sobre la foto", "Ensayo histórico sobre el evento"]
respuesta_orden: ["Fotografía del momento del hecho", "Reportaje periodístico sobre la foto", "Ensayo histórico sobre el evento"]
tipo: ordenar

enunciado: "Ordena estos elementos según el proceso de transformación de la información, desde la fuente más original (primaria) hasta la más interpretativa (secundaria):"

explicacion: |
  La fotografía es el registro directo (primaria), el reportaje la comenta (secundaria) y el ensayo es una interpretación profunda de ambos (secundaria avanzada).
```

```
metadata:
  materia: "ciudadania-digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "avanzado"
  tags: ["distincion"]

respuesta: "interpretación"
tipo: completar
respuestas_validas:
  - "interpretación"

enunciado: "La principal diferencia entre una fuente primaria y una secundaria radica en la presencia de ___ o análisis sobre el evento original."

explicacion: |
  La fuente primaria es el dato bruto o testimonio directo; la secundaria añade una capa de interpretación, análisis o comentario.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["investigacion", "fuentes"]

variables:
  escenarios: [["Un video original de un discurso presidencial", "primaria"], ["Un artículo de Wikipedia sobre la historia de la presidencia", "secundaria"], ["La fotografía de una protesta capturada en el momento", "primaria"], ["Un libro de texto escolar que explica la constitución", "secundaria"]]
  idx: uno_de([0,1,2,3])

enunciado: "Si estás realizando una investigación histórica y encuentras {escenarios[idx][0]}, ¿qué tipo de fuente estás consultando?"

opciones_explicitas: ["primaria", "secundaria"]
respuesta: escenarios[idx][1]
tipo: "mc"

explicacion: |
  Una fuente primaria es un registro original creado en el momento del evento, sin interpretación externa.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  idx: uno_de([0,1])
  textos: ["Un ensayo que analiza las causas de la Revolución Francesa es un ejemplo de fuente primaria.", "Un diario personal escrito por un soldado en la guerra es un ejemplo de fuente primaria."]
  valores: [falso, verdadero]

enunciado: "Determina si la siguiente afirmación es verdadera o falsa: {textos[idx]}"

respuesta: valores[idx]
tipo: "vf"

explicacion: |
  Si el texto analiza o interpreta un evento pasado, se considera una fuente secundaria.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "intermedio"
  tags: ["metodologia"]

variables:
  ejemplos: [["un documental que resume un conflicto", "secundaria"], ["una carta escrita por un prócer", "primaria"]]
  idx: uno_de([0,1])

enunciado: "Un historiador lee {ejemplos[idx][0]}. Por lo tanto, está trabajando con una fuente de tipo ___."

respuestas_validas:
  - "primaria"
  - "secundaria"
respuesta: ejemplos[idx][1]
tipo: "completar"

explicacion: |
  Las fuentes secundarias son aquellas que procesan, interpretan o sintetizan la información de las fuentes primarias.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  items: [["Carta de un soldado", "primaria"], ["Biografía de un héroe", "secundaria"], ["Fotografía de un evento", "primaria"], ["Enciclopedia", "secundaria"]]
  idx: uno_de([0,1,2,3])

enunciado: "Clasifica el siguiente elemento: {items[idx][0]}"

opciones_explicitas: ["primaria", "secundaria"]
respuesta: items[idx][1]
tipo: "mc"

explicacion: |
  La clasificación depende de si el objeto es el objeto de estudio original o un comentario sobre él.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "fuente_primaria_vs_secundaria"
  nivel: "avanzado"
  tags: ["proceso"]

enunciado: "Ordena el proceso lógico para generar conocimiento histórico a partir de evidencias:"

opciones_explicitas: ["Encontrar una fuente primaria", "Analizar la fuente primaria", "Escribir una fuente secundaria"]
respuesta_orden: ["Encontrar una fuente primaria", "Analizar la fuente primaria", "Escribir una fuente secundaria"]
tipo: "ordenar"

explicacion: |
  Primero se obtiene la evidencia (primaria), luego se procesa (análisis) y finalmente se comunica el resultado (fuente secundaria).
```

## Sección: publicidad-enganosa (20 preguntas)

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "basico"
  tags: ["publicidad_enganosa", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Muchos anuncios usan frases que suenan a promesa concreta pero, al analizarlas con cuidado, no afirman nada verificable ni exigible."

pasos:
  - "El objetivo de este tema es aprender a detectar esas frases vacías."

explicacion: |
  Verdadero: es el eje central de este tema.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["comparativos_vacios"]

variables:
  n: uno_de([1, 1])

respuesta: "comparativo sin punto de comparación"
tipo: mc
opciones_explicitas: ["comparativo sin punto de comparación", "superlativo vacío", "testimonio como prueba"]

enunciado: "\"Hasta 50% más eficaz\" (sin decir más eficaz que qué) es un ejemplo de..."

pasos:
  - "Si no se dice contra qué se compara, el dato suena concreto pero no afirma nada verificable."

explicacion: |
  El comparativo sin punto de comparación deja sin especificar la
  base de la comparación.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["superlativos_vacios"]

variables:
  n: uno_de([1, 1])

respuesta: "superlativo vacío"
tipo: mc
opciones_explicitas: ["comparativo sin punto de comparación", "superlativo vacío", "cifra sin fuente"]

enunciado: "\"El mejor café del mundo\" (sin decir según qué criterio ni medido por quién) es un ejemplo de..."

pasos:
  - "Sin un criterio y una fuente, es una afirmación de opinión disfrazada de dato objetivo."

explicacion: |
  El superlativo vacío usa palabras extremas (\"el mejor\", \"el
  número uno\") sin ningún criterio verificable.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["cifras_sin_fuente"]

variables:
  n: uno_de([1, 1])

respuesta: "cifra sin fuente ni metodología"
tipo: mc
opciones_explicitas: ["cifra sin fuente ni metodología", "superlativo vacío", "letra chica"]

enunciado: "\"9 de cada 10 recomiendan...\" (sin decir cuántas personas en total ni quién hizo el estudio) es un ejemplo de..."

pasos:
  - "Una cifra sin metodología citable no tiene sustento real, aunque tenga apariencia de rigor estadístico."

explicacion: |
  La cifra sin fuente ni metodología presenta un número sin poder
  verificarlo.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["testimonio_como_prueba"]

variables:
  n: uno_de([1, 1])

respuesta: "testimonio como prueba"
tipo: mc
opciones_explicitas: ["testimonio como prueba", "comparativo sin punto de comparación", "cifra sin fuente"]

enunciado: "Usar \"a mí me funcionó\" de una sola persona como si probara que el producto funciona en general es un ejemplo de..."

pasos:
  - "Un testimonio individual no prueba que algo funcione en general."

explicacion: |
  El testimonio como prueba usa un caso individual como si
  demostrara algo sobre el conjunto general.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "avanzado"
  tags: ["testimonio_como_prueba", "detectar_falacias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar un testimonio individual como si probara la eficacia general de un producto es un ejemplo de generalización apresurada, la misma falacia ya vista en `../../lengua/detectar-falacias/`."

pasos:
  - "Un solo caso no es una muestra suficiente para generalizar, aunque el testimonio en sí sea sincero."

explicacion: |
  Verdadero: es la aplicación directa de esa falacia al contexto
  publicitario.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["palabras_tecnicas_vacias"]

variables:
  n: uno_de([1, 1])

respuesta: "palabras técnicas sin significado verificable"
tipo: mc
opciones_explicitas: ["palabras técnicas sin significado verificable", "letra chica", "cifra sin fuente"]

enunciado: "\"Fórmula exclusiva\", \"tecnología avanzada\" y \"clínicamente probado\" (sin decir qué se probó ni dónde se publicó) son ejemplos de..."

pasos:
  - "Dan una sensación de rigor científico sin aportar ningún dato concreto verificable."

explicacion: |
  Las palabras técnicas vacías suenan a rigor científico sin ofrecer
  ningún dato verificable de respaldo.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["letra_chica"]

variables:
  n: uno_de([1, 1])

respuesta: "letra chica que contradice el mensaje principal"
tipo: mc
opciones_explicitas: ["letra chica que contradice el mensaje principal", "superlativo vacío", "testimonio como prueba"]

enunciado: "Un anuncio que promete algo llamativo, pero cuyas condiciones legales en letra pequeña matizan o contradicen esa promesa, es un ejemplo de..."

pasos:
  - "Conviene revisar siempre las condiciones completas, no sólo el titular llamativo."

explicacion: |
  La letra chica que contradice el mensaje principal esconde
  condiciones importantes en un lugar poco visible.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La pregunta clave para detectar publicidad engañosa es: \"¿esto se puede verificar de forma concreta, o es una frase que suena bien sin decir nada comprobable?\"."

pasos:
  - "Es la misma lógica de separar conclusión de razón sólida ya vista en `../../lengua/detectar-falacias/`."

explicacion: |
  Verdadero: es la pregunta metodológica central de este tema.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "avanzado"
  tags: ["publicidad_enganosa", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Reconocer estas técnicas no implica que toda publicidad sea engañosa; el objetivo es dar herramientas para distinguir una afirmación verificable de una frase vacía."

pasos:
  - "Hay publicidad con datos concretos y verificables, no toda apela a estas técnicas."

explicacion: |
  Verdadero: es un matiz importante para no generalizar de forma
  injusta sobre toda la publicidad.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "avanzado"
  tags: ["cifras_sin_fuente", "detectar_falacias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una cifra publicitaria sin fuente ni metodología citable es un argumento de datos sin sustento real, aunque tenga apariencia de rigor estadístico."

pasos:
  - "Ver `../../lengua/detectar-falacias/`: es la aplicación directa de ese concepto al contexto publicitario."

explicacion: |
  Verdadero: es la conexión explícita entre esta técnica publicitaria
  y el concepto de argumento de datos ya estudiado.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["publicidad_enganosa", "practica"]

variables:
  frases: ["Ahora con 30% más de proteína", "El producto número 1 en preferencia"]
  tecnicas: ["comparativo sin punto de comparación", "superlativo vacío"]
  idx: uno_de([0, 1])

respuesta: tecnicas[idx]
tipo: mc
opciones_explicitas: ["comparativo sin punto de comparación", "superlativo vacío", "cifra sin fuente", "testimonio como prueba"]

enunciado: "\"{frases[idx]}\" (sin más detalle) es un ejemplo de..."

pasos:
  - "\"Más que\" sin punto de comparación es un comparativo vacío; \"número 1\" sin criterio es un superlativo vacío."

explicacion: |
  Cada frase ejemplifica una técnica distinta de publicidad engañosa.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["comparativos_vacios", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ante la frase \"hasta 50% más eficaz\", conviene preguntarse: ¿más eficaz que el producto anterior de la misma marca, que la competencia, o que un placebo?"

pasos:
  - "Sin esa aclaración, el porcentaje suena concreto pero no dice nada verificable sobre qué se está comparando."

explicacion: |
  Verdadero: es la pregunta crítica que revela la falta de contenido
  verificable en un comparativo vacío.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "avanzado"
  tags: ["palabras_tecnicas_vacias", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La frase \"clínicamente probado\", sin ningún dato adicional sobre qué se probó, con qué resultado o dónde se publicó el estudio, es suficiente para verificar la eficacia real de un producto."

pasos:
  - "Sin esos datos concretos, es una palabra técnica vacía que suena a rigor científico sin serlo."

explicacion: |
  Falso: la frase por sí sola, sin datos concretos verificables, no
  demuestra nada.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["letra_chica", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de aceptar una promoción atractiva (\"3x2 en todo el local\"), conviene revisar las condiciones completas en letra chica, que pueden excluir la mayoría de los productos anunciados."

pasos:
  - "El titular llamativo puede no reflejar completamente las condiciones reales de la oferta."

explicacion: |
  Verdadero: es la aplicación práctica de revisar la letra chica
  antes de tomar decisiones de consumo.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "avanzado"
  tags: ["publicidad_enganosa", "detectar_falacias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Varias técnicas de publicidad engañosa reutilizan directamente falacias ya estudiadas en `../../lengua/detectar-falacias/`: testimonio como prueba (generalización apresurada), cifras sin fuente (argumento de datos sin sustento)."

pasos:
  - "Es la misma conexión que da origen a este tema como aplicación práctica de ese prerrequisito."

explicacion: |
  Verdadero: es la síntesis de la relación entre este tema y su
  prerrequisito de Lengua.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "avanzado"
  tags: ["superlativos_vacios", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "\"El auto más vendido de Argentina en 2025, según datos de la Asociación de Concesionarios\" es un ejemplo de superlativo vacío, igual que \"el mejor auto del mundo\" sin ninguna fuente."

pasos:
  - "El primero SÍ tiene criterio (ventas) y fuente citada (la asociación); el segundo no tiene ninguno de los dos."

explicacion: |
  Falso: cuando hay criterio explícito y fuente citable, ya no es un
  superlativo vacío, es una afirmación verificable.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["publicidad_enganosa", "metodo"]

enunciado: "Ordená los pasos para analizar críticamente un anuncio publicitario."
tipo: ordenar
opciones_explicitas:
  - "Identificar las afirmaciones concretas hechas por el anuncio (cifras, comparativos, superlativos)"
  - "Preguntar si cada afirmación tiene un criterio, fuente o punto de comparación explícito"
  - "Revisar si hay letra chica que matice o contradiga el mensaje principal"
  - "Concluir qué partes del anuncio son verificables y cuáles son frases vacías"
respuesta_orden: ["Identificar las afirmaciones concretas hechas por el anuncio (cifras, comparativos, superlativos)", "Preguntar si cada afirmación tiene un criterio, fuente o punto de comparación explícito", "Revisar si hay letra chica que matice o contradiga el mensaje principal", "Concluir qué partes del anuncio son verificables y cuáles son frases vacías"]
explicacion: |
  El proceso va de identificar las afirmaciones concretas a evaluar
  su verificabilidad y revisar las condiciones completas.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "avanzado"
  tags: ["publicidad_enganosa", "verificacion_de_una_noticia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Publicidad engañosa y verificación de una noticia son dos nodos hermanos que dependen del mismo prerrequisito (detectar falacias) y aplican la misma lógica crítica a contextos distintos."

pasos:
  - "Ver `../verificacion-de-una-noticia/`: son nodos hermanos en el MAPA (`CD1`/`CD2`)."

explicacion: |
  Verdadero: es la relación entre los dos temas de Ciudadanía
  Digital.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "avanzado"
  tags: ["publicidad_enganosa", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de decidir una compra basada en un anuncio con frases como \"el mejor del mercado\" o \"resultados garantizados\", conviene preguntarse qué de esas afirmaciones es realmente verificable."

pasos:
  - "Es la aplicación práctica más directa de este tema en decisiones cotidianas de consumo."

explicacion: |
  Verdadero: es la aplicación concreta de este tema como herramienta
  de consumo crítico.
```

## Sección: verificacion-de-una-noticia (20 preguntas)

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "basico"
  tags: ["verificacion", "detectar_falacias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Verificar una noticia aplica el vocabulario de falacias y argumentos ya visto en Lengua a un caso concreto y cotidiano."

pasos:
  - "Ver `../../lengua/detectar-falacias/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "basico"
  tags: ["fuente"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El primer paso para verificar una noticia es revisar quién la publica: un medio con trayectoria y responsables identificables es distinto de una cuenta anónima."

pasos:
  - "Es el primer paso del proceso de verificación descrito en la teoría."

explicacion: |
  Verdadero: la fuente es el primer filtro básico de confiabilidad.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["fuente", "argumento_de_autoridad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Citar una fuente con trayectoria y credibilidad es un argumento de autoridad pertinente; citar una fuente sin credibilidad no lo es, aunque suene convincente."

pasos:
  - "Ver `../../lengua/detectar-falacias/`: es la aplicación directa de ese concepto a este contexto."

explicacion: |
  Verdadero: es la conexión explícita entre pertinencia de la fuente
  y el concepto de argumento de autoridad ya estudiado.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["fecha"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una noticia real, pero vieja, recirculada como si fuera actual, es una de las formas más comunes de desinformación."

pasos:
  - "No es falsa en su contenido original, pero es engañosa fuera de contexto temporal."

explicacion: |
  Verdadero: revisar la fecha es un paso central del proceso de
  verificación.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "avanzado"
  tags: ["fecha", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una noticia vieja recirculada fuera de contexto es engañosa por el momento en que se presenta, aunque su contenido original haya sido cierto en su momento."

pasos:
  - "Es un matiz importante: engañoso no siempre significa \"inventado\" desde cero."

explicacion: |
  Verdadero: hay formas de desinformación que no requieren inventar
  contenido falso, sólo descontextualizar algo real.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["contraste_de_fuentes"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si una noticia importante es cierta, generalmente otros medios independientes también la están cubriendo; que sólo una fuente aislada la mencione es una señal de alerta."

pasos:
  - "No es una prueba definitiva de que sea falsa, pero sí motivo para investigar más."

explicacion: |
  Verdadero: el contraste entre fuentes independientes es un paso
  clave del proceso de verificación.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["hecho_vs_opinion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Revisar si un texto describe lo que pasó o interpreta/opina sobre ello es un paso central de la verificación, porque muchos titulares mezclan ambas cosas sin marcarlo claramente."

pasos:
  - "Una misma información puede presentarse con distinto grado de carga valorativa según las palabras elegidas."

explicacion: |
  Verdadero: distinguir hecho de opinión es una herramienta central
  para leer noticias críticamente.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["apelacion_a_la_emocion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Titulares diseñados para generar indignación o miedo extremo suelen priorizar el impacto emocional (y los clics) por sobre la precisión informativa."

pasos:
  - "No es una prueba de falsedad, pero es una señal de alerta adicional a considerar."

explicacion: |
  Verdadero: la carga emocional exagerada de un titular es una marca
  a tener en cuenta al verificar.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["apelacion_a_la_popularidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que una noticia sea muy compartida (viral) no es una prueba de que sea verdadera — es la misma lógica de la apelación a la popularidad ya vista en `../../lengua/detectar-falacias/`."

pasos:
  - "Cuanto más viral, no necesariamente más verdadero."

explicacion: |
  Verdadero: es la aplicación directa de esa falacia al contexto de
  noticias digitales.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "avanzado"
  tags: ["escepticismo_moderado"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Verificar una noticia no significa desconfiar de todo por sistema, sino aplicar un proceso concreto antes de aceptar o descartar la información."

pasos:
  - "Una noticia bien verificada puede aceptarse con razonable confianza, no requiere duda infinita."

explicacion: |
  Verdadero: es el equilibrio correcto entre credulidad excesiva y
  escepticismo paralizante.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["escepticismo_moderado"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si una noticia tiene fuente confiable, fecha correcta y está contrastada con otros medios independientes, se puede aceptar con razonable confianza."

pasos:
  - "Cumplir los pasos de verificación es suficiente para actuar con confianza razonable, sin necesitar certeza absoluta imposible."

explicacion: |
  Verdadero: el objetivo del proceso es dar una base razonable para
  decidir, no una certeza matemática.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["verificacion", "practica"]

variables:
  situaciones: ["revisar si la cuenta que publicó la noticia tiene información de contacto y trayectoria", "buscar si otros medios independientes también publicaron la misma información"]
  pasos_correspondientes: ["revisar la fuente", "contrastar con otras fuentes"]
  idx: uno_de([0, 1])

respuesta: pasos_correspondientes[idx]
tipo: mc
opciones_explicitas: ["revisar la fuente", "revisar la fecha", "contrastar con otras fuentes", "distinguir hecho de opinión"]

enunciado: "\"{situaciones[idx]}\" corresponde al paso de..."

pasos:
  - "Cada acción concreta de verificación corresponde a uno de los pasos del proceso descrito en la teoría."

explicacion: |
  Reconocer a qué paso corresponde cada acción concreta ayuda a
  aplicar el proceso de verificación de forma ordenada.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "avanzado"
  tags: ["apelacion_a_la_emocion", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un titular con carga emocional fuerte no es, por sí solo, una prueba de que la noticia sea falsa — es una señal de alerta que amerita verificar más, no una conclusión automática."

pasos:
  - "Hay noticias verdaderas con titulares dramáticos porque el hecho en sí es dramático."

explicacion: |
  Verdadero: es un matiz importante para no descartar información
  real sólo por su tono emocional.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["fuente", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una noticia publicada por una cuenta anónima sin información de contacto amerita más cautela que la misma información publicada por un medio con trayectoria identificable."

pasos:
  - "No significa automáticamente que sea falsa, pero sí que requiere verificación adicional antes de aceptarla o compartirla."

explicacion: |
  Verdadero: la identificabilidad de la fuente es un factor relevante
  de confiabilidad, aunque no sea el único criterio.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "avanzado"
  tags: ["hecho_vs_opinion", "practica"]

variables:
  titulares: ["El Banco Central subió la tasa de interés al 40%", "El Banco Central toma una medida desesperada y sube la tasa al 40%"]
  tipos: ["descripción de hecho", "hecho con interpretación agregada"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["descripción de hecho", "hecho con interpretación agregada"]

enunciado: "El titular \"{titulares[idx]}\" es un ejemplo de..."

pasos:
  - "Palabras como \"desesperada\" agregan una carga valorativa que no está en el hecho puro (la suba de tasa en sí)."

explicacion: |
  El mismo hecho puede presentarse de forma neutral o con
  interpretación/opinión agregada según las palabras elegidas.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["verificacion", "proceso"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Verificar una noticia de forma completa requiere combinar varios pasos (fuente, fecha, contraste, hecho vs. opinión, carga emocional), no basta con revisar uno solo."

pasos:
  - "Cada paso cubre un aspecto distinto de la confiabilidad de la información."

explicacion: |
  Verdadero: ningún paso individual es suficiente por sí solo, hace
  falta combinarlos.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "avanzado"
  tags: ["fecha", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una foto real de un evento de hace varios años, compartida como si fuera de un evento actual, es un ejemplo de noticia descontextualizada, no necesariamente de una noticia inventada."

pasos:
  - "El contenido en sí puede ser real, pero el contexto en que se presenta ahora es engañoso."

explicacion: |
  Verdadero: es un ejemplo concreto de por qué revisar la fecha es un
  paso necesario, aunque el contenido no sea falso en origen.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "intermedio"
  tags: ["verificacion", "metodo"]

enunciado: "Ordená los pasos del proceso de verificación de una noticia."
tipo: ordenar
opciones_explicitas:
  - "Revisar la fuente (quién publica y qué trayectoria tiene)"
  - "Revisar la fecha (si es actual o vieja recirculada)"
  - "Contrastar con otras fuentes independientes"
  - "Distinguir hecho de opinión y revisar la carga emocional del titular"
respuesta_orden: ["Revisar la fuente (quién publica y qué trayectoria tiene)", "Revisar la fecha (si es actual o vieja recirculada)", "Contrastar con otras fuentes independientes", "Distinguir hecho de opinión y revisar la carga emocional del titular"]
explicacion: |
  El orden sigue la secuencia lógica del proceso de verificación
  descrito en la teoría, de lo más básico a lo más matizado.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "avanzado"
  tags: ["verificacion", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este proceso de verificación es la aplicación práctica directa de detectar falacias a un problema cotidiano y de consecuencias reales."

pasos:
  - "Ver `../../lengua/detectar-falacias/`: cada paso de verificación reutiliza un concepto ya estudiado ahí (autoridad pertinente, apelación a la popularidad)."

explicacion: |
  Verdadero: es la conexión de cierre entre este tema y su
  prerrequisito directo.
```

```
metadata:
  materia: "ciudadania_digital"
  tema: "verificacion_de_una_noticia"
  nivel: "avanzado"
  tags: ["verificacion", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de compartir una noticia impactante en redes sociales, conviene aplicar el proceso de verificación completo, en vez de compartirla sólo porque genera una reacción emocional fuerte."

pasos:
  - "Es la aplicación práctica más directa de este tema en el uso cotidiano de redes sociales."

explicacion: |
  Verdadero: es la aplicación concreta de este tema como herramienta
  de ciudadanía digital responsable.
```

