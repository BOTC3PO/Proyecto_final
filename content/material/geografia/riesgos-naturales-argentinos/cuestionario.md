# Geografia — riesgos naturales argentinos (cuestionario, 24 preguntas VBLang)

> Tema: `geografia/riesgos-naturales-argentinos`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["sequia", "clima"]

variables:
  region1: uno_de(["NOA", "Cuyo"])
  region2: uno_de(["NOA", "Cuyo"])

respuesta: "NOA y Cuyo"
tipo: input

enunciado: "Identifica las dos grandes regiones de Argentina donde la aridez es una característica estructural y la sequía afecta principalmente a la producción agropecuaria."

explicacion: |
  El NOA y Cuyo son regiones áridas por naturaleza, donde la sequía es un riesgo constante vinculado también a cambios climáticos globales.
```

### 2 — pregunta 2

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["granizo", "economia"]

variables:
  sector: uno_de(["agricultura", "ganadería"])

respuesta: "agricultura"
tipo: input

enunciado: "El granizo, asociado a las tormentas severas del norte, causa daños significativos principalmente al sector de {sector}."

explicacion: |
  El texto indica que el granizo puede causar daños significativos en la agricultura, sector vital para la economía nacional.
```

### 3 — pregunta 3

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["ciclones", "patagonia"]

variables:
  zona: uno_de(["Patagonia", "costa atlántica"])

respuesta: "Patagonia"
tipo: input

enunciado: "Los ciclones extratropicales generan lluvias torrenciales y vientos fuertes en el sur del país, especialmente en {zona} y la costa atlántica."

explicacion: |
  Los ciclones extratropicales influyen fuertemente en la Patagonia y la costa atlántica, afectando la navegación y la vida costera.
```

### 4 — pregunta 4

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["dinamica", "territorio"]

variables:
  estado: falso

respuesta: falso
tipo: vf

enunciado: "La geografía argentina es estática y no está sujeta a fuerzas tectónicas, atmosféricas o hidrológicas que interactúen con el espacio habitado."

explicacion: |
  Falso. La geografía argentina no es estática; está sujeta constantemente a fuerzas tectónicas, atmosféricas y hidrológicas.
```

### 5 — pregunta 5

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["planificacion", "gestion"]

variables:
  objetivo: uno_de(["reducir vulnerabilidad", "aumentar densidad"])

respuesta: "reducir vulnerabilidad"
tipo: input

enunciado: "El estudio de los riesgos naturales permite tomar decisiones informadas para {objetivo} social y económica, transformando el conocimiento geográfico en protección civil."

explicacion: |
  Comprender los riesgos permite reducir la vulnerabilidad social y económica mediante la planificación del territorio.
```

### 6 — pregunta 6

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "avanzado"
  tags: ["sismos", "magnitud"]

variables:
  factor1: "profundidad del hipocentro"
  factor2: "distancia al epicentro"

respuesta: "profundidad del hipocentro"
tipo: input

enunciado: "La magnitud de los efectos de un sismo depende de la {factor1} y de la distancia al epicentro, exigiendo normas antisísmicas estrictas."

explicacion: |
  La magnitud y los efectos dependen de factores como la profundidad del hipocentro y la distancia al epicentro.
```

### 7 — pregunta 7

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["ciclones", "comparacion"]

variables:
  intensidad: "menos intensos"

respuesta: "menos intensos"
tipo: input

enunciado: "Los ciclones extratropicales son {intensidad} que los huracanes tropicales, pero aún así generan lluvias torrenciales en el sur."

explicacion: |
  A diferencia de los huracanes, los ciclones extratropicales son menos intensos, pero peligrosos por sus lluvias y vientos en el sur.
```

### 8 — pregunta 8

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["vulnerabilidad", "gestion"]

variables:
  riesgo: uno_de(["tornados", "inundaciones"])

respuesta: "inundaciones"
tipo: input

enunciado: "Conocer dónde ocurren fenómenos como los tornados o las {riesgo} es fundamental para reducir la vulnerabilidad social y económica."

explicacion: |
  El conocimiento de la ubicación y causa de riesgos como inundaciones y tornados es clave para la reducción de vulnerabilidad.
```

### 9 — pregunta 9

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["sequia", "cambio_climatico"]

variables:
  causa: "cambios en los patrones climáticos globales"

respuesta: "cambios en los patrones climáticos globales"
tipo: completar

enunciado: "La intensificación de las sequías recientes se vincula a {causa}, poniendo en riesgo el acceso al agua."

explicacion: |
  La intensificación de la sequía no es solo natural, sino que está vinculada a cambios en los patrones climáticos globales.
```

### 10 — pregunta 10

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["tectonica", "placas"]

variables:
  placa: "Nazca"

respuesta: "Nazca"
tipo: input

enunciado: "La actividad sísmica en el occidente argentino se debe a la subducción de la placa {placa} bajo la placa Sudamericana."

explicacion: |
  La placa de Nazca se subduce bajo la placa Sudamericana, generando la actividad sísmica en el oeste argentino.
```

### 11 — pregunta 11

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["sismos", "ubicacion"]

variables:
  zona: uno_de(["occidente", "este"])

respuesta: "occidente"
tipo: input

enunciado: "La actividad sísmica es un riesgo permanente en el {zona} del país, debido a la dinámica de placas."

explicacion: |
  El occidente argentino es la zona de mayor riesgo sísmico debido a la subducción de la placa de Nazca.
