### 1 — Diferencia entre Derecho Civil y Comercial
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["civil", "comercial"]

respuesta: "comercial"
tipo: mc
opciones_explicitas: ["civil", "comercial", "penal", "laboral"]

enunciado: "Mientras que el Derecho Civil regula las relaciones privadas de las personas en general, el Derecho ___ se especializa en los actos de comercio y la actividad de los comerciantes."

explicacion: |
  El Derecho Civil es la rama general que regula relaciones como la familia o sucesiones, mientras que el Derecho Comercial es una rama especial que se aplica específicamente a los actos de comercio.
```

### 2 — Naturaleza del Derecho Penal
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["penal", "civil"]

respuesta: falso
tipo: vf

enunciado: "A diferencia del Derecho Civil, que busca la reparación de un daño, el Derecho Penal tiene como fin principal la imposición de una sanción o pena por la comisión de un delito."

explicacion: |
  Es verdadero. El Derecho Civil es eminentemente reparatorio (indemnizaciones), mientras que el Derecho Penal es punitivo (penas de prisión, multas estatales, etc.).
```

### 3 — El objeto del Derecho Laboral
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["laboral", "civil"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: tabla[escenario_idx][1]
tipo: completar
respuestas_validas: ["subordinación", "igualdad"]

enunciado: "A diferencia de un contrato de locación de servicios (civil), donde prima la autonomía de la voluntad, el Derecho Laboral se distingue por la existencia de una relación de ___ entre las partes."

pasos:
  - "Identificar la relación jurídica: ¿hay dependencia o es un servicio independiente?"
  - "Comparar con el concepto de autonomía civil."

explicacion: |
  El elemento distintivo del Derecho Laboral es la subordinación (dependencia técnica, económica y jurídica) del trabajador respecto al empleador.

tabla:
  - ["subordinación", "subordinación"]
  - ["igualdad", "igualdad"]
```

### 4 — Ámbito de aplicación del Derecho Administrativo
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["administrativo", "civil"]

respuesta: "Estado"
tipo: mc
opciones_explicitas: ["Estado", "Particulares", "Empresas", "Sociedades"]

enunciado: "El Derecho Administrativo se distingue del Derecho Civil porque su sujeto principal es el ___ en el ejercicio de sus funciones públicas."

explicacion: |
  El Derecho Administrativo regula la organización y el funcionamiento de la administración pública y sus relaciones con los ciudadanos.
```

### 5 — Jerarquía de normas en el control de legalidad
```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "avanzado"
  tags: ["administrativo", "ordenamiento"]

respuesta: ["Constitución", "Ley", "Reglamento"]
tipo: ordenar

opciones_explicitas: ["Constitución", "Ley", "Reglamento"]

enunciado: "En el Derecho Administrativo, para verificar la validez de un acto, se debe seguir el orden jerárquico de normas. Ordene de mayor a menor jerarquía:"

explicacion: |
  La jerarquía normativa establece que un Reglamento no puede contrariar una Ley, y una Ley no puede contrariar la Constitución.
```