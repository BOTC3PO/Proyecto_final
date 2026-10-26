# Economía — PBI e inflación: magnitud macroeconómica, no sólo tasa personal (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. PBI: tamaño de toda la
> economía. Inflación (acá): aumento generalizado de precios de todo
> el país, medido con un índice — no la lectura personal de `E7`.

---

### 1 — Qué es el PBI

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Qué mide el Producto Bruto Interno (PBI)?"
tipo: mc
opciones_explicitas:
  - "El valor total de todos los bienes y servicios finales producidos en un país durante un período"
  - "El total de dinero que hay en los bancos de un país"
  - "El sueldo promedio de los habitantes de un país"
respuesta: "El valor total de todos los bienes y servicios finales producidos en un país durante un período"

explicacion: |
  Es la medida estándar del tamaño de la economía de un país.
```

### 2 — Por qué se cuentan sólo bienes finales

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Por qué el PBI cuenta el pan terminado, pero no cuenta aparte la harina que se usó para hacerlo?"
tipo: mc
opciones_explicitas:
  - "Porque la harina ya está incluida en el valor del pan, y contarla aparte la contaría dos veces"
  - "Porque la harina no se considera un producto"
  - "Porque sólo se cuentan los productos importados"
respuesta: "Porque la harina ya está incluida en el valor del pan, y contarla aparte la contaría dos veces"

explicacion: |
  El PBI cuenta bienes FINALES, justamente para evitar la doble
  contabilización de los insumos intermedios.
```

### 3 — PBI nominal vs. PBI real

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Cuál es la diferencia principal entre PBI nominal y PBI real?"
tipo: mc
opciones_explicitas:
  - "El real está ajustado quitando el efecto de la inflación; el nominal no"
  - "El real sólo cuenta productos exportados; el nominal cuenta todo"
  - "No hay ninguna diferencia real entre los dos"
respuesta: "El real está ajustado quitando el efecto de la inflación; el nominal no"

explicacion: |
  Es la distinción central para saber si la economía realmente
  produjo más, o si el número sólo subió por los precios.
```

### 4 — El error de comparar sólo PBI nominal

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Comparar el PBI nominal de dos años distintos, sin ajustar por inflación, puede hacer parecer que la economía \"creció\" cuando en realidad sólo subieron los precios."

explicacion: |
  Por eso las comparaciones serias siempre usan el PBI real, no el
  nominal.
```

### 5 — Qué es el PBI per cápita

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Cómo se calcula el PBI per cápita?"
tipo: mc
opciones_explicitas:
  - "PBI total dividido la población del país"
  - "PBI total multiplicado por la población del país"
  - "El sueldo mínimo dividido el PBI total"
respuesta: "PBI total dividido la población del país"

explicacion: |
  Reparte el tamaño total de la economía entre la cantidad de
  habitantes.
```

### 6 — Calcular el PBI per cápita

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "calculo"]

variables:
  poblacion: uno_de([2, 4, 5, 8, 10])
  pbi_per_capita_real: random(5, 40) * 1000
  pbi_total: poblacion * pbi_per_capita_real

respuesta: pbi_total / poblacion
tipo: input
tolerancia_abs: 0

enunciado: "Un país tiene un PBI total de ${pbi_total} millones y una población de {poblacion} millones de habitantes. ¿Cuál es su PBI per cápita?"

explicacion: |
  PBI per cápita = PBI total / población.
```

### 7 — Por qué el PBI total no alcanza para comparar niveles de vida

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país con mucha población puede tener un PBI total enorme y, aun así, un nivel de vida bajo por persona — por eso conviene mirar el PBI per cápita, no sólo el total."

explicacion: |
  El PBI total mide tamaño; el per cápita se acerca más al nivel de
  vida promedio de cada habitante.
```

### 8 — Qué es la inflación (a escala país)

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "A escala de todo un país, ¿qué es la inflación?"
tipo: mc
opciones_explicitas:
  - "El aumento generalizado y sostenido de los precios de la economía en su conjunto"
  - "El aumento del precio de un solo producto puntual"
  - "La cantidad total de dinero que emite el banco central"
respuesta: "El aumento generalizado y sostenido de los precios de la economía en su conjunto"

explicacion: |
  No es que un producto puntual suba: es que la MAYORÍA de los
  precios sube de forma sostenida.
```

