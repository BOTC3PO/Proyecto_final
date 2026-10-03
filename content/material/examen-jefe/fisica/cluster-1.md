# Examen jefe — [PENDIENTE #736]

> Logro #736. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **115 preguntas totales** en 5/5 secciones.

---

## Sección: cargas-electricas (22 preguntas)

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

enunciado: "¿Qué es la carga eléctrica?"
tipo: mc
opciones_explicitas:
  - "Una propiedad fundamental de la materia, que puede ser positiva o negativa"
  - "La cantidad de energía que gasta un aparato eléctrico"
  - "La velocidad a la que se mueve la corriente eléctrica"
respuesta: "Una propiedad fundamental de la materia, que puede ser positiva o negativa"

explicacion: |
  Es una propiedad, no una cantidad de energía ni una velocidad.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

enunciado: "¿Qué partícula del átomo tiene carga positiva?"
tipo: mc
opciones_explicitas:
  - "El protón"
  - "El electrón"
  - "El neutrón"
respuesta: "El protón"

explicacion: |
  Está en el núcleo del átomo, junto con el neutrón.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

enunciado: "¿Qué partícula del átomo tiene carga negativa?"
tipo: mc
opciones_explicitas:
  - "El electrón"
  - "El protón"
  - "El neutrón"
respuesta: "El electrón"

explicacion: |
  Orbita alrededor del núcleo del átomo.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El neutrón no tiene carga eléctrica: es neutro."

explicacion: |
  Por eso se llama \"neutrón\" — ni positivo ni negativo.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Dos cargas del mismo signo (las dos positivas, o las dos negativas) se repelen entre sí."

explicacion: |
  Es la regla básica de interacción entre cargas iguales.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una carga positiva y una carga negativa se atraen entre sí."

explicacion: |
  Es la regla básica de interacción entre cargas opuestas.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

enunciado: "¿Qué ocurre entre dos objetos cargados positivamente?"
tipo: mc
opciones_explicitas:
  - "Se repelen"
  - "Se atraen"
  - "No interactúan de ninguna forma"
respuesta: "Se repelen"

explicacion: |
  Son cargas del mismo signo.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

enunciado: "¿Qué ocurre entre un objeto cargado positivamente y otro cargado negativamente?"
tipo: mc
opciones_explicitas:
  - "Se atraen"
  - "Se repelen"
  - "No interactúan de ninguna forma"
respuesta: "Se atraen"

explicacion: |
  Son cargas de signo opuesto.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "intermedio"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un objeto neutro tiene la misma cantidad de protones que de electrones, así que su carga total es cero."

explicacion: |
  Las cargas positivas y negativas se cancelan exactamente.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "intermedio"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un objeto se carga positivamente cuando pierde electrones, quedando con más protones que electrones."

explicacion: |
  Los protones no se van: lo que cambia es la cantidad de electrones.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "intermedio"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un objeto se carga negativamente cuando gana electrones, quedando con más electrones que protones."

explicacion: |
  Es el proceso inverso al de cargarse positivo.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "avanzado"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los protones no se transfieren fácilmente entre objetos, porque están fuertemente sujetos en el núcleo del átomo — son los electrones los que se mueven."

explicacion: |
  Es la razón de fondo por la que un objeto se carga ganando o perdiendo
  electrones, no protones.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "intermedio"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La carga total de un sistema aislado no se crea ni se destruye: sólo se transfiere de un objeto a otro."

explicacion: |
  Si un objeto pierde electrones, esos electrones no desaparecen: pasan
  a otro objeto.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "intermedio"
  tags: ["cargas_electricas", "calculo"]

variables:
  protones: random(10, 30)
  electrones: random(5, 30)

respuesta: protones - electrones
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto tiene {protones} protones y {electrones} electrones. ¿Cuál es su carga neta, en unidades de carga elemental?"

explicacion: |
  Se resta la cantidad de electrones de la cantidad de protones.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "avanzado"
  tags: ["cargas_electricas", "calculo"]

variables:
  protones: random(10, 30)
  carga_neta: random(-10, 10)

respuesta: protones - carga_neta
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto tiene {protones} protones y una carga neta de {carga_neta}. ¿Cuántos electrones tiene?"

explicacion: |
  Se despeja la cantidad de electrones de la fórmula de carga neta.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "intermedio"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Frotar un globo contra el pelo transfiere electrones de un objeto a otro, dejando a los dos cargados — es un ejemplo cotidiano de electricidad estática."

explicacion: |
  Por eso después el globo puede atraer el pelo: quedaron con cargas
  opuestas.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "avanzado"
  tags: ["cargas_electricas", "comparacion"]

variables:
  protones_a: random(10, 20)
  electrones_a: random(15, 25)
  protones_b: random(20, 30)
  electrones_b: random(5, 15)

respuesta: ((protones_b - electrones_b) > (protones_a - electrones_a))
tipo: vf

enunciado: "Objeto A: {protones_a} protones, {electrones_a} electrones. Objeto B: {protones_b} protones, {electrones_b} electrones. ¿La carga neta del objeto B es mayor que la del objeto A?"

explicacion: |
  Se calcula la carga neta de cada uno (protones menos electrones) y se
  comparan.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "orden"]

tipo: ordenar
enunciado: "Ordená estos objetos de menor a mayor carga neta."
opciones_explicitas:
  - "Carga neta +3"
  - "Carga neta -5"
  - "Carga neta 0 (neutro)"
respuesta_orden: ["Carga neta -5", "Carga neta 0 (neutro)", "Carga neta +3"]

explicacion: |
  Se ordenan como cualquier número con signo: de más negativo a más
  positivo.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "intermedio"
  tags: ["cargas_electricas", "verificacion"]

variables:
  protones: random(10, 30)
  electrones: random(5, 30)
  correcto: protones - electrones
  error: uno_de([0, 0, 0, 3, -3])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? {protones} protones, {electrones} electrones, carga neta informada: {mostrado}."

explicacion: |
  Se vuelve a restar electrones de protones y se compara con el valor
  informado.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "intermedio"
  tags: ["cargas_electricas"]

variables:
  electrones: random(10, 30)
  carga_neta: random(-10, 10)
  protones: electrones + carga_neta

tipo: completar
enunciado: "Un objeto tiene {electrones} electrones y una carga neta de {carga_neta}. Completá: ___ (cantidad de protones) = {electrones} + {carga_neta}."
respuestas_validas:
  - protones

explicacion: |
  Se despeja la cantidad de protones sumando la carga neta a la
  cantidad de electrones.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una pila o batería mantiene una diferencia de cargas entre sus dos extremos, lo que impulsa el movimiento de electrones por un circuito."

explicacion: |
  Es un ejemplo real y cotidiano de por qué importa entender cargas
  positivas y negativas.
