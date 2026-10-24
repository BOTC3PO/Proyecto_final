# Biología — Microbiología, virus y sistema inmunitario (cuestionario, 20 preguntas VBLang)

> Tema: `BMICRO`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Naturaleza celular de las bacterias

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["bacterias", "celulas"]

respuesta: verdadero
tipo: vf

enunciado: "Las bacterias son células procariotas."

explicacion: |
  Son organismos unicelulares sin núcleo definido: procariotas.
```

### 2 — Patogenicidad bacteriana

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["bacterias", "salud"]

respuesta: falso
tipo: vf

enunciado: "Todas las bacterias son patógenas y causan enfermedades."

explicacion: |
  Falso. La mayoría son inofensivas o beneficiosas, como la microbiota intestinal.
```

### 3 — Naturaleza celular de los hongos

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["hongos"]

respuesta: verdadero
tipo: vf

enunciado: "Los hongos son células eucariotas."

explicacion: |
  Correcto, tienen núcleo definido.
```

### 4 — Organelos en los hongos

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["hongos", "cloroplastos"]

respuesta: falso
tipo: vf

enunciado: "Los hongos tienen cloroplastos, igual que las plantas."

explicacion: |
  Falso. No hacen fotosíntesis: no tienen cloroplastos.
```

### 5 — Estructura viral básica

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["virus", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "Un virus está compuesto únicamente por material genético envuelto en una cápsula de proteína (cápside)."

explicacion: |
  Correcto, esa es la estructura básica de un virus.
```

### 6 — Metabolismo y organelas

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["virus", "metabolismo"]

respuesta: falso
tipo: vf

enunciado: "Un virus posee organelas y metabolismo propio, igual que una célula."

explicacion: |
  Falso. No tiene ninguna de las dos cosas.
```

### 7 — Reproducción viral

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["virus", "reproduccion"]

respuesta: falso
tipo: vf

enunciado: "Un virus puede reproducirse por sí solo, sin necesitar una célula huésped."

explicacion: |
  Falso, es un parásito intracelular obligado.
```

### 8 — La cápside

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["virus", "estructura"]

respuesta: "capside"
tipo: completar
respuestas_validas:
  - "capside"

enunciado: "La cápsula de proteína que envuelve el material genético del virus se llama ___."

explicacion: |
  Se llama cápside.
```

### 9 — Etapas del ciclo viral

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "intermedio"
  tags: ["virus", "ciclo_viral"]

variables:
  etapas: [["adhesion", "el virus se pega a la celula huesped"], ["inyeccion", "el virus inyecta el material genetico dentro de la celula"], ["secuestro", "el virus usa la maquinaria de la celula para fabricar copias"], ["lisis", "la celula se rompe liberando los virus nuevos"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: etapas[idx][1]
tipo: mc
opciones_explicitas: ["el virus se pega a la celula huesped", "el virus inyecta el material genetico dentro de la celula", "el virus usa la maquinaria de la celula para fabricar copias", "la celula se rompe liberando los virus nuevos"]

enunciado: "¿Qué ocurre en la etapa de {etapas[idx][0]}?"

explicacion: |
  En {etapas[idx][0]}: {etapas[idx][1]}.
```

### 10 — La lisis celular

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["lisis"]

respuesta: verdadero
tipo: vf

enunciado: "En la etapa de lisis, la célula infectada se rompe y libera los virus nuevos."

explicacion: |
  Correcto, es la fase final de liberación de nuevos viriones.
```

### 11 — Maquinaria de traducción viral

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "intermedio"
  tags: ["ribosomas"]

respuesta: falso
tipo: vf

enunciado: "El virus fabrica copias de sí mismo utilizando sus propios ribosomas."

explicacion: |
  Falso. Usa los ribosomas de la célula huésped que secuestró.
```

### 12 — Secuencia del ciclo de infección

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["orden", "ciclo_viral"]

respuesta: "adhesion, inyeccion, secuestro, lisis"
tipo: mc
opciones_explicitas: ["adhesion, inyeccion, secuestro, lisis", "inyeccion, adhesion, secuestro, lisis", "adhesion, secuestro, inyeccion, lisis"]

enunciado: "¿Cuál es el orden cronológico correcto del ciclo de infección viral?"

explicacion: |
  Adhesión → inyección → secuestro (replicación) → lisis (liberación).
```

### 13 — Defensa inmunitaria inespecífica

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["sistema_inmunitario"]

respuesta: "inespecifica/innata"
tipo: mc
opciones_explicitas: ["inespecifica/innata", "especifica/adaptativa", "ninguna", "ambas por igual"]

enunciado: "La defensa que actúa contra cualquier invasor, sin importar cuál sea, se llama..."

explicacion: |
  Es la inmunidad innata: responde igual ante cualquier agente extraño.
```

### 14 — Anticuerpos y especificidad

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["anticuerpos"]

respuesta: verdadero
tipo: vf

enunciado: "La defensa específica produce anticuerpos hechos a medida para un invasor particular."

explicacion: |
  Correcto, la inmunidad adaptativa genera anticuerpos específicos.
```

### 15 — Barreras físicas

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["barreras"]

respuesta: verdadero
tipo: vf

enunciado: "La piel y las mucosas son ejemplos de defensa inespecífica."

explicacion: |
  Correcto, son barreras físicas generales.
```

### 16 — Memoria inmunitaria

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["memoria_inmunitaria"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema inmunitario 'recuerda' a un invasor después de una infección, respondiendo más rápido la segunda vez."

explicacion: |
  Correcto, es la base de la inmunidad adaptativa.
```

### 17 — Mecanismo de las vacunas

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["vacunas"]

respuesta: verdadero
tipo: vf

enunciado: "Una vacuna expone al cuerpo a una versión debilitada o fragmento del patógeno, para que el sistema inmunitario aprenda a reconocerlo."

explicacion: |
  Correcto, sin causar la enfermedad real.
```

### 18 — Fiebre como respuesta inmune

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "intermedio"
  tags: ["defensa_inespecifica"]

respuesta: verdadero
tipo: vf

enunciado: "La fiebre es una respuesta de defensa inespecífica: el cuerpo sube su temperatura para dificultar la reproducción de muchos patógenos."

explicacion: |
  Correcto, es parte de la inmunidad innata.
```

### 19 — Fagocitosis

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "intermedio"
  tags: ["fagocitosis", "defensa_inespecifica"]

respuesta: "engullen y destruyen invasores, sin importar cuáles sean"
tipo: mc
opciones_explicitas: ["engullen y destruyen invasores, sin importar cuáles sean", "sólo atacan a un invasor específico ya conocido", "producen anticuerpos a medida", "sólo actúan en la piel"]

enunciado: "¿Qué hacen los glóbulos blancos que realizan fagocitosis, como parte de la defensa inespecífica?"

explicacion: |
  "Comen" (engullen) cualquier invasor que encuentren, sin distinguir cuál es específicamente.
```

### 20 — Por qué las vacunas no enferman

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "avanzado"
  tags: ["vacunas", "aplicacion"]

respuesta: falso
tipo: vf

enunciado: "Las vacunas siempre usan el patógeno completo y activo, exactamente igual al que causa la enfermedad real."

explicacion: |
  Falso. Usan una versión debilitada, inactivada, o sólo un fragmento (como una proteína de la superficie) — suficiente para que el sistema inmunitario aprenda, sin causar la enfermedad.
```
