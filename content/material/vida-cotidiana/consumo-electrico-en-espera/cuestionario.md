# Vida Cotidiana — Consumo eléctrico en espera (phantom loads) (cuestionario, 22 preguntas VBLang)

> Tema: `vida-cotidiana/consumo-electrico-en-espera`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "consumo fantasma (phantom load)"
tipo: completar

enunciado: "El consumo de energía de un aparato que sigue enchufado pero \"apagado\", en estado de espera, se llama ___."

respuestas_validas:
  - "consumo fantasma"
  - "phantom load"

explicacion: |
  Es el consumo silencioso y continuo que tienen muchos aparatos en
  standby, aunque parezcan no estar haciendo nada.
```

### 2 — pregunta 2

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "basico"
  tags: ["aparatos"]

variables:
  aparato: uno_de(["televisores", "consolas", "cargadores", "routers", "microondas con reloj"])

respuesta: verdadero
tipo: vf

enunciado: "\"{aparato}\" es un ejemplo de aparato que puede seguir consumiendo energía en modo standby, según la teoría."

explicacion: |
  Quedan en espera para prenderse al instante, mantener el reloj o
  seguir conectados a la red, y eso consume energía continuamente.
```

### 3 — pregunta 3

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "intermedio"
  tags: ["medicion"]

variables:
  n: uno_de([1, 1])

respuesta: "un vatímetro"
tipo: mc
opciones_explicitas: ["un vatímetro", "un termómetro", "una balanza"]

enunciado: "El instrumento más directo para medir el consumo real de un aparato en modo standby es..."

explicacion: |
  Es un enchufe intermedio que mide cuánto consume lo que se conecta a
  él.
```

### 4 — pregunta 4

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "basico"
  tags: ["ley de joule nombre"]

variables:
  n: uno_de([1, 1])

respuesta: "Ley de Joule"
tipo: completar

enunciado: "La ley física que explica por qué una corriente eléctrica disipa energía en forma de calor al atravesar un componente con resistencia se llama ___."

respuestas_validas:
  - "Ley de Joule"

explicacion: |
  Es la base física de por qué un aparato "apagado" sigue consumiendo:
  su fuente interna sigue teniendo corriente circulando.
```

### 5 — pregunta 5

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "intermedio"
  tags: ["formula joule"]

variables:
  I: random(2, 8)
  R: random(2, 6)

respuesta: I*I*R
tipo: input
tolerancia_abs: 0

enunciado: "Según la Ley de Joule (P = I² · R), si por un componente circula una corriente de {I} amperios y su resistencia es de {R} ohms, ¿cuántos vatios de potencia se disipan?"

explicacion: |
  P = I² · R = {I}² · {R}.
```

### 6 — pregunta 6

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "avanzado"
  tags: ["formula joule variable"]

variables:
  P: random(20, 80)
  I: random(2, 5)

respuesta: redondear(P / (I*I), 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Si un componente disipa {P} vatios con una corriente de {I} amperios, ¿cuál es su resistencia R en ohms? (P = I² · R)"

explicacion: |
  Despejando: R = P / I² = {P} / {I}².
```

### 7 — pregunta 7

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "intermedio"
  tags: ["porque apagado sigue consumiendo"]

variables:
  n: uno_de([1, 1])

respuesta: "sigue teniendo corriente circulando por sus componentes internos"
tipo: mc
opciones_explicitas: ["sigue teniendo corriente circulando por sus componentes internos", "genera electricidad propia sin conexión", "no consume nada en absoluto"]

enunciado: "Un transformador o fuente interna \"esperando\" en modo standby..."

explicacion: |
  Aunque el aparato parezca apagado, la fuente sigue con corriente
  interna, y por Ley de Joule esa corriente disipa energía.
```

### 8 — pregunta 8

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "avanzado"
  tags: ["caida de tension en cables"]

variables:
  n: uno_de([1, 1])

respuesta: "el propio cable tiene resistencia y disipa energía en forma de calor"
tipo: mc
opciones_explicitas: ["el propio cable tiene resistencia y disipa energía en forma de calor", "el cable genera electricidad extra", "los cables largos nunca calientan"]

enunciado: "Una extensión eléctrica muy larga o de sección inadecuada calienta bajo carga alta porque..."

explicacion: |
  El mismo principio (Ley de Joule) explica tanto el consumo fantasma
  como el calentamiento de cables: cualquier resistencia disipa energía
  como calor.
```

