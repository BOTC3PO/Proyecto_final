### 1 — El Yo en la Modernidad
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["historia", "identidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["un individuo que busca su esencia interna", "subjetividad"], ["un sujeto definido por sus roles sociales", "colectividad"]]

enunciado: "Según la transición de la modernidad, el paso de un yo definido por la comunidad a un yo basado en la {datos[escenario_idx][1]} marca el nacimiento de la subjetividad moderna."

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas: ["subjetividad", "colectividad"]

explicacion: |
  La modernidad desplaza el eje de la identidad desde el grupo (familia, gremio, religión) hacia el individuo como centro de su propio universo psíquico.
```

### 2 — La noción de individuo
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["modernidad", "sujeto"]

enunciado: "¿Es la noción de un 'yo' individual y autónomo una característica que ha existido de la misma forma en todas las épocas de la historia humana?"

respuesta: falso
tipo: vf

explicacion: |
  Históricamente, la identidad estaba ligada a la pertenencia a un cuerpo social. El 'yo' individual es una construcción de la modernidad.
```

### 3 — Identidades en transición
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["identidad", "sociedad"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["identidad ligada a la tradición", "colectivismo"], ["identidad ligada a la elección personal", "individualismo"]]

enunciado: "En un análisis histórico, si comparamos un sistema basado en el {casos[caso_idx][0]} con uno basado en el {casos[caso_idx][1]}, el segundo representa el ideal de la modernidad."

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["colectivismo", "individualismo"]

explicacion: |
  El individualismo moderno postula que el sujeto es el arquitecto de su propia identidad, separándose de las estructuras predeterminadas.
```

### 4 — Factores del Yo Moderno
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["historia", "filosofia"]

enunciado: "Ordena cronológicamente las etapas que influyeron en la consolidación del 'yo' moderno, desde la estructura más externa a la más interna:"

pasos:
  - "Estructuras comunitarias y religiosas medievales"
  - "Surgimiento de la razón individualista"
  - "Consolidación de la subjetividad psicológica"

respuesta: ["Estructuras comunitarias y religiosas medievales", "Surgimiento de la razón individualista", "Consolidación de la subjetividad psicológica"]
tipo: ordenar
opciones_explicitas: ["Estructuras comunitarias y religiosas medievales", "Surgimiento de la razón individualista", "Consolidación de la subjetividad psicológica"]

explicacion: |
  La evolución va desde la pertenencia a un orden social dado hacia la introspección y la autonomía del sujeto.
```

### 5 — El sujeto de la modernidad
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["sujeto", "autonomia"]

variables:
  perfil_idx: uno_de([0, 1])
  perfiles: [["el sujeto es un reflejo de su linaje", "determinismo"], ["el sujeto es un agente de su propia historia", "autonomía"]]

enunciado: "En la psicología moderna, el concepto central es la {perfiles[perfil_idx][1]}, donde el individuo se percibe como un ___ de su propia historia."

respuesta: agente
tipo: completar
respuestas_validas: ["agente", "esclavo", "reflejo"]

explicacion: |
  La modernidad introduce la idea de agencia, donde el sujeto tiene la capacidad de decidir y actuar sobre su propio destino psíquico.
```