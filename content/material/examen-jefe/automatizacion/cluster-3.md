# Examen jefe — Experto en PLC, Redes y Control Avanzado

> Logro #948. Completaste el parcial dominando la programación de PLC: ladder, temporizadores, contadores y GRAFCET, la neumática e hidráulica básica, las redes industriales y SCADA y la respuesta transitoria, la estabilidad, la sintonía de PID y la seguridad funcional con paradas de emergencia. Pool agregado de los `cuestionario.md` ya validados de sus 9 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **208 preguntas totales** en 9/9 secciones.

---

## Sección: neumatica-e-hidraulica-basica (24 preguntas)

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "basico"
  tags: ["neumatica", "hidraulica"]

enunciado: "¿Qué fluido usa la neumática?"
tipo: mc
opciones_explicitas:
  - "Aire comprimido"
  - "Aceite"
  - "Agua"
  - "Vapor"
respuesta: "Aire comprimido"

explicacion: |
  La hidráulica usa líquido, normalmente aceite.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "basico"
  tags: ["neumatica", "hidraulica"]

enunciado: "¿Qué fluido usa normalmente la hidráulica?"
tipo: mc
opciones_explicitas:
  - "Aceite"
  - "Aire"
  - "Gas natural"
  - "Agua con jabón"
respuesta: "Aceite"

explicacion: |
  Es prácticamente incompresible.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "basico"
  tags: ["neumatica", "hidraulica"]

enunciado: "La presión se define como..."
tipo: mc
opciones_explicitas:
  - "Fuerza dividida por superficie"
  - "Masa por velocidad"
  - "Energía por tiempo"
  - "Caudal por tiempo"
respuesta: "Fuerza dividida por superficie"

explicacion: |
  Por eso F = P · A.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "intermedio"
  tags: ["neumatica", "hidraulica"]

enunciado: "¿Qué sistema es más rígido y preciso para mantener una carga?"
tipo: mc
opciones_explicitas:
  - "El hidráulico"
  - "El neumático"
  - "Ninguno"
  - "Ambos por igual"
respuesta: "El hidráulico"

explicacion: |
  El aceite casi no se comprime.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "intermedio"
  tags: ["neumatica", "hidraulica"]

enunciado: "¿Qué sistema suele trabajar con presiones mucho mayores?"
tipo: mc
opciones_explicitas:
  - "El hidráulico"
  - "El neumático"
  - "Ninguno"
  - "Los dos igual"
respuesta: "El hidráulico"

explicacion: |
  Decenas a cientos de bar.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "intermedio"
  tags: ["neumatica", "hidraulica"]

enunciado: "¿Por qué la neumática es apta para alimentos o farmacia?"
tipo: mc
opciones_explicitas:
  - "Una fuga de aire es limpia e inofensiva"
  - "El aire es más caro"
  - "El aire no necesita compresor"
  - "Es más lento"
respuesta: "Una fuga de aire es limpia e inofensiva"

explicacion: |
  Una fuga de aceite contamina.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "intermedio"
  tags: ["neumatica", "hidraulica"]

enunciado: "¿Qué significa una válvula 5/2?"
tipo: mc
opciones_explicitas:
  - "Cinco vías y dos posiciones"
  - "Cinco posiciones y dos vías"
  - "Cinco bar y dos litros"
  - "Cinco cilindros y dos válvulas"
respuesta: "Cinco vías y dos posiciones"

explicacion: |
  Es la habitual para cilindros de doble efecto.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "basico"
  tags: ["neumatica", "hidraulica"]

enunciado: "En un cilindro de simple efecto, el retorno se produce por..."
tipo: mc
opciones_explicitas:
  - "Un resorte"
  - "Aire por el otro lado"
  - "Un motor eléctrico"
  - "La gravedad solamente"
respuesta: "Un resorte"

explicacion: |
  El aire solo avanza.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "intermedio"
  tags: ["neumatica", "hidraulica"]

enunciado: "¿Qué componente protege un circuito hidráulico de la sobrepresión?"
tipo: mc
opciones_explicitas:
  - "La válvula limitadora de presión"
  - "El depósito"
  - "El filtro"
  - "El cilindro"
respuesta: "La válvula limitadora de presión"

explicacion: |
  Abre cuando la presión excede el máximo.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "avanzado"
  tags: ["neumatica", "hidraulica"]

enunciado: "En un circuito hidráulico, la bomba entrega..."
tipo: mc
opciones_explicitas:
  - "Caudal; la presión la fija la carga hasta el límite de la válvula"
  - "Presión constante siempre"
  - "Solo aire"
  - "Ninguna energía"
respuesta: "Caudal; la presión la fija la carga hasta el límite de la válvula"

explicacion: |
  La presión depende de la resistencia a vencer.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "intermedio"
  tags: ["neumatica", "hidraulica"]

enunciado: "La fuerza teórica de un cilindro se calcula como..."
tipo: mc
opciones_explicitas:
  - "F = P · A"
  - "F = P / A"
  - "F = A / P"
  - "F = P + A"
respuesta: "F = P · A"

explicacion: |
  Presión por área del émbolo.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "avanzado"
  tags: ["neumatica", "hidraulica"]

enunciado: "¿Por qué la fuerza de retroceso de un cilindro de doble efecto es menor?"
tipo: mc
opciones_explicitas:
  - "Porque el vástago reduce el área sobre la que actúa la presión"
  - "Porque el aire se enfría"
  - "Porque falta un resorte"
  - "Porque el cilindro es más corto"
respuesta: "Porque el vástago reduce el área sobre la que actúa la presión"

explicacion: |
  Actúa sobre el área anular.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "intermedio"
  tags: ["neumatica", "hidraulica"]

enunciado: "Para un émbolo circular, el área se calcula como..."
tipo: mc
opciones_explicitas:
  - "π · d² / 4"
  - "π · d"
  - "2 · π · d"
  - "d² / 2"
respuesta: "π · d² / 4"

explicacion: |
  d es el diámetro.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "avanzado"
  tags: ["neumatica", "hidraulica"]

enunciado: "Los símbolos de circuitos neumáticos e hidráulicos se normalizan en..."
tipo: mc
opciones_explicitas:
  - "ISO 1219"
  - "IEC 61131-3"
  - "ISO 9001"
  - "IEC 60848"
respuesta: "ISO 1219"

explicacion: |
  Representan la función, no la forma física.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "basico"
  tags: ["neumatica", "hidraulica"]

respuesta: verdadero
tipo: vf

enunciado: "Un sistema presurizado puede almacenar energía aunque esté parado."

explicacion: |
  Hay que despresurizarlo y bloquearlo antes de intervenir.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "basico"
  tags: ["neumatica", "hidraulica"]

respuesta: falso
tipo: vf

enunciado: "Una fuga de aceite hidráulico a alta presión es inofensiva al tacto."

explicacion: |
  Puede inyectar aceite bajo la piel y es una emergencia médica.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "basico"
  tags: ["neumatica", "hidraulica"]

respuesta: verdadero
tipo: vf

enunciado: "El aire comprimido para uso industrial suele tratarse (filtrado, regulado y a veces lubricado)."

explicacion: |
  Para proteger los componentes.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "basico"
  tags: ["neumatica", "hidraulica"]

respuesta: verdadero
tipo: vf

enunciado: "La fuerza útil de un cilindro suele ser algo menor a la teórica por el rozamiento."

explicacion: |
  Hay que descontarlo.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "intermedio"
  tags: ["neumatica", "hidraulica"]

tipo: completar
enunciado: "La presión de un sistema neumático de planta suele ser de unos ___ bar."
respuestas_validas:
  - 6

explicacion: |
  Valor habitual de trabajo.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "intermedio"
  tags: ["neumatica", "hidraulica"]

tipo: completar
enunciado: "Un cilindro que recibe aire para avanzar y para retroceder es de ___ efecto (simple / doble)."
respuestas_validas:
  - "doble"

explicacion: |
  Tiene dos cámaras.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "avanzado"
  tags: ["neumatica", "hidraulica"]

variables:
  p: random(4, 8)
  d: uno_de([20, 25, 32, 40, 50, 63])

respuesta: redondear(p * 100000 * 3.1416 * (d / 1000)^2 / 4, 0)
tipo: input
tolerancia_abs: 5

enunciado: "Un cilindro neumático de {d} mm de diámetro trabaja a {p} bar. ¿Cuál es la fuerza teórica de avance, en newton? (redondeá a la unidad)"

pasos:
  - "A = π · d² / 4 con d en metros"
  - "F = P · A, con P = bar · 100 000 Pa"

explicacion: |
  Se convierte bar a pascal y milímetros a metros.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "intermedio"
  tags: ["neumatica", "hidraulica"]

variables:
  p: random(4, 8)
  a: uno_de([2, 4, 5, 8, 10])

respuesta: p * 100000 * a / 10000
tipo: input
tolerancia_abs: 0

enunciado: "Un cilindro tiene émbolo de {a} cm² y trabaja a {p} bar. ¿Cuál es la fuerza teórica, en newton? (1 cm² = 0,0001 m²)"

pasos:
  - "F = P · A"

explicacion: |
  1 bar = 100 000 Pa.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "intermedio"
  tags: ["neumatica", "hidraulica"]

variables:
  p: random(100, 250)
  a: uno_de([10, 20, 25, 40, 50])

respuesta: p * 100000 * a / 10000
tipo: input
tolerancia_abs: 0

enunciado: "Un cilindro hidráulico de {a} cm² trabaja a {p} bar. ¿Cuál es la fuerza teórica, en newton?"

pasos:
  - "F = P · A, con P en pascal y A en m²"

explicacion: |
  La hidráulica logra fuerzas enormes con cilindros chicos.
```

```
metadata:
  materia: "automatizacion"
  tema: "neumatica_e_hidraulica_basica"
  nivel: "avanzado"
  tags: ["neumatica", "hidraulica"]

variables:
  f: random(500, 5000)
  a: uno_de([5, 10, 20, 25])

respuesta: redondear(f / (a / 10000) / 100000, 1)
tipo: input
tolerancia_abs: 0.1

