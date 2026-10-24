### 1 — El Informe Nunca Más
```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["conadep", "derechos_humanos"]

respuesta: "CONADEP"
tipo: completar
respuestas_validas: ["CONADEP"]

enunciado: "El informe fundamental que recopiló testimonios sobre la represión sistemática durante la última dictadura militar fue elaborado por la ___."

explicacion: |
  La Comisión Nacional sobre la Desaparición de Personas (CONADEP) elaboró el informe 'Nunca Más', que fue clave para el posterior Juicio a las Juntas.
```

### 2 — Sitios de Memoria
```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["sitios_de_memoria", "museos"]

variables:
  idx: uno_de([0, 1])
  escenario: uno_de([["ESMA", "Ex Centro de Detención de la ESMA"], ["El Olimpo", "Ex Centro de Detención El Olimpo"]])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Ex Centro de Detención de la ESMA", "Ex Centro de Detención El Olimpo", "Ex Base Naval Puerto Belgrano", "Ex Escuela de Mecánica de la Armada"]

enunciado: "El sitio de memoria conocido como {escenario[idx][0]} es un ejemplo de un espacio que funcionó como centro clandestino de detención y hoy es un museo dedicado a la memoria."

explicacion: |
  Los Sitios de Memoria son lugares que fueron utilizados para la represión y que han sido recuperados para la memoria colectiva, transformándose en museos o centros culturales.
```

### 3 — Conceptos de Derechos Humanos
```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["verdad", "justicia", "derechos_humanos"]

respuesta: "Verdad"
tipo: mc
opciones_explicitas: ["Verdad", "Justicia", "Memoria", "Reparación"]

enunciado: "En el marco de las políticas de Derechos Humanos, el derecho a conocer la realidad de lo sucedido con las víctimas se denomina derecho a la ___."

explicacion: |
  El derecho a la Verdad, a la Justicia y a la Memoria son pilares fundamentales de la política de Derechos Humanos en Argentina tras la recuperación democrática.
```

### 4 — Orden cronológico de procesos
```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["cronologia", "democracia"]

respuesta: ["Fin de la dictadura", "Informe Nunca Más", "Juicio a las Juntas"]
tipo: ordenar
opciones_explicitas: ["Fin de la dictadura", "Informe Nunca Más", "Juicio a las Juntas", "Ley de Amnistía"]

enunciado: "Ordene cronológicamente los hitos fundamentales del proceso de justicia y memoria tras el retorno a la democracia en Argentina:"

explicacion: |
  Primero se produjo la salida de la dictadura, luego la CONADEP presentó su informe y posteriormente se llevó a cabo el histórico Juicio a las Juntas en 1985.
```

### 5 — El rol de la justicia
```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["justicia", "impunidad"]

respuesta: "imprescindible"
tipo: completar
respuestas_validas: ["imprescindible", "fundamental", "clave"]

enunciado: "Para el proceso de reconstrucción del Estado de Derecho, la aplicación de la ___ para juzgar los crímenes de lesa humanidad fue considerada ___."

explicacion: |
  La justicia es un componente esencial para romper el ciclo de impunidad y garantizar que los crímenes contra la humanidad no queden sin castigo.
```