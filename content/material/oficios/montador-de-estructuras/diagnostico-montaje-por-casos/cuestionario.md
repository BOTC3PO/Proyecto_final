# Oficios — Montador de Estructuras — Diagnóstico de montaje por casos (cuestionario, 16 preguntas VBLang)

> Cierre del oficio (`OF10`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico de montaje
> estructural — cada pregunta validada con parse+lint+compile+generate
> real de packages/vblang antes de guardarse.

---

### 1 — Prioridad del diagnóstico en montaje

```
metadata:
  materia: "oficios"
  tema: "montador_de_estructuras_diagnostico_montaje_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "En montaje de estructuras, un problema no resuelto puede agravarse con cada pieza nueva que se agrega encima, por lo que el criterio de diagnóstico prioriza detener el avance ante cualquier anomalía real."

explicacion: |
  Es la idea de apertura de todo el tema de diagnóstico de montaje.
```

### 2 — Causa de una estructura desalineada

```
metadata:
  materia: "oficios"
  tema: "montador_de_estructuras_diagnostico_montaje_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "un error acumulado de etapas anteriores, como un replanteo inicial impreciso"
tipo: mc
opciones_explicitas: ["un error acumulado de etapas anteriores, como un replanteo inicial impreciso", "el color de la pintura usada en la estructura", "el tipo de grúa utilizada para el izaje"]

enunciado: "Según la teoría, ¿dónde suele estar la causa de que una estructura aparezca desalineada respecto del plano durante el montaje?"

explicacion: |
  Suele estar en un error acumulado de etapas anteriores, como un
  replanteo inicial impreciso o una pieza previa mal verificada.
```

### 3 — Corregir la desalineación sin resolver el origen

```
metadata:
  materia: "oficios"
  tema: "montador_de_estructuras_diagnostico_montaje_por_casos"
  nivel: "avanzado"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, corregir la desalineación en la etapa actual sin resolver el origen en una etapa anterior sólo tapa el síntoma temporalmente."

explicacion: |
  Es la advertencia explícita del caso 1 sobre soluciones superficiales.
```

### 4 — Causas de una unión con holgura

```
metadata:
  materia: "oficios"
  tema: "montador_de_estructuras_diagnostico_montaje_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

variables:
  causa: uno_de(["un bulón con torque insuficiente o un agujero mal alineado", "una soldadura con falta de fusión"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para que una unión (abulonada o soldada) presente holgura."

explicacion: |
  Ambas son causas mencionadas en el caso 2, una para uniones
  abulonadas y otra para uniones soldadas.
```

### 5 — Qué indica una unión con holgura

```
metadata:
  materia: "oficios"
  tema: "montador_de_estructuras_diagnostico_montaje_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Una unión con holgura indica que esa unión no está transmitiendo las fuerzas de diseño de la forma prevista."

explicacion: |
  Es la idea central del caso 2: la holgura no es sólo un detalle
  estético, es una señal de que la unión no cumple su función
  estructural.
```

### 6 — Causa de vibración anormal

```
metadata:
  materia: "oficios"
  tema: "montador_de_estructuras_diagnostico_montaje_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "una rigidez menor a la calculada en el diseño, con frecuencia por uniones que no quedaron completamente firmes"
tipo: mc
opciones_explicitas: ["una rigidez menor a la calculada en el diseño, con frecuencia por uniones que no quedaron completamente firmes", "un exceso de pintura aplicada sobre la estructura", "el tipo de perfil metálico usado, sin relación a las uniones"]

enunciado: "Según la teoría, ¿qué suele señalar una estructura que vibra de forma perceptible ante cargas que normalmente no deberían generar esa vibración?"

explicacion: |
  Suele señalar una rigidez menor a la calculada, con frecuencia por
  uniones que no quedaron completamente firmes.
```

### 7 — Relación entre caso 2 y caso 3

```
metadata:
  materia: "oficios"
  tema: "montador_de_estructuras_diagnostico_montaje_por_casos"
  nivel: "avanzado"
  tags: ["caso 2", "caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, la vibración anormal del caso 3 puede ser el mismo problema de uniones flojas del caso 2, manifestado de otra forma (vibración en vez de holgura directamente visible)."

explicacion: |
  Es la conexión explícita que hace la teoría entre ambos casos.
```

### 8 — Arriostramiento definitivo insuficiente

```
metadata:
  materia: "oficios"
  tema: "montador_de_estructuras_diagnostico_montaje_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "Un arriostramiento definitivo insuficiente respecto del diseño original es una causa mencionada en la teoría para la vibración anormal del caso 3."

explicacion: |
  Es la segunda causa mencionada en el caso 3, junto con las uniones
  no completamente firmes.
```

### 9 — El primer paso del método de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "montador_de_estructuras_diagnostico_montaje_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "detener el avance antes de seguir agregando piezas nuevas"
tipo: mc
opciones_explicitas: ["detener el avance antes de seguir agregando piezas nuevas", "seguir adelante y ver si se estabiliza solo", "desmontar toda la estructura de inmediato ante cualquier duda"]

enunciado: "Según el método resumido de la teoría, ¿cuál es el primer paso ante cualquier anomalía detectada durante el montaje?"

explicacion: |
  Detener el avance antes de seguir agregando piezas nuevas es el
  primer paso del método resumido.
```

### 10 — Distinguir etapa actual de etapa anterior

```
metadata:
  materia: "oficios"
  tema: "montador_de_estructuras_diagnostico_montaje_por_casos"
  nivel: "intermedio"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "El método resumido de la teoría incluye identificar si el origen de una anomalía está en la etapa actual del montaje o se arrastra de una etapa anterior."

explicacion: |
  Es el segundo paso del método resumido al final de la teoría.
```

### 11 — Nunca "ver si se estabiliza solo"

```
metadata:
  materia: "oficios"
  tema: "montador_de_estructuras_diagnostico_montaje_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: falso
tipo: vf

enunciado: "Según el método resumido de la teoría, ante una anomalía es aceptable seguir adelante con el montaje y ver si el problema se estabiliza solo."

explicacion: |
  Falso. El método descarta explícitamente \"seguir adelante y ver si
  se estabiliza solo\" como opción válida.
```

### 12 — Verificar con mediciones concretas

```
metadata:
  materia: "oficios"
  tema: "montador_de_estructuras_diagnostico_montaje_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "verificar con mediciones concretas (plomado, torque, inspección de soldadura)"
tipo: mc
opciones_explicitas: ["verificar con mediciones concretas (plomado, torque, inspección de soldadura)", "confiar en la apreciación visual únicamente", "esperar a que la estructura esté terminada para verificar todo junto"]

enunciado: "Según el método resumido de la teoría, ¿cómo se confirma que un problema de montaje quedó resuelto?"

explicacion: |
  Verificando con mediciones concretas antes de dar por resuelto el
  problema, es el tercer paso del método resumido.
```

### 13 — Un desfase que se propaga

```
metadata:
  materia: "oficios"
  tema: "montador_de_estructuras_diagnostico_montaje_por_casos"
  nivel: "avanzado"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "Un error de plomado en las primeras piezas de una estructura se propaga y amplifica en cada nivel que se construye encima, según la idea ya presentada en `../fundamentos-montaje-estructuras/` y `../tecnicas-montaje-estructuras/`."

explicacion: |
  Es la razón por la que el caso 1 (estructura desalineada) requiere
  buscar el origen en etapas anteriores, no sólo corregir el síntoma
  actual.
```

### 14 — Falta de fusión en uniones soldadas de montaje

```
metadata:
  materia: "oficios"
  tema: "montador_de_estructuras_diagnostico_montaje_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "La falta de fusión, el mismo defecto ya visto en el oficio de Soldador, puede explicar que una unión soldada de montaje presente holgura."

explicacion: |
  Es la causa mencionada en el caso 2 para uniones soldadas
  específicamente, distinta de la causa para uniones abulonadas.
```

### 15 — Diferencia entre caso 1 y caso 2

```
metadata:
  materia: "oficios"
  tema: "montador_de_estructuras_diagnostico_montaje_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "el caso 1 es un desfase geométrico de toda la estructura; el caso 2 es un problema puntual en una unión específica"
tipo: mc
opciones_explicitas: ["el caso 1 es un desfase geométrico de toda la estructura; el caso 2 es un problema puntual en una unión específica", "son exactamente el mismo problema con dos nombres distintos", "el caso 1 sólo ocurre en uniones abulonadas, el caso 2 sólo en soldadas"]

enunciado: "¿Cuál es la diferencia central entre el caso 1 (estructura desalineada) y el caso 2 (unión con holgura)?"

explicacion: |
  El caso 1 es un desfase geométrico de plomado o nivelación de toda
  la estructura; el caso 2 es un problema puntual de una unión
  específica que no transmite las fuerzas como debería.
```

### 16 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "montador_de_estructuras_diagnostico_montaje_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los tres casos de este tema comparten la misma lógica: detener el avance ante cualquier anomalía, identificar si el origen es de la etapa actual o anterior, y verificar con mediciones concretas antes de continuar."

explicacion: |
  Es la síntesis final del método de diagnóstico de montaje de todo
  el tema.
```
