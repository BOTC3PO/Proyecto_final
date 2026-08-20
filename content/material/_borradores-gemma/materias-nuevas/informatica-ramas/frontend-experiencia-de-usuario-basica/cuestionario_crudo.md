### 1 — Semántica de elementos de formulario
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["accessibility", "html5", "semantic"]
tipo: mc
enunciado:
  uno_de([
    "Al desarrollar un sistema de búsqueda interna, ¿qué elemento HTML5 es el semánticamente correcto para contener la búsqueda y el campo de entrada?",
    "En una sección de contacto, ¿cuál es la etiqueta envolvente semántica adecuada para agrupar controles relacionados con la ubicación?",
    "Para una sección de 'Preguntas Frecuentes', ¿qué elemento de estructura semántica es el más apropiado para definir el contenedor principal?"
  ])
respuesta: "form"
opciones_explicitas:
  - "div"
  - "form"
  - "section"
  - "article"
pasos:
  - "Identificar la intención funcional del bloque de UI (búsqueda, contacto, FAQ)."
  - "Evaluar la semántica HTML5: `form` para interacción de datos, `section` para temático."
  - "Seleccionar el elemento que mejor comunica el propósito a lectores de pantalla y motores de búsqueda."
explicacion: El elemento `<form>` es el contenedor semántico correcto para cualquier grupo de controles que envíen datos o realicen una acción (como una búsqueda). Aunque `div` o `section` son contenedores genéricos, `form` aporta significado accesible. Para FAQ, `dl/dt/dd` o `section` sería mejor, pero la pregunta se centra en la interacción de datos.
```

### 2 — Validación de tipos de input
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["html5-inputs", "mobile", "keyboard"]
tipo: completar
enunciado: "Para optimizar la experiencia en dispositivos móviles al solicitar un código de verificación de 6 dígitos numéricos, ¿qué valor debe tener el atributo `type` del `<input>`?"
respuesta: "number"
respuestas_validas:
  - "number"
  - "tel"
pasos:
  - "Analizar el tipo de dato esperado (solo dígitos)."
  - "Considerar el comportamiento nativo del teclado en móviles."
  - "Seleccionar el tipo que fuerza el teclado numérico sin permitir letras."
explicacion: `type="number"` o `type="tel"` son los estándares para entradas numéricas. `tel` suele ser preferido en UX móvil moderna porque permite caracteres de formato (+, -, espacios) si se usa pattern, pero `number` es estrictamente numérico. Ambas son variantes aceptadas para este contexto específico de "solo dígitos" en la mayoría de validadores básicos, aunque `tel` es más flexible para códigos internacionales.
```

### 3 — Atributo aria-live para actualizaciones dinámicas
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["aria", "accessibility", "dynamic-content"]
tipo: vf
enunciado: "Si un componente de notificación se inserta en el DOM mediante JavaScript después de que la página ha cargado, utilizar `aria-live='polite'` asegura que los lectores de pantalla lean el contenido inmediatamente sin interrumpir la actividad actual del usuario."
respuesta: verdadero
pasos:
  - "Entender la diferencia entre `assertive` y `polite`."
  - "Evaluar el impacto en la experiencia del usuario ciego."
  - "Verificar la definición de `polite` en WAI-ARIA."
explicacion: `aria-live='polite'` indica que el contenido cambiará, pero el lector de pantalla esperará a un momento oportuno (polite) para leerlo, en lugar de interrumpir inmediatamente (que sería `assertive`). Esto mejora la UX evitando interrupciones bruscas.
```

### 4 — Feedback visual en estados de carga
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["ux-feedback", "loading-states", "css"]
tipo: completar
enunciado: "Al implementar un botón de envío que realiza una petición AJAX, es crucial cambiar su estado visual para indicar que la acción está en progreso. ¿Qué atributo booleano se debe añadir al `<button>` para deshabilitar interacciones adicionales y mostrar un estado deshabilitado nativo?"
respuesta: "disabled"
respuestas_validas:
  - "disabled"
  - "aria-disabled"
pasos:
  - "Identificar el riesgo de doble envío (double-submit)."
  - "Determinar la forma nativa de bloquear un elemento interactivo."
  - "Seleccionar el atributo que cambia el estado visual y funcional."
explicacion: El atributo `disabled` es la forma estándar HTML para bloquear un botón. Impide clics, enfoque y envío de formularios. `aria-disabled` es para accesibilidad cuando no se puede usar el atributo nativo, pero `disabled` es la solución primaria y correcta para la mayoría de casos de UX.
```

