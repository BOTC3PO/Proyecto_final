# Materiales — Fatiga y fractura (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de fatiga

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["fatiga", "esfuerzo_repetitivo"]

respuesta: "fatiga"
tipo: "completar"
respuestas_validas:
  - "fatiga"

enunciado: "El fenómeno por el cual un material se rompe bajo la aplicación de esfuerzos cíclicos o repetitivos, incluso cuando el esfuerzo máximo es inferior al límite de fluencia del material, se denomina ___."

explicacion: |
  La fatiga es un proceso de degradación estructural que ocurre debido a la aplicación de cargas fluctuantes, lo que puede generar microgrietas que se propagan hasta causar la falla catastrófica.
```

### 2 — Componentes de la falla por fatiga

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["mecanismo", "grieta"]

opciones_explicitas: ["Iniciación de grieta", "Propagación de grieta", "Fractura final"]
respuesta: "Iniciación de grieta"
tipo: "mc"

enunciado: "En un proceso de falla por fatiga, ¿cuál es la etapa inicial que ocurre generalmente en la superficie del material debido a concentradores de tensión?"

explicacion: |
  El proceso típico de fatiga comienza con la nucleación o iniciación de una microgrieta, seguida por su propagación gradual y, finalmente, la fractura súbita cuando la sección remanente no puede soportar la carga.
```

### 3 — Verdad o Falso: Esfuerzos estáticos

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["esfuerzo", "estatico"]

respuesta: verdadero
tipo: "vf"

enunciado: "Si un material está sometido a un esfuerzo constante (estático) que es menor a su límite de rotura, el material nunca fallará por fatiga."

explicacion: |
  Correcto. La fatiga requiere de la naturaleza cíclica o fluctuante de la carga. Un esfuerzo constante sin variaciones de amplitud no produce el mecanismo de fatiga.
```

### 4 — Secuencia de la fractura por fatiga

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["secuencia", "falla"]

opciones_explicitas: ["Iniciación", "Propagación", "Fractura catastrófica"]
respuesta_orden: ["Iniciación", "Propagación", "Fractura catastrófica"]
tipo: "ordenar"

enunciado: "Ordene cronológicamente las etapas que ocurren durante la falla de un componente sometido a fatiga:"

explicacion: |
  La secuencia lógica es: primero se nuclea la grieta (iniciación), luego la grieta crece a través del material (propagación) y finalmente la sección restante falla de forma súbita (fractura).
```

### 5 — El límite de fatiga

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["limite_fatiga", "curva_s-n"]

respuesta: "Límite de fatiga"
tipo: "mc"
opciones_explicitas: ["Límite de fatiga", "Límite elástico", "Límite de rotura"]

enunciado: "En materiales como el acero, existe un valor de esfuerzo por debajo del cual el material puede soportar un número infinito de ciclos sin fallar. Este valor se conoce como ___."

pasos:
  - "Identificar el concepto relacionado con la resistencia a ciclos infinitos."

explicacion: |
  El límite de fatiga (o límite de resistencia a la fatiga) es el esfuerzo máximo que un material puede soportar sin presentar falla por fatiga tras un número de ciclos muy elevado.
```

### 6 — El concepto de fatiga

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["conceptos", "fatiga"]

respuesta: verdadero
tipo: vf

enunciado: "La fatiga es un fenómeno donde un material falla bajo cargas cíclicas o repetitivas, incluso si el esfuerzo máximo aplicado es significativamente menor al límite elástico del material."

explicacion: |
  Correcto. La fatiga es una falla progresiva que ocurre cuando un material es sometido a esfuerzos fluctuantes. El daño se acumula en pequeñas grietas que crecen con cada ciclo hasta que la sección remanente no puede soportar la carga.
```

### 7 — El límite de fatiga

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["limite_fatiga", "acero"]

variables:
  escenario_idx: uno_de([0, 1])
  valores: [150, 250]
  valores_texto: ["150 MPa", "250 MPa"]

respuesta: valores_texto[escenario_idx]
tipo: mc
opciones_explicitas: ["100 MPa", "150 MPa", "200 MPa", "250 MPa", "300 MPa"]

