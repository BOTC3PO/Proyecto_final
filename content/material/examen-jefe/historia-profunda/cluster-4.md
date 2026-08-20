# Examen jefe — De Mesoamérica al Cosmos

> Logro #102. Completaste el examen que abarca desde las civilizaciones precolombinas hasta la expansión del universo. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **124 preguntas totales** en 5/5 secciones.

---

## Sección: civilizaciones-de-america-precolombinas (24 preguntas)

```
### 2 — Estructura política inca
```

```
### 3 — Sistema de escritura azteca
```

```
### 4 — Agricultura en el Valle de México
```

```
### 5 — Descubrimiento de la pirámide de Kukulkán
```

```
### 6 — Colapso de la civilización maya clásica
```

```
### 7 — Lengua franca del Tahuantinsuyo
```

```
### 8 — Calendario maya
```

```
### 9 — Sacrificio humano azteca
```

```
### 10 — Qhapaq Ñan
```

```
### 11 — Escritura jeroglífica maya
```

```
### 12 — Sapa Inca
```

```
### 13 — Tenochtitlan y la Triple Alianza
```

```
### 14 — Quipu inca
```

```
### 15 — Chichén Itzá y el equinoccio
```

```
### 16 — Mesoamérica vs América del Sur
```

```
### 17 — Tlaxcala y los españoles
```

```
### 18 — Machu Picchu
```

```
### 19 — Cosecha principal maya
```

```
### 20 — Conquista de Tenochtitlan
```

```
### 21 — Pukara y Chavín
```

```
### 22 — Calendario de Cuenta Larga
```

```
### 23 — Mitmaes
```

```
### 24 — Teotihuacán
```

```
### 25 — Yanaconas
```

## Sección: conquista-colonizacion-america (25 preguntas)

```
metadata:
  materia: "historia"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["encuentro", "columbus", "europa"]

tipo: mc
opciones_explicitas: ["América", "Asia", "África", "Oceanía"]

enunciado: "En el año 1492, el viaje de Cristóbal Colón buscaba una ruta comercial hacia ___."

explicacion: |
  Colón buscaba una ruta hacia las Indias (Asia) navegando hacia el oeste, pero se encontró con un continente desconocido para los europeos.
```

```
metadata:
  materia: "historia"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["aztecas", "conquista", "mexico"]

variables:
  escenario: uno_de([
    ["Hernán Cortés", "Tenochtitlán", "Mexicas"],
    ["Francisco Pizarro", "Cuzco", "Incas"]
  ])

tipo: completar
respuestas_validas: ["Hernán Cortés", "Tenochtitlán", "Mexicas"]

enunciado: "El conquistador español que lideró la caída del imperio de los {escenario[2]} fue {escenario[0]}, tomando como centro la ciudad de {escenario[1]}."

pasos:
  - "Identificar al líder de la expedición."
  - "Identificar el nombre de la capital del imperio conquistado."
  - "Identificar el nombre del pueblo originario."

explicacion: |
  {escenario[0]} lideró la expedición que sometió al imperio de los {escenario[2]} en el territorio que hoy es México.
```

```
metadata:
  materia: "historia"
  tema: "conquista_colonizacion_america"
  nivel: "avanzado"
  tags: ["tratado", "espana", "portugal"]

tipo: mc
opciones_explicitas: ["España", "Portugal", "Inglaterra", "Francia"]

enunciado: "El Tratado de Tordesillas (1494) dividió las zonas de exploración y conquista entre España y ___."

explicacion: |
  El tratado estableció una línea de demarcación que otorgaba a Portugal las tierras al este de la línea (lo que luego sería Brasil) y a España las tierras al oeste.
```

```
metadata:
  materia: "historia"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["biologia", "enfermedades", "demografia"]

tipo: completar
tolerancia_abs: 0

enunciado: "Además de las guerras, un factor determinante en la caída de la población indígena fue la llegada de enfermedades como la viruela. ¿El efecto demográfico fue de aumento o disminución? (Escribe 'aumento' o 'disminución')"

respuestas_validas: ["aumento", "disminución"]

explicacion: |
  La introducción de patógenos europeos causó una catástrofe demográfica en las poblaciones originarias.
```

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
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["demografia", "enfermedades"]

respuesta: "viruela"
tipo: completar
respuestas_validas: ["viruela", "viruela", "sarampión", "sarampión"]

enunciado: "Uno de los factores biológicos más devastadores durante la conquista fue la propagación de la ___, enfermedad que causó una mortalidad masiva en las poblaciones indígenas debido a la falta de inmunidad previa."

explicacion: |
  La viruela fue una de las principales causas del colapso demográfico, ya que los sistemas inmunológicos de los pueblos originarios no estaban preparados para virus provenientes de Eurasia y África.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "avanzado"
  tags: ["proceso", "causas"]

opciones_explicitas: ["Llegada de patógenos", "Desestructuración social", "Colapso demográfico masivo"]
respuesta: ["Llegada de patógenos", "Desestructuración social", "Colapso demográfico masivo"]
tipo: ordenar

enunciado: "Ordene cronológicamente los procesos que explican la catástrofe demográfica en el continente americano:"

explicacion: |
  Primero llegaron los agentes biológicos que causaron epidemias rápidas; esto desarticuló la organización social y familiar (desestructuración), lo que finalmente derivó en una caída demográfica sin precedentes.