enunciado: "Para vencer una carga de {f} N con un cilindro de {a} cm², ¿qué presión mínima (en bar) hace falta? (redondeá a un decimal)"

pasos:
  - "P = F / A, con A en m²"
  - "Pasar pascal a bar"

explicacion: |
  Se despeja la presión de F = P · A.
```

## Sección: plc-lenguaje-ladder-contactos-y-bobinas (23 preguntas)

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

enunciado: "¿Qué es el ladder?"
tipo: mc
opciones_explicitas:
  - "Un lenguaje gráfico de programación de PLC, basado en esquemas de relés"
  - "Un lenguaje de bases de datos"
  - "Un tipo de sensor"
  - "Un cable de comunicación"
respuesta: "Un lenguaje gráfico de programación de PLC, basado en esquemas de relés"

explicacion: |
  Está definido en la norma IEC 61131-3.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

enunciado: "En el ladder, ¿cómo se leen los peldaños?"
tipo: mc
opciones_explicitas:
  - "De arriba hacia abajo y de izquierda a derecha en cada ciclo"
  - "Al azar"
  - "De abajo hacia arriba solamente"
  - "Solo cuando se pulsa un botón"
respuesta: "De arriba hacia abajo y de izquierda a derecha en cada ciclo"

explicacion: |
  El PLC los evalúa en orden en cada ciclo.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

enunciado: "Un contacto normalmente abierto deja pasar cuando el bit asociado vale..."
tipo: mc
opciones_explicitas:
  - "1"
  - "0"
  - "Siempre"
  - "Nunca"
respuesta: "1"

explicacion: |
  Está abierto en reposo y cierra cuando el bit es 1.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

enunciado: "Un contacto normalmente cerrado deja pasar cuando el bit vale..."
tipo: mc
opciones_explicitas:
  - "0"
  - "1"
  - "Siempre"
  - "Nunca"
respuesta: "0"

explicacion: |
  Equivale a la negación de la variable.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

enunciado: "¿Qué representa una bobina en un peldaño?"
tipo: mc
opciones_explicitas:
  - "La salida que se activa si hay continuidad lógica"
  - "Una entrada física"
  - "Un temporizador"
  - "Un cable"
respuesta: "La salida que se activa si hay continuidad lógica"

explicacion: |
  Es el resultado del peldaño.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "intermedio"
  tags: ["plc", "ladder"]

enunciado: "Dos contactos en serie realizan la función..."
tipo: mc
opciones_explicitas:
  - "AND"
  - "OR"
  - "NOT"
  - "XOR"
respuesta: "AND"

explicacion: |
  Deben cumplirse ambos.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "intermedio"
  tags: ["plc", "ladder"]

enunciado: "Dos contactos en paralelo realizan la función..."
tipo: mc
opciones_explicitas:
  - "OR"
  - "AND"
  - "NOT"
  - "NAND"
respuesta: "OR"

explicacion: |
  Basta con que uno se cumpla.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "intermedio"
  tags: ["plc", "ladder"]

enunciado: "¿Qué función realiza un contacto NC?"
tipo: mc
opciones_explicitas:
  - "Una negación (NOT) de la variable"
  - "Una suma"
  - "Una multiplicación"
  - "Un contador"
respuesta: "Una negación (NOT) de la variable"

explicacion: |
  Deja pasar cuando la variable vale 0.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "intermedio"
  tags: ["plc", "ladder"]

enunciado: "¿Para qué sirve el enclavamiento (autorretención)?"
tipo: mc
opciones_explicitas:
  - "Para que un pulsador momentáneo deje al motor funcionando hasta que se lo pare"
  - "Para contar piezas"
  - "Para medir temperatura"
  - "Para comunicar dos PLC"
respuesta: "Para que un pulsador momentáneo deje al motor funcionando hasta que se lo pare"

explicacion: |
  Un contacto de la propia bobina mantiene la señal.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "intermedio"
  tags: ["plc", "ladder"]

enunciado: "En el circuito de arranque-parada, el contacto de autorretención se coloca..."
tipo: mc
opciones_explicitas:
  - "En paralelo con el pulsador de marcha"
  - "En serie con la parada"
  - "En paralelo con la parada"
  - "Después de la bobina"
respuesta: "En paralelo con el pulsador de marcha"

explicacion: |
  Así mantiene la señal al soltar el pulsador.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "avanzado"
  tags: ["plc", "ladder"]

enunciado: "En una instalación real, el pulsador de parada se cablea físicamente normalmente cerrado porque..."
tipo: mc
opciones_explicitas:
  - "Si se corta el cable, el motor se detiene (falla segura)"
  - "Es más barato"
  - "Lo exige el lenguaje"
  - "Ahorra energía"
respuesta: "Si se corta el cable, el motor se detiene (falla segura)"

explicacion: |
  Una falla no debe provocar un arranque.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "avanzado"
  tags: ["plc", "ladder"]

enunciado: "¿Qué diferencia hay entre bobina set y bobina normal?"
tipo: mc
opciones_explicitas:
  - "La set mantiene la salida activa hasta que se la desactive con un reset"
  - "No hay diferencia"
  - "La set solo funciona en simulación"
  - "La normal retiene el estado"
respuesta: "La set mantiene la salida activa hasta que se la desactive con un reset"

explicacion: |
  Es otra forma de hacer un enclavamiento.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "avanzado"
  tags: ["plc", "ladder"]

enunciado: "Un contacto de flanco ascendente está activo..."
tipo: mc
opciones_explicitas:
  - "Durante un ciclo cuando la señal pasa de 0 a 1"
  - "Siempre que la señal valga 1"
  - "Cuando la señal valga 0"
  - "Nunca"
respuesta: "Durante un ciclo cuando la señal pasa de 0 a 1"

explicacion: |
  Sirve para contar pulsos o evitar disparos repetidos.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "avanzado"
  tags: ["plc", "ladder"]

enunciado: "¿Por qué conviene no usar la misma bobina de salida en varios peldaños?"
tipo: mc
opciones_explicitas:
  - "Puede producir resultados confusos"
  - "No se puede programar"
  - "Gasta memoria externa"
  - "Es ilegal"
respuesta: "Puede producir resultados confusos"

explicacion: |
  Pueden pisarse entre sí.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

respuesta: falso
tipo: vf

enunciado: "Un contacto en ladder es un componente físico que se instala en el tablero."

explicacion: |
  Es la consulta del estado de una entrada, salida o variable interna.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

respuesta: verdadero
tipo: vf

enunciado: "El ladder nació para que quienes leían esquemas de relés pudieran programar PLC."

explicacion: |
  Es la razón histórica de su aspecto.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

respuesta: falso
tipo: vf

enunciado: "En un peldaño, contactos en serie equivalen a OR."

explicacion: |
  En serie es AND; en paralelo es OR.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

respuesta: verdadero
tipo: vf

enunciado: "Conviene probar el programa en simulación antes de conectarlo a un equipo real."

explicacion: |
  Reduce riesgos.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "intermedio"
  tags: ["plc", "ladder"]

tipo: completar
enunciado: "La norma que define los lenguajes de programación de PLC es la IEC ___."
respuestas_validas:
  - "61131-3"

explicacion: |
  Incluye ladder, bloques, texto estructurado y SFC.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "intermedio"
  tags: ["plc", "ladder"]

tipo: completar
enunciado: "En el ejemplo básico de arranque-parada, donde el pulsador de parada entrega un 1 al pulsarse, la parada se programa con un contacto ___ (NA / NC)."
respuestas_validas:
  - "NC"

explicacion: |
  Normalmente cerrado.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

variables:
  a: random(0, 1)
  b: random(0, 1)

respuesta: a * b
tipo: input
tolerancia_abs: 0

enunciado: "Dos contactos NA están en serie: el primero tiene el bit en {a} y el segundo en {b}. ¿Cuánto vale la bobina (0 o 1)?"

pasos:
  - "En serie: AND de ambos bits"

explicacion: |
  Se activa solo si ambos valen 1.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

variables:
  a: random(0, 1)
  b: random(0, 1)

respuesta: max(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "Dos contactos NA están en paralelo: bits {a} y {b}. ¿Cuánto vale la bobina (0 o 1)?"

pasos:
  - "En paralelo: OR de los bits"

explicacion: |
  Se activa si al menos uno vale 1.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "intermedio"
  tags: ["plc", "ladder"]

variables:
  m: random(0, 1)
  p: random(0, 1)

respuesta: m * (1 - p)
tipo: input
tolerancia_abs: 0

enunciado: "Un contacto NA de marcha tiene el bit en {m} y un contacto NC de parada tiene el bit del pulsador en {p} (1 = pulsado). Sin autorretención, ¿cuánto vale la bobina del motor?"

pasos:
  - "Bobina = marcha AND NOT parada"

explicacion: |
  El contacto NC deja pasar cuando el pulsador de parada vale 0.
```

## Sección: redes-industriales-y-scada (23 preguntas)

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

enunciado: "¿Para qué sirven las redes industriales?"
tipo: mc
opciones_explicitas:
  - "Para intercambiar datos entre PLC, variadores, sensores y computadoras con pocos cables"
  - "Para ver televisión"
  - "Para medir temperatura"
  - "Para reemplazar los motores"
respuesta: "Para intercambiar datos entre PLC, variadores, sensores y computadoras con pocos cables"

explicacion: |
  Reducen el cableado y facilitan el diagnóstico.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

enunciado: "¿Qué significa determinismo en una red industrial?"
tipo: mc
opciones_explicitas:
  - "Que los mensajes llegan en un tiempo acotado y previsible"
  - "Que nunca falla"
  - "Que es gratuita"
  - "Que usa fibra óptica"
respuesta: "Que los mensajes llegan en un tiempo acotado y previsible"

explicacion: |
  Un retraso puede significar un daño o una parada.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "avanzado"
  tags: ["redes_industriales", "scada"]

enunciado: "Modbus se desarrolló en la empresa..."
tipo: mc
opciones_explicitas:
  - "Modicon"
  - "Microsoft"
  - "Apple"
  - "Siemens"
respuesta: "Modicon"