enunciado: "En un ensayo de fatiga para un acero específico, se determina que el material puede soportar un número infinito de ciclos si el esfuerzo aplicado se mantiene por debajo del límite de fatiga, que para este caso es de {valores[escenario_idx]} MPa."

explicacion: |
  El límite de fatiga (o límite de resistencia a la fatiga) es el valor de esfuerzo por debajo del cual el material puede resistir ciclos de carga teóricamente infinitos sin fallar por fatiga.
```

### 8 — Etapas de la fractura por fatiga

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["mecanismo", "fractura"]

tipo: ordenar
respuesta_orden: ["Se forma una pequeña fisura en la superficie debido a concentradores de tensión.", "La grieta se extiende a través de la sección transversal.", "El componente se rompe repentinamente cuando la sección remanente es insuficiente."]
opciones_explicitas: ["Se forma una pequeña fisura en la superficie debido a concentradores de tensión.", "La grieta se extiende a través de la sección transversal.", "El componente se rompe repentinamente cuando la sección remanente es insuficiente."]

enunciado: "Ordene cronológicamente las etapas que ocurren durante el proceso de falla por fatiga en un componente mecánico:"

explicacion: |
  El proceso comienza con la nucleación (iniciación) en un punto de alta concentración de esfuerzos, seguido por la propagación lenta de la grieta (donde suelen verse las 'marcas de playa') y termina con la fractura catastrófica cuando la sección resistente es mínima.
```

### 9 — Análisis de la superficie de fractura

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "avanzado"
  tags: ["morfologia", "fractura"]

respuesta: "marcas de playa"
tipo: completar
respuestas_validas:
  - "marcas de playa"
  - "beach marks"

enunciado: "Al examinar la superficie de una fractura por fatiga, es común observar un patrón característico llamado ___ que indica el avance de la grieta."

explicacion: |
  Las 'marcas de playa' (beach marks) son líneas macroscópicas que representan el avance de la frente de la grieta durante periodos de carga. Son la evidencia clásica de una falla por fatiga.
```

### 10 — Cálculo de esfuerzos de tensión

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "avanzado"
  tags: ["calculo", "esfuerzo"]

variables:
  caso_idx: uno_de([0, 1])
  cargas: [5000, 10000]
  areas: [250, 500]
  carga: cargas[caso_idx]
  area: areas[caso_idx]
  esfuerzo_calc: carga / area

respuesta: esfuerzo_calc
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un perno sufre una carga cíclica de {carga} N. Si el área de la sección transversal del perno es de {area} mm², ¿cuál es el esfuerzo de tensión (σ) aplicado en cada ciclo? (Expresado en MPa)"

pasos:
  - "Identificar la carga aplicada (F = {carga} N)."
  - "Identificar el área de la sección (A = {area} mm²)."
  - "Calcular el esfuerzo usando la fórmula σ = F / A."

explicacion: |
  El esfuerzo se calcula como σ = F / A.
  Para este caso: {carga} / {area} = {esfuerzo_calc} MPa.
```

### 11 — El límite de fatiga

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["fatiga", "esfuerzo", "resistencia"]

respuesta: verdadero
tipo: vf

enunciado: "Un material sometido a ciclos de carga repetitivos puede fallar por fatiga incluso si el esfuerzo máximo aplicado es significativamente menor que su límite elástico."

explicacion: |
  La fatiga es un fenómeno de degradación progresiva. Las microfisuras se propagan con cada ciclo de carga, reduciendo la sección efectiva del material hasta que la fractura ocurre, incluso bajo cargas que no causarían deformación plástica en una sola aplicación.
```

### 12 — El efecto de la superficie

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "avanzado"
  tags: ["superficie", "fisuras", "acabado"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["rugoso", "menor"], ["pulido", "mayor"]]

respuesta: datos[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual", "nulo"]

enunciado: "Considerando el estado de la superficie de una pieza, un acabado {datos[escenario_idx][0]} tiende a resultar en una vida a la fatiga {datos[escenario_idx][1]} que un acabado pulido."

explicacion: |
  Las irregularidades superficiales (rugosidad) actúan como concentradores de esfuerzos (notch effect), facilitando la nucleación de grietas de fatiga. Un acabado pulido retarda este proceso.
```

