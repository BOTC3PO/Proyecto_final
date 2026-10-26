### 1 — Origen del Virreinato
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["reformas_borbonicas", "geopolitica"]

respuesta: "1776"
tipo: completar
respuestas_validas: ["1776"]

enunciado: "La creación del Virreinato del Río de la Plata ocurrió en el año ___."

explicacion: |
  Mediante las Reformas Borbónicas, la Corona española decidió crear este nuevo virreinato en 1776 para mejorar la administración y defensa del territorio.
```

### 2 — Motivaciones de la creación
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["comercio", "defensa"]

opciones_explicitas: ["Controlar el comercio y mejorar la defensa", "Fomentar la independencia de las colonias", "Establecer una nueva religión", "Unificar la moneda con el Perú"]

respuesta: "Controlar el comercio y mejorar la defensa"
tipo: mc

enunciado: "¿Cuál fue una de las razones principales para la creación del Virreinato del Río de la Plata?"

explicacion: |
  La expansión portuguesa y el contrabando en el Atlántico obligaron a España a fortalecer la defensa y centralizar el control comercial en Buenos Aires.
```

### 3 — Capital del Virreinato
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["geografia_colonial"]

respuesta: "Buenos Aires"
tipo: mc
opciones_explicitas: ["Lima", "Potosí", "Buenos Aires", "Montevideo"]

enunciado: "Con la creación del nuevo virreinato, la ciudad de ___ fue designada como la capital administrativa."

explicacion: |
  Buenos Aires desplazó la importancia política que antes tenía el eje andino, convirtiéndose en el centro administrativo y comercial del nuevo territorio.
```

### 4 — Reorganización Territorial
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["geopolitica", "administracion"]

variables:
  escenario: uno_de([["Perú", "Río de la Plata"], ["Río de la Plata", "Perú"]])

respuesta: tabla_respuestas[escenario][1]

tipo: completar
respuestas_validas: ["Perú", "Río de la Plata"]

enunciado: "Antes de 1776, el territorio que hoy comprende gran parte del Cono Sur pertenecía al Virreinato del ___."

pasos:
  - "Identificar la dependencia administrativa previa a la reforma borbónica."

explicacion: |
  Antes de la división, la mayor parte de la administración colonial estaba centralizada en el Virreinato del Perú, con Lima como sede principal.

tabla_respuestas: [["Perú", "Perú"], ["Río de la Plata", "Río de la Plata"]]
```

### 5 — Impacto Económico
```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["comercio", "contrabando"]

opciones_explicitas: ["Aumento del contrabando", "Centralización del comercio en Buenos Aires", "Fin de la ruta de la plata", "Aislamiento de la región"]

respuesta: "Centralización del comercio en Buenos Aires"
tipo: mc

enunciado: "La creación del virreinato permitió la ___."

explicacion: |
  Al tener una administración propia, el comercio legal se canalizó a través de Buenos Aires, restando importancia a las rutas que pasaban por el Alto Perú.
```