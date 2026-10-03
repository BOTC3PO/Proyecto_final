# Examen jefe — [PENDIENTE #864]

> Logro #864. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **118 preguntas totales** en 5/5 secciones.

---

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
respuestas_validas:
  - "cadena"

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

## Sección: mal-de-chagas (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["ciclo_vida", "vector"]

respuesta: "huevo, ninfa y adulto"
tipo: completar

enunciado: "El ciclo de vida de la vinchuca incluye las etapas: ___."

explicacion: |
  La vinchuca pasa por tres etapas principales: huevo, ninfa (que muda de piel varias veces) y adulto.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["agente_etiologico", "parasito"]

respuesta: "Trypanosoma cruzi"
tipo: completar

enunciado: "El agente etiológico principal de la enfermedad de Chagas es un parásito microscópico llamado ___."

explicacion: |
  La enfermedad de Chagas, o tripanosomiasis americana, es causada específicamente por el protozoo flagelado Trypanosoma cruzi.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["vector", "vinchuca"]

respuesta: "vinchuca"
tipo: completar

enunciado: "El insecto vector más común en Argentina para la transmisión del Chagas es la ___, también conocida como chinche del sur."

explicacion: |
  La vinchuca (familia Reduviidae) es el principal vector mecánico y biológico de Trypanosoma cruzi en la región.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["transmision", "defecacion"]

respuesta: "defeca"
tipo: completar
respuestas_validas:
  - "defeca"
  - "defecacion"
  - "defecación"

enunciado: "El riesgo de infección aumenta cuando la vinchuca pica y ___ cerca de la herida, permitiendo que los parásitos ingresen al organismo."

explicacion: |
  La transmisión ocurre cuando las heces infectadas con parásitos se frotan en la picadura, los ojos o la boca.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["ciclo_vida", "insecto"]

respuesta: "huevo, ninfa y adulto"
tipo: completar

enunciado: "El ciclo de vida de la vinchuca incluye tres etapas principales: ___."

explicacion: |
  La metamorfosis incompleta de la vinchuca pasa por huevo, ninfa (que muda varias veces) y adulto.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["habitat", "grietas"]

respuesta: "grietas"
tipo: completar

enunciado: "Durante el día, la vinchuca suele esconderse en ___ de paredes de adobe, techos de paja o montones de leña."

explicacion: |
  Estas grietas y hendiduras ofrecen protección y proximidad a los hospedadores mamíferos para su alimentación nocturna.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "avanzado"
  tags: ["taxonomia", "reduviidae"]

respuesta: "Reduviidae"
tipo: completar

enunciado: "La vinchuca pertenece a la familia de insectos hemípteros conocida como ___."

explicacion: |
  Los Reduviidae son conocidos como chinches asesinas, caracterizados por su probóscide larga y potente para chupar sangre.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["transmision", "rasgado"]

respuesta: "rascarse"
tipo: completar

enunciado: "La picadura en sí no transmite el parásito; es común que la persona ___ la zona, frotando las heces infectadas en la herida."

explicacion: |
  El rascamiento es el mecanismo involuntario que facilita la entrada de los tripomastigotas presentes en las heces de la vinchuca.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["epidemiologia", "zonas_rurales"]

respuesta: "rurales"
tipo: completar

enunciado: "Aunque ha disminuido, la enfermedad sigue siendo un desafío en zonas ___ y periurbanas del norte argentino."

explicacion: |
  Las condiciones de vivienda precaria en áreas rurales facilitan la convivencia con el vector.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "avanzado"
  tags: ["nomenclatura", "vector"]

respuesta: "Triatoma infestans"
tipo: completar

enunciado: "Una de las especies de vinchuca más importante y extendida en el Cono Sur, incluida Argentina, es ___."

explicacion: |
  Triatoma infestans es la principal especie vectora en la región del Gran Chaco y zonas aledañas.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["alimentacion", "sangre"]

respuesta: "sangre"
tipo: completar

enunciado: "Tanto las ninfas como los adultos de la vinchuca deben alimentarse de ___ para crecer y reproducirse."

explicacion: |
  La alimentación hematófaga es esencial para el desarrollo del insecto y el ciclo de vida del parásito en su interior.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["sintomas", "chagoma"]

