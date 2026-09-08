# Economia — Estructura productiva dependencia (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El modelo agroexportador y la estructura heredada

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["historia_economica", "agroexportador"]

respuesta: "primarias"
tipo: completar
respuestas_validas:
  - "primarias"

enunciado: "La estructura productiva argentina, consolidada durante el modelo agroexportador, se caracterizó por una fuerte especialización en la exportación de productos de naturaleza ___."

explicacion: |
  El modelo agroexportador (1880-1930) posicionó a Argentina como el "granero del mundo", basando su economía en la exportación de materias primas (cereales, carnes) hacia Europa, lo que generó una dependencia estructural de los sectores primarios.
```

### 2 — Dependencia de precios internacionales

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["commodities", "volatilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["soja", "caída"], ["trigo", "subida"]]
  efecto: ["menor ingreso de divisas", "mayor ingreso de divisas"]

respuesta: efecto[escenario_idx]
tipo: mc
opciones_explicitas: ["menor ingreso de divisas", "mayor ingreso de divisas", "sin cambios"]

enunciado: "Si el precio internacional de la {datos[escenario_idx][0]} sufre una {datos[escenario_idx][1]}, el efecto inmediato en la balanza comercial argentina es un ___."

pasos:
  - "Identificar el commodity y la tendencia del precio."
  - "Relacionar el precio del producto de exportación con el ingreso de divisas."

explicacion: |
  Dado que Argentina es un exportador neto de commodities, la volatilidad de los precios internacionales impacta directamente en la recaudación fiscal y la disponibilidad de dólares (divisas).
```

### 3 — Caracterización de la estructura productiva

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["exportaciones", "commodities"]

respuesta: "Dependencia de los precios de los commodities"
tipo: mc
opciones_explicitas: ["Diversificación industrial avanzada", "Dependencia de los precios de los commodities", "Autosuficiencia tecnológica"]

enunciado: "¿Cuál es la principal vulnerabilidad de una estructura productiva basada en la exportación de materias primas?"

explicacion: |
  La falta de valor agregado en las exportaciones hace que la economía sea altamente sensible a los ciclos de precios internacionales, fenómeno conocido como la "vulnerabilidad externa".
```

### 4 — Secuencia de la dinámica exportadora

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["ciclos_economicos", "exportación"]

opciones_explicitas: ["Aumento de demanda externa", "Suba de precios internacionales", "Ingreso de divisas", "Crecimiento del PBI local"]
respuesta_orden: ["Aumento de demanda externa", "Suba de precios internacionales", "Ingreso de divisas", "Crecimiento del PBI local"]
tipo: ordenar

enunciado: "Ordene cronológicamente la cadena de efectos que genera un ciclo alcista en la economía argentina basado en el modelo agroexportador:"

explicacion: |
  Un aumento en la demanda mundial de productos agrícolas eleva los precios de los commodities, lo que permite un mayor ingreso de divisas al país, impulsando finalmente el crecimiento económico interno.
```

### 5 — El valor agregado y la exportación

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["valor_agregado", "industria"]

respuesta: "bajo"
tipo: completar
respuestas_validas:
  - "bajo"
  - "nulo"

enunciado: "La estructura productiva heredada presenta un perfil de exportación con un ___ grado de valor agregado, lo que se traduce en una mayor dependencia de la demanda externa de materias primas."

explicacion: |
  A diferencia de las economías industrializadas, la estructura argentina exporta mayoritariamente bienes con poco procesamiento industrial, lo que limita la capacidad de captura de valor en la cadena global.
```

### 6 — Concepto de dependencia

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["teoria_economica", "desarrollo"]

tipo: mc
opciones_explicitas: ["La subordinación de la economía local a las decisiones y precios de mercados externos.", "Un sistema donde el país exporta tecnología de punta y productos manufacturados.", "Un modelo de autosuficiencia total donde no se requiere comercio exterior.", "La capacidad de un país para fijar sus propios precios internacionales sin influencia externa."]

enunciado: "Se define como dependencia económica cuando la estructura productiva de un país se encuentra ___________ por los ciclos económicos y las decisiones de precios de las economías centrales."

respuesta: "La subordinación de la economía local a las decisiones y precios de mercados externos."

explicacion: |
  La dependencia económica ocurre cuando un país carece de autonomía para determinar sus ciclos internos, ya que su producción y consumo dependen de la demanda y los precios fijados en mercados externos o países desarrollados.
```

