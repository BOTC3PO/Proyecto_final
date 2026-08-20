### 1 — Definición de Derecho Civil
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["definicion", "conceptos_basicos"]

tipo: mc
opciones_explicitas: ["El conjunto de normas que regula las relaciones entre particulares y las de estos con el Estado cuando actúa como particular.", "El conjunto de normas que regula la organización y funcionamiento del Estado y sus instituciones.", "El conjunto de normas que regula la conducta de los ciudadanos en sociedad para garantizar la convivencia pública.", "El conjunto de normas que regula la relación entre el Estado y los ciudadanos en el ámbito penal."]

respuesta: "El conjunto de normas que regula las relaciones entre particulares y las de estos con el Estado cuando actúa como particular."

enunciado: "El Derecho Civil se define fundamentalmente como:"

explicacion: |
  El Derecho Civil es la rama del derecho privado que regula las relaciones más comunes de la vida cotidiana (familia, contratos, propiedad, sucesiones), interviniendo el Estado solo cuando actúa como un particular más.
```

### 2 — Sujetos del Derecho
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["sujetos", "personas"]

tipo: completar
respuestas_validas: ["persona física", "persona jurídica"]

respuesta: "persona jurídica"

enunciado: "En el derecho civil, además de la ___ (ser humano), existen las ___ (entidades como sociedades o fundaciones) que tienen capacidad para ser sujetos de derechos y obligaciones."

explicacion: |
  Existen dos tipos de sujetos de derecho: la persona física (el ser humano) y la persona jurídica (entes colectivos o instituciones con personalidad propia).
```

### 3 — Verdad o Falso: Ámbito de aplicación
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["teoria_general"]

tipo: vf

enunciado: "¿Es correcto afirmar que el Derecho Civil regula las relaciones entre el Estado y los ciudadanos cuando el Estado ejerce su poder de imperio (como en el derecho penal o administrativo)?"

respuesta: falso

explicacion: |
  Falso. Cuando el Estado actúa con poder de imperio, se aplican el Derecho Público (Administrativo, Penal, etc.). El Derecho Civil se aplica cuando el Estado actúa como un particular (ej. alquilando un local).
```

### 4 — Clasificación de las Relaciones
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["relaciones_juridicas"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El contrato de compraventa de un automóvil", "La herencia de un inmueble"],
    ["La celebración de un matrimonio", "La transferencia de propiedad de un bien"]
  ]

tipo: mc
opciones_explicitas: ["Relaciones de Derecho Público", "Relaciones de Derecho Privado"]

respuesta: "Relaciones de Derecho Privado"

enunciado: "Tanto {escenarios[escenario_idx][0]} como {escenarios[escenario_idx][1]} son ejemplos de relaciones reguladas por el Derecho Civil, por lo tanto, pertenecen al ámbito del:"

explicacion: |
  El Derecho Civil es la piedra angular del Derecho Privado, ya que regula los intereses de los particulares.
```

### 5 — Orden de la Capacidad Jurídica
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["capacidad", "orden_logico"]

tipo: ordenar
opciones_explicitas: ["Nacimiento de la persona", "Adquisición de la capacidad de goce", "Ejercicio de la capacidad de ejercicio"]

respuesta: ["Nacimiento de la persona", "Adquisición de la capacidad de goce", "Ejercicio de la capacidad de ejercicio"]

enunciado: "Ordene cronológicamente los hitos que permiten el desarrollo de la personalidad jurídica y su capacidad en un individuo:"

explicacion: |
  Primero nace la persona (existencia), lo que le otorga capacidad de goce (derechos), y con el tiempo y la madurez adquiere la capacidad de ejercicio (facultad de actuar por sí mismo).
```