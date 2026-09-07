# Economia — tipos de proyecto (cuestionario, 36 preguntas VBLang)

> Tema: `economia/tipos-de-proyecto`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "clasificación"]

variables:
  caso: "huerta comunitaria"

respuesta: "social"
tipo: input

enunciado: "Una {caso} se clasifica como un proyecto de tipo social."

explicacion: |
  Las huertas comunitarias buscan seguridad alimentaria y lazo social, no lucro.
```

### 2 — pregunta 2

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "clasificación"]

variables:
  caso: "fábrica de calzado"

respuesta: "productivo"
tipo: input

enunciado: "Una {caso} se clasifica como un proyecto de tipo productivo."

explicacion: |
  La fabricación de bienes para la venta es la esencia del proyecto productivo.
```

### 3 — pregunta 3

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["evaluación", "indicadores"]

variables:
  tipo_indicador: uno_de(["financieros", "sociales", "fisicos"])

respuesta: "sociales"
tipo: completar

enunciado: "Para proyectos sociales, los indicadores de {tipo_indicador} son prioritarios sobre los financieros."

explicacion: |
  El impacto real en la vida de las personas es la métrica clave.
```

### 4 — pregunta 4

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["evaluación", "rentabilidad"]

variables:
  tipo_indicador: uno_de(["financieros", "sociales", "ambientales"])

respuesta: "financieros"
tipo: completar

enunciado: "En proyectos productivos, la rentabilidad se mide principalmente por indicadores {tipo_indicador}."

explicacion: |
  El balance de ganancias y pérdidas determina el éxito financiero.
```

### 5 — pregunta 5

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["producto", "bien"]

variables:
  naturaleza: uno_de(["intangible", "intercambiable", "material"])

respuesta: "intangible"
tipo: completar

enunciado: "El 'producto' de un proyecto social suele ser un bienestar {naturaleza} o una mejora en la calidad de vida."

explicacion: |
  El beneficio social es a menudo intangible (ej. salud, educación) comparado con bienes físicos.
```

### 6 — pregunta 6

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["producto", "mercado"]

variables:
  naturaleza: uno_de(["intangible", "intercambiable", "local"])

respuesta: "intercambiable"
tipo: completar

enunciado: "Los proyectos productivos crean bienes o servicios {naturaleza} en el mercado."

explicacion: |
  La capacidad de intercambio comercial define al producto productivo.
```

### 7 — pregunta 7

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["beneficiarios", "comunidad"]

variables:
  grupo: uno_de(["sectores vulnerables", "inversores", "accionistas"])

respuesta: "sectores vulnerables"
tipo: completar

enunciado: "Los proyectos sociales buscan garantizar acceso a servicios a {grupo}."

explicacion: |
  El foco está en quienes tienen menos acceso a recursos básicos.
```

### 8 — pregunta 8

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["beneficiarios", "clientes"]

variables:
  grupo: uno_de(["la comunidad", "el mercado", "el gobierno"])

respuesta: "el mercado"
tipo: completar

enunciado: "Los proyectos productivos buscan satisfacer las necesidades de {grupo} a través de la venta."

explicacion: |
  El cliente final es quien determina la viabilidad del proyecto productivo.
```

### 9 — pregunta 9

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["temporalidad", "definición"]

variables:
  duracion: uno_de(["eterna", "temporal", "cíclica"])

respuesta: "temporal"
tipo: completar

enunciado: "Todo proyecto, sea social o productivo, tiene una duración {duracion} definida."

explicacion: |
  Los proyectos tienen inicio y fin claros, a diferencia de las operaciones continuas.
```

### 10 — pregunta 10

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "salud"]

variables:
  proyecto: "campaña de vacunación"

respuesta: "social"
tipo: input

enunciado: "Una {proyecto} es un ejemplo típico de proyecto social."

explicacion: |
  La salud pública es un bien común que busca el bienestar colectivo.
```

### 11 — pregunta 11

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "tecnología"]

variables:
  proyecto: "startup tecnológica"

respuesta: "productivo"
tipo: input

enunciado: "Una {proyecto} es un ejemplo típico de proyecto productivo."

explicacion: |
  Las startups buscan crear valor económico y escalar en el mercado.
```

### 12 — pregunta 12

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["completar", "tejido social"]

variables:
  accion: uno_de(["debilitar", "fortalecer", "ignorar"])

respuesta: "fortalecer"
tipo: completar

enunciado: "Los proyectos sociales buscan {accion} el tejido social de la comunidad."

explicacion: |
  La cohesión social es un resultado deseado de las intervenciones sociales.
```

### 13 — pregunta 13

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["completar", "costos"]

variables:
  accion: uno_de(["ignorar", "cubrir", "maximizar"])

respuesta: "cubrir"
tipo: completar

enunciado: "Los proyectos productivos deben generar ingresos suficientes para {accion} los costos de producción."

explicacion: |
  Cubrir costos es el primer paso para la sostenibilidad económica.
