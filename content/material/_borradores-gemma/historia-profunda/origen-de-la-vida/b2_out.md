### 1 — La sopa primordial
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["miller_urey", "sopa_primordial"]

respuesta: "Miller-Urey"
tipo: completar
respuestas_validas: ["Miller-Urey", "Miller-Urey"]

enunciado: "El experimento diseñado para probar la hipótesis de la 'sopa primordial' en charcos superficiales fue el de ___."

explicacion: |
  El experimento de Miller-Urey (1953) demostró que se podían formar moléculas orgánicas simples (aminoácidos) a partir de gases inorgánicos mediante descargas eléctricas.
```

### 2 — Fuentes hidrotermales
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["fuentes_hidrotermales", "quimiosintesis"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [["charcos superficiales", "exposición a radiación UV"], ["fuentes hidrotermales", "protección de la radiación UV"]]

respuesta: escenario[escenario_idx][1]
tipo: mc
opciones_explicitas: ["exposición a radiación UV", "protección de la radiación UV", "alta radiación solar", "ausencia de calor"]

enunciado: "A diferencia de la hipótesis de la sopa primordial, la teoría de las fuentes hidrotermales sugiere que la vida pudo originarse en el fondo oceánico debido a la {escenario[escenario_idx][0]}."

explicacion: |
  Las fuentes hidrotermales ofrecen un ambiente protegido de la radiación UV superficial y proporcionan gradientes térmicos y químicos esenciales para la síntesis de moléculas complejas.
```

### 3 — Comparación de entornos
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["hipotesis", "comparacion"]

respuesta: "quimiosintesis"
tipo: completar
respuestas_validas: ["quimiosintesis", "quimiosintesis"]

enunciado: "Mientras que la sopa primordial se basa en la energía solar y descargas, las fuentes hidrotermales proponen un metabolismo basado en la ___."

explicacion: |
  En las fuentes hidrotermales, la energía proviene de las reacciones químicas entre los fluidos alcalinos y el agua de mar, un proceso conocido como quimiosíntesis.
```

### 4 — Elementos de la sopa primordial
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["miller_urey", "moléculas"]

respuesta: ["Metano", "Amoníaco", "Hidrógeno", "Agua"]
tipo: ordenar
opciones_explicitas: ["Metano", "Amoníaco", "Hidrógeno", "Agua"]

enunciado: "Ordene los componentes gaseosos y líquidos que se utilizaron en el aparato de Miller-Urey para simular la atmósfera y el océano primitivo:"

explicacion: |
  El experimento utilizó una mezcla de metano (CH4), amoníaco (NH3), hidrógeno (H2) y vapor de agua (H2O) para simular las condiciones de la Tierra primitiva.
```

### 5 — El factor energía
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["energia", "hipotesis"]

variables:
  tipo_energia_idx: uno_de([0, 1])
  tipo_energia: [["descargas eléctricas"], ["gradientes térmicos"]]

respuesta: tipo_energia[tipo_energia_idx][0]
tipo: mc
opciones_explicitas: ["descargas eléctricas", "gradientes térmicos", "radiación gamma", "energía cinética"]

enunciado: "En el modelo de la sopa primordial, el motor energético para la síntesis de moléculas orgánicas es la {tipo_energia[tipo_energia_idx][0]}."

explicacion: |
  En el modelo de Miller-Urey, las descargas eléctricas (simulando rayos) proporcionan la energía necesaria para romper los enlaces de los gases y formar nuevas moléculas.
```