explicacion: |
  En 1979, para comunicar PLC.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

enunciado: "Modbus funciona con el modelo..."
tipo: mc
opciones_explicitas:
  - "Maestro-esclavo (cliente-servidor)"
  - "Entre pares sin jerarquía"
  - "Solo broadcast"
  - "Por correo electrónico"
respuesta: "Maestro-esclavo (cliente-servidor)"

explicacion: |
  El maestro pregunta y el esclavo responde.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

enunciado: "Modbus RTU suele usar una línea serie..."
tipo: mc
opciones_explicitas:
  - "RS-485"
  - "USB"
  - "HDMI"
  - "Wi-Fi"
respuesta: "RS-485"

explicacion: |
  Permite largas distancias y varios dispositivos.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

enunciado: "Modbus TCP funciona sobre..."
tipo: mc
opciones_explicitas:
  - "Ethernet"
  - "Una línea de 4-20 mA"
  - "Radio solamente"
  - "Un bus serie obligatoriamente"
respuesta: "Ethernet"

explicacion: |
  Aprovecha las redes de datos.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "avanzado"
  tags: ["redes_industriales", "scada"]

enunciado: "¿Qué rango de direcciones tiene un esclavo en Modbus RTU?"
tipo: mc
opciones_explicitas:
  - "De 1 a 247"
  - "De 0 a 9"
  - "De 1 a 10"
  - "De 100 a 200"
respuesta: "De 1 a 247"

explicacion: |
  Cada esclavo tiene una dirección única.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

enunciado: "¿Qué es una HMI?"
tipo: mc
opciones_explicitas:
  - "La pantalla donde el operador ve el estado de una máquina y da órdenes"
  - "Un tipo de cable"
  - "Un transmisor"
  - "Un motor"
respuesta: "La pantalla donde el operador ve el estado de una máquina y da órdenes"

explicacion: |
  Interfaz humano-máquina.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

enunciado: "¿Qué es un SCADA?"
tipo: mc
opciones_explicitas:
  - "Un sistema de supervisión, control y adquisición de datos de una planta o red"
  - "Un lenguaje de PLC"
  - "Un sensor"
  - "Un tipo de motor"
respuesta: "Un sistema de supervisión, control y adquisición de datos de una planta o red"

explicacion: |
  Recoge datos de muchos PLC.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

enunciado: "¿Qué suele registrar un SCADA?"
tipo: mc
opciones_explicitas:
  - "Históricos, tendencias y alarmas"
  - "Solo el color de las luces"
  - "Nada"
  - "Únicamente el consumo de un hogar"
respuesta: "Históricos, tendencias y alarmas"

explicacion: |
  Además muestra diagramas del proceso.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "avanzado"
  tags: ["redes_industriales", "scada"]

enunciado: "¿Para qué se usa OPC UA?"
tipo: mc
opciones_explicitas:
  - "Para intercambiar datos entre sistemas de distintos fabricantes de forma segura"
  - "Para alimentar sensores"
  - "Para regular un motor"
  - "Para medir presión"
respuesta: "Para intercambiar datos entre sistemas de distintos fabricantes de forma segura"

explicacion: |
  Es un estándar de interoperabilidad.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

enunciado: "En los niveles de automatización, los sensores y actuadores están en..."
tipo: mc
opciones_explicitas:
  - "La base (nivel de campo)"
  - "La cima"
  - "El nivel de gestión"
  - "El nivel de ventas"
respuesta: "La base (nivel de campo)"

explicacion: |
  Arriba están el control, la supervisión y la gestión.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

enunciado: "¿Qué se recomienda para proteger una red industrial?"
tipo: mc
opciones_explicitas:
  - "Separarla de la red de oficinas con cortafuegos"
  - "Conectarla directo a internet sin protección"
  - "Usar contraseñas por defecto"
  - "No actualizar nunca nada"
respuesta: "Separarla de la red de oficinas con cortafuegos"

explicacion: |
  Es una de las medidas básicas.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "avanzado"
  tags: ["redes_industriales", "scada"]

enunciado: "Un ataque a un sistema de control puede afectar..."
tipo: mc
opciones_explicitas:
  - "Procesos físicos y no solo datos"
  - "Solo el correo"
  - "Nada"
  - "Únicamente la pantalla"
respuesta: "Procesos físicos y no solo datos"

explicacion: |
  Por eso la seguridad informática en planta es crítica.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

respuesta: verdadero
tipo: vf

enunciado: "Una red industrial debe soportar ruido eléctrico, vibraciones y polvo."

explicacion: |
  Es parte de su robustez.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

respuesta: falso
tipo: vf

enunciado: "Los equipos industriales suelen cambiarse todos los años."

explicacion: |
  Duran décadas, y también sus protocolos.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

respuesta: verdadero
tipo: vf

enunciado: "Modbus es un protocolo abierto y simple."

explicacion: |
  Por eso sigue muy difundido.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

respuesta: falso
tipo: vf

enunciado: "Una planta aislada de toda red no tiene ningún riesgo informático al conectarla a internet."

explicacion: |
  Conectarla abre la puerta a ataques.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

tipo: completar
enunciado: "La línea serie más usada para Modbus RTU es la ___ (RS-485 / USB)."
respuestas_validas:
  - "RS-485"

explicacion: |
  Permite largas distancias.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

tipo: completar
enunciado: "La pantalla local de una máquina para el operador es la ___ (HMI / SCADA)."
respuestas_validas:
  - "HMI"

explicacion: |
  El SCADA abarca toda la planta.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

variables:
  n: random(3, 20)
  p: random(2, 6)

respuesta: n * p
tipo: input
tolerancia_abs: 0

enunciado: "Una planta tiene {n} esclavos Modbus y se leen {p} registros de cada uno. ¿Cuántos registros se leen por barrido?"

pasos:
  - "Total = esclavos · registros por esclavo"

explicacion: |
  Producto de ambos valores.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

variables:
  n: random(3, 20)
  t: random(20, 80)

respuesta: n * t
tipo: input
tolerancia_abs: 0

enunciado: "Cada consulta Modbus a un esclavo tarda {t} ms. Si el maestro consulta uno por uno a {n} esclavos, ¿cuánto tarda un barrido completo, en milisegundos?"

pasos:
  - "Tiempo = esclavos · tiempo por consulta"

explicacion: |
  El maestro pregunta de a uno.
```

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "avanzado"
  tags: ["redes_industriales", "scada"]

variables:
  barridos: random(1, 5)
  n: random(4, 20)
  t: random(20, 60)

respuesta: barridos * n * t / 1000
tipo: input
tolerancia_abs: 0.01

enunciado: "Con {n} esclavos y {t} ms por consulta, ¿cuántos segundos tardan {barridos} barridos completos? (redondeá a dos decimales)"

pasos:
  - "Tiempo total = barridos · esclavos · tiempo por consulta"

explicacion: |
  Se convierte de milisegundos a segundos.
```

## Sección: grafcet-y-automatismos-secuenciales (23 preguntas)

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

enunciado: "¿Qué es el GRAFCET?"
tipo: mc
opciones_explicitas:
  - "Un método gráfico para describir automatismos secuenciales"
  - "Un lenguaje de bases de datos"
  - "Un tipo de motor"
  - "Un protocolo de red"
respuesta: "Un método gráfico para describir automatismos secuenciales"

explicacion: |
  Está normalizado en la IEC 60848.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

enunciado: "¿Cómo se dibuja una etapa?"
tipo: mc
opciones_explicitas:
  - "Como un cuadrado con un número"
  - "Como un círculo"
  - "Como una barra"
  - "Como un triángulo"
respuesta: "Como un cuadrado con un número"

explicacion: |
  La inicial lleva un cuadrado doble.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

enunciado: "¿Cómo se dibuja la etapa inicial?"
tipo: mc
opciones_explicitas:
  - "Con un cuadrado doble"
  - "Con un círculo"
  - "Sin número"
  - "Con una barra"
respuesta: "Con un cuadrado doble"

explicacion: |
  Es el estado de arranque.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

enunciado: "Una transición se representa como..."
tipo: mc
opciones_explicitas:
  - "Una barrita transversal sobre el enlace"
  - "Un cuadrado"
  - "Un rectángulo con texto"
  - "Una flecha doble"
respuesta: "Una barrita transversal sobre el enlace"

explicacion: |
  A su lado se escribe la receptividad.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

enunciado: "La receptividad es..."
tipo: mc
opciones_explicitas:
  - "La condición lógica que debe cumplirse para franquear una transición"
  - "La acción de una etapa"
  - "El nombre del PLC"
  - "Un tipo de sensor"
respuesta: "La condición lógica que debe cumplirse para franquear una transición"

explicacion: |
  Por ejemplo un sensor en 1 o un tiempo cumplido.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

enunciado: "Las acciones de una etapa se ejecutan..."
tipo: mc
opciones_explicitas:
  - "Mientras la etapa está activa"
  - "Siempre"
  - "Nunca"
  - "Solo en la etapa inicial"
respuesta: "Mientras la etapa está activa"

explicacion: |
  Se escriben en un rectángulo pegado a la etapa.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

enunciado: "Una transición está habilitada cuando..."
tipo: mc
opciones_explicitas:
  - "Todas las etapas que la preceden están activas"
  - "Su receptividad es falsa"
  - "El PLC está apagado"
  - "Siempre"
respuesta: "Todas las etapas que la preceden están activas"

explicacion: |
  Para franquear además debe cumplirse la receptividad.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

enunciado: "Al franquearse una transición..."
tipo: mc
opciones_explicitas:
  - "Se activan las etapas siguientes y se desactivan las anteriores"
  - "No cambia nada"
  - "Se reinicia el PLC"
  - "Se activan solo las anteriores"
respuesta: "Se activan las etapas siguientes y se desactivan las anteriores"

explicacion: |
  Es la regla de evolución.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "avanzado"
  tags: ["grafcet", "secuencias"]

enunciado: "¿Qué pasa si una etapa debe activarse y desactivarse a la vez?"
tipo: mc
opciones_explicitas:
  - "Prevalece la activación"
  - "Prevalece la desactivación"
  - "Se produce un error siempre"
  - "Se ignoran ambas"
