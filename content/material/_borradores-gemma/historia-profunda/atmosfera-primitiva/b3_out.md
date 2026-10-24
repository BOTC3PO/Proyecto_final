### 1 — Composición de la atmósfera primitiva
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["atmosfera", "oxigeno", "evolucion"]

tipo: mc
opciones_explicitas: ["Reductora (sin O2)", "Oxidante (rica en O2)", "Nitrogenada pura", "Ácida y gaseosa"]

enunciado: "La atmósfera de la Tierra en sus inicios era de naturaleza ___________, debido a la ausencia de oxígeno libre."

explicacion: |
  La atmósfera primitiva era un ambiente reductor porque no existía el oxígeno molecular (O2) para oxidar los gases presentes.
```

### 2 — El gran cambio oxidativo
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["fotosintesis", "oxigeno", "biologia"]

variables:
  escenario_idx: uno_de([0, 1])

enunciado: "En el escenario {escenario_datos[escenario_idx][0]}, el factor principal que transformó la atmósfera fue {escenario_datos[escenario_idx][1]}."

variables:
  escenario_datos: [["la atmósfera primitiva", "la aparición de la fotosíntesis"], ["la atmósfera actual", "la acumulación de gases volcánicos"]]

tipo: completar
respuestas_validas: ["la aparición de la fotosíntesis", "la acumulación de gases volcánicos"]

explicacion: |
  La fotosíntesis realizada por organismos antiguos (cianobacterias) liberó oxígeno como subproducto, cambiando la química global del planeta.
```

### 3 — Porcentajes de oxígeno
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["oxigeno", "porcentaje"]

tipo: input
tolerancia_abs: 0.1

enunciado: "Mientras que la atmósfera primitiva carecía de oxígeno, la atmósfera actual contiene aproximadamente un ___% de este gas."

pasos:
  - "Identificar el porcentaje de O2 en la atmósfera actual."
  - "Ingresar el valor numérico."

respuesta: 21

explicacion: |
  La composición actual de la atmósfera se mantiene estable cerca del 21% de oxígeno.
```

### 4 — Secuencia de evolución atmosférica
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "avanzado"
  tags: ["secuencia", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Atmósfera primitiva reductora", "Aparición de fotosíntesis", "Acumulación de O2", "Atmósfera oxidante actual"]

enunciado: "Ordena cronológicamente los procesos que definieron la evolución de la atmósfera terrestre:"

respuesta: ["Atmósfera primitiva reductora", "Aparición de fotosíntesis", "Acumulación de O2", "Atmósfera oxidante actual"]

explicacion: |
  Primero existió una atmósfera sin O2, luego la vida fotosintética comenzó a producirlo, el O2 se acumuló y finalmente estableció la atmósfera oxidante que conocemos.
```

### 5 — Comparación de estados químicos
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["quimica", "oxigeno"]

variables:
  es_actual: uno_de([true, falso])

enunciado: "Si la atmósfera es la actual, su estado es {estado_actual}. Si es la primitiva, su estado es {estado_primitivo}."

variables:
  estado_actual: es_actual ? "oxidante" : "reductora"
  estado_primitivo: es_actual ? "reductora" : "oxidante"

tipo: mc
opciones_explicitas: ["oxidante", "reductora"]

respuesta: es_actual ? "oxidante" : "reductora"

explicacion: |
  La atmósfera actual es oxidante debido a la presencia masiva de O2, mientras que la primitiva era reductora por la falta de este gas.
```