# Oficios — Soldador — Diagnóstico de soldadura por casos (cuestionario, 16 preguntas VBLang)

> Cierre del oficio (`OF8`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico de soldadura
> — cada pregunta validada con parse+lint+compile+generate real de
> packages/vblang antes de guardarse.

---

### 1 — Diagnóstico antes de la falla

```
metadata:
  materia: "oficios"
  tema: "soldador_diagnostico_soldadura_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de otros oficios, buena parte del diagnóstico de soldadura ocurre antes de que la pieza entre en servicio, revisando el cordón recién hecho."

explicacion: |
  Es la idea de apertura del tema: identificar defectos que, sin
  corregir, se convierten en una falla real más adelante.
```

### 2 — Causa de una junta que falla bajo carga

```
metadata:
  materia: "oficios"
  tema: "soldador_diagnostico_soldadura_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "un defecto interno no detectado a tiempo, como falta de fusión o porosidad excesiva"
tipo: mc
opciones_explicitas: ["un defecto interno no detectado a tiempo, como falta de fusión o porosidad excesiva", "un exceso de limpieza de la superficie antes de soldar", "el uso de un electrodo de más calidad de la necesaria"]

enunciado: "Cuando una unión soldada se rompe en uso bajo una carga que debería haber soportado, ¿a qué suele remontarse la causa según la teoría?"

explicacion: |
  Casi siempre a un defecto interno no detectado a tiempo que redujo
  la resistencia real de la unión por debajo de lo que parecía tener a
  simple vista.
```

### 3 — El objetivo del diagnóstico post-falla

```
metadata:
  materia: "oficios"
  tema: "soldador_diagnostico_soldadura_por_casos"
  nivel: "avanzado"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "El diagnóstico post-falla del caso 1 busca identificar el defecto tanto para reparar la pieza actual como para corregir el proceso que lo generó."

explicacion: |
  Es el doble objetivo mencionado en la teoría: reparación puntual y
  corrección del proceso a futuro.
```

### 4 — Causas de soldadura porosa sistemática

```
metadata:
  materia: "oficios"
  tema: "soldador_diagnostico_soldadura_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

variables:
  causa: uno_de(["un gas de protección insuficiente o con flujo incorrecto", "viento en el ambiente de trabajo que dispersa el gas de protección", "superficies sucias (óxido, grasa, pintura) en la zona a soldar"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para una soldadura que sale porosa de forma sistemática."

explicacion: |
  Las tres son causas mencionadas en el caso 2, todas relacionadas con
  una falla en la protección del arco.
```

### 5 — Cómo empezar a corregir la porosidad

```
metadata:
  materia: "oficios"
  tema: "soldador_diagnostico_soldadura_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "identificar qué condición cambió respecto de una soldadura anterior que sí salió bien"
tipo: mc
opciones_explicitas: ["identificar qué condición cambió respecto de una soldadura anterior que sí salió bien", "cambiar directamente de proceso de soldadura sin más análisis", "aumentar el amperaje del equipo, siempre"]

enunciado: "Según la teoría, ¿cómo se empieza a corregir un caso de soldadura porosa sistemática?"

explicacion: |
  Identificando cuál de las condiciones (gas, viento, superficie sucia)
  cambió respecto de una soldadura anterior que sí salió bien.
```

### 6 — Causa de la deformación por calor

```
metadata:
  materia: "oficios"
  tema: "soldador_diagnostico_soldadura_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "un aporte de calor excesivo o mal distribuido durante el proceso de soldadura"
tipo: mc
opciones_explicitas: ["un aporte de calor excesivo o mal distribuido durante el proceso de soldadura", "el uso de un electrodo demasiado delgado", "una temperatura ambiente demasiado baja en el taller"]

enunciado: "¿Cuál es la causa de que una pieza se curve o retuerza visiblemente después de soldarse, según la teoría?"

explicacion: |
  Es un aporte de calor excesivo o mal distribuido, que genera una
  expansión y contracción despareja.
```

### 7 — Puntos de soldadura vs. pasada continua

```
metadata:
  materia: "oficios"
  tema: "soldador_diagnostico_soldadura_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "Soldar todo un lado de una pieza larga de una sola pasada continua, en vez de alternar puntos de soldadura distribuidos, favorece la deformación por calor."

explicacion: |
  Es el ejemplo concreto que da la teoría sobre cómo se genera este
  tipo de deformación.
```

### 8 — Prevenir vs. reparar la deformación

```
metadata:
  materia: "oficios"
  tema: "soldador_diagnostico_soldadura_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, la clave del caso 3 (deformación por calor) es corregir la deformación después de que ya ocurrió, más que planificar la secuencia de soldadura antes de empezar."

explicacion: |
  Falso. Es al revés: la prevención (planificar la secuencia de
  soldadura para distribuir el calor de forma pareja) es la clave, más
  que la reparación posterior.
```

### 9 — El primer paso del método de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "soldador_diagnostico_soldadura_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "identificar el patrón del defecto antes de asumir una causa"
tipo: mc
opciones_explicitas: ["identificar el patrón del defecto antes de asumir una causa", "reemplazar el electrodo directamente ante cualquier defecto", "ignorar el defecto si la soldadura se ve prolija por fuera"]

enunciado: "Según el método resumido de la teoría, ¿cuál es el primer paso frente a cualquiera de los tres casos?"

explicacion: |
  Identificar el patrón del defecto —dónde está, cómo se ve, si es
  sistemático o aislado— antes de asumir una causa.
```

### 10 — Distinguir corrección de proceso vs. pieza comprometida

```
metadata:
  materia: "oficios"
  tema: "soldador_diagnostico_soldadura_por_casos"
  nivel: "avanzado"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "El método resumido distingue entre defectos que se corrigen ajustando el proceso actual (porosidad, deformación) y aquellos que ya comprometieron una pieza que necesita reparación o descarte (una junta que ya falló bajo carga)."

explicacion: |
  Es el segundo paso del método resumido, distinguiendo los tres
  casos por su naturaleza.
```

### 11 — Prevenir es más confiable que diagnosticar después

```
metadata:
  materia: "oficios"
  tema: "soldador_diagnostico_soldadura_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según el método resumido de la teoría, prevenir el defecto durante el proceso es siempre más confiable que intentar diagnosticarlo después de terminado el cordón."

explicacion: |
  Es la síntesis final del método de diagnóstico de soldadura de todo
  el tema.
```

### 12 — Un defecto sistemático vs. aislado

```
metadata:
  materia: "oficios"
  tema: "soldador_diagnostico_soldadura_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "La teoría distingue explícitamente un problema de porosidad que se repite de forma sistemática de un caso aislado, apuntando a causas distintas en cada situación."

explicacion: |
  Es la distinción que abre el caso 2: sistemático (falla en la
  protección del arco) vs. aislado (posible descuido puntual).
```

### 13 — Falta de fusión: un defecto peligroso

```
metadata:
  materia: "oficios"
  tema: "soldador_diagnostico_soldadura_por_casos"
  nivel: "avanzado"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, la falta de fusión puede pasar desapercibida en una inspección visual superficial y sólo revelarse con métodos de inspección más rigurosos o cuando la pieza falla en uso."

explicacion: |
  Es la razón por la que este defecto es especialmente peligroso: no
  siempre es visible a simple vista.
```

### 14 — Diferencia entre caso 2 y caso 3

```
metadata:
  materia: "oficios"
  tema: "soldador_diagnostico_soldadura_por_casos"
  nivel: "avanzado"
  tags: ["caso 2", "caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "el caso 2 es un defecto interno en el cordón (porosidad); el caso 3 es una deformación visible de la pieza completa"
tipo: mc
opciones_explicitas: ["el caso 2 es un defecto interno en el cordón (porosidad); el caso 3 es una deformación visible de la pieza completa", "son exactamente el mismo tipo de defecto con dos nombres distintos", "ambos casos se deben siempre a un gas de protección insuficiente"]

enunciado: "¿Cuál es la diferencia central entre el caso 2 (soldadura porosa) y el caso 3 (deformación por calor)?"

explicacion: |
  El caso 2 es un defecto interno del propio cordón de soldadura; el
  caso 3 es una deformación de la geometría de toda la pieza.
```

### 15 — Ambiente sin viento para MIG/MAG

```
metadata:
  materia: "oficios"
  tema: "soldador_diagnostico_soldadura_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "El viento en el ambiente de trabajo puede dispersar el gas de protección de un proceso como MIG/MAG antes de que cumpla su función, contribuyendo a la porosidad."

explicacion: |
  Es una de las tres causas mencionadas en el caso 2 para soldadura
  porosa sistemática.
```

### 16 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "soldador_diagnostico_soldadura_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los tres casos de este tema comparten la misma lógica: identificar el patrón del defecto, distinguir corrección de proceso de pieza ya comprometida, y priorizar la prevención sobre el diagnóstico posterior."

explicacion: |
  Es la síntesis final del método de diagnóstico de soldadura de todo
  el tema.
```
