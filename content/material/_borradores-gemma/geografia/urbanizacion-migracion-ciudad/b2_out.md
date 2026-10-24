### 1 — Causas de la migración rural-urbana
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["migracion", "campo", "ciudad"]

tipo: mc
opciones_explicitas: ["Falta de servicios y empleo en el campo", "Exceso de recursos naturales en la ciudad", "Deseo de vivir en zonas con menos población"]

enunciado: "Uno de los principales motores que impulsa el éxodo rural hacia las grandes urbes es la ___."

explicacion: |
  La migración rural-urbana suele ser motivada por factores de 'expulsión' en el campo (falta de trabajo, servicios o tierras) y factores de 'atracción' en la ciudad (ofertas laborales y mejores servicios).
```

### 2 — El proceso de urbanización
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["urbanizacion", "crecimiento"]

variables:
  escenario: uno_de([["crecimiento_desordenado", "crecimiento_planificado"], ["asentamientos_informales", "barrios_planificados"], ["servicios_insuficientes", "infraestructura_moderna"]])
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["crecimiento_planificado", "crecimiento_desordenado"]

enunciado: "Cuando la migración hacia la ciudad es masiva y rápida, suele producirse un {escenario[idx][0]} que genera problemas de vivienda."

explicacion: |
  El crecimiento desordenado ocurre cuando la infraestructura urbana no puede seguir el ritmo de la llegada de nuevos habitantes, derivando en asentamientos informales.
```

### 3 — Impacto en la población urbana
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["demografia", "poblacion"]

tipo: completar
respuestas_validas: ["industrialización", "agricultura"]

enunciado: "Históricamente, el proceso de migración del campo a la ciudad ha estado estrechamente vinculado al proceso de ___."

explicacion: |
  La Revolución Industrial demandó mano de obra masiva en las ciudades para las fábricas, lo que aceleró el traslado de la población rural al ámbito urbano.
```

### 4 — Secuencia del proceso migratorio
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

tipo: ordenar
opciones_explicitas: ["Búsqueda de empleo en la ciudad", "Dificultades económicas en el sector rural", "Asentamiento en la periferia urbana"]

enunciado: "Ordena cronológicamente las etapas típicas de un proceso de migración rural-urbana:"

explicacion: |
  Primero surge la necesidad o dificultad en el origen (campo), luego se realiza el traslado buscando oportunidades y finalmente se establece la residencia en la zona de destino (ciudad).
```

### 5 — Consecuencias socioeconómicas
```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "avanzado"
  tags: ["economia", "servicios"]

variables:
  caso: uno_de([["alta_densidad", "baja_densidad"], ["escasez_servicios", "abundancia_servicios"], ["desempleo_estructural", "pleno_empleo"]])
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["alta_densidad", "baja_densidad"]

enunciado: "La llegada masiva de personas a las urbes provoca un aumento de la {caso[idx][0]} en los centros urbanos."

explicacion: |
  La concentración de población en áreas limitadas aumenta la densidad demográfica, lo que puede sobrecargar los servicios públicos y el mercado laboral.
```