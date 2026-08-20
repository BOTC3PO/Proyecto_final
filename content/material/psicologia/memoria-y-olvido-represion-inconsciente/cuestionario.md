# Psicologia — Memoria y olvido represion inconsciente (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El concepto de inconsciente

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

### 2 — Mecanismo de defensa

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["represion", "defensa"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["un deseo conflictivo", "represión"], ["un recuerdo traumático", "represión"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["proyección", "sublimación", "represión", "negación"]

enunciado: "Cuando el aparato psíquico expulsa de la conciencia un pensamiento o impulso que resulta intolerable para el yo, está utilizando el mecanismo de la {datos[escenario_idx][0]}."

explicacion: |
  La represión es el proceso mediante el cual se desplazan contenidos de la conciencia al inconsciente para evitar el malestar.
```

### 3 — Elementos del proceso de olvido

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["represion", "terminologia"]

respuesta: ["represión", "olvido", "inconsciente"]
tipo: completar
respuestas_validas:
  - "represión"
  - "olvido"
  - "inconsciente"

enunciado: "El proceso de ___ consiste en el desplazamiento de contenidos hacia el ___ para evitar el dolor, lo que genera un ___ que no es por falta de capacidad de almacenamiento, sino por una barrera psíquica."

pasos:
  - "Identificar el mecanismo de defensa."
  - "Identificar el lugar donde se alojan los contenidos."
  - "Identificar la consecuencia en la conciencia."

explicacion: |
  La represión es el mecanismo que envía contenidos al inconsciente, resultando en un olvido que no es amnésico (biológico), sino dinámico (psicológico).
```

### 4 — Naturaleza del inconsciente

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

### 5 — Orden de procesos en la represión

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["proceso", "represion"]

respuesta_orden: ["Conflicto", "Represión", "Síntoma"]
tipo: ordenar
opciones_explicitas: ["Conflicto", "Represión", "Síntoma"]

enunciado: "Ordene la secuencia lógica de la formación de un síntoma desde la perspectiva psicoanalítica:"

explicacion: |
  Primero surge un conflicto (deseo vs. moral), luego el yo utiliza la represión para alejar el deseo, y finalmente el deseo reprimido retorna de forma deformada como un síntoma.
```

### 6 — El mecanismo de la represión

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["psicoanalisis", "represion", "inconsciente"]

respuesta: "represion"
tipo: completar
respuestas_validas:
  - "represion"
  - "represión"

enunciado: "En el psicoanálisis, cuando un pensamiento o deseo resulta intolerable para el yo, el aparato psíquico utiliza un mecanismo de defensa para alejarlo de la conciencia. Este proceso se denomina ___."

explicacion: |
  La represión es el mecanismo mediante el cual el sujeto desplaza contenidos psíquicos (impulsos, recuerdos traumáticos) hacia el inconsciente para evitar el malestar o la angustia.
```

### 7 — El origen del síntoma

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "avanzado"
  tags: ["sintoma", "inconsciente", "psicoanalisis"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un individuo olvida el nombre de una persona que le causó un trauma severo.", "olvido_selectivo"], ["Un paciente presenta un lapsus linguae (error al hablar) que revela un deseo reprimido.", "lapsus"]]

respuesta: "casos[caso_idx][1]"
tipo: mc
opciones_explicitas: ["casos[caso_idx][1]", "amnesia anterógrada", "olvido por interferencia", "desatención"]

enunciado: "Analicemos el siguiente escenario: {casos[caso_idx][0]}. Según la teoría psicoanalítica, este fenómeno es una manifestación de:"

explicacion: |
  El síntoma o el error (como el lapsus) es la forma en que el contenido reprimido intenta retornar a la conciencia, aunque sea de manera disfrazada.
```

### 8 — Naturaleza del contenido inconsciente

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

### 9 — Dinámica del proceso de olvido

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["proceso", "represion", "conciencia"]

respuesta_orden: ["Conflicto psíquico", "Represión", "Retorno de lo reprimido"]
tipo: ordenar

opciones_explicitas: ["Conflicto psíquico", "Represión", "Retorno de lo reprimido"]

enunciado: "Ordene la secuencia lógica de un proceso de formación de síntoma desde la perspectiva psicoanalítica, partiendo desde la aparición del impulso hasta su manifestación clínica:"

explicacion: |
  1. El conflicto psíquico surge entre el deseo y la defensa.
  2. La represión actúa para alejar el deseo de la conciencia.
  3. El contenido reprimido retorna de forma disfrazada (síntoma, sueño, lapsus).
```

### 10 — El papel de la angustia

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["angustia", "defensa", "represion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un trauma infantil es bloqueado por la mente.", "angustia"], ["Un deseo prohibido es enviado al inconsciente.", "angustia"]]

respuesta: "escenarios[escenario_idx][1]"
tipo: mc
opciones_explicitas: ["escenarios[escenario_idx][1]", "placer", "olvido absoluto", "memoria episódica"]

enunciado: "Considerando el siguiente caso: {escenarios[escenario_idx][0]}. El motor que activa el mecanismo de defensa es la aparición de la ___."

explicacion: |
  La angustia actúa como una señal de alarma que advierte al Yo sobre la proximidad de un impulso que no puede ser integrado, disparando así la represión.
```

### 11 — La represión y el acceso consciente

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

### 12 — El error de la "memoria fotográfica" en el inconsciente

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  tema_secundario: "confusiones_conceptuales"
  nivel: "basico"
  tags: ["inconsciente", "memoria", "confusion"]

variables:
  escenario: uno_de([["un evento traumático", "represión"], ["un dato matemático", "memoria semántica"], ["el nombre de un color", "memoria episódica"]])

respuesta: "escenario[0][1"
tipo: completar
respuestas_validas:
  - "represión"
  - "memoria semántica"
  - "memoria episódica"

enunciado: "Cuando un individuo experimenta un evento traumático que su psiquismo considera inaceptable, el mecanismo de defensa que actúa para alejarlo de la conciencia se denomina ___."

explicacion: |
  Es común confundir el olvido natural o la falla de memoria con la represión. La represión implica una acción activa del aparato psíquico para mantener un contenido fuera de la conciencia debido a su carga afectiva conflictiva.
```

### 13 — Naturaleza de los contenidos inconscientes

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["inconsciente", "psicoanalisis"]

enunciado: "Según el psicoanálisis, ¿cuál es la naturaleza de los contenidos inconscientes?"

tipo: mc
opciones_explicitas: ["Los contenidos inconscientes son estáticos y no afectan el comportamiento.", "Los contenidos inconscientes son dinámicos y buscan retornar a la conciencia.", "El inconsciente es simplemente una falta de atención momentánea.", "El inconsciente es equivalente a la memoria a corto plazo."]

respuesta: "Los contenidos inconscientes son dinámicos y buscan retornar a la conciencia."

explicacion: |
  Para el psicoanálisis, el inconsciente no es un depósito pasivo de información olvidada, sino un sistema dinámico donde los contenidos reprimidos luchan constantemente por manifestarse.
```

### 14 — El proceso de olvido patológico

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

### 15 — Niveles de la mente según el modelo estructural

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["estructura_psiquica", "inconsciente"]

respuesta_orden: ["Inconsciente", "Preconsciente", "Consciente"]
tipo: ordenar
opciones_explicitas: ["Inconsciente", "Preconsciente", "Consciente"]

enunciado: "Ordene los niveles de la estructura psíquica de Freud, desde el que tiene mayor contenido reprimido (más profundo) hacia el que tiene mayor acceso inmediato a la conciencia:"

explicacion: |
  El modelo topográfico de Freud establece que el Inconsciente es el nivel más profundo y dinámico, el Preconsciente contiene elementos que no están en la conciencia pero pueden ser evocados fácilmente, y la Conciencia es el nivel de percepción inmediata.
```

### 16 — Represión vs. Olvido común

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["psicoanalisis", "represion", "inconsciente"]

respuesta: "represion"
tipo: "completar"
respuestas_validas:
  - "represion"
  - "represión"

enunciado: "Mientras que el olvido común es un proceso de pérdida de información por falta de consolidación o interferencia, la ________ es un mecanismo de defensa que consiste en la expulsión de contenidos dolorosos de la conciencia hacia el inconsciente."

explicacion: |
  La represión es un proceso dinámico donde el yo intenta mantener fuera de la conciencia aquellos pensamientos o impulsos que resultan inaceptables o angustiantes.
```

### 17 — Naturaleza del contenido reprimido

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["inconsciente", "represion"]

variables:
  es_inconsciente: verdadero

respuesta: es_inconsciente
tipo: vf

enunciado: "Según el psicoanálisis, los contenidos reprimidos permanecen en el inconsciente y pueden manifestarse a través de síntomas o sueños, manteniendo su carga afectiva."

explicacion: |
  Correcto. El contenido reprimido no es simplemente "olvidado", sino que permanece activo en la psique, buscando una vía de expresión.
```

### 18 — Diferencia entre Inconsciente y Preconsciente

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "avanzado"
  tags: ["inconsciente", "preconsciente", "freud"]

opciones_explicitas: ["El preconsciente es accesible con esfuerzo, mientras que el inconsciente es inaccesible por naturaleza.", "El inconsciente es solo memoria a corto plazo.", "El preconsciente y el inconsciente son términos sin distinción funcional."]

respuesta: "El preconsciente es accesible con esfuerzo, mientras que el inconsciente es inaccesible por naturaleza."
tipo: "mc"

enunciado: "¿Cuál es la principal distinción entre el contenido preconsciente y el contenido inconsciente en la teoría freudiana?"

explicacion: |
  El preconsciente contiene información que no está en la conciencia en este momento pero que puede ser recuperada fácilmente (como un número de teléfono), mientras que el inconsciente contiene contenidos reprimidos de difícil acceso.
```

### 19 — Dinámica del mecanismo de defensa

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
respuestas_validas:
  - "represion"
  - "represión"

enunciado: "Cuando un individuo experimenta {escenario} debido a un {escenario_desc} entre un impulso y una norma moral, el yo utiliza la ________ para evitar el malestar."

pasos:
  - "Identificar el conflicto psíquico."
  - "Reconocer la función de defensa del yo."

explicacion: |
  La represión actúa como un escudo ante la angustia que produciría la consciencia de un deseo incompatible con la moralidad.
```

### 20 — Procesos de la memoria según el psicoanálisis

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["procesos", "inconsciente", "represion"]

opciones_explicitas: ["Represión", "Inconsciente", "Síntoma"]

respuesta_orden: ["Represión", "Inconsciente", "Síntoma"]
tipo: "ordenar"

enunciado: "Ordene la secuencia lógica del proceso dinámico que explica cómo un trauma se manifiesta en la clínica psicoanalítica:"

explicacion: |
  El proceso comienza con la represión del trauma (envío al inconsciente), lo que genera un conflicto que finalmente se manifiesta a través de un síntoma.
```

### 21 — El mecanismo de la represión

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["psicoanalisis", "represion", "inconsciente"]

variables:
  escenario: uno_de([["Un trauma infantil severo que el sujeto no recuerda pero que genera ansiedad constante.", "represion"], ["Un nombre olvidado momentáneamente durante una conversación.", "olvido_comun"], ["La incapacidad de recordar un evento traumático por una lesión cerebral.", "amnesia_organica"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["represion", "olvido_comun", "amnesia_organica"]

enunciado: "En un proceso psicoanalítico, si un sujeto presenta {escenario[0]}, el mecanismo de defensa que ha actuado para mantener ese contenido fuera de la conciencia es la ___."

explicacion: |
  La represión es un mecanismo de defensa que consiste en excluir de la conciencia aquellos pensamientos, impulsos o recuerdos que resultan perturbadores o dolorosos para el yo.
```

### 22 — Naturaleza del Inconsciente

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

### 23 — El proceso de retorno de lo reprimido

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "avanzado"
  tags: ["retorno_de_lo_reprimido", "sintoma"]

variables:
  caso: uno_de([["Un lapsus linguae (error al hablar) que revela un deseo oculto.", "lapsus"], ["Un sueño recurrente con un tema conflictivo.", "sueño"], ["Un síntoma físico sin causa médica aparente.", "sintoma"]])

respuesta: caso[1]
tipo: completar
respuestas_validas:
  - "lapsus"
  - "sueño"
  - "sintoma"

enunciado: "Cuando un contenido reprimido intenta manifestarse en la conciencia de forma distorsionada, se produce el 'retorno de lo reprimido'. Un ejemplo de esto es el ___."

explicacion: |
  Los lapsus, los sueños y los síntomas son formas en las que el contenido inconsciente logra burlar la censura para manifestarse.
```

### 24 — Diferencias conceptuales

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["olvido", "represion"]

variables:
  comparacion: uno_de([["El olvido es un proceso de pérdida de información, mientras que la represión es un proceso de exclusión activa.", "A"], ["El olvido es un proceso de exclusión activa, mientras que la represión es un proceso de pérdida de información.", "B"]])

respuesta: comparacion[1]
tipo: mc
opciones_explicitas: ["A", "B"]

enunciado: "Respecto a la distinción entre olvido y represión, es correcto afirmar que: {comparacion[0]}."

explicacion: |
  El olvido suele ser un fallo en la recuperación o almacenamiento, mientras que la represión implica una lucha del Yo contra un impulso que busca ser reprimido.
```

### 25 — Etapas del análisis de un síntoma (Secuencia)

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "avanzado"
  tags: ["metodo_psicoanalitico", "secuencia"]

respuesta_orden: ["Conflicto", "Represión", "Manifestación"]
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
