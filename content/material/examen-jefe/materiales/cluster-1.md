# Examen jefe — Maestro de Propiedades Mecánicas

> Logro #211. Completaste el parcial sobre corrosion, elasticidad, fatiga y propiedades de materiales jefe. Pool agregado de los `cuestionario.md` ya validados de sus 6 temas. **151 preguntas totales** en 6/6 secciones.

---

## Sección: corrosion (25 preguntas)

```
metadata:
  materia: "materiales"
  tema: "corrosion_basica"
  nivel: "basico"
  tags: ["definicion", "deterioro"]

respuesta: "deterioro"
tipo: completar
respuestas_validas: ["deterioro"]

enunciado: "La corrosión se define como el proceso de ___ de un material, generalmente un metal, debido a una reacción química o electroquímica con su entorno."

explicacion: |
  La corrosión es el proceso de deterioro de un material (comúnmente metales) causado por la interacción con el medio ambiente.
```

```
metadata:
  materia: "materiales"
  tema: "corrosion_factores"
  nivel: "basico"
  tags: ["factores", "ambiente"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[["humedad alta", "oxidación rápida"], ["humedad baja", "oxidación lenta"]]]

respuesta: uno_de(["oxidación rápida", "oxidación lenta"])
tipo: mc
opciones_explicitas: ["oxidación rápida", "oxidación lenta", "ausencia de reacción", "estabilidad química"]

enunciado: "En un ambiente con {escenarios[escenario_idx][0]}, la velocidad de corrosión suele resultar en una {escenarios[escenario_idx][1]}."

explicacion: |
  La presencia de electrolitos (como el agua o humedad) acelera drásticamente los procesos de corrosión electroquímica.
```

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

```
metadata:
  materia: "materiales"
  tema: "corrosion_productos"
  nivel: "basico"
  tags: ["productos", "capas"]

respuesta: "capa protectora"
tipo: completar
respuestas_validas: ["capa protectora", "capa destructiva"]

enunciado: "Cuando el producto de la corrosión es denso y adherente, puede actuar como una ___ que reduce la velocidad de degradación. Si es poroso, el proceso continúa."

explicacion: |
  La morfología del producto de corrosión es clave: una capa pasivante o protectora limita el acceso de reactivos al metal base.
```

```
metadata:
  materia: "materiales"
  tema: "corrosion_componentes"
  nivel: "intermedio"
  tags: ["celda", "electrodo"]

respuesta: ["Ánodo", "Cátodo", "Electrolito", "Conexión eléctrica"]
tipo: ordenar

opciones_explicitas: ["Ánodo", "Cátodo", "Electrolito", "Conexión eléctrica"]

enunciado: "Para que ocurra una celda de corrosión electroquímica, se deben establecer los siguientes elementos en un orden lógico de flujo de electrones y iones:"

explicacion: |
  Un sistema de corrosión requiere un sitio de oxidación (ánodo), uno de reducción (cátodo), un medio conductor (electrolito) y un camino para los electrones.
```

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

```
metadata:
  materia: "materiales"
  tema: "corrosion_quimica"
  nivel: "intermedio"
  tags: ["hierro", "oxidacion"]

variables:
  escenario: uno_de([
    ["hierro", "Fe", "se oxida"],
    ["aluminio", "Al", "forma una capa protectora"],
    ["magnesio", "Mg", "es muy reactivo"]
  ])

respuesta: escenario[0][1
tipo: completar
respuestas_validas: ["Fe", "Fe2+", "Fe3+"]

enunciado: "En un proceso de corrosión galvánica, el elemento metálico que actúa como ánodo en la formación de óxido de hierro se representa con el símbolo químico ___."

pasos:
  - "Identificar el metal base en el enunciado."
  - "Escribir su símbolo químico correspondiente."

explicacion: |
  El hierro se representa con el símbolo Fe. En la corrosión, el hierro pierde electrones (se oxida) para formar iones.
```

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

```
metadata:
  materia: "materiales"
  tema: "mecanismo_corrosion"
  nivel: "intermedio"
  tags: ["pasos", "reaccion"]

respuesta: ["Oxidación del metal", "Difusión de iones", "Formación de óxido sólido"]
tipo: ordenar
opciones_explicitas: ["Oxidación del metal", "Difusión de iones", "Formación de óxido sólido"]

enunciado: "Ordene cronológicamente las etapas típicas de la formación de una capa de óxido (herrumbre) sobre una superficie metálica:"

explicacion: |
  Primero el metal pierde electrones (oxidación), luego los iones se mueven a través de la capa incipiente (difusión) y finalmente se precipitan formando el óxido sólido.
```

```
metadata:
  materia: "materiales"
  tema: "proteccion_corrosion"
  nivel: "avanzado"
  tags: ["proteccion", "galvanizado"]

variables:
  metal_protector: uno_de([
    ["Zinc", "Zn"],
    ["Magnesio", "Mg"],
    ["Aluminio", "Al"]
  ])

respuesta: metal_protector[0][1
tipo: mc
opciones_explicitas: ["Zn", "Cu", "Ag", "Au"]

enunciado: "En el proceso de galvanizado, se recubre el acero con una capa de {metal_protector[0][0]} para actuar como ánodo de sacrificio. El símbolo químico del metal utilizado es ___."

explicacion: |
  El zinc es más reactivo que el hierro. Al aplicarse como recubrimiento, el zinc se oxida preferencialmente (se sacrifica), protegiendo al acero.
```

```
metadata:
  materia: "materiales"
  tema: "corrosion_conceptos"
  nivel: "basico"
  tags: ["definicion", "quimica"]

respuesta: "oxidación"
tipo: completar
respuestas_validas: ["oxidación", "oxidacion"]

enunciado: "Aunque a menudo se usan como sinónimos, el término químico preciso para la pérdida de electrones de un átomo es la ___."

explicacion: |
  La oxidación es el proceso químico de pérdida de electrones. La corrosión es el término general para el deterioro del material debido a esa reacción química con el ambiente.
```

```
metadata:
  materia: "materiales"
  tema: "corrosion_factores"
  nivel: "basico"
  tags: ["ambiente", "electrolito"]

respuesta: false
tipo: completar
enunciado: "¿La presencia de un electrolito (como agua salada) siempre acelera el proceso de corrosión galvánica en comparación con el aire seco?"

explicacion: |
  Verdadero. Un electrolito proporciona el medio necesario para el flujo de corriente iónica, facilitando la reacción electroquímica de corrosión.
```

```
metadata:
  materia: "materiales"
  tema: "corrosion_pasivacion"
  nivel: "intermedio"
  tags: ["pasivacion", "aluminio", "acero"]

variables:
  idx: uno_de([0, 1])
  caso: datos[idx][0]
  respuesta_correcta: datos[idx][1]

respuesta: tabla[caso][1]
tipo: mc
opciones_explicitas: ["Se oxida rápidamente de forma continua", "Se protege mediante una capa de óxido estable", "No se corroe nunca", "Se disuelve en el ambiente"]
tabla: [
  ["hierro en condiciones normales", false],
  ["aluminio", true]
]

enunciado: "Considerando el comportamiento del {caso}, ¿cuál es la principal diferencia en su comportamiento frente a la corrosión?"

explicacion: |
  El hierro forma una capa de óxido porosa que permite que el proceso continúe. El aluminio forma una capa de óxido densa y adherente (pasivación) que detiene la corrosión.
```

```
metadata:
  materia: "materiales"
  tema: "corrosion_galvanica"
  nivel: "intermedio"
  tags: ["electroquimica", "pilas"]

respuesta: ["Ánodo", "Electrolito", "Cátodo"]
tipo: ordenar

opciones_explicitas: ["Ánodo", "Electrolito", "Cátodo", "Aislante"]

enunciado: "Ordene los componentes necesarios para que ocurra una celda de corrosión galvánica, desde donde se pierde el material hasta donde se produce la reducción:"

explicacion: |
  La secuencia lógica es: 1. Ánodo (donde ocurre la oxidación/pérdida de material), 2. Electrolito (medio conductor) y 3. Cátodo (donde ocurre la reducción).
```

```
metadata:
  materia: "materiales"
  tema: "corrosion_humedad"
  nivel: "basico"
  tags: ["ambiente", "humedad"]

variables:
  idx: uno_de([0, 1])
  humedad_relativa: [10, 85][idx]
  tabla: [
    ["No influye", false],
    ["Aumenta la velocidad de corrosión", true]
  ]

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["No influye", "Aumenta la velocidad de corrosión", "Disminuye la velocidad de corrosión"]

enunciado: "Si la humedad relativa es del {humedad_relativa}%, ¿cuál es el efecto sobre la tasa de corrosión de un metal expuesto?"

explicacion: |
  A mayor humedad, se forma una película de agua sobre la superficie metálica que actúa como electrolito, acelerando la corrosión.
```

```
metadata:
  materia: "materiales"
  tema: "corrosion_conceptos"
  nivel: "basico"
  tags: ["quimica", "metales"]

respuesta: "oxidación"
tipo: "completar"
respuestas_validas: ["oxidación"]

enunciado: "Si bien la corrosión es un proceso de deterioro, la ___ es el proceso químico de pérdida de electrones que puede ocurrir incluso sin la degradación destructiva de la pieza."

explicacion: |
  La oxidación es la reacción química de transferencia de electrones, mientras que la corrosión es el proceso de deterioro resultante (generalmente por factores ambientales) que afecta la integridad del material.
```

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

```
metadata:
  materia: "materiales"
  tema: "factores_corrosion"
  nivel: "basico"
  tags: ["ambiente"]

respuesta: ["Presencia de electrolitos", "Aumento de humedad", "Presencia de sales"]
tipo: "ordenar"
opciones_explicitas: ["Presencia de electrolitos", "Aumento de humedad", "Presencia de sales"]

enunciado: "Ordene de mayor a menor relevancia los factores que suelen acelerar un proceso de corrosión electrolítica en un ambiente marino:"

explicacion: |
  La presencia de un electrolito (como agua salada) es el motor de la celda, la humedad permite la formación de la película líquida y las sales aumentan la conductividad.
```

```
metadata:
  materia: "materiales"
  tema: "corrosion_pitting"
  nivel: "avanzado"
  tags: ["defectos", "localizada"]

variables:
  escenario: uno_de([0, 1])

respuesta: uno_de(["localizada", "general"])
tipo: "mc"
opciones_explicitas: ["localizada", "general"]

enunciado: "Si el daño por corrosión se concentra en puntos específicos creando pequeños agujeros profundos, estamos ante una corrosión {escenario_desc}, a diferencia de la corrosión ___ que afecta toda la superficie por igual."

variables:
  escenario_desc: uno_de(["localizada", "general"])

explicacion: |
  La corrosión por picadura (pitting) es un tipo de corrosión localizada muy peligrosa porque es difícil de detectar, a diferencia de la corrosión general que es uniforme.
```

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
respuestas_validas: ["aumenta", "disminuye"]

