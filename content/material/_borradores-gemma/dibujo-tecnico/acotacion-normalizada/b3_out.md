### 1 — La línea de cota y la línea de referencia
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["normas_iso", "elementos_acotacion"]

tipo: mc
opciones_explicitas: ["Línea de cota", "Línea de referencia", "Línea de extensión", "Línea de eje"]

enunciado: "En un sistema de acotación normalizado, la línea que es paralela a la dimensión que se quiere indicar y que contiene el valor numérico se denomina ___."

respuesta: "Línea de cota"

explicacion: |
  La línea de cota es la que indica la magnitud de la medida, mientras que las líneas de referencia (o de extensión) delimitan el inicio y el fin de la cota sin tocar el contorno del objeto.
```

### 2 — ¿Es válido acotar sobre una línea de contorno?
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "intermedio"
  tags: ["normas_iso", "errores_comunes"]

tipo: vf
respuesta: falso

enunciado: "Según la normativa ISO/UNE, ¿es correcto colocar una línea de cota directamente sobre el contorno de una pieza para ahorrar espacio?"

explicacion: |
  Falso. Las líneas de cota deben estar separadas del contorno del objeto por una distancia mínima para evitar confusiones con las líneas de dibujo de la pieza.
```

### 3 — Orden de lectura de cotas
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["jerarquia", "orden"]

tipo: ordenar
opciones_explicitas: ["Línea de extensión", "Línea de cota", "Cifra de cota", "Flecha de límite"]

respuesta: ["Línea de extensión", "Línea de cota", "Cifra de cota", "Flecha de límite"]

enunciado: "Ordene los elementos de una cota de izquierda a derecha (o de extremo a extremo) siguiendo la jerarquía estándar de composición."

explicacion: |
  El orden lógico de lectura y construcción parte desde el objeto (extensión), define el espacio (cota), muestra el valor (cifra) y marca el límite (flecha).
```

### 4 — Unidades en el dibujo técnico
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["unidades", "normas_iso"]

variables:
  escenario: uno_de([["milímetros", "mm"], ["centímetros", "cm"], ["metros", "m"]])

tipo: completar
respuestas_validas: ["milímetros", "mm"]

enunciado: "En la práctica estándar de dibujo técnico industrial, las cotas se expresan habitualmente en ___ y, por norma general, no se debe escribir la unidad de medida junto a la cifra en el plano."

respuesta: escenario[0][0]

explicacion: |
  En dibujo técnico mecánico, la unidad por defecto es el milímetro. Para evitar redundancia y limpieza visual, se omite la unidad si el estándar del plano ya la define.
```

### 5 — El error de la cota redundante
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "intermedio"
  tags: ["errores_comunes", "redundancia"]

tipo: mc
opciones_explicitas: ["Acotación redundante", "Acotación incompleta", "Acotación duplicada", "Acotación de escala"]

enunciado: "Cuando un dibujante indica una medida que ya ha sido deducida por la suma de otras cotas previamente escritas, está cometiendo un error de ___."

respuesta: "Acotación redundante"

explicacion: |
  La redundancia (acotación duplicada) es un error grave en dibujo técnico porque puede generar contradicciones si hay variaciones en el diseño, invalidando la precisión del plano.
```