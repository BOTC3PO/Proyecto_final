# Materiales — Elasticidad ley de hooke modulo de young (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de la Ley de Hooke

```
metadata:
  materia: "materiales"
  tema: "elasticidad_ley_de_hooke"
  nivel: "basico"
  tags: ["elasticidad", "hooke", "fuerza"]

respuesta: verdadero
tipo: vf

enunciado: "La Ley de Hooke establece que la deformación de un cuerpo elástico es directamente proporcional a la fuerza aplicada, siempre que no se exceda el límite elástico."

explicacion: |
  La Ley de Hooke postula la relación lineal entre la fuerza aplicada y la deformación (estiramiento o compresión) en el régimen elástico.
```

### 2 — Concepto de Módulo de Young

```
metadata:
  materia: "materiales"
  tema: "modulo_de_young"
  nivel: "basico"
  tags: ["rigidez", "propiedades_mecanicas"]

variables:
  datos: [["muy elevado", "alto"], ["muy bajo", "bajo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: "mc"
opciones_explicitas: ["alto", "bajo"]

enunciado: "Un material que presenta un Módulo de Young {datos[idx][0]} indica que el material es ____ respecto a su capacidad de deformarse bajo esfuerzo."

explicacion: |
  El Módulo de Young mide la rigidez de un material; cuanto mayor es su valor, menos se deforma el material ante un mismo esfuerzo.
```

### 3 — Relación de variables en la Ley de Hooke

```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_variables"
  nivel: "intermedio"
  tags: ["deformacion", "esfuerzo", "modulo_young"]

tipo: ordenar
opciones_explicitas: ["esfuerzo", "deformacion"]
respuesta_orden: ["esfuerzo", "deformacion"]

enunciado: "Para calcular el Módulo de Young (E), se debe dividir el esfuerzo entre la deformación."

explicacion: |
  La fórmula del Módulo de Young es E = σ / ε, donde σ es el esfuerzo (fuerza/área) y ε es la deformación unitaria.
```

### 4 — Límite Elástico

```
metadata:
  materia: "materiales"
  tema: "limite_elastico"
  nivel: "intermedio"
  tags: ["deformacion_permanente", "plasticidad"]

respuesta: "plasticidad"
tipo: "completar"
respuestas_validas:
  - "plasticidad"

enunciado: "Cuando un material es sometido a un esfuerzo que supera su límite elástico, la deformación deja de ser reversible y entra en el régimen de ________."

explicacion: |
  Al superar el límite elástico, el material sufre una deformación permanente (plástica) y no recupera su forma original al retirar la carga.
```

### 5 — Unidades del Módulo de Young

```
metadata:
  materia: "materiales"
  tema: "unidades_modulo_young"
  nivel: "basico"
  tags: ["unidades", "presion"]

respuesta: "Pascal"
tipo: "mc"
opciones_explicitas: ["Pascal", "Newton", "Kilogramo", "Metro"]

enunciado: "Dado que el Módulo de Young es la relación entre esfuerzo (fuerza/área) y deformación unitaria (adimensional), su unidad en el SI es el ________."

explicacion: |
  El esfuerzo se mide en Pascales (Pa), que es Newton sobre metro cuadrado (N/m²). Como la deformación no tiene unidades, el módulo mantiene la unidad del esfuerzo.
```

### 6 — Ley de Hooke: Fuerza y Deformación

```
metadata:
  materia: "fisica"
  tema: "ley_de_hooke"
  nivel: "basico"
  tags: ["elasticidad", "fuerza", "deformacion"]

variables:
  k: 250.0

enunciado: "Un resorte ideal tiene una constante elástica de {k} N/m. Si se le aplica una fuerza de 50 N, ¿cuál es la deformación (estiramiento) que experimenta el resorte?"

pasos:
  - "Identificar la fuerza aplicada (F = 50 N)."
  - "Identificar la constante elástica (k = 250 N/m)."
  - "Aplicar la Ley de Hooke: F = k * Δx, lo que implica Δx = F / k."
  - "Calcular: Δx = 50 / 250 = 0.2 metros."

respuesta: 0.2
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La Ley de Hooke establece que la fuerza aplicada es proporcional a la deformación: F = k * Δx. 
  Despejando la deformación: Δx = 50 N / 250 N/m = 0.2 m.
```

