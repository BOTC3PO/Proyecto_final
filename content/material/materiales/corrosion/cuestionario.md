# Materiales — Corrosion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de corrosión

```
metadata:
  materia: "materiales"
  tema: "corrosion_basica"
  nivel: "basico"
  tags: ["definicion", "deterioro"]

respuesta: "deterioro"
tipo: completar
respuestas_validas:
  - "deterioro"

enunciado: "La corrosión se define como el proceso de ___ de un material, generalmente un metal, debido a una reacción química o electroquímica con su entorno."

explicacion: |
  La corrosión es el proceso de deterioro de un material (comúnmente metales) causado por la interacción con el medio ambiente.
```

### 2 — Factores de corrosión

```
metadata:
  materia: "materiales"
  tema: "corrosion_factores"
  nivel: "basico"
  tags: ["factores", "ambiente"]

variables:
  escenarios: [["humedad alta", "oxidación rápida"], ["humedad baja", "oxidación lenta"]]
  escenario: uno_de(escenarios)

respuesta: uno_de(["oxidación rápida", "oxidación lenta"])
tipo: mc
opciones_explicitas: ["oxidación rápida", "oxidación lenta", "ausencia de reacción", "estabilidad química"]

enunciado: "En un ambiente con {escenario[0]}, la velocidad de corrosión suele resultar en una {escenario[1]}."

explicacion: |
  La presencia de electrolitos (como el agua o humedad) acelera drásticamente los procesos de corrosión electroquímica.
```

### 3 — Naturaleza del proceso

```
metadata:
  materia: "materiales"
  tema: "corrosion_naturaleza"
  nivel: "basico"
  tags: ["electroquimica", "reaccion"]

respuesta: verdadero
tipo: vf

enunciado: "¿La corrosión es un proceso que implica una transferencia de electrones entre el metal y el entorno?"

explicacion: |
  Verdadero. La corrosión electroquímica requiere un ánodo (donde se oxidan los átomos del metal) y un cátodo (donde se reduce el agente oxidante).
```

### 4 — Productos de la corrosión

```
metadata:
  materia: "materiales"
  tema: "corrosion_productos"
  nivel: "basico"
  tags: ["productos", "capas"]

respuesta: "capa protectora"
tipo: completar
respuestas_validas:
  - "capa protectora"
  - "capa destructiva"

enunciado: "Cuando el producto de la corrosión es denso y adherente, puede actuar como una ___ que reduce la velocidad de degradación. Si es poroso, el proceso continúa."

explicacion: |
  La morfología del producto de corrosión es clave: una capa pasivante o protectora limita el acceso de reactivos al metal base.
```

### 5 — Componentes del sistema corrosivo

```
metadata:
  materia: "materiales"
  tema: "corrosion_componentes"
  nivel: "intermedio"
  tags: ["celda", "electrodo"]

respuesta_orden: ["Ánodo", "Cátodo", "Electrolito", "Conexión eléctrica"]
tipo: ordenar

opciones_explicitas: ["Ánodo", "Cátodo", "Electrolito", "Conexión eléctrica"]

enunciado: "Para que ocurra una celda de corrosión electroquímica, se deben establecer los siguientes elementos en un orden lógico de flujo de electrones y iones:"

explicacion: |
  Un sistema de corrosión requiere un sitio de oxidación (ánodo), uno de reducción (cátodo), un medio conductor (electrolito) y un camino para los electrones.
```

### 6 — La naturaleza de la corrosión

```
metadata:
  materia: "materiales"
  tema: "corrosion_basica"
  nivel: "basico"
  tags: ["quimica", "metales"]

respuesta: verdadero
tipo: vf

enunciado: "La corrosión es un proceso de deterioro de un material, generalmente un metal, debido a una reacción química o electroquímica con su entorno."

explicacion: |
  La corrosión es la degradación de un material por la acción de agentes químicos en el medio ambiente (como oxígeno o humedad).
```

### 7 — El proceso de oxidación del hierro

```
metadata:
  materia: "materiales"
  tema: "corrosion_quimica"
  nivel: "intermedio"
  tags: ["hierro", "oxidacion"]

variables:
  escenario: uno_de([["hierro", "Fe", "se oxida"], ["aluminio", "Al", "forma una capa protectora"], ["magnesio", "Mg", "es muy reactivo"]])
  simbolo: escenario[1]

tipo: completar
respuesta: simbolo
respuestas_validas:
  - "Fe"
  - "Al"
  - "Mg"

enunciado: "En un proceso de corrosión galvánica, el elemento metálico {escenario[0]} se representa con el símbolo químico ___."

pasos:
  - "Identificar el metal base en el enunciado."
  - "Escribir su símbolo químico correspondiente."

explicacion: |
  El símbolo químico depende del metal sorteado: Fe para hierro, Al para aluminio, Mg para magnesio.
```

