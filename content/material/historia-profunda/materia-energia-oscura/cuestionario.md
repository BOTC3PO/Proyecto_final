# Historia Profunda — Materia energia oscura (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — La naturaleza de la materia oscura

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["materia_oscura", "luz", "gravedad"]

respuesta: "invisible"
tipo: completar
respuestas_validas:
  - "invisible"

enunciado: "Debido a que la materia oscura no emite, refleja ni absorbe radiación electromagnética, su naturaleza es ___________ para nuestros instrumentos ópticos tradicionales."

explicacion: |
  La materia oscura es invisible al espectro electromagnético (luz, radio, rayos X, etc.), lo que impide su detección directa mediante telescopios convencionales.
```

### 2 — Evidencia gravitacional

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["galaxias", "rotación", "gravedad"]

respuesta: "La velocidad de rotación se mantiene constante o aumenta en la periferia"
tipo: mc
opciones_explicitas: ["La velocidad de rotación disminuye conforme nos alejamos del centro", "La velocidad de rotación se mantiene constante o aumenta en la periferia", "Las galaxias colapsarían por falta de masa", "La gravedad es nula en los bordes de la galaxia"]

enunciado: "Al observar las curvas de rotación de las galaxias espirales, se detecta que las estrellas en la periferia se mueven a una velocidad que contradice la masa visible. ¿Cuál es la observación real?"

explicacion: |
  Si solo existiera la materia visible, las estrellas externas deberían girar más lento. El hecho de que mantengan velocidades altas sugiere la presencia de una masa adicional (materia oscura) que proporciona la gravedad necesaria.
```

### 3 — El efecto gravitacional

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["gravedad", "masa"]

respuesta: "gravitacionales"
tipo: completar
respuestas_validas:
  - "gravitacionales"

enunciado: "Dado que no podemos ver la materia oscura, su existencia se infiere únicamente a través de sus efectos ___________ sobre la materia bariónica (visible)."

explicacion: |
  La materia oscura interactúa principalmente a través de la gravedad, alterando el movimiento de las estrellas y la luz (lentes gravitacionales).
```

### 4 — Componentes del universo

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["composición", "universo"]

respuesta: "Materia oscura"
tipo: mc
opciones_explicitas: ["Materia bariónica", "Materia oscura", "Energía oscura", "Radiación de fondo"]

enunciado: "La masa adicional necesaria para explicar la cohesión de los cúmulos de galaxias y las curvas de rotación galáctica se conoce como ___________."

explicacion: |
  La materia oscura constituye aproximadamente el 27% del universo, mientras que la materia ordinaria (bariónica) es solo un 5%.
```

### 5 — Deducción científica

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["metodología", "evidencia"]

respuesta: "masa_visible"
tipo: completar
respuestas_validas:
  - "masa_visible"

enunciado: "La discrepancia observada entre la velocidad de rotación galáctica y la cantidad de ___ es la principal prueba de la existencia de la materia oscura."

explicacion: |
  La falta de masa visible suficiente para explicar la velocidad de las galaxias es la evidencia fundamental que llevó a la hipótesis de la materia oscura.
```

### 6 — El motor de la expansión

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["cosmologia", "expansion_universo"]

tipo: mc
opciones_explicitas: ["Materia oscura", "Energía oscura", "Materia bariónica", "Radiación cósmica"]
respuesta: "Energía oscura"

enunciado: "A finales de la década de 1990, se descubrió que el universo no solo se expande, sino que lo hace de forma acelerada. El fenómeno responsable de esta aceleración es la ________."

explicacion: |
  La energía oscura es una forma de energía que permea todo el espacio y actúa como una fuerza repulsiva que acelera la expansión del universo, diferenciándose de la materia oscura que actúa principalmente mediante la gravedad.
```

### 7 — El gran descubrimiento

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["hitos", "astronomia"]

variables:
  idx: uno_de([0, 1])
  escenario: [[1998, "el descubrimiento de la expansión acelerada"], [2011, "el otorgamiento del Premio Nobel de Física por dicho descubrimiento"]]

tipo: completar
respuestas_validas:
  - "1998"
  - "2011"

enunciado: "La evidencia observacional que cambió la cosmología moderna y señaló la existencia de la energía oscura fue publicada en el año {escenario[idx][0]}, marcando {escenario[idx][1]}."

explicacion: |
  En 1998, las observaciones de supernovas lejanas demostraron que la expansión del universo se está acelerando, lo que llevó a la inclusión de la energía oscura en el modelo estándar de la cosmología.
```

### 8 — Diferencias fundamentales

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["materia_oscura", "energia_oscura"]

tipo: mc
opciones_explicitas: ["Atrae la materia mediante gravedad", "Repele el espacio mediante presión negativa", "Es visible mediante espectroscopia", "Es una partícula subatómica conocida"]
respuesta: "Repele el espacio mediante presión negativa"

enunciado: "Mientras que la materia oscura ejerce una atracción gravitatoria que ayuda a la formación de estructuras, la energía oscura se caracteriza por su capacidad de ________."

explicacion: |
  La energía oscura posee una presión negativa que contrarresta la gravedad a escalas cosmogónicas, provocando que la expansión del universo sea acelerada en lugar de frenarse.
```

