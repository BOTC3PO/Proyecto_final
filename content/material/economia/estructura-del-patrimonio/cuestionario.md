# Economia — estructura del patrimonio (cuestionario, 20 preguntas VBLang)

> Tema: `economia/estructura-del-patrimonio`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["ecuacion_patrimonial"]

respuesta: verdadero
tipo: vf

enunciado: "El patrimonio neto es igual a los activos menos los pasivos."

explicacion: |
  Esta es la ecuación patrimonial fundamental: Pat = Activo - Pasivo.
```

### 2 — pregunta 2

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "pasivo"]

variables:
  activo: random(100000, 500000)
  patrimonio: random(20000, 100000)
  pasivo: activo - patrimonio

respuesta: pasivo
tipo: input

enunciado: "Una empresa tiene un activo total de ${activo} y un patrimonio neto de ${patrimonio}. ¿Cuál es el total de sus pasivos?"

explicacion: |
  Si Activo - Pasivo = Patrimonio, entonces Pasivo = Activo - Patrimonio.
```

### 3 — pregunta 3

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "avanzado"
  tags: ["interpretacion", "insolvencia"]

respuesta: falso
tipo: vf

enunciado: "Si el patrimonio neto es negativo, la empresa tiene más bienes que deudas."

explicacion: |
  Patrimonio negativo significa que los pasivos superan a los activos (Activo < Pasivo).
```

### 4 — pregunta 4

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "activo"]

variables:
  pasivo: random(50000, 200000)
  patrimonio: random(10000, 50000)
  activo: pasivo + patrimonio

respuesta: activo
tipo: input

enunciado: "Si el pasivo total es ${pasivo} y el patrimonio neto es ${patrimonio}, ¿cuál es el activo total?"

explicacion: |
  Activo = Pasivo + Patrimonio Neto.
```

### 5 — pregunta 5

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["variacion", "ganancia"]

variables:
  activo_inicial: random(100000, 200000)
  pasivo_inicial: random(50000, 100000)
  ganancia: random(10000, 50000)
  activo_final: activo_inicial + ganancia
  pasivo_final: pasivo_inicial
  pat_inicial: activo_inicial - pasivo_inicial
  pat_final: activo_final - pasivo_final
  variacion: pat_final - pat_inicial

respuesta: variacion
tipo: input

enunciado: "Si una empresa tiene Activo {activo_inicial} y Pasivo {pasivo_inicial}, y luego obtiene una ganancia de {ganancia} que aumenta su activo, ¿cuánto aumentó su patrimonio neto?"

explicacion: |
  Al aumentar el activo sin cambiar el pasivo, el patrimonio neto aumenta exactamente por el monto de la ganancia.
```

### 6 — pregunta 6

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["estructura", "financiamiento"]

respuesta: verdadero
tipo: vf

enunciado: "El financiamiento de una empresa proviene de sus acreedores (pasivo) y de sus dueños (patrimonio)."

explicacion: |
  Correcto. Los activos se financian con deuda externa e interna.
```

### 7 — pregunta 7

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "avanzado"
  tags: ["calculo", "agregacion"]

variables:
  activo_caja: random(5000, 20000)
  activo_banco: random(10000, 50000)
  activo_inventario: random(20000, 100000)
  activo_maquinaria: random(50000, 200000)
  pasivo_proveedores: random(5000, 20000)
  pasivo_prestamo: random(10000, 50000)
  
  activo_total: activo_caja + activo_banco + activo_inventario + activo_maquinaria
  pasivo_total: pasivo_proveedores + pasivo_prestamo
  patrimonio: activo_total - pasivo_total

respuesta: patrimonio
tipo: input

enunciado: "Activo Caja: {activo_caja}, Activo Banco: {activo_banco}, Activo Inventario: {activo_inventario}, Activo Maquinaria: {activo_maquinaria}. Pasivo Proveedores: {pasivo_proveedores}, Pasivo Préstamo: {pasivo_prestamo}. Calcula el Patrimonio Neto."

explicacion: |
  Sumar todos los activos, restar todos los pasivos. El resultado es el patrimonio neto.
```

### 8 — pregunta 8

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["transaccion", "balance"]

variables:
  monto: random(10000, 50000)
  activo_inicial: random(100000, 200000)
  pasivo_inicial: random(50000, 100000)
  pat_inicial: activo_inicial - pasivo_inicial
  activo_final: activo_inicial + monto
  pasivo_final: pasivo_inicial + monto
  pat_final: activo_final - pasivo_final
  cambio_patrimonio: pat_final - pat_inicial

respuesta: cambio_patrimonio
tipo: input

enunciado: "Si la empresa compra un activo de ${monto} a crédito, ¿cuánto cambia su patrimonio neto?"

explicacion: |
  Al aumentar activo y pasivo en la misma cantidad, la diferencia (patrimonio) no cambia.
```

### 9 — pregunta 9

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "avanzado"
  tags: ["solvencia", "riesgo"]

respuesta: verdadero
tipo: vf

enunciado: "Un patrimonio neto negativo puede indicar que la empresa es insolvente técnicamente."

explicacion: |
  Si Pasivo > Activo, la empresa no tiene suficiente para cubrir sus deudas con sus propios bienes, lo que es un riesgo de insolvencia técnica.
```

### 10 — pregunta 10

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "activo_circulante"]

variables:
  activo_total: random(200000, 500000)
  activo_no_circulante: random(50000, 200000)
  activo_circulante: activo_total - activo_no_circulante

respuesta: activo_circulante
tipo: input

enunciado: "El activo total es ${activo_total} y el no circulante es ${activo_no_circulante}. ¿Cuánto es el activo circulante?"

explicacion: |
  Activo Circulante = Activo Total - Activo No Circulante.
```

