# Biología — Organismos transgénicos y bioética (cuestionario, 23 preguntas VBLang)

> Tema: `BIOTEC2`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 6 lotes concurrentes.
> Corregido a mano. Sin bugs funcionales esta tanda.

---

### 1 — Definición de transgénico

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["genetica", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "Un organismo transgénico tiene en su ADN un gen de otra especie, insertado artificialmente."

explicacion: |
  Correcto, mediante ingeniería genética.
```

### 2 — Sigla OGM

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["siglas"]

respuesta: verdadero
tipo: vf

enunciado: "La sigla OGM significa Organismo Genéticamente Modificado."

explicacion: |
  Correcto, es el término técnico general.
```

### 3 — Transferencia natural de genes

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["genetica"]

respuesta: falso
tipo: vf

enunciado: "La transferencia de genes entre especies muy distintas ocurre naturalmente todo el tiempo, sin intervención humana."

explicacion: |
  Falso. Es extremadamente rara entre especies complejas muy distintas, aunque existen mecanismos naturales de transferencia horizontal en bacterias.
```

### 4 — Terminología de organismos

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "transgenico"
tipo: completar
respuestas_validas:
  - "transgenico"

enunciado: "Un organismo con un gen de otra especie insertado se llama organismo ___."

explicacion: |
  Se llama transgénico.
```

### 5 — Características de organismos transgénicos

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["biotecnologia", "ejemplos"]

variables:
  datos: [["soja resistente a herbicidas", "tiene un gen bacteriano que la hace tolerante a un herbicida"], ["maiz Bt", "tiene un gen bacteriano que fabrica una proteina toxica para ciertos insectos"], ["arroz dorado", "modificado para producir betacaroteno, precursor de vitamina A"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["tiene un gen bacteriano que la hace tolerante a un herbicida", "tiene un gen bacteriano que fabrica una proteina toxica para ciertos insectos", "modificado para producir betacaroteno, precursor de vitamina A"]

enunciado: "¿Cuál es la característica principal de: {datos[idx][0]}?"

explicacion: |
  {datos[idx][0]}: {datos[idx][1]}.
```

### 6 — El maíz Bt y la fumigación

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["maiz_bt"]

respuesta: verdadero
tipo: vf

enunciado: "El maíz Bt reduce la necesidad de fumigar con insecticida, porque el mismo maíz fabrica una toxina contra ciertas plagas."

explicacion: |
  Correcto.
```

### 7 — Objetivo del arroz dorado

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["arroz_dorado"]

respuesta: verdadero
tipo: vf

enunciado: "El arroz dorado busca reducir la deficiencia de vitamina A en zonas donde el arroz es alimento base."

explicacion: |
  Correcto.
```

### 8 — Rendimiento de cultivos

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["argumentos_favor"]

respuesta: verdadero
tipo: vf

enunciado: "Un argumento a favor de los transgénicos es el mayor rendimiento de cultivo, con menos pérdida por plagas o malezas."

explicacion: |
  Correcto, ese es uno de los argumentos técnico-económicos.
```

### 9 — Maíz Bt e insecticidas

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["argumentos_favor"]

respuesta: verdadero
tipo: vf

enunciado: "El maíz Bt es un ejemplo de menos uso de insecticidas gracias a la modificación genética."

explicacion: |
  Correcto.
```

### 10 — Arroz dorado y nutrición

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["argumentos_favor"]

respuesta: verdadero
tipo: vf

enunciado: "El arroz dorado es un ejemplo de fortificar alimentos contra una deficiencia nutricional específica."

explicacion: |
  Correcto.
```

### 11 — Existencia de argumentos a favor

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["debate"]

respuesta: falso
tipo: vf

enunciado: "No existe ningún argumento a favor de los transgénicos, sólo argumentos en contra."

explicacion: |
  Falso, hay argumentos de ambos lados.
```

### 12 — Impacto en la biodiversidad

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["argumentos_contra"]

respuesta: verdadero
tipo: vf

enunciado: "Una preocupación sobre los transgénicos es el posible impacto en la biodiversidad (cruzamiento con especies silvestres)."

explicacion: |
  Correcto, es una preocupación ecológica real.
```

### 13 — Mercado de semillas

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["argumentos_contra"]

respuesta: verdadero
tipo: vf

enunciado: "Otra preocupación es la concentración del mercado de semillas en pocas empresas."

explicacion: |
  Correcto, por patentes y propiedad intelectual.
```

### 14 — Incertidumbre científica

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["argumentos_contra"]

respuesta: verdadero
tipo: vf

enunciado: "Hay incertidumbre sobre efectos de largo plazo de algunos transgénicos, todavía en discusión científica."

explicacion: |
  Correcto, requiere monitoreo continuo.
```

### 15 — Consenso científico total

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["debate"]

respuesta: falso
tipo: vf

enunciado: "Todos los científicos están completamente de acuerdo en todos los aspectos de los transgénicos, sin ningún debate."

explicacion: |
  Falso, hay debate científico y social real sobre regulación e impactos.
```

### 16 — Viabilidad técnica ya resuelta

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La pregunta 'se puede hacer un transgénico' técnicamente ya está resuelta hace décadas."

explicacion: |
  Correcto, la capacidad técnica es una realidad consolidada.
```

### 17 — El núcleo del debate bioético

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["bioetica"]

respuesta: verdadero
tipo: vf

enunciado: "La pregunta bioética es distinta de la técnica: 'se debería, y bajo qué condiciones'."

explicacion: |
  Correcto, va del "poder" técnico al "deber" moral.
```

### 18 — Corrientes éticas y resultados

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["etica"]

respuesta: "utilitarismo"
tipo: mc
opciones_explicitas: ["utilitarismo", "deontologia", "etica de la virtud", "contractualismo"]

enunciado: "¿Qué corriente ética pregunta si el resultado neto es positivo?"

explicacion: |
  El utilitarismo evalúa el resultado neto de bienestar.
```

### 19 — La perspectiva deontológica

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "avanzado"
  tags: ["etica"]

respuesta: verdadero
tipo: vf

enunciado: "La deontología pregunta si hay un deber o derecho que se viola, independientemente del resultado."

explicacion: |
  Correcto, se centra en la acción, no en el resultado.
```

### 20 — Corriente ética y su pregunta central

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["etica"]

variables:
  escenario: [["utilitarismo", "el resultado neto es positivo?"], ["deontologia", "hay un deber o derecho que se viola?"], ["etica de la virtud", "que haria una persona virtuosa?"], ["contractualismo", "a que acordarian personas racionales en un contrato justo?"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["el resultado neto es positivo?", "hay un deber o derecho que se viola?", "que haria una persona virtuosa?", "a que acordarian personas racionales en un contrato justo?"]

enunciado: "¿Cuál es la pregunta central de la corriente {escenario[idx][0]}?"

explicacion: |
  {escenario[idx][0]} pregunta: {escenario[idx][1]}.
```

### 21 — Definición de transgénicos (aplicación de técnicas)

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["genetica"]

respuesta: verdadero
tipo: vf

enunciado: "Los transgénicos son la aplicación práctica del ADN recombinante y la tecnología CRISPR."

explicacion: |
  Correcto — ver ../biotecnologia-pcr-crispr/.
```

### 22 — Naturaleza del debate bioético

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["bioetica"]

respuesta: falso
tipo: vf

enunciado: "El debate bioético sobre transgénicos se resuelve completamente con datos técnicos, sin necesitar ninguna corriente filosófica."

explicacion: |
  Falso. Involucra juicios de valor, no sólo ciencia.
```

### 23 — Pluralismo en la bioética

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["bioetica"]

respuesta: verdadero
tipo: vf

enunciado: "Distintas personas pueden llegar a distintas conclusiones sobre los transgénicos según qué corriente ética prioricen."

explicacion: |
  Correcto, distintos criterios de "bueno" o "justo" dan conclusiones distintas.
```
