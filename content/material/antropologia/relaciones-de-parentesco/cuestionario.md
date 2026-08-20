# Antropologia — relaciones de parentesco (cuestionario, 22 preguntas VBLang)

> Tema: `antropologia/relaciones-de-parentesco`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "basico"
  tags: ["definicion", "consanguinidad", "afinidad"]

variables:
  tipo_parentesco: uno_de(["consanguinidad", "afinidad"])

respuesta: "parentesco"
tipo: completar

enunciado: "El sistema de relaciones sociales derivadas de la descendencia biológica o adopción se denomina {tipo_parentesco}."

explicacion: |
  El parentesco es el concepto central que engloba tanto los vínculos por sangre (consanguinidad) como los por matrimonio o unión (afinidad).
```

### 2 — pregunta 2

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "basico"
  tags: ["identidad", "rol", "sociedad"]

variables:
  concepto: uno_de(["parentesco", "economía", "política"])

respuesta: "parentesco"
tipo: completar

enunciado: "Las reglas de {concepto} definen nuestra identidad inicial y nuestro lugar en el grupo."

explicacion: |
  Antes que otras instituciones, el parentesco nos dice quiénes somos y de dónde venimos, dictando responsabilidades sociales.
```

### 3 — pregunta 3

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "intermedio"
  tags: ["transmisión", "herencia", "derechos"]

variables:
  elemento: uno_de(["recursos", "conflictos", "enemigos"])

respuesta: "recursos"
tipo: completar

enunciado: "A través del parentesco se determina cómo se {elemento} y la herencia entre los miembros del clan."

explicacion: |
  El parentesco regula no solo las relaciones emocionales, sino también la tenencia de tierras, la resolución de conflictos y la transmisión de bienes.
```

### 4 — pregunta 4

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "avanzado"
  tags: ["clan", "ancestro", "mito"]

variables:
  tipo_ancestro: uno_de(["real", "simbólico", "biológico"])

respuesta: "simbólico"
tipo: completar

enunciado: "En un clan, el ancestro común suele ser {tipo_ancestro} o mítico, sin necesidad de demostrar la línea genealógica."

explicacion: |
  La diferencia clave entre clan y linaje es la demostrabilidad de la línea genealógica; en el clan, el vínculo es a menudo simbólico.
```

### 5 — pregunta 5

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "basico"
  tags: ["consanguinidad", "sangre", "vínculo"]

variables:
  tipo_vinculo: uno_de(["consanguinidad", "afinidad", "adopción"])

respuesta: "consanguinidad"
tipo: completar

enunciado: "Los vínculos basados en la descendencia biológica directa se llaman relaciones de {tipo_vinculo}."

explicacion: |
  La consanguinidad se refiere a los lazos de sangre, mientras que la afinidad se refiere a los lazos por matrimonio o unión.
```

### 6 — pregunta 6

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "basico"
  tags: ["afinidad", "matrimonio", "unión"]

variables:
  origen: uno_de(["matrimonio", "sangre", "adopción"])

respuesta: "matrimonio"
tipo: completar

enunciado: "Las relaciones de {origen} crean lazos de afinidad dentro del sistema de parentesco."

explicacion: |
  La afinidad se establece a través del matrimonio o la unión socialmente reconocida, expandiendo la red de parentesco más allá de la sangre.
```

### 7 — pregunta 7

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "intermedio"
  tags: ["historia", "estado", "leyes"]

variables:
  institucion: uno_de(["parentesco", "estado", "iglesia"])

respuesta: "parentesco"
tipo: completar

enunciado: "Antes de la existencia del Estado o las leyes escritas, los grupos humanos se organizaban mediante reglas de {institucion}."

explicacion: |
  El parentesco es la primera institución social humana, anterior y fundamental para la organización comunitaria antes del derecho estatal.
```

### 8 — pregunta 8

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "intermedio"
  tags: ["linaje", "patrilinial", "descendencia"]

variables:
  linea: uno_de(["paterna", "materna", "mixta"])

respuesta: "paterna"
tipo: completar

enunciado: "Un linaje que traza su ascendencia común exclusivamente a través de la línea {linea} se denomina patrilinial."

explicacion: |
  Los linajes pueden ser patriliniares, matrilineales o bilineales. La clave es la demostrabilidad de la línea directa.
```

### 9 — pregunta 9

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "intermedio"
  tags: ["linaje", "matrilinial", "descendencia"]

variables:
  linea: uno_de(["paterna", "materna", "mixta"])

respuesta: "materna"
tipo: completar

enunciado: "Un linaje que traza su ascendencia común exclusivamente a través de la línea {linea} se denomina matrilineal."

explicacion: |
  En los sistemas matrilineales, la identidad y la herencia se transmiten a través de la madre, aunque la autoridad política pueda ser masculina.
```

### 10 — pregunta 10

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "basico"
  tags: ["rol", "responsabilidad", "edad"]

variables:
  posicion: uno_de(["hermano mayor", "hermano menor", "tío"])

respuesta: "hermano mayor"
tipo: completar

enunciado: "En algunas sociedades, ser {posicion} no es solo un dato biológico, sino una posición social con responsabilidades específicas."

explicacion: |
  El orden de nacimiento puede determinar roles sociales, como el cuidado de los hermanos menores o la gestión de bienes familiares.
```

### 11 — pregunta 11

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "basico"
  tags: ["adopción", "descendencia", "social"]

variables:
  origen: uno_de(["biológica", "adopción", "matrimonio"])

