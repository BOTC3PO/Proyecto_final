# Geografia — mineria e hidrocarburos en argentina (cuestionario, 25 preguntas VBLang)

> Tema: `geografia/mineria-e-hidrocarburos-en-argentina`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "basico"
  tags: ["litio", "recursos_minerales", "noroeste"]

variables:
  provincias_litio: uno_de(["Jujuy", "Salta", "Catamarca"])

respuesta: "Jujuy, Salta y Catamarca"
tipo: completar

enunciado: "El 'Triángulo del Litio' argentino abarca territorios de las provincias de Jujuy, {provincias_litio} y Catamarca. ¿Cuáles son las tres provincias que conforman este eje estratégico?"

explicacion: |
  El Triángulo del Litio es una región geográfica que incluye partes de las provincias nordestinas de Jujuy, Salta y Catamarca, ricas en yacimientos de litio esenciales para la industria de baterías.
```

### 2 — pregunta 2

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["hidrocarburos", "vaca_muerta", "neuquen"]

variables:
  formacion: "Vaca Muerta"

respuesta: "Vaca Muerta"
tipo: completar

enunciado: "Aunque históricamente el Golfo San Jorge fue clave, hoy el epicentro de la extracción de petróleo y gas natural en Argentina es la formación geológica conocida como {formacion}."

explicacion: |
  Vaca Muerta, ubicada principalmente en Neuquén, se ha convertido en el principal polo de producción de hidrocarburos no convencionales del país.
```

### 3 — pregunta 3

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "basico"
  tags: ["santa_cruz", "carbón", "sur"]

variables:
  recurso_sc: "carbón"

respuesta: "carbón"
tipo: completar

enunciado: "En la provincia de Santa Cruz, ubicada en el sur del país, destaca una larga tradición en la extracción de {recurso_sc}, aunque su producción ha fluctuado con el tiempo."

explicacion: |
  Santa Cruz es conocida por sus yacimientos de carbón térmico y metalúrgico, especialmente en la zona de Río Turbio.
```

### 4 — pregunta 4

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["economia", "matriz_productiva"]

variables:
  sector_tradicional: "agro"

respuesta: "agro"
tipo: completar

enunciado: "Históricamente, la economía argentina ha dependido mucho del sector {sector_tradicional}, pero los recursos del subsuelo representan una oportunidad para diversificar la matriz productiva."

explicacion: |
  La minería y los hidrocarburos buscan reducir la dependencia histórica del agro y generar nuevas cadenas de valor industriales y exportadoras.
```

### 5 — pregunta 5

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "basico"
  tags: ["distribucion", "noroeste", "sur"]

variables:
  region_minera: "noroeste"

respuesta: "noroeste"
tipo: completar

enunciado: "La actividad minera en Argentina se distribuye de manera desigual, concentrándose principalmente en las provincias del {region_minera} y del sur."

explicacion: |
  El noroeste (Jujuy, Salta, Catamarca, etc.) y el sur (Santa Cruz) son los polos mineros principales, junto con Mendoza y San Juan.
```

### 6 — pregunta 6

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "basico"
  tags: ["oro", "plata", "noroeste"]

variables:
  metal1: "oro"
  metal2: "plata"

respuesta: "oro y plata"
tipo: completar

enunciado: "En el noroeste argentino, destaca la producción de metales preciosos como el {metal1} y el {metal2}."

explicacion: |
  Las provincias del NOA son históricamente productoras de oro y plata, además de litio y otros minerales.
```

### 7 — pregunta 7

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["golfo_san_jorge", "historia"]

variables:
  region_historica: "Golfo San Jorge"

respuesta: "Golfo San Jorge"
tipo: completar

enunciado: "Antes del auge de Vaca Muerta, la producción de hidrocarburos se concentraba tradicionalmente en el {region_historica} y en el norte antiguo."

