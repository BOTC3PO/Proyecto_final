# Geografía — SIG: GPS (cuestionario, 20 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué significa GPS

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "basico"
  tags: ["gps", "vocabulario"]

enunciado: "¿Qué significa la sigla GPS?"
tipo: mc
opciones_explicitas:
  - "Global Positioning System (Sistema de Posicionamiento Global)"
  - "Geographic Position Sensor"
  - "General Public Satellite"
respuesta: "Global Positioning System (Sistema de Posicionamiento Global)"

explicacion: |
  Es una red de satélites que permite calcular la posición exacta de
  un receptor en la superficie terrestre.
```

### 2 — Método de cálculo: trilateración

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "trilateracion"]

enunciado: "¿Cómo se llama el método matemático con el que el GPS calcula la posición de un receptor?"
tipo: mc
opciones_explicitas:
  - "Trilateración"
  - "Proyección Mercator"
  - "Regla de tres"
respuesta: "Trilateración"

explicacion: |
  Se basa en calcular la distancia a varios satélites y encontrar el
  punto donde esas distancias se cruzan.
```

### 3 — Qué mide el receptor de cada satélite

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "trilateracion"]

enunciado: "¿Qué mide el receptor GPS a partir de la señal que recibe de cada satélite?"
tipo: mc
opciones_explicitas:
  - "Cuánto tiempo tardó en llegar la señal, para convertirlo en distancia"
  - "El color de la señal"
  - "La cantidad de satélites visibles"
respuesta: "Cuánto tiempo tardó en llegar la señal, para convertirlo en distancia"

explicacion: |
  Como la señal viaja a la velocidad de la luz, ese tiempo se convierte
  directo en distancia: distancia = velocidad × tiempo.
```

### 4 — Con un solo satélite

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "trilateracion"]

enunciado: "Si el receptor sólo conoce la distancia a UN satélite, ¿qué puede determinar sobre su posición?"
tipo: mc
opciones_explicitas:
  - "Que está en algún punto de una esfera alrededor de ese satélite, no un punto único"
  - "Su posición exacta en 3D"
  - "Nada, ni siquiera una esfera de posibles ubicaciones"
respuesta: "Que está en algún punto de una esfera alrededor de ese satélite, no un punto único"

explicacion: |
  Con una sola distancia conocida, el conjunto de puntos posibles es
  toda una esfera, no un punto.
```

### 5 — Con tres satélites

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "trilateracion"]

enunciado: "Con la distancia a TRES satélites, ¿qué logra el receptor?"
tipo: mc
opciones_explicitas:
  - "Reducir las posibilidades a un único punto real posible, cruzando las tres esferas"
  - "Calcular su velocidad de desplazamiento"
  - "Nada distinto que con un solo satélite"
respuesta: "Reducir las posibilidades a un único punto real posible, cruzando las tres esferas"

explicacion: |
  Las tres esferas se cruzan en un único punto realista (el otro punto
  matemático suele quedar fuera de la Tierra o a una altura absurda).
```

### 6 — Cantidad mínima de satélites en la práctica

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "trilateracion"]

enunciado: "¿Cuántos satélites hacen falta en la práctica para que un GPS de celular calcule una posición precisa?"
tipo: input
respuesta: 4

explicacion: |
  El cuarto satélite corrige el error del reloj (no atómico) del
  receptor, que si no distorsionaría el cálculo de distancia de los
  otros tres.
```

### 7 — Por qué hace falta un cuarto satélite

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["gps", "trilateracion"]

enunciado: "¿Por qué el GPS de un celular necesita un cuarto satélite además de los tres que alcanzarían con un reloj perfecto?"
tipo: mc
opciones_explicitas:
  - "Porque el reloj del receptor no es tan preciso como los relojes atómicos de los satélites, y la cuarta señal corrige ese error"
  - "Porque un satélite siempre falla y hay que tener uno de repuesto"
  - "Porque cada satélite sólo puede calcular una coordenada (latitud, longitud o altitud)"
