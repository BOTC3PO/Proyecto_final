# Examen jefe — [PENDIENTE #769]

> Logro #769. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **116 preguntas totales** en 5/5 secciones.

---

## Sección: elasticidad (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  pct_precio: random(5, 15)
  k: random(2, 4)
  pct_cantidad: pct_precio * k

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "El precio sube {pct_precio}% y la cantidad demandada baja {pct_cantidad}%. ¿Cuál es el valor absoluto de la elasticidad?"

pasos:
  - "|E| = {pct_cantidad}%/{pct_precio}% = {k}"

explicacion: |
  |E| = (%ΔQ)/(%ΔP), tomando los valores absolutos de cada variación.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  pct_cantidad: random(2, 8)
  k: random(2, 5)
  pct_precio: pct_cantidad * k

respuesta: pct_cantidad
tipo: input
tolerancia_abs: 0

enunciado: "El precio sube {pct_precio}% y la cantidad demandada baja {pct_cantidad}%. Sin dividir todavía, ¿cuál es el numerador (%ΔQ, en valor absoluto) del cociente de elasticidad?"

explicacion: |
  El numerador de |E| es directamente %ΔQ = {pct_cantidad}%.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["clasificar", "opcion_multiple"]

variables:
  pct_precio: random(5, 15)
  k: random(2, 4)
  pct_cantidad: pct_precio * k

respuesta: "Elástica"
tipo: mc
opciones_explicitas:
  - "Elástica"
  - "Inelástica"
  - "Unitaria"

enunciado: "El precio sube {pct_precio}% y la cantidad baja {pct_cantidad}% (|E|={k}). ¿Es elástica, inelástica o unitaria la demanda?"

explicacion: |
  |E|={k} > 1 → elástica.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["clasificar", "opcion_multiple"]

variables:
  pct_cantidad: random(2, 8)
  k: random(2, 5)
  pct_precio: pct_cantidad * k

respuesta: "Inelástica"
tipo: mc
opciones_explicitas:
  - "Inelástica"
  - "Elástica"
  - "Unitaria"

enunciado: "El precio sube {pct_precio}% y la cantidad baja {pct_cantidad}%. ¿Es elástica, inelástica o unitaria la demanda?"

explicacion: |
  |E| = {pct_cantidad}/{pct_precio} < 1 → inelástica.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["clasificar", "verdadero_falso"]

variables:
  pct: random(5, 30)

respuesta: verdadero
tipo: vf

enunciado: "El precio sube {pct}% y la cantidad baja exactamente {pct}%. ¿Es unitaria la elasticidad?"

explicacion: |
  |E| = {pct}/{pct} = 1 → elasticidad unitaria.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "basico"
  tags: ["variacion_porcentual"]

variables:
  k: random(1, 10)
  cantidad_inicial: k * 100
  pct: random(5, 40)
  cantidad_final: cantidad_inicial - k * pct

respuesta: pct
tipo: input
tolerancia_abs: 0

enunciado: "La cantidad demandada baja de {cantidad_inicial} a {cantidad_final} unidades. ¿Cuál es la variación porcentual (en valor absoluto)?"

pasos:
  - "%Δ = ({cantidad_inicial}−{cantidad_final})/{cantidad_inicial} × 100 = {pct}%"

explicacion: |
  Se compara el cambio con el valor INICIAL, no el final.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "basico"
  tags: ["variacion_porcentual"]

variables:
  k: random(1, 10)
  precio_inicial: k * 100
  pct: random(5, 40)
  precio_final: precio_inicial + k * pct

respuesta: pct
tipo: input
tolerancia_abs: 0

enunciado: "El precio sube de {precio_inicial} a {precio_final}. ¿Cuál es la variación porcentual?"

explicacion: |
  %Δ = ({precio_final}−{precio_inicial})/{precio_inicial} × 100 =
  {pct}%.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  k: random(1, 5)
  precio_inicial: k * 100
  pct_precio: random(5, 20)
  precio_final: precio_inicial + k * pct_precio
  cantidad_inicial: k * 100
  m: random(2, 4)
  pct_cantidad: pct_precio * m
  cantidad_final: cantidad_inicial - k * pct_cantidad

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "El precio pasa de {precio_inicial} a {precio_final}, y la cantidad de {cantidad_inicial} a {cantidad_final}. ¿Cuál es |E|?"

pasos:
  - "%ΔP = {pct_precio}%, %ΔQ = {pct_cantidad}% → |E| = {pct_cantidad}/{pct_precio} = {m}"

explicacion: |
  Primero se calcula cada variación porcentual, y después se dividen.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La elasticidad mide cuánto responde (en términos porcentuales) la cantidad demandada ante un cambio porcentual en el precio."

explicacion: |
  Es la definición central: un cociente de variaciones RELATIVAS, no
  absolutas.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La elasticidad de la demanda es exactamente lo mismo que la pendiente de la curva de demanda."

explicacion: |
  La pendiente usa variaciones absolutas (ΔP/ΔQ); la elasticidad usa
  variaciones porcentuales — son cálculos relacionados pero distintos.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Como la elasticidad usa porcentajes (no unidades), permite comparar la sensibilidad al precio de productos completamente distintos entre sí (por ejemplo, pan vs. autos)."

explicacion: |
  La pendiente sola no permitiría esa comparación, porque depende de las
  unidades de cada producto.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Los bienes esenciales, sin sustitutos cercanos (como medicamentos), suelen tener demanda inelástica."

explicacion: |
  La gente sigue comprándolos casi igual aunque suba el precio, porque
  no tiene alternativa.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Los bienes con sustitutos cercanos (por ejemplo, una marca de gaseosa cuando hay otras parecidas) suelen tener demanda elástica."

explicacion: |
  Si sube el precio, es fácil cambiar a otra opción — la cantidad
  demandada responde fuerte.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Por la ley de demanda (precio sube, cantidad baja), la elasticidad suele dar un número negativo, aunque se clasifique según su valor absoluto."

explicacion: |
  El signo refleja la dirección opuesta entre precio y cantidad; la
  magnitud (valor absoluto) es lo que importa para clasificar.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una elasticidad de −3 representa una demanda MÁS elástica que una de −2, aunque −3 sea 'más negativo' — lo que importa es el valor absoluto (3 > 2)."

explicacion: |
  Es el error de comparación más común: hay que comparar magnitudes, no
  el signo.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["elasticidad_puntual"]

