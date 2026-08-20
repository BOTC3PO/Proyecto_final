# Examen jefe — Huella Imperial y Helenística

> Logro #110. Completaste el examen sobre las huellas del imperio bizantino, alejandro magno e ilustración en el clima. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **123 preguntas totales** en 5/5 secciones.

---

## Sección: huella-humana-en-el-clima-inicio (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["revolucion_industrial", "co2", "carbón"]

respuesta: "Revolución Industrial"
tipo: completar
respuestas_validas: ["Revolución Industrial"]

enunciado: "El aumento sostenido de la concentración de CO2 en la atmósfera debido a la actividad humana comenzó con la ___."

explicacion: |
  La Revolución Industrial marcó el inicio del uso masivo de combustibles fósiles (principalmente carbón) para alimentar máquinas de vapor, alterando el ciclo natural del carbono.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["combustibles_fosiles", "carbón"]

variables:
  escenario: uno_de([["carbón", "el motor de la primera fase"], ["petróleo", "el motor de la segunda fase"]])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["carbón", "petróleo", "gas natural", "biomasa"]

enunciado: "Durante la primera etapa de la Revolución Industrial, ¿cuál fue el principal combustible fósil que impulsó el aumento de la huella de carbono?"

explicacion: |
  {escenario[1]} fue el combustible que permitió la expansión del transporte y la industria química en etapas posteriores.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["co2", "gas_efecto_invernadero"]

respuesta: "aumentar"
tipo: completar
respuestas_validas: ["aumentar", "elevar", "incrementar"]

enunciado: "La quema masiva de combustibles fósiles desde el siglo XVIII tiene como efecto principal ___ la concentración de gases de efecto invernadero en la atmósfera."

explicacion: |
  El aumento de la concentración de CO2 atrapa más calor en la atmósfera, intensificando el efecto invernadero.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["historia", "combustibles"]

opciones_explicitas: ["Carbón -> Petróleo -> Gas natural", "Petróleo -> Carbón -> Gas natural", "Gas natural -> Carbón -> Petróleo", "Carbón -> Gas natural -> Petróleo"]
respuesta: "Carbón -> Petróleo -> Gas natural"
tipo: ordenar

enunciado: "Ordena cronológicamente el predominio de los combustibles fósiles que han marcado la huella humana en la escala temporal de la industrialización:"

explicacion: |
  Primero el carbón (siglo XVIII-XIX), luego el petróleo (siglo XX) y finalmente el gas natural (finales del XX - actualidad).
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["geologia", "antropoceno"]

respuesta: "positivo"
tipo: mc
opciones_explicitas: ["positivo", "negativo", "neutro", "nulo"]

enunciado: "Desde el inicio de la Revolución Industrial, la tendencia de la concentración de CO2 en la atmósfera ha sido de un cambio ___."

explicacion: |
  Se considera un cambio positivo porque la cantidad de CO2 en la atmósfera ha crecido de manera sostenida, no ha disminuido ni se ha mantenido constante.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["preindustrial", "agricultura", "deforestacion"]

respuesta: "local"
tipo: mc

opciones_explicitas: ["global", "local", "nulo", "atmosferico"]

enunciado: "A diferencia de la era industrial, el impacto climático derivado de la deforestación para la agricultura en las sociedades preindustriales se caracterizaba por ser de escala ___."

explicacion: |
  Las sociedades preindustriales alteraban el ecosistema de su entorno inmediato (deforestación, erosión), pero sus emisiones de gases de efecto invernadero no eran suficientes para alterar el balance térmico global de la atmósfera.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["combustibles_fosiles", "industrializacion", "co2"]

variables:
  escenario: uno_de(["quema_carbón", "quema_petroleo"])

respuesta: 450
tipo: completar
tolerancia_abs: 5

enunciado: "Considerando que la concentración de CO2 en la atmósfera era de aproximadamente {escenario == 'quema_carbón' ? 280 : 280} ppm antes de la industrialización masiva, y que tras la quema masiva de combustibles fósiles ha superado las 415 ppm. ¿Cuál es el incremento aproximado en ppm (redondeado al entero más cercano)?"

pasos:
  - "Identificar la concentración preindustrial (aprox. 280 ppm)."
  - "Identificar la concentración actual (aprox. 415-420 ppm)."
  - "Restar la concentración preindustrial de la actual."

explicacion: |
  La quema de combustibles fósiles liberó carbono que estuvo secuestrado durante millones de años, aumentando la concentración de CO2 de ~280 ppm a niveles superiores a 415 ppm, rompiendo el ciclo natural del carbono.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["causas", "gas_efecto_invernadero"]

respuesta: "CO2"
tipo: completar
respuestas_validas: ["CO2", "CH4", "N2O"]

enunciado: "Mientras que la agricultura preindustrial afectaba el uso del suelo, la industrialización introdujo una quema masiva de combustibles fósiles que aumentó la concentración de ___ en la atmósfera."

explicacion: |
  El dióxido de carbono (CO2) es el principal gas de efecto invernadero emitido por la combustión de carbón, petróleo y gas natural, siendo el principal responsable del forzamiento radiativo antropogénico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["escala", "comparacion"]

respuesta: ["Deforestación local", "Cambio en el uso del suelo", "Emisiones globales de GEI"]
tipo: ordenar

opciones_explicitas: ["Deforestación local", "Cambio en el uso del suelo", "Emisiones globales de GEI"]

enunciado: "Ordene los siguientes fenómenos de menor a mayor escala de impacto climático global, según la evolución histórica de la huella humana:"

explicacion: |
  La escala comenzó con la modificación de paisajes locales (deforestación), continuó con cambios sistemáticos en el uso del suelo (agricultura intensiva) y culminó con la alteración química global de la atmósfera (emisiones de GEI).
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["tiempo", "ciclo_carbono"]

variables:
  tipo_impacto: uno_de(["ciclo_corto", "ciclo_largo"])

respuesta: "ciclo_largo"
tipo: mc

opciones_explicitas: ["ciclo_corto", "ciclo_largo"]

enunciado: "La agricultura preindustrial se basaba en ciclos biológicos rápidos. La industrialización, al extraer carbono de depósitos fósiles, introdujo carbono en el ___ ciclo del carbono."

explicacion: |
  El carbono en los combustibles fósiles forma parte del ciclo geológico (largo plazo). Al quemarlo, la humanidad está moviendo carbono de un reservorio de millones de años a la atmósfera de forma casi instantánea.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["geologia", "antropoceno", "conceptos"]