### 5 — Manejo de errores de validación en formularios
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["validation", "error-handling", "user-feedback"]
tipo: mc
enunciado: "Cuando un usuario omite un campo obligatorio en un formulario HTML5 nativo, ¿cuál es la mejor práctica de UX para mostrar el mensaje de error sin redirigir a otra página?"
opciones_explicitas:
  - "Usar `alert()` del navegador para detener la ejecución."
  - "Mostrar un mensaje de error inline junto al campo y mover el foco a él."
  - "Cambiar el color de fondo de toda la página a rojo."
  - "Enviar el formulario silenciosamente y mostrar un error global."
respuesta: "Mostrar un mensaje de error inline junto al campo y mover el foco a él."
pasos:
  - "Evaluar el impacto de cada opción en la continuidad del usuario."
  - "Considerar las guías de accesibilidad para errores de formulario."
  - "Seleccionar la opción que proporciona contexto claro y corrección rápida."
explicacion: Mover el foco al campo con error y mostrar un mensaje inline es el estándar de UX. `alert()` interrumpe bruscamente, cambiar el fondo es confuso, y el error global falta contexto específico.
```

### 6 — Contraste de color y WCAG
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["wcag", "contrast", "color-theory"]
tipo: vf
enunciado: "Para cumplir con el nivel AA de las WCAG 2.1, el texto normal (menos de 18pt o 14pt bold) debe tener un ratio de contraste de al menos 4.5:1 sobre su fondo."
respuesta: verdadero
pasos:
  - "Recordar los estándares WCAG para texto normal."
  - "Diferenciar entre texto grande (3:1) y texto normal (4.5:1)."
  - "Verificar la precisión de la afirmación técnica."
explicacion: Las WCAG 2.1 establecen que el texto normal requiere un contraste mínimo de 4.5:1. El texto grande (18pt o 14pt bold) requiere solo 3:1. La afirmación es correcta.
```

### 7 — Uso de `placeholder` vs `label`
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["forms", "usability", "common-mistakes"]
tipo: mc
enunciado: "¿Cuál es el principal problema de UX de depender exclusivamente del atributo `placeholder` para identificar un campo de formulario sin un `label` visible?"
opciones_explicitas:
  - "El placeholder se borra automáticamente al hacer clic en algunos navegadores antiguos, dejando al usuario sin contexto de qué dato se espera."
  - "El placeholder no se puede estilizar con CSS."
  - "Los lectores de pantalla ignoran los formularios si hay placeholders."
  - "El placeholder ocupa demasiado espacio en pantallas móviles."
respuesta: "El placeholder se borra automáticamente al hacer clic en algunos navegadores antiguos, dejando al usuario sin contexto de qué dato se espera."
pasos:
  - "Analizar el comportamiento del placeholder al interactuar."
  - "Evaluar la accesibilidad y la retención de contexto."
  - "Identificar la desventaja crítica de no usar labels."
explicacion: El placeholder desaparece al escribir, lo que puede causar confusión sobre qué campo se está editando. Los labels deben ser permanentes. Los lectores de pantalla leen el placeholder como parte del campo, pero no como un label robusto.
```

### 8 — Navegación por teclado en menús desplegables
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["keyboard-navigation", "accessibility", "menu"]
tipo: completar
enunciado: "Para hacer un menú desplegable accesible por teclado, al abrirlo, el foco debe moverse automáticamente al primer elemento del menú. ¿Qué evento de JavaScript se debe escuchar en el botón que activa el menú para realizar esta acción?"
respuesta: "focus"
respuestas_validas:
  - "focus"
  - "click"
pasos:
  - "Identificar el momento en que el menú se vuelve interactivo."
  - "Determinar el evento que señala la intención de usuario de abrir el menú."
  - "Seleccionar el evento que permite manipular el foco."
explicacion: Aunque `click` es común, `focus` es el evento clave para la navegación por teclado. Al recibir `focus`, el script debe abrir el menú y mover el foco. En muchos patrones, se maneja en `keydown` (Enter/Espacio) dentro del botón. Aquí `focus` es la respuesta más directa para la gestión del estado de apertura basado en interacción.
```