### 8 — Factores que aceleran la corrosión

```
metadata:
  materia: "materiales"
  tema: "factores_corrosion"
  nivel: "basico"
  tags: ["ambiente", "electrolito"]

respuesta: "electrolito"
tipo: mc
opciones_explicitas: ["electrolito", "vacío", "aislante", "gas noble"]

enunciado: "Para que ocurra una celda de corrosión electroquímica, además del metal y el oxígeno, es indispensable la presencia de un ___ que permita el flujo de iones."

explicacion: |
  Un electrolito (como agua salada o humedad) permite el movimiento de cargas iónicas, cerrando el circuito de la celda de corrosión.
```

### 9 — Etapas de la formación de la herrumbre

```
metadata:
  materia: "materiales"
  tema: "mecanismo_corrosion"
  nivel: "intermedio"
  tags: ["pasos", "reaccion"]

respuesta_orden: ["Oxidación del metal", "Difusión de iones", "Formación de óxido sólido"]
tipo: ordenar
opciones_explicitas: ["Oxidación del metal", "Difusión de iones", "Formación de óxido sólido"]

enunciado: "Ordene cronológicamente las etapas típicas de la formación de una capa de óxido (herrumbre) sobre una superficie metálica:"

explicacion: |
  Primero el metal pierde electrones (oxidación), luego los iones se mueven a través de la capa incipiente (difusión) y finalmente se precipitan formando el óxido sólido.
```

### 10 — Protección mediante ánodo de sacrificio

```
metadata:
  materia: "materiales"
  tema: "proteccion_corrosion"
  nivel: "avanzado"
  tags: ["proteccion", "galvanizado"]

respuesta: "Zn"
tipo: mc
opciones_explicitas: ["Zn", "Cu", "Ag", "Au"]

enunciado: "En el proceso de galvanizado, se recubre el acero con una capa de zinc para actuar como ánodo de sacrificio. El símbolo químico del metal utilizado es ___."

explicacion: |
  El zinc es más reactivo que el hierro. Al aplicarse como recubrimiento, el zinc se oxida preferencialmente (se sacrifica), protegiendo al acero.
```

### 11 — ¿Oxidación o Corrosión?

```
metadata:
  materia: "materiales"
  tema: "corrosion_conceptos"
  nivel: "basico"
  tags: ["definicion", "quimica"]

respuesta: "oxidación"
tipo: completar
respuestas_validas:
  - "oxidación"
  - "oxidacion"

enunciado: "Aunque a menudo se usan como sinónimos, el término químico preciso para la pérdida de electrones de un átomo es la ___."

explicacion: |
  La oxidación es el proceso químico de pérdida de electrones. La corrosión es el término general para el deterioro del material debido a esa reacción química con el ambiente.
```

### 12 — Factores de la corrosión

```
metadata:
  materia: "materiales"
  tema: "corrosion_factores"
  nivel: "basico"
  tags: ["ambiente", "electrolito"]

tipo: vf
respuesta: verdadero
enunciado: "¿La presencia de un electrolito (como agua salada) siempre acelera el proceso de corrosión galvánica en comparación con el aire seco?"

explicacion: |
  Verdadero. Un electrolito proporciona el medio necesario para el flujo de corriente iónica, facilitando la reacción electroquímica de corrosión.
```

### 13 — La paradoja de la capa protectora

```
metadata:
  materia: "materiales"
  tema: "corrosion_pasivacion"
  nivel: "intermedio"
  tags: ["pasivacion", "aluminio", "acero"]

variables:
  casos: [["hierro en condiciones normales", "Se oxida rápidamente de forma continua"], ["aluminio", "Se protege mediante una capa de óxido estable"]]
  idx: uno_de([0, 1])
  caso: casos[idx][0]
  respuesta_correcta: casos[idx][1]

respuesta: respuesta_correcta
tipo: mc
opciones_explicitas: ["Se oxida rápidamente de forma continua", "Se protege mediante una capa de óxido estable", "No se corroe nunca", "Se disuelve en el ambiente"]

enunciado: "Considerando el comportamiento del {caso}, ¿cuál es la principal diferencia en su comportamiento frente a la corrosión?"

explicacion: |
  El hierro forma una capa de óxido porosa que permite que el proceso continúe. El aluminio forma una capa de óxido densa y adherente (pasivación) que detiene la corrosión.
```

### 14 — Proceso de corrosión galvánica