### 9 — Un solo producto más caro no es inflación

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Que un solo producto se ponga más caro por una razón puntual (por ejemplo, una mala cosecha) no es, por sí solo, inflación."

explicacion: |
  Inflación es un fenómeno generalizado del conjunto de precios, no un
  solo producto aislado.
```

### 10 — Cómo se mide la inflación

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Con qué herramienta se mide oficialmente la inflación de un país?"
tipo: mc
opciones_explicitas:
  - "Un índice de precios (como el IPC), que sigue el costo de una canasta representativa de bienes y servicios"
  - "El sueldo promedio de los trabajadores"
  - "El precio del dólar, exclusivamente"
respuesta: "Un índice de precios (como el IPC), que sigue el costo de una canasta representativa de bienes y servicios"

explicacion: |
  El IPC (Índice de Precios al Consumidor) es el ejemplo estándar de
  este tipo de índice.
```

### 11 — El año base del índice

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Por convención, un índice de precios arranca en un año base con valor 100, y a partir de ahí se compara cómo sube ese número."

explicacion: |
  Es la convención estándar de cualquier índice de precios.
```

### 12 — Calcular la inflación a partir del índice (año base 100)

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "calculo"]

variables:
  ipc_base: 100
  ipc_actual: 100 + random(5, 45)

respuesta: (ipc_actual - ipc_base) / ipc_base * 100
tipo: input
tolerancia_abs: 0

enunciado: "El índice de precios de un país arrancó el año en {ipc_base} (año base) y terminó en {ipc_actual}. ¿Cuál fue la tasa de inflación de ese período, en porcentaje?"

pasos:
  - "Variación: ({ipc_actual} - {ipc_base}) / {ipc_base}"
  - "En porcentaje: × 100"

explicacion: |
  Tasa de inflación = (Índice actual - Índice anterior) / Índice
  anterior × 100. Con año base 100, el resultado coincide con los
  puntos que subió el índice.
```

### 13 — Calcular el índice tras una inflación conocida

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "calculo"]

variables:
  ipc_anterior: uno_de([100, 120, 200])
  inflacion_pct: uno_de([5, 10, 20, 25, 50])

respuesta: ipc_anterior + ipc_anterior * inflacion_pct / 100
tipo: input
tolerancia_abs: 0

enunciado: "El índice de precios estaba en {ipc_anterior} y hubo una inflación del {inflacion_pct}% en el período siguiente. ¿En qué valor quedó el índice?"

explicacion: |
  Índice nuevo = Índice anterior + (Índice anterior × tasa de
  inflación).
```

### 14 — Distinguir E27 de E7

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre este tema (PBI e inflación) y el tema de \"Plazo fijo vs. inflación\" visto antes?"
tipo: mc
opciones_explicitas:
  - "Ese otro tema es la lectura PERSONAL de un dato de inflación ya conocido; este mide la inflación de todo el país desde cero, con un índice de precios"
  - "Son exactamente el mismo tema repetido"
  - "Este tema no tiene ninguna relación con la inflación"
respuesta: "Ese otro tema es la lectura PERSONAL de un dato de inflación ya conocido; este mide la inflación de todo el país desde cero, con un índice de precios"

explicacion: |
  Misma palabra, dos escalas: personal (un ahorro puntual) vs.
  macroeconómica (todo el país).
```

### 15 — Qué significa "crecimiento del PBI" en las noticias

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "Cuando un noticiero dice \"la economía creció 3% este año\", ¿a qué PBI se refiere normalmente?"
tipo: mc
opciones_explicitas:
  - "Al PBI real (ya ajustado por inflación)"
  - "Al PBI nominal (sin ajustar)"
  - "Al PBI per cápita exclusivamente"
respuesta: "Al PBI real (ya ajustado por inflación)"

explicacion: |
  Hablar de "crecimiento" implica que se produjo más, no que sólo
  subieron los precios — por eso se usa el PBI real.
