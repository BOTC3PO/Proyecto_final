# Economia — economia positiva y normativa (cuestionario, 22 preguntas VBLang)

> Tema: `economia/economia-positiva-y-normativa`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "economía"
  tema: "economia_positiva_y_normativa"
  nivel: "basico"
  tags: ["clasificacion", "definicion"]

variables:
  frase: uno_de(["El aumento del salario mínimo provoca un aumento en el desempleo juvenil.", "El gobierno debería aumentar el salario mínimo para ayudar a los pobres.", "La inflación es un fenómeno monetario.", "Es justo que se controle la inflación.", "La devaluación del peso reduce la competitividad de las exportaciones.", "Es necesario controlar la inflación para proteger el ahorro."])
  es_positiva: es_primo(random(1, 10)) == 1

respuesta: "positiva"
tipo: input

enunciado: "Clasifica la siguiente afirmación como 'positiva' o 'normativa': \"{frase}\""

explicacion: |
  La economía positiva se basa en hechos verificables y relaciones causales objetivas. Si la afirmación describe "qué es" o "qué pasa" y puede ser contrastada con datos, es positiva. Si expresa un "debería ser" o un juicio de valor, es normativa.
```

### 2 — pregunta 2

```
metadata:
  materia: "economía"
  tema: "economia_positiva_y_normativa"
  nivel: "basico"
  tags: ["clasificacion", "definicion"]

variables:
  frase: uno_de(["El subsidio a la nafta genera un déficit fiscal.", "El gobierno debería subsidiar la nafta para ayudar a las familias.", "La inflación reduce el poder adquisitivo.", "Es justo subsidiar los alimentos básicos.", "Un aumento en la oferta de dinero causa inflación.", "Es necesario reducir el gasto público."])
  es_normativa: es_primo(random(1, 10)) == 1

respuesta: "normativa"
tipo: input

enunciado: "Clasifica la siguiente afirmación como 'positiva' o 'normativa': \"{frase}\""

explicacion: |
  La economía normativa se refiere a cómo *debería* ser la economía. Incluye valores, juicios de valor y opiniones sobre qué acciones deberían tomarse. No puede probarse solo con datos, sino que depende de las prioridades éticas o políticas.
```

### 3 — pregunta 3

```
metadata:
  materia: "economía"
  tema: "economia_positiva_y_normativa"
  nivel: "intermedio"
  tags: ["conceptos", "verificacion"]

variables:
  pregunta: uno_de(["¿Qué característica define a la economía positiva?", "¿Qué característica define a la economía normativa?"])
  respuesta_correcta: uno_de(["Puede ser verificada empíricamente", "Depende de juicios de valor"])
  es_positiva: es_primo(random(1, 10)) == 1

respuesta: respuesta_correcta
tipo: input

enunciado: "{pregunta} (Escribe la característica principal)"

explicacion: |
  La economía positiva se distingue por ser objetiva y verificable mediante la observación empírica (datos, hechos). La economía normativa se distingue por incluir juicios de valor y opiniones sobre lo que "debería ser".
```

### 4 — pregunta 4

```
metadata:
  materia: "economía"
  tema: "economia_positiva_y_normativa"
  nivel: "intermedio"
  tags: ["politica", "juicio"]

variables:
  politica: uno_de(["subsidios a la educación", "reducciones impositivas", "control de precios"])
  enunciado_texto: "El gobierno debería implementar {politica} para mejorar el bienestar social."
  es_normativa: verdadero

respuesta: "normativa"
tipo: input

enunciado: "Clasifica la afirmación: \"{enunciado_texto}\""

explicacion: |
  La frase contiene "debería" y un objetivo de valor ("mejorar el bienestar social"). Esto implica una preferencia ética sobre lo que se considera deseable, lo cual es propio de la economía normativa.
```

### 5 — pregunta 5

```
metadata:
  materia: "economía"
  tema: "economia_positiva_y_normativa"
  nivel: "avanzado"
  tags: ["errores", "comprension"]

