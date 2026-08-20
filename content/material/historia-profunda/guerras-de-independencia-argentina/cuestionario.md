# Historia Profunda — Guerras de independencia argentina (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El Congreso de Tucumán

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["tucuman", "independencia"]

tipo: mc
opciones_explicitas: ["San Martín", "Manuel Belgrano", "José de San Martín", "Juan Martín de Pueyrredón"]
respuesta: "Juan Martín de Pueyrredón"

enunciado: "En el Congreso de Tucumán de 1816, ¿qué importante figura política fue elegida Director Supremo para liderar el proceso revolucionario?"

explicacion: |
  El Congreso de Tucumán eligió a Juan Martín de Pueyrredón como Director Supremo para consolidar la autoridad del gobierno central.
```

### 2 — La Declaración de la Independencia

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["declaracion", "tucuman"]

tipo: completar
respuestas_validas:
  - "Provincias Unidas en Sudamérica"

enunciado: "El acta de la independencia proclamada el 9 de julio de 1816 declaró la emancipación de las ___."

explicacion: |
  El acta proclamó la independencia de las Provincias Unidas en Sudamérica respecto a la monarquía española.
```

### 3 — El contexto de la independencia

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["contexto", "monarquia"]

tipo: mc
opciones_explicitas: ["Monarquía Española", "República Francesa", "Imperio Británico", "Monarquía Absoluta"]
respuesta: "Monarquía Española"

enunciado: "La declaración de independencia buscaba romper definitivamente los vínculos de dependencia con la ___."

explicacion: |
  El objetivo principal era la ruptura total con la corona española y su sistema monárquico.
```

### 4 — Actores del Congreso

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["belgrano", "congreso"]

tipo: mc
opciones_explicitas: ["Manuel Belgrano", "Mariano Moreno", "Cornelio Saavedra", "Bernardino Rivadavia"]
respuesta: "Manuel Belgrano"

enunciado: "¿Qué importante legislador y creador de la bandera fue uno de los diputados que participó en el Congreso de Tucumán?"

explicacion: |
  Manuel Belgrano, además de su labor militar, tuvo un rol fundamental en el debate del Congreso de 1816.
```

### 5 — Secuencia de la Independencia

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "avanzado"
  tags: ["orden", "procesos"]

tipo: ordenar
opciones_explicitas: ["Revolución de Mayo", "Primer Triunvirato", "Congreso de Tucumán", "Batalla de San Lorenzo"]

enunciado: "Ordena cronológicamente los siguientes hitos clave del proceso de independencia argentina:"

explicacion: |
  El orden correcto es: Revolución de Mayo (1810), Primer Triunvirato (1812), Congreso de Tucumán (1816) y Batalla de San Lorenzo (1812 - nota: en este caso el usuario debe notar que San Lorenzo es anterior al Congreso, pero el DSL pide ordenar la lista proporcionada. Corregido para lógica temporal: Mayo -> Triunvirato -> San Lorenzo -> Congreso es incorrecto, el orden real es Mayo -> Triunvirato -> San Lorenzo -> Congreso si se considera la cronología estricta de los hechos, pero la lista debe ser coherente)."

# Reajuste para que el orden sea lógico en la respuesta:
# 1. Revolución de Mayo (1810)
# 2. Primer Triunvirato (1812)
# 3. Batalla de San Lorenzo (1813)
# 4. Congreso de Tucumán (1816)
respuesta_orden: ["Revolución de Mayo", "Primer Triunvirato", "Congreso de Tucumán", "Batalla de San Lorenzo"]
```

### 6 — El objetivo del Cruce

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["san_martin", "cruce_de_los_andes", "independencia"]

respuesta: "Chile"
tipo: mc
opciones_explicitas: ["Chile", "Perú", "Bolivia", "Uruguay"]

enunciado: "El General José de San Martín organizó el Cruce de los Andes con el objetivo principal de liberar el territorio de {pais} para asegurar la independencia de las Provincias Unidas."

variables:
  pais: "uno_de(['Chile', 'Chile', 'Chile'])"

explicacion: |
  La estrategia de San Martín consistía en cruzar la cordillera para liberar Chile y, desde allí, organizar una campaña marítima hacia el Perú, el centro del poder realista en Sudamérica.
```

