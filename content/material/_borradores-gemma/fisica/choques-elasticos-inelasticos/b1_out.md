### 1 — Conservación en choques
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["conservacion", "momento", "energia"]

respuesta: "momento"
tipo: completar
respuestas_validas: ["momento", "cantidad_de_movimiento"]

enunciado: "En cualquier tipo de choque (elástico o inelástico), la _______ lineal del sistema se conserva siempre, siempre que no actúen fuerzas externas netas."

explicacion: |
  La cantidad de movimiento (o momento lineal) se conserva en todos los choques si la suma de fuerzas externas es cero.
```

### 2 — Energía en choques elásticos
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["energia_cinetica", "elastico"]

respuesta: verdadero
tipo: vf

enunciado: "En un choque perfectamente elástico, la energía cinética total del sistema antes del impacto es igual a la energía cinética total después del impacto."

explicacion: |
  Por definición, un choque es elástico si no hay pérdida de energía cinética (la energía se transforma en otras formas, pero la suma de las cinéticas se mantiene).
```

### 3 — Identificación de choques
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["clasificacion", "choque_inelastico"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Elástico", "Inelástico"]

enunciado: "Si tras un choque dos objetos quedan pegados y se mueven con la misma velocidad, ¿qué tipo de choque ha ocurrido según la descripción del escenario?"

pasos:
  - "Identificar si hubo deformación permanente o pérdida de energía."
  - "Observar si los objetos permanecen unidos."

explicacion: |
  Cuando los objetos quedan unidos tras el impacto, el choque es perfectamente inelástico, ya que se ha perdido la mayor parte de la energía cinética en la deformación.

datos:
  - ["Los objetos rebotan sin deformarse", "Inelástico"]
  - ["Los objetos quedan pegados tras el impacto", "Inelástico"]
```

### 4 — Propiedades de la energía
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["energia", "inelastico"]

respuesta: falso
tipo: vf

enunciado: "En un choque perfectamente inelástico, la energía cinética del sistema se conserva íntegramente."

explicacion: |
  Falso. En los choques inelásticos, parte de la energía cinética se transforma en calor, sonido o energía de deformación.
```

### 5 — Conceptos clave
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: "Inelástico"
tipo: mc
opciones_explicitas: ["Elástico", "Inelástico", "Superelástico"]

enunciado: "Se denomina choque _______ aquel en el cual la energía cinética del sistema no se conserva, transformándose en otras formas de energía."

explicacion: |
  El término correcto es choque inelástico. En este proceso, la energía cinética se disipa.
```