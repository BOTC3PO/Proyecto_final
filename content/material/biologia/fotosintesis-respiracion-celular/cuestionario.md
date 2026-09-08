# Biología — Fotosíntesis y respiración celular (cuestionario, 24 preguntas VBLang)

> Tema: `BF`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Localización de la fotosíntesis

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["cloroplasto"]

respuesta: verdadero
tipo: vf

enunciado: "La fotosíntesis ocurre en el cloroplasto."

explicacion: |
  Correcto, gracias a la clorofila que contiene.
```

### 2 — Transformación de energía

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["energia", "glucosa"]

respuesta: verdadero
tipo: vf

enunciado: "La fotosíntesis convierte energía luminosa en energía química almacenada en glucosa."

explicacion: |
  Correcto, captura la energía de la luz en moléculas orgánicas.
```

### 3 — Clasificación de organismos

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["autotrofos"]

respuesta: "autótrofos"
tipo: mc
opciones_explicitas: ["autótrofos", "heterótrofos", "consumidores", "descomponedores"]

enunciado: "Los organismos que fabrican su propio alimento se llaman..."

explicacion: |
  Autótrofos, como las plantas.
```

### 4 — Capacidad fotosintética

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["seres_vivos"]

respuesta: falso
tipo: vf

enunciado: "Todos los seres vivos, incluidos los animales, pueden hacer fotosíntesis."

explicacion: |
  Falso, sólo plantas, algas y algunas bacterias con clorofila.
```

### 5 — Productos de la fotosíntesis

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["reaccion", "oxigeno"]

respuesta: "oxigeno"
tipo: completar
respuestas_validas:
  - "oxigeno"
  - "oxígeno"

enunciado: "La fotosíntesis usa CO2, agua y luz para producir glucosa y ___."

explicacion: |
  Se libera oxígeno como subproducto.
```

### 6 — Localización de la respiración celular

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["mitocondria"]

respuesta: verdadero
tipo: vf

enunciado: "La respiración celular ocurre principalmente en la mitocondria."

explicacion: |
  Correcto, es la central energética de la célula.
```

### 7 — Función de la respiración celular

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["energia", "glucosa"]

respuesta: verdadero
tipo: vf

enunciado: "La respiración celular libera la energía química guardada en la glucosa."

explicacion: |
  Correcto, extrae la energía y la convierte en ATP.
```

### 8 — Organismos que respiran

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["organismos"]

respuesta: falso
tipo: vf

enunciado: "La respiración celular ocurre sólo en los animales, no en las plantas."

explicacion: |
  Falso, las plantas también respiran (y también fotosintetizan).
```

### 9 — Productos de la respiración celular

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["atp"]

respuesta: "ATP"
tipo: completar
respuestas_validas:
  - "ATP"
  - "energia"

enunciado: "La respiración celular usa glucosa y oxígeno para producir CO2, agua y ___."

explicacion: |
  El ATP es la molécula que transporta esa energía.
```

### 10 — Relación de las ecuaciones químicas

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["bioquimica"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación de la respiración celular es la ecuación de la fotosíntesis pero en sentido inverso."

explicacion: |
  Correcto, lo que una produce, la otra lo consume.
```

### 11 — Sustancias involucradas

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["sustancias"]

respuesta: verdadero
tipo: vf

enunciado: "Los productos de la fotosíntesis (glucosa y oxígeno) son los reactivos que se consumen en la respiración celular."

explicacion: |
  Correcto, hay un ciclo entre ambos procesos.
```

### 12 — Organelas y procesos

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "intermedio"
  tags: ["organelas"]

variables:
  datos: [["cloroplasto", "fotosintesis"], ["mitocondria", "respiracion celular"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["fotosintesis", "respiracion celular"]

enunciado: "¿Qué proceso ocurre principalmente en el {datos[idx][0]}?"

explicacion: |
  En el {datos[idx][0]}: {datos[idx][1]}.
```

### 13 — Distribución de procesos en seres vivos

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "intermedio"
  tags: ["clasificacion"]

