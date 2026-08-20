### 1 — Naturaleza de la imagen en espejo plano
```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos"
  nivel: "basico"
  tags: ["espejos", "reflexion", "imagen"]

respuesta: "virtual"
tipo: mc
opciones_explicitas: ["real", "virtual", "imaginaria", "proyectable"]

enunciado: "En un espejo plano, la imagen que se forma detrás de la superficie reflectante se denomina imagen ___."

explicacion: |
  Una imagen es virtual cuando los rayos de luz parecen provenir de un punto detrás del espejo, pero no se cruzan físicamente en el espacio, por lo que no puede proyectarse en una pantalla.
```

### 2 — Relación de tamaño en espejos convexos
```
metadata:
  materia: "fisica"
  tema: "espejos_curvos_convexos"
  nivel: "intermedio"
  tags: ["convexo", "imagen", "tamaño"]

variables:
  escenario: uno_de([["espejo_convexo", "siempre menor", "siempre mayor", "igual"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["siempre menor", "siempre mayor", "igual"]

enunciado: "Un objeto se coloca frente a un espejo convexo. La imagen resultante será ___ que el objeto original."

explicacion: |
  Los espejos convexos (como los de los retrovisores de autos) siempre producen imágenes virtuales, derechas y de tamaño reducido para permitir un mayor campo de visión.
```

### 3 — El error de la imagen real en espejos cóncavos
```
metadata:
  materia: "fisica"
  tema: "espejos_curvos_concavos"
  nivel: "avanzado"
  tags: ["concavo", "imagen_real", "foco"]

respuesta: "frente"
tipo: completar
respuestas_validas: ["frente", "detras"]

enunciado: "Para que un espejo cóncavo produzca una imagen real que pueda ser proyectada en una pantalla, el objeto debe colocarse ___ al espejo."

explicacion: |
  Las imágenes reales solo se forman cuando los rayos de luz convergen físicamente. En un espejo cóncavo, esto ocurre solo si el objeto está más allá del foco.
```

### 4 — Propiedades de la imagen en espejo plano
```
metadata:
  materia: "fisica"
  tema: "espejos_planos"
  nivel: "basico"
  tags: ["simetria", "distancia"]

respuesta: verdadero
tipo: vf

enunciado: "En un espejo plano, la distancia del objeto al espejo es exactamente igual a la distancia de la imagen al espejo."

explicacion: |
  Una de las propiedades fundamentales de los espejos planos es que la imagen es simétrica respecto al plano del espejo.
```

### 5 — Secuencia de formación de imagen en espejo cóncavo
```
metadata:
  materia: "fisica"
  tema: "espejos_curvos_concavos"
  nivel: "avanzado"
  tags: ["orden", "enfoque", "distancia"]

respuesta: ["Objeto muy lejos (más allá del foco)", "Objeto en el centro de curvatura", "Objeto muy cerca (entre foco y vértice)"]
tipo: ordenar
opciones_explicitas: ["Objeto muy lejos (más allá del foco)", "Objeto en el centro de curvatura", "Objeto muy cerca (entre foco y vértice)"]

enunciado: "Ordena las siguientes situaciones de un espejo cóncavo según el tipo de imagen que se forma (de imagen REAL a imagen VIRTUAL):"

explicacion: |
  1. Más allá del foco: Imagen real e invertida.
  2. En el centro de curvatura: Imagen real, invertida y de igual tamaño.
  3. Entre el foco y el vértice: Imagen virtual, derecha y de mayor tamaño.
```