# Historia Profunda — Modelo agroexportador inmigracion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El motor del modelo

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador"
  nivel: "basico"
  tags: ["economia", "exportacion"]

tipo: mc
opciones_explicitas: ["Manufacturas industriales", "Materias primas agropecuarias", "Productos tecnológicos", "Servicios financieros"]
respuesta: "Materias primas agropecuarias"

enunciado: "El modelo agroexportador argentino, consolidado a fines del siglo XIX, se basaba fundamentalmente en la exportación de ___."

explicacion: |
  El modelo agroexportador consistía en la exportación de productos de la naturaleza (carne, cereales, lana) e importación de productos manufacturados de Europa.
```

### 2 — El flujo de capitales

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador"
  nivel: "intermedio"
  tags: ["capital", "infraestructura"]

variables:
  inversion_tipo: uno_de(["Inversión extranjera en infraestructura", "Inversión nacional en industria"])

tipo: mc
opciones_explicitas: ["Inversión extranjera en infraestructura", "Inversión nacional en industria", "Préstamos de organismos internacionales", "Donaciones estatales"]
respuesta: "Inversión extranjera en infraestructura"

enunciado: "Para sostener el modelo agroexportador, fue fundamental la llegada de Inversión extranjera en infraestructura."

explicacion: |
  La gran inversión extranjera (principalmente británica) se destinó a la construcción de ferrocarriles y puertos para facilitar la salida de productos.
```

### 3 — La gran transformación demográfica

```
metadata:
  materia: "historia"
  tema: "inmigracion_masiva"
  nivel: "basico"
  tags: ["demografia", "inmigracion"]

tipo: completar
respuestas_validas:
  - "Europa"

enunciado: "Durante el periodo agroexportador, la mayoría de la corriente migratoria hacia la Argentina provenía de ___."

explicacion: |
  El flujo migratorio masivo de finales del siglo XIX y principios del XX estuvo compuesto mayoritariamente por inmigrantes europeos (italianos y españoles principalmente).
```

### 4 — El orden de los factores

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador"
  nivel: "intermedio"
  tags: ["causalidad", "procesos"]

tipo: ordenar
opciones_explicitas: ["Expansión de la frontera agrícola", "Llegada de ferrocarriles", "Aumento de la demanda europea", "Consolidación del modelo agroexportador"]

enunciado: "Ordene cronológicamente los procesos que permitieron la consolidación del modelo agroexportador:"

explicacion: |
  Primero se expandió la frontera (con la conquista del desierto), luego se conectó con trenes, lo que permitió responder a la demanda europea y consolidar el modelo.
respuesta_orden: ["Expansión de la frontera agrícola", "Llegada de ferrocarriles", "Aumento de la demanda europea", "Consolidación del modelo agroexportador"]
```

### 5 — El rol del Estado

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador"
  nivel: "avanzado"
  tags: ["estado", "politica"]

tipo: mc
opciones_explicitas: ["Un proceso de autosuficiencia", "Un motor de dependencia externa", "Un sistema de comercio cerrado", "Una economía de subsistencia"]

enunciado: "En el contexto del modelo agroexportador, la dinámica comercial argentina con Europa se caracterizó fundamentalmente por ser:"

explicacion: |
  El modelo generó una fuerte dependencia de los mercados externos (Europa) y de la tecnología/capital extranjero, integrando a Argentina al mercado mundial como proveedor de materias primas.

respuesta: "Un motor de dependencia externa"
```

### 6 — El motor de la inmigración

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["inmigracion", "economia", "modelo_agroexportador"]

respuesta: "modelo agroexportador"
tipo: completar
tolerancia_abs: 0

enunciado: "La expansión del _______ fue el principal factor que impulsó la llegada masiva de inmigrantes europeos a la Argentina durante las últimas décadas del siglo XIX."

explicacion: |
  El modelo agroexportador, basado en la exportación de materias primas (carnes y cereales) hacia Europa, demandó una gran cantidad de mano de obra que fue provista por la inmigración masiva.
```

### 7 — Orígenes de la inmigración

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["nacionalidades", "europa"]

respuesta: "italianos"
tipo: mc
opciones_explicitas: ["italianos", "españoles", "alemanes", "franceses"]

enunciado: "Si bien hubo diversas corrientes migratorias, el grupo de nacionalidad más numeroso en la inmigración masiva a la Argentina (por delante de los españoles) fue el de los _______."

explicacion: |
  La gran mayoría de los inmigrantes que llegaron entre 1880 y 1914 provenían de Italia y España, aunque también hubo presencia de otras nacionalidades europeas.
```

### 8 — Causas de la migración

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["causas", "europa"]

respuesta: "crisis económica y demográfica"
tipo: completar
respuestas_validas:
  - "crisis económica y demográfica"

