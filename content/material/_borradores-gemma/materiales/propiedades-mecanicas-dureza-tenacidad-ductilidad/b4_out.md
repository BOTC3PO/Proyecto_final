### 1 — Diferencia entre dureza y tenacidad
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza", "tenacidad"]

tipo: mc
opciones_explicitas: ["La dureza es la resistencia a la deformación plástica, mientras que la tenacidad es la capacidad de absorber energía antes de la rotura.", "La dureza es la capacidad de absorber energía, mientras que la tenacidad es la resistencia al rayado.", "La dureza mide la elasticidad y la tenacidad mide la plasticidad.", "Ambas son sinónimos en materiales cerámicos."]

enunciado: "Al comparar la dureza con la tenacidad, la distinción fundamental radica en que la dureza mide la resistencia a la ___ superficial, mientras que la tenacidad mide la capacidad de absorber energía antes de la ___."

explicacion: |
  La dureza se refiere a la resistencia de un material a ser penetrado o rayado en su superficie. La tenacidad, en cambio, es la capacidad de un material de absorber energía y deformarse plásticamente antes de romperse.
```

### 2 — Ductilidad vs Fragilidad
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["ductilidad", "fragilidad"]

variables:
  escenario: uno_de([["cobre", "ductil"], ["vidrio", "fragil"]])

tipo: vf
enunciado: "Si un material se comporta como un {escenario[0]}, se dice que posee alta ductilidad, lo que lo distingue de un material {escenario[1]}."

respuesta: escenario[1] == "fragil"

explicacion: |
  Un material dúctil (como el cobre) puede deformarse significativamente bajo tensión antes de fallar. Un material frágil (como el vidrio) se rompe con muy poca deformación plástica.
```

### 3 — El concepto de dureza
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza"]

tipo: completar
respuestas_validas: ["rayado"]

enunciado: "La dureza se define técnicamente como la resistencia que opone un material a la penetración o al ___."

respuesta: "rayado"

explicacion: |
  La dureza es una propiedad superficial que mide la resistencia de un material a la deformación plástica localizada (como un rayado o una hendidura).
```

### 4 — Relación entre dureza y tenacidad
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["dureza", "tenacidad"]

tipo: mc
opciones_explicitas: ["A mayor dureza, generalmente mayor es la tenacidad.", "A mayor dureza, generalmente menor es la tenacidad.", "La dureza y la tenacidad son propiedades idénticas.", "No existe relación entre ambas propiedades."]

enunciado: "En muchos materiales ferrosos, se observa que al aumentar la dureza mediante tratamientos térmicos, la tenacidad tiende a..."

explicacion: |
  Comúnmente existe una relación inversa: los materiales muy duros suelen ser más frágiles (menor tenacidad), mientras que los materiales más blandos suelen ser más tenaces.
```

### 5 — Secuencia de deformación
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["ductilidad", "deformacion"]

tipo: ordenar
opciones_explicitas: ["Deformación elástica", "Deformación plástica", "Rotura del material"]

enunciado: "En un material dúctil, el proceso de deformación mecánica sigue este orden lógico de eventos:"

respuesta: ["Deformación elástica", "Deformación plástica", "Rotura del material"]

explicacion: |
  Primero ocurre la deformación elástica (reversible), luego la deformación plástica (permanente, característica de la ductilidad) y finalmente la fractura o rotura.
```