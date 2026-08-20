# Examen jefe — Maestro del ADN y la Vida

> Logro #149. Completaste el examen jefe sobre ADN, biodiversidad, biotecnología y cadena trófica. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **113 preguntas totales** en 5/5 secciones.

---

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
respuestas_validas: ["genoma"]

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
respuestas_validas: ["transcripcion"]

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
respuestas_validas: ["traduccion"]

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

## Sección: biodiversidad-indices (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "biodiversidad_indices"
  nivel: "basico"
  tags: ["conceptos_basicos", "niveles"]

enunciado: "La biodiversidad se manifiesta en tres niveles principales: la diversidad de ecosistemas, la diversidad de especies y la diversidad ___."

respuestas_validas: ["genetica", "genética"]
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

respuestas_validas: ["especies"]
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

respuestas_validas: ["riqueza de especies", "riqueza"]
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

respuestas_validas: ["abundancia"]
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

respuestas_validas: ["genetica", "genética"]
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
  datos: [
    ["10 especies, todas con 10 individuos cada una", "Alta equitatividad"],
    ["10 especies, una con 91 individuos y las otras 9 con 1 individuo cada una", "Baja equitatividad"]
  ]

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
respuestas_validas: ["riqueza"]
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

respuestas_validas: ["A"]
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

respuestas_validas: ["alta"]
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

respuestas_validas: ["Bosque 2"]
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

respuestas_validas: ["alta", "baja"]
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

respuestas_validas: ["equitatividad"]
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
respuestas_validas: ["disminuye", "baja"]
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
respuestas_validas: ["mayor"]
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
respuestas_validas: ["20", "10"]

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

respuestas_validas: ["equidad"]
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
respuestas_validas: ["5", "4"]

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
respuestas_validas: ["polimerasa"]

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
tipo: input
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
respuestas_validas: ["Cas9"]

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

## Sección: cadenas-redes-troficas (24 preguntas)

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "intermedio"
  tags: ["niveles_troficos"]

