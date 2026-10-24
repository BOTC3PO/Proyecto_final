# Lengua — tecnicas de estudio resumen y organizadores graficos (cuestionario, 23 preguntas VBLang)

> Tema: `lengua/tecnicas-de-estudio-resumen-y-organizadores-graficos`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["resumen", "errores_comunes"]

respuesta: falso
tipo: vf

enunciado: "Un buen resumen se logra copiando y pegando las frases más importantes del libro original."

explicacion: |
  Falso. Un resumen efectivo requiere interpretar y parafrasear. Copiar y pegar no demuestra comprensión ni procesamiento cognitivo de la información.
```

### 2 — pregunta 2

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "concision"]

variables:
  palabras_originales: random(200, 500)
  porcentaje_reduccion: uno_de([0.3, 0.4, 0.5])
  palabras_nuevas: redondear(palabras_originales * (1 - porcentaje_reduccion), 0)

respuesta: palabras_nuevas
tipo: input

enunciado: "Si un texto tiene {palabras_originales} palabras y quieres reducirlo en un {redondear(porcentaje_reduccion * 100, 0)}% manteniendo el sentido, ¿cuántas palabras aproximadamente debería tener el resumen?"

explicacion: |
  La claridad y la concisión son aliadas. Si reduces el texto en un X%, el nuevo tamaño es el original menos esa fracción. Esto ayuda a eliminar lo redundante.
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["resumen", "fidelidad"]

respuesta: verdadero
tipo: vf

enunciado: "Es crucial mantener la fidelidad al significado original del texto, sin añadir opiniones personales ni alterar el sentido."

explicacion: |
  La fidelidad es crucial. Un resumen debe reflejar el contenido del autor, no la interpretación subjetiva ni opiniones ajenas al texto original.
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "palabras_clave"]

variables:
  total_palabras: random(100, 300)
  porcentaje_clave: 0.05
  num_claves: redondear(total_palabras * porcentaje_clave, 0)

respuesta: num_claves
tipo: input

enunciado: "Si un texto tiene {total_palabras} palabras y decides subrayar solo el {redondear(porcentaje_clave * 100, 0)}% como palabras clave, ¿cuántas palabras clave seleccionarías?"

explicacion: |
  Subrayar solo las palabras clave ayuda a filtrar lo esencial. Calcular un porcentaje pequeño del total facilita la identificación de lo central.
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "avanzado"
  tags: ["beneficios", "autonomia"]

respuesta: verdadero
tipo: vf

enunciado: "Dominar el resumen y los organizadores gráficos te da autonomía para estudiar cualquier contenido, no solo literatura."

explicacion: |
  Estas son estrategias cognitivas universales. Dominarlas permite procesar información densa y abstracta en cualquier área, desde gramática hasta lingüística.
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["planificacion", "tiempo"]

variables:
  horas_lectura: random(2, 5)
  factor_procesamiento: 0.5
  horas_resumen: redondear(horas_lectura * factor_procesamiento, 1)

respuesta: horas_resumen
tipo: input

enunciado: "Si dedicas {horas_lectura} horas a leer y procesar un texto, y estimas que el resumen y la organización visual toman la mitad de ese tiempo, ¿cuántas horas invertirás en la técnica?"

explicacion: |
  Las técnicas de estudio requieren tiempo activo. Procesar, filtrar y organizar es una inversión que reduce el tiempo de memorización posterior.
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "literatura"]

respuesta: verdadero
tipo: vf

enunciado: "Un buen resumen de un cuento debe captar la trama y el tema, pero no necesita describir cada personaje con detalle."

explicacion: |
  La fidelidad al significado original es crucial, pero la concisión permite omitir detalles secundarios como descripciones extensas de personajes menores.
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "estructura"]

variables:
  parrafos: random(3, 6)
  ideas_por_parrafo: 1
  total_ideas: parrafos * ideas_por_parrafo

respuesta: total_ideas
tipo: input

enunciado: "Si un texto tiene {parrafos} párrafos y extraes una idea principal de cada uno, ¿cuántas ideas principales tendrás en total para tu resumen?"

explicacion: |
  Identificar la idea principal de cada sección es clave. Esto crea una estructura base para el resumen y el organizador gráfico.
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "avanzado"
  tags: ["teoria", "cognicion"]

respuesta: verdadero
tipo: vf

enunciado: "El resumen y los organizadores gráficos son estrategias cognitivas que obligan a procesar la información, no simples atajos."

explicacion: |
  Estas herramientas fuerzan al estudiante a filtrar lo esencial y darle orden lógico, evitando perderse en detalles irrelevantes.
```

### 10 — pregunta 10

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "compresion"]

variables:
  original: random(1000, 2000)
  ratio: 0.1
  comprimido: redondear(original * ratio, 0)

respuesta: comprimido
tipo: input