### 9 — Scroll suave para anclas internas
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["scroll", "smooth-scroll", "css-property"]
tipo: completar
enunciado: "Para habilitar el desplazamiento suave (smooth scroll) al hacer clic en enlaces internos que apuntan a secciones de la misma página, ¿qué propiedad CSS se debe aplicar al elemento `html`?"
respuesta: "scroll-behavior"
respuestas_validas:
  - "scroll-behavior"
  - "scrollBehavior"
pasos:
  - "Recordar la propiedad CSS moderna para controlar el comportamiento del scroll."
  - "Identificar el valor `smooth`."
  - "Asociar la propiedad al elemento raíz `html`."
explicacion: `scroll-behavior: smooth;` aplicado a `html` habilita el desplazamiento animado para todas las anclas internas, mejorando la UX en páginas largas.
```

### 10 — Accesibilidad de imágenes decorativas
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["accessibility", "img", "screen-reader"]
tipo: vf
enunciado: "Si una imagen `<img>` es puramente decorativa y no aporta información contextual al contenido, se debe dejar el atributo `alt` vacío (`alt=\"\"`) para que los lectores de pantalla la omitan."
respuesta: verdadero
pasos:
  - "Entender el propósito del atributo `alt`."
  - "Diferenciar entre contenido informativo y decorativo."
  - "Verificar la especificación de accesibilidad para imágenes vacías."
explicacion: Un `alt` vacío (`alt=""`) indica a los lectores de pantalla que la imagen es decorativa y no debe ser leída, evitando ruido innecesario para el usuario ciego.
```

### 11 — Feedback táctil en botones móviles
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["touch-ui", "feedback", "css-hover"]
tipo: mc
enunciado: "En interfaces móviles, el estado `:hover` no existe. ¿Cuál es la mejor práctica para indicar visualmente que un botón ha sido presionado?"
opciones_explicitas:
  - "Usar `:active` para reducir el tamaño o cambiar el color momentáneamente."
  - "Usar `:focus` para mantener el estilo indefinidamente."
  - "No dar ningún feedback visual, ya que el tacto es suficiente."
  - "Usar `:visited` para indicar que se ha interactuado."
respuesta: "Usar `:active` para reducir el tamaño o cambiar el color momentáneamente."
pasos:
  - "Considerar la falta de hover en pantallas táctiles."
  - "Evaluar la necesidad de feedback inmediato al tocar."
  - "Seleccionar el pseudo-clase CSS adecuada para la interacción activa."
explicacion: `:active` se activa durante el toque y se desactiva al soltar, proporcionando el feedback visual crucial de que el botón ha respondido.
```

### 12 — Agrupación de campos con `fieldset`
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["forms", "fieldset", "legend", "structure"]
tipo: completar
enunciado: "Para agrupar semánticamente un conjunto de opciones de radio relacionadas (ej: método de pago), se debe usar `<fieldset>` y un elemento hijo obligatorio para describir el grupo. ¿Qué elemento es ese?"
respuesta: "legend"
respuestas_validas:
  - "legend"
  - "Label"
pasos:
  - "Identificar la estructura requerida por HTML para grupos de formularios."
  - "Reconocer el elemento que proporciona el título del grupo."
  - "Seleccionar el elemento que debe ser hijo directo de `fieldset`."
