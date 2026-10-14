# Ciencia de datos — Probabilidad aplicada (cuestionario, 26 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Probabilidad

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Qué tan posible es que ocurra un suceso", "Cuántos datos hay", "El promedio", "El tamaño de muestra"]
respuesta: "Qué tan posible es que ocurra un suceso"

enunciado: "¿Qué mide la probabilidad?"

explicacion: |
  Es un número entre 0 y 1.
```

### 2 — Valores

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "basico"
  tags: ["rango"]

tipo: mc
opciones_explicitas: ["Entre 0 y 1", "Entre −1 y 1", "Entre 0 y 100 solamente", "Entre 1 y 10"]
respuesta: "Entre 0 y 1"

enunciado: "¿Entre qué valores está una probabilidad?"

explicacion: |
  Se puede expresar en porcentaje.
```

### 3 — Imposible

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "basico"
  tags: ["rango"]

tipo: mc
opciones_explicitas: ["0", "1", "0,5", "−1"]
respuesta: "0"

enunciado: "¿Qué probabilidad tiene un suceso imposible?"

explicacion: |
  Y uno seguro, 1.
```

### 4 — Dado

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "basico"
  tags: ["calculo"]

tipo: mc
opciones_explicitas: ["3/6 = 0,5", "1/6", "2/6", "4/6"]
respuesta: "3/6 = 0,5"

enunciado: "¿Cuál es la probabilidad de sacar un número par con un dado?"

explicacion: |
  Hay 3 pares entre 6 resultados.
```

### 5 — Mayor que 4

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "basico"
  tags: ["calculo"]

tipo: mc
opciones_explicitas: ["2/6, aproximadamente 0,33", "1/6", "3/6", "4/6"]
respuesta: "2/6, aproximadamente 0,33"

enunciado: "¿Cuál es la probabilidad de sacar más de 4 con un dado?"

explicacion: |
  Los favorables son 5 y 6.
```

### 6 — Fórmula

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "basico"
  tags: ["laplace"]

tipo: mc
opciones_explicitas: ["Casos favorables ÷ casos posibles", "Casos posibles ÷ favorables", "Favorables × posibles", "Favorables − posibles"]
respuesta: "Casos favorables ÷ casos posibles"

enunciado: "¿Cómo se calcula la probabilidad si todos los resultados son igualmente probables?"

explicacion: |
  Es la regla de Laplace.
```

### 7 — Frecuencias

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "intermedio"
  tags: ["grandes numeros"]

tipo: mc
opciones_explicitas: ["Que al repetir muchas veces, la frecuencia relativa se acerca a la probabilidad", "Que todo es seguro", "Que los dados se recuerdan", "Que la media es cero"]
respuesta: "Que al repetir muchas veces, la frecuencia relativa se acerca a la probabilidad"

enunciado: "¿Qué dice la ley de los grandes números?"

explicacion: |
  Con pocas repeticiones puede variar mucho.
```

### 8 — Complemento

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "basico"
  tags: ["complemento"]

tipo: mc
opciones_explicitas: ["0,7", "0,3", "0,6", "1,3"]
respuesta: "0,7"

enunciado: "Si P(llueve) = 0,3, ¿cuánto vale P(no llueve)?"

explicacion: |
  1 − 0,3.
```

### 9 — Excluyentes

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "intermedio"
  tags: ["suma"]

tipo: mc
opciones_explicitas: ["1/3", "1/6", "1/2", "2/3"]
respuesta: "1/3"

enunciado: "¿Cuánto vale P(1 o 2) al tirar un dado?"

explicacion: |
  1/6 + 1/6.
```

### 10 — Independientes

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "basico"
  tags: ["producto"]

tipo: mc
opciones_explicitas: ["0,25", "0,5", "1", "0,75"]
respuesta: "0,25"

enunciado: "¿Cuánto vale P(dos caras) con dos monedas?"

explicacion: |
  0,5 × 0,5.
```

### 11 — Independencia

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "intermedio"
  tags: ["independencia"]

tipo: mc
opciones_explicitas: ["Que saber uno no cambia la probabilidad del otro", "Que no pueden ocurrir juntos", "Que son iguales", "Que son seguros"]
respuesta: "Que saber uno no cambia la probabilidad del otro"

enunciado: "¿Qué significa que dos sucesos sean independientes?"

explicacion: |
  P(A|B) = P(A).
```

### 12 — Condicional

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "intermedio"
  tags: ["condicional"]

tipo: mc
opciones_explicitas: ["La probabilidad de A sabiendo que ocurrió B", "La de A y B", "La de A o B", "La de no A"]
respuesta: "La probabilidad de A sabiendo que ocurrió B"

enunciado: "¿Qué significa P(A | B)?"

explicacion: |
  Se calcula como P(A y B) ÷ P(B).
```

### 13 — Bolitas

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "avanzado"
  tags: ["sin reposicion"]

tipo: mc
opciones_explicitas: ["0,3", "0,36", "0,6", "0,2"]
respuesta: "0,3"

enunciado: "En una bolsa con 3 rojas y 2 azules, ¿cuál es la probabilidad de sacar dos rojas seguidas sin reponer?"

explicacion: |
  3/5 × 2/4.
```

### 14 — Bayes

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "intermedio"
  tags: ["bayes"]

tipo: mc
opciones_explicitas: ["Para actualizar una probabilidad con nueva evidencia", "Para calcular promedios", "Para dibujar gráficos", "Para ordenar datos"]
respuesta: "Para actualizar una probabilidad con nueva evidencia"

enunciado: "¿Para qué sirve el teorema de Bayes?"

explicacion: |
  Combina la probabilidad previa con la evidencia.
```

