# Examen jefe — [PENDIENTE #725]

> Logro #725. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 8 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **197 preguntas totales** en 8/8 secciones.

---

## Sección: independencias (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "basico"
  tags: ["independencias", "vocabulario"]

enunciado: "¿Qué es un proceso de independencia?"
tipo: mc
opciones_explicitas:
  - "El proceso por el cual un territorio deja de estar bajo la soberanía de otro Estado y se constituye como Estado propio"
  - "Un cambio de gobernante dentro del mismo Estado"
  - "Un tratado comercial entre dos países"
respuesta: "El proceso por el cual un territorio deja de estar bajo la soberanía de otro Estado y se constituye como Estado propio"

explicacion: |
  No es un evento instantáneo: es un proceso que puede durar años.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "En el caso rioplatense, ¿la independencia fue el primer paso del proceso o la consecuencia de una revolución previa?"
tipo: mc
opciones_explicitas:
  - "Fue la consecuencia de la Revolución de Mayo, un proceso revolucionario previo"
  - "Fue el primer paso, antes de cualquier revolución"
  - "No tuvo ninguna relación con la Revolución de Mayo"
respuesta: "Fue la consecuencia de la Revolución de Mayo, un proceso revolucionario previo"

explicacion: |
  Es la razón por la que `independencias/` depende de
  `../revoluciones/` en `../dependencias.md`.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["revolucion_de_mayo"]

enunciado: "¿En nombre de quién decía gobernar la Junta de 1810, aunque en la práctica ejercía el poder de forma autónoma?"
tipo: mc
opciones_explicitas:
  - "Del rey depuesto, Fernando VII"
  - "Del rey de Portugal"
  - "De ningún rey, declarándose independiente desde el primer día"
respuesta: "Del rey depuesto, Fernando VII"

explicacion: |
  Era una ambigüedad deliberada para no provocar una reacción militar
  inmediata mientras el nuevo gobierno se afianzaba.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["revolucion_de_mayo"]

enunciado: "¿Por qué la Junta de 1810 no declaró la independencia total de inmediato?"
tipo: mc
opciones_explicitas:
  - "Para ganar tiempo y consolidarse sin provocar una reacción militar inmediata de España"
  - "Porque no existía ninguna intención de romper con España"
  - "Porque España ya había reconocido la independencia en 1810"
respuesta: "Para ganar tiempo y consolidarse sin provocar una reacción militar inmediata de España"

explicacion: |
  Era una estrategia deliberada de radicalización progresiva, no
  indecisión.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "basico"
  tags: ["argentina"]

enunciado: "¿En qué año se declaró formalmente la independencia de las Provincias Unidas en Sudamérica?"
tipo: input
respuesta: 1816

explicacion: |
  El Congreso de Tucumán declaró la independencia en 1816, 6 años
  después de la Revolución de Mayo.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["argentina", "calculo"]

variables:
  anio_revolucion: 1810
  anio_independencia: 1816

respuesta: anio_independencia - anio_revolucion
tipo: input

enunciado: "Entre la Revolución de Mayo ({anio_revolucion}) y la declaración de independencia en el Congreso de Tucumán ({anio_independencia}), ¿cuántos años pasaron?"

pasos:
  - "{anio_independencia} - {anio_revolucion}"

explicacion: |
  El proceso completo llevó más tiempo que el evento fundacional que
  se suele recordar como "punto de partida".
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "basico"
  tags: ["argentina"]

enunciado: "¿En qué Congreso se declaró la independencia argentina en 1816?"
tipo: mc
opciones_explicitas:
  - "Congreso de Tucumán"
  - "Congreso de Viena"
  - "Congreso de Panamá"
respuesta: "Congreso de Tucumán"

explicacion: |
  Fue el Congreso que reunió representantes de las Provincias Unidas
  para declarar formalmente la independencia.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Por qué declarar la independencia en 1816 no la hizo efectiva de forma automática?"
tipo: mc
opciones_explicitas:
  - "Porque España no reconoció la declaración y siguió enviando fuerzas militares para reconquistar el territorio"
  - "Porque el Congreso de Tucumán no tenía autoridad legal"
  - "Porque la independencia ya era efectiva desde 1810"
respuesta: "Porque España no reconoció la declaración y siguió enviando fuerzas militares para reconquistar el territorio"

explicacion: |
  La declaración política y la victoria militar que la sostiene son
  dos cosas distintas — ver `../guerras/`.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Son la declaración política de independencia y la victoria militar que la consolida exactamente lo mismo?"
tipo: vf
respuesta: falso

explicacion: |
  Son dos cosas distintas, aunque en la práctica una depende de la
  otra: sin ganar la guerra, la declaración queda sin efecto real.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["revolucion_de_mayo"]

enunciado: "¿Qué provocó que la postura independentista se consolidara como la única salida viable con el paso de los años?"
tipo: mc
opciones_explicitas:
  - "Los intentos de España de reconquistar el territorio"
  - "Un tratado de paz firmado en 1810"
  - "La ausencia total de conflicto con España"
respuesta: "Los intentos de España de reconquistar el territorio"

explicacion: |
  A medida que España insistía en recuperar el control, la ambigüedad
  inicial se volvió insostenible.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["proceso_continental"]

enunciado: "¿Qué campaña de San Martín llevó la independencia más allá del territorio rioplatense?"
tipo: mc
opciones_explicitas:
  - "El cruce de los Andes y la liberación de Chile"
  - "La expedición al Amazonas"
  - "La conquista de México"
respuesta: "El cruce de los Andes y la liberación de Chile"

explicacion: |
  Muestra que el proceso se pensó, en parte, como un proyecto
  continental, no aislado a un solo territorio.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["proceso_continental"]

enunciado: "¿Qué líder independentista lideró procesos en el norte de Sudamérica, en paralelo al de San Martín en el sur?"
tipo: mc
opciones_explicitas:
  - "Simón Bolívar"
  - "Napoleón Bonaparte"
  - "Bernardo O'Higgins"
respuesta: "Simón Bolívar"

explicacion: |
  Junto con San Martín, es una de las dos grandes figuras de la
  independencia hispanoamericana como proceso continental.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["proceso_continental"]

enunciado: "¿Por qué la independencia hispanoamericana se pensó, en parte, como un proyecto continental y no aislado por territorio?"
tipo: mc
opciones_explicitas:
  - "Porque ningún territorio quedaba realmente seguro mientras España mantuviera fuerzas militares en la región"
  - "Porque todos los territorios hispanoamericanos tenían el mismo gobierno"
  - "Porque España ya había reconocido todas las independencias en 1810"
respuesta: "Porque ningún territorio quedaba realmente seguro mientras España mantuviera fuerzas militares en la región"

explicacion: |
  Mientras hubiera fuerzas españolas activas en la región, cualquier
  territorio independizado corría riesgo de reconquista.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "basico"
  tags: ["independencias"]

enunciado: "Un proceso de independencia siempre es un evento instantáneo, que ocurre en un solo día."
tipo: vf
respuesta: falso

explicacion: |
  Es un proceso que puede durar años y atravesar varias etapas antes
  de consolidarse — el caso rioplatense llevó al menos 6 años sólo
  hasta la declaración formal, y más tiempo hasta consolidarse
  militarmente.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["revolucion_de_mayo"]

enunciado: "Ordená estas 3 etapas del proceso rioplatense: Declaración formal de independencia, Ambigüedad inicial (gobernar \"a nombre\" del rey), Radicalización progresiva."
tipo: ordenar
opciones_explicitas:
  - "Ambigüedad inicial (gobernar \"a nombre\" del rey)"
  - "Radicalización progresiva"
  - "Declaración formal de independencia"
respuesta_orden: ["Ambigüedad inicial (gobernar \"a nombre\" del rey)", "Radicalización progresiva", "Declaración formal de independencia"]

explicacion: |
  Es la secuencia real: 1810 (ambigüedad) → años intermedios
  (radicalización) → 1816 (declaración formal).
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["independencias"]

enunciado: "¿Qué necesita un territorio, además de declararse independiente, para consolidarse como Estado propio?"
tipo: mc
opciones_explicitas:
  - "Gobierno y reconocimiento internacional autónomos"
  - "Sólo una bandera y un himno nuevos"
  - "La aprobación exclusiva de la antigua metrópoli"
respuesta: "Gobierno y reconocimiento internacional autónomos"

explicacion: |
  Un Estado necesita ejercer soberanía real y ser reconocido, no sólo
  declarar la intención.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["independencias"]

enunciado: "¿Por qué conviene analizar la independencia rioplatense como un \"proceso\" y no como un único \"evento\" (la Revolución de Mayo)?"
tipo: mc
opciones_explicitas:
  - "Porque incluyó varias etapas a lo largo de años: ambigüedad, radicalización, declaración formal y consolidación militar"
  - "Porque la Revolución de Mayo no tuvo ninguna relación con la independencia"
  - "Porque el proceso terminó exactamente en 1810"
respuesta: "Porque incluyó varias etapas a lo largo de años: ambigüedad, radicalización, declaración formal y consolidación militar"

explicacion: |
  Reducirlo a un solo evento (la Revolución de Mayo) pierde toda la
  complejidad del proceso completo.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Por qué el proceso de independencia rioplatense se conecta directamente con `../guerras/`?"
tipo: mc
opciones_explicitas:
  - "Porque España resistió militarmente la independencia declarada, generando las Guerras de independencia"
  - "Porque `../guerras/` trata sobre un conflicto sin ninguna relación con la independencia"
  - "Porque la independencia se logró sin ningún conflicto armado"
respuesta: "Porque España resistió militarmente la independencia declarada, generando las Guerras de independencia"

explicacion: |
  Es la razón por la que `H2c` (guerras) depende de `H2b`
  (independencias) en `../dependencias.md`.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Cuál es la diferencia central entre \"revolución\" e \"independencia\" como procesos históricos?"
tipo: mc
opciones_explicitas:
  - "La revolución cambia el poder o la estructura interna de una sociedad; la independencia rompe la relación de soberanía con otro Estado"
  - "Son exactamente el mismo proceso con dos nombres distintos"
  - "La independencia siempre ocurre antes que cualquier revolución"
respuesta: "La revolución cambia el poder o la estructura interna de una sociedad; la independencia rompe la relación de soberanía con otro Estado"

explicacion: |
  Pueden estar conectadas (como en el caso rioplatense) pero son
  conceptos distintos.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Por qué el desarrollo real y detallado de la independencia argentina se ubica en la cadena `AH4`-`AH5` de Tronco 8.c y no acá?"
