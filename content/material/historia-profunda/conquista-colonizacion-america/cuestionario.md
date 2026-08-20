# Historia Profunda — Conquista colonizacion america (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El encuentro de dos mundos

```
metadata:
  materia: "historia"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["encuentro", "columbus", "europa"]

tipo: mc
opciones_explicitas: ["América", "Asia", "África", "Oceanía"]
respuesta: "Asia"

enunciado: "En el año 1492, el viaje de Cristóbal Colón buscaba una ruta comercial hacia ___."

explicacion: |
  Colón buscaba una ruta hacia las Indias (Asia) navegando hacia el oeste, pero se encontró con un continente desconocido para los europeos.
```

### 2 — El Imperio Azteca

```
metadata:
  materia: "historia"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["aztecas", "conquista", "mexico"]

variables:
  escenario: uno_de([["Hernán Cortés", "Tenochtitlán", "Mexicas"], ["Francisco Pizarro", "Cuzco", "Incas"]])

tipo: completar
respuestas_validas:
  - "Hernán Cortés"
  - "Tenochtitlán"
  - "Mexicas"

enunciado: "El conquistador español que lideró la caída del imperio de los {escenario[2]} fue {escenario[0]}, tomando como centro la ciudad de {escenario[1]}."

pasos:
  - "Identificar al líder de la expedición."
  - "Identificar el nombre de la capital del imperio conquistado."
  - "Identificar el nombre del pueblo originario."

explicacion: |
  {escenario[0]} lideró la expedición que sometió al imperio de los {escenario[2]} en el territorio que hoy es México.
```

### 3 — El Tratado de Tordesillas

```
metadata:
  materia: "historia"
  tema: "conquista_colonizacion_america"
  nivel: "avanzado"
  tags: ["tratado", "espana", "portugal"]

tipo: mc
opciones_explicitas: ["España", "Portugal", "Inglaterra", "Francia"]
respuesta: "Portugal"

enunciado: "El Tratado de Tordesillas (1494) dividió las zonas de exploración y conquista entre España y ___."

explicacion: |
  El tratado estableció una línea de demarcación que otorgaba a Portugal las tierras al este de la línea (lo que luego sería Brasil) y a España las tierras al oeste.
```

### 4 — Impacto demográfico

```
metadata:
  materia: "historia"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["biologia", "enfermedades", "demografia"]

tipo: completar
tolerancia_abs: 0

enunciado: "Además de las guerras, un factor determinante en la caída de la población indígena fue la llegada de enfermedades como la viruela. ¿El efecto demográfico fue de aumento o disminución? (Escribe 'aumento' o 'disminución')"

respuestas_validas:
  - "aumento"
  - "disminución"

explicacion: |
  La introducción de patógenos europeos causó una catástrofe demográfica en las poblaciones originarias.
```

### 5 — Orden de los procesos de conquista

```
metadata:
  materia: "historia"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["cronologia", "procesos"]

tipo: ordenar
opciones_explicitas: ["Llegada de Colón", "Caída de Tenochtitlán", "Establecimiento del Virreinato del Perú"]

enunciado: "Ordena cronológicamente los siguientes hitos de la conquista española en América:"

explicacion: |
  Primero ocurrió el viaje de Colón (1492), luego la conquista del Imperio Azteca (1521) y finalmente la organización administrativa de los territorios en virreinatos.
respuesta_orden: ["Llegada de Colón", "Caída de Tenochtitlán", "Establecimiento del Virreinato del Perú"]
```

### 6 — El impacto de las enfermedades

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["demografia", "enfermedades"]

respuesta: "viruela"
tipo: completar
respuestas_validas:
  - "viruela"
  - "viruela"
  - "sarampión"
  - "sarampión"

enunciado: "Uno de los factores biológicos más devastadores durante la conquista fue la propagación de la ___, enfermedad que causó una mortalidad masiva en las poblaciones indígenas debido a la falta de inmunidad previa."

