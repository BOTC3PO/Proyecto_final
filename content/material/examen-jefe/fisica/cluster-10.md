# Examen jefe — Maquinas y Movimientos

> Logro #165. Completaste el parcial de máquinas simples, movimiento circular y momento lineal. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **125 preguntas totales** en 5/5 secciones.

---

## Sección: maquinas-simples (26 preguntas)

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "basico"
  tags: ["maquinas_simples", "vocabulario"]

enunciado: "¿Qué mide la ventaja mecánica de una máquina simple?"
tipo: mc
opciones_explicitas:
  - "La relación entre la carga que hay que mover y el esfuerzo (fuerza aplicada) necesario para moverla"
  - "La velocidad máxima que puede alcanzar la máquina"
  - "La cantidad de energía que la máquina crea"
respuesta: "La relación entre la carga que hay que mover y el esfuerzo (fuerza aplicada) necesario para moverla"

explicacion: |
  VM = carga / esfuerzo.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "completar"]

tipo: completar
enunciado: "Completá: VM = carga / ___."
respuestas_validas:
  - "esfuerzo"

explicacion: |
  El esfuerzo es la fuerza que aplica la persona (o el motor); la
  carga es la fuerza que hay que vencer.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples"]

respuesta: verdadero
tipo: vf

enunciado: "Si la ventaja mecánica de una máquina es mayor a 1, se necesita menos esfuerzo que la carga que se está moviendo."

explicacion: |
  VM = carga/esfuerzo > 1 implica carga > esfuerzo.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples"]

respuesta: falso
tipo: vf

enunciado: "Una máquina simple ideal (sin rozamiento) puede reducir el esfuerzo necesario SIN que aumente la distancia recorrida al aplicar ese esfuerzo."

explicacion: |
  Es falso: por conservación del trabajo, si baja la fuerza necesaria,
  sube proporcionalmente la distancia — el trabajo total no cambia.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "problema"]

variables:
  carga: random(100, 500)
  esfuerzo: random(20, 80)

respuesta: redondear(carga / esfuerzo, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una máquina simple permite mover una carga de {carga} N aplicando un esfuerzo de sólo {esfuerzo} N. ¿Cuál es su ventaja mecánica?"

pasos:
  - "VM = carga / esfuerzo = {carga} / {esfuerzo} = {redondear(carga / esfuerzo, 2)}"

explicacion: |
  Sin unidad propia — es un cociente entre dos fuerzas, un número puro.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "palanca"]

enunciado: "¿Qué caracteriza a una palanca de PRIMERA clase (como una balanza o unas tijeras)?"
tipo: mc
opciones_explicitas:
  - "El punto de apoyo (pivote) está entre el esfuerzo y la carga"
  - "La carga está entre el pivote y el esfuerzo"
  - "El esfuerzo está entre el pivote y la carga"
respuesta: "El punto de apoyo (pivote) está entre el esfuerzo y la carga"

explicacion: |
  Su VM puede ser mayor o menor a 1, según qué brazo sea más largo.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "palanca"]

enunciado: "¿Qué caracteriza a una palanca de SEGUNDA clase (como una carretilla)?"
tipo: mc
opciones_explicitas:
  - "La carga está entre el pivote y el esfuerzo, y siempre tiene VM > 1"
  - "El pivote está entre el esfuerzo y la carga"
  - "El esfuerzo está entre el pivote y la carga, y siempre tiene VM < 1"
respuesta: "La carga está entre el pivote y el esfuerzo, y siempre tiene VM > 1"

explicacion: |
  El brazo del esfuerzo siempre es más largo que el de la carga en
  este arreglo, así que la VM siempre es mayor a 1.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "palanca"]

enunciado: "¿Qué caracteriza a una palanca de TERCERA clase (como unas pinzas o una caña de pescar)?"
tipo: mc
opciones_explicitas:
  - "El esfuerzo está entre el pivote y la carga, y siempre tiene VM < 1"
  - "El pivote está entre el esfuerzo y la carga"
  - "La carga está entre el pivote y el esfuerzo, y siempre tiene VM > 1"
respuesta: "El esfuerzo está entre el pivote y la carga, y siempre tiene VM < 1"

explicacion: |
  Se sacrifica fuerza a cambio de más velocidad o distancia en el
  extremo donde está la carga.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "palanca", "problema"]

variables:
  d_esfuerzo: random_float(1, 3, 2)
  d_carga: random_float(0.2, 0.9, 2)

respuesta: redondear(d_esfuerzo / d_carga, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "En una palanca, el brazo del esfuerzo mide {d_esfuerzo} m y el brazo de la carga mide {d_carga} m. ¿Cuál es su ventaja mecánica?"

pasos:
  - "VM = d_esfuerzo / d_carga = {d_esfuerzo} / {d_carga} = {redondear(d_esfuerzo / d_carga, 2)}"

explicacion: |
  Sale directo de la condición de equilibrio de momentos, sin
  necesidad de conocer las fuerzas.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "palanca", "problema"]

variables:
  d_esfuerzo: random_float(1, 3, 2)
  d_carga: random_float(0.2, 0.9, 2)
  carga: random(50, 300)

respuesta: redondear(carga * d_carga / d_esfuerzo, 2)
tipo: input
tolerancia_abs: 1
unidad: "N"

enunciado: "En una palanca con brazo de esfuerzo {d_esfuerzo} m y brazo de carga {d_carga} m, se quiere mover una carga de {carga} N. ¿Qué esfuerzo hace falta aplicar?"

pasos:
  - "F_esfuerzo × d_esfuerzo = F_carga × d_carga"
  - "F_esfuerzo = {carga} × {d_carga} / {d_esfuerzo} = {redondear(carga * d_carga / d_esfuerzo, 2)} N"

explicacion: |
  Es la misma condición de equilibrio de `../estatica/equilibrio-de-cuerpo-rigido/`,
  despejando el esfuerzo.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "estatica"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación de equilibrio de una palanca, F_esfuerzo×d_esfuerzo = F_carga×d_carga, es exactamente la condición ΣM=0 ya vista en equilibrio de cuerpo rígido, tomando el pivote como punto de referencia."

explicacion: |
  Los dos momentos (esfuerzo y carga, respecto del pivote) tienen que
  cancelarse para que la palanca esté en equilibrio.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "polea"]

enunciado: "¿Cuál es la ventaja mecánica de una polea FIJA (la que sólo cambia la dirección de la cuerda, sin moverse junto con la carga)?"
tipo: mc
opciones_explicitas:
  - "VM = 1 (no reduce el esfuerzo, sólo cambia la dirección de la fuerza)"
  - "VM = 2"
  - "VM = 0"
respuesta: "VM = 1 (no reduce el esfuerzo, sólo cambia la dirección de la fuerza)"

explicacion: |
  Es útil (por ejemplo, para tirar hacia abajo en vez de levantar hacia
  arriba), pero no reduce la fuerza necesaria.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "polea"]

enunciado: "¿Cuál es la ventaja mecánica de una polea MÓVIL (la que se mueve junto con la carga)?"
tipo: mc
opciones_explicitas:
  - "VM = 2"
  - "VM = 1"
  - "VM = 0,5"
respuesta: "VM = 2"

explicacion: |
  Dos tramos de cuerda sostienen la carga, así que el esfuerzo
  necesario se reduce a la mitad.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "polea", "problema"]

variables:
  tramos: uno_de([2, 3, 4, 5])
  carga: random(100, 400)

respuesta: redondear(carga / tramos, 2)
tipo: input
tolerancia_abs: 1
unidad: "N"

enunciado: "Un sistema de poleas sostiene una carga de {carga} N con {tramos} tramos de cuerda que la sujetan directamente. ¿Qué esfuerzo hace falta aplicar (ideal, sin rozamiento)?"

