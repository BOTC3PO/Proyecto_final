### 1 — Dilatación lineal vs Volumétrica
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["dilatacion", "dimensiones"]

tipo: mc
opciones_explicitas: ["La dilatación lineal solo considera el cambio en una dimensión (longitud), mientras que la volumétrica considera el cambio en las tres dimensiones (volumen).", "La dilatación lineal ocurre solo en gases, mientras que la volumétrica ocurre en sólidos.", "La dilatación lineal es siempre mayor que la dilatación volumétrica para el mismo material.", "La dilatación lineal depende de la forma del objeto, la volumétrica no."]

enunciado: "Al comparar la dilatación térmica lineal con la dilatación volumétrica, la principal distinción es que la dilatación lineal se enfoca en la variación de la ___."

respuesta: "La dilatación lineal solo considera el cambio en una dimensión (longitud), mientras que la volumétrica considera el cambio en las tres dimensiones (volumen)."

explicacion: |
  La dilatación lineal se aplica cuando una dimensión (longitud) es significativamente mayor que las otras, como en un alambre. La volumétrica es la expansión total en las tres dimensiones del cuerpo.
```

### 2 — Coeficiente de dilatación y material
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["coeficiente", "material"]

variables:
  idx: uno_de([0, 1])
  datos: [[["aluminio", 2.3e-5], ["hierro", 1.2e-5]], [["aluminio", 2.3e-5], ["hierro", 1.2e-5]]]

tipo: mc
opciones_explicitas: ["El coeficiente de dilatación lineal es una propiedad intrínseca del material y no depende de la cantidad de masa.", "El coeficiente de dilatación lineal depende de la longitud inicial del objeto.", "A mayor masa del objeto, mayor es el coeficiente de dilatación lineal.", "El coeficiente de dilatación lineal es igual para todos los metales."]

enunciado: "Si comparamos dos barras del mismo material pero de diferentes longitudes, la diferencia fundamental es que el coeficiente de dilatación lineal ___."

respuesta: "El coeficiente de dilatación lineal es una propiedad intrínseca del material y no depende de la cantidad de masa."

explicacion: |
  El coeficiente ($\alpha$) depende de la naturaleza del material. La deformación ($\Delta L$) sí depende de la longitud inicial ($L_0$), pero el coeficiente es constante para el material dado.
```

### 3 — Relación entre coeficientes
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "avanzado"
  tags: ["relacion_coeficientes", "geometria"]

tipo: vf
enunciado: "Para un sólido isotrópico, el coeficiente de dilatación volumétrica ($\gamma$) es aproximadamente tres veces el coeficiente de dilatación lineal ($\alpha$)."

respuesta: verdadero

explicacion: |
  En materiales isotrópicos (propiedades iguales en todas las direcciones), se cumple la relación $\gamma \approx 3\alpha$.
```

### 4 — Factores de expansión
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["factores", "calculo"]

tipo: completar
respuestas_validas: ["$\Delta T$", "la temperatura inicial"]

enunciado: "En la fórmula de la dilatación lineal $\Delta L = \alpha \cdot L_0 \cdot \Delta T$, el término $\Delta T$ representa la ___."

respuesta: "$\Delta T$"

explicacion: |
  $\Delta T$ es el cambio de temperatura (temperatura final menos temperatura inicial). Sin un cambio de temperatura, no hay dilatación térmica.
```

### 5 — Secuencia de expansión
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["proceso", "causa_efecto"]

tipo: ordenar
opciones_explicitas: ["Aumento de la energía cinética de las partículas", "Incremento de la distancia promedio entre átomos", "Aumento de la longitud total del objeto"]

enunciado: "Ordena los pasos que describen el fenómeno de la dilatación térmica lineal desde el nivel microscópico al macroscópico:"

respuesta: ["Aumento de la energía cinética de las partículas", "Incremento de la distancia promedio entre átomos", "Aumento de la longitud total del objeto"]

explicacion: |
  El calor aumenta la vibración (energía cinética) de los átomos, lo que aumenta la distancia media entre ellos, resultando en un aumento macroscópico de la longitud.
```