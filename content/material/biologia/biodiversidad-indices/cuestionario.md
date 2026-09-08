# Biología — Biodiversidad e índices (cuestionario, 25 preguntas VBLang)

> Tema: `BR`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Niveles de biodiversidad

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "basico"
  tags: ["conceptos_basicos", "niveles"]

enunciado: "La biodiversidad se manifiesta en tres niveles principales: la diversidad de ecosistemas, la diversidad de especies y la diversidad ___."

respuestas_validas:
  - "genetica"
  - "genética"
respuesta: "genetica"
tipo: completar

explicacion: |
  La biodiversidad abarca la variedad de formas de vida en tres escalas: la diversidad genética (dentro de una población), la diversidad de especies (en una comunidad) y la diversidad de ecosistemas (en una región).
```

### 2 — Diversidad de especies

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "basico"
  tags: ["especies", "definicion"]

enunciado: "Cuando contamos el número de especies distintas que habitan en un área determinada, estamos midiendo la diversidad de ___."

respuestas_validas:
  - "especies"
respuesta: "especies"
tipo: completar

explicacion: |
  La diversidad de especies se refiere a la variedad de organismos diferentes que coexisten en un lugar y tiempo dados.
```

### 3 — Riqueza de especies (concepto)

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "intermedio"
  tags: ["conceptos_clave", "riqueza"]

enunciado: "El conteo del número total de especies distintas presentes en un ecosistema, sin importar cuántos individuos tiene cada una, se denomina ___."

respuestas_validas:
  - "riqueza de especies"
  - "riqueza"
respuesta: "riqueza de especies"
tipo: completar

explicacion: |
  La riqueza de especies es el número total de especies presentes en una comunidad, independientemente de su abundancia relativa.
```

### 4 — El concepto de abundancia

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "intermedio"
  tags: ["abundancia", "conceptos"]

enunciado: "La diversidad de especies no sólo depende de cuántas especies hay (riqueza), sino también de la ___ de cada una de ellas en el ecosistema."

respuestas_validas:
  - "abundancia"
respuesta: "abundancia"
tipo: completar

explicacion: |
  La abundancia se refiere al número de individuos de cada especie. Un ecosistema con muchas especies pero donde una sola domina a todas las demás tiene una diversidad menor que uno con abundancias equilibradas.
```

### 5 — Importancia de la diversidad genética

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "avanzado"
  tags: ["genetica", "resiliencia"]

enunciado: "Si una población tiene una alta diversidad ___, los individuos tienen mayor probabilidad de sobrevivir a cambios ambientales bruscos."

respuestas_validas:
  - "genetica"
  - "genética"
respuesta: "genetica"
tipo: completar

explicacion: |
  La diversidad genética proporciona la materia prima para la adaptación. A mayor variabilidad en los genes, mayor es la capacidad de una población para evolucionar y resistir enfermedades o cambios climáticos.
```

### 6 — Concepto de riqueza (aplicado)

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "basico"
  tags: ["conceptos", "riqueza"]

tipo: mc
opciones_explicitas: ["El número total de especies distintas presentes en un ecosistema", "La abundancia de un solo individuo en el ecosistema", "La cantidad de individuos que componen una población", "La variedad de hábitats en una región"]
respuesta: "El número total de especies distintas presentes en un ecosistema"

enunciado: "Si en un bosque contamos que existen 15 especies diferentes de árboles, ¿a qué concepto de biodiversidad nos referimos?"

explicacion: |
  La riqueza de especies es simplemente el conteo del número de especies distintas en un área determinada, sin importar cuántos individuos hay de cada una.
```

### 7 — Concepto de equitatividad

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "basico"
  tags: ["conceptos", "equitatividad"]

tipo: mc
opciones_explicitas: ["El número de especies presentes", "La uniformidad en la abundancia de individuos entre las especies", "La velocidad de reproducción de una especie", "La cantidad de biomasa total del ecosistema"]
respuesta: "La uniformidad en la abundancia de individuos entre las especies"

enunciado: "La equitatividad (o equidad) se refiere a la ___ de los individuos entre las especies presentes en una comunidad."

explicacion: |
  Mientras que la riqueza cuenta cuántas especies hay, la equitatividad mide si los individuos están repartidos de forma equilibrada o si una especie domina claramente sobre las demás.
