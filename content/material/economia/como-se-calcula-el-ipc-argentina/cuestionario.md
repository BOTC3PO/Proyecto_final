# Economía — Cómo se calcula el IPC en Argentina (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Quién calcula el IPC

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "basico"
  tags: ["ipc", "vocabulario"]

enunciado: "¿Qué organismo calcula y publica el IPC en Argentina?"
tipo: mc
opciones_explicitas:
  - "El INDEC"
  - "El Banco Central"
  - "El Ministerio de Trabajo"
respuesta: "El INDEC"

explicacion: |
  El Instituto Nacional de Estadística y Censos es el organismo estadístico oficial.
```

### 2 — Qué mide el IPC

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "basico"
  tags: ["ipc", "vocabulario"]

enunciado: "¿Qué mide el IPC?"
tipo: mc
opciones_explicitas:
  - "La variación del precio de una canasta fija de bienes y servicios de consumo de los hogares"
  - "El total de dinero que circula en el país"
  - "El salario promedio de la economía"
respuesta: "La variación del precio de una canasta fija de bienes y servicios de consumo de los hogares"

explicacion: |
  No mide todo lo que cuesta vivir: mide una canasta definida.
```

### 3 — Para qué sirven los ponderadores

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "basico"
  tags: ["ipc", "ponderadores"]

enunciado: "¿Para qué sirven los ponderadores del IPC?"
tipo: mc
opciones_explicitas:
  - "Para darle a cada rubro un peso según la parte del gasto de los hogares que representa"
  - "Para fijar el precio máximo de cada producto"
  - "Para convertir pesos en dólares"
respuesta: "Para darle a cada rubro un peso según la parte del gasto de los hogares que representa"

explicacion: |
  Un rubro que pesa mucho en el gasto del hogar influye más en el índice.
```

### 4 — De dónde salen los ponderadores

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "intermedio"
  tags: ["ipc", "ponderadores"]

enunciado: "¿De qué encuesta se obtienen los ponderadores del IPC?"
tipo: mc
opciones_explicitas:
  - "De la Encuesta Nacional de Gastos de los Hogares (ENGHo)"
  - "De la Encuesta Permanente de Hogares sobre empleo"
  - "Del censo de población"
respuesta: "De la Encuesta Nacional de Gastos de los Hogares (ENGHo)"

explicacion: |
  La ENGHo releva cuánto gastan los hogares en cada tipo de bien y servicio.
```

### 5 — Ponderadores fijos

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "intermedio"
  tags: ["ipc", "ponderadores"]

respuesta: verdadero
tipo: vf

enunciado: "Los ponderadores del IPC no se recalculan todos los meses: se mantienen hasta que se hace una nueva encuesta de gastos."

explicacion: |
  Por eso una encuesta vieja puede alejar la canasta de los hábitos de consumo actuales.
```

### 6 — Mismo producto cada mes

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "intermedio"
  tags: ["ipc", "relevamiento"]

respuesta: verdadero
tipo: vf

enunciado: "Para que la comparación mensual sea válida, el IPC releva el mismo producto (misma marca y presentación) todos los meses."

explicacion: |
  Si cambiara el producto relevado, el cambio de precio mezclaría diferencias de calidad.
```

### 7 — Un solo IPC para todos

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "intermedio"
  tags: ["ipc", "regiones"]

respuesta: falso
tipo: vf

enunciado: "El INDEC publica un único índice para todo el país y no calcula índices por región."

explicacion: |
  Calcula índices por región (GBA, Pampeana, Noreste, Noroeste, Cuyo y Patagonia) y un dato nacional que los combina.
```

### 8 — Inflación y experiencia personal

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "avanzado"
  tags: ["ipc", "limites"]

respuesta: verdadero
tipo: vf

enunciado: "Como el IPC es un promedio, la inflación que vive un hogar concreto puede ser distinta de la oficial."

explicacion: |
  Depende de en qué rubros gasta ese hogar.
```

### 9 — Un mes es tendencia

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "avanzado"
  tags: ["ipc", "limites"]

