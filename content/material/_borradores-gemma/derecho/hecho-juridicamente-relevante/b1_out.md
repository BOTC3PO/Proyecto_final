### 1 — Definición de hecho jurídicamente relevante
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["conceptos_basicos", "teoria_del_derecho"]

respuesta: "hecho jurídicamente relevante"
tipo: completar
respuestas_validas: ["hecho jurídicamente relevante"]

enunciado: "Aquel suceso de la naturaleza o del mundo material que, al producirse, tiene la capacidad de producir consecuencias jurídicas se denomina ___."

explicacion: |
  Un hecho es jurídicamente relevante cuando el ordenamiento jurídico le atribuye efectos, como la creación, modificación o extinción de derechos y obligaciones.
```

### 2 — Diferencia entre hecho y acto jurídico
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["clasificacion", "hechos_juridicos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [[["un rayo que incendia un bosque", "un accidente de tránsito"], ["un nacimiento", "una muerte"]]]

respuesta: uno_de(["hecho puro", "acto jurídico"])
tipo: mc
opciones_explicitas: ["hecho puro", "acto jurídico"]

enunciado: "Analice el siguiente caso: {escenarios[caso_idx][0][0]}. Si este suceso ocurre sin la intervención de la voluntad humana con el fin de producir efectos legales, estamos ante un ___."

explicacion: |
  El hecho puro es aquel suceso de la naturaleza que no es producto de la voluntad humana, pero que aun así tiene relevancia para el derecho (ej: un desastre natural).
```

### 3 — Elementos de la relevancia jurídica
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["elementos", "norma"]

respuesta: verdadero
tipo: vf

enunciado: "Para que un hecho sea considerado jurídicamente relevante, debe existir una norma jurídica previa que le asigne consecuencias legales."

explicacion: |
  La relevancia jurídica no es una propiedad intrínseca del hecho, sino una atribución de la norma. Si la norma no prevé consecuencias para ese hecho, este es irrelevante para el derecho.
```

### 4 — Secuencia de la relevancia jurídica
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["proceso", "logica_juridica"]

respuesta: ["suceso fáctico", "subsunción", "consecuencia jurídica"]
tipo: ordenar
opciones_explicitas: ["suceso fáctico", "subsunción", "consecuencia jurídica"]

enunciado: "Ordene los pasos lógicos que permiten pasar de un evento de la realidad a una sentencia judicial:"

explicacion: |
  Primero ocurre el hecho (suceso), luego se encuadra ese hecho en la norma (subsunción) y finalmente se produce el efecto legal (consecuencia).
```

### 5 — Clasificación de hechos según la voluntad
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["clasificacion", "voluntad"]

variables:
  es_voluntario: uno_de([true, falso])
  tipo_hecho: uno_de(["hecho voluntario", "hecho involuntario"])

respuesta: tipo_hecho[es_voluntario == true ? 0 : 1]
tipo: mc
opciones_explicitas: ["hecho voluntario", "hecho involuntario"]

enunciado: "Si un hecho es producido por la voluntad del sujeto, pero este no busca las consecuencias jurídicas, se clasifica como un ___."

explicacion: |
  En el derecho, distinguimos entre hechos voluntarios (donde hay voluntad pero no intención de producir efectos legales, como un accidente por negligencia) y actos jurídicos (donde la voluntad busca el efecto legal).
```