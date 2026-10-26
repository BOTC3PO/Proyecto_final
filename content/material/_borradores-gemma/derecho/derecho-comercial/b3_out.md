### 1 — Naturaleza del acto comercial
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "acto_de_comercio"]

respuesta: falso
tipo: vf

enunciado: "El derecho comercial regula únicamente los actos realizados por personas con la condición de 'comerciante', dejando de lado la naturaleza del acto en sí mismo."

explicacion: |
  El derecho comercial moderno se basa tanto en el sujeto (comerciante) como en el objeto (acto de comercio). Un acto puede ser comercial por su naturaleza, aunque el sujeto no esté matriculado.
```

### 2 — Diferencia con el derecho civil
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["distincion_civil_comercial", "sujeto"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[["Compraventa de un bien mueble para reventa", "Comercial"], ["Préstamo de dinero entre amigos sin interés", "Civil"]]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Comercial", "Civil"]

enunciado: "Determine la naturaleza jurídica del siguiente caso: {escenarios[escenario_idx][0]}"

explicacion: |
  La distinción radica en la finalidad de lucro y la intermediación en el cambio. En el primer caso hay intención de reventa (lucro), en el segundo es un acto de mera administración o ayuda mutua.
```

### 3 — Elementos de la sociedad comercial
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["sociedades", "elementos"]

respuesta: ["Aportes", "Affectio Societatis", "Fin de lucro"]
tipo: ordenar

opciones_explicitas: ["Affectio Societatis", "Aportes", "Fin de lucro"]

enunciado: "Ordene los elementos esenciales de un contrato de sociedad desde su constitución hasta su objetivo final:"

explicacion: |
  Para que exista sociedad se requiere primero el aporte de bienes, luego la voluntad de asociación (affectio societatis) y finalmente el objetivo de obtener una ganancia (fin de lucro).
```

### 4 — El concepto de quiebra
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "avanzado"
  tags: ["concursos_y_quiebras", "insolvencia"]

variables:
  es_insolvente: uno_de([verdadero, falso])
  caso_texto: uno_de(["El sujeto mantiene su patrimonio pero no puede pagar sus deudas vencidas.", "El sujeto tiene activos que superan sus deudas pero tiene problemas de liquidez."])

respuesta: es_insolvente

tipo: vf

enunciado: "En el marco del derecho comercial, la quiebra se dicta cuando el sujeto presenta un estado de {caso_texto} que constituye insolvencia."

explicacion: |
  La quiebra es un proceso de ejecución colectiva que requiere la existencia de un estado de cesación de pagos (insolvencia), no solo una dificultad temporal de caja.
```

### 5 — Sujetos del derecho comercial
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["comerciante", "sujeto_derecho"]

respuesta: "comerciante"
tipo: completar
respuestas_validas: ["comerciante"]

enunciado: "La persona que se encuentra legalmente inscrita en el registro correspondiente y realiza actos de comercio de forma habitual es denominada _________."

explicacion: |
  La habitualidad y la inscripción en el registro mercantil son requisitos que definen la condición de comerciante en la mayoría de las legislaciones comerciales.
```