variables:
  afirmacion: uno_de(["La inflación actual es del 100%.", "Es urgente controlar la inflación.", "El desempleo ha aumentado un 5%.", "Deberíamos reducir el desempleo."])
  tipo_real: uno_de(["positiva", "normativa"])
  es_positiva: es_primo(random(1, 10)) == 1

respuesta: tipo_real
tipo: input

enunciado: "¿De qué tipo es la siguiente afirmación? \"{afirmacion}\""

explicacion: |
  Si la afirmación describe un hecho observable (datos de inflación, desempleo), es positiva. Si expresa un deseo o recomendación (urgencia, deberíamos), es normativa.
```

### 6 — pregunta 6

```
metadata:
  materia: "economía"
  tema: "economia_positiva_y_normativa"
  nivel: "basico"
  tags: ["ejemplos", "hechos"]

variables:
  hecho: uno_de(["El dólar blue cotiza a $1000.", "Es injusto que el dólar sea tan alto.", "El gobierno debería controlar el dólar.", "Es necesario devaluar la moneda."])
  es_hecho: es_primo(random(1, 10)) == 1

respuesta: hecho
tipo: input

enunciado: "Selecciona la afirmación que corresponde a la economía positiva:"

explicacion: |
  Solo la afirmación que describe un dato observable y verificable (el precio del dólar) es positiva. Las demás contienen juicios de valor o recomendaciones.
```

### 7 — pregunta 7

```
metadata:
  materia: "economía"
  tema: "economia_positiva_y_normativa"
  nivel: "basico"
  tags: ["ejemplos", "juicios"]

variables:
  juicio: uno_de(["La inflación reduce el poder adquisitivo.", "Es terrible que haya inflación.", "El desempleo es del 8%.", "El PIB creció un 2%."])
  es_juicio: es_primo(random(1, 10)) == 1

respuesta: juicio
tipo: input

enunciado: "Selecciona la afirmación que corresponde a la economía normativa:"

explicacion: |
  La frase "Es terrible que haya inflación" expresa una reacción emocional y un juicio de valor sobre un fenómeno, lo cual es propio de la economía normativa. Las otras son descripciones de hechos.
```

### 8 — pregunta 8

```
metadata:
  materia: "economía"
  tema: "economia_positiva_y_normativa"
  nivel: "intermedio"
  tags: ["hipotesis", "verificacion"]

variables:
  hipotesis: uno_de(["La inflación es un fenómeno monetario.", "Es justo controlar la inflación.", "El gobierno debe imprimir dinero.", "Es malo tener inflación."])
  es_hipotesis: es_primo(random(1, 10)) == 1

respuesta: hipotesis
tipo: input

enunciado: "Selecciona la afirmación que es una hipótesis positiva:"

explicacion: |
  Una hipótesis positiva plantea una relación causal que puede ser contrastada con la realidad. "La inflación es un fenómeno monetario" es una afirmación que puede ser verificada o refutada con datos históricos.
```

### 9 — pregunta 9

```
metadata:
  materia: "economía"
  tema: "economia_positiva_y_normativa"
  nivel: "intermedio"
  tags: ["recomendacion", "politica"]

variables:
  recomendacion: uno_de(["El gobierno debería subsidiar la nafta.", "El subsidio genera déficit.", "La nafta sube de precio.", "Es necesario controlar precios."])
  es_recomendacion: es_primo(random(1, 10)) == 1

respuesta: recomendacion
tipo: input

enunciado: "Selecciona la afirmación que es una recomendación normativa:"

explicacion: |
  La recomendación normativa expresa un deseo o acción que "debería" tomarse. "El gobierno debería subsidiar la nafta" implica un juicio de valor sobre la ayuda social frente a otros objetivos.
```

### 10 — pregunta 10

```
metadata:
  materia: "economía"
  tema: "economia_positiva_y_normativa"
  nivel: "basico"
  tags: ["datos", "empirico"]

