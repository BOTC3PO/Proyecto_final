# Fisica — Resistencia electrica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de resistencia

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["definicion", "concepto"]

respuesta: "oposicion"
tipo: completar
respuestas_validas:
  - "oposicion"
  - "oposición"

enunciado: "La resistencia eléctrica se define como la ___ al flujo de carga eléctrica a través de un conductor."

explicacion: |
  La resistencia es la propiedad de un material que se opone al paso de la corriente eléctrica.
```

### 2 — Unidad de medida

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["unidades"]

respuesta: "ohm"
tipo: mc
opciones_explicitas: ["voltio", "ohm", "amperio", "vatio"]

enunciado: "¿Cuál es la unidad de medida de la resistencia eléctrica en el Sistema Internacional?"

explicacion: |
  La unidad de medida de la resistencia es el ohm (Ω).
```

### 3 — Símbolo de la unidad

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["simbolos"]

respuesta: "Ω"
tipo: mc
opciones_explicitas: ["Ω", "V", "A", "W"]

enunciado: "¿Qué símbolo se utiliza para representar el ohm?"

explicacion: |
  El símbolo del ohm es la letra griega omega mayúscula (Ω).
```

### 4 — Factor material

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["materiales"]

respuesta: "conductor"
tipo: mc
opciones_explicitas: ["aislante", "conductor", "dieléctrico", "semiconductor"]

enunciado: "Un material que presenta una resistencia muy baja al paso de la corriente se denomina material ___."

explicacion: |
  Los conductores (como el cobre) tienen baja resistencia, mientras que los aislantes tienen una resistencia muy alta.
```

### 5 — Relación con la corriente

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf
enunciado: "Si la resistencia de un circuito aumenta (manteniendo el voltaje constante), la intensidad de la corriente disminuirá."

explicacion: |
  Según la Ley de Ohm, la corriente es inversamente proporcional a la resistencia.
```

### 6 — Dependencia de la longitud

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["formula", "geometria"]

respuesta: "el doble"
tipo: mc
opciones_explicitas: ["el doble", "el triple", "la mitad", "la cuarta parte"]

enunciado: "Si la longitud de un conductor se duplica, su resistencia será ___."

explicacion: |
  La resistencia es directamente proporcional a la longitud (R ∝ L).
```

### 7 — Dependencia de la sección

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["formula", "geometria"]

respuesta: "el doble"
tipo: mc
opciones_explicitas: ["la mitad", "la cuarta parte", "el doble", "el cuádruple"]

enunciado: "Si el área de la sección transversal de un cable se reduce a la mitad, su resistencia será ___."

explicacion: |
  La resistencia es inversamente proporcional al área de la sección (R ∝ 1/A). Si el área se reduce a la mitad, la resistencia se duplica.
```

### 8 — Cálculo de resistencia simple

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["calculo"]

respuesta: 4.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un conductor tiene un voltaje de 20V y una corriente de 5A. ¿Cuál es su resistencia en ohms?"

pasos:
  - "Identificar voltaje (V) e intensidad (I)."
  - "Aplicar la fórmula R = V / I."

explicacion: |
  R = 20V / 5A = 4 Ω.
```

### 9 — Resistividad

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["propiedades"]

respuesta: "material"
tipo: completar
respuestas_validas:
  - "material"
  - "naturaleza"

enunciado: "La resistividad es una propiedad intrínseca que depende del ___ del conductor."

explicacion: |
  La resistividad ($\rho$) depende de la naturaleza del material (cobre, plata, etc.) y de la temperatura.
```

### 10 — Resistencia y temperatura

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["temperatura"]

respuesta: verdadero
tipo: vf
enunciado: "En la mayoría de los metales, la resistencia eléctrica aumenta cuando aumenta la temperatura."

explicacion: |
  El aumento de temperatura incrementa la agitación térmica de los átomos, dificultando el paso de electrones.
```

### 11 — Error de concepto: Área vs Radio

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "avanzado"
  tags: ["error_comun"]

respuesta: verdadero
tipo: vf
enunciado: "Si el radio de un cable se duplica, su resistencia se reduce a la cuarta parte."

explicacion: |
  Como el área depende del cuadrado del radio ($A = \pi \cdot r^2$), duplicar el radio cuadruplica el área, reduciendo la resistencia a 1/4.
```

### 12 — Comparación de materiales

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "menor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual", "nula"]

enunciado: "Un cable de cobre tiene una resistencia ___ que un cable de hierro de la misma longitud y sección."

explicacion: |
  El cobre tiene una resistividad menor que el hierro, por lo tanto, ofrece menos resistencia.
```

### 13 — Relación R vs L

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["grafico"]

