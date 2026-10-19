# Fisica — primera ley de la termodinamica (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Enunciado de la primera ley

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "basico"
  tags: ["concepto"]

enunciado: "La primera ley de la termodinámica afirma que..."
tipo: mc
opciones_explicitas:
  - "la energía no se crea ni se destruye, solo se transforma o transfiere"
  - "el calor fluye siempre de lo frío a lo caliente"
  - "la entropía de un sistema aislado nunca disminuye"
  - "la temperatura de un gas es proporcional a su volumen"
respuesta: "la energía no se crea ni se destruye, solo se transforma o transfiere"

explicacion: |
  Es la conservación de la energía incluyendo calor y trabajo.
```

### 2 — Ecuación

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "basico"
  tags: ["formula"]

enunciado: "Con la convención en que W es el trabajo realizado por el sistema, la primera ley se escribe ΔU = Q − ___."
tipo: completar
respuestas_validas:
  - "W"

explicacion: |
  La variación de energía interna es el calor recibido menos el trabajo entregado.
```

### 3 — Función de estado

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["concepto"]

enunciado: "¿Cuál de estas magnitudes es una función de estado?"
tipo: mc
opciones_explicitas:
  - "la energía interna"
  - "el calor"
  - "el trabajo"
  - "el calor y el trabajo por igual"
respuesta: "la energía interna"

explicacion: |
  Calor y trabajo dependen del proceso; la energía interna solo del estado.
```

### 4 — Calor y trabajo

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["concepto"]

enunciado: "El calor y el trabajo son funciones de estado de un sistema."
tipo: vf
respuesta: falso

explicacion: |
  Son formas de transferir energía y su valor depende del camino del proceso.
```

### 5 — Signo del calor

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "basico"
  tags: ["signos"]

enunciado: "Si un sistema cede calor al entorno, en la convención ΔU = Q − W el calor Q es..."
tipo: mc
opciones_explicitas:
  - "negativo"
  - "positivo"
  - "cero"
  - "igual al trabajo"
respuesta: "negativo"

explicacion: |
  Q es positivo solo cuando el sistema recibe calor.
```

### 6 — Signo del trabajo

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "basico"
  tags: ["signos"]

enunciado: "Cuando un gas se expande empujando un pistón, el trabajo W realizado por el sistema es..."
tipo: mc
opciones_explicitas:
  - "positivo"
  - "negativo"
  - "cero"
  - "igual a la energía interna"
respuesta: "positivo"

explicacion: |
  El sistema entrega energía al entorno.
```

### 7 — Proceso isocórico

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["procesos"]

enunciado: "En un proceso isocórico de un gas (volumen constante), el trabajo realizado es..."
tipo: mc
opciones_explicitas:
  - "cero"
  - "igual al calor"
  - "igual a p·ΔV con ΔV positivo"
  - "siempre negativo"
respuesta: "cero"

explicacion: |
  Sin cambio de volumen el gas no desplaza ningún pistón: W = 0 y ΔU = Q.
```

### 8 — Proceso isotérmico

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["procesos"]

enunciado: "En un proceso isotérmico de un gas ideal, la variación de energía interna es..."
tipo: mc
opciones_explicitas:
  - "cero"
  - "igual a Q"
  - "igual a −W"
  - "mayor que cero"
respuesta: "cero"

explicacion: |
  La energía interna del gas ideal depende solo de la temperatura, que no cambia: Q = W.
```

### 9 — Proceso adiabático

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["procesos"]

enunciado: "En un proceso adiabático el calor intercambiado vale..."
tipo: mc
opciones_explicitas:
  - "cero"
  - "el trabajo realizado"
  - "la variación de energía interna"
  - "la temperatura final"
respuesta: "cero"

explicacion: |
  Q = 0, por lo tanto ΔU = −W.
```

### 10 — Expansión adiabática

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "avanzado"
  tags: ["procesos"]

enunciado: "Un gas ideal se expande adiabáticamente. Su temperatura..."
tipo: mc
opciones_explicitas:
  - "disminuye"
  - "aumenta"
  - "no cambia"
  - "depende del recipiente exclusivamente"
respuesta: "disminuye"

explicacion: |
  El gas realiza trabajo a costa de su energía interna, sin recibir calor.
```

### 11 — Bomba de bicicleta

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "avanzado"
  tags: ["aplicaciones"]

enunciado: "Al inflar rápidamente un neumático, el aire de la bomba se calienta principalmente porque..."
tipo: mc
opciones_explicitas:
  - "se comprime casi sin intercambiar calor, y el trabajo recibido aumenta su energía interna"
  - "recibe calor del ambiente"
  - "el gas se expande"
  - "se enfría el pistón"
respuesta: "se comprime casi sin intercambiar calor, y el trabajo recibido aumenta su energía interna"

explicacion: |
  Es una compresión aproximadamente adiabática: W < 0 y ΔU > 0.
```

### 12 — Ciclo completo

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["ciclos"]

enunciado: "Después de un ciclo completo, la variación de energía interna del sistema es cero."
tipo: vf
respuesta: verdadero

explicacion: |
  El sistema vuelve al estado inicial y U es función de estado.
```

### 13 — Móvil perpetuo

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["historia"]

