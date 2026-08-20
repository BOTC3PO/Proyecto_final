# Lengua — coordinadas distributivas (cuestionario, 32 preguntas VBLang)

> Tema: `lengua/coordinadas-distributivas`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["conteo", "aplicacion"]

variables:
  n1: random(1, 5)
  n2: random(1, 5)
  total: n1 + n2

respuesta: total
tipo: input

enunciado: "En la oración 'Hay {n1} docentes y {n2} estudiantes que se saludaron', ¿cuántos individuos participan de la acción distributiva de saludarse mutuamente?"

explicacion: |
  La respuesta es la suma de los sujetos coordinados: {n1} + {n2} = {total}. Al usar el verbo recíproco 'saludarse', todos los sujetos mencionados (docentes y estudiantes) participan activamente de la acción distribuida entre ellos."
```

### 2 — pregunta 2

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["sintaxis", "sujeto"]

variables:
  n: random(2, 4)

respuesta: "plural"
tipo: input

enunciado: "En la oración 'Los alumnos {n} y las alumnas {n} se abrazaron', ¿qué número tiene el sujeto compuesto? (Escribe 'singular' o 'plural')"

explicacion: |
  La respuesta es 'plural'. Aunque la coordinación distributiva enfatiza la acción individual, gramaticalmente los dos elementos unidos por 'y' forman un sujeto compuesto plural. El verbo se conjuga en plural ('se abrazaron')."
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["conteo", "logica"]

variables:
  a: random(1, 3)
  b: random(1, 3)
  total: a + b

respuesta: total
tipo: input

enunciado: "En 'Hay {a} perros y {b} gatos que se persiguieron', ¿cuántos animales participan de la persecución mutua?"

explicacion: |
  La respuesta es {total}. El verbo 'persiguieron' (recíproco) implica que cada animal persigue a los demás. Todos los sujetos coordinados están incluidos en la acción distribuida."
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["sintaxis", "concordancia"]

variables:
  n: random(2, 5)

respuesta: "plural"
tipo: input

enunciado: "En 'Los docentes {n} y los estudiantes {n} se felicitaron', ¿qué género y número debe tener el participio 'felicitar' si se usara en voz pasiva refleja? (Escribe 'felicitaron')"

explicacion: |
  La respuesta es 'felicitaron'. Al ser sujeto compuesto plural, el verbo concuerda en plural. La coordinación distributiva no cambia la concordancia gramatical, solo la interpretación semántica de la acción."
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["conteo", "logica"]

variables:
  n1: random(1, 4)
  n2: random(1, 4)
  total: n1 + n2

respuesta: total
tipo: input

enunciado: "En 'Hay {n1} manzanas y {n2} naranjas que se repartieron', ¿cuántas frutas participan del reparto?"

explicacion: |
  La respuesta es {total}. El verbo 'repartirse' (o la acción de ser repartidas) implica que todas las frutas son objeto de la distribución entre los sujetos. Todos los elementos coordinados están incluidos."
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["sintaxis", "sujeto"]

variables:
  n: random(2, 5)

respuesta: "plural"
tipo: input

enunciado: "En 'Los profesores {n} y los directivos {n} se saludaron', ¿qué número tiene el verbo 'saludar' en esta oración? (Escribe 'singular' o 'plural')"

explicacion: |
  La respuesta es 'plural'. Los sujetos coordinados forman un grupo plural, por lo que el verbo concuerda en plural."
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["sintaxis", "coordinacion", "distributiva"]

variables:
  sujeto1: uno_de(["Juan", "María", "Pedro", "Ana"])
  sujeto2: uno_de(["Carlos", "Laura", "Luis", "Sofía"])
  verbo: uno_de(["se pelearon", "se miraron", "se saludaron", "se conocieron"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sujeto1} {verbo} {sujeto2}', la coordinación es distributiva porque la acción se aplica recíprocamente a cada individuo."

explicacion: |
  Los verbos como 'pelearse', 'mirarse' o 'saludarse' son recíprocos. Esto implica que la acción se distribuye entre los sujetos: A hace la acción con B y B hace la acción con A. Por lo tanto, es una coordinación distributiva (o recíproca).
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["sintaxis", "diferencias", "coordinacion"]

variables:
  elem1: uno_de(["el libro", "la casa", "el coche"])
  elem2: uno_de(["el cuaderno", "el departamento", "la moto"])
  accion: uno_de(["es grande", "es vieja", "es nueva"])

respuesta: |
  La coordinación es copulativa.
tipo: completar

enunciado: "Analiza la oración: '{elem1} y {elem2} {accion}'. ¿Es esta coordinación distributiva o copulativa? Responde con una de las opciones."

explicacion: |
  En 'el libro y el cuaderno es grande', la propiedad se atribuye al grupo como un todo o se aplica de forma acumulativa/no distributiva en el sentido recíproco. No hay una acción que se reparta entre ellos de manera individualizada o recíproca. Es una coordinación copulativa simple.
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["verbos", "reciprocidad", "sintaxis"]

variables:
  grupo: uno_de(["Los hermanos", "Los vecinos", "Los compañeros"])
  accion: uno_de(["se ayudaron", "se querían", "se respetaron", "se conocieron"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{grupo} {accion}', la conjunción 'y' introduce una coordinación distributiva porque la acción se realiza mutuamente."

explicacion: |
  Correcto. Los verbos pronominales recíprocos (como ayudarse, quererse, respetarse) implican que el sujeto A actúa sobre B y B sobre A. La acción se distribuye en ambas direcciones.
```

