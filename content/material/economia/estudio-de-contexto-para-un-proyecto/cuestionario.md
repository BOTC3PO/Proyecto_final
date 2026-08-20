# Economia — estudio de contexto para un proyecto (cuestionario, 26 preguntas VBLang)

> Tema: `economia/estudio-de-contexto-para-un-proyecto`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["comparacion", "niveles"]

respuesta: verdadero
tipo: vf

enunciado: "El nivel local se refiere al entorno inmediato y directo (normativa municipal, barrio), mientras que el nivel regional abarca un ámbito más amplio como una provincia o factores macroeconómicos."

explicacion: |
  Correcto. El nivel local es el microentorno inmediato, y el regional es el macroentorno que influye de manera más general.
```

### 2 — pregunta 2

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["macroentorno", "control"]

respuesta: falso
tipo: vf

enunciado: "Los factores del entorno regional, como la tasa de cambio o la inflación, son controlables directamente por la organización mediante sus decisiones operativas."

explicacion: |
  Falso. Los factores del macroentorno (regional) no son controlables por la organización, solo condicionan su operación.
```

### 3 — pregunta 3

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["definicion", "microentorno", "macroentorno"]

variables:
  nivel: uno_de(["local", "regional"])

respuesta: "entorno"
tipo: completar

enunciado: "El estudio de contexto analiza el {nivel} en el que se desarrolla una organización para identificar oportunidades y amenazas."

explicacion: |
  El estudio de contexto se enfoca en analizar el entorno (local o regional) para entender las condiciones externas que afectan a la organización.
```

### 4 — pregunta 4

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["microentorno", "actores"]

variables:
  actor: uno_de(["clientes", "proveedores", "competidores"])

respuesta: "{actor}"
tipo: input

enunciado: "Menciona un actor clave del microentorno que define la viabilidad del producto o servicio: {actor}."

explicacion: |
  Los clientes, proveedores y competidores son los tres pilares del microentorno según la teoría presentada.
```

### 5 — pregunta 5

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["macroentorno", "herramientas", "pest"]

variables:
  siglas: uno_de(["PEST", "FODA", "SWOT"])

respuesta: "PEST"
tipo: input

enunciado: "¿Qué herramienta se utiliza comúnmente para analizar el entorno regional considerando factores Políticos, Económicos, Sociales y Tecnológicos? {siglas}."

explicacion: |
  El análisis PEST es la herramienta estándar para el macroentorno. FODA/SWOT es más general para la estrategia interna/externa combinada.
```

### 6 — pregunta 6

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "avanzado"
  tags: ["macroentorno", "argentina", "inflacion"]

variables:
  factor: uno_de(["tasa de cambio", "inflación", "empleo"])

respuesta: "inflación"
tipo: input

enunciado: "En el contexto argentino, las fluctuaciones en {factor} son un factor macroeconómico crítico que condiciona la operación de las organizaciones."

explicacion: |
  La inflación y la tasa de cambio son factores clave del macroentorno en Argentina que afectan costos y precios.
```

### 7 — pregunta 7

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["importancia", "estrategia"]

variables:
  riesgo: uno_de(["cimientos inestables", "errores de cálculo", "falta de visión"])

respuesta: "cimientos inestables"
tipo: completar

enunciado: "Sin un diagnóstico previo del contexto, las estrategias se construyen sobre {riesgo}."

explicacion: |
  El texto enfatiza que sin el estudio de contexto, las estrategias carecen de base real y solidez.
```

### 8 — pregunta 8

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["oportunidades", "amenazas"]

variables:
  tipo_factor: uno_de(["oportunidades", "amenazas"])

respuesta: "amenazas"
tipo: input

enunciado: "El estudio de contexto permite identificar {tipo_factor} que podrían poner en riesgo el proyecto."

explicacion: |
  El objetivo dual del análisis es encontrar oportunidades de crecimiento y amenazas potenciales.
```

### 9 — pregunta 9

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "geografia"]

variables:
  factor: uno_de(["accesibilidad", "mano de obra", "cultura"])

respuesta: "accesibilidad"
tipo: input

enunciado: "La {factor} a una zona comercial es un determinante clave en el análisis del entorno local."

explicacion: |
  La accesibilidad física es un elemento crítico del microentorno que afecta la llegada de clientes y proveedores.
```

### 10 — pregunta 10

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["microentorno", "cultura"]

variables:
  elemento: uno_de(["cultura vecinal", "normativa municipal", "infraestructura"])

respuesta: "cultura vecinal"
tipo: input

enunciado: "La {elemento} puede influir en el éxito del proyecto al definir la aceptación social inmediata."

explicacion: |
  La cultura local es parte del microentorno y afecta cómo la comunidad recibe el proyecto.
```

### 11 — pregunta 11

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "legal"]

variables:
  ambito: uno_de(["municipal", "provincial", "nacional"])

respuesta: "municipal"
tipo: input

enunciado: "La normativa {ambito} es parte del entorno local que la organización debe cumplir diariamente."

explicacion: |
  Las leyes y regulaciones locales son parte del microentorno inmediato.
```

### 12 — pregunta 12

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "proveedores"]

variables:
  impacto: uno_de(["costos", "calidad", "innovacion"])

respuesta: "costos"
tipo: input

enunciado: "La confiabilidad y los {impacto} de los proveedores impactan directamente en la cadena de valor."

explicacion: |
  Los proveedores afectan tanto el costo final como la calidad del producto/servicio.
```