tipo: mc
opciones_explicitas:
  - "Para no duplicar el mismo contenido con dos IDs distintos — acá se explica el proceso general, allá el caso puntual con más contexto"
  - "Porque Tronco 8.c no tiene relación alguna con la independencia"
  - "Porque este tema y `AH4`/`AH5` tratan procesos completamente distintos"
respuesta: "Para no duplicar el mismo contenido con dos IDs distintos — acá se explica el proceso general, allá el caso puntual con más contexto"

explicacion: |
  Mismo criterio de "no repetir el mismo tema dos veces" que ya usa el
  MAPA en varios puntos (ver nota v2.4 sobre `AH12`/`AH13`).
```

## Sección: revolucion-mexicana-1910-1920 (27 preguntas)

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "basico"
  tags: ["porfiriato", "causas", "madero"]

variables:
  anio_postulacion: random(1908, 1910)

respuesta: "re-election"
tipo: completar

enunciado: "Durante el Porfiriato, el líder {anio_postulacion} anunció su intención de volver a postularse, rompiendo la promesa de no reelección. ¿Qué concepto central buscaba defender Francisco I. Madero con su lema 'Sufragio efectivo, no ___'?"

explicacion: |
  El lema de Madero era "Sufragio efectivo, no reelección". La reelección perpetua era el símbolo del autoritarismo porfirista.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "intermedio"
  tags: ["zapata", "plan_de_ayala", "tierra"]

variables:
  lider: uno_de(["Emiliano Zapata", "Pancho Villa"])

respuesta: "La tierra es de quien la trabaja"
tipo: completar

enunciado: "Si el líder revolucionario es {lider}, ¿cuál fue su principal consigna agraria plasmada en el Plan de Ayala?"

explicacion: |
  Emiliano Zapata redactó el Plan de Ayala. Su consigna principal era que la tierra pertenecía a quien la trabajaba, exigiendo la devolución de tierras comunales.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "intermedio"
  tags: ["villa", "division_del_norte", "ejercito"]

variables:
  caudillo: uno_de(["Francisco Villa", "Francisco I. Madero"])

respuesta: "División del Norte"
tipo: completar

enunciado: "El general {caudillo} comandaba una fuerza militar masiva conocida como la _______________."

explicacion: |
  Pancho Villa lideraba la División del Norte, un ejército popular con gran capacidad de movilización en el norte de México.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "basico"
  tags: ["porfiriato", "modernizacion", "ferrocarriles"]

variables:
  sector: uno_de(["ferrocarriles", "minas", "puertos"])

respuesta: "ferrocarriles"
tipo: completar

enunciado: "Durante el Porfiriato, el gobierno invirtió fuertemente en la expansión de los _______________ para conectar las regiones productivas con los puertos de exportación."

explicacion: |
  La construcción de ferrocarriles fue clave para la modernización económica, aunque benefició principalmente a las élites y a inversionistas extranjeros.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "basico"
  tags: ["madero", "diaz", "caida"]

variables:
  dictador: "Porfirio Díaz"

respuesta: "democracia"
tipo: completar

enunciado: "Francisco I. Madero buscaba instaurar la _______________ como respuesta al largo régimen dictatorial de {dictador}."

explicacion: |
  Madero representaba la clase media liberal que exigía el fin de la dictadura y el establecimiento de un régimen democrático.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "intermedio"
  tags: ["alianzas", "traicion", "madero"]

variables:
  evento: "Traición de la Decena Trágica"

respuesta: "frágil"
tipo: completar

enunciado: "El gobierno de Madero fue breve y _______________ porque antiguos aliados, como Victoriano Huerta, terminaron traicionándolo."

explicacion: |
  La coalición anti-díaz se desintegró rápidamente. Madero no pudo controlar a los caudillos revolucionarios ni a los conservadores, llevando a su asesinato.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "avanzado"
  tags: ["zapata", "plan_de_ayala", "fechas"]

variables:
  mes: uno_de(["febrero", "marzo", "abril"])
  dia: random(28, 30)

respuesta: "1911"
tipo: input

enunciado: "El Plan de Ayala fue proclamado en {mes} de {dia}. ¿En qué año se emitió este documento?"

explicacion: |
  El Plan de Ayala se proclamó en marzo de 1911, cuando Zapata rompió con Madero al no cumplirse la reforma agraria prometida.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "intermedio"
  tags: ["tierra", "ejidos", "comunidades"]

variables:
  grupo: uno_de(["campesinos", "indígenas", "trabajadores"])

respuesta: "comunales"
tipo: completar

enunciado: "Bajo el Porfiriato, las tierras {grupo} fueron despojadas y concentradas en latifundios. La revolución buscaba restituirlas como _______________."

explicacion: |
  La demanda central era la recuperación de las tierras comunales que habían sido expropiadas ilegalmente durante el Porfiriato.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "basico"
  tags: ["villa", "origen", "norte"]

variables:
  region: "norte"

respuesta: "norte"
tipo: completar

enunciado: "Francisco Villa era originario de la región del _______________, lo que definió el perfil social y militar de su ejército."

explicacion: |
  Villa representaba los intereses de los campesinos y trabajadores del norte, con un carácter más popular y menos ideológico que Zapata.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "basico"
  tags: ["zapata", "origen", "sur"]

variables:
  estado: "Morelos"

respuesta: "Morelos"
tipo: completar

enunciado: "Emiliano Zapata lideró la revolución desde el estado de _______________, donde la presión de las compañías azucareras era mayor."

explicacion: |
  Morelos era un estado altamente industrializado para la época (azúcar), lo que generaba un conflicto intenso entre campesinos y terratenientes.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "basico"
  tags: ["madero", "elecciones", "democracia"]

variables:
  concepto: "Sufragio efectivo"

respuesta: "no reelección"
tipo: completar

enunciado: "El lema de Madero incluía 'Sufragio efectivo' y la promesa de _______________."

explicacion: |
  La no reelección era la propuesta concreta para evitar la perpetuidad en el poder que caracterizó al Porfiriato.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "intermedio"
  tags: ["naturaleza", "guerra_civil", "conflicto"]

variables:
  tipo_conflicto: "guerra civil"

respuesta: "guerra civil"
tipo: completar

enunciado: "La Revolución Mexicana evolucionó de un levantamiento político a una _______________ entre diversos caudillos y facciones."

explicacion: |
  Al fracasar Madero en mediar entre las demandas, el conflicto se tornó en una guerra civil por el control del Estado y la tierra.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "basico"
  tags: ["porfiriato", "elite", "desigualdad"]

variables:
  grupo_beneficiado: "élite terrateniente"

respuesta: "extranjeros"
tipo: completar

enunciado: "El crecimiento económico del Porfiriato benefició a la élite local y a inversionistas _______________."

explicacion: |
  La economía porfirista dependía mucho del capital extranjero, especialmente de EE.UU. y Europa, para explotar recursos naturales.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "avanzado"
  tags: ["madero", "plan_san_luis", "levantamiento"]

variables:
  lider: "Madero"

respuesta: "20 de noviembre"
tipo: completar

enunciado: "Francisco I. Madero firmó el Plan de San Luis para iniciar el levantamiento armado el _______________ de 1910."

explicacion: |
  El Plan de San Luis llamaba a las armas el 20 de noviembre de 1910, fecha que luego se convirtió en la fiesta patria de México.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "intermedio"
  tags: ["huerta", "traicion", "decena_tragica"]

variables:
  traidor: "Victoriano Huerta"

respuesta: "asesinato"
tipo: completar

enunciado: "El general {traidor} fue responsable del _______________ de Madero durante la Decena Trágica."

explicacion: |
  Huerta, leal a Díaz, traicionó a Madero y lo obligó a renunciar y morir, instaurando una dictadura militar.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "avanzado"
  tags: ["constitucion", "articulo_27", "tierra"]

variables:
  articulo: 27

respuesta: "tierra"
tipo: completar

enunciado: "El artículo {articulo} de la Constitución de 1917 establecía que la propiedad originaria de la _______________ correspondía a la Nación."

explicacion: |
  El Art. 27 permitía al Estado redistribuir la tierra y expropiarlatifundios, cumpliendo una de las principales demandas zapatistas.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "intermedio"
  tags: ["villa", "batalla", "celaya"]

variables:
  batalla: "Celaya"

respuesta: "derrota"
tipo: completar

enunciado: "En la batalla de {batalla}, las fuerzas de Villa sufrieron una crucial _______________ frente a las tropas de Álvaro Obregón."

explicacion: |
  La derrota en Celaya (1915) marcó el declive militar de Villa y consolidó el poder de Obregón y Carranza.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "intermedio"
  tags: ["obregon", "general", "victoria"]

variables:
  general: "Álvaro Obregón"

respuesta: "Obregón"
tipo: completar

enunciado: "El general _______________ fue clave para derrotar a Villa y luego se convirtió en presidente."

explicacion: |
  Obregón fue el estratega militar más exitoso de la fase final de la revolución y luego presidente de México.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "intermedio"
  tags: ["zapata", "plan_de_ayala", "lema"]

variables:
  lema: "La tierra es de quien la trabaja"

respuesta: "Zapata"
tipo: completar

enunciado: "El lema '{lema}' fue promovido por _______________."

explicacion: |
  Este lema resumía la filosofía agraria de Zapata: la legitimidad de la posesión viene del trabajo directo sobre la tierra.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "basico"
  tags: ["porfiriato", "estabilidad", "autoritarismo"]

variables:
  periodo: "Porfiriato"

respuesta: "autoritaria"
tipo: completar

enunciado: "El {periodo} se caracterizó por una estabilidad _______________ pero marcada por la desigualdad social."

explicacion: |
  La estabilidad se lograba mediante la represión política y la exclusión de la participación democrática real.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "intermedio"
  tags: ["madero", "clase_media", "politico"]

variables:
  clase: "clase media"

respuesta: "liberal"
tipo: completar

enunciado: "Madero representaba a la _______________ mexicana que quería modernizar el país sin destruir la estructura social existente."

explicacion: |
  Madero era un político liberal de clase media, preocupado por la democracia pero menos radical en la reforma social que Zapata o Villa.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "intermedio"
  tags: ["fin", "1920", "constitucion"]

variables:
  anio_fin: 1920

respuesta: "1920"
tipo: input

enunciado: "Aunque la violencia continuó, se considera que la fase principal de la Revolución Mexicana concluyó alrededor del año _______________."

explicacion: |
  Con la muerte de Zapata (1919) y la caída y asesinato de Carranza (1920, tras el Plan de Agua Prieta), se cierra la fase armada principal, ya bajo la Constitución de 1917 vigente.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "avanzado"
  tags: ["zapata", "muerte", "1919"]

variables:
  lider: "Emiliano Zapata"

respuesta: "emboscada"
tipo: completar

enunciado: "Emiliano Zapata fue asesinado en una _______________ organizada por las fuerzas gubernamentales."

explicacion: |
  La muerte de Zapata fue un golpe duro para el movimiento agrarista, aunque sus ideales perduraron en la constitución.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "intermedio"
  tags: ["villa", "exilio", "fin"]

variables:
  lider: "Pancho Villa"

respuesta: "exilio"
tipo: completar

enunciado: "Tras su derrota militar, Villa aceptó un acuerdo y se retiró al _______________ antes de volver brevemente a la política."

explicacion: |
  Villa fue pacificado inicialmente, recibiendo una hacienda, pero su poder militar fue desmantelado.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "avanzado"
  tags: ["constitucion", "articulo_123", "trabajo"]

variables:
  articulo: 123

respuesta: "trabajo"
tipo: completar

enunciado: "El artículo {articulo} de la Constitución de 1917 estableció los derechos de los _______________."

explicacion: |
  El Art. 123 fue pionero en derechos laborales: jornada máxima, salario mínimo, derecho de huelga y descanso dominical.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "basico"
  tags: ["madero", "lema", "sufragio"]

variables:
  parte1: "Sufragio efectivo"

respuesta: "no reelección"
tipo: completar

enunciado: "Completa el lema: '{parte1}', _______________."

explicacion: |
  El lema completo era "Sufragio efectivo, no reelección", enfocándose en la democracia política.
```

