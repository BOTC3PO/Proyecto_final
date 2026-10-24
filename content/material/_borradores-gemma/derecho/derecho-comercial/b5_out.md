### 1 — Naturaleza de la sociedad comercial
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["sociedades", "comerciantes"]

variables:
  escenario: uno_de([["Juan y Pedro deciden formar una sociedad para vender muebles", "sociedad"], ["Ana decide abrir una tienda de ropa como persona física", "persona_fisica"]])
  idx: uno_de([0, 1])

enunciado: "En el caso de que {escenario[idx][0]}, la entidad constituida se denomina una ___."

respuestas_validas: ["sociedad", "persona_fisica"]
respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  Si hay un acuerdo de voluntades para un fin común y aportes, se constituye una sociedad. Si actúa un individuo, es persona física/humana.
```

### 2 — Clasificación de contratos
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["contratos", "comercio"]

variables:
  caso: uno_de([["Compraventa de mercadería para reventa", "comercial"], ["Alquiler de una vivienda para uso familiar", "civil"]])
  idx: uno_de([0, 1])

enunciado: "Considerando que el acto es {caso[idx][0]}, el contrato resultante es de naturaleza ___."

opciones_explicitas: ["comercial", "civil", "administrativo"]
respuesta: caso[idx][1]
tipo: mc

explicacion: |
  Los contratos comerciales son aquellos que tienen por objeto actos de comercio o son realizados por comerciantes en el ejercicio de su profesión.
```

### 3 — El proceso de quiebra
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "avanzado"
  tags: ["quiebra", "concurso"]

variables:
  situacion: uno_de([["El comerciante tiene insolvencia pero busca un acuerdo con acreedores", "concurso"], ["El comerciante es insolvente y no tiene posibilidad de acuerdo", "quiebra"]])
  idx: uno_de([0, 1])

enunciado: "Si la situación es {situacion[idx][0]}, el proceso legal correspondiente es un ___."

opciones_explicitas: ["concurso preventivo", "quiebra directa", "liquidación"]
respuesta: situacion[idx][1]
tipo: mc

explicacion: |
  El concurso preventivo busca la protección del deudor mediante un acuerdo; la quiebra busca la liquidación de activos ante la insolvencia total.
```

### 4 — Requisitos de la sociedad
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["sociedades", "requisitos"]

enunciado: "¿Es verdadero o falso que para la existencia de una sociedad comercial es indispensable la existencia de un fin de lucro?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc

explicacion: |
  El ánimo de lucro (o fin de lucro) es el elemento esencial que distingue a las sociedades de las asociaciones civiles sin fines de lucro.
```

### 5 — Etapas del proceso concursal
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["concurso", "pasos"]

variables:
  orden_correcta: ["Presentación del pedido de concurso", "Verificación de créditos", "Acuerdo preventivo", "Homologación judicial"]

enunciado: "Ordene cronológicamente las etapas típicas de un proceso de concurso preventivo exitoso:"

opciones_explicitas: ["Presentación del pedido de concurso", "Verificación de créditos", "Acuerdo preventivo", "Homologación judicial"]
respuesta: ["Presentación del pedido de concurso", "Verificación de créditos", "Acuerdo preventivo", "Homologación judicial"]
tipo: ordenar

explicacion: |
  El proceso inicia con la presentación, sigue con la acreditación de los derechos de los acreedores (verificación), la negociación del acuerdo y finalmente el control judicial (homologación).
```