pasos:
  - "VM ideal = {tramos} (un tramo de cuerda por cada esfuerzo que se reparte la carga)"
  - "esfuerzo = carga / VM = {carga} / {tramos} = {redondear(carga / tramos, 2)} N"

explicacion: |
  La VM ideal de un sistema de poleas es igual a la cantidad de tramos
  de cuerda que sostienen la carga.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "plano_inclinado"]

enunciado: "¿Cómo se calcula la ventaja mecánica ideal de un plano inclinado?"
tipo: mc
opciones_explicitas:
  - "VM = longitud del plano / altura que se sube"
  - "VM = altura / longitud del plano"
  - "VM = ángulo de inclinación en grados"
respuesta: "VM = longitud del plano / altura que se sube"

explicacion: |
  Un plano más largo (para la misma altura) reduce la fuerza necesaria
  para subir la carga.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "plano_inclinado", "problema"]

variables:
  altura: random(1, 3)
  longitud: random(4, 10)

respuesta: redondear(longitud / altura, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una rampa de {longitud} m de longitud se usa para subir una carga a {altura} m de altura. ¿Cuál es su ventaja mecánica ideal?"

pasos:
  - "VM = longitud / altura = {longitud} / {altura} = {redondear(longitud / altura, 2)}"

explicacion: |
  A mayor longitud para la misma altura, menor la pendiente y menor la
  fuerza necesaria (aunque haya que recorrer más distancia).
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "plano_inclinado"]

respuesta: verdadero
tipo: vf

enunciado: "Para subir una carga a la misma altura, una rampa más larga necesita menos fuerza que una rampa más corta."

explicacion: |
  Mayor longitud (para la misma altura) implica mayor VM, y por lo
  tanto menos esfuerzo necesario.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples"]

enunciado: "¿Cómo se calcula la ventaja mecánica ideal de una rueda y eje (por ejemplo, un volante de dirección)?"
tipo: mc
opciones_explicitas:
  - "VM = radio de la rueda / radio del eje"
  - "VM = radio del eje / radio de la rueda"
  - "VM = radio de la rueda + radio del eje"
respuesta: "VM = radio de la rueda / radio del eje"

explicacion: |
  Cuanto más grande la rueda respecto del eje, menos fuerza hace falta
  aplicar en el borde de la rueda.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "problema"]

variables:
  R: random(10, 30)
  r: random(1, 5)

respuesta: redondear(R / r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un volante de dirección tiene un radio de {R} cm, y el eje que gira tiene un radio de {r} cm. ¿Cuál es la ventaja mecánica ideal de este sistema?"

pasos:
  - "VM = R / r = {R} / {r} = {redondear(R / r, 2)}"

explicacion: |
  Es la misma idea que la palanca, con el pivote en el centro del eje.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples"]

respuesta: verdadero
tipo: vf

enunciado: "Las máquinas simples permiten hacer el mismo trabajo con menos fuerza, pero a costa de recorrer más distancia aplicando esa fuerza."

explicacion: |
  Es la consecuencia de que el trabajo (F×d) se conserva en el caso
  ideal sin rozamiento.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples"]

enunciado: "¿Por qué se dice que las máquinas simples no 'ahorran' trabajo, sólo lo redistribuyen entre fuerza y distancia?"
tipo: mc
opciones_explicitas:
  - "Porque W=F×d se mantiene igual (en el caso ideal): si F baja, d sube en la misma proporción"
  - "Porque en realidad sí ahorran trabajo, generan energía extra"
  - "Porque el trabajo no depende de la fuerza aplicada"
respuesta: "Porque W=F×d se mantiene igual (en el caso ideal): si F baja, d sube en la misma proporción"

explicacion: |
  Es la misma conservación de trabajo ya vista en
  `../trabajo-de-una-fuerza/`.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "ordenar"]

enunciado: "Ordená los pasos para identificar y calcular la ventaja mecánica de una palanca dada."
tipo: ordenar
opciones_explicitas:
  - "Calcular VM = d_esfuerzo / d_carga"
  - "Identificar dónde está el pivote, dónde se aplica el esfuerzo y dónde actúa la carga"
  - "Medir (o calcular) el brazo de palanca del esfuerzo y el brazo de palanca de la carga"
respuesta_orden:
  - "Identificar dónde está el pivote, dónde se aplica el esfuerzo y dónde actúa la carga"
  - "Medir (o calcular) el brazo de palanca del esfuerzo y el brazo de palanca de la carga"
  - "Calcular VM = d_esfuerzo / d_carga"

explicacion: |
  Sin identificar primero los tres elementos (pivote, esfuerzo, carga)
  no hay brazos que medir.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "basico"
  tags: ["maquinas_simples", "aplicacion"]

enunciado: "¿Por qué un destornillador con mango más ancho permite aflojar un tornillo con menos esfuerzo?"
tipo: mc
opciones_explicitas:
  - "Funciona como una rueda y eje: un mango más ancho (mayor radio) aumenta la ventaja mecánica"
  - "Porque los mangos anchos pesan menos"
  - "No hay relación real, es sólo cómodo para la mano"
respuesta: "Funciona como una rueda y eje: un mango más ancho (mayor radio) aumenta la ventaja mecánica"

explicacion: |
  Un carpintero o mecánico usa esta ventaja mecánica todos los días,
  sin necesariamente nombrarla así.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "basico"
  tags: ["maquinas_simples", "completar"]

tipo: completar
enunciado: "Completá: en una máquina simple, la fuerza que aplica la persona (o el motor) se llama ___; la fuerza que hay que superar se llama carga (o resistencia)."
respuestas_validas:
  - "esfuerzo"

explicacion: |
  Esfuerzo y carga son los dos términos que compara la ventaja
  mecánica.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples"]

respuesta: falso
tipo: vf

enunciado: "La ventaja mecánica real de una máquina simple (medida en la práctica) siempre es exactamente igual a la ventaja mecánica ideal (calculada sólo con la geometría), sin importar el rozamiento."

explicacion: |
  El rozamiento (`../plano-inclinado-y-rozamiento/`) siempre consume
  parte del esfuerzo, así que la VM real queda por debajo de la ideal.
```

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender las máquinas simples y la ventaja mecánica?"
tipo: mc
opciones_explicitas:
  - "Para entender cómo palancas, poleas, planos inclinados y ruedas permiten mover cargas grandes con menos esfuerzo, a cambio de más distancia recorrida"
  - "Sólo sirve para máquinas eléctricas"
  - "Sólo aplica a objetos sin peso"
respuesta: "Para entender cómo palancas, poleas, planos inclinados y ruedas permiten mover cargas grandes con menos esfuerzo, a cambio de más distancia recorrida"

explicacion: |
  Es el puente real entre toda la Física de fuerzas y momentos ya
  vista, y las herramientas que un carpintero o mecánico usa todos los
  días.
```

## Sección: masas-de-aire-y-frentes (22 preguntas)

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "basico"
  tags: ["masas_de_aire", "vocabulario"]

enunciado: "¿Qué es una masa de aire?"
tipo: mc
opciones_explicitas:
  - "Un volumen grande de atmósfera con temperatura y humedad relativamente uniformes"
  - "Una nube muy grande y oscura"
  - "El viento que sopla en una tormenta"
respuesta: "Un volumen grande de atmósfera con temperatura y humedad relativamente uniformes"

explicacion: |
  Se forma al permanecer estacionada varios días sobre una misma región.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "basico"
  tags: ["masas_de_aire", "clasificacion"]