```
metadata:
  materia: "Historia"
  tema: "revolucion_mexicana_1910_1920"
  nivel: "avanzado"
  tags: ["internacional", "eeuu", "intervencion"]

variables:
  pais: "Estados Unidos"

respuesta: "intervencion"
tipo: completar

enunciado: "La relación con {pais} fue complicada, ya que este país temía una _______________ extranjera en sus intereses económicos."

explicacion: |
  EE.UU. tuvo una postura ambigua, a veces apoyando a Madero o a Huerta según sus intereses, pero temiendo la inestabilidad en su frontera.
```

## Sección: guerras (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "basico"
  tags: ["guerras", "vocabulario"]

enunciado: "¿Qué es una guerra, como proceso histórico?"
tipo: mc
opciones_explicitas:
  - "Un conflicto armado sostenido entre grupos organizados que se resuelve por la fuerza en vez de por acuerdo"
  - "Cualquier desacuerdo político sin uso de la fuerza"
  - "Un tratado firmado entre dos Estados"
respuesta: "Un conflicto armado sostenido entre grupos organizados que se resuelve por la fuerza en vez de por acuerdo"

explicacion: |
  Puede ser entre Estados, entre facciones internas, o ambos.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Qué rol suele cumplir la guerra respecto a procesos de revolución o independencia?"
tipo: mc
opciones_explicitas:
  - "Es el medio por el que muchas veces se decide si esos procesos se consolidan o fracasan"
  - "Es exactamente lo mismo que una revolución"
  - "No tiene ninguna relación con esos procesos"
respuesta: "Es el medio por el que muchas veces se decide si esos procesos se consolidan o fracasan"

explicacion: |
  Una revolución cambia estructura interna; una independencia rompe
  soberanía; la guerra es a menudo el mecanismo que resuelve si eso se
  logra.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "basico"
  tags: ["tipos_de_guerra"]

enunciado: "¿Qué caracteriza a una guerra de independencia?"
tipo: mc
opciones_explicitas:
  - "Un territorio contra la metrópoli que no reconoce su independencia declarada"
  - "Dos facciones del mismo territorio enfrentadas entre sí"
  - "Dos Estados ya constituidos disputando un territorio puntual"
respuesta: "Un territorio contra la metrópoli que no reconoce su independencia declarada"

explicacion: |
  Es el caso típico de las Guerras de independencia sudamericanas
  contra España.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "basico"
  tags: ["tipos_de_guerra"]

enunciado: "¿Qué caracteriza a una guerra civil?"
tipo: mc
opciones_explicitas:
  - "Un mismo territorio dividido internamente por un desacuerdo de fondo sobre cómo organizarse"
  - "Un conflicto exclusivamente contra un enemigo externo"
  - "Un conflicto entre dos Estados ya reconocidos internacionalmente"
respuesta: "Un mismo territorio dividido internamente por un desacuerdo de fondo sobre cómo organizarse"

explicacion: |
  No es contra un enemigo externo, sino entre bandos del mismo país —
  ejemplo real: unitarios y federales en Argentina.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["argentina", "tipos_de_guerra"]

enunciado: "¿Cuáles fueron los dos bandos de la guerra civil argentina del siglo XIX?"
tipo: mc
opciones_explicitas:
  - "Unitarios y federales"
  - "Realistas y patriotas"
  - "Peronistas y radicales"
respuesta: "Unitarios y federales"

explicacion: |
  El desacuerdo de fondo era un Estado centralizado desde Buenos Aires
  vs. una confederación de provincias autónomas.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["argentina"]

enunciado: "¿Cuál era el desacuerdo de fondo entre unitarios y federales?"
tipo: mc
opciones_explicitas:
  - "Un Estado centralizado desde Buenos Aires vs. una confederación de provincias autónomas"
  - "Si declarar o no la independencia de España"
  - "Si mantener o abolir la esclavitud"
respuesta: "Un Estado centralizado desde Buenos Aires vs. una confederación de provincias autónomas"

explicacion: |
  Era, en el fondo, la pregunta sin resolver de "cómo nos organizamos"
  que quedó pendiente después de lograr la independencia.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["tipos_de_guerra"]

enunciado: "¿Qué caracteriza a una guerra internacional entre Estados ya constituidos, como Malvinas?"
tipo: mc
opciones_explicitas:
  - "Es un conflicto entre dos Estados soberanos y reconocidos, por un territorio en disputa"
  - "Es un conflicto donde uno de los dos Estados no existe todavía"
  - "Es siempre una guerra civil disfrazada"
respuesta: "Es un conflicto entre dos Estados soberanos y reconocidos, por un territorio en disputa"

explicacion: |
  No se discute la existencia de ninguno de los dos Estados, sólo la
  soberanía sobre un territorio puntual — categoría distinta de la
  guerra de independencia o la guerra civil.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿En qué nodo de Tronco 8.c está el desarrollo real de la Guerra de Malvinas?"
tipo: mc
opciones_explicitas:
  - "AH13"
  - "AH5"
  - "AH1"
respuesta: "AH13"

explicacion: |
  El desarrollo completo vive en Tronco 8.c, citando el art. 92 b —
  acá sólo se referencia, sin duplicarlo.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["herramientas_analisis"]

enunciado: "¿Casi ninguna guerra tiene una sola causa?"
tipo: vf
respuesta: verdadero

explicacion: |
  Combina intereses económicos, políticos e ideológicos, igual que
  cualquier proceso analizado con la herramienta de multicausalidad.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["herramientas_analisis"]

enunciado: "¿Cómo se relacionan, en el patrón `AH5 → AH6` de la cadena argentina, la guerra de independencia y la guerra civil posterior?"
tipo: mc
opciones_explicitas:
  - "La guerra de independencia puede generar, como consecuencia, una guerra civil por no haber acuerdo claro sobre cómo organizar el nuevo Estado"
  - "No tienen ninguna relación causal entre sí"
  - "La guerra civil siempre ocurre antes que la de independencia"
respuesta: "La guerra de independencia puede generar, como consecuencia, una guerra civil por no haber acuerdo claro sobre cómo organizar el nuevo Estado"

explicacion: |
  Es exactamente el patrón que explica `teoria.md`: independencia
  resuelve "quién no nos gobierna", pero deja abierto "cómo nos
  organizamos".
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["herramientas_analisis"]

enunciado: "¿Por qué el patrón \"independencia seguida de guerra civil\" no es exclusivo de Argentina?"
tipo: mc
opciones_explicitas:
  - "Porque lograr la independencia deja sin resolver \"cómo organizarse entre sí\", pregunta que sin consenso previo suele derivar en conflicto interno"
  - "Porque todos los países copiaron el modelo argentino"
  - "Porque España provocaba directamente todas las guerras civiles de sus excolonias"
respuesta: "Porque lograr la independencia deja sin resolver \"cómo organizarse entre sí\", pregunta que sin consenso previo suele derivar en conflicto interno"

explicacion: |
  Es un patrón típico de casi cualquier proceso de independencia real,
  no sólo el argentino.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["herramientas_analisis"]

enunciado: "¿Qué herramienta del Big Six ayuda a juzgar una guerra pasada sin reducirla a una fecha para memorizar?"
tipo: mc
opciones_explicitas:
  - "Dimensión ética"
  - "Antes y después de Cristo"
  - "Década, siglo, milenio"
respuesta: "Dimensión ética"

explicacion: |
  Es el mismo criterio que ya se aplicó a `AH12`/`AH13` (Terrorismo de
  Estado y Malvinas) en Tronco 8.c.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "basico"
  tags: ["tipos_de_guerra"]

enunciado: "Toda guerra es necesariamente contra un enemigo externo al propio territorio."
tipo: vf
respuesta: falso

explicacion: |
  Una guerra civil es exactamente el caso contrario: el conflicto es
  interno, entre bandos del mismo país.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["tipos_de_guerra"]

enunciado: "¿Cuál es la diferencia clave entre una guerra de independencia y una guerra civil?"
tipo: mc
opciones_explicitas:
  - "La de independencia es contra una potencia externa; la civil es entre bandos del mismo territorio"
  - "La guerra civil siempre involucra más países que la de independencia"
  - "No hay ninguna diferencia real entre ambas"
respuesta: "La de independencia es contra una potencia externa; la civil es entre bandos del mismo territorio"

explicacion: |
  Es la distinción central entre los dos primeros tipos de guerra
  descritos en `teoria.md`.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["tipos_de_guerra"]

enunciado: "En la Guerra de Malvinas de 1982, ¿qué se disputaba entre Argentina y el Reino Unido?"
tipo: mc
opciones_explicitas:
  - "La soberanía sobre un territorio puntual, sin discutir la existencia de ninguno de los dos Estados"
  - "Si Argentina o el Reino Unido debían dejar de existir como Estados"
  - "Un desacuerdo interno dentro de un mismo país"
respuesta: "La soberanía sobre un territorio puntual, sin discutir la existencia de ninguno de los dos Estados"

explicacion: |
  Es la categoría "guerra internacional entre Estados ya
  constituidos", distinta de las guerras de independencia y las
  guerras civiles.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["argentina"]

