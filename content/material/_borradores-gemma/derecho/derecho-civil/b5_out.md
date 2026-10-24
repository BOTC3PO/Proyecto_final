### 1 — Capacidad de ejercicio
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["capacidad", "personas"]

variables:
  escenario: uno_de([["Juan (16 años) quiere vender su bicicleta", "incapaz"], ["Marta (25 años) firma un contrato de alquiler", "capaz"], ["Luis (80 años, con pleno uso de facultades) compra un auto", "capaz"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["incapaz", "capaz"]

enunciado: "Considerando el siguiente caso: {escenario[idx][0]}. ¿Cuál es la situación jurídica de la persona respecto a la capacidad de ejercicio?"

explicacion: |
  La capacidad de ejercicio es la aptitud para ejercer derechos y contraer obligaciones por sí mismo. Los menores de edad (sin excepción de edad en este contexto simplificado) suelen ser sujetos con capacidad de derecho pero con restricciones en la de ejercicio.
```

### 2 — Elementos del contrato
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["contratos", "elementos"]

variables:
  caso: uno_de([["Un vendedor ofrece un reloj por $100 y un comprador acepta", "consentimiento"], ["Un terreno que no existe legalmente", "objeto"], ["Un contrato firmado bajo amenaza de muerte", "vicio"]])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["consentimiento", "objeto", "vicio"]

enunciado: "En el siguiente supuesto: {caso[idx][0]}. El elemento esencial del contrato que se está describiendo o afectando es el ___."

explicacion: |
  Para que un contrato sea válido, requiere objeto lícito, causa lícita y consentimiento de las partes.
```

### 3 — Propiedad y posesión
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["derechos_reales", "propiedad"]

variables:
  situacion: uno_de([[true, "Es propietario"], [false, "Es poseedor"]])
  idx: uno_de([0, 1])

respuesta: situacion[idx][0]
tipo: vf

enunciado: "Si una persona tiene el control de un bien pero no tiene el título de propiedad que la acredite legalmente, la afirmación de que 'tiene el dominio pleno sobre el bien' es ___."

explicacion: |
  La posesión es el poder de hecho sobre una cosa, mientras que el dominio es el derecho real de propiedad. No son sinónimos.
```

### 4 — Sucesiones: Orden de prelación
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "avanzado"
  tags: ["sucesiones", "herencia"]

variables:
  orden: ["Descendientes", "Ascendientes", "Cónyuge", "Colaterales"]

respuesta: orden
tipo: ordenar

enunciado: "Ordene los siguientes órdenes hereditarios según la prelación legal típica en el derecho civil (de mayor a menor prioridad):"

explicacion: |
  La ley establece un orden de vocación hereditaria para asegurar la transmisión de bienes, priorizando generalmente a los descendientes y luego a los ascendientes y cónyuge.
```

### 5 — Responsabilidad Civil
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["responsabilidad", "daños"]

variables:
  evento: uno_de([["El daño fue causado por negligencia", "subjetiva"], ["El daño fue causado por un animal de la persona", "objetiva"]])
  idx: uno_de([0, 1])

respuesta: evento[idx][1]
tipo: mc
opciones_explicitas: ["subjetiva", "objetiva"]

enunciado: "Analice el siguiente evento: {evento[idx][0]}. ¿Qué tipo de responsabilidad civil se está analizando principalmente?"

explicacion: |
  La responsabilidad subjetiva se basa en la culpa o dolo, mientras que la objetiva se basa en el riesgo creado o la guarda de una cosa.
```