enunciado: "¿Qué característica tiene una masa de aire polar (P)?"
tipo: mc
opciones_explicitas:
  - "Es fría, porque se formó en latitudes altas"
  - "Es cálida, porque se formó en latitudes bajas"
  - "Siempre es húmeda"
respuesta: "Es fría, porque se formó en latitudes altas"

explicacion: |
  "Polar" indica latitud de origen alta, no humedad.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "basico"
  tags: ["masas_de_aire", "clasificacion"]

enunciado: "¿Qué característica tiene una masa de aire tropical (T)?"
tipo: mc
opciones_explicitas:
  - "Es cálida, porque se formó en latitudes bajas"
  - "Es fría, porque se formó en latitudes altas"
  - "Siempre es seca"
respuesta: "Es cálida, porque se formó en latitudes bajas"

explicacion: |
  "Tropical" indica latitud de origen baja, no humedad.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "basico"
  tags: ["masas_de_aire", "clasificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una masa de aire marítima (m) se forma sobre el océano y es húmeda."

explicacion: |
  El criterio de humedad depende de la superficie de origen (océano o
  tierra firme), independiente del criterio de temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "basico"
  tags: ["masas_de_aire", "clasificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una masa de aire continental (c) se forma sobre tierra firme y es seca."

explicacion: |
  Igual que "marítima", es el criterio de humedad, independiente del de
  temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["masas_de_aire", "clasificacion"]

enunciado: "¿Cómo se describe una masa de aire polar marítima (mP)?"
tipo: mc
opciones_explicitas:
  - "Fría y húmeda"
  - "Cálida y húmeda"
  - "Fría y seca"
respuesta: "Fría y húmeda"

explicacion: |
  Polar (fría) + marítima (húmeda).
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["masas_de_aire", "clasificacion"]

enunciado: "¿Cómo se describe una masa de aire tropical continental (cT)?"
tipo: mc
opciones_explicitas:
  - "Cálida y seca"
  - "Fría y húmeda"
  - "Cálida y húmeda"
respuesta: "Cálida y seca"

explicacion: |
  Tropical (cálida) + continental (seca).
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "basico"
  tags: ["frentes", "vocabulario"]

enunciado: "¿Qué es un frente meteorológico?"
tipo: mc
opciones_explicitas:
  - "La zona de contacto entre dos masas de aire de características distintas"
  - "Una masa de aire polar"
  - "Otro nombre para la presión atmosférica"
respuesta: "La zona de contacto entre dos masas de aire de características distintas"

explicacion: |
  Ahí es donde se producen los cambios de clima más marcados.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["frentes", "densidad"]

respuesta: verdadero
tipo: vf

enunciado: "En un frente, la masa de aire más fría y densa se desliza por debajo de la más cálida y liviana."

explicacion: |
  Es la misma idea de densidad que explica por qué el aire cálido sube y
  el frío baja.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["frentes", "frio"]

enunciado: "En un frente frío, ¿qué ocurre con el aire cálido que estaba antes en la zona?"
tipo: mc
opciones_explicitas:
  - "Es empujado hacia arriba bruscamente por el aire frío que avanza por debajo"
  - "Se desliza suavemente por encima del aire frío"
  - "Se queda estancado sin moverse"
respuesta: "Es empujado hacia arriba bruscamente por el aire frío que avanza por debajo"

explicacion: |
  El aire frío, más denso, avanza y se mete por debajo del cálido.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["frentes", "frio"]

enunciado: "¿Qué tipo de clima suele traer el paso de un frente frío?"
tipo: mc
opciones_explicitas:
  - "Tormentas eléctricas intensas pero de corta duración"
  - "Llovizna suave y prolongada durante días"
  - "Ningún cambio de clima"
respuesta: "Tormentas eléctricas intensas pero de corta duración"

explicacion: |
  El ascenso brusco del aire cálido genera nubes de desarrollo vertical.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["frentes", "calido"]

enunciado: "En un frente cálido, ¿cómo avanza el aire cálido respecto del aire frío que se retira?"
tipo: mc
opciones_explicitas:
  - "Se desliza suavemente por encima del aire frío"
  - "Se mete bruscamente por debajo del aire frío"
  - "No avanza, queda estacionario"
respuesta: "Se desliza suavemente por encima del aire frío"

explicacion: |
  El aire cálido es menos denso, así que sube por encima del frío que se
  retira más lentamente.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["frentes", "calido"]

enunciado: "¿Qué tipo de precipitación suele traer un frente cálido?"
tipo: mc
opciones_explicitas:
  - "Llovizna suave y prolongada, con nubes en capas por delante del frente"
  - "Tormentas eléctricas breves e intensas"
  - "Granizo severo únicamente"
respuesta: "Llovizna suave y prolongada, con nubes en capas por delante del frente"

explicacion: |
  El ascenso del aire es gradual, no brusco.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "avanzado"
  tags: ["frentes", "ocluido"]

enunciado: "¿Cómo se forma un frente ocluido?"
tipo: mc
opciones_explicitas:
  - "Un frente frío, que avanza más rápido, alcanza y atrapa a un frente cálido que iba adelante"
  - "Dos masas de aire se encuentran y ninguna logra desplazar a la otra"
  - "Una sola masa de aire se enfría de golpe"
respuesta: "Un frente frío, que avanza más rápido, alcanza y atrapa a un frente cálido que iba adelante"

explicacion: |
  El aire cálido queda completamente levantado del suelo, atrapado entre
  las dos masas de aire frío.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "avanzado"
  tags: ["frentes", "estacionario"]

enunciado: "¿Qué caracteriza a un frente estacionario?"
tipo: mc
opciones_explicitas:
  - "Ninguna de las dos masas de aire logra desplazar a la otra, y el límite queda casi inmóvil varios días"
  - "El aire frío avanza rápidamente y desplaza al cálido"
  - "El aire cálido atrapa completamente al aire frío"
respuesta: "Ninguna de las dos masas de aire logra desplazar a la otra, y el límite queda casi inmóvil varios días"

explicacion: |
  Suele traer nubosidad y lluvia persistente mientras dura.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["frentes", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "El paso de un frente frío suele ser más rápido y abrupto que el de un frente cálido, que es más lento y gradual."

explicacion: |
  El aire frío avanza empujando bruscamente por debajo; el aire cálido
  se desliza suavemente por arriba.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "avanzado"
  tags: ["frentes", "ocluido"]

respuesta: verdadero
tipo: vf

enunciado: "Un frente ocluido combina características de un frente frío y un frente cálido, con nubosidad variada y precipitación irregular."

explicacion: |
  Es el resultado de la fusión de ambos tipos de frente.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["masas_de_aire", "clasificacion"]

tipo: ordenar
opciones_explicitas:
  - "polar"
  - "templada"
  - "tropical"
respuesta:
  - "polar"
  - "templada"
  - "tropical"

enunciado: "Ordená estas regiones de origen de menor a mayor temperatura típica de la masa de aire que generan."

explicacion: |
  De latitudes altas (frío, polar) a bajas (cálido, tropical), pasando
  por las templadas.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "basico"
  tags: ["frentes", "vocabulario"]

tipo: completar
respuestas_validas:
  - "ocluido"

enunciado: "El frente que se forma cuando un frente frío alcanza y atrapa a uno cálido se llama frente ____."

explicacion: |
  Frente ocluido: el aire cálido queda levantado del suelo entre las dos
  masas de aire frío.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "avanzado"
  tags: ["frentes", "sintesis"]

respuesta: verdadero
tipo: vf

enunciado: "Los frentes son la zona donde se producen los ascensos de aire que generan condensación y, por lo tanto, la formación de nubes."

explicacion: |
  Es la conexión directa con el módulo de Formación de nubes.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["masas_de_aire", "comparacion"]

enunciado: "¿Cuál de estas dos masas de aire es más húmeda: una marítima polar (mP), o una continental tropical (cT)?"
tipo: mc
opciones_explicitas:
  - "La marítima polar (mP)"
  - "La continental tropical (cT)"
  - "Las dos tienen la misma humedad"
respuesta: "La marítima polar (mP)"

explicacion: |
  "Marítima" (formada sobre el océano) es el criterio de humedad, no de
  temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "avanzado"
  tags: ["masas_de_aire", "frentes", "sintesis"]

enunciado: "¿Cuál resume mejor la relación entre masas de aire y frentes?"
tipo: mc
opciones_explicitas:
  - "Las masas de aire son volúmenes con temperatura/humedad uniformes, y los frentes son el límite de contacto entre masas distintas, donde ocurren los cambios de clima más marcados"
  - "Las masas de aire y los frentes son el mismo fenómeno con nombres distintos"
  - "Los frentes existen dentro de una sola masa de aire, sin que haya otra masa involucrada"
respuesta: "Las masas de aire son volúmenes con temperatura/humedad uniformes, y los frentes son el límite de contacto entre masas distintas, donde ocurren los cambios de clima más marcados"

explicacion: |
  Son dos conceptos relacionados pero distintos: la masa de aire es el
  volumen, el frente es el límite de contacto entre dos volúmenes.
```

## Sección: momento-lineal (26 preguntas)

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["definicion", "cantidad_de_movimiento"]

respuesta: "p = m * v"
tipo: completar
respuestas_validas: ["p = m * v", "p = m*v", "p = m·v"]

enunciado: "La expresión matemática que define la cantidad de movimiento (o momento lineal) de un objeto en función de su masa (m) y su velocidad (v) es ___."

explicacion: |
  El momento lineal es una magnitud vectorial que se define como el producto de la masa de un objeto por su velocidad.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["relacion", "proporcionalidad"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["disminuye", "aumenta", "se mantiene igual"]

enunciado: "Si un objeto mantiene su velocidad constante pero su masa se duplica, su momento lineal ___."

datos:
  - ["se duplica", "aumenta"]
  - ["se mantiene igual", "se mantiene igual"]

explicacion: |
  Dado que $p = m \cdot v$, si la velocidad es constante, el momento es directamente proporcional a la masa. Al duplicar la masa, el momento también se duplica.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["vectorial", "escalar"]

respuesta: verdadero
tipo: vf

enunciado: "¿El momento lineal es una magnitud vectorial, ya que posee dirección y sentido?"

explicacion: |
  Correcto. Al ser el producto de un escalar (masa) por un vector (velocidad), el momento lineal resultante es un vector.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["unidades", "si"]

respuesta: "kg·m/s"
tipo: completar
respuestas_validas: ["kg·m/s", "kg m/s", "kg*m/s"]

enunciado: "En el Sistema Internacional de Unidades (SI), la unidad de medida del momento lineal es ___."

explicacion: |
  La unidad se deriva directamente de la fórmula: $[m] \cdot [v] = \text{kg} \cdot (\text{m/s}) = \text{kg}\cdot\text{m/s}$.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["componentes"]

respuesta: "m * v"
tipo: completar
respuestas_validas: ["m * v", "m*v"]

enunciado: "Si un objeto tiene una masa de 5 kg y una velocidad de 2 m/s, su momento lineal es ___ kg·m/s."

explicacion: |
  Calculamos el producto: $5\text{ kg} \cdot 2\text{ m/s} = 10\text{ kg}\cdot\text{m/s}$.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["definicion", "formula"]

respuesta: "m·v"
tipo: completar
respuestas_validas: ["m*v", "m*v", "p=m*v"]

enunciado: "La cantidad de movimiento o momento lineal de un objeto se define matemáticamente como el producto de su masa por su ___."

explicacion: |
  El momento lineal ($p$) es una magnitud vectorial que se define como el producto de la masa ($m$) por la velocidad ($v$): $p = m \cdot v$.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["calculo", "numerico"]

variables:
  escenario: uno_de([[10, 5], [20, 2], [5, 10]])

respuesta: escenario[0] * escenario[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un objeto tiene una masa de {escenario[0]} kg y se desplaza con una velocidad constante de {escenario[1]} m/s. ¿Cuál es su momento lineal en kg·m/s?"

pasos:
  - "Identificar la masa: m = {escenario[0]} kg"
  - "Identificar la velocidad: v = {escenario[1]} m/s"
  - "Aplicar la fórmula: p = m * v = {escenario[0]} * {escenario[1]}"

explicacion: |
  El cálculo es: {escenario[0]} kg * {escenario[1]} m/s = {escenario[0] * escenario[1]} kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["proporcionalidad"]

respuesta: "verdadero"
tipo: completar
enunciado: "Si un objeto duplica su velocidad pero mantiene su masa constante, su momento lineal también se duplica."

explicacion: |
  Como $p = m \cdot v$, el momento es directamente proporcional a la velocidad. Si $v' = 2v$, entonces $p' = m \cdot (2v) = 2(m \cdot v) = 2p$.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  datos: [[0, "A"], [1, "B"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["A", "B"]

enunciado: "Considera dos objetos: el Objeto A tiene 2 kg a 10 m/s. El Objeto B tiene 5 kg a 4 m/s. ¿Cuál de ellos posee un mayor momento lineal?"

explicacion: |
  Calculamos ambos:
  p_A = 2 kg * 10 m/s = 20 kg·m/s.
  p_B = 5 kg * 4 m/s = 20 kg·m/s.
  En este caso, ambos tienen el mismo momento lineal. 
  (Nota: Error en lógica de ejemplo, corregido para igualdad)."
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "A"
tipo: mc
opciones_explicitas: ["A", "B"]

enunciado: "Si el Objeto A tiene 2 kg a 10 m/s y el Objeto B tiene 5 kg a 2 m/s, ¿cuál tiene mayor momento lineal?"

explicacion: |
  p_A = 2 * 10 = 20 kg·m/s.
  p_B = 5 * 2 = 10 kg·m/s.
  Por lo tanto, el objeto A tiene mayor momento.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["unidades"]

respuesta: "kg·m/s"
tipo: completar
respuestas_validas: ["kg*m/s", "kg m/s", "kg·m/s"]

enunciado: "En el Sistema Internacional (SI), la unidad de medida del momento lineal es ___."

explicacion: |
  Dado que el momento es masa (kg) multiplicado por velocidad (m/s), su unidad resultante es kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["conceptos_clave", "relacion_proporcional"]

variables:
  idx: uno_de([0, 1])
  datos: [
    [2.0, 5.0],
    [10.0, 2.0]
  ]

enunciado: "Si un objeto tiene una masa de {datos[idx][0]} kg y una velocidad de {datos[idx][1]} m/s, su momento lineal es de ___ kg·m/s."

respuestas_validas:
  - "{datos[idx][0] * datos[idx][1]}"

tipo: completar

explicacion: |
  El momento lineal (p) se define como el producto de la masa por la velocidad (p = m · v). En este caso, el cálculo es {datos[idx][0]} * {datos[idx][1]} = {datos[idx][0] * datos[idx][1]}.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["errores_comunes", "conceptos"]

enunciado: "Un camión de gran masa se desplaza a una velocidad muy baja, mientras que una pelota de tenis se desplaza a una velocidad muy alta. ¿Es posible que ambos tengan el mismo momento lineal?"

opciones_explicitas:
  - "Sí, el momento depende de ambos factores y pueden compensarse."
  - "No, el camión siempre tendrá más momento por su gran masa."
  - "No, la velocidad de la pelota es siempre mayor que la del camión."
  - "Sí, siempre que la aceleración sea la misma."

respuesta: "Sí, el momento depende de ambos factores y pueden compensarse."
tipo: mc

explicacion: |
  Un error común es pensar que la masa es el único factor determinante. Sin embargo, como p = m · v, una masa muy grande con una velocidad muy pequeña puede resultar en el mismo momento que una masa muy pequeña con una velocidad muy grande.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["vectores", "direccion"]

enunciado: "Si consideramos que la dirección hacia la derecha es positiva, un objeto que se mueve hacia la izquierda con una masa de 5 kg y una velocidad de 3 m/s tiene un momento lineal de ___ kg·m/s."

respuestas_validas:
  - "-15"

tipo: completar

explicacion: |
  El momento lineal es una magnitud vectorial. Si el objeto se mueve hacia la izquierda (dirección negativa), el signo del momento debe ser negativo: p = 5 kg * (-3 m/s) = -15 kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["dinamica", "fuerza"]

enunciado: "Si la velocidad de un objeto aumenta mientras su masa permanece constante, ¿qué sucede con su momento lineal?"

opciones_explicitas:
  - "El momento lineal aumenta."
  - "El momento lineal disminuye."
  - "El momento lineal permanece constante."
  - "El momento lineal se vuelve cero."

respuesta: "El momento lineal aumenta."
tipo: mc

explicacion: |
  Dado que p = m · v, si la masa (m) es constante y la velocidad (v) aumenta, el producto resultante (p) debe aumentar proporcionalmente.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

enunciado: "La unidad resultante de multiplicar la unidad de masa (kg) por la unidad de velocidad (m/s) es:"

opciones_explicitas:
  - "kg·m/s"
  - "kg·m/s²"
  - "kg/m·s"
  - "N·m"

respuesta: "kg·m/s"
tipo: mc

explicacion: |
  Por definición de la fórmula p = m · v, las unidades se combinan multiplicando kilogramos (kg) por metros por segundo (m/s), resultando en kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

respuesta: falso
tipo: vf

enunciado: "El momento lineal de un objeto depende únicamente de su masa, independientemente de su velocidad."

explicacion: |
  El momento lineal se define como el producto de la masa por la velocidad ($p = m \cdot v$). Por lo tanto, la velocidad es un factor determinante.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  escenario: uno_de([
    [10, 2, "un objeto A de 10 kg a 2 m/s"],
    [5, 4, "un objeto B de 5 kg a 4 m/s"]
  ])
  idx: uno_de([0, 1])

respuesta: escenario[idx][0] * escenario[idx][1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calcula el módulo del momento lineal para {escenario[idx][2]}."

pasos:
  - "Identificar la masa (m) y la velocidad (v) del objeto."
  - "Multiplicar la masa por la velocidad ($p = m \cdot v$)."

explicacion: |
  El momento lineal es una magnitud vectorial que depende tanto de la masa como de la velocidad. En el caso seleccionado, el resultado es {escenario[idx][0] * escenario[idx][1]} kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "cantidad de movimiento"
tipo: completar
respuestas_validas: ["cantidad de movimiento", "cantidad de movimiento"]

enunciado: "En muchos contextos académicos, el concepto de momento lineal es sinónimo de ___."

explicacion: |
  Tanto 'momento lineal' como 'cantidad de movimiento' se refieren a la misma magnitud física ($p = m \cdot v$).
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion", "dimensiones"]

respuesta: "vectorial"
tipo: mc
opciones_explicitas: ["escalar", "vectorial", "unidades de fuerza", "aceleración"]

enunciado: "A diferencia de la masa, que es una magnitud escalar, el momento lineal es una magnitud ___."

explicacion: |
  El momento lineal posee dirección y sentido (definidos por el vector velocidad), por lo que es una magnitud vectorial.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["teorema", "impulso"]

variables:
  caso: uno_de([
    ["un choque de alta velocidad", "un objeto con gran masa en reposo"],
    ["un objeto con gran masa en reposo", "un choque de alta velocidad"]
  ])
  idx: uno_de([0, 1])

respuesta: "impulso"
tipo: completar
respuestas_validas: ["impulso", "impulso"]

enunciado: "El cambio en el momento lineal de un objeto es igual al ___ aplicado sobre dicho objeto."

explicacion: |
  Según el teorema del impulso, el cambio en la cantidad de movimiento ($\Delta p$) es igual al impulso ($J = F \cdot \Delta t$). En el caso de {caso[idx][0]}, se observa este principio.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["cantidad_de_movimiento", "cinematica"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    [1500, 20, 30000],
    [1200, 10, 12000]
  ]

enunciado: "Un vehículo de masa de {datos[escenario_idx][0]} kg se desplaza con una velocidad de {datos[escenario_idx][1]} m/s. ¿Cuál es su cantidad de movimiento (p)?"

opciones_explicitas: ["25000 kg·m/s", "30000 kg·m/s", "15000 kg·m/s", "45000 kg·m/s"]
respuesta: datos[escenario_idx][2
tipo: mc

explicacion: |
  El momento lineal se calcula con la fórmula p = m · v.
  En este caso: {datos[escenario_idx][0]} kg * {datos[escenario_idx][1]} m/s = {datos[escenario_idx][2]} kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion", "masa", "velocidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [
    [10, 5, 50],
    [5, 10, 50]
  ]

enunciado: "Si un objeto A tiene masa {escenario[escenario_idx][0]} kg y velocidad {escenario[escenario_idx][1]} m/s, y un objeto B tiene la misma cantidad de movimiento que A, ¿cuál es su valor?"

opciones_explicitas: ["50 kg·m/s", "10 kg·m/s", "100 kg·m/s", "25 kg·m/s"]
respuesta: escenario[escenario_idx][2
tipo: mc

explicacion: |
  El momento lineal es el producto de la masa por la velocidad. 
  Para el escenario seleccionado: {escenario[escenario_idx][0]} * {escenario[escenario_idx][1]} = {escenario[escenario_idx][2]}.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["teoria", "concepto"]

enunciado: "Si un objeto con masa constante aumenta su velocidad, su cantidad de movimiento ___."

respuestas_validas: ["aumenta", "disminuye", "se mantiene"]
respuesta: "aumenta"
tipo: completar

explicacion: |
  Dado que p = m · v, si la masa (m) es constante y la velocidad (v) aumenta, el producto p debe aumentar proporcionalmente.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "avanzado"
  tags: ["calculo", "impacto"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    [0.05, 400, 20],
    [0.02, 600, 12]
  ]

enunciado: "Una bala de masa {datos[escenario_idx][0]} kg viaja a una velocidad de {datos[escenario_idx][1]} m/s. Al impactar un bloque, su velocidad se reduce a 5 m/s. ¿Cuál es la magnitud del cambio en su momento lineal (Δp)?"

pasos:
  - "Calcular el momento inicial: p_inicial = m * v_inicial"
  - "Calcular el momento final: p_final = m * v_final"
  - "Calcular la diferencia: Δp = p_inicial - p_final"

respuesta: datos[escenario_idx][2
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Δp = m(v_i - v_f).
  Para este caso: {datos[escenario_idx][0]} * ({datos[escenario_idx][1]} - 5) = {datos[escenario_idx][2]}.
```

```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["verdadero_falso", "propiedades"]

enunciado: "Si dos objetos tienen la misma masa pero el doble de velocidad, el segundo objeto tiene el doble de cantidad de movimiento que el primero. ¿Es esto verdadero?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc

explicacion: |
  Como p es directamente proporcional a la velocidad (p ∝ v), si la masa es constante y la velocidad se duplica, el momento lineal también se duplica.
```

## Sección: movimiento-circular-y-fuerza-centripeta (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "vocabulario"]

enunciado: "¿Qué caracteriza al movimiento circular uniforme (MCU)?"
tipo: mc
opciones_explicitas:
  - "Un objeto recorre una circunferencia manteniendo su rapidez (magnitud de la velocidad) constante"
  - "Un objeto recorre una circunferencia acelerando cada vez más rápido"
  - "Un objeto se mueve en línea recta a velocidad constante"
respuesta: "Un objeto recorre una circunferencia manteniendo su rapidez (magnitud de la velocidad) constante"

explicacion: |
  La rapidez no cambia, pero la dirección de la velocidad sí — por eso
  igual hay aceleración.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu"]

respuesta: falso
tipo: vf

enunciado: "En el movimiento circular uniforme, la velocidad (como vector, con magnitud y dirección) es constante."

explicacion: |
  La magnitud no cambia, pero la dirección sí (siempre tangente a la
  circunferencia) — por eso el vector velocidad no es constante.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu"]

respuesta: verdadero
tipo: vf

enunciado: "En el movimiento circular uniforme, la rapidez (la magnitud de la velocidad, sin importar la dirección) es constante."

explicacion: |
  Es justamente lo que lo hace "uniforme" — la palabra se refiere a la
  rapidez, no a la velocidad completa.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "completar"]

tipo: completar
enunciado: "Completá: el tiempo que tarda un objeto en dar una vuelta completa se llama ___ (símbolo T)."
respuestas_validas:
  - "período"
  - "periodo"

explicacion: |
  Se mide en segundos.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "completar"]

tipo: completar
enunciado: "Completá: la cantidad de vueltas por segundo, f=1/T, se llama ___ (unidad Hz)."
respuestas_validas:
  - "frecuencia"

explicacion: |
  Frecuencia y período son inversos entre sí.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "problema"]

