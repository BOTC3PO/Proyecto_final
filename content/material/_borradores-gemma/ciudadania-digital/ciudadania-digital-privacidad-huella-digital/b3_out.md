### 1 — ¿Qué es la huella digital?
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

### 2 — ¿Es posible borrar totalmente nuestra huella digital?
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

### 3 — Elementos que componen la huella digital
```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "intermedio"
  tags: ["privacidad", "huella_digital"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["comentarios en redes sociales", "historial de búsqueda", "ubicación GPS en fotos"],
    ["compras realizadas en tiendas online", "likes en publicaciones", "registros de navegación web"]
  ]

tipo: ordenar
opciones_explicitas: ["comentarios en redes sociales", "historial de búsqueda", "ubicación GPS en fotos", "compras realizadas en tiendas online", "likes en publicaciones", "registros de navegación web"]

respuesta: ["comentarios en redes sociales", "historial de búsqueda", "ubicación GPS en fotos", "compras realizadas en tiendas online", "likes en publicaciones", "registros de navegación web"]

enunciado: "Ordena estos elementos de mayor a menor impacto en la creación de tu perfil de datos personales (según la importancia de la privacidad):"

explicacion: |
  Todos los elementos listados contribuyen a tu huella digital. La huella digital se alimenta de la suma de nuestras acciones conscientes (comentarios, compras) e inconscientes (historial, ubicación).
```

### 4 — El mito de la navegación privada
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

### 5 — Completar la definición de privacidad
```
metadata:
  materia: "ciudadania-digital"
  tema: "ciudadania_digital_privacidad_huella_digital"
  nivel: "avanzado"
  tags: ["privacidad", "datos_personales"]

tipo: completar
respuestas_validas: ["privacidad", "protección"]

respuesta: "privacidad"

enunciado: "La ___ digital es el derecho de los usuarios a decidir qué información personal se comparte, con quién y con qué fin en el entorno online."

explicacion: |
  La privacidad digital implica tener control sobre nuestra información personal y entender que cada acción en la red deja un rastro que puede ser utilizado para crear perfiles comerciales o de vigilancia.
```