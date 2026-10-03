# Examen jefe — [PENDIENTE #772]

> Logro #772. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **68 preguntas totales** en 5/5 secciones.

---

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

## Sección: fisiocracia (6 preguntas)

```
metadata:
  materia: "economia"
  tema: "fisiocracia"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

enunciado: "Según la fisiocracia, ¿cuál es la única fuente real de riqueza?"
tipo: mc
opciones_explicitas:
  - "La tierra y la agricultura"
  - "El oro acumulado por el Estado"
  - "El comercio internacional"
respuesta: "La tierra y la agricultura"

explicacion: |
  Para la fisiocracia, la industria y el comercio sólo transforman una
  riqueza que ya generó la naturaleza a través del trabajo agrícola.
```

```
metadata:
  materia: "economia"
  tema: "fisiocracia"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué lema resume la postura fisiócrata sobre la intervención del Estado en la economía?"
tipo: mc
opciones_explicitas:
  - "\"Laissez faire, laissez passer\" (dejar hacer, dejar pasar)"
  - "\"El Estado ante todo\""
  - "\"Balanza comercial favorable siempre\""
respuesta: "\"Laissez faire, laissez passer\" (dejar hacer, dejar pasar)"

explicacion: |
  Defiende la mínima intervención estatal posible en la economía —una
  postura opuesta al intervencionismo del mercantilismo.
```

```
metadata:
  materia: "economia"
  tema: "fisiocracia"
  nivel: "intermedio"
  tags: ["corrientes", "autor"]

enunciado: "¿Quién escribió el *Tableau économique* (1758), texto de referencia de la fisiocracia?"
tipo: mc
opciones_explicitas:
  - "François Quesnay"
  - "Thomas Mun"
  - "Adam Smith"
respuesta: "François Quesnay"

explicacion: |
  Quesnay, médico de la corte de Luis XV, hizo el primer intento
  sistemático de representar cómo circula la riqueza entre sectores de
  una economía.
```

```
metadata:
  materia: "economia"
  tema: "fisiocracia"
  nivel: "avanzado"
  tags: ["corrientes", "contexto"]

respuesta: verdadero
tipo: vf

enunciado: "La fisiocracia surgió en Francia durante el siglo XVIII como reacción directa a las ideas mercantilistas que dominaban la política económica europea."

explicacion: |
  Frente al mercantilismo (riqueza = oro acumulado por intervención
  estatal), la fisiocracia propone otra fuente de riqueza (la tierra)
  y otra receta de política (mínima intervención).
```

```
metadata:
  materia: "economia"
  tema: "fisiocracia"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para la fisiocracia, la industria y el comercio no crean riqueza nueva: sólo transforman o mueven una riqueza que ya generó la agricultura."

explicacion: |
  Es la consecuencia directa de considerar a la tierra como la única
  fuente real de riqueza.
```

```
metadata:
  materia: "economia"
  tema: "fisiocracia"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué representa por primera vez de forma sistemática el *Tableau économique* de Quesnay, y que hoy se considera un antecedente de la contabilidad macroeconómica?"
tipo: mc
opciones_explicitas:
  - "Cómo circula la riqueza entre los distintos sectores de una economía"
  - "El tipo de cambio entre distintas monedas europeas"
  - "La cantidad de oro que debía acumular cada país"
respuesta: "Cómo circula la riqueza entre los distintos sectores de una economía"

explicacion: |
  Es considerado el primer intento sistemático de este tipo — un
  antecedente directo de lo que hoy se conoce como cuentas nacionales.
```

## Sección: mercantilismo (6 preguntas)

```
metadata:
  materia: "economia"
  tema: "mercantilismo"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué sostiene el mercantilismo sobre la riqueza de una nación?"
tipo: mc
opciones_explicitas:
  - "Que se mide por la cantidad de oro y plata que acumula, y que el Estado debe fomentar exportaciones y restringir importaciones"
  - "Que se mide sólo por la cantidad de tierra cultivada"
  - "Que el Estado no debe intervenir nunca en el comercio"
respuesta: "Que se mide por la cantidad de oro y plata que acumula, y que el Estado debe fomentar exportaciones y restringir importaciones"

explicacion: |
  Es la idea central del mercantilismo, dominante en Europa entre los
  siglos XVI y XVIII durante la expansión colonial.
```

