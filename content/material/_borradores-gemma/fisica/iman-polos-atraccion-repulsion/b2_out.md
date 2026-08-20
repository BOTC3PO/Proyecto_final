### 1 — Polos magnéticos y fuerza
```
metadata:
  materia: "fisica"
  tema: "imanes_polos"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

respuesta: "atracción"
tipo: mc
opciones_explicitas: ["atracción", "repulsión"]

enunciado: "Cuando se acercan dos polos magnéticos de distinta naturaleza (uno Norte y uno Sur), la fuerza resultante es de ___."

explicacion: |
  Los polos opuestos (Norte y Sur) se atraen, mientras que los polos iguales (Norte con Norte o Sur con Sur) se repelen.
```

### 2 — Identificación de polos
```
metadata:
  materia: "fisica"
  tema: "imanes_polos"
  nivel: "basico"
  tags: ["magnetismo", "identificacion"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible separar un imán en dos partes, de modo que una parte tenga solo un polo Norte y la otra solo un polo Sur?"

explicacion: |
  Falso. Los imanes son dipolos; al romper un imán, cada fragmento resultante se convierte en un nuevo imán con su propio polo Norte y Sur.
```

### 3 — Cálculo de fuerza magnética
```
metadata:
  materia: "fisica"
  tema: "fuerza_magnetica"
  nivel: "intermedio"
  tags: ["calculo", "fuerza"]

variables:
  escenario: uno_de([[2.5, "2.5"], [4.0, "4.0"], [1.2, "1.2"]])

respuesta: escenario[0][0]
tipo: input
tolerancia_abs: 0.01

enunciado: "La fuerza de atracción entre dos imanes se puede modelar simplificadamente como F = k / d^2. Si la constante k es 10 y la distancia d es {escenario[0][0]} cm, ¿cuál es la fuerza F en unidades arbitrarias?"

pasos:
  - "Identificar la constante k = 10"
  - "Identificar la distancia d = 2.5"
  - "Calcular el cuadrado de la distancia: 2.5 * 2.5 = 6.25"
  - "Dividir la constante por el resultado: 10 / 6.25 = 1.6"

explicacion: |
  Usando la fórmula F = 10 / (2.5^2) = 10 / 6.25 = 1.6.
```

### 4 — Comportamiento de campos
```
metadata:
  materia: "fisica"
  tema: "campos_magneticos"
  nivel: "basico"
  tags: ["polos", "direccion"]

respuesta: ["Norte", "Sur"]
tipo: ordenar

opciones_explicitas: ["Sur", "Norte", "Este", "Oeste"]

enunciado: "En un imán de barra, las líneas de campo magnético en su exterior viajan desde el polo ___ hacia el polo ___."

explicacion: |
  Por convención, las líneas de campo magnético salen del polo Norte y entran al polo Sur en el espacio exterior al imán.
```

### 5 — Comparación de fuerzas
```
metadata:
  materia: "fisica"
  tema: "fuerza_magnetica"
  nivel: "intermedio"
  tags: ["comparacion", "distancia"]

variables:
  distancia_inicial: uno_de([[0.1, "0.1"], [0.2, "0.2"]])

respuesta: "se reduce"
tipo: mc
opciones_explicitas: ["aumenta", "se reduce", "se mantiene"]

enunciado: "Si mantenemos constante la fuerza de los imanes y duplicamos la distancia entre ellos (de {distancia_inicial[0][0]} m a {distancia_inicial[1][1]} m), la fuerza de atracción ___."

explicacion: |
  Según la ley de la inversa del cuadrado, si la distancia se duplica, la fuerza se reduce a la cuarta parte (1/2^2 = 1/4).
```