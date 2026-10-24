# Historia Profunda — Huella humana en el clima inicio (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El inicio de la era del carbón

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["revolucion_industrial", "co2", "carbón"]

respuesta: "Revolución Industrial"
tipo: completar
respuestas_validas:
  - "Revolución Industrial"

enunciado: "El aumento sostenido de la concentración de CO2 en la atmósfera debido a la actividad humana comenzó con la ___."

explicacion: |
  La Revolución Industrial marcó el inicio del uso masivo de combustibles fósiles (principalmente carbón) para alimentar máquinas de vapor, alterando el ciclo natural del carbono.
```

### 2 — El combustible del cambio

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["combustibles_fosiles", "carbón"]

respuesta: "carbón"
tipo: mc
opciones_explicitas: ["carbón", "petróleo", "gas natural", "biomasa"]

enunciado: "Durante la primera etapa de la Revolución Industrial, ¿cuál fue el principal combustible fósil que impulsó el aumento de la huella de carbono?"

explicacion: |
  El carbón fue el combustible que impulsó la primera fase de la industrialización; el petróleo se convirtió en el motor de la segunda fase, con la expansión del automovilismo y la química sintética.
```

### 3 — Impacto en la atmósfera

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["co2", "gas_efecto_invernadero"]

respuesta: "aumentar"
tipo: completar
respuestas_validas:
  - "aumentar"
  - "elevar"
  - "incrementar"

enunciado: "La quema masiva de combustibles fósiles desde el siglo XVIII tiene como efecto principal ___ la concentración de gases de efecto invernadero en la atmósfera."

explicacion: |
  El aumento de la concentración de CO2 atrapa más calor en la atmósfera, intensificando el efecto invernadero.
```

### 4 — Secuencia de combustibles

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["historia", "combustibles"]

opciones_explicitas: ["Carbón -> Petróleo -> Gas natural", "Petróleo -> Carbón -> Gas natural", "Gas natural -> Carbón -> Petróleo", "Carbón -> Gas natural -> Petróleo"]
respuesta: "Carbón -> Petróleo -> Gas natural"
tipo: mc

enunciado: "Ordena cronológicamente el predominio de los combustibles fósiles que han marcado la huella humana en la escala temporal de la industrialización:"

explicacion: |
  Primero el carbón (siglo XVIII-XIX), luego el petróleo (siglo XX) y finalmente el gas natural (finales del XX - actualidad).
```

### 5 — El efecto de la actividad humana

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

### 6 — Impacto de la agricultura temprana

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

### 7 — El gran cambio de la Revolución Industrial

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["combustibles_fosiles", "industrializacion", "co2"]

respuesta: 135
tipo: completar
tolerancia_abs: 10

enunciado: "Considerando que la concentración de CO2 en la atmósfera era de aproximadamente 280 ppm antes de la industrialización masiva, y que tras la quema masiva de combustibles fósiles ha superado las 415 ppm, ¿cuál es el incremento aproximado en ppm (redondeado al entero más cercano)?"

pasos:
  - "Identificar la concentración preindustrial (aprox. 280 ppm)."
  - "Identificar la concentración actual (aprox. 415-420 ppm)."
  - "Restar la concentración preindustrial de la actual."

explicacion: |
  La quema de combustibles fósiles liberó carbono que estuvo secuestrado durante millones de años, aumentando la concentración de CO2 de ~280 ppm a niveles superiores a 415 ppm, rompiendo el ciclo natural del carbono.
```

### 8 — Agentes del cambio climático

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["causas", "gas_efecto_invernadero"]

respuesta: "CO2"
tipo: completar
respuestas_validas:
  - "CO2"
  - "CH4"
  - "N2O"

enunciado: "Mientras que la agricultura preindustrial afectaba el uso del suelo, la industrialización introdujo una quema masiva de combustibles fósiles que aumentó la concentración de ___ en la atmósfera."

explicacion: |
  El dióxido de carbono (CO2) es el principal gas de efecto invernadero emitido por la combustión de carbón, petróleo y gas natural, siendo el principal responsable del forzamiento radiativo antropogénico.
```

### 9 — Evolución del impacto ambiental

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["escala", "comparacion"]

