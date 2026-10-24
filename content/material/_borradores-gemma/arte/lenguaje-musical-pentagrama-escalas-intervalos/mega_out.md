## Bloque 1

### 1 — El pentagrama
```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["pentagrama", "lineas", "espacios"]

respuesta: 5
tipo: input
tolerancia_abs: 0

enunciado: "El pentagrama está compuesto por ___ líneas horizontales y ___ espacios."

explicacion: |
  El pentagrama es el conjunto de 5 líneas y 4 espacios donde se escribe la música.
```

### 2 — El nombre de las notas
```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["notas", "orden"]

opciones_explicitas: ["Do, Re, Mi, Fa, Sol, La, Si", "Do, Mi, Sol, Si, Re", "Fa, Sol, La, Si, Do, Re, Mi"]
respuesta: "Do, Re, Mi, Fa, Sol, La, Si"
tipo: mc

enunciado: "¿Cuál es el orden ascendente natural de las notas musicales?"

explicacion: |
  El orden estándar de la escala diatónica es Do, Re, Mi, Fa, Sol, La, Si.
```

### 3 — Clave de Sol
```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["claves", "sol"]

respuesta: "Sol"
tipo: completar
respuestas_validas: ["Sol"]

enunciado: "La clave que se utiliza para indicar que la nota situada en la segunda línea del pentagrama es la nota ___."

explicacion: |
  La clave de Sol se dibuja partiendo desde la segunda línea, asignándole ese nombre.
```

### 4 — Líneas adicionales
```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["lineas_adicionales"]

respuesta: verdadero
tipo: vf

enunciado: "¿Se utilizan líneas adicionales para representar notas que están por encima o por debajo del pentagrama?"

explicacion: |
  Correcto. Cuando las notas se salen del rango de las 5 líneas, se usan líneas adicionales.
```

### 5 — El silencio
```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["silencios"]

opciones_explicitas: ["Negra", "Corchea", "Fusa"]
respuesta: "Negra"
tipo: mc

enunciado: "En un pentagrama, el símbolo que representa un silencio de un tiempo (en compás de 4/4) es la ___."

explicacion: |
  El símbolo de la negra representa un tiempo de duración en la música occidental.
```

## Bloque 2

### 6 — Escala Mayor (Estructura)
```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "intermedio"
  tags: ["escala_mayor", "tonos", "semitonos"]

respuesta: [1, 1, 0.5, 1, 1, 1, 0.5]
tipo: completar
respuestas_validas: [[1, 1, 0.5, 1, 1, 1, 0.5]]

enunciado: "La estructura de intervalos de una escala mayor es: Tono, Tono, ____, Tono, Tono, Tono, ____."

explicacion: |
  La escala mayor sigue el patrón: T-T-S-T-T-T-S (donde T=Tono y S=Semitono).
```

### 7 — Identificación de escala
```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "intermedio"
  tags: ["escala_mayor"]

variables:
  idx: uno_de([0, 1])
  datos: [["Do mayor", "Do"], ["Sol mayor", "Fa#"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Do", "Fa#"]

enunciado: "Si una escala tiene un sostenido en la séptima nota, la escala es de ___."

explicacion: |
  La escala de Sol mayor tiene un Fa# para cumplir el patrón de la escala mayor.
```

### 8 — Escala Menor Natural
```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "intermedio"
  tags: ["escala_menor"]

opciones_explicitas: ["Menor", "Mayor", "Aumentada"]
respuesta: "Menor"
tipo: mc

enunciado: "Si comparamos una escala mayor con una escala que tiene la tercera nota disminuida (un semitono más abajo), estamos ante una escala ___."

explicacion: |
  La diferencia fundamental entre escala mayor y menor es la tercera nota.
```

### 9 — El orden de los sostenidos
```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["armadura", "sostenidos"]

opciones_explicitas: ["Fa, Do, Sol, Re, La, Mi, Si"]
respuesta: "Fa, Do, Sol, Re, La, Mi, Si"
tipo: mc

enunciado: "¿Cuál es el orden estándar de aparición de las alteraciones sostenidos en una armadura?"

explicacion: |
  El orden de los sostenidos es siempre Fa, Do, Sol, Re, La, Mi, Si.
```

### 10 — Ciclo de quintas
```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["ciclo_quintas"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "Si subimos una quinta justa desde Do, llegamos a Sol. Si subimos otra quinta desde Sol, ¿cuántos sostenidos tiene la nueva escala (Re mayor)?"

explicacion: |
  La escala de Re mayor tiene un sostenido (Fa#).
```

## Bloque 3

### 11 — Intervalos: Unísono
```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "basico"
  tags: ["unisono"]

respuesta: "Igual"
tipo: completar
respuestas_validas: ["Igual"]

enunciado: "Un intervalo de unísono ocurre cuando dos notas son ___."

explicacion: |
  El unísono es la distancia entre dos notas con la misma frecuencia.
```