variables:
  pendiente_demanda: -random(1, 5)
  precio: random(10, 50)
  cantidad: random(10, 50)

respuesta: (pendiente_demanda * precio) / cantidad
tipo: input
tolerancia_abs: 0.01

enunciado: "La función de demanda tiene dQ/dP = {pendiente_demanda} en el punto (P={precio}, Q={cantidad}). ¿Cuál es la elasticidad puntual E = (dQ/dP)×(P/Q)?"

explicacion: |
  Es la versión con derivada de la misma fórmula — la elasticidad
  exacta en un punto específico, no un promedio entre dos puntos.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La elasticidad puntual, calculada con la derivada dQ/dP, es la versión 'instantánea' de la elasticidad, igual que la derivada es la versión instantánea de una pendiente promedio."

explicacion: |
  Misma relación ya vista entre velocidad media e instantánea, o entre
  costo promedio y marginal.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  pct_precio: random(5, 15)
  k: random(2, 4)
  pct_cantidad: pct_precio * k

respuesta: verdadero
tipo: vf

enunciado: "El precio sube {pct_precio}% y la cantidad baja {pct_cantidad}%. ¿Es correcto clasificar esta demanda como elástica?"

explicacion: |
  |E| = {k} > 1 → elástica, correcto.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  pct_precio: random(5, 15)
  k: random(2, 4)
  pct_cantidad: pct_precio * k
  error: uno_de([0, 0, 1, -1])
  propuesto: k + error

respuesta: (propuesto == k)
tipo: vf

enunciado: "El precio sube {pct_precio}% y la cantidad baja {pct_cantidad}%. ¿Es correcto que |E| sea {propuesto}?"