### 7 — Módulo de Young: Concepto de Rigidez

```
metadata:
  materia: "fisica"
  tema: "modulo_de_young"
  nivel: "intermedio"
  tags: ["rigidez", "materiales", "tension"]

opciones_explicitas: ["Es una medida de la resistencia de un material a la deformación elástica.", "Es una medida de la masa por unidad de volumen.", "Es la fuerza aplicada sobre un área específica."]

respuesta: "Es una medida de la resistencia de un material a la deformación elástica."
tipo: mc

enunciado: "El Módulo de Young (E) se define como la relación entre la tensión y la deformación unitaria en el régimen elástico. ¿Qué representa físicamente este valor?"

explicacion: |
  El Módulo de Young cuantifica la rigidez de un material sólido. Un valor más alto indica que el material es más rígido y requiere más esfuerzo para deformarse elásticamente.
```

### 8 — Relación Tensión-Deformación

```
metadata:
  materia: "fisica"
  tema: "diagrama_esfuerzo_deformacion"
  nivel: "intermedio"
  tags: ["tension", "deformacion", "elasticidad"]

variables:
  es_elastico: verdadero

enunciado: "Si un material se somete a una carga y, al retirar dicha carga, recupera su forma original sin deformaciones permanentes, se dice que el material se ha comportado de forma {es_elastico}."

respuesta: verdadero
tipo: vf

explicacion: |
  La característica principal de la deformación elástica es la capacidad de recuperación total de la geometría original una vez eliminada la fuerza externa.
```

### 9 — Cálculo de Esfuerzo (Tensión)

```
metadata:
  materia: "fisica"
  tema: "tension_mecanica"
  nivel: "intermedio"
  tags: ["esfuerzo", "area", "tension"]

variables:
  datos: [[100.0, 0.01], [200.0, 0.02], [50.0, 0.005]]
  idx: uno_de([0, 1, 2])
  respuesta_correcta: 10000.0

enunciado: "Se aplica una fuerza de {datos[idx][0]} N sobre una barra con una sección transversal de {datos[idx][1]} m². ¿Cuál es el valor del esfuerzo mecánico (tensión) en Pascales (Pa)?"

pasos:
  - "Calcular el esfuerzo usando la fórmula: σ = F / A."
  - "Sustituir los valores: σ = {datos[idx][0]} / {datos[idx][1]}."

respuesta: respuesta_correcta
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El esfuerzo (σ) se calcula dividiendo la fuerza entre el área de la sección transversal: σ = F / A.
```

### 10 — Proceso de Deformación Elástica

```
metadata:
  materia: "fisica"
  tema: "proceso_deformacion"
  nivel: "basico"
  tags: ["ordenar", "pasos", "carga"]

opciones_explicitas: ["Se aplica una carga externa al material.", "El material experimenta una deformación elástica.", "Se retira la carga y el material recupera su forma."]

respuesta_orden: ["Se aplica una carga externa al material.", "El material experimenta una deformación elástica.", "Se retira la carga y el material recupera su forma."]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos que describen un ciclo de carga y descarga en un material dentro de su límite elástico:"

explicacion: |
  Para que exista un ciclo elástico completo, primero debe aplicarse la fuerza, luego ocurrir la deformación proporcional y finalmente la recuperación tras retirar la carga.
```

### 11 — Diferencia entre rigidez y elasticidad

