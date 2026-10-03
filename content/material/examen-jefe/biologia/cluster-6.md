# Examen jefe — [PENDIENTE #866]

> Logro #866. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **109 preguntas totales** en 5/5 secciones.

---

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
respuestas_validas:
  - "imbibicion"

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
tipo: completar
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
tipo: completar
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
respuestas_validas:
  - "biomasa"

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
tipo: completar
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

## Sección: quimiosintesis (22 preguntas)

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["definicion", "organismos"]

respuesta: verdadero
tipo: vf

enunciado: "La quimiosíntesis es un proceso mediante el cual ciertos organismos producen materia orgánica utilizando la energía de reacciones químicas inorgánicas, en lugar de la luz solar."

explicacion: |
  La quimiosíntesis se define precisamente por el uso de energía química (oxidación de sustratos inorgánicos) para fijar carbono, a diferencia de la fotosíntesis que usa luz.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["bacterias", "arqueas"]

respuesta: verdadero
tipo: vf

enunciado: "Las bacterias y las arqueas son los principales organismos capaces de realizar quimiosíntesis."

explicacion: |
  Estos procariotas son los productores primarios en ecosistemas quimiosintéticos. Los eucariotas no realizan este proceso directamente.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["ecosistemas", "fuentes_hidrotermales"]

respuesta: verdadero
tipo: vf

enunciado: "Las fuentes hidrotermales del fondo oceánico son un ejemplo clásico de ecosistema donde predomina la quimiosíntesis."

