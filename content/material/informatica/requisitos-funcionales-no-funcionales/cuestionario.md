# Informatica — Requisitos funcionales no funcionales (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Requisitos Funcionales

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["ingenieria_software", "requisitos"]

tipo: mc
opciones_explicitas: ["Describen las funciones que el sistema debe ejecutar", "Describen las propiedades y restricciones del sistema", "Describen la interfaz visual del usuario", "Describen el lenguaje de programación utilizado"]

enunciado: "Los requisitos funcionales se definen como aquellos que..."

respuesta: "Describen las funciones que el sistema debe ejecutar"

explicacion: |
  Los requisitos funcionales especifican el comportamiento del sistema (qué hace), mientras que los no funcionales especifican atributos de calidad (cómo lo hace).
```

### 2 — Atributos de Calidad

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["requisitos_no_funcionales"]

tipo: vf

enunciado: "El tiempo de respuesta de una consulta en una base de datos es un ejemplo de un requisito no funcional."

respuesta: verdadero

explicacion: |
  Correcto. El rendimiento (tiempo de respuesta) es una característica de calidad, por lo tanto, es un requisito no funcional.
```

### 3 — Clasificación de Requisitos

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "intermedio"
  tags: ["clasificacion"]

variables:
  escenarios: [["Permitir el registro de nuevos usuarios", "La contraseña debe estar encriptada"], ["Generar un reporte de ventas", "El sistema debe estar disponible el 99% del tiempo"]]
  idx: uno_de([0, 1])
  escenario_actual: escenarios[idx]

enunciado: "Dado el siguiente par de requisitos: {escenario_actual[0]} y {escenario_actual[1]}, el segundo requisito es de tipo:"

tipo: mc
opciones_explicitas: ["Funcional", "No Funcional"]

respuesta: "No Funcional"

explicacion: |
  El primer elemento describe una acción (funcional) y el segundo describe una restricción de calidad o disponibilidad (no funcional).
```

### 4 — Completar Conceptos

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["terminologia"]

tipo: completar
respuestas_validas:
  - "usabilidad"
  - "seguridad"
  - "rendimiento"

enunciado: "Si un cliente solicita que el sistema sea fácil de aprender para nuevos usuarios, está exigiendo un requisito de ___."

respuesta: "usabilidad"

explicacion: |
  La facilidad de uso y el aprendizaje son pilares de la usabilidad, la cual es un requisito no funcional.
```

### 5 — Ordenar Ciclo de Vida (Contexto Requisitos)

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "intermedio"
  tags: ["ingenieria_requisitos"]

tipo: ordenar
opciones_explicitas: ["Elicitación", "Análisis", "Especificación", "Validación"]

enunciado: "Ordene las etapas del proceso de ingeniería de requisitos desde el inicio hasta el final:"

respuesta_orden: ["Elicitación", "Análisis", "Especificación", "Validación"]

explicacion: |
  El proceso comienza con la obtención de información (Elicitación), luego se procesa (Análisis), se documenta (Especificación) y finalmente se revisa con el cliente (Validación).
```

### 6 — Clasificación de requisitos

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["requisitos", "funcionales", "no_funcionales"]

tipo: mc
opciones_explicitas: ["Requisito Funcional", "Requisito No Funcional"]

enunciado: "Un sistema de gestión de biblioteca debe permitir al usuario buscar libros por título o autor. Este requerimiento se clasifica como un ___."

respuesta: "Requisito Funcional"

explicacion: |
  Los requisitos funcionales definen las acciones que el sistema debe realizar (el "qué"). En este caso, la capacidad de búsqueda es una función directa del sistema.
```

### 7 — El caso del tiempo de respuesta

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["rendimiento", "no_funcionales"]

variables:
  escenario: uno_de([["El sistema debe procesar un pago en menos de 2 segundos.", "Requisito No Funcional"], ["La base de datos debe estar disponible el 99.9% del tiempo.", "Requisito No Funcional"], ["Las contraseñas deben estar encriptadas con AES-256.", "Requisito No Funcional"]])

tipo: mc
opciones_explicitas: ["Requisito Funcional", "Requisito No Funcional"]

