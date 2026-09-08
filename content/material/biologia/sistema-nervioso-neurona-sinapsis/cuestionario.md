# Biologia — sistema nervioso neurona sinapsis (cuestionario, 35 preguntas VBLang)

> Tema: `biologia/sistema-nervioso-neurona-sinapsis`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["neurona", "mielina", "velocidad"]

variables:
  velocidad_sin_mielina: random(1, 5)
  factor_mielina: uno_de([20, 30, 50])
  velocidad_con_mielina: velocidad_sin_mielina * factor_mielina

respuesta: velocidad_con_mielina
tipo: input

enunciado: "Una neurona amielínica transmite a {velocidad_sin_mielina} m/s. Si la mielinización multiplica la velocidad de conducción por un factor de {factor_mielina}, ¿a qué velocidad (en m/s) transmite la neurona mielinizada?"

explicacion: |
  La vaina de mielina permite la conducción saltatoria, acelerando drásticamente la velocidad del impulso nervioso comparado con neuronas sin mielina.
```

### 2 — pregunta 2

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["sinapsis", "neurotransmisor"]

variables:
  neurotransmisores: random(10, 100)
  porcentaje_liberacion: uno_de([10, 20, 50])
  resultado: floor(neurotransmisores * porcentaje_liberacion / 100)

respuesta: resultado
tipo: input

enunciado: "Si un terminal sináptico contiene {neurotransmisores} vesículas y se libera un {porcentaje_liberacion}% durante el estímulo, ¿cuántas vesículas se liberan aproximadamente?"

explicacion: |
  En la sinapsis química, la llegada del potencial de acción provoca la liberación de neurotransmisores desde las vesículas hacia la hendidura sináptica.
```

### 3 — pregunta 3

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["soma", "cuerpo celular"]

respuesta: "soma"
tipo: completar

enunciado: "El cuerpo celular de la neurona, donde se encuentra el núcleo y se realizan las funciones metabólicas, se denomina ___."
respuestas_validas:
  - "soma"
  - "cuerpo celular"
  - "pericarion"

explicacion: |
  El soma o cuerpo celular contiene el núcleo y es el centro metabólico de la neurona.
```

### 4 — pregunta 4

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["sinapsis", "conversión"]

respuesta: "eléctrica"
tipo: completar

enunciado: "En la sinapsis, el impulso ___ se convierte en señal química para cruzar la hendidura."
respuestas_validas:
  - "eléctrica"
  - "electrica"

explicacion: |
  El impulso eléctrico no puede saltar el espacio físico de la hendidura sináptica, por lo que se convierte en señal química mediante neurotransmisores.
```

### 5 — pregunta 5

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["potencial", "refractario"]

variables:
  tiempo_refractario_absoluto: random(1, 2)
  tiempo_refractario_relativo: random(3, 5)
  total: tiempo_refractario_absoluto + tiempo_refractario_relativo

respuesta: total
tipo: input

enunciado: "Si el período refractario absoluto dura {tiempo_refractario_absoluto} ms y el relativo dura {tiempo_refractario_relativo} ms, ¿cuál es el tiempo total mínimo para que la neurona pueda generar otro potencial de acción?"

explicacion: |
  El período refractario total incluye el tiempo absoluto (cuando no se puede generar ningún impulso) y el relativo (cuando se requiere un estímulo mayor).
```

### 6 — pregunta 6

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["potencial", "membrana"]

variables:
  potencial_reposo: -70
  despolarizacion: random(20, 40)
  umbral: -55
  potencial_accion: 30
  valor_final: potencial_reposo + despolarizacion

respuesta: valor_final
tipo: input

enunciado: "Si el potencial de reposo es {potencial_reposo} mV y una excitación causa una despolarización de {despolarizacion} mV, ¿cuál es el nuevo potencial de membrana antes de alcanzar el umbral?"

explicacion: |
  La despolarización reduce la diferencia de carga negativa interna, acercando el potencial al umbral de disparo.
```

### 7 — pregunta 7

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["sinapsis", "concentración"]

variables:
  moléculas: random(100, 500)
  volumen: random(10, 20)
  concentracion: floor(moléculas / volumen)