explicacion: `<legend>` es el elemento obligatorio dentro de `<fieldset>` que proporciona una etiqueta para el grupo de controles, mejorando la accesibilidad y la claridad.
```

### 13 — Prevención de bloqueo de renderizado
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["performance", "rendering", "script-tag"]
tipo: vf
enunciado: "Colocar un script `<script>` grande en el `<head>` de la página, antes del `</head>`, mejora la experiencia de usuario al asegurar que todas las variables estén definidas antes de que el contenido se muestre."
respuesta: falso
pasos:
  - "Analizar cómo los navegadores procesan scripts en el head."
  - "Evaluar el impacto en el tiempo de renderizado de la primera pintura."
  - "Determinar si la afirmación es beneficiosa o perjudicial para la UX."
explicacion: Los scripts en el `<head>` bloquean el renderizado hasta que se descargan y ejecutan, lo que retrasa la visualización del contenido y empeora la UX. Deben ir al final del body o usar `defer`/`async`.
```

### 14 — Uso de `aria-describedby` para contexto adicional
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["aria", "accessibility", "helper-text"]
tipo: completar
enunciado: "Si un campo de entrada tiene un texto de ayuda (helper text) que aparece debajo, para que los lectores de pantalla lean ese texto automáticamente al enfocarse el campo, ¿qué atributo se usa en el `<input>` apuntando al ID del texto de ayuda?"
respuesta: "aria-describedby"
respuestas_validas:
  - "aria-describedby"
  - "ariaDescribedby"
pasos:
  - "Identificar la necesidad de vincular un campo con su texto de ayuda."
  - "Recordar el atributo ARIA estándar para descripciones adicionales."
  - "Seleccionar el atributo que referencia al elemento de texto."
explicacion: `aria-describedby` vincula un elemento con otro que proporciona información descriptiva adicional, que es leída por los lectores de pantalla tras la etiqueta principal.
```

### 15 — Diseño de botones de acción principal
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["cta", "visual-hierarchy", "ux-design"]
tipo: mc
enunciado: "En una página con múltiples botones (ej: 'Cancelar', 'Guardar', 'Eliminar'), ¿cuál es la práctica de diseño visual correcta para el botón de acción principal?"
opciones_explicitas:
  - "Darle el mayor peso visual (color sólido, contraste alto) para guiar la atención."
  - "Hacerlo del mismo tamaño y color que los secundarios para mantener la uniformidad."
  - "Colocarlo en una esquina diferente a los demás sin jerarquía visual."
  - "Usar un estilo de botón transparente para todos por igual."
respuesta: "Darle el mayor peso visual (color sólido, contraste alto) para guiar la atención."
pasos:
  - "Analizar la jerarquía visual en interfaces de usuario."
  - "Evaluar cómo el usuario identifica la acción más importante."
  - "Seleccionar la técnica que reduce la carga cognitiva."
explicacion: La acción principal debe destacar visualmente (color primario, relleno sólido) para indicar al usuario cuál es el camino recomendado, reduciendo la ambigüedad.
```

### 16 — Manejo de errores de red en APIs
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["api-errors", "user-feedback", "network"]
tipo: completar
enunciado: "Cuando una petición fetch falla debido a un error de red (ej: sin conexión), el bloque `catch` debe mostrar un mensaje al usuario. ¿Qué método de DOM se recomienda para insertar este mensaje de error en el flujo del documento de manera accesible?"
respuesta: "insertAdjacentHTML"
respuestas_validas:
  - "insertAdjacentHTML"
  - "appendChild"
  - "innerHTML"
pasos:
  - "Identificar la necesidad de actualizar el DOM con un mensaje de error."
  - "Evaluar métodos de inserción de contenido."
  - "Seleccionar el método que permite insertar HTML seguro en una posición específica."
