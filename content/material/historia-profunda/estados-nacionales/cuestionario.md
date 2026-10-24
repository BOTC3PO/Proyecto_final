# Historia Profunda — Estados nacionales (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Estado Nacional

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["definicion", "politica"]

tipo: mc
opciones_explicitas: ["Una organización política sin fronteras definidas ni cultura común.", "Una organización política con territorio, población y gobierno, con una identidad nacional compartida.", "Un grupo de personas que comparten una lengua pero no tienen un gobierno propio.", "Un sistema de comercio internacional basado en tratados de libre cambio."]
enunciado: "Un Estado Nacional se define fundamentalmente como:"
respuesta: "Una organización política con territorio, población y gobierno, con una identidad nacional compartida."
explicacion: |
  El Estado Nacional es una organización política que posee un territorio delimitado, una población asentada en él y un gobierno soberano, todo esto unido por una identidad cultural, histórica o lingüística común.
```

### 2 — Componentes del Estado

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["componentes", "territorio"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Francia", "populacion_fr"], ["Japón", "populacion_jp"]]

tipo: completar
respuestas_validas:
  - "territorio"
  - "población"
  - "gobierno"

enunciado: "Para que el país {datos[escenario_idx][0]} funcione como un Estado Nacional, requiere de un _________ delimitado, una _________ asentada y un _________ que ejerza la soberanía."

pasos:
  - "Identificar los tres pilares de la estructura estatal."
  - "Completar los espacios con los conceptos técnicos correctos."

explicacion: |
  Los tres elementos constitutivos son: territorio, población y gobierno. Sin la combinación de estos, no se puede hablar de un Estado Nacional moderno.
```

### 3 — Identidad y Cohesión

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["identidad", "cultura"]

tipo: mc
opciones_explicitas: ["La lengua y la historia común ayudan a crear el sentimiento de pertenencia.", "La fuerza militar es el único factor que define a una nación.", "El territorio es lo único que importa, la cultura es irrelevante.", "Un Estado Nacional no requiere de una identidad compartida."]
respuesta: "La lengua y la historia común ayudan a crear el sentimiento de pertenencia."

enunciado: "¿Cuál es el papel de la lengua, la cultura y la historia en la formación de un Estado Nacional?"

explicacion: |
  A diferencia del Estado como estructura puramente administrativa, el concepto de 'Nación' aporta el componente de identidad (lengua, historia, cultura) que cohesiona a la población.
```

### 4 — Secuencia de formación estatal

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["proceso", "historia"]

tipo: ordenar
opciones_explicitas: ["Consolidación de fronteras territoriales", "Surgimiento de una identidad cultural común", "Centralización del poder y gobierno"]

enunciado: "Ordena cronológicamente los procesos típicos en la formación de un Estado Nacional moderno (desde la base cultural hasta la estructura política):"

explicacion: |
  Aunque los procesos varían, históricamente la identidad cultural suele preceder o acompañar la centralización del poder y la delimitación formal de las fronteras.
respuesta_orden: ["Surgimiento de una identidad cultural común", "Centralización del poder y gobierno", "Consolidación de fronteras territoriales"]
```

### 5 — Diferencia entre Estado y Nación

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["conceptos", "diferencias"]

variables:
  casos: [["nación", "estado"]]

tipo: completar
tolerancia_abs: 0

enunciado: "Si nos encontramos ante el caso de nación, estamos ante una _________ que no ha logrado constituirse como un Estado Nacional."

respuesta: "nación"

explicacion: |
  Cuando existe una nación (identidad compartida) pero carece de soberanía territorial o gobierno propio, se dice que es una nación sin Estado.
```

### 6 — El concepto de Estado-Nación

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["conceptos", "siglo_xix"]

respuesta: "soberanía"
tipo: completar
respuestas_validas:
  - "soberanía"

enunciado: "El surgimiento del Estado-Nación implica la consolidación de un territorio delimitado donde el poder supremo reside en una entidad política que ejerce la ___ sobre su población."

explicacion: |
  La soberanía es el principio fundamental que define a un Estado moderno, permitiéndole ejercer autoridad exclusiva sobre un territorio y su población, sin interferencias externas.
```

