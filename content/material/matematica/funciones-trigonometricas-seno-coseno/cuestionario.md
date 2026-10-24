# Matemática — Funciones trigonométricas: seno y coseno con radianes (cuestionario, 26 preguntas VBLang)

> Tema: `TRIG1`. Ver `teoria.md` en esta misma carpeta. Usa la constante
> `pi`.

---

### 1 — Qué es un radián

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["radianes", "vocabulario"]

enunciado: "¿Qué es un radián?"
tipo: mc
opciones_explicitas:
  - "El ángulo central de una circunferencia que abarca un arco de longitud igual al radio"
  - "Otro nombre para un grado sexagesimal"
  - "La centésima parte de una vuelta completa"
respuesta: "El ángulo central de una circunferencia que abarca un arco de longitud igual al radio"

explicacion: |
  Es una unidad de ángulo distinta del grado, útil para trabajar con
  funciones trigonométricas.
```

### 2 — Completar: 360° en radianes

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["radianes", "completar"]

tipo: completar
enunciado: "Completá: una vuelta completa, 360°, mide exactamente ___ radianes (en términos de π)."
respuestas_validas:
  - "2π"
  - "2pi"

explicacion: |
  Es la equivalencia base de la que salen todas las demás conversiones.
```

### 3 — Completar: 180° en radianes

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["radianes", "completar"]

tipo: completar
enunciado: "Completá: 180° mide exactamente ___ radianes (en términos de π)."
respuestas_validas:
  - "π"
  - "pi"

explicacion: |
  Es la mitad de una vuelta completa (2π).
```

### 4 — Problema: convertir grados a radianes

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["radianes", "problema"]

variables:
  grados: uno_de([30, 45, 60, 90, 120, 180, 270, 360])

respuesta: redondear(grados * pi / 180, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuántos radianes son {grados}°? Redondeá a 2 decimales."

pasos:
  - "{grados} × (π ÷ 180) = {redondear(grados * pi / 180, 2)}"

explicacion: |
  Se multiplica por π/180 para pasar de grados a radianes.
```

### 5 — Problema: convertir radianes a grados

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["radianes", "problema"]

variables:
  fraccion: uno_de([2, 3, 4, 6])
  radianes_valor: pi / fraccion

respuesta: redondear(radianes_valor * 180 / pi, 0)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un ángulo mide π/{fraccion} radianes. ¿Cuántos grados es eso?"

pasos:
  - "(π ÷ {fraccion}) × (180 ÷ π) = {redondear(radianes_valor * 180 / pi, 0)}°"

explicacion: |
  Se multiplica por 180/π para pasar de radianes a grados.
```

### 6 — El círculo unitario tiene radio 1

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["circulo_unitario"]

respuesta: verdadero
tipo: vf

enunciado: "El círculo unitario, usado para definir seno y coseno de cualquier ángulo, tiene radio exactamente 1."

explicacion: |
  Por eso las coordenadas de cualquier punto sobre él quedan siempre
  entre −1 y 1.
```

### 7 — Coordenadas de un punto en el círculo unitario

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["circulo_unitario", "vocabulario"]

enunciado: "En el círculo unitario, ¿cuáles son las coordenadas del punto que corresponde a un ángulo θ?"
tipo: mc
opciones_explicitas:
  - "(cos θ, sen θ)"
  - "(sen θ, cos θ)"
  - "(θ, θ)"
respuesta: "(cos θ, sen θ)"

explicacion: |
  La abscisa es el coseno, la ordenada es el seno de ese ángulo.
```

### 8 — El coseno es negativo en el segundo cuadrante

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "avanzado"
  tags: ["circulo_unitario"]

respuesta: verdadero
tipo: vf

enunciado: "Para un ángulo entre 90° y 180° (segundo cuadrante), el coseno de ese ángulo es negativo."

explicacion: |
  En el segundo cuadrante, la abscisa (el coseno) del punto sobre el
  círculo unitario es negativa; la ordenada (el seno) sigue siendo
  positiva.
```

