### 1 — Causa inmediata del estallido
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["casus-belli", "sarajevo"]
enunciado: "El asesinato de {{ uno_de([personaje_1, personaje_2 ]) }} en Sarajevo el 28 de junio de 1914 fue el detonante directo que activó el sistema de alianzas y llevó al estallido de la Primera Guerra Mundial."
variables:
  personaje_1: "Archiduque Francisco Fernando"
  personaje_2: "Francisco Fernando de Austria"
tipo: completar
respuesta: "Archiduque Francisco Fernando"
respuestas_validas:
  - "Archiduque Francisco Fernando"
  - "Archiduque Francisco Fernando de Austria"
  - "Francisco Fernando"
  - "Archiduque Francisco Fernando"
```

### 2 — Tratado de Versalles
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["paz", "versalles"]
enunciado: "¿Cuál fue el tratado de paz principal que puso fin oficialmente a la Primera Guerra Mundial entre las Potencias Aliadas y Alemania?"
opciones_explicitas:
  - "Tratado de Trianón"
  - "Tratado de Versalles"
  - "Tratado de Saint-Germain"
  - "Tratado de Neuilly"
respuesta: "Tratado de Versalles"
```

### 3 — Revolución de Febrero (Rusia)
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["febrero", "abdicacion"]
enunciado: "La Revolución de Febrero de 1917 en Rusia provocó la abdicación del último zar de la dinastía Romanov. ¿Quién fue este monarca?"
opciones_explicitas:
  - "Pedro I el Grande"
  - "Alejandro II"
  - "Nicolás II"
  - "Alejandro III"
respuesta: "Nicolás II"
```

### 4 — Bloqueo Naval
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["mar", "bloqueo"]
enunciado: "La estrategia naval británica consistió en un {{ uno_de([bloqueo_1, bloqueo_2 ]) }} de las costas alemanas para impedir la entrada de suministros y materias primas, debilitando gravemente la economía del Imperio Alemán."
variables:
  bloqueo_1: "bloqueo"
  bloqueo_2: "cerco"
tipo: completar
respuesta: "bloqueo"
respuestas_validas:
  - "bloqueo"
  - "cerco"
```

### 5 — Tratado de Brest-Litovsk
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["rusia", "paz", "bolchevique"]
enunciado: "La nueva gobierno bolchevique firmó el {{ uno_de([tratado_1, tratado_2 ]) }} con las Potencias Centrales en marzo de 1918, saliendo oficialmente de la guerra a costa de enormes pérdidas territoriales."
variables:
  tratado_1: "Tratado de Brest-Litovsk"
  tratado_2: "Paz de Brest-Litovsk"
tipo: completar
respuesta: "Tratado de Brest-Litovsk"
respuestas_validas:
  - "Tratado de Brest-Litovsk"
  - "Paz de Brest-Litovsk"
```

### 6 — Armisticio de 1918
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["armisticio", "compiene"]
enunciado: "El armisticio que detuvo los combates en el frente occidental se firmó en un vagón de ferrocarril en el bosque de Compiègne. ¿En qué mes de 1918 ocurrió?"
opciones_explicitas:
  - "Noviembre"
  - "Diciembre"
  - "Octubre"
  - "Septiembre"
respuesta: "Noviembre"
```

### 7 — Lenin y Octubre
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["octubre", "lenin"]
enunciado: "Fue el líder principal de la Revolución de Octubre de 1917 y el primer jefe de gobierno de la Rusia Soviética. ¿Quién fue?"
opciones_explicitas:
  - "León Trotsky"
  - "Iósif Stalin"
  - "Vladimir Lenin"
  - "Grigori Zinóviev"
respuesta: "Vladimir Lenin"
```

### 8 — Frente Oriental
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["frente", "rusia"]
enunciado: "A diferencia del frente occidental, caracterizado por la guerra de trincheras estática, el {{ uno_de([frente_1, frente_2 ]) }} fue más móvil y amplio, lo que facilitó la posterior ruptura del ejército ruso."
variables:
  frente_1: "frente oriental"
  frente_2: "frente ruso"
tipo: completar
respuesta: "frente oriental"
respuestas_validas:
  - "frente oriental"
  - "frente ruso"
```

