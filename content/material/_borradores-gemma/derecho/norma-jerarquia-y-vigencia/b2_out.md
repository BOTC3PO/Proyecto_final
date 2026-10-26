### 1 — Supremacía Constitucional
```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "basico"
  tags: ["constitucion", "piramide_kelsen"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [
    ["Una ley sancionada por el Congreso contradice un artículo de la Constitución Nacional.", "inconstitucional"],
    ["Un decreto presidencial contradice una ley vigente.", "ilegal"]
  ]

respuesta: escenarios[caso_idx][1]
tipo: mc
opciones_explicitas: ["constitucional", "inconstitucional", "ilegal", "nulo"]

enunciado: "En el caso donde {escenarios[caso_idx][0]}, la norma de menor jerarquía es considerada ___."

explicacion: |
  Según el principio de supremacía constitucional, la Constitución es la norma de mayor jerarquía. Cualquier norma que la contradiga es inválida por ser inconstitucional.
```

### 2 — Vigencia de la Norma
```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "basico"
  tags: ["vigencia", "promulgacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Una norma jurídica adquiere vigencia obligatoria desde el momento exacto de su sanción por el legislativo, incluso antes de su publicación en el Boletín Oficial?"

explicacion: |
  Falso. Para que una norma sea obligatoria, debe cumplir con el proceso de promulgación y su posterior publicación en el Boletín Oficial para que sea conocida por todos.
```

### 3 — Orden Jerárquico
```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["orden", "jerarquia"]

variables:
  orden_lista: ["Constitución Nacional", "Tratados Internacionales", "Leyes", "Decretos", "Reglamentos"]

respuesta: ["Constitución Nacional", "Tratados Internacionales", "Leyes", "Decretos", "Reglamentos"]
tipo: ordenar

enunciado: "Ordene de mayor a menor jerarquía el siguiente bloque normativo:"

pasos:
  - "Identifique la norma de máxima autoridad (Constitución)."
  - "Ubique los tratados con jerarquía constitucional."
  - "Coloque las leyes nacionales por debajo de los tratados."
  - "Ubique los decretos del Poder Ejecutivo."
  - "Finalice con las normas de menor rango (reglamentos)."

opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales", "Leyes", "Decretos", "Reglamentos"]

explicacion: |
  La jerarquía normativa sigue la estructura de la Pirámide de Kelsen, donde las normas superiores validan la validez de las inferiores.
```

### 4 — El Rol del Decreto
```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["decreto", "poder_ejecutivo"]

variables:
  caso_tipo: uno_de([0, 1])
  casos: [
    ["El Presidente dicta un decreto que busca regular una materia reservada exclusivamente a la ley.", "decreto"],
    ["El Presidente dicta un decreto para reglamentar una ley ya existente.", "decreto"]
  ]

respuesta: "decreto"
tipo: completar
respuestas_validas: ["decreto"]

enunciado: "Si el Poder Ejecutivo dicta una norma para reglamentar una ley, estamos ante un ___."

explicacion: |
  Los decretos reglamentarios tienen como función facilitar la aplicación de una ley, pero siempre deben estar subordinados a ella y no pueden modificar su espíritu.
```

### 5 — Aplicación de la Norma en el Tiempo
```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "avanzado"
  tags: ["irretroactividad", "vigencia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Una nueva ley de tránsito se publica hoy y busca sancionar conductas de ayer.", "irretroactiva"],
    ["Una ley de impuestos se publica hoy y rige para las ventas de mañana.", "prospectiva"]
  ]

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["irretroactiva", "prospectiva", "inaplicable", "nula"]

enunciado: "Si una ley establece sanciones para hechos ocurridos antes de su entrada en vigencia, se trata de una norma ___."

explicacion: |
  Por regla general, las leyes son prospectivas (rigen hacia el futuro). La aplicación retroactiva es excepcional y suele estar limitada por la Constitución (especialmente en materia penal).
```