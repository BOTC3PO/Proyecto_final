# Fisica — Energia potencial gravitatoria (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Energía Potencial Gravitatoria

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["definicion", "energia"]

respuesta: "energia_potencial_gravitatoria"
tipo: completar
respuestas_validas:
  - "energia_potencial_gravitatoria"

enunciado: "La capacidad de un cuerpo de realizar un trabajo debido a su posición en un campo gravitatorio se denomina ___."

explicacion: |
  La energía potencial gravitatoria depende de la masa, la aceleración de la gravedad y la altura respecto a un nivel de referencia.
```

### 2 — Dependencia de la masa

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["relacion", "masa"]

variables:
  caso: uno_de([[10, "10 kg"], [25, "25 kg"], [50, "50 kg"]])

respuesta: "Se duplica"
tipo: mc
opciones_explicitas: ["Se duplica", "Se cuadruplica", "Se reduce a la mitad", "No cambia"]

enunciado: "Si duplicamos la masa de un objeto manteniendo su altura y la gravedad constantes, la energía potencial gravitatoria de un objeto de {caso[1]} se..."

pasos:
  - "Identificar la masa inicial: {caso[1]}"
  - "Aplicar la relación de proporcionalidad directa con la masa (Ep ∝ m)"

explicacion: |
  Como la fórmula es Ep = m · g · h, la energía es directamente proporcional a la masa. Si la masa se duplica, la energía se duplica.
```

### 3 — El factor gravedad

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["gravedad", "verdadero_falso"]

respuesta: falso
tipo: vf

enunciado: "La energía potencial gravitatoria de un objeto es la misma en la Tierra y en la Luna si el objeto se encuentra a la misma altura sobre su respectivo suelo."

explicacion: |
  Falso. La energía potencial depende de la aceleración de la gravedad (g). Como la gravedad en la Luna es menor que en la Tierra, la energía potencial también será menor.
```

### 4 — Componentes de la fórmula

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["formula", "variables"]

respuesta: "altura"
tipo: completar
respuestas_validas:
  - "altura"

enunciado: "En la expresión matemática Ep = m · g · h, la variable 'h' representa la ___."

explicacion: |
  En física, 'h' proviene del término 'height' (altura) y representa la distancia vertical respecto a un punto de referencia.
```

### 5 — Cálculo de energía básica

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["calculo", "ejercicio"]

variables:
  escenario: uno_de([[2, 5, 9.8], [5, 2, 9.8], [10, 3, 9.8]])

respuesta: escenario[0] * escenario[1] * escenario[2]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Calcula la energía potencial gravitatoria de un objeto con masa de {escenario[0]} kg, situado a una altura de {escenario[1]} m, considerando una gravedad de {escenario[2]} m/s²."

pasos:
  - "Multiplicar la masa por la gravedad: {escenario[0]} * {escenario[2]}"
  - "Multiplicar el resultado por la altura: ({escenario[0]} * {escenario[2]}) * {escenario[1]}"

explicacion: |
  El resultado se obtiene multiplicando directamente los tres valores: m · g · h.
```

### 6 — Concepto de Energía Potencial

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

tipo: vf
respuesta: verdadero

enunciado: "Si un objeto con masa positiva se encuentra a una altura positiva sobre el nivel de referencia, su energía potencial gravitatoria será positiva."

explicacion: |
  La fórmula es Ep = m · g · h. Si la masa (m), la gravedad (g) y la altura (h) son todas positivas, el resultado es necesariamente positivo.
```

### 7 — Cálculo de la Energía Potencial

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["calculo", "numerico"]

variables:
  escenario: uno_de([[2, "15", "5", 10], [3, "10", "4", 20], [4, "5", "10", 50]])
  m: escenario[0]
  h: escenario[1]
  g: escenario[2]
  resultado_esperado: escenario[3]

respuesta: resultado_esperado
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Un objeto de {m} kg se encuentra a una altura de {h} metros. Calcula su energía potencial gravitatoria (usa g = {g} m/s²)."

