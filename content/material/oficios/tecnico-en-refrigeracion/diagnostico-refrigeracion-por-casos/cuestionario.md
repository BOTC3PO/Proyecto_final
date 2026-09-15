# Oficios — Técnico en Refrigeración — Diagnóstico por casos (cuestionario, 18 preguntas VBLang)

> Cierre del oficio (`OF7`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico de
> refrigeración — cada pregunta validada con parse+lint+compile+generate
> real de packages/vblang antes de guardarse.

---

### 1 — Por qué el diagnóstico combina dos mundos

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Un equipo de refrigeración puede fallar por una causa termodinámica (gas, presión, ciclo) o por una causa eléctrica (compresor, protecciones), y muchos síntomas pueden tener origen en cualquiera de los dos mundos."

explicacion: |
  Es la idea de apertura del tema: hay que saber en cuál de los dos
  buscar primero, según el síntoma exacto.
```

### 2 — El equipo no enfría en absoluto

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "el compresor no está comprimiendo, o hay una pérdida total de gas refrigerante"
tipo: mc
opciones_explicitas: ["el compresor no está comprimiendo, o hay una pérdida total de gas refrigerante", "el termostato está ajustado a una temperatura muy baja", "el equipo necesita más tiempo para arrancar, nada más"]

enunciado: "Si el equipo enciende, el ventilador funciona, pero no hay ninguna diferencia de temperatura, ¿cuáles son las dos sospechas principales según la teoría?"

explicacion: |
  El compresor sin comprimir (falla eléctrica o mecánica interna) y la
  pérdida total de gas son las dos sospechas principales del caso 1.
```

### 3 — Cómo distinguir entre las dos causas del caso 1

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "avanzado"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "Medir la presión con los manómetros permite distinguir entre un circuito sin gas (presión prácticamente nula) y un circuito con gas pero sin compresión (patrón de presión distinto)."

explicacion: |
  Es el método concreto propuesto en la teoría para diferenciar ambas
  causas del caso 1.
```

### 4 — Causas de que el equipo enfríe poco

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

variables:
  causa: uno_de(["una carga de gas insuficiente por fuga parcial", "un filtro de aire sucio que restringe el flujo sobre el evaporador", "un condensador sucio que no libera bien el calor al ambiente exterior"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para que un equipo de refrigeración enfríe menos de lo esperado."

explicacion: |
  Las tres son causas mencionadas en el caso 2; en los tres casos el
  sistema sigue funcionando, pero con eficiencia reducida.
```

### 5 — Diferencia entre caso 1 y caso 2

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "en el caso 1 no hay ninguna diferencia de temperatura, en el caso 2 sí enfría pero menos de lo esperado"
tipo: mc
opciones_explicitas: ["en el caso 1 no hay ninguna diferencia de temperatura, en el caso 2 sí enfría pero menos de lo esperado", "son exactamente el mismo síntoma con dos nombres distintos", "el caso 1 sólo ocurre en equipos split, el caso 2 sólo en centrales"]

enunciado: "¿Cuál es la diferencia central entre el caso 1 (no enfría en absoluto) y el caso 2 (enfría poco)?"

explicacion: |
  El caso 1 es una falla total (fuga total o compresor sin comprimir);
  el caso 2 es una pérdida parcial de eficiencia con el sistema
  todavía funcionando.
```

### 6 — Por qué se congela el evaporador

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "un flujo de aire insuficiente sobre el evaporador combinado con una temperatura de evaporación demasiado baja"
tipo: mc
opciones_explicitas: ["un flujo de aire insuficiente sobre el evaporador combinado con una temperatura de evaporación demasiado baja", "una carga de gas siempre excesiva, sin otra causa posible", "un problema exclusivo del condensador exterior"]

enunciado: "Según la teoría, ¿cuál es la causa más común de que se forme hielo sobre el evaporador?"

explicacion: |
  El aire no logra \"barrer\" el frío generado a la velocidad
  necesaria, y la humedad del ambiente se congela directamente sobre
  la superficie fría.
```

### 7 — Hielo vs. condensación normal

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, la formación de hielo sobre el evaporador es distinta de la simple condensación normal de humedad en esa superficie."

explicacion: |
  La teoría distingue explícitamente entre \"hielo\" (caso 3, síntoma
  anormal) y la condensación esperada como parte del funcionamiento
  normal.
```

### 8 — Filtro obstruido como causa del caso 3

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "Un filtro de aire obstruido o un ventilador fallando pueden ser causa de que se congele el evaporador, según la teoría."

explicacion: |
  Ambos reducen el flujo de aire sobre el evaporador, contribuyendo al
  congelamiento del caso 3.
```

### 9 — Consumo eléctrico anormal

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "intermedio"
  tags: ["caso 4"]

