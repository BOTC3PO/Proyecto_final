### 1 — Arquitectura vs Diseño
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

### 2 — Acoplamiento y Cohesión
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["acoplamiento", "cohesion"]

variables:
  escenario: uno_de([["bajo", "alto"], ["alto", "bajo"], ["alto", "alto"]])

respuesta: escenario[0][0]
tipo: "vf"

enunciado: "En un sistema con buen diseño, buscamos que el acoplamiento sea ___ y la cohesión sea ___."

explicacion: |
  Un bajo acoplamiento minimiza la dependencia entre módulos, facilitando cambios. Una alta cohesión asegura que cada módulo tenga una responsabilidad única y clara.
```

### 3 — Monolito vs Microservicios
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["monolito", "microservicios", "despliegue"]

respuesta: "microservicios"
tipo: "completar"
respuestas_validas: ["microservicios"]

enunciado: "A diferencia de una arquitectura de tipo ___, donde todos los componentes están en un único paquete desplegable, la arquitectura de ___ divide la aplicación en servicios independientes que se comunican por red."

explicacion: |
  Los microservicios permiten escalar partes específicas del sistema de forma independiente, algo que en un monolito requiere escalar toda la aplicación.
```

### 4 — Patrones de Arquitectura
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["capas", "arquitectura", "orden"]

respuesta: ["Presentación", "Lógica de Negocio", "Acceso a Datos"]
tipo: "ordenar"
opciones_explicitas: ["Acceso a Datos", "Lógica de Negocio", "Presentación"]

enunciado: "Ordene las capas de una arquitectura clásica en capas (N-Tier) desde la más cercana al usuario hasta la más cercana a la base de datos:"

explicacion: |
  La capa de Presentación maneja la interfaz, la de Lógica de Negocio procesa las reglas y la de Acceso a Datos gestiona la persistencia.
```

### 5 — Calidad de Software
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