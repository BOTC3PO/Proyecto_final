### 1 — Concepto de Terrorismo de Estado
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["conceptos", "derechos_humanos"]

respuesta: "uso sistemático de la violencia ilegal por parte del Estado contra su población"
tipo: completar
respuestas_validas: ["uso sistemático de la violencia ilegal por parte del Estado contra su población"]

enunciado: "El terrorismo de Estado se define como el ___."

explicacion: |
  El terrorismo de Estado ocurre cuando las instituciones que deben proteger a los ciudadanos utilizan su poder y recursos para ejercer violencia, desapariciones y tortura de manera sistemática contra la población.
```

### 2 — Características del periodo 1976-1983
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["dictadura", "metodos"]

respuesta: "desapariciones forzadas"
tipo: mc
opciones_explicitas: ["desapariciones forzadas", "voto universal", "libertad de prensa", "debate parlamentario"]

enunciado: "Durante la última dictadura militar en Argentina (1976-1983), una de las prácticas sistemáticas de represión fue la:"

explicacion: |
  La desaparición forzada de personas fue una de las modalidades principales de la represión estatal, donde el Estado negaba la detención de la persona, impidiendo el acceso a la justicia y a la protección legal.
```

### 3 — Secuencia de la represión estatal
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "avanzado"
  tags: ["proceso", "metodologia"]

variables:
  fase_idx: uno_de([0, 1, 2])
  secuencia: [["Captura/Secuestro", "Detención clandestina", "Eliminación/Desaparición"], ["Inteligencia/Espionaje", "Operativo de captura", "Tortura/Interrogatorio"], ["Identificación de objetivos", "Secuestro", "Expropiación de bienes/hijos"]]

respuesta: secuencia[fase_idx]
tipo: ordenar
opciones_explicitas: ["Captura/Secuestro", "Detención clandestina", "Eliminación/Desaparición", "Inteligencia/Espionaje", "Operativo de captura", "Tortura/Interrogatorio", "Identificación de objetivos", "Secuestro", "Expropiación de bienes/hijos"]

enunciado: "Ordene la secuencia típica de un operativo de represión sistemática en un centro clandestino de detención (basado en el escenario asignado):"

pasos:
  - "Observe el orden lógico de los eventos presentados en las opciones."

explicacion: |
  El terrorismo de Estado operaba mediante ciclos de violencia que comenzaban con la identificación y captura, seguían con la detención en lugares no registrados y culminaban en la eliminación de la persona para evitar la responsabilidad legal.
```

### 4 — El rol de la propiedad privada y la familia
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["robo_identidad", "economía"]

respuesta: "falso"
tipo: vf

enunciado: "¿El terrorismo de Estado en Argentina se limitó únicamente a la represión física de opositores políticos, sin afectar el patrimonio de las víctimas o la identidad de sus descendientes?"

explicacion: |
  Falso. El terrorismo de Estado también incluyó el robo de bienes, la expropiación de empresas y el robo sistemático de bebés (hijos de desaparecidas), lo cual constituye un crimen de lesa humanidad adicional.
```

### 5 — Clasificación de la violencia estatal
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "avanzado"
  tags: ["derecho", "ilegalidad"]

variables:
  caso_idx: uno_de([0, 1])
  escenario: [["La tortura aplicada en centros clandestinos"], ["El asesinato de una persona sin juicio previo"]]
  resultado: ["ilegal", "ilegal"]

respuesta: resultado[caso_idx]
tipo: mc
opciones_explicitas: ["legal", "ilegal"]

enunciado: "En el contexto del terrorismo de Estado, {escenario[caso_idx]} es una acción considerada:"

explicacion: |
  Cualquier acción que rompa el debido proceso y utilice la violencia estatal fuera del marco de la ley para suprimir derechos fundamentales es una acción ilegal y un crimen de lesa humanidad.
```