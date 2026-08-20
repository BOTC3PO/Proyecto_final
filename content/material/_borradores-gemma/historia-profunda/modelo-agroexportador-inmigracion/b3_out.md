### 1 — Impulso de la demanda externa
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

### 2 — Infraestructura y transporte
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

### 3 — Expansión territorial
```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "avanzado"
  tags: ["frontera", "territorio"]

variables:
  escenario_idx: uno_de([0, 1])

variables:
  datos: [
    ["Conquista del Desierto", "expansión de la frontera agrícola"],
    ["Guerra de la Triple Alianza", "consolidación de fronteras norteñas"]
  ]

respuesta: datos[escenario_idx][1]
tipo: "completar"
respuestas_validas: ["expansión de la frontera agrícola"]

enunciado: "La denominada {datos[escenario_idx][0]} permitió la {datos[escenario_idx][1]} para el modelo agroexportador."

explicacion: |
  La ocupación de territorios indígenas fue fundamental para incorporar nuevas tierras al circuito productivo de exportación.
```

### 4 — Capitales extranjeros
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

### 5 — Secuencia de factores
```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "avanzado"
  tags: ["logica", "procesos"]

opciones_explicitas: ["Demanda europea", "Expansión de frontera", "Ferrocarriles", "Inversión británica"]

respuesta: ["Demanda europea", "Expansión de frontera", "Ferrocarriles", "Inversión británica"]
tipo: "ordenar"

enunciado: "Ordene cronológicamente los factores que permitieron la consolidación del modelo (desde el estímulo externo hasta la infraestructura de transporte):"

explicacion: |
  El proceso comenzó con la necesidad de alimentos en Europa, seguida por la ocupación de tierras, la llegada de capitales para infraestructura y finalmente la red ferroviaria que integró el sistema.
```