### 11 — pregunta 11

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["principio", "doble entrada"]

respuesta: verdadero
tipo: vf

enunciado: "Todo activo está financiado por pasivos o patrimonio."

explicacion: |
  Es la base de la partida doble: no hay activo sin una fuente de financiamiento (deuda o capital propio).
```

### 12 — pregunta 12

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "pasivo_circulante"]

variables:
  pasivo_total: random(100000, 300000)
  pasivo_no_circulante: random(20000, 100000)
  pasivo_circulante: pasivo_total - pasivo_no_circulante

respuesta: pasivo_circulante
tipo: input

enunciado: "Si el pasivo total es ${pasivo_total} y el no circulante es ${pasivo_no_circulante}, ¿cuánto es el pasivo circulante?"

explicacion: |
  Pasivo Circulante = Pasivo Total - Pasivo No Circulante.
```

### 13 — pregunta 13

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["transaccion", "liquidez"]

variables:
  monto: random(5000, 20000)
  activo_inicial: random(100000, 200000)
  pasivo_inicial: random(50000, 100000)
  pat_inicial: activo_inicial - pasivo_inicial
  activo_final: activo_inicial - monto
  pasivo_final: pasivo_inicial - monto
  pat_final: activo_final - pasivo_final
  cambio_patrimonio: pat_final - pat_inicial

respuesta: cambio_patrimonio
tipo: input

enunciado: "Si la empresa paga ${monto} de su deuda, ¿cuánto cambia su patrimonio neto?"

explicacion: |
  Al bajar activo y pasivo en la misma cantidad, el patrimonio neto permanece igual.
```

### 14 — pregunta 14

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["activo", "efectivo"]

respuesta: verdadero
tipo: vf

enunciado: "El efectivo en caja es un activo circulante."

explicacion: |
  El efectivo es el activo más líquido y se usa inmediatamente, por lo que es circulante.
```

### 15 — pregunta 15

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "avanzado"
  tags: ["capital", "variacion"]

variables:
  activo: random(200000, 500000)
  pasivo: random(50000, 150000)
  capital_inicial: random(50000, 100000)
  nueva_inversion: random(10000, 50000)
  activo_final: activo + nueva_inversion
  pasivo_final: pasivo
  capital_final: activo_final - pasivo_final
  incremento_patrimonio: capital_final - (activo - pasivo)

respuesta: nueva_inversion
tipo: input

enunciado: "Si se realiza una nueva inversión de ${nueva_inversion} en efectivo que aumenta el activo, ¿cuánto aumenta el patrimonio neto?"

explicacion: |
  La inversión de los dueños aumenta el activo y el patrimonio neto en la misma cuantía.
```

### 16 — pregunta 16

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["estructura", "propiedad"]

respuesta: falso
tipo: vf

enunciado: "El pasivo representa la propiedad de los accionistas sobre los activos."

explicacion: |
  El patrimonio neto representa la propiedad de los accionistas. El pasivo representa la deuda con terceros.
```

### 17 — pregunta 17

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "balance"]

variables:
  activo_circulante: random(50000, 150000)
  activo_no_circulante: random(100000, 300000)
  pasivo_circulante: random(20000, 80000)
  pasivo_no_circulante: random(30000, 100000)
  
  activo_total: activo_circulante + activo_no_circulante
  pasivo_total: pasivo_circulante + pasivo_no_circulante
  patrimonio: activo_total - pasivo_total

respuesta: patrimonio
tipo: input

enunciado: "Activo Circulante: {activo_circulante}, Activo No Circulante: {activo_no_circulante}, Pasivo Circulante: {pasivo_circulante}, Pasivo No Circulante: {pasivo_no_circulante}. Calcula el Patrimonio Neto."

explicacion: |
  Sumar activos totales, restar pasivos totales. El resultado es el patrimonio neto.
```

### 18 — pregunta 18

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["ecuacion", "contabilidad", "completar"]

respuesta: "Pasivo"
tipo: completar

enunciado: "Completa la ecuación fundamental: Activo = Patrimonio Neto + _______."

respuestas_validas:
  - "Pasivo"
  - "pasivo"
  - "pasivos"

explicacion: |
  La ecuación patrimonial básica establece que lo que tiene la empresa (Activo) se financia con
  recursos propios (Patrimonio) y recursos de terceros (Pasivo).
```

### 19 — pregunta 19

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["pasivo", "clasificacion", "completar"]

respuesta: "Circulante"
tipo: completar

enunciado: "Los pasivos que vencen en menos de un año se clasifican como Pasivo _______."

respuestas_validas:
  - "Circulante"
  - "circulante"
  - "corriente"
  - "corriente"

explicacion: |
  Los pasivos de corto plazo se denominan Pasivo Circulante (o Corriente).
  Los de largo plazo son Pasivo No Circulante (o Largo Plazo).
```

### 20 — pregunta 20

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["patrimonio", "componentes", "completar"]

respuesta: "Utilidades"
tipo: completar

enunciado: "Además del capital social, las _______ acumuladas forman parte del patrimonio neto."

respuestas_validas:
  - "Utilidades"
  - "utilidades"
  - "ganancias"
  - "ganancias"

explicacion: |
  El patrimonio neto incluye el capital aportado y las utilidades (o pérdidas) acumuladas de la empresa.
```
