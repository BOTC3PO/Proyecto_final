### 1 — El contrato de alquiler
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["civil", "contratos"]

variables:
  escenario: uno_de([["Juan firma un contrato de alquiler con un propietario para vivir en su casa.", "civil"], ["María es demandada por un accidente de tránsito.", "civil"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["civil", "penal", "laboral", "comercial"]

enunciado: "Juan firma un contrato de alquiler con un propietario para vivir en su casa. ¿Qué rama del derecho regula este vínculo contractual?"

explicacion: |
  El derecho civil regula las relaciones privadas entre personas, como los contratos de alquiler, el matrimonio o la propiedad.
```

### 2 — El robo en el supermercado
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["penal", "delitos"]

variables:
  caso: uno_de([["Un individuo es detenido por sustraer mercadería de un comercio sin pagar.", true], ["Un incumplimiento de contrato de alquiler es un delito penal.", false]])
  tipo_caso: uno_de([0, 1])

respuesta: caso[tipo_caso]
tipo: vf

enunciado: "Un individuo es detenido por sustraer mercadería de un comercio sin pagar. ¿Este hecho es regulado por el derecho penal?"

explicacion: |
  El derecho penal se encarga de las conductas que son consideradas delitos y las penas que el Estado impone a sus autores.
```

### 3 — Despido injustificado
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["laboral", "trabajo"]

variables:
  situacion: uno_de([["Un empleado es despedido sin causa y reclama sus indemnizaciones.", "laboral"], ["Un comerciante tiene una disputa por una deuda de mercadería.", "comercial"]])
  idx: uno_de([0, 1])

respuesta: "___"
tipo: completar
respuestas_validas: ["laboral"]

enunciado: "Un empleado es despedido sin causa y reclama sus indemnizaciones. El conflicto se debe resolver ante el derecho ___."

explicacion: |
  El derecho laboral regula las relaciones entre empleadores y trabajadores, incluyendo despidos, salarios y condiciones de trabajo.
```

### 4 — La disputa entre socios
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["comercial", "sociedades"]

variables:
  conflicto: uno_de([["Dos socios de una sociedad anónima discuten sobre la distribución de dividendos.", "comercial"], ["Un ciudadano reclama una multa de tránsito impuesta por la municipalidad.", "administrativo"]])
  idx: uno_de([0, 1])

respuesta: conflicto[idx][1]
tipo: mc
opciones_explicitas: ["civil", "penal", "laboral", "comercial"]

enunciado: "Dos socios de una sociedad anónima discuten sobre la distribución de dividendos. ¿Qué rama del derecho regula esta actividad?"

explicacion: |
  El derecho comercial (o mercantil) regula los actos de comercio y las relaciones jurídicas derivadas de la actividad de los comerciantes y las sociedades.
```

### 5 — El orden de las ramas
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["ordenar", "conceptos"]

respuesta: ["Derecho Civil", "Derecho Comercial", "Derecho Administrativo", "Derecho Penal"]
tipo: ordenar

opciones_explicitas: ["Derecho Penal", "Derecho Civil", "Derecho Administrativo", "Derecho Comercial"]

enunciado: "Ordena las siguientes ramas del derecho de mayor a menor amplitud en cuanto a la regulación de la vida cotidiana (desde la relación entre particulares hasta la relación con el Estado y el control social):"

explicacion: |
  El orden lógico suele partir de la regulación de la vida privada (Civil), pasando por el comercio (Comercial), la relación con el Estado (Administrativo) y finalmente la sanción de conductas graves (Penal).
```