### 1 — Conservación en choques
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["conservacion", "momento", "energia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["colision_elástica", "se conserva"], ["colision_inelástica", "no se conserva"]]

enunciado: "En una {datos[escenario_idx][0]}, la energía cinética total del sistema ___."

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas: ["se conserva", "no se conserva"]

explicacion: |
  En un choque elástico la energía cinética se conserva. En un choque inelástico parte de la energía se transforma en calor o deformación, por lo que no se conserva.
```

### 2 — El caso del choque inelástico
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["energia_cinetica"]

enunciado: "¿Qué sucede con la energía cinética total en un choque perfectamente inelástico donde los objetos quedan pegados?"

opciones_explicitas: ["Se mantiene constante", "Se conserva parcialmente", "Se pierde (se transforma en otra forma de energía)", "Aumenta debido a la fricción"]

respuesta: "Se pierde (se transforma en otra forma de energía)"
tipo: mc

explicacion: |
  En los choques inelásticos, la energía cinética no se conserva; se transforma en energía térmica, sonido o energía de deformación.
```

### 3 — El principio de conservación universal
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["momento_lineal"]

enunciado: "Si dos bolas de billar chocan, independientemente de si el choque es elástico o inelástico, la cantidad de movimiento (momento lineal) total del sistema se ___."

opciones_explicitas: ["conserva", "pierde", "transforma en energía"]

respuesta: "conserva"
tipo: mc

explicacion: |
  La cantidad de movimiento lineal se conserva en todos los choques (siempre que no actúen fuerzas externas netas), ya sea elástico o inelástico.
```

### 4 — Análisis de escenario real
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["energia", "momento"]

variables:
  tipo_choque: uno_de([0, 1])
  info: [["elástico", "se conserva la energía cinética"], ["inelástico", "no se conserva la energía cinética"]]

enunciado: "Un accidente de tránsito donde los vehículos quedan trabados tras el impacto es un ejemplo de choque {info[tipo_choque][0]}. En este caso, la energía cinética ___."

respuesta: info[tipo_choque][1]
tipo: completar
respuestas_validas: ["se conserva la energía cinética", "no se conserva la energía cinética"]

explicacion: |
  Al quedar los cuerpos unidos, se trata de un choque inelástico, donde la energía cinética no se conserva.
```

### 5 — Verdadero o Falso: Conservación
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["teoria"]

enunciado: "¿Es posible que en un choque inelástico la energía cinética total del sistema sea mayor que la energía cinética inicial?"

opciones_explicitas: [falso, verdadero]

respuesta: falso
tipo: vf

explicacion: |
  La energía cinética no puede aumentar espontáneamente en un choque; en los choques inelásticos, la energía cinética siempre disminuye o se mantiene (si fuera elástico).
```