variables:
  dato: uno_de(["El PIB creció un 3% en 2023.", "Es bueno que el PIB haya crecido.", "Deberíamos crecer más.", "La economía está mal."])
  es_dato: es_primo(random(1, 10)) == 1

respuesta: dato
tipo: input

enunciado: "Selecciona la afirmación que presenta un dato empírico verificable:"

explicacion: |
  Solo la afirmación que indica un número concreto y observable (crecimiento del PIB) es un dato empírico. Las demás son opiniones o juicios de valor.
```

### 11 — pregunta 11

```
metadata:
  materia: "economía"
  tema: "economia_positiva_y_normativa"
  nivel: "basico"
  tags: ["opinion", "juicio"]

variables:
  opinion: uno_de(["La inflación es alta.", "Es terrible que haya inflación.", "El dólar subió.", "Es necesario controlar la inflación."])
  es_opinion: es_primo(random(1, 10)) == 1

respuesta: opinion
tipo: input

enunciado: "Selecciona la afirmación que expresa una opinión normativa:"

explicacion: |
  "Es terrible que haya inflación" es una reacción emocional y un juicio de valor. No describe un hecho, sino cómo se siente ante ese hecho.
```

### 12 — pregunta 12

```
metadata:
  materia: "economía"
  tema: "economia_positiva_y_normativa"
  nivel: "basico"
  tags: ["objetividad", "definicion"]

variables:
  afirmacion: uno_de(["La inflación es del 50%.", "Es justo que la inflación sea baja.", "Deberíamos controlar la inflación.", "La inflación es mala."])
  es_objetiva: es_primo(random(1, 10)) == 1

respuesta: afirmacion
tipo: input

enunciado: "Selecciona la afirmación objetiva (positiva):"

explicacion: |
  La afirmación objetiva es aquella que describe un hecho verificable sin emitir juicios de valor. "La inflación es del 50%" es un dato que puede ser comprobado.
```

### 13 — pregunta 13

```
metadata:
  materia: "economía"
  tema: "economia_positiva_y_normativa"
  nivel: "basico"
  tags: ["subjetividad", "definicion"]

variables:
  afirmacion: uno_de(["El desempleo es del 8%.", "Es terrible el desempleo.", "El desempleo ha aumentado.", "Debemos reducir el desempleo."])
  es_subjetiva: es_primo(random(1, 10)) == 1

respuesta: afirmacion
tipo: input

enunciado: "Selecciona la afirmación subjetiva (normativa):"

explicacion: |
  La afirmación subjetiva incluye juicios de valor o deseos. "Es terrible el desempleo" expresa una reacción emocional y un juicio ético, no un hecho verificable.
```

### 14 — pregunta 14

```
metadata:
  materia: "economia"
  tema: "economia_positiva_y_normativa"
  nivel: "intermedio"
  tags: ["veracidad", "hipotesis"]

variables:
  afirmacion: "La inflación alta reduce el valor real de la deuda pública"
  es_positiva: verdadero
  es_falsa: falso # No importa si es falsa, si es positiva es verificable

respuesta: verdadero
tipo: vf

enunciado: "Afirmación: '{afirmacion}'.\n\nEsta afirmación es positiva porque puede ser verificada o refutada con datos, independientemente de si es verdadera o falsa."

explicacion: |
  Una afirmación positiva puede ser falsa, pero sigue siendo positiva si es verificable. La normativa no es verificable de la misma manera.
```

### 15 — pregunta 15

```
metadata:
  materia: "economia"
  tema: "economia_positiva_y_normativa"
  nivel: "intermedio"
  tags: ["verificacion", "limites"]

variables:
  afirmacion: "La desigualdad es el mayor problema de la sociedad actual"
  es_verdadero: falso # No es verificable empíricamente como "verdadera" en sentido positivo

respuesta: falso
tipo: vf

enunciado: "Afirmación: '{afirmacion}'.\n\nEsta afirmación es positiva porque podemos medir la desigualdad con datos."

explicacion: |
  Aunque la desigualdad se mide, decir que es 'el mayor problema' es un juicio de valor (normativo). No es una afirmación positiva pura.