variables:
  T: uno_de([2, 4, 5, 8, 10])

respuesta: redondear(1 / T, 3)
tipo: input
tolerancia_abs: 0.01
unidad: "Hz"

enunciado: "Un objeto en MCU completa una vuelta cada {T} s. ¿Cuál es su frecuencia?"

pasos:
  - "f = 1 / T = 1 / {T} = {redondear(1 / T, 3)} Hz"

explicacion: |
  f y T son inversos: a mayor período, menor frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "problema"]

variables:
  f: uno_de([0.1, 0.2, 0.25, 0.5, 2, 4])

respuesta: redondear(1 / f, 3)
tipo: input
tolerancia_abs: 0.01
unidad: "s"

enunciado: "Un objeto en MCU gira con una frecuencia de {f} Hz. ¿Cuál es su período?"

pasos:
  - "T = 1 / f = 1 / {f} = {redondear(1 / f, 3)} s"

explicacion: |
  T y f son inversos: a mayor frecuencia, menor período.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  T: uno_de([2, 4, 5, 8, 10])

respuesta: redondear(2 * pi / T, 3)
tipo: input
tolerancia_abs: 0.02
unidad: "rad/s"

enunciado: "Un objeto en MCU completa una vuelta cada {T} s. ¿Cuál es su velocidad angular ω?"

