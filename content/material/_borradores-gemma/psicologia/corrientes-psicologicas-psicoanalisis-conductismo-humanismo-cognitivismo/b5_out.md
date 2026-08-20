### 1 — El enfoque del comportamiento
```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["conductismo", "aprendizaje"]

variables:
  escenario: uno_de([["Un niño recibe un dulce cada vez que recoge sus juguetes.", "refuerzo positivo"], ["Un estudiante deja de jugar videojuegos tras recibir un regaño constante.", "castigo"]])
  idx: uno_de([0, 1])

enunciado: "En el escenario donde {escenario[idx][0]}, estamos ante un proceso de {escenario[idx][1]} según el conductismo."

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["refuerzo positivo", "castigo"]

explicacion: |
  El conductismo se enfoca en la relación entre estímulos y respuestas. En este caso, la consecuencia aumenta la probabilidad de la conducta (refuerzo) o la disminuye (castigo).
```

### 2 — El inconsciente en la clínica
```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["psicoanalisis", "inconsciente"]

enunciado: "Un terapeuta que busca interpretar los sueños de un paciente y analizar los lapsus linguae para acceder a contenidos reprimidos está aplicando el método de:"

opciones_explicitas: ["Conductismo", "Psicoanálisis", "Humanismo", "Cognitivismo"]
respuesta: "Psicoanalisis"
tipo: mc

explicacion: |
  El psicoanálisis, fundado por Freud, sostiene que la conducta humana está determinada por impulsos y deseos inconscientes.
```

### 3 — La autorrealización humana
```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["humanismo", "maslow"]

enunciado: "¿Es el enfoque humanista una corriente que se centra en la capacidad de crecimiento personal y la autorrealización del individuo?"

respuesta: verdadero
tipo: vf

explicacion: |
  El humanismo (Rogers, Maslow) se diferencia por su visión optimista del ser humano y su enfoque en la autorrealización.
```

### 4 — Procesamiento de la información
```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["cognitivismo", "procesos_mentales"]

variables:
  caso: uno_de([["Cómo la memoria almacena datos", "procesamiento"], ["Cómo el lenguaje decodifica símbolos", "procesamiento"]])
  idx: uno_de([0, 1])

enunciado: "Si un psicólogo estudia {caso[idx][0]}, su enfoque principal es el {caso[idx][1]} de la información."

respuesta: "procesamiento"
tipo: completar
respuestas_validas: ["procesamiento"]

explicacion: |
  El cognitivismo utiliza la metáfora del ordenador para entender cómo la mente codifica, almacena y recupera la información.
```

### 5 — Evolución del estudio de la mente
```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "avanzado"
  tags: ["historia", "orden_cronologico"]

enunciado: "Ordena cronológicamente estas corrientes desde su surgimiento histórico (del más antiguo al más reciente):"

opciones_explicitas: ["Psicoanálisis", "Conductismo", "Humanismo", "Cognitivismo"]
respuesta: ["Psicoanálisis", "Conductismo", "Humanismo", "Cognitivismo"]
tipo: ordenar

explicacion: |
  El Psicoanálisis (finales XIX), el Conductismo (principios XX), el Humanismo (mediados XX) y el Cognitivismo (revolución cognitiva años 50-60).
```