```
metadata:
  materia: "materiales"
  tema: "corrosion_galvanica"
  nivel: "intermedio"
  tags: ["electroquimica", "pilas"]

respuesta_orden: ["Ánodo", "Electrolito", "Cátodo"]
tipo: ordenar

opciones_explicitas: ["Ánodo", "Electrolito", "Cátodo"]

enunciado: "Ordene los componentes necesarios para que ocurra una celda de corrosión galvánica, desde donde se pierde el material hasta donde se produce la reducción:"

explicacion: |
  La secuencia lógica es: 1. Ánodo (donde ocurre la oxidación/pérdida de material), 2. Electrolito (medio conductor) y 3. Cátodo (donde ocurre la reducción).
```

### 15 — El papel de la humedad

```
metadata:
  materia: "materiales"
  tema: "corrosion_humedad"
  nivel: "basico"
  tags: ["ambiente", "humedad"]

variables:
  idx: uno_de([0, 1])
  humedad_relativa: [10, 85][idx]
  tabla: ["No influye", "Aumenta la velocidad de corrosión"]

respuesta: tabla[idx]
tipo: mc
opciones_explicitas: ["No influye", "Aumenta la velocidad de corrosión", "Disminuye la velocidad de corrosión"]

enunciado: "Si la humedad relativa es del {humedad_relativa}%, ¿cuál es el efecto sobre la tasa de corrosión de un metal expuesto?"

explicacion: |
  A mayor humedad, se forma una película de agua sobre la superficie metálica que actúa como electrolito, acelerando la corrosión.
```

### 16 — Diferencia entre corrosión y oxidación

```
metadata:
  materia: "materiales"
  tema: "corrosion_conceptos"
  nivel: "basico"
  tags: ["quimica", "metales"]

respuesta: "oxidación"
tipo: "completar"
respuestas_validas:
  - "oxidación"

enunciado: "Si bien la corrosión es un proceso de deterioro, la ___ es el proceso químico de pérdida de electrones que puede ocurrir incluso sin la degradación destructiva de la pieza."

explicacion: |
  La oxidación es la reacción química de transferencia de electrones, mientras que la corrosión es el proceso de deterioro resultante (generalmente por factores ambientales) que afecta la integridad del material.
```

### 17 — Corrosión vs. Erosión

```
metadata:
  materia: "materiales"
  tema: "corrosion_vs_erosion"
  nivel: "intermedio"
  tags: ["mecanica", "deterioro"]

variables:
  tipo_deterioro: uno_de(["quimico", "mecanico"])

respuesta: uno_de(["quimico", "mecanico"])
tipo: "mc"
opciones_explicitas: ["quimico", "mecanico"]

enunciado: "El deterioro de un material debido al desgaste físico por el impacto de partículas o flujo de fluidos se denomina erosión, mientras que la corrosión es un proceso de naturaleza {tipo_deterioro}."

explicacion: |
  La erosión es un proceso mecánico de remoción de material por fricción o impacto, mientras que la corrosión es un proceso químico o electroquímico.
```

### 18 — Naturaleza de la corrosión galvánica

```
metadata:
  materia: "materiales"
  tema: "corrosion_galvanica"
  nivel: "intermedio"
  tags: ["electroquimica"]

respuesta: falso
tipo: "vf"

enunciado: "La corrosión galvánica ocurre cuando dos metales diferentes están en contacto eléctrico en un electrolito, pero el metal más noble es el que sufre el mayor deterioro."

explicacion: |
  Falso. En la corrosión galvánica, el metal menos noble (ánodo) es el que se corroe, mientras que el metal más noble (cátodo) se protege.
```

### 19 — Factores que aceleran la corrosión

```
metadata:
  materia: "materiales"
  tema: "factores_corrosion"
  nivel: "basico"
  tags: ["ambiente"]

tipo: ordenar
opciones_explicitas: ["Presencia de electrolitos", "Aumento de humedad", "Presencia de sales"]
respuesta_orden: ["Presencia de electrolitos", "Aumento de humedad", "Presencia de sales"]

enunciado: "Ordene de mayor a menor relevancia los factores que suelen acelerar un proceso de corrosión electrolítica en un ambiente marino:"

explicacion: |
  La presencia de un electrolito (como agua salada) es el motor de la celda, la humedad permite la formación de la película líquida y las sales aumentan la conductividad.
```

### 20 — Corrosión por picadura (Pitting)

