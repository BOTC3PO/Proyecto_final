# Informatica — Patrones y buenas practicas (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Patrón de Diseño

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "basico"
  tags: ["conceptos", "patrones"]

respuesta: "solucion"
tipo: "completar"
respuestas_validas:
  - "solucion"
  - "soluciones"

enunciado: "Un patrón de diseño es una ________ reutilizable que sirve para resolver un problema común dentro de un contexto de diseño de software."

explicacion: |
  Los patrones de diseño no son fragmentos de código, sino descripciones de soluciones a problemas recurrentes en el desarrollo de software.
```

### 2 — Clasificación de Patrones

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "basico"
  tags: ["clasificacion", "categorias"]

respuesta: "Creacionales"
tipo: "completar"

enunciado: "Si un programador utiliza el patrón 'Singleton' para asegurar que una clase tenga una única instancia, está utilizando un patrón de tipo: ___."

explicacion: |
  Los patrones se dividen en tres categorías principales según su propósito: Creacionales, Estructurales y de Comportamiento.
```

### 3 — Principios SOLID: Responsabilidad Única

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "intermedio"
  tags: ["solid", "buenas_practicas"]

respuesta: verdadero
tipo: "vf"

enunciado: "El principio de Responsabilidad Única (SRP) establece que una clase debe tener una, y solo una, razón para cambiar."

explicacion: |
  Correcto. El SRP busca que cada módulo o clase sea responsable de una única parte de la funcionalidad, facilitando el mantenimiento y la testabilidad.
```

### 4 — Ciclo de Vida de un Patrón

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "basico"
  tags: ["proceso", "desarrollo"]

respuesta_orden: ["Identificar el problema", "Analizar la solución existente", "Implementar el patrón", "Refactorizar el código"]
tipo: "ordenar"
opciones_explicitas: ["Identificar el problema", "Analizar la solución existente", "Implementar el patrón", "Refactorizar el código"]

enunciado: "Ordena los pasos lógicos para la aplicación correcta de un patrón de diseño en un sistema existente:"

explicacion: |
  Primero se debe entender el problema, luego evaluar si un patrón conocido aplica, se implementa y finalmente se refactoriza para asegurar la calidad.
```

### 5 — El concepto de Reutilización

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practices"
  nivel: "basico"
  tags: ["reutilizacion", "eficiencia"]

respuesta: "reutilizar"
tipo: "mc"
opciones_explicitas: ["reutilizar", "copiar"]

enunciado: "El objetivo principal de aplicar buenas prácticas y patrones es poder ________ la lógica de solución en diferentes partes del sistema sin duplicar código innecesariamente."

explicacion: |
  La reutilización es un pilar de la ingeniería de software que permite aumentar la productividad y reducir la probabilidad de errores.
```

### 6 — Patrón Singleton

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["creacionales", "singleton"]

variables:
  escenario: uno_de([["Gestión de conexión a base de datos", "DatabaseConnection"], ["Gestión de configuración global", "ConfigManager"], ["Gestión de sistema de logs", "LoggerInstance"]])

enunciado: "Se requiere implementar un patrón que garantice que una clase tenga una única instancia y proporcione un punto de acceso global a ella. En el caso de un {escenario[0]}, la clase sería {escenario[1]}."

opciones_explicitas: ["Singleton", "Factory", "Observer", "Strategy"]
respuesta: "Singleton"
tipo: "mc"

explicacion: |
  El patrón Singleton asegura que una clase tenga una única instancia durante toda la ejecución del programa, lo cual es ideal para recursos compartidos como conexiones a bases de datos o configuraciones.
```

### 7 — Patrón Observer (Completar)

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["comportamiento", "observer"]

enunciado: "En el patrón Observer, un objeto llamado 'Subject' mantiene una lista de sus dependientes. Cuando el estado del Subject cambia, este debe notificar a sus ___ para que actualicen su estado."

respuestas_validas:
  - "observadores"
  - "observers"
  - "subscriptores"
respuesta: "observadores"
tipo: "completar"

explicacion: |
  El patrón Observer define una relación de uno a muchos, donde cuando un objeto cambia su estado, todos sus dependientes (observadores) son notificados automáticamente.