explicacion: |
  La viruela fue una de las principales causas del colapso demográfico, ya que los sistemas inmunológicos de los pueblos originarios no estaban preparados para virus provenientes de Eurasia y África.
```

### 7 — Causas de la caída demográfica

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["causas", "colapso"]

opciones_explicitas: ["Enfermedades", "Guerras de conquista", "Sistemas de explotación", "Todas las anteriores"]
respuesta: "Todas las anteriores"
tipo: mc

enunciado: "¿Cuáles fueron los factores principales que contribuyeron al descenso drástico de la población indígena durante el proceso de colonización?"

explicacion: |
  El colapso fue multicausal: la introducción de patógenos (viruela, sarampión), la violencia directa de las campañas militares y la explotación laboral (como la mita o la encomienda) actuaron de forma sinérgica.
```

### 8 — Secuencia de factores de mortalidad

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "avanzado"
  tags: ["proceso", "causas"]

opciones_explicitas: ["Llegada de patógenos", "Desestructuración social", "Colapso demográfico masivo"]
respuesta_orden: ["Llegada de patógenos", "Desestructuración social", "Colapso demográfico masivo"]
tipo: ordenar

enunciado: "Ordene cronológicamente los procesos que explican la catástrofe demográfica en el continente americano:"

explicacion: |
  Primero llegaron los agentes biológicos que causaron epidemias rápidas; esto desarticuló la organización social y familiar (desestructuración), lo que finalmente derivó en una caída demográfica sin precedentes.
```

### 9 — Inmunidad y patógenos

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["biologia", "historia"]

enunciado: "En el escenario epidémico posterior a la conquista, la falta de memoria inmunológica de los pueblos originarios ante virus como el sarampión fue un factor determinante para la mortalidad."

pasos:
  - "Analizar la interacción entre patógeno y sistema inmune."
  - "Relacionar la falta de inmunidad con la velocidad de propagación."

respuesta: "sarampión"
tipo: completar
respuestas_validas:
  - "sarampión"
  - "sarampión"

explicacion: |
  Al ser virus nuevos para estas poblaciones, no existían anticuerpos previos, lo que permitía que la enfermedad se propagara de forma explosiva entre comunidades enteras.
```

### 10 — Consecuencias de la explotación

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["explotacion", "demografia"]

opciones_explicitas: ["Aumento de la natalidad", "Reducción de la población", "Migración masiva a Europa"]
respuesta: "Reducción de la población"
tipo: mc

enunciado: "La combinación de enfermedades y los sistemas de trabajo forzado (como la encomienda) provocó principalmente una:"

explicacion: |
  La explotación extrema reducía la capacidad de recuperación de las poblaciones, agravando el impacto de las epidemias y llevando a una reducción poblacional constante.
```

### 11 — El sistema de la Encomienda

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["encomienda", "mano_de_obra", "colonizacion"]

respuesta: "tributo"
tipo: "completar"
respuestas_validas:
  - "tributo"

enunciado: "En el sistema de la encomienda, la Corona española otorgaba a un encomendero el derecho de recibir ___ en forma de trabajo o productos por parte de los indígenas a cambio de su evangelización."

explicacion: |
  La encomienda era una institución donde se asignaba un grupo de indígenas a un español (encomendero) para que este los protegiera y evangelizara, a cambio de tributos o trabajo.
```

### 12 — La Mita Minera

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["mita", "mineria", "potosi"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["Potosí", "Plata"], ["Huancavelica", "Mercurio"]]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["Plata", "Mercurio", "Oro", "Azogue"]

enunciado: "Durante la colonia, la mita fue un sistema de trabajo obligatorio para los indígenas. En el caso de la mita de {escenarios[escenario_idx][0]}, el recurso principal extraído era el/la {escenarios[escenario_idx][1]}."

explicacion: |
  La mita minera fue una adaptación de la mita incaica utilizada por los españoles para asegurar mano de obra en las minas de plata de Potosí y de mercurio en Huancavelica.
