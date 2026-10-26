### 1 — El motor de la economía
```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["economia", "exportacion"]

variables:
  escenario: uno_de([["trigo", "cereales"], ["carne", "ganadería"], ["lana", "ovinos"]])
  idx: uno_de([0, 1, 2])
  producto: escenario[idx][0]

respuesta: producto
tipo: mc
opciones_explicitas: ["trigo", "carne", "lana", "maíz"]

enunciado: "Durante el modelo agroexportador, la economía argentina se centró en la exportación de productos primarios. Si el principal producto de exportación en el escenario dado es {producto}, ¿cuál es el rubro correspondiente?"

explicacion: |
  El modelo agroexportador se basó en la exportación de materias primas hacia Europa, siendo el {producto} uno de los pilares fundamentales.
```

### 2 — El flujo migratorio
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

respuesta: nacionalidad
tipo: mc
opciones_explicitas: ["italianos", "españoles", "alemanes", "británicos"]

enunciado: "La gran inmigración europea fue clave para la mano de obra en el campo. Si el grupo mencionado es de {nacionalidad}, ¿de qué nacionalidad se trata?"

explicacion: |
  La llegada masiva de inmigrantes de Europa (principalmente italianos y españoles) fue esencial para la expansión de la frontera agrícola.
```

### 3 — Conectividad ferroviaria
```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["transporte", "infraestructura"]

variables:
  infraestructura: [["ferrocarril", "transporte"], ["puerto", "comercio"], ["telégrafo", "comunicación"]]
  idx: uno_de([0, 1, 2])
  elemento: infraestructura[idx][0]

respuesta: elemento
tipo: completar
respuestas_validas: ["ferrocarril", "puerto", "telégrafo"]

enunciado: "Para integrar los centros de producción con los puertos, se construyó una red de ___ fundamental para el modelo."

explicacion: |
  El ___ permitió el traslado masivo de cargas desde el interior hacia los puertos de exportación de manera eficiente.
```

### 4 — El rol de los puertos
```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["puertos", "comercio"]

variables:
  puerto_clave: ["Buenos Aires", "Rosario", "Bahía Blanca"]
  idx: uno_de([0, 1, 2])
  ciudad: puerto_clave[idx]

respuesta: ciudad
tipo: mc
opciones_explicitas: ["Buenos Aires", "Rosario", "Bahía Blanca", "Córdoba"]

enunciado: "El sistema agroexportador dependía de la salida hacia el mundo a través de puertos específicos. Si el puerto central es {ciudad}, ¿cuál es?"

explicacion: |
  Los puertos eran el punto de conexión vital entre la producción interna y el mercado mundial.
```

### 5 — Secuencia de la exportación
```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "avanzado"
  tags: ["proceso", "logistica"]

respuesta: ["Producción", "Transporte", "Exportación"]
tipo: ordenar
opciones_explicitas: ["Producción", "Transporte", "Exportación"]

enunciado: "Ordene el proceso lógico de una mercancía en el modelo agroexportador: desde la cosecha hasta la salida del país."

explicacion: |
  El ciclo comenzaba con la ___ en el campo, seguía con el ___ ferroviario y terminaba con la ___ en el puerto.
```