enunciado: "Ordená cronológicamente estos 3 conflictos de la cadena argentina: Guerra de Malvinas, Guerras de independencia, Guerras civiles (unitarios y federales)."
tipo: ordenar
opciones_explicitas:
  - "Guerras de independencia"
  - "Guerras civiles (unitarios y federales)"
  - "Guerra de Malvinas"
respuesta_orden: ["Guerras de independencia", "Guerras civiles (unitarios y federales)", "Guerra de Malvinas"]

explicacion: |
  Guerras de independencia (principios del s. XIX) → Guerras civiles
  (mediados del s. XIX) → Guerra de Malvinas (1982).
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["herramientas_analisis"]

enunciado: "¿Cuál de estos es un tipo de causa que suele combinarse en el estallido de una guerra, según la multicausalidad?"
tipo: mc
opciones_explicitas:
  - "Control de territorio, recursos o rutas comerciales"
  - "El clima del día en que se firmó la declaración de guerra"
  - "La cantidad de satélites GPS disponibles"
respuesta: "Control de territorio, recursos o rutas comerciales"

explicacion: |
  Son causas económicas típicas, que se combinan con las políticas e
  ideológicas.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Por qué `guerras/` no repite el desarrollo completo de las Guerras de independencia, guerras civiles y Malvinas, y sólo los referencia?"
tipo: mc
opciones_explicitas:
  - "Para no escribir el mismo contenido histórico dos veces con distintos IDs (`H2c` y `AH5`/`AH6`/`AH12`/`AH13`)"
  - "Porque esos temas no tienen ninguna relación con las guerras"
  - "Porque el contenido de Tronco 8.c está desactualizado"
respuesta: "Para no escribir el mismo contenido histórico dos veces con distintos IDs (`H2c` y `AH5`/`AH6`/`AH12`/`AH13`)"

explicacion: |
  Mismo criterio de "duplicación resuelta" ya aplicado en otros puntos
  del MAPA (nota v2.4).
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Por qué `guerras/` depende de `../independencias/` como prerrequisito?"
tipo: mc
opciones_explicitas:
  - "Porque muchas guerras de este período nacen de procesos de independencia sin resolver del todo"
  - "Porque las guerras siempre ocurren antes que cualquier independencia"
  - "Porque no existe relación real entre ambos procesos"
respuesta: "Porque muchas guerras de este período nacen de procesos de independencia sin resolver del todo"

explicacion: |
  Ejemplo directo: las guerras civiles argentinas nacieron de la
  pregunta sin resolver que dejó la independencia.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["herramientas_analisis"]

enunciado: "Independencia, guerra civil y guerra internacional entre Estados son 3 tipos de guerra distintos. ¿Qué tienen en común como forma de analizarlos?"
tipo: mc
opciones_explicitas:
  - "Se benefician del mismo tipo de análisis histórico: multicausalidad, causa/consecuencia y dimensión ética"
  - "Ninguno de los tres se puede analizar con las mismas herramientas"
  - "Los tres ocurrieron exactamente el mismo año en Argentina"
respuesta: "Se benefician del mismo tipo de análisis histórico: multicausalidad, causa/consecuencia y dimensión ética"

explicacion: |
  Comparten estructura de análisis aunque el contenido y los actores
  sean distintos — por eso el MAPA los agrupó como 3 nodos hermanos
  (`H2a`/`H2b`/`H2c`) en vez de tratarlos como temas sin relación.
```

## Sección: guerra-civil-espanola-1936-1939 (26 preguntas)

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "basico"
  tags: ["causas", "polarizacion"]

variables:
  anio_estallido: 1936

respuesta: "1936"
tipo: input

enunciado: "En qué año comenzó oficialmente el conflicto armado interno conocido como la Guerra Civil Española?"

explicacion: |
  El conflicto estalló tras el intento de golpe de Estado en julio de 1936, marcando el fin de la Segunda República.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "basico"
  tags: ["bandos", "nacionalistas"]

variables:
  lider: uno_de(["Francisco Franco", "José Sanjurjo"])

respuesta: "Francisco Franco"
tipo: input

enunciado: "¿Quién lideró finalmente al bando sublevado o nacionalista hasta el final de la guerra?"

explicacion: |
  Aunque José Sanjurjo fue clave inicialmente, murió en un accidente aéreo. Francisco Franco se consolidó como el líder supremo del bando nacionalista.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["diplomacia", "occidente"]

variables:
  pais: uno_de(["Reino Unido", "Francia", "Estados Unidos"])

respuesta: "no intervención"
tipo: input

enunciado: "¿Qué política adoptaron las democracias liberales como {pais} ante el conflicto?"

explicacion: |
  Estas potencias adoptaron una política de "no intervención", lo que dejó a la República en desventaja frente a los apoyos extranjeros a los nacionalistas.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "basico"
  tags: ["bandos", "republica"]

variables:
  nombre_bando: "republicano"

respuesta: "republicano"
tipo: input

enunciado: "¿Cómo se denominaba al bando que defendía al gobierno legítimo de la Segunda República?"

explicacion: |
  El bando republicano o leal defendía la legalidad constitucional frente al golpe de Estado.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["batallas", "madrid"]

variables:
  ciudad: "Madrid"

respuesta: "Madrid"
tipo: input

enunciado: "¿Qué capital resistió heroicamente durante años bajo asedio nacionalista?"

explicacion: |
  Madrid fue un símbolo de la resistencia republicana y permaneció en manos republicanas hasta el final de la guerra.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "avanzado"
  tags: ["sociedad", "polarizacion"]

variables:
  grupo_opositor: uno_de(["derecha conservadora", "jerarquía católica", "gran parte del ejército"])

respuesta: "derecha conservadora"
tipo: input

enunciado: "¿Qué sector vio las reformas republicanas como una amenaza existencial al 'España tradicional'?"

explicacion: |
  La derecha conservadora, la jerarquía católica y gran parte del ejército se opusieron a las reformas progresistas.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "basico"
  tags: ["politica", "frente_popular"]

variables:
  alianza: "Frente Popular"

respuesta: "Frente Popular"
tipo: input

enunciado: "¿Cómo se llamaba la coalición de izquierdas que apoyaba las reformas progresistas antes de la guerra?"

explicacion: |
  El Frente Popular ganó las elecciones en 1936, representando a quienes apoyaban la modernización y las reformas.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["estrategia", "frentes"]

variables:
  tipo_guerra: "desgaste"

respuesta: "desgaste"
tipo: input

enunciado: "¿Qué tipo de guerra caracterizó al frente de batalla, además de la brutalidad de ambos bandos?"

explicacion: |
  Fue una guerra de desgaste donde el control territorial se perdió progresivamente para la República.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["territorio", "autonomias"]

variables:
  region: uno_de(["Cataluña", "País Vasco"])

respuesta: "Cataluña"
tipo: input

enunciado: "¿Qué región recibió reconocimiento de autonomía por parte del gobierno republicano, lo que generó resistencia conservadora?"

explicacion: |
  Cataluña y el País Vasco fueron regiones clave que buscaron o recibieron mayores autonomías, vistas como amenazas por la derecha.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["reformas", "iglesia"]

variables:
  reforma: "secularización"

respuesta: "secularización"
tipo: input

enunciado: "¿Qué medida de modernización del gobierno republicano fue vista como una amenaza por la jerarquía católica?"

explicacion: |
  La secularización implicaba separar la iglesia del estado, reducir su influencia educativa y legal, lo que enfureció a los conservadores.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["reformas", "tierra"]

variables:
  reforma: "reforma agraria"

respuesta: "reforma agraria"
tipo: input

enunciado: "¿Qué medida buscaba redistribuir la tierra y fue defendida por el Frente Popular?"

explicacion: |
  La reforma agraria era una de las principales demandas de la izquierda para modernizar el campo español.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "basico"
  tags: ["inicio", "golpe"]

variables:
  evento: "golpe de Estado"

respuesta: "golpe de Estado"
tipo: input

enunciado: "¿Qué evento desencadenó directamente la guerra civil tras ser parcialmente fallido?"

explicacion: |
  El intento de golpe de Estado en julio de 1936 no logró tomar el poder inmediatamente, derivando en conflicto armado.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "basico"
  tags: ["final", "cronologia"]

variables:
  anio_fin: 1939

respuesta: "1939"
tipo: input

enunciado: "¿En qué año terminó la Guerra Civil Española con la victoria del bando nacionalista?"

explicacion: |
  La guerra terminó en 1939, iniciando la dictadura de Franco que duraría hasta 1975.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "avanzado"
  tags: ["brutalidad", "guerra_aerea"]

variables:
  evento: "Guernica"

respuesta: "Guernica"
tipo: input

enunciado: "¿Qué pueblo fue bombardeado por la Legión Cóndor alemana, convirtiéndose en símbolo de la brutalidad aérea?"

explicacion: |
  El bombardeo de Guernica fue un ataque indiscriminado que inspiró la famosa pintura de Picasso.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["intervencion", "internacional"]

variables:
  bando: "republicano"

respuesta: "republicano"
tipo: input

enunciado: "¿A qué bando se unieron voluntarios internacionales conocidos como las Brigadas Internacionales?"

explicacion: |
  Las Brigadas Internacionales apoyaron principalmente al bando republicano, aunque la "no intervención" oficial dificultó su llegada.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "avanzado"
  tags: ["ideologia", "conflicto"]

variables:
  tipo_division: "ideológica"

respuesta: "ideológica"
tipo: input

enunciado: "¿Qué tipo de división, más allá de la política, transformó la disputa electoral en una lucha por la supervivencia nacional?"

explicacion: |
  La división fue ideológica y cultural, entre dos visiones incompatibles de la nación: la moderna y la tradicional.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["contexto", "segunda_republica"]

variables:
  factor: "inestabilidad institucional"

respuesta: "inestabilidad institucional"
tipo: input

enunciado: "¿Qué factor previo creó un clima de violencia latente en la Segunda República?"

explicacion: |
  La inestabilidad institucional, sumada a huelgas y enfrentamientos, preparó el terreno para la guerra.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["sociedad", "huelgas"]

variables:
  fenomeno: "huelgas generalizadas"

respuesta: "huelgas generalizadas"
tipo: input

enunciado: "¿Qué fenómeno social caracterizó la intensa polarización antes de la guerra?"

explicacion: |
  Las huelgas generalizadas reflejaban el conflicto laboral y social entre obreros y patronos.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["economia", "conservadurismo"]

variables:
  valor: "propiedad privada"

respuesta: "propiedad privada"
tipo: input

enunciado: "¿Qué valor defendían los sublevados como parte del orden tradicional?"

explicacion: |
  Los nacionalistas defendían la propiedad privada y el orden tradicional contra las reformas republicanas.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["iglesia", "religion"]

variables:
  institucion: "Iglesia"

respuesta: "Iglesia"
tipo: input

enunciado: "¿Qué institución tuvo a la jerarquía católica como opositora clave de las reformas republicanas?"

explicacion: |
  La jerarquía católica vio las reformas secularizadoras como una amenaza existencial.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["ejercito", "sublevacion"]

variables:
  actor: "ejército"

respuesta: "ejército"
tipo: input

enunciado: "¿Qué institución fue clave en la sublevación contra la República?"

explicacion: |
  Gran parte del ejército se sublevó, liderando el inicio del conflicto armado.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "avanzado"
  tags: ["estrategia", "no_intervencion"]

variables:
  consecuencia: "desventaja estratégica"

respuesta: "desventaja estratégica"
tipo: input

enunciado: "¿Qué consecuencia tuvo la política de no intervención para la República?"

explicacion: |
  La no intervención dejó a la República en desventaja, mientras los apoyos a los nacionalistas fluían sin obstáculos.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["frentes", "avance"]

variables:
  proceso: "progresivamente"

respuesta: "progresivamente"
tipo: input

enunciado: "¿Cómo fue controlado el resto del país por las tropas nacionalistas?"

explicacion: |
  El país fue controlado progresivamente, mientras Madrid resistía aislada.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "avanzado"
  tags: ["causas", "historia_larga"]

variables:
  causa_raiz: "luchas por el poder"

respuesta: "luchas por el poder"
tipo: input

enunciado: "¿De qué fenómeno fueron resultado las décadas de tensión que precedieron al estallido del conflicto?"

explicacion: |
  Décadas de luchas por el poder y la identidad nacional precedieron al estallido.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "avanzado"
  tags: ["identidad", "nacion"]

variables:
  concepto: "identidad nacional"

respuesta: "identidad nacional"
tipo: input

enunciado: "¿Qué concepto estaba en disputa entre quienes modernizaban y quienes defendían la tradición?"

explicacion: |
  La identidad nacional era el núcleo del conflicto: una visión moderna frente a una tradicional.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "avanzado"
  tags: ["importancia", "siglo_xx"]

variables:
  importancia: "punto de inflexión"

respuesta: "punto de inflexión"
tipo: input

enunciado: "¿Qué representó la Guerra Civil Española en la historia del siglo XX?"

explicacion: |
  Fue un punto de inflexión que prefiguró los conflictos ideológicos de la Segunda Guerra Mundial.
```

