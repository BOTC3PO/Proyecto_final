# Química — Estequiometría (cuestionario, nivel 2, 20 preguntas VBLang)

> Continúa `cuestionario.md` (nivel 1). Cubre la profundidad de `QK`
> dentro del Tronco 7: relaciones mol-mol/mol-masa/masa-masa leídas
> directo de una ecuación balanceada.

---

### 1 — Moles de agua producidos

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "intermedio"
  tags: ["estequiometria", "moles", "reaccion_quimica"]

variables:
  moles_h2: uno_de([2, 4, 6, 10])

respuesta: moles_h2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Para 2H2 + O2 -> 2H2O, ¿cuántos moles de H2O se producen a partir de {moles_h2} moles de H2?"

explicacion: |
  La relación H2:H2O es 2:2 (1:1), así que los moles de H2O igualan a los de H2.
```

### 2 — Moles de oxígeno necesarios

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "intermedio"
  tags: ["estequiometria", "moles", "oxigeno"]

variables:
  moles_h2o: uno_de([2, 4, 6])

respuesta: moles_h2o / 2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Para 2H2 + O2 -> 2H2O, ¿cuántos moles de O2 se necesitan para producir {moles_h2o} moles de H2O?"

pasos:
  - "1 mol de O2 produce 2 moles de H2O."

explicacion: |
  moles O2 = {moles_h2o} / 2.
```

### 3 — Significado de los coeficientes

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "basico"
  tags: ["conceptos", "coeficientes"]

respuesta: verdadero
tipo: vf

enunciado: "Los coeficientes de una ecuación balanceada indican la proporción exacta en MOLES en que reaccionan las sustancias."

explicacion: |
  Correcto. Los coeficientes son la relación molar entre reactivos y productos.
```

### 4 — Relación de conversión molar

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "intermedio"
  tags: ["conceptos", "conversion_molar"]

respuesta: "coeficientes"
tipo: completar
respuestas_validas:
  - "coeficientes"

enunciado: "Para pasar de moles de A a moles de B se multiplica por la razón entre los ___ de B y A."

explicacion: |
  El factor de conversión sale de los coeficientes estequiométricos de la ecuación balanceada.
```

### 5 — Moles de hidrógeno desde gramos

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "intermedio"
  tags: ["estequiometria", "moles"]

variables:
  gramos_h2: uno_de([2, 4, 10, 20])

respuesta: gramos_h2 / 2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si hay {gramos_h2} gramos de H2 (masa molar 2 g/mol), ¿cuántos moles hay?"

pasos:
  - "n = masa / masa_molar"

explicacion: |
  n = {gramos_h2} / 2.
```

### 6 — Masa de agua producida (cadena completa)

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "avanzado"
  tags: ["estequiometria", "masa_molar"]

variables:
  gramos_h2: uno_de([2, 4, 10, 20])

respuesta: (gramos_h2 / 2) * 18
tipo: completar
tolerancia_abs: 0.1

enunciado: "Para 2H2 + O2 -> 2H2O (masa molar H2O = 18 g/mol), si hay {gramos_h2} g de H2, ¿cuántos gramos de H2O se producen?"

pasos:
  - "moles H2 = {gramos_h2} / 2"
  - "moles H2O = moles H2 × (2/2)"
  - "gramos H2O = moles H2O × 18"

explicacion: |
  ({gramos_h2} / 2) × 18 gramos de H2O.
```

### 7 — Conversión directa gramo a gramo

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible convertir gramos de una sustancia a gramos de otra directamente, sin pasar por moles en el medio?"

explicacion: |
  Falso. Los coeficientes de la ecuación balanceada son una proporción de moles, no de masa — hay que pasar por moles siempre.
```

### 8 — El puente estequiométrico

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "moles"
tipo: completar
respuestas_validas:
  - "moles"
  - "mol"

enunciado: "La unidad común entre dos sustancias distintas de una ecuación balanceada son los ___, porque los coeficientes están en esa unidad."

explicacion: |
  Los coeficientes indican proporción de partículas (moles), no de masa.
```

### 9 — Reactivo sobrante y proporciones

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si después de una reacción sobra reactivo, es porque los reactivos no estaban en la proporción exacta de la ecuación balanceada."

explicacion: |
  Correcto. Si estuvieran en proporción exacta, ambos se consumirían por completo — el que sobra fue el reactivo en exceso.
```

### 10 — Comparación de masas iguales de sustancias distintas

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "intermedio"
  tags: ["moles", "masa_molar"]

respuesta: "Cantidades distintas de sustancia"
tipo: mc
opciones_explicitas: ["Cantidades distintas de sustancia", "La misma cantidad de sustancia", "La misma cantidad de moles", "No tiene sentido la pregunta"]

enunciado: "1 gramo de H2 y 1 gramo de H2O representan..."

explicacion: |
  La masa no mide directamente la cantidad de sustancia. Como las masas molares son distintas, 1 g de cada uno tiene un número de moles distinto.
```