```

### 13 — Flujo de metales preciosos

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["mercantilismo", "metales_preciosos"]

respuesta: "metrópolis"
tipo: "mc"
opciones_explicitas: ["metrópolis", "colonias", "comunidades", "indígenas"]

enunciado: "El sistema extractivo colonial estaba diseñado para que la riqueza obtenida en América fluyera hacia la ___ europea."

explicacion: |
  El modelo económico era mercantilista y extractivista, cuyo objetivo principal era el enriquecimiento de las potencias coloniales (metrópolis) mediante la acumulación de metales.
```

### 14 — Secuencia de explotación

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "avanzado"
  tags: ["orden", "procesos_coloniales"]

respuesta_orden: ["Conquista", "Encomienda", "Mita"]
tipo: "ordenar"
opciones_explicitas: ["Mita", "Conquista", "Encomienda"]

enunciado: "Ordene cronológicamente las etapas de la organización del trabajo y control de población en el continente americano:"

explicacion: |
  Primero se produjo la Conquista militar, seguida por la Encomienda (control de tributo/evangelización) y finalmente la consolidación de sistemas de trabajo forzado como la Mita para la minería intensiva.
```

### 15 — Impacto demográfico y laboral

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["demografia", "explotacion"]

respuesta: -15000000
tipo: "input"
tolerancia_abs: 5000000

enunciado: "Debido a las enfermedades y las duras condiciones en los sistemas de trabajo como la mita, se estima que la población indígena sufrió una caída drástica. Si una población inicial era de 25.000.000 y tras la explotación quedó en 10.000.000, ¿cuántos millones de personas se perdieron aproximadamente? (Ingrese el número entero)"

pasos:
  - "Calcular la diferencia: 25.000.000 - 10.000.000"

explicacion: |
  El colapso demográfico fue uno de los efectos más devastadores de la colonización, causado por la combinación de epidemias y la sobreexplotación laboral en minas y haciendas.
```