## Sección: guerra-del-paraguay-y-triple-alianza (33 preguntas)

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["lideres", "solano_lopez"]

respuesta: "Francisco Solano López"
tipo: completar
respuestas_validas:
  - "Francisco Solano López"
  - "Solano López"
  - "López"

enunciado: "El líder de Paraguay durante la Guerra de la Triple Alianza fue ___."

explicacion: |
  Francisco Solano López dirigió al Paraguay durante todo el conflicto hasta su muerte en 1870.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["lideres", "mitre"]

respuesta: "Bartolomé Mitre"
tipo: completar
respuestas_validas:
  - "Bartolomé Mitre"
  - "Mitre"

enunciado: "El presidente argentino que firmó el tratado de alianza fue ___."

explicacion: |
  Bartolomé Mitre fue el presidente de la Nación Argentina que firmó el Tratado de la Triple Alianza.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["tratados", "navegacion"]

respuesta: "navegación libre"
tipo: completar
respuestas_validas:
  - "navegación libre"
  - "libre navegación"
  - "libre navegacion"

enunciado: "Uno de los objetivos del Tratado de la Triple Alianza era garantizar la ___ de los ríos Paraná y Uruguay."

explicacion: |
  La libre navegación de los ríos interiores era un objetivo clave para los aliados, especialmente para Brasil y Argentina.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["causas", "economia"]

respuesta: "cuenca del Río de la Plata"
tipo: completar
respuestas_validas:
  - "cuenca del Río de la Plata"
  - "cuenca del rio de la plata"

enunciado: "Brasil y las provincias argentinas buscaban expandir su influencia en la ___, creando tensión con Paraguay."

explicacion: |
  El control de la cuenca del Río de la Plata y sus ríos navegables era estratégico para el comercio regional.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["fin", "solano_lopez"]

respuesta: "muerte de Solano López"
tipo: completar
respuestas_validas:
  - "muerte de Solano López"
  - "muerte de solano lopez"
  - "muerte de Francisco Solano López"

enunciado: "La guerra finalizó en 1870 con el ___."

explicacion: |
  La muerte del presidente Francisco Solano López en la batalla de Cerro Corá marcó el fin efectivo de la guerra.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["navegacion", "tratados"]

respuesta: "Paraná y Uruguay"
tipo: completar
respuestas_validas:
  - "Paraná y Uruguay"
  - "parana y uruguay"
  - "Paraná y el Uruguay"

enunciado: "El tratado prometía garantizar la navegación libre de los ríos ___."

explicacion: |
  Los ríos Paraná y Uruguay eran las vías fluviales principales para el comercio y la logística militar.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["tratados", "fronteras"]

respuesta: "beneficiara a los aliados"
tipo: completar
respuestas_validas:
  - "beneficiara a los aliados"

enunciado: "El tratado buscaba definir las fronteras de manera que ___."

explicacion: |
  Los aliados buscaban redefinir las fronteras a su favor, lo que generó disputas posteriores.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["brasil", "contraataque"]

respuesta: "invadiendo el norte"
tipo: completar
respuestas_validas:
  - "invadiendo el norte"
  - "invadiendo el norte del paraguay"

enunciado: "Brasil respondió a la invasión paraguaya ___ del Paraguay."

explicacion: |
  Tras la invasión al Mato Grosso, Brasil lanzó una contraofensiva invadiendo el norte de Paraguay.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["estrategia", "superioridad"]

respuesta: "numérica y logística"
tipo: completar
respuestas_validas:
  - "numérica y logística"
  - "superioridad numérica y logística"

enunciado: "Con el tiempo, la superioridad ___ de la Triple Alianza comenzó a pesar contra Paraguay."

explicacion: |
  La combinación de más hombres y mejor suministro permitió a los aliados avanzar.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["causas", "clima_politico"]

respuesta: "desconfianza mutua"
tipo: completar
respuestas_validas:
  - "desconfianza mutua"
  - "desconfianza"

enunciado: "La rivalidad creó un clima de ___ que terminó estallando en guerra."

explicacion: |
  La falta de confianza entre los estados de la región fue un factor subyacente importante.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["cronologia", "duracion"]

respuesta: "6"
tipo: input

enunciado: "La guerra duró ___ años, desde 1864 hasta 1870."

explicacion: |
  El conflicto abarcó seis años completos de combate intenso.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["alianza", "participantes"]

respuesta: "Brasil"
tipo: completar

enunciado: "La Triple Alianza estuvo conformada por el Imperio de ___, la Nación Argentina y la República Oriental del Uruguay."

explicacion: |
  La coalición aliada enfrentó al Paraguay y estaba integrada por Brasil, Argentina y Uruguay.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["lideres", "solano_lopez"]

respuesta: "Francisco Solano López"
tipo: completar

enunciado: "El Paraguay, en ese entonces un país industrializado para su época, estaba bajo el mando de ___."

explicacion: |
  Francisco Solano López lideró al Paraguay durante la guerra, manteniendo una política de aislamiento relativo pero con desarrollo industrial interno.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["causas", "uruguay"]

respuesta: "intervención de Brasil en los asuntos internos de Uruguay"
tipo: completar

enunciado: "El detonante final fue la ___, lo que el Paraguay vio como una amenaza a su soberanía."

explicacion: |
  Brasil apoyó a los colorados uruguayos, lo que llevó a Solano López a intervenir y comenzar las hostilidades.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["invasion", "mato_grosso"]

respuesta: "Mato Grosso"
tipo: completar

enunciado: "En diciembre de 1864, Solano López invadió el territorio de ___, iniciando las hostilidades."

explicacion: |
  La invasión del Mato Grosso fue la primera acción militar concreta de la guerra en diciembre de 1864.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["tratado", "alianza"]

respuesta: "mayo de 1865"
tipo: completar

enunciado: "Ante la invasión brasileña al norte del Paraguay, el gobierno argentino liderado por Bartolomé Mitre firmó el Tratado de la Triple Alianza en ___."

explicacion: |
  El tratado se firmó en mayo de 1865 para derrotar a Solano López y garantizar la navegación libre de los ríos.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["objetivos", "navegacion"]

respuesta: "garantizar la navegación libre de los ríos Paraná y Uruguay"
tipo: completar

enunciado: "Uno de los compromisos del tratado era ___."

explicacion: |
  La libre navegación de los ríos fue un objetivo clave para los aliados, especialmente para Brasil y Argentina.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["economia", "industrializacion"]

respuesta: "aislado pero industrializado"
tipo: completar

enunciado: "Para entender el conflicto, hay que notar que el Paraguay era un país ___ para sus estándares de la época."

explicacion: |
  A pesar de su aislamiento político, Paraguay tenía ferrocarriles, astilleros y fábricas de pólvora.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["causas", "hegemonia"]

respuesta: "control de los ríos navegables y los territorios fronterizos"
tipo: completar

enunciado: "La tensión previa a la guerra se debía a la rivalidad por el ___ en la cuenca del Río de la Plata."

explicacion: |
  La disputa por el control territorial y comercial fue la raíz profunda del conflicto.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "avanzado"
  tags: ["batallas", "humaita"]

respuesta: "Curupayty"
tipo: completar

enunciado: "Inicialmente, los paraguayos lograron victorias tácticas, como el rechazo del asalto aliado en la batalla de ___ (1866)."

explicacion: |
  En Curupayty, los paraguayos rechazaron un asalto aliado infligiendo bajas enormes al atacante — una de las pocas victorias tácticas significativas iniciales de los paraguayos. Humaitá, en cambio, era la fortaleza paraguaya que resistió un largo asedio y cayó ante los aliados en 1868.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["ejercito", "demografia"]

respuesta: "campesinos"
tipo: completar

enunciado: "El ejército paraguayo, que en su mayoría estaba compuesto por ___, enfrentó una superioridad logística adversa."

explicacion: |
  La fuerza principal del ejército paraguayo provenía del campesinado, lo que afectaba su logística comparada con los aliados.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["invasion", "mato_grosso"]

variables:
  territorio: "Mato Grosso"

respuesta: "Mato Grosso"
tipo: mc
opciones: 4

