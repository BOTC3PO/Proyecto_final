### 1 — La brújula y la orientación
```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["navegacion", "tecnologia"]

variables:
  punto_cardinal: uno_de(["Norte", "Sur", "Este", "Oeste"])

respuesta: punto_cardinal
tipo: mc
opciones_explicitas: ["Norte", "Sur", "Este", "Oeste"]

enunciado: "La brújula, perfeccionada por los navegantes, permitía a los exploradores mantener un rumbo constante hacia el {punto_cardinal}, evitando perderse en mar abierto."

explicacion: |
  La brújula permitía identificar el polo magnético de la Tierra, facilitando la navegación en condiciones de baja visibilidad o en alta mar.
```

### 2 — Instrumentos de medición estelar
```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["astrolabio", "astronomia"]

variables:
  instrumento: uno_de(["Astrolabio", "Sextante", "Cronómetro"])

respuesta: instrumento
tipo: completar
respuestas_validas: ["Astrolabio", "Sextante", "Cronómetro"]

enunciado: "Para determinar la latitud mediante la observación de los astros, los navegantes de la Era de los Descubrimientos utilizaban principalmente el ___."

explicacion: |
  El astrolabio permitía medir la altura de los cuerpos celestes sobre el horizonte, esencial para calcular la posición latitudinal.
```

### 3 — La Carabela y su diseño
```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["carabela", "barcos"]

variables:
  caracteristica: uno_de(["velas cuadradas", "velas latinas", "remos de madera"])

respuesta: caracteristica
tipo: mc
opciones_explicitas: ["velas cuadradas", "velas latinas", "remos de madera"]

enunciado: "La carabela fue un barco clave en la expansión europea debido a su capacidad de navegar contra el viento, gracias al uso de ___."

explicacion: |
  Las velas latinas (triangulares) permitían la maniobra de 'bolina', es decir, navegar en ángulos más agudos respecto al viento, algo vital para las exploraciones atlánticas.
```

### 4 — Secuencia de avances tecnológicos
```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "avanzado"
  tags: ["tecnologia", "secuencia"]

respuesta: ["Brújula", "Astrolabio", "Carabela"]
tipo: ordenar
opciones_explicitas: ["Brújula", "Astrolabio", "Carabela"]

enunciado: "Ordena cronológicamente el desarrollo de las tecnologías que permitieron la expansión oceánica, desde la orientación básica hasta la navegación de altura:"

explicacion: |
  La brújula permitió la orientación, el astrolabio la posición astronómica y la carabela la capacidad de maniobra en alta mar.
```

### 5 — El impacto de la imprenta
```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["imprenta", "conocimiento"]

variables:
  efecto: uno_de(["difusión", "recolección", "eliminación"])

respuesta: efecto
tipo: mc
opciones_explicitas: ["difusión", "recolección", "eliminación"]

enunciado: "La invención de la imprenta de tipos móviles facilitó la ___ de mapas y conocimientos geográficos, acelerando la era de los descubrimientos."

explicacion: |
  La imprenta permitió que los mapas y las crónicas de viajes se replicaran de forma rápida y barata, democratizando el conocimiento geográfico.
```