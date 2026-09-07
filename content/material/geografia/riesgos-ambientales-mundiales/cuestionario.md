# Geografia — riesgos ambientales mundiales (cuestionario, 24 preguntas VBLang)

> Tema: `geografia/riesgos-ambientales-mundiales`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["componentes", "amenaza", "vulnerabilidad"]

variables:
  amenaza: random(1, 10)
  vulnerabilidad: random(1, 10)

respuesta: "{amenaza} + {vulnerabilidad}"
tipo: input

enunciado: "Si modelamos el riesgo como una función de la amenaza y la vulnerabilidad, y asignamos valores arbitrarios de {amenaza} y {vulnerabilidad}, ¿cuál es la suma conceptual de sus componentes principales?"

explicacion: |
  Aunque la fórmula real es compleja, conceptualmente el riesgo surge de la presencia simultánea de una amenaza y una vulnerabilidad. Esta pregunta verifica la comprensión de que ambos elementos son necesarios.
```

### 2 — pregunta 2

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["ecosistemas", "humedales", "bosques"]

variables:
  ecosistema: uno_de(["humedales", "bosques"])

respuesta: "clave"
tipo: completar

enunciado: "Los {ecosistema} son considerados ecosistemas clave por su rol en la regulación hídrica y la biodiversidad."

explicacion: |
  Estos ecosistemas tienen una desproporción alta en su contribución a la estabilidad ambiental relativa a su tamaño o área.
```

### 3 — pregunta 3

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["definicion", "riesgo"]

variables:
  a: random(10, 20)
  b: random(10, 20)

respuesta: "la combinacion de la amenaza y la vulnerabilidad"
tipo: completar

enunciado: "Segun la teoria, un riesgo ambiental no es solo el fenomeno en si, sino {a} + {b} (en palabras clave) entre la amenaza y la vulnerabilidad de la sociedad que lo recibe."

explicacion: |
  El concepto clave es que el riesgo surge de la interseccion entre un evento peligroso (amenaza) y la capacidad de la sociedad para enfrentarlo (vulnerabilidad).
```

### 4 — pregunta 4

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["escala", "alcance"]

variables:
  x: random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Los riesgos ambientales mundiales son fenomenos que se limitan a las fronteras nacionales y no trascienden otros paises."

explicacion: |
  Falso. Los riesgos ambientales mundiales, por definicion, trascienden las fronteras nacionales y afectan a la estabilidad de los ecosistemas a escala planetaria.
```

### 5 — pregunta 5

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["antropoceno", "impacto_humano"]

variables:
  a: random(100, 900)
  b: random(100, 900)

respuesta: "antropoceno"
tipo: completar

enunciado: "En la era actual, conocida como el {a} + {b} (nombre del periodo geologico), la huella humana es tan profunda que los riesgos tienen una fuerte componente tecnologica y politica."

explicacion: |
  El termino "Antropoceno" se utiliza para describir el periodo actual donde la actividad humana es la influencia dominante en el clima y el medio ambiente.
```

### 6 — pregunta 6

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["clima", "eventos_extremos"]

variables:
  freq: random(2, 5)

respuesta: "mas frecuentes e intensos"
tipo: completar

enunciado: "El calentamiento global no solo implica mas calor, sino que los eventos climaticos extremos se vuelven {freq} veces mas frecuentes e intensos en su descripcion teorica."

explicacion: |
  La teoria establece que el cambio climático modifica los regímenes tradicionales, haciendo que los eventos extremos sean más frecuentes e intensos.
```

### 7 — pregunta 7

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "avanzado"
  tags: ["argentina", "impacto_local"]

variables:
  a: random(1, 3)

respuesta: "sudestada"
tipo: completar

enunciado: "En Argentina, el cambio climático se vincula directamente con la mayor frecuencia de fenomenos como el {a} o las sequias en el centro del pais."

explicacion: |
  El fenomeno meteorologico citado en la teoria como ejemplo de impacto local del cambio global es la Sudestada.
```

### 8 — pregunta 8

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["ecosistemas", "servicios"]

variables:
  n: random(1, 3)

respuesta: "amortiguadores"
tipo: completar

enunciado: "Los ecosistemas como los humedales actuan como {n} + {n} + {n} (palabra clave) naturales que protegen contra inundaciones."

explicacion: |
  La teoria describe a los ecosistemas clave como "amortiguadores" naturales que proveen servicios como la regulacion del agua y la proteccion contra inundaciones.
```

### 9 — pregunta 9

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["biodiversidad", "suelos"]

variables:
  a: random(1, 2)

respuesta: "pérdida de biodiversidad"
tipo: completar

enunciado: "Junto con el cambio climático, la {a} y la degradacion de los suelos son pilares de la crisis ambiental actual."

explicacion: |
  Los tres pilares mencionados son el cambio climático, la pérdida de biodiversidad y la contaminación transfronteriza.
```

### 10 — pregunta 10

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["contaminacion", "transfronterizo"]

variables:
  a: random(1, 3)

respuesta: "contaminacion transfronteriza"
tipo: completar

enunciado: "Entre los riesgos urgentes a nivel mundial destaca la {a} + {a} + {a} (termino clave)."

explicacion: |
  La contaminacion transfronteriza es uno de los riesgos globales principales junto con el cambio climático y la pérdida de biodiversidad.
```

### 11 — pregunta 11

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["gei", "causa"]

variables:
  a: random(1, 2)

respuesta: "emision de gases de efecto invernadero"
tipo: completar

enunciado: "El calentamiento global esta impulsado principalmente por la {a} + {a} + {a} (causa principal)."