### 10 — pregunta 10

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["semántica", "distribución", "medios"]

variables:
  grupo1: uno_de(["Los alumnos", "Los trabajadores", "Los clientes"])
  grupo2: uno_de(["las alumnas", "los empleados", "los usuarios"])
  medio1: uno_de(["por la puerta principal", "por el ascensor", "por la ventana"])
  medio2: uno_de(["por la puerta lateral", "por la escalera", "por la puerta de servicio"])

respuesta: |
  Distributiva
tipo: completar

enunciado: "En la frase '{grupo1} y {grupo2} entrarán {medio1} y {medio2} respectivamente', la coordinación de los medios es de tipo:"

explicacion: |
  La conjunción 'y' distribuye los medios de acceso entre los dos colectivos: un grupo usa uno y el otro grupo usa el otro. No es una acción compartida simultáneamente por todos, sino una repartición de recursos o acciones.
```

### 11 — pregunta 11

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["sintaxis", "sujeto", "agrupación"]

variables:
  nombre1: uno_de(["Luis", "Ana", "Pedro", "María"])
  nombre2: uno_de(["Carlos", "Laura", "Juan", "Sofía"])
  verbo: uno_de(["comió", "durmió", "estudió", "trabajó"])

respuesta: |
  Copulativa
tipo: completar

enunciado: "En la oración '{nombre1} y {nombre2} {verbo} temprano', la coordinación de los sujetos se considera:"

explicacion: |
  La acción de comer, dormir, estudiar o trabajar se atribuye al conjunto 'Luis y Carlos' como un sujeto plural. No implica que Luis comió con Carlos de manera recíproca, sino que ambos realizaron la acción. Es una coordinación copulativa.
```

### 12 — pregunta 12

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["definicion", "concepto", "teoria"]

variables:
  clave: uno_de(["la reciprocidad", "la alternancia", "la separación", "la independencia"])

respuesta: |
  La reciprocidad o la separación de la acción
tipo: completar

enunciado: "La característica fundamental que distingue a una coordinación distributiva es que la conjunción indica que la acción o cualidad se aplica por separado o mutuamente a cada elemento, a menudo marcada por:"

explicacion: |
  A diferencia de la copulativa que suma elementos, la distributiva indica que lo que se dice de uno se aplica al otro individualmente, ya sea por reciprocidad (acción mutua) o por alternancia (reparto de elementos).
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["ejemplos", "alternancia"]