### 7 — Unificación Italiana

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["unificacion", "italia"]

respuesta: "Cavour"
tipo: mc
opciones_explicitas: ["Cavour", "Garibaldi", "Mazzini", "Bismarck"]

enunciado: "Durante el proceso de unificación italiana (Risorgimento), el líder político que fue clave desde el Reino de Piamonte-Cerdeña fue ___."

explicacion: |
  El proceso de unificación fue complejo: mientras Garibaldi lideraba las campañas militares, figuras como Cavour (desde el Piamonte) gestionaban la diplomacia para consolidar el nuevo Estado.
```

### 8 — La Unificación Alemana

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["unificacion", "alemania"]

respuesta: "Prusia"
tipo: mc
opciones_explicitas: ["Prusia", "Austria", "Baviera", "Sajonia"]

enunciado: "A diferencia de la unificación italiana, la unificación alemana de 1871 fue liderada por la potencia militar de ___."

explicacion: |
  Bajo el liderazgo de Otto von Bismarck, Prusia utilizó la diplomacia y la guerra (como la guerra franco-prusiana) para unificar los estados alemanes bajo su corona.
```

### 9 — Consecuencias del Nacionalismo

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["consecuencias", "geopolitica"]

respuesta: "Imperio Austro-Húngaro"
tipo: mc
opciones_explicitas: ["Imperio Austro-Húngaro", "Imperio Británico", "Imperio Otomano", "Imperio Ruso"]

enunciado: "El auge de los movimientos nacionalistas en el siglo XIX representó una amenaza directa para la integridad territorial de los imperios multiétnicos, como el ___."

explicacion: |
  Los imperios multiétnicos, donde convivían diversas lenguas y culturas bajo una misma corona, sufrieron tensiones constantes debido a que los grupos étnicos buscaban su propia independencia nacional.
```

### 10 — Orden de procesos de unificación

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["cronologia", "unificacion"]

respuesta_orden: ["Unificación Italiana", "Unificación Alemana", "Fragmentación del Imperio Otomano"]
tipo: ordenar
opciones_explicitas: ["Unificación Italiana", "Unificación Alemana", "Fragmentación del Imperio Otomano"]

enunciado: "Ordene cronológicamente los siguientes procesos de transformación del mapa europeo en el siglo XIX, desde el más temprano al más tardío:"

pasos:
  - "Identifique la fecha de consolidación de la Italia unificada (1861)."
  - "Identifique la fecha de la proclamación del Imperio Alemán (1871)."
  - "Considere el declive de los Balcanes y el Imperio Otomano hacia finales del siglo."

explicacion: |
  La unificación italiana se consolidó formalmente en 1861, seguida por la unificación alemana en 1871. El declive otomano y las tensiones nacionalistas en los Balcanes fueron procesos continuos que culminarían con mayor intensidad tras la Primera Guerra Mundial.
```

### 11 — El concepto de Nación

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["nacionalismo", "identidad"]

respuesta: "Estado"
tipo: "completar"
respuestas_validas:
  - "Estado"

enunciado: "El nacionalismo sostiene que una nación, entendida como un grupo con identidad cultural, lengua o historia común, debe tener su propio ___."

explicacion: |
  El nacionalismo es la ideología que vincula la identidad de un grupo cultural (nación) con la estructura política de un territorio soberano (Estado).
```

### 12 — Requisitos del Nacionalismo

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["ideologia", "componentes"]

respuesta: "Lengua común, historia compartida y territorio definido"
tipo: mc
opciones_explicitas: ["Lengua común, historia compartida y territorio definido", "Religión única, monarquía absoluta y sistema feudal", "Clase obrera, lucha de clases y plusvalía"]

enunciado: "¿Cuál de los siguientes conjuntos de elementos ha servido históricamente como pilar para la construcción de una identidad nacional según el nacionalismo romántico?"

explicacion: |
  Para que un grupo se reconozca como nación, suele requerir elementos de cohesión como la lengua, la historia y un territorio.
```

