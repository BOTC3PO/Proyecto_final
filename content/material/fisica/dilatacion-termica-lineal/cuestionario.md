# Fisica — Dilatacion termica lineal (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de dilatación térmica

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["conceptos_basicos", "termodinamica"]

respuesta: verdadero
tipo: vf

enunciado: "La dilatación térmica lineal es el aumento de la longitud de un cuerpo debido a un incremento en su temperatura."

explicacion: |
  Cuando la temperatura de un sólido aumenta, la energía cinética de sus átomos crece, provocando que estos vibren con mayor amplitud y ocupen un mayor espacio, lo que se traduce en un aumento de la longitud.
```

### 2 — Coeficiente de dilatación lineal

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["coeficiente", "propiedades_materiales"]

variables:
  material_idx: uno_de([0, 1])
  datos: [[0.000012, "acero"], [0.000024, "aluminio"]]

respuesta: datos[material_idx][0]
tipo: completar
tolerancia_abs: 0.0000001

enunciado: "El coeficiente de dilatación lineal del {datos[material_idx][1]} es aproximadamente ___ (expresado en 1/°C)."

pasos:
  - "Identificar el material según el valor proporcionado."
  - "Recordar que el coeficiente depende de la naturaleza del material."

explicacion: |
  El coeficiente de dilatación lineal ($\alpha$) es una propiedad intensiva que indica cuánto se expande un material por unidad de longitud y grado de temperatura.
```

### 3 — Relación entre temperatura y longitud

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["relaciones", "conceptos"]

opciones_explicitas: ["proporcional", "inversamente proporcional", "no tiene relación"]

respuesta: "proporcional"
tipo: mc

enunciado: "En un material sólido, el cambio en la longitud ($\\Delta L$) es ___ al cambio en la temperatura ($\\Delta T$), asumiendo un coeficiente constante."

explicacion: |
  De la fórmula $\Delta L = L_0 \cdot \alpha \cdot \Delta T$ se observa que, al mantener constantes la longitud inicial y el coeficiente, el cambio de longitud es directamente proporcional al cambio de temperatura.
```

### 4 — Variables de la ecuación de dilatación

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["formula", "terminologia"]

respuesta: ["L_0", "$\\Delta L$", "$\\alpha$", "$\\Delta T$"]
tipo: completar
respuestas_validas:
  - "L_0"
  - "$\\Delta L$"
  - "$\\alpha$"
  - "$\\Delta T$"

enunciado: "En la fórmula de la dilatación lineal $\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T$, el término ___ representa la longitud inicial, el término ___ representa la variación de longitud, el término ___ es el coeficiente de dilatación lineal y el término ___ es la variación de temperatura."

explicacion: |
  Es fundamental identificar correctamente cada variable en la ecuación fundamental de la dilatación térmica lineal.
```

### 5 — Factores que afectan la dilatación

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["factores", "conceptos"]

opciones_explicitas: ["Longitud inicial y coeficiente de dilatación", "Solo la temperatura", "Masa y volumen"]

respuesta: "Longitud inicial y coeficiente de dilatación"
tipo: mc

enunciado: "¿De qué factores depende la variación de la longitud ($\\Delta L$) de una barra sólida cuando se calienta?"

explicacion: |
  La variación de longitud depende de tres factores: la longitud original del objeto ($L_0$), el coeficiente de dilatación del material ($\alpha$) y el cambio de temperatura experimentado ($\Delta T$).
```

### 6 — Concepto de dilatación lineal

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["conceptos", "termodinamica"]

respuesta: verdadero
tipo: vf

enunciado: "Si un material se calienta, su longitud inicial aumenta debido al incremento de la agitación térmica de sus átomos. ¿Es esto verdadero?"

explicacion: |
  La dilatación térmica lineal es el aumento de la longitud de un cuerpo cuando se incrementa su temperatura.
```

### 7 — La fórmula de dilatación

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["formula", "teoria"]

opciones_explicitas: ["ΔL = L₀ * α * ΔT", "ΔL = L₀ / (α * ΔT)", "ΔL = L₀ + α + ΔT", "ΔL = α * ΔT / L₀"]
respuesta: "ΔL = L₀ * α * ΔT"
tipo: mc

enunciado: "La expresión matemática que define la variación de longitud (ΔL) en función de la longitud inicial (L₀), el coeficiente de dilatación lineal (α) y el cambio de temperatura (ΔT) es:"

explicacion: |
  La fórmula fundamental es ΔL = L₀ * α * ΔT, donde ΔL es la variación de longitud.
