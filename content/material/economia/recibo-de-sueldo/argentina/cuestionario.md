# Economía — Recibo de sueldo (Argentina) (cuestionario, 24 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Alícuotas usadas: jubilación 11%,
> obra social 3%, PAMI 3% (total 17%) — aportes personales del sector
> privado en relación de dependencia.

---

### 1 — Los tres aportes obligatorios

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

enunciado: "¿Cuáles son los tres aportes obligatorios del empleado en Argentina (sector privado)?"
tipo: mc
opciones_explicitas:
  - "Jubilación, obra social y PAMI"
  - "IVA, ganancias y bienes personales"
  - "Sindicato, presentismo y antigüedad"
respuesta: "Jubilación, obra social y PAMI"

explicacion: |
  Son los tres aportes personales que se descuentan del bruto en
  cualquier recibo de sueldo en blanco.
```

### 2 — El porcentaje total de aportes

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo"]

respuesta: 17
tipo: input
tolerancia_abs: 0

enunciado: "Jubilación 11% + obra social 3% + PAMI 3%. ¿Qué porcentaje total del bruto representan los tres aportes juntos?"

explicacion: |
  11 + 3 + 3 = 17% del bruto.
```

### 3 — Calcular el aporte jubilatorio

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(50, 300) * 1000

respuesta: bruto * 0.11
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un sueldo bruto de ${bruto}, ¿cuánto se descuenta por jubilación (11%)?"

explicacion: |
  Es el aporte más grande de los tres.
```

### 4 — Calcular el aporte de obra social

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(50, 300) * 1000

respuesta: bruto * 0.03
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un sueldo bruto de ${bruto}, ¿cuánto se descuenta por obra social (3%)?"

explicacion: |
  Financia la cobertura de salud del trabajador y su familia.
```

### 5 — Calcular el aporte de PAMI

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(50, 300) * 1000

respuesta: bruto * 0.03
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un sueldo bruto de ${bruto}, ¿cuánto se descuenta por PAMI/INSSJP (3%)?"

explicacion: |
  Financia la cobertura de salud de los jubilados.
```

### 6 — Calcular el total de aportes

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(50, 300) * 1000

respuesta: bruto * 0.17
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un sueldo bruto de ${bruto}, ¿cuánto suman los tres aportes obligatorios juntos (17%)?"

explicacion: |
  Jubilación (11%) + obra social (3%) + PAMI (3%) = 17% del bruto.
```

### 7 — Calcular el neto después de los aportes

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(50, 300) * 1000

respuesta: bruto * 0.83
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un sueldo bruto de ${bruto}, y sin otros descuentos, ¿cuál es el neto después de los tres aportes obligatorios?"

pasos:
  - "{bruto} × (1 - 0,17) = {bruto} × 0,83 = {bruto * 0.83}"

explicacion: |
  Se descuenta el 17% total: queda el 83% del bruto.
```

### 8 — Aportes y contribuciones patronales NO son lo mismo

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Los aportes del empleado y las contribuciones patronales son exactamente lo mismo, sólo que con otro nombre."

explicacion: |
  Los aportes los paga el empleado (se ven en su recibo); las
  contribuciones patronales las paga el empleador, aparte, sobre el mismo
  bruto.
```

### 9 — Quién paga las contribuciones patronales

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las contribuciones patronales las paga el empleador, no se descuentan del sueldo del empleado."

explicacion: |
  Por eso no aparecen restadas en el recibo del trabajador, aunque sí
  forman parte del costo laboral total para la empresa.
```

### 10 — Problema: neto con aportes más cuota sindical

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo", "problema"]

variables:
  bruto: random(50, 300) * 1000
  sindicato: uno_de([1, 2, 3])

respuesta: bruto * (1 - 0.17 - sindicato / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "Sueldo bruto ${bruto}, con los aportes obligatorios (17%) más una cuota sindical del {sindicato}%. ¿Cuál es el neto?"

pasos:
  - "{bruto} × (1 - 0,17 - {sindicato}/100) = {bruto * (1 - 0.17 - sindicato / 100)}"

explicacion: |
  Se suman todos los porcentajes de descuento y se restan juntos del
  bruto.
```

### 11 — Cuánto es un aguinaldo

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "aguinaldo"]

variables:
  mejor_sueldo: random(50, 300) * 1000

respuesta: mejor_sueldo / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "El mejor sueldo bruto del semestre fue ${mejor_sueldo}. ¿Cuánto corresponde de aguinaldo (SAC) ese semestre?"

explicacion: |
  El aguinaldo es la mitad del mejor sueldo del semestre.
```

### 12 — Cuántos sueldos se cobran por año

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "aguinaldo"]

respuesta: 13
tipo: input
tolerancia_abs: 0

enunciado: "Contando los 12 sueldos mensuales más el aguinaldo (medio sueldo dos veces al año, o sea un sueldo completo repartido en dos pagos), ¿a cuántos sueldos equivale el total cobrado en un año?"

explicacion: |
  12 sueldos mensuales + el equivalente a 1 sueldo más de aguinaldo (dos
  mitades) = 13 sueldos por año.
```

### 13 — Problema: total anual con aguinaldo

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo", "problema", "aguinaldo"]

