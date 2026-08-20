# Biologia — quimiosintesis (cuestionario, 22 preguntas VBLang)

> Tema: `biologia/quimiosintesis`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["definicion", "organismos"]

respuesta: verdadero
tipo: vf

enunciado: "La quimiosíntesis es un proceso mediante el cual ciertos organismos producen materia orgánica utilizando la energía de reacciones químicas inorgánicas, en lugar de la luz solar."

explicacion: |
  La quimiosíntesis se define precisamente por el uso de energía química (oxidación de sustratos inorgánicos) para fijar carbono, a diferencia de la fotosíntesis que usa luz.
```

### 2 — pregunta 2

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["bacterias", "arqueas"]

respuesta: verdadero
tipo: vf

enunciado: "Las bacterias y las arqueas son los principales organismos capaces de realizar quimiosíntesis."

explicacion: |
  Estos procariotas son los productores primarios en ecosistemas quimiosintéticos. Los eucariotas no realizan este proceso directamente.
```

### 3 — pregunta 3

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["ecosistemas", "fuentes_hidrotermales"]

respuesta: verdadero
tipo: vf

enunciado: "Las fuentes hidrotermales del fondo oceánico son un ejemplo clásico de ecosistema donde predomina la quimiosíntesis."

explicacion: |
  En estas profundidades no llega la luz solar, por lo que la vida depende completamente de la energía química liberada por las bacterias quimiosintéticas.
```

### 4 — pregunta 4

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["ciclo_nitrogeno", "fertilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Las bacterias quimiosintéticas nitrificantes transforman el nitrógeno en formas que las plantas pueden absorber, contribuyendo a la fertilidad del suelo."

explicacion: |
  Al convertir amoníaco en nitrato, hacen el nitrógeno disponible para la absorción radicular por parte de las plantas.
```

### 5 — pregunta 5

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["calvin", "fijacion"]

respuesta: verdadero
tipo: vf

enunciado: "La fijación de carbono en la quimiosíntesis ocurre mediante un proceso similar al ciclo de Calvin utilizado en la fotosíntesis."

explicacion: |
  Ambas usan el ciclo de Calvin para incorporar CO2 en moléculas orgánicas, diferenciándose solo en la fuente de energía (ATP/NADPH de luz vs. de química).
```

### 6 — pregunta 6

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["ambientes", "oscuridad"]

respuesta: verdadero
tipo: vf

enunciado: "La quimiosíntesis permite la vida en ambientes donde la luz solar no llega."

explicacion: |
  Es fundamental en cuevas profundas, fondos oceánicos y subsuelo, demostrando la independencia del sol para la biosfera.
```

### 7 — pregunta 7

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["ciclos", "regulacion"]

respuesta: verdadero
tipo: vf

enunciado: "Las bacterias quimiosintéticas juegan un papel vital en la regulación de elementos como el nitrógeno, el azufre y el hierro."

explicacion: |
  Al oxidar estos elementos, los transforman entre sus diferentes estados de oxidación, manteniendo los ciclos biogeoquímicos en movimiento.
```

### 8 — pregunta 8

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["autotrofo", "independencia"]

respuesta: verdadero
tipo: vf

enunciado: "La quimiosíntesis demuestra que la energía química puede sostener ecosistemas completos de manera independiente del sol."

explicacion: |
  Es la prueba biológica de que la vida no requiere necesariamente la fotosíntesis para existir.
```

### 9 — pregunta 9

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["biodiversidad", "habitats"]

respuesta: verdadero
tipo: vf

enunciado: "Sin las bacterias quimiosintéticas, muchos hábitats profundos y aislados serían incapaces de sostener vida compleja."

explicacion: |
  Son la base trófica exclusiva en estos ambientes, permitiendo la existencia de gusanos tubícolas, crustáceos y otros organismos.
```

### 10 — pregunta 10

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["calvin", "mecanismo"]

respuesta: verdadero
tipo: vf

enunciado: "La fijación de carbono en la quimiosíntesis utiliza un mecanismo bioquímicamente similar al ciclo de Calvin de la fotosíntesis."

explicacion: |
  La enzima RuBisCO y el camino metabólico son esencialmente los mismos; la diferencia radica en la fuente de poder (ATP/NADPH).
```

### 11 — pregunta 11

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["global", "significado"]

respuesta: verdadero
tipo: vf

enunciado: "La quimiosíntesis es fundamental para la comprensión de la biodiversidad y los ciclos biogeoquímicos globales."

explicacion: |
  Contribuye a la fertilidad del suelo, la calidad del agua y la existencia de vida en condiciones extremas, impactando el planeta entero.
```

### 12 — pregunta 12

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["definicion", "organismos"]

variables:
  organismos: uno_de(["bacterias", "arqueas"])

respuesta: "bacterias y arqueas"
tipo: completar

enunciado: "La quimiosíntesis es un proceso llevado a cabo principalmente por {organismos} que producen su propio alimento."

explicacion: |
  A diferencia de los organismos fotosintéticos, las bacterias y arqueas quimiosintéticas utilizan energía química inorgánica para sintetizar materia orgánica.
```