respuesta: "Prevalece la activación"

explicacion: |
  Es la quinta regla de evolución.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

enunciado: "Una divergencia en O permite..."
tipo: mc
opciones_explicitas:
  - "Elegir uno de varios caminos según las condiciones"
  - "Que todas las ramas avancen a la vez"
  - "Repetir el programa"
  - "Apagar el sistema"
respuesta: "Elegir uno de varios caminos según las condiciones"

explicacion: |
  Por ejemplo clasificar piezas.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

enunciado: "Una divergencia en Y se usa para..."
tipo: mc
opciones_explicitas:
  - "Que varias ramas avancen en paralelo"
  - "Elegir un camino"
  - "Detener la secuencia"
  - "Medir tiempos"
respuesta: "Que varias ramas avancen en paralelo"

explicacion: |
  Luego se esperan entre sí.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "avanzado"
  tags: ["grafcet", "secuencias"]

enunciado: "¿Cuál es el equivalente del GRAFCET en la IEC 61131-3?"
tipo: mc
opciones_explicitas:
  - "El diagrama funcional secuencial (SFC)"
  - "El ladder"
  - "El texto estructurado"
  - "La lista de instrucciones"
respuesta: "El diagrama funcional secuencial (SFC)"

explicacion: |
  Permite programar directamente secuencias en el PLC.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "avanzado"
  tags: ["grafcet", "secuencias"]

enunciado: "Para traducir un GRAFCET a ladder se suele usar..."
tipo: mc
opciones_explicitas:
  - "Un bit interno por cada etapa"
  - "Un cable por transición"
  - "Un PLC por etapa"
  - "Ningún bit"
respuesta: "Un bit interno por cada etapa"

explicacion: |
  Se activa al franquearse la transición anterior.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "avanzado"
  tags: ["grafcet", "secuencias"]

enunciado: "¿Por qué conviene agregar tiempos de vigilancia (timeouts)?"
tipo: mc
opciones_explicitas:
  - "Para evitar que una condición que nunca se cumple bloquee la secuencia"
  - "Para gastar tiempo"
  - "Para ahorrar cables"
  - "Para cambiar de lenguaje"
respuesta: "Para evitar que una condición que nunca se cumple bloquee la secuencia"

explicacion: |
  Permiten detectar fallas.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

respuesta: verdadero
tipo: vf

enunciado: "El GRAFCET nació en Francia."

explicacion: |
  Su nombre es el acrónimo francés.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

respuesta: verdadero
tipo: vf

enunciado: "Dibujar el esquema permite verificar con el cliente el comportamiento antes de programar."

explicacion: |
  Es una de sus ventajas.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

respuesta: falso
tipo: vf

enunciado: "En una secuencia única hay bifurcaciones obligatorias."

explicacion: |
  Es una etapa detrás de otra, sin bifurcaciones.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

respuesta: falso
tipo: vf

enunciado: "Una acción se ejecuta aunque su etapa no esté activa."

explicacion: |
  Solo mientras la etapa está activa.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

tipo: completar
enunciado: "En el GRAFCET, la condición asociada a una transición se llama ___ (receptividad / acción)."
respuestas_validas:
  - "receptividad"

explicacion: |
  Es lo que se evalúa para franquear.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

tipo: completar
enunciado: "La norma que normaliza el GRAFCET es la IEC ___."
respuestas_validas:
  - 60848

explicacion: |
  Es la norma del lenguaje de especificación.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

variables:
  n: random(4, 9)

respuesta: n - 1
tipo: input
tolerancia_abs: 0

enunciado: "Una secuencia única tiene {n} etapas (incluida la inicial) sin ramas ni repeticiones. ¿Cuántas transiciones tiene hasta la última etapa?"

pasos:
  - "Transiciones = etapas − 1"

explicacion: |
  Entre cada par consecutivo de etapas hay una transición.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

variables:
  t1: random(1, 4)
  t2: random(1, 4)
  t3: random(1, 4)

respuesta: t1 + t2 + t3
tipo: input
tolerancia_abs: 0

enunciado: "En una secuencia, la etapa 1 dura {t1} s, la 2 dura {t2} s y la 3 dura {t3} s. ¿Cuántos segundos dura el ciclo completo (sin contar el reposo)?"

pasos:
  - "Se suman las duraciones de las etapas"

explicacion: |
  Cada etapa se activa a continuación de la anterior.
```

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

variables:
  ciclos: random(10, 60)
  seg: random(5, 20)

respuesta: ciclos * seg
tipo: input
tolerancia_abs: 0

enunciado: "Un ciclo de una estampadora dura {seg} s. ¿Cuántos segundos tardan {ciclos} ciclos seguidos?"

pasos:
  - "Tiempo total = ciclos · duración del ciclo"

explicacion: |
  Producto de ambos valores.
```

## Sección: plc-temporizadores-contadores-y-secuencias (23 preguntas)

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

enunciado: "¿Qué hace un temporizador TON?"
tipo: mc
opciones_explicitas:
  - "Retrasa la activación de la salida"
  - "Retrasa la desactivación"
  - "Genera un pulso fijo"
  - "Cuenta piezas"
respuesta: "Retrasa la activación de la salida"

explicacion: |
  Q se activa cuando IN estuvo en 1 durante el tiempo PT.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

enunciado: "En un TON, si IN cae a 0 antes de cumplir PT..."
tipo: mc
opciones_explicitas:
  - "El conteo se reinicia y Q no se activa"
  - "Q se activa igualmente"
  - "Q queda en 1 para siempre"
  - "PT se duplica"
respuesta: "El conteo se reinicia y Q no se activa"

explicacion: |
  Debe mantenerse IN durante todo el tiempo.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

enunciado: "¿Qué hace un temporizador TOF?"
tipo: mc
opciones_explicitas:
  - "Mantiene Q activo un tiempo PT después de que IN vuelve a 0"
  - "Activa Q después de PT"
  - "Cuenta pulsos"
  - "Reinicia el PLC"
respuesta: "Mantiene Q activo un tiempo PT después de que IN vuelve a 0"

explicacion: |
  Retrasa la desconexión.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

enunciado: "Un ventilador que sigue funcionando un minuto después de apagar la máquina usa..."
tipo: mc
opciones_explicitas:
  - "Un TOF"
  - "Un TON"
  - "Un CTU"
  - "Un contador descendente"
respuesta: "Un TOF"

explicacion: |
  La salida se apaga con retardo.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

enunciado: "¿Qué hace un temporizador de pulso (TP)?"
tipo: mc
opciones_explicitas:
  - "Genera un pulso de duración PT al pasar IN de 0 a 1"
  - "Retrasa la entrada"
  - "Cuenta flancos"
  - "Invierte la salida"
respuesta: "Genera un pulso de duración PT al pasar IN de 0 a 1"

explicacion: |
  No importa cuánto dure IN después.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

enunciado: "¿Qué cuenta un contador CTU?"
tipo: mc
opciones_explicitas:
  - "Flancos ascendentes de la entrada"
  - "Niveles de la entrada"
  - "Segundos"
  - "Voltios"
respuesta: "Flancos ascendentes de la entrada"

explicacion: |
  Una pieza quieta frente al sensor se cuenta una sola vez.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

enunciado: "¿Cuándo se activa la salida Q de un CTU?"
tipo: mc
opciones_explicitas:
  - "Cuando el valor actual CV llega al valor preseleccionado PV"
  - "Cuando R está en 1"
  - "Cuando CV es cero"
  - "Siempre"
respuesta: "Cuando el valor actual CV llega al valor preseleccionado PV"

explicacion: |
  Es el aviso de que se llegó a la cantidad.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

enunciado: "¿Para qué sirve la entrada R de un contador?"
tipo: mc
opciones_explicitas:
  - "Para reiniciarlo a cero"
  - "Para retardar la cuenta"
  - "Para invertir la señal"
  - "Para apagar el PLC"
respuesta: "Para reiniciarlo a cero"

explicacion: |
  Si no se reinicia, conserva el valor.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

enunciado: "¿Qué bloque sirve para controlar los autos que hay en un estacionamiento?"
tipo: mc
opciones_explicitas:
  - "CTUD, que cuenta hacia arriba y hacia abajo"
  - "TOF"
  - "TP"
  - "TON"
respuesta: "CTUD, que cuenta hacia arriba y hacia abajo"

explicacion: |
  Suma al entrar y resta al salir.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "avanzado"
  tags: ["plc", "temporizadores"]

enunciado: "En una secuencia con marcas de paso, cada paso..."
tipo: mc
opciones_explicitas:
  - "Activa el siguiente al cumplirse una condición y desactiva el anterior"
  - "Se ejecuta aleatoriamente"
  - "Reinicia el PLC"
  - "Elimina los contadores"
respuesta: "Activa el siguiente al cumplirse una condición y desactiva el anterior"

explicacion: |
  Es la base de las secuencias.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "avanzado"
  tags: ["plc", "temporizadores"]

enunciado: "¿Qué conviene hacer antes de programar una secuencia?"
tipo: mc
opciones_explicitas:
  - "Dibujar los pasos, las acciones y las condiciones de transición"
  - "Programar directamente"
  - "Elegir los cables"
  - "Reiniciar el PLC"
respuesta: "Dibujar los pasos, las acciones y las condiciones de transición"

explicacion: |
  Después se formaliza como GRAFCET.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "avanzado"
  tags: ["plc", "temporizadores"]

enunciado: "Usar el mismo temporizador en dos peldaños distintos puede..."
tipo: mc
opciones_explicitas:
  - "Comportarse de manera impredecible"
  - "Mejorar la precisión"
  - "Duplicar el tiempo"
  - "No tener efecto"
respuesta: "Comportarse de manera impredecible"

explicacion: |
  Se recomienda uno por función.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "avanzado"
  tags: ["plc", "temporizadores"]

enunciado: "¿Qué conviene definir para después de un corte de energía?"
tipo: mc
opciones_explicitas:
  - "Si los contadores y temporizadores se reinician o se retienen"
  - "El color de las luces"
  - "El tamaño del tablero"
  - "El idioma del PLC"
