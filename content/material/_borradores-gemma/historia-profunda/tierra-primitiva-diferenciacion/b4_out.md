### 1 — El origen de la Luna
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["astronomia", "teoria", "luna"]

respuesta: "Theia"
tipo: mc
opciones_explicitas: ["Theia", "Gaia", "Venus", "Mars"]

enunciado: "Según la hipótesis del Gran Impacto, la Luna se formó tras la colisión de la Tierra primitiva con un protoplaneta llamado _______."

explicacion: |
  La hipótesis del Gran Impacto sugiere que un objeto del tamaño de Marte, denominado Theia, colisionó con la Tierra, dejando un anillo de escombros que eventualmente se consolidó para formar la Luna.
```

### 2 — Dinámica de la colisión
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["fisica", "colision", "teoria"]

variables:
  escenario: uno_de([
    ["un objeto masivo", "aumentó la rotación", "creó un disco de escombros"],
    ["un objeto pequeño", "no alteró la órbita", "no generó escombros"],
    ["un objeto gaseoso", "enfrió el núcleo", "disipó la atmósfera"]
  ])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["aumentó la rotación", "no alteró la órbita", "enfrió el núcleo"]
idx: uno_de([0, 1, 2])

enunciado: "En el escenario de una colisión con un objeto de gran masa, la energía cinética transferida _______."

explicacion: |
  Una colisión de tal magnitud no solo habría aportado masa, sino que habría transferido una cantidad enorme de energía angular, afectando la velocidad de rotación de la Tierra primitiva.
```

### 3 — Composición de la Luna
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["quimica", "isótopos", "luna"]

respuesta: "muy similar"
tipo: mc
opciones_explicitas: ["muy similar", "completamente distinta", "mucho más densa", "sin hierro"]

enunciado: "Una de las pruebas de la hipótesis del Gran Impacto es que la composición isotópica de los silicatos lunares es _______ a la de la Tierra."

explicacion: |
  La similitud isotópica entre la Tierra y la Luna es un desafío para algunas versiones de la teoría, pero sugiere que la Luna se formó a partir de material que ya estaba mezclado con el manto terrestre.
```

### 4 — Secuencia de eventos
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["procesos", "secuencia", "formacion"]

respuesta: ["Colisión de Theia", "Formación de disco de escombros", "Acreción de la Luna"]
tipo: ordenar
opciones_explicitas: ["Colisión de Theia", "Formación de disco de escombros", "Acreción de la Luna"]

enunciado: "Ordena cronológicamente los eventos que llevaron a la formación del sistema Tierra-Luna según la hipótesis del Gran Impacto:"

explicacion: |
  Primero ocurre el impacto, luego el material expulsado forma un anillo o disco alrededor de la Tierra, y finalmente la gravedad hace que ese material se agrupe para formar la Luna.
```

### 5 — Consecuencias térmicas
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["termica", "magma", "oceano"]

respuesta: 1200.0
tipo: input
tolerancia_abs: 100.0

enunciado: "Si la energía del impacto fue suficiente para fundir gran parte del manto, la Tierra habría estado cubierta por un océano de magma. Si estimamos que la temperatura de fusión media fue de 1200 °C, ¿cuántos Kelvin (K) representa esto aproximadamente? (Usa la fórmula K = C + 273.15)"

pasos:
  - "Identificar la temperatura en Celsius: 1200"
  - "Sumar la constante de conversión: 1200 + 273.15"

explicacion: |
  La colisión habría generado temperaturas extremas, transformando la superficie terrestre en un océano de roca fundida (magma) durante un periodo prolongado.
```