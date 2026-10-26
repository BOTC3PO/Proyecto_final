### 1 — Heurística de Disponibilidad
```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_heuristica_disponibilidad"
  nivel: "basico"
  tags: ["heuristica", "disponibilidad", "juicio"]

enunciado: "Juan cree que es mucho más probable morir en un accidente de avión que en uno de coche porque ha visto muchas noticias sobre accidentes aéreos recientemente. Este error de juicio se debe a la heurística de ___."

respuestas_validas: ["disponibilidad"]
tipo: completar

explicacion: |
  La heurística de disponibilidad consiste en juzgar la probabilidad de un evento basándose en la facilidad con la que ejemplos vienen a la mente. Como los accidentes de avión son muy mediáticos, son más 'disponibles' en la memoria, lo que lleva a una sobreestimación de su frecuencia.
```

### 2 — Heurística de Representatividad
```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_representatividad"
  nivel: "intermedio"
  tags: ["representatividad", "estereotipos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [
    ["Ana es muy tímida, organizada y le gusta leer en soledad. ¿Es más probable que sea una bibliotecaria o una vendedora de seguros?", "bibliotecaria"],
    ["Pedro es muy extrovertido, le gusta el deporte y las fiestas. ¿Es más probable que sea un vendedor de seguros o un contable?", "vendedor de seguros"]
  ]

enunciado: "Considera el siguiente caso: {escenarios[caso_idx][0]} ¿Cuál es la opción más probable según el juicio intuitivo de la heurística de representatividad? {escenarios[caso_idx][1]}"

opciones_explicitas: ["bibliotecaria", "vendedora de seguros", "contable", "no se puede determinar"]
respuesta: escenarios[caso_idx][1]
tipo: mc

explicacion: |
  La heurística de representatividad nos hace juzgar la probabilidad de un evento basándonos en cuánto se parece a un estereotipo, ignorando la probabilidad base (la frecuencia real de esas profesiones en la población).
```

### 3 — Sesgo de Confirmación
```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_confirmacion"
  nivel: "basico"
  tags: ["confirmacion", "evidencia"]

enunciado: "Un investigador que cree que una nueva terapia es efectiva solo busca estudios que demuestren su éxito y descarta aquellos que muestran que no funciona. ¿Es este un ejemplo de sesgo de confirmación? ___"

respuesta: verdadero
tipo: vf

explicacion: |
  El sesgo de confirmación es la tendencia a buscar, interpretar y recordar información que confirma nuestras creencias previas, ignorando la evidencia que las contradice.
```

### 4 — Efecto Anclaje
```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_anclaje"
  nivel: "intermedio"
  tags: ["anclaje", "negociacion"]

pasos:
  - "Un vendedor dice que el precio original de un reloj es de $1.000."
  - "Inmediatamente ofrece un 'descuento especial' de $600."
  - "El comprador siente que está haciendo un gran negocio por $400, aunque el valor real sea menor."

enunciado: "En el ejemplo anterior, el primer número mencionado ($1.000) actúa como un ___ que condiciona la percepción del valor final."

respuestas_validas: ["ancla"]
tipo: completar

explicacion: |
  El efecto anclaje ocurre cuando la mente humana se apoya demasiado en la primera pieza de información ofrecida (el 'ancla') para tomar decisiones posteriores, incluso si esa información es irrelevante.
```

### 5 — Proceso de Toma de Decisión Sesgada
```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_proceso"
  nivel: "avanzado"
  tags: ["heuristica", "error"]

enunciado: "Ordena las etapas de cómo un error sistemático de juicio (sesgo) afecta la toma de decisiones:"

opciones_explicitas: ["Percepción de información incompleta", "Uso de una heurística (atajo mental)", "Error en la estimación de probabilidad", "Toma de una decisión errónea"]
respuesta: ["Percepción de información incompleta", "Uso de una heurística (atajo mental)", "Error en la estimación de probabilidad", "Toma de una decisión errónea"]
tipo: ordenar

explicacion: |
  El proceso comienza con la entrada de información, la cual es procesada rápidamente mediante atajos (heurísticas). Si la heurística no es adecuada para el contexto, produce un error sistemático en la probabilidad estimada, derivando en una decisión sesgada.
```