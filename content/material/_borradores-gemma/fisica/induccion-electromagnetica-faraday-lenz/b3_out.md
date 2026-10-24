### 1 — El signo de la fuerza electromotriz
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["faraday", "lenz", "flujo_magnetico"]

variables:
  idx: uno_de([0, 1])
  datos: [["aumenta", "-"], ["disminuye", "+"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["-", "+"]

enunciado: "Si el flujo magnético a través de una espira cerrada está {datos[idx][0]} (en valor absoluto), la corriente inducida generará un campo magnético que se opone a ese cambio. El signo de la FEM inducida según la Ley de Lenz para contrarrestar dicho cambio es ___."

explicacion: |
  La Ley de Lenz establece que el sentido de la corriente inducida es tal que el campo magnético creado por ella se opone a la variación del flujo que la produjo. Si el flujo aumenta, la espira intenta disminuirlo (signo opuesto); si el flujo disminuye, intenta aumentarlo.
```

### 2 — Naturaleza de la corriente inducida
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["faraday", "lenz"]

respuesta: falso
tipo: vf

enunciado: "Para que se produzca una corriente inducida en un conductor, es estrictamente necesario que el campo magnético sea constante en el tiempo, pero su intensidad debe variar de forma no lineal."

explicacion: |
  Falso. La condición fundamental para la inducción es la variación del flujo magnético ($\Phi = B \cdot A \cdot \cos\theta$). Un campo magnético puede ser constante en intensidad pero producir corriente si la espira se mueve (cambia el ángulo o el área), o un campo variable puede no producir corriente si el área de la espira es cero.
```

### 3 — Componentes del flujo magnético
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["flujo_magnetico", "geometria"]

variables:
  angulo_deg: uno_de([0, 90])
  seno_val: [1.0, 0.0]

respuesta: seno_val[idx]
tipo: completar
respuestas_validas: [1.0, 0.0]

enunciado: "El flujo magnético $\Phi$ depende del ángulo entre el vector campo magnético $\vec{B}$ y el vector normal a la superficie $\vec{A}$. Si el ángulo entre $\vec{B}$ y la normal es de {angulo_deg} grados, el valor del seno de dicho ángulo es ___."

explicacion: |
  El flujo magnético es $\Phi = B \cdot A \cdot \cos(\theta)$. Sin embargo, la pregunta pide el seno del ángulo para evaluar la comprensión trigonométrica de la orientación. Si el ángulo es 90°, el seno es 0 (flujo máximo si se considera el ángulo con el plano, pero aquí hablamos del ángulo con la normal).
```

### 4 — Relación entre movimiento y corriente
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["faraday", "movimiento"]

respuesta: "se produce una corriente inducida"
tipo: completar
respuestas_validas: ["se produce una corriente inducida", "no se produce una corriente inducida"]

enunciado: "Si un imán se mueve lentamente hacia una espira de cobre colocada sobre una superficie no conductora, la variación del flujo magnético provoca que ___."

explicacion: |
  La variación del flujo magnético $\Delta\Phi/\Delta t$ es la causa de la fuerza electromotriz inducida según la Ley de Faraday. Al acercar el imán, el flujo cambia y se induce corriente.
```

### 5 — Dependencia de la velocidad de cambio
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["faraday", "calculo"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "Considerando la Ley de Faraday ($\mathcal{E} = -d\Phi/dt$), si la rapidez con la que cambia el flujo magnético a través de una espira aumenta, la magnitud de la fuerza electromotriz inducida será ___."

explicacion: |
  La magnitud de la FEM inducida es directamente proporcional a la rapidez de la variación del flujo magnético. A mayor velocidad de cambio, mayor es la tensión inducida.
```