enunciado: "¿Qué territorio invadió Solano López en diciembre de 1864 para iniciar la guerra?"
opciones_explicitas: ["Mato Grosso", "Corrientes", "Rio Grande do Sul", "Paraná"]

explicacion: |
  La primera acción fue la invasión al Mato Grosso, territorio brasileño.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["tratado", "fechas"]

variables:
  fecha: "mayo de 1865"

respuesta: "mayo de 1865"
tipo: mc
opciones: 4

enunciado: "¿En qué momento se firmó el Tratado de la Triple Alianza?"
opciones_explicitas: ["mayo de 1865", "diciembre de 1864", "enero de 1866", "octubre de 1867"]

explicacion: |
  El tratado se firmó en mayo de 1865, después de que Paraguay invadiera Corrientes (territorio argentino) al no obtener paso libre hacia Rio Grande do Sul, lo que sumó a la Argentina al conflicto.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["lideres"]

variables:
  lider: "Francisco Solano López"

respuesta: "Francisco Solano López"
tipo: mc
opciones: 4

enunciado: "¿Quién era el líder del Paraguay durante la guerra?"
opciones_explicitas: ["Francisco Solano López", "José Gaspar Rodríguez de Francia", "Juan Manuel de Rosas", "Bartolomé Mitre"]

explicacion: |
  Francisco Solano López fue el presidente y líder militar del Paraguay en este conflicto.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["alianza"]

variables:
  pais: "Uruguay"

respuesta: "Uruguay"
tipo: mc
opciones: 4

enunciado: "¿Cuál de los siguientes países formó parte de la Triple Alianza?"
opciones_explicitas: ["Uruguay", "Bolivia", "Chile", "Paraguay"]

explicacion: |
  La Triple Alianza estaba compuesta por Brasil, Argentina y Uruguay.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["economia"]

variables:
  caracteristica: "industrializado"

respuesta: "industrializado"
tipo: mc
opciones: 4

enunciado: "¿Cómo se describe la economía del Paraguay previo al conflicto?"
opciones_explicitas: ["industrializado", "exclusivamente agrícola", "dependiente del comercio exterior", "basado en la minería"]

explicacion: |
  Paraguay tenía ferrocarriles, astilleros y fábricas de pólvora, lo que lo hacía industrializado para la región.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["causas"]

variables:
  causa: "intervención de Brasil en Uruguay"

respuesta: "intervención de Brasil en Uruguay"
tipo: mc
opciones: 4

enunciado: "¿Qué evento fue el detonante final del conflicto?"
opciones_explicitas: ["intervención de Brasil en Uruguay", "invasión argentina a Corrientes", "rebelión en Mato Grosso", "bloqueo naval a Buenos Aires"]

explicacion: |
  La intervención de Brasil en los asuntos internos de Uruguay fue el detonante directo.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["geografia", "navegacion"]

variables:
  rios: "Paraná y Uruguay"

respuesta: "Paraná y Uruguay"
tipo: mc
opciones: 4

enunciado: "El tratado prometía garantizar la navegación libre de los ríos:"
opciones_explicitas: ["Paraná y Uruguay", "Amazonas y Madeira", "De la Plata y Uruguay", "Paraná y Paraguay"]

explicacion: |
  La libre navegación de los ríos Paraná y Uruguay era un objetivo clave de la alianza.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["ejercito"]

variables:
  composicion: "campesinos"

respuesta: "campesinos"
tipo: mc
opciones: 4

enunciado: "¿De qué grupo social provenía la mayoría del ejército paraguayo?"
opciones_explicitas: ["campesinos", "oficiales profesionales europeos", "esclavizados liberados", "nobles locales"]

explicacion: |
  La fuerza militar paraguaya estaba mayoritariamente compuesta por campesinos.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "avanzado"
  tags: ["batallas"]

variables:
  batalla: "Curupayty"

respuesta: "Curupayty"
tipo: mc
opciones_explicitas: ["Curupayty", "Humaitá", "Tuyutí", "Piribebuy"]

enunciado: "¿En qué batalla rechazaron los paraguayos un asalto aliado con enormes bajas para el atacante, al inicio de la guerra?"

explicacion: |
  En Curupayty (1866) los paraguayos rechazaron el asalto aliado — una victoria táctica importante para Paraguay al inicio de la guerra. Humaitá era su fortaleza, y cayó ante los aliados recién en 1868, tras un largo asedio.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["cronologia"]

variables:
  anio: 1864

respuesta: 1864
tipo: input

enunciado: "¿En qué año comenzó la Guerra del Paraguay con la invasión al Mato Grosso?"

explicacion: |
  El conflicto comenzó en 1864.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["cronologia"]

variables:
  anio: 1870

respuesta: 1870
tipo: input

enunciado: "¿En qué año finalizó la Guerra del Paraguay?"

explicacion: |
  El conflicto terminó en 1870.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["alianza"]

variables:
  pais1: "Brasil"
  pais2: "Argentina"
  pais3: "Uruguay"

respuesta: "Uruguay"
tipo: input

enunciado: "Completa el nombre del tercer país que formó parte de la Triple Alianza junto a {pais1} y {pais2}."

explicacion: |
  Los tres miembros de la Triple Alianza fueron Brasil, Argentina y Uruguay.
```

## Sección: rosas-y-la-confederacion (24 preguntas)

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["confederacion", "urquiza", "constitucion"]

variables:
  anio_constitucion: 1853
  provincia_congreso: "Santa Fe"

respuesta: "1853"
tipo: input

enunciado: "Tras la batalla de Caseros, Urquiza convocó al Congreso Constituyente en {provincia_congreso}. ¿En qué año se promulgó la nueva Constitución?"

explicacion: |
  La Constitución de 1853 fue el resultado directo de la convocatoria de Urquiza para organizar la nación tras la caída de Rosas.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["unitarios", "federales", "caseros"]

variables:
  lider_coalicion: "Justo José de Urquiza"
  lider_federal: "Juan Manuel de Rosas"

respuesta: "Justo José de Urquiza"
tipo: input

enunciado: "¿Quién lideró el 'Ejército Grande' que derrotó al ejército de {lider_federal} en Caseros?"

explicacion: |
  Justo José de Urquiza, gobernador federal de Entre Ríos, lideró la coalición (con Brasil, Uruguay y Corrientes) contra Rosas — una ruptura dentro del propio federalismo, no un regreso de los unitarios al poder.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["soberania", "intervencion", "obligado"]

variables:
  pais_a: "Gran Bretaña"
  pais_b: "Francia"

respuesta: "Gran Bretaña y Francia"
tipo: input

enunciado: "En la batalla de la Vuelta de Obligado (1845), las fuerzas rosistas enfrentaron a una flota conjunta de {pais_a} y {pais_b}."

explicacion: |
  La intervención anglo-francesa buscaba abrir el comercio del Paraná. La resistencia simbolizó la defensa de la soberanía nacional.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["causas", "alianzas", "caseros"]

variables:
  factor_interno: "disidencia provincial"
  factor_externo: "intervencion extranjera"

respuesta: "disidencia provincial"
tipo: input

enunciado: "La caída de Rosas se debió a una alianza entre fuerzas internas motivadas por el {factor_interno} y la presión externa."

explicacion: |
  El descontento de las provincias interiores con la hegemonía porteña fue clave para que Urquiza, al frente del Ejército Grande, pudiera vencer a Rosas.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "avanzado"
  tags: ["simbolismo", "soberania"]

variables:
  concepto_clave: "defensa de la soberanía"

respuesta: "defensa de la soberanía"
tipo: input

enunciado: "Aunque fue una derrota militar, la Vuelta de Obligado se recuerda principalmente por su valor simbólico de {concepto_clave} frente al intervencionismo."

explicacion: |
  El sacrificio de las tropas rosistas elevó la causa de la independencia nacional a un símbolo patrio, trascendiendo el resultado táctico.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["unidad", "fragmentacion"]

variables:
  resultado_politico: "profundizó la división"

respuesta: "profundizó la división"
tipo: input

enunciado: "¿Cuál fue el efecto político inmediato de la victoria de Urquiza en Caseros: la unificación nacional o {resultado_politico}?"

explicacion: |
  La victoria no trajo unidad inmediata; por el contrario, aisló a Buenos Aires y profundizó la brecha entre la provincia y el resto del país.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["batallas", "soberania"]

variables:
  fecha_correcta: "20 de noviembre de 1845"
  fecha_falsa: "3 de febrero de 1852"

respuesta: verdadero
tipo: vf

enunciado: "La batalla de la Vuelta de Obligado, un símbolo de la resistencia contra la intervención anglo-francesa, ocurrió el {fecha_correcta}."

explicacion: |
  La Vuelta de Obligado se libró el 20 de noviembre de 1845 — fecha que hoy se conmemora en Argentina como el Día de la Soberanía Nacional. La fecha mencionada en el enunciado es correcta.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["constitucion", "fechas"]

variables:
  anio: 1853

respuesta: verdadero
tipo: vf

enunciado: "La Constitución Nacional argentina fue sancionada en el año {anio} como resultado del proceso iniciado tras la batalla de Caseros."

explicacion: |
  Es correcto. La Constitución de 1853 fue la primera carta magna nacional, aunque Buenos Aires no adhirió inicialmente.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["intervencion", "diplomacia"]

variables:
  paises: "Inglaterra y Francia"

respuesta: verdadero
tipo: vf

enunciado: "La flota que fue resistida en la Vuelta de Obligado estaba compuesta por fuerzas de {paises}."

explicacion: |
  Es correcto. La intervención anglo-francesa buscaba abrir los ríos interiores al comercio libre, lo que Rosas consideraba una violación de la soberanía.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["caseros", "fechas"]

variables:
  fecha: "3 de febrero de 1852"

respuesta: verdadero
tipo: vf

enunciado: "La batalla de Caseros, que marcó el fin del segundo gobierno de Rosas, se libró el {fecha}."

explicacion: |
  Es correcto. El 3 de febrero de 1852 es la fecha oficial de la batalla.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["obligado", "soberania", "intervencion"]

respuesta: verdadero
tipo: vf

enunciado: "La batalla de la Vuelta de Obligado se interpretó históricamente como un acto de defensa de la soberanía nacional frente al intervencionismo anglo-francés."

explicacion: |
  Aunque hubo derrotas militares, el sacrificio de las tropas rosistas se convirtió en un símbolo de resistencia contra la injerencia extranjera en el río Paraná.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["caseros", "cronologia"]

variables:
  dia: 3
  mes: 2

respuesta: "3 de febrero"
tipo: completar

enunciado: "La batalla de Caseros, que marcó el fin del gobierno de Rosas, ocurrió el {dia} de {mes}."

explicacion: |
  La fecha exacta de la batalla es el 3 de febrero de 1852.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["obligado", "alianzas", "guerra"]

respuesta: falso
tipo: vf

enunciado: "En la batalla de la Vuelta de Obligado, las fuerzas argentinas contaron con el apoyo logístico de Brasil y Uruguay."

explicacion: |
  Fue al revés: Brasil y Uruguay formaban parte de la coalición anglo-francesa que invadía el río Paraná, mientras que las fuerzas de Rosas las combatían.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["obligado", "cronologia"]

variables:
  dia: 20
  mes: 11

respuesta: "20"
tipo: input

enunciado: "La batalla de la Vuelta de Obligado ocurrió el día {dia} del mes {mes} de 1845. Escribe solo el número del día."

explicacion: |
  La fecha es 20 de noviembre de 1845.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "avanzado"
  tags: ["constitucion", "buenos_aires", "integracion"]

respuesta: falso
tipo: vf

enunciado: "La provincia de Buenos Aires se integró inmediatamente al resto del país tras la sanción de la Constitución de 1853."

explicacion: |
  Buenos Aires se separó de la Confederación Argentina entre 1852 y 1861, manteniendo un estado propio hasta su reincorporación posterior.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["constitucion", "objetivo", "unidad"]

respuesta: verdadero
tipo: vf

enunciado: "Uno de los objetivos principales de la Constitución de 1853 era superar la fragmentación territorial y lograr la unidad nacional."

explicacion: |
  El texto constitucional buscaba establecer un régimen federal que integrara a las provincias, aunque Buenos Aires se mantuvo al margen inicialmente.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["cronologia", "caseros"]

variables:
  anio: 1852

respuesta: "1852"
tipo: input

enunciado: "Juan Manuel de Rosas cayó del poder en el año {anio}."

explicacion: |
  La batalla de Caseros ocurrió en 1852, poniendo fin al gobierno de Rosas.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["gobierno", "centralizacion", "buenos_aires"]

respuesta: verdadero
tipo: vf

enunciado: "Durante el gobierno de Rosas, la provincia de Buenos Aires ejerció un dominio hegemónico sobre el resto del país."

explicacion: |
  Rosas gestionaba las relaciones exteriores y el comercio portuario, centralizando el poder económico y político en Buenos Aires.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["caseros", "consecuencias", "fractura"]

respuesta: falso
tipo: vf

enunciado: "La victoria en Caseros trajo consigo la unificación inmediata del país bajo la Constitución de 1853."

explicacion: |
  La victoria de Caseros profundizó la división, llevando a la separación de Buenos Aires de la Confederación durante casi una década.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["cronologia", "caseros"]

variables:
  mes: 2

respuesta: "2"
tipo: input

enunciado: "La batalla de Caseros ocurrió en el mes {mes} del año 1852."

explicacion: |
  La fecha es 3 de febrero de 1852.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["politica", "provincias", "resentimiento"]

respuesta: verdadero
tipo: vf

enunciado: "Las provincias interiores sentían que sus intereses estaban subordinados a los de Buenos Aires durante el gobierno de Rosas."

explicacion: |
  El control portuario y las aduanas por parte de Buenos Aires generaba un fuerte resentimiento en las provincias del interior.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["obligado", "identidad", "sacrificio"]

respuesta: verdadero
tipo: vf

enunciado: "A pesar de la derrota militar, la batalla de la Vuelta de Obligado dejó una huella profunda en la identidad nacional como símbolo de sacrificio."

explicacion: |
  El heroísmo de las tropas y civiles en Obligado fue reinterpretado como un acto de defensa de la soberanía.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["cronologia", "constitucion"]

variables:
  anio: 1853

respuesta: "1853"
tipo: input

enunciado: "La Constitución Nacional fue sancionada en el año {anio}."

explicacion: |
  La primera Constitución Nacional de Argentina se sancionó en 1853.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["caseros", "inestabilidad", "guerra_civil"]

respuesta: verdadero
tipo: vf

enunciado: "La caída de Rosas no trajo la unidad nacional deseada, sino que abrió la puerta a un período de inestabilidad y guerra civil."

explicacion: |
  Tras Caseros, Argentina vivió una larga etapa de fragmentación política y conflictos entre Buenos Aires y la Confederación.
```

