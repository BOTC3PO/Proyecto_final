# Fisica — Fision y fusion nuclear (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Fisión Nuclear

```
metadata:
  materia: "fisica"
  tema: "fision_nuclear"
  nivel: "basico"
  tags: ["nucleo", "fision", "energia"]

respuesta: "fision"
tipo: completar
respuestas_validas:
  - "fision"
  - "fisión"

enunciado: "El proceso mediante el cual un núcleo pesado se divide en dos o más núcleos más pequeños, liberando una gran cantidad de energía, se denomina ___."

explicacion: |
  La fisión nuclear ocurre cuando un núcleo pesado (como el Uranio-235) absorbe un neutrón y se divide, liberando energía y más neutrones.
```

### 2 — Fusión Nuclear y Masa

```
metadata:
  materia: "fisica"
  tema: "fusion_nuclear"
  nivel: "basico"
  tags: ["fusion", "masa", "energia"]

variables:
  es_fusion: verdadero

respuesta: es_fusion
tipo: completar
enunciado: "¿En un proceso de fusión nuclear, la masa de los núcleos resultantes es mayor que la masa de los núcleos originales?"

explicacion: |
  Falso. En la fusión (y en la fisión), la masa de los productos es menor que la de los reactivos. Esa diferencia de masa se convierte en energía según la ecuación de Einstein.
```

### 3 — La Ecuación de Einstein

```
metadata:
  materia: "fisica"
  tema: "defecto_de_masa"
  nivel: "intermedio"
  tags: ["einstein", "relatividad", "energia"]

respuesta: "E=mc^2"
tipo: mc
opciones_explicitas: ["E=mc^2", "E=m/c^2", "E=m+c^2", "E=mc"]

enunciado: "La relación matemática que describe cómo la pérdida de masa (defecto de masa) se transforma en energía es:"

explicacion: |
  La famosa ecuación de Albert Einstein establece que la energía (E) es igual a la masa (m) multiplicada por la velocidad de la luz al cuadrado (c²).
```

### 4 — El Defecto de Masa

```
metadata:
  materia: "fisica"
  tema: "defecto_de_masa"
  nivel: "intermedio"
  tags: ["masa", "energia", "nucleo"]

respuesta: "defecto de masa"
tipo: completar
respuestas_validas:
  - "defecto de masa"
  - "defecto de masa"

enunciado: "La diferencia entre la masa de los nucleones individuales y la masa del núcleo unido se conoce como ___."

explicacion: |
  Esta diferencia es la que se libera en forma de energía de enlace durante los procesos nucleares.
```

### 5 — Comparación de Procesos

```
metadata:
  materia: "fisica"
  tema: "fision_vs_fusion"
  nivel: "basico"
  tags: ["comparacion", "fision", "fusion"]

respuesta_orden: ["Fisión", "Fusión"]
tipo: ordenar

opciones_explicitas: ["Fusión", "Fisión"]

enunciado: "Ordena los siguientes procesos desde el que ocurre en núcleos pesados hasta el que ocurre en núcleos muy ligeros:"

pasos:
  - "Proceso en núcleos pesados (ej. Uranio)"
  - "Proceso en núcleos ligeros (ej. Hidrógeno)"

explicacion: |
  La fisión divide núcleos pesados, mientras que la fusión une núcleos ligeros.
```

### 6 — La equivalencia masa-energía

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["einstein", "relatividad", "energia"]

variables:
  m_defecto_kg: 0.000000000000000000001

respuesta: m_defecto_kg * c * c
tipo: completar
tolerancia_abs: 1e-20

enunciado: "Si en un proceso nuclear se pierde una cantidad de masa de {m_defecto_kg} kg, ¿cuánta energía se libera en Joules según la ecuación de Einstein?"

pasos:
  - "Identificar la masa perdida (defecto de masa): m = 1e-21 kg"
  - "Utilizar la fórmula E = m * c²"
  - "Sustituir c ≈ 3e8 m/s: E = 1e-21 * (3e8)² = 1e-21 * 9e16"
  - "Resultado: 9e-5 J"

explicacion: |
  La energía liberada proviene del defecto de masa. Al convertir esa masa perdida en energía mediante E = mc², obtenemos la energía liberada en el proceso.
```

### 7 — Concepto de Defecto de Masa

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["conceptos", "nucleo"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es el defecto de masa la diferencia entre la masa de los nucleones individuales y la masa del núcleo resultante?"

explicacion: |
  Correcto. La masa de un núcleo atómico es siempre menor que la suma de las masas de sus protones y neutrones por separado. Esa diferencia es lo que se convierte en energía de enlace.
```

### 8 — Fisión vs Fusión

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["fision", "fusion"]

variables:
  escenario: uno_de(["fision", "fusion"])

respuesta: escenario
tipo: mc
opciones_explicitas: ["fision", "fusion"]

enunciado: "El proceso que consiste en la unión de dos núcleos ligeros para formar uno más pesado se denomina {escenario}."

explicacion: |
  Si el escenario seleccionado fue {escenario}, la respuesta es correcta. La fusión une núcleos ligeros (como el hidrógeno) y la fisión divide núcleos pesados (como el uranio).