explicacion: |
  La presencia de electrolitos (como la sal o el agua) facilita el flujo de iones en la superficie del metal, acelerando la reacción electroquímica de corrosión.
```

```
metadata:
  materia: "materiales"
  tema: "mecanismo_corrosion"
  nivel: "avanzado"
  tags: ["mecanismo", "reaccion"]

enunciado: "Ordene las etapas típicas de una celda de corrosión electrolítica en el orden correcto, desde el inicio de la reacción hasta el producto final."

opciones_explicitas: ["Oxidación en el ánodo", "Transferencia de electrones", "Reducción en el cátodo", "Difusión de iones"]
respuesta: ["Oxidación en el ánodo", "Transferencia de electrones", "Reducción en el cátodo", "Difusión de iones"]
tipo: ordenar

explicacion: |
  El proceso comienza con la oxidación del metal en el ánodo, seguido por el movimiento de electrones a través del metal, la reducción en el cátodo y el movimiento de iones en el electrolito.
```

```
metadata:
  materia: "materiales"
  tema: "proteccion_catodica"
  nivel: "intermedio"
  tags: ["proteccion", "anodo_sacrificio"]

variables:
  datos: [["Tubería de acero", "Casco de barco de hierro"]]
  idx: uno_de([0, 1])
  objetivo: datos[idx][0]

enunciado: "Para proteger una {objetivo} mediante protección galvánica, se debe conectar un ánodo de sacrificio que sea ___ que el metal a proteger."

respuesta: "menos noble"
tipo: mc
opciones_explicitas: ["más noble", "menos noble", "más denso", "más reactivo"]

explicacion: |
  El ánodo de sacrificio debe tener un potencial de oxidación mayor (ser menos noble) para que el metal principal actúe como cátodo y no se oxide.
```

```
metadata:
  materia: "materiales"
  tema: "corrosion_picadura"
  nivel: "avanzado"
  tags: ["localizada", "cloruros"]

variables:
  datos: [["cloruros (Cl⁻)", "oxígeno (O₂)"]]
  idx: uno_de([0, 1])
  sustancia: datos[idx][0]

enunciado: "La presencia de iones {sustancia} es uno de los factores más críticos que desencadenan la corrosión por picadura (pitting) en aceros inoxidables."

respuestas_validas: [true]
respuesta: true
tipo: completar
explicacion: |
  Los iones cloruro rompen la capa pasiva de óxido de los aceros inoxidables, permitiendo una corrosión localizada muy agresiva y difícil de detectar.
```

## Sección: elasticidad-ley-de-hooke-modulo-de-young (25 preguntas)

```
metadata:
  materia: "materiales"
  tema: "elasticidad_ley_de_hooke"
  nivel: "basico"
  tags: ["elasticidad", "hooke", "fuerza"]

respuesta: "F"
tipo: "vf"

enunciado: "La Ley de Hooke establece que la deformación de un cuerpo elástico es directamente proporcional a la fuerza aplicada, siempre que no se exceda el límite elástico. (Verdadero/Falso)"

explicacion: |
  La Ley de Hooke postula la relación lineal entre la fuerza aplicada y la deformación (estiramiento o compresión) en el régimen elástico.
```

```
metadata:
  materia: "materiales"
  tema: "modulo_de_young"
  nivel: "basico"
  tags: ["rigidez", "propiedades_mecanicas"]