### 9 — Submarinos U-Boat
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["submarino", "guerra_no_limitada"]
enunciado: "Alemania reanudó la guerra submarina sin restricciones en 1917, atacando barcos neutrales, lo que fue un factor clave para la entrada en la guerra de {{ uno_de([pais_1, pais_2 ]) }}."
variables:
  pais_1: "Estados Unidos"
  pais_2: "USA"
tipo: completar
respuesta: "Estados Unidos"
respuestas_validas:
  - "Estados Unidos"
  - "USA"
  - "Estados Unidos de América"
```

### 10 — Masacre de Armenia
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["genocidio", "imperio_otomano"]
enunciado: "Durante la Primera Guerra Mundial, el gobierno del Imperio Otomano llevó a cabo la deportación y masacre sistemática de su población {{ uno_de([grupo_1, grupo_2 ]) }}, considerada por muchos historiadores como el primer genocidio moderno."
variables:
  grupo_1: "armenia"
  grupo_2: "armenios"
tipo: completar
respuesta: "armenia"
respuestas_validas:
  - "armenia"
  - "armenios"
```

### 11 — Batalla de Verdún
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["verdun", "sangre"]
enunciado: "La batalla de Verdún, librada entre alemanes y franceses en 1916, es conocida por su {{ uno_de([caract_1, caract_2 ]) }} extrema, con cientos de miles de muertos y heridos sin cambios significativos en el frente."
variables:
  caract_1: "carnicería"
  caract_2: "sangría"
tipo: completar
respuesta: "carnicería"
respuestas_validas:
  - "carnicería"
  - "sangría"
  - "masacre"
```

### 12 — Trotsky y el Ejército Rojo
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["trotsky", "ejercito_rojo"]
enunciado: "{{ uno_de([nombre_1, nombre_2 ]) }} fue el comisario de Guerra que organizó y dirigió el Ejército Rojo durante la guerra civil rusa posterior a la revolución."
variables:
  nombre_1: "León Trotsky"
  nombre_2: "Leon Trotsky"
tipo: completar
respuesta: "León Trotsky"
respuestas_validas:
  - "León Trotsky"
  - "Leon Trotsky"
  - "Trotsky"
```

### 13 — Guerra de Trincheras
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["trincheras", "tactica"]
enunciado: "La característica táctica definitoria del frente occidental fue la guerra de {{ uno_de([tipo_1, tipo_2 ]) }}, donde los soldados vivían en fosos excavados en la tierra protegidos por alambre de espino."
variables:
  tipo_1: "trincheras"
  tipo_2: "trinchera"
tipo: completar
respuesta: "trincheras"
respuestas_validas:
  - "trincheras"
  - "trinchera"
```

### 14 — Revolución de Octubre (Fecha)
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["octubre", "fecha"]
enunciado: "La Revolución de Octubre en Rusia ocurrió según el calendario juliano en uso en Rusia en ese momento, pero corresponde al {{ uno_de([mes_1, mes_2 ]) }} de 1917 en el calendario gregoriano."
variables:
  mes_1: "noviembre"
  mes_2: "Noviembre"
tipo: completar
respuesta: "noviembre"
respuestas_validas:
  - "noviembre"
  - "Noviembre"
```

### 15 — Wilson y los Catorce Puntos
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["wilson", "paz"]
enunciado: "El presidente de Estados Unidos {{ uno_de([nombre_1, nombre_2 ]) }} presentó los \"Catorce Puntos\" como un programa de paz y base para la posterior creación de la Sociedad de Naciones."
variables:
  nombre_1: "Woodrow Wilson"
  nombre_2: "Woodrow"
tipo: completar
respuesta: "Woodrow Wilson"
respuestas_validas:
  - "Woodrow Wilson"
  - "Woodrow"
```

### 16 — Cañón Big Bertha
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["artilleria", "armas"]
enunciado: "Alemania utilizó artillería pesada de largo alcance, como los cañones {{ uno_de([modelo_1, modelo_2 ]) }}, para bombardear fortalezas belgas y francesas desde gran distancia."
variables:
  modelo_1: "Big Bertha"
  modelo_2: "Big Bertha"
tipo: completar
respuesta: "Big Bertha"
respuestas_validas:
  - "Big Bertha"
```