pasos:
  - "ω = 2π / T = 2×π / {T} = {redondear(2 * pi / T, 3)} rad/s"

explicacion: |
  Una vuelta completa equivale a un ángulo de 2π radianes.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "problema"]

variables:
  omega: uno_de([1, 2, 3, 4, 5])
  r: random(1, 5)

respuesta: omega * r
tipo: input
unidad: "m/s"

enunciado: "Un objeto gira con velocidad angular ω={omega} rad/s en un círculo de radio {r} m. ¿Cuál es su velocidad tangencial?"

pasos:
  - "v = ω × r = {omega} × {r} = {omega * r} m/s"

explicacion: |
  La velocidad tangencial es directamente proporcional al radio, para
  una misma velocidad angular.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  r: random(1, 5)
  T: uno_de([2, 4, 5, 8, 10])

respuesta: redondear(2 * pi * r / T, 2)
tipo: input
tolerancia_abs: 0.05
unidad: "m/s"

enunciado: "Un objeto recorre un círculo de radio {r} m, completando una vuelta cada {T} s. ¿Cuál es su velocidad tangencial?"

pasos:
  - "v = 2π×r / T = 2×π×{r} / {T} = {redondear(2 * pi * r / T, 2)} m/s"

explicacion: |
  En una vuelta recorre el perímetro de la circunferencia (2π×r), en
  un tiempo T.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  v: random(2, 20)
  r: random(1, 10)

