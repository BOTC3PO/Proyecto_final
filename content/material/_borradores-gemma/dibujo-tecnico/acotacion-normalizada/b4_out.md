### 1 — Diferencia entre cota y línea de cota
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["acotacion", "elementos"]

respuesta: "línea de cota"
tipo: completar
respuestas_validas: ["línea de cota", "línea de cota", "línea de cota"]

enunciado: "Mientras que la línea de referencia establece los límites de la medición, la ___ es la que contiene la cifra de la cota y las flechas de terminación."

explicacion: |
  En el sistema de acotación, la línea de referencia (o línea de auxiliar) delimita el área, mientras que la línea de cota es la que indica la magnitud del objeto.
```

### 2 — El concepto de cota de referencia
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "intermedio"
  tags: ["acotacion", "normas"]

variables:
  es_referencia: uno_de([verdadero, falso])

respuesta: es_referencia
tipo: vf

enunciado: "En un sistema de acotación normalizado, una cota de referencia es aquella que no lleva flechas ni líneas de extensión, sino que se indica mediante un número entre paréntesis, por ejemplo: (50)."

explicacion: |
  Las cotas de referencia se usan para indicar dimensiones que son necesarias para la fabricación pero que ya están implícitas en otras cotas, evitando la redundancia.
```

### 3 — Elementos de acotación vs. Líneas de contorno
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["acotacion", "elementos"]

opciones_explicitas: ["Líneas de contorno", "Líneas de cota", "Líneas de extensión"]

respuesta: uno_de(["Líneas de contorno", "Líneas de cota", "Líneas de extensión"])[0]
tipo: mc

enunciado: "A diferencia de las líneas de contorno, que definen la forma del objeto, las ___ sirven para delimitar el espacio donde se coloca la cifra de la medida."

explicacion: |
  Las líneas de extensión (o de auxiliar) separan la línea de contorno de la línea de cota para evitar que la cifra se confunda con la geometría del dibujo.
```

### 4 — Orden de jerarquía en acotación
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "intermedio"
  tags: ["procedimiento", "orden"]

opciones_explicitas: ["Línea de extensión", "Línea de cota", "Cifra de la cota"]

respuesta: ["Línea de extensión", "Línea de cota", "Cifra de la cota"]
tipo: ordenar

enunciado: "Ordene los elementos de una cota estándar desde la parte más cercana al objeto hacia el exterior (hacia la cifra):"

explicacion: |
  El orden lógico de lectura y construcción es: 1. Línea de extensión (sale del objeto), 2. Línea de cota (paralela al objeto), 3. Cifra de la cota (sobre la línea).
```

### 5 — Acotación en serie vs. Acotación en paralelo
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "avanzado"
  tags: ["metodologia", "comparacion"]

variables:
  es_paralelo: uno_de([verdadero, falso])

respuesta: es_paralelo
tipo: vf

enunciado: "En la acotación en paralelo (o en conjunto), todas las líneas de cota son paralelas entre sí y las cotas se acumulan desde un mismo punto de origen, a diferencia de la acotación en serie."

explicacion: |
  En la acotación en serie, las cotas se colocan una a continuación de otra, lo que puede acumular errores de medición si no es preciso. En la paralela, todas parten de un mismo punto base.
```