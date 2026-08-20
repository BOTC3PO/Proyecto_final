### 1 — ¿Qué estudia el Derecho Constitucional?
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional_definicion"
  nivel: "basico"
  tags: ["definicion", "fundamentos"]

opciones_explicitas: ["La regulación de las relaciones entre privados", "La estructura del Estado y los derechos fundamentales", "La organización de las empresas y el comercio", "El estudio de los delitos y las penas"]

respuesta: "La estructura del Estado y los derechos fundamentales"
tipo: "mc"

enunciado: "El objeto de estudio principal del Derecho Constitucional es ___."

explicacion: |
  El Derecho Constitucional se centra en la norma suprema, la organización de los poderes del Estado y la garantía de los derechos fundamentales de los ciudadanos.
```

### 2 — ¿Es el Derecho Constitucional parte del Derecho Público?
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional_clasificacion"
  nivel: "basico"
  tags: ["clasificacion", "derecho_publico"]

respuesta: verdadero
tipo: "vf"

enunciado: "El Derecho Constitucional pertenece a la rama del Derecho Público, ya que regula la organización del Estado y las relaciones entre el Estado y los individuos."

explicacion: |
  Correcto. Al regular la estructura del poder estatal y las garantías frente al mismo, se clasifica dentro del Derecho Público.
```

### 3 — Diferencia con el Derecho Administrativo
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional_vs_administrativo"
  nivel: "intermedio"
  tags: ["distincion", "derecho_administrativo"]

variables:
  escenario: uno_de([["La norma suprema que establece la división de poderes", "La regulación de los procedimientos de los trámites en una oficina pública"], ["La base de la jerarquía normativa", "El funcionamiento operativo de la administración"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: "completar"
respuestas_validas: [escenario[idx][1]]

enunciado: "Mientras que el Derecho Constitucional estudia {escenario[idx][0]}, el Derecho Administrativo se ocupa de {escenario[idx][1]}."

explicacion: |
  El Derecho Constitucional establece el marco general y la estructura (el "qué" y "quién"), mientras que el Derecho Administrativo regula la actividad y procedimientos de la administración pública (el "cómo" operativo).
```

### 4 — Jerarquía de las normas
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional_jerarquia"
  nivel: "intermedio"
  tags: ["kelsen", "jerarquia", "normas"]

opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales de Derechos Humanos", "Leyes Nacionales", "Decretos del Poder Ejecutivo"]

respuesta: ["Constitución Nacional", "Tratados Internacionales de Derechos Humanos", "Leyes Nacionales", "Decretos del Poder Ejecutivo"]
tipo: "ordenar"

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía según la supremacía constitucional (considerando el bloque de constitucionalidad):"

explicacion: |
  La Constitución y los Tratados de Derechos Humanos con jerarquía constitucional encabezan el ordenamiento, seguidos por las leyes y finalmente los decretos.
```

### 5 — ¿El Derecho Constitucional regula contratos entre particulares?
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional_vs_privado"
  nivel: "basico"
  tags: ["distincion", "derecho_privado"]

respuesta: falso
tipo: "vf"

enunciado: "El estudio de la validez de un contrato de compraventa entre dos ciudadanos particulares es una materia propia del Derecho Constitucional."

explicacion: |
  Falso. La regulación de los contratos entre particulares pertenece al Derecho Privado (como el Derecho Civil), no al Derecho Constitucional.
```