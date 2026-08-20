### 1 — El rol del Estado en el delito
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["definicion", "estado"]

respuesta: verdadero
tipo: vf

enunciado: "En el derecho penal, el Estado es el único encargado de regular la relación entre el sujeto que comete un delito y la sanción impuesta, ejerciendo el ius puniendi."

explicacion: |
  El derecho penal es una rama del derecho público que regula la potestad punitiva del Estado (ius puniendi) para sancionar conductas que lesionan bienes jurídicos protegidos.
```

### 2 — Clasificación de la conducta
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["conducta", "tipicidad"]

variables:
  escenario: uno_de([
    ["Juan decide robar un banco pero es detenido antes de tocar el dinero", "tentativa"],
    ["María entra a una tienda y toma un objeto sin pagar", "consumado"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["tentativa", "consumado", "imputable", "exento"]

enunciado: "Analice el siguiente caso: {escenario[0]}. Según la doctrina penal, la conducta de Juan se clasifica como: ___"

pasos:
  - "Identificar si la acción llegó a completar el tipo penal."
  - "Determinar si hubo ejecución del acto ilícito."

explicacion: |
  En el primer caso ({escenario[0]}), al no haberse completado el resultado típico, estamos ante una tentativa. En el segundo, el delito se considera consumado.
```

### 3 — Elementos del delito
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["teoria_del_delito"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [
    ["Un sujeto actúa bajo un error de prohibición invencible", "no_culpable"],
    ["Un sujeto actúa con dolo directo para causar daño", "culpable"]
  ]

respuesta: datos[caso_idx][1]
tipo: completar
respuestas_validas: ["no_culpable", "culpable"]

enunciado: "Considerando el escenario: {datos[caso_idx][0]}. El resultado de la imputación penal para este sujeto es: ___"

explicacion: |
  La culpabilidad requiere que el sujeto sea capaz de comprender la ilicitud de su acción. Si el error es invencible, se excluye la culpabilidad.
```

### 4 — Secuencia de la aplicación de la pena
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "avanzado"
  tags: ["proceso", "pena"]

respuesta: ["Tipicidad", "Antijuridicidad", "Culpabilidad", "Punibilidad"]
tipo: ordenar
opciones_explicitas: ["Tipicidad", "Antijuridicidad", "Culpabilidad", "Punibilidad"]

enunciado: "Para que una conducta sea considerada delito y se le aplique una pena, debe cumplir con la teoría estratificada del delito. Ordene los elementos en el orden lógico de análisis (de la conducta al castigo):"

pasos:
  - "Primero se verifica si la conducta está en la ley."
  - "Segundo, si la conducta es contraria al derecho."
  - "Tercero, si el autor es reprochable."
  - "Finalmente, si la conducta merece una sanción."

explicacion: |
  El análisis parte de la tipicidad (encuadre legal), sigue con la antijuridicidad (contrariedad al ordenamiento), la culpabilidad (reprochabilidad) y culmina en la punibilidad (posibilidad de imponer la pena).
```

### 5 — El bien jurídico protegido
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["bien_juridico"]

variables:
  delito_tipo: uno_de([
    ["Homicidio", "la vida"],
    ["Hurto", "la propiedad"]
  ])

respuesta: delito_tipo[1]
tipo: mc
opciones_explicitas: ["la vida", "la propiedad", "la libertad", "la integridad física"]

enunciado: "Si se comete un delito de {delito_tipo[0]}, el bien jurídico que el Estado busca proteger mediante la pena es: ___"

explicacion: |
  Cada delito protege un valor fundamental llamado bien jurídico. En el caso del {delito_tipo[0]}, el bien es {delito_tipo[1]}.
```