explicacion: |
  El Golfo San Jorge, en Chubut y Santa Cruz, fue el centro histórico de la industria petrolera argentina.
```

### 8 — pregunta 8

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["minería_no_metálica", "impacto_ambiental"]

variables:
  impacto: "menor"

respuesta: "menor"
tipo: completar

enunciado: "La minería no metálica o industrial, que extrae materiales como sal o yeso, suele tener un impacto ambiental relativo {impacto} comparada con la minería metálica, aunque requiere gestión cuidadosa."

explicacion: |
  La teoría indica que la minería no metálica suele tener un menor impacto ambiental relativo, pero aún así exige cuidado con el agua y el suelo.
```

### 9 — pregunta 9

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["vaca_muerta", "neuquen"]

variables:
  provincia_vm: "Neuquén"

respuesta: "Neuquén"
tipo: completar

enunciado: "La formación de Vaca Muerta está ubicada principalmente en el noroeste de la provincia de {provincia_vm}."

explicacion: |
  Vaca Muerta se extiende principalmente por el noroeste de Neuquén, con extensiones en Río Negro.
```

### 10 — pregunta 10

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["litio", "baterías", "transición_energética"]

variables:
  uso_litio: "baterías"

respuesta: "baterías"
tipo: completar

enunciado: "El litio es vital a nivel mundial debido a la demanda de este metal para la fabricación de {uso_litio} y la transición energética global."

explicacion: |
  El litio es un componente clave en las baterías recargables para vehículos eléctricos y almacenamiento de energía.
```

### 11 — pregunta 11

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["economía", "empleo"]

variables:
  sector_vinculado: "transporte"

respuesta: "transporte"
tipo: completar

enunciado: "La minería no solo genera empleo directo, sino que también impulsa cadenas de valor vinculadas al {sector_vinculado}, la manufactura y la exportación."

explicacion: |
  La extracción de recursos requiere logística, transporte de carga y servicios conexos.
```

### 12 — pregunta 12

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["clasificación", "metálica", "no_metálica"]

variables:
  tipo1: "metálica"
  tipo2: "no metálica"

respuesta: "metálica"
tipo: completar

enunciado: "La minería en Argentina se divide en dos tipos: la minería {tipo1}, que busca obtener metales como cobre o zinc, y la minería no metálica."

explicacion: |
  La distinción fundamental es entre la obtención de metales (metálica) y materiales industriales/construcción (no metálica).
```

### 13 — pregunta 13

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "avanzado"
  tags: ["estrategia", "inserción_global"]

variables:
  objetivo: "inserción"

respuesta: "inserción"
tipo: completar

enunciado: "Los recursos del subsuelo son una oportunidad clave para el desarrollo industrial y la {objetivo} en los mercados globales."

explicacion: |
  La teoría destaca que estos recursos permiten a Argentina insertarse mejor en la economía global.
```

### 14 — pregunta 14

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["hidrocarburos", "salta", "historia"]

variables:
  region_norte: "norte"

respuesta: "norte"
tipo: completar

enunciado: "Históricamente, la producción de hidrocarburos se concentraba en el Golfo San Jorge y en el {region_norte} (Salta y la cuenca Neuquina convencional)."

explicacion: |
  Antes de Vaca Muerta, el norte argentino (Salta/Jujuy, cuenca del Noroeste — Aguaray, Campo Durán) tenía actividad petrolera significativa. (Tucumán, en cambio, no tiene historia petrolera relevante — su economía se asocia al azúcar, no a hidrocarburos.)
```

### 15 — pregunta 15

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "avanzado"
  tags: ["ambiental", "agua", "gestión"]

variables:
  recurso_clave: "agua"

respuesta: "agua"
tipo: completar

enunciado: "Tanto la minería metálica como la no metálica requieren una gestión cuidadosa del {recurso_clave} y del suelo."

explicacion: |
  El uso y contaminación del agua es un desafío ambiental central en la actividad minera.
