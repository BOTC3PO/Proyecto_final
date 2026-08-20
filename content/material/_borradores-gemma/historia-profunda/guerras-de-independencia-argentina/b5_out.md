### 1 — El Primer Grito de Libertad
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["revolucion_mayo", "fechas"]

variables:
  escenarios: [["1810", "25 de mayo"], ["1816", "9 de julio"], ["1810", "25 de mayo"]]
  idx: uno_de([0, 1])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["25 de mayo", "9 de julio", "20 de junio", "12 de octubre"]

enunciado: "La Revolución de Mayo, hito fundamental del proceso de independencia, tuvo lugar en el año {escenarios[idx][0]}."

explicacion: |
  El proceso de independencia comenzó con la Revolución de Mayo en 1810, que llevó a la formación del primer gobierno patrio.
```

### 2 — La Declaración de la Independencia
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["congreso_tucuman", "independencia"]

variables:
  hitos: [["Congreso de Tucumán", "9 de julio de 1816"], ["Revolución de Mayo", "25 de mayo de 1810"]]
  idx: uno_de([0, 1])

respuesta: hitos[idx][1]
tipo: completar
respuestas_validas: ["9 de julio de 1816", "25 de mayo de 1810"]

enunciado: "El hito conocido como {hitos[idx][0]} se consolidó formalmente el día ___."

explicacion: |
  El Congreso de Tucumán declaró la independencia de las Provincias Unidas en 1816.
```

### 3 — Orden Cronológico de la Emancipación
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["cronologia", "procesos"]

respuesta: ["Revolución de Mayo", "Establecimiento del Directorio", "Declaración de la Independencia"]
tipo: ordenar
opciones_explicitas: ["Revolución de Mayo", "Establecimiento del Directorio", "Declaración de la Independencia"]

enunciado: "Ordena cronológicamente los siguientes hitos del proceso de independencia:"

explicacion: |
  Primero ocurrió la Revolución de Mayo (1810), luego la creación del Directorio (1812) y finalmente la Declaración de la Independencia (1816).
```

### 4 — Batallas Decisivas
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "avanzado"
  tags: ["batallas", "san martin"]

variables:
  batallas: [["San Lorenzo", "1813"], ["Maipú", "1818"], ["Chacabuco", "1817"]]
  idx: uno_de([0, 1, 2])

respuesta: batallas[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "La batalla de {batallas[idx][0]} fue un enfrentamiento clave ocurrido en el año ___."

explicacion: |
  Cada una de estas batallas fue fundamental para consolidar la independencia en distintos frentes.
```

### 5 — El Cruce de los Andes
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["san_martin", "campana_libertadora"]

variables:
  campañas: [["Campaña de los Andes", "liberar Chile"], ["Campaña del Norte", "defender la frontera"]]
  idx: uno_de([0, 1])

respuesta: campañas[idx][1]
tipo: mc
opciones_explicitas: ["liberar Chile", "defender la frontera", "conquistar el Perú", "expulsar a los realistas de Buenos Aires"]

enunciado: "El objetivo principal de la {campañas[idx][0]} liderada por San Martín era ___."

explicacion: |
  San Martín diseñó el plan continental para asegurar la independencia de las Provincias Unidas mediante la liberación de Chile y luego Perú.
```