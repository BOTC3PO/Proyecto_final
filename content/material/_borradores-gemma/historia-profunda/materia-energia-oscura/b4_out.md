### 1 — El enigma de la composición cósmica
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["cosmologia", "misterio"]

respuesta: "materia_oscura"
tipo: mc
opciones_explicitas: ["materia_oscura", "materia_oscura", "materia_oscura", "materia_oscura"]

enunciado: "Aunque no podemos verla directamente, sabemos que existe la ___ debido a su influencia gravitatoria en las galaxias."

explicacion: |
  La materia oscura no emite, absorbe ni refleja luz, lo que la hace invisible, pero su gravedad es fundamental para mantener unidas a las galaxias.
```

### 2 — El destino del universo
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["expansion", "energia_oscura"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Big Crunch", "Big Freeze"], ["Big Rip", "Big Freeze"]]
  respuestas: [["Big Crunch", "Big Freeze"], ["Big Rip", "Big Freeze"]]

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["Big Crunch", "Big Freeze", "Big Rip", "Big Bounce"]

enunciado: "Si la energía oscura domina y acelera la expansión indefinidamente, el destino más probable del universo es el {escenarios[escenario_idx][1]}."

explicacion: |
  La energía oscura actúa como una fuerza repulsiva que acelera la expansión del universo. Dependiendo de su densidad, el universo podría terminar en un enfriamiento eterno (Big Freeze) o un desgarro final (Big Rip).
```

### 3 — Efectos gravitatorios
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["gravedad", "evidencia"]

respuesta: 5
tipo: input
tolerancia_abs: 0.1

enunciado: "Si la materia visible representa aproximadamente el 5% del universo, y la materia oscura el 27%, ¿qué porcentaje aproximado del universo corresponde a la energía oscura?"

pasos:
  - "Sumar el porcentaje de materia visible y materia oscura: 5 + 27 = 32"
  - "Restar ese total al 100% del universo: 100 - 32 = 68"

explicacion: |
  Según el modelo estándar de cosmología (Lambda-CDM), la energía oscura constituye aproximadamente el 68% del contenido energético-material del universo.
```

### 4 — Conceptos fundamentales
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: ["materia_oscura", "energia_oscura", "materia_visible"]
tipo: ordenar
opciones_explicitas: ["materia_oscura", "energia_oscura", "materia_visible"]

enunciado: "Ordena estos componentes del universo de mayor a menor abundancia (según el modelo actual):"

explicacion: |
  El orden correcto de abundancia es: Energía Oscura (~68%), Materia Oscura (~27%) y Materia Visible (~5%).
```

### 5 — Identidad desconocida
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["fisica_particulas"]

respuesta: "es_desconocida"
tipo: completar
respuestas_validas: ["es_desconocida", "es_desconocida"]

enunciado: "A pesar de las décadas de investigación, la naturaleza exacta de la energía oscura ___."

explicacion: |
  Aunque detectamos su efecto en la expansión acelerada del cosmos, la identidad de la partícula o campo que la compone sigue siendo uno de los mayores misterios de la ciencia.
```