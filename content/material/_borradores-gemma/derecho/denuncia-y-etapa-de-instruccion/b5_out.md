### 1 — Inicio del proceso penal
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["procedimiento", "denuncia"]

variables:
  escenario: uno_de([["Juan presencia un robo y lo reporta ante la policía", "denuncia"], ["María es víctima de una estafa y presenta el escrito", "denuncia"], ["Un policía encuentra un arma sin dueño y lo comunica", "noticia criminal"]])
  idx: uno_de([0,1,2])
  tipo_inicio: uno_de(["denuncia", "noticia criminal"])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["denuncia", "noticia criminal", "querella", "denuncia anónima"]

enunciado: "En el caso de que {escenario[idx][0]}, el acto formal que da inicio al proceso se denomina ___."

explicacion: |
  Cuando una persona con capacidad legal comunica un hecho delictivo, se inicia mediante una denuncia. Si el origen es un funcionario público en ejercicio, se denomina noticia criminal.
```

### 2 — El objeto de la instrucción
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["instruccion", "investigacion"]

variables:
  caso: uno_de([["presunto homicidio", "investigar la autoría y las pruebas"], ["presunto hurto", "recaudar elementos de convicción"]])
  idx: uno_de([0,1])

respuesta: caso[idx][1]
tipo: vf

enunciado: "En la etapa de instrucción, el objetivo principal del fiscal es {caso[idx][0]}."

explicacion: |
  La etapa de instrucción tiene como fin la recolección de elementos de convicción para determinar si existe mérito para llevar a juicio a una persona.
```

### 3 — Secuencia de la etapa preparatoria
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["procedimiento", "ordenar"]

respuesta: ["Presentación de la denuncia", "Apertura de la investigación", "Recolección de pruebas", "Elevación a juicio"]
tipo: ordenar
opciones_explicitas: ["Presentación de la denuncia", "Apertura de la investigación", "Recolección de pruebas", "Elevación a juicio"]

enunciado: "Ordene cronológicamente las etapas desde que se conoce el hecho hasta que se cierra la instrucción:"

explicacion: |
  El proceso penal sigue un orden lógico: primero se recibe la noticia, se abre la investigación, se recolectan las pruebas y finalmente se decide si se va a juicio.
```

### 4 — La formalización de la investigación
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["instruccion", "fiscal"]

variables:
  escenario: uno_de([["El fiscal encuentra pruebas suficientes", "imputación"], ["El fiscal no tiene pruebas suficientes", "archivo"]])
  idx: uno_de([0,1])

respuesta: escenario[idx][0]
tipo: completar
respuestas_validas: ["imputación", "archivo"]

enunciado: "Si tras la investigación el fiscal determina que {escenario[idx][0]}, la consecuencia procesal es la ___."

explicacion: |
  La formalización de la imputación es el acto que marca el inicio de la persecución penal efectiva sobre una persona determinada.
```

### 5 — El rol del Juez de Instrucción
```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["juez", "control"]

respuesta: falso
tipo: vf

enunciado: "En el sistema acusatorio moderno, el Juez de Instrucción es quien dirige la recolección de pruebas durante la etapa de investigación."

explicacion: |
  Falso. En el sistema acusatorio, la investigación y recolección de pruebas es responsabilidad exclusiva del Ministerio Público (Fiscalía); el Juez cumple un rol de control de garantías.
```