respuesta: falso
tipo: vf

enunciado: "Con el dato de un solo mes alcanza para saber cuál es la tendencia de la inflación."

explicacion: |
  Un mes puede tener movimientos puntuales (tarifas, estacionalidad); se mira la evolución de varios meses.
```

### 10 — Variación mensual

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "basico"
  tags: ["ipc", "calculo"]

variables:
  ant: random(100, 400)
  suba: random(2, 30)
  act: ant + floor(ant * suba / 100)

respuesta: redondear((act / ant - 1) * 100, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "El IPC del mes pasado fue {ant} y el de este mes fue {act}. ¿Cuál fue la inflación mensual, en %? (redondeá a un decimal)"

pasos:
  - "Variación = IPC actual / IPC anterior − 1"
  - "{act} / {ant} − 1, por 100"

explicacion: |
  Se divide el índice actual por el anterior, se resta 1 y se multiplica por 100.
```

### 11 — Variación con números redondos

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "basico"
  tags: ["ipc", "calculo"]

variables:
  base: uno_de([100, 200, 250, 400, 500])
  pct: uno_de([2, 4, 5, 8, 10])
  act: base + base * pct / 100

respuesta: redondear((act / base - 1) * 100, 1)
tipo: input
tolerancia_abs: 0.1

enunciado: "El índice pasó de {base} a {act}. ¿Qué porcentaje de inflación hubo?"

pasos:
  - "({act} − {base}) / {base} × 100"

explicacion: |
  Variación porcentual = (actual − anterior) / anterior × 100.
```

### 12 — Inflación acumulada de dos meses

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "intermedio"
  tags: ["ipc", "acumulada"]

variables:
  m1: random(2, 12)
  m2: random(2, 12)

respuesta: redondear(((1 + m1 / 100) * (1 + m2 / 100) - 1) * 100, 2)
tipo: input
tolerancia_abs: 0.1

enunciado: "La inflación fue {m1}% en un mes y {m2}% en el siguiente. ¿Cuál fue la inflación acumulada de los dos meses, en %? (redondeá a dos decimales)"

pasos:
  - "Factor 1: 1 + {m1}/100"
  - "Factor 2: 1 + {m2}/100"
  - "Acumulada = producto de factores − 1"

explicacion: |
  Las variaciones se componen (se multiplican los factores), no se suman.
```

### 13 — Inflación acumulada de tres meses

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "avanzado"
  tags: ["ipc", "acumulada"]

variables:
  m1: random(1, 8)
  m2: random(1, 8)
  m3: random(1, 8)

respuesta: redondear(((1 + m1 / 100) * (1 + m2 / 100) * (1 + m3 / 100) - 1) * 100, 2)
tipo: input
tolerancia_abs: 0.1

enunciado: "Tres meses seguidos con inflación de {m1}%, {m2}% y {m3}%. ¿Cuál fue la acumulada del trimestre, en %? (redondeá a dos decimales)"

pasos:
  - "Multiplicar los tres factores (1 + tasa)"
  - "Restar 1 y pasar a porcentaje"

explicacion: |
  La acumulada compone los tres factores mensuales.
```

### 14 — Sumar o componer

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "intermedio"
  tags: ["ipc", "acumulada"]

enunciado: "Si la inflación fue 10% en enero y 10% en febrero, la acumulada de los dos meses es..."
tipo: mc
opciones_explicitas:
  - "21%"
  - "20%"
  - "Menos de 20%"
respuesta: "21%"

explicacion: |
  1,10 × 1,10 = 1,21: el segundo mes el 10% se aplica sobre precios que ya subieron.
```

### 15 — Salario real

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "intermedio"
  tags: ["ipc", "poder_adquisitivo"]

variables:
  sal: random(8, 20)
  inf: random(2, 12)

