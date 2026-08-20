### 1 — El dominio del Precámbrico
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["precambrico", "eones", "geologia"]

respuesta: "88%"
tipo: completar
respuestas_validas: ["88%", "ochenta y ocho por ciento"]

enunciado: "El Precámbrico, que abarca desde la formación de la Tierra hasta la aparición de organismos complejos, representa aproximadamente el ___ de la historia geológica del planeta."

explicacion: |
  El Precámbrico es un término que agrupa los eones Hadeico, Arcaico y Proterozoico. Aunque constituye la gran mayoría del tiempo terrestre, su registro es escaso debido a la falta de fósiles de partes duras (conchas, huesos) en esa época.
```

### 2 — Composición del Precámbrico
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["eones", "precambrico"]

variables:
  escenario: uno_de([
    ["Hadeico", "formación de la Tierra y bombardeo intenso"],
    ["Arcaico", "aparición de las primeras células procariontes"],
    ["Proterozoico", "oxigenación de la atmósfera y células eucariotas"]
  ])

respuesta: escenario[0][1]
tipo: mc
opciones_explicitas: ["formación de la Tierra y bombardeo intenso", "aparición de las primeras células procariontes", "oxigenación de la atmósfera y células eucariotas"]

enunciado: "Si nos situamos en el eón {escenario[0][0]}, ¿cuál fue el evento característico de ese periodo?"

explicacion: |
  El eón {escenario[0][0]} se caracteriza por {escenario[0][1]}.
```

### 3 — Secuencia de los Eones
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["orden_cronologico", "eones"]

respuesta: ["Hadeico", "Arcaico", "Proterozoico"]
tipo: ordenar
opciones_explicitas: ["Hadeico", "Arcaico", "Proterozoico"]

enunciado: "Ordena cronológicamente, desde el más antiguo al más reciente, los tres eones que conforman el Precámbrico:"

explicacion: |
  La secuencia correcta es Hadeico (formación), seguido del Arcaico (vida unicelular) y finalmente el Proterozoico (mayor complejidad y oxígeno).
```

### 4 — El registro fósil precámbrico
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["paleontologia", "precambrico"]

respuesta: "fósiles complejos"
tipo: completar
respuestas_validas: ["fósiles complejos", "restos de organismos complejos"]

enunciado: "Una de las razones por las cuales el Precámbrico suele ser menos detallado en los libros de texto es la escasez de ___."

explicacion: |
  Durante la mayor parte del Precámbrico, la vida estaba compuesta por organismos microscópicos o blandos que no dejaban huellas fósiles fácilmente preservables, a diferencia de la era Paleozoica en adelante.
```

### 5 — La gran transición química
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "avanzado"
  tags: ["oxigeno", "proterozoico"]

variables:
  evento: uno_de([
    ["Proterozoico", "Oxigenación de la atmósfera"],
    ["Arcaico", "Aparición de la fotosíntesis oxigénica"],
    ["Hadeico", "Condensación de la corteza terrestre"]
  ])

respuesta: evento[0][1]
tipo: mc
opciones_explicitas: ["Oxigenación de la atmósfera", "Aparición de la fotosíntesis oxigénica", "Condensación de la corteza terrestre"]

enunciado: "El evento de {evento[0][1]} es el hito fundamental que define al eón {evento[0][0]}."

explicacion: |
  Aunque la fotosíntesis comenzó antes, la acumulación masiva de oxígeno (Gran Evento de Oxidación) es el rasgo distintivo del Proterozoico.
```