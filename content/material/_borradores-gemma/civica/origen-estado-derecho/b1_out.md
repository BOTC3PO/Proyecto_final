### 1 — Definición de Estado
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["estado", "poder", "territorio"]

tipo: mc
opciones_explicitas: ["Una organización social sin fronteras", "Una institución que centraliza el poder político sobre un territorio y población", "Un grupo de personas con la misma cultura", "Un sistema de comercio internacional"]

enunciado: "El Estado se define fundamentalmente como la institución que centraliza el ___ sobre un territorio y una población determinada."

respuesta: "Una institución que centraliza el poder político sobre un territorio y población"

explicacion: |
  El Estado requiere de un poder político centralizado, un territorio delimitado y una población que lo integre.
```

### 2 — Origen del Estado y Excedente
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["excedente", "jerarquia", "historia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [
    ["La aparición de excedentes agrícolas permitió la especialización y la jerarquización social.", "excedente"],
    ["La migración constante impidió la formación de estructuras de poder fijas.", "migración"]
  ]

tipo: completar
respuestas_validas: ["excedente", "migración"]

enunciado: "Históricamente, el surgimiento de sociedades con ___ permitió que aparecieran jerarquías sociales y, eventualmente, la formación del Estado."

respuesta: escenario[escenario_idx][1]

explicacion: |
  El control de un excedente de producción (comida, bienes) permitió que no todos los miembros de la sociedad se dedicaran a la agricultura, dando lugar a clases sociales y una autoridad centralizada.
```

### 3 — Elementos del Estado
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["elementos", "territorio", "poblacion"]

tipo: ordenar
opciones_explicitas: ["Población", "Territorio", "Poder Político"]

enunciado: "Ordene los tres elementos constitutivos del Estado desde su base social hasta su ejercicio de autoridad:"

respuesta: ["Población", "Territorio", "Poder Político"]

explicacion: |
  Para que exista un Estado, primero debe haber un grupo de personas (población), un espacio físico donde habitar (territorio) y una estructura que ejerza autoridad (poder político).
```

### 4 — Evolución Social
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "avanzado"
  tags: ["jerarquia", "sociedad"]

tipo: vf

enunciado: "Las sociedades igualitarias, donde no existen jerarquías de mando ni acumulación de excedentes, son la base del surgimiento del Estado moderno."

respuesta: falso

explicacion: |
  Es falso. El Estado surge precisamente cuando las sociedades dejan de ser igualitarias y aparecen la jerarquía y la acumulación de excedentes.
```

### 5 — El concepto de Poder Político
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["poder", "control"]

tipo: input
tolerancia_abs: 0

enunciado: "El Estado ejerce su soberanía a través del poder ___, que es la capacidad de dictar normas y hacerlas cumplir dentro de su ámbito."

respuesta: "político"

explicacion: |
  El poder político es la facultad del Estado para organizar la convivencia social mediante leyes y el uso legítimo de la fuerza.
```