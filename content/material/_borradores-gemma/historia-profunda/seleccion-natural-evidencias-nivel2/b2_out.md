### 1 — Radiaciones Adaptativas
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["evolucion", "especiacion", "adaptacion"]

respuesta: "radiacion_adaptativa"
tipo: mc

opciones_explicitas: ["extincion_masiva", "radiacion_adaptativa", "mutacion_espontanea", "deriva_genetica"]

enunciado: "Cuando un grupo de organismos coloniza un nuevo entorno con múltiples nichos ecológicos vacíos, se observa un proceso de diversificación rápida conocido como ___."

explicacion: |
  La radiación adaptativa ocurre cuando un linaje ancestral se diversifica rápidamente en una variedad de formas que permiten colonizar diferentes nichos ecológicos.
```

### 2 — El registro fósil y la escala temporal
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["fosiles", "tiempo_geologico"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[["Paleozoico", "explosión de vida"], ["Mesozoico", "dominio de reptiles"]], [["Paleozoico", "vida marina diversa"], ["Mesozoico", "aparición de aves"]]]

respuesta: datos[escenario_idx][0][0]
tipo: completar
respuestas_validas: ["Paleozoico", "Mesozoico"]

enunciado: "El registro fósil muestra que la selección natural ha moldeado la vida a través de eras geológicas. Un ejemplo es el ___, donde se observa una gran diversificación de formas de vida marinas."

explicacion: |
  El registro fósil es una evidencia clave que permite observar cómo la selección natural actúa sobre patrones de diversificación a lo largo de millones de años.
```

### 3 — Homologías y ancestros comunes
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "avanzado"
  tags: ["homologia", "anatomia_comparada"]

respuesta: "estructuras_homologas"
tipo: mc

opciones_explicitas: ["estructuras_anlogas", "estructuras_homologas", "mutaciones_neutrales", "aislamiento_reproductivo"]

enunciado: "La selección natural actúa sobre estructuras que derivan de un ancestro común, aunque sus funciones hayan cambiado. Estas estructuras se denominan ___."

explicacion: |
  Las estructuras homólogas (como el brazo de un humano y la aleta de una ballena) son evidencia de que la selección natural ha adaptado un mismo plan corporal a diferentes funciones.
```

### 4 — Secuencia de eventos evolutivos
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["procesos", "evolucion"]

opciones_explicitas: ["Variabilidad", "Selección Natural", "Adaptación", "Especiación"]
respuesta: ["Variabilidad", "Selección Natural", "Adaptación", "Especiación"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que explican cómo la selección natural conduce a la diversificación de nuevas especies a lo largo del tiempo:"

explicacion: |
  Primero debe existir variabilidad genética; luego la selección natural actúa sobre esas variaciones en un entorno dado, resultando en adaptaciones que, acumuladas, llevan a la especiación.
```

### 5 — El papel de la extinción en la diversificación
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "avanzado"
  tags: ["extincion", "nichos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["extinciones_masivas", "liberan_nichos"], ["extinciones_masivas", "reducen_la_diversidad"]]

respuesta: escenarios[caso_idx][1]
tipo: completar
respuestas_validas: ["liberan_nichos", "reducen_la_diversidad"]

enunciado: "Un patrón observado en la historia de la vida es que las ___ suelen actuar como catalizadores para nuevas radiaciones adaptativas porque ___."

explicacion: |
  Las extinciones masivas eliminan competidores y ocupantes de nichos, permitiendo que los supervivientes se diversifiquen rápidamente mediante la selección natural en los espacios vacíos.
```