```
metadata:
  materia: "fisica"
  tema: "elasticidad_ley_de_hooke"
  nivel: "intermedio"
  tags: ["módulo_de_young", "rigidez", "deformación"]

variables:
  material_idx: uno_de([0, 1])
  datos: [[0.2, 200e9, 0.001], [0.5, 70e9, 0.002]]

enunciado: "Si comparamos dos barras de igual longitud y sección transversal, pero una tiene un módulo de Young mayor que la otra, la barra con mayor módulo de Young es más ___ ante la misma tensión aplicada."

opciones_explicitas: ["elástica", "rígida", "dúctil", "plástica"]

respuesta: "rígida"
tipo: mc

explicacion: |
  El módulo de Young ($E$) mide la rigidez de un material. A mayor $E$, menor es la deformación unitaria para un mismo esfuerzo, lo que significa que el material es más "rígido". No debe confundirse con la resistencia a la rotura.
```

### 12 — La confusión de la deformación unitaria

```
metadata:
  materia: "fisica"
  tema: "ley_de_hooke"
  nivel: "intermedio"
  tags: ["deformación_unitaria", "esfuerzo", "hooke"]

variables:
  es_proporcional: verdadero

respuesta: verdadero
tipo: vf

enunciado: "En el régimen elástico de un material, la deformación unitaria ($\\epsilon$) es directamente proporcional al esfuerzo aplicado ($\\sigma$), siempre que no se supere el límite de proporcionalidad."

explicacion: |
  Esta es la esencia de la Ley de Hooke ($\sigma = E \cdot \epsilon$). Si el material sale del régimen elástico, la relación deja de ser lineal y la Ley de Hooke ya no es aplicable.
```

### 13 — Cálculo del Módulo de Young

```
metadata:
  materia: "fisica"
  tema: "modulo_de_young"
  nivel: "avanzado"
  tags: ["calculo", "esfuerzo", "deformación"]

variables:
  escenario: uno_de([0, 1])
  valores: [[1000, 0.0005], [500, 0.001]]
  fuerza: valores[escenario][0]
  delta_l: valores[escenario][1]
  area: 0.001
  longitud: 2
  esfuerzo: fuerza / area
  deformacion: delta_l / longitud
  modulo_e: esfuerzo / deformacion

pasos:
  - "Calcular el esfuerzo σ = F / A"
  - "Calcular la deformación unitaria ε = ΔL / L"
  - "Calcular E = σ / ε"

enunciado: "Se aplica una fuerza de {fuerza} N sobre una varilla de sección A = 10⁻³ m² y longitud L = 2 m. Si la varilla se estira ΔL = {delta_l} m, ¿cuál es el módulo de Young del material en Pa?"

respuesta: modulo_e
tipo: completar
tolerancia_abs: 1000

explicacion: |
  Usando la fórmula E = (F/A)/(ΔL/L):
  σ = {fuerza} / {area} = {esfuerzo} Pa.
  ε = {delta_l} / {longitud} = {deformacion}.
  E = {esfuerzo} / {deformacion} = {modulo_e} Pa.
```

### 14 — Conceptos de la Ley de Hooke

```
metadata:
  materia: "fisica"
  tema: "ley_de_hooke"
  nivel: "basico"
  tags: ["completar", "esfuerzo", "deformación"]

respuesta: ["esfuerzo", "deformación"]
tipo: completar

enunciado: "La Ley de Hooke establece que el ___ es proporcional a la ___ unitaria en el régimen elástico."

explicacion: |
  La relación es $\sigma \propto \epsilon$. El error común es confundir el esfuerzo (fuerza por área) con la fuerza directamente, o la deformación (cambio relativo) con el desplazamiento absoluto.
```

### 15 — Orden de los procesos de deformación

```
metadata:
  materia: "fisica"
  tema: "deformacion_materiales"
  nivel: "intermedio"
  tags: ["orden", "procesos", "elasticidad"]

opciones_explicitas: ["Aplicación de carga", "Deformación elástica", "Deformación plástica", "Rotura"]

respuesta_orden: ["Aplicación de carga", "Deformación elástica", "Deformación plástica", "Rotura"]
tipo: ordenar

enunciado: "Ordene cronológicamente los estados por los que pasa un material sometido a una carga creciente hasta su falla:"

explicacion: |
  Primero ocurre la deformación reversible (elástica), luego si la carga sigue aumenta la deformación permanente (plástica) y finalmente el material se rompe.
```

