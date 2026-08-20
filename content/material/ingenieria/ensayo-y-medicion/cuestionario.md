# Ingenieria — Ensayo y medicion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Ensayo

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["definicion", "prototipo"]

respuesta: "ensayo"
tipo: completar
respuestas_validas:
  - "ensayo"
  - "ensayo de desempeño"

enunciado: "El proceso de someter un prototipo a condiciones controladas para evaluar su comportamiento se denomina ___."

explicacion: |
  El ensayo es la acción de probar un objeto o sistema bajo condiciones específicas para observar su respuesta.
```

### 2 — Variables de Control

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["medicion", "variables"]

opciones_explicitas: ["Variables dependientes", "Variables independientes", "Variables de ruido", "Variables de error"]
respuesta: "Variables independientes"
tipo: mc

enunciado: "En un ensayo controlado, las condiciones que el experimentador manipula deliberadamente para observar un efecto se conocen como ___."

explicacion: |
  Las variables independientes son aquellas que se modifican para medir cómo afectan a la variable dependiente (el resultado).
```

### 3 — Veracidad de la Medición

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["precision", "veracidad"]

respuesta: verdadero
tipo: vf

enunciado: "La precisión se refiere a qué tan cerca está un valor medido del valor real o verdadero de la magnitud."

explicacion: |
  Falso. La cercanía al valor real es la 'exactitud'. La 'precisión' se refiere a la repetibilidad o concordancia entre mediciones sucesivas.
```

### 4 — Fases del Ensayo

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

opciones_explicitas: ["Preparación del entorno", "Ejecución de la prueba", "Análisis de resultados", "Documentación de hallazgos"]
respuesta_orden: ["Preparación del entorno", "Ejecución de la prueba", "Análisis de resultados", "Documentación de hallazgos"]
tipo: ordenar

enunciado: "Ordene lógicamente las etapas de un protocolo de ensayo de prototipo:"

explicacion: |
  Un proceso de ingeniería requiere primero preparar las condiciones, luego ejecutar, analizar los datos obtenidos y finalmente documentar el proceso.
```

### 5 — Incertidumbre en la Medición

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["error", "medicion"]

variables:
  escenario: uno_de([[10.5, 0.1], [25.2, 0.5], [100.0, 2.0]])

respuesta: "10.5"
tipo: completar
respuestas_validas:
  - "10.5"
  - "25.2"
  - "100.0"

enunciado: "Si se realiza una medición de un componente y el valor obtenido es {escenario[0]}, pero existe una incertidumbre asociada de {escenario[1]}, el valor reportado es ___."

pasos:
  - "Identificar el valor nominal medido."
  - "Asociar la incertidumbre al valor obtenido."

explicacion: |
  En metrología, el valor medido es el punto de partida para reportar la magnitud con su respectiva tolerancia o incertidumbre.
```

### 6 — Error de medición y precisión

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
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se realizan 5 mediciones de la longitud de un prototipo de eje bajo condiciones controladas. Si el valor nominal es {valor_nominal} mm, ¿cuál es el valor promedio de las mediciones obtenidas?"

pasos:
  - "Sumar todos los valores de la serie de mediciones."
  - "Dividir la suma total por la cantidad de mediciones (5)."

explicacion: |
  El promedio se calcula sumando las mediciones (10.02 + 10.05 + 10.03 + 10.04 + 10.06 = 50.20) y dividiendo por el número de muestras (50.20 / 5 = 10.04).
```

### 7 — Clasificación de error sistemático

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

### 8 — Secuencia de un protocolo de ensayo

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["protocolo", "procedimiento"]

variables:
  pasos_correctos: ["Calibrar instrumentos", "Configurar parámetros de prueba", "Ejecutar ensayo", "Registrar datos y analizar"]

respuesta_orden: ["Calibrar instrumentos", "Configurar parámetros de prueba", "Ejecutar ensayo", "Registrar datos y analizar"]
tipo: ordenar

opciones_explicitas: ["Registrar datos y analizar", "Calibrar instrumentos", "Ejecutar ensayo", "Configurar parámetros de prueba"]

enunciado: "Para garantizar la repetibilidad en la medición del desempeño de un prototipo, ordene los pasos lógicos de un protocolo de ensayo estándar."

explicacion: |
  Un protocolo científico requiere primero asegurar la precisión de los instrumentos (calibración), definir las condiciones (configuración), realizar la acción (ensayo) y finalmente procesar la información (registro y análisis).
```

### 9 — Análisis de tolerancia de fabricación

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

### 10 — Interpretación de repetibilidad

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

### 11 — Sesgo vs Precisión

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["metrologia", "error_de_medicion"]

variables:
  error_sistema: uno_de(["positivo", "negativo"])

enunciado: "Si un sensor de presión siempre marca 5 kPa por encima del valor real debido a una mala calibración, el instrumento presenta un error de tipo {error_sistema} y tiene una baja precisión."

respuesta: error_sistema
tipo: mc
opciones_explicitas: ["positivo", "negativo"]

explicacion: |
  El error sistemático (o sesgo) es una desviación constante. Si el error siempre suma un valor constante al valor real, es un error positivo. La precisión se refiere a la repetibilidad de las medidas, no a su cercanía al valor real.
```