```

### 16 — Calcular la tasa de crecimiento del PBI

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "calculo"]

variables:
  pbi_anterior: random(1, 20) * 20 * 1000
  crecimiento_pct: uno_de([5, 10, 15, 20, 25])
  pbi_actual: pbi_anterior + pbi_anterior * crecimiento_pct / 100

respuesta: (pbi_actual - pbi_anterior) / pbi_anterior * 100
tipo: input
tolerancia_abs: 0

enunciado: "El PBI real de un país fue ${pbi_anterior} millones un año, y ${pbi_actual} millones el año siguiente. ¿Cuál fue la tasa de crecimiento del PBI, en porcentaje?"

explicacion: |
  Tasa de crecimiento = (PBI actual - PBI anterior) / PBI anterior ×
  100 — la misma lógica que la tasa de inflación, aplicada al tamaño
  de la economía en vez de a los precios.
```

### 17 — El "Interno" del PBI

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Qué significa la \"I\" (Interno) del PBI?"
tipo: mc
opciones_explicitas:
  - "Se cuenta lo producido DENTRO del país, sin importar la nacionalidad de quién lo produjo"
  - "Se cuenta sólo lo producido por empresas del propio país en cualquier lugar del mundo"
  - "Se cuenta sólo lo que se consume dentro del país"
respuesta: "Se cuenta lo producido DENTRO del país, sin importar la nacionalidad de quién lo produjo"

explicacion: |
  Es un criterio geográfico (dónde se produce), no de nacionalidad de
  quién produce.
```

### 18 — Bruto: no se descuenta el desgaste del capital

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La palabra \"Bruto\" del PBI significa que no se descuenta el desgaste de las máquinas y edificios usados para producir."

explicacion: |
  Es lo que distingue al PBI Bruto de un cálculo Neto, que sí
  descontaría esa depreciación.
```

### 19 — Quién publica el IPC

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Qué tipo de organismo suele publicar el IPC oficial de un país?"
tipo: mc
opciones_explicitas:
  - "Un organismo estatal de estadísticas (como el INDEC en Argentina)"
  - "Un banco privado cualquiera"
  - "Cada supermercado por separado"
respuesta: "Un organismo estatal de estadísticas (como el INDEC en Argentina)"

explicacion: |
  Es una medición oficial, centralizada en un organismo estadístico
  del Estado.
```

### 20 — Ordenar el proceso de medir la inflación

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos de cómo se mide la inflación de un país."
opciones_explicitas:
  - "Se calcula la variación porcentual del índice entre dos períodos"
  - "Se releva el precio de esa canasta mes a mes"
  - "Se define una canasta representativa de bienes y servicios"
  - "Se arma un índice de precios (base 100) con esos relevamientos"
respuesta_orden: ["Se define una canasta representativa de bienes y servicios", "Se releva el precio de esa canasta mes a mes", "Se arma un índice de precios (base 100) con esos relevamientos", "Se calcula la variación porcentual del índice entre dos períodos"]

explicacion: |
  Cada paso es prerrequisito del siguiente: sin canasta no hay
  relevamiento, sin relevamiento no hay índice, sin índice no hay
  variación que calcular.
```

### 21 — Completar la fórmula de la tasa de inflación

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia"]

variables:
  ipc_base: 100
  ipc_actual: 100 + random(5, 45)
  tasa: (ipc_actual - ipc_base) / ipc_base * 100

tipo: completar
enunciado: "Completá: Tasa de inflación = ({ipc_actual} - {ipc_base}) / {ipc_base} × 100 = ___ (tasa, en porcentaje)."
respuestas_validas:
  - tasa

explicacion: |
  Es la aplicación directa de la fórmula de tasa de inflación.
```

### 22 — Cierre del tema

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El PBI mide el tamaño de toda la economía de un país, y la inflación (a esta escala) mide el aumento generalizado de precios de todo el país, medido con un índice — distinto de la lectura personal de cuánto rinde un ahorro puntual."

explicacion: |
  Es la idea central de todo el tema.
```
