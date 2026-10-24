# Historia — revolucion mexicana 1910 1920 (cuestionario, 27 preguntas VBLang)

> Tema: `historia/revolucion-mexicana-1910-1920`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

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

### 2 — pregunta 2

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

### 3 — pregunta 3

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

### 4 — pregunta 4

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

### 5 — pregunta 5

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

### 6 — pregunta 6

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

### 7 — pregunta 7

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

### 8 — pregunta 8

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

### 9 — pregunta 9

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

### 10 — pregunta 10

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

### 11 — pregunta 11

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

### 12 — pregunta 12

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

### 13 — pregunta 13

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

### 14 — pregunta 14

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

### 15 — pregunta 15

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

### 16 — pregunta 16

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

### 17 — pregunta 17

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

### 18 — pregunta 18

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

### 19 — pregunta 19

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

### 20 — pregunta 20

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

### 21 — pregunta 21

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

### 22 — pregunta 22

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

### 23 — pregunta 23

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

### 24 — pregunta 24

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

### 25 — pregunta 25

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

### 26 — pregunta 26

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

### 27 — pregunta 27

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