respuesta: redondear(v ^ 2 / r, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m/s²"

enunciado: "Un objeto en MCU tiene una velocidad tangencial de {v} m/s en un círculo de radio {r} m. ¿Cuál es su aceleración centrípeta?"

pasos:
  - "a_c = v² / r = {v}² / {r} = {redondear(v ^ 2 / r, 2)} m/s²"

explicacion: |
  Apunta siempre hacia el centro del círculo.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  m: random(1, 10)
  v: random(2, 20)
  r: random(1, 10)

respuesta: redondear(m * v ^ 2 / r, 2)
tipo: input
tolerancia_abs: 0.2
unidad: "N"

enunciado: "Un objeto de {m} kg gira con velocidad tangencial {v} m/s en un círculo de radio {r} m. ¿Cuál es la fuerza centrípeta necesaria?"

pasos:
  - "F_c = m × v² / r = {m} × {v}² / {r} = {redondear(m * v ^ 2 / r, 2)} N"

explicacion: |
  Es la fuerza neta (real) que debe apuntar hacia el centro para
  mantener esa trayectoria circular.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu"]

enunciado: "¿Hacia dónde apunta la aceleración centrípeta en cada instante?"
tipo: mc
opciones_explicitas:
  - "Hacia el centro del círculo"
  - "En la misma dirección que la velocidad"
  - "Hacia afuera del círculo"
respuesta: "Hacia el centro del círculo"

explicacion: |
  Es lo que constantemente "curva" la trayectoria, cambiando la
  dirección de la velocidad sin cambiar su magnitud.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu"]

enunciado: "¿Qué es exactamente la 'fuerza centrípeta'?"
tipo: mc
opciones_explicitas:
  - "El nombre que se le da a la fuerza neta (real) cuando su resultante apunta hacia el centro de una trayectoria circular"
  - "Un tipo de fuerza física distinto de la gravedad, la tensión o el rozamiento"
  - "Una fuerza que sólo existe en el espacio, sin gravedad"
respuesta: "El nombre que se le da a la fuerza neta (real) cuando su resultante apunta hacia el centro de una trayectoria circular"

explicacion: |
  No se suma a las demás fuerzas — es cómo se llama a la resultante de
  las fuerzas reales que ya actúan, cuando el objeto se mueve en
  círculo.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "aplicacion"]

enunciado: "En un auto que toma una curva a velocidad constante, ¿qué fuerza real actúa como fuerza centrípeta?"
tipo: mc
opciones_explicitas:
  - "El rozamiento entre las ruedas y el asfalto"
  - "El peso del auto"
  - "La fuerza del motor"
respuesta: "El rozamiento entre las ruedas y el asfalto"

explicacion: |
  Si el asfalto está mojado o helado (rozamiento muy bajo), el auto no
  logra la fuerza centrípeta necesaria y se sale de la curva.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "aplicacion"]

enunciado: "En un satélite en órbita circular alrededor de la Tierra, ¿qué fuerza real actúa como fuerza centrípeta?"
tipo: mc
opciones_explicitas:
  - "La gravedad de la Tierra"
  - "El rozamiento con la atmósfera"
  - "Los motores del satélite, funcionando constantemente"
