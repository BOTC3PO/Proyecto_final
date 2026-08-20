### 1 — El impacto de la vegetación en el paisaje
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["botanica", "paleoecologia", "ciclo_del_agua"]

variables:
  escenario: uno_de(["bosque_denso", "estepa_abierta"])
  tipo_suelo: uno_de(["suelo_desnudo", "suelo_cubierto"])

enunciado: "Durante la conquista de Tierra Firme, la expansión de la vegetación tipo {escenario} sobre un {tipo_suelo} modificó drásticamente la escorrentía superficial."

opciones_explicitas:
  - "Aumentó la escorrentía"
  - "Disminuyó la escorrentía"
  - "No hubo cambios"

respuesta: "Disminuyó la escorrentía"
tipo: mc

explicacion: |
  La presencia de plantas y la cobertura vegetal actúan como una barrera física que intercepta la lluvia y permite la infiltración en el suelo, reduciendo la velocidad del agua superficial y, por ende, la escorrentía.
```

### 2 — El ciclo del carbono y la biomasa
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "avanzado"
  tags: ["carbono", "fotosintesis", "biomasa"]

variables:
  valor_carbono: random_float(100.0, 500.0)

enunciado: "Si una masa forestal emergente en Tierra Firme secuestra aproximadamente {valor_carbono} unidades de carbono por hectárea, el balance neto de la atmósfera durante este periodo de colonización vegetal fue de un valor ___ (positivo/negativo) en términos de almacenamiento de carbono."

respuestas_validas:
  - "positivo"

respuesta: "positivo"
tipo: completar

explicacion: |
  La colonización de las masas continentales por las plantas permitió un secuestro masivo de CO2 atmosférico en forma de biomasa orgánica, transformando el ciclo del carbono de un estado de equilibrio a uno de almacenamiento neto.
```

### 3 — Secuencia de colonización de ecosistemas
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["ecologia", "sucesion", "animales"]

opciones_explicitas:
  - "Aparición de plantas pioneras"
  - "Estabilización del suelo y ciclo del agua"
  - "Colonización por animales terrestres"

respuesta: ["Aparición de plantas pioneras", "Estabilización del suelo y ciclo del agua", "Colonización por animales terrestres"]
tipo: ordenar

explicacion: |
  La sucesión ecológica comenzó con la colonización de sustratos desnudos por plantas pioneras, lo que permitió la formación de suelos y la regulación hídrica, creando finalmente el hábitat necesario para la fauna terrestre.
```

### 4 — La regulación del ciclo del agua
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "basico"
  tags: ["agua", "evapotranspiracion", "clima"]

enunciado: "El aumento de la cobertura vegetal en Tierra Firme incrementó la tasa de ___ (evapotranspiración/precipitación) hacia la atmósfera, alterando los patrones climáticos locales."

respuestas_validas:
  - "evapotranspiración"

respuesta: "evapotranspiración"
tipo: completar

explicacion: |
  Las plantas no solo retienen agua en el suelo, sino que la devuelven a la atmósfera a través de la transpiración, un proceso clave que regula la humedad atmosférica en los nuevos continentes.
```

### 5 — Preparación del terreno para la fauna
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["fauna", "hábitat", "nutrientes"]

variables:
  factor_clave: uno_de(["nutrientes", "refugio", "alimento"])

enunciado: "La transformación del paisaje mediante la vegetación proporcionó a los animales terrestres un factor crítico para su expansión: {factor_clave}."

opciones_explicitas:
  - "Nutrientes"
  - "Refugio"
  - "Alimento"

respuesta: uno_de(["Nutrientes", "Refugio", "Alimento"])
tipo: mc

explicacion: |
  La vegetación no solo provee alimento, sino que estabiliza el suelo (nutrientes) y crea estructuras físicas para la protección (refugio), permitiendo la diversificación de nichos para la fauna.
```