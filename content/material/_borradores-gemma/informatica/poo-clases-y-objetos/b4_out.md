### 1 — Clase vs Objeto
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "conceptos_fundamentales"]

respuesta: "molde"
tipo: completar
respuestas_validas: ["molde", "plantilla", "definicion"]

enunciado: "Si comparamos la relación entre un plano de construcción y una casa real, la clase actúa como el plano, mientras que el objeto es la ___."

explicacion: |
  La clase es la definición abstracta (el molde) que describe las propiedades y comportamientos, mientras que el objeto es la instancia concreta creada a partir de esa clase.
```

### 2 — Atributos vs Métodos
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "atributos", "metodos"]

variables:
  es_estado: uno_de([true, false])

respuesta: uno_de(["estado", "comportamiento"])
tipo: mc
opciones_explicitas: ["estado", "comportamiento"]

enunciado: "En el paradigma de POO, la principal distinción es que los atributos representan el {es_estado}, mientras que los métodos representan el comportamiento."

pasos:
  - "Identificar qué elemento define las características (datos)."
  - "Identificar qué elemento define las acciones (funciones)."

explicacion: |
  Los atributos almacenan el estado o las propiedades de un objeto (datos), mientras que los métodos definen las acciones que el objeto puede realizar (comportamiento).
```

### 3 — Instanciación de Objetos
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "instanciacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es posible que dos objetos distintos, creados a partir de la misma clase, tengan valores diferentes en sus atributos?"

explicacion: |
  Verdadero. Aunque comparten la misma estructura definida por la clase, cada instancia (objeto) posee su propio espacio en memoria para sus atributos, permitiendo que cada objeto tenga su propio estado.
```

### 4 — Orden de creación en memoria
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "ciclo_de_vida"]

respuesta: ["Definición de clase", "Instanciación de objeto", "Llamada a método"]
tipo: ordenar
opciones_explicitas: ["Definición de clase", "Instanciación de objeto", "Llamada a método"]

enunciado: "Ordene los pasos lógicos para que un objeto pueda interactuar con su entorno:"

explicacion: |
  Primero se debe definir la estructura (Clase), luego se crea la instancia en memoria (Instanciación) y finalmente se ejecutan sus acciones (Métodos).
```

### 5 — Abstracción vs Implementación
```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "avanzado"
  tags: ["poo", "abstraccion"]

variables:
  caso: uno_de([0, 1])

respuesta: "abstracción"
tipo: mc
opciones_explicitas: ["abstracción", "implementación", "encapsulamiento"]

enunciado: "El proceso de ocultar los detalles complejos de cómo funciona un método y mostrar solo la interfaz necesaria para el usuario se conoce como ___."

explicacion: |
  La abstracción permite al programador centrarse en 'qué' hace un objeto en lugar de 'cómo' lo hace internamente, simplificando la interacción con sistemas complejos.
```