```

### 14 — pregunta 14

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "avanzado"
  tags: ["completar", "escala"]

variables:
  escala: uno_de(["únicamente pequeña", "pequeña, mediana o gran", "exclusivamente internacional"])

respuesta: "pequeña, mediana o gran"
tipo: completar

enunciado: "Los proyectos productivos pueden ser de escala {escala}."

explicacion: |
  No hay límite de escala inherente al modelo productivo.
```

### 15 — pregunta 15

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["completar", "necesidades"]

variables:
  tipo_necesidad: uno_de(["de lujo", "básicas", "exclusivas"])

respuesta: "básicas"
tipo: completar

enunciado: "Los proyectos sociales suelen enfocarse en resolver {tipo_necesidad} necesidades."

explicacion: |
  El foco está en lo esencial para la dignidad humana.
```

### 16 — pregunta 16

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["proyecto_social", "definicion"]

variables:
  objetivo: uno_de(["bienestar_comunitario", "ganancia_economica", "produccion_masiva", "exportacion"])

respuesta: verdadero
tipo: vf

enunciado: "Los proyectos sociales buscan principalmente el {objetivo} de la comunidad, no el lucro directo."

explicacion: |
  Los proyectos sociales se definen por su objetivo de mejorar la calidad de vida y el bienestar de un grupo, a diferencia de los productivos que buscan ganancias.
```

### 17 — pregunta 17

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["financiamiento", "proyecto_social"]

variables:
  fuente: uno_de(["ventas_en_mercado", "donaciones_y_recursos_publicos", "inversion_privada", "bancos_comerciales"])

respuesta: verdadero
tipo: vf

enunciado: "Es característico que los proyectos sociales se financien comúnmente con {fuente}."

explicacion: |
  A diferencia de los proyectos productivos que dependen de la inversión privada o préstamos bancarios, los sociales suelen apoyarse en fondos públicos y donaciones.
```

### 18 — pregunta 18

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["metricas", "proyecto_productivo"]

variables:
  indicador: uno_de(["impacto_social", "ganancia_financiera", "satisfaccion_vecinal", "cohesion_comunitaria"])

respuesta: verdadero
tipo: vf

enunciado: "En un proyecto productivo, el éxito se mide principalmente por la obtención de {indicador}."

explicacion: |
  La lógica central de los proyectos productivos es la sostenibilidad económica, por lo que la ganancia financiera es el indicador clave de viabilidad.
```

### 19 — pregunta 19

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["definicion", "proyecto"]

variables:
  tipo_actividad: uno_de(["rutinaria", "repetitiva", "unica", "ciclica"])

respuesta: verdadero
tipo: vf

enunciado: "Un proyecto se distingue de la operación rutinaria porque es una iniciativa {tipo_actividad}."

explicacion: |
  La definición fundamental de proyecto implica que es una acción planificada, única y con un fin específico, no una actividad repetitiva.
```

### 20 — pregunta 20

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["financiamiento", "proyecto_social"]

variables:
  a: "Recursos públicos y donaciones"
  b: "Inversión de capital privado"
  c: "Préstamos bancarios tradicionales"
  d: "Ventas al por mayor"

respuesta: a
tipo: mc

enunciado: "¿Cuál es la fuente de financiamiento típica de un proyecto social?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  Los proyectos sociales suelen financiarse con recursos públicos, impuestos o donaciones, no con capital privado de retorno.
```

### 21 — pregunta 21

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["financiamiento", "proyecto_productivo"]

variables:
  a: "Donaciones internacionales"
  b: "Impuestos municipales"
  c: "Inversión privada y préstamos"
  d: "Subsidios gubernamentales"

respuesta: c
tipo: mc

enunciado: "¿De dónde obtienen usualmente los recursos los proyectos productivos?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  Los proyectos productivos buscan rentabilidad y se financian mediante inversión privada y créditos para cubrir costos y generar ganancias.
```

### 22 — pregunta 22

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["metricas", "proyecto_social"]

variables:
  a: "Ganancia neta"
  b: "Cuota de mercado"
  c: "Impacto social"
  d: "Retorno de inversión"

respuesta: c
tipo: mc

enunciado: "En un proyecto social, el éxito se evalúa principalmente por:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  El éxito social se mide por indicadores de impacto (ej. familias beneficiadas), no por indicadores financieros.
```

### 23 — pregunta 23

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["logica", "proyecto_productivo"]

variables:
  a: "Solidaridad"
  b: "Sostenibilidad económica"
  c: "Ayuda humanitaria"
  d: "Voluntariado"

respuesta: b
tipo: mc

enunciado: "¿Cuál es la lógica central de los proyectos productivos?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  La sostenibilidad económica es clave: deben generar ingresos para cubrir costos y obtener beneficios.
```

### 24 — pregunta 24

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "proyecto_social"]

variables:
  caso: "huerta_comunitaria"

respuesta: verdadero
tipo: vf

enunciado: "Una huerta comunitaria es un ejemplo clásico de proyecto social."

explicacion: |
  Las huertas comunitarias buscan acceso a alimentos y cohesión social, no lucro, siendo un ejemplo típico de proyecto social.
```

### 25 — pregunta 25

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "proyecto_productivo"]

