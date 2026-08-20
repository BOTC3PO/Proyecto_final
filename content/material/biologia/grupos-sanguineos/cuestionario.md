# Biología — Grupos sanguíneos (cuestionario, 20 preguntas VBLang)

> Tema: `B3` (mitad 2/2). Ver `teoria.md` en esta misma carpeta.

---

### 1 — Alelos múltiples del sistema ABO

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "basico"
  tags: ["abo", "vocabulario"]

enunciado: "¿Cuántos alelos posibles tiene el gen del sistema ABO, y cuántos tiene cada persona?"
tipo: mc
opciones_explicitas:
  - "Hay 3 alelos posibles (Iᴬ, Iᴮ, i) en la población, pero cada persona sólo tiene 2 (uno de cada progenitor)"
  - "Hay exactamente 2 alelos posibles, igual que cualquier otro gen"
  - "Cada persona tiene los 3 alelos a la vez"
respuesta: "Hay 3 alelos posibles (Iᴬ, Iᴮ, i) en la población, pero cada persona sólo tiene 2 (uno de cada progenitor)"

explicacion: |
  Es el ejemplo clásico de 'alelos múltiples' en genética humana.
```

### 2 — Qué es la codominancia

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "intermedio"
  tags: ["codominancia", "vocabulario"]

enunciado: "¿Qué es la codominancia entre Iᴬ e Iᴮ?"
tipo: mc
opciones_explicitas:
  - "Que si una persona tiene ambos alelos, LOS DOS se expresan a la vez (fenotipo AB), sin que ninguno tape al otro"
  - "Que Iᴬ siempre domina sobre Iᴮ, tapándolo por completo"
  - "Que ninguno de los dos alelos se expresa nunca en el fenotipo"
respuesta: "Que si una persona tiene ambos alelos, LOS DOS se expresan a la vez (fenotipo AB), sin que ninguno tape al otro"

explicacion: |
  Es distinto de la dominancia simple de
  `../genetica-mendeliana-punnett/`, donde el dominante sí tapa al
  recesivo.
```

### 3 — Problema: genotipos posibles para el tipo A

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "intermedio"
  tags: ["abo", "problema"]

enunciado: "¿Cuáles son los DOS genotipos posibles que dan fenotipo tipo A?"
tipo: mc
opciones_explicitas:
  - "IᴬIᴬ (homocigota) o Iᴬi (heterocigota)"
  - "Sólo IᴬIᴬ, no existe otra combinación posible"
  - "IᴬIᴮ o Iᴬi"
respuesta: "IᴬIᴬ (homocigota) o Iᴬi (heterocigota)"

explicacion: |
  Como Iᴬ es dominante sobre i, ambos genotipos dan el mismo fenotipo
  A.
```

### 4 — Problema: único genotipo del tipo AB

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "intermedio"
  tags: ["abo", "problema"]

enunciado: "¿Cuál es el ÚNICO genotipo posible para el fenotipo AB?"
tipo: mc
opciones_explicitas:
  - "IᴬIᴮ — es la única combinación que produce el fenotipo AB, por codominancia"
  - "IᴬIᴬ o IᴮIᴮ, indistintamente"
  - "ii, porque O es la base de AB"
respuesta: "IᴬIᴮ — es la única combinación que produce el fenotipo AB, por codominancia"

explicacion: |
  A diferencia de A o B (que tienen 2 genotipos posibles cada uno), AB
  sólo tiene un genotipo posible.
```

### 5 — Problema: cruce AB × O

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "avanzado"
  tags: ["abo", "problema"]

respuesta: 0.5
tipo: input

enunciado: "Padre tipo AB (IᴬIᴮ) × madre tipo O (ii). ¿Cuál es la probabilidad de que un hijo sea tipo A?"

pasos:
  - "El padre aporta Iᴬ o Iᴮ (1/2 cada uno); la madre sólo puede aportar i"
  - "P(hijo Iᴬi, tipo A) = 1/2"

explicacion: |
  La otra mitad de los hijos es tipo B (Iᴮi) — ningún hijo puede ser
  AB ni O en este cruce.
```

### 6 — Un hijo de AB × O nunca es AB ni O

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "avanzado"
  tags: ["abo"]

respuesta: verdadero
tipo: vf

enunciado: "En un cruce entre un padre tipo AB y una madre tipo O, ningún hijo puede resultar tipo AB ni tipo O."

explicacion: |
  La madre sólo puede aportar 'i', así que ningún hijo puede recibir
  dos alelos i (para ser O) ni recibir Iᴬ e Iᴮ juntos de un mismo
  progenitor combinados con el otro (para ser AB).
```

### 7 — Codominancia vs. dominancia simple

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "avanzado"
  tags: ["codominancia"]

enunciado: "¿En qué se diferencia la codominancia (Iᴬ e Iᴮ) de la dominancia simple (A y a de `../genetica-mendeliana-punnett/`)?"
tipo: mc
opciones_explicitas:
  - "En dominancia simple, el heterocigota se ve igual que el homocigota dominante (la copia recesiva queda 'tapada'); en codominancia, el heterocigota muestra un fenotipo NUEVO donde se ven ambos alelos"
  - "No hay ninguna diferencia real entre ambos mecanismos"
  - "La codominancia sólo aplica a plantas, nunca a animales"
