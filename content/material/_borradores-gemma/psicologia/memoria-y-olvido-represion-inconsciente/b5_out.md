### 1 — El mecanismo de la represión
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

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["represion", "olvido_comun", "amnesia_organica"]

enunciado: "En un proceso psicoanalítico, si un sujeto presenta {escenario[idx][0]}, el mecanismo de defensa que ha actuado para mantener ese contenido fuera de la conciencia es la ___."

explicacion: |
  La represión es un mecanismo de defensa que consiste en excluir de la conciencia aquellos pensamientos, impulsos o recuerdos que resultan perturbadores o dolorosos para el yo.
```

### 2 — Naturaleza del Inconsciente
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

### 3 — El proceso de retorno de lo reprimido
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

respuesta: caso[idx][0]
tipo: completar
respuestas_validas: ["lapsus", "sueño", "sintoma"]

enunciado: "Cuando un contenido reprimido intenta manifestarse en la conciencia de forma distorsionada, se produce el 'retorno de lo reprimido'. Un ejemplo de esto es el ___."

explicacion: |
  Los lapsus, los sueños y los síntomas son formas en las que el contenido inconsciente logra burlar la censura para manifestarse.
```

### 4 — Diferencias conceptuales
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

respuesta: comparacion[idx][0]
tipo: mc
opciones_explicitas: ["A", "B"]

enunciado: "Respecto a la distinción entre olvido y represión, es correcto afirmar que: {comparacion[idx][0]}."

explicacion: |
  El olvido suele ser un fallo en la recuperación o almacenamiento, mientras que la represión implica una lucha del Yo contra un impulso que busca ser reprimido.
```

### 5 — Etapas del análisis de un síntoma (Secuencia)
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