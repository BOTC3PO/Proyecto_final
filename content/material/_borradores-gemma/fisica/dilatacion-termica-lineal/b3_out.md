### 1 — El error de la masa constante
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["dilatacion", "masa", "densidad"]

variables:
  idx: uno_de([0, 1])
  datos: [
    [0.1, "aumenta"],
    [0.2, "se mantiene igual"]
  ]

enunciado: "Si una barra de hierro se calienta de 20°C a 100°C, su longitud aumenta debido a la dilatación térmica. Sin embargo, un error común es pensar que su masa también cambia. En realidad, la masa de la barra ___."

opciones_explicitas: ["aumenta", "se mantiene igual", "disminuye"]

respuesta: datos[idx][1]
tipo: mc

explicacion: |
  La masa es una propiedad intrínseca de la cantidad de materia. Aunque el volumen y la longitud aumentan (dilatación), la cantidad de átomos y su masa total permanecen constantes. Lo que realmente cambia es la densidad, que disminuye.
```

### 2 — ¿Dilatación o deformación?
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["conceptos", "verdadero_falso"]

enunciado: "Si una varilla metálica está sujeta rígidamente entre dos paredes fijas y se calienta, la dilatación térmica se manifiesta como un aumento en la longitud de la varilla."

respuesta: falso
tipo: vf

explicacion: |
  Cuando el material está restringido (sujeto rígidamente), no puede expandirse físicamente en longitud. En ese caso, la energía térmica se traduce en un aumento de la tensión interna o esfuerzo mecánico, no en cambio de longitud.
```

### 3 — Coeficientes y materiales
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["coeficientes", "comparacion"]

variables:
  material_idx: uno_de([0, 1])
  escenario: [
    ["aluminio", "mayor"],
    ["acero", "menor"]
  ]

enunciado: "Si comparamos dos barras de igual longitud y sección transversal, una de {escenario[material_idx][0]} y otra de acero, ante un mismo incremento de temperatura, la barra de {escenario[material_idx][0]} experimentará una dilatación lineal ___."

opciones_explicitas: ["mayor", "menor", "nula"]

respuesta: escenario[material_idx][1]
tipo: mc

explicacion: |
  El coeficiente de dilatación lineal ($\alpha$) es una propiedad del material. El aluminio tiene un $\alpha$ mayor que el acero, por lo que se expande más ante el mismo cambio de temperatura.
```

### 4 — El proceso de expansión
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["proceso", "causa"]

enunciado: "La dilatación térmica ocurre porque al aumentar la temperatura, la energía cinética de los átomos ___."

respuestas_validas: ["aumenta", "disminuye"]

respuesta: "aumenta"
tipo: completar

explicacion: |
  Al aumentar la temperatura, los átomos vibran con mayor amplitud alrededor de sus posiciones de equilibrio, lo que incrementa la distancia promedio entre ellos, resultando en una expansión macroscópica.
```

### 5 — Orden de las variables
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "avanzado"
  tags: ["formula", "variables"]

enunciado: "Para calcular la variación de longitud ($\Delta L$) de un objeto, se deben considerar los siguientes factores en el orden de su dependencia en la fórmula $\Delta L = L_0 \cdot \alpha \cdot \Delta T$:"

opciones_explicitas: ["Longitud inicial", "Coeficiente de dilatación", "Variación de temperatura"]

respuesta: ["Longitud inicial", "Coeficiente de dilatación", "Variación de temperatura"]
tipo: ordenar

explicacion: |
  La fórmula establece que la dilatación depende directamente de la longitud original ($L_0$), del coeficiente característico del material ($\alpha$) y del cambio en la escala térmica ($\Delta T$).
```