### 16 — Ley de Hooke vs. Límite Elástico

```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_vs_limite_elastico"
  nivel: "basico"
  tags: ["elasticidad", "hooke"]

variables:
  es_elastico: verdadero

respuesta: es_elastico
tipo: completar
enunciado: "Si un material se deforma y, al retirar la carga, recupera su forma original, se dice que se encuentra dentro de su rango ____. Si la deformación es permanente, se ha superado el límite elástico."

pasos:
  - "Identificar si el comportamiento descrito es elástico o plástico."

explicacion: |
  La Ley de Hooke solo es válida mientras el material se encuentra en el régimen elástico. Una vez superado el límite elástico, el material entra en el régimen plástico y la deformación es irreversible.
```

### 17 — Módulo de Young vs. Módulo de Corte

```
metadata:
  materia: "materiales"
  tema: "modulo_young_vs_corte"
  nivel: "intermedio"
  tags: ["modulo_young", "modulo_corte", "deformacion"]

variables:
  tipo_deformacion: uno_de(["axial", "cizalladura"])

respuesta: tipo_deformacion
tipo: mc

opciones_explicitas: ["axial", "cizalladura"]

enunciado: "El Módulo de Young mide la rigidez de un material frente a una deformación de tipo {tipo_deformacion}, mientras que el Módulo de Corte mide la resistencia a la deformación por cizalladura."

explicacion: |
  El Módulo de Young ($E$) relaciona el esfuerzo normal con la deformación axial. El Módulo de Corte ($G$) relaciona el esfuerzo cortante con la deformación por cizalladura.
```

### 18 — Relación entre Módulo de Young y Rigidez

```
metadata:
  materia: "materiales"
  tema: "modulo_young_propiedades"
  nivel: "intermedio"
  tags: ["modulo_young", "rigidez"]

variables:
  es_mayor: verdadero

respuesta: es_mayor
tipo: completar
enunciado: "Si comparamos dos barras del mismo material pero con diferentes diámetros, la barra con mayor diámetro tendrá un valor de Módulo de Young más alto. ¿Es esto verdadero o falso?"

explicacion: |
  Falso. El Módulo de Young es una propiedad intensiva del material; su valor depende únicamente de la naturaleza del material y no de la geometría (diámetro o longitud) de la pieza.
```

### 19 — Componentes de la deformación elástica

```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_componentes"
  nivel: "basico"
  tags: ["hooke", "esfuerzo", "deformacion"]

respuesta_orden: ["esfuerzo", "deformación"]
tipo: ordenar

opciones_explicitas: ["esfuerzo", "deformación"]

enunciado: "En la formulación de la Ley de Hooke (σ = E · ε), se establece una relación de proporcionalidad directa entre el ____ y la ____."

explicacion: |
  La Ley de Hooke establece que el esfuerzo ($\sigma$) es directamente proporcional a la deformación unitaria ($\epsilon$), siendo el Módulo de Young ($E$) la constante de proporcionalidad.
```

### 20 — Diferencia entre Esfuerzo y Deformación

```
metadata:
  materia: "materiales"
  tema: "esfuerzo_vs_deformacion"
  nivel: "basico"
  tags: ["esfuerzo", "deformacion", "hooke"]

variables:
  es_relacion_directa: verdadero

respuesta: es_relacion_directa
tipo: completar
enunciado: "En el régimen elástico, si el esfuerzo aplicado sobre un material aumenta, la deformación resultante también aumenta. ¿Es esta relación directa?"

explicacion: |
  Sí, en el régimen elástico lineal, el esfuerzo y la deformación son directamente proporcionales según la Ley de Hooke.
```

### 21 — Cálculo del módulo de Young

