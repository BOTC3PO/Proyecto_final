# Matemática — Probabilidad condicional (cuestionario, 20 preguntas VBLang)

> Tema: `D10`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la probabilidad condicional

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "basico"
  tags: ["condicional", "vocabulario"]

enunciado: "¿Qué es P(A|B), la probabilidad condicional de A dado B?"
tipo: mc
opciones_explicitas:
  - "La probabilidad de que ocurra A, ya sabiendo que B ocurrió"
  - "La probabilidad de que ocurran A y B al mismo tiempo"
  - "La probabilidad de que no ocurra ni A ni B"
respuesta: "La probabilidad de que ocurra A, ya sabiendo que B ocurrió"

explicacion: |
  Saber que B pasó cambia el universo de posibilidades sobre el que
  se calcula la probabilidad de A.
```

### 2 — Completar: fórmula de la probabilidad condicional

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "intermedio"
  tags: ["condicional", "completar"]

tipo: completar
enunciado: "Completá: P(A|B) = P(A y B) / ___."
respuestas_validas:
  - "P(B)"

explicacion: |
  Siempre con P(B) > 0.
```

### 3 — Problema: calcular P(A|B)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  p_a_y_b: uno_de([0.1, 0.15, 0.2])
  p_b: uno_de([0.3, 0.4, 0.5])