variables:
  n: uno_de([1, 1])

respuesta: "el compresor está forzando, trabajando contra una presión más alta de la normal o con un problema mecánico interno"
tipo: mc
opciones_explicitas: ["el compresor está forzando, trabajando contra una presión más alta de la normal o con un problema mecánico interno", "el equipo está enfriando mejor de lo esperado, sin ningún riesgo", "el consumo eléctrico nunca se relaciona con problemas de refrigeración"]

enunciado: "Un equipo consume notablemente más energía de lo habitual sin enfriar mejor por eso. ¿Qué suele indicar esto, según la teoría?"

explicacion: |
  Suele indicar que el compresor está forzando, exigiéndole más
  energía para el mismo trabajo útil.
```

### 10 — Una misma causa, dos síntomas

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "avanzado"
  tags: ["caso 2", "caso 4"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, un condensador sucio puede explicar a la vez que el equipo enfríe poco (caso 2) y que consuma de más (caso 4), porque ambos síntomas vienen de la misma causa raíz."

explicacion: |
  Es el ejemplo explícito que da la teoría sobre cómo varias causas
  pueden combinarse en un mismo caso raíz.
```

### 11 — Riesgo de un compresor forzado sostenido

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "avanzado"
  tags: ["caso 4"]

respuesta: verdadero
tipo: vf

enunciado: "Un compresor forzado de forma sostenida tiende a fallar antes de lo esperado, por lo que el consumo eléctrico anormal es un síntoma que conviene atender rápido."

explicacion: |
  Es la recomendación final del caso 4: no ignorar un consumo
  eléctrico anormal aunque el equipo siga enfriando.
```

### 12 — El primer paso del método de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "medir presión y temperatura con los instrumentos correspondientes antes de suponer"
tipo: mc
opciones_explicitas: ["medir presión y temperatura con los instrumentos correspondientes antes de suponer", "desarmar el equipo completo antes de cualquier medición", "reemplazar el compresor directamente ante cualquier síntoma"]

enunciado: "Según el método resumido de la teoría, ¿cuál es el primer paso frente a cualquiera de los cuatro casos?"

explicacion: |
  Medir presión y temperatura con los instrumentos correspondientes
  antes de suponer es el primer paso del método resumido.
```

### 13 — Distinguir causa termodinámica de eléctrica

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "El segundo paso del método resumido es distinguir si la causa probable de un síntoma es termodinámica (gas, presión, flujo de aire) o eléctrica (compresor, protecciones, consumo)."

explicacion: |
  Es el segundo paso del método resumido al final de la teoría.
```

### 14 — Varias causas pueden combinarse

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "avanzado"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "El tercer paso del método resumido recuerda que varias causas pueden combinarse en un mismo caso raíz, en vez de asumir siempre una sola causa aislada."

explicacion: |
  Es el tercer paso del método resumido, ejemplificado con el
  condensador sucio del caso 2/4.
```

### 15 — Fuga total vs. fuga parcial

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Una pérdida total de gas refrigerante se asocia al caso 1 (no enfría en absoluto), mientras que una fuga parcial se asocia al caso 2 (enfría poco)."

explicacion: |
  Es la diferencia de magnitud entre ambas causas de pérdida de gas
  mencionadas en la teoría.
```

### 16 — Filtro sucio y evaporador congelado

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "intermedio"
  tags: ["caso 2", "caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "puede contribuir tanto a que el equipo enfríe poco (caso 2) como a que se congele el evaporador (caso 3)"
tipo: mc
opciones_explicitas: ["puede contribuir tanto a que el equipo enfríe poco (caso 2) como a que se congele el evaporador (caso 3)", "sólo afecta al caso 1, nunca a los demás casos", "no tiene relación con ninguno de los cuatro casos"]

enunciado: "Un filtro de aire sucio u obstruido, según la teoría, ¿a qué casos puede contribuir?"

explicacion: |
  El filtro sucio aparece mencionado tanto en el caso 2 (restringe el
  flujo, reduce eficiencia) como en el caso 3 (contribuye al
  congelamiento).
```

### 17 — Ahorrar tiempo con el diagnóstico correcto

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, saber en cuál de los dos mundos (termodinámico o eléctrico) buscar primero, según el síntoma exacto, ahorra tiempo y desarmes innecesarios."

explicacion: |
  Es la idea de apertura de todo el tema de diagnóstico.
```

### 18 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_refrigeracion_diagnostico_refrigeracion_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los cuatro casos de este tema comparten la misma lógica: medir antes de suponer, distinguir causa termodinámica de eléctrica, y considerar que varias causas pueden combinarse."

explicacion: |
  Es la síntesis final del método de diagnóstico de refrigeración de
  todo el tema.
```
