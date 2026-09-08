# Fisica — Resonancia frecuencia natural (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de frecuencia natural

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["definicion", "vibracion"]

respuesta: "frecuencia natural"
tipo: completar
respuestas_validas:
  - "frecuencia natural"

enunciado: "La ___ es la frecuencia a la cual un sistema tiende a oscilar cuando se le aplica un impulso inicial."

explicacion: |
  Cada objeto tiene una frecuencia natural característica que depende de su masa y su rigidez.
```

### 2 — El fenómeno de la resonancia

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["resonancia", "energia"]

respuesta: "frecuencia externa"
tipo: mc
opciones_explicitas: ["frecuencia externa", "frecuencia de reposo", "frecuencia de gravedad", "frecuencia de fricción"]

enunciado: "La resonancia ocurre cuando la frecuencia de una fuerza periódica aplicada coincide con la ___ del objeto."

explicacion: |
  Cuando las frecuencias coinciden, la transferencia de energía es máxima, aumentando la amplitud de la oscilación.
```

### 3 — Amplitud y resonancia

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["amplitud", "energia"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene", "se anula"]

enunciado: "En un estado de resonancia, la amplitud de la oscilación del sistema ___."

explicacion: |
  La resonancia permite que la energía se acumule en el sistema, maximizando la amplitud.
```

### 4 — Factores de la frecuencia natural

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["masa", "rigidez"]

respuesta: "masa"
tipo: completar
respuestas_validas:
  - "masa"

enunciado: "Si aumentamos la ___ de un sistema oscilante, su frecuencia natural disminuirá."

explicacion: |
  La frecuencia natural es inversamente proporcional a la raíz cuadrada de la masa.
```

### 5 — Comparación de sistemas

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual", "nula"]

enunciado: "Un objeto más rígido que otro, manteniendo la misma masa, tendrá una frecuencia natural ___."

explicacion: |
  A mayor rigidez (constante elástica), la frecuencia natural es mayor.
```

### 6 — Cálculo de frecuencia simple

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["calculo", "masa"]

variables:
  idx: uno_de([0,1])
  masas: [1.0, 4.0]
  m: masas[idx]
  k: 100

respuesta: (1 / (2 * 3.14159)) * sqrt(k / m)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un sistema tiene una constante de rigidez de 100 N/m y una masa de {m} kg. Calcule su frecuencia natural en Hz (f = 1/(2*pi)*sqrt(k/m))."

pasos:
  - "Calcular la raíz cuadrada de k/m"
  - "Dividir por 2*pi"

explicacion: |
  La fórmula es f = (1 / 2π) * sqrt(k/m) = (1 / 2π) * sqrt(100/{m}) = {(1 / (2 * 3.14159)) * sqrt(k / m)} Hz.
```

### 7 — Relación masa-frecuencia

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["relacion"]

respuesta: "disminuye"
tipo: mc
opciones_explicitas: ["disminuye", "aumenta", "se duplica", "se mantiene"]

enunciado: "Si la masa de un resonador se cuadruplica, su frecuencia natural se ___."

explicacion: |
  Como f ∝ 1/sqrt(m), si m se multiplica por 4, f se divide por 2.
```

### 8 — El papel del amortiguamiento

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "avanzado"
  tags: ["amortiguamiento"]

respuesta: "fuerza de fricción"
tipo: completar
respuestas_validas:
  - "fuerza de fricción"

enunciado: "La amplitud en la resonancia no es infinita en la realidad debido a la presencia de la ___."

explicacion: |
  El amortiguamiento disipa la energía, limitando la amplitud máxima en la resonancia.
```

### 9 — Identificación de gráfico

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["grafico"]

respuesta: "pico"
tipo: mc
opciones_explicitas: ["pico", "valle", "plano", "curva"]

enunciado: "En un gráfico de amplitud vs frecuencia, la resonancia se identifica por un ___."

explicacion: |
  El punto de máxima amplitud se denomina pico de resonancia.
```

### 10 — Frecuencia y periodo

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["periodo"]

respuesta: "1/f"
tipo: completar
respuestas_validas:
  - "1/f"

enunciado: "El periodo de oscilación en resonancia es el inverso de la ___."

explicacion: |
  T = 1/f.
```

### 11 — Error: Amplitud infinita

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["error_comun"]

respuesta: falso
tipo: vf
enunciado: "En un sistema real con amortiguamiento, la amplitud en la resonancia es infinita."

explicacion: |
  Falso. El amortiguamiento siempre limita la amplitud en sistemas físicos reales.
```

### 12 — Error: Masa y periodo

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["error_comun"]

respuesta: falso
tipo: vf
enunciado: "Si un objeto es más pesado, su frecuencia natural es mayor."

explicacion: |
  Falso. A mayor masa, menor frecuencia natural.
```

### 13 — Error: Resonancia y sonido

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["error_comun"]

respuesta: falso
tipo: vf
enunciado: "La resonancia solo ocurre en objetos sólidos, nunca en ondas sonoras."

explicacion: |
  Falso. El aire puede entrar en resonancia (como en un instrumento de viento).
```

### 14 — Error: Frecuencia vs Periodo

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["error_comun"]

respuesta: falso
tipo: vf
enunciado: "Un sistema con un periodo muy corto tiene una frecuencia natural muy baja."

explicacion: |
  Falso. Periodo corto implica alta frecuencia.
```

### 15 — Error: Rigidez y masa

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["error_comun"]

respuesta: falso
tipo: vf
enunciado: "Añadir masa a un columpio lo hace oscilar más rápido."

explicacion: |
  Falso. Añadir masa aumenta el periodo y disminuye la frecuencia.
```

### 16 — Comparación: Masa vs Rigidez

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "más alta"
tipo: mc
opciones_explicitas: ["más alta", "más baja", "igual", "nula"]

enunciado: "Comparando un resorte rígido con uno blando (misma masa), la frecuencia natural del rígido es ___."

explicacion: |
  La rigidez es directamente proporcional a la frecuencia.
```

### 17 — Contraste: Amortiguado vs No amortiguado

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "avanzado"
  tags: ["contraste"]

respuesta: "menor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "En un sistema con mucho amortiguamiento, la amplitud de resonancia es ___ que en uno con poco amortiguamiento."

explicacion: |
  El amortiguamiento reduce la amplitud máxima.
```

### 18 — Comparación: Frecuencia vs Periodo

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["comparacion"]

respuesta: "inversamente"
tipo: completar
respuestas_validas:
  - "inversamente"

enunciado: "La frecuencia natural y el periodo de oscilación son ___ proporcionales."

explicacion: |
  Si uno sube, el otro baja.
```

### 19 — Escenario: Puente colgante

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: "frecuencia de los pasos"
tipo: mc
opciones_explicitas: ["frecuencia de los pasos", "frecuencia de la gravedad", "frecuencia del viento", "frecuencia de la temperatura"]

enunciado: "Un puente puede colapsar si la gente camina sobre él a una ___ que coincida con su frecuencia natural."

explicacion: |
  Este es un ejemplo clásico de resonancia mecánica destructiva.
```

### 20 — Escenario: Instrumento musical

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "cuerda"
tipo: completar
respuestas_validas:
  - "cuerda"

enunciado: "En una guitarra, la nota que escuchamos depende de la frecuencia natural de la ___."

explicacion: |
  La tensión y longitud de la cuerda determinan su frecuencia natural.
```

### 21 — Escenario: El péndulo

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "longitud"
tipo: completar
respuestas_validas:
  - "longitud"

enunciado: "Para cambiar la frecuencia natural de un péndulo simple, debemos variar su ___."

explicacion: |
  f = 0.5 * sqrt(g/L).
```

### 22 — Escenario: Edificios y terremotos

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: "sismos"
tipo: mc
opciones_explicitas: ["sismos", "viento", "ruido", "luz"]

enunciado: "Los ingenieros diseñan edificios para que su frecuencia natural no coincida con la de los ___."

explicacion: |
  Evitar la resonancia con ondas sísmicas previene daños estructurales.
```

### 23 — Escenario: El radio

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "sintonizar"
tipo: completar
respuestas_validas:
  - "sintonizar"

enunciado: "Al girar el dial de un radio antiguo, estamos intentando ___ la frecuencia del circuito con la de la emisora."

explicacion: |
  Es un proceso de resonancia eléctrica.
```

### 24 — Escenario: Vidrio roto

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: "frecuencia"
tipo: completar
respuestas_validas:
  - "frecuencia"

enunciado: "Un cantante puede romper una copa de cristal si emite una nota cuya ___ coincida con la del cristal."

explicacion: |
  La energía de la onda sonora se transfiere al cristal hasta que la amplitud rompe la estructura.
```

### 25 — Escenario: El diapasón

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["aplicacion"]

respuesta: "una sola"
tipo: mc
opciones_explicitas: ["una sola", "muchas", "ninguna", "cero"]

enunciado: "Un diapasón está diseñado para vibrar a ___ frecuencia natural específica."

explicacion: |
  Es un oscilador armónico con una frecuencia muy definida y pura.
```
