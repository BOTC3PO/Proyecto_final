# Química — Modelos atómicos: Dalton, Thomson, Rutherford, Bohr (cuestionario, 21 preguntas VBLang)

> Tema: `QCMa→QCMb→QCMc→QCMd→QCM`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Evolución de los modelos atómicos

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["historia", "atomos"]

respuesta_orden: ["Dalton", "Thomson", "Rutherford", "Bohr"]
tipo: ordenar
opciones_explicitas: ["Dalton", "Thomson", "Rutherford", "Bohr"]

enunciado: "Ordena cronológicamente los siguientes modelos atómicos, desde el más antiguo al más reciente."

explicacion: |
  El orden correcto es: Dalton (1803), Thomson (1897), Rutherford (1911) y Bohr (1913).
```

### 2 — Nombre de cada modelo

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["thomson", "electron"]

variables:
  escenarios: [["Dalton", "esfera maciza"], ["Thomson", "budín de pasas"], ["Rutherford", "núcleo denso"], ["Bohr", "órbitas de energía fija"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["esfera maciza", "budín de pasas", "núcleo denso", "órbitas de energía fija"]

enunciado: "Si el científico es {escenarios[idx][0]}, ¿cuál es el nombre o descripción de su modelo atómico?"

explicacion: |
  El modelo de {escenarios[idx][0]} se conoce como {escenarios[idx][1]}.
```

### 3 — La naturaleza del átomo de Dalton

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["dalton", "electron"]

respuesta: falso
tipo: vf

enunciado: "¿El modelo atómico de Dalton ya incluía al electrón como partícula subatómica?"

explicacion: |
  Falso. Dalton consideraba el átomo como una esfera maciza e indivisible; fue Thomson quien descubrió el electrón varias décadas después.
```

### 4 — El experimento de Rutherford

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "intermedio"
  tags: ["rutherford", "nucleo"]

variables:
  metal: "oro"

respuesta: metal
tipo: completar
respuestas_validas:
  - metal

enunciado: "El experimento que llevó a Rutherford a proponer un núcleo denso y positivo consistió en bombardear con partículas alfa una fina lámina de ___."

explicacion: |
  Rutherford usó una lámina de oro para observar la dispersión de partículas alfa, lo que reveló la existencia de un núcleo central pequeño y denso.
```

### 5 — El descubrimiento del electrón

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["atomos", "electron", "thomson"]

respuesta: "Thomson"
tipo: mc
opciones_explicitas: ["Dalton", "Thomson", "Rutherford", "Bohr"]

enunciado: "¿Qué científico descubrió el electrón mediante experimentos con tubos de rayos catódicos?"

explicacion: |
  J.J. Thomson descubrió el electrón en 1897, demostrando que el átomo no era una esfera indivisible como proponía Dalton, sino que contenía partículas subatómicas con carga negativa.
```

### 6 — La estructura de Rutherford

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["rutherford", "nucleo", "espacio_vacio"]

respuesta: verdadero
tipo: vf

enunciado: "En el modelo atómico de Rutherford, el átomo está compuesto mayoritariamente por espacio vacío, con un núcleo pequeño y denso en el centro."

explicacion: |
  El experimento de la lámina de oro demostró que la masa del átomo está concentrada en un núcleo central, dejando grandes zonas de vacío donde están los electrones.
```

### 7 — La limitación de Rutherford

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "intermedio"
  tags: ["rutherford", "bohr", "electromagnetismo"]

respuesta: "El electrón debería emitir radiación continua y caer en espiral hacia el núcleo"
tipo: mc
opciones_explicitas: ["El electrón debería emitir radiación continua y caer en espiral hacia el núcleo", "El átomo era demasiado grande para ser estable", "No explicaba la existencia de los neutrones", "Los electrones no tenían carga eléctrica"]

enunciado: "¿Cuál era el principal problema del modelo de Rutherford que el modelo de Bohr buscaba resolver?"

