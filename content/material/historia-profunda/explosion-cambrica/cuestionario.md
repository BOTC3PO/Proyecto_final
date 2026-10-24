# Historia Profunda — Explosion cambrica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El origen de la diversidad

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["paleontologia", "evolucion"]

respuesta: "541"
tipo: completar
tolerancia_abs: 1

enunciado: "La Explosión Cámbrica ocurrió hace aproximadamente ___ millones de años."

explicacion: |
  La Explosión Cámbrica comenzó hace unos 541 millones de años, marcando el inicio del periodo Cámbrico.
```

### 2 — La aparición de los Phyla

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["taxonomia", "evolucion"]

variables:
  escenario: uno_de([["la mayoría de los grupos corporales", "phyla"], ["la mayor parte de los animales", "phyla"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["phyla", "clases", "especies", "órdenes"]

enunciado: "Durante la Explosión Cámbrica, se produjo la aparición de la mayoría de los grandes grupos animales actuales, conocidos como ___."

explicacion: |
  Se refiere a los phyla (filos), que son las categorías taxonómicas más altas de los animales.
```

### 3 — Duración del fenómeno

```
metadata:
  materia: "historia_profucha"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["tiempo_geologico"]

respuesta: 25
tipo: completar
tolerancia_abs: 5

enunciado: "Aunque fue un evento masivo, la Explosión Cámbrica fue un periodo relativamente breve en términos geológicos, durando aproximadamente ___ millones de años."

pasos:
  - "Identificar el rango de tiempo estimado para la diversificación de los filos."

explicacion: |
  Se estima que este evento de diversificación duró entre 20 y 25 millones de años.
```

### 4 — Fósiles de Ediacara vs Cámbrico

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["paleontologia", "fósiles"]

respuesta: "más complejos"
tipo: mc
opciones_explicitas: ["más complejos", "más simples", "idénticos", "menos diversos"]

enunciado: "En comparación con la biota de Ediacara que precedió al Cámbrico, los organismos de la Explosión Cámbrica eran ___."

explicacion: |
  La biota de Ediacara consistía en organismos de cuerpo blando y morfología menos especializada, mientras que el Cámbrico introdujo estructuras más complejas y con partes duras.
```

### 5 — Secuencia de eventos geológicos

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["cronologia"]

opciones_explicitas: ["Precámbrico", "Cámbrico", "Ordovícico"]
respuesta_orden: ["Precámbrico", "Cámbrico", "Ordovícico"]
tipo: ordenar

enunciado: "Ordena cronológicamente los siguientes periodos/eones, empezando por el más antiguo:"

pasos:
  - "Ubicar el Precámbrico como la era anterior."
  - "Colocar el Cámbrico como el periodo de la explosión."
  - "Ubicar el Ordovícico como el periodo posterior."

explicacion: |
  La cronología correcta es Precámbrico (que incluye el Ediacárico), seguido del Cámbrico y luego el Ordovícico.
```

### 6 — El motor químico de la vida

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["oxigeno", "geologia", "evolucion"]

enunciado: "¿Cuál de las siguientes teorías explica el desarrollo de organismos con metabolismos más complejos durante la explosión cámbrica?"

respuesta: "aumento de oxígeno"
tipo: mc
opciones_explicitas: ["aumento de oxígeno", "cambio en la salinidad", "descarga de metano"]

explicacion: |
  El aumento de la disponibilidad de oxígeno (oxigenación) fue crucial para sostener la alta demanda energética de los nuevos cuerpos complejos.
```

### 7 — El código de la forma

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["genetica", "hox", "desarrollo"]

enunciado: "La aparición de una familia de genes reguladores fundamentales para el plan corporal de los animales se denomina genes ___."

respuesta: "Hox"
respuestas_validas:
  - "Hox"
tipo: completar

explicacion: |
  Los genes Hox controlan el eje anteroposterior del embrión, permitiendo la segmentación y especialización de los cuerpos.
```

### 8 — La carrera armamentista biológica

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["depredacion", "seleccion_natural"]

enunciado: "La aparición de la depredación actuó como una presión evolutiva masiva, obligando a los organismos a desarrollar conchas, esqueletos y sistemas sensoriales."

respuesta: "depredación"
tipo: mc
opciones_explicitas: ["depredación", "simbiósis", "filtración"]

explicacion: |
  La depredación creó un ciclo de retroalimentación: los depredadores necesitaban mejores sentidos y armas, y las presas, mejores defensas.