respuesta: "Si los contadores y temporizadores se reinician o se retienen"

explicacion: |
  Evita comportamientos inesperados al reanudar.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

respuesta: falso
tipo: vf

enunciado: "Un TON activa su salida inmediatamente cuando IN pasa a 1."

explicacion: |
  La activa después del tiempo PT.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

respuesta: falso
tipo: vf

enunciado: "Un contador CTU cuenta niveles, no flancos."

explicacion: |
  Cuenta flancos ascendentes.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

respuesta: verdadero
tipo: vf

enunciado: "Un TOF activa su salida de inmediato al pasar IN a 1."

explicacion: |
  Y la desactiva con retardo.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

respuesta: verdadero
tipo: vf

enunciado: "Hay que probar casos límite, como una entrada que dura menos que PT."

explicacion: |
  Son fuente común de errores.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

tipo: completar
enunciado: "El bloque que retrasa la activación de una salida se llama ___ (TON / TOF)."
respuestas_validas:
  - "TON"

explicacion: |
  On-delay.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

tipo: completar
enunciado: "Un contador que suma 1 en cada flanco ascendente es un ___ (CTU / CTD)."
respuestas_validas:
  - "CTU"

explicacion: |
  Count up.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

variables:
  pv: random(6, 24)
  cv: random(0, 5)

respuesta: pv - cv
tipo: input
tolerancia_abs: 0

enunciado: "Un contador CTU tiene PV = {pv} y ya contó CV = {cv} piezas. ¿Cuántas piezas más hacen falta para que se active Q?"

pasos:
  - "Faltan = PV − CV"

explicacion: |
  Q se activa cuando CV alcanza PV.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "basico"
  tags: ["plc", "temporizadores"]

variables:
  ent: random(10, 40)
  sal: random(1, 9)

respuesta: ent - sal
tipo: input
tolerancia_abs: 0

enunciado: "En un estacionamiento con un CTUD entraron {ent} autos y salieron {sal}. ¿Cuánto vale CV?"

pasos:
  - "CV = entradas − salidas"

explicacion: |
  Suma al entrar y resta al salir.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

variables:
  t1: random(2, 6)
  t2: random(2, 6)

respuesta: t1 + t2
tipo: input
tolerancia_abs: 0

enunciado: "Una cinta B arranca con un TON de {t1} s después de A, y una cinta C con otro TON de {t2} s después de B. ¿Cuántos segundos después de A arranca C?"

pasos:
  - "Se suman los retardos"

explicacion: |
  Los retardos se encadenan.
```

```
metadata:
  materia: "automatizacion"
  tema: "plc_temporizadores_contadores_y_secuencias"
  nivel: "intermedio"
  tags: ["plc", "temporizadores"]

variables:
  pt: random(3, 15)
  dur: random(1, 20)

respuesta: dur >= pt
tipo: vf

enunciado: "Un TON tiene PT = {pt} s. La entrada IN permanece en 1 durante {dur} s y luego cae. Entonces la salida Q llegó a activarse."

explicacion: |
  Q se activa solo si IN permanece en 1 al menos el tiempo PT. Si IN duró menos, el conteo se reinició.
```

## Sección: respuesta-transitoria-y-regimen-permanente (23 preguntas)

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

enunciado: "¿Qué es la respuesta transitoria?"
tipo: mc
opciones_explicitas:
  - "El camino que recorre la salida hasta acercarse al nuevo valor"
  - "El valor final de la salida"
  - "El ruido del sensor"
  - "La señal de referencia"
respuesta: "El camino que recorre la salida hasta acercarse al nuevo valor"

explicacion: |
  Es lo que ocurre entre el cambio y el asentamiento.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

enunciado: "¿Qué es el régimen permanente?"
tipo: mc
opciones_explicitas:
  - "El comportamiento una vez que pasó la parte transitoria"
  - "El instante del escalón"
  - "El arranque del proceso"
  - "La falla del sensor"
respuesta: "El comportamiento una vez que pasó la parte transitoria"

explicacion: |
  Es el estado al que se llega cuando todo se asentó.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

enunciado: "El tiempo de subida mide..."
tipo: mc
opciones_explicitas:
  - "Lo que tarda la salida en ir del 10 % al 90 % del valor final"
  - "Lo que tarda en estabilizarse"
  - "El valor máximo alcanzado"
  - "El error final"
respuesta: "Lo que tarda la salida en ir del 10 % al 90 % del valor final"

explicacion: |
  Indica la rapidez inicial.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

enunciado: "El sobreimpulso es..."
tipo: mc
opciones_explicitas:
  - "Cuánto se pasa la salida del valor final, en porcentaje"
  - "La demora del sensor"
  - "El error en régimen"
  - "El tiempo de pico"
respuesta: "Cuánto se pasa la salida del valor final, en porcentaje"

explicacion: |
  Se calcula sobre el valor final.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

enunciado: "El tiempo de establecimiento es..."
tipo: mc
opciones_explicitas:
  - "El tiempo que tarda en entrar y quedarse en una banda (por ejemplo ±2 %) del valor final"
  - "El tiempo del primer cruce por el valor final"
  - "La duración del escalón"
  - "El período de muestreo"
respuesta: "El tiempo que tarda en entrar y quedarse en una banda (por ejemplo ±2 %) del valor final"

explicacion: |
  Mide cuándo se puede considerar asentada la respuesta.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

enunciado: "¿Qué sistema no presenta sobreimpulso?"
tipo: mc
opciones_explicitas:
  - "Uno de primer orden"
  - "Uno de segundo orden con poco amortiguamiento"
  - "Uno que oscila"
  - "Ninguno"
respuesta: "Uno de primer orden"

explicacion: |
  El de primer orden se acerca sin pasarse.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

enunciado: "Poco amortiguamiento produce..."
tipo: mc
opciones_explicitas:
  - "Mucho sobreimpulso y varias oscilaciones"
  - "Respuesta lenta sin oscilar"
  - "Error nulo siempre"
  - "Ninguna oscilación"
respuesta: "Mucho sobreimpulso y varias oscilaciones"

explicacion: |
  Menos amortiguamiento, más oscilación.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

enunciado: "Un exceso de amortiguamiento produce..."
tipo: mc
opciones_explicitas:
  - "Una respuesta sin oscilar pero lenta"
  - "Mucho sobreimpulso"
  - "Inestabilidad"
  - "Mayor rapidez"
respuesta: "Una respuesta sin oscilar pero lenta"

explicacion: |
  Se evita oscilar a costa de tardar más.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

enunciado: "Al aumentar la ganancia de un controlador, lo más probable es que..."
tipo: mc
opciones_explicitas:
  - "Baje el tiempo de subida y suba el sobreimpulso"
  - "Aumente el tiempo de subida"
  - "Desaparezca todo error"
  - "No cambie nada"
respuesta: "Baje el tiempo de subida y suba el sobreimpulso"

explicacion: |
  Es el compromiso típico entre rapidez y sobrepaso.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

enunciado: "¿Cómo se define el error en régimen permanente?"
tipo: mc
opciones_explicitas:
  - "Referencia menos salida final"
  - "Salida inicial menos final"
  - "Valor máximo menos valor mínimo"
  - "Tiempo de pico menos subida"
respuesta: "Referencia menos salida final"

explicacion: |
  Mide cuánto falta para llegar a lo pedido.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

enunciado: "¿Qué acción de control elimina el error en régimen ante un escalón?"
tipo: mc
opciones_explicitas:
  - "La integral"
  - "La derivativa"
  - "Solo la proporcional"
  - "Ninguna"
respuesta: "La integral"

explicacion: |
  El integrador sigue acumulando mientras haya error.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "avanzado"
  tags: ["respuesta_transitoria", "control"]

enunciado: "Un horno cerámico donde pasarse de temperatura arruina la pieza prioriza..."
tipo: mc
opciones_explicitas:
  - "Bajo sobreimpulso"
  - "Mínimo tiempo de subida a cualquier costo"
  - "Máximo sobreimpulso"
  - "Ignorar el tiempo de establecimiento"
respuesta: "Bajo sobreimpulso"

explicacion: |
  Las especificaciones dependen de la aplicación.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "avanzado"
  tags: ["respuesta_transitoria", "control"]

enunciado: "Un control solo proporcional suele dejar un error residual porque..."
tipo: mc
opciones_explicitas:
  - "Para mantener la salida hace falta una señal de control, y esa señal exige que haya error"
  - "El sensor siempre falla"
  - "La referencia cambia sola"
  - "La derivada actúa de más"
respuesta: "Para mantener la salida hace falta una señal de control, y esa señal exige que haya error"

explicacion: |
  Sin integral, el error no puede llegar a cero en muchos procesos.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

respuesta: verdadero
tipo: vf

enunciado: "El tiempo de pico es el instante en que la salida alcanza su valor máximo."

explicacion: |
  Aparece cuando hay sobrepaso.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

respuesta: falso
tipo: vf

enunciado: "Un buen diseño suele lograr a la vez el menor tiempo de subida y cero sobreimpulso sin ningún compromiso."

explicacion: |
  Casi siempre hay que negociar entre rapidez y sobrepaso.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

respuesta: verdadero
tipo: vf

enunciado: "La banda de ±2 % o ±5 % se usa para definir el tiempo de establecimiento."

explicacion: |
  Son valores habituales.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

respuesta: verdadero
tipo: vf

enunciado: "Una perturbación constante puede dejar un error en régimen si el controlador no tiene acción integral."

explicacion: |
  Sin integral, el error puede persistir.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

tipo: completar
enunciado: "El error en régimen permanente es la diferencia entre la referencia y la salida ___ (inicial / final)."
respuestas_validas:
  - "final"

explicacion: |
  error = referencia − salida final.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

tipo: completar
enunciado: "Para eliminar el error en régimen ante un escalón se agrega acción ___ (integral / derivativa)."
respuestas_validas:
  - "integral"

explicacion: |
  El integrador acumula el error hasta anularlo.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

variables:
  yf: random(50, 120)
  extra: random(5, 25)

respuesta: redondear(extra / yf * 100, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "La salida se estabiliza en {yf} y alcanzó un máximo de {yf + extra}. ¿Cuál es el sobreimpulso, en %? (redondeá a un decimal)"

pasos:
  - "Sobreimpulso = (máximo − final) / final × 100"

explicacion: |
  Se calcula sobre el valor final.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

variables:
  ref: random(80, 150)
  err: random(1, 10)

respuesta: err
tipo: input
tolerancia_abs: 0

enunciado: "Se pide {ref} y la salida se estabiliza en {ref - err}. ¿Cuál es el error en régimen permanente?"

pasos:
  - "Error = referencia − salida final"

explicacion: |
  Es la diferencia entre lo pedido y lo logrado.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "intermedio"
  tags: ["respuesta_transitoria", "control"]

variables:
  ref: random(50, 200)
  err: random(2, 20)

respuesta: redondear(err / ref * 100, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "Con referencia {ref} y error en régimen de {err}, ¿cuál es el error expresado como % de la referencia? (redondeá a un decimal)"

pasos:
  - "Error % = error / referencia × 100"

explicacion: |
  Se suele expresar relativo a la referencia.
```

