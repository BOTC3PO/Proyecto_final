# Examen jefe — Dominio de la Vida y el Cuerpo

> Logro #154. Completaste el examen integrando ecología y fisiología, jefe. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **110 preguntas totales** en 5/5 secciones.

---

## Sección: necesidades-basicas-seres-vivos (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "supervivencia"]

respuesta: verdadero
tipo: vf

enunciado: "Una necesidad básica es algo que un ser vivo tiene que conseguir del ambiente para poder seguir vivo."

explicacion: |
  Correcto. Las necesidades básicas son esenciales para mantener la vida.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "basico"
  tags: ["conceptos_fundamentales"]

respuesta: falso
tipo: vf

enunciado: "Las necesidades básicas son opcionales, como un 'gusto' que no afecta la supervivencia."

explicacion: |
  Falso. Si es "básica", su ausencia pone en riesgo la vida del ser vivo.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "basico"
  tags: ["elementos_vitales"]

respuesta: "agua, aire y alimento"
tipo: mc
opciones_explicitas: ["agua, aire y alimento", "luz, temperatura y espacio", "dinero, tecnología y ropa", "solo el alimento"]

enunciado: "¿Cuáles son las tres necesidades básicas universales de los seres vivos?"

explicacion: |
  Agua, aire y alimento son las 3 necesidades universales, sin excepción.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "basico"
  tags: ["supervivencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si a un ser vivo le falta agua, aire o alimento por mucho tiempo, muere."

explicacion: |
  Correcto. Sin ellas no se pueden sostener los procesos vitales.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "basico"
  tags: ["agua", "composicion"]

respuesta: verdadero
tipo: vf

enunciado: "El cuerpo humano está compuesto mayormente de agua (aproximadamente 60%)."

explicacion: |
  Correcto. El agua es el componente principal de células y fluidos corporales.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "basico"
  tags: ["agua"]

respuesta: verdadero
tipo: vf

enunciado: "El agua es el medio donde ocurren las reacciones químicas internas del cuerpo."

explicacion: |
  Correcto. El agua actúa como solvente donde ocurren los procesos metabólicos.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "basico"
  tags: ["agua", "supervivencia"]

respuesta: falso
tipo: vf

enunciado: "Un ser humano puede sobrevivir meses sin tomar agua."

explicacion: |
  Falso. La deshidratación severa puede ser mortal en pocos días.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "basico"
  tags: ["agua", "funciones"]

respuesta: "medio para reacciones químicas, transporte y regulación de temperatura"
tipo: mc
opciones_explicitas: ["medio para reacciones químicas, transporte y regulación de temperatura", "solo dar sabor a las comidas", "solo limpiar la piel", "ninguna función vital"]

enunciado: "El agua cumple funciones de..."

explicacion: |
  Es medio de reacciones químicas, transporta nutrientes y regula la temperatura corporal.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "basico"
  tags: ["oxigeno", "respiracion"]

respuesta: verdadero
tipo: vf

enunciado: "La mayoría de los seres vivos necesitan oxígeno del aire para la respiración celular."

explicacion: |
  Correcto — ver ../fotosintesis-respiracion-celular/.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "basico"
  tags: ["aire", "supervivencia"]

respuesta: verdadero
tipo: vf

enunciado: "La falta de aire es la más urgente de las 3 necesidades básicas: se sobrevive apenas unos minutos sin ella."

explicacion: |
  Correcto, mucho más urgente que la falta de agua o alimento.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "basico"
  tags: ["alimento", "energia"]

respuesta: verdadero
tipo: vf

enunciado: "El alimento aporta materia para crecer y energía para que el organismo funcione."

explicacion: |
  Correcto, esas son las dos funciones principales del alimento.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "basico"
  tags: ["supervivencia"]

respuesta: verdadero
tipo: vf

enunciado: "Se puede sobrevivir sin comer más tiempo que sin tomar agua."

explicacion: |
  Correcto: semanas sin comida vs. sólo pocos días sin agua.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "basico"
  tags: ["respiracion", "energia"]

respuesta: "celular"
tipo: completar
respuestas_validas: ["celular"]

enunciado: "El proceso que usa el oxígeno del aire para liberar la energía guardada en el alimento se llama respiración ___."

explicacion: |
  La respiración celular transforma la energía química de los nutrientes en energía usable.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "intermedio"
  tags: ["supervivencia", "repaso"]

variables:
  escenario: [["aire", "pocos minutos"], ["agua", "pocos dias"], ["alimento", "semanas"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["pocos minutos", "pocos días", "semanas", "meses"]

enunciado: "Si un ser vivo carece de {escenario[idx][0]}, ¿cuánto tiempo puede sobrevivir aproximadamente?"

explicacion: |
  Sin {escenario[idx][0]}, la vida se compromete en {escenario[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "basico"
  tags: ["factores_ambientales"]

respuesta: verdadero
tipo: vf

enunciado: "Además de agua, aire y alimento, hay otras cosas que un ser vivo necesita, como luz y un rango de temperatura tolerable."

explicacion: |
  Correcto, aunque esas 3 son las únicas verdaderamente universales.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "basico"
  tags: ["caracteristicas_vida"]

respuesta: verdadero
tipo: vf

enunciado: "Agua, aire y alimento se consideran necesidades universales porque todo ser vivo conocido las requiere de alguna forma."

explicacion: |
  Correcto, desde bacterias hasta animales complejos.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "basico"
  tags: ["conceptos_fundamentales"]

respuesta: verdadero
tipo: vf

enunciado: "Las necesidades básicas son la base para definir qué elementos hacen falta para que algo sea considerado 'vivo'."

explicacion: |
  Correcto — ver ../ser-vivo-caracteristicas/.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "intermedio"
  tags: ["adaptacion"]

respuesta: falso
tipo: vf

enunciado: "Todos los seres vivos consiguen sus necesidades básicas exactamente de la misma manera (ej. todos comen lo mismo, todos respiran de la misma forma)."

explicacion: |
  Falso. La NECESIDAD es universal, pero la FORMA de conseguirla varía mucho según el ser vivo y su hábitat — ver ../habitats-adaptacion/.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "intermedio"
  tags: ["supervivencia", "aplicacion"]

respuesta: "el aire, porque es la necesidad más urgente"
tipo: mc
opciones_explicitas: ["el aire, porque es la necesidad más urgente", "el alimento, porque da más energía", "el agua, porque pesa más", "cualquiera, no importa el orden"]

enunciado: "Si una persona quedara sin acceso a agua, aire y alimento al mismo tiempo, ¿cuál sería la carencia más urgente de resolver?"

explicacion: |
  El aire es la más urgente: sin él, la supervivencia se mide en minutos, no días ni semanas.
```

```
metadata:
  materia: "biologia"
  tema: "necesidades_basicas_seres_vivos"
  nivel: "intermedio"
  tags: ["plantas", "aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "Las plantas también necesitan agua, aire (CO2 y O2) y \"alimento\" (que ellas mismas fabrican por fotosíntesis), aunque no coman como los animales."

explicacion: |
  Correcto. Las 3 necesidades son universales, aunque cada tipo de ser vivo las consiga de forma distinta — las plantas fabrican su propio alimento en vez de buscarlo.
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

respuestas_validas: ["nicho ecológico", "nicho ecologico"]
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

respuestas_validas: ["profesión", "profesion"]
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

respuestas_validas: ["competencia"]
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

respuestas_validas: ["abióticos", "abioticos"]
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
  escenarios: [
    ["un león en la sabana africana", "depredador de grandes herbívoros"],
    ["un búho en un bosque", "depredador nocturno de pequeños roedores"]
  ]

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

respuestas_validas: ["regla"]
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

respuestas_validas: ["exclusión", "exclusion"]
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

respuestas_validas: ["partición", "particion"]
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

respuestas_validas: ["función", "funcion"]
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

respuestas_validas: ["adaptativa"]
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
respuestas_validas: ["nicho realizado"]
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
respuestas_validas: ["un subconjunto"]
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
  escenarios: [
    ["El búho y el ratón", "nocturno", "diurno"],
    ["El águila y el halcón", "diurno", "nocturno"]
  ]

opciones_explicitas: ["nocturno", "diurno"]

respuesta: escenarios[escenario_idx][1]
tipo: mc

enunciado: "En un mismo bosque, un {escenarios[escenario_idx][0]} es predominantemente ___, mientras que su competidor potencial es {escenarios[escenario_idx][2]}. Esta diferencia de horario permite la coexistencia mediante la partición temporal del nicho."

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
  par_de_aves: [
    ["un colibrí y un carpintero", "néctar", "insectos"],
    ["un zorro y un conejo", "carne", "vegetales"],
    ["un oso y un pez", "frutas", "proteína animal"]
  ]
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

## Sección: partes-planta-germinacion (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["botanica", "anatomia_vegetal"]

variables:
  datos: [["raiz", "absorbe agua y nutrientes del suelo"], ["tallo", "sostiene la planta y transporta agua"], ["hojas", "fabrican el alimento por fotosintesis"], ["flor", "organo reproductivo, produce semillas"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["absorbe agua y nutrientes del suelo", "sostiene la planta y transporta agua", "fabrican el alimento por fotosintesis", "organo reproductivo, produce semillas"]

enunciado: "¿Cuál es la función principal de {datos[idx][0]}?"

explicacion: |
  La función de {datos[idx][0]} es: {datos[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["fruto", "semilla"]

respuesta: verdadero
tipo: vf

enunciado: "El fruto envuelve y protege a la semilla."

explicacion: |
  Correcto, y en muchos casos ayuda a dispersarla.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["semilla", "embrion"]

respuesta: verdadero
tipo: vf

enunciado: "La semilla contiene el embrión de una nueva planta y su reserva de alimento."

explicacion: |
  Correcto, el embrión y su reserva (cotiledones/endospermo) están dentro de la semilla.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["fotosintesis", "raiz"]

respuesta: falso
tipo: vf

enunciado: "La raíz fabrica el alimento de la planta por fotosíntesis."

explicacion: |
  Falso, eso ocurre en las hojas, donde están los cloroplastos.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["semillas"]

respuesta: "Agua, temperatura adecuada y oxígeno"
tipo: mc
opciones_explicitas: ["Agua, temperatura adecuada y oxígeno", "Luz, tierra y agua", "Solo temperatura y luz", "Solo agua y tierra"]

enunciado: "¿Cuáles son las 3 condiciones básicas para que una semilla germine?"

explicacion: |
  Agua (hidrata), temperatura adecuada (activa enzimas) y oxígeno (respiración celular).
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["semillas", "agua"]

respuesta: verdadero
tipo: vf

enunciado: "El agua ablanda la cubierta de la semilla y activa las reacciones químicas internas."

explicacion: |
  Correcto, ese proceso se llama imbibición.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "intermedio"
  tags: ["semillas", "luz"]

respuesta: falso
tipo: vf

enunciado: "La luz es siempre absolutamente necesaria para que una semilla germine."

explicacion: |
  Falso. Muchas semillas germinan bajo tierra en la oscuridad.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["semillas", "respiracion"]

respuesta: verdadero
tipo: vf

enunciado: "El oxígeno es necesario para la respiración celular del embrión durante la germinación."

explicacion: |
  Correcto, el embrión necesita energía para empezar a crecer.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["semilla", "agua"]

respuesta: "imbibicion"
tipo: completar
respuestas_validas: ["imbibicion"]

enunciado: "La primera etapa, donde la semilla absorbe agua y se hincha, se llama ___."

explicacion: |
  Es la imbibición, que activa el metabolismo de la semilla.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["raiz", "tallo"]

respuesta: verdadero
tipo: vf

enunciado: "La radícula (primera raíz) sale antes que el tallo."

explicacion: |
  Correcto, primero se ancla y absorbe agua.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["crecimiento"]

respuesta: falso
tipo: vf

enunciado: "El tallo emerge hacia abajo y la raíz hacia arriba."

explicacion: |
  Falso, es al revés: tallo hacia arriba, raíz hacia abajo.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "intermedio"
  tags: ["etapas", "secuencia"]

variables:
  escenarios: [["imbibicion", 1], ["activacion de reservas", 2], ["emergencia de la radicula", 3], ["emergencia del tallo", 4]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: [1, 2, 3, 4]

enunciado: "¿En qué número de orden ocurre la etapa '{escenarios[idx][0]}' de la germinación?"

explicacion: |
  {escenarios[idx][0]} es la etapa número {escenarios[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["germinacion", "radicula"]

respuesta: verdadero
tipo: vf

enunciado: "La radícula sale primero porque la planta necesita anclarse y absorber agua antes de crecer hacia arriba."

explicacion: |
  Correcto, es prioridad para la supervivencia inicial.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["raiz", "brote"]

respuesta: verdadero
tipo: vf

enunciado: "Sin la raíz, el brote que sale hacia arriba no tendría cómo sostenerse ni alimentarse una vez agotada la reserva de la semilla."

explicacion: |
  Correcto, la raíz da soporte y absorción a largo plazo.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["definicion"]

respuesta: verdadero
tipo: vf

enunciado: "La germinación es el proceso por el cual la semilla comienza a crecer una nueva planta."

explicacion: |
  Correcto, esa es la definición del proceso.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["semilla", "embrion"]

respuesta: falso
tipo: vf

enunciado: "La reserva de alimento inicial del embrión viene de afuera de la semilla, no de la semilla misma."

explicacion: |
  Falso. Viene de dentro de la propia semilla (endospermo o cotiledones).
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "intermedio"
  tags: ["flor", "reproduccion"]

respuesta: verdadero
tipo: vf

enunciado: "La flor produce semillas después de que ocurre la polinización."

explicacion: |
  Correcto: polinización → fecundación → formación de semilla.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "intermedio"
  tags: ["tallo", "transporte"]

respuesta: verdadero
tipo: vf

enunciado: "El tallo transporta agua y nutrientes entre la raíz y las hojas."

explicacion: |
  Correcto, es la vía de conexión entre ambos extremos de la planta.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "avanzado"
  tags: ["excepciones"]

respuesta: verdadero
tipo: vf

enunciado: "No todas las plantas se reproducen por semillas (por ejemplo, los helechos se reproducen por esporas), aunque las semillas sean el método más común y estudiado en este nivel."

explicacion: |
  Correcto — este módulo se enfoca en el caso más común (plantas con semilla), pero hay excepciones en el reino vegetal.
```

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "intermedio"
  tags: ["integracion", "partes"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque las hojas fabrican el alimento por fotosíntesis, necesitan igual el agua que la raíz absorbe del suelo para poder hacer ese proceso."

explicacion: |
  Correcto. La fotosíntesis usa agua (y CO2) como materia prima — sin la raíz absorbiendo agua, las hojas no podrían fotosintetizar.
```

## Sección: piramide-biomasas (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["biomasa"]

respuesta: verdadero
tipo: vf

enunciado: "La biomasa se define como la masa total de materia viva presente en un nivel trófico determinado."

explicacion: |
  Correcto, es la cantidad de materia orgánica de todos los organismos de ese nivel.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["representacion"]

respuesta: verdadero
tipo: vf

enunciado: "Al representar la biomasa de cada nivel trófico con barras apiladas, la figura resultante suele tener forma de pirámide."

explicacion: |
  Correcto, la biomasa disminuye hacia los niveles superiores.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["piramide", "forma"]

respuesta: falso
tipo: vf

enunciado: "En una pirámide de biomasa típica, la base es angosta y la punta es ancha."

explicacion: |
  Falso, es al revés: base ancha (productores), punta angosta (últimos consumidores).
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "intermedio"
  tags: ["regla_del_10"]

respuesta: falso
tipo: vf

enunciado: "La forma piramidal de la biomasa es una coincidencia visual, sin relación con la regla del 10%."

explicacion: |
  Falso, es consecuencia directa de esa regla de transferencia de energía.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  biomasa_productores: uno_de([1000, 5000, 10000, 20000])

respuesta: biomasa_productores * 0.10
tipo: input
tolerancia_abs: 0.1

enunciado: "La biomasa de productores es {biomasa_productores} kg. Con la regla del 10%, ¿cuál es la biomasa aproximada del siguiente nivel?"

explicacion: |
  {biomasa_productores} × 0,10.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "avanzado"
  tags: ["calculo", "niveles_troficos"]

variables:
  biomasa_productores: uno_de([10000, 20000])

respuesta: biomasa_productores * 0.10 * 0.10
tipo: input
tolerancia_abs: 0.1

enunciado: "Si la biomasa de los productores (nivel 1) es {biomasa_productores} kg, ¿cuál es la biomasa aproximada de los consumidores secundarios (2 niveles arriba), aplicando la regla del 10% dos veces?"

pasos:
  - "Nivel 2 (consumidores primarios) = {biomasa_productores} × 0,10"
  - "Nivel 3 (consumidores secundarios) = eso × 0,10"

explicacion: |
  {biomasa_productores} × 0,10 × 0,10.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["ejemplo"]

respuesta: verdadero
tipo: vf

enunciado: "10.000 kg de pasto (productores) sostienen aproximadamente 1.000 kg de consumidores primarios, asumiendo una eficiencia del 10%."

explicacion: |
  Correcto, 10% de 10.000 es 1.000.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["energia"]

respuesta: verdadero
tipo: vf

enunciado: "Debido a la pérdida de ~90% de la energía en cada transferencia, después de 4 o 5 niveles ya no alcanza para sostener una población viable."

explicacion: |
  Correcto, la energía se disipa como calor en cada nivel.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["niveles_troficos"]

respuesta: verdadero
tipo: vf

enunciado: "Las pirámides tróficas reales rara vez tienen más de 4 o 5 niveles."

explicacion: |
  Correcto, por la baja eficiencia de transferencia.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "intermedio"
  tags: ["ciclos_biogeoquimicos"]

respuesta: verdadero
tipo: vf

enunciado: "La materia se recicla indefinidamente, pero la energía fluye en una sola dirección y se agota rápido al subir de nivel."

explicacion: |
  Correcto — ver ../flujo-materia-energia/.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["niveles_troficos"]

respuesta: "4 a 5"
tipo: mc
opciones_explicitas: ["4 a 5", "20 a 30", "infinitos", "siempre exactamente 2"]

enunciado: "¿Cuántos niveles tróficos suele tener como máximo una pirámide real, aproximadamente?"

explicacion: |
  La limitación energética impone un tope de entre 4 y 5 niveles.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["piramides"]

respuesta: verdadero
tipo: vf

enunciado: "Además de la pirámide de biomasa, existen la pirámide de números (cantidad de individuos) y la pirámide de energía."

explicacion: |
  Correcto, son 3 formas de representar lo mismo.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["biomasa"]

respuesta: verdadero
tipo: vf

enunciado: "La pirámide de biomasa es la más común porque es más fácil de medir (pesar) que contar individuos o medir energía directamente."

explicacion: |
  Correcto, pesar es más directo que otras mediciones.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "intermedio"
  tags: ["piramides"]

respuesta: falso
tipo: vf

enunciado: "La pirámide de números nunca se invierte, siempre tiene forma piramidal perfecta."

explicacion: |
  Falso, a veces se invierte: un árbol grande puede sostener miles de insectos.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["biomasa"]

respuesta: "biomasa"
tipo: completar
respuestas_validas: ["biomasa"]

enunciado: "La masa total de materia viva en un nivel trófico se llama ___."

explicacion: |
  Se llama biomasa.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  biomasa_base: uno_de([100000, 500000, 1000000])

respuesta: biomasa_base * 0.1
tipo: input
tolerancia_abs: 1

enunciado: "Si la biomasa de productores es {biomasa_base} kg, ¿cuánta se estima en el segundo nivel trófico (regla del 10%)?"

explicacion: |
  {biomasa_base} × 0,1.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: verdadero
tipo: vf

enunciado: "La regla del 10% que determina la forma piramidal de la biomasa es la misma regla vista en el flujo de materia y energía."

explicacion: |
  Correcto, es el mismo concepto aplicado visualmente.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más alto es el nivel trófico en la pirámide, menos biomasa disponible hay en ese nivel."

explicacion: |
  Correcto, por la pérdida progresiva de energía.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "intermedio"
  tags: ["calculo"]

respuesta: "100 kg"
tipo: mc
opciones_explicitas: ["100 kg", "1000 kg", "10000 kg", "5000 kg"]

enunciado: "Si un ecosistema tiene 10.000 kg de productores, ¿cuánta biomasa aproximada podría sostener en el nivel de consumidores secundarios (dos niveles arriba)?"

pasos:
  - "Nivel 2: 10.000 × 0,1 = 1.000 kg"
  - "Nivel 3: 1.000 × 0,1 = 100 kg"

explicacion: |
  10.000 × 0,1 × 0,1 = 100 kg.
```

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "avanzado"
  tags: ["comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "La pirámide de energía casi nunca se invierte (siempre tiene la forma piramidal clásica), a diferencia de la pirámide de números, que sí puede invertirse en algunos casos."

explicacion: |
  Correcto. Como la energía siempre disminuye en cada transferencia (ley de la termodinámica), la pirámide de energía es la más consistente de las tres.
```

## Sección: presion-arterial (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "presion_arterial_conceptos"
  nivel: "basico"
  tags: ["definicion", "circulacion"]

respuesta: "fuerza"
tipo: completar
respuestas_validas: ["fuerza"]

enunciado: "La presión arterial es la ___ que ejerce la sangre contra las paredes de las arterias."

explicacion: |
  La presión arterial es la fuerza ejercida por la sangre contra las paredes de las arterias mientras el corazón bombea sangre a través de ellas.
```

```
metadata:
  materia: "biologia"
  tema: "presion_arterial_conceptos"
  nivel: "basico"
  tags: ["sistolica", "corazon"]

respuesta: "sistólica"
tipo: mc
opciones_explicitas: ["sistólica", "diastólica", "media", "pulsátil"]

enunciado: "El valor de la presión arterial que representa la presión en las arterias cuando el corazón se contrae se denomina presión _______."

explicacion: |
  La presión sistólica ocurre durante la contracción del ventrículo izquierdo.
```

```
metadata:
  materia: "biologia"
  tema: "presion_arterial_conceptos"
  nivel: "basico"
  tags: ["diastolica", "corazon"]

respuesta: "diastólica"
tipo: mc
opciones_explicitas: ["sistólica", "diastólica", "capilar", "venosa"]

enunciado: "El valor de la presión arterial que representa la presión en las arterias cuando el corazón está en reposo entre latidos se denomina presión _______."

explicacion: |
  La presión diastólica es la presión mínima en las arterias durante el periodo de relajación cardíaca.
```

```
metadata:
  materia: "biologia"
  tema: "presion_arterial_unidades"
  nivel: "basico"
  tags: ["unidades", "medicion"]

respuesta: "mmHg"
tipo: completar
respuestas_validas: ["mmHg", "mm Hg", "milímetros de mercurio"]

enunciado: "La presión arterial se mide comúnmente en unidades de _______."

explicacion: |
  La unidad estándar es el milímetro de mercurio (mmHg).
```

```
metadata:
  materia: "biologia"
  tema: "presion_arterial_conceptos"
  nivel: "basico"
  tags: ["lectura"]

respuesta: "120/80"
tipo: mc
opciones_explicitas: ["120/80", "80/120", "120/120", "80/80"]

enunciado: "Si una persona tiene una presión de 120/80 mmHg, ¿cuál es la forma correcta de expresar sus valores sistólico y diastólico?"

explicacion: |
  El primer valor es la sistólica y el segundo es la diastólica.
```

```
metadata:
  materia: "biologia"
  tema: "procedimiento_medicion"
  nivel: "intermedio"
  tags: ["pasos", "esfigmomanometro"]

respuesta: ["inflar el manguito", "desinflar lentamente", "escuchar ruidos de Korotkoff"]
tipo: ordenar
opciones_explicitas: ["inflar el manguito", "desinflar lentamente", "escuchar ruidos de Korotkoff"]

enunciado: "Ordena los pasos lógicos para la toma de presión arterial manual:"

explicacion: |
  Primero se infla el manguito para ocluir la arteria, luego se desinfla para permitir el flujo y se escuchan los sonidos.
```

```
metadata:
  materia: "biologia"
  tema: "fisiologia_presion"
  nivel: "intermedio"
  tags: ["resistencia", "vasos"]

respuesta: "aumenta"
tipo: completar
respuestas_validas: ["aumenta", "disminuye"]

enunciado: "Si el diámetro de las arterias se reduce (vasoconstricción), la resistencia periférica _______ y, por lo tanto, la presión arterial aumenta."

explicacion: |
  A menor diámetro, mayor es la resistencia al flujo sanguíneo.
```

```
metadata:
  materia: "biologia"
  tema: "fisiologia_presion"
  nivel: "intermedio"
  tags: ["gasto_cardiaco"]

respuesta: "verdadero"
tipo: completar
enunciado: "Un aumento en el volumen de sangre expulsado por el corazón en cada latido (volumen sistólico) tiende a elevar la presión arterial."

explicacion: |
  Mayor volumen de sangre circulando bajo la misma resistencia eleva la presión.
```

```
metadata:
  materia: "biologia"
  tema: "factores_externos"
  nivel: "intermedio"
  tags: ["error", "medicion"]

respuesta: "falso"
tipo: completar
enunciado: "Realizar una toma de presión con el brazo por debajo del nivel del corazón no afecta el resultado de la lectura."

explicacion: |
  La posición del brazo respecto al corazón es crítica; si el brazo está bajo el nivel del corazón, la lectura será falsamente alta.
```

```
metadata:
  materia: "biologia"
  tema: "fisiologia_presion"
  nivel: "intermedio"
  tags: ["componentes"]

respuesta: "corazón"
tipo: completar
respuestas_validas: ["corazón", "pulmones"]

enunciado: "La presión arterial depende principalmente del gasto del _______ y la resistencia de los vasos sanguíneos."

explicacion: |
  El corazón actúa como la bomba que genera el flujo y la presión.
```

```
metadata:
  materia: "biologia"
  tema: "valores_clinicos"
  nivel: "intermedio"
  tags: ["normalidad"]

respuesta: "120/80"
tipo: mc
opciones_explicitas: ["120/80", "140/90", "110/70", "130/85"]

enunciado: "Según las guías generales, un valor de presión arterial considerado óptimo o normal es aproximadamente:"

explicacion: |
  Aunque varía según la edad, 120/80 mmHg es el estándar de referencia para normalidad.
```

```
metadata:
  materia: "biologia"
  tema: "patologia_presion"
  nivel: "avanzado"
  tags: ["hipertension"]

respuesta: "hipertensión"
tipo: completar
respuestas_validas: ["hipertensión"]

enunciado: "Cuando la presión sistólica es consistentemente mayor a 140 mmHg, se diagnostica _______."

explicacion: |
  La hipertensión se define por valores elevados de presión en el sistema arterial.
```

```
metadata:
  materia: "biologia"
  tema: "patologia_presion"
  nivel: "intermedio"
  tags: ["hipotension"]

respuesta: "baja"
tipo: mc
opciones_explicitas: ["baja", "alta", "estable", "irregular"]

enunciado: "La hipotensión se caracteriza por tener una presión arterial _______."

explicacion: |
  Hipotensión es la disminución de la presión arterial por debajo de los niveles normales.
```

```
metadata:
  materia: "biologia"
  tema: "calculo_presion"
  nivel: "avanzado"
  tags: ["calculo"]

respuesta: 40
tipo: completar
tolerancia_abs: 0

enunciado: "Si una persona tiene una presión de 120/80 mmHg, ¿cuál es su presión de pulso (diferencia entre sistólica y diastólica)?"

pasos:
  - "Restar la presión diastólica de la sistólica (120 - 80)."

explicacion: |
  La presión de pulso es la diferencia entre la presión sistólica y la diastólica.
```

```
metadata:
  materia: "biologia"
  tema: "factores_biologicos"
  nivel: "intermedio"
  tags: ["edad"]

respuesta: "verdadero"
tipo: completar
enunciado: "La rigidez de las arterias asociada al envejecimiento suele provocar un aumento en la presión sistólica."

explicacion: |
  Con la edad, las arterias pierden elasticidad, lo que incrementa la presión sistólica.
```

```
metadata:
  materia: "biologia"
  tema: "comparacion_vasos"
  nivel: "intermedio"
  tags: ["arterias", "venas"]

respuesta: "arterias"
tipo: completar
respuestas_validas: ["arterias", "venas"]

enunciado: "La presión arterial es significativamente más alta en las _______ que en las venas."

explicacion: |
  Las arterias transportan sangre a alta presión desde el corazón, mientras que las venas lo hacen a baja presión.
```

```
metadata:
  materia: "biologia"
  tema: "factores_estres"
  nivel: "intermedio"
  tags: ["estres", "adrenalina"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene", "desaparece"]

enunciado: "Durante una situación de estrés agudo, la liberación de adrenalina provoca que la presión arterial _______."

explicacion: |
  La adrenalina causa vasoconstricción y aumenta la frecuencia cardíaca, elevando la presión.
```

```
metadata:
  materia: "biologia"
  tema: "error_medicion"
  nivel: "avanzado"
  tags: ["manguito", "tamaño"]

respuesta: "falsamente alta"
tipo: completar
respuestas_validas: ["falsamente alta", "falsamente baja"]

enunciado: "Si el manguito es demasiado pequeño para el brazo del paciente, la lectura será _______."

explicacion: |
  Un manguito pequeño requiere más presión para ocluir la arteria, dando un valor erróneo superior al real.
```

```
metadata:
  materia: "biologia"
  tema: "comparacion"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "mayor"
tipo: completar
enunciado: "La presión sistólica es siempre mayor que la presión diastólica."

explicacion: |
  Por definición, la sistólica es el pico de presión y la diastólica es el mínimo.
```

```
metadata:
  materia: "biologia"
  tema: "ejercicio_fisico"
  nivel: "intermedio"
  tags: ["ejercicio"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se estabiliza", "cae"]

enunciado: "Durante el ejercicio físico intenso, la presión arterial sistólica suele _______."

explicacion: |
  El aumento del gasto cardíaco durante el ejercicio eleva la presión sistólica.
```

```
metadata:
  materia: "biologia"
  tema: "escenario_clinico"
  nivel: "avanzado"
  tags: ["deshidratacion", "volumen"]

respuesta: "disminuye"
tipo: completar
respuestas_validas: ["disminuye", "aumenta"]

enunciado: "En un paciente con deshidratación severa, el volumen sanguíneo total disminuye, lo que causa que la presión arterial _______."

explicacion: |
  Menos volumen de fluido en el sistema circulatorio reduce la presión ejercida contra las paredes.
```

```
metadata:
  materia: "biologia"
  tema: "escenario_clinico"
  nivel: "avanzado"
  tags: ["vasodilatacion"]

respuesta: "baja"
tipo: mc
opciones_explicitas: ["baja", "sube", "se mantiene", "oscila"]

enunciado: "Si un fármaco produce una vasodilatación masiva en las arterias, la presión arterial _______."

explicacion: |
  La vasodilatación reduce la resistencia periférica, lo que disminuye la presión.
```

```
metadata:
  materia: "biologia"
  tema: "sustancias_estimulantes"
  nivel: "intermedio"
  tags: ["cafeina", "estimulante"]

respuesta: "aumenta"
tipo: completar
enunciado: "El consumo de grandes cantidades de cafeína puede provocar un aumento temporal de la presión arterial."

explicacion: |
  La cafeína es un estimulante que puede elevar la presión arterial y la frecuencia cardíaca.
```

```
metadata:
  materia: "biologia"
  tema: "escenario_clinico"
  nivel: "avanzado"
  tags: ["postura"]

respuesta: "incorrecta"
tipo: completar
respuestas_validas: ["incorrecta", "correcta"]

enunciado: "Si el paciente tiene las piernas cruzadas durante la toma de presión, la lectura obtenida será _______."

explicacion: |
  Cruzar las piernas aumenta la presión arterial sistólica en la medición.
```

```
metadata:
  materia: "biologia"
  tema: "nutricion_presion"
  nivel: "intermedio"
  tags: ["sodio", "dieta"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "no cambia", "baja"]

enunciado: "Una dieta con un contenido muy elevado de sodio (sal) tiende a _______ la presión arterial a largo plazo."

explicacion: |
  El sodio retiene agua en el torrente sanguíneo, aumentando el volumen y la presión.
```
