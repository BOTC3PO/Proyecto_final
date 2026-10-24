### 1 — El principio de legalidad
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["principios", "legalidad"]

variables:
  escenario: uno_de([["Juan comete una acción que no está tipificada en el código penal", "falso"], ["Juan comete una acción que está tipificada en el código penal", "verdadero"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: vf

enunciado: "De acuerdo al principio de legalidad, si {escenario[idx][0]}, ¿es posible que el Estado imponga una pena a Juan?"

explicacion: |
  El principio de legalidad establece que no hay delito ni pena sin ley previa (*nullum crimen, nulla poena sine lege*). Si la conducta no está tipificada, no puede haber sanción.
```

### 2 — Tipicidad y elementos del delito
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["tipicidad", "escenario"]

variables:
  caso: uno_de([["Pedro toma un objeto ajeno con ánimo de lucro", "hurto"], ["Pedro rompe una ventana para entrar a una casa", "daño"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: mc

opciones_explicitas: ["hurto", "daño", "estafa", "robo"]

enunciado: "Analizando el comportamiento de Pedro: {caso[idx][0]}. ¿Cuál es la conducta principal descrita?"

explicacion: |
  El tipo penal se ajusta a la descripción de la conducta realizada por el sujeto.
```

### 3 — Clasificación de penas
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["penas", "sanciones"]

variables:
  tipo_pena: uno_de([["privación de la libertad", "corporal"], ["multa económica", "pecuniaria"]])
  idx: uno_de([0, 1])

respuesta: tipo_pena[idx][1]
tipo: completar

respuestas_validas: ["corporal", "pecuniaria"]

enunciado: "Las penas se clasifican según su naturaleza. Si se impone una {tipo_pena[idx][0]}, la naturaleza de la sanción es ___________."

explicacion: |
  Las penas pueden ser privativas de la libertad (corporales) o multas (pecuniarias).
```

### 4 — Elementos de la acción delictiva
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "avanzado"
  tags: ["iter_criminis", "ordenar"]

respuesta: ["ideación", "preparación", "ejecución", "consumación"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas del 'iter criminis' (camino del delito) desde la concepción de la idea hasta la culminación del acto."

explicacion: |
  El iter criminis comprende la fase interna (ideación), la fase externa (preparación, ejecución) y la consumación.
```

### 5 — Imputabilidad y responsabilidad
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["imputabilidad", "responsabilidad"]

variables:
  sujeto: uno_de([["Un menor de edad con plena capacidad de comprensión", "no es imputable"], ["Un adulto con plena capacidad de comprensión", "es imputable"]])
  idx: uno_de([0, 1])

respuesta: sujeto[idx][1]
tipo: vf

enunciado: "Considerando el caso de {sujeto[idx][0]}, ¿se le puede atribuir responsabilidad penal bajo el concepto de imputabilidad?"

explicacion: |
  La imputabilidad es la capacidad de comprender la ilicitud del hecho. Si el sujeto carece de ella (como en menores según la legislación), no hay responsabilidad penal en el sentido estricto.
```