### 13 — pregunta 13

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "competencia"]

variables:
  medio: uno_de(["precios", "calidad", "innovacion"])

respuesta: "innovacion"
tipo: input

enunciado: "La presencia de competidores obliga a diferenciarse mediante {medio}, entre otros factores."

explicacion: |
  La competencia fuerza a la organización a buscar ventajas competitivas como innovación, precio o calidad.
```

### 14 — pregunta 14

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "avanzado"
  tags: ["macroentorno", "finanzas"]

variables:
  variable: uno_de(["tasa de cambio", "inflación", "PIB"])

respuesta: "tasa de cambio"
tipo: input

enunciado: "Las fluctuaciones en la {variable} son un ejemplo de factor macroeconómico en Argentina."

explicacion: |
  La tasa de cambio es un indicador clave del macroentorno económico argentino.
```

### 15 — pregunta 15

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["microentorno", "clientes"]

variables:
  actor: uno_de(["clientes"])

respuesta: "clientes"
tipo: input

enunciado: "La satisfacción y comportamiento de los {actor} definen la viabilidad del producto o servicio."

explicacion: |
  Sin clientes satisfechos, el producto no es viable, independientemente de otros factores.
```

### 16 — pregunta 16

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["estrategia", "riesgo"]

variables:
  consecuencia: uno_de(["fracaso", "éxito", "estabilidad"])

respuesta: "fracaso"
tipo: input

enunciado: "Ignorar las condiciones locales corre el riesgo de llevar al {consecuencia} del proyecto."

explicacion: |
  El texto advierte que ignorar el contexto local puede llevar al fracaso por falta de adaptación.
```

### 17 — pregunta 17

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["planificacion", "recursos"]

variables:
  accion: uno_de(["priorizar", "desperdiciar", "ignorar"])

respuesta: "priorizar"
tipo: input

enunciado: "El análisis de niveles ayuda a {accion} los recursos de manera eficiente."

explicacion: |
  Entender el contexto permite asignar recursos donde realmente importan.
```

### 18 — pregunta 18

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "recursos humanos"]

variables:
  disponibilidad: uno_de(["disponibilidad", "costo", "ubicacion"])

respuesta: "disponibilidad"
tipo: input

enunciado: "La {disponibilidad} de mano de obra calificada en la ciudad es un factor local determinante."

explicacion: |
  La oferta de talento local es parte del microentorno y afecta la capacidad operativa.
```

### 19 — pregunta 19

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["herramientas", "pest"]

variables:
  componente: uno_de(["Político", "Económico", "Social", "Tecnológico"])

respuesta: "Político"
tipo: input

enunciado: "En el análisis PEST, la 'P' se refiere al factor {componente}."

explicacion: |
  PEST: Político, Económico, Social, Tecnológico.
```

### 20 — pregunta 20

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "avanzado"
  tags: ["macroentorno", "mercado"]

variables:
  factor: uno_de(["factores macroeconómicos", "factores microeconómicos"])

respuesta: "factores macroeconómicos"
tipo: input

enunciado: "En el nivel regional, los {factor} influyen en la demanda y la oferta de manera general."

explicacion: |
  Los factores macroeconómicos afectan el mercado en su conjunto, no solo a una empresa.
```

### 21 — pregunta 21

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["microentorno", "adaptacion"]

variables:
  riesgo: uno_de(["riesgo", "oportunidad", "ventaja"])

respuesta: "riesgo"
tipo: input

enunciado: "No adaptarse a las necesidades específicas de la comunidad inmediata es un {riesgo}."

explicacion: |
  La adaptación local es crucial para evitar riesgos de rechazo o fracaso.
```

### 22 — pregunta 22

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "infraestructura"]

variables:
  elemento: uno_de(["infraestructura", "normativa", "cultura"])

respuesta: "infraestructura"
tipo: input

enunciado: "La {elemento} disponible juega un papel determinante en el entorno local."

explicacion: |
  La infraestructura (transporte, servicios) es parte del entorno físico local.
```

### 23 — pregunta 23

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["vision", "mision", "contexto"]

variables:
  concepto: uno_de(["visión", "misión", "estrategia"])

respuesta: "visión"
tipo: input

enunciado: "No basta con saber la {concepto} o la misión; es crucial entender el escenario real."

explicacion: |
  La visión/misión son internas; el contexto es externo. Ambos deben alinearse.
```

### 24 — pregunta 24

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["estrategia", "entorno"]

variables:
  elemento: uno_de(["reglas del juego", "costos fijos", "beneficios"])

respuesta: "reglas del juego"
tipo: input

enunciado: "Ignorar el contexto es ignorar las {elemento} económicas y sociales."

explicacion: |
  El contexto define las "reglas del juego" bajo las cuales opera la organización.
```

### 25 — pregunta 25

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "calidad"]

variables:
  medio: uno_de(["calidad", "precio", "ubicacion"])

respuesta: "calidad"
tipo: input

enunciado: "La organización puede diferenciarse mediante la {medio} frente a la competencia."

explicacion: |
  La calidad es una vía de diferenciación estratégica en el microentorno.
```

### 26 — pregunta 26

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "avanzado"
  tags: ["resumen", "importancia"]

variables:
  resultado: uno_de(["oportunidades", "amenazas", "ambas"])

respuesta: "ambas"
tipo: input

enunciado: "El estudio de contexto permite identificar {resultado} para el proyecto."

explicacion: |
  El estudio sirve tanto para detectar oportunidades como amenazas.
```
