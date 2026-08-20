# Vida Cotidiana — Química de las manchas (cuestionario, 22 preguntas VBLang)

> Tema: `vida-cotidiana/quimica-de-las-manchas`. Ver `teoria.md` en esta misma carpeta. Escrito a mano (Claude), cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  mancha: uno_de(["aceite de cocina", "manteca", "maquillaje"])

respuesta: "grasa"
tipo: mc
opciones_explicitas: ["grasa", "proteína", "pigmento/tanino"]

enunciado: "Una mancha de \"{mancha}\" se clasifica como mancha de..."

explicacion: |
  Son manchas apolares, como el aceite de cocina, que no se disuelven
  bien en agua sola.
```

### 2 — pregunta 2

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  mancha: uno_de(["sangre", "huevo", "leche"])

respuesta: "proteína"
tipo: mc
opciones_explicitas: ["grasa", "proteína", "pigmento/tanino"]

enunciado: "Una mancha de \"{mancha}\" se clasifica como mancha de..."

explicacion: |
  Están hechas de proteínas muy sensibles al calor: se coagulan y fijan
  si se usa agua caliente.
```

### 3 — pregunta 3

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  mancha: uno_de(["vino tinto", "café", "té"])

respuesta: "pigmento/tanino"
tipo: mc
opciones_explicitas: ["grasa", "proteína", "pigmento/tanino"]

enunciado: "Una mancha de \"{mancha}\" se clasifica como mancha de..."

explicacion: |
  Son moléculas coloreadas que se adhieren a la fibra de la tela, ni
  grasa ni proteína.
```

### 4 — pregunta 4

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "intermedio"
  tags: ["por que agua sola no saca grasa"]

variables:
  n: uno_de([1, 1])

respuesta: "el agua es polar y la grasa apolar, no se mezclan por sí solas"
tipo: mc
opciones_explicitas: ["el agua es polar y la grasa apolar, no se mezclan por sí solas", "el agua disuelve la grasa perfectamente sola", "la grasa se evapora con el agua"]

enunciado: "El agua sola no saca una mancha de grasa porque..."

explicacion: |
  Es la misma razón por la que el agua y el aceite no se mezclan en una
  sartén.
```

### 5 — pregunta 5

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "intermedio"
  tags: ["tensioactivo"]

variables:
  n: uno_de([1, 1])

respuesta: "tensioactivo"
tipo: completar

enunciado: "La molécula con una punta que se pega a la grasa y otra que se pega al agua, base de cualquier jabón o detergente, se llama ___."

respuestas_validas:
  - "tensioactivo"

explicacion: |
  Rodea la suciedad grasa y permite que el agua se la lleve, el mismo
  mecanismo que estabiliza una mayonesa.
```

### 6 — pregunta 6

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "avanzado"
  tags: ["error clasico"]

variables:
  n: uno_de([1, 1])

respuesta: "desnaturaliza la proteína, haciendo que se coagule y fije a la tela"
tipo: mc
opciones_explicitas: ["desnaturaliza la proteína, haciendo que se coagule y fije a la tela", "disuelve la mancha de proteína sin problemas", "no tiene ningún efecto sobre la proteína"]

enunciado: "Usar agua caliente sobre una mancha de sangre o huevo es contraproducente porque el calor..."

explicacion: |
  Es el mismo proceso que endurece un huevo al cocinarlo: la proteína
  se coagula y queda mucho más difícil de sacar.
```

### 7 — pregunta 7

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "intermedio"
  tags: ["recomendacion proteina"]

variables:
  n: uno_de([1, 1])

respuesta: "agua fría"
tipo: mc
opciones_explicitas: ["agua fría", "agua muy caliente", "vapor de agua"]

enunciado: "Para manchas de proteína (sangre, huevo, leche), la recomendación estándar es siempre usar..."

explicacion: |
  Mientras la proteína sigue sin coagular, se puede disolver y arrastrar
  con más facilidad.
```

### 8 — pregunta 8

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "avanzado"
  tags: ["manchas de pigmento"]

variables:
  n: uno_de([1, 1])

respuesta: "agentes oxidantes o alcohol"
tipo: mc
opciones_explicitas: ["agentes oxidantes o alcohol", "sólo agua fría sin nada más", "aceite de cocina"]

enunciado: "Para manchas de pigmento (vino tinto, café, té), funcionan mejor..."

explicacion: |
  El percarbonato de sodio (agente oxidante) o el alcohol ayudan a
  disolver los pigmentos, más que el jabón común.
```