enunciado: "Los inmigrantes europeos huían de Europa debido a la _______ que afectaba sus países de origen."

explicacion: |
  Las crisis económicas, las guerras de unificación y el crecimiento demográfico en Europa generaron un excedente de población que buscaba nuevas oportunidades en el continente americano.
```

### 9 — Factores de atracción

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

### 10 — Secuencia de factores

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "avanzado"
  tags: ["causalidad", "procesos"]

respuesta_orden: ["Demanda de mano de obra", "Expansión de la frontera agrícola", "Llegada masiva de inmigrantes"]
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

### 11 — Impulso de la demanda externa

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["economia", "demanda"]

opciones_explicitas: ["Europa", "Asia", "Estados Unidos", "África"]

respuesta: "Europa"
tipo: "mc"

enunciado: "El modelo agroexportador argentino se consolidó gracias a la creciente demanda de materias primas y alimentos provenientes de ________."

explicacion: |
  La Revolución Industrial en Europa generó una necesidad masiva de alimentos (carne, cereales) que Argentina satisfizo mediante su modelo exportador.
```

### 12 — Infraestructura y transporte

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["transporte", "ferrocarriles"]

opciones_explicitas: ["Navegación a vapor", "Ferrocarriles", "Carretas", "Ferrocarriles de montaña"]

respuesta: "Ferrocarriles"
tipo: "mc"

enunciado: "Para conectar las zonas de producción con los puertos de exportación, se realizó una gran inversión en la construcción de ________."

explicacion: |
  El ferrocarril fue la columna vertebral del modelo, permitiendo el traslado rápido y masivo de granos y carne hacia el puerto de Buenos Aires.
```

### 13 — Expansión territorial

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "avanzado"
  tags: ["frontera", "territorio"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Conquista del Desierto", "expansión de la frontera agrícola"], ["Guerra de la Triple Alianza", "consolidación de fronteras norteñas"]]

respuesta: datos[escenario_idx][1]
tipo: "completar"
respuestas_validas:
  - "expansión de la frontera agrícola"
  - "consolidación de fronteras norteñas"

enunciado: "La denominada {datos[escenario_idx][0]} permitió la {datos[escenario_idx][1]} para el modelo agroexportador."

explicacion: |
  La ocupación de territorios indígenas fue fundamental para incorporar nuevas tierras al circuito productivo de exportación.
```

### 14 — Capitales extranjeros

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["inversion", "britania"]

opciones_explicitas: ["Francia", "Alemania", "Reino Unido", "España"]

respuesta: "Reino Unido"
tipo: "mc"

enunciado: "La mayor parte de la inversión extranjera destinada a infraestructura y servicios en este periodo fue de origen ________."

explicacion: |
  El capital británico fue el principal motor de la inversión en ferrocarriles, bancos y servicios públicos durante la segunda mitad del siglo XIX y principios del XX.
```

### 15 — Secuencia de factores

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "avanzado"
  tags: ["logica", "procesos"]

opciones_explicitas: ["Demanda europea", "Expansión de frontera", "Ferrocarriles", "Inversión británica"]

respuesta_orden: ["Demanda europea", "Expansión de frontera", "Inversión británica", "Ferrocarriles"]
tipo: "ordenar"

enunciado: "Ordene cronológicamente los factores que permitieron la consolidación del modelo (desde el estímulo externo hasta la infraestructura de transporte):"

explicacion: |
  El proceso comenzó con la necesidad de alimentos en Europa, seguida por la ocupación de tierras, la llegada de capitales para infraestructura y finalmente la red ferroviaria que integró el sistema.
```

### 16 — El impacto demográfico

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["demografia", "inmigracion"]

respuesta: "el flujo masivo de inmigrantes europeos"
tipo: mc
opciones_explicitas: ["el flujo masivo de inmigrantes europeos", "la llegada de colonias agrícolas", "el crecimiento de la población nativa", "la migración interna desde el interior"]

enunciado: "Durante el modelo agroexportador, la principal causa de la transformación demográfica en el litoral argentino fue el flujo masivo de inmigrantes europeos."

explicacion: |
  La gran escala de la inmigración europea (principalmente italianos y españoles) alteró radicalmente la proporción de población extranjera en las zonas portuarias y de exportación.
```

### 17 — El crisol de razas y el lenguaje

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["cultura", "lenguaje"]

respuesta: "lunfardo"
tipo: completar
respuestas_validas:
  - "lunfardo"

enunciado: "La convivencia de diversas lenguas y modismos de los inmigrantes en los conventillos de Buenos Aires dio origen a un léxico popular conocido como ___."

explicacion: |
  El lunfardo surgió como una mezcla de términos de varios idiomas (italiano, español, francés, etc.) que los inmigrantes utilizaban en el ámbito urbano.
```

