# Geografia — america anglosajona (cuestionario, 25 preguntas VBLang)

> Tema: `geografia/america-anglosajona`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["definicion", "colonizacion"]

variables:
  regiones: uno_de(["Canada y Estados Unidos", "Mexico y Centroamerica", "El Caribe Francés", "Sudamerica"])

respuesta: "Canada y Estados Unidos"
tipo: mc
opciones_explicitas: ["Canada y Estados Unidos", "Mexico y Centroamerica", "El Caribe Francés", "Sudamerica"]

enunciado: "¿Qué países conforman el núcleo principal de América Anglosajona?"

explicacion: |
  América Anglosajona se refiere fundamentalmente a los territorios del norte del continente americano colonizados por británicos, siendo Canadá y Estados Unidos sus componentes principales.
```

### 2 — pregunta 2

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["historia", "colonizacion"]

variables:
  siglo: random(16, 18)

respuesta: "17"
tipo: input

enunciado: "El poblamiento sistemático comenzó en el siglo {siglo} con la fundación de las Trece Colonias en la costa este."

explicacion: |
  La primera fase del poblamiento significativo ocurrió en el siglo XVII, estableciendo las bases culturales y políticas anglosajonas en la costa este.
```

### 3 — pregunta 3

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["motivacion", "religion"]

variables:
  motivo: uno_de(["libertad religiosa", "extracción de oro", "comercio de especias", "conquista militar"])

respuesta: "libertad religiosa"
tipo: mc
opciones_explicitas: ["libertad religiosa", "extracción de oro", "comercio de especias", "conquista militar"]

enunciado: "¿Cuál fue un motivo clave para la llegada de los primeros colonos protestantes al norte?"

explicacion: |
  Muchos de los primeros colonos buscaban libertad religiosa y oportunidades económicas, alejándose de las persecuciones en Europa.
```

### 4 — pregunta 4

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["economia", "comparacion"]

variables:
  modelo_latam: uno_de(["extraccion de recursos", "agricultura de subsistencia", "industria pesada"])
  modelo_anglo: uno_de(["comunidades permanentes", "encomiendas", "mita"])

respuesta: "comunidades permanentes"
tipo: mc
opciones_explicitas: ["comunidades permanentes", "extraccion de recursos", "encomiendas", "mita"]

enunciado: "A diferencia de la extracción rápida en el sur, el norte se caracterizó por la instalación de:"

explicacion: |
  El proceso en el norte fue más gradual y masivo, ligado a la instalación de comunidades permanentes, definiendo estructuras económicas distintas.
```

### 5 — pregunta 5

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["demografia", "inmigracion"]

variables:
  origen: uno_de(["Irlanda y Alemania", "China y Japón", "Brasil y Argentina", "Rusia y Polonia"])

respuesta: "Irlanda y Alemania"
tipo: mc
opciones_explicitas: ["Irlanda y Alemania", "China y Japón", "Brasil y Argentina", "Rusia y Polonia"]

enunciado: "Entre los siglos XVIII y XIX, la inmigración masiva a EE.UU. provino principalmente de:"

explicacion: |
  Millones de personas de Irlanda, Alemania e Italia llegaron durante este periodo, transformando la demografía del país.
```

### 6 — pregunta 6

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["expansion", "destino manifiesto"]

variables:
  concepto: "Destino Manifiesto"

respuesta: "Destino Manifiesto"
tipo: completar
respuestas_validas:
  - "Destino Manifiesto"
  - "destino manifiesto"

enunciado: "La expansión hacia el oeste de EE.UU. se justificó ideológicamente mediante el concepto de {concepto}."

explicacion: |
  El "Destino Manifiesto" fue la creencia de que los estadounidenses tenían el derecho divino y moral de expandirse por todo el continente.
```

### 7 — pregunta 7

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["canada", "cultura"]

variables:
  provincia: "Quebec"

respuesta: "Quebec"
tipo: completar
respuestas_validas:
  - "Quebec"
  - "québec"

enunciado: "En Canadá, la fuerte influencia francesa se concentra principalmente en la provincia de {provincia}."

explicacion: |
  Quebec mantiene una identidad cultural y lingüística francesa distintiva dentro de la federación canadiense.