### 9 — Seno y coseno son ambos negativos en el tercer cuadrante

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "avanzado"
  tags: ["circulo_unitario"]

respuesta: verdadero
tipo: vf

enunciado: "Para un ángulo entre 180° y 270° (tercer cuadrante), tanto el seno como el coseno de ese ángulo son negativos."

explicacion: |
  En el tercer cuadrante, tanto la abscisa como la ordenada del punto
  sobre el círculo unitario son negativas.
```

### 10 — Qué es la periodicidad de seno y coseno

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["periodicidad", "vocabulario"]

enunciado: "¿Qué significa que seno y coseno sean funciones periódicas?"
tipo: mc
opciones_explicitas:
  - "Que sus valores se repiten exactamente cada 2π radianes (una vuelta completa)"
  - "Que sus valores nunca se repiten"
  - "Que sólo están definidas para ángulos entre 0° y 90°"
respuesta: "Que sus valores se repiten exactamente cada 2π radianes (una vuelta completa)"

explicacion: |
  Girar una vuelta de más da exactamente el mismo punto en el círculo
  unitario.
```

### 11 — Completar: periodicidad del seno

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["periodicidad", "completar"]

tipo: completar
enunciado: "Completá: sen(θ + 2π) = ___."
respuestas_validas:
  - "sen(θ)"
  - "sen θ"

explicacion: |
  Sumar una vuelta completa no cambia el valor del seno.
```

### 12 — Problema: aplicar la periodicidad

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["periodicidad", "problema"]

variables:
  seno_conocido: uno_de([0.5, 0.6, 0.8, 0.71])

respuesta: seno_conocido
tipo: input
tolerancia_abs: 0.01

enunciado: "Se sabe que sen(θ) = {seno_conocido}. ¿Cuánto vale sen(θ + 2π)?"

explicacion: |
  Al ser periódica con período 2π, da exactamente el mismo valor.
```

### 13 — Qué es la amplitud de seno y coseno

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["amplitud", "vocabulario"]

enunciado: "¿Cuál es el rango de valores posibles (la amplitud) de sen(θ) y cos(θ), para cualquier ángulo θ?"
tipo: mc
opciones_explicitas:
  - "Entre −1 y 1"
  - "Entre 0 y 360"
  - "Sin límite, pueden dar cualquier número"
respuesta: "Entre −1 y 1"

explicacion: |
  Es consecuencia directa de que el círculo unitario tiene radio 1.
```

### 14 — sen(θ) no puede valer 2

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["amplitud"]

respuesta: verdadero
tipo: vf

enunciado: "No existe ningún ángulo θ para el cual sen(θ) = 2."

explicacion: |
  El seno está siempre acotado entre −1 y 1; 2 queda fuera de ese rango.
```

### 15 — El gráfico de sen(θ) es una onda que se repite

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de y = sen(θ) tiene forma de onda, subiendo y bajando entre −1 y 1, repitiéndose cada 2π."

explicacion: |
  Es la misma forma de onda (sinusoide) que aparece en sonido y luz.
```

### 16 — Completar: coseno de 0°

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["valores_notables", "completar"]

tipo: completar
enunciado: "Completá: cos(0°) = ___."
respuestas_validas:
  - "1"

explicacion: |
  En el círculo unitario, el ángulo 0° corresponde al punto (1, 0).
```

### 17 — Completar: seno de 0°

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["valores_notables", "completar"]

tipo: completar
enunciado: "Completá: sen(0°) = ___."
respuestas_validas:
  - "0"

explicacion: |
  En el círculo unitario, el ángulo 0° corresponde al punto (1, 0).
```

### 18 — Completar: seno de 90°

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["valores_notables", "completar"]

tipo: completar
enunciado: "Completá: sen(90°) = ___."
respuestas_validas:
  - "1"

explicacion: |
  En el círculo unitario, el ángulo 90° corresponde al punto (0, 1).
```

### 19 — Completar: coseno de 90°

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["valores_notables", "completar"]

tipo: completar
enunciado: "Completá: cos(90°) = ___."
respuestas_validas:
  - "0"

