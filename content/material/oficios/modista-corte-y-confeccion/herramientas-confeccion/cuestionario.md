# Oficios — herramientas confeccion (cuestionario, 26 preguntas VBLang)

> Tema: `oficios/modista-corte-y-confeccion/herramientas-confeccion`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "basico"
  tags: ["maquinaria", "diferencias"]

variables:
  velocidad_domestica: random(500, 800)
  velocidad_industrial: random(4000, 6000)

respuesta: "La máquina industrial es más rápida"
tipo: input

enunciado: "Si una máquina doméstica cosía a {velocidad_domestica} ppm y una industrial a {velocidad_industrial} ppm, ¿cuál afirmación describe mejor su diferencia de rendimiento?"

explicacion: |
  La máquina industrial está diseñada para alta velocidad y resistencia, mientras que la doméstica prioriza la versatilidad y el uso puntual.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "basico"
  tags: ["maquinaria", "domestica"]

variables:
  potencia: random(50, 150)

respuesta: "Menor potencia"
tipo: input

enunciado: "La máquina doméstica tiene un motor con {potencia} vatios aproximadamente. ¿Cómo se describe su capacidad de fuerza comparada con la industrial?"

explicacion: |
  La máquina doméstica tiene menos potencia y velocidad limitada para proteger sus mecanismos internos, a diferencia de la industrial que es más potente.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "intermedio"
  tags: ["overlock", "durabilidad"]

variables:
  sin_overlock: "bordes crudos"
  con_overlock: "acabado profesional"

respuesta: "con_overlock"
tipo: input

enunciado: "Para prendas que se lavan frecuentemente, ¿qué resultado garantiza el uso de la overlock?"

explicacion: |
  Garantiza un acabado profesional y evita que las costuras se abran, a diferencia de dejar los bordes crudos que se deterioran.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "basico"
  tags: ["maquinaria", "puntadas"]

variables:
  tipo_puntada: "recta"

respuesta: "recta"
tipo: input

enunciado: "La máquina industrial está optimizada generalmente para realizar un solo tipo de puntada. ¿Cuál es?"

explicacion: |
  La máquina industrial está optimizada para realizar la puntada recta con precisión milimétrica.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "intermedio"
  tags: ["maquinaria", "estructura"]

variables:
  peso_domestico: random(5, 10)
  peso_industrial: random(30, 50)

respuesta: "mas_pesada"
tipo: input

enunciado: "Si la máquina doméstica pesa {peso_domestico} kg y la industrial {peso_industrial} kg, ¿cuál ofrece mayor estabilidad para evitar que la tela se mueva?"

explicacion: |
  La estructura más pesada y estable de la máquina industrial evita que la tela se mueva o se deforme durante el trabajo.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "intermedio"
  tags: ["patrones", "moldes", "definicion"]

variables:
  rol_molde: "guia fisica"
  rol_patron: "representacion geometrica"

respuesta: "guia fisica"
tipo: input

enunciado: "En el proceso creativo, ¿cómo se define típicamente el rol de un molde?"

explicacion: |
  El molde actúa como la guía física o la forma base, complementando al patrón que es la representación geométrica.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "basico"
  tags: ["maquinaria", "domestica", "versatilidad"]

variables:
  puntada_recta: verdadero
  puntada_zigzag: verdadero
  puntada_elastica: verdadero

respuesta: "versatil"
tipo: input

enunciado: "La máquina doméstica permite realizar distintos tipos de puntadas. ¿Qué característica describe mejor su diseño?"

explicacion: |
  Está diseñada para la versatilidad, permitiendo puntadas rectas, zigzag y elásticas con facilidad.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "intermedio"
  tags: ["overlock", "errores"]

variables:
  resultado: "se deshilachan"

respuesta: "se deshilachan"
tipo: input

enunciado: "Sin el uso de la overlock, ¿qué sucede con los bordes de la tela en una prenda?"

explicacion: |
  Los bordes quedan crudos y propensos a deteriorarse rápidamente o deshilacharse con el tiempo.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "basico"
  tags: ["maquinaria", "velocidad"]

variables:
  ratio: random(4, 8)

respuesta: "mucho_mayor"
tipo: input

enunciado: "La velocidad de una máquina industrial es aproximadamente {ratio} veces mayor que la de una doméstica. ¿Cómo se califica esta diferencia?"

explicacion: |
  La máquina industrial tiene una velocidad mucho mayor, optimizada para la producción en serie.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "basico"
  tags: ["maquinaria", "domestica", "puntadas"]

variables:
  maquina: "domestica"
  puntada: "zigzag"

respuesta: "domestica"
tipo: input

enunciado: "¿Qué tipo de máquina suele facilitar más la realización de puntadas elásticas o en zigzag?"

explicacion: |
  La máquina doméstica permite realizar distintos tipos de puntadas, incluyendo zigzag y elástica, con facilidad.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "intermedio"
  tags: ["maquinaria", "industrial", "precision"]

variables:
  precision: "milimetrica"

respuesta: "milimetrica"
tipo: input

enunciado: "La máquina industrial realiza la puntada recta con una precisión de tipo:"

explicacion: |
  La máquina industrial está optimizada para realizar la puntada recta con una precisión milimétrica.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "intermedio"
  tags: ["maquinaria", "industrial", "produccion"]