### 7 — Factores de la dependencia

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["comercio_exterior", "primarización"]

variables:
  escenario: uno_de([["exportación de materias primas", "vulnerabilidad a precios internacionales"], ["importación de tecnología", "dependencia de patentes extranjeras"], ["deuda externa", "dependencia de capitales volátiles"]])

tipo: completar
respuestas_validas:
  - escenario[1]

enunciado: "Un país que basa su matriz productiva principalmente en la {escenario[0]} suele enfrentar una alta ___."

respuesta: escenario[1]

explicacion: |
  La especialización en productos primarios (commodities) expone a las economías a la volatilidad de los precios internacionales, lo que caracteriza a los modelos de dependencia.
```

### 8 — El rol de la tecnología

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["tecnologia", "desarrollo"]

tipo: mc
opciones_explicitas: ["Importación de bienes de capital y tecnología de punta.", "Exportación de servicios de alta complejidad.", "Sustitución de importaciones tecnológicas por producción local.", "Desarrollo de investigación y desarrollo (I+D) propio."]

enunciado: "La dependencia tecnológica se manifiesta principalmente a través de la ___________."

respuesta: "Importación de bienes de capital y tecnología de punta."

explicacion: |
  Cuando un país no desarrolla tecnología propia, debe importar maquinaria y conocimiento, quedando sujeto a los costos y condiciones impuestas por los países que sí poseen dicha tecnología.
```

### 9 — Secuencia de la dependencia

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["procesos", "industrializacion"]

tipo: ordenar
opciones_explicitas: ["Especialización en recursos naturales", "Importación de manufacturas", "Dependencia de la demanda externa", "Vulnerabilidad ante crisis externas"]

enunciado: "Ordene cronológicamente los elementos que suelen conformar un ciclo de dependencia económica estructural:"

respuesta_orden: ["Especialización en recursos naturales", "Importación de manufacturas", "Dependencia de la demanda externa", "Vulnerabilidad ante crisis externas"]

explicacion: |
  El ciclo comienza con la especialización productiva, lo que genera la necesidad de importar bienes procesados, creando una dependencia de la demanda externa y resultando en vulnerabilidad ante choques externos.
```

### 10 — Impacto de los capitales

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["finanzas", "capitales"]

variables:
  caso: uno_de([["flujos de inversión extranjera directa", "crecimiento sostenido"], ["salidas bruscas de capitales especulativos", "crisis de balanza de pagos"]])

tipo: completar
tolerancia_abs: 0

enunciado: "En una economía dependiente, las {caso[0]} pueden ser positivas, pero las {caso[1]} suelen provocar una ___________."

respuesta: "crisis de balanza de pagos"

explicacion: |
  La volatilidad de los capitales es un rasgo de la dependencia financiera; cuando los capitales salen del país repentinamente, se generan crisis en la cuenta de pagos y devaluaciones.
```

### 11 — El riesgo de la especialización

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["vulnerabilidad", "primarización"]

variables:
  escenario: uno_de([["soja", "400"], ["trigo", "250"], ["minería de cobre", "8000"]])

enunciado: "Una economía que basa su ingreso en la exportación de {escenario[0]} enfrenta una alta volatilidad cuando el precio internacional cae a ${escenario[1]} por unidad. Este fenómeno se conoce como vulnerabilidad externa."

respuesta: "vulnerabilidad externa"
tipo: mc
opciones_explicitas: ["vulnerabilidad externa", "estabilidad macroeconómica", "diversificación productiva", "proteccionismo"]

explicacion: |
  La dependencia de un solo producto primario expone a la economía a las fluctuaciones de los precios internacionales (commodities), lo que genera inestabilidad en la balanza de pagos y el tipo de cambio.
```

### 12 — Impacto en la Balanza de Pagos

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["balanza_de_pagos", "términos_de_intercambio"]

variables:
  caso: uno_de([["caída del precio de la soja", "déficit"], ["aumento de demanda de materias primas", "superávit"]])

enunciado: "Si ocurre una {caso[0]}, la cuenta corriente de la balanza de pagos tiende a presentar un ___."

pasos:
  - "Identificar el efecto del precio en el ingreso por exportaciones."
  - "Relacionar el ingreso con el saldo de la cuenta corriente."

respuestas_validas:
  - "déficit"
  - "superávit"
respuesta: caso[1]
tipo: completar

explicacion: |
  Una caída en los precios de exportación reduce la entrada de divisas, lo que puede derivar en un déficit en la cuenta corriente si no se compensa con deuda o remesas.
```

