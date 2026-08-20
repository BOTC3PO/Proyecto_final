### 1 — El retorno a la democracia
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["democracia", "politica"]

variables:
  escenario: uno_de([["1983", "Raúl Alfonsín"], ["1989", "Carlos Menem"], ["1995", "Carlos Menem"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Raúl Alfonsín", "Carlos Menem", "Fernando de la Rúa", "Néstor Kirchner"]

enunciado: "En el año {escenario[idx][0]}, la presidencia de la Nación fue asumida por {escenario[idx][1]} tras el fin de la dictadura."

explicacion: |
  El proceso de democratización se consolidó con la asunción de Raúl Alfonsín en 1983.
```

### 2 — Crisis económica y social
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["crisis", "economia"]

variables:
  evento: uno_de([["el estallido del 2001", "Plan de Convertibilidad"], ["la crisis de 2001", "Plan de Convertibilidad"], ["el default de 2001", "Plan de Convertibilidad"]])
  idx: uno_de([0, 1, 2])

respuesta: "Plan de Convertibilidad"
tipo: mc
opciones_explicitas: ["Plan de Convertibilidad", "Ley de Convertibilidad", "Plan de Estabilización", "Plan de Austeridad"]

enunciado: "El contexto de {evento[idx][0]} puso fin a un modelo económico basado en el {evento[idx][1]}."

explicacion: |
  La crisis de 2001 marcó el fin de la convertibilidad (1 peso = 1 dólar) implementada en los años 90.
```

### 3 — El proceso de transición
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["derechos_humanos", "justicia"]

variables:
  juicio: uno_of([["Juicio a las Juntas", "1985"], ["Juicio a las Juntas", "1985"], ["Juicio a las Juntas", "1985"]])
  idx: uno_de([0, 1, 2])

respuesta: "1985"
tipo: completar
respuestas_validas: ["1985"]

enunciado: "El histórico ___ que sentó un precedente mundial en justicia por derechos humanos ocurrió en el año ___."

explicacion: |
  El Juicio a las Juntas de 1985 fue un hito fundamental en la historia reciente argentina para el juicio a los responsables de la última dictadura.
```

### 4 — El cambio de siglo
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["politica", "gobierno"]

variables:
  periodo: uno_of([["el mandato de Néstor Kirchner", "2003"], ["el mandato de Néstor Kirchner", "2003"], ["el mandato de Néstor Kirchner", "2003"]])
  idx: uno_of([0, 1, 2])

respuesta: "2003"
tipo: input
tolerancia_abs: 0

enunciado: "Néstor Kirchner asumió la presidencia de la República en el año ___."

explicacion: |
  Néstor Kirchner asumió el cargo en 2003, iniciando un periodo de transformación política y económica.
```

### 5 — Secuencia de presidentes
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["ordenar", "presidencias"]

variables:
  secuencia: ["Raúl Alfonsín", "Carlos Menem", "Fernando de la Rúa"]

respuesta: ["Raúl Alfonsín", "Carlos Menem", "Fernando de la Rúa"]
tipo: ordenar
opciones_explicitas: ["Raúl Alfonsín", "Carlos Menem", "Fernando de la Rúa"]

enunciado: "Ordene cronológicamente los siguientes presidentes argentinos (de menor a mayor antigüedad):"

pasos:
  - "Identifique el año de inicio de cada mandato."
  - "Coloque el primero en la posición 1."

explicacion: |
  La secuencia correcta es Alfonsín (1983), Menem (1989) y De la Rúa (1999).
```