respuesta: falso
tipo: vf

enunciado: "La fotosíntesis la realizan casi todos los seres vivos, mientras que la respiración celular es exclusiva de los autótrofos."

explicacion: |
  Falso, es al revés: respiración casi todos, fotosíntesis sólo autótrofos.
```

### 14 — Fotosíntesis y respiración en plantas

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["plantas"]

respuesta: falso
tipo: vf

enunciado: "Las plantas sólo realizan fotosíntesis y nunca respiración celular."

explicacion: |
  Falso, hacen ambos procesos.
```

### 15 — Procesos simultáneos durante el día

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["dia"]

respuesta: verdadero
tipo: vf

enunciado: "Durante el día, con luz, las plantas hacen fotosíntesis y respiración celular al mismo tiempo."

explicacion: |
  Correcto, la respiración es continua, ocurra o no la fotosíntesis.
```

### 16 — Procesos durante la noche

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["noche"]

respuesta: verdadero
tipo: vf

enunciado: "Durante la noche, sin luz, las plantas sólo respiran."

explicacion: |
  Correcto, sin luz no hay fotosíntesis.
```

### 17 — Balance de oxígeno

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "intermedio"
  tags: ["oxigeno"]

respuesta: verdadero
tipo: vf

enunciado: "Durante el día, las plantas normalmente producen más oxígeno del que consumen, liberando oxígeno neto."

explicacion: |
  Correcto, la tasa de fotosíntesis suele superar a la de respiración con luz.
```

### 18 — Entrada de energía solar

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["ecosistemas"]

respuesta: verdadero
tipo: vf

enunciado: "La fotosíntesis es el punto de entrada de la energía solar a casi todos los ecosistemas."

explicacion: |
  Correcto — ver ../flujo-materia-energia/.
```

### 19 — Importancia de los autótrofos

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["autotrofos"]

respuesta: verdadero
tipo: vf

enunciado: "Sin autótrofos capturando energía solar en forma de glucosa, no habría alimento para el resto de la cadena trófica."

explicacion: |
  Correcto, son la base de las cadenas alimenticias.
```

### 20 — Relación energía-fotosíntesis

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "intermedio"
  tags: ["flujo_energia"]

respuesta: falso
tipo: vf

enunciado: "La energía que fluye por un ecosistema no tiene relación con la fotosíntesis."

explicacion: |
  Falso, la fotosíntesis es la puerta de entrada de esa energía.
```

### 21 — Proporción de oxígeno en la fotosíntesis

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "intermedio"
  tags: ["estequiometria"]

variables:
  co2_consumido: uno_de([6, 12, 18])

respuesta: co2_consumido
tipo: completar
tolerancia_abs: 0.01

enunciado: "En la fotosíntesis, la proporción CO2 consumido : O2 producido es 1:1. Si se consumen {co2_consumido} moléculas de CO2, ¿cuántas de O2 se producen?"

explicacion: |
  Con relación 1:1, se producen {co2_consumido} moléculas de O2.
```

### 22 — Ecuación de la fotosíntesis

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["ecuacion"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación balanceada de la fotosíntesis usa 6 CO2 y 6 H2O para producir 1 glucosa y 6 O2."

explicacion: |
  Correcto: 6CO2 + 6H2O + luz → C6H12O6 + 6O2.
```

### 23 — Fórmula de la glucosa

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["glucosa"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula molecular de la glucosa es C6H12O6."

explicacion: |
  Correcto, es un monosacárido con esa fórmula.
```

### 24 — Gases en los ciclos biológicos

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "intermedio"
  tags: ["gases", "ciclos"]

respuesta: "CO2"
tipo: mc
opciones_explicitas: ["CO2", "O2", "Ambos son reactivos en ambos procesos", "Ninguno"]

enunciado: "¿Qué gas es reactivo en la fotosíntesis y producto en la respiración celular?"

explicacion: |
  El CO2 se fija en la fotosíntesis y se libera en la respiración.
```
