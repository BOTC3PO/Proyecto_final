### 1 — Definición de la Ley de Hooke
```
metadata:
  materia: "materiales"
  tema: "elasticidad_ley_de_hooke"
  nivel: "basico"
  tags: ["elasticidad", "hooke", "fuerza"]

respuesta: "F"
tipo: "vf"

enunciado: "La Ley de Hooke establece que la deformación de un cuerpo elástico es directamente proporcional a la fuerza aplicada, siempre que no se exceda el límite elástico. (Verdadero/Falso)"

explicacion: |
  La Ley de Hooke postula la relación lineal entre la fuerza aplicada y la deformación (estiramiento o compresión) en el régimen elástico.
```

### 2 — Concepto de Módulo de Young
```
metadata:
  materia: "materiales"
  tema: "modulo_de_young"
  nivel: "basico"
  tags: ["rigidez", "propiedades_mecanicas"]

variables:
  es_rigido: uno_de([true, false])

respuesta: uno_de(["alto", "bajo"])
tipo: "mc"
opciones_explicitas: ["alto", "bajo"]

enunciado: "Un material que presenta un Módulo de Young {es_rigido == true ? 'muy elevado' : 'muy bajo'} indica que el material es ____ respecto a su capacidad de deformarse bajo esfuerzo."

explicacion: |
  El Módulo de Young mide la rigidez de un material; cuanto mayor es su valor, menos se deforma el material ante un mismo esfuerzo.
```

### 3 — Relación de variables en la Ley de Hooke
```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_variables"
  nivel: "intermedio"
  tags: ["deformacion", "esfuerzo", "modulo_young"]

respuesta: ["esfuerzo", "deformacion"]
tipo: "ordenar"
opciones_explicitas: ["esfuerzo", "deformacion", "masa"]

enunciado: "Para calcular el Módulo de Young (E), se debe dividir el ___ entre la ___."

explicacion: |
  La fórmula del Módulo de Young es E = σ / ε, donde σ es el esfuerzo (fuerza/área) y ε es la deformación unitaria.
```

### 4 — Límite Elástico
```
metadata:
  materia: "materiales"
  tema: "limite_elastico"
  nivel: "intermedio"
  tags: ["deformacion_permanente", "plasticidad"]

respuesta: "plasticidad"
tipo: "completar"
respuestas_validas: ["plasticidad"]

enunciado: "Cuando un material es sometido a un esfuerzo que supera su límite elástico, la deformación deja de ser reversible y entra en el régimen de ________."

explicacion: |
  Al superar el límite elástico, el material sufre una deformación permanente (plástica) y no recupera su forma original al retirar la carga.
```

### 5 — Unidades del Módulo de Young
```
metadata:
  materia: "materiales"
  tema: "unidades_modulo_young"
  nivel: "basico"
  tags: ["unidades", "presion"]

respuesta: "Pascal"
tipo: "mc"
opciones_explicitas: ["Pascal", "Newton", "Kilogramo", "Metro"]

enunciado: "Dado que el Módulo de Young es la relación entre esfuerzo (fuerza/área) y deformación unitaria (adimensional), su unidad en el SI es el ________."

explicacion: |
  El esfuerzo se mide en Pascales (Pa), que es Newton sobre metro cuadrado (N/m²). Como la deformación no tiene unidades, el módulo mantiene la unidad del esfuerzo.
```