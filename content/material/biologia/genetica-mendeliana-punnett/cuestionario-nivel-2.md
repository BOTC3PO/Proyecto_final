# Biología — Genética mendeliana (cuestionario, nivel 2, 20 preguntas VBLang)

> Continúa `cuestionario.md` (nivel 1). Cubre la profundidad de `BE`
> dentro del tronco de Biología: alelo a nivel molecular, dominancia
> incompleta, codominancia, cruza de prueba.
>
> Borrador generado por lotes con LM Studio (Gemma, en paralelo) y
> corregido a mano. Sin bugs graves — sólo complejidad innecesaria
> (`uno_de` sobre listas de un único valor repetido) simplificada a
> valores fijos.

---

### 1 — Definición molecular de alelo

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "basico"
  tags: ["genetica", "adn", "alelos"]

respuesta: verdadero
tipo: vf

enunciado: "Un alelo es una versión distinta de la secuencia de ADN de un mismo gen."

explicacion: |
  Correcto. Los alelos son variantes de un mismo gen en la misma posición (locus) de cromosomas homólogos.
```

### 2 — Genotipo y expresión proteica

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "intermedio"
  tags: ["genotipo", "fenotipo", "proteinas"]

respuesta: verdadero
tipo: vf

enunciado: "Los genotipos AA, Aa y aa producen fenotipos distintos porque cada uno fabrica una mezcla distinta de proteína funcional."

explicacion: |
  La diferencia en la secuencia de los alelos altera la proteína resultante, lo que se traduce en un fenotipo diferente.
```

### 3 — Relación entre alelos

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: falso
tipo: vf

enunciado: "Dos alelos distintos del mismo gen son en realidad genes completamente distintos, sin relación entre sí."

explicacion: |
  Falso. Son versiones del mismo gen, en la misma posición del cromosoma.
```

### 4 — Dominancia incompleta: fenotipo del heterocigota

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "intermedio"
  tags: ["dominancia_incompleta"]

respuesta: verdadero
tipo: vf

enunciado: "En la dominancia incompleta, el heterocigota muestra un fenotipo intermedio entre los dos homocigotas."

explicacion: |
  Correcto. El alelo dominante no enmascara del todo al recesivo.
```

### 5 — Cruce de flores en dominancia incompleta

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "intermedio"
  tags: ["dominancia_incompleta"]

respuesta: verdadero
tipo: vf

enunciado: "Cruzar una flor roja (RR) con una flor blanca (rr) en un sistema de dominancia incompleta da una descendencia F1 de flores rosas (Rr)."

explicacion: |
  Correcto, es el ejemplo clásico de dominancia incompleta: 100% heterocigotos con fenotipo intermedio.
```

### 6 — Comparación con dominancia simple

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "intermedio"
  tags: ["dominancia_incompleta"]

respuesta: falso
tipo: vf

enunciado: "En la dominancia incompleta, el heterocigota se parece exactamente a uno de los dos homocigotas, igual que en la dominancia simple."

explicacion: |
  Falso. En simple, el heterocigota se parece al dominante; en incompleta, es un fenotipo intermedio.
```

### 7 — Definición de dominancia incompleta

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "intermedio"
  tags: ["dominancia_incompleta"]

respuesta: "incompleta"
tipo: completar
respuestas_validas: ["incompleta"]

enunciado: "Cuando el heterocigota muestra un fenotipo intermedio entre los dos homocigotas, se llama dominancia ___."

explicacion: |
  Se llama dominancia incompleta.
```

### 8 — Codominancia: fenotipo heterocigota

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "intermedio"
  tags: ["codominancia"]

respuesta: verdadero
tipo: vf

enunciado: "En la codominancia, el heterocigota muestra ambos fenotipos a la vez, sin mezclarse."

explicacion: |
  Correcto, ambos alelos se expresan plenamente e independiente.
```

### 9 — Codominancia vs. dominancia incompleta

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "intermedio"
  tags: ["codominancia", "dominancia_incompleta"]

respuesta: falso
tipo: vf

enunciado: "La codominancia es lo mismo que la dominancia incompleta."

explicacion: |
  Falso. En incompleta se mezclan (rosa); en codominancia se ven los dos rasgos separados (manchas).
```

### 10 — Grupos sanguíneos y codominancia

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "intermedio"
  tags: ["codominancia", "sangre"]

respuesta: verdadero
tipo: vf

enunciado: "Los grupos sanguíneos del sistema ABO son un ejemplo de codominancia: el genotipo AB expresa ambos alelos."

explicacion: |
  Correcto — ver ../grupos-sanguineos/.
```

### 11 — Identificación de patrones de herencia

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "intermedio"
  tags: ["patrones_herencia"]

