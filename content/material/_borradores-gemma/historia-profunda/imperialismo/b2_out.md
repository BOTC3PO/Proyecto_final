### 1 — Motivaciones económicas
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "basico"
  tags: ["economia", "materias_primas", "mercados"]

respuesta: "materias_primas"
tipo: completar
respuestas_validas: ["materias_primas"]

enunciado: "Durante el siglo XIX, la Revolución Industrial impulsó a las potencias europeas a buscar en África y Asia un suministro constante de ___ para alimentar sus fábricas."

explicacion: |
  La necesidad de materias primas (como caucho, algodón o minerales) fue un motor central del imperialismo para sostener el crecimiento industrial europeo.
```

### 2 — El prestigio nacional
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["politica", "prestigio", "competencia"]

variables:
  escenario: uno_de([["Gran Bretaña", "control naval"], ["Francia", "expansión territorial"]])

respuesta: uno_de(["prestigio", "recursos", "religión"])
tipo: mc
opciones_explicitas: ["prestigio", "recursos", "religión"]

enunciado: "La expansión colonial no solo buscaba beneficios económicos, sino también aumentar el {escenario[1]} de la nación frente a sus rivales europeos. Esta motivación se clasifica como de tipo ___."

explicacion: |
  La competencia por el poder político y el estatus internacional (prestigio) llevó a las potencias a disputarse territorios estratégicos para demostrar su dominio.
```

### 3 — Justificaciones ideológicas
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "avanzado"
  tags: ["ideologia", "darwinismo_social", "superioridad"]

respuesta: "darwinismo social"
tipo: completar
respuestas_validas: ["darwinismo social"]

enunciado: "Para justificar la dominación sobre otros pueblos, muchas potencias utilizaron la idea de la superioridad racial, concepto erróneamente aplicado de la biología a la sociedad, conocido como ___."

explicacion: |
  El darwinismo social fue una distorsión de la teoría de la evolución que se utilizó para legitimar el control colonial bajo la premisa de que ciertas razas eran "naturalmente" superiores.
```

### 4 — Causas del Imperialismo
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "intermedio"
  tags: ["causas", "clasificacion"]]

respuesta: ["económicas", "políticas", "ideológicas"]
tipo: ordenar

enunciado: "Ordena las siguientes motivaciones del imperialismo desde la más materialista (recursos) hasta la más abstracta (creencias):"

pasos:
  - "Búsqueda de nuevos mercados y materias primas"
  - "Competencia por el prestigio y control territorial"
  - "Nociones de superioridad cultural o misión civilizadora"

opciones_explicitas: ["económicas", "políticas", "ideológicas"]

explicacion: |
  El imperialismo fue un fenómeno multidimensional: comenzó con la necesidad económica, se intensificó por la rivalidad política y se legitimó mediante ideologías culturales.
```

### 5 — El motor comercial
```
metadata:
  materia: "historia_profunda"
  tema: "imperialismo"
  nivel: "basico"
  tags: ["economia", "mercados"]

respuesta: "nuevos mercados"
tipo: mc
opciones_explicitas: ["nuevos mercados", "mano de obra barata", "territorio para el descanso"]

enunciado: "Además de extraer recursos, las potencias buscaban establecer ___ para colocar el exceso de producción de sus industrias."

explicacion: |
  La creación de mercados cautivos en las colonias permitía a las metrópolis vender sus productos manufacturados sin competencia, asegurando el ciclo de acumulación de capital.
```