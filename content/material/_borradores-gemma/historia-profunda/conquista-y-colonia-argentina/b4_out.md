### 1 — Resistencia Mapuche
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

### 2 — El proceso de mestizaje
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["mestizaje", "sociedad", "colonia"]

variables:
  escenario: uno_de([["biológico", "cultural"], ["biológico", "político"], ["religioso", "militar"]])

respuesta: escenario[1]
tipo: completar

respuestas_validas: ["biológico", "cultural", "político", "religioso", "militar"]

enunciado: "El proceso de mestizaje en el Virreinato del Río de la Plata fue de carácter tanto ___ como ___."

explicacion: |
  El mestizaje no fue solo la unión biológica de españoles e indígenas, sino también un profundo intercambio de costumbres, lenguas y creencias (mestizaje cultural).
```

### 3 — Impacto demográfico
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["demografia", "impacto", "enfermedades"]

respuesta: 0.7
tipo: input
tolerancia_abs: 0.1

enunciado: "Se estima que, debido a las guerras de conquista y, fundamentalmente, a las epidemias traídas por los europeos, la población indígena sufrió una reducción drástica. Si una población original era de 100 personas, ¿cuántas personas (estimado decimal) quedarían tras una reducción del 70%?"

pasos:
  - "Calcular el 70% de la población original (100 * 0.70)."
  - "Restar ese valor al total original (100 - 70)."

explicacion: |
  Las enfermedades como la viruela y el sarampión fueron agentes devastadores que causaron un colapso demográfico en los pueblos originarios.
```

### 4 — Organización social colonial
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

### 5 — Consecuencias de la conquista
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