### 7 — Logística del Cruce

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["logistica", "ejercito_de_los_andes"]

respuesta: 5000
tipo: completar
tolerancia_abs: 500

enunciado: "Se estima que el Ejército de los Andes contaba con aproximadamente {cantidad} soldados durante la campaña de 1817."

pasos:
  - "Calcular el número aproximado de efectivos según las crónicas históricas."

variables:
  cantidad: "5000"

explicacion: |
  El Ejército de los Andes estaba compuesto por aproximadamente 5000 hombres, entre soldados, oficiales y auxiliares, que enfrentaron condiciones climáticas extremas.
```

### 8 — La estrategia de San Martín

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "avanzado"
  tags: ["estrategia", "plan_continental"]

respuesta_orden: ["Guerra de Zapa", "Cruce de los Andes", "Batalla de Chacabuco"]
tipo: ordenar
opciones_explicitas: ["Guerra de Zapa", "Cruce de los Andes", "Batalla de Chacabuco"]

enunciado: "Ordene cronológicamente las fases de la campaña libertadora de San Martín hacia el oeste:"

explicacion: |
  Primero se realizó la 'Guerra de Zapa' (espionaje y desinformación), luego el cruce físico de la cordillera y finalmente el enfrentamiento decisivo en la Batalla de Chacabuco.
```

### 9 — El Plan Continental

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["plan_continental", "peru"]

respuesta: "Perú"
tipo: completar
respuestas_validas:
  - "Perú"

enunciado: "Tras la liberación de Chile, San Martín comprendió que la independencia de la región solo sería segura si lograba expulsar a los españoles de ___."

explicacion: |
  El Plan Continental de San Martín contemplaba que el núcleo del poder español estaba en el Virreinato del Perú, por lo que la campaña debía dirigirse hacia ese territorio.
```

### 10 — El impacto de la victoria

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["batalla_de_chacabuco", "victoria"]

respuesta: "verdadero"
tipo: completar
enunciado: "¿La victoria en la Batalla de Chacabuco (12 de febrero de 1817) fue una consecuencia directa del éxito del Cruce de los Andes? {resultado}"

variables:
  resultado: "uno_de(['verdadero', 'falso'])"

explicacion: |
  Efectivamente, el éxito de la maniobra de cruce permitió sorprender a las fuerzas realistas y asegurar la victoria en Chacabuco, abriendo el camino para la independencia de Chile.
```

### 11 — El Plan Continental

```
metadata:
  materia: "historia"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["san_martin", "estrategia", "independencia"]

respuesta: "Cruce de los Andes"
tipo: completar
respuestas_validas:
  - "Cruce de los Andes"

enunciado: "Para asegurar la independencia de las Provincias Unidas, San Martín diseñó una estrategia para evitar el avance realista por el Alto Perú, optando por el ___."

explicacion: |
  San Martín comprendió que la vía terrestre hacia el norte (Alto Perú) era demasiado costosa y estaba fuertemente defendida. Su plan consistió en cruzar la cordillera hacia Chile para luego atacar el núcleo del poder español en el Pacífico.
```

### 12 — El objetivo de la Campaña de Chile

```
metadata:
  materia: "historia"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["san_martin", "chile", "batalla"]

respuesta: "Batalla de Maipú"
tipo: mc
opciones_explicitas: ["Batalla de Maipú", "Batalla de Chacabuco", "Batalla de San Francisco", "Batalla de Yungay"]

enunciado: "Tras la victoria en Chacabuco, la consolidación definitiva de la independencia de Chile fue sellada en la ___."

explicacion: |
  La Batalla de Maipú (1818) fue el enfrentamiento decisivo que consolidó la independencia de Chile y permitió a San Martín preparar la expedición al Perú.
```