### 13 — pregunta 13

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["energia", "comparacion"]

variables:
  fuente: uno_de(["luz solar", "reacciones químicas inorgánicas"])

respuesta: "reacciones químicas inorgánicas"
tipo: completar

enunciado: "Mientras la fotosíntesis usa luz solar, la quimiosíntesis obtiene energía de {fuente}."

explicacion: |
  La clave de la quimiosíntesis es la oxidación de compuestos inorgánicos (como sulfuro de hidrógeno o amoníaco) para obtener la energía necesaria para fijar el carbono.
```

### 14 — pregunta 14

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["ecologia", "productores"]

variables:
  rol: uno_de(["productores primarios", "descomponedores", "consumidores secundarios"])

respuesta: "productores primarios"
tipo: completar

enunciado: "En ecosistemas extremos sin luz, las bacterias quimiosintéticas actúan como {rol}."

explicacion: |
  Estas bacterias forman la base de la cadena alimentaria en hábitats como las fuentes hidrotermales, al igual que las plantas en ecosistemas terrestres.
```

### 15 — pregunta 15

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["sustratos", "azufre"]

variables:
  sustrato: uno_de(["sulfuro de hidrógeno", "amoníaco", "hierro ferroso"])

respuesta: "sulfuro de hidrógeno"
tipo: input

enunciado: "¿Qué compuesto oxidan las bacterias sulfurosas para obtener energía? (Escribe el nombre químico)"

explicacion: |
  Las bacterias sulfurosas oxidan el sulfuro de hidrógeno ($H_2S$) produciendo ácido sulfúrico como subproducto.
```

### 16 — pregunta 16

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["nitrificacion", "nitrogeno"]

variables:
  paso: random(1,2)

respuesta: "nitrito"
tipo: input

enunciado: "En la nitrificación, las bacterias oxidan amoníaco ($NH_3$) a {paso}. Si el paso es 2, responde 'nitrato'."

explicacion: |
  El primer paso de la nitrificación convierte amoníaco en nitrito ($NO_2^-$). El segundo paso convierte nitrito en nitrato ($NO_3^-$).
```

### 17 — pregunta 17

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["habitat", "hidrotermal"]

variables:
  ambiente: uno_de(["fuentes hidrotermales", "superficie del océano", "bosques tropicales"])

respuesta: "fuentes hidrotermales"
tipo: input

enunciado: "¿En qué tipo de ambiente se encuentra comúnmente la quimiosíntesis? (Escribe el nombre del ambiente)"

explicacion: |
  Las fuentes hidrotermales del fondo oceánico son el ejemplo clásico donde la luz solar no llega y la quimiosíntesis sostiene la vida.
```

### 18 — pregunta 18

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["ATP", "bioquimica"]

variables:
  mol: "ATP"

respuesta: "ATP"
tipo: input

enunciado: "La energía liberada en la oxidación inorgánica se almacena temporalmente en moléculas de {mol}."

explicacion: |
  Similar a la fotosíntesis, la energía química se convierte en ATP para ser utilizada en la fijación de carbono.
```

### 19 — pregunta 19

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["carbono", "comparacion"]

variables:
  sustrato_c: "dióxido de carbono"

respuesta: "dióxido de carbono"
tipo: input

enunciado: "Tanto la fotosíntesis como la quimiosíntesis utilizan {sustrato_c} como fuente de carbono."

explicacion: |
  Ambas procesos fijan el carbono inorgánico ($CO_2$) para producir materia orgánica, pero difieren en la fuente de energía.
```

### 20 — pregunta 20

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "avanzado"
  tags: ["ciclo", "calvin"]

variables:
  ciclo: "Calvin"

respuesta: "Calvin"
tipo: input

enunciado: "La fijación de carbono en bacterias quimiosintéticas ocurre mediante un mecanismo similar al {ciclo} de las plantas."

explicacion: |
  El ciclo de Calvin es utilizado para convertir $CO_2$ en glucosa, utilizando el ATP y NADPH generados por la oxidación inorgánica.
```

### 21 — pregunta 21

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["crecimiento", "comparacion"]

variables:
  tasa: uno_de(["rápida", "lenta"])

respuesta: "lenta"
tipo: input

enunciado: "Las comunidades quimiosintéticas suelen tener tasas de crecimiento {tasa} comparadas con las fotosintéticas."

explicacion: |
  La energía obtenida de la oxidación de compuestos inorgánicos es menor que la de la fotosíntesis, lo que resulta en crecimiento más lento.
```

### 22 — pregunta 22

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["ecologia", "base"]

variables:
  base: 1

respuesta: 1
tipo: input

enunciado: "En un ecosistema quimiosintético, ¿cuántos tipos de productores primarios existen típicamente (solo bacterias/quimiosíntesis)?"

explicacion: |
  En estos ecosistemas extremos, las bacterias quimiosintéticas son los únicos productores primarios (1 tipo principal).
```
