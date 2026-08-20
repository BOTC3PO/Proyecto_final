### 1 — El origen del conocimiento
```
metadata:
  materia: "filosofia"
  tema: "racionalismo_moderno"
  nivel: "basico"
  tags: ["epistemologia", "razon"]

respuesta: "razon"
tipo: "completar"
respuestas_validas: ["razon"]

enunciado: "Para el racionalismo moderno, la vía principal para alcanzar la verdad y el conocimiento seguro es la ___."

explicacion: |
  El racionalismo sostiene que la capacidad de razonar es la fuente principal de conocimiento, desplazando la autoridad de la tradición o la fe.
```

### 2 — El método deductivo
```
metadata:
  materia: "filosofia"
  tema: "racionalismo_moderno"
  nivel: "intermedio"
  tags: ["metodo", "deduccion"]

variables:
  escenario: uno_de([
    ["El razonamiento parte de principios generales para llegar a conclusiones particulares", "deducción"],
    ["El razonamiento parte de hechos particulares para llegar a leyes generales", "inducción"]
  ])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["El razonamiento parte de principios generales para llegar a conclusiones particulares", "El razonamiento parte de hechos particulares para llegar a leyes generales"]

enunciado: "En el contexto del racionalismo, ¿cuál es la forma de razonamiento que busca la certeza a partir de ideas innatas o principios evidentes?"

explicacion: |
  El racionalismo utiliza el método deductivo, que avanza de lo general (lo evidente) a lo particular.
```

### 3 — René Descartes y la duda
```
metadata:
  materia: "filosofia"
  tema: "racionalismo_moderno"
  nivel: "avanzado"
  tags: ["descartes", "cogito"]

respuesta: "pienso, luego existo"
tipo: "completar"
respuestas_validas: ["pienso, luego existo"]

enunciado: "René Descartes, padre del racionalismo moderno, utilizó la duda metódica para llegar a su primera certeza fundamental: '___'."

explicacion: |
  El "Cogito, ergo sum" establece que el acto de dudar (pensar) es la prueba irrefutable de la existencia del sujeto que piensa.
```

### 4 — Oposición al empirismo
```
metadata:
  materia: "filosofia"
  tema: "racionalismo_moderno"
  nivel: "intermedio"
  tags: ["empirismo", "contraste"]

respuesta: "ideas_innatas"
tipo: "mc"
opciones_explicitas: ["ideas_innatas", "experiencia sensorial", "autoridad religiosa", "intuición mística"]

enunciado: "A diferencia del empirismo, que afirma que la mente es una 'tabula rasa', el racionalismo sostiene la existencia de:"

explicacion: |
  El racionalismo postula que el ser humano posee ideas innatas que no dependen de la experiencia para ser verdaderas.
```

### 5 — Orden lógico del conocimiento
```
metadata:
  materia: "filosofia"
  tema: "racionalismo_moderno"
  nivel: "intermedio"
  tags: ["logica", "metodo"]

respuesta: ["Duda metódica", "Encuentro de una verdad evidente", "Deducción de nuevos conocimientos"]
tipo: "ordenar"
opciones_explicitas: ["Duda metódica", "Encuentro de una verdad evidente", "Deducción de nuevos conocimientos"]

enunciado: "Ordene los pasos del método cartesiano para alcanzar el conocimiento científico:"

explicacion: |
  El método comienza con la duda para limpiar prejuicios, encuentra una verdad indudable (el cogito) y de allí deduce el resto de la realidad.
```