respuesta: redondear(p_a_y_b / p_b, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "P(A y B) = {p_a_y_b} y P(B) = {p_b}. ¿Cuál es P(A|B)?"

pasos:
  - "P(A|B) = {p_a_y_b} / {p_b} = {redondear(p_a_y_b / p_b, 3)}"

explicacion: |
  Se divide la probabilidad conjunta por la probabilidad del evento
  que ya se sabe que ocurrió.
```

### 4 — Independencia en términos de probabilidad condicional

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "independencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si A y B son eventos independientes, entonces P(A|B) = P(A) — saber que B ocurrió no cambia en nada la probabilidad de A."

explicacion: |
  Es la definición formal de independencia en términos de
  probabilidad condicional.
```

### 5 — Problema: verificar independencia con P(A|B)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  p_a: 0.3
  p_a_dado_b: uno_de([0.3, 0.5])

respuesta: p_a_dado_b == p_a
tipo: vf

enunciado: "P(A) = {p_a} y P(A|B) = {p_a_dado_b}. ¿Son A y B eventos independientes?"

explicacion: |
  Son independientes sólo si P(A|B) es exactamente igual a P(A) — si
  cambia, B sí aporta información sobre A.
```

### 6 — Problema: cartas sin reposición como condicional

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

respuesta: redondear(3 / 39, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "De un mazo de 40 cartas (4 ases), se saca una carta y sale as (no se devuelve). ¿Cuál es la probabilidad de que la SEGUNDA carta también sea as, dado que la primera lo fue?"

pasos:
  - "Quedan 39 cartas, de las cuales 3 son ases (ya salió uno)."
  - "P(as en 2ª | as en 1ª) = 3/39 = {redondear(3 / 39, 3)}"

explicacion: |
  Es exactamente el caso 'sin reposición' de
  `../independencia-de-eventos-y-diagrama-de-arbol/`, formalizado como
  probabilidad condicional.
```

### 7 — Cómo se lee P(A|B)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "basico"
  tags: ["condicional", "vocabulario"]

enunciado: "¿Cómo se lee la notación P(A|B)?"
tipo: mc
opciones_explicitas:
  - "Probabilidad de A dado B"
  - "Probabilidad de A dividido B"
  - "Probabilidad de A o B"
respuesta: "Probabilidad de A dado B"

explicacion: |
  La barra vertical se lee "dado".
```

### 8 — Problema: tabla de contingencia, estudió dado que aprobó

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  estudio_aprobo: 40
  no_estudio_aprobo: 15
  total_aprobo: estudio_aprobo + no_estudio_aprobo

respuesta: redondear(estudio_aprobo / total_aprobo, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "De 100 estudiantes: {estudio_aprobo} estudiaron y aprobaron, {no_estudio_aprobo} no estudiaron pero igual aprobaron. Entre los que aprobaron en total, ¿cuál es la probabilidad de que ese estudiante haya estudiado (P(estudió | aprobó))?"

pasos:
  - "Total de aprobados = {estudio_aprobo} + {no_estudio_aprobo} = {total_aprobo}"
  - "P(estudió | aprobó) = {estudio_aprobo}/{total_aprobo} = {redondear(estudio_aprobo / total_aprobo, 3)}"

explicacion: |
  Se restringe el universo a la columna 'aprobó' antes de calcular la
  proporción.
```

### 9 — Aplicación real: diagnóstico médico

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "basico"
  tags: ["condicional", "aplicacion"]

enunciado: "'¿Cuál es la probabilidad de tener una enfermedad, dado que el test dio positivo?' es una pregunta de qué tipo de probabilidad?"
tipo: mc
opciones_explicitas:
  - "Probabilidad condicional: P(enfermedad | test positivo)"
  - "Probabilidad simple, sin ninguna condición"
  - "Probabilidad compuesta del tipo 'Y', sin condicionar nada"
respuesta: "Probabilidad condicional: P(enfermedad | test positivo)"

explicacion: |
  Es el ejemplo central de `../teorema-de-bayes/`, el módulo que
  sigue.
```

### 10 — P(A|B) no es lo mismo que P(B|A)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional"]

respuesta: verdadero
tipo: vf

enunciado: "En general, P(A|B) no es lo mismo que P(B|A) — invertir el orden de la condición puede cambiar el resultado."

explicacion: |
  Es exactamente el punto de partida del teorema de Bayes: cómo pasar
  de un condicional al otro.
```

### 11 — Problema: calcular P(A|B) con otros valores

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  p_a_y_b: uno_de([0.06, 0.09, 0.12])
  p_b: uno_de([0.2, 0.3])

respuesta: redondear(p_a_y_b / p_b, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "En una fábrica, P(defecto Y turno noche) = {p_a_y_b} y P(turno noche) = {p_b}. ¿Cuál es la probabilidad de defecto, dado que la pieza se hizo en el turno noche?"

pasos:
  - "P(defecto | turno noche) = {p_a_y_b} / {p_b} = {redondear(p_a_y_b / p_b, 3)}"

explicacion: |
  Aplicación directa de la fórmula a control de calidad.
```

### 12 — Relación con el diagrama de árbol sin reposición

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "intermedio"
  tags: ["condicional", "arbol"]

enunciado: "En un diagrama de árbol SIN reposición, ¿qué representan las probabilidades de las ramas del segundo paso?"
tipo: mc
opciones_explicitas:
  - "Probabilidades condicionales: la probabilidad de cada resultado del segundo paso, dado lo que ya ocurrió en el primero"
  - "Siempre son idénticas a las probabilidades del primer paso"
  - "No tienen relación con lo que pasó en el primer paso"
respuesta: "Probabilidades condicionales: la probabilidad de cada resultado del segundo paso, dado lo que ya ocurrió en el primero"

explicacion: |
  Por eso cambian de una rama a otra en el caso sin reposición.
```

### 13 — Problema: tabla de contingencia, otra celda

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  estudio_no_aprobo: 10
  estudio_aprobo: 40
  total_estudio: estudio_aprobo + estudio_no_aprobo

respuesta: redondear(estudio_aprobo / total_estudio, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "De los estudiantes que SÍ estudiaron: {estudio_aprobo} aprobaron y {estudio_no_aprobo} no aprobaron. ¿Cuál es P(aprobó | estudió)?"

pasos:
  - "Total que estudió = {estudio_aprobo} + {estudio_no_aprobo} = {total_estudio}"
  - "P(aprobó | estudió) = {estudio_aprobo}/{total_estudio} = {redondear(estudio_aprobo / total_estudio, 3)}"

explicacion: |
  Notar que este resultado es distinto del de P(estudió | aprobó) del
  problema anterior — confirma que invertir la condición cambia el
  resultado.
```

### 14 — La condicional restringe el espacio muestral

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional"]

respuesta: verdadero
tipo: vf

enunciado: "Calcular una probabilidad condicional P(A|B) equivale a restringir el espacio muestral sólo a los casos donde B ya ocurrió, y calcular ahí la proporción de A."

explicacion: |
  Es la misma idea de la tabla de contingencia: mirar sólo la
  fila/columna donde se cumple la condición.
```

### 15 — Completar: despejar P(A y B)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "completar"]

tipo: completar
enunciado: "Despejando la fórmula de probabilidad condicional: P(A y B) = P(A|B) × ___."
respuestas_validas:
  - "P(B)"

explicacion: |
  Es la misma fórmula de `../probabilidad-compuesta/`, ahora expresada
  con probabilidad condicional en vez de asumir independencia directo.
```

### 16 — Problema: calcular P(A y B) desde la condicional

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  p_b: uno_de([0.4, 0.6])
  p_a_dado_b: uno_de([0.5, 0.7])

respuesta: redondear(p_a_dado_b * p_b, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "P(B) = {p_b} y P(A|B) = {p_a_dado_b}. ¿Cuál es P(A y B)?"

pasos:
  - "P(A y B) = P(A|B) × P(B) = {p_a_dado_b} × {p_b} = {redondear(p_a_dado_b * p_b, 3)}"

explicacion: |
  Es la fórmula de probabilidad condicional despejada para la
  probabilidad conjunta.
```

### 17 — Problema: comparar dos condicionales

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  p_a_y_b: 0.15
  p_b: 0.3
  p_a: 0.4

respuesta: (p_a_y_b / p_b) > p_a
tipo: vf

enunciado: "P(A y B) = {p_a_y_b}, P(B) = {p_b}, P(A) = {p_a}. ¿Es P(A|B) MAYOR que P(A) (es decir, saber que ocurrió B hace más probable a A)?"

explicacion: |
  P(A|B) = {p_a_y_b}/{p_b} = 0,5, que es mayor que P(A) = {p_a} — B
  está asociado con una mayor probabilidad de A.
```

### 18 — Si P(A|B) > P(A), B favorece a A

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional"]

respuesta: verdadero
tipo: vf

enunciado: "Si P(A|B) es mayor que P(A), entonces saber que B ocurrió aumenta la probabilidad de A (hay una asociación positiva entre ambos eventos)."

explicacion: |
  Si en cambio P(A|B) fuera menor que P(A), B estaría asociado con
  una probabilidad MENOR de A.
```

### 19 — Problema: probabilidad condicional igual a 1

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "intermedio"
  tags: ["condicional"]

respuesta: verdadero
tipo: vf

enunciado: "Si B implica necesariamente A (siempre que ocurre B, también ocurre A), entonces P(A|B) = 1."

explicacion: |
  El espacio muestral restringido a B queda completamente contenido
  dentro de A.
```

### 20 — Cierre: para qué sirve la probabilidad condicional

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la probabilidad condicional?"
tipo: mc
opciones_explicitas:
  - "Para recalcular una probabilidad cuando aparece información nueva (que otro evento ya ocurrió), achicando el universo de posibilidades"
  - "Sólo sirve para calcular probabilidades de eventos independientes"
  - "Es sólo otro nombre para la probabilidad simple"
respuesta: "Para recalcular una probabilidad cuando aparece información nueva (que otro evento ya ocurrió), achicando el universo de posibilidades"

explicacion: |
  Es el prerrequisito directo de `../teorema-de-bayes/`, que invierte
  esta misma fórmula.
```