```
metadata:
  materia: "economia"
  tema: "mercantilismo"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "Para el mercantilismo, ¿qué significa tener una \"balanza comercial favorable\"?"
tipo: mc
opciones_explicitas:
  - "Exportar más de lo que se importa"
  - "Importar más de lo que se exporta"
  - "Que las exportaciones e importaciones sean exactamente iguales"
respuesta: "Exportar más de lo que se importa"

explicacion: |
  Un país que exporta más de lo que importa retiene más oro y plata,
  que es lo que el mercantilismo considera riqueza.
```

```
metadata:
  materia: "economia"
  tema: "mercantilismo"
  nivel: "intermedio"
  tags: ["corrientes", "autor"]

enunciado: "¿Quién escribió *England's Treasure by Foreign Trade* (1664), texto de referencia del mercantilismo?"
tipo: mc
opciones_explicitas:
  - "Thomas Mun"
  - "Adam Smith"
  - "François Quesnay"
respuesta: "Thomas Mun"

explicacion: |
  Mun era directivo de la Compañía Británica de las Indias Orientales y
  defendía la balanza comercial favorable como objetivo central de la
  política económica.
```

```
metadata:
  materia: "economia"
  tema: "mercantilismo"
  nivel: "basico"
  tags: ["corrientes", "contexto"]

respuesta: verdadero
tipo: vf

enunciado: "El mercantilismo fue la corriente económica dominante en Europa durante la expansión colonial, entre los siglos XVI y XVIII."

explicacion: |
  Coincide con el período de mayor expansión colonial europea, cuando
  acumular metales preciosos de las colonias era el objetivo central
  de la política económica de las potencias europeas.
```

```
metadata:
  materia: "economia"
  tema: "mercantilismo"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué herramienta usa el Estado, según el mercantilismo, para restringir las importaciones?"
tipo: mc
opciones_explicitas:
  - "Aranceles"
  - "Subsidios a productos importados"
  - "Ninguna: el mercantilismo se opone a cualquier intervención estatal"
respuesta: "Aranceles"

explicacion: |
  Los aranceles encarecen los productos importados, desalentando su
  compra y protegiendo así la producción local.
```

```
metadata:
  materia: "economia"
  tema: "mercantilismo"
  nivel: "avanzado"
  tags: ["corrientes", "problema"]

respuesta: falso
tipo: vf

enunciado: "Para el mercantilismo, un país que importa más bienes de los que exporta se está enriqueciendo, sin importar qué reciba a cambio de ese comercio."

explicacion: |
  Falso. Para el mercantilismo ese país se está empobreciendo, porque
  pierde oro y plata al pagar más de lo que cobra — la riqueza se mide
  por el metal retenido, no por los bienes recibidos. Esta misma idea
  es la que después critican tanto la fisiocracia como el liberalismo
  clásico de Adam Smith.
```

## Sección: pbi-e-inflacion (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Qué mide el Producto Bruto Interno (PBI)?"
tipo: mc
opciones_explicitas:
  - "El valor total de todos los bienes y servicios finales producidos en un país durante un período"
  - "El total de dinero que hay en los bancos de un país"
  - "El sueldo promedio de los habitantes de un país"
respuesta: "El valor total de todos los bienes y servicios finales producidos en un país durante un período"

explicacion: |
  Es la medida estándar del tamaño de la economía de un país.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Por qué el PBI cuenta el pan terminado, pero no cuenta aparte la harina que se usó para hacerlo?"
tipo: mc
opciones_explicitas:
  - "Porque la harina ya está incluida en el valor del pan, y contarla aparte la contaría dos veces"
  - "Porque la harina no se considera un producto"
  - "Porque sólo se cuentan los productos importados"