respuesta: concentracion
tipo: input

enunciado: "Si se liberan {moléculas} moléculas de neurotransmisor en una hendidura de volumen {volumen} µm³, ¿cuál es la concentración aproximada (moléculas/µm³)?"

explicacion: |
  La concentración de neurotransmisores en la hendidura determina la fuerza de la señal postsináptica.
```

### 8 — pregunta 8

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["sinapsis", "espacio"]

respuesta: "hendidura sináptica"
tipo: completar

enunciado: "El pequeño espacio físico entre dos neuronas donde ocurre la transmisión química se llama ___."
respuestas_validas:
  - "hendidura sináptica"
  - "hendidura sinaptica"

explicacion: |
  La hendidura sináptica separa la neurona presináptica de la postsináptica, requiriendo la difusión de neurotransmisores.
```

### 9 — pregunta 9

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["velocidad", "tiempo"]

variables:
  distancia: random(10, 100)
  velocidad: 50
  tiempo: distancia / velocidad

respuesta: redondear(tiempo, 2)
tipo: input

enunciado: "Si un impulso viaja {distancia} mm a una velocidad de conducción de {velocidad} mm/ms (equivalente a {velocidad} m/s), ¿cuánto tarda en llegar? (Resultado en ms, con dos decimales)"

explicacion: |
  El tiempo de transmisión depende de la distancia y la velocidad de conducción, que se ve afectada por la mielina.
```

### 10 — pregunta 10

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["morfología", "relación"]

variables:
  largo_axon: random(10, 100)
  largo_dendrita: random(1, 5)
  ratio: floor(largo_axon / largo_dendrita)

respuesta: ratio
tipo: input

enunciado: "Si el axón mide {largo_axon} µm y las dendritas {largo_dendrita} µm, ¿cuántas veces es más largo el axón que las dendritas?"

explicacion: |
  Las neuronas suelen tener axones mucho más largos que las dendritas para transmitir señales a distancia.
```

### 11 — pregunta 11

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["terminal", "liberación"]

respuesta: "terminal sináptica"
tipo: completar

enunciado: "Las estructuras al final del axón que contienen vesículas con neurotransmisores se llaman ___."
respuestas_validas:
  - "terminal sináptica"
  - "terminal sinaptica"
  - "botón terminal"

explicacion: |
  Las terminales sinápticas son los sitios de liberación de neurotransmisores hacia la hendidura.
```

### 12 — pregunta 12

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["mielina", "eficiencia"]

variables:
  velocidad_mielinizada: random(50, 120)
  velocidad_amielinizada: random(1, 5)
  factor: floor(velocidad_mielinizada / velocidad_amielinizada)

respuesta: factor
tipo: input

enunciado: "Si la neurona mielinizada viaja a {velocidad_mielinizada} m/s y la amielínica a {velocidad_amielinizada} m/s, ¿cuántas veces más rápida es la primera?"

explicacion: |
  La mielina aumenta la velocidad de conducción entre 10 y 100 veces dependiendo del contexto fisiológico.
```

### 13 — pregunta 13

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["mielina", "nodo"]

respuesta: "nodo de Ranvier"
tipo: completar

enunciado: "Los espacios sin mielina a lo largo del axón se denominan ___."
respuestas_validas:
  - "nodo de Ranvier"
  - "nodo de ranvier"

explicacion: |
  Los nodos de Ranvier son los puntos donde se regenera el potencial de acción en la conducción saltatoria.
```

### 14 — pregunta 14

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["neurona", "unidad_funcional"]

variables:
  pregunta_clave: "unidad"

respuesta: "neurona"
tipo: completar

enunciado: "¿Cuál es la unidad básica de funcionamiento del sistema nervioso?"

explicacion: |
  La neurona es la célula especializada en transmitir impulsos nerviosos. No se divide para formar más neuronas, sino que se especializa en esta función.
```

### 15 — pregunta 15

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["dendritas", "estructura"]

respuesta: "reciben"
tipo: completar

