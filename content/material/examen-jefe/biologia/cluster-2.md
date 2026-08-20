# Examen jefe — Maestro de los Ciclos de Vida

> Logro #150. Completaste este examen jefe dominando los ciclos biogeoquímicos, la metamorfosis, la evolución y la conservación poblacional. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **115 preguntas totales** en 5/5 secciones.

---

## Sección: ciclos-biogeoquimicos (24 preguntas)

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Un ciclo biogeoquímico describe cómo un elemento se mueve entre los seres vivos y el ambiente físico no vivo."

explicacion: |
  Correcto, permite el reciclaje de elementos esenciales para la vida.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["ley_conservacion"]

respuesta: falso
tipo: vf

enunciado: "En un ciclo biogeoquímico, el elemento se pierde para siempre después de usarse una vez."

explicacion: |
  Falso, cambia de forma y lugar pero permanece circulando en el sistema.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["etimologia"]

respuesta: "vivos"
tipo: completar
respuestas_validas: ["vivos"]

enunciado: "El prefijo 'bio' en biogeoquímico se refiere a los seres ___."

explicacion: |
  Del griego "bios" (vida).
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["etimologia"]

respuesta: "fisico"
tipo: completar
respuestas_validas: ["fisico", "no vivo"]

enunciado: "El prefijo 'geo' en biogeoquímico se refiere al ambiente ___."

explicacion: |
  Del griego "geo" (tierra): suelo, aire, agua.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "intermedio"
  tags: ["ciclo_del_agua"]