explicacion: `insertAdjacentHTML` es eficiente y preciso para insertar contenido en una posición relativa al elemento (ej: 'afterend'). `innerHTML` puede ser peligroso por XSS si no se sanitiza, y `appendChild` requiere crear nodos. `insertAdjacentHTML` es común para mensajes rápidos.
```

### 17 — Accesibilidad de tablas de datos complejas
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["tables", "accessibility", "scope"]
tipo: vf
enunciado: "En una tabla HTML compleja, usar `<th>` con el atributo `scope='col'` para las cabeceras de columna ayuda a los lectores de pantalla a asociar correctamente los datos con sus cabeceras."
respuesta: verdadero
pasos:
  - "Recordar la estructura semántica de las tablas."
  - "Evaluar el propósito del atributo `scope`."
  - "Verificar la mejora en la accesibilidad para usuarios de lectores de pantalla."
explicacion: El atributo `scope` (col o row) proporciona contexto explícito a los lectores de pantalla sobre a qué celdas se aplica la cabecera, mejorando enormemente la comprensión de tablas complejas.
```

### 18 — Prevención de zoom en inputs en iOS
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["mobile", "ios", "font-size", "zoom"]
tipo: completar
enunciado: "En iOS Safari, si el tamaño de fuente de un `<input>` es menor a 16px, el navegador hace zoom automático al enfocar el campo, lo que puede romper el diseño. ¿Qué valor mínimo de `font-size` se recomienda para prevenir este zoom?"
respuesta: "16px"
respuestas_validas:
  - "16px"
  - "16pt"
  - "1rem"
pasos:
  - "Identificar el comportamiento nativo de iOS Safari con inputs pequeños."
  - "Recordar el umbral que desactiva el zoom automático."
  - "Seleccionar el tamaño mínimo de fuente."
explicacion: iOS Safari hace zoom automático en inputs con `font-size` < 16px para mejorar la legibilidad. Establecer `font-size: 16px` o mayor evita este comportamiento no deseado.
```

### 19 — Uso de `aria-hidden` para contenido duplicado
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["aria", "accessibility", "duplicate-content"]
tipo: mc
enunciado: "Si un icono de una red social se repite visualmente pero también está presente en el código HTML como texto alternativo para lectores de pantalla, ¿cómo se debe marcar el icono decorativo para evitar redundancia auditiva?"
opciones_explicitas:
  - "Añadir `aria-hidden='true'` al elemento del icono."
  - "Eliminar el elemento del DOM por completo."
  - "Poner `display: none` en CSS."
  - "Dejar el `alt` vacío en la imagen."
respuesta: "Añadir `aria-hidden='true'` al elemento del icono."
pasos:
  - "Analizar la redundancia de información para lectores de pantalla."
  - "Evaluar la diferencia entre ocultar visualmente y ocultar semánticamente."
  - "Seleccionar la técnica que oculta el elemento del árbol de accesibilidad."
explicacion: `aria-hidden='true'` oculta el elemento del árbol de accesibilidad, evitando que sea leído, mientras mantiene la representación visual. `display: none` también lo oculta, pero `aria-hidden` es más específico para contenido visible pero no accesible.
```

### 20 — Feedback de validación en tiempo real
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["validation", "real-time", "user-experience"]
tipo: vf
enunciado: "Mostrar errores de validación en tiempo real (mientras el usuario escribe) es siempre la mejor práctica de UX, independientemente del tipo de campo."
respuesta: falso
pasos:
  - "Evaluar el impacto de la validación en tiempo real en la ansiedad del usuario."
  - "Considerar casos donde la validación inmediata puede ser frustrante (ej: contraseñas)."
  - "Determinar si la afirmación absoluta es correcta."
explicacion: La validación en tiempo real puede ser frustrante si se muestra antes de que el usuario termine de escribir. Es mejor validar al perder el foco (`blur`) o al enviar, especialmente para campos complejos como contraseñas.
```

### 21 — Estructura de encabezados para navegación
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["headings", "structure", "accessibility"]
tipo: completar
enunciado: "Para mantener una jerarquía de encabezados lógica y accesible, si el título de la página es `<h1>`, el siguiente nivel de subtítulo principal dentro del contenido debe ser `<h2>`. ¿Qué elemento se debe evitar usar para saltar niveles (ej: de `<h1>` a `<h4>`)?"
respuesta: "saltar"
respuestas_validas:
  - "saltar"
  - "skip"
  - "omit"
pasos:
  - "Identificar la importancia de la jerarquía secuencial en encabezados."
  - "Reconocer que omitir niveles confunde a los lectores de pantalla."
  - "Seleccionar el verbo que describe la acción incorrecta."
explicacion: Saltar niveles de encabezados (ej: `<h1>` seguido de `<h4>`) rompe la jerarquía semántica y hace que la navegación por encabezados sea confusa para usuarios de lectores de pantalla.
```

