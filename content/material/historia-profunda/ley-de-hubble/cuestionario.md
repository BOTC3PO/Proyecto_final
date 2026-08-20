# Historia Profunda — Ley de hubble (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El concepto de la Ley de Hubble

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["astronomia", "cosmologia"]

respuesta: "alejamiento"
tipo: completar
respuestas_validas:
  - "alejamiento"
  - "expansión"

enunciado: "La Ley de Hubble establece que la velocidad de ___ de las galaxias es proporcional a su distancia respecto a la Tierra."

explicacion: |
  La ley de Hubble-Lemaître indica que cuanto más lejana es una galaxia, mayor es la velocidad con la que se aleja de nosotros, lo que sugiere la expansión del universo.
```

### 2 — Relación de proporcionalidad

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Si una galaxia A está al doble de distancia que una galaxia B, según la Ley de Hubble, la velocidad de la galaxia A será ___ que la de la galaxia B."

explicacion: |
  Como la velocidad es directamente proporcional a la distancia ($v \propto d$), si la distancia se duplica, la velocidad también se duplica.
```

### 3 — Cálculo de la velocidad de recesión

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  distancia: 100000000
  hubble: 70

respuesta: 7000000000
tipo: completar
tolerancia_abs: 1

enunciado: "Una galaxia se encuentra a una distancia de {distancia} parsecs. Si la constante de Hubble es $H_0 = {hubble}$ km/s/Mpc, ¿cuál es la velocidad de recesión en km/s? (Usa la fórmula $v = H_0 \\cdot d$)"

pasos:
  - "Identificar la distancia ($d$) y la constante de Hubble ($H_0$)."
  - "Multiplicar la constante de Hubble por la distancia: $v = 70 \\cdot 100.000.000$."

explicacion: |
  Aplicando la fórmula $v = H_0 \cdot d$: $70 \times 100.000.000 = 7.000.000.000$ km/s.
```

### 4 — Componentes de la fórmula

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["formula"]

respuesta: "distancia"
tipo: completar
respuestas_validas:
  - "distancia"
  - "velocidad"
  - "constante"

enunciado: "En la expresión matemática $v = H_0 \\cdot d$, la variable $d$ representa la ___ de la galaxia."

explicacion: |
  En la ecuación de Hubble, $v$ es la velocidad de recesión, $H_0$ es la constante de Hubble y $d$ es la distancia.
```

### 5 — Interpretación de la expansión

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["teoria"]

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que la Ley de Hubble implica que el universo se está expandiendo?"

explicacion: |
  Sí, el hecho de que todas las galaxias presenten un corrimiento al rojo (redshift) proporcional a su distancia es la evidencia fundamental de la expansión del tejido espacio-temporal.
```

### 6 — El descubrimiento de Hubble

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["astronomia", "hubble", "expansion"]

respuesta: "expansión"
tipo: completar
respuestas_validas:
  - "expansión"
  - "expansion"

enunciado: "En 1929, Edwin Hubble observó que las galaxias lejanas se alejan de nosotros, lo que proporcionó evidencia fundamental de la ___ del universo."

explicacion: |
  Hubble descubrió que el universo no es estático, sino que está en constante expansión, lo que cambió nuestra comprensión del cosmos.
```

### 7 — Relación entre distancia y velocidad

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["ley_de_hubble", "velocidad", "distancia"]

