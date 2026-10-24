### 1 — El modelo agroexportador
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["historia_economica", "agroexportacion"]

respuesta: "modelo agroexportador"
tipo: completar
respuestas_validas: ["modelo agroexportador"]

enunciado: "Antes de la industrialización por sustitución de importaciones, la economía argentina se basaba en el ___."

explicacion: |
  El modelo agroexportador consistía en la exportación de materias primas (carnes y cereales) e importación de manufacturas, consolidando una estructura de dependencia hacia los mercados centrales.
```

### 2 — El motor de la ISI
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["isi", "industrializacion"]

variables:
  escenario: uno_de([["Sustitución de importaciones", "Proteccionismo"], ["Sustitución de importaciones", "Libre cambio"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Sustitución de importaciones", "Libre cambio"]

enunciado: "El proceso de Industrialización por Sustitución de Importaciones (ISI) buscaba principalmente la {escenario[0]} mediante políticas de protección de la industria nacional."

explicacion: |
  La ISI buscaba que el país dejara de depender de la compra de productos manufacturados en el exterior, fomentando la producción local mediante aranceles y subsidios.
```

### 3 — Factores de la transformación industrial
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["migraciones", "urbanizacion"]

respuesta: "urbanización"
tipo: completar
respuestas_validas: ["urbanización"]

enunciado: "El crecimiento de la industria durante mediados del siglo XX impulsó un proceso de rápida ___ en la población argentina."

explicacion: |
  La demanda de mano de obra en las fábricas de los centros urbanos (especialmente en Buenos Aires, Rosario y Córdoba) fomentó grandes migraciones internas y la expansión de las ciudades.
```

### 4 — Secuencia de la transición económica
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["ciclos_economicos", "transicion"]

respuesta: ["Modelo Agroexportador", "Crisis de la demanda externa", "Industrialización por Sustitución de Importaciones"]
tipo: ordenar
opciones_explicitas: ["Modelo Agroexportador", "Crisis de la demanda externa", "Industrialización por Sustitución de Importaciones"]

enunciado: "Ordene cronológicamente los procesos económicos que marcaron la transición de la estructura productiva argentina en el siglo XX:"

explicacion: |
  La crisis de la demanda externa (causada por las Guerras Mundiales y la Gran Depresión) hizo inviable seguir importando productos, lo que forzó el salto hacia la ISI.
```

### 5 — El rol del Estado en la ISI
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["estado", "politica_industrial"]

respuesta: "intervencionista"
tipo: mc
opciones_explicitas: ["intervencionista", "liberal", "ausente"]

enunciado: "Para sostener el modelo ISI, el Estado argentino adoptó un rol principalmente _________."

explicacion: |
  El Estado asumió un rol activo mediante la regulación de aranceles, la creación de empresas públicas y el fomento del mercado interno para asegurar el crecimiento industrial.
```