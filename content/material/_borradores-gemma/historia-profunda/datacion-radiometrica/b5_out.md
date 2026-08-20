### 1 — Decaimiento de Carbono-14
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["isotopos", "carbono-14"]

variables:
  escenario: [[100, "25"], [200, "50"], [400, "100"]]
  idx: uno_de([0, 1, 2])
  masa_inicial: escenario[idx][0]
  respuesta_esperada: escenario[idx][1]

tipo: mc
opciones_explicitas: ["25%", "50%", "75%", "100%"]

enunciado: "Una muestra orgánica contiene {masa_inicial} g de Carbono-14. Si han transcurrido exactamente 2 vidas medias, ¿qué porcentaje de la masa inicial de este isótopo permanece en la muestra?"

explicacion: |
  Tras una vida media, queda el 50%. Tras dos vidas medias, queda el 50% del 50%, es decir, el 25%.
```

### 2 — Isótopos de Uranio en Rocas
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["uranio", "geocronologia"]

variables:
  datos: [[80, "10"], [160, "20"], [320, "40"]]
  idx: uno_de([0, 1, 2])
  m_i: datos[idx][0]
  m_f: datos[idx][1]

tipo: completar
respuestas_validas: ["10", "20", "40"]

enunciado: "Se analiza una roca con una masa inicial de {m_i} g de un isótopo radiactivo. Si tras el paso del tiempo la masa remanente es de {m_f} g, ¿cuántas vidas medias han transcurrido?"

pasos:
  - "Identificar la fracción remanente: m_f / m_i"
  - "Determinar cuántas veces se debe dividir la masa inicial por 2 para llegar a la masa final"

explicacion: |
  La relación es m_f = m_i * (1/2)^n. En todos los casos presentados, la masa se redujo a una octava parte, lo que equivale a 3 vidas medias.
```

### 3 — Masa remanente de Potasio-40
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["potasio-40", "calculo"]

variables:
  caso: [[1000, "125"], [500, "62.5"], [800, "100"]]
  idx: uno_de([0, 1, 2])
  m_ini: caso[idx][0]
  m_res: caso[idx][1]

tipo: input
tolerancia_abs: 0.1

enunciado: "Un fósil contiene {m_ini} mg de Potasio-40. Si han transcurrido 3 vidas medias, ¿cuántos mg de este isótopo quedan en el fósil?"

explicacion: |
  La fórmula es masa_final = masa_inicial / (2^n). Para n=3, dividimos por 8.
```

### 4 — Relación de abundancia isotópica
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["conceptos"]

tipo: mc
opciones_explicitas: ["se reduce a la mitad", "se duplica", "se mantiene constante", "desaparece por completo"]

enunciado: "En un proceso de datación radiométrica, ¿qué sucede con la cantidad de un isótopo radiactivo tras transcurrir exactamente una vida media?"

explicacion: |
  Por definición, la vida media es el tiempo necesario para que la mitad de los núcleos de un isótopo se desintegren.
```

### 5 — Secuencia de desintegración
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["orden", "conceptos"]

tipo: ordenar
opciones_explicitas: ["100%", "50%", "25%", "12.5%", "6.25%"]

enunciado: "Ordene de mayor a menor la cantidad de isótopo remanente tras 0, 1, 2, 3 y 4 vidas medias respectivamente."

explicacion: |
  Cada vida media reduce la cantidad a la mitad de la anterior: 100% -> 50% -> 25% -> 12.5% -> 6.25%.
```