```

### 8 — Cálculo de la variación de longitud

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["calculo", "numerico"]

variables:
  L0: 10.0
  alfa: 0.000012
  deltaT: 50.0
  resultado: L0 * alfa * deltaT

respuesta: resultado
tipo: completar
tolerancia_abs: 0.0001

enunciado: "Una barra de acero tiene una longitud inicial de {L0} m. Si la temperatura aumenta en {deltaT} °C y el coeficiente de dilatación lineal del acero es de {alfa} 1/°C, ¿cuál es la variación de longitud (ΔL) en metros?"

pasos:
  - "Identificar la longitud inicial: L₀ = 10.0 m"
  - "Identificar el coeficiente: α = 0.000012 1/°C"
  - "Identificar la variación de temperatura: ΔT = 50 °C"
  - "Calcular: ΔL = 10.0 * 0.000012 * 50"

explicacion: |
  El cálculo es: ΔL = 10.0 * 0.000012 * 50 = 0.006 m.
```

### 9 — Longitud final de una varilla

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["calculo", "longitud_final"]

variables:
  L0: 5.0
  alfa: 0.000024
  deltaT: 100.0
  deltaL: L0 * alfa * deltaT
  Lf: L0 + deltaL
  resultado: Lf

respuesta: resultado
tipo: completar
tolerancia_abs: 0.0001

enunciado: "Una varilla de aluminio de {L0} m de longitud se calienta de 20°C a 120°C. Si el coeficiente de dilatación lineal es {alfa} 1/°C, ¿cuál es la longitud final (L_f) de la varilla en metros?"

pasos:
  - "Calcular la variación de longitud: ΔL = 5.0 * 0.000024 * 100 = 0.012 m"
  - "Sumar la variación a la longitud inicial: L_f = L₀ + ΔL"
  - "L_f = 5.0 + 0.012 = 5.012 m"

explicacion: |
  La longitud final es la suma de la longitud inicial más la expansión: 5.0 + 0.012 = 5.012 m.
```

### 10 — Orden de los pasos para resolver un problema

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["metodologia"]

opciones_explicitas: ["Identificar datos (L₀, α, ΔT)", "Calcular la variación ΔL", "Sumar ΔL a L₀ para hallar L_f"]
respuesta_orden: ["Identificar datos (L₀, α, ΔT)", "Calcular la variación ΔL", "Sumar ΔL a L₀ para hallar L_f"]
tipo: ordenar

enunciado: "Para resolver un problema que pida hallar la longitud final de un objeto tras un cambio de temperatura, ¿cuál es el orden lógico de los pasos?"

explicacion: |
  Primero se deben extraer los datos, luego aplicar la fórmula de dilatación y finalmente sumar el resultado a la longitud inicial.
```

### 11 — El error de la masa constante

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["dilatacion", "masa", "densidad"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.1, "aumenta"], [0.2, "se mantiene igual"]]

enunciado: "Si una barra de hierro se calienta de 20°C a 100°C, su longitud aumenta debido a la dilatación térmica. Sin embargo, un error común es pensar que su masa también cambia. En realidad, la masa de la barra ___."

opciones_explicitas: ["aumenta", "se mantiene igual", "disminuye"]

respuesta: datos[idx][1]
tipo: mc

explicacion: |
  La masa es una propiedad intrínseca de la cantidad de materia. Aunque el volumen y la longitud aumentan (dilatación), la cantidad de átomos y su masa total permanecen constantes. Lo que realmente cambia es la densidad, que disminuye.
```

### 12 — ¿Dilatación o deformación?

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["conceptos", "verdadero_falso"]

enunciado: "Si una varilla metálica está sujeta rígidamente entre dos paredes fijas y se calienta, la dilatación térmica se manifiesta como un aumento en la longitud de la varilla."

respuesta: falso
tipo: vf

explicacion: |
  Cuando el material está restringido (sujeto rígidamente), no puede expandirse físicamente en longitud. En ese caso, la energía térmica se traduce en un aumento de la tensión interna o esfuerzo mecánico, no en cambio de longitud.
```

### 13 — Coeficientes y materiales

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["coeficientes", "comparacion"]

variables:
  material_idx: uno_de([0, 1])
  escenario: [["aluminio", "mayor"], ["acero", "menor"]]

enunciado: "Si comparamos dos barras de igual longitud y sección transversal, una de {escenario[material_idx][0]} y otra de acero, ante un mismo incremento de temperatura, la barra de {escenario[material_idx][0]} experimentará una dilatación lineal ___."

opciones_explicitas: ["mayor", "menor", "nula"]

