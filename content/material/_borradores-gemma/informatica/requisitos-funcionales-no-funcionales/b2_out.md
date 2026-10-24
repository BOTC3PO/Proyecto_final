### 1 — Clasificación de requisitos
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

### 2 — El caso del tiempo de respuesta
```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["rendimiento", "no_funcionales"]

variables:
  escenario: uno_de([
    ["El sistema debe procesar un pago en menos de 2 segundos.", "Rendimiento"],
    ["La base de datos debe estar disponible el 99.9% del tiempo.", "Disponibilidad"],
    ["Las contraseñas deben estar encriptadas con AES-256.", "Seguridad"]
  ])

tipo: mc
opciones_explicitas: ["Requisito Funcional", "Requisito No Funcional"]

enunciado: "Analizando el siguiente caso: '{escenario[0]}'. ¿A qué categoría pertenece?"

respuesta: escenario[1]

explicacion: |
  El enunciado describe una restricción sobre la calidad o el rendimiento del servicio (cuánto tarda), lo cual es un requisito no funcional.
```

### 3 — Completar la definición
```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["definiciones"]

tipo: completar
respuestas_validas: ["usabilidad", "seguridad", "rendimiento"]

enunciado: "Si un cliente solicita que la interfaz sea intuitiva y fácil de aprender para personas mayores, está definiendo un requisito de ___."

respuesta: "usabilidad"

explicacion: |
  La facilidad de uso y la experiencia de usuario (UX) son atributos de calidad, por lo tanto, son requisitos no funcionales de usabilidad.
```

### 4 — Verdad o Falso: El alcance
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

### 5 — Ordenar el proceso de ingeniería
```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["ciclo_vida", "ingenieria"]

tipo: ordenar
opciones_explicitas: ["Elicitación (recolección)", "Análisis de requisitos", "Especificación", "Validación"]

respuesta: ["Elicitación (recolección)", "Análisis de requisitos", "Especificación", "Validación"]

enunciado: "Ordena las etapas lógicas del proceso de ingeniería de requisitos, desde que se habla con el cliente hasta que se confirma que lo documentado es correcto."

explicacion: |
  El proceso estándar comienza con la recolección de información (Elicitación), luego se estudia su viabilidad (Análisis), se redacta formalmente (Especificación) y finalmente se revisa con el cliente (Validación).
```