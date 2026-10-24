### 1 — El dilema del diseño desde cero
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["metodologia", "eficiencia"]

variables:
  escenario: uno_de([
    ["Se requiere un sistema de filtrado de agua para una comunidad rural.", "reutilizar"],
    ["Se busca optimizar un motor de combustión interna.", "analizar_precedentes"],
    ["Se necesita diseñar un puente peatonal de madera.", "estudiar_estándares"]
  ])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["reutilizar", "analizar_precedentes", "estudiar_estándares", "inventar_todo"]
idx: uno_de([0,1,2])

enunciado: "Ante el escenario: '{escenario[idx][0]}', la acción más eficiente para evitar la 'reinvención de la rueda' es: ___"

explicacion: |
  Investigar soluciones existentes permite aprovechar conocimientos probados, ahorrando tiempo y recursos.
```

### 2 — ¿Es necesario reinventar?
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Si existe un estándar industrial consolidado para un componente mecánico, ¿es una buena práctica de ingeniería intentar diseñar un proceso de fabricación completamente nuevo sin antes estudiar dicho estándar?"

explicacion: |
  No. Ignorar los estándares y soluciones existentes aumenta el riesgo de errores y costos innecesarios.
```

### 3 — El proceso de investigación
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodologia"]

respuesta: ["Búsqueda de antecedentes", "Análisis de fallos previos", "Selección de solución base", "Diseño de prototipo"]
tipo: ordenar

opciones_explicitas: ["Búsqueda de antecedentes", "Análisis de fallos previos", "Selección de solución base", "Diseño de prototipo", "Construcción final"]

enunciado: "Ordene los pasos lógicos para aplicar el aprendizaje de precedentes en un nuevo proyecto de ingeniería:"

explicacion: |
  El orden lógico comienza con la investigación, sigue con el análisis de lo que falló o funcionó, la elección de una base y finalmente el diseño.
```

### 4 — Análisis de costos y tiempo
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["gestion_proyectos"]

variables:
  caso: uno_de([
    ["Caso A: Implementar un software de gestión ya existente.", "200"],
    ["Caso B: Desarrollar un software de gestión desde cero.", "1500"]
  ])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["200", "1500"]
idx: uno_de([0,1])

enunciado: "Si el presupuesto para el '{caso[idx][0]}' es de $1000, ¿cuál es el costo estimado (en dólares) según el escenario planteado?"

explicacion: |
  La investigación de soluciones existentes suele reducir drásticamente los costos de desarrollo inicial.
```

### 5 — Patrones de diseño
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "avanzado"
  tags: ["patrones", "optimizacion"]

variables:
  patron: uno_de([
    ["Modularidad", "Escalabilidad"],
    ["Redundancia", "Robustez"],
    ["Simplicidad", "Mantenibilidad"]
  ])

respuesta: patron[idx][0]
tipo: mc
opciones_explicitas: ["Modularidad", "Escalabilidad", "Redundancia", "Robustez", "Simplicidad", "Mantenibilidad"]
idx: uno_de([0,1,2])

enunciado: "Al estudiar un sistema de ingeniería previo, se observa que su principal fortaleza es la {patron[idx][0]}. Si el nuevo diseño busca replicar exactamente esta característica, el objetivo principal es la: ___"

explicacion: |
  Identificar la característica clave de una solución exitosa permite replicar su éxito en nuevos contextos.
```