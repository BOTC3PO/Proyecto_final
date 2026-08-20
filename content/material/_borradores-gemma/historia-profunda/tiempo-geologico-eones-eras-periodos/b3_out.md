### 1 — El gran límite de la vida
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["extincion", "permo_trias"]

respuesta: "extincion_masiva"
tipo: "mc"
opciones_explicitas: ["cambio_climatico", "extincion_masiva", "formacion_continentes", "tectonica_de_placas"]

enunciado: "Los límites entre eras y periodos geológicos suelen estar marcados por eventos de ___ que provocan cambios drásticos en el registro fósil."

explicacion: |
  La mayoría de los límites geológicos importantes (como el del Pérmico-Triásico) se definen por la desaparición repentina de grandes grupos de organismos en el registro fósil.
```

### 2 — El fin de los dinosaurios
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["cretacico_paleogeno", "asteroide"]

variables:
  escenario: uno_de([["Cretácico-Paleógeno", "impacto de asteroide"], ["Pérmico-Triásico", "erupciones masivas"]])

respuesta: escenario[1]
tipo: "completar"
respuestas_validas: ["impacto de asteroide", "erupciones masivas"]

enunciado: "El límite entre el periodo {escenario[0]} y el Paleógeno se asocia comúnmente con un ___."

explicacion: |
  El impacto del asteroide Chicxulub causó la extinción masiva que terminó con la era de los dinosaurios al final del Cretácico.
```

### 3 — Secuencia de la Era de los Reptiles
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "avanzado"
  tags: ["ordenar", "era_mesozoica"]

respuesta: ["Triásico", "Jurásico", "Cretácico"]
tipo: "ordenar"
opciones_explicitas: ["Triásico", "Jurásico", "Cretácico", "Pérmico"]

enunciado: "Ordena cronológicamente los periodos que conforman la Era Mesozoica, desde el más antiguo al más reciente."

explicacion: |
  La Era Mesozoica se divide en los periodos Triásico, Jurásico y Cretácico.
```

### 4 — El gran evento del Pérmico
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["permo_trias", "extincion"]

respuesta: "Triásico"
tipo: "completar"
respuestas_validas: ["Triásico", "Jurásico", "Cretácico"]

enunciado: "La mayor extinción masiva de la historia de la Tierra ocurrió al final del periodo Pérmico, marcando el inicio del periodo ___."

explicacion: |
  La extinción del Pérmico-Triásico es conocida como 'La Gran Mortandad' y dio inicio a la era de los dinosaurios.
```

### 5 — Marcadores del registro fósil
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["geologia", "fosil"]

respuesta: 100
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Si un geólogo encuentra un cambio abrupto en la abundancia de fósiles en un estrato, este cambio suele indicar que se está cruzando un límite de un periodo o era. ¿Qué porcentaje (0-100) de estos cambios se deben a eventos de extinción masiva según la geología histórica? (Responde con un número entero aproximado)."

explicacion: |
  Aunque no es un valor matemático exacto de la naturaleza, en el contexto de la geología histórica, la mayoría de los límites de periodos se definen por estos eventos de extinción. (Nota: Esta es una pregunta de validación de concepto sobre la importancia de la extinción).
```