```

### 8 — Comparación de escenarios de equitatividad

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "intermedio"
  tags: ["comparacion", "riqueza", "equitatividad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["10 especies, todas con 10 individuos cada una", "Alta equitatividad"], ["10 especies, una con 91 individuos y las otras 9 con 1 individuo cada una", "Baja equitatividad"]]

tipo: mc
opciones_explicitas: ["Alta equitatividad", "Baja equitatividad"]
respuesta: datos[escenario_idx][1]

enunciado: "Un ecosistema tiene {datos[escenario_idx][0]}. ¿Cuál es la característica de equitatividad de ese escenario?"

explicacion: |
  Cuando los individuos están repartidos parejo entre las especies, hay alta equitatividad. Cuando una especie domina y el resto tiene poquísimos individuos, hay baja equitatividad.
```

### 9 — Riqueza alta, equitatividad baja

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "intermedio"
  tags: ["indices", "identificacion"]

tipo: completar
respuestas_validas:
  - "riqueza"
respuesta: "riqueza"

enunciado: "Si en un estudio de campo se determina que un arrecife de coral tiene 50 especies de peces, pero la mayoría de los ejemplares observados pertenecen a una sola especie de pez cirujano, el valor de la ___ es alta, aunque la equitatividad sea baja."

explicacion: |
  Al haber 50 especies distintas, la riqueza es alta. Sin embargo, al estar los individuos concentrados en una sola especie, la equitatividad es baja.
```

### 10 — Análisis de biodiversidad total

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "avanzado"
  tags: ["indices", "comparacion"]

tipo: mc
opciones_explicitas: ["El ecosistema 1 tiene más riqueza que el 2", "El ecosistema 2 tiene más riqueza que el 1", "El ecosistema 1 tiene más equitatividad que el 2", "El ecosistema 2 tiene más equitatividad que el 1"]
respuesta: "El ecosistema 1 tiene más equitatividad que el 2"

enunciado: "Considera estos datos: Ecosistema 1 (3 especies: 33, 33, 34 individuos) y Ecosistema 2 (3 especies: 98, 1, 1 individuos). ¿Cuál de estas afirmaciones es correcta?"

explicacion: |
  El Ecosistema 1 tiene una distribución muy pareja (alta equitatividad), mientras que el Ecosistema 2 está dominado por una especie (baja equitatividad). Ambos tienen la misma riqueza (3 especies).
```

### 11 — Riqueza vs. equitatividad (ejemplo A/B)

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "basico"
  tags: ["riqueza", "equitatividad", "biodiversidad"]

enunciado: "Si un ecosistema A tiene 3 especies con 33% de abundancia cada una, y un ecosistema B tiene 3 especies pero una de ellas representa el 98% de la población, el ecosistema con mayor equitatividad es el ___."

respuestas_validas:
  - "A"
respuesta: "A"
tipo: completar

explicacion: |
  La riqueza es el número de especies presentes, pero la equitatividad mide qué tan balanceadas están sus abundancias. El ecosistema A es más diverso porque sus individuos están distribuidos equitativamente.
```

### 12 — El concepto de dominancia

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "intermedio"
  tags: ["dominancia", "equitatividad", "ecosistemas"]

variables:
  escenario: uno_de([["Ecosistema X", "alta"], ["Ecosistema Y", "alta"]])

enunciado: "En el {escenario[0]}, donde una sola especie controla casi toda la biomasa, decimos que existe una ___ dominancia."

respuestas_validas:
  - "alta"
respuesta: escenario[1]
tipo: completar

explicacion: |
  La dominancia ocurre cuando una especie es mucho más abundante que las demás, lo que reduce la equitatividad y, por ende, la diversidad real del sistema.
```

### 13 — Comparación de índices (Simpson)

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "intermedio"
  tags: ["indices", "simpson", "riqueza"]

enunciado: "Dos bosques tienen la misma riqueza de especies (10 especies cada uno). Sin embargo, el Bosque 1 tiene abundancias muy desiguales y el Bosque 2 tiene abundancias muy similares entre especies. El índice de diversidad de Simpson será mayor en el ___."

respuestas_validas:
  - "Bosque 2"
respuesta: "Bosque 2"
tipo: completar

explicacion: |
  El índice de diversidad (como el de Simpson o Shannon) penaliza la falta de equitatividad. A mayor igualdad en la abundancia de las especies, mayor es el valor del índice.
