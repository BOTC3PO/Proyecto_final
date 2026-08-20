### 1 — El patrón Singleton
```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["creacionales", "singleton"]

variables:
  idx: uno_de([0, 1])
  escenario: uno_de([
    ["Instancia única garantizada", "Permite múltiples instancias"],
    ["Dificulta el testing unitario", "Facilita el testing unitario"]
  ])[idx]

enunciado: "El patrón Singleton se utiliza para asegurar que una clase tenga una única instancia y proporciona un punto de acceso global a ella. Sin embargo, una crítica común es que su uso excesivo puede ___."

opciones_explicitas: ["mejorar la modularidad", "crear un estado global difícil de testear", "aumentar la velocidad de ejecución", "eliminar la necesidad de clases"]

respuesta: escenario[1]
tipo: mc

explicacion: |
  El patrón Singleton es criticado frecuentemente porque introduce un estado global en la aplicación, lo que dificulta el aislamiento de componentes durante las pruebas unitarias (testing), ya que el estado de la instancia persiste entre diferentes tests.
```

### 2 — Principio de Responsabilidad Única (SRP)
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

### 3 — Inyección de Dependencias vs. Control de Dependencias
```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "avanzado"
  tags: ["inversion_de_control", "di"]

variables:
  caso: uno_de([
    ["El objeto crea sus propias dependencias internamente.", "El objeto recibe sus dependencias desde el exterior."],
    ["El objeto recibe sus dependencias desde el exterior.", "El objeto crea sus propias dependencias internamente."]
  ])[0]

enunciado: "En el patrón de Inyección de Dependencias (DI), el comportamiento correcto es que ___"

opciones_explicitas: ["el objeto crea sus propias dependencias internamente", "el objeto recibe sus dependencias desde el exterior"]

respuesta: "el objeto recibe sus dependencias desde el exterior"
tipo: mc

explicacion: |
  La Inyección de Dependencias es una forma de Inversión de Control (IoC) donde las dependencias de un objeto se le pasan (inyectan) desde el exterior (por constructor, setter o interfaz), en lugar de que el objeto las instancie por sí mismo.
```

### 4 — Orden de implementación de un patrón Factory
```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["creacionales", "factory"]

enunciado: "Para implementar correctamente un patrón Factory Method y asegurar la extensibilidad, se deben seguir estos pasos en orden:"

opciones_explicitas: ["Definir la interfaz del producto", "Crear las implementaciones concretas del producto", "Implementar la clase creadora con el método factory"]

respuesta: ["Definir la interfaz del producto", "Crear las implementaciones concretas del producto", "Implementar la clase creadora con el método factory"]
tipo: ordenar

explicacion: |
  Primero se define qué es lo que se va a crear (la interfaz del producto), luego se crean las versiones específicas (productos concretos) y finalmente se crea la lógica que decide qué producto instanciar (el método factory en la clase creadora).
```

### 5 — Acoplamiento y Cohesión
```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["calidad_codigo", "acoplamiento"]

variables:
  valor: uno_de([0, 1])
  objetivo_acoplamiento: uno_de(["alto", "bajo"])
  objetivo_cohesion: uno_de(["baja", "alta"])

enunciado: "En un diseño de software de alta calidad, buscamos que el acoplamiento entre módulos sea ___ y que la cohesión dentro de un módulo sea ___."

opciones_explicitas: ["alto y baja", "bajo y alta"]

respuesta: "bajo y alta"
tipo: mc

explicacion: |
  El acoplamiento bajo significa que los módulos son independientes y cambian poco entre sí. La cohesión alta significa que los elementos de un módulo están estrechamente relacionados y trabajan para un único objetivo.
```