pasos:
  - "Identificar los datos: masa (m) = {m} kg, altura (h) = {h} m, gravedad (g) = {g} m/s²."
  - "Aplicar la fórmula: Ep = m · g · h."
  - "Sustituir: Ep = {m} * {g} * {h} = {resultado_esperado} J."

explicacion: |
  La energía potencial se calcula multiplicando la masa por la gravedad por la altura. En este caso: {m} * {g} * {h} = {resultado_esperado} Joules.
```

### 8 — Dependencia de la altura

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["proporcionalidad", "analisis"]

respuesta: "se duplica"
tipo: "mc"
opciones_explicitas: ["se mantiene igual", "se reduce a la mitad", "se duplica", "se cuadruplica"]

enunciado: "Si un objeto mantiene su masa constante pero se coloca a una altura que es el doble de la original, su energía potencial gravitatoria ____."

explicacion: |
  Como la energía potencial es directamente proporcional a la altura (Ep ∝ h), si la altura se multiplica por 2, la energía también se multiplica por 2.
```

### 9 — Unidades de Medida

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

respuesta: "Joules"
tipo: "completar"
respuestas_validas:
  - "Joules"
  - "J"
  - "joules"

enunciado: "En el Sistema Internacional de Unidades, la unidad para medir la energía potencial gravitatoria es el _________."

explicacion: |
  La unidad de energía (trabajo) es el Joule (J), que equivale a kg·m²/s².
```

### 10 — Procedimiento de Resolución

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["metodologia", "ordenar"]

tipo: ordenar
opciones_explicitas: ["identificar_datos", "aplicar_formula", "realizar_multiplicacion"]
respuesta_orden: ["identificar_datos", "aplicar_formula", "realizar_multiplicacion"]

enunciado: "Ordena los pasos lógicos para resolver un problema de cálculo de energía potencial gravitatoria:"

explicacion: |
  Para resolver problemas físicos de forma sistemática, primero debemos extraer los datos, luego plantear la ecuación y finalmente operar.
```

### 11 — La dependencia de la altura

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["conceptos", "energia"]

respuesta: "h"
tipo: completar
respuestas_validas:
  - "h"
  - "la altura"
  - "la posición vertical"

enunciado: "En la fórmula de la energía potencial gravitatoria $E_p = m \\cdot g \\cdot h$, la variable $h$ representa la ___ respecto a un nivel de referencia."

explicacion: |
  La energía potencial gravitatoria depende de la posición vertical (altura) del objeto respecto a un punto de referencia elegido. Si cambias el nivel de referencia, la energía potencial cambia, aunque el objeto sea el mismo.
```

### 12 — El error de la masa y la aceleración

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["conceptos", "relacion_variables"]

variables:
  escenario: uno_de([["un objeto de 2 kg", 2, "2 kg"], ["un objeto de 5 kg", 5, "5 kg"], ["un objeto de 10 kg", 10, "10 kg"]])

tipo: mc
opciones_explicitas: ["La energía es mayor", "La energía es menor", "La energía es igual"]
respuesta: "La energía es mayor"

enunciado: "Si duplicamos la masa de {escenario[0]} manteniendo su altura y la gravedad constantes, la energía potencial gravitatoria será: ___"

explicacion: |
  Como la energía potencial es directamente proporcional a la masa ($E_p \propto m$), si la masa se duplica, la energía potencial también se duplica (es mayor).
```

### 13 — ¿Depende de la trayectoria?

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["conceptos", "trayectoria"]

respuesta: falso
tipo: vf

enunciado: "La energía potencial gravitatoria de un objeto depende de la trayectoria seguida para alcanzar su altura actual (por ejemplo, si subió en línea recta o en zigzag)."

explicacion: |
  La energía potencial es una función de estado, lo que significa que solo depende de la posición inicial y la posición final (la altura), no del camino recorrido.
