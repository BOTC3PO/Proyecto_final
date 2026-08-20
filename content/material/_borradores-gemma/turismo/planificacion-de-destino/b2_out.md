### 1 — Gestión de la capacidad de carga
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["sostenibilidad", "capacidad_de_carga"]

variables:
  escenario: uno_de([
    ["Parque Nacional Iguazú", 500, "500"],
    ["Isla de Venecia", 1200, "1200"],
    ["Machu Picchu", 4000, "4000"]
  ])

enunciado: "En el escenario de {escenario[0]}, se ha determinado que la capacidad de carga turística es de {escenario[1]} visitantes diarios para evitar la degradación del ecosistema. Si el flujo actual es de {escenario[1]} personas, ¿el destino se encuentra en su límite de capacidad de carga?"

respuesta: escenario[2]
tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

explicacion: |
  Cuando el número de visitantes alcanza la capacidad de carga establecida, el destino ha llegado a su límite operativo para garantizar la sostenibilidad ambiental.
```

### 2 — Etapas del ciclo de vida de un destino
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "avanzado"
  tags: ["modelo_butler", "ciclo_de_vida"]

enunciado: "De acuerdo con el modelo de Butler, ordene cronológicamente las etapas por las que pasa un destino turístico desde que es descubierto hasta que su demanda empieza a disminuir."

pasos:
  - "Exploración/Descubrimiento"
  - "Auge/Desarrollo"
  - "Consolidación"
  - "Estancamiento"

respuesta: ["Exploración/Descubrimiento", "Auge/Desarrollo", "Consolidación", "Estancamiento"]
tipo: ordenar
opciones_explicitas: ["Exploración/Descubrimiento", "Auge/Desarrollo", "Consolidación", "Estancamiento"]

explicacion: |
  El modelo de Butler describe cómo los destinos evolucionan desde la exploración hasta el estancamiento, dependiendo de la gestión de la demanda y la infraestructura.
```

### 3 — Indicadores de sostenibilidad
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "basico"
  tags: ["indicadores", "sostenibilidad"]

enunciado: "Para medir el impacto ambiental en un destino costero, un planificador debe monitorear la calidad del agua. Si el parámetro de turbidez aumenta significativamente, esto indica una ___ gestión de los residuos o la erosión costera."

respuesta: ["mala"]
tipo: completar
respuestas_validas: ["mala", "deficiente"]

explicacion: |
  La gestión de residuos y la protección de la línea de costa son pilares fundamentales para mantener la calidad ambiental de los destinos de playa.
```

### 4 — El concepto de Carrying Capacity
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["capacidad_carga", "teoria"]

enunciado: "¿Es correcto afirmar que la 'Capacidad de Carga Turística' se refiere exclusivamente al número máximo de personas que un espacio puede albergar físicamente sin riesgo de accidentes?"

respuesta: falso
tipo: vf

explicacion: |
  Falso. La capacidad de carga es multidimensional: incluye la capacidad física, la capacidad ecológica (impacto ambiental) y la capacidad psicológica (percepción de la calidad de la experiencia por parte del turista).
```

### 5 — Estrategias de mitigación de impactos
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "avanzado"
  tags: ["mitigacion", "gestion_turistica"]

variables:
  caso: uno_de([
    ["Un pueblo con exceso de ruido por bares", "Implementar zonas de silencio y horarios de cierre"],
    ["Un sendero con erosión por exceso de caminantes", "Construir pasarelas elevadas de madera"],
    ["Un arrecife con daño por contacto de buceadores", "Establecer estaciones de briefing obligatorio"]
  ])

enunciado: "En el caso de {caso[0]}, la medida de gestión más adecuada para mitigar el impacto negativo es: ___"

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["Implementar zonas de silencio y horarios de cierre", "Construir pasarelas elevadas de madera", "Establecer estaciones de briefing obligatorio"]

explicacion: |
  Cada problema de planificación requiere una solución específica: el ruido requiere regulación de horarios, la erosión infraestructura física y el daño biológico educación/normativa.
```