respuesta: "lineal"
tipo: mc
opciones_explicitas: ["lineal", "inversa", "cuadrática", "exponencial"]

enunciado: "Si graficamos la resistencia (R) frente a la longitud (L) de un cable uniforme, la relación es ___."

explicacion: |
  La relación es directamente proporcional ($R = \rho \cdot L / A$), lo que resulta en una línea recta que pasa por el origen.
```

### 14 — Error de unidad

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["unidades"]

respuesta: falso
tipo: vf
enunciado: "La unidad de la resistencia eléctrica es el Amperio."

explicacion: |
  El Amperio es la unidad de la intensidad de corriente eléctrica.
```

### 15 — Factor de sección transversal

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["geometria"]

respuesta: "inversa"
tipo: mc
opciones_explicitas: ["directa", "inversa", "nula", "logarítmica"]

enunciado: "La relación entre la resistencia y el área de la sección transversal es ___."

explicacion: |
  A mayor área, menor resistencia. Es una relación inversamente proporcional.
```

### 16 — Orden de factores de resistencia

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["ordenar"]

opciones_explicitas: ["Mayor longitud", "Menor sección", "Mayor resistividad"]
respuesta_orden: ["Mayor longitud", "Menor sección", "Mayor resistividad"]
tipo: ordenar

enunciado: "Ordena estas condiciones de mayor a menor resistencia eléctrica:"

explicacion: |
  Para maximizar la resistencia: aumentar longitud, disminuir sección y aumentar resistividad.
```

### 17 — Escenario de cableado

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: 50
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un cable tiene una resistencia de 100 $\\Omega$. Si se corta a la mitad de su longitud, su nueva resistencia será ___ $\\Omega$."

explicacion: |
  Al reducir la longitud a la mitad, la resistencia también se reduce a la mitad.
```

### 18 — Identificación de componentes

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf
enunciado: "La resistencia eléctrica es una propiedad que depende de la forma del objeto."

explicacion: |
  Sí, la resistencia depende de la geometría (longitud y sección).
```

### 19 — Resistencia y espesor

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["geometria"]

respuesta: verdadero
tipo: vf
enunciado: "Un cable más grueso (mayor sección) presenta menos resistencia que uno más delgado."

explicacion: |
  A mayor sección transversal, hay más espacio para que fluyan los electrones, disminuyendo la resistencia.
```

### 20 — Resumen de variables

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["resumen"]

respuesta: verdadero
tipo: vf
enunciado: "La resistencia eléctrica depende de la longitud, el área de sección y la resistividad del material."

explicacion: |
  Estas son las tres variables que componen la fórmula $R = \rho \cdot L / A$.
```

### 21 — Cálculo con resistividad

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "avanzado"
  tags: ["calculo"]

respuesta: 1.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si un cable de 2m de longitud y 1 $m^2$ de sección tiene una resistividad de 0.5 $\\Omega \\cdot m$, su resistencia es ___ $\\Omega$."

pasos:
  - "Identificar $\\rho = 0.5$, $L = 2$, $A = 1$."
  - "Calcular $R = 0.5 \\cdot 2 / 1$."

explicacion: |
  R = 0.5 * 2 / 1 = 1.0 $\Omega$.
```

### 22 — El concepto de Ohm

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["ley_ohm"]

respuesta: "voltaje"
tipo: completar
respuestas_validas:
  - "voltaje"
  - "tensión"

enunciado: "Si la corriente es constante, la resistencia es proporcional al ___."

explicacion: |
  De la Ley de Ohm ($V = I \cdot R$), si $I$ es constante, $R$ es proporcional a $V$.
```

### 23 — Comparación de cables

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Un cable de 10m tiene una resistencia ___ que un cable del mismo material y sección de 5m."

explicacion: |
  A mayor longitud, mayor resistencia.
```

### 24 — Resistencia y densidad de corriente

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "avanzado"
  tags: ["conceptos"]

respuesta: falso
tipo: vf
enunciado: "Si aumentamos el área de la sección transversal, la densidad de corriente aumenta si el voltaje es constante."

explicacion: |
  Falso. Al aumentar el área (A), la resistencia baja (R = ρL/A) y la corriente sube proporcionalmente (I = V/R ∝ A), por lo que la densidad de corriente J = I/A se mantiene CONSTANTE, no aumenta.
```

### 25 — Escenario final

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: verdadero
tipo: vf
enunciado: "Para reducir la resistencia de un cable sin cambiar el material, se puede aumentar su sección transversal."

explicacion: |
  Correcto, al aumentar el área $A$ en el denominador de $R = \rho \cdot L / A$, la resistencia disminuye.
```
