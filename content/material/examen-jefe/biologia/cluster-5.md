# Examen jefe — [PENDIENTE #865]

> Logro #865. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **119 preguntas totales** en 5/5 secciones.

---

## Sección: biodiversidad-indices (25 preguntas)

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

## Sección: adn-gen-proteina (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["adn", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "La molécula de ADN tiene una estructura de doble hélice."

explicacion: |
  Correcto, dos hebras enrolladas entre sí.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["nucleotidos"]

respuesta: verdadero
tipo: vf

enunciado: "El ADN está compuesto por unidades llamadas nucleótidos."

explicacion: |
  Cada nucleótido tiene un fosfato, un azúcar y una base nitrogenada.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "intermedio"
  tags: ["bases_nitrogenadas"]

variables:
  tabla: [["Adenina", "Timina"], ["Timina", "Adenina"], ["Guanina", "Citosina"], ["Citosina", "Guanina"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["Adenina", "Timina", "Guanina", "Citosina"]

enunciado: "Si en una hebra de ADN hay {tabla[idx][0]}, ¿con qué base se empareja en la hebra complementaria?"

explicacion: |
  {tabla[idx][0]} se empareja con {tabla[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["bases"]

respuesta: falso
tipo: vf

enunciado: "Las bases del ADN se emparejan al azar, cualquiera con cualquiera."

explicacion: |
  Falso. Siempre A con T, y G con C.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["gen"]

respuesta: verdadero
tipo: vf

enunciado: "Un gen es un fragmento de ADN que contiene la información para fabricar una proteína en particular."

explicacion: |
  Correcto, es la unidad funcional de la herencia.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["genoma"]

respuesta: "genoma"
tipo: completar
respuestas_validas:
  - "genoma"

enunciado: "El ADN completo de un organismo se llama ___."

explicacion: |
  Se llama genoma.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["genoma", "genes"]

respuesta: falso
tipo: vf

enunciado: "El genoma de un organismo contiene un solo gen."

explicacion: |
  Falso, contiene miles de genes.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["gen", "proteina"]

respuesta: falso
tipo: vf

enunciado: "Cada gen contiene la información para todas las proteínas del organismo a la vez."

explicacion: |
  Falso. Cada gen es para una proteína en particular.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["transcripcion"]

respuesta: "transcripcion"
tipo: completar
respuestas_validas:
  - "transcripcion"

enunciado: "El proceso de copiar un gen de ADN a ARN mensajero se llama ___."

explicacion: |
  Es la transcripción, primer paso del dogma central.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["traduccion"]

respuesta: "traduccion"
tipo: completar
respuestas_validas:
  - "traduccion"

enunciado: "El proceso de leer el ARN mensajero y ensamblar aminoácidos se llama ___."

explicacion: |
  Es la traducción, segundo paso del dogma central.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["ribosoma"]

respuesta: verdadero
tipo: vf

enunciado: "¿La traducción ocurre en el ribosoma?"

explicacion: |
  Correcto — ver ../celula-organelas/.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["dogma_central"]

respuesta: "ADN -> ARN -> proteina"
tipo: mc
opciones_explicitas: ["ADN -> ARN -> proteina", "ARN -> ADN -> proteina", "proteina -> ADN -> ARN", "ADN -> proteina -> ARN"]

enunciado: "¿Cuál es el orden correcto del flujo de información genética (dogma central)?"

explicacion: |
  ADN (almacenamiento) → ARN (mensaje) → proteína (función).
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "intermedio"
  tags: ["transcripcion"]

respuesta: verdadero
tipo: vf

enunciado: "¿La transcripción copia el gen para no arriesgar el ADN original al sacar la información fuera del núcleo?"

explicacion: |
  Correcto, la copia de ARN viaja al citoplasma sin exponer al ADN original.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "intermedio"
  tags: ["genetica"]

respuesta: verdadero
tipo: vf

enunciado: "El gen determina qué proteína se fabrica, y la proteína determina en gran parte un rasgo observable del organismo."

explicacion: |
  Correcto — la base de ../genetica-mendeliana-punnett/.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["mutacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una mutación es un cambio en la secuencia de bases del ADN."

explicacion: |
  Correcto, es la definición de mutación.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "intermedio"
  tags: ["mutacion"]

respuesta: falso
tipo: vf

enunciado: "Todas las mutaciones son siempre dañinas para el organismo."

explicacion: |
  Falso. Pueden ser silenciosas, dañinas o beneficiosas.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "intermedio"
  tags: ["evolucion"]

respuesta: verdadero
tipo: vf

enunciado: "Las mutaciones son la fuente última de la variación genética que alimenta la evolución."

explicacion: |
  Correcto — ver ../seleccion-natural/.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["bases"]

respuesta: 4
tipo: mc
opciones_explicitas: [2, 4, 6, 8]

enunciado: "¿Cuántas bases nitrogenadas distintas tiene el ADN?"

explicacion: |
  Cuatro: Adenina, Timina, Guanina, Citosina.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "avanzado"
  tags: ["proteinas", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Cada proteína tiene una forma específica que le permite cumplir un trabajo específico en la célula (estructural, enzimático, etc.)."

explicacion: |
  Correcto, la forma de la proteína (determinada por el orden de aminoácidos) determina su función.
```

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "avanzado"
  tags: ["mutacion", "herencia"]

respuesta: falso
tipo: vf

enunciado: "Todas las mutaciones que ocurren en el cuerpo de una persona se transmiten automáticamente a sus hijos."

explicacion: |
  Falso. Sólo las mutaciones que ocurren en las células reproductivas (gametos) pueden heredarse; las que ocurren en otras células del cuerpo (somáticas) no pasan a la descendencia.
```

## Sección: conservacion-areas-protegidas (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["biodiversidad", "habitat"]

enunciado: "La construcción de una carretera que divide un bosque en dos partes menores se conoce como ___ de hábitat."

respuestas_validas:
  - "fragmentación"
  - "fragmentacion"
respuesta: "fragmentación"
tipo: completar

explicacion: |
  La fragmentación ocurre cuando un hábitat continuo es dividido en parches más pequeños, dificultando el movimiento de las especies y aumentando el efecto de borde.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["especies_invasoras", "biodiversidad"]

enunciado: "Cuando una especie introducida en un ecosistema se reproduce sin control y desplaza a las especies nativas, se dice que es una especie ___."

respuestas_validas:
  - "invasora"
respuesta: "invasora"
tipo: completar

explicacion: |
  Las especies invasoras pueden alterar los ciclos de nutrientes, competir por alimento y depredar a las especies locales, reduciendo la biodiversidad.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["recursos", "sobreexplotacion"]

enunciado: "Si la tasa de captura de una especie de pez es mayor que su tasa de reproducción natural, estamos ante un caso de ___."

respuestas_validas:
  - "sobreexplotación"
  - "sobreexplotacion"
respuesta: "sobreexplotación"
tipo: completar

explicacion: |
  La sobreexplotación ocurre cuando el ser humano extrae recursos naturales de una población a un ritmo más rápido de lo que la población puede recuperarse.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["contaminacion", "ecosistemas"]

enunciado: "La introducción de sustancias químicas, plásticos o exceso de nutrientes en un ecosistema que altera su equilibrio se denomina ___."

respuestas_validas:
  - "contaminación"
  - "contaminacion"
respuesta: "contaminación"
tipo: completar

explicacion: |
  La contaminación puede ser química, física o biológica, y afecta la supervivencia de los organismos en diversos niveles tróficos.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["clima", "biodiversidad"]

enunciado: "El aumento global de la temperatura media de la atmósfera y los océanos, causado principalmente por el efecto invernadero, es el ___."

respuestas_validas:
  - "cambio climático"
  - "cambio climatico"
respuesta: "cambio climático"
tipo: completar

explicacion: |
  El cambio climático altera los ciclos fenológicos (como las épocas de floración) y los rangos de distribución de las especies, forzándolas a migrar o enfrentar la extinción.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["conservacion", "biodiversidad"]

tipo: mc
opciones_explicitas: ["Un espacio geográfico con límites definidos legalmente para proteger la biodiversidad y sus procesos naturales.", "Un terreno privado donde el dueño decide qué especies cuidar.", "Un parque recreativo diseñado exclusivamente para el turismo masivo.", "Una zona de producción agrícola intensiva con control de plagas."]

respuesta: "Un espacio geográfico con límites definidos legalmente para proteger la biodiversidad y sus procesos naturales."

enunciado: "¿Cuál es la definición técnica de un área protegida?"

explicacion: |
  Un área protegida es un espacio geográfico claramente definido, reconocido y gestionado, mediante medios legales u otros medios eficaces, para lograr la conservación a largo plazo de la naturaleza y sus servicios ecosistémicos.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["parque_nacional", "proteccion_estricta"]

tipo: completar
respuestas_validas:
  - "Parque Nacional"
  - "parque nacional"
respuesta: "Parque Nacional"

enunciado: "Un área de protección estricta, donde las actividades humanas están limitadas casi exclusivamente a la investigación científica y el turismo de bajo impacto, se denomina generalmente: ___"

explicacion: |
  En los Parques Nacionales, el objetivo principal es la preservación de los ecosistemas en su estado natural, restringiendo actividades extractivas o de asentamiento humano permanente.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["uso_sostenible", "reserva"]

tipo: mc
opciones_explicitas: ["Permite la extracción de recursos de manera controlada para satisfacer necesidades de comunidades locales.", "Prohíbe totalmente cualquier tipo de presencia humana.", "Sólo permite la actividad minera a cielo abierto.", "Es un área sin límites legales donde prima la explotación comercial."]

respuesta: "Permite la extracción de recursos de manera controlada para satisfacer necesidades de comunidades locales."

enunciado: "Una reserva de uso sostenible se diferencia de un área de protección estricta porque:"

explicacion: |
  Las áreas de uso sostenible permiten la interacción humana y el aprovechamiento de recursos naturales, siempre que se haga de forma que no comprometa la integridad del ecosistema a largo plazo.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["objetivos", "biodiversidad"]

tipo: completar
respuestas_validas:
  - "conservar"
respuesta: "conservar"

enunciado: "El objetivo principal de establecer áreas protegidas es ___ la biodiversidad y los servicios ecosistémicos."

explicacion: |
  La conservación busca proteger la diversidad biológica y asegurar que los procesos naturales (como el ciclo del agua o la polinización) continúen funcionando.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "avanzado"
  tags: ["gestion", "impacto_humano"]

tipo: mc
opciones_explicitas: ["Protección estricta: impacto humano mínimo / Uso sostenible: impacto humano controlado.", "Protección estricta: impacto humano máximo / Uso sostenible: sin impacto humano.", "Protección estricta: sólo agricultura / Uso sostenible: sólo minería.", "Protección estricta: no hay leyes / Uso sostenible: leyes muy severas."]

respuesta: "Protección estricta: impacto humano mínimo / Uso sostenible: impacto humano controlado."

enunciado: "Al comparar los niveles de restricción, ¿cuál es la diferencia fundamental en la gestión del impacto humano?"

explicacion: |
  La diferencia radica en la intensidad de la intervención permitida: mientras que en la protección estricta se busca la mínima huella humana, en el uso sostenible se permite la presencia de comunidades que interactúan con el entorno de forma regulada.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["ecologia", "conservacion"]

respuesta: "flujo génico"
tipo: completar
respuestas_validas:
  - "flujo génico"
  - "flujo genico"

enunciado: "Los corredores biológicos permiten el movimiento de individuos entre fragmentos de hábitat, lo que facilita el ___ entre las poblaciones."

explicacion: |
  El flujo génico es el intercambio de genes entre poblaciones, lo cual es vital para mantener la diversidad genética y evitar la endogamia en áreas protegidas aisladas.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["fragmentacion", "islas"]

respuesta: "islas"
tipo: completar
respuestas_validas:
  - "islas"

enunciado: "Cuando un hábitat es fragmentado por actividades humanas (como carreteras o agricultura), las áreas protegidas pueden quedar funcionando como ___ biológicas, donde las poblaciones quedan aisladas."

explicacion: |
  El término "islas biológicas" se usa para describir fragmentos de ecosistemas rodeados de un "mar" de entornos degradados que impiden el movimiento de las especies.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["conectividad", "biodiversidad"]

respuesta: "conectar"
tipo: completar
respuestas_validas:
  - "conectar"

enunciado: "Los corredores biológicos tienen como objetivo principal ___ áreas protegidas que de otro modo quedarían aisladas entre sí."

explicacion: |
  La conectividad estructural y funcional es la base de los corredores para asegurar que las especies puedan migrar, alimentarse y reproducirse en diferentes parches de vegetación.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "avanzado"
  tags: ["genetica", "extincion"]

respuesta: "endogamia"
tipo: completar
respuestas_validas:
  - "endogamia"

enunciado: "Si una población queda totalmente aislada en un fragmento pequeño sin corredores, aumenta el riesgo de ___ debido al apareamiento entre individuos estrechamente emparentados."

explicacion: |
  La endogamia reduce la aptitud biológica de una población y puede llevar a la extinción local al aumentar la expresión de genes recesivos perjudiciales.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["paisaje", "ecologia"]

respuesta: "matriz"
tipo: completar
respuestas_validas:
  - "matriz"

enunciado: "El área de terreno que rodea a los parches de hábitat y que un corredor debe atravesar de forma permeable para funcionar bien se llama ___."

explicacion: |
  La matriz es el área que rodea a los parches de hábitat; si la matriz es permeable (por ejemplo, un bosque secundario en lugar de un cultivo intensivo), el corredor funciona mejor.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["genetica", "poblaciones"]

tipo: mc
opciones_explicitas: ["Aumento de la diversidad genética", "Pérdida de alelos por azar", "Aumento del flujo génico", "Reducción de la tasa de mutación"]
respuesta: "Pérdida de alelos por azar"

enunciado: "En una población pequeña y aislada, la deriva genética tiene un impacto mayor porque..."

explicacion: |
  Con pocos individuos, un evento aleatorio (quién sobrevive, quién se reproduce) pesa mucho más sobre las frecuencias génicas — el mismo mecanismo visto en `deriva-genetica-flujo-genico/`, ahora aplicado a un área protegida chica.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["conectividad", "flujo_genico"]

tipo: completar
respuestas_validas:
  - "flujo génico"
  - "flujo genico"
respuesta: "flujo génico"

enunciado: "Cuando dos áreas protegidas están separadas por una matriz hostil (como una ciudad), se impide el ___ entre las poblaciones, lo que aumenta el riesgo de endogamia."

explicacion: |
  El flujo génico es el movimiento de genes entre poblaciones. Si las áreas están aisladas, las poblaciones no pueden intercambiar individuos, lo que reduce la variabilidad genética.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "avanzado"
  tags: ["fragmentacion", "extincion"]

tipo: mc
opciones_explicitas: ["Aumenta la resiliencia ante cambios ambientales", "Disminuye la probabilidad de extinción", "Aumenta el riesgo de extinción por eventos estocásticos", "Favorece la selección natural"]
respuesta: "Aumenta el riesgo de extinción por eventos estocásticos"

enunciado: "Una población pequeña contenida en un área protegida muy pequeña es más vulnerable a la extinción debido a eventos aleatorios (como un incendio o una enfermedad) porque..."

explicacion: |
  Cuantos menos individuos hay, más fácil es que un solo evento catastrófico elimine a una parte suficientemente grande de la población como para comprometer su viabilidad futura.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["endogamia", "fitness"]

tipo: completar
respuestas_validas:
  - "depresión por endogamia"
  - "depresion por endogamia"
respuesta: "depresión por endogamia"

enunciado: "El apareamiento entre individuos estrechamente emparentados en poblaciones pequeñas y aisladas suele provocar la ___ debido a la expresión de alelos recesivos deletéreos."

explicacion: |
  La endogamia aumenta la homocigosis, lo que suele reducir la aptitud biológica (fitness) de la población.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "avanzado"
  tags: ["corredores", "diseño_ecologico"]

tipo: mc
opciones_explicitas: ["Aumentar el tamaño de la población efectiva", "Reducir la tasa de reproducción", "Aislar más las especies", "Eliminar la competencia intraespecífica"]
respuesta: "Aumentar el tamaño de la población efectiva"

enunciado: "Para mitigar los efectos de la fragmentación, los biólogos proponen la creación de corredores biológicos con el fin de..."

explicacion: |
  Al conectar poblaciones antes aisladas, un corredor efectivamente aumenta el número de individuos que pueden cruzarse entre sí, reduciendo la deriva genética y la endogamia.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["biodiversidad", "deforestacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["se talaron bosques nativos para plantar soja", "la expansión de la frontera agrícola avanzó sobre un bosque nativo"]]

enunciado: "En un ecosistema donde {escenarios[0][escenario_idx]}, la causa principal de la pérdida de biodiversidad es la ___."

opciones_explicitas: ["deforestación", "especies exóticas", "cambio climático", "contaminación"]
respuesta: "deforestación"
tipo: mc

explicacion: |
  La eliminación de la cubierta vegetal para actividades productivas como la agricultura reduce el espacio disponible para las especies nativas.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["especies_exoticas", "ecosistema"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["se introdujo un pez depredador en un lago sin depredadores naturales", "un felino no nativo fue liberado en una isla"]]

enunciado: "Cuando {escenarios[0][escenario_idx]}, el factor que altera el equilibrio ecológico es la presencia de una ___."

respuestas_validas:
  - "especie invasora"
respuesta: "especie invasora"
tipo: completar

explicacion: |
  Las especies introducidas en nuevos ambientes pueden actuar como invasoras si no tienen controles naturales, desplazando a las especies autóctonas.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["recursos_naturales", "pesca"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["se capturaron ejemplares de una especie por debajo de su edad reproductiva", "se extrajeron individuos de una población de peces de forma masiva"]]

enunciado: "En el escenario donde {escenarios[0][escenario_idx]}, el proceso que pone en riesgo la supervivencia de la especie es la ___."

respuestas_validas:
  - "sobrepesca"
respuesta: "sobrepesca"
tipo: completar

explicacion: |
  La extracción de individuos a un ritmo superior al de su reproducción natural agota las poblaciones de peces.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["fragmentacion", "corredores_biologicos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["una carretera divide un bosque en dos sectores aislados", "una red eléctrica atraviesa una reserva natural dividiéndola en dos"]]

enunciado: "Si {escenarios[0][escenario_idx]}, el efecto directo sobre la biodiversidad es la ___."

opciones_explicitas: ["fragmentación de hábitat", "contaminación del suelo", "erosión", "especie invasora"]
respuesta: "fragmentación de hábitat"
tipo: mc

explicacion: |
  La fragmentación impide el flujo génico entre poblaciones al crear barreras físicas que los animales no pueden cruzar.
```

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["contaminacion", "agroquimicos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["se utilizan pesticidas en campos vecinos a una reserva", "se filtran fertilizantes hacia un arroyo cercano a una reserva"]]

enunciado: "Ante el escenario donde {escenarios[0][escenario_idx]}, la causa del declive de la fauna local es la ___."

respuestas_validas:
  - "contaminación por agroquímicos"
  - "contaminacion por agroquimicos"
respuesta: "contaminación por agroquímicos"
tipo: completar

explicacion: |
  El uso de sustancias químicas en la agricultura puede llegar a ecosistemas protegidos mediante el escurrimiento de agua o el viento.
```

## Sección: biotecnologia-pcr-crispr (24 preguntas)

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["pcr", "adn"]

respuesta: verdadero
tipo: vf

enunciado: "La PCR permite hacer millones de copias de un fragmento específico de ADN."

explicacion: |
  Correcto. Es la técnica de amplificación de ADN más usada.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["pcr", "sensibilidad"]

respuesta: verdadero
tipo: vf

enunciado: "La PCR puede amplificar ADN partiendo de una cantidad mínima, incluso de una sola molécula."

explicacion: |
  Correcto, es extremadamente sensible.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["pcr", "ciclos"]

respuesta: verdadero
tipo: vf

enunciado: "La PCR funciona con ciclos repetidos de calentamiento y enfriamiento."

explicacion: |
  Correcto, esos ciclos separan y vuelven a copiar la doble hélice.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["pcr", "exponencial"]

respuesta: falso
tipo: vf

enunciado: "El crecimiento de las copias de ADN durante los ciclos de una PCR es lineal."

explicacion: |
  Falso, es exponencial: se duplica en cada ciclo.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["pcr", "terminologia"]

respuesta: "polimerasa"
tipo: completar
respuestas_validas:
  - "polimerasa"

enunciado: "La sigla PCR significa Reacción en Cadena de la ___."

explicacion: |
  Polymerase Chain Reaction.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["pcr", "aplicaciones"]

variables:
  escenarios: [["diagnostico", "detectar si hay suficiente ADN de un virus o patogeno"], ["pruebas de paternidad", "comparar ADN entre personas"], ["medicina forense", "amplificar el poco ADN de una escena de crimen"]]
  idx: uno_de([0, 1, 2])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["detectar si hay suficiente ADN de un virus o patogeno", "comparar ADN entre personas", "amplificar el poco ADN de una escena de crimen"]

enunciado: "¿En qué consiste el uso de la PCR para {escenarios[idx][0]}?"

explicacion: |
  Para {escenarios[idx][0]}: {escenarios[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["pcr", "calculo"]

variables:
  ciclos: uno_de([1, 2, 3, 4])

respuesta: 2 ^ ciclos
tipo: completar
tolerancia_abs: 0.01

enunciado: "Partiendo de 1 copia de ADN, si la PCR duplica en cada ciclo, ¿cuántas copias hay después de {ciclos} ciclos?"

pasos:
  - "N = 2^n, con n = {ciclos}"

explicacion: |
  2^{ciclos}.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["pcr", "forense"]

respuesta: verdadero
tipo: vf

enunciado: "La PCR es útil en medicina forense porque amplifica el poco ADN encontrado en una escena de crimen."

explicacion: |
  Correcto, permite obtener suficiente material para analizar.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["adn_recombinante"]

respuesta: verdadero
tipo: vf

enunciado: "El ADN recombinante se construye cortando y pegando ADN de distintas fuentes."

explicacion: |
  Correcto, usando enzimas de corte y ligasas.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["bacterias", "clonacion"]

respuesta: verdadero
tipo: vf

enunciado: "Para insertar un gen de interés en otro organismo, se suele usar una bacteria porque se reproduce rápido y es fácil de cultivar."

explicacion: |
  Correcto, las bacterias son el vector clásico.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["expresion_genica"]

respuesta: verdadero
tipo: vf

enunciado: "El organismo receptor de un gen insertado queda 'programado' para fabricar la proteína de ese gen."

explicacion: |
  Correcto, si tiene las secuencias reguladoras necesarias.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["insulina"]

respuesta: falso
tipo: vf

enunciado: "La insulina humana usada para tratar diabetes se extrae siempre de páncreas de cerdos y vacas."

explicacion: |
  Falso. Hoy se fabrica con bacterias modificadas con el gen humano de insulina.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["crispr"]

respuesta: verdadero
tipo: vf

enunciado: "CRISPR permite editar el ADN directamente, no sólo insertar un gen extra."

explicacion: |
  Correcto, permite cortes precisos para editar, eliminar o insertar material genético.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["crispr", "arn_guia"]

respuesta: verdadero
tipo: vf

enunciado: "CRISPR usa una molécula guía que busca la secuencia exacta a editar."

explicacion: |
  Correcto, el ARN guía dirige la edición al lugar correcto.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["crispr", "cas9"]

respuesta: "Cas9"
tipo: completar
respuestas_validas:
  - "Cas9"

enunciado: "La proteína que corta el ADN en el punto indicado por la guía de CRISPR se llama ___."

explicacion: |
  Cas9, la "tijera molecular" del sistema.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["crispr", "precision"]

respuesta: falso
tipo: vf

enunciado: "CRISPR es una técnica menos precisa que el ADN recombinante clásico."

explicacion: |
  Falso, es más precisa: edita un punto exacto en vez de insertar al azar.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["historia"]

respuesta: "PCR, ADN recombinante, CRISPR"
tipo: mc
opciones_explicitas: ["PCR, ADN recombinante, CRISPR", "CRISPR, PCR, ADN recombinante", "ADN recombinante, CRISPR, PCR", "no tienen un orden particular"]

enunciado: "¿Cuál es el orden cronológico de aparición de estas 3 técnicas?"

explicacion: |
  PCR (80s), ADN recombinante consolidado después, CRISPR-Cas9 mucho más reciente.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["pcr"]

respuesta: verdadero
tipo: vf

enunciado: "La PCR es necesaria para obtener suficiente ADN con el que trabajar en otras técnicas."

explicacion: |
  Correcto, amplifica la cantidad de material disponible.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["adn_recombinante"]

respuesta: verdadero
tipo: vf

enunciado: "El ADN recombinante demostró que es posible modificar el material genético de un organismo insertando genes de otro."

explicacion: |
  Correcto.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["crispr"]

respuesta: verdadero
tipo: vf

enunciado: "CRISPR permitió pasar de 'insertar genes en cualquier parte' (ADN recombinante clásico) a 'editar el punto exacto' del genoma."

explicacion: |
  Correcto, gracias al ARN guía de alta especificidad.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["adn", "fundamentos"]

respuesta: verdadero
tipo: vf

enunciado: "Las 3 técnicas (PCR, ADN recombinante, CRISPR) requieren conocer la estructura del ADN antes de poder entenderlas."

explicacion: |
  Correcto, todas operan sobre el ADN.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["genetica"]

respuesta: falso
tipo: vf

enunciado: "La biotecnología moderna es completamente independiente de la genética y el ADN."

explicacion: |
  Falso. Se basa directamente en la manipulación de la información genética.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["tecnicas"]

variables:
  tabla: [["PCR", "copia/amplifica ADN"], ["ADN recombinante", "inserta un gen de un organismo en otro"], ["CRISPR", "edita el ADN en un punto exacto"]]
  idx: uno_de([0, 1, 2])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["copia/amplifica ADN", "inserta un gen de un organismo en otro", "edita el ADN en un punto exacto"]

enunciado: "¿Cuál es la función principal de {tabla[idx][0]}?"

explicacion: |
  {tabla[idx][0]}: {tabla[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "avanzado"
  tags: ["etica"]

respuesta: verdadero
tipo: vf

enunciado: "La capacidad de cortar y editar ADN con CRISPR podría usarse tanto para corregir enfermedades genéticas como para otros fines controvertidos, lo que genera debate ético."

explicacion: |
  Correcto — ver ../transgenicos-bioetica/.
```

## Sección: nicho-ecologico (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["conceptos_clave", "ecologia"]

tipo: completar

enunciado: "El conjunto de condiciones ambientales y recursos que utiliza una especie para sobrevivir y reproducirse se denomina ___."

respuestas_validas:
  - "nicho ecológico"
  - "nicho ecologico"
respuesta: "nicho ecológico"

explicacion: |
  El nicho ecológico no es un lugar, sino la "profesión" o el rol que desempeña una especie en su ecosistema (qué come, a qué hora sale, etc.).
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["diferencias"]

tipo: completar

enunciado: "Si el hábitat es la 'dirección' de un organismo, el nicho ecológico es su ___."

respuestas_validas:
  - "profesión"
  - "profesion"
respuesta: "profesión"

explicacion: |
  Es una analogía común: el hábitat es el lugar físico donde vive (la casa), mientras que el nicho es su función o modo de vida (su trabajo).
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["competencia", "recursos"]

tipo: completar

enunciado: "Cuando dos especies tienen exactamente el mismo nicho ecológico en un mismo hábitat, ocurre una ___ que suele llevar a la exclusión de una de ellas."

respuestas_validas:
  - "competencia"
respuesta: "competencia"

explicacion: |
  El principio de exclusión competitiva establece que dos especies no pueden ocupar el mismo nicho de forma indefinida; una terminará desplazando a la otra.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["factores_abioticos"]

tipo: completar

enunciado: "El nicho ecológico incluye tanto factores bióticos (como la alimentación) como factores ___ (como la temperatura o la humedad)."

respuestas_validas:
  - "abióticos"
  - "abioticos"
respuesta: "abióticos"

explicacion: |
  El nicho es multidimensional: incluye las interacciones con otros seres vivos (bióticos) y las condiciones físicas del entorno (abióticos).
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["ejemplos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un león en la sabana africana", "depredador de grandes herbívoros"], ["un búho en un bosque", "depredador nocturno de pequeños roedores"]]

opciones_explicitas: ["depredador de grandes herbívoros", "depredador nocturno de pequeños roedores"]
respuesta: escenarios[escenario_idx][1]
tipo: mc

enunciado: "En el caso de {escenarios[escenario_idx][0]}, ¿cuál de estas opciones describe mejor su nicho ecológico?"

explicacion: |
  El nicho ecológico combina qué come una especie, cuándo está activa y qué rol cumple en la cadena trófica — no sólo "dónde vive".
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "ecologia"]

tipo: mc
opciones_explicitas: ["El lugar físico donde vive una especie", "La función o rol que desempeña una especie en su ecosistema", "El número total de individuos de una población", "La cantidad de comida disponible en un ambiente"]
respuesta: "La función o rol que desempeña una especie en su ecosistema"

enunciado: "En ecología, el término 'nicho ecológico' se refiere a: ___"

explicacion: |
  El nicho ecológico no es solo el lugar (eso es el hábitat), sino el conjunto de condiciones y recursos que permiten que una especie sobreviva y se reproduzca (su "profesión" en el ecosistema).
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["competencia", "recursos"]

tipo: vf
respuesta: verdadero

enunciado: "Si dos especies tienen nichos ecológicos idénticos en un mismo ambiente, la competencia por los recursos será intensa y eventualmente una de ellas será desplazada."

explicacion: |
  Según el principio de exclusión competitiva, dos especies no pueden ocupar exactamente el mismo nicho en un mismo hábitat por tiempo indefinido; una terminará desplazando a la otra o ambas deberán evolucionar para diferenciar sus nichos.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "avanzado"
  tags: ["capacidad_de_carga", "recursos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["leones", "carnívoros", "grandes"], ["insectos", "herbívoros", "pequeños"]]

tipo: mc
opciones_explicitas: ["Porque todas las especies consumen exactamente la misma cantidad de biomasa", "Porque cada especie utiliza los recursos de manera distinta, afectando la capacidad de soporte", "Porque el ambiente siempre tiene recursos infinitos para todos", "Porque la capacidad de carga solo depende del clima y no de la especie"]
respuesta: "Porque cada especie utiliza los recursos de manera distinta, afectando la capacidad de soporte"

enunciado: "Considerando que los {datos[escenario_idx][0]} tienen un nicho de tipo {datos[escenario_idx][2]}, ¿por qué la capacidad de carga varía entre especies en un mismo ambiente?"

explicacion: |
  La capacidad de carga es el número máximo de individuos que un ambiente puede sostener. Como cada especie tiene un nicho diferente (usa distintos recursos, a diferentes ritmos y de distintas formas), el impacto sobre el ambiente y el límite de población varía para cada una.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["diferenciacion", "conceptos"]

tipo: mc
opciones_explicitas: ["El hábitat es la función y el nicho es el lugar", "El hábitat es el lugar físico y el nicho es la función/rol", "Son términos sinónimos en ecología", "El nicho se refiere al clima y el hábitat a la dieta"]
respuesta: "El hábitat es el lugar físico y el nicho es la función/rol"

enunciado: "Diferencia correctamente entre hábitat y nicho: ___"

explicacion: |
  Un ejemplo clásico: el hábitat es el bosque (donde vive el oso), mientras que el nicho es su dieta, sus hábitos de actividad (diurno/nocturno) y su papel en la cadena trófica.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["especializacion", "supervivencia"]

tipo: vf
respuesta: verdadero

enunciado: "La especialización de un nicho (por ejemplo, un ave que sólo come un tipo de semilla) reduce la competencia directa con otras especies pero hace a la especie más vulnerable si ese recurso específico desaparece."

explicacion: |
  Es verdadero. Al especializar el nicho, la especie evita la competencia (lo cual es una ventaja), pero pierde la flexibilidad de usar otros recursos si su nicho particular se ve alterado.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["ecologia", "competencia"]

enunciado: "Según el principio de exclusión competitiva, si dos especies compiten por exactamente el mismo recurso limitado, una de ellas será desplazada o se extinguirá. Este proceso se conoce como la ___ de Gause."

respuestas_validas:
  - "regla"
respuesta: "regla"
tipo: completar

explicacion: |
  El principio de exclusión competitiva, también conocido como la Regla de Gause, establece que dos especies con nichos ecológicos idénticos no pueden coexistir en un entorno estable.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["competencia", "nicho"]

variables:
  escenario: uno_de([["especie A", "especie B"], ["leones", "hienas"], ["plantas A", "plantas B"]])

enunciado: "En un ecosistema, la {escenario[0]} y la {escenario[1]} compiten por la misma fuente de alimento y el mismo espacio de caza. Si la {escenario[0]} es más eficiente capturando presas, a largo plazo la {escenario[1]} sufrirá una ___ de su nicho o desaparecerá del área."

respuestas_validas:
  - "exclusión"
  - "exclusion"
respuesta: "exclusión"
tipo: completar

explicacion: |
  Cuando la competencia es intensa y los recursos son limitados, la especie con la ventaja competitiva termina excluyendo a la otra de su nicho ecológico.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["coexistencia", "particion"]

enunciado: "Para evitar la exclusión competitiva y permitir la coexistencia de especies similares, las poblaciones suelen recurrir a la ___ de nicho, donde utilizan diferentes partes del recurso o diferentes horarios de actividad."

respuestas_validas:
  - "partición"
  - "particion"
respuesta: "partición"
tipo: completar

explicacion: |
  La partición de nicho permite que especies con necesidades similares coexistan al especializarse en diferentes aspectos de su entorno (por ejemplo, diferentes alturas en un árbol o diferentes horas de alimentación).
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["definicion", "nicho"]

enunciado: "El nicho ecológico no es sólo el lugar donde vive una especie (hábitat), sino también la ___ de funciones y recursos que desempeña en ese ecosistema."

respuestas_validas:
  - "función"
  - "funcion"
respuesta: "función"
tipo: completar

explicacion: |
  Mientras que el hábitat es la "dirección" de una especie, el nicho ecológico es su "profesión" o el rol que cumple en la comunidad.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "avanzado"
  tags: ["competencia", "evolucion"]

enunciado: "Si dos especies compiten por el mismo nicho, la especie que logre obtener más energía con menos gasto metabólico tendrá una ventaja ___ que le permitirá dominar el recurso."

respuestas_validas:
  - "adaptativa"
respuesta: "adaptativa"
tipo: completar

explicacion: |
  La ventaja adaptativa permite que la especie dominante se reproduzca más y mantenga su población, mientras que la otra especie disminuye su fitness hasta ser excluida.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["ecologia", "nicho_fundamental"]

tipo: mc
opciones_explicitas: ["El rango de condiciones ambientales y recursos que una especie puede utilizar sin la presencia de competidores", "El conjunto de condiciones que una especie ocupa debido a la presencia de depredadores", "La suma de todos los recursos que una especie consume en un ecosistema", "El lugar físico donde vive una especie"]

respuesta: "El rango de condiciones ambientales y recursos que una especie puede utilizar sin la presencia de competidores"

enunciado: "El concepto de nicho fundamental se refiere a..."

explicacion: |
  El nicho fundamental representa el potencial máximo de una especie, es decir, todas las condiciones ambientales y recursos que podría aprovechar si no tuviera competencia ni depredación.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["nicho_fundamental", "nicho_realizado"]

tipo: completar
respuestas_validas:
  - "nicho realizado"
respuesta: "nicho realizado"

enunciado: "Cuando una especie se enfrenta a la competencia con otras especies por el mismo recurso, el espacio de recursos que efectivamente logra utilizar se denomina ___."

explicacion: |
  La presencia de competencia interespecífica restringe el uso de recursos, reduciendo el nicho fundamental al nicho realizado.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["competencia", "nicho_realizado"]

tipo: mc
opciones_explicitas: ["El nicho realizado es siempre igual al nicho fundamental", "El nicho realizado suele ser más pequeño que el nicho fundamental", "El nicho fundamental es más pequeño que el nicho realizado", "No existe relación entre ambos conceptos"]

respuesta: "El nicho realizado suele ser más pequeño que el nicho fundamental"

enunciado: "En un ecosistema con alta competencia por alimento, se espera que..."

explicacion: |
  La competencia actúa como una limitación que impide que la especie ocupe todo su nicho potencial (fundamental), obligándola a adaptarse a un nicho más restringido (realizado).
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "avanzado"
  tags: ["relacion_nichos"]

tipo: completar
respuestas_validas:
  - "un subconjunto"
respuesta: "un subconjunto"

enunciado: "Desde un punto de vista teórico, el nicho realizado es ___ del nicho fundamental."

explicacion: |
  El nicho realizado está contenido dentro de los límites del nicho fundamental, pero con menos dimensiones de recursos efectivamente aprovechados.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["competencia", "nicho_realizado"]

tipo: mc
opciones_explicitas: ["La especie se extingue", "El nicho realizado se expande", "El nicho realizado se contrae", "El nicho fundamental desaparece"]

respuesta: "El nicho realizado se contrae"

enunciado: "Si una especie de aves tiene un nicho fundamental que incluye semillas grandes y pequeñas, pero una especie competidora consume todas las semillas pequeñas, el nicho realizado de la primera especie será..."

explicacion: |
  La competencia por las semillas pequeñas restringe la dieta de la primera especie, haciendo que su nicho realizado se limite principalmente a las semillas grandes.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["ecologia", "competencia", "nicho"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El búho", "nocturno", "diurno", "el halcón"], ["El halcón", "diurno", "nocturno", "el búho"]]

opciones_explicitas: ["nocturno", "diurno"]

respuesta: escenarios[escenario_idx][1]
tipo: mc

enunciado: "En un mismo bosque, {escenarios[escenario_idx][0]} es predominantemente ___, mientras que su competidor potencial, {escenarios[escenario_idx][3]}, es {escenarios[escenario_idx][2]}. Esta diferencia de horario permite la coexistencia mediante la partición temporal del nicho."

explicacion: |
  La partición temporal es una estrategia donde especies con recursos similares se dividen el tiempo de uso del hábitat para evitar la competencia directa.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["estratificación", "nicho", "aves"]

opciones_explicitas: ["troncos de los árboles", "el suelo del bosque", "las copas de los árboles", "el aire"]

respuesta: "el suelo del bosque"
tipo: mc

enunciado: "Dos especies de aves pueden compartir el mismo bosque sin competir por alimento si el carpintero busca larvas en los troncos, mientras que el picamontes de suelo busca su alimento en ___."

explicacion: |
  La estratificación vertical en el hábitat permite que diferentes especies ocupen distintos niveles de altura, reduciendo la competencia por el mismo recurso en el mismo espacio.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["dieta", "nicho", "especialista"]

variables:
  par_de_aves: [["un colibrí y un carpintero", "néctar", "insectos"], ["un zorro y un conejo", "carne", "vegetales"], ["un oso y un pez", "frutas", "proteína animal"]]
  idx: uno_de([0, 1, 2])

opciones_explicitas: ["néctar", "insectos", "carne", "vegetales", "frutas", "proteína animal"]

respuesta: par_de_aves[idx][1]
tipo: mc

enunciado: "Dos especies pueden coexistir si tienen dietas distintas. Si analizamos a {par_de_aves[idx][0]}, la primera especie se especializa en consumir ___."

explicacion: |
  La especialización en el tipo de presa (recurso alimentario) es una forma de partición del nicho que evita que dos especies compitan por la misma fuente de energía.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

opciones_explicitas: ["el lugar físico donde vive", "la función y rol de la especie", "el grupo de animales similares", "el clima de una región"]

respuesta: "la función y rol de la especie"
tipo: mc

enunciado: "Mientras que el hábitat es el lugar donde vive una especie, el nicho ecológico se define como ___."

explicacion: |
  El nicho ecológico incluye no sólo el lugar, sino también el comportamiento, la dieta, el periodo de actividad y cómo la especie interactúa con su entorno.
```

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["competencia", "coexistencia"]

opciones_explicitas: ["competencia", "exclusión", "coexistencia", "adaptación"]

respuesta: "coexistencia"
tipo: mc

enunciado: "Cuando dos especies en un mismo ecosistema desarrollan características que les permiten utilizar recursos de manera diferente (por ejemplo, comiendo a distintas horas o en distintas alturas), logran la ___."

explicacion: |
  La partición de recursos es el mecanismo que permite la coexistencia, evitando que la competencia sea tan intensa que una especie termine desplazando a la otra (Principio de Exclusión Competitiva).
```

