### 1 — El registro de los núcleos de hielo
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

respuesta: datos_clima[1][0]
tipo: input
tolerancia_abs: 5

explicacion: |
  Los núcleos de hielo actúan como cápsulas del tiempo. Mientras que la variabilidad natural mantenía el CO2 en niveles estables (alrededor de 280-300 ppm), la quema de combustibles fósiles disparó la concentración actual.
```

### 2 — El cambio de tendencia
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

### 3 — Componentes del registro glacial
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

### 4 — La anomalía del CO2
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

### 5 — El impacto de la industrialización
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