respuesta: "Porque la harina ya está incluida en el valor del pan, y contarla aparte la contaría dos veces"

explicacion: |
  El PBI cuenta bienes FINALES, justamente para evitar la doble
  contabilización de los insumos intermedios.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Cuál es la diferencia principal entre PBI nominal y PBI real?"
tipo: mc
opciones_explicitas:
  - "El real está ajustado quitando el efecto de la inflación; el nominal no"
  - "El real sólo cuenta productos exportados; el nominal cuenta todo"
  - "No hay ninguna diferencia real entre los dos"
respuesta: "El real está ajustado quitando el efecto de la inflación; el nominal no"

explicacion: |
  Es la distinción central para saber si la economía realmente
  produjo más, o si el número sólo subió por los precios.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Comparar el PBI nominal de dos años distintos, sin ajustar por inflación, puede hacer parecer que la economía \"creció\" cuando en realidad sólo subieron los precios."

explicacion: |
  Por eso las comparaciones serias siempre usan el PBI real, no el
  nominal.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Cómo se calcula el PBI per cápita?"
tipo: mc
opciones_explicitas:
  - "PBI total dividido la población del país"
  - "PBI total multiplicado por la población del país"
  - "El sueldo mínimo dividido el PBI total"
respuesta: "PBI total dividido la población del país"

explicacion: |
  Reparte el tamaño total de la economía entre la cantidad de
  habitantes.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "calculo"]

variables:
  poblacion: uno_de([2, 4, 5, 8, 10])
  pbi_per_capita_real: random(5, 40) * 1000
  pbi_total: poblacion * pbi_per_capita_real

respuesta: pbi_total / poblacion
tipo: input
tolerancia_abs: 0

enunciado: "Un país tiene un PBI total de ${pbi_total} millones y una población de {poblacion} millones de habitantes. ¿Cuál es su PBI per cápita?"

explicacion: |
  PBI per cápita = PBI total / población.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país con mucha población puede tener un PBI total enorme y, aun así, un nivel de vida bajo por persona — por eso conviene mirar el PBI per cápita, no sólo el total."

explicacion: |
  El PBI total mide tamaño; el per cápita se acerca más al nivel de
  vida promedio de cada habitante.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "A escala de todo un país, ¿qué es la inflación?"
tipo: mc
opciones_explicitas:
  - "El aumento generalizado y sostenido de los precios de la economía en su conjunto"
  - "El aumento del precio de un solo producto puntual"
  - "La cantidad total de dinero que emite el banco central"
respuesta: "El aumento generalizado y sostenido de los precios de la economía en su conjunto"

explicacion: |
  No es que un producto puntual suba: es que la MAYORÍA de los
  precios sube de forma sostenida.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Que un solo producto se ponga más caro por una razón puntual (por ejemplo, una mala cosecha) no es, por sí solo, inflación."

explicacion: |
  Inflación es un fenómeno generalizado del conjunto de precios, no un
  solo producto aislado.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Con qué herramienta se mide oficialmente la inflación de un país?"
tipo: mc
opciones_explicitas:
  - "Un índice de precios (como el IPC), que sigue el costo de una canasta representativa de bienes y servicios"
  - "El sueldo promedio de los trabajadores"
  - "El precio del dólar, exclusivamente"
respuesta: "Un índice de precios (como el IPC), que sigue el costo de una canasta representativa de bienes y servicios"

explicacion: |
  El IPC (Índice de Precios al Consumidor) es el ejemplo estándar de
  este tipo de índice.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Por convención, un índice de precios arranca en un año base con valor 100, y a partir de ahí se compara cómo sube ese número."

explicacion: |
  Es la convención estándar de cualquier índice de precios.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "calculo"]

variables:
  ipc_base: 100
  ipc_actual: 100 + random(5, 45)