enunciado: "Analizando el siguiente caso: '{escenario[0]}'. ¿A qué categoría pertenece?"

respuesta: "Requisito No Funcional"

explicacion: |
  El enunciado describe una restricción sobre la calidad o el rendimiento del servicio (cuánto tarda), lo cual es un requisito no funcional.
```

### 8 — Completar la definición

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["definiciones"]

tipo: completar
respuestas_validas:
  - "usabilidad"
  - "seguridad"
  - "rendimiento"

enunciado: "Si un cliente solicita que la interfaz sea intuitiva y fácil de aprender para personas mayores, está definiendo un requisito de ___."

respuesta: "usabilidad"

explicacion: |
  La facilidad de uso y la experiencia de usuario (UX) son atributos de calidad, por lo tanto, son requisitos no funcionales de usabilidad.
```

### 9 — Verdad o Falso: El alcance

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf

enunciado: "Un requisito funcional describe 'cómo' debe comportarse el sistema (por ejemplo, la velocidad de respuesta), mientras que un requisito no funcional describe 'qué' debe hacer el sistema."

respuesta: falso

explicacion: |
  Es exactamente al revés: los funcionales describen el "qué" (la acción) y los no funcionales describen el "cómo" (las propiedades o restricciones de calidad).
```

### 10 — Ordenar el proceso de ingeniería

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["ciclo_vida", "ingenieria"]

tipo: ordenar
opciones_explicitas: ["Elicitación (recolección)", "Análisis de requisitos", "Especificación", "Validación"]

respuesta_orden: ["Elicitación (recolección)", "Análisis de requisitos", "Especificación", "Validación"]

enunciado: "Ordena las etapas lógicas del proceso de ingeniería de requisitos, desde que se habla con el cliente hasta que se confirma que lo documentado es correcto."

explicacion: |
  El proceso estándar comienza con la recolección de información (Elicitación), luego se estudia su viabilidad (Análisis), se redacta formalmente (Especificación) y finalmente se revisa con el cliente (Validación).
```

### 11 — ¿Qué define al sistema?

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["ingenieria_software", "requisitos"]

respuesta: "funcionales"
tipo: completar
respuestas_validas:
  - "funcionales"

enunciado: "Los requisitos que describen las tareas específicas, servicios o funciones que el sistema debe ejecutar para satisfacer las necesidades del usuario se denominan requisitos ___________."

explicacion: |
  Los requisitos funcionales definen el "qué" hace el sistema (ej: "el sistema debe permitir registrar usuarios"), mientras que los no funcionales definen el "cómo" lo hace (rendimiento, seguridad, etc.).
```

### 12 — Clasificación de atributos

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["requisitos", "clasificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El sistema debe procesar un pago en menos de 2 segundos.", "no_funcional"], ["El sistema debe permitir la recuperación de contraseña por email.", "funcional"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["funcional", "no_funcional"]

enunciado: "Analiza el siguiente requerimiento: '{escenarios[escenario_idx][0]}'. ¿A qué categoría pertenece?"

explicacion: |
  Si el requerimiento describe una acción o proceso del sistema, es funcional. Si describe una restricción de calidad (tiempo, seguridad, disponibilidad), es no funcional.
```

### 13 — Verdad o Falso: El rendimiento

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "basico"
  tags: ["requisitos", "rendimiento"]

respuesta: falso
tipo: vf

enunciado: "Un requisito que establece que 'la interfaz de usuario debe ser intuitiva y fácil de usar para personas mayores' es un requisito funcional."

explicacion: |
  Falso. La usabilidad es un atributo de calidad, por lo tanto, es un requisito NO funcional.
```

### 14 — El error de la ambigüedad

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "intermedio"
  tags: ["calidad_requisitos", "no_funcionales"]

respuesta: "no_funcional"
tipo: mc
opciones_explicitas: ["funcional", "no_funcional"]

enunciado: "Un cliente solicita: 'El sistema debe ser muy rápido'. Este enunciado es un mal ejemplo de un requisito ___________ porque es ambiguo y no es medible."

explicacion: |
  Los requisitos no funcionales (como el rendimiento) deben ser cuantificables (ej: 'el tiempo de respuesta debe ser < 500ms') para poder ser validados.
```