respuesta_orden: ["Deforestación local", "Cambio en el uso del suelo", "Emisiones globales de GEI"]
tipo: ordenar

opciones_explicitas: ["Deforestación local", "Cambio en el uso del suelo", "Emisiones globales de GEI"]

enunciado: "Ordene los siguientes fenómenos de menor a mayor escala de impacto climático global, según la evolución histórica de la huella humana:"

explicacion: |
  La escala comenzó con la modificación de paisajes locales (deforestación), continuó con cambios sistemáticos en el uso del suelo (agricultura intensiva) y culminó con la alteración química global de la atmósfera (emisiones de GEI).
```

### 10 — El factor de la escala temporal

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["tiempo", "ciclo_carbono"]

respuesta: "ciclo_largo"
tipo: mc

opciones_explicitas: ["ciclo_corto", "ciclo_largo"]

enunciado: "La agricultura preindustrial se basaba en ciclos biológicos rápidos. La industrialización, al extraer carbono de depósitos fósiles, introdujo carbono en el ___ ciclo del carbono."

explicacion: |
  El carbono en los combustibles fósiles forma parte del ciclo geológico (largo plazo). Al quemarlo, la humanidad está moviendo carbono de un reservorio de millones de años a la atmósfera de forma casi instantánea.
```

### 11 — El concepto de Antropoceno

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["geologia", "antropoceno", "conceptos"]

tipo: mc
opciones_explicitas: ["Una era de predominio de la vida vegetal", "Una época geológica definida por el impacto humano medible", "Un periodo de estabilidad climática absoluta", "La era de la formación de los continentes"]
respuesta: "Una época geológica definida por el impacto humano medible"

enunciado: "El término 'Antropoceno' se utiliza para describir una propuesta de nueva época geológica caracterizada por ___."

explicacion: |
  El Antropoceno propone que la actividad humana se ha convertido en una fuerza geológica dominante, capaz de dejar marcas permanentes en los estratos sedimentarios, el clima y la biodiversidad de la Tierra.
```

### 12 — Evidencias del impacto humano

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["evidencias", "sedimentos", "huella_geologica"]

tipo: completar
respuestas_validas:
  - "sedimentos artificiales"
respuesta: "sedimentos artificiales"

enunciado: "En el registro geológico del Antropoceno, se busca identificar marcadores como los plásticos y el hormigón que se consolidan como ___."

explicacion: |
  Los materiales sintéticos como los plásticos, el hormigón y los isótopos radiactivos actúan como 'tecnofósiles' que permiten identificar nuestra era en el futuro.
```

### 13 — Factores de cambio climático

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["clima", "gases_efecto_invernadero"]

tipo: mc
opciones_explicitas: ["Aumento de la radiación solar", "Cambios en la composición de la atmósfera por gases de efecto invernadero", "Desplazamiento de las placas tectónicas", "Variaciones en el campo magnético terrestre"]
respuesta: "Cambios en la composición de la atmósfera por gases de efecto invernadero"

enunciado: "Uno de los principales motores del cambio climático en el Antropoceno es la alteración de la atmósfera mediante ___."

explicacion: |
  La quema de combustibles fósiles y la deforestación han incrementado la concentración de gases como el CO2, alterando el balance térmico del planeta.
```

### 14 — La extinción masiva actual

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["biodiversidad", "extinciones"]

tipo: mc
opciones_explicitas: ["la sexta extinción masiva", "la era de hielo", "la expansión de los continentes", "el ciclo de las mareas"]
respuesta: "la sexta extinción masiva"

enunciado: "El Antropoceno se asocia con una crisis biológica sin precedentes conocida como ___."

explicacion: |
  La tasa actual de extinción de especies es significativamente superior a la tasa natural, lo cual es una característica distintiva de la huella humana sobre la biosfera.
```

### 15 — Secuencia de impacto geológico

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
respuesta_orden: ["Emisión masiva de gases de efecto invernadero", "Aumento de la temperatura global", "Alteración de los ciclos biogeoquímicos", "Cambios en la composición de los sedimentos futuros"]
```

### 16 — El registro de los núcleos de hielo

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["paleoclimatologia", "co2", "glaciares"]

enunciado: "Al analizar los núcleos de hielo, se observa que durante los periodos preindustriales los niveles de CO2 se mantenían en torno a los 280 ppm, pero tras la Revolución Industrial, los valores saltaron a aproximadamente 420 ppm."

respuesta: 420
tipo: completar
tolerancia_abs: 5

explicacion: |
  Los núcleos de hielo actúan como cápsulas del tiempo. Mientras que la variabilidad natural mantenía el CO2 en niveles estables (alrededor de 280-300 ppm), la quema de combustibles fósiles disparó la concentración actual.
```

