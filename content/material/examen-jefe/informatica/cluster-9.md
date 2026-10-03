# Examen jefe — [PENDIENTE #824]

> Logro #824. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **123 preguntas totales** en 5/5 secciones.

---

## Sección: requisitos-funcionales-no-funcionales (25 preguntas)

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

## Sección: normalizacion-bases-datos (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["teoria", "redundancia"]

respuesta: "redundancia"
tipo: completar
respuestas_validas:
  - "redundancia"
  - "duplicación"
  - "repetir"

enunciado: "Cuando la misma información se almacena en múltiples lugares de una base de datos, se produce un fenómeno llamado ___."

explicacion: |
  La redundancia de datos ocurre cuando un mismo dato se repite innecesariamente en diferentes tablas o registros, lo que aumenta el riesgo de inconsistencias.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["anomalia", "integridad"]

opciones_explicitas: ["Anomalía de inserción", "Anomalía de borrado", "Anomalía de actualización", "Todas las anteriores"]
respuesta: "Anomalía de actualización"
tipo: mc

enunciado: "Si un dato está duplicado y se cambia en un registro pero no en el otro, estamos ante una anomalía de tipo:"

explicacion: |
  La redundancia causa anomalías de actualización, ya que la integridad de la información se pierde al no estar sincronizada en todos los puntos de almacenamiento.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["objetivo", "diseño"]

respuesta: verdadero
tipo: vf

enunciado: "¿El objetivo principal de la normalización es minimizar la redundancia de datos y evitar anomalías de inserción, actualización y borrado?"

explicacion: |
  Correcto. La normalización es un proceso de diseño que busca organizar las columnas y tablas de una base de datos para minimizar la duplicación de datos.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "intermedio"
  tags: ["pasos", "proceso"]

