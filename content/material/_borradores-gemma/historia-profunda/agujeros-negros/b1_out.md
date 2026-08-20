### 1 — El origen del colapso
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["estrellas", "supernova", "gravedad"]

respuesta: "supernova"
tipo: completar
respuestas_validas: ["supernova"]

enunciado: "Un agujero negro se forma cuando una estrella muy masiva colapsa gravitacionalmente tras agotar su combustible nuclear y explotar como una ___."

explicacion: |
  Cuando las estrellas masivas agotan su combustible, la presión hacia afuera cesa y la gravedad gana la batalla, provocando una explosión catastrófica llamada supernova.
```

### 2 — El motor del colapso
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["gravedad", "fuerza", "colapso"]

variables:
  fuerza_dominante: uno_de(["gravedad", "electromagnetismo", "fuerza_nuclear_fuerte"])
  idx: uno_de([0, 1, 2])

respuesta: fuerza_dominante[idx]
tipo: mc
opciones_explicitas: ["gravedad", "electromagnetismo", "fuerza_nuclear_fuerte"]

enunciado: "Durante el colapso de una estrella masiva que da origen a un agujero negro, ¿qué fuerza es la responsable de vencer la presión de la fusión nuclear y comprimir la materia?"

explicacion: |
  La gravedad es la fuerza fundamental que, al no encontrar resistencia por la falta de fusión nuclear, colapsa el núcleo de la estrella hacia un punto de densidad infinita.
```

### 3 — El ciclo de vida estelar
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["ciclo_estelar", "combustible"]

respuesta: "agotado"
tipo: completar
respuestas_validas: ["agotado"]

enunciado: "El proceso de formación de un agujero negro comienza cuando el combustible nuclear de la estrella se ha ___."

explicacion: |
  Sin la energía de la fusión nuclear que empuja hacia afuera, la estrella pierde su equilibrio hidrostático y colapsa.
```

### 4 — Eventos precedentes
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["secuencia", "supernova", "colapso"]

respuesta: ["colapso gravitacional", "supernova", "agujero negro"]
tipo: ordenar
opciones_explicitas: ["colapso gravitacional", "supernova", "agujero negro"]

enunciado: "Ordena cronológicamente los eventos que llevan a la formación de un agujero negro a partir de una estrella masiva:"

explicacion: |
  Primero ocurre el colapso del núcleo, seguido de la explosión de la capa externa (supernova) y finalmente la formación del remanente denso (agujero negro).
```

### 5 — Masa crítica
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["masa", "estrellas", "supernova"]

variables:
  es_masiva: uno_de([true, false])

respuesta: es_masiva

tipo: mc
opciones_explicitas: [true, false]

enunciado: "Para que una estrella termine su vida como un agujero negro tras una supernova, ¿es necesario que su masa sea muy grande (masiva)?"

explicacion: |
  Solo las estrellas con una masa lo suficientemente grande pueden generar la presión gravitatoria necesaria para colapsar en un agujero negro; las estrellas pequeñas terminan como enanas blancas.
```