variables:
  escenarios: [["dominante/recesivo simple", "igual al homocigota dominante"], ["dominancia incompleta", "mezcla intermedia"], ["codominancia", "ambos rasgos visibles a la vez, sin mezclar"]]
  idx: uno_de([0, 1, 2])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["igual al homocigota dominante", "mezcla intermedia", "ambos rasgos visibles a la vez, sin mezclar"]

enunciado: "En el patrón de {escenarios[idx][0]}, ¿cómo se ve el fenotipo del heterocigota?"

explicacion: |
  En {escenarios[idx][0]}, el heterocigota se ve: {escenarios[idx][1]}.
```

### 12 — Fenotipo dominante y genotipo

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "intermedio"
  tags: ["testcross"]

respuesta: verdadero
tipo: vf

enunciado: "Si un individuo tiene fenotipo dominante, su genotipo puede ser AA o Aa: no se sabe con sólo mirarlo."

explicacion: |
  Correcto, hace falta una cruza de prueba para distinguirlos.
```

### 13 — Definición de cruza de prueba

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "intermedio"
  tags: ["testcross"]

respuesta: verdadero
tipo: vf

enunciado: "La cruza de prueba cruza al individuo de genotipo desconocido con un homocigota recesivo (aa)."

explicacion: |
  Correcto, la proporción de la descendencia revela el genotipo desconocido.
```

### 14 — Resultado de cruza con homocigoto dominante

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "intermedio"
  tags: ["testcross"]

respuesta: verdadero
tipo: vf

enunciado: "En una cruza de prueba, si el individuo desconocido es AA, TODA la descendencia tiene fenotipo dominante."

explicacion: |
  AA × aa da 100% Aa: todos con fenotipo dominante.
```

### 15 — Resultado de cruza con heterocigoto

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "intermedio"
  tags: ["testcross"]

respuesta: verdadero
tipo: vf

enunciado: "En una cruza de prueba, si el individuo desconocido es Aa, aproximadamente la mitad de la descendencia tiene fenotipo recesivo."

explicacion: |
  Aa × aa da 50% Aa (dominante) y 50% aa (recesivo).
```

### 16 — Terminología de la cruza

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "basico"
  tags: ["testcross"]

respuesta: "prueba"
tipo: completar
respuestas_validas: ["prueba"]

enunciado: "La cruza que sirve para descubrir el genotipo desconocido de un individuo con fenotipo dominante se llama cruza de ___."

explicacion: |
  Se llama cruza de prueba (testcross).
```

### 17 — Ejemplo de dominancia incompleta en animales

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "avanzado"
  tags: ["dominancia_incompleta", "ejemplos"]

respuesta: verdadero
tipo: vf

enunciado: "El pelaje 'ruano' de algunos caballos (mezcla de pelos blancos y rojos que da un tono rosado/gris a la vista) es un ejemplo de dominancia incompleta."

explicacion: |
  Correcto, es un fenotipo intermedio entre pelaje rojo puro y blanco puro.
```

### 18 — Base molecular de la dominancia incompleta

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "avanzado"
  tags: ["dominancia_incompleta", "molecular"]

respuesta: "porque el alelo dominante solo produce la mitad de la proteína necesaria para el fenotipo completo"
tipo: mc
opciones_explicitas: ["porque el alelo dominante solo produce la mitad de la proteína necesaria para el fenotipo completo", "porque los dos alelos se destruyen entre sí", "porque el ADN cambia de color", "no hay ninguna explicación molecular, es al azar"]

enunciado: "¿Por qué en dominancia incompleta el heterocigota (Aa) no llega al mismo nivel de color que el homocigota dominante (AA)?"

explicacion: |
  Con sólo una copia del alelo funcional, se produce menos cantidad de la proteína (por ejemplo, pigmento), dando un color más tenue que con dos copias.
```

### 19 — Cruza de prueba con proporción exacta

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "avanzado"
  tags: ["testcross", "calculo"]

variables:
  total_descendencia: uno_de([20, 40, 60, 80])

respuesta: total_descendencia / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "En una cruza de prueba Aa × aa, si nacen {total_descendencia} crías en total, ¿cuántas se espera que tengan fenotipo recesivo?"

pasos:
  - "Proporción esperada: 1:1 (mitad dominante, mitad recesivo)"

explicacion: |
  {total_descendencia} / 2 crías con fenotipo recesivo.
```

### 20 — Alelos múltiples (más allá de dos versiones)

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_nivel_2"
  nivel: "avanzado"
  tags: ["alelos_multiples"]

respuesta: verdadero
tipo: vf

enunciado: "Un gen puede tener más de dos versiones (alelos) posibles dentro de una población, aunque cada individuo sólo porte dos de ellas (una de cada progenitor)."

explicacion: |
  Correcto — el sistema ABO es un ejemplo: hay 3 alelos posibles (A, B, O) circulando en la población, pero cada persona sólo tiene 2 de ellos.
```