```

### 16 — pregunta 16

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "basico"
  tags: ["carbón", "santa_cruz"]

variables:
  combustible: "carbón"

respuesta: "carbón"
tipo: completar

enunciado: "En el sur de Argentina, la provincia de Santa Cruz tiene tradición en la extracción de {combustible}."

explicacion: |
  El carbón es el principal recurso minero histórico de Santa Cruz.
```

### 17 — pregunta 17

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["economía", "diversificación"]

variables:
  matriz: "productiva"

respuesta: "productiva"
tipo: completar

enunciado: "La importancia de la minería y los hidrocarburos radica en su capacidad para diversificar la matriz {matriz} del país."

explicacion: |
  La teoría enfatiza la diversificación de la matriz productiva como un beneficio estratégico.
```

### 18 — pregunta 18

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "basico"
  tags: ["mendoza", "yacimientos"]

variables:
  metal_mz: "oro"

respuesta: "oro"
tipo: completar

enunciado: "Mendoza cuenta con yacimientos de {metal_mz} y plata de importancia histórica."

explicacion: |
  Mendoza tiene una larga historia de minería de oro y plata.
```

### 19 — pregunta 19

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["vaca_muerta", "ri Negro"]

variables:
  provincia_vm2: "Río Negro"

respuesta: "Río Negro"
tipo: completar

enunciado: "La formación de Vaca Muerta se extiende ha {provincia_vm2}, además de Neuquén."

explicacion: |
  Vaca Muerta es una formación geológica transfronteriza entre Neuquén y Río Negro.
```

### 20 — pregunta 20

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "basico"
  tags: ["litio", "jujuy"]

variables:
  provincia_litio1: "Jujuy"

respuesta: "Jujuy"
tipo: completar

enunciado: "El 'Triángulo del Litio' incluye partes de {provincia_litio1}, Salta y Catamarca."

explicacion: |
  Jujuy es una de las tres provincias fundamentales del Triángulo del Litio.
```

### 21 — pregunta 21

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["ambiental", "minería_no_metálica"]

variables:
  impacto: "menor"

respuesta: "menor"
tipo: completar

enunciado: "La minería no metálica suele tener un impacto ambiental relativo {impacto} que la metálica."

explicacion: |
  Según la teoría, la minería no metálica tiene un impacto relativo menor, aunque no nulo.
```

### 22 — pregunta 22

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "basico"
  tags: ["hidrocarburos", "chubut"]

variables:
  provincia_gs: "Chubut"

respuesta: "Chubut"
tipo: completar

enunciado: "Históricamente, el Golfo San Jorge abarcaba la producción de hidrocarburos en Chubut y {provincia_gs}."

explicacion: |
  El Golfo San Jorge incluye áreas de Chubut y Santa Cruz.
```

### 23 — pregunta 23

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["minerales", "industriales"]

variables:
  mineral: "litio"

respuesta: "litio"
tipo: completar

enunciado: "En el noroeste, destaca la producción de minerales industriales como el {mineral}."

explicacion: |
  El texto clasifica al litio como mineral industrial en el contexto de los salares nordestinos.
```

### 24 — pregunta 24

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["desarrollo", "industria"]

variables:
  sector: "industrial"

respuesta: "industrial"
tipo: completar

enunciado: "Los recursos del subsuelo representan una oportunidad clave para el desarrollo {sector} del país."

explicacion: |
  La teoría vincula los recursos del subsuelo con el desarrollo industrial.
```

### 25 — pregunta 25

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "avanzado"
  tags: ["espacio_geográfico", "organización"]

variables:
  espacio: "geográfico"

respuesta: "geográfico"
tipo: completar

enunciado: "Comprender dónde se encuentran los recursos es esencial para entender la organización del espacio {espacio} nacional."

explicacion: |
  La distribución de la minería y hidrocarburos moldea la organización del espacio geográfico argentino.
```