respuesta: "chagoma"
tipo: completar

enunciado: "En la fase aguda, puede aparecer una inflamación local en el sitio de inoculación llamada ___."

explicacion: |
  El chagoma es una lesión cutánea indurada que se forma en el lugar donde los parásitos ingresaron al organismo.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["ciclo_vida", "longevidad"]

respuesta: "varios meses"
tipo: completar

enunciado: "Los insectos adultos de la vinchuca pueden vivir ___, lo que aumenta el riesgo de exposición prolongada."

explicacion: |
  Su longevidad relativa permite múltiples oportunidades de picadura y transmisión a lo largo del tiempo.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "avanzado"
  tags: ["parasitologia", "intestino"]

respuesta: "intestino"
tipo: completar

enunciado: "El parásito Trypanosoma cruzi se desarrolla y multiplica dentro del ___ del insecto vector."

explicacion: |
  El ciclo del parásito dentro de la vinchuca ocurre en el tracto digestivo, donde se transforma en metacíclico.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["salud_publica", "diagnostico"]

respuesta: "evitar complicaciones"
tipo: completar

enunciado: "El diagnóstico temprano es clave para ___ graves a largo plazo, como la cardiopatía chagásica crónica."

explicacion: |
  Tratar la fase aguda previene la progresión a la fase crónica, que puede ser devastadora para el corazón y el sistema digestivo.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["nomenclatura", "tripanosomiasis"]

respuesta: "tripanosomiasis americana"
tipo: completar

enunciado: "La enfermedad de Chagas también es conocida como ___."

explicacion: |
  Este nombre refleja la naturaleza del parásito (tripanosoma) y su distribución geográfica original (América).
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["morfologia", "proboscide"]

respuesta: "probóscide"
tipo: completar

enunciado: "La vinchuca se caracteriza por tener un cuerpo aplanado y una larga ___ con la que se alimenta de sangre."

explicacion: |
  La probóscide es un órgano bucal piercing-sucking adaptado para penetrar la piel de los hospedadores.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["prevencion", "control"]

respuesta: "control vectorial"
tipo: completar

enunciado: "En las últimas décadas, los avances en ___ han logrado reducir significativamente la transmisión de la enfermedad."

explicacion: |
  El fumigación de viviendas y la mejora de la infraestructura habitacional son pilares del control en Argentina.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["geografia", "america_latina"]

respuesta: "América Latina"
tipo: completar

enunciado: "La enfermedad de Chagas es endémica en gran parte de ___, especialmente en zonas tropicales y subtropicales."

explicacion: |
  Desde el sur de México hasta el centro de Argentina y Chile, la enfermedad tiene presencia histórica.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "avanzado"
  tags: ["clinica", "cronica"]

respuesta: "crónica"
tipo: completar

enunciado: "Después de la fase aguda, la enfermedad entra en una fase ___ que puede durar décadas y ser asintomática o causar daño orgánico."

explicacion: |
  La fase crónica se divide en indeterminada (asintomática) e indeterminada (con manifestaciones cardíacas o digestivas).
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["nomenclatura_regional", "vinchuca"]

respuesta: "vinchuca"
tipo: completar

enunciado: "En el norte argentino, al insecto vector se lo llama comúnmente ___."

explicacion: |
  En otras regiones de Sudamérica se le conoce como chinche del sur, chupador o barbeiro.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["transmision", "contaminacion"]

respuesta: "excretas"
tipo: completar

enunciado: "La transmisión requiere la contaminación de la herida con las ___ de la vinchuca, no con su saliva."

explicacion: |
  Los parásitos están en las heces, no en la saliva. La picadura inocula saliva anticoagulante, pero la infección viene de las heces.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["salud_publica", "impacto"]

respuesta: "salud pública"
tipo: completar

enunciado: "El impacto histórico y actual del Chagas en Argentina lo convierte en un problema prioritario de ___."

explicacion: |
  Debido a su prevalencia y gravedad, requiere programas nacionales e internacionales de vigilancia y control.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["desarrollo", "muda"]

respuesta: "mudar"
tipo: completar

