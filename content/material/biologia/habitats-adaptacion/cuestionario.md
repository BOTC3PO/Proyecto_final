# Biología — Hábitats y adaptación (cuestionario, 20 preguntas VBLang)

> Tema: `BA3`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma, en paralelo) y
> corregido a mano. Sin bugs funcionales esta tanda.

---

### 1 — Definición de hábitat

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["concepto", "habitat"]

respuesta: verdadero
tipo: vf

enunciado: "El hábitat es el lugar donde vive naturalmente una especie, con las condiciones que necesita para sobrevivir."

explicacion: |
  Correcto. Provee las condiciones ambientales que la especie necesita.
```

### 2 — Diferencia entre hábitat y ecosistema

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["concepto", "ecosistema"]

respuesta: falso
tipo: vf

enunciado: "Los términos 'hábitat' y 'ecosistema' son sinónimos y significan exactamente lo mismo."

explicacion: |
  Falso. El ecosistema incluye todos los seres vivos y el ambiente de una zona; el hábitat es la "dirección" de una especie puntual.
```

### 3 — Componentes de un hábitat

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["condiciones"]

respuesta: verdadero
tipo: vf

enunciado: "Un hábitat incluye condiciones como temperatura, agua, alimento y refugio."

explicacion: |
  Correcto, son los recursos y condiciones esenciales para el ciclo vital.
```

### 4 — Definición de adaptación

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["adaptacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una adaptación es una característica que ayuda a un ser vivo a sobrevivir y reproducirse mejor en su hábitat."

explicacion: |
  Correcto, son rasgos que aumentan las chances de supervivencia y reproducción.
```

### 5 — Origen de las adaptaciones

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["evolucion"]

respuesta: falso
tipo: vf

enunciado: "Una adaptación aparece de un día para el otro en un solo individuo, a propósito."

explicacion: |
  Falso. Se desarrolla a lo largo de muchas generaciones, no es un cambio voluntario individual.
```

### 6 — Mecanismo de la adaptación

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["seleccion_natural"]

respuesta: verdadero
tipo: vf

enunciado: "Las adaptaciones están directamente relacionadas con el proceso de selección natural."

explicacion: |
  Correcto — ver ../seleccion-natural/.
```

### 7 — Tipos de adaptación (ejemplos)

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["adaptacion"]

variables:
  tabla: [["estructural", "pico curvo de un aguila"], ["fisiologica", "hibernacion"], ["de comportamiento", "migracion de aves"]]
  idx: uno_de([0, 1, 2])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["pico curvo de un aguila", "hibernacion", "migracion de aves"]

enunciado: "¿Cuál es un ejemplo de adaptación de tipo {tabla[idx][0]}?"

explicacion: |
  Un ejemplo de adaptación {tabla[idx][0]} es: {tabla[idx][1]}.
```

### 8 — Camuflaje en el oso polar

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["camuflaje", "estructural"]

respuesta: verdadero
tipo: vf

enunciado: "El pelaje blanco de un oso polar (camuflaje) es una adaptación estructural."

explicacion: |
  Correcto, es una característica física del cuerpo.
```

### 9 — La hibernación

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["fisiologia"]

respuesta: falso
tipo: vf

enunciado: "La hibernación (bajar el metabolismo) es una adaptación de comportamiento, no fisiológica."

explicacion: |
  Falso. Es fisiológica, porque implica cambios en procesos internos del cuerpo.
```

### 10 — Comportamiento social

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["comportamiento"]

respuesta: verdadero
tipo: vf

enunciado: "Vivir en manada para protegerse de depredadores es una adaptación de comportamiento."

explicacion: |
  Correcto, es una conducta que aumenta las chances de supervivencia.
```

### 11 — Terminología de adaptaciones

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "estructurales"
tipo: completar
respuestas_validas:
  - "estructurales"

enunciado: "Las adaptaciones físicas se llaman adaptaciones ___."