variables:
  caso: "fabrica_calzado"

respuesta: verdadero
tipo: vf

enunciado: "Una fábrica de calzado que busca vender en el mercado es un proyecto productivo."

explicacion: |
  Al generar bienes para la comercialización y obtener ganancias, se clasifica como proyecto productivo.
```

### 26 — pregunta 26

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["beneficiarios", "proyecto_social"]

variables:
  a: "Accionistas"
  b: "Socios inversores"
  c: "Comunidad o grupo vulnerable"
  d: "Clientes minoristas"

respuesta: c
tipo: mc

enunciado: "¿Quiénes son los principales beneficiarios directos de un proyecto social?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  El foco está en el grupo o comunidad, especialmente aquellos con necesidades básicas no cubiertas.
```

### 27 — pregunta 27

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["viabilidad", "proyecto_productivo"]

variables:
  a: "Voluntad política"
  b: "Mercado"
  c: "Donantes externos"
  d: "Voluntarios"

respuesta: b
tipo: mc

enunciado: "En los proyectos productivos, ¿quién es el 'juez principal' de la viabilidad?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  El mercado determina si el producto es deseado y si el proyecto es financieramente viable.
```

### 28 — pregunta 28

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["escala", "proyecto_productivo"]

variables:
  a: "Solo grandes corporaciones"
  b: "Solo microempresas"
  c: "Pequeña, mediana o gran escala"
  d: "Exclusivamente escala local"

respuesta: c
tipo: mc

enunciado: "Los proyectos productivos pueden ser de:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  No hay restricción de escala; pueden ser emprendimientos individuales hasta grandes industrias.
```

### 29 — pregunta 29

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["metricas", "proyecto_social"]

variables:
  afirmacion: "medicion_unicamente_financiera"

respuesta: falso
tipo: vf

enunciado: "El éxito de un proyecto social se mide únicamente por indicadores financieros."

explicacion: |
  Se mide por indicadores de impacto social, como bienestar o acceso a derechos, no solo dinero.
```

### 30 — pregunta 30

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["objetivo", "proyecto_social"]

variables:
  a: "Maximizar dividendos"
  b: "Transformar la realidad comunitaria"
  c: "Aumentar la cuota de mercado"
  d: "Reducir costos operativos"

respuesta: b
tipo: mc

enunciado: "¿Qué buscan transformar los proyectos sociales?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  Su objetivo es mejorar la calidad de vida y la realidad social de un grupo.
```

### 31 — pregunta 31

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["ganancias", "proyecto_productivo"]

variables:
  a: "Distribuir entre voluntarios"
  b: "Reinvertir o distribuir entre socios"
  c: "Donar completamente a ONGs"
  d: "Guardar en cuentas sin interés"

respuesta: b
tipo: mc

enunciado: "Las ganancias de un proyecto productivo suelen destinarse a:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  El beneficio obtenido permite reinvertir en el proyecto o distribuirse entre los socios/inversores.
```

### 32 — pregunta 32

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "proyecto_social"]

variables:
  caso: "acceso_salud"

respuesta: verdadero
tipo: vf

enunciado: "Garantizar acceso a salud para sectores vulnerables es un objetivo de proyectos sociales."

explicacion: |
  Los proyectos sociales cubren necesidades básicas como salud, educación y vivienda.
```

### 33 — pregunta 33

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "avanzado"
  tags: ["financiamiento", "complejidad"]

variables:
  a: "Exclusivamente público"
  b: "Exclusivamente privado"
  c: "Público, donaciones o fondos internacionales"
  d: "Solo ventas al consumidor"

respuesta: c
tipo: mc

enunciado: "Los proyectos sociales pueden financiarse con:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  La combinación de fondos públicos, donaciones y fondos internacionales es común en el sector social.
```

### 34 — pregunta 34

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["producto", "proyecto_productivo"]

variables:
  a: "No intercambiable"
  b: "Intercambiable en el mercado"
  c: "Solo para uso interno"
  d: "Exclusivo para el gobierno"

respuesta: b
tipo: mc

enunciado: "Los productos de un proyecto productivo son:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  Se generan bienes o servicios con el fin de ser comercializados e intercambiados.
```

### 35 — pregunta 35

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["definicion", "proyecto"]

variables:
  afirmacion: "proyecto_rutinario"

respuesta: falso
tipo: vf

enunciado: "Un proyecto es una actividad rutinaria y repetitiva."

explicacion: |
  Los proyectos son iniciativas únicas, no rutinarias. Las actividades repetitivas son operaciones.
```

### 36 — pregunta 36

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "avanzado"
  tags: ["contexto", "politicas_publicas"]

variables:
  a: "Ignorar ambos tipos"
  b: "Analizar críticamente ambos tipos"
  c: "Solo apoyar proyectos productivos"
  d: "Solo apoyar proyectos sociales"

respuesta: b
tipo: mc

enunciado: "Entender esta distinción ayuda a analizar críticamente:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  Permite comprender cómo se organizan las iniciativas y las estrategias empresariales o públicas.
```