### 17 — Tratado de Saint-Germain
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["austria", "desmembramiento"]
enunciado: "El Tratado de Saint-Germain en 1919 disolvió el Imperio Austrohúngico y reconoció la independencia de {{ uno_de([pais_1, pais_2 ]) }}, entre otras nuevas naciones."
variables:
  pais_1: "Austria"
  pais_2: "austria"
tipo: completar
respuesta: "Austria"
respuestas_validas:
  - "Austria"
```

### 18 — Guerra Química
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["gas", "ypr"]
enunciado: "La primera gran utilización de gas venenoso en el campo de batalla por parte de Alemania ocurrió en la {{ uno_de([batalla_1, batalla_2 ]) }} de Ypres."
variables:
  batalla_1: "segunda batalla"
  batalla_2: "Segunda batalla"
tipo: completar
respuesta: "segunda batalla"
respuestas_validas:
  - "segunda batalla"
  - "Segunda batalla"
```

### 19 — Kolchak y los Blancos
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["guerra_civil", "almirante"]
enunciado: "Durante la guerra civil rusa, el almirante {{ uno_de([nombre_1, nombre_2 ]) }} lideró a las fuerzas blancas en Siberia contra los bolcheviques."
variables:
  nombre_1: "Kolchak"
  nombre_2: "Alexander Kolchak"
tipo: completar
respuesta: "Kolchak"
respuestas_validas:
  - "Kolchak"
  - "Alexander Kolchak"
```

### 20 — Armada de Alto Mar
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["escaperoal", "naval"]
enunciado: "La escuadra alemana del Alto Mar se autohundió en ___ en 1919 para evitar que la flota fuera repartida entre las potencias aliadas, un acto de desobediencia ordenado por sus propios oficiales."
tipo: completar
respuesta: "Scapa Flow"
respuestas_validas:
  - "Scapa Flow"
  - "scapa flow"
```

### 21 — Constitución de Weimar
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["weimar", "república"]
enunciado: "La República de Weimar, establecida tras la abdicación del káiser Guillermo II, fue la forma de gobierno de Alemania entre 1919 y 1933."
respuesta: verdadero
tipo: vf
```

### 22 — Lev Trotski y la Internacional
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["internacional", "tercera"]
enunciado: "Lenin y Trotsky impulsaron la creación de la {{ uno_de([int_1, int_2 ]) }}, también conocida como la Komintern, para promover la revolución mundial."
variables:
  int_1: "Tercera Internacional"
  int_2: "Comintern"
tipo: completar
respuesta: "Tercera Internacional"
respuestas_validas:
  - "Tercera Internacional"
  - "Comintern"
  - "Komintern"
```

### 23 — Batalla del Mar de Jutlandia
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["jutlandia", "naval"]
enunciado: "La única gran batalla naval entre las flotas británica y alemana durante la Primera Guerra Mundial ocurrió en el {{ uno_de([mar_1, mar_2 ]) }} del Norte."
variables:
  mar_1: "mar del Norte"
  mar_2: "Mar del Norte"
tipo: completar
respuesta: "mar del Norte"
respuestas_validas:
  - "mar del Norte"
  - "Mar del Norte"
```

### 24 — Masacre de la Plaza del Palacio
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["domingo_sangriento", "1905"]
enunciado: "El \"Domingo Sangriento\" de 1905, donde la guardia imperial disparó contra manifestantes pacíficos en San Petersburgo, fue un precursor clave de la revolución de 1917."
respuesta: verdadero
tipo: vf
```

### 25 — Tratado de Trianón
```yaml
metadata:
  materia: "historia_profunda"
  tema: "primera-guerra-mundial-y-revolucion-rusa"
  nivel: "avanzado"
  tags: ["hungria", "desmembramiento"]
enunciado: "El Tratado de Trianón en 1920 redujo drásticamente el territorio de {{ uno_de([pais_1, pais_2 ]) }}, creando el estado de Hungría moderna y cediendo territorios a Rumania, Checoslovaquia y Yugoslavia."
variables:
  pais_1: "Hungria"
  pais_2: "Hungría"
tipo: completar
respuesta: "Hungria"
respuestas_validas:
  - "Hungria"
  - "Hungría"
```