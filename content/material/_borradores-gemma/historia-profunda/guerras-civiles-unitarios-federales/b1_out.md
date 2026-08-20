### 1 — El modelo de gobierno
```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["politica", "argentina"]

respuesta: "Unitarios"
tipo: mc
opciones_explicitas: ["Unitarios", "Federales", "Anarquistas", "Monárquicos"]

enunciado: "El grupo político que defendía un gobierno centralizado con sede en Buenos Aires y la centralización del poder era el de los ___."

explicacion: |
  Los Unitarios buscaban un Estado centralizado donde las provincias perdieran su autonomía en favor de un poder central fuerte, generalmente controlado por la élite porteña.
```

### 2 — Autonomía provincial
```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["federalismo", "provincias"]

respuesta: "Federales"
tipo: mc
opciones_explicitas: ["Unitarios", "Federales", "Centralistas", "Conservadores"]

enunciado: "Aquellos que luchaban por la autonomía de las provincias y la distribución de la renta aduanera entre todas las jurisdicciones eran los ___."

explicacion: |
  El federalismo proponía que cada provincia mantuviera su soberanía y autonomía para autogobernarse, oponiéndose al control absoluto de Buenos Aires.
```

### 3 — La disputa por la Aduana
```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["economia", "aduana"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Buenos Aires", "centralizar la recaudación de la aduana para el gobierno central"],
    ["Las provincias", "repartir los ingresos de la aduana de forma equitativa"]
  ]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas: ["centralizar la recaudación de la aduana para el gobierno central", "repartir los ingresos de la aduana de forma equitativa"]

enunciado: "En el conflicto por la renta aduanera, el principal punto de discordia era que las provincias exigían ___."

explicacion: |
  La disputa económica era clave: Buenos Aires quería controlar la aduana (recaudación de impuestos de importación/exportación), mientras las provincias querían una distribución justa de esos fondos.
```

### 4 — El orden de los factores
```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["orden", "conceptos"]

respuesta: ["Centralismo", "Autonomía provincial", "Guerras civiles"]
tipo: ordenar
opciones_explicitas: ["Centralismo", "Autonomía provincial", "Guerras civiles"]

enunciado: "Ordene los conceptos desde la causa política hasta la consecuencia histórica resultante del conflicto:"

pasos:
  - "Causa: El deseo de control central (Unitarios)"
  - "Contrapeso: El deseo de soberanía local (Federales)"
  - "Resultado: El conflicto armado prolongado"

explicacion: |
  La tensión entre el centralismo unitario y la autonomía federal derivó en un periodo de constantes guerras civiles en el territorio argentino.
```

### 5 — El peso de la economía
```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "avanzado"
  tags: ["economia", "causas"]

variables:
  valor_base: 1820
  inflacion_estimada: 1.5

respuesta: redondear(valor_base * inflacion_estimada, 0)
tipo: input
tolerancia_abs: 1

enunciado: "Si un conflicto de la era de las guerras civiles incrementara los costos de guerra en un factor de {inflacion_estimada} sobre una base de ${valor_base} pesos, ¿cuál sería el nuevo costo total?"

pasos:
  - "Multiplicar el valor base por el factor de incremento."

explicacion: |
  El costo de mantener ejércitos permanentes durante las guerras civiles era altísimo para las arcas de las provincias y de la ciudad de Buenos Aires.
```