### 13 — Los Términos de Intercambio

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["términos_de_intercambio", "deterioro"]

enunciado: "Cuando los precios de los productos manufacturados crecen más rápido que los de los productos primarios, se produce un ___ en los términos de intercambio, lo que significa que los precios relativos de los bienes que exporta la economía caen."

respuestas_validas:
  - "deterioro"
respuesta: "deterioro"
tipo: completar

explicacion: |
  El deterioro de los términos de intercambio implica que se necesita exportar cada vez más volumen de materias primas para comprar la misma cantidad de bienes tecnológicos o manufacturados.
```

### 14 — La paradoja de la abundancia

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["enfermedad_holandesa", "cambio_real"]

variables:
  efecto: uno_de([["apreciación", "sube"], ["depreciación", "baja"]])

enunciado: "Un boom de precios en un recurso natural (como el petróleo) genera una entrada masiva de divisas que provoca la ___ del tipo de cambio real. Esto suele afectar la competitividad de la industria local."

respuestas_validas:
  - "apreciación"
  - "depreciación"
respuesta: efecto[0]
tipo: completar

explicacion: |
  La 'Enfermedad Holandesa' ocurre cuando la abundancia de un recurso natural aprecia la moneda local, haciendo que el resto de los sectores (industria, servicios) pierdan competitividad frente al exterior.
```

### 15 — Secuencia de crisis externa

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["ciclo_economico", "shock_externo"]

enunciado: "Ordene la secuencia lógica de un shock externo negativo para una economía primario-exportadora:"

opciones_explicitas: ["Caída de precios internacionales", "Menor ingreso de divisas", "Crisis de balanza de pagos", "Restricción externa"]
respuesta_orden: ["Caída de precios internacionales", "Menor ingreso de divisas", "Crisis de balanza de pagos", "Restricción externa"]
tipo: ordenar

explicacion: |
  La cadena comienza con el shock de precios, que reduce el flujo de dólares, afectando la capacidad de pago del país y limitando la importación de insumos (restricción externa).
```

### 16 — El modelo agroexportador

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["historia_economica", "agroexportacion"]

respuesta: "modelo agroexportador"
tipo: completar
respuestas_validas:
  - "modelo agroexportador"

enunciado: "Antes de la industrialización por sustitución de importaciones, la economía argentina se basaba en el ___."

explicacion: |
  El modelo agroexportador consistía en la exportación de materias primas (carnes y cereales) e importación de manufacturas, consolidando una estructura de dependencia hacia los mercados centrales.
```

### 17 — El motor de la ISI

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["isi", "industrializacion"]

