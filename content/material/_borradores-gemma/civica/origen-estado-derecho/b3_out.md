### 1 — Normas y complejidad social
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["sociologia", "derecho"]

enunciado: "En sociedades pequeñas y con pocos miembros, el orden social se mantiene principalmente mediante normas ___ que se basan en la repetición de conductas aceptadas."

respuestas_validas: ["informales", "consuetudinarias"]
tipo: completar

explicacion: |
  En grupos reducidos, la costumbre (derecho consuetudinario) es suficiente para regular la convivencia, ya que todos se conocen y la presión social es efectiva.
```

### 2 — Evolución de las normas
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["evolucion", "derecho_formal"]

variables:
  escenario: uno_de([["tribu_pequena", "costumbres"], ["estado_moderno", "leyes escritas"]])

enunciado: "Considerando el desarrollo de las sociedades, si nos encontramos en un {escenario[0]}, el control social se ejerce mediante {escenario[1]}. Sin embargo, en un {escenario[0]} de gran escala, se requiere de un sistema de {escenario[1]} para garantizar la certeza jurídica."

opciones_explicitas: ["costumbres", "leyes escritas"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  A medida que la sociedad crece en complejidad y población, las costumbres se vuelven insuficientes para regular interacciones entre extraños, haciendo necesario el derecho formal escrito.
```

### 3 — Características del Derecho Formal
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["derecho_formal", "estado"]

enunciado: "El derecho formal, propio de sociedades complejas, se diferencia de la costumbre principalmente porque es:"

opciones_explicitas: ["Escrito y sancionado por el Estado", "Basado en la tradición oral", "Aplicado solo por líderes religiosos", "Difuso y poco claro"]
respuesta: "Escrito y sancionado por el Estado"
tipo: mc

explicacion: |
  El derecho formal requiere instituciones (como el Estado) que garanticen su cumplimiento mediante sanciones institucionalizadas y su publicidad mediante la escritura.
```

### 4 — Secuencia de complejidad social
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "avanzado"
  tags: ["evolucion", "complejidad"]

enunciado: "Ordene los niveles de complejidad social según la necesidad de formalización del derecho:"

opciones_explicitas: ["Sociedad de bandas (costumbres)", "Sociedades tribales (normas consuetudinarias)", "Estados modernos (derecho escrito)"]
respuesta: ["Sociedades de bandas (costumbres)", "Sociedades tribales (normas consuetudinarias)", "Estados modernos (derecho escrito)"]
tipo: ordenar

explicacion: |
  La evolución sociológica sugiere que a mayor densidad poblacional y especialización de funciones, mayor es la necesidad de normas escritas, abstractas y universales.
```

### 5 — El rol del Estado en el Derecho
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["estado", "normas"]

variables:
  caso: uno_de([["sociedad_simple", "presión social"], ["sociedad_compleja", "coacción estatal"]])

enunciado: "En una {caso[0]}, la desviación de la norma se sanciona mediante la {caso[1]}. En una {caso[1]}, la sanción es ejercida por el aparato de {caso[1]}."

opciones_explicitas: ["presión social", "coacción estatal"]
respuesta: caso[1]
tipo: mc

explicacion: |
  El paso de la costumbre al derecho formal implica el paso de una sanción social (basada en la reputación o el grupo) a una sanción institucionalizada (basada en la fuerza legítima del Estado).
```