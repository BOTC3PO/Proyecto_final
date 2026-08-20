# Economia — sectores economicos (cuestionario, 20 preguntas VBLang)

> Tema: `economia/sectores-economicos`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["sector_primario", "clasificacion"]

variables:
  actividad: uno_de(["agricultura", "ganadería", "pesca", "minería"])
  descripcion: |
    Si {actividad} == "agricultura" entonces "cultivo de plantas"
    elif {actividad} == "ganadería" entonces "cría de animales"
    elif {actividad} == "pesca" entonces "captura de peces"
    else "extracción de minerales"

respuesta: "sector_primario"
tipo: input

enunciado: "La actividad de {actividad}, que implica {descripcion}, se clasifica dentro del sector económico:"

explicacion: |
  El sector primario comprende las actividades que extraen recursos naturales directamente del medio ambiente sin transformarlos significativamente.
```

### 2 — pregunta 2

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["sector_secundario", "industria"]

variables:
  producto: uno_de(["automóvil", "camisa", "cemento"])
  proceso: uno_de(["ensamblaje", "tejido", "mezclado"])

respuesta: "sector_secundario"
tipo: input

enunciado: "La fabricación de un {producto} mediante el proceso de {proceso} corresponde al sector:"

explicacion: |
  El sector secundario transforma las materias primas en bienes manufacturados, agregando valor mediante la industria o la construcción.
```

### 3 — pregunta 3

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "avanzado"
  tags: ["evolucion", "historia_economica"]

variables:
  etapa: uno_de(["preindustrial", "industrial", "postindustrial"])
  sector_dominante: |
    si etapa == "preindustrial" entonces "primario"
    si etapa == "industrial" entonces "secundario"
    si etapa == "postindustrial" entonces "terciario"

respuesta: "{sector_dominante}"
tipo: input

enunciado: "En la etapa de {etapa}, el sector económico con mayor peso en el empleo y el PIB suele ser el sector {sector_dominante}."

explicacion: |
  Las economías evolucionan desde la dependencia del sector primario, pasando por la industrialización (secundario), hasta predominar los servicios (terciario) en etapas avanzadas.
```

### 4 — pregunta 4

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["argentina", "primario"]

variables:
  recurso: uno_de(["soja", "trigo", "carne", "petróleo"])

respuesta: "sector_primario"
tipo: input

enunciado: "La exportación de {recurso} es una actividad típica del sector económico:"

explicacion: |
  La producción y exportación de materias primas agrícolas o energéticas corresponde al sector primario, base de la economía argentina.
```

### 5 — pregunta 5

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "avanzado"
  tags: ["sector_cuaternario", "tecnologia"]

variables:
  actividad: uno_de(["investigación científica", "desarrollo de software", "consultoría estratégica"])

respuesta: "sector_cuaternario"
tipo: input

enunciado: "La actividad de {actividad} se clasifica tradicionalmente en el sector cuaternario o de conocimiento."

explicacion: |
  El sector cuaternario es una extensión del terciario que se enfoca en el conocimiento, la información y la tecnología, siendo clave en economías modernas.
```

### 6 — pregunta 6

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["sector_terciario", "ejemplos"]

variables:
  negocio: uno_de(["restaurante", "banco", "hospital", "empresa de transporte"])

respuesta: "sector_terciario"
tipo: input

enunciado: "Un {negocio} pertenece al sector económico:"

explicacion: |
  Los negocios que ofrecen servicios (comida, dinero, salud, movimiento) pertenecen al sector terciario.
```

### 7 — pregunta 7

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "avanzado"
  tags: ["desarrollo", "estructura_economica"]

variables:
  pais_tipo: uno_de(["desarrollado", "en desarrollo"])
  peso_terciario: |
    si pais_tipo == "desarrollado" entonces "mayor"
    si pais_tipo == "en desarrollo" entonces "menor"

respuesta: "sector_terciario"
tipo: input

enunciado: "En un país {pais_tipo}, el sector con mayor peso relativo en el PIB suele ser el sector {peso_terciario} (nota: completar con el nombre del sector que predomina)."

explicacion: |
  En economías desarrolladas, el sector terciario (y cuaternario) domina la estructura económica, mientras que en las en desarrollo el primario o secundario tienen mayor peso relativo.
```

### 8 — pregunta 8

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["transformacion", "secundario"]

variables:
  materia: uno_de(["leche", "caña de azúcar", "trigo"])
  producto: uno_de(["queso", "etanol", "harina"])

respuesta: "sector_secundario"
tipo: input

enunciado: "La transformación de {materia} en {producto} es una actividad del sector:"

explicacion: |
  La industrialización de productos primarios (leche a queso, caña a etanol) corresponde al sector secundario.
```

### 9 — pregunta 9

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["clasificacion", "ejercicios"]

