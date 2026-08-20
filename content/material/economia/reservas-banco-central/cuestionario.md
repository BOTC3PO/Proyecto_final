# Economía — Reservas y banco central (cuestionario, 21 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Reservas: activos en moneda
> extranjera del banco central. Sirven para defender el tipo de
> cambio, pagar deuda externa, y dar confianza.

---

### 1 — Qué es un banco central

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "basico"
  tags: ["banca_central", "vocabulario"]

enunciado: "¿Cuál de estas es una función del banco central de un país?"
tipo: mc
opciones_explicitas:
  - "Emitir la moneda oficial y fijar la política monetaria"
  - "Vender productos directamente a los consumidores"
  - "Fijar el precio de todos los bienes de la economía"
respuesta: "Emitir la moneda oficial y fijar la política monetaria"

explicacion: |
  Es una de las funciones centrales de cualquier banco central.
```

### 2 — Qué es el prestamista de última instancia

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "intermedio"
  tags: ["banca_central", "vocabulario"]

enunciado: "¿Qué significa que el banco central actúe como \"prestamista de última instancia\"?"
tipo: mc
opciones_explicitas:
  - "Le presta a un banco comercial con problemas de liquidez, para evitar que el problema se contagie a todo el sistema financiero"
  - "Le presta dinero directamente a cualquier persona que se lo pida"
  - "Es el único banco al que pueden pedir un crédito las empresas grandes"
respuesta: "Le presta a un banco comercial con problemas de liquidez, para evitar que el problema se contagie a todo el sistema financiero"

explicacion: |
  Es una función de estabilidad del sistema financiero en su
  conjunto.
```

### 3 — Qué son las reservas internacionales

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "basico"
  tags: ["banca_central", "vocabulario"]

enunciado: "¿Qué son las reservas internacionales de un banco central?"
tipo: mc
opciones_explicitas:
  - "Activos disponibles del banco central, mayormente moneda extranjera, oro y otros activos líquidos"
  - "El total de la deuda pública de un país"
  - "El sueldo de los empleados del banco central"
respuesta: "Activos disponibles del banco central, mayormente moneda extranjera, oro y otros activos líquidos"

explicacion: |
  Es, en la práctica, lo que el banco central tiene guardado para usar
  cuando hace falta.
```

### 4 — De dónde salen las reservas: superávit comercial

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "intermedio"
  tags: ["banca_central", "vocabulario"]

enunciado: "¿Cómo puede un país acumular reservas a través de su comercio exterior?"
tipo: mc
opciones_explicitas:
  - "Teniendo superávit comercial: exportando más de lo que importa, entran más dólares de los que salen"
  - "Teniendo déficit comercial, sin excepción"
  - "El comercio exterior no tiene ninguna relación con las reservas"
respuesta: "Teniendo superávit comercial: exportando más de lo que importa, entran más dólares de los que salen"

explicacion: |
  Es la conexión directa con `balanza-comercial/`.
```

### 5 — Otras fuentes de reservas

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "intermedio"
  tags: ["banca_central", "vocabulario"]

enunciado: "Además del superávit comercial, ¿de qué otras dos formas puede un país sumar reservas?"
tipo: mc
opciones_explicitas:
  - "Inversión extranjera y préstamos (de otros países u organismos como el FMI)"
  - "Bajando la tasa de interés a cero"
  - "Aumentando el gasto público interno"
respuesta: "Inversión extranjera y préstamos (de otros países u organismos como el FMI)"

explicacion: |
  Son las otras dos fuentes principales mencionadas en la teoría.
```

### 6 — Para qué sirven las reservas: defender el tipo de cambio

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "intermedio"
  tags: ["banca_central", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una de las funciones de las reservas es defender un tipo de cambio fijo, comprando o vendiendo moneda propia según haga falta."

explicacion: |
  Es la conexión directa con `tipo-cambio-fijo/`.
```

