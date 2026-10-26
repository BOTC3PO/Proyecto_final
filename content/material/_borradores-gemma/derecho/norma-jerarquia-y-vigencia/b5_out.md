### 1 — Jerarquía normativa en conflicto
```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["constitucion", "ley", "jerarquia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Una ley sancionada por el Congreso contradice un artículo de la Constitución Nacional.", "Constitución"],
    ["Un decreto presidencial contradice una Ley Nacional vigente.", "Ley Nacional"]
  ]

tipo: mc
opciones_explicitas: ["Constitución", "Ley Nacional", "Decreto Presidencial", "Reglamento"]

enunciado: "En el caso de un conflicto normativo donde {datos[escenario_idx][0]}, ¿qué norma prevalece según la jerarquía jurídica?"

respuesta: datos[escenario_idx][1]

explicacion: |
  De acuerdo al principio de jerarquía normativa (Pirámide de Kelsen), la norma de mayor rango prevalece sobre las de menor rango. En este caso, la Constitución es la norma suprema.
```

### 2 — Vigencia de la norma
```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "basico"
  tags: ["vigencia", "promulgacion"]

tipo: vf
respuesta: verdadero

enunciado: "Una norma jurídica adquiere vigencia y es obligatoria para los ciudadanos una vez que ha sido debidamente promulgada y publicada en el Boletín Oficial."

explicacion: |
  La vigencia requiere que la norma sea conocida públicamente a través de la publicación oficial para que el principio de ignorancia de la ley no sea excusa.
```

### 3 — Orden jerárquico de normas
```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["orden", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales con jerarquía constitucional", "Leyes Nacionales", "Decretos Reglamentarios"]

respuesta: ["Constitución Nacional", "Tratados Internacionales con jerarquía constitucional", "Leyes Nacionales", "Decretos Reglamentarios"]

enunciado: "Ordene de mayor a menor jerarquía el siguiente bloque normativo:"

explicacion: |
  La jerarquía establece que la Constitución y los Tratados con jerarquía constitucional están en la cima, seguidos por las leyes y, finalmente, los reglamentos o decretos.
```

### 4 — El rol del reglamento
```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "basico"
  tags: ["reglamento", "decreto"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["El Poder Ejecutivo dicta un decreto para reglamentar una ley existente.", "reglamentar"],
    ["Un Ministerio dicta una resolución para aplicar una norma superior.", "aplicar"]
  ]

tipo: completar
respuestas_validas: ["reglamentar", "aplicar"]

enunciado: "El objetivo principal de un decreto reglamentario es ___ la norma de jerarquía superior para facilitar su ejecución."

respuesta: casos[caso_idx][1]

explicacion: |
  Los reglamentos y decretos no pueden modificar el espíritu de la ley, sino que su función es reglamentar o aplicar los detalles técnicos para su cumplimiento.
```

### 5 — Validez vs Vigencia
```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "avanzado"
  tags: ["validez", "vigencia", "derogacion"]

variables:
  situacion_idx: uno_de([0, 1])
  situaciones: [
    ["Una ley ha sido derogada por una nueva ley posterior.", "no tiene vigencia"],
    ["Una ley fue sancionada pero aún no se publicó en el Boletín Oficial.", "no tiene vigencia"]
  ]

tipo: mc
opciones_explicitas: ["tiene vigencia", "no tiene vigencia", "es nula"]

enunciado: "Si una norma se encuentra en la situación descrita: {situaciones[situacion_idx][0]}, ¿cuál es su estado respecto a la vigencia?"

respuesta: situaciones[situacion_idx][1]

explicacion: |
  Para que una norma sea vigente debe estar publicada y no haber sido derogada por otra norma de igual o superior jerarquía.
```