tipo: mc
opciones_explicitas: ["Una era de predominio de la vida vegetal", "Una época geológica definida por el impacto humano medible", "Un periodo de estabilidad climática absoluta", "La era de la formación de los continentes"]

enunciado: "El término 'Antropoceno' se utiliza para describir una propuesta de nueva época geológica caracterizada por ___."

explicacion: |
  El Antropoceno propone que la actividad humana se ha convertido en una fuerza geológica dominante, capaz de dejar marcas permanentes en los estratos sedimentarios, el clima y la biodiversidad de la Tierra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["evidencias", "sedimentos", "huella_geologica"]

variables:
  escenario: uno_de([["plásticos y hormigón", "sedimentos artificiales"], ["glaciares", "ciclos de hielo"], ["volcanes", "cenizas volcánicas"]])

tipo: completar
respuestas_validas: ["sedimentos artificiales", "ciclos de hielo", "cenizas volcánicas"]
respuesta: escenario[1

enunciado: "En el registro geológico del Antropoceno, se busca identificar marcadores como los {escenario[0]} que se consolidan como ___."

explicacion: |
  Los materiales sintéticos como los plásticos, el hormigón y los isótopos radiactivos actúan como 'tecnofósiles' que permiten identificar nuestra era en el futuro.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["clima", "gases_efecto_invernadero"]

tipo: mc
opciones_explicitas: ["Aumento de la radiación solar", "Cambios en la composición de la atmósfera por gases de efecto invernadero", "Desplazamiento de las placas tectónicas", "Variaciones en el campo magnético terrestre"]

enunciado: "Uno de los principales motores del cambio climático en el Antropoceno es la alteración de la atmósfera mediante ___."

explicacion: |
  La quema de combustibles fósiles y la deforestación han incrementado la concentración de gases como el CO2, alterando el balance térmico del planeta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["biodiversidad", "extinciones"]

variables:
  evento: uno_de([["la sexta extinción masiva", "la era de hielo"], ["la pérdida de biodiversidad", "la expansión de los continentes"]])

tipo: mc
opciones_explicitas: ["la sexta extinción masiva", "la era de hielo", "la expansión de los continentes", "el ciclo de las mareas"]

enunciado: "El Antropoceno se asocia con una crisis biológica sin precedentes conocida como ___."

explicacion: |
  La tasa actual de extinción de especies es significativamente superior a la tasa natural, lo cual es una característica distintiva de la huella humana sobre la biosfera.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["causa_efecto", "procesos"]

tipo: ordenar
opciones_explicitas: ["Emisión masiva de gases de efecto invernadero", "Aumento de la temperatura global", "Alteración de los ciclos biogeoquímicos", "Cambios en la composición de los sedimentos futuros"]

enunciado: "Ordena cronológicamente los procesos que caracterizan la huella humana en la Tierra:"

explicacion: |
  La actividad industrial genera gases, estos alteran el clima, lo que modifica los ciclos naturales (como el del carbono) y finalmente deja una marca física en los sedimentos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["paleoclimatologia", "co2", "glaciares"]

variables:
  datos_clima: [[800, "bajo"], [420, "alto"]]
  idx: uno_de([0,1])

enunciado: "Al analizar los núcleos de hielo, se observa que durante los periodos preindustriales los niveles de CO2 se mantenían en torno a los {datos_clima[idx][0]} ppm, pero tras la Revolución Industrial, los valores saltaron a aproximadamente {datos_clima[1][0]} ppm."

respuesta: datos_clima[1][0
tipo: completar
tolerancia_abs: 5

explicacion: |
  Los núcleos de hielo actúan como cápsulas del tiempo. Mientras que la variabilidad natural mantenía el CO2 en niveles estables (alrededor de 280-300 ppm), la quema de combustibles fósiles disparó la concentración actual.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["co2", "industrializacion"]

enunciado: "Antes de la era industrial, las fluctuaciones de CO2 en los núcleos de hielo seguían ciclos naturales. Sin embargo, la actividad humana ha provocado un cambio en la tendencia hacia un estado:"

opciones_explicitas: ["estacionario", "ascendente", "descendente", "cíclico"]

respuesta: "ascendente"
tipo: mc

explicacion: |
  La curva de los núcleos de hielo muestra un ascenso abrupto y lineal que no coincide con los ciclos naturales de los últimos 800,000 años, marcando el inicio de la huella humana.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["metodologia", "paleoclimatologia"]

enunciado: "Para reconstruir la atmósfera del pasado, los científicos extraen burbujas de aire atrapadas en el hielo. El proceso para entender el clima antiguo sigue este orden lógico:"

opciones_explicitas: ["Extracción de núcleos", "Análisis de burbujas de aire", "Medición de gases de efecto invernadero", "Comparación con datos actuales"]

respuesta: ["Extracción de núcleos", "Análisis de burbujas de aire", "Medición de gases de efecto invernadero", "Comparación con datos actuales"]
tipo: ordenar

explicacion: |
  Primero se extrae el cilindro de hielo, luego se liberan las burbujas atrapadas para medir la composición química y finalmente se compara con los niveles actuales para identificar la anomalía industrial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["co2", "quimica_atmosferica"]

enunciado: "Si comparamos la variabilidad natural (V) con el registro post-industrial (I), la diferencia fundamental es que la magnitud de la desviación de I respecto a V es ___."

respuestas_validas: ["significativa", "nula", "inversa"]

respuesta: "significativa"
tipo: completar

explicacion: |
  La magnitud del aumento de CO2 tras la industrialización es órdenes de magnitud superior a las variaciones naturales observadas en los registros de hielo de periodos interglaciares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["co2", "revolucion_industrial"]

enunciado: "¿Cuál de los siguientes factores es el principal responsable del salto observado en los niveles de CO2 en los núcleos de hielo durante el siglo XIX y XX?"

opciones_explicitas: ["Erupciones volcánicas", "Ciclos orbitales terrestres", "Quema de combustibles fósiles", "Variaciones de la radiación solar"]

respuesta: "Quema de combustibles fósiles"
tipo: mc

explicacion: |
  Aunque los volcanes y los ciclos orbitales afectan el clima, la velocidad y magnitud del aumento de CO2 detectado en el hielo coinciden exactamente con el inicio de la combustión masiva de carbón y petróleo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["clima", "historia", "carbono"]

variables:
  datos: [["Era Preindustrial", "bajo"], ["Era Industrial", "alto"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["bajo", "medio", "alto"]

enunciado: "Si analizamos la etapa de la {datos[idx][0]}, el nivel de impacto climático global se considera ____."

explicacion: |
  La era preindustrial se caracterizaba por un uso de biomasa y combustibles fósiles muy limitado, resultando en un impacto climático bajo comparado con la era industrial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["emisiones", "carbono", "historia"]

variables:
  datos: [["1750", "10"], ["1950", "5000"], ["2020", "36000"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: completar
tolerancia_abs: 0

enunciado: "En el año {datos[idx][0]}, la tasa de emisión global de CO2 (en millones de toneladas) era aproximadamente de ____."

pasos:
  - "Identificar el año en la cronología histórica."
  - "Asociar el valor de emisiones correspondiente a dicho año."

explicacion: |
  La escala de emisiones creció exponencialmente desde el año {datos[idx][0]} debido a la intensificación de la actividad económica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_clima_evolucion"
  nivel: "intermedio"
  tags: ["cronologia", "impacto"]

respuesta: ["Era Preindustrial", "Revolución Industrial", "Era de la Información"]
tipo: ordenar
opciones_explicitas: ["Era Preindustrial", "Revolución Industrial", "Era de la Información"]

enunciado: "Ordena cronológicamente las etapas de la humanidad según el aumento progresivo de su huella climática:"

explicacion: |
  La secuencia muestra cómo la complejidad tecnológica y el uso de combustibles fósiles aumentaron la huella de carbono de forma escalonada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["aceleracion", "antropoceno"]

variables:
  datos: [["antes de 1950", "estacionario"], ["después de 1950", "acelerado"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["estacionario", "acelerado"]

enunciado: "El impacto climático se describe como ____ en el periodo {datos[idx][0]}."

explicacion: |
  El periodo después de 1950, conocido como 'El Gran Aceleramiento', muestra un crecimiento exponencial en el impacto humano sobre la biosfera.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["comparativa", "clima"]

variables:
  comparativa: [["Preindustrial", "Baja"], ["Industrial", "Alta"]]
  idx: uno_de([0, 1])

respuesta: comparativa[idx][1
tipo: mc
opciones_explicitas: ["Baja", "Media", "Alta"]

enunciado: "La huella de carbono de la era {comparativa[idx][0]} es de magnitud ____."

explicacion: |
  La magnitud depende directamente de la fuente de energía predominante en cada periodo histórico.
```

## Sección: ilustracion (24 preguntas)

```
### 2 — La Enciclopedia de Diderot
```

```
### 3 — La separación de poderes de Montesquieu
```

```
### 4 — El ensayo sobre el gobierno de Voltaire
```

```
### 5 — La crítica económica de Adam Smith
```

```
### 6 — El empirismo de John Locke
```

```
### 7 — La tolerancia religiosa de Locke
```

```
### 8 — El utilitarismo de Bentham
```

```
### 9 — La crítica a la religión de D'Holbach
```

```
### 10 — La estética de Kant
```

```
### 11 — La Ilustración escocesa
```

```
### 12 — El optimismo de Leibniz (pre-ilustración pero influyente)
```

```
### 13 — La sociología de Condorcet
```

```
### 14 — El naturalismo de Buffon
```

```
### 15 — La economía política de Quesnay
```

```
### 16 — La crítica a la propiedad de Proudhon (post-ilustración pero raíz)
```

```
### 17 — El deísmo de Voltaire
```

```
### 18 — La política de Beccaria
```

```
### 19 — El racionalismo de Descartes (precursor)
```

```
### 20 — La educación de Pestalozzi (influencia ilustrada)
```

```
### 21 — El materialismo de La Mettrie
```

```
### 22 — La geografía de Humboldt (ciencia ilustrada)
```

```
### 23 — La crítica a la raza de Kant
```

```
### 24 — El federalismo de los Federalistas (influencia ilustrada)
```

```
### 25 — La revolución científica de Newton (base)
```

## Sección: imperialismo (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["africa", "conferencia_de_berlin"]

variables:
  escenario: uno_de([
    ["Conferencia de Berlín", "1884"],
    ["Tratado de Versalles", "1919"],
    ["Conferencia de Yalta", "1945"]
  ])

enunciado: "El proceso de reparto de África entre las potencias europeas se formalizó durante la {escenario[0]} en el año {escenario[1]}."

respuesta: escenario[1
tipo: completar
respuestas_validas: ["1884", "1885"]

explicacion: |
  La Conferencia de Berlín (1884-1885) estableció las reglas para la ocupación de África, evitando conflictos directos entre potencias europeas pero ignorando las realidades étnicas del continente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "basico"
  tags: ["japon", "asia"]

enunciado: "A finales del siglo XIX, ¿qué país asiático logró modernizarse rápidamente y expandir su influencia imperialista tras la guerra ruso-japonesa?"

opciones_explicitas: ["China", "Japón", "Tailandia", "Vietnam"]
respuesta: "Japón"
tipo: mc

explicacion: |
  Japón, tras la Restauración Meiji, se transformó en una potencia industrial y militar, derrotando a Rusia en 1905 y consolidando su control sobre Corea y partes de China.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "avanzado"
  tags: ["ideologia", "darwinismo_social"]

variables:
  caso: uno_de([
    ["Darwinismo Social", "la supervivencia del más apto"],
    ["Misión Civilizadora", "la carga del hombre blanco"],
    ["Destino Manifiesto", "la expansión divina"]
  ])

enunciado: "El concepto de '{caso[0]}' fue utilizado para justificar la expansión colonial mediante la idea de {caso[1]}."

respuesta: caso[0
tipo: completar
respuestas_validas: ["Darwinismo Social"]

explicacion: |
  El Darwinismo Social aplicó erróneamente las leyes de la selección natural de la biología a las sociedades humanas para legitimar la superioridad de las potencias occidentales sobre las colonias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "basico"
  tags: ["oceania", "australia"]

enunciado: "Durante el siglo XIX, la expansión de Gran Bretaña en Oceanía se caracterizó por la ocupación de territorios que antes eran habitados por pueblos indígenas, como los..."

opciones_explicitas: ["Maoríes", "Aborígenes", "Polinesios", "Melanesios"]
respuesta: "Aborígenes"
tipo: mc

explicacion: |
  La colonización británica en Australia se basó en la doctrina de 'Terra Nullius' (tierra de nadie), ignorando la soberanía de los pueblos aborígenes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["cronologia", "potencias"]

enunciado: "Ordena cronológicamente estos procesos de expansión imperialista, desde el más temprano al más tardío:"

opciones_explicitas: ["Expansión Británica en África", "Expansión Japonesa en Asia", "Expansión de EE.UU. en el Pacífico"]
respuesta: ["Expansión Británica en África", "Expansión Japonesa en Asia", "Expansión de EE.UU. en el Pacífico"]
tipo: ordenar

explicacion: |
  El auge del imperialismo europeo (África) precedió a la consolidación del imperialismo japonés en Asia, mientras que la expansión de EE.UU. en el Pacífico se intensificó tras la guerra hispano-estadounidense (1898).
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "basico"
  tags: ["economia", "materias_primas", "mercados"]

respuesta: "materias_primas"
tipo: completar
respuestas_validas: ["materias_primas"]

enunciado: "Durante el siglo XIX, la Revolución Industrial impulsó a las potencias europeas a buscar en África y Asia un suministro constante de ___ para alimentar sus fábricas."

explicacion: |
  La necesidad de materias primas (como caucho, algodón o minerales) fue un motor central del imperialismo para sostener el crecimiento industrial europeo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["politica", "prestigio", "competencia"]

variables:
  escenario: uno_de([["Gran Bretaña", "control naval"], ["Francia", "expansión territorial"]])

respuesta: uno_de(["prestigio", "recursos", "religión"])
tipo: mc
opciones_explicitas: ["prestigio", "recursos", "religión"]

enunciado: "La expansión colonial no solo buscaba beneficios económicos, sino también aumentar el {escenario[1]} de la nación frente a sus rivales europeos. Esta motivación se clasifica como de tipo ___."

explicacion: |
  La competencia por el poder político y el estatus internacional (prestigio) llevó a las potencias a disputarse territorios estratégicos para demostrar su dominio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "avanzado"
  tags: ["ideologia", "darwinismo_social", "superioridad"]

respuesta: "darwinismo social"
tipo: completar
respuestas_validas: ["darwinismo social"]

enunciado: "Para justificar la dominación sobre otros pueblos, muchas potencias utilizaron la idea de la superioridad racial, concepto erróneamente aplicado de la biología a la sociedad, conocido como ___."

explicacion: |
  El darwinismo social fue una distorsión de la teoría de la evolución que se utilizó para legitimar el control colonial bajo la premisa de que ciertas razas eran "naturalmente" superiores.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["causas", "clasificacion"]]

respuesta: ["económicas", "políticas", "ideológicas"]
tipo: ordenar

enunciado: "Ordena las siguientes motivaciones del imperialismo desde la más materialista (recursos) hasta la más abstracta (creencias):"

pasos:
  - "Búsqueda de nuevos mercados y materias primas"
  - "Competencia por el prestigio y control territorial"
  - "Nociones de superioridad cultural o misión civilizadora"

opciones_explicitas: ["económicas", "políticas", "ideológicas"]

explicacion: |
  El imperialismo fue un fenómeno multidimensional: comenzó con la necesidad económica, se intensificó por la rivalidad política y se legitimó mediante ideologías culturales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "basico"
  tags: ["economia", "mercados"]

respuesta: "nuevos mercados"
tipo: mc
opciones_explicitas: ["nuevos mercados", "mano de obra barata", "territorio para el descanso"]

enunciado: "Además de extraer recursos, las potencias buscaban establecer ___ para colocar el exceso de producción de sus industrias."

explicacion: |
  La creación de mercados cautivos en las colonias permitía a las metrópolis vender sus productos manufacturados sin competencia, asegurando el ciclo de acumulación de capital.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["reparto_de_africa", "conferencia_berlin"]

enunciado: "La Conferencia de Berlín (1884-1885) fue el evento clave donde las potencias europeas establecieron las reglas para la ocupación de África. ¿Cuál fue una de las consecuencias más críticas de este proceso respecto a la organización territorial del continente?"

opciones_explicitas:
  - "Se respetaron las fronteras étnicas y lingüísticas preexistentes."
  - "Se trazaron fronteras artificiales que ignoraron la realidad cultural de las poblaciones."
  - "Se promovió la independencia inmediata de los estados africanos."
  - "Se estableció un sistema de protectorados basado en el consenso local."

respuesta: "Se trazaron fronteras artificiales que ignoraron la realidad cultural de las poblaciones."
tipo: mc

explicacion: |
  El Reparto de África se caracterizó por la creación de fronteras arbitrarias trazadas en mapas por potencias europeas, lo que agrupó a grupos étnicos rivales en un mismo estado o dividió a comunidades unidas, sembrando las bases de conflictos futuros.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "avanzado"
  tags: ["congo", "leopoldo_ii", "explotacion"]

variables:
  escenario: uno_de([
    ["Estado Libre del Congo", "explotación extrema de caucho y marfil"],
    ["África Occidental", "control comercial de materias primas"],
    ["Egipto", "control del canal de Suez"]
  ])

enunciado: "En el contexto del imperialismo, el caso del {escenario[0]} es recordado por la gestión de Leopoldo II, cuyo régimen se caracterizó por la {escenario[1]}."

respuesta: {escenario[1]}
tipo: completar
respuestas_validas: ["explotación extrema de caucho y marfil"]

explicacion: |
  El Estado Libre del Congo no era una colonia de Bélgica inicialmente, sino propiedad privada de Leopoldo II, donde se implementó un sistema de terror para la extracción de recursos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "basico"
  tags: ["causas", "economia"]

enunciado: "Durante el siglo XIX, la Revolución Industrial impulsó la necesidad de las potencias europeas de obtener nuevas fuentes de materias primas y nuevos mercados para sus productos. Completa la siguiente afirmación: El imperialismo fue impulsado por una combinación de factores económicos, _______ y políticos."

respuesta: "ideológicos"
tipo: completar
respuestas_validas: ["ideológicos"]

explicacion: |
  Además de la necesidad económica, existieron justificaciones ideológicas (como la supuesta "misión civilizadora") y ambiciones políticas de prestigio nacional.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["berlin", "diplomacia"]

enunciado: "Ordena cronológicamente los procesos que definieron la dinámica del imperialismo africano:"

opciones_explicitas:
  - "Conferencia de Berlín para regular la ocupación."
  - "Expansión de las potencias europeas en el continente."
  - "Consolidación de fronteras coloniales y resistencia local."

respuesta: ["Conferencia de Berlín para regular la ocupación.", "Expansión de las potencias europeas en el continente.", "Consolidación de fronteras coloniales y resistencia local."]
tipo: ordenar

explicacion: |
  Primero se establecieron las reglas diplomáticas (Berlín), luego se produjo la ocupación efectiva del territorio y finalmente se consolidaron las estructuras coloniales que enfrentaron resistencias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "avanzado"
  tags: ["ideologia", "darwinismo_social"]

enunciado: "El imperialismo se justificó en gran medida mediante el uso del 'Darwinismo Social'. ¿Qué premisa defendía esta idea para legitimar el dominio europeo?"

opciones_explicitas:
  - "La igualdad natural entre todas las razas humanas."
  - "La idea de que las naciones 'más aptas' tenían el derecho de dominar a las 'menos aptas'."
  - "La necesidad de cooperación económica entre continentes."
  - "El respeto a la soberanía de las naciones no europeas."

respuesta: "La idea de que las naciones 'más aptas' tenían el derecho de dominar a las 'menos aptas'."
tipo: mc

explicacion: |
  El darwinismo social fue una distorsión de la teoría de la evolución aplicada a la sociedad, utilizada para justificar el colonialismo como un proceso "natural" de superioridad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["geopolitica", "africa", "fronteras"]

variables:
  caso: uno_de([
    ["la Conferencia de Berlín", "la división de África"],
    ["el Reino Unido", "el control británico"],
    ["fronteras artificiales", "líneas trazadas"]
  ])

enunciado: "Durante el siglo XIX, la delimitación de {caso[0]} ignoró las realidades étnicas locales, lo que ha generado tensiones geopolíticas que persisten en la actualidad."

respuesta: "la división de África"
tipo: completar
respuestas_validas: ["la división de África"]

explicacion: |
  La Conferencia de Berlín (1884-1885) repartió el continente africano entre potencias europeas mediante líneas rectas que no respetaban la distribución de grupos étnicos o lingüísticos, provocando conflictos internos constantes en la era post-colonial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["economia", "teoria_dependencia", "recursos"]

opciones_explicitas: ["Modelo de extracción", "Modelo de integración", "Modelo de autarquía", "Modelo de libre comercio"]

enunciado: "El imperialismo consolidó un modelo económico basado en la extracción de materias primas de las colonias para abastecer a las metrópolis. Este sistema, que aún influye en la estructura de muchas economías periféricas, se conoce como:"

respuesta: "Modelo de extracción"
tipo: mc

explicacion: |
  La estructura económica colonial fue diseñada para la exportación de recursos naturales, lo que impidió el desarrollo de industrias locales en las colonias y perpetuó la dependencia económica de las antiguas metrópolis.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "avanzado"
  tags: ["etnia", "conflictos", "herencia_colonial"]

variables:
  escenario: uno_de([
    ["el uso de la política de 'divide y vencerás'", "tácticas de división"],
    ["la creación de élites privilegiadas", "el favoritismo étnico"],
    ["la imposición de lenguas coloniales", "la barrera lingüística"]
  ])

enunciado: "Una de las consecuencias sociales más persistentes es el legado de {escenario[0]}, donde las potencias coloniales utilizaban {escenario[1]} para mantener el control, exacerbando las divisiones entre grupos que hoy derivan en conflictos civiles."

respuesta: "tácticas de división"
tipo: completar
respuestas_validas: ["tácticas de división"]

explicacion: |
  Al favorecer a un grupo étnico sobre otro para facilitar el control administrativo, las potencias coloniales crearon resentimientos profundos que han estallado en guerras civiles tras la independencia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["procesos", "descolonizacion", "orden"]

opciones_explicitas: ["Consolidación del control colonial", "Movimientos de liberación nacional", "Independencia política y crisis de fronteras"]

enunciado: "Ordena cronológicamente los procesos que explican la situación actual de muchas naciones post-coloniales:"

respuesta: ["Consolidación del control colonial", "Movimientos de liberación nacional", "Independencia política y crisis de fronteras"]
tipo: ordenar

explicacion: |
  El proceso comenzó con la explotación sistemática (control colonial), seguido por la resistencia organizada (movimientos de liberación) y culminó en independencias que, al no redefinir las fronteras, dejaron problemas estructurales vigentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "basico"
  tags: ["soberania", "politica"]

enunciado: "¿Cuál de los siguientes es un efecto directo de la delimitación arbitraria de fronteras en la soberanía de los estados modernos?"

opciones_explicitas: ["Conflictos por la delimitación territorial", "Aumento de la riqueza industrial", "Unificación cultural inmediata", "Estabilidad política garantizada"]

respuesta: "Conflictos por la delimitación territorial"
tipo: mc

explicacion: |
  Las fronteras que no coinciden con las realidades demográficas obligan a estados modernos a gestionar poblaciones que no se sienten representadas o que se encuentran divididas entre dos o más naciones.
```

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

respuesta: datos[escenario_idx][1
tipo: completar

explicacion: |
  El imperialismo fue impulsado por la necesidad de las potencias industriales de obtener recursos naturales y mercados para sus productos.
```

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

respuesta: datos[escenario_idx][1
tipo: completar

explicacion: |
  La competencia entre potencias por el prestigio y el control de rutas estratégicas fue un motor político clave.
```

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

respuesta: datos[escenario_idx][1
tipo: mc

explicacion: |
  Las justificaciones morales, religiosas o pseudocientíficas que validaban el dominio extranjero pertenecen al ámbito ideológico.
```

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

respuesta: datos[escenario_idx][1
tipo: mc

explicacion: |
  Cada escenario representa una de las tres dimensiones fundamentales del imperialismo decimonónico.
```

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

## Sección: imperio-bizantino (24 preguntas)

```
### 2 — El Cisma de 1054
```

```
### 3 — Código de Justiniano
```

```
### 4 — Lengua Oficial
```

```
### 5 — La Peste de Justiniano
```

```
### 6 — Iconoclasia
```

```
### 7 — Batalla de Manzikert
```

```
### 8 — Los Varangianos
```

```
### 9 — El Gran Cisma
```

```
### 10 — Saqueo de 1204
```

```
### 11 — Basílica de Santa Sofía
```

```
### 12 — Teodoro II Lascaris
```

```
### 13 — Miguel VIII Paleólogo
```

```
### 14 — El Fuego Griego
```

```
### 15 — Batalla de Yarmuk
```

```
### 16 — Juan II Comneno
```

```
### 17 — Andrónico I Comneno
```

```
### 18 — La Dinastía Paleóloga
```

```
### 19 — Constantino XI
```

```
### 20 — El Concilio de Florencia
```

```
### 21 — Basilio II Bulgaroctono
```

```
### 22 — El Códice Palatino
```

```
### 23 — La Pólvora en Bizancio
```

```
### 24 — El Tema de los Anatólicos
```

```
### 25 — Nika
```

## Sección: imperio-de-alejandro-magno-helenistico (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["imperios-helenisticos", "seléucidas", "geopolitica"]
tipo: completar
enunciado: Tras la partición del imperio de Alejandro Magno, Antíoco I Soter estableció su capital en la ciudad de {ciudad}, ubicada en la confluencia de los ríos Tigris y Dije, la cual se convertiría en un centro cultural y comercial clave del mundo helenístico oriental.
variables:
  ciudad: uno_de(["Seleucia", "Seleucia del Tigris", "Seleucia"])
pasos:
  - verificar_que respuesta coincida con alguna de las variantes de ciudad
respuesta: Seleucia del Tigris
respuestas_validas:
  - Seleucia
  - Seleucia del Tigris
  - seleucia
  - seleucia del tigris
explicacion: Antíoco I fundó Seleucia del Tigris como la nueva capital administrativa y militar del Imperio Seléucida, desplazando a Babilonia y Antioquía como centros de poder en Oriente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["guerras-de-los-diadocos", "batallas", "particion"]
tipo: vf
enunciado: La Batalla de Ipsos, librada en el año 301 a. C., fue decisiva para la partición final del imperio de Alejandro, resultando en la muerte de Antígonos I Monóftalmos y la consolidación del poder seléucida en Asia Menor y Siria.
respuesta: verdadero
explicacion: La batalla de Ipsos enfrentó a la coalición de Casandro, Lisímaco y Seleuco contra Antígonos I y su hijo Demetrio Poliorcetes. La muerte de Antígonos permitió a Seleuco expandir su territorio hacia el este y asegurar su posición como uno de los grandes reyes helenísticos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["cultura", "alejandria", "ptolemeos", "conocimiento"]
tipo: completar
enunciado: La {institucion} de Alejandría, fundada bajo los Ptolomeos, se convirtió en el mayor centro de conocimiento del mundo antiguo, reunido en su famoso anexo, la Biblioteca de Alejandría, que buscaba recopilar todos los textos del mundo conocido.
variables:
  institucion: uno_de(["Museo", "Mouseion", "museo", "mouseion"])
pasos:
  - verificar_que respuesta coincida con las variantes de institucion
respuesta: Museo
respuestas_validas:
  - Museo
  - Mouseion
  - museo
  - mouseion
explicacion: El Mouseion (Museo) era una institución dedicada a las Musas, que funcionaba como un centro de investigación y enseñanza superior, atrayendo a los mayores intelectuales de la época como Euclides y Arquímedes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["guerras-sirias", "roma", "antigonidas", "derrota"]
tipo: vf
enunciado: El Tratado de Apamea, firmado en el 188 a. C. tras la derrota de Antíoco III el Grande contra Roma, obligó a los seléucidas a ceder toda Asia Menor al norte del Tauro y pagar una indemnización enorme, marcando el inicio de la hegemonía romana en Oriente.
respuesta: verdadero
explicacion: Este tratado fue un punto de inflexión crucial. Antíoco III perdió su flota y su influencia en Asia Menor, que pasó a manos del Reino de Pérgamo (aliado de Roma), debilitando enormemente al Imperio Seléucida frente a la creciente potencia romana.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["dinastias", "macedonia", "antigonidas"]
tipo: completar
enunciado: La dinastía {dinastia}, fundada por Antígono I Monóftalmos y consolidada por su nieto Antígono II Gonetes, gobernó el Reino de Macedonia y la Grecia continental durante el período helenístico, hasta su conquista por Roma en el 168 a. C.
variables:
  dinastia: uno_de(["Antígona", "Antigonida", "Antigonidas", "antígona", "antigonida"])
pasos:
  - verificar_que respuesta coincida con las variantes de dinastia
respuesta: Antígona
respuestas_validas:
  - Antígona
  - Antigonida
  - Antigonidas
  - antigona
  - antigonida
explicacion: Los Antígónidas fueron la última gran dinastía helenística en controlar el núcleo macedonio. Su fin llegó con la Tercera Guerra Macedónica, donde Perseo fue derrotado por el cónsul Paulo Emilio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["alejandro-magno", "muerte", "babilonia", "vacio-poder"]
tipo: completar
enunciado: Alejandro Magno falleció en el año {anio} en Babilonia, sin designar un heredero claro, lo que provocó inmediatamente las Guerras de los Diádocos entre sus generales por el control del imperio.
variables:
  anio: uno_de(["323 a. C.", "323", "323 a.C."])
pasos:
  - verificar_que respuesta coincida con las variantes de anio
respuesta: 323 a. C.
respuestas_validas:
  - 323 a. C.
  - 323
  - 323 a.C.
explicacion: La muerte prematura de Alejandro en el 323 a. C. dejó un vacío de poder que sus generales (los Diádocos) intentaron llenar mediante décadas de conflictos, fragmentando el imperio en reinos helenísticos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["pérgamo", "átalo", "cultura", "arte"]
tipo: completar
enunciado: El Reino de Pérgamo, bajo la dinastía {dinastia}, se destacó por su mecenazgo artístico y la construcción del Gran Altar de Zeus, convirtiéndose en rival cultural de Alejandría y Atenas antes de legar su territorio a Roma en el 133 a. C.
variables:
  dinastia: uno_de(["Átalo", "Atálida", "átalo", "atálida"])
pasos:
  - verificar_que respuesta coincida con las variantes de dinastia
respuesta: Átalo
respuestas_validas:
  - Átalo
  - Atálida
  - átalo
  - atálida
explicacion: Los Átalos, especialmente Eumenes II y Atalo I, fomentaron un florecimiento cultural sin igual en Pérgamo, conocido por su arquitectura grandiosa y su escuela de escultura, como la famosa Galia moribunda.
```

```
metadata:
  materia: "historia-profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["religión", "sincretismo", "isis", "culto"]
tipo: vf
enunciado: El culto a la diosa Isis, de origen egipcio, se expandió masivamente por el mundo helenístico y romano gracias al sincretismo religioso promovido por los Ptolomeos, convirtiéndose en una de las religiones más populares de la antigüedad tardía.
respuesta: verdadero
explicacion: Los Ptolomeos integraron a Isis en el panteón oficial y la asociaron con la reina (Arsínoe) para legitimar su poder. Su culto, centrado en la salvación personal y la vida después de la muerte, trascendió fronteras culturales y políticas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["ptolemeos", "seléucidas", "guerras-sirias", "ptolemeo-iv"]
tipo: completar
enunciado: En la Batalla de {lugar} del 217 a. C., Ptolomeo IV Filopátor derrotó a Antíoco III el Grande, asegurando temporalmente el control egipcio sobre Colesiria y demostrando que el ejército macedonio-persa podía vencer al macedonio-sirio.
variables:
  lugar: uno_de(["Raphia", "Rafía", "raphia", "rafía"])
pasos:
  - verificar_que respuesta coincida con las variantes de lugar
respuesta: Raphia
respuestas_validas:
  - Raphia
  - Rafía
  - raphia
  - rafía
explicacion: La batalla de Raphia fue crucial porque mostró la eficacia militar del Reino Ptolemaico bajo Ptolomeo IV, aunque la victoria fue efímera y no evitó las posteriores guerras sirias por el control de Colesiria.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["filosofía", "estoicismo", "zenón", "ética"]
tipo: completar
enunciado: El estoicismo, fundado por {filosofo} en Atenas durante el período helenístico, enfatizaba la virtud, la razón universal y la aceptación del destino, ofreciendo consuelo moral en un mundo político fragmentado e incierto.
variables:
  filosofo: uno_de(["Zenón de Citio", "Zenón", "zenón de citio", "zenón"])
pasos:
  - verificar_que respuesta coincida con las variantes de filosofo
respuesta: Zenón de Citio
respuestas_validas:
  - Zenón de Citio
  - Zenón
  - zenón de citio
  - zenón
explicacion: Zenón de Citio fundó la Escuela Estoa en el Pórtico Pintado de Atenas. El estoicismo se convirtió en una filosofía influyente para la élite romana y griega, promoviendo la igualdad espiritual y el deber cívico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["ptolemeos", "egipto", "dinastía", "cleopatra"]
tipo: completar
enunciado: La dinastía {dinastia}, establecida por Ptolomeo I Sóter, gobernó Egipto durante más de 270 años, manteniendo el país como un reino rico y culturalmente helenizado hasta la conquista romana en el 30 a. C.
variables:
  dinastia: uno_de(["Ptolemaica", "ptolemaica", "Ptolomeo", "ptolemeo"])
pasos:
  - verificar_que respuesta coincida con las variantes de dinastia
respuesta: Ptolemaica
respuestas_validas:
  - Ptolemaica
  - ptolemaica
  - Ptolomeo
  - ptolemeo
explicacion: Los Ptolomeos mantuvieron la administración egipcia tradicional pero la impregnaron de elementos griegos, fundando Alejandría como su capital y promoviendo el comercio y la ciencia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["guerra-social", "macedonia", "revuelta", "filipo-v"]
tipo: vf
enunciado: La Guerra Social (220-217 a. C.) fue un conflicto principal entre el Reino de Macedonia de Filipo V y una coalición de estados griegos, incluido el Reino de Pérgamo y Rodas, apoyados por Roma.
respuesta: verdadero
explicacion: Filipo V buscó expandir su influencia en el Egeo y Grecia, lo que llevó a una alianza en su contra. Esta guerra marcó el inicio de la intervención romana directa en los asuntos griegos, aunque inicialmente fue limitada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["ciencia", "arquímedes", "siracusa", "matemáticas"]
tipo: completar
enunciado: {científico}, el famoso matemático y inventor de Siracusa, es conocido por sus avances en la hidrostática (principio de Arquímedes) y la defensa de su ciudad contra el asedio romano, muriendo durante la toma de la ciudad en el 212 a. C.
variables:
  científico: uno_de(["Arquímedes", "arquímedes"])
pasos:
  - verificar_que respuesta coincida con las variantes de científico
respuesta: Arquímedes
respuestas_validas:
  - Arquímedes
  - arquímedes
explicacion: Arquímedes es una figura clave del helenismo científico. Sus invenciones mecánicas y sus descubrimientos matemáticos sentaron las bases para la física y la ingeniería modernas, aunque murió durante la caída de Siracusa ante Roma.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["aníbal", "roma", "cartago", "escipion"]
tipo: vf
enunciado: El Tratado de Zama, firmado en el 201 a. C. tras la derrota de Aníbal, no afectó directamente a los reinos helenísticos de Asia, aunque consolidó la supremacía romana en el Mediterráneo occidental y cambió el equilibrio de poder global.
respuesta: verdadero
explicacion: Aunque Zama fue una guerra entre Roma y Cartago, su resultado aisló a los reinos helenísticos del oeste y fortaleció a Roma, permitiendo que luego se involucrara decisivamente en Oriente, especialmente tras la derrota de Antíoco III.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["bitinia", "nicomedes", "ánatolia", "reinos-pequeños"]
tipo: completar
enunciado: El Reino de {reino}, ubicado en el noroeste de Anatolia, fue fundado por Zipoetes y posteriormente fortalecido por Nicomedes I, quien fundó Nicomedia como capital y se alió con Roma contra los seléucidas.
variables:
  reino: uno_de(["Bitinia", "bitinia"])
pasos:
  - verificar_que respuesta coincida con las variantes de reino
respuesta: Bitinia
respuestas_validas:
  - Bitinia
  - bitinia
explicacion: Bitinia fue uno de los numerosos reinos helenísticos que surgieron de las fragmentaciones del imperio de Alejandro, jugando un papel diplomático clave al alinearse con Roma para sobrevivir a sus vecinos más poderosos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["religión", "sincretismo", "serapis", "ptolemeos"]
tipo: completar
enunciado: El dios {dios}, una deidad creada por los Ptolomeos mediante la fusión de Osiris e Apis con elementos griegos, se convirtió en el protector divino de Alejandría y luego se expandió por todo el mundo helenístico.
variables:
  dios: uno_de(["Serapis", "Serápide", "serapis", "serápide"])
pasos:
  - verificar_que respuesta coincida con las variantes de dios
respuesta: Serapis
respuestas_validas:
  - Serapis
  - Serápide
  - serapis
  - serápide
explicacion: Serapis fue una invención religiosa ptolemaica diseñada para unificar a las poblaciones griega y egipcia bajo un mismo culto estatal, simbolizando la integración cultural del Reino Ptolemaico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["roma", "macedonia", "filipo-v", "guerras-macedónicas"]
tipo: vf
enunciado: La Batalla de Cinocefalas (197 a. C.) fue la primera vez que el ejército romano enfrentó y derrotó decisivamente a la falange macedonia, llevando a la disolución de la Liga Aquea y al fin de la independencia formal de Macedonia.
respuesta: verdadero
explicacion: La victoria romana en Cinocefalas demostró la superioridad de la legión romana sobre la falange en terreno irregular. Esto llevó a la Declaración de Antioquía, que proclamaba la "libertad" de los griegos, aunque bajo tutela romana.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["seléucidas", "imperio", "asia", "partición"]
tipo: completar
enunciado: La dinastía {dinastia}, fundada por Seleuco I Nicátor, controló el mayor territorio de los reinos helenísticos, abarcando desde Anatolia hasta la frontera india, antes de su declive gradual frente a Roma y los partos.
variables:
  dinastia: uno_de(["Seleúcida", "seléucida", "Seleucida", "seléucidas"])
pasos:
  - verificar_que respuesta coincida con las variantes de dinastia
respuesta: Seleúcida
respuestas_validas:
  - Seleúcida
  - seléucida
  - Seleucida
  - seléucidas
explicacion: Los Seleúcidas heredaron la mayor parte del territorio asiático de Alejandro. Intentaron mantener la unidad mediante la fundación de ciudades griegas y la administración centralizada, pero la vastedad del territorio facilitó su fragmentación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["ciencia", "eratóstenes", "geografía", "tierra"]
tipo: completar
enunciado: {científico}, bibliotecario jefe de Alejandría, calculó con notable precisión la circunferencia de la Tierra utilizando la geometría y la observación de las sombras al mediodía en dos ciudades egipcias.
variables:
  científico: uno_de(["Eratóstenes", "eratóstenes"])
pasos:
  - verificar_que respuesta coincida con las variantes de científico
respuesta: Eratóstenes
respuestas_validas:
  - Eratóstenes
  - eratóstenes
explicacion: Eratóstenes es famoso por su cálculo de la circunferencia terrestre, un logro científico excepcional del período helenístico que demuestra el alto nivel de la investigación astronómica y matemática en Alejandría.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["mitridates", "ponto", "roma", "guerras-mitridáticas"]
tipo: vf
enunciado: Las Guerras Mitridáticas fueron conflictos entre el Reino del Ponto, liderado por Mitridates VI, y la República Romana, donde el Ponto buscó liderar una resistencia griasiática contra la expansión romana en Anatolia y Grecia.
respuesta: verdadero
explicacion: Mitridates VI intentó crear un imperio helénico unido contra Roma. Aunque inicialmente exitoso, finalmente fue derrotado por Pompeyo, lo que resultó en la anexión de sus territorios y la consolidación del poder romano en Oriente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["ponto", "dinastía", "mitridates", "ánatolia"]
tipo: completar
enunciado: El Reino de {reino}, ubicado en el norte de Anatolia, fue fundado por un general de Seleuco y alcanzó su máxima extensión bajo Mitridates VI, quien promovió una cultura híbrida griega y persa.
variables:
  reino: uno_de(["Ponto", "ponto"])
pasos:
  - verificar_que respuesta coincida con las variantes de reino
respuesta: Ponto
respuestas_validas:
  - Ponto
  - ponto
explicacion: El Reino de Ponto fue un estado helenístico importante en el norte de Anatolia. Su rey Mitridates VI fue uno de los mayores enemigos de Roma en el siglo I a. C., intentando unir a los pueblos contra la dominación romana.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["diádocos", "epígono", "guerras-de-los-diádocos", "macedonia"]
tipo: completar
enunciado: {general}, hijo de Antípatro, fue uno de los principales generales durante las Guerras de los Diádocos y Epígonos, y jugó un papel clave en la Batalla de Gabieno que consolidó brevemente el poder seléucida en Oriente.
variables:
  general: uno_de(["Antígono II Gonetes", "Antígono", "antígono ii gonetes", "antígono ii"])
pasos:
  - verificar_que respuesta coincida con las variantes de general
respuesta: Antígono II Gonetes
respuestas_validas:
  - Antígono II Gonetes
  - Antígono
  - antígono ii gonetes
  - antígono ii
explicacion: Antígono II Gonetes fue el fundador de la dinastía Antígona en Macedonia. Aunque el término "Epígonos" se refiere a la segunda generación de generales, Antígono fue una figura central en la transición hacia el establecimiento de los reinos helenísticos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["cleopatra", "ptolemeos", "roma", "fin-reino"]
tipo: completar
enunciado: {reina}, la última reina activa del Reino Ptolemaico, se alió con Julio César y luego con Marco Antonio contra Octavio, resultando en la anexión de Egipto por Roma tras su derrota en la Batalla de Accio en el 31 a. C.
variables:
  reina: uno_de(["Cleopatra VII", "Cleopatra", "cleopatra vii", "cleopatra"])
pasos:
  - verificar_que respuesta coincida con las variantes de reina
respuesta: Cleopatra VII
respuestas_validas:
  - Cleopatra VII
  - Cleopatra
  - cleopatra vii
  - cleopatra
explicacion: Cleopatra VII fue la última monarca ptolemaico. Su alianza con Roma y su posterior derrota llevaron al fin del período helenístico y al inicio de Egipto como provincia romana, marcando el cierre de una era de 300 años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["filosofía", "epicuro", "ataraxia", "jardín"]
tipo: completar
enunciado: {filosofo} fundó su escuela filosófica, conocida como el Jardín, en Atenas, promoviendo la búsqueda del placer (entendido como ausencia de dolor) y la ataraxia (tranquilidad del alma) como fines de la vida ética.
variables:
  filosofo: uno_de(["Epicuro", "epicuro"])
pasos:
  - verificar_que respuesta coincida con las variantes de filosofo
respuesta: Epicuro
respuestas_validas:
  - Epicuro
  - epicuro
explicacion: Epicuro enseñaba que el objetivo de la vida era la felicidad alcanzada mediante la moderación, la amistad y la ausencia de temor a los dioses y a la muerte. Su escuela fue influyente en el mundo helenístico y romano.
```

```
metadata:
  materia: "historia_profunda"
  tema: "imperio-de-alejandro-magno-helenistico"
  nivel: "intermedio"
  tags: ["capadocia", "reino", "ánatolia", "dinastía-arácida"]
tipo: completar
enunciado: El Reino de {reino}, en el centro de Anatolia, fue fundado por Ariarates I de la dinastía arácida y mantuvo una independencia relativa entre los grandes imperios helenísticos antes de caer bajo la influencia romana.
variables:
  reino: uno_de(["Capadocia", "capadocia"])
pasos:
  - verificar_que respuesta coincida con las variantes de reino
respuesta: Capadocia
respuestas_validas:
  - Capadocia
  - capadocia
explicacion: Capadocia fue un estado tapón entre los Seléucidas y los Partos, y luego entre los Seléucidas y Roma. Su dinastía, de origen persa pero helenizada, jugó un papel diplomático crucial en la geopolítica de Anatolia.
```