```
metadata:
  materia: "automatizacion"
  tema: "respuesta_transitoria_y_regimen_permanente"
  nivel: "basico"
  tags: ["respuesta_transitoria", "control"]

variables:
  t10: random(1, 4)
  t90: random(5, 12)

respuesta: t90 - t10
tipo: input
tolerancia_abs: 0

enunciado: "La salida alcanza el 10 % del valor final a los {t10} s y el 90 % a los {t90} s. ¿Cuál es el tiempo de subida, en segundos?"

pasos:
  - "Tiempo de subida = t(90 %) − t(10 %)"

explicacion: |
  Es la diferencia entre ambos instantes.
```

## Sección: seguridad-funcional-y-paradas-de-emergencia (23 preguntas)

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "basico"
  tags: ["seguridad", "parada_de_emergencia"]

enunciado: "La seguridad funcional busca que, ante una falla, la máquina..."
tipo: mc
opciones_explicitas:
  - "Pase a un estado seguro"
  - "Siga funcionando igual"
  - "Se acelere"
  - "Ignore el problema"
respuesta: "Pase a un estado seguro"

explicacion: |
  No es solo poner una reja.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "basico"
  tags: ["seguridad", "parada_de_emergencia"]

enunciado: "¿Cómo es el pulsador de parada de emergencia?"
tipo: mc
opciones_explicitas:
  - "Un hongo rojo sobre fondo amarillo que se traba al pulsarlo"
  - "Un botón verde pequeño"
  - "Un interruptor de pared"
  - "Una llave de cuatro posiciones"
respuesta: "Un hongo rojo sobre fondo amarillo que se traba al pulsarlo"

explicacion: |
  Exige una acción deliberada para soltarlo.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "basico"
  tags: ["seguridad", "parada_de_emergencia"]

enunciado: "Al liberar la parada de emergencia, la máquina..."
tipo: mc
opciones_explicitas:
  - "No debe volver a arrancar sola"
  - "Arranca de inmediato"
  - "Se reinicia el PLC"
  - "Cambia de modo"
respuesta: "No debe volver a arrancar sola"

explicacion: |
  Hace falta un rearme y una orden de marcha.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "intermedio"
  tags: ["seguridad", "parada_de_emergencia"]

enunciado: "¿Por qué la parada de emergencia se cablea con contactos normalmente cerrados?"
tipo: mc
opciones_explicitas:
  - "Para que un cable cortado se interprete como una parada"
  - "Para ahorrar cobre"
  - "Por estética"
  - "Porque el PLC lo exige siempre"
respuesta: "Para que un cable cortado se interprete como una parada"

explicacion: |
  Es lógica de falla segura.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "intermedio"
  tags: ["seguridad", "parada_de_emergencia"]

enunciado: "La parada categoría 0 consiste en..."
tipo: mc
opciones_explicitas:
  - "El corte inmediato de la energía a los actuadores"
  - "Una parada controlada con energía"
  - "Una parada con retardo"
  - "Un reinicio"
respuesta: "El corte inmediato de la energía a los actuadores"

explicacion: |
  La máquina frena por inercia o con freno mecánico.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "intermedio"
  tags: ["seguridad", "parada_de_emergencia"]

enunciado: "La parada categoría 1 consiste en..."
tipo: mc
opciones_explicitas:
  - "Una parada controlada y luego el corte de energía"
  - "El corte inmediato"
  - "Mantener la energía en posición"
  - "Un arranque suave"
respuesta: "Una parada controlada y luego el corte de energía"

explicacion: |
  Se frena de manera ordenada.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "intermedio"
  tags: ["seguridad", "parada_de_emergencia"]

enunciado: "La parada categoría 2 consiste en..."
tipo: mc
opciones_explicitas:
  - "Una parada controlada que mantiene la energía en los actuadores"
  - "Cortar toda la energía"
  - "Acelerar la máquina"
  - "Cambiar el programa"
respuesta: "Una parada controlada que mantiene la energía en los actuadores"

explicacion: |
  Por ejemplo, para quedar en posición.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "intermedio"
  tags: ["seguridad", "parada_de_emergencia"]

enunciado: "¿Qué hace un interruptor de seguridad en una puerta de protección?"
tipo: mc
opciones_explicitas:
  - "Detiene la máquina si se abre la puerta"
  - "Abre la puerta sola"
  - "Mide la temperatura"
  - "Cuenta piezas"
respuesta: "Detiene la máquina si se abre la puerta"

explicacion: |
  Evita el acceso a zonas peligrosas.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "intermedio"
  tags: ["seguridad", "parada_de_emergencia"]

enunciado: "Una cortina de luz sirve para..."
tipo: mc
opciones_explicitas:
  - "Detectar la presencia de una persona en la zona"
  - "Iluminar el taller"
  - "Medir caudal"
  - "Reducir ruido"
respuesta: "Detectar la presencia de una persona en la zona"

explicacion: |
  Si se interrumpe, la máquina se detiene.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "avanzado"
  tags: ["seguridad", "parada_de_emergencia"]

enunciado: "¿Por qué no alcanza un PLC común para funciones críticas de seguridad?"
tipo: mc
opciones_explicitas:
  - "Puede fallar sin avisar y no está certificado para ello"
  - "Es muy barato"
  - "Es muy lento"
  - "No tiene salidas"
respuesta: "Puede fallar sin avisar y no está certificado para ello"

explicacion: |
  Se usan relés o PLC de seguridad.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "avanzado"
  tags: ["seguridad", "parada_de_emergencia"]

enunciado: "La redundancia en un circuito de seguridad significa..."
tipo: mc
opciones_explicitas:
  - "Tener dos canales que se verifican entre sí"
  - "Usar un solo contacto"
  - "Duplicar el programa de oficina"
  - "Ignorar las fallas"
respuesta: "Tener dos canales que se verifican entre sí"

explicacion: |
  Si uno falla, el otro lo detecta.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "avanzado"
  tags: ["seguridad", "parada_de_emergencia"]

enunciado: "La norma ISO 13849-1 clasifica la confiabilidad de las funciones de seguridad con..."
tipo: mc
opciones_explicitas:
  - "Niveles de desempeño PL, de la a a la e"
  - "Niveles de gris"
  - "Letras A a Z"
  - "Colores"
respuesta: "Niveles de desempeño PL, de la a a la e"

explicacion: |
  Además define categorías B, 1, 2, 3 y 4.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "avanzado"
  tags: ["seguridad", "parada_de_emergencia"]

enunciado: "¿Qué se usa para determinar el nivel de seguridad exigido?"
tipo: mc
opciones_explicitas:
  - "Una evaluación de riesgos"
  - "Un sorteo"
  - "El color de la máquina"
  - "La antigüedad del fabricante"
respuesta: "Una evaluación de riesgos"

explicacion: |
  Considera gravedad, exposición y posibilidad de evitar el daño.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "intermedio"
  tags: ["seguridad", "parada_de_emergencia"]

enunciado: "En el bloqueo y etiquetado (LOTO), ¿quién retira el candado?"
tipo: mc
opciones_explicitas:
  - "La persona que lo colocó"
  - "Cualquier compañero"
  - "El primero que llegue"
  - "El gerente siempre"
respuesta: "La persona que lo colocó"

explicacion: |
  Cada persona coloca su propio candado.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "basico"
  tags: ["seguridad", "parada_de_emergencia"]

respuesta: falso
tipo: vf

enunciado: "La parada de emergencia reemplaza a las protecciones de la máquina."

explicacion: |
  Es una medida complementaria.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "basico"
  tags: ["seguridad", "parada_de_emergencia"]

respuesta: verdadero
tipo: vf

enunciado: "Una parada categoría 1 mantiene la energía hasta que la máquina se detiene."

explicacion: |
  Y la corta recién al detenerse.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "basico"
  tags: ["seguridad", "parada_de_emergencia"]

respuesta: verdadero
tipo: vf

enunciado: "En trabajos de mantenimiento hay que verificar la ausencia de energía antes de intervenir."

explicacion: |
  Después de bloquear y etiquetar.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "basico"
  tags: ["seguridad", "parada_de_emergencia"]

respuesta: verdadero
tipo: vf

enunciado: "Un cable cortado en un circuito de parada de emergencia debe poder provocar la parada."

explicacion: |
  Es el criterio de falla segura.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "intermedio"
  tags: ["seguridad", "parada_de_emergencia"]

tipo: completar
enunciado: "La sigla LOTO se refiere al procedimiento de bloqueo y ___ (etiquetado / lubricación)."
respuestas_validas:
  - "etiquetado"

explicacion: |
  Lockout/Tagout.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "intermedio"
  tags: ["seguridad", "parada_de_emergencia"]

tipo: completar
enunciado: "Las máquinas se evalúan con una evaluación de ___ (riesgos / ventas) para definir el nivel de seguridad."
respuestas_validas:
  - "riesgos"

