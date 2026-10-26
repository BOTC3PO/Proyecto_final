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
  escenario_idx: uno_de([0, 1])
  escenarios: [[["Permitir el registro de nuevos usuarios", "La contraseña debe estar encriptada"], ["Generar un reporte de ventas", "El sistema debe estar disponible el 99% del tiempo"]]]

enunciado: "Dado el siguiente par de requisitos: {escenarios[escenario_idx][0]} y {escenarios[escenario_idx][1]}, el segundo requisito es de tipo:"

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
respuestas_validas: ["usabilidad", "seguridad", "rendimiento"]

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

respuesta: ["Elicitación", "Análisis", "Especificación", "Validación"]

explicacion: |
  El proceso comienza con la obtención de información (Elicitación), luego se procesa (Análisis), se documenta (Especificación) y finalmente se revisa con el cliente (Validación).
```