explicacion: |
  En el círculo unitario, el ángulo 90° corresponde al punto (0, 1).
```

### 20 — Problema: cuántas vueltas completas

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["periodicidad", "problema"]

variables:
  vueltas: random(2, 8)

respuesta: vueltas
tipo: input
tolerancia_abs: 0

enunciado: "Un ángulo mide {vueltas * 360}°. ¿A cuántas vueltas completas equivale?"

pasos:
  - "{vueltas * 360} ÷ 360 = {vueltas}"

explicacion: |
  Cada 360° es una vuelta completa, después de la cual sen y cos vuelven
  a repetirse.
```

### 21 — Ordenar: pasos para convertir grados a radianes

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["radianes", "ordenar"]

enunciado: "Ordená los pasos para convertir una medida en grados a radianes."
tipo: ordenar
opciones_explicitas:
  - "El resultado queda expresado en radianes"
  - "Tomar la medida en grados"
  - "Multiplicarla por π/180"
respuesta_orden: ["Tomar la medida en grados", "Multiplicarla por π/180", "El resultado queda expresado en radianes"]
explicacion: |
  π/180 es el factor de conversión de grados a radianes.
```

### 22 — Por qué ahora se puede hablar de sen(120°) o sen(-30°)

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "avanzado"
  tags: ["circulo_unitario", "vocabulario"]

enunciado: "¿Por qué ahora tiene sentido hablar de sen(120°) o sen(-30°), ángulos que no caben en un triángulo rectángulo?"
tipo: mc
opciones_explicitas:
  - "Porque el círculo unitario define seno y coseno para cualquier ángulo, no sólo para los agudos de un triángulo"
  - "Porque esos valores en realidad no existen"
  - "Porque se usa una fórmula completamente distinta para ángulos obtusos"
respuesta: "Porque el círculo unitario define seno y coseno para cualquier ángulo, no sólo para los agudos de un triángulo"

explicacion: |
  Es la extensión central de este módulo respecto de
  `../razones-trigonometricas/`.
```

### 23 — Un radián es más grande que un grado

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["radianes"]

respuesta: verdadero
tipo: vf

enunciado: "Un radián es un ángulo más grande que un grado sexagesimal."

explicacion: |
  Como una vuelta completa son sólo ≈6,28 radianes (2π) pero 360 grados,
  cada radián individual es bastante más grande que cada grado.
```

### 24 — Problema: cuántos grados es 1 radián

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "avanzado"
  tags: ["radianes", "problema"]

respuesta: redondear(180 / pi, 1)
tipo: input
tolerancia_abs: 0.1

enunciado: "Aproximadamente, ¿cuántos grados es 1 radián? Redondeá a 1 decimal."

pasos:
  - "180 ÷ π ≈ {redondear(180 / pi, 1)}°"

explicacion: |
  Es un valor aproximado que conviene recordar: un radián es bastante
  menos que un ángulo recto.
```

### 25 — Las razones de un triángulo son un caso particular

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "avanzado"
  tags: ["circulo_unitario"]

respuesta: verdadero
tipo: vf

enunciado: "Las razones trigonométricas de un triángulo rectángulo (para ángulos entre 0° y 90°) son un caso particular de las funciones seno y coseno definidas sobre el círculo unitario."

explicacion: |
  Para ángulos agudos, ambas definiciones dan exactamente los mismos
  valores.
```

### 26 — Cierre: para qué sirven estas funciones

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve extender seno y coseno a funciones de cualquier ángulo, medido en radianes?"
tipo: mc
opciones_explicitas:
  - "Para describir cualquier movimiento circular o fenómeno periódico, no sólo triángulos puntuales"
  - "Sólo sirve para ángulos mayores a 360°"
  - "No tiene ninguna aplicación fuera de la matemática pura"
respuesta: "Para describir cualquier movimiento circular o fenómeno periódico, no sólo triángulos puntuales"

explicacion: |
  Desde una rueda que gira hasta una onda de sonido, todo fenómeno
  periódico se describe con esta misma idea.
```
