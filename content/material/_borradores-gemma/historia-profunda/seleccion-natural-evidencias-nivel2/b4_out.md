### 1 — Homología y ancestros comunes
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["homologia", "evolucion", "anatomia_comparada"]

tipo: mc
opciones_explicitas: ["Estructuras con diferente origen embrionario y función similar", "Estructuras con mismo origen embrionario pero diferente función", "Estructuras que cumplen la misma función pero tienen distinto origen", "Estructuras que han surgido de forma independiente por presión ambiental"]

enunciado: "La homología se define como la presencia de estructuras en diferentes especies que, aunque pueden tener funciones distintas, comparten un mismo origen evolutivo y embriológico. ¿Cuál de las siguientes opciones describe mejor este concepto?"

explicacion: |
  Las estructuras homólogas (como el brazo de un humano y el ala de un murciélago) tienen el mismo plan estructural básico debido a un ancestro común, aunque la selección natural las haya adaptado para funciones diferentes (manipular objetos vs. volar).
```

### 2 — El caso de los vertebrados
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["vertebrados", "homologia", "anatomia"]

variables:
  escenario: uno_de([
    ["el ala de un ave", "el brazo de un humano", "la aleta de una ballena"],
    ["la pata de un gato", "el ala de un murciélago", "el brazo de un humano"],
    ["la aleta de un delfín", "el ala de un ave", "la pata de un caballo"]
  ])

tipo: completar
respuestas_validas: ["huesos", "músculos", "tejido"]
respuesta: escenario[0]

enunciado: "Si comparamos {escenario[0]}, {escenario[1]} y {escenario[2]}, observamos que presentan una organización similar de ___ óseos, lo que evidencia un ancestro común para los tetrápodos."

explicacion: |
  La disposición de los huesos (húmero, radio, cúbito, carpos) es un ejemplo clásico de homología que demuestra que estas especies derivan de un mismo plan corporal ancestral.
```

### 3 — Divergencia evolutiva
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "avanzado"
  tags: ["divergencia", "adaptacion", "homologia"]

tipo: input
tolerancia_abs: 0

enunciado: "Cuando estructuras homólogas se adaptan a diferentes nichos ecológicos, el proceso se denomina divergencia evolutiva. Si la estructura es similar por origen pero muy distinta en función, estamos ante una homología. Si la estructura es similar en función pero de origen distinto, el término es ___."

respuestas_validas: ["analogía"]
respuesta: "analogía"

explicacion: |
  Es vital no confundir homología (mismo origen, distinta función) con analogía (distinto origen, misma función, como el ala de un insecto y el ala de un ave).
```

### 4 — Orden de la evidencia
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "basico"
  tags: ["metodologia", "evidencia"]

tipo: ordenar
opciones_explicitas: ["Observación de la morfología externa", "Identificación de estructuras homólogas", "Conclusión sobre el ancestro común"]

enunciado: "Para establecer la evidencia de la homología en un estudio comparativo, ¿cuál es el orden lógico de los pasos científicos?"

explicacion: |
  Primero se observa la morfología, luego se comparan las estructuras internas para hallar la homología y finalmente se infiere la relación filogenética.
```

### 5 — Análisis de estructuras
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["anatomia", "evolucion"]

variables:
  caso: uno_de([
    ["un ala de murciélago y un ala de ave"],
    ["una pata de perro y una aleta de ballena"],
    ["un brazo humano y una pata de gato"]
  ])

tipo: mc
opciones_explicitas: ["Son estructuras análogas", "Son estructuras homólogas", "Son estructuras vestigiales", "Son estructuras de origen independiente"]

enunciado: "Considerando el par de estructuras: {caso}. ¿Cuál es la conclusión correcta desde el punto de vista de la anatomía comparada?"

explicacion: |
  Al compartir el mismo patrón esquelético básico a pesar de sus funciones, se clasifican como homólogas.
```