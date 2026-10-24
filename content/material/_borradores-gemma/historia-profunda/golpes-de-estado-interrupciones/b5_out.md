### 1 — El golpe de 1930
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["argentina", "siglo_xx", "dictadura"]

variables:
  escenario: uno_de([["José Félix Uriburu", "1930"], ["Agustín P. Justo", "1932"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][0]
tipo: mc
opciones_explicitas: ["José Félix Uriburu", "Agustín P. Justo", "Juan Perón", "Arturo Illia"]

enunciado: "El primer golpe de Estado que interrumpió el orden constitucional en Argentina durante el siglo XX fue liderado por {escenario[idx][0]} en el año {escenario[idx][1]}."

explicacion: |
  El golpe de 1930 derrocó a Hipólito Yrigoyen, marcando el inicio de la denominada "Década Infame".
```

### 2 — Secuencia de dictaduras (1955-1966)
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["ordenar", "cronologia"]

respuesta: ["Revolución Libertadora", "Revolución Argentina", "Onganía"]
tipo: ordenar
opciones_explicitas: ["Revolución Libertadora", "Revolución Argentina", "Onganía"]

enunciado: "Ordene cronológicamente los siguientes procesos/dictaduras que interrumpieron la democracia argentina entre 1955 y 1976:"

pasos:
  - "Identifique el golpe que derrocó a Perón en 1955."
  - "Identifique el proceso iniciado por Onganía en 1966."

explicacion: |
  La secuencia cronológica correcta es: Revolución Libertadora (1955), Revolución Argentina (1966) y el gobierno de facto de Onganía.
```

### 3 — La interrupción de 1976
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["dictadura", "proceso"]

respuesta: "Proceso de Reorganización Nacional"
tipo: completar
respuestas_validas: ["Proceso de Reorganización Nacional"]

enunciado: "El golpe de Estado iniciado el 24 de marzo de 1976 fue autodenominado por la junta militar como el ___."

explicacion: |
  El Proceso de Reorganización Nacional fue la dictadura más sangrienta de la historia argentina.
```

### 4 — Identificación de líderes
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["liderazgo", "militar"]

variables:
  datos: [["Videla", "1976"], ["Anaya", "1981"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Videla", "Anaya", "Galtieri", "Borda"]

enunciado: "El líder de la junta militar durante el inicio del golpe de {datos[idx][1]} fue {datos[idx][0]}."

explicacion: |
  Jorge Rafael Videla encabezó la dictadura que comenzó en 1976.
```

### 5 — El fin de la dictadura
```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["democracia", "retorno"]

respuesta: "Alfonsín"
tipo: mc
opciones_explicitas: ["Alfonsín", "Menem", "Duhalde", "De la Rúa"]

enunciado: "Tras la caída de la dictadura militar en 1983, el primer presidente elegido fue ___."

explicacion: |
  Raúl Alfonsín asumió la presidencia en 1983, marcando el retorno a la democracia tras la dictadura.
```