```

### 16 — pregunta 16

```
metadata:
  materia: "economia"
  tema: "economia_positiva_y_normativa"
  nivel: "intermedio"
  tags: ["objetividad", "ideologia"]

variables:
  afirmacion: "Un aumento en la oferta monetaria genera inflación"
  es_positiva: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Afirmación: '{afirmacion}'.\n\nEsta afirmación es positiva y su validez no depende de la ideología del economista que la emite."

explicacion: |
  La economía positiva busca verdades objetivas que son independientes de las preferencias personales o políticas.
```

### 17 — pregunta 17

```
metadata:
  materia: "economia"
  tema: "economia_positiva_y_normativa"
  nivel: "intermedio"
  tags: ["verificacion", "diferenciacion"]

variables:
  valor1: random(10, 50)
  valor2: random(60, 100)

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Una afirmación positiva como 'un aumento del {valor1}% en el precio del dólar eleva los precios de importados en un {valor2}%' puede ser probada o refutada con datos empíricos."

explicacion: |
  Las afirmaciones positivas son objetivas y se basan en hechos verificables. Su validez depende de la evidencia disponible, no de la opinión personal.
```

### 18 — pregunta 18

```
metadata:
  materia: "economia"
  tema: "economia_positiva_y_normativa"
  nivel: "intermedio"
  tags: ["verificacion", "diferenciacion"]

variables:
  valor1: random(10, 50)
  valor2: random(60, 100)

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La afirmación 'el gobierno debería reducir el impuesto a las ganancias en un {valor1}% para ayudar a las pymes, aunque esto reduzca la recaudación en un {valor2}%' es una afirmación positiva."

explicacion: |
  Esta es una afirmación normativa porque contiene un juicio de valor ('debería') y una recomendación de política. No es verificable como verdadera o falsa solo con datos, sino que depende de los objetivos sociales.
```

### 19 — pregunta 19

```
metadata:
  materia: "economia"
  tema: "economia_positiva_y_normativa"
  nivel: "intermedio"
  tags: ["errores_comunes", "comprension"]

variables:
  afirmacion: uno_de(["positiva", "normativa"])

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Las afirmaciones {afirmacion} pueden ser probadas definitivamente como verdaderas o falsas utilizando únicamente datos empíricos."

explicacion: |
  Solo las afirmaciones positivas pueden ser verificadas empíricamente. Las normativas dependen de valores y no pueden probarse con datos.
```

### 20 — pregunta 20

```
metadata:
  materia: "economia"
  tema: "economia_positiva_y_normativa"
  nivel: "intermedio"
  tags: ["errores_comunes", "comprension"]

variables:
  afirmacion: uno_de(["positiva", "normativa"])

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Las afirmaciones {afirmacion} expresan deseos o recomendaciones sobre qué acciones deberían tomarse."

explicacion: |
  Las afirmaciones normativas expresan deseos o recomendaciones ('debería'), mientras que las positivas describen hechos.
```

### 21 — pregunta 21

```
metadata:
  materia: "economia"
  tema: "economia_positiva_y_normativa"
  nivel: "intermedio"
  tags: ["objetividad", "ideologia"]

variables:
  afirmacion: uno_de(["positiva", "normativa"])

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Las herramientas de la economía {afirmacion} funcionan independientemente de nuestra ideología política."

explicacion: |
  La economía positiva busca entender los mecanismos del mercado de manera objetiva, funcionando independientemente de la ideología.
```

### 22 — pregunta 22

```
metadata:
  materia: "economia"
  tema: "economia_positiva_y_normativa"
  nivel: "intermedio"
  tags: ["objetividad", "ideologia"]

variables:
  afirmacion: uno_de(["positiva", "normativa"])

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Las afirmaciones {afirmacion} son independientes de la ideología porque dependen de valores personales."

explicacion: |
  Las afirmaciones normativas están intrínsecamente ligadas a valores y perspectivas personales o políticas, por lo que no son independientes de la ideología.
```
