### 1 — La función del capacitor
```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["capacitor", "condensador", "carga"]

respuesta: "almacenar_energia"
tipo: completar
respuestas_validas: ["almacenar_energia", "almacenar_carga", "almacenar_energia_electrica"]

enunciado: "A diferencia de una resistencia que disipa energía en forma de calor, un capacitor tiene la función principal de ___."

explicacion: |
  El capacitor (o condensador) almacena energía en un campo eléctrico mediante la acumulación de cargas en sus placas, permitiendo liberar esa energía cuando el circuito lo requiere.
```

### 2 — La confusión de la resistencia
```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["resistencia", "ley_ohm"]

opciones_explicitas: ["Aumentar la corriente", "Disminuir la corriente", "Aumentar el voltaje"]
respuesta: "Disminuir la corriente"
tipo: mc

enunciado: "Si se coloca una resistencia en serie con una fuente de voltaje constante, ¿qué efecto tiene sobre la corriente que circula por el circuito?"

explicacion: |
  Según la Ley de Ohm (I = V/R), la corriente es inversamente proporcional a la resistencia. Al aumentar la resistencia, la corriente disminuye.
```

### 3 — El comportamiento del diodo
```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "intermedio"
  tags: ["diodo", "polarizacion"]

variables:
  es_polarizado_directo: uno_de([true, false])

respuesta: es_polarizado_directo
tipo: vf

enunciado: "Si un diodo se encuentra en condiciones de polarización directa, la corriente puede fluir a través de él. El enunciado es: {es_polarizado_directo}."

explicacion: |
  Un diodo actúa como una válvula de una sola vía. En polarización directa (ánodo positivo, cátodo negativo), permite el paso de corriente; en inversa, actúa como un aislante.
```

### 4 — El transistor como interruptor
```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "intermedio"
  tags: ["transistor", "base", "emisor", "colector"]

opciones_explicitas: ["Base", "Emisor", "Colector"]
respuesta: "Base"
tipo: mc

enunciado: "En un transistor BJT, el terminal que se utiliza para controlar el flujo de corriente entre el emisor y el colector mediante una pequeña corriente externa es la ___."

explicacion: |
  El transistor funciona como un amplificador o interruptor controlado por la corriente que entra en la terminal de la Base.
```

### 5 — Flujo de corriente en un circuito serie
```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["circuito_serie", "ordenar"]

opciones_explicitas: ["Resistencia", "Capacitor", "Diodo"]
respuesta: ["Resistencia", "Capacitor", "Diodo"]
tipo: ordenar

enunciado: "Ordena los siguientes componentes según el orden en que se encuentran en un circuito serie hipotético (de entrada a salida):"

pasos:
  - "Componente 1 (Resistencia)"
  - "Componente 2 (Capacitor)"
  - "Componente 3 (Diodo)"

explicacion: |
  En un circuito en serie, los componentes se colocan uno tras otro en la misma trayectoria de la corriente.
```