```

### 9 — Cálculo de energía de fusión

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "avanzado"
  tags: ["calculo", "fusion"]

variables:
  datos: [[0.002, "1.8e14"], [0.005, "4.5e14"], [0.001, "9.0e13"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "1.8e14"
  - "4.5e14"
  - "9.0e13"

enunciado: "En una reacción de fusión, la masa inicial es de 1.005 kg y la masa final es de 1.000 kg. La energía liberada es de ___ J."

pasos:
  - "Calcular el defecto de masa: Δm = 1.005 - 1.000 = 0.005 kg (usando el valor del ejemplo)"
  - "Aplicar E = Δm * c²"
  - "E = 0.005 * (3e8)^2 = 4.5e14 J"

explicacion: |
  El cálculo depende del valor de la masa perdida. Para un defecto de 0.005 kg, la energía es 4.5e14 J.
```

### 10 — Orden de procesos energéticos

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["orden", "procesos"]

respuesta_orden: ["Fisión", "Fusión"]
tipo: ordenar
opciones_explicitas: ["Fisión", "Fusión"]

enunciado: "Ordena estos procesos según el tipo de núcleo que utilizan: 1. División de un núcleo pesado. 2. Unión de núcleos ligeros."

explicacion: |
  La fisión implica la división de un núcleo grande y pesado, mientras que la fusión implica la unión de núcleos muy pequeños y ligeros.
```

### 11 — El origen de la energía nuclear

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
respuestas_validas:
  - "defecto de masa"
  - "pérdida de masa"
  - "masa faltante"

enunciado: "En un proceso de fisión nuclear, la suma de las masas de los fragmentos resultantes es ligeramente menor que la masa del núcleo original. Esta diferencia se conoce como ___."

explicacion: |
  La diferencia de masa entre los reactivos y los productos se convierte en energía cinética y radiación, según la ecuación de Einstein E=mc².
```

### 12 — ¿Fisión o Fusión?

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["conceptos", "reaccion"]

respuesta: verdadero
tipo: vf
enunciado: "En la fusión nuclear, núcleos ligeros se combinan para formar un núcleo más pesado, liberando energía en el proceso. ¿Es esto correcto?"

explicacion: |
  Correcto. La fusión implica la unión de núcleos ligeros (como el hidrógeno) para formar elementos más pesados (como el helio), liberando una enorme cantidad de energía.
```

### 13 — Relación entre masa y energía

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

### 14 — El mito de la conservación de masa

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

### 15 — Pasos de la liberación de energía

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

opciones_explicitas: ["Unión de núcleos", "Aumento de energía cinética", "Disminución de masa total"]
respuesta_orden: ["Unión de núcleos", "Disminución de masa total", "Aumento de energía cinética"]
tipo: ordenar

enunciado: "Ordena los eventos que ocurren en una reacción de fusión nuclear desde el inicio hasta la liberación de energía:"

pasos:
  - "Los núcleos ligeros se aproximan y se unen."
  - "La masa de los productos es menor que la de los reactivos."
  - "Se libera energía en forma de movimiento o radiación."

explicacion: |
  Primero los núcleos se fusionan, esto genera un defecto de masa (la masa total baja) y esa diferencia de masa se manifiesta como la energía liberada.
```

### 16 — Diferencia energética fundamental

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["energia", "masa", "relatividad"]

respuesta: "defecto de masa"
tipo: "completar"
respuestas_validas:
  - "defecto de masa"
  - "defecto de masa"

enunciado: "Tanto en la fisión como en la fusión nuclear, la energía liberada proviene de la conversión de una pequeña parte de la masa de los núcleos en energía, fenómeno conocido como ___."

explicacion: |
  La masa de los productos resultantes es menor que la masa de los reactivos originales. Esa diferencia de masa se convierte en energía según la ecuación de Einstein $E=mc^2$.
```

### 17 — Comparación de procesos

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["comparacion", "nucleos"]

respuesta: "La fisión divide núcleos pesados y la fusión une núcleos ligeros, ambas liberando energía"
tipo: "mc"
opciones_explicitas: ["La fisión divide núcleos pesados y la fusión une núcleos ligeros, ambas liberando energía", "La fisión une núcleos ligeros y la fusión divide núcleos pesados, ambas liberando energía", "Tanto la fisión como la fusión dividen núcleos pesados", "Tanto la fisión como la fusión unen núcleos ligeros"]

enunciado: "Considerando los procesos nucleares, ¿cuál de las siguientes afirmaciones describe correctamente la diferencia entre ambos?"

explicacion: |
  La fisión consiste en la división de un núcleo pesado (como el Uranio-235) en fragmentos más pequeños, mientras que la fusión es la unión de núcleos ligeros (como el Hidrógeno) para formar uno más pesado.
```

### 18 — Verdad o Falso: El rol de la masa

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["relatividad", "e_mc2"]

respuesta: falso
tipo: "vf"

enunciado: "En un proceso de fusión nuclear, la suma de las masas de los núcleos finales es exactamente igual a la suma de las masas de los núcleos iniciales, ya que la energía no afecta la masa."

