### 1 — El rol de la prueba en la sentencia
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["proceso_judicial", "pruebas"]

variables:
  caso_id: uno_de([0, 1])
  datos: [[["testigo_falso", "prueba_insuficiente"], ["documento_autentico", "prueba_plena"]]]

enunciado: "En un juicio por incumplimiento de contrato, el juez analiza la evidencia. Si el juez determina que la evidencia presentada es {datos[caso_id][0]}, la conclusión lógica es que la demanda será ___."

respuestas_validas: ["desestimada", "estimada"]
respuesta: datos[caso_id][1]
tipo: completar

explicacion: |
  La sentencia depende directamente de la valoración de la prueba. Si la prueba es insuficiente, no se puede romper la presunción de inocencia o de veracidad de la contraparte, resultando en una desestimación.
```

### 2 — Etapas del proceso de decisión
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["procedimiento", "etapas"]

opciones_explicitas: ["Presentación de la demanda", "Producción de pruebas", "Dictado de la sentencia"]
respuesta: ["Presentación de la demanda", "Producción de pruebas", "Dictado de la sentencia"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas fundamentales para que un juez llegue a una decisión definitiva en un proceso civil."

explicacion: |
  El proceso judicial sigue un orden lógico: primero se inicia con la demanda, luego se debate la evidencia (pruebas) y finalmente el juez emite su fallo (sentencia).
```

### 3 — La motivación de la sentencia
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "avanzado"
  tags: ["motivacion", "derecho_constitucional"]

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Verdadero"
tipo: vf

enunciado: "La 'motivación' de una sentencia es el deber del juez de explicar las razones fácticas y jurídicas que lo llevaron a tomar una decisión, evitando la arbitrariedad."

explicacion: |
  Una sentencia sin motivación es nula, ya que el derecho a la defensa exige conocer las razones por las cuales se ha decidido un caso.
```

### 4 — El principio de congruencia
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["congruencia", "sentencia"]

opciones_explicitas: ["Congruente", "Incongruente", "Nula"]
respuesta: "Incongruente"
tipo: mc

enunciado: "Si un juez dicta una sentencia otorgando una indemnización por daños morales cuando el actor solo demandó el pago de una deuda de dinero, la sentencia es ___ respecto a lo solicitado en la demanda."

explicacion: |
  El principio de congruencia exige que el juez debe decidir estrictamente sobre lo pedido por las partes. Si decide algo distinto a lo solicitado, incurre en incongruencia.
```

### 5 — El fallo en un caso de daños
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["fallo", "reparacion"]

variables:
  monto: uno_de([1000.0, 5000.0])
  valor_real: [[1000.0, 5000.0]]

enunciado: "En un caso de responsabilidad civil, el juez determina que el demandado debe pagar una indemnización de ${monto}. Si el demandado apela y el tribunal superior confirma el monto, la resolución final es de ${valor_real[uno_de([0,1])]}."

respuesta: 5000.0
tipo: input
tolerancia_abs: 0.01

explicacion: |
  En este ejercicio de lógica de variables, el valor final depende de la confirmación del monto establecido en la sentencia de primera instancia.
```