### 1 — Naturaleza de la sociedad comercial
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["sociedades", "comerciantes"]

respuesta: "sociedad"
tipo: "mc"
opciones_explicitas: ["sociedad", "contrato civil", "asociación sin fines de lucro", "persona física"]

enunciado: "Cuando dos o más personas se obligan a realizar aportes para un fin común y repartirse las ganancias, constituyen una ___."

explicacion: |
  En el derecho comercial, la unión de voluntades para un fin lucrativo y mediante aportes constituye una sociedad comercial.
```

### 2 — El concepto de comerciante
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["comerciante", "acto_de_comercio"]

respuesta: falso
tipo: "vf"

enunciado: "Una persona que realiza actos de comercio de forma habitual y profesional es considerada comerciante por la ley."

explicacion: |
  Verdadero. La habitualidad y la profesionalidad en el ejercicio de actos de comercio definen la condición de comerciante.
```

### 3 — Pasos para la constitución de una SRL
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["sociedades", "pasos_legales"]

variables:
  idx: uno_de([0, 1])

respuesta: ["redacción del contrato", "inscripción en el registro", "publicación de edictos", "obtención de CUIT"]
tipo: "ordenar"
opciones_explicitas: ["redacción del contrato", "inscripción en el registro", "publicación de edictos", "obtención de CUIT"]

enunciado: "Ordene cronológicamente los pasos para la formalización de una sociedad comercial (Considere el orden estándar de constitución)."

explicacion: |
  El orden lógico comienza con la voluntad de las partes (contrato), sigue con la publicidad (edictos), la formalidad registral (inscripción) y finalmente la habilitación impositiva (CUIT).
```

### 4 — Concurso preventivo y quiebra
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "avanzado"
  tags: ["quiebras", "concurso_preventivo"]

variables:
  caso: uno_de([[1000, "reorganización"], [2000, "liquidación"]])

respuesta: "reorganización"
tipo: "mc"
opciones_explicitas: ["reorganización", "liquidación", "extinción inmediata", "suspensión de pagos"]

enunciado: "Un comerciante con dificultades financieras solicita un concurso preventivo para evitar la quiebra. El objetivo principal de este proceso es la {caso[1]} de sus deudas."

explicacion: |
  El concurso preventivo busca la reorganización de la empresa mediante un acuerdo con los acreedores para evitar la quiebra.
```

### 5 — Elementos del contrato comercial
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["contratos", "comercio"]

respuesta: "precio"
tipo: "completar"
respuestas_validas: ["precio"]

enunciado: "En un contrato de compraventa mercantil, el intercambio se centra en la entrega de una cosa a cambio de un ___ determinado."

explicacion: |
  El precio es el elemento esencial que distingue a la compraventa de otras figuras jurídicas en el ámbito comercial.
```