```

### 14 — Análisis de abundancia

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "avanzado"
  tags: ["abundancia", "equitatividad", "calculo"]

variables:
  datos: [["especie 1: 50, especie 2: 50", "alta"], ["especie 1: 99, especie 2: 1", "baja"]]
  idx: uno_de([0, 1])

enunciado: "Considerando los datos de {datos[idx][0]}, la equitatividad es ___."

respuestas_validas:
  - "alta"
  - "baja"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La equitatividad se refiere a la uniformidad en la abundancia de los individuos de cada especie. Si las proporciones son similares, la equitatividad es alta.
```

### 15 — Definición de diversidad real

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "basico"
  tags: ["definicion", "riqueza", "equitatividad"]

enunciado: "La biodiversidad no se mide sólo por la riqueza (número de especies), sino por la combinación de la riqueza y la ___."

respuestas_validas:
  - "equitatividad"
respuesta: "equitatividad"
tipo: completar

explicacion: |
  Para que un ecosistema sea considerado realmente diverso, no basta con que haya muchas especies; estas deben estar presentes en proporciones que permitan un equilibrio en el ecosistema.
```

### 16 — Propósito de los índices

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "basico"
  tags: ["conceptos_basicos", "ecosistemas"]

tipo: mc
opciones_explicitas: ["Calcular el número exacto de especies en un área", "Comparar la diversidad entre diferentes ecosistemas o en el tiempo", "Contar cuántos individuos tiene una sola especie dominante", "Determinar la edad de los organismos en un hábitat"]

respuesta: "Comparar la diversidad entre diferentes ecosistemas o en el tiempo"

enunciado: "Si un ecólogo quiere saber si un bosque es más diverso que una pradera, ¿cuál es la función principal de utilizar un índice de biodiversidad?"

explicacion: |
  Los índices de biodiversidad son herramientas matemáticas que permiten cuantificar la diversidad de un ecosistema, permitiendo comparaciones objetivas entre distintos lugares o el seguimiento de un mismo lugar a través del tiempo.
```

### 17 — Impacto de un incendio en la biodiversidad

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "intermedio"
  tags: ["perturbaciones", "comparacion_temporal"]

tipo: completar
respuestas_validas:
  - "disminuye"
  - "baja"
respuesta: "disminuye"

enunciado: "Considerando un ecosistema que sufre un incendio forestal, la biodiversidad medida por un índice de diversidad suele pasar de un estado de mayor diversidad a uno donde el índice ___ (comparando el antes y el después)."

explicacion: |
  Un incendio actúa como una perturbación que suele reducir la riqueza de especies y alterar la equidad, resultando en una disminución de los índices de biodiversidad.
```

### 18 — Especies invasoras

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "intermedio"
  tags: ["especies_invasoras", "equidad"]

tipo: mc
opciones_explicitas: ["Aumentar la equidad de las especies", "Disminuir la riqueza de especies nativas", "Aumentar la biomasa total sin afectar la diversidad", "Hacer que todas las especies tengan la misma abundancia"]

respuesta: "Disminuir la riqueza de especies nativas"

enunciado: "La llegada de una especie invasora que desplaza a las nativas suele provocar que los índices de biodiversidad disminuyan debido a que:"

explicacion: |
  Las especies invasoras suelen volverse dominantes, lo que reduce la 'equidad' (la igualdad en la abundancia de especies) y puede reducir la 'riqueza' (el número total de especies) al extinguir localmente a las nativas.
```

### 19 — Comparación de hábitats por índice de Shannon

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "basico"
  tags: ["comparacion", "ecologia"]

tipo: completar
respuestas_validas:
  - "mayor"
respuesta: "mayor"

enunciado: "Si el índice de Shannon de un arrecife de coral es 4.5 y el de un estanque es 1.2, podemos afirmar que el arrecife tiene una biodiversidad ___ que el estanque."

explicacion: |
  En la mayoría de los índices de diversidad (como Shannon o Simpson), valores más altos indican una mayor complejidad, riqueza y equidad en la comunidad biológica.
```

### 20 — Equidad: definición precisa

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "avanzado"
  tags: ["conceptos_clave"]

tipo: mc
opciones_explicitas: ["El número total de especies presentes en una comunidad", "La abundancia relativa de los individuos de cada especie", "La velocidad de reproducción de las especies", "La cantidad de biomasa por metro cuadrado"]

respuesta: "La abundancia relativa de los individuos de cada especie"

enunciado: "Cuando un índice de biodiversidad considera la 'equidad' (evenness), se refiere principalmente a:"

explicacion: |
  Mientras que la 'riqueza' se refiere simplemente al conteo de especies, la 'equidad' mide qué tan equilibradas están las poblaciones de esas especies; es decir, si hay una especie que domina claramente a las demás o si todas tienen abundancias similares.
```