### 22 — Uso de `pattern` para validación nativa
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["validation", "html5-pattern", "regex"]
tipo: completar
enunciado: "Para validar que un campo de código postal de EE.UU. tenga el formato de 5 dígitos (ej: 12345) sin JavaScript, se usa el atributo `pattern` con una expresión regular. ¿Qué carácter se usa para indicar el inicio y el fin de la coincidencia en la regex?"
respuesta: "^[0-9]{5}$"
respuestas_validas:
  - "^[0-9]{5}$"
  - "^\\d{5}$"
  - "^[0-9][0-9][0-9][0-9][0-9]$"
pasos:
  - "Identificar la necesidad de restringir la entrada a exactamente 5 dígitos."
  - "Recordar la sintaxis de regex para anclajes y cuantificadores."
  - "Seleccionar la expresión que coincide con el inicio, 5 dígitos y fin."
explicacion: `^[0-9]{5}$` asegura que la cadena comience (`^`), tenga exactamente 5 dígitos (`[0-9]{5}`) y termine (`$`) inmediatamente, sin caracteres adicionales.
```

### 23 — Accesibilidad de enlaces con iconos
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["links", "icons", "accessibility", "aria-label"]
tipo: mc
enunciado: "Si un enlace está formado únicamente por un icono (ej: un icono de 'imprimir'), ¿cómo se debe proporcionar texto alternativo para los lectores de pantalla?"
opciones_explicitas:
  - "Usar `aria-label='Imprimir'` en el enlace `<a>`."
  - "Poner el texto 'Imprimir' dentro del icono SVG."
  - "Dejar el `title` del enlace con el texto."
  - "No hacer nada, los iconos son universales."
respuesta: "Usar `aria-label='Imprimir'` en el enlace `<a>`."
pasos:
  - "Analizar la falta de texto visible en el enlace."
  - "Evaluar la necesidad de texto descriptivo para accesibilidad."
  - "Seleccionar la forma correcta de añadir texto alternativo a un enlace."
explicacion: `aria-label` proporciona un nombre accesible al enlace. `title` no es suficiente para lectores de pantalla. El texto debe ser descriptivo de la acción, no del icono.
```

### 24 — Diseño de formularios para campos de fecha
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["inputs", "date", "mobile", "calendar"]
tipo: completar
enunciado: "Para permitir que los usuarios seleccionen una fecha en dispositivos móviles con un selector nativo de calendario, ¿qué valor debe tener el atributo `type` del `<input>`?"
respuesta: "date"
respuestas_validas:
  - "date"
  - "datetime-local"
pasos:
  - "Identificar la necesidad de un selector de fecha nativo."
  - "Recordar los tipos de input HTML5 para fechas."
  - "Seleccionar el tipo específico para fechas sin hora."
explicacion: `type="date"` invoca el selector de fecha nativo del sistema operativo en móviles y escritorio, mejorando la UX y la precisión de la entrada.
```

### 25 — Feedback de éxito en formularios
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-experiencia-de-usuario-basica"
  nivel: "avanzado"
  tags: ["success-feedback", "ux", "confirmation"]
tipo: vf
enunciado: "Después de enviar un formulario con éxito, es una buena práctica de UX mostrar un mensaje de confirmación claro y, opcionalmente, limpiar el formulario o redirigir a una página de agradecimiento."
respuesta: verdadero
pasos:
  - "Evaluar la necesidad de confirmar la acción al usuario."
  - "Considerar las opciones de post-envío (mensaje, limpieza, redirección)."
  - "Verificar la validez de la afirmación como buena práctica."
explicacion: Confirmar el éxito es crucial para la tranquilidad del usuario. Limpiar el formulario o redirigir evita confusiones sobre si el envío fue registrado.
```