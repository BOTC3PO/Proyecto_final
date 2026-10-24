### 1 — Lentes convergentes
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "lentes", "definicion"]

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["divergente", "convergente", "plana"]

enunciado: "Una lente que es más gruesa en el centro que en los bordes se denomina lente ________."

explicacion: |
  Las lentes convergentes tienen su parte central más gruesa y tienden a unir los rayos de luz en un punto llamado foco.
```

### 2 — Comportamiento de la luz
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["luz", "rayos", "optica"]

variables:
  caso: uno_de([0, 1])

respuesta: caso == 0
tipo: vf

enunciado: "En una lente divergente, los rayos de luz paralelos que inciden sobre ella se separan tras atravesarla."

explicacion: |
  Es verdadero. Las lentes divergentes provocan que los rayos salgan de la lente con una trayectoria que se aleja del eje principal.
```

### 3 — Distancia focal
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["foco", "distancia_focal"]

respuesta: "foco"
tipo: completar
respuestas_validas: ["foco"]

enunciado: "El punto donde convergen los rayos de luz paralentes después de pasar por una lente convergente se denomina ________."

explicacion: |
  El foco es el punto de intersección de los rayos de luz que han sido refractados por la lente.
```

### 4 — Tipos de lentes según su forma
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["lentes", "forma"]

respuesta: ["Biconvexa", "Menisco convergente", "Bicóncava", "Menisco divergente"]
tipo: ordenar

opciones_explicitas: ["Biconvexa", "Menisco convergente", "Bicóncava", "Menisco divergente"]

enunciado: "Ordena las siguientes lentes de mayor grosor central a menor grosor central (de la que más converge a la que más diverge):"

explicacion: |
  La lente biconvexa es la que tiene mayor grosor en el centro, seguida por las meniscos convergentes, luego las bicóncavas y finalmente las meniscos divergentes.
```

### 5 — Signo de la distancia focal
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["foco", "signo", "convencion"]

respuesta: "negativo"
tipo: mc
opciones_explicitas: ["positivo", "negativo", "cero"]

enunciado: "Según la convención de signos en óptica, la distancia focal de una lente ________ es siempre un valor ________."

explicacion: |
  En el sistema de signos estándar, las lentes divergentes tienen una distancia focal negativa, mientras que las convergentes tienen una positiva.
```