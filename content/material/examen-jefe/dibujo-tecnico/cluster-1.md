# Examen jefe — Dominio de vistas y acotación

> Logro #206. Has completado el examen sobre sistemas de proyección, escalas y perspectivas. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **125 preguntas totales** en 5/5 secciones.

---

## Sección: acotacion-normalizada (25 preguntas)

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

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["elementos", "norma_iso"]

respuesta: "línea de cota"
tipo: completar
respuestas_validas: ["línea de cota", "línea de cota"]

enunciado: "La línea que es paralela a la arista o contorno que se desea medir y que contiene la cifra de la medida se denomina ___."

explicacion: |
  En la normativa ISO/UNE, la línea de cota es la que sigue el contorno del objeto y sobre la cual se sitúa la cifra de la cota.
```

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

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "intermedio"
  tags: ["procedimiento", "orden"]

respuesta: ["Definir líneas auxiliares", "Trazar líneas de cota", "Colocar cifras de cota", "Añadir terminaciones (flechas)"]
tipo: ordenar
opciones_explicitas: ["Definir líneas auxiliares", "Trazar líneas de cota", "Colocar cifras de cota", "Añadir terminaciones (flechas)"]

enunciado: "Ordena los pasos lógicos para realizar una acotación completa sobre una pieza mecánica siguiendo la norma estándar:"

explicacion: |
  El proceso lógico comienza delimitando el espacio (auxiliares), estableciendo la medida (línea de cota), indicando el valor (cifra) y finalizando con los símbolos de terminación (flechas o trazos).
```

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

