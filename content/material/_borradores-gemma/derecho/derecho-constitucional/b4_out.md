### 1 — Distinción fundamental
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["definicion", "jerarquia"]

respuesta: "derecho_público"
tipo: completar
respuestas_validas: ["derecho_público"]

enunciado: "A diferencia del derecho privado, que regula las relaciones entre particulares, el derecho constitucional pertenece al ámbito del ___________."

explicacion: |
  El derecho constitucional es la base del derecho público, ya que regula la estructura del Estado y la relación entre este y los ciudadanos.
```

### 2 — Jerarquía normativa
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["jerarquia", "normativa"]

variables:
  escenario: uno_de([["Constitución", "Tratado Internacional", "Ley Común"], ["Constitución", "Decreto", "Resolución"]])
  nivel_norma: uno_de([0, 1])

opciones_explicitas: ["Constitución", "Tratado Internacional", "Ley Común", "Decreto", "Resolución"]

respuesta: escenario[nivel_norma]
tipo: mc

enunciado: "En la pirámide de Kelsen, ¿cuál de los siguientes elementos tiene mayor jerarquía que una {escenario[nivel_norma == 0 ? 1 : 2]}?"

pasos:
  - "Identificar la posición de la norma mencionada en la jerarquía normativa."
  - "Comparar con la supremacía constitucional."

explicacion: |
  La Constitución es la norma suprema; ninguna norma de menor rango (como leyes o decretos) puede contradecirla.
```

### 3 — Relación con el Derecho Administrativo
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["relacion", "administracion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que el Derecho Administrativo es una rama especializada que surge de la aplicación de los principios establecidos en el Derecho Constitucional?"

explicacion: |
  Verdadero. El Derecho Administrativo regula la función administrativa del Estado, la cual está subordinada a los principios constitucionales.
```

### 4 — El control de constitucionalidad
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "avanzado"
  tags: ["control", "jurisdiccion"]

variables:
  caso: uno_de([["anular", "validar"], ["invalidar", "confirmar"]])

opciones_explicitas: ["anular", "validar", "modificar", "derogar"]

respuesta: caso[0]
tipo: mc

enunciado: "Cuando un tribunal ejerce el control de constitucionalidad sobre una ley que contradice la Carta Magna, su función es ___________ dicha norma."

explicacion: |
  El control de constitucionalidad busca asegurar la supremacía de la Constitución, permitiendo la anulación de normas inferiores que la vulneren.
```

### 5 — Secuencia de aplicación de derechos
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["derechos", "jerarquia"]

opciones_explicitas: ["Reconocimiento de derechos fundamentales", "Promulgación de la Constitución", "Aplicación de la norma por el juez", "Creación de leyes orgánicas"]

respuesta: ["Promulgación de la Constitución", "Reconocimiento de derechos fundamentales", "Creación de leyes orgánicas", "Aplicación de la norma por el juez"]
tipo: ordenar

enunciado: "Ordene cronológicamente el proceso lógico de la vigencia de un derecho constitucional: desde la existencia del texto hasta su aplicación efectiva."

explicacion: |
  Primero se promulga la norma suprema, luego se reconocen los derechos en ella, se desarrollan mediante leyes y finalmente el juez los aplica en casos concretos.
```