variables:
  contexto: "fabricas_textiles"

respuesta: "indispensable"
tipo: input

enunciado: "En la producción en serie de fábricas textiles argentinas, la máquina industrial es considerada:"

explicacion: |
  Es indispensable por su eficiencia y durabilidad bajo uso continuo en la producción en serie.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "intermedio"
  tags: ["patrones", "moldes", "eficiencia"]

variables:
  resultado: "evitando_desperdicios"

respuesta: "evitando_desperdicios"
tipo: input

enunciado: "Dominar la terminología de patrones y moldos permite pasar de una idea abstracta a una prenda tangible, evitando:"

explicacion: |
  Permite evitar desperdicios de tela y errores costosos en el proceso de armado.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "basico"
  tags: ["maquinaria", "industrial", "estructura"]

variables:
  estructura: "pesada"

respuesta: "pesada"
tipo: input

enunciado: "La estructura de la máquina industrial es de tipo:"

explicacion: |
  Su estructura es más pesada y estable, lo que evita que la tela se mueva o se deforme.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "basico"
  tags: ["maquinaria", "domestica", "uso"]

variables:
  uso: "puntual"

respuesta: "puntual"
tipo: input

enunciado: "La máquina doméstica está diseñada para la versatilidad y el uso:"

explicacion: |
  Está diseñada para la versatilidad y el uso puntual, ideal para reparaciones y arreglos menores.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "intermedio"
  tags: ["overlock", "proceso"]

variables:
  accion: "corta_y_remalla"

respuesta: "corta_y_remalla"
tipo: input

enunciado: "La overlock realiza dos acciones simultáneamente:"

explicacion: |
  La overlock corta el exceso de tela y lo remalla simultáneamente.
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "basico"
  tags: ["maquinaria", "domestica", "caracteristicas"]

variables:
  sonido: "silenciosa"

respuesta: "silenciosa"
tipo: input

enunciado: "Comparada con la industrial, la máquina doméstica suele ser más compacta y:"

explicacion: |
  La máquina doméstica suele ser más compacta y silenciosa.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "intermedio"
  tags: ["overlock", "durabilidad"]

variables:
  garantia: "costuras_no_abran"

respuesta: "costuras_no_abran"
tipo: input

enunciado: "La overlock es crucial en prendas lavables porque garantiza que:"

explicacion: |
  Garantiza que las costuras no se abran con el tiempo.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "intermedio"
  tags: ["patrones", "definicion"]

variables:
  patron: "representacion_geometrica"

respuesta: "representacion_geometrica"
tipo: input

enunciado: "El patrón se define técnicamente como:"

explicacion: |
  El patrón es la representación geométrica del trabajo, complementando al molde.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "basico"
  tags: ["maquinaria", "domestica", "limitaciones"]

variables:
  razon: "proteger_mecanismos"

respuesta: "proteger_mecanismos"
tipo: input

enunciado: "La velocidad de la máquina doméstica es limitada para:"

explicacion: |
  La velocidad es limitada para proteger sus mecanismos internos.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "basico"
  tags: ["overlock", "calidad"]

variables:
  resultado: "profesionales"

respuesta: "profesionales"
tipo: input

enunciado: "La overlock es la herramienta clave para dar acabados de tipo:"

explicacion: |
  La overlock es la herramienta clave para dar acabados profesionales a los bordes de la tela.
```

### 22 — pregunta 22

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "basico"
  tags: ["maquinaria", "recta", "funcion"]

variables:
  funcion: "unir_piezas"

respuesta: "unir_piezas"
tipo: input

enunciado: "Mientras la overlock corta, la máquina recta tiene la función de:"

explicacion: |
  La máquina recta une dos piezas.
```

### 23 — pregunta 23

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "intermedio"
  tags: ["patrones", "eficiencia"]

variables:
  error: "costosos"

respuesta: "costosos"
tipo: input

enunciado: "Dominar patrones y moldos evita errores de tipo:"

explicacion: |
  Evita desperdicios de tela y errores costosos en el proceso de armado.
```

### 24 — pregunta 24

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "basico"
  tags: ["maquinaria", "domestica", "motor"]

variables:
  potencia: "menos_potencia"

respuesta: "menos_potencia"
tipo: input

enunciado: "El motor de la máquina doméstica tiene:"

explicacion: |
  Sin embargo, su motor tiene menos potencia y su velocidad es limitada.
```

### 25 — pregunta 25

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "intermedio"
  tags: ["overlock", "deterioro"]

variables:
  riesgo: "rapidamente"

respuesta: "rapidamente"
tipo: input

enunciado: "Sin overlock, los bordes crudos son propensos a deteriorarse:"

explicacion: |
  Sin la overlock, los bordes de la ropa quedarían crudos y propensos a deteriorarse rápidamente.
```

### 26 — pregunta 26

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_herramientas_confeccion"
  nivel: "intermedio"
  tags: ["patrones", "moldes", "relacion"]

variables:
  relacion: "complementarios"

respuesta: "complementarios"
tipo: input

enunciado: "Los moldes y patrones tienen roles que son:"

explicacion: |
  Aunque se usan como sinónimos coloquialmente, en la técnica tienen roles complementarios pero diferentes.
```
