### 1 — El salto de la piedra al metal
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["tecnologia", "prehistoria"]

respuesta: "metalurgia"
tipo: completar
respuestas_validas: ["metalurgia"]

enunciado: "El proceso de extracción y transformación de minerales para obtener metales se denomina ___."

explicacion: |
  La metalurgia permitió la creación de herramientas más duraderas y precisas que las de piedra, marcando el inicio de nuevas eras tecnológicas.
```

### 2 — Propiedades del cobre
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["cobre", "propiedades"]

variables:
  escenario: uno_de([
    ["cobre", "blando", "color rojizo"],
    ["hierro", "duro", "color grisáceo"],
    ["bronce", "aleación", "color amarillento"]
  ])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["cobre", "hierro", "bronce"]

enunciado: "En la Edad del Cobre, este metal se caracterizaba por ser un material ___ y de color ___."

explicacion: |
  El cobre fue uno de los primeros metales utilizados debido a su relativa abundancia y su capacidad para ser moldeado en frío o mediante fundición.
```

### 3 — El proceso de fundición
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "avanzado"
  tags: ["fundicion", "tecnologia"]

respuesta: 1850
tipo: input
tolerancia_abs: 1

enunciado: "Si un fundidor necesita alcanzar una temperatura de 1000 grados para el cobre y requiere un incremento adicional de 850 grados para alcanzar el punto de fusión de una aleación específica, ¿a qué temperatura total debe llegar el horno?"

pasos:
  - "Identificar la temperatura inicial: 1000 grados."
  - "Sumar el incremento necesario: 850 grados."
  - "Calcular el total: 1000 + 850."

explicacion: |
  El control de la temperatura fue el desafío técnico más crítico para los antiguos metalúrgicos, requiriendo hornos cada vez más sofisticados.
```

### 4 — Secuencia de la Edad de los Metales
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["cronologia", "edades"]

respuesta: ["cobre", "bronce", "hierro"]
tipo: ordenar
opciones_explicitas: ["cobre", "bronce", "hierro"]

enunciado: "Ordena cronológicamente las etapas de la Edad de los Metales según su uso predominante en la tecnología de transformación:"

explicacion: |
  La evolución tecnológica fue: primero metales nativos (cobre), luego aleaciones (bronce) y finalmente metales con mayor punto de fusión y dureza (hierro).
```

### 5 — El impacto del hierro
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["hierro", "impacto"]

variables:
  caso: uno_de([
    ["más resistente", "mayor alcance de conquista"],
    ["más blando", "menor expansión territorial"],
    ["más caro", "menor uso en agricultura"]
  ])

respuesta: caso[0]
tipo: mc
opciones_explicitas: ["más resistente", "más blando", "más caro"]

enunciado: "Debido a que el hierro es ___ que el cobre, su uso permitió un ___."

explicacion: |
  La disponibilidad y dureza del hierro permitieron una producción masiva de herramientas y armas, transformando la agricultura y la guerra.
```