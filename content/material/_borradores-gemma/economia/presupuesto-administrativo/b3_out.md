### 1 — El concepto de presupuesto
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

respuesta: "estimación anticipada de ingresos y gastos"
tipo: completar
respuestas_validas: ["estimación anticipada de ingresos y gastos", "estimación de ingresos y gastos"]

enunciado: "El presupuesto se define como una ___ realizada para un período determinado."

explicacion: |
  El presupuesto es una herramienta de planificación que proyecta los recursos que entrarán (ingresos) y los que saldrán (gastos) de una entidad.
```

### 2 — ¿Presupuesto o Registro contable?
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["diferencia_conceptos"]

variables:
  es_proyectivo: verdadero

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la contabilidad, que registra hechos ya ocurridos, el presupuesto es una herramienta de carácter proyectivo."

explicacion: |
  Correcto. La contabilidad es histórica (mira hacia atrás), mientras que el presupuesto es una herramienta de planificación (mira hacia adelante).
```

### 3 — El error de la rigidez presupuestaria
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["gestion", "errores"]

variables:
  escenario: uno_de([
    ["El presupuesto es una norma inamovible que no admite cambios ante contingencias", "falso"],
    ["El presupuesto debe ser flexible para adaptarse a cambios en el entorno", "verdadero"],
    ["Un presupuesto rígido es siempre el ideal para una empresa", "falso"]
  ])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["El presupuesto es una norma inamovible que no admite cambios ante contingencias", "El presupuesto debe ser flexible para adaptarse a cambios en el entorno", "Un presupuesto rígido es siempre el ideal para una empresa"]

enunciado: "Respecto a la flexibilidad presupuestaria, es correcto afirmar que: {escenario[idx][0]}"

explicacion: |
  Un error común es creer que el presupuesto es una "camisa de fuerza". Para que sea útil, debe permitir ajustes (reprogramaciones) ante cambios significativos en el mercado o la economía.
```

### 4 — Componentes del presupuesto
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["componentes"]

respuesta: ["Ingresos", "Gastos", "Resultado"]
tipo: ordenar

opciones_explicitas: ["Ingresos", "Gastos", "Resultado"]

enunciado: "Ordene los elementos fundamentales que conforman la estructura básica de un presupuesto para determinar el saldo final:"

explicacion: |
  Para determinar la situación financiera proyectada, se deben listar primero los ingresos, luego los gastos y finalmente el resultado (superávit o déficit).
```

### 5 — Presupuesto vs. Flujo de caja
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "avanzado"
  tags: ["confusiones_comunes"]

variables:
  caso: uno_de([
    ["Una empresa tiene ventas altas en el presupuesto pero no tiene efectivo en caja", "verdadero"],
    ["Si el presupuesto de ingresos es positivo, la empresa siempre tiene liquidez inmediata", "falso"]
  ])
  idx: uno_de([0,1])

respuesta: caso[idx][0]
tipo: vf

enunciado: "Es posible que una organización presente un presupuesto de ingresos positivo pero experimente problemas de liquidez: {caso[idx][0]}"

explicacion: |
  Este es un error clásico. El presupuesto puede mostrar ingresos por ventas (devengado), pero si esas ventas son a crédito, el dinero no está disponible inmediatamente en caja (flujo de efectivo).
```