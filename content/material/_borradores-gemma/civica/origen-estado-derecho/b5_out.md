### 1 — Identificación de Función Estatal
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["funciones_estado", "orden_social"]

variables:
  escenario: uno_de([["Un grupo de ciudadanos no logra resolver un conflicto de límites entre propiedades", "Poder Judicial"], ["Un ciudadano es víctima de un robo y busca justicia", "Poder Judicial"], ["Dos empresas tienen una disputa contractual que no pueden solucionar solas", "Poder Judicial"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Poder Judicial", "Poder Ejecutivo", "Poder Legislativo", "Poder de la Policía"]

enunciado: "En el siguiente caso, se requiere la intervención del Estado para aplicar la ley: {escenario[idx][0]}"

explicacion: |
  El Poder Judicial es el encargado de administrar justicia y resolver conflictos mediante la aplicación del derecho.
```

### 2 — El Rol de la Ley
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["normas", "derecho"]

variables:
  caso: uno_de([["La creación de una nueva norma que regula el tránsito", "Legislativo"], ["La firma de un decreto para implementar una política de salud", "Ejecutivo"], ["La sanción de una ley de presupuesto nacional", "Legislativo"]])
  idx: uno_de([0,1,2])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["Legislativo", "Ejecutivo", "Judicial"]

enunciado: "Analice la acción: {caso[idx][0]}. ¿A qué órgano corresponde esta función primordial?"

explicacion: |
  El órgano encargado de crear, modificar o derogar las leyes es el Poder Legislativo.
```

### 3 — El Concepto de Soberanía
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["soberania", "territorio"]

variables:
  situacion: uno_de([["Un Estado establece sus fronteras y límites territoriales", "Soberanía"], ["Un Estado ejerce autoridad sobre su población", "Soberanía"], ["Un Estado mantiene el orden interno sin interferencia externa", "Soberanía"]])
  idx: uno_de([0,1,2])

respuesta: situacion[idx][1]
tipo: completar
respuestas_validas: ["Soberanía"]

enunciado: "La capacidad de un Estado para ejercer autoridad suprema sobre su territorio y población se denomina ___."

explicacion: |
  La soberanía es la facultad del Estado para autoorganizarse y ejercer poder dentro de sus límites sin subordinación a otros Estados.
```

### 4 — Orden de Elementos del Estado
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["elementos_estado", "componentes"]

variables:
  elementos: ["Población", "Territorio", "Gobierno", "Soberanía"]

respuesta: elementos
tipo: ordenar
opciones_explicitas: ["Población", "Territorio", "Gobierno", "Soberanía"]

enunciado: "Ordene los elementos constitutivos del Estado desde el componente humano hasta la capacidad de mando:"

explicacion: |
  Para que exista un Estado, debe haber una población asentada en un territorio, con un gobierno que ejerza soberanía.
```

### 5 — La Función Ejecutiva
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["administracion", "ejecutivo"]

variables:
  accion: uno_de([["La construcción de una nueva carretera nacional", "Ejecutivo"], ["La gestión de los servicios de salud pública", "Ejecutivo"], ["La implementación de un plan de seguridad ciudadana", "Ejecutivo"]])
  idx: uno_de([0,1,2])

respuesta: accion[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "El Estado debe gestionar recursos para la obra descrita: {accion[idx][0]}. ¿Qué poder se encarga de la administración y ejecución de estas políticas?"

explicacion: |
  El Poder Ejecutivo es el encargado de la gestión diaria, la administración de los recursos y la ejecución de las leyes.
```