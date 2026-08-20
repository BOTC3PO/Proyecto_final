### 1 — Diferencia entre hecho y acto
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["conceptos_basicos", "hecho_juridico"]

respuesta: "acto jurídico"
tipo: completar
respuestas_validas: ["acto jurídico"]

enunciado: "Mientras que un hecho jurídico es un evento que produce consecuencias legales sin que medie la voluntad de las partes para producir dichas consecuencias, el ___ es aquel donde la voluntad está dirigida específicamente a crear, modificar o extinguir derechos."

explicacion: |
  El hecho jurídico es un acontecimiento natural o humano que el derecho vincula a una consecuencia, mientras que en el acto jurídico existe la intención deliberada de producir ese efecto legal.
```

### 2 — El elemento de la relevancia jurídica
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["relevancia", "consecuencia"]

variables:
  caso_idx: uno_de([0, 1])

respuesta: uno_de(["es", "no es"])
tipo: mc
opciones_explicitas: ["es", "no es"]

enunciado: "Analice el siguiente escenario: {caso_idx == 0 ? 'Un rayo cae sobre un bosque y causa un incendio que destruye una propiedad asegurada.' : 'Una persona camina por la calle y ve un atardecer hermoso.'} ¿Este evento es un hecho jurídicamente relevante? {caso_idx == 0 ? 'es' : 'no es'}"

explicacion: |
  En el primer caso, el rayo (hecho natural) activa una consecuencia legal (el contrato de seguro). En el segundo, el atardecer es un hecho de la naturaleza pero no altera ninguna relación jurídica ni crea derechos u obligaciones.
```

### 3 — Clasificación de los hechos
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["clasificacion", "hechos_naturales"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que todos los hechos de la naturaleza (como un terremoto) son hechos jurídicamente relevantes por el solo hecho de ocurrir?"

explicacion: |
  Falso. Solo son hechos jurídicamente relevantes aquellos que el ordenamiento jurídico decide vincular a una consecuencia legal (por ejemplo, un terremoto que activa un seguro o una eximente de responsabilidad).

```

### 4 — Elementos del hecho jurídico
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["elementos", "causalidad"]

respuesta: ["Presencia de un hecho", "Norma jurídica", "Consecuencia legal"]
tipo: ordenar

opciones_explicitas: ["Presencia de un hecho", "Norma jurídica", "Consecuencia legal"]

enunciado: "Ordene la secuencia lógica de la estructura de la relevancia jurídica, desde el suceso inicial hasta su efecto en el derecho:"

explicacion: |
  Para que exista relevancia, debe ocurrir un hecho, debe existir una norma que lo prevea y, finalmente, se produce la consecuencia legal prevista por dicha norma.
```

### 5 — Contraste con el acto jurídico
```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "avanzado"
  tags: ["voluntad", "causalidad"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: uno_de(["hecho jurídico", "acto jurídico"])
tipo: mc
opciones_explicitas: ["hecho jurídico", "acto jurídico"]

enunciado: "Si un individuo firma un contrato de compraventa con la intención de transferir la propiedad de un bien, estamos ante un: {escenario_idx == 0 ? 'acto jurídico' : 'hecho jurídico'}"

explicacion: |
  La voluntad de transferir la propiedad es el elemento distintivo que convierte al evento en un acto jurídico, a diferencia del hecho jurídico donde la consecuencia se impone independientemente de la voluntad de los sujetos.
```