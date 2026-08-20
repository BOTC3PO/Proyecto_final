### 1 — Definición de Arquitectura de Software
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

tipo: mc
opciones_explicitas: ["El diseño detallado de algoritmos y estructuras de datos", "La estructura fundamental de un sistema y sus componentes", "La escritura de código siguiendo un estándar de estilo", "La gestión de los servidores donde se aloja la aplicación"]

enunciado: "La arquitectura de software se define principalmente como ___."

explicacion: |
  La arquitectura de software se refiere a la estructura de alto nivel de un sistema, incluyendo sus componentes, las relaciones entre ellos y los principios que rigen su diseño y evolución.
```

### 2 — Atributos de Calidad (Requerimientos No Funcionales)
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["calidad", "requerimientos"]

variables:
  es_calidad: true

tipo: vf

enunciado: "Los atributos de calidad (como la escalabilidad, la seguridad y la disponibilidad) forman parte de los requerimientos no funcionales del sistema. ¿Es esto verdadero?"

explicacion: |
  Correcto. Mientras que los requerimientos funcionales describen qué hace el sistema, los no funcionales (atributos de calidad) describen cómo se comporta el sistema bajo ciertas condiciones.
```

### 3 — Ciclo de Vida del Desarrollo
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
```

### 4 — Patrones de Arquitectura
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

respuestas_validas: ["Un solo bloque de código donde todo está interconectado", "Un conjunto de servicios pequeños e independientes"]
respuesta: escenario[idx][1]

explicacion: |
  La arquitectura Monolítica centraliza toda la lógica en una única unidad, mientras que los Microservicios descomponen la aplicación en servicios autónomos que se comunican entre sí.
```

### 5 — Acoplamiento y Cohesión
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["principios", "calidad_codigo"]

variables:
  es_bueno: false

tipo: vf

enunciado: "En un buen diseño de arquitectura de software, se busca que los componentes tengan un alto acoplamiento y una baja cohesión. ¿Es esto correcto?"

explicacion: |
  Falso. Un buen diseño busca **bajo acoplamiento** (que los componentes dependan poco entre sí) y **alta cohesión** (que cada componente tenga una responsabilidad única y bien definida).
```