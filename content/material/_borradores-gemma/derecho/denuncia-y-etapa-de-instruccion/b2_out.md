### 1 — Inicio del proceso penal
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["procedimiento", "denuncia"]

respuesta: "denuncia"
tipo: mc
opciones_explicitas: ["denuncia", "sentencia", "apelación", "querella"]

enunciado: "Un ciudadano presencia un robo en una plaza y acude a la comisaría para poner en conocimiento el hecho. Este acto formal de poner en conocimiento un presunto delito se denomina ___."

explicacion: |
  La denuncia es el acto mediante el cual cualquier persona comunica a la autoridad judicial o policial la comisión de un hecho que podría ser un delito.
```

### 2 — El rol del Fiscal en la instrucción
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["fiscalia", "investigacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [
    ["El Fiscal debe dirigir la investigación para recolectar pruebas.", "verdadero"],
    ["El Fiscal decide la culpabilidad final del imputado.", "falso"]
  ]

respuesta: escenario[escenario_idx][1]
tipo: vf

enunciado: "En la etapa de instrucción, el Fiscal tiene la función de dirigir la investigación y recolectar elementos de convicción para determinar si existe un caso para ir a juicio. ¿Es esto correcto en el sistema acusatorio?"

explicacion: |
  En el sistema acusatorio, el Fiscal dirige la investigación (etapa de instrucción/investigación preparatoria), pero la decisión de culpabilidad o inocencia es competencia exclusiva de un Juez de Oración o Tribunal de Juicio.
```

### 3 — Secuencia de la etapa de instrucción
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["procedimiento", "orden_cronologico"]

respuesta: ["Denuncia", "Investigación preliminar", "Requerimiento de acusación", "Juicio Oral"]
tipo: ordenar
opciones_explicitas: ["Denuncia", "Investigación preliminar", "Requerimiento de acusación", "Juicio Oral"]

enunciado: "Ordene cronológicamente las etapas de un proceso penal estándar, desde el conocimiento del hecho hasta la resolución del conflicto."

explicacion: |
  El proceso comienza con la denuncia o querella, sigue la investigación para reunir pruebas (instrucción), el fiscal presenta su acusación si hay pruebas, y finalmente se celebra el juicio para dictar sentencia.
```

### 4 — Elementos de prueba en la instrucción
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["pruebas", "instruccion"]

variables:
  caso_idx: uno_de([0, 1])
  caso: [
    ["testimonio", "pericia"],
    ["testimonio", "sentencia"]
  ]

respuesta: caso[caso_idx][1]
tipo: mc
opciones_explicitas: ["testimonio", "pericia", "sentencia", "recurso"]

enunciado: "Durante la etapa de instrucción, para determinar la veracidad de un hecho, el instructor puede ordenar un examen realizado por un experto en una materia técnica (por ejemplo, un perito médico). Este elemento se conoce como una ___."

explicacion: |
  La pericia es el medio de prueba técnico-científico fundamental en la etapa de instrucción para aportar conocimientos especializados al proceso.
```

### 5 — El cierre de la instrucción
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["resolucion", "instruccion"]

respuesta: "sobreseimiento"
tipo: completar
respuestas_validas: ["sobreseimiento", "condena", "absolución"]

enunciado: "Si durante la etapa de instrucción se demuestra que el hecho denunciado no existió o que el imputado no participó en él, el juez debe dictar el ___ para finalizar el proceso sin llegar a juicio."

explicacion: |
  El sobreseimiento es la resolución que pone fin al proceso de manera definitiva cuando no hay elementos para sostener una acusación, evitando que una persona sea sometida innecesariamente a un juicio.
```