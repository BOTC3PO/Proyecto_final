### 1 — Identificación de organismos
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["derechos_humanos", "madres", "abuelas"]

tipo: mc
opciones_explicitas: ["Madres de Plaza de Mayo", "Abuelas de Plaza de Mayo", "Hijas de Plaza de Mayo", "Asamblea Permanente por los Derechos Humanos"]

enunciado: "El organismo constituido por mujeres que comenzaron a marchar en la Plaza de Mayo para exigir la aparición con vida de sus hijos desaparecidos se denomina:"

respuesta: "Madres de Plaza de Mayo"

explicacion: |
  Las Madres de Plaza de Mayo surgieron en 1977 como una respuesta directa a la desaparición sistemática de personas durante la última dictadura militar.
```

### 2 — El rol de las Abuelas
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["abuelas", "identidad", "derechos_humanos"]

tipo: completar
respuestas_validas: ["restitución", "identidad"]

enunciado: "El objetivo principal de las Abuelas de Plaza de Mayo es la búsqueda y la ___ de los niños, niñas y adolescentes que fueron apropiados ilegalmente durante la dictadura, garantizando su derecho a la ___."

respuesta: ["restitución", "identidad"]

explicacion: |
  Las Abuelas se enfocan específicamente en la búsqueda de los nietos desaparecidos, trabajando con el Banco Nacional de Datos Genéticos para restituir su identidad original.
```

### 3 — Cronología de la lucha
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["historia", "cronologia", "derechos_humanos"]

tipo: ordenar
opciones_explicitas: ["Surgimiento de las Madres de Plaza de Mayo", "Dictadura Militar (Proceso de Reorganización Nacional)", "Juicio a las Juntas"]

enunciado: "Ordene cronológicamente los siguientes hitos relacionados con la lucha por los derechos humanos en Argentina:"

respuesta: ["Dictadura Militar (Proceso de Reorganización Nacional)", "Surgimiento de las Madres de Plaza de Mayo", "Juicio a las Juntas"]

explicacion: |
  La dictadura (1976-1983) fue el contexto de la represión; las Madres surgieron durante el proceso (1977) y el Juicio a las Juntas fue el hito judicial clave tras el retorno a la democracia (1985).
```

### 4 — El concepto de "Desaparecido"
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "avanzado"
  tags: ["terminologia", "derechos_humanos"]

tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "El término 'desaparecido' se utiliza para describir a las personas que fueron secuestradas por fuerzas de seguridad o grupos paramilitares y de las cuales no se tiene rastro, siendo una práctica sistemática del terrorismo de Estado."

respuesta: verdadero

explicacion: |
  La desaparición forzada es un crimen de lesa humanidad que se caracteriza por la falta de información sobre el paradero de la víctima y la participación del Estado en el secuestro.
```

### 5 de 5 — Impacto de la lucha
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["memoria", "justicia", "derechos_humanos"]

variables:
  idx: uno_de([0, 1])
  escenario: [["El movimiento de las Madres fue fundamental para la recuperación de la democracia.", "El trabajo de las Abuelas es clave para la preservación de la identidad."], ["Las Madres", "Las Abuelas"]]

tipo: mc
opciones_explicitas: ["Madres de Plaza de Mayo", "Abuelas de Plaza de Mayo", "Amparos de Derechos Humanos"]

enunciado: "Según el contexto histórico, {escenario[idx][0]} se destaca como: {escenario[idx][1]}"

respuesta: escenario[idx][1]

explicacion: |
  Ambos organismos han sido pilares fundamentales para la construcción de la memoria, la verdad y la justicia en la Argentina contemporánea.
```