variables:
  sujeto: uno_de(["Ellos", "Nosotros", "Ellos"])
  accion: uno_de(["subirán", "bajarán", "saldrán"])
  via1: uno_de(["por la escalera", "por el ascensor", "por la puerta"])
  via2: uno_de(["por el ascensor", "por la escalera", "por la puerta"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sujeto} {accion} {via1} y {via2}', si se entiende que un sube por una vía y el otro por la otra, se trata de una coordinación distributiva."

explicacion: |
  Correcto. La conjunción distribuye los medios (vías) entre los sujetos. No todos usan ambas vías juntos, sino que se reparten el uso de los medios disponibles.
```

### 14 — pregunta 14

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["conectivos", "distribucion", "estructura"]

variables:
  elem1: uno_de(["unos", "algunos", "otros"])
  elem2: uno_de(["otros", "unos", "algunos"])
  accion: uno_de(["vienen", "van", "llegan"])

respuesta: |
  Distributiva
tipo: completar

enunciado: "En la frase '{elem1} y {elem2} {accion} mañana', la estructura 'y... y...' suele indicar una coordinación:"

explicacion: |
  La repetición de la conjunción 'y' a menudo enfatiza la distribución individual de la acción o la cualidad sobre cada elemento del grupo, separándolos en la ejecución del predicado.
```

### 15 — pregunta 15

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["verbos", "no-distributivo", "copulativo"]

variables:
  sujeto1: uno_de(["El perro", "El gato", "El niño"])
  sujeto2: uno_de(["el perro", "el gato", "el niño"])
  adjetivo: uno_de(["es grande", "es pequeño", "es rápido"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{sujeto1} y {sujeto2} {adjetivo}', la coordinación es siempre distributiva porque hay dos sujetos."

explicacion: |
  Falso. La presencia de dos sujetos unidos por 'y' no garantiza que sea distributiva. Si la cualidad se aplica al grupo como un todo (ej. 'Juan y Pedro es alto' - incorrecto gramaticalmente pero conceptualmente copulativo de atributo), o si no hay reciprocidad, es copulativa. La distribución requiere que la acción/cualidad se aplique individualmente de forma separada o recíproca.
```

### 16 — pregunta 16

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["sintaxis", "sujeto", "pluralidad"]

variables:
  nombre1: uno_de(["María", "Juan", "Ana"])
  nombre2: uno_de(["Carlos", "Luis", "Pedro"])
  verbo: uno_de(["se ayudaron", "se miraron", "se conocieron"])

respuesta: |
  Sujeto plural coordinado
tipo: completar

enunciado: "En la oración '{nombre1} y {nombre2} {verbo}', el sujeto sintáctico es:"

explicacion: |
  El sujeto es el conjunto '{nombre1} y {nombre2}'. Aunque la acción es distributiva (recíproca), gramaticalmente funciona como un sujeto plural compuesto por dos coordenadas.
```

### 17 — pregunta 17

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["ambigüedad", "contexto", "interpretación"]

variables:
  elem1: uno_de(["El padre", "El maestro", "El director"])
  elem2: uno_de(["el hijo", "el alumno", "el estudiante"])
  accion: uno_de(["se pelearon", "se abrazaron", "se saludaron"])

respuesta: |
  Puede ser copulativa o distributiva según el contexto
tipo: completar

enunciado: "En la frase '{elem1} y {elem2} {accion}', sin más contexto, la coordinación puede interpretarse como:"

explicacion: |
  Dependiendo del verbo y el contexto, puede ser copulativa (ambos realizan la acción individualmente pero no necesariamente uno con el otro, ej. 'se saludaron' a terceros) o distributiva/recíproca (uno con el otro, ej. 'se pelearon'). El verbo recíproco fuerza la interpretación distributiva.
```

### 18 — pregunta 18

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["conjunciones", "negación", "distributiva"]

variables:
  elem1: uno_de(["Ninguno", "Nadie", "Nada"])
  elem2: uno_de(["de ellos", "de nosotros", "de ustedes"])
  accion: uno_de(["vinieron", "llegaron", "estuvieron"])

respuesta: falso
tipo: vf

enunciado: "En la oración 'Ni {elem1} {elem2} {accion}', la coordinación 'ni... ni...' es siempre distributiva."

explicacion: |
  Falso. La coordinación disyuntiva negativa 'ni... ni...' niega la acción a ambos elementos por igual, pero no implica necesariamente una acción recíproca o una repartición de medios entre ellos. Es una negación acumulativa a los sujetos, no una distribución de acción entre ellos.
```

### 19 — pregunta 19

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["reciprocidad", "sintaxis", "semántica"]

variables:
  sujeto: uno_de(["Ellos", "Nosotros", "Ellos"])
  verbo: uno_de(["se vieron", "se encontraron", "se llamaron"])

respuesta: |
  La acción se realiza mutuamente por cada uno de los sujetos
tipo: completar

enunciado: "En la oración '{sujeto} {verbo} ayer', el significado de la coordinación distributiva recíproca es que:"

explicacion: |
  La reciprocidad implica que cada sujeto realiza la acción sobre el otro. Si son A y B, A hace la acción con B y B hace la acción con A.
```

### 20 — pregunta 20

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["objeto", "distribución", "complemento"]

variables:
  sujeto: uno_de(["Ellos", "Nosotros", "Ellos"])
  verbo: uno_de(["comieron", "leían", "escucharon"])
  obj1: uno_de(["la manzana", "el libro", "la canción"])
  obj2: uno_de(["la pera", "el diario", "la radio"])

respuesta: |
  Distributiva
tipo: completar

enunciado: "En la oración '{sujeto} {verbo} {obj1} y {obj2}', si se entiende que uno comió la manzana y el otro la pera, la coordinación de los objetos es:"

explicacion: |
  La conjunción 'y' distribuye los objetos entre los sujetos. Cada sujeto recibe un objeto diferente. Es una coordinación distributiva del complemento directo.
```

### 21 — pregunta 21

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["comparación", "copulativa", "distributiva"]

variables:
  elem1: uno_de(["Juan", "María", "Pedro"])
  elem2: uno_de(["Carlos", "Laura", "Luis"])
  accion: uno_de(["es alto", "es bajo", "es rubio"])

respuesta: |
  La copulativa agrupa los elementos como un conjunto único para la acción, mientras que la distributiva aplica la acción individualmente o recíprocamente.
tipo: completar

enunciado: "La diferencia principal entre la coordinación copulativa en '{elem1} y {elem2} {accion}' y la distributiva es:"

explicacion: |
  En la copulativa, la cualidad o acción se atribuye al grupo como un todo. En la distributiva, la acción se reparte o se realiza mutuamente entre los individuos.
```

### 22 — pregunta 22

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["adjetivos", "distribución", "cualidades"]

variables:
  elem1: uno_de(["El primer", "El segundo", "El último"])
  elem2: uno_de(["el segundo", "el tercero", "el último"])
  sust: uno_de(["piso", "nivel", "grupo"])
  adj1: uno_de(["alto", "grande", "amplio"])
  adj2: uno_de(["bajo", "pequeño", "estrecho"])

respuesta: |
  Distributiva
tipo: completar

enunciado: "En la frase '{elem1} {sust} es {adj1} y {elem2} {sust} es {adj2}', la coordinación de las cualidades es:"

explicacion: |
  Cada elemento tiene una cualidad diferente. La conjunción distribuye las propiedades: una para el primero, otra para el segundo. Es distributiva.
```

### 23 — pregunta 23

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["verbos", "no-recíproco", "sintaxis"]

variables:
  sujeto1: uno_de(["Los niños", "Los alumnos", "Los jugadores"])
  sujeto2: uno_de(["las niñas", "las alumnas", "las jugadoras"])
  accion: uno_de(["jugaron", "estudiaron", "trabajaron"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{sujeto1} y {sujeto2} {accion} en el parque', la coordinación es distributiva porque hay dos grupos de sujetos."

explicacion: |
  Falso. La acción de jugar, estudiar o trabajar se realiza por cada grupo o por todos juntos, pero no implica reciprocidad ni repartición de medios entre los grupos. Es una coordinación copulativa.
```

### 24 — pregunta 24

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["sintaxis", "sujeto", "análisis"]

variables:
  nombre1: uno_de(["Ana", "Luis", "María"])
  nombre2: uno_de(["Carlos", "Pedro", "Juan"])
  verbo: uno_de(["se ayudaron", "se miraron", "se conocieron"])

respuesta: |
  Ana y Carlos
tipo: completar

enunciado: "En la oración '{nombre1} y {nombre2} {verbo}', el sujeto sintáctico es:"

explicacion: |
  El sujeto es el conjunto coordinado '{nombre1} y {nombre2}'. Aunque la acción sea distributiva, gramaticalmente forman un único sujeto plural.
```

### 25 — pregunta 25

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["conjunciones", "disyuntiva", "distribución"]

variables:
  elem1: uno_de(["Uno", "Algunos", "Otros"])
  elem2: uno_de(["de ellos", "de nosotros", "de ustedes"])
  accion: uno_de(["viene", "va", "llega"])

respuesta: |
  Distributiva (por alternancia)
tipo: completar

enunciado: "En la frase '{elem1} {elem2} {accion} por la mañana y {elem1} {elem2} {accion} por la tarde', la coordinación es:"

explicacion: |
  La conjunción 'o' (implícita en la alternancia) distribuye la acción en el tiempo. Un grupo realiza la acción en un momento y el otro en otro. Es una coordinación distributiva por alternancia.
```

### 26 — pregunta 26

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["conectivos", "combinación", "distribución"]

variables:
  elem1: uno_de(["El libro", "El cuaderno", "La carpeta"])
  elem2: uno_de(["el lápiz", "el borrador", "la regla"])
  accion: uno_de(["es necesario", "es útil", "es importante"])

respuesta: |
  Puede ser distributiva si se aplica a cada uno individualmente
tipo: completar

enunciado: "En la frase '{elem1} y {elem2} {accion}', si se entiende que cada uno es necesario por separado, la coordinación es:"

explicacion: |
  Si la cualidad se aplica a cada elemento de forma individual (el libro es necesario y el lápiz es necesario), se trata de una coordinación distributiva de la cualidad.
```

### 27 — pregunta 27

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["verbos", "recíproco", "sujeto"]

variables:
  sujeto: uno_de(["Ellos", "Nosotros", "Ellos"])
  verbo: uno_de(["se abrazaron", "se besaron", "se saludaron"])

respuesta: |
  La acción se realiza mutuamente
tipo: completar

enunciado: "En la oración '{sujeto} {verbo} ayer', el significado de la coordinación distributiva es que:"

explicacion: |
  Los verbos recíprocos indican que cada sujeto realiza la acción sobre el otro. A abraza a B y B abraza a A.
```

### 28 — pregunta 28

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["objeto", "distribución", "complemento"]

variables:
  sujeto: uno_de(["Ellos", "Nosotros", "Ellos"])
  verbo: uno_de(["dieron", "enviaron", "mandaron"])
  obj1: uno_de(["el regalo", "la carta", "el paquete"])
  obj2: uno_de(["el premio", "el mensaje", "la nota"])

respuesta: |
  Distributiva
tipo: completar

enunciado: "En la oración '{sujeto} {verbo} {obj1} y {obj2} a sus amigos', si se entiende que uno dio el regalo y el otro el premio, la coordinación de los objetos directos es:"

explicacion: |
  La conjunción 'y' distribuye los objetos entre los sujetos. Cada sujeto entrega un objeto diferente. Es una coordinación distributiva del complemento directo.
```

### 29 — pregunta 29

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["comparación", "disyuntiva", "distributiva"]

variables:
  elem1: uno_de(["Juan", "María", "Pedro"])
  elem2: uno_de(["Carlos", "Laura", "Luis"])
  accion: uno_de(["viene", "va", "llega"])

respuesta: |
  La distributiva aplica la acción a ambos, la disyuntiva excluye una opción
tipo: completar

enunciado: "La diferencia entre la coordinación distributiva en '{elem1} y {elem2} {accion}' y la disyuntiva en '{elem1} o {elem2} {accion}' es:"

explicacion: |
  La distributiva indica que la acción se realiza por ambos (individualmente o recíprocamente). La disyuntiva indica que solo uno de los dos realizará la acción, excluyendo al otro.
```

### 30 — pregunta 30

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["verbos", "distribución", "acción"]

variables:
  elem1: uno_de(["El primero", "El segundo", "El último"])
  elem2: uno_de(["el segundo", "el tercero", "el último"])
  accion1: uno_de(["habló", "cantó", "dibujó"])
  accion2: uno_de(["escuchó", "bailó", "pintó"])

respuesta: |
  Distributiva
tipo: completar

enunciado: "En la frase '{elem1} {accion1} y {elem2} {accion2}', la coordinación de las acciones es:"

explicacion: |
  Cada elemento realiza una acción diferente. La conjunción distribuye las acciones entre los sujetos. Es una coordinación distributiva.
```

### 31 — pregunta 31

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["conjunciones", "negación", "no-distributivo"]

variables:
  elem1: uno_de(["Ninguno", "Nadie", "Nada"])
  elem2: uno_de(["de ellos", "de nosotros", "de ustedes"])
  accion: uno_de(["vinieron", "llegaron", "estuvieron"])

respuesta: falso
tipo: vf

enunciado: "En la oración 'Ni {elem1} {elem2} {accion}', la coordinación 'ni... ni...' es distributiva porque niega la acción a cada uno por separado."

explicacion: |
  Falso. Aunque niega a cada uno, no implica una acción recíproca ni una repartición de medios. Es una negación acumulativa a los sujetos. No es una coordinación distributiva en el sentido sintáctico de aplicación de acción mutua o alternante.
```

### 32 — pregunta 32

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["sintaxis", "sujeto", "análisis"]

variables:
  nombre1: uno_de(["Ana", "Luis", "María"])
  nombre2: uno_de(["Carlos", "Pedro", "Juan"])
  verbo: uno_de(["se ayudaron", "se miraron", "se conocieron"])

respuesta: |
  Ana y Carlos
tipo: completar

enunciado: "En la oración '{nombre1} y {nombre2} {verbo}', el sujeto sintáctico es:"

explicacion: |
  El sujeto es el conjunto coordinado '{nombre1} y {nombre2}'. Aunque la acción sea distributiva, gramaticalmente forman un único sujeto plural.
```