respuesta: (ipc_actual - ipc_base) / ipc_base * 100
tipo: input
tolerancia_abs: 0

enunciado: "El índice de precios de un país arrancó el año en {ipc_base} (año base) y terminó en {ipc_actual}. ¿Cuál fue la tasa de inflación de ese período, en porcentaje?"

pasos:
  - "Variación: ({ipc_actual} - {ipc_base}) / {ipc_base}"
  - "En porcentaje: × 100"

explicacion: |
  Tasa de inflación = (Índice actual - Índice anterior) / Índice
  anterior × 100. Con año base 100, el resultado coincide con los
  puntos que subió el índice.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "calculo"]

variables:
  ipc_anterior: uno_de([100, 120, 200])
  inflacion_pct: uno_de([5, 10, 20, 25, 50])

respuesta: ipc_anterior + ipc_anterior * inflacion_pct / 100
tipo: input
tolerancia_abs: 0

enunciado: "El índice de precios estaba en {ipc_anterior} y hubo una inflación del {inflacion_pct}% en el período siguiente. ¿En qué valor quedó el índice?"

explicacion: |
  Índice nuevo = Índice anterior + (Índice anterior × tasa de
  inflación).
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre este tema (PBI e inflación) y el tema de \"Plazo fijo vs. inflación\" visto antes?"
tipo: mc
opciones_explicitas:
  - "Ese otro tema es la lectura PERSONAL de un dato de inflación ya conocido; este mide la inflación de todo el país desde cero, con un índice de precios"
  - "Son exactamente el mismo tema repetido"
  - "Este tema no tiene ninguna relación con la inflación"
respuesta: "Ese otro tema es la lectura PERSONAL de un dato de inflación ya conocido; este mide la inflación de todo el país desde cero, con un índice de precios"

explicacion: |
  Misma palabra, dos escalas: personal (un ahorro puntual) vs.
  macroeconómica (todo el país).
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "Cuando un noticiero dice \"la economía creció 3% este año\", ¿a qué PBI se refiere normalmente?"
tipo: mc
opciones_explicitas:
  - "Al PBI real (ya ajustado por inflación)"
  - "Al PBI nominal (sin ajustar)"
  - "Al PBI per cápita exclusivamente"
respuesta: "Al PBI real (ya ajustado por inflación)"

explicacion: |
  Hablar de "crecimiento" implica que se produjo más, no que sólo
  subieron los precios — por eso se usa el PBI real.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "calculo"]

variables:
  pbi_anterior: random(1, 20) * 20 * 1000
  crecimiento_pct: uno_de([5, 10, 15, 20, 25])
  pbi_actual: pbi_anterior + pbi_anterior * crecimiento_pct / 100

respuesta: (pbi_actual - pbi_anterior) / pbi_anterior * 100
tipo: input
tolerancia_abs: 0

enunciado: "El PBI real de un país fue ${pbi_anterior} millones un año, y ${pbi_actual} millones el año siguiente. ¿Cuál fue la tasa de crecimiento del PBI, en porcentaje?"

explicacion: |
  Tasa de crecimiento = (PBI actual - PBI anterior) / PBI anterior ×
  100 — la misma lógica que la tasa de inflación, aplicada al tamaño
  de la economía en vez de a los precios.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Qué significa la \"I\" (Interno) del PBI?"
tipo: mc
opciones_explicitas:
  - "Se cuenta lo producido DENTRO del país, sin importar la nacionalidad de quién lo produjo"
  - "Se cuenta sólo lo producido por empresas del propio país en cualquier lugar del mundo"
  - "Se cuenta sólo lo que se consume dentro del país"
respuesta: "Se cuenta lo producido DENTRO del país, sin importar la nacionalidad de quién lo produjo"

explicacion: |
  Es un criterio geográfico (dónde se produce), no de nacionalidad de
  quién produce.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La palabra \"Bruto\" del PBI significa que no se descuenta el desgaste de las máquinas y edificios usados para producir."

