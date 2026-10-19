# Automatizacion — Seguridad funcional y paradas de emergencia (cuestionario, 23 preguntas VBLang)

> Tema: `automatizacion/seguridad-funcional-y-paradas-de-emergencia`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Pregunta

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

### 2 — ¿Cómo es el pulsador de parada de emergencia

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

### 3 — Al liberar la parada de emergencia, la máquina...

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

### 4 — Pregunta

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

### 5 — La parada categoría 0 consiste en...

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

### 6 — La parada categoría 1 consiste en...

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

### 7 — La parada categoría 2 consiste en...

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

### 8 — Pregunta

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

### 9 — Una cortina de luz sirve para...

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

### 10 — Pregunta

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

### 11 — La redundancia en un circuito de seguridad significa...

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

### 12 — Pregunta

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

### 13 — ¿Qué se usa para determinar el nivel de seguridad exigido

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

### 14 — Pregunta

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

### 15 — Pregunta

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

### 16 — Pregunta

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

### 17 — Pregunta

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

### 18 — Pregunta

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

### 19 — Pregunta

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

### 20 — Pregunta

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

### 21 — Cálculo

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

### 22 — Cálculo

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

### 23 — Cálculo

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
