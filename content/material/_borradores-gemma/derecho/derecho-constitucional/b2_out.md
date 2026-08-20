### 1 — El control de constitucionalidad
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["constitucion", "control_constitucional"]

respuesta: "inconstitucional"
tipo: mc
opciones_explicitas: ["constitucional", "inconstitucional", "nulo", "inaplicable"]

enunciado: "Si una ley sancionada por el Congreso contradice un principio fundamental establecido en la Constitución Nacional, un juez debe declarar que dicha ley es ___."

explicacion: |
  El control de constitucionalidad es la facultad de los jueces de asegurar que ninguna norma inferior (como una ley) contradiga la norma suprema (la Constitución). Si hay contradicción, la norma debe ser declarada inconstitucional.
```

### 2 — División de poderes
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["poderes", "estado"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [[0, "Poder Ejecutivo"], [1, "Poder Legislativo"]]

respuesta: "falso"
tipo: vf

enunciado: "En un sistema republicano, el {escenario[escenario_idx]} tiene la función principal de dictar leyes que rigen a toda la sociedad."

explicacion: |
  La función de dictar leyes corresponde al Poder Legislativo. El Poder Ejecutivo (escenario[0]) tiene la función de administrar y ejecutar las leyes.
```

### 3 — Derechos fundamentales en un caso práctico
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["derechos_fundamentales", "libertad_expresion"]

respuesta: ["libertad de expresión", "derecho a la intimidad"]
tipo: completar
respuestas_validas: ["libertad de expresión", "derecho a la intimidad"]

enunciado: "Un periodista publica información veraz sobre un funcionario público para denunciar corrupción. En este conflicto de derechos, la jurisprudencia suele priorizar la ___ sobre el ___."

pasos:
  - "Identificar el derecho en juego: informar sobre asuntos de interés público."
  - "Contrastar con el derecho a la privacidad del funcionario en el ejercicio de su cargo."
  - "Determinar cuál prevalece según la doctrina constitucional."

explicacion: |
  En casos de interés público, el derecho a la información y la libertad de expresión suelen prevalecer sobre la privacidad de los funcionarios, siempre que la información sea veraz y de relevancia social.
```

### 4 — Jerarquía normativa
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["jerarquia", "kelsen"]

respuesta: ["Constitución Nacional", "Tratados Internacionales de Derechos Humanos", "Leyes Nacionales", "Decretos"]
tipo: ordenar

opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales de Derechos Humanos", "Leyes Nacionales", "Decretos"]

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía, siguiendo el ordenamiento jurídico basado en la supremacía constitucional."

explicacion: |
  La Constitución y los Tratados de Derechos Humanos con jerarquía constitucional están en la cima. Por debajo se encuentran las leyes nacionales y, finalmente, los decretos del Poder Ejecutivo.
```

### 5 — El debido proceso
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "avanzado"
  tags: ["debido_proceso", "garantias"]

respuesta: 1
tipo: mc
opciones_explicitas: [0, 1, 2]

enunciado: "Un ciudadano es detenido y se le impide el acceso a un abogado y a ser escuchado por un juez antes de ser procesado. ¿Se ha vulnerado el derecho al debido proceso? (0: No, 1: Sí, 2: Solo si la prueba es falsa)"

explicacion: |
  El debido proceso es un derecho fundamental que garantiza que toda persona sea escuchada y tenga defensa técnica antes de que se dicte una resolución en su contra. La falta de defensa técnica y de intervención judicial viola este principio.
```