### 13 — Etapas de la fractura por fatiga

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["mecanismo", "fractura", "secuencia"]

tipo: ordenar
opciones_explicitas: ["Nucleación de grieta", "Propagación de la grieta", "Fractura súbita"]
respuesta_orden: ["Nucleación de grieta", "Propagación de la grieta", "Fractura súbita"]

enunciado: "Ordene cronológicamente las etapas que ocurren durante el fallo de un componente por fatiga mecánica."

explicacion: |
  El proceso comienza con la nucleación de una microgrieta (generalmente en la superficie), seguida por la propagación de la grieta a través de la sección transversal, y finaliza con una fractura súbita cuando la sección restante ya no puede soportar la carga.
```

### 14 — Relación carga-vida (Curva S-N)

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["curva_sn", "esfuerzo", "ciclos"]

respuesta: "inversamente"
tipo: "completar"
respuestas_validas:
  - "inversamente"

enunciado: "En una curva de Wöhler (S-N), la relación entre el esfuerzo de la carga aplicada y el número de ciclos hasta la falla es de tipo ___."

explicacion: |
  La curva S-N muestra que a medida que el nivel de esfuerzo (S) disminuye, el número de ciclos hasta la falla (N) aumenta. Es una relación inversa.
```

### 15 — Fractura Dúctil vs Frágil

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["fractura", "deformacion", "superficie"]

respuesta: "frágil"
tipo: "mc"
opciones_explicitas: ["dúctil", "frágil", "elástica", "plástica"]

enunciado: "La fractura por fatiga suele presentar una superficie de fractura que, en su fase de propagación, muestra marcas de playa (beach marks), lo cual es característico de un comportamiento de tipo ___."

explicacion: |
  Aunque el material original sea dúctil, la fractura por fatiga se comporta de manera predominantemente frágil (poca deformación macroscópica antes de la rotura) debido a la propagación localizada de la grieta.
```

### 16 — Fatiga vs. Deformación Plástica

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["fatiga", "esfuerzo", "fractura"]

respuesta: "fractura_frágil"
tipo: completar
respuestas_validas:
  - "fractura_frágil"
  - "fractura_dúctil"

enunciado: "A diferencia de la deformación plástica, donde el material sufre una deformación permanente visible antes de romperse, la fatiga suele conducir a una ___ que puede ocurrir sin deformación macroscópica previa."

explicacion: |
  La fatiga es un proceso de degradación progresiva que genera microgrietas. A menudo, el material falla de forma repentina (fractura frágil) sin mostrar el estiramiento o la deformación plástica característica de los materiales dúctiles bajo cargas estáticas.
```

### 17 — Criterio de falla por fatiga

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "avanzado"
  tags: ["limite_fatiga", "esfuerzo"]

respuesta: falso
tipo: vf
enunciado: "Si un material está sometido a un esfuerzo cíclico cuyo valor máximo es inferior al límite de fatiga del material, ¿se producirá la falla por fatiga tras un número infinito de ciclos? (Asumiendo un material con límite de fatiga definido)"

explicacion: |
  Por definición, el límite de fatiga es el nivel de esfuerzo por debajo del cual un material puede soportar un número infinito de ciclos de carga sin fallar por fatiga.
```

### 18 — Morfología de la superficie de fractura

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["fractografia", "superficie"]

respuesta: "Marcas de playa"
tipo: mc
opciones_explicitas: ["Marcas de playa", "Rugosidad granular", "Estriaciones de deslizamiento", "Rugosidad de copa y cono"]

enunciado: "En un análisis fractográfico, ¿qué característica visual distingue una superficie de fractura por fatiga de una fractura por impacto estático?"

explicacion: |
  Las 'marcas de playa' (beach marks) son líneas concéntricas que indican la progresión de la grieta de fatiga a través de la sección transversal, permitiendo identificar el origen de la falla.
```

### 19 — Etapas de la propagación de grieta

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["propagacion", "grieta"]

