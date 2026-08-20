# Matemática — Identidades y ecuaciones trigonométricas (cuestionario, 26 preguntas VBLang)

> Tema: `TRIG3`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Diferencia entre identidad y ecuación

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "basico"
  tags: ["identidades", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre una identidad y una ecuación trigonométrica?"
tipo: mc
opciones_explicitas:
  - "La identidad se cumple para todo ángulo; la ecuación sólo para algunos ángulos específicos"
  - "Son exactamente lo mismo, dos nombres para un solo concepto"
  - "La identidad sólo aplica al seno; la ecuación sólo al coseno"
respuesta: "La identidad se cumple para todo ángulo; la ecuación sólo para algunos ángulos específicos"

explicacion: |
  Es la distinción central de este módulo.
```

### 2 — sen²θ + cos²θ = 1 es una identidad

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["identidades"]

respuesta: verdadero
tipo: vf

enunciado: "sen²θ + cos²θ = 1 es una identidad: se cumple para absolutamente cualquier ángulo θ."

explicacion: |
  Es consecuencia del teorema de Pitágoras aplicado al círculo unitario.
```

### 3 — sen(θ) = 0,5 es una ecuación, no una identidad

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones"]

respuesta: verdadero
tipo: vf

enunciado: "sen(θ) = 0,5 es una ecuación: sólo se cumple para algunos ángulos específicos, no para todos."

explicacion: |
  Para la mayoría de los ángulos, sen(θ) da un valor distinto de 0,5.
```

### 4 — Completar: identidad pitagórica

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "basico"
  tags: ["identidades", "completar"]

tipo: completar
enunciado: "Completá la identidad pitagórica: sen²θ + cos²θ = ___."
respuestas_validas:
  - "1"

explicacion: |
  Vale para cualquier ángulo θ.
```

### 5 — Problema: hallar sen a partir de cos

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["identidades", "problema"]

respuesta: 0.6
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un ángulo θ del primer cuadrante, cos(θ) = 0,8. Usando la identidad pitagórica, ¿cuánto vale sen(θ)?"

pasos:
  - "sen²θ = 1 − 0,8² = 1 − 0,64 = 0,36"
  - "senθ = √0,36 = 0,6"

explicacion: |
  Es el mismo triángulo 3-4-5, ahora con los lados divididos por la
  hipotenusa (0,6 = 3/5, 0,8 = 4/5).
```

### 6 — Problema: hallar cos a partir de sen

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["identidades", "problema"]

respuesta: 0.8
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un ángulo θ del primer cuadrante, sen(θ) = 0,6. Usando la identidad pitagórica, ¿cuánto vale cos(θ)?"

pasos:
  - "cos²θ = 1 − 0,6² = 1 − 0,36 = 0,64"
  - "cosθ = √0,64 = 0,8"

explicacion: |
  En el primer cuadrante, tanto seno como coseno son positivos, así que
  se toma la raíz positiva.
```

### 7 — Identidad de ángulos complementarios

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["identidades", "vocabulario"]

enunciado: "¿Qué dice la identidad sen(90° − θ) = cos(θ)?"
tipo: mc
opciones_explicitas:
  - "Que el seno de un ángulo es igual al coseno de su ángulo complementario"
  - "Que el seno y el coseno de cualquier ángulo son siempre iguales"
  - "Que 90° menos cualquier ángulo siempre da 0"
respuesta: "Que el seno de un ángulo es igual al coseno de su ángulo complementario"

explicacion: |
  Dos ángulos son complementarios si suman 90°.
```

### 8 — Problema: usar la identidad de complementarios

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["identidades", "problema"]

respuesta: 0.5
tipo: input
tolerancia_abs: 0.01

enunciado: "Sabiendo que sen(30°) = 0,5, y que 30° y 60° son ángulos complementarios (suman 90°), ¿cuánto vale cos(60°)?"

explicacion: |
  sen(30°) = cos(90° − 30°) = cos(60°): valen exactamente lo mismo.
```

### 9 — Problema: complementarios con otro valor

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["identidades", "problema"]

variables:
  valor: uno_de([0.6, 0.71, 0.87])

respuesta: valor
tipo: input
tolerancia_abs: 0.01

enunciado: "Se sabe que cos(35°) = {valor}. ¿Cuánto vale sen(55°)? (35° y 55° son complementarios)"

explicacion: |
  cos(35°) = sen(90° − 35°) = sen(55°): mismo valor.
```

### 10 — 30° y 150° son suplementarios

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones"]

respuesta: verdadero
tipo: vf

enunciado: "30° y 150° son ángulos suplementarios: suman exactamente 180°."

explicacion: |
  Es la relación que explica por qué comparten el mismo valor de seno.
```

### 11 — sen(30°) = sen(150°)

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones"]

respuesta: verdadero
tipo: vf

enunciado: "sen(30°) y sen(150°) valen exactamente lo mismo."

explicacion: |
  El seno de un ángulo y el de su suplemento son siempre iguales — por
  la simetría del círculo unitario respecto del eje y.
```

### 12 — Cuántas soluciones tiene sen(θ) = 0,5

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "problema"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos ángulos distintos, entre 0° y 360°, cumplen sen(θ) = 0,5?"

explicacion: |
  30° y 150° (suplementarios), ambos con seno 0,5.
```

### 13 — Ordenar: las dos soluciones de sen(θ) = 0,5

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["ecuaciones", "ordenar"]

enunciado: "Ordená de menor a mayor las dos soluciones de sen(θ) = 0,5 entre 0° y 360°."
tipo: ordenar
opciones_explicitas:
  - "150°"
  - "30°"
respuesta_orden: ["30°", "150°"]
explicacion: |
  Son ángulos suplementarios: 30° + 150° = 180°.
```

### 14 — Problema: resolver sen(θ) = 1

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "problema"]

respuesta: 90
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué ángulo, entre 0° y 360°, cumple sen(θ) = 1?"

explicacion: |
  Es el único punto del círculo unitario con ordenada máxima, (0, 1).
```

### 15 — sen(θ) = 1 tiene una única solución en una vuelta

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["ecuaciones"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de sen(θ) = 0,5 (con dos soluciones), sen(θ) = 1 tiene una única solución entre 0° y 360°."

explicacion: |
  El valor máximo del seno se alcanza en un solo punto del círculo
  unitario por vuelta.
```

### 16 — Problema: resolver cos(θ) = 1

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "problema"]

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué ángulo, entre 0° y 360°, cumple cos(θ) = 1?"

explicacion: |
  Es el punto (1, 0) del círculo unitario, el ángulo de partida.
```

### 17 — Problema: resolver cos(θ) = 0,5

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["ecuaciones", "problema"]

respuesta: 60
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué ángulo del primer cuadrante (entre 0° y 90°) cumple cos(θ) = 0,5?"

explicacion: |
  cos(60°) = 0,5, uno de los valores notables ya conocidos (también
  cumple θ = 300°, fuera del primer cuadrante).
```

### 18 — No toda ecuación trigonométrica tiene solución

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["ecuaciones"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación sen(θ) = 2 no tiene ninguna solución, para ningún ángulo θ."

explicacion: |
  El seno nunca puede superar 1: su amplitud está acotada.
```

### 19 — Por qué sen(θ) = 2 no tiene solución

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "vocabulario"]

enunciado: "¿Por qué la ecuación sen(θ) = 2 no tiene solución para ningún ángulo?"
tipo: mc
opciones_explicitas:
  - "Porque el seno está acotado entre −1 y 1, y 2 queda fuera de ese rango"
  - "Porque 2 es un número par"
  - "En realidad sí tiene solución, para ángulos muy grandes"
respuesta: "Porque el seno está acotado entre −1 y 1, y 2 queda fuera de ese rango"

explicacion: |
  Es la amplitud ya vista en
  `../funciones-trigonometricas-seno-coseno/`.
```

### 20 — Ordenar: pasos para resolver una ecuación trigonométrica simple

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "ordenar"]

enunciado: "Ordená los pasos para resolver una ecuación como sen(θ) = k, con k un valor notable."
tipo: ordenar
opciones_explicitas:
  - "Revisar si existe una segunda solución (el suplemento) dentro de la misma vuelta"
  - "Verificar que k esté entre −1 y 1 (si no, no hay solución)"
  - "Buscar en la tabla de ángulos notables cuál da ese valor de seno"
respuesta_orden: ["Verificar que k esté entre −1 y 1 (si no, no hay solución)", "Buscar en la tabla de ángulos notables cuál da ese valor de seno", "Revisar si existe una segunda solución (el suplemento) dentro de la misma vuelta"]
explicacion: |
  Verificar el rango primero evita buscar una solución que no existe.
```

### 21 — Problema: verificar la identidad con valores concretos

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["identidades", "problema"]

respuesta: 1
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un ángulo θ, sen(θ) = 0,6 y cos(θ) = 0,8. ¿Cuánto da sen²θ + cos²θ?"

pasos:
  - "0,6² + 0,8² = 0,36 + 0,64 = 1"

explicacion: |
  Confirma la identidad pitagórica con un caso concreto.
```

### 22 — Qué significa despejar sen² de la identidad

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["identidades", "vocabulario"]

enunciado: "¿Qué significa 'despejar sen²θ' de la identidad pitagórica?"
tipo: mc
opciones_explicitas:
  - "Escribirla como sen²θ = 1 − cos²θ, para calcular sen²θ conociendo cos²θ"
  - "Eliminar el seno de la ecuación por completo"
  - "Reemplazar el seno por un número fijo, sin importar el ángulo"
respuesta: "Escribirla como sen²θ = 1 − cos²θ, para calcular sen²θ conociendo cos²θ"

explicacion: |
  Es reordenar la identidad para que quede sen²θ solo de un lado.
```

### 23 — Problema: despejar sen² dado cos²

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["identidades", "problema"]

variables:
  cos_cuadrado: uno_de([0.36, 0.49, 0.64])

respuesta: redondear(1 - cos_cuadrado, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un ángulo θ, cos²θ = {cos_cuadrado}. ¿Cuánto vale sen²θ?"

pasos:
  - "1 − {cos_cuadrado} = {redondear(1 - cos_cuadrado, 2)}"

explicacion: |
  Se despeja directo de la identidad pitagórica.
```

### 24 — La identidad pitagórica trigonométrica viene de Pitágoras geométrico

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["identidades"]

respuesta: verdadero
tipo: vf

enunciado: "sen²θ + cos²θ = 1 es consecuencia directa del teorema de Pitágoras, aplicado a un triángulo con hipotenusa 1 (el radio del círculo unitario)."

explicacion: |
  Los catetos de ese triángulo son exactamente senθ y cosθ.
```

### 25 — Aplicación: fenómenos periódicos

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "vocabulario"]

enunciado: "¿Para qué sirve resolver una ecuación trigonométrica en un fenómeno periódico real?"
tipo: mc
opciones_explicitas:
  - "Para encontrar en qué momento del ciclo se alcanza un valor determinado (por ejemplo, cuándo una onda llega a cierta altura)"
  - "Sólo sirve para resolver ejercicios sin aplicación real"
  - "Sólo aplica a triángulos rectángulos"
respuesta: "Para encontrar en qué momento del ciclo se alcanza un valor determinado (por ejemplo, cuándo una onda llega a cierta altura)"

explicacion: |
  Cualquier fenómeno oscilatorio (sonido, luz, órbitas) se puede
  preguntar "¿cuándo pasa esto?" con una ecuación trigonométrica.
```

### 26 — Cierre: para qué sirven identidades y ecuaciones

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve distinguir identidades de ecuaciones trigonométricas, y saber resolver ambas?"
tipo: mc
opciones_explicitas:
  - "Las identidades simplifican expresiones sin importar el ángulo; las ecuaciones encuentran ángulos concretos que cumplen una condición"
  - "Son lo mismo, no hace falta distinguirlas en la práctica"
  - "Sólo sirven para el primer cuadrante"
respuesta: "Las identidades simplifican expresiones sin importar el ángulo; las ecuaciones encuentran ángulos concretos que cumplen una condición"

explicacion: |
  Cada una cumple un rol distinto al trabajar con trigonometría.
```
