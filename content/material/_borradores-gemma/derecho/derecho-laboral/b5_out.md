### 1 — El contrato de trabajo
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["contrato", "elementos"]

variables:
  escenario: uno_de([["Juan trabaja como cajero en un súper con un sueldo fijo y bajo dependencia", "contrato"], ["Ana presta servicios profesionales de consultoría sin horario fijo", "no_contrato"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["contrato", "no_contrato"]

enunciado: "Analice el siguiente caso: {escenario[idx][0]}. ¿Se ha configurado una relación de dependencia laboral que dé lugar a un contrato de trabajo?"

explicacion: |
  Para que exista un contrato de trabajo, debe haber subordinación técnica, jurídica y económica. En el primer caso, la dependencia y la remuneración fija lo confirman.
```

### 2 — Jornada laboral y horas extra
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["jornada", "horas_extra"]

variables:
  caso: uno_de([["8 horas", "8"], ["9 horas", "9"]])
  idx: uno_de([0, 1])

respuesta: 2
tipo: vf

enunciado: "Si la jornada legal es de {caso[idx][0]} horas diarias y el trabajador realiza {caso[idx][0]} horas, ¿se han devengado horas extraordinarias?"

explicacion: |
  Si la jornada trabajada excede el límite legal establecido, el excedente debe pagarse como hora extraordinaria según la legislación vigente.
```

### 3 — Elementos del contrato
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["elementos", "completar"]

respuesta: "remuneración"
tipo: completar
respuestas_validas: ["remuneración"]

enunciado: "En un contrato de trabajo, la contraprestación económica que recibe el trabajador por sus servicios se denomina ___."

explicacion: |
  La remuneración es el elemento esencial que distingue al contrato de trabajo de otras formas de servicios, como la voluntariedad.
```

### 4 — Principios del Derecho Laboral
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "avanzado"
  tags: ["principios", "irrenunciabilidad"]

respuesta: "irrenunciabilidad"
tipo: mc
opciones_explicitas: ["irrenunciabilidad", "continuidad", "primacía", "prooperidad"]

enunciado: "El principio que establece que el trabajador no puede privarse voluntariamente de las garantías y derechos mínimos establecidos en la ley se denomina principio de ___."

explicacion: |
  El principio de irrenunciabilidad protege al trabajador frente a posibles presiones del empleador para aceptar condiciones inferiores a las legales.
```

### 5 — Proceso de extinción contractual
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["despido", "procedimiento"]

respuesta: ["Notificación de la causa", "Entrega de preaviso", "Liquidación final"]
tipo: ordenar
opciones_explicitas: ["Notificación de la causa", "Entrega de preaviso", "Liquidación final"]

enunciado: "Ordene cronológicamente los pasos habituales en un proceso de despido con causa:"

explicacion: |
  Primero se debe comunicar la causa, luego se debe respetar el preaviso (si corresponde) y finalmente se procede al pago de la liquidación final.
```