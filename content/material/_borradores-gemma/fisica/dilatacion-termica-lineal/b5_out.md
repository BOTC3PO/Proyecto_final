### 1 — Dilatación de una viga de acero
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["termodinamica", "expansion_lineal"]

variables:
  escenario: [[0.1, 12.5], [0.2, 25.0], [0.3, 37.5]]
  idx: uno_de([0,1,2])
  L0: escenario[idx][0]
  dT: escenario[idx][1]
  alpha: 0.000012
  deltaL: L0 * alpha * dT

respuesta: deltaL
tipo: input
tolerancia_abs: 0.0001

enunciado: "Una viga de acero tiene una longitud inicial de {L0} m. Si la temperatura aumenta en {dT} °C y el coeficiente de dilatación lineal es de {alpha} 1/°C, ¿cuánto aumenta su longitud en metros?"

pasos:
  - "Calcular el cambio de longitud usando la fórmula: ΔL = L₀ * α * ΔT"
  - "Sustituir los valores: ΔL = {L0} * {alpha} * {dT}"

explicacion: |
  La dilatación lineal se calcula con la fórmula ΔL = L₀ · α · ΔT. 
  Para este caso: {L0} * 0.000012 * {dT} = {deltaL} m.
```

### 2 — El material ideal para rieles
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["materiales", "conceptos"]

variables:
  material: [[0, "Aluminio"], [1, "Acero"], [2, "Vidrio"]]
  idx: uno_de([0,1,2])

respuesta: material[idx][1]
tipo: mc
opciones_explicitas: ["Aluminio", "Acero", "Vidrio"]

enunciado: "Se requiere un material para las vías de un ferrocarril que tenga una dilatación térmica lineal muy baja para evitar que las vías se deformen en verano. Basado en los materiales comunes, ¿cuál de estos es más estable térmicamente?"

explicacion: |
  El {material[idx][1]} tiene un coeficiente de dilatación menor que el {material[0]} (Aluminio), lo que lo hace más adecuado para estructuras que requieren estabilidad dimensional frente a cambios de temperatura.
```

### 3 — Relación entre temperatura y longitud
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si un objeto se calienta, su longitud lineal aumenta siempre que el coeficiente de dilatación lineal sea un valor positivo."

explicacion: |
  Efectivamente, la fórmula ΔL = L₀ · α · ΔT indica que si ΔT es positivo y α es positivo, ΔL será positivo, resultando en un aumento de la longitud.
```

### 4 — El fenómeno de la dilatación
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: ["aumento", "expansión", "crecimiento"]
respuestas_validas: ["aumento", "expansión", "crecimiento"]
tipo: completar

enunciado: "Cuando un material sólido se somete a un incremento de temperatura, su longitud experimenta un ___ lineal."

explicacion: |
  El aumento de la energía cinética de las partículas provoca que estas vibren con mayor amplitud, incrementando la distancia promedio entre ellas, lo que se traduce en una expansión o aumento de la longitud.
```

### 5 — Proceso de dilatación térmica
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["procesos"]

respuesta: ["Aumento de temperatura", "Aumento de vibración molecular", "Aumento de longitud"]
tipo: ordenar

opciones_explicitas: ["Aumento de temperatura", "Aumento de vibración molecular", "Aumento de longitud"]

enunciado: "Ordena los siguientes eventos según ocurren de forma causal durante el calentamiento de una barra metálica:"

explicacion: |
  Primero aumenta la temperatura, lo que incrementa la energía cinética (vibración) de los átomos, resultando finalmente en un incremento de la longitud macroscópica.
```