# Quimica — superconductividad (cuestionario, 24 preguntas VBLang)

> Tema: `quimica/superconductividad`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "basico"
  tags: ["resistencia", "definicion"]

respuesta: 0
tipo: input

enunciado: "¿Cuál es el valor numérico de la resistencia eléctrica (en ohmios) de un material en estado superconductor ideal?"

explicacion: |
  La definición fundamental de superconductividad es la ausencia total de resistencia eléctrica. Por lo tanto, el valor es 0.
```

### 2 — pregunta 2

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "basico"
  tags: ["historia", "mercurio"]

variables:
  tc_mercurio: 4.2

respuesta: 4.2
tipo: input

enunciado: "El primer material en el que se observó superconductividad fue el mercurio. ¿A qué temperatura (en Kelvin) ocurre esta transición?"

explicacion: |
  Heike Kamerlingh Onnes descubrió la superconductividad en el mercurio a 4.2 K en 1911.
```

### 3 — pregunta 3

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["mecanismo", "cooper"]

respuesta: verdadero
tipo: vf

enunciado: "La superconductividad convencional se explica mediante la formación de pares de Cooper, donde dos electrones se acoplan a pesar de su repulsión coulombiana."

explicacion: |
  Verdadero. La interacción con las vibraciones de la red cristalina (fonones) permite esta atracción efectiva que forma los pares de Cooper.
```

### 4 — pregunta 4

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "basico"
  tags: ["conversión", "temperatura"]

variables:
  tc_k: random(10, 20)

respuesta: "{redondear(tc_k - 273.15, 2)}"
tipo: input

enunciado: "Si un superconductor tiene una temperatura crítica de {tc_k} K, ¿cuál es esa temperatura aproximada en grados Celsius?"

explicacion: |
  Para convertir Kelvin a Celsius se resta 273.15. Ejemplo: 15 K - 273.15 = -258.15 °C.
```

### 5 — pregunta 5

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["clasificacion", "ceramica"]

respuesta: verdadero
tipo: vf

enunciado: "Los superconductores de alta temperatura suelen ser cerámicas basadas en óxidos de cobre (cupratos)."

explicacion: |
  Verdadero. A diferencia de los metales puros, los primeros superconductores de alta Tc descubiertos eran cerámicas complejas.
```

### 6 — pregunta 6

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["magnetismo", "meissner"]

respuesta: falso
tipo: vf

enunciado: "Un superconductor perfecto permite que el campo magnético interno sea igual al campo magnético externo aplicado."

explicacion: |
  Falso. Esto describe un material diamagnético débil o paramagnético. Un superconductor exhibe el efecto Meissner, expulsando completamente el campo magnético de su interior (diamagnetismo perfecto).
```

### 7 — pregunta 7

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "avanzado"
  tags: ["fisica", "energia"]

variables:
  masa: random(1, 5)
  velocidad: random(10, 50)

respuesta: "{0.5 * masa * velocidad * velocidad}"
tipo: input

enunciado: "Si un par de Cooper tuviera una masa efectiva equivalente a {masa} unidades y se moviera a {velocidad} unidades de velocidad, ¿cuál sería su energía cinética clásica?"

explicacion: |
  La energía cinética clásica es $E_k = \frac{1}{2}mv^2$. Sustituyendo los valores dados.
```

### 8 — pregunta 8

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "basico"
  tags: ["comportamiento", "grafica"]

respuesta: verdadero
tipo: vf

enunciado: "En un conductor normal, la resistencia eléctrica disminuye al bajar la temperatura, pero nunca llega a cero antes de la superconductividad."

explicacion: |
  Verdadero. En metales normales, la resistencia baja progresivamente, pero la transición abrupta a cero solo ocurre si el material es superconductor.
```

### 9 — pregunta 9

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["limites", "corriente"]

respuesta: falso
tipo: vf

enunciado: "La superconductividad puede mantenerse indefinidamente incluso si la corriente que pasa por el material supera la densidad de corriente crítica."

explicacion: |
  Falso. Si la corriente, el campo magnético o la temperatura superan sus valores críticos ($J_c$, $H_c$, $T_c$), el material vuelve al estado normal (resistivo).
```

### 10 — pregunta 10

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["clasificacion", "tipo1"]

respuesta: verdadero
tipo: vf

enunciado: "Los superconductores de tipo I expulsan completamente el campo magnético hasta un valor crítico $H_c$, momento en el cual pierden súbitamente la superconductividad."

explicacion: |
  Verdadero. Esta transición es abrupta y característica de los superconductores tipo I (generalmente metales puros).
```

### 11 — pregunta 11

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "avanzado"
  tags: ["teoria", "cooper"]

respuesta: verdadero
tipo: vf

enunciado: "La longitud de coherencia define la distancia sobre la cual la función de onda de los pares de Cooper varía significativamente."

explicacion: |
  Verdadero. Es un parámetro clave que, junto con la longitud de penetración de London, determina si un superconductor es de tipo I o II.
```

### 12 — pregunta 12

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "basico"
  tags: ["aplicacion", "medicina"]

respuesta: verdadero
tipo: vf

enunciado: "Los electroimanes superconductores son esenciales en los equipos de Resonancia Magnética (MRI) por su capacidad de generar campos magnéticos intensos sin disipación de energía."

explicacion: |
  Verdadero. Permiten corrientes muy altas sin calentamiento óhmico, generando campos estables y potentes.
```

