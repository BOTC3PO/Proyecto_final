### 1 — Atributos de una clase
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "clases", "atributos"]

variables:
  escenario: uno_de([["Vehiculo", "color", "marca"], ["Persona", "nombre", "edad"], ["Libro", "titulo", "autor"]])
  idx: uno_de([0, 1, 2])

enunciado: "Si definimos una clase llamada {escenario[idx][0]}, uno de sus atributos (propiedades) es {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["color", "nombre", "titulo", "no_aplica"]

explicacion: |
  Un atributo representa una característica o propiedad de un objeto de la clase. En el caso de {escenario[idx][0]}, {escenario[idx][1]} es una de sus propiedades fundamentales.
```

### 2 — Métodos y comportamiento
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "metodos", "comportamiento"]

variables:
  accion: uno_de([["acelerar", "aumentar_velocidad"], ["saludar", "decir_hola"], ["abrir", "cambiar_estado"]])

enunciado: "En la programación orientada a objetos, los métodos representan el comportamiento de un objeto. Si tenemos un método llamado '{accion[0]}', su propósito funcional es {accion[1]}."

respuesta: accion[1]
tipo: completar
respuestas_validas: ["aumentar_velocidad", "decir_hola", "cambiar_estado"]

explicacion: |
  Los métodos son funciones definidas dentro de una clase que operan sobre los atributos del objeto o realizan acciones específicas.
```

### 3 — Instanciación de objetos
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "objetos", "instancia"]

enunciado: "Si la clase es 'Perro', un objeto creado a partir de ella (una instancia) sería un perro real con nombre y edad específicos."

respuesta: verdadero
tipo: vf

explicacion: |
  Un objeto es una instancia concreta de una clase. Mientras la clase es el molde, el objeto es la entidad con datos reales.
```

### 4 — Orden de definición en una clase
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "estructura", "clases"]

enunciado: "Para implementar correctamente una clase con atributos y métodos, ¿cuál es el orden lógico de definición en la estructura de la clase?"

respuesta: ["Definir atributos", "Definir métodos", "Instanciar objeto"]
tipo: ordenar
opciones_explicitas: ["Definir atributos", "Definir métodos", "Instanciar objeto"]

explicacion: |
  Primero se definen las propiedades (atributos), luego las acciones que puede realizar (métodos) y finalmente se crean los objetos (instancias) que usarán esa estructura.
```

### 5 — Identidad de los objetos
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "avanzado"
  tags: ["poo", "objetos", "identidad"]

variables:
  caso: uno_de([["perro1", "perro2"], ["auto1", "auto2"], ["usuario1", "usuario2"]])

enunciado: "Si creamos dos objetos distintos, {caso[0]} y {caso[1]}, a partir de la misma clase, aunque tengan los mismos atributos, ¿son objetos idénticos en memoria?"

respuesta: falso
tipo: vf

explicacion: |
  Aunque dos objetos tengan los mismos valores en sus atributos, cada instancia ocupa un lugar distinto en la memoria y tiene una identidad única.
```