respuesta: escenario[material_idx][1]
tipo: mc

explicacion: |
  El coeficiente de dilatación lineal ($\alpha$) es una propiedad del material. El aluminio tiene un $\alpha$ mayor que el acero, por lo que se expande más ante el mismo cambio de temperatura.
```

### 14 — El proceso de expansión

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["proceso", "causa"]

enunciado: "La dilatación térmica ocurre porque al aumentar la temperatura, la energía cinética de los átomos ___."

respuestas_validas:
  - "aumenta"
  - "disminuye"

respuesta: "aumenta"
tipo: completar

explicacion: |
  Al aumentar la temperatura, los átomos vibran con mayor amplitud alrededor de sus posiciones de equilibrio, lo que incrementa la distancia promedio entre ellos, resultando en una expansión macroscópica.
```

### 15 — Orden de las variables

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "avanzado"
  tags: ["formula", "variables"]

enunciado: "Para calcular la variación de longitud ($\\Delta L$) de un objeto, se deben considerar los siguientes factores en el orden de su dependencia en la fórmula $\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T$:"

opciones_explicitas: ["Longitud inicial", "Coeficiente de dilatación", "Variación de temperatura"]

respuesta_orden: ["Longitud inicial", "Coeficiente de dilatación", "Variación de temperatura"]
tipo: ordenar

explicacion: |
  La fórmula establece que la dilatación depende directamente de la longitud original ($L_0$), del coeficiente característico del material ($\alpha$) y del cambio en la escala térmica ($\Delta T$).
```

### 16 — Dilatación lineal vs Volumétrica

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["dilatacion", "dimensiones"]

tipo: mc
opciones_explicitas: ["La dilatación lineal solo considera el cambio en una dimensión (longitud), mientras que la volumétrica considera el cambio en las tres dimensiones (volumen).", "La dilatación lineal ocurre solo en gases, mientras que la volumétrica ocurre en sólidos.", "La dilatación lineal es siempre mayor que la dilatación volumétrica para el mismo material.", "La dilatación lineal depende de la forma del objeto, la volumétrica no."]

enunciado: "Al comparar la dilatación térmica lineal con la dilatación volumétrica, la principal distinción es que la dilatación lineal se enfoca en la variación de la ___."

respuesta: "La dilatación lineal solo considera el cambio en una dimensión (longitud), mientras que la volumétrica considera el cambio en las tres dimensiones (volumen)."

explicacion: |
  La dilatación lineal se aplica cuando una dimensión (longitud) es significativamente mayor que las otras, como en un alambre. La volumétrica es la expansión total en las tres dimensiones del cuerpo.
```

### 17 — Coeficiente de dilatación y material

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["coeficiente", "material"]

variables:
  idx: uno_de([0, 1])
  datos: [[["aluminio", 2.3e-5], ["hierro", 1.2e-5]], [["aluminio", 2.3e-5], ["hierro", 1.2e-5]]]

tipo: mc
opciones_explicitas: ["El coeficiente de dilatación lineal es una propiedad intrínseca del material y no depende de la cantidad de masa.", "El coeficiente de dilatación lineal depende de la longitud inicial del objeto.", "A mayor masa del objeto, mayor es el coeficiente de dilatación lineal.", "El coeficiente de dilatación lineal es igual para todos los metales."]

enunciado: "Si comparamos dos barras del mismo material pero de diferentes longitudes, la diferencia fundamental es que el coeficiente de dilatación lineal ___."

respuesta: "El coeficiente de dilatación lineal es una propiedad intrínseca del material y no depende de la cantidad de masa."

explicacion: |
  El coeficiente ($\alpha$) depende de la naturaleza del material. La deformación ($\Delta L$) sí depende de la longitud inicial ($L_0$), pero el coeficiente es constante para el material dado.
```

### 18 — Relación entre coeficientes

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "avanzado"
  tags: ["relacion_coeficientes", "geometria"]

tipo: vf
enunciado: "Para un sólido isotrópico, el coeficiente de dilatación volumétrica ($\\gamma$) es aproximadamente tres veces el coeficiente de dilatación lineal ($\\alpha$)."

respuesta: verdadero

explicacion: |
  En materiales isotrópicos (propiedades iguales en todas las direcciones), se cumple la relación $\gamma \approx 3\alpha$.
```

### 19 — Factores de expansión

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["factores", "calculo"]

tipo: completar
respuestas_validas:
  - "$\\Delta T$"
  - "la temperatura inicial"