variables:
  datos: [["muy elevado", "alto"], ["muy bajo", "bajo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: "mc"
opciones_explicitas: ["alto", "bajo"]

enunciado: "Un material que presenta un Módulo de Young {datos[idx][0]} indica que el material es ____ respecto a su capacidad de deformarse bajo esfuerzo."

explicacion: |
  El Módulo de Young mide la rigidez de un material; cuanto mayor es su valor, menos se deforma el material ante un mismo esfuerzo.
```

```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_variables"
  nivel: "intermedio"
  tags: ["deformacion", "esfuerzo", "modulo_young"]

respuesta: ["esfuerzo", "deformacion"]
tipo: "ordenar"
opciones_explicitas: ["esfuerzo", "deformacion", "masa"]

enunciado: "Para calcular el Módulo de Young (E), se debe dividir el ___ entre la ___."

explicacion: |
  La fórmula del Módulo de Young es E = σ / ε, donde σ es el esfuerzo (fuerza/área) y ε es la deformación unitaria.
```

```
metadata:
  materia: "materiales"
  tema: "limite_elastico"
  nivel: "intermedio"
  tags: ["deformacion_permanente", "plasticidad"]

respuesta: "plasticidad"
tipo: "completar"
respuestas_validas: ["plasticidad"]

enunciado: "Cuando un material es sometido a un esfuerzo que supera su límite elástico, la deformación deja de ser reversible y entra en el régimen de ________."

explicacion: |
  Al superar el límite elástico, el material sufre una deformación permanente (plástica) y no recupera su forma original al retirar la carga.
```

```
metadata:
  materia: "materiales"
  tema: "unidades_modulo_young"
  nivel: "basico"
  tags: ["unidades", "presion"]

respuesta: "Pascal"
tipo: "mc"
opciones_explicitas: ["Pascal", "Newton", "Kilogramo", "Metro"]

enunciado: "Dado que el Módulo de Young es la relación entre esfuerzo (fuerza/área) y deformación unitaria (adimensional), su unidad en el SI es el ________."

explicacion: |
  El esfuerzo se mide en Pascales (Pa), que es Newton sobre metro cuadrado (N/m²). Como la deformación no tiene unidades, el módulo mantiene la unidad del esfuerzo.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_hooke"
  nivel: "basico"
  tags: ["elasticidad", "fuerza", "deformacion"]

variables:
  k: 250.0

enunciado: "Un resorte ideal tiene una constante elástica de {k} N/m. Si se le aplica una fuerza de 50 N, ¿cuál es la deformación (estiramiento) que experimenta el resorte?"

pasos:
  - "Identificar la fuerza aplicada (F = 50 N)."
  - "Identificar la constante elástica (k = 250 N/m)."
  - "Aplicar la Ley de Hooke: F = k * Δx, lo que implica Δx = F / k."
  - "Calcular: Δx = 50 / 250 = 0.2 metros."

respuesta: 0.2
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La Ley de Hooke establece que la fuerza aplicada es proporcional a la deformación: F = k * Δx. 
  Despejando la deformación: Δx = 50 N / 250 N/m = 0.2 m.
```

```
metadata:
  materia: "fisica"
  tema: "modulo_de_young"
  nivel: "intermedio"
  tags: ["rigidez", "materiales", "tension"]

opciones_explicitas: ["Es una medida de la resistencia de un material a la deformación elástica.", "Es una medida de la masa por unidad de volumen.", "Es la fuerza aplicada sobre un área específica."]

respuesta: "Es una medida de la resistencia de un material a la deformación elástica."
tipo: mc

enunciado: "El Módulo de Young (E) se define como la relación entre la tensión y la deformación unitaria en el régimen elástico. ¿Qué representa físicamente este valor?"

explicacion: |
  El Módulo de Young cuantifica la rigidez de un material sólido. Un valor más alto indica que el material es más rígido y requiere más esfuerzo para deformarse elásticamente.
```

```
metadata:
  materia: "fisica"
  tema: "diagrama_esfuerzo_deformacion"
  nivel: "intermedio"
  tags: ["tension", "deformacion", "elasticidad"]

variables:
  es_elastico: verdadero

enunciado: "Si un material se somete a una carga y, al retirar dicha carga, recupera su forma original sin deformaciones permanentes, se dice que el material se ha comportado de forma {es_elastico}."

respuesta: verdadero
tipo: vf

explicacion: |
  La característica principal de la deformación elástica es la capacidad de recuperación total de la geometría original una vez eliminada la fuerza externa.
```

```
metadata:
  materia: "fisica"
  tema: "tension_mecanica"
  nivel: "intermedio"
  tags: ["esfuerzo", "area", "tension"]

variables:
  datos: [[100.0, 0.01], [200.0, 0.02], [50.0, 0.005]]
  idx: uno_de([0,1,2])

enunciado: "Se aplica una fuerza de {datos[idx][0]} N sobre una barra con una sección transversal de {datos[idx][1]} m². ¿Cuál es el valor del esfuerzo mecánico (tensión) en Pascales (Pa)?"

pasos:
  - "Calcular el esfuerzo usando la fórmula: σ = F / A."
  - "Sustituir los valores: σ = {datos[idx][0]} / {datos[idx][1]}."

respuesta: datos[idx][1] # Error en lógica de pensamiento, corregido abajo:
# La respuesta debe ser el resultado del cálculo:
# Para idx=0: 100 / 0.01 = 10000
# Para idx=1: 200 / 0.02 = 10000
# Para idx=2: 50 / 0.005 = 10000
# Como el resultado es constante en este ejemplo para simplificar:
# (En un caso real usaríamos la expresión matemática si el DSL lo permitiera, 
# pero como la respuesta debe ser el valor exacto del sorteo, calculamos:
# Si idx=0, respuesta=10000.0; Si idx=1, respuesta=10000.0; Si idx=2, respuesta=10000.0)

# Re-ajuste para cumplir reglas de respuesta:
# Usaremos una tabla de respuestas para asegurar el match exacto con el sorteo.

respuesta: tabla_respuestas[idx][1
tipo: completar
tolerancia_abs: 0.01

variables:
  tabla_respuestas: [[10000.0, 10000.0], [10000.0, 10000.0], [10000.0, 10000.0]]

explicacion: |
  El esfuerzo (σ) se calcula dividiendo la fuerza entre el área de la sección transversal: σ = F / A.
```

```
metadata:
  materia: "fisica"
  tema: "proceso_deformacion"
  nivel: "basico"
  tags: ["ordenar", "pasos", "carga"]

opciones_explicitas: ["Se aplica una carga externa al material.", "El material experimenta una deformación elástica.", "Se retira la carga y el material recupera su forma."]

respuesta: ["Se aplica una carga externa al material.", "El material experimenta una deformación elástica.", "Se retira la carga y el material recupera su forma."]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos que describen un ciclo de carga y descarga en un material dentro de su límite elástico:"

explicacion: |
  Para que exista un ciclo elástico completo, primero debe aplicarse la fuerza, luego ocurrir la deformación proporcional y finalmente la recuperación tras retirar la carga.
```

```
metadata:
  materia: "fisica"
  tema: "elasticidad_ley_de_hooke"
  nivel: "intermedio"
  tags: ["módulo_de_young", "rigidez", "deformación"]

variables:
  material_idx: uno_de([0, 1])
  datos: [[0.2, 200e9, 0.001], [0.5, 70e9, 0.002]]

enunciado: "Si comparamos dos barras de igual longitud y sección transversal, pero una tiene un módulo de Young mayor que la otra, la barra con mayor módulo de Young es más ___ ante la misma tensión aplicada."

opciones_explicitas: ["elástica", "rígida", "dúctil", "plástica"]

respuesta: "rígida"
tipo: mc

explicacion: |
  El módulo de Young ($E$) mide la rigidez de un material. A mayor $E$, menor es la deformación unitaria para un mismo esfuerzo, lo que significa que el material es más "rígido". No debe confundirse con la resistencia a la rotura.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_hooke"
  nivel: "intermedio"
  tags: ["deformación_unitaria", "esfuerzo", "hooke"]

variables:
  es_proporcional: verdadero

respuesta: verdadero
tipo: vf

enunciado: "En el régimen elástico de un material, la deformación unitaria ($\epsilon$) es directamente proporcional al esfuerzo aplicado ($\sigma$), siempre que no se supere el límite de proporcionalidad."

explicacion: |
  Esta es la esencia de la Ley de Hooke ($\sigma = E \cdot \epsilon$). Si el material sale del régimen elástico, la relación deja de ser lineal y la Ley de Hooke ya no es aplicable.
```

```
metadata:
  materia: "fisica"
  tema: "modulo_de_young"
  nivel: "avanzado"
  tags: ["calculo", "esfuerzo", "deformación"]

variables:
  escenario: uno_de([0, 1])
  valores: [[1000, 0.0005, 200e9], [500, 0.001, 100e9]]

pasos:
  - "Calcular el esfuerzo $\sigma = F / A$"
  - "Calcular la deformación unitaria $\epsilon = \Delta L / L$"
  - "Calcular $E = \sigma / \epsilon$"

enunciado: "Se aplica una fuerza de {valores[escenario][0]} N sobre una varilla de sección $A = 10^{-3}$ $m^2$ y longitud $L = 2$ $m$. Si la varilla se estira $\Delta L = {valores[escenario][1]}$ $m$, ¿cuál es el módulo de Young del material en Pa?"

respuesta: {valores[escenario][2]}
tipo: completar
tolerancia_abs: 0.001

explicacion: |
  Usando la fórmula $E = \frac{F/A}{\Delta L/L}$:
  $\sigma = 1000 / 0.001 = 1,000,000$ Pa.
  $\epsilon = 0.0005 / 2 = 0.00025$.
  $E = 1,000,000 / 0.00025 = 4 \times 10^9$ Pa (ajustado según el escenario).
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_hooke"
  nivel: "basico"
  tags: ["completar", "esfuerzo", "deformación"]

respuesta: ["esfuerzo", "deformación"]
tipo: completar

enunciado: "La Ley de Hooke establece que el ___ es proporcional a la ___ unitaria en el régimen elástico."

explicacion: |
  La relación es $\sigma \propto \epsilon$. El error común es confundir el esfuerzo (fuerza por área) con la fuerza directamente, o la deformación (cambio relativo) con el desplazamiento absoluto.
```

```
metadata:
  materia: "fisica"
  tema: "deformacion_materiales"
  nivel: "intermedio"
  tags: ["orden", "procesos", "elasticidad"]

opciones_explicitas: ["Aplicación de carga", "Deformación elástica", "Deformación plástica", "Rotura"]

respuesta: ["Aplicación de carga", "Deformación elástica", "Deformación plástica", "Rotura"]
tipo: ordenar

enunciado: "Ordene cronológicamente los estados por los que pasa un material sometido a una carga creciente hasta su falla:"

explicacion: |
  Primero ocurre la deformación reversible (elástica), luego si la carga sigue aumenta la deformación permanente (plástica) y finalmente el material se rompe.
```

```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_vs_limite_elastico"
  nivel: "basico"
  tags: ["elasticidad", "hooke"]

variables:
  es_elastico: verdadero

respuesta: es_elastico
tipo: completar
enunciado: "Si un material se deforma y, al retirar la carga, recupera su forma original, se dice que se encuentra dentro de su rango ____. Si la deformación es permanente, se ha superado el límite elástico."

pasos:
  - "Identificar si el comportamiento descrito es elástico o plástico."

explicacion: |
  La Ley de Hooke solo es válida mientras el material se encuentra en el régimen elástico. Una vez superado el límite elástico, el material entra en el régimen plástico y la deformación es irreversible.
```

```
metadata:
  materia: "materiales"
  tema: "modulo_young_vs_corte"
  nivel: "intermedio"
  tags: ["modulo_young", "modulo_corte", "deformacion"]

variables:
  tipo_deformacion: uno_de(["axial", "cizalladura"])

respuesta: tipo_deformacion[1
tipo: mc

opciones_explicitas: ["axial", "cizalladura"]

enunciado: "El Módulo de Young mide la rigidez de un material frente a una deformación de tipo {tipo_deformacion[0]}, mientras que el Módulo de Corte mide la resistencia a la deformación por {tipo_deformacion[1]}."

explicacion: |
  El Módulo de Young ($E$) relaciona el esfuerzo normal con la deformación axial. El Módulo de Corte ($G$) relaciona el esfuerzo cortante con la deformación por cizalladura.
```

```
metadata:
  materia: "materiales"
  tema: "modulo_young_propiedades"
  nivel: "intermedio"
  tags: ["modulo_young", "rigidez"]

variables:
  es_mayor: verdadero

respuesta: es_mayor
tipo: completar
enunciado: "Si comparamos dos barras del mismo material pero con diferentes diámetros, la barra con mayor diámetro tendrá un valor de Módulo de Young más alto. ¿Es esto verdadero o falso?"

explicacion: |
  Falso. El Módulo de Young es una propiedad intensiva del material; su valor depende únicamente de la naturaleza del material y no de la geometría (diámetro o longitud) de la pieza.
```

```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_componentes"
  nivel: "basico"
  tags: ["hooke", "esfuerzo", "deformacion"]

respuesta: ["esfuerzo", "deformación"]
tipo: ordenar

opciones_explicitas: ["deformación", "esfuerzo", "temperatura", "masa"]

enunciado: "En la formulación de la Ley de Hooke ($\sigma = E \cdot \epsilon$), se establece una relación de proporcionalidad directa entre el ____ y la ____."

explicacion: |
  La Ley de Hooke establece que el esfuerzo ($\sigma$) es directamente proporcional a la deformación unitaria ($\epsilon$), siendo el Módulo de Young ($E$) la constante de proporcionalidad.
```

```
metadata:
  materia: "materiales"
  tema: "esfuerzo_vs_deformacion"
  nivel: "basico"
  tags: ["esfuerzo", "deformacion", "hooke"]

variables:
  es_relacion_directa: verdadero

respuesta: es_relacion_directa
tipo: completar
enunciado: "En el régimen elástico, si el esfuerzo aplicado sobre un material aumenta, la deformación resultante también aumenta. ¿Es esta relación directa?"

explicacion: |
  Sí, en el régimen elástico lineal, el esfuerzo y la deformación son directamente proporcionales según la Ley de Hooke.
```

```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_modulo_young"
  nivel: "intermedio"
  tags: ["elasticidad", "fisica", "materiales"]

variables:
  escenario: uno_de([[10, 0.001, 200e9, 0.005], [15, 0.002, 150e9, 0.004], [20, 0.001, 100e9, 0.002]])
  F: escenario[0]
  delta_L: escenario[1]
  E: escenario[2]
  L: escenario[3]

respuesta: (F / delta_L) / (E * L) * L
tipo: completar
tolerancia_abs: 1e-6

enunciado: "Un material tiene una longitud inicial de {L} m. Al aplicarle una fuerza de {F} N, su longitud aumenta {delta_L} m. ¿Cuál es el módulo de Young (E) del material en Pa?"

pasos:
  - "Calcular la tensión (stress): σ = F / A. Como no se da el área, usamos la forma deformación: σ = E * ε"
  - "La deformación unitaria es ε = ΔL / L"
  - "Despejamos E de la fórmula: E = (F / ΔL) / (A / L) -> En este caso, para obtener E directamente con los datos: E = (F * L) / (ΔL * A). Si asumimos que el dato proporcionado es la relación para el cálculo directo: E = (F / ΔL) / (L / (L * (ΔL/L))) -> Simplificado: E = (F * L) / (ΔL * A). Dado que el problema pide el módulo y relaciona F, ΔL, L y E, la fórmula es E = (F / ΔL) / (A/L). Si el área no se da, el enunciado implica el cálculo de la relación de rigidez: E = (F * L) / (ΔL * A). Asumiendo un área unitaria de 1 m² para el cálculo del módulo si no se especifica, o que el usuario debe despejar de la relación dada."
  - "Nota: Para este ejercicio, asuma un área de sección transversal de 1 m² para el cálculo del módulo de Young."

explicacion: |
  El módulo de Young se define como el esfuerzo dividido por la deformación unitaria: E = σ / ε.
  Donde σ = F / A y ε = ΔL / L.
  Si A = 1 m², entonces E = (F / ΔL) / (1 / L) = (F * L) / ΔL.
```

```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_modulo_young"
  nivel: "basico"
  tags: ["conceptos", "elasticidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si un material se encuentra dentro de su límite elástico, al retirar la carga aplicada, este recuperará su forma original."
```

```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_modulo_young"
  nivel: "basico"
  tags: ["ley_de_hooke", "proporcionalidad"]

variables:
  datos: [[10, "aumenta"], [20, "aumenta"], [30, "aumenta"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: mc

opciones_explicitas: ["disminuye", "aumenta", "se mantiene constante", "se vuelve negativo"]

enunciado: "De acuerdo con la Ley de Hooke, si aplicamos una fuerza mayor sobre un resorte (dentro de su zona elástica), la deformación de este ___."

explicacion: |
  La Ley de Hooke establece que la fuerza es directamente proporcional a la deformación (F = k * Δx).
```

```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_modulo_young"
  nivel: "basico"
  tags: ["unidades", "estudios"]

respuesta: "Pascales"
tipo: completar

opciones_explicitas: ["Pascales", "Newtons", "Metros", "Kilogramos"]

enunciado: "El módulo de Young, que mide la rigidez de un material, se expresa en unidades de ___."

explicacion: |
  Dado que el módulo de Young es la relación entre esfuerzo (N/m²) y deformación (adimensional), su unidad es el Pascal (Pa).
```

```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_modulo_young"
  nivel: "intermedio"
  tags: ["deformación", "plasticidad"]

respuesta: ["Deformación elástica", "Límite elástico", "Deformación plástica", "Punto de rotura"]
tipo: ordenar

opciones_explicitas: ["Deformación elástica", "Límite elástico", "Deformación plástica", "Punto de rotura"]

enunciado: "Ordene los estados de deformación de un material desde que se aplica una carga mínima hasta que falla completamente:"

explicacion: |
  1. Deformación elástica: El material vuelve a su forma original.
  2. Límite elástico: El punto máximo antes de que la deformación sea permanente.
  3. Deformación plástica: El material sufre cambios permanentes.
  4. Punto de rotura: El material falla y se separa.
```

## Sección: familias-de-materiales-metales-ceramicos-polimeros-compuestos (25 preguntas)

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["clasificacion", "metales"]

tipo: mc
opciones_explicitas: ["Metales", "Cerámicos", "Polímeros", "Compuestos"]
respuesta: "Metales"

enunciado: "Los materiales que se caracterizan por tener un enlace metálico, alta conductividad eléctrica y térmica, y alta ductilidad, pertenecen a la familia de los ___."

explicacion: |
  Los metales poseen una red de cationes inmersos en un "mar de electrones" que permite el movimiento de carga y calor, otorgándoles su conductividad característica.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["ceramicos", "propiedades"]

tipo: vf
respuesta: falso

enunciado: "¿Los materiales cerámicos se caracterizan por ser altamente dúctiles y tener una excelente conductividad eléctrica?"

explicacion: |
  Falso. Los cerámicos son materiales generalmente frágiles (no dúctiles) y actúan como excelentes aislantes eléctricos debido a sus enlaces iónicos o covalentes.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["polimeros", "estructura"]

tipo: completar
respuestas_validas: ["macromoléculas", "monómeros"]
respuesta: "macromoléculas"

enunciado: "Los polímeros son materiales formados por la unión de largas cadenas de ___."

explicacion: |
  Las macromoléculas o polímeros se forman mediante la repetición de unidades estructurales más pequeñas llamadas monómeros.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["compuestos", "definicion"]

tipo: mc
opciones_explicitas: ["Una sola fase pura", "Dos o más fases distintas", "Una mezcla homogénea de átomos", "Unión de metales y cerámicos únicamente"]
respuesta: "Dos o más fases distintas"

enunciado: "Un material compuesto se define como aquel que está constituido por:"

explicacion: |
  Los materiales compuestos combinan dos o más componentes (fase matriz y fase refuerzo) para obtener propiedades que ninguno de los componentes posee por separado.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["polimeros", "procesamiento"]

tipo: ordenar
opciones_explicitas: ["Monómero", "Polímero", "Producto final"]
respuesta: ["Monómero", "Polímero", "Producto final"]

enunciado: "Ordene las etapas de formación de un material polimérico desde la unidad básica hasta el objeto terminado:"

explicacion: |
  El proceso comienza con la unidad química básica (monómero), que mediante la polimerización forma la cadena (polímero), que luego se procesa para obtener el producto.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["clasificacion", "metales"]

respuesta: "metales"
tipo: mc
opciones_explicitas: ["metales", "cerámicos", "polímeros", "compuestos"]

enunciado: "Un cable de cobre utilizado para transmitir electricidad en una instalación doméstica posee alta conductividad eléctrica y ductilidad. Por sus propiedades, este material pertenece a la familia de los ________."

explicacion: |
  Los metales se caracterizan por tener enlaces metálicos que permiten el movimiento libre de electrones, lo que les otorga alta conductividad eléctrica y térmica, además de ser generalmente dúctiles.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["cerámicos", "propiedades"]

respuesta: falso
tipo: vf

enunciado: "Los materiales cerámicos, debido a sus enlaces iónicos o covalentes, presentan una alta ductilidad y son excelentes conductores de electricidad a temperatura ambiente."

explicacion: |
  Falso. Los cerámicos son materiales mayoritariamente aislantes eléctricos y presentan una alta fragilidad (no son dúctiles), ya que sus enlaces fuertes impiden el deslizamiento de planos atómicos.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["compuestos", "estructura"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1
tipo: completar
tabla: [["fibra de vidrio", "fibra de vidrio"], ["resina epoxi", "resina epoxi"]]
opciones_explicitas: ["fibra de vidrio", "resina epoxi"]

enunciado: "En un material compuesto reforzado (como la fibra de vidrio), la fase que aporta resistencia mecánica se denomina fase ________, mientras que la fase que mantiene la forma y transfiere la carga es la matriz."

explicacion: |
  En los materiales compuestos, la fase de refuerzo (como la fibra) es la que soporta la mayor parte de la carga, mientras que la matriz (como la resina) rodea y protege al refuerzo.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["polímeros", "estructuras"]

respuesta: "polímeros"
tipo: completar
respuestas_validas: ["polímeros"]

enunciado: "Las macromoléculas formadas por la unión de largas cadenas de unidades repetitivas llamadas monómeros se conocen como ________."

explicacion: |
  Los polímeros (del griego 'muchos') son materiales cuyas moléculas son cadenas muy largas, lo que les confiere propiedades como la flexibilidad y baja densidad.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["polímeros", "procesamiento"]

respuesta: ["calentamiento", "moldeo", "enfriamiento", "solidificación"]
tipo: ordenar
opciones_explicitas: ["calentamiento", "moldeo", "enfriamiento", "solidificación"]

enunciado: "Para fabricar una pieza mediante inyección de un polímero termoplástico, se debe seguir un orden lógico de transformación térmica. Ordena los pasos:"

pasos:
  - "El material se eleva su temperatura hasta alcanzar el estado viscoso."
  - "El material fundido se introduce en la cavidad del molde."
  - "Se reduce la temperatura para recuperar la rigidez."
  - "El material toma su forma final tras el cambio de fase."

explicacion: |
  Los termoplásticos se caracteran por poder fundirse y moldearse repetidamente mediante ciclos de calentamiento (fusión) y enfriamiento (solidificación) sin que su estructura química cambie drásticamente.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales_metales_ceramicos_polimeros_compuestos"
  nivel: "basico"
  tags: ["enlaces", "ceramicos"]

respuesta: "iónico o covalente"
tipo: completar
respuestas_validas: ["iónico o covalente", "iónico", "covalente"]

enunciado: "A diferencia de los metales, cuyos átomos se mantienen unidos por un mar de electrones, los materiales cerámicos se caracterizan por tener enlaces de tipo ___."

explicacion: |
  Los cerámicos presentan enlaces iónicos (transferencia de electrones) o covalentes (compartición de electrones), lo que les otorga su alta temperatura de fusión y fragilidad.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales_metales_ceramicos_polimeros_compuestos"
  nivel: "basico"
  tags: ["polimeros", "conductividad"]

variables:
  es_conductor: falso

respuesta: es_conductor
tipo: completar
enunciado: "Un error común es pensar que todos los polímeros son conductores debido a su flexibilidad; sin embargo, la mayoría de los polímeros son aislantes eléctricos."

explicacion: |
  Los polímeros son generalmente aislantes debido a que sus electrones están localizados en enlaces covalentes, a diferencia de los metales.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales_metales_ceramicos_polimeros_compuestos"
  nivel: "intermedio"
  tags: ["compuestos", "matriz"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["fibra de carbono", "resina epoxi"], ["grafitos", "polietileno"]]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["datos[escenario_idx][0]", "datos[escenario_idx][1]", "una mezcla homogénea de ambos"]

enunciado: "En un material compuesto, la fase que rodea y mantiene unidas a las partículas o fibras se denomina ___."

explicacion: |
  En el ejemplo de {datos[escenario_idx][0]} y {datos[escenario_idx][1]}, la segunda componente actúa como la matriz que da forma al compuesto.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales_metales_ceramicos_polimeros_compuestos"
  nivel: "intermedio"
  tags: ["ductilidad", "fragilidad"]

respuesta: ["Ductilidad", "Fragilidad"]
tipo: ordenar

opciones_explicitas: ["Ductilidad", "Fragilidad"]

enunciado: "Ordena las siguientes propiedades mecánicas de mayor a menor capacidad de deformación plástica antes de la rotura, comparando un metal típico frente a una cerámica típica."

explicacion: |
  Los metales son generalmente dúctiles (pueden deformarse), mientras que los cerámicos son frágiles (se rompen sin deformación previa significativa).
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales_metales_ceramicos_polimeros_compuestos"
  nivel: "basico"
  tags: ["metales", "aleaciones"]

respuesta: verdadero

tipo: vf

enunciado: "Una aleación metálica es un material compuesto donde la fase dispersa es otro metal."

explicacion: |
  Falso. Una aleación es una solución sólida (o mezcla) donde los elementos están distribuidos a nivel atómico, no es un material compuesto con fases claramente separadas como en los compuestos reforzados.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["clasificacion", "metales"]

respuesta: "metales"
tipo: mc
opciones_explicitas: ["metales", "cerámicos", "polímeros", "compuestos"]

enunciado: "Los materiales que se caracterizan por tener enlaces metálicos, alta conductividad térmica y eléctrica, y ser generalmente dúctiles, pertenecen a la familia de los ___."

explicacion: |
  Los metales se distinguen por su nube de electrones deslocalizados, lo que permite la conducción eléctrica y la deformación plástica sin rotura inmediata.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["ceramicos", "propiedades"]

variables:
  es_ceramico_fragil: true

respuesta: es_ceramico_fragil
tipo: completar
enunciado: "A diferencia de los metales, los materiales cerámicos se caracterizan por ser altamente frágiles ante la aplicación de cargas mecánicas."

explicacion: |
  Los cerámicos poseen enlaces iónicos o covalentes muy fuertes que impiden el movimiento de dislocaciones, resultando en una baja tenacidad y alta fragilidad.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["compuestos", "definicion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["fibra de carbono", "resina epoxi"],
    ["arena", "cemento"]
  ]

respuesta: datos[escenario_idx][1
tipo: completar
respuestas_validas: ["resina epoxi", "cemento"]

enunciado: "Un material compuesto se distingue de una aleación porque combina dos o más fases distintas. Por ejemplo, en un material reforzado con fibras de {datos[escenario_idx][0]}, la fase continua es la {datos[escenario_idx][1]}."

explicacion: |
  En un compuesto, la fase continua (matriz) rodea a la fase dispersa (refuerzo) para combinar propiedades que ninguna de las fases posee por separado.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["polimeros", "moleculas"]

respuesta: "cadenas largas de macromoléculas"
tipo: completar
respuestas_validas: ["cadenas largas de macromoléculas", "átomos en red cúbica"]

enunciado: "Lo que distingue fundamentalmente a los polímeros de los metales y cerámicos es que su estructura está formada por ___."

explicacion: |
  Los polímeros están constituidos por unidades repetitivas (monómeros) que se unen para formar largas cadenas, lo que determina su baja densidad y flexibilidad.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "avanzado"
  tags: ["orden", "jerarquia"]

respuesta: ["átomos", "moléculas", "microestructura", "material compuesto"]
tipo: ordenar
opciones_explicitas: ["átomos", "moléculas", "microestructura", "material compuesto"]

enunciado: "Ordene de lo más simple a lo más complejo la jerarquía de organización de la materia, desde el nivel atómico hasta la formación de un material compuesto funcional."

explicacion: |
  La jerarquía comienza en los átomos, que forman moléculas (en polímeros) o redes (en cerámicos/metales), cuya organización forma la microestructura, la cual es la base para diseñar materiales compuestos con propiedades específicas.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["ceramicos", "propiedades"]

variables:
  datos: [["un horno industrial de alta temperatura", "cerámicos"], ["un cable eléctrico de alta conductividad", "metales"], ["un envase de plástico ligero para alimentos", "polímeros"]]
  idx: uno_de([0,1,2])

opciones_explicitas: ["metales", "cerámicos", "polímeros"]

enunciado: "Se requiere un material para {datos[idx][0]} debido a su excelente resistencia al calor y su naturaleza aislante. El tipo de material adecuado es: ___"

respuestas_validas: [datos[idx][1]]

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Los materiales cerámicos se caracterizan por su alto punto de fusión y su capacidad de actuar como aislantes térmicos y eléctricos, lo que los hace ideales para aplicaciones de alta temperatura.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["metales", "electricidad"]

variables:
  propiedad: uno_de(["alta conductividad eléctrica", "baja conductividad eléctrica", "aislamiento total"])
  es_metal: uno_de([true, false])

enunciado: "Los metales se distinguen principalmente por su {propiedad} debido a la movilidad de sus electrones de valencia."

respuesta: es_metal
tipo: completar
explicacion: |
  Los metales poseen un "mar de electrones" libres que permite el transporte eficiente de carga eléctrica, lo que define su alta conductividad.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["polimeros", "densidad"]

variables:
  datos: [["un neumático de automóvil", "caucho"], ["una botella de PET", "polímero"], ["una viga de acero", "metal"]]
  idx: uno_de([0,1,2])

opciones_explicitas: ["metal", "polímero", "cerámico"]

enunciado: "Analizando el caso de {datos[idx][0]}, observamos un material con baja densidad y gran flexibilidad. Este pertenece a la familia de los: ___"

respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Los polímeros son macromoléculas formadas por unidades repetitivas (monómeros) que generalmente presentan baja densidad y alta ductilidad/flexibilidad en comparación con metales o cerámicos.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["compuestos", "estructura"]

variables:
  componente_matriz: uno_de(["resina epóxica", "cemento", "aluminio"])
  componente_refuerzo: uno_de(["fibra de carbono", "arena", "magnesio"])
  es_compuesto: true

enunciado: "Un material compuesto se define por la combinación de dos o más fases. Si combinamos una matriz de {"componente_matriz} con un refuerzo de {"componente_refuerzo}, estamos creando un material de tipo compuesto."

respuesta: true
tipo: completar
explicacion: |
  Los materiales compuestos (como el CFRP) combinan una matriz (que da forma y transfiere cargas) y un refuerzo (que aporta rigidez/resistencia), logrando propiedades superiores a sus componentes por separado.
```

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "avanzado"
  tags: ["polimeros", "procesamiento"]

variables:
  pasos_correctos: ["Calentamiento del polímero", "Moldeo por inyección", "Enfriamiento y desmolde"]

opciones_explicitas: ["Calentamiento del polímero", "Moldeo por inyección", "Enfriamiento y desmolde"]

enunciado: "Para fabricar una pieza mediante moldeo por inyección de un polímero termoplástico, el orden lógico de los pasos es:"

respuesta: ["Calentamiento del polímero", "Moldeo por inyección", "Enfriamiento y desmolde"]
tipo: ordenar

explicacion: |
  En los termoplásticos, el material debe fundirse primero (calentamiento), ser forzado en el molde (moldeo) y finalmente solidificarse para recuperar su forma (enfriamiento).
```

## Sección: fatiga-y-fractura (25 preguntas)

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["fatiga", "esfuerzo_repetitivo"]

respuesta: "fatiga"
tipo: "completar"
respuestas_validas: ["fatiga"]

enunciado: "El fenómeno por el cual un material se rompe bajo la aplicación de esfuerzos cíclicos o repetitivos, incluso cuando el esfuerzo máximo es inferior al límite de fluencia del material, se denomina ___."

explicacion: |
  La fatiga es un proceso de degradación estructural que ocurre debido a la aplicación de cargas fluctuantes, lo que puede generar microgrietas que se propagan hasta causar la falla catastrófica.
```

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

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["esfuerzo", "estatico"]

respuesta: falso
tipo: "vf"

enunciado: "Si un material está sometido a un esfuerzo constante (estático) que es menor a su límite de rotura, el material nunca fallará por fatiga."

explicacion: |
  Correcto. La fatiga requiere de la naturaleza cíclica o fluctuante de la carga. Un esfuerzo constante sin variaciones de amplitud no produce el mecanismo de fatiga.
```

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["secuencia", "falla"]

opciones_explicitas: ["Iniciación", "Propagación", "Fractura catastrófica"]
respuesta: ["Iniciación", "Propagación", "Fractura catastrófica"]
tipo: "ordenar"

enunciado: "Ordene cronológicamente las etapas que ocurren durante la falla de un componente sometido a fatiga:"

explicacion: |
  La secuencia lógica es: primero se nuclea la grieta (iniciación), luego la grieta crece a través del material (propagación) y finalmente la sección restante falla de forma súbita (fractura).
```

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["limite_fatiga", "curva_s-n"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1
tipo: "mc"
opciones_explicitas: ["Límite de fatiga", "Límite elástico", "Límite de rotura"]

enunciado: "En materiales como el acero, existe un valor de esfuerzo por debajo del cual el material puede soportar un número infinito de ciclos sin fallar. Este valor se conoce como ___."

pasos:
  - "Identificar el concepto relacionado con la resistencia a ciclos infinitos."

explicacion: |
  El límite de fatiga (o límite de resistencia a la fatiga) es el esfuerzo máximo que un material puede soportar sin presentar falla por fatiga tras un número de ciclos muy elevado.
```

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

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["limite_fatiga", "acero"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[150, "MPa"], [250, "MPa"]]
  limite: uno_de([150, 250])

respuesta: limite
tipo: mc
opciones_explicitas: ["100 MPa", "150 MPa", "200 MPa", "300 MPa"]

enunciado: "En un ensayo de fatiga para un acero específico, se determina que el material puede soportar un número infinito de ciclos si el esfuerzo aplicado se mantiene por debajo del límite de fatiga, que para este caso es de {datos[escenario_idx][0]} {datos[escenario_idx][1]}."

explicacion: |
  El límite de fatiga (o límite de resistencia a la fatiga) es el valor de esfuerzo por debajo del cual el material puede resistir ciclos de carga teóricamente infinitos sin fallar por fatiga.
```

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["mecanismo", "fractura"]

respuesta: ["Iniciación de grieta", "Propagación de grieta", "Fractura súbita"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas que ocurren durante el proceso de falla por fatiga en un componente mecánico:"

pasos:
  - "La grieta se extiende a través de la sección transversal."
  - "Se forma una pequeña fisura en la superficie debido a concentradores de tensión."
  - "El componente se rompe repentinamente cuando la sección remanente es insuficiente."

explicacion: |
  El proceso comienza con la nucleación (iniciación) en un punto de alta concentración de esfuerzos, seguido por la propagación lenta de la grieta (donde suelen verse las 'marcas de playa') y termina con la fractura catastrófica cuando la sección resistente es mínima.
```

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "avanzado"
  tags: ["morfologia", "fractura"]

variables:
  tipo_falla: uno_de([0, 1])
  descripcion: ["marcas de playa", "superficie rugosa y granular"]
  visual: uno_de(["marcas de playa", "superficie rugosa y granular"])

respuesta: visual
tipo: completar
respuestas_validas: ["marcas de playa", "superficie rugosa y granular"]

enunciado: "Al examinar la superficie de una fractura por fatiga, es común observar un patrón característico llamado ___ que indica el avance de la grieta."

explicacion: |
  Las 'marcas de playa' (beach marks) son líneas macroscópicas que representan el avance de la frente de la grieta durante periodos de carga. Son la evidencia clásica de una falla por fatiga.
```

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "avanzado"
  tags: ["calculo", "esfuerzo"]

variables:
  caso_idx: uno_de([0, 1])
  carga: uno_de([5000, 10000])
  area: uno_de([250, 500])
  esfuerzo_calc: uno_de([20.0, 20.0])

respuesta: esfuerzo_calc
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un perno sufre una carga cíclica de {carga} N. Si el área de la sección transversal del perno es de {area} mm², ¿cuál es el esfuerzo de tensión ($\sigma$) aplicado en cada ciclo? (Expresado en MPa)"

pasos:
  - "Identificar la carga aplicada ($F = \{carga\}$ N)."
  - "Identificar el área de la sección ($A = \{area\}$ mm²)."
  - "Calcular el esfuerzo usando la fórmula $\sigma = F / A$."

explicacion: |
  El esfuerzo se calcula como $\sigma = F / A$. 
  Para el caso 1: $5000 / 250 = 20$ MPa.
  Para el caso 2: $10000 / 500 = 20$ MPa.
```

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["fatiga", "esfuerzo", "resistencia"]

respuesta: "verdadero"
tipo: "vf"

enunciado: "Un material sometido a ciclos de carga repetitivos puede fallar por fatiga incluso si el esfuerzo máximo aplicado es significativamente menor que su límite elástico."

explicacion: |
  La fatiga es un fenómeno de degradación progresiva. Las microfisuras se propagan con cada ciclo de carga, reduciendo la sección efectiva del material hasta que la fractura ocurre, incluso bajo cargas que no causarían deformación plástica en una sola aplicación.
```

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "avanzado"
  tags: ["superficie", "fisuras", "acabado"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["rugoso", "menor"], ["pulido", "mayor"]]

respuesta: datos[escenario_idx][1
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual", "nulo"]

enunciado: "Considerando el estado de la superficie de una pieza, un acabado {datos[escenario_idx][0]} tiende a resultar en una vida a la fatiga {datos[escenario_idx][1]} que un acabado pulido."

explicacion: |
  Las irregularidades superficiales (rugosidad) actúan como concentradores de esfuerzos (notch effect), facilitando la nucleación de grietas de fatiga. Un acabado pulido retarda este proceso.
```

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["mecanismo", "fractura", "secuencia"]

respuesta: ["Nucleación de grieta", "Propagación de la grieta", "Fractura súbita"]
tipo: "ordenar"
opciones_explicitas: ["Nucleación de grieta", "Propagación de la grieta", "Fractura súbita"]

enunciado: "Ordene cronológicamente las etapas que ocurren durante el fallo de un componente por fatiga mecánica."

explicacion: |
  El proceso comienza con la nucleación de una microgrieta (generalmente en la superficie), seguida por la propagación de la grieta a través de la sección transversal, y finaliza con una fractura súbita cuando la sección restante ya no puede soportar la carga.
```

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["curva_sn", "esfuerzo", "ciclos"]

respuesta: "inversamente"
tipo: "completar"
respuestas_validas: ["inversamente", "directamente"]

enunciado: "En una curva de Wöhler (S-N), la relación entre el esfuerzo de la carga aplicada y el número de ciclos hasta la falla es de tipo ___."

explicacion: |
  La curva S-N muestra que a medida que el nivel de esfuerzo (S) disminuye, el número de ciclos hasta la falla (N) aumenta. Es una relación inversa.
```

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

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["fatiga", "esfuerzo", "fractura"]

respuesta: "fractura_frágil"
tipo: completar
respuestas_validas: ["fractura_frágil", "fractura_dúctil"]

enunciado: "A diferencia de la deformación plástica, donde el material sufre una deformación permanente visible antes de romperse, la fatiga suele conducir a una ___ que puede ocurrir sin deformación macroscópica previa."

explicacion: |
  La fatiga es un proceso de degradación progresiva que genera microgrietas. A menudo, el material falla de forma repentina (fractura frágil) sin mostrar el estiramiento o la deformación plástica característica de los materiales dúctiles bajo cargas estáticas.
```

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "avanzado"
  tags: ["limite_fatiga", "esfuerzo"]

variables:
  es_ciclo_critico: uno_de([verdadero, falso])

respuesta: es_ciclo_critico
tipo: completar
enunciado: "Si un material está sometido a un esfuerzo cíclico cuyo valor máximo es inferior al límite de fatiga del material, ¿se producirá la falla por fatiga tras un número infinito de ciclos? (Asumiendo un material con límite de fatiga definido)"

explicacion: |
  Por definición, el límite de fatiga es el nivel de esfuerzo por debajo del cual un material puede soportar un número infinito de ciclos de carga sin fallar por fatiga.
```

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

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["propagacion", "grieta"]

respuesta: ["Iniciación", "Propagación", "Fractura inminente"]
tipo: ordenar
opciones_explicitas: ["Iniciación", "Propagación", "Fractura inminente"]

enunciado: "Ordene cronológicamente las etapas que ocurren durante el proceso de falla por fatiga en un componente mecánico:"

explicacion: |
  El proceso comienza con la nucleación de una microgrieta (iniciación), seguida del crecimiento de la grieta bajo cargas cíclicas (propagación) y finaliza con la rotura súbita de la sección remanente (fractura inminente).
```

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["acabado", "rugosidad"]

variables:
  es_superficie_lisa: uno_de([verdadero, falso])

respuesta: es_superficie_lisa
tipo: completar
enunciado: "Un acabado superficial rugoso o con muescas actúa como un concentrador de esfuerzos, lo que {es_superficie_lisa} aumenta la resistencia a la fatiga del material en comparación con una superficie pulida."

explicacion: |
  La rugosidad superficial crea micro-entalladuras que actúan como concentradores de tensión, facilitando la iniciación de grietas y, por lo tanto, reduciendo la vida útil a la fatiga.
```

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["fatiga", "resistencia"]

variables:
  escenario: uno_de([[120, "120 MPa"], [150, "150 MPa"], [180, "180 MPa"]])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["120 MPa", "150 MPa", "180 MPa", "200 MPa"]

enunciado: "Un componente de acero está sometido a un ciclo de carga alternante. Si el límite de fatiga del material es de {escenario[idx][0]} MPa, ¿cuál es el valor máximo de esfuerzo que puede soportar indefinidamente sin fallar por fatiga?"

explicacion: |
  El límite de fatiga es el valor de esfuerzo por debajo del cual un material puede soportar ciclos de carga infinitos sin que se inicie una fractura por fatiga.
```

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["fractura", "grieta"]

respuesta: "propagación"
tipo: completar
respuestas_validas: ["propagación", "iniciación", "nucleación"]

enunciado: "En un proceso de fatiga, una vez que se ha formado una microgrieta en la superficie, la etapa siguiente es la de ___ de la grieta hacia el interior del material."

explicacion: |
  La fatiga ocurre en tres etapas: 1) Iniciación de la grieta, 2) Propagación de la grieta (donde se observa la estriación) y 3) Fractura catastrófica final.
```

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "avanzado"
  tags: ["curva_s_n", "fatiga"]

variables:
  datos: [[200, "alta"], [350, "baja"]]
  idx: uno_de([0, 1])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Si aumentamos la amplitud del esfuerzo aplicado en un componente, la vida útil a la fatiga (número de ciclos hasta la rotura) será: {datos[idx][1]}."

explicacion: |
  Existe una relación inversa entre la amplitud del esfuerzo y la vida útil: a mayor esfuerzo, menor es el número de ciclos que el material puede resistir antes de fallar.
```

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["secuencia", "fractura"]

respuesta: ["iniciación", "propagación", "fractura final"]
tipo: ordenar
opciones_explicitas: ["iniciación", "propagación", "fractura final"]

enunciado: "Ordene cronológicamente las etapas de un proceso de falla por fatiga en un material dúctil:"

explicacion: |
  El proceso comienza con la iniciación de una grieta (usualmente en superficie), continúa con la propagación de la misma mediante estriaciones y termina con una fractura rápida cuando la sección remanente es insuficiente.
```

```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["morfología", "fractura"]

variables:
  tipo_falla: uno_de([[1, "rugosa"], [2, "dúctil"], [3, "frágil"]])

respuesta: tipo_falla[idx][1
tipo: mc
opciones_explicitas: ["rugosa", "dúctil", "frágil"]

enunciado: "La superficie de una fractura por fatiga se caracteriza visualmente por ser de apariencia {tipo_falla[idx][1]} debido a la progresión de la grieta, a diferencia de una fractura súbita."

explicacion: |
  Las fracturas por fatiga suelen presentar una zona de progresión con apariencia rugosa o con marcas de estriaciones, mientras que las fracturas frágiles suelen ser granulares o brillantes.
```

## Sección: plasticidad-y-punto-de-fluencia (25 preguntas)

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["definicion", "deformacion"]

respuesta: "deformación permanente"
tipo: completar
respuestas_validas: ["deformación permanente", "deformacion permanente"]

enunciado: "La plasticidad es la propiedad de un material que le permite experimentar una ___ tras retirar la carga aplicada."

explicacion: |
  Cuando un material supera su límite elástico, los átomos se desplazan de sus posiciones originales y no regresan a ellas, resultando en una deformación permanente.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["limite_elastico", "deformacion"]

opciones_explicitas: ["Límite elástico", "Punto de ruptura", "Módulo de Young", "Límite de fatiga"]
respuesta: "Límite elástico"
tipo: mc

enunciado: "El valor de tensión máxima en el que un material aún es capaz de recuperar su forma original sin sufrir cambios permanentes se denomina:"

explicacion: |
  Por debajo del límite elástico, el material se comporta de forma elástica (recuperable). Por encima, entra en el régimen plástico.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["verdadero_falso", "propiedades"]

respuesta: falso
tipo: vf

enunciado: "Si un material se encuentra en su zona de deformación elástica, cualquier carga aplicada será recuperada una vez que se retire la tensión."

explicacion: |
  Es falso. En la zona elástica, la deformación es reversible. La deformación permanente solo ocurre en la zona plástica.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["curva_esfuerzo", "secuencia"]

opciones_explicitas: ["Deformación elástica", "Punto de fluencia", "Deformación plástica", "Rotura"]
respuesta: ["Deformación elástica", "Punto de fluencia", "Deformación plástica", "Rotura"]
tipo: ordenar

enunciado: "Ordene las etapas que experimenta un material dúctil conforme aumenta la tensión aplicada:"

explicacion: |
  Primero ocurre la deformación elástica (reversible), luego el material alcanza el punto de fluencia donde comienza la deformación plástica (irreversible), y finalmente llega a la rotura.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["punto_de_fluencia", "definicion"]

variables:
  idx: uno_de([0, 1])

datos: [["elástica", "plástica"]]
respuesta: datos[idx][1]

enunciado: "Si un material supera su punto de fluencia, la deformación resultante será de tipo {datos[idx][1]}."

explicacion: |
  El punto de fluencia marca la transición entre el comportamiento elástico (reversible) y el comportamiento plástico (permanente).
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["deformacion", "elasticidad"]

variables:
  es_elastico: true

respuesta: es_elastico
tipo: completar
enunciado: "Si un material se somete a una carga que no supera su límite elástico, al retirar la carga el material recuperará su forma original. ¿Es esto un comportamiento elástico? {es_elastico}"

explicacion: |
  Correcto. El comportamiento elástico se caracteriza por la capacidad de un material de recuperar su forma original tras retirar la carga, siempre que no se haya superado el límite elástico.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["deformacion_permanente", "plasticidad"]

variables:
  datos: [["un resorte de acero", "elástica"], ["un clavo de hierro doblado", "plástica"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["elástica", "plástica"]

enunciado: "Analiza el siguiente caso: {datos[idx][0]}. El tipo de deformación que presenta es de naturaleza ________."

explicacion: |
  Si el material recupera su forma es elástico. Si el material mantiene la deformación (como el clavo doblado), ha entrado en el régimen plástico.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["calculo", "deformacion_unitaria"]

variables:
  datos: [[0.002, "0.002"], [0.005, "0.005"], [0.012, "0.012"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["0.002", "0.005", "0.012"]

enunciado: "Un cilindro de aluminio se estira desde una longitud inicial de 100 mm hasta una longitud final de 100.5 mm. La deformación unitaria (ε) se calcula como (L_final - L_inicial) / L_inicial. El valor obtenido es ________."

pasos:
  - "Calcular la diferencia de longitud: 100.5 - 100 = 0.5 mm"
  - "Dividir por la longitud inicial: 0.5 / 100 = 0.005"

explicacion: |
  La deformación unitaria es una magnitud adimensional que relaciona el cambio de longitud con la longitud original.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["ensayo_traccion", "procedimiento"]]

respuesta: ["Aplicar carga progresiva", "Observar límite elástico", "Superar punto de fluencia", "Medir deformación permanente"]
tipo: ordenar
opciones_explicitas: ["Aplicar carga progresiva", "Observar límite elástico", "Superar punto de fluencia", "Medir deformación permanente"]

enunciado: "Ordena los pasos lógicos para observar el paso de un comportamiento elástico a uno plástico en un ensayo de tracción:"

explicacion: |
  Primero se aplica la carga, luego se identifica el límite donde la deformación deja de ser proporcional a la carga (límite elástico), se cruza el punto de fluencia y finalmente se observa la deformación plástica residual.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "avanzado"
  tags: ["punto_de_fluencia", "esfuerzo"]

variables:
  datos: [["el material fluye sin aumento de carga", "fluencia"], ["el material se estira proporcionalmente", "elástico"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["fluencia", "elástico"]

enunciado: "En un diagrama Esfuerzo-Deformación, si observamos que el material experimenta un aumento de deformación sin necesidad de aumentar el esfuerzo, estamos ante un fenómeno de ________."

explicacion: |
  El fenómeno de fluencia (yielding) es la característica principal de los materiales dúctiles donde ocurre la deformación plástica significativa.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["deformacion", "elasticidad", "limite_fluencia"]

respuesta: "elástica"
tipo: completar
respuestas_validas: ["elástica", "elástica", "elástica"]

enunciado: "Cuando un material se somete a una carga y, al retirarla, recupera su forma original sin presentar deformación permanente, se dice que ha ocurrido una deformación ___."

explicacion: |
  La deformación elástica es aquella en la que los enlaces atómicos se estiran pero vuelven a su posición original al retirar la carga. Si se supera el límite de fluencia, entramos en el régimen plástico.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["deformacion_permanente", "plasticidad"]

opciones_explicitas: ["El material vuelve a su forma original", "El material sufre una deformación permanente", "El material se rompe instantáneamente"]
respuesta: "El material sufre una deformación permanente"
tipo: mc

enunciado: "Si un material es sometido a un esfuerzo que supera su punto de fluencia (yield point), ¿cuál es la consecuencia principal al retirar la carga?"

explicacion: |
  El punto de fluencia marca la transición entre el comportamiento elástico (reversible) y el comportamiento plástico (irreversible). Una vez superado, el material queda con una deformación residual.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["diagrama_esfuerzo_deformacion", "curva"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["El material es un metal dúctil que presenta una meseta de fluencia clara.", "El material es un metal dúctil que presenta una meseta de fluencia clara."],
    ["El material es un polímero que muestra una transición suave sin meseta clara.", "El material es un polímero que muestra una transición suave sin meseta clara."]
  ]

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["El material es un metal dúctil que presenta una meseta de fluencia clara.", "El material es un metal dúctil que presenta una meseta de fluencia clara.", "El material es un polímero que muestra una transición suave sin meseta clara.", "El material es un polímero que muestra una transición suave sin meseta clara."]

enunciado: "En un diagrama de esfuerzo-deformación, la presencia de una meseta horizontal donde la deformación aumenta sin aumento de carga es característica de: {escenario[idx][0]}"

explicacion: |
  Los metales con estructura FCC o BCC suelen mostrar una meseta de fluencia bien definida, mientras que otros materiales como polímeros o aleaciones específicas pueden tener una transición más gradual.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: falso
tipo: vf

enunciado: "El punto de fluencia es el esfuerzo máximo que un material puede soportar antes de romperse definitivamente."

explicacion: |
  Falso. El punto de fluencia es el inicio de la deformación plástica. El esfuerzo máximo se denomina 'resistencia a la tracción' (UTS) y ocurre mucho después del punto de fluencia.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["secuencia", "ensayo_traccion"]

opciones_explicitas: ["Deformación Elástica", "Punto de Fluencia", "Deformación Plástica", "Fractura"]
respuesta: ["Deformación Elástica", "Punto de Fluencia", "Deformación Plástica", "Fractura"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas que experimenta una probeta de acero dulce durante un ensayo de tracción desde que se aplica carga hasta la rotura:"

explicacion: |
  Primero ocurre la deformación elástica (reversible), luego se alcanza el punto de fluencia, seguido por la deformación plástica (permanente) y finalmente la rotura o fractura del material.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["deformacion", "elasticidad"]

respuesta: "deformación permanente"
tipo: completar
respuestas_validas: ["deformación permanente", "deformación irreversible"]

enunciado: "Mientras que la deformación elástica es reversible al retirar la carga, la deformación que ocurre tras superar el punto de fluencia se conoce como ___."

explicacion: |
  El punto de fluencia marca la transición entre el comportamiento elástico (donde el material vuelve a su forma original) y el plástico (donde el cambio es permanente).
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["punto_de_fluencia", "esfuerzo"]

variables:
  escenario: uno_de([
    ["el material se deforma y vuelve a su forma original", "elástico"],
    ["el material se deforma y no recupera su forma", "plástico"],
    ["el material se rompe inmediatamente", "frágil"]
  ])

opciones_explicitas: ["elástico", "plástico", "frágil"]
respuesta: escenario[1
tipo: mc

enunciado: "Si sometemos un material a un esfuerzo que es inferior al punto de fluencia, su comportamiento es ___."

explicacion: |
  Por debajo del punto de fluencia, las fuerzas interatómicas son capaces de mantener la estructura original, permitiendo que el material recupere su forma (comportamiento elástico).
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["booleano", "plasticidad"]

respuesta: falso
tipo: vf

enunciado: "La deformación plástica es aquella que puede ser recuperada totalmente al retirar la carga aplicada."

explicacion: |
  Falso. La característica definitoria de la plasticidad es precisamente la irreversibilidad de la deformación.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["curva_esfuerzo", "secuencia"]

opciones_explicitas: ["Región elástica", "Punto de fluencia", "Región plástica"]
respuesta: ["Región elástica", "Punto de fluencia", "Región plástica"]
tipo: ordenar

enunciado: "Ordene las etapas de un material dúctil según aumenta la carga aplicada:"

explicacion: |
  Primero el material sigue la ley de Hooke (elástica), luego alcanza el límite donde la deformación aumenta sin aumentar proporcionalmente el esfuerzo (fluencia) y finalmente entra en la zona de deformación permanente (plástica).
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["límite", "esfuerzo"]

variables:
  valor: uno_de([
    ["el límite de proporcionalidad", "límite"],
    ["el límite de rotura", "límite"],
    ["el límite elástico", "límite"]
  ])

opciones_explicitas: ["el límite de proporcionalidad", "el límite de rotura", "el límite elástico"]
respuesta: valor[0
tipo: mc

enunciado: "En un diagrama de esfuerzo-deformación, el punto de fluencia se distingue de ___ porque marca el inicio de la deformación no reversible."

explicacion: |
  El punto de fluencia es el umbral crítico que separa la zona donde el material es elástico de la zona donde comienza la deformación plástica.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["deformacion", "elasticidad"]

variables:
  datos: [["un resorte de acero", "elástico"], ["un clip de papel", "plástico"], ["una banda elástica", "elástico"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["elástico", "plástico"]

enunciado: "Si sometemos {datos[idx][0]} a una carga que supera su límite elástico, el comportamiento del material será ___."

explicacion: |
  Si la deformación supera el punto de fluencia, el material entra en el régimen plástico, donde la deformación es permanente.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["punto_de_fluencia", "deformacion_permanente"]

variables:
  datos: [["un clavo siendo doblado con un martillo", "permanente"], ["una goma de borrar", "temporal"], ["un muelle de suspensión", "temporal"]]
  idx: uno_de([0,1,2])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Al aplicar una fuerza sobre {datos[idx][0]}, la deformación resultante es ___."

explicacion: |
  La deformación permanente ocurre cuando el esfuerzo aplicado supera el punto de fluencia del material.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["curva_esfuerzo_deformacion", "etapas"]

respuesta: ["Región elástica", "Punto de fluencia", "Región plástica", "Rotura"]
tipo: ordenar
opciones_explicitas: ["Región elástica", "Punto de fluencia", "Región plástica", "Rotura"]

enunciado: "Ordene las etapas de deformación de un material dúctil desde que se aplica una carga mínima hasta la falla total."

explicacion: |
  Primero el material se deforma elásticamente (recuperable), luego alcanza el punto de fluencia, entra en la zona plástica (permanente) y finalmente se rompe.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "avanzado"
  tags: ["esfuerzo", "calculo"]

variables:
  datos: [["150", "250"], ["300", "450"], ["50", "80"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["250", "450", "80"]

enunciado: "Un cilindro de sección transversal de 100 mm² sufre una fuerza de 25000 N antes de alcanzar su punto de fluencia. El esfuerzo de fluencia es de ___ MPa."

pasos:
  - "Calcular el esfuerzo: $\sigma = F / A$"
  - "$\sigma = 25000 / 100 = 250$ (Nota: el valor de respuesta en la tabla es el objetivo del ejercicio)"

explicacion: |
  El esfuerzo se calcula dividiendo la fuerza entre el área de la sección transversal.
```

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["propiedades"]

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que en la región plástica el material recupera su forma original al retirar la carga?"

explicacion: |
  Falso. La característica principal de la región plástica es que la deformación es irreversible o permanente.
```

## Sección: propiedades-mecanicas-dureza-tenacidad-ductilidad (26 preguntas)

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza", "definicion"]

tipo: mc
opciones_explicitas: ["resistencia a la deformación plástica", "resistencia al rayado o penetración", "resistencia a la rotura", "capacidad de estiramiento"]

enunciado: "La dureza de un material se define como su resistencia a la ___."

respuesta: "resistencia al rayado o penetración"

explicacion: |
  La dureza es la propiedad que indica cuánto se resiste un material a ser rayado, penetrado o deformado superficialmente por otro cuerpo más duro.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["tenacidad", "energia"]

tipo: vf
respuesta: falso

enunciado: "¿Es la tenacidad la capacidad de un material para absorber energía antes de romperse?"

explicacion: |
  La afirmación es verdadera. La tenacidad es la capacidad de un material para absorber energía y deformarse plásticamente antes de la fractura. (Nota: El usuario debe marcar falso si la pregunta se plantea como "La tenacidad es la resistencia al rayado").
  *Corrección de lógica para VF*: Si la pregunta es "¿La tenacidad es la capacidad de absorber energía?", la respuesta es verdadero.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["tenacidad"]

tipo: vf
respuesta: verdadero

enunciado: "La tenacidad se define como la capacidad de un material para absorber energía antes de la fractura."

explicacion: |
  Correcto. Un material tenaz es aquel que puede absorber una gran cantidad de energía (trabajo) antes de romperse, combinando resistencia y ductilidad.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["ductilidad"]

tipo: completar
respuestas_validas: ["ductilidad"]

enunciado: "La capacidad de un material para deformarse plásticamente bajo tensión sin llegar a la rotura, permitiendo su estiramiento en hilos, se denomina ___."

respuesta: "ductilidad"

explicacion: |
  La ductilidad es la propiedad que permite a los materiales (especialmente metales) deformarse permanentemente sin romperse, facilitando procesos como el trefilado.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["relacion_propiedades"]

tipo: mc
opciones_explicitas: ["Dureza", "Tenacidad", "Ductilidad"]

enunciado: "Si un material es capaz de absorber mucha energía antes de romperse, es porque posee una alta ___."

respuesta: "Tenacidad"

explicacion: |
  La tenacidad es el área bajo la curva de esfuerzo-deformación; requiere tanto resistencia como capacidad de deformación plástica.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["ordenar"]

type: ordenar
opciones_explicitas: ["Fragilidad", "Ductilidad", "Maleabilidad"]

respuesta: ["Fragilidad", "Ductilidad", "Maleabilidad"]

enunciado: "Ordene los siguientes conceptos según su capacidad de deformación plástica, desde el que menos se deforma (se rompe súbitamente) hasta el que permite mayor deformación/moldeado:"

explicacion: |
  La fragilidad implica rotura sin deformación previa significativa. La ductilidad permite estiramiento (hilos) y la maleabilidad permite deformación en láminas.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["definiciones", "dureza", "tenacidad"]

enunciado: "Un diamante es extremadamente difícil de rayar, mientras que un trozo de vidrio se rompe fácilmente ante un impacto seco. El diamante presenta una alta ___ y el vidrio una baja ___."

respuestas_validas: ["dureza", "tenacidad"]
respuesta: ["dureza", "tenacidad"]
tipo: completar

explicacion: |
  La dureza es la resistencia de un material a ser rayado o penetrado. La tenacidad es la capacidad de absorber energía antes de la rotura (resistencia al impacto).
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["ductilidad", "frágil"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0, "cobre", "ductil"], [1, "hierro fundido", "frágil"]]

enunciado: "Se analiza un material {datos[escenario_idx][1]}. Al someterlo a una deformación plástica prolongada, este se estira significativamente sin romperse. Por lo tanto, el material es {datos[escenario_idx][2]}."

opciones_explicitas: ["ductil", "frágil"]
respuesta: datos[escenario_idx][2
tipo: mc

explicacion: |
  La ductilidad es la propiedad que permite a un material deformarse plásticamente (estirarse) antes de la fractura.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["verdadero_falso"]

enunciado: "Un material que absorbe mucha energía antes de romperse (alta tenacidad) es necesariamente un material muy duro."

respuesta: falso
tipo: vf

explicacion: |
  No siempre. Un material puede ser muy tenaz (como el acero de baja graduación) pero no ser especialmente duro. La dureza y la tenacidad son propiedades distintas.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["ductilidad", "proceso"]

enunciado: "Ordena el proceso típico de un material dúctil cuando se somete a una carga de tracción creciente:"

opciones_explicitas: ["Deformación elástica", "Deformación plástica", "Estricción", "Fractura"]
respuesta: ["Deformación elástica", "Deformación plástica", "Estricción", "Fractura"]
tipo: ordenar

explicacion: |
  Primero ocurre la deformación elástica (reversible), luego la plástica (permanente), seguida de la estricción (reducción de sección local) y finalmente la fractura.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "avanzado"
  tags: ["tenacidad", "area_bajo_curva"]

variables:
  curva_tipo: uno_de([0, 1])
  curva_datos: [[0, 50, "alta"], [1, 10, "baja"]]

enunciado: "En un ensayo de tracción, la tenacidad se representa mediante el área bajo la curva de esfuerzo-deformación. Si comparamos un material con un área de {curva_datos[curva_tipo][0]} MPa·mm/mm frente a otro con un área de 5 MPa·mm/mm, el primero tiene una tenacidad {curva_datos[curva_tipo][1]}."

opciones_explicitas: ["alta", "baja"]
respuesta: curva_datos[curva_tipo][2
tipo: mc

explicacion: |
  La tenacidad es la integral del esfuerzo respecto a la deformación; a mayor área bajo la curva, mayor es la energía absorbida y, por ende, mayor la tenacidad.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza", "tenacidad", "confusiones"]

enunciado: "Un material que es extremadamente duro (como el diamante) no es necesariamente tenaz. La dureza mide la resistencia al ___ mientras que la tenacidad mide la capacidad de absorber energía antes de la ___."

respuestas_validas: ["rayado", "rotura"]
respuesta: ["rayado", "rotura"]
tipo: completar

explicacion: |
  Es un error común pensar que un material duro es resistente a los impactos. La dureza es resistencia superficial al rayado o penetración, mientras que la tenacidad es la energía total que absorbe un material antes de romperse (relacionada con la tenacidad/fragilidad).
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["ductilidad", "fragilidad"]

variables:
  es_ductil: verdadero

enunciado: "Si un material se deforma significativamente de manera plástica antes de fallar, se dice que es dúctil. Si se rompe de forma repentina con mínima deformación, el material es considerado ___."

opciones_explicitas: ["dúctil", "frágil", "elástico", "tenaz"]
respuesta: "frágil"
tipo: mc

explicacion: |
  La fragilidad es la propiedad opuesta a la ductilidad. Un material frágil (como el vidrio) no permite deformación plástica significativa antes de la fractura.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["relacion_propiedades"]

enunciado: "¿Es posible que un material sea muy duro y, al mismo tiempo, muy tenaz?"

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Falso"
tipo: completar
explicacion: |
  En la mayoría de los metales, existe una relación inversa: al aumentar la dureza (mediante tratamientos térmicos como la templación), generalmente disminuye la tenacidad (el material se vuelve más frágil).
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["deformacion", "ductilidad"]

enunciado: "Ordena los procesos que ocurren en un material dúctil cuando se aplica una carga de tracción progresiva:"

opciones_explicitas: ["Deformación elástica", "Deformación plástica", "Estricción", "Fractura"]
respuesta: ["Deformación elástica", "Deformación plástica", "Estricción", "Fractura"]
tipo: ordenar

explicacion: |
  Primero ocurre la deformación reversible (elástica), luego la permanente (plástica), seguida de la reducción de la sección transversal (estricción) y finalmente la rotura (fractura).
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza", "resistencia"]

variables:
  es_error: verdadero

enunciado: "Si un material resiste muy bien una carga de compresión sin deformarse, pero se raya fácilmente con una lija, ¿es correcto decir que es un material duro? {es_error}"

opciones_explicitas: ["Sí, es correcto", "No, es un error"]
respuesta: "No, es un error"
tipo: mc

explicacion: |
  Confundir resistencia mecánica (capacidad de soportar cargas) con dureza (resistencia al rayado/penetración superficial) es un error conceptual frecuente.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza", "tenacidad"]

tipo: mc
opciones_explicitas: ["La dureza es la resistencia a la deformación plástica, mientras que la tenacidad es la capacidad de absorber energía antes de la rotura.", "La dureza es la capacidad de absorber energía, mientras que la tenacidad es la resistencia al rayado.", "La dureza mide la elasticidad y la tenacidad mide la plasticidad.", "Ambas son sinónimos en materiales cerámicos."]

enunciado: "Al comparar la dureza con la tenacidad, la distinción fundamental radica en que la dureza mide la resistencia a la ___ superficial, mientras que la tenacidad mide la capacidad de absorber energía antes de la ___."

explicacion: |
  La dureza se refiere a la resistencia de un material a ser penetrado o rayado en su superficie. La tenacidad, en cambio, es la capacidad de un material de absorber energía y deformarse plásticamente antes de romperse.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["ductilidad", "fragilidad"]

variables:
  escenario: uno_de([["cobre", "ductil"], ["vidrio", "fragil"]])

tipo: completar
enunciado: "Si un material se comporta como un {escenario[0]}, se dice que posee alta ductilidad, lo que lo distingue de un material {escenario[1]}."

respuesta: escenario[1] == "fragil"

explicacion: |
  Un material dúctil (como el cobre) puede deformarse significativamente bajo tensión antes de fallar. Un material frágil (como el vidrio) se rompe con muy poca deformación plástica.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza"]

tipo: completar
respuestas_validas: ["rayado"]

enunciado: "La dureza se define técnicamente como la resistencia que opone un material a la penetración o al ___."

respuesta: "rayado"

explicacion: |
  La dureza es una propiedad superficial que mide la resistencia de un material a la deformación plástica localizada (como un rayado o una hendidura).
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["dureza", "tenacidad"]

tipo: mc
opciones_explicitas: ["A mayor dureza, generalmente mayor es la tenacidad.", "A mayor dureza, generalmente menor es la tenacidad.", "La dureza y la tenacidad son propiedades idénticas.", "No existe relación entre ambas propiedades."]

enunciado: "En muchos materiales ferrosos, se observa que al aumentar la dureza mediante tratamientos térmicos, la tenacidad tiende a..."

explicacion: |
  Comúnmente existe una relación inversa: los materiales muy duros suelen ser más frágiles (menor tenacidad), mientras que los materiales más blandos suelen ser más tenaces.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["ductilidad", "deformacion"]

tipo: ordenar
opciones_explicitas: ["Deformación elástica", "Deformación plástica", "Rotura del material"]

enunciado: "En un material dúctil, el proceso de deformación mecánica sigue este orden lógico de eventos:"

respuesta: ["Deformación elástica", "Deformación plástica", "Rotura del material"]

explicacion: |
  Primero ocurre la deformación elástica (reversible), luego la deformación plástica (permanente, característica de la ductilidad) y finalmente la fractura o rotura.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza", "tenacidad", "ductilidad"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [
    ["Un diamante es extremadamente difícil de rayar con una lija de carburo.", "dureza"],
    ["Un cable de cobre se estira formando un hilo fino sin romperse.", "ductilidad"],
    ["Un acero de alta calidad absorbe mucha energía antes de fracturarse.", "tenacidad"]
  ]

enunciado: "El material descrito en el escenario: '{datos[escenario_idx][0]}' posee principalmente la propiedad de {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["dureza", "tenacidad", "ductilidad"]

explicacion: |
  La propiedad descrita corresponde a la definición de {datos[escenario_idx][1]}.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["tenacidad", "fractura"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Un cristal de vidrio se rompe instantáneamente al recibir un golpe seco.", "falsa"],
    ["Un polímero elástico absorbe el impacto de una caída sin fragmentarse.", "verdadera"]
  ]

enunciado: "Si un material se rompe de forma súbita ante un impacto sin absorber energía, ¿se puede decir que tiene una alta tenacidad? (Escenario: {casos[caso_idx][0]})"

respuesta: casos[caso_idx][1
tipo: completar
explicacion: |
  La tenacidad es la capacidad de absorber energía antes de la rotura. Si el material se rompe súbitamente, su tenacidad es baja.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["dureza", "rayado"]

variables:
  test_idx: uno_de([0, 1])
  tests: [
    ["Un material A es rayado fácilmente por un clavo de acero.", "baja"],
    ["Un material B no presenta marcas tras ser frotado con acero.", "alta"]
  ]

enunciado: "En el test de rayado, el material presenta una dureza ___ respecto al acero."

respuesta: tests[test_idx][1
tipo: completar
respuestas_validas: ["baja", "alta"]

explicacion: |
  La dureza se define como la resistencia a la deformación plástica localizada (como el rayado).
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "avanzado"
  tags: ["ductilidad", "deformacion"]

variables:
  proceso_idx: uno_de([0, 1, 2])
  procesos: [
    ["El material se deforma plásticamente", "El material cambia de forma", "El material se estira sin romperse"],
    ["El material se deforma plásticamente", "El material cambia de forma", "El material se estira sin romperse"],
    ["El material se deforma plásticamente", "El material cambia de forma", "El material se estira sin romperse"]
  ]

enunciado: "Ordene los pasos que describen el proceso de ductilidad en un metal:"

pasos:
  - "El material se deforma plásticamente"
  - "El material cambia de forma"
  - "El material se estira sin romperse"

respuesta: ["El material se deforma plásticamente", "El material cambia de forma", "El material se estira sin romperse"]
tipo: ordenar
opciones_explicitas: ["El material se deforma plásticamente", "El material cambia de forma", "El material se estira sin romperse"]

explicacion: |
  La ductilidad implica una deformación plástica continua que permite el cambio de forma antes de la rotura.
```

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["tenacidad", "energia"]

variables:
  val_idx: uno_de([0, 1])
  valores: [
    [50, 50],
    [120, 120]
  ]

enunciado: "Si un material absorbe {valores[val_idx][0]} Joules antes de la rotura y otro absorbe {valores[val_idx][0] + 100} Joules, el primero es ___ que el segundo en términos de tenacidad."

respuesta: "menor"
tipo: completar
respuestas_validas: ["menor", "mayor"]

explicacion: |
  A mayor energía absorbida antes de la fractura, mayor es la tenacidad del material.
```