explicacion: |
  Es el punto de partida del diseño.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "basico"
  tags: ["seguridad", "parada_de_emergencia"]

variables:
  pl: uno_de([1, 2, 3, 4, 5])

respuesta: pl
tipo: input
tolerancia_abs: 0

enunciado: "Los niveles de desempeño PL van de 'a' a 'e'. Si el nivel requerido es el {pl}.º de la lista (a = 1, b = 2, c = 3, d = 4, e = 5), ¿qué número escribís?"

pasos:
  - "a = 1, b = 2, c = 3, d = 4, e = 5"

explicacion: |
  Solo es un ejercicio de correspondencia.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "intermedio"
  tags: ["seguridad", "parada_de_emergencia"]

variables:
  v: random(1, 6)
  d: random(1, 10)

respuesta: redondear(v * d, 1)
tipo: input
tolerancia_abs: 0.1

enunciado: "Una persona se acerca a una zona peligrosa a {v} m/s y la máquina tarda {d} s en detenerse una vez accionada la parada. ¿Cuántos metros avanza la persona mientras tanto?"

pasos:
  - "Distancia = velocidad · tiempo"

explicacion: |
  Por eso hay distancias mínimas de seguridad.
```

```
metadata:
  materia: "automatizacion"
  tema: "seguridad_funcional_y_paradas_de_emergencia"
  nivel: "avanzado"
  tags: ["seguridad", "parada_de_emergencia"]

variables:
  v: uno_de([1, 1.6, 2])
  t: random(1, 5)

respuesta: redondear(v * t, 1)
tipo: input
tolerancia_abs: 0.1

enunciado: "Una cortina de luz se ubica a una distancia mínima que se calcula con la velocidad de aproximación de una persona ({v} m/s) y el tiempo total de parada ({t} s). ¿Cuántos metros mínimos de distancia son? (redondeá a un decimal; ejemplo simplificado)"

pasos:
  - "Distancia = velocidad · tiempo"

explicacion: |
  En la práctica se agregan márgenes definidos por norma.
```

## Sección: estabilidad-de-sistemas-de-control (22 preguntas)

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

enunciado: "Un sistema de control es estable si..."
tipo: mc
opciones_explicitas:
  - "Después de una perturbación termina asentándose en un valor"
  - "Su salida crece sin límite"
  - "Nunca cambia"
  - "Oscila cada vez más"
respuesta: "Después de una perturbación termina asentándose en un valor"

explicacion: |
  La estabilidad es la capacidad de volver a un equilibrio.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

enunciado: "¿Qué es un sistema marginalmente estable?"
tipo: mc
opciones_explicitas:
  - "Uno que oscila con amplitud constante"
  - "Uno que se apaga rápido"
  - "Uno que crece sin límite"
  - "Uno sin realimentación"
respuesta: "Uno que oscila con amplitud constante"

explicacion: |
  Está en el límite entre estable e inestable.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

enunciado: "¿Qué caracteriza a un sistema inestable?"
tipo: mc
opciones_explicitas:
  - "La salida se aleja cada vez más del equilibrio"
  - "La salida se apaga"
  - "La salida es constante"
  - "No tiene polos"
respuesta: "La salida se aleja cada vez más del equilibrio"

explicacion: |
  Pierde el control.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

enunciado: "El chillido de un micrófono cerca del parlante es un ejemplo de..."
tipo: mc
opciones_explicitas:
  - "Realimentación positiva con ganancia excesiva"
  - "Control PID"
  - "Lazo abierto"
  - "Régimen permanente"
respuesta: "Realimentación positiva con ganancia excesiva"

explicacion: |
  El ruido se amplifica y vuelve al micrófono una y otra vez.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "intermedio"
  tags: ["estabilidad", "polos"]

enunciado: "Si todos los polos tienen parte real negativa, el sistema es..."
tipo: mc
opciones_explicitas:
  - "Estable"
  - "Inestable"
  - "Marginalmente estable"
  - "Imposible de analizar"
respuesta: "Estable"

explicacion: |
  Cada término de la respuesta se apaga con el tiempo.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "intermedio"
  tags: ["estabilidad", "polos"]

enunciado: "Si algún polo tiene parte real positiva, el sistema es..."
tipo: mc
opciones_explicitas:
  - "Inestable"
  - "Estable"
  - "Más rápido"
  - "De primer orden"
respuesta: "Inestable"

explicacion: |
  Ese término crece con el tiempo.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "intermedio"
  tags: ["estabilidad", "polos"]

enunciado: "Polos con parte real cero (y ninguno positivo) indican..."
tipo: mc
opciones_explicitas:
  - "Oscilación sostenida, en el límite de la estabilidad"
  - "Respuesta muy rápida"
  - "Error nulo"
  - "Estabilidad absoluta"
respuesta: "Oscilación sostenida, en el límite de la estabilidad"

explicacion: |
  Es el caso marginal.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "intermedio"
  tags: ["estabilidad", "polos"]

enunciado: "Al aumentar la ganancia del controlador en un lazo cerrado, lo más probable es que..."
tipo: mc
opciones_explicitas:
  - "El sistema se vuelva más rápido pero menos estable"
  - "Se vuelva más lento"
  - "Siempre sea más estable"
  - "No pase nada"
respuesta: "El sistema se vuelva más rápido pero menos estable"

explicacion: |
  Más allá de un valor crítico puede dejar de ser estable.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "intermedio"
  tags: ["estabilidad", "polos"]

enunciado: "¿Qué efecto tienen los retardos puros sobre la estabilidad?"
tipo: mc
opciones_explicitas:
  - "La empeoran, porque el controlador corrige con información vieja"
  - "La mejoran"
  - "No tienen efecto"
  - "Eliminan el error"
respuesta: "La empeoran, porque el controlador corrige con información vieja"

explicacion: |
  Por ejemplo, el tiempo de una cañería hasta el sensor.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "avanzado"
  tags: ["estabilidad", "polos"]

enunciado: "¿Para qué sirve el criterio de Routh-Hurwitz?"
tipo: mc
opciones_explicitas:
  - "Para saber cuántos polos tienen parte real positiva sin calcularlos"
  - "Para calcular el sobreimpulso"
  - "Para medir el ruido"
  - "Para sintonizar un PLC"
respuesta: "Para saber cuántos polos tienen parte real positiva sin calcularlos"

explicacion: |
  Usa solo los coeficientes del polinomio característico.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "avanzado"
  tags: ["estabilidad", "polos"]

enunciado: "Para un polinomio a·s² + b·s + c, ¿cuál es la condición de estabilidad?"
tipo: mc
opciones_explicitas:
  - "Los tres coeficientes tienen el mismo signo"
  - "a debe ser cero"
  - "b debe ser negativo y c positivo"
  - "Solo importa c"
respuesta: "Los tres coeficientes tienen el mismo signo"

explicacion: |
  Para segundo orden alcanza con coeficientes del mismo signo.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "avanzado"
  tags: ["estabilidad", "polos"]

enunciado: "Si en el polinomio característico falta un coeficiente, el sistema..."
tipo: mc
opciones_explicitas:
  - "No es estable"
  - "Es estable"
  - "Es de primer orden"
  - "Es lineal por definición"
respuesta: "No es estable"

explicacion: |
  Es una condición necesaria que se verifica de entrada.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "avanzado"
  tags: ["estabilidad", "polos"]

enunciado: "¿Por qué se deja un margen de seguridad respecto del límite de estabilidad?"
tipo: mc
opciones_explicitas:
  - "Porque el modelo no es exacto y la planta cambia con el uso"
  - "Por costumbre"
  - "Para gastar más energía"
  - "Porque lo exige el PLC"
respuesta: "Porque el modelo no es exacto y la planta cambia con el uso"

explicacion: |
  Un sistema que apenas es estable es peligroso.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

respuesta: verdadero
tipo: vf

enunciado: "Un control inestable puede ser peor que no tener control."

explicacion: |
  Puede disparar el proceso o dañar los equipos.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

respuesta: falso
tipo: vf

enunciado: "La estabilidad es una condición secundaria que se revisa después de la rapidez."

explicacion: |
  Es la primera condición de cualquier diseño.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

respuesta: verdadero
tipo: vf

enunciado: "Polos más alejados del eje vertical hacia la izquierda hacen que la respuesta se apague más rápido."

explicacion: |
  Son términos que decaen más velozmente.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

respuesta: falso
tipo: vf

enunciado: "El criterio de Routh exige calcular todas las raíces del polinomio."

explicacion: |
  Justamente permite evitarlo.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "intermedio"
  tags: ["estabilidad", "polos"]

tipo: completar
enunciado: "Si algún polo tiene parte real ___ (positiva / negativa), el sistema es inestable."
respuestas_validas:
  - "positiva"

explicacion: |
  El término correspondiente de la respuesta crece.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "intermedio"
  tags: ["estabilidad", "polos"]

tipo: completar
enunciado: "A partir de cierto valor de ganancia, llamado valor ___ (crítico / mínimo), el lazo deja de ser estable."
respuestas_validas:
  - "crítico"

explicacion: |
  Es el límite de estabilidad.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "intermedio"
  tags: ["estabilidad", "polos"]

variables:
  a: random(1, 6)
  b: random(1, 9)
  c: random(1, 9)

respuesta: a * 100 + b * 10 + c
tipo: input
tolerancia_abs: 0

enunciado: "Un sistema tiene polinomio característico {a}·s² + {b}·s + {c}. Si es estable, tipeá el número formado por a, b y c juntos (en ese orden). Pista: los tres coeficientes tienen el mismo signo."

pasos:
  - "a = {a}, b = {b}, c = {c}: los tres son positivos, el sistema es estable"

explicacion: |
  Con los tres coeficientes positivos el sistema de segundo orden es estable.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "basico"
  tags: ["estabilidad", "polos"]

variables:
  k: random(2, 20)
  kc: random(25, 60)

respuesta: kc - k
tipo: input
tolerancia_abs: 0

enunciado: "Un lazo es estable hasta una ganancia crítica de {kc}. Si hoy trabaja con ganancia {k}, ¿cuánto margen absoluto de ganancia queda?"

pasos:
  - "Margen = ganancia crítica − ganancia actual"

explicacion: |
  Es la distancia al límite de estabilidad.
```