enunciado: "Las dendritas son prolongaciones cortas y ramificadas que ___ mensajes de otras neuronas."
respuestas_validas:
  - "reciben"
  - "captan"

explicacion: |
  Las dendritas tienen la función de recibir señales de otras neuronas y transmitirlas hacia el cuerpo celular.
```

### 16 — pregunta 16

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["axon", "impulso"]

respuesta: "lleva"
tipo: completar

enunciado: "El axón es una prolongación larga que ___ el impulso nervioso desde el cuerpo celular hacia las terminales."
respuestas_validas:
  - "lleva"
  - "conduce"
  - "transmite"

explicacion: |
  El axón conduce el impulso eléctrico desde el soma (cuerpo celular) hacia las terminales sinápticas para enviarlo a otras células.
```

### 17 — pregunta 17

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["mielina", "celulas_gliales"]

respuesta: "células gliales"
tipo: completar

enunciado: "La vaina de mielina está formada por células llamadas ___."
respuestas_validas:
  - "células gliales"
  - "celulas gliales"

explicacion: |
  Las células gliales (como los oligodendrocitos en el SNC y las células de Schwann en el SNP) forman la vaina de mielina alrededor de los axones.
```

### 18 — pregunta 18

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["mielina", "patologia"]

respuesta: "lenta"
tipo: completar

enunciado: "Si la mielina se daña, la comunicación entre el cerebro y el cuerpo se vuelve ___ o falla."

explicacion: |
  El daño a la mielina (desmielinización) interrumpe o ralentiza la conducción del impulso nervioso, afectando la función motora y sensorial.
```

### 19 — pregunta 19

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["sinapsis", "comunicacion"]

respuesta: "sinapsis"
tipo: completar

enunciado: "La ___ es el proceso mediante el cual la señal eléctrica se convierte en química y luego vuelve a ser eléctrica."

explicacion: |
  La sinapsis es el punto de comunicación entre dos neuronas (o entre una neurona y una efectora) donde se produce el relevo de la señal.
```

### 20 — pregunta 20

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["hendidura", "espacio"]

respuesta: "hendidura sináptica"
tipo: completar

enunciado: "Existe un pequeño espacio físico entre las neuronas llamado ___."
respuestas_validas:
  - "hendidura sináptica"
  - "hendidura sinaptica"
  - "hendidura"

explicacion: |
  La hendidura sináptica es el espacio extracelular por donde difunden los neurotransmisores para llegar a la neurona postsináptica.
```

### 21 — pregunta 21

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["señal", "conversion"]

respuesta: "química"
tipo: completar

enunciado: "En la sinapsis, la señal eléctrica se convierte en señal ___ y luego vuelve a ser eléctrica."
respuestas_validas:
  - "química"
  - "quimica"

explicacion: |
  El impulso eléctrico llega a la terminal, libera neurotransmisores (señal química) que cruzan la hendidura y generan un nuevo impulso eléctrico en la siguiente neurona.
```

### 22 — pregunta 22

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["soma", "cuerpo_celular"]

respuesta: "núcleo"
tipo: completar

enunciado: "En el cuerpo celular (soma) se encuentra el ___ y se realizan funciones metabólicas."
respuestas_validas:
  - "núcleo"
  - "nucleo"

explicacion: |
  El soma contiene el núcleo con el material genético y es el centro metabólico de la neurona.
```

### 23 — pregunta 23

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["ranvier", "impulso"]

respuesta: "nodo de Ranvier"
tipo: completar

enunciado: "El impulso 'salta' de un ___ a otro en los axones mielinizados."
respuestas_validas:
  - "nodo de Ranvier"
  - "nodo de ranvier"
  - "nodos de Ranvier"

explicacion: |
  Los nodos de Ranvier son los espacios sin mielina entre los segmentos de vaina, donde se regenera el potencial de acción.
```

### 24 — pregunta 24

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["funcion", "comando"]

respuesta: "centro de comando"
tipo: completar

enunciado: "El sistema nervioso funciona como el ___ y la red de comunicación del cuerpo."

explicacion: |
  Su rol principal es integrar información, procesarla y generar respuestas coordinadas para mantener la homeostasis y la interacción con el entorno.
```

