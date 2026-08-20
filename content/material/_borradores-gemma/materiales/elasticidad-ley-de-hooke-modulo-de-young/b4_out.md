### 1 — Ley de Hooke vs. Límite Elástico
```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_vs_limite_elastico"
  nivel: "basico"
  tags: ["elasticidad", "hooke"]

variables:
  es_elastico: verdadero

respuesta: es_elastico
tipo: vf

enunciado: "Si un material se deforma y, al retirar la carga, recupera su forma original, se dice que se encuentra dentro de su rango ____. Si la deformación es permanente, se ha superado el límite elástico."

pasos:
  - "Identificar si el comportamiento descrito es elástico o plástico."

explicacion: |
  La Ley de Hooke solo es válida mientras el material se encuentra en el régimen elástico. Una vez superado el límite elástico, el material entra en el régimen plástico y la deformación es irreversible.
```

### 2 — Módulo de Young vs. Módulo de Corte
```
metadata:
  materia: "materiales"
  tema: "modulo_young_vs_corte"
  nivel: "intermedio"
  tags: ["modulo_young", "modulo_corte", "deformacion"]

variables:
  tipo_deformacion: uno_de(["axial", "cizalladura"])

respuesta: tipo_deformacion[1]
tipo: mc

opciones_explicitas: ["axial", "cizalladura"]

enunciado: "El Módulo de Young mide la rigidez de un material frente a una deformación de tipo {tipo_deformacion[0]}, mientras que el Módulo de Corte mide la resistencia a la deformación por {tipo_deformacion[1]}."

explicacion: |
  El Módulo de Young ($E$) relaciona el esfuerzo normal con la deformación axial. El Módulo de Corte ($G$) relaciona el esfuerzo cortante con la deformación por cizalladura.
```

### 3 — Relación entre Módulo de Young y Rigidez
```
metadata:
  materia: "materiales"
  tema: "modulo_young_propiedades"
  nivel: "intermedio"
  tags: ["modulo_young", "rigidez"]

variables:
  es_mayor: verdadero

respuesta: es_mayor
tipo: vf

enunciado: "Si comparamos dos barras del mismo material pero con diferentes diámetros, la barra con mayor diámetro tendrá un valor de Módulo de Young más alto. ¿Es esto verdadero o falso?"

explicacion: |
  Falso. El Módulo de Young es una propiedad intensiva del material; su valor depende únicamente de la naturaleza del material y no de la geometría (diámetro o longitud) de la pieza.
```

### 4 — Componentes de la deformación elástica
```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_componentes"
  nivel: "basico"
  tags: ["hooke", "esfuerzo", "deformacion"]

respuesta: ["esfuerzo", "deformación"]
tipo: ordenar

opciones_explicitas: ["deformación", "esfuerzo", "temperatura", "masa"]

enunciado: "En la formulación de la Ley de Hooke ($\sigma = E \cdot \epsilon$), se establece una relación de proporcionalidad directa entre el ____ y la ____."

explicacion: |
  La Ley de Hooke establece que el esfuerzo ($\sigma$) es directamente proporcional a la deformación unitaria ($\epsilon$), siendo el Módulo de Young ($E$) la constante de proporcionalidad.
```

### 5 — Diferencia entre Esfuerzo y Deformación
```
metadata:
  materia: "materiales"
  tema: "esfuerzo_vs_deformacion"
  nivel: "basico"
  tags: ["esfuerzo", "deformacion", "hooke"]

variables:
  es_relacion_directa: verdadero

respuesta: es_relacion_directa
tipo: vf

enunciado: "En el régimen elástico, si el esfuerzo aplicado sobre un material aumenta, la deformación resultante también aumenta. ¿Es esta relación directa?"

explicacion: |
  Sí, en el régimen elástico lineal, el esfuerzo y la deformación son directamente proporcionales según la Ley de Hooke.
```