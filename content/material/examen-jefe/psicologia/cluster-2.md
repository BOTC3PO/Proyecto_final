# Examen jefe — Maestro de la Mente

> Logro #208. Completaste el examen integrador sobre memoria, sesgos y salud mental jefe. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **125 preguntas totales** en 5/5 secciones.

---

## Sección: memoria-y-olvido-represion-inconsciente (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["psicoanalisis", "inconsciente"]

respuesta: verdadero
tipo: vf

enunciado: "En el psicoanálisis, el inconsciente se define como el conjunto de contenidos mentales que, aunque no son accesibles a la conciencia de forma inmediata, ejercen influencia sobre la conducta."

explicacion: |
  Efectivamente, para el psicoanálisis, el inconsciente no es solo lo que "no sabemos", sino una estructura dinámica con contenidos reprimidos que afectan nuestra vida psíquica.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["represion", "defensa"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["un deseo conflictivo", "represión"],
    ["un recuerdo traumático", "represión"]
  ]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["proyección", "sublimación", "represión", "negación"]

enunciado: "Cuando el aparato psíquico expulsa de la conciencia un pensamiento o impulso que resulta intolerable para el yo, está utilizando el mecanismo de la {datos[escenario_idx][0]}."

explicacion: |
  La represión es el proceso mediante el cual se desplazan contenidos de la conciencia al inconsciente para evitar el malestar.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["represion", "terminologia"]

respuesta: ["represión", "olvido", "inconsciente"]
tipo: completar
respuestas_validas: ["represión", "olvido", "inconsciente"]

enunciado: "El proceso de ___ consiste en el desplazamiento de contenidos hacia el ___ para evitar el dolor, lo que genera un ___ que no es por falta de capacidad de almacenamiento, sino por una barrera psíquica."

pasos:
  - "Identificar el mecanismo de defensa."
  - "Identificar el lugar donde se alojan los contenidos."
  - "Identificar la consecuencia en la conciencia."

explicacion: |
  La represión es el mecanismo que envía contenidos al inconsciente, resultando en un olvido que no es amnésico (biológico), sino dinámico (psicológico).
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["inconsciente", "conceptos"]

respuesta: "dinámico"
tipo: mc
opciones_explicitas: ["estático", "dinámico", "pasivo", "inexistente"]

enunciado: "A diferencia de una simple 'falta de conciencia', el inconsciente psicoanalítico es considerado ________ porque está en constante movimiento y lucha con las fuerzas de la conciencia."

explicacion: |
  Se considera dinámico porque los contenidos reprimidos intentan emerger constantemente, generando tensión psíquica.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["proceso", "represion"]

respuesta: ["Conflicto", "Represión", "Síntoma"]
tipo: ordenar
opciones_explicitas: ["Conflicto", "Represión", "Síntoma"]

enunciado: "Ordene la secuencia lógica de la formación de un síntoma desde la perspectiva psicoanalítica:"

explicacion: |
  Primero surge un conflicto (deseo vs. moral), luego el yo utiliza la represión para alejar el deseo, y finalmente el deseo reprimido retorna de forma deformada como un síntoma.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["psicoanalisis", "represion", "inconsciente"]

respuesta: "represion"
tipo: completar
respuestas_validas: ["represion", "represión"]

enunciado: "En el psicoanálisis, cuando un pensamiento o deseo resulta intolerable para el yo, el aparato psíquico utiliza un mecanismo de defensa para alejarlo de la conciencia. Este proceso se denomina ___."

explicacion: |
  La represión es el mecanismo mediante el cual el sujeto desplaza contenidos psíquicos (impulsos, recuerdos traumáticos) hacia el inconsciente para evitar el malestar o la angustia.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "avanzado"
  tags: ["sintoma", "inconsciente", "psicoanalisis"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Un individuo olvida el nombre de una persona que le causó un trauma severo.", "olvido_selectivo"],
    ["Un paciente presenta un lapsus linguae (error al hablar) que revela un deseo reprimido.", "lapsus"]
  ]

respuesta: "casos[caso_idx][1]"
tipo: mc
opciones_explicitas: ["casos[caso_idx][1]", "amnesia anterógrada", "olvido por interferencia", "desatención"]

enunciado: "Analicemos el siguiente escenario: {casos[caso_idx][0]}. Según la teoría psicoanalítica, este fenómeno es una manifestación de:"

explicacion: |
  El síntoma o el error (como el lapsus) es la forma en que el contenido reprimido intenta retornar a la conciencia, aunque sea de manera disfrazada.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["inconsciente", "teoria"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que, para el psicoanálisis, el inconsciente es simplemente un conjunto de recuerdos que la persona ha olvidado por falta de atención o por el paso del tiempo?"

explicacion: |
  Falso. El inconsciente psicoanalítico no es solo "olvido", sino un sistema dinámico de contenidos reprimidos que ejercen presión sobre la conciencia y buscan retornar a través de síntomas.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["proceso", "represion", "conciencia"]

respuesta: ["Conflicto psíquico", "Represión", "Retorno de lo reprimido"]
tipo: ordenar

opciones_explicitas: ["Conflicto psíquico", "Represión", "Retorno de lo reprimido"]

enunciado: "Ordene la secuencia lógica de un proceso de formación de síntoma desde la perspectiva psicoanalítica, partiendo desde la aparición del impulso hasta su manifestación clínica:"

explicacion: |
  1. El conflicto psíquico surge entre el deseo y la defensa.
  2. La represión actúa para alejar el deseo de la conciencia.
  3. El contenido reprimido retorna de forma disfrazada (síntoma, sueño, lapsus).
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["angustia", "defensa", "represion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un trauma infantil es bloqueado por la mente.", "angustia"],
    ["Un deseo prohibido es enviado al inconsciente.", "angustia"]
  ]

respuesta: "escenarios[escenario_idx][1]"
tipo: mc
opciones_explicitas: ["escenarios[escenario_idx][1]", "placer", "olvido absoluto", "memoria episódica"]

enunciado: "Considerando el siguiente caso: {escenarios[escenario_idx][0]}. El motor que activa el mecanismo de defensa es la aparición de la ___."

explicacion: |
  La angustia actúa como una señal de alarma que advierte al Yo sobre la proximidad de un impulso que no puede ser integrado, disparando así la represión.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["psicoanalisis", "represion", "inconsciente"]

respuesta: falso
tipo: vf

enunciado: "Según el concepto de represión en el psicoanálisis, los contenidos reprimidos son recuerdos que han sido borrados permanentemente de la mente y que nunca podrán volver a la conciencia."

explicacion: |
  La represión no es un borrado definitivo, sino un mecanismo de defensa que desplaza los contenidos traumáticos o inaceptables fuera de la conciencia hacia el inconsciente. Sin embargo, estos contenidos siguen activos y pueden emerger a través de sueños, actos fallidos o síntomas.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  tema_secundario: "confusiones_conceptuales"
  nivel: "basico"
  tags: ["inconsciente", "memoria", "confusion"]

variables:
  escenario: uno_de([["un evento traumático", "represión"], ["un dato matemático", "memoria semántica"], ["el nombre de un color", "memoria episódica"]])

