# Historia Profunda — Formación de estrellas (cuestionario, 25 preguntas VBLang)

> Tema: `U3`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: varias preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`); un
> lote entero (5 preguntas) traía un corchete `]` sobrante al final
> de cada `respuesta:` (sintaxis inválida) — eliminado; una pregunta
> con `variables:` mezclando dos pares de conceptos no relacionados
> como si fueran opciones del mismo blank — simplificada a respuesta
> fija; 5 preguntas `mc` sin campo `explicacion:` — agregado;
> `metadata.materia` con un typo (`historia_profucha`) — corregido.

---

### 1 — El origen cósmico

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["nebulosa", "gas"]

enunciado: "Las estrellas nacen a partir de gigantescas nubes de gas y polvo interestelar conocidas como ___."

respuestas_validas:
  - "nebulosas"

respuesta: "nebulosas"
tipo: completar

explicacion: |
  Una nebulosa es una nube de gas y polvo en el espacio interestelar, la materia prima a partir de la cual se forman las estrellas.
```

### 2 — El inicio del colapso

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["gravedad", "colapso"]

enunciado: "La fuerza principal que provoca que una nebulosa comience a contraerse y colapsar sobre sí misma es la ___."

respuestas_validas:
  - "gravedad"

respuesta: "gravedad"
tipo: completar

explicacion: |
  La gravedad atrae el gas hacia las zonas más densas de la nube, iniciando el colapso que eventualmente formará una estrella.
```

### 3 — La danza del movimiento

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "avanzado"
  tags: ["momento_angular", "giro"]

enunciado: "A medida que la nube colapsa, su velocidad de rotación aumenta para conservar el ___."

respuestas_validas:
  - "momento angular"

respuesta: "momento angular"
tipo: completar

explicacion: |
  Es el mismo principio que un patinador que gira más rápido al cerrar los brazos: al reducirse el radio de la nube, la velocidad de giro aumenta para conservar el momento angular.
```

### 4 — El despertar del calor

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["temperatura", "energia"]

enunciado: "Durante el colapso, la energía potencial gravitatoria se transforma en ___ en el núcleo de la protoestrella."

respuestas_validas:
  - "energía térmica"
  - "energia termica"

respuesta: "energía térmica"
tipo: completar

explicacion: |
  A medida que el gas cae hacia el centro por gravedad, esa energía de movimiento se convierte en calor, elevando la temperatura del núcleo.
```

### 5 — El ciclo de la materia

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "avanzado"
  tags: ["disco", "acrecion"]

respuesta: "disco de acreción"
tipo: completar
respuestas_validas:
  - "disco de acreción"
  - "disco protoplanetario"
  - "disco de acrecion"

enunciado: "Cuando la materia gira rápidamente alrededor del centro, se aplana formando un ___."

explicacion: |
  El aumento de la velocidad de rotación por la conservación del momento angular aplana la nube en un disco.
```

### 6 — El motor estelar

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["fusion", "hidrogeno"]

tipo: mc
opciones_explicitas: ["Fusión de helio en hidrógeno", "Fusión de hidrógeno en helio", "Fisión de núcleos de hierro", "Combustión de oxígeno"]
respuesta: "Fusión de hidrógeno en helio"

enunciado: "Durante la formación de una estrella, el 'encendido' ocurre cuando la temperatura y presión son tan altas que se inicia un proceso de ___."

explicacion: |
  El proceso fundamental que define la vida de una estrella es la fusión nuclear, donde núcleos de hidrógeno se unen para formar helio, liberando una enorme cantidad de energía.
```

### 7 — El equilibrio estelar

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["equilibrio", "gravedad", "presion"]

tipo: completar
respuestas_validas:
  - "equilibrio hidrostático"
  - "equilibrio hidrostatico"
respuesta: "equilibrio hidrostático"

enunciado: "Para que una estrella sea estable y no colapse ni se expanda descontroladamente, debe existir un ___ entre la gravedad (que empuja hacia adentro) y la presión de la fusión (que empuja hacia afuera)."

explicacion: |
  Este estado se conoce como equilibrio hidrostático. La gravedad intenta comprimir la estrella, mientras que la energía de la fusión nuclear genera una presión hacia afuera que compensa esa fuerza.
```

### 8 — Fuerzas en conflicto

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["gravedad", "presion"]

tipo: mc
opciones_explicitas: ["La gravedad gana y la estrella colapsa", "La presión de fusión gana y la estrella se expande", "Ambas fuerzas se anulan y la estrella es estable", "La gravedad desaparece"]
respuesta: "Ambas fuerzas se anulan y la estrella es estable"

enunciado: "Si una estrella ha alcanzado un estado de estabilidad donde la fuerza de gravedad hacia el centro es compensada exactamente por la presión de la fusión hacia el exterior, podemos decir que:"

explicacion: |
  La estabilidad estelar depende de que la fuerza de gravedad (atracción) y la presión de radiación/térmica (repulsión) estén en un equilibrio dinámico.
