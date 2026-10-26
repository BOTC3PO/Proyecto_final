### 1 — Origen de la cohesión celular
```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["adhesion", "evolucion"]

tipo: mc
opciones_explicitas: ["proteínas de adhesión", "paredes celulares rígidas", "flagelos de locomoción", "vacuolas contráctiles"]

enunciado: "Para que un grupo de células pase de ser una colonia a un organismo multicelular, es indispensable el desarrollo de mecanismos de ___ que permitan mantener la cohesión entre ellas."

explicacion: |
  La multicelularidad requiere que las células se mantengan unidas físicamente mediante proteínas de adhesión (como cadherinas o integrinas), algo que no es necesario en organismos unicelulares independientes.
```

### 2 — Comunicación intercelular
```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["comunicacion", "señalización"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["difusión simple", "el movimiento de moléculas es limitado"],
    ["señalización paracrina", "las células coordinan funciones mediante señales químicas"]
  ]

tipo: mc
opciones_explicitas: ["comunicación química", "reproducción asexual", "fotosíntesis", "quimiotaxis"]

enunciado: "En un organismo multicelular, para que exista una división del trabajo, las células deben coordinar sus procesos. Esto se logra mediante la ___."

pasos:
  - "Identificar la necesidad de coordinación en tejidos especializados."
  - "Relacionar la coordinación con el intercambio de señales."

explicacion: |
  A diferencia de los unicelulares que responden a estímulos externos, los multicelulares necesitan comunicarse entre sí (comunicación química/señalización) para actuar como una unidad funcional.
```

### 3 — Diferencia fundamental
```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["unicelulares", "multicelulares"]

tipo: completar
opciones_explicitas: ["adhesión", "comunicación", "metabolismo", "respiración"]
respuestas_validas: ["adhesión", "comunicación"]

enunciado: "Mientras que un organismo unicelular es una unidad autónoma, la multicelularidad requiere mecanismos de ___ y de ___ para funcionar como un todo integrado."

explicacion: |
  La transición a la multicelularidad implica dos pilares: la capacidad de pegarse (adhesión) y la capacidad de hablarse (comunicación).
```

### 4 — Secuencia de la complejidad celular
```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "avanzado"
  tags: ["evolucion", "procesos"]

tipo: ordenar
opciones_explicitas: ["Agrupamiento de células", "Especialización celular", "Diferenciación de tejidos", "Organización de órganos"]

enunciado: "Ordena los procesos evolutivos que permiten pasar de una colonia de células idénticas a un organismo complejo:"

explicacion: |
  Primero las células deben estar juntas (agrupamiento), luego adquieren funciones distintas (especialización/diferenciación) y finalmente se organizan en estructuras mayores (tejidos/órganos).
```

### 5 — El rol de las proteínas
```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["proteinas", "adhesion"]

variables:
  proteina_tipo: uno_de(["cadherina", "integrina"])
  datos: [
    ["cadherina", "unión célula-célula"],
    ["integrina", "unión célula-matriz"]
  ]

tipo: input
tolerancia_abs: 0

enunciado: "Si una célula utiliza una {datos[escenario_idx][0]} para unirse a otra célula vecina, está ejerciendo una función de {datos[escenario_idx][1]}."

explicacion: |
  Las cadherinas son proteínas clave para la adhesión célula-célula, esenciales para la integridad de los tejidos en organismos multicelulares.
```