### 1 — Conservación en choques
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["conservacion", "energia", "momento"]

respuesta: "momento_lineal"
tipo: "mc"
opciones_explicitas: ["energia_cinetica", "momento_lineal", "energia_potencial", "impulso"]

enunciado: "En un choque perfectamente inelástico, donde los objetos quedan pegados tras la colisión, ¿qué magnitud física se conserva siempre?"

explicacion: |
  En cualquier sistema donde no actúen fuerzas externas netas, el momento lineal (p = m * v) se conserva. Sin embargo, en choques inelásticos, parte de la energía cinética se transforma en calor o deformación, por lo que la energía cinética NO se conserva.
```

### 2 — El error de la energía cinética
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["energia_cinetica", "choque_elastico"]

respuesta: falso
tipo: "vf"

enunciado: "En un choque perfectamente elástico entre dos partículas, la energía cinética total del sistema se conserva."

explicacion: |
  Por definición, un choque es elástico si la energía cinética del sistema antes del choque es igual a la energía cinética después del choque. Por lo tanto, la afirmación es verdadera.
```

### 3 — Identificación de tipos de choque
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["clasificacion", "energia"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: tabla[escenario_idx][1]
tipo: "completar"
tabla: [
  ["elástico", "elástico"],
  ["inelástico", "inelástico"]
]

enunciado: "Si en una colisión la energía cinética total se reduce tras el impacto, el choque es de tipo ___."

respuestas_validas: ["elástico", "inelástico"]

explicacion: |
  Si hay pérdida de energía cinética (que se transforma en otra forma de energía), el choque es inelástico. Si la energía cinética se mantiene constante, es elástico.
```

### 4 — Análisis de variables
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "avanzado"
  tags: ["conservacion", "leyes"]

respuesta: ["momento_lineal", "energia_cinetica"]
tipo: "ordenar"
opciones_explicitas: ["momento_lineal", "energia_cinetica", "masa_total"]

enunciado: "En un choque perfectamente elástico, ¿qué par de magnitudes se conservan necesariamente?"

explicacion: |
  En un choque elástico se conservan tanto el momento lineal como la energía cinética. La masa total es una propiedad de la materia y no es una magnitud que se "conserve" mediante una ecuación de colisión como las otras dos.
```

### 5 — El caso del choque inelástico
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["energia", "calor"]

respuesta: "se_pierde"
tipo: "mc"
opciones_explicitas: ["se_pierde", "se_conserva", "se_duplica", "no_cambia"]

enunciado: "En un choque inelástico, la energía cinética que no se conserva se transforma principalmente en:"

explicacion: |
  En los choques inelásticos, la energía cinética "perdida" no desaparece, sino que se transforma en energía térmica (calor), energía sonora o trabajo para deformar los cuerpos.
```