### 1 — El error de la relación inversa
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["ley_de_ohm", "relaciones_proporcionales"]

variables:
  idx: uno_de([0, 1])
  datos: [
    [2.0, 5.0, 10.0], 
    [12.0, 4.0, 3.0]
  ]

respuesta: datos[idx][2]
tipo: input
tolerancia_abs: 0.01

enunciado: "Si mantenemos el voltaje constante y duplicamos la resistencia, la intensidad de corriente debe ___ para mantener la igualdad de la Ley de Ohm."

pasos:
  - "Identificar que el voltaje es constante."
  - "Aplicar la relación $I = V / R$."
  - "Observar que al aumentar el denominador (R), el resultado (I) disminuye."

explicacion: |
  La Ley de Ohm establece que $V = I \cdot R$. Si el voltaje ($V$) no cambia, la corriente ($I$) y la resistencia ($R$) son inversamente proporcionales. Si la resistencia se duplica, la corriente se reduce a la mitad.
```

### 2 — Confusión de unidades
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["unidades", "error_comun"]

respuesta: "mA"
tipo: mc
opciones_explicitas: ["A", "mA", "kΩ", "V"]

enunciado: "Un error común es no convertir las unidades antes de operar. Si tienes un voltaje de $5\text{ V}$ y una resistencia de $1\text{ k}\Omega$, el resultado de $I = V / R$ es $0.005\text{ A}$. ¿En qué unidad se expresa este valor si queremos evitar el uso de decimales muy pequeños?"

explicacion: |
  Para evitar errores de escala, es común trabajar con múltiplos. $0.005\text{ A}$ es equivalente a $5\text{ mA}$ (miliamperios).
```

### 3 — ¿Qué sucede si sube la tensión?
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["proporcionalidad_directa"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito con una resistencia fija, si aumentamos el voltaje aplicado, la intensidad de corriente que circula por el conductor también aumentará proporcionalmente."

explicacion: |
  Verdadero. Según $I = V / R$, si $R$ es constante, $I$ es directamente proporcional a $V$.
```

### 4 — Cálculo de la resistencia desconocida
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo", "resistencia"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    [12.0, 2.5],
    [24.0, 4.0]
  ]

respuesta: escenario[idx][1]
tipo: input
tolerancia_abs: 0.01

enunciado: "Un circuito tiene una corriente de {escenario[idx][0]} A y una resistencia de {escenario[idx][1]} $\Omega$. ¿Cuál es el valor de la resistencia si el voltaje es {escenario[idx][0]} V?"

pasos:
  - "Usar la fórmula despejada: $R = V / I$."
  - "Sustituir los valores: $R = {escenario[idx][0]} / {escenario[idx][0]}$."

explicacion: |
  Utilizando $R = V / I$, dividimos el voltaje por la corriente para hallar la resistencia.
```

### 5 — El orden de los factores
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["despeje", "formula"]

respuesta: ["V = I * R", "I = V / R", "R = V / I"]
tipo: ordenar

opciones_explicitas: ["V = I * R", "I = V / R", "R = V / I"]

enunciado: "Ordena las fórmulas de la Ley de Ohm empezando por la fórmula original (definición de voltaje) y luego sus dos despejes para corriente y resistencia respectivamente."

explicacion: |
  Las tres formas de la Ley de Ohm son equivalentes, pero el orden correcto de despeje estándar es la definición, luego el despeje de la variable del denominador y finalmente el de la variable del numerador.
```