explicacion: |
  El valor correcto es {pct_cantidad}/{pct_precio} = {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una empresa que vende un producto con demanda inelástica puede subir el precio sin perder demasiadas ventas — a diferencia de un producto con demanda elástica."

explicacion: |
  Es una de las aplicaciones prácticas de conocer la elasticidad de lo
  que se vende.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Todos los productos tienen la misma elasticidad, así que una vez calculada para uno, sirve para cualquier otro."

explicacion: |
  Cada producto tiene su propia elasticidad, según tenga o no
  sustitutos, sea esencial o no, etc.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["clasificar"]

variables:
  pct_precio: random(5, 30)

respuesta: pct_precio
tipo: input
tolerancia_abs: 0

enunciado: "El precio sube {pct_precio}%. ¿Qué variación porcentual de la cantidad daría elasticidad unitaria (|E|=1)?"

explicacion: |
  Para |E|=1, %ΔQ tiene que ser exactamente igual a %ΔP.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Elasticidad y costo marginal son la misma familia de idea (una razón de cambio) aplicada a dos preguntas distintas: una a cuánto cuesta producir más, la otra a cuánto responde la demanda al precio."

explicacion: |
  Es el resumen de por qué `../costo-marginal/` es el prerrequisito de
  este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La idea central de la elasticidad es usar variaciones RELATIVAS (porcentuales) en vez de ABSOLUTAS, lo que permite comparar sensibilidades entre magnitudes de escalas muy distintas."

explicacion: |
  Es el resumen del módulo: el mismo principio de 'porcentaje' ya
  trabajado en Tronco 1, aplicado ahora a comparar dos tasas de cambio
  entre sí.
```

## Sección: economia-positiva-y-normativa (22 preguntas)

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

## Sección: estado-de-resultados (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["conceptos", "ingresos"]

respuesta: "ingresos"
tipo: completar
respuestas_validas:
  - "ingresos"
  - "ventas"

enunciado: "El conjunto de incrementos en los beneficios económicos durante el período, que resultan en aumentos del patrimonio neto, se denominan _______."

explicacion: |
  Los ingresos representan las entradas de recursos o incrementos en el valor de los activos que surgen de las actividades principales de la organización.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["estructura", "resultado"]

variables:
  idx: uno_de([0, 1])
  escenario: [[1000, 800, 200], [500, 700, -200]]

respuesta: escenario[idx][2]
tipo: completar
tolerancia_abs: 0

enunciado: "En un escenario donde los ingresos son de ${escenario[idx][0]} y los costos/gastos totales son de ${escenario[idx][1]}, el resultado del período es _______."

pasos:
  - "Identificar el total de ingresos: ${escenario[idx][0]}"
  - "Identificar el total de costos y gastos: ${escenario[idx][1]}"
  - "Restar: Ingresos - Costos = Resultado"

explicacion: |
  El resultado se obtiene restando los costos y gastos de los ingresos totales. Si el resultado es positivo es ganancia, si es negativo es pérdida.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: verdadero
tipo: vf
enunciado: "Si el total de ingresos es menor que el total de costos y gastos en un período determinado, la organización presenta una pérdida."

explicacion: |
  Exacto. La pérdida ocurre cuando los egresos superan a los ingresos en el estado de resultados.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["estructura"]

respuesta_orden: ["Ingresos", "Costos", "Resultado"]
tipo: ordenar

opciones_explicitas: ["Ingresos", "Costos", "Resultado"]

enunciado: "Ordene los elementos según la estructura lógica de cálculo del estado de resultados (desde el origen del recurso hasta el resultado final):"

explicacion: |
  La secuencia lógica es: primero se registran los ingresos, luego se restan los costos/gastos y finalmente se obtiene el resultado (utilidad o pérdida).
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  idx: uno_de([0, 1])
  resultado_tipo: [["Ganancia", "positivo"], ["Pérdida", "negativo"]]

respuesta: resultado_tipo[idx][1]
tipo: mc

opciones_explicitas: ["positivo", "negativo"]

enunciado: "Si el resultado del período es una '_______', el valor numérico final es ${resultado_tipo[idx][0]}."

explicacion: |
  Una ganancia implica un valor positivo (ingresos > costos), mientras que una pérdida implica un valor negativo (ingresos < costos).
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["contabilidad", "ingresos", "costos"]

variables:
  datos: [[150000, 90000], [250000, 180000], [80000, 50000]]
  idx: uno_de([0,1,2])
  ventas: datos[idx][0]
  costo_ventas: datos[idx][1]

respuesta: ventas - costo_ventas
tipo: completar
tolerancia_abs: 0

enunciado: "Una empresa presenta las siguientes cifras en su estado de resultados: Ventas Totales de ${ventas} y Costo de Mercaderías Vendidas de ${costo_ventas}. ¿Cuál es el Resultado Bruto?"

pasos:
  - "Identificar las Ventas Netas: ${ventas}"
  - "Identificar el Costo de Ventas: ${costo_ventas}"
  - "Restar el Costo de las Ventas a las Ventas Netas: ${ventas} - ${costo_ventas}"

explicacion: |
  El Resultado Bruto se obtiene restando el costo de lo vendido a los ingresos por ventas. En este caso: ${ventas} - ${costo_ventas} = ${ventas - costo_ventas}.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["clasificacion", "conceptos"]

respuesta: "Ingreso"
tipo: mc
opciones_explicitas: ["Ingreso", "Costo", "Gasto", "Activo"]

enunciado: "Si una empresa realiza una venta de servicios por un valor de $50.000, este concepto se clasifica contablemente en el Estado de Resultados como un:"

explicacion: |
  Las entradas de recursos que incrementan el patrimonio neto de la entidad, provenientes de la actividad principal, se denominan Ingresos.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["utilidad", "impuestos", "gastos"]

variables:
  escenario: [[10000, 4000, 2000], [25000, 12000, 5000], [5000, 6000, 1000]]
  idx: uno_de([0,1,2])
  res_bruto: escenario[idx][0]
  gastos_op: escenario[idx][1]
  impuestos: escenario[idx][2]

respuesta: res_bruto - gastos_op - impuestos
tipo: completar
tolerancia_abs: 0

enunciado: "Se dispone de un Resultado Bruto de ${res_bruto}, Gastos Operativos de ${gastos_op} e Impuestos de ${impuestos}. Calcule la Utilidad Neta (Resultado del Ejercicio)."

pasos:
  - "Partir del Resultado Bruto: ${res_bruto}"
  - "Restar los Gastos Operativos: ${res_bruto} - ${gastos_op}"
  - "Restar los Impuestos para obtener el resultado final: ${res_bruto} - ${gastos_op} - ${impuestos}"

explicacion: |
  La Utilidad Neta es el resultado final después de deducir todos los costos, gastos y obligaciones impositivas.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["teoria", "conceptos"]

respuesta: falso

tipo: vf

enunciado: "Si el total de ingresos de una organización es menor al total de sus costos y gastos en un período determinado, el resultado se denomina 'Ganancia'."

explicacion: |
  Falso. Cuando los gastos superan a los ingresos, el resultado es una 'Pérdida'. La 'Ganancia' ocurre cuando los ingresos son mayores.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "proceso"]

opciones_explicitas: ["Ventas", "Resultado Bruto", "Resultado Operativo", "Resultado Neto"]
respuesta_orden: ["Ventas", "Resultado Bruto", "Resultado Operativo", "Resultado Neto"]
tipo: ordenar

enunciado: "Ordene los siguientes conceptos según la estructura lógica de cascada de un Estado de Resultados, desde el ingreso principal hasta el resultado final:"

explicacion: |
  La estructura sigue un orden de deducción sucesiva: se parte de las Ventas, se restan los costos para obtener el Bruto, luego se restan gastos operativos para el Operativo, y finalmente impuestos y otros para el Neto.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["ingresos", "devengado", "flujo_de_caja"]

respuesta: falso
tipo: vf

enunciado: "Un ingreso registrado en el Estado de Resultados implica necesariamente que el dinero ya ingresó a la cuenta bancaria de la organización."

explicacion: |
  El Estado de Resultados se rige por el principio de lo devengado. Esto significa que los ingresos se registran cuando se produce la venta o la prestación del servicio, independientemente de si el cliente pagó en efectivo o si la transacción fue a crédito.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["resultado", "ganancia", "perdida"]

variables:
  idx: uno_de([0, 1, 2])
  ingresos: [1000, 500, 1200]
  costos: [800, 600, 1200]
  resultados_texto: ["200", "-100", "0"]

respuesta: resultados_texto[idx]
tipo: mc
opciones_explicitas: ["200", "-100", "0", "No se puede determinar"]

enunciado: "Si una organización presenta un total de ingresos de {ingresos[idx]} y un total de costos de {costos[idx]}, su resultado del período es:"

explicacion: |
  El resultado (ganancia o pérdida) se obtiene restando los costos y gastos de los ingresos totales. El resultado es positivo (ganancia) o negativo (pérdida) según cuál de los dos totales sea mayor.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["orden", "estructura"]

respuesta_orden: ["Ventas", "Costo de Ventas", "Resultado Bruto", "Gastos Operativos", "Resultado Operativo"]
tipo: ordenar

opciones_explicitas: ["Ventas", "Costo de Ventas", "Resultado Bruto", "Gastos Operativos", "Resultado Operativo"]

enunciado: "Ordene los conceptos según el orden lógico de presentación en un Estado de Resultados estándar para determinar la utilidad operativa."

explicacion: |
  El orden lógico comienza con los ingresos por ventas, se restan los costos directos para obtener el margen bruto, luego se restan los gastos operativos para llegar al resultado operativo.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["costo", "gasto", "clasificacion"]

respuesta: "gasto"
tipo: completar
respuestas_validas:
  - "gasto"

enunciado: "Mientras que el costo está directamente vinculado a la producción de un bien o servicio, el pago de la factura de luz de la oficina administrativa se clasifica contablemente como un ___."

explicacion: |
  Los costos son inversiones que se recuperan al vender el producto (están en el inventario hasta la venta), mientras que los gastos son consumos que se utilizan para mantener la estructura operativa de la empresa.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "avanzado"
  tags: ["impuestos", "resultado_neto"]

variables:
  escenario: [["Resultado antes de impuestos: 100, Tasa: 0.3", "70"], ["Resultado antes de impuestos: -50, Tasa: 0.3", "-50"]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Calcule el Resultado Neto (utilidad o pérdida después de impuestos) considerando el siguiente escenario: {escenario[idx][0]}."

explicacion: |
  El resultado neto es el resultado final después de restar los impuestos al resultado antes de impuestos. Si hay pérdida, generalmente no se calcula impuesto sobre la renta (dependiendo de la legislación local, pero en ejercicios académicos se asume que no se resta impuesto a una pérdida).
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["conceptos", "contabilidad"]

respuesta: "flujo"
tipo: completar
respuestas_validas:
  - "flujo"
  - "flujo de fondos"
  - "flujo de caja"

enunciado: "A diferencia del Balance General, que muestra la situación patrimonial en un momento dado, el Estado de Resultados muestra el ___ de ingresos y gastos durante un período determinado."

explicacion: |
  El Balance General es una "foto" estática, mientras que el Estado de Resultados es un "video" que registra el flujo de transacciones en un tiempo determinado.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["rentabilidad", "liquidez"]

respuesta: falso
tipo: vf

enunciado: "Si una empresa reporta una utilidad neta positiva pero tiene problemas para pagar sus deudas corrientes, ¿es correcto afirmar que la utilidad neta indica la liquidez inmediata de la empresa?"

explicacion: |
  El principio del devengado implica que los ingresos y gastos se registran cuando ocurren, independientemente de si hubo movimiento de efectivo o no.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["estructura", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que el Resultado del Ejercicio se obtiene simplemente restando el Activo del Pasivo?"

explicacion: |
  Falso. La diferencia entre Activo y Pasivo es el Patrimonio Neto. El Resultado del Ejercicio se obtiene de la diferencia entre Ingresos y Gastos en el Estado de Resultados.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "jerarquia"]

respuesta_orden: ["Ventas Netas", "Costo de Mercaderías Vendidas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]
tipo: ordenar
opciones_explicitas: ["Ventas Netas", "Costo de Mercaderías Vendidas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]

enunciado: "Ordene los conceptos según la estructura lógica de un Estado de Resultados para determinar la utilidad operativa:"

explicacion: |
  La estructura sigue un orden descendente: primero se determinan las ventas, se restan los costos directos para obtener la utilidad bruta, y luego se restan los gastos de administración y ventas para llegar a la utilidad operativa.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "avanzado"
  tags: ["costos", "clasificacion"]

respuesta: "Costo"
tipo: mc
opciones_explicitas: ["Costo", "Gasto"]

enunciado: "En el Estado de Resultados, el concepto que se relaciona directamente con el ingreso por ventas para determinar la utilidad bruta se denomina ___."

explicacion: |
  El 'Costo' (como el CMV) está directamente vinculado a la producción o adquisición de lo vendido, mientras que el 'Gasto' suele referirse a consumos para la estructura operativa (administración/ventas).
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["contabilidad", "utilidad_bruta"]

variables:
  escenario: [[150000, 85000, 45000], [200000, 120000, 30000], [180000, 90000, 55000]]
  idx: uno_de([0, 1, 2])
  ventas: escenario[idx][0]
  costo_ventas: escenario[idx][1]

respuesta: ventas - costo_ventas
tipo: completar
tolerancia_abs: 0

enunciado: "Una empresa reporta en su estado de resultados un total de ventas de ${ventas} y un costo de ventas de ${costo_ventas}. ¿Cuál es el monto de la utilidad bruta?"

explicacion: |
  La utilidad bruta se calcula restando el costo de ventas de los ingresos totales por ventas:
  Utilidad Bruta = Ventas - Costo de Ventas
  En este caso: ${ventas} - ${costo_ventas} = ${ventas - costo_ventas}.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["clasificacion", "gastos"]

respuesta: "Gastos Operativos"
tipo: mc
opciones_explicitas: ["Costo de Ventas", "Gastos Operativos", "Ingresos No Operativos"]

enunciado: "Si una empresa tiene un listado de pagos por sueldos administrativos, alquiler de oficinas y servicios de luz para la administración, ¿en qué categoría del estado de resultados se clasifican principalmente?"

explicacion: |
  Los gastos de administración, ventas y financieros se agrupan como Gastos Operativos, a diferencia del Costo de Ventas que está directamente ligado a la producción o adquisición de bienes vendidos.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["resultado_neto", "perdida"]

variables:
  datos: [[5000, 8000], [12000, 10000], [4500, 4500]]
  idx: uno_de([0, 1, 2])
  ingresos: datos[idx][0]
  gastos: datos[idx][1]

respuesta: ingresos > gastos
tipo: vf
enunciado: "Considerando que los ingresos totales son ${ingresos} y los gastos totales son ${gastos}, ¿el resultado del ejercicio es una utilidad (ganancia)?"

explicacion: |
  Para que haya utilidad, los ingresos deben ser mayores que los gastos. 
  En este escenario: ${ingresos} > ${gastos} es ${ingresos > gastos}.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["orden", "estructura"]

respuesta_orden: ["Ventas", "Costo de Ventas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]
tipo: ordenar

opciones_explicitas: ["Ventas", "Costo de Ventas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]

enunciado: "Ordene los siguientes conceptos según la secuencia lógica de presentación en un Estado de Resultados convencional (de mayor a menor margen):"

explicacion: |
  La estructura lógica comienza con el ingreso principal (Ventas), se le resta el costo directo para obtener la Utilidad Bruta, luego se restan los gastos operativos para llegar a la Utilidad Operativa.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "avanzado"
  tags: ["utilidad_neta", "impuestos"]

variables:
  escenario: [[10000, 2000], [15000, 3000], [8000, 1500]]
  idx: uno_de([0, 1, 2])
  utilidad_antes_imp: escenario[idx][0]
  impuesto_tasa: 0.30

respuesta: utilidad_antes_imp * (1 - impuesto_tasa)

tipo: completar
tolerancia_abs: 0

enunciado: "Si una empresa obtiene una utilidad antes de impuestos de ${utilidad_antes_imp} y debe afrontar una tasa impositiva del 30%, el valor de la utilidad neta es ___"

explicacion: |
  La utilidad neta se obtiene aplicando la tasa impositiva sobre la utilidad antes de impuestos:
  Utilidad Neta = Utilidad Antes de Impuestos * (1 - Tasa)
  En este caso: ${utilidad_antes_imp} * (1 - 0.30) = ${utilidad_antes_imp * 0.7}.
```

## Sección: estructura-del-patrimonio (20 preguntas)

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["ecuacion_patrimonial"]

respuesta: verdadero
tipo: vf

enunciado: "El patrimonio neto es igual a los activos menos los pasivos."

explicacion: |
  Esta es la ecuación patrimonial fundamental: Pat = Activo - Pasivo.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "pasivo"]