respuesta: "Porque el reloj del receptor no es tan preciso como los relojes atómicos de los satélites, y la cuarta señal corrige ese error"

explicacion: |
  Son 4 incógnitas a resolver (latitud, longitud, altitud y error de
  reloj) y 4 ecuaciones — una por cada satélite.
```

### 8 — Relojes atómicos

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps"]

enunciado: "¿Por qué los satélites GPS llevan relojes atómicos extremadamente precisos?"
tipo: mc
opciones_explicitas:
  - "Porque el cálculo de distancia depende de medir el tiempo de viaje de la señal con muchísima precisión"
  - "Porque necesitan mostrar la hora a los usuarios"
  - "Porque los satélites viajan más rápido que la luz"
respuesta: "Porque el cálculo de distancia depende de medir el tiempo de viaje de la señal con muchísima precisión"

explicacion: |
  Un pequeño error de tiempo, multiplicado por la velocidad de la luz,
  se traduce en un error de distancia grande.
```

### 9 — Sistemas equivalentes al GPS

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["gps"]

enunciado: "Además del GPS estadounidense, ¿cuál de estos es otro sistema satelital de posicionamiento real?"
tipo: mc
opciones_explicitas:
  - "GLONASS (Rusia)"
  - "Wi-Fi 6"
  - "Bluetooth Low Energy"
respuesta: "GLONASS (Rusia)"

explicacion: |
  Existen varios sistemas equivalentes: GLONASS (Rusia), Galileo
  (Unión Europea) y BeiDou (China).
```

### 10 — Verdadero o falso: el GPS transmite datos al satélite

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps"]

enunciado: "El receptor GPS de un celular le envía información de vuelta al satélite para que sepa dónde está."
tipo: vf
respuesta: falso

explicacion: |
  El receptor sólo ESCUCHA las señales de los satélites y calcula; no
  transmite nada de vuelta. Compartir la ubicación con otras personas
  es una función aparte, de internet, no del GPS en sí.
```

### 11 — Verdadero o falso: precisión al centímetro

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "limites"]

enunciado: "El GPS de un celular común ubica la posición con precisión de centímetros."
tipo: vf
respuesta: falso

explicacion: |
  La precisión típica de un GPS de celular es de unos pocos metros;
  llegar a centímetros requiere equipamiento especial (GPS diferencial
  o RTK).
```

### 12 — GPS en interiores

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "basico"
  tags: ["gps", "limites"]

enunciado: "¿Por qué el GPS suele funcionar mal o directamente no funcionar dentro de un edificio?"
tipo: mc
opciones_explicitas:
  - "Porque la señal de los satélites es débil y se bloquea fácilmente con techos y paredes"
  - "Porque los satélites no pasan sobre las ciudades"
  - "Porque el GPS necesita conexión a Wi-Fi para funcionar"
respuesta: "Porque la señal de los satélites es débil y se bloquea fácilmente con techos y paredes"

explicacion: |
  Necesita línea de vista relativamente despejada hacia el cielo;
  interiores, túneles y "cañones urbanos" (entre rascacielos) degradan
  mucho la señal.
```

### 13 — Cañón urbano

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["gps", "limites"]

enunciado: "¿Qué es el \"cañón urbano\" que afecta la precisión del GPS?"
tipo: mc
opciones_explicitas:
  - "El efecto de rascacielos muy altos que bloquean o rebotan la señal satelital"
  - "Un tipo de satélite GPS más moderno"
  - "El nombre de una calle con GPS de alta precisión"
respuesta: "El efecto de rascacielos muy altos que bloquean o rebotan la señal satelital"

explicacion: |
  Entre edificios muy altos, la señal puede rebotar (multipath) o
  bloquearse directamente, degradando la posición calculada.
```

### 14 — GPS diferencial / RTK

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["gps", "aplicaciones"]

enunciado: "¿En qué contexto se usa el GPS diferencial o RTK, que llega a precisión de centímetros?"
tipo: mc
opciones_explicitas:
  - "Agricultura de precisión y topografía"
  - "Cualquier celular de gama media"
  - "Sólo en satélites militares"
respuesta: "Agricultura de precisión y topografía"

explicacion: |
  Requiere equipamiento y estaciones de referencia adicionales que un
  celular común no tiene.
```

