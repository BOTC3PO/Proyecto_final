### 1 — Confusión entre dureza y tenacidad
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza", "tenacidad", "confusiones"]

enunciado: "Un material que es extremadamente duro (como el diamante) no es necesariamente tenaz. La dureza mide la resistencia al ___ mientras que la tenacidad mide la capacidad de absorber energía antes de la ___."

respuestas_validas: ["rayado", "rotura"]
respuesta: ["rayado", "rotura"]
tipo: completar

explicacion: |
  Es un error común pensar que un material duro es resistente a los impactos. La dureza es resistencia superficial al rayado o penetración, mientras que la tenacidad es la energía total que absorbe un material antes de romperse (relacionada con la tenacidad/fragilidad).
```

### 2 — La paradoja de la ductilidad
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["ductilidad", "fragilidad"]

variables:
  es_ductil: verdadero

enunciado: "Si un material se deforma significativamente de manera plástica antes de fallar, se dice que es dúctil. Si se rompe de forma repentina con mínima deformación, el material es considerado ___."

opciones_explicitas: ["dúctil", "frágil", "elástico", "tenaz"]
respuesta: "frágil"
tipo: mc

explicacion: |
  La fragilidad es la propiedad opuesta a la ductilidad. Un material frágil (como el vidrio) no permite deformación plástica significativa antes de la fractura.
```

### 3 — Relación Dureza vs Tenacidad
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["relacion_propiedades"]

enunciado: "¿Es posible que un material sea muy duro y, al mismo tiempo, muy tenaz?"

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Falso"
tipo: vf

explicacion: |
  En la mayoría de los metales, existe una relación inversa: al aumentar la dureza (mediante tratamientos térmicos como la templación), generalmente disminuye la tenacidad (el material se vuelve más frágil).
```

### 4 — Secuencia de deformación
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["deformacion", "ductilidad"]

enunciado: "Ordena los procesos que ocurren en un material dúctil cuando se aplica una carga de tracción progresiva:"

opciones_explicitas: ["Deformación elástica", "Deformación plástica", "Estricción", "Fractura"]
respuesta: ["Deformación elástica", "Deformación plástica", "Estricción", "Fractura"]
tipo: ordenar

explicacion: |
  Primero ocurre la deformación reversible (elástica), luego la permanente (plástica), seguida de la reducción de la sección transversal (estricción) y finalmente la rotura (fractura).
```

### 5 — El error del término "Dureza" en la vida cotidiana
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza", "resistencia"]

variables:
  es_error: verdadero

enunciado: "Si un material resiste muy bien una carga de compresión sin deformarse, pero se raya fácilmente con una lija, ¿es correcto decir que es un material duro? {es_error}"

opciones_explicitas: ["Sí, es correcto", "No, es un error"]
respuesta: "No, es un error"
tipo: mc

explicacion: |
  Confundir resistencia mecánica (capacidad de soportar cargas) con dureza (resistencia al rayado/penetración superficial) es un error conceptual frecuente.
```