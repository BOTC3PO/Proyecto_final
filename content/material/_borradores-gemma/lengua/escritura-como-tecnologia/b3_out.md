### 1 — El origen de la escritura alfabética
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["historia", "alfabeto"]

respuesta: "Mediterráneo oriental"
tipo: completar
respuestas_validas: ["Mediterráneo oriental"]

enunciado: "La escritura alfabética, tal como la conocemos, tuvo su origen en el ___."

explicacion: |
  El sistema alfabético se desarrolló en la región del Mediterráneo oriental, simplificando la representación de los sonidos de la lengua.
```

### 2 — Ventajas del sistema alfabético
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["aprendizaje", "tecnologia"]

opciones_explicitas: ["Sistemas logográficos", "Sistemas silábicos", "Sistemas alfabéticos"]

respuesta: "Sistemas alfabéticos"
tipo: mc

enunciado: "¿Qué sistema de escritura permitió una simplificación enorme en el proceso de aprendizaje de la lectura y la escritura en comparación con los sistemas logográficos o silábicos?"

explicacion: |
  Al representar sonidos individuales (fonemas) en lugar de conceptos (logogramas) o sílabas completas, el alfabeto requiere aprender un número mucho menor de signos.
```

### 3 — Evolución de los alfabetos
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["griego", "latino"]

variables:
  escenario: uno_de([["griego", "latino"], ["jeroglífico", "cuneiforme"], ["silábico", "logográfico"]])

respuesta: escenario[0][0]
tipo: mc
opciones_explicitas: ["griego", "latino", "jeroglífico", "cuneiforme", "silábico", "logográfico"]

enunciado: "El alfabeto {escenario[0][0]} y el alfabeto {escenario[0][1]} son descendientes directos de las innovaciones de la escritura alfabética antigua."

explicacion: |
  El alfabeto griego y el latino son los pilares de la escritura occidental, derivados de evoluciones de sistemas alfabéticos anteriores.
```

### 4 — Comparativa de complejidad
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "avanzado"
  tags: ["cognicion", "tecnologia"]

variables:
  datos: [
    ["logográfico", "alta", "complejo"],
    ["silábico", "media", "intermedio"],
    ["alfabético", "baja", "simple"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
tipo: mc
opciones_explicitas: ["complejo", "intermedio", "simple"]

enunciado: "Si comparamos la carga cognitiva necesaria para aprender un sistema de escritura, un sistema {datos[idx][0]} presenta una dificultad de aprendizaje de tipo {datos[idx][1]}."

explicacion: |
  La tecnología de la escritura alfabética redujo la dificultad de aprendizaje a un nivel {datos[idx][1]}, facilitando la alfabetización masiva.
```

### 5 — Secuencia de evolución tecnológica
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["evolucion", "orden"]

opciones_explicitas: ["Logográfico", "Silábico", "Alfabético"]

respuesta: ["Logográfico", "Silábico", "Alfabético"]
tipo: ordenar

enunciado: "Ordena cronológicamente la evolución de la complejidad tecnológica de los sistemas de escritura, desde el más complejo al más simplificado:"

explicacion: |
  La evolución tecnológica de la escritura muestra una tendencia hacia la reducción de signos: de miles de logogramas a decenas de fonemas.
```