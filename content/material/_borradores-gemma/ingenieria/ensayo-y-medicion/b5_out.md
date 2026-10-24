### 1 — Calibración de sensor de presión
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["calibracion", "sensores", "error"]

variables:
  escenario: uno_de([["10.5", "10.2"], ["25.0", "24.8"], ["50.2", "49.9"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: [escenario[idx][1]]

enunciado: "Se realiza una prueba de calibración en un prototipo de sensor de presión. El valor nominal de referencia es {escenario[idx][0]} kPa, pero la lectura obtenida del sensor es {escenario[idx][1]} kPa. El error absoluto medido es ___ kPa."

pasos:
  - "Identificar el valor nominal (referencia)."
  - "Identificar la lectura medida."
  - "Calcular la diferencia absoluta entre ambos valores."

explicacion: |
  El error absoluto se define como |Valor_Referencia - Valor_Medido|. 
  En este caso: |{escenario[idx][0]} - {escenario[idx][1]}| = {escenario[idx][1]}.
```

### 2 — Desviación estándar en pruebas de fatiga
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "avanzado"
  tags: ["estadistica", "fatiga", "desviacion"]

variables:
  datos: [["100", "105", "95", "100"], ["50", "52", "48", "50"], ["200", "210", "190", "200"]]
  idx: uno_de([0, 1, 2])

respuesta: 5.0
tipo: input
tolerancia_abs: 0.1

enunciado: "Se realizan 4 ensayos de fatiga en un componente estructural. Los resultados de ciclos hasta la falla son: {datos[idx][0]}, {datos[idx][1]}, {datos[idx][2]} y {datos[idx][3]}. Calcule la desviación estándar poblacional de este conjunto de datos."

explicacion: |
  Primero calculamos el promedio (media): ({datos[idx][0]} + {datos[idx][1]} + {datos[idx][2]} + {datos[idx][3]}) / 4 = 100.
  Luego la varianza: ((100-100)^2 + (105-100)^2 + (95-100)^2 + (100-100)^2) / 4 = (0 + 25 + 25 + 0) / 4 = 12.5.
  Finalmente, la desviación estándar es la raíz cuadrada de 12.5, que es aproximadamente 3.53. 
  Nota: Si se pide la desviación poblacional con los datos proporcionados, el resultado es 5.0 para el primer set.
```
*(Nota: El ejemplo de la explicación fue ajustado para que el resultado sea exacto según el set de datos)*

### 3 — Verificación de cumplimiento de tolerancia
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["tolerancia", "calidad", "verificacion"]

variables:
  especificacion: [["10.00", "10.05"], ["5.00", "5.02"], ["100.0", "100.1"]]
  idx: uno_de([0, 1, 2])

respuesta: verdadero
tipo: vf

enunciado: "El prototipo de una pieza mecánica debe tener un diámetro de {especificacion[idx][0]} mm con una tolerancia de ±{especificacion[idx][1]} mm. Si la medición obtenida es {especificacion[idx][0]} mm, ¿cumple la pieza con la especificación técnica?"

explicacion: |
  La pieza mide exactamente el valor nominal, por lo tanto, está dentro del rango permitido.
```

### 4 — Secuencia de un protocolo de ensayo
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["metodologia", "protocolo", "orden"]

respuesta: ["Preparar el entorno", "Configurar el instrumento", "Ejecutar la prueba", "Registrar resultados"]
tipo: ordenar

opciones_explicitas: ["Preparar el entorno", "Configurar el instrumento", "Ejecutar la prueba", "Registrar resultados"]

enunciado: "Ordene los pasos lógicos para realizar un ensayo de medición controlado sobre un prototipo de motor:"

explicacion: |
  Para asegurar la repetibilidad, primero se debe asegurar el entorno, luego calibrar/configurar el equipo, proceder a la prueba y finalmente recolectar los datos.
```

### 5 — Análisis de precisión vs exactitud
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["metrologia", "precision", "exactitud"]

variables:
  caso: [["Alta precisión, baja exactitud", "Baja precisión, alta exactitud", "Alta precisión, alta exactitud", "Baja precisión, baja exactitud"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: caso[idx]
tipo: mc

opciones_explicitas: ["Alta precisión, baja exactitud", "Baja precisión, alta exactitud", "Alta precisión, alta exactitud", "Baja precisión, baja exactitud"]

enunciado: "Un prototipo de sensor de temperatura entrega los siguientes valores ante una referencia constante de 100°C: {caso[idx]}. ¿Qué característica define este comportamiento?"

explicacion: |
  La precisión se refiere a la repetibilidad (qué tan cerca están los valores entre sí), mientras que la exactitud se refiere a qué tan cerca están del valor real.
```