### 15 — GPS y mapas digitales

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "cruce"]

enunciado: "¿Qué problema resuelve específicamente el GPS, distinto del que resuelve un mapa digital?"
tipo: mc
opciones_explicitas:
  - "El GPS resuelve \"dónde estoy\"; el mapa digital resuelve \"qué hay alrededor de esa posición\""
  - "Son exactamente el mismo problema"
  - "El GPS muestra las calles; el mapa digital calcula la posición"
respuesta: "El GPS resuelve \"dónde estoy\"; el mapa digital resuelve \"qué hay alrededor de esa posición\""

explicacion: |
  Son dos tecnologías distintas combinadas: el GPS da la posición, el
  SIG del mapa digital la interpreta contra sus capas de datos.
```

### 16 — Fórmula distancia-tiempo-velocidad

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["trilateracion", "calculo"]

variables:
  velocidad_luz: 300000
  tiempo_segundos: random_float(0.02, 0.1)

respuesta: redondear(velocidad_luz * tiempo_segundos, 0)
tipo: input
tolerancia_abs: 50

enunciado: "Una señal GPS viaja a {velocidad_luz} km/s (velocidad de la luz, redondeada) y tarda {tiempo_segundos} segundos en llegar al receptor. ¿Aproximadamente cuántos km hay entre el satélite y el receptor?"

pasos:
  - "distancia = velocidad × tiempo = {velocidad_luz} × {tiempo_segundos}"

explicacion: |
  Es el mismo principio que usa el GPS real: convertir tiempo de viaje
  de la señal en distancia, conociendo la velocidad de la luz.
```

### 17 — Incógnitas que resuelve el cuarto satélite

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["trilateracion"]

enunciado: "Contando latitud, longitud, altitud y el error de reloj del receptor, ¿cuántas incógnitas resuelve el sistema con 4 satélites?"
tipo: input
respuesta: 4

explicacion: |
  3 incógnitas de posición (latitud, longitud, altitud) + 1 de error
  de reloj = 4, resueltas con 4 ecuaciones (una por satélite).
```

### 18 — Verdadero o falso: siempre hay línea de vista al cielo en auto

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "basico"
  tags: ["limites"]

enunciado: "Dentro de un túnel largo, el GPS de un auto sigue recibiendo señal satelital normalmente."
tipo: vf
respuesta: falso

explicacion: |
  Un túnel bloquea la señal satelital casi por completo; muchos
  sistemas navegan "a ciegas" estimando posición por velocidad y
  dirección hasta recuperar señal.
```

### 19 — Qué NO calcula el GPS por sí solo

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Cuál de estas tareas NO hace el GPS por sí mismo, sino que depende de otra tecnología (mapas digitales)?"
tipo: mc
opciones_explicitas:
  - "Mostrar el nombre de la calle en la que se está parado"
  - "Calcular la distancia a un satélite a partir del tiempo de viaje de la señal"
  - "Determinar latitud, longitud y altitud del receptor"
respuesta: "Mostrar el nombre de la calle en la que se está parado"

explicacion: |
  El GPS sólo da coordenadas; asociar esas coordenadas a un nombre de
  calle es trabajo del SIG del mapa digital.
```

### 20 — Resumen: qué determina la posición final

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["trilateracion"]

enunciado: "¿Qué determina, en última instancia, la posición 3D final que calcula un receptor GPS?"
tipo: mc
opciones_explicitas:
  - "La intersección de las esferas de distancia a al menos 4 satélites"
  - "La dirección hacia donde apunta la brújula del celular"
  - "El mapa digital que la app tenga descargado"
respuesta: "La intersección de las esferas de distancia a al menos 4 satélites"

explicacion: |
  Es pura trilateración matemática — el mapa digital y la brújula son
  capas de información aparte que se agregan después.
```