explicacion: |
  Según la física clásica, una carga eléctrica en movimiento circular debería emitir radiación electromagnética, perder energía y colapsar contra el núcleo. Bohr resolvió esto con órbitas estacionarias.
```

### 8 — Órbitas de Bohr

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "intermedio"
  tags: ["bohr", "niveles_de_energia"]

variables:
  descriptor: "fijos y permitidos"

respuesta: descriptor
tipo: completar
respuestas_validas:
  - descriptor

enunciado: "En el modelo de Bohr, los electrones giran en niveles de energía ___ (no en cualquier órbita)."

explicacion: |
  Bohr propuso que los electrones sólo pueden ocupar ciertas órbitas con energías cuantizadas, evitando así el colapso del átomo.
```

### 9 — El modelo de Thomson

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["thomson", "electron"]

respuesta: "Electrones"
tipo: mc
opciones_explicitas: ["Protones", "Electrones", "Neutrones", "El núcleo"]

enunciado: "En el modelo atómico de Thomson, comparado con un budín de pasas, ¿qué representan las pasas?"

explicacion: |
  Thomson propuso que el átomo era una esfera de carga positiva con electrones incrustados (las pasas), lo que explicaba la neutralidad eléctrica.
```

### 10 — El modelo de Dalton

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["dalton", "teoria_atomica"]

respuesta: falso
tipo: vf

enunciado: "El modelo de Dalton describía al átomo como una esfera con una estructura interna compleja."

explicacion: |
  Dalton consideraba al átomo como una esfera indivisible, sólida e inmutable, sin estructura interna conocida.
```

### 11 — Qué explicó cada modelo por primera vez

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "intermedio"
  tags: ["historia_atomica", "modelos"]

variables:
  escenarios: [["Thomson", "la existencia del electrón"], ["Rutherford", "que la carga positiva está concentrada en un núcleo"], ["Bohr", "por qué los átomos emiten luz en colores específicos"]]
  idx: uno_de([0, 1, 2])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["la existencia del electrón", "que la carga positiva está concentrada en un núcleo", "por qué los átomos emiten luz en colores específicos"]

enunciado: "Considera el modelo de {escenarios[idx][0]}. ¿Qué explicó este modelo por primera vez?"

explicacion: |
  Cada modelo histórico aportó un avance fundamental: Thomson descubrió el electrón, Rutherford el núcleo y Bohr los niveles de energía.
```

### 12 — El modelo cuántico actual

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "intermedio"
  tags: ["cuantica", "orbitales"]

respuesta: verdadero
tipo: vf

enunciado: "El modelo actual (cuántico) reemplaza las órbitas fijas de Bohr por orbitales, zonas de probabilidad de hallar un electrón."

explicacion: |
  A diferencia del modelo de Bohr, donde los electrones siguen trayectorias circulares definidas, el modelo cuántico describe la probabilidad de posición mediante orbitales.
```

### 13 — Limitación de cada modelo

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "intermedio"
  tags: ["atomos", "teoria_atomica"]

