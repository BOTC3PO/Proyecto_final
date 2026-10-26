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

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Datos de navegación", "Datos de identidad", "Datos de ubicación", "Datos de contacto"]

enunciado: "La huella digital se puede dividir en dos tipos: la huella activa, donde nosotros decidimos compartir información, y la huella pasiva, que se compone principalmente de {datos[idx][0]}."

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
respuestas_validas: ["cookies", "privacidad"]

respuesta: tabla[0][1]

enunciado: "Para proteger nuestra ___ en la red, es fundamental configurar los permisos de las ___ que aceptamos en los sitios web."

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

respuesta: ["Crear una cuenta", "Navegar y generar datos", "Dejar una huella digital", "Ser rastreado por algoritmos"]

enunciado: "Ordena cronológicamente el proceso mediante el cual se construye nuestra identidad digital en la red:"

explicacion: |
  Primero creamos una cuenta (acción inicial), luego navegamos (acción constante), lo que genera una huella (resultado de la acción) que finalmente es procesada por algoritmos (consecuencia técnica).
```