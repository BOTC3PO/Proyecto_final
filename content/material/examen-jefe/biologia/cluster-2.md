# Examen jefe — [PENDIENTE #862]

> Logro #862. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **100 preguntas totales** en 5/5 secciones.

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
respuestas_validas:
  - "celular"

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
  escenario: [["aire", "pocos minutos"], ["agua", "pocos días"], ["alimento", "semanas"]]
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

## Sección: ser-vivo-caracteristicas (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["caracteristicas", "vida"]

variables:
  tabla: [["organizacion", "esta formado por una o mas celulas"], ["nutricion", "obtiene y procesa materia y energia"], ["reproduccion", "genera nuevos individuos de su misma especie"], ["homeostasis", "mantiene su ambiente interno estable"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["esta formado por una o mas celulas", "obtiene y procesa materia y energia", "genera nuevos individuos de su misma especie", "mantiene su ambiente interno estable"]

enunciado: "¿Qué significa la característica {tabla[idx][0]}?"

explicacion: |
  {tabla[idx][0]} significa: {tabla[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["irritabilidad", "estimulos"]

respuesta: verdadero
tipo: vf

enunciado: "La irritabilidad es la capacidad de reaccionar a cambios del ambiente, como luz, calor o contacto."

explicacion: |
  Correcto. Permite responder a estímulos para sobrevivir.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["crecimiento"]

respuesta: verdadero
tipo: vf

enunciado: "El crecimiento significa aumentar de tamaño o cantidad de células a lo largo del tiempo."

explicacion: |
  Correcto, ocurre por aumento de tamaño celular o por división celular.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["metabolismo", "respiracion"]

respuesta: "respiracion"
tipo: completar
respuestas_validas:
  - "respiracion"

enunciado: "Liberar la energía guardada en el alimento se llama ___."

explicacion: |
  La respiración celular transforma la energía de los nutrientes en energía utilizable.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["evolucion", "adaptacion"]

respuesta: verdadero
tipo: vf

enunciado: "La adaptación es que la especie cambia con el tiempo para ajustarse mejor al ambiente."

explicacion: |
  Correcto — ver ../seleccion-natural/.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["reproduccion", "mula"]

respuesta: verdadero
tipo: vf

enunciado: "La mula (cruza de caballo y burro) es considerada un ser vivo, aunque no pueda reproducirse."

explicacion: |
  Cumple el resto de las funciones vitales — la esterilidad no la excluye de ser un ser vivo.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "intermedio"
  tags: ["definicion", "excepciones"]

respuesta: falso
tipo: vf

enunciado: "Si un individuo no cumple una característica general (como reproducirse), deja de ser considerado ser vivo automáticamente."

explicacion: |
  Falso. La lista describe el patrón general, no una regla sin excepción para cada individuo — hay híbridos estériles que igual son seres vivos.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["reproduccion", "genetica"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque la mula sea estéril, sus especies de origen (caballo y burro) sí pueden reproducirse."

explicacion: |
  Correcto. La esterilidad es del híbrido, no de las especies parentales.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["virus", "celula"]

respuesta: verdadero
tipo: vf

enunciado: "Los virus carecen de organización celular propia (no tienen membrana, citoplasma ni organelos)."

explicacion: |
  Correcto. Son agentes acelulares, no células.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["virus", "metabolismo"]

respuesta: falso
tipo: vf

enunciado: "Los virus se alimentan por sí mismos, con procesos metabólicos independientes, como una célula normal."

explicacion: |
  Falso. No tienen metabolismo propio.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "intermedio"
  tags: ["virus", "reproduccion"]

respuesta: verdadero
tipo: vf

enunciado: "Los virus sólo pueden reproducirse usando la maquinaria de una célula que infectan."

explicacion: |
  Correcto — ver ../microbiologia-virus-inmunitario/.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "intermedio"
  tags: ["virus", "debate"]

respuesta: verdadero
tipo: vf

enunciado: "Existe debate científico sobre si los virus deben clasificarse como seres vivos o no."

explicacion: |
  Correcto, por su falta de metabolismo y reproducción autónoma.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: verdadero
tipo: vf

enunciado: "Para ser considerado ser vivo, un organismo debe cumplir un conjunto de características (nutrición, reproducción, respuesta a estímulos, etc.)."

explicacion: |
  Correcto, esa es la base de la definición biológica de vida.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["caracteristicas"]

respuesta: "Tener siempre color verde"
tipo: mc
opciones_explicitas: ["Nutrición", "Reproducción", "Tener siempre color verde", "Crecimiento"]

enunciado: "¿Cuál de estas NO es una característica esencial de todos los seres vivos?"

explicacion: |
  El color verde no es universal (sólo aparece en organismos fotosintéticos con clorofila); nutrición, reproducción y crecimiento sí lo son.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["ejemplos"]

respuesta: verdadero
tipo: vf

enunciado: "Las plantas, la célula y los ciclos de vida son ejemplos concretos que ilustran estas mismas características generales."

explicacion: |
  Correcto, son "instancias" de las características de todo ser vivo.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["comparacion"]

respuesta: falso
tipo: vf

enunciado: "Un objeto inerte, como una piedra, puede realizar procesos de nutrición y reproducción."

explicacion: |
  Falso, esos procesos son exclusivos de los sistemas biológicos.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "intermedio"
  tags: ["homeostasis"]

respuesta: verdadero
tipo: vf

enunciado: "La homeostasis permite que el ambiente interno de un ser vivo se mantenga relativamente estable, aunque el ambiente externo cambie mucho."

explicacion: |
  Correcto, por ejemplo mantener la temperatura corporal aunque haga frío o calor afuera.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "avanzado"
  tags: ["conceptos", "casos_limite"]

respuesta: falso
tipo: vf

enunciado: "El fuego, que crece, se reproduce (propaga) y consume 'alimento' (combustible), es considerado un ser vivo porque cumple algunas de estas características."

explicacion: |
  Falso. Aunque comparte alguna característica superficial, el fuego no tiene organización celular, no responde a estímulos de forma coordinada ni tiene material genético — cumplir una o dos características sueltas no alcanza para ser considerado ser vivo.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "intermedio"
  tags: ["organizacion", "celula"]

respuesta: verdadero
tipo: vf

enunciado: "Todo ser vivo conocido (con la excepción discutida de los virus) está formado por al menos una célula."

explicacion: |
  Correcto — desde organismos unicelulares (una sola célula) hasta pluricelulares (muchas), la célula es la unidad básica.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "avanzado"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Todas las características de los seres vivos tienen la misma importancia y ninguna depende de las otras."

explicacion: |
  Falso. Por ejemplo, sin nutrición (obtener energía) no hay crecimiento posible, y sin organización celular no hay ninguna de las demás funciones — hay dependencias entre ellas, no son totalmente independientes.
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
respuestas_validas:
  - "adulto"

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
respuestas_validas:
  - "adulto"

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
respuestas_validas:
  - "dominio"

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