respuesta: escenario[0][1
tipo: completar
respuestas_validas: ["represión", "memoria semántica", "memoria episódica"]

enunciado: "Cuando un individuo experimenta un evento traumático que su psiquismo considera inaceptable, el mecanismo de defensa que actúa para alejarlo de la conciencia se denomina ___."

explicacion: |
  Es común confundir el olvido natural o la falla de memoria con la represión. La represión implica una acción activa del aparato psíquico para mantener un contenido fuera de la conciencia debido a su carga afectiva conflictiva.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["inconsciente", "psicoanalisis"]

respuesta: "Los contenidos inconscientes son dinámicos y buscan retornar a la conciencia."
tipo: mc
opciones_explicitas: ["Los contenidos inconscientes son estáticos y no afectan el comportamiento.", "Los contenidos inconscientes son dinámicos y buscan retornar a la conciencia.", "El inconsciente es simplemente una falta de atención momentánea.", "El inconsciente es equivalente a la memoria a corto plazo."]

explicacion: |
  Para el psicoanálisis, el inconsciente no es un depósito pasivo de información olvidada, sino un sistema dinámico donde los contenidos reprimidos luchan constantemente por manifestarse.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["represion", "mecanismos_defensa"]

respuesta: verdadero
tipo: vf

enunciado: "En el marco del psicoanálisis, el olvido por represión se diferencia del olvido fisiológico en que el primero es un proceso activo de defensa del yo."

explicacion: |
  El olvido fisiológico es una falla en la codificación o recuperación de la información, mientras que la represión es un proceso dinámico donde el sujeto "hace" algo para evitar el acceso a un contenido doloroso.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["estructura_psiquica", "inconsciente"]

respuesta: ["Inconsciente", "Preconsciente", "Consciente"]
tipo: ordenar
opciones_explicitas: ["Inconsciente", "Preconsciente", "Consciente"]

enunciado: "Ordene los niveles de la estructura psíquica de Freud, desde el que tiene mayor contenido reprimido (más profundo) hacia el que tiene mayor acceso inmediato a la conciencia:"

explicacion: |
  El modelo topográfico de Freud establece que el Inconsciente es el nivel más profundo y dinámico, el Preconsciente contiene elementos que no están en la conciencia pero pueden ser evocados fácilmente, y la Conciencia es el nivel de percepción inmediata.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["psicoanalisis", "represion", "inconsciente"]

respuesta: "represion"
tipo: "completar"
respuestas_validas: ["represion", "represión"]

enunciado: "Mientras que el olvido común es un proceso de pérdida de información por falta de consolidación o interferencia, la ________ es un mecanismo de defensa que consiste en la expulsión de contenidos dolorosos de la conciencia hacia el inconsciente."

explicacion: |
  La represión es un proceso dinámico donde el yo intenta mantener fuera de la conciencia aquellos pensamientos o impulsos que resultan inaceptables o angustiantes.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["inconsciente", "represion"]

variables:
  es_inconsciente: true

respuesta: es_inconsciente
tipo: "vf"

enunciado: "Según el psicoanálisis, los contenidos reprimidos permanecen en el inconsciente y pueden manifestarse a través de síntomas o sueños, manteniendo su carga afectiva."

explicacion: |
  Correcto. El contenido reprimido no es simplemente "olvidado", sino que permanece activo en la psique, buscando una vía de expresión.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "avanzado"
  tags: ["inconsciente", "preconsciente", "freud"]

opciones_explicitas: ["El preconsciente es accesible con esfuerzo, mientras que el inconsciente es inaccesible por naturaleza.", "El inconsciente es solo memoria a corto plazo.", "El preconsciente y el inconsciente son términos sin distinción funcional."]

respuesta: opciones_explicitas[0
tipo: "mc"

enunciado: "¿Cuál es la principal distinción entre el contenido preconsciente y el contenido inconsciente en la teoría freudiana?"

explicacion: |
  El preconsciente contiene información que no está en la conciencia en este momento pero que puede ser recuperada fácilmente (como un número de teléfono), mientras que el inconsciente contiene contenidos reprimidos de difícil acceso.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["mecanismos_de_defensa", "represion"]

variables:
  escenario: uno_de(["angustia", "conflicto"])
  escenario_desc: uno_de(["la angustia", "el conflicto"])

respuesta: "represion"
tipo: "completar"
respuestas_validas: ["represion", "represión"]

enunciado: "Cuando un individuo experimenta {escenario} debido a un {escenario_desc} entre un impulso y una norma moral, el yo utiliza la ________ para evitar el malestar."

pasos:
  - "Identificar el conflicto psíquico."
  - "Reconocer la función de defensa del yo."

explicacion: |
  La represión actúa como un escudo ante la angustia que produciría la consciencia de un deseo incompatible con la moralidad.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["procesos", "inconsciente", "represion"]

opciones_explicitas: ["Represión -> Inconsciente -> Síntoma", "Olvido -> Conciencia -> Recuerdo", "Represión -> Conciencia -> Olvido"]

respuesta: opciones_explicitas[0
tipo: "ordenar"

enunciado: "Ordene la secuencia lógica del proceso dinámico que explica cómo un trauma se manifiesta en la clínica psicoanalítica:"

explicacion: |
  El proceso comienza con la represión del trauma (envío al inconsciente), lo que genera un conflicto que finalmente se manifiesta a través de un síntoma.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["psicoanalisis", "represion", "inconsciente"]

variables:
  escenario: uno_de([
    ["Un trauma infantil severo que el sujeto no recuerda pero que genera ansiedad constante.", "represion"],
    ["Un nombre olvidado momentáneamente durante una conversación.", "olvido_comun"],
    ["La incapacidad de recordar un evento traumático por una lesión cerebral.", "amnesia_organica"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["represion", "olvido_comun", "amnesia_organica"]

enunciado: "En un proceso psicoanalítico, si un sujeto presenta {escenario[idx][0]}, el mecanismo de defensa que ha actuado para mantener ese contenido fuera de la conciencia es la ___."

explicacion: |
  La represión es un mecanismo de defensa que consiste en excluir de la conciencia aquellos pensamientos, impulsos o recuerdos que resultan perturbadores o dolorosos para el yo.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["inconsciente", "teoria_psicoanalitica"]

respuesta: verdadero
tipo: vf

enunciado: "Desde la perspectiva psicoanalítica, el inconsciente es un sistema dinámico que contiene contenidos mentales (deseos, impulsos, recuerdos reprimidos) que, aunque inaccesibles a la conciencia de forma directa, ejercen influencia en la conducta y la vida psíquica."

explicacion: |
  Para el psicoanálisis, el inconsciente no es solo un depósito pasivo, sino un sistema activo que presiona constantemente hacia la conciencia.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "avanzado"
  tags: ["retorno_de_lo_reprimido", "sintoma"]

variables:
  caso: uno_de([
    ["Un lapsus linguae (error al hablar) que revela un deseo oculto.", "lapsus"],
    ["Un sueño recurrente con un tema conflictivo.", "sueño"],
    ["Un síntoma físico sin causa médica aparente.", "sintoma"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][0
tipo: completar
respuestas_validas: ["lapsus", "sueño", "sintoma"]

enunciado: "Cuando un contenido reprimido intenta manifestarse en la conciencia de forma distorsionada, se produce el 'retorno de lo reprimido'. Un ejemplo de esto es el ___."

explicacion: |
  Los lapsus, los sueños y los síntomas son formas en las que el contenido inconsciente logra burlar la censura para manifestarse.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["olvido", "represion"]

variables:
  comparacion: uno_de([
    ["El olvido es un proceso de pérdida de información, mientras que la represión es un proceso de exclusión activa.", "A"],
    ["El olvido es un proceso de exclusión activa, mientras que la represión es un proceso de pérdida de información.", "B"]
  ])
  idx: uno_de([0, 1])

respuesta: comparacion[idx][0
tipo: mc
opciones_explicitas: ["A", "B"]

enunciado: "Respecto a la distinción entre olvido y represión, es correcto afirmar que: {comparacion[idx][0]}."

explicacion: |
  El olvido suele ser un fallo en la recuperación o almacenamiento, mientras que la represión implica una lucha del Yo contra un impulso que busca ser reprimido.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "avanzado"
  tags: ["metodo_psicoanalitico", "secuencia"]

respuesta: ["Conflicto", "Represión", "Manifestación"]
tipo: ordenar
opciones_explicitas: ["Conflicto", "Represión", "Manifestación"]

enunciado: "Ordene la secuencia lógica de la formación de un síntoma desde la perspectiva del conflicto psíquico:"

pasos:
  - "El conflicto surge entre el impulso y la defensa."
  - "La defensa actúa para mantener el impulso fuera de la conciencia."
  - "El contenido reprimido aparece de forma distorsionada."

explicacion: |
  La secuencia implica: 1. Conflicto (impulso vs censura), 2. Represión (la acción de excluir) y 3. Manifestación (el síntoma o retorno de lo reprimido).
```

## Sección: psicologia-cognitiva-percepcion-memoria-atencion (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_percepcion"
  nivel: "basico"
  tags: ["percepcion", "procesos_mentales"]

respuesta: "percepción"
tipo: completar
respuestas_validas: ["percepción", "percepcion"]

enunciado: "El proceso mediante el cual el cerebro organiza e interpreta la información sensorial para darle un significado es la ___."

explicacion: |
  La percepción no es solo recibir estímulos (sensación), sino el proceso cognitivo de interpretación de esos datos.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_memoria"
  nivel: "basico"
  tags: ["memoria", "modelo_multialmacen"]

opciones_explicitas: ["Memoria Sensorial", "Memoria a Corto Plazo", "Memoria a Largo Plazo"]
respuesta: "Memoria a Corto Plazo"
tipo: mc

enunciado: "Según el modelo de Atkinson y Shiffrin, el sistema que permite retener una cantidad limitada de información durante un periodo breve es la ___."

explicacion: |
  La memoria a corto plazo actúa como un espacio de trabajo temporal antes de que la información sea consolidada en la memoria a largo plazo.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_atencion"
  nivel: "intermedio"
  tags: ["atencion", "foco"]

respuesta: verdadero
tipo: vf

enunciado: "¿La atención selectiva es la capacidad de concentrarse en un estímulo específico ignorando otros estímulos irrelevantes?"

explicacion: |
  Efectivamente, la atención selectiva permite filtrar la información para evitar la sobrecarga cognitiva.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_memoria"
  nivel: "intermedio"
  tags: ["codificacion", "almacenamiento", "recuperacion"]

opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]
respuesta: ["Codificación", "Almacenamiento", "Recuperación"]
tipo: ordenar

enunciado: "Ordene las fases del proceso de memoria desde la entrada del estímulo hasta su salida:"

explicacion: |
  El ciclo de la memoria requiere primero transformar el estímulo (codificación), guardarlo (almacenamiento) y luego acceder a él (recuperación).
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_aprendizaje"
  nivel: "basico"
  tags: ["aprendizaje", "cambio"]

variables:
  escenario: uno_de([[0, "cambio en la conducta"], [1, "cambio en la estructura"]])

respuesta: tabla_respuestas[escenario][1
tipo: mc

opciones_explicitas: ["Cambio en la conducta", "Cambio en la estructura"]

pasos:
  - "Identificar la definición clásica de aprendizaje."

enunciado: "En psicología cognitiva, el aprendizaje se define fundamentalmente como un ___."

variables_auxiliares:
  tabla_respuestas: [["Cambio en la conducta", "Cambio en la conducta"], ["Cambio en la estructura", "Cambio en la estructura"]]

explicacion: |
  El aprendizaje implica un cambio relativamente permanente en la conducta o en las representaciones mentales como resultado de la experiencia.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_trabajo"
  nivel: "intermedio"
  tags: ["cognicion", "memoria"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["El sujeto debe retener una secuencia de números para realizar una operación mental.", "retener"],
    ["El sujeto debe manipular mentalmente una lista de palabras para categorizarlas.", "manipular"]
  ]

enunciado: "Un estudiante está realizando una tarea de {datos[escenario_idx][0]}. En este proceso, la capacidad de mantener la información activa para su procesamiento inmediato se denomina memoria de trabajo. La función principal de este componente es ___ la información."

respuestas_validas: ["manipular", "procesar"]
respuesta: "manipular"
tipo: completar

explicacion: |
  La memoria de trabajo no es solo un almacén pasivo, sino un sistema dinámico que permite la manipulación de la información necesaria para tareas cognitivas complejas.
```

```
metadata:
  materia: "psicologia"
  tema: "percepcion_procesamiento"
  nivel: "intermedio"
  tags: ["percepcion", "atencion"]

variables:
  caso_idx: uno_de([0, 1])
  ejemplos: [
    ["Ver una mancha roja en un papel blanco y reconocerla como una manzana debido a la experiencia previa.", "top-down"],
    ["Detectar el color rojo de un objeto basándose únicamente en la estimulación de los fotorreceptores.", "bottom-up"]
  ]

enunciado: "Analicemos el siguiente caso: {ejemplos[caso_idx][0]}. Este tipo de procesamiento, donde los conocimientos previos y las expectativas influyen en la interpretación de los estímulos, se denomina procesamiento ___."

opciones_explicitas: ["top-down", "bottom-up", "perceptual", "sensorial"]
respuesta: "top-down"
tipo: mc

explicacion: |
  El procesamiento top-down (de arriba hacia abajo) ocurre cuando nuestros procesos cognitivos de alto nivel (conocimiento, expectativas) guían la percepción de los estímulos sensoriales.
```

```
metadata:
  materia: "psicologia"
  tema: "atencion_selectiva"
  nivel: "basico"
  tags: ["atencion", "interferencia"]

enunciado: "En el Test de Stroop, se presenta la palabra 'AZUL' escrita en tinta de color rojo. El sujeto debe decir el color de la tinta, no leer la palabra. Esto genera una interferencia porque la lectura es un proceso automático que compite con la atención selectiva al color. ¿Es verdadero que este fenómeno demuestra la existencia de procesos automáticos que interfieren con procesos controlados?"

respuesta: verdadero
tipo: vf

explicacion: |
  El efecto Stroop es un ejemplo clásico de cómo la automatización de procesos (como la lectura) puede dificultar la ejecución de una tarea controlada (nombrar el color).
```

```
metadata:
  materia: "psicologia"
  tema: "aprendizaje_memoria"
  nivel: "avanzado"
  tags: ["aprendizaje", "codificacion"]

enunciado: "Para que un aprendizaje sea consolidado, la información debe atravesar una serie de etapas secuenciales. Ordene el proceso desde que el estímulo llega al sistema hasta que se estabiliza en la memoria a largo plazo:"

opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]
respuesta: ["Codificación", "Almacenamiento", "Recuperación"]
tipo: ordenar

explicacion: |
  El proceso de memoria sigue una secuencia lógica: primero se codifica la información (transformación del estímulo), luego se almacena (mantenimiento) y finalmente se recupera (acceso a la información).
```

```
metadata:
  materia: "psicologia"
  tema: "modelos_memoria"
  nivel: "intermedio"
  tags: ["memoria", "procesamiento"]

variables:
  tarea_idx: uno_de([0, 1])
  escenarios: [
    ["un número de teléfono que se repite mentalmente por 5 segundos", "sensorial"],
    ["el nombre de una persona que acabas de conocer y mantienes en mente brevemente", "sensorial"]
  ]

enunciado: "Un sujeto está realizando la siguiente acción: {escenarios[tarea_idx][0]}. Si el sujeto no presta atención a este estímulo, la información se pierde casi instantáneamente de la memoria ___."

opciones_explicitas: ["sensorial", "a corto plazo", "a largo plazo", "semántica"]
respuesta: "sensorial"
tipo: mc

explicacion: |
  La memoria sensorial es el primer nivel de procesamiento; retiene la información física del estímulo por un tiempo extremadamente breve (milisegundos a segundos) antes de que pase a la memoria de corto plazo mediante la atención.
```

```
metadata:
  materia: "psicologia"
  tema: "percepcion_sensacion"
  nivel: "basico"
  tags: ["percepcion", "procesos_mentales"]

respuesta: falso
tipo: vf

enunciado: "La percepción es un proceso puramente fisiológico que ocurre exclusivamente en los órganos sensoriales, sin intervención de los procesos mentales superiores."

explicacion: |
  La sensación es el proceso fisiológico de captar estímulos, mientras que la percepción es el proceso psicológico de organizar e interpretar dicha información sensorialmente captada.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_procesos"
  nivel: "intermedio"
  tags: ["memoria", "errores_comunes"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0, "memoria_sensorial"], [1, "memoria_de_trabajo"]]

opciones_explicitas: ["memoria_sensorial", "memoria_de_trabajo", "memoria_a_largo_plazo", "memoria_episodica"]

respuesta: datos[escenario_idx][1
tipo: mc

enunciado: "Si una persona es capaz de retener una imagen visual por apenas unos milisegundos antes de que se desvanezca, está utilizando la {datos[escenario_idx][0]}."

explicacion: |
  La memoria sensorial es el sistema que retiene la información sensorial por un periodo muy breve (milisegundos) antes de que sea procesada o perdida.
```

```
metadata:
  materia: "psicologia"
  tema: "atencion_selectiva"
  nivel: "intermedio"
  tags: ["atencion", "filtro"]

respuesta: "El filtro atencional"
tipo: completar
respuestas_validas: ["El filtro atencional", "Filtro atencional", "filtro atencional"]

enunciado: "En el modelo de atención de Broadbent, la capacidad de procesar solo una parte de la información sensorial mientras se ignoran otros estímulos se debe a la existencia de ___."

explicacion: |
  El modelo de filtro sugiere que existe un mecanismo que selecciona la información relevante y bloquea el resto para evitar la sobrecarga cognitiva.
```

```
metadata:
  materia: "psicologia"
  tema: "aprendizaje_procesamiento"
  nivel: "avanzado"
  tags: ["aprendizaje", "memoria"]

opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]
respuesta: ["Codificación", "Almacenamiento", "Recuperación"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas necesarias para que un proceso de aprendizaje sea efectivo en el sistema de memoria:"

explicacion: |
  El aprendizaje requiere primero codificar la información, luego almacenarla en la memoria y, finalmente, ser capaz de recuperarla cuando sea necesario.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_reconstruccion"
  nivel: "intermedio"
  tags: ["memoria", "errores"]

respuesta: "falso"
tipo: completar
enunciado: "La memoria humana funciona como una grabación de video exacta que permite reproducir los eventos pasados sin alteraciones ni distorsiones."

explicacion: |
  La memoria es un proceso reconstructivo, no reproductivo. Esto significa que cada vez que recordamos, reconstruimos la información, lo que la hace susceptible a errores, sesgos y falsos recuerdos.
```

```
metadata:
  materia: "psicologia"
  tema: "percepcion_sensacion"
  nivel: "basico"
  tags: ["percepcion", "sensacion", "procesos_mentales"]

tipo: mc
opciones_explicitas: ["La sensación es la interpretación de los estímulos, mientras que la percepción es la recepción de energía física.", "La percepción es la interpretación de los estímulos, mientras que la sensación es la recepción de energía física.", "Ambos términos son sinónimos en la psicología cognitiva.", "La sensación requiere procesos cognitivos superiores y la percepción es puramente fisiológica."]

respuesta: "La percepción es la interpretación de los estímulos, mientras que la sensación es la recepción de energía física."

enunciado: "En psicología cognitiva, ¿cuál es la distinción fundamental entre sensación y percepción?"

explicacion: |
  La sensación es el proceso fisiológico de recibir estímulos a través de los receptores sensoriales, mientras que la percepción es el proceso psicológico de organizar e interpretar esa información para darle significado.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_cognitiva"
  nivel: "intermedio"
  tags: ["memoria", "atencion", "carga_cognitiva"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["estudiar para un examen final", "recordar el número de teléfono de un amigo"], ["mantener la información activa para resolver un problema inmediato", "almacenar información de forma permanente para su recuperación futura"]]

tipo: completar
respuestas_validas: ["memoria de trabajo", "memoria a largo plazo"]
respuesta: escenarios[escenario_idx][0

enunciado: "Si una persona está {escenarios[escenario_idx][0]}, el proceso mental predominante que está utilizando para gestionar esa información temporalmente es la ___."

explicacion: |
  La memoria de trabajo es un sistema de capacidad limitada que mantiene y manipula la información necesaria para tareas cognitivas complejas en el momento presente.
```

```
metadata:
  materia: "psicologia"
  tema: "atencion_procesos"
  nivel: "basico"
  tags: ["atencion", "filtro", "multitarea"]

tipo: vf
respuesta: falso

enunciado: "¿Es cierto que la atención dividida es la capacidad de procesar un único estímulo de manera profunda mientras se ignoran otros estímulos irrelevantes?"

explicacion: |
  Falso. La capacidad de enfocarse en un solo estímulo ignorando otros es la atención selectiva. La atención dividida es la capacidad de procesar múltiples fuentes de información o realizar dos o más tareas simultáneamente.
```

```
metadata:
  materia: "psicologia"
  tema: "aprendizaje_conductual"
  nivel: "intermedio"
  tags: ["aprendizaje", "condicionamiento", "conducta"]

tipo: mc
opciones_explicitas: ["El clásico se basa en la asociación de estímulos, mientras que el operante se basa en las consecuencias de la conducta.", "El operante se basa en la asociación de estímulos, mientras que el clásico se basa en las consecuencias de la conducta.", "El clásico requiere refuerzos para ocurrir, mientras que el operante es automático.", "Ambos requieren la presencia de un estímulo incondicionado."]

respuesta: "El clásico se basa en la asociación de estímulos, mientras que el operante se basa en las consecuencias de la conducta."

enunciado: "Al comparar ambos procesos, ¿qué distingue fundamentalmente al condicionamiento operante del condicionamiento clásico?"

explicacion: |
  En el condicionamiento clásico, el sujeto es pasivo y aprende por asociación de estímulos; en el operante, el sujeto es activo y la probabilidad de la conducta cambia según las consecuencias (refuerzos o castigos) que le siguen.
```

```
metadata:
  materia: "psicologia"
  tema: "procesamiento_informacion"
  nivel: "avanzado"
  tags: ["memoria", "codificacion", "recuperacion"]

tipo: ordenar
opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]
respuesta: ["Codificación", "Almacenamiento", "Recuperación"]

enunciado: "Ordene cronológicamente las etapas del proceso de memoria según el modelo de procesamiento de la información:"

explicacion: |
  El proceso comienza con la codificación (transformación del estímulo en un código mental), seguido del almacenamiento (mantenimiento de la información en el sistema) y finaliza con la recuperación (acceso a la información almacenada).
```

```
metadata:
  materia: "psicologia"
  tema: "atencion_selectiva"
  nivel: "intermedio"
  tags: ["atencion", "percepcion"]

variables:
  datos: [["Estás en una fiesta ruidosa y logras seguir la conversación de tu amigo", "atencion_selectiva"], ["Estás leyendo un libro y de repente escuchas tu nombre a lo lejos", "atencion_involuntaria"], ["Estás buscando tus llaves en una mesa desordenada", "atencion_sostenida"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["atencion_selectiva", "atencion_involuntaria", "atencion_sostenida"]

enunciado: "En el escenario donde {datos[idx][0]}, el proceso cognitivo predominante es la {___}."

explicacion: |
  La atención selectiva permite filtrar estímulos irrelevantes para concentrarse en uno específico, como en el efecto 'cocktail party'.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_trabajo"
  nivel: "intermedio"
  tags: ["memoria", "carga_cognitiva"]

variables:
  datos: [["7", "7"], ["12", "12"], ["45", "45"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][0]
tipo: completar
respuestas_validas: ["7", "12", "45"]

enunciado: "Si un sujeto debe retener el número ___ en su memoria de trabajo mientras realiza una tarea secundaria, el número de elementos es el límite de la capacidad de procesamiento inmediato."

explicacion: |
  La memoria de trabajo tiene una capacidad limitada (el número mágico de Miller es 7 ± 2), pero el ejercicio pide el valor específico del escenario.
```

```
metadata:
  materia: "psicologia"
  tema: "percepcion_procesamiento"
  nivel: "avanzado"
  tags: ["percepcion", "procesamiento"]

variables:
  datos: [["reconocer una cara por sus rasgos físicos", "bottom_up"], ["interpretar una sombra como un animal por miedo", "top_down"]]
  idx: uno_de([0,1])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Si el sujeto está interpretando una sombra como un animal debido a sus expectativas o estados emocionales previos, el procesamiento es de tipo {datos[idx][1]}."

explicacion: |
  El procesamiento Top-down (de arriba hacia abajo) ocurre cuando los conocimientos previos, expectativas o motivaciones influyen en la percepción.
```

```
metadata:
  materia: "psicologia"
  tema: "aprendizaje_memoria"
  nivel: "intermedio"
  tags: ["aprendizaje", "memoria"]

respuesta: ["Codificación", "Almacenamiento", "Recuperación"]
tipo: ordenar

enunciado: "Ordena correctamente las etapas del proceso de memoria que permiten el aprendizaje de una nueva habilidad:"

explicacion: |
  Para que ocurra el aprendizaje, la información debe ser codificada (transformada), almacenada (mantenida) y finalmente recuperada (evocada).
```

```
metadata:
  materia: "psicologia"
  tema: "percepcion_reconocimiento"
  nivel: "basico"
  tags: ["percepcion", "gestalt"]

variables:
  datos: [["una letra 'A' formada por líneas separadas", "ley_cierre"], ["un círculo perfecto", "ley_continuidad"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ley_cierre", "ley_continuidad", "ley_figura_fondo"]

enunciado: "Si el sujeto percibe {datos[idx][0]} como una unidad completa a pesar de que los elementos no estén conectados, está aplicando la {datos[idx][1]}."

explicacion: |
  La Ley de Cierre de la Gestalt establece que nuestra mente tiende a completar figuras incompletas para darles sentido.
```

## Sección: psicologia-modernidad-y-el-yo (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["sujeto", "modernidad", "individualismo"]

respuesta: "individualismo"
tipo: mc
opciones_explicitas: ["colectivismo", "individualismo", "dualismo", "determinismo"]

enunciado: "La modernidad promovió la idea de que la identidad se construye a partir de un ___ creciente, desplazando las identidades grupales o estamentales."

explicacion: |
  La modernidad se caracteriza por el surgimiento del individuo como unidad básica de la sociedad, con derechos y una conciencia propia, separada de su comunidad o estamento.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["historia", "sujeto"]

respuesta: falso

tipo: vf

enunciado: "La noción de un 'yo' o sujeto individual y autónomo es una construcción histórica que se consolidó con la modernidad, y no ha existido de la misma forma en todas las épocas de la humanidad."

explicacion: |
  Históricamente, en muchas culturas premodernas, la identidad estaba definida por el rol social, la familia o la religión, y no por una esencia interna e individualista.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["autonomia", "razon"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["autonomía", "razón"], ["colectividad", "tradición"]]

respuesta: datos[escenario_idx][0
tipo: completar
respuestas_validas: ["autonomía", "razón"]

enunciado: "En el pensamiento moderno, el sujeto se define por su capacidad de ___ y su capacidad de actuar según su propia ________."

explicacion: |
  La modernidad sitúa a la razón y la autonomía como los pilares que permiten al individuo desprenderse de las imposiciones externas para ser dueño de sus actos.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["historia", "orden"]

respuesta: ["Sujeto comunitario/estamental", "Sujeto racional/moderno", "Sujeto fragmentado/posmoderno"]
tipo: ordenar
opciones_explicitas: ["Sujeto comunitario/estamental", "Sujeto racional/moderno", "Sujeto fragmentado/posmoderno"]

enunciado: "Ordene cronológicamente la evolución de la noción de identidad/sujeto en la historia occidental:"

explicacion: |
  La historia muestra una transición desde la identidad fija por pertenencia grupal, pasando por el individuo soberano de la modernidad, hasta la identidad fluida y múltiple de la posmodernidad.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["introspeccion", "conciencia"]

respuesta: 1

tipo: mc
opciones_explicitas: [0, 1]

enunciado: "En el contexto de la modernidad, ¿es la introspección una herramienta fundamental para el descubrimiento del 'yo' interior?\n(0 = No, 1 = Sí)"

explicacion: |
  La modernidad fomenta la idea de que el sujeto puede conocerse a sí mismo mediante la observación de sus propios procesos mentales y sentimientos internos.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["historia", "modernidad", "subjetividad"]

variables:
  periodo_transicion: uno_de(["Edad Media", "Renacimiento", "Edad Moderna"])
  concepto_yo: uno_de(["colectivo", "individual", "divino"])

respuesta: periodo_transicion == "Renacimiento" && concepto_yo == "individual"
tipo: completar
enunciado: "En la transición de la Edad Media al {periodo_transicion}, la noción de identidad se desplaza desde un sentido {concepto_yo} hacia la idea de un sujeto autónomo."

explicacion: |
  Históricamente, la modernidad marca el paso de un sujeto definido por su posición en un orden social y religioso (colectivo) a un 'yo' centrado en la introspección y la autonomía individual.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["filosofia", "subjetividad"]

variables:
  filosofo: uno_de(["Descartes", "Spinoza", "Locke"])
  premisas: [["Pienso, luego existo", "el yo es una ilusión"], ["Pienso, luego existo", "el yo es social"], ["El yo es una construcción", "el yo es una ilusión"]]

respuesta: premisas[0][0
tipo: mc

opciones_explicitas: ["Pienso, luego existo", "El yo es una construcción social", "El yo es una ilusión", "El yo es una función del lenguaje"]

enunciado: "Consideremos el caso del pensamiento de {filosofo}. Si aplicamos su método de duda metódica para encontrar una base sólida para el conocimiento, la conclusión fundamental sobre el 'yo' es: ___"

pasos:
  - "Dudar de todo lo que pueda ser falso."
  - "Encontrar una verdad que sea indudable."
  - "Identificar el acto de dudar como prueba de la existencia del sujeto."

explicacion: |
  Descartes establece que el acto de pensar requiere un sujeto que piense, consolidando la idea del 'yo' como una entidad separada y racional.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["historia", "identidad"]

respuesta: ["Identidad colectiva/estamental", "Identidad basada en la razón", "Identidad psicológica/subjetiva"]
tipo: ordenar

opciones_explicitas: ["Identidad colectiva/estamental", "Identidad basada en la razón", "Identidad psicológica/subjetiva"]

enunciado: "Ordena cronológicamente la evolución de la noción de 'yo' desde la pre-modernidad hasta la consolidación de la subjetividad moderna:"

explicacion: |
  La trayectoria va desde la pertenencia a un grupo/estamento, pasando por la razón ilustrada, hasta llegar al énfasis moderno en la psique y la historia personal.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["postmodernidad", "sujeto"]

variables:
  escenario: uno_de(["identidad_fija", "identidad_fluida"])
  caracteristica: uno_de(["estable y esencial", "cambiante y construida"])

respuesta: escenario == "identidad_fluida"

tipo: completar

enunciado: "En la modernidad tardía y la posmodernidad, el 'yo' deja de ser visto como una entidad ___ y pasa a entenderse como algo ___."

respuestas_validas: ["estable y esencial", "cambiante y construida"]

explicacion: |
  La modernidad temprana creía en un 'yo' esencial y permanente; la visión contemporánea lo entiende como un proceso dinámico y situado.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["autonomia", "moral"]

variables:
  caso_sujeto: uno_de(["sujeto_autonomo", "sujeto_heteronomo"])

respuesta: caso_sujeto == "sujeto_autonomo"
tipo: mc

opciones_explicitas: ["Sujeto autónomo", "Sujeto heterónomo", "Sujeto colectivo", "Sujeto biológico"]

enunciado: "Si un individuo toma decisiones basadas exclusivamente en sus propias leyes internas y su razón, independientemente de las presiones externas, estamos ante un modelo de: ___"

explicacion: |
  La noción de autonomía es el pilar del 'yo' moderno: la capacidad del sujeto para ser legislador de su propia conducta.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["historia", "subjetividad", "modernidad"]

tipo: mc
opciones_explicitas: ["La noción de un 'yo' individual y autónomo es una construcción histórica de la modernidad.", "El concepto de 'yo' ha sido inmutable y constante en toda la historia de la humanidad.", "El 'yo' es una entidad biológica que no depende de contextos culturales.", "La psicología moderna descubrió el 'yo', pero este siempre existió de la misma forma."]

enunciado: "Un error común es creer que la experiencia de la individualidad es una constante biológica. Sin embargo, la noción de un 'yo' centrado en la autonomía y la introspección es:"

respuesta: "La noción de un 'yo' individual y autónomo es una construcción histórica de la modernidad."

explicacion: |
  La modernidad, con el giro subjetivo (Descartes, etc.), consolidó la idea de un sujeto separado del cosmos y de la comunidad, algo que no era la norma en las cosmologías pre-modernas.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["subjetividad", "esencia"]

tipo: vf

enunciado: "Desde la perspectiva de la psicología moderna y la construcción del sujeto, se considera que el 'yo' es una esencia inmutable y preexistente que la psicología debe 'descubrir'."

respuesta: falso

explicacion: |
  La psicología moderna entiende al 'yo' como un proceso dinámico y una construcción, no como una esencia fija o una sustancia metafísica que permanece igual a lo largo de la vida.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["historia", "subjetividad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["La subjetividad pre-moderna", "La subjetividad moderna"],
    ["Se basaba en el lugar social y el orden cósmico.", "Se basa en la introspección y la autonomía individual."]
  ]

tipo: ordenar
opciones_explicitas: ["La subjetividad pre-moderna", "La subjetividad moderna"]
respuesta: ["La subjetividad pre-moderna", "La subjetividad moderna"]

enunciado: "Ordene cronológicamente los modelos de subjetividad según la evolución histórica del concepto de 'yo':"

pasos:
  - "Identifique el modelo basado en la pertenencia a un orden social/cósmico."
  - "Identifique el modelo basado en la autonomía del individuo."

explicacion: |
  En la pre-modernidad, el sujeto se definía por su lugar en un orden dado (Dios, la naturaleza, la comunidad). La modernidad desplaza ese centro hacia el individuo autónomo.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["errores_conceptuales", "cultura"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["un sujeto medieval", "un sujeto contemporáneo"],
    ["se define por su rol en la comunidad y la tradición.", "se define por su identidad personal y deseos internos."]
  ]

tipo: completar
respuestas_validas: ["se define por su rol en la comunidad y la tradición.", "se define por su identidad personal y deseos internos."]
respuesta: casos[caso_idx][1

enunciado: "Para entender el error de la universalización del 'yo', comparemos: mientras que ___ , ___"

explicacion: |
  Confundir la psicología moderna con una verdad universal es un error: lo que hoy llamamos 'identidad' es un producto de la modernidad y no necesariamente una constante humana universal.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["modernidad", "sujeto"]

tipo: mc
opciones_explicitas: ["La idea de un 'yo' totalmente aislado de la cultura.", "La idea de que el 'yo' es una construcción social e histórica.", "La idea de que el 'yo' es una entidad puramente biológica.", "La idea de que la psicología no tiene relación con la historia."]

enunciado: "Un error conceptual frecuente en la psicología es tratar al sujeto como si su identidad fuera independiente de su contexto histórico. Esto implica ignorar que el 'yo' es:"

respuesta: "La idea de que el 'yo' es una construcción social e histórica."

explicacion: |
  La noción de individuo es un producto histórico. No se puede estudiar la psicología ignorando que las categorías de 'persona' y 'sujeto' cambian según la época.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["modernidad", "identidad", "historia_psicologia"]

respuesta: "individualismo"
tipo: "completar"
respuestas_validas: ["individualismo"]

enunciado: "Mientras que en la era premoderna la identidad estaba definida por el estatus social y el grupo, la modernidad introdujo la noción de un yo basado en el ___________."

explicacion: |
  La modernidad desplazó la identidad colectiva (estatus, linaje, gremio) hacia una identidad centrada en el individuo autónomo y su subjetividad interna.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["autonomia", "sujeto"]

respuesta: "verdadero"
tipo: "vf"

enunciado: "La noción moderna de 'yo' presupone que el individuo es un agente autónomo capaz de autogobernarse, diferenciándose de la visión medieval donde el orden era dictado por la tradición y la divinidad."

explicacion: |
  La autonomía es un pilar de la modernidad; el sujeto se reconoce como origen de sus propias leyes y decisiones.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["identidad", "comparacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["identidad colectiva", "identidad individual"],
    ["orden social estático", "orden social dinámico"]
  ]

respuesta: datos[escenario_idx][1
tipo: "mc"
opciones_explicitas: ["identidad colectiva", "identidad individual", "orden social estático", "orden social dinámico"]

enunciado: "En el contexto de la transición a la modernidad, el cambio fundamental radica en el paso de una {datos[escenario_idx][0]} a una {datos[escenario_idx][1]}."

explicacion: |
  El paso de lo colectivo a lo individual es el núcleo del cambio en la construcción del 'yo' moderno.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["procesos", "historia"]

respuesta: ["Identidad colectiva/estática", "Surgimiento del individuo", "Autonomía del yo moderno"]
tipo: "ordenar"
opciones_explicitas: ["Identidad colectiva/estática", "Surgimiento del individuo", "Autonomía del yo moderno"]

enunciado: "Ordene cronológicamente la evolución de la noción de identidad según el proceso de modernización:"

explicacion: |
  La secuencia lógica parte de la pertenencia al grupo, pasa por el proceso de individuación y culmina en la autonomía del sujeto moderno.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["tradicion", "modernidad"]

respuesta: "La modernidad enfatiza la subjetividad interna, mientras que la tradición enfatiza el rol social externo."
tipo: "mc"
opciones_explicitas: ["La modernidad enfatiza la subjetividad interna, mientras que la tradición enfatiza el rol social externo.", "La tradición enfatiza la subjetividad interna, mientras que la modernidad enfatiza el rol social externo.", "Ambos conceptos consideran que la identidad es puramente externa.", "La modernidad y la tradición son conceptos idénticos en la psicología."]

explicacion: |
  El contraste principal es que la modernidad "interioriza" la identidad, buscando la verdad en el yo, mientras que la tradición la encontraba en el lugar que el individuo ocupaba en el orden social.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["historia", "identidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["un individuo que busca su esencia interna", "subjetividad"], ["un sujeto definido por sus roles sociales", "colectividad"]]

enunciado: "Según la transición de la modernidad, el paso de un yo definido por la comunidad a un yo basado en la {datos[escenario_idx][1]} marca el nacimiento de la subjetividad moderna."

respuesta: datos[escenario_idx][1
tipo: completar
respuestas_validas: ["subjetividad", "colectividad"]

explicacion: |
  La modernidad desplaza el eje de la identidad desde el grupo (familia, gremio, religión) hacia el individuo como centro de su propio universo psíquico.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["modernidad", "sujeto"]

enunciado: "¿Es la noción de un 'yo' individual y autónomo una característica que ha existido de la misma forma en todas las épocas de la historia humana?"

respuesta: falso
tipo: vf

explicacion: |
  Históricamente, la identidad estaba ligada a la pertenencia a un cuerpo social. El 'yo' individual es una construcción de la modernidad.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["identidad", "sociedad"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["identidad ligada a la tradición", "colectivismo"], ["identidad ligada a la elección personal", "individualismo"]]

enunciado: "En un análisis histórico, si comparamos un sistema basado en el {casos[caso_idx][0]} con uno basado en el {casos[caso_idx][1]}, el segundo representa el ideal de la modernidad."

respuesta: casos[caso_idx][1
tipo: mc
opciones_explicitas: ["colectivismo", "individualismo"]

explicacion: |
  El individualismo moderno postula que el sujeto es el arquitecto de su propia identidad, separándose de las estructuras predeterminadas.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["historia", "filosofia"]

enunciado: "Ordena cronológicamente las etapas que influyeron en la consolidación del 'yo' moderno, desde la estructura más externa a la más interna:"

pasos:
  - "Estructuras comunitarias y religiosas medievales"
  - "Surgimiento de la razón individualista"
  - "Consolidación de la subjetividad psicológica"

respuesta: ["Estructuras comunitarias y religiosas medievales", "Surgimiento de la razón individualista", "Consolidación de la subjetividad psicológica"]
tipo: ordenar
opciones_explicitas: ["Estructuras comunitarias y religiosas medievales", "Surgimiento de la razón individualista", "Consolidación de la subjetividad psicológica"]

explicacion: |
  La evolución va desde la pertenencia a un orden social dado hacia la introspección y la autonomía del sujeto.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["sujeto", "autonomia"]

variables:
  perfil_idx: uno_de([0, 1])
  perfiles: [["el sujeto es un reflejo de su linaje", "determinismo"], ["el sujeto es un agente de su propia historia", "autonomía"]]

enunciado: "En la psicología moderna, el concepto central es la {perfiles[perfil_idx][1]}, donde el individuo se percibe como un ___ de su propia historia."

respuesta: agente
tipo: completar
respuestas_validas: ["agente", "esclavo", "reflejo"]

explicacion: |
  La modernidad introduce la idea de agencia, donde el sujeto tiene la capacidad de decidir y actuar sobre su propio destino psíquico.
```

## Sección: salud-mental-ansiedad-depresion-pedir-ayuda (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["ansiedad", "conceptos"]

respuesta: "estado_de_alerta"
tipo: completar
respuestas_validas: ["estado_de_alerta", "reaccion_de_miedo"]

enunciado: "La ansiedad se caracteriza por ser un ___ constante ante situaciones que no representan un peligro real."

explicacion: |
  La ansiedad es una respuesta natural de supervivencia, pero cuando se vuelve desproporcionada o persistente, se convierte en un trastorno que interfiere con la vida cotidiana.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["sintomas", "depresion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["anhedonia", "apatía"], ["insomnio", "fatiga"]]

respuesta: uno_de(["verdadero", "falso"])
tipo: completar
enunciado: "La pérdida de interés en actividades que antes resultaban placenteras, conocida como anhedonia, es un síntoma central de la depresión."

explicacion: |
  La anhedonia es la incapacidad para sentir placer o interés, un indicador clave en los cuadros depresivos.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ayuda_profesional", "criterios"]

respuesta: "interferencia_vida_diaria"
tipo: mc
opciones_explicitas: ["cambio_de_humor_temporal", "interferencia_vida_diaria", "estres_laboral_comun"]

enunciado: "El criterio principal para considerar que un malestar emocional requiere ayuda profesional es la ___."

explicacion: |
  Aunque el estrés es normal, cuando las emociones impiden realizar tareas básicas (comer, dormir, trabajar, socializar), es momento de consultar a un profesional.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ciclo_ansiedad", "comportamiento"]

respuesta: ["pensamiento_catastrofico", "reaccion_fisica", "conducta_de_evitacion"]
tipo: ordenar

opciones_explicitas: ["pensamiento_catastrofico", "reaccion_fisica", "conducta_de_evitacion"]

enunciado: "Ordena la secuencia típica de un episodio de crisis de ansiedad:"

pasos:
  - "Se identifica una amenaza percibida."
  - "Se manifiestan taquicardia o falta de aire."
  - "Se evita el lugar o la situación para reducir el malestar."

explicacion: |
  El ciclo suele comenzar con un pensamiento intrusivo, seguido de una respuesta fisiológica y culminando en la evitación, lo cual refuerza el trastorno a largo plazo.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["mitos", "salud_mental"]

respuesta: falso
tipo: vf

enunciado: "La depresión es simplemente una tristeza profunda que se cura con 'echarle ganas' o voluntad propia."

explicacion: |
  La depresión es una condición clínica que involucra desequilibrios neuroquímicos y factores psicológicos; no se resuelve únicamente con voluntad.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad"
  nivel: "basico"
  tags: ["ansiedad", "señales_alerta"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Ana siente una preocupación constante por eventos futuros que no han ocurrido.", "ansiedad"],
    ["Luis experimenta palpitaciones y falta de aire ante situaciones sociales mínimas.", "ansiedad"]
  ]

enunciado: "En el caso de {casos[caso_idx][0]}, el síntoma principal es un cuadro de {casos[caso_idx][1]}."

respuesta: "ansiedad"
tipo: completar
respuestas_validas: ["ansiedad"]

explicacion: |
  La ansiedad se caracteriza por una preocupación excesiva, persistente y desproporcionada ante situaciones que no representan un peligro real o inmediato.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_depresion"
  nivel: "intermedio"
  tags: ["depresion", "sintomas"]

variables:
  estado_animo: uno_de(["anhedonia", "irritabilidad"])
  valor_anhedonia: "anhedonia"
  valor_irritabilidad: "irritabilidad"

enunciado: "Si una persona pierde la capacidad de sentir placer por actividades que antes disfrutaba, este síntoma se denomina ___."

respuesta: "anhedonia"
tipo: completar
respuestas_validas: ["anhedonia"]

explicacion: |
  La anhedonia es uno de los síntomas nucleares de la depresión mayor y se refiere a la incapacidad para experimentar placer o interés en actividades previamente gratificantes.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_pedir_ayuda"
  nivel: "basico"
  tags: ["ayuda_profesional", "bienestar"]

enunciado: "Si los síntomas de tristeza o ansiedad interfieren significativamente con la vida laboral, social o académica de una persona, ¿es recomendable buscar ayuda profesional?"

respuesta: verdadero
tipo: vf

explicacion: |
  La funcionalidad es un criterio clave. Cuando el malestar emocional impide el desarrollo normal de las actividades cotidianas, la intervención profesional es necesaria.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_proceso_ayuda"
  nivel: "intermedio"
  tags: ["proceso", "terapia"]

enunciado: "Ordena los pasos típicos para iniciar un proceso de acompañamiento profesional:"

opciones_explicitas: ["Identificar el malestar", "Buscar un profesional especializado", "Asistir a la primera sesión de evaluación"]

respuesta: ["Identificar el malestar", "Buscar un profesional especializado", "Asistir a la primera sesión de evaluación"]
tipo: ordenar

explicacion: |
  El proceso comienza con la autopercepción del malestar, seguido de la búsqueda activa de un especialista y finalmente el encuentro clínico para el diagnóstico y plan de tratamiento.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_sintomas_fisicos"
  nivel: "basico"
  tags: ["somatización", "ansiedad"]

variables:
  sintoma_fisico: uno_de(["taquicardia", "dolor_estomago"])
  res_taquicardia: "taquicardia"
  res_dolor_estomago: "dolor de estómago"

enunciado: "Una persona con un trastorno de ansiedad generalizada suele presentar síntomas físicos como {uno_de(["taquicardia", "dolor_estomago"])}."

opciones_explicitas: ["taquicardia", "dolor de estómago"]

respuesta: "taquicardia"
tipo: mc

explicacion: |
  La ansiedad activa el sistema nervioso simpático, lo que puede provocar manifestaciones físicas como taquicardia, sudoración o tensión muscular.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["depresion", "emociones", "salud_mental"]

respuesta: "patologia"
tipo: "mc"
opciones_explicitas: ["emocion_natural", "patologia"]

enunciado: "Sentir tristeza profunda ante una pérdida significativa es una respuesta emocional normal, pero cuando esta persistencia interfiere con la vida cotidiana, deja de ser una emoción natural para convertirse en una ___."

explicacion: |
  Es fundamental distinguir entre el duelo o la tristeza situacional y un trastorno depresivo. La diferencia radica en la intensidad, la duración y, sobre todo, la capacidad de la persona para retomar sus actividades normales.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["ansiedad", "mitos"]

respuesta: falso
tipo: "vf"

enunciado: "La ansiedad es simplemente un exceso de preocupación que se puede controlar únicamente con 'echarle ganas' o voluntad propia."

explicacion: |
  Falso. Los trastornos de ansiedad involucran respuestas neurobiológicas y fisiológicas que no se resuelven solo con voluntad. Requieren herramientas terapéuticas y, en ocasiones, abordaje farmacológico.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ayuda_profesional", "señales_alerta"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [
    ["perder el interés en hobbies que antes disfrutaba", "anhedonia"],
    ["sentir un cansancio extremo sin causa física", "fatiga"],
    ["alteraciones constantes en el patrón de sueño", "insomnio"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: "mc"
opciones_explicitas: ["perder el interés en hobbies que antes disfrutaba", "anhedonia", "sentir un cansancio extremo sin causa física", "fatiga", "alteraciones constantes en el patrón de sueño", "insomnio"]

enunciado: "Uno de los indicadores de que es momento de buscar ayuda profesional es cuando se presenta: ___."

explicacion: |
  La pérdida de placer o interés (anhedonia), la fatiga persistente o los cambios en el sueño son señales de alerta que indican que el malestar ha pasado de ser transitorio a ser un síntoma clínico.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["ayuda_profesional", "pasos"]

respuesta: ["identificar_malestar", "buscar_profesional", "iniciar_terapia"]
tipo: "ordenar"
opciones_explicitas: ["identificar_malestar", "buscar_profesional", "iniciar_terapia"]

enunciado: "Ordena los pasos lógicos para abordar un problema de salud mental de forma efectiva:"

pasos:
  - "Reconocer que algo en nuestro estado de ánimo no es habitual."
  - "Contactar a un psicólogo o psiquiatra capacitado."
  - "Asistir a las sesiones y trabajar en el proceso terapéutico."

explicacion: |
  El primer paso es la autopercepción (conciencia del problema), seguido de la acción externa (búsqueda de ayuda) y finalmente el compromiso con el tratamiento.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ayuda_profesional", "criterios"]

respuesta: "interferir"
tipo: "completar"
respuestas_validas: ["interferir", "afectar", "obstaculizar"]

enunciado: "El criterio clínico principal para determinar si un malestar emocional requiere intervención profesional es cuando los síntomas comienzan a ___ significativamente en las áreas de funcionamiento diario (social, laboral o académico)."

explicacion: |
  No es necesario esperar a estar en una crisis extrema para pedir ayuda. Si el malestar impide que la persona cumpla con sus responsabilidades o disfrute de su vida, la intervención es recomendada.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["emociones", "diagnostico"]

tipo: mc
opciones_explicitas: ["La tristeza es una emoción pasajera ante un evento, mientras que la depresión es un trastorno persistente que afecta la funcionalidad.", "La tristeza es un trastorno clínico y la depresión es una reacción normal.", "No existe diferencia entre ambas, son sinónimos.", "La tristeza es crónica y la depresión es aguda."]

enunciado: "¿Cuál es la principal distinción clínica entre experimentar tristeza y padecer un cuadro depresivo?"

explicacion: |
  La tristeza es una respuesta emocional natural y transitoria ante la pérdida o el desengaño. La depresión es un trastorno que se caracteriza por la persistencia de síntomas (como anhedonia o apatía) y una interferencia significativa en la vida cotidiana del individuo.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ansiedad", "miedo"]

tipo: vf

enunciado: "El miedo es una respuesta ante una amenaza real e inmediata, mientras que la ansiedad es una respuesta ante una amenaza futura o imaginaria."

respuesta: verdadero

explicacion: |
  El miedo es una respuesta biológica de supervivencia ante un peligro presente. La ansiedad, en cambio, implica una anticipación de un peligro que aún no ha ocurrido o que es incierto, caracterizándose por la preocupación excesiva.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["prevencion", "ayuda_profesional"]

variables:
  escenario_idx: uno_de([0, 1])
  casos: [
    ["Dificultad para dormir y pérdida de interés en hobbies por más de dos semanas", "Buscar ayuda profesional"],
    ["Sentir nerviosismo antes de un examen importante", "Observar la evolución sin intervención inmediata"]
  ]

tipo: completar

enunciado: "Si una persona experimenta {escenario_idx[0]}, la acción recomendada es {escenario_idx[1]}."

respuestas_validas: ["Buscar ayuda profesional", "Observar la evolución sin intervención inmediata"]
respuesta: "Buscar ayuda profesional"

explicacion: |
  Cuando los síntomas interfieren con la capacidad de la persona para realizar sus actividades diarias (trabajo, estudio, relaciones) de forma sostenida en el tiempo, es fundamental consultar con un profesional de la salud mental.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["crisis", "ansiedad"]

tipo: ordenar

opciones_explicitas: ["Disparador o estresor", "Pensamientos catastróficos", "Síntomas físicos (taquicardia, sudoración)", "Conductas de evitación"]

enunciado: "Ordena la secuencia típica de un ciclo de respuesta ante la ansiedad ante un estresor:"

respuesta: ["Disparador o estresor", "Pensamientos catastróficos", "Síntomas físicos (taquicardia, sudoración)", "Conductas de evitación"]

explicacion: |
  El ciclo suele comenzar con un estímulo (estresor), seguido de una interpretación cognitiva distorsionada (pensamiento catastrófico), que desencadena la respuesta fisiológica (síntomas físicos) y finalmente una estrategia de afrontamiento mal adaptativa (evitación).
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["sintomatologia", "depresion"]

tipo: mc
opciones_explicitas: ["Anhedonia (incapacidad de sentir placer)", "Hiperventilación", "Aumento de la energía física", "Foco excesivo en el presente"]

enunciado: "¿Qué síntoma es característico de la depresión y ayuda a distinguirla de otros estados de ánimo bajos?"

explicacion: |
  La anhedonia, definida como la pérdida de la capacidad de experimentar placer en actividades que antes eran gratificantes, es uno de los criterios diagnósticos centrales para los trastornos depresivos.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad"
  nivel: "basico"
  tags: ["ansiedad", "sintomas"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Ana siente palpitaciones, falta de aire y un miedo constante a que algo malo suceda sin razón aparente.", "ansiedad"],
    ["Luis evita ir a reuniones sociales porque siente que todos lo están juzgando y tiene sudoración excesiva.", "ansiedad"]
  ]

enunciado: "En el caso de {escenarios[escenario_idx][0]}, la persona está experimentando síntomas característicos de: ___"

respuestas_validas: ["ansiedad", "depresión", "estrés"]
respuesta: escenarios[escenario_idx][1
tipo: completar

explicacion: |
  Los síntomas físicos (palpitaciones) y cognitivos (miedo constante) descritos son indicadores comunes de un cuadro de ansiedad.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_depresion"
  nivel: "intermedio"
  tags: ["depresion", "anhedonia"]

variables:
  caso_idx: uno_de([0, 1, 2])
  casos: [
    ["Pedro ya no disfruta jugar al fútbol, algo que antes le apasionaba.", "anhedonia"],
    ["María siente una tristeza profunda y falta de energía que dura más de dos semanas.", "depresion"],
    ["Juan tiene alteraciones constantes en el sueño y pérdida de apetito.", "depresion"]
  ]

enunciado: "Si una persona presenta {casos[caso_idx][0]}, es un indicador clínico que requiere atención profesional."

respuestas_validas: ["anhedonia", "euforia", "estrés"]
respuesta: casos[caso_idx][1
tipo: completar

explicacion: |
  La incapacidad para sentir placer en actividades que antes eran gratificantes se conoce como anhedonia, un síntoma clave en la depresión.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ayuda"
  nivel: "intermedio"
  tags: ["ayuda_profesional", "bienestar"]

enunciado: "¿Es correcto buscar ayuda profesional si los problemas emocionales interfieren con la vida cotidiana (trabajo, estudios, relaciones)?"

respuestas_validas: ["verdadero", "falso"]
respuesta: verdadero
tipo: vf

explicacion: |
  La funcionalidad es un criterio clave. Si el malestar impide el desarrollo normal de las actividades diarias, es momento de consultar a un profesional.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ayuda"
  nivel: "avanzado"
  tags: ["riesgo", "prevencion"]

variables:
  alerta_idx: uno_de([0, 1])
  alertas: [
    ["Pensamientos de autolesión o ideas de muerte.", "riesgo_critico"],
    ["Aislamiento social extremo y abandono del autocuidado.", "riesgo_critico"]
  ]

enunciado: "Identifica la gravedad de la siguiente señal de alerta: {alertas[alerta_idx][0]}"

opciones_explicitas: ["riesgo_critico", "malestar_leve", "estrés_común"]
respuesta: alertas[alerta_idx][1
tipo: mc

explicacion: |
  Tanto los pensamientos de autolesión como el abandono total del autocuidado son señales de alerta crítica que requieren intervención inmediata.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ayuda"
  nivel: "basico"
  tags: ["proceso", "ayuda"]

enunciado: "Ordena los pasos lógicos para abordar un problema de salud mental detectado:"

opciones_explicitas: ["Reconocer el malestar", "Buscar apoyo profesional", "Iniciar tratamiento y seguimiento"]
respuesta: ["Reconocer el malestar", "Buscar apoyo profesional", "Iniciar tratamiento y seguimiento"]
tipo: ordenar

explicacion: |
  El proceso saludable comienza con la autopercepción del malestar, seguido de la búsqueda de un experto y, finalmente, el compromiso con un proceso terapéutico.
```

## Sección: sesgos-cognitivos-heuristicas-error-sistematico (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["heuristica", "procesamiento_mental"]

respuesta: "atajo mental"
tipo: completar
respuestas_validas: ["atajo mental", "proceso rápido", "regla empírica"]

enunciado: "En psicología cognitiva, una heurística se define comúnmente como un ___ que permite simplificar la toma de decisiones."

explicacion: |
  Las heurísticas son estrategias mentales que simplifican el procesamiento de la información, permitiendo tomar decisiones rápidas, aunque no siempre óptimas.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["disponibilidad", "sesgo"]

opciones_explicitas: ["La facilidad con la que ejemplos vienen a la mente", "La similitud entre dos objetos", "La memoria a largo plazo", "La velocidad de reacción"]
respuesta: "La facilidad con la que ejemplos vienen a la mente"
tipo: mc

enunciado: "La heurística de disponibilidad se basa en ___ para estimar la probabilidad de un evento."

explicacion: |
  Si un evento es fácil de recordar (por ser impactante o reciente), tendemos a creer que es más frecuente de lo que realmente es.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: verdadero
tipo: vf

enunciado: "Un sesgo cognitivo es el error sistemático de juicio que surge como consecuencia de la aplicación de una heurística."

explicacion: |
  Correcto. Mientras que la heurística es el mecanismo (el atajo), el sesgo es el error o desviación sistemática que dicho mecanismo puede producir.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["proceso_cognitivo"]

opciones_explicitas: ["Información ambiental", "Heurística aplicada", "Sesgo cognitivo (error)"]
respuesta: ["Información ambiental", "Heurística aplicada", "Sesgo cognitivo (error)"]
tipo: ordenar

enunciado: "Ordene los elementos según el flujo lógico que explica la producción de un error de juicio sistemático:"

explicacion: |
  El proceso comienza con la información disponible, se procesa mediante un atajo mental (heurística) y, si este es inadecuado para el contexto, resulta en un sesgo.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "avanzado"
  tags: ["representatividad", "estereotipos"]

variables:
  escenario: uno_de([
    ["Un profesor que parece tímido y le gusta leer", "es probable que sea bibliotecario"],
    ["Un hombre que viste formal y es muy metódico", "es probable que sea contador"],
    ["Una persona que ama el arte y los museos", "es probable que sea artista"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: [escenario[0], escenario[1], "Es imposible determinar", "Depende de la estadística real"]

enunciado: "La heurística de representatividad nos lleva a juzgar la probabilidad de un evento basándonos en cuánto se parece a nuestro prototipo mental. Por ejemplo, si {escenario[0]}..."

explicacion: |
  Este sesgo nos hace ignorar las probabilidades base (estadística real) para centrarnos en la similitud con un estereotipo o prototipo.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_heuristica_disponibilidad"
  nivel: "basico"
  tags: ["heuristica", "disponibilidad", "juicio"]

enunciado: "Juan cree que es mucho más probable morir en un accidente de avión que en uno de coche porque ha visto muchas noticias sobre accidentes aéreos recientemente. Este error de juicio se debe a la heurística de ___."

respuestas_validas: ["disponibilidad"]
tipo: completar

explicacion: |
  La heurística de disponibilidad consiste en juzgar la probabilidad de un evento basándose en la facilidad con la que ejemplos vienen a la mente. Como los accidentes de avión son muy mediáticos, son más 'disponibles' en la memoria, lo que lleva a una sobreestimación de su frecuencia.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_representatividad"
  nivel: "intermedio"
  tags: ["representatividad", "estereotipos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [
    ["Ana es muy tímida, organizada y le gusta leer en soledad. ¿Es más probable que sea una bibliotecaria o una vendedora de seguros?", "bibliotecaria"],
    ["Pedro es muy extrovertido, le gusta el deporte y las fiestas. ¿Es más probable que sea un vendedor de seguros o un contable?", "vendedor de seguros"]
  ]

enunciado: "Considera el siguiente caso: {escenarios[caso_idx][0]} ¿Cuál es la opción más probable según el juicio intuitivo de la heurística de representatividad? {escenarios[caso_idx][1]}"

opciones_explicitas: ["bibliotecaria", "vendedora de seguros", "contable", "no se puede determinar"]
respuesta: escenarios[caso_idx][1
tipo: mc

explicacion: |
  La heurística de representatividad nos hace juzgar la probabilidad de un evento basándonos en cuánto se parece a un estereotipo, ignorando la probabilidad base (la frecuencia real de esas profesiones en la población).
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_confirmacion"
  nivel: "basico"
  tags: ["confirmacion", "evidencia"]

enunciado: "Un investigador que cree que una nueva terapia es efectiva solo busca estudios que demuestren su éxito y descarta aquellos que muestran que no funciona. ¿Es este un ejemplo de sesgo de confirmación? ___"

respuesta: verdadero
tipo: vf

explicacion: |
  El sesgo de confirmación es la tendencia a buscar, interpretar y recordar información que confirma nuestras creencias previas, ignorando la evidencia que las contradice.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_anclaje"
  nivel: "intermedio"
  tags: ["anclaje", "negociacion"]

pasos:
  - "Un vendedor dice que el precio original de un reloj es de $1.000."
  - "Inmediatamente ofrece un 'descuento especial' de $600."
  - "El comprador siente que está haciendo un gran negocio por $400, aunque el valor real sea menor."

enunciado: "En el ejemplo anterior, el primer número mencionado ($1.000) actúa como un ___ que condiciona la percepción del valor final."

respuestas_validas: ["ancla"]
tipo: completar

explicacion: |
  El efecto anclaje ocurre cuando la mente humana se apoya demasiado en la primera pieza de información ofrecida (el 'ancla') para tomar decisiones posteriores, incluso si esa información es irrelevante.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_proceso"
  nivel: "avanzado"
  tags: ["heuristica", "error"]

enunciado: "Ordena las etapas de cómo un error sistemático de juicio (sesgo) afecta la toma de decisiones:"

opciones_explicitas: ["Percepción de información incompleta", "Uso de una heurística (atajo mental)", "Error en la estimación de probabilidad", "Toma de una decisión errónea"]
respuesta: ["Percepción de información incompleta", "Uso de una heurística (atajo mental)", "Error en la estimación de probabilidad", "Toma de una decisión errónea"]
tipo: ordenar

explicacion: |
  El proceso comienza con la entrada de información, la cual es procesada rápidamente mediante atajos (heurísticas). Si la heurística no es adecuada para el contexto, produce un error sistemático en la probabilidad estimada, derivando en una decisión sesgada.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["heuristica", "disponibilidad", "juicio"]

enunciado: "Cuando una persona sobreestima la probabilidad de que ocurra un evento basándose únicamente en lo reciente o impactante que le resulta el recuerdo de eventos similares, está utilizando la heurística de ___."

respuestas_validas: ["disponibilidad"]
tipo: completar

explicacion: |
  La heurística de disponibilidad es un atajo mental que consiste en juzgar la frecuencia o probabilidad de un evento en función de la facilidad con la que ejemplos vienen a la mente.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["representatividad", "probabilidad", "error"]

enunciado: "Si una persona asume que un individuo es un bibliotecario solo porque encaja perfectamente en el estereotipo de un bibliotecario, ignorando que estadísticamente es más probable que sea un trabajador general de un sector más grande, está cometiendo el error de la heurística de ___."

opciones_explicitas: ["Representatividad", "Disponibilidad", "Anclaje", "Confirmación"]
respuesta: "Representatividad"
tipo: mc

explicacion: |
  La heurística de representatividad nos lleva a juzgar la probabilidad de una categoría basándonos en cuánto se parece un objeto a un prototipo, ignorando la probabilidad base (base rate fallacy).
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["confirmacion", "verdadera_falsa"]

enunciado: "¿Es el sesgo de confirmación una heurística (un atajo mental) o es un error sistemático de juicio?"

opciones_explicitas: ["Es una heurística", "Es un error sistemático"]
respuesta: "Es un error sistemático"
tipo: mc

explicacion: |
  Aunque están relacionados, las heurísticas son procesos de simplificación para la toma de decisiones rápida, mientras que el sesgo de confirmación es el error sistemático de buscar solo información que respalde nuestras creencias previas.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "avanzado"
  tags: ["proceso", "sesgo", "ordenar"]

enunciado: "Ordene los pasos que describen cómo el sesgo de anclaje afecta una negociación:"

opciones_explicitas: ["Se recibe un primer dato o cifra (ancla)", "Se ajusta la opinión basándose en ese dato inicial", "Se llega a una conclusión influenciada por el ancla"]
respuesta: ["Se recibe un primer dato o cifra (ancla)", "Se ajusta la opinión basándose en ese dato inicial", "Se llega a una conclusión influenciada por el ancla"]
tipo: ordenar

explicacion: |
  El anclaje ocurre cuando la primera información recibida actúa como un punto de referencia mental, limitando el rango de los ajustes posteriores.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["anclaje", "percepcion"]

variables:
  idx: uno_de([0,1])
  datos: [["$100", "bajo"], ["$10", "alto"]]

enunciado: "Si en una subasta el primer precio que se menciona es de {datos[idx][0]}, la percepción del valor de los objetos siguientes se verá afectada hacia un nivel {datos[idx][1]} debido al efecto de anclaje."

respuesta: datos[idx][1
tipo: completar

explicacion: |
  El anclaje establece un punto de partida mental que condiciona todo el juicio posterior, incluso si el ancla es arbitraria o irrelevante.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["heuristica", "algoritmo", "procesamiento"]

enunciado: "Mientras que un algoritmo es un procedimiento paso a paso que garantiza encontrar la solución correcta, una heurística es un ___ que permite tomar decisiones rápidas pero no garantiza la exactitud."

respuestas_validas: ["atajo mental", "atajo"]

respuesta: "atajo mental"
tipo: completar

explicacion: |
  Las heurísticas son reglas mentales simplificadas (atajos) que facilitan la resolución de problemas de forma rápida, pero al no ser procesos exhaustivos como los algoritmos, pueden conducir a errores sistemáticos o sesgos.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["disponibilidad", "representatividad"]

variables:
  idx: uno_de([0, 1])

enunciado: "Si una persona juzga la probabilidad de un evento basándose en qué tan fácilmente le vienen ejemplos a la mente (memoria), está usando la heurística de disponibilidad. Si juzga basándose en cuánto se parece el evento a un prototipo mental, está usando la heurística de ___."

pasos:
  - "Identificar el criterio de juicio: ¿es facilidad de recuerdo o similitud con un modelo?"
  - "Relacionar el criterio con el sesgo correspondiente."

opciones_explicitas: ["disponibilidad", "representatividad"]

respuesta: [["disponibilidad", "representatividad"]][idx][1]
tipo: mc

explicacion: |
  La disponibilidad se basa en la facilidad de recuperación de información (memoria), mientras que la representatividad se basa en la comparación con un estereotipo o prototipo.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["sesgo", "heuristica"]

enunciado: "¿Es correcto afirmar que todas las heurísticas producen necesariamente un sesgo cognitivo?"

respuesta: falso
tipo: vf

explicacion: |
  Falso. La heurística es el mecanismo (el atajo), mientras que el sesgo es el error sistemático resultante. Una heurística es útil y eficiente en la mayoría de los casos; el sesgo es la desviación que ocurre cuando el atajo falla.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["procesamiento", "cognicion"]

enunciado: "Ordene el proceso que lleva desde la percepción de un estímulo hasta la aparición de un error sistemático de juicio:"

opciones_explicitas: ["Percepción del estímulo", "Aplicación de una heurística", "Producción de un sesgo cognitivo"]

respuesta: ["Percepción del estímulo", "Aplicación de una heurística", "Producción de un sesgo cognitivo"]
tipo: ordenar

explicacion: |
  El proceso comienza con la entrada de información, sigue con el uso de un atajo mental para procesarla rápidamente (heurística) y puede culminar en un error de juicio si el atajo no es adecuado para la situación (sesgo).
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "avanzado"
  tags: ["anclaje", "ajuste"]

variables:
  escenario: uno_de([0, 1])

enunciado: "En el efecto de anclaje, el primer dato recibido actúa como un ___ sobre el cual se realiza un ___ insuficiente para llegar a la respuesta correcta."

opciones_explicitas: ["ancla | ajuste", "base | cálculo", "punto | movimiento"]

respuesta: [["ancla | ajuste", "base | cálculo", "punto | movimiento"]][escenario][0]
tipo: mc

explicacion: |
  El efecto de anclaje ocurre cuando la mente se queda 'pegada' a un valor inicial (ancla) y, aunque intenta moverse hacia una cifra más realista, el ajuste que realiza es demasiado pequeño, dejando la respuesta final sesgada hacia el ancla.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["heuristica", "disponibilidad"]

variables:
  datos: [["Se lee una noticia sobre un accidente aéreo", "miedo a volar"], ["Se ve un reporte sobre ataques de tiburón", "miedo a nadar"], ["Se escucha sobre un accidente de coche", "miedo a conducir"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["miedo a volar", "miedo a nadar", "miedo a conducir", "miedo a los terremotos"]

enunciado: "Una persona cree que es muy probable que ocurra un evento catastrófico porque acaba de leer una noticia impactante sobre ello. Este es un ejemplo del sesgo de disponibilidad, donde la persona estima la probabilidad basándose en la facilidad con la que los ejemplos vienen a la mente. En este caso, el miedo es a {datos[idx][0]}."

explicacion: |
  El sesgo de disponibilidad ocurre cuando estimamos la probabilidad de un evento basándonos en qué tan fácilmente recordamos ejemplos similares. La noticia reciente hace que el evento sea más "disponible" en la memoria, distorsionando la percepción del riesgo real.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["representatividad", "estereotipos"]

variables:
  datos: [["Juan es muy ordenado y le gusta leer poesía", "es un bibliotecario"], ["Ana es muy sociable y le gusta bailar", "es una animadora"], ["Luis es muy metódico y usa lentes", "es un profesor"]]
  idx: uno_de([0,1,2])

respuesta: "{datos[idx][1]}"
tipo: mc
opciones_explicitas: ["es un bibliotecario", "es una animadora", "es un profesor", "es un médico"]

enunciado: "Si se nos dice que {datos[idx][0]}, tendemos a juzgar que la persona pertenece a una profesión específica basándonos en un prototipo mental, ignorando las probabilidades estadísticas. Este error se llama heurística de representatividad."

explicacion: |
  La heurística de representatividad nos lleva a juzgar la probabilidad de un evento basándonos en cuánto se parece a un estereotipo, ignorando la frecuencia base (probabilidad real) de que ese evento ocurra.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["anclaje", "decision"]

variables:
  datos: [["1000", "500"], ["5000", "2500"], ["100", "40"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["500", "2500", "40"]

enunciado: "En una negociación, si el vendedor comienza diciendo que el precio es de ${datos[idx][0]}, la primera cifra actúa como un 'ancla' que condiciona la negociación, haciendo que la contraparte termine aceptando un precio cercano a ${datos[idx][1]}."

explicacion: |
  El efecto anclaje es la tendencia humana a confiar demasiado en la primera pieza de información ofrecida (el ancla) al tomar decisiones, incluso si esa información es irrelevante para el valor real.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["confirmacion", "creencias"]

respuesta: verdadero
tipo: vf

enunciado: "El sesgo de confirmación es la tendencia a buscar, interpretar y recordar información que confirma nuestras creencias preexistentes, mientras ignoramos la evidencia que las contradice."

explicacion: |
  Correcto. Este sesgo es uno de los más comunes y refuerza nuestras convicciones, dificultando el pensamiento crítico y la objetividad.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "avanzado"
  tags: ["heuristica", "proceso_mental"]

opciones_explicitas: ["Percepción de un estímulo impactante", "Recuperación rápida en la memoria", "Estimación de probabilidad distorsionada", "Error de juicio sistemático"]

respuesta: ["Percepción de un estímulo impactante", "Recuperación rápida en la memoria", "Estimación de probabilidad distorsionada", "Error de juicio sistemático"]
tipo: ordenar

enunciado: "Ordena los pasos que describen cómo una heurística puede derivar en un error de juicio sistemático (como el sesgo de disponibilidad):"

explicacion: |
  El proceso comienza con la percepción de un estímulo (frecuentemente emocional o reciente), seguido de su fácil recuperación en la memoria, lo que lleva a una estimación errónea de la frecuencia y finalmente al error sistemático en el juicio.
```
