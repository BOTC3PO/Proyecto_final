### 1 — Definición de Imperio
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["definicion", "politica"]

tipo: mc
opciones_explicitas: ["Una alianza de naciones con fines comerciales", "Una entidad política que domina y gobierna sobre otros pueblos y territorios diversos", "Un sistema de gobierno democrático basado en el consenso"]

enunciado: "En términos de ciencia política e historia, ¿qué define fundamentalmente a un imperio?"

explicacion: |
  Un imperio se caracteriza por el ejercicio del poder de una entidad política central sobre una variedad de pueblos y territorios, a menudo mediante la conquista militar o la expansión territorial.
```

### 2 — El mecanismo de expansión
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["expansion", "conquista"]

tipo: completar
respuestas_validas: ["conquista militar", "acuerdos diplomáticos"]

enunciado: "Aunque existen diversas formas de expansión, históricamente los imperios suelen establecer su dominio sobre nuevos territorios mediante la ________."

explicacion: |
  Si bien la diplomacia existió, el modelo imperial clásico se define por la expansión mediante la conquista militar para integrar nuevos territorios y pueblos al control del centro.
```

### 3 — Componentes de un Imperio
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["estructura", "territorio"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["territorios diversos", "pueblos conquistados"], ["un solo pueblo homogéneo", "un solo territorio pequeño"]]

tipo: mc
opciones_explicitas: ["Un territorio con un solo grupo étnico", "Un centro de poder que gobierna sobre territorios y pueblos diversos", "Una confederación de estados soberanos"]

enunciado: "Un imperio se distingue de un estado-nación moderno porque su estructura incluye {datos[escenario_idx][0]} y {datos[escenario_idx][1]}."

explicacion: |
  La diversidad es la clave: un imperio no es un bloque homogéneo, sino un centro que gobierna sobre múltiples realidades culturales y geográficas.
```

### 4 — Secuencia de formación imperial
```
metadata:
  materia: "historia_profucha"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

tipo: ordenar
opciones_explicitas: ["Expansión militar", "Conquista de nuevos territorios", "Establecimiento de administración central", "Integración de pueblos diversos"]

enunciado: "Ordena cronológicamente las etapas típicas de la formación de un imperio expansionista:"

explicacion: |
  El proceso suele comenzar con la fuerza militar, seguida de la ocupación territorial, la creación de una burocracia para controlar lo ganado y, finalmente, la gestión de la diversidad de los pueblos sometidos.
```

### 5 — El concepto de soberanía imperial
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "avanzado"
  tags: ["soberania", "gobierno"]

variables:
  caso_idx: uno_de([0, 1])
  ejemplos: [["un imperio romano", "un estado moderno"], ["pueblos diversos", "una sola nación"]]

tipo: input
tolerancia_abs: 0

enunciado: "Si comparamos {ejemplos[caso_idx][0]} con {ejemplos[caso_idx][1]}, la característica principal que define al primero es su capacidad de gobernar sobre {ejemplos[caso_idx][1]}."

explicacion: |
  La esencia del imperio radica en la escala y la heterogeneidad: el control de un centro sobre múltiples entidades distintas.
```