### 1 — Concepto de Flujo Magnético
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["flujo_magnetico", "definicion"]

enunciado: "El producto escalar entre el vector campo magnético $\\vec{B}$ y el vector área $\\vec{A}$ se define como el ___ magnético."

respuestas_validas: ["flujo"]
tipo: completar

explicacion: |
  El flujo magnético ($\Phi$) mide la cantidad de campo magnético que atraviesa una superficie determinada.
```

### 2 — Ley de Faraday
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["ley_faraday", "fem"]

opciones_explicitas: ["La variación del flujo magnético en el tiempo", "La intensidad del campo magnético constante", "La resistencia del conductor", "La carga eléctrica total"]
respuesta: "La variación del flujo magnético en el tiempo"
tipo: mc

enunciado: "¿Qué magnitud es proporcional a la fuerza electromotriz (FEM) inducida según la Ley de Faraday?"

explicacion: |
  La Ley de Faraday establece que la FEM inducida es igual a la rapidez con la que cambia el flujo magnético a través de un circuito.
```

### 3 — Ley de Lenz y Dirección
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["ley_lenz", "polaridad"]

variables:
  escenario_idx: uno_de([0, 1])

enunciado: "Considerando el escenario {escenario_data[escenario_idx][0]}, la corriente inducida tendrá una dirección tal que el campo magnético creado por ella ___ el cambio en el flujo original."

variables:
  escenario_data: [["aumento", "se oponga"], ["disminución", "se oponga"]]

respuesta: "se oponga"
tipo: mc

opciones_explicitas: ["se oponga", "favorezca", "no tiene efecto"]

explicacion: |
  La Ley de Lenz es una consecuencia del principio de conservación de la energía y establece que el sentido de la corriente inducida es tal que el campo magnético que genera se opone a la variación del flujo que la produjo.
```

### 4 — Verdad o Falso: Inducción
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["conceptos_clave"]

enunciado: "¿Es necesario que exista un movimiento relativo entre un imán y una espira para que se induzca una corriente eléctrica?"

respuesta: falso
tipo: vf

explicacion: |
  No necesariamente. La inducción ocurre siempre que haya una variación del flujo magnético. Esto puede lograrse moviendo el imán, moviendo la espira, o incluso variando la intensidad del campo magnético con el imán en reposo.
```

### 5 — Componentes de la FEM
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["componentes", "formula"]

enunciado: "Para calcular la magnitud de la FEM inducida ($\\epsilon$) en un circuito de $N$ espiras, se requiere conocer el número de vueltas, la variación del flujo ($\\Delta\\Phi$) y el ___ ($\\Delta t$)."

respuestas_validas: ["tiempo"]
tipo: completar

explicacion: |
  La fórmula de la Ley de Faraday es $\\epsilon = -N \\frac{\\Delta\\Phi}{\\Delta t}$, donde el denominador representa el intervalo de tiempo en el que ocurre la variación.
```