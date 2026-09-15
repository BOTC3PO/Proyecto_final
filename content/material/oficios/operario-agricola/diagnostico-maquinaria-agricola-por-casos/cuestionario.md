# Oficios — Operario Agrícola — Diagnóstico de maquinaria agrícola por casos (cuestionario, 16 preguntas VBLang)

> Cierre del oficio (`OF13`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico de maquinaria
> agrícola — cada pregunta validada con parse+lint+compile+generate
> real de packages/vblang antes de guardarse.

---

### 1 — Por qué el diagnóstico agrícola exige rapidez

```
metadata:
  materia: "oficios"
  tema: "operario_agricola_diagnostico_maquinaria_agricola_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, una parada de maquinaria en medio de una tarea con ventana de tiempo limitada (siembra, cosecha) tiene un costo real que crece cada hora que la máquina sigue detenida."

explicacion: |
  Es la idea de apertura de todo el tema: el operario necesita un
  diagnóstico rápido y confiable, no necesariamente el más exhaustivo
  posible.
```

### 2 — Orden de verificación cuando la máquina no arranca

```
metadata:
  materia: "oficios"
  tema: "operario_agricola_diagnostico_maquinaria_agricola_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "batería y combustible primero, sistemas más complejos recién después"
tipo: mc
opciones_explicitas: ["batería y combustible primero, sistemas más complejos recién después", "el motor de arranque siempre primero, sin excepción", "la electrónica de inyección siempre primero, sin excepción"]

enunciado: "Según la teoría, ¿cuál es el orden de verificación más eficiente cuando una máquina agrícola no arranca?"

explicacion: |
  Empieza por lo más simple y común (batería, combustible), y recién
  después sistemas más complejos como el motor de arranque o la
  electrónica de inyección.
```

### 3 — Por qué verificar el nivel real de combustible

```
metadata:
  materia: "oficios"
  tema: "operario_agricola_diagnostico_maquinaria_agricola_por_casos"
  nivel: "avanzado"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, conviene verificar el nivel real de combustible, no sólo lo que indica el tablero, que puede fallar."

explicacion: |
  Es una advertencia concreta del caso 1 sobre confiar ciegamente en
  el indicador del tablero.
```

### 4 — Causas de pérdida de potencia en uso

```
metadata:
  materia: "oficios"
  tema: "operario_agricola_diagnostico_maquinaria_agricola_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

variables:
  causa: uno_de(["un filtro de combustible o de aire obstruido", "una sobrecarga real del implemento enganchado"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para que una máquina pierda potencia progresivamente durante el trabajo."

explicacion: |
  Ambas son causas mencionadas en el caso 2 para la pérdida progresiva
  de potencia.
```

### 5 — Cómo distinguir entre las dos causas del caso 2

```
metadata:
  materia: "oficios"
  tema: "operario_agricola_diagnostico_maquinaria_agricola_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "comparando si la pérdida de potencia aparece en cualquier terreno o sólo en condiciones específicas más demandantes"
tipo: mc
opciones_explicitas: ["comparando si la pérdida de potencia aparece en cualquier terreno o sólo en condiciones específicas más demandantes", "midiendo únicamente la presión de los neumáticos", "revisando el color del combustible"]

enunciado: "Según la teoría, ¿cómo se distingue si la pérdida de potencia del caso 2 se debe a un filtro obstruido o a una sobrecarga del implemento?"

explicacion: |
  Comparando si la pérdida de potencia aparece siempre, en cualquier
  terreno, o sólo en condiciones específicas más demandantes.
```

### 6 — Implemento que no dosifica bien

```
metadata:
  materia: "oficios"
  tema: "operario_agricola_diagnostico_maquinaria_agricola_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "la calibración física del mecanismo dosificador, antes de sospechar de un cálculo mal hecho"
tipo: mc
opciones_explicitas: ["la calibración física del mecanismo dosificador, antes de sospechar de un cálculo mal hecho", "el color del producto aplicado, exclusivamente", "la marca del tractor utilizado"]

enunciado: "Cuando un implemento no aplica la dosis esperada, ¿qué conviene verificar primero según la teoría?"

explicacion: |
  Conviene verificar la calibración física del mecanismo dosificador
  antes de sospechar de un cálculo mal hecho.
```

### 7 — Causas de dosificación incorrecta con cálculo correcto

```
metadata:
  materia: "oficios"
  tema: "operario_agricola_diagnostico_maquinaria_agricola_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

variables:
  causa: uno_de(["una obstrucción parcial en el mecanismo dosificador", "un desgaste en el mecanismo", "una calibración que se corrió durante el uso"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para que un implemento dosifique mal aunque el cálculo original haya sido correcto."

explicacion: |
  Las tres son causas mencionadas en el caso 3, distintas de un error
  en el cálculo de la dosis.
```

### 8 — El primer paso del método de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "operario_agricola_diagnostico_maquinaria_agricola_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "verificar lo más simple y rápido de comprobar antes de sospechar de sistemas más complejos"
tipo: mc
opciones_explicitas: ["verificar lo más simple y rápido de comprobar antes de sospechar de sistemas más complejos", "desarmar la máquina completa ante cualquier síntoma", "reemplazar el implemento directamente sin diagnosticar"]

enunciado: "Según el método resumido de la teoría, ¿cuál es la prioridad práctica frente a cualquiera de los tres casos?"

explicacion: |
  Empezar verificando lo más simple y rápido de comprobar antes de
  sospechar de sistemas más complejos es la prioridad del método
  resumido.
```

### 9 — El tiempo de diagnóstico tiene un costo

```
metadata:
  materia: "oficios"
  tema: "operario_agricola_diagnostico_maquinaria_agricola_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "En el contexto agrícola, el tiempo de diagnóstico también tiene un costo real, distinto de otros oficios donde la máquina puede esperar sin consecuencias adicionales."

explicacion: |
  Es la síntesis final del método de diagnóstico de maquinaria
  agrícola de todo el tema.
```

### 10 — Bornes flojos u oxidados

```
metadata:
  materia: "oficios"
  tema: "operario_agricola_diagnostico_maquinaria_agricola_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "Bornes flojos u oxidados en la batería son un ejemplo mencionado en la teoría de posible causa de que una máquina no arranque."

explicacion: |
  Es un ejemplo concreto mencionado dentro de la causa \"batería\" del
  caso 1.
```

### 11 — Diferencia entre caso 1 y caso 2

```
metadata:
  materia: "oficios"
  tema: "operario_agricola_diagnostico_maquinaria_agricola_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "el caso 1 es que la máquina no arranca en absoluto; el caso 2 es que arranca bien pero pierde potencia durante el trabajo"
tipo: mc
opciones_explicitas: ["el caso 1 es que la máquina no arranca en absoluto; el caso 2 es que arranca bien pero pierde potencia durante el trabajo", "son exactamente el mismo síntoma con dos nombres distintos", "el caso 1 sólo aplica a cosechadoras, el caso 2 sólo a tractores"]

enunciado: "¿Cuál es la diferencia central entre el caso 1 (no arranca) y el caso 2 (pierde potencia en uso)?"

explicacion: |
  El caso 1 es una falla total de arranque; el caso 2 es una pérdida
  progresiva de rendimiento con la máquina ya funcionando.
```

### 12 — Comparación como método de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "operario_agricola_diagnostico_maquinaria_agricola_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Comparar el comportamiento de la máquina en distintas condiciones de terreno es un método de diagnóstico usado en el caso 2 para distinguir entre dos causas posibles."

explicacion: |
  Es el método concreto propuesto para diferenciar filtro obstruido de
  sobrecarga del implemento.
```

### 13 — Dosis calculada vs. dosis real aplicada

```
metadata:
  materia: "oficios"
  tema: "operario_agricola_diagnostico_maquinaria_agricola_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, un cálculo de dosis correcto no garantiza que el implemento realmente la aplique así en el campo, tal como ya se explicó en `../dosificacion-agricola/`."

explicacion: |
  Es la conexión directa entre este tema y la lección de dosificación,
  donde se introduce la necesidad de calibrar físicamente el
  implemento.
```

### 14 — No sospechar del cálculo primero

```
metadata:
  materia: "oficios"
  tema: "operario_agricola_diagnostico_maquinaria_agricola_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, ante una dosificación incorrecta lo primero que conviene sospechar es que el cálculo original de la dosis estuvo mal hecho."

explicacion: |
  Falso. Conviene verificar primero la calibración física del
  mecanismo dosificador, antes de sospechar de un cálculo mal hecho.
```

### 15 — Costo económico proporcional al tamaño del error

```
metadata:
  materia: "oficios"
  tema: "operario_agricola_diagnostico_maquinaria_agricola_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, una calibración mal hecha en un implemento puede afectar decenas o cientos de hectáreas antes de que alguien lo note, con un impacto económico proporcional al tamaño del error inicial."

explicacion: |
  Es la conexión directa entre este tema y `../dosificacion-agricola/`
  sobre las consecuencias a gran escala de un error de dosificación.
```

### 16 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "operario_agricola_diagnostico_maquinaria_agricola_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los tres casos de este tema comparten la misma lógica: verificar primero lo más simple y rápido, y considerar el costo del tiempo de diagnóstico en el contexto agrícola."

explicacion: |
  Es la síntesis final del método de diagnóstico de maquinaria
  agrícola de todo el tema.
```
