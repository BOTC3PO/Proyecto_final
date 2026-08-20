### 1 — El mito de la pubertad y la identidad
```
metadata:
  materia: "psicologia"
  tema: "desarrollo_identidad"
  nivel: "basico"
  tags: ["pubertad", "identidad", "desarrollo"]

respuesta: falso
tipo: vf

enunciado: "Es correcto afirmar que la identidad personal se consolida completamente durante la pubertad debido a los cambios hormonales, sin necesidad de procesos cognitivos posteriores."

explicacion: |
  La identidad es un proceso continuo que se extiende durante la adolescencia y la adultez joven. Si bien la pubertad aporta cambios biológicos que influyen en la autopercepción, la consolidación de la identidad requiere procesos psicológicos y sociales complejos que trascienden lo hormonal.
```

### 2 — Secuencia del desarrollo físico y cognitivo
```
metadata:
  materia: "psicologia"
  tema: "etapas_desarrollo"
  nivel: "intermedio"
  tags: ["niñez", "pubertad", "secuencia"]

variables:
  etapas: ["Niñez", "Pubertad", "Adolescencia"]
  orden_correcto: ["Niñez", "Pubertad", "Adolescencia"]

opciones_explicitas:
  - ["Niñez", "Pubertad", "Adolescencia"]
  - ["Pubertad", "Niñez", "Adolescencia"]
  - ["Niñez", "Adolescencia", "Pubertad"]

respuesta: ["Niñez", "Pubertad", "Adolescencia"]
tipo: ordenar

enunciado: "Ordena las siguientes etapas del desarrollo humano de acuerdo a su aparición cronológica típica, considerando los cambios biológicos y la maduración de la identidad."

explicacion: |
  El desarrollo sigue una secuencia biológica y psicológica: primero la niñez (desarrollo motor y cognitivo básico), luego la pubertad (estirón y maduración sexual) y finalmente la adolescencia (reorganización de la identidad y pensamiento abstracto).
```

### 3 — Confusión entre cambios físicos y psicosociales
```
metadata:
  materia: "psicologia"
  tema: "pubertad_cambios"
  nivel: "basico"
  tags: ["pubertad", "cambios_fisicos"]

variables:
  escenario: [
    ["el aumento de la estatura y vello corporal", "cambios físicos"],
    ["la búsqueda de autonomía y pertenencia grupal", "cambios psicosociales"]
  ]
  idx: uno_de([0, 1])

respuesta: "cambios físicos"
tipo: mc

opciones_explicitas:
  - "cambios físicos"
  - "cambios psicosociales"
  - "cambios cognitivos"

enunciado: "Un error común es confundir los procesos biológicos con los procesos de identidad. Si un individuo experimenta {escenario[idx][0]}, está atravesando principalmente ___."

explicacion: |
  Es fundamental distinguir entre la maduración biológica (pubertad/cambios físicos) y la maduración de la identidad y el rol social (adolescencia/cambios psicosociales).
```

### 4 — La naturaleza de la identidad en la niñez
```
metadata:
  materia: "psicologia"
  tema: "niñez_identidad"
  nivel: "intermedio"
  tags: ["niñez", "identidad", "autoestima"]

respuesta: "en construcción"
tipo: completar

respuestas_validas:
  - "en construcción"
  - "en desarrollo"

enunciado: "A diferencia de la identidad consolidada del adulto, la identidad en la etapa de la niñez se encuentra ___."

explicacion: |
  En la niñez, la identidad es fluida y se construye principalmente a través de la interacción con los cuidadores primarios y el juego, siendo una base que se transformará profundamente en la pubertad.
```

### 5 — El impacto de la pubertad en la percepción de sí mismo
```
metadata:
  materia: "psicologia"
  tema: "pubertad_percepcion"
  nivel: "avanzado"
  tags: ["pubertad", "autoimagen", "psicologia"]

variables:
  casos: [
    ["La percepción de la imagen corporal se vuelve más crítica y sensible.", "verdadero"],
    ["La identidad se vuelve independiente de la opinión de los pares.", "falso"]
  ]
  idx: uno_de([0, 1])

respuesta: "verdadero"
tipo: vf

enunciado: "Durante la pubertad, debido a los cambios en la imagen corporal, es común que la percepción de la autopercepción se vuelva más crítica y sensible. ¿Es esto cierto?"

explicacion: |
  La combinación de cambios físicos rápidos y el desarrollo de la capacidad de pensamiento abstracto (metacognición) hace que el individuo sea mucho más consciente de su apariencia y de cómo es visto por los demás.
```