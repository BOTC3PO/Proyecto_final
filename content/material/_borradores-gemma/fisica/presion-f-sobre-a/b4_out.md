### 1 — Presión vs Fuerza
```
metadata:
  materia: "fisica"
  tema: "presion_fuerza"
  nivel: "basico"
  tags: ["presion", "fuerza", "conceptos"]

respuesta: "fuerza"
tipo: "mc"
opciones_explicitas: ["fuerza", "presion", "area", "densidad"]

enunciado: "Mientras que la presión es la magnitud que describe la intensidad de una interacción por unidad de superficie, la ___ es la magnitud escalar que mide la intensidad de una interacción sin considerar el área de aplicación."

explicacion: |
  La fuerza es la causa (medida en Newtons), mientras que la presión es la distribución de esa fuerza sobre una superficie (medida en Pascales).
```

### 2 — Relación área-presión
```
metadata:
  materia: "fisica"
  tema: "presion_area"
  nivel: "intermedio"
  tags: ["presion", "area", "relacion_inversa"]

variables:
  escenario: uno_de([
    [100, 2],
    [50, 5],
    [200, 4]
  ])

respuesta: escenario[1]
tipo: "vf"

enunciado: "Si aplicamos una fuerza constante de 100 N sobre una superficie, y la superficie se reduce a la mitad de su tamaño original, ¿la presión resultante será mayor que la inicial? (verdadero/falso)"

explicacion: |
  Dado que P = F/A, si el área (A) disminuye, la presión (P) aumenta. En este caso, al reducir el área a la mitad, la presión se duplica.
```

### 3 — Unidades de medida
```
metadata:
  materia: "fisica"
  tema: "unidades_presion"
  nivel: "basico"
  tags: ["unidades", "pascal", "newton"]

respuestas_validas: ["Pascal", "Pa"]
tipo: "completar"

enunciado: "La unidad de medida de la presión en el Sistema Internacional de Unidades es el ___."

explicacion: |
  El Pascal (Pa) se define como un Newton por metro cuadrado (1 N/m²).
```

### 4 — Comparación de escenarios
```
metadata:
  materia: "fisica"
  tema: "presion_comparacion"
  nivel: "intermedio"
  tags: ["presion", "comparacion"]

variables:
  caso: uno_de([
    [10, 5],
    [20, 2],
    [5, 10]
  ])

respuesta: caso[0]
tipo: "mc"
opciones_explicitas: ["El caso con mayor área", "El caso con menor área", "Ambos casos tienen la misma presión"]

enunciado: "Se tienen dos objetos con la misma fuerza aplicada. El objeto A tiene un área de {caso[0]} m² y el objeto B tiene un área de {caso[1]} m². ¿Cuál de los dos presenta una mayor presión?"

explicacion: |
  A menor área, mayor presión. El objeto con el área más pequeña ({caso[1]} m²) tendrá la presión más alta.
```

### 5 — Conceptos de presión hidrostática
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "avanzado"
  tags: ["presion", "densidad", "profundidad"]

respuesta: "densidad"
tipo: "completar"

enunciado: "En un fluido en reposo, la presión hidrostática depende de la profundidad y de la ___ del fluido, pero es independiente de la forma del recipiente."

explicacion: |
  La fórmula de la presión hidrostática es P = rho * g * h, donde rho es la densidad del fluido.
```