### 18 — Centros de asentamiento

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["urbanismo", "geografia"]

respuesta_orden: ["Buenos Aires", "Rosario", "Santa Fe"]
tipo: ordenar
opciones_explicitas: ["Buenos Aires", "Rosario", "Santa Fe"]

enunciado: "Ordene de mayor a menor importancia en términos de volumen de asentamiento inmigrante y actividad portuaria durante el auge agroexportador:"

explicacion: |
  El eje Buenos Aires-Rosario-Santa Fe concentró la mayor densidad demográfica debido a su conexión directa con el comercio mundial de granos y carnes.
```

### 19 — Transformación de la estructura social

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "avanzado"
  tags: ["clases_sociales", "urbanismo"]

variables:
  perfil: uno_de(["la clase media urbana", "la oligarquía terrateniente"])

respuesta: "la clase media urbana"
tipo: mc
opciones_explicitas: ["la clase media urbana", "la oligarquía terrateniente", "el campesinado indígena", "la aristocracia colonial"]

enunciado: "A diferencia de la estructura de la oligarquía, la inmigración masiva favoreció el surgimiento de {perfil} en los centros urbanos."

explicacion: |
  La llegada de inmigrantes con oficios diversos permitió la consolidación de una clase media compuesta por pequeños comerciantes, empleados y profesionales.
```

### 20 — El fenómeno del conventillo

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["vivienda", "cultura"]

respuesta: 100
tipo: completar
tolerancia_abs: 0

enunciado: "En el contexto de la inmigración, si un conventillo tiene 4 habitaciones y cada una alberga a 25 personas, ¿cuántas personas viven en total en el conventillo?"

pasos:
  - "Multiplicar el número de habitaciones por la cantidad de personas por habitación."

explicacion: |
  Los conventillos eran viviendas colectivas con alta densidad poblacional, típicas de los barrios de inmigrantes en Buenos Aires.
```

### 21 — El motor de la economía

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["economia", "exportacion"]

variables:
  datos: [["trigo", "cereales"], ["carne", "ganadería"], ["lana", "ovinos"]]
  idx: uno_de([0, 1, 2])
  producto: datos[idx][0]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["cereales", "ganadería", "ovinos"]

enunciado: "Durante el modelo agroexportador, la economía argentina se centró en la exportación de productos primarios. El {producto} pertenece al rubro de la ___."

explicacion: |
  El modelo agroexportador se basó en la exportación de materias primas hacia Europa, siendo el {producto} uno de los pilares fundamentales.
```

### 22 — El flujo migratorio

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["inmigracion", "demografia"]

variables:
  datos_migratorios: [["italianos", "Europa"], ["españoles", "Europa"], ["alemanes", "Europa"]]
  idx: uno_de([0, 1, 2])
  nacionalidad: datos_migratorios[idx][0]

respuesta: datos_migratorios[idx][1]
tipo: mc
opciones_explicitas: ["Europa", "Asia", "América", "África"]

enunciado: "La gran inmigración fue clave para la mano de obra en el campo. El grupo de los {nacionalidad} llegó a la Argentina proveniente del continente: ___"

explicacion: |
  La llegada masiva de inmigrantes de Europa (principalmente italianos y españoles) fue esencial para la expansión de la frontera agrícola.
```

### 23 — Conectividad ferroviaria

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["transporte", "infraestructura"]

respuesta: "ferrocarril"
tipo: completar
respuestas_validas:
  - "ferrocarril"

enunciado: "Para integrar los centros de producción con los puertos, se construyó una red de ___ fundamental para el modelo."

explicacion: |
  El ferrocarril permitió el traslado masivo de cargas desde el interior hacia los puertos de exportación de manera eficiente.
```

### 24 — El rol de los puertos

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["puertos", "comercio"]

respuesta: "Buenos Aires"
tipo: mc
opciones_explicitas: ["Buenos Aires", "Rosario", "Bahía Blanca", "Córdoba"]

enunciado: "El sistema agroexportador dependía de la salida hacia el mundo a través de puertos específicos. ¿Cuál fue el principal puerto de salida de la producción agroexportadora argentina?"

explicacion: |
  Los puertos eran el punto de conexión vital entre la producción interna y el mercado mundial.
```

### 25 — Secuencia de la exportación

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "avanzado"
  tags: ["proceso", "logistica"]

respuesta_orden: ["Producción", "Transporte", "Exportación"]
tipo: ordenar
opciones_explicitas: ["Producción", "Transporte", "Exportación"]

enunciado: "Ordene el proceso lógico de una mercancía en el modelo agroexportador: desde la cosecha hasta la salida del país."

explicacion: |
  El ciclo comenzaba con la producción en el campo, seguía con el transporte ferroviario y terminaba con la exportación en el puerto.
```
