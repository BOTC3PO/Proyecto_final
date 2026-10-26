### 1 — Confusión entre calor y temperatura
```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["conceptos_basicos", "calor_vs_temperatura"]

respuesta: "calor"
tipo: "completar"
respuestas_validas: ["calor"]

enunciado: "La energía transferida entre dos cuerpos debido a una diferencia de temperatura se denomina ___."

explicacion: |
  Es un error común confundir temperatura (medida de la energía cinética promedio de las partículas) con calor (energía en tránsito).
```

### 2 — El efecto de la masa en la transferencia térmica
```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["relaciones_proporcionales"]

variables:
  escenario: uno_de([
    ["un bloque de hierro de 1 kg", 1],
    ["un bloque de hierro de 5 kg", 5]
  ])

respuesta: "mayor"
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual"]

enunciado: "Si comparamos dos bloques del mismo material, el que tiene una masa {escenario[0]} requerirá una cantidad de energía ___ para alcanzar la misma variación de temperatura $\Delta T$."

explicacion: |
  Como $Q = m \cdot c \cdot \Delta T$, la cantidad de calor es directamente proporcional a la masa. A mayor masa, mayor calor necesario.
```

### 3 — Interpretación del signo de $\Delta T$
```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["signo_delta_t"]

respuesta: "falso"
tipo: "vf"

enunciado: "Si un cuerpo absorbe calor de su entorno, la variación de temperatura $\Delta T$ (temperatura final menos temperatura inicial) debe ser un valor negativo."

explicacion: |
  Si se absorbe calor, la temperatura aumenta, por lo tanto $\Delta T = T_f - T_i > 0$. Un $\Delta T$ negativo indica pérdida de calor.
```

### 4 — El calor específico y la inercia térmica
```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["calor_especifico"]

variables:
  materiales: [
    ["Agua", 4186, "mayor"],
    ["Hierro", 450, "menor"]
  ]
  idx: uno_de([0, 1])

respuesta: materiales[idx][2]
tipo: "mc"
opciones_explicitas: ["mayor", "menor"]

enunciado: "Considerando el material {materiales[idx][0]}, su capacidad para resistir cambios de temperatura (calor específico) es ___ que la del otro material mencionado."

explicacion: |
  El calor específico es una propiedad intensiva. El agua tiene un calor específico muy alto, lo que significa que requiere mucha energía para cambiar su temperatura.
```

### 5 — Pasos para el cálculo de calor sensible
```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["metodologia_calculo"]

opciones_explicitas: [
  "Determinar la masa del cuerpo",
  "Calcular la diferencia de temperaturas $\Delta T$",
  "Multiplicar los valores por el calor específico $c$"
]
respuesta: ["Determinar la masa del cuerpo", "Calcular la diferencia de temperaturas $\Delta T$", "Multiplicar los valores por el calor específico $c$"]
tipo: "ordenar"

enunciado: "Ordena los pasos lógicos para calcular la cantidad de calor $Q$ necesaria para calentar un objeto:"

explicacion: |
  Para resolver $Q = m \cdot c \cdot \Delta T$ de forma correcta, primero se deben identificar los datos (masa y $\Delta T$) y finalmente realizar la multiplicación con la constante $c$.
```