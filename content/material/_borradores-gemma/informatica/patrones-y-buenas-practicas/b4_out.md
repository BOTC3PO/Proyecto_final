### 1 — Patrones vs. Algoritmos
```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "intermedio"
  tags: ["patrones_de_diseno", "conceptos_basicos"]

respuesta: "algoritmo"
tipo: completar
respuestas_validas: ["algoritmo"]

enunciado: "Mientras que un patrón de diseño es una solución general a un problema recurrente de diseño de software, un ___ es una secuencia de pasos finitos y precisos para resolver un problema computacional específico."

explicacion: |
  Un patrón de diseño es una plantilla de alto nivel para resolver problemas de estructura, mientras que un algoritmo es una receta paso a paso para realizar un cálculo o tarea.
```

### 2 — Singleton vs. Factory
```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["creacionales", "singleton", "factory"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: uno_de(["Singleton", "Factory"])
tipo: mc
opciones_explicitas: ["Singleton", "Factory"]

enunciado: "Si el objetivo principal es garantizar que una clase tenga una única instancia en toda la aplicación, estamos ante un patrón ___."

explicacion: |
  El patrón Singleton asegura una instancia única, mientras que el patrón Factory se encarga de delegar la responsabilidad de la creación de objetos a una clase especializada.
```

### 3 — Acoplamiento y Cohesión
```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "avanzado"
  tags: ["limpieza_de_codigo", "principios"]

respuesta: falso
tipo: vf

enunciado: "En el diseño de software orientado a objetos, una buena práctica consiste en buscar un diseño con alto acoplamiento y baja cohesión."

explicacion: |
  Es exactamente lo contrario: se busca un **bajo acoplamiento** (que los módulos sean independientes) y una **alta cohesión** (que cada módulo haga una sola cosa y la haga bien).
```

### 4 — Ciclo de vida de un Patrón
```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["procesos", "desarrollo"]

respuesta: ["Identificar el problema", "Elegir el patrón adecuado", "Implementar la solución", "Refactorizar si es necesario"]
tipo: ordenar
opciones_explicitas: ["Identificar el problema", "Elegir el patrón adecuado", "Implementar la solución", "Refactorizar si es necesario"]

enunciado: "Ordene los pasos lógicos para aplicar correctamente un patrón de diseño en un proyecto de software:"

explicacion: |
  El proceso comienza con la comprensión del problema, seguido de la selección del patrón, la codificación y finalmente la revisión/refactorización para asegurar la calidad.
```

### 5 — Interface vs. Clase Abstracta
```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "avanzado"
  tags: ["oop", "herencia", "interfaces"]

variables:
  caso_idx: uno_de([0, 1])

respuesta: uno_de(["interfaz", "clase_abstracta"])
tipo: mc
opciones_explicitas: ["interfaz", "clase_abstracta"]

enunciado: "Si necesitamos definir un contrato que solo especifique comportamientos (métodos sin implementación) sin poseer estado o lógica compartida, lo más adecuado es usar una {caso_idx == 0 ? 'interfaz' : 'clase_abstracta'}."

explicacion: |
  Las interfaces definen "qué" puede hacer un objeto (contrato puro), mientras que las clases abstractas pueden definir "cómo" se hace algo (compartiendo código y estado) pero impidiendo la instanciación directa.
```