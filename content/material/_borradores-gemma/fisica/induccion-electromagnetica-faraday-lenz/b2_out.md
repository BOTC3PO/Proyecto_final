### 1 — Ley de Faraday-Lenz
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["ley_de_faraday", "flujo_magnetico"]

respuesta: verdadero
tipo: vf

enunciado: "Según la Ley de Faraday, la magnitud de la fuerza electromotriz (FEM) inducida en un circuito es proporcional a la rapidez con la que cambia el flujo magnético a través de él."

explicacion: |
  La ley de Faraday establece que $\epsilon = - \frac{d\Phi}{dt}$. El signo negativo representa la Ley de Lenz, indicando que la corriente inducida crea un campo magnético que se opone al cambio del flujo original.
```

### 2 — Cálculo de la FEM inducida
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["calculo_fem", "flujo_magnetico"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [[4.0, 2.0], [10.0, 5.0]] # [flujo_inicial, flujo_final]
  tiempo: 2.0

respuesta: datos[escenario_idx][1] - datos[escenario_idx][0] / tiempo

tipo: input
tolerancia_abs: 0.01

enunciado: "Un circuito experimenta un cambio en su flujo magnético de {datos[escenario_idx][0]} Wb a {datos[escenario_idx][1]} Wb en un intervalo de tiempo de {tiempo} segundos. ¿Cuál es la magnitud de la FEM inducida (en Voltios)?"

pasos:
  - "Calcular la variación del flujo: $\Delta\Phi = \Phi_{final} - \Phi_{inicial}$"
  - "Dividir la variación por el tiempo: $\epsilon = \Delta\Phi / \Delta t$"

explicacion: |
  La magnitud de la FEM se calcula como el cambio de flujo dividido por el tiempo:
  $\epsilon = |(5.0 - 4.0) / 2.0| = 0.5$ V (para el caso 1) o $|(10.0 - 5.0) / 2.0| = 2.5$ V (para el caso 2).
```

### 3 — Dirección de la corriente (Lenz)
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["ley_de_lenz", "campo_magnetico"]

opciones_explicitas: ["Aumenta el flujo magnético", "Disminuye el flujo magnético", "No afecta el flujo"]

respuesta: "Aumenta el flujo magnético"
tipo: mc

enunciado: "Si un imán se acerca a una espira conductorista, la corriente inducida en la espira creará un campo magnético con la intención de:"

explicacion: |
  La Ley de Lenz establece que el efecto inducido siempre se opone a la causa que lo produce. Si el flujo aumenta (acercar imán), la espira crea un campo opuesto para intentar disminuirlo.
```

### 4 — Completar la fórmula
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["formula", "flujo_magnetico"]

respuestas_validas: ["phi", "B", "A", "cos"]

respuesta: "phi"
tipo: completar

enunciado: "La expresión del flujo magnético $\Phi$ a través de una superficie es el producto del campo magnético $B$ por el área $A$ por el ___ del ángulo entre el vector campo y la normal a la superficie."

explicacion: |
  La fórmula es $\Phi = B \cdot A \cdot \cos(\theta)$.
```

### 5 — Pasos para resolver un problema de inducción
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["metodologia", "problema_fisica"]

opciones_explicitas: ["Calcular el flujo magnético $\Phi$", "Determinar la variación $\Delta\Phi$", "Dividir por el tiempo $\Delta t$"]

respuesta: ["Calcular el flujo magnético $\Phi$", "Determinar la variación $\Delta\Phi$", "Dividir por el tiempo $\Delta t$"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para hallar la magnitud de la FEM inducida cuando el flujo magnético cambia en un intervalo de tiempo determinado:"

explicacion: |
  Para aplicar la Ley de Faraday, primero debemos conocer el estado inicial y final del flujo para hallar la diferencia ($\Delta\Phi$) y luego aplicar la derivada temporal (división por el tiempo en casos discretos).
```