```
metadata:
  materia: "automatizacion"
  tema: "estabilidad_de_sistemas_de_control"
  nivel: "avanzado"
  tags: ["estabilidad", "polos"]

variables:
  k: random(2, 20)
  kc: uno_de([20, 25, 40, 50])

respuesta: redondear(kc / k, 1)
tipo: input
tolerancia_abs: 0.1

enunciado: "La ganancia crítica de un lazo es {kc} y el controlador trabaja con {k}. ¿Cuántas veces se podría multiplicar la ganancia actual antes de llegar al límite? (redondeá a un decimal)"

pasos:
  - "Factor = ganancia crítica / ganancia actual"

explicacion: |
  A ese cociente se lo llama margen de ganancia (en veces).
```

## Sección: sintonia-de-pid-metodos-practicos (24 preguntas)

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "basico"
  tags: ["pid", "sintonia"]

enunciado: "¿Qué es sintonizar un PID?"
tipo: mc
opciones_explicitas:
  - "Elegir sus parámetros (Kp, Ti, Td) para que el lazo responda bien"
  - "Conectar sus cables"
  - "Programarlo en ladder"
  - "Medir su consumo"
respuesta: "Elegir sus parámetros (Kp, Ti, Td) para que el lazo responda bien"

explicacion: |
  No hay valores universales: dependen del proceso.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "basico"
  tags: ["pid", "sintonia"]

enunciado: "Subir Kp suele producir..."
tipo: mc
opciones_explicitas:
  - "Respuesta más rápida pero más sobreimpulso"
  - "Respuesta más lenta"
  - "Menos sobreimpulso siempre"
  - "Eliminación del ruido"
respuesta: "Respuesta más rápida pero más sobreimpulso"

explicacion: |
  Si se exagera, aparecen oscilaciones.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "basico"
  tags: ["pid", "sintonia"]

enunciado: "La acción integral sirve principalmente para..."
tipo: mc
opciones_explicitas:
  - "Eliminar el error residual"
  - "Amplificar el ruido"
  - "Frenar cambios bruscos"
  - "Medir la perturbación"
respuesta: "Eliminar el error residual"

explicacion: |
  Acumula el error hasta anularlo.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "basico"
  tags: ["pid", "sintonia"]

enunciado: "La acción derivativa..."
tipo: mc
opciones_explicitas:
  - "Anticipa la tendencia del error y amortigua, pero amplifica el ruido"
  - "Elimina el error en régimen"
  - "No tiene efectos"
  - "Siempre se recomienda al máximo"
respuesta: "Anticipa la tendencia del error y amortigua, pero amplifica el ruido"

explicacion: |
  Se usa con cuidado o se omite.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

enunciado: "En la sintonía por prueba y error, ¿cómo se suele empezar?"
tipo: mc
opciones_explicitas:
  - "Solo con acción proporcional"
  - "Con derivativa máxima"
  - "Con el integrador al máximo"
  - "Sin controlador"
respuesta: "Solo con acción proporcional"

explicacion: |
  Se agrega la integral después.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

enunciado: "Un Ti chico significa una integral..."
tipo: mc
opciones_explicitas:
  - "Fuerte, que corrige rápido pero puede oscilar"
  - "Débil"
  - "Nula"
  - "Derivativa"
respuesta: "Fuerte, que corrige rápido pero puede oscilar"

explicacion: |
  Un Ti grande es una integral suave.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

enunciado: "¿Qué es la ganancia crítica Ku en Ziegler-Nichols de lazo cerrado?"
tipo: mc
opciones_explicitas:
  - "La ganancia proporcional con la que el lazo oscila con amplitud constante"
  - "La ganancia mínima del sensor"
  - "La ganancia del actuador"
  - "La ganancia del PLC"
respuesta: "La ganancia proporcional con la que el lazo oscila con amplitud constante"

explicacion: |
  Es el límite de estabilidad.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

enunciado: "¿Qué es el período crítico Pu?"
tipo: mc
opciones_explicitas:
  - "El período de la oscilación sostenida en la ganancia crítica"
  - "El tiempo de muestreo"
  - "La duración del ensayo"
  - "El retardo del sensor"
respuesta: "El período de la oscilación sostenida en la ganancia crítica"

explicacion: |
  Se mide sobre la gráfica de la salida.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "avanzado"
  tags: ["pid", "sintonia"]

enunciado: "Para un PID, la tabla de Z-N de lazo cerrado da Kp igual a..."
tipo: mc
opciones_explicitas:
  - "0,6 · Ku"
  - "0,5 · Ku"
  - "1,2 · Ku"
  - "Pu / 2"
respuesta: "0,6 · Ku"

explicacion: |
  Ti = Pu / 2 y Td = Pu / 8.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "avanzado"
  tags: ["pid", "sintonia"]

enunciado: "Para un controlador solo P, Z-N propone Kp igual a..."
tipo: mc
opciones_explicitas:
  - "0,5 · Ku"
  - "0,6 · Ku"
  - "0,45 · Ku"
  - "Ku"
respuesta: "0,5 · Ku"

explicacion: |
  Es la mitad de la ganancia crítica.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

enunciado: "¿Qué desventaja tiene Z-N de lazo cerrado en una planta real?"
tipo: mc
opciones_explicitas:
  - "Obliga a llevar el lazo al borde de la inestabilidad"
  - "Requiere un PLC nuevo"
  - "No sirve para procesos lentos"
  - "Elimina la integral"
respuesta: "Obliga a llevar el lazo al borde de la inestabilidad"

explicacion: |
  Puede ser peligroso o inaceptable.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "avanzado"
  tags: ["pid", "sintonia"]

enunciado: "El método de la curva de reacción (lazo abierto) obtiene sus datos..."
tipo: mc
opciones_explicitas:
  - "Con un escalón en la salida del controlador en manual"
  - "Haciendo oscilar el lazo"
  - "Con el controlador en automático"
  - "Sin registrar la respuesta"
respuesta: "Con un escalón en la salida del controlador en manual"

explicacion: |
  Se leen K, el retardo L y la constante de tiempo.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

enunciado: "¿Qué es el windup?"
tipo: mc
opciones_explicitas:
  - "Acumulación excesiva de la integral cuando el actuador está saturado"
  - "Un ruido del sensor"
  - "Una falla del PLC"
  - "Un exceso de derivativa"
respuesta: "Acumulación excesiva de la integral cuando el actuador está saturado"

explicacion: |
  Provoca un gran sobreimpulso al salir de la saturación.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

enunciado: "¿Qué técnica combate el windup?"
tipo: mc
opciones_explicitas:
  - "Anti-windup: limitar o frenar la integral mientras el actuador está saturado"
  - "Subir Td"
  - "Apagar el sensor"
  - "Bajar la frecuencia de muestreo a cero"
respuesta: "Anti-windup: limitar o frenar la integral mientras el actuador está saturado"

explicacion: |
  La mayoría de los controladores industriales la incluye.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "avanzado"
  tags: ["pid", "sintonia"]

enunciado: "¿Cuánto es aproximadamente el sobreimpulso que producen las reglas de Z-N?"
tipo: mc
opciones_explicitas:
  - "Alrededor del 25 %, por lo que se afinan después"
  - "Cero"
  - "Más del 100 %"
  - "Siempre menor al 1 %"
respuesta: "Alrededor del 25 %, por lo que se afinan después"

explicacion: |
  Son un punto de partida, no un resultado final.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "basico"
  tags: ["pid", "sintonia"]

respuesta: falso
tipo: vf

enunciado: "Un mismo conjunto de parámetros PID sirve para cualquier proceso."

explicacion: |
  Dependen de la dinámica de cada proceso.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "basico"
  tags: ["pid", "sintonia"]

respuesta: verdadero
tipo: vf

enunciado: "La sintonía por prueba y error puede llevar horas en procesos lentos."

explicacion: |
  Cada prueba exige esperar la respuesta.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "basico"
  tags: ["pid", "sintonia"]

respuesta: falso
tipo: vf

enunciado: "Con la saturación del actuador la integral deja de acumular por sí sola, sin necesidad de anti-windup."

explicacion: |
  Sin protección, sigue acumulando.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "basico"
  tags: ["pid", "sintonia"]

respuesta: verdadero
tipo: vf

enunciado: "Una sintonía algo conservadora suele ser preferible cuando hay dudas."

explicacion: |
  Evita oscilaciones y riesgos.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

tipo: completar
enunciado: "La sigla Kp designa la ganancia ___ (proporcional / integral)."
respuestas_validas:
  - "proporcional"

explicacion: |
  Reacciona al error presente.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

tipo: completar
enunciado: "Ziegler y Nichols publicaron sus reglas en el año ___."
respuestas_validas:
  - 1942

explicacion: |
  Es una receta empírica clásica.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

variables:
  ku: random(4, 20)

respuesta: redondear(0.6 * ku, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "En un ensayo de Z-N, la ganancia crítica es Ku = {ku}. ¿Cuánto vale Kp para un controlador PID? (redondeá a dos decimales)"

pasos:
  - "Kp = 0,6 · Ku"

explicacion: |
  Tabla de Ziegler-Nichols de lazo cerrado.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

variables:
  pu: uno_de([8, 10, 12, 16, 20, 24, 40])

respuesta: pu / 2
tipo: input
tolerancia_abs: 0

enunciado: "En un ensayo de Z-N, el período crítico es Pu = {pu} s. ¿Cuánto vale Ti para un PID, en segundos?"

pasos:
  - "Ti = Pu / 2"

explicacion: |
  Tabla de Ziegler-Nichols de lazo cerrado.
```

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

variables:
  pu: uno_de([8, 16, 24, 32, 40, 48])

respuesta: pu / 8
tipo: input
tolerancia_abs: 0

enunciado: "Con Pu = {pu} s, ¿cuánto vale Td para un PID de Z-N, en segundos?"

pasos:
  - "Td = Pu / 8"

explicacion: |
  Tabla de Ziegler-Nichols de lazo cerrado.
```