variables:
  activo: random(100000, 500000)
  patrimonio: random(20000, 100000)
  pasivo: activo - patrimonio

respuesta: pasivo
tipo: input

enunciado: "Una empresa tiene un activo total de ${activo} y un patrimonio neto de ${patrimonio}. ¿Cuál es el total de sus pasivos?"

explicacion: |
  Si Activo - Pasivo = Patrimonio, entonces Pasivo = Activo - Patrimonio.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "avanzado"
  tags: ["interpretacion", "insolvencia"]

respuesta: falso
tipo: vf

enunciado: "Si el patrimonio neto es negativo, la empresa tiene más bienes que deudas."

explicacion: |
  Patrimonio negativo significa que los pasivos superan a los activos (Activo < Pasivo).
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "activo"]

variables:
  pasivo: random(50000, 200000)
  patrimonio: random(10000, 50000)
  activo: pasivo + patrimonio

respuesta: activo
tipo: input

enunciado: "Si el pasivo total es ${pasivo} y el patrimonio neto es ${patrimonio}, ¿cuál es el activo total?"

explicacion: |
  Activo = Pasivo + Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["variacion", "ganancia"]

variables:
  activo_inicial: random(100000, 200000)
  pasivo_inicial: random(50000, 100000)
  ganancia: random(10000, 50000)
  activo_final: activo_inicial + ganancia
  pasivo_final: pasivo_inicial
  pat_inicial: activo_inicial - pasivo_inicial
  pat_final: activo_final - pasivo_final
  variacion: pat_final - pat_inicial

