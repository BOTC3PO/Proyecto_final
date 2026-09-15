# Oficios — Gasista — Diagnóstico de gasista por casos (cuestionario, 18 preguntas VBLang)

> Cierre del oficio (`OF6`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico de gas — cada
> pregunta validada con parse+lint+compile+generate real de
> packages/vblang antes de guardarse.

---

### 1 — El criterio del método de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "cortar el suministro y verificar antes de seguir usando la instalación"
tipo: mc
opciones_explicitas: ["cortar el suministro y verificar antes de seguir usando la instalación", "esperar a ver si el problema se resuelve solo", "seguir usando la instalación mientras se decide qué hacer"]

enunciado: "Según el método resumido de la teoría, ante cualquier duda real sobre la seguridad de una instalación de gas, ¿cuál es la decisión correcta?"

explicacion: |
  La rapidez nunca es una prioridad más alta que la seguridad en este
  oficio: cortar y verificar es siempre la decisión correcta ante la
  duda.
```

### 2 — Olor persistente pese a ventilar

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "hay una fuga activa y continua en algún punto de la instalación"
tipo: mc
opciones_explicitas: ["hay una fuga activa y continua en algún punto de la instalación", "el olor es normal y no requiere ninguna acción", "el problema está siempre en el artefacto, nunca en la cañería"]

enunciado: "Si después de ventilar bien un ambiente el olor a gas persiste, ¿qué indica eso según la teoría?"

explicacion: |
  Una fuga puntual ya disipada por la ventilación desaparecería; que
  persista indica una fuga activa y continua.
```

### 3 — Qué hacer ante el caso 1

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "Ante olor persistente pese a ventilar, corresponde cortar el suministro en la llave general y localizar la fuga con agua jabonosa o un detector de gas."

explicacion: |
  Nunca corresponde seguir usando la instalación \"mientras se
  resuelve\".
```

### 4 — Causas de que un artefacto no encienda

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

variables:
  causa: uno_de(["falta de gas en el suministro (llave cerrada, garrafa vacía)", "un problema en el sistema de encendido del propio artefacto", "una obstrucción en el quemador"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para que un artefacto a gas no encienda."

explicacion: |
  Las tres son causas mencionadas en el caso 2, en orden de frecuencia
  real según la teoría.
```

### 5 — Orden de sospecha en el caso 2

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "descartar las causas más simples y localizadas en el propio artefacto antes de sospechar de la instalación de gas"
tipo: mc
opciones_explicitas: ["descartar las causas más simples y localizadas en el propio artefacto antes de sospechar de la instalación de gas", "revisar primero toda la instalación de gas de la vivienda", "reemplazar el artefacto directamente sin diagnosticar"]

enunciado: "Ante un artefacto que no enciende, ¿qué orden de diagnóstico recomienda la teoría?"

explicacion: |
  Conviene descartar primero causas simples y localizadas en el
  artefacto (falta de gas, encendido, quemador) antes de sospechar de
  la instalación en general.
```

### 6 — Llama amarilla en vez de azul

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "combustión incompleta, por falta de aire suficiente para quemar el gas por completo"
tipo: mc
opciones_explicitas: ["combustión incompleta, por falta de aire suficiente para quemar el gas por completo", "un exceso de aire en la mezcla de combustión", "un tipo de gas distinto al habitual, sin ningún riesgo"]

enunciado: "Una llama que debería ser azul y aparece amarilla o anaranjada es señal de..."

explicacion: |
  Es señal de combustión incompleta: el quemador no recibe suficiente
  aire para quemar el gas por completo.
```

### 7 — Riesgo de la llama amarilla

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "Una llama amarilla, además de generar hollín, puede indicar que el artefacto está generando monóxido de carbono."

explicacion: |
  Es la razón por la que este síntoma nunca debe ignorarse, aunque el
  artefacto \"igual funcione\".
```

### 8 — Causas de una llama amarilla

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

variables:
  causa: uno_de(["una regulación de aire primario mal ajustada", "un quemador sucio u obstruido", "ventilación insuficiente en el ambiente"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa típica mencionada en la teoría para que un artefacto presente llama amarilla en vez de azul."

explicacion: |
  Las tres son causas típicas mencionadas en el caso 3.
```

### 9 — Nunca ignorar el síntoma por funcionalidad

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, una llama amarilla puede ignorarse mientras el artefacto siga funcionando con normalidad para el usuario."

explicacion: |
  Falso. Es precisamente la señal visible de un riesgo invisible
  (monóxido de carbono) y no debe ignorarse nunca.
```

### 10 — Por qué el gas exige más rigor que otros oficios

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "basico"
  tags: ["contexto"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, un diagnóstico equivocado en gas puede tener consecuencias irreversibles, a diferencia de la mayoría de los oficios donde se corrige con una segunda visita."

explicacion: |
  Es la idea de apertura de todo el tema de diagnóstico de gasista.
```

### 11 — Localizar una fuga sin llama encendida

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

respuesta: falso
tipo: vf

enunciado: "Para localizar el origen de una fuga de gas se recomienda acercar una llama encendida para ver dónde se enciende."

explicacion: |
  Falso. La instalación se revisa con agua jabonosa sobre las uniones
  o con un detector de gas específico, nunca con una llama encendida
  acercándose a buscar el origen.
```

### 12 — Diferencia entre caso 1 y caso 3

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "el caso 1 es una fuga de gas en la instalación; el caso 3 es una falla de combustión dentro de un artefacto que ya recibe gas normalmente"
tipo: mc
opciones_explicitas: ["el caso 1 es una fuga de gas en la instalación; el caso 3 es una falla de combustión dentro de un artefacto que ya recibe gas normalmente", "son exactamente el mismo problema con dos síntomas distintos", "el caso 1 nunca requiere cortar el suministro, a diferencia del caso 3"]

enunciado: "¿Cuál es la diferencia central entre el caso 1 (olor persistente) y el caso 3 (llama amarilla)?"

explicacion: |
  El caso 1 es un problema de fuga en la instalación (gas escapando
  antes de llegar al artefacto); el caso 3 es un problema de
  combustión dentro de un artefacto que ya recibe el gas
  correctamente.
```

### 13 — El primer paso ante cualquier caso

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "En los tres casos de esta teoría se repite el mismo criterio: priorizar siempre la opción más segura sobre la más rápida."

explicacion: |
  Es la síntesis final del método de diagnóstico de gasista de todo
  el tema.
```

### 14 — El material es sólo informativo

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "basico"
  tags: ["contexto"]

respuesta: verdadero
tipo: vf

enunciado: "Este material es informativo y no habilita a intervenir instalaciones de gas sin la matrícula profesional correspondiente."

explicacion: |
  Es la aclaración explícita que encabeza este tema, coherente con la
  nota general del oficio de gasista.
```

### 15 — Combustión incompleta y aire

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "La combustión incompleta del caso 3 se relaciona con que el quemador no recibe suficiente aire para quemar el gas por completo, no con la cantidad de gas en sí."

explicacion: |
  El problema es de aire insuficiente para la combustión, no
  necesariamente de falta de gas.
```

### 16 — Batería agotada como causa del caso 2

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Una batería agotada en un sistema de encendido electrónico es un ejemplo mencionado en la teoría de un problema del propio artefacto que impide que encienda."

explicacion: |
  Es un ejemplo concreto dentro de \"un problema en el sistema de
  encendido del propio artefacto\", una de las causas del caso 2.
```

### 17 — Nunca "esperar a ver"

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, ante una duda de seguridad en gas, es aceptable esperar unos días a ver si el problema se resuelve solo antes de actuar."

explicacion: |
  Falso. El método explícitamente descarta \"esperar a ver si se
  resuelve solo\" como opción válida.
```

### 18 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "gasista_diagnostico_gasista_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los tres casos de este tema comparten la misma lógica: distinguir el origen del problema (fuga, artefacto, combustión) y priorizar siempre la seguridad sobre la rapidez."

explicacion: |
  Es la síntesis final del método de diagnóstico de gasista de todo
  el tema.
```
