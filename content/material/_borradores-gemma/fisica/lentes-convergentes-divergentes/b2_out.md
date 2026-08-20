### 1 — Tipo de lente y su efecto
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "lentes"]

respuesta: "convergente"
tipo: "mc"
opciones_explicitas: ["convergente", "divergente"]

enunciado: "Una lente que es más gruesa en el centro que en los bordes se denomina lente _______ y su función principal es _______ los rayos de luz que pasan a través de ella."

explicacion: |
  Las lentes convergentes son más gruesas en el centro y hacen que los rayos de luz se unan en un punto llamado foco.
```

### 2 — Distancia focal y signo
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "foco"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es cierto que una lente divergente tiene una distancia focal negativa en los sistemas de signos estándar?"

explicacion: |
  Correcto. Por convención, las lentes convergentes tienen foco positivo y las divergentes tienen foco negativo.
```

### 3 — Cálculo de la distancia focal
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["calculo", "optica"]

variables:
  distancia_objeto: 20
  distancia_imagen: -20
  foco: 1 / (1/distancia_objeto + 1/distancia_imagen)

respuesta: 10.0
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Un objeto se coloca a {distancia_objeto} cm de una lente. Se forma una imagen virtual a {distancia_imagen} cm de la lente. ¿Cuál es el valor de la distancia focal de la lente en cm?"

pasos:
  - "Utilizar la ecuación de los lentes delgadas: 1/f = 1/s + 1/s'"
  - "Sustituir los valores: 1/f = 1/20 + 1/(-20)"
  - "Calcular el resultado final para f."

explicacion: |
  Aplicando la fórmula: 1/f = 1/20 - 1/20 = 0. Sin embargo, para este ejemplo numérico simplificado, si el objeto está a 20 y la imagen se forma a -20, la lente es idealmente infinita o el cálculo debe ser preciso. Reajustando para un ejemplo real: Si s=30 y s'=-30, f sería infinito. Hagamos un ejemplo estándar: s=15, s'=-30. 1/f = 1/15 - 1/30 = 1/30 -> f=30.
  
  *Nota: El enunciado usa valores que dan f=infinito, corregimos en la lógica interna del ejemplo para el usuario:*
  Si s=20 y s'=-20, f es infinito. 
  Usemos: s=10, s'=-30. 1/f = 1/10 - 1/30 = 2/30 = 1/15. f=15.
  
  *Re-generando enunciado con valores consistentes:*
  Objeto a 10cm, imagen a -30cm. 1/f = 1/10 - 1/30 = 2/30 -> f=15.
```
*(Nota: El usuario pidió el ejemplo resuelto, el contenido de 'enunciado' debe ser coherente con la 'respuesta'. Corregido en la mente para la entrega final)*

### 3 — Cálculo de la distancia focal (Corregido)
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["calculo", "optica"]

variables:
  s: 10
  s_prime: -30
  f_calc: 1 / (1/s + 1/s_prime)

respuesta: 15.0
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Un objeto se encuentra a {s} cm de una lente divergente y forma una imagen a {s_prime} cm de la lente. ¿Cuál es la distancia focal de la lente en cm?"

pasos:
  - "Identificar datos: s = 10, s' = -30"
  - "Aplicar la fórmula de Gauss: 1/f = 1/s + 1/s'"
  - "1/f = 1/10 + 1/(-30) = 3/30 - 1/30 = 2/30"
  - "f = 30 / 2 = 15"

explicacion: |
  Usando la ecuación de Gauss: 1/f = 1/10 - 1/30 = 2/30. Al invertir, f = 15 cm.
```

### 4 — Completar la ecuación
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["formula", "optica"]

respuesta: "1/f"
tipo: "completar"
respuestas_validas: ["1/f"]

enunciado: "La relación fundamental para el estudio de lentes delgadas es la ecuación de _______ que relaciona la distancia focal con las distancias del objeto y la imagen."

explicacion: |
  La ecuación de Gauss (o de los lentes delgadas) es la base del estudio de la óptica geométrica.
```

### 5 — Ordenar pasos de resolución
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "avanzado"
  tags: ["metodologia", "optica"]

opciones_explicitas: ["Identificar signos de s y s'", "Aplicar la ecuación de Gauss", "Despejar la variable solicitada", "Verificar la naturaleza de la imagen"]

respuesta: ["Identificar signos de s y s'", "Aplicar la ecuación de Gauss", "Despejar la variable solicitada", "Verificar la naturaleza de la imagen"]
tipo: "ordenar"

enunciado: "Ordena los pasos lógicos para resolver un problema de distancia de imagen en una lente:"

explicacion: |
  Primero se deben asignar los signos correctos (convención de signos), luego aplicar la fórmula matemática, despejar la incógnita y finalmente interpretar si la imagen es real o virtual según su signo.
```