variables:
  tabla: [["1", "productores/autotrofos"], ["2", "consumidores primarios/herbivoros"], ["3", "consumidores secundarios/carnivoros que comen herbivoros"], ["4", "consumidores terciarios/carnivoros que comen carnivoros"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["productores/autotrofos", "consumidores primarios/herbivoros", "consumidores secundarios/carnivoros que comen herbivoros", "consumidores terciarios/carnivoros que comen carnivoros"]

enunciado: "Un organismo que ocupa el nivel trófico {tabla[idx][0]}, ¿cómo se le denomina?"

explicacion: |
  El nivel trófico {tabla[idx][0]} corresponde a: {tabla[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["productores"]

respuesta: verdadero
tipo: vf

enunciado: "Los productores ocupan el nivel trófico 1."

explicacion: |
  Correcto, inician la cadena.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["consumidores"]

respuesta: verdadero
tipo: vf

enunciado: "Un conejo que se alimenta de pasto es un consumidor primario."

explicacion: |
  Correcto, se alimenta directo de un productor.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["consumidores"]

respuesta: falso
tipo: vf

enunciado: "Un zorro que come conejos es un consumidor primario, igual que el conejo."

explicacion: |
  Falso, es consumidor secundario (come al herbívoro).
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: verdadero
tipo: vf

enunciado: "Una cadena trófica es una secuencia lineal de quién come a quién."

explicacion: |
  Correcto, representa un flujo lineal de energía.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["flujo_energia"]

respuesta: verdadero
tipo: vf

enunciado: "En pasto → conejo → zorro, cada flecha indica la dirección del flujo de energía."

explicacion: |
  Correcto, del organismo comido hacia el que come.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "intermedio"
  tags: ["red_trofica"]

respuesta: falso
tipo: vf

enunciado: "Una cadena trófica se caracteriza por presentar ramificaciones y cruces complejos entre múltiples especies."

explicacion: |
  Falso, eso describe una red trófica. La cadena es lineal.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["ejemplos"]

respuesta: "cadena"
tipo: completar
respuestas_validas: ["cadena"]

enunciado: "La secuencia pasto → conejo → zorro → águila es un ejemplo de ___ trófica."

explicacion: |
  Es lineal y unidireccional: una cadena trófica.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["alimentacion"]

respuesta: verdadero
tipo: vf

enunciado: "En la realidad, casi ningún organismo come una sola cosa o es comido por un solo depredador."

explicacion: |
  Correcto, la mayoría tiene dietas más variadas.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["red_trofica"]

respuesta: verdadero
tipo: vf

enunciado: "Una red trófica es el conjunto de varias cadenas tróficas entrecruzadas."

explicacion: |
  Correcto, representa mejor la complejidad de un ecosistema real.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "intermedio"
  tags: ["estabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Una red trófica es más estable que una cadena aislada, porque hay rutas alternativas si desaparece una especie."

explicacion: |
  Correcto, la redundancia da resiliencia.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "intermedio"
  tags: ["flujo_energia"]

respuesta: falso
tipo: vf

enunciado: "En una cadena trófica simple, si se elimina un eslabón del medio, esto no afecta el flujo de energía hacia los niveles superiores."

explicacion: |
  Falso, corta el flujo hacia los niveles siguientes.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["descomponedores"]

respuesta: verdadero
tipo: vf

enunciado: "Los descomponedores (hongos, bacterias) se alimentan de materia orgánica muerta."

explicacion: |
  Correcto.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["nutrientes"]

respuesta: verdadero
tipo: vf

enunciado: "Los descomponedores devuelven nutrientes simples al ambiente, disponibles de nuevo para los productores."

explicacion: |
  Correcto, cierran el ciclo de la materia.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["ciclo_nutrientes"]

respuesta: verdadero
tipo: vf

enunciado: "Sin descomponedores, los nutrientes quedarían atrapados para siempre en los cuerpos de los organismos muertos."

explicacion: |
  Correcto, el ciclo de la materia se detendría.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "intermedio"
  tags: ["clasificacion"]

respuesta: falso
tipo: vf

enunciado: "Los descomponedores encajan exactamente en el nivel trófico 2, igual que los herbívoros."

explicacion: |
  Falso, no encajan en los niveles 1-4 tradicionales; procesan materia de cualquier nivel.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["flujo_energia"]

respuesta: verdadero
tipo: vf

enunciado: "La flecha en un diagrama trófico indica la dirección en la que se mueve la energía."

explicacion: |
  Correcto.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["flujo_energia"]

respuesta: verdadero
tipo: vf

enunciado: "La flecha va desde la presa (que tenía la energía) hacia el depredador (que la absorbe al comerla)."

explicacion: |
  Correcto.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "La flecha en un diagrama trófico indica jerarquía de poder o 'quién manda', no flujo de energía."

explicacion: |
  Falso, indica flujo de energía, no dominancia.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["ejemplos"]

respuesta: "hacia el conejo, porque la energia va del pasto al conejo"
tipo: mc
opciones_explicitas: ["hacia el conejo, porque la energia va del pasto al conejo", "hacia el pasto", "no tiene direccion", "indica quien es mas fuerte"]

enunciado: "En pasto → conejo, ¿hacia dónde apunta la flecha?"

explicacion: |
  La energía fluye del productor al consumidor: la flecha apunta hacia el conejo.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "intermedio"
  tags: ["ejemplos"]

variables:
  escenario: [["pasto", "productor"], ["conejo", "consumidor primario"], ["zorro", "consumidor secundario"], ["hongo descomponiendo un tronco", "descomponedor"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["productor", "consumidor primario", "consumidor secundario", "descomponedor"]

enunciado: "¿Cuál es el nivel trófico de {escenario[idx][0]}?"

explicacion: |
  {escenario[idx][0]} es: {escenario[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "intermedio"
  tags: ["ser_humano"]

respuesta: verdadero
tipo: vf

enunciado: "El ser humano puede ocupar distintos niveles tróficos según su dieta."

explicacion: |
  Correcto, es omnívoro: primario si come plantas, secundario o más si come carne.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["redes_troficas"]

respuesta: verdadero
tipo: vf

enunciado: "Una red trófica representa mejor un ecosistema real que una sola cadena trófica aislada."

explicacion: |
  Correcto, es un modelo más realista.
```

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "intermedio"
  tags: ["energia"]

respuesta: verdadero
tipo: vf

enunciado: "Los niveles tróficos y el flujo de energía están directamente conectados: cada nivel recibe menos energía que el anterior."

explicacion: |
  Correcto — ver ../flujo-materia-energia/ (regla del 10%).
```

## Sección: celula-organelas (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["celula", "teoria_celular"]

respuesta: verdadero
tipo: vf

enunciado: "La célula es la unidad básica de la vida."

explicacion: |
  La teoría celular establece que la célula es la unidad estructural, funcional y de origen de todos los seres vivos.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["unicelular", "clasificacion"]

respuesta: "unicelular"
tipo: mc
opciones_explicitas: ["unicelular", "pluricelular", "multicelular", "acelular"]

enunciado: "Un organismo formado por una sola célula se llama..."

explicacion: |
  Se llama unicelular (bacterias, protozoos).
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["pluricelular"]

respuesta: verdadero
tipo: vf

enunciado: "Las plantas y los animales son organismos pluricelulares."

explicacion: |
  Correcto, están compuestos por múltiples células especializadas.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["bacterias"]

respuesta: falso
tipo: vf

enunciado: "Las bacterias son organismos pluricelulares complejos."

explicacion: |
  Falso. Son unicelulares procariotas.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["procariota", "nucleo"]

respuesta: "no tener nucleo definido"
tipo: mc
opciones_explicitas: ["no tener nucleo definido", "tener nucleo definido", "no tener membrana", "no tener citoplasma"]

enunciado: "La célula procariota se caracteriza por..."

explicacion: |
  Su material genético está disperso en el citoplasma, sin membrana propia.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["eucariota", "nucleo"]

respuesta: verdadero
tipo: vf

enunciado: "La célula eucariota tiene el material genético encerrado en una membrana propia (el núcleo)."

explicacion: |
  Correcto, es la característica principal que la diferencia de la procariota.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["bacterias", "procariota"]

respuesta: "procariotas"
tipo: mc
opciones_explicitas: ["procariotas", "eucariotas", "ninguna de las dos", "ambas a la vez"]

enunciado: "Las bacterias son células..."

explicacion: |
  Son procariotas: estructura simple, sin núcleo definido.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["eucariota"]

respuesta: falso
tipo: vf

enunciado: "Las células de plantas y animales son procariotas."

explicacion: |
  Falso, son eucariotas.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "intermedio"
  tags: ["organelas"]

variables:
  datos: [["nucleo", "guarda el ADN y controla la actividad de la celula"], ["mitocondria", "produce energia"], ["ribosoma", "fabrica proteinas"], ["cloroplasto", "hace la fotosintesis"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["guarda el ADN y controla la actividad de la celula", "produce energia", "fabrica proteinas", "hace la fotosintesis"]

enunciado: "¿Cuál es la función de {datos[idx][0]}?"

explicacion: |
  La función de {datos[idx][0]} es: {datos[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["golgi"]

respuesta: verdadero
tipo: vf

enunciado: "El aparato de Golgi empaqueta y distribuye proteínas."

explicacion: |
  Correcto, procesa, empaqueta y distribuye proteínas y lípidos.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["reticulo"]

respuesta: verdadero
tipo: vf

enunciado: "El retículo endoplasmático transporta sustancias dentro de la célula."

explicacion: |
  Correcto, funciona como sistema de transporte y síntesis.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["vacuola"]

respuesta: falso
tipo: vf

enunciado: "La vacuola es más grande en las células animales que en las vegetales."

explicacion: |
  Falso. Es mucho más grande en las vegetales.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["pared_celular"]

respuesta: verdadero
tipo: vf

enunciado: "La célula vegetal posee pared celular, mientras que la célula animal no la tiene."

explicacion: |
  Correcto, es una diferencia clave entre ambas.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["cloroplastos"]

respuesta: falso
tipo: vf

enunciado: "Los cloroplastos están presentes tanto en células animales como vegetales."

explicacion: |
  Falso, son exclusivos de células vegetales y algas.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["pared_celular"]

respuesta: verdadero
tipo: vf

enunciado: "La pared celular da rigidez extra y protección, y está presente en plantas, hongos y bacterias, pero no en animales."

explicacion: |
  Correcto.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "intermedio"
  tags: ["sistema_celular"]

respuesta: falso
tipo: vf

enunciado: "Cada organela funciona de forma totalmente aislada, sin relación con las demás."

explicacion: |
  Falso. Trabajan como sistema integrado (ej: retículo→Golgi para las proteínas).
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["ribosomas"]

respuesta: verdadero
tipo: vf

enunciado: "El ribosoma fabrica proteínas utilizando la información del ADN."

explicacion: |
  Correcto — ver ../adn-gen-proteina/.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["membrana"]

respuesta: verdadero
tipo: vf

enunciado: "La membrana celular envuelve la célula y controla qué entra y sale de ella."

explicacion: |
  Correcto, es selectivamente permeable.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "intermedio"
  tags: ["mitocondria"]

respuesta: verdadero
tipo: vf

enunciado: "La mitocondria se conoce como la 'central de energía' de la célula porque produce la energía necesaria para sus procesos."

explicacion: |
  Correcto, mediante la respiración celular.
```

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "avanzado"
  tags: ["comparacion"]

respuesta: "pared celular, cloroplastos y vacuola grande central"
tipo: mc
opciones_explicitas: ["pared celular, cloroplastos y vacuola grande central", "núcleo y mitocondria", "membrana celular y ribosomas", "citoplasma y retículo endoplasmático"]

enunciado: "¿Cuáles son las 3 estructuras que tiene la célula vegetal y que la célula animal NO tiene?"

explicacion: |
  Núcleo, mitocondria, membrana, citoplasma, ribosomas y retículo están en ambas — lo exclusivo de la vegetal es pared celular, cloroplastos y la vacuola grande central.
```
