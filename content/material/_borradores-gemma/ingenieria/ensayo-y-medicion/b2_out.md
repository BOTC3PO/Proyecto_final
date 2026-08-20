### 1 — Error de medición y precisión
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["metrologia", "incertidumbre"]

variables:
  mediciones: [10.02, 10.05, 10.03, 10.04, 10.06]
  valor_nominal: 10.04

respuesta: promedio(mediciones)
tipo: input
tolerancia_abs: 0.01

enunciado: "Se realizan 5 mediciones de la longitud de un prototipo de eje bajo condiciones controladas. Si el valor nominal es {valor_nominal} mm, ¿cuál es el valor promedio de las mediciones obtenidas?"

pasos:
  - "Sumar todos los valores de la serie de mediciones."
  - "Dividir la suma total por la cantidad de mediciones (5)."

explicacion: |
  El promedio se calcula sumando las mediciones (10.02 + 10.05 + 10.03 + 10.04 + 10.06 = 50.20) y dividiendo por el número de muestras (50.20 / 5 = 10.04).
```

### 2 — Clasificación de error sistemático
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["errores", "calibracion"]

variables:
  es_desviacion_constante: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Durante un ensayo de tensión, se detecta que un sensor de carga tiene un error de calibración que siempre suma 0.5N a la lectura real, independientemente de la carga aplicada. ¿Este es un ejemplo de error sistemático?"

explicacion: |
  Los errores sistemáticos son aquellos que se repiten de manera constante o predecible en cada medición, como un error de offset en un sensor.
```

### 3 — Secuencia de un protocolo de ensayo
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["protocolo", "procedimiento"]

variables:
  pasos_correctos: ["Calibrar instrumentos", "Configurar parámetros de prueba", "Ejecutar ensayo", "Registrar datos y analizar"]

respuesta: ["Calibrar instrumentos", "Configurar parámetros de prueba", "Ejecutar ensayo", "Registrar datos y analizar"]
tipo: ordenar

opciones_explicitas: ["Registrar datos y analizar", "Calibrar instrumentos", "Ejecutar ensayo", "Configurar parámetros de prueba"]

enunciado: "Para garantizar la repetibilidad en la medición del desempeño de un prototipo, ordene los pasos lógicos de un protocolo de ensayo estándar."

explicacion: |
  Un protocolo científico requiere primero asegurar la precisión de los instrumentos (calibración), definir las condiciones (configuración), realizar la acción (ensayo) y finalmente procesar la información (registro y análisis).
```

### 4 — Análisis de tolerancia de fabricación
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "avanzado"
  tags: ["tolerancia", "control_calidad"]

variables:
  dim_min: 24.95
  dim_max: 25.05
  medida_actual: 25.08

respuesta: "fuera de rango"
tipo: completar

opciones_explicitas: ["dentro de rango", "fuera de rango"]

enunciado: "Un prototipo de componente mecánico tiene una tolerancia especificada entre {dim_min} mm y {dim_max} mm. Si la medición obtenida en el ensayo es de {medida_actual} mm, el componente se encuentra ___."

explicacion: |
  Como 25.08 es mayor que el límite superior de 25.05, la pieza no cumple con las especificaciones de diseño.
```

### 5 — Interpretación de repetibilidad
```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["precision", "repetibilidad"]

variables:
  error_max: 0.002
  error_min: 0.001

respuesta: "alta"
tipo: mc

opciones_explicitas: ["alta", "baja", "nula"]

enunciado: "Si al repetir un ensayo de medición de presión 10 veces sobre el mismo prototipo, la dispersión de los resultados es extremadamente pequeña (variación de {error_min} a {error_max} bar), podemos decir que la repetibilidad es ___."

explicacion: |
  Una baja dispersión entre mediciones sucesivas bajo las mismas condiciones indica una alta repetibilidad (precisión).
```