variables:
  etapas: [["evaporacion", "agua liquida se convierte en vapor"], ["condensacion", "vapor de agua forma nubes"], ["precipitacion", "nubes liberan lluvia o nieve"], ["escorrentia", "el agua vuelve a rios y mares o se filtra al subsuelo"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: etapas[idx][1]
tipo: mc
opciones_explicitas: ["agua liquida se convierte en vapor", "vapor de agua forma nubes", "nubes liberan lluvia o nieve", "el agua vuelve a rios y mares o se filtra al subsuelo"]

enunciado: "¿Cuál es la descripción de la etapa de {etapas[idx][0]}?"

explicacion: |
  {etapas[idx][0]}: {etapas[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["transpiracion"]

respuesta: verdadero
tipo: vf

enunciado: "Las plantas también liberan vapor de agua a la atmósfera mediante la transpiración."

explicacion: |
  Correcto, a través de los estomas de las hojas.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["condensacion"]

respuesta: falso
tipo: vf

enunciado: "La condensación es el proceso mediante el cual el agua líquida se convierte en vapor."

explicacion: |
  Falso, eso es evaporación. Condensación es vapor pasando a líquido (nubes).
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["carbono"]

respuesta: verdadero
tipo: vf

enunciado: "Los productores fijan carbono del CO2 atmosférico en glucosa mediante la fotosíntesis."

explicacion: |
  Correcto — ver ../fotosintesis-respiracion-celular/.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["carbono"]

respuesta: verdadero
tipo: vf

enunciado: "La respiración celular devuelve CO2 a la atmósfera."

explicacion: |
  Correcto, cierra parte del ciclo.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "intermedio"
  tags: ["combustibles_fosiles"]

respuesta: verdadero
tipo: vf

enunciado: "Los combustibles fósiles son carbono atrapado de organismos muertos hace millones de años."

explicacion: |
  Correcto, carbono orgánico transformado bajo presión geológica.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "intermedio"
  tags: ["combustibles_fosiles"]

respuesta: falso
tipo: vf

enunciado: "Quemar combustibles fósiles libera ese carbono a la atmósfera mucho más lento de lo que se acumuló originalmente."

explicacion: |
  Falso, es mucho más rápido: millones de años de acumulación se liberan en décadas/siglos.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["nitrogeno"]

respuesta: verdadero
tipo: vf

enunciado: "El nitrógeno (N2) constituye aproximadamente el 78% del aire."

explicacion: |
  Correcto, es el gas más abundante de la atmósfera.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["nitrogeno"]

respuesta: falso
tipo: vf

enunciado: "La mayoría de los seres vivos puede usar el N2 atmosférico directamente, sin necesidad de fijarlo."

explicacion: |
  Falso, casi ninguno puede usarlo directo; hace falta fijarlo primero.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "intermedio"
  tags: ["nitrogeno", "bacterias"]

respuesta: "fijacion"
tipo: completar
respuestas_validas: ["fijacion", "fijación"]

enunciado: "El proceso por el cual bacterias especializadas convierten el N2 atmosférico en formas utilizables se llama ___."

explicacion: |
  Fijación de nitrógeno.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "intermedio"
  tags: ["nitrogeno", "leguminosas"]

respuesta: verdadero
tipo: vf

enunciado: "Algunas bacterias fijadoras de nitrógeno viven en simbiosis en las raíces de leguminosas, como el poroto."

explicacion: |
  Correcto, las Rhizobium forman nódulos en esas raíces.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "avanzado"
  tags: ["nitrogeno", "bacterias"]

respuesta: "desnitrificacion"
tipo: completar
respuestas_validas: ["desnitrificacion", "desnitrificación"]

enunciado: "El proceso por el cual bacterias convierten formas fijadas de nitrógeno de vuelta a N2 gaseoso se llama ___."

explicacion: |
  Desnitrificación, cierra el ciclo del nitrógeno.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["nitrogeno", "nutricion_vegetal"]

respuesta: verdadero
tipo: vf

enunciado: "Las plantas absorben las formas fijadas de nitrógeno y las incorporan en la síntesis de proteínas."

explicacion: |
  Correcto, absorben nitratos y amonio del suelo.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["nitrogeno", "cadena_alimentaria"]

respuesta: verdadero
tipo: vf

enunciado: "Los animales obtienen el nitrógeno que necesitan comiendo plantas u otros animales."

explicacion: |
  Correcto, no pueden fijar nitrógeno del aire.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["nitrogeno", "descomposicion"]

respuesta: verdadero
tipo: vf

enunciado: "Al morir un organismo, los descomponedores liberan el nitrógeno de sus tejidos de vuelta al suelo."

explicacion: |
  Correcto, transforman nitrógeno orgánico en formas inorgánicas.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["nitrogeno", "bacterias"]

respuesta: falso
tipo: vf

enunciado: "El ciclo del nitrógeno no tiene ninguna relación con las bacterias, opera únicamente a través de las plantas."

explicacion: |
  Falso, las bacterias son clave en la fijación y la desnitrificación.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["materia"]

respuesta: verdadero
tipo: vf

enunciado: "Los ciclos biogeoquímicos son la prueba concreta de que la materia siempre vuelve a estar disponible en algún punto del ciclo."

explicacion: |
  Correcto — ver ../flujo-materia-energia/.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["energia"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la materia, la energía se disipa y necesita reposición constante desde el sol."

explicacion: |
  Correcto, la energía no se recicla como la materia.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "intermedio"
  tags: ["identificacion"]

variables:
  escenarios: [["ciclo del agua", "H2O"], ["ciclo del carbono", "carbono/CO2"], ["ciclo del nitrogeno", "nitrogeno/N2"]]
  idx: uno_de([0, 1, 2])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["H2O", "carbono/CO2", "nitrogeno/N2"]

enunciado: "¿Cuál es el elemento principal del {escenarios[idx][0]}?"

explicacion: |
  El elemento principal del {escenarios[idx][0]} es {escenarios[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["materia"]

respuesta: verdadero
tipo: vf

enunciado: "Los tres ciclos (agua, carbono, nitrógeno) son ejemplos de cómo la materia circula sin perderse."

explicacion: |
  Correcto, los átomos se reorganizan pero permanecen en el sistema.
```

## Sección: ciclos-vida-metamorfosis (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["ciclo_de_vida", "conceptos_basicos"]

respuesta: verdadero
tipo: vf

enunciado: "El ciclo de vida es la secuencia de etapas que atraviesa un ser vivo desde que nace hasta que se reproduce."

explicacion: |
  Correcto. Abarca todas las fases desde el nacimiento hasta la madurez y reproducción.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["ciclo_de_vida"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los seres vivos, sin excepción, tienen algún tipo de ciclo de vida."

explicacion: |
  Correcto, aunque la duración y complejidad varían mucho entre especies.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["metamorfosis"]

respuesta: falso
tipo: vf

enunciado: "La metamorfosis es cuando el organismo simplemente crece más grande, sin cambiar de forma."

explicacion: |
  Falso. La metamorfosis implica un cambio de forma radical, no sólo crecer.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["metamorfosis"]

respuesta: verdadero
tipo: vf

enunciado: "La metamorfosis implica un cambio radical de estructura corporal entre las distintas etapas."

explicacion: |
  Correcto, hay transformaciones morfológicas profundas.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["metamorfosis", "etapas"]

respuesta: "adulto"
tipo: completar
respuestas_validas: ["adulto"]

enunciado: "Las 4 etapas de la metamorfosis completa son huevo, larva, pupa y ___."

explicacion: |
  La metamorfosis completa tiene 4 estadios: huevo, larva, pupa y adulto.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "intermedio"
  tags: ["metamorfosis", "etapas"]

variables:
  escenario: [["larva", "forma de gusano, come mucho, etapa de crecimiento"], ["pupa", "etapa quieta y protegida donde el cuerpo se reorganiza"], ["adulto", "forma final, encargada de reproducirse"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["forma de gusano, come mucho, etapa de crecimiento", "etapa quieta y protegida donde el cuerpo se reorganiza", "forma final, encargada de reproducirse"]

enunciado: "¿Cuál es la descripción de la etapa {escenario[idx][0]}?"

explicacion: |
  La etapa {escenario[idx][0]} es: {escenario[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["metamorfosis", "mariposa"]

respuesta: verdadero
tipo: vf

enunciado: "La mariposa es un ejemplo clásico de metamorfosis completa."

explicacion: |
  Correcto: huevo → oruga (larva) → crisálida (pupa) → mariposa (adulto).
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["metamorfosis", "oruga"]

respuesta: falso
tipo: vf

enunciado: "En la mariposa, la oruga es la etapa de pupa."

explicacion: |
  Falso. La oruga es la larva; la pupa es la crisálida.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["metamorfosis", "insectos"]

respuesta: "adulto"
tipo: completar
respuestas_validas: ["adulto"]

enunciado: "Las 3 etapas de la metamorfosis incompleta son huevo, ninfa y ___."

explicacion: |
  La metamorfosis incompleta tiene 3 estadios: huevo, ninfa y adulto.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["ninfa"]

respuesta: verdadero
tipo: vf

enunciado: "La ninfa se parece al adulto pero es más chica y sin alas desarrolladas."

explicacion: |
  Correcto, es una versión juvenil del adulto.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["pupa", "comparacion"]

respuesta: falso
tipo: vf

enunciado: "La metamorfosis incompleta tiene una etapa de pupa, igual que la completa."

explicacion: |
  Falso. La pupa es exclusiva de la metamorfosis completa.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["ejemplos"]

respuesta: verdadero
tipo: vf

enunciado: "La libélula y el grillo son ejemplos de metamorfosis incompleta."

explicacion: |
  Correcto, ambos pasan por la etapa de ninfa, sin pupa.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["muda"]

respuesta: verdadero
tipo: vf

enunciado: "La ninfa va mudando de piel varias veces hasta alcanzar el tamaño adulto."

explicacion: |
  Correcto, necesita desprenderse del exoesqueleto rígido para crecer.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "intermedio"
  tags: ["metamorfosis"]

respuesta: verdadero
tipo: vf

enunciado: "En la metamorfosis completa, la larva y el adulto no se parecen en nada entre sí."

explicacion: |
  Correcto, gracias a la reorganización que ocurre en la pupa.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "intermedio"
  tags: ["metamorfosis"]

respuesta: verdadero
tipo: vf

enunciado: "En la metamorfosis incompleta, la ninfa ya se parece al adulto desde el principio."

explicacion: |
  Correcto, sólo cambia de tamaño y desarrolla alas gradualmente.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "intermedio"
  tags: ["pupa", "comparacion"]

respuesta: "Completa (con etapa de pupa)"
tipo: mc
opciones_explicitas: ["Completa (con etapa de pupa)", "Incompleta", "Ninguna", "Ambas por igual"]

enunciado: "¿Cuál tipo de metamorfosis tiene una etapa donde el cuerpo se reconstruye casi desde cero?"

explicacion: |
  La metamorfosis completa, en la pupa, donde el cuerpo se reorganiza casi por completo.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "intermedio"
  tags: ["ejemplos"]

variables:
  datos: [["mariposa", "completa"], ["grillo", "incompleta"], ["mosquito", "completa"], ["libelula", "incompleta"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["completa", "incompleta"]

enunciado: "¿Qué tipo de metamorfosis tiene {datos[idx][0]}?"

explicacion: |
  {datos[idx][0]} tiene metamorfosis {datos[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "intermedio"
  tags: ["ciclo_de_vida"]

respuesta: verdadero
tipo: vf

enunciado: "El ciclo de vida se completa (y potencialmente se reinicia con una nueva generación) cuando el organismo llega a la etapa adulta y se reproduce."

explicacion: |
  Correcto, ese es el "cierre" natural del ciclo.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "avanzado"
  tags: ["anfibios", "ejemplos"]

respuesta: verdadero
tipo: vf

enunciado: "Las ranas también tienen metamorfosis: pasan de renacuajo (etapa acuática, con cola y branquias) a rana adulta (con patas y pulmones), un cambio tan radical como el de los insectos."

explicacion: |
  Correcto. La metamorfosis no es exclusiva de los insectos — los anfibios también la tienen.
```

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "avanzado"
  tags: ["conceptos", "ecologia"]

respuesta: "la larva y el adulto compiten menos por el mismo alimento, al vivir en ambientes o comer cosas distintas"
tipo: mc
opciones_explicitas: ["la larva y el adulto compiten menos por el mismo alimento, al vivir en ambientes o comer cosas distintas", "la larva vive más años que el adulto", "el adulto nunca necesita comer", "no tiene ninguna ventaja evolutiva"]

enunciado: "¿Cuál es una ventaja de que la larva y el adulto tengan formas tan distintas en la metamorfosis completa?"

explicacion: |
  Al ser tan distintos, la larva y el adulto suelen ocupar nichos distintos (comida, hábitat), reduciendo la competencia entre generaciones de la misma especie.
```

## Sección: clasificacion-evolucion (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["taxonomia", "especie"]

respuesta: verdadero
tipo: vf

enunciado: "La especie es la categoría taxonómica más específica de la jerarquía biológica."

explicacion: |
  Correcto, los individuos de una misma especie pueden reproducirse entre sí y dejar descendencia fértil.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["taxonomia", "reino"]

respuesta: falso
tipo: vf

enunciado: "El reino es una categoría taxonómica más específica que la especie."

explicacion: |
  Falso. El reino es mucho más amplio: contiene múltiples filos, clases, órdenes y especies.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "intermedio"
  tags: ["taxonomia", "jerarquia"]

variables:
  datos: [["especie", "genero"], ["familia", "orden"], ["clase", "filo"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["especie", "genero", "familia", "orden", "clase", "filo"]

enunciado: "Entre {datos[idx][0]} y {datos[idx][1]}, ¿cuál es la categoría más general?"

explicacion: |
  {datos[idx][1]} engloba a {datos[idx][0]}, así que es la más general.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "intermedio"
  tags: ["taxonomia", "jerarquia"]

respuesta: "dominio"
tipo: completar
respuestas_validas: ["dominio"]

enunciado: "El orden de la jerarquía taxonómica de más específica a más general es: especie, género, familia, orden, clase, filo, reino y ___."

explicacion: |
  El dominio es la categoría más amplia, por encima del reino.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["nomenclatura"]

respuesta: verdadero
tipo: vf

enunciado: "Cada especie tiene un nombre científico compuesto por dos partes: el género y el epíteto específico."

explicacion: |
  Correcto, es la nomenclatura binomial de Linneo.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["homo_sapiens"]

respuesta: verdadero
tipo: vf

enunciado: "El nombre científico Homo sapiens corresponde al ser humano."

explicacion: |
  Correcto, es el nombre científico universal de nuestra especie.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "intermedio"
  tags: ["nomenclatura", "universalidad"]

respuesta: falso
tipo: vf

enunciado: "Los nombres científicos cambian según el idioma o la región, igual que los nombres comunes."

explicacion: |
  Falso, son iguales en cualquier idioma para evitar confusiones.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["panthera_leo"]

respuesta: "Panthera"
tipo: mc
opciones_explicitas: ["Panthera", "leo", "ambas", "ninguna"]

enunciado: "En Panthera leo, ¿cuál palabra representa el género?"

explicacion: |
  La primera palabra del nombre binomial siempre es el género.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["evolucion"]

respuesta: verdadero
tipo: vf

enunciado: "La evolución se define como el cambio en las características heredables de una población a lo largo de las generaciones."

explicacion: |
  Correcto, es la definición central de evolución.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["poblacion"]

respuesta: falso
tipo: vf

enunciado: "La evolución es un proceso que ocurre a nivel de un individuo aislado, no de una población."

explicacion: |
  Falso, ocurre a nivel de población.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["genetica"]

respuesta: falso
tipo: vf

enunciado: "Un individuo puede evolucionar durante su propia vida, cambiando sus genes para adaptarse al entorno."

explicacion: |
  Falso, nace con las características que tiene; la evolución es a nivel poblacional.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["tiempo"]

respuesta: verdadero
tipo: vf

enunciado: "La evolución es un proceso que ocurre a lo largo de muchas generaciones, no de un día para el otro."

explicacion: |
  Correcto.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "intermedio"
  tags: ["evidencias"]

variables:
  escenario: [["fosiles", "cambios graduales de formas de vida a lo largo del tiempo geologico"], ["anatomia comparada", "estructuras homologas que sugieren un ancestro comun"], ["embriologia comparada", "embriones de especies distintas se parecen mas entre si de jovenes que de adultos"], ["biologia molecular", "comparar ADN muestra que tan emparentadas estan las especies"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["cambios graduales de formas de vida a lo largo del tiempo geologico", "estructuras homologas que sugieren un ancestro comun", "embriones de especies distintas se parecen mas entre si de jovenes que de adultos", "comparar ADN muestra que tan emparentadas estan las especies"]

enunciado: "¿Qué muestra la evidencia de {escenario[idx][0]}?"

explicacion: |
  {escenario[idx][0]} muestra: {escenario[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["anatomia", "homologia"]

respuesta: verdadero
tipo: vf

enunciado: "Las estructuras homólogas tienen el mismo origen evolutivo pero distinta función."

explicacion: |
  Correcto, comparten estructura básica por un ancestro común.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["anatomia"]

respuesta: verdadero
tipo: vf

enunciado: "El brazo humano, el ala del murciélago y la aleta de la ballena tienen el mismo esquema óseo básico."

explicacion: |
  Correcto, son homólogos.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "intermedio"
  tags: ["genetica", "molecular"]

respuesta: verdadero
tipo: vf

enunciado: "Más similitud de ADN entre dos especies indica un ancestro común más reciente."

explicacion: |
  Correcto, menos tiempo desde la divergencia significa menos mutaciones acumuladas distintas.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["taxonomia"]

respuesta: verdadero
tipo: vf

enunciado: "La clasificación taxonómica ayuda a organizar y comunicar sobre millones de especies distintas."

explicacion: |
  Correcto.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["mecanismos"]

respuesta: verdadero
tipo: vf

enunciado: "Los mecanismos concretos de cómo ocurre la evolución (selección natural, deriva genética, especiación) se desarrollan en módulos aparte."

explicacion: |
  Correcto — ver ../seleccion-natural/, ../deriva-genetica-flujo-genico/, ../especiacion/.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["alcance"]

respuesta: verdadero
tipo: vf

enunciado: "Este módulo da el vocabulario y la idea general, pero no profundiza en los mecanismos evolutivos detallados."

explicacion: |
  Correcto, es la base conceptual para lo que sigue.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["nomenclatura"]

respuesta: "2"
tipo: mc
opciones_explicitas: ["1", "2", "3", "4"]

enunciado: "¿Cuántas partes tiene el nombre científico de una especie según la nomenclatura binomial?"

explicacion: |
  Dos: género y epíteto específico.
```

## Sección: conservacion-areas-protegidas (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["biodiversidad", "habitat"]

enunciado: "La construcción de una carretera que divide un bosque en dos partes menores se conoce como ___ de hábitat."

respuestas_validas: ["fragmentación", "fragmentacion"]
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

respuestas_validas: ["invasora"]
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

respuestas_validas: ["sobreexplotación", "sobreexplotacion"]
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

respuestas_validas: ["contaminación", "contaminacion"]
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

respuestas_validas: ["cambio climático", "cambio climatico"]
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
respuestas_validas: ["Parque Nacional", "parque nacional"]
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
respuestas_validas: ["conservar"]
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
respuestas_validas: ["flujo génico", "flujo genico"]

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
respuestas_validas: ["islas"]

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
respuestas_validas: ["conectar"]

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
respuestas_validas: ["endogamia"]

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
respuestas_validas: ["matriz"]

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
respuestas_validas: ["flujo génico", "flujo genico"]
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
respuestas_validas: ["depresión por endogamia", "depresion por endogamia"]
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
  causas: [["deforestación", "deforestación"]]

enunciado: "En un ecosistema donde {escenarios[escenario_idx][0]}, la causa principal de la pérdida de biodiversidad es la ___."

opciones_explicitas: ["deforestación", "especies exóticas", "cambio climático", "contaminación"]
respuesta: causas[escenario_idx][0]
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
  causas: [["especie invasora", "especie invasora"]]

enunciado: "Cuando {escenarios[escenario_idx][0]}, el factor que altera el equilibrio ecológico es la presencia de una ___."

respuestas_validas: ["especie invasora"]
respuesta: causas[escenario_idx][0]
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
  causas: [["sobrepesca", "sobrepesca"]]

enunciado: "En el escenario donde {escenarios[escenario_idx][0]}, el proceso que pone en riesgo la supervivencia de la especie es la ___."

respuestas_validas: ["sobrepesca"]
respuesta: causas[escenario_idx][0]
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
  causas: [["fragmentación de hábitat", "fragmentación de hábitat"]]

enunciado: "Si {escenarios[escenario_idx][0]}, el efecto directo sobre la biodiversidad es la ___."

opciones_explicitas: ["fragmentación de hábitat", "contaminación del suelo", "erosión", "especie invasora"]
respuesta: causas[escenario_idx][0]
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
  causas: [["contaminación por agroquímicos", "contaminación por agroquímicos"]]

enunciado: "Ante el escenario donde {escenarios[escenario_idx][0]}, la causa del declive de la fauna local es la ___."

respuestas_validas: ["contaminación por agroquímicos", "contaminacion por agroquimicos"]
respuesta: causas[escenario_idx][0]
tipo: completar

explicacion: |
  El uso de sustancias químicas en la agricultura puede llegar a ecosistemas protegidos mediante el escurrimiento de agua o el viento.
```

## Sección: crecimiento-poblacional (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["modelo_exponencial"]

variables:
  p0: random(50, 500)
  t: random(1, 6)

respuesta: p0 * 2 ^ t
tipo: input
tolerancia_abs: 0

enunciado: "Un cultivo de bacterias empieza con {p0} y se duplica cada hora. ¿Cuántas hay después de {t} horas?"

explicacion: |
  P(t) = {p0}×2^{t} = {p0 * 2 ^ t}.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["modelo_exponencial"]

variables:
  p0: random(10, 100)
  t: random(1, 5)

respuesta: p0 * 3 ^ t
tipo: input
tolerancia_abs: 0

enunciado: "Una población de insectos empieza con {p0} y se triplica cada generación. ¿Cuántos hay después de {t} generaciones?"

explicacion: |
  P(t) = {p0}×3^{t} = {p0 * 3 ^ t}.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["duplicacion"]

variables:
  p0: random(10, 50)
  n: random(1, 5)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {p0} se duplica cada período. ¿Cuántos períodos tardan en llegar a {p0 * (2 ^ n)}?"

pasos:
  - "{p0}×2^t = {p0 * (2 ^ n)} → 2^t = {2 ^ n} → t = {n}"

explicacion: |
  Se reconoce el factor de duplicación acumulado.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["tasa_neta"]

variables:
  natalidad: random(20, 50)
  mortalidad: random(5, 19)

respuesta: natalidad - mortalidad
tipo: input
tolerancia_abs: 0

enunciado: "En una población, la tasa de natalidad es {natalidad} por mil, y la de mortalidad es {mortalidad} por mil. ¿Cuál es la tasa neta de crecimiento (por mil)?"

explicacion: |
  Tasa neta = natalidad − mortalidad.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["tasa_neta", "verdadero_falso"]

variables:
  natalidad: random(5, 15)
  mortalidad: random(16, 30)

respuesta: ((natalidad - mortalidad) < 0)
tipo: vf

enunciado: "Natalidad {natalidad} por mil, mortalidad {mortalidad} por mil. ¿Está esta población en declive (tasa neta negativa)?"

explicacion: |
  Con mortalidad mayor que natalidad, la tasa neta da negativa — la
  población decrece.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["tasa_vs_cantidad"]

variables:
  poblacion: random(10, 100) * 1000
  tasa_por_mil: random(5, 40)

respuesta: (poblacion * tasa_por_mil) / 1000
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {poblacion} crece a una tasa de {tasa_por_mil} por mil. ¿Cuántos individuos se suman?"

explicacion: |
  {poblacion}×{tasa_por_mil}/1000 = {(poblacion * tasa_por_mil) / 1000}.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Dos poblaciones con la misma tasa de crecimiento (el mismo porcentaje) pueden sumar una cantidad de individuos muy distinta, si su tamaño de partida es distinto."

explicacion: |
  Una población de 1.000.000 con 2% suma 20.000; una de 100 con el mismo
  2% suma sólo 2 — misma tasa, cantidades muy distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El modelo exponencial simple (P=P₀rᵗ) predice un crecimiento sin ningún límite, sin importar cuánto tiempo pase."

explicacion: |
  Es justamente su limitación: en la realidad, ningún ambiente sostiene
  eso para siempre.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La capacidad de carga (K) es la cantidad máxima de individuos que un ambiente puede sostener de forma estable."

explicacion: |
  Es el límite real que el modelo exponencial simple no tiene en
  cuenta.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico del crecimiento logístico tiene forma de 'S': crece casi como una exponencial al principio, y se aplana al acercarse a la capacidad de carga."

explicacion: |
  Es la versión más realista del crecimiento poblacional, a diferencia
  del modelo exponencial puro.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando una población está muy por debajo de la capacidad de carga, su crecimiento se parece mucho al modelo exponencial simple."

explicacion: |
  El freno por escasez de recursos recién se nota cuando la población
  ya está cerca del límite K.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Escasez de alimento o espacio, depredación, enfermedad"
tipo: mc
opciones_explicitas:
  - "Escasez de alimento o espacio, depredación, enfermedad"
  - "La cantidad de individuos que nacieron el año pasado"
  - "El color de la especie"

enunciado: "¿Cuáles son ejemplos típicos de factores limitantes del crecimiento poblacional?"

explicacion: |
  Son las causas reales por las que una población deja de crecer
  exponencialmente cerca de su capacidad de carga.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Además de nacimientos y muertes, la migración (entrada y salida de individuos) también afecta la tasa neta de crecimiento de una población."

explicacion: |
  Tasa neta = natalidad − mortalidad ± migración.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  p0: random(50, 500)
  t: random(1, 5)
  real: p0 * 2 ^ t
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Un cultivo de {p0} bacterias se duplica cada hora. ¿Es correcto que después de {t} horas haya {propuesto}?"

explicacion: |
  El valor correcto es {p0}×2^{t} = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["modelo_exponencial"]

variables:
  p0: random(20, 100)
  r: random(2, 4)

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "Una población pasa de {p0} a {p0 * r} en un solo período. ¿Cuál es el factor de crecimiento r?"

explicacion: |
  r = población nueva / población anterior = {p0 * r}/{p0} = {r}.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el factor de crecimiento r=1, la población se mantiene estable (ni crece ni decrece)."

explicacion: |
  P(t)=P₀×1ᵗ=P₀ para cualquier t — no cambia.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el factor de crecimiento r está entre 0 y 1 (por ejemplo, r=0.9), la población decrece con el tiempo."

explicacion: |
  Es el mismo caso de decaimiento exponencial ya visto en
  `../../matematica/familias-exponencial-logaritmica/`.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["modelo_exponencial", "problema"]

variables:
  p0: random(100, 1000)
  t: random(1, 3)

respuesta: p0 * 2 ^ t
tipo: input
tolerancia_abs: 0

enunciado: "Una colonia de {p0} individuos crece un 100% cada período (o sea, se duplica). ¿Cuántos hay después de {t} períodos?"

explicacion: |
  Crecer 100% es lo mismo que duplicarse: r=2.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En la naturaleza, el crecimiento estrictamente exponencial de una población suele ser sólo una fase temporal (por ejemplo, al colonizar un ambiente nuevo con recursos abundantes), no algo que dure para siempre."

explicacion: |
  Tarde o temprano, los factores limitantes empiezan a actuar.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  p0: random(50, 200)
  t: random(2, 5)
  r1: 2
  r2: 3

respuesta: ((p0 * r2 ^ t) > (p0 * r1 ^ t))
tipo: vf

enunciado: "Dos poblaciones parten de {p0}: una con r=2 (se duplica) y otra con r=3 (se triplica) cada período. ¿Es mayor la de r=3 después de {t} períodos?"

explicacion: |
  Un factor de crecimiento mayor siempre termina superando a uno menor,
  a igualdad de punto de partida.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La capacidad de carga de un ambiente no es un número fijo para siempre — puede cambiar si cambian los recursos disponibles (por ejemplo, una sequía la reduce)."

explicacion: |
  K depende de las condiciones reales del ambiente, no es una constante
  universal de la especie.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El modelo exponencial de crecimiento poblacional es la misma solución de la ecuación diferencial dP/dt=kP ya vista en `../../matematica/ecuaciones-diferenciales/`, aplicada a una población en vez de un capital o una muestra radiactiva."

explicacion: |
  Distintos fenómenos, misma estructura matemática de fondo.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["duplicacion"]

variables:
  p0: random(10, 50)
  n: random(1, 4)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {p0} se triplica cada período. ¿Cuántos períodos tardan en llegar a {p0 * (3 ^ n)}?"

explicacion: |
  Se reconoce el factor 3^{n} acumulado.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Distintas especies tienen distintas tasas de crecimiento — las bacterias se duplican en minutos u horas, mientras que poblaciones de mamíferos grandes tardan años en duplicarse."

explicacion: |
  El modelo matemático es el mismo, pero r y la escala de tiempo cambian
  muchísimo según la especie.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  natalidad: random(20, 50)
  mortalidad: random(5, 19)
  real: natalidad - mortalidad
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Natalidad {natalidad} por mil, mortalidad {mortalidad} por mil. ¿Es correcto que la tasa neta sea {propuesto} por mil?"

explicacion: |
  La tasa neta correcta es natalidad − mortalidad = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El modelo exponencial simple sirve para predicciones de corto plazo o poblaciones lejos de su capacidad de carga; para el largo plazo (o cerca de K), el modelo logístico da una descripción más realista."

explicacion: |
  Es el resumen central del tema: ningún modelo es "el correcto"
  siempre — depende de la escala y el contexto.
```