explicacion: |
  En estas profundidades no llega la luz solar, por lo que la vida depende completamente de la energía química liberada por las bacterias quimiosintéticas.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["ciclo_nitrogeno", "fertilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Las bacterias quimiosintéticas nitrificantes transforman el nitrógeno en formas que las plantas pueden absorber, contribuyendo a la fertilidad del suelo."

explicacion: |
  Al convertir amoníaco en nitrato, hacen el nitrógeno disponible para la absorción radicular por parte de las plantas.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["calvin", "fijacion"]

respuesta: verdadero
tipo: vf

enunciado: "La fijación de carbono en la quimiosíntesis ocurre mediante un proceso similar al ciclo de Calvin utilizado en la fotosíntesis."

explicacion: |
  Ambas usan el ciclo de Calvin para incorporar CO2 en moléculas orgánicas, diferenciándose solo en la fuente de energía (ATP/NADPH de luz vs. de química).
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["ambientes", "oscuridad"]

respuesta: verdadero
tipo: vf

enunciado: "La quimiosíntesis permite la vida en ambientes donde la luz solar no llega."

explicacion: |
  Es fundamental en cuevas profundas, fondos oceánicos y subsuelo, demostrando la independencia del sol para la biosfera.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["ciclos", "regulacion"]

respuesta: verdadero
tipo: vf

enunciado: "Las bacterias quimiosintéticas juegan un papel vital en la regulación de elementos como el nitrógeno, el azufre y el hierro."

explicacion: |
  Al oxidar estos elementos, los transforman entre sus diferentes estados de oxidación, manteniendo los ciclos biogeoquímicos en movimiento.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["autotrofo", "independencia"]

respuesta: verdadero
tipo: vf

enunciado: "La quimiosíntesis demuestra que la energía química puede sostener ecosistemas completos de manera independiente del sol."

explicacion: |
  Es la prueba biológica de que la vida no requiere necesariamente la fotosíntesis para existir.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["biodiversidad", "habitats"]

respuesta: verdadero
tipo: vf

enunciado: "Sin las bacterias quimiosintéticas, muchos hábitats profundos y aislados serían incapaces de sostener vida compleja."

explicacion: |
  Son la base trófica exclusiva en estos ambientes, permitiendo la existencia de gusanos tubícolas, crustáceos y otros organismos.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["calvin", "mecanismo"]

respuesta: verdadero
tipo: vf

enunciado: "La fijación de carbono en la quimiosíntesis utiliza un mecanismo bioquímicamente similar al ciclo de Calvin de la fotosíntesis."

explicacion: |
  La enzima RuBisCO y el camino metabólico son esencialmente los mismos; la diferencia radica en la fuente de poder (ATP/NADPH).
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["global", "significado"]

respuesta: verdadero
tipo: vf

enunciado: "La quimiosíntesis es fundamental para la comprensión de la biodiversidad y los ciclos biogeoquímicos globales."

explicacion: |
  Contribuye a la fertilidad del suelo, la calidad del agua y la existencia de vida en condiciones extremas, impactando el planeta entero.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["definicion", "organismos"]

respuesta: "bacterias y arqueas"
tipo: completar
respuestas_validas:
  - "bacterias y arqueas"
  - "bacterias"
  - "arqueas"

enunciado: "La quimiosíntesis es un proceso llevado a cabo principalmente por ___ que producen su propio alimento."

explicacion: |
  A diferencia de los organismos fotosintéticos, las bacterias y arqueas quimiosintéticas utilizan energía química inorgánica para sintetizar materia orgánica.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["energia", "comparacion"]

respuesta: "reacciones químicas inorgánicas"
tipo: completar

enunciado: "Mientras la fotosíntesis usa luz solar, la quimiosíntesis obtiene energía de ___."

explicacion: |
  La clave de la quimiosíntesis es la oxidación de compuestos inorgánicos (como sulfuro de hidrógeno o amoníaco) para obtener la energía necesaria para fijar el carbono.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["ecologia", "productores"]

respuesta: "productores primarios"
tipo: completar

enunciado: "En ecosistemas extremos sin luz, las bacterias quimiosintéticas actúan como ___."

explicacion: |
  Estas bacterias forman la base de la cadena alimentaria en hábitats como las fuentes hidrotermales, al igual que las plantas en ecosistemas terrestres.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["sustratos", "azufre"]

respuesta: "sulfuro de hidrógeno"
tipo: input

enunciado: "¿Qué compuesto oxidan las bacterias sulfurosas para obtener energía? (Escribe el nombre químico)"

explicacion: |
  Las bacterias sulfurosas oxidan el sulfuro de hidrógeno ($H_2S$) produciendo ácido sulfúrico como subproducto.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["nitrificacion", "nitrogeno"]

respuesta: "nitrato"
tipo: input
respuestas_validas:
  - "nitrato"
  - "NO3-"
  - "NO3"

enunciado: "En la nitrificación, las bacterias oxidan primero amoníaco ($NH_3$) a nitrito ($NO_2^-$) y luego a ___."

explicacion: |
  El primer paso de la nitrificación convierte amoníaco en nitrito ($NO_2^-$). El segundo paso convierte nitrito en nitrato ($NO_3^-$).
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["habitat", "hidrotermal"]

respuesta: "fuentes hidrotermales"
tipo: input

enunciado: "¿En qué tipo de ambiente se encuentra comúnmente la quimiosíntesis? (Escribe el nombre del ambiente)"

explicacion: |
  Las fuentes hidrotermales del fondo oceánico son el ejemplo clásico donde la luz solar no llega y la quimiosíntesis sostiene la vida.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["ATP", "bioquimica"]

respuesta: "ATP"
tipo: input

enunciado: "La energía liberada en la oxidación inorgánica se almacena temporalmente en moléculas de ___."

explicacion: |
  Similar a la fotosíntesis, la energía química se convierte en ATP para ser utilizada en la fijación de carbono.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["carbono", "comparacion"]

respuesta: "dióxido de carbono"
tipo: input

enunciado: "Tanto la fotosíntesis como la quimiosíntesis utilizan ___ como fuente de carbono."

explicacion: |
  Ambas procesos fijan el carbono inorgánico ($CO_2$) para producir materia orgánica, pero difieren en la fuente de energía.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "avanzado"
  tags: ["ciclo", "calvin"]

respuesta: "Calvin"
tipo: input

enunciado: "La fijación de carbono en bacterias quimiosintéticas ocurre mediante un mecanismo similar al ciclo de ___ de las plantas."

explicacion: |
  El ciclo de Calvin es utilizado para convertir $CO_2$ en glucosa, utilizando el ATP y NADPH generados por la oxidación inorgánica.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["crecimiento", "comparacion"]

respuesta: "lenta"
tipo: input

enunciado: "Las comunidades quimiosintéticas suelen tener tasas de crecimiento ___ comparadas con las fotosintéticas."

explicacion: |
  La energía obtenida de la oxidación de compuestos inorgánicos es menor que la de la fotosíntesis, lo que resulta en crecimiento más lento.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["ecologia", "base"]

respuesta: 1
tipo: input

enunciado: "En un ecosistema quimiosintético, ¿cuántos tipos de productores primarios existen típicamente (solo bacterias/quimiosíntesis)?"

explicacion: |
  En estos ecosistemas extremos, las bacterias quimiosintéticas son los únicos productores primarios (1 tipo principal).
```

## Sección: seleccion-natural (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "darwinismo"]

respuesta: "proceso mediante el cual los organismos mejor adaptados a su entorno tienen mayores probabilidades de sobrevivir y reproducirse"
tipo: completar
respuestas_validas:
  - "proceso mediante el cual los organismos mejor adaptados a su entorno tienen mayores probabilidades de sobrevivir y reproducirse"

enunciado: "La selección natural es el ___ que permite la evolución de las poblaciones."

explicacion: |
  La selección natural no es un proceso consciente, sino un mecanismo donde las variaciones que favorecen la supervivencia se vuelven más comunes en las siguientes generaciones.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["variacion", "herencia"]

respuesta: "variación heredable"
tipo: completar
respuestas_validas:
  - "variación heredable"
  - "variación genética"

enunciado: "Para que la selección natural actúe, debe existir una ___ entre los individuos de una misma población, la cual debe poder transmitirse a la descendencia."

explicacion: |
  Si los rasgos adquiridos durante la vida (como el músculo de un atleta) no son heredables, no pueden ser seleccionados por la evolución.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["presion_ambiental", "adaptacion"]

variables:
  escenario: uno_de([["un cambio brusco en la temperatura del clima", "el calor extremo"], ["la presencia de un nuevo depredador en el bosque", "la depredación"], ["la escasez de un tipo específico de alimento", "la falta de alimento"]])

respuesta: "presión ambiental"
tipo: completar
respuestas_validas:
  - "presión ambiental"

enunciado: "Cuando ocurre {escenario[0]}, se genera una ___ que actúa como filtro sobre las características de los individuos."

explicacion: |
  La presión ambiental es el factor externo (clima, depredadores, comida) que determina qué rasgos son ventajosos y cuáles no.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["reproduccion", "fitness"]

respuesta: "reproducción diferencial"
tipo: completar
respuestas_validas:
  - "reproducción diferencial"

enunciado: "El éxito de la selección natural depende de la ___: la capacidad de ciertos individuos para dejar más descendencia que otros."

explicacion: |
  No basta con sobrevivir; el objetivo biológico es pasar los genes a la siguiente generación. Si un individuo vive mucho pero no tiene hijos, su ventaja evolutiva es nula.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "avanzado"
  tags: ["mecanismo", "resumen"]

respuesta: verdadero
tipo: vf

enunciado: "El mecanismo de la selección natural requiere de tres condiciones fundamentales: variación heredable, presión ambiental y reproducción diferencial."

explicacion: |
  Sin estos tres elementos, el proceso evolutivo por selección natural no puede ocurrir. La combinación de estos factores es lo que impulsa la adaptación.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "variacion"]

respuesta: falso
tipo: vf

enunciado: "¿La selección natural es el mecanismo que crea nuevas variaciones genéticas en una población para que los individuos se adapten?"

explicacion: |
  Falso. La selección natural actúa sobre la variación ya existente (causada por mutaciones y recombinación). La selección no "crea" rasgos nuevos, solo "filtra" los que ya están presentes.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "adaptacion"]

respuesta: falso
tipo: vf

enunciado: "¿Los individuos cambian sus características físicas de forma voluntaria o por esfuerzo para adaptarse mejor a su entorno?"

explicacion: |
  Falso. La adaptación no es un proceso consciente ni voluntario. Los individuos nacen con ciertas características; aquellos que tienen rasgos favorables para su ambiente tienen más éxito reproductivo, pero no "deciden" cambiar.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["evolucion", "fitness"]

respuesta: falso
tipo: vf

enunciado: "¿En el contexto de la selección natural, ser 'el más apto' significa necesariamente ser el individuo más fuerte y agresivo del grupo?"

explicacion: |
  Falso. El concepto biológico de "fitness" o aptitud se refiere a la capacidad de un organismo para sobrevivir y, fundamentalmente, dejar descendencia con éxito. A veces, ser el más pequeño o el más discreto es lo que permite sobrevivir y reproducirse.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["evolucion", "teleologia"]

respuesta: falso
tipo: vf

enunciado: "¿La selección natural tiene como objetivo final alcanzar la perfección biológica de una especie?"

explicacion: |
  Falso. La evolución no tiene un objetivo ni busca la "perfección". Es un proceso reactivo a las condiciones ambientales actuales. Lo que es "bueno" hoy puede dejar de serlo si el clima o los depredadores cambian mañana.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "herencia"]

respuesta: falso
tipo: vf

enunciado: "¿La selección natural actúa directamente sobre los genes de un individuo para modificarlos durante su vida?"

explicacion: |
  Falso. La selección natural actúa sobre el fenotipo (la expresión de los rasgos) de los individuos. Los cambios en la frecuencia de los genes ocurren a través de las generaciones, no mediante la modificación de los genes de un individuo que ya ha nacido.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["darwin", "pinzones", "evolucion"]

opciones_explicitas: ["picos más grandes y fuertes", "picos más largos y finos", "picos más cortos y planos", "picos de colores brillantes"]
respuesta: "picos más grandes y fuertes"
tipo: mc

enunciado: "En una isla donde la principal fuente de alimento son las semillas grandes y duras, ¿qué característica de los pinzones presentará una ventaja adaptativa para la supervivencia?"

explicacion: |
  Los individuos con picos más grandes y fuertes pueden romper las semillas duras, obteniendo energía de una fuente que otros no pueden aprovechar. Esto aumenta su probabilidad de sobrevivir y reproducirse.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["mecanismos", "evolucion"]

opciones_explicitas: ["Variabilidad", "Selección natural", "Herencia"]
respuesta_orden: ["Variabilidad", "Selección natural", "Herencia"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que permiten que la selección natural actúe sobre una población de pinzones para que aparezca una nueva adaptación:"

explicacion: |
  Primero debe existir variabilidad (diferentes picos), luego la selección natural actúa sobre esa variabilidad según el ambiente, y finalmente la herencia permite que los rasgos exitosos pasen a la siguiente generación.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["ambiente", "supervivencia"]

opciones_explicitas: ["determina", "causa", "crea", "provoca"]
respuesta: "determina"
tipo: mc

enunciado: "El tipo de alimento disponible en una isla de Galápagos ___ la presión selectiva sobre la forma del pico de los pinzones."

explicacion: |
  El ambiente no "crea" la mutación, sino que "determina" qué rasgos existentes son ventajosos o desfavorables para la supervivencia en ese contexto específico.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["terminologia", "adaptacion"]

respuesta: "adaptación"
tipo: completar
respuestas_validas:
  - "adaptación"
  - "adaptacion"

enunciado: "Cuando un grupo de pinzones desarrolla un pico especializado para un tipo de semilla predominante en su isla, se dice que la población ha desarrollado una ___."

explicacion: |
  Una adaptación es un rasgo heredado que aumenta la capacidad de un organismo para sobrevivir y reproducirse en un ambiente determinado.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "avanzado"
  tags: ["conceptos_clave", "reproduccion"]

variables:
  caso: uno_de([["picos finos", "semillas pequeñas"], ["picos gruesos", "semillas grandes"]])

opciones_explicitas: ["falla", "éxito", "mutación", "estancamiento"]
respuesta: "éxito"
tipo: mc

enunciado: "Si en una isla predominan las {caso[1]}, los pinzones con picos tipo {caso[0]} tendrán un ___ reproductivo mayor debido a la disponibilidad de alimento."

explicacion: |
  El éxito reproductivo (fitness) se define por la capacidad de un individuo para sobrevivir y dejar descendencia con las características ventajosas en su entorno.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "adaptacion", "biston_betularia"]

respuesta: "claro"
tipo: completar
respuestas_validas:
  - "claro"

enunciado: "En las poblaciones de la polilla Biston betularia antes de la Revolución Industrial, la mayoría de los individuos presentaban un color ___ debido a que los troncos de los árboles estaban cubiertos de líquenes claros."

explicacion: |
  Antes de la industrialización, los líquenes claros en los árboles proporcionaban un camuflaje ideal para las polillas de color claro, permitiéndoles evitar a los depredadores.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["seleccion_natural", "camuflaje", "biston_betularia"]

opciones_explicitas: ["El aumento de la temperatura", "La mayor visibilidad de las polillas claras ante los depredadores", "La desaparición de los depredadores", "La mutación espontánea por el hollín"]
respuesta: "La mayor visibilidad de las polillas claras ante los depredadores"
tipo: mc

enunciado: "Durante la Revolución Industrial, la contaminación por hollín oscureció los troncos de los árboles. ¿Cuál fue el principal factor de cambio en la población de polillas?"

explicacion: |
  El hollín eliminó el camuflaje de las polillas claras, haciendo que los pájaros las detectaran y devoraran con mayor facilidad. Esto es un ejemplo de presión de selección ambiental.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["supervivencia", "reproduccion", "biston_betularia"]

respuesta: "oscuro"
tipo: completar
respuestas_validas:
  - "oscuro"

enunciado: "En un ambiente con troncos oscurecidos por el hollín, las polillas de color ___ tienen una mayor probabilidad de sobrevivir y reproducirse."

explicacion: |
  La supervivencia diferencial es clave: los individuos con el fenotipo que mejor se camufla en el nuevo ambiente tienen más éxito reproductivo.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "avanzado"
  tags: ["frecuencia_alelica", "evolucion"]

opciones_explicitas: ["Disminuye", "Se mantiene constante", "Aumenta", "Desaparece"]
respuesta: "Aumenta"
tipo: mc

enunciado: "Si la supervivencia de las polillas oscuras aumenta debido al camuflaje en árboles contaminados, ¿qué sucede con la frecuencia de sus genes en la siguiente generación?"

explicacion: |
  La evolución se define como el cambio en las frecuencias alélicas de una población a lo largo del tiempo. Al sobrevivir más, las polillas oscuras pasan más genes a su descendencia.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: "fenotipos"
tipo: completar
respuestas_validas:
  - "fenotipos"
  - "fenotipo"

enunciado: "La selección natural actúa sobre los ___ de los individuos, permitiendo que aquellos con rasgos ventajosos sobrevivan mejor en un ambiente determinado."

explicacion: |
  La selección natural no actúa directamente sobre los genes, sino sobre el fenotipo (la expresión física de los rasgos), que es lo que los depredadores ven y lo que determina la supervivencia.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "antibioticos"]

respuesta: "selección"
tipo: completar
respuestas_validas:
  - "selección"
  - "seleccion"

enunciado: "La resistencia a los antibióticos es un ejemplo de ___ natural, donde el fármaco actúa como un factor de presión ambiental."

explicacion: |
  La selección natural no crea la resistencia, sino que actúa sobre variaciones preexistentes. Los individuos que ya poseen mutaciones que les permiten sobrevivir al antibiótico son los que logran reproducirse, transmitiendo esa característica a la siguiente generación.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["mutacion", "genetica"]

respuesta: "mutación previa"
tipo: completar
respuestas_validas:
  - "mutación previa"
  - "mutacion previa"

enunciado: "En un entorno con presencia de antibióticos, la supervivencia de una población bacteriana depende de una ___ que ocurrió antes del contacto con el fármaco."

pasos:
  - "Identificar si la mutación ocurre por necesidad o por azar."
  - "Relacionar la mutación con la capacidad de supervivencia en el entorno actual."

explicacion: |
  Es un error común pensar que las bacterias "se adaptan" para sobrevivir al antibiótico. La mutación es un evento aleatorio que ocurre antes de la presión selectiva. El antibiótico solo "selecciona" a los que ya eran resistentes.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["poblacion", "supervivencia"]

respuesta: "aumenta"
tipo: completar
respuestas_validas:
  - "aumenta"

enunciado: "Si un pesticida elimina a todos los insectos sensibles pero no a los que poseen una mutación de resistencia, la frecuencia de genes de resistencia en la siguiente generación ___."

explicacion: |
  Al morir los individuos no resistentes, los sobrevivientes (que portan el gen de resistencia) son los únicos que dejan descendencia. Por lo tanto, la proporción de individuos con esa característica aumenta en la población.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["pesticidas", "presion_selectiva"]

respuesta: "agente"
tipo: completar
respuestas_validas:
  - "agente"
  - "causa"

enunciado: "En el proceso de evolución por selección natural, el antibiótico actúa como un ___ de selección que determina qué individuos logran reproducirse."

explicacion: |
  El antibiótico no es la causa de la mutación, sino el agente que ejerce la presión ambiental, filtrando a los individuos menos aptos para ese entorno específico.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "avanzado"
  tags: ["mitos_evolutivos", "resistencia"]

respuesta: falso
tipo: vf

enunciado: "El uso excesivo de antibióticos provoca que las bacterias muten específicamente para volverse resistentes."

explicacion: |
  Es falso. Las mutaciones son eventos aleatorios. El antibiótico no "induce" la mutación hacia la resistencia; simplemente elimina a los que no la tienen, permitiendo que la población cambie su composición genética hacia la resistencia.
```

## Sección: sistemas-cuerpo-humano (22 preguntas)

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["organizacion", "biologia_celular"]

respuesta: verdadero
tipo: vf

enunciado: "El orden de los niveles de organización biológica, desde lo más pequeño a lo más grande, es: célula, tejido, órgano, sistema y organismo."

explicacion: |
  Correcto. La jerarquía biológica comienza con la unidad básica de la vida (célula) y se va complejizando mediante la agrupación de sus componentes.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["tejido", "celulas"]

respuesta: verdadero
tipo: vf

enunciado: "Un tejido se define como un grupo de células similares que trabajan juntas para cumplir una misma función."

explicacion: |
  Exacto. La especialización de las células permite que se agrupen en tejidos con funciones específicas (epitelial, muscular, nervioso, conectivo).
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["organo", "celula"]

respuesta: falso
tipo: vf

enunciado: "Un órgano es una estructura biológica compuesta por una sola célula altamente especializada."

explicacion: |
  Falso. Un órgano es una estructura compleja formada por la integración de diversos tejidos que colaboran para una función determinada.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "intermedio"
  tags: ["corazon", "tejidos"]

respuesta: verdadero
tipo: vf

enunciado: "El corazón es un órgano que combina tejidos muscular, nervioso y conectivo para cumplir su función de bombeo."

explicacion: |
  Verdadero. Para funcionar, el corazón requiere tejido muscular (miocardio), tejido nervioso (para la conducción eléctrica) y tejido conectivo (válvulas y estructura).
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "intermedio"
  tags: ["organizacion", "definiciones"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["tejido", "grupo de celulas similares con la misma funcion"], ["organo", "combinacion de distintos tejidos con un proposito"], ["sistema", "conjunto de organos que colaboran en una funcion general"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["grupo de celulas similares con la misma funcion", "combinacion de distintos tejidos con un proposito", "conjunto de organos que colaboran en una funcion general"]

enunciado: "Identifica la definición correcta para el nivel de organización: {datos[idx][0]}"

explicacion: |
  La respuesta correcta corresponde a la definición del nivel seleccionado en este intento.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistemas", "fisiologia"]

variables:
  idx: uno_de([0, 1, 2, 3])
  escenario: [["digestivo", "descomponer alimento y absorber nutrientes"], ["respiratorio", "intercambio de gases oxigeno y dioxido de carbono"], ["circulatorio", "transportar sangre, nutrientes y gases"], ["nervioso", "recibir y procesar informacion, controlar el cuerpo"]]

opciones_explicitas: ["descomponer alimento y absorber nutrientes", "intercambio de gases oxigeno y dioxido de carbono", "transportar sangre, nutrientes y gases", "recibir y procesar informacion, controlar el cuerpo"]

respuesta: escenario[idx][1]
tipo: mc

enunciado: "La función principal del sistema {escenario[idx][0]} es: ___"

explicacion: |
  El sistema seleccionado es el {escenario[idx][0]}, cuya función es {escenario[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["respiratorio", "gases"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema respiratorio se encarga del intercambio de gases entre el cuerpo y el aire."

explicacion: |
  Verdadero. El sistema respiratorio permite la entrada de oxígeno y la eliminación de dióxido de carbono.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["circulatorio", "sangre"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema circulatorio transporta sangre por todo el cuerpo."

explicacion: |
  Verdadero. A través de la sangre, el sistema circulatorio distribuye nutrientes y oxígeno a todas las células.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["digestivo", "nervioso"]

respuesta: falso
tipo: vf

enunciado: "El sistema digestivo se encarga de procesar información nerviosa."

explicacion: |
  Falso. El procesamiento de la información nerviosa es función del sistema nervioso; el digestivo se encarga de la nutrición.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistemas", "anatomia"]

variables:
  escenario: [["oseo", "huesos"], ["muscular", "musculos"], ["excretor", "riñones"], ["endocrino", "tiroides o pancreas"]]
  idx: uno_de([0, 1, 2, 3])
  sistema_actual: escenario[idx][0]
  organo_correcto: escenario[idx][1]

tipo: mc
opciones_explicitas: ["huesos", "musculos", "riñones", "tiroides o pancreas"]

enunciado: "El sistema {sistema_actual} tiene como órgano clave a los ___."

respuesta: organo_correcto
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistema_oseo", "funciones"]

tipo: vf

enunciado: "El sistema óseo cumple la función de sostén y protección."

respuesta: verdadero
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistema_muscular", "movimiento"]

tipo: vf

enunciado: "El sistema muscular es responsable del movimiento del cuerpo."

respuesta: verdadero
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistema_excretor", "riñones"]

tipo: vf

enunciado: "El sistema excretor filtra y elimina desechos, teniendo a los riñones como órgano clave."

respuesta: verdadero
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["integracion", "sistemas"]

respuesta: verdadero
tipo: vf

enunciado: "Ningún sistema del cuerpo humano trabaja de forma completamente aislada; todos funcionan de manera coordinada."

explicacion: |
  El cuerpo humano es un sistema complejo donde la interacción entre órganos y sistemas es fundamental para mantener la homeostasis.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "intermedio"
  tags: ["musculo", "nervioso", "circulatorio"]

respuesta: verdadero
tipo: vf

enunciado: "Para que un músculo realice un movimiento, es necesaria la señal eléctrica proveniente del sistema nervioso y el suministro de oxígeno transportado por el sistema circulatorio."

explicacion: |
  El sistema nervioso envía el impulso para la contracción, mientras que el sistema circulatorio provee el oxígeno necesario para el metabolismo celular muscular.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["especializacion", "integracion"]

respuesta: falso
tipo: vf

enunciado: "La especialización de cada sistema (digestivo, excretor, nervioso, etc.) significa que sus funciones son completamente independientes entre sí."

explicacion: |
  Aunque cada sistema tiene funciones especializadas, todos están integrados. La especialización permite la eficiencia, pero la interdependencia es necesaria para la vida.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["respiratorio", "circulatorio"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema respiratorio es el encargado de capturar el oxígeno del medio externo, el cual es posteriormente transportado por la sangre a través del sistema circulatorio."

explicacion: |
  Existe una dependencia directa: el sistema respiratorio realiza el intercambio gaseoso en los alvéolos y el sistema circulatorio actúa como el vehículo de distribución.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["homeostasis", "equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "La homeostasis es el equilibrio interno del cuerpo (temperatura, pH, azúcar en sangre), aunque el ambiente externo cambie."

explicacion: |
  La homeostasis es el proceso mediante el cual los organismos mantienen un ambiente interno estable a pesar de las variaciones en el entorno.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["homeostasis", "sistemas"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los sistemas del cuerpo, en conjunto, trabajan para mantener la homeostasis."

explicacion: |
  La homeostasis no depende de un solo órgano, sino de la interacción coordinada de múltiples sistemas (nervioso, endocrino, excretor, etc.).
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistema_inmunitario", "defensa"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema inmunitario se encarga de la defensa del organismo contra patógenos."

explicacion: |
  El sistema inmunitario identifica y destruye agentes extraños como bacterias, virus y parásitos para proteger al cuerpo.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistema_reproductor", "reproduccion"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema reproductor tiene como función principal la producción de descendencia para asegurar la supervivencia de la especie."

explicacion: |
  A diferencia de otros sistemas que mantienen la vida del individuo, el sistema reproductor permite la continuidad de la vida a nivel poblacional.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["homeostasis", "completar"]

respuesta: "homeostasis"
tipo: completar
respuestas_validas:
  - "homeostasis"

enunciado: "El equilibrio interno del cuerpo que se mantiene aunque el ambiente externo cambie se llama ___."

explicacion: |
  El término correcto es homeostasis, que proviene del griego 'homoios' (similar) y 'stasis' (estabilidad).
```

