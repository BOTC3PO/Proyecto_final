# Dibujo técnico — Tolerancias y ajustes (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Tolerancia

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La tolerancia es..."
tipo: mc
opciones_explicitas:
  - "La variación admisible de una medida"
  - "El error de la máquina"
  - "El nombre de la pieza"
respuesta: "La variación admisible de una medida"

explicacion: |
  Define el intervalo aceptable.
```

### 2 — Tolerancia desviaciones

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

variables:
  nom: random(10, 80)
  sup: uno_de([0.02, 0.03, 0.05])
  inf: uno_de([0.01, 0.02, 0.04])

respuesta: redondear(sup + inf, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una cota es {nom} con desviación superior +{sup} e inferior −{inf} mm. ¿Cuál es la tolerancia, en mm?"

pasos:
  - "Tolerancia = desviación superior − desviación inferior"
  - "Con inferior negativa, se suman los valores"

explicacion: |
  Es el ancho del intervalo admisible.
```

### 3 — Medida máxima

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

variables:
  nom: random(10, 80)
  sup: uno_de([0.02, 0.03, 0.05])

respuesta: redondear(nom + sup, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una cota {nom} +{sup} / −0,01 mm. ¿Cuál es la medida máxima admisible, en mm?"

pasos:
  - "Máxima = nominal + desviación superior"

explicacion: |
  La pieza mayor que ese valor se rechaza.
```

### 4 — Medida mínima

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

variables:
  nom: random(10, 80)
  inf: uno_de([0.01, 0.02, 0.04])

respuesta: redondear(nom - inf, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una cota {nom} +0,02 / −{inf} mm. ¿Cuál es la medida mínima admisible, en mm?"

pasos:
  - "Mínima = nominal − |desviación inferior|"

explicacion: |
  La pieza menor que ese valor se rechaza.
```

### 5 — Simétrica

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "intermedio"
  tags: ["dibujo"]

variables:
  nom: random(10, 80)
  tol: uno_de([0.02, 0.05, 0.1])

respuesta: redondear(2 * tol, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una cota se especifica como {nom} ± {tol} mm. ¿Cuál es la tolerancia total, en mm?"

pasos:
  - "Tolerancia total = 2 × tolerancia simétrica"

explicacion: |
  El intervalo va de nom − tol a nom + tol.
```

### 6 — Costo

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Cuanto más chica la tolerancia..."
tipo: mc
opciones_explicitas:
  - "Más cara y precisa debe ser la fabricación"
  - "Más barata"
  - "Igual de cara"
respuesta: "Más cara y precisa debe ser la fabricación"

explicacion: |
  Por eso se especifica la más grande que funcione.
```

### 7 — Más chica siempre

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "intermedio"
  tags: ["dibujo"]

respuesta: falso
tipo: vf

enunciado: "Conviene especificar siempre la tolerancia más chica posible."

explicacion: |
  Aumenta el costo sin necesidad.
```

### 8 — Ajuste con juego

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "En un ajuste con juego el eje siempre es..."
tipo: mc
opciones_explicitas:
  - "Menor que el agujero"
  - "Mayor que el agujero"
  - "Igual al agujero"
respuesta: "Menor que el agujero"

explicacion: |
  Permite movimiento.
```

### 9 — Interferencia

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "En un ajuste con interferencia el eje siempre es..."
tipo: mc
opciones_explicitas:
  - "Mayor que el agujero"
  - "Menor que el agujero"
  - "Igual al agujero"
respuesta: "Mayor que el agujero"

explicacion: |
  Se monta a presión o con calor.
```

### 10 — Transición

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "El ajuste indeterminado (de transición) puede dar..."
tipo: mc
opciones_explicitas:
  - "Un pequeño juego o un pequeño aprieto"
  - "Solo juego"
  - "Ninguna unión"
respuesta: "Un pequeño juego o un pequeño aprieto"

explicacion: |
  Se usa para ubicar con precisión piezas desmontables.
```

### 11 — Ejemplo juego

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Un eje que gira en un buje requiere un ajuste..."
tipo: mc
opciones_explicitas:
  - "Con juego"
  - "Con interferencia"
  - "Soldado"
respuesta: "Con juego"

explicacion: |
  Para que pueda girar.
```

### 12 — Ejemplo aprieto

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Una rueda calada a un eje requiere un ajuste..."
tipo: mc
opciones_explicitas:
  - "Con interferencia"
  - "Con juego"
  - "Indeterminado siempre"
respuesta: "Con interferencia"

explicacion: |
  Para quedar fija.
```

### 13 — Juego máximo

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "avanzado"
  tags: ["dibujo"]

variables:
  Amax: uno_de([25.021, 30.021, 40.025])
  emin: uno_de([24.980, 29.980, 39.975])

respuesta: redondear(Amax - emin, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "Un agujero admite como máximo {Amax} mm y el eje como mínimo {emin} mm. ¿Cuál es el juego máximo, en mm?"

pasos:
  - "Juego máximo = agujero máximo − eje mínimo"

explicacion: |
  Es la mayor holgura posible.
```

### 14 — Juego mínimo

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "avanzado"
  tags: ["dibujo"]

variables:
  Amin: uno_de([25.000, 30.000, 40.000])
  emax: uno_de([24.993, 29.993, 39.991])

respuesta: redondear(Amin - emax, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "Un agujero admite como mínimo {Amin} mm y el eje como máximo {emax} mm. ¿Cuál es el juego mínimo, en mm?"

pasos:
  - "Juego mínimo = agujero mínimo − eje máximo"

explicacion: |
  Es la menor holgura posible.
```

### 15 — Juego negativo

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Si el juego mínimo es negativo, hay..."
tipo: mc
opciones_explicitas:
  - "Interferencia en alguna combinación"
  - "Siempre holgura"
  - "Un error de dibujo"
respuesta: "Interferencia en alguna combinación"

explicacion: |
  El eje puede ser mayor que el agujero.
```

### 16 — ISO 286

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "La norma ISO 286 organiza las tolerancias con..."
tipo: mc
opciones_explicitas:
  - "Un código de letra y número"
  - "Colores"
  - "Solo números"
respuesta: "Un código de letra y número"

explicacion: |
  Por ejemplo H7.
```

### 17 — Número IT

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "En el código ISO, el número indica..."
tipo: mc
opciones_explicitas:
  - "El ancho de la zona de tolerancia"
  - "La posición de la zona"
  - "El material"
respuesta: "El ancho de la zona de tolerancia"

explicacion: |
  A menor número, más precisión.
```

### 18 — Letra

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "En el código ISO, la letra indica..."
tipo: mc
opciones_explicitas:
  - "La posición de la zona respecto de la medida nominal"
  - "El ancho de la zona"
  - "El color"
respuesta: "La posición de la zona respecto de la medida nominal"

explicacion: |
  Mayúscula para agujeros, minúscula para ejes.
```

### 19 — Mayúsculas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

enunciado: "Las letras mayúsculas (H, G, P) se usan para..."
tipo: mc
opciones_explicitas:
  - "Agujeros"
  - "Ejes"
  - "Tornillos"
respuesta: "Agujeros"

explicacion: |
  Las minúsculas, para ejes.
```

### 20 — Agujero base

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "En el sistema de agujero base..."
tipo: mc
opciones_explicitas:
  - "El agujero se mantiene H y se varía el eje"
  - "Se varía el agujero"
  - "Se varía el material"
respuesta: "El agujero se mantiene H y se varía el eje"

explicacion: |
  Permite lograr distintos ajustes.
```

### 21 — H7/g6

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "avanzado"
  tags: ["dibujo"]

enunciado: "Según la bibliografía técnica, un ajuste H7/g6 es..."
tipo: mc
opciones_explicitas:
  - "Con juego (deslizante)"
  - "Con fuerte interferencia"
  - "Soldado"
respuesta: "Con juego (deslizante)"

explicacion: |
  H7/p6, en cambio, es con interferencia.
```

### 22 — Geométricas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "intermedio"
  tags: ["dibujo"]

enunciado: "Una tolerancia geométrica controla, por ejemplo..."
tipo: mc
opciones_explicitas:
  - "La forma o la posición, como la redondez"
  - "Solo el color"
  - "El peso"
respuesta: "La forma o la posición, como la redondez"

explicacion: |
  Un eje puede tener el diámetro correcto y estar ovalado.
```

### 23 — Rechazo

```
metadata:
  materia: "dibujo-tecnico"
  tema: "tolerancias_y_ajustes"
  nivel: "basico"
  tags: ["dibujo"]

tipo: completar
enunciado: "Una pieza fuera de las medidas ___ se rechaza o se reprocesa."
respuestas_validas:
  - "límite"

explicacion: |
  Máxima y mínima.
```