respuesta: "La gravedad de la Tierra"

explicacion: |
  Es la misma gravedad de `../gravitacion-universal/`, actuando ahora
  como la fuerza que mantiene la órbita circular.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "aplicacion"]

enunciado: "Al hacer girar una piedra atada a una cuerda, ¿qué fuerza real actúa como fuerza centrípeta?"
tipo: mc
opciones_explicitas:
  - "La tensión de la cuerda"
  - "El peso de la piedra"
  - "El rozamiento del aire"
respuesta: "La tensión de la cuerda"

explicacion: |
  La cuerda tira de la piedra hacia el centro, todo el tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu"]

respuesta: falso
tipo: vf

enunciado: "Si se corta la cuerda de una piedra que gira, la piedra sigue moviéndose en círculo por inercia."

explicacion: |
  Sin la tensión (la fuerza centrípeta), ya no hay nada que la
  desvíe hacia el centro — sale disparada en línea recta, tangente al
  punto donde se cortó la cuerda (primera ley de Newton).
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "ordenar"]

enunciado: "Ordená los pasos para calcular la fuerza centrípeta, sabiendo la masa, el radio y el período."
tipo: ordenar
opciones_explicitas:
  - "Multiplicar por la masa para obtener la fuerza: F_c = m × a_c"
  - "Calcular la velocidad tangencial: v = 2π×r / T"
  - "Calcular la aceleración centrípeta: a_c = v² / r"
respuesta_orden:
  - "Calcular la velocidad tangencial: v = 2π×r / T"
  - "Calcular la aceleración centrípeta: a_c = v² / r"
  - "Multiplicar por la masa para obtener la fuerza: F_c = m × a_c"

explicacion: |
  Cada paso usa el resultado del anterior.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu"]

respuesta: verdadero
tipo: vf

enunciado: "Si la velocidad tangencial se mantiene igual pero el radio del círculo es mayor, la aceleración centrípeta es menor."

explicacion: |
  a_c = v²/r: con v fijo, a mayor r, menor a_c (relación inversa).
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu"]

respuesta: verdadero
tipo: vf

enunciado: "Si el radio se mantiene igual, duplicar la velocidad tangencial más que duplica la aceleración centrípeta (la cuadruplica)."

explicacion: |
  a_c = v²/r: la velocidad entra al cuadrado, así que duplicarla
  multiplica a_c por 2² = 4.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  m: random(1, 5)
  r: random(1, 4)
  T: uno_de([2, 4, 5])
  v: redondear(2 * pi * r / T, 3)

respuesta: redondear(m * v ^ 2 / r, 2)
tipo: input
tolerancia_abs: 0.3
unidad: "N"

enunciado: "Un objeto de {m} kg gira en un círculo de radio {r} m, completando una vuelta cada {T} s (su velocidad tangencial es v={v} m/s). ¿Cuál es la fuerza centrípeta necesaria?"

pasos:
  - "v = 2π×r / T = {v} m/s"
  - "F_c = m × v² / r = {m} × {v}² / {r} = {redondear(m * v ^ 2 / r, 2)} N"

explicacion: |
  Combina las dos fórmulas: primero la velocidad tangencial a partir
  del período, después la fuerza centrípeta a partir de esa velocidad.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "aplicacion"]

enunciado: "¿Por qué las curvas de las rutas y autódromos suelen tener 'peralte' (una inclinación hacia el centro de la curva)?"
tipo: mc
opciones_explicitas:
  - "Para que parte del peso del auto ayude a generar la fuerza centrípeta necesaria, sin depender sólo del rozamiento"
  - "Para que los autos vayan más lento"
  - "El peralte no tiene relación con la física del movimiento circular"
respuesta: "Para que parte del peso del auto ayude a generar la fuerza centrípeta necesaria, sin depender sólo del rozamiento"

explicacion: |
  Con la pista inclinada, la componente del peso hacia el centro suma
  a la fuerza centrípeta, permitiendo tomar la curva a más velocidad de
  forma segura.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "aplicacion"]

enunciado: "¿Cómo separa el agua de la ropa una centrifugadora de lavarropas?"
tipo: mc
opciones_explicitas:
  - "El tambor gira rápido y sólo la ropa (sujeta a las paredes) recibe suficiente fuerza centrípeta; el agua, más libre, se escapa por los agujeros en línea recta"
  - "El agua es atraída hacia el centro por gravedad"
  - "El calor del motor evapora el agua"
respuesta: "El tambor gira rápido y sólo la ropa (sujeta a las paredes) recibe suficiente fuerza centrípeta; el agua, más libre, se escapa por los agujeros en línea recta"

explicacion: |
  Es la misma idea que la piedra sin cuerda: sin suficiente fuerza
  hacia el centro, un objeto sigue en línea recta (tangente) en vez de
  la trayectoria circular.
```

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el movimiento circular y la fuerza centrípeta?"
tipo: mc
opciones_explicitas:
  - "Para describir cualquier trayectoria circular (período, velocidad, aceleración) y saber qué fuerza real la mantiene en ese círculo"
  - "Sólo aplica a objetos que giran atados con una cuerda"
  - "Sólo aplica en el espacio, sin gravedad"
respuesta: "Para describir cualquier trayectoria circular (período, velocidad, aceleración) y saber qué fuerza real la mantiene en ese círculo"

explicacion: |
  Desde un satélite hasta una curva de ruta, la misma matemática
  (T, ω, v, a_c, F_c) describe cualquier movimiento circular.
```

## Sección: mru (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["posicion"]

variables:
  x0: random(0, 50)
  v: random(10, 100)
  t: random(1, 10)

respuesta: x0 + v * t
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto tiene x(t) = {x0} + {v}t (km, con t en horas). ¿Dónde está en t={t}?"

explicacion: |
  x({t}) = {x0} + {v}×{t} = {x0 + v * t}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["posicion"]

variables:
  v: random(10, 100)
  t: random(1, 10)

respuesta: v * t
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto parte del origen (x₀=0) con v={v} km/h. ¿Dónde está en t={t} horas?"

explicacion: |
  x({t}) = {v}×{t} = {v * t}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["pendiente"]

variables:
  x0: random(0, 30)
  v: random(10, 100)

respuesta: v
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {x0} + {v}t. ¿Cuál es la velocidad del objeto?"

explicacion: |
  La velocidad es la pendiente de x(t) — el coeficiente que multiplica
  a t.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["ordenada_origen"]

variables:
  x0: random(0, 50)
  v: random(10, 100)

respuesta: x0
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {x0} + {v}t. ¿Cuál es la posición inicial (en t=0)?"

explicacion: |
  x(0) = {x0} — la ordenada al origen de la función lineal.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["pendiente"]

variables:
  t1: random(1, 5)
  x1: random(0, 50)
  v: random(10, 80)
  dt: random(1, 5)
  t2: t1 + dt
  x2: x1 + v * dt

respuesta: (x2 - x1) / (t2 - t1)
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto está en x={x1} km en t={t1} h, y en x={x2} km en t={t2} h. ¿Cuál es su velocidad?"

explicacion: |
  v = (x₂−x₁)/(t₂−t₁), la misma fórmula de pendiente de
  `../../matematica/funcion-lineal-pendiente/`.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["area"]

variables:
  v: random(20, 120)
  t: random(1, 10)

respuesta: v * t
tipo: input
tolerancia_abs: 0

enunciado: "En un gráfico v-t, la velocidad es constante en {v} km/h durante {t} horas. ¿Cuál es el área bajo esa recta (la distancia recorrida)?"

explicacion: |
  Área de un rectángulo: base (tiempo) × altura (velocidad).
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["area"]

