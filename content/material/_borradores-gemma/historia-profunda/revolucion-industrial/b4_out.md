### 1 — El motor del cambio
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["tecnologia", "economia"]

tipo: mc
opciones_explicitas: ["Máquina de vapor", "Motor de combustión", "Telégrafo", "Locomotora de vapor"]

enunciado: "La invención y perfeccionamiento de la ___ fue el motor tecnológico fundamental que impulsó la Primera Revolución Industrial."

explicacion: |
  La máquina de vapor, perfeccionada por James Watt, permitió mecanizar la producción y revolucionar el transporte, siendo el pilar del cambio industrial.
```

### 2 — El nuevo sistema económico
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["capitalismo", "economia"]

tipo: completar
respuestas_validas: ["capitalismo industrial"]

enunciado: "La Revolución Industrial transformó la economía mundial, sentando las bases del ___ moderno."

explicacion: |
  El paso de una economía agraria y artesanal a una basada en la propiedad privada de los medios de producción y el trabajo asalariado definió el capitalismo industrial.
```

### 3 — Impacto en la producción
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["produccion", "manufactura"]

tipo: input
tolerancia_abs: 0

enunciado: "Si una fábrica artesanal producía 10 unidades por día y, tras la industrialización, su capacidad se multiplica por 150, ¿cuántas unidades produce ahora?"

pasos:
  - "Identificar la producción inicial: 10"
  - "Multiplicar por el factor de escala: 10 * 150"

respuesta: 1500

explicacion: |
  La mecanización permitió un aumento exponencial en la capacidad de producción, pasando de escalas manuales a escalas masivas.
```

### 4 — Transformación social
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "avanzado"
  tags: ["sociedad", "urbanizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["urbanización", "crecimiento"], ["proletariado", "clase obrera"]]

tipo: mc
opciones_explicitas: ["urbanización y crecimiento", "proletariado y clase obrera", "feudalismo y campesinado", "monarquía y aristocracia"]]

enunciado: "La Revolución Industrial provocó un proceso de {datos[escenario_idx][0]} y {datos[escenario_idx][1]} sin precedentes en las ciudades europeas."

respuesta: datos[escenario_idx]
explicacion: |
  El desplazamiento de la población del campo a la ciudad (éxodo rural) transformó la demografía y la estructura social.
```

### 5 — Secuencia de la Revolución
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

tipo: ordenar
opciones_explicitas: ["Revolución Agraria", "Mecanización Textil", "Expansión del Ferrocarril", "Segunda Revolución Industrial"]

enunciado: "Ordena cronológicamente los hitos que permitieron la consolidación de la era industrial:"

respuesta: ["Revolución Agraria", "Mecanización Textil", "Expansión del Ferrocarril", "Segunda Revolución Industrial"]

explicacion: |
  Primero la agricultura permitió alimentar a más gente; luego la industria textil se mecanizó; el ferrocarril conectó mercados y finalmente la segunda fase introdujo la electricidad y el acero.
```