## Sección: conquista-del-desierto-y-campana-al-chaco (24 preguntas)

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "basico"
  tags: ["conquista_del_desierto", "julio_arentino_roca"]

variables:
  anio: 1879

respuesta: "1879"
tipo: input

enunciado: "¿En qué año se lanzó oficialmente la campaña de la Conquista del Desierto bajo el mando del general Julio Argentino Roca?"

explicacion: |
  La Conquista del Desierto fue una campaña militar iniciada en 1879 por el gobierno de Nicolás Avellaneda, comandada por el general Julio Argentino Roca, con el objetivo de ocupar los territorios pampeanos y patagónicos habitados por pueblos originarios.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "basico"
  tags: ["conquista_del_desierto", "pueblos_originarios"]

variables:
  pueblos: ["mapuches", "pehuenches", "ranqueles", "querandíes"]
  correctos: ["mapuches", "pehuenches", "ranqueles"]

respuesta: |
  mapuches
  pehuenches
  ranqueles
tipo: completar

enunciado: "Nombra tres de los pueblos originarios que habitaban la Pampa y la Patagonia y fueron afectados por la Conquista del Desierto."

explicacion: |
  Los mapuches, pehuenches y ranqueles, entre otros, eran los habitantes principales de la región que fue objeto de la campaña militar de 1879.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["campana_al_chaco", "cronologia"]

respuesta: "1884-1885"
tipo: input

enunciado: "¿Entre qué dos años se desarrolló principalmente la Campaña al Chaco, dirigida a asegurar las fronteras del norte? (formato: aaaa-aaaa)"

explicacion: |
  Aunque hubo acciones previas y posteriores, el periodo clave de la Campaña al Chaco bajo el gobierno de Julio A. Roca fue entre 1884 y 1885.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["campana_al_chaco", "gobierno"]

variables:
  presidente: "Julio A. Roca"

respuesta: "Julio A. Roca"
tipo: input

enunciado: "¿Qué presidente estaba en el cargo durante el desarrollo principal de la Campaña al Chaco (1884-1885)?"

explicacion: |
  La Campaña al Chaco se llevó a cabo durante el gobierno de Julio A. Roca, buscando consolidar el control estatal en el norte argentino.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["consecuencias", "demografia"]

respuesta: "desplazamiento o muerte de miles de personas"
tipo: input

enunciado: "Una de las consecuencias humanas inmediatas de la Conquista del Desierto fue el ___."

explicacion: |
  La campaña militar provocó el desalojo forzado, la muerte o la reducción a la servidumbre de miles de indígenas, alterando radicalmente la demografía regional.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "basico"
  tags: ["conquista_del_desierto", "fechas", "roca"]

variables:
  fecha: 1879

respuesta: 1879
tipo: input

enunciado: "¿En qué año comenzó oficialmente la campaña militar conocida como la Conquista del Desierto, liderada por el general Julio A. Roca?"

explicacion: |
  La Conquista del Desierto se inició en 1879. Fue una campaña militar organizada por el gobierno nacional para ocupar los territorios del sur y oeste argentino, habitados por pueblos originarios.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "basico"
  tags: ["roca", "liderazgo", "militar"]

respuesta: "Julio Argentino Roca"
tipo: completar

enunciado: "La campaña de la Conquista del Desierto fue comandada por el general ___."

explicacion: |
  Julio Argentino Roca fue el general que lideró la expedición de 1879. Su éxito en esta campaña consolidó su posición política y lo llevó a la presidencia posteriormente.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["territorio", "patagonia", "pampa"]

respuesta: "Pampa Patagónica"
tipo: completar

enunciado: "El objetivo geográfico principal de la Conquista del Desierto era avanzar sobre la ___."

explicacion: |
  La campaña buscaba someter a los pueblos mapuches, pehuenches y ranqueles que habitaban la Pampa y la Patagonia, integrando estas tierras al Estado nacional.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["pueblos_originarios", "mapuche", "pehuenche"]

respuesta: "mapuches, pehuenches y ranqueles"
tipo: completar

enunciado: "Los principales pueblos originarios que habitaban los territorios conquistados en la campaña del sur eran los ___."

explicacion: |
  Estos grupos mantenían una organización social y económica autónoma en la región pampeana y patagónica antes de la intervención militar estatal.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "avanzado"
  tags: ["ideologia", "civilizacion", "barbarie"]

respuesta: verdadero
tipo: vf

enunciado: "La expansión territorial se justificó políticamente bajo la dicotomía de 'civilización' frente a 'barbarie', promoviendo valores europeos."

explicacion: |
  El discurso de la época presentaba a los pueblos originarios como obstáculos para el progreso y la ley, legitimando la ocupación militar como un acto de 'civilización'.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "basico"
  tags: ["chaco", "fechas", "cronologia"]

variables:
  inicio: 1884

respuesta: 1884
tipo: input

enunciado: "¿En qué año comenzó principalmente la Campaña al Chaco, paralela a la consolidación de la frontera sur?"

explicacion: |
  La Campaña al Chaco se desarrolló principalmente entre 1884 y 1885, bajo el gobierno de Julio A. Roca, para asegurar la frontera norte.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["juarez_celman", "presidencia", "gobierno"]

respuesta: "Julio A. Roca"
tipo: completar

enunciado: "La Campaña al Chaco se llevó a cabo durante el gobierno de ___."

explicacion: |
  Julio A. Roca fue presidente de Argentina en su primer mandato entre 1880 y 1886 (tuvo un segundo mandato entre 1898 y 1904). Durante ese primer gobierno se intensificó la expansión hacia el norte del país.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "basico"
  tags: ["violencia", "militar", "realidad"]

respuesta: falso
tipo: vf

enunciado: "La Conquista del Desierto fue un proceso completamente pacífico sin víctimas mortales."

explicacion: |
  Falso. La campaña implicó operaciones militares violentas, batallas y el desalojo forzado de poblaciones originarias.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "basico"
  tags: ["cronologia", "chaco"]

respuesta: verdadero
tipo: vf

enunciado: "La Campaña al Chaco tuvo lugar principalmente entre 1884 y 1885."

explicacion: |
  Correcto. Aunque hubo conflictos anteriores y posteriores, este período marca el inicio de la ocupación sistemática del norte bajo el gobierno de Roca.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["derecho", "propiedad", "originales"]

respuesta: falso
tipo: vf

enunciado: "Los pueblos originarios mantuvieron la propiedad legal de sus tierras ancestrales tras la conquista."

