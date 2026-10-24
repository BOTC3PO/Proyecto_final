### 1 — El criterio de demarcación de Popper
```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "basico"
  tags: ["popper", "falsacionismo", "demarcacion"]

respuesta: "falsabilidad"
tipo: completar
respuestas_validas: ["falsabilidad", "falsacion"]

enunciado: "Para Karl Popper, el criterio de demarcación que distingue a la ciencia de la metafísica es la ___________."

explicacion: |
  Para Popper, una teoría es científica solo si es capaz de ser refutada por la experiencia. Si una teoría no puede ser sometida a pruebas que puedan contradecirla, no es científica.
```

### 2 — El cambio de paradigma de Kuhn
```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia_normal"]

variables:
  escenario: uno_de([
    ["ciencia_normal", "periodo de estabilidad donde se trabaja bajo un paradigma establecido"],
    ["crisis", "periodo de acumulación de anomalías que el paradigma actual no puede resolver"],
    ["revolucion", "periodo de cambio radical donde un paradigma es reemplazado por otro"]
  ])

opciones_explicitas: ["ciencia_normal", "crisis", "revolucion"]

respuesta: escenario[1]
tipo: mc

enunciado: "Según Thomas Kuhn, el periodo caracterizado por la acumulación de anomalías que el modelo vigente no puede explicar se denomina ___________."

explicacion: |
  La crisis es el paso previo a la revolución científica. Ocurre cuando las anomalías son tan numerosas o profundas que la comunidad científica pierde la confianza en el paradigma vigente.
```

### 3 — El anarquismo epistemológico
```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "basico"
  tags: ["feyerabend", "anarquismo", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "¿Sostiene Paul Feyerabend que existe un único método científico universal que debe seguirse para garantizar el progreso del conocimiento?"

explicacion: |
  Feyerabend, con su principio de "todo vale" (anything goes), argumentó que no existe un método único y que la ciencia progresa precisamente porque los científicos rompen las reglas metodológicas establecidas.
```

### 4 — Etapas del ciclo de Kuhn
```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ordenar"]

opciones_explicitas: ["Ciencia Normal", "Crisis", "Revolución Científica", "Nuevo Paradigma"]

respuesta: ["Ciencia Normal", "Crisis", "Revolución Científica", "Nuevo Paradigma"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas del ciclo de desarrollo científico propuesto por Thomas Kuhn:"

explicacion: |
  El ciclo comienza con la Ciencia Normal (trabajo bajo un paradigma), sigue con una Crisis (anomalías), lleva a una Revolución Científica (cambio de modelo) y culmina con la instauración de un Nuevo Paradigma.
```

### 5 — Comparación de enfoques
```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "avanzado"
  tags: ["popper", "kuhn", "feyerabend"]

variables:
  comparacion: uno_de([
    ["falsacionismo", "Popper propone que la ciencia avanza mediante la refutación de teorías."],
    ["paradigmas", "Kuhn sostiene que la ciencia avanza mediante cambios de modelos compartidos."],
    ["anarquismo", "Feyerabend defiende la pluralidad de métodos frente a la rigidez metodológica."]
  ])

opciones_explicitas: ["falsacionismo", "paradigmas", "anarquismo"]

respuesta: comparacion[0]
tipo: mc

enunciado: "Si un autor afirma que el progreso científico se da a través de la eliminación de teorías que han sido refutadas por la experiencia, se refiere al ___________."

explicacion: |
  El falsacionismo de Popper se basa en la idea de que la ciencia no busca verdades absolutas, sino teorías que aún no han sido refutadas (corroboradas), avanzando mediante la eliminación de errores.
```