respuesta: variacion
tipo: input

enunciado: "Si una empresa tiene Activo {activo_inicial} y Pasivo {pasivo_inicial}, y luego obtiene una ganancia de {ganancia} que aumenta su activo, ¿cuánto aumentó su patrimonio neto?"

explicacion: |
  Al aumentar el activo sin cambiar el pasivo, el patrimonio neto aumenta exactamente por el monto de la ganancia.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["estructura", "financiamiento"]

respuesta: verdadero
tipo: vf

enunciado: "El financiamiento de una empresa proviene de sus acreedores (pasivo) y de sus dueños (patrimonio)."

explicacion: |
  Correcto. Los activos se financian con deuda externa e interna.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "avanzado"
  tags: ["calculo", "agregacion"]

variables:
  activo_caja: random(5000, 20000)
  activo_banco: random(10000, 50000)
  activo_inventario: random(20000, 100000)
  activo_maquinaria: random(50000, 200000)
  pasivo_proveedores: random(5000, 20000)
  pasivo_prestamo: random(10000, 50000)
  
  activo_total: activo_caja + activo_banco + activo_inventario + activo_maquinaria
  pasivo_total: pasivo_proveedores + pasivo_prestamo
  patrimonio: activo_total - pasivo_total

respuesta: patrimonio
tipo: input

enunciado: "Activo Caja: {activo_caja}, Activo Banco: {activo_banco}, Activo Inventario: {activo_inventario}, Activo Maquinaria: {activo_maquinaria}. Pasivo Proveedores: {pasivo_proveedores}, Pasivo Préstamo: {pasivo_prestamo}. Calcula el Patrimonio Neto."

explicacion: |
  Sumar todos los activos, restar todos los pasivos. El resultado es el patrimonio neto.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["transaccion", "balance"]

variables:
  monto: random(10000, 50000)
  activo_inicial: random(100000, 200000)
  pasivo_inicial: random(50000, 100000)
  pat_inicial: activo_inicial - pasivo_inicial
  activo_final: activo_inicial + monto
  pasivo_final: pasivo_inicial + monto
  pat_final: activo_final - pasivo_final
  cambio_patrimonio: pat_final - pat_inicial

respuesta: cambio_patrimonio
tipo: input

enunciado: "Si la empresa compra un activo de ${monto} a crédito, ¿cuánto cambia su patrimonio neto?"

explicacion: |
  Al aumentar activo y pasivo en la misma cantidad, la diferencia (patrimonio) no cambia.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "avanzado"
  tags: ["solvencia", "riesgo"]

respuesta: verdadero
tipo: vf

enunciado: "Un patrimonio neto negativo puede indicar que la empresa es insolvente técnicamente."

explicacion: |
  Si Pasivo > Activo, la empresa no tiene suficiente para cubrir sus deudas con sus propios bienes, lo que es un riesgo de insolvencia técnica.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "activo_circulante"]

variables:
  activo_total: random(200000, 500000)
  activo_no_circulante: random(50000, 200000)
  activo_circulante: activo_total - activo_no_circulante

respuesta: activo_circulante
tipo: input

enunciado: "El activo total es ${activo_total} y el no circulante es ${activo_no_circulante}. ¿Cuánto es el activo circulante?"

explicacion: |
  Activo Circulante = Activo Total - Activo No Circulante.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["principio", "doble entrada"]

respuesta: verdadero
tipo: vf

enunciado: "Todo activo está financiado por pasivos o patrimonio."

explicacion: |
  Es la base de la partida doble: no hay activo sin una fuente de financiamiento (deuda o capital propio).
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "pasivo_circulante"]

variables:
  pasivo_total: random(100000, 300000)
  pasivo_no_circulante: random(20000, 100000)
  pasivo_circulante: pasivo_total - pasivo_no_circulante

respuesta: pasivo_circulante
tipo: input

enunciado: "Si el pasivo total es ${pasivo_total} y el no circulante es ${pasivo_no_circulante}, ¿cuánto es el pasivo circulante?"

explicacion: |
  Pasivo Circulante = Pasivo Total - Pasivo No Circulante.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["transaccion", "liquidez"]

variables:
  monto: random(5000, 20000)
  activo_inicial: random(100000, 200000)
  pasivo_inicial: random(50000, 100000)
  pat_inicial: activo_inicial - pasivo_inicial
  activo_final: activo_inicial - monto
  pasivo_final: pasivo_inicial - monto
  pat_final: activo_final - pasivo_final
  cambio_patrimonio: pat_final - pat_inicial

respuesta: cambio_patrimonio
tipo: input

enunciado: "Si la empresa paga ${monto} de su deuda, ¿cuánto cambia su patrimonio neto?"

explicacion: |
  Al bajar activo y pasivo en la misma cantidad, el patrimonio neto permanece igual.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["activo", "efectivo"]

respuesta: verdadero
tipo: vf

enunciado: "El efectivo en caja es un activo circulante."

explicacion: |
  El efectivo es el activo más líquido y se usa inmediatamente, por lo que es circulante.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "avanzado"
  tags: ["capital", "variacion"]