```

### 9 — El inicio del brillo

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["temperatura", "presion", "nucleos"]

tipo: completar
respuestas_validas:
  - "Fusión de hidrógeno"
  - "fusión de hidrógeno"
respuesta: "Fusión de hidrógeno"

enunciado: "El primer paso crucial en el ciclo de vida de una estrella es la ___."

explicacion: |
  Antes de que una estrella pueda quemar elementos más pesados, debe superar la barrera de repulsión eléctrica entre protones para iniciar la fusión de hidrógeno.
```

### 10 — El destino del equilibrio

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "avanzado"
  tags: ["gravedad", "fusión"]

tipo: mc
opciones_explicitas: ["La gravedad es mayor que la presión", "La presión es mayor que la gravedad", "La gravedad y la presión son iguales", "No hay fuerzas actuando"]
respuesta: "La gravedad es mayor que la presión"

enunciado: "Si una estrella agota su combustible de hidrógeno en el núcleo y la producción de energía disminuye, ¿qué sucede con el equilibrio de fuerzas?"

explicacion: |
  Al disminuir la presión hacia afuera causada por la fusión, la gravedad toma ventaja, provocando que el núcleo se contraiga nuevamente hasta alcanzar nuevas temperaturas.
```

### 11 — El destino de estrellas como el Sol

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["estrellas", "sol", "enana_blanca"]

respuesta: "enana blanca"
tipo: completar
respuestas_validas:
  - "enana blanca"

enunciado: "Una estrella de masa media, similar a nuestro Sol, tras agotar su combustible de hidrógeno y helio, termina su ciclo de vida convirtiéndose en una ___."

explicacion: |
  Las estrellas de masa media como el Sol no tienen suficiente masa para colapsar en objetos ultra densos; en su lugar, expulsan sus capas externas y dejan un núcleo remanente llamado enana blanca.
```

### 12 — La vida de las estrellas masivas

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["estrellas_masivas", "supernova"]

respuesta: "supernova"
tipo: completar
respuestas_validas:
  - "supernova"

enunciado: "Las estrellas con una masa muy superior a la del Sol tienen un destino violento: terminan su vida en una explosión masiva conocida como ___."

explicacion: |
  Debido a su enorme gravedad, las estrellas masivas procesan su combustible muy rápido y colapsan sobre sí mismas, provocando una explosión de supernova que puede iluminar galaxias enteras.
```

### 13 — Relación entre masa y duración

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["masa", "tiempo_vida"]

variables:
  idx: uno_de([0, 1])
  escenario: [["baja/media", "miles de millones"], ["muy masiva", "millones"]]

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas:
  - "miles de millones"
  - "millones"

enunciado: "El tiempo de vida de una estrella depende de su masa. Una estrella de masa {escenario[idx][0]} vivirá durante aproximadamente ___ de años."

explicacion: |
  Existe una relación inversa: a mayor masa, mayor presión y temperatura en el núcleo, lo que hace que el combustible se queme mucho más rápido, resultando en una vida más corta.
```

### 14 — El destino extremo: agujeros negros

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "avanzado"
  tags: ["agujero_negro", "colapso"]

respuesta: "agujero negro"
tipo: completar
respuestas_validas:
  - "agujero negro"

enunciado: "Cuando una estrella extremadamente masiva colapsa tras una supernova y su remanente es lo suficientemente denso como para que ni la luz pueda escapar de su gravedad, se forma un ___."

explicacion: |
  El agujero negro es el destino final de las estrellas más masivas del universo, donde la densidad es tal que la curvatura del espacio-tiempo es extrema.
```

### 15 — Comparativa de remanentes

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["remanentes", "masa"]

variables:
  idx: uno_de([0, 1])
  caso: [["enana blanca", "baja/media"], ["agujero negro", "muy masiva"]]

respuesta: caso[idx][0]
tipo: completar
respuestas_validas:
  - "enana blanca"
  - "agujero negro"

enunciado: "Si analizamos el remanente final de una estrella de masa {caso[idx][1]}, el objeto resultante será una/un ___."

explicacion: |
  El destino final está determinado principalmente por la masa remanente del núcleo tras la muerte de la estrella.
```

### 16 — El origen de los elementos

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["nucleosintesis", "elementos"]

tipo: mc
opciones_explicitas: ["Carbono, Oxígeno y Hierro", "Sólo Hidrógeno y Helio", "Sólo Fotones y Neutrinos", "Plutonio y Uranio solamente"]
respuesta: "Sólo Hidrógeno y Helio"

enunciado: "Si las estrellas no hubieran existido, el universo estaría compuesto casi exclusivamente por ___."

explicacion: |
  Sin la fusión nuclear que ocurre dentro de las estrellas, el universo se habría quedado con los elementos livianos formados en el Big Bang: hidrógeno y helio, casi sin nada más.
