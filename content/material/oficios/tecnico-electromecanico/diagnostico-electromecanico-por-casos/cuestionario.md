# Oficios — Técnico Electromecánico — Diagnóstico multivariable por casos (cuestionario, 18 preguntas VBLang)

> Cierre del oficio (`OF11`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico multivariable
> — cada pregunta validada con parse+lint+compile+generate real de
> packages/vblang antes de guardarse.

---

### 1 — Qué es el diagnóstico multivariable

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Un técnico electromecánico experimentado busca el patrón combinado entre varias variables (temperatura, corriente, vibración) a la vez, en vez de mirar cada lectura por separado."

explicacion: |
  Es la idea de apertura de todo el tema: la combinación de variables
  reduce mucho más las hipótesis posibles que cualquier lectura
  aislada.
```

### 2 — Temperatura alta, corriente normal, vibración axial alta

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "avanzado"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "un problema mecánico, como un rodamiento desgastado o mal lubricado"
tipo: mc
opciones_explicitas: ["un problema mecánico, como un rodamiento desgastado o mal lubricado", "un problema puramente eléctrico del motor", "una falla en el sistema de control PLC"]

enunciado: "Según la teoría, si un motor presenta temperatura elevada, corriente normal y vibración axial elevada, ¿a qué apunta ese patrón combinado?"

explicacion: |
  Si la corriente es normal, el motor no se esfuerza eléctricamente de
  más; el calor y la vibración probablemente vienen de una fricción
  mecánica anormal, como un rodamiento desgastado.
```

### 3 — Por qué la corriente normal descarta lo eléctrico en el caso 1

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "avanzado"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, si la corriente del motor es normal, eso indica que el motor no está \"esforzándose\" eléctricamente de más."

explicacion: |
  Es el razonamiento central del caso 1 para descartar una causa
  eléctrica y orientar el diagnóstico hacia lo mecánico.
```

### 4 — Corriente alta, temperatura alta, vibración normal

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "un problema eléctrico o de carga mecánica excesiva, sin relación con los rodamientos"
tipo: mc
opciones_explicitas: ["un problema eléctrico o de carga mecánica excesiva, sin relación con los rodamientos", "siempre un rodamiento desgastado, igual que en el caso 1", "un problema exclusivamente de instrumentación mal calibrada"]

enunciado: "Según la teoría, si un motor presenta corriente elevada, temperatura elevada y vibración normal, ¿a qué apunta ese patrón?"

explicacion: |
  Sin la vibración anormal que indicaría un problema mecánico interno
  del motor, la causa probable es eléctrica o de exigencia de carga
  excesiva.
```

### 5 — Diferencia entre caso 1 y caso 2

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "La variable que distingue al caso 1 (problema mecánico) del caso 2 (problema eléctrico/de carga) es cuál de las otras dos variables (corriente o vibración) está fuera de rango."

explicacion: |
  En el caso 1 la vibración está elevada con corriente normal; en el
  caso 2 la corriente está elevada con vibración normal — la misma
  temperatura elevada acompaña a causas distintas según el resto del
  patrón.
```

### 6 — Vibración alta, corriente y temperatura normales

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "una causa mecánica externa al motor, como desbalanceo, desalineación o base floja"
tipo: mc
opciones_explicitas: ["una causa mecánica externa al motor, como desbalanceo, desalineación o base floja", "siempre un problema interno grave del motor eléctrico", "un problema exclusivo de la instrumentación de temperatura"]

enunciado: "Según la teoría, si sólo la vibración está fuera de rango (corriente y temperatura normales), ¿a qué suele apuntar la causa?"

explicacion: |
  El motor está funcionando bien eléctricamente; el problema está en
  la transmisión mecánica del movimiento hacia afuera del motor
  (desbalanceo, desalineación, base floja).
```

### 7 — El motor está bien, el problema está afuera

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "En el caso 3, el motor en sí está funcionando bien eléctricamente; el problema está en la transmisión mecánica del movimiento hacia afuera del motor."

explicacion: |
  Es la conclusión explícita del caso 3, distinguiéndolo del caso 1
  (donde el problema es interno, en los rodamientos del propio motor).
```

### 8 — Todas las variables elevadas al mismo tiempo

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "avanzado"
  tags: ["caso 4"]

variables:
  n: uno_de([1, 1])

respuesta: "detener la máquina para una inspección completa"
tipo: mc
opciones_explicitas: ["detener la máquina para una inspección completa", "seguir usando la máquina mientras se identifica una sola causa aislada", "ignorar el patrón si la máquina sigue produciendo con normalidad"]

enunciado: "Según la teoría, cuando temperatura, corriente y vibración están elevadas simultáneamente, ¿qué corresponde hacer?"

explicacion: |
  La situación es más grave y probablemente involucra más de una
  causa combinada; corresponde detener la máquina, no seguir
  operándola buscando una sola causa aislada.
```

### 9 — Por qué el caso 4 es más grave

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "avanzado"
  tags: ["caso 4"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, cuando todas las variables están elevadas al mismo tiempo, probablemente hay más de una causa combinada, o una falla que ya avanzó lo suficiente como para afectar a todo el sistema."

explicacion: |
  Es la explicación de por qué el caso 4 se trata como más grave que
  los casos 1-3, que tienen un patrón más acotado.
```

### 10 — La misma variable, causas distintas

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según el método resumido de la teoría, la misma variable elevada (por ejemplo, temperatura) puede señalar causas completamente distintas según qué otras variables la acompañen."

explicacion: |
  Es la síntesis final del método de diagnóstico multivariable de todo
  el tema.
```

### 11 — Qué es más informativo que una lectura aislada

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "el patrón combinado de qué variables están fuera de rango y cuáles están normales"
tipo: mc
opciones_explicitas: ["el patrón combinado de qué variables están fuera de rango y cuáles están normales", "sólo la variable con el valor numérico más alto", "el orden en que se tomaron las mediciones"]

enunciado: "Según el método resumido de la teoría, ¿qué es más informativo que cualquier lectura aislada al diagnosticar una máquina?"

explicacion: |
  El patrón combinado entre varias lecturas simultáneas es, en
  conjunto, más informativo que cualquier lectura aislada.
```

### 12 — Rodamiento desgastado: calor por fricción

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "Un rodamiento desgastado o mal lubricado puede generar calor por fricción y vibración en el sentido axial del eje, sin que el motor eléctrico en sí tenga ningún problema."

explicacion: |
  Es el mecanismo concreto explicado en el caso 1 para justificar el
  patrón temperatura alta + corriente normal + vibración axial alta.
```

### 13 — Exigir al motor más de lo diseñado

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Una causa probable del caso 2 es que la máquina esté exigiendo al motor más trabajo del que fue diseñado para entregar en ese punto de operación."

explicacion: |
  Es una de las dos causas mencionadas en el caso 2, junto con una
  falla eléctrica que aumenta el consumo sin generar vibración.
```

### 14 — Desbalanceo en un elemento acoplado

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "Un desbalanceo en un elemento acoplado al motor, como una polea o un ventilador, es un ejemplo de causa mecánica externa mencionado en la teoría para el caso 3."

explicacion: |
  Es uno de los ejemplos concretos mencionados en el caso 3, junto con
  desalineación y base floja.
```

### 15 — Diferencia entre caso 3 y caso 4

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "avanzado"
  tags: ["caso 3", "caso 4"]

variables:
  n: uno_de([1, 1])

respuesta: "el caso 3 tiene sólo una variable fuera de rango; el caso 4 tiene las tres variables elevadas al mismo tiempo"
tipo: mc
opciones_explicitas: ["el caso 3 tiene sólo una variable fuera de rango; el caso 4 tiene las tres variables elevadas al mismo tiempo", "son exactamente el mismo caso con distinto nombre", "el caso 3 siempre es más grave que el caso 4"]

enunciado: "¿Cuál es la diferencia central entre el caso 3 (sólo vibración elevada) y el caso 4 (todas las variables elevadas)?"

explicacion: |
  El caso 3 tiene un patrón acotado a una sola variable; el caso 4
  tiene las tres variables elevadas simultáneamente, señal de una
  situación más grave o de causas combinadas.
```

### 16 — No intentar identificar una sola causa en el caso 4

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "avanzado"
  tags: ["caso 4"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, ante el patrón del caso 4 (todas las variables elevadas), corresponde seguir operando la máquina mientras se busca identificar una sola causa aislada."

explicacion: |
  Falso. Corresponde detener la máquina para una inspección completa,
  no intentar identificar una sola causa aislada mientras sigue
  funcionando.
```

### 17 — El diagnóstico multivariable reduce hipótesis

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Combinar varias lecturas de instrumentación a la vez reduce mucho más las hipótesis posibles que cualquier lectura tomada de forma aislada."

explicacion: |
  Es la razón de fondo por la que este oficio usa un enfoque de
  diagnóstico multivariable, distinto del diagnóstico de síntoma único
  de otros oficios.
```

### 18 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_diagnostico_electromecanico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los cuatro casos de este tema comparten la misma lógica: interpretar el patrón combinado de temperatura, corriente y vibración en conjunto, no cada variable por separado."

explicacion: |
  Es la síntesis final del método de diagnóstico multivariable de todo
  el tema.
```