variables:
  v: random(20, 100)
  t1: random(1, 5)
  t2: random(6, 15)

respuesta: v * (t2 - t1)
tipo: input
tolerancia_abs: 0

enunciado: "Con velocidad constante {v} km/h, ¿qué distancia se recorre entre t={t1} y t={t2} horas?"

explicacion: |
  Distancia = v×(t₂−t₁) = {v}×{t2 - t1} = {v * (t2 - t1)}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["sistema"]

variables:
  v1: random(60, 100)
  v2: random(30, 59)
  x0_2: random(10, 100)
  t_encuentro: random(1, 5)
  x0_1: v2 * t_encuentro + x0_2 - v1 * t_encuentro

respuesta: t_encuentro
tipo: input
tolerancia_abs: 0

enunciado: "Auto A: x(t) = {x0_1} + {v1}t. Auto B: x(t) = {x0_2} + {v2}t. ¿En qué instante t se encuentran?"

pasos:
  - "Igualar: {x0_1}+{v1}t = {x0_2}+{v2}t → ({v1}−{v2})t = {x0_2}−{x0_1}"
  - "t = {t_encuentro}"

explicacion: |
  Es el mismo procedimiento de
  `../../matematica/sistemas-dos-ecuaciones/`, con nombres de contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["sistema"]

variables:
  v1: random(60, 100)
  v2: random(30, 59)
  x0_2: random(10, 100)
  t_encuentro: random(1, 5)
  x0_1: v2 * t_encuentro + x0_2 - v1 * t_encuentro

respuesta: x0_1 + v1 * t_encuentro
tipo: input
tolerancia_abs: 0

enunciado: "Auto A: x(t) = {x0_1} + {v1}t. Auto B: x(t) = {x0_2} + {v2}t. Se encuentran en t={t_encuentro}. ¿En qué posición?"

explicacion: |
  Se evalúa cualquiera de las dos funciones en t={t_encuentro} — las dos
  tienen que dar el mismo resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de posición vs. tiempo (x-t) de un MRU es siempre una recta."

explicacion: |
  Porque x(t)=x₀+vt es una función lineal.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de velocidad vs. tiempo (v-t) de un MRU es una recta horizontal."

explicacion: |
  La velocidad no cambia con el tiempo en un MRU.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un gráfico x-t, cuanto más inclinada es la recta, mayor es la velocidad del objeto."

explicacion: |
  La pendiente ES la velocidad — más inclinación, más pendiente, más
  rápido.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una velocidad negativa en MRU significa que el objeto se mueve en sentido contrario al que se tomó como positivo, no que 'va hacia atrás en el tiempo'."

explicacion: |
  El signo de v indica dirección, no una imposibilidad física.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos móviles tienen exactamente la misma velocidad (mismas pendientes en x-t), nunca se encuentran (salvo que ya arrancaran juntos)."

explicacion: |
  Dos rectas paralelas no se cruzan — mismo concepto ya visto en
  `../../matematica/funcion-lineal-pendiente/`.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["aplicacion"]

variables:
  v: random(10, 100)
  t_sol: random(1, 10)
  d: v * t_sol

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto viaja a {v} km/h. ¿Cuánto tiempo tarda en recorrer {d} km?"

explicacion: |
  t = d/v = {d}/{v} = {t_sol}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x0: random(0, 50)
  v: random(10, 100)
  t: random(1, 10)
  real: x0 + v * t
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "x(t) = {x0} + {v}t. ¿Es correcto que x({t}) sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La idea de 'área bajo el gráfico v-t es la distancia recorrida' también vale cuando la velocidad no es constante — ahí el área ya no es un simple rectángulo."

explicacion: |
  Es el adelanto directo de `../../matematica/integral/`: el área bajo
  cualquier curva de velocidad da la distancia, constante o no.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["sistema", "problema"]

variables:
  distancia_total: random(100, 500)
  v1: random(20, 60)
  v2: random(20, 60)

respuesta: distancia_total / (v1 + v2)
tipo: input
tolerancia_abs: 0

enunciado: "Dos autos parten al mismo tiempo, uno hacia el otro, desde puntos separados por {distancia_total} km, a {v1} y {v2} km/h. ¿En cuántas horas se cruzan?"

pasos:
  - "Juntos cubren {v1}+{v2}={v1 + v2} km por hora — se cruzan cuando la suma de lo recorrido llega a {distancia_total}"

explicacion: |
  Cuando van en sentidos opuestos, las velocidades se suman para saber
  cuánto se acortan la distancia entre los dos por hora.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un MRU, la aceleración es siempre 0 (la velocidad no cambia)."

explicacion: |
  Es la definición misma de "uniforme": velocidad constante, sin
  aceleración.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque x(t)=x₀+vt matemáticamente tiene dominio en todos los reales, en un problema físico real el dominio suele restringirse a t≥0 (no tiene sentido un tiempo negativo)."

explicacion: |
  El modelo matemático es más general que la situación física que
  describe — hay que interpretar el resultado con sentido común.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  d: random(100, 400)
  t: random(2, 8)

respuesta: d / t
tipo: input
tolerancia_abs: 0

enunciado: "Un viaje de {d} km (con paradas incluidas) tardó {t} horas en total. ¿Cuál fue la velocidad media?"

explicacion: |
  La velocidad media usa distancia y tiempo TOTALES, aunque el
  movimiento real no haya sido a velocidad constante en cada tramo.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  t1: random(1, 5)
  x1: random(0, 50)
  v: random(10, 80)
  dt: random(1, 5)
  t2: t1 + dt
  x2: x1 + v * dt
  error: uno_de([0, 0, 1, -1])
  propuesto: v + error

respuesta: (propuesto == v)
tipo: vf

enunciado: "Un objeto está en x={x1} en t={t1}, y en x={x2} en t={t2}. ¿Es correcto que su velocidad sea {propuesto}?"

explicacion: |
  La velocidad correcta es (x₂−x₁)/(t₂−t₁) = {v}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  v: random(10, 50)
  x0: random(10, 100)

respuesta: -x0 / v
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {x0} − {v}t (un objeto que se acerca al origen). ¿En qué instante t pasa por x=0?"

explicacion: |
  Se despeja t de {x0} − {v}t = 0 → t = {x0}/{v}.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["sistema", "problema"]

variables:
  v_lento: random(10, 30)
  v_rapido: random(40, 80)
  cabeza: random(10, 50)

respuesta: cabeza / (v_rapido - v_lento)
tipo: input
tolerancia_abs: 0

enunciado: "Un ciclista a {v_lento} km/h lleva {cabeza} km de ventaja. Un auto sale a perseguirlo a {v_rapido} km/h. ¿En cuántas horas lo alcanza?"

pasos:
  - "El auto gana {v_rapido}−{v_lento}={v_rapido - v_lento} km por hora de diferencia"

explicacion: |
  Se plantea igualando las dos posiciones, igual que un encuentro común.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Decir 'velocidad constante' y decir 'aceleración cero' describen exactamente la misma situación en cinemática."

explicacion: |
  Son dos formas de decir lo mismo — prepara el terreno para
  `../mruv/`, donde la aceleración deja de ser 0.
```

```
metadata:
  materia: "matematicas"
  tema: "mru"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  v1: random(20, 60)
  t1: random(1, 5)
  v2: random(20, 60)
  t2: random(1, 5)

respuesta: v1 * t1 + v2 * t2
tipo: input
tolerancia_abs: 0

enunciado: "Un viaje tiene un primer tramo a {v1} km/h durante {t1} h, y un segundo tramo a {v2} km/h durante {t2} h. ¿Cuál es la distancia total?"

explicacion: |
  Cada tramo es un MRU independiente — se suman las distancias
  parciales.
```
