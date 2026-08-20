### 1 — Definición de Derecho Constitucional
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["definicion", "fundamentos"]

respuesta: "estudia la Constitución, la organización del Estado y los derechos fundamentales"
tipo: completar
respuestas_validas: ["estudia la Constitución, la organización del Estado y los derechos fundamentales"]

enunciado: "El Derecho Constitucional es la rama del derecho público que ___."

explicacion: |
  El Derecho Constitucional se encarga de regular la estructura fundamental del Estado y la protección de los derechos de los ciudadanos frente al poder.
```

### 2 — El objeto de estudio
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["objeto_estudio"]

variables:
  escenario: uno_de([[ "Constitución", "leyes comunes" ], [ "Constitución", "normas de tránsito" ], [ "Constitución", "contratos privados" ]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Constitución", "leyes comunes", "normas de tránsito", "contratos privados"]

enunciado: "El objeto principal de estudio del Derecho Constitucional es la {escenario[0]}."

explicacion: |
  La Constitución es la norma suprema que rige la organización de un Estado.
```

### 3 — Jerarquía normativa
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["jerarquia", "normas"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema jurídico democrático, la Constitución se encuentra en la cúspide de la jerarquía normativa, por encima de las leyes ordinarias."

explicacion: |
  Efectivamente, el principio de supremacía constitucional establece que ninguna norma inferior puede contradecir la Constitución.
```

### 4 — Elementos de la Constitución
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["partes_constitucion"]

respuesta: ["Parte Dogmática", "Parte Orgánica", "Cláusulas de Reforma"]
tipo: ordenar
opciones_explicitas: ["Parte Dogmática", "Parte Orgánica", "Cláusulas de Reforma"]

enunciado: "Ordene los componentes típicos de una Constitución moderna de mayor a menor jerarquía conceptual (desde la protección de derechos hasta el mecanismo de cambio):"

explicacion: |
  La Parte Dogmática contiene los derechos; la Orgánica la estructura del Estado; y las Cláusulas de Reforma regulan cómo cambiar la propia Constitución.
```

### 5 — Derechos Fundamentales
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["derechos_fundamentales"]

variables:
  caso: uno_de([[ "libertad de expresión", "derecho a la vida" ], [ "libertad de culto", "derecho a la vida" ], [ "derecho a la propiedad", "derecho a la vida" ]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["libertad de expresión", "derecho a la vida", "derecho a la propiedad", "derecho al voto"]

enunciado: "De la siguiente lista, identifique cuál de estos es un derecho fundamental clásico protegido por la Constitución: {caso[0]}."

explicacion: |
  Aunque todos pueden ser derechos, el derecho a la vida es considerado el pilar fundamental sobre el cual se asientan los demás derechos humanos y constitucionales.
```