variables:
  sueldo_mensual: random(50, 300) * 1000

respuesta: sueldo_mensual * 13
tipo: input
tolerancia_abs: 0.01

enunciado: "Alguien cobra ${sueldo_mensual} de bruto todos los meses del año, sin cambios. Contando el aguinaldo, ¿cuánto cobra de bruto en todo el año?"

pasos:
  - "{sueldo_mensual} × 13 = {sueldo_mensual * 13}"

explicacion: |
  12 sueldos mensuales más el equivalente a 1 sueldo de aguinaldo (medio
  sueldo en junio, medio en diciembre).
```

### 14 — Verificar un cálculo de aportes (con error a veces)

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "verificacion"]

variables:
  bruto: random(50, 300) * 1000
  correcto: bruto * 0.17
  error: uno_de([0, 0, 0, 1000, -1000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? Con bruto ${bruto}, los aportes obligatorios (17%) dan ${mostrado}."

explicacion: |
  Se vuelve a calcular el 17% del bruto y se compara.
```

### 15 — Elegir el resultado correcto

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo"]

variables:
  bruto: random(50, 300) * 1000
  correcto: bruto * 0.83

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - bruto * 0.17
  - bruto * 1.17

enunciado: "Sueldo bruto ${bruto}, sólo con los tres aportes obligatorios (17%). ¿Cuál es el neto?"

explicacion: |
  La segunda opción es el DESCUENTO, no el neto; la tercera suma en vez
  de restar.
```

### 16 — Completar el bruto dado el neto (sólo aportes)

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo"]

variables:
  bruto: random(50, 300) * 1000
  neto: bruto * 0.83

tipo: completar
enunciado: "Un trabajador cobra ${neto} de neto, después de los aportes obligatorios (17%) y sin otros descuentos. Completá cuál era el sueldo bruto."
respuestas_validas:
  - neto / 0.83

explicacion: |
  bruto = neto ÷ 0,83 (deshacer el descuento del 17%).
```

### 17 — Comparar aportes de dos sueldos

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "comparacion"]

variables:
  a: random(50, 300) * 1000
  b: random(50, 300) * 1000

restricciones:
  - a != b

respuesta: ((a * 0.17) > (b * 0.17))
tipo: vf

enunciado: "¿Descuenta más de aportes obligatorios un bruto de ${a} que uno de ${b}?"

explicacion: |
  A mayor bruto, mayor el monto de aportes (el porcentaje es el mismo,
  17%, pero se aplica sobre una base más grande).
```

### 18 — Costo laboral total para el empleador

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para el empleador, el costo real de un empleado es mayor que el sueldo bruto, porque además paga las contribuciones patronales aparte."

explicacion: |
  El bruto es lo que ve reflejado el empleado en su recibo; el empleador
  paga ese bruto MÁS las contribuciones patronales, que no se descuentan
  del sueldo del trabajador.
```

### 19 — La jubilación es el aporte más grande

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "De los tres aportes obligatorios, la jubilación (11%) es el más grande — más que obra social y PAMI juntos (3%+3%=6%)."

explicacion: |
  11% es más que 6%: la jubilación es, por lejos, el aporte más grande.
```

### 20 — Ordenar los tres aportes de menor a mayor

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "orden"]

tipo: ordenar
enunciado: "Ordená estos tres aportes de menor a mayor porcentaje (puede haber empate)."
opciones_explicitas:
  - "Jubilación"
  - "PAMI"
  - "Obra social"
respuesta_orden: ["PAMI", "Obra social", "Jubilación"]

explicacion: |
  PAMI y obra social empatan en 3% cada uno; jubilación es 11%, el más
  grande de los tres.
```

### 21 — La cuota sindical no es un aporte nacional

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de jubilación, obra social y PAMI (obligatorios en todo el país), la cuota sindical depende de cada actividad y convenio."

explicacion: |
  No todos los trabajos tienen sindicato con cuota, ni el porcentaje es
  el mismo en todos los gremios.
```

### 22 — Problema: aguinaldo con sueldo variable

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo", "aguinaldo", "problema"]

variables:
  sueldo1: random(50, 200) * 1000
  sueldo2: sueldo1 + random(10, 50) * 1000

respuesta: sueldo2 / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "En un semestre, alguien cobró ${sueldo1} un mes y ${sueldo2} otro (el resto igual o menos). ¿Cuánto le corresponde de aguinaldo ese semestre?"

explicacion: |
  El aguinaldo se calcula sobre el MEJOR sueldo del semestre, no sobre un
  promedio.
```

### 23 — El SAC son dos pagos al año

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "aguinaldo"]

respuesta: verdadero
tipo: vf

enunciado: "El aguinaldo (SAC) se cobra en dos pagos al año: uno en junio y otro en diciembre."

explicacion: |
  Cada pago es la mitad del mejor sueldo del semestre correspondiente.
```

### 24 — Los aportes obligatorios (cierre)

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En Argentina, un empleado en blanco del sector privado tiene tres aportes obligatorios sobre el bruto: jubilación (11%), obra social (3%) y PAMI (3%)."

explicacion: |
  Es la idea central de este módulo: la aplicación concreta del concepto
  general de \"descuentos\" a la legislación laboral argentina.
```