### 9 — pregunta 9

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "intermedio"
  tags: ["seccion de cable"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La sección (grosor) de un cable debe elegirse según cuánta corriente va a llevar, no sólo según su longitud."

explicacion: |
  Un cable fino con mucha corriente circulando disipa más calor por
  resistencia y puede sobrecalentarse.
```

### 10 — pregunta 10

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "basico"
  tags: ["aplicacion practica"]

variables:
  n: uno_de([1, 1])

respuesta: "desenchufar los aparatos que no se van a usar por un tiempo largo"
tipo: mc
opciones_explicitas: ["desenchufar los aparatos que no se van a usar por un tiempo largo", "dejar todo enchufado siempre para ahorrar tiempo", "usar cables más finos para ahorrar cobre"]

enunciado: "Una recomendación práctica de la teoría para reducir el consumo fantasma es..."

explicacion: |
  También sugiere usar una zapatilla con interruptor para cortar el
  standby de varios aparatos a la vez.
```

### 11 — pregunta 11

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "intermedio"
  tags: ["magnitud del consumo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El consumo fantasma de un aparato individual suele ser de pocos vatios, pero al ser constante las 24 horas puede representar una parte real de la factura mensual."

explicacion: |
  Aunque cada aparato consuma poco, sumado a varios aparatos y todo el
  día, el efecto acumulado es real.
```

### 12 — pregunta 12

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "avanzado"
  tags: ["formula joule"]

variables:
  I: random(3, 9)
  R: random(1, 4)

respuesta: I*I*R
tipo: input
tolerancia_abs: 0

enunciado: "Un cable con resistencia de {R} ohms lleva una corriente de {I} amperios. ¿Cuántos vatios de potencia disipa como calor (P = I² · R)?"

explicacion: |
  Es la misma fórmula de la Ley de Joule aplicada a un cable en vez de a
  la fuente interna de un aparato.
```

### 13 — pregunta 13

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "basico"
  tags: ["unidades"]

variables:
  n: uno_de([1, 1])

respuesta: "vatios"
tipo: mc
opciones_explicitas: ["vatios", "amperios", "ohms"]

enunciado: "En la fórmula P = I² · R, la potencia disipada P se mide en..."

explicacion: |
  I se mide en amperios y R en ohms; el resultado P es la potencia,
  medida en vatios.
```

### 14 — pregunta 14

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "intermedio"
  tags: ["razon del standby"]

variables:
  razon: uno_de(["prenderse al instante con el control remoto", "mantener el reloj funcionando", "seguir conectados a la red"])

respuesta: verdadero
tipo: vf

enunciado: "\"{razon}\" es una de las razones por las que un aparato queda en modo standby en vez de apagarse completamente, según la teoría."

explicacion: |
  El estado de espera permite funciones rápidas sin tener que reiniciar
  el aparato completamente.
```

### 15 — pregunta 15

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "avanzado"
  tags: ["conductor tibio"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un cable muy largo o delgado puede sentirse tibio al tacto bajo carga alta, debido a su propia resistencia."

explicacion: |
  Cuanto más largo y fino es un cable, mayor es su resistencia, y por
  Ley de Joule, mayor el calor disipado en el trayecto.
```

### 16 — pregunta 16

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "basico"
  tags: ["no duplica"]

variables:
  n: uno_de([1, 1])

respuesta: "por qué un aparato apagado sigue consumiendo, no la lectura del medidor"
tipo: mc
opciones_explicitas: ["por qué un aparato apagado sigue consumiendo, no la lectura del medidor", "cómo leer la factura de luz paso a paso", "cómo instalar un medidor eléctrico nuevo"]

enunciado: "A diferencia del módulo de lectura de factura/medidor, este tema se enfoca específicamente en..."

explicacion: |
  Son dos ángulos distintos y complementarios del consumo eléctrico
  doméstico, sin superponerse.
```

### 17 — pregunta 17

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "intermedio"
  tags: ["herramientas alternativas"]

variables:
  n: uno_de([1, 1])

respuesta: "un multímetro"
tipo: mc
opciones_explicitas: ["un multímetro", "una regla", "un termómetro de cocina"]

enunciado: "Además del vatímetro, otro instrumento mencionado en la teoría para medir consumo eléctrico es..."

explicacion: |
  El multímetro es una herramienta más general que también permite
  medir magnitudes eléctricas.
```

### 18 — pregunta 18

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "avanzado"
  tags: ["formula joule"]

variables:
  I: random(4, 10)
  R: random(1, 3)

respuesta: I*I*R
tipo: input
tolerancia_abs: 0

enunciado: "Una fuente interna en standby tiene {R} ohms de resistencia y {I} amperios circulando. ¿Cuántos vatios consume constantemente (P = I² · R)?"

explicacion: |
  Ese consumo constante, aunque chico, es exactamente el "consumo
  fantasma" del aparato en espera.
```

### 19 — pregunta 19

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "basico"
  tags: ["zapatilla con interruptor"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar una zapatilla con interruptor permite cortar el standby de varios aparatos a la vez, según la teoría."

explicacion: |
  Es una solución práctica para no tener que desenchufar cada aparato
  individualmente.
```

### 20 — pregunta 20

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "intermedio"
  tags: ["herramientas de alta potencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para herramientas eléctricas de alta potencia, elegir la sección de cable adecuada evita tanto pérdida de energía como riesgo de sobrecalentamiento."

explicacion: |
  Una sección insuficiente para la corriente exigida genera más
  resistencia, más calor disipado y riesgo real de sobrecalentamiento.
```

### 21 — pregunta 21

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "basico"
  tags: ["mito"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un aparato con el botón de encendido apagado pero todavía enchufado consume exactamente cero energía."

explicacion: |
  Mientras siga enchufado y en modo standby, sigue habiendo un pequeño
  consumo continuo (consumo fantasma).
```

### 22 — pregunta 22

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_electrico_en_espera"
  nivel: "intermedio"
  tags: ["frecuencia del consumo"]

variables:
  n: uno_de([1, 1])

respuesta: "constantes las 24 horas, todos los días del año"
tipo: mc
opciones_explicitas: ["constantes las 24 horas, todos los días del año", "sólo durante la noche", "una vez por semana al encender el aparato"]

enunciado: "El consumo fantasma medido en un aparato en standby es de pocos vatios, pero..."

explicacion: |
  Esa constancia (24/7) es lo que hace que, sumado, tenga un impacto
  real en la factura, aunque cada instante consuma poco.
```

