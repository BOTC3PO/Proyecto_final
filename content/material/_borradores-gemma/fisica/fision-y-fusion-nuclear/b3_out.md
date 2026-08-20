### 1 — El origen de la energía nuclear
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["energia", "materia", "relatividad"]

variables:
  masa_nucleo_padre: 235.0
  masa_nucleo_hijo: 235.0

respuesta: "defecto de masa"
tipo: completar
respuestas_validas: ["defecto de masa", "pérdida de masa", "masa faltante"]

enunciado: "En un proceso de fisión nuclear, la suma de las masas de los fragmentos resultantes es ligeramente menor que la masa del núcleo original. Esta diferencia se conoce como ___."

explicacion: |
  La diferencia de masa entre los reactivos y los productos se convierte en energía cinética y radiación, según la ecuación de Einstein E=mc².
```

### 2 — ¿Fisión o Fusión?
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["conceptos", "reaccion"]

variables:
  es_fusion: true

respuesta: es_fusion
tipo: vf

enunciado: "En la fusión nuclear, núcleos ligeros se combinan para formar un núcleo más pesado, liberando energía en el proceso. ¿Es esto correcto?"

explicacion: |
  Correcto. La fusión implica la unión de núcleos ligeros (como el hidrógeno) para formar elementos más pesados (como el helio), liberando una enorme cantidad de energía.
```

### 3 — Relación entre masa y energía
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["e_mc2", "relatividad"]

variables:
  escenario: uno_de(["fision", "fusion"])
  masa_inicial: 10.0
  masa_final: 9.9

respuesta: "la masa disminuye"
tipo: mc

opciones_explicitas: ["la masa disminuye", "la masa aumenta", "la masa se mantiene igual"]

enunciado: "Si un proceso nuclear libera energía hacia el entorno, según la equivalencia masa-energía de Einstein, ¿qué sucede con la masa total del sistema nuclear?"

explicacion: |
  Para que se libere energía (E > 0), la masa final debe ser menor que la masa inicial. La masa "perdida" se transforma en la energía liberada.
```

### 4 — El mito de la conservación de masa
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "avanzado"
  tags: ["conservacion", "materia"]

respuesta: "la masa no se conserva de forma absoluta en procesos nucleares"
tipo: mc

opciones_explicitas: ["la masa no se conserva de forma absoluta en procesos nucleares", "la masa se conserva perfectamente", "la masa aumenta siempre"]

enunciado: "En física nuclear, cuando ocurre una reacción que libera energía, la ley de conservación de la masa se interpreta de forma distinta a la física clásica. ¿Cuál es la afirmación correcta?"

explicacion: |
  En procesos nucleares, la masa y la energía son dos caras de la misma moneda. La masa total disminuye porque parte de ella se ha transformado en energía.
```

### 5 — Pasos de la liberación de energía
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

opciones_explicitas: ["Unión de núcleos", "Aumento de energía cinética", "Disminución de masa total"]
respuesta: ["Unión de núcleos", "Disminución de masa total", "Aumento de energía cinética"]
tipo: ordenar

enunciado: "Ordena los eventos que ocurren en una reacción de fusión nuclear desde el inicio hasta la liberación de energía:"

pasos:
  - "Los núcleos ligeros se aproximan y se unen."
  - "La masa de los productos es menor que la de los reactivos."
  - "Se libera energía en forma de movimiento o radiación."

explicacion: |
  Primero los núcleos se fusionan, esto genera un defecto de masa (la masa total baja) y esa diferencia de masa se manifiesta como la energía liberada.
```