explicacion: |
  Falso. Si la masa se mantuviera constante, no habría liberación de energía. La energía liberada proviene precisamente de que la masa final es menor que la inicial (defecto de masa).
```

### 19 — Relación de escala de energía

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "avanzado"
  tags: ["magnitud", "energia"]

respuesta: "La fusión libera más energía por unidad de masa que la fisión"
tipo: "mc"
opciones_explicitas: ["La fisión libera más energía por unidad de masa que la fusión", "La fusión libera más energía por unidad de masa que la fisión", "Ambos liberan la misma cantidad de energía por nucleón", "La fisión requiere temperaturas mucho más altas que la fusión"]

enunciado: "Analizando la eficiencia energética de ambos procesos, ¿cuál es la distinción principal respecto a la energía liberada por unidad de masa?"

explicacion: |
  Aunque la fisión es muy potente, la fusión nuclear (como la que ocurre en las estrellas) libera una cantidad significativamente mayor de energía por cada nucleón involucrado.
```

### 20 — Secuencia de la conversión de masa

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["pasos", "energia"]

respuesta_orden: ["Reactivos con masa total mayor", "Transformación por interacción nuclear", "Productos con masa total menor", "Liberación de energía (E=mc²)"]
tipo: "ordenar"
opciones_explicitas: ["Reactivos con masa total mayor", "Transformación por interacción nuclear", "Productos con masa total menor", "Liberación de energía (E=mc²)"]

enunciado: "Ordena los pasos que explican la liberación de energía en un proceso de fusión o fisión nuclear:"

explicacion: |
  El proceso comienza con los reactivos, ocurre la interacción que rompe o une los núcleos, la masa resultante es menor debido al defecto de masa, y esa diferencia se manifiesta como energía liberada.
```

### 21 — El secreto de la energía nuclear

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["energia", "relatividad", "masa"]

variables:
  datos: [["Uranio-235", "fision"], ["Hidrogeno", "fusion"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["fision", "fusion", "combustion", "desintegracion"]

enunciado: "En una central nuclear convencional, se utiliza el proceso de {datos[idx][0]} para liberar energía. Este proceso se denomina:"

explicacion: |
  El proceso de {datos[idx][0]} en reactores nucleares se basa en la fisión, donde un núcleo pesado se divide.
```

### 22 — El defecto de masa

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "avanzado"
  tags: ["defecto_de_masa", "einstein"]

variables:
  datos: [["1.005", "0.005"], ["1.010", "0.010"], ["0.998", "0.002"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "0.005"
  - "0.010"
  - "0.002"

enunciado: "Si la masa de los fragmentos resultantes tras un proceso nuclear es de ___ unidades de masa atómica menos que la masa de los núcleos originales, ese valor se conoce como defecto de masa."

pasos:
  - "Identificar la masa inicial de los reactivos."
  - "Identificar la masa final de los productos."
  - "Calcular la diferencia para hallar el defecto de masa."

explicacion: |
  La diferencia de masa (defecto de masa) se convierte en energía según la ecuación de Einstein.
```

### 23 — ¿Es la fusión una realidad?

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["verdad_falso", "estrellas"]

respuesta: verdadero
tipo: vf
enunciado: "La fusión nuclear es el proceso que alimenta a las estrellas, como el Sol, donde núcleos ligeros se unen para formar uno más pesado."

explicacion: |
  Es verdadero. En el Sol, la fusión de núcleos de hidrógeno libera la energía que percibimos como luz y calor.
```

### 24 — La ecuación de Einstein

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["e_mc2", "calculo"]

variables:
  valores: [["1.0e-30", "2.7e-13"], ["2.0e-30", "5.4e-13"], ["5.0e-30", "4.5e-13"]]
  idx: uno_de([0,1,2])

respuesta: valores[idx][1]
tipo: completar
tolerancia_abs: 0.00001e-13

enunciado: "Si un proceso nuclear libera una cantidad de masa $\\Delta m$ de {valores[idx][0]} kg, ¿cuánta energía $E$ se libera en Joules (usando $c = 3 \\times 10^8$ m/s)? (Expresa el resultado en notación científica, ej: 1.5e-10)"

pasos:
  - "Utilizar la fórmula $E = \\Delta m \\cdot c^2$."
  - "Sustituir $\\Delta m$ por el valor dado."
  - "Elevar la velocidad de la luz al cuadrado ($9 \\times 10^{16}$)."

explicacion: |
  Aplicando $E = mc^2$, la energía liberada es {valores[idx][1]} J.
```

### 25 — El ciclo de la energía nuclear

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["ordenar", "proceso"]

respuesta_orden: ["Masa de reactivos", "Defecto de masa", "Energía liberada"]
tipo: ordenar
opciones_explicitas: ["Masa de reactivos", "Defecto de masa", "Energía liberada"]

enunciado: "Ordena los conceptos según el orden lógico en el que ocurren para explicar la liberación de energía en un proceso nuclear:"

explicacion: |
  Primero tenemos la masa inicial, luego la diferencia (defecto) que se convierte en energía.
```