```

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
respuestas_validas: ["sarampión", "sarampión"]

explicacion: |
  Al ser virus nuevos para estas poblaciones, no existían anticuerpos previos, lo que permitía que la enfermedad se propagara de forma explosiva entre comunidades enteras.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["encomienda", "mano_de_obra", "colonizacion"]

respuesta: "tributo"
tipo: "completar"
respuestas_validas: ["tributo"]

enunciado: "En el sistema de la encomienda, la Corona española otorgaba a un encomendero el derecho de recibir ___ en forma de trabajo o productos por parte de los indígenas a cambio de su evangelización."

explicacion: |
  La encomienda era una institución donde se asignaba un grupo de indígenas a un español (encomendero) para que este los protegiera y evangelizara, a cambio de tributos o trabajo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["mita", "mineria", "potosi"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [[["Potosí", "Plata"], ["Huancavelica", "Mercurio"]]]

respuesta: escenarios[escenario_idx][1
tipo: "mc"
opciones_explicitas: ["Plata", "Mercurio", "Oro", "Azogue"]

enunciado: "Durante la colonia, la mita fue un sistema de trabajo obligatorio para los indígenas. En el caso de la mita de Potosí, el recurso principal extraído era el/la {escenarios[escenario_idx][0]}."

explicacion: |
  La mita minera fue una adaptación de la mita incaica utilizada por los españoles para asegurar mano de obra en las minas de plata de Potosí y de mercurio en Huancavelica.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "avanzado"
  tags: ["orden", "procesos_coloniales"]

respuesta: ["Conquista", "Encomienda", "Mita"]
tipo: "ordenar"
opciones_explicitas: ["Mita", "Conquista", "Encomienda"]

enunciado: "Ordene cronológicamente las etapas de la organización del trabajo y control de población en el continente americano:"

explicacion: |
  Primero se produjo la Conquista militar, seguida por la Encomienda (control de tributo/evangelización) y finalmente la consolidación de sistemas de trabajo forzado como la Mita para la minería intensiva.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["intercambio_colombino", "biologia", "historia"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [
    ["maíz", "Eurasia", "Europa"],
    ["caballo", "América", "Europa"],
    ["viruela", "América", "Eurasia"]
  ]

enunciado: "Tras el contacto de 1492, el intercambio colombino permitió que el {datos[escenario_idx][0]} fuera llevado desde {datos[escenario_idx][1]} hacia {datos[escenario_idx][2]}."

respuesta: datos[escenario_idx][2
tipo: mc
opciones_explicitas: ["América", "Europa", "África", "Asia"]

explicacion: |
  El intercambio colombino fue el flujo masivo de plantas, animales y patógenos entre el Viejo y el Nuevo Mundo que transformó la ecología y la demografía global.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["demografia", "enfermedades", "impacto"]

variables:
  enfermedad_idx: uno_de([0, 1])
  enfermedades: [
    ["viruela", "catastrófico"],
    ["sarampión", "catastrófico"]
  ]

enunciado: "La llegada de la {enfermedades[enfermedad_idx][0]} a América tuvo un impacto ___ en la población indígena."

respuesta: enfermedades[enfermedad_idx][1
tipo: completar
respuestas_validas: ["catastrófico"]

explicacion: |
  Las poblaciones indígenas de América no tenían inmunidad contra enfermedades euroasiáticas como la viruela o el sarampión, lo que causó un colapso demográfico masivo.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "avanzado"
  tags: ["procesos", "historia"]

respuesta: ["Llegada de Colón", "Introducción de especies", "Transformación ecológica"]
tipo: ordenar
opciones_explicitas: ["Llegada de Colón", "Introducción de especies", "Transformación ecológica", "Descubrimiento de oro"]

explicacion: |
  El proceso comenzó con el contacto inicial, seguido por la transferencia biológica de especies y culminó en una transformación ecológica y cultural permanente de ambos hemisferios.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["intercambio_colombino", "botanica"]

variables:
  escenario: [[ "maíz", "América" ], [ "trigo", "Eurasia" ], [ "papa", "América" ], [ "arroz", "Eurasia" ]]
  idx: uno_de([0,1,2,3])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["América", "Eurasia", "África", "Oceanía"]

enunciado: "El {escenario[idx][0]} fue un producto fundamental que llegó al Viejo Mundo proveniente de _______."

explicacion: |
  El intercambio colombino permitió que productos como el {escenario[idx][0]} transformaran la dieta en Europa y Asia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["intercambio_colombino", "animales"]

variables:
  escenario: [[ "caballo", "Eurasia" ], [ "pavo", "América" ], [ "cerdo", "Eurasia" ], [ "tomate", "América" ]]
  idx: uno_de([0,1,2,3])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["América", "Eurasia", "Oceanía", "África"]

enunciado: "En el proceso de colonización, el {escenario[idx][0]} fue un elemento que llegó a América desde _______."

explicacion: |
  Los animales domésticos como el {escenario[idx][0]} fueron introducidos por los europeos y cambiaron el paisaje americano.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["intercambio_colombino", "logica"]

variables:
  escenario: [[ "Cacao", "América" ], [ "Café", "Eurasia" ], [ "Azúcar", "Eurasia" ], [ "Tabaco", "América" ]]
  idx: uno_de([0,1,2,3])

respuesta: escenario[idx][1
tipo: completar
respuestas_validas: ["América", "Eurasia"]

enunciado: "El producto {escenario[idx][0]} es originario de _______."

explicacion: |
  El intercambio fue bidireccional: el {escenario[idx][0]} fluyó de un continente al otro.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "avanzado"
  tags: ["intercambio_colombino", "orden"]

variables:
  escenario: [[ "Maíz, Trigo, Caballo", "América, Eurasia, Eurasia" ], [ "Papa, Café, Cerdo", "América, Eurasia, Eurasia" ]]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1
tipo: ordenar
opciones_explicitas: ["América, Eurasia, Eurasia", "Eurasia, América, América", "Eurasia, Eurasia, América"]

enunciado: "Ordena el origen de los siguientes productos: {escenario[idx][0]}"

explicacion: |
  La secuencia correcta refleja qué productos venían de América y cuáles de Eurasia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["intercambio_colombino", "impacto"]

variables:
  escenario: [[ "Cebolla", "Eurasia" ], [ "Cacao", "América" ], [ "Cangrejo", "América" ], [ "Cabra", "Eurasia" ]]
  idx: uno_de([0,1,2,3])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["América", "Eurasia"]

enunciado: "El {escenario[idx][0]} es un ejemplo de producto que se originó en _______."

explicacion: |
  El intercambio biológico alteró la demografía y la economía global.
```

## Sección: conquista-tierra-firme (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "basico"
  tags: ["evolucion", "plantas"]

respuesta: "plantas"
tipo: completar
respuestas_validas: ["plantas"]

enunciado: "Las primeras formas de vida en colonizar la tierra firme fueron las ___."

explicacion: |
  Hace aproximadamente 470 millones de años, las plantas fueron las pioneras en la transición del medio acuático al terrestre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["cronologia", "evolucion"]

variables:
  escenario: uno_de([
    ["plantas", "470", "artrópodos"],
    ["artrópodos", "370", "plantas"],
    ["tetrápodos", "370", "artrópodos"]
  ])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["plantas", "artrópodos", "tetrápodos"]

enunciado: "De acuerdo con el registro fósil, ¿qué grupo fue el primero en colonizar la tierra firme hace {escenario[2]} millones de años?"

explicacion: |
  El orden de colonización fue: 1° Plantas (~470 Ma), 2° Artrópodos y 3° Tetrápodos (~370 Ma).
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "basico"
  tags: ["tetrapodos", "evolucion"]

respuesta: 370
tipo: completar
tolerancia_abs: 5

enunciado: "Los primeros tetrápodos comenzaron su expansión por tierra firme hace aproximadamente ___ millones de años."

pasos:
  - "Identificar el grupo de vertebrados con cuatro extremidades."
  - "Localizar su aparición en la línea de tiempo de la conquista terrestre."

explicacion: |
  Los tetrápodos aparecieron en el registro fósil hace unos 370 millones de años, mucho después de las plantas y los artrópodos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "avanzado"
  tags: ["orden", "evolucion"]

respuesta: ["plantas", "artrópodos", "tetrápodos"]
tipo: ordenar
opciones_explicitas: ["plantas", "artrópodos", "tetrápodos"]

enunciado: "Ordene cronológicamente los grupos que colonizaron la tierra firme, desde el más antiguo al más reciente:"

explicacion: |
  La secuencia correcta es: Plantas (470 Ma) -> Artrópodos -> Tetrápodos (370 Ma).
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["comparacion", "tiempo"]

variables:
  datos: uno_de([
    ["plantas", "artrópodos"],
    ["artrópodos", "tetrápodos"],
    ["plantas", "tetrápodos"]
  ])

