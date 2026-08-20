### 1 — El recurso de apelación
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["recurso", "instancia", "proceso"]

variables:
  escenario: uno_de([["La sentencia de primera instancia fue desfavorables para el demandante", "apelacion"], ["El juez cometió un error de procedimiento en el juicio", "apelacion"], ["La contraparte presentó pruebas nuevas que no fueron valoradas", "apelacion"]])
  idx: uno_de([0, 1, 2])

enunciado: "En el caso planteado, donde {escenario[idx][0]}, la parte afectada decide interponer un recurso de {escenario[idx][1]} para que un tribunal superior revise la resolución."

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["apelacion"]

explicacion: |
  El recurso de apelación es el medio de impugnación que permite que un tribunal de jerarquía superior (segunda instancia) revise la resolución dictada por un juez de primera instancia, con el fin de que la modifique, revoque o anule.
```

### 2 — Efectos de la apelación
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["efectos", "suspensivo", "devolutivo"]

variables:
  efecto_tipo: uno_de([["suspensivo", "La ejecución de la sentencia se detiene hasta que el superior resuelva."], ["devolutivo", "La sentencia se puede ejecutar aunque se haya apelado."]])
  idx: uno_de([0, 1])

enunciado: "Si el recurso de apelación se admite con efecto {escenario_tipo[idx][0]}, significa que {escenario_tipo[idx][1]}"

respuesta: escenario_tipo[idx][0]
tipo: mc
opciones_explicitas: ["suspensivo", "devolutivo"]

explicacion: |
  El efecto suspensivo impide la ejecución de la sentencia mientras el tribunal superior decide. El efecto devolutivo permite que la sentencia se cumpla a pesar de la impugnación.
```

### 3 — Estructura de las instancias
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["instancias", "jerarquia"]

variables:
  orden_instancias: [["Juzgado de Primera Instancia", "Tribunal de Alzada (Segunda Instancia)", "Corte Suprema"]]

enunciado: "Ordene correctamente el flujo jerárquico de la revisión judicial desde el inicio del conflicto hasta la máxima autoridad."

respuesta: ["Juzgado de Primera Instancia", "Tribunal de Alzada (Segunda Instancia)", "Corte Suprema"]
tipo: ordenar
opciones_explicitas: ["Juzgado de Primera Instancia", "Tribunal de Alzada (Segunda Instancia)", "Corte Suprema"]

explicacion: |
  El sistema judicial se organiza en instancias: la primera instancia es donde se inicia el juicio y se dicta la primera sentencia; la segunda instancia (o alzada) es la revisión por un tribunal superior.
```

### 4 — ¿Es posible la revisión?
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["impugnacion", "derecho_defensa"]

variables:
  caso_valido: uno_de([[true, "se puede apelar"], [false, "no se puede apelar"]])
  idx: uno_de([0, 1])

enunciado: "Si una sentencia ha sido dictada con violación al debido proceso, ¿es jurídicamente posible impugnarla mediante un recurso de apelación? {caso_valido[idx][0]}"

respuesta: caso_valido[idx][0]
tipo: vf

explicacion: |
  La apelación es un derecho fundamental derivado del principio de la doble instancia, que permite corregir errores de hecho o de derecho cometidos por el juez de primera instancia.
```

### 5 — El Tribunal de Alzada
```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["tribunal", "alzada", "revisión"]

variables:
  tribunal_nombre: uno_de([["Tribunal de Alzada", "Tribunal de Segunda Instancia"], ["Tribunal de Alzada", "Corte de Apelaciones"]])
  idx: uno_de([0, 1])

enunciado: "El órgano encargado de revisar la sentencia dictada por el juez de primera instancia es conocido comúnmente como {tribunal_nombre[idx][0]}."

respuesta: tribunal_nombre[idx][0]
tipo: mc
opciones_explicitas: ["Tribunal de Alzada", "Corte de Apelaciones", "Juzgado de Letras"]

explicacion: |
  El tribunal de alzada es el órgano colegiado que tiene la competencia para revisar lo actuado en la primera instancia, garantizando el derecho a la revisión judicial.
```