```

### 8 — pregunta 8

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["dinamica", "proceso"]

variables:
  caracteristica: uno_de(["gradual", "rápida", "violenta", "instantánea"])

respuesta: "gradual"
tipo: mc
opciones_explicitas: ["gradual", "rápida", "violenta", "instantánea"]

enunciado: "El poblamiento de América Anglosajona se describe como un proceso:"

explicacion: |
  A diferencia del sur, el norte tuvo un proceso más gradual, masivo y ligado a la instalación de comunidades.
```

### 9 — pregunta 9

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["ubicacion", "colonias"]

variables:
  region: "costa este"

respuesta: "costa este"
tipo: completar
respuestas_validas:
  - "costa este"
  - "costa oriental"
  - "este"

enunciado: "Las Trece Colonias se fundaron inicialmente en la {region} de lo que hoy es Estados Unidos."

explicacion: |
  La colonización británica comenzó en la franja costera atlántica, extendiéndose luego hacia el interior.
```

### 10 — pregunta 10

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["economia", "modelo"]

variables:
  modelo: "comunidades permanentes"

respuesta: "comunidades permanentes"
tipo: completar
respuestas_validas:
  - "comunidades permanentes"
  - "poblamiento permanente"

enunciado: "El modelo de América Anglosajona se basó en la instalación de {modelo}, no solo en la extracción."

explicacion: |
  La diferencia clave radica en la intención de establecer sociedades estables y duraderas.
```

### 11 — pregunta 11

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["origen", "britanico"]

variables:
  origen: "britanicos"

respuesta: "britanicos"
tipo: completar
respuestas_validas:
  - "britanicos"
  - "británicos"
  - "ingleses"

enunciado: "Los territorios fueron colonizados principalmente por {origen} y otros grupos del norte de Europa."

explicacion: |
  La herencia británica es el pilar definitorio de la región anglosajona.
```

### 12 — pregunta 12

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["infraestructura", "canada"]

variables:
  medio: "ferrocarriles"

respuesta: "ferrocarriles"
tipo: completar
respuestas_validas:
  - "ferrocarriles"
  - "trenes"

enunciado: "La expansión hacia el oeste de Canadá fue impulsada por políticas gubernamentales y la construcción de {medio}."

explicacion: |
  El ferrocarril fue vital para conectar las provincias y poblar las llanuras occidentales.
```

### 13 — pregunta 13

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["inmigracion", "diversidad"]

variables:
  origen: uno_de(["Asia y América del Sur", "África y Oceanía", "Europa del Este", "Norte de África"])

respuesta: "Asia y América del Sur"
tipo: mc
opciones_explicitas: ["Asia y América del Sur", "África y Oceanía", "Europa del Este", "Norte de África"]

enunciado: "Posteriormente, la inmigración a EE.UU. incluyó grupos provenientes de:"

explicacion: |
  Aunque Europa fue la fuente principal inicialmente, flujos posteriores vinieron de Asia y América del Sur.
```

### 14 — pregunta 14

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["politica", "instituciones"]

variables:
  modelo: "británico"

respuesta: "británico"
tipo: completar
respuestas_validas:
  - "británico"
  - "britanico"
  - "british"

enunciado: "Las instituciones políticas de la región se inspiraron en el modelo {modelo}."

explicacion: |
  El legado institucional británico influyó en el sistema legal y político de EE.UU. y Canadá.
```

### 15 — pregunta 15

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["demografia", "crecimiento"]

variables:
  tipo_crecimiento: uno_de(["exponencial", "lineal", "estancado", "negativo"])

respuesta: "exponencial"
tipo: mc
opciones_explicitas: ["exponencial", "lineal", "estancado", "negativo"]

enunciado: "Tras la independencia, la población de EE.UU. creció de forma:"

explicacion: |
  El crecimiento fue exponencial debido a la alta tasa de natalidad y la inmigración masiva.
```

### 16 — pregunta 16

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["religion", "protestante"]

variables:
  religion: "protestantes"

respuesta: "protestantes"
tipo: completar
respuestas_validas:
  - "protestantes"
  - "protestante"

enunciado: "Los primeros colonos de las Trece Colonias eran en su mayoría {religion} del norte de Europa."

explicacion: |
  El protestantismo fue un elemento central de la identidad cultural y religiosa de los colonizadores.
```

