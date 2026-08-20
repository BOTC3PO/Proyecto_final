### 1 — Origen de la capa de ozono
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["ozono", "oxigeno", "fotosintesis"]

respuesta: "oxigeno"
tipo: mc
opciones_explicitas: ["nitrogeno", "oxigeno", "metano", "dióxido de carbono"]

enunciado: "La formación de la capa de ozono en la atmósfera terrestre fue posible gracias a la acumulación de ___ liberado por la fotosíntesis oxigénica."

explicacion: |
  La fotosíntesis oxigénica libera oxígeno molecular (O2). La interacción de este oxígeno con la radiación ultravioleta permite la formación de ozono (O3), el cual constituye la capa protectora de la Tierra.
```

### 2 — Radiación UV y vida
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "basico"
  tags: ["radiacion_uv", "proteccion"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que sin la fotosíntesis oxigénica la radiación ultravioleta no habría afectado la vida terrestre de la misma manera debido a la falta de una capa de ozono?"

explicacion: |
  Correcto. La capa de ozono actúa como un escudo contra la radiación UV. Sin la producción masiva de oxígeno por parte de los organismos fotosintéticos, esta capa no se habría formado.
```

### 3 — Secuencia de eventos atmosféricos
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["secuencia", "evolucion"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1]
tipo: ordenar
opciones_explicitas: [
  ["Fotosíntesis oxigénica", "Acumulación de O2", "Formación de O3 (Ozono)", "Protección UV"],
  ["Acumulación de O2", "Fotosíntesis oxigénica", "Protección UV", "Formación de O3 (Ozono)"]
]

enunciado: "Ordena cronológicamente los procesos que permitieron la protección de la vida terrestre contra la radiación ultravioleta:"

explicacion: |
  El orden correcto es: 1. Fotosíntesis (produce O2) -> 2. Acumulación de O2 en la atmósfera -> 3. Fotólisis del O2 para formar O3 -> 4. Creación de la capa de ozono protectora.
```

### 4 — El papel del oxígeno
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["oxigeno", "ozono"]

respuesta: "O3"
tipo: completar
respuestas_validas: ["O3", "ozono"]

enunciado: "La presencia de oxígeno (O2) en la atmósfera permitió la formación de la molécula de ___ mediante la acción de la radiación solar."

explicacion: |
  El oxígeno molecular (O2) se descompone por la radiación UV para formar átomos de oxígeno libres, que luego se combinan con otros O2 para formar ozono (O3).
```

### 5 — Consecuencia de la ausencia de fotosíntesis
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["radiacion", "consecuencia"]

respuesta: 1
tipo: mc
opciones_explicitas: ["Aumento de la radiación UV en la superficie", "Disminución de la radiación UV en la superficie", "Aumento del efecto invernadero", "Disminución del oxígeno atmosférico"]

enunciado: "Si los organismos fotosintéticos oxigénicos nunca hubieran evolucionado, ¿cuál sería la consecuencia directa sobre la radiación ultravioleta en la superficie terrestre?"

explicacion: |
  Sin la producción de oxígeno, no habría formación de la capa de ozono, lo que resultaría en un aumento letal de la radiación ultravioleta llegando a la superficie.
```