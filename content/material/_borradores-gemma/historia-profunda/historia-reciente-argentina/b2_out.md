### 1 — El Corralito
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["crisis_2001", "economia"]

respuesta: "corralito"
tipo: completar
respuestas_validas: ["corralito", "corralito bancario"]

enunciado: "La medida implementada por el gobierno de Fernando de la Rúa que restringió la extracción de efectivo de los depósitos bancarios se conoció como ___."

explicacion: |
  El 'corralito' fue la medida que limitó la disponibilidad de dinero en efectivo, lo que desencadenó una crisis de confianza masiva y protestas sociales.
```

### 2 — El lema de las protestas
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["protestas", "social"]

respuesta: "que se vayan todos"
tipo: mc
opciones_explicitas: ["que se vayan todos", "viva la patria", "justicia social", "libertad para todos"]

enunciado: "Durante las protestas de diciembre de 2001, un lema se volvió icónico para expresar el descontento social hacia la clase política: '___'."

explicacion: |
  El grito '¡Que se vayan todos, que no queda ni uno solo!' reflejaba el hartazgo generalizado de la sociedad hacia la dirigencia política de todos los sectores.
```

### 3 — Sucesión Presidencial
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["politica", "sucesion"]

variables:
  idx: uno_de([0, 1, 2])
  escenarios: [
    ["Adolfo Rodríguez Saá", "estuvo solo 7 días en el cargo"],
    ["Eduardo Duhalde", "asumió tras la renuncia de De la Rúa"],
    ["Eduardo Duhalde", "fue elegido por la Asamblea Legislativa"]
  ]

respuesta: escenarios[idx][0]
tipo: mc
opciones_explicitas: ["Adolfo Rodríguez Saá", "Eduardo Duhalde", "Eduardo Crescimbeni", "Ramón Puerta"]

enunciado: "Tras la renuncia de De la Rúa, el sucesor que asumió la presidencia de la Nación por apenas una semana fue {escenarios[idx][0]} ({escenarios[idx][1]})."

explicacion: |
  La crisis política fue tan aguda que Argentina tuvo tres presidentes en una semana: De la Rúa, Rodríguez Saá y finalmente Duhalde.
```

### 4 — El fin de la Convertibilidad
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["economia", "convertibilidad"]

respuesta: 1
tipo: mc
opciones_explicitas: ["1", "2", "3", "4"]

enunciado: "¿Cuántos años duró aproximadamente el Plan de Convertibilidad (1 peso = 1 dólar) que colapsó durante la crisis de 2001?"

explicacion: |
  El Plan de Convertibilidad se implementó en 1991 y su salida forzosa ocurrió en 2002, tras el estallido de la crisis de 2001.
```

### 5 — Orden Cronológico de la Crisis
```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["cronologia", "crisis"]

respuesta: ["Corralito", "Cacerolazos", "Renuncia de De la Rúa", "Devaluación"]
tipo: ordenar
opciones_explicitas: ["Corralito", "Cacerolazos", "Renuncia de De la Rúa", "Devaluación"]

enunciado: "Ordena cronológicamente los eventos que marcaron el clímax de la crisis de 2001 en Argentina:"

explicacion: |
  Primero se impuso el corralito, lo que provocó los cacerolazos; esto derivó en la renuncia del presidente y, finalmente, la devaluación del peso.
```