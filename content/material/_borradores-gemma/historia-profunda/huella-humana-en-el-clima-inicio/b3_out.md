### 1 — El concepto de Antropoceno
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["geologia", "antropoceno", "conceptos"]

tipo: mc
opciones_explicitas: ["Una era de predominio de la vida vegetal", "Una época geológica definida por el impacto humano medible", "Un periodo de estabilidad climática absoluta", "La era de la formación de los continentes"]

enunciado: "El término 'Antropoceno' se utiliza para describir una propuesta de nueva época geológica caracterizada por ___."

explicacion: |
  El Antropoceno propone que la actividad humana se ha convertido en una fuerza geológica dominante, capaz de dejar marcas permanentes en los estratos sedimentarios, el clima y la biodiversidad de la Tierra.
```

### 2 — Evidencias del impacto humano
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["evidencias", "sedimentos", "huella_geologica"]

variables:
  escenario: uno_de([["plásticos y hormigón", "sedimentos artificiales"], ["glaciares", "ciclos de hielo"], ["volcanes", "cenizas volcánicas"]])

tipo: completar
respuestas_validas: ["sedimentos artificiales", "ciclos de hielo", "cenizas volcánicas"]
respuesta: escenario[1]

enunciado: "En el registro geológico del Antropoceno, se busca identificar marcadores como los {escenario[0]} que se consolidan como ___."

explicacion: |
  Los materiales sintéticos como los plásticos, el hormigón y los isótopos radiactivos actúan como 'tecnofósiles' que permiten identificar nuestra era en el futuro.
```

### 3 — Factores de cambio climático
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["clima", "gases_efecto_invernadero"]

tipo: mc
opciones_explicitas: ["Aumento de la radiación solar", "Cambios en la composición de la atmósfera por gases de efecto invernadero", "Desplazamiento de las placas tectónicas", "Variaciones en el campo magnético terrestre"]

enunciado: "Uno de los principales motores del cambio climático en el Antropoceno es la alteración de la atmósfera mediante ___."

explicacion: |
  La quema de combustibles fósiles y la deforestación han incrementado la concentración de gases como el CO2, alterando el balance térmico del planeta.
```

### 4 — La extinción masiva actual
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["biodiversidad", "extinciones"]

variables:
  evento: uno_de([["la sexta extinción masiva", "la era de hielo"], ["la pérdida de biodiversidad", "la expansión de los continentes"]])

tipo: mc
opciones_explicitas: ["la sexta extinción masiva", "la era de hielo", "la expansión de los continentes", "el ciclo de las mareas"]

enunciado: "El Antropoceno se asocia con una crisis biológica sin precedentes conocida como ___."

explicacion: |
  La tasa actual de extinción de especies es significativamente superior a la tasa natural, lo cual es una característica distintiva de la huella humana sobre la biosfera.
```

### 5 — Secuencia de impacto geológico
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["causa_efecto", "procesos"]

tipo: ordenar
opciones_explicitas: ["Emisión masiva de gases de efecto invernadero", "Aumento de la temperatura global", "Alteración de los ciclos biogeoquímicos", "Cambios en la composición de los sedimentos futuros"]

enunciado: "Ordena cronológicamente los procesos que caracterizan la huella humana en la Tierra:"

explicacion: |
  La actividad industrial genera gases, estos alteran el clima, lo que modifica los ciclos naturales (como el del carbono) y finalmente deja una marca física en los sedimentos.
```