### 9 — pregunta 9

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "basico"
  tags: ["desnaturalizacion analogia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El proceso que desnaturaliza la proteína de una mancha de huevo con agua caliente es el mismo que endurece un huevo al cocinarlo."

explicacion: |
  El calor coagula la proteína en ambos casos, cambiando su estructura
  de forma irreversible.
```

### 10 — pregunta 10

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "intermedio"
  tags: ["mecanismo tensioactivo"]

variables:
  n: uno_de([1, 1])

respuesta: "rodea la suciedad grasa, permitiendo que el agua se la lleve"
tipo: mc
opciones_explicitas: ["rodea la suciedad grasa, permitiendo que el agua se la lleve", "convierte la grasa directamente en agua", "elimina la necesidad de agua"]

enunciado: "Un tensioactivo funciona porque..."

explicacion: |
  Con una punta que se pega a la grasa y otra al agua, arrastra la
  suciedad hacia el agua para que se pueda enjuagar.
```

### 11 — pregunta 11

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "avanzado"
  tags: ["relacion con mayonesa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El mecanismo del tensioactivo en un detergente es el mismo mecanismo con el que la lecitina estabiliza una mayonesa."

explicacion: |
  Ambos son moléculas con doble afinidad (agua y grasa) que permiten
  que dos sustancias que normalmente no se mezclan queden estables
  juntas.
```

### 12 — pregunta 12

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "basico"
  tags: ["error a evitar grasa"]

variables:
  n: uno_de([1, 1])

respuesta: "agua sola"
tipo: mc
opciones_explicitas: ["agua sola", "tensioactivo", "jabón neutro"]

enunciado: "Según la tabla resumen de la teoría, lo que hay que evitar para una mancha de grasa es..."

explicacion: |
  El agua sola no disuelve la grasa; hace falta un tensioactivo
  (jabón/detergente).
```

### 13 — pregunta 13

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "basico"
  tags: ["error a evitar pigmento"]

variables:
  n: uno_de([1, 1])

respuesta: "frotar en seco"
tipo: mc
opciones_explicitas: ["frotar en seco", "usar agentes oxidantes", "usar alcohol"]

enunciado: "Según la tabla resumen de la teoría, lo que hay que evitar para una mancha de pigmento (vino, café) es..."

explicacion: |
  Frotar en seco puede extender la mancha en vez de eliminarla; conviene
  un agente oxidante o alcohol.
```

### 14 — pregunta 14

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "intermedio"
  tags: ["polaridad del agua"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El agua es una molécula polar, lo que explica por qué no disuelve por sí sola las manchas apolares de grasa."

explicacion: |
  Sustancias polares y apolares no se mezclan bien entre sí sin la
  ayuda de un tensioactivo.
```

### 15 — pregunta 15

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "avanzado"
  tags: ["por que fijada"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una mancha de proteína \"fijada\" por agua caliente queda mucho más difícil de sacar después, comparada con si se hubiera tratado con agua fría desde el principio."

explicacion: |
  La coagulación por calor pega la proteína más fuerte a las fibras de
  la tela, dificultando la limpieza posterior.
```

### 16 — pregunta 16

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "basico"
  tags: ["complemento de otros temas"]

variables:
  n: uno_de([1, 1])

respuesta: "el por qué químico detrás de qué hacer con cada mancha"
tipo: mc
opciones_explicitas: ["el por qué químico detrás de qué hacer con cada mancha", "cómo coser una prenda rota", "cómo planchar distintos tipos de tela"]

enunciado: "Este tema es un complemento de símbolos de cuidado textil y técnicas de lavado, que explican..."

explicacion: |
  Aquellos temas explican qué hacer; este explica por qué funciona (o
  no) cada método según el tipo de mancha.
```

### 17 — pregunta 17

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "intermedio"
  tags: ["percarbonato"]

variables:
  n: uno_de([1, 1])

respuesta: "percarbonato de sodio"
tipo: completar

enunciado: "El agente oxidante mencionado en la teoría, presente en muchos quitamanchas, es el ___."

respuestas_validas:
  - "percarbonato de sodio"

explicacion: |
  Es útil especialmente para manchas de pigmento como vino, café o té.
```

### 18 — pregunta 18

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "avanzado"
  tags: ["tres tipos"]

variables:
  tipo_mancha: uno_de(["grasa", "proteína", "pigmento/tanino"])

respuesta: verdadero
tipo: vf

enunciado: "\"{tipo_mancha}\" es uno de los tres tipos de mancha que distingue la teoría, cada uno con una estrategia química distinta."

explicacion: |
  Grasa, proteína y pigmento/tanino requieren tratamientos distintos
  porque su química es distinta.
```

### 19 — pregunta 19

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "basico"
  tags: ["polaridad grasa"]

variables:
  n: uno_de([1, 1])

respuesta: "apolares"
tipo: mc
opciones_explicitas: ["apolares", "polares", "iónicas"]

enunciado: "Las manchas de grasa (aceite, manteca, maquillaje) son moléculas..."

explicacion: |
  Al ser apolares, no se disuelven bien en agua (que es polar) sin la
  ayuda de un tensioactivo.
```

### 20 — pregunta 20

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "intermedio"
  tags: ["sensibilidad al calor"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las proteínas de una mancha de sangre, huevo o leche se comportan de forma muy sensible al calor."

explicacion: |
  Esa sensibilidad al calor es justamente lo que hace que el agua
  caliente sea contraproducente para este tipo de mancha.
```

### 21 — pregunta 21

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "avanzado"
  tags: ["adherencia pigmento"]

variables:
  n: uno_de([1, 1])

respuesta: "se adhieren químicamente a la fibra de la tela"
tipo: mc
opciones_explicitas: ["se adhieren químicamente a la fibra de la tela", "no tocan la tela en ningún momento", "se evaporan solas sin dejar rastro"]

enunciado: "Las moléculas coloreadas de una mancha de vino o café..."

explicacion: |
  Por eso requieren una estrategia distinta (oxidantes o alcohol) que
  las de grasa o proteína.
```

### 22 — pregunta 22

```
metadata:
  materia: "vida_cotidiana"
  tema: "quimica_de_las_manchas"
  nivel: "intermedio"
  tags: ["recomendacion grasa"]

variables:
  n: uno_de([1, 1])

respuesta: "tensioactivo (jabón/detergente)"
tipo: mc
opciones_explicitas: ["tensioactivo (jabón/detergente)", "sólo agua tibia", "agentes oxidantes"]

enunciado: "Según la tabla resumen de la teoría, lo que se debe usar para una mancha de grasa es..."

explicacion: |
  El tensioactivo es el único de los tres tratamientos que ataca
  específicamente el problema de polaridad de la grasa.
```