enunciado: "Las ninfas de la vinchuca deben alimentarse de sangre para crecer y ___ su piel hasta alcanzar la etapa adulta."

explicacion: |
  La muda es necesaria para el desarrollo morfológico del insecto durante su crecimiento.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["prevencion", "higiene"]

respuesta: "no rascarse"
tipo: completar

enunciado: "Una medida preventiva simple es ___ la picadura inmediatamente para evitar frotar las heces infectadas en los ojos o la boca."

explicacion: |
  Evitar el rascamiento reduce el riesgo de inoculación accidental de los parásitos presentes en las heces del vector.
```

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
respuestas_validas:
  - "vivos"

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
respuestas_validas:
  - "fisico"
  - "no vivo"

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
respuestas_validas:
  - "fijacion"
  - "fijación"

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
respuestas_validas:
  - "desnitrificacion"
  - "desnitrificación"

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

## Sección: dinamica-poblacional-capacidad-carga (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["poblacion", "definicion"]

respuesta: "grupo de individuos de la misma especie que habitan en un mismo lugar y tiempo"
tipo: completar
respuestas_validas:
  - "grupo de individuos de la misma especie que habitan en un mismo lugar y tiempo"

enunciado: "En biología, una población se define como un ___."

explicacion: |
  Una población es un conjunto de organismos de la misma especie que coexisten en un área determinada y en un momento específico, permitiendo la interacción entre sus miembros.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["crecimiento_exponencial", "curva_j"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["bacteria", "duplica", "2"], ["levadura", "triplica", "3"]]

respuesta: datos[escenario_idx][2]
tipo: completar
respuestas_validas:
  - "2"
  - "3"

enunciado: "Si una población de {datos[escenario_idx][0]} se {datos[escenario_idx][1]} en cada intervalo de tiempo, y empezamos con una unidad, el crecimiento sigue un modelo exponencial donde el factor de multiplicación por intervalo es ___."

explicacion: |
  En el modelo de crecimiento exponencial, la tasa de crecimiento es proporcional al número de individuos presentes, lo que genera una curva en forma de 'J'.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["factores_limitantes", "recursos"]

respuesta: "recursos"
tipo: completar
respuestas_validas:
  - "recursos"

enunciado: "El crecimiento exponencial teórico asume que no existen limitaciones por ___ como alimento o espacio."

explicacion: |
  El modelo exponencial es un modelo idealizado donde los recursos son infinitos, lo que permite que la población crezca sin frenos.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["curva_j", "curva_s"]

respuesta: "J"
tipo: completar
respuestas_validas:
  - "J"

enunciado: "Cuando una población crece de manera exponencial sin restricciones, la representación gráfica de su crecimiento tiene forma de letra ___."

explicacion: |
  La forma de 'J' representa la aceleración constante del crecimiento conforme la base de individuos aumenta.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "avanzado"
  tags: ["tasa_crecimiento", "modelo_exponencial"]

respuesta: "más rápido"
tipo: mc
opciones_explicitas: ["más rápido", "más lento", "igual", "no depende de r"]

enunciado: "En un modelo de crecimiento exponencial, cuanto mayor es la tasa de crecimiento intrínseca (r) de una población, ___ crece esa población por unidad de tiempo."

explicacion: |
  En el modelo exponencial, la tasa de crecimiento per cápita (r) se mantiene constante; cuanto mayor es r, más rápido crece el número total de individuos.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["crecimiento_logistico", "curva_S"]

tipo: mc
opciones_explicitas: ["Curva exponencial", "Curva en forma de J", "Curva en forma de S", "Curva de decaimiento"]
respuesta: "Curva en forma de S"

enunciado: "El crecimiento logístico de una población se caracteriza por presentar una curva con forma de ___ debido a la limitación de recursos."

explicacion: |
  A diferencia del crecimiento exponencial (forma de J), el crecimiento logístico se estabiliza cuando la población alcanza la capacidad de carga, resultando en una curva sigmoidea o en forma de S.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["factores_limitantes", "competencia"]

tipo: vf
respuesta: verdadero

enunciado: "La competencia por recursos como alimento y espacio es uno de los factores que frena el crecimiento poblacional en un modelo logístico."

explicacion: |
  Verdadero. En el modelo logístico, a medida que la población aumenta, la disponibilidad de recursos por individuo disminuye, lo que reduce la tasa de crecimiento hasta que se estabiliza.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["capacidad_carga", "K"]

tipo: mc
opciones_explicitas: ["La tasa máxima de natalidad", "El número máximo de individuos que un ambiente puede sostener", "La velocidad de extinción de una especie", "El número total de nacimientos en un año"]
respuesta: "El número máximo de individuos que un ambiente puede sostener"

enunciado: "En dinámica de poblaciones, el término 'Capacidad de Carga' (K) se refiere a:"

explicacion: |
  La capacidad de carga es el límite superior de población que un ecosistema determinado puede mantener de forma sostenible, considerando los recursos disponibles.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "avanzado"
  tags: ["tasa_crecimiento", "logistica"]

tipo: vf
respuesta: falso

enunciado: "En un modelo de crecimiento logístico, la tasa de crecimiento de la población es máxima cuando la población es igual a la capacidad de carga (K)."

explicacion: |
  Falso. La tasa de crecimiento es máxima cuando la población alcanza la mitad de la capacidad de carga (K/2). Cuando la población se acerca a K, la tasa de crecimiento tiende a cero.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["estabilizacion", "recursos"]

tipo: mc
opciones_explicitas: ["La población crece indefinidamente", "La población se estabiliza cerca de la capacidad de carga", "La población se divide en dos especies distintas", "La población entra en un ciclo de extinción inmediata"]
respuesta: "La población se estabiliza cerca de la capacidad de carga"

enunciado: "Cuando una población alcanza el equilibrio con su entorno en un modelo logístico, ¿qué sucede con el tamaño de la población?"

explicacion: |
  La población tiende a estabilizarse alrededor de la capacidad de carga (K), donde la tasa de natalidad y la tasa de mortalidad se equilibran.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["ecologia", "poblaciones"]

respuesta: "K"
tipo: completar
respuestas_validas:
  - "K"

enunciado: "El valor máximo de individuos de una especie que un entorno puede sostener de forma indefinida se denomina capacidad de carga, y se representa con la letra ___."

explicacion: |
  La capacidad de carga, representada frecuentemente con la letra K, es el límite de población que los recursos de un ecosistema pueden soportar.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["recursos", "factores_limitantes"]

variables:
  recurso: uno_de(["comida", "agua", "espacio", "refugio"])

respuesta: recurso
tipo: completar
respuestas_validas:
  - "comida"
  - "agua"
  - "espacio"
  - "refugio"

enunciado: "La capacidad de carga de un ecosistema está determinada por la disponibilidad de recursos esenciales. Si el recurso considerado en este caso es {recurso}, escribí ese mismo recurso como respuesta: ___."

explicacion: |
  Los recursos limitantes (comida, agua, espacio y refugio) son los que impiden que una población crezca infinitamente.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["variabilidad", "entorno"]

respuesta: "fijo"
tipo: completar
respuestas_validas:
  - "fijo"

enunciado: "La capacidad de carga no es un número ___, ya que puede cambiar si las condiciones ambientales o la disponibilidad de recursos varían."

explicacion: |
  Si hay un incendio o una sequía, la capacidad de carga disminuye; si hay abundancia de lluvias, puede aumentar. Por eso no es un valor constante.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "avanzado"
  tags: ["ecologia", "factores_ambientales"]

respuesta: "cambia"
tipo: completar
respuestas_validas:
  - "cambia"
  - "disminuye"

enunciado: "Si un ecosistema sufre una degradación de su suelo que reduce la disponibilidad de plantas, la capacidad de carga de los herbívoros en ese lugar ___."

explicacion: |
  Al reducirse la base de recursos (comida), el entorno puede sostener a menos individuos, por lo tanto, la capacidad de carga disminuye.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["dinamica", "equilibrio"]

respuesta: "recursos"
tipo: completar
respuestas_validas:
  - "recursos"

enunciado: "Cuando una población alcanza su capacidad de carga, se establece un equilibrio dinámico determinado por la disponibilidad de ___."

explicacion: |
  El equilibrio se alcanza cuando la tasa de natalidad y mortalidad se estabilizan debido a la limitación de los recursos disponibles en el medio.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["ecologia", "capacidad_de_carga"]

tipo: mc
opciones_explicitas: ["El número máximo de individuos que un ambiente puede sostener indefinidamente", "El número total de individuos que nacen en un año", "El límite físico donde la población se extingue inmediatamente", "La cantidad de alimento disponible en un ecosistema"]
respuesta: "El número máximo de individuos que un ambiente puede sostener indefinidamente"

enunciado: "En ecología, ¿qué representa el concepto de capacidad de carga (K)?"

explicacion: |
  La capacidad de carga (K) es el número máximo de individuos de una especie que un entorno específico puede sostener de manera sostenible, considerando los recursos disponibles como alimento, agua y espacio.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["mortalidad", "recursos"]

tipo: completar
respuesta: "ambas"
respuestas_validas:
  - "ambas"

enunciado: "Cuando una población supera ampliamente su capacidad de carga, aumenta la mortalidad y disminuye la natalidad — es decir, ocurren ___ cosas a la vez."

explicacion: |
  Al exceder la capacidad de carga, la competencia por recursos se vuelve intensa. Esto provoca un aumento en la mortalidad por falta de alimento o refugio, y una disminución en la natalidad debido al estrés nutricional y ambiental.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["equilibrio", "K"]

tipo: mc
opciones_explicitas: ["K es un techo absoluto que la población nunca puede tocar", "K es un punto de equilibrio dinámico donde la población oscila", "K es el número de individuos que mueren en cada ciclo", "K es la velocidad de reproducción de la especie"]

respuesta: "K es un punto de equilibrio dinámico donde la población oscila"

enunciado: "Sobre la relación entre la población real (N) y la capacidad de carga (K), es correcto afirmar que:"

explicacion: |
  La capacidad de carga no es un muro infranqueable, sino un punto de equilibrio. La población suele oscilar alrededor de K debido a las retroalimentaciones entre la disponibilidad de recursos y el tamaño poblacional.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["factores_densidad"]

tipo: completar
respuesta: "factores dependientes de la densidad"
respuestas_validas:
  - "factores dependientes de la densidad"

enunciado: "El aumento de la competencia por recursos cuando la población supera su capacidad de carga es un ejemplo de: ___"

explicacion: |
  Los factores dependientes de la densidad (como la competencia, la depredación o la enfermedad) son aquellos cuya intensidad aumenta a medida que la población crece, regulando así el tamaño poblacional cerca de K.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "avanzado"
  tags: ["caida_poblacional", "recursos"]

tipo: mc
opciones_explicitas: ["La población cae por debajo de K y luego se estabiliza", "La población crece exponencialmente sin detenerse", "La población se mantiene constante por encima de K", "La población se mantiene en un crecimiento lineal"]

respuesta: "La población cae por debajo de K y luego se estabiliza"

enunciado: "Si una población experimenta un crecimiento explosivo que sobrepasa la capacidad de carga (overshoot), ¿cuál es la respuesta típica del sistema?"

explicacion: |
  El exceso de individuos agota los recursos, provocando una caída en la población (a menudo por debajo de K debido al daño ambiental causado), para luego estabilizarse nuevamente en un ciclo de equilibrio.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["crecimiento_exponencial", "especies_invasoras"]

variables:
  escenario: uno_de(["una especie de ratones en una isla sin depredadores", "una población de bacterias en un medio con nutrientes ilimitados"])

respuesta: "exponencial"
tipo: mc
opciones_explicitas: ["exponencial", "logístico", "estacionario", "decreciente"]

enunciado: "En el caso de {escenario}, durante las primeras etapas de colonización, el modelo de crecimiento que mejor describe la dinámica poblacional es el de tipo ___."

explicacion: |
  Cuando una especie llega a un nuevo hábitat sin depredadores ni competencia significativa, los recursos son abundantes y la población crece de forma exponencial (J) antes de que los factores limitantes actúen.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["capacidad_de_carga", "modelo_logistico"]

respuesta: "500"
tipo: completar
respuestas_validas:
  - "500"

enunciado: "En un modelo de crecimiento logístico, la variable K representa la capacidad de carga del ecosistema. Si un ambiente tiene recursos que sólo permiten sostener a un máximo de 500 individuos de una especie, ¿cuál es el valor de K?"

explicacion: |
  La capacidad de carga (K) es el número máximo de individuos de una especie que un entorno puede sustentar indefinidamente, considerando los recursos disponibles.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["curva_logistica", "forma_de_S"]

respuesta: "forma de S"
tipo: mc
opciones_explicitas: ["forma de J", "forma de S", "línea recta", "curva descendente"]

enunciado: "A diferencia del crecimiento exponencial, el crecimiento logístico se caracteriza por presentar una curva con ___ debido a la presencia de factores limitantes."

explicacion: |
  El modelo logístico muestra un crecimiento rápido al principio que se desacelera a medida que la población se acerca a la capacidad de carga, formando una curva sigmoidea o en forma de S.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["factores_limitantes", "densidad_dependiente"]

variables:
  factor: uno_de(["la disponibilidad de alimento", "la acumulación de desechos tóxicos", "la competencia por espacio"])

respuesta: "dependiente de la densidad"
tipo: completar
respuestas_validas:
  - "dependiente de la densidad"

enunciado: "Factores como {factor} actúan sobre la población de manera ___ (más fuerte cuanto más densa está la población)."

explicacion: |
  Los factores que afectan la tasa de crecimiento a medida que la población aumenta (como la comida o el espacio) se denominan factores dependientes de la densidad.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "avanzado"
  tags: ["comparacion_modelos", "recursos"]

variables:
  condicion: uno_de(["recursos limitados", "recursos limitados"])

respuesta: "logístico"
tipo: mc
opciones_explicitas: ["exponencial", "logístico"]

enunciado: "Si consideramos que en un ecosistema real los {condicion} son la norma, el modelo de crecimiento más realista para representar la población a largo plazo es el modelo ___."

explicacion: |
  Aunque el modelo exponencial es útil para entender fases iniciales, el modelo logístico es más preciso para la naturaleza porque reconoce que los recursos son finitos.
```