### 11 — Flujo de conversión estequiométrica

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "basico"
  tags: ["proceso", "conversion"]

respuesta: verdadero
tipo: vf

enunciado: "La cadena típica de conversión estequiométrica es: gramos de A → moles de A → moles de B → gramos de B."

explicacion: |
  Correcto. Los coeficientes sólo aplican a moles, así que ese "puente" es obligatorio en ambos extremos.
```

### 12 — Cálculo de moles por estequiometría (general)

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "intermedio"
  tags: ["calculo", "moles"]

variables:
  datos: [[1, 2, 4], [2, 1, 6], [3, 2, 6]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2] * (datos[idx][1] / datos[idx][0])
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una reacción tiene coeficiente {datos[idx][0]} para el reactivo A y {datos[idx][1]} para el producto B. Con {datos[idx][2]} moles de A, ¿cuántos moles de B se producen?"

pasos:
  - "n_B = n_A × (coef_B / coef_A)"

explicacion: |
  n_B = {datos[idx][2]} × ({datos[idx][1]} / {datos[idx][0]}).
```

### 13 — Moles de amoníaco producidos

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "intermedio"
  tags: ["estequiometria", "amoniaco"]

variables:
  moles_n2: uno_de([1, 2, 3])

respuesta: moles_n2 * 2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Para N2 + 3H2 -> 2NH3, si reaccionan {moles_n2} moles de N2, ¿cuántos moles de NH3 se producen?"

pasos:
  - "Relación N2:NH3 = 1:2"

explicacion: |
  {moles_n2} × 2 moles de NH3.
```

### 14 — Moles de hidrógeno necesarios

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "intermedio"
  tags: ["estequiometria", "hidrogeno"]

variables:
  moles_n2: uno_de([1, 2, 3])

respuesta: moles_n2 * 3
tipo: completar
tolerancia_abs: 0.01

enunciado: "Para N2 + 3H2 -> 2NH3, si reaccionan {moles_n2} moles de N2, ¿cuántos moles de H2 hacen falta?"

pasos:
  - "Relación N2:H2 = 1:3"

explicacion: |
  {moles_n2} × 3 moles de H2.
```

### 15 — Relación estequiométrica del amoníaco

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "basico"
  tags: ["estequiometria", "relacion"]

respuesta: verdadero
tipo: vf

enunciado: "En N2 + 3H2 -> 2NH3, por cada mol de N2 que reacciona se forman 2 moles de NH3."

explicacion: |
  Verdadero. Sale directo de los coeficientes 1 (N2) y 2 (NH3).
```

### 16 — Moles de N2 a partir de masa

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "intermedio"
  tags: ["moles", "masa_molar"]

variables:
  gramos_n2: uno_de([28, 56, 84])

respuesta: gramos_n2 / 28
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si hay {gramos_n2} gramos de N2 (masa molar 28 g/mol), ¿cuántos moles hay?"

explicacion: |
  {gramos_n2} / 28 moles.
```

### 17 — Relación mol-mol es la base de todo

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier conversión estequiométrica (mol-mol, mol-masa, masa-masa) usa la relación mol-mol de los coeficientes como paso central."

explicacion: |
  Correcto. Sin importar en qué unidad empiece o termine, el paso de conversión entre sustancias siempre es mol-mol vía coeficientes.
```

### 18 — Por qué la ecuación es como una receta

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "basico"
  tags: ["conceptos", "analogia"]

respuesta: verdadero
tipo: vf

enunciado: "Los coeficientes de una ecuación balanceada funcionan como una receta: fijan la proporción exacta en la que hay que combinar los ingredientes (reactivos)."

explicacion: |
  Correcto — la misma idea que ya se vio en ../reactivo-limitante-rendimiento/ con la analogía del sándwich.
```

### 19 — Masa molar en el paso final

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "intermedio"
  tags: ["conceptos", "masa_molar"]

respuesta: verdadero
tipo: vf

enunciado: "El último paso de la cadena moles de B → gramos de B se hace multiplicando los moles de B por la masa molar de B (no de A)."

explicacion: |
  Correcto. Cada sustancia usa su PROPIA masa molar para pasar entre gramos y moles.
```

### 20 — Cálculo de moles necesarios de reactivo

```
metadata:
  materia: "quimica"
  tema: "estequiometria_nivel_2"
  nivel: "avanzado"
  tags: ["calculo", "amoniaco"]

variables:
  moles_nh3_deseados: uno_de([2, 4, 6])

respuesta: moles_nh3_deseados / 2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Para N2 + 3H2 -> 2NH3, si se quieren obtener {moles_nh3_deseados} moles de NH3, ¿cuántos moles de N2 hacen falta?"

pasos:
  - "moles N2 = moles NH3 × (1/2)"

explicacion: |
  {moles_nh3_deseados} / 2 moles de N2 (relación inversa: N2:NH3 = 1:2).
```
