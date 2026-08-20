### 1 — El motor del modelo
```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador"
  nivel: "basico"
  tags: ["economia", "exportacion"]

tipo: mc
opciones_explicitas: ["Manufacturas industriales", "Materias primas agropecuarias", "Productos tecnológicos", "Servicios financieros"]

enunciado: "El modelo agroexportador argentino, consolidado a fines del siglo XIX, se basaba fundamentalmente en la exportación de ___."

explicacion: |
  El modelo agroexportador consistía en la exportación de productos de la naturaleza (carne, cereales, lana) e importación de productos manufacturados de Europa.
```

### 2 — El flujo de capitales
```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador"
  nivel: "intermedio"
  tags: ["capital", "infraestructura"]

variables:
  tipo_inversion_idx: uno_de([0, 1])
  inversion_tipo: uno_de(["Inversión extranjera en infraestructura", "Inversión nacional en industria"])

tipo: mc
opciones_explicitas: ["Inversión extranjera en infraestructura", "Inversión nacional en industria", "Préstamos de organismos internacionales", "Donaciones estatales"]

enunciado: "Para sostener el modelo agroexportador, fue fundamental la llegada de {inversion_tipo}."

explicacion: |
  La gran inversión extranjera (principalmente británica) se destinó a la construcción de ferrocarriles y puertos para facilitar la salida de productos.
```

### 3 — La gran transformación demográfica
```
metadata:
  materia: "historia"
  tema: "inmigracion_masiva"
  nivel: "basico"
  tags: ["demografia", "inmigracion"]

tipo: completar
respuestas_validas: ["Europa", "Asia", "África", "Oceanía"]

enunciado: "Durante el periodo agroexportador, la mayoría de la corriente migratoria hacia la Argentina provenía de ___."

explicacion: |
  El flujo migratorio masivo de finales del siglo XIX y principios del XX estuvo compuesto mayoritariamente por inmigrantes europeos (italianos y españoles principalmente).
```

### 4 — El orden de los factores
```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador"
  nivel: "intermedio"
  tags: ["causalidad", "procesos"]

tipo: ordenar
opciones_explicitas: ["Expansión de la frontera agrícola", "Llegada de ferrocarriles", "Aumento de la demanda europea", "Consolidación del modelo agroexportador"]

enunciado: "Ordene cronológicamente los procesos que permitieron la consolidación del modelo agroexportador:"

explicacion: |
  Primero se expandió la frontera (con la conquista del desierto), luego se conectó con trenes, lo que permitió responder a la demanda europea y consolidar el modelo.
```

### 5 — El rol del Estado
```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador"
  nivel: "avanzado"
  tags: ["estado", "politica"]

variables:
  caso_idx: uno_de([0, 1])
  escenario: uno_de(["La exportación de granos fue ___", "La exportación de carne fue ___"])
  resultado: uno_de(["el motor principal de la balanza comercial", "un proceso que requirió la expansión de frigoríficos"])

tipo: mc
opciones_explicitas: ["Un proceso de autosuficiencia", "Un motor de dependencia externa", "Un sistema de comercio cerrado", "Una economía de subsistencia"])

enunciado: "En el contexto del modelo agroexportador, la dinámica comercial se caracterizó por ser {resultado}."

explicacion: |
  El modelo generó una fuerte dependencia de los mercados externos (Europa) y de la tecnología/capital extranjero, integrando a Argentina al mercado mundial como proveedor de materias primas.
```