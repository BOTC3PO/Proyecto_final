### 1 — La Ley Sáenz Peña
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["historia", "voto_masculino"]

respuesta: "1912"
tipo: completar
respuestas_validas: ["1912"]

enunciado: "La Ley Sáenz Peña, que estableció el voto universal, secreto y obligatorio para los varones, fue sancionada en el año ___."

explicacion: |
  La Ley 8.831 de 1912 permitió que la ciudadanía masculina pudiera votar de manera efectiva, terminando con el fraude electoral de la época.
```

### 2 — El sufragio femenino en Argentina
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["derechos_mujeres", "historia"]

variables:
  escenario: uno_de([["1947", "Ley 13.001"], ["1951", "Ley 13.001"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["1947", "1951", "1972", "1991"]

enunciado: "La ley que garantizó el derecho de las mujeres argentinas a votar y ser elegidas fue sancionada en el año {escenario[0]} mediante la {escenario[1]}."

explicacion: |
  Aunque el debate venía de décadas atrás, fue en 1947 cuando se promulgó la ley que permitió el voto femenino en Argentina.
```

### 3 — Evolución del derecho al voto
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["cronologia", "hitos"]

respuesta: ["Ley Sáenz Peña", "Sufragio Femenino", "Voto Joven"]
tipo: ordenar
opciones_explicitas: ["Ley Sáenz Peña", "Sufragio Femenino", "Voto Joven"]

enunciado: "Ordená cronológicamente los hitos de ampliación del sufragio en Argentina, desde el más antiguo al más reciente:"

explicacion: |
  1. Ley Sáenz Peña (1912) - Voto masculino.
  2. Sufragio Femenino (1947) - Voto de las mujeres.
  3. Voto Joven (2012) - Voto opcional de jóvenes de 16 a 17 años.
```

### 4 — El voto de los jóvenes
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["voto_joven", "derechos"]

respuesta: "opcional"
tipo: mc
opciones_explicitas: ["obligatorio", "opcional", "prohibido", "por sorteo"]

enunciado: "Según la ley vigente desde 2012, el voto para los ciudadanos que tienen entre 16 y 17 años es de carácter ___."

explicacion: |
  La Ley de Ciudadanía Argentina permite que los jóvenes de 16 y 17 años ejerzan su derecho de manera opcional, mientras que a partir de los 18 es obligatorio.
```

### 5 — Características del voto de 1912
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["ley_saenz_pena", "caracteristicas"]

respuesta: "secreto"
tipo: mc
opciones_explicitas: ["secreto", "público", "electivo", "limitado"]

enunciado: "Un pilar fundamental de la Ley Sáenz Peña para evitar la coacción y el fraude fue que el voto fuera ___."

explicacion: |
  El carácter secreto del voto fue la herramienta principal para garantizar la libertad de elección de los ciudadanos y evitar presiones de los patrones o caudillos locales.
```