### 1 — Elementos de la línea de cota
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

### 2 — Orientación de la cifra de cota
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

### 3 — Componentes de la acotación
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

### 4 — Secuencia de acotación en una pieza
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

### 5 — Unidades en el dibujo técnico
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