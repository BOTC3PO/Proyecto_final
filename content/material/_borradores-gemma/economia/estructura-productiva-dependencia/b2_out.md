### 1 — Concepto de dependencia
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

### 2 — Factores de la dependencia
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["comercio_exterior", "primarización"]

variables:
  escenario: uno_de([
    ["exportación de materias primas", "vulnerabilidad a precios internacionales"],
    ["importación de tecnología", "dependencia de patentes extranjeras"],
    ["deuda externa", "dependencia de capitales volátiles"]
  ])

tipo: completar
respuestas_validas: ["vulnerabilidad a precios internacionales", "dependencia de patentes extranjeras", "dependencia de capitales volátiles"]

enunciado: "Un país que basa su matriz productiva principalmente en la {escenario[0]} suele enfrentar una alta {escenario[1]}."

respuesta: "vulnerabilidad a precios internacionales"

explicacion: |
  La especialización en productos primarios (commodities) expone a las economías a la volatilidad de los precios internacionales, lo que caracteriza a los modelos de dependencia.
```

### 3 — El rol de la tecnología
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

### 4 — Secuencia de la dependencia
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["procesos", "industrializacion"]

tipo: ordenar
opciones_explicitas: ["Especialización en recursos naturales", "Importación de manufacturas", "Dependencia de la demanda externa", "Vulnerabilidad ante crisis externas"]

enunciado: "Ordene cronológicamente los elementos que suelen conformar un ciclo de dependencia económica estructural:"

respuesta: ["Especialización en recursos naturales", "Importación de manufacturas", "Dependencia de la demanda externa", "Vulnerabilidad ante crisis externas"]

explicacion: |
  El ciclo comienza con la especialización productiva, lo que genera la necesidad de importar bienes procesados, creando una dependencia de la demanda externa y resultando en vulnerabilidad ante choques externos.
```

### 5 — Impacto de los capitales
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["finanzas", "capitales"]

variables:
  caso: uno_de([
    ["flujos de inversión extranjera directa", "crecimiento sostenido"],
    ["salidas bruscas de capitales especulativos", "crisis de balanza de pagos"]
  ])

tipo: input
tolerancia_abs: 0

enunciado: "En una economía dependiente, las {caso[0]} pueden ser positivas, pero las {caso[1]} suelen provocar una ___________."

respuesta: "crisis de balanza de pagos"

explicacion: |
  La volatilidad de los capitales es un rasgo de la dependencia financiera; cuando los capitales salen del país repentinamente, se generan crisis en la cuenta de pagos y devaluaciones.
```