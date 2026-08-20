# Historia — guerra civil espanola 1936 1939 (cuestionario, 26 preguntas VBLang)

> Tema: `historia/guerra-civil-espanola-1936-1939`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

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

### 2 — pregunta 2

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

### 3 — pregunta 3

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

### 4 — pregunta 4

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

### 5 — pregunta 5

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

### 6 — pregunta 6

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

### 7 — pregunta 7

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

### 8 — pregunta 8

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

### 9 — pregunta 9

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

### 10 — pregunta 10

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

### 11 — pregunta 11

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

### 12 — pregunta 12

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

### 13 — pregunta 13

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

### 14 — pregunta 14

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

### 15 — pregunta 15

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

### 16 — pregunta 16

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

### 17 — pregunta 17

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

### 18 — pregunta 18

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

### 19 — pregunta 19

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

### 20 — pregunta 20

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

### 21 — pregunta 21

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

### 22 — pregunta 22

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

### 23 — pregunta 23

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

### 24 — pregunta 24

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

enunciado: "El estallido del conflicto fue resultado de décadas de qué fenómeno?"

explicacion: |
  Décadas de luchas por el poder y la identidad nacional precedieron al estallido.
```

### 25 — pregunta 25

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

### 26 — pregunta 26

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

enunciado: "La Guerra Civil Española marcó un qué crucial en la historia del siglo XX?"

explicacion: |
  Fue un punto de inflexión que prefiguró los conflictos ideológicos de la Segunda Guerra Mundial.
```