variables:
  escenarios: [["Dalton", "no consideraba la existencia de partículas subatómicas"], ["Thomson", "no ubicaba correctamente la carga positiva del átomo"], ["Rutherford", "no explicaba por qué los electrones no colapsaban con el núcleo"], ["Bohr", "sus órbitas definidas no son compatibles con la mecánica cuántica"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["no consideraba la existencia de partículas subatómicas", "no ubicaba correctamente la carga positiva del átomo", "no explicaba por qué los electrones no colapsaban con el núcleo", "sus órbitas definidas no son compatibles con la mecánica cuántica"]

enunciado: "Considerando el modelo atómico de {escenarios[idx][0]}, ¿cuál era su principal limitación?"

explicacion: |
  El modelo de {escenarios[idx][0]} fue superado porque {escenarios[idx][1]}.
```

### 14 — El modelo de Rutherford (completar)

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["rutherford", "nucleo_atomico"]

respuesta: "Rutherford"
tipo: completar
respuestas_validas:
  - "Rutherford"

enunciado: "El átomo con carga positiva concentrada en un punto pequeño y denso, con electrones lejos girando alrededor, es el modelo de ___."

explicacion: |
  El modelo de Rutherford introdujo la idea de un núcleo central pequeño y denso, rompiendo con el "budín de pasas" de Thomson.
```

### 15 — Ciencia como proceso, no como error corregido

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["historia_quimica", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "Cada modelo atómico fue reemplazado porque el anterior estaba completamente equivocado, no porque resolviera un problema nuevo con evidencia nueva."

explicacion: |
  Falso. Cada modelo resolvió el problema que dejaba el anterior con evidencia experimental nueva (el electrón, el núcleo, los espectros de luz) — no fue descartado por estar "mal", sino superado.
```

### 16 — Cronología de científicos

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["cientificos", "historia"]

respuesta: "Mendeleiev"
tipo: mc
opciones_explicitas: ["Dalton", "Thomson", "Rutherford", "Bohr", "Mendeleiev"]

enunciado: "De la siguiente lista de científicos, ¿cuál NO propuso un modelo atómico dentro de la secuencia histórica Dalton→Thomson→Rutherford→Bohr?"

explicacion: |
  Mendeléyev es conocido por la Tabla Periódica, no por uno de los cuatro modelos atómicos de esta secuencia.
```

### 17 — Espectros de emisión

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "intermedio"
  tags: ["bohr", "espectros"]

respuesta: verdadero
tipo: vf

enunciado: "El modelo de Bohr explica por qué los átomos excitados emiten luz en colores (longitudes de onda) específicos, y no en cualquier color."

explicacion: |
  Como los electrones sólo pueden saltar entre niveles de energía fijos, cada salto emite un fotón de energía exacta, que corresponde a un color específico.
```

### 18 — El apodo del modelo de Thomson

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["thomson", "apodo"]

respuesta: "budín de pasas"
tipo: completar
respuestas_validas:
  - "budín de pasas"
  - "budin de pasas"

enunciado: "El modelo atómico de Thomson es conocido popularmente como el modelo del ___."

explicacion: |
  Se lo llama así porque describe al átomo como una esfera de carga positiva (el budín) con los electrones incrustados (las pasas).
```

### 19 — La forma del átomo de Dalton

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["dalton", "esfera_maciza"]

respuesta: "Una esfera maciza e indivisible, sin estructura interna"
tipo: mc
opciones_explicitas: ["Una esfera maciza e indivisible, sin estructura interna", "Una esfera con electrones incrustados", "Un núcleo denso con electrones orbitando lejos", "Un núcleo con electrones en niveles de energía fijos"]

enunciado: "¿Cómo describía Dalton al átomo?"

explicacion: |
  Dalton, el primer modelo atómico moderno (1803), lo describía como una bolita maciza, indivisible e indestructible, sin partículas subatómicas.
```

### 20 — Quién descubrió el electrón

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["rutherford", "thomson", "electron"]

respuesta: falso
tipo: vf

enunciado: "Rutherford fue quien descubrió el electrón con el tubo de rayos catódicos."

explicacion: |
  Falso. El electrón fue descubierto por Thomson (1897); Rutherford llegó después (1911) y descubrió el núcleo atómico con el experimento de la lámina de oro.
```

### 21 — Del modelo de Bohr al modelo actual

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "avanzado"
  tags: ["bohr", "cuantica", "orbitales"]

respuesta: "los niveles de energía cuantizados"
tipo: mc
opciones_explicitas: ["los niveles de energía cuantizados", "las órbitas circulares definidas", "el electrón como partícula maciza", "la carga positiva repartida en todo el volumen"]

enunciado: "¿Qué idea de Bohr SÍ conserva el modelo cuántico actual, a pesar de reemplazar sus órbitas fijas por orbitales?"

explicacion: |
  El modelo actual descarta la trayectoria fija de Bohr, pero conserva su idea central: la energía del electrón está cuantizada, no puede tomar cualquier valor.
```
