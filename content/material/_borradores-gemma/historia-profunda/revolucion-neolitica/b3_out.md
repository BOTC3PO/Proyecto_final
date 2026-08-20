### 1 — Origen de la agricultura
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "origen", "neolitico"]

tipo: mc
opciones_explicitas: ["En un único punto geográfico", "De forma independiente en diversas regiones", "Fue un proceso importado de Europa", "Ocurrió solo en el Creciente Fértil"]

enunciado: "Sobre el surgimiento de la agricultura durante la Revolución Neolítica, es correcto afirmar que esta ocurrió ___."

explicacion: |
  La agricultura no fue un evento único y global, sino que surgió de manera independiente en múltiples focos como el Creciente Fértil, China, Mesoamérica y los Andes.
```

### 2 — Centros de domesticación
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["regiones", "centros_de_origen"]

variables:
  idx: uno_de([0, 1, 2, 3])
  escenario: [
    ["Creciente Fértil", "trigo y cebada"],
    ["China", "arroz y mijo"],
    ["Mesoamérica", "maíz y calabaza"],
    ["Andes", "papa y quinoa"]
  ]

tipo: completar
respuestas_validas: ["trigo y cebada", "arroz y mijo", "maíz y calabaza", "papa y quinoa"]

enunciado: "En la región de {escenario[idx][0]}, los primeros cultivos domesticados fueron principalmente {escenario[idx][1]}."

explicacion: |
  Cada región desarrolló sus propios cultivos base de forma autónoma: {escenario[idx][0]} se centró en {escenario[idx][1]}.
```

### 3 — Secuencia de domesticación
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

tipo: ordenar
opciones_explicitas: ["Recolección de granos silvestres", "Domesticación de plantas", "Sedentarismo", "Aumento de la densidad poblacional"]

enunciado: "Ordena cronológicamente las etapas que generalmente preceden a la consolidación de las sociedades agrícolas:"

explicacion: |
  El proceso comienza con la recolección, seguido de la selección de semillas (domesticación), lo que permite asentarse (sedentarismo) y finalmente permite que la población crezca.
```

### 4 — El factor geográfico
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["geografia", "determinismo"]

tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "La existencia de múltiples centros de origen de la agricultura sugiere que el clima y la disponibilidad de especies silvestres fueron factores clave en diferentes partes del mundo."

explicacion: |
  Es verdadero. La diversidad de cultivos en distintas regiones demuestra que la transición neolítica fue una respuesta adaptativa a entornos locales específicos.
```

### 5 — Identificación de regiones
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["regiones", "identificacion"]

variables:
  idx: uno_de([0, 1])
  datos: [
    ["Mesoamérica", "Maíz"],
    ["Andes", "Papa"]
  ]

tipo: input
tolerancia_abs: 0

enunciado: "Si estamos en la región de {datos[idx][0]}, el cultivo fundamental para el desarrollo de la agricultura fue la {datos[idx][1]}."

pasos:
  - "Identificar la región según el escenario."
  - "Relacionar la región con su cultivo principal."

explicacion: |
  En {datos[idx][0]}, la domesticación de la {datos[idx][1]} fue el motor del cambio neolítico.
```