```

### 8 — Refactorización: Extract Method

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["clean_code", "refactoring"]

variables:
  caso: uno_de([["un método que calcula el IVA, aplica un descuento y luego imprime el total", "calcular_total_con_impuestos"], ["un método que valida datos, conecta a la red y procesa un archivo", "procesar_archivo_seguro"]])

enunciado: "Tienes un método llamado '{caso[0]}' que es demasiado largo y realiza múltiples tareas distintas. Para aplicar la técnica de 'Extract Method', deberías dividirlo en métodos más pequeños y específicos. ¿Cuál es el objetivo principal de esta práctica?"

opciones_explicitas: ["Aumentar la complejidad del código", "Mejorar la legibilidad y reutilización", "Hacer que el código sea más lento", "Eliminar la necesidad de comentarios"]
respuesta: "Mejorar la legibilidad y reutilización"
tipo: "mc"

explicacion: |
  La extracción de métodos permite que cada función tenga una única responsabilidad (Single Responsibility Principle), facilitando la lectura y permitiendo reutilizar fragmentos de lógica en otros lugares.
```

### 9 — Principio de Responsabilidad Única (SRP)

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "intermedio"
  tags: ["solid", "srp"]

variables:
  clase_mala: uno_de([["Clase Usuario que guarda datos en BD y también envía emails", "Usuario"], ["Clase Factura que calcula totales y también genera un PDF", "Factura"]])

enunciado: "Si tenemos una clase llamada {clase_mala[0]} que realiza la lógica de negocio y además se encarga de la persistencia en base de datos y el envío de notificaciones, ¿está cumpliendo con el Principio de Responsabilidad Única (SRP)?"

opciones_explicitas: [verdadero, falso]
respuesta: falso
tipo: "vf"

explicacion: |
  El SRP dicta que una clase debe tener una, y solo una, razón para cambiar. Si una clase maneja lógica de negocio y también detalles de infraestructura (como BD o envío de emails), viola este principio.
```

### 10 — Flujo de un Patrón Command

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "avanzado"
  tags: ["comportamiento", "command"]

enunciado: "Para implementar correctamente el patrón Command, se deben seguir estos pasos en orden para transformar una acción en un objeto ejecutable:"

opciones_explicitas: ["Definir el Command con el método execute()", "Crear el Receiver que contiene la lógica real", "El Invoker solicita la ejecución al Command", "El Cliente instancia el Command y lo vincula al Receiver"]

respuesta_orden: ["Crear el Receiver que contiene la lógica real", "Definir el Command con el método execute()", "El Cliente instancia el Command y lo vincula al Receiver", "El Invoker solicita la ejecución al Command"]

tipo: "ordenar"

explicacion: |
  El patrón Command encapsula una solicitud como un objeto, permitiendo parametrizar clientes, colar solicitudes o soportar operaciones que se pueden deshacer (undo).
```

### 11 — El patrón Singleton

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["creacionales", "singleton"]

enunciado: "El patrón Singleton se utiliza para asegurar que una clase tenga una única instancia y proporciona un punto de acceso global a ella. Sin embargo, una crítica común es que su uso excesivo puede ___."

opciones_explicitas: ["mejorar la modularidad", "crear un estado global difícil de testear", "aumentar la velocidad de ejecución", "eliminar la necesidad de clases"]

respuesta: "crear un estado global difícil de testear"
tipo: mc

explicacion: |
  El patrón Singleton es criticado frecuentemente porque introduce un estado global en la aplicación, lo que dificulta el aislamiento de componentes durante las pruebas unitarias (testing), ya que el estado de la instancia persiste entre diferentes tests.
```

### 12 — Principio de Responsabilidad Única (SRP)

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["solid", "srp"]

variables:
  clase_nombre: uno_de(["GestorBaseDeDatos", "CalculadoraMatematica"])

enunciado: "De acuerdo al Principio de Responsabilidad Única (SRP), una clase como {clase_nombre} debe tener una única razón para cambiar. Si esta clase además de procesar datos también se encarga de la interfaz de usuario, se está violando este principio."

respuesta: falso
tipo: vf

explicacion: |
  El SRP establece que una clase debe tener una sola responsabilidad. Si una clase maneja lógica de negocio y también la presentación (UI), se vuelve rígida y difícil de mantener, violando el principio.
```

### 13 — Inyección de Dependencias vs. Control de Dependencias

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "avanzado"
  tags: ["inversion_de_control", "di"]