variables:
  escenario: uno_de([["Sustitución de importaciones", "Proteccionismo"], ["Sustitución de importaciones", "Libre cambio"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Sustitución de importaciones", "Libre cambio"]

enunciado: "El proceso de Industrialización por Sustitución de Importaciones (ISI) buscaba principalmente la {escenario[0]} mediante políticas de protección de la industria nacional."

explicacion: |
  La ISI buscaba que el país dejara de depender de la compra de productos manufacturados en el exterior, fomentando la producción local mediante aranceles y subsidios.
```

### 18 — Factores de la transformación industrial

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["migraciones", "urbanizacion"]

respuesta: "urbanización"
tipo: completar
respuestas_validas:
  - "urbanización"

enunciado: "El crecimiento de la industria durante mediados del siglo XX impulsó un proceso de rápida ___ en la población argentina."

explicacion: |
  La demanda de mano de obra en las fábricas de los centros urbanos (especialmente en Buenos Aires, Rosario y Córdoba) fomentó grandes migraciones internas y la expansión de las ciudades.
```

### 19 — Secuencia de la transición económica

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["ciclos_economicos", "transicion"]

respuesta_orden: ["Modelo Agroexportador", "Crisis de la demanda externa", "Industrialización por Sustitución de Importaciones"]
tipo: ordenar
opciones_explicitas: ["Modelo Agroexportador", "Crisis de la demanda externa", "Industrialización por Sustitución de Importaciones"]

enunciado: "Ordene cronológicamente los procesos económicos que marcaron la transición de la estructura productiva argentina en el siglo XX:"

explicacion: |
  La crisis de la demanda externa (causada por las Guerras Mundiales y la Gran Depresión) hizo inviable seguir importando productos, lo que forzó el salto hacia la ISI.
```

### 20 — El rol del Estado en la ISI

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["estado", "politica_industrial"]

respuesta: "intervencionista"
tipo: mc
opciones_explicitas: ["intervencionista", "liberal", "ausente"]

enunciado: "Para sostener el modelo ISI, el Estado argentino adoptó un rol principalmente _________."

explicacion: |
  El Estado asumió un rol activo mediante la regulación de aranceles, la creación de empresas públicas y el fomento del mercado interno para asegurar el crecimiento industrial.
```

### 21 — Riesgo de la dependencia de exportaciones primarias

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["exportaciones", "primarización", "riesgo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["país exportador de granos", "volatilidad de precios internacionales"], ["país exportador de litio", "dependencia de la demanda tecnológica externa"]]

enunciado: "Un {datos[escenario_idx][0]} enfrenta un escenario donde su principal motor de ingresos es un commodity. El principal riesgo económico para este país es la {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["volatilidad de precios internacionales", "dependencia de la demanda tecnológica externa", "estabilidad cambiaria", "diversificación industrial"]

explicacion: |
  La dependencia de un solo producto primario expone a la economía a las fluctuaciones de los precios internacionales, lo que genera inestabilidad en la balanza comercial y en la recaudación fiscal.
```

### 22 — Impacto de la desindustrialización

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["industria", "valor_agregado", "empleo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["un país con baja capacidad manufacturera", "pérdida de valor agregado"], ["un país con alta dependencia de bienes de capital", "vulnerabilidad ante choques externos"]]

enunciado: "En el caso de {casos[caso_idx][0]}, el riesgo estructural más significativo es la {casos[caso_idx][1]}."

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["pérdida de valor agregado", "vulnerabilidad ante choques externos", "exceso de ahorro interno", "estabilidad de precios"]

explicacion: |
  La falta de una base industrial sólida impide que el país capture mayor valor en la cadena de producción, limitando el crecimiento del empleo calificado y la diversificación.
```

### 23 — El fenómeno de la "Enfermedad Holandesa"

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["enfermedad_holandesa", "tipo_de_cambio", "recursos_naturales"]

enunciado: "Cuando un país descubre un gran yacimiento de petróleo y aumenta sus exportaciones, se produce una apreciación de la moneda local. Este fenómeno, conocido como Enfermedad Holandesa, suele provocar la falta de competitividad de la ___."

respuesta: "industria manufacturera"
tipo: completar
respuestas_validas:
  - "industria manufacturera"

explicacion: |
  La entrada masiva de divisas aprecia el tipo de cambio real, lo que encarece las exportaciones de bienes no tradicionales y desincentiva la actividad industrial local.
```

### 24 — Secuencia de vulnerabilidad económica

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["secuencia", "riesgo", "estructura"]

variables:
  secuencia_idx: uno_de([0, 1])
  secuencias: [["Concentración de exportaciones", "Caída de demanda externa", "Crisis de balanza de pagos"], ["Dependencia tecnológica", "Aumento de importaciones", "Déficit de cuenta corriente"]]

enunciado: "Ordene la secuencia lógica de un choque externo en una economía dependiente:"

pasos:
  - "Identificar el origen del choque"
  - "Observar el efecto en la cuenta externa"
  - "Evaluar el impacto en la estabilidad macroeconómica"

respuesta_orden: secuencias[secuencia_idx]
tipo: ordenar
opciones_explicitas: secuencias[secuencia_idx]

explicacion: |
  La estructura productiva determina la velocidad y la profundidad con la que un shock externo (como una caída de demanda) se traslada a la economía doméstica.
```

### 25 — Determinación de la dependencia

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["indicador", "exportaciones", "concentracion"]

variables:
  escenario_val: uno_de([0, 1])
  escenarios: [[80, "alta"], [15, "baja"]]

enunciado: "Si el porcentaje de exportaciones concentrado en solo dos productos es del {escenarios[escenario_val][0]}%, se considera que la economía tiene una dependencia ___."

respuesta: escenarios[escenario_val][1]
tipo: mc
opciones_explicitas: ["alta", "baja", "nula", "moderada"]

explicacion: |
  A mayor concentración de la canasta exportadora en pocos productos, mayor es la vulnerabilidad de la economía ante cambios en los precios o volúmenes de esos bienes específicos.
```
