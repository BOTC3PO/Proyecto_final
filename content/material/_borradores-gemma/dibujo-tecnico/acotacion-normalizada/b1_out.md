### 1 — Definición de cota
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["terminologia", "conceptos"]

respuesta: "cota"
tipo: completar
respuestas_validas: ["cota"]

enunciado: "El valor numérico que indica la medida real de una línea, superficie o ángulo en un dibujo técnico se denomina ___."

explicacion: |
  La cota es la cifra que expresa la magnitud de la dimensión representada en el dibujo.
```

### 2 — Elementos de la acotación
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["elementos", "componentes"]

variables:
  es_correcta: verdadero

respuesta: es_correcta
tipo: vf

enunciado: "En la acotación normalizada, la línea de cota es aquella que contiene el valor numérico y es paralela a la dimensión que se está midiendo."

explicacion: |
  Correcto. La línea de cota es la línea que indica la dimensión, y sobre ella se coloca la cifra de la cota.
```

### 3 — Tipos de líneas en acotación
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["lineas", "normas"]

opciones_explicitas: ["Línea de contorno", "Línea de cota", "Línea de auxiliar", "Línea de referencia"]
respuesta: "Línea de auxiliar"

tipo: mc

enunciado: "La línea que se traza perpendicularmente a la parte del objeto que se va a acotar, para delimitar el espacio de la cota, se denomina:"

explicacion: |
  La línea de auxiliar (o de extensión) sirve para separar la línea de cota del contorno del objeto, evitando confusiones.
```

### 4 — Orden de lectura de una cota
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["proceso", "orden"]

opciones_explicitas: ["Línea de contorno", "Línea de auxiliar", "Línea de cota", "Cifra de la cota"]
respuesta: ["Línea de contorno", "Línea de auxiliar", "Línea de cota", "Cifra de la cota"]
tipo: ordenar

enunciado: "Ordene los elementos de una cota estándar desde el objeto hacia el exterior (desde la pieza hacia la cifra):"

explicacion: |
  El orden lógico es: primero el contorno del objeto, luego la línea de auxiliar que lo separa, la línea de cota que marca la distancia y finalmente la cifra.
```

### 5 — Unidades de medida
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["normas", "unidades"]

variables:
  escenario: uno_de([0, 1])
  valor_sistema: uno_de(["milímetros", "metros"])
  valor_simbolo: uno_de(["mm", "m"])

respuesta: valor_sistema

tipo: mc

opciones_explicitas: ["milímetros", "metros", "centímetros", "pulgadas"]

enunciado: "Según la normativa ISO/UNE, en los dibujos de fabricación mecánica es estándar representar las dimensiones en {valor_sistema} (sin necesidad de escribir el símbolo {valor_simbolo} junto a cada cifra)."

explicacion: |
  En dibujo técnico industrial, el sistema métrico decimal es la norma, siendo el milímetro la unidad más común para evitar errores de escala.
```