explicacion: |
  Es lo que distingue al PBI Bruto de un cálculo Neto, que sí
  descontaría esa depreciación.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Qué tipo de organismo suele publicar el IPC oficial de un país?"
tipo: mc
opciones_explicitas:
  - "Un organismo estatal de estadísticas (como el INDEC en Argentina)"
  - "Un banco privado cualquiera"
  - "Cada supermercado por separado"
respuesta: "Un organismo estatal de estadísticas (como el INDEC en Argentina)"

explicacion: |
  Es una medición oficial, centralizada en un organismo estadístico
  del Estado.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos de cómo se mide la inflación de un país."
opciones_explicitas:
  - "Se calcula la variación porcentual del índice entre dos períodos"
  - "Se releva el precio de esa canasta mes a mes"
  - "Se define una canasta representativa de bienes y servicios"
  - "Se arma un índice de precios (base 100) con esos relevamientos"
respuesta_orden: ["Se define una canasta representativa de bienes y servicios", "Se releva el precio de esa canasta mes a mes", "Se arma un índice de precios (base 100) con esos relevamientos", "Se calcula la variación porcentual del índice entre dos períodos"]

explicacion: |
  Cada paso es prerrequisito del siguiente: sin canasta no hay
  relevamiento, sin relevamiento no hay índice, sin índice no hay
  variación que calcular.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia"]

variables:
  ipc_base: 100
  ipc_actual: 100 + random(5, 45)
  tasa: (ipc_actual - ipc_base) / ipc_base * 100

tipo: completar
enunciado: "Completá: Tasa de inflación = ({ipc_actual} - {ipc_base}) / {ipc_base} × 100 = ___ (tasa, en porcentaje)."
respuestas_validas:
  - tasa

explicacion: |
  Es la aplicación directa de la fórmula de tasa de inflación.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El PBI mide el tamaño de toda la economía de un país, y la inflación (a esta escala) mide el aumento generalizado de precios de todo el país, medido con un índice — distinto de la lectura personal de cuánto rinde un ahorro puntual."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: liberalismo-clasico-y-escuela-austriaca (12 preguntas)

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué corriente introduce la idea de la \"mano invisible\": que el interés individual, en un mercado libre, termina beneficiando a la sociedad entera?"
tipo: mc
opciones_explicitas:
  - "El liberalismo clásico (Adam Smith)"
  - "El marxismo"
  - "El keynesianismo"
respuesta: "El liberalismo clásico (Adam Smith)"

explicacion: |
  Es el concepto central de *La riqueza de las naciones* (1776).
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "basico"
  tags: ["corrientes", "autor"]

enunciado: "¿Quién escribió *La riqueza de las naciones* (1776), texto fundacional del liberalismo clásico?"
tipo: mc
opciones_explicitas:
  - "Adam Smith"
  - "Karl Marx"
  - "Milton Friedman"
respuesta: "Adam Smith"

explicacion: |
  Es considerado el texto fundacional de la economía moderna como
  disciplina.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué sostiene la escuela austríaca sobre la planificación económica centralizada?"
tipo: mc
opciones_explicitas:
  - "Que un Estado central no puede tener toda la información necesaria para planificar la economía; los precios libres coordinan mejor"
  - "Que el Estado debe fijar todos los precios para evitar la inflación"
  - "Que sólo la agricultura genera riqueza real"
respuesta: "Que un Estado central no puede tener toda la información necesaria para planificar la economía; los precios libres coordinan mejor"

explicacion: |
  Es la crítica central de Hayek en *Camino de servidumbre* (1944) a
  la planificación centralizada.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para la escuela austríaca, cada precio de mercado resume información dispersa (qué escasea, qué se necesita, qué cuesta producir) que ningún planificador central podría reunir a tiempo."

explicacion: |
  Es el argumento del "problema del conocimiento": la información
  necesaria para planificar una economía entera está repartida entre
  millones de personas, no concentrada en ningún lugar.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "intermedio"
  tags: ["corrientes", "autor"]