```

### 12 — pregunta 12

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["tornados", "agricultura"]

variables:
  efecto: "daños significativos"

respuesta: "daños significativos"
tipo: input

enunciado: "El granizo asociado a tormentas severas puede causar {efecto} en la agricultura, un sector vital para la economía nacional."

explicacion: |
  Las tormentas severas en el norte generan granizo que causa daños significativos a los cultivos agrícolas.
```

### 13 — pregunta 13

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["tormentas", "atmosferica"]

variables:
  condicion: "inestabilidad atmosférica violenta"

respuesta: "inestabilidad atmosférica violenta"
tipo: completar

enunciado: "El choque de masas de aire genera una {condicion} que da lugar a tornados en el NEA."

explicacion: |
  El choque de masas de aire cálido y húmedo con frentes fríos crea inestabilidad atmosférica violenta.
```

### 14 — pregunta 14

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["inundaciones", "hidrologia"]

variables:
  riesgo: "inundaciones"

respuesta: "inundaciones"
tipo: input

enunciado: "Además de los sismos, las {riesgo} son un riesgo hidrológico importante que debe ser gestionado mediante la planificación territorial."

explicacion: |
  Las inundaciones son un riesgo hidrológico clave, junto con los sismos, que requiere planificación para su gestión.
```

### 15 — pregunta 15

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "avanzado"
  tags: ["sismos", "propagacion"]

variables:
  caracteristica: "no respetan fronteras"

respuesta: "no respetan fronteras"
tipo: input

enunciado: "Los sismos {caracteristica} provinciales, por lo que la gestión del riesgo debe ser interjurisdiccional."

explicacion: |
  Los sismos no respetan las fronteras provinciales, afectando áreas amplias independientemente de los límites administrativos.
```

### 16 — pregunta 16

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["sequia", "regiones"]

variables:
  region: uno_de(["NOA", "Cuyo"])

respuesta: "NOA"
tipo: input

enunciado: "La región del {region} presenta una aridez como característica estructural del clima, lo que la hace propensa a sequías."

explicacion: |
  El NOA y Cuyo son regiones con aridez estructural, lo que las hace vulnerables a la sequía.
```

### 17 — pregunta 17

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["gestion", "emergencias"]

variables:
  accion: "prepararse"

respuesta: "prepararse"
tipo: input

enunciado: "Al conocer dónde y por qué ocurren los fenómenos naturales, podemos tomar decisiones para {accion} ante emergencias."

explicacion: |
  El conocimiento geográfico permite tomar decisiones informadas para prepararse ante emergencias y reducir riesgos.
```

### 18 — pregunta 18

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["ciclones", "navegacion"]

variables:
  sector: "navegación"

respuesta: "navegación"
tipo: input

enunciado: "Los ciclones extratropicales influyen en la {sector} y la vida costera del sur del país."

explicacion: |
  Los ciclones en el sur afectan la navegación y la vida costera debido a sus lluvias y vientos fuertes.
```

### 19 — pregunta 19

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "avanzado"
  tags: ["tectonica", "subduccion"]

variables:
  placa_superior: "Sudamericana"
  placa_inferior: "Nazca"

respuesta: "Nazca"
tipo: input

enunciado: "La placa {placa_inferior} se subduce bajo la placa {placa_superior}, generando la sismicidad en el occidente."

explicacion: |
  La placa de Nazca se subduce bajo la placa Sudamericana, causando la actividad sísmica en el oeste argentino.
```

### 20 — pregunta 20

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["dimensiones", "clima"]

variables:
  dimension: "continentales"

respuesta: "continentales"
tipo: input

enunciado: "Argentina es un país de dimensiones {dimension} que atraviesa diversas zonas climáticas y geológicas."

explicacion: |
  Las dimensiones continentales de Argentina implican una gran variedad de zonas climáticas y geológicas expuestas a riesgos.
```

### 21 — pregunta 21

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["sostenibilidad", "planificacion"]

variables:
  objetivo: "desarrollo sostenible"

respuesta: "desarrollo sostenible"
tipo: input

enunciado: "Transformar el conocimiento geográfico en protección civil es fundamental para el {objetivo}."

explicacion: |
  La gestión de riesgos contribuye al desarrollo sostenible al proteger la población y el territorio.
```

### 22 — pregunta 22

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["sismos", "provincias"]

variables:
  prov1: uno_de(["Mendoza", "San Juan", "Catamarca"])
  prov2: uno_de(["Mendoza", "San Juan", "Catamarca"])

respuesta: "Mendoza"
tipo: input

enunciado: "Entre las provincias del NOA y Cuyo, {prov1} se encuentra en una zona de alta sismicidad."

explicacion: |
  Mendoza, San Juan y Catamarca son provincias del occidente con alta sismicidad por la subducción de la placa de Nazca.
```

### 23 — pregunta 23

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["tormentas", "NEA"]

variables:
  region: "NEA"

respuesta: "NEA"
tipo: input

enunciado: "En el {region}, los tornados y tormentas severas son frecuentes debido a la inestabilidad atmosférica."

explicacion: |
  El NEA y el norte de la Pampa son regiones con frecuente actividad de tornados y tormentas severas.
```

### 24 — pregunta 24

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["sequia", "agua"]

variables:
  recurso: "acceso al agua"

respuesta: "acceso al agua"
tipo: input

enunciado: "La intensificación de las sequías pone en riesgo el {recurso} y la producción agropecuaria en el NOA y Cuyo."

explicacion: |
  Las sequías intensificadas amenazan el acceso al agua y la producción agrícola en las regiones áridas del país.
```
