# Examen jefe — [PENDIENTE #687]

> Logro #687. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: escritura-primeras-ciudades (25 preguntas)

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["mesopotamia", "sumerios", "cuneiforme"]

respuesta: "Mesopotamia"
tipo: completar
respuestas_validas:
  - "Mesopotamia"

enunciado: "La escritura surgió en la región de ___ hace aproximadamente 5000 años."

explicacion: |
  La escritura se desarrolló en Mesopotamia, en la región de Sumer, para satisfacer necesidades de registro.
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["contabilidad", "administracion"]

respuesta: "administrativos"
tipo: mc
opciones_explicitas: ["poéticos", "administrativos", "religiosos", "militares"]

enunciado: "Originalmente, la escritura no se inventó para la literatura, sino para llevar registros ___."

explicacion: |
  Las primeras tablillas se utilizaban principalmente para la contabilidad y la administración de recursos en las ciudades-estado.
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["cuneiforme", "sumerios"]

variables:
  datos: [["sumerios", "cuneiforme"], ["egipcios", "jeroglíficos"], ["fenicios", "alfabeto"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["cuneiforme", "jeroglíficos", "alfabeto"]

enunciado: "El pueblo de {datos[idx][0]} desarrolló el sistema de escritura conocido como {datos[idx][1]}."

explicacion: |
  Los sumerios en Mesopotamia crearon la escritura cuneiforme, caracterizada por marcas en forma de cuña sobre arcilla.
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["proceso", "evolucion"]

respuesta_orden: ["Pictogramas", "Ideogramas", "Fonogramas"]
tipo: ordenar
opciones_explicitas: ["Pictogramas", "Ideogramas", "Fonogramas"]

enunciado: "Ordena cronológicamente la evolución conceptual de los signos en la escritura antigua:"

explicacion: |
  La escritura evolucionó desde dibujos de objetos (pictogramas), pasando por conceptos (ideogramas), hasta representar sonidos (fonogramas).
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["tiempo", "mesopotamia"]

respuesta: 5000
tipo: completar
tolerancia_abs: 100

enunciado: "Se estima que la escritura surgió hace aproximadamente ___ años."

explicacion: |
  La invención de la escritura en Mesopotamia se sitúa hace unos 5000 años, marcando el inicio de la Edad Antigua.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["escritura", "prehistoria", "historia"]

respuesta: "historia"
tipo: completar
respuestas_validas:
  - "historia"

enunciado: "La aparición de la escritura marca la transición de la prehistoria al inicio de la ___."

explicacion: |
  La prehistoria se define por la ausencia de registros escritos. Con la invención de la escritura, los seres humanos pueden dejar testimonios directos de sus leyes, mitos y transacciones, permitiendo el estudio de la historia documentada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["arqueologia", "metodologia"]

variables:
  escenario: uno_de([["restos materiales (huesos, herramientas)", "arqueología"], ["registros escritos (tablillas, papiros)", "historia"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["arqueología", "historia"]

enunciado: "Si un investigador encuentra una serie de tablillas de arcilla con nombres y cantidades de grano, está estudiando principalmente la ___."

explicacion: |
  El uso de registros escritos permite pasar de la reconstrucción basada en restos materiales (arqueología) al análisis de la historia documentada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["cronologia", "transicion"]

respuesta: "verdadero"
tipo: completar
enunciado: "¿La escritura permite conocer la mentalidad de una civilización de forma directa, a diferencia de los restos materiales que requieren interpretación indirecta?"

explicacion: |
  Verdadero. Los objetos nos dicen qué tenían o cómo vivían, pero los textos nos dicen qué pensaban, qué leyes tenían y cómo se llamaban a sí mismos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["metodologia", "transicion"]

respuesta: "documental"
tipo: completar
respuestas_validas:
  - "documental"

enunciado: "Cuando un historiador utiliza textos antiguos para reconstruir un evento, está realizando un análisis de tipo ___."

explicacion: |
  El análisis documental se basa en el uso de fuentes escritas (documentos) para la reconstrucción de procesos sociales y políticos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["evidencia", "metodologia"]

respuesta_orden: ["restos materiales", "escritura", "historia documentada"]
tipo: ordenar
opciones_explicitas: ["restos materiales", "escritura", "historia documentada"]

enunciado: "Ordena los niveles de evidencia según el grado de complejidad en la reconstrucción de la vida social, desde lo más material hasta lo más intelectual/directo:"

explicacion: |
  La escala comienza con la cultura material (objetos), sigue con la capacidad de registrar (escritura) y culmina en la capacidad de estudiar la historia a través de testimonios directos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["mesopotamia", "escritura", "uruk"]

respuesta: "excedente"
tipo: "completar"
respuestas_validas:
  - "excedente"

enunciado: "El surgimiento de las primeras ciudades en Mesopotamia, como Uruk, estuvo estrechamente ligado a la capacidad de producir un ___ agrícola que permitía sostener a poblaciones no dedicadas a la agricultura."

explicacion: |
  La capacidad de producir más alimento del que se consume inmediatamente (excedente) permitió que parte de la población se especializara en otras tareas (artesanos, escribas, sacerdotes), dando origen a la estructura urbana y la necesidad de registrar estas cantidades mediante la escritura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["causalidad", "sociedad"]

respuesta: "excedente agrícola"
tipo: "mc"
opciones_explicitas: ["excedente agrícola", "escritura", "estratificación social"]

enunciado: "En el contexto de las primeras ciudades mesopotámicas, la aparición de la escritura fue una respuesta directa a la necesidad de gestionar el ___."

explicacion: |
  La escritura no nació como un medio de expresión literaria, sino como una herramienta contable para registrar el excedente agrícola y los bienes que entraban en los templos o palacios.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["estado", "jerarquia"]

respuesta: "estatal"
tipo: "completar"
respuestas_validas:
  - "estatal"

enunciado: "La gestión de los recursos excedentes y la redistribución de bienes exigieron una organización ___ compleja, lo que consolidó el poder de las élites en las primeras ciudades."

explicacion: |
  La complejidad de la vida urbana y la gestión de excedentes impulsaron la creación de estructuras de poder centralizadas o estados primordiales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["contabilidad", "uruk"]

respuesta: "contabilidad"
tipo: "completar"
respuestas_validas:
  - "contabilidad"

enunciado: "Antes de convertirse en un sistema de escritura fonética, los primeros signos en las ciudades de Mesopotamia servían para la ___ de bienes y ganado."

explicacion: |
  Los proto-escrituras (tokens o fichas de arcilla) eran herramientas de contabilidad para llevar el control de los inventarios en los centros de redistribución.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["secuencia", "causalidad"]

respuesta_orden: ["excedente agrícola", "especialización del trabajo", "aparición de la escritura"]
tipo: "ordenar"
opciones_explicitas: ["excedente agrícola", "especialización del trabajo", "aparición de la escritura"]

enunciado: "Ordena cronológicamente los fenómenos que permitieron el desarrollo de la civilización urbana en Mesopotamia:"

explicacion: |
  Primero se produce el excedente (producción de más comida de la necesaria), esto permite que no todos tengan que cultivar (especialización), y esa especialización genera la necesidad de registrar la producción (escritura).
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["escritura", "sociedad", "memoria"]

tipo: mc
opciones_explicitas: ["Permitió la transmisión de conocimiento más allá de la memoria oral", "Eliminó la necesidad de la comunicación verbal", "Redujo el tamaño de las poblaciones", "Hizo que la historia fuera irrelevante"]
respuesta: "Permitió la transmisión de conocimiento más allá de la memoria oral"

enunciado: "La invención de la escritura en las primeras civilizaciones permitió que el conocimiento fuera ___________."

explicacion: |
  La escritura permitió que la información no dependiera únicamente de la memoria de los individuos, facilitando la acumulación de saber a través de las generaciones.
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["administracion", "burocracia", "estado"]

tipo: completar
respuestas_validas:
  - "administrar"
  - "controlar"

enunciado: "El desarrollo de sistemas de escritura fue fundamental para poder ___________ las excedentes de producción y los tributos en sociedades cada vez más complejas."

explicacion: |
  La complejidad social de las primeras ciudades requería un registro preciso de recursos, lo que impulsó la creación de sistemas de contabilidad y administración.
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["evolucion", "comunicacion"]

tipo: ordenar
opciones_explicitas: ["Tradición oral", "Signos pictográficos", "Escritura fonética"]

enunciado: "Ordena cronológicamente la evolución de los sistemas de registro de información en las primeras civilizaciones:"

explicacion: |
  La evolución comenzó con la comunicación oral, pasó por representaciones de objetos (pictogramas) y finalmente hacia sistemas que representaban sonidos (fonética).
respuesta_orden: ["Tradición oral", "Signos pictográficos", "Escritura fonética"]
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["estado", "leyes", "orden"]

tipo: mc
respuesta: "Estabilidad y orden social"
opciones_explicitas: ["Estabilidad y orden social", "Inestabilidad constante", "Desigualdad extrema"]

enunciado: "Cuando las sociedades pasaron de leyes orales a leyes escritas, el resultado principal fue la ___________."

explicacion: |
  La codificación de leyes por escrito permitió una aplicación más uniforme y predecible de la justicia, contribuyendo a la estabilidad del Estado.
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["memoria", "registro", "tiempo"]

tipo: completar
tolerancia_abs: 0

enunciado: "Antes de la escritura, la historia dependía de la memoria. Con la escritura, la historia se convierte en un ___ que trasciende el tiempo."

respuesta: "registro"

explicacion: |
  La escritura transformó la memoria humana en un registro físico, permitiendo que la historia fuera un objeto de estudio permanente y no algo sujeto al olvido biológico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["mesopotamia", "sumerios"]

respuesta: "Mesopotamia"
tipo: mc
opciones_explicitas: ["Mesopotamia", "Egipto", "China", "India"]

enunciado: "El sistema de escritura basado en marcas en forma de cuña (cuneiforme) se desarrolló en la región de ___."

explicacion: |
  La escritura cuneiforme fue desarrollada por los sumerios en la antigua Mesopotamia alrededor del 3200 a.C.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["egipto", "jeroglíficos"]

respuesta: "Egipto"
tipo: mc
opciones_explicitas: ["Egipto", "Mesopotamia", "Fenicia", "China"]

enunciado: "Los jeroglíficos fueron utilizados por las civilizaciones del valle del Nilo."

explicacion: |
  Los jeroglíficos egipcios combinaban logogramas y signos fonéticos para representar el lenguaje.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["cronologia", "origen"]

variables:
  datos: [["Mesopotamia", "Sumerios"], ["Egipto", "Egipcios"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Sumerios", "Egipcios"]

enunciado: "La escritura en la región de {datos[idx][0]} fue desarrollada originalmente por los {datos[idx][1]}."

explicacion: |
  La transición de la proto-escritura a sistemas complejos fue fundamental para la administración de las primeras ciudades-estado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["orden", "evolucion"]

respuesta_orden: ["Tokens", "Escritura Cuneiforme", "Tablillas"]
tipo: ordenar
opciones_explicitas: ["Tokens", "Escritura Cuneiforme", "Tablillas"]

enunciado: "Ordena la evolución de los soportes y formas de registro en el contexto de Mesopotamia:"

explicacion: |
  El proceso comenzó con objetos de arcilla (tokens) para contar, evolucionando hacia signos abstractos en tablillas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["fenicia", "alfabeto"]

respuesta: "Fenicia"
tipo: mc
opciones_explicitas: ["Fenicia", "China", "Mesopotamia", "Egipto"]

enunciado: "A diferencia de los sistemas complejos, el sistema alfabético fue perfeccionado por los fenicios en la región de ___."

explicacion: |
  El alfabeto fenicio fue un sistema fonético que facilitó el comercio y fue la base de muchos alfabetos modernos.
```

## Sección: estaciones-del-ano (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["astronomia", "mitos"]

respuesta: falso
tipo: vf

enunciado: "El cambio de las estaciones del año ocurre principalmente porque la Tierra se acerca o se aleja del Sol en su órbita elíptica."

explicacion: |
  Falso. La distancia al Sol no es la causa de las estaciones: de hecho la Tierra está más cerca del Sol en enero (verano austral/invierno boreal) que en julio. La causa real es la inclinación del eje terrestre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["eje_terrestre", "inclinacion"]

variables:
  angulo_eje: 23.5

respuesta: "inclinación del eje"
tipo: completar
respuestas_validas:
  - "inclinación del eje"
  - "inclinación terrestre"
  - "eje inclinado"

enunciado: "La causa fundamental de que existan las estaciones es la ___ de la Tierra respecto a su plano orbital."

explicacion: |
  La inclinación de aproximadamente {angulo_eje}° hace que la radiación solar se distribuya de forma desigual sobre la superficie terrestre a lo largo del año.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["radiacion", "angulo"]

respuesta: "mayor intensidad"
tipo: mc
opciones_explicitas: ["menor intensidad", "mayor intensidad", "misma intensidad", "intensidad nula"]

enunciado: "Cuando un hemisferio está inclinado hacia el Sol, los rayos solares inciden con un ángulo más perpendicular y la energía se concentra en un área menor, resultando en una ___ de radiación por unidad de superficie."

explicacion: |
  Al incidir de forma más perpendicular, la energía solar se concentra en un área más pequeña, lo que aumenta la temperatura local y genera el verano.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "avanzado"
  tags: ["hemisferios", "estaciones"]

variables:
  idx: uno_de([0, 1])
  escenario: [["verano", "invierno"], ["invierno", "verano"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["verano", "invierno"]

enunciado: "Debido a la inclinación del eje, si el hemisferio norte está experimentando {escenario[idx][0]}, ¿qué estación experimenta al mismo tiempo el hemisferio sur?"

explicacion: |
  La inclinación hace que un hemisferio reciba más energía directa mientras el otro recibe rayos más oblicuos y dispersos, creando estaciones opuestas y simultáneas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["luz_solar"]

respuesta: "perpendicular"
tipo: completar
respuestas_validas:
  - "perpendicular"
  - "directa"
  - "recta"

enunciado: "En el solsticio de verano, el sol alcanza su máxima altura en el cielo porque los rayos inciden de forma casi ___ sobre el trópico correspondiente."

explicacion: |
  La máxima concentración de calor ocurre cuando el ángulo de incidencia es lo más cercano posible a los 90 grados (perpendicular).
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["astronomia", "estaciones"]

tipo: mc
opciones_explicitas: ["Verano", "Invierno", "Equinoccio"]

enunciado: "Cuando un hemisferio terrestre está inclinado hacia el Sol, recibe mayor radiación solar y experimenta la estación de ___."

respuesta: "Verano"

explicacion: |
  La inclinación del eje terrestre hacia el Sol durante un periodo determinado provoca que la radiación sea más directa y los días sean más largos, definiendo el verano.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["hemisferios", "estaciones"]

variables:
  idx: uno_de([0, 1])
  escenario: [["Norte", "Sur", "Verano", "Invierno"], ["Sur", "Norte", "Invierno", "Verano"]]

tipo: mc
opciones_explicitas: ["Verano", "Invierno"]

enunciado: "Si en el hemisferio {escenario[idx][0]} es {escenario[idx][2]}, ¿qué estación es al mismo tiempo en el hemisferio {escenario[idx][1]}?"

respuesta: escenario[idx][3]

explicacion: |
  Las estaciones están invertidas entre hemisferios: cuando uno está inclinado hacia el Sol (verano), el otro está inclinado alejándose de él (invierno).
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["radiacion", "duracion_dia"]

tipo: completar
respuestas_validas:
  - "mayor"

enunciado: "Debido a la inclinación hacia el Sol, el verano se caracteriza por recibir una radiación ___ que el resto del año."

respuesta: "mayor"

explicacion: |
  La inclinación aumenta la densidad de energía solar por unidad de superficie y prolonga la duración de la luz solar diaria.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["ciclo", "orden"]

tipo: ordenar
opciones_explicitas: ["Verano", "Otoño", "Invierno", "Primavera"]

enunciado: "Ordena cronológicamente las estaciones del año comenzando desde el verano."

respuesta_orden: ["Verano", "Otoño", "Invierno", "Primavera"]

explicacion: |
  El ciclo estacional sigue un orden regular determinado por la posición de la Tierra en su órbita.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["energia", "sol"]

tipo: completar
respuestas_validas:
  - "menor"

enunciado: "Si la radiación solar es máxima en el verano, en el invierno la radiación solar es ___ que en el verano."

respuesta: "menor"

explicacion: |
  En el invierno, la inclinación aleja el hemisferio del Sol, resultando en una menor intensidad de radiación solar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["astronomia", "estaciones"]

respuesta: "igual"
tipo: completar
respuestas_validas:
  - "igual"

enunciado: "Durante los equinoccios de primavera y de otoño, la duración del día y la noche es ___."

explicacion: |
  En los equinoccios, el Sol está directamente sobre el ecuador terrestre, lo que provoca que el día y la noche tengan aproximadamente la misma duración.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["solsticio", "verano"]

respuesta: verdadero
tipo: vf

enunciado: "Si nos encontramos en el Hemisferio Norte, el solsticio de verano coincide con el día más largo del año."

explicacion: |
  En el Hemisferio Norte, el solsticio de verano marca el punto donde el Sol alcanza su máxima declinación norte, resultando en el día más largo del año.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["secuencia", "estaciones"]

respuesta_orden: ["equinoccio de primavera", "solsticio de verano", "equinoccio de otoño", "solsticio de invierno"]
tipo: ordenar
opciones_explicitas: ["equinoccio de primavera", "solsticio de verano", "equinoccio de otoño", "solsticio de invierno"]

enunciado: "Ordena cronológicamente las estaciones del año comenzando por el equinoccio de primavera:"

explicacion: |
  El ciclo estándar comienza con la primavera (equinoccio), sigue con el verano (solsticio), luego el otoño (equinoccio) y termina con el invierno (solsticio).
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["solsticio", "invierno"]

respuesta: "solsticio de invierno"
tipo: mc
opciones_explicitas: ["solsticio de verano", "equinoccio de primavera", "equinoccio de otoño", "solsticio de invierno"]

enunciado: "¿En qué momento astronómico ocurre el día más corto del año (en el hemisferio correspondiente)?"

explicacion: |
  El solsticio de invierno es el momento en que el hemisferio está más inclinado lejos del Sol, resultando en el día más corto y la noche más larga.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "avanzado"
  tags: ["calculo", "astronomia"]

respuesta: "mayor"
tipo: completar
respuestas_validas:
  - "mayor"

enunciado: "Si estamos en el solsticio de verano (en el hemisferio correspondiente), la duración del día es ___ que la de la noche."

explicacion: |
  En el solsticio de verano, la inclinación de la Tierra permite que ese hemisferio reciba luz solar por más tiempo, haciendo que el día sea más largo que la noche.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["geografia", "clima", "latitud"]

respuesta: verdadero
tipo: vf

enunciado: "En las regiones de clima ecuatorial, la diferencia estacional de temperatura es mínima porque el ángulo de incidencia solar se mantiene casi constante durante todo el año."

explicacion: |
  En las zonas ecuatoriales, el sol incide de forma casi perpendicular todo el año, manteniendo temperaturas estables. En las zonas templadas y polares, en cambio, el ángulo cambia mucho más a lo largo del año, provocando estaciones marcadas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["astronomia", "clima"]

respuesta: "cambio"
tipo: completar
respuestas_validas:
  - "cambio"

enunciado: "En las zonas polares, la marcada diferencia estacional se debe a que el ángulo de incidencia solar experimenta un gran ___ durante el ciclo anual."

explicacion: |
  El movimiento de traslación combinado con la inclinación del eje hace que en los polos el ángulo de incidencia solar varíe drásticamente, causando cambios extremos de temperatura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["clima", "latitud"]

variables:
  idx: uno_de([0, 1])
  datos: [["Ecuador", "mínima"], ["Zonas Templadas", "máxima"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["mínima", "máxima"]

enunciado: "Considerando el escenario de {datos[idx][0]}, la variación estacional de la temperatura es ___."

explicacion: |
  En el Ecuador, la radiación solar es constante durante todo el año, por lo que la variación térmica es mínima; en las zonas templadas, en cambio, la variación es máxima.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "avanzado"
  tags: ["astronomia", "geografia"]

respuesta: "inclinación del eje"
tipo: mc
opciones_explicitas: ["inclinación del eje", "distancia al Sol", "velocidad de rotación", "forma de la órbita"]

enunciado: "De los siguientes factores, ¿cuál es el que determina principalmente la variación del ángulo de incidencia solar y, con ella, la estacionalidad en cada latitud?"

explicacion: |
  La inclinación del eje terrestre es el factor principal que hace que el ángulo de incidencia varíe según la latitud y la época del año, no la distancia al Sol.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["clima"]

respuesta: "estabilidad"
tipo: completar
respuestas_validas:
  - "estabilidad"
  - "constancia"

enunciado: "En el ecuador, la ausencia de estaciones térmicas marcadas se debe principalmente a la ___ del ángulo de incidencia solar a lo largo del año."

explicacion: |
  A diferencia de las latitudes altas, en el ecuador el ángulo de incidencia solar casi no cambia entre enero y julio, así que no hay una estación notablemente más fría o más cálida que otra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["astronomia", "hemisferios"]

variables:
  idx: uno_de([0, 1, 2, 3])
  datos: [["Diciembre", "Verano", "Hemisferio Sur"], ["Junio", "Invierno", "Hemisferio Sur"], ["Diciembre", "Invierno", "Hemisferio Norte"], ["Junio", "Verano", "Hemisferio Norte"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Verano", "Invierno", "Otoño", "Primavera"]

enunciado: "Si nos encontramos en el mes de {datos[idx][0]} y estamos en el {datos[idx][2]}, ¿qué estación del año estamos experimentando?"

explicacion: |
  En el Hemisferio Sur, el sol incide más directamente sobre el Trópico de Capricornio en diciembre (verano) y sobre el Trópico de Cáncer en junio (invierno); en el Hemisferio Norte es al revés.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["astronomia", "solsticio"]

variables:
  idx: uno_de([0, 1])
  datos: [["Solsticio de Diciembre", "Invierno", "Hemisferio Norte"], ["Solsticio de Junio", "Invierno", "Hemisferio Sur"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Verano", "Invierno", "Otoño", "Primavera"]

enunciado: "Durante el {datos[idx][0]}, en el {datos[idx][2]} la duración del día es la más corta del año. Esto define la estación de:"

explicacion: |
  El solsticio de invierno marca el inicio de la estación más fría en el hemisferio correspondiente, debido a la inclinación del eje terrestre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "intermedio"
  tags: ["comparacion", "hemisferios"]

variables:
  idx: uno_de([0, 1])
  datos: [["Primavera", "Otoño"], ["Otoño", "Primavera"]]

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Primavera"
  - "Otoño"

enunciado: "Si en el Hemisferio Norte estamos en la estación de {datos[idx][0]}, en el Hemisferio Sur estamos en la estación de ___."

explicacion: |
  Las estaciones son opuestas entre hemisferios debido a la inclinación del eje de la Tierra respecto al plano de su órbita.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["equinoccio", "astronomia"]

variables:
  idx: uno_de([0, 1])
  datos: [["Equinoccio de Marzo", "Primavera", "Hemisferio Norte"], ["Equinoccio de Septiembre", "Otoño", "Hemisferio Norte"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Primavera", "Otoño", "Verano", "Invierno"]

enunciado: "En el {datos[idx][0]} en el {datos[idx][2]}, el día y la noche tienen la misma duración. Esto marca el inicio de la:"

explicacion: |
  Los equinoccios (marzo y septiembre) representan los momentos en que el sol cruza el ecuador celeste, equilibrando la luz y la sombra en todo el planeta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estaciones_del_ano"
  nivel: "basico"
  tags: ["secuencia", "ciclos"]

respuesta_orden: ["Verano", "Otoño", "Invierno", "Primavera"]
tipo: ordenar
opciones_explicitas: ["Verano", "Otoño", "Invierno", "Primavera"]

enunciado: "Ordena las estaciones siguiendo el ciclo natural comenzando desde el Verano."

explicacion: |
  El ciclo astronómico sigue siempre el mismo orden: Verano → Otoño → Invierno → Primavera (y vuelve a empezar).
```

## Sección: estados-nacionales (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["definicion", "politica"]

tipo: mc
opciones_explicitas: ["Una organización política sin fronteras definidas ni cultura común.", "Una organización política con territorio, población y gobierno, con una identidad nacional compartida.", "Un grupo de personas que comparten una lengua pero no tienen un gobierno propio.", "Un sistema de comercio internacional basado en tratados de libre cambio."]
enunciado: "Un Estado Nacional se define fundamentalmente como:"
respuesta: "Una organización política con territorio, población y gobierno, con una identidad nacional compartida."
explicacion: |
  El Estado Nacional es una organización política que posee un territorio delimitado, una población asentada en él y un gobierno soberano, todo esto unido por una identidad cultural, histórica o lingüística común.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["componentes", "territorio"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Francia", "populacion_fr"], ["Japón", "populacion_jp"]]

tipo: completar
respuestas_validas:
  - "territorio"
  - "población"
  - "gobierno"

enunciado: "Para que el país {datos[escenario_idx][0]} funcione como un Estado Nacional, requiere de un _________ delimitado, una _________ asentada y un _________ que ejerza la soberanía."

pasos:
  - "Identificar los tres pilares de la estructura estatal."
  - "Completar los espacios con los conceptos técnicos correctos."

explicacion: |
  Los tres elementos constitutivos son: territorio, población y gobierno. Sin la combinación de estos, no se puede hablar de un Estado Nacional moderno.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["identidad", "cultura"]

tipo: mc
opciones_explicitas: ["La lengua y la historia común ayudan a crear el sentimiento de pertenencia.", "La fuerza militar es el único factor que define a una nación.", "El territorio es lo único que importa, la cultura es irrelevante.", "Un Estado Nacional no requiere de una identidad compartida."]
respuesta: "La lengua y la historia común ayudan a crear el sentimiento de pertenencia."

enunciado: "¿Cuál es el papel de la lengua, la cultura y la historia en la formación de un Estado Nacional?"

explicacion: |
  A diferencia del Estado como estructura puramente administrativa, el concepto de 'Nación' aporta el componente de identidad (lengua, historia, cultura) que cohesiona a la población.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["proceso", "historia"]

tipo: ordenar
opciones_explicitas: ["Consolidación de fronteras territoriales", "Surgimiento de una identidad cultural común", "Centralización del poder y gobierno"]

enunciado: "Ordena cronológicamente los procesos típicos en la formación de un Estado Nacional moderno (desde la base cultural hasta la estructura política):"

explicacion: |
  Aunque los procesos varían, históricamente la identidad cultural suele preceder o acompañar la centralización del poder y la delimitación formal de las fronteras.
respuesta_orden: ["Surgimiento de una identidad cultural común", "Centralización del poder y gobierno", "Consolidación de fronteras territoriales"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["conceptos", "diferencias"]

variables:
  casos: [["nación", "estado"]]

tipo: completar
tolerancia_abs: 0

enunciado: "Si nos encontramos ante el caso de nación, estamos ante una _________ que no ha logrado constituirse como un Estado Nacional."

respuesta: "nación"

explicacion: |
  Cuando existe una nación (identidad compartida) pero carece de soberanía territorial o gobierno propio, se dice que es una nación sin Estado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["conceptos", "siglo_xix"]

respuesta: "soberanía"
tipo: completar
respuestas_validas:
  - "soberanía"

enunciado: "El surgimiento del Estado-Nación implica la consolidación de un territorio delimitado donde el poder supremo reside en una entidad política que ejerce la ___ sobre su población."

explicacion: |
  La soberanía es el principio fundamental que define a un Estado moderno, permitiéndole ejercer autoridad exclusiva sobre un territorio y su población, sin interferencias externas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["unificacion", "italia"]

respuesta: "Cavour"
tipo: mc
opciones_explicitas: ["Cavour", "Garibaldi", "Mazzini", "Bismarck"]

enunciado: "Durante el proceso de unificación italiana (Risorgimento), el líder político que fue clave desde el Reino de Piamonte-Cerdeña fue ___."

explicacion: |
  El proceso de unificación fue complejo: mientras Garibaldi lideraba las campañas militares, figuras como Cavour (desde el Piamonte) gestionaban la diplomacia para consolidar el nuevo Estado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["unificacion", "alemania"]

respuesta: "Prusia"
tipo: mc
opciones_explicitas: ["Prusia", "Austria", "Baviera", "Sajonia"]

enunciado: "A diferencia de la unificación italiana, la unificación alemana de 1871 fue liderada por la potencia militar de ___."

explicacion: |
  Bajo el liderazgo de Otto von Bismarck, Prusia utilizó la diplomacia y la guerra (como la guerra franco-prusiana) para unificar los estados alemanes bajo su corona.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["consecuencias", "geopolitica"]

respuesta: "Imperio Austro-Húngaro"
tipo: mc
opciones_explicitas: ["Imperio Austro-Húngaro", "Imperio Británico", "Imperio Otomano", "Imperio Ruso"]

enunciado: "El auge de los movimientos nacionalistas en el siglo XIX representó una amenaza directa para la integridad territorial de los imperios multiétnicos, como el ___."

explicacion: |
  Los imperios multiétnicos, donde convivían diversas lenguas y culturas bajo una misma corona, sufrieron tensiones constantes debido a que los grupos étnicos buscaban su propia independencia nacional.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["cronologia", "unificacion"]

respuesta_orden: ["Unificación Italiana", "Unificación Alemana", "Fragmentación del Imperio Otomano"]
tipo: ordenar
opciones_explicitas: ["Unificación Italiana", "Unificación Alemana", "Fragmentación del Imperio Otomano"]

enunciado: "Ordene cronológicamente los siguientes procesos de transformación del mapa europeo en el siglo XIX, desde el más temprano al más tardío:"

pasos:
  - "Identifique la fecha de consolidación de la Italia unificada (1861)."
  - "Identifique la fecha de la proclamación del Imperio Alemán (1871)."
  - "Considere el declive de los Balcanes y el Imperio Otomano hacia finales del siglo."

explicacion: |
  La unificación italiana se consolidó formalmente en 1861, seguida por la unificación alemana en 1871. El declive otomano y las tensiones nacionalistas en los Balcanes fueron procesos continuos que culminarían con mayor intensidad tras la Primera Guerra Mundial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["nacionalismo", "identidad"]

respuesta: "Estado"
tipo: "completar"
respuestas_validas:
  - "Estado"

enunciado: "El nacionalismo sostiene que una nación, entendida como un grupo con identidad cultural, lengua o historia común, debe tener su propio ___."

explicacion: |
  El nacionalismo es la ideología que vincula la identidad de un grupo cultural (nación) con la estructura política de un territorio soberano (Estado).
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["ideologia", "componentes"]

respuesta: "Lengua común, historia compartida y territorio definido"
tipo: mc
opciones_explicitas: ["Lengua común, historia compartida y territorio definido", "Religión única, monarquía absoluta y sistema feudal", "Clase obrera, lucha de clases y plusvalía"]

enunciado: "¿Cuál de los siguientes conjuntos de elementos ha servido históricamente como pilar para la construcción de una identidad nacional según el nacionalismo romántico?"

explicacion: |
  Para que un grupo se reconozca como nación, suele requerir elementos de cohesión como la lengua, la historia y un territorio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["geopolitica"]

respuesta: "fragmentación"
tipo: "mc"
opciones_explicitas: ["unificación", "fragmentación", "globalización", "feudalización"]

enunciado: "El auge de los nacionalismos en el siglo XIX provocó la ___ de imperios multiétnicos que contenían diversas naciones sin identidad propia."

explicacion: |
  Al buscar cada grupo su propio Estado, los grandes imperios (como el Austriaco o el Otomano) sufrieron procesos de fragmentación territorial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["soberania"]

respuesta: "soberanía"
tipo: "completar"
respuestas_validas:
  - "soberanía"

enunciado: "El proyecto del Estado-Nación busca que el poder político sea ejercido por una nación que posee ___ sobre su territorio."

explicacion: |
  La soberanía es el derecho de un Estado a autogobernarse sin interferencias externas, un concepto clave para la legitimidad nacionalista.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["teoria_politica"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un grupo con cultura propia pero sin fronteras claras."], ["Un Estado con fronteras claras pero con múltiples etnias sin cohesión."]]
  respuestas: ["Nación sin Estado", "Estado sin Nación"]

respuesta: respuestas[caso_idx]
tipo: "mc"
opciones_explicitas: ["Nación sin Estado", "Estado sin Nación"]

enunciado: "Analice el siguiente escenario: {casos[caso_idx][0]} ¿Qué situación describe mejor la tensión nacionalista?"

explicacion: |
  La tensión surge precisamente cuando la delimitación de la 'nación' (identidad) no coincide con la delimitación del 'Estado' (fronteras políticas).
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["italia", "risorgimento", "siglo_xix"]

enunciado: "Durante el proceso de unificación italiana, el liderazgo político y diplomático fue fundamental. El personaje que actuó como el cerebro diplomático del Reino de Piamonte-Cerdeña fue ___."

respuesta: "Cavour"
tipo: mc
opciones_explicitas: ["Cavour", "Garibaldi", "Mazzini", "Vittorio Emanuele II"]

explicacion: |
  Camillo Benso, conde de Cavour, fue el arquitecto de la unificación italiana a través de la diplomacia y la modernización del Reino de Piamonte-Cerdeña.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["alemania", "bismarck", "prusia"]

enunciado: "La unificación alemana se consolidó tras la victoria en la Guerra Franco-Prusiana, lo que llevó a la firma del ___ en el año 1871."

respuesta: "Tratado de Frankfurt"
tipo: mc
opciones_explicitas: ["Congreso de Viena", "Tratado de Frankfurt", "Tratado de Versalles", "Paz de Westfalia"]

explicacion: |
  El Tratado de Frankfurt puso fin a la guerra contra Francia y consolidó la creación del Segundo Imperio Alemán bajo el liderazgo de Prusia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["conceptos", "soberania"]

respuesta: "soberanía"
tipo: completar
respuestas_validas:
  - "soberanía"
  - "soberania"

enunciado: "Un elemento esencial de la formación de los Estados nacionales en el siglo XIX fue la consolidación de la ___ territorial y política sobre un conjunto de poblaciones con una identidad común."

explicacion: |
  La soberanía es la autoridad suprema que ejerce el Estado sobre su territorio y población, permitiendo la independencia frente a otras potencias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["causas", "economia", "nacionalismo"]

enunciado: "Un factor determinante para la cohesión de los estados alemanes antes de la unificación política fue la creación de la Zollverein, que facilitó el libre comercio entre los estados miembros."

respuesta: "Zollverein"
tipo: mc
opciones_explicitas: ["Zollverein", "Confederación Germánica", "Unión Europea", "Liga Hanseática"]

explicacion: |
  El Zollverein fue una unión aduanera que eliminó las barreras comerciales entre los estados alemanes, fortaleciendo el poder de Prusia y preparando el terreno para la unificación política.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["procesos", "guerras"]

respuesta_orden: ["Guerra de los Ducados", "Guerra Austro-Prusiana", "Guerra Franco-Prusiana"]
tipo: ordenar
opciones_explicitas: ["Guerra de los Ducados", "Guerra Austro-Prusiana", "Guerra Franco-Prusiana"]

enunciado: "El proceso de unificación liderado por Otto von Bismarck se desarrolló a través de una serie de conflictos bélicos estratégicos. Ordene cronológicamente estas guerras:"

explicacion: |
  Bismarck utilizó la política de 'sangre y hierro' a través de tres guerras clave: contra Dinamarca (1864), contra Austria (1866) y contra Francia (1870-1871).
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["teoria_politica", "elementos_estado"]

variables:
  escenario: uno_de([["Un grupo de personas sin fronteras definidas ni leyes comunes.", "No es un Estado"], ["Un territorio con población, gobierno y leyes, pero sin identidad cultural única.", "Es un Estado"], ["Un grupo con identidad, territorio y gobierno, pero sin población.", "No es un Estado"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["No es un Estado", "Es un Estado"]

enunciado: "Analiza el siguiente caso: {escenario[0]} ¿Se puede considerar un Estado Nacional según la teoría clásica?"

explicacion: |
  Para que exista un Estado Nacional se requiere la coexistencia de territorio, población, gobierno y, frecuentemente, una identidad compartida.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["territorio", "soberania"]

variables:
  caso: uno_de([["La delimitación de fronteras físicas y jurídicas.", "Territorio"], ["El conjunto de individuos que habitan el país.", "Población"], ["El conjunto de normas que rigen la convivencia.", "Gobierno"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["Territorio", "Población", "Gobierno"]

enunciado: "Un elemento fundamental de los Estados modernos es la delimitación de fronteras físicas y jurídicas. Este concepto se define como: ___"

explicacion: |
  El territorio es el espacio geográfico donde el Estado ejerce su soberanía.
```

```
metadata:
  materia: "historia_profucha"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["identidad", "nacionalismo"]

tipo: completar
respuesta: "Identidad"
respuestas_validas:
  - "Identidad"

enunciado: "En el proceso de formación de los Estados nacionales, la creación de un sentimiento de pertenencia común a través de símbolos y lengua se conoce como ___."

explicacion: |
  La identidad nacional es el lazo simbólico que une a la población con el Estado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["orden_logico", "elementos"]

respuesta_orden: ["Población", "Territorio", "Gobierno", "Identidad"]
tipo: ordenar
opciones_explicitas: ["Población", "Territorio", "Gobierno", "Identidad"]

enunciado: "Ordena los elementos que tradicionalmente se consideran necesarios para la consolidación de un Estado Nacional, desde el elemento humano hasta el elemento simbólico."

explicacion: |
  El orden lógico parte de la base humana (población), el espacio (territorio), la estructura de mando (gobierno) y el cohesión cultural (identidad).
```

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["gobierno", "soberania"]

variables:
  situacion: uno_de([["Un territorio sin una autoridad central que dicte leyes.", "Falta Gobierno"], ["Un pueblo con leyes pero sin un territorio asignado.", "Falta Territorio"], ["Una nación con identidad pero sin población real.", "Falta Población"]])

respuesta: situacion[1]
tipo: mc
opciones_explicitas: ["Falta Gobierno", "Falta Territorio", "Falta Población"]

enunciado: "Considera este escenario: {situacion[0]} ¿Qué elemento esencial del Estado está ausente?"

explicacion: |
  Sin un gobierno (autoridad política), no hay capacidad de ejercer soberanía ni de organizar a la población.
```

## Sección: eucariotas (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "basico"
  tags: ["celulas", "nucleo"]

tipo: mc
respuesta: "Presencia de núcleo definido"
opciones_explicitas: ["Presencia de núcleo definido", "Presencia de pared celular de peptidoglicano", "Ausencia de organelas", "ADN circular libre"]

enunciado: "La principal característica que define a una célula eucariota frente a una procariota es la ___."

explicacion: |
  Las células eucariotas poseen un núcleo rodeado por una membrana nuclear que contiene el material genético, mientras que las procariotas tienen el ADN disperso en el citoplasma.
```

```
metadata:
  materia: "biologia"
  tema: "organelas_celulares"
  nivel: "basico"
  tags: ["organelas", "membrana"]

tipo: completar
respuestas_validas:
  - "organelas membranosas"

enunciado: "A diferencia de los procariotas, las células eucariotas presentan un sistema complejo de ___."

explicacion: |
  Los eucariotas cuentan con compartimentos internos delimitados por membranas, como mitocondrias, retículo endoplasmático y aparato de Golgi.
```

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "intermedio"
  tags: ["estructura", "comparacion"]

variables:
  escenario: uno_de([["mitocondria", "respiración celular"], ["cloroplasto", "fotosíntesis"], ["lisosoma", "digestión celular"]])

tipo: mc
opciones_explicitas: ["respiración celular", "fotosíntesis", "digestión celular", "transporte de proteínas"]

enunciado: "En una célula eucariota, la función de {escenario[0]} está asociada a la ___."

respuesta: escenario[1]

explicacion: |
  La estructura {escenario[0]} es una organela membranosa cuya función principal es la {escenario[1]}.
```

```
metadata:
  materia: "biologia"
  tema: "evolucion_celular"
  nivel: "intermedio"
  tags: ["evolucion", "orden"]

tipo: ordenar
opciones_explicitas: ["ADN libre en el citoplasma", "Formación de la membrana nuclear", "Aparición de organelas membranosas", "Organismo multicelular complejo"]

enunciado: "Ordena cronológicamente la complejidad estructural desde una célula procariota simple hasta un organismo eucariota complejo:"

explicacion: |
  La evolución celular implicó primero la compartimentación del material genético, luego la especialización de organelas y finalmente la organización multicelular.
respuesta_orden: ["ADN libre en el citoplasma", "Formación de la membrana nuclear", "Aparición de organelas membranosas", "Organismo multicelular complejo"]
```

```
metadata:
  materia: "biologia"
  tema: "nucleo_eucariota"
  nivel: "basico"
  tags: ["nucleo", "membrana"]

tipo: vf

enunciado: "La presencia de una membrana nuclear que delimita el material genético es una característica exclusiva de las células eucariotas."

respuesta: verdadero

explicacion: |
  Es verdadero. Los procariotas no poseen una envoltura nuclear que separe el ADN del resto del citoplasma.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "basico"
  tags: ["eucariotas", "mitocondrias", "endosimbiosis"]

tipo: mc
opciones_explicitas: ["una bacteria aeróbica", "un virus", "un fragmento de núcleo", "un ribosoma"]
respuesta: "una bacteria aeróbica"

enunciado: "Según la teoría endosimbiótica, las mitocondrias se originaron a partir de la integración de una ___ que era capaz de realizar la respiración celular."

explicacion: |
  La teoría endosimbiótica propone que las mitocondrias fueron originalmente bacterias aeróbicas que fueron fagocitadas por una célula huésped, estableciendo una relación simbiótica.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "intermedio"
  tags: ["evolucion", "endosimbiosis"]

variables:
  escenario: uno_de([["bacteria aeróbica", "mitocondria"], ["bacteria fotosintética", "cloroplasto"]])

tipo: completar
respuestas_validas:
  - escenario[0]

enunciado: "Si una célula eucariota primitiva engloba a una ___, el resultado evolutivo es la formación de un(a) {escenario[1]}."

explicacion: |
  El proceso de endosimbiosis implica que un organismo complejo absorbe a uno más pequeño que, en lugar de ser digerido, se convierte en un orgánulo especializado.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "avanzado"
  tags: ["evidencia", "adn", "membrana"]

tipo: mc
opciones_explicitas: ["Poseen su propio ADN circular y ribosomas similares a los procariotas", "Tienen un núcleo rodeado de membrana", "Se originan en el retículo endoplasmático", "No poseen membrana propia"]
respuesta: "Poseen su propio ADN circular y ribosomas similares a los procariotas"
enunciado: "Una de las principales evidencias de que los cloroplastos y mitocondrias fueron bacterias libres es que:"
explicacion: |
  Tanto mitocondrias como cloroplastos poseen su propio material genético en forma de ADN circular, muy similar al de las bacterias actuales, y sus ribosomas son de tipo procariota.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "intermedio"
  tags: ["evolucion", "orden"]

tipo: ordenar
opciones_explicitas: ["Célula procariota con membrana flexible", "Fagocitosis de una bacteria aeróbica", "Establecimiento de simbiosis", "Célula eucariota con mitocondrias"]

enunciado: "Ordene los eventos que explican la aparición de la célula eucariota con mitocondrias:"

explicacion: |
  La evolución fue un proceso gradual: primero la célula huésped, luego la captura de la bacteria, la convivencia simbiótica y finalmente la especialización del orgánulo.
respuesta_orden: ["Célula procariota con membrana flexible", "Fagocitosis de una bacteria aeróbica", "Establecimiento de simbiosis", "Célula eucariota con mitocondrias"]
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "basico"
  tags: ["cloroplastos", "fotosintesis"]

tipo: vf
enunciado: "Los cloroplastos se originaron a partir de la endosimbiosis de una bacteria fotosintética (cianobacteria)."
respuesta: verdadero
explicacion: |
  Es verdadero. La capacidad de realizar fotosíntesis en las plantas y algas se debe a la incorporación de cianobacterias que se convirtieron en cloroplastos.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "basico"
  tags: ["mitocondria", "evolucion"]

respuesta: "fisión binaria"
tipo: mc
opciones_explicitas: ["ADN circular", "ADN lineal", "fisión binaria", "mitosis"]

enunciado: "La evidencia de que las mitocondrias fueron bacterias es que poseen un tipo de ADN circular y se reproducen mediante ___."

explicacion: |
  Las mitocondrias poseen ADN circular y se dividen por fisión binaria, características típicas de las procariotas.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "intermedio"
  tags: ["adn", "cloroplastos"]

respuesta: "circular"
tipo: completar
respuestas_validas:
  - "circular"

enunciado: "A diferencia del ADN del núcleo celular, el ADN de los cloroplastos es de forma ___."

explicacion: |
  El ADN de los organelos semiautónomos es circular, similar al de las bacterias actuales.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "basico"
  tags: ["reproduccion", "organelos"]

respuesta: "fisión binaria"
tipo: completar
respuestas_validas:
  - "fisión binaria"

enunciado: "El mecanismo de reproducción de las mitocondrias es la ___."

explicacion: |
  Las mitocondrias no se crean de la nada, sino que se dividen mediante fisión binaria, igual que los procariontes.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "intermedio"
  tags: ["membrana", "evolucion"]

respuesta: "doble"
tipo: mc
opciones_explicitas: ["doble", "simple"]

enunciado: "La teoría endosimbiótica sugiere que los organelos como los cloroplastos poseen una ___ membrana, la cual sería el remanente de la membrana de la bacteria original."

explicacion: |
  La presencia de una doble membrana es una evidencia clave de la captura de una célula por otra.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "avanzado"
  tags: ["secuencia", "evolucion"]

respuesta_orden: ["Célula procariota", "Fagocitosis", "Célula eucariota con mitocondria"]
tipo: ordenar
opciones_explicitas: ["Célula procariota", "Fagocitosis", "Célula eucariota con mitocondria"]

enunciado: "Ordena los eventos que explican la aparición de la mitocondria según la teoría endosimbiótica:"

pasos:
  - "Una bacteria aeróbica es ingerida por una célula hospedadora."
  - "Se establece una relación de simbiosis."
  - "La bacteria se convierte en un organelo permanente."

explicacion: |
  El proceso implica la ingestión (fagocitosis) de una bacteria que, al no ser digerida, establece una simbiosis que da origen al organelo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "basico"
  tags: ["evolucion", "cronologia"]

respuesta: "1500 millones de años"
tipo: mc
opciones_explicitas: ["3800 millones de años", "2000 millones de años", "1500 millones de años", "500 millones de años"]

enunciado: "Los procariotas aparecieron hace aproximadamente 3800 millones de años, mientras que los eucariotas aparecieron mucho después, hace unos ___."

explicacion: |
  La vida procariota es mucho más antigua, con registros de hace unos 3800 millones de años, mientras que la complejidad celular eucariota surgió mucho después.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "basico"
  tags: ["comparacion"]

respuesta: "mucho después"
tipo: completar
respuestas_validas:
  - "mucho después"
  - "antes"
  - "al mismo tiempo"

enunciado: "En la línea de tiempo de la vida, los eucariotas aparecieron ___ que los procariotas."

explicacion: |
  Los procariotas dominaron la Tierra durante casi 2000 millones de años antes de la aparición de las células eucariotas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "intermedio"
  tags: ["ordenar", "evolucion"]

opciones_explicitas: ["Aparición de procariotas", "Aparición de eucariotas", "Aparición de organismos multicelulares"]
respuesta_orden: ["Aparición de procariotas", "Aparición de eucariotas", "Aparición de organismos multicelulares"]
tipo: ordenar

enunciado: "Ordena cronológicamente los siguientes hitos biológicos, desde el más antiguo al más reciente:"

explicacion: |
  Primero aparecieron las células procariotas simples, luego las eucariotas con núcleo, y finalmente la multicelularidad compleja.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "avanzado"
  tags: ["calculo", "tiempo"]

variables:
  t_proc: 3800
  t_euc: 1750

respuesta: t_proc - t_euc
tipo: completar
tolerancia_abs: 100

enunciado: "Si los procariotas aparecieron hace {t_proc} millones de años y los eucariotas hace {t_euc} millones de años, ¿cuántos millones de años de ventaja temporal tuvieron los procariotas sobre los eucariotas?"

explicacion: |
  La diferencia es de {t_proc - t_euc} millones de años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "basico"
  tags: ["logica"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que los eucariotas y los procariotas aparecieron en la Tierra en el mismo periodo geológico inicial?"

explicacion: |
  Es falso. Los procariotas precedieron a los eucariotas por un margen de aproximadamente 2000 millones de años.
```

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "basico"
  tags: ["celulas", "nucleo"]

variables:
  datos: [["presencia de nucleo definido", "eucariota"], ["ausencia de nucleo definido", "procariota"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

enunciado: "Si una célula presenta {datos[idx][0]}, se trata de una célula tipo ___."

explicacion: |
  Las células eucariotas se caracterizan por tener su material genético rodeado por una membrana nuclear, mientras que las procariotas lo tienen libre en el citoplasma.
```

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "basico"
  tags: ["organelos", "mitocondria"]

variables:
  datos: [["mitocondria", "eucariota"], ["ribosomas sin membrana", "procariota"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

enunciado: "La presencia de {datos[idx][0]} es una característica propia de la célula ___."

explicacion: |
  Los organelos membranosos como las mitocondrias son exclusivos de las células eucariotas. Las procariotas carecen de compartimentos internos delimitados por membranas.
```

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "intermedio"
  tags: ["estructura", "complejidad"]

variables:
  datos: [["organelos complejos", "eucariota"], ["estructura simple", "procariota"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "eucariota"
  - "procariota"

enunciado: "Una célula con {datos[idx][0]} se clasifica como ___."

explicacion: |
  La complejidad estructural y la compartimentación celular son los rasgos distintivos de los organismos eucariotas.
```

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "intermedio"
  tags: ["tamaño", "escala"]

variables:
  datos: [["10-100 micrometros", "eucariota"], ["1-5 micrometros", "procariota"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

enunciado: "Si observamos una célula con un diámetro de {datos[idx][0]}, estamos ante una célula ___."

explicacion: |
  Las células eucariotas son generalmente mucho más grandes (10-100 µm) que las procariotas (1-5 µm) debido a su mayor complejidad interna.
```

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "avanzado"
  tags: ["evolucion", "linaje"]

variables:
  orden: ["procariota", "eucariota"]
  idx: uno_de([0, 1])

respuesta_orden: orden

tipo: ordenar
opciones_explicitas: ["procariota", "eucariota"]

enunciado: "Ordena los tipos celulares según la aparición evolutiva (de la más antigua a la más reciente):"

explicacion: |
  Las células procariotas aparecieron primero en la historia de la vida, seguidas por la aparición de las células eucariotas mediante procesos como la endosimbiosis.
```

## Sección: expansion-del-imperio-romano (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["guerras-punicas", "cartago", "expansion"]
enunciado: "La victoria en las Guerras Púnicas permitió a Roma transformar el Mediterráneo Occidental en un \"lago romano\". ¿Qué conflicto específico consolidó el dominio romano sobre el mar tras la destrucción de Cartago?"
tipo: mc
opciones_explicitas: ["Primera Guerra Púnica", "Segunda Guerra Púnica", "Tercera Guerra Púnica", "Guerra de Iliria"]
respuesta: "Tercera Guerra Púnica"
explicacion: "Tras la Tercera Guerra Púnica (149-146 a.C.), Roma no solo destruyó Cartago, sino que eliminó a su último gran rival naval y comercial en el oeste, permitiendo el control total de las rutas marítimas occidentales."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["augusto", "egipto", "batalla-actium"]
enunciado: "La anexión de Egipto como provincia romana marcó el fin de la República y el inicio del Principado, al poner bajo control directo de Augusto los graneros del Mediterráneo."
respuesta: verdadero
tipo: vf
explicacion: "La anexión ocurrió en el 30 a.C., tras la batalla de Actium (31 a.C.) y el suicidio de Cleopatra y Marco Antonio, convirtiendo al último reino helenístico en una provincia imperial privada de los senadores."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["anibal", "escipion", "trabajo"]
enunciado: "Complete la frase: El tratado de paz que puso fin a la Segunda Guerra Púnica fue firmado en el año _____, obligando a Cartago a pagar una indemnización masiva y a ceder sus territorios exteriores."
respuesta: "201 a.C."
respuestas_validas:
  - "201 a.C."
  - "201ac"
  - "201 a c"
  - "201 AC"
tipo: completar
explicacion: "El tratado de 201 a.C. desmanteló el imperio cartaginés, dejándolo como un estado cliente sin capacidad militar exterior y sometido a fuertes restricciones económicas."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["filipo-v", "batalla-cinocefalas", "helenismo"]
enunciado: "¿Cuál fue la consecuencia política inmediata de la derrota de Filipo V de Macedonia en la batalla de Cinocefalas (197 a.C.) ante los romanos?"
opciones_explicitas:
  - "Macedonia se convirtió en una provincia romana directamente gobernada por un legado."
  - "Filipo V perdió sus territorios no griegos y se vio obligado a pagar tributo y entregar rehenes."
  - "Roma estableció una base naval permanente en Corinto de inmediato."
  - "Grecia fue declarada oficialmente \"libre\" pero bajo protectorado militar romano."
respuesta: "Filipo V perdió sus territorios no griegos y se vio obligado a pagar tributo y entregar rehenes."
tipo: mc
explicacion: "Tras Cinocefalas, Macedonia no se anexionó inmediatamente, sino que se debilitó políticamente mediante tributos y la pérdida de territorios clave, sentando las bases para la anexión posterior."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["cartago", "caton", "destruccion"]
enunciado: "Complete la frase: El pretexto principal que Cato el Viejo utilizó para abogar por la destrucción de Cartago fue que esta ciudad, a pesar del tratado de paz, había recuperado su _____ y prosperidad económica."
respuesta: "poder militar"
respuestas_validas:
  - "poder militar"
  - "capacidad militar"
  - "fuerza militar"
  - "potencial militar"
tipo: completar
explicacion: "Los romanos interpretaron la recuperación económica de Cartago (especialmente en agricultura y comercio) como una amenaza militar latente, justificando así la guerra preventiva."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["italia", "aliados", "ciudadania"]
enunciado: "La Guerra Social (91-88 a.C.) estalló principalmente porque los aliados itálicos de Roma (socii) exigían:"
opciones_explicitas:
  - "La independencia total de la península itálica."
  - "La igualdad de derechos políticos y ciudadanía romana."
  - "La abolición de la deuda pública."
  - "La redistribución de las tierras conquistadas en Oriente."
respuesta: "La igualdad de derechos políticos y ciudadanía romana."
tipo: mc
explicacion: "Los aliados itálicos habían luchado junto a Roma durante siglos sin obtener la ciudadanía, lo que generó un resentimiento que estalló en una revuelta masiva cuando se denegó su petición."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["julio-caesar", "galia", "cultura"]
enunciado: "¿Qué efecto cultural y administrativo tuvo la conquista de la Galia por Julio César entre el 58 y el 50 a.C.?"
opciones_explicitas:
  - "Imposición inmediata del cristianismo en toda la región."
  - "Romanización progresiva, introducción del latín y creación de infraestructura urbana."
  - "Destrucción total de la población indígena y su reemplazo por esclavos orientales."
  - "Mantenimiento de la estructura tribal sin cambios administrativos romanos."
respuesta: "Romanización progresiva, introducción del latín y creación de infraestructura urbana."
tipo: mc
explicacion: "La Galia se integró en el sistema provincial romano, adoptando la lengua, el derecho y las ciudades (oppida) como centros de romanización, aunque el proceso tomó siglos."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["galia-narbonense", "provincia", "francia"]
enunciado: "Complete la frase: La Galia Narbonense fue la primera provincia romana al norte de los Alpes, anexada formalmente en el año _____, sirviendo de puente logístico hacia la Galia transalpina."
respuesta: "121 a.C."
respuestas_validas:
  - "121 a.C."
  - "121ac"
  - "121 a c"
  - "121 AC"
tipo: completar
explicacion: "Establecida tras las campañas contra los alóbroges y arvernos, esta provincia (sur de Francia actual) fue crucial para el comercio y el movimiento de tropas hacia el norte."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["mithridates", "ponto", "asiatica"]
enunciado: "Mitrídates VI del Ponto inició la Primera Guerra Mithridática (89-85 a.C.) principalmente para:"
opciones_explicitas:
  - "Expulsar a los romanos de toda Asia Menor y liberar a las ciudades griegas de su tutela."
  - "Conquistar Egipto para unirla al Ponto."
  - "Vengar la muerte de su padre en manos de Roma."
  - "Detener la expansión romana hacia el norte de África."
respuesta: "Expulsar a los romanos de toda Asia Menor y liberar a las ciudades griegas de su tutela."
tipo: mc
explicacion: "Mitrídates se presentó como libertador de los griegos de Asia contra la \"opresión romana\" y organizó una matanza de ciudadanos romanos y italianos en Asia Menor (el \"Vespero Asiático\") para debilitar la presencia romana."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["guerra-civil", "cesar", "pompeyo"]
enunciado: "¿Qué evento específico puso fin a la República Romana y permitió la expansión imperial bajo un solo hombre?"
opciones_explicitas:
  - "La cruzada contra los piratas cilicios."
  - "El cruce del río Rubicón por Julio César en 49 a.C."
  - "La fundación de la colonia de Carthago Nova."
  - "La victoria en la batalla de Alesia."
respuesta: "El cruce del río Rubicón por Julio César en 49 a.C."
tipo: mc
explicacion: "Al cruzar el Rubicón con sus legiones, César desafió la autoridad del Senado, iniciando una guerra civil que, al ganar, concentró el poder en su persona y sentó las bases del Imperio."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["augusto", "claudio", "britania"]
enunciado: "A diferencia de las invasiones de César, la conquista permanente de Britania comenzó bajo Claudio en 43 d.C. ¿Cuál fue su principal objetivo estratégico?"
opciones_explicitas:
  - "Buscar legiones de oro y plata abundantes."
  - "Consolidar una frontera natural en el océano y ganar prestigio político."
  - "Evitar la invasión de los vikingos desde el norte."
  - "Controlar las rutas comerciales de la seda desde Asia."
respuesta: "Consolidar una frontera natural en el océano y ganar prestigio político."
tipo: mc
explicacion: "Claudio, un emperador con poca experiencia militar, utilizó la conquista de Britania (una tierra lejana y misteriosa para los romanos) para ganar legitimidad y popularidad entre el pueblo romano."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["lesia", "vercingetoriges", "caesar"]
enunciado: "Complete la frase: La resistencia galia se consideró derrotada tras la rendición de Vercingetorix en Alesia, ocurrida en el año _____, fecha simbólica del fin de la independencia celta."
respuesta: "52 a.C."
respuestas_validas:
  - "52 a.C."
  - "52ac"
  - "52 a c"
  - "52 AC"
tipo: completar
explicacion: "La batalla de Alesia fue el punto de inflexión militar. Aunque hubo resistencias posteriores, 52 a.C. marca el colapso de la organización militar galia unificada frente a Roma."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["numidia", "jugurta", "corrupcion"]
enunciado: "La Guerra de Jugurta (112-106 a.C.) estalló porque el rey de Numidia, Jugurta, se negó a aceptar la división de su reino y comenzó a atacar a aliados romanos. ¿Qué factor romano facilitó inicialmente su rebeldía?"
opciones_explicitas:
  - "La corrupción de los magistrados romanos que fueron sobornados."
  - "La falta de interés de Roma en el norte de África."
  - "La alianza secreta entre Roma y Cartago."
  - "La debilidad del ejército romano tras las Guerras Púnicas."
respuesta: "La corrupción de los magistrados romanos que fueron sobornados."
tipo: mc
explicacion: "La famosa frase \"urbs venalis\" (ciudad a la venta) de Salustio refleja cómo la corrupción en Roma permitió a Jugurta comprar la impunidad inicial, hasta que Mario intervino militarmente."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["domiciano", "trayano", "dacia"]
enunciado: "Tras las dos guerras dacias (101-102 y 105-106 d.C.), Trajano anexionó Dacia. ¿Cuál fue el beneficio económico principal que justificó esta costosa campaña?"
opciones_explicitas:
  - "El control de las minas de oro y plata de los Cárpatos."
  - "El acceso directo al mar Negro para el comercio de grano."
  - "La captura de esclavos para las minas de España."
  - "El monopolio de la sal en la región."
respuesta: "El control de las minas de oro y plata de los Cárpatos."
tipo: mc
explicacion: "Las minas dacias, especialmente las de oro de Alburnus Maior, fueron extremadamente productivas y ayudaron a financiar la administración y los monumentos de Trajano."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["jerusalen", "temple", "cesar"]
enunciado: "Complete la frase: La Primera Guerra Judaica (66-73 d.C.) estalló tras una serie de insultos a la religión judía por parte del procurador romano _____, que provocó la revuelta abierta en Jerusalén."
respuesta: "Gessio Floro"
respuestas_validas:
  - "Gessio Floro"
  - "Gessiofloro"
  - "Gessius Florus"
  - "Floro"
tipo: completar
explicacion: "Gessio Floro saqueó el tesoro del Templo y ejecutó injustamente a ciudadanos judíos, actuando como el detonante final de un conflicto latente por tensiones religiosas y fiscales."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["trayano", "partia", "armenia"]
enunciado: "Trajano anexionó Armenia como provincia en 114 d.C. ¿Qué poder regional era el principal competidor de Roma en esta zona?"
opciones_explicitas:
  - "El Imperio Sasánida."
  - "El Reino de Ponto."
  - "El Imperio Parta."
  - "El Reino de Nabatea."
respuesta: "El Imperio Parta."
tipo: mc
explicacion: "Armenia era un estado tapón disputado entre Roma y Partia. La anexión de Trajano eliminó este tapón, llevando las legiones romanas hasta el Golfo Pérsico, pero fue abandonada por Adriano por ser insostenible."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["petra", "arabia-petraea", "trayano"]
enunciado: "Complete la frase: El reino de Nabatea, rico gracias al comercio de incienso, fue anexionado como provincia Arabia Petraea en el año _____, extendiendo la frontera sur del imperio."
respuesta: 106
respuestas_validas:
  - 106
  - "106 d.C."
  - "106dc"
  - "106 dc"
tipo: completar
explicacion: "La anexión fue pacífica, posiblemente por la muerte del rey nabateo sin heredero varón, permitiendo a Roma controlar las rutas comerciales del sur y proteger Egipto."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["cimbrios", "teutones", "migra"]
enunciado: "Las guerras contra los Cimbrios y Teutones (113-101 a.C.) fueron causadas por:"
opciones_explicitas:
  - "Una invasión planificada por el rey persa."
  - "La migración de pueblos germánicos y celtas hacia el sur y este, desplazados por cambios climáticos o presión demográfica."
  - "Un ataque preventivo de Roma para conquistar Germania."
  - "La búsqueda de oro en las minas de España."
respuesta: "La migración de pueblos germánicos y celtas hacia el sur y este, desplazados por cambios climáticos o presión demográfica."
tipo: mc
explicacion: "No fue una invasión militar tradicional, sino una migración masiva de pueblos enteros (familias, ganado) que chocó con la expansión romana, causando graves derrotas iniciales a Roma antes de la victoria de Mario."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["moesia", "danubio", "frontiera"]
enunciado: "La creación de la provincia de Moesia (29 a.C.) sirvió principalmente para:"
opciones_explicitas:
  - "Proteger la frontera norte del Danubio contra los dacios y tracios."
  - "Controlar las minas de plata de Dacia."
  - "Acceder al comercio de la ruta de la seda."
  - "Defender Grecia de los godos."
respuesta: "Proteger la frontera norte del Danubio contra los dacios y tracios."
tipo: mc
explicacion: "Moesia se estableció como una provincia militar clave para estabilizar la frontera del Danubio, que se convertiría en la línea de defensa contra los pueblos germánicos y dacios."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["trayano", "mapa", "maxima"]
enunciado: "El Imperio Romano alcanzó su máxima extensión territorial bajo el reinado de:"
opciones_explicitas:
  - "Augusto."
  - "Trajano."
  - "Adriano."
  - "Constantino."
respuesta: "Trajano."
tipo: mc
explicacion: "Bajo Trajano (98-117 d.C.), el imperio se expandió al máximo, incluyendo Dacia, Mesopotamia y Arabia, aunque estas últimas conquistas orientales fueron rápidamente abandonadas por su sucesor Adriano."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["marcomanos", "marco-aurelio", "germania"]
enunciado: "Durante el reinado de Marco Aurelio, las guerras marcománicas (166-180 d.C.) fueron causadas por:"
opciones_explicitas:
  - "La invasión de pueblos germánicos (marcomanos, cuados) a través del Danubio, presionados por pueblos del este."
  - "La revuelta de los esclavos en Italia."
  - "La caída del muro de Adriano."
  - "La disputa por el trono de Armenia."
respuesta: "La invasión de pueblos germánicos (marcomanos, cuados) a través del Danubio, presionados por pueblos del este."
tipo: mc
explicacion: "Estas guerras marcaron el fin de la seguridad fronteriza y el inicio de una crisis prolongada, donde los bárbaros penetraron profundamente en territorio romano, forzando al emperador a liderar campañas prolongadas."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["chipre", "macedonia", "cobre"]
enunciado: "Chipre fue anexionada como provincia romana en 58 a.C. ¿Qué recurso natural era clave para su importancia económica previa?"
opciones_explicitas:
  - "El cobre (de ahí el nombre \"Cyprium\")."
  - "El oro de las montañas."
  - "El aceite de oliva."
  - "El vino de alta calidad."
respuesta: "El cobre (de ahí el nombre \"Cyprium\")."
tipo: mc
explicacion: "El nombre \"copper\" (cobre) en inglés deriva del latín \"aes Cyprium\" (bronce de Chipre). Su anexion fue parte de la reorganización de las provincias del este por Cicerón como procónsul."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["agripa", "germania", "rin"]
enunciado: "Tras las fallidas campañas de Augusto en Germania (9-16 d.C.) y la derrota de Varo en Teutoburgo (9 d.C.), la frontera occidental/norte se estabilizó en:"
opciones_explicitas:
  - "El río Rin y el Danubio."
  - "El mar del Norte."
  - "El río Elba."
  - "Las Islas Británicas."
respuesta: "El río Rin y el Danubio."
tipo: mc
explicacion: "La derrota de Teutoburgo demostró que Germania era demasiado difícil de conquistar y poblar. Augusto decidió consolidar las fronteras naturales del Rin y el Danubio, deteniendo la expansión hacia el este de Germania."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["numidia", "provincia", "africa"]
enunciado: "Tras la muerte del rey Juba II y la posterior anexión de Numidia, esta región se unió a la provincia de:"
opciones_explicitas:
  - "África Proconsular."
  - "Egipto."
  - "Cirenaica."
  - "Mauritania."
respuesta: "África Proconsular."
tipo: mc
explicacion: "La anexión de Numidia (posterior a la era de Juba II y la caída de Masinisa) expandió la provincia de África hacia el este, integrando la rica tierra agrícola numidia en el corazón del aprovisionamiento de Roma."
```

```
metadata:
  materia: "historia_profunda"
  tema: "expansion-del-imperio-romano"
  nivel: "intermedio"
  tags: ["domiciano", "decebalo", "trayano"]
enunciado: "La Segunda Guerra Dacia (105-106 d.C.) fue necesaria porque el rey Decébalo:"
opciones_explicitas:
  - "Había violado el tratado de paz anterior y rearmado al reino."
  - "Había aliado con los partas."
  - "Se había convertido al cristianismo."
  - "Había atacado a los egipcios."
respuesta: "Había violado el tratado de paz anterior y rearmado al reino."
tipo: mc
explicacion: "Aunque la primera guerra fue victoriosa para Roma, Decébalo logró mantener la independencia nominal rearmándose en secreto. Trajano volvió para asegurar la anexión total y eliminar la amenaza fronteriza."
```