enunciado: "En la fórmula de la dilatación lineal $\\Delta L = \\alpha \\cdot L_0 \\cdot \\Delta T$, el término $\\Delta T$ representa la ___."

respuesta: "$\\Delta T$"

explicacion: |
  $\Delta T$ es el cambio de temperatura (temperatura final menos temperatura inicial). Sin un cambio de temperatura, no hay dilatación térmica.
```

### 20 — Secuencia de expansión

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["proceso", "causa_efecto"]

tipo: ordenar
opciones_explicitas: ["Aumento de la energía cinética de las partículas", "Incremento de la distancia promedio entre átomos", "Aumento de la longitud total del objeto"]

enunciado: "Ordena los pasos que describen el fenómeno de la dilatación térmica lineal desde el nivel microscópico al macroscópico:"

respuesta_orden: ["Aumento de la energía cinética de las partículas", "Incremento de la distancia promedio entre átomos", "Aumento de la longitud total del objeto"]

explicacion: |
  El calor aumenta la vibración (energía cinética) de los átomos, lo que aumenta la distancia media entre ellos, resultando en un aumento macroscópico de la longitud.
```

### 21 — Dilatación de una viga de acero

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["termodinamica", "expansion_lineal"]

variables:
  escenario: [[0.1, 12.5], [0.2, 25.0], [0.3, 37.5]]
  idx: uno_de([0,1,2])
  L0: escenario[idx][0]
  dT: escenario[idx][1]
  alpha: 0.000012
  deltaL: L0 * alpha * dT

respuesta: deltaL
tipo: completar
tolerancia_abs: 0.0001

enunciado: "Una viga de acero tiene una longitud inicial de {L0} m. Si la temperatura aumenta en {dT} °C y el coeficiente de dilatación lineal es de {alpha} 1/°C, ¿cuánto aumenta su longitud en metros?"

pasos:
  - "Calcular el cambio de longitud usando la fórmula: ΔL = L₀ * α * ΔT"
  - "Sustituir los valores: ΔL = {L0} * {alpha} * {dT}"

explicacion: |
  La dilatación lineal se calcula con la fórmula ΔL = L₀ · α · ΔT. 
  Para este caso: {L0} * 0.000012 * {dT} = {deltaL} m.
```

### 22 — El material ideal para rieles

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["materiales", "conceptos"]

variables:
  material: [[0, "Aluminio"], [1, "Acero"], [2, "Vidrio"]]
  idx: uno_de([0,1,2])

respuesta: material[idx][1]
tipo: mc
opciones_explicitas: ["Aluminio", "Acero", "Vidrio"]

enunciado: "Se requiere un material para las vías de un ferrocarril que tenga una dilatación térmica lineal muy baja para evitar que las vías se deformen en verano. Basado en los materiales comunes, ¿cuál de estos es más estable térmicamente?"

explicacion: |
  El {material[idx][1]} tiene un coeficiente de dilatación menor que el {material[0]} (Aluminio), lo que lo hace más adecuado para estructuras que requieren estabilidad dimensional frente a cambios de temperatura.
```

### 23 — Relación entre temperatura y longitud

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si un objeto se calienta, su longitud lineal aumenta siempre que el coeficiente de dilatación lineal sea un valor positivo."

explicacion: |
  Efectivamente, la fórmula ΔL = L₀ · α · ΔT indica que si ΔT es positivo y α es positivo, ΔL será positivo, resultando en un aumento de la longitud.
```

### 24 — El fenómeno de la dilatación

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: ["aumento", "expansión", "crecimiento"]
respuestas_validas:
  - "aumento"
  - "expansión"
  - "crecimiento"
tipo: completar

enunciado: "Cuando un material sólido se somete a un incremento de temperatura, su longitud experimenta un ___ lineal."

explicacion: |
  El aumento de la energía cinética de las partículas provoca que estas vibren con mayor amplitud, incrementando la distancia promedio entre ellas, lo que se traduce en una expansión o aumento de la longitud.
```

### 25 — Proceso de dilatación térmica

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["procesos"]

respuesta_orden: ["Aumento de temperatura", "Aumento de vibración molecular", "Aumento de longitud"]
tipo: ordenar

opciones_explicitas: ["Aumento de temperatura", "Aumento de vibración molecular", "Aumento de longitud"]

enunciado: "Ordena los siguientes eventos según ocurren de forma causal durante el calentamiento de una barra metálica:"

explicacion: |
  Primero aumenta la temperatura, lo que incrementa la energía cinética (vibración) de los átomos, resultando finalmente en un incremento de la longitud macroscópica.
```