```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_modulo_young"
  nivel: "intermedio"
  tags: ["elasticidad", "fisica", "materiales"]

variables:
  escenario: uno_de([[10, 0.001, 200e9, 0.005], [15, 0.002, 150e9, 0.004], [20, 0.001, 100e9, 0.002]])
  F: escenario[0]
  delta_L: escenario[1]
  E: escenario[2]
  L: escenario[3]

respuesta: (F / delta_L) / (E * L) * L
tipo: completar
tolerancia_abs: 1e-6

enunciado: "Un material tiene una longitud inicial de {L} m. Al aplicarle una fuerza de {F} N, su longitud aumenta {delta_L} m. ¿Cuál es el módulo de Young (E) del material en Pa?"

pasos:
  - "Calcular la tensión (stress): σ = F / A. Como no se da el área, usamos la forma deformación: σ = E * ε"
  - "La deformación unitaria es ε = ΔL / L"
  - "Despejamos E de la fórmula: E = (F / ΔL) / (A / L) -> En este caso, para obtener E directamente con los datos: E = (F * L) / (ΔL * A). Si asumimos que el dato proporcionado es la relación para el cálculo directo: E = (F / ΔL) / (L / (L * (ΔL/L))) -> Simplificado: E = (F * L) / (ΔL * A). Dado que el problema pide el módulo y relaciona F, ΔL, L y E, la fórmula es E = (F / ΔL) / (A/L). Si el área no se da, el enunciado implica el cálculo de la relación de rigidez: E = (F * L) / (ΔL * A). Asumiendo un área unitaria de 1 m² para el cálculo del módulo si no se especifica, o que el usuario debe despejar de la relación dada."
  - "Nota: Para este ejercicio, asuma un área de sección transversal de 1 m² para el cálculo del módulo de Young."

explicacion: |
  El módulo de Young se define como el esfuerzo dividido por la deformación unitaria: E = σ / ε.
  Donde σ = F / A y ε = ΔL / L.
  Si A = 1 m², entonces E = (F / ΔL) / (1 / L) = (F * L) / ΔL.
```

### 22 — Concepto de deformación elástica

```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_modulo_young"
  nivel: "basico"
  tags: ["conceptos", "elasticidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si un material se encuentra dentro de su límite elástico, al retirar la carga aplicada, este recuperará su forma original."
```

### 23 — Relación entre fuerza y deformación

```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_modulo_young"
  nivel: "basico"
  tags: ["ley_de_hooke", "proporcionalidad"]

variables:
  datos: [[10, "aumenta"], [20, "aumenta"], [30, "aumenta"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["disminuye", "aumenta", "se mantiene constante", "se vuelve negativo"]

enunciado: "De acuerdo con la Ley de Hooke, si aplicamos una fuerza mayor sobre un resorte (dentro de su zona elástica), la deformación de este ___."

explicacion: |
  La Ley de Hooke establece que la fuerza es directamente proporcional a la deformación (F = k * Δx).
```

### 24 — Unidades del Módulo de Young

```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_modulo_young"
  nivel: "basico"
  tags: ["unidades", "estudios"]

respuesta: "Pascales"
tipo: completar

opciones_explicitas: ["Pascales", "Newtons", "Metros", "Kilogramos"]

enunciado: "El módulo de Young, que mide la rigidez de un material, se expresa en unidades de ___."

explicacion: |
  Dado que el módulo de Young es la relación entre esfuerzo (N/m²) y deformación (adimensional), su unidad es el Pascal (Pa).
```

### 25 — Secuencia de estados de un material

```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_modulo_young"
  nivel: "intermedio"
  tags: ["deformación", "plasticidad"]

respuesta_orden: ["Deformación elástica", "Límite elástico", "Deformación plástica", "Punto de rotura"]
tipo: ordenar

opciones_explicitas: ["Deformación elástica", "Límite elástico", "Deformación plástica", "Punto de rotura"]

enunciado: "Ordene los estados de deformación de un material desde que se aplica una carga mínima hasta que falla completamente:"

explicacion: |
  1. Deformación elástica: El material vuelve a su forma original.
  2. Límite elástico: El punto máximo antes de que la deformación sea permanente.
  3. Deformación plástica: El material sufre cambios permanentes.
  4. Punto de rotura: El material falla y se separa.
```
