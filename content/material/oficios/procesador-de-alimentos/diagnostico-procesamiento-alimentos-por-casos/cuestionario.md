# Oficios — Procesador de Alimentos — Diagnóstico por casos (cuestionario, 16 preguntas VBLang)

> Cierre del oficio (`OF15`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico de
> procesamiento de alimentos — cada pregunta validada con
> parse+lint+compile+generate real de packages/vblang antes de
> guardarse.

---

### 1 — El diagnóstico sigue la lógica de HACCP

```
metadata:
  materia: "oficios"
  tema: "procesador_de_alimentos_diagnostico_procesamiento_alimentos_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, diagnosticar un problema en un producto procesado implica reconstruir en qué punto de la cadena falló el control, siguiendo la misma lógica que HACCP."

explicacion: |
  Es la idea de apertura de todo el tema, que retoma HACCP ya
  presentado en la lección de seguridad e higiene.
```

### 2 — Hipótesis para producto contaminado

```
metadata:
  materia: "oficios"
  tema: "procesador_de_alimentos_diagnostico_procesamiento_alimentos_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  causa: uno_de(["una falla en el proceso térmico", "una contaminación cruzada posterior al proceso", "un envasado defectuoso"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una hipótesis mencionada en la teoría para un producto que debería ser seguro y resultó contaminado."

explicacion: |
  Las tres son hipótesis principales mencionadas en el caso 1.
```

### 3 — Primera verificación del caso 1

```
metadata:
  materia: "oficios"
  tema: "procesador_de_alimentos_diagnostico_procesamiento_alimentos_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "verificar que el envasado no tenga pérdida de vacío o sellos rotos"
tipo: mc
opciones_explicitas: ["verificar que el envasado no tenga pérdida de vacío o sellos rotos", "probar directamente el sabor del producto", "medir únicamente el peso del producto"]

enunciado: "Según la teoría, ¿cuál es la primera verificación simple recomendada ante un caso de producto contaminado?"

explicacion: |
  Verificar el envasado (pérdida de vacío o sellos rotos) es la prueba
  simple que descarta rápidamente esa hipótesis antes de sospechar del
  proceso térmico o la manipulación.
```

### 4 — Por qué se verifica el envasado primero

```
metadata:
  materia: "oficios"
  tema: "procesador_de_alimentos_diagnostico_procesamiento_alimentos_por_casos"
  nivel: "avanzado"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "Verificar el envasado primero permite descartar esa hipótesis rápidamente antes de sospechar del proceso térmico o de la manipulación, según la teoría."

explicacion: |
  Es la razón explícita que da la teoría para empezar por ahí.
```

### 5 — Hipótesis para vida útil corta

```
metadata:
  materia: "oficios"
  tema: "procesador_de_alimentos_diagnostico_procesamiento_alimentos_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

variables:
  causa: uno_de(["una concentración insuficiente de la solución conservante", "una cadena de frío interrumpida en algún punto posterior al proceso", "un proceso térmico al límite"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una hipótesis mencionada en la teoría para un producto que se descompone antes de lo esperado pese a un proceso aparentemente correcto."

explicacion: |
  Las tres son hipótesis principales mencionadas en el caso 2.
```

### 6 — Qué significa "proceso térmico al límite"

```
metadata:
  materia: "oficios"
  tema: "procesador_de_alimentos_diagnostico_procesamiento_alimentos_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "un proceso suficiente para pasar un control inicial, pero sin margen suficiente para la vida útil esperada"
tipo: mc
opciones_explicitas: ["un proceso suficiente para pasar un control inicial, pero sin margen suficiente para la vida útil esperada", "un proceso que directamente no destruye ningún microorganismo", "un proceso que siempre excede la temperatura máxima segura"]

enunciado: "Según la teoría, ¿qué significa que un proceso térmico haya quedado \"al límite\" en el caso 2?"

explicacion: |
  Es un proceso suficiente para pasar un control inicial pero sin
  margen suficiente para sostener toda la vida útil esperada del
  producto.
```

### 7 — Cómo distinguir las causas del caso 2

```
metadata:
  materia: "oficios"
  tema: "procesador_de_alimentos_diagnostico_procesamiento_alimentos_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, distinguir las causas del caso 2 exige revisar el registro de cada etapa (concentración preparada, temperatura de almacenamiento efectiva) en vez de sólo probar el producto final."

explicacion: |
  Es el método explícito de distinción que da la teoría para el
  caso 2.
```

### 8 — Síntesis del método

```
metadata:
  materia: "oficios"
  tema: "procesador_de_alimentos_diagnostico_procesamiento_alimentos_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "identificar en qué punto de la cadena se originó el problema, revisando los controles de cada etapa en vez de adivinar"
tipo: mc
opciones_explicitas: ["identificar en qué punto de la cadena se originó el problema, revisando los controles de cada etapa en vez de adivinar", "reforzar siempre el envasado, sin importar el síntoma", "repetir el proceso exactamente igual hasta que funcione"]

enunciado: "Según el método resumido de la teoría, ¿cuál es la lógica común a ambos casos de diagnóstico de procesamiento de alimentos?"

explicacion: |
  Identificar en qué punto de la cadena se originó el problema,
  revisando los controles de cada etapa, es la lógica común a ambos
  casos.
```

### 9 — Ajustar la etapa correcta

```
metadata:
  materia: "oficios"
  tema: "procesador_de_alimentos_diagnostico_procesamiento_alimentos_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según el método resumido de la teoría, reforzar el envasado no soluciona un problema que se originó en el proceso térmico, y viceversa."

explicacion: |
  Es la síntesis final del método de diagnóstico de todo el tema.
```

### 10 — Diferencia entre caso 1 y caso 2

```
metadata:
  materia: "oficios"
  tema: "procesador_de_alimentos_diagnostico_procesamiento_alimentos_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "el caso 1 es una contaminación ya presente; el caso 2 es un producto que resultó seguro al inicio pero no sostuvo su vida útil esperada"
tipo: mc
opciones_explicitas: ["el caso 1 es una contaminación ya presente; el caso 2 es un producto que resultó seguro al inicio pero no sostuvo su vida útil esperada", "son exactamente el mismo síntoma con dos nombres distintos", "el caso 1 sólo ocurre con productos congelados, el caso 2 sólo con productos en salmuera"]

enunciado: "¿Cuál es la diferencia central entre el caso 1 (producto contaminado) y el caso 2 (vida útil más corta de lo esperado)?"

explicacion: |
  El caso 1 es una contaminación ya presente en el producto; el caso 2
  es un producto que resultó seguro al inicio pero no sostuvo la vida
  útil esperada.
```

### 11 — HACCP y diagnóstico

```
metadata:
  materia: "oficios"
  tema: "procesador_de_alimentos_diagnostico_procesamiento_alimentos_por_casos"
  nivel: "intermedio"
  tags: ["contexto"]

respuesta: verdadero
tipo: vf

enunciado: "HACCP, ya presentado en `../seguridad-e-higiene-procesamiento-alimentos/`, propone pensar en cada etapa del proceso en vez de sólo inspeccionar el producto final — la misma lógica que se usa acá para diagnosticar por casos."

explicacion: |
  Es la conexión directa entre este tema y la lección de seguridad e
  higiene, donde se presenta HACCP.
```

### 12 — Tiempo y temperatura como variable doble

```
metadata:
  materia: "oficios"
  tema: "procesador_de_alimentos_diagnostico_procesamiento_alimentos_por_casos"
  nivel: "avanzado"
  tags: ["contexto"]

respuesta: verdadero
tipo: vf

enunciado: "Según `../calculo-procesamiento-alimentos/`, un proceso térmico se define siempre por dos variables juntas: la temperatura alcanzada y el tiempo que se mantiene esa temperatura."

explicacion: |
  Es contexto ya presentado en la lección de cálculo, relevante para
  entender por qué un proceso puede quedar "al límite" en el caso 2.
```

### 13 — No adivinar la causa

```
metadata:
  materia: "oficios"
  tema: "procesador_de_alimentos_diagnostico_procesamiento_alimentos_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según el método resumido de la teoría, se recomienda revisar los controles de cada etapa en vez de adivinar la causa de un problema de procesamiento de alimentos."

explicacion: |
  Es parte del primer paso del método resumido de todo el tema.
```

### 14 — Cadena de frío interrumpida

```
metadata:
  materia: "oficios"
  tema: "procesador_de_alimentos_diagnostico_procesamiento_alimentos_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Una cadena de frío interrumpida después del proceso, sin que el proceso térmico en sí haya fallado, puede explicar una vida útil más corta de lo esperado."

explicacion: |
  Es una de las tres hipótesis del caso 2, distinta de la
  concentración insuficiente y del proceso térmico al límite.
```

### 15 — Concentración insuficiente vs. proceso al límite

```
metadata:
  materia: "oficios"
  tema: "procesador_de_alimentos_diagnostico_procesamiento_alimentos_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, tanto una concentración insuficiente de la solución conservante como un proceso térmico al límite son hipótesis distintas para el mismo síntoma del caso 2."

explicacion: |
  Son dos hipótesis distintas dentro del mismo caso, junto con la
  cadena de frío interrumpida.
```

### 16 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "procesador_de_alimentos_diagnostico_procesamiento_alimentos_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los dos casos de este tema comparten la misma lógica: reconstruir en qué punto de la cadena se originó el problema, en vez de sólo describir el síntoma final del producto."

explicacion: |
  Es la síntesis final del método de diagnóstico de todo el tema.
```
