### 1 — Riesgo vs Incertidumbre: La clave
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["conceptos", "probabilidad"]

respuesta: "riesgo"
tipo: "completar"
respuestas_validas: ["riesgo", "incertidumbre"]

enunciado: "Cuando un decisor conoce la distribución de probabilidad de los posibles resultados de un evento, se encuentra ante un escenario de ___, mientras que si desconoce dichas probabilidades, se enfrenta a la ___."

explicacion: |
  La diferencia fundamental radica en la información disponible: el riesgo implica que conocemos las probabilidades de los distintos desenlaces, mientras que la incertidumbre implica un desconocimiento total de las probabilidades.
```

### 2 — Escenario de Apuesta
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["aplicacion", "decision"]

variables:
  escenario: uno_de([
    ["Lanzar un dado y ganar $10 si sale 6", "riesgo"],
    ["Invertir en una startup desconocida sin datos históricos", "incertidumbre"]
  ])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["riesgo", "incertidumbre"]

enunciado: "Analiza el siguiente caso: {escenario[0]}. ¿Qué tipo de situación estamos enfrentando?"

explicacion: |
  En el primer caso, la probabilidad es conocida (1/6), por lo tanto es riesgo. En el segundo caso, la falta de datos históricos impide asignar probabilidades, lo que define la incertidumbre.
```

### 3 — ¿Es siempre riesgo lo que no podemos controlar?
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["verdadero_falso"]

respuesta: falso
tipo: "vf"

enunciado: "Si un evento es impredecible y no es posible asignar una probabilidad matemática a sus resultados, entonces estamos ante una situación de riesgo."

explicacion: |
  Falso. Si no se pueden asignar probabilidades, la definición técnica es incertidumbre. El riesgo requiere, por definición, una estructura probabilística conocida.
```

### 4 — El proceso de reducción de incertidumbre
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "avanzado"
  tags: ["metodologia", "informacion"]

respuesta: ["recolectar datos", "modelar probabilidades", "evaluar riesgo"]
tipo: "ordenar"
opciones_explicitas: ["recolectar datos", "modelar probabilidades", "evaluar riesgo"]

enunciado: "Para transformar una situación de incertidumbre en una de riesgo, se debe seguir este proceso lógico de gestión de información:"

explicacion: |
  Primero se debe obtener información (recolectar datos), luego usar esa información para asignar pesos probabilísticos (modelar) y finalmente, con esas probabilidades, evaluar el riesgo esperado.
```

### 5 — El error del experto
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["error_comun", "sesgo"]

respuesta: 0.8
tipo: "input"
tolerancia_abs: 0.01

enunciado: "Un analista dice: 'Tengo un 80% de certeza de que el mercado subirá'. Si el analista está tratando de convertir la incertidumbre en riesgo mediante su juicio subjetivo, ¿cuál es el valor de la probabilidad asignada (en formato decimal)?"

explicacion: |
  Al asignar un valor numérico (80% = 0.8) a un evento incierto basado en su juicio, el analista está intentando transformar la incertidumbre en riesgo subjetivo.
```