enunciado: "En el patrón de Inyección de Dependencias (DI), el comportamiento correcto es que ___"

opciones_explicitas: ["el objeto crea sus propias dependencias internamente", "el objeto recibe sus dependencias desde el exterior"]

respuesta: "el objeto recibe sus dependencias desde el exterior"
tipo: mc

explicacion: |
  La Inyección de Dependencias es una forma de Inversión de Control (IoC) donde las dependencias de un objeto se le pasan (inyectan) desde el exterior (por constructor, setter o interfaz), en lugar de que el objeto las instancie por sí mismo.
```

### 14 — Orden de implementación de un patrón Factory

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["creacionales", "factory"]

enunciado: "Para implementar correctamente un patrón Factory Method y asegurar la extensibilidad, se deben seguir estos pasos en orden:"

opciones_explicitas: ["Definir la interfaz del producto", "Crear las implementaciones concretas del producto", "Implementar la clase creadora con el método factory"]

respuesta_orden: ["Definir la interfaz del producto", "Crear las implementaciones concretas del producto", "Implementar la clase creadora con el método factory"]
tipo: ordenar

explicacion: |
  Primero se define qué es lo que se va a crear (la interfaz del producto), luego se crean las versiones específicas (productos concretos) y finalmente se crea la lógica que decide qué producto instanciar (el método factory en la clase creadora).
```

### 15 — Acoplamiento y Cohesión

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["calidad_codigo", "acoplamiento"]

enunciado: "En un diseño de software de alta calidad, buscamos que el acoplamiento entre módulos sea ___ y que la cohesión dentro de un módulo sea ___."

opciones_explicitas: ["alto y baja", "bajo y alta"]

respuesta: "bajo y alta"
tipo: mc

explicacion: |
  El acoplamiento bajo significa que los módulos son independientes y cambian poco entre sí. La cohesión alta significa que los elementos de un módulo están estrechamente relacionados y trabajan para un único objetivo.
```

### 16 — Patrones vs. Algoritmos

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "intermedio"
  tags: ["patrones_de_diseno", "conceptos_basicos"]

respuesta: "algoritmo"
tipo: completar
respuestas_validas:
  - "algoritmo"

enunciado: "Mientras que un patrón de diseño es una solución general a un problema recurrente de diseño de software, un ___ es una secuencia de pasos finitos y precisos para resolver un problema computacional específico."

explicacion: |
  Un patrón de diseño es una plantilla de alto nivel para resolver problemas de estructura, mientras que un algoritmo es una receta paso a paso para realizar un cálculo o tarea.
```

### 17 — Singleton vs. Factory

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["creacionales", "singleton", "factory"]

respuesta: "Singleton"
tipo: mc
opciones_explicitas: ["Singleton", "Factory"]

enunciado: "Si el objetivo principal es garantizar que una clase tenga una única instancia en toda la aplicación, estamos ante un patrón ___."

explicacion: |
  El patrón Singleton asegura una instancia única, mientras que el patrón Factory se encarga de delegar la responsabilidad de la creación de objetos a una clase especializada.
```

### 18 — Acoplamiento y Cohesión

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

### 19 — Ciclo de vida de un Patrón

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["procesos", "desarrollo"]

respuesta_orden: ["Identificar el problema", "Elegir el patrón adecuado", "Implementar la solución", "Refactorizar si es necesario"]
tipo: ordenar
opciones_explicitas: ["Identificar el problema", "Elegir el patrón adecuado", "Implementar la solución", "Refactorizar si es necesario"]

enunciado: "Ordene los pasos lógicos para aplicar correctamente un patrón de diseño en un proyecto de software:"

explicacion: |
  El proceso comienza con la comprensión del problema, seguido de la selección del patrón, la codificación y finalmente la revisión/refactorización para asegurar la calidad.
```

### 20 — Interface vs. Clase Abstracta

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "avanzado"
  tags: ["oop", "herencia", "interfaces"]

respuesta: "interfaz"
tipo: mc
opciones_explicitas: ["interfaz", "clase_abstracta"]

enunciado: "Si necesitamos definir un contrato que solo especifique comportamientos (métodos sin implementación) sin poseer estado o lógica compartida, lo más adecuado es usar una ___."

