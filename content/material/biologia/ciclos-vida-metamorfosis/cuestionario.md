# Biología — Ciclos de vida y metamorfosis (cuestionario, 20 preguntas VBLang)

> Tema: `BA2`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma, en paralelo) y
> corregido a mano. Sin bugs funcionales esta tanda.

---

### 1 — Definición de ciclo de vida

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["ciclo_de_vida", "conceptos_basicos"]

respuesta: verdadero
tipo: vf

enunciado: "El ciclo de vida es la secuencia de etapas que atraviesa un ser vivo desde que nace hasta que se reproduce."

explicacion: |
  Correcto. Abarca todas las fases desde el nacimiento hasta la madurez y reproducción.
```

### 2 — Universalidad de los ciclos de vida

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["ciclo_de_vida"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los seres vivos, sin excepción, tienen algún tipo de ciclo de vida."

explicacion: |
  Correcto, aunque la duración y complejidad varían mucho entre especies.
```

### 3 — Concepto de metamorfosis

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["metamorfosis"]

respuesta: falso
tipo: vf

enunciado: "La metamorfosis es cuando el organismo simplemente crece más grande, sin cambiar de forma."

explicacion: |
  Falso. La metamorfosis implica un cambio de forma radical, no sólo crecer.
```

### 4 — Características de la metamorfosis

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["metamorfosis"]

respuesta: verdadero
tipo: vf

enunciado: "La metamorfosis implica un cambio radical de estructura corporal entre las distintas etapas."

explicacion: |
  Correcto, hay transformaciones morfológicas profundas.
```

### 5 — Etapas de la metamorfosis completa

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["metamorfosis", "etapas"]

respuesta: "adulto"
tipo: completar
respuestas_validas:
  - "adulto"

enunciado: "Las 4 etapas de la metamorfosis completa son huevo, larva, pupa y ___."

explicacion: |
  La metamorfosis completa tiene 4 estadios: huevo, larva, pupa y adulto.
```

### 6 — Descripción de cada etapa

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "intermedio"
  tags: ["metamorfosis", "etapas"]

variables:
  escenario: [["larva", "forma de gusano, come mucho, etapa de crecimiento"], ["pupa", "etapa quieta y protegida donde el cuerpo se reorganiza"], ["adulto", "forma final, encargada de reproducirse"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["forma de gusano, come mucho, etapa de crecimiento", "etapa quieta y protegida donde el cuerpo se reorganiza", "forma final, encargada de reproducirse"]

enunciado: "¿Cuál es la descripción de la etapa {escenario[idx][0]}?"

explicacion: |
  La etapa {escenario[idx][0]} es: {escenario[idx][1]}.
```

### 7 — Ejemplo de metamorfosis completa

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["metamorfosis", "mariposa"]

respuesta: verdadero
tipo: vf

enunciado: "La mariposa es un ejemplo clásico de metamorfosis completa."

explicacion: |
  Correcto: huevo → oruga (larva) → crisálida (pupa) → mariposa (adulto).
```

### 8 — Identificación de la etapa de la oruga

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["metamorfosis", "oruga"]

respuesta: falso
tipo: vf

enunciado: "En la mariposa, la oruga es la etapa de pupa."

explicacion: |
  Falso. La oruga es la larva; la pupa es la crisálida.
```

### 9 — Etapas de la metamorfosis incompleta

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["metamorfosis", "insectos"]

respuesta: "adulto"
tipo: completar
respuestas_validas:
  - "adulto"

enunciado: "Las 3 etapas de la metamorfosis incompleta son huevo, ninfa y ___."

explicacion: |
  La metamorfosis incompleta tiene 3 estadios: huevo, ninfa y adulto.
```

### 10 — Características de la ninfa

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["ninfa"]

respuesta: verdadero
tipo: vf

enunciado: "La ninfa se parece al adulto pero es más chica y sin alas desarrolladas."

explicacion: |
  Correcto, es una versión juvenil del adulto.
```

### 11 — Ausencia de pupa en la metamorfosis incompleta

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["pupa", "comparacion"]

respuesta: falso
tipo: vf

enunciado: "La metamorfosis incompleta tiene una etapa de pupa, igual que la completa."

explicacion: |
  Falso. La pupa es exclusiva de la metamorfosis completa.