variables:
  escenario: uno_de([["10 Mpc", "200 km/s"], ["20 Mpc", "400 km/s"], ["50 Mpc", "1000 km/s"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["100 km/s", "200 km/s", "300 km/s", "400 km/s", "1000 km/s"]

enunciado: "Si aplicamos la lógica de la Ley de Hubble, donde la velocidad de recesión es proporcional a la distancia, ¿cuál es la velocidad aproximada de una galaxia situada a {escenario[0]} de distancia?"

pasos:
  - "Identificar la distancia proporcionada."
  - "Relacionar la distancia con la velocidad según el escenario asignado."

explicacion: |
  La Ley de Hubble establece que $v = H_0 \cdot d$. En este ejercicio, se ha asignado un valor de velocidad proporcional a la distancia dada en el escenario.
```

### 8 — El efecto Doppler y la luz

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["efecto_doppler", "redshift"]

respuesta: "corrimiento al rojo"
tipo: completar
respuestas_validas:
  - "corrimiento al rojo"
  - "redshift"

enunciado: "El fenómeno mediante el cual la luz de las galaxias lejanas se desplaza hacia longitudes de onda más largas debido al alejamiento es conocido como ___."

explicacion: |
  Este fenómeno, llamado 'redshift' o corrimiento al rojo, es la base observacional que permitió a Hubble concluir que las galaxias se alejan.
```

### 9 — Interpretación del modelo

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["cosmologia", "modelo_estatico"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Antes de los descubrimientos de Hubble, la creencia predominante en la comunidad científica era que el universo era estático. ¿Es correcto afirmar que la Ley de Hubble refuta esta idea? "

explicacion: |
  Correcto. La observación de que las galaxias se alejan invalidó el modelo de un universo estático y dio paso al modelo del Big Bang.
```

### 10 — Secuencia de evidencia

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["metodologia", "evidencia"]

respuesta_orden: ["observación del redshift", "cálculo de la velocidad de recesión", "conclusión de la expansión universal"]
tipo: ordenar
opciones_explicitas: ["observación del redshift", "cálculo de la velocidad de recesión", "conclusión de la expansión universal"]

enunciado: "Ordena cronológicamente los pasos lógicos que llevaron a Hubble a concluir la expansión del universo:"

pasos:
  - "Detectar el cambio de color en el espectro de las galaxias."
  - "Determinar qué tan rápido se alejan según su distancia."
  - "Deducir que el espacio mismo se está expandiendo."

explicacion: |
  Primero se observa el desplazamiento espectral (redshift), luego se cuantifica la velocidad de alejamiento y finalmente se interpreta como una expansión del tejido del universo.
```

### 11 — Relación de Hubble

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["astronomia", "cosmologia"]

enunciado: "Según la Ley de Hubble, la velocidad de alejamiento (v) de una galaxia es directamente proporcional a su distancia (d). Esto se expresa mediante la fórmula v = H0 * d. Si una galaxia se encuentra a una distancia mayor, su velocidad de alejamiento será ___."

opciones_explicitas: ["menor", "mayor", "igual", "nula"]
respuesta: "mayor"
tipo: "mc"

explicacion: |
  La Ley de Hubble establece una relación de proporcionalidad directa: a mayor distancia, mayor es la velocidad con la que la galaxia se aleja de nosotros.
```

### 12 — Cálculo de velocidad

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["calculo", "astronomia"]

variables:
  distancia_m: 100000000
  h0_valor: 70

enunciado: "Utilizando una constante de Hubble H0 de {h0_valor} km/s/Mpc, calcula la velocidad de alejamiento de una galaxia situada a {distancia_m} Mpc."

pasos:
  - "Identificar la constante H0: 70 km/s/Mpc"
  - "Identificar la distancia: 100,000,000 Mpc"
  - "Multiplicar H0 por la distancia: 70 * 100,000,000"

respuesta: 7000000000
tipo: "input"
tolerancia_abs: 0

explicacion: |
  La velocidad se obtiene multiplicando la constante de Hubble por la distancia: 70 * 10^8 = 7 * 10^9 km/s.
```

### 13 — Estimación de la edad del universo

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["cosmologia", "tiempo"]

variables:
  datos: [[70, "13.8"], [50, "20.0"]]
  idx: uno_de([0, 1])
  h0: datos[idx][0]
  edad: datos[idx][1]

enunciado: "La edad aproximada del universo se puede estimar mediante el inverso de la constante de Hubble (1/H0). Si tomamos un valor de H0 de {h0} km/s/Mpc, la edad estimada es de aproximadamente ___ miles de millones de años."

respuestas_validas:
  - "13.8"
  - "20.0"
respuesta: edad
tipo: "completar"

explicacion: |
  El tiempo estimado (edad del universo) es inversamente proporcional a H0. A mayor valor de la constante, menor es la edad estimada del universo.
```

### 14 — Conceptos clave de Hubble

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "Ordena los elementos según la lógica de la expansión del universo descrita por Edwin Hubble, desde la causa hasta el efecto observado:"

opciones_explicitas: ["Expansión del espacio", "Aumento de la distancia entre galaxias", "Aumento de la velocidad de alejamiento"]
respuesta_orden: ["Expansión del espacio", "Aumento de la distancia entre galaxias", "Aumento de la velocidad de alejamiento"]
tipo: "ordenar"

explicacion: |
  La expansión del espacio provoca que las galaxias se alejen (aumenta la distancia), lo cual se traduce en una velocidad de alejamiento mayor según la Ley de Hubble.
```

### 15 — Verdad o Falso

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "¿Es correcto afirmar que si la constante de Hubble (H0) fuera mayor, el universo sería más joven?"

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Verdadero"
tipo: "mc"

explicacion: |
  Verdadero. Como la edad es aproximadamente 1/H0, un valor de H0 más grande implica un tiempo (edad) menor.
```

### 16 — El Principio de Cosmología

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["cosmologia", "hubble", "observacion"]

respuesta: "principio_cosmologico"
tipo: mc

opciones_explicitas: ["principio_cosmologico", "teoria_geocentrica", "teoria_estatica", "modelo_de_hubble"]

enunciado: "El hecho de que todas las galaxias parezcan alejarse de nosotros debido a la expansión del universo no significa que la Tierra sea el centro. Este concepto de que el universo se ve igual para cualquier observador está ligado al..."

explicacion: |
  El principio cosmológico establece que, a gran escala, el universo es homogéneo e isotrópico. La expansión es una propiedad del espacio mismo, por lo que cualquier observador en cualquier galaxia vería el mismo efecto de alejamiento.
```

### 17 — El Efecto de la Expansión

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["expansion", "observacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario_datos: [[0, "se alejan"], [1, "se alejan"]]

respuesta: escenario_datos[escenario_idx][1]
tipo: completar

respuestas_validas:
  - "se alejan"
  - "se acercan"
  - "estacionarias"

enunciado: "Si un observador se situara en una galaxia muy lejana, en lugar de la Tierra, vería que las demás galaxias del universo {escenario_datos[escenario_idx][1]} de la misma forma que nosotros."

explicacion: |
  La expansión del universo no es una explosión que ocurre desde un punto central, sino una expansión del tejido mismo del espacio. Por lo tanto, desde cualquier punto, la observación es la misma.
```

### 18 — La ilusión del centro

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["geometria", "espacio"]

respuesta: "falso"
tipo: completar
enunciado: "La Ley de Hubble implica que existe un punto central en el universo desde el cual todas las galaxias se expanden en forma radial, situando a la Tierra en un lugar privilegiado."

explicacion: |
  Falso. La expansión es local en cada punto del espacio. Es similar a la superficie de un globo inflándose: todos los puntos se alejan de todos los demás, sin que haya un centro en la superficie.
```

### 19 — Perspectiva del observador

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["isotropia", "observador"]

variables:
  obs_idx: uno_de([0, 1])
  obs_tipo: ["un observador en la Vía Lemaître", "un observador en una galaxia lejana"]

respuesta: "isotropico"
tipo: completar

respuestas_validas:
  - "isotropico"
  - "anisotropico"
  - "central"

enunciado: "Debido a la naturaleza de la expansión, el universo es {obs_tipo[obs_idx]} para {obs_tipo[obs_idx]}, lo que significa que las leyes físicas y la apariencia de la expansión no dependen de la posición del observador."

explicacion: |
  La isotropía significa que las propiedades del universo son las mismas en todas las direcciones. Esto garantiza que no haya un "centro" observable.
```

### 20 — Secuencia de la comprensión histórica

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["logica", "historia"]

opciones_explicitas: ["observacion_galaxias", "conclusion_expansion", "implicacion_no_centro"]
respuesta_orden: ["observacion_galaxias", "conclusion_expansion", "implicacion_no_centro"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que llevaron a la comprensión moderna del universo tras el descubrimiento de Hubble:"

pasos:
  - "Se observa el corrimiento al rojo en galaxias lejanas."
  - "Se concluye que el universo se está expandiendo."
  - "Se comprende que la expansión es una propiedad del espacio y no un alejamiento desde un centro."

explicacion: |
  Primero se detecta el fenómeno (redshift), luego se interpreta como expansión y finalmente se entiende que esto no requiere un centro geométrico.
```

### 21 — Velocidad de alejamiento (Hubble)

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["astronomia", "calculo"]

variables:
  escenario: uno_de([[10, 70], [25, 75], [50, 65]])
  distancia: escenario[0]
  h0: escenario[1]
  velocidad: distancia * h0

respuesta: velocidad
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una galaxia se encuentra a una distancia de {distancia} Mpc. Si la constante de Hubble es H0 = {h0} (km/s)/Mpc, ¿cuál es su velocidad de alejamiento en km/s?"

explicacion: |
  Según la Ley de Hubble: v = H0 * d.
  En este caso: {distancia} * {h0} = {velocidad} km/s.
```

### 22 — ¿Qué es la constante de Hubble?

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "tasa de expansión"
tipo: completar
respuestas_validas:
  - "tasa de expansión"
  - "velocidad de la luz"
  - "masa galáctica"

enunciado: "La constante de Hubble representa la ___ del universo."

explicacion: |
  La constante de Hubble (H0) mide qué tan rápido se expande el universo en relación a la distancia.
```

### 23 — Interpretación de la expansión

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["conceptos", "observacion"]

respuesta: "se aleja"
tipo: mc
opciones_explicitas: ["se acerca", "se aleja", "está estática", "colapsa"]

enunciado: "Si observamos un redshift (desplazamiento al rojo) en una galaxia, según la Ley de Hubble, esto indica que la galaxia ___ de nosotros."

explicacion: |
  El redshift es la prueba observacional de que las galaxias se están alejando, lo cual es la base de la expansión del universo.
```

### 24 — Cálculo de distancia inversa

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["calculo", "inverso"]

variables:
  datos: [[1400, 70], [3000, 70], [4500, 75]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][0]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si una galaxia tiene una velocidad de alejamiento de {datos[idx][1]} km/s y asumimos una constante de Hubble de {datos[idx][1]} (km/s)/Mpc, ¿a qué distancia se encuentra en Mpc?"

pasos:
  - "Identificar la velocidad (v) y la constante (H0)."
  - "Despejar la distancia de la fórmula v = H0 * d, obteniendo d = v / H0."

explicacion: |
  Para hallar la distancia, dividimos la velocidad por la constante de Hubble: {datos[idx][1]} / {datos[idx][1]} = {datos[idx][0]} Mpc.
```

### 25 — Orden de magnitudes de Hubble

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["orden", "conceptos"]

respuesta_orden: ["Observación de Redshift", "Cálculo de Velocidad", "Aplicación de Ley de Hubble"]
tipo: ordenar
opciones_explicitas: ["Observación de Redshift", "Cálculo de Velocidad", "Aplicación de Ley de Hubble"]

enunciado: "Ordena los pasos lógicos para determinar la distancia de una galaxia usando la Ley de Hubble a partir de la observación astronómica."

explicacion: |
  Primero se observa el desplazamiento (redshift), luego se calcula la velocidad a partir de ese desplazamiento y finalmente se usa la Ley de Hubble para hallar la distancia.
```