enunciado: "Si un ensayo tiene {original} palabras y lo comprimes a una décima parte (10%) de su tamaño, ¿cuántas palabras tendrá el resumen?"

explicacion: |
  La concisión es vital. Reducir significativamente el volumen de texto obliga a seleccionar solo lo esencial, mejorando la retención.
```

### 11 — pregunta 11

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["organizadores_graficos", "visualizacion"]

respuesta: verdadero
tipo: vf

enunciado: "Los organizadores gráficos permiten visualizar las relaciones entre conceptos que en un texto lineal pueden ser difíciles de seguir."

explicacion: |
  Al mostrar jerarquías y conexiones, estos organizadores hacen explícitas las relaciones lógicas entre ideas, géneros o reglas gramaticales.
```

### 12 — pregunta 12

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["estudio", "repeticion"]

variables:
  sesiones: random(3, 5)
  dias_entre: 2
  dias_totales: (sesiones - 1) * dias_entre

respuesta: dias_totales
tipo: input

enunciado: "Si estudias el resumen en {sesiones} sesiones separadas por {dias_entre} días, ¿cuántos días transcurren entre la primera y la última sesión?"

explicacion: |
  La repetición espaciada ayuda a consolidar la memoria. Organizar el estudio en sesiones separadas mejora la retención a largo plazo.
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["resumen", "calidad"]

respuesta: verdadero
tipo: vf

enunciado: "La claridad y la concisión son las mejores aliadas al hacer un resumen; si puedes decir lo mismo con menos palabras, vas bien."

explicacion: |
  La claridad facilita la comprensión y la concisión ahorra tiempo de estudio. Ambos son indicadores de un resumen efectivo.
```

### 14 — pregunta 14

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["resumen", "metacognicion"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Un buen resumen consiste en copiar y pegar las frases más importantes del libro original para asegurar la fidelidad textual."

explicacion: |
  Falso. Un resumen efectivo requiere interpretar y usar tu propio vocabulario. Copiar y pegar no demuestra comprensión ni procesamiento cognitivo.
```

### 15 — pregunta 15

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["estudio", "estrategias"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Estudiar lengua se trata principalmente de memorizar fechas y definiciones de memoria, sin necesidad de comprender estructuras."

explicacion: |
  Falso. La lengua requiere comprender estructuras, analizar textos y conectar ideas. La memorización mecánica es insuficiente.
```

### 16 — pregunta 16

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["beneficios", "aprendizaje"]

variables:
  afirmacion: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Dominar el resumen y los organizadores gráficos te da autonomía para estudiar cualquier contenido, incluso para exámenes de Comprensión Lectora."

explicacion: |
  Verdadero. Estas son estrategias cognitivas transferibles que permiten abordar cualquier texto con eficacia.
```

### 17 — pregunta 17

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["mitos", "estudio"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Los organizadores gráficos son 'atajos' para evitar leer el texto completo."

explicacion: |
  Falso. Son estrategias cognitivas que obligan a procesar la información. No sustituyen la lectura, la complementan y profundizan.
```

### 18 — pregunta 18

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "objetividad"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Es aceptable añadir opiniones personales al resumen si estas enriquecen la interpretación del texto."

explicacion: |
  Falso. El resumen debe mantener la fidelidad al significado original. Las opiniones personales pertenecen a un ensayo o crítica, no al resumen.
```

### 19 — pregunta 19

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["contexto", "importancia"]

variables:
  afirmacion: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "En lengua, la información suele ser densa y abstracta, por lo que las técnicas de estudio son fundamentales."

explicacion: |
  Verdadero. Gramática, literatura y lingüística requieren estrategias para filtrar lo esencial y dar orden lógico.
```

### 20 — pregunta 20

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["resumen", "miedo_comun"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Hacer un resumen implica perder los detalles importantes de la trama o el argumento."

explicacion: |
  Falso. Un buen resumen elimina lo redundante y secundario, pero conserva la estructura y el sentido esencial.
```

### 21 — pregunta 21

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["organizadores_graficos", "estructura"]

variables:
  afirmacion: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Los organizadores gráficos dan un orden lógico a la información, ayudando a ver cómo se relacionan los conceptos."

explicacion: |
  Verdadero. La visualización jerárquica o relacional ayuda a comprender la estructura subyacente del conocimiento.
```

### 22 — pregunta 22

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "procesamiento"]

variables:
  afirmacion: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Es recomendable usar tu propio vocabulario al redactar el resumen para demostrar comprensión."

explicacion: |
  Verdadero. Usar palabras propias obliga al cerebro a procesar y reformular la información, consolidando el aprendizaje.
```

### 23 — pregunta 23

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["estudio", "enfoque"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Estudiar lengua se trata solo de memorizar definiciones, no de comprender estructuras."

explicacion: |
  Falso. La comprensión de estructuras y el análisis son clave. La memorización es solo una parte pequeña y menos efectiva por sí sola.
```
