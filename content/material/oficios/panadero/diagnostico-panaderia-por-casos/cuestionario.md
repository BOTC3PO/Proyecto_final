# Oficios — Panadero — Diagnóstico de panadería por casos (cuestionario, 16 preguntas VBLang)

> Cierre del oficio (`OF14`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico de panadería
> — cada pregunta validada con parse+lint+compile+generate real de
> packages/vblang antes de guardarse.

---

### 1 — El diagnóstico combina varias etapas

```
metadata:
  materia: "oficios"
  tema: "panadero_diagnostico_panaderia_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, un resultado final defectuoso en panadería puede tener su origen en cualquiera de las etapas previas: materia prima, amasado, fermentación u horneado."

explicacion: |
  Es la idea de apertura de todo el tema de diagnóstico de panadería.
```

### 2 — Hipótesis para el pan que no leva

```
metadata:
  materia: "oficios"
  tema: "panadero_diagnostico_panaderia_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  causa: uno_de(["levadura vencida o muerta", "temperatura ambiente demasiado fría", "cantidad de levadura insuficiente"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una hipótesis mencionada en la teoría para que la masa no aumente de volumen durante la fermentación."

explicacion: |
  Las tres son hipótesis principales mencionadas en el caso 1.
```

### 3 — Cómo verificar si la levadura está viva

```
metadata:
  materia: "oficios"
  tema: "panadero_diagnostico_panaderia_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "mezclarla con agua tibia y azúcar, y confirmar que genera burbujas en unos minutos"
tipo: mc
opciones_explicitas: ["mezclarla con agua tibia y azúcar, y confirmar que genera burbujas en unos minutos", "olerla, sin ninguna otra prueba", "mirar su color exclusivamente"]

enunciado: "Según la teoría, ¿cómo se verifica rápidamente si la levadura está viva antes de descartar o confirmar esa hipótesis?"

explicacion: |
  Mezclarla con agua tibia y azúcar y confirmar que genera burbujas en
  unos minutos es la prueba simple mencionada en el caso 1.
```

### 4 — Causas de un pan denso

```
metadata:
  materia: "oficios"
  tema: "panadero_diagnostico_panaderia_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "un amasado insuficiente o una fermentación demasiado corta"
tipo: mc
opciones_explicitas: ["un amasado insuficiente o una fermentación demasiado corta", "siempre un horno demasiado caliente", "siempre un exceso de sal en la receta"]

enunciado: "Según la teoría, ¿cuáles son las dos causas principales de que un pan que sí fermentó quede denso, sin la miga aireada esperada?"

explicacion: |
  Un amasado insuficiente (poco desarrollo de gluten) o una
  fermentación demasiado corta son las dos causas principales del
  caso 2.
```

### 5 — Distinguir entre las causas del caso 2

```
metadata:
  materia: "oficios"
  tema: "panadero_diagnostico_panaderia_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "revisando si la masa pasó la prueba de la membrana antes de fermentar"
tipo: mc
opciones_explicitas: ["revisando si la masa pasó la prueba de la membrana antes de fermentar", "midiendo únicamente la temperatura del horno", "pesando la masa antes y después de fermentar"]

enunciado: "Según la teoría, ¿cómo se distingue si un pan denso se debe a un amasado insuficiente o a una fermentación demasiado corta?"

explicacion: |
  Revisando si la masa pasó la prueba de la membrana antes de
  fermentar: si no la pasó, el problema es de amasado; si la pasó pero
  la fermentación fue corta, el problema es de tiempo.
```

### 6 — Se quema por fuera, crudo por dentro

```
metadata:
  materia: "oficios"
  tema: "panadero_diagnostico_panaderia_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "una temperatura de horno demasiado alta respecto del tiempo de cocción"
tipo: mc
opciones_explicitas: ["una temperatura de horno demasiado alta respecto del tiempo de cocción", "una levadura vencida, exclusivamente", "un amasado excesivo"]

enunciado: "Un pan que se quema por fuera y queda crudo por dentro casi siempre indica..."

explicacion: |
  Casi siempre indica una temperatura de horno demasiado alta respecto
  del tiempo de cocción: la corteza se quema antes de que el calor
  penetre completamente el interior.
```

### 7 — La solución incorrecta para el caso 3

```
metadata:
  materia: "oficios"
  tema: "panadero_diagnostico_panaderia_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, la solución correcta al caso 3 (quemado por fuera, crudo por dentro) es hornear más tiempo manteniendo la misma temperatura alta."

explicacion: |
  Falso. Eso quemaría más la corteza sin resolver el interior; la
  solución es bajar la temperatura y extender el tiempo.
```

### 8 — La solución correcta para el caso 3

```
metadata:
  materia: "oficios"
  tema: "panadero_diagnostico_panaderia_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, la solución correcta al caso 3 es bajar la temperatura del horno y extender el tiempo de cocción, permitiendo que el calor penetre de forma más pareja."

explicacion: |
  Es la solución explícita que propone la teoría para este caso.
```

### 9 — Identificar la etapa correcta del problema

```
metadata:
  materia: "oficios"
  tema: "panadero_diagnostico_panaderia_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "identificar en qué etapa del proceso se originó el problema, usando pruebas simples y concretas"
tipo: mc
opciones_explicitas: ["identificar en qué etapa del proceso se originó el problema, usando pruebas simples y concretas", "ajustar siempre el horneado, sin importar el síntoma", "repetir la receta exactamente igual hasta que funcione"]

enunciado: "Según el método resumido de la teoría, ¿cuál es la lógica común a los tres casos de diagnóstico de panadería?"

explicacion: |
  Identificar en qué etapa del proceso se originó el problema, usando
  pruebas simples y concretas, es la lógica común a los tres casos.
```

### 10 — Ajustar la etapa correcta

```
metadata:
  materia: "oficios"
  tema: "panadero_diagnostico_panaderia_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según el método resumido de la teoría, ajustar el horneado no soluciona un problema que se originó en el amasado, y viceversa."

explicacion: |
  Es la síntesis final del método de diagnóstico de panadería de todo
  el tema.
```

### 11 — La prueba de la membrana

```
metadata:
  materia: "oficios"
  tema: "panadero_diagnostico_panaderia_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "La \"prueba de la membrana\" (estirar la masa en una lámina fina sin que se rompa) ya se presentó en `../procesos-panaderia/` como señal de un amasado suficiente."

explicacion: |
  Es la conexión directa entre este tema y la lección de procesos,
  donde se define esa prueba.
```

### 12 — Diferencia entre caso 1 y caso 2

```
metadata:
  materia: "oficios"
  tema: "panadero_diagnostico_panaderia_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "el caso 1 es que la masa no leva en absoluto; el caso 2 es que sí leva pero el pan resulta denso igual"
tipo: mc
opciones_explicitas: ["el caso 1 es que la masa no leva en absoluto; el caso 2 es que sí leva pero el pan resulta denso igual", "son exactamente el mismo síntoma con dos nombres distintos", "el caso 1 sólo ocurre con masa madre, el caso 2 sólo con levadura comercial"]

enunciado: "¿Cuál es la diferencia central entre el caso 1 (el pan no leva) y el caso 2 (el pan queda denso)?"

explicacion: |
  El caso 1 es una falla total de fermentación; el caso 2 es una
  fermentación que sí ocurrió pero resultó insuficiente para lograr
  una miga aireada.
```

### 13 — No adivinar la causa

```
metadata:
  materia: "oficios"
  tema: "panadero_diagnostico_panaderia_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según el método resumido de la teoría, se recomienda usar pruebas simples y concretas en vez de adivinar la causa de un problema de panadería."

explicacion: |
  Es parte del primer paso del método resumido de todo el tema.
```

### 14 — Reacción de Maillard

```
metadata:
  materia: "oficios"
  tema: "panadero_diagnostico_panaderia_por_casos"
  nivel: "avanzado"
  tags: ["contexto"]

respuesta: verdadero
tipo: vf

enunciado: "Según `../procesos-panaderia/`, la corteza dorada del pan se forma por reacciones químicas entre proteínas y azúcares en la superficie, la misma reacción de Maillard que dora la carne al cocinarla."

explicacion: |
  Es contexto ya presentado en la lección de procesos, relevante para
  entender el caso 3 de horneado.
```

### 15 — Levadura insuficiente vs. levadura muerta

```
metadata:
  materia: "oficios"
  tema: "panadero_diagnostico_panaderia_por_casos"
  nivel: "avanzado"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, tanto la levadura vencida/muerta como una cantidad de levadura insuficiente son hipótesis distintas para el mismo síntoma del caso 1."

explicacion: |
  Son dos hipótesis distintas dentro del mismo caso, junto con la
  temperatura ambiente demasiado fría.
```

### 16 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "panadero_diagnostico_panaderia_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los tres casos de este tema comparten la misma lógica: reconstruir en qué etapa del proceso se originó el problema, en vez de sólo describir cómo salió el pan."

explicacion: |
  Es la síntesis final del método de diagnóstico de panadería de todo
  el tema.
```
