### 1 — Sesgo vs Precisión
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

### 2 — Incertidumbre en mediciones
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

respuesta: redondear(sqrt(sumar(map(lambda x: (x - promedio(datos[idx]))^2, datos[idx])) / (largo(datos[idx]) - 1), 2))
tipo: input
tolerancia_abs: 0.01

explicacion: |
  La incertidumbre de tipo A se estima mediante el análisis estadístico de una serie de mediciones, siendo la desviación estándar de la media una de las formas de representarla.
```

### 3 — Verdad o Falso: Condiciones Controladas
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

### 4 — Secuencia de Calibración
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
respuesta: ["Limpiar el instrumento", "Comparar con patrón trazable", "Ajustar desviaciones", "Registrar certificado"]
tipo: ordenar

explicacion: |
  El proceso debe seguir un orden lógico: primero asegurar la limpieza, luego la comparación contra un estándar, proceder al ajuste si es necesario y finalmente documentar el resultado.
```

### 5 — Error de Paralaje
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