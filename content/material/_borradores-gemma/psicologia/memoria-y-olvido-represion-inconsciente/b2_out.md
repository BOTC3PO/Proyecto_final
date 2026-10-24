### 1 — El mecanismo de la represión
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

### 2 — El origen del síntoma
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

### 3 — Naturaleza del contenido inconsciente
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

### 4 — Dinámica del proceso de olvido
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

### 5 — El papel de la angustia
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