respuesta: datos[1
tipo: mc
opciones_explicitas: ["plantas", "artrópodos", "tetrápodos"]

enunciado: "Si las {datos[0]} colonizaron la tierra hace 470 millones de años, ¿qué grupo colonizó después de ellas pero antes que los tetrápodos?"

explicacion: |
  El orden cronológico es: Plantas -> Artrópodos -> Tetrápodos.
```

```
metadata:
  materia: "biologia"
  tema: "adaptaciones_terrestres"
  nivel: "basico"
  tags: ["cuticula", "deshidratacion"]

respuesta: "cuticula"
tipo: completar
respuestas_validas: ["cuticula"]

enunciado: "Para evitar la pérdida excesiva de agua por evaporación en ambientes terrestres, muchos organismos han desarrollado una capa protectora externa llamada ___."

explicacion: |
  La cutícula es una capa cerosa e impermeable que sella la superficie del organismo, permitiendo la vida en medios secos al minimizar la deshidratación.
```

```
metadata:
  materia: "biologia"
  tema: "adaptaciones_terrestres"
  nivel: "intermedio"
  tags: ["soporte", "esqueleto"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["agua", "flotabilidad"], ["aire", "gravedad"]]

respuesta: uno_de(["esqueleto interno", "flotabilidad"])
tipo: mc
opciones_explicitas: ["esqueleto interno", "flotabilidad", "flotabilidad neutra", "soporte hidrostático"]

enunciado: "En el medio acuático, el empuje compensa el peso. Sin embargo, al pasar a vivir en el {datos[escenario_idx][0]}, los organismos necesitan estructuras de soporte para vencer la {datos[escenario_idx][1]}."

explicacion: |
  En tierra, la gravedad actúa directamente sobre el cuerpo sin la ayuda del empuje hidrostático, lo que requiere estructuras rígidas (como esqueletos) para mantener la forma y permitir el movimiento.
```

```
metadata:
  materia: "biologia"
  tema: "adaptaciones_terrestres"
  nivel: "basico"
  tags: ["respiracion", "pulmones"]

respuesta: "pulmones"
tipo: mc
opciones_explicitas: ["branquias", "pulmones", "piel desnuda", "estomas"]

enunciado: "A diferencia de las branquias, que extraen oxígeno disuelto en agua, los animales terrestres suelen desarrollar ___ para captar el oxígeno presente en el aire."

explicacion: |
  Los pulmones o estructuras similares (como los traqueal en insectos) permiten la difusión de gases en un medio gaseoso sin que las superficies respiratorias se colapsen por falta de soporte líquido.
```

```
metadata:
  materia: "biologia"
  tema: "adaptaciones_terrestres"
  nivel: "avanzado"
  tags: ["evolucion", "respiracion"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [
    ["branquias", "agua"],
    ["pulmones", "aire"]
  ]

respuesta: uno_de(["branquias", "pulmones"])
tipo: completar
respuestas_validas: ["branquias", "pulmones"]

enunciado: "Si un organismo evoluciona de un medio de {escenarios[caso_idx][1]} a uno de aire, su sistema de intercambio gaseoso debe pasar de tener {escenarios[caso_idx][0]} a tener ___."

explicacion: |
  La transición del agua al aire exige un cambio radical: de estructuras que dependen de la humedad constante (branquias) a órganos protegidos que eviten el colapso y la sequedad (pulmones).
```

```
metadata:
  materia: "biologia"
  tema: "adaptaciones_terrestres"
  nivel: "avanzado"
  tags: ["evolucion", "secuencia"]

respuesta: ["cuticula", "soporte", "pulmones"]
tipo: ordenar
opciones_explicitas: ["cuticula", "soporte", "pulmones", "branquias", "flotabilidad"]

enunciado: "Ordena las adaptaciones necesarias para colonizar la tierra firme, desde la prevención de la sequedad hasta la locomoción y la respiración:"

pasos:
  - "Primero: Evitar la deshidratación."
  - "Segundo: Mantener la forma contra la gravedad."
  - "Tercero: Obtener oxígeno del medio gaseoso."

explicacion: |
  La colonización de la tierra requirió primero evitar la muerte por sequedad (cutícula), luego desarrollar estructuras que sostengan el peso (soporte/esqueleto) y finalmente optimizar la captura de oxígeno (pulmones).
```

```
metadata:
  materia: "biologia"
  tema: "evolucion_vertebrados"
  nivel: "intermedio"
  tags: ["evolucion", "tetrapodos", "sarcopterigios"]

respuesta: "sarcopterigios"
tipo: completar
respuestas_validas: ["sarcopterigios", "peces de aletas lobuladas"]

enunciado: "Los tetrápodos evolucionaron a partir de un grupo específico de peces con aletas lobuladas conocidos como ___."

explicacion: |
  Los sarcopterigios (del griego 'sarcopteryx', aleta carnosa) son peces que poseen aletas con una estructura ósea similar a la de los miembros de los tetrápodos, lo que permitió la transición hacia la vida terrestre.
```

```
metadata:
  materia: "biologia"
  tema: "evolucion_vertebrados"
  nivel: "intermedio"
  tags: ["tiktaalik", "transicion", "paleontologia"]

variables:
  escenario: uno_de([
    ["Tiktaalik roseae", "un fósil que muestra una transición entre peces y anfibios"],
    ["Eusthenopteron", "un pez sarcopterigio más primitivo"],
    ["Panderichthys", "un pez que muestra características de transición"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["un fósil que muestra una transición entre peces y anfibios", "un pez sarcopterigio más primitivo", "un pez que muestra características de transición"]

enunciado: "El fósil {escenario[0]} es fundamental para la paleontología porque se considera {escenario[1]}."

explicacion: |
  Tiktaalik es un ejemplo clásico de morfología de transición, poseyendo características de peces (escamas, branquias) y de tetrápodos (cuello, articulaciones en las aletas para soportar peso).
```

```
metadata:
  materia: "biologia"
  tema: "evolucion_vertebrados"
  nivel: "avanzado"
  tags: ["morfologia", "transicion"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que los primeros tetrápodos aparecieron de forma súbita sin formas de transición con aletas lobuladas?"

explicacion: |
  La evidencia fósil demuestra una transición gradual donde las estructuras de soporte en las aletas de los sarcopterigios se modificaron para permitir el movimiento en ambientes poco profundos o terrestres.
```

```
metadata:
  materia: "biologia"
  tema: "evolucion_vertebrados"
  nivel: "intermedio"
  tags: ["orden_evolutivo"]

opciones_explicitas: ["Peces Actinopterigios", "Peces Sarcopterigios", "Tetrápodos"]
respuesta: ["Peces Actinopterigios", "Peces Sarcopterigios", "Tetrápodos"]
tipo: ordenar

enunciado: "Ordena cronológicamente la línea evolutiva que lleva de los peces comunes a los vertebrados con cuatro extremidades:"

pasos:
  - "Identifica el grupo de peces con aletas radiadas (no lobuladas)."
  - "Identifica el grupo con aletas carnosas (base de la evolución)."
  - "Identifica el grupo con extremidades articuladas."

explicacion: |
  La evolución muestra un paso de la radiación de las aletas (actinopterigios) hacia la especialización de la base de la aleta (sarcopterigios) y finalmente el desarrollo de miembros (tetrápodos).
```

```
metadata:
  materia: "biologia"
  tema: "evolucion_vertebrados"
  nivel: "basico"
  tags: ["anatomia", "extremidades"]

variables:
  caracteristica: uno_de([
    ["presencia de cuello", "permite mover la cabeza independientemente del tronco"],
    ["presencia de escamas", "protección contra la desecación"],
    ["presencia de branquias", "respiración acuática"]
  ])

respuesta: caracteristica[0
tipo: mc
opciones_explicitas: ["presencia de cuello", "presencia de escamas", "presencia de branquias"]

enunciado: "Una de las innovaciones morfológicas clave observada en fósiles de transición como Tiktaalik fue la {caracteristica}."

explicacion: |
  A diferencia de los peces, que tienen la cabeza fusionada al tronco, los primeros tetrápodos y sus ancestros de transición desarrollaron un cuello, permitiendo mayor movilidad para alimentarse y navegar en aguas someras.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["botanica", "paleoecologia", "ciclo_del_agua"]

variables:
  escenario: uno_de(["bosque_denso", "estepa_abierta"])
  tipo_suelo: uno_de(["suelo_desnudo", "suelo_cubierto"])

enunciado: "Durante la conquista de Tierra Firme, la expansión de la vegetación tipo {escenario} sobre un {tipo_suelo} modificó drásticamente la escorrentía superficial."

opciones_explicitas:
  - "Aumentó la escorrentía"
  - "Disminuyó la escorrentía"
  - "No hubo cambios"

respuesta: "Disminuyó la escorrentía"
tipo: mc

explicacion: |
  La presencia de plantas y la cobertura vegetal actúan como una barrera física que intercepta la lluvia y permite la infiltración en el suelo, reduciendo la velocidad del agua superficial y, por ende, la escorrentía.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "avanzado"
  tags: ["carbono", "fotosintesis", "biomasa"]

variables:
  valor_carbono: random_float(100.0, 500.0)

enunciado: "Si una masa forestal emergente en Tierra Firme secuestra aproximadamente {valor_carbono} unidades de carbono por hectárea, el balance neto de la atmósfera durante este periodo de colonización vegetal fue de un valor ___ (positivo/negativo) en términos de almacenamiento de carbono."

respuestas_validas:
  - "positivo"

respuesta: "positivo"
tipo: completar

explicacion: |
  La colonización de las masas continentales por las plantas permitió un secuestro masivo de CO2 atmosférico en forma de biomasa orgánica, transformando el ciclo del carbono de un estado de equilibrio a uno de almacenamiento neto.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["ecologia", "sucesion", "animales"]

opciones_explicitas:
  - "Aparición de plantas pioneras"
  - "Estabilización del suelo y ciclo del agua"
  - "Colonización por animales terrestres"

respuesta: ["Aparición de plantas pioneras", "Estabilización del suelo y ciclo del agua", "Colonización por animales terrestres"]
tipo: ordenar

explicacion: |
  La sucesión ecológica comenzó con la colonización de sustratos desnudos por plantas pioneras, lo que permitió la formación de suelos y la regulación hídrica, creando finalmente el hábitat necesario para la fauna terrestre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "basico"
  tags: ["agua", "evapotranspiracion", "clima"]

enunciado: "El aumento de la cobertura vegetal en Tierra Firme incrementó la tasa de ___ (evapotranspiración/precipitación) hacia la atmósfera, alterando los patrones climáticos locales."

respuestas_validas:
  - "evapotranspiración"

respuesta: "evapotranspiración"
tipo: completar

explicacion: |
  Las plantas no solo retienen agua en el suelo, sino que la devuelven a la atmósfera a través de la transpiración, un proceso clave que regula la humedad atmosférica en los nuevos continentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["fauna", "hábitat", "nutrientes"]

variables:
  factor_clave: uno_de(["nutrientes", "refugio", "alimento"])

enunciado: "La transformación del paisaje mediante la vegetación proporcionó a los animales terrestres un factor crítico para su expansión: {factor_clave}."

opciones_explicitas:
  - "Nutrientes"
  - "Refugio"
  - "Alimento"

respuesta: uno_de(["Nutrientes", "Refugio", "Alimento"])
tipo: mc

explicacion: |
  La vegetación no solo provee alimento, sino que estabiliza el suelo (nutrientes) y crea estructuras físicas para la protección (refugio), permitiendo la diversificación de nichos para la fauna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "basico"
  tags: ["conquista", "exploracion"]

variables:
  datos: [["expedición de Colón", "1492"], ["expedición de Cortés", "1519"], ["expedición de Pizarro", "1532"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1492", "1519", "1532"]

enunciado: "El año en que se produjo el evento de la {datos[idx][0]} fue en el año ___."

explicacion: |
  El año mencionado corresponde al inicio de la era de exploración y conquista según el escenario seleccionado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_ferme"
  nivel: "intermedio"
  tags: ["ordenar", "cronologia"]

variables:
  eventos: [["Llegada a las Antillas", "Llegada a México", "Conquista del Imperio Inca"], ["Llegada a las Antillas", "Llegada a México", "Conquista del Imperio Inca"]]

respuesta: ["Llegada a las Antillas", "Llegada a México", "Conquista del Imperio Inca"]
tipo: ordenar
opciones_explicitas: ["Llegada a las Antillas", "Llegada a México", "Conquista del Imperio Inca"]

enunciado: "Ordena cronológicamente los hitos de la conquista española en Tierra Firme:"

explicacion: |
  La secuencia correcta comienza con las Antillas, sigue con la caída de los Aztecas y finaliza con la conquista de los Incas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "basico"
  tags: ["personajes"]

variables:
  parejas: [["Hernán Cortés", "Imperio Azteca"], ["Francisco Pizarro", "Imperio Inca"], ["Diego Velázquez", "Cuba"]]
  idx: uno_de([0,1,2])

respuesta: parejas[idx][1
tipo: mc
opciones_explicitas: ["Imperio Azteca", "Imperio Inca", "Cuba"]

enunciado: "El conquistador {parejas[idx][0]} lideró la expedición contra el ___."

explicacion: |
  Cada conquistador estuvo vinculado a una región o imperio específico durante la expansión española.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "avanzado"
  tags: ["consecuencias"]

variables:
  datos: [["caída demográfica", "positiva"], ["encuentro cultural", "positiva"], ["colonización", "positiva"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["positiva"]

enunciado: "Históricamente, el proceso de la {datos[idx][0]} se analiza como una consecuencia de carácter ___."

explicacion: |
  El término utilizado depende de la perspectiva historiográfica aplicada al evento seleccionado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["ordenar", "cronologia"]

variables:
  secuencia: ["Exploración de las Antillas", "Conquista de México", "Conquista del Perú"]

respuesta: ["Exploración de las Antillas", "Conquista de México", "Conquista del Perú"]
tipo: ordenar
opciones_explicitas: ["Exploración de las Antillas", "Conquista de México", "Conquista del Perú"]

enunciado: "Ordena los procesos de expansión territorial en orden cronológico:"

explicacion: |
  La expansión se movió desde el Caribe hacia el continente (México) y luego hacia el sur (Perú).
```

## Sección: conquista-y-colonia-argentina (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["conquista", "fundaciones"]

variables:
  escenario: uno_de([
    ["Santiago del Estero", "1553"],
    ["Córdoba", "1609"],
    ["Buenos Aires (segunda)", "1580"]
  ])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["Santiago del Estero", "Córdoba", "Buenos Aires (segunda)"]

enunciado: "La ciudad de {escenario[0]} fue fundada en el año {escenario[1]}."

explicacion: |
  La fundación de {escenario[0]} en {escenario[1]} marcó un hito en la organización territorial de la región.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["ordenar", "cronologia"]

opciones_explicitas: ["Fundación de Santiago del Estero", "Segunda fundación de Buenos Aires", "Fundación de Córdoba"]

respuesta: ["Fundación de Santiago del Estero", "Segunda fundación de Buenos Aires", "Fundación de Córdoba"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes eventos de la conquista y colonización:"

pasos:
  - "Identificar la fecha de Santiago del Estero (1553)"
  - "Identificar la fecha de la segunda Buenos Aires (1580)"
  - "Identificar la fecha de Córdoba (1609)"

explicacion: |
  El orden cronológico correcto es: Santiago del Estero (1553), Buenos Aires (1580) y Córdoba (1609).
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["buenos_aires", "conquista"]

respuesta: "Juan de Garay"
tipo: completar
respuestas_validas: ["Juan de Garay"]

enunciado: "La segunda fundación de la ciudad de Buenos Aires en 1580 fue liderada por ___."

explicacion: |
  Tras el fracaso de la primera fundación de Pedro de Mendoza, Juan de Garay estableció la segunda fundación en 1580.
```

```
metadata:
  materia: "historia_profucha"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["cordoba", "fundacion"]

respuesta: "1609"
tipo: completar
tolerancia_abs: 0

enunciado: "La ciudad de Córdoba fue fundada en el año ___."

explicacion: |
  Córdoba fue fundada en 1609, convirtiéndose en un centro neurálgico para la educación y la administración colonial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["geografia_historica"]

variables:
  datos: [
    ["Santiago del Estero", "1553"],
    ["Córdoba", "1609"],
    ["Buenos Aires", "1580"]
  ]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["1553", "1609", "1580"]

enunciado: "Si nos referimos a la fundación de {datos[idx][0]}, el año correspondiente es ___."

explicacion: |
  La fecha correcta para la fundación de {datos[idx][0]} es {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["organizacion_colonial", "virreinatos"]

respuesta: "Perú"
tipo: completar
respuestas_validas: ["Perú"]

enunciado: "Antes de la creación del Virreinato del Río de la Plata, el territorio que hoy ocupa Argentina pertenecía al Virreinato del ___."

explicacion: |
  Durante gran parte de la era colonial, las tierras rioplatenses dependían de la administración del Virreinato del Perú, con sede en Lima.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["virreinatos", "reformas_borbonicas"]

opciones_explicitas: ["Lima", "Buenos Aires", "Santiago", "Asunción"]
respuesta: "Buenos Aires"
tipo: mc

enunciado: "Con la creación del Virreinato del Río de la Plata en 1776, ¿cuál se convirtió en la nueva capital administrativa?"

explicacion: |
  La creación del Virreinato del Río de la Plata buscaba mejorar la defensa del Atlántico y el control comercial, estableciendo a Buenos Aires como su centro de poder.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["orden_cronologico", "virreinatos"]

opciones_explicitas: ["Virreinato del Perú", "Virreinato del Río de la Plata", "Estado Argentino"]
respuesta: ["Virreinato del Perú", "Virreinato del Río de la Plata", "Estado Argentino"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas de organización política del territorio que hoy es Argentina:"

explicacion: |
  La secuencia correcta comienza con la dependencia del Perú, sigue con la autonomía regional del Río de la Plata y culmina con la formación del Estado nacional.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["capitales", "geografia_colonial"]

variables:
  escenario: uno_de([
    ["1776", "Río de la Plata"],
    ["1542", "Perú"]
  ])

respuesta: "Río de la Plata"
tipo: completar
respuestas_validas: ["Río de la Plata"]

enunciado: "En el año {escenario[0]}, se fundó el Virreinato del {escenario[1]}."

explicacion: |
  La reforma administrativa de 1776 fue fundamental para el desarrollo de la región del Plata.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["reformas", "geopolitica"]

opciones_explicitas: ["Perú", "Río de la Plata"]
respuesta: "Río de la Plata"
tipo: mc

enunciado: "La creación de un nuevo virreinato en 1776 significó que el territorio pasó de depender del Virreinato del Perú a pertenecer al Virreinato del ___."

explicacion: |
  Este cambio permitió una gestión más directa de las rutas comerciales hacia el Atlántico.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["fundacion", "buenos_aires", "conquista"]

tipo: mc
opciones_explicitas: ["Pedro de Mendoza", "Juan de Garay", "Juan de Cabral", "Hernán de Magallanes"]

enunciado: "La primera fundación de la ciudad de Buenos Aires, realizada en 1536, fue liderada por el cual de los siguientes exploradores?"

respuesta: "Pedro de Mendoza"

explicacion: |
  La primera fundación fue un intento fallido liderado por Pedro de Mendoza en 1536, que terminó siendo abandonado debido a las condiciones extremas y los conflictos con los nativos.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["fundacion", "buenos_aires", "fracaso"]

tipo: completar
respuestas_validas: ["fracasó", "prosperó", "fue destruida"]

enunciado: "A diferencia de la segunda fundación, la expedición de Pedro de Mendoza en 1536 ___ y la ciudad fue posteriormente abandonada."

respuesta: "fracasó"

explicacion: |
  La primera fundación de Buenos Aires fracasó debido a la hambruna y los ataques de los pueblos originarios, lo que obligó a los sobrevivientes a retirarse.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["fundacion", "buenos_aires", "juan_de_garay"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Juan de Garay", "Pedro de Mendoza"]

enunciado: "En el año 1580, la segunda fundación de Buenos Aires, que finalmente logró consolidarse y prosperar, fue llevada a cabo por: ___"

datos: [["Juan de Garay", "Juan de Garay"], ["Pedro de Mendoza", "Pedro de Mendoza"]]

explicacion: |
  Juan de Garay lideró la segunda fundación en 1580, estableciendo un asentamiento que sí logró perdurar en el tiempo, a diferencia del intento de 1536.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["cronologia", "fundaciones"]

tipo: ordenar
opciones_explicitas: ["Fundación de Mendoza (1536)", "Fundación de Garay (1580)", "Consolidación de la ciudad"]

respuesta: ["Fundación de Mendoza (1536)", "Fundación de Garay (1580)", "Consolidación de la ciudad"]

enunciado: "Ordene cronológicamente los hitos de la fundación de Buenos Aires:"

explicacion: |
  El proceso comenzó con el intento fallido de Mendoza en 1536, seguido por el intento exitoso de Garay en 1580, lo que permitió la posterior consolidación de la ciudad.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "avanzado"
  tags: ["fundadores", "comparativa"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Garay", "Mendoza"]

enunciado: "Si comparamos los dos intentos de fundación de Buenos Aires, el líder que logró establecer un asentamiento próspero fue ___."

datos: [["Garay", "Garay"], ["Mendoza", "Mendoza"]]

explicacion: |
  Mientras que Mendoza (1536) no logró establecer un asentamiento permanente, Juan de Garay (1580) fue el responsable de la fundación que prosperó.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["mapuche", "resistencia", "territorio"]

respuesta: "mapuche"
tipo: mc

opciones_explicitas: ["incas", "mapuches", "guaraníes", "diaguitas"]

enunciado: "A diferencia de otros pueblos que fueron rápidamente sometidos, ¿qué grupo indígena mantuvo una resistencia activa y una autonomía territorial significativa frente a la expansión colonial en el sur hasta bien entrado el siglo XIX?"

explicacion: |
  El pueblo Mapuche mantuvo una estructura política y militar que les permitió resistir la expansión española y, posteriormente, la consolidación del Estado argentino durante gran parte del siglo XIX.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["mestizaje", "sociedad", "colonia"]

variables:
  escenario: uno_de([["biológico", "cultural"], ["biológico", "político"], ["religioso", "militar"]])

respuesta: escenario[1
tipo: completar

respuestas_validas: ["biológico", "cultural", "político", "religioso", "militar"]

enunciado: "El proceso de mestizaje en el Virreinato del Río de la Plata fue de carácter tanto ___ como ___."

explicacion: |
  El mestizaje no fue solo la unión biológica de españoles e indígenas, sino también un profundo intercambio de costumbres, lenguas y creencias (mestizaje cultural).
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["demografia", "impacto", "enfermedades"]

respuesta: 0.7
tipo: completar
tolerancia_abs: 0.1

enunciado: "Se estima que, debido a las guerras de conquista y, fundamentalmente, a las epidemias traídas por los europeos, la población indígena sufrió una reducción drástica. Si una población original era de 100 personas, ¿cuántas personas (estimado decimal) quedarían tras una reducción del 70%?"

pasos:
  - "Calcular el 70% de la población original (100 * 0.70)."
  - "Restar ese valor al total original (100 - 70)."

explicacion: |
  Las enfermedades como la viruela y el sarampión fueron agentes devastadores que causaron un colapso demográfico en los pueblos originarios.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "avanzado"
  tags: ["encomienda", "sistema", "colonia"]

respuesta: ["encomienda", "mita", "reparto"]
tipo: ordenar

opciones_explicitas: ["encomienda", "mita", "reparto"]

enunciado: "Ordene los siguientes sistemas de trabajo/tributo utilizados por la corona española en América, desde el que se basaba en la asignación de indígenas a un español para evangelización, pasando por el trabajo forzado en minas, hasta el sistema de venta de productos a indígenas en zonas periféricas:"

explicacion: |
  La encomienda fue el sistema inicial de tutela y evangelización; la mita era el trabajo obligatorio en minas; y el reparto de mercancías fue una forma de explotación comercial en las zonas de frontera.
```

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["cosmovision", "religión", "impacto"]

respuesta: "sincretismo"
tipo: completar

respuestas_validas: ["sincretismo", "aislamiento", "extinción"]

enunciado: "La superposición de las creencias religiosas católicas sobre las prácticas espirituales de los pueblos originarios dio lugar a un fenómeno conocido como ___."

explicacion: |
  El sincretismo religioso es la fusión de elementos de distintas religiones, resultando en nuevas expresiones culturales y espirituales que persisten hoy en día.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["conquista", "expediciones"]

variables:
  escenario: uno_de([
    ["La expedición de Pedro de Mendoza (1536) se estableció en un asentamiento que luego fue abandonado debido a las condiciones climáticas y los ataques de los nativos.", "Asentamiento de Buenos Aires"],
    ["La expedición de Juan de Garay (1554) fue fundamental para la consolidación de la presencia española en la región.", "Fundación de la segunda Buenos Aires"]
  ])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["Asentamiento de Buenos Aires", "Fundación de la segunda Buenos Aires", "Fundación de Asunción", "Expedición de Solís"]

enunciado: "De acuerdo con la cronología de la conquista, ¿cuál fue el hito principal del escenario descrito: {escenario[idx][0]}?"

explicacion: |
  El proceso de colonización fue errático. Mendoza fundó el primer asentamiento en 1536, pero fracasó, siendo Garay quien consolidó la presencia española años después.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["instituciones", "virreinato"]

variables:
  caso: uno_de([
    ["El Virreinato del Río de la Plata fue creado para mejorar la defensa y administración del territorio frente a las potencias europeas.", "España"],
    ["La administración de las colonias dependía directamente de la corona de...", "España"]
  ])
  idx: uno_de([0, 1])

respuesta: caso[idx][1
tipo: completar
respuestas_validas: ["España"]

enunciado: "Complete la siguiente afirmación basada en el contexto: {caso[idx][0]}"

explicacion: |
  La creación del Virreinato del Río de la Plata en 1776 fue una respuesta de la corona española a las presiones de Portugal y Gran Bretaña en el Atlántico Sur.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "avanzado"
  tags: ["cronologia", "conquista"]

respuesta: ["Llegada de los españoles al Atlántico", "Fundación de ciudades en el Tucumán", "Establecimiento de las rutas comerciales coloniales"]
tipo: ordenar
opciones_explicitas: ["Llegada de los españoles al Atlántico", "Fundación de ciudades en el Tucumán", "Establecimiento de las rutas comerciales coloniales"]

enunciado: "Ordene cronológicamente los siguientes hitos del proceso de expansión y consolidación en el actual territorio argentino:"

explicacion: |
  Primero se exploró el litoral (Solís/Mendoza), luego se penetró el interior hacia el Tucumán y finalmente se consolidó la red de caminos y comercio colonial.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["instituciones", "cabildo"]

variables:
  situacion: uno_de([
    ["El órgano encargado de la administración de justicia y gobierno en las ciudades coloniales era el...", "Cabildo"],
    ["La institución de gobierno local más importante en las ciudades del Virreinato era el...", "Cabildo"]
  ])
  idx: uno_de([0, 1])

respuesta: situacion[idx][1
tipo: mc
opciones_explicitas: ["Cabildo", "Real Audiencia", "Consejo de Indias", "Corregimiento"]

enunciado: "Identifique la institución mencionada en el siguiente contexto: {situacion[idx][0]}"

explicacion: |
  El Cabildo era la institución de gobierno local que permitía la participación de los vecinos en la administración de la ciudad.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["economia", "monopolio"]

variables:
  modelo: uno_de([
    ["El sistema económico impuesto por la metrópoli que prohibía el comercio con otras naciones era el...", "Monopolio comercial"],
    ["La política de comercio exclusivo de España con sus colonias se denominaba...", "Monopolio comercial"]
  ])
  idx: uno_de([0, 1])

respuesta: modelo[idx][1
tipo: completar
opciones_explicitas: [verdadero, falso]

enunciado: "El sistema de {modelo[idx][0]} fue el eje de la economía virreinal, limitando el crecimiento de puertos como Buenos Aires hasta la creación de la Capitanía General de Buenos Aires.", "verdadero"

explicacion: |
  El monopolio comercial obligaba a que todo el comercio pasara por puertos autorizados (como Sevilla o Cádiz), lo que fomentó el contrabando en el Río de la Plata.
```

## Sección: corrimiento-al-rojo-expansion-universo (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["astronomia", "luz", "doppler"]

tipo: mc
opciones_explicitas: ["El acortamiento de la longitud de onda de la luz", "El estiramiento de la longitud de onda de la luz", "El cambio de color de la luz hacia el azul", "La pérdida de intensidad de la luz"]

enunciado: "En astronomía, el corrimiento al rojo (redshift) se define como ___ de la luz de un objeto que se aleja de un observador."

explicacion: |
  El corrimiento al rojo ocurre cuando la longitud de onda de la radiación electromagnética emitida por un objeto se desplaza hacia valores más largos (hacia el rojo del espectro) debido a que la fuente se aleja.
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["analogia", "doppler"]

tipo: completar
respuestas_validas: ["Efecto Doppler", "Efecto Doppler"]

enunciado: "El fenómeno del corrimiento al rojo es para la luz lo que el ___ es para el sonido."

explicacion: |
  Así como una ambulancia que se aleja produce un sonido más grave (menor frecuencia), la luz de una galaxia que se aleja presenta un corrimiento al rojo (menor frecuencia/mayor longitud de onda).
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["velocidad", "observacion"]

variables:
  escenario: uno_de([[10, "mayor"], [50, "mayor"], [100, "mayor"]])

tipo: mc
opciones_explicitas: ["menor", "mayor", "igual"]

enunciado: "Si observamos que el corrimiento al rojo de una galaxia es de {escenario[0]} unidades, esto indica que su velocidad de alejamiento es ___ que la de una galaxia con corrimiento nulo."

respuesta: escenario[1

explicacion: |
  A mayor corrimiento al rojo, mayor es la velocidad a la que el objeto se está alejando de nosotros (según la ley de Hubble-Lemaître).
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["espectro", "longitud_de_onda"]

tipo: ordenar
opciones_explicitas: ["Violeta", "Verde", "Amarillo", "Rojo", "Infrarrojo"]

enunciado: "Ordena las longitudes de onda de la luz en orden CRECIENTE (de menor a mayor longitud de onda) para entender cómo se desplaza el espectro hacia el rojo."

respuesta: ["Violeta", "Verde", "Amarillo", "Rojo", "Infrarrojo"]

explicacion: |
  El corrimiento al rojo consiste en desplazarse desde las longitudes de onda cortas (violeta/azul) hacia las longitudes de onda largas (rojo/infrarrojo).
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "avanzado"
  tags: ["calculo", "fisica"]

variables:
  datos: uno_de([[500, 510], [600, 610], [700, 710]])

tipo: completar
tolerancia_abs: 0.1

enunciado: "Una estrella emite luz en una longitud de onda de {datos[0]} nm. Debido al corrimiento al rojo, la longitud de onda observada es de ___ nm."

respuesta: datos[1

explicacion: |
  El corrimiento al rojo aumenta la longitud de onda observada respecto a la emitida. En este caso, el valor observado es el segundo elemento de nuestra tabla de datos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["astronomia", "redshift", "expansion"]

respuesta: "rojo"
tipo: mc
opciones_explicitas: ["azul", "rojo", "verde", "infrarrojo"]

enunciado: "Cuando una fuente de luz se aleja de un observador, las longitudes de onda de la luz que recibe se estiran hacia el extremo del espectro visible de color ___."

explicacion: |
  El desplazamiento hacia longitudes de onda más largas (menor frecuencia) se conoce como corrimiento al rojo (redshift).
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["evidencia", "galaxias", "observacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[["galaxias lejanas", "se alejan"], ["galaxias cercanas", "se acercan"]]]

respuesta: datos[escenario_idx][0][1
tipo: mc
opciones_explicitas: ["se acercan", "se alejan", "están estables", "colapsan"]]

enunciado: "La observación de que las {datos[escenario_idx][0][0]} muestran un corrimiento al rojo indica que estas ___ de nosotros."

explicacion: |
  El hecho de que la mayoría de las galaxias distantes presenten corrimiento al rojo es la evidencia fundamental de que el universo se está expandiendo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["definicion", "espectro"]]

respuesta: "alejamiento"
tipo: completar
respuestas_validas: ["alejamiento", "acercamiento", "estacionar"]

enunciado: "En el contexto de la cosmología, un corrimiento al rojo (redshift) es una medida que indica el ___ de una galaxia respecto al observador."

explicacion: |
  El corrimiento al rojo es el cambio hacia longitudes de onda más largas debido al movimiento de alejamiento.
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "avanzado"
  tags: ["ley_de_hubble", "expansion"]

variables:
  distancia_m: uno_de([10, 20, 30])
  velocidad_m: [100, 200, 300]

respuesta: velocidad_m[distancia_m/10 - 1]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si la expansión del universo es uniforme, a mayor distancia, mayor es la velocidad de recesión. Si una galaxia está a una distancia de {distancia_m} Mpc y su velocidad es de {velocidad_m[distancia_m/10 - 1]} km/s, ¿cuál es su velocidad?"

pasos:
  - "Identificar la velocidad correspondiente a la distancia dada según la relación lineal."

explicacion: |
  En un universo en expansión, la velocidad de alejamiento es proporcional a la distancia (Ley de Hubble).
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["orden", "logica"]]

respuesta: ["observación de espectro", "detección de corrimiento al rojo", "conclusión de expansión"]
tipo: ordenar
opciones_explicitas: ["conclusión de expansión", "observación de espectro", "detección de corrimiento al rojo"]

enunciado: "Ordena los pasos lógicos que llevaron a la conclusión de la expansión del universo:"

explicacion: |
  Primero se observa la luz (espectro), luego se detecta el desplazamiento (redshift) y finalmente se infiere la expansión.
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["cosmologia", "espacio_tiempo"]

tipo: mc
opciones_explicitas: ["Las galaxias se desplazan a través del espacio vacío", "El espacio mismo se está estirando entre las galaxias", "Las galaxias se mueven debido a una fuerza centrífuga", "El universo está colapsando hacia un punto central"]

enunciado: "Según el modelo de expansión cósmica, el corrimiento al rojo observado en las galaxias lejanas indica que:"

explicacion: |
  Es un error común pensar que las galaxias viajan 'por' el espacio como proyectiles. En realidad, es la métrica del espacio-tiempo la que se expande, aumentando la distancia entre objetos que no están gravitacionalmente ligados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["analogia", "expansion"]

variables:
  idx: uno_de([0,1])
  escenario: [["puntos en un globo desinflado", "puntos en un globo inflado"], ["distancia constante", "distancia creciente"]]

tipo: completar
respuestas_validas: ["distancia creciente"]

enunciado: "Si imaginamos que las galaxias son puntos dibujados sobre la superficie de un globo que se infla, al aumentar el volumen del globo, la {escenario[idx][0]} entre los puntos se vuelve una {escenario[idx][1]}."

explicacion: |
  La analogía del globo ilustra que no es el objeto el que se mueve por la superficie, sino que la superficie misma crece, separando los puntos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "avanzado"
  tags: ["doppler", "redshift"]

tipo: mc
opciones_explicitas: ["Efecto Doppler", "Efecto Doppler Cosmológico", "Efecto Doppler Gravitacional", "Efecto Doppler de Lorentz"]

enunciado: "Aunque se parece al efecto Doppler acústico, el corrimiento al rojo debido a la expansión del universo se denomina:"

explicacion: |
  El efecto Doppler estándar ocurre por movimiento a través del medio, mientras que el cosmológico se debe a la expansión de la métrica del espacio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["metrica", "espacio_tiempo"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si la expansión del universo es constante, la velocidad de recesión de una galaxia es proporcional a su distancia actual. ¿Cuál es el término técnico para este factor de escala que describe cómo cambia el tamaño del universo con el tiempo? (Escribe la respuesta en inglés, comienza con 'a' y termina con 'e')"

pasos:
  - "Identificar que la expansión se describe mediante el factor de escala."
  - "Recordar el término en inglés: scale factor."

explicacion: |
  El factor de escala 'a(t)' es una función que describe la evolución del tamaño del universo con el tiempo en la métrica de Friedmann-Lemaître-Robertson-Walker.
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["evidencia", "historia_ciencia"]

tipo: ordenar
opciones_explicitas: ["Observación de espectros con corrimiento al rojo", "Formulación de la Ley de Hubble-Lemaître", "Descubrimiento de la expansión del universo"]

enunciado: "Ordena cronológicamente los hitos que permitieron comprender que el universo se está expandiendo:"

explicacion: |
  Primero se observó el desplazamiento en las líneas espectrales (Slipher), luego se formuló la relación matemática (Hubble) y finalmente se consolidó el modelo de un universo en expansión.
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["cosmologia", "big_bang", "evidencia"]

tipo: mc
opciones_explicitas: ["La expansión del espacio", "La rotación de las galaxias", "La formación de agujeros negros", "La existencia de la gravedad"]

enunciado: "El corrimiento al rojo cosmológico es una de las principales evidencias observacionales a favor de la teoría del ___."

explicacion: |
  El corrimiento al rojo indica que las galaxias se alejan de nosotros, lo que implica que el universo se está expandiendo, una pieza clave para la teoría del Big Bang.
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["espectro", "luz", "redshift"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [["se desplaza hacia el rojo", "se desplaza hacia el azul"], ["se aleja del observador", "se acerca al observador"]]

tipo: mc
opciones_explicitas: ["se desplaza hacia el rojo", "se desplaza hacia el azul", "se mantiene constante", "cambia de intensidad"]

enunciado: "Cuando la luz de una galaxia se estira debido a la expansión del universo, su espectro ___."

explicacion: |
  Al expandirse el espacio, la longitud de onda de la luz se estira hacia la parte roja del espectro electromagnético.
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "avanzado"
  tags: ["hubble", "calculo", "expansion"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [[100, 700], [250, 1500]]

tipo: completar
tolerancia_abs: 0.1

enunciado: "Si una galaxia se encuentra a una distancia de {datos[caso_idx][0]} Mpc y su velocidad de recesión es de {datos[caso_idx][1]} km/s, ¿cuál es el valor aproximado de la constante de Hubble (H₀) en km/s/Mpc?"

pasos:
  - "Identificar la velocidad de recesión (v)"
  - "Identificar la distancia (d)"
  - "Aplicar la fórmula H₀ = v / d"

explicacion: |
  Usando la ley de Hubble: H₀ = v / d. Para el caso seleccionado: {datos[caso_idx][1]} / {datos[caso_idx][0]} = {redondear(datos[caso_idx][1] / datos[caso_idx][0], 2)} km/s/Mpc.
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["conceptos", "espacio", "tiempo"]

tipo: ordenar
opciones_explicitas: ["Gran explosión inicial", "Expansión del espacio-tiempo", "Corrimiento al rojo observado", "Universo actual"]

enunciado: "Ordena cronológicamente los eventos relacionados con la expansión y la observación del universo:"

explicacion: |
  El Big Bang da origen a todo, seguido por la expansión, lo que genera el corrimiento al rojo que observamos hoy en las galaxias lejanas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["causa", "espacio", "redshift"]

tipo: completar
respuestas_validas: ["espacio", "tejido", "espacio-tiempo"]

enunciado: "A diferencia del efecto Doppler clásico, el corrimiento al rojo cosmológico es causado por el estiramiento del propio ___ entre las galaxias."

explicacion: |
  En cosmología, no es solo que las galaxias se muevan "a través" del espacio, sino que es el espacio mismo el que se expande.
```

```
metadata:
  materia: "astronomia"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["astronomia", "cosmologia"]

variables:
  datos: [["el espectro de la galaxia se desplaza hacia longitudes de onda más largas", "alejándose"], ["el espectro de la galaxia se desplaza hacia longitudes de onda más cortas", "acercándose"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["alejándose", "acercándose"]

enunciado: "Si observamos que {datos[idx][0]}, esto indica que el objeto se está ___."

explicacion: |
  El corrimiento al rojo (redshift) ocurre cuando la longitud de onda de la luz se estira debido al movimiento de alejamiento, mientras que el corrimiento al azul (blueshift) ocurre cuando la longitud de onda se comprime debido al acercamiento.
```

```
metadata:
  materia: "astronomia"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["espectroscopia", "astronomia"]

variables:
  datos: [["redshift", "alejándose"], ["blueshift", "acercándose"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["alejándose", "acercándose"]

enunciado: "Un astrónomo detecta un fenómeno de {datos[idx][0]} en una galaxia lejana. Esto significa que la galaxia está ___ del observador."

explicacion: |
  El término 'redshift' se asocia con el aumento de la longitud de onda (alejamiento) y 'blueshift' con la disminución (acercamiento).
```

```
metadata:
  materia: "astronomia"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["galaxias", "cosmologia"]

variables:
  datos: [["Luz roja", "alejándose"], ["Luz azul", "acercándose"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["alejándose", "acercándose", "estacionaria"]

enunciado: "Si la luz emitida por un objeto llega con un tono hacia el extremo rojo del espectro, el movimiento es de ___."

explicacion: |
  El corrimiento al rojo es la evidencia fundamental de la expansión del universo, indicando que las galaxias se alejan de nosotros.
```

```
metadata:
  materia: "astronomia"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "alejándose"
tipo: completar
respuestas_validas: ["alejándose", "acercándose"]

enunciado: "Cuando la longitud de onda de la luz de una estrella aumenta debido a su movimiento relativo, decimos que tiene un corrimiento al rojo, lo que significa que la estrella se está ___."

explicacion: |
  El aumento en la longitud de onda ($\lambda$) es la definición física del corrimiento al rojo.
```

```
metadata:
  materia: "astronomia"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["espectro", "movimiento"]

variables:
  datos: [["azul", "acercándose"], ["rojo", "alejándose"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["acercándose", "alejándose"]

enunciado: "Si la luz de un objeto se desplaza hacia el color {datos[idx][0]}, el objeto se está ___."

explicacion: |
  El color azul tiene longitudes de onda más cortas, indicando acercamiento; el rojo, longitudes más largas, indicando alejamiento.
```