### 15 — Jerarquía de definición

```
metadata:
  materia: "informatica"
  tema: "requisitos_funcionales_vs_no_funcionales"
  nivel: "intermedio"
  tags: ["proceso_ingenieria"]

respuesta_orden: ["identificar necesidades", "definir requisitos funcionales", "establecer restricciones no funcionales", "validar sistema"]
tipo: ordenar
opciones_explicitas: ["identificar necesidades", "definir requisitos funcionales", "establecer restricciones no funcionales", "validar sistema"]

enunciado: "Ordena lógicamente las etapas del ciclo de vida de ingeniería de requisitos para un nuevo software:"

explicacion: |
  Primero se entienden las necesidades del negocio, luego se definen las funciones (funcionales), se aplican las restricciones de calidad (no funcionales) y finalmente se verifica que todo cumpla lo solicitado.
```

### 16 — Requisitos Funcionales vs No Funcionales

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["ingenieria_software", "requisitos"]

tipo: mc
opciones_explicitas: ["El sistema debe procesar pagos con tarjeta", "El sistema debe responder en menos de 2 segundos", "El sistema debe tener una interfaz intuitiva", "El sistema debe estar disponible el 99.9% del tiempo"]
respuesta: "El sistema debe procesar pagos con tarjeta"

enunciado: "Un requisito funcional describe una acción específica que el sistema debe realizar. ¿Cuál de los siguientes es un ejemplo de requisito funcional?"

explicacion: |
  Los requisitos funcionales definen las funciones y servicios que el sistema debe ejecutar (el "qué"). Los otros ejemplos corresponden a requisitos no funcionales (rendimiento, usabilidad y disponibilidad).
```

### 17 — La naturaleza de los requisitos no funcionales

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["ingenieria_software", "conceptos"]

tipo: vf
respuesta: falso

enunciado: "Los requisitos no funcionales se centran en el 'cómo' debe comportarse el sistema (como la seguridad o la velocidad), mientras que los funcionales se centran en el 'qué' hace el sistema."

explicacion: |
  La afirmación es falsa porque la definición es exactamente al revés: los funcionales definen el "qué" y los no funcionales el "cómo".
```

