### 1 — El límite elástico
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["deformacion", "elasticidad"]

variables:
  es_elastico: true

respuesta: es_elastico
tipo: vf

enunciado: "Si un material se somete a una carga que no supera su límite elástico, al retirar la carga el material recuperará su forma original. ¿Es esto un comportamiento elástico? {es_elastico}"

explicacion: |
  Correcto. El comportamiento elástico se caracteriza por la capacidad de un material de recuperar su forma original tras retirar la carga, siempre que no se haya superado el límite elástico.
```

### 2 — Identificación de la deformación
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["deformacion_permanente", "plasticidad"]

variables:
  escenario: uno_de([["un resorte de acero", "elástica"], ["un clavo de hierro doblado", "plástica"]])
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["elástica", "plástica"]

enunciado: "Analiza el siguiente caso: {escenario[idx][0]}. El tipo de deformación que presenta es de naturaleza ________."

explicacion: |
  Si el material recupera su forma es elástico. Si el material mantiene la deformación (como el clavo doblado), ha entrado en el régimen plástico.
```

### 3 — Cálculo de la deformación unitaria
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["calculo", "deformacion_unitaria"]

variables:
  datos: [[0.002, "0.002"], [0.005, "0.005"], [0.012, "0.012"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["0.002", "0.005", "0.012"]

enunciado: "Un cilindro de aluminio se estira desde una longitud inicial de 100 mm hasta una longitud final de 100.5 mm. La deformación unitaria (ε) se calcula como (L_final - L_inicial) / L_inicial. El valor obtenido es ________."

pasos:
  - "Calcular la diferencia de longitud: 100.5 - 100 = 0.5 mm"
  - "Dividir por la longitud inicial: 0.5 / 100 = 0.005"

explicacion: |
  La deformación unitaria es una magnitud adimensional que relaciona el cambio de longitud con la longitud original.
```

### 4 — Secuencia de la prueba de tracción
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["ensayo_traccion", "procedimiento"]]

respuesta: ["Aplicar carga progresiva", "Observar límite elástico", "Superar punto de fluencia", "Medir deformación permanente"]
tipo: ordenar
opciones_explicitas: ["Aplicar carga progresiva", "Observar límite elástico", "Superar punto de fluencia", "Medir deformación permanente"]

enunciado: "Ordena los pasos lógicos para observar el paso de un comportamiento elástico a uno plástico en un ensayo de tracción:"

explicacion: |
  Primero se aplica la carga, luego se identifica el límite donde la deformación deja de ser proporcional a la carga (límite elástico), se cruza el punto de fluencia y finalmente se observa la deformación plástica residual.
```

### 5 — El punto de fluencia
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "avanzado"
  tags: ["punto_de_fluencia", "esfuerzo"]

variables:
  caso: uno_de([["el material fluye sin aumento de carga", "fluencia"], ["el material se estira proporcionalmente", "elástico"]])
  idx: uno_de([0,1])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["fluencia", "elástico"]

enunciado: "En un diagrama Esfuerzo-Deformación, si observamos que el material experimenta un aumento de deformación sin necesidad de aumentar el esfuerzo, estamos ante un fenómeno de ________."

explicacion: |
  El fenómeno de fluencia (yielding) es la característica principal de los materiales dúctiles donde ocurre la deformación plástica significativa.
```