opciones_explicitas: ["Identificar dependencias funcionales", "Definir la clave primaria", "Crear tablas relacionadas", "Aplicar reglas de formas normales"]
respuesta_orden: ["Identificar dependencias funcionales", "Definir la clave primaria", "Aplicar reglas de formas normales", "Crear tablas relacionadas"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para diseñar una base de datos normalizada:"

explicacion: |
  Primero se deben entender cómo se relacionan los datos (dependencias funcionales), luego definir la estructura básica (clave primaria) y finalmente aplicar las reglas de las Formas Normales para crear las tablas relacionadas.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["integridad", "consecuencia"]

variables:
  escenario: uno_de([["Alta redundancia", "baja"], ["Normalización óptima", "alta"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["baja", "alta"]

enunciado: "En un esquema de base de datos con una normalización óptima, la integridad de los datos suele ser ___."

explicacion: |
  Al reducir la redundancia mediante la normalización, se garantiza que un dato solo se almacene en un lugar, elevando la integridad del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "basico"
  tags: ["redundancia", "anomalia"]

enunciado: "En una tabla de 'Ventas' donde se repite el nombre y la dirección del cliente por cada producto comprado, si el cliente cambia de dirección y solo actualizamos una fila, ¿qué problema de integridad de datos estamos enfrentando?"

opciones_explicitas: ["Anomalia de actualización", "Anomalia de inserción", "Anomalia de borrado", "Redundancia de clave"]

respuesta: "Anomalia de actualización"
tipo: "mc"

explicacion: |
  La redundancia de datos (repetir la dirección en cada venta) provoca anomalías de actualización: si no se actualizan todos los registros de un mismo cliente, la base de datos queda con información inconsistente.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "intermedio"
  tags: ["dependencia_funcional", "normalizacion"]

enunciado: "Considerando una tabla de estudiantes con los campos ID_Estudiante, Nombre, Email, Curso y Aula, si queremos eliminar la redundancia de la información del 'Curso' y su 'Aula' asociada, ¿cuál debería ser la clave primaria para una tabla separada que gestione la ubicación de los cursos?"

opciones_explicitas: ["ID_Estudiante", "Nombre", "Email", "Curso"]

respuesta: "Curso"
tipo: "mc"

explicacion: |
  Para normalizar, debemos mover los atributos que dependen de un concepto distinto (el curso) a una tabla propia, donde 'Curso' actúe como clave para evitar repetir la 'Aula' en cada estudiante.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "basico"
  tags: ["definicion"]

enunciado: "El proceso de organizar los datos en una base de datos relacional para minimizar la redundancia y evitar anomalías se denomina ___."

respuestas_validas:
  - "normalización"
  - "normalizacion"

respuesta: "normalización"
tipo: "completar"

explicacion: |
  La normalización es el proceso de estructurar una base de datos para que cada dato se almacene en un solo lugar, evitando duplicados.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "basico"
  tags: ["almacenamiento"]

enunciado: "Tener una base de datos altamente normalizada siempre implica un ahorro de espacio en disco debido a la eliminación de datos repetidos."

respuesta: falso
tipo: "vf"

explicacion: |
  Aunque la normalización reduce la redundancia de datos descriptivos, puede aumentar el uso de espacio debido a la necesidad de crear más tablas y gestionar múltiples claves foráneas (índices) para realizar las uniones (JOINs).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "avanzado"
  tags: ["proceso", "pasos"]

enunciado: "Ordena los pasos lógicos para llevar una tabla desnormalizada hacia un modelo normalizado eficiente:"

opciones_explicitas: ["Identificar dependencias funcionales", "Eliminar dependencias parciales (1FN)", "Eliminar dependencias transitivas (2FN/3FN)", "Verificar integridad referencial"]

respuesta_orden: ["Identificar dependencias funcionales", "Eliminar dependencias parciales (1FN)", "Eliminar dependencias transitivas (2FN/3FN)", "Verificar integridad referencial"]
tipo: ordenar

explicacion: |
  El proceso comienza analizando cómo se relacionan los datos (dependencias), luego se separan los datos que no dependen de la clave completa (1FN/2FN) y finalmente se eliminan las dependencias indirectas (3FN).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["redundancia", "anomalias"]

enunciado: "Si al cambiar el número de teléfono de un cliente debemos buscar todas sus filas repetidas para actualizar cada una de ellas, estamos ante una anomalía de tipo ___ causada por la redundancia."

respuesta: "Anomalía de actualización"
tipo: mc
opciones_explicitas: ["Anomalía de actualización", "Anomalía de inserción", "Anomalía de borrado"]

explicacion: |
  La redundancia de datos provoca anomalías. Si un dato (como un teléfono) se repite en múltiples registros, el sistema corre el riesgo de que no todos se actualicen, dejando la base de datos en un estado inconsistente.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "basico"
  tags: ["objetivos", "diseño"]

enunciado: "La normalización de bases de datos tiene como objetivo principal minimizar la redundancia de datos para evitar las anomalías de inserción, actualización y ___."

respuesta: "borrado"
respuestas_validas:
  - "borrado"
tipo: completar

explicacion: |
  La normalización busca estructurar las tablas de modo que cada dato se almacene en un único lugar, evitando que al borrar un registro se pierda información que no debería ser eliminada (anomalía de borrado).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "avanzado"
  tags: ["desnormalizacion", "rendimiento"]

enunciado: "En sistemas de Big Data o Data Warehousing, a veces se aplica la 'desnormalización' intencionalmente para mejorar la velocidad de lectura, a pesar de aumentar la redundancia."

respuesta: verdadero
tipo: vf

explicacion: |
  Es correcto. Aunque la normalización es vital para la integridad (OLTP), en sistemas de análisis (OLAP) se prefiere la desnormalización para evitar JOINs costosos y acelerar las consultas de lectura.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["metodologia"]

variables:
  pasos_correctos: ["Identificar dependencias funcionales", "Aplicar Primera Forma Normal", "Aplicar Segunda Forma Normal", "Aplicar Tercera Forma Normal"]

enunciado: "Para asegurar una base de datos bien estructurada, se debe seguir un proceso lógico de normalización. Ordena los pasos:"

respuesta_orden: ["Identificar dependencias funcionales", "Aplicar Primera Forma Normal", "Aplicar Segunda Forma Normal", "Aplicar Tercera Forma Normal"]
tipo: ordenar
opciones_explicitas: ["Aplicar Tercera Forma Normal", "Identificar dependencias funcionales", "Aplicar Segunda Forma Normal", "Aplicar Primera Forma Normal"]

explicacion: |
  La normalización es un proceso iterativo y progresivo. No se puede aplicar la 2FN sin haber cumplido la 1FN, y para la 2FN es indispensable haber identificado las dependencias funcionales.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "avanzado"
  tags: ["dependencia_funcional", "2fn"]

enunciado: "En la Segunda Forma Normal (2FN), es fundamental que todos los atributos que no forman parte de la clave primaria dependan de la clave completa y no solo de una parte de ella. A esto se le llama evitar la dependencia ___."

respuesta: "parcial"
respuestas_validas:
  - "parcial"
tipo: completar

explicacion: |
  La dependencia parcial ocurre cuando un atributo depende de solo una parte de una clave compuesta. La 2FN exige que todos los atributos no clave dependan de la clave primaria completa.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["redundancia", "integridad"]

respuesta: "anomalias"
tipo: "completar"
respuestas_validas:
  - "anomalias"
  - "anomalia"

enunciado: "La redundancia de datos en una base de datos no normalizada puede provocar errores de consistencia conocidos como ___ de actualización o de borrado."

explicacion: |
  La redundancia es la duplicación innecesaria de datos. Cuando un dato se repite en varios lugares, si se actualiza en uno y no en el otro, se producen anomalías que rompen la integridad de la información.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "intermedio"
  tags: ["desnormalizacion", "rendimiento"]

respuesta: "La normalización prioriza la integridad mediante la reducción de redundancia."
tipo: "mc"
opciones_explicitas: ["La normalización prioriza la integridad mediante la reducción de redundancia.", "La desnormalización prioriza la integridad mediante la reducción de redundancia.", "Ambas buscan lo mismo pero con diferentes nombres.", "Ninguna de las anteriores."]

enunciado: "Considerando el objetivo principal de cada proceso, ¿cuál de las siguientes afirmaciones es correcta?"

pasos:
  - "Analizar si el objetivo es evitar duplicados (normalizar) o acelerar lecturas (desnormalizar)."

explicacion: |
  La normalización busca eliminar la redundancia para asegurar la integridad. La desnormalización, por el contrario, introduce redundancia deliberadamente para mejorar el rendimiento de las consultas de lectura.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "avanzado"
  tags: ["dependencia_funcional", "3nf"]

respuesta: verdadero
tipo: "vf"

enunciado: "En el contexto de la Tercera Forma Normal (3NF), una dependencia transitiva ocurre cuando un atributo no clave depende de otro atributo que tampoco es una clave primaria, lo cual es distinto a una dependencia funcional directa sobre la clave."

explicacion: |
  Correcto. La 3NF exige que todos los atributos no clave dependan directamente de la clave primaria y no de otros atributos no clave (eliminando así la dependencia transitiva).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["proceso", "orden"]

tipo: ordenar
opciones_explicitas: ["1NF", "2NF", "3NF"]
respuesta_orden: ["1NF", "2NF", "3NF"]

enunciado: "Ordene los pasos lógicos de las formas normales para asegurar una base de datos sin redundancias excesivas:"

explicacion: |
  El proceso estándar es asegurar primero la atomicidad (1NF), luego la dependencia funcional completa sobre la clave (2NF) y finalmente eliminar dependencias transitivas (3NF).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "intermedio"
  tags: ["redundancia", "duplicacion"]

respuesta: falso
tipo: vf

enunciado: "Si un dato se repite en una tabla simplemente porque es necesario para realizar un JOIN eficiente en un modelo OLAP (Data Warehouse), ¿se considera una redundancia problemática que debe evitarse estrictamente como en el modelo OLTP?"

explicacion: |
  En sistemas OLAP, la redundancia controlada es una estrategia de diseño para el rendimiento. En sistemas OLTP (transaccionales), la redundancia es un error que causa inconsistencias.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "basico"
  tags: ["redundancia", "integridad"]

respuesta: "Anomalía de actualización"
tipo: mc
opciones_explicitas: ["Inconsistencia", "Anomalía de actualización", "Anomalía de inserción", "Pérdida de integridad"]

enunciado: "Si en una tabla de ventas repetimos el Nombre y la Dirección del Cliente para cada producto vendido, y el cliente cambia de domicilio pero solo actualizamos una fila, generamos una anomalía de tipo: ___"

explicacion: |
  La redundancia de datos provoca que la información se repita innecesariamente, lo que deriva en anomalías de actualización cuando los datos no se mantienen sincronizados en todos los registros.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "basico"
  tags: ["objetivo", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "El objetivo principal de la normalización es minimizar la redundancia de datos para evitar anomalías de inserción, actualización y borrado."

explicacion: |
  Correcto. La normalización busca estructurar las tablas para que cada dato se almacene en un único lugar, garantizando la integridad de la información.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["anomalia", "insercion"]

respuesta: "No podemos registrar un nuevo curso si no hay alumnos inscritos"
tipo: completar
respuestas_validas:
  - "No podemos registrar un nuevo curso si no hay alumnos inscritos"

enunciado: "En una tabla desnormalizada que combina 'Estudiantes' y 'Cursos', si intentamos agregar un curso que aún no tiene alumnos inscritos y la clave primaria depende de ambos, nos enfrentamos a una: ___"

explicacion: |
  Esto se conoce como anomalía de inserción: la imposibilidad de añadir información porque falta un dato que forma parte de la clave primaria.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta_orden: ["1FN", "2FN", "3FN"]
tipo: ordenar
opciones_explicitas: ["3FN", "1FN", "2FN"]

enunciado: "Ordena los pasos lógicos para alcanzar la Tercera Forma Normal (3FN) partiendo de una tabla no normalizada:"

explicacion: |
  El proceso de normalización es iterativo y jerárquico: primero se asegura la atomicidad (1FN), luego la dependencia funcional completa (2FN) y finalmente se eliminan las dependencias transitivas (3FN).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "avanzado"
  tags: ["dependencia", "funcional"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["ID_Empleado -> Nombre_Empleado", "ID_Producto -> Fecha_Venta"], ["ID_Cliente -> Dirección_Cliente", "ID_Pedido -> ID_Cliente"]]

respuesta: ejemplos[ejemplo_idx][0]
tipo: mc
opciones_explicitas: ["ID_Empleado -> Nombre_Empleado", "ID_Producto -> Fecha_Venta", "ID_Cliente -> Dirección_Cliente", "ID_Pedido -> ID_Cliente"]

enunciado: "Para cumplir con la Segunda Forma Normal (2FN), debemos asegurar que todos los atributos no clave dependan de la clave primaria completa. Un ejemplo de una dependencia funcional válida es: ___"

explicacion: |
  En la 2FN, cada atributo que no es parte de la clave debe depender de toda la clave primaria, no solo de una parte de ella (evitando dependencias parciales).
```

## Sección: diseno-y-arquitectura-de-software (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

tipo: mc
opciones_explicitas: ["El diseño detallado de algoritmos y estructuras de datos", "La estructura fundamental de un sistema y sus componentes", "La escritura de código siguiendo un estándar de estilo", "La gestión de los servidores donde se aloja la aplicación"]
respuesta: "La estructura fundamental de un sistema y sus componentes"
enunciado: "La arquitectura de software se define principalmente como ___."

explicacion: |
  La arquitectura de software se refiere a la estructura de alto nivel de un sistema, incluyendo sus componentes, las relaciones entre ellos y los principios que rigen su diseño y evolución.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["calidad", "requerimientos"]

tipo: vf

respuesta: verdadero

enunciado: "Los atributos de calidad (como la escalabilidad, la seguridad y la disponibilidad) forman parte de los requerimientos no funcionales del sistema. ¿Es esto verdadero?"

explicacion: |
  Correcto. Mientras que los requerimientos funcionales describen qué hace el sistema, los no funcionales (atributos de calidad) describen cómo se comporta el sistema bajo ciertas condiciones.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["ciclo_de_vida", "procesos"]

tipo: ordenar
opciones_explicitas: ["Análisis de requisitos", "Diseño de arquitectura", "Implementación", "Pruebas y despliegue"]

enunciado: "Ordene las etapas del ciclo de vida de desarrollo de software en un orden lógico secuencial, desde la concepción hasta la entrega."

explicacion: |
  Un flujo estándar comienza con entender qué se necesita (Análisis), diseñar cómo se construirá (Arquitectura/Diseño), escribir el código (Implementación) y verificar que funcione (Pruebas/Despliegue).
respuesta_orden: ["Análisis de requisitos", "Diseño de arquitectura", "Implementación", "Pruebas y despliegue"]
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["patrones", "arquitectura"]

variables:
  escenario: [[ "Monolítica", "Un solo bloque de código donde todo está interconectado" ], [ "Microservicios", "Un conjunto de servicios pequeños e independientes" ]]
  idx: uno_de([0, 1])

tipo: completar

enunciado: "Si elegimos una arquitectura de tipo {escenario[idx][0]}, el sistema se caracteriza por ser {escenario[idx][1]}."

respuestas_validas:
  - "Un solo bloque de código donde todo está interconectado"
  - "Un conjunto de servicios pequeños e independientes"
respuesta: escenario[idx][1]

explicacion: |
  La arquitectura Monolítica centraliza toda la lógica en una única unidad, mientras que los Microservicios descomponen la aplicación en servicios autónomos que se comunican entre sí.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["principios", "calidad_codigo"]

tipo: vf

respuesta: falso

enunciado: "En un buen diseño de arquitectura de software, se busca que los componentes tengan un alto acoplamiento y una baja cohesión. ¿Es esto correcto?"

explicacion: |
  Falso. Un buen diseño busca **bajo acoplamiento** (que los componentes dependan poco entre sí) y **alta cohesión** (que cada componente tenga una responsabilidad única y bien definida).
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["patrones_de_diseño", "observer"]

variables:
  escenario: uno_de([["Sistema de Clima", "Sensor de Temperatura"], ["App de Bolsa", "Widget de Cotizaciones"], ["Videojuego", "Sistema de Logros"]])

enunciado: "En un sistema de {escenario[0]}, el {escenario[1]} actúa como el 'Subject'. Cuando su estado cambia, debe notificar a todos los observadores registrados. Si un observador no está suscrito, no recibirá la actualización."

opciones_explicitas: ["El Subject mantiene una lista de suscriptores", "El Observer decide cuándo notificar al Subject", "El Subject debe conocer la implementación interna de cada Observer"]

respuesta: "El Subject mantiene una lista de suscriptores"
tipo: mc

explicacion: |
  El patrón Observer define una relación de uno a muchos. El 'Subject' mantiene una lista de suscriptados y, ante un cambio de estado, recorre dicha lista llamando al método de actualización de cada uno.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["arquitectura_hexagonal", "dependencias"]

variables:
  capa_externa: uno_de(["Base de Datos", "Interfaz de Usuario", "Servicio de Email"])
  capa_core: "Dominio (Lógica de Negocio)"

enunciado: "Siguiendo los principios de la Arquitectura Hexagonal (Ports and Adapters), la dependencia debe fluir hacia el centro. Si tenemos un componente de {capa_externa}, este debe depender de una interfaz definida en el {capa_core}, pero el {capa_core} NUNCA debe depender de {capa_externa}."

opciones_explicitas: [verdadero, falso]

respuesta: verdadero
tipo: vf

explicacion: |
  La regla de oro de la arquitectura hexagonal es la inversión de dependencias. El núcleo (Core) es independiente de los detalles de infraestructura (DB, UI, etc.).
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["metodologias", "sdlc"]

tipo: ordenar
opciones_explicitas: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]
respuesta_orden: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]

enunciado: "En el modelo de Cascada (Waterfall), las fases deben completarse de forma secuencial. Ordena las etapas correctamente:"

explicacion: |
  El modelo en Cascada (Waterfall) es lineal y rígido: no se puede pasar a la fase de implementación sin haber finalizado el diseño y los requerimientos.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["principios_solid", "cohesion"]

variables:
  modulo: uno_de(["Modulo_Pagos", "Modulo_Usuarios", "Modulo_Inventario"])

enunciado: "Estamos diseñando un sistema para una tienda online. Si el {modulo} contiene funciones para procesar pagos, generar facturas PDF y también para enviar emails de bienvenida, el módulo tiene una ___ baja."

respuestas_validas:
  - "cohesión"

respuesta: "cohesión"
tipo: completar

explicacion: |
  Una baja cohesión ocurre cuando un módulo realiza demasiadas tareas distintas que no están relacionadas entre sí. Un buen diseño busca que cada módulo tenga una responsabilidad única (Single Responsibility Principle).
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_of_software"
  nivel: "intermedio"
  tags: ["microservicios", "monolito"]

variables:
  escenario_carga: uno_de(["El módulo de pagos recibe 1000 peticiones por segundo, pero el resto del sistema no.", "El módulo de catálogo es muy pesado en memoria, pero el resto es ligero.", "El módulo de búsqueda requiere escalar su CPU constantemente por la alta demanda."])

enunciado: "En un escenario donde {escenario_carga}, una arquitectura de microservicios permite escalar solo el componente afectado, mientras que en un monolito se debe escalar toda la aplicación. ¿Cuál es la principal ventaja de microservicios en este caso?"

opciones_explicitas: ["Escalabilidad selectiva", "Simplicidad de despliegue", "Menor latencia de red"]

respuesta: "Escalabilidad selectiva"
tipo: mc

explicacion: |
  Los microservicios permiten el "Scaling out" dirigido. Si solo un componente tiene carga, solo pagamos por más recursos para ese componente, optimizando costos y recursos.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["principios_diseno", "mantenibilidad"]

tipo: mc
opciones_explicitas: ["alta cohesión y bajo acoplamiento", "baja cohesión y alto acoplamiento", "alta cohesión y alto acoplamiento", "baja cohesión y bajo acoplamiento"]
respuesta: "alta cohesión y bajo acoplamiento"

enunciado: "En el diseño de software, para facilitar el mantenimiento buscamos que los módulos tengan:"

explicacion: |
  Una alta cohesión significa que el módulo está enfocado en una sola responsabilidad. Un bajo acoplamiento significa que los módulos están poco interconectados, lo que permite cambiarlos sin afectar al resto del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["arquitectura", "microservicios"]

enunciado: "¿Es siempre preferible una arquitectura de microservicios sobre una arquitectura monolítica para cualquier proyecto de software?"

respuesta: falso
tipo: vf

explicacion: |
  No siempre. Los microservicios añaden una complejidad operativa significativa (red, latencia, consistencia de datos). Para proyectos pequeños o equipos reducidos, un monolito bien estructurado suele ser más eficiente y menos costoso.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["metodologias", "sdlc"]

enunciado: "Ordena las fases típicas del ciclo de vida de desarrollo de software (SDLC) desde la concepción hasta el cierre:"

opciones_explicitas: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]

respuesta_orden: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]
tipo: ordenar

explicacion: |
  El flujo lógico comienza entendiendo qué se necesita (Requerimientos), cómo se estructurará (Diseño), escribiendo el código (Implementación), verificando que funcione (Pruebas) y asegurando su vida útil (Mantenimiento).
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["patrones_de_diseno", "creacionales"]

variables:
  caso_idx: uno_de([0, 1])
  ejemplo: [["gestión de una conexión a una base de datos única", "Singleton"], ["crear diferentes tipos de botones en una interfaz", "Factory"]]

enunciado: "Si un programador necesita asegurar que una clase tenga una única instancia en todo el sistema, está intentando implementar el patrón ___."

respuestas_validas:
  - "Singleton"
  - "Factory"

respuesta: ejemplo[caso_idx][1]
tipo: completar

explicacion: |
  El patrón Singleton garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella, evitando conflictos de recursos como conexiones a bases de datos o archivos de configuración.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["acoplamiento", "diseño_estructural"]

enunciado: "Cuando un módulo A le pasa un objeto a un módulo B, pero además le indica a B qué método debe llamar y en qué orden, estamos ante un acoplamiento de ___."

opciones_explicitas: ["control", "datos"]

respuesta: "control"
tipo: mc

explicacion: |
  El acoplamiento de control es peligroso porque el módulo emisor debe conocer la lógica interna del receptor. El objetivo es evolucionar hacia un acoplamiento de datos, donde solo se intercambie la información necesaria.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["arquitectura", "diseno", "conceptos"]

respuesta: "arquitectura"
tipo: "mc"
opciones_explicitas: ["diseño", "arquitectura", "codificación", "testing"]

enunciado: "Mientras que el diseño de software se enfoca en los detalles de algoritmos y estructuras de datos internas, la ___ se ocupa de la estructura global y las decisiones de alto nivel del sistema."

explicacion: |
  La arquitectura define la estructura macro (componentes, interacciones y patrones), mientras que el diseño se encarga de la micro-estructura (lógica interna de los componentes).
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["acoplamiento", "cohesion"]

tipo: vf
respuesta: verdadero

enunciado: "En un sistema con buen diseño, buscamos que el acoplamiento sea bajo y la cohesión sea alta."

explicacion: |
  Un bajo acoplamiento minimiza la dependencia entre módulos, facilitando cambios. Una alta cohesión asegura que cada módulo tenga una responsabilidad única y clara.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["monolito", "microservicios", "despliegue"]

respuesta: "microservicios"
tipo: "completar"
respuestas_validas:
  - "microservicios"

enunciado: "A diferencia de una arquitectura monolítica, donde todos los componentes están en un único paquete desplegable, la arquitectura de ___ divide la aplicación en servicios independientes que se comunican por red."

explicacion: |
  Los microservicios permiten escalar partes específicas del sistema de forma independiente, algo que en un monolito requiere escalar toda la aplicación.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["capas", "arquitectura", "orden"]

respuesta_orden: ["Presentación", "Lógica de Negocio", "Acceso a Datos"]
tipo: "ordenar"
opciones_explicitas: ["Acceso a Datos", "Lógica de Negocio", "Presentación"]

enunciado: "Ordene las capas de una arquitectura clásica en capas (N-Tier) desde la más cercana al usuario hasta la más cercana a la base de datos:"

explicacion: |
  La capa de Presentación maneja la interfaz, la de Lógica de Negocio procesa las reglas y la de Acceso a Datos gestiona la persistencia.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["atributos", "calidad", "mantenibilidad"]

respuesta: "mantenibilidad"
tipo: "mc"
opciones_explicitas: ["rendimiento", "mantenibilidad", "usabilidad", "seguridad"]

enunciado: "Un sistema puede ser muy rápido (alto rendimiento), pero si su arquitectura es desordenada y difícil de modificar, carece de buena ___."

explicacion: |
  La mantenibilidad es la facilidad con la que un sistema puede ser modificado para corregir errores, mejorar el rendimiento o adaptarse a nuevos requisitos.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["arquitectura", "patrones"]

variables:
  escenario: uno_de([["Se requiere un sistema donde la interfaz de usuario y la lógica de negocio estén totalmente desacopladas para permitir múltiples vistas (web, móvil, CLI) usando el mismo núcleo.", "MVC"], ["Se requiere un sistema donde las componentes se comuniquen mediante eventos asíncronos para garantizar un desacoplamiento máximo entre productores y consumidores.", "Event-Driven"], ["Se requiere un sistema basado en servicios independientes que se comunican por red, permitiendo escalar cada componente de forma autónoma.", "Microservicios"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["MVC", "Event-Driven", "Microservicios", "Monolito"]

enunciado: "Un arquitecto de software debe elegir la estructura para un proyecto con las siguientes características: {escenario[0]}"

explicacion: |
  El patrón seleccionado es {escenario[1]}. Cada patrón responde a necesidades específicas de escalabilidad, desacoplamiento o complejidad de interfaz.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["principios_solid", "refactorizacion"]

variables:
  textos: ["Una clase 'Factura' que calcula el total, guarda en la base de datos y genera un PDF.", "Una clase 'Usuario' que contiene solo los atributos de datos y métodos de acceso."]
  valores: [falso, verdadero]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf
enunciado: "Analice el siguiente caso: {textos[idx]}. ¿Cumple esta clase con el Principio de Responsabilidad Única (SRP)?"

explicacion: |
  El SRP establece que una clase debe tener una, y solo una, razón para cambiar. Una clase que mezcla cálculo, persistencia y generación de PDF viola ese principio; una clase que solo agrupa datos y su acceso lo cumple.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["capas", "arquitectura_n_capas"]

tipo: ordenar

opciones_explicitas: ["Presentación", "Negocio", "Acceso a Datos", "Base de Datos"]
respuesta_orden: ["Presentación", "Negocio", "Acceso a Datos", "Base de Datos"]

enunciado: "Ordene las capas de un sistema de software estándar desde la capa más externa (usuario) hasta la más interna (almacenamiento):"

explicacion: |
  El orden correcto es: Presentación, Negocio, Acceso a Datos y Base de Datos. La arquitectura en capas busca separar la lógica de presentación de la lógica de negocio y el acceso a datos.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["calidad_codigo", "acoplamiento", "cohesion"]

variables:
  caso_estudio: uno_de([["Un módulo que tiene funciones muy relacionadas entre sí pero que depende fuertemente de variables globales de otros módulos.", "Baja Cohesion, Alto Acoplamiento"], ["Un módulo con funciones diversas que no tienen relación entre sí, pero que son independientes de otros sistemas.", "Alta Cohesion, Bajo Acoplamiento"]])

respuesta: caso_estudio[1]
tipo: completar
respuestas_validas:
  - "Baja Cohesion, Alto Acoplamiento"
  - "Alta Cohesion, Bajo Acoplamiento"

enunciado: "En el diseño de software, el caso descrito es: ___"

explicacion: |
  El diagnóstico es {caso_estudio[1]}. Un buen diseño busca Maximizar la Cohesión y Minimizar el Acoplamiento.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["mantenibilidad", "deuda_tecnica"]

variables:
  textos: ["Se decide omitir la creación de tests unitarios y la documentación de la arquitectura para cumplir con una fecha de entrega inmediata.", "Se implementa un patrón de diseño robusto y se realiza una revisión de arquitectura antes de cada sprint."]
  valores: [verdadero, falso]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf
enunciado: "¿Es cierto que el siguiente escenario representa la acumulación de deuda técnica?: {textos[idx]}"

explicacion: |
  La deuda técnica surge cuando se prioriza la rapidez sobre la calidad del diseño y la estructura del código, como al omitir tests y documentación por una fecha límite. Una revisión de arquitectura regular con buenos patrones, en cambio, reduce la deuda técnica.
```

## Sección: segmentacion (23 preguntas)

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["definicion", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación divide la memoria de un programa en bloques de tamaño variable, a diferencia de la paginación, que usa bloques de tamaño fijo."

explicacion: |
  Verdadero. Esa es la diferencia clave: los segmentos corresponden a unidades lógicas del programa (código, datos, pila) y por eso varían de tamaño, mientras que las páginas son siempre del mismo tamaño fijo.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["segmentos", "tipos"]

respuesta: falso
tipo: vf

enunciado: "Un programa en un sistema segmentado tiene un único segmento que contiene todo: código, datos y pila mezclados."

explicacion: |
  Falso. Se dividen en segmentos separados según su función lógica: segmento de código, segmento de datos, segmento de pila, entre otros, cada uno con sus propios permisos.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["direccionamiento", "par"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema con segmentación, una dirección de memoria se expresa como un par (segmento, desplazamiento)."

explicacion: |
  Verdadero. El segmento identifica la unidad lógica y el desplazamiento indica la posición exacta dentro de ese segmento.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["tabla", "segmentos"]

respuesta: "tabla de segmentos"
tipo: completar

enunciado: "El sistema operativo mantiene, por cada proceso, una ___ que registra dónde empieza cada segmento en memoria física y cuál es su tamaño."

explicacion: |
  La tabla de segmentos es el equivalente, para segmentación, de la tabla de páginas en paginación.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["permisos", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "El segmento de código suele configurarse como de solo lectura y ejecución, mientras que el segmento de datos permite lectura y escritura pero no ejecución."

explicacion: |
  Verdadero. Asignar permisos distintos según el tipo de segmento es una ventaja de seguridad propia de la segmentación, que la paginación pura no ofrece de la misma manera.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["mmu", "verificacion"]

respuesta: verdadero
tipo: vf

enunciado: "La MMU verifica que el desplazamiento solicitado no supere el tamaño del segmento correspondiente antes de permitir el acceso."

explicacion: |
  Verdadero. Si el desplazamiento excede el tamaño del segmento, se genera una violación de segmento — el conocido 'segmentation fault'.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["segmentation_fault", "error"]

respuesta: "segmentation fault"
tipo: completar

enunciado: "Cuando un programa en C intenta escribir fuera de los límites de su segmento asignado, el sistema operativo termina el proceso con el error conocido como '___'."

explicacion: |
  Es uno de los errores más famosos para quienes programan en C/C++, y ocurre justamente por una violación de los límites de un segmento de memoria.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["fragmentacion", "externa"]

respuesta: "externa"
tipo: completar

enunciado: "Como los segmentos son de tamaño variable, la memoria libre se va fragmentando en huecos de distinto tamaño — un problema conocido como fragmentación ___."

explicacion: |
  La fragmentación externa es la principal desventaja de la segmentación pura frente a la paginación.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["paginacion", "ventaja"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación no sufre fragmentación externa porque todos sus bloques (páginas y marcos) tienen el mismo tamaño fijo."

explicacion: |
  Verdadero. Esa es justamente la ventaja de la paginación frente a la segmentación pura en cuanto al aprovechamiento de la memoria libre.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "avanzado"
  tags: ["combinado", "moderno"]

respuesta: "segmentación paginada"
tipo: completar

enunciado: "El esquema que combina segmentación lógica (código/datos/pila con permisos) con paginación dentro de cada segmento se llama ___."

explicacion: |
  Es el esquema que efectivamente usa la mayoría del hardware x86 moderno: segmentación para la organización lógica y permisos, paginación para evitar la fragmentación externa.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["pila", "crecimiento"]

respuesta: verdadero
tipo: vf

enunciado: "El segmento de pila (stack) crece de forma dinámica según las llamadas a función que estén activas en cada momento."

explicacion: |
  Verdadero. A diferencia del segmento de código (que no cambia de tamaño en tiempo de ejecución), la pila crece y se reduce constantemente con cada llamada y retorno de función.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["logico", "fisico"]

respuesta: falso
tipo: vf

enunciado: "Un segmento representa siempre un bloque arbitrario de memoria, sin relación con la estructura lógica del programa."

explicacion: |
  Falso. Es exactamente lo contrario: cada segmento corresponde a una unidad lógica real del programa (código, datos, pila) — esa es la diferencia central frente a la paginación, que sí usa bloques arbitrarios de tamaño fijo.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["deteccion", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "La segmentación puede detectar un acceso indebido a memoria de una manera que la paginación pura no detecta tan naturalmente."

explicacion: |
  Verdadero. Como cada segmento 'sabe' su tamaño lógico real, un acceso que se pasa de ese límite se detecta como violación de segmento — la paginación, al tratar todo como bloques fijos sin significado, no tiene ese mismo tipo de chequeo lógico.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["puntero", "causa"]

respuesta: verdadero
tipo: vf

enunciado: "Seguir un puntero nulo o mal inicializado es una causa común de segmentation fault."

explicacion: |
  Verdadero. Un puntero inválido suele apuntar fuera de los límites del segmento asignado al proceso, disparando la violación de segmento.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["proteccion", "otros_procesos"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando ocurre una violación de segmento, el sistema operativo termina el proceso para evitar que dañe la memoria de otros procesos."

explicacion: |
  Verdadero. Este mecanismo hace que un programa mal escrito falle de forma controlada y visible, en vez de corromper silenciosamente datos de otras aplicaciones.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["segmentos", "ejemplos"]

respuesta: "codigo"
tipo: completar

enunciado: "El segmento de ___ contiene las instrucciones ejecutables del programa y suele ser de solo lectura y ejecución."

explicacion: |
  Proteger el segmento de código contra escritura evita que un programa (accidental o maliciosamente) modifique sus propias instrucciones en tiempo de ejecución.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["mmu", "componente"]

respuesta: "MMU"
tipo: completar

enunciado: "El componente de hardware que verifica los límites de cada segmento antes de permitir un acceso a memoria se llama ___ (Memory Management Unit)."

explicacion: |
  La MMU es el mismo componente de hardware involucrado tanto en segmentación como en paginación — traduce direcciones lógicas a físicas y aplica los controles de acceso.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["fragmentacion", "interna"]

respuesta: falso
tipo: vf

enunciado: "La segmentación pura sufre principalmente de fragmentación interna, igual que la paginación."

explicacion: |
  Falso. La segmentación sufre principalmente fragmentación EXTERNA (huecos de tamaño variable entre segmentos). La fragmentación interna (espacio desperdiciado dentro de un bloque de tamaño fijo) es más propia de la paginación.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["reconstruccion", "logico"]

respuesta: falso
tipo: vf

enunciado: "La segmentación en sistemas operativos tiene como objetivo dividir archivos para enviarlos por una red."

explicacion: |
  Falso — eso seria segmentación/fragmentación de paquetes de red (un concepto de redes, distinto). La segmentación de memoria organiza cómo se divide y protege la memoria de UN programa dentro de la computadora, no cómo viajan los datos por una red.
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["x86", "hardware"]

respuesta: verdadero
tipo: vf

enunciado: "La mayoría del hardware x86 moderno usa un esquema de segmentación paginada, no segmentación pura."

explicacion: |
  Verdadero. Combina lo mejor de ambos mundos: organización lógica con permisos (segmentación) y aprovechamiento eficiente de la memoria física sin fragmentación externa (paginación).
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "intermedio"
  tags: ["datos", "segmento"]

respuesta: "datos"
tipo: completar

enunciado: "Las variables globales y estáticas de un programa se almacenan típicamente en el segmento de ___."

explicacion: |
  El segmento de datos guarda las variables globales/estáticas, separado del segmento de código y del de pila (que guarda variables locales y direcciones de retorno).
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "avanzado"
  tags: ["comparacion", "tamaño"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de los marcos de página, que siempre tienen el mismo tamaño, los segmentos pueden tener tamaños distintos entre sí."

explicacion: |
  Verdadero. Ese es el rasgo definitorio de la segmentación: cada segmento tiene el tamaño que necesita su unidad lógica correspondiente (el código puede ser grande, la pila puede ser chica al inicio, etc.).
```

```
metadata:
  materia: "informatica"
  tema: "segmentacion"
  nivel: "basico"
  tags: ["utilidad", "programador"]

respuesta: verdadero
tipo: vf

enunciado: "Entender la segmentación ayuda a comprender por qué ocurren errores como el segmentation fault al programar en lenguajes de bajo nivel como C."

explicacion: |
  Verdadero. Conocer cómo se organiza y protege la memoria por segmentos explica directamente por qué ciertos errores de programación (punteros inválidos, desbordes de array) terminan en ese tipo de falla."
```

## Sección: control-de-versiones (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos", "software"]

respuesta: "un software que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo"
tipo: mc
opciones_explicitas: ["un software que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo", "un editor de texto avanzado para programadores", "un sistema operativo para gestionar archivos en la nube", "una herramienta de compilación de código fuente"]

enunciado: "En el desarrollo de software, un sistema de control de versiones es ___."

explicacion: |
  Un sistema de control de versiones permite rastrear la evolución de un proyecto, permitiendo volver a estados anteriores y gestionar cambios realizados por múltiples personas.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "workflow"]

respuesta: "snapshot"
tipo: completar
respuestas_validas:
  - "snapshot"
  - "instantánea"
  - "foto"

enunciado: "En Git, un 'commit' puede entenderse como una ___ del estado actual de los archivos en el repositorio."

explicacion: |
  A diferencia de otros sistemas que guardan solo las diferencias (deltas), Git piensa en términos de snapshots (instantáneas) de la estructura de archivos en ese momento preciso.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "arquitectura"]

respuesta: verdadero

tipo: vf

enunciado: "¿Git es considerado un sistema de control de versiones distribuido, donde cada desarrollador tiene una copia completa del historial en su máquina local?"

explicacion: |
  Correcto. A diferencia de los sistemas centralizados (como SVN), en Git cada clon es un repositorio completo con todo el historial, lo que permite trabajar sin conexión y ofrece mayor seguridad.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "workflow", "ordenar"]

respuesta_orden: ["git add", "git commit", "git push"]
tipo: ordenar
opciones_explicitas: ["git add", "git commit", "git push"]

enunciado: "Ordena los siguientes comandos según el flujo lógico estándar para enviar cambios locales a un repositorio remoto:"

pasos:
  - "1. Preparar los archivos en el área de stage (index)."
  - "2. Confirmar los cambios en el repositorio local con un mensaje."
  - "3. Subir los cambios confirmados al servidor remoto."

explicacion: |
  Primero se seleccionan los cambios con 'add', luego se crean la versión con 'commit' y finalmente se envían al servidor con 'push'.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["colaboracion", "git"]

tipo: mc
opciones_explicitas: ["Permite que varios desarrolladores trabajen en el mismo archivo simultáneamente sin sobrescribir el trabajo de otros", "Obliga a que un solo programador trabaje a la vez para evitar errores", "Sirve únicamente para guardar copias de seguridad en la nube", "Es una herramienta que reemplaza la necesidad de realizar pruebas de software"]
respuesta: "Permite que varios desarrolladores trabajen en el mismo archivo simultáneamente sin sobrescribir el trabajo de otros"

enunciado: "Una de las razones principales por las que el control de versiones es esencial para el trabajo en equipo es que ___."

explicacion: |
  Los sistemas de control de versiones permiten la ramificación (branching) y la fusión (merging), facilitando que múltiples personas colaboren en la misma base de código de forma organizada.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Git es un sistema de control de versiones distribuido que permite rastrear cambios en los archivos de un proyecto de software a lo largo del tiempo."

explicacion: |
  Efectivamente, Git permite que cada desarrollador tenga una copia completa del historial, facilitando el trabajo colaborativo y la recuperación de versiones anteriores.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

variables:
  escenario: uno_de([["El desarrollador modificó el archivo main.py", "modificación"], ["El desarrollador borró el archivo README.md", "eliminación"], ["El desarrollador creó un nuevo archivo utils.py", "creación"]])

respuesta: escenario[1]
tipo: mc

opciones_explicitas: ["modificación", "eliminación", "creación"]

enunciado: "En un proyecto de software, si un colaborador ejecuta un comando para registrar que ha borrado un archivo, ¿qué tipo de cambio está realizando en el historial?"

explicacion: |
  El cambio registrado es una {escenario[0]}. En el control de versiones, cada acción (crear, modificar, borrar) genera un nuevo estado en el historial.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "workflow"]

respuesta_orden: ["git add", "git commit", "git push"]
tipo: ordenar

opciones_explicitas: ["git add", "git commit", "git push"]

enunciado: "Un desarrollador desea enviar sus cambios locales a un repositorio remoto (como GitHub). Ordene los comandos necesarios para realizar este proceso de forma secuencial:"

pasos:
  - "1. Preparar los archivos en el área de preparación (staging area)."
  - "2. Crear un punto de control en el historial local con un mensaje descriptivo."
  - "3. Subir los commits locales al servidor remoto."

explicacion: |
  El flujo estándar es: primero se seleccionan los archivos (add), luego se empaquetan con un mensaje (commit) y finalmente se envían al servidor (push).
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "conceptos"]

respuesta: "mensaje"
tipo: completar
respuestas_validas:
  - "mensaje"

enunciado: "Para que un commit sea útil en un equipo de trabajo, es fundamental incluir un ___ descriptivo que explique qué cambios se realizaron."

explicacion: |
  Un commit sin un mensaje claro dificulta la comprensión del historial para otros miembros del equipo.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["git", "conflictos"]

variables:
  escenarios: [["Dos personas editaron la misma línea del archivo index.html", "conflicto"], ["Una persona editó el archivo A y otra el archivo B", "sin_problema"], ["Una persona borró un archivo que otra persona estaba usando", "conflicto"]]
  idx: uno_de([0, 1, 2])
  escenario_actual: escenarios[idx]
  descripcion: escenario_actual[0]
  respuesta_correcta: escenario_actual[1]

respuesta: respuesta_correcta
tipo: mc

opciones_explicitas: ["conflicto", "sin_problema"]

enunciado: "Analiza el siguiente escenario: {descripcion}. ¿Qué situación se presenta al intentar fusionar (merge) los cambios?"

explicacion: |
  Cuando dos cambios incompatibles ocurren en la misma parte de un archivo, Git no puede decidir automáticamente qué versión mantener y genera un conflicto.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

tipo: mc
opciones_explicitas: ["Una copia de seguridad en la nube para no perder archivos", "Un sistema para rastrear cambios y permitir la colaboración", "Un editor de texto avanzado para programadores", "Un sistema de mensajería para equipos de desarrollo"]
respuesta: "Un sistema para rastrear cambios y permitir la colaboración"
enunciado: "Un sistema de control de versiones como Git es esencial principalmente porque permite ___."
explicacion: |
  El control de versiones no es solo una copia de seguridad; su función principal es registrar la historia de cambios para que múltiples personas puedan trabajar en el mismo proyecto sin sobrescribir el trabajo de otros.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

tipo: vf

enunciado: "Si realizo cambios en un archivo y presiono 'Guardar' (Ctrl+S) en mi editor de código, estos cambios quedan registrados automáticamente en el historial de commits de Git."

respuesta: falso

explicacion: |
  Falso. 'Guardar' solo escribe los cambios en el disco local. Para que Git registre un cambio en su historial, es necesario realizar un 'commit' tras haber añadido los archivos al área de preparación (staging area).
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "flujo_de_trabajo"]

tipo: completar
respuestas_validas:
  - "no es visible para mis compañeros"
respuesta: "no es visible para mis compañeros"

enunciado: "Si un desarrollador realiza un commit en su repositorio local, la situación es: ___."

pasos:
  - "Realizar cambios en el código"
  - "Ejecutar 'git add' para preparar los cambios"
  - "Ejecutar 'git commit' para crear la versión local"

explicacion: |
  El repositorio local es privado a la máquina del desarrollador. Para que otros vean los cambios, se debe realizar un 'push' hacia un repositorio remoto (como GitHub o GitLab).
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "flujo_de_trabajo"]

tipo: ordenar
opciones_explicitas: ["modificar archivos", "git add", "git commit", "git push"]

enunciado: "Ordena los pasos lógicos para subir un cambio desde tu máquina local hasta que esté disponible para el equipo en el servidor remoto:"

explicacion: |
  Primero modificas el contenido, luego preparas los archivos con 'add', creas la versión con 'commit' y finalmente la envías al servidor con 'push'.
respuesta_orden: ["modificar archivos", "git add", "git commit", "git push"]
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["git", "flujo_de_trabajo"]

tipo: mc
opciones_explicitas: ["trabajar directamente en la rama 'main'", "crear una rama nueva para una función", "hacer un merge de una rama con conflictos"]

enunciado: "En un entorno de equipo, ¿cuál de las siguientes prácticas es la de mayor riesgo, ya que suele causar errores en la versión estable?"

respuesta: "trabajar directamente en la rama 'main'"

explicacion: |
  Trabajar directamente en la rama principal (main/master) es peligroso porque cualquier error cometido durante el desarrollo se integra inmediatamente a la versión que se supone es funcional y estable. Se recomienda usar 'feature branches'.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos_basicos"]

tipo: mc
opciones_explicitas: ["Un sistema de gestión de archivos en la nube", "Un sistema de control de versiones distribuido", "Un editor de texto para programadores", "Un lenguaje de programación"]

respuesta: "Un sistema de control de versiones distribuido"

enunciado: "A diferencia de un simple respaldo de archivos en la nube, Git es un ___."

explicacion: |
  Git es un sistema de control de versiones distribuido que permite rastrear cambios en el código y trabajar de forma colaborativa sin depender de un único servidor centralizado para todo el historial.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "backup"]

tipo: vf

enunciado: "Un sistema de control de versiones como Git es lo mismo que realizar copias de seguridad (backups) manuales de una carpeta de proyecto."

respuesta: falso

explicacion: |
  Aunque Git ayuda a no perder trabajo, su propósito principal es el seguimiento de la evolución de los cambios (historial, ramas, merges) y la colaboración, no es simplemente una copia de seguridad de archivos.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["colaboracion", "flujo_trabajo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["desarrollador_A", "desarrollador_B"], ["usuario_X", "usuario_Y"]]

tipo: completar
respuestas_validas:
  - "merge"
respuesta: "merge"

enunciado: "Cuando dos personas trabajan en la misma línea de un archivo, al intentar integrar sus cambios, el sistema de control de versiones debe realizar un ___ para unir las historias."

explicacion: |
  El proceso de integrar cambios de una rama a otra se llama 'merge'. Si los cambios chocan en la misma línea, surge un 'conflicto' que debe ser resuelto manualmente.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["flujo_git", "orden"]

tipo: ordenar
opciones_explicitas: ["modificar_archivo", "hacer_commit", "hacer_push"]
respuesta_orden: ["modificar_archivo", "hacer_commit", "hacer_push"]

enunciado: "Ordena los pasos lógicos para enviar tus cambios locales a un repositorio remoto:"

explicacion: |
  Primero debes realizar los cambios en el archivo, luego registrar esos cambios en tu historial local con un 'commit', y finalmente enviarlos al servidor remoto con un 'push'.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["commit", "metadatos"]

variables:
  datos: [["mensaje descriptivo", verdadero], ["solo un espacio", falso]]

tipo: mc
opciones_explicitas: ["Es obligatorio incluir un mensaje descriptivo", "El mensaje es opcional pero recomendado", "El mensaje solo lo pone el administrador", "No se puede hacer commit sin internet"]

respuesta: "Es obligatorio incluir un mensaje descriptivo"

enunciado: "En un flujo de trabajo profesional, un commit se distingue de un simple guardado de archivo porque requiere un {datos[0][0]} que explique el cambio."

explicacion: |
  Aunque técnicamente se puede hacer un commit con mensajes vacíos en algunas configuraciones, en el desarrollo profesional es una regla fundamental para mantener la trazabilidad del proyecto.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

variables:
  idx: uno_de([0,1,2])
  datos: [["un equipo de 5 programadores trabajando en el mismo archivo", "Permite trabajar en paralelo sin sobrescribir el trabajo de otros"], ["un solo programador trabajando solo en su PC", "Hace que el código sea más rápido de ejecutar"], ["un equipo que no usa herramientas de control", "Evita que los programadores tengan que escribir código"]]

enunciado: "En el escenario de {datos[idx][0]}, ¿cuál es la principal ventaja de utilizar un sistema de control de versiones como Git?"

opciones_explicitas: ["Permite trabajar en paralelo sin sobrescribir el trabajo de otros", "Hace que el código sea más rápido de ejecutar", "Evita que los programadores tengan que escribir código"]

respuesta: datos[idx][1]

tipo: mc

explicacion: |
  El control de versiones permite que múltiples personas trabajen en la misma base de código simultáneamente, gestionando las integraciones y evitando que los cambios de uno borren los del otro.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "workflow"]

enunciado: "En Git, realizar un 'commit' equivale a ___."

respuestas_validas:
  - "guardar un cambio con un mensaje descriptivo"

respuesta: "guardar un cambio con un mensaje descriptivo"

tipo: completar

explicacion: |
  Un commit es una captura (snapshot) de los cambios realizados en los archivos, acompañada de un mensaje que explica qué se hizo.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "arquitectura"]

enunciado: "Git es un sistema de control de versiones de tipo distribuido, lo que significa que cada desarrollador tiene una copia completa del historial en su máquina local. ¿Es esto verdadero?"

respuesta: verdadero

tipo: vf
explicacion: |
  A diferencia de los sistemas centralizados, en Git cada clon es un repositorio completo con todo su historial, lo que permite trabajar sin conexión y ofrece mayor seguridad.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "workflow"]

opciones_explicitas: ["Modificar archivos", "Realizar un commit", "Enviar cambios al servidor remoto (push)"]

respuesta_orden: ["Modificar archivos", "Realizar un commit", "Enviar cambios al servidor remoto (push)"]

tipo: ordenar

enunciado: "Ordena los pasos lógicos para subir un cambio local a un repositorio remoto (como GitHub):"

explicacion: |
  Primero modificas el contenido, luego creas un punto de control local (commit) y finalmente subes esa historia al servidor (push).
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["git", "conflictos"]

variables:
  idx: uno_de([0,1,2])
  datos: [["dos personas modificaron la misma línea de un archivo", "Se produce un conflicto de fusión (merge conflict)"], ["una persona modificó un archivo y otra borró el mismo archivo", "Se produce un conflicto de fusión (merge conflict)"], ["una persona añadió una función nueva en un archivo distinto", "Git lo resuelve automáticamente sin avisar"]]

enunciado: "Si ocurre la situación: {datos[idx][0]}, ¿qué sucede en Git?"

opciones_explicitas: ["Se produce un conflicto de fusión (merge conflict)", "Git lo resuelve automáticamente sin avisar", "El repositorio se bloquea permanentemente"]

respuesta: datos[idx][1]

tipo: mc

explicacion: |
  Cuando los cambios son en líneas distintas o archivos distintos, Git puede fusionar automáticamente. Si los cambios chocan en la misma línea, el usuario debe resolver el conflicto manualmente.
```