respuesta: redondear(((1 + sal / 100) / (1 + inf / 100) - 1) * 100, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "Un sueldo nominal subió {sal}% en un período en que la inflación fue {inf}%. ¿Cuánto varió el sueldo real, en %? (redondeá a un decimal; si bajó, poné un número negativo)"

pasos:
  - "Variación real = (1 + sueldo) / (1 + inflación) − 1"

explicacion: |
  Un número positivo significa que el sueldo ganó poder de compra; negativo, que lo perdió.
```

### 16 — Salario que sube menos que la inflación

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "intermedio"
  tags: ["ipc", "poder_adquisitivo"]

respuesta: verdadero
tipo: vf

enunciado: "Si el sueldo nominal sube 6% y la inflación fue 9%, el poder adquisitivo del sueldo bajó."

explicacion: |
  Con el mismo dinero se compra menos que antes.
```

### 17 — Ajuste de un alquiler por IPC

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "intermedio"
  tags: ["ipc", "ajuste"]

variables:
  alq: uno_de([200000, 250000, 300000, 400000, 500000])
  inf: uno_de([5, 8, 10, 12, 20])

respuesta: alq + alq * inf / 100
tipo: input
tolerancia_abs: 1

enunciado: "Un contrato de alquiler de ${alq} se ajusta por la inflación acumulada del período, que fue {inf}%. ¿Cuánto pasa a valer el alquiler, en pesos?"

pasos:
  - "Nuevo valor = valor actual × (1 + inflación)"

explicacion: |
  Los contratos que se ajustan por IPC multiplican el valor por el factor de la inflación acumulada.
```

### 18 — Qué es una canasta

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "basico"
  tags: ["ipc", "vocabulario"]

enunciado: "En el IPC, ¿qué es la 'canasta'?"
tipo: mc
opciones_explicitas:
  - "El conjunto de bienes y servicios cuyo precio se sigue mes a mes"
  - "La lista de productos que el gobierno prohíbe vender"
  - "El monto que necesita una familia para no ser pobre"
respuesta: "El conjunto de bienes y servicios cuyo precio se sigue mes a mes"

explicacion: |
  No confundir con la canasta básica de medición de pobreza, que es otro indicador.
```

### 19 — Inflación interanual

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "intermedio"
  tags: ["ipc", "vocabulario"]

enunciado: "¿Qué compara la inflación interanual?"
tipo: mc
opciones_explicitas:
  - "El índice de un mes con el del mismo mes del año anterior"
  - "El índice de un mes con el del mes anterior"
  - "El promedio de los últimos tres meses"
respuesta: "El índice de un mes con el del mismo mes del año anterior"

explicacion: |
  Por eso muestra el cambio acumulado de doce meses.
```

### 20 — Número índice

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "basico"
  tags: ["ipc", "vocabulario"]

tipo: completar
enunciado: "En un número índice se elige un mes base con valor ___ y los demás meses se comparan con él."
respuestas_validas:
  - 100

explicacion: |
  El mes base vale 100 por convención.
```

### 21 — Ponderador alto

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "intermedio"
  tags: ["ipc", "ponderadores"]

tipo: completar
enunciado: "Un rubro en el que los hogares gastan mucho tiene un ponderador ___ en el IPC (mayor / menor)."
respuestas_validas:
  - "mayor"

explicacion: |
  A mayor participación en el gasto, mayor influencia en el índice.
```

### 22 — Calidad y precio

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "avanzado"
  tags: ["ipc", "limites"]

respuesta: verdadero
tipo: vf

enunciado: "Si un producto reduce el tamaño de su envase y mantiene el precio, medir el aumento real es más difícil porque el IPC sigue precios de productos comparables."

explicacion: |
  Es una de las limitaciones de cualquier índice de precios.
```

### 23 — IPC mide cuánto cuesta vivir

```
metadata:
  materia: "economia"
  tema: "como_se_calcula_el_ipc_argentina"
  nivel: "avanzado"
  tags: ["ipc", "limites"]

respuesta: falso
tipo: vf

enunciado: "El IPC mide exactamente cuánto gasta cada hogar para vivir."

explicacion: |
  Mide la variación de precios de una canasta promedio, no el gasto real de cada hogar.
```