```

### 9 — Secuencia de factores

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["causas", "causalidad"]

opciones_explicitas: ["Aumento de O2", "Evolución de genes Hox", "Aparición de depredación"]

enunciado: "Ordena los factores que se consideran un modelo de causalidad en cascada para la explosión cámbrica (de la causa ambiental a la consecuencia biológica):"

respuesta_orden: ["Aumento de O2", "Evolución de genes Hox", "Aparición de depredación"]
tipo: ordenar

explicacion: |
  El modelo sugiere que el oxígeno permitió la vida compleja, los genes Hox permitieron la arquitectura corporal, y la depredación impulsó la diversificación rápida.
```

### 10 — El valor del oxígeno

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["oxigeno", "quimica"]

enunciado: "Si el nivel de oxígeno en el océano aumenta, la probabilidad de que surjan organismos de gran tamaño es: ___"

respuesta: "mayor"
respuestas_validas:
  - "mayor"
tipo: completar

explicacion: |
  Los organismos grandes requieren más energía para mantener sus tejidos, la cual se obtiene mediante la respiración aeróbica.
```

### 11 — La fauna de Ediacara

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["ediacara", "precambrico"]

respuesta: "blandos"
tipo: completar
respuestas_validas:
  - "blandos"
  - "blandos"

enunciado: "Antes de la explosión cámbrica, los organismos que componían la fauna de Ediacara eran mayormente de cuerpo ___."

explicacion: |
  La fauna de Ediacara se caracteriza por organismos con estructuras corporales simples y, en su gran mayoría, sin partes endurecidas.
```

### 12 — El gran cambio estructural

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["evolucion", "esqueletos"]