### 13 — Consecuencia de la identidad nacional

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["geopolitica"]

respuesta: "fragmentación"
tipo: "mc"
opciones_explicitas: ["unificación", "fragmentación", "globalización", "feudalización"]

enunciado: "El auge de los nacionalismos en el siglo XIX provocó la ___ de imperios multiétnicos que contenían diversas naciones sin identidad propia."

explicacion: |
  Al buscar cada grupo su propio Estado, los grandes imperios (como el Austriaco o el Otomano) sufrieron procesos de fragmentación territorial.
```

### 14 — El rol del Estado-Nación

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["soberania"]

respuesta: "soberanía"
tipo: "completar"
respuestas_validas:
  - "soberanía"

enunciado: "El proyecto del Estado-Nación busca que el poder político sea ejercido por una nación que posee ___ sobre su territorio."

explicacion: |
  La soberanía es el derecho de un Estado a autogobernarse sin interferencias externas, un concepto clave para la legitimidad nacionalista.
```

### 15 — Identidad vs. Soberanía

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["teoria_politica"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un grupo con cultura propia pero sin fronteras claras."], ["Un Estado con fronteras claras pero con múltiples etnias sin cohesión."]]
  respuestas: ["Nación sin Estado", "Estado sin Nación"]

respuesta: respuestas[caso_idx]
tipo: "mc"
opciones_explicitas: ["Nación sin Estado", "Estado sin Nación"]

enunciado: "Analice el siguiente escenario: {casos[caso_idx][0]} ¿Qué situación describe mejor la tensión nacionalista?"

explicacion: |
  La tensión surge precisamente cuando la delimitación de la 'nación' (identidad) no coincide con la delimitación del 'Estado' (fronteras políticas).
```

### 16 — Unificación Italiana

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["italia", "risorgimento", "siglo_xix"]

enunciado: "Durante el proceso de unificación italiana, el liderazgo político y diplomático fue fundamental. El personaje que actuó como el cerebro diplomático del Reino de Piamonte-Cerdeña fue ___."

respuesta: "Cavour"
tipo: mc
opciones_explicitas: ["Cavour", "Garibaldi", "Mazzini", "Vittorio Emanuele II"]

explicacion: |
  Camillo Benso, conde de Cavour, fue el arquitecto de la unificación italiana a través de la diplomacia y la modernización del Reino de Piamonte-Cerdeña.
```

### 17 — Unificación Alemana

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["alemania", "bismarck", "prusia"]

enunciado: "La unificación alemana se consolidó tras la victoria en la Guerra Franco-Prusiana, lo que llevó a la firma del ___ en el año 1871."

respuesta: "Tratado de Frankfurt"
tipo: mc
opciones_explicitas: ["Congreso de Viena", "Tratado de Frankfurt", "Tratado de Versalles", "Paz de Westfalia"]

explicacion: |
  El Tratado de Frankfurt puso fin a la guerra contra Francia y consolidó la creación del Segundo Imperio Alemán bajo el liderazgo de Prusia.
```

### 18 — Concepto de Estado-Nación

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["conceptos", "soberania"]

respuesta: "soberanía"
tipo: completar
respuestas_validas:
  - "soberanía"
  - "soberania"

enunciado: "Un elemento esencial de la formación de los Estados nacionales en el siglo XIX fue la consolidación de la ___ territorial y política sobre un conjunto de poblaciones con una identidad común."

explicacion: |
  La soberanía es la autoridad suprema que ejerce el Estado sobre su territorio y población, permitiendo la independencia frente a otras potencias.
```

### 19 — Factores de Unificación

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["causas", "economia", "nacionalismo"]

enunciado: "Un factor determinante para la cohesión de los estados alemanes antes de la unificación política fue la creación de la Zollverein, que facilitó el libre comercio entre los estados miembros."

respuesta: "Zollverein"
tipo: mc
opciones_explicitas: ["Zollverein", "Confederación Germánica", "Unión Europea", "Liga Hanseática"]

explicacion: |
  El Zollverein fue una unión aduanera que eliminó las barreras comerciales entre los estados alemanes, fortaleciendo el poder de Prusia y preparando el terreno para la unificación política.
```

### 20 — Etapas de la Unificación Alemana

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["procesos", "guerras"]

respuesta_orden: ["Guerra de los Ducados", "Guerra Austro-Prusiana", "Guerra Franco-Prusiana"]
tipo: ordenar
opciones_explicitas: ["Guerra de los Ducados", "Guerra Austro-Prusiana", "Guerra Franco-Prusiana"]

enunciado: "El proceso de unificación liderado por Otto von Bismarck se desarrolló a través de una serie de conflictos bélicos estratégicos. Ordene cronológicamente estas guerras:"

explicacion: |
  Bismarck utilizó la política de 'sangre y hierro' a través de tres guerras clave: contra Dinamarca (1864), contra Austria (1866) y contra Francia (1870-1871).
```

### 21 — Elementos del Estado

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["teoria_politica", "elementos_estado"]

variables:
  escenario: uno_de([["Un grupo de personas sin fronteras definidas ni leyes comunes.", "No es un Estado"], ["Un territorio con población, gobierno y leyes, pero sin identidad cultural única.", "Es un Estado"], ["Un grupo con identidad, territorio y gobierno, pero sin población.", "No es un Estado"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["No es un Estado", "Es un Estado"]

enunciado: "Analiza el siguiente caso: {escenario[0]} ¿Se puede considerar un Estado Nacional según la teoría clásica?"

explicacion: |
  Para que exista un Estado Nacional se requiere la coexistencia de territorio, población, gobierno y, frecuentemente, una identidad compartida.
```

### 22 — El concepto de Territorio

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["territorio", "soberania"]

variables:
  caso: uno_de([["La delimitación de fronteras físicas y jurídicas.", "Territorio"], ["El conjunto de individuos que habitan el país.", "Población"], ["El conjunto de normas que rigen la convivencia.", "Gobierno"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["Territorio", "Población", "Gobierno"]

enunciado: "Un elemento fundamental de los Estados modernos es la delimitación de fronteras físicas y jurídicas. Este concepto se define como: ___"

explicacion: |
  El territorio es el espacio geográfico donde el Estado ejerce su soberanía.
```

### 23 — La construcción de la Identidad

```
metadata:
  materia: "historia_profucha"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["identidad", "nacionalismo"]

tipo: completar
respuesta: "Identidad"
respuestas_validas:
  - "Identidad"

enunciado: "En el proceso de formación de los Estados nacionales, la creación de un sentimiento de pertenencia común a través de símbolos y lengua se conoce como ___."

explicacion: |
  La identidad nacional es el lazo simbólico que une a la población con el Estado.
```

### 24 — Componentes del Estado (Orden)

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["orden_logico", "elementos"]

respuesta_orden: ["Población", "Territorio", "Gobierno", "Identidad"]
tipo: ordenar
opciones_explicitas: ["Población", "Territorio", "Gobierno", "Identidad"]

enunciado: "Ordena los elementos que tradicionalmente se consideran necesarios para la consolidación de un Estado Nacional, desde el elemento humano hasta el elemento simbólico."

explicacion: |
  El orden lógico parte de la base humana (población), el espacio (territorio), la estructura de mando (gobierno) y el cohesión cultural (identidad).
```

### 25 — El rol del Gobierno

```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["gobierno", "soberania"]

variables:
  situacion: uno_de([["Un territorio sin una autoridad central que dicte leyes.", "Falta Gobierno"], ["Un pueblo con leyes pero sin un territorio asignado.", "Falta Territorio"], ["Una nación con identidad pero sin población real.", "Falta Población"]])

respuesta: situacion[1]
tipo: mc
opciones_explicitas: ["Falta Gobierno", "Falta Territorio", "Falta Población"]

enunciado: "Considera este escenario: {situacion[0]} ¿Qué elemento esencial del Estado está ausente?"

explicacion: |
  Sin un gobierno (autoridad política), no hay capacidad de ejercer soberanía ni de organizar a la población.
```