variables:
  activo: random(200000, 500000)
  pasivo: random(50000, 150000)
  capital_inicial: random(50000, 100000)
  nueva_inversion: random(10000, 50000)
  activo_final: activo + nueva_inversion
  pasivo_final: pasivo
  capital_final: activo_final - pasivo_final
  incremento_patrimonio: capital_final - (activo - pasivo)

respuesta: nueva_inversion
tipo: input

enunciado: "Si se realiza una nueva inversión de ${nueva_inversion} en efectivo que aumenta el activo, ¿cuánto aumenta el patrimonio neto?"

explicacion: |
  La inversión de los dueños aumenta el activo y el patrimonio neto en la misma cuantía.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["estructura", "propiedad"]

respuesta: falso
tipo: vf

enunciado: "El pasivo representa la propiedad de los accionistas sobre los activos."

explicacion: |
  El patrimonio neto representa la propiedad de los accionistas. El pasivo representa la deuda con terceros.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "balance"]

variables:
  activo_circulante: random(50000, 150000)
  activo_no_circulante: random(100000, 300000)
  pasivo_circulante: random(20000, 80000)
  pasivo_no_circulante: random(30000, 100000)
  
  activo_total: activo_circulante + activo_no_circulante
  pasivo_total: pasivo_circulante + pasivo_no_circulante
  patrimonio: activo_total - pasivo_total

respuesta: patrimonio
tipo: input

enunciado: "Activo Circulante: {activo_circulante}, Activo No Circulante: {activo_no_circulante}, Pasivo Circulante: {pasivo_circulante}, Pasivo No Circulante: {pasivo_no_circulante}. Calcula el Patrimonio Neto."

explicacion: |
  Sumar activos totales, restar pasivos totales. El resultado es el patrimonio neto.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["ecuacion", "contabilidad", "completar"]

respuesta: "Pasivo"
tipo: completar

enunciado: "Completa la ecuación fundamental: Activo = Patrimonio Neto + _______."

respuestas_validas:
  - "Pasivo"
  - "pasivo"
  - "pasivos"

explicacion: |
  La ecuación patrimonial básica establece que lo que tiene la empresa (Activo) se financia con
  recursos propios (Patrimonio) y recursos de terceros (Pasivo).
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["pasivo", "clasificacion", "completar"]

respuesta: "Circulante"
tipo: completar

enunciado: "Los pasivos que vencen en menos de un año se clasifican como Pasivo _______."

respuestas_validas:
  - "Circulante"
  - "circulante"
  - "corriente"
  - "corriente"

explicacion: |
  Los pasivos de corto plazo se denominan Pasivo Circulante (o Corriente).
  Los de largo plazo son Pasivo No Circulante (o Largo Plazo).
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["patrimonio", "componentes", "completar"]

respuesta: "Utilidades"
tipo: completar

enunciado: "Además del capital social, las _______ acumuladas forman parte del patrimonio neto."

respuestas_validas:
  - "Utilidades"
  - "utilidades"
  - "ganancias"
  - "ganancias"

explicacion: |
  El patrimonio neto incluye el capital aportado y las utilidades (o pérdidas) acumuladas de la empresa.
