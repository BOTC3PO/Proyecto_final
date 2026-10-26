### 1 — Concepto de Clase
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "clases", "conceptos"]

respuesta: "molde"
tipo: completar
respuestas_validas: ["molde", "plantilla"]

enunciado: "En la programación orientada a objetos, una clase se define como un ___ para crear objetos."

explicacion: |
  Una clase actúa como un plano o molde que define la estructura (atributos) y el comportamiento (métodos) que tendrán los objetos creados a partir de ella.
```

### 2 — Atributos y Métodos
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "atributos", "metodos"]

opciones_explicitas: ["Estado (datos)", "Acciones (comportamiento)", "Ambas anteriores"]
respuesta: "Ambas anteriores"
tipo: mc

enunciado: "Un objeto se compone de atributos que representan su {estado} y métodos que representan su {comportamiento}. ¿Qué representan los atributos?"

explicacion: |
  Los atributos son variables que almacenan el estado o las características de un objeto, mientras que los métodos son funciones que definen lo que el objeto puede hacer.
```

### 3 — Instanciación
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "objetos", "instancia"]

respuesta: verdadero
tipo: vf

enunciado: "El proceso de crear un objeto a partir de una clase se denomina instanciación."

explicacion: |
  Correcto. El objeto resultante de este proceso es una 'instancia' de la clase.
```

### 4 — Diferencia entre Clase y Objeto
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "clases", "objetos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Perro", "Fido"], ["Auto", "Toyota"]]
  respuestas: [["Fido es una instancia de Perro", "Toyota es una instancia de Auto"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["datos[escenario_idx][0]", "datos[escenario_idx][1]"]

enunciado: "Si tenemos la clase {datos[escenario_idx][0]}, la afirmación correcta sobre un objeto es que {datos[escenario_idx][1]}."

explicacion: |
  La clase es la definición abstracta (Perro), mientras que el objeto es la realización concreta con datos específicos (Fido).
```

### 5 — Ciclo de creación de un objeto
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "ordenar", "proceso"]

opciones_explicitas: ["Definir la clase", "Declarar la variable", "Instanciar el objeto"]
respuesta: ["Definir la clase", "Declarar la variable", "Instanciar el objeto"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para tener un objeto listo para usar en memoria:"

explicacion: |
  Primero se debe diseñar el plano (clase), luego reservar el nombre de la variable y finalmente ejecutar el constructor para crear la instancia en memoria.
```