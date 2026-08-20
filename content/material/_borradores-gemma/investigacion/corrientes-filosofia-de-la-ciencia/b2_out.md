### 1 — El criterio de demarcación de Popper
```
metadata:
  materia: "investigacion"
  tema: "falsacionismo_popper"
  nivel: "intermedio"
  tags: ["popper", "falsacionismo", "demarcacion"]

variables:
  escenario: uno_de([
    ["La teoría de la relatividad de Einstein predice que la luz de una estrella se curva al pasar cerca del sol.", "falsable"],
    ["La teoría del psicoanálisis de Freud puede explicar tanto un comportamiento heroico como uno egoísta sin contradicciones.", "no_falsable"],
    ["La teoría de la selección natural de Darwin propone cambios en las poblaciones a través de generaciones.", "falsable"]
  ])

enunciado: "De acuerdo con el falsacionismo de Karl Popper, una teoría es científica si es capaz de ser sometida a pruebas que podrían refutarla. Analizando el siguiente caso: '{escenario[0]}', la naturaleza de esta teoría es ___."

respuestas_validas: ["falsable", "no_falsable"]
respuesta: escenario[1]
tipo: completar

explicacion: |
  Para Popper, la ciencia no progresa confirmando verdades, sino eliminando errores. Una teoría es científica si establece condiciones bajo las cuales, de ocurrir, la teoría quedaría refutada (falsada). Si una teoría explica todo lo que sucede (como criticaba Popper del psicoanálisis), entonces no es científica porque no se arriesga a ser falsa.
```

### 2 — La estructura de las revoluciones de Kuhn
```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia_normal"]

variables:
  fase: uno_de([
    ["Ciencia Normal", "Crisis"],
    ["Ciencia Normal", "Revolución Científica"],
    ["Ciencia Normal", "Cambio de Paradigma"]
  ])

enunciado: "Thomas Kuhn sostiene que la ciencia no progresa de forma lineal, sino mediante saltos. El proceso sigue este orden: primero ocurre la 'Ciencia Normal', luego surge una serie de anomalías que no pueden ser resueltas, lo que lleva a una ___ y, finalmente, a un cambio de paradigma."

opciones_explicitas: ["Crisis", "Revolución Científica", "Cambio de Paradigma"]
respuesta: fase[1]
tipo: mc

explicacion: |
  Según Kuhn, la 'Ciencia Normal' opera bajo un paradigma aceptado. Cuando las anomalías se acumulan y el paradigma actual no puede resolverlas, se entra en una fase de 'Crisis', que es el preludio necesario para una 'Revolución Científica'.
```

### 3 — El anarquismo epistemológico de Feyerabend
```
metadata:
  materia: "investigacion"
  tema: "anarquismo_epistemologico_feyerabend"
  nivel: "avanzado"
  tags: ["feyerabend", "anarquismo", "metodologia"]

enunciado: "Paul Feyerabend argumenta en su obra 'Contra la muerte de la razón' que no existe un único método científico universal que deba seguirse estrictamente para que el conocimiento sea válido. Su principio fundamental es 'Anything goes' (Todo vale). ¿Es esto cierto?"

opciones_explicitas: [verdadero, falso]
respuesta: verdadero
tipo: vf

explicacion: |
  Feyerabend sostiene que la historia de la ciencia muestra que los grandes avances ocurrieron precisamente porque los científicos violaron las reglas metodológicas establecidas. Por tanto, no hay una regla única e inamovible para hacer ciencia.
```

### 4 — El ciclo de Kuhn en la historia de la física
```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "historia_ciencia", "ordenar"]

enunciado: "Ordena los eventos que describen el paso de la física Newtoniana a la física Relativista según el modelo de Kuhn:"

opciones_explicitas: ["Predominio del paradigma de Newton", "Aparición de anomalías (ej. órbita de Mercurio)", "Crisis del modelo clásico", "Revolución y nuevo paradigma de Einstein"]
respuesta: ["Predominio del paradigma de Newton", "Aparición de anomalías (ej. órbita de Mercurio)", "Crisis del modelo clásico", "Revolución y nuevo paradigma de Einstein"]
tipo: ordenar

explicacion: |
  El modelo de Kuhn es cíclico: 1) Estabilidad (Paradigma), 2) Anomalías (problemas no resueltos), 3) Crisis (pérdida de confianza en el paradigma) y 4) Revolución (sustitución por uno nuevo).
```

### 5 — Comparativa de enfoques metodológicos
```
metadata:
  materia: "investigacion"
  tema: "corrientes_filosofia_ciencia"
  nivel: "avanzado"
  tags: ["comparativa", "popper", "kuhn", "feyerabend"]

variables:
  caso: uno_de([
    ["Un científico busca una teoría que sea lo más arriesgada y falsable posible.", "Popper"],
    ["Un científico trabaja dentro de un marco de reglas aceptadas por su comunidad para resolver acertijos.", "Kuhn"],
    ["Un científico decide ignorar las reglas lógicas establecidas para permitir una nueva idea creativa.", "Feyerabend"]
  ])

enunciado: "Si un investigador se enfoca exclusivamente en la capacidad de una teoría para ser refutada mediante la experimentación, ¿qué autor está siguiendo?"

opciones_explicitas: ["Popper", "Kuhn", "Feyerabend"]
respuesta: caso[0]
tipo: mc

explicacion: |
  El enfoque centrado en la refutabilidad (falsacionismo) es la piedra angular del pensamiento de Karl Popper para distinguir la ciencia de la pseudociencia.
```