```

### 14 — Cálculo de altura desconocida

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["calculo", "despeje"]

variables:
  datos: uno_de([[100, 9.8, 50], [50, 9.8, 20], [200, 9.8, 100]])

respuesta: "datos[2]"
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un objeto de {datos[0]} kg tiene una energía potencial de {datos[2]} J. Si la aceleración de la gravedad es de {datos[1]} m/s², ¿a qué altura se encuentra?"

pasos:
  - "Identificar los valores: m = {datos[0]}, Ep = {datos[2]}, g = {datos[1]}"
  - "Despejar la altura de la fórmula: h = Ep / (m * g)"
  - "Calcular el resultado final."

explicacion: |
  Usando la fórmula $h = E_p / (m \cdot g)$, obtenemos: $h = {datos[2]} / ({datos[0]} \cdot {datos[1]}) = {redondear(datos[2]/(datos[0]*datos[1]), 2)}$ m.
```

### 15 — El orden de los factores

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["conceptos", "orden"]

respuesta_orden: ["m", "g", "h"]
tipo: ordenar

opciones_explicitas: ["h", "g", "m"]

enunciado: "Para calcular la energía potencial gravitatoria siguiendo la estructura de la fórmula $E_p = m \\cdot g \\cdot h$, el orden de los factores es:"

explicacion: |
  Aunque el orden de los factores no altera el producto, la fórmula estándar se presenta como Masa $\cdot$ Gravedad $\cdot$ Altura.
```

### 16 — Diferencia con Energía Cinética

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["energia", "conceptos"]

respuesta: "cinetica"
tipo: mc
opciones_explicitas: ["potencial", "cinetica", "termica", "electromagnetica"]

enunciado: "Mientras que la energía potencial gravitatoria depende de la posición de un objeto respecto a un campo gravitatorio, la energía ___ depende del estado de movimiento del objeto."

explicacion: |
  La energía cinética está asociada al movimiento (m · v²/2), mientras que la energía potencial gravitatoria está asociada a la posición en un campo gravitatorio (m · g · h).
```

### 17 — Dependencia de la altura

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["propiedades", "relaciones"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10, 9.8, 2, 196.0], [5, 9.8, 5, 245.0]]

respuesta: datos[escenario_idx][3]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Considera un objeto con masa de {datos[escenario_idx][0]} kg a una altura de {datos[escenario_idx][2]} m. Si la gravedad es {datos[escenario_idx][1]} m/s², la energía potencial gravitatoria es ___ J."

pasos:
  - "Multiplicar la masa por la aceleración de la gravedad (m · g)."
  - "Multiplicar el resultado por la altura (h)."

explicacion: |
  La fórmula es Ep = m · g · h. Para el caso {datos[escenario_idx][0]} kg: {datos[escenario_idx][0]} * {datos[escenario_idx][1]} * {datos[escenario_idx][2]} = {datos[escenario_idx][3]} J.
```

### 18 — Naturaleza de la energía

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["conceptos", "conservacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es la energía potencial gravitatoria una forma de energía mecánica que puede transformarse en energía cinética en un sistema sin fricción?"

explicacion: |
  Verdadero. En un sistema ideal, la energía potencial se transforma íntegramente en cinética a medida que el objeto cae, conservando la energía mecánica total.
```

### 19 — Comparación de masas

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["comparacion", "proporcionalidad"]

variables:
  caso_idx: uno_de([0, 1])
  objetos: [[10, 20], [5, 15]]

respuesta: "El segundo objeto tiene más energía"
tipo: mc
opciones_explicitas: ["El primer objeto tiene más energía", "El segundo objeto tiene más energía", "Ambos tienen la misma energía", "No se puede determinar"]

enunciado: "Si dos objetos están a la misma altura, pero el primero tiene {objetos[caso_idx][0]} kg y el segundo tiene {objetos[caso_idx][1]} kg, ¿cuál posee mayor energía potencial gravitatoria?"

explicacion: |
  Como la energía potencial es directamente proporcional a la masa (Ep ∝ m), el objeto con mayor masa tendrá mayor energía potencial si la altura y la gravedad son las mismas.