explicacion: |
  Falso. La conquista resultó en la pérdida de sus tierras, que fueron incorporadas al dominio público y luego privatizadas.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["economia", "exportacion"]

respuesta: verdadero
tipo: vf

enunciado: "La incorporación de tierras permitió impulsar la exportación de carne y trigo."

explicacion: |
  Correcto. La nueva tierra disponible fue clave para el modelo agroexportador que caracterizó a la Argentina de finales del siglo XIX.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "avanzado"
  tags: ["roca", "politica"]

respuesta: verdadero
tipo: vf

enunciado: "Julio A. Roca se convirtió en presidente de la Nación gracias en parte al éxito de esta campaña."

explicacion: |
  Correcto. El prestigio obtenido por la Conquista del Desierto fue fundamental para su ascenso político y su primera presidencia (1880-1886).
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["estado", "soberania"]

respuesta: verdadero
tipo: vf

enunciado: "El gobierno nacional consideraba a estas regiones un 'vacío administrativo' antes de la conquista."

explicacion: |
  Correcto. Desde la perspectiva del Estado liberal, la falta de instituciones estatales formales se interpretaba como ausencia de soberania efectiva.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["inmigracion", "demografia"]

respuesta: verdadero
tipo: vf

enunciado: "La tierra conquistada facilitó la llegada masiva de inmigrantes europeos."

explicacion: |
  Correcto. Las tierras liberadas fueron colonizadas por europeos, transformando la demografía y la cultura del país.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["soberania", "indigena"]

respuesta: verdadero
tipo: vf

enunciado: "La victoria militar significó el fin de la soberanía indígena en la región pampeana y patagónica."

explicacion: |
  Correcto. Los pueblos originarios perdieron su capacidad de autogobierno y fueron desplazados a reservas o marginados socialmente.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "avanzado"
  tags: ["comparacion", "objetivos"]

respuesta: falso
tipo: vf

enunciado: "Los objetivos de la Conquista del Desierto y la Campaña al Chaco eran idénticos en todos sus aspectos."

explicacion: |
  Falso. Aunque ambas buscaban expansión, el sur se centró en tierras agrícolas y el norte en fronteras geopolíticas y recursos específicos.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "avanzado"
  tags: ["herencia", "desigualdad"]

respuesta: verdadero
tipo: vf

enunciado: "La marginación social y económica de los pueblos originarios derivada de la conquista persiste hasta hoy."

explicacion: |
  Correcto. Las consecuencias estructurales de la pérdida de tierras y derechos siguen afectando a las comunidades indígenas argentinas.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["economia", "inversion"]

respuesta: verdadero
tipo: vf

enunciado: "La conquista permitió una masiva entrada de capital extranjero al país."

explicacion: |
  Correcto. La seguridad territorial y la disponibilidad de tierras incentivaron la inversión extranjera, especialmente británica.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["historia", "contacto"]

respuesta: falso
tipo: vf

enunciado: "Antes de la conquista, los pueblos originarios estaban completamente aislados de las provincias argentinas."

explicacion: |
  Falso. Mantenían intercambios comerciales y relaciones políticas con las provincias, aunque fuera de la estructura estatal nacional.
```

## Sección: economias-regionales-tempranas (23 preguntas)

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["ley_aduanas", "urquiza", "proteccionismo"]

variables:
  anio: 1854

respuesta: "proteger la producción local"
tipo: completar

enunciado: "La Ley de Aduanas promulgada en {anio} por el gobierno de Justo José de Urquiza tenía como objetivo principal:"

explicacion: |
  La ley buscaba proteger la industria naciente y la producción local frente a la competencia extranjera, especialmente la británica.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["comercio_exterior", "britanicos"]

respuesta: "británica"
tipo: completar

enunciado: "La Ley de Aduanas de 1854 buscaba proteger la producción local frente a la competencia de la industria ___."

explicacion: |
  La industria británica era la principal competidora en el mercado argentino de la época.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["litoral", "entre_rios", "corrientes"]

variables:
  regiones: "Entre Ríos y Corrientes"

respuesta: "Entre Ríos y Corrientes"
tipo: completar

enunciado: "Las provincias que más resistieron la Ley de Aduanas por considerar que amenazaba su autonomía económica fueron:"

explicacion: |
  Las provincias del Litoral, especialmente Entre Ríos y Corrientes, dependían más del comercio internacional y menos de la protección arancelaria.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["economia_litoral", "comercio"]

respuesta: "abierta"
tipo: completar

enunciado: "La economía de las provincias del Litoral se caracterizaba por ser más ___ al comercio internacional."

explicacion: |
  A diferencia del centro del país, el Litoral tenía una economía más integrada y dependiente del comercio exterior.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["conflicto_armado", "causas"]

respuesta: "Ley de Aduanas"
tipo: completar

enunciado: "La resistencia a la ___ se convirtió en el detonante de una nueva guerra civil entre la Confederación y el Litoral."

explicacion: |
  La aplicación estricta de la ley por Urquiza provocó la reacción armada de los caudillos litorales.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "avanzado"
  tags: ["ideologia", "descentralizacion"]

respuesta: "descentralizada"
tipo: completar

enunciado: "Los rebeldes del Litoral defendían una visión política más ___, donde las provincias tendrían mayor control sobre sus recursos."

explicacion: |
  Los caudillos litorales argumentaban a favor de una mayor autonomía provincial frente al centralismo confederado.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["exportaciones", "carne"]

respuesta: "carne salada y cueros"
tipo: completar

enunciado: "En la década de 1850, las exportaciones de ___ seguían siendo vitales para la economía argentina."

explicacion: |
  Aunque la industria nacía, la ganadería y sus derivados seguían siendo la base de las exportaciones.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["fiscalidad", "estado"]

respuesta: "asegurar ingresos"
tipo: completar

enunciado: "Además de proteger la industria, la Ley de Aduanas buscaba ___ para el Estado nacional."

explicacion: |
  El Estado nacional necesitaba recursos fiscales para estructurarse tras la caída de Rosas.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "avanzado"
  tags: ["soberania", "comercio"]

respuesta: "soberanía sobre el comercio exterior"
tipo: completar

enunciado: "Mientras la Confederación buscaba consolidar la ___, los rebeldes defendían la autonomía provincial."

explicacion: |
  El conflicto fue también una disputa sobre quién controlaba las tarifas y el comercio exterior.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["confederacion", "estructuracion"]

respuesta: "recién comenzaba a estructurarse"
tipo: completar

enunciado: "La Ley de Aduanas se promulgó cuando el Estado nacional ___ tras la caída de Rosas."

explicacion: |
  El nuevo orden constitucional estaba frágil y necesitaba consolidar su autoridad fiscal.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["percepcion", "amenaza"]

respuesta: "amenaza directa"
tipo: completar

enunciado: "Los caudillos litorales percibieron la Ley de Aduanas como una ___ a su autonomía y prosperidad."

explicacion: |
  La ley fue vista no como una medida técnica, sino como un ataque político y económico.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "avanzado"
  tags: ["consecuencias", "guerra"]

respuesta: "no se resolvió con una victoria clara inmediata"
tipo: completar

enunciado: "La guerra entre la Confederación y el Litoral ___, dejando un legado de desconfianza."

explicacion: |
  El conflicto prolongado debilitó la legitimidad del gobierno de Urquiza sin definir una supremacía clara de inmediato.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["acuerdos", "federalismo"]

respuesta: "violaba los acuerdos federales"
tipo: completar

enunciado: "Los rebeldes argumentaban que la ley ___ y perjudicaba sus economías locales."

explicacion: |
  La imposición unilateral de tarifas fue vista como una violación de los pactos federativos.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["diplomacia", "conflicto"]

respuesta: "rompimiento de relaciones"
tipo: completar

enunciado: "La situación escaló rápidamente, llevando al ___ diplomáticas entre el gobierno nacional y el Litoral."

explicacion: |
  La tensión económica derivó en una crisis política y diplomática abierta.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["rosas", "urquiza", "control"]

respuesta: "control absoluto"
tipo: completar

enunciado: "La tensión se generó aunque la capital ya no tuviera el ___ que había tenido bajo Rosas."

explicacion: |
  Urquiza intentaba centralizar el poder que Rosas había ejercido desde Buenos Aires, pero con menos fuerza coercitiva inicial.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "avanzado"
  tags: ["constitucion", "fragilidad"]

respuesta: "fragilidad del nuevo orden constitucional"
tipo: completar

enunciado: "El conflicto puso de manifiesto la ___ y la dificultad de integrar intereses dispares."

explicacion: |
  La incapacidad de resolver el conflicto fiscal mostró los límites del nuevo marco legal.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "avanzado"
  tags: ["integracion", "economia"]

respuesta: "integrar intereses económicos tan dispares"
tipo: completar

enunciado: "El gran desafío del momento era ___ bajo un mismo marco legal."

explicacion: |
  Los intereses de Buenos Aires/Confederación y los del Litoral eran económicamente antagónicos en términos arancelarios.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["tarifas", "proteccionismo"]

respuesta: "tarifas altas"
tipo: completar

enunciado: "La Ley de Aduanas imponía ___ a las importaciones para proteger la industria local."

explicacion: |
  El proteccionismo se lograba mediante barreras arancelarias elevadas.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["regulacion", "comercio_exterior"]

respuesta: "regular el comercio exterior"
tipo: completar

enunciado: "Además de las tarifas, la ley buscaba ___ bajo el control del Estado nacional."

explicacion: |
  La centralización del comercio exterior era clave para la soberanía nacional.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["litoral", "economia"]

variables:
  valor: "falso"

respuesta: falso
tipo: vf

enunciado: "Las provincias del Litoral dependían más de la protección arancelaria que el centro del país."

explicacion: |
  Falso. El Litoral tenía una economía más abierta y dependía menos de la protección que el centro.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["guerra", "resultado"]

variables:
  valor: "falso"

respuesta: falso
tipo: vf

enunciado: "La guerra entre la Confederación y el Litoral se resolvió con una victoria clara inmediata."

explicacion: |
  Falso. El conflicto dejó un legado de desconfianza y no tuvo un ganador claro de inmediato.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["urquiza", "aplicacion"]

variables:
  valor: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Justo José de Urquiza intentó aplicar la Ley de Aduanas de manera estricta."

explicacion: |
  Verdadero. Su estricta aplicación fue el detonante de la rebelión litoraleña.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["industria", "proteccion"]

variables:
  valor: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "La Ley de Aduanas buscaba fomentar la industria naciente argentina."

explicacion: |
  Verdadero. El proteccionismo arancelario tenía como fin desarrollar la manufactura local.
```