### 17 — El cambio de tendencia

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

### 18 — Componentes del registro glacial

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["metodologia", "paleoclimatologia"]

enunciado: "Para reconstruir la atmósfera del pasado, los científicos extraen burbujas de aire atrapadas en el hielo. El proceso para entender el clima antiguo sigue este orden lógico:"

opciones_explicitas: ["Extracción de núcleos", "Análisis de burbujas de aire", "Medición de gases de efecto invernadero", "Comparación con datos actuales"]

respuesta_orden: ["Extracción de núcleos", "Análisis de burbujas de aire", "Medición de gases de efecto invernadero", "Comparación con datos actuales"]
tipo: ordenar

explicacion: |
  Primero se extrae el cilindro de hielo, luego se liberan las burbujas atrapadas para medir la composición química y finalmente se compara con los niveles actuales para identificar la anomalía industrial.
```

### 19 — La anomalía del CO2

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["co2", "quimica_atmosferica"]

enunciado: "Si comparamos la variabilidad natural (V) con el registro post-industrial (I), la diferencia fundamental es que la magnitud de la desviación de I respecto a V es ___."

respuestas_validas:
  - "significativa"
  - "nula"
  - "inversa"

respuesta: "significativa"
tipo: completar

explicacion: |
  La magnitud del aumento de CO2 tras la industrialización es órdenes de magnitud superior a las variaciones naturales observadas en los registros de hielo de periodos interglaciares.
```

### 20 — El impacto de la industrialización

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

### 21 — Impacto de la Revolución Industrial

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

### 22 — Emisiones de CO2 y Carbón

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["emisiones", "carbono", "historia"]

variables:
  datos: [["1750", "10"], ["1950", "5000"], ["2020", "36000"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "En el año {datos[idx][0]}, la tasa de emisión global de CO2 (en millones de toneladas) era aproximadamente de ____."

pasos:
  - "Identificar el año en la cronología histórica."
  - "Asociar el valor de emisiones correspondiente a dicho año."

explicacion: |
  La escala de emisiones creció exponencialmente desde el año {datos[idx][0]} debido a la intensificación de la actividad económica.
```

### 23 — Evolución del Impacto Climático

```
metadata:
  materia: "historia_profunda"
  tema: "huella_clima_evolucion"
  nivel: "intermedio"
  tags: ["cronologia", "impacto"]

respuesta_orden: ["Era Preindustrial", "Revolución Industrial", "Era de la Información"]
tipo: ordenar
opciones_explicitas: ["Era Preindustrial", "Revolución Industrial", "Era de la Información"]

enunciado: "Ordena cronológicamente las etapas de la humanidad según el aumento progresivo de su huella climática:"

explicacion: |
  La secuencia muestra cómo la complejidad tecnológica y el uso de combustibles fósiles aumentaron la huella de carbono de forma escalonada.
```

### 24 — El Gran Aceleramiento

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
respuestas_validas:
  - "estacionario"
  - "acelerado"

enunciado: "El impacto climático se describe como ____ en el periodo {datos[idx][0]}."

explicacion: |
  El periodo después de 1950, conocido como 'El Gran Aceleramiento', muestra un crecimiento exponencial en el impacto humano sobre la biosfera.
```

### 25 — Comparativa de Huella de Carbono

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["comparativa", "clima"]

variables:
  comparativa: [["Preindustrial", "Baja"], ["Industrial", "Alta"]]
  idx: uno_de([0, 1])

respuesta: comparativa[idx][1]
tipo: mc
opciones_explicitas: ["Baja", "Media", "Alta"]

enunciado: "La huella de carbono de la era {comparativa[idx][0]} es de magnitud ____."

explicacion: |
  La magnitud depende directamente de la fuente de energía predominante en cada periodo histórico.
```