variables:
  actividad: uno_de(["extracción de petróleo", "construcción de puentes", "enseñanza universitaria"])
  sector_correcto: |
    si actividad == "extracción de petróleo" entonces "primario"
    si actividad == "construcción de puentes" entonces "secundario"
    si actividad == "enseñanza universitaria" entonces "terciario"

respuesta: "{sector_correcto}"
tipo: input

enunciado: "La actividad '{actividad}' corresponde al sector:"

explicacion: |
  Se debe identificar si la actividad extrae recursos (primario), transforma/construye (secundario) o presta un servicio (terciario).
```

### 10 — pregunta 10

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["bienes_capital", "industria"]

variables:
  bien: uno_de(["maquinaria agrícola", "computadora industrial", "ladrillo"])

respuesta: "sector_secundario"
tipo: input

enunciado: "La fabricación de {bien} es una actividad del sector secundario, ya sea como bien de consumo o de capital."

explicacion: |
  El sector secundario produce tanto bienes de consumo final como bienes de capital necesarios para otras industrias.
```

### 11 — pregunta 11

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["definicion", "servicios"]

variables:
  concepto: "servicios"

respuesta: "sector_terciario"
tipo: input

enunciado: "El sector que se dedica a la prestación de {concepto} en lugar de la producción de bienes físicos es el:"

explicacion: |
  El sector terciario se define por la generación de servicios intangibles.
```

### 12 — pregunta 12

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["seguridad_alimentaria", "primario"]

variables:
  producto: uno_de(["granos", "carne", "leche"])

respuesta: "sector_primario"
tipo: input

enunciado: "La producción de {producto} es crucial para la seguridad alimentaria y pertenece al sector:"

explicacion: |
  La base de la alimentación proviene del sector primario (agricultura y ganadería).
```

### 13 — pregunta 13

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "avanzado"
  tags: ["cuaternario", "investigacion"]

variables:
  area: uno_de(["biotech", "finanzas algorítmicas", "consultoría ambiental"])

respuesta: "sector_cuaternario"
tipo: input

enunciado: "La actividad en el área de {area} se clasifica en el sector cuaternario."

explicacion: |
  El sector cuaternario engloba actividades basadas en el conocimiento especializado y la innovación.
```

### 14 — pregunta 14

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["empleo", "terciario"]

variables:
  pais: uno_de(["Argentina", "Alemania", "Japón"])
  sector_empleo: "terciario"

respuesta: "sector_terciario"
tipo: input

enunciado: "En la mayoría de las economías modernas, incluido {pais}, el sector que genera más empleo es el sector:"

explicacion: |
  La terciarización de la economía implica que la mayoría de la fuerza laboral se dedica a servicios.
```

### 15 — pregunta 15

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["minería", "primario"]

variables:
  mineral: uno_de(["cobre", "oro", "litio"])

respuesta: "sector_primario"
tipo: input

enunciado: "La extracción de {mineral} es una actividad del sector primario."

explicacion: |
  La minería es la extracción de recursos minerales del subsuelo, parte del sector primario.
```

### 16 — pregunta 16

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["construccion", "secundario"]

variables:
  obra: uno_de(["edificio", "carretera", "puente"])

respuesta: "sector_secundario"
tipo: input

enunciado: "La construcción de un {obra} pertenece al sector secundario."

explicacion: |
  La construcción es la actividad manufacturera que crea infraestructura y bienes inmuebles.
```

### 17 — pregunta 17

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["turismo", "terciario"]

variables:
  destino: uno_de(["Bariloche", "Mendoza", "Mar del Plata"])

respuesta: "sector_terciario"
tipo: input

enunciado: "El turismo en {destino} es una actividad económica del sector terciario."

explicacion: |
  El turismo implica servicios de alojamiento, transporte y entretenimiento, todos del sector terciario.
```

### 18 — pregunta 18

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "avanzado"
  tags: ["educacion", "cuaternario"]

variables:
  institucion: "universidad de investigación"

respuesta: "sector_cuaternario"
tipo: input

enunciado: "La generación de nuevo conocimiento en una {institucion} se asocia al sector cuaternario."

explicacion: |
  La educación superior e investigación básica aplicada es la base del sector cuaternario.
```

### 19 — pregunta 19

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["finanzas", "terciario"]

variables:
  servicio: "banca comercial"

respuesta: "sector_terciario"
tipo: input

enunciado: "La {servicio} es una actividad del sector terciario."

explicacion: |
  Los servicios financieros intermediarios pertenecen al sector terciario.
```

### 20 — pregunta 20

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["evolucion_economica", "historia"]

variables:
  etapa: uno_de(["preindustrial", "industrial", "postindustrial"])

respuesta: "primario"
tipo: completar

enunciado: "En las economías {etapa}, el sector primario suele tener el peso relativo más alto en el empleo y el PIB."

explicacion: |
  En las etapas preindustriales o en países en desarrollo, la economía depende fuertemente del sector primario. A medida que avanza el desarrollo, el peso relativo disminuye frente al secundario y terciario.
```