variables:
  escenario: uno_de([["aparición de esqueletos", "estructuras duras"], ["aparición de ojos", "órganos sensoriales"], ["aparición de depredadores", "planes complejos"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["estructuras duras", "órganos sensoriales", "planes complejos"]

enunciado: "Uno de los cambios biológicos más significativos durante la explosión cámbrica fue la aparición de {escenario[0]}."

explicacion: |
  La evolución de partes duras (conchas, esqueletos) y órganos sensoriales complejos como los ojos permitió una nueva dinámica de supervivencia y depredación.
```

### 13 — Secuencia evolutiva

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["secuencia", "evolucion"]

opciones_explicitas: ["Organismos de Ediacara", "Aparición de esqueletos", "Diversificación de planos corporales"]
respuesta_orden: ["Organismos de Ediacara", "Aparición de esqueletos", "Diversificación de planos corporales"]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos biológicos desde el Precámbrico hasta el Cámbrico:"

explicacion: |
  Primero dominaban los organismos de Ediacara; luego, la biomineralización permitió la aparición de esqueletos, lo que finalmente impulsó la diversificación de planos corporales complejos.
```

### 14 — El impacto de la visión

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["sensores", "evolucion"]

respuesta: verdadero
tipo: vf

enunciado: "¿La aparición de ojos y sistemas sensoriales complejos fue una característica distintiva de la explosión cámbrica?"

explicacion: |
  Correcto. La capacidad de detectar movimiento y luz permitió el desarrollo de una red trófica mucho más activa y compleja.
```

### 15 — Comparativa de complejidad

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  datos: [["Ediacara", "simples"], ["Cámbrico", "complejos"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["simples", "complejos"]

enunciado: "Si comparamos la era de Ediacara con la explosión cámbrica, los organismos del Cámbrico eran biológicamente más {datos[idx][0]}."

explicacion: |
  La explosión cámbrica marca el paso de formas de vida mayormente simples a formas con planes corporales altamente especializados.
```

### 16 — El sitio de Burgess Shale

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["geologia", "paleontologia", "canada"]

respuesta: "Canadá"
tipo: completar
respuestas_validas:
  - "Canadá"

enunciado: "El famoso yacimiento de Burgess Shale, que documenta la diversidad de la fauna del Cámbrico, se encuentra ubicado en el país de ___."

explicacion: |
  El yacimiento de Burgess Shale está situado en las Montañas Rocosas de la provincia de Columbia Británica, en Canadá.
```

### 17 — El fenómeno de preservación

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["preservacion", "fofiles"]

variables:
  tipo_preservacion: uno_de(["carbonización", "permineralización", "molde"])

respuesta: "carbonización"
tipo: mc
opciones_explicitas: ["carbonización", "permineralización", "molde"]

enunciado: "La preservación excepcional de los tejidos blandos en Burgess Shale se debe principalmente a un proceso de ___ de la materia orgánica."

explicacion: |
  La formación de películas delgadas de carbono (carbonización) permitió la preservación de estructuras blandas que normalmente no se fosilizan.
```

### 18 — El orden de los eventos

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["cronologia", "eventos"]

opciones_explicitas: ["Explosión de la vida multicelular", "Aparición de los primeros organismos unicelulares", "Extinción masiva del Pérmico", "Aparición de las plantas terrestres"]
respuesta_orden: ["Aparición de los primeros organismos unicelulares", "Explosión de la vida multicelular", "Aparición de las plantas terrestres", "Extinción masiva del Pérmico"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes eventos biológicos/geológicos, desde el más antiguo al más reciente:"

explicacion: |
  La vida comenzó con organismos unicelulares, seguida por la explosión de diversidad del Cámbrico, la colonización de la tierra por plantas y, mucho después, las grandes extinciones masivas.
```

### 19 — El taxón de anomalocaris

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["anomalocaris", "depredador"]

respuesta: verdadero
tipo: vf

enunciado: "Basándonos en la morfología de *Anomalocaris canadensis* hallado en Burgess Shale, se considera que era un depredador de ápice."

explicacion: |
  *Anomalocaris* es uno de los depredadores más conocidos del Cámbrico, con apéndices frontales diseñados para capturar presas.
```

### 20 — El impacto de la diversidad

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["biologia", "evolucion"]

respuesta: "alta"
tipo: completar
respuestas_validas:
  - "alta"

pasos:
  - "Identificar el periodo de la explosión cámbrica."
  - "Determinar el nivel de diversidad biológica observado en Burgess Shale."

enunciado: "La diversidad de filos animales documentada en Burgess Shale durante la explosión cámbrica se caracteriza por ser de una magnitud ___."

explicacion: |
  La explosión cámbrica representó un aumento drástico en la complejidad y diversidad de los cuerpos animales en el registro fósil.
```

### 21 — El inicio de la vida compleja

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["geologia", "paleontologia"]

respuesta: "Paleozoico"
tipo: mc
opciones_explicitas: ["Paleozoico", "Proterozoico", "Mesozoico", "Cenozoico"]

enunciado: "La explosión cámbrica marca el inicio del eón Fanerozoico, específicamente de la era del ___."

explicacion: |
  La explosión cámbrica ocurrió hace unos 541 millones de años, marcando el inicio del eón Fanerozoico y la era Paleozoica.
```

### 22 — Cronología de la vida

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["escala_tiempo", "geologia"]

respuesta: "Ediacárico"
tipo: completar
respuestas_validas:
  - "Ediacárico"
  - "Ediacarano"

enunciado: "Si nos situamos inmediatamente antes de la explosión cámbrica, nos encontramos en el periodo ___."

explicacion: |
  El periodo Ediacárico precede a la explosión cámbrica, la cual da inicio al periodo Cámbrico.
```

### 23 — Secuencia Geológica

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["orden", "escala_tiempo"]

variables:
  secuencia: ["Ediacarano", "Cámbrico", "Ordovícico", "Silúrico"]

respuesta_orden: ["Ediacarano", "Cámbrico", "Ordovícico", "Silúrico"]
tipo: ordenar
opciones_explicitas: ["Ediacarano", "Cámbrico", "Ordovícico", "Silúrico"]

enunciado: "Ordena cronológicamente los siguientes periodos/eras, comenzando desde el más antiguo antes de la explosión cámbrica:"

explicacion: |
  La secuencia correcta es: Ediacarano (Precambriano tardío), Cámbrico (inicio de la explosión), Ordovícico y Silúrico.
```

### 24 — El gran salto evolutivo

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["geologia", "eventos"]

respuesta: "Cambriano"
tipo: mc
opciones_explicitas: ["Cambriano", "Triásico", "Jurásico", "Permiano"]

enunciado: "La diversificación masiva de la vida animal, conocida como la explosión cámbrica, ocurrió hace aproximadamente 541 Ma, dando inicio al periodo ___."

explicacion: |
  La explosión cámbrica es el evento que define el inicio del periodo Cámbrico hace unos 541 millones de años.
```

### 25 — Identificación de Era

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["geologia"]

respuesta: "Cámbrico"
tipo: completar
respuestas_validas:
  - "Cámbrico"

enunciado: "La explosión cámbrica es el evento fundacional del periodo ___."

explicacion: |
  La explosión cámbrica marca el inicio del periodo Cámbrico dentro de la era Paleozoica.
```