```

### 17 — El motor de la creación

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["fusion", "nucleosintesis"]

tipo: completar
respuestas_validas:
  - "fusión nuclear"
  - "fusion nuclear"
respuesta: "fusión nuclear"

enunciado: "El proceso físico que ocurre en el núcleo de una estrella y permite la creación de elementos más pesados que el helio se denomina ___."

explicacion: |
  La fusión nuclear en el interior estelar es el único proceso natural capaz de fabricar elementos más pesados que el hidrógeno y el helio.
```

### 18 — El legado estelar

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["quimica_cosmica", "elementos_pesados"]

tipo: mc
opciones_explicitas: ["Las estrellas son fábricas de elementos pesados", "Las estrellas sólo sirven para iluminar planetas", "Las estrellas destruyen la materia existente", "Las estrellas son sólo bolas de gas sin importancia química"]
respuesta: "Las estrellas son fábricas de elementos pesados"

enunciado: "¿Cuál es la función química fundamental de las estrellas en la evolución del universo?"

explicacion: |
  Las estrellas fabrican, mediante fusión nuclear, todos los elementos más pesados que el hidrógeno y el helio que existen en el universo.
```

### 19 — El límite del hidrógeno

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["nucleosintesis", "evolucion"]

tipo: completar
respuestas_validas:
  - "helio"
respuesta: "helio"

enunciado: "Antes de que las estrellas comenzaran a fusionar elementos más pesados, el universo era una mezcla primordial de hidrógeno y ___."

explicacion: |
  El Big Bang dejó al universo con principalmente hidrógeno y algo de helio — todo lo demás lo fabricaron las estrellas después.
```

### 20 — La paradoja de la materia

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "avanzado"
  tags: ["nucleosintesis", "evolucion_estelar"]

tipo: mc
opciones_explicitas: ["Sin estrellas, no habría átomos complejos para formar planetas o vida", "Sin estrellas, el universo sería más oscuro pero igual de complejo", "Sin estrellas, el hidrógeno se habría agotado más rápido", "Sin estrellas, la gravedad no existiría"]
respuesta: "Sin estrellas, no habría átomos complejos para formar planetas o vida"

enunciado: "¿Qué consecuencia directa tiene la ausencia de procesos estelares para la formación de la materia compleja?"

explicacion: |
  Los elementos que forman planetas rocosos y organismos vivos (carbono, oxígeno, hierro, etc.) se fabricaron dentro de estrellas — sin ellas, no existirían.
```

### 21 — El destino de una estrella similar al Sol

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["evolucion_estelar", "masa"]

respuesta: "enana blanca"
tipo: completar
respuestas_validas:
  - "enana blanca"

enunciado: "Una estrella con una masa similar a la del Sol llegará al final de su vida convirtiéndose en una ___."

explicacion: |
  Las estrellas de masa baja o media, como nuestro Sol, no tienen suficiente masa para colapsar en un agujero negro. Tras agotar su combustible, expulsan sus capas externas y dejan un núcleo denso llamado enana blanca.
```

### 22 — El colapso de las gigantes

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["supernova", "masa_alta"]

respuesta: "supernova"
tipo: mc
opciones_explicitas: ["enana blanca", "supernova", "nebulosa planetaria", "protoestrella"]

enunciado: "Cuando una estrella masiva (más de 8 masas solares) agota su combustible de fusión, experimenta un colapso catastrófico conocido como ___."

explicacion: |
  Las estrellas masivas terminan su vida en una explosión violenta llamada supernova, que puede dejar atrás una estrella de neutrones o un agujero negro.
```

### 23 — El remanente extremo

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "avanzado"
  tags: ["agujero_negro", "densidad"]

respuesta: "agujero negro"
tipo: mc
opciones_explicitas: ["agujero negro", "estrella de neutrones", "enana blanca", "pulsar"]

enunciado: "Si el remanente de una supernova es lo suficientemente masivo, la gravedad es tan fuerte que nada puede escapar de él, formando un ___."

explicacion: |
  Un agujero negro es una región del espacio-tiempo donde la gravedad es tan intensa que ni siquiera la luz puede escapar de su horizonte de sucesos.
```

### 24 — Identificación de remanentes

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "intermedio"
  tags: ["estrellas_de_neutrones", "masa"]

respuesta: "estrella de neutrones"
tipo: completar
respuestas_validas:
  - "estrella de neutrones"

enunciado: "Tras una supernova, si el objeto restante tiene una masa intermedia (entre 1,4 y 3 masas solares), se convierte en una ___."

explicacion: |
  Las estrellas de neutrones son objetos extremadamente densos que resultan del colapso de núcleos estelares masivos que no alcanzan a formar un agujero negro.
```

### 25 — El fin de la vida estelar

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_de_estrellas"
  nivel: "basico"
  tags: ["enana_blanca", "sol"]

respuesta: "enana blanca"
tipo: mc
opciones_explicitas: ["agujero negro", "enana blanca", "estrella de neutrones", "nebulosa"]

enunciado: "El destino final de una estrella como el Sol es convertirse en una:"

explicacion: |
  Las estrellas de baja masa como el Sol no tienen la masa necesaria para producir explosiones de supernova; su destino es enfriarse lentamente como enanas blancas.
```
