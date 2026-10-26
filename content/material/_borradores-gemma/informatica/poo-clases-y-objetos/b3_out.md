### 1 — Clase vs Objeto
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "confusiones_comunes"]

respuesta: "molde"
tipo: mc
opciones_explicitas: ["instancia", "molde", "atributo", "metodo"]

enunciado: "En el paradigma de Programación Orientada a Objetos, si comparamos la creación de un objeto con la construcción de una casa, la Clase actúa como el _________."

explicacion: |
  Una clase es un plano o molde que define la estructura y el comportamiento, mientras que el objeto es la instancia real construida a partir de ese molde.
```

### 2 — Atributos de Clase vs Instancia
```
metadata:
  materia: "informatica"
  tema: "poo_atributos"
  nivel: "intermedio"
  tags: ["memoria", "alcance"]

variables:
  escenario: uno_de([
    ["Atributo de instancia", "valor_especifico"],
    ["Atributo de clase", "valor_compartido"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Atributo de instancia", "Atributo de clase"]

enunciado: "Si definimos una variable dentro de una clase pero fuera de cualquier método, y dicha variable es compartida por todos los objetos de esa clase, estamos ante un: {escenario[0]}."

explicacion: |
  Los atributos de clase pertenecen a la clase misma y se comparten entre todas las instancias, mientras que los de instancia son únicos para cada objeto.
```

### 3 — El error del estado inicial
```
metadata:
  materia: "informatica"
  tema: "poo_constructores"
  nivel: "intermedio"
  tags: ["errores_comunes", "inicializacion"]

respuesta: "constructor"
tipo: completar
respuestas_validas: ["constructor", "init", "inicializador"]

enunciado: "Un error común al programar POO es olvidar definir el método _________ (o constructor), lo que impide que los atributos de un objeto se inicialicen correctamente al momento de su creación."

explicacion: |
  El constructor es el método especial que se ejecuta automáticamente al instanciar un objeto, permitiendo establecer su estado inicial.
```

### 4 — La naturaleza de los métodos
```
metadata:
  materia: "informatica"
  tema: "poo_metodos"
  nivel: "basico"
  tags: ["comportamiento"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que un método es una característica que define las propiedades (datos) de un objeto?"

explicacion: |
  Falso. Los atributos definen las propiedades (datos/estado), mientras que los métodos definen el comportamiento (acciones).
```

### 5 — Ciclo de vida de un objeto
```
metadata:
  materia: "informatica"
  tema: "poo_instanciacion"
  nivel: "intermedio"
  tags: ["flujo_ejecucion"]

respuesta: ["Definir clase", "Instanciar objeto", "Acceder a atributos/métodos"]
tipo: ordenar
opciones_explicitas: ["Definir clase", "Instanciar objeto", "Acceder a atributos/métodos"]

enunciado: "Ordena los pasos lógicos para poder utilizar una propiedad de un objeto en un programa:"

explicacion: |
  Primero se debe diseñar el plano (clase), luego crear el objeto en memoria (instanciar) y finalmente interactuar con él (acceder).
```