### 9 — El destino del cosmos

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["teoria", "futuro_universo"]

tipo: mc
opciones_explicitas: ["Big Crunch", "Big Freeze", "Big Bounce", "Punto de equilibrio"]
respuesta: "Big Freeze"

enunciado: "Si la energía oscura continúa dominando la expansión del universo de manera constante, el escenario más probable para el destino final del cosmos es el ________."

explicacion: |
  El 'Big Freeze' (Gran Congelamiento) ocurre cuando la expansión es tan rápida que las galaxias se alejan tanto que el universo se enfría hasta alcanzar un estado de entropía máxima donde no puede haber más procesos físicos.
```

### 10 — Orden cronológico de la cosmología moderna

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["cronologia", "hitos"]

tipo: ordenar
opciones_explicitas: ["Modelo de materia oscura fría", "Descubrimiento de la expansión acelerada", "Aceptación del modelo Lambda-CDM"]

respuesta_orden: ["Modelo de materia oscura fría", "Descubrimiento de la expansión acelerada", "Aceptación del modelo Lambda-CDM"]

enunciado: "Ordena cronológicamente estos hitos que permitieron consolidar la visión actual del universo dominado por componentes oscuros:"

explicacion: |
  Primero se postuló la existencia de la materia oscura para explicar la rotación galáctica; en 1998 se descubrió la aceleración (energía oscura); finalmente, esto llevó a la adopción del modelo Lambda-CDM (materia oscura fría + constante cosmológica/energía oscura).
```

### 11 — Composición del Universo

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["cosmologia", "composicion"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["5%", "materia ordinaria"], ["27%", "materia oscura"], ["68%", "energía oscura"]]

opciones_explicitas: ["5%", "27%", "68%"]
respuesta: datos[idx][0]
tipo: mc

enunciado: "Según el modelo estándar de la cosmología, la fracción del universo compuesta por {datos[idx][1]} es aproximadamente del ___."

explicacion: |
  La composición estimada del universo es: 5% materia ordinaria, 27% materia oscura y 68% energía oscura.
```

### 12 — El componente dominante

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["energia_oscura"]

respuesta: "energía oscura"
tipo: completar
respuestas_validas:
  - "energía oscura"

enunciado: "El componente que constituye aproximadamente el 68% del universo y es responsable de la expansión acelerada se denomina ___."

explicacion: |
  La energía oscura es el componente dominante del universo, representando cerca del 68% de su densidad total.
```

### 13 — Orden de magnitudes

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["orden", "densidad"]

opciones_explicitas: ["Materia ordinaria", "Materia oscura", "Energía oscura"]
respuesta_orden: ["Materia ordinaria", "Materia oscura", "Energía oscura"]
tipo: ordenar

enunciado: "Ordena los componentes del universo de menor a mayor abundancia (porcentaje de densidad):"

explicacion: |
  El orden correcto de menor a mayor es: Materia ordinaria (5%), Materia oscura (27%) y Energía oscura (68%).
```

### 14 — Cálculo de densidad total

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["calculo", "porcentajes"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [["5", "materia ordinaria"], ["27", "materia oscura"], ["68", "energía oscura"]]

respuesta: escenario[idx][0]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si el universo tiene una densidad total de 100 unidades, ¿cuántas unidades corresponden a la {escenario[idx][1]}?"

pasos:
  - "Identificar el porcentaje correspondiente al componente mencionado."
  - "Multiplicar el porcentaje por la densidad total (100)."

explicacion: |
  El valor corresponde al porcentaje asignado a la {escenario[idx][1]} en el modelo cosmológico actual.
```

### 15 — Verdad o Falso: Materia vs Energía

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["conceptos"]

variables:
  caso: [["verdadero", "La energía oscura es el componente más abundante."], ["falso", "La materia oscura es el componente más abundante."]]
  seleccionada: uno_de(caso)

respuesta: seleccionada[0]
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Analiza la siguiente afirmación: {seleccionada[1]}. ¿Es correcta?"

explicacion: |
  La afirmación es {seleccionada[1]}. La materia ordinaria solo representa el 5%, mientras que la energía oscura es la mayoritaria con un 68%.
```

### 16 — El enigma de la composición cósmica

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["cosmologia", "misterio"]

respuesta: "materia_oscura"
tipo: mc
opciones_explicitas: ["materia_oscura", "energia_oscura", "materia_bariónica", "radiación_cósmica"]

enunciado: "Aunque no podemos verla directamente, sabemos que existe la ___ debido a su influencia gravitatoria en las galaxias."

explicacion: |
  La materia oscura no emite, absorbe ni refleja luz, lo que la hace invisible, pero su gravedad es fundamental para mantener unidas a las galaxias.
```

### 17 — El destino del universo

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["expansion", "energia_oscura"]