### 12 — Incertidumbre en mediciones

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "avanzado"
  tags: ["incertidumbre", "incertidumbre_tipo_a"]

variables:
  datos: [[10.1, 10.2, 10.1, 10.3, 10.2], [5.0, 5.1, 4.9, 5.0, 5.0]]
  idx: uno_de([0, 1])

enunciado: "Se realizan mediciones repetidas de un componente. El conjunto de datos obtenidos es: {datos[idx]}."

pasos:
  - "Calcular el promedio de las mediciones."
  - "Calcular la desviación estándar de la muestra."

respuesta: "redondear(sqrt(sumar(map(lambda x: (x - promedio(datos[idx]))^2, datos[idx])) / (largo(datos[idx]) - 1), 2))"
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La incertidumbre de tipo A se estima mediante el análisis estadístico de una serie de mediciones, siendo la desviación estándar de la media una de las formas de representarla.
```

### 13 — Verdad o Falso: Condiciones Controladas

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["metodologia", "variables_controladas"]

enunciado: "En un ensayo de fatiga de materiales, si no se controlan las variables ambientales (como la temperatura), los resultados obtenidos pueden tener una alta variabilidad y no ser comparables con otros ensayos."

respuesta: verdadero
tipo: vf

explicacion: |
  Para que un ensayo sea válido y reproducible, las condiciones ambientales deben mantenerse constantes o ser registradas, ya que factores como la temperatura afectan las propiedades mecánicas de los materiales.
```

### 14 — Secuencia de Calibración

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["procedimiento", "calibracion"]

variables:
  pasos_correctos: ["Limpiar el instrumento", "Comparar con patrón trazable", "Ajustar desviaciones", "Registrar certificado"]

enunciado: "Ordene los pasos lógicos para realizar el proceso de calibración de un instrumento de medición en un laboratorio."

opciones_explicitas: ["Limpiar el instrumento", "Comparar con patrón trazable", "Ajustar desviaciones", "Registrar certificado"]
respuesta_orden: ["Limpiar el instrumento", "Comparar con patrón trazable", "Ajustar desviaciones", "Registrar certificado"]
tipo: ordenar

explicacion: |
  El proceso debe seguir un orden lógico: primero asegurar la limpieza, luego la comparación contra un estándar, proceder al ajuste si es necesario y finalmente documentar el resultado.
```

### 15 — Error de Paralaje

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["error_humano", "lectura"]

variables:
  error_tipo: uno_de(["paralaje", "redondeo", "calibracion"])

enunciado: "Al leer un manómetro analógico, si el observador no se posiciona perpendicularmente a la escala, comete un error de ___."

respuesta: error_tipo
tipo: mc
opciones_explicitas: ["paralaje", "redondeo", "calibracion"]

explicacion: |
  El error de paralaje ocurre cuando la línea de visión no es perpendicular a la escala graduada, provocando una lectura incorrecta de la posición de la aguja o el menisco.
```

### 16 — Caracterización de la medición

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["medicion", "metrologia"]

respuesta: "precisión"
tipo: "completar"
respuestas_validas:
  - "precisión"
  - "exactitud"

enunciado: "En metrología, mientras que la exactitud se refiere a qué tan cerca está el valor medido del valor real, la ___ se refiere a la repetibilidad de las mediciones bajo las mismas condiciones."

explicacion: |
  La exactitud mide la ausencia de error sistemático (cercanía al valor real), mientras que la precisión mide la dispersión de los resultados (repetibilidad).
```

### 17 — Calibración vs Ajuste

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["calibracion", "ajuste"]

variables:
  tipo_accion: uno_de(["calibracion", "ajuste"])

respuesta: "calibracion"
tipo: "mc"
opciones_explicitas: ["calibracion", "ajuste", "estandarización", "mantenimiento"]

enunciado: "El proceso de comparar un instrumento de medición contra un patrón de referencia para determinar la desviación es la {tipo_accion}."

explicacion: |
  La calibración establece la relación entre los valores indicados por el instrumento y los valores de un patrón. El ajuste es la acción de corregir el instrumento para que coincida con el patrón.
```

### 18 — Verdad o Falso: Incertidumbre

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["incertidumbre", "medicion"]

respuesta: verdadero
tipo: "vf"

enunciado: "La incertidumbre de medida es un parámetro que cuantifica la dispersión de los valores que podrían ser atribuidos al objeto de medición."

explicacion: |
  Verdadero. A diferencia del error (que es una cantidad única), la incertidumbre describe el rango de duda razonable sobre el resultado de una medición.
