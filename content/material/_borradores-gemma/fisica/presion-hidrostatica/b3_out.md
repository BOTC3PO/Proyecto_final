### 1 — El error de la presión absoluta
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["presion", "fluido", "conceptos_clave"]

enunciado: "Un buceador se encuentra a una profundidad de 10 metros bajo la superficie del mar. Si la presión atmosférica en la superficie es de 1 atm, la presión que experimenta el buceador es la suma de la presión atmosférica más la presión hidrostática. ¿La presión hidrostática depende de la presión atmosférica superficial?"

respuesta: falso
tipo: vf

explicacion: |
  La presión hidrostática depende únicamente de la densidad del fluido ($\rho$), la gravedad ($g$) y la profundidad ($h$). La presión atmosférica es una presión externa que se suma para obtener la presión absoluta, pero no altera el valor de la presión hidrostática en sí misma.
```

### 2 — La confusión de la densidad
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["densidad", "presion", "fluido"]

variables:
  escenario: uno_de([
    [1000, "agua"],
    [800, "aceite"],
    [1300, "glicerina"]
  ])

enunciado: "Se tienen tres recipientes de igual forma y dimensiones, con la misma profundidad de 2 metros. El primero contiene {escenario[0]} kg/m³ de {escenario[1]}, el segundo contiene {escenario[0]} kg/m³ de {escenario[1]}, y el tercero contiene {escenario[0]} kg/m³ de {escenario[1]}. Si la gravedad es 9.8 m/s², ¿cuál es la presión hidrostática en el recipiente con {escenario[1]}?"

pasos:
  - "Identificar la densidad del fluido: {escenario[0]} kg/m³"
  - "Aplicar la fórmula P = $\rho \cdot g \cdot h$"
  - "Calcular: {escenario[0]} * 9.8 * 2"

respuesta: redondear(escenario[0] * 9.8 * 2, 2)
tipo: input
tolerancia_abs: 0.1

explicacion: |
  La presión hidrostática se calcula multiplicando la densidad por la gravedad por la profundidad. En este caso: {escenario[0]} * 9.8 * 2 = {redondear(escenario[0] * 9.8 * 2, 2)} Pa.
```

### 3 — ¿Qué influye en la presión?
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["conceptos", "variables"]

enunciado: "Un recipiente cilíndrico contiene un líquido en reposo. Si aumentamos la profundidad de un punto dentro del líquido sin cambiar la densidad del fluido ni la gravedad, la presión hidrostática en ese punto ___."

opciones_explicitas: ["disminuye", "aumenta", "se mantiene igual"]

respuesta: "aumenta"
tipo: mc

explicacion: |
  De acuerdo a la fórmula $P = \rho \cdot g \cdot h$, la presión es directamente proporcional a la profundidad ($h$). A mayor profundidad, mayor presión hidrostática.
```

### 4 — El error de la forma del recipiente
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["paradoja_hidrostatica", "forma_recipiente"]

enunciado: "Se tienen dos recipientes: uno es un cilindro recto y el otro es un cono invertido. Ambos están llenos de agua hasta la misma altura de 0.5 metros. ¿Cuál de los dos presenta mayor presión en el fondo debido únicamente a la presión hidrostática?"

opciones_explicitas: ["El cilindro", "El cono", "Ambos tienen la misma presión"]

respuesta: "Ambos tienen la misma presión"
tipo: mc

explicacion: |
  Este es un error común. La presión hidrostática depende de la profundidad y la densidad, NO de la forma del recipiente ni del volumen total de líquido. Como la altura ($h$) es la misma, la presión en el fondo es igual.
```

### 5 — Completar la fórmula
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["formula", "simbolos"]

enunciado: "En la expresión de la presión hidrostática $P = \rho \cdot g \cdot h$, la variable $\rho$ representa la ___ del fluido."

respuestas_validas: ["densidad"]

respuesta: "densidad"
tipo: completar

explicacion: |
  En la fórmula de la presión hidrostática, $\rho$ (rho) es el símbolo utilizado para representar la densidad del fluido.
```