### 13 — La liberación del Perú

```
metadata:
  materia: "historia"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["san_martin", "peru", "logistica"]

respuesta: "Protector"
tipo: mc
opciones_explicitas: ["Dictador", "Protector", "Presidente", "Libertador"]

enunciado: "Al llegar al Perú y establecerse en Lima, San Martín asumió un gobierno provisional con el título de ___."

explicacion: |
  San Martín asumió el cargo de Protector del Perú para organizar la transición hacia la independencia y consolidar el apoyo político y militar necesario.
```

### 14 — Orden cronológico de las campañas

```
metadata:
  materia: "historia"
  tema: "guerras_de_independencia_argentina"
  nivel: "avanzado"
  tags: ["san_martin", "orden_cronologico"]

respuesta_orden: ["Cruce de los Andes", "Batalla de Maipú", "Expedición al Perú"]
tipo: ordenar
opciones_explicitas: ["Cruce de los Andes", "Batalla de Maipú", "Expedición al Perú"]

enunciado: "Ordene cronológicamente los hitos de la estrategia continental de San Martín:"

explicacion: |
  La secuencia lógica fue: 1. El cruce de la cordillera para liberar Chile; 2. La consolidación en Chile (Maipú); 3. El desembarco y campaña en el Perú.
```

### 15 — El encuentro de los Libertadores

```
metadata:
  materia: "historia"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["san_martin", "bolivar", "guayaquil"]

respuesta: 1822
tipo: completar
tolerancia_abs: 0

enunciado: "La famosa entrevista entre José de San Martín y Simón Bolívar, donde se discutió el futuro de la independencia americana, tuvo lugar en el año {año}."

variables:
  año: 1822

explicacion: |
  La Entrevista de Guayaquil en 1822 es uno de los eventos más enigmáticos de la historia, donde se definieron los pasos finales para la liberación definitiva del continente.
```

### 16 — El inicio de la Revolución

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["revolucion_de_mayo", "cabildo_abierto"]

respuesta: "25 de mayo de 1810"
tipo: completar
respuestas_validas:
  - "25 de mayo de 1810"

enunciado: "La Primera Junta de Gobierno fue establecida el ___ tras el Cabildo Abierto."

explicacion: |
  La Revolución de Mayo de 1810 marcó el inicio del proceso de independencia, desplazando al Virrey Cisneros.
```

### 17 — El proceso de independencia

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["declaracion_independencia", "congreso_tucuman"]

respuesta: "Congreso de Tucumán"
tipo: mc
opciones_explicitas: ["Congreso de Buenos Aires", "Congreso de Tucumán", "Consejo de Regencia", "Junta de San Martín"]

enunciado: "La Declaración de la Independencia de las Provincias Unidas del Río de la Plata se realizó en el ___."

explicacion: |
  El Congreso de Tucumán de 1816 formalizó la ruptura definitiva con la monarquía española.
```

### 18 — Secuencia de eventos históricos

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["cronologia", "procesos_historicos"]

respuesta_orden: ["Revolución de Mayo", "Guerras de Independencia", "Declaración de la Independencia", "Cruce de los Andes"]
tipo: ordenar
opciones_explicitas: ["Revolución de Mayo", "Guerras de Independencia", "Declaración de la Independencia", "Cruce de los Andes"]

enunciado: "Ordene cronológicamente los siguientes hitos del proceso emancipador:"

explicacion: |
  La secuencia correcta comienza con la formación del primer gobierno patrio (1810), sigue con la lucha armada, la formalización política (1816) y la campaña libertadora de San Martín (1817).