### 16 — El intercambio de especies

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["intercambio_colombino", "biologia", "historia"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [["maíz", "América", "Europa"], ["caballo", "Europa", "América"], ["viruela", "Europa", "América"]]

enunciado: "Tras el contacto de 1492, el intercambio colombino permitió que el {datos[escenario_idx][0]} fuera llevado desde {datos[escenario_idx][1]} hacia {datos[escenario_idx][2]}."

respuesta: datos[escenario_idx][2]
tipo: mc
opciones_explicitas: ["América", "Europa", "África", "Asia"]

explicacion: |
  El intercambio colombino fue el flujo masivo de plantas, animales y patógenos entre el Viejo y el Nuevo Mundo que transformó la ecología y la demografía global.
```

### 17 — Impacto demográfico

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["demografia", "enfermedades", "impacto"]

variables:
  enfermedad_idx: uno_de([0, 1])
  enfermedades: [["viruela", "catastrófico"], ["sarampión", "catastrófico"]]

enunciado: "La llegada de la {enfermedades[enfermedad_idx][0]} a América tuvo un impacto ___ en la población indígena."

respuesta: enfermedades[enfermedad_idx][1]
tipo: completar
respuestas_validas:
  - "catastrófico"

explicacion: |
  Las poblaciones indígenas de América no tenían inmunidad contra enfermedades euroasiáticas como la viruela o el sarampión, lo que causó un colapso demográfico masivo.
```

### 18 — Nuevos cultivos en Europa

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["agricultura", "europa", "papa"]

respuesta: "papa"
tipo: mc
opciones_explicitas: ["trigo", "papa", "arroz", "cebada"]

enunciado: "Un cultivo fundamental proveniente de América que revolucionó la dieta europea y permitió un crecimiento poblacional en los siglos posteriores fue la ___."

explicacion: |
  La papa (Solanum tuberosum) proporcionó una densidad calórica alta que fue clave para evitar hambrunas en Europa.
```

### 19 — Animales en el Nuevo Mundo

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["animales", "transporte"]

respuesta: "caballo"
tipo: mc
opciones_explicitas: ["vaca", "caballo", "oveja", "cerdo"]

enunciado: "La introducción de este animal transformó la cultura de las tribus de las llanuras en América, facilitando el transporte y la caza: el ___."

explicacion: |
  El caballo fue introducido por los españoles y cambió radicalmente la movilidad y las tácticas de guerra de los pueblos nativos.
```

### 20 — Secuencia del intercambio

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "avanzado"
  tags: ["procesos", "historia"]

enunciado: "Ordená cronológicamente el proceso del intercambio colombino:"
respuesta_orden: ["Llegada de Colón", "Introducción de especies", "Transformación ecológica"]
tipo: ordenar
opciones_explicitas: ["Introducción de especies", "Llegada de Colón", "Transformación ecológica"]

explicacion: |
  El proceso comenzó con el contacto inicial, seguido por la transferencia biológica de especies y culminó en una transformación ecológica y cultural permanente de ambos hemisferios.
```

### 21 — Origen de cultivos americanos

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["intercambio_colombino", "botanica"]

variables:
  escenario: [[ "maíz", "América" ], [ "trigo", "Eurasia" ], [ "papa", "América" ], [ "arroz", "Eurasia" ]]
  idx: uno_de([0,1,2,3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["América", "Eurasia", "África", "Oceanía"]

enunciado: "El {escenario[idx][0]} fue un producto fundamental que llegó al Viejo Mundo proveniente de _______."

explicacion: |
  El intercambio colombino permitió que productos como el {escenario[idx][0]} transformaran la dieta en Europa y Asia.
```

### 22 — Identificación de productos europeos

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["intercambio_colombino", "animales"]

variables:
  escenario: [[ "caballo", "Eurasia" ], [ "pavo", "América" ], [ "cerdo", "Eurasia" ], [ "tomate", "América" ]]
  idx: uno_de([0,1,2,3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["América", "Eurasia", "Oceanía", "África"]

enunciado: "En el proceso de colonización, el {escenario[idx][0]} fue un elemento que llegó a América desde _______."

explicacion: |
  Los animales domésticos como el {escenario[idx][0]} fueron introducidos por los europeos y cambiaron el paisaje americano.
```

### 23 — Clasificación de productos

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["intercambio_colombino", "logica"]

variables:
  escenario: [[ "Cacao", "América" ], [ "Café", "Eurasia" ], [ "Azúcar", "Eurasia" ], [ "Tabaco", "América" ]]
  idx: uno_de([0,1,2,3])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas:
  - "América"
  - "Eurasia"

enunciado: "El producto {escenario[idx][0]} es originario de _______."

explicacion: |
  El intercambio fue bidireccional: el {escenario[idx][0]} fluyó de un continente al otro.
```

### 24 — Secuencia de llegada

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "avanzado"
  tags: ["intercambio_colombino", "orden"]

variables:
  idx: uno_de([0, 1])
  escenario: [["Maíz, Trigo, Caballo", "América, Eurasia, Eurasia"], ["Papa, Trigo, Cerdo", "América, Eurasia, Eurasia"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["América, Eurasia, Eurasia", "Eurasia, América, América", "Eurasia, Eurasia, América"]

enunciado: "Para los siguientes productos: {escenario[idx][0]}, ¿cuál es la secuencia correcta de su continente de origen?"

explicacion: |
  La secuencia correcta refleja qué productos venían de América y cuáles de Eurasia.
```

### 25 — El impacto de los productos

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["intercambio_colombino", "impacto"]

variables:
  escenario: [[ "Cebolla", "Eurasia" ], [ "Cacao", "América" ], [ "Cangrejo", "América" ], [ "Cabra", "Eurasia" ]]
  idx: uno_de([0,1,2,3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["América", "Eurasia"]

enunciado: "El {escenario[idx][0]} es un ejemplo de producto que se originó en _______."

explicacion: |
  El intercambio biológico alteró la demografía y la economía global.
```