### 17 — pregunta 17

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["fronteras", "herencia"]

variables:
  influencia: "poblamiento"

respuesta: "poblamiento"
tipo: completar
respuestas_validas:
  - "poblamiento"
  - "poblacion"

enunciado: "Las dinámicas de {influencia} definieron las fronteras políticas actuales de la región."

explicacion: |
  La forma en que se ocupó el territorio determinó los límites estatales y nacionales.
```

### 18 — pregunta 18

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["economia", "actualidad"]

variables:
  pais: uno_de(["EE.UU.", "Canadá", "Reino Unido", "Australia"])

respuesta: "EE.UU."
tipo: mc
opciones_explicitas: ["EE.UU.", "Canadá", "Reino Unido", "Australia"]

enunciado: "Comprender el poblamiento histórico es clave para entender la potencia económica actual de:"

explicacion: |
  Estados Unidos es la principal potencia económica derivada de este proceso histórico.
```

### 19 — pregunta 19

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["cronologia", "inmigracion"]

variables:
  periodo: "siglos XVIII y XIX"

respuesta: "siglos XVIII y XIX"
tipo: completar
respuestas_validas:
  - "siglos XVIII y XIX"
  - "siglo 18 y 19"
  - "siglos 18 y 19"

enunciado: "El verdadero cambio demográfico ocurrió entre los {periodo}."

explicacion: |
  Este periodo coincide con la industrialización y la necesidad de mano de obra en el norte.
```

### 20 — pregunta 20

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["comparacion", "violencia"]

variables:
  caracteristica_sur: "rápida y violenta"
  caracteristica_norte: "gradual"

respuesta: "gradual"
tipo: completar
respuestas_validas:
  - "gradual"
  - "lenta"

enunciado: "Mientras el sur tuvo una colonización rápida y violenta, el norte fue más {caracteristica_norte}."

explicacion: |
  La diferencia en la intensidad y velocidad del poblamiento marcó la estructura social posterior.
```

### 21 — pregunta 21

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["colonias", "britanico"]

variables:
  origen: "británica"

respuesta: "británica"
tipo: completar
respuestas_validas:
  - "británica"
  - "britanica"
  - "inglesa"

enunciado: "Las Trece Colonias fueron fundadas durante la etapa de colonización {origen}."

explicacion: |
  Son el origen directo del núcleo anglosajón en el continente.
```

### 22 — pregunta 22

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "avanzado"
  tags: ["geopolitica", "herencia"]

variables:
  aspecto: "estructura económica"

respuesta: "estructura económica"
tipo: completar
respuestas_validas:
  - "estructura económica"
  - "estructura economica"
  - "dinámica económica"

enunciado: "El poblamiento definió la {aspecto}, la distribución de la población y las relaciones internacionales."

explicacion: |
  La base económica establecida durante la colonización perdura en las relaciones globales actuales.
```

### 23 — pregunta 23

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["proceso", "continuidad"]

variables:
  naturaleza: "largo"

respuesta: "largo"
tipo: completar
respuestas_validas:
  - "largo"
  - "prolongado"

enunciado: "El poblamiento de América Anglosajona no fue un evento único, sino un proceso {naturaleza}."

explicacion: |
  Se desarrolló a lo largo de varios siglos, con etapas claras de expansión e inmigración.
```

### 24 — pregunta 24

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["perspectiva", "colonial"]

variables:
  concepto: "espacio vacío"

respuesta: "espacio vacío"
tipo: completar
respuestas_validas:
  - "espacio vacío"
  - "espacio vacio"
  - "terra nullius"

enunciado: "Desde la perspectiva europea, se entendió el territorio como un {concepto} a ser llenado."

explicacion: |
  Esta visión justificó la ocupación y la marginalización de los pueblos indígenas.
```

### 25 — pregunta 25

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["canada", "expansion"]

variables:
  motor: "ferrocarriles"

respuesta: "ferrocarriles"
tipo: completar
respuestas_validas:
  - "ferrocarriles"
  - "trenes"

enunciado: "La expansión canadiense hacia el oeste fue impulsada por políticas gubernamentales y {motor}."

explicacion: |
  El ferrocarril fue la herramienta clave para integrar el vasto territorio canadiense.
```