### 15 — Test

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "avanzado"
  tags: ["bayes"]

tipo: mc
opciones_explicitas: ["50 %", "99 %", "1 %", "90 %"]
respuesta: "50 %"

enunciado: "Una enfermedad afecta al 1 % y el test detecta al 99 % de los enfermos y da 1 % de falsos positivos. Si da positivo, ¿cuál es aproximadamente la probabilidad de estar enfermo?"

explicacion: |
  En 10.000 personas: 99 verdaderos y 99 falsos positivos.
```

### 16 — Lección

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "avanzado"
  tags: ["prevalencia"]

tipo: mc
opciones_explicitas: ["Que importa la prevalencia: un test muy bueno no hace casi seguro un positivo", "Que los tests no sirven", "Que los tests son perfectos", "Que no hay que confirmar"]
respuesta: "Que importa la prevalencia: un test muy bueno no hace casi seguro un positivo"

enunciado: "¿Qué enseña el ejemplo del test?"

explicacion: |
  Se confirma con otro estudio.
```

### 17 — Esperanza

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "intermedio"
  tags: ["esperanza"]

tipo: mc
opciones_explicitas: ["3,5", "3", "4", "6"]
respuesta: "3,5"

enunciado: "¿Qué es el valor esperado de un dado?"

explicacion: |
  Es el promedio a largo plazo.
```

### 18 — Juego

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "avanzado"
  tags: ["esperanza"]

tipo: mc
opciones_explicitas: ["−$1", "+$1", "$0", "+$9"]
respuesta: "−$1"

enunciado: "Pagás $3 por tirar un dado y ganás $12 si sale 6. ¿Cuál es tu ganancia esperada por jugada?"

explicacion: |
  (1/6) × 12 − 3 = −1.
```

### 19 — Justo

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "intermedio"
  tags: ["juego"]

tipo: mc
opciones_explicitas: ["Cuando la esperanza de ganancia es 0", "Cuando se gana siempre", "Cuando hay dados", "Cuando juega mucha gente"]
respuesta: "Cuando la esperanza de ganancia es 0"

enunciado: "¿Cuándo un juego es justo?"

explicacion: |
  El casino siempre tiene la esperanza a favor.
```

### 20 — Binomial

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "intermedio"
  tags: ["binomial"]

tipo: mc
opciones_explicitas: ["La cantidad de éxitos en n intentos independientes", "La altura", "El tiempo", "La media"]
respuesta: "La cantidad de éxitos en n intentos independientes"

enunciado: "¿Qué modela la distribución binomial?"

explicacion: |
  Por ejemplo, caras en 10 monedas.
```

### 21 — Normal

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "intermedio"
  tags: ["normal"]

tipo: mc
opciones_explicitas: ["Aproximadamente 95 %", "68 %", "99,7 %", "50 %"]
respuesta: "Aproximadamente 95 %"

enunciado: "¿Qué porcentaje de los datos de una normal está dentro de ±2 desviaciones?"

explicacion: |
  A ±1, 68 %; a ±3, 99,7 %.
```

### 22 — Falacia del jugador

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "basico"
  tags: ["falacia"]

tipo: mc
opciones_explicitas: ["0,5, igual que siempre", "Menor", "Mayor", "0"]
respuesta: "0,5, igual que siempre"

enunciado: "Salieron cinco caras seguidas. ¿Cuál es la probabilidad de cara en la próxima tirada?"

explicacion: |
  La moneda no tiene memoria.
```

### 23 — Fiscal

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "avanzado"
  tags: ["falacia"]

tipo: mc
opciones_explicitas: ["Confundir P(A|B) con P(B|A)", "Confundir media y mediana", "Confundir causa y efecto", "Confundir dos datos"]
respuesta: "Confundir P(A|B) con P(B|A)"

enunciado: "¿Qué es la falacia del fiscal?"

explicacion: |
  "Si es culpable, hay evidencia" no es "si hay evidencia, es culpable".
```

### 24 — Lotería

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "basico"
  tags: ["improbable"]

tipo: mc
opciones_explicitas: ["Porque hay muchísimos participantes", "Porque es seguro", "Por trucos", "Por suerte divina"]
respuesta: "Porque hay muchísimos participantes"

enunciado: "¿Por qué ganar la lotería le ocurre a alguien aunque sea improbable?"

explicacion: |
  Lo improbable no es imposible.
```

### 25 — Pocas muestras

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "basico"
  tags: ["muestras"]

tipo: mc
opciones_explicitas: ["Los resultados son inestables", "Son más precisos", "Son perfectos", "No varían"]
respuesta: "Los resultados son inestables"

enunciado: "¿Qué ocurre con muestras pequeñas?"

explicacion: |
  Se necesita más información.
```

### 26 — Qué dice

```
metadata:
  materia: "ciencia-de-datos"
  tema: "probabilidad_aplicada"
  nivel: "intermedio"
  tags: ["interpretacion"]

tipo: mc
opciones_explicitas: ["Que en situaciones similares llovería aproximadamente 3 de cada 10 veces", "Que lloverá 30 % del día", "Que no lloverá", "Que lloverá seguro"]
respuesta: "Que en situaciones similares llovería aproximadamente 3 de cada 10 veces"

enunciado: "¿Qué dice una probabilidad del 30 % de lluvia?"

explicacion: |
  No dice qué pasará mañana con certeza.
```

