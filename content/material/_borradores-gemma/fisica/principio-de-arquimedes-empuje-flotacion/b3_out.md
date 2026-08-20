### 1 — El empuje y el peso
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "basico"
  tags: ["empuje", "arquimedes", "flotacion"]

variables:
  escenario: uno_de([
    [10, 90],
    [25, 75],
    [50, 50]
  ])

enunciado: "Un objeto sumergido en un fluido experimenta una fuerza hacia arriba llamada empuje. Si el peso del objeto es de {escenario[0]} N y el empuje es de {escenario[1]} N, ¿cuál es el peso aparente del objeto?"

pasos:
  - "Calcular la diferencia entre el peso real y el empuje."
  - "El peso aparente es la fuerza resultante vertical."

respuesta: escenario[0] - escenario[1]
tipo: input
tolerancia_abs: 0.01

explicacion: |
  El peso aparente es la diferencia entre el peso real del objeto y la fuerza de empuje que ejerce el fluido. Si el empuje es igual al peso, el objeto tiene peso aparente cero (flota en equilibrio).
```

### 2 — ¿Qué determina el empuje?
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "intermedio"
  tags: ["empuje", "densidad", "volumen"]

opciones_explicitas: ["El peso del objeto", "El volumen del objeto sumergido", "La densidad del objeto", "La forma del objeto"]

enunciado: "Un error común es pensar que un objeto más pesado siempre tiene más empuje. Sin embargo, para un objeto totalmente sumergido, el empuje depende exclusivamente de:"

respuesta: "El volumen del objeto sumergido"
tipo: mc

explicacion: |
  El principio de Arquímedes establece que el empuje es igual al peso del volumen de fluido desplazado. Por lo tanto, si dos objetos tienen el mismo volumen y están totalmente sumergidos, el empuje será el mismo, sin importar sus pesos o materiales.
```

### 3 — Flotación y densidad
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "basico"
  tags: ["flotacion", "densidad"]

variables:
  caso: uno_de([
    [1.2, "se hunde"],
    [0.8, "flota"],
    [1.0, "flota"]
  ])

enunciado: "Si un objeto tiene una densidad de {caso[0]} g/cm³ y se coloca en agua (cuya densidad es 1.0 g/cm³), el objeto ___."

respuestas_validas: ["se hunde", "flota"]

respuesta: caso[1]
tipo: completar

explicacion: |
  Si la densidad del objeto es mayor que la del fluido, el peso es mayor que el empuje máximo posible y el objeto se hunde. Si es menor, el objeto subirá hasta que el peso del volumen desplazado iguale su peso (flotación).
```

### 4 — El error del "objeto pesado"
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "intermedio"
  tags: ["conceptos", "error_comun"]

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que un objeto de hierro se hunde en el agua simplemente porque es más pesado que el agua?"

explicacion: |
  Falso. El hierro se hunde porque su densidad es mayor que la del agua, lo que significa que el empuje que puede ejercer el agua al desplazar su volumen es menor que el peso del objeto. No es el peso absoluto, sino la relación entre peso y volumen (densidad).
```

### 5 — Proceso de flotación
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "intermedio"
  tags: ["flotacion", "equilibrio"]

opciones_explicitas: ["El objeto se hunde", "El objeto se detiene en la superficie", "El objeto se hunde hasta que el empuje iguala su peso"]

enunciado: "Cuando un objeto se lanza al agua y comienza a descender pero tiene una densidad menor a la del fluido, ¿qué ocurre?"

respuesta: "El objeto se hunde hasta que el empuje iguala su peso"
tipo: mc

explicacion: |
  Al sumergirse, el objeto desplaza agua. A medida que baja, el volumen desplazado aumenta y, con él, el empuje. El objeto dejará de descender cuando el empuje sea igual a su peso, alcanzando un equilibrio de flotación.
```