### 12 — Intervalos: Octava
```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "basico"
  tags: ["octava"]

opciones_explicitas: ["Do - Do", "Do - Re", "Do - Mi"]
respuesta: "Do - Do"
tipo: mc

enunciado: "¿Cuál de estos pares representa una octava?"

explicacion: |
  La octava es el intervalo entre dos notas con el mismo nombre pero diferente altura.
```

### 13 — Cálculo de distancia (Semitonos)
```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["semitonos", "segunda"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Una segunda mayor (por ejemplo de Do a Re) contiene ___ semitonos."

explicacion: |
  La segunda mayor está compuesta por dos semitonos.
```

### 14 — Quinta Justa
```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["quinta_justa"]

respuesta: "5"
tipo: input
tolerancia_abs: 0

enunciado: "Un intervalo de quinta justa abarca ___ grados de la escala."

explicacion: |
  Se cuenta la nota inicial como el primer grado (Do=1, Re=2, Mi=3, Fa=4, Sol=5).
```

### 15 — Tercera Mayor vs Menor
```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["tercera"]

opciones_explicitas: ["Mayor", "Menor"]
respuesta: "Mayor"
tipo: mc

enunciado: "Un intervalo de Do a Mi es una tercera ___, mientras que de Do a Mi bemol es una tercera ___."

explicacion: |
  La tercera mayor tiene 4 semitonos y la menor tiene 3.
```

## Bloque 4

### 16 — Error: El semitono en piano
```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "basico"
  tags: ["error_comun"]

respuesta: "falso"
tipo: vf

enunciado: "¿Es cierto que entre cualquier par de notas consecutivas en un piano siempre hay un semitono?"

explicacion: |
  Falso. Entre Mi y Fa, o entre Si y Do, hay un semitono, pero entre Do y Re hay un tono.
```

### 17 — Comparación: Tritono
```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "avanzado"
  tags: ["tritono"]

opciones_explicitas: ["Aumentado", "Disminuido"]
respuesta: "Aumentado"
tipo: mc

enunciado: "Un intervalo de cuarta justa que se aumenta en un semitono se convierte en un tritono o cuarta ___."

explicacion: |
  El tritono es un intervalo inestable que puede ser cuarta aumentada o quinta disminuida.
```

### 18 — Contraste: Tono vs Semitono
```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "basico"
  tags: ["tono"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Un tono musical equivale a ___ semitonos."

explicacion: |
  La unidad básica de la escala cromática es el semitono; dos de ellos forman un tono.
```

### 19 — Identificación de intervalo por semitonos
```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["sexta"]

respuesta: 9
tipo: input
tolerancia_abs: 0

enunciado: "Una sexta mayor contiene exactamente ___ semitonos."

explicacion: |
  La sexta mayor (ej. Do a La) tiene 9 semitonos.
```

### 20 — El error de la octava
```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["octava"]

opciones_explicitas: ["7", "8", "9"]
respuesta: "8"
tipo: mc

enunciado: "Si contamos los grados de una octava (incluyendo la nota inicial y la final), ¿cuántos grados hay?"

explicacion: |
  Aunque la distancia es de 7 tonos, el intervalo se llama octava porque abarca 8 notas de la escala.
```

## Bloque 5

### 21 — Escenario: Transposición
```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["transposicion"]

variables:
  idx: uno_de([0, 1])
  datos: [["Do mayor", "Do"], ["Sol mayor", "Sol"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Do", "Sol"]

enunciado: "Si transponemos una escala de Do mayor una quinta justa hacia arriba, la nueva tónica será ___."

explicacion: |
  Una quinta justa desde Do es Sol.
```

### 22 — Escenario: Armadura de clave
```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["armadura"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Si una partitura tiene dos sostenidos en la armadura (Fa# y Do#), ¿en qué escala mayor nos encontramos?"

explicacion: |
  La escala de Re mayor tiene dos sostenidos: Fa# y Do#.
```

### 23 — Escenario: Intervalos en progresión
```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "avanzado"
  tags: ["progresion"]

opciones_explicitas: ["Tono", "Semitono"]
respuesta: "Tono"
tipo: mc

enunciado: "Si una nota sube un semitono y luego vuelve a subir otro semitono, ¿qué intervalo ha recorrido en total?"

explicacion: |
  Dos semitonos equivalen a un tono.
```

### 24 — Escenario: Construcción de escala
```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["escala_menor_armonica"]

respuesta: "La"
tipo: completar
respuestas_validas: ["La"]

enunciado: "En la escala de Do mayor, la nota que está a una sexta mayor es ___."

explicacion: |
  Do(1), Re(2), Mi(3), Fa(4), Sol(5), La(6).
```

### 25 — Escenario: Identificación de error
```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "intermedio"
  tags: ["escala_mayor"]

opciones_explicitas: ["Falso", "Verdadero"]
respuesta: "Falso"
tipo: vf

enunciado: "En una escala mayor, el intervalo entre el IV y el V grado es siempre un semitono."

explicacion: |
  Falso, el intervalo entre el IV y el V grado es un tono.
```