## Sección: mitosis-meiosis (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["mitosis", "division_celular"]

respuesta: verdadero
tipo: vf

enunciado: "La mitosis produce 2 células hijas idénticas a la célula original."

explicacion: |
  La mitosis asegura que ambas células resultantes tengan la misma información genética que la célula madre.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["mitosis", "crecimiento"]

respuesta: verdadero
tipo: vf

enunciado: "La mitosis es el proceso detrás del crecimiento y la reparación de tejidos en organismos pluricelulares."

explicacion: |
  Permite aumentar de tamaño y sustituir células dañadas.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["mitosis", "cromosomas"]

respuesta: falso
tipo: vf

enunciado: "Las células hijas de la mitosis tienen la mitad de cromosomas que la célula original."

explicacion: |
  Falso. Tienen el mismo número (diploide); la reducción a la mitad ocurre en la meiosis.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["mitosis", "calculo"]

variables:
  cromosomas_originales: uno_de([2, 4, 6, 8])

respuesta: cromosomas_originales
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una célula original tiene {cromosomas_originales} cromosomas, ¿cuántos tendrá cada célula hija tras la mitosis?"

pasos:
  - "La mitosis mantiene la dotación cromosómica original."

explicacion: |
  Cada hija tiene {cromosomas_originales} cromosomas, igual que la original.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["meiosis", "gametos"]

