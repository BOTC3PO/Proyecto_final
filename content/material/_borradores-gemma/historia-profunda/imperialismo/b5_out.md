### 1 — Motivación económica
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "basico"
  tags: ["economia", "recursos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["La búsqueda de nuevos mercados para productos industriales excedentes", "económica"], ["El control de yacimientos de caucho y oro en África", "económica"]]

enunciado: "Un país europeo busca asegurar el acceso a materias primas baratas para su industria. La motivación principal es: ___"

respuestas_validas: ["económica"]

respuesta: datos[escenario_idx][1]
tipo: completar

explicacion: |
  El imperialismo fue impulsado por la necesidad de las potencias industriales de obtener recursos naturales y mercados para sus productos.
```

### 2 — Motivación política
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["geopolitica", "poder"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["La competencia por establecer bases navales estratégicas en el Pacífico", "política"], ["La expansión territorial para aumentar el prestigio nacional", "política"]]

enunciado: "El control de territorios para fortalecer el poderío militar y la posición geopolítica responde a una motivación: ___"

respuestas_validas: ["política"]

respuesta: datos[escenario_idx][1]
tipo: completar

explicacion: |
  La competencia entre potencias por el prestigio y el control de rutas estratégicas fue un motor político clave.
```

### 3 — Motivación ideológica
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["ideologia", "darwinismo_social"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["La creencia en la superioridad de la civilización occidental", "ideológica"], ["La misión de 'civilizar' a pueblos considerados atrasados", "ideológica"]]

enunciado: "El uso de teorías como el darwinismo social para justificar el dominio sobre otros pueblos es una motivación de tipo: ___"

opciones_explicitas: ["económica", "política", "ideológica"]

respuesta: datos[escenario_idx][1]
tipo: mc

explicacion: |
  Las justificaciones morales, religiosas o pseudocientíficas que validaban el dominio extranjero pertenecen al ámbito ideológico.
```

### 4 — Clasificación de motivaciones
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "avanzado"
  tags: ["clasificacion", "analisis"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [
    ["Control de rutas comerciales", "económica"],
    ["Prestigio nacional", "política"],
    ["Misión civilizadora", "ideológica"]
  ]

enunciado: "Identifica la clasificación correcta para el escenario: {datos[escenario_idx][0]}"

opciones_explicitas: ["económica", "política", "ideológica"]

respuesta: datos[escenario_idx][1]
tipo: mc

explicacion: |
  Cada escenario representa una de las tres dimensiones fundamentales del imperialismo decimonónico.
```

### 5 — Secuencia de factores
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "avanzado"
  tags: ["secuencia", "causalidad"]

opciones_explicitas: ["Revolución Industrial", "Búsqueda de materias primas", "Control de nuevos mercados", "Dominio territorial"]

respuesta: ["Revolución Industrial", "Búsqueda de materias primas", "Control de nuevos mercados", "Dominio territorial"]
tipo: ordenar

enunciado: "Ordena cronológicamente la cadena causal que impulsó el imperialismo: La industrialización genera necesidad de recursos, esto lleva a la búsqueda de suministros, lo que requiere nuevos mercados y culmina en el control territorial."

explicacion: |
  La Revolución Industrial fue el motor inicial que desencadenó la necesidad de expansión económica y, finalmente, el control político de territorios.
```