```

### 19 — Secuencia de un ensayo controlado

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["protocolo", "ensayo"]

tipo: ordenar
opciones_explicitas: ["definir_variables", "preparar_prototipo", "ejecutar_ensayo", "analizar_datos"]
respuesta_orden: ["definir_variables", "preparar_prototipo", "ejecutar_ensayo", "analizar_datos"]

enunciado: "Ordene los pasos lógicos para llevar a cabo un ensayo de desempeño controlado en un prototipo:"

explicacion: |
  Un ensayo sistemático requiere primero la planificación (definición), luego la preparación, la ejecución y finalmente el análisis de los datos recolectados.
```

### 20 — Sensibilidad vs Resolución

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "avanzado"
  tags: ["sensibilidad", "resolucion"]

respuesta: "sensibilidad"
tipo: "mc"
opciones_explicitas: ["sensibilidad", "resolucion", "rango", "linealidad"]

enunciado: "La propiedad que describe la relación entre el cambio en la indicación del instrumento y el cambio en la magnitud medida es la ___."

explicacion: |
  La sensibilidad es la pendiente de la curva de calibración (cambio de salida / cambio de entrada). La resolución es el cambio más pequeño que el instrumento puede detectar y mostrar.
```

### 21 — Calibración de sensor de presión

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["calibracion", "sensores", "error"]

variables:
  datos: [["10.5", "10.2"], ["25.0", "24.8"], ["50.2", "49.9"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

enunciado: "Se realiza una prueba de calibración en un prototipo de sensor de presión. El valor nominal de referencia es {datos[idx][0]} kPa, pero la lectura obtenida del sensor es {datos[idx][1]} kPa. El error absoluto medido es ___ kPa."

pasos:
  - "Identificar el valor nominal (referencia)."
  - "Identificar la lectura medida."
  - "Calcular la diferencia absoluta entre ambos valores."

explicacion: |
  El error absoluto se define como |Valor_Referencia - Valor_Medido|. 
  En este caso: |{datos[idx][0]} - {datos[idx][1]}| = {datos[idx][1]}.
```

### 22 — Desviación estándar en pruebas de fatiga

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
tipo: completar
tolerancia_abs: 0.1

enunciado: "Se realizan 4 ensayos de fatiga en un componente estructural. Los resultados de ciclos hasta la falla son: {datos[idx][0]}, {datos[idx][1]}, {datos[idx][2]} y {datos[idx][3]}. Calcule la desviación estándar poblacional de este conjunto de datos."

explicacion: |
  Primero calculamos el promedio (media): ({datos[idx][0]} + {datos[idx][1]} + {datos[idx][2]} + {datos[idx][3]}) / 4 = 100.
  Luego la varianza: ((100-100)^2 + (105-100)^2 + (95-100)^2 + (100-100)^2) / 4 = (0 + 25 + 25 + 0) / 4 = 12.5.
  Finalmente, la desviación estándar es la raíz cuadrada de 12.5, que es aproximadamente 3.53. 
  Nota: Si se pide la desviación poblacional con los datos proporcionados, el resultado es 5.0 para el primer set.
```

### 23 — Verificación de cumplimiento de tolerancia

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

### 24 — Secuencia de un protocolo de ensayo

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["metodologia", "protocolo", "orden"]

respuesta_orden: ["Preparar el entorno", "Configurar el instrumento", "Ejecutar la prueba", "Registrar resultados"]
tipo: ordenar

opciones_explicitas: ["Preparar el entorno", "Configurar el instrumento", "Ejecutar la prueba", "Registrar resultados"]

enunciado: "Ordene los pasos lógicos para realizar un ensayo de medición controlado sobre un prototipo de motor:"

explicacion: |
  Para asegurar la repetibilidad, primero se debe asegurar el entorno, luego calibrar/configurar el equipo, proceder a la prueba y finalmente recolectar los datos.
```

### 25 — Análisis de precisión vs exactitud

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["metrologia", "precision", "exactitud"]

variables:
  caso: ["Alta precisión, baja exactitud", "Baja precisión, alta exactitud", "Alta precisión, alta exactitud", "Baja precisión, baja exactitud"]
  idx: uno_de([0, 1, 2, 3])

respuesta: caso[idx]
tipo: mc

opciones_explicitas: ["Alta precisión, baja exactitud", "Baja precisión, alta exactitud", "Alta precisión, alta exactitud", "Baja precisión, baja exactitud"]

enunciado: "Un prototipo de sensor de temperatura entrega los siguientes valores ante una referencia constante de 100°C: {caso[idx]}. ¿Qué característica define este comportamiento?"

explicacion: |
  La precisión se refiere a la repetibilidad (qué tan cerca están los valores entre sí), mientras que la exactitud se refiere a qué tan cerca están del valor real.
```
