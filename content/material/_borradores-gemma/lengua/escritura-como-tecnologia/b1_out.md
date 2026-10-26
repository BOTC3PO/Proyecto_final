### 1 — Naturaleza de la escritura
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "tecnologia"]

tipo: mc
opciones_explicitas: ["Un proceso biológico instintivo", "Un sistema tecnológico inventado", "Una capacidad natural del cerebro", "Un fenómeno meteorológico"]

enunciado: "A diferencia del habla, que es una capacidad biológica natural de la especie humana, la escritura se define como:"

respuesta: "Un sistema tecnológico inventado"

explicacion: |
  La escritura no es una facultad innata como el lenguaje oral; es una tecnología que requiere un aprendizaje cultural y técnico para registrar el pensamiento de forma visual y permanente.
```

### 2 — Diferencia entre habla y escritura
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["habla_vs_escritura", "permanencia"]

tipo: completar
respuestas_validas: ["permanente", "efímero"]

enunciado: "Mientras que el habla es predominantemente ___, la escritura funciona como una tecnología que permite que el mensaje sea ___."

respuesta: ["efímero", "permanente"]

explicacion: |
  El habla es transitoria (se desvanece en el tiempo), mientras que la escritura permite la permanencia del mensaje a través del soporte físico.
```

### 3 — Evolución de soportes
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["soportes", "historia"]

variables:
  escenario: uno_de([
    ["piedra", "cincel"],
    ["papiro", "caña"],
    ["papel", "pluma"],
    ["pantalla", "teclado"]
  ])

tipo: completar
respuestas_validas: ["cincel", "caña", "pluma", "teclado"]

enunciado: "La tecnología de la escritura evoluciona junto a sus soportes. Por ejemplo, si el soporte es {escenario[0]}, la herramienta tradicional es un {escenario[1]}."

respuesta: "cincel"

explicacion: |
  Cada avance en la tecnología de la escritura ha estado ligado a la invención de nuevos soportes y herramientas para grabarlos.
```

### 4 — Características del sistema
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "avanzado"
  tags: ["sistemas_de_signos", "tecnologia"]

tipo: mc
opciones_explicitas: ["Es un sistema de signos arbitrarios", "Es una extensión del pensamiento puro", "Es un reflejo exacto del sonido", "Es un proceso inconsciente"]

enunciado: "Como tecnología de registro, la escritura se basa en un sistema de signos que no es natural, sino ___."

respuesta: "Es un sistema de signos arbitrarios"

explicacion: |
  La relación entre el signo escrito (grafema) y el concepto no es natural, sino una convención social y tecnológica establecida por el sistema de escritura elegido.
```

### 5 — Secuencia de la tecnología escrita
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["procesos", "tecnologia"]

tipo: ordenar
opciones_explicitas: ["Pensamiento", "Codificación visual", "Soporte físico", "Lectura/Interpretación"]

enunciado: "Ordena los componentes de la cadena tecnológica de la escritura, desde la intención hasta la recepción:"

respuesta: ["Pensamiento", "Codificación visual", "Soporte físico", "Lectura/Interpretación"]

explicacion: |
  La escritura requiere un proceso de codificación (convertir pensamiento en signos visuales) sobre un soporte, para que luego otro sujeto pueda decodificarlo.
```