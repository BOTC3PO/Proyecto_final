### 1 — La paradoja de la homogeneización
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["cultura", "homogeneizacion"]

variables:
  escenario: uno_de(["occidentalización", "estandarización"])

respuesta: escenario
tipo: mc
opciones_explicitas: ["occidentalización", "estandarización", "diversificación", "aislamiento"]

enunciado: "En el contexto de la globalización digital, la difusión masiva de contenidos de un único polo cultural dominante suele provocar un proceso de {escenario} cultural."

explicacion: |
  La globalización digital facilita que patrones culturales (música, cine, valores) de potencias tecnológicas se expandan globalmente, lo que puede llevar a la pérdida de particularidades locales en favor de un modelo único.
```

### 2 — Flujos económicos y desigualdad
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["economia", "desigualdad"]

variables:
  datos: [[100, "Aumenta"], [100, "Disminuye"], [100, "Se mantiene"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "Si la brecha digital se ensancha, la desigualdad económica entre países con alta y baja conectividad tiende a ___."

pasos:
  - "Analizar la relación entre acceso a tecnología y productividad económica."
  - "Considerar el impacto de la automatización y el flujo de capitales digitales."

explicacion: |
  La falta de infraestructura digital en regiones en desarrollo impide que participen equitativamente en la economía global, exacerbando la brecha de riqueza existente.
```

### 3 — Intercambio cultural digital
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["cultura", "intercambio"]

respuesta: "hibridación"
tipo: completar
respuestas_validas: ["hibridación", "aislamiento", "anulación"]

enunciado: "Cuando elementos de diferentes culturas se mezclan a través de las redes sociales para crear nuevas formas de expresión, ocurre un proceso de ___ cultural."

explicacion: |
  La globalización no solo homogeneiza; también permite la 'hibridación', donde lo local y lo global se fusionan para crear identidades nuevas.
```

### 4 — Dinámicas de la globalización
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta: ["Interconexión", "Estandarización", "Desigualdad"]
tipo: ordenar
opciones_explicitas: ["Interconexión", "Estandarización", "Desigualdad"]

enunciado: "Ordena los efectos de la globalización digital desde el proceso de comunicación hasta su impacto socioeconómico:"

explicacion: |
  Primero ocurre la interconexión técnica, lo que permite la estandarización de consumos y, finalmente, puede derivar en nuevas formas de desigualdad estructural.
```

### 5 — El papel de las plataformas
```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["tecnologia", "poder"]

variables:
  caso: uno_de(["monopolio", "competencia"])
  valor: uno_de(["creciente", "decreciente"])

respuesta: caso

tipo: mc
opciones_explicitas: ["monopolio", "competencia", "cooperación", "neutralidad"]

enunciado: "La concentración de datos en pocas corporaciones tecnológicas globales tiende a fomentar un {caso} de información."

explicacion: |
  La economía de plataformas a menudo crea estructuras de poder centralizadas donde unos pocos actores controlan el flujo de información global.
```