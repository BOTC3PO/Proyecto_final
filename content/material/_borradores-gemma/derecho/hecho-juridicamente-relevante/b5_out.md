### 1 — El nacimiento como hecho jurídico
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["hecho_juridico", "derecho_civil"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El nacimiento de un niño", "persona"], ["El nacimiento de un feto no viable", "no persona"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["persona", "no persona", "objeto", "sujeto pasivo"]

enunciado: "En el derecho, el hecho de que {datos[escenario_idx][0]} es considerado un hecho jurídicamente relevante porque da origen a la condición de ___."

explicacion: |
  Un hecho es jurídicamente relevante cuando la norma le atribuye consecuencias jurídicas. El nacimiento con vida es el hecho que genera la personalidad jurídica.
```

### 2 — El accidente de tránsito
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["responsabilidad_civil", "hecho_juridico"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Juan choca su auto por descuido y rompe un muro", "responsabilidad"], ["Juan camina por la vereda y ve una nube", "no relevante"]]

respuesta: casos[caso_idx][1]
tipo: vf

enunciado: "Analice el siguiente caso: {casos[caso_idx][0]}. ¿Es este un hecho jurídicamente relevante para el derecho de daños? (Responda verdadero o falso)"

explicacion: |
  El segundo caso es un hecho natural sin consecuencias legales, mientras que el primero es un hecho humano que activa la responsabilidad civil.
```

### 3 — Elementos de la relevancia jurídica
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["teoria_del_hecho", "norma"]

respuesta: "norma"
tipo: completar
respuestas_validas: ["norma", "ley", "sentencia", "decreto"]

enunciado: "Para que un hecho sea jurídicamente relevante, debe existir una ___ que le asigne una consecuencia jurídica específica."

explicacion: |
  La relevancia jurídica no es una propiedad intrínseca del hecho, sino una consecuencia de la existencia de una norma que lo regula.
```

### 4 — Secuencia de la relevancia en un contrato
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "avanzado"
  tags: ["contrato", "hecho_juridico"]

variables:
  orden_idx: 0
  pasos_correctos: ["Acuerdo de voluntades", "Nacimiento de la obligación", "Cumplimiento o incumplimiento"]

respuesta: pasos_correctos
tipo: ordenar
opciones_explicitas: ["Acuerdo de voluntades", "Nacimiento de la obligación", "Cumplimiento o incumplimiento", "Firma de un papel"]

enunciado: "Ordene cronológicamente los hechos que convierten un simple acuerdo de voluntades en una relación jurídica contractual:"

explicacion: |
  Primero ocurre el acuerdo (hecho jurídico), esto crea la obligación (consecuencia) y finalmente el cumplimiento o incumplimiento (hecho que extingue o modifica la relación).
```

### 5 — Diferencia entre hecho y acto
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["hecho_juridico", "acto_juridico"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["Un rayo que destruye una casa", "hecho natural"], ["Un testamento", "acto jurídico"]]

respuesta: ejemplos[ejemplo_idx][1]
tipo: mc
opciones_explicitas: ["hecho natural", "acto jurídico", "acto administrativo", "hecho social"]

enunciado: "Si el hecho es {ejemplos[ejemplo_idx][0]}, estamos ante un ___."

explicacion: |
  Los hechos naturales son sucesos de la naturaleza que tienen relevancia legal (como un desastre que activa un seguro) sin que medie la voluntad humana.
```