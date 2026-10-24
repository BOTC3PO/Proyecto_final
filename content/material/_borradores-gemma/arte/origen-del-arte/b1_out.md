### 1 — El arte rupestre y el pensamiento simbólico
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["prehistoria", "paleolitico", "simbolismo"]

respuesta: "Paleolítico"
tipo: completar
respuestas_validas: ["Paleolítico"]

enunciado: "El arte rupestre se asocia con la aparición del pensamiento simbólico durante el periodo ___."

explicacion: |
  El paso del pensamiento concreto al simbólico permitió al Homo sapiens representar su realidad en las paredes de las cuevas durante el Paleolítico.
```

### 2 — Manifestaciones del arte rupestre
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["arte_rupestre", "pintura_cavernica"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["animales", "manos"], ["figuras humanas", "herramientas"]]
  respuestas: [["animales", "manos"], ["figuras humanas", "herramientas"]]

enunciado: "En las pinturas rupestres más comunes del Paleolítico, es frecuente encontrar representaciones de {escenarios[escenario_idx][0]} y {escenarios[escenario_idx][1]}."

respuesta: "animales"
tipo: mc
opciones_explicitas: ["animales", "paisajes urbanos", "deidades griegas", "geometría abstracta"]

explicacion: |
  Aunque existen otros elementos, la fauna (bisontes, caballos, ciervos) y las manos (en negativo o positivo) son los motivos predominantes.
```

### 3 — Cronología de la expresión artística
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["cronologia", "prehistoria"]

variables:
  orden_correcta: ["Paleolítico", "Mesolítico", "Neolítico"]

respuesta: ["Paleolítico", "Mesolítico", "Neolítico"]
tipo: ordenar
opciones_explicitas: ["Paleolítico", "Mesolítico", "Neolítico"]

enunciado: "Ordena cronológicamente los periodos de la prehistoria, desde el surgimiento del arte rupestre más temprano hasta el desarrollo de la agricultura:"

explicacion: |
  El arte rupestre surge en el Paleolítico, se mantiene en el Mesolítico y adquiere nuevas formas en el Neolítico con el sedentarismo.
```

### 4 — El valor del símbolo
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["simbolismo", "antropologia"]

respuesta: "verdadero"
tipo: vf

enunciado: "La capacidad de crear arte rupestre implica que el ser humano ya posee la capacidad de abstracción y pensamiento simbólico."

explicacion: |
  El arte no es solo una copia de la realidad, sino una representación que requiere que el individuo pueda pensar en algo que no está presente físicamente.
```

### 5 — Materiales en la prehistoria
```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["tecnologia_prehistorica", "pigmentos"]

variables:
  pigmento_idx: uno_de([0, 1])
  pigmentos: [["óxido de hierro", "azul de ultramar"], ["carbón vegetal", "tinta china"]]
  respuestas: [["óxido de hierro", "azul de ultramar"], ["carbón vegetal", "tinta china"]]

enunciado: "Para realizar sus pinturas, los artistas del Paleolítico utilizaban pigmentos naturales como el {pigmentos[pigmento_idx][0]}."

respuesta: "óxido de hierro"
tipo: mc
opciones_explicitas: ["óxido de hierro", "azul de ultramar", "tinta china", "acrílico"]

explicacion: |
  El uso de minerales como el ocre (óxido de hierro) y el carbón permitió la fijación de colores rojos, negros y amarillos en las paredes de las cuevas.
```