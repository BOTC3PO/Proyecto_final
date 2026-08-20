# Dibujo Tecnico — Acotacion normalizada (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de cota

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["terminologia", "conceptos"]

respuesta: "cota"
tipo: completar
respuestas_validas:
  - "cota"

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
tipo: completar
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
respuesta_orden: ["Línea de contorno", "Línea de auxiliar", "Línea de cota", "Cifra de la cota"]
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

### 6 — Elementos de la línea de cota

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["elementos", "norma_iso"]

respuesta: "línea de cota"
tipo: completar
respuestas_validas:
  - "línea de cota"
  - "línea de cota"

enunciado: "La línea que es paralela a la arista o contorno que se desea medir y que contiene la cifra de la medida se denomina ___."

explicacion: |
  En la normativa ISO/UNE, la línea de cota es la que sigue el contorno del objeto y sobre la cual se sitúa la cifra de la cota.
```

### 7 — Orientación de la cifra de cota

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["cifras", "orientacion"]

variables:
  orientacion_vertical: uno_de(["horizontal", "vertical"])

respuesta: "vertical"
tipo: mc
opciones_explicitas: ["horizontal", "vertical", "diagonal", "oblicua"]

enunciado: "Si una cota se sitúa en una línea de cota con orientación {orientacion_vertical}, la cifra de la cota debe leerse de izquierda a derecha o de abajo hacia arriba."

explicacion: |
  Según la norma, cuando la línea de cota es vertical, la cifra debe colocarse de modo que se lea desde el lado derecho del plano o de abajo hacia arriba.
```