```
metadata:
  materia: "materiales"
  tema: "corrosion_pitting"
  nivel: "avanzado"
  tags: ["defectos", "localizada"]

variables:
  escenario_desc: uno_de(["localizada", "general"])

respuesta: "localizada"
tipo: "mc"
opciones_explicitas: ["localizada", "general"]

enunciado: "Si el daño por corrosión se concentra en puntos específicos creando pequeños agujeros profundos, estamos ante una corrosión {escenario_desc}, a diferencia de la corrosión ___ que afecta toda la superficie por igual."

explicacion: |
  La corrosión por picadura (pitting) es un tipo de corrosión localizada muy peligrosa porque es difícil de detectar, a diferencia de la corrosión general que es uniforme.
```

### 21 — Corrosión Galvánica

```
metadata:
  materia: "materiales"
  tema: "corrosion_galvanica"
  nivel: "intermedio"
  tags: ["metales", "electroquimica"]

variables:
  datos: [["Hierro (Fe)", "Zinc (Zn)"], ["Aluminio (Al)", "Cobre (Cu)"], ["Acero (Fe)", "Plata (Ag)"]]
  idx: uno_de([0, 1, 2])
  metal_anodo: datos[idx][0]
  metal_catodo: datos[idx][1]

enunciado: "En una unión galvánica entre {metal_anodo} y {metal_catodo}, el metal que sufrirá el proceso de corrosión (el ánodo) es el {metal_anodo}."

respuesta: "el metal menos noble"
tipo: mc
opciones_explicitas: ["el metal más noble", "el metal menos noble", "el metal con mayor conductividad", "el metal con mayor densidad"]

explicacion: |
  En una celda galvánica, el metal con el potencial de reducción más bajo (menos noble) actúa como ánodo y se oxida (se corroe) para proteger al metal más noble (cátodo).
```

### 22 — Factores de Corrosión

```
metadata:
  materia: "materiales"
  tema: "factores_corrosion"
  nivel: "basico"
  tags: ["ambiente", "humedad"]

variables:
  datos: [["ambiente seco", "ambiente húmedo y salino"], ["aire puro", "ambiente con alta salinidad"]]
  idx: uno_de([0, 1])
  entorno: datos[idx][0]

enunciado: "La velocidad de corrosión de un acero al carbono aumenta significativamente cuando se encuentra en un {entorno}."

respuesta: "aumenta"
tipo: completar
respuestas_validas:
  - "aumenta"
  - "disminuye"

explicacion: |
  La presencia de electrolitos (como la sal o el agua) facilita el flujo de iones en la superficie del metal, acelerando la reacción electroquímica de corrosión.
```

### 23 — Pasos de la Reacción

```
metadata:
  materia: "materiales"
  tema: "mecanismo_corrosion"
  nivel: "avanzado"
  tags: ["mecanismo", "reaccion"]

enunciado: "Ordene las etapas típicas de una celda de corrosión electrolítica en el orden correcto, desde el inicio de la reacción hasta el producto final."

opciones_explicitas: ["Oxidación en el ánodo", "Transferencia de electrones", "Reducción en el cátodo", "Difusión de iones"]
respuesta_orden: ["Oxidación en el ánodo", "Transferencia de electrones", "Reducción en el cátodo", "Difusión de iones"]
tipo: ordenar

explicacion: |
  El proceso comienza con la oxidación del metal en el ánodo, seguido por el movimiento de electrones a través del metal, la reducción en el cátodo y el movimiento de iones en el electrolito.
```

### 24 — Protección Catódica

```
metadata:
  materia: "materiales"
  tema: "proteccion_catodica"
  nivel: "intermedio"
  tags: ["proteccion", "anodo_sacrificio"]

variables:
  objetivo: uno_de(["Tubería de acero", "Casco de barco de hierro"])

enunciado: "Para proteger una {objetivo} mediante protección galvánica, se debe conectar un ánodo de sacrificio que sea menos noble que el metal a proteger."

respuesta: "menos noble"
tipo: mc
opciones_explicitas: ["más noble", "menos noble", "más denso", "más reactivo"]

explicacion: |
  El ánodo de sacrificio debe tener un potencial de oxidación mayor (ser menos noble) para que el metal principal actúe como cátodo y no se oxide.
```

### 25 — Corrosión por Picadura

```
metadata:
  materia: "materiales"
  tema: "corrosion_picadura"
  nivel: "avanzado"
  tags: ["localizada", "cloruros"]

variables:
  sustancia: "cloruros (Cl⁻)"

enunciado: "La presencia de iones {sustancia} es uno de los factores más críticos que desencadenan la corrosión por picadura (pitting) en aceros inoxidables."

respuesta: verdadero
tipo: vf
explicacion: |
  Los iones cloruro rompen la capa pasiva de óxido de los aceros inoxidables, permitiendo una corrosión localizada muy agresiva y difícil de detectar.
```