### 7 — Para qué sirven las reservas: pagar deuda externa

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "intermedio"
  tags: ["banca_central", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las reservas también sirven para pagar obligaciones en moneda extranjera, como vencimientos de deuda pública externa."

explicacion: |
  Es la conexión que se retoma en `deuda-publica-externa/`.
```

### 8 — Reservas y confianza internacional

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "avanzado"
  tags: ["banca_central", "vocabulario"]

enunciado: "¿Por qué tener reservas altas puede ayudar a un país a conseguir préstamos más baratos en el resto del mundo?"
tipo: mc
opciones_explicitas:
  - "Porque transmite confianza de que puede cumplir sus compromisos en moneda extranjera sin problemas"
  - "Porque los prestamistas exigen ver las reservas antes de prestar, sin importar el monto"
  - "No hay ninguna relación entre reservas y costo de endeudarse"
respuesta: "Porque transmite confianza de que puede cumplir sus compromisos en moneda extranjera sin problemas"

explicacion: |
  Más reservas suele asociarse con menor riesgo percibido por quien
  presta.
```

### 9 — Reservas brutas vs. netas

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "avanzado"
  tags: ["banca_central", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre reservas brutas y reservas netas?"
tipo: mc
opciones_explicitas:
  - "Las netas restan compromisos de corto plazo ya comprometidos; las brutas son el total de activos sin descontar nada"
  - "Las brutas sólo cuentan oro; las netas sólo cuentan dólares"
  - "No hay ninguna diferencia real entre las dos"
respuesta: "Las netas restan compromisos de corto plazo ya comprometidos; las brutas son el total de activos sin descontar nada"

explicacion: |
  Es una distinción habitual del debate público sobre cuánta
  \"munición\" real tiene un banco central.
```

### 10 — Por qué importa la distinción bruta/neta

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "avanzado"
  tags: ["banca_central", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un banco central puede tener reservas brutas altas pero reservas netas mucho más bajas, si gran parte de esas reservas ya están comprometidas con obligaciones de corto plazo."

explicacion: |
  Por eso la distinción es relevante para saber cuánto margen real
  tiene para intervenir.
```

### 11 — Qué es la independencia del banco central

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "avanzado"
  tags: ["banca_central", "vocabulario"]

enunciado: "¿Qué significa que un banco central sea \"independiente\" o \"autónomo\" del gobierno de turno?"
tipo: mc
opciones_explicitas:
  - "Que no está obligado a emitir dinero para financiar el gasto público, ni a bajar la tasa por pedido del gobierno"
  - "Que no tiene ninguna relación con la política económica del país"
  - "Que sus empleados son elegidos por voto popular"
respuesta: "Que no está obligado a emitir dinero para financiar el gasto público, ni a bajar la tasa por pedido del gobierno"

explicacion: |
  Es un diseño institucional que separa las decisiones monetarias de
  las presiones fiscales de corto plazo.
```

### 12 — No hay un único modelo correcto de autonomía

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "avanzado"
  tags: ["banca_central", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La autonomía de un banco central tiene argumentos de ambos lados (menos inflación, pero también menos herramientas para el gobierno en una emergencia) — no hay un único modelo adoptado por todos los países."

explicacion: |
  Es un criterio de diseño institucional, no una regla universal
  única.
```

### 13 — Ejemplos reales de bancos centrales

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "basico"
  tags: ["banca_central", "vocabulario"]

enunciado: "¿Cuál de estas instituciones es un ejemplo real de banco central?"
tipo: mc
opciones_explicitas:
  - "La Reserva Federal de Estados Unidos (Fed)"
  - "El Fondo Monetario Internacional (FMI)"
  - "La Organización Mundial del Comercio (OMC)"
respuesta: "La Reserva Federal de Estados Unidos (Fed)"

explicacion: |
  La Fed es el banco central de Estados Unidos; el FMI y la OMC son
  organismos internacionales de otro tipo.
```

### 14 — Qué significa que caigan las reservas

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "intermedio"
  tags: ["banca_central", "problema"]

enunciado: "Un informe dice: \"las reservas del banco central cayeron U$S 500 millones esta semana\". ¿Qué suele significar esto, bajo un régimen de tipo de cambio fijo o administrado?"
tipo: mc
opciones_explicitas:
  - "Que el banco central intervino vendiendo dólares para sostener el tipo de cambio"
  - "Que el país recibió un préstamo enorme del FMI"
  - "Que subió mucho la inflación de ese país"
respuesta: "Que el banco central intervino vendiendo dólares para sostener el tipo de cambio"

explicacion: |
  Es la lectura habitual de una caída de reservas en ese contexto.
```

### 15 — Pedir un préstamo al FMI para reforzar reservas

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "intermedio"
  tags: ["banca_central", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "Que un país le pida un préstamo al FMI para \"reforzar reservas\" significa, literalmente, pedir dólares prestados para tener más margen de intervención."

explicacion: |
  Es una aplicación concreta y real de los préstamos como fuente de
  reservas.
```

### 16 — Relación entre reservas y devaluación

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "avanzado"
  tags: ["banca_central", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando las reservas de un banco central se agotan defendiendo un tipo de cambio fijo, esa falta de reservas es lo que suele forzar una devaluación."

explicacion: |
  Es la conexión directa con el tema anterior, `devaluacion/`.
```

### 17 — Función reguladora del banco central

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "intermedio"
  tags: ["banca_central", "vocabulario"]

enunciado: "Además de emitir moneda y fijar la tasa de interés, ¿qué otra función cumple habitualmente un banco central?"
tipo: mc
opciones_explicitas:
  - "Regular y supervisar a los bancos comerciales"
  - "Fijar el precio de todos los productos de supermercado"
  - "Administrar directamente las empresas estatales"
respuesta: "Regular y supervisar a los bancos comerciales"

explicacion: |
  Es una de las funciones centrales mencionadas en la teoría.
```

### 18 — Ordenar el ciclo de acumulación y uso de reservas

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "avanzado"
  tags: ["banca_central", "orden"]

tipo: ordenar
enunciado: "Ordená esta secuencia de cómo un país acumula reservas y después las usa para defender su tipo de cambio."
opciones_explicitas:
  - "El banco central usa esas reservas acumuladas para defender el valor fijado"
  - "Llega una crisis con fuerte demanda de dólares al tipo de cambio fijado"
  - "El país tiene superávit comercial durante varios años"
  - "El banco central acumula reservas con esos dólares excedentes"
respuesta_orden: ["El país tiene superávit comercial durante varios años", "El banco central acumula reservas con esos dólares excedentes", "Llega una crisis con fuerte demanda de dólares al tipo de cambio fijado", "El banco central usa esas reservas acumuladas para defender el valor fijado"]

explicacion: |
  El orden muestra el ciclo completo: acumular en tiempos buenos,
  para poder usar en tiempos de presión.
```

### 19 — El BCRA como ejemplo

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "basico"
  tags: ["banca_central", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Banco Central de la República Argentina (BCRA) es un ejemplo real de banco central, con sus propias reglas de autonomía y manejo de reservas."

explicacion: |
  Es el ejemplo local citado en la teoría, junto a la Fed y el BCE.
```

### 20 — Completar la definición de reservas

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "basico"
  tags: ["banca_central"]

tipo: completar
enunciado: "Completá: las reservas internacionales son los activos disponibles del banco central, mayormente en moneda ___ (no la propia del país)."
respuestas_validas:
  - "extranjera"

explicacion: |
  Es la definición central de reservas internacionales.
```

### 21 — Cierre del tema

```
metadata:
  materia: "economia"
  tema: "reservas_banco_central"
  nivel: "basico"
  tags: ["banca_central", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El banco central es la institución que emite moneda, fija la política monetaria y administra las reservas, que sirven para defender el tipo de cambio, pagar deuda externa y dar confianza al resto del mundo."

explicacion: |
  Es la idea central de todo el tema.
```
