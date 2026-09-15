# Oficios — Albañil / Constructor — Diagnóstico de albañilería por casos (cuestionario, 20 preguntas VBLang)

> Cierre del oficio (`OF3`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico de patologías
> de obra — cada pregunta validada con parse+lint+compile+generate
> real de packages/vblang antes de guardarse.

---

### 1 — El método de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "observar el patrón del daño antes de asumir una causa"
tipo: mc
opciones_explicitas: ["observar el patrón del daño antes de asumir una causa", "tapar cualquier fisura con revoque de inmediato", "ignorar el daño si no crece en una semana"]

enunciado: "Según la teoría, ¿cuál es el primer paso frente a una patología de obra (fisura, mancha, humedad)?"

explicacion: |
  Observar el patrón del daño —dirección, forma, ubicación— antes de
  asumir una causa.
```

### 2 — Fisura fina vs. fisura ancha diagonal

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "una fisura ancha y diagonal que atraviesa varias hiladas en línea recta"
tipo: mc
opciones_explicitas: ["una fisura ancha y diagonal que atraviesa varias hiladas en línea recta", "una fisura fina que sigue una junta de dilatación", "cualquier fisura, sin importar su forma"]

enunciado: "Según la teoría, ¿qué tipo de fisura en un muro es señal de movimiento estructural real, no sólo estética?"

explicacion: |
  Una fisura fina que sigue el contorno de una junta o aparece por
  retracción normal suele ser estética; una ancha y diagonal que
  atraviesa varias hiladas señala movimiento estructural.
```

### 3 — Fisura estética: superficial y por retracción

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "Una fisura fina y superficial que sigue el contorno de una junta de dilatación, o aparece por retracción normal del material al secar, suele ser sólo estética."

explicacion: |
  A diferencia de la fisura ancha diagonal, este tipo no indica
  movimiento estructural.
```

### 4 — Dosaje de reparación de fisuras estéticas

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "avanzado"
  tags: ["caso 1"]

variables:
  proporcion: uno_de(["1:4", "1:5"])

respuesta: verdadero
tipo: vf

enunciado: "\"{proporcion}\" (cemento:arena) es una de las proporciones citadas en la teoría para el mortero de reparación de fisuras confirmadas como estéticas."

explicacion: |
  Ambas proporciones (1:4 y 1:5) son citadas como reales según el
  caso.
```

### 5 — Corrosión del acero de refuerzo: causa

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "un recubrimiento de hormigón insuficiente o agrietado que dejó entrar humedad"
tipo: mc
opciones_explicitas: ["un recubrimiento de hormigón insuficiente o agrietado que dejó entrar humedad", "el uso de arena de mala calidad únicamente", "la exposición del hormigón al sol directo"]

enunciado: "Según la teoría, ¿qué suele provocar que el acero dentro de una columna o viga empiece a oxidarse?"

explicacion: |
  Generalmente el recubrimiento de hormigón que lo protege es
  insuficiente o se agrietó, dejando entrar humedad hasta el acero.
```

### 6 — Por qué el óxido genera fisuras

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "El óxido ocupa más volumen que el acero original, y esa expansión presiona el hormigón desde adentro, generando fisuras características."

explicacion: |
  Es el mecanismo físico detrás de las fisuras que \"salen desde el
  hierro hacia afuera\" en el caso 2.
```

### 7 — La fisura como síntoma tardío

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "En el caso de corrosión del acero de refuerzo, la fisura visible es sólo el síntoma tardío de un proceso que ya venía ocurriendo adentro del elemento."

explicacion: |
  Para cuando la fisura aparece en la superficie, el proceso de
  corrosión ya lleva tiempo desarrollándose por dentro.
```

### 8 — Qué es la eflorescencia

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "sales minerales que el agua disuelve y deja depositadas en la superficie al evaporarse"
tipo: mc
opciones_explicitas: ["sales minerales que el agua disuelve y deja depositadas en la superficie al evaporarse", "un tipo de pintura de mala calidad que se descascara", "moho que crece exclusivamente en climas fríos"]

enunciado: "¿Qué es la eflorescencia, la capa blanquecina que a veces aparece sobre un muro de ladrillo o revoque?"

explicacion: |
  Son sales minerales que el agua disuelve al atravesar el material
  poroso y quedan depositadas al evaporarse.
```

### 9 — La eflorescencia como señal de humedad

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque la eflorescencia no es, por sí misma, un daño estructural grave, es una señal clara de que hay humedad atravesando el muro de forma continua."

explicacion: |
  Esa humedad continua, sin tratarse, puede derivar en problemas más
  serios con el tiempo.
```

### 10 — Tres orígenes distintos de humedad en muros

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "avanzado"
  tags: ["caso 4"]

variables:
  origen: uno_de(["humedad ascendente (por capilaridad desde el suelo)", "humedad de filtración (agua de lluvia que entra por una cubierta o junta mal sellada)", "condensación (vapor de agua del ambiente que se condensa en una superficie fría)"])

respuesta: verdadero
tipo: vf

enunciado: "\"{origen}\" es uno de los orígenes de humedad en muros mencionados en la teoría."

explicacion: |
  Los tres orígenes son reales y cada uno requiere una solución
  distinta.
```

### 11 — Por qué distinguir el origen de la humedad importa

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "avanzado"
  tags: ["caso 4"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, tratar una humedad ascendente con el mismo método que una humedad de filtración resuelve el problema en cualquier caso."

explicacion: |
  Falso. Cada origen de humedad requiere una solución distinta;
  tratar una humedad ascendente como si fuera de filtración no
  resuelve el problema real.
```

### 12 — Diferencia entre eflorescencia y humedad en muros

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "avanzado"
  tags: ["caso 3", "caso 4"]

variables:
  n: uno_de([1, 1])

respuesta: "la eflorescencia es un síntoma visible de humedad de paso, mientras que la humedad en muros puede tener distintos orígenes"
tipo: mc
opciones_explicitas: ["la eflorescencia es un síntoma visible de humedad de paso, mientras que la humedad en muros puede tener distintos orígenes", "son exactamente el mismo fenómeno con dos nombres distintos", "la eflorescencia sólo ocurre en bloques de hormigón, nunca en ladrillo cerámico"]

enunciado: "¿Cómo se relacionan el caso 3 (eflorescencia) y el caso 4 (humedad en muros), según la teoría?"

explicacion: |
  La eflorescencia es un síntoma visible específico de humedad de
  paso; la humedad en muros, en cambio, es la categoría más amplia con
  distintos orígenes posibles.
```

### 13 — Patologías específicas de bloques de hormigón

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "avanzado"
  tags: ["caso 5"]

variables:
  n: uno_de([1, 1])

respuesta: "las juntas entre bloques y el llenado incompleto de los huecos armados con hierro"
tipo: mc
opciones_explicitas: ["las juntas entre bloques y el llenado incompleto de los huecos armados con hierro", "exactamente las mismas causas que en ladrillo cerámico, sin diferencia alguna", "la exposición al sol directo, exclusivamente"]

enunciado: "Según la teoría, ¿a qué están vinculadas las patologías típicas de la mampostería de bloques de hormigón?"

explicacion: |
  Sobre todo a las juntas entre bloques y al llenado incompleto de los
  huecos armados con hierro, que puede dejar puntos débiles no
  visibles desde afuera.
```

### 14 — Diagnosticar bloques de hormigón con el criterio de ladrillo

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "avanzado"
  tags: ["caso 5"]

respuesta: falso
tipo: vf

enunciado: "Diagnosticar un muro de bloques de hormigón con el mismo criterio que uno de ladrillo cerámico siempre identifica correctamente la causa real del daño."

explicacion: |
  Falso. Al ser un sistema constructivo distinto con patologías
  propias, aplicar el mismo criterio puede llevar a pasar por alto la
  causa real.
```

### 15 — Distinguir lo estético de lo estructural

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según el método resumido de la teoría, distinguir lo estético de lo estructural es clave porque la urgencia y el método de reparación son completamente distintos entre ambos casos."

explicacion: |
  Es el segundo paso del método resumido al final de la teoría.
```

### 16 — Un mismo síntoma, distintos orígenes

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Un mismo síntoma visible, como una fisura o una mancha de humedad, puede tener orígenes muy distintos según el material, la ubicación y la antigüedad de la construcción."

explicacion: |
  Es el tercer paso del método resumido, y la razón por la que no
  alcanza con mirar sólo el síntoma sin contexto.
```

### 17 — Reparar sin diagnosticar

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, tapar cualquier fisura con revoque apenas se detecta, sin evaluar antes si es estructural, es la práctica recomendada."

explicacion: |
  Falso. Una fisura ancha y diagonal requiere evaluación antes de
  taparla; hacerlo sin evaluar puede ocultar un problema estructural
  real.
```

### 18 — El origen de una fisura visible años después

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "avanzado"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Una fisura que aparece años después de terminada la obra puede tener su origen real en un error de una etapa muy anterior, como un cimiento mal calculado para el tipo de suelo."

explicacion: |
  Es una idea que conecta este tema con `fundamentos-albanileria/`: los
  cimientos son la parte que menos se ve, pero un error ahí se
  arrastra hasta mucho después.
```

### 19 — Diagnosticar patologías es un oficio en sí mismo

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Distinguir un daño estético de uno estructural, y elegir la reparación correcta para cada caso, es una habilidad que se construye con casos reales, no con definiciones abstractas."

explicacion: |
  Es la idea de apertura de todo el tema de diagnóstico.
```

### 20 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "albanil_constructor_diagnostico_albanileria_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los cinco casos de este tema comparten la misma lógica: observar el patrón del daño, distinguir lo estético de lo estructural, y considerar que un mismo síntoma puede tener orígenes muy distintos."

explicacion: |
  Es la síntesis final del método de diagnóstico de albañilería de
  todo el tema.
```
