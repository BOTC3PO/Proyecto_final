# Química — Grupos funcionales (cuestionario, 20 preguntas VBLang)

> Tema: `QT`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Definición de grupo funcional

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: verdadero
tipo: vf

enunciado: "Un grupo funcional es un átomo o grupo de átomos que le da a la molécula un comportamiento químico característico."

explicacion: |
  Correcto. Los grupos funcionales determinan las propiedades químicas y la reactividad de una molécula orgánica.
```

### 2 — Identificación del grupo hidroxilo

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["hidroxilo", "alcoholes"]

respuesta: "hidroxilo"
tipo: mc
opciones_explicitas: ["hidroxilo", "carbonilo", "carboxilo", "amino"]

enunciado: "El grupo funcional -OH se denomina..."

explicacion: |
  El grupo -OH (oxígeno + hidrógeno) se llama grupo hidroxilo.
```

### 3 — Nomenclatura de alcoholes

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["nomenclatura", "alcoholes"]

respuesta: "ol"
tipo: completar
respuestas_validas:
  - "ol"

enunciado: "Los compuestos con grupo hidroxilo (-OH) se nombran con el sufijo ___."

explicacion: |
  El sufijo -ol indica un alcohol (metanol, etanol...).
```

### 4 — Ejemplo de alcohol

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["etanol", "alcoholes"]

respuesta: verdadero
tipo: vf

enunciado: "El etanol es un ejemplo de alcohol, ya que posee un grupo funcional hidroxilo (-OH)."

explicacion: |
  Correcto. El etanol (CH3CH2OH) es el alcohol más común.
```

### 5 — Grupo carbonilo compartido

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["aldehido", "cetona", "carbonilo"]

respuesta: verdadero
tipo: vf

enunciado: "El aldehído y la cetona comparten el mismo grupo carbonilo (C=O), pero en distinta posición."

explicacion: |
  En el aldehído el carbono está en un extremo de la cadena; en la cetona, unido a otros dos carbonos.
```

### 6 — Ubicación del carbonilo (extremo)

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["aldehido", "cetona", "estructura"]

respuesta: "aldehído"
tipo: mc
opciones_explicitas: ["aldehído", "cetona", "ácido carboxílico", "amina"]

enunciado: "Si el carbono del grupo carbonilo está en la PUNTA de la cadena, es un..."

explicacion: |
  El grupo C=O en un extremo de la cadena define un aldehído.
```

### 7 — Ubicación del carbonilo (medio)

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["cetona", "estructura"]

respuesta: "cetona"
tipo: mc
opciones_explicitas: ["cetona", "aldehído", "ácido carboxílico", "amina"]

enunciado: "Si el carbono del grupo carbonilo está en el MEDIO de la cadena, es una..."

explicacion: |
  El carbonilo unido a dos carbonos vecinos define una cetona.
```

### 8 — Nombre del grupo -COOH

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["acido_carboxilico", "nomenclatura"]

respuesta: "carboxilo"
tipo: mc
opciones_explicitas: ["carboxilo", "carbonilo", "hidroxilo", "amino"]

enunciado: "El grupo funcional -COOH se llama..."

explicacion: |
  El grupo carboxilo combina un carbonilo (C=O) y un hidroxilo (-OH) en el mismo carbono.
```

### 9 — Ácido acético

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["acido_acetico", "vinagre"]

respuesta: verdadero
tipo: vf

enunciado: "El ácido acético (vinagre) tiene grupo funcional carboxilo."

explicacion: |
  El ácido acético (CH3COOH) es un ácido carboxílico.
```

### 10 — Identificación de grupo amino

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["quimica_organica"]

respuesta: "amino"
tipo: mc
opciones_explicitas: ["amino", "carboxilo", "ester", "hidroxilo"]

enunciado: "El grupo funcional -NH2 se llama..."

explicacion: |
  El grupo -NH2 es el grupo amino, característico de las aminas.
```

### 11 — Reactividad de grupos funcionales

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["reactividad", "generalizacion"]

respuesta: verdadero
tipo: vf