respuesta_orden: ["Iniciación", "Propagación", "Fractura inminente"]
tipo: ordenar
opciones_explicitas: ["Iniciación", "Propagación", "Fractura inminente"]

enunciado: "Ordene cronológicamente las etapas que ocurren durante el proceso de falla por fatiga en un componente mecánico:"

explicacion: |
  El proceso comienza con la nucleación de una microgrieta (iniciación), seguida del crecimiento de la grieta bajo cargas cíclicas (propagación) y finaliza con la rotura súbita de la sección remanente (fractura inminente).
```

### 20 — Influencia del acabado superficial

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["acabado", "rugosidad"]

respuesta: falso
tipo: vf
enunciado: "Un acabado superficial rugoso o con muescas actúa como un concentrador de esfuerzos, lo que aumenta la resistencia a la fatiga del material en comparación con una superficie pulida."

explicacion: |
  La rugosidad superficial crea micro-entalladuras que actúan como concentradores de tensión, facilitando la iniciación de grietas y, por lo tanto, reduciendo la vida útil a la fatiga.
```

### 21 — Límite de fatiga en un eje

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["fatiga", "resistencia"]

variables:
  escenario: uno_de([[120, "120 MPa"], [150, "150 MPa"], [180, "180 MPa"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["120 MPa", "150 MPa", "180 MPa", "200 MPa"]

enunciado: "Un componente de acero está sometido a un ciclo de carga alternante. Si el límite de fatiga del material es de {escenario[0]} MPa, ¿cuál es el valor máximo de esfuerzo que puede soportar indefinidamente sin fallar por fatiga?"

explicacion: |
  El límite de fatiga es el valor de esfuerzo por debajo del cual un material puede soportar ciclos de carga infinitos sin que se inicie una fractura por fatiga.
```

### 22 — Mecanismo de propagación de grietas

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["fractura", "grieta"]

respuesta: "propagación"
tipo: completar
respuestas_validas:
  - "propagación"

enunciado: "En un proceso de fatiga, una vez que se ha formado una microgrieta en la superficie, la etapa siguiente es la de ___ de la grieta hacia el interior del material."

explicacion: |
  La fatiga ocurre en tres etapas: 1) Iniciación de la grieta, 2) Propagación de la grieta (donde se observa la estriación) y 3) Fractura catastrófica final.
```

### 23 — Relación entre esfuerzos y vida útil

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "avanzado"
  tags: ["curva_s_n", "fatiga"]

respuestas_validas:
  - "baja"
respuesta: "baja"
tipo: completar
enunciado: "Si aumentamos la amplitud del esfuerzo aplicado en un componente, la vida útil a la fatiga (número de ciclos hasta la rotura) será: ___."

explicacion: |
  Existe una relación inversa entre la amplitud del esfuerzo y la vida útil: a mayor esfuerzo, menor es el número de ciclos que el material puede resistir antes de fallar.
```

### 24 — Secuencia de falla por fatiga

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["secuencia", "fractura"]

respuesta_orden: ["iniciación", "propagación", "fractura final"]
tipo: ordenar
opciones_explicitas: ["iniciación", "propagación", "fractura final"]

enunciado: "Ordene cronológicamente las etapas de un proceso de falla por fatiga en un material dúctil:"

explicacion: |
  El proceso comienza con la iniciación de una grieta (usualmente en superficie), continúa con la propagación de la misma mediante estriaciones y termina con una fractura rápida cuando la sección remanente es insuficiente.
```

### 25 — Superficie de fractura por fatiga

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["morfología", "fractura"]

variables:
  tipo_falla: uno_de([[1, "rugosa"], [3, "frágil"]])

respuesta: tipo_falla[1]
tipo: mc
opciones_explicitas: ["rugosa", "dúctil", "frágil"]

enunciado: "La superficie de una fractura por fatiga se caracteriza visualmente por ser de apariencia {tipo_falla[1]} debido a la progresión de la grieta, a diferencia de una fractura súbita."

explicacion: |
  Las fracturas por fatiga suelen presentar una zona de progresión con apariencia rugosa o con marcas de estriaciones, mientras que las fracturas frágiles suelen ser granulares o brillantes.
```