explicacion: |
  Las interfaces definen "qué" puede hacer un objeto (contrato puro), mientras que las clases abstractas pueden definir "cómo" se hace algo (compartiendo código y estado) pero impidiendo la instanciación directa.
```

### 21 — El patrón Singleton

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["diseño", "creacionales"]

variables:
  escenario: uno_de([["Se requiere que una clase de conexión a base de datos solo tenga una instancia única en toda la aplicación.", "Singleton"], ["Se requiere que un objeto pueda tener múltiples representaciones (como un checkbox o un botón) según el contexto.", "Flyweight"], ["Se requiere que un objeto delegue la creación de otros objetos a una subclase.", "Factory Method"]])

tipo: mc
opciones_explicitas: ["Singleton", "Flyweight", "Factory Method", "Observer"]

enunciado: "Un desarrollador debe resolver el siguiente escenario: {escenario[0]} ¿Qué patrón de diseño debe aplicar?"

respuesta: escenario[1]

explicacion: |
  El patrón Singleton garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella.
```

### 22 — Refactorización de código

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["clean_code", "refactorizacion"]

variables:
  caso: uno_de([["Una función tiene 150 líneas de código y realiza tres tareas distintas.", "Dividir la función en funciones más pequeñas."], ["Una variable se llama 'x' y su valor cambia constantemente sin contexto claro.", "Renombrar la variable con un nombre descriptivo."], ["Un bloque de código se repite exactamente igual en tres archivos diferentes.", "Extraer el código repetido a una función o clase común."]])

tipo: completar
respuestas_validas:
  - "Dividir la función en funciones más pequeñas."
  - "Renombrar la variable con un nombre descriptivo."
  - "Extraer el código repetido a una función o clase común."

enunciado: "Para mejorar la mantenibilidad del software, se detecta que: {caso[0]} La acción recomendada es: ___"

respuesta: caso[1]

explicacion: |
  La legibilidad y la reutilización son pilares de las buenas prácticas. Cada caso presentado requiere una acción de refactorización específica para cumplir con principios como SOLID o Clean Code.
```

### 23 — Patrón Observer

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "avanzado"
  tags: ["comportamiento", "eventos"]

variables:
  escenario: uno_de([["Un sistema de clima donde varios sensores notifican cambios a una pantalla y a una base de datos simultáneamente.", "Observer"], ["Un sistema donde un objeto complejo se construye paso a paso mediante varios métodos.", "Builder"], ["Un sistema donde se envían mensajes de un emisor a múltiples receptores sin que estos se conozcan.", "PubSub"]])

tipo: vf
respuesta: verdadero

enunciado: "En el escenario: {escenario[0]}, el patrón de diseño que permite que un objeto (sujeto) notifique automáticamente a otros objetos (observadores) sobre cambios en su estado es el patrón {escenario[1]}."

explicacion: |
  El patrón Observer define una relación de uno a muchos, de modo que cuando el objeto cambia de estado, todos sus dependientes son notificados.
```

### 24 — Principio de Responsabilidad Única (SRP)

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "intermedio"
  tags: ["solid", "arquitectura"]

tipo: mc
opciones_explicitas: ["Responsabilidad Única", "Acoplamiento Fuerte", "Cohesión Baja", "Incapacidad de Testeo"]

enunciado: "Analizando el siguiente caso: Una clase 'Usuario' que gestiona los datos del perfil Y también se encarga de guardar el archivo en el disco. La clase está violando el principio de: ___"

respuesta: "Responsabilidad Única"

explicacion: |
  El Principio de Responsabilidad Única (SRP) establece que una clase debe tener una única razón para cambiar. Si una clase gestiona datos y además la persistencia, tiene dos responsabilidades.
```

### 25 — Ciclo de vida de un Bug

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["calidad", "procesos"]

tipo: ordenar
opciones_explicitas: ["Reportar error", "Asignar a desarrollador", "Corregir error", "Verificar solución", "Cerrar ticket"]
respuesta_orden: ["Reportar error", "Asignar a desarrollador", "Corregir error", "Verificar solución", "Cerrar ticket"]

enunciado: "Para asegurar la calidad de software, el proceso estándar de gestión de un defecto (bug) debe seguir este orden lógico: ___"

explicacion: |
  Un flujo de trabajo ordenado permite la trazabilidad del error desde su detección hasta su validación final por parte de QA.
```