### 25 — pregunta 25

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["neurotransmisor", "quimico"]

respuesta: "neurotransmisores"
tipo: completar

enunciado: "Los ___ son las moléculas que cruzan la hendidura sináptica."

explicacion: |
  Los neurotransmisores son mensajeros químicos liberados por la neurona presináptica que se unen a receptores en la postsináptica.
```

### 26 — pregunta 26

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["direccion", "flujo"]

respuesta: "dendritas"
tipo: completar

enunciado: "La información llega a la neurona principalmente a través de las ___."

explicacion: |
  El flujo típico de información es: Dendritas -> Soma -> Axón -> Terminales sinápticas.
```

### 27 — pregunta 27

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["mielina", "aislante"]

respuesta: "aislante"
tipo: completar

enunciado: "La vaina de mielina actúa como una capa ___ alrededor del axón."

explicacion: |
  La mielina es rica en lípidos y actúa como aislante eléctrico, impidiendo que la carga se escape y forzando el salto entre nodos.
```

### 28 — pregunta 28

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["respuesta", "estimulo"]

respuesta: "respuesta"
tipo: completar

enunciado: "El sistema nervioso procesa datos para generar una ___ adecuada."
respuestas_validas:
  - "respuesta"
  - "reacción"
  - "reaccion"

explicacion: |
  La función integradora del sistema nervioso es generar una respuesta motora o secretora apropiada ante un estímulo.
```

### 29 — pregunta 29

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["sinapsis", "tipos"]

respuesta: "química"
tipo: completar

enunciado: "La mayoría de las sinapsis en el sistema nervioso humano son de tipo ___."
respuestas_validas:
  - "química"
  - "quimica"

explicacion: |
  Aunque existen sinapsis eléctricas, la gran mayoría de la comunicación neuronal en humanos es química, mediada por neurotransmisores.
```

### 30 — pregunta 30

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["funcion", "vital"]

respuesta: "mantener"
tipo: completar

enunciado: "El sistema nervioso ayuda a ___ funciones vitales como la respiración."

explicacion: |
  El sistema nervioso autónomo regula funciones involuntarias como la respiración, el ritmo cardíaco y la digestión.
```

### 31 — pregunta 31

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["terminal", "emision"]

respuesta: "terminales"
tipo: completar

enunciado: "El axón termina en ___ para enviar el mensaje a otras células."
respuestas_validas:
  - "terminales"
  - "terminales sinápticas"
  - "terminales sinapticas"

explicacion: |
  Las terminales sinápticas (botones terminales) son las puntas del axón donde se almacenan y liberan los neurotransmisores.
```

### 32 — pregunta 32

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["plasticidad", "sinapsis"]

respuesta: "sinapsis"
tipo: completar

enunciado: "Entender cómo trabajan juntas las neuronas y cómo se comunican a través de la ___ es clave para comprender el aprendizaje."

explicacion: |
  La plasticidad sináptica (cambio en la fuerza de la sinapsis) es la base celular del aprendizaje y la memoria.
```

### 33 — pregunta 33

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["dendrita", "forma"]

respuesta: "dendritas"
tipo: completar

enunciado: "Las ___ son prolongaciones cortas y ramificadas."

explicacion: |
  La ramificación de las dendritas aumenta la superficie de contacto para recibir más señales de otras neuronas.
```

### 34 — pregunta 34

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["impulso", "electrico"]

respuesta: "potencial de acción"
tipo: completar

enunciado: "El impulso nervioso es también conocido como ___."
respuestas_validas:
  - "potencial de acción"
  - "potencial de accion"

explicacion: |
  El potencial de acción es la onda de despolarización que viaja por el axón, permitiendo la transmisión rápida de la señal.
```

### 35 — pregunta 35

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["receptor", "uniones"]

respuesta: "receptores"
tipo: completar

enunciado: "Los neurotransmisores se unen a ___ en la membrana de la siguiente neurona."

explicacion: |
  Los receptores específicos en la membrana postsináptica detectan los neurotransmisores y generan la respuesta celular correspondiente.
```