enunciado: "La primera ley descarta la existencia de una máquina que..."
tipo: mc
opciones_explicitas:
  - "entregue más energía que la que recibe"
  - "transforme calor en trabajo con rendimiento menor a 100 %"
  - "funcione con dos focos de temperatura"
  - "use un gas como fluido de trabajo"
respuesta: "entregue más energía que la que recibe"

explicacion: |
  Es el móvil perpetuo de primera especie.
```

### 14 — Experimento de Joule

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["historia"]

enunciado: "¿Qué mostró el experimento de las paletas de Joule en el agua?"
tipo: mc
opciones_explicitas:
  - "que el trabajo mecánico se puede convertir en calor en una proporción fija"
  - "que el calor es un fluido llamado calórico"
  - "que el agua se comprime con facilidad"
  - "que el calor viaja por radiación"
respuesta: "que el trabajo mecánico se puede convertir en calor en una proporción fija"

explicacion: |
  Estableció la equivalencia entre trabajo y calor como formas de energía.
```

### 15 — Variación de energía interna

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "basico"
  tags: ["calculo"]

variables:
  q: uno_de([300, 500, 800, 1000])
  w: uno_de([100, 200, 250])

enunciado: "Un gas recibe {q} J de calor y realiza {w} J de trabajo sobre el entorno. ¿Cuánto vale su variación de energía interna? (en J)"
tipo: input
respuesta: q - w
tolerancia_abs: 0.5
unidad: "J"

explicacion: |
  ΔU = Q − W.
```

### 16 — Proceso isocórico numérico

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "basico"
  tags: ["calculo"]

variables:
  q: uno_de([200, 400, 600])

enunciado: "En un recipiente rígido un gas recibe {q} J de calor. ¿Cuánto vale ΔU? (en J)"
tipo: input
respuesta: q
tolerancia_abs: 0.5
unidad: "J"

explicacion: |
  Volumen constante: W = 0, entonces ΔU = Q.
```

### 17 — Trabajo isobárico

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  p: uno_de([100, 200, 300])
  dv: uno_de([1, 2, 3])

enunciado: "Un gas se expande a presión constante de {p} kPa y su volumen aumenta {dv} L. ¿Qué trabajo realiza? (en J; recordá que 1 kPa·L = 1 J)"
tipo: input
respuesta: p * dv
tolerancia_abs: 0.5
unidad: "J"

explicacion: |
  W = p·ΔV; el producto kPa·L da joules.
```

### 18 — Expansión adiabática numérica

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  w: uno_de([150, 300, 450])

enunciado: "Un gas se expande adiabáticamente y realiza {w} J de trabajo. ¿Cuánto vale su ΔU? (en J, con signo)"
tipo: input
respuesta: 0 - w
tolerancia_abs: 0.5
unidad: "J"

explicacion: |
  Q = 0, entonces ΔU = −W: disminuye.
```

### 19 — Trabajo neto de un ciclo

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  qin: uno_de([800, 1000, 1200])
  qout: uno_de([500, 600])

enunciado: "Una máquina térmica recibe {qin} J de calor y cede {qout} J por ciclo. ¿Cuál es el trabajo neto por ciclo? (en J)"
tipo: input
respuesta: qin - qout
tolerancia_abs: 0.5
unidad: "J"

explicacion: |
  En un ciclo ΔU = 0, así que W = Q_recibido − Q_cedido.
```

### 20 — Energía interna de un gas ideal

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  n: uno_de([1, 2, 3])
  dt: uno_de([10, 20, 50])

enunciado: "Se calientan {n} mol de un gas ideal monoatómico en {dt} K. ¿Cuánto aumenta su energía interna? Usá R = 8,314 J/(mol·K). (en J, redondeá a un decimal)"
tipo: input
respuesta: redondear(1.5 * n * 8.314 * dt, 1)
tolerancia_abs: 0.5
unidad: "J"

explicacion: |
  ΔU = (3/2)·n·R·ΔT.
```

### 21 — Calor cedido

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  w: uno_de([200, 300])
  du: uno_de([100, 150])

enunciado: "Sobre un gas se realiza un trabajo de compresión de {w} J (es decir, W = −{w} J) y su energía interna aumenta {du} J. ¿Cuánto calor Q intercambia? (en J, con signo)"
tipo: input
respuesta: du + 0 - w
tolerancia_abs: 0.5
unidad: "J"

explicacion: |
  ΔU = Q − W con W = −w: Q = ΔU + W = du − w. Un resultado negativo significa que el gas cede calor.
```

### 22 — Convención alternativa

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "avanzado"
  tags: ["signos"]

enunciado: "Algunos textos de química escriben ΔU = Q + W. En esa convención, W representa..."
tipo: mc
opciones_explicitas:
  - "el trabajo realizado sobre el sistema"
  - "el trabajo realizado por el sistema"
  - "el calor cedido"
  - "la variación de volumen"
respuesta: "el trabajo realizado sobre el sistema"

explicacion: |
  Es la misma ley con el signo del trabajo invertido.
```

### 23 — Energía de un gas ideal

```
metadata:
  materia: "fisica"
  tema: "primera_ley_de_la_termodinamica"
  nivel: "avanzado"
  tags: ["concepto"]

enunciado: "En un gas ideal, la energía interna depende únicamente de la temperatura."
tipo: vf
respuesta: verdadero

explicacion: |
  No hay interacciones entre moléculas, así que no depende del volumen ni de la presión.
```
