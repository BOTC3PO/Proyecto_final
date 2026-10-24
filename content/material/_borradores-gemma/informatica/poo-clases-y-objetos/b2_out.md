### 1 — El molde y la instancia
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["conceptos", "clases", "objetos"]

respuesta: "clase"
tipo: "mc"
opciones_explicitas: ["objeto", "clase", "atributo", "metodo"]

enunciado: "En programación orientada a objetos, si imaginamos que un 'Plano de una Casa' es el diseño general, el plano en sí mismo es la ___."

explicacion: |
  La clase actúa como un molde o plano que define las características y comportamientos, mientras que el objeto es la instancia concreta creada a partir de ese molde.
```

### 2 — Atributos de un Vehículo
```
metadata:
  materia: "informatica"
  tema: "poo_atributos"
  nivel: "basico"
  tags: ["atributos", "estado"]

variables:
  escenario: uno_de([
    ["color", "marca", "modelo"],
    ["modelo", "color", "marca"],
    ["marca", "modelo", "color"]
  ])

respuesta: escenario[0]
tipo: "completar"
respuestas_validas: ["color", "marca", "modelo"]

enunciado: "Si definimos una clase 'Auto' con las propiedades 'color', 'marca' y 'modelo', estas propiedades se conocen como ___."

explicacion: |
  Los atributos representan el estado o las características de un objeto (en este caso, las propiedades del auto).
```

### 3 — Comportamiento de un Perro
```
metadata:
  materia: "informatica"
  tema: "poo_metodos"
  nivel: "basico"
  tags: ["metodos", "comportamiento"]

respuesta: verdadero
tipo: "vf"

enunciado: "En una clase llamada 'Perro', una función llamada 'ladrar()' que define una acción que el objeto puede realizar es un método."

explicacion: |
  Los métodos son las funciones definidas dentro de una clase que representan las acciones o comportamientos de los objetos.
```

### 4 — Creación de un objeto paso a paso
```
metadata:
  materia: "informatica"
  tema: "poo_instanciacion"
  nivel: "intermedio"
  tags: ["instanciacion", "orden"]

respuesta: ["Definir la clase", "Instanciar el objeto", "Acceder a sus atributos"]
tipo: "ordenar"
opciones_explicitas: ["Acceder a sus atributos", "Instanciar el objeto", "Definir la clase"]

enunciado: "Ordena los pasos lógicos para utilizar un objeto en un programa:"

explicacion: |
  Primero debes tener el molde (clase), luego creas la instancia (objeto) y finalmente puedes interactuar con su información o acciones.
```

### 5 — Cálculo de área con atributos
```
metadata:
  materia: "informatica"
  tema: "poo_calculo_metodos"
  nivel: "intermedio"
  tags: ["metodos", "calculo"]

variables:
  datos: uno_de([
    [5.0, 10.0, 50.0],
    [3.0, 4.0, 12.0],
    [2.0, 6.0, 12.0]
  ])

respuesta: datos[2]
tipo: "input"
tolerancia_abs: 0

enunciado: "Tenemos una clase 'Rectangulo' con los atributos 'base' y 'altura'. Si un objeto de esta clase tiene base = {datos[0]} y altura = {datos[1]}, ¿cuál es el valor resultante del método 'calcular_area()'?"

pasos:
  - "Identificar los valores de base y altura."
  - "Aplicar la fórmula: base * altura."

explicacion: |
  El método calcula el área multiplicando los atributos internos del objeto: 5.0 * 10.0 = 50.0.
```