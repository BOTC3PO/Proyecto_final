### 1 — La jerarquía de memoria
```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["arquitectura", "memoria"]

tipo: mc
opciones_explicitas: ["Mayor velocidad, menor capacidad", "Menor velocidad, mayor capacidad", "Igual velocidad, mayor costo", "Mayor velocidad, mayor costo"]

enunciado: "En una jerarquía de memoria típica, a medida que nos movemos desde la CPU hacia el almacenamiento secundario (disco), la memoria se vuelve..."

respuesta: "Menor velocidad, mayor capacidad"

explicacion: |
  La jerarquía busca equilibrar costo y rendimiento. Los niveles superiores (Caché) son muy rápidos pero caros y pequeños; los niveles inferiores (Disco) son lentos pero económicos y masivos.
```

### 2 — Memoria volátil
```
metadata:
  materia: "informatica"
  tema: "ram_caracteristicas"
  nivel: "basico"
  tags: ["ram", "volatilidad"]

tipo: vf

enunciado: "La memoria RAM es considerada una memoria volátil porque pierde su contenido al interrumpirse el suministro eléctrico."

respuesta: falso

explicacion: |
  La RAM es volátil por definición. Si no hay energía, los datos almacenados en sus capacitores se pierden.
```

### 3 — El rol de la memoria caché
```
metadata:
  materia: "informatica"
  tema: "cache_funcionamiento"
  nivel: "intermedio"
  tags: ["cache", "latencia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["L1", "L2", "L3"], ["L1", "L3", "L2"]]

tipo: completar
respuestas_validas: ["L1", "L2", "L3"]

enunciado: "En una arquitectura con múltiples niveles de caché, la caché que se encuentra físicamente más cerca del núcleo del procesador es la caché ___."

pasos:
  - "Identificar la posición de la caché en la jerarquía respecto al procesador."
  - "Determinar cuál tiene la menor latencia de acceso."

respuesta: "L1"

explicacion: |
  La caché L1 (Level 1) es la más rápida y cercana al núcleo, seguida de la L2 y finalmente la L3.
```

### 4 — Orden de la jerarquía
```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["orden", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Registros", "Caché", "Memoria RAM", "Disco Duro"]

enunciado: "Ordena los siguientes elementos de memoria de mayor a menor velocidad de acceso (del más rápido al más lento):"

respuesta: ["Registros", "Caché", "Memoria RAM", "Disco Duro"]

explicacion: |
  Los registros están dentro de la CPU y son instantáneos. La caché es la siguiente, luego la RAM (memoria principal) y finalmente el almacenamiento masivo (disco).
```

### 5 — El concepto de Localidad
```
metadata:
  materia: "informatica"
  tema: "cache_principio_localidad"
  nivel: "avanzado"
  tags: ["localidad", "cache"]

tipo: mc
opciones_explicitas: ["Localidad Espacial", "Localidad Temporal", "Localidad de Datos", "Localidad de Instrucciones"]

enunciado: "Cuando un sistema carga un bloque de memoria porque se ha accedido a una dirección específica, asumiendo que las direcciones contiguas serán accedidas pronto, está aprovechando la ___."

respuesta: "Localidad Espacial"

explicacion: |
  La localidad espacial se refiere al uso de datos cercanos en direcciones de memoria. La localidad temporal se refiere al reuso de un mismo dato en un corto periodo de tiempo.
```