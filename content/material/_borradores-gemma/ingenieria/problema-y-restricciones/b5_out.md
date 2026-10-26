### 1 — Optimización de materiales
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["recursos", "optimizacion"]

variables:
  escenario: [[150, "150 kg"], [200, "200 kg"], [350, "350 kg"]]
  idx: uno_de([0, 1, 2])
  límite: escenario[idx][0]
  unidad: escenario[idx][1]

enunciado: "Se debe diseñar un soporte estructural cuyo peso total no puede exceder los {límite} {unidad}. Si el material seleccionado tiene una densidad de 5 kg/m³, ¿cuál es el volumen máximo permitido para cumplir con esta restricción?"

pasos:
  - "Identificar el límite de masa: {límite} {unidad}"
  - "Utilizar la fórmula de densidad: Volumen = Masa / Densidad"
  - "Calcular: {límite} / 5"

respuesta: redondear(límite / 5, 2)
tipo: input
tolerancia_abs: 0.01

explicacion: |
  Para cumplir con la restricción de masa, el volumen debe ser igual o menor al resultado del cálculo. El volumen máximo es de {redondear(límite / 5, 2)} m³.
```

### 2 — Cumplimiento de plazos
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["tiempo", "restricciones"]

variables:
  proyecto: [[120, "120 días"], [180, "180 días"], [240, "240 días"]]
  idx: uno_de([0, 1, 2])
  plazo_total: proyecto[idx][0]
  unidad_plazo: proyecto[idx][1]

enunciado: "Un proyecto de infraestructura tiene un plazo de entrega estricto de {plazo_total} {unidad_plazo}. Si la fase de cimentación dura 45 días y la fase de estructura dura 100 días, ¿se cumple con la restricción de tiempo si la fase de acabado requiere 100 días adicionales?"

respuesta: falso
tipo: vf

explicacion: |
  La suma de las fases es 45 + 100 + 100 = 245 días. Como 245 > {plazo_total}, la restricción de tiempo se viola.
```

### 3 — Presupuesto de componentes
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["costos", "presupuesto"]

variables:
  datos: [[500, "500 USD"], [800, "800 USD"], [1200, "1200 USD"]]
  idx: uno_de([0, 1, 2])
  presupuesto: datos[idx][0]
  moneda: datos[idx][1]

enunciado: "El presupuesto asignado para un prototipo es de {presupuesto} {moneda}. Se deben comprar 3 sensores de $150 cada uno y un controlador de $400. El costo total de los componentes es: ___"

respuesta: "850 USD"
tipo: completar
respuestas_validas: ["850 USD"]

explicacion: |
  El cálculo es (3 * 150) + 400 = 450 + 400 = 850. El costo total es 850 USD.
```

### 4 — Secuencia de montaje
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["procesos", "orden"]

enunciado: "Para asegurar la integridad estructural de un puente, se deben seguir estrictamente las siguientes fases de construcción. Ordene las etapas de forma lógica:"

opciones_explicitas: ["Cimentación", "Estructura principal", "Colocación de tableros", "Acabados y señalización"]
respuesta: ["Cimentación", "Estructura principal", "Colocación de tableros", "Acabados y señalización"]
tipo: ordenar

explicacion: |
  En ingeniería civil, la secuencia lógica siempre comienza por la base (cimentación), sigue con el esqueleto (estructura), la superficie de rodamiento (tableros) y finalmente los detalles (acabados).
```

### 5 — Tolerancia de carga
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "avanzado"
  tags: ["seguridad", "carga"]

variables:
  carga_max: [[5000, "5000 N"], [8000, "8000 N"], [10000, "10000 N"]]
  idx: uno_de([0, 1, 2])
  valor_max: carga_max[idx][0]
  unidad_max: carga_max[idx][1]

enunciado: "Una viga tiene una capacidad de carga máxima de {valor_max} {unidad_max}. Si se aplica una carga de 4500 N y un factor de seguridad de 1.5, ¿la estructura es segura (el esfuerzo aplicado * factor de seguridad <= carga máxima)?"

respuesta: uno_de(["verdadero", "falso"])
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

explicacion: |
  Calculamos el esfuerzo de diseño: 4500 * 1.5 = 6750 N. 
  Si la carga máxima es de {valor_max} N, comparamos: 
  {if(6750 <= valor_max, "6750 <= " + string(valor_max), "6750 > " + string(valor_max))}
```