respuesta: "En dominancia simple, el heterocigota se ve igual que el homocigota dominante (la copia recesiva queda 'tapada'); en codominancia, el heterocigota muestra un fenotipo NUEVO donde se ven ambos alelos"

explicacion: |
  AB es un fenotipo distinto de A y de B — no 'se parece' a ninguno de
  los dos por separado.
```

### 8 — Problema: cruce A heterocigota × B heterocigota

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "avanzado"
  tags: ["abo", "problema"]

respuesta: 0.25
tipo: input

enunciado: "Padre tipo A, heterocigota (Iᴬi) × madre tipo B, heterocigota (Iᴮi). ¿Cuál es la probabilidad de que un hijo sea tipo O?"

pasos:
  - "El padre aporta Iᴬ o i (1/2 cada uno); la madre aporta Iᴮ o i (1/2 cada uno)"
  - "P(hijo ii, tipo O) = 1/2 × 1/2 = 0,25"

explicacion: |
  Aunque ninguno de los padres sea tipo O, ambos pueden ser portadores
  del alelo 'i' sin saberlo (por ser heterocigotas).
```

### 9 — Aplicación real: por qué importa en una transfusión

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué es importante conocer el grupo sanguíneo ABO antes de una transfusión?"
tipo: mc
opciones_explicitas:
  - "Porque transfundir sangre de un grupo incompatible puede provocar una reacción inmunológica grave, ya que el sistema inmune reconoce como 'extraños' los antígenos A o B que no tiene"
  - "El grupo sanguíneo no tiene ninguna relevancia médica real"
  - "Sólo importa la cantidad de sangre transfundida, no el grupo"
respuesta: "Porque transfundir sangre de un grupo incompatible puede provocar una reacción inmunológica grave, ya que el sistema inmune reconoce como 'extraños' los antígenos A o B que no tiene"

explicacion: |
  Es la aplicación médica directa de este sistema genético.
```

### 10 — Qué es el factor Rh

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "intermedio"
  tags: ["rh", "vocabulario"]

enunciado: "¿Qué es el factor Rh?"
tipo: mc
opciones_explicitas:
  - "Un gen DISTINTO del sistema ABO, con herencia de dominancia simple (Rh+ dominante sobre Rh−)"
  - "Otro nombre para el mismo gen del sistema ABO"
  - "Un cuarto alelo del sistema ABO, además de Iᴬ, Iᴮ e i"
respuesta: "Un gen DISTINTO del sistema ABO, con herencia de dominancia simple (Rh+ dominante sobre Rh−)"

explicacion: |
  El grupo sanguíneo completo (por ejemplo 'A+') combina ambos
  sistemas genéticos por separado.
```

### 11 — Rh+ es dominante sobre Rh−

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "intermedio"
  tags: ["rh"]

respuesta: verdadero
tipo: vf

enunciado: "El alelo Rh+ es dominante sobre el alelo Rh−, así que una persona Rh+Rh− (heterocigota) es Rh positivo."

explicacion: |
  Es dominancia simple clásica, a diferencia de la codominancia del
  sistema ABO.
```

### 12 — Problema: determinación de paternidad

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "avanzado"
  tags: ["abo", "aplicacion"]

enunciado: "Un hijo es tipo O (ii). ¿Puede uno de sus padres biológicos ser tipo AB (IᴬIᴮ)?"
tipo: mc
opciones_explicitas:
  - "No: un padre AB sólo puede aportar Iᴬ o Iᴮ, nunca 'i' — no puede tener un hijo ii"
  - "Sí, es perfectamente posible sin ninguna restricción"
respuesta: "No: un padre AB sólo puede aportar Iᴬ o Iᴮ, nunca 'i' — no puede tener un hijo ii"

explicacion: |
  Es un uso real de la genética de grupos sanguíneos en casos legales
  de determinación de paternidad (para excluir, no para confirmar con
  certeza absoluta).
```

### 13 — Problema: probabilidad con un genotipo desconocido

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "avanzado"
  tags: ["abo", "problema"]

respuesta: 0.5
tipo: input

enunciado: "Un padre es tipo A, pero no se sabe si es IᴬIᴬ o Iᴬi (50% de probabilidad cada uno). Si es Iᴬi y la madre es tipo O (ii), ¿cuál es la probabilidad de que un hijo sea tipo O?"

pasos:
  - "Si el padre es Iᴬi: aporta Iᴬ o i (1/2 cada uno); la madre sólo aporta i"
  - "P(hijo ii | padre es Iᴬi) = 1/2"

explicacion: |
  Si en cambio el padre fuera IᴬIᴬ, ningún hijo podría ser tipo O — el
  genotipo exacto del padre (no sólo su fenotipo) cambia el cálculo.