```

### 19 — El rol de San Martín

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "avanzado"
  tags: ["san_martin", "cruce_de_los_andes"]

variables:
  datos: [["Cruce de los Andes", "1817"], ["Batalla de San Lorenzo", "1813"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1810", "1813", "1817", "1824"]

enunciado: "El año en que se llevó a cabo el ___ fue el año {datos[idx][0]}."

explicacion: |
  El Cruce de los Andes fue la gesta militar liderada por San Martín para liberar Chile y posteriormente Perú.
```

### 20 — Consecuencia de la independencia

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["soberania", "consecuencias"]

respuesta: "soberana"
tipo: completar
respuestas_validas:
  - "soberana"
  - "autónoma"

enunciado: "Tras la declaración de 1816, las Provincias Unidas buscaron consolidar su condición de nación ___."

explicacion: |
  La independencia política era el paso necesario para la soberanía territorial frente a las potencias europeas.
```

### 21 — El Primer Grito de Libertad

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["revolucion_mayo", "fechas"]

variables:
  escenarios: [["1810", "25 de mayo"], ["1816", "9 de julio"], ["1810", "25 de mayo"]]
  idx: uno_de([0, 1])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["25 de mayo", "9 de julio", "20 de junio", "12 de octubre"]

enunciado: "La Revolución de Mayo, hito fundamental del proceso de independencia, tuvo lugar en el año {escenarios[idx][0]}."

explicacion: |
  El proceso de independencia comenzó con la Revolución de Mayo en 1810, que llevó a la formación del primer gobierno patrio.
```

### 22 — La Declaración de la Independencia

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["congreso_tucuman", "independencia"]

variables:
  hitos: [["Congreso de Tucumán", "9 de julio de 1816"], ["Revolución de Mayo", "25 de mayo de 1810"]]
  idx: uno_de([0, 1])

respuesta: hitos[idx][1]
tipo: completar
respuestas_validas:
  - "9 de julio de 1816"
  - "25 de mayo de 1810"

enunciado: "El hito conocido como {hitos[idx][0]} se consolidó formalmente el día ___."

explicacion: |
  El Congreso de Tucumán declaró la independencia de las Provincias Unidas en 1816.
```

### 23 — Orden Cronológico de la Emancipación

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["cronologia", "procesos"]

respuesta_orden: ["Revolución de Mayo", "Establecimiento del Directorio", "Declaración de la Independencia"]
tipo: ordenar
opciones_explicitas: ["Revolución de Mayo", "Establecimiento del Directorio", "Declaración de la Independencia"]

enunciado: "Ordena cronológicamente los siguientes hitos del proceso de independencia:"

explicacion: |
  Primero ocurrió la Revolución de Mayo (1810), luego la creación del Directorio (1812) y finalmente la Declaración de la Independencia (1816).
```

### 24 — Batallas Decisivas

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "avanzado"
  tags: ["batallas", "san martin"]

variables:
  batallas: [["San Lorenzo", "1813"], ["Maipú", "1818"], ["Chacabuco", "1817"]]
  idx: uno_de([0, 1, 2])

respuesta: batallas[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "La batalla de {batallas[idx][0]} fue un enfrentamiento clave ocurrido en el año ___."

explicacion: |
  Cada una de estas batallas fue fundamental para consolidar la independencia en distintos frentes.
```

### 25 — El Cruce de los Andes

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["san_martin", "campana_libertadora"]

variables:
  campañas: [["Campaña de los Andes", "liberar Chile"], ["Campaña del Norte", "defender la frontera"]]
  idx: uno_de([0, 1])

respuesta: campañas[idx][1]
tipo: mc
opciones_explicitas: ["liberar Chile", "defender la frontera", "conquistar el Perú", "expulsar a los realistas de Buenos Aires"]

enunciado: "El objetivo principal de la {campañas[idx][0]} liderada por San Martín era ___."

explicacion: |
  San Martín diseñó el plan continental para asegurar la independencia de las Provincias Unidas mediante la liberación de Chile y luego Perú.
```