### 13 — pregunta 13

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "basico"
  tags: ["fisica", "energia"]

variables:
  resistencia: 0

respuesta: 0
tipo: input

enunciado: "Si un cable superconductor transporta una corriente de 100 A, ¿cuánta energía se disipa en forma de calor por efecto Joule en 1 segundo?"

explicacion: |
  La potencia disipada es $P = I^2 R$. Como $R=0$ en estado superconductor, la disipación es 0.
```

### 14 — pregunta 14

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["criogenia", "nitrogeno"]

respuesta: verdadero
tipo: vf

enunciado: "El uso de nitrógeno líquido permite enfriar superconductores de alta temperatura, reduciendo significativamente el costo operativo comparado con el helio líquido."

explicacion: |
  Verdadero. El nitrógeno líquido hierve a 77 K, lo cual es suficiente para muchos cupratos, y es mucho más barato y abundante que el helio.
```

### 15 — pregunta 15

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "avanzado"
  tags: ["teoria", "bcs"]

respuesta: verdadero
tipo: vf

enunciado: "La teoría BCS (Bardeen-Cooper-Schrieffer) explica la superconductividad convencional mediante la interacción electrón-fonón."

explicacion: |
  Verdadero. Esta teoría ganó el Nobel y describe cómo los fonones median la atracción entre electrones formando pares de Cooper.
```

### 16 — pregunta 16

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "avanzado"
  tags: ["teoria", "gap"]

respuesta: verdadero
tipo: vf

enunciado: "Existe una 'brecha de energía' (energy gap) entre el estado fundamental superconductor y los estados excitados, lo que protege a los pares de Cooper de dispersiones menores."

explicacion: |
  Verdadero. Esta brecha es necesaria para romper los pares de Cooper y volver al estado normal.
```

### 17 — pregunta 17

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["materiales", "niobio"]

respuesta: verdadero
tipo: vf

enunciado: "El niobio y sus aleaciones (como NbTi) son ampliamente utilizados en la fabricación de imanes superconductores comerciales."

explicacion: |
  Verdadero. El niobio tiene una $T_c$ relativamente alta (9.2 K) y es un superconductor de tipo II, ideal para aplicaciones de alto campo.
```

### 18 — pregunta 18

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["magnetismo", "diamagnetismo"]

respuesta: verdadero
tipo: vf

enunciado: "La expulsión del campo magnético implica que la susceptibilidad magnética de un superconductor es -1 (en unidades SI)."

explicacion: |
  Verdadero. $\chi = -1$ indica diamagnetismo perfecto, que es la característica definitoria del efecto Meissner.
```

### 19 — pregunta 19

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "basico"
  tags: ["futuro", "investigacion"]

respuesta: falso
tipo: vf

enunciado: "Actualmente existen superconductores comerciales estables que operan a temperatura ambiente y presión ambiente de manera rutinaria."

explicacion: |
  Falso. Aunque hay investigaciones prometedoras (hidruros a alta presión), no hay superconductores a temperatura ambiente y presión ambiente disponibles comercialmente.
```

### 20 — pregunta 20

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "avanzado"
  tags: ["fisica", "vortices"]

respuesta: verdadero
tipo: vf

enunciado: "En el estado mixto de un superconductor de tipo II, el campo magnético penetra en forma de cuantos de flujo discretos llamados vórtices."

explicacion: |
  Verdadero. Cada vórtice lleva un cuanto de flujo magnético $\Phi_0 = h/2e$.
```

### 21 — pregunta 21

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "basico"
  tags: ["aplicacion", "transporte"]

respuesta: verdadero
tipo: vf

enunciado: "Los trenes de levitación magnética (Maglev) utilizan superconductores para lograr la levitación y reducir la fricción."

explicacion: |
  Verdadero. La levitación se logra mediante la interacción entre los imanes superconductores y los imanes en la vía.
```

### 22 — pregunta 22

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["dispositivo", "squid"]

respuesta: verdadero
tipo: vf

enunciado: "Un SQUID (Dispositivo Superconductor de Interferencia Cuántica) es un sensor extremadamente sensible de campos magnéticos basado en uniones Josephson."

explicacion: |
  Verdadero. Se utiliza en magnetoeleencefalografía (MEG) y otras mediciones de alta precisión.
```

### 23 — pregunta 23

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "avanzado"
  tags: ["efecto", "josephson"]

respuesta: verdadero
tipo: vf

enunciado: "El efecto Josephson permite el paso de corriente entre dos superconductores separados por un aislante delgado sin aplicar voltaje."

explicacion: |
  Verdadero. Es un efecto túnel cuántico de pares de Cooper y es la base de los SQUIDs y los qubits superconductores.
```

### 24 — pregunta 24

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["ingenieria", "costo"]

respuesta: verdadero
tipo: vf

enunciado: "Una de las principales barreras para la adopción masiva de la superconductividad es el costo y la complejidad de los sistemas de refrigeración criogénica."

explicacion: |
  Verdadero. Mantener temperaturas criogénicas requiere infraestructura costosa y compleja, lo que limita su uso a aplicaciones de alto valor.
```