```

### 14 — Cada persona tiene sólo 2 de los 3 alelos posibles

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "basico"
  tags: ["abo"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque existan 3 alelos posibles para el gen ABO en la población (Iᴬ, Iᴮ, i), cada persona individual sólo tiene 2 de esos tres (uno heredado de cada progenitor)."

explicacion: |
  'Alelos múltiples' se refiere a la variedad en la POBLACIÓN, no a
  que un individuo tenga más de 2 copias de un gen.
```

### 15 — Aplicación: grupo O como donante universal

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué a una persona tipo O se la suele llamar 'donante universal'?"
tipo: mc
opciones_explicitas:
  - "Porque su sangre no tiene ni el antígeno A ni el B, así que en general no genera el mismo tipo de rechazo inmunológico al ser transfundida a personas de otros grupos ABO"
  - "Porque puede recibir sangre de cualquier grupo sin ningún riesgo"
  - "Porque el tipo O es el grupo sanguíneo más común en todo el mundo, sin ninguna otra razón"
respuesta: "Porque su sangre no tiene ni el antígeno A ni el B, así que en general no genera el mismo tipo de rechazo inmunológico al ser transfundida a personas de otros grupos ABO"

explicacion: |
  Es consecuencia directa del genotipo ii, que no produce ninguno de
  los dos antígenos.
```

### 16 — Problema: cruce con ambos padres tipo A heterocigotas

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "avanzado"
  tags: ["abo", "problema"]

respuesta: 0.25
tipo: input

enunciado: "Padre tipo A (Iᴬi) × madre tipo A (Iᴬi), ambos heterocigotas. ¿Cuál es la probabilidad de que un hijo sea tipo O?"

pasos:
  - "Ambos padres aportan Iᴬ o i (1/2 cada uno)"
  - "P(hijo ii) = 1/2 × 1/2 = 0,25"

explicacion: |
  Es el mismo patrón matemático que un cruce Aa × Aa de
  `../genetica-mendeliana-punnett/`, sólo que acá 'aa' se llama 'ii' y
  el fenotipo se llama 'tipo O' en vez de 'recesivo'.
```

### 17 — Relación con probabilidad condicional

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "intermedio"
  tags: ["probabilidad_condicional", "aplicacion"]

enunciado: "¿Qué relación tiene calcular el grupo sanguíneo posible de un hijo con `../../matematica/probabilidad-condicional/`?"
tipo: mc
opciones_explicitas:
  - "La probabilidad del genotipo del hijo depende de qué se conoce (o no) del genotipo exacto de los padres — es una probabilidad condicionada a esa información disponible"
  - "No tiene ninguna relación real con la probabilidad condicional"
  - "El grupo sanguíneo de un hijo nunca depende del genotipo de sus padres"
respuesta: "La probabilidad del genotipo del hijo depende de qué se conoce (o no) del genotipo exacto de los padres — es una probabilidad condicionada a esa información disponible"

explicacion: |
  Es la misma idea general que en `../herencia-ligada-al-sexo/`, ahora
  aplicada a un mecanismo de alelos múltiples y codominancia.
```

### 18 — Problema: combinar ABO y Rh

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "avanzado"
  tags: ["rh", "abo", "problema"]

respuesta: 0.125
tipo: input

enunciado: "Un hijo tiene 1/2 de probabilidad de ser tipo A (sistema ABO) y, de forma independiente, 1/4 de probabilidad de ser Rh negativo (sistema Rh). ¿Cuál es la probabilidad de que sea A Y Rh negativo a la vez?"

pasos:
  - "Son dos sistemas genéticos independientes entre sí (genes distintos)"
  - "P(A y Rh−) = 1/2 × 1/4 = 0,125"

explicacion: |
  Al ser genes ubicados en cromosomas distintos, se aplica la regla
  del producto de `../../matematica/probabilidad-compuesta/`.
```

### 19 — El sistema Rh no es parte del sistema ABO

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "intermedio"
  tags: ["rh", "abo"]

respuesta: verdadero
tipo: vf

enunciado: "El factor Rh y el sistema ABO son genes distintos, heredados de forma independiente entre sí — el genotipo de uno no determina el genotipo del otro."

explicacion: |
  Por eso existen 8 combinaciones posibles de grupo sanguíneo completo
  (A+, A−, B+, B−, AB+, AB−, O+, O−).
```

### 20 — Cierre: para qué sirve entender los grupos sanguíneos

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la genética de los grupos sanguíneos?"
tipo: mc
opciones_explicitas:
  - "Para entender la compatibilidad en transfusiones, calcular probabilidades de herencia, y como aplicación real de alelos múltiples y codominancia"
  - "Sólo tiene aplicación teórica, sin ningún uso médico o legal real"
  - "Sólo sirve para clasificar tipos de sangre, sin relación con genética"
respuesta: "Para entender la compatibilidad en transfusiones, calcular probabilidades de herencia, y como aplicación real de alelos múltiples y codominancia"

explicacion: |
  Junto con `../herencia-ligada-al-sexo/`, completa las dos mitades
  del nodo `B3` del MAPA — dos mecanismos genéticos distintos, ambos
  resueltos con probabilidad condicional.
```
