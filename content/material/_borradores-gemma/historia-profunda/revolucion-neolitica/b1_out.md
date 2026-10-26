### 1 — El gran cambio
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "sedentarismo"]

tipo: mc
opciones_explicitas: ["Caza y recolección", "Agricultura y ganadería", "Comercio de especias", "Metalurgia del hierro"]

enunciado: "La Revolución Neolítica se define fundamentalmente por el paso de una economía de subsistencia basada en la caza y la recolección hacia una basada en la..."

respuesta: "Agricultura y ganadería"

explicacion: |
  El Neolítico marca la transición de la dependencia de los recursos naturales espontáneos al control de la producción de alimentos mediante la domesticación de plantas y animales.
```

### 2 — El sedentarismo
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["estilo_de_vida", "asentamientos"]

variables:
  escenario: uno_de([["nómadas", "se desplazan constantemente"], ["sedentarios", "se establecen en un lugar fijo"]])

tipo: completar
respuestas_validas: ["nómadas", "sedentarios"]

enunciado: "Antes de la agricultura, los grupos humanos eran principalmente {escenario[0]}, pero con la domesticación de especies se volvieron {escenario[1]}."

respuesta: escenario[1]

explicacion: |
  Al tener cultivos y ganado que cuidar, los grupos humanos ya no necesitaban desplazarse constantemente, dando origen a los primeros asentamientos permanentes.
```

### 3 — El excedente y la jerarquía
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["sociedad", "excedente"]

tipo: mc
opciones_explicitas: ["Desigualdad social", "Igualdad absoluta", "Desaparición de la propiedad", "Retorno a la caza"]

enunciado: "La capacidad de producir un excedente de alimentos permitió la especialización del trabajo y, consecuentemente, el surgimiento de..."

respuesta: "Desigualdad social"

explicacion: |
  El excedente alimentario permitió que no todos tuvieran que producir comida, lo que llevó a la división del trabajo y a la aparición de estructuras de poder y jerarquías sociales.
```

### 4 — Cronología del cambio
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["tiempo", "cronologia"]

tipo: ordenar
opciones_explicitas: ["Paleolítico", "Revolución Neolítica", "Edad de los Metales"]

respuesta: ["Paleolítico", "Revolución Neolítica", "Edad de los Metales"]

enunciado: "Ordena cronológicamente las etapas de la historia humana según el uso de herramientas y tecnología de subsistencia:"

explicacion: |
  La Revolución Neolítica es el puente entre el Paleolítico (piedra tallada/caza) y el desarrollo de las civilizaciones complejas que usarían metales.
```

### 5 — El impacto demográfico
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["demografia", "salud"]

variables:
  dato: uno_de([[12000, "aumentó"], [5000, "disminuyó"]])

tipo: input
tolerancia_abs: 0

enunciado: "Se estima que hace aproximadamente {dato[0]} años, la transición hacia la agricultura provocó que la población mundial {dato[1]} de forma drástica."

respuesta: dato[1]

explicacion: |
  La agricultura permitió una mayor densidad de población por unidad de superficie, aunque también trajo nuevos desafíos como enfermedades zoonóticas y carencias nutricionales específicas.
```