### 8 — Componentes de la acotación

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "intermedio"
  tags: ["componentes", "norma_iso"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que las líneas auxiliares de cota deben terminar en la línea de cota y no tocar el contorno del objeto?"

explicacion: |
  Correcto. Las líneas auxiliares de cota sirven para delimitar la línea de cota y deben ser perpendiculares a la arista, sin llegar a tocarla para evitar confusiones con el contorno.
```

### 9 — Secuencia de acotación en una pieza

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "intermedio"
  tags: ["procedimiento", "orden"]

respuesta_orden: ["Definir líneas auxiliares", "Trazar líneas de cota", "Colocar cifras de cota", "Añadir terminaciones (flechas)"]
tipo: ordenar
opciones_explicitas: ["Definir líneas auxiliares", "Trazar líneas de cota", "Colocar cifras de cota", "Añadir terminaciones (flechas)"]

enunciado: "Ordena los pasos lógicos para realizar una acotación completa sobre una pieza mecánica siguiendo la norma estándar:"

explicacion: |
  El proceso lógico comienza delimitando el espacio (auxiliares), estableciendo la medida (línea de cota), indicando el valor (cifra) y finalizando con los símbolos de terminación (flechas o trazos).
```

### 10 — Unidades en el dibujo técnico

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["unidades", "norma_iso"]

variables:
  unidad_base: uno_de(["mm", "cm", "m"])

respuesta: "mm"
tipo: mc
opciones_explicitas: ["mm", "cm", "m", "pulgadas"]

enunciado: "En el dibujo técnico industrial normalizado, la unidad de medida estándar que se utiliza (y que generalmente no se escribe junto a la cifra para evitar redundancia) es el ___."

explicacion: |
  Aunque se pueden usar otras unidades, el estándar en la industria mecánica es el milímetro (mm). La norma ISO indica que no es necesario repetir la unidad si se especifica en el cajetín.
```

### 11 — La línea de cota y la línea de referencia

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

### 12 — ¿Es válido acotar sobre una línea de contorno?

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

### 13 — Orden de lectura de cotas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["jerarquia", "orden"]

tipo: ordenar
opciones_explicitas: ["Línea de extensión", "Línea de cota", "Cifra de cota", "Flecha de límite"]

respuesta_orden: ["Línea de extensión", "Línea de cota", "Cifra de cota", "Flecha de límite"]

enunciado: "Ordene los elementos de una cota de izquierda a derecha (o de extremo a extremo) siguiendo la jerarquía estándar de composición."

explicacion: |
  El orden lógico de lectura y construcción parte desde el objeto (extensión), define el espacio (cota), muestra el valor (cifra) y marca el límite (flecha).
```

### 14 — Unidades en el dibujo técnico

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["unidades", "normas_iso"]

tipo: completar
respuestas_validas:
  - "milímetros"
  - "mm"

enunciado: "En la práctica estándar de dibujo técnico industrial, las cotas se expresan habitualmente en ___ y, por norma general, no se debe escribir la unidad de medida junto a la cifra en el plano."

respuesta: "milímetros"

explicacion: |
  En dibujo técnico mecánico, la unidad por defecto es el milímetro. Para evitar redundancia y limpieza visual, se omite la unidad si el estándar del plano ya la define.
```

### 15 — El error de la cota redundante

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

### 16 — Diferencia entre cota y línea de cota

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["acotacion", "elementos"]

respuesta: "línea de cota"
tipo: completar
respuestas_validas:
  - "línea de cota"
  - "línea de cota"
  - "línea de cota"

enunciado: "Mientras que la línea de referencia establece los límites de la medición, la ___ es la que contiene la cifra de la cota y las flechas de terminación."

explicacion: |
  En el sistema de acotación, la línea de referencia (o línea de auxiliar) delimita el área, mientras que la línea de cota es la que indica la magnitud del objeto.
```

### 17 — El concepto de cota de referencia

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "intermedio"
  tags: ["acotacion", "normas"]

variables:
  es_referencia: uno_de([verdadero, falso])

respuesta: es_referencia
tipo: completar
enunciado: "En un sistema de acotación normalizado, una cota de referencia es aquella que no lleva flechas ni líneas de extensión, sino que se indica mediante un número entre paréntesis, por ejemplo: (50)."

explicacion: |
  Las cotas de referencia se usan para indicar dimensiones que son necesarias para la fabricación pero que ya están implícitas en otras cotas, evitando la redundancia.
```

### 18 — Elementos de acotación vs. Líneas de contorno

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["acotacion", "elementos"]

opciones_explicitas: ["Líneas de contorno", "Líneas de cota", "Líneas de extensión"]

respuesta: "Líneas de extensión"
tipo: mc

enunciado: "A diferencia de las líneas de contorno, que definen la forma del objeto, las ___ sirven para delimitar el espacio donde se coloca la cifra de la medida."

explicacion: |
  Las líneas de extensión (o de auxiliar) separan la línea de contorno de la línea de cota para evitar que la cifra se confunda con la geometría del dibujo.
```

### 19 — Orden de jerarquía en acotación

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "intermedio"
  tags: ["procedimiento", "orden"]

opciones_explicitas: ["Línea de extensión", "Línea de cota", "Cifra de la cota"]

respuesta_orden: ["Línea de extensión", "Línea de cota", "Cifra de la cota"]
tipo: ordenar

enunciado: "Ordene los elementos de una cota estándar desde la parte más cercana al objeto hacia el exterior (hacia la cifra):"

explicacion: |
  El orden lógico de lectura y construcción es: 1. Línea de extensión (sale del objeto), 2. Línea de cota (paralela al objeto), 3. Cifra de la cota (sobre la línea).
```

### 20 — Acotación en serie vs. Acotación en paralelo

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "avanzado"
  tags: ["metodologia", "comparacion"]

variables:
  es_paralelo: uno_de([verdadero, falso])

respuesta: es_paralelo
tipo: completar
enunciado: "En la acotación en paralelo (o en conjunto), todas las líneas de cota son paralelas entre sí y las cotas se acumulan desde un mismo punto de origen, a diferencia de la acotación en serie."

explicacion: |
  En la acotación en serie, las cotas se colocan una a continuación de otra, lo que puede acumular errores de medición si no es preciso. En la paralela, todas parten de un mismo punto base.
```

### 21 — Identificación de elementos de acotación

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["normas", "iso", "elementos"]

variables:
  escenario: uno_de([["La línea que indica la dimensión y tiene puntas de flecha", "Línea de cota"], ["La línea perpendicular a la línea de cota que delimita la medida", "Línea auxiliar"], ["La cifra que indica la magnitud de la medida", "Cifra de cota"]])

tipo: mc
opciones_explicitas: ["Línea de cota", "Línea auxiliar", "Cifra de cota", "Línea de referencia"]
respuesta: escenario[1]

enunciado: "En un plano normalizado, el elemento descrito como '{escenario[0]}' se denomina:"

explicacion: |
  Según la norma ISO/UNE, la línea que delimita la dimensión se llama línea de cota, la línea que marca los límites es la auxiliar y el número es la cifra.
```

### 22 — Sentido de la lectura de cotas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["lectura", "normas"]

tipo: vf
respuesta: verdadero

enunciado: "En un dibujo técnico, las cotas deben colocarse de tal forma que la lectura sea clara y preferentemente de abajo hacia arriba o de izquierda a derecha."

explicacion: |
  La normativa establece que la lectura de las cotas debe ser uniforme para evitar confusiones en la interpretación del plano.
```

### 23 — Unidades en acotación

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["unidades", "normas"]

variables:
  escenario: uno_de(["150", "45,5", "12"])

tipo: completar
respuestas_validas:
  - "150"
  - "45,5"
  - "12"
respuesta: escenario

enunciado: "En un plano de piezas mecánicas estandarizado, una cota indica el valor {escenario} sin unidad de medida escrita junto a la cifra. Según la norma, esa cifra debe interpretarse en milímetros (mm) y se escribe tal cual, sin la unidad: ___."

pasos:
  - "Identificar la cifra de cota en el escenario."
  - "Escribir la cifra exacta sin añadir la unidad 'mm' en el campo de respuesta."

explicacion: |
  Por norma general, en dibujo técnico industrial, si no se especifica lo contrario, la unidad de medida es el milímetro y no se escribe la unidad junto a la cifra.
```

### 24 — Jerarquía de líneas en acotación

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "intermedio"
  tags: ["tipos_linea", "normas"]

variables:
  orden_lineas: ["Línea de contorno", "Línea de cota", "Línea de auxiliar"]
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas:
  - "Línea de contorno"
  - "Línea de cota"
  - "Línea de auxiliar"
respuesta: orden_lineas[idx]

enunciado: "En un esquema de acotación, el orden de importancia visual (de mayor a menor grosor de línea) suele seguir esta jerarquía: 1. ___ , 2. ___ , 3. ___ ."

explicacion: |
  Las líneas de contorno (gruesas) tienen prioridad visual sobre las líneas de cota y auxiliares (finas).
```

### 25 — Verificación de concordancia

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "intermedio"
  tags: ["errores", "normas"]

tipo: mc
opciones_explicitas: ["Es correcto", "Es incorrecto"]
respuesta: "Es correcto"

enunciado: "Si una cota indica un valor de '50' pero la escala del dibujo hace que la distancia medida con regla sea de 25mm, ¿el dibujo es correcto según las reglas de acotación normalizada?"

explicacion: |
  La acotación debe representar la medida real del objeto, independientemente de la escala en la que se imprima el plano. La cifra de cota es la verdad absoluta del plano.
```