respuesta: verdadero
tipo: vf

enunciado: "La meiosis produce células sexuales (gametos) como óvulos y espermatozoides."

explicacion: |
  Es el proceso especializado en producir gametos para la reproducción sexual.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["meiosis", "cromosomas"]

respuesta: verdadero
tipo: vf

enunciado: "La meiosis produce 4 células hijas con la mitad de cromosomas que la célula original."

explicacion: |
  Correcto, reduce el número a haploide (n).
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["meiosis"]

respuesta: falso
tipo: vf

enunciado: "La meiosis ocurre en casi cualquier célula del cuerpo, igual que la mitosis."

explicacion: |
  Falso. Sólo ocurre en las células germinales de los órganos reproductivos.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["meiosis", "calculo"]

variables:
  cromosomas_originales: uno_de([4, 8, 12, 16])

respuesta: cromosomas_originales / 2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una célula somática tiene {cromosomas_originales} cromosomas, ¿cuántos tendrá cada célula hija tras la meiosis?"

explicacion: |
  De diploide (2n) a haploide (n): {cromosomas_originales} / 2.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["division_celular"]

variables:
  escenario: [["mitosis", 2], ["meiosis", 4]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: [2, 4]

enunciado: "¿Cuántas células hijas se obtienen al finalizar el proceso de {escenario[idx][0]}?"

explicacion: |
  La {escenario[idx][0]} produce {escenario[idx][1]} células hijas.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["genetica", "variabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Las células hijas de la mitosis son idénticas entre sí, pero las de la meiosis no (por la recombinación genética)."

explicacion: |
  La mitosis busca replicación exacta; la meiosis busca variabilidad (crossing-over).
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["celulas_somaticas"]

respuesta: "mitosis"
tipo: mc
opciones_explicitas: ["mitosis", "meiosis", "ambos por igual", "ninguno"]

enunciado: "¿Cuál de estos procesos ocurre en casi cualquier célula del cuerpo, para crecimiento y reparación?"

explicacion: |
  La mitosis es la división de las células somáticas.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["gametogenesis"]

respuesta: "meiosis"
tipo: mc
opciones_explicitas: ["meiosis", "mitosis", "ambos por igual", "ninguno"]

enunciado: "¿Cuál de estos procesos ocurre exclusivamente en órganos reproductivos, para formar gametos?"

explicacion: |
  La meiosis ocurre en las gónadas, para producir óvulos y espermatozoides.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["genetica", "reproduccion"]

respuesta: verdadero
tipo: vf

enunciado: "Si los gametos tuvieran el número completo de cromosomas (diploide), la fecundación duplicaría el número de cromosomas en cada generación."

explicacion: |
  Correcto — por eso la meiosis reduce a la mitad antes de la fecundación.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["meiosis"]

respuesta: verdadero
tipo: vf

enunciado: "La meiosis existe fundamentalmente para evitar que el número de cromosomas se duplique en cada nueva generación."

explicacion: |
  Correcto, mantiene constante el número cromosómico de la especie.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["fecundacion"]

respuesta: verdadero
tipo: vf

enunciado: "La fecundación (unión de dos gametos haploides) restaura el número normal (diploide) de cromosomas en el nuevo organismo."

explicacion: |
  Correcto, n + n = 2n en el organismo resultante.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["evolucion", "variacion"]

respuesta: verdadero
tipo: vf

enunciado: "La variación genética generada durante la meiosis es importante para la selección natural, porque sin variabilidad no habría rasgos sobre los que actuar."

explicacion: |
  Correcto — ver ../seleccion-natural/.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "avanzado"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Antes de dividirse (sea mitosis o meiosis), la célula primero duplica todo su material genético, para que cada célula hija tenga una copia completa."

explicacion: |
  Correcto. Sin esa duplicación previa, no habría suficiente material para repartir entre las células hijas.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["mitosis", "reproduccion"]

respuesta: verdadero
tipo: vf

enunciado: "En organismos unicelulares, la mitosis también sirve como forma de reproducción (cada división crea un nuevo individuo)."

explicacion: |
  Correcto, en unicelulares dividirse ES reproducirse.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "avanzado"
  tags: ["reproduccion", "comparacion"]

respuesta: "meiosis"
tipo: mc
opciones_explicitas: ["meiosis", "mitosis", "ambas por igual", "ninguna"]

enunciado: "¿Cuál de los dos procesos está asociado a la reproducción SEXUAL (con dos progenitores aportando material genético)?"

explicacion: |
  La meiosis produce los gametos que se combinan en la reproducción sexual.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "avanzado"
  tags: ["aplicacion", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Un error durante la mitosis que hace que las células hijas se dividan sin control (sin detenerse) puede estar relacionado con el cáncer."

explicacion: |
  Correcto. El cáncer es, en esencia, una división celular descontrolada — un fallo en los mecanismos que regulan la mitosis.
```