### 21 — Comparación de riqueza y abundancia

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "intermedio"
  tags: ["diversidad", "ecosistemas", "riqueza"]

opciones_explicitas: ["Ecosistema A", "Ecosistema B", "Ambos son iguales", "Ninguno de los anteriores"]
respuesta: "Ecosistema A"
tipo: mc

enunciado: "En un estudio de biodiversidad, se comparan dos ecosistemas con la misma riqueza de especies (mismo número de especies). Sin embargo, en el Ecosistema A, las poblaciones están equilibradas, mientras que en el Ecosistema B, una sola especie es altamente dominante. ¿Cuál de los dos ecosistemas presenta una mayor diversidad biológica?"

explicacion: |
  La diversidad biológica no depende sólo de la riqueza (número de especies), sino también de la equidad (qué tan balanceadas están las abundancias). Un ecosistema con abundancias equilibradas tiene mayor diversidad que uno donde una especie domina claramente.
```

### 22 — Cálculo de abundancia relativa

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "intermedio"
  tags: ["abundancia", "calculo", "ecologia"]

variables:
  datos: [[10, 40, "20"], [5, 45, "10"]]
  idx: uno_de([0, 1])

enunciado: "En un ecosistema se observan dos especies. La especie 1 tiene {datos[idx][0]} individuos y la especie 2 tiene {datos[idx][1]} individuos. ¿Cuál es la abundancia relativa de la especie 1 expresada en porcentaje?"

pasos:
  - "Sumar el total de individuos de todas las especies."
  - "Dividir la cantidad de individuos de la especie 1 por el total."
  - "Multiplicar el resultado por 100 para obtener el porcentaje."

respuesta: datos[idx][2]
tipo: completar
respuestas_validas:
  - "20"
  - "10"

explicacion: |
  Para hallar la abundancia relativa: (individuos de la especie 1 / total de individuos) × 100. Con 10 y 40: 10/50×100 = 20%. Con 5 y 45: 5/50×100 = 10%.
```

### 23 — El concepto de equidad (aplicado)

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "basico"
  tags: ["equidad", "conceptos"]

enunciado: "Si un bosque tiene 10 especies de árboles y cada especie tiene exactamente 10 individuos, decimos que el ecosistema tiene una alta ___."

respuestas_validas:
  - "equidad"
respuesta: "equidad"
tipo: completar

explicacion: |
  Cuando los individuos se distribuyen de manera uniforme entre las especies presentes, el ecosistema presenta una alta equidad o uniformidad.
```

### 24 — Análisis de la riqueza de especies (dos parcelas)

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "basico"
  tags: ["riqueza", "conteo"]

variables:
  conteo: [[5, 2, "5"], [3, 4, "4"]]
  idx: uno_de([0, 1])

enunciado: "Se realizan muestreos en dos parcelas. En la parcela 1 se encuentran {conteo[idx][0]} especies diferentes. En la parcela 2 se encuentran {conteo[idx][1]} especies diferentes. El número de especies presentes en la parcela con mayor riqueza es ___."

respuesta: conteo[idx][2]
tipo: completar
respuestas_validas:
  - "5"
  - "4"

explicacion: |
  La riqueza de especies es simplemente el conteo total de especies distintas presentes en un área, independientemente de cuántos individuos haya de cada una.
```

### 25 — Comparación de índices de diversidad (menor valor)

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "avanzado"
  tags: ["simpson", "indices", "comparacion"]

variables:
  valores: [[0.85, 0.40, "0.40"], [0.70, 0.55, "0.55"]]
  caso: uno_de([0, 1])

enunciado: "Se calculan los índices de diversidad de dos ecosistemas. El Ecosistema 1 tiene un índice de {valores[caso][0]} y el Ecosistema 2 tiene un índice de {valores[caso][1]}. Si el índice es mayor cuanto más diversa es la comunidad, ¿cuál es el índice del ecosistema con MENOR diversidad?"

opciones_explicitas: ["0.85", "0.40", "0.70", "0.55"]
respuesta: valores[caso][2]
tipo: mc

explicacion: |
  El valor menor entre los dos índices comparados corresponde al ecosistema con menor diversidad.
```
