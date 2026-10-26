### 1 — La carga de la prueba
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["carga_de_la_prueba", "fiscalia", "proceso_penal"]

variables:
  caso_id: uno_de([0, 1])
  escenario: uno_de([
    ["El fiscal acusa a Juan de robo, pero no presenta testigos ni cámaras.", "El fiscal no cumplió con su carga de prueba."],
    ["El fiscal presenta un video donde se ve a Juan robando, pero la defensa no aporta nada.", "El fiscal cumplió con su carga de prueba."]
  ])

respuesta: escenario[caso_id][1]
tipo: mc
opciones_explicitas: ["El fiscal no cumplió con su carga de prueba.", "El fiscal cumplió con su carga de prueba."]

enunciado: "En un proceso penal, la carga de la prueba recae sobre la parte acusadora. Analice el siguiente escenario: {escenario[caso_id][0]}"

explicacion: |
  En el proceso penal, rige el principio de presunción de inocencia. Corresponde al Fiscal (parte acusadora) la carga de probar la culpabilidad del imputado mediante evidencia suficiente y lícita. Si no logra desvirtuar la presunción de inocencia, el imputado debe ser absuelto.
```

### 2 — El rol del Fiscal en la investigación
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "basico"
  tags: ["rol_fiscal", "investigacion"]

respuesta: verdadero
tipo: vf

enunciado: "El Fiscal tiene la obligación de investigar tanto los elementos que incriminan al imputado como aquellos que puedan exculparlo."

explicacion: |
  El principio de objetividad obliga al Fiscal a investigar la verdad real, lo que implica recolectar evidencia tanto de cargo (que demuestre el delito) como de descargo (que proteja al inocente).
```

### 3 — Etapas de la recolección de evidencia
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["etapas", "evidencia", "cadena_de_custodia"]

opciones_explicitas: ["Preservación de la escena", "Recolección de elementos", "Fijación de la evidencia", "Traslado a depósito"]

respuesta: ["Preservación de la escena", "Fijación de la evidencia", "Recolección de elementos", "Traslado a depósito"]
tipo: ordenar

enunciado: "Un perito llega a la escena de un crimen. Ordene cronológicamente los pasos técnicos para asegurar la integridad de la evidencia:"

explicacion: |
  Para garantizar la cadena de custodia, primero se debe asegurar y preservar la escena, luego fijar (fotografiar/esquematizar) la posición de los objetos, después recolectarlos y finalmente trasladarlos siguiendo protocolos de seguridad.
```

### 4 — La prueba ilícita
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "avanzado"
  tags: ["prueba_ilícita", "derechos_fundamentales"]

variables:
  es_ilegal: uno_de([0, 1])
  caso: uno_de([
    ["La policía entra a una casa sin orden judicial y encuentra una droga.", "ilegal"],
    ["La policía encuentra la droga tras una persecución en flagrancia.", "legal"]
  ])

respuesta: caso[es_ilegal][1]
tipo: completar
respuestas_validas: ["ilegal", "legal"]

enunciado: "Si la evidencia fue obtenida mediante la violación de un derecho fundamental (como la inviolabilidad del domicilio sin orden), su calificación jurídica es: ___"

explicacion: |
  La prueba obtenida con violación de garantías constitucionales es considerada "prueba ilícita" y debe ser excluida del proceso, ya que no puede ser utilizada para fundar una condena.
```

### 5 — El estándar de prueba para la acusación
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "avanzado"
  tags: ["estandar_prueba", "acusacion"]

respuesta: "más allá de toda duda razonable"
tipo: mc
opciones_explicitas: ["probabilidad simple", "más allá de toda duda razonable", "certeza absoluta", "indicios suficientes"]

enunciado: "Para que un Fiscal pueda solicitar una sentencia condenatoria en un juicio oral, debe haber acreditado la culpabilidad del imputado con un estándar de prueba de:"

explicacion: |
  En el sistema penal, el estándar de convicción que debe alcanzar la fiscalía es el de 'más allá de toda duda razonable'. Si existe una duda lógica y fundada, debe aplicarse el principio 'in dubio pro reo'.
```