```

```
metadata:
  materia: "fisica"
  tema: "cargas_electricas"
  nivel: "basico"
  tags: ["cargas_electricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un objeto se carga positivo o negativo según pierda o gane electrones (no protones), las cargas iguales se repelen y las opuestas se atraen, y la carga total siempre se conserva."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: estatica/centro-de-gravedad (21 preguntas)

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "basico"
  tags: ["estatica", "vocabulario"]

enunciado: "¿Qué es el centro de gravedad de un cuerpo?"
tipo: mc
opciones_explicitas:
  - "El punto en el que se puede considerar concentrado todo el peso del cuerpo, para calcular momentos y equilibrio"
  - "El punto más pesado del cuerpo"
  - "El punto donde se mide la temperatura del cuerpo"
respuesta: "El punto en el que se puede considerar concentrado todo el peso del cuerpo, para calcular momentos y equilibrio"

explicacion: |
  Es una simplificación útil: en vez de sumar el peso de cada
  partícula del cuerpo, se trabaja como si todo el peso actuara en un
  solo punto.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "basico"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "En un cuerpo uniforme y simétrico (una esfera maciza, un cubo, una regla homogénea), el centro de gravedad coincide con el centro geométrico de la figura."

explicacion: |
  La simetría hace que el promedio ponderado por masa caiga
  exactamente en el centro geométrico.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: el centro de gravedad de un cuerpo compuesto de varias partes es un promedio de sus posiciones, ponderado por la ___ de cada parte."
respuestas_validas:
  - "masa"

explicacion: |
  x_cg = (m₁×x₁ + m₂×x₂) / (m₁ + m₂) — cada posición pesa según su
  masa en el promedio.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  m1: random(2, 10)
  x1: random(0, 3)
  m2: random(2, 10)
  x2: random(4, 8)

respuesta: redondear((m1 * x1 + m2 * x2) / (m1 + m2), 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m"

enunciado: "Dos masas puntuales están sobre una misma línea: {m1} kg en la posición x={x1} m, y {m2} kg en la posición x={x2} m. ¿En qué posición está el centro de gravedad del sistema?"

pasos:
  - "x_cg = (m₁×x₁ + m₂×x₂) / (m₁+m₂) = ({m1}×{x1} + {m2}×{x2}) / ({m1}+{m2}) = {redondear((m1 * x1 + m2 * x2) / (m1 + m2), 2)} m"

explicacion: |
  Queda entre las dos posiciones, más cerca de la masa mayor.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos masas puntuales son iguales, el centro de gravedad del sistema está exactamente en el punto medio entre ambas."

explicacion: |
  Con m₁=m₂, el promedio ponderado se reduce al promedio simple de las
  posiciones.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Si una de las dos masas es mayor que la otra, el centro de gravedad del sistema queda más cerca de la masa mayor."

explicacion: |
  El promedio ponderado "atrae" el resultado hacia el valor con más
  peso en el promedio.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica", "vocabulario"]

enunciado: "En la superficie de la Tierra, para un objeto de tamaño cotidiano, ¿cómo se relacionan el centro de gravedad y el centro de masa?"
tipo: mc
opciones_explicitas:
  - "Son prácticamente el mismo punto, porque el campo gravitatorio es uniforme a esa escala"
  - "Siempre son puntos completamente distintos"
  - "El centro de masa no existe, sólo el centro de gravedad"
respuesta: "Son prácticamente el mismo punto, porque el campo gravitatorio es uniforme a esa escala"

explicacion: |
  Sólo se distinguen en campos gravitatorios no uniformes (masas y
  distancias astronómicas), fuera del alcance de este módulo.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

enunciado: "¿Qué determina si un cuerpo apoyado se vuelca o se mantiene en pie?"
tipo: mc
opciones_explicitas:
  - "Si su centro de gravedad queda dentro o fuera de la base de apoyo"
  - "Sólo el peso total del cuerpo"
  - "Sólo la altura del cuerpo, sin importar nada más"
respuesta: "Si su centro de gravedad queda dentro o fuera de la base de apoyo"

explicacion: |
  Si el centro de gravedad se corre fuera de la zona de apoyo, el
  cuerpo pierde el equilibrio y se vuelca.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Para un mismo centro de gravedad, un objeto con base de apoyo más ancha es más estable (más difícil de volcar)."

explicacion: |
  Una base más ancha da más margen antes de que el centro de gravedad
  se salga de ella.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Para una misma base de apoyo, un objeto con el centro de gravedad más bajo es más estable."

explicacion: |
  Con el centro de gravedad más bajo, hace falta inclinar mucho más el
  objeto para que se salga de la base de apoyo.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "basico"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Por qué los autos de carrera se diseñan tan bajos, casi pegados al piso?"
tipo: mc
opciones_explicitas:
  - "Para mantener el centro de gravedad bajo y reducir el riesgo de vuelco en curvas a alta velocidad"
  - "Para que pesen menos"
  - "Sólo por estética, no tiene relación con la física"
respuesta: "Para mantener el centro de gravedad bajo y reducir el riesgo de vuelco en curvas a alta velocidad"

explicacion: |
  Combinado con la fuerza centrípeta de la curva
  (`../../movimiento-circular-y-fuerza-centripeta/`), un centro de
  gravedad bajo reduce mucho el riesgo de que el auto se vuelque.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Para qué sirven los contrapesos que tienen las grúas de construcción?"
tipo: mc
opciones_explicitas:
  - "Para mantener el centro de gravedad del sistema (grúa + carga) dentro de la base de apoyo, evitando que se vuelque al levantar peso"
  - "Para que la grúa sea más rápida"
  - "Sólo decoran la estructura, no afectan el equilibrio"
respuesta: "Para mantener el centro de gravedad del sistema (grúa + carga) dentro de la base de apoyo, evitando que se vuelque al levantar peso"

explicacion: |
  Al levantar una carga pesada de un lado, el contrapeso del otro lado
  compensa para que el centro de gravedad conjunto siga dentro de la
  base.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica", "ordenar"]

enunciado: "Ordená los pasos para encontrar experimentalmente el centro de gravedad de un objeto irregular colgándolo."
tipo: ordenar
opciones_explicitas:
  - "El centro de gravedad está donde se cruzan las dos verticales trazadas"
  - "Suspender el objeto libremente desde un primer punto de su borde y trazar la vertical hacia abajo"
  - "Suspender el objeto desde un segundo punto distinto y trazar otra vertical"
respuesta_orden: ["Suspender el objeto libremente desde un primer punto de su borde y trazar la vertical hacia abajo", "Suspender el objeto desde un segundo punto distinto y trazar otra vertical", "El centro de gravedad está donde se cruzan las dos verticales trazadas"]
explicacion: |
  Cada vertical (la que marca una plomada) siempre pasa por el centro
  de gravedad, sin importar desde qué punto se cuelgue el objeto.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: falso
tipo: vf

enunciado: "El centro de gravedad de un cuerpo siempre está ubicado sobre material sólido del propio cuerpo."

explicacion: |
  Es falso: en una rosquilla (forma de anillo), el centro de gravedad
  cae en el agujero del medio, en el aire — es un punto matemático, no
  necesita "tocar" material.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica"]

enunciado: "¿Por qué el centro de gravedad de una rosquilla (forma de anillo) cae en el agujero central, sin tocar material?"
tipo: mc
opciones_explicitas:
  - "Porque es el promedio geométrico de toda la masa distribuida alrededor del anillo, y ese promedio cae en el centro simétrico, que está vacío"
  - "Porque las rosquillas no tienen centro de gravedad"
  - "Porque el agujero central tiene masa negativa"
respuesta: "Porque es el promedio geométrico de toda la masa distribuida alrededor del anillo, y ese promedio cae en el centro simétrico, que está vacío"

explicacion: |
  El centro de gravedad es un punto matemático de referencia, no
  necesariamente un punto físico dentro del material.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "El centro de gravedad de un objeto puede cambiar de posición si el objeto cambia de forma (dobla, se estira), aunque su masa total no cambie."

explicacion: |
  El centro de gravedad depende de cómo está distribuida la masa, no
  sólo de cuánta masa hay en total — redistribuirla lo mueve.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  m1: random(1, 5)
  x1: 0
  m2: random(1, 5)
  x2: random(2, 6)

respuesta: redondear((m1 * x1 + m2 * x2) / (m1 + m2), 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m"

enunciado: "En el extremo x=0 de una barra hay una masa de {m1} kg, y en x={x2} m hay otra de {m2} kg. ¿En qué posición está el centro de gravedad del sistema (se ignora el peso de la barra)?"

pasos:
  - "x_cg = (m₁×0 + m₂×{x2}) / (m₁+m₂) = ({m2}×{x2}) / ({m1}+{m2}) = {redondear((m1 * x1 + m2 * x2) / (m1 + m2), 2)} m"

explicacion: |
  Con una de las masas en el origen, la fórmula se simplifica bastante.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "basico"
  tags: ["estatica"]

enunciado: "¿Para qué se usa el centro de gravedad al analizar un cuerpo en equilibrio?"
tipo: mc
opciones_explicitas:
  - "Como el punto donde se considera aplicado el peso total, al calcular el momento que ese peso genera"
  - "Para calcular la velocidad del cuerpo"
  - "Para calcular la temperatura del cuerpo"
respuesta: "Como el punto donde se considera aplicado el peso total, al calcular el momento que ese peso genera"

explicacion: |
  Es exactamente lo que hace falta para
  `../equilibrio-de-cuerpo-rigido/`: saber dónde "actúa" el peso para
  calcular su momento respecto de cualquier eje.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: falso
tipo: vf

enunciado: "La posición FÍSICA del centro de gravedad de un cuerpo cambia según dónde se elija poner el origen del sistema de coordenadas."

explicacion: |
  El número que describe su posición cambia (depende del origen
  elegido, como cualquier coordenada), pero el punto físico real en el
  cuerpo es siempre el mismo — no se mueve por cambiar de referencia.
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: la zona delimitada por los puntos de contacto de un cuerpo con el suelo se llama base de ___."
respuestas_validas:
  - "apoyo"

explicacion: |
  Es la referencia que determina si el centro de gravedad "cae dentro"
  (equilibrio) o "cae afuera" (vuelco).
```

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el centro de gravedad?"
tipo: mc
opciones_explicitas:
  - "Para saber dónde 'actúa' el peso de un cuerpo, calcular su estabilidad, y usarlo como base para analizar el equilibrio de cuerpos rígidos"
  - "Sólo sirve para cuerpos perfectamente esféricos"
  - "Sólo aplica en el espacio, sin gravedad"
respuesta: "Para saber dónde 'actúa' el peso de un cuerpo, calcular su estabilidad, y usarlo como base para analizar el equilibrio de cuerpos rígidos"

explicacion: |
  Junto con `../momento-de-una-fuerza/`, es la pieza que falta para
  `../equilibrio-de-cuerpo-rigido/`.
```

## Sección: campo-electrico (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["definicion", "electrostática"]

respuesta: "campo"
tipo: completar
respuestas_validas:
  - "campo"

enunciado: "La región del espacio que rodea a una carga eléctrica y en la cual una carga de prueba experimenta una fuerza eléctrica se denomina ___ eléctrico."

explicacion: |
  El campo eléctrico es una propiedad del espacio que permite transmitir la fuerza entre cargas a distancia.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["lineas_de_campo", "representacion"]

variables:
  tipo_carga: uno_de(["positiva", "negativa"])

respuesta: "salen"
tipo: mc
opciones_explicitas: ["entran", "salen", "son paralelas", "son circulares"]

enunciado: "Si la carga que genera el campo es de tipo {tipo_carga}, las líneas de campo eléctrico se representan como líneas que ___ de la carga."

explicacion: |
  Las líneas de campo eléctrico siempre salen de las cargas positivas y entran en las cargas negativas.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["fuerza", "relacion"]

respuesta: falso
tipo: vf

enunciado: "Si una carga eléctrica es colocada en una región donde el campo eléctrico es nulo, la fuerza eléctrica sobre dicha carga será distinta de cero."

explicacion: |
  La relación es F = q * E. Si el campo (E) es cero, la fuerza (F) también debe ser cero.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["fuerza", "direccion"]

respuesta: "opuesta"
tipo: mc
opciones_explicitas: ["misma", "opuesta", "perpendicular"]

enunciado: "Considerando una carga de prueba negativa en un campo eléctrico dado, la dirección de la fuerza que experimenta la carga será ___ a la dirección del vector campo eléctrico."

pasos:
  - "Identificar el signo de la carga de prueba."
  - "Relacionar el signo con la dirección de la fuerza respecto al campo."

explicacion: |
  Para una carga negativa, el vector fuerza tiene la dirección opuesta al vector campo eléctrico. Para una carga positiva, tienen la misma dirección.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["lineas_de_campo", "propiedades"]

respuesta_orden: ["no se cruzan", "salen de carga positiva", "entran en carga negativa"]
tipo: ordenar
opciones_explicitas: ["salen de carga positiva", "entran en carga negativa", "no se cruzan"]

enunciado: "Ordena las siguientes propiedades de las líneas de campo eléctrico de mayor a menor importancia conceptual (según su definición geométrica y física):"

explicacion: |
  Las líneas de campo representan la dirección de la fuerza, no se cruzan nunca porque en un punto el campo tiene una dirección única, y su sentido depende del signo de la carga.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "El campo eléctrico es una perturbación en el espacio que rodea a una carga eléctrica y que ejerce una fuerza sobre otras cargas colocadas en su vecindad."

explicacion: |
  El campo eléctrico es una magnitud vectorial que describe la influencia que una carga ejerce sobre el espacio circundante.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["representacion", "lineas_de_campo"]

opciones_explicitas: ["Desde la carga hacia afuera", "Hacia la carga", "En círculos concéntricos"]
respuesta: "Desde la carga hacia afuera"
tipo: mc

enunciado: "Las líneas de campo eléctrico de una carga puntual positiva se representan siempre..."

explicacion: |
  Por convención, las líneas de campo salen de las cargas positivas y entran en las cargas negativas.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["calculo", "punto_carga"]

variables:
  distancia: 0.05
  carga: 2.0e-6
  k: 8.99e9

pasos:
  - "Identificar la constante de Coulomb k ≈ 8.99e9 N·m²/C²."
  - "Aplicar la fórmula E = k * |q| / r²."
  - "Sustituir los valores: E = (8.99e9 * 2.0e-6) / (0.05)²."

respuesta: 7192000.0
tipo: completar
tolerancia_abs: 100.0

enunciado: "Calcular la magnitud del campo eléctrico producido por una carga puntual de {carga} C a una distancia de {distancia} m."

explicacion: |
  Usando la fórmula E = k * q / r², obtenemos:
  E = (8.99e9 * 2.0e-6) / (0.05)^2 = 17980 / 0.0025 = 7192000 N/C.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["fuerza", "carga_de_prueba"]

variables:
  datos: [[1.5e-6, 3.0e-3], [2.0e-6, 4.0e-3]]
  idx: uno_de([0, 1])
  q: datos[idx][0]
  E: datos[idx][1]

respuesta: q * E
tipo: completar
tolerancia_abs: 1e-10

enunciado: "Si una carga de {q} C se coloca en un campo eléctrico de {E} N/C, la fuerza resultante sobre ella es de ___ N."

explicacion: |
  La relación es F = q * E.
  Para el caso seleccionado: F = {q} * {E} = {q * E} N.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular la distancia r", "Identificar la carga q y la constante k", "Aplicar la fórmula E = k*q/r²", "Calcular el valor de E"]
respuesta_orden: ["Identificar la carga q y la constante k", "Calcular la distancia r", "Aplicar la fórmula E = k*q/r²", "Calcular el valor de E"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para calcular la intensidad del campo eléctrico producido por una carga puntual en un punto determinado."

explicacion: |
  Primero se deben conocer los datos (carga y constante), luego asegurar la distancia, aplicar la fórmula matemática y finalmente obtener el resultado.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["representacion", "lineas_de_campo"]

tipo: mc
opciones_explicitas: ["Las líneas de campo pueden cruzarse si las cargas son muy grandes", "Las líneas de campo nunca se cruzan", "Las líneas de campo son trayectorias reales de las cargas", "Las líneas de campo son líneas físicas de flujo de aire"]
respuesta: "Las líneas de campo nunca se cruzan"

enunciado: "Al representar el campo eléctrico mediante líneas de fuerza, ¿cuál de las siguientes afirmaciones es correcta respecto a su intersección?"

explicacion: |
  Las líneas de campo eléctrico representan la dirección del vector campo en cada punto. Si se cruzaran, el campo tendría dos direcciones distintas en un mismo punto, lo cual es físicamente imposible.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["carga_electrica", "direccion"]

variables:
  idx: uno_de([0, 1])
  carga_tipo: ["positiva", "negativa"][idx]
  direccion_linea: ["saliente", "entrante"][idx]

enunciado: "Si colocamos una carga de tipo {carga_tipo} en el espacio, la dirección de las líneas de campo eléctrico será {direccion_linea}."

pasos:
  - "Identificar el signo de la carga"
  - "Recordar que las líneas salen de las cargas positivas y entran en las negativas"

respuesta: ["saliente", "entrante"][idx]
tipo: completar
respuestas_validas:
  - "saliente"
  - "entrante"

explicacion: |
  Por convención, las líneas de campo eléctrico se dibujan saliendo de las cargas positivas y entrando en las negativas.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["fuerza_electrica", "vector"]

tipo: vf

enunciado: "Si una carga eléctrica es colocada en un punto donde el campo eléctrico es nulo, la fuerza eléctrica que actúa sobre dicha carga será cero."

respuesta: verdadero

explicacion: |
  La relación está definida por la ecuación F = q * E. Si el vector campo eléctrico (E) es cero, el producto resultante (la fuerza F) también será cero, independientemente del valor de la carga q.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["ley_coulomb", "intensidad"]

enunciado: "Si la distancia entre una carga puntual y un punto en el espacio se duplica (se multiplica por 2), la magnitud del campo eléctrico en ese punto cambiará por un factor de ___."

pasos:
  - "Recordar que el campo eléctrico es inversamente proporcional al cuadrado de la distancia (E ∝ 1/r²)"
  - "Calcular (1 / 2²) para hallar el factor de cambio"

respuesta: "0.25"
tipo: completar
respuestas_validas:
  - "0.25"

explicacion: |
  Dado que el campo eléctrico de una carga puntual sigue la ley de la inversa del cuadrado de la distancia, si la distancia aumenta por un factor de 2, el campo disminuye por un factor de 1/2² = 1/4 (0.25). Si la distancia se reduce a la mitad, el campo aumenta por un factor de 4.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["definicion", "concepto"]

tipo: mc
opciones_explicitas: ["Es una fuerza física que actúa a distancia", "Es una propiedad del espacio que ejerce una carga sobre otras", "Es la velocidad de una carga en un campo", "Es la energía potencial de un sistema de cargas"]
respuesta: "Es una propiedad del espacio que ejerce una carga sobre otras"

enunciado: "¿Cuál es la definición más precisa de campo eléctrico en el contexto de la interacción entre cargas?"

explicacion: |
  El campo eléctrico no es una fuerza en sí misma, sino una perturbación o propiedad que el campo eléctrico 'imparte' al espacio circundante debido a la presencia de una carga, la cual se manifiesta como fuerza cuando otra carga se coloca en él.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["conceptos", "representacion"]

tipo: mc
opciones_explicitas: ["Las líneas de campo representan el movimiento real de los electrones.", "Las líneas de campo son construcciones visuales que indican la dirección y magnitud de la intensidad del campo.", "Las líneas de campo son trayectorias físicas que las cargas siguen obligatoriamente.", "Las líneas de campo muestran la distancia exacta entre dos cargas."]

respuesta: "Las líneas de campo son construcciones visuales que indican la dirección y magnitud de la intensidad del campo."

enunciado: "¿Qué representan fundamentalmente las líneas de campo eléctrico en un diagrama?"

explicacion: |
  Las líneas de campo son una herramienta matemática y visual para representar la dirección de la fuerza que actuaría sobre una carga de prueba positiva y la densidad de estas líneas indica la intensidad del campo. No son trayectorias físicas reales.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["relacion", "fuerza"]

tipo: completar
respuestas_validas:
  - "hacia afuera"
  - "hacia adentro"

enunciado: "Si colocamos una carga de prueba positiva en un punto del campo, la dirección de la fuerza sobre ella será ___ de la carga que genera el campo."

respuesta: "hacia afuera"

explicacion: |
  La fuerza sobre una carga positiva tiene la misma dirección que el vector campo eléctrico en ese punto. Si la carga es negativa, la fuerza es opuesta. En este caso, la carga es positiva, por lo que la fuerza es hacia afuera.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["comparacion"]

tipo: vf

enunciado: "A diferencia de la fuerza eléctrica (que depende de la magnitud de la carga que se coloca en un punto), el campo eléctrico es una propiedad del espacio que existe independientemente de si hay una carga de prueba presente o no."

respuesta: verdadero

explicacion: |
  Correcto. El campo eléctrico es una propiedad intrínseca de la configuración de cargas presentes, mientras que la fuerza es una interacción que solo aparece cuando una segunda carga interactúa con dicho campo.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["representacion"]

tipo: mc
opciones_explicitas: ["A mayor densidad de líneas, menor es la intensidad del campo.", "La densidad de líneas de campo es constante en todo el espacio.", "A mayor densidad de líneas de campo, mayor es la intensidad del campo eléctrico.", "La densidad de líneas no tiene relación con la magnitud del campo."]

respuesta: "A mayor densidad de líneas de campo, mayor es la intensidad del campo eléctrico."

enunciado: "Si observamos un diagrama de líneas de campo, ¿qué nos indica una zona donde las líneas están muy juntas (alta densidad) comparada con una zona donde están muy separadas?"

explicacion: |
  La densidad de las líneas de campo es proporcional a la magnitud del vector campo eléctrico E. Donde las líneas están más próximas, el campo es más intenso.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["procedimiento"]

tipo: ordenar
opciones_explicitas: ["Identificar el signo de la carga de prueba.", "Determinar la dirección del campo eléctrico en el punto.", "Dibujar el vector fuerza resultante."]

respuesta_orden: ["Identificar el signo de la carga de prueba.", "Determinar la dirección del campo eléctrico en el punto.", "Dibujar el vector fuerza resultante."]

enunciado: "Ordena los pasos lógicos para determinar la dirección de la fuerza eléctrica que actúa sobre una carga de prueba en un punto dado."

explicacion: |
  Para hallar la fuerza F = q · E, primero debemos conocer el signo de q (para saber si la fuerza sigue o se opone al campo) y la dirección de E en ese punto específico.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["electrostática", "sensores"]

variables:
  datos: [["una carga de prueba positiva", "hacia afuera de la carga"], ["una carga de prueba negativa", "hacia adentro de la carga"]]
  idx: uno_de([0, 1])

enunciado: "En un sensor de proximidad industrial, se utiliza una carga de prueba para detectar la presencia de un objeto cargado. Si la carga de prueba es {datos[idx][0]}, la dirección de la fuerza eléctrica sobre ella será {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["hacia afuera de la carga", "hacia adentro de la carga"]

explicacion: |
  El campo eléctrico define la dirección de la fuerza sobre una carga de prueba. Si la carga es positiva, la fuerza tiene la misma dirección que el campo. Si es negativa, la fuerza es opuesta a la dirección del campo.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["lineas_de_campo"]

enunciado: "Al observar las líneas de campo eléctrico de una carga puntual positiva, se puede afirmar que las líneas siempre comienzan en la carga y se dirigen hacia ___."

respuesta: "el infinito"
tipo: completar
respuestas_validas:
  - "el infinito"
  - "infinito"

explicacion: |
  Las líneas de campo eléctrico son representaciones conceptuales. Para una carga positiva, las líneas son radiales y salen de la carga hacia el infinito.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["fuerza_electrica", "calculo"]

variables:
  datos: [[1.5, 1.5], [2.0, 2.0], [0.5, 0.5]]
  idx: uno_de([0, 1, 2])

enunciado: "En un proceso de filtrado de partículas cargadas, una partícula con carga de {datos[idx][0]} C se encuentra dentro de un campo eléctrico uniforme de 1 N/C. La magnitud de la fuerza eléctrica que actúa sobre la partícula es de ___ N."

pasos:
  - "Identificar la carga (q)"
  - "Identificar la intensidad del campo (E)"
  - "Aplicar la fórmula F = q * E"

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0.001

explicacion: |
  La magnitud de la fuerza eléctrica se calcula mediante el producto de la carga por la intensidad del campo: F = q * E.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["lineas_de_campo"]

enunciado: "¿Es correcto afirmar que dos líneas de campo eléctrico pueden cruzarse en un punto del espacio?"

respuesta: falso
tipo: vf

explicacion: |
  Las líneas de campo eléctrico nunca se cruzan, ya que en cada punto del espacio el campo eléctrico tiene una única dirección y magnitud resultante.
```

```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "avanzado"
  tags: ["metodologia", "analisis"]

enunciado: "Para determinar el vector campo eléctrico en un punto dado, un estudiante debe seguir este orden lógico de análisis:"

opciones_explicitas: ["Determinar la carga de la fuente", "Calcular la dirección del vector campo", "Calcular la magnitud del campo", "Evaluar la fuerza sobre una carga de prueba"]
respuesta_orden: ["Determinar la carga de la fuente", "Calcular la magnitud del campo", "Calcular la dirección del vector campo", "Evaluar la fuerza sobre una carga de prueba"]
tipo: ordenar

explicacion: |
  Primero se conocen las fuentes (cargas), luego se calcula la magnitud y dirección del campo en un punto, y finalmente se usa ese campo para hallar la fuerza sobre otra carga.
```

## Sección: corriente-electrica (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["definicion", "carga"]

respuesta: "flujo de carga"
tipo: completar
respuestas_validas:
  - "flujo de carga"
  - "movimiento de cargas"

enunciado: "La corriente eléctrica se define físicamente como el ___ a través de un conductor."

explicacion: |
  La corriente eléctrica es el flujo de carga eléctrica (producido principalmente por electrones en metales) que atraviesa una sección de un conductor por unidad de tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["unidades", "amperio"]

respuesta: "Amperio"
tipo: mc
opciones_explicitas: ["Amperio", "Voltio", "Ohmio", "Coulomb"]

enunciado: "La unidad de medida de la intensidad de corriente eléctrica en el Sistema Internacional es el ___."

explicacion: |
  El Amperio (A) es la unidad de intensidad de corriente. El Voltio (V) es potencial, el Ohmio (Ω) es resistencia y el Coulomb (C) es carga.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["calculo", "intensidad"]

variables:
  escenario: [[10, 2], [20, 4], [5, 5], [12, 3]]
  idx: uno_de([0,1,2,3])

respuesta: escenario[idx][0] / escenario[idx][1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una carga de {escenario[idx][0]} Coulombs atraviesa una sección de un conductor en un tiempo de {escenario[idx][1]} segundos, ¿cuál es la intensidad de corriente eléctrica?"

pasos:
  - "Calcular la intensidad usando la fórmula: I = Q / t"
  - "Dividir la carga (C) por el tiempo (s)"

explicacion: |
  La intensidad de corriente I se calcula como la carga total Q dividida por el tiempo t: I = Q/t. En este caso: {escenario[idx][0]} / {escenario[idx][1]} = {escenario[idx][0] / escenario[idx][1]} A.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["verdadero_falso", "electrones"]

respuesta: falso
tipo: vf

enunciado: "En un cable de cobre, la corriente eléctrica es producida por el movimiento de protones a través del metal."

explicacion: |
  Falso. En los metales conductores, la corriente es transportada por el movimiento de electrones libres, no de protones (los cuales están fijos en el núcleo atómico).
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta_orden: ["Carga eléctrica", "Conductor", "Fuente de energía"]
tipo: ordenar

opciones_explicitas: ["Carga eléctrica", "Conductor", "Fuente de energía"]

enunciado: "Para que exista una corriente eléctrica en un circuito simple, se requiere que los elementos estén presentes en un orden lógico de dependencia (desde el origen del movimiento hasta el medio):"

explicacion: |
  Para que haya corriente se necesita una fuente que impulse las cargas, las cargas que se mueven y un camino (conductor) para que lo hagan.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["intensidad", "carga", "amperios"]

variables:
  idx: uno_de([0, 1, 2])
  cargas: [0.005, 0.012, 0.025]
  carga: cargas[idx]
  resultados_texto: ["0.0025", "0.006", "0.0125"]

respuesta: carga / 2.0
tipo: completar
tolerancia_abs: 0.001

enunciado: "Una carga eléctrica de {carga} Coulombs atraviesa una sección transversal de un conductor en un intervalo de tiempo de 2 segundos. ¿Cuál es la intensidad de corriente eléctrica en Amperios?"

pasos:
  - "Identificar la carga (Q) = {carga} C"
  - "Identificar el tiempo (t) = 2 s"
  - "Aplicar la fórmula: I = Q / t"
  - "Calcular: {carga} / 2"

explicacion: |
  La intensidad de corriente (I) se define como la cantidad de carga que pasa por un punto en un tiempo determinado. La fórmula es I = Q / t. En este caso, {carga} / 2 = {resultados_texto[idx]} A.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["concepto", "flujo"]

respuesta: verdadero
tipo: vf

enunciado: "¿La corriente eléctrica se define como el flujo de carga eléctrica a través de un conductor por unidad de tiempo?"

explicacion: |
  Correcto. La corriente eléctrica es la rapidez con la que las cargas eléctricas atraviesan una sección de un conductor.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["unidades", "amperio"]

opciones_explicitas: ["Voltio", "Amperio", "Ohmio", "Coulomb"]
respuesta: "Amperio"
tipo: mc

enunciado: "¿Cuál es la unidad de medida de la intensidad de corriente eléctrica en el Sistema Internacional (SI)?"

explicacion: |
  La unidad de la intensidad de corriente es el Amperio (A), mientras que el Voltio es para potencial, el Ohmio para resistencia y el Coulomb para carga.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["calculo", "corriente"]

variables:
  escenario: [[10, 2], [20, 5], [5, 1]]
  idx: uno_de([0,1,2])
  q: escenario[idx][0]
  t: escenario[idx][1]

respuesta: q / t
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una carga de {q} C atraviesa un conductor en un tiempo de {t} segundos, ¿cuál es la intensidad de corriente (en Amperios)?"

explicacion: |
  Usando la fórmula I = Q / t: {q} / {t} = {q / t} A.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["procedimiento", "pasos"]

opciones_explicitas: ["Identificar valores de carga y tiempo", "Aplicar la fórmula I = Q / t", "Dividir la carga por el tiempo"]
respuesta_orden: ["Identificar valores de carga y tiempo", "Aplicar la fórmula I = Q / t", "Dividir la carga por el tiempo"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un problema de cálculo de intensidad de corriente eléctrica:"

explicacion: |
  Para resolver correctamente, primero debemos extraer los datos del enunciado, luego seleccionar la fórmula matemática adecuada y finalmente realizar la operación aritmética.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["carga", "sentido_convencional", "electrones"]

respuesta: "convencional"
tipo: mc
opciones_explicitas: ["real", "convencional"]

enunciado: "En un circuito físico, los electrones se desplazan del polo negativo al positivo. Sin embargo, por convención histórica, el sentido de la corriente eléctrica se define de forma ___."

explicacion: |
  El sentido convencional de la corriente es del polo positivo al negativo, siguiendo el movimiento de cargas positivas imaginarias, aunque en los metales sean los electrones (cargas negativas) los que se mueven en sentido opuesto.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["intensidad", "carga", "tiempo"]

variables:
  escenario: uno_de([[1.2, 2.0], [3.5, 5.0], [0.8, 1.5]])

respuesta: escenario[0] / escenario[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una carga eléctrica de {escenario[0]} Coulombs atraviesa una sección transversal de un conductor en un intervalo de tiempo de {escenario[1]} segundos. ¿Cuál es la intensidad de corriente eléctrica (en Amperios)?"

pasos:
  - "Identificar la fórmula de intensidad: I = ΔQ / Δt"
  - "Dividir la carga total por el tiempo transcurrido"

explicacion: |
  La intensidad de corriente se define como la cantidad de carga que pasa por un punto en un tiempo determinado: I = Q/t. En este caso, {escenario[0]} / {escenario[1]} = {escenario[0] / escenario[1]}.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["concepto", "flujo"]

respuesta: falso
tipo: vf

enunciado: "La corriente eléctrica es, por definición, un flujo de materia (átomos) que se desplaza a través de un conductor."

explicacion: |
  Falso. La corriente eléctrica es el flujo de **cargas eléctricas** (como electrones o iones), no necesariamente de la materia completa (átomos). En los metales, los átomos permanecen en una red fija mientras los electrones se desplazan.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "avanzado"
  tags: ["electrones", "carga_elemental"]

variables:
  caso: uno_de([[2, 1.6e-19], [5, 1.6e-19], [10, 1.6e-19]])
  n: caso[0]
  e: caso[1]
  q_total: n * e

respuesta: n
tipo: completar
tolerancia_abs: 0

enunciado: "Si por un conductor circula una corriente tal que en total pasan {q_total} Coulombs de carga, y la carga de cada electrón es {e} C, ¿cuántos electrones han atravesado la sección en ese tiempo?"

explicacion: |
  Para hallar el número de electrones (n), usamos la relación Q = n * e, donde e es la carga elemental. Despejando: n = Q / e. En este caso: {q_total} / {e} = {n}.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["procedimiento", "calculo"]

respuesta_orden: ["identificar_carga", "identificar_tiempo", "dividir_valores"]
tipo: ordenar
opciones_explicitas: ["identificar_carga", "identificar_tiempo", "dividir_valores"]

enunciado: "Ordena los pasos lógicos para calcular la intensidad de corriente eléctrica si se conoce la carga total y el tiempo transcurrido."

explicacion: |
  Para aplicar la fórmula I = Q/t, primero debemos conocer los valores de la carga (Q) y el tiempo (t), y finalmente realizar la división correspondiente.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["carga", "corriente", "conceptos"]

respuesta: "corriente"
tipo: "completar"
respuestas_validas:
  - "corriente"

enunciado: "Mientras que la carga eléctrica es una propiedad intrínseca de las partículas, la ___ es la medida del flujo de carga que atraviesa una sección transversal por unidad de tiempo."

explicacion: |
  La carga eléctrica es una propiedad estática, mientras que la corriente eléctrica es una magnitud dinámica que describe el movimiento de dichas cargas.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["voltaje", "corriente", "diferencia"]

variables:
  escenario: uno_de([[9, "0.9"], [12, "1.2"], [5, "0.5"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["0.9", "1.2", "0.5"]

enunciado: "Si mantenemos la resistencia constante en R = 10 Ω, ¿cuál es la intensidad de corriente que circula por el circuito dado un voltaje de {escenario[0]} V?"

pasos:
  - "Identificar el voltaje: {escenario[0]} V"
  - "Usar la resistencia constante R = 10 Ω"
  - "Calcular I = V / R"

explicacion: |
  La intensidad de corriente es directamente proporcional al voltaje según la Ley de Ohm (I = V/R). Con R = 10 Ω constante: I = {escenario[0]} / 10 = {escenario[1]} A.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["cc", "ca", "tipo_corriente"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es cierto que en la corriente continua (CC) la dirección y magnitud del flujo de carga cambian periódicamente con el tiempo, a diferencia de la corriente alterna (CA)?"

explicacion: |
  Es falso. Es al revés: en la corriente alterna (CA) el flujo cambia de dirección periódicamente, mientras que en la corriente continua (CC) el flujo es constante en dirección y magnitud.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["unidades", "amperio"]

respuesta: "amperio"
tipo: "mc"
opciones_explicitas: ["voltio", "amperio", "ohmio", "culombio"]

enunciado: "La magnitud de la corriente eléctrica se mide en ___."

explicacion: |
  El amperio (A) es la unidad de intensidad de corriente en el SI, mientras que el voltio mide potencial y el ohmio la resistencia.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["flujo", "carga", "orden"]

tipo: ordenar
opciones_explicitas: ["carga", "movimiento", "corriente"]
respuesta_orden: ["carga", "movimiento", "corriente"]

enunciado: "Ordena los conceptos para describir el proceso físico que da origen a la corriente eléctrica: primero la existencia de ___, luego el ___ de estas a través de un conductor, y finalmente el fenómeno resultante llamado ___."

explicacion: |
  El proceso lógico es: 1. Presencia de carga, 2. Movimiento de carga, 3. Corriente eléctrica.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["electricidad", "intensidad"]

variables:
  datos: [["un cargador de celular de 5W conectado a 220V", "0.0227"], ["una bombilla de 60W conectada a 120V", "0.5"], ["un calefactor de 2200W conectado a 220V", "10.0"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si tenemos {datos[idx][0]}, la intensidad de corriente que circula es de aproximadamente ___ A."

respuestas_validas:
  - "0.0227"
  - "0.5"
  - "10.0"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La intensidad de corriente (I) se calcula mediante la fórmula I = P / V, donde P es la potencia en Watts y V es el voltaje en Voltios.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["carga", "electrones"]

variables:
  datos: [["2.0", "1.25e19"], ["0.5", "3.13e18"], ["4.0", "2.50e19"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si por un conductor circula una carga de {datos[idx][0]} Coulombs en un tiempo de 1 segundo, la cantidad de electrones que fluyen es aproximadamente ___."

respuestas_validas:
  - "1.25e19"
  - "3.13e18"
  - "2.50e19"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La carga total es Q = n * e, donde n es el número de electrones y e es la carga del electrón (1.6e-19 C). Por lo tanto, n = Q / e.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["conceptos", "ca"]

enunciado: "¿La corriente que suministran las baterías de un teléfono móvil es de tipo alterna (AC)?"

respuesta: falso
tipo: vf
explicacion: |
  Las baterías proporcionan corriente continua (DC), donde los electrones fluyen en un solo sentido. La corriente alterna (AC) es la que llega a los enchufes de las casas.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["calculo", "amperaje"]

variables:
  datos: [["una corriente de 0.5A", "500"], ["una corriente de 1.2A", "1200"], ["una corriente de 0.05A", "50"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si un multímetro está configurado para medir miliamperios (mA), ¿qué valor mostrará para {datos[idx][0]}?"

opciones_explicitas: ["500", "1200", "50"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Para convertir Amperios (A) a miliamperios (mA), se multiplica el valor por 1000.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["procedimiento", "seguridad"]

enunciado: "Ordena los pasos correctos para medir la intensidad de corriente en un componente usando un multímetro en serie:"

opciones_explicitas: ["Abrir el circuito", "Conectar el multímetro en serie", "Cerrar el circuito para medir"]
respuesta_orden: ["Abrir el circuito", "Conectar el multímetro en serie", "Cerrar el circuito para medir"]
tipo: ordenar

explicacion: |
  Para medir corriente, el multímetro debe formar parte del camino de la electricidad, por lo que el circuito debe interrumpirse para insertarlo en serie.
```

## Sección: estatica/momento-de-una-fuerza (22 preguntas)

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["estatica", "vocabulario"]

enunciado: "¿Qué mide el momento de una fuerza (torque)?"
tipo: mc
opciones_explicitas:
  - "La tendencia de una fuerza a hacer girar un cuerpo alrededor de un punto o eje"
  - "La tendencia de una fuerza a desplazar un cuerpo en línea recta"
  - "La energía que transmite una fuerza"
respuesta: "La tendencia de una fuerza a hacer girar un cuerpo alrededor de un punto o eje"

explicacion: |
  A diferencia de la fuerza neta (que mueve un cuerpo), el momento mide
  el efecto de giro.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "intermedio"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: M = F × ___, donde esa distancia se mide perpendicular al eje de giro."
respuestas_validas:
  - "d"
  - "brazo"
  - "brazo de palanca"

explicacion: |
  El brazo de palanca es la distancia perpendicular desde el eje de
  giro hasta la línea de acción de la fuerza.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "El brazo de palanca es la distancia PERPENDICULAR desde el eje de giro hasta la línea de acción de la fuerza."

explicacion: |
  Si la fuerza no es perpendicular al brazo, hay que usar la
  componente perpendicular (M=F×d×sen(θ)).
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["estatica", "vocabulario"]

enunciado: "¿En qué unidad se mide el momento de una fuerza en el Sistema Internacional?"
tipo: mc
opciones_explicitas:
  - "Newton-metro (N·m)"
  - "Newton (N)"
  - "Joule (J)"
respuesta: "Newton-metro (N·m)"

explicacion: |
  Es fuerza (N) por distancia (m) — aunque tenga las mismas unidades
  que el trabajo (Joule), son conceptos físicos distintos.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  F: random(5, 50)
  d: random_float(0.2, 2, 2)

respuesta: redondear(F * d, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "N·m"

enunciado: "Se aplica una fuerza de {F} N, perpendicular a una palanca, a {d} m del eje de giro. ¿Cuál es el momento generado?"

pasos:
  - "M = F × d = {F} × {d} = {redondear(F * d, 2)} N·m"

explicacion: |
  Fuerza perpendicular al brazo: M=F×d directo, sin necesidad de seno.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  M: random(10, 100)
  d: random_float(0.5, 2, 2)

respuesta: redondear(M / d, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "N"

enunciado: "Para generar un momento de {M} N·m con una palanca de {d} m de brazo (fuerza perpendicular), ¿qué fuerza hace falta aplicar?"

pasos:
  - "F = M / d = {M} / {d} = {redondear(M / d, 2)} N"

explicacion: |
  Es el mismo despeje algebraico ya practicado con otras fórmulas de
  Física.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  M: random(10, 100)
  F: random(5, 50)

respuesta: redondear(M / F, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m"

enunciado: "Para generar un momento de {M} N·m aplicando una fuerza de {F} N (perpendicular), ¿a qué distancia del eje hay que aplicarla?"

pasos:
  - "d = M / F = {M} / {F} = {redondear(M / F, 2)} m"

explicacion: |
  Con menos fuerza disponible, hace falta más brazo de palanca para el
  mismo momento — y viceversa.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Con la misma fuerza, un brazo de palanca más largo produce un momento mayor."

explicacion: |
  M=F×d: con F fijo, M crece con d.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Si una fuerza se aplica exactamente sobre el eje de giro (brazo de palanca = 0), no genera ningún momento, sin importar cuán grande sea esa fuerza."

explicacion: |
  M=F×0=0, siempre, sin importar F.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "intermedio"
  tags: ["estatica", "vocabulario"]

enunciado: "Por convención habitual, ¿qué sentido de giro se toma como momento positivo?"
tipo: mc
opciones_explicitas:
  - "Antihorario"
  - "Horario"
  - "Da igual, no hay convención"
respuesta: "Antihorario"

explicacion: |
  Es la convención más usada (no universal, pero la habitual) — lo
  importante es ser consistente dentro de un mismo problema.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Al calcular el momento neto sobre un cuerpo, dos momentos que giran en sentidos opuestos se restan (uno se toma positivo y el otro negativo)."

explicacion: |
  Igual que sumar fuerzas con signo en un eje, pero para giros.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Por qué cuesta menos esfuerzo abrir una puerta empujando en el borde (lejos de la bisagra) que empujando cerca de la bisagra?"
tipo: mc
opciones_explicitas:
  - "Porque lejos de la bisagra el brazo de palanca es mayor, así que se necesita menos fuerza para el mismo momento"
  - "Porque cerca de la bisagra la puerta pesa más"
  - "No hay ninguna diferencia real, es sólo una sensación"
respuesta: "Porque lejos de la bisagra el brazo de palanca es mayor, así que se necesita menos fuerza para el mismo momento"

explicacion: |
  M=F×d: para un mismo M (el necesario para abrir la puerta), a mayor
  d, menor F requerida.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  F1: random(20, 60)
  d1: random_float(0.3, 1, 2)
  d2: random_float(1.5, 3, 2)

respuesta: redondear(F1 * d1 / d2, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "N"

enunciado: "Una fuerza de {F1} N aplicada a {d1} m del eje genera un cierto momento. ¿Qué fuerza hace falta aplicar a {d2} m del eje para generar exactamente el mismo momento?"

pasos:
  - "M = F₁ × d₁ = {F1} × {d1} = {redondear(F1 * d1, 2)} N·m"
  - "F₂ = M / d₂ = {redondear(F1 * d1, 2)} / {d2} = {redondear(F1 * d1 / d2, 2)} N"

explicacion: |
  Con más brazo de palanca, alcanza con menos fuerza para el mismo
  momento.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica"]

enunciado: "Si la fuerza aplicada NO es perpendicular al brazo de palanca, ¿qué pasa con el momento generado?"
tipo: mc
opciones_explicitas:
  - "Es menor que F×d — sólo la componente perpendicular de la fuerza genera momento"
  - "Es mayor que F×d"
  - "No se puede calcular el momento en ese caso"
respuesta: "Es menor que F×d — sólo la componente perpendicular de la fuerza genera momento"

explicacion: |
  M = F×d×sen(θ): con θ<90°, sen(θ)<1, así que M queda por debajo del
  máximo posible (que se da con θ=90°, fuerza perpendicular).
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  F: random(10, 40)
  d: random_float(0.5, 2, 2)
  angulo: uno_de([30, 45, 60, 90])

respuesta: redondear(F * d * sin_deg(angulo), 2)
tipo: input
tolerancia_abs: 0.2
unidad: "N·m"

enunciado: "Se aplica una fuerza de {F} N a {d} m del eje de giro, formando un ángulo de {angulo}° con la palanca. ¿Cuál es el momento generado?"

pasos:
  - "M = F × d × sen(θ) = {F} × {d} × sen({angulo}°) = {redondear(F * d * sin_deg(angulo), 2)} N·m"

explicacion: |
  Con θ=90° (perpendicular), sen(90°)=1 y se recupera la fórmula
  simple M=F×d.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "ordenar"]

enunciado: "Ordená los pasos para calcular el momento de una fuerza aplicada en cualquier ángulo."
tipo: ordenar
opciones_explicitas:
  - "Multiplicar la fuerza por ese brazo (y por sen(θ) si la fuerza no es perpendicular)"
  - "Identificar el eje (o punto) de giro que se va a usar como referencia"
  - "Medir el brazo de palanca: la distancia perpendicular desde el eje hasta la línea de acción de la fuerza"
respuesta_orden: ["Identificar el eje (o punto) de giro que se va a usar como referencia", "Medir el brazo de palanca: la distancia perpendicular desde el eje hasta la línea de acción de la fuerza", "Multiplicar la fuerza por ese brazo (y por sen(θ) si la fuerza no es perpendicular)"]
explicacion: |
  Sin fijar primero el eje de referencia, no hay brazo de palanca que
  medir.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "El momento de una misma fuerza puede ser distinto según qué punto se elija como eje de giro de referencia."

explicacion: |
  El momento no es una propiedad de la fuerza sola — siempre se
  calcula respecto de un punto específico.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Por qué una llave de tuercas con mango largo afloja un tornillo con menos esfuerzo que una con mango corto?"
tipo: mc
opciones_explicitas:
  - "El mango largo da un brazo de palanca mayor, así que se necesita menos fuerza para el mismo momento"
  - "El mango largo hace que la llave pese menos"
  - "No hay ninguna diferencia física real"
respuesta: "El mango largo da un brazo de palanca mayor, así que se necesita menos fuerza para el mismo momento"

explicacion: |
  Exactamente el mismo principio que la puerta y la bisagra.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: el momento de una fuerza también se conoce, sobre todo en contextos de ingeniería, con el nombre en inglés ___."
respuestas_validas:
  - "torque"

explicacion: |
  "Momento de una fuerza" y "torque" son el mismo concepto físico.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "El momento de una fuerza es, en general, una cantidad vectorial (no sólo un número), aunque en muchos problemas de un solo plano alcance con su magnitud y un signo (horario/antihorario)."

explicacion: |
  En 3D el momento tiene una dirección propia (perpendicular al plano
  de giro); en problemas de un solo plano, esa dirección es siempre la
  misma y sólo hace falta el signo.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: falso
tipo: vf

enunciado: "Como el momento de una fuerza y el trabajo mecánico se miden en las mismas unidades (N·m), son la misma magnitud física."

explicacion: |
  Comparten unidades por cómo se combinan fuerza y distancia, pero son
  conceptos distintos: el trabajo (`../../trabajo-de-una-fuerza/`) mide
  energía transferida por un desplazamiento; el momento mide la
  tendencia a girar.
```

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el momento de una fuerza?"
tipo: mc
opciones_explicitas:
  - "Para predecir y calcular el efecto de giro de una fuerza sobre un cuerpo, no sólo si lo desplaza"
  - "Sólo sirve para calcular fuerzas en línea recta"
  - "Sólo aplica a objetos sin masa"
respuesta: "Para predecir y calcular el efecto de giro de una fuerza sobre un cuerpo, no sólo si lo desplaza"

explicacion: |
  Es la base necesaria para `../equilibrio-de-cuerpo-rigido/` y para
  entender por qué funcionan las palancas
  (`../../maquinas-simples/`).
```