```

### 12 — Ejemplos de metamorfosis incompleta

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["ejemplos"]

respuesta: verdadero
tipo: vf

enunciado: "La libélula y el grillo son ejemplos de metamorfosis incompleta."

explicacion: |
  Correcto, ambos pasan por la etapa de ninfa, sin pupa.
```

### 13 — El proceso de muda

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "basico"
  tags: ["muda"]

respuesta: verdadero
tipo: vf

enunciado: "La ninfa va mudando de piel varias veces hasta alcanzar el tamaño adulto."

explicacion: |
  Correcto, necesita desprenderse del exoesqueleto rígido para crecer.
```

### 14 — Metamorfosis completa: apariencia entre etapas

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "intermedio"
  tags: ["metamorfosis"]

respuesta: verdadero
tipo: vf

enunciado: "En la metamorfosis completa, la larva y el adulto no se parecen en nada entre sí."

explicacion: |
  Correcto, gracias a la reorganización que ocurre en la pupa.
```

### 15 — Metamorfosis incompleta: parecido con el adulto

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "intermedio"
  tags: ["metamorfosis"]

respuesta: verdadero
tipo: vf

enunciado: "En la metamorfosis incompleta, la ninfa ya se parece al adulto desde el principio."

explicacion: |
  Correcto, sólo cambia de tamaño y desarrolla alas gradualmente.
```

### 16 — El proceso de reconstrucción

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "intermedio"
  tags: ["pupa", "comparacion"]

respuesta: "Completa (con etapa de pupa)"
tipo: mc
opciones_explicitas: ["Completa (con etapa de pupa)", "Incompleta", "Ninguna", "Ambas por igual"]

enunciado: "¿Cuál tipo de metamorfosis tiene una etapa donde el cuerpo se reconstruye casi desde cero?"

explicacion: |
  La metamorfosis completa, en la pupa, donde el cuerpo se reorganiza casi por completo.
```

### 17 — Identificación de tipo de metamorfosis

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "intermedio"
  tags: ["ejemplos"]

variables:
  datos: [["mariposa", "completa"], ["grillo", "incompleta"], ["mosquito", "completa"], ["libelula", "incompleta"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["completa", "incompleta"]

enunciado: "¿Qué tipo de metamorfosis tiene {datos[idx][0]}?"

explicacion: |
  {datos[idx][0]} tiene metamorfosis {datos[idx][1]}.
```

### 18 — Reproducción, cierre del ciclo

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "intermedio"
  tags: ["ciclo_de_vida"]

respuesta: verdadero
tipo: vf

enunciado: "El ciclo de vida se completa (y potencialmente se reinicia con una nueva generación) cuando el organismo llega a la etapa adulta y se reproduce."

explicacion: |
  Correcto, ese es el "cierre" natural del ciclo.
```

### 19 — Anfibios y metamorfosis (aplicación más allá de insectos)

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "avanzado"
  tags: ["anfibios", "ejemplos"]

respuesta: verdadero
tipo: vf

enunciado: "Las ranas también tienen metamorfosis: pasan de renacuajo (etapa acuática, con cola y branquias) a rana adulta (con patas y pulmones), un cambio tan radical como el de los insectos."

explicacion: |
  Correcto. La metamorfosis no es exclusiva de los insectos — los anfibios también la tienen.
```

### 20 — Ventaja de la metamorfosis completa

```
metadata:
  materia: "biologia"
  tema: "ciclos_vida_metamorfosis"
  nivel: "avanzado"
  tags: ["conceptos", "ecologia"]

respuesta: "la larva y el adulto compiten menos por el mismo alimento, al vivir en ambientes o comer cosas distintas"
tipo: mc
opciones_explicitas: ["la larva y el adulto compiten menos por el mismo alimento, al vivir en ambientes o comer cosas distintas", "la larva vive más años que el adulto", "el adulto nunca necesita comer", "no tiene ninguna ventaja evolutiva"]

enunciado: "¿Cuál es una ventaja de que la larva y el adulto tengan formas tan distintas en la metamorfosis completa?"

explicacion: |
  Al ser tan distintos, la larva y el adulto suelen ocupar nichos distintos (comida, hábitat), reduciendo la competencia entre generaciones de la misma especie.
```