```

## Sección: estructura-productiva-dependencia (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["historia_economica", "agroexportador"]

respuesta: "primarias"
tipo: completar
respuestas_validas:
  - "primarias"

enunciado: "La estructura productiva argentina, consolidada durante el modelo agroexportador, se caracterizó por una fuerte especialización en la exportación de productos de naturaleza ___."

explicacion: |
  El modelo agroexportador (1880-1930) posicionó a Argentina como el "granero del mundo", basando su economía en la exportación de materias primas (cereales, carnes) hacia Europa, lo que generó una dependencia estructural de los sectores primarios.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["commodities", "volatilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["soja", "caída"], ["trigo", "subida"]]
  efecto: ["menor ingreso de divisas", "mayor ingreso de divisas"]

respuesta: efecto[escenario_idx]
tipo: mc
opciones_explicitas: ["menor ingreso de divisas", "mayor ingreso de divisas", "sin cambios"]

enunciado: "Si el precio internacional de la {datos[escenario_idx][0]} sufre una {datos[escenario_idx][1]}, el efecto inmediato en la balanza comercial argentina es un ___."

pasos:
  - "Identificar el commodity y la tendencia del precio."
  - "Relacionar el precio del producto de exportación con el ingreso de divisas."

explicacion: |
  Dado que Argentina es un exportador neto de commodities, la volatilidad de los precios internacionales impacta directamente en la recaudación fiscal y la disponibilidad de dólares (divisas).
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["exportaciones", "commodities"]

respuesta: "Dependencia de los precios de los commodities"
tipo: mc
opciones_explicitas: ["Diversificación industrial avanzada", "Dependencia de los precios de los commodities", "Autosuficiencia tecnológica"]

enunciado: "¿Cuál es la principal vulnerabilidad de una estructura productiva basada en la exportación de materias primas?"

explicacion: |
  La falta de valor agregado en las exportaciones hace que la economía sea altamente sensible a los ciclos de precios internacionales, fenómeno conocido como la "vulnerabilidad externa".
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["ciclos_economicos", "exportación"]

opciones_explicitas: ["Aumento de demanda externa", "Suba de precios internacionales", "Ingreso de divisas", "Crecimiento del PBI local"]
respuesta_orden: ["Aumento de demanda externa", "Suba de precios internacionales", "Ingreso de divisas", "Crecimiento del PBI local"]
tipo: ordenar

enunciado: "Ordene cronológicamente la cadena de efectos que genera un ciclo alcista en la economía argentina basado en el modelo agroexportador:"

explicacion: |
  Un aumento en la demanda mundial de productos agrícolas eleva los precios de los commodities, lo que permite un mayor ingreso de divisas al país, impulsando finalmente el crecimiento económico interno.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["valor_agregado", "industria"]

respuesta: "bajo"
tipo: completar
respuestas_validas:
  - "bajo"
  - "nulo"

enunciado: "La estructura productiva heredada presenta un perfil de exportación con un ___ grado de valor agregado, lo que se traduce en una mayor dependencia de la demanda externa de materias primas."

explicacion: |
  A diferencia de las economías industrializadas, la estructura argentina exporta mayoritariamente bienes con poco procesamiento industrial, lo que limita la capacidad de captura de valor en la cadena global.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["teoria_economica", "desarrollo"]

tipo: mc
opciones_explicitas: ["La subordinación de la economía local a las decisiones y precios de mercados externos.", "Un sistema donde el país exporta tecnología de punta y productos manufacturados.", "Un modelo de autosuficiencia total donde no se requiere comercio exterior.", "La capacidad de un país para fijar sus propios precios internacionales sin influencia externa."]

enunciado: "Se define como dependencia económica cuando la estructura productiva de un país se encuentra ___________ por los ciclos económicos y las decisiones de precios de las economías centrales."

respuesta: "La subordinación de la economía local a las decisiones y precios de mercados externos."

explicacion: |
  La dependencia económica ocurre cuando un país carece de autonomía para determinar sus ciclos internos, ya que su producción y consumo dependen de la demanda y los precios fijados en mercados externos o países desarrollados.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["comercio_exterior", "primarización"]

variables:
  escenario: uno_de([["exportación de materias primas", "vulnerabilidad a precios internacionales"], ["importación de tecnología", "dependencia de patentes extranjeras"], ["deuda externa", "dependencia de capitales volátiles"]])

tipo: completar
respuestas_validas:
  - escenario[1]

enunciado: "Un país que basa su matriz productiva principalmente en la {escenario[0]} suele enfrentar una alta ___."

respuesta: escenario[1]

explicacion: |
  La especialización en productos primarios (commodities) expone a las economías a la volatilidad de los precios internacionales, lo que caracteriza a los modelos de dependencia.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["tecnologia", "desarrollo"]

tipo: mc
opciones_explicitas: ["Importación de bienes de capital y tecnología de punta.", "Exportación de servicios de alta complejidad.", "Sustitución de importaciones tecnológicas por producción local.", "Desarrollo de investigación y desarrollo (I+D) propio."]

enunciado: "La dependencia tecnológica se manifiesta principalmente a través de la ___________."

respuesta: "Importación de bienes de capital y tecnología de punta."

explicacion: |
  Cuando un país no desarrolla tecnología propia, debe importar maquinaria y conocimiento, quedando sujeto a los costos y condiciones impuestas por los países que sí poseen dicha tecnología.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["procesos", "industrializacion"]

tipo: ordenar
opciones_explicitas: ["Especialización en recursos naturales", "Importación de manufacturas", "Dependencia de la demanda externa", "Vulnerabilidad ante crisis externas"]

enunciado: "Ordene cronológicamente los elementos que suelen conformar un ciclo de dependencia económica estructural:"

respuesta_orden: ["Especialización en recursos naturales", "Importación de manufacturas", "Dependencia de la demanda externa", "Vulnerabilidad ante crisis externas"]

explicacion: |
  El ciclo comienza con la especialización productiva, lo que genera la necesidad de importar bienes procesados, creando una dependencia de la demanda externa y resultando en vulnerabilidad ante choques externos.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["finanzas", "capitales"]

variables:
  caso: uno_de([["flujos de inversión extranjera directa", "crecimiento sostenido"], ["salidas bruscas de capitales especulativos", "crisis de balanza de pagos"]])

tipo: completar
tolerancia_abs: 0

enunciado: "En una economía dependiente, las {caso[0]} pueden ser positivas, pero las {caso[1]} suelen provocar una ___________."

respuesta: "crisis de balanza de pagos"

explicacion: |
  La volatilidad de los capitales es un rasgo de la dependencia financiera; cuando los capitales salen del país repentinamente, se generan crisis en la cuenta de pagos y devaluaciones.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["vulnerabilidad", "primarización"]

variables:
  escenario: uno_de([["soja", "400"], ["trigo", "250"], ["minería de cobre", "8000"]])

enunciado: "Una economía que basa su ingreso en la exportación de {escenario[0]} enfrenta una alta volatilidad cuando el precio internacional cae a ${escenario[1]} por unidad. Este fenómeno se conoce como vulnerabilidad externa."

respuesta: "vulnerabilidad externa"
tipo: mc
opciones_explicitas: ["vulnerabilidad externa", "estabilidad macroeconómica", "diversificación productiva", "proteccionismo"]

explicacion: |
  La dependencia de un solo producto primario expone a la economía a las fluctuaciones de los precios internacionales (commodities), lo que genera inestabilidad en la balanza de pagos y el tipo de cambio.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["balanza_de_pagos", "términos_de_intercambio"]

variables:
  caso: uno_de([["caída del precio de la soja", "déficit"], ["aumento de demanda de materias primas", "superávit"]])

enunciado: "Si ocurre una {caso[0]}, la cuenta corriente de la balanza de pagos tiende a presentar un ___."

pasos:
  - "Identificar el efecto del precio en el ingreso por exportaciones."
  - "Relacionar el ingreso con el saldo de la cuenta corriente."

respuestas_validas:
  - "déficit"
  - "superávit"
respuesta: caso[1]
tipo: completar

explicacion: |
  Una caída en los precios de exportación reduce la entrada de divisas, lo que puede derivar en un déficit en la cuenta corriente si no se compensa con deuda o remesas.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["términos_de_intercambio", "deterioro"]

enunciado: "Cuando los precios de los productos manufacturados crecen más rápido que los de los productos primarios, se produce un ___ en los términos de intercambio, lo que significa que los precios relativos de los bienes que exporta la economía caen."

respuestas_validas:
  - "deterioro"
respuesta: "deterioro"
tipo: completar

explicacion: |
  El deterioro de los términos de intercambio implica que se necesita exportar cada vez más volumen de materias primas para comprar la misma cantidad de bienes tecnológicos o manufacturados.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["enfermedad_holandesa", "cambio_real"]

variables:
  efecto: uno_de([["apreciación", "sube"], ["depreciación", "baja"]])

enunciado: "Un boom de precios en un recurso natural (como el petróleo) genera una entrada masiva de divisas que provoca la ___ del tipo de cambio real. Esto suele afectar la competitividad de la industria local."

respuestas_validas:
  - "apreciación"
  - "depreciación"
respuesta: efecto[0]
tipo: completar

explicacion: |
  La 'Enfermedad Holandesa' ocurre cuando la abundancia de un recurso natural aprecia la moneda local, haciendo que el resto de los sectores (industria, servicios) pierdan competitividad frente al exterior.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["ciclo_economico", "shock_externo"]

enunciado: "Ordene la secuencia lógica de un shock externo negativo para una economía primario-exportadora:"

opciones_explicitas: ["Caída de precios internacionales", "Menor ingreso de divisas", "Crisis de balanza de pagos", "Restricción externa"]
respuesta_orden: ["Caída de precios internacionales", "Menor ingreso de divisas", "Crisis de balanza de pagos", "Restricción externa"]
tipo: ordenar

explicacion: |
  La cadena comienza con el shock de precios, que reduce el flujo de dólares, afectando la capacidad de pago del país y limitando la importación de insumos (restricción externa).
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["historia_economica", "agroexportacion"]

respuesta: "modelo agroexportador"
tipo: completar
respuestas_validas:
  - "modelo agroexportador"

enunciado: "Antes de la industrialización por sustitución de importaciones, la economía argentina se basaba en el ___."

explicacion: |
  El modelo agroexportador consistía en la exportación de materias primas (carnes y cereales) e importación de manufacturas, consolidando una estructura de dependencia hacia los mercados centrales.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["isi", "industrializacion"]

variables:
  escenario: uno_de([["Sustitución de importaciones", "Proteccionismo"], ["Sustitución de importaciones", "Libre cambio"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Sustitución de importaciones", "Libre cambio"]

enunciado: "El proceso de Industrialización por Sustitución de Importaciones (ISI) buscaba principalmente la {escenario[0]} mediante políticas de protección de la industria nacional."

explicacion: |
  La ISI buscaba que el país dejara de depender de la compra de productos manufacturados en el exterior, fomentando la producción local mediante aranceles y subsidios.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["migraciones", "urbanizacion"]

respuesta: "urbanización"
tipo: completar
respuestas_validas:
  - "urbanización"

enunciado: "El crecimiento de la industria durante mediados del siglo XX impulsó un proceso de rápida ___ en la población argentina."

explicacion: |
  La demanda de mano de obra en las fábricas de los centros urbanos (especialmente en Buenos Aires, Rosario y Córdoba) fomentó grandes migraciones internas y la expansión de las ciudades.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["ciclos_economicos", "transicion"]

respuesta_orden: ["Modelo Agroexportador", "Crisis de la demanda externa", "Industrialización por Sustitución de Importaciones"]
tipo: ordenar
opciones_explicitas: ["Modelo Agroexportador", "Crisis de la demanda externa", "Industrialización por Sustitución de Importaciones"]

enunciado: "Ordene cronológicamente los procesos económicos que marcaron la transición de la estructura productiva argentina en el siglo XX:"

explicacion: |
  La crisis de la demanda externa (causada por las Guerras Mundiales y la Gran Depresión) hizo inviable seguir importando productos, lo que forzó el salto hacia la ISI.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["estado", "politica_industrial"]

respuesta: "intervencionista"
tipo: mc
opciones_explicitas: ["intervencionista", "liberal", "ausente"]

enunciado: "Para sostener el modelo ISI, el Estado argentino adoptó un rol principalmente _________."

explicacion: |
  El Estado asumió un rol activo mediante la regulación de aranceles, la creación de empresas públicas y el fomento del mercado interno para asegurar el crecimiento industrial.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["exportaciones", "primarización", "riesgo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["país exportador de granos", "volatilidad de precios internacionales"], ["país exportador de litio", "dependencia de la demanda tecnológica externa"]]

enunciado: "Un {datos[escenario_idx][0]} enfrenta un escenario donde su principal motor de ingresos es un commodity. El principal riesgo económico para este país es la {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["volatilidad de precios internacionales", "dependencia de la demanda tecnológica externa", "estabilidad cambiaria", "diversificación industrial"]

explicacion: |
  La dependencia de un solo producto primario expone a la economía a las fluctuaciones de los precios internacionales, lo que genera inestabilidad en la balanza comercial y en la recaudación fiscal.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["industria", "valor_agregado", "empleo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["un país con baja capacidad manufacturera", "pérdida de valor agregado"], ["un país con alta dependencia de bienes de capital", "vulnerabilidad ante choques externos"]]

enunciado: "En el caso de {casos[caso_idx][0]}, el riesgo estructural más significativo es la {casos[caso_idx][1]}."

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["pérdida de valor agregado", "vulnerabilidad ante choques externos", "exceso de ahorro interno", "estabilidad de precios"]

explicacion: |
  La falta de una base industrial sólida impide que el país capture mayor valor en la cadena de producción, limitando el crecimiento del empleo calificado y la diversificación.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["enfermedad_holandesa", "tipo_de_cambio", "recursos_naturales"]

enunciado: "Cuando un país descubre un gran yacimiento de petróleo y aumenta sus exportaciones, se produce una apreciación de la moneda local. Este fenómeno, conocido como Enfermedad Holandesa, suele provocar la falta de competitividad de la ___."

respuesta: "industria manufacturera"
tipo: completar
respuestas_validas:
  - "industria manufacturera"

explicacion: |
  La entrada masiva de divisas aprecia el tipo de cambio real, lo que encarece las exportaciones de bienes no tradicionales y desincentiva la actividad industrial local.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["secuencia", "riesgo", "estructura"]

variables:
  secuencia_idx: uno_de([0, 1])
  secuencias: [["Concentración de exportaciones", "Caída de demanda externa", "Crisis de balanza de pagos"], ["Dependencia tecnológica", "Aumento de importaciones", "Déficit de cuenta corriente"]]

enunciado: "Ordene la secuencia lógica de un choque externo en una economía dependiente:"

pasos:
  - "Identificar el origen del choque"
  - "Observar el efecto en la cuenta externa"
  - "Evaluar el impacto en la estabilidad macroeconómica"

respuesta_orden: secuencias[secuencia_idx]
tipo: ordenar
opciones_explicitas: secuencias[secuencia_idx]

explicacion: |
  La estructura productiva determina la velocidad y la profundidad con la que un shock externo (como una caída de demanda) se traslada a la economía doméstica.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["indicador", "exportaciones", "concentracion"]

variables:
  escenario_val: uno_de([0, 1])
  escenarios: [[80, "alta"], [15, "baja"]]

enunciado: "Si el porcentaje de exportaciones concentrado en solo dos productos es del {escenarios[escenario_val][0]}%, se considera que la economía tiene una dependencia ___."

respuesta: escenarios[escenario_val][1]
tipo: mc
opciones_explicitas: ["alta", "baja", "nula", "moderada"]

explicacion: |
  A mayor concentración de la canasta exportadora en pocos productos, mayor es la vulnerabilidad de la economía ante cambios en los precios o volúmenes de esos bienes específicos.
```