```

### 20 — Componentes de la fórmula

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["formula", "variables"]

respuesta_orden: ["masa", "gravedad", "altura"]
tipo: ordenar

opciones_explicitas: ["altura", "gravedad", "masa"]

enunciado: "Ordena de menor a mayor las variables que determinan la magnitud de la energía potencial gravitatoria (Ep = m · g · h):"

explicacion: |
  La fórmula requiere tres componentes fundamentales: la masa (m), la aceleración de la gravedad (g) y la altura (h).
```

### 21 — El salto del escalador

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["energia", "gravitacion"]

variables:
  escenario: uno_de([[0.5, 50], [1.5, 150], [2.0, 200]])
  m: escenario[0]
  h: escenario[1]
  g: 9.8
  ep: m * g * h

respuesta: ep
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un escalador de masa de {m} kg se encuentra a una altura de {h} metros sobre el suelo. ¿Cuál es su energía potencial gravitatoria en Joules?"

pasos:
  - "Identificar la masa (m = {m} kg)"
  - "Identificar la altura (h = {h} m)"
  - "Identificar la aceleración de la gravedad (g = {g} m/s²)"
  - "Aplicar la fórmula Ep = m * g * h"

explicacion: |
  La energía potencial se calcula multiplicando la masa por la gravedad por la altura:
  Ep = {m} kg * {g} m/s² * {h} m = {ep} J.
```

### 22 — El almacén de suministros

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["energia", "logistica"]

variables:
  datos: [[10, 980], [20, 1960], [5, 490]]
  idx: uno_de([0, 1, 2])
  m: datos[idx][0]
  ep: datos[idx][1]

respuesta: ep == (m * 9.8 * 10)
tipo: completar
enunciado: "Un paquete de {m} kg se encuentra en un estante a 10 metros de altura. Si la energía potencial es de {ep} J, ¿es correcto afirmar que la gravedad aplicada fue de 9.8 m/s²?"

explicacion: |
  Para verificar: Ep = m * g * h => 9.8 = Ep / (m * h).
  En este caso: {ep} / ({m} * 10) = {ep / (m * 10)}.
  El resultado es {ep / (m * 10)} m/s².
```

### 23 — El elevador de carga

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["energia", "mecanica"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene igual"]

enunciado: "Si un elevador de carga sube desde el primer piso hasta el quinto piso, su energía potencial gravitatoria respecto al suelo: ___"

explicacion: |
  Al aumentar la altura (h) en la fórmula Ep = m * g * h, la energía potencial también aumenta.
```

### 24 — El experimento de laboratorio

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["energia", "calculo"]

variables:
  caso: uno_de([[2, 5, 10], [5, 2, 10], [10, 5, 2]])
  m: caso[0]
  h: caso[1]
  ep: caso[2]

respuesta_orden: ["m * g * h", "m * g / h", "m / (g * h)", "g * h / m"]
tipo: ordenar

opciones_explicitas: ["m * g * h", "m * g / h", "m / (g * h)", "g * h / m"]

enunciado: "Para un objeto de {m} kg a una altura de {h} m, ordena las expresiones de modo que la última sea la fórmula correcta para calcular su energía potencial (Ep = {ep} J):"

explicacion: |
  La fórmula correcta es el producto de la masa, la gravedad y la altura: m * g * h.
```

### 25 — El dron de rescate

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["energia", "drones"]

variables:
  escenario: uno_de([[2, 50], [5, 100], [1, 20]])
  m: escenario[0]
  h: escenario[1]

respuesta: "500"
tipo: completar
respuestas_validas:
  - "500"
  - "500.0"
  - "500.00"

enunciado: "Un dron de {m} kg vuela a una altura de {h} metros. Su energía potencial gravitatoria es de ___ Joules (usa g = 10 m/s²)."

explicacion: |
  Usando la fórmula Ep = m * g * h:
  Ep = {m} kg * 10 m/s² * {h} m = {m * 10 * h} J.
```