enunciado: "Dos moléculas distintas que comparten el mismo grupo funcional reaccionan de forma parecida."

explicacion: |
  Verdadero. El grupo funcional determina el comportamiento químico principal de la molécula.
```

### 12 — Generalización en química orgánica

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["metodologia"]

respuesta: falso
tipo: vf

enunciado: "Para predecir el comportamiento de un compuesto orgánico hace falta memorizar cada molécula por separado, sin poder generalizar por grupo funcional."

explicacion: |
  Falso. La química orgánica se apoya justamente en generalizar por grupo funcional.
```

### 13 — Formación de ésteres

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "intermedio"
  tags: ["reacciones", "esterificacion"]

respuesta: "ester"
tipo: completar
respuestas_validas:
  - "ester"

enunciado: "El grupo funcional que se forma cuando un ácido reacciona con un alcohol se llama ___."

explicacion: |
  Esa reacción (esterificación) produce un éster y agua.
```

### 14 — Identificación de fórmula química de grupos funcionales

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "intermedio"
  tags: ["quimica_organica"]

variables:
  datos: [["hidroxilo", "-OH"], ["carboxilo", "-COOH"], ["amino", "-NH2"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["-OH", "-COOH", "-NH2"]

enunciado: "¿Cuál es la fórmula del grupo funcional {datos[idx][0]}?"

explicacion: |
  El grupo {datos[idx][0]} tiene fórmula {datos[idx][1]}.
```

### 15 — El enlace peptídico

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "intermedio"
  tags: ["proteinas", "enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "El enlace peptídico que une aminoácidos en las proteínas se forma por la reacción entre un grupo amino y un grupo carboxilo."

explicacion: |
  Correcto. La deshidratación entre el -NH2 de un aminoácido y el -COOH de otro forma el enlace peptídico.
```

### 16 — Caracterización de glúcidos

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "intermedio"
  tags: ["glucidos"]

respuesta: verdadero
tipo: vf

enunciado: "Los glúcidos se caracterizan por tener muchos grupos hidroxilo y un grupo carbonilo (aldehído o cetona)."

explicacion: |
  Correcto. Los glúcidos son polihidroxialdehídos o polihidroxicetonas.
```

### 17 — Grupo funcional NO propio de aminoácidos

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "intermedio"
  tags: ["proteinas"]

respuesta: "hidroxilo"
tipo: mc
opciones_explicitas: ["hidroxilo", "amino", "carboxilo", "enlace peptidico"]

enunciado: "¿Cuál de estos NO es un componente estructural básico de un aminoácido?"

explicacion: |
  Los aminoácidos tienen grupo amino y grupo carboxilo. El hidroxilo es propio de alcoholes/glúcidos, no la base de un aminoácido.
```

### 18 — Grupo carbonilo dentro del carboxilo

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "avanzado"
  tags: ["carboxilo", "carbonilo"]

respuesta: verdadero
tipo: vf

enunciado: "El grupo carboxilo (-COOH) contiene un grupo carbonilo (C=O) dentro de su estructura."

explicacion: |
  Correcto. El carboxilo combina un carbonilo y un hidroxilo sobre el mismo átomo de carbono.
```

### 19 — Comparación de acidez

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "avanzado"
  tags: ["comparacion", "acidez"]

respuesta: "un ácido carboxílico (-COOH)"
tipo: mc
opciones_explicitas: ["un ácido carboxílico (-COOH)", "un alcohol (-OH)", "una amina (-NH2)", "un éster"]

enunciado: "¿Cuál de estos grupos funcionales le da a la molécula propiedades ácidas (puede donar un H+ fácilmente)?"

explicacion: |
  El grupo carboxilo es el que da carácter ácido a la molécula — de ahí el nombre "ácido" carboxílico.
```

### 20 — Grupos funcionales y familia orgánica

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "El nombre de la familia de un compuesto orgánico (alcohol, ácido, amina, etc.) se define por su grupo funcional, no por el largo de su cadena de carbono."

explicacion: |
  Correcto. El largo de la cadena cambia el nombre específico (etanol, propanol...) pero la familia (alcohol) la define el grupo -OH presente.
```