explicacion: |
  Las adaptaciones anatómicas se denominan estructurales.
```

### 12 — Adaptación y entorno

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["adaptacion", "evolucion"]

respuesta: verdadero
tipo: vf

enunciado: "Una adaptación beneficiosa en un hábitat puede resultar inútil o perjudicial en un hábitat distinto."

explicacion: |
  Correcto, las adaptaciones son específicas del entorno donde surgieron.
```

### 13 — La adaptación universal

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["evolucion"]

respuesta: falso
tipo: vf

enunciado: "Existe 'la adaptación perfecta', un conjunto de rasgos que sirven para sobrevivir en cualquier hábitat por igual."

explicacion: |
  Falso, no existe la adaptación universal — siempre son específicas a un hábitat.
```

### 14 — Función del tallo en el cactus

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["cactus", "desierto"]

respuesta: "almacenar agua"
tipo: mc
opciones_explicitas: ["almacenar agua", "atraer polinizadores", "defenderse de depredadores", "realizar fotosíntesis extra"]

enunciado: "En el cactus del desierto, ¿para qué sirve principalmente su tallo grueso?"

explicacion: |
  El tallo suculento almacena agua para las temporadas de sequía.
```

### 15 — Adaptación de las espinas

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["cactus", "desierto"]

respuesta: "perder menos agua y defenderse"
tipo: mc
opciones_explicitas: ["perder menos agua y defenderse", "atraer más agua de lluvia", "producir más flores", "nada en particular"]

enunciado: "En el cactus, las hojas transformadas en espinas sirven principalmente para..."

explicacion: |
  Menos superficie foliar reduce la pérdida de agua por transpiración, y además funciona como defensa contra herbívoros.
```

### 16 — Raíces del cactus

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["cactus", "desierto"]

respuesta: verdadero
tipo: vf

enunciado: "Las raíces extendidas y poco profundas del cactus le permiten aprovechar rápido las lluvias esporádicas del desierto."

explicacion: |
  Correcto, al ser tan extendidas cerca de la superficie, absorben agua de lluvia antes de que se evapore o se filtre profundo.
```

### 17 — Aletas de los peces (aplicación)

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["aplicacion", "ejemplos"]

respuesta: "estructural"
tipo: mc
opciones_explicitas: ["estructural", "fisiologica", "de comportamiento"]

enunciado: "Las aletas de un pez, que le permiten nadar eficientemente, son un ejemplo de adaptación de tipo..."

explicacion: |
  Es una característica física del cuerpo: adaptación estructural.
```

### 18 — Camaleón y camuflaje activo

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "avanzado"
  tags: ["aplicacion", "ejemplos"]

respuesta: verdadero
tipo: vf

enunciado: "La capacidad del camaleón de cambiar de color según el entorno es una adaptación que combina lo estructural (piel con células especiales) y lo conductual (elige cuándo activarlo)."

explicacion: |
  Correcto, muchas adaptaciones no encajan en una sola categoría pura, sino que combinan varios tipos.
```

### 19 — Migración como respuesta al hábitat

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["comportamiento", "migracion"]

respuesta: verdadero
tipo: vf

enunciado: "La migración de las aves es una adaptación de comportamiento que responde a cambios estacionales del hábitat (disponibilidad de comida, temperatura)."

explicacion: |
  Correcto, viajan a zonas con mejores condiciones según la época del año.
```

### 20 — Adaptaciones y cambio de hábitat forzado

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "avanzado"
  tags: ["conceptos", "conservacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si el hábitat de una especie cambia muy rápido (por ejemplo, por acción humana), sus adaptaciones (desarrolladas para el hábitat anterior) pueden dejar de ser útiles, poniendo en riesgo a la especie."

explicacion: |
  Correcto. Las adaptaciones evolucionan lentamente, a lo largo de generaciones — un cambio de hábitat muy rápido no les da tiempo de "ponerse al día".
```
