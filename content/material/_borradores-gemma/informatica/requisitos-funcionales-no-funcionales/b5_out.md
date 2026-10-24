### 1 — Identificación de requisitos
```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["ingenieria_software", "requisitos"]

variables:
  escenario: uno_de([
    ["El sistema debe permitir al usuario resetear su contraseña mediante un email.", "funcional"],
    ["El sistema debe responder a cualquier consulta en menos de 2 segundos.", "no_funcional"],
    ["El sistema debe cifrar todos los datos sensibles con AES-256.", "no_funcional"],
    ["El sistema debe generar un reporte PDF de las ventas mensuales.", "funcional"]
  ])
  idx: uno_de([0,1,2,3])

enunciado: "En el siguiente escenario: '{escenario[idx][0]}', el tipo de requisito es: ___"

respuestas_validas: ["funcional", "no_funcional"]
respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  Los requisitos funcionales definen qué hace el sistema (acciones, servicios), mientras que los no funcionales definen cómo lo hace (atributos de calidad como velocidad, seguridad o disponibilidad).
```

### 2 — Clasificación de atributos
```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["calidad_software", "rendimiento"]

variables:
  caso: uno_de([
    ["Capacidad de carga de 1000 usuarios concurrentes", "Rendimiento"],
    ["Disponibilidad del sistema del 99.9%", "Disponibilidad"],
    ["Facilidad de navegación para usuarios con discapacidad", "Usabilidad"],
    ["Protección contra ataques de inyección SQL", "Seguridad"]
  ])
  idx: uno_de([0,1,2,3])

enunciado: "El enunciado '{caso[idx][0]}' pertenece a la categoría de requisitos no funcionales de tipo: ___"

respuestas_validas: ["Rendimiento", "Disponibilidad", "Usabilidad", "Seguridad"]
respuesta: caso[idx][1]
tipo: completar

explicacion: |
  Los requisitos no funcionales se agrupan en categorías como rendimiento, seguridad, usabilidad, disponibilidad y mantenibilidad.
```

### 3 — ¿Es un requisito funcional?
```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["logica", "requisitos"]

variables:
  item: uno_de([
    ["El sistema debe permitir eliminar una cuenta de usuario.", verdadero],
    ["El sistema debe ser compatible con navegadores Chrome y Firefox.", falso],
    ["El sistema debe emitir una alerta si el stock es bajo.", verdadero],
    ["El sistema debe tener una interfaz de colores suaves.", falso]
  ])
  idx: uno_de([0,1,2,3])

enunciado: "Analiza el siguiente requerimiento: '{item[idx][0]}'. ¿Es un requisito funcional?"

respuesta: item[idx][1]
tipo: vf

explicacion: |
  Si el requerimiento describe una funcionalidad o acción que el usuario puede realizar, es funcional. Si describe una restricción o una característica de calidad, es no funcional.
```

### 4 — Selección de categoría
```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["requisitos", "clasificacion"]

variables:
  ejemplo: uno_de([
    ["El sistema debe permitir buscar productos por nombre.", "Funcional"],
    ["El sistema debe estar disponible las 24 horas del día.", "No Funcional"],
    ["El sistema debe permitir subir archivos de hasta 5MB.", "Funcional"],
    ["El sistema debe ser fácil de aprender para nuevos empleados.", "No Funcional"]
  ])
  idx: uno_de([0,1,2,3])

enunciado: "Dado el requerimiento: '{ejemplo[idx][0]}', ¿cuál es su clasificación correcta?"

opciones_explicitas: ["Funcional", "No Funcional"]
respuesta: ejemplo[idx][1]
tipo: mc

explicacion: |
  La distinción clave es si el requisito describe un comportamiento del sistema (Funcional) o una restricción sobre cómo opera el sistema (No Funcional).
```

### 5 — Orden lógico de definición
```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "avanzado"
  tags: ["proceso", "ingenieria_software"]

variables:
  secuencia: ["Identificar necesidades del cliente", "Definir requisitos funcionales", "Definir requisitos no funcionales", "Validar especificaciones"]

enunciado: "Ordena los pasos lógicos en el proceso de ingeniería de requisitos, desde la detección de la necesidad hasta la validación final:"

opciones_explicitas: ["Identificar necesidades del cliente", "Definir requisitos funcionales", "Definir requisitos no funcionales", "Validar especificaciones"]
respuesta: ["Identificar necesidades del cliente", "Definir requisitos funcionales", "Definir requisitos no funcionales", "Validar especificaciones"]
tipo: ordenar

explicacion: |
  El proceso estándar comienza con el levantamiento de necesidades, seguido de la especificación de qué hará el sistema (funcionales) y cómo lo hará (no funcionales), para terminar con la validación de que lo documentado es correcto.
```