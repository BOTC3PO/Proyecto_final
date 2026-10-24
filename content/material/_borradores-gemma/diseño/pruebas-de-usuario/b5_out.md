### 1 — Observación de flujo de compra
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["usabilidad", "observacion"]

variables:
  escenario: uno_de([
    ["El usuario intenta comprar un libro pero el botón 'Pagar' está oculto tras el teclado en móviles.", "error_boton_oculto"],
    ["El usuario busca el carrito de compras pero el icono es una estrella en lugar de un carrito.", "error_iconografia"],
    ["El usuario intenta aplicar un cupón pero el campo de texto no permite escribir números.", "error_input_restriccion"]
  ])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["error_boton_oculto", "error_iconografia", "error_input_restriccion"]

enunciado: "Durante una prueba de usabilidad, se observa que {escenario[idx][0]}. ¿Qué tipo de problema de usabilidad se ha detectado?"

explicacion: |
  La observación directa permite identificar fallos de diseño que el usuario experimenta en tiempo real, como problemas de visibilidad, de lenguaje visual o de restricciones de entrada.
```

### 2 — Veracidad de la observación
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["metodologia", "verdad"]

respuesta: verdadero
tipo: vf

enunciado: "En una prueba de usuario de observación, el investigador debe intervenir y corregir al usuario inmediatamente cuando este comete un error para no frustrarlo."

explicacion: |
  Falso. El objetivo de la observación es ver cómo el usuario interactúa con el diseño de forma natural. Intervenir altera el comportamiento natural y el resultado de la prueba.
```

### 3 — Identificación de problemas
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["analisis", "completar"]

variables:
  caso: uno_de([
    ["El usuario no encuentra el botón de 'Cerrar sesión' en el menú principal.", "navegacion"],
    ["El usuario no entiende qué significa el icono de un engranaje en la barra lateral.", "significado"],
    ["El usuario hace clic en un elemento que no es un botón porque parece uno.", "affordance"]
  ])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["navegacion", "significado", "affordance"]

enunciado: "Al observar que {caso[idx][0]}, el problema detectado se clasifica como: ___."

explicacion: |
  Cada error observado permite categorizar el problema (navegación, semántica/significado o affordance) para priorizar las mejoras en el diseño.
```

### 4 — Pasos de una prueba de usuario
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "avanzado"
  tags: ["metodologia", "proceso"]

respuesta: ["Definir objetivos", "Reclutar participantes", "Ejecutar la sesión", "Analizar resultados"]
tipo: ordenar

opciones_explicitas: ["Definir objetivos", "Reclutar participantes", "Ejecutar la sesión", "Analizar resultados", "Diseñar prototipo"]

enunciado: "Ordena cronológicamente las etapas de un proceso de pruebas de usuario:"

explicacion: |
  Primero se define qué se quiere medir, luego se busca al usuario ideal, se realiza la prueba y finalmente se extraen conclusiones de lo observado.
```

### 5 — El rol del observador
```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["etica", "rol"]

variables:
  rol_data: uno_de([
  ["El observador debe ser un facilitador neutral que no sesgue las respuestas.", "neutral"],
  ["El observador debe guiar al usuario paso a paso para asegurar el éxito.", "guia"]
])

respuesta: rol_data[idx][1]
tipo: mc
opciones_explicitas: ["neutral", "guia"]

enunciado: "En una prueba de usuario de observación, el rol principal del investigador debe ser: ___."

explicacion: |
  El investigador debe mantener la neutralidad para evitar el sesgo de confirmación y permitir que el usuario actúe de forma espontánea.
```