# Química — Seguridad de laboratorio: pictogramas GHS, EPP (cuestionario, 20 preguntas VBLang)

> Tema: `QSAFE`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Identificación de pictograma

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["ghs", "pictogramas"]

variables:
  tabla: [["llama", "inflamable"], ["calavera", "toxico agudo"], ["corrosion", "corrosivo, quema tejido o metal"], ["signo de exclamacion", "irritante o dañino en menor grado"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["inflamable", "toxico agudo", "corrosivo, quema tejido o metal", "irritante o dañino en menor grado"]

enunciado: "El pictograma de {tabla[idx][0]} significa..."

explicacion: |
  El pictograma de {tabla[idx][0]} indica que la sustancia es {tabla[idx][1]}.
```

### 2 — Estándar GHS

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["ghs", "estandar"]

respuesta: verdadero
tipo: vf

enunciado: "El GHS es un estándar internacional para etiquetar sustancias químicas peligrosas con símbolos reconocibles sin importar el idioma."

explicacion: |
  Correcto. El Sistema Globalmente Armonizado estandariza la comunicación de peligros mundialmente.
```

### 3 — Pictograma de explosión

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["ghs", "explosivo"]

respuesta: falso
tipo: vf

enunciado: "El pictograma de una bomba explotando indica que la sustancia es inflamable, no explosiva."

explicacion: |
  Falso. Ese pictograma indica específicamente que la sustancia es explosiva.
```

### 4 — Peligro ambiental

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["ghs", "medio_ambiente"]

respuesta: "peligro para el ambiente"
tipo: mc
opciones_explicitas: ["peligro para el ambiente", "toxico agudo", "corrosivo", "inflamable"]

enunciado: "El pictograma de medio ambiente (pez y árbol muerto) indica:"

explicacion: |
  Indica peligro para el ambiente (toxicidad acuática, daño ecológico, etc.).
```

### 5 — Reconocimiento visual

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["ghs", "visual"]

respuesta: verdadero
tipo: vf

enunciado: "Los pictogramas GHS se reconocen de un vistazo sin depender de leer texto."

explicacion: |
  El objetivo de estos símbolos es la identificación rápida y visual del peligro.
```

### 6 — Uso de EPP

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "intermedio"
  tags: ["epp", "seguridad"]

variables:
  tabla: [["guantes", "contacto de la piel con sustancias corrosivas o toxicas"], ["gafas de seguridad", "salpicaduras en los ojos"], ["guardapolvo/bata", "salpicaduras en la ropa y piel"], ["campana extractora", "inhalacion de vapores toxicos"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["contacto de la piel con sustancias corrosivas o toxicas", "salpicaduras en los ojos", "salpicaduras en la ropa y piel", "inhalacion de vapores toxicos"]

enunciado: "¿De qué protege principalmente {tabla[idx][0]}?"

explicacion: |
  {tabla[idx][0]} protege de: {tabla[idx][1]}.
```

### 7 — Campana extractora

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["epp"]

respuesta: verdadero
tipo: vf

enunciado: "La campana extractora protege de la inhalación de vapores tóxicos."

explicacion: |
  Correcto. Evacúa vapores, gases y polvos hacia afuera, evitando la inhalación.
```

### 8 — Protección de los guantes

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["epp"]

respuesta: falso
tipo: vf

enunciado: "Los guantes protegen contra la inhalación de vapores."

explicacion: |
  Falso. Protegen las manos del contacto directo con sustancias, no la vía respiratoria.
```

### 9 — Cómo oler sustancias químicas

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["buenas_practicas"]

respuesta: verdadero
tipo: vf

enunciado: "Para oler una sustancia química, hay que abanicar el vapor hacia la nariz con la mano desde una distancia prudencial, sin acercar el recipiente directo."

explicacion: |
  Acercar el recipiente directo puede causar irritación o intoxicación por vapores concentrados.
```

### 10 — Pipeteo manual

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["pipeteo"]

respuesta: falso
tipo: vf

enunciado: "Si no hay pera de goma o propipeta disponible, se permite pipetear con la boca para asegurar la precisión del volumen."

explicacion: |
  Falso. Nunca se pipetea con la boca — riesgo de ingerir sustancias tóxicas o corrosivas.
```

### 11 — Dilución de ácidos

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "intermedio"
  tags: ["reacciones_exotermicas"]

respuesta: verdadero
tipo: vf

enunciado: "Al diluir un ácido concentrado, el procedimiento seguro es verter siempre el ácido sobre el agua, lentamente."

explicacion: |
  Correcto. El calor generado se disipa en el gran volumen de agua; al revés, la reacción puede salpicar ácido concentrado.
```

### 12 — Riesgos de la dilución inversa

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "intermedio"
  tags: ["reacciones_exotermicas"]

respuesta: falso
tipo: vf

enunciado: "Agregar agua a un ácido concentrado es una práctica segura, porque ayuda a que el ácido se diluya más rápido."

explicacion: |
  Falso. Genera una reacción exotérmica violenta que puede provocar ebullición instantánea y salpicaduras peligrosas.
```

### 13 — Documentación de seguridad

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["normativas"]

respuesta: "seguridad"
tipo: completar
respuestas_validas:
  - "seguridad"

enunciado: "Antes de manipular una sustancia química nueva, hay que leer siempre la hoja de ___ (MSDS/FDS)."

explicacion: |
  Esa hoja contiene información sobre toxicidad, reactividad, primeros auxilios y EPP necesario.
```

### 14 — Pictograma de comburente

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "intermedio"
  tags: ["pictogramas", "ghs"]

respuesta: "Llama sobre un círculo (Comburente)"
tipo: mc
opciones_explicitas: ["Llama simple (Inflamable)", "Llama sobre un círculo (Comburente)", "Corrosivo", "Bomba explotando (Explosivo)"]

enunciado: "Un pictograma que favorece la combustión de otros materiales, sin ser inflamable por sí mismo, es..."

explicacion: |
  El pictograma "comburente" (llama sobre círculo) indica sustancias que facilitan la combustión de otras, aunque ellas mismas no ardan.
```

### 15 — Peróxido de hidrógeno

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["sustancias", "comburente"]

respuesta: verdadero
tipo: vf

enunciado: "El peróxido de hidrógeno concentrado es un ejemplo de sustancia comburente."

explicacion: |
  Verdadero, es un fuerte agente oxidante que alimenta la combustión de otros materiales.
```

### 16 — Toxicidad del benceno

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "intermedio"
  tags: ["benceno", "cancerigeno"]

respuesta: verdadero
tipo: vf

enunciado: "El benceno tiene pictograma de peligro para la salud, porque está clasificado como cancerígeno."

explicacion: |
  Correcto, es un tóxico crónico clasificado como cancerígeno.
```

### 17 — Estandarización del diseño GHS

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["ghs", "normativa"]

respuesta: verdadero
tipo: vf

enunciado: "El diseño de los pictogramas GHS (rombo con borde rojo) es igual en todos los países que adoptan el sistema."

explicacion: |
  Correcto, es justamente el objetivo del estándar internacional.
```

### 18 — Elección de método según el peligro

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: "trabajar bajo la campana extractora"
tipo: mc
opciones_explicitas: ["trabajar bajo la campana extractora", "oler el frasco directamente", "abrirlo lejos de cualquier equipo de protección", "guardarlo sin etiqueta"]

enunciado: "Si un frasco tiene el pictograma de tóxico agudo (calavera) y libera vapores, ¿qué medida es la más adecuada al manipularlo?"

explicacion: |
  Ante riesgo de inhalación de un tóxico, hay que trabajar bajo campana extractora, que evacúa los vapores.
```

### 19 — Pictograma corrosivo vs. irritante

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "intermedio"
  tags: ["pictogramas", "comparacion"]

respuesta: falso
tipo: vf

enunciado: "El pictograma de corrosivo y el de irritante (signo de exclamación) significan exactamente lo mismo, sólo cambia el dibujo."

explicacion: |
  Falso. El corrosivo indica daño severo (quemaduras en piel/metal); el irritante indica un daño más leve — son niveles de peligro distintos.
```

### 20 — Por qué el ácido va al agua y no al revés

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "avanzado"
  tags: ["reacciones_exotermicas", "aplicacion"]

respuesta: "el gran volumen de agua absorbe y disipa el calor liberado de a poco"
tipo: mc
opciones_explicitas: ["el gran volumen de agua absorbe y disipa el calor liberado de a poco", "el ácido se vuelve inofensivo al tocar el agua", "no hay ninguna razón real, es sólo una costumbre", "el agua reacciona más lento que el ácido"]

enunciado: "¿Por qué es más seguro agregar ácido al agua (de a poco) en vez de agua al ácido?"

explicacion: |
  Al agregar poco a poco ácido a mucha agua, el calor liberado se reparte en todo ese volumen; al revés, el calor se concentra de golpe en poca agua y puede hervir violentamente, salpicando ácido.
```