respuesta: "adopción"
tipo: completar

enunciado: "El parentesco también se deriva de la {origen}, integrando a nuevos miembros en la red de obligaciones."

explicacion: |
  La adopción es un mecanismo social para crear vínculos de parentesco plenos, independientemente de la descendencia biológica.
```

### 12 — pregunta 12

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "intermedio"
  tags: ["clan", "simbolismo", "identidad"]

variables:
  elemento: uno_de(["ancestro", "hogar", "trabajo"])

respuesta: "ancestro"
tipo: completar

enunciado: "Lo que importa en un clan no es la casa donde se vive, sino el {elemento} común que une a los miembros."

explicacion: |
  El clan se une por la creencia en un ancestro común, creando una identidad colectiva que trasciende la convivencia espacial.
```

### 13 — pregunta 13

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "intermedio"
  tags: ["obligación", "derecho", "red"]

variables:
  concepto: uno_de(["obligaciones", "libertades", "privilegios"])

respuesta: "obligaciones"
tipo: completar

enunciado: "El parentesco establece una red de {concepto}, derechos y expectativas entre los miembros del grupo."

explicacion: |
  Más que sentimientos, el parentesco es un sistema estructural de deberes y derechos recíprocos.
```

### 14 — pregunta 14

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "avanzado"
  tags: ["linaje", "demuestra", "genealogía"]

variables:
  accion: uno_de(["demostrar", "inventar", "olvidar"])

respuesta: "demostrar"
tipo: completar

enunciado: "En el linaje, los miembros pueden {accion} su ascendencia común línea por línea."

explicacion: |
  La capacidad de trazar la genealogía exacta es lo que distingue al linaje del clan.
```

### 15 — pregunta 15

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "intermedio"
  tags: ["matrimonio", "alianza", "política"]

variables:
  funcion: uno_de(["crear", "destruir", "ignorar"])

respuesta: "crear"
tipo: completar

enunciado: "El matrimonio sirve para {funcion} alianzas entre grupos de parentesco distintos."

explicacion: |
  El matrimonio no es solo un vínculo individual, sino una estrategia social para unir familias o clanes y generar reciprocidad.
```

### 16 — pregunta 16

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "basico"
  tags: ["respeto", "jerarquía", "edad"]

variables:
  actitud: uno_de(["respeto", "desprecio", "indiferencia"])

respuesta: "respeto"
tipo: completar

enunciado: "Las reglas de parentesco dictan a quién debemos {actitud} según su posición en la red familiar."

explicacion: |
  La jerarquía dentro del parentesco (por edad, género o línea de descendencia) define las formas de trato y respeto.
```

### 17 — pregunta 17

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "avanzado"
  tags: ["regional", "cono_sur", "rural"]

variables:
  region: uno_de(["Argentina", "Europa", "Asia"])

respuesta: "Argentina"
tipo: completar

enunciado: "En {region} y el Cono Sur, muchas comunidades rurales mantienen sistemas de parentesco extenso."

explicacion: |
  El contexto regional es relevante para entender la persistencia de estructuras tradicionales frente a la modernización urbana.
```

### 18 — pregunta 18

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "avanzado"
  tags: ["bilineal", "ambos", "líneas"]

variables:
  linea: uno_de(["paterna", "materna", "ambas"])

respuesta: "ambas"
tipo: completar

enunciado: "En el parentesco bilineal, la descendencia se traza a través de las líneas {linea}."

explicacion: |
  Algunos sistemas reconocen la importancia de ambas líneas para la identidad y la herencia, sin priorizar una sobre la otra.
```

### 19 — pregunta 19

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "basico"
  tags: ["identidad", "origen", "pertenencia"]

variables:
  concepto: uno_de(["identidad", "profesión", "religión"])

respuesta: "identidad"
tipo: completar

enunciado: "El parentesco define nuestra {concepto} inicial: quiénes somos y de dónde venimos."

explicacion: |
  La pertenencia a un grupo de parentesco es la primera forma de identidad social adquirida por el individuo.
```

### 20 — pregunta 20

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "intermedio"
  tags: ["conflicto", "resolución", "justicia"]

variables:
  mecanismo: uno_de(["parentesco", "policía", "juez"])

respuesta: "parentesco"
tipo: completar

enunciado: "En sociedades sin estado, el parentesco regula la {mecanismo} de conflictos internos."

explicacion: |
  La justicia consuetudinaria y la mediación familiar son mecanismos clave para mantener la cohesión social.
```

### 21 — pregunta 21

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "avanzado"
  tags: ["tierra", "recursos", "propiedad"]

variables:
  recurso: uno_de(["tierra", "agua", "aire"])

respuesta: "tierra"
tipo: completar

enunciado: "Los sistemas de parentesco extenso regulan la {recurso} y su uso colectivo."

explicacion: |
  La propiedad de la tierra suele estar vinculada a la pertenencia al linaje o clan, no a individuos aislados.
```

### 22 — pregunta 22

```
metadata:
  materia: "Antropología"
  tema: "relaciones_de_parentesco"
  nivel: "intermedio"
  tags: ["expectativa", "rol", "comportamiento"]

variables:
  elemento: uno_de(["expectativas", "sorpresa", "caos"])

respuesta: "expectativas"
tipo: completar

enunciado: "El parentesco establece la red de obligaciones, derechos y {elemento} que la sociedad construye."

explicacion: |
  Las expectativas de comportamiento están codificadas en las reglas de parentesco, guiando la interacción social diaria.
```
