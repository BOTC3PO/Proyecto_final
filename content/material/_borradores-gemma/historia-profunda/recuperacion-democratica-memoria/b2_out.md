### 1 — El hito del Juicio a las Juntas
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["juicio_a_las_juntas", "derechos_humanos", "argentina"]

respuesta: "Juicio a las Juntas"
tipo: completar
respuestas_validas: ["Juicio a las Juntas"]

enunciado: "El proceso judicial histórico llevado a cabo en 1985 para juzgar a los máximos responsables de la dictadura militar argentina se conoce como el ___."

explicacion: |
  El Juicio a las Juntas fue un hito mundial, siendo la primera vez que un tribunal civil juzgó a las cúpulas militares de su propio país por delitos de lesa humanidad.
```

### 2 — El rol del Poder Judicial
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "justicia"]

variables:
  tipo_tribunal: uno_de(["civil", "militar"])

respuesta: "civil"
tipo: mc
opciones_explicitas: ["civil", "militar"]

enunciado: "A diferencia de otros procesos de transición, el juicio de 1985 fue llevado a cabo por un tribunal de carácter {tipo_tribunal}."

explicacion: |
  La naturaleza civil del tribunal fue fundamental para consolidar la supremacía de la Constitución y el Estado de Derecho sobre el poder militar.
```

### 3 — Delitos juzgados
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["delitos", "terrorismo_de_estado"]

respuesta: ["terrorismo de Estado", "secuestro", "tortura", "homicidio"]
tipo: ordenar
opciones_explicitas: ["terrorismo de Estado", "secuestro", "tortura", "homicidio"]

enunciado: "Ordene de lo más general a lo más específico los conceptos que definen la naturaleza de los crímenes juzgados:"

explicacion: |
  El juicio condenó a los responsables por la planificación y ejecución de un sistema de terrorismo de Estado que se manifestó a través de secuestros, torturas y homicidios.
```

### 4 --- El contexto de la sentencia
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["contexto", "democracia"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [["el proceso fue un éxito para la democracia", "se consideró un paso fundamental"], ["la sentencia fue un desafío legal", "fue un hito para la región"]]

respuesta: datos[caso_idx][1]
tipo: mc
opciones_explicitas: ["el proceso fue un éxito para la democracia", "se consideró un paso fundamental", "la sentencia fue un desafío legal", "fue un hito para la región"]

enunciado: "Considerando el impacto histórico, {datos[caso_idx][0]}."

explicacion: |
  El Juicio a las Juntas permitió que la sociedad argentina comenzara a procesar el pasado reciente a través de las instituciones democráticas.
```

### 5 --- Consecuencia de la sentencia
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["consecuencias", "memoria"]

respuesta: true
tipo: vf

enunciado: "¿El Juicio a las Juntas fue un hecho inédito en la región latinoamericana de su época?"

explicacion: |
  Sí, fue un evento único en la región, ya que la mayoría de los países con dictaduras militares no habían sometido a sus jefes militares a tribunales civiles tras el retorno a la democracia.
```