enunciado: "¿Quién escribió *Camino de servidumbre* (1944), texto de referencia de la escuela austríaca?"
tipo: mc
opciones_explicitas:
  - "Friedrich Hayek"
  - "Ludwig von Mises"
  - "Adam Smith"
respuesta: "Friedrich Hayek"

explicacion: |
  Hayek argumenta que la planificación centralizada tiende a
  concentrar un poder que termina erosionando las libertades
  individuales.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

enunciado: "Para Ludwig von Mises, ¿cuál es la unidad básica de análisis de toda la economía?"
tipo: mc
opciones_explicitas:
  - "La acción humana individual: elegir, valorar, intercambiar"
  - "El Producto Bruto Interno del país"
  - "La cantidad de oro que posee el Estado"
respuesta: "La acción humana individual: elegir, valorar, intercambiar"

explicacion: |
  De ahí que la escuela austríaca desconfíe de tratar \"la economía\"
  como una sola cosa medible desde arriba, en vez de millones de
  decisiones individuales.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "intermedio"
  tags: ["corrientes", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia del mercantilismo, que veía el comercio como un juego de suma cero, Adam Smith sostiene que el intercambio libre y voluntario beneficia a ambas partes a la vez."

explicacion: |
  Es la base de la defensa del libre comercio en el liberalismo
  clásico: comprar y vender no es que uno gane lo que el otro pierde.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

enunciado: "Según el argumento de Henry Hazlitt en *La economía en una lección* (1946), ¿cómo debe juzgarse una política económica?"
tipo: mc
opciones_explicitas:
  - "Por sus efectos visibles inmediatos sobre un grupo Y por sus efectos indirectos menos visibles sobre todos los demás, a mediano y largo plazo"
  - "Sólo por su efecto inmediato sobre el grupo que la política busca beneficiar"
  - "Sólo por su costo fiscal en el primer año"
respuesta: "Por sus efectos visibles inmediatos sobre un grupo Y por sus efectos indirectos menos visibles sobre todos los demás, a mediano y largo plazo"

explicacion: |
  Ejemplo del propio Hazlitt: un arancel protege visiblemente a una
  industria, pero encarece ese producto para todos los consumidores y
  resta recursos a otras industrias — efecto real, aunque menos
  visible.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "Según el liberalismo clásico, ¿a qué debe limitarse el Estado en materia económica?"
tipo: mc
opciones_explicitas:
  - "A garantizar la propiedad privada, la justicia y algunas obras públicas, sin intervenir en precios ni comercio"
  - "A fijar los precios de todos los bienes esenciales"
  - "A ser el único empleador de la economía"
respuesta: "A garantizar la propiedad privada, la justicia y algunas obras públicas, sin intervenir en precios ni comercio"

explicacion: |
  Es el rol mínimo que Smith reserva para el Estado, dejando el resto
  a la coordinación espontánea del mercado.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Este bloque presenta cada corriente explicando qué sostiene, con la misma seriedad expositiva, sin marcar ninguna como \"la correcta\"."

explicacion: |
  Es el criterio central de todo el bloque de corrientes de
  pensamiento económico: identificar argumentos, no adoctrinar con una
  postura como la verdadera.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Varias corrientes de este bloque conviven hoy y se siguen citando en debates de política económica actuales — no es una sucesión donde cada una \"reemplaza\" a la anterior."

explicacion: |
  Lo único estrictamente cronológico es cuándo apareció cada corriente,
  no cuál es superior.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "avanzado"
  tags: ["corrientes", "contexto"]

respuesta: verdadero
tipo: vf

enunciado: "Entre la publicación de La riqueza de las naciones (1776) y el surgimiento de la escuela austríaca (desde finales del siglo XIX) pasó más de un siglo."

explicacion: |
  Ambas comparten la confianza en el mercado libre, pero la escuela
  austríaca la profundiza con un argumento propio sobre la información
  dispersa en los precios, casi 100 años después de Smith.
```