### 18 — Clasificación de atributos de calidad

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["atributos_calidad", "no_funcionales"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El sistema debe cifrar los datos con AES-256", "Seguridad"], ["El sistema debe soportar 1000 usuarios concurrentes", "Rendimiento"]]

tipo: completar
respuestas_validas:
  - "Seguridad"
  - "Rendimiento"
respuesta: escenarios[escenario_idx][1]

enunciado: "Analiza el siguiente requisito: '{escenarios[escenario_idx][0]}'. Este es un ejemplo de un requisito de tipo: ___"

explicacion: |
  El requisito mencionado se refiere a la protección de la información (Seguridad) o a la capacidad de carga (Rendimiento), según el caso sorteado.
```

### 19 — Orden de derivación de requisitos

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["ciclo_vida", "ingenieria_requisitos"]

tipo: ordenar
opciones_explicitas: ["Identificación de necesidades del usuario", "Definición de requisitos funcionales", "Definición de requisitos no funcionales", "Validación del sistema"]

enunciado: "Ordena las etapas lógicas en el proceso de ingeniería de requisitos para un nuevo software:"

explicacion: |
  Primero se entienden las necesidades, luego se definen las funciones (funcionales), luego las restricciones de calidad (no funcionales) y finalmente se validan.
respuesta_orden: ["Identificación de necesidades del usuario", "Definición de requisitos funcionales", "Definición de requisitos no funcionales", "Validación del sistema"]
```

### 20 — El impacto de los requisitos no funcionales

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "avanzado"
  tags: ["arquitectura", "no_funcionales"]

tipo: completar
tolerancia_abs: 0
respuesta: 1

enunciado: "Si un sistema cumple con todos sus requisitos funcionales pero tarda 30 segundos en cargar una pantalla, ¿ha fallado en sus requisitos (0) funcionales o en sus requisitos (1) no funcionales?"

explicacion: |
  El tiempo de respuesta es un atributo de calidad (rendimiento), por lo tanto, es un requisito no funcional.
```

### 21 — Identificación de requisitos

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["ingenieria_software", "requisitos"]

variables:
  escenario: uno_de([["El sistema debe permitir al usuario resetear su contraseña mediante un email.", "funcional"], ["El sistema debe responder a cualquier consulta en menos de 2 segundos.", "no_funcional"], ["El sistema debe cifrar todos los datos sensibles con AES-256.", "no_funcional"], ["El sistema debe generar un reporte PDF de las ventas mensuales.", "funcional"]])

enunciado: "En el siguiente escenario: '{escenario[0]}', el tipo de requisito es: ___"

respuestas_validas:
  - "funcional"
  - "no_funcional"
respuesta: escenario[1]
tipo: completar

explicacion: |
  Los requisitos funcionales definen qué hace el sistema (acciones, servicios), mientras que los no funcionales definen cómo lo hace (atributos de calidad como velocidad, seguridad o disponibilidad).
```

### 22 — Clasificación de atributos

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["calidad_software", "rendimiento"]

variables:
  caso: uno_de([["Capacidad de carga de 1000 usuarios concurrentes", "Rendimiento"], ["Disponibilidad del sistema del 99.9%", "Disponibilidad"], ["Facilidad de navegación para usuarios con discapacidad", "Usabilidad"], ["Protección contra ataques de inyección SQL", "Seguridad"]])

enunciado: "El enunciado '{caso[0]}' pertenece a la categoría de requisitos no funcionales de tipo: ___"

respuestas_validas:
  - "Rendimiento"
  - "Disponibilidad"
  - "Usabilidad"
  - "Seguridad"
respuesta: caso[1]
tipo: completar

explicacion: |
  Los requisitos no funcionales se agrupan en categorías como rendimiento, seguridad, usabilidad, disponibilidad y mantenibilidad.
```

### 23 — ¿Es un requisito funcional?

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["logica", "requisitos"]

variables:
  textos: ["El sistema debe permitir eliminar una cuenta de usuario.", "El sistema debe ser compatible con navegadores Chrome y Firefox.", "El sistema debe emitir una alerta si el stock es bajo.", "El sistema debe tener una interfaz de colores suaves."]
  valores: [verdadero, falso, verdadero, falso]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Analiza el siguiente requerimiento: '{textos[idx]}'. ¿Es un requisito funcional?"

respuesta: valores[idx]
tipo: vf
explicacion: |
  Si el requerimiento describe una funcionalidad o acción que el usuario puede realizar, es funcional. Si describe una restricción o una característica de calidad, es no funcional.
```

### 24 — Selección de categoría

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["requisitos", "clasificacion"]

variables:
  ejemplo: uno_de([["El sistema debe permitir buscar productos por nombre.", "Funcional"], ["El sistema debe estar disponible las 24 horas del día.", "No Funcional"], ["El sistema debe permitir subir archivos de hasta 5MB.", "Funcional"], ["El sistema debe ser fácil de aprender para nuevos empleados.", "No Funcional"]])

enunciado: "Dado el requerimiento: '{ejemplo[0]}', ¿cuál es su clasificación correcta?"

opciones_explicitas: ["Funcional", "No Funcional"]
respuesta: ejemplo[1]
tipo: mc

explicacion: |
  La distinción clave es si el requisito describe un comportamiento del sistema (Funcional) o una restricción sobre cómo opera el sistema (No Funcional).
```

### 25 — Orden lógico de definición

```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "avanzado"
  tags: ["proceso", "ingenieria_software"]

enunciado: "Ordena los pasos lógicos en el proceso de ingeniería de requisitos, desde la detección de la necesidad hasta la validación final:"

opciones_explicitas: ["Identificar necesidades del cliente", "Definir requisitos funcionales", "Definir requisitos no funcionales", "Validar especificaciones"]
respuesta_orden: ["Identificar necesidades del cliente", "Definir requisitos funcionales", "Definir requisitos no funcionales", "Validar especificaciones"]
tipo: ordenar

explicacion: |
  El proceso estándar comienza con el levantamiento de necesidades, seguido de la especificación de qué hará el sistema (funcionales) y cómo lo hará (no funcionales), para terminar con la validación de que lo documentado es correcto.
```
