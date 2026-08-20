### 1 — El motor de la inmigración
```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["inmigracion", "economia", "modelo_agroexportador"]

respuesta: "modelo agroexportador"
tipo: input
tolerancia_abs: 0

enunciado: "La expansión del _______ fue el principal factor que impulsó la llegada masiva de inmigrantes europeos a la Argentina durante las últimas décadas del siglo XIX."

explicacion: |
  El modelo agroexportador, basado en la exportación de materias primas (carnes y cereales) hacia Europa, demandó una gran cantidad de mano de obra que fue provista por la inmigración masiva.
```

### 2 — Orígenes de la inmigración
```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["nacionalidades", "europa"]

variables:
  escenario: uno_de([["italianos", "españoles"], ["españoles", "italianos"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["italianos", "españoles", "alemanes", "franceses"]

enunciado: "Si bien hubo diversas corrientes, los dos grupos de nacionalidades más representativos en la inmigración masiva a la Argentina fueron los _______ y los _______."

explicacion: |
  La gran mayoría de los inmigrantes que llegaron entre 1880 y 1914 provenían de Italia y España, aunque también hubo presencia de otras nacionalidades europeas.
```

### 3 — Causas de la migración
```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["causas", "europa"]

respuesta: "crisis económica y demográfica"
tipo: completar
respuestas_validas: ["crisis económica y demográfica", "guerras mundiales", "revolución industrial"]

enunciado: "Los inmigrantes europeos huían de Europa debido a la _______ que afectaba sus países de origen."

explicacion: |
  Las crisis económicas, las guerras de unificación y el crecimiento demográfico en Europa generaron un excedente de población que buscaba nuevas oportunidades en el continente americano.
```

### 4 — Factores de atracción
```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["politica_migratoria", "leyes"]

respuesta: "Ley Avellaneda"
tipo: mc
opciones_explicitas: ["Ley Avellaneda", "Ley de Residencia", "Constitución de 1853", "Ley de Educación"]

enunciado: "Para fomentar la llegada de trabajadores, el Estado argentino sancionó un marco legal conocido como la _______."

explicacion: |
  La Ley Avellaneda (1876) facilitó el ingreso de inmigrantes, garantizando sus derechos y promoviendo su asentamiento en el territorio nacional.
```

### 5 — Secuencia de factores
```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "avanzado"
  tags: ["causalidad", "procesos"]

respuesta: ["Demanda de mano de obra", "Expansión de la frontera agrícola", "Llegada masiva de inmigrantes"]
tipo: ordenar
opciones_explicitas: ["Demanda de mano de obra", "Expansión de la frontera agrícola", "Llegada masiva de inmigrantes"]

enunciado: "Ordene cronológicamente la lógica de causalidad que permitió el proceso migratorio:"

pasos:
  - "El modelo agroexportador requiere más trabajadores."
  - "Se expanden las tierras para la agricultura y ganadería."
  - "Se produce el flujo migratorio masivo hacia el país."

explicacion: |
  La lógica fue circular: la demanda de trabajo impulsó la expansión de la frontera, lo que a su vez atrajo a la población europea que buscaba empleo.
```