respuesta: escenario[0][0

explicacion: |
  En dibujo técnico mecánico, la unidad por defecto es el milímetro. Para evitar redundancia y limpieza visual, se omite la unidad si el estándar del plano ya la define.
```

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

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["normas", "iso", "elementos"]

variables:
  escenario: uno_de([
    ["La línea que indica la dimensión y tiene puntas de flecha", "Línea de cota"],
    ["La línea perpendicular a la línea de cota que delimita la medida", "Línea auxiliar"],
    ["La cifra que indica la magnitud de la medida", "Cifra de cota"]
  ])
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["Línea de cota", "Línea auxiliar", "Cifra de cota", "Línea de referencia"]
respuesta: escenario[idx][1

enunciado: "En un plano normalizado, el elemento descrito como '{escenario[idx][0]}' se denomina:"

explicacion: |
  Según la norma ISO/UNE, la línea que delimita la dimensión se llama línea de cota, la línea que marca los límites es la auxiliar y el número es la cifra.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["lectura", "normas"]

variables:
  caso: uno_de([
    [false, "Falso"],
    [true, "Verdadero"]
  ])
  idx: uno_de([0, 1])

tipo: completar
respuesta: caso[idx

enunciado: "En un dibujo técnico, las cotas deben colocarse de tal forma que la lectura sea clara y preferentemente de abajo hacia arriba o de izquierda a derecha. {caso}"

explicacion: |
  La normativa establece que la lectura de las cotas debe ser uniforme para evitar confusiones en la interpretación del plano.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["unidades", "normas"]

variables:
  escenario: uno_de([
    ["150", "150"],
    ["45,5", "45,5"],
    ["12", "12"]
  ])
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas: ["150", "45,5", "12"]
respuesta: escenario[idx][1

enunciado: "En un plano de piezas mecánicas estandarizado, si no se indica la unidad de medida en el cuadro de rotulación, se asume que la cifra ___ representa la medida en milímetros (mm)."

pasos:
  - "Identificar la cifra de cota en el escenario."
  - "Escribir la cifra exacta sin añadir la unidad 'mm' en el campo de respuesta."

explicacion: |
  Por norma general, en dibujo técnico industrial, si no se especifica lo contrario, la unidad de medida es el milímetro y no se escribe la unidad junto a la cifra.
```

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
respuestas_validas: ["Línea de contorno", "Línea de cota", "Línea de auxiliar"]
respuesta: orden_lineas[idx

enunciado: "En un esquema de acotación, el orden de importancia visual (de mayor a menor grosor de línea) suele seguir esta jerarquía: 1. ___ , 2. ___ , 3. ___ ."

explicacion: |
  Las líneas de contorno (gruesas) tienen prioridad visual sobre las líneas de cota y auxiliares (finas).
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "intermedio"
  tags: ["errores", "normas"]

variables:
  error: uno_de([
    [true, "Es correcto"],
    [false, "Es incorrecto"]
  ])
  idx: uno_de([0, 1])

tipo: completar
respuesta: error[idx

enunciado: "Si una cota indica un valor de '50' pero la escala del dibujo hace que la distancia medida con regla sea de 25mm, el dibujo {error[idx]} según las reglas de acotación normalizada."

explicacion: |
  La acotación debe representar la medida real del objeto, independientemente de la escala en la que se imprima el plano. La cifra de cota es la verdad absoluta del plano.
```

## Sección: escalas-numericas-y-graficas (25 preguntas)

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

respuesta: "escala"
tipo: completar
respuestas_validas: ["escala"]

enunciado: "La relación matemática entre las dimensiones de un objeto representado en un plano y las dimensiones reales del objeto se denomina ___."

explicacion: |
  La escala es la razón de proporción que permite representar objetos de gran tamaño o muy pequeños en un formato manejable.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["reduccion", "conceptos"]

variables:
  escenario: uno_de([["1:50", "reducción"], ["2:1", "ampliación"], ["1:1", "natural"]])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["reducción", "ampliación", "natural"]

enunciado: "Si un dibujo tiene una escala de {escenario[0]}, esto significa que estamos ante una escala de ___."

explicacion: |
  En una escala de reducción (ej. 1:50), el dibujo es más pequeño que el objeto real. En una de ampliación (ej. 2:1), el dibujo es más grande.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["escala_natural", "verdadero_falso"]

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que una escala 1:1 representa un objeto en su tamaño real, sin aumentarlo ni reducirlo?"

explicacion: |
  Verdadero. La escala 1:1 se conoce como escala natural, donde las dimensiones del dibujo coinciden con las del objeto real.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["notacion", "escala_numerica"]

respuesta: "1:5"
tipo: completar
respuestas_validas: ["1:5"]

enunciado: "En la notación de escala numérica 1:5, el primer número representa la medida en el ___ y el segundo número la medida en la realidad."

pasos:
  - "Identificar que el primer término es la dimensión del dibujo."
  - "Identificar que el segundo término es la dimensión real."

explicacion: |
  En la escala 1:5, una unidad en el papel equivale a 5 unidades en la realidad.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["procedimiento", "ordenar"]

respuesta: ["Medir objeto real", "Aplicar factor de escala", "Dibujar en papel"]
tipo: ordenar
opciones_explicitas: ["Dibujar en papel", "Medir objeto real", "Aplicar factor de escala"]

enunciado: "Ordena los pasos lógicos para representar un objeto real mediante una escala de reducción:"

explicacion: |
  Primero se obtiene la medida real, luego se calcula la dimensión correspondiente usando la escala y finalmente se traza el dibujo.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas"
  nivel: "basico"
  tags: ["escala", "reduccion"]

variables:
  dim_real: 150
  dim_dibujo: 30
  escala: escala_calc(dim_dibujo, dim_real)

enunciado: "Si un componente mecánico mide {dim_real} mm en la realidad y en el plano se ha representado con {dim_dibujo} mm, la escala numérica aplicada es ___."

respuestas_validas: ["1:5"]

respuesta: "1:5"
tipo: completar

explicacion: |
  La escala se calcula como la relación entre la medida del dibujo y la medida real:
  Escala = Dibujo / Real = 30 / 150 = 1/5, lo que se expresa como 1:5.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas"
  nivel: "intermedio"
  tags: ["escala", "ampliacion"]

variables:
  escala_factor: 5
  escala_str: "5:1"

enunciado: "Un engranaje muy pequeño se representa en un plano con una escala de {escala_str}. ¿Qué significa esto respecto al tamaño del objeto?"

opciones_explicitas: ["El dibujo es 5 veces más grande que el objeto real", "El dibujo es 5 veces más pequeño que el objeto real", "El objeto real es 5 veces más grande que el dibujo", "El dibujo y el objeto tienen el mismo tamaño"]

respuesta: "El dibujo es 5 veces más grande que el objeto real"
tipo: mc

explicacion: |
  En una escala de ampliación (donde el primer número es mayor que el segundo, ej. 5:1), el objeto se representa con un tamaño superior al real para permitir ver detalles minuciosos.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas"
  nivel: "intermedio"
  tags: ["calculo", "escala"]

variables:
  escala_num: 1
  escala_den: 10
  medida_plano: 45
  medida_real: calc_real(medida_plano, escala_num, escala_den)

enunciado: "En un plano con escala 1:10, una línea mide {medida_plano} mm. ¿Cuál es la longitud real de dicha línea en milímetros?"

respuestas_validas: ["450"]

respuesta: "450"
tipo: completar

explicacion: |
  Para hallar la medida real desde el dibujo:
  Medida Real = Medida Dibujo * (Denominador / Numerador)
  Medida Real = 45 * (10 / 1) = 450 mm.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_graficas"
  nivel: "basico"
  tags: ["escala_grafica", "veracidad"]

enunciado: "La escala gráfica es una línea graduada dibujada en el plano que permite medir directamente dimensiones reales sin necesidad de realizar cálculos matemáticos. ¿Es esto verdadero o falso?"

opciones_explicitas: ["verdadero", "falso"]

respuesta: "verdadero"
tipo: completar
explicacion: |
  La escala gráfica es extremadamente útil porque, si el plano se reduce o amplía (por fotocopiado o digitalmente), la escala gráfica se escala proporcionalmente con el dibujo, manteniendo la precisión de la lectura.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas"
  nivel: "avanzado"
  tags: ["procedimiento", "escala"]

enunciado: "Para representar correctamente un objeto de 2 metros de largo en un plano con escala 1:20, ¿cuál es el orden lógico de los pasos a seguir?"

opciones_explicitas: ["Convertir la medida real a la misma unidad que el dibujo, Dividir la medida real por el denominador de la escala, Dibujar la línea resultante en el plano", "Dividir la medida real por el denominador de la escala, Convertir la medida real a la misma unidad que el dibujo, Dibujar la línea resultante en el plano", "Dibujar la línea resultante en el plano, Dividir la medida real por el denominador de la escala, Convertir la medida real a la misma unidad que el dibujo"]

respuesta: ["Convertir la medida real a la misma unidad que el dibujo", "Dividir la medida real por el denominador de la escala", "Dibujar la línea resultante en el plano"]
tipo: ordenar

explicacion: |
  1. Primero, pasamos 2 metros a 2000 mm para trabajar en la misma unidad que el dibujo.
  2. Dividimos 2000 mm / 20 = 100 mm.
  3. Dibujamos una línea de 100 mm en el papel.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["escalas", "reduccion", "ampliacion"]

respuesta: "reduccion"
tipo: mc
opciones_explicitas: ["reduccion", "ampliacion", "natural"]

enunciado: "Si un objeto real mide 100 mm y en el plano se representa con una medida de 10 mm, estamos utilizando una escala de ___."

explicacion: |
  Cuando la medida en el dibujo es menor que la medida real, se trata de una escala de reducción (ej: 1:10).
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["escala_numerica", "interpretacion"]

variables:
  idx: uno_de([0, 1])
  escena: [[ "1:5", "el dibujo es 5 veces más grande que el objeto real" ], [ "5:1", "el dibujo es 5 veces más grande que el objeto real" ]]

respuesta: escena[idx][1
tipo: mc
opciones_explicitas: ["el dibujo es 5 veces más grande que el objeto real", "el dibujo es 5 veces más pequeño que el objeto real", "el dibujo tiene el mismo tamaño que el objeto real"]

enunciado: "Si en un plano técnico aparece la escala {escena[idx][0]}, esto significa que {escena[idx][1]}."

explicacion: |
  En la escala numérica A:B, 'A' es la medida en el dibujo y 'B' es la medida real. Si A < B es reducción; si A > B es ampliación.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["calculo", "escala"]

variables:
  idx: uno_de([0, 1])
  datos: [[ 20, 5 ], [ 50, 10 ]]

respuesta: datos[idx][1
tipo: completar
tolerancia_abs: 0

enunciado: "Si aplicamos una escala de 1:{datos[idx][0]} a un objeto cuya medida real es {datos[idx][1]} mm, ¿cuánto medirá la línea en el dibujo en mm?"

pasos:
  - "Identificar la escala (1:{datos[idx][0]})"
  - "Dividir la medida real entre el denominador de la escala: {datos[idx][1]} / {datos[idx][0]}"

explicacion: |
  Para hallar la medida del dibujo en una escala de reducción, se divide la medida real por el denominador de la escala.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["escala_grafica", "veracidad"]

respuesta: falso
tipo: vf

enunciado: "La escala gráfica (barra graduada) mantiene su validez incluso si el plano se imprime en un tamaño distinto al original (por ejemplo, al fotocopiarlo en un tamaño menor)."

explicacion: |
  A diferencia de la escala numérica, la escala gráfica es una representación visual que se escala junto con el dibujo, por lo que sigue siendo correcta tras una reducción o ampliación de la hoja.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "avanzado"
  tags: ["procedimiento", "ordenar"]

respuesta: ["Medir la longitud en el plano", "Identificar la escala numérica", "Calcular la medida real mediante la proporción"]
tipo: ordenar
opciones_explicitas: ["Medir la longitud en el plano", "Identificar la escala numérica", "Calcular la medida real mediante la proporción"]

enunciado: "Ordena los pasos lógicos para determinar la medida real de un componente utilizando una escala de reducción en un plano físico."

explicacion: |
  Primero se obtiene la medida física en el papel, luego se consulta la escala del plano y finalmente se aplica la operación matemática (Medida dibujo * Denominador).
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "proporción"
tipo: mc
opciones_explicitas: ["escala", "proporción", "dimensión", "medida"]

enunciado: "Mientras que la escala es la relación matemática entre la representación y el objeto real, la ___ es la relación de semejanza entre las partes de un mismo objeto para mantener su forma."

explicacion: |
  La escala determina el tamaño de la representación respecto al objeto real, mientras que la proporción asegura que las partes del objeto mantengan su relación de tamaño entre sí para no deformar la figura.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["escalas", "reduccion"]

variables:
  es_reduccion: falso

respuesta: es_reduccion
tipo: completar
enunciado: "En una escala de dibujo técnico, si el valor del denominador es mayor que el valor del numerador (ej. 1:50), estamos ante una escala de reducción."

explicacion: |
  Correcto. En una escala de reducción, el objeto real es más grande que el dibujo, por lo tanto, el número de la derecha (denominador) debe ser mayor.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["comparacion", "tipos_de_escala"]

variables:
  tipo_escala: uno_de(["num", "graf"])

respuesta: tipo_escala[idx][1
tipo: mc
opciones_explicitas: ["numérica", "gráfica"]

enunciado: "Si un plano se imprime en un tamaño distinto al original, la escala ___ pierde su validez directa, mientras que la escala gráfica (barra graduada) permanece exacta."

pasos:
  - "Identificar el tipo de escala que depende de la impresión física."
  - "Comparar la naturaleza de la escala numérica (relación de números) frente a la gráfica (representación visual)."

explicacion: |
  La escala numérica es una relación de valores que depende de la reproducción exacta del papel. La escala gráfica es una línea graduada dibujada que escala junto con el dibujo, manteniendo su veracidad siempre.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["procedimiento", "calculo"]

variables:
  escenario: uno_de([
    ["10mm", "100mm", "1:10"],
    ["5cm", "20cm", "1:4"],
    ["2m", "50cm", "4:1"]
  ])

respuesta: escenario[idx][2
tipo: completar

enunciado: "Para hallar la escala de un dibujo, se debe dividir la medida del objeto real entre la medida del dibujo. Si el objeto mide {escenario[idx][0]} y el dibujo mide {escenario[idx][1]}, la escala es ___."

pasos:
  - "Identificar la medida real y la medida en el papel."
  - "Dividir la medida real por la medida del dibujo para obtener la relación."
  - "Simplificar la fracción hasta obtener la forma 1:n o n:1."

explicacion: |
  La fórmula es Escala = Medida Real / Medida Dibujo. En el caso de 10mm/100mm, la relación es 0.1, que expresado como escala es 1:10.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "avanzado"
  tags: ["relaciones", "escalas"]

respuesta: ["Escala 1:1", "Escala 1:5", "Escala 1:10", "Escala 1:50"]
tipo: ordenar

enunciado: "Ordene las siguientes escalas de mayor a menor tamaño de representación (de la que representa al objeto en su tamaño real a la que lo representa más pequeño):"

opciones_explicitas: ["1:1", "1:5", "1:10", "1:50"]

explicacion: |
  El orden correcto de tamaño de representación es de la escala natural (1:1) hacia las de reducción más agresivas (1:50). A medida que el denominador aumenta, el objeto se ve más pequeño en el papel.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["escala", "reduccion", "dimensiones"]

variables:
  escenario: [[100, "1:50"], [200, "1:20"], [50, "1:10"]]
  idx: uno_de([0,1,2])

enunciado: "Se desea representar una pieza real que mide {escenario[idx][0]} mm en un plano utilizando una escala de {escenario[idx][1]}. ¿Cuál es la longitud que debe tener la pieza dibujada en el papel?"

pasos:
  - "Identificar la dimensión real: {escenario[idx][0]} mm"
  - "Aplicar la escala: Dimensión dibujo = Dimensión real / Denominador de la escala"
  - "Calcular: {escenario[idx][0]} / {fraccion(1, 50)} (si es 1:50) o el correspondiente"

respuesta: {escenario[idx][0] / (si(escenario[idx][1] == "1:50", 50, si(escenario[idx][1] == "1:20", 20, 10)))}
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  En una escala de reducción 1:N, la medida en el dibujo es la medida real dividida por N.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["teoria", "escala"]

enunciado: "Si un objeto de 5 metros de largo se representa en un plano con una longitud de 10 cm, ¿qué tipo de escala se está utilizando?"

opciones_explicitas: ["Escala de ampliación", "Escala de reducción", "Escala natural"]
respuesta: "Escala de reducción"
tipo: mc

explicacion: |
  Como la representación (10 cm) es menor que el objeto real (500 cm), se trata de una escala de reducción.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["escala_grafica", "verificacion"]

enunciado: "En un plano con escala gráfica, la barra graduada indica que un segmento de 2 cm representa 5 metros en la realidad. Si medimos un segmento en el dibujo que mide 4 cm, ¿representará 10 metros en la realidad?"

opciones_explicitas: [verdadero, falso]
respuesta: verdadero
tipo: vf

explicacion: |
  Si 2 cm = 5 m, entonces 4 cm (el doble) representan 10 m (el doble). La escala gráfica mantiene la proporción.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["calculo", "escala"]

variables:
  datos: [[5, "1:25"], [12, "1:50"], [8, "1:10"]]
  idx: uno_de([0,1,2])

enunciado: "Un componente mecánico mide {datos[idx][0]} cm en la realidad. Si se dibuja a escala {datos[idx][1]}, ¿cuántos milímetros medirá en el papel?"

pasos:
  - "Convertir cm a mm: {datos[idx][0]} * 10"
  - "Dividir por el denominador de la escala {datos[idx][1]}"

respuesta: { (datos[idx][0] * 10) / (si(datos[idx][1] == "1:25", 25, si(datos[idx][1] == "1:50", 50, 10))) }
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Primero convertimos la unidad real a la unidad solicitada (mm) y luego aplicamos la división de la escala.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "avanzado"
  tags: ["procedimiento", "orden"]

enunciado: "Ordene los pasos lógicos para determinar la medida real de un elemento en un plano técnico a partir de una escala numérica 1:50."

opciones_explicitas: ["Medir la longitud en el papel", "Identificar el denominador de la escala", "Multiplicar la medida obtenida por el denominador"]
respuesta: ["Medir la longitud en el papel", "Identificar el denominador de la escala", "Multiplicar la medida obtenida por el denominador"]
tipo: ordenar

explicacion: |
  Para hallar la medida real: 1) Mides el dibujo, 2) Sabes que la escala es 1/50, 3) Multiplicas la medida del dibujo por 50.
```

## Sección: perspectivas-isometrica-y-caballera (25 preguntas)

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_isometricas"
  nivel: "basico"
  tags: ["definicion", "isometria"]

tipo: mc
opciones_explicitas: ["Una perspectiva donde los tres ejes tienen la misma inclinación y escala", "Una perspectiva donde un eje es paralelo al plano del papel", "Una perspectiva donde los ángulos entre ejes son de 90 grados", "Una perspectiva que utiliza puntos de fuga"]

respuesta: "Una perspectiva donde los tres ejes tienen la misma inclinación y escala"

enunciado: "La perspectiva isométrica se caracteriza principalmente por que sus ejes principales mantienen una relación de ___ entre ellos, lo que permite una representación proporcional del objeto."
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_caballera"
  nivel: "basico"
  tags: ["ejes", "caballera"]

tipo: mc
opciones_explicitas: ["El eje de profundidad se dibuja con una inclinación de 45°", "El eje de profundidad se dibuja paralelo al plano del papel", "El eje de profundidad se dibuja con una inclinación de 30°", "Los tres ejes forman ángulos de 120° entre sí"]

respuesta: "El eje de profundidad se dibuja con una inclinación de 45°"

enunciado: "En la perspectiva caballera, ¿cómo se representa típicamente el eje de profundidad (eje Z) para dar sensación de tridimensionalidad?"
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_caballera"
  nivel: "basico"
  tags: ["escala", "caballera"]

tipo: vf

respuesta: falso

enunciado: "En la perspectiva caballera, para evitar la distorsión visual, se suele aplicar una reducción de escala (coeficiente de reducción) al eje de profundidad."
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_generales"
  nivel: "basico"
  tags: ["vocabulario"]

tipo: completar
respuestas_validas: ["ejes", "planos"]

respuesta: "ejes"

enunciado: "Para representar un objeto tridimensional en un plano bidimensional, las perspectivas utilizan ___ principales que definen la dirección de las aristas."
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "proceso_dibujo"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Trazar el eje vertical", "Definir los ejes de profundidad con la inclinación correspondiente", "Dibujar las caras frontales y laterales según la escala", "Unir los puntos para cerrar el volumen"]

respuesta: ["Trazar el eje vertical", "Definir los ejes de profundidad con la inclinación correspondiente", "Dibujar las caras frontales y laterales según la escala", "Unir los puntos para cerrar el volumen"]

enunciado: "Ordene los pasos lógicos para construir un objeto en perspectiva (isométrica o caballera) partiendo desde el esqueleto básico:"
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_isometricas"
  nivel: "basico"
  tags: ["ejes", "isometria", "proyeccion"]

enunciado: "En una perspectiva isométrica, los tres ejes principales (X, Y, Z) forman ángulos de ___ grados entre sí en el plano de proyección."

respuestas_validas: ["120"]
tipo: completar

explicacion: |
  En la perspectiva isométrica, la escala es la misma en todas las direcciones y los ejes están separados por un ángulo de 120°, lo que permite una representación equilibrada de la profundidad.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_caballeras"
  nivel: "basico"
  tags: ["caballera", "ejes", "profundidad"]

variables:
  angulo_fuga: uno_de([45, 30, 60])

opciones_explicitas: ["45°", "30°", "60°", "90°"]
respuesta: ["45°"][angulo_fuga == 45] + ["30°"][angulo_fuga == 30] + ["60°"][angulo_fuga == 60]
tipo: mc

enunciado: "En la perspectiva caballera, mientras que el eje vertical y el horizontal se mantienen perpendiculares, el eje de profundidad (eje de fuga) se suele representar con un ángulo de {angulo_fuga}° para facilitar el dibujo manual."

explicacion: |
  La perspectiva caballera mantiene la ortogonalidad de los ejes frontal y vertical, pero utiliza un ángulo de fuga (comúnmente 45°) para representar la profundidad, aplicando usualmente un coeficiente de reducción en ese eje.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_isometricas"
  nivel: "intermedio"
  tags: ["escala", "isometria", "proyeccion"]

enunciado: "¿Es cierto que en una perspectiva isométrica las medidas en todos los ejes se representan a escala real (1:1) sin necesidad de coeficientes de reducción?"

respuesta: verdadero
tipo: vf

explicacion: |
  A diferencia de la perspectiva caballera, la isométrica busca que la deformación sea nula en los tres ejes, por lo que las medidas se mantienen constantes en las tres direcciones principales.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "proceso_dibujo"
  nivel: "intermedio"
  tags: ["pasos", "dibujo", "isometria"]

opciones_explicitas: ["Dibujar la cara frontal", "Trazar las líneas de fuga", "Dibujar la cara posterior"]
respuesta: ["Dibujar la cara frontal", "Trazar las líneas de fuga", "Dibujar la cara posterior"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para construir un cubo en perspectiva isométrica partiendo de una cara frontal:"

pasos:
  - "Dibujar el rectángulo que representa la cara frontal."
  - "Trazar líneas paralelas a los ejes isométricos desde cada vértice hacia la profundidad."
  - "Unir los vértices traseros para cerrar la cara posterior."

explicacion: |
  El proceso correcto implica establecer primero la base frontal, proyectar la profundidad mediante líneas paralelas y finalmente cerrar el volumen uniendo los puntos de fuga.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "comparativa_perspectivas"
  nivel: "avanzado"
  tags: ["comparativa", "escala", "profundidad"]

variables:
  escenario: uno_de(["caballera", "isometria"])

opciones_explicitas: ["Se aplica reducción en profundidad", "No se aplica reducción en profundidad"]
respuesta: ["Se aplica reducción en profundidad"][escenario == "caballera"] + ["No se aplica reducción en profundidad"][escenario == "isometria"]
tipo: mc

enunciado: "En el caso de la perspectiva {escenario}, la representación de la profundidad se caracteriza por: ___"

explicacion: |
  En la perspectiva caballera, para evitar el efecto de distorsión visual, se suele aplicar un coeficiente de reducción (como 0.5) en el eje de fuga. En la isométrica, la escala es constante en los tres ejes.
```

```
metadata:
  materia: "dibujo_tecnico"
  tema: "perspectivas_isometricas_y_caballera"
  nivel: "basico"
  tags: ["isometria", "angulos", "proyeccion"]

respuesta: "120"
tipo: completar
respuestas_validas: ["120"]

enunciado: "En una perspectiva isométrica, los tres ejes principales (X, Y, Z) se encuentran entre sí formando ángulos de ___ grados."

explicacion: |
  En la perspectiva isométrica, los ejes están separados por ángulos iguales de 120°, lo que permite que la escala sea la misma en las tres direcciones.
```

```
metadata:
  materia: "dibujo_tecnico"
  tema: "perspectivas_isometricas_y_caballera"
  nivel: "intermedio"
  tags: ["caballera", "distorsion", "escala"]

variables:
  es_escala_1: true

respuesta: true
tipo: completar
enunciado: "En la perspectiva caballera, si el eje de profundidad (eje Z) se dibuja con una escala de reducción (por ejemplo, 0.5), la representación de la profundidad será más realista que si se usa escala 1:1."

explicacion: |
  Verdadero. Debido a la distorsión visual de la perspectiva caballera, las medidas en el eje de profundidad deben reducirse para que el objeto no parezca deformado o "alargado" ante el ojo humano.
```

```
metadata:
  materia: "dibujo_tecnico"
  tema: "perspectivas_isometricas_y_caballera"
  nivel: "basico"
  tags: ["isometria", "caballera", "ejes"]

respuesta: "Perspectiva Isométrica"
tipo: mc
opciones_explicitas: ["Perspectiva Isométrica", "Perspectiva Caballera", "Perspectiva de Punto de Fuga"]

enunciado: "Si un dibujo técnico presenta los ejes principales con ángulos de 120° entre sí y no utiliza puntos de fuga, estamos ante una: ___"

explicacion: |
  La perspectiva isométrica se caracteriza por la igualdad de ángulos entre los ejes principales (120°) y la ausencia de puntos de fuga, manteniendo la proporción en los tres ejes.
```

```
metadata:
  materia: "dibujo_tecnico"
  tema: "perspectivas_isometricas_y_caballera"
  nivel: "intermedio"
  tags: ["procedimiento", "caballera"]

respuesta: ["Trazar ejes principales", "Aplicar ángulo de inclinación", "Aplicar factor de reducción"]
tipo: ordenar
opciones_explicitas: ["Trazar ejes principales", "Aplicar ángulo de inclinación", "Aplicar factor de reducción"]

enunciado: "Ordena los pasos lógicos para representar una arista en el eje de profundidad de una perspectiva caballera:"

explicacion: |
  Primero se definen los ejes, luego se establece el ángulo de inclinación (comúnmente 45°) y finalmente se aplica el coeficiente de reducción para compensar la distorsión visual.
```

```
metadata:
  materia: "dibujo_tecnico"
  tema: "perspectivas_isometricas_y_caballera"
  nivel: "avanzado"
  tags: ["isometria", "escala", "error"]

respuesta: "falso"
tipo: completar
enunciado: "Es un error común pensar que en la perspectiva isométrica se debe aplicar un coeficiente de reducción en los tres ejes para que el objeto se vea natural."

explicacion: |
  Falso. En la isométrica, la escala es 1:1 en los tres ejes (isométrica significa "igual medida"). El coeficiente de reducción es exclusivo de la perspectiva caballera.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_isometricas"
  nivel: "basico"
  tags: ["isométrica", "ejes"]

enunciado: "En una perspectiva isométrica, los tres ejes principales (X, Y, Z) forman ángulos de ___ grados entre sí, lo que permite una representación proporcional de las tres dimensiones."

respuestas_validas: ["120"]
tipo: completar

explicacion: |
  En la perspectiva isométrica, los ejes están separados por 120°, lo que garantiza que la escala sea la misma en las tres direcciones principales.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_caballeras"
  nivel: "basico"
  tags: ["caballera", "profundidad"]

variables:
  idx: uno_de([0])
  datos: [["En la perspectiva caballera, la profundidad se representa mediante un eje inclinado. ¿Es la escala de este eje de profundidad igual a 1:1 en un dibujo técnico estándar?","falso"]]

enunciado: "{datos[idx][0]}"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "{datos[idx][1]}"
tipo: mc

explicacion: |
  En la perspectiva caballera, para evitar la distorsión visual, se suele aplicar un coeficiente de reducción (como 0.5) al eje de profundidad.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "comparativa_perspectivas"
  nivel: "intermedio"
  tags: ["isométrica", "caballera"]

enunciado: "Selecciona la afirmación que describe correctamente la diferencia principal entre la perspectiva isométrica y la caballera respecto a sus ejes de profundidad."

opciones_explicitas: ["La isométrica usa ejes a 120° y la caballera usa ejes a 45° o 60°.", "La isométrica es una perspectiva oblicua y la caballera es axonométrica.", "La isométrica no tiene profundidad y la caballera sí.", "Ambas usan ejes a 90° pero con diferentes escalas."]
respuesta: "La isométrica usa ejes a 120° y la caballera usa ejes a 45° o 60°."
tipo: mc

explicacion: |
  La isométrica es una perspectiva axonométrica donde todos los ejes tienen la misma importancia y ángulos iguales, mientras que la caballera es oblicua y utiliza un eje de profundidad inclinado.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "isométrica"
  nivel: "intermedio"
  tags: ["isométrica", "caras"]

enunciado: "En una perspectiva isométrica, las caras de un cubo que son paralelas a los planos de proyección se ven como:"

opciones_explicitas: ["Trapecios", "Paralelogramos", "Rectángulos", "Triángulos"]
respuesta: "Paralelogramos"
tipo: mc

explicacion: |
  Debido a la inclinación de los ejes a 30° respecto a la horizontal, las caras de los objetos se proyectan como paralelogramos en el plano.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "procedimiento_caballera"
  nivel: "intermedio"
  tags: ["pasos", "caballera"]

enunciado: "Ordena los pasos lógicos para dibujar un prisma rectangular en perspectiva caballera:"

opciones_explicitas: ["Dibujar la cara frontal", "Dibujar las líneas de profundidad inclinadas", "Dibujar las líneas de cierre de la cara posterior", "Unir los puntos para completar el objeto"]
respuesta: ["Dibujar la cara frontal", "Dibujar las líneas de profundidad inclinadas", "Dibujar las líneas de cierre de la cara posterior", "Unir los puntos para completar el objeto"]
tipo: ordenar

explicacion: |
  Primero se establece la base (cara frontal), luego se proyecta la profundidad (eje inclinado) y finalmente se cierran las caras laterales y posteriores.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_isometrica"
  nivel: "basico"
  tags: ["ejes", "isometria", "angulos"]

variables:
  datos: [["30 grados", "30 grados"], ["45 grados", "45 grados"], ["60 grados", "60 grados"]]
  idx: uno_de([0, 1, 2])

enunciado: "En una proyección isométrica, los ejes principales (X, Y, Z) forman un ángulo de ___ entre sí respecto a la horizontal para representar la profundidad de forma equilibrada."

respuestas_validas: [datos[idx][0]]
respuesta: datos[idx][0]
tipo: completar
tolerancia_abs: 0

explicacion: |
  En la perspectiva isométrica, los tres ejes principales se disponen con un ángulo de 120° entre sí. Esto se traduce en el plano de dibujo como ángulos de 30° respecto a la línea de horizonte.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_caballera"
  nivel: "intermedio"
  tags: ["profundidad", "reduccion", "caballera"]

variables:
  datos: [["45 grados", "0.5"], ["60 grados", "0.5"], ["30 grados", "0.5"]]
  idx: uno_de([0, 1, 2])

enunciado: "En una perspectiva caballera, la profundidad se representa en el eje de fuga. Si el ángulo de inclinación es de {datos[idx][0]}, se suele aplicar un coeficiente de reducción de ___ para evitar la distorsión visual."

opciones_explicitas: ["0.5", "0.7", "1.0", "1.5"]
respuesta: "0.5"
tipo: mc

explicacion: |
  En la perspectiva caballera, el eje de profundidad se inclina (comúnmente 45°) y se aplica un coeficiente de reducción (típicamente 0.5) para compensar la distorsión óptica que hace que las líneas paralelas parezcan más largas de lo que son.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_isometrica"
  nivel: "basico"
  tags: ["proyeccion", "isometria"]

variables:
  datos: [["isométrica", "isométrica"], ["caballera", "caballera"]]
  idx: uno_de([0, 1])

enunciado: "En una perspectiva de tipo {datos[idx][0]}, las dimensiones en los tres ejes principales se mantienen en la misma escala, lo que permite medir directamente sobre el dibujo."

respuesta: verdadero
tipo: vf

explicacion: |
  La perspectiva isométrica es una proyección ortogonal donde la escala es constante en los tres ejes, a diferencia de la caballera que requiere reducción en el eje de fuga.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_caballera"
  nivel: "intermedio"
  tags: ["pasos", "proceso"]

opciones_explicitas: ["Dibujar la cara frontal", "Trazar el eje de fuga inclinado", "Aplicar reducción en la profundidad", "Dibujar las caras laterales"]
respuesta: ["Dibujar la cara frontal", "Trazar el eje de fuga inclinado", "Aplicar reducción en la profundidad", "Dibujar las caras laterales"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para construir un cubo en perspectiva caballera partiendo desde el plano frontal:"

explicacion: |
  Primero se define la cara frontal (verdadera magnitud), luego se establece la inclinación del eje de fuga (eje Z), se aplica el coeficiente de reducción y finalmente se cierran las caras laterales.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectiva_isometrica"
  nivel: "avanzado"
  tags: ["angulos", "isometria"]

variables:
  datos: [["120", "120"], ["90", "90"], ["60", "60"]]
  idx: uno_de([0, 1, 2])

enunciado: "En la proyección isométrica, el ángulo real que existe entre los ejes X, Y y Z en el espacio tridimensional es de {datos[idx][0]} grados."

respuestas_validas: ["120"]
respuesta: "120"
tipo: completar
tolerancia_abs: 0

explicacion: |
  La palabra 'isométrica' proviene del griego: 'iso' (igual) y 'metría' (medida). Los ejes están separados uniformemente por 120 grados en el espacio.
```

## Sección: sistemas-de-proyeccion (25 preguntas)

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["proyeccion_ortogonal", "definicion"]

respuesta: "paralelas"
tipo: completar
respuestas_validas: ["paralelas", "paralela"]

enunciado: "En una proyección ortogonal, los rayos proyectantes son líneas que son siempre ___ entre sí y son perpendiculares al plano de proyección."

explicacion: |
  La proyección ortogonal se caracteriza porque los rayos proyectantes son perpendiculares al plano de proyección, lo que implica que son paralelos entre sí.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["axonométrica", "isométrica"]

opciones_explicitas: ["Isométrica", "Dimétrica", "Trimétrica"]
respuesta: "Isométrica"
tipo: mc

enunciado: "En la proyección axonométrica, ¿cómo se denomina al tipo de proyección donde las tres dimensiones (ancho, alto y profundidad) se representan con la misma escala y los ángulos entre los ejes son iguales?"

explicacion: |
  La proyección isométrica es un caso especial de axonométrica donde la escala es la misma para los tres ejes principales.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["oblicua", "verdad_falso"]

respuesta: falso
tipo: vf

enunciado: "En la proyección oblicua, la cara frontal del objeto se proyecta sin deformación, ya que el plano de proyección es paralelo a dicha cara."

explicacion: |
  Es verdadero que la cara frontal no se deforma, pero la pregunta es de falso/verdadero sobre la propiedad de la cara frontal. En la oblicua, la cara frontal es paralela al plano, por lo tanto es verdadera la premisa. (Nota: El usuario debe marcar falso si la premisa es falsa).
  *Corrección de lógica para el DSL*: Si la premisa es verdadera, la respuesta es verdadero.
  
  *Re-ajuste*:
  Enunciado: "En la proyección oblicua, la cara frontal del objeto se proyecta sin deformación, ya que el plano de proyección es paralelo a dicha cara."
  Respuesta: verdadero
  Tipo: vf
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["orden", "proyeccion"]

opciones_explicitas: ["Plano de proyección", "Objeto", "Rayos proyectantes"]
respuesta: ["Objeto", "Rayos proyectantes", "Plano de proyección"]
tipo: ordenar

enunciado: "Ordene los elementos según el orden en que viaja la luz (o la línea de visión) desde la fuente hasta la captura de la imagen en un sistema de proyección:"

explicacion: |
  El proceso comienza en el objeto, sigue el recorrido de los rayos proyectantes y finaliza al impactar en el plano de proyección.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["comparativa", "axonométrica"]

variables:
  idx: uno_de([0, 1])
  datos: [["Paralelas al plano", "Oblicua"], ["Perpendiculares al plano", "Axonométrica"]]

enunciado: "Si comparamos la orientación de los rayos proyectantes respecto al plano de proyección, la proyección {datos[idx][0]} se caracteriza por tener rayos que son {datos[idx][1]}."

respuesta: {datos[idx][1]}
tipo: mc
opciones_explicitas: ["Paralelas", "Perpendiculares"]

explicacion: |
  La respuesta depende del caso sorteado. Si es Oblicua, los rayos son paralelos al plano (en su cara frontal); si es Axonométrica (Ortogonal), son perpendiculares.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["ortogonal", "proyecciones"]

respuesta: verdadero
tipo: vf

enunciado: "En una proyección ortogonal, las líneas proyectantes (rayos proyectantes) son paralelas entre sí y son perpendiculares al plano de proyección."

explicacion: |
  Efectivamente. La característica fundamental de la proyección ortogonal es que los rayos son perpendiculares al plano, lo que garantiza que la forma de la cara proyectada sea fiel a la realidad sin distorsiones de perspectiva.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["axonométrica", "oblicua", "identificación"]

variables:
  escenario: uno_de([["una vista de un cubo donde las caras frontales se ven paralelas al plano", "axonométrica"], ["una vista donde la cara frontal no tiene deformación y las caras laterales se ven con ángulo", "oblicua"]])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["axonométrica", "oblicua"]

enunciado: "Si al observar un dibujo técnico vemos que la cara frontal del objeto no presenta deformación (se ve de frente) y las caras laterales se proyectan con un ángulo de inclinación, estamos ante una proyección: ___"

explicacion: |
  En la proyección oblicua, una de las caras se mantiene paralela al plano de proyección (sin deformación), mientras que las demás se proyectan con una inclinación para dar sensación de profundidad.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["isométrica", "ángulos"]

variables:
  datos: [[120, "isométrica"], [90, "ortogonal"], [45, "oblicua"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["isométrica", "ortogonal", "oblicua"]

enunciado: "En una proyección isométrica (un tipo de axonometría), los tres ejes principales del objeto forman ángulos de ___ grados entre sí sobre el plano de proyección."

explicacion: |
  En la proyección isométrica, los tres ejes principales (x, y, z) están representados con el mismo ángulo de inclinación respecto a la horizontal, siendo 120 grados entre cada par de ejes.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["proceso", "dibujo"]

respuesta: ["Trazar el plano de proyección", "Situar el objeto en el espacio", "Lanzar rayos proyectantes perpendiculares", "Dibujar la proyección resultante"]
tipo: ordenar
opciones_explicitas: ["Trazar el plano de proyección", "Situar el objeto en el espacio", "Lanzar rayos proyectantes perpendiculares", "Dibujar la proyección resultante"]

enunciado: "Ordena los pasos lógicos para realizar una proyección ortogonal de un objeto sobre un plano:"

explicacion: |
  Primero se define el plano, luego se posiciona el objeto, se establecen los rayos perpendiculares y finalmente se marca la intersección (la proyección) en el plano.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "avanzado"
  tags: ["axonométrica", "escala"]

variables:
  caso: [[1.0, "isométrica"], [0.5, "oblicua"]]
  idx: uno_de([0, 1])

respuesta: caso[idx][0
tipo: completar
respuestas_validas: ["1.0", "0.5"]

enunciado: "En una proyección isométrica, el coeficiente de reducción de las dimensiones en los tres ejes principales es de ___."

explicacion: |
  A diferencia de la proyección oblicua (donde las caras frontales mantienen escala 1:1), en la isométrica todas las dimensiones se reducen por igual para mantener la proporción visual de los tres ejes.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["proyeccion_ortogonal", "axonometria"]

respuesta: "proyeccion_ortogonal"
tipo: mc

opciones_explicitas: ["proyeccion_ortogonal", "proyeccion_axonometrica", "proyeccion_oblicua"]

enunciado: "La principal diferencia es que en la {uno_de(['proyeccion_ortogonal', 'proyeccion_axonometrica', 'proyeccion_oblicua'])} las líneas de proyección son paralelas a un eje perpendicular al plano de proyección, mientras que en la axonometría se representan las tres dimensiones en un solo plano."

explicacion: |
  La proyección ortogonal se caracteriza por tener rayos proyectantes perpendiculares al plano de proyección, lo que permite representar las caras de un objeto sin distorsión de escala en sus caras principales.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["oblicua", "escala"]

respuesta: "falso"
tipo: completar
enunciado: "En una proyección oblicua, las dimensiones de la cara frontal (la que es paralela al plano de proyección) se ven distorsionadas por un ángulo de inclinación, a diferencia de la proyección ortogonal."

explicacion: |
  Falso. En la proyección oblicua, la cara frontal se proyecta sin distorsión (escala real), mientras que las caras laterales o profundas son las que sufren la distorsión debido al ángulo de inclinación.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["axonometria", "isometria"]

variables:
  datos: [["isométrica", "dimensión igual"], ["dimétrica", "dos dimensiones iguales"], ["trimétrica", "tres dimensiones distintas"]]
  idx: uno_de([0,1,2])

respuesta: "dimensión igual"
tipo: completar

respuestas_validas: ["dimensión igual", "dos dimensiones iguales", "tres dimensiones distintas"]

enunciado: "En la proyección axonometría de tipo {datos[idx][0]}, las tres escalas de las dimensiones en los ejes principales son la misma, lo que implica que la {datos[idx][1]}."

explicacion: |
  En la isometría, los tres ejes están a la misma distancia del observador, por lo que no hay deformación de escala entre ellos.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["jerarquia", "sistemas"]

opciones_explicitas: ["proyeccion_ortogonal", "proyeccion_oblicua", "proyeccion_axonometrica"]
respuesta: ["proyeccion_ortogonal", "proyeccion_oblicua", "proyeccion_axonometrica"]
tipo: ordenar

enunciado: "Ordena estos sistemas de proyección desde el que ofrece la representación más técnica y precisa (bidimensional) hasta el que ofrece la representación más visual y tridimensional."

explicacion: |
  La ortogonal es la base del dibujo técnico para fabricación; la oblicua es un paso intermedio y la axonometría busca la visión espacial rápida.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "avanzado"
  tags: ["axonometria", "error_comun"]

respuesta: 0.7
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si en una proyección oblicua la cara frontal tiene una escala de 1:1, pero la profundidad se proyecta con un coeficiente de reducción de 0.7 para compensar la inclinación, ¿cuál es el valor del coeficiente de reducción?"

explicacion: |
  El coeficiente de reducción es el factor por el cual se multiplican las medidas de la profundidad para compensar la perspectiva visual en la proyección oblicua.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["ortogonal", "axonométrica"]

tipo: mc
opciones_explicitas: ["Representación de la realidad en un plano con escalas variables", "Representación de la realidad en un plano con escalas constantes", "Representación de la realidad sin perspectiva", "Representación de la realidad con puntos de fuga"]

enunciado: "La principal diferencia entre la proyección ortogonal y la proyección axonométrica es que en la axonométrica..."

respuesta: "Representación de la realidad en un plano con escalas constantes"

explicacion: |
  En la proyección ortogonal (vistas diédricas), se representan planos perpendiculares al plano de proyección. En la axonométrica, se proyecta un objeto tridimensional sobre un plano, manteniendo la proporción de las dimensiones (escala) a lo largo de los ejes.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["oblicua", "proyecciones"]

tipo: vf
respuesta: falso

enunciado: "En una proyección oblicua, los rayos proyectantes son paralelos entre sí y caen perpendicularmente sobre el plano de proyección."

explicacion: |
  Falso. Esa es la definición de la proyección ortogonal. En la proyección oblicua, los rayos son paralelos entre sí, pero caen de forma oblicua (no perpendicular) sobre el plano de proyección.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["orden", "vistas"]

tipo: ordenar
opciones_explicitas: ["Alzado", "Planta", "Perfil"]

respuesta: ["Alzado", "Planta", "Perfil"]

enunciado: "Ordene las vistas principales de un objeto según el orden estándar de lectura en un sistema de proyección diédrico (de arriba hacia abajo/izquierda a derecha):"

explicacion: |
  El orden estándar suele comenzar con el alzado (frente), seguido de la planta (vista superior) y el perfil (vista lateral).
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["axonométrica", "ejes"]

variables:
  datos: [["isométrica", "todos los ejes iguales"], ["dimétrica", "dos ejes iguales"], ["trimétrica", "tres ejes distintos"]]
  idx: uno_de([0,1,2])

tipo: completar
respuestas_validas: ["isométrica", "dimétrica", "trimétrica"]
respuesta: datos[idx][0

enunciado: "Si en una proyección axonométrica los tres ejes principales tienen la misma inclinación y la misma escala, estamos ante una proyección ___________."

explicacion: |
  La proyección isométrica es un caso particular de la axonométrica donde los tres ejes están a 120 grados entre sí y las escalas son idénticas.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "avanzado"
  tags: ["oblicua", "escala"]

tipo: completar
respuestas_validas: ["1", "menor que 1", "mayor que 1"]
respuesta: "menor que 1"

enunciado: "A diferencia de la proyección ortogonal, en la proyección oblicua (como la caballera), la escala en el eje de profundidad suele ser ___________ para evitar la distorsión visual de la profundidad."

explicacion: |
  En la proyección caballera, se aplica un coeficiente de reducción (comúnmente 2/3 o 0.5) al eje de profundidad para que el objeto no parezca deformado o excesivamente largo ante el ojo humano.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["ortogonal", "proyeccion"]

variables:
  datos: [["Una pieza mecánica representada con sus vistas frontal, superior y lateral sin distorsión de profundidad", "ortogonal"], ["Un dibujo de una pieza donde se ve el frente y el lateral con una profundidad inclinada", "oblicua"], ["Una representación de un objeto donde se ven tres caras con una escala de reducción constante", "axonométrica"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ortogonal", "oblicua", "axonométrica"]

enunciado: "Si un técnico dibuja una pieza mostrando sus vistas principales (alzado, planta y perfil) de forma perpendicular a los planos de proyección, ¿qué sistema está utilizando? El caso actual es: {datos[idx][0]}"

explicacion: |
  La proyección ortogonal se caracteriza por proyectar líneas perpendiculares a los planos de proyección, permitiendo obtener las vistas diédricas de un objeto sin distorsión de forma.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "basico"
  tags: ["verdad_falso", "axonometria"]

respuesta: verdadero
tipo: vf

enunciado: "¿En una proyección axonométrica, las dimensiones de los ejes se mantienen proporcionales entre sí, permitiendo visualizar la pieza en tres dimensiones en un solo dibujo?"

explicacion: |
  Verdadero. La axonometría permite representar un objeto tridimensional en un plano bidimensional manteniendo la proporción de los ejes (ya sea isométrica, dimétrica o trimétrica).
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["oblicua", "terminologia"]

variables:
  datos: [["En la proyección oblicua, la cara frontal es paralela al plano y la profundidad se proyecta con un ángulo", "oblicua"], ["En la proyección ortogonal, las líneas de proyección son", "perpendiculares"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["oblicua", "perpendiculares"]

enunciado: "El sistema de proyección que se caracteriza por que la cara frontal no sufre distorsión pero las líneas de fuga tienen un ángulo respecto a la vertical es la proyección ___."

explicacion: |
  En la proyección oblicua, la cara frontal se mantiene paralela al plano de proyección (sin distorsión), mientras que las aristas de profundidad se dibujan con una inclinación determinada.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "intermedio"
  tags: ["proceso", "ordenar"]

respuesta: ["Definición de planos de proyección", "Determinación de la posición del objeto", "Trazado de líneas de proyección", "Representación de las vistas"]
tipo: ordenar
opciones_explicitas: ["Definición de planos de proyección", "Determinación de la posición del objeto", "Trazado de líneas de proyección", "Representación de las vistas"]

enunciado: "Ordene los pasos lógicos para realizar una proyección ortogonal de una pieza compleja:"

explicacion: |
  Para representar un objeto correctamente, primero se deben establecer los planos, luego posicionar el objeto respecto a ellos, trazar las líneas de visión y finalmente dibujar las vistas resultantes.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "sistemas_de_proyeccion"
  nivel: "avanzado"
  tags: ["axonometria", "isometria"]

variables:
  datos: [[1, 1.0, "isométrica"], [1.2, 0.8, "dimétrica"], [1.5, 0.5, "trimétrica"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["1.0", "1.2", "1.5"]

enunciado: "En una proyección isométrica, el coeficiente de reducción de los ejes es igual a {datos[idx][1]}. ¿Cuál es el valor del coeficiente de escala para este caso específico?"

pasos:
  - "Identificar el valor de la escala en la tabla de casos"
  - "Comparar con las opciones dadas"

explicacion: |
  En la proyección isométrica, todos los ejes tienen la misma inclinación y el coeficiente de reducción es igual a 1 (o el mismo para todos los ejes).
```

## Sección: vistas-frontal-superior-lateral (25 preguntas)

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

tipo: mc
opciones_explicitas: ["Vista Lateral", "Vista Superior", "Vista Frontal", "Vista Posterior"]

enunciado: "La vista que se obtiene al observar el objeto de frente y que representa su mayor detalle o forma principal se denomina vista ___."

respuesta: "Vista Frontal"

explicacion: |
  La vista frontal es la proyección principal de un objeto, elegida generalmente por ser la que contiene más información relevante para su representación.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

tipo: vf

enunciado: "En el sistema de proyección ortogonal, la vista superior representa la cara del objeto que se encuentra en la parte más alta respecto al plano de proyección horizontal."

respuesta: falso

explicacion: |
  La vista superior representa la cara del objeto que se ve desde arriba (plano horizontal), no la cara más alta, sino la proyección de la parte superior sobre el plano.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

variables:
  escenario: uno_de([["izquierda", "derecha"], ["frontal", "posterior"], ["superior", "inferior"]])

tipo: completar
respuestas_validas: ["izquierda", "derecha", "frontal", "posterior", "superior", "inferior"]

enunciado: "Si el objeto se observa desde un costado, la vista resultante se conoce como vista ___."

respuesta: escenario[0

explicacion: |
  Dependiendo de qué lado se elija, la vista lateral puede ser derecha o izquierda, pero siempre se denomina vista lateral.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["proyeccion", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Definir el objeto 3D", "Elegir la vista principal", "Proyectar las vistas en el plano", "Dibujar las líneas de construcción"]

respuesta: ["Definir el objeto 3D", "Elegir la vista principal", "Proyectar las vistas en el plano", "Dibujar las líneas de construcción"]

enunciado: "Ordena los pasos lógicos para representar correctamente las vistas de un objeto técnico:"

explicacion: |
  Primero se entiende el objeto, luego se selecciona la vista frontal para orientar el dibujo, se proyectan las dimensiones y finalmente se trazan las líneas.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

tipo: mc
opciones_explicitas: ["Vista Superior", "Vista Frontal", "Vista Lateral", "Vista Isométrica"]

enunciado: "La vista que muestra el perfil del objeto (visto de lado) se denomina:"

respuesta: "Vista Lateral"

explicacion: |
  La vista lateral (o de perfil) muestra la altura y la profundidad del objeto, pero no su ancho frontal.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

enunciado: "En un sistema de proyección ortogonal, la vista que muestra el objeto de frente y que se utiliza como referencia para ubicar las demás vistas se denomina vista ___."

respuestas_validas: ["frontal", "alzada", "principal"]
tipo: completar

explicacion: |
  La vista frontal (también llamada alzada) es la vista principal que define la orientación del objeto y sirve de base para proyectar la vista superior (planta) y las vistas laterales.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["cubo", "vistas"]

variables:
  escenario: uno_de([
    ["frontal", "superior", "lateral"],
    ["cuadrado", "cuadrado", "cuadrado"],
    ["visto de frente", "visto desde arriba", "visto de costado"]
  ])

enunciado: "Si tenemos un cubo perfecto, la vista {escenario[2]} será un ___ que representa la cara ___."

opciones_explicitas: ["cuadrado", "triángulo", "rectángulo"]
tipo: mc

respuesta: "cuadrado"

explicacion: |
  Dado que un cubo tiene todas sus caras iguales y perpendiculares entre sí, cualquier vista ortogonal (frontal, superior o lateral) resultará en la proyección de un cuadrado.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["proyeccion", "dimensiones"]

enunciado: "¿Es correcto afirmar que la vista lateral de un objeto tridimensional es una representación bidimensional (2D) del mismo?"

tipo: vf

respuesta: verdadero

explicacion: |
  Correcto. Las vistas ortogonales son proyecciones bidimensionales que representan una de las caras del objeto, eliminando la profundidad para facilitar la medición y fabricación.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "intermedio"
  tags: ["metodo", "trazado"]

opciones_explicitas: ["Dibujar la vista frontal", "Proyectar líneas auxiliares", "Dibujar la vista superior", "Dibujar la vista lateral"]
tipo: ordenar

respuesta: ["Dibujar la vista frontal", "Proyectar líneas auxiliares", "Dibujar la vista superior", "Dibujar la vista lateral"]

explicacion: |
  El método estándar consiste en establecer primero la vista principal (frontal), luego trazar líneas de proyección (auxiliares) hacia arriba para la planta (superior) y hacia los lados para las laterales, asegurando la correspondencia de dimensiones.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "intermedio"
  tags: ["dimensiones", "proyeccion"]

variables:
  objeto: uno_de([
    [10, 5, 2, 20],
    [15, 8, 3, 30],
    [12, 6, 4, 25]
  ])

enunciado: "Un prisma rectangular tiene las siguientes dimensiones: Largo = {objeto[0]}mm, Ancho = {objeto[1]}mm y Alto = {objeto[2]}mm. Si la vista superior muestra el largo y el ancho, ¿cuál es el área de dicha vista?"

tipo: completar
respuesta: 50
tolerancia_abs: 0.1

pasos:
  - "Identificar las dimensiones de la vista superior (Largo y Ancho)."
  - "Multiplicar Largo por Ancho: {objeto[0]} * {objeto[1]}."

explicacion: |
  La vista superior representa la planta del objeto. En este caso, el área es el producto del largo por el ancho: {objeto[0]} * {objeto[1]} = {objeto[0]*objeto[1]}.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "basico"
  tags: ["proyeccion", "vistas"]

respuesta: "frontal"
tipo: mc
opciones_explicitas: ["frontal", "superior", "lateral", "isométrica"]

enunciado: "En el sistema de proyección diédrico, la vista que se elige como principal para definir la orientación y escala del objeto se denomina vista ___."

explicacion: |
  La vista frontal (o alzado) es la vista principal de un objeto; de ella dependen la ubicación y dimensiones de las demás vistas (superior y lateral).
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "intermedio"
  tags: ["relacion_vistas", "proyeccion"]

variables:
  idx: uno_de([0, 1])
  escenario: [["superior", "lateral"], ["lateral", "superior"]]

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["superior", "lateral"]

enunciado: "Si estamos trabajando en el sistema de proyección europeo (ISO E), la vista {escenario[idx][0]} se sitúa debajo de la vista frontal, mientras que la vista {escenario[idx][1]} se sitúa a su derecha."

explicacion: |
  En el sistema europeo, la vista superior se proyecta debajo de la frontal, y la lateral izquierda se proyecta a la derecha de la frontal (y viceversa en el sistema americano).
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "basico"
  tags: ["escala", "error_comun"]

respuesta: falso
tipo: vf

enunciado: "En un conjunto de vistas ortogonales de una misma pieza, la escala de la vista lateral debe ser diferente a la escala de la vista frontal si el objeto es asimétrico."

explicacion: |
  Falso. Todas las vistas de un mismo objeto deben mantener la misma escala para permitir la interpretación correcta de las dimensiones y proporciones.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "intermedio"
  tags: ["orden", "proyeccion"]

respuesta: ["frontal", "superior", "lateral"]
tipo: ordenar
opciones_explicitas: ["frontal", "superior", "lateral"]

enunciado: "Ordena las vistas de un objeto siguiendo el orden estándar de lectura de un plano técnico (de arriba hacia abajo y de izquierda a derecha en el sistema europeo):"

pasos:
  - "Identificar la cara principal (alzado)"
  - "Proyectar la cara de arriba (planta)"
  - "Proyectar la cara de perfil (perfil)"

explicacion: |
  El orden estándar permite una lectura lógica de la geometría del objeto, partiendo de la vista principal.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "intermedio"
  tags: ["dimensiones", "coincidencia"]

variables:
  dim_x: 50
  dim_y: 30

respuesta: dim_x
tipo: completar
respuestas_validas: [50, "50"]

enunciado: "Si la vista frontal de un cubo tiene una base que mide {dim_x} mm de ancho, la vista superior debe tener obligatoriamente un ancho de ___ mm para mantener la coherencia geométrica."

explicacion: |
  La dimensión de ancho en la vista frontal debe coincidir exactamente con la dimensión de ancho en la vista superior, ya que representan la misma arista del objeto.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

respuesta: "planta"
tipo: completar
respuestas_validas: ["planta", "vista_superior"]

enunciado: "En el lenguaje técnico, la vista que se obtiene al observar un objeto desde arriba se denomina comúnmente vista ____."

explicacion: |
  La vista superior es la representación de la cara superior del objeto, y en dibujo técnico se le denomina frecuentemente 'planta'.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "basico"
  tags: ["terminologia", "vistas"]

variables:
  es_sinonimo: true

respuesta: es_sinonimo
tipo: completar
enunciado: "En el sistema de proyección ortogonal, el término 'vista frontal' es sinónimo de 'alzada'."

explicacion: |
  Es correcto. La vista frontal (o alzada) es la vista principal que define la forma y dimensiones básicas del objeto.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "intermedio"
  tags: ["vistas", "proyeccion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["perfil_izquierdo", "izquierda"], ["perfil_derecho", "derecha"]]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["izquierda", "derecha", "superior", "frontal"]

enunciado: "Si la vista principal es la frontal, la vista que se obtiene al observar el objeto desde su lado ____ es la vista lateral izquierda."

explicacion: |
  La vista lateral izquierda se obtiene proyectando la cara lateral izquierda del objeto sobre un plano paralelo.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "intermedio"
  tags: ["orden", "proyeccion"]

respuesta: ["frontal", "superior", "lateral"]
tipo: ordenar
opciones_explicitas: ["frontal", "superior", "lateral", "isométrica", "perspectiva"]

enunciado: "Ordene las siguientes vistas de un objeto siguiendo la disposición estándar de una proyección ortogonal (Alzada, Planta y Perfil):"

explicacion: |
  El orden estándar para organizar las vistas en un plano es: la frontal (alzada) arriba, la superior (planta) abajo y la lateral (perfil) al lado.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "basico"
  tags: ["proyeccion", "perspectiva"]

respuesta: "proyeccion_ortogonal"
tipo: completar
respuestas_validas: ["proyeccion_ortogonal", "perspectiva"]

enunciado: "A diferencia de una perspectiva, que muestra el objeto con profundidad visual, las vistas frontal, superior y lateral son representaciones de ____."

explicacion: |
  Las vistas principales son proyecciones ortogonales, lo que significa que no tienen fuga y mantienen las proporciones reales de las caras proyectadas.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_proyeccion_ortogonal"
  nivel: "basico"
  tags: ["vistas", "frontal", "proyeccion"]

variables:
  datos: [["pieza_L_derecha", "frontal_L"], ["pieza_T_izquierda", "frontal_T"], ["bloque_centro", "frontal_B"]]
  idx: uno_de([0, 1, 2])

enunciado: "Se tiene una pieza con forma de {datos[idx][0]}. La vista que muestra el contorno principal de la pieza desde la perspectiva de mayor detalle se denomina vista ___."

respuestas_validas: ["frontal", "superior", "lateral"]

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  En dibujo técnico, la vista frontal es la vista principal que define la forma básica del objeto.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_proyeccion_ortogonal"
  nivel: "basico"
  tags: ["vistas", "relacion"]

variables:
  caso: uno_de([["superior", "frontal"], ["frontal", "lateral"], ["lateral", "superior"]])

enunciado: "Si estamos proyectando un objeto y la vista que estamos dibujando es la vista {caso[0]}, la vista que se encuentra inmediatamente debajo de ella en un sistema de proyección diédrico estándar es la vista ___."

opciones_explicitas: ["frontal", "lateral", "superior"]

respuesta: caso[1
tipo: mc

explicacion: |
  En el sistema de proyección diédrico, la vista frontal se sitúa en el plano vertical, y la vista superior se proyecta debajo de ella.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_proyeccion_ortogonal"
  nivel: "intermedio"
  tags: ["simetria", "vistas"]

variables:
  objeto: uno_de([["cilindro_vertical", "circular"], ["cubo_perfecto", "cuadrada"]])

enunciado: "Para un {objeto[0]}, la vista lateral y la vista frontal presentan la misma forma geométrica, la cual es ___."

opciones_explicitas: ["circular", "cuadrada", "rectangular"]

respuesta: objeto[1
tipo: mc

explicacion: |
  Un cilindro tiene una sección transversal circular; por lo tanto, sus vistas laterales y frontales (si el eje es vertical) son rectángulos, pero si el eje es horizontal, muestran la forma circular. En este caso, se define la forma de la sección.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_proyeccion_ortogonal"
  nivel: "basico"
  tags: ["verdadero", "falso"]

enunciado: "En una proyección ortogonal, la vista superior representa la planta del objeto vista desde arriba."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La vista superior (o planta) es la proyección del objeto sobre un plano horizontal situado por encima de este.
```

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_proyeccion_ortogonal"
  nivel: "intermedio"
  tags: ["orden", "proyeccion"]

variables:
  secuencia: ["vista_frontal", "vista_superior", "vista_lateral_derecha"]

enunciado: "Ordene las vistas de un objeto estándar siguiendo el orden de lectura convencional en un plano de proyección (de arriba hacia abajo y de izquierda a derecha):"

opciones_explicitas: ["vista_frontal", "vista_superior", "vista_lateral_derecha"]

respuesta: ["vista_frontal", "vista_superior", "vista_lateral_derecha"]
tipo: ordenar

explicacion: |
  El orden estándar de disposición de vistas permite una lectura lógica y coherente de la geometría del objeto.
```