explicacion: |
  La causa principal del calentamiento global mencionada es la emision de gases de efecto invernadero.
```

### 12 — pregunta 12

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["servicios_ecosistemicos", "polinizacion"]

variables:
  a: random(1, 3)

respuesta: "polinizacion"
tipo: completar

enunciado: "Al destruir bosques nativos, se pierden servicios como la regulacion del agua, la {a} + {a} + {a} y la proteccion contra inundaciones."

explicacion: |
  La polinizacion es uno de los servicios ecosistemicos vitales mencionados que se pierden con la degradacion ambiental.
```

### 13 — pregunta 13

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["estrategias", "adaptacion"]

variables:
  a: random(1, 3)

respuesta: "adaptacion y mitigacion"
tipo: completar

enunciado: "Comprender la red de causas y efectos de los riesgos ambientales es vital para desarrollar estrategias de {a} + {a} + {a} (dos conceptos clave)."

explicacion: |
  La teoria menciona que el entendimiento de estas interacciones es clave para estrategias de adaptacion y mitigacion.
```

### 14 — pregunta 14

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["humedales", "proteccion"]

variables:
  a: random(1, 2)

respuesta: "humedales"
tipo: completar

enunciado: "Cuando se destruyen ecosistemas clave, como los {a} + {a} + {a}, se pierden servicios de regulacion del agua."

explicacion: |
  Los humedales son citados como un ecosistema clave cuyo destruccion conlleva la perdida de regulacion hidrica.
```

### 15 — pregunta 15

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "avanzado"
  tags: ["enfoque", "geografia"]

variables:
  a: random(1, 3)

respuesta: "relaciones entre la naturaleza y la organizacion humana"
tipo: completar

enunciado: "Esta perspectiva nos ayuda a ver que la geografia no estudia solo el terreno, sino las {a} + {a} + {a} (objetivo de estudio)."

explicacion: |
  La geografia, desde este enfoque, estudia las relaciones entre los sistemas naturales y la organizacion humana.
```

### 16 — pregunta 16

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["sequias", "argentina"]

variables:
  a: random(1, 2)

respuesta: "centro"
tipo: completar

enunciado: "En Argentina, el cambio climático se vincula con la mayor frecuencia de fenomenos como la sudestada o las sequias en el {a} del pais."

explicacion: |
  La teoria especifica que las sequias en el centro del pais son un ejemplo de impacto local del cambio global.
```

### 17 — pregunta 17

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["regimenes", "clima"]

variables:
  a: random(1, 3)

respuesta: "regimenes climaticos tradicionales"
tipo: completar

enunciado: "El calentamiento global esta modificando los {a} + {a} + {a} (objeto de modificacion)."

explicacion: |
  El calentamiento global altera los patrones y regimenes climaticos que existian previamente.
```

### 18 — pregunta 18

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["impacto_social", "migracion"]

variables:
  a: random(1, 2)

respuesta: "migraciones masivas"
tipo: completar

enunciado: "Cuando el calor provoca sequias prolongadas que destruyen cosechas, puede generar {a} + {a} + {a} (consecuencia social)."

explicacion: |
  La destruccion de cosechas por sequias es un factor que puede generar migraciones masivas de poblacion.
```

### 19 — pregunta 19

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["estabilidad", "ecosistemas"]

variables:
  a: random(1, 3)

respuesta: "estabilidad de los ecosistemas"
tipo: completar

enunciado: "Los riesgos ambientales mundiales amenazan la {a} + {a} + {a} y el bienestar de la humanidad."

explicacion: |
  La definicion inicial menciona que amenazan la estabilidad de los ecosistemas y el bienestar humano.
```

### 20 — pregunta 20

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["suelos", "degradacion"]

variables:
  a: random(1, 2)

respuesta: "degradacion de los suelos"
tipo: completar

enunciado: "La perdida de biodiversidad y la {a} + {a} + {a} son pilares de la crisis ambiental."

explicacion: |
  La degradacion de los suelos es mencionada junto a la perdida de biodiversidad como pilar de la crisis.
```

### 21 — pregunta 21

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["comprension", "integral"]

variables:
  a: random(1, 3)

respuesta: "comprension integral"
tipo: completar

enunciado: "Los riesgos ambientales requieren una {a} + {a} + {a} de como interactuan los sistemas terrestres."

explicacion: |
  Se requiere una comprension integral de las interacciones entre los diversos sistemas de la Tierra.
```

### 22 — pregunta 22

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["inundaciones", "proteccion"]

variables:
  a: random(1, 3)

respuesta: "proteccion contra inundaciones"
tipo: completar

enunciado: "Sin los amortiguadores naturales, la sociedad queda expuesta a riesgos mayores, perdiendo la {a} + {a} + {a} (servicio perdido)."

explicacion: |
  La proteccion contra inundaciones es un servicio especifico que dejan de proveer los ecosistemas degradados.
```

### 23 — pregunta 23

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "avanzado"
  tags: ["huella", "humana"]

variables:
  a: random(1, 2)

respuesta: "profunda"
tipo: completar

enunciado: "En el Antropoceno, la huella humana es tan {a} que los riesgos tienen componente politico."

explicacion: |
  La teoria describe la huella humana como "profunda" en esta era.
```

### 24 — pregunta 24

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["interaccion", "sistemas"]

variables:
  a: random(1, 3)

respuesta: "sistemas terrestres"
tipo: completar

enunciado: "Es fundamental entender como interactuan los {a} + {a} + {a} para comprender los riesgos ambientales."

explicacion: |
  La comprension de la interaccion entre los sistemas terrestres es clave para abordar estos riesgos.
```