respuesta: "Big Freeze"
tipo: mc
opciones_explicitas: ["Big Crunch", "Big Freeze", "Big Rip", "Big Bounce"]

enunciado: "Si la energía oscura domina y acelera la expansión del universo de manera constante e indefinida, el destino más probable del universo es el ___."

explicacion: |
  La energía oscura actúa como una fuerza repulsiva que acelera la expansión del universo. Dependiendo de su densidad, el universo podría terminar en un enfriamiento eterno (Big Freeze) o un desgarro final (Big Rip).
```

### 18 — Efectos gravitatorios

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["gravedad", "evidencia"]

respuesta: 5
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si la materia visible representa aproximadamente el 5% del universo, y la materia oscura el 27%, ¿qué porcentaje aproximado del universo corresponde a la energía oscura?"

pasos:
  - "Sumar el porcentaje de materia visible y materia oscura: 5 + 27 = 32"
  - "Restar ese total al 100% del universo: 100 - 32 = 68"

explicacion: |
  Según el modelo estándar de cosmología (Lambda-CDM), la energía oscura constituye aproximadamente el 68% del contenido energético-material del universo.
```

### 19 — Conceptos fundamentales

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["terminologia"]

respuesta_orden: ["materia_oscura", "energia_oscura", "materia_visible"]
tipo: ordenar
opciones_explicitas: ["materia_oscura", "energia_oscura", "materia_visible"]

enunciado: "Ordena estos componentes del universo de mayor a menor abundancia (según el modelo actual):"

explicacion: |
  El orden correcto de abundancia es: Energía Oscura (~68%), Materia Oscura (~27%) y Materia Visible (~5%).
```

### 20 — Identidad desconocida

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["fisica_particulas"]

respuesta: "es_desconocida"
tipo: completar
respuestas_validas:
  - "es_desconocida"
  - "es_desconocida"

enunciado: "A pesar de las décadas de investigación, la naturaleza exacta de la energía oscura ___."

explicacion: |
  Aunque detectamos su efecto en la expansión acelerada del cosmos, la identidad de la partícula o campo que la compone sigue siendo uno de los mayores misterios de la ciencia.
```

### 21 — Evidencia de la Materia Oscura

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["astronomia", "materia_oscura"]

variables:
  datos: [["curvas_rotacion", "materia_oscura"], ["expansion_acelerada", "energia_oscura"], ["lentes_gravitacionales", "materia_oscura"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["materia_oscura", "energia_oscura"]

enunciado: "Se observa que las galaxias rotan mucho más rápido de lo que la masa visible permitiría, sugiriendo la presencia de una masa no visible. Este fenómeno de {datos[idx][0]} es una evidencia de:"

explicacion: |
  La materia oscura proporciona la masa extra necesaria para explicar las velocidades orbitales de las estrellas en las galaxias y la distorsión de la luz por lente gravitacional.
```

### 22 — El destino del Universo

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["cosmologia", "energia_oscura"]

variables:
  datos: [["aceleracion_expansion", "energia_oscura"], ["colapso_gravitacional", "materia_oscura"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["materia_oscura", "energia_oscura"]

enunciado: "La observación de supernovas tipo Ia indica que la expansión del universo se está acelerando. Este efecto de {datos[idx][0]} es causado por la:"

explicacion: |
  La energía oscura actúa como una presión negativa que contrarresta la gravedad a escalas cosmológicas, impulsando la expansión acelerada del espacio.
```

### 23 — Densidad y Estructura

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["cosmologia", "estructura_cosmica"]

respuesta: "energia_oscura"
tipo: completar
respuestas_validas:
  - "energia_oscura"

enunciado: "Mientras que la materia oscura ayuda a la formación de galaxias mediante su atracción gravitatoria, la responsable de la repulsión espacial que separa los cúmulos de galaxias es la ___."

explicacion: |
  La materia oscura es atractiva (favorece la agrupación de materia), mientras que la energía oscura es repulsiva (favorece la expansión).
```

### 24 — El Efecto Lente

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["lentes_gravitacionales", "materia_oscura"]

variables:
  datos: [["distorsion_luz", "materia_oscura"], ["expansión_lineal", "energia_oscura"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["materia_oscura", "energia_oscura"]

enunciado: "La detección de la {datos[idx][0]} en cúmulos de galaxias permite mapear la distribución de la:"

explicacion: |
  La luz se curva al pasar cerca de grandes masas. Como la masa observada no es suficiente para causar la curvatura detectada, se infiere la presencia de materia oscura.
```

### 25 — Componentes del Modelo Lambda-CDM

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["modelo_estandar", "cosmologia"]

respuesta: "materia_oscura"
tipo: completar
respuestas_validas:
  - "materia_oscura"

enunciado: "En el modelo estándar de cosmología, la energía oscura es la fuerza que domina la expansión, mientras que la ___ es la componente que permite la formación de estructuras a gran escala."

explicacion